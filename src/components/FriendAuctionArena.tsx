import React, { useState, useMemo, useEffect } from 'react';
import {
  Gavel,
  Play,
  Pause,
  SkipForward,
  Zap,
  Users,
  CreditCard,
  StopCircle,
  AlertTriangle,
  Check,
  Shield,
} from 'lucide-react';
import { AuctionRoomState, TeamId, UserProfile } from '../types/auction';
import { IPL_TEAMS } from '../data/teamsData';
import {
  formatLakhsToINR,
  getNextBidAmount,
  getNextBidIncrement,
  validateBid,
  MIN_SQUAD_SIZE,
  MAX_SQUAD_SIZE,
  MAX_OVERSEAS,
  MIN_BASE_PRICE,
} from '../utils/auctionCalculations';

interface FriendAuctionArenaProps {
  room: AuctionRoomState;
  user: UserProfile;
  onPlaceBid: (amount?: number) => void;
  onNextPlayer?: () => void;
  onSkipPlayer?: () => void;
  onEndAuction?: () => void;
  onTimerControl?: (action: 'PAUSE' | 'RESUME' | 'RESET' | 'SET', seconds?: number) => void;
  onTogglePauseAuction?: (action?: 'PAUSE' | 'RESUME') => void;
  onHammerAction?: (action: 'ONCE' | 'TWICE' | 'SOLD' | 'UNSOLD') => void;
  onOpenAcceleratedModal?: () => void;
  onFinishAuction?: () => void;
  onOpenSquadDrawer: (teamId: TeamId) => void;
  onSelectTeam?: (teamId: TeamId) => void;
}

export const FriendAuctionArena: React.FC<FriendAuctionArenaProps> = ({
  room,
  user,
  onPlaceBid,
  onSkipPlayer,
  onEndAuction,
  onTimerControl,
  onTogglePauseAuction,
  onOpenSquadDrawer,
  onSelectTeam,
}) => {
  const [customBidInput, setCustomBidInput] = useState<string>('');
  const [showCustomBid, setShowCustomBid] = useState(false);
  const [showConfirmSkip, setShowConfirmSkip] = useState(false);
  const [showConfirmEnd, setShowConfirmEnd] = useState(false);
  const [isTogglingPause, setIsTogglingPause] = useState(false);
  const [isBiddingPending, setIsBiddingPending] = useState(false);

  // Authoritatively check room owner or HOST role
  const isRoomOwner =
    (room.hostUid || room.hostUserId) === user.id ||
    (user as any).firebaseUid === (room.hostUid || room.hostUserId) ||
    (user as any).uid === (room.hostUid || room.hostUserId);

  const isHost = isRoomOwner || user.role === 'HOST';
  const canPauseResume = user.role === 'HOST' || isRoomOwner;

  const handleTogglePause = async () => {
    if (isTogglingPause) return;
    setIsTogglingPause(true);
    const desiredAction: 'PAUSE' | 'RESUME' = room.auctionPaused ? 'RESUME' : 'PAUSE';
    try {
      if (onTogglePauseAuction) {
        onTogglePauseAuction(desiredAction);
      } else if (onTimerControl) {
        onTimerControl(desiredAction);
      } else {
        await fetch(`/api/rooms/${room.roomId}/pause-toggle`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.id, role: user.role, action: desiredAction }),
        });
      }
    } catch (err) {
      console.error('Failed to toggle auction pause state:', err);
    } finally {
      setTimeout(() => setIsTogglingPause(false), 500);
    }
  };

  // Authoritatively resolve user's franchise: user.selectedTeamId || room.participants || room.teams owner
  const myTeamId =
    user.selectedTeamId ||
    room.participants?.find((p) => p.uid === user.id)?.teamId ||
    (Object.values(room.teams).find((t) => t.ownerUserId === user.id)?.id as TeamId | undefined);
  const myTeam = myTeamId ? room.teams[myTeamId] : null;
  const { currentPlayer, currentBid, leadingTeamId, hammerStage, timerRunning } = room;

  const isLeading = myTeamId ? leadingTeamId === myTeamId : false;
  const isPlayerDecided = currentPlayer && (currentPlayer.status === 'SOLD' || currentPlayer.status === 'UNSOLD' || currentPlayer.status === 'SKIPPED' || hammerStage === 4);
  const isBiddingActive = currentPlayer && !isPlayerDecided && hammerStage < 4 && (room.stage === 'LIVE' || room.stage === 'ACCELERATED');

  // Next standard bid & increment
  const nextStandardBid = currentPlayer ? getNextBidAmount(currentBid, currentPlayer.basePrice) : 0;
  const nextIncrement = getNextBidIncrement(currentBid);

  // Bid validation for my franchise (checks purse, reserve for min 18 players, squad limit, overseas)
  const validation = useMemo(() => {
    if (!currentPlayer || !myTeam) {
      return { allowed: false, reason: myTeam ? 'No active player on auction block' : 'Please claim a franchise table below to bid' };
    }
    return validateBid(myTeam, currentPlayer, nextStandardBid, isLeading);
  }, [myTeam, currentPlayer, nextStandardBid, isLeading]);

  const canClickBid = Boolean(
    myTeam &&
    !room.auctionPaused &&
    isBiddingActive &&
    !isLeading &&
    validation.allowed &&
    !isBiddingPending
  );

  useEffect(() => {
    setIsBiddingPending(false);
  }, [currentBid, currentPlayer?.id]);

  const handleQuickBid = (amount: number) => {
    if (isBiddingPending || !canClickBid) return;
    setIsBiddingPending(true);
    onPlaceBid(amount);
    setTimeout(() => setIsBiddingPending(false), 350);
  };

  // Reserve status
  const currentSquadSize = myTeam?.squad.length || 0;
  const overseasCount = myTeam?.squad.filter((p) => p.isOverseas).length || 0;
  const remainingSlotsToMin18 = Math.max(0, MIN_SQUAD_SIZE - currentSquadSize);
  const minReserveRequired = remainingSlotsToMin18 * MIN_BASE_PRICE;

  const handleCustomBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseFloat(customBidInput);
    if (isNaN(parsed) || parsed <= 0) return;
    const amountInLakhs = Math.round(parsed * 100);
    if (amountInLakhs <= currentBid) {
      return;
    }
    onPlaceBid(amountInLakhs);
    setCustomBidInput('');
    setShowCustomBid(false);
  };

  // Teams with active human managers in the room
  const managedTeamIds = useMemo(
    () =>
      new Set(
        (room?.participants || [])
          .filter((p) => !!p.teamId)
          .map((p) => p.teamId as TeamId)
      ),
    [room?.participants]
  );

  const activeTeams = useMemo(
    () =>
      Object.values(room?.teams || {}).filter(
        (t) => t && (managedTeamIds.has(t.id) || !!t.ownerUserId || t.isActive)
      ),
    [room?.teams, managedTeamIds]
  );

  return (
    <div className="space-y-4">
      {/* 1. Control & Status Bar */}
      <div className="bg-[#080D1C] border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
        {/* Current State Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#FFC400]/10 border border-[#FFC400]/30 flex items-center justify-center text-[#FFC400]">
            <Gavel className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-tech font-bold uppercase text-[#FFC400] block tracking-wider">
              AUCTION STATUS
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-200">
              {room.auctionPaused
                ? 'AUCTION PAUSED BY HOST'
                : isPlayerDecided
                ? currentPlayer?.status === 'SOLD'
                  ? `SOLD to ${(currentPlayer.soldTo && (room.teams[currentPlayer.soldTo as TeamId]?.name || IPL_TEAMS[currentPlayer.soldTo as TeamId]?.name)) || 'Franchise'} for ${formatLakhsToINR(currentPlayer.soldPrice || currentBid || 0)}${currentPlayer.wasRTMUsed ? ' (via Right To Match)' : ''}`
                  : 'UNSOLD — No bids received'
                : hammerStage === 1
                ? 'GOING ONCE (2.0s)...'
                : hammerStage === 2
                ? 'GOING TWICE (2.0s)...'
                : hammerStage === 3
                ? 'GOING THRICE (2.0s)...'
                : isLeading
                ? 'Your franchise has the highest bid!'
                : leadingTeamId
                ? `${room.teams[leadingTeamId]?.shortName} is leading the bidding`
                : 'Awaiting opening bid...'}
            </p>
          </div>
        </div>

        {/* Controls: Host Controls & Shared Timer */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Host / Room Owner Pause / Resume Button */}
          {canPauseResume && (
            <button
              type="button"
              onClick={handleTogglePause}
              disabled={isTogglingPause}
              title={room.auctionPaused ? 'Resume live auction bidding' : 'Pause live auction bidding'}
              className={`px-3.5 py-1.5 rounded-lg font-tech font-bold text-xs uppercase flex items-center gap-1.5 cursor-pointer transition-all shadow-sm ${
                room.auctionPaused
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white ring-1 ring-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.35)]'
                  : 'bg-amber-600 hover:bg-amber-500 text-white border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]'
              } ${isTogglingPause ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {room.auctionPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-white fill-white" />
                  <span>RESUME AUCTION</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-white fill-white" />
                  <span>PAUSE AUCTION</span>
                </>
              )}
            </button>
          )}

          {/* Host-Only SKIP PLAYER Button */}
          {isHost && !isPlayerDecided && (
            <button
              onClick={() => setShowConfirmSkip(true)}
              title="Host: Skip this player without selling"
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-tech text-xs uppercase flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <SkipForward className="w-3.5 h-3.5 text-cyan-400" />
              <span>SKIP PLAYER</span>
            </button>
          )}

          {/* Host-Only END AUCTION Button */}
          {isHost && (
            <button
              onClick={() => setShowConfirmEnd(true)}
              title="Host: Stop the auction"
              className="px-3.5 py-1.5 rounded-lg bg-rose-600/90 hover:bg-rose-500 text-white font-tech font-bold text-xs uppercase flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm"
            >
              <StopCircle className="w-3.5 h-3.5" />
              <span>END AUCTION</span>
            </button>
          )}

          {/* My Squad Quick Action Button */}
          {myTeam ? (
            <button
              type="button"
              onClick={() => onOpenSquadDrawer(myTeam.id)}
              className="px-3.5 py-1.5 rounded-lg bg-[#FFC400]/10 hover:bg-[#FFC400]/20 text-[#FFC400] border border-[#FFC400]/40 font-tech font-bold text-xs uppercase flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm"
              title="Inspect Live Squad & Role Needs"
            >
              <Users className="w-3.5 h-3.5" />
              <span>MY SQUAD ({currentSquadSize}/25)</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                const firstActive = activeTeams[0]?.id;
                if (firstActive) onOpenSquadDrawer(firstActive);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-tech font-bold text-xs uppercase flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm"
              title="Inspect Live Squads"
            >
              <Users className="w-3.5 h-3.5" />
              <span>SQUADS</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. My Franchise Bidding Command Station */}
      {myTeam ? (
        <div
          className="bg-[#080D1C] border-2 rounded-2xl p-5 shadow-xl transition-all"
          style={{ borderColor: `${myTeam.primaryColor}80` }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Left: My Franchise Status & Rules */}
            <div className="w-full md:w-auto flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-editorial font-extrabold text-2xl text-white shadow-md shrink-0"
                style={{ backgroundColor: myTeam.primaryColor }}
              >
                {myTeam.shortName}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold font-editorial tracking-wide text-white uppercase">
                    {myTeam.name}
                  </h3>
                  <span className="text-[10px] font-tech px-2 py-0.5 rounded bg-[#FFC400]/15 text-[#FFC400] border border-[#FFC400]/30 uppercase font-bold">
                    YOUR TABLE
                  </span>
                </div>

                {/* Purse, Squad & Overseas Badges */}
                <div className="flex items-center gap-3 mt-1.5 flex-wrap text-xs font-tech">
                  <div className="flex items-center gap-1 text-[#FFC400] font-bold">
                    <span>Purse:</span>
                    <span className="font-mono">{formatLakhsToINR(myTeam.purse)}</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1 text-slate-300">
                    <Users className="w-3.5 h-3.5 text-slate-500" />
                    <span>Squad: {currentSquadSize}/{MAX_SQUAD_SIZE}</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1 text-slate-300">
                    <span>Overseas: {overseasCount}/{MAX_OVERSEAS}</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1 text-cyan-400 font-bold">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>RTM: {myTeam.rtmCardsRemaining}</span>
                  </div>
                </div>

                {remainingSlotsToMin18 > 0 && (
                  <p className="text-[10px] text-slate-400 font-tech mt-1">
                    Reserve Required: <span className="text-[#FFC400] font-bold">{formatLakhsToINR(minReserveRequired)}</span> (for {remainingSlotsToMin18} slots at base ₹30L)
                  </p>
                )}
              </div>
            </div>

            {/* Right: Bidding Button Action */}
            <div className="w-full md:w-auto flex flex-col items-center sm:items-end gap-2">
              <button
                type="button"
                onClick={() => handleQuickBid(nextStandardBid)}
                disabled={!canClickBid || isBiddingPending}
                className={`w-full sm:w-auto min-w-[220px] py-3.5 px-6 rounded-xl font-editorial font-extrabold text-xl tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                  room.auctionPaused
                    ? 'bg-slate-800 text-amber-400 border border-amber-500/40 cursor-not-allowed'
                    : isBiddingPending
                    ? 'bg-amber-400 text-slate-950 scale-95 opacity-80 cursor-wait'
                    : !isBiddingActive
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                    : isLeading
                    ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/50 cursor-default'
                    : canClickBid
                    ? 'bg-[#FFC400] hover:bg-amber-300 text-slate-950 shadow-[0_0_20px_rgba(255,196,0,0.4)] hover:scale-105 active:scale-95'
                    : 'bg-slate-800/80 text-rose-400 border border-rose-500/40 cursor-not-allowed'
                }`}
              >
                <Zap className={`w-5 h-5 fill-current ${isBiddingPending ? 'animate-bounce' : ''}`} />
                <span>
                  {room.auctionPaused
                    ? 'AUCTION PAUSED'
                    : isBiddingPending
                    ? 'PLACING BID...'
                    : !isBiddingActive
                    ? isPlayerDecided
                      ? currentPlayer?.status === 'SOLD'
                        ? 'PLAYER SOLD'
                        : 'PLAYER UNSOLD'
                      : 'BIDDING PAUSED'
                    : isLeading
                    ? `LEADING (${formatLakhsToINR(currentBid)})`
                    : canClickBid
                    ? `BID ${formatLakhsToINR(nextStandardBid)}`
                    : !validation.allowed
                    ? validation.reason?.includes('Squad limit')
                      ? 'SQUAD FULL (25/25)'
                      : validation.reason?.includes('Overseas')
                      ? 'OVERSEAS LIMIT (8/8)'
                      : 'INSUFFICIENT PURSE'
                    : 'CANNOT BID'}
                </span>
              </button>

              <div className="flex items-center gap-3 text-[11px] font-tech text-slate-400">
                <span>Increment: <strong className="text-[#FFC400]">+{formatLakhsToINR(nextIncrement)}</strong></span>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setShowCustomBid(!showCustomBid)}
                  className="text-[#FFC400] hover:underline cursor-pointer"
                >
                  Custom Bid
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => myTeamId && onOpenSquadDrawer(myTeamId)}
                  className="text-slate-300 hover:text-white hover:underline cursor-pointer"
                >
                  View Squad ({currentSquadSize})
                </button>
              </div>

              {room.auctionPaused && (
                <div className="flex items-center gap-1.5 text-[11px] font-tech text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30">
                  <Pause className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                  <span>Auction is paused by host. Bidding will resume shortly.</span>
                </div>
              )}

              {!validation.allowed && isBiddingActive && !isLeading && (
                <div className="flex items-center gap-1.5 text-[11px] font-tech text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/30">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>{validation.reason}</span>
                </div>
              )}
              {isLeading && isBiddingActive && (
                <div className="flex items-center gap-1.5 text-[11px] font-tech text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Your franchise holds highest bid. If outbid, you can bid again immediately!</span>
                </div>
              )}
            </div>
          </div>

          {/* Custom Bid Input */}
          {showCustomBid && (
            <form onSubmit={handleCustomBidSubmit} className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
              <input
                type="number"
                step="0.05"
                min="0.3"
                value={customBidInput}
                onChange={(e) => setCustomBidInput(e.target.value)}
                placeholder={`Amount in Cr (e.g. ${(nextStandardBid / 100).toFixed(2)})`}
                className="w-full max-w-xs py-1.5 px-3 rounded-lg bg-slate-950 border border-slate-700 text-[#FFC400] text-xs font-mono focus:outline-none focus:border-[#FFC400]"
              />
              <button
                type="submit"
                className="py-1.5 px-4 rounded-lg bg-[#FFC400] hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase font-tech cursor-pointer transition-colors"
              >
                Place Custom Bid
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="bg-[#080D1C] border border-amber-500/40 rounded-2xl p-5 text-center space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FFC400] mx-auto">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-editorial tracking-wide text-white uppercase">
              CLAIM A FRANCHISE TABLE TO BID
            </h3>
            <p className="text-xs text-slate-400 font-sans max-w-md mx-auto">
              You are currently spectating. Claim an available franchise table below to place bids in this live auction room.
            </p>
          </div>
          {onSelectTeam && (
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {Object.values(room.teams)
                .filter((t) => !t.ownerUserId && !(room.participants || []).some((p) => p.teamId === t.id))
                .map((t) => (
                  <button
                    key={t.id}
                    onClick={() => onSelectTeam(t.id)}
                    className="px-3.5 py-2 rounded-xl border font-tech text-xs font-bold uppercase transition-all cursor-pointer hover:scale-105 bg-slate-900 shadow-md"
                    style={{ borderColor: t.primaryColor, color: t.primaryColor }}
                  >
                    Claim {t.shortName} Table
                  </button>
                ))}
            </div>
          )}
        </div>
      )}

      {/* 3. Participating Franchises Grid */}
      <div className="bg-[#080D1C] border border-slate-800 rounded-2xl p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
          <h4 className="text-xs font-tech font-bold uppercase tracking-wider text-slate-300">
            Active Managed Franchises ({activeTeams.length})
          </h4>
          <span className="text-[10px] text-amber-400/90 font-tech">
            {activeTeams.length === 10
              ? 'All 10 Franchises Participating'
              : `${activeTeams.length} Active • Only managed teams participate in RTM`}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
          {activeTeams.map((t) => {
            const isWinnerThis = currentPlayer?.status === 'SOLD' && currentPlayer.soldTo === t.id;
            const isLeadingThis = !isWinnerThis && leadingTeamId === t.id && (!currentPlayer?.status || currentPlayer?.status === 'UPCOMING');
            const isMe = myTeamId === t.id;
            return (
              <div
                key={t.id}
                onClick={() => onOpenSquadDrawer(t.id)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer relative ${
                  isWinnerThis
                    ? 'border-emerald-400 bg-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.35)] ring-1 ring-emerald-400'
                    : isLeadingThis
                    ? 'border-[#FFC400] bg-[#FFC400]/10 shadow-[0_0_10px_rgba(255,196,0,0.15)]'
                    : isMe
                    ? 'border-cyan-500/50 bg-slate-900/80 ring-1 ring-cyan-500/30'
                    : 'border-slate-800 bg-slate-950/60 hover:bg-slate-900'
                }`}
              >
                {isWinnerThis && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 bg-emerald-500 text-slate-950 font-tech font-bold text-[8px] rounded uppercase shadow">
                    WINNER
                  </span>
                )}
                <div
                  className="w-7 h-7 mx-auto rounded-lg flex items-center justify-center font-bold text-xs text-white shadow-sm mb-1.5"
                  style={{ backgroundColor: t.primaryColor }}
                >
                  {t.shortName}
                </div>
                <p className="text-[11px] font-bold text-slate-200 truncate">{t.shortName}</p>
                {t.ownerName && (
                  <p className="text-[9px] font-sans text-slate-400 truncate">
                    {t.ownerName}
                  </p>
                )}
                <p className="text-[10px] font-mono font-bold text-[#FFC400] mt-0.5">
                  {formatLakhsToINR(t.purse)}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-[9px] font-tech text-slate-400 mt-0.5">
                  <span>{t.squad?.length || 0}/25</span>
                  <span>•</span>
                  <span className="text-cyan-400">{t.rtmCardsRemaining} RTM</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Host-Only Skip Player Confirmation Modal */}
      {showConfirmSkip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-md bg-[#080D1C] border border-cyan-500/50 rounded-2xl p-6 shadow-2xl text-slate-100">
            <div className="flex items-center gap-3 mb-3 text-cyan-400">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <SkipForward className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-editorial font-bold uppercase tracking-wide text-white">
                  SKIP PLAYER
                </h3>
                <p className="text-[11px] font-tech text-cyan-400">Host Auction Command</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans mb-6 leading-relaxed">
              <strong>{currentPlayer?.name}</strong> will be marked as <span className="text-[#FFC400] font-bold">SKIPPED</span>. No team receives the player, no purse is deducted, and the auction proceeds to the next player.
            </p>

            <div className="flex items-center justify-end gap-3 font-tech">
              <button
                onClick={() => setShowConfirmSkip(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowConfirmSkip(false);
                  if (onSkipPlayer) onSkipPlayer();
                }}
                className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-editorial font-extrabold uppercase tracking-wider cursor-pointer shadow-lg"
              >
                <span>SKIP PLAYER</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Host-Only End Auction Confirmation Modal (Section 18) */}
      {showConfirmEnd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-md bg-[#080D1C] border border-rose-500/80 rounded-2xl p-6 shadow-2xl text-slate-100">
            <div className="flex items-center gap-3 mb-3 text-rose-400">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                <StopCircle className="w-5 h-5 text-rose-500 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-editorial font-bold uppercase tracking-wide text-white">
                  END AUCTION?
                </h3>
                <p className="text-[11px] font-tech text-rose-400">Host Auction Command</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans mb-6 leading-relaxed">
              Are you sure you want to stop this auction?
            </p>

            <div className="flex items-center justify-end gap-3 font-tech">
              <button
                onClick={() => setShowConfirmEnd(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase cursor-pointer transition-colors"
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  setShowConfirmEnd(false);
                  if (onEndAuction) onEndAuction();
                }}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-editorial font-extrabold uppercase tracking-wider cursor-pointer shadow-lg flex items-center gap-1.5"
              >
                <StopCircle className="w-3.5 h-3.5" />
                <span>END AUCTION</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
