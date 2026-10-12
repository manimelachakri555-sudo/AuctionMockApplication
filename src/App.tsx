import React, { useState, useEffect } from 'react';
import { GoogleSignInPage } from './components/GoogleSignInPage';
import { Navbar } from './components/Navbar';
import { LobbyView } from './components/LobbyView';
import { RoomLobbyView } from './components/RoomLobbyView';
import { RetentionSetup } from './components/RetentionSetup';
import { PlayerSlideCard } from './components/PlayerSlideCard';
import { FriendAuctionArena } from './components/FriendAuctionArena';
import { BiddingHistoryFeed } from './components/BiddingHistoryFeed';
import { LiveAuctionChat } from './components/LiveAuctionChat';
import { RTMModal } from './components/RTMModal';
import { AcceleratedRoundModal } from './components/AcceleratedRoundModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { AuctionResultsView } from './components/AuctionResultsView';
import { SquadDrawer } from './components/SquadDrawer';
import { PlayerSearchModal } from './components/PlayerSearchModal';
import { AISquadRankingModal } from './components/AISquadRankingModal';
import { TeamSelectionModal } from './components/TeamSelectionModal';
import { exportSquadsToCSV } from './utils/squadExport';
import { INITIAL_PLAYERS } from './data/playersData';
import { useAuctionSocket } from './hooks/useAuctionSocket';
import { GameMode, TeamId, UserProfile } from './types/auction';
import { AlertCircle, Sparkles, MessageSquare, Gavel, Search, Bot, Loader2 } from 'lucide-react';
import {
  signOutFirebaseUser,
  onFirebaseAuthStateChanged,
  checkRedirectSignInResult,
} from './firebase/authService';

export default function App() {
  const [isAuthInitializing, setIsAuthInitializing] = useState(true);
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('ipl_auction_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  const [activeRoomCode, setActiveRoomCode] = useState<string | null>(() => {
    return localStorage.getItem('ipl_auction_room') || null;
  });

  const [initialJoinCode, setInitialJoinCode] = useState<string | null>(() => {
    try {
      const path = window.location.pathname;
      if (path.startsWith('/join/')) {
        return path.replace('/join/', '').toUpperCase().trim();
      }
      if (path.startsWith('/room/')) {
        return path.replace('/room/', '').toUpperCase().trim();
      }
      const params = new URLSearchParams(window.location.search);
      const j = params.get('join') || params.get('room');
      if (j) return j.toUpperCase().trim();
      return sessionStorage.getItem('pending_join_code') || null;
    } catch {
      return null;
    }
  });

  const [isSquadDrawerOpen, setIsSquadDrawerOpen] = useState(false);
  const [isAcceleratedModalOpen, setIsAcceleratedModalOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isPlayerSearchOpen, setIsPlayerSearchOpen] = useState(false);
  const [isAISquadRankingOpen, setIsAISquadRankingOpen] = useState(false);
  const [selectedSquadTeamId, setSelectedSquadTeamId] = useState<TeamId | undefined>(undefined);
  const [activeRightTab, setActiveRightTab] = useState<'FEED' | 'CHAT'>('FEED');
  const [unreadChatCount, setUnreadChatCount] = useState(0);

  // Real-Time WebSocket Hook
  const {
    room,
    connected,
    error,
    chatMessages = [],
    sendChat,
    lastHammerMessage,
    setTransitionInfo,
    placeBid,
    selectTeam,
    startAuction,
    submitRetentions,
    hammerAction,
    timerControl,
    nextPlayer,
    skipPlayer,
    endAuction,
    togglePauseAuction,
    decideRTM,
    counterBidRTM,
    finalMatchRTM,
    nominateAccelerated,
    finishAuction,
    confirmPlayingXI,
    savePlayingXIDraft,
    leaveRoom,
    startNextMiniCycle,
  } = useAuctionSocket({
    roomCode: activeRoomCode,
    user,
  });

  // Listen to Firebase Auth state & process any pending redirect sign-in
  useEffect(() => {
    let isMounted = true;

    // Process redirect result if returning from redirect OAuth flow (e.g. mobile/iframe)
    checkRedirectSignInResult()
      .then((redirectUser) => {
        if (isMounted && redirectUser) {
          setUser(redirectUser);
          localStorage.setItem('ipl_auction_user', JSON.stringify(redirectUser));
          setIsAuthInitializing(false);
        }
      })
      .catch((err) => {
        console.warn('[Auth] Redirect sign-in result check error:', err);
      });

    const unsubscribe = onFirebaseAuthStateChanged((firebaseUser) => {
      if (!isMounted) return;
      if (firebaseUser) {
        setUser((prev) => {
          if (!prev) return firebaseUser;
          return {
            ...firebaseUser,
            selectedTeamId: prev.selectedTeamId || firebaseUser.selectedTeamId,
          };
        });
        localStorage.setItem('ipl_auction_user', JSON.stringify(firebaseUser));
      } else {
        // If unauthenticated in Firebase, clear active user state
        setUser(null);
        localStorage.removeItem('ipl_auction_user');
      }
      setIsAuthInitializing(false);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('ipl_auction_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('ipl_auction_user');
    }
  }, [user]);

  useEffect(() => {
    if (activeRoomCode) {
      localStorage.setItem('ipl_auction_room', activeRoomCode);
    } else {
      localStorage.removeItem('ipl_auction_room');
    }
  }, [activeRoomCode]);

  // If room transitions to LEADERBOARD stage automatically
  useEffect(() => {
    if (room?.stage === 'LEADERBOARD') {
      setIsLeaderboardOpen(true);
    }
  }, [room?.stage]);

  // Track unread chat messages when on FEED tab
  const prevMsgCountRef = React.useRef(0);
  useEffect(() => {
    if (chatMessages.length > prevMsgCountRef.current) {
      if (activeRightTab !== 'CHAT') {
        setUnreadChatCount((prev) => prev + (chatMessages.length - prevMsgCountRef.current));
      }
      prevMsgCountRef.current = chatMessages.length;
    }
  }, [chatMessages.length, activeRightTab]);

  // Global Ctrl+K / Cmd+K Player Search Shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPlayerSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleGoogleSignInSuccess = (newUser: UserProfile) => {
    setUser(newUser);
    localStorage.setItem('ipl_auction_user', JSON.stringify(newUser));
    setIsAuthInitializing(false);
  };

  const handleSignOut = async () => {
    try {
      await signOutFirebaseUser();
    } catch (err) {
      console.error('Error during sign out:', err);
    }
    setUser(null);
    localStorage.removeItem('ipl_auction_user');
    localStorage.removeItem('ipl_auction_room');
    setActiveRoomCode(null);
  };

  const handleCreateRoom = async (mode: GameMode) => {
    if (!user) return;
    try {
      const updatedUser: UserProfile = {
        ...user,
        role: 'TEAM_OWNER',
        selectedTeamId: undefined, // Team selection happens inside the created room
      };
      setUser(updatedUser);

      const res = await fetch('/api/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hostUser: updatedUser, gameMode: mode }),
      });
      const data = await res.json();
      if (data.room?.roomCode) {
        const code = data.room.roomCode.toUpperCase();
        setActiveRoomCode(code);
        try {
          window.history.pushState({ roomCode: code }, '', `/room/${code}`);
        } catch {
          // ignore
        }
      }
    } catch (err) {
      console.error('Failed to create room via REST, falling back to local room code', err);
      setActiveRoomCode('IPL2026');
      try {
        window.history.pushState({ roomCode: 'IPL2026' }, '', '/room/IPL2026');
      } catch {
        // ignore
      }
    }
  };

  const handleJoinRoom = (roomCode: string) => {
    if (!user) return;
    const updatedUser: UserProfile = {
      ...user,
      role: 'TEAM_OWNER',
      selectedTeamId: undefined, // Team selection happens inside the joined room
    };
    setUser(updatedUser);
    const code = roomCode.toUpperCase();
    setActiveRoomCode(code);
    try {
      window.history.pushState({ roomCode: code }, '', `/room/${code}`);
    } catch {
      // ignore
    }
  };

  const handleLeaveRoom = () => {
    // 1. Notify backend socket to release team and handle host transfer
    leaveRoom();
    // 2. Clear room state and cached room code
    setActiveRoomCode(null);
    localStorage.removeItem('ipl_auction_room');
    sessionStorage.removeItem('pending_join_code');
    // 3. Clear selected team so participant can choose a fresh team upon rejoining
    setUser((prev) => (prev ? { ...prev, selectedTeamId: undefined } : null));
    // 4. Safely return URL to home
    try {
      window.history.pushState({}, '', '/');
    } catch {
      // ignore
    }
  };

  // Safe Browser Back / Popstate Navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/join/') || path.startsWith('/room/')) {
        const code = path.replace(/^\/(join|room)\//, '').toUpperCase().trim();
        if (code && code !== activeRoomCode) {
          setActiveRoomCode(code);
        }
      } else if (path === '/' && activeRoomCode) {
        // Popstate to root: preserve room state if user did not explicitly leave,
        // or allow re-entry
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeRoomCode]);

  // User's assigned franchise in this room session
  const userAssignedTeamId =
    user?.selectedTeamId ||
    room?.participants?.find((p) => p.uid === user?.id)?.teamId ||
    (room
      ? (Object.values(room.teams).find((t) => t.ownerUserId === user?.id)?.id as TeamId | undefined)
      : undefined);

  // Sync user.selectedTeamId when room authoritatively reports user's assigned franchise
  useEffect(() => {
    if (room && user && userAssignedTeamId && user.selectedTeamId !== userAssignedTeamId) {
      setUser((prev) => (prev ? { ...prev, selectedTeamId: userAssignedTeamId } : null));
    }
  }, [room, user?.id, userAssignedTeamId]);

  // Loading state while verifying active session on initial mount
  if (isAuthInitializing && !user) {
    return (
      <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-1 mb-4 shadow-xl shadow-amber-500/20 animate-pulse">
          <div className="w-full h-full bg-slate-950 rounded-[20px] flex items-center justify-center">
            <Gavel className="w-8 h-8 text-amber-400" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-amber-400 font-tech text-xs tracking-widest uppercase">
          <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
          <span>INITIALIZING IPL AUCTION ARENA...</span>
        </div>
      </div>
    );
  }

  // If user is not signed in yet, display clean dedicated Google Auth Landing Page
  if (!user) {
    return <GoogleSignInPage onSignInSuccess={handleGoogleSignInSuccess} />;
  }

  const handleConfirmTeamSelection = (teamId: TeamId) => {
    setUser((prev) => (prev ? { ...prev, selectedTeamId: teamId } : null));
    selectTeam(teamId);
  };

  // Authoritative leader or final winner for active display (prioritizes RTM winner over previous bidder)
  const activeWinningOrLeadingTeamId =
    room?.currentPlayer?.status === 'SOLD' && (room.currentPlayer.soldTo || (room as any).finalWinnerTeamId)
      ? ((room.currentPlayer.soldTo || (room as any).finalWinnerTeamId) as TeamId)
      : (room?.leadingTeamId || null);
  const leadingTeam = room && activeWinningOrLeadingTeamId ? room.teams[activeWinningOrLeadingTeamId] : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <Navbar
        room={room}
        user={user}
        connected={connected}
        onSignOut={handleSignOut}
        onLeaveRoom={handleLeaveRoom}
      />

      {/* Error alert toast */}
      {error && (
        <div className="bg-rose-500 text-white px-4 py-2 text-center text-xs font-tech font-bold flex items-center justify-center gap-2 shadow-lg">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {!activeRoomCode ? (
          /* Lobby / Room Selection */
          <LobbyView
            user={user}
            initialJoinCode={initialJoinCode}
            onCreateRoom={handleCreateRoom}
            onJoinRoom={handleJoinRoom}
          />
        ) : !room ? (
          /* Connecting Room Loader */
          <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
            <div className="w-16 h-16 rounded-full border-4 border-amber-500/20 border-t-amber-400 animate-spin mb-4" />
            <p className="font-tech text-amber-400 text-sm tracking-wider uppercase">
              Connecting to Room {activeRoomCode}...
            </p>
            <p className="text-slate-500 text-xs mt-1">Establishing server-authoritative WebSocket sync</p>
            <button
              onClick={handleLeaveRoom}
              className="mt-6 text-xs text-slate-400 hover:text-slate-200 underline font-tech"
            >
              Back to Room Lobby
            </button>
          </div>
        ) : !userAssignedTeamId ? (
          /* TEAM SELECTION STEP: Mandatory franchise claim after creating or joining room */
          <TeamSelectionModal
            room={room}
            user={user}
            onConfirmTeam={handleConfirmTeamSelection}
            onLeaveRoom={handleLeaveRoom}
            error={error}
          />
        ) : room.stage === 'LOBBY' ? (
          /* PRE-AUCTION ROOM LOBBY: FULL 350-PLAYER BROWSER (42 SETS), IMAGE MAPPER, RETENTIONS */
          <RoomLobbyView
            room={room}
            user={user}
            onStartAuction={startAuction}
            onSubmitRetentions={submitRetentions}
            onSelectTeam={handleConfirmTeamSelection}
            onLeaveRoom={handleLeaveRoom}
          />
        ) : room.stage === 'RETENTION' ? (
          /* Pre-Auction Retentions View */
          <RetentionSetup
            room={room}
            user={user}
            onSubmitRetentions={submitRetentions}
            onStartAuction={startAuction}
          />
        ) : room.stage === 'ENDED' ? (
          /* AUCTION ENDED: POST-AUCTION PLAYING XI SELECTION & DATA-BASED TEAM RATINGS */
          <AuctionResultsView
            room={room}
            user={user}
            onConfirmPlayingXI={confirmPlayingXI}
            onSavePlayingXIDraft={savePlayingXIDraft}
            onBackToLobby={handleLeaveRoom}
            onStartNextMiniCycle={startNextMiniCycle}
            onViewSquadDetails={(teamId) => {
              setSelectedSquadTeamId(teamId);
              setIsSquadDrawerOpen(true);
            }}
          />
        ) : (
          /* LIVE AUCTION ARENA */
          <div className="max-w-7xl mx-auto p-3 sm:p-5 space-y-5">
            {/* Top Stage Layout: Left Player Slide Card & Controls, Right Bidding Log */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Main Stage */}
              <div className="lg:col-span-8 space-y-5">
                <PlayerSlideCard
                  player={room.currentPlayer}
                  currentBid={room.currentBid}
                  leadingTeam={leadingTeam}
                  timer={room.timer}
                  timerRunning={room.timerRunning}
                  auctionPaused={room.auctionPaused}
                  hammerStage={room.hammerStage}
                  lastHammerMessage={lastHammerMessage}
                  totalPlayers={room.players.length}
                  currentIndex={room.currentPlayerIndex}
                  rtmAvailable={room.rtmAvailable}
                  rtmTeamId={room.rtmTeamId}
                />

                {/* Equal Roles Live Auction Arena */}
                <FriendAuctionArena
                  room={room}
                  user={user}
                  onPlaceBid={placeBid}
                  onSkipPlayer={skipPlayer}
                  onEndAuction={endAuction}
                  onTogglePauseAuction={togglePauseAuction}
                  onOpenAcceleratedModal={() => setIsAcceleratedModalOpen(true)}
                  onFinishAuction={finishAuction}
                  onOpenSquadDrawer={(teamId) => {
                    setSelectedSquadTeamId(teamId);
                    setIsSquadDrawerOpen(true);
                  }}
                  onSelectTeam={handleConfirmTeamSelection}
                />
              </div>

              {/* Right Live Activity Log & Friend War Room Chat */}
              <div className="lg:col-span-4 space-y-3">
                {/* Tab Switcher */}
                <div className="flex items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-md">
                  <button
                    type="button"
                    onClick={() => setActiveRightTab('FEED')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-tech font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      activeRightTab === 'FEED'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Gavel className="w-3.5 h-3.5" />
                    <span>Bidding Feed</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveRightTab('CHAT');
                      setUnreadChatCount(0);
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-tech font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer relative ${
                      activeRightTab === 'CHAT'
                        ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
                    <span>Friend Chat</span>
                    {unreadChatCount > 0 && activeRightTab !== 'CHAT' && (
                      <span className="px-1.5 py-0.2 rounded-full bg-pink-500 text-white text-[9px] font-bold animate-pulse">
                        {unreadChatCount}
                      </span>
                    )}
                  </button>
                </div>

                {activeRightTab === 'FEED' ? (
                  <BiddingHistoryFeed
                    history={room.bidHistory}
                  />
                ) : (
                  <LiveAuctionChat
                    room={room}
                    user={user}
                    messages={chatMessages}
                    onSendMessage={sendChat}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* RTM Overlay */}
      {room && room.rtmState && room.rtmState.active && (
        <RTMModal
          rtmState={room.rtmState}
          room={room}
          user={user}
          onDecideRTM={decideRTM}
          onCounterBidRTM={counterBidRTM}
          onFinalMatchRTM={finalMatchRTM}
        />
      )}

      {/* Accelerated Round Modal */}
      {room && isAcceleratedModalOpen && (
        <AcceleratedRoundModal
          room={room}
          onNominatePlayer={nominateAccelerated}
          onClose={() => setIsAcceleratedModalOpen(false)}
        />
      )}

      {/* 12. AUTOMATIC SET PROGRESSION CELEBRATION MODAL */}
      {setTransitionInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-amber-500/20 via-slate-900 to-slate-950 border-2 border-amber-400 rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl shadow-amber-500/30">
            <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-4 animate-bounce" />
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Official IPL Auction Progression
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
              {setTransitionInfo.completedSet} COMPLETE!
            </h2>
            <div className="my-4 py-3.5 px-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
              <p className="text-xs font-tech text-slate-300">
                Advancing to Next Official Set:
              </p>
              <p className="text-xl font-display font-bold text-amber-300 mt-1">
                {setTransitionInfo.nextSet}
              </p>
            </div>
            <p className="text-xs font-tech text-slate-400">
              Loading the first player of the next set automatically...
            </p>
          </div>
        </div>
      )}

      {/* Leaderboard Modal */}
      {room && isLeaderboardOpen && (
        <LeaderboardModal
          room={room}
          onClose={() => setIsLeaderboardOpen(false)}
          onViewSquadDetails={(teamId) => {
            setSelectedSquadTeamId(teamId);
            setIsSquadDrawerOpen(true);
          }}
        />
      )}

      {/* Squad Drawer */}
      {room && (
        <SquadDrawer
          isOpen={isSquadDrawerOpen}
          room={room}
          initialTeamId={selectedSquadTeamId}
          onClose={() => setIsSquadDrawerOpen(false)}
        />
      )}

      {/* Global Player Search Modal */}
      <PlayerSearchModal
        isOpen={isPlayerSearchOpen}
        onClose={() => setIsPlayerSearchOpen(false)}
        players={room?.players || INITIAL_PLAYERS}
        room={room}
        onSelectPlayer={(p) => {
          // If player belongs to a team, open their squad drawer
          if (p.soldTo && room) {
            setSelectedSquadTeamId(p.soldTo as TeamId);
            setIsSquadDrawerOpen(true);
          }
        }}
      />

      {/* AI Squad Rankings & Evaluation Modal */}
      {room && isAISquadRankingOpen && (
        <AISquadRankingModal
          isOpen={isAISquadRankingOpen}
          onClose={() => setIsAISquadRankingOpen(false)}
          room={room}
          onViewSquadDetails={(teamId) => {
            setSelectedSquadTeamId(teamId);
            setIsSquadDrawerOpen(true);
          }}
        />
      )}
    </div>
  );
}
