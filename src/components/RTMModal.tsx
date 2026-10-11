import React, { useState, useEffect } from 'react';
import { ShieldCheck, Flame, AlertCircle, ArrowUpRight, Check, X, Sparkles, Timer } from 'lucide-react';
import { AuctionRoomState, RTMState, TeamId, UserProfile } from '../types/auction';
import { formatLakhsToINR, getNextBidAmount } from '../utils/auctionCalculations';

interface RTMModalProps {
  rtmState: RTMState;
  room: AuctionRoomState;
  user: UserProfile;
  onDecideRTM: (exercise: boolean) => void;
  onCounterBidRTM: (counterBid: number) => void;
  onFinalMatchRTM: (match: boolean) => void;
}

export const RTMModal: React.FC<RTMModalProps> = ({
  rtmState,
  room,
  user,
  onDecideRTM,
  onCounterBidRTM,
  onFinalMatchRTM,
}) => {
  const { player, originalWinningTeamId, originalBid, previousTeamId, step, counterBid } = rtmState;
  const prevTeam = room?.teams?.[previousTeamId] || { name: previousTeamId, shortName: previousTeamId, primaryColor: '#888', rtmCardsRemaining: 0 };
  const winTeam = room?.teams?.[originalWinningTeamId] || { name: originalWinningTeamId, shortName: originalWinningTeamId, primaryColor: '#888' };

  const isPrevTeamOwner = user.selectedTeamId === previousTeamId || user.role === 'AUCTIONEER';
  const isWinTeamOwner = user.selectedTeamId === originalWinningTeamId || user.role === 'AUCTIONEER';

  const [counterBidInput, setCounterBidInput] = useState<string>(
    ((originalBid + 100) / 100).toFixed(2)
  );

  const [secondsRemaining, setSecondsRemaining] = useState(() => {
    if (!rtmState.timestamp) return 10;
    const elapsed = Math.floor((Date.now() - rtmState.timestamp) / 1000);
    return Math.max(0, 10 - elapsed);
  });

  useEffect(() => {
    if (room?.auctionPaused) return; // Freeze countdown while paused
    const timer = setInterval(() => {
      if (!rtmState.timestamp) return;
      const elapsed = Math.floor((Date.now() - rtmState.timestamp) / 1000);
      setSecondsRemaining(Math.max(0, 10 - elapsed));
    }, 500);
    return () => clearInterval(timer);
  }, [rtmState.timestamp, room?.auctionPaused]);

  const handleCounterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(counterBidInput);
    if (isNaN(val) || val <= 0) return;
    const lakhs = Math.round(val * 100);
    onCounterBidRTM(Math.max(originalBid, lakhs));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-slate-900 border-2 border-purple-500/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-500/20 text-slate-100 overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-xs font-tech font-bold uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> OFFICIAL 2026 IPL RULE TWIST
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-wider text-purple-300">
            RIGHT TO MATCH (RTM) CARD TRIGGERED
          </h2>
          <p className="text-xs text-slate-400 font-tech mt-1">
            {player.name} previously represented <strong>{prevTeam.name}</strong>
          </p>
        </div>

        {/* Player & Teams Matchup Card */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <img
              src={player.photo}
              alt={player.name}
              className="w-14 h-14 rounded-2xl object-cover border border-purple-500/40"
            />
            <div>
              <h3 className="text-base font-bold text-slate-100">{player.name}</h3>
              <p className="text-xs font-tech text-slate-400">
                Winning Bid: <strong className="text-amber-400">{formatLakhsToINR(originalBid)}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-right">
            <div>
              <span className="text-[10px] font-tech text-slate-500 block uppercase">Highest Bidder</span>
              <span className="text-xs font-bold text-slate-200">{winTeam.name}</span>
            </div>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-tech font-bold text-white text-xs shadow"
              style={{ backgroundColor: winTeam.primaryColor }}
            >
              {winTeam.shortName}
            </div>
          </div>
        </div>

        {/* AUCTION PAUSED BANNER */}
        {room?.auctionPaused && (
          <div className="mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center gap-2 text-amber-300 font-tech text-xs">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Auction is paused by Host. RTM countdown is frozen at {secondsRemaining}s.</span>
          </div>
        )}

        {/* STEP 1: Awaiting Initial RTM Decision from Previous Team */}
        {step === 'AWAITING_RTM_DECISION' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-xs font-tech leading-relaxed text-slate-300">
              <div className="flex items-center justify-between mb-1">
                <strong className="text-purple-300 block">
                  Decision Required for {prevTeam.name} ({prevTeam.rtmCardsRemaining} RTM remaining):
                </strong>
                <span className={`px-2 py-0.5 rounded font-mono font-bold text-xs flex items-center gap-1 ${secondsRemaining <= 3 ? 'bg-rose-500/30 text-rose-300 border border-rose-500/50 animate-pulse' : 'bg-purple-500/30 text-purple-200 border border-purple-500/50'}`}>
                  <Timer className="w-3.5 h-3.5" /> {secondsRemaining}s
                </span>
              </div>
              Do you wish to invoke your Right To Match card for {player.name} at {formatLakhsToINR(originalBid)}?
            </div>

            {isPrevTeamOwner ? (
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => onDecideRTM(true)}
                  className="py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 cursor-pointer"
                >
                  <Check className="w-4 h-4" /> YES, EXERCISE RTM
                </button>
                <button
                  onClick={() => onDecideRTM(false)}
                  className="py-3 px-4 rounded-2xl bg-slate-950 border border-slate-700 hover:bg-slate-800 text-slate-400 font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <X className="w-4 h-4" /> NO, PASS (SELL TO {winTeam.shortName})
                </button>
              </div>
            ) : (
              <div className="text-center py-3 text-xs font-tech text-slate-400 bg-slate-950 rounded-xl border border-slate-800 animate-pulse">
                Awaiting {prevTeam.name} owner to decide on RTM card...
              </div>
            )}
          </div>
        )}

        {/* STEP 2: The Twist! Winning Bidder gets one final chance to raise their bid */}
        {step === 'AWAITING_COUNTER_BID' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-xs font-tech leading-relaxed text-slate-200">
              <strong className="text-amber-400 block mb-1 text-sm">
                💥 THE NEW IPL RTM TWIST:
              </strong>
              {prevTeam.name} has opted to exercise RTM! As the winning bidder, <strong>{winTeam.name}</strong> gets <strong>ONE FINAL CHANCE</strong> to raise your bid. Whatever amount you state, {prevTeam.name} will have to match it or concede!
            </div>

            {isWinTeamOwner ? (
              <form onSubmit={handleCounterSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-[11px] font-tech text-slate-400 uppercase mb-1">
                    Enter Final Counter-Bid in Crores (Minimum {formatLakhsToINR(originalBid)}):
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min={(originalBid / 100).toFixed(2)}
                    value={counterBidInput}
                    onChange={(e) => setCounterBidInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-amber-400 font-tech font-bold text-lg text-center"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-tech font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    Raise Final Bid
                  </button>
                  <button
                    type="button"
                    onClick={() => onCounterBidRTM(originalBid)}
                    className="py-3 px-4 rounded-2xl bg-slate-950 border border-slate-700 hover:bg-slate-800 text-slate-300 font-tech font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Keep Original ({formatLakhsToINR(originalBid)})
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-3 text-xs font-tech text-amber-400 bg-slate-950 rounded-xl border border-slate-800 animate-pulse">
                Awaiting {winTeam.name} to submit their final raised counter-bid...
              </div>
            )}
          </div>
        )}

        {/* STEP 3: Final Match decision from Previous Team */}
        {step === 'AWAITING_FINAL_MATCH' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/40 text-xs font-tech leading-relaxed text-slate-200">
              <div className="flex items-center justify-between mb-1">
                <strong className="text-purple-300 block text-sm">
                  FINAL MATCH DECISION FOR {prevTeam.name}:
                </strong>
                <span className={`px-2 py-0.5 rounded font-mono font-bold text-xs flex items-center gap-1 ${secondsRemaining <= 3 ? 'bg-rose-500/30 text-rose-300 border border-rose-500/50 animate-pulse' : 'bg-purple-500/30 text-purple-200 border border-purple-500/50'}`}>
                  <Timer className="w-3.5 h-3.5" /> {secondsRemaining}s
                </span>
              </div>
              {winTeam.name} raised the price to <strong>{formatLakhsToINR(counterBid || originalBid)}</strong>!
              Do you match this final amount to sign {player.name}, or concede to {winTeam.name}?
            </div>

            {isPrevTeamOwner ? (
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => onFinalMatchRTM(true)}
                  className="py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 text-white font-tech font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 cursor-pointer"
                >
                  <Check className="w-4 h-4" /> MATCH {formatLakhsToINR(counterBid || originalBid)} & SIGN
                </button>
                <button
                  onClick={() => onFinalMatchRTM(false)}
                  className="py-3 px-4 rounded-2xl bg-slate-950 border border-rose-500/40 hover:bg-rose-500/10 text-rose-400 font-tech font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  <X className="w-4 h-4" /> CONCEDE TO {winTeam.shortName}
                </button>
              </div>
            ) : (
              <div className="text-center py-3 text-xs font-tech text-slate-400 bg-slate-950 rounded-xl border border-slate-800 animate-pulse">
                Awaiting {prevTeam.name} to decide whether to match {formatLakhsToINR(counterBid || originalBid)}...
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
