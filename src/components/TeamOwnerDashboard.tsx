import React, { useState } from 'react';
import { DollarSign, ShieldAlert, Sparkles, TrendingUp, AlertTriangle, Users, Globe2, CreditCard, ChevronUp } from 'lucide-react';
import { AuctionRoomState, IPLTeam, Player, TeamId } from '../types/auction';
import { formatLakhsToINR, getNextBidAmount, getNextBidIncrement, validateBid, MIN_SQUAD_SIZE, MAX_SQUAD_SIZE, MAX_OVERSEAS, MIN_BASE_PRICE } from '../utils/auctionCalculations';

interface TeamOwnerDashboardProps {
  room: AuctionRoomState;
  myTeamId: TeamId;
  onPlaceBid: (amount?: number) => void;
  onOpenSquadDrawer: () => void;
}

export const TeamOwnerDashboard: React.FC<TeamOwnerDashboardProps> = ({
  room,
  myTeamId,
  onPlaceBid,
  onOpenSquadDrawer,
}) => {
  const [customBidInput, setCustomBidInput] = useState<string>('');
  const [showCustomBid, setShowCustomBid] = useState(false);

  const team = room.teams[myTeamId];
  const { currentPlayer, currentBid, leadingTeamId, hammerStage } = room;

  if (!team) return null;

  if (team.isActive === false) {
    return (
      <div className="bg-slate-900/95 border-2 border-slate-800 rounded-3xl p-6 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-tech font-bold uppercase">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> Franchise Inactive / Disabled
        </div>
        <h3 className="text-lg font-bold text-slate-200">{team.name}</h3>
        <p className="text-xs text-slate-400 font-tech max-w-md mx-auto">
          In this 2-player head-to-head match, this franchise is disabled so the human players bid against each other directly without AI bots.
        </p>
      </div>
    );
  }

  const isLeading = leadingTeamId === myTeamId;
  const isBiddingActive = currentPlayer && currentPlayer.status === 'UPCOMING' && hammerStage < 3;

  // Next standard bid
  const nextStandardBid = currentPlayer ? getNextBidAmount(currentBid, currentPlayer.basePrice) : 0;
  const nextIncrement = getNextBidIncrement(currentBid);

  // Validate the standard bid
  const validation = currentPlayer
    ? validateBid(team, currentPlayer, nextStandardBid, isLeading)
    : { allowed: false, reason: 'No player on auction' };

  // Calculate reserve status
  const currentSquadSize = team.squad.length;
  const overseasCount = team.squad.filter((p) => p.isOverseas).length;
  const remainingSlotsToMin18 = Math.max(0, MIN_SQUAD_SIZE - currentSquadSize);
  const minReserveRequired = remainingSlotsToMin18 * MIN_BASE_PRICE;

  const handleCustomBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseFloat(customBidInput);
    if (isNaN(parsed) || parsed <= 0) return;
    // convert from Cr to Lakhs if input is in Cr
    const amountInLakhs = Math.round(parsed * 100);
    if (amountInLakhs <= currentBid) {
      alert(`Custom bid must be greater than current bid (${formatLakhsToINR(currentBid)})`);
      return;
    }
    onPlaceBid(amountInLakhs);
    setCustomBidInput('');
    setShowCustomBid(false);
  };

  return (
    <div className="bg-slate-900/95 border-2 border-amber-500/40 rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4">
      {/* Franchise Status Ribbon */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-tech font-bold text-white shadow-lg shrink-0"
            style={{ backgroundColor: team.primaryColor }}
          >
            {team.shortName}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-100">{team.name}</h3>
              <span className="text-[10px] font-tech px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                MY TABLE
              </span>
            </div>
            <p className="text-[11px] font-tech text-slate-400">
              Purse Available: <strong className="text-emerald-400 font-bold">{formatLakhsToINR(team.purse)}</strong>
            </p>
          </div>
        </div>

        <button
          onClick={onOpenSquadDrawer}
          className="text-xs font-tech text-amber-400 hover:text-amber-300 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-1 cursor-pointer"
        >
          <span>View Squad ({currentSquadSize})</span>
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Mini Stats Bar */}
      <div className="grid grid-cols-4 gap-2 text-center text-xs font-tech">
        <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase text-slate-500 block">Purse</span>
          <span className="font-bold text-emerald-400">{formatLakhsToINR(team.purse)}</span>
        </div>
        <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase text-slate-500 block">Squad</span>
          <span className="font-bold text-slate-200">
            {currentSquadSize} / {MAX_SQUAD_SIZE}
          </span>
        </div>
        <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase text-slate-500 block">Overseas</span>
          <span className={`font-bold ${overseasCount >= MAX_OVERSEAS ? 'text-rose-400' : 'text-cyan-400'}`}>
            {overseasCount} / {MAX_OVERSEAS}
          </span>
        </div>
        <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase text-slate-500 block">RTM Left</span>
          <span className="font-bold text-amber-400">{team.rtmCardsRemaining} RTM</span>
        </div>
      </div>

      {/* Reserve Rule Warning or Status */}
      <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 text-[11px] font-tech text-slate-400 flex items-center justify-between">
        <span>Min 18 Squad Reserve:</span>
        <span className="text-slate-300 font-bold">
          {remainingSlotsToMin18 > 0 ? (
            <>
              Must save <span className="text-amber-400">{formatLakhsToINR(minReserveRequired)}</span> for {remainingSlotsToMin18} slots
            </>
          ) : (
            <span className="text-emerald-400">Min 18 Squad Requirement Satisfied!</span>
          )}
        </span>
      </div>

      {/* Primary Big Bidding Paddle */}
      <div>
        {isLeading ? (
          <div className="w-full py-5 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 text-center text-emerald-300 font-tech font-bold text-base flex flex-col items-center justify-center gap-1 shadow-lg shadow-emerald-500/10 animate-pulse">
            <span className="text-xs uppercase tracking-widest text-emerald-400">LEADING BIDDER</span>
            <span className="text-xl font-display">YOUR FRANCHISE HOLDS HIGHEST BID ({formatLakhsToINR(currentBid)})</span>
          </div>
        ) : (
          <button
            onClick={() => onPlaceBid()}
            disabled={!isBiddingActive || !validation.allowed}
            className={`w-full py-5 px-4 rounded-2xl font-display font-extrabold text-2xl sm:text-3xl tracking-wider uppercase transition-all shadow-2xl active:scale-[0.98] cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
              isBiddingActive && validation.allowed
                ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 shadow-amber-500/30'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60 border border-slate-700'
            }`}
          >
            <span>BID {formatLakhsToINR(nextStandardBid)}</span>
            <span className="text-[11px] font-tech font-bold text-slate-900/80 uppercase">
              (+{formatLakhsToINR(nextIncrement)} Dynamic Increment)
            </span>
          </button>
        )}

        {/* Validation Warning if Disabled */}
        {!validation.allowed && !isLeading && currentPlayer && (
          <div className="mt-2.5 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-tech flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{validation.reason}</span>
          </div>
        )}
      </div>

      {/* Custom Bid Dropdown Option */}
      <div className="pt-2 border-t border-slate-800">
        {!showCustomBid ? (
          <button
            onClick={() => setShowCustomBid(true)}
            className="w-full py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 text-xs font-tech flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>Need to place higher aggressive jump bid?</span>
          </button>
        ) : (
          <form onSubmit={handleCustomBidSubmit} className="flex gap-2">
            <input
              type="number"
              step="0.05"
              placeholder="Enter amount in Cr (e.g. 5.5)"
              value={customBidInput}
              onChange={(e) => setCustomBidInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-xs text-slate-200"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-tech font-bold uppercase cursor-pointer"
            >
              Bid Jump
            </button>
            <button
              type="button"
              onClick={() => setShowCustomBid(false)}
              className="px-2 py-2 rounded-xl bg-slate-800 text-slate-400 text-xs font-tech cursor-pointer"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
