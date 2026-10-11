import express, { type Request, type Response } from 'express';
import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { INITIAL_PLAYERS, getPlayersForGameMode, TEAMS_SQUADS_2026, buildAuctionPool, randomizePoolBySets } from './src/data/playersData.ts';
import { calculateRetentionCosts } from './src/data/auctionData.ts';
import { IPL_TEAMS, INITIAL_PURSE_MEGA, INITIAL_PURSE_MINI, INITIAL_PURSE_CLEAN } from './src/data/teamsData.ts';
import type { AuctionRoomState, IPLTeam, Player, TeamId, UserProfile, BidEntry, RTMState, ChatMessage, RoomParticipant, MiniAuctionCycleRecord } from './src/types/auction.ts';
import { validateBid, getNextBidAmount, MIN_BASE_PRICE, calculateSquadRating } from './src/utils/auctionCalculations.ts';
import { getStructuredAuctionSets, buildAuthoritativeRandomizedQueue, OFFICIAL_42_SETS_CONFIG } from './src/data/auctionSetsData.ts';
import { GoogleGenAI } from '@google/genai';
import { evaluateSquadsAlgorithmic } from './src/utils/aiSquadEvaluator.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

app.use(express.json());

// Structured Event Logger for Multiplayer Auction Debugging
function logEvent(
  eventType:
    | 'ROOM_CREATED'
    | 'PARTICIPANT_JOINED'
    | 'PARTICIPANT_RECONNECTED'
    | 'PARTICIPANT_DISCONNECTED'
    | 'PARTICIPANT_LEFT'
    | 'TEAM_SELECTED'
    | 'TEAM_RELEASED'
    | 'AUCTION_STARTED'
    | 'AUCTION_STATE_SYNC'
    | 'BID_PLACED'
    | 'PLAYER_SOLD'
    | 'PLAYER_UNSOLD'
    | 'PLAYER_SKIPPED'
    | 'AUCTION_ENDED'
    | 'HOST_TRANSFERRED',
  data: {
    roomId: string;
    uid?: string;
    [key: string]: any;
  }
) {
  const payload = {
    ...data,
    event: eventType,
    uid: data.uid || 'system',
    timestamp: Date.now(),
  };
  console.log(`[AUCTION_EVENT][${eventType}]`, JSON.stringify(payload));
}

// In-memory Room State
const rooms = new Map<string, AuctionRoomState>();
const roomSockets = new Map<string, Set<WebSocket>>();
const socketMetadata = new Map<WebSocket, { roomId: string; userId: string; role: string; teamId?: TeamId }>();
const roomIntervals = new Map<string, NodeJS.Timeout>();
const autoProgressionTimeouts = new Map<string, NodeJS.Timeout>();
const rtmTimeouts = new Map<string, NodeJS.Timeout>();
const roomSettledPlayerIds = new Map<string, Set<string>>();

function updateRoomSetProgress(room: AuctionRoomState) {
  if (!room.currentPlayer) {
    room.currentSetNumber = null;
    room.currentSetCode = null;
    room.currentSetPlayerIndex = 0;
    room.currentSetTotal = 0;
    return;
  }
  const setNo = room.currentPlayer.setNumber || room.currentPlayer.setNo || 1;
  const setCode = room.currentPlayer.setCode || room.currentPlayer.currentSet || 'BA1';
  room.currentSetNumber = setNo;
  room.currentSetCode = setCode;

  const setPlayers = room.players.filter((p) => (p.setNumber === setNo || p.setNo === setNo));
  room.currentSetTotal = setPlayers.length;

  const currentSetIdx = setPlayers.findIndex((p) => p.id === room.currentPlayer?.id);
  room.currentSetPlayerIndex = currentSetIdx >= 0 ? currentSetIdx + 1 : 1;
}

function getSanitizedRoom(room: AuctionRoomState): AuctionRoomState {
  const leanBidHistory = (room.bidHistory || []).slice(0, 50);
  if (room.stage === 'LIVE' && !room.playerPoolVisible) {
    // Hide future upcoming players' identities from the payload so nobody can inspect network payload
    const sanitizedPlayers = room.players.map((p) => {
      if (
        p.id === room.currentPlayer?.id ||
        p.status === 'SOLD' ||
        p.status === 'UNSOLD' ||
        p.status === 'SKIPPED' ||
        p.status === 'RETAINED'
      ) {
        return p;
      }
      return {
        id: p.id,
        status: 'UPCOMING',
        setNumber: p.setNumber,
        setNo: p.setNo,
        setCode: p.setCode,
        name: 'Upcoming Player',
        basePrice: p.basePrice,
      } as Player;
    });

    return {
      ...room,
      bidHistory: leanBidHistory,
      players: sanitizedPlayers,
    };
  }
  return {
    ...room,
    bidHistory: leanBidHistory,
  };
}

function clearAutoProgression(roomId: string) {
  if (autoProgressionTimeouts.has(roomId)) {
    clearTimeout(autoProgressionTimeouts.get(roomId)!);
    autoProgressionTimeouts.delete(roomId);
  }
}

function clearRtmTimeout(roomId: string) {
  if (rtmTimeouts.has(roomId)) {
    clearTimeout(rtmTimeouts.get(roomId)!);
    rtmTimeouts.delete(roomId);
  }
}

function handleRtmStepTimeout(roomId: string, step: string) {
  const room = rooms.get(roomId);
  if (!room || !room.rtmState || !room.rtmState.active || room.auctionPaused) return;
  if (room.rtmState.step !== step) return;

  const { previousTeamId, originalWinningTeamId, originalBid, counterBid } = room.rtmState;
  const prevTeam = room.teams[previousTeamId];
  const winTeam = room.teams[originalWinningTeamId];

  if (step === 'AWAITING_RTM_DECISION') {
    // Former team timed out -> auto-decline RTM, sold to original winning team
    const bidEntry: BidEntry = {
      id: `rtm-dec-${Date.now()}`,
      teamId: previousTeamId,
      teamName: prevTeam ? prevTeam.name : previousTeamId,
      amount: originalBid,
      timestamp: Date.now(),
      type: 'RTM_DECLINED',
      note: `${prevTeam ? prevTeam.name : previousTeamId} timed out on RTM decision (declined).`,
    };
    room.bidHistory.unshift(bidEntry);
    clearRtmTimeout(roomId);
    finalizePlayerSale(roomId, originalWinningTeamId, originalBid, false);
  } else if (step === 'AWAITING_COUNTER_BID') {
    // Original winner timed out on raising bid -> keep original bid and advance to final match step
    const finalCounter = originalBid;
    room.rtmState.counterBid = finalCounter;
    room.rtmState.step = 'AWAITING_FINAL_MATCH';
    room.rtmState.timestamp = Date.now();

    const bidEntry: BidEntry = {
      id: `rtm-raise-${Date.now()}`,
      teamId: originalWinningTeamId,
      teamName: winTeam ? winTeam.name : originalWinningTeamId,
      amount: finalCounter,
      timestamp: Date.now(),
      type: 'RTM_COUNTER_BID',
      note: `${winTeam ? winTeam.name : originalWinningTeamId} kept bid at ₹${finalCounter >= 100 ? (finalCounter / 100).toFixed(2) + ' Cr' : finalCounter + ' Lakh'}. Does ${prevTeam ? prevTeam.name : previousTeamId} match?`,
    };
    room.bidHistory.unshift(bidEntry);

    scheduleRtmStepTimeout(roomId, 'AWAITING_FINAL_MATCH', 12000);
    broadcastToRoom(roomId, {
      type: 'RTM_FINAL_STEP',
      payload: { rtmState: room.rtmState, room },
    });
  } else if (step === 'AWAITING_FINAL_MATCH') {
    // Former team timed out on final match -> decline match, sold to original winner at counter price
    clearRtmTimeout(roomId);
    const finalPrice = counterBid || originalBid;
    finalizePlayerSale(roomId, originalWinningTeamId, finalPrice, false);
  }
}

function scheduleRtmStepTimeout(roomId: string, step: string, delayMs = 12000) {
  clearRtmTimeout(roomId);
  const room = rooms.get(roomId);
  if (room && room.auctionPaused) {
    if (room.rtmState) {
      room.rtmState.remainingMs = delayMs;
    }
    return;
  }
  const timeout = setTimeout(() => {
    handleRtmStepTimeout(roomId, step);
  }, delayMs);
  rtmTimeouts.set(roomId, timeout);
}

function scheduleAutoNextPlayer(roomId: string, delayMs = 2000) {
  clearAutoProgression(roomId);
  const room = rooms.get(roomId);
  if (room && room.auctionPaused) {
    room.pendingAutoProgression = true;
    return;
  }

  const timeout = setTimeout(() => {
    executeNextPlayerProgression(roomId);
  }, delayMs);

  autoProgressionTimeouts.set(roomId, timeout);
}

function executeNextPlayerProgression(roomId: string) {
  const room = rooms.get(roomId);
  if (!room || room.stage === 'ENDED' || room.auctionPaused) return;

  const currentSetNo = room.currentPlayer?.setNo;
  const currentSetName = room.currentPlayer?.setName || room.currentPlayer?.set;

  // Find next UPCOMING player
  let nextIndex = room.currentPlayerIndex + 1;
  while (nextIndex < room.players.length && room.players[nextIndex].status !== 'UPCOMING') {
    nextIndex++;
  }

  if (nextIndex < room.players.length) {
    const nextPlayer = room.players[nextIndex];
    const isNewSet = currentSetNo !== undefined && nextPlayer.setNo !== undefined && nextPlayer.setNo !== currentSetNo;

    if (isNewSet) {
      // 12. AUTOMATIC SET PROGRESSION: Broadcast SET_COMPLETED transition
      broadcastToRoom(roomId, {
        type: 'SET_COMPLETED',
        payload: {
          completedSet: currentSetName,
          nextSet: nextPlayer.setName || nextPlayer.set,
          nextSetNo: nextPlayer.setNo,
          message: `${currentSetName} Complete! Up Next: ${nextPlayer.setName || nextPlayer.set}`,
          room,
        },
      });

      // 2.5-second transition animation before first player of next set starts automatically
      setTimeout(() => {
        loadPlayerAtIndex(roomId, nextIndex);
      }, 2500);
      return;
    }

    loadPlayerAtIndex(roomId, nextIndex);
  } else {
    // Check if there are unsold players for Accelerated Round
    const hasUnsold = room.players.some((p) => p.status === 'UNSOLD');
    if (hasUnsold) {
      room.stage = 'ACCELERATED';
      room.timerRunning = false;
      broadcastToRoom(roomId, {
        type: 'STAGE_CHANGED',
        payload: { stage: 'ACCELERATED', message: 'All sets complete! Entering Accelerated Round for Unsold Players.', room },
      });
    } else {
      room.stage = 'LEADERBOARD';
      room.timerRunning = false;
      broadcastToRoom(roomId, {
        type: 'STAGE_CHANGED',
        payload: { stage: 'LEADERBOARD', message: 'Auction Complete! View Final Squad Leaderboard.', room },
      });
    }
  }
}

function loadPlayerAtIndex(roomId: string, index: number) {
  const room = rooms.get(roomId);
  if (!room || index >= room.players.length) return;

  room.currentPlayerIndex = index;
  room.currentPlayer = room.players[index];
  room.currentBid = 0;
  room.leadingTeamId = null;
  room.finalWinnerTeamId = null;
  room.timer = 10;
  room.timerDuration = 10000;
  room.timerStartedAt = Date.now();
  room.timerRunning = true;
  room.hammerStage = 0;
  room.rtmState = null;

  // Server-Authoritative RTM Calculation based strictly on active participating human managers
  const activeManagedTeamIds = (room.participants || [])
    .filter((p) => !!p.teamId)
    .map((p) => p.teamId as TeamId);
  room.activeTeamIds = activeManagedTeamIds;

  const originalTeam = room.currentPlayer?.previousTeam as TeamId | undefined;
  const isOriginalTeamManaged = !!(originalTeam && activeManagedTeamIds.includes(originalTeam));
  const prevTeamObj = originalTeam ? room.teams[originalTeam] : null;
  const hasRtmRemaining = !!(prevTeamObj && prevTeamObj.rtmCardsRemaining > 0);

  room.rtmAvailable = room.gameMode === 'MEGA' && isOriginalTeamManaged && hasRtmRemaining;
  room.rtmTeamId = room.rtmAvailable && originalTeam ? originalTeam : null;

  if (room.auctionState) {
    room.auctionState.rtmAvailable = room.rtmAvailable;
    room.auctionState.rtmTeamId = room.rtmTeamId;
  }

  updateRoomSetProgress(room);

  broadcastToRoom(roomId, {
    type: 'NEXT_PLAYER_LOADED',
    payload: {
      currentPlayer: room.currentPlayer,
      currentIndex: room.currentPlayerIndex,
      room,
    },
  });
}

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function broadcastToRoom(roomId: string, message: { type: string; payload: any }) {
  const sockets = roomSockets.get(roomId);
  if (!sockets) return;

  let finalPayload = message.payload;
  if (finalPayload && typeof finalPayload === 'object' && 'room' in finalPayload && finalPayload.room) {
    finalPayload = {
      ...finalPayload,
      room: getSanitizedRoom(finalPayload.room),
    };
  } else if (message.type === 'ROOM_STATE_SYNC') {
    finalPayload = getSanitizedRoom(finalPayload);
  }

  const data = JSON.stringify({ type: message.type, payload: finalPayload });
  for (const client of sockets) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  }
}

function createNewRoom(hostUser: UserProfile, gameMode: 'MEGA' | 'MINI' | 'CLEAN_SLATE'): AuctionRoomState {
  const roomId = generateRoomCode();
  const roomCode = roomId;

  // Clone teams
  const teams: Record<TeamId, IPLTeam> = JSON.parse(JSON.stringify(IPL_TEAMS));
  const initialPurse = gameMode === 'MEGA' ? INITIAL_PURSE_MEGA : gameMode === 'MINI' ? INITIAL_PURSE_MINI : INITIAL_PURSE_CLEAN;

  for (const tid of Object.keys(teams) as TeamId[]) {
    teams[tid].initialPurse = initialPurse;
    teams[tid].purse = initialPurse;
    teams[tid].rtmCardsRemaining = gameMode === 'MEGA' ? 6 : 0;
    teams[tid].totalRtmsAllowed = gameMode === 'MEGA' ? 6 : 0;
    teams[tid].squad = [];
    teams[tid].isConnected = false;
    teams[tid].isActive = false; // Only active when explicitly claimed by an authenticated participant
    teams[tid].ownerUserId = undefined;
    teams[tid].ownerName = undefined;
    teams[tid].ownerAvatar = undefined;
  }

  // If host selected a specific team
  if (hostUser.selectedTeamId && teams[hostUser.selectedTeamId]) {
    teams[hostUser.selectedTeamId].isConnected = true;
    teams[hostUser.selectedTeamId].ownerUserId = hostUser.id;
    teams[hostUser.selectedTeamId].ownerName = hostUser.name;
    teams[hostUser.selectedTeamId].ownerAvatar = hostUser.avatar;
    teams[hostUser.selectedTeamId].isActive = true;
  }

  // Authoritative host participant
  const hostParticipant: RoomParticipant = {
    uid: hostUser.id,
    displayName: hostUser.name || 'Host',
    email: hostUser.email || '',
    photoURL: hostUser.avatar || '',
    teamId: hostUser.selectedTeamId || null,
    teamShortName: hostUser.selectedTeamId ? teams[hostUser.selectedTeamId]?.shortName : null,
    isHost: true,
    joinedAt: Date.now(),
    connectionStatus: 'connected',
  };

  // Clone canonical players for room lobby
  const players: Player[] = buildAuctionPool({ gameMode, excludeRetained: false, randomizeSets: false });
  const firstUpcomingIdx = players.findIndex((p) => p.status === 'UPCOMING');
  const initialIndex = firstUpcomingIdx >= 0 ? firstUpcomingIdx : 0;

  const room: AuctionRoomState = {
    roomId,
    roomCode,
    hostUid: hostUser.id,
    hostUserId: hostUser.id,
    hostName: hostUser.name,
    gameMode,
    stage: 'LOBBY',
    status: 'LOBBY',
    participants: [hostParticipant],
    selectedTeams: hostUser.selectedTeamId
      ? [
          {
            uid: hostUser.id,
            teamId: hostUser.selectedTeamId,
            teamName: teams[hostUser.selectedTeamId]?.name || hostUser.selectedTeamId,
          },
        ]
      : [],
    auctionOrder: [],
    auctionState: {
      status: 'LOBBY',
      currentPlayer: null,
      currentPlayerIndex: initialIndex,
      currentSet: null,
      currentBid: 0,
      highestBidderUid: null,
      highestBidderTeamId: null,
      timerStartedAt: null,
      timerDuration: 10000,
    },
    playerPoolVisible: true,
    currentSetNumber: null,
    currentSetCode: null,
    currentSetPlayerIndex: 0,
    currentSetTotal: 0,
    players,
    currentPlayerIndex: initialIndex,
    currentPlayer: players[initialIndex] || null,
    currentBid: 0,
    leadingTeamId: null,
    bidHistory: [],
    chatMessages: [],
    timer: 10,
    timerRunning: false,
    timerStartedAt: null,
    timerDuration: 10000,
    hammerStage: 0,
    rtmState: null,
    teams,
    activeTeamIds: (Object.keys(teams) as TeamId[]).filter((tid) => !!teams[tid].ownerUserId),
    acceleratedRoundNominatedIds: [],
    playingXIs: {} as Record<TeamId, any>,
    miniAuctionCycle: gameMode === 'MINI' ? 1 : undefined,
    miniAuctionCycleId: gameMode === 'MINI' ? `${roomId}-cycle-1` : undefined,
    pastCycles: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  rooms.set(roomId.toUpperCase(), room);
  roomSockets.set(roomId.toUpperCase(), new Set());

  // Setup Authoritative Room Clock
  setupRoomTimer(roomId);

  persistRoomToDisk(roomId.toUpperCase());

  logEvent('ROOM_CREATED', { roomId, uid: hostUser.id, gameMode });

  return room;
}

function handleParticipantLeave(roomId: string, userId: string): AuctionRoomState | null {
  const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';
  const room = rooms.get(cleanRoomId);
  if (!room) return null;

  const isBeforeAuction = room.stage === 'LOBBY' || room.stage === 'RETENTION';

  // 1. Remove from participants
  room.participants = (room.participants || []).filter((p) => p.uid !== userId);

  // 2. Before auction starts: release their selected team completely
  if (isBeforeAuction) {
    for (const [tid, team] of Object.entries(room.teams) as [TeamId, IPLTeam][]) {
      if (team.ownerUserId === userId) {
        team.ownerUserId = undefined;
        team.ownerName = undefined;
        team.ownerAvatar = undefined;
        team.isConnected = false;
        team.isActive = false;
        logEvent('TEAM_RELEASED', { roomId: room.roomId, uid: userId, teamId: tid });
      }
    }
    room.activeTeamIds = (Object.keys(room.teams) as TeamId[]).filter((tid) => !!room.teams[tid].ownerUserId);
  } else {
    for (const [tid, team] of Object.entries(room.teams) as [TeamId, IPLTeam][]) {
      if (team.ownerUserId === userId) {
        team.isConnected = false;
      }
    }
  }

  // 3. Safe Host Transfer: If leaving user is the Host, transfer host to next eligible participant
  if (room.hostUid === userId || room.hostUserId === userId) {
    const nextHost = room.participants.find((p) => p.connectionStatus === 'connected') || room.participants[0];
    if (nextHost) {
      nextHost.isHost = true;
      room.hostUid = nextHost.uid;
      room.hostUserId = nextHost.uid;
      room.hostName = nextHost.displayName;
      logEvent('HOST_TRANSFERRED', { roomId: room.roomId, nextHostUid: nextHost.uid, previousHostUid: userId });
    }
  }

  room.selectedTeams = room.participants
    .filter((p) => !!p.teamId)
    .map((p) => ({
      uid: p.uid,
      teamId: p.teamId!,
      teamName: room.teams[p.teamId!]?.name || p.teamId!,
    }));

  room.updatedAt = Date.now();
  logEvent('PARTICIPANT_LEFT', { roomId: room.roomId, uid: userId });

  broadcastToRoom(cleanRoomId, {
    type: 'USER_LEFT',
    payload: { userId, room, teams: room.teams, participants: room.participants, selectedTeams: room.selectedTeams },
  });

  return room;
}

function setupRoomTimer(roomId: string) {
  if (roomIntervals.has(roomId)) {
    clearInterval(roomIntervals.get(roomId)!);
  }

  const interval = setInterval(() => {
    const room = rooms.get(roomId);
    if (!room || !room.timerRunning || room.auctionPaused || (room.stage !== 'LIVE' && room.stage !== 'ACCELERATED')) {
      return;
    }

    if (room.rtmState && room.rtmState.active) {
      // Don't auto-tick down while RTM decision is pending
      return;
    }

    const now = Date.now();
    const startedAt = room.timerStartedAt || now;
    const duration = room.timerDuration || 10000;
    const elapsed = now - startedAt;
    const remaining = Math.max(0, Math.ceil((duration - elapsed) / 1000));
    room.timer = remaining;

    if (remaining > 0) {
      broadcastToRoom(roomId, {
        type: 'TIMER_TICK',
        payload: {
          timer: room.timer,
          hammerStage: room.hammerStage,
          timerStartedAt: room.timerStartedAt,
          timerDuration: room.timerDuration,
          serverNow: now,
        },
      });
    } else {
      // Timer hit 0! Check for valid bids
      const hasValidBid = (room.currentBid > 0 && !!room.leadingTeamId);

      if (!hasValidBid) {
        // ZERO VALID BIDS RECEIVED: Mark UNSOLD immediately (Required flow: ACTIVE -> TIMER EXPIRED -> CHECK BIDS -> NO BIDS -> UNSOLD -> WAIT 2s -> NEXT PLAYER)
        handlePlayerUnsold(roomId);
        return;
      }

      // VALID BIDS EXIST: Progress through server-authoritative countdown sequence:
      // GOING ONCE (2s) -> GOING TWICE (2s) -> GOING THRICE (2s) -> SOLD / RTM
      if (room.hammerStage === 0) {
        // Step 1: GOING ONCE -> 2 seconds
        room.hammerStage = 1;
        room.timer = 2;
        room.timerDuration = 2000;
        room.timerStartedAt = Date.now();
        broadcastToRoom(roomId, {
          type: 'HAMMER_STEP',
          payload: { hammerStage: 1, message: 'GOING ONCE', timer: 2, timerDuration: 2000, timerStartedAt: room.timerStartedAt },
        });
      } else if (room.hammerStage === 1) {
        // Step 2: GOING TWICE -> 2 seconds
        room.hammerStage = 2;
        room.timer = 2;
        room.timerDuration = 2000;
        room.timerStartedAt = Date.now();
        broadcastToRoom(roomId, {
          type: 'HAMMER_STEP',
          payload: { hammerStage: 2, message: 'GOING TWICE', timer: 2, timerDuration: 2000, timerStartedAt: room.timerStartedAt },
        });
      } else if (room.hammerStage === 2) {
        // Step 3: GOING THRICE -> 2 seconds
        room.hammerStage = 3;
        room.timer = 2;
        room.timerDuration = 2000;
        room.timerStartedAt = Date.now();
        broadcastToRoom(roomId, {
          type: 'HAMMER_STEP',
          payload: { hammerStage: 3, message: 'GOING THRICE', timer: 2, timerDuration: 2000, timerStartedAt: room.timerStartedAt },
        });
      } else if (room.hammerStage === 3) {
        // Step 4: Sold or RTM decision
        room.hammerStage = 4;
        handleHammerFinalize(roomId);
      }
    }
  }, 1000);

  roomIntervals.set(roomId, interval);
}

// Local Persistent Storage Directory & Atomic File Persistence
const ROOMS_DIR = path.join(process.cwd(), 'data', 'rooms');
if (!fs.existsSync(ROOMS_DIR)) {
  try {
    fs.mkdirSync(ROOMS_DIR, { recursive: true });
  } catch (err) {
    console.warn('[PERSISTENCE] Could not create rooms directory:', err);
  }
}

function persistRoomToDisk(roomId: string) {
  try {
    const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';
    const room = rooms.get(cleanRoomId);
    if (!room) return;

    if (!fs.existsSync(ROOMS_DIR)) {
      fs.mkdirSync(ROOMS_DIR, { recursive: true });
    }

    const filePath = path.join(ROOMS_DIR, `${cleanRoomId}.json`);
    const tempPath = path.join(ROOMS_DIR, `${cleanRoomId}.tmp`);
    fs.writeFileSync(tempPath, JSON.stringify(room), 'utf8');
    fs.renameSync(tempPath, filePath);
  } catch (err) {
    console.error(`[PERSISTENCE] Error saving room ${roomId} to disk:`, err);
  }
}

function loadPersistedRooms() {
  try {
    if (!fs.existsSync(ROOMS_DIR)) return;
    const files = fs.readdirSync(ROOMS_DIR);
    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(ROOMS_DIR, file);
        const data = fs.readFileSync(filePath, 'utf8');
        const room: AuctionRoomState = JSON.parse(data);
        if (room && room.roomId) {
          const cleanRoomId = room.roomId.toUpperCase().trim();
          if (room.auctionPaused) {
            room.timerRunning = false;
          }
          rooms.set(cleanRoomId, room);
          if (!roomSockets.has(cleanRoomId)) {
            roomSockets.set(cleanRoomId, new Set());
          }
          setupRoomTimer(cleanRoomId);
          console.log(`[PERSISTENCE] Successfully restored room ${cleanRoomId} (Stage: ${room.stage}, Paused: ${!!room.auctionPaused}, Player: ${room.currentPlayer?.name || 'none'})`);
        }
      }
    }
  } catch (err) {
    console.error('[PERSISTENCE] Error loading persisted rooms:', err);
  }
}

function handleRoomPauseToggle(
  roomId: string,
  requestingUserId?: string,
  requestingRole?: string,
  explicitAction?: 'PAUSE' | 'RESUME'
): { success: boolean; room?: AuctionRoomState; error?: string } {
  const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';
  const room = rooms.get(cleanRoomId);
  if (!room) {
    return { success: false, error: 'Room not found' };
  }

  // Authorization: HOST role or room owner
  const participant = room.participants?.find((p) => p.uid === requestingUserId);
  const isOwner =
    (room.hostUserId === requestingUserId) ||
    (room.hostUid === requestingUserId) ||
    (room.participants?.find((p) => p.isHost)?.uid === requestingUserId);
  const isHostRole =
    requestingRole === 'HOST' ||
    (participant as any)?.role === 'HOST' ||
    (participant as any)?.isHost;

  if (!isOwner && !isHostRole) {
    return { success: false, error: 'Unauthorized: Only the host or room owner can control auction pause/resume.' };
  }

  // Determine target state idempotently
  let willPause: boolean;
  if (explicitAction === 'PAUSE') {
    willPause = true;
  } else if (explicitAction === 'RESUME') {
    willPause = false;
  } else {
    willPause = !room.auctionPaused;
  }

  // If already in target state, broadcast current state and return idempotently
  if (room.auctionPaused === willPause) {
    broadcastToRoom(cleanRoomId, {
      type: 'AUCTION_PAUSED_STATE_CHANGED',
      payload: {
        auctionPaused: room.auctionPaused,
        timer: room.timer,
        timerRunning: room.timerRunning,
        hammerStage: room.hammerStage,
        room,
      },
    });
    return { success: true, room };
  }

  room.auctionPaused = willPause;

  if (willPause) {
    // 1. FREEZE ALL AUCTION TIMERS
    room.timerRunning = false;
    const now = Date.now();
    const elapsed = now - (room.timerStartedAt || now);
    const duration = room.timerDuration || 10000;
    const remainingMs = Math.max(1000, duration - elapsed);
    room.timerDuration = remainingMs;
    room.timerStartedAt = now;
    room.timer = Math.ceil(remainingMs / 1000);

    // 2. FREEZE AUTOMATIC PLAYER PROGRESSION
    if (autoProgressionTimeouts.has(cleanRoomId)) {
      clearTimeout(autoProgressionTimeouts.get(cleanRoomId)!);
      autoProgressionTimeouts.delete(cleanRoomId);
      room.pendingAutoProgression = true;
    }

    // 3. FREEZE RTM COUNTDOWN
    if (room.rtmState && room.rtmState.active) {
      clearRtmTimeout(cleanRoomId);
      const rtmElapsed = now - (room.rtmState.timestamp || now);
      const rtmRemaining = Math.max(1000, 12000 - rtmElapsed);
      room.rtmState.remainingMs = rtmRemaining;
    }
  } else {
    // RESUME EXACT SAVED STATE
    if (room.stage === 'LIVE' || room.stage === 'ACCELERATED') {
      room.timerRunning = true;
      room.timerStartedAt = Date.now();
    }

    // Resume pending auto progression if was waiting
    if (room.pendingAutoProgression) {
      room.pendingAutoProgression = false;
      scheduleAutoNextPlayer(cleanRoomId, 1500);
    }

    // Resume pending RTM countdown if active
    if (room.rtmState && room.rtmState.active) {
      const resumeDelay = room.rtmState.remainingMs || 10000;
      room.rtmState.timestamp = Date.now();
      scheduleRtmStepTimeout(cleanRoomId, room.rtmState.step, resumeDelay);
    }
  }

  const pauseEntry: BidEntry = {
    id: `pause-${Date.now()}`,
    teamId: '' as any,
    teamName: 'Host Action',
    amount: room.currentBid,
    timestamp: Date.now(),
    type: 'AUCTION_ENDED',
    note: willPause ? 'Auction paused by Host.' : 'Auction resumed by Host.',
  };
  room.bidHistory.unshift(pauseEntry);
  room.updatedAt = Date.now();

  // Persist to disk atomically
  persistRoomToDisk(cleanRoomId);

  // Broadcast lightweight updates
  broadcastToRoom(cleanRoomId, {
    type: 'AUCTION_PAUSED_STATE_CHANGED',
    payload: {
      auctionPaused: room.auctionPaused,
      timer: room.timer,
      timerRunning: room.timerRunning,
      hammerStage: room.hammerStage,
      room,
    },
  });
  broadcastToRoom(cleanRoomId, {
    type: 'TIMER_SYNC',
    payload: {
      timer: room.timer,
      timerRunning: room.timerRunning,
      hammerStage: room.hammerStage,
      auctionPaused: room.auctionPaused,
    },
  });

  return { success: true, room };
}

function handlePlayerUnsold(roomId: string) {
  const room = rooms.get(roomId);
  if (!room || !room.currentPlayer) return;

  clearRtmTimeout(roomId);

  const player = room.currentPlayer;

  // Concurrency & idempotency guard: prevent duplicate settlement
  if (player.status === 'SOLD' || player.status === 'UNSOLD' || player.status === 'SKIPPED') {
    return;
  }
  let settledSet = roomSettledPlayerIds.get(roomId);
  if (!settledSet) {
    settledSet = new Set<string>();
    roomSettledPlayerIds.set(roomId, settledSet);
  }
  if (settledSet.has(player.id)) {
    return;
  }
  settledSet.add(player.id);

  // Mark player as UNSOLD
  player.status = 'UNSOLD';
  player.soldTo = undefined;
  player.soldPrice = undefined;
  player.wasRTMUsed = false;

  room.timerRunning = false;
  room.timer = 0;
  room.hammerStage = 4;
  room.leadingTeamId = null;
  room.currentBid = 0;
  room.rtmState = null;

  if (room.auctionState) {
    room.auctionState.currentBid = 0;
    room.auctionState.highestBidderUid = null;
    room.auctionState.highestBidderTeamId = null;
    room.auctionState.status = 'LIVE';
  }

  const bidEntry: BidEntry = {
    id: `unsold-${Date.now()}`,
    teamId: '' as any,
    teamName: 'Auctioneer',
    amount: 0,
    timestamp: Date.now(),
    type: 'UNSOLD',
    note: `${player.name} goes UNSOLD — No bids received at base price ₹${player.basePrice >= 100 ? (player.basePrice / 100).toFixed(2) + ' Cr' : player.basePrice + ' Lakhs'}.`,
  };
  room.bidHistory.unshift(bidEntry);

  logEvent('PLAYER_UNSOLD', {
    roomId,
    playerId: player.id,
    playerName: player.name,
    basePrice: player.basePrice,
  });

  // Broadcast to all participants through PLAYER_UNSOLD
  broadcastToRoom(roomId, {
    type: 'PLAYER_UNSOLD',
    payload: {
      player,
      reason: 'No bids received',
      room,
    },
  });

  persistRoomToDisk(roomId);

  // Automatically advance to next player after 2 seconds (No host click required)
  scheduleAutoNextPlayer(roomId, 2000);
}

function handleHammerFinalize(roomId: string) {
  const room = rooms.get(roomId);
  if (!room || !room.currentPlayer) return;

  const player = room.currentPlayer;

  if (room.currentBid > 0 && room.leadingTeamId) {
    const winningTeamId = room.leadingTeamId;
    const prevTeamId = player.previousTeam as TeamId;

    // Check if RTM can be exercised (Mega Auction rule)
    const activeManagedTeamIds = (room.participants || [])
      .filter((p) => !!p.teamId)
      .map((p) => p.teamId as TeamId);
    const isPrevTeamManaged = !!(prevTeamId && activeManagedTeamIds.includes(prevTeamId));
    const prevTeam = room.teams[prevTeamId];
    const canUseRTM =
      room.gameMode === 'MEGA' &&
      isPrevTeamManaged &&
      prevTeam &&
      prevTeamId !== winningTeamId &&
      prevTeam.rtmCardsRemaining > 0 &&
      player.status === 'UPCOMING';

    if (canUseRTM && prevTeam.purse >= room.currentBid + (Math.max(0, 18 - (prevTeam.squad.length + 1)) * MIN_BASE_PRICE)) {
      // Trigger RTM prompt!
      room.timerRunning = false;
      room.rtmState = {
        active: true,
        player,
        originalWinningTeamId: winningTeamId,
        originalBid: room.currentBid,
        previousTeamId: prevTeamId,
        step: 'AWAITING_RTM_DECISION',
        timestamp: Date.now(),
      };

      const bidEntry: BidEntry = {
        id: `rtm-${Date.now()}`,
        teamId: prevTeamId,
        teamName: prevTeam.name,
        amount: room.currentBid,
        timestamp: Date.now(),
        type: 'RTM_TRIGGERED',
        note: `RTM Card Option triggered for ${prevTeam.name}!`,
      };
      room.bidHistory.unshift(bidEntry);

      scheduleRtmStepTimeout(roomId, 'AWAITING_RTM_DECISION', 12000);

      broadcastToRoom(roomId, {
        type: 'RTM_PROMPT',
        payload: { rtmState: room.rtmState, room },
      });
      return;
    }

    // Direct SOLD to winning team
    finalizePlayerSale(roomId, winningTeamId, room.currentBid, false);
  } else {
    // Zero valid bids -> UNSOLD
    handlePlayerUnsold(roomId);
  }
}

function finalizePlayerSale(roomId: string, winningTeamId: TeamId, finalPrice: number, wasRTMUsed: boolean) {
  const room = rooms.get(roomId);
  if (!room || !room.currentPlayer) return;

  clearRtmTimeout(roomId);

  const player = room.currentPlayer;

  // Concurrency & idempotency guard: prevent duplicate settlement
  if (player.status === 'SOLD' || player.status === 'UNSOLD' || player.status === 'SKIPPED') {
    return;
  }
  let settledSet = roomSettledPlayerIds.get(roomId);
  if (!settledSet) {
    settledSet = new Set<string>();
    roomSettledPlayerIds.set(roomId, settledSet);
  }
  if (settledSet.has(player.id)) {
    return;
  }
  settledSet.add(player.id);

  const team = room.teams[winningTeamId];

  player.status = 'SOLD';
  player.soldTo = winningTeamId;
  player.finalWinnerTeamId = winningTeamId;
  player.soldPrice = finalPrice;
  player.wasRTMUsed = wasRTMUsed;

  // Deduct team purse and add player to squad
  team.purse -= finalPrice;
  team.squad.push({ ...player });

  if (wasRTMUsed) {
    team.rtmCardsRemaining = Math.max(0, team.rtmCardsRemaining - 1);
  }

  room.timerRunning = false;
  room.timer = 0;
  room.hammerStage = 4;
  room.rtmState = null;
  room.leadingTeamId = winningTeamId;
  room.finalWinnerTeamId = winningTeamId;

  if (room.auctionState) {
    room.auctionState.status = 'LIVE';
  }

  const bidEntry: BidEntry = {
    id: `sold-${Date.now()}`,
    teamId: winningTeamId,
    teamName: team.name,
    amount: finalPrice,
    timestamp: Date.now(),
    type: 'SOLD',
    note: `SOLD to ${team.name} for ₹${finalPrice >= 100 ? (finalPrice / 100).toFixed(2) + ' Cr' : finalPrice + ' Lakh'}!${wasRTMUsed ? ' (via RTM twist)' : ''}`,
  };
  room.bidHistory.unshift(bidEntry);

  logEvent('PLAYER_SOLD', {
    roomId,
    playerId: player.id,
    playerName: player.name,
    winningTeam: winningTeamId,
    finalPrice,
  });

  broadcastToRoom(roomId, {
    type: 'PLAYER_SOLD',
    payload: {
      player,
      teamId: winningTeamId,
      finalWinnerTeamId: winningTeamId,
      amount: finalPrice,
      finalPrice,
      wasRTMUsed,
      room,
    },
  });

  persistRoomToDisk(roomId);

  // Automatically advance to next player after 2 seconds
  scheduleAutoNextPlayer(roomId, 2000);
}

function startNextMiniAuctionCycle(room: AuctionRoomState): boolean {
  if (room.gameMode !== 'MINI') return false;

  const currentCycleNumber = room.miniAuctionCycle || 1;
  const currentSquadsCopy: Record<TeamId, Player[]> = JSON.parse(
    JSON.stringify(
      Object.fromEntries(
        (Object.keys(room.teams) as TeamId[]).map((tid) => [tid, room.teams[tid].squad || []])
      )
    )
  );

  const teamRatingsMap = {} as Record<TeamId, any>;
  for (const tid of Object.keys(room.teams) as TeamId[]) {
    const t = room.teams[tid];
    const metrics = calculateSquadRating(t);
    teamRatingsMap[tid] = {
      overallScore: metrics.totalRating,
      squadSize: t.squad.length,
      overseasCount: t.squad.filter((p) => p.isOverseas).length,
      starPlayer: metrics.starPlayer?.name || null,
      balanceScore: metrics.balanceScore,
      battingScore: metrics.battingScore,
      bowlingScore: metrics.bowlingScore,
    };
  }

  const cycleRecord: MiniAuctionCycleRecord = {
    cycleNumber: currentCycleNumber,
    cycleId: room.miniAuctionCycleId || `${room.roomId}-cycle-${currentCycleNumber}`,
    completedAt: Date.now(),
    finalSquads: currentSquadsCopy,
    teamRatings: teamRatingsMap,
    purchases: (room.bidHistory || [])
      .filter((b) => b.type === 'SOLD')
      .map((b) => ({
        playerId: (b as any).playerId || b.id,
        playerName: (b as any).playerName || (b as any).player?.name || 'Player',
        teamId: b.teamId,
        amount: b.amount,
        wasRTM: !!(b as any).wasRTM,
      })),
  };

  if (!room.pastCycles) room.pastCycles = [];
  room.pastCycles.push(cycleRecord);

  // Advance cycle
  const nextCycle = currentCycleNumber + 1;
  room.miniAuctionCycle = nextCycle;
  room.miniAuctionCycleId = `${room.roomId}-cycle-${nextCycle}`;

  // Reset each active franchise's purse to 120 Cr for new cycle
  for (const tid of Object.keys(room.teams) as TeamId[]) {
    const team = room.teams[tid];
    team.initialPurse = INITIAL_PURSE_MINI;
    team.purse = INITIAL_PURSE_MINI;
    team.rtmCardsRemaining = 0;
    team.totalRtmsAllowed = 6;
    // Keep their previous squad intact, mark players as UPCOMING (awaiting retention selection)
    if (team.squad) {
      team.squad = team.squad.map((p) => ({
        ...p,
        status: 'UPCOMING' as const,
        previousTeam: tid,
      }));
    }
  }

  // Clear room auction state for retention phase
  clearAutoProgression(room.roomId);
  roomSettledPlayerIds.delete(room.roomId);
  room.stage = 'RETENTION';
  room.status = 'RETENTION';
  room.playingXIs = {} as any;
  room.bidHistory = [];
  room.currentPlayer = null;
  room.currentPlayerIndex = 0;
  room.currentBid = 0;
  room.leadingTeamId = null;
  room.finalWinnerTeamId = null;
  room.hammerStage = 0;
  room.rtmState = null;
  room.timer = 10;
  room.timerRunning = false;
  room.endedByHost = false;
  room.endedAt = undefined;
  room.updatedAt = Date.now();

  logEvent('AUCTION_STARTED', {
    roomId: room.roomId,
    cycle: nextCycle,
    stage: 'RETENTION',
  });

  broadcastToRoom(room.roomId, {
    type: 'STAGE_CHANGED',
    payload: { stage: 'RETENTION', room },
  });

  persistRoomToDisk(room.roomId);

  return true;
}

function executeStartAuction(room: AuctionRoomState, teamIds?: TeamId[]) {
  const activeTeams = teamIds && teamIds.length > 0 ? teamIds : (room.participants || []).map((p) => p.teamId as TeamId).filter(Boolean);
  room.activeTeamIds = activeTeams;
  for (const tid of Object.keys(room.teams) as TeamId[]) {
    room.teams[tid].isActive = activeTeams.includes(tid) || !!room.teams[tid].ownerUserId;
  }

  // Exclude retained players from live bidding pool
  const isMiniCycle2Plus = room.gameMode === 'MINI' && (room.miniAuctionCycle || 1) >= 2;
  const retainedIds = new Set<string>();
  for (const tid of Object.keys(room.teams) as TeamId[]) {
    for (const sp of room.teams[tid].squad) {
      if (sp.status === 'RETAINED') {
        retainedIds.add(String(sp.id).toLowerCase().trim());
        if (sp.playerId) retainedIds.add(String(sp.playerId).toLowerCase().trim());
      }
    }
  }

  const baseMasterPool = buildAuctionPool({ gameMode: room.gameMode, excludeRetained: false, randomizeSets: false });
  const masterMap = new Map(baseMasterPool.map((p) => [p.id, p]));
  for (const p of room.players) {
    if (p.previousTeam) {
      const masterP = masterMap.get(p.id);
      if (masterP) masterP.previousTeam = p.previousTeam;
    }
  }

  const sourceList = isMiniCycle2Plus ? Array.from(masterMap.values()) : room.players;
  const eligiblePool = sourceList.filter((p) => {
    const pId = String(p.id).toLowerCase().trim();
    const pPlayerId = String(p.playerId || '').toLowerCase().trim();
    return !retainedIds.has(pId) && !retainedIds.has(pPlayerId) && p.status !== 'RETAINED';
  }).map((p) => ({
    ...p,
    status: 'UPCOMING' as const,
  }));

  // Set-wise randomization: preserves Set 1 -> Set 42 order, randomizes within each set
  room.players = randomizePoolBySets(eligiblePool);

  // Generate auction order ONCE and store immutably
  room.auctionOrder = room.players.map((p) => p.id);

  room.stage = 'LIVE';
  room.status = 'LIVE';
  room.playerPoolVisible = false;

  const firstUpcoming = room.players.findIndex((p) => p.status === 'UPCOMING');
  const initialIdx = firstUpcoming >= 0 ? firstUpcoming : 0;
  room.currentPlayerIndex = initialIdx;
  room.currentPlayer = room.players[initialIdx] || null;

  room.currentBid = room.currentPlayer ? room.currentPlayer.basePrice : 0;
  room.leadingTeamId = null;
  room.hammerStage = 0;
  room.timer = 10;
  room.timerDuration = 10000;
  room.timerStartedAt = Date.now();
  room.timerRunning = true;
  room.updatedAt = Date.now();

  room.auctionState = {
    status: 'LIVE',
    currentPlayer: room.currentPlayer,
    currentPlayerIndex: room.currentPlayerIndex,
    currentSet: room.currentPlayer ? (room.currentPlayer.setCode || room.currentPlayer.currentSet || 'BA1') : null,
    currentBid: room.currentBid,
    highestBidderUid: null,
    highestBidderTeamId: null,
    timerStartedAt: room.timerStartedAt,
    timerDuration: 10000,
  };

  updateRoomSetProgress(room);

  logEvent('AUCTION_STARTED', {
    roomId: room.roomId,
    uid: room.hostUid,
    participantsCount: room.participants?.length || 0,
    activeTeams: room.activeTeamIds,
  });

  broadcastToRoom(room.roomId, {
    type: 'AUCTION_STARTED',
    payload: { stage: 'LIVE', status: 'LIVE', room },
  });

  persistRoomToDisk(room.roomId);
}

// WebSocket Server
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (rawData: string) => {
    try {
      const { type, payload } = JSON.parse(rawData.toString());

      if (type === 'JOIN_ROOM') {
        const { roomId, user } = payload as { roomId: string; user: UserProfile };
        const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';
        let room = rooms.get(cleanRoomId);

        // If joining default demo room
        if (!room && cleanRoomId === 'IPL2026') {
          room = createNewRoom(user, 'MEGA');
        }

        if (!room) {
          ws.send(JSON.stringify({ type: 'ERROR', payload: { message: `Room ${cleanRoomId || roomId} not found!` } }));
          return;
        }

        // Room security: prevent new strangers from joining active bidding sessions if not already a member
        const isExistingMember =
          room.hostUid === user.id ||
          room.hostUserId === user.id ||
          (room.participants && room.participants.some((p) => p.uid === user.id)) ||
          (Object.values(room.teams) as IPLTeam[]).some((t) => t.ownerUserId === user.id);

        if (!isExistingMember && (room.stage === 'LIVE' || room.stage === 'ACCELERATED')) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'The auction has already started in this room. New entries are restricted.' },
          }));
          return;
        }

        let sockets = roomSockets.get(room.roomId);
        if (!sockets) {
          sockets = new Set();
          roomSockets.set(room.roomId, sockets);
        }
        sockets.add(ws);

        // Track user socket metadata
        socketMetadata.set(ws, { roomId: room.roomId, userId: user.id, role: user.role, teamId: user.selectedTeamId });

        if (!room.participants) {
          room.participants = [];
        }

        const isHost = user.id === room.hostUid || user.id === room.hostUserId;
        let participant = room.participants.find((p) => p.uid === user.id);

        if (participant) {
          participant.connectionStatus = 'connected';
          participant.displayName = user.name || participant.displayName;
          participant.email = user.email || participant.email;
          participant.photoURL = user.avatar || participant.photoURL;
          if (isHost) participant.isHost = true;
          logEvent('PARTICIPANT_RECONNECTED', { roomId: room.roomId, uid: user.id });
        } else {
          participant = {
            uid: user.id,
            displayName: user.name || 'Bidder',
            email: user.email || '',
            photoURL: user.avatar || '',
            teamId: user.selectedTeamId || null,
            teamShortName: user.selectedTeamId ? room.teams[user.selectedTeamId]?.shortName : null,
            isHost,
            joinedAt: Date.now(),
            connectionStatus: 'connected',
          };
          room.participants.push(participant);
          logEvent('PARTICIPANT_JOINED', { roomId: room.roomId, uid: user.id, name: user.name });
        }

        // Restore team connection on reconnect
        const userClaimedTeamId =
          participant.teamId ||
          user.selectedTeamId ||
          ((Object.entries(room.teams) as [TeamId, IPLTeam][]).find(([, t]) => t.ownerUserId === user.id)?.[0]);

        if (userClaimedTeamId && room.teams[userClaimedTeamId]) {
          const t = room.teams[userClaimedTeamId];
          t.ownerUserId = user.id;
          t.ownerName = user.name || t.ownerName;
          t.ownerAvatar = user.avatar || t.ownerAvatar;
          t.isConnected = true;
          t.isActive = true;
          participant.teamId = userClaimedTeamId;
          participant.teamShortName = t.shortName;
          if (!room.activeTeamIds) room.activeTeamIds = [];
          if (!room.activeTeamIds.includes(userClaimedTeamId)) room.activeTeamIds.push(userClaimedTeamId);
          const meta = socketMetadata.get(ws);
          if (meta) meta.teamId = userClaimedTeamId;
        }

        for (const tid of Object.keys(room.teams) as TeamId[]) {
          const t = room.teams[tid];
          if (t.ownerUserId === user.id) {
            t.isConnected = true;
            t.isActive = true;
            participant.teamId = tid;
            participant.teamShortName = t.shortName;
            if (!room.activeTeamIds) room.activeTeamIds = [];
            if (!room.activeTeamIds.includes(tid)) room.activeTeamIds.push(tid);
            const meta = socketMetadata.get(ws);
            if (meta) meta.teamId = tid;
          }
        }

        // If user requested a team in lobby and it is available, claim it
        if (room.stage === 'LOBBY' && user.selectedTeamId && room.teams[user.selectedTeamId]) {
          const targetTeam = room.teams[user.selectedTeamId];
          const isClaimedByOther = room.participants.some(
            (p) => p.uid !== user.id && p.teamId === user.selectedTeamId
          );
          if ((!targetTeam.ownerUserId || targetTeam.ownerUserId === user.id) && !isClaimedByOther) {
            targetTeam.isConnected = true;
            targetTeam.ownerUserId = user.id;
            targetTeam.ownerName = user.name;
            targetTeam.ownerAvatar = user.avatar;
            targetTeam.isActive = true;
            participant.teamId = user.selectedTeamId;
            participant.teamShortName = targetTeam.shortName;
          }
        }

        room.selectedTeams = room.participants
          .filter((p) => !!p.teamId)
          .map((p) => ({
            uid: p.uid,
            teamId: p.teamId!,
            teamName: room.teams[p.teamId!]?.name || p.teamId!,
          }));

        room.updatedAt = Date.now();

        // Send authoritative room state directly to connecting client
        ws.send(JSON.stringify({ type: 'ROOM_STATE_SYNC', payload: getSanitizedRoom(room) }));

        // Notify other participants with lightweight user joined payload
        broadcastToRoom(room.roomId, {
          type: 'USER_JOINED',
          payload: { user, participants: room.participants, teams: room.teams, selectedTeams: room.selectedTeams },
        });
      }

      if (type === 'SELECT_TEAM') {
        const { roomId, teamId, user } = payload as { roomId: string; teamId: TeamId; user: UserProfile };
        const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';
        const room = rooms.get(cleanRoomId);
        if (!room || !room.teams[teamId]) return;

        // Stage validation
        if (room.stage !== 'LOBBY' && room.status !== 'LOBBY') {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Teams cannot be changed once the auction has started.' },
          }));
          return;
        }

        // Prevent selecting another owner's team atomically
        const targetTeam = room.teams[teamId];
        const currentOwner = (room.participants || []).find(
          (p) => p.uid !== user.id && p.teamId === teamId
        );
        if ((targetTeam.ownerUserId && targetTeam.ownerUserId !== user.id) || currentOwner) {
          const ownerName = currentOwner ? currentOwner.displayName : targetTeam.ownerName || 'another player';
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: `Team ${targetTeam.name} is already claimed by ${ownerName}.` },
          }));
          return;
        }

        // Prevent duplicate membership: release any previously claimed team by this same user
        for (const [tid, t] of Object.entries(room.teams) as [TeamId, IPLTeam][]) {
          if (tid !== teamId && t.ownerUserId === user.id) {
            t.ownerUserId = undefined;
            t.ownerName = undefined;
            t.ownerAvatar = undefined;
            t.isConnected = false;
            t.isActive = false;
            logEvent('TEAM_RELEASED', { roomId: room.roomId, uid: user.id, teamId: tid });
          }
        }

        targetTeam.isConnected = true;
        targetTeam.ownerUserId = user.id;
        targetTeam.ownerName = user.name;
        targetTeam.ownerAvatar = user.avatar;
        targetTeam.isActive = true;

        if (!room.participants) room.participants = [];
        let participant = room.participants.find((p) => p.uid === user.id);
        if (!participant) {
          participant = {
            uid: user.id,
            displayName: user.name,
            email: user.email || '',
            photoURL: user.avatar || '',
            teamId,
            teamShortName: targetTeam.shortName,
            isHost: user.id === room.hostUid || user.id === room.hostUserId,
            joinedAt: Date.now(),
            connectionStatus: 'connected',
          };
          room.participants.push(participant);
        } else {
          participant.teamId = teamId;
          participant.teamShortName = targetTeam.shortName;
        }

        room.selectedTeams = room.participants
          .filter((p) => !!p.teamId)
          .map((p) => ({
            uid: p.uid,
            teamId: p.teamId!,
            teamName: room.teams[p.teamId!]?.name || p.teamId!,
          }));

        room.updatedAt = Date.now();
        logEvent('TEAM_SELECTED', { roomId: room.roomId, uid: user.id, teamId });

        const meta = socketMetadata.get(ws);
        if (meta) meta.teamId = teamId;

        broadcastToRoom(room.roomId, {
          type: 'TEAM_UPDATED',
          payload: { teamId, team: targetTeam, teams: room.teams, participants: room.participants, selectedTeams: room.selectedTeams, room },
        });
      }

      if (type === 'LEAVE_ROOM') {
        const { roomId, userId } = payload as { roomId: string; userId: string };
        const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';

        // Unified participant leave
        handleParticipantLeave(cleanRoomId, userId);

        // Remove socket from room
        const sockets = roomSockets.get(cleanRoomId);
        if (sockets) {
          sockets.delete(ws);
        }
        socketMetadata.delete(ws);

        ws.send(JSON.stringify({
          type: 'ROOM_LEFT',
          payload: { success: true },
        }));
      }

      if (type === 'START_AUCTION') {
        const { roomId, userId } = payload as { roomId: string; userId?: string };
        const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';
        const room = rooms.get(cleanRoomId);
        if (!room) return;

        // 1. Idempotency validation (Allow starting from LOBBY or RETENTION)
        if (room.stage !== 'LOBBY' && room.status !== 'LOBBY' && room.stage !== 'RETENTION' && room.status !== 'RETENTION') {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Auction has already started in this room.' },
          }));
          return;
        }

        // 2. Host authorization
        const meta = socketMetadata.get(ws);
        const effectiveUserId = userId || meta?.userId;
        const isOwner = effectiveUserId === room.hostUid || effectiveUserId === room.hostUserId;
        const isHostRole = meta?.role === 'HOST' || (payload as any)?.role === 'HOST';
        if (effectiveUserId && !isOwner && !isHostRole) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Only the room host can start the auction.' },
          }));
          return;
        }

        // 3. Validation: At least 1 participant
        if (!room.participants || room.participants.length === 0) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Cannot start auction without participants.' },
          }));
          return;
        }

        // 4. Validation: Every participant must have claimed a team
        const unselected = room.participants.filter((p) => !p.teamId);
        if (unselected.length > 0) {
          const names = unselected.map((p) => p.displayName).join(', ');
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: `All participants must select a franchise before starting (Waiting for: ${names}).` },
          }));
          return;
        }

        // 5. Validation: No duplicate teams
        const teamIds = room.participants.map((p) => p.teamId as TeamId);
        const uniqueTeams = new Set(teamIds);
        if (uniqueTeams.size !== teamIds.length) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Multiple participants cannot select the same team.' },
          }));
          return;
        }

        executeStartAuction(room, teamIds);
      }

      if (type === 'SUBMIT_RETENTIONS') {
        const { roomId, teamId, retainedPlayerIds } = payload as { roomId: string; teamId: TeamId; retainedPlayerIds: string[] };
        const room = rooms.get(roomId);
        if (!room) return;

        const team = room.teams[teamId];
        if (!team) return;

        // Security check (Part 18): Verify user is authorized to submit retentions for this team
        const meta = socketMetadata.get(ws);
        const authenticatedUserId = meta?.userId;
        const participant = room.participants?.find((p) => p.uid === authenticatedUserId);
        const userAssignedTeam = participant?.teamId || (room.teams[teamId]?.ownerUserId === authenticatedUserId ? teamId : null);

        if (authenticatedUserId && userAssignedTeam && userAssignedTeam !== teamId) {
          console.warn(`[SECURITY 403] User ${authenticatedUserId} attempted unauthorized retentions for ${teamId} in ${roomId}`);
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: `403 Forbidden: You can only configure retentions for your assigned franchise (${userAssignedTeam})` }
          }));
          return;
        }

        // Strict boundary check (Part 19): Filter to players strictly belonging to this franchise
        const isMiniCycle2Plus = room.gameMode === 'MINI' && (room.miniAuctionCycle || 1) >= 2;
        const candidateSourceSquad: Player[] = isMiniCycle2Plus
          ? (team.squad && team.squad.length > 0 ? team.squad : (room.pastCycles?.[room.pastCycles.length - 1]?.finalSquads?.[teamId] || []))
          : (TEAMS_SQUADS_2026[teamId] || []);

        const sanitizedPlayerIds = (retainedPlayerIds || []).filter((pId) =>
          candidateSourceSquad.some((sp) => sp.id === pId || (sp.playerId && sp.playerId === pId)) ||
          room.players.some((rp) => rp.id === pId && rp.previousTeam === teamId)
        );

        // Reset any previous retentions for this team
        for (const p of room.players) {
          if (p.soldTo === teamId && p.status === 'RETAINED') {
            p.status = 'UPCOMING';
            delete p.soldTo;
            delete p.soldPrice;
          }
        }
        team.squad = [];

        // Find full player records in order (up to max 6 players - Part 20)
        const retainedPlayers: Player[] = [];
        let cappedCount = 0;
        let uncappedCount = 0;

        for (const pId of sanitizedPlayerIds) {
          if (retainedPlayers.length >= 6) break;

          let player = candidateSourceSquad.find((p) => p.id === pId || p.playerId === pId) || room.players.find((p) => p.id === pId);
          if (!player && !isMiniCycle2Plus && TEAMS_SQUADS_2026[teamId]) {
            const squadP = TEAMS_SQUADS_2026[teamId].find((p) => p.id === pId);
            if (squadP) {
              player = { ...squadP };
              room.players.push(player);
            }
          }
          if (player) {
            const isUncapped = player.cappedStatus === 'UNCAPPED' || player.isUncapped === true || player.isCapped === false;
            if (isUncapped) {
              if (uncappedCount < 2) {
                uncappedCount++;
                retainedPlayers.push(player);
              }
            } else {
              if (cappedCount < 5) {
                cappedCount++;
                retainedPlayers.push(player);
              }
            }
          }
        }

        // Calculate exact retention costs using official 2026 game logic
        const retStats = calculateRetentionCosts(retainedPlayers);

        // Assign players to squad with their exact tier cost and mark as RETAINED
        retStats.breakdown.forEach((item) => {
          const player = candidateSourceSquad.find((p) => p.id === item.id || p.playerId === item.id) || room.players.find((p) => p.id === item.id);
          if (player) {
            player.status = 'RETAINED';
            player.soldTo = teamId;
            player.soldPrice = item.costLakhs;
            team.squad.push({ ...player });
          }
        });

        // For Mini Auction Cycle 2+: non-retained players from previous squad are released into the pool
        if (isMiniCycle2Plus) {
          const retainedKeySet = new Set(retainedPlayers.map((p) => p.id));
          const releasedPlayers = candidateSourceSquad.filter((p) => !retainedKeySet.has(p.id));
          for (const rel of releasedPlayers) {
            rel.previousTeam = teamId;
            rel.status = 'UPCOMING';
            delete rel.soldTo;
            delete rel.soldPrice;
            if (!room.players.some((p) => p.id === rel.id)) {
              room.players.push({ ...rel });
            } else {
              const match = room.players.find((p) => p.id === rel.id);
              if (match) {
                match.previousTeam = teamId;
                match.status = 'UPCOMING';
                delete match.soldTo;
                delete match.soldPrice;
              }
            }
          }
        }

        team.purse = retStats.remainingPurseLakhs;
        team.rtmCardsRemaining = retStats.remainingRTMs;
        team.totalRtmsAllowed = retStats.remainingRTMs;

        broadcastToRoom(roomId, {
          type: 'RETENTIONS_UPDATED',
          payload: { teamId, team, room },
        });
      }

      if (type === 'PLACE_BID' || type === 'auction:bid') {
        const { roomId, amount, playerId } = payload as { roomId: string; teamId?: TeamId; amount?: number; playerId?: string };
        const room = rooms.get(roomId);
        if (!room) {
          ws.send(JSON.stringify({ type: 'BID_ERROR', payload: { message: 'Auction room not found.' } }));
          return;
        }

        // 1. Authoritative Firebase UID from authenticated socket connection
        const meta = socketMetadata.get(ws);
        const authenticatedUserId = meta?.userId;
        if (!authenticatedUserId) {
          ws.send(JSON.stringify({ type: 'BID_ERROR', payload: { message: 'Authentication required to place bids.' } }));
          return;
        }

        // 2 & 3. Authoritatively resolve bidder's team from room membership (never blindly trust client payload)
        const participant = room.participants?.find((p) => p.uid === authenticatedUserId);
        const ownedTeamEntry = (Object.entries(room.teams) as [TeamId, IPLTeam][]).find(
          ([, t]) => t.ownerUserId === authenticatedUserId
        );
        const authoritativeTeamId: TeamId | undefined =
          (participant?.teamId || meta?.teamId || ownedTeamEntry?.[0] || (payload as any).teamId) as TeamId | undefined;

        if (!authoritativeTeamId || !room.teams[authoritativeTeamId]) {
          ws.send(JSON.stringify({
            type: 'BID_ERROR',
            payload: { message: 'You have not claimed an IPL franchise table in this room. Please select a team first.' }
          }));
          return;
        }

        const team = room.teams[authoritativeTeamId];

        // Ensure this team is authoritatively linked to the authenticated user and active
        team.ownerUserId = authenticatedUserId;
        team.isConnected = true;
        team.isActive = true;
        if (participant) {
          participant.teamId = authoritativeTeamId;
          participant.teamShortName = team.shortName;
        }
        if (!room.activeTeamIds) room.activeTeamIds = [];
        if (!room.activeTeamIds.includes(authoritativeTeamId)) {
          room.activeTeamIds.push(authoritativeTeamId);
        }

        // 4 & 6. Verify auction is currently active and accepting bids
        if (room.stage !== 'LIVE' && room.stage !== 'ACCELERATED') {
          ws.send(JSON.stringify({ type: 'BID_ERROR', payload: { message: 'Auction is not currently open for live bidding.' } }));
          return;
        }

        if (room.auctionPaused) {
          ws.send(JSON.stringify({ type: 'BID_ERROR', payload: { message: 'Auction is currently paused by the host.' } }));
          return;
        }

        // 5. Verify player is currently active on auction block
        if (!room.currentPlayer) {
          ws.send(JSON.stringify({ type: 'BID_ERROR', payload: { message: 'No player is currently on the auction block.' } }));
          return;
        }

        const playerStatus = room.currentPlayer.status;
        if (playerStatus === 'SOLD' || playerStatus === 'UNSOLD' || playerStatus === 'SKIPPED' || room.hammerStage >= 4) {
          ws.send(JSON.stringify({ type: 'BID_ERROR', payload: { message: 'Current player is already decided and bidding is closed.' } }));
          return;
        }

        if (playerId && room.currentPlayer.id !== playerId) {
          ws.send(JSON.stringify({ type: 'BID_ERROR', payload: { message: 'The auction has moved to a new player.' } }));
          return;
        }

        // 7. Verify not already leading
        if (room.leadingTeamId === authoritativeTeamId) {
          ws.send(JSON.stringify({ type: 'BID_ERROR', payload: { message: `${team.name} already holds the highest bid!` } }));
          return;
        }

        // 8. Calculate and validate bid amount
        const nextStandard = getNextBidAmount(room.currentBid, room.currentPlayer.basePrice);
        const bidToPlace = (typeof amount === 'number' && amount > 0) ? amount : nextStandard;

        if (bidToPlace <= room.currentBid) {
          ws.send(JSON.stringify({
            type: 'BID_ERROR',
            payload: { message: `Bid of ₹${bidToPlace / 100} Cr must be higher than current bid of ₹${room.currentBid / 100} Cr.` }
          }));
          return;
        }

        // 9, 10, 11, 12. Full authoritative eligibility validation (Purse, Squad limit, Overseas, Min-18 reserve)
        const validation = validateBid(team, room.currentPlayer, bidToPlace, false);
        if (!validation.allowed) {
          ws.send(JSON.stringify({ type: 'BID_ERROR', payload: { message: validation.reason } }));
          return;
        }

        // ACCEPT THE BID!
        room.currentBid = bidToPlace;
        room.leadingTeamId = authoritativeTeamId;
        room.timer = 10; // Reset countdown to 10s
        room.timerDuration = 10000;
        room.timerStartedAt = Date.now();
        room.timerRunning = true;
        room.hammerStage = 0; // Immediately cancel any countdown step (Section 16)!

        if (room.auctionState) {
          room.auctionState.currentBid = bidToPlace;
          room.auctionState.highestBidderUid = authenticatedUserId;
          room.auctionState.highestBidderTeamId = authoritativeTeamId;
          room.auctionState.timerStartedAt = room.timerStartedAt;
          room.auctionState.timerDuration = 10000;
        }

        const bidEntry: BidEntry = {
          id: `bid-${Date.now()}`,
          teamId: authoritativeTeamId,
          teamName: team.name,
          amount: bidToPlace,
          timestamp: Date.now(),
          type: 'BID',
        };
        room.bidHistory.unshift(bidEntry);

        logEvent('BID_PLACED', {
          roomId: room.roomId,
          teamId: authoritativeTeamId,
          uid: authenticatedUserId,
          amount: bidToPlace,
          playerName: room.currentPlayer.name,
        });

        // Broadcast to EVERY participant in the room
        broadcastToRoom(roomId, {
          type: 'BID_PLACED',
          payload: {
            currentBid: bidToPlace,
            leadingTeamId: authoritativeTeamId,
            timer: 10,
            timerStartedAt: room.timerStartedAt,
            timerDuration: 10000,
            bidHistory: room.bidHistory,
            teams: room.teams,
            auctionState: room.auctionState,
            newBid: bidEntry,
            room,
          },
        });

        persistRoomToDisk(roomId);
      }

      if (type === 'AUCTIONEER_HAMMER') {
        const { roomId, action } = payload as { roomId: string; action: 'ONCE' | 'TWICE' | 'SOLD' | 'UNSOLD' };
        const room = rooms.get(roomId);
        if (!room || !room.currentPlayer || room.stage === 'ENDED' || room.auctionPaused) return;

        if (action === 'ONCE') {
          room.hammerStage = 1;
          room.timer = 10;
          broadcastToRoom(roomId, {
            type: 'HAMMER_STEP',
            payload: { hammerStage: 1, message: 'GOING ONCE...', timer: 10 },
          });
        } else if (action === 'TWICE') {
          room.hammerStage = 2;
          room.timer = 8;
          broadcastToRoom(roomId, {
            type: 'HAMMER_STEP',
            payload: { hammerStage: 2, message: 'GOING TWICE...', timer: 8 },
          });
        } else if (action === 'SOLD') {
          handleHammerFinalize(roomId);
        } else if (action === 'UNSOLD') {
          room.currentBid = 0;
          room.leadingTeamId = null;
          handleHammerFinalize(roomId);
        }
      }

      if (type === 'AUCTIONEER_TIMER_CONTROL') {
        const { roomId, action, seconds } = payload as { roomId: string; action: 'PAUSE' | 'RESUME' | 'RESET' | 'SET'; seconds?: number };
        const meta = socketMetadata.get(ws);
        if (action === 'PAUSE' || action === 'RESUME') {
          handleRoomPauseToggle(roomId, meta?.userId, meta?.role, action);
          return;
        }

        const room = rooms.get(roomId);
        if (!room) return;

        if (action === 'RESET') {
          room.timer = 10;
          room.timerDuration = 10000;
          room.timerStartedAt = Date.now();
          room.hammerStage = 0;
          room.timerRunning = true;
          room.auctionPaused = false;
        }
        if (action === 'SET' && typeof seconds === 'number') {
          room.timer = seconds;
          room.timerDuration = seconds * 1000;
          room.timerStartedAt = Date.now();
        }

        persistRoomToDisk(roomId);
        broadcastToRoom(roomId, {
          type: 'TIMER_SYNC',
          payload: { timer: room.timer, timerRunning: room.timerRunning, hammerStage: room.hammerStage, auctionPaused: room.auctionPaused },
        });
      }

      if (type === 'TOGGLE_AUCTION_PAUSE' || type === 'AUCTION_PAUSE_TOGGLE') {
        const { roomId, userId, role, action } = payload as { roomId: string; userId?: string; role?: string; action?: 'PAUSE' | 'RESUME' };
        const meta = socketMetadata.get(ws);
        const requestingUserId = userId || meta?.userId;
        const requestingRole = role || (payload as any)?.role || meta?.role;

        const result = handleRoomPauseToggle(roomId, requestingUserId, requestingRole, action);
        if (!result.success) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: result.error || 'Failed to toggle pause state' },
          }));
        }
      }

      if (type === 'NEXT_PLAYER') {
        const { roomId } = payload as { roomId: string };
        const room = rooms.get(roomId);
        if (room && room.auctionPaused) {
          ws.send(JSON.stringify({ type: 'ERROR', payload: { message: 'Cannot advance player while auction is paused.' } }));
          return;
        }
        clearAutoProgression(roomId);
        executeNextPlayerProgression(roomId);
      }

      // HOST-ONLY: SKIP CURRENT PLAYER (auction:skip)
      if (type === 'auction:skip' || type === 'SKIP_PLAYER') {
        const { roomId, userId } = payload as { roomId: string; userId?: string };
        const room = rooms.get(roomId);
        if (!room) return;

        // Verify host permissions on backend
        const meta = socketMetadata.get(ws);
        const requestingUserId = userId || meta?.userId;
        if (!requestingUserId || room.hostUserId !== requestingUserId) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Unauthorized: Only the room host can skip players.' },
          }));
          return;
        }

        // Must be in active auction stage with a current player
        if (room.stage === 'ENDED' || !room.currentPlayer) {
          return;
        }

        // Clear timers and auto progression
        clearAutoProgression(roomId);
        room.timerRunning = false;
        room.rtmState = null;

        const skippedPlayer = room.currentPlayer;
        skippedPlayer.status = 'SKIPPED';
        delete skippedPlayer.soldTo;
        delete skippedPlayer.soldPrice;
        delete skippedPlayer.wasRTMUsed;

        room.currentBid = 0;
        room.leadingTeamId = null;
        room.hammerStage = 0;

        const skipEntry: BidEntry = {
          id: `skip-${Date.now()}`,
          teamId: '' as any,
          teamName: 'Host Action',
          amount: 0,
          timestamp: Date.now(),
          type: 'SKIPPED',
          note: `${skippedPlayer.name} was skipped by Host.`,
        };
        room.bidHistory.unshift(skipEntry);

        broadcastToRoom(roomId, {
          type: 'PLAYER_SKIPPED',
          payload: { player: skippedPlayer, room },
        });

        // Automatically move to the next eligible player after a brief transition
        setTimeout(() => {
          if (room.stage !== 'ENDED') {
            executeNextPlayerProgression(roomId);
          }
        }, 1000);
      }

      // HOST-ONLY: END AUCTION (auction:end)
      if (type === 'auction:end' || type === 'END_AUCTION') {
        const { roomId, userId } = payload as { roomId: string; userId?: string };
        const room = rooms.get(roomId);
        if (!room) return;

        // Verify host permissions on backend
        const meta = socketMetadata.get(ws);
        const requestingUserId = userId || meta?.userId;
        if (!requestingUserId || room.hostUserId !== requestingUserId) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Unauthorized: Only the room host can end the auction.' },
          }));
          return;
        }

        // Prevent duplicate end requests
        if (room.stage === 'ENDED') {
          return;
        }

        // Stop authoritative timers and auto-progression
        clearAutoProgression(roomId);
        room.timerRunning = false;
        room.timer = 0;
        room.stage = 'ENDED';
        room.endedByHost = true;
        room.endedAt = Date.now();
        room.rtmState = null;

        // Current player if not sold remains unauctioned
        if (room.currentPlayer && room.currentPlayer.status === 'UPCOMING') {
          room.currentBid = 0;
          room.leadingTeamId = null;
        }

        const endEntry: BidEntry = {
          id: `ended-${Date.now()}`,
          teamId: '' as any,
          teamName: 'Host Action',
          amount: 0,
          timestamp: Date.now(),
          type: 'AUCTION_ENDED',
          note: `The auction was ended by host ${room.hostName || 'Host'}. Final squads and purses locked.`,
        };
        room.bidHistory.unshift(endEntry);

        broadcastToRoom(roomId, {
          type: 'STAGE_CHANGED',
          payload: { stage: 'ENDED', message: `Auction ended by Host ${room.hostName || ''}`, room },
        });

        broadcastToRoom(roomId, {
          type: 'AUCTION_ENDED_BY_HOST',
          payload: { message: `The auction was ended by host ${room.hostName || 'Host'}.`, room },
        });
      }

      // 2025/2026 IPL RTM RULE TWIST ACTIONS:
      if (type === 'RTM_DECISION') {
        const { roomId, exercise } = payload as { roomId: string; exercise: boolean };
        const room = rooms.get(roomId);
        if (!room || !room.rtmState || room.auctionPaused) return;

        const { previousTeamId, originalWinningTeamId, originalBid } = room.rtmState;
        const prevTeam = room.teams[previousTeamId];
        const winTeam = room.teams[originalWinningTeamId];

        // CRITICAL VALIDATION: Only the human manager managing previousTeamId (or host) can decide
        const meta = socketMetadata.get(ws);
        const isAuthorizedManager =
          meta?.teamId === previousTeamId ||
          (prevTeam && prevTeam.ownerUserId && meta?.userId === prevTeam.ownerUserId) ||
          meta?.userId === room.hostUid ||
          meta?.userId === room.hostUserId;

        if (!isAuthorizedManager) {
          console.warn(`[RTM_DECISION_REJECTED] User ${meta?.userId} not authorized for team ${previousTeamId}`);
          return;
        }

        if (exercise) {
          // Former team says YES to RTM!
          // NOW: The Twist: Highest bidder gets ONE FINAL CHANCE to raise their bid!
          clearRtmTimeout(roomId);
          room.rtmState.step = 'AWAITING_COUNTER_BID';
          room.rtmState.timestamp = Date.now();
          scheduleRtmStepTimeout(roomId, 'AWAITING_COUNTER_BID', 12000);

          const bidEntry: BidEntry = {
            id: `rtm-ex-${Date.now()}`,
            teamId: previousTeamId,
            teamName: prevTeam.name,
            amount: originalBid,
            timestamp: Date.now(),
            type: 'RTM_TRIGGERED',
            note: `${prevTeam.name} has triggered RTM! ${winTeam.name} gets ONE FINAL CHANCE to raise the bid!`,
          };
          room.bidHistory.unshift(bidEntry);

          broadcastToRoom(roomId, {
            type: 'RTM_COUNTER_STEP',
            payload: { rtmState: room.rtmState, room },
          });
        } else {
          // Former team declined RTM. Sold to original winning team.
          clearRtmTimeout(roomId);
          const bidEntry: BidEntry = {
            id: `rtm-dec-${Date.now()}`,
            teamId: previousTeamId,
            teamName: prevTeam.name,
            amount: originalBid,
            timestamp: Date.now(),
            type: 'RTM_DECLINED',
            note: `${prevTeam.name} declined to exercise RTM card.`,
          };
          room.bidHistory.unshift(bidEntry);

          finalizePlayerSale(roomId, originalWinningTeamId, originalBid, false);
        }
      }

      if (type === 'RTM_COUNTER_BID') {
        // Winning team raises bid or stays with original
        const { roomId, counterBid } = payload as { roomId: string; counterBid: number };
        const room = rooms.get(roomId);
        if (!room || !room.rtmState || room.auctionPaused) return;

        const winTeam = room.teams[room.rtmState.originalWinningTeamId];
        const prevTeam = room.teams[room.rtmState.previousTeamId];

        // CRITICAL VALIDATION: Only winning team manager (or host) can enter counter bid
        const meta = socketMetadata.get(ws);
        const isAuthorizedWinner =
          meta?.teamId === room.rtmState.originalWinningTeamId ||
          (winTeam && winTeam.ownerUserId && meta?.userId === winTeam.ownerUserId) ||
          meta?.userId === room.hostUid ||
          meta?.userId === room.hostUserId;

        if (!isAuthorizedWinner) {
          console.warn(`[RTM_COUNTER_BID_REJECTED] User ${meta?.userId} not authorized for winning team ${room.rtmState.originalWinningTeamId}`);
          return;
        }

        clearRtmTimeout(roomId);
        const finalCounter = Math.max(room.rtmState.originalBid, counterBid);
        room.rtmState.counterBid = finalCounter;
        room.rtmState.step = 'AWAITING_FINAL_MATCH';
        room.rtmState.timestamp = Date.now();
        scheduleRtmStepTimeout(roomId, 'AWAITING_FINAL_MATCH', 12000);

        const bidEntry: BidEntry = {
          id: `rtm-raise-${Date.now()}`,
          teamId: room.rtmState.originalWinningTeamId,
          teamName: winTeam.name,
          amount: finalCounter,
          timestamp: Date.now(),
          type: 'RTM_COUNTER_BID',
          note: `${winTeam.name} raised final bid to ₹${finalCounter >= 100 ? (finalCounter / 100).toFixed(2) + ' Cr' : finalCounter + ' Lakh'}! Does ${prevTeam.name} match?`,
        };
        room.bidHistory.unshift(bidEntry);

        broadcastToRoom(roomId, {
          type: 'RTM_FINAL_STEP',
          payload: { rtmState: room.rtmState, room },
        });
      }

      if (type === 'RTM_FINAL_DECISION') {
        // Former team decides whether to match the counter bid
        const { roomId, match } = payload as { roomId: string; match: boolean };
        const room = rooms.get(roomId);
        if (!room || !room.rtmState || room.auctionPaused) return;

        const prevTeam = room.teams[room.rtmState.previousTeamId];

        // CRITICAL VALIDATION: Only previous team manager (or host) can make the final match decision
        const meta = socketMetadata.get(ws);
        const isAuthorizedManager =
          meta?.teamId === room.rtmState.previousTeamId ||
          (prevTeam && prevTeam.ownerUserId && meta?.userId === prevTeam.ownerUserId) ||
          meta?.userId === room.hostUid ||
          meta?.userId === room.hostUserId;

        if (!isAuthorizedManager) {
          console.warn(`[RTM_FINAL_DECISION_REJECTED] User ${meta?.userId} not authorized for previous team ${room.rtmState.previousTeamId}`);
          return;
        }

        clearRtmTimeout(roomId);
        const finalPrice = room.rtmState.counterBid || room.rtmState.originalBid;

        if (match) {
          // Former team matches! They get the player via RTM!
          finalizePlayerSale(roomId, room.rtmState.previousTeamId, finalPrice, true);
        } else {
          // Former team declines to match. Original winner gets player at raised counter bid!
          finalizePlayerSale(roomId, room.rtmState.originalWinningTeamId, finalPrice, false);
        }
      }

      if (type === 'NOMINATE_ACCELERATED_PLAYER') {
        const { roomId, playerId } = payload as { roomId: string; playerId: string };
        const room = rooms.get(roomId);
        if (!room) return;

        const p = room.players.find((pl) => pl.id === playerId);
        if (!p) return;

        p.status = 'UPCOMING';
        room.currentPlayer = p;
        room.currentBid = 0;
        room.leadingTeamId = null;
        room.timer = 15;
        room.timerRunning = true;
        room.hammerStage = 0;
        room.stage = 'ACCELERATED';

        broadcastToRoom(roomId, {
          type: 'ACCELERATED_PLAYER_ACTIVE',
          payload: { player: p, room },
        });
      }

      if (type === 'FINISH_AUCTION') {
        const { roomId } = payload as { roomId: string };
        const room = rooms.get(roomId);
        if (!room) return;

        room.stage = 'LEADERBOARD';
        room.timerRunning = false;

        broadcastToRoom(roomId, {
          type: 'STAGE_CHANGED',
          payload: { stage: 'LEADERBOARD', room },
        });
      }

      if (type === 'SEND_CHAT') {
        const { roomId, userId, userName, userAvatar, teamId, text } = payload as {
          roomId: string;
          userId: string;
          userName: string;
          userAvatar?: string;
          teamId?: TeamId;
          text: string;
        };

        const room = rooms.get(roomId);
        if (!room) return;

        const trimmed = (text || '').trim();
        if (!trimmed) return;

        if (!room.chatMessages) {
          room.chatMessages = [];
        }

        const chatMsg: ChatMessage = {
          id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          roomId,
          senderId: userId,
          senderName: userName || 'Friend',
          senderAvatar: userAvatar || '🏏',
          teamId: teamId || undefined,
          text: trimmed.slice(0, 300),
          timestamp: Date.now(),
        };

        room.chatMessages.push(chatMsg);
        if (room.chatMessages.length > 150) {
          room.chatMessages = room.chatMessages.slice(-150);
        }

        broadcastToRoom(roomId, {
          type: 'CHAT_MESSAGE',
          payload: { message: chatMsg, room },
        });
      }

      // POST-AUCTION: CONFIRM PLAYING XI
      if (type === 'CONFIRM_PLAYING_XI') {
        const { roomId, teamId, selectedPlayerIds, userId } = payload as {
          roomId: string;
          teamId: TeamId;
          selectedPlayerIds: string[];
          userId: string;
        };
        const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';
        const room = rooms.get(cleanRoomId);
        if (!room) return;

        // 1. Verify auction has ended
        if (room.stage !== 'ENDED' && room.stage !== 'LEADERBOARD') {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Playing XI can only be confirmed after the auction has ended.' },
          }));
          return;
        }

        const team = room.teams[teamId];
        if (!team) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: `Team ${teamId} does not exist.` },
          }));
          return;
        }

        // 2. Verify user ownership (or host in demo testing)
        const meta = socketMetadata.get(ws);
        const effectiveUserId = userId || meta?.userId;
        const isOwner = team.ownerUserId === effectiveUserId;
        const isHost = room.hostUserId === effectiveUserId;
        if (!isOwner && !isHost && team.ownerUserId) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Unauthorized: You can only select Playing XI for your own team.' },
          }));
          return;
        }

        // 3. Exactly 11 players required
        if (!Array.isArray(selectedPlayerIds) || selectedPlayerIds.length !== 11) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'A Playing XI must contain exactly 11 players.' },
          }));
          return;
        }

        // 4. No duplicate player IDs
        const uniqueIds = new Set(selectedPlayerIds);
        if (uniqueIds.size !== 11) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Playing XI cannot contain duplicate players.' },
          }));
          return;
        }

        // 5. Every player must belong to the team's purchased squad
        const squadIdSet = new Set(team.squad.map((p) => String(p.id)));
        const squadPlayerIdSet = new Set(team.squad.map((p) => String(p.playerId || '')));
        const allBelong = selectedPlayerIds.every(
          (id) => squadIdSet.has(String(id)) || squadPlayerIdSet.has(String(id))
        );
        if (!allBelong) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'All selected players must belong to your team’s final auction squad.' },
          }));
          return;
        }

        // 6. Maximum 4 overseas players
        const selectedPlayers = team.squad.filter(
          (p) => selectedPlayerIds.includes(String(p.id)) || selectedPlayerIds.includes(String(p.playerId))
        );
        const overseasCount = selectedPlayers.filter((p) => p.isOverseas || (p.country && p.country !== 'India')).length;
        if (overseasCount > 4) {
          ws.send(JSON.stringify({
            type: 'ERROR',
            payload: { message: 'Playing XI cannot contain more than 4 overseas players.' },
          }));
          return;
        }

        if (!room.playingXIs) {
          room.playingXIs = {} as Record<TeamId, any>;
        }

        room.playingXIs[teamId] = {
          gameId: room.roomId,
          teamId,
          ownerUserId: effectiveUserId || team.ownerUserId || 'HOST',
          selectedPlayerIds,
          confirmed: true,
          confirmedAt: Date.now(),
        };

        // Determine if all participating teams have confirmed
        const participatingTeamIds = (Object.keys(room.teams) as TeamId[]).filter(
          (tid) => room.teams[tid].isActive !== false && (!!room.teams[tid].ownerUserId || room.activeTeamIds.includes(tid))
        );
        const allConfirmed =
          participatingTeamIds.length > 0 &&
          participatingTeamIds.every((tid) => room.playingXIs && room.playingXIs[tid] && room.playingXIs[tid].confirmed);

        broadcastToRoom(room.roomId, {
          type: 'PLAYING_XI_CONFIRMED',
          payload: {
            teamId,
            playingXI: room.playingXIs[teamId],
            allConfirmed,
            playingXIs: room.playingXIs,
            room,
          },
        });
      }

      // POST-AUCTION: SAVE PLAYING XI DRAFT
      if (type === 'SAVE_PLAYING_XI_DRAFT') {
        const { roomId, teamId, selectedPlayerIds, userId } = payload as {
          roomId: string;
          teamId: TeamId;
          selectedPlayerIds: string[];
          userId: string;
        };
        const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';
        const room = rooms.get(cleanRoomId);
        if (!room) return;

        if (!room.playingXIs) {
          room.playingXIs = {} as Record<TeamId, any>;
        }

        if (!room.playingXIs[teamId]?.confirmed) {
          room.playingXIs[teamId] = {
            gameId: room.roomId,
            teamId,
            ownerUserId: userId,
            selectedPlayerIds: selectedPlayerIds || [],
            confirmed: false,
          };

          broadcastToRoom(room.roomId, {
            type: 'PLAYING_XI_DRAFT_UPDATED',
            payload: { teamId, playingXIs: room.playingXIs, room },
          });
        }
      }

      // REPEATED SQUAD-UPDATE CYCLE: START NEXT MINI AUCTION CYCLE (Cycle 1 -> Cycle 2 -> Cycle 3 ...)
      if (type === 'START_NEXT_MINI_CYCLE') {
        const { roomId } = payload as { roomId: string };
        const cleanRoomId = roomId ? roomId.toUpperCase().trim() : '';
        const room = rooms.get(cleanRoomId);
        if (room && room.gameMode === 'MINI') {
          startNextMiniAuctionCycle(room);
        }
      }
    } catch (err) {
      console.error('Error handling WebSocket message:', err);
    }
  });

  ws.on('close', () => {
    const meta = socketMetadata.get(ws);
    if (meta) {
      const sockets = roomSockets.get(meta.roomId);
      if (sockets) {
        sockets.delete(ws);
      }
      socketMetadata.delete(ws);

      const room = rooms.get(meta.roomId);
      if (room) {
        // Check if user has any other open sockets in this room
        let userHasActiveSocket = false;
        if (sockets) {
          for (const s of sockets) {
            const sm = socketMetadata.get(s);
            if (sm && sm.userId === meta.userId) {
              userHasActiveSocket = true;
              break;
            }
          }
        }

        if (!userHasActiveSocket && room.participants) {
          const participant = room.participants.find((p) => p.uid === meta.userId);
          if (participant) {
            participant.connectionStatus = 'disconnected';
            if (participant.teamId && room.teams[participant.teamId]) {
              room.teams[participant.teamId].isConnected = false;
            }
            logEvent('PARTICIPANT_DISCONNECTED', { roomId: room.roomId, uid: meta.userId });
            broadcastToRoom(room.roomId, {
              type: 'USER_LEFT',
              payload: { userId: meta.userId, teams: room.teams, participants: room.participants },
            });
          }
        }
      }
    }
  });
});

// Upgrade Handling on HTTP server
server.on('upgrade', (request, socket, head) => {
  const url = request.url || '';
  if (url.startsWith('/ws')) {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  }
});

// REST API Endpoints
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.post('/api/rooms', (req: Request, res: Response) => {
  const { hostUser, gameMode = 'MEGA' } = req.body;
  if (!hostUser || !hostUser.id) {
    res.status(400).json({ error: 'hostUser required' });
    return;
  }
  const room = createNewRoom(hostUser, gameMode);
  res.json({ room });
});

app.get('/api/rooms/:roomId', (req: Request, res: Response) => {
  const cleanId = (req.params.roomId || '').toUpperCase().trim();
  const room = rooms.get(cleanId);
  if (!room) {
    res.status(404).json({ error: 'Room not found' });
    return;
  }
  res.json({ room });
});

app.post('/api/rooms/:roomId/next-mini-cycle', (req: Request, res: Response) => {
  const cleanId = (req.params.roomId || '').toUpperCase().trim();
  const room = rooms.get(cleanId);
  if (!room) {
    res.status(404).json({ error: 'Room not found' });
    return;
  }
  if (room.gameMode !== 'MINI') {
    res.status(400).json({ error: 'Only MINI auction rooms support repeated squad-update cycles' });
    return;
  }
  const success = startNextMiniAuctionCycle(room);
  res.json({ success, cycle: room.miniAuctionCycle, room });
});

app.post('/api/rooms/:roomId/start', (req: Request, res: Response) => {
  const cleanId = (req.params.roomId || '').toUpperCase().trim();
  const room = rooms.get(cleanId);
  if (!room) {
    res.status(404).json({ error: 'Room not found' });
    return;
  }
  const { userId, role } = req.body;
  const isOwner = room.hostUserId === userId || room.hostUid === userId;
  const participant = room.participants?.find((p) => p.uid === userId);
  const isHostRole = role === 'HOST' || (participant as any)?.role === 'HOST' || (participant as any)?.isHost;
  if (userId && !isOwner && !isHostRole) {
    res.status(403).json({ error: 'Only the room host can start the auction.' });
    return;
  }
  executeStartAuction(room);
  res.json({ success: true, stage: room.stage, room });
});

app.post('/api/rooms/:roomId/join', (req: Request, res: Response) => {
  const cleanRoomId = (req.params.roomId || '').toUpperCase().trim();
  const { user } = req.body;
  if (!user || !user.id) {
    res.status(400).json({ error: 'Valid user profile required' });
    return;
  }
  const room = rooms.get(cleanRoomId);
  if (!room) {
    res.status(404).json({ error: 'Room not found' });
    return;
  }

  if (!room.participants) room.participants = [];
  let participant = room.participants.find((p) => p.uid === user.id);
  const isHost = user.id === room.hostUid || user.id === room.hostUserId;

  if (participant) {
    participant.connectionStatus = 'connected';
    participant.displayName = user.name || participant.displayName;
    participant.email = user.email || participant.email;
    participant.photoURL = user.avatar || participant.photoURL;
    if (isHost) participant.isHost = true;
    logEvent('PARTICIPANT_RECONNECTED', { roomId: room.roomId, uid: user.id });
  } else {
    if (room.stage === 'LIVE' || room.stage === 'ACCELERATED') {
      res.status(403).json({ error: 'Auction already active. New participants restricted.' });
      return;
    }
    const selectedTeamId = user.selectedTeamId as TeamId | undefined;
    participant = {
      uid: user.id,
      displayName: user.name || 'Bidder',
      email: user.email || '',
      photoURL: user.avatar || '',
      teamId: selectedTeamId || null,
      teamShortName: selectedTeamId && room.teams[selectedTeamId] ? room.teams[selectedTeamId].shortName : null,
      isHost,
      joinedAt: Date.now(),
      connectionStatus: 'connected',
    };
    room.participants.push(participant);
    logEvent('PARTICIPANT_JOINED', { roomId: room.roomId, uid: user.id, name: user.name });
  }

  const selectedTeamId = user.selectedTeamId as TeamId | undefined;
  if (selectedTeamId && room.teams[selectedTeamId]) {
    const targetTeam = room.teams[selectedTeamId];
    const isClaimedByOther = room.participants.some(
      (p) => p.uid !== user.id && p.teamId === selectedTeamId
    );
    if ((!targetTeam.ownerUserId || targetTeam.ownerUserId === user.id) && !isClaimedByOther) {
      targetTeam.isConnected = true;
      targetTeam.ownerUserId = user.id;
      targetTeam.ownerName = user.name;
      targetTeam.ownerAvatar = user.avatar;
      targetTeam.isActive = true;
      participant.teamId = selectedTeamId;
      participant.teamShortName = targetTeam.shortName;
    }
  }

  room.selectedTeams = room.participants
    .filter((p) => !!p.teamId)
    .map((p) => ({
      uid: p.uid,
      teamId: p.teamId!,
      teamName: room.teams[p.teamId!]?.name || p.teamId!,
    }));

  room.updatedAt = Date.now();

  broadcastToRoom(cleanRoomId, { type: 'ROOM_STATE_SYNC', payload: room });

  res.json({ room });
});

app.post('/api/rooms/:roomId/leave', (req: Request, res: Response) => {
  const cleanRoomId = (req.params.roomId || '').toUpperCase().trim();
  const { userId } = req.body;
  if (!userId) {
    res.status(400).json({ error: 'userId required' });
    return;
  }
  const room = handleParticipantLeave(cleanRoomId, userId);
  res.json({ success: true, room });
});

// Atomic Server-Authoritative Team Selection
app.post('/api/rooms/:roomId/select-team', (req: Request, res: Response) => {
  const cleanRoomId = (req.params.roomId || '').toUpperCase().trim();
  const { teamId, user } = req.body;
  if (!user || !user.id || !teamId) {
    res.status(400).json({ error: 'Valid user profile and teamId required' });
    return;
  }

  const room = rooms.get(cleanRoomId);
  if (!room) {
    res.status(404).json({ error: 'Room not found' });
    return;
  }

  if (room.stage !== 'LOBBY' && room.status !== 'LOBBY') {
    res.status(400).json({ error: 'Teams cannot be changed once the auction has started.' });
    return;
  }

  const targetTeam = room.teams[teamId as TeamId];
  if (!targetTeam) {
    res.status(400).json({ error: 'Invalid team ID' });
    return;
  }

  // Atomic availability verification
  const currentOwner = (room.participants || []).find(
    (p) => p.uid !== user.id && p.teamId === teamId
  );
  if ((targetTeam.ownerUserId && targetTeam.ownerUserId !== user.id) || currentOwner) {
    const ownerName = currentOwner ? currentOwner.displayName : targetTeam.ownerName || 'another player';
    res.status(409).json({
      error: `Team ${targetTeam.name} is already claimed by ${ownerName}.`,
      code: 'TEAM_ALREADY_TAKEN',
    });
    return;
  }

  // Release any previously claimed team by this same user
  for (const [tid, t] of Object.entries(room.teams) as [TeamId, IPLTeam][]) {
    if (tid !== teamId && t.ownerUserId === user.id) {
      t.ownerUserId = undefined;
      t.ownerName = undefined;
      t.ownerAvatar = undefined;
      t.isConnected = false;
      t.isActive = false;
    }
  }

  targetTeam.isConnected = true;
  targetTeam.ownerUserId = user.id;
  targetTeam.ownerName = user.name;
  targetTeam.ownerAvatar = user.avatar;
  targetTeam.isActive = true;

  if (!room.participants) room.participants = [];
  let participant = room.participants.find((p) => p.uid === user.id);
  if (!participant) {
    participant = {
      uid: user.id,
      displayName: user.name || 'Bidder',
      email: user.email || '',
      photoURL: user.avatar || '',
      teamId: teamId as TeamId,
      teamShortName: targetTeam.shortName,
      isHost: user.id === room.hostUid || user.id === room.hostUserId,
      joinedAt: Date.now(),
      connectionStatus: 'connected',
    };
    room.participants.push(participant);
  } else {
    participant.teamId = teamId as TeamId;
    participant.teamShortName = targetTeam.shortName;
  }

  room.selectedTeams = room.participants
    .filter((p) => !!p.teamId)
    .map((p) => ({
      uid: p.uid,
      teamId: p.teamId!,
      teamName: room.teams[p.teamId!]?.name || p.teamId!,
    }));

  room.updatedAt = Date.now();
  broadcastToRoom(cleanRoomId, { type: 'ROOM_STATE_SYNC', payload: room });

  res.json({ success: true, room, teamId });
});

// Host-Only / Room Owner Pause/Resume Toggle Endpoint
app.post('/api/rooms/:roomId/pause-toggle', (req: Request, res: Response) => {
  const cleanRoomId = (req.params.roomId || '').toUpperCase().trim();
  const { userId, role, action } = req.body;
  const result = handleRoomPauseToggle(cleanRoomId, userId, role, action);
  if (!result.success) {
    res.status(result.error?.includes('Unauthorized') ? 403 : 404).json({ error: result.error });
    return;
  }
  res.json({ success: true, auctionPaused: result.room?.auctionPaused, room: result.room });
});

// Part 17 & 18: Authoritative Backend Team Retentions & Access Control
app.get('/api/rooms/:roomId/retentions', (req: Request, res: Response) => {
  const cleanRoomId = (req.params.roomId || '').toUpperCase().trim();
  const uid = req.query.uid as string;
  const room = rooms.get(cleanRoomId);
  if (!room) {
    res.status(404).json({ error: 'Room not found' });
    return;
  }

  const participant = room.participants?.find((p) => p.uid === uid);
  const teamId = participant?.teamId || (Object.keys(room.teams).find((tid) => room.teams[tid as TeamId]?.ownerUserId === uid) as TeamId | undefined);
  if (!teamId) {
    res.status(400).json({ error: 'No franchise currently assigned to this user' });
    return;
  }

  const teamSquad = TEAMS_SQUADS_2026[teamId] || [];
  const team = room.teams[teamId];
  res.json({
    roomId: cleanRoomId,
    uid,
    teamId,
    teamName: team?.name || teamId,
    teamShortName: team?.shortName || teamId,
    squad: teamSquad,
    retainedPlayerIds: team?.squad?.filter((p) => p.status === 'RETAINED').map((p) => p.id) || [],
  });
});

app.get('/api/rooms/:roomId/retentions/:targetTeamId', (req: Request, res: Response) => {
  const cleanRoomId = (req.params.roomId || '').toUpperCase().trim();
  const targetTeamId = (req.params.targetTeamId || '').toUpperCase() as TeamId;
  const uid = req.query.uid as string;
  const room = rooms.get(cleanRoomId);
  if (!room) {
    res.status(404).json({ error: 'Room not found' });
    return;
  }

  const participant = room.participants?.find((p) => p.uid === uid);
  const userTeam = participant?.teamId || (Object.keys(room.teams).find((tid) => room.teams[tid as TeamId]?.ownerUserId === uid) as TeamId | undefined);

  // Security Check (Part 18): Return 403 Forbidden if user requests another franchise's retention roster
  if (uid && userTeam && userTeam !== targetTeamId) {
    res.status(403).json({
      error: `Forbidden: You can only access retentions for your assigned team (${userTeam})`,
      authorizedTeamId: userTeam,
    });
    return;
  }

  const teamSquad = TEAMS_SQUADS_2026[targetTeamId] || [];
  const team = room.teams[targetTeamId];
  res.json({
    roomId: cleanRoomId,
    teamId: targetTeamId,
    teamName: team?.name || targetTeamId,
    teamShortName: team?.shortName || targetTeamId,
    squad: teamSquad,
    retainedPlayerIds: team?.squad?.filter((p) => p.status === 'RETAINED').map((p) => p.id) || [],
  });
});

app.get('/api/players', (_req: Request, res: Response) => {
  res.json({ players: INITIAL_PLAYERS });
});

app.get('/api/players/sets', (_req: Request, res: Response) => {
  try {
    const sets = getStructuredAuctionSets(INITIAL_PLAYERS);
    res.json({ sets, totalSets: sets.length });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/players/images', (req: Request, res: Response) => {
  try {
    const { setNumber, setCode, mappings } = req.body as {
      setNumber?: number;
      setCode?: string;
      mappings: Array<{
        playerId: string;
        id?: string;
        fullName?: string;
        auctionSetNumber?: number;
        auctionSet?: string;
        imageUrl: string | null;
        imageSource?: string | null;
        imageStatus?: 'VERIFIED' | 'MISSING';
        imageVerified?: boolean;
      }>;
    };

    if (!Array.isArray(mappings)) {
      res.status(400).json({ error: 'mappings must be an array' });
      return;
    }

    const officialPath = path.resolve(__dirname, 'src/data/official350Players.json');
    let playersData: any[] = [];
    if (fs.existsSync(officialPath)) {
      playersData = JSON.parse(fs.readFileSync(officialPath, 'utf8'));
    } else {
      playersData = [...INITIAL_PLAYERS];
    }

    let updatedCount = 0;
    const mappingMap = new Map<string, (typeof mappings)[0]>();
    for (const m of mappings) {
      if (m.playerId) mappingMap.set(m.playerId.toLowerCase(), m);
      if (m.id) mappingMap.set(m.id.toLowerCase(), m);
      if (m.fullName) mappingMap.set(m.fullName.toLowerCase(), m);
    }

    playersData = playersData.map((p) => {
      const match =
        (p.playerId && mappingMap.get(p.playerId.toLowerCase())) ||
        (p.id && mappingMap.get(p.id.toLowerCase())) ||
        (p.name && mappingMap.get(p.name.toLowerCase())) ||
        (p.fullName && mappingMap.get(p.fullName.toLowerCase()));

      if (match) {
        updatedCount++;
        const hasUrl = !!match.imageUrl && match.imageUrl.trim().length > 0;
        return {
          ...p,
          imageUrl: hasUrl ? match.imageUrl!.trim() : null,
          imageSource: match.imageSource || p.imageSource || 'Official IPL',
          imageStatus: hasUrl ? 'VERIFIED' : 'MISSING',
          imageVerified: hasUrl,
          imageCheckedAt: new Date().toISOString(),
        };
      }
      return p;
    });

    try {
      fs.writeFileSync(officialPath, JSON.stringify(playersData, null, 2), 'utf8');

      // Also check and update teamsSquads2026.json
      const squadsPath = path.resolve(__dirname, 'src/data/teamsSquads2026.json');
      if (fs.existsSync(squadsPath)) {
        const squadsObj = JSON.parse(fs.readFileSync(squadsPath, 'utf8'));
        let squadModified = false;
        for (const t in squadsObj) {
          squadsObj[t] = squadsObj[t].map((sp: any) => {
            const match =
              (sp.playerId && mappingMap.get(sp.playerId.toLowerCase())) ||
              (sp.id && mappingMap.get(sp.id.toLowerCase())) ||
              (sp.name && mappingMap.get(sp.name.toLowerCase()));
            if (match) {
              squadModified = true;
              const hasUrl = !!match.imageUrl && match.imageUrl.trim().length > 0;
              return {
                ...sp,
                imageUrl: hasUrl ? match.imageUrl!.trim() : null,
                photo: hasUrl ? match.imageUrl!.trim() : sp.photo,
                imageVerified: hasUrl,
                imageStatus: hasUrl ? 'VERIFIED' : 'MISSING',
              };
            }
            return sp;
          });
        }
        if (squadModified) {
          fs.writeFileSync(squadsPath, JSON.stringify(squadsObj, null, 2), 'utf8');
        }
      }
    } catch (fsErr) {
      console.warn('Could not write players file to disk:', fsErr);
    }

    // Update in-memory INITIAL_PLAYERS
    for (let i = 0; i < INITIAL_PLAYERS.length; i++) {
      const p = INITIAL_PLAYERS[i];
      const match =
        (p.playerId && mappingMap.get(p.playerId.toLowerCase())) ||
        (p.id && mappingMap.get(p.id.toLowerCase())) ||
        (p.name && mappingMap.get(p.name.toLowerCase()));
      if (match) {
        const hasUrl = !!match.imageUrl && match.imageUrl.trim().length > 0;
        INITIAL_PLAYERS[i].imageUrl = hasUrl ? match.imageUrl!.trim() : null;
        INITIAL_PLAYERS[i].imageSource = match.imageSource || INITIAL_PLAYERS[i].imageSource || 'Official IPL';
        INITIAL_PLAYERS[i].imageStatus = hasUrl ? 'VERIFIED' : 'MISSING';
        INITIAL_PLAYERS[i].imageVerified = hasUrl;
      }
    }

    // Update all active rooms and broadcast sync
    for (const [roomId, room] of rooms.entries()) {
      room.players = room.players.map((p) => {
        const match =
          (p.playerId && mappingMap.get(p.playerId.toLowerCase())) ||
          (p.id && mappingMap.get(p.id.toLowerCase())) ||
          (p.name && mappingMap.get(p.name.toLowerCase()));
        if (match) {
          const hasUrl = !!match.imageUrl && match.imageUrl.trim().length > 0;
          const updatedPlayer = {
            ...p,
            imageUrl: hasUrl ? match.imageUrl!.trim() : null,
            imageSource: match.imageSource || p.imageSource || 'Official IPL',
            imageStatus: hasUrl ? 'VERIFIED' : 'MISSING',
            imageVerified: hasUrl,
          } as Player;
          if (room.currentPlayer?.id === p.id) {
            room.currentPlayer = updatedPlayer;
          }
          return updatedPlayer;
        }
        return p;
      });

      broadcastToRoom(roomId, {
        type: 'ROOM_STATE_SYNC',
        payload: room,
      });
    }

    res.json({
      success: true,
      updatedCount,
      setNumber,
      setCode,
      updatedPlayers: playersData,
    });
  } catch (err: any) {
    console.error('Error updating player images:', err);
    res.status(500).json({ error: err.message || 'Internal error updating player images' });
  }
});

// AI Squad Ranking & Evaluation Route (Gemini 3.8 Flash + Algorithmic Fallback)
app.post('/api/ai/rank-squads', async (req: Request, res: Response) => {
  try {
    const { teams } = req.body as { teams: IPLTeam[] };
    if (!teams || !Array.isArray(teams) || teams.length === 0) {
      return res.status(400).json({ error: 'Teams array is required' });
    }

    // Default algorithmic baseline
    const fallbackReport = evaluateSquadsAlgorithmic(teams);

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json(fallbackReport);
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the Lead Cricket Analyst & Chief Scout for the IPL Auction.
Analyze and rank the following teams that just completed an IPL Auction session.

CRITERIA:
1. Batting Firepower & Depth (Top order anchors, boundary-hitters, finishers)
2. Bowling Attack & Death Execution (Frontline pacers, yorker specialists)
3. Spin Attack & Middle-Overs Control (Mystery spinners, wrist-spinners, finger-spinners)
4. All-Rounder Versatility & Lower-Order Depth
5. Big-Match Player Skill Ratings & Recent Form

TEAM SQUADS SUMMARY:
${teams.map((t) => `
TEAM: ${t.name} (${t.shortName})
Purse Spent: ₹${((t.initialPurse - t.purse) / 100).toFixed(2)} Cr, Purse Left: ₹${(t.purse / 100).toFixed(2)} Cr
Total Players: ${t.squad.length}
Squad Roster:
${t.squad.map((p) => `- ${p.name} (${p.role}, ${p.country}, Price: ₹${p.soldPrice || p.basePrice}L, Rating: ${p.rating || p.hiddenFormRating || 80}, Form: ${p.form?.formSummary || p.hiddenFormRating || 'Good'}, Runs: ${p.stats?.runs || 0}, Wkts: ${p.stats?.wickets || 0}, SR: ${p.stats?.strikeRate || 0}, Econ: ${p.stats?.economy || 0})`).join('\n')}
`).join('\n---')}

Respond ONLY with valid JSON with this exact schema:
{
  "summary": "High-level scout summary of the auction outcome across all teams",
  "championPickTeamId": "TeamId of #1 favorite (e.g. CSK, MI, etc.)",
  "rankings": [
    {
      "rank": 1,
      "teamId": "CSK",
      "teamName": "Chennai Super Kings",
      "overallScore": 92,
      "grade": "A+",
      "trophyProbability": 28,
      "criteria": {
        "battingPower": 90,
        "bowlingDepth": 88,
        "spinAttack": 95,
        "allRounderBalance": 92,
        "formAndSkill": 91
      },
      "strengths": ["List 2-3 specific tactical strengths"],
      "weaknesses": ["List 1-2 tactical vulnerabilities"],
      "xFactorPlayer": "Name of biggest match-winner in this squad",
      "scoutCritique": "2-3 sentences of sharp cricket scout commentary"
    }
  ]
}
Ensure every provided team is ranked from 1 to N with unique ranks and realistic scores.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        },
      });

      const text = response.text?.trim();
      if (text) {
        const parsed = JSON.parse(text);
        if (parsed && Array.isArray(parsed.rankings) && parsed.rankings.length > 0) {
          return res.json({
            timestamp: Date.now(),
            summary: parsed.summary || fallbackReport.summary,
            championPickTeamId: parsed.championPickTeamId || parsed.rankings[0].teamId,
            rankings: parsed.rankings,
          });
        }
      }
    } catch (aiErr) {
      console.warn('Gemini AI generation failed, falling back to algorithmic rankings:', aiErr);
    }

    return res.json(fallbackReport);
  } catch (err: any) {
    console.error('Error in rank-squads:', err);
    res.status(500).json({ error: err.message || 'Failed to evaluate squads' });
  }
});

// Mount Vite or serve static dist
async function startServer() {
  // Restore any persisted rooms and their authoritative state from disk
  loadPersistedRooms();

  const portArgIndex = process.argv.indexOf('--port');
  const portFromArg = portArgIndex !== -1 ? process.argv[portArgIndex + 1] : null;
  let PORT = 3000;
  if (portFromArg) {
    PORT = Number(portFromArg);
  } else if (process.env.NODE_ENV === 'production') {
    PORT = Number(process.env.PORT || 8080);
  } else {
    const envPort = process.env.PORT ? Number(process.env.PORT) : 3000;
    PORT = envPort === 8080 ? 3000 : envPort;
  }

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  server.on('error', (err: any) => {
    console.error('[SERVER ERROR]', err);
  });

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`IPL Mock Auction Server listening on port ${PORT}`);
  });
}

startServer();
