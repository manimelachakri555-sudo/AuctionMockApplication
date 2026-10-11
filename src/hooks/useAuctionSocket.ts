import { useState, useEffect, useRef, useCallback } from 'react';
import type { AuctionRoomState, IPLTeam, Player, TeamId, UserProfile, BidEntry, RTMState, ChatMessage } from '../types/auction.ts';
import { auctionAudio } from '../utils/audio';

interface UseAuctionSocketProps {
  roomCode: string | null;
  user: UserProfile | null;
  onRoomStateUpdated?: (room: AuctionRoomState) => void;
}

export function useAuctionSocket({ roomCode, user, onRoomStateUpdated }: UseAuctionSocketProps) {
  const [room, setRoom] = useState<AuctionRoomState | null>(null);
  const [connected, setConnected] = useState(false);
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [lastHammerMessage, setLastHammerMessage] = useState<string | null>(null);
  const [setTransitionInfo, setSetTransitionInfo] = useState<{
    completedSet: string;
    nextSet: string;
    nextSetNo?: number;
    message?: string;
  } | null>(null);

  const socketRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isIntentionalCloseRef = useRef(false);

  // Keep latest user & roomCode in refs so callbacks and socket events always have current values
  const userRef = useRef<UserProfile | null>(user);
  userRef.current = user;

  const roomCodeRef = useRef<string | null>(roomCode);
  roomCodeRef.current = roomCode;

  const onRoomStateUpdatedRef = useRef(onRoomStateUpdated);
  onRoomStateUpdatedRef.current = onRoomStateUpdated;

  const send = useCallback((type: string, payload: unknown) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type, payload }));
    }
  }, []);

  // REST State Recovery / Synchronization helper
  const syncRoomState = useCallback(async (targetRoomCode?: string) => {
    const code = (targetRoomCode || roomCodeRef.current)?.toUpperCase().trim();
    if (!code) return null;

    try {
      const res = await fetch(`/api/rooms/${code}`);
      if (res.ok) {
        const data = await res.json();
        if (data.room) {
          setRoom(data.room);
          if (data.room.chatMessages && Array.isArray(data.room.chatMessages)) {
            setChatMessages(data.room.chatMessages);
          }
          onRoomStateUpdatedRef.current?.(data.room);
          return data.room as AuctionRoomState;
        }
      }
    } catch (err) {
      console.warn('[Sync] Failed to sync room state via REST:', err);
    }
    return null;
  }, []);

  const connect = useCallback(() => {
    const currentCode = roomCodeRef.current;
    const currentUser = userRef.current;
    if (!currentCode || !currentUser) return;

    // If socket is already connected or connecting to this room, do not recreate
    if (
      socketRef.current &&
      (socketRef.current.readyState === WebSocket.OPEN ||
        socketRef.current.readyState === WebSocket.CONNECTING)
    ) {
      return;
    }

    if (socketRef.current) {
      try {
        socketRef.current.close();
      } catch {
        // ignore
      }
    }

    isIntentionalCloseRef.current = false;
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws`;

    const ws = new WebSocket(wsUrl);
    socketRef.current = ws;

    ws.onopen = () => {
      setConnected(true);
      setIsReconnecting(false);
      setError(null);

      // Join room with authenticated user identity
      ws.send(
        JSON.stringify({
          type: 'JOIN_ROOM',
          payload: {
            roomId: currentCode.toUpperCase(),
            user: userRef.current,
          },
        })
      );
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        const { type, payload } = msg;

        switch (type) {
          case 'ROOM_STATE_SYNC':
          case 'room:state': {
            setRoom(payload);
            setIsReconnecting(false);
            if (payload.chatMessages && Array.isArray(payload.chatMessages)) {
              setChatMessages(payload.chatMessages);
            }
            onRoomStateUpdatedRef.current?.(payload);
            break;
          }
          case 'CHAT_MESSAGE': {
            if (payload.message) {
              setChatMessages((prev) => {
                if (prev.some((m) => m.id === payload.message.id)) return prev;
                return [...prev, payload.message];
              });
            }
            if (payload.room) {
              setRoom(payload.room);
            }
            break;
          }
          case 'TIMER_TICK': {
            setRoom((prev) => {
              if (!prev) return prev;
              if (payload.timer <= 3 && payload.timer > 0) {
                auctionAudio.playTimerTick(true);
              }
              return {
                ...prev,
                timer: payload.timer,
                hammerStage: payload.hammerStage !== undefined ? payload.hammerStage : prev.hammerStage,
                timerStartedAt: payload.timerStartedAt !== undefined ? payload.timerStartedAt : prev.timerStartedAt,
                timerDuration: payload.timerDuration !== undefined ? payload.timerDuration : prev.timerDuration,
              };
            });
            break;
          }
          case 'HAMMER_STEP': {
            auctionAudio.playHammer();
            setLastHammerMessage(payload.message);
            setRoom((prev) =>
              prev
                ? {
                    ...prev,
                    hammerStage: payload.hammerStage,
                    timer: payload.timer !== undefined ? payload.timer : prev.timer,
                  }
                : prev
            );
            setTimeout(() => setLastHammerMessage(null), 3000);
            break;
          }
          case 'BID_PLACED': {
            auctionAudio.playBid();
            if (payload.room) {
              setRoom(payload.room);
              onRoomStateUpdatedRef.current?.(payload.room);
            } else {
              setRoom((prev) => {
                if (!prev) return prev;
                const updatedHistory = payload.bidHistory || (payload.newBid ? [payload.newBid, ...(prev.bidHistory || [])] : prev.bidHistory);
                const updated: AuctionRoomState = {
                  ...prev,
                  currentBid: payload.currentBid !== undefined ? payload.currentBid : prev.currentBid,
                  leadingTeamId: payload.leadingTeamId !== undefined ? payload.leadingTeamId : prev.leadingTeamId,
                  timer: payload.timer !== undefined ? payload.timer : 10,
                  timerStartedAt: payload.timerStartedAt || Date.now(),
                  timerDuration: payload.timerDuration || 10000,
                  timerRunning: true,
                  hammerStage: 0,
                  bidHistory: updatedHistory,
                  teams: payload.teams || prev.teams,
                  auctionState: payload.auctionState || (prev.auctionState ? {
                    ...prev.auctionState,
                    currentBid: payload.currentBid,
                    highestBidderTeamId: payload.leadingTeamId,
                  } : prev.auctionState),
                };
                onRoomStateUpdatedRef.current?.(updated);
                return updated;
              });
            }
            break;
          }
          case 'auction:sold':
          case 'PLAYER_SOLD': {
            auctionAudio.playHammer();
            auctionAudio.playSold();
            const authoritativeWinningTeamId = payload.finalWinnerTeamId || payload.teamId || payload.player?.soldTo;
            const updatedRoom = payload.room ? {
              ...payload.room,
              leadingTeamId: authoritativeWinningTeamId || payload.room.leadingTeamId,
              currentPlayer: payload.player || payload.room.currentPlayer,
            } : payload.room;
            if (updatedRoom) {
              setRoom(updatedRoom);
              onRoomStateUpdatedRef.current?.(updatedRoom);
            }
            break;
          }
          case 'auction:unsold':
          case 'PLAYER_UNSOLD': {
            auctionAudio.playHammer();
            if (payload.room) {
              setRoom(payload.room);
              onRoomStateUpdatedRef.current?.(payload.room);
            }
            break;
          }
          case 'RTM_PROMPT':
          case 'RTM_COUNTER_STEP':
          case 'RTM_FINAL_STEP': {
            auctionAudio.playRTMAlert();
            if (payload.room) {
              setRoom(payload.room);
              onRoomStateUpdatedRef.current?.(payload.room);
            }
            break;
          }
          case 'SET_COMPLETED': {
            auctionAudio.playSold();
            setSetTransitionInfo(payload);
            if (payload.room) {
              setRoom(payload.room);
              onRoomStateUpdatedRef.current?.(payload.room);
            }
            break;
          }
          case 'AUCTION_STARTED':
          case 'auction:started': {
            if (payload.room) {
              setRoom(payload.room);
              onRoomStateUpdatedRef.current?.(payload.room);
            }
            break;
          }
          case 'STAGE_CHANGED':
          case 'NEXT_PLAYER_LOADED':
          case 'PLAYER_SKIPPED':
          case 'AUCTION_ENDED_BY_HOST': {
            setSetTransitionInfo(null);
            if (payload.room) {
              setRoom(payload.room);
              onRoomStateUpdatedRef.current?.(payload.room);
            } else if (payload.teams) {
              setRoom((prev) => (prev ? { ...prev, teams: payload.teams } : prev));
            }
            break;
          }
          case 'ROOM_LEFT': {
            setRoom(null);
            break;
          }
          case 'USER_LEFT':
          case 'PARTICIPANT_STATUS_CHANGED':
          case 'RETENTIONS_UPDATED':
          case 'ACCELERATED_PLAYER_ACTIVE':
          case 'USER_JOINED':
          case 'TEAM_UPDATED': {
            if (payload.room) {
              setRoom(payload.room);
              onRoomStateUpdatedRef.current?.(payload.room);
            } else {
              setRoom((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  teams: payload.teams || prev.teams,
                  participants: payload.participants || prev.participants,
                  selectedTeams: payload.selectedTeams || prev.selectedTeams,
                  activeTeamIds: payload.activeTeamIds || prev.activeTeamIds,
                };
              });
            }
            break;
          }
          case 'PLAYING_XI_CONFIRMED':
          case 'PLAYING_XI_DRAFT_UPDATED': {
            if (payload.room) {
              setRoom(payload.room);
              onRoomStateUpdatedRef.current?.(payload.room);
            } else if (payload.playingXIs) {
              setRoom((prev) => (prev ? { ...prev, playingXIs: payload.playingXIs } : prev));
            }
            break;
          }
          case 'AUCTION_PAUSED_STATE_CHANGED': {
            if (payload.room) {
              setRoom(payload.room);
              onRoomStateUpdatedRef.current?.(payload.room);
            } else {
              setRoom((prev) =>
                prev
                  ? {
                      ...prev,
                      auctionPaused: payload.auctionPaused,
                      timer: payload.timer !== undefined ? payload.timer : prev.timer,
                      timerRunning: payload.timerRunning !== undefined ? payload.timerRunning : prev.timerRunning,
                      hammerStage: payload.hammerStage !== undefined ? payload.hammerStage : prev.hammerStage,
                    }
                  : prev
              );
            }
            break;
          }
          case 'TIMER_SYNC': {
            setRoom((prev) =>
              prev
                ? {
                    ...prev,
                    timer: payload.timer,
                    timerRunning: payload.timerRunning,
                    hammerStage: payload.hammerStage,
                    auctionPaused: payload.auctionPaused !== undefined ? payload.auctionPaused : prev.auctionPaused,
                  }
                : prev
            );
            break;
          }
          case 'BID_ERROR': {
            setError(payload.message || 'Bid rejected by server');
            setTimeout(() => setError(null), 4000);
            break;
          }
          case 'ERROR': {
            setError(payload.message);
            break;
          }
          default:
            break;
        }
      } catch (e) {
        console.error('Error parsing WS message:', e);
      }
    };

    ws.onclose = () => {
      setConnected(false);
      // If closing was not intentional, initiate transparent reconnect without destroying room state
      if (!isIntentionalCloseRef.current && roomCodeRef.current) {
        setIsReconnecting(true);
        if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = setTimeout(() => {
          connect();
        }, 1500);
      }
    };

    ws.onerror = (err) => {
      console.warn('WebSocket connection error:', err);
    };
  }, []);

  // Connect whenever active roomCode or user identity changes
  useEffect(() => {
    if (roomCode && user?.id) {
      // 1. Instantly fetch authoritative room state via REST so UI is never blank
      syncRoomState(roomCode);
      // 2. Open WebSocket
      connect();
    } else {
      setRoom(null);
      setConnected(false);
      setIsReconnecting(false);
      if (socketRef.current) {
        isIntentionalCloseRef.current = true;
        socketRef.current.close();
      }
    }

    return () => {
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      if (socketRef.current) {
        isIntentionalCloseRef.current = true;
        socketRef.current.close();
      }
    };
  }, [roomCode, user?.id, connect, syncRoomState]);

  // Actions
  const placeBid = useCallback((amount?: number) => {
    const curRoom = room;
    const curUser = userRef.current;
    if (!curRoom || !curUser) return;
    const teamId =
      curUser.selectedTeamId ||
      curRoom.participants?.find((p) => p.uid === curUser.id)?.teamId ||
      (Object.values(curRoom.teams).find((t) => t.ownerUserId === curUser.id)?.id as TeamId | undefined);
    if (!teamId) {
      console.warn('[BID_WARN] No team assigned for user:', curUser.id);
      return;
    }
    const payload = {
      roomId: curRoom.roomId,
      playerId: curRoom.currentPlayer?.id,
      teamId,
      amount,
    };
    send('PLACE_BID', payload);
  }, [room, send]);

  const selectTeam = useCallback((teamId: TeamId) => {
    const curRoom = room;
    const curUser = userRef.current;
    if (!curRoom || !curUser) return;
    send('SELECT_TEAM', { roomId: curRoom.roomId, teamId, user: curUser });
  }, [room, send]);

  const startAuction = useCallback(() => {
    const curRoom = room;
    const curUser = userRef.current;
    if (!curRoom || !curUser) return;
    send('START_AUCTION', { roomId: curRoom.roomId, userId: curUser.id, role: curUser.role });
    fetch(`/api/rooms/${curRoom.roomId}/start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: curUser.id, role: curUser.role }),
    }).catch(() => {});
  }, [room, send]);

  const submitRetentions = useCallback((teamId: TeamId, retainedPlayerIds: string[]) => {
    const curRoom = room;
    if (!curRoom) return;
    send('SUBMIT_RETENTIONS', { roomId: curRoom.roomId, teamId, retainedPlayerIds });
  }, [room, send]);

  const hammerAction = useCallback((action: 'ONCE' | 'TWICE' | 'SOLD' | 'UNSOLD') => {
    const curRoom = room;
    if (!curRoom) return;
    send('AUCTIONEER_HAMMER', { roomId: curRoom.roomId, action });
  }, [room, send]);

  const timerControl = useCallback((action: 'PAUSE' | 'RESUME' | 'RESET' | 'SET', seconds?: number) => {
    const curRoom = room;
    if (!curRoom) return;
    send('AUCTIONEER_TIMER_CONTROL', { roomId: curRoom.roomId, action, seconds });
  }, [room, send]);

  const togglePauseAuction = useCallback((explicitAction?: 'PAUSE' | 'RESUME') => {
    const curRoom = room;
    const curUser = userRef.current;
    if (!curRoom || !curUser) return;
    const action: 'PAUSE' | 'RESUME' = explicitAction || (curRoom.auctionPaused ? 'RESUME' : 'PAUSE');

    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      send('TOGGLE_AUCTION_PAUSE', {
        roomId: curRoom.roomId,
        userId: curUser.id,
        role: curUser.role,
        action,
      });
    } else {
      fetch(`/api/rooms/${curRoom.roomId}/pause-toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: curUser.id, role: curUser.role, action }),
      }).catch((err) => {
        console.error('Failed to toggle pause via HTTP fallback:', err);
      });
    }
  }, [room, send]);

  const nextPlayer = useCallback(() => {
    const curRoom = room;
    if (!curRoom) return;
    send('NEXT_PLAYER', { roomId: curRoom.roomId });
  }, [room, send]);

  const decideRTM = useCallback((exercise: boolean) => {
    const curRoom = room;
    if (!curRoom) return;
    send('RTM_DECISION', { roomId: curRoom.roomId, exercise });
  }, [room, send]);

  const counterBidRTM = useCallback((counterBid: number) => {
    const curRoom = room;
    if (!curRoom) return;
    send('RTM_COUNTER_BID', { roomId: curRoom.roomId, counterBid });
  }, [room, send]);

  const finalMatchRTM = useCallback((match: boolean) => {
    const curRoom = room;
    if (!curRoom) return;
    send('RTM_FINAL_DECISION', { roomId: curRoom.roomId, match });
  }, [room, send]);

  const nominateAccelerated = useCallback((playerId: string) => {
    const curRoom = room;
    if (!curRoom) return;
    send('NOMINATE_ACCELERATED_PLAYER', { roomId: curRoom.roomId, playerId });
  }, [room, send]);

  const finishAuction = useCallback(() => {
    const curRoom = room;
    if (!curRoom) return;
    send('FINISH_AUCTION', { roomId: curRoom.roomId });
  }, [room, send]);

  const skipPlayer = useCallback(() => {
    const curRoom = room;
    const curUser = userRef.current;
    if (!curRoom || !curUser) return;
    send('auction:skip', { roomId: curRoom.roomId, userId: curUser.id });
  }, [room, send]);

  const endAuction = useCallback(() => {
    const curRoom = room;
    const curUser = userRef.current;
    if (!curRoom || !curUser) return;
    send('auction:end', { roomId: curRoom.roomId, userId: curUser.id });
  }, [room, send]);

  const sendChat = useCallback(
    (text: string) => {
      const curRoom = room;
      const curUser = userRef.current;
      if (!curRoom || !curUser || !text.trim()) return;
      send('SEND_CHAT', {
        roomId: curRoom.roomId,
        userId: curUser.id,
        userName: curUser.name,
        userAvatar: curUser.avatar,
        teamId: curUser.selectedTeamId,
        text: text.trim(),
      });
    },
    [room, send]
  );

  const confirmPlayingXI = useCallback(
    (teamId: TeamId, selectedPlayerIds: string[]) => {
      const curRoom = room;
      const curUser = userRef.current;
      if (!curRoom || !curUser) return;
      send('CONFIRM_PLAYING_XI', {
        roomId: curRoom.roomId,
        teamId,
        selectedPlayerIds,
        userId: curUser.id,
      });
    },
    [room, send]
  );

  const savePlayingXIDraft = useCallback(
    (teamId: TeamId, selectedPlayerIds: string[]) => {
      const curRoom = room;
      const curUser = userRef.current;
      if (!curRoom || !curUser) return;
      send('SAVE_PLAYING_XI_DRAFT', {
        roomId: curRoom.roomId,
        teamId,
        selectedPlayerIds,
        userId: curUser.id,
      });
    },
    [room, send]
  );

  const leaveRoom = useCallback(async () => {
    const curRoom = room;
    const curUser = userRef.current;
    isIntentionalCloseRef.current = true;
    if (curRoom && curUser) {
      send('LEAVE_ROOM', { roomId: curRoom.roomId, userId: curUser.id });
      try {
        await fetch(`/api/rooms/${curRoom.roomId}/leave`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: curUser.id }),
        });
      } catch {
        // ignore
      }
    }
    setRoom(null);
    setConnected(false);
    setIsReconnecting(false);
  }, [room, send]);

  const startNextMiniCycle = useCallback(async () => {
    const curRoom = room;
    const curUser = userRef.current;
    if (!curRoom || !curUser) return;
    send('START_NEXT_MINI_CYCLE', {
      roomId: curRoom.roomId,
      userId: curUser.id,
    });
    try {
      await fetch(`/api/rooms/${curRoom.roomId}/next-mini-cycle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: curUser.id }),
      });
    } catch {
      // ignore
    }
  }, [room, send]);

  return {
    room,
    connected,
    isReconnecting,
    error,
    chatMessages,
    sendChat,
    lastHammerMessage,
    setTransitionInfo,
    placeBid,
    selectTeam,
    startAuction,
    submitRetentions,
    startNextMiniCycle,
    hammerAction,
    timerControl,
    togglePauseAuction,
    nextPlayer,
    skipPlayer,
    endAuction,
    decideRTM,
    counterBidRTM,
    finalMatchRTM,
    nominateAccelerated,
    finishAuction,
    confirmPlayingXI,
    savePlayingXIDraft,
    leaveRoom,
    syncRoomState,
  };
}
