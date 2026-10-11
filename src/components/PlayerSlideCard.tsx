import React, { useState, useEffect } from 'react';
import { Timer, Gavel } from 'lucide-react';
import { Player, IPLTeam, TeamId } from '../types/auction';
import { IPL_TEAMS } from '../data/teamsData';
import { formatLakhsToINR } from '../utils/auctionCalculations';
import { getCountryFlag } from '../utils/countryFlags';
import { TeamLogo } from './TeamLogo';

interface PlayerSlideCardProps {
  player: Player | null;
  currentBid: number;
  leadingTeam: IPLTeam | null;
  timer: number;
  timerRunning: boolean;
  hammerStage: 0 | 1 | 2 | 3 | 4;
  lastHammerMessage: string | null;
  totalPlayers?: number;
  currentIndex?: number;
  rtmAvailable?: boolean;
  rtmTeamId?: TeamId | null;
  auctionPaused?: boolean;
}

export function getDisplayRole(player: Player): string {
  const spec = (player.specialism || player.role || '').toUpperCase();
  if (spec.includes('WICKET') || player.role === 'WICKET_KEEPER') {
    return 'WICKETKEEPER-BATTER';
  }
  if (spec.includes('ALL') || player.role === 'ALL_ROUNDER') {
    return 'ALL-ROUNDER';
  }
  if (spec.includes('BOWL') || player.role === 'FAST_BOWLER' || player.role === 'SPINNER') {
    return 'BOWLER';
  }
  return 'BATTER';
}

export const PlayerSlideCard: React.FC<PlayerSlideCardProps> = React.memo(({
  player,
  currentBid,
  leadingTeam,
  timer,
  timerRunning,
  hammerStage,
  rtmAvailable,
  rtmTeamId,
  auctionPaused,
}) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [player?.id]);

  if (!player) {
    return (
      <div className="w-full bg-[#080D1C] border border-slate-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[280px]">
        <Gavel className="w-10 h-10 text-slate-600 mb-2" />
        <h3 className="font-editorial text-2xl font-bold uppercase tracking-wider text-white">
          AUCTION PAUSED / SET COMPLETE
        </h3>
        <p className="text-xs text-slate-400 font-sans mt-1">
          Awaiting next player to be called to the hammer block.
        </p>
      </div>
    );
  }

  const role = getDisplayRole(player);
  const flag = getCountryFlag(player.country || player.nationality);
  const isBowler = role === 'BOWLER';

  // Career stats strictly without any "Last 5 matches" form
  const matchesCount = player.careerMatches ?? player.matches ?? player.stats?.matches ?? 0;
  const runsCount = player.totalRuns ?? player.runs ?? player.stats?.runs ?? 0;
  const wicketsCount = player.totalWickets ?? player.wickets ?? player.stats?.wickets ?? 0;
  const strikeRateVal = player.stats?.strikeRate ? Number(player.stats.strikeRate).toFixed(1) : (isBowler ? '120.0' : '135.0');
  const economyVal = player.stats?.economy ? Number(player.stats.economy).toFixed(2) : (isBowler ? '7.80' : '8.20');

  const timerColor =
    timer <= 5
      ? 'text-rose-400 border-rose-500/60 bg-rose-500/10'
      : timer <= 10
      ? 'text-[#FFC400] border-[#FFC400]/50 bg-[#FFC400]/10'
      : 'text-emerald-400 border-emerald-400/50 bg-emerald-400/10';

  const is5YearUncapped = (player.isUncapped || player.cappedStatus === 'UNCAPPED') && !!player.lastInternationalMatchDate;

  // Authoritatively resolve winning franchise vs leading franchise
  const finalWinnerTeamId = (player.status === 'SOLD' && (player.soldTo || (player as any).finalWinnerTeamId))
    ? ((player.soldTo || (player as any).finalWinnerTeamId) as TeamId)
    : null;
  const winningTeam = finalWinnerTeamId
    ? (IPL_TEAMS[finalWinnerTeamId] || (leadingTeam?.id === finalWinnerTeamId ? leadingTeam : null))
    : null;
  const activeTeamForDisplay = player.status === 'SOLD' ? (winningTeam || leadingTeam) : leadingTeam;

  return (
    <div className="w-full bg-[#080D1C] border border-slate-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
      {/* Top Banner: Set Identification & Current Bid Status */}
      <div className="bg-slate-900/80 px-4 sm:px-6 py-2.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 font-tech">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
            CURRENT SET:
          </span>
          <span className="font-editorial text-lg text-[#FFC400] tracking-wider leading-none">
            {player.currentSet || player.setName || 'SET 01'}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-slate-300 uppercase truncate">
            {player.setName || 'Official Auction Set'}
          </span>

          {/* Server-authoritative RTM indicator ONLY when active managed franchise is eligible */}
          {rtmAvailable && rtmTeamId && (
            <span className="ml-2 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px] font-tech font-bold uppercase tracking-wider animate-pulse">
              RTM ELIGIBLE: {rtmTeamId}
            </span>
          )}
        </div>

        {/* Live Timer */}
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold ${
          auctionPaused
            ? 'text-amber-400 border-amber-500/60 bg-amber-500/10'
            : timerColor
        }`}>
          <Timer className="w-3.5 h-3.5" />
          <span>{auctionPaused ? `PAUSED (${timer}s)` : `${timer}s`}</span>
          {timerRunning && !auctionPaused && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
          )}
          {auctionPaused && (
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping ml-0.5" />
          )}
        </div>
      </div>

      {/* Main Split Layout: Left Portrait, Right Stats & Bid Details */}
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
        {/* Left: Player Portrait (Border sits directly around photo without giant empty box) */}
        <div className="p-4 sm:p-5 flex items-center justify-center shrink-0 w-full sm:w-auto">
          <div className="relative inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-md max-w-full">
            {player.imageUrl && !imageError ? (
              <img
                src={player.imageUrl}
                alt={player.name}
                loading="lazy"
                decoding="async"
                onError={() => setImageError(true)}
                className="w-auto h-auto max-w-[200px] sm:max-w-[240px] max-h-[240px] sm:max-h-[260px] object-contain block"
              />
            ) : (
              <div className="w-44 h-56 flex flex-col items-center justify-center p-4 text-center">
                <svg className="w-16 h-16 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                <span className="font-tech text-[10px] text-slate-500 uppercase mt-2 font-semibold">No Photo</span>
              </div>
            )}

            {/* Player Name and Capped Status directly attached to bottom of image */}
            <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-[#080D1C] via-[#080D1C]/90 to-transparent">
              <span
                className="text-[9px] font-tech text-[#FFC400] font-bold uppercase tracking-widest block"
                title={player.cappedReason || undefined}
              >
                {is5YearUncapped
                  ? 'UNCAPPED (5-YR INACTIVE)'
                  : (player.cappedStatus || (player.isCapped ? 'CAPPED' : 'UNCAPPED'))}
              </span>
              <h2 className="font-editorial text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white leading-none truncate">
                {player.name}
              </h2>
            </div>
          </div>
        </div>

        {/* Right: Key Details & Verified Career Statistics */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between space-y-4 w-full">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-tech">
            <div className="flex items-center gap-2">
              <span className="text-base">{flag}</span>
              <span className="font-bold text-slate-200 uppercase">{player.country || 'India'}</span>
              {player.age && (
                <>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">{player.age} Years</span>
                </>
              )}
            </div>

            <div className="px-2.5 py-0.5 rounded bg-slate-800 text-[#FFC400] font-bold uppercase text-[11px]">
              {role}
            </div>
          </div>

          {/* Current Bid Display */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-tech text-slate-500 uppercase block tracking-wider">
                CURRENT HIGHEST BID
              </span>
              <div className="font-editorial text-3xl sm:text-4xl font-extrabold text-[#FFC400] leading-none tracking-wide">
                {formatLakhsToINR(currentBid)}
              </div>
              <span className="text-[11px] font-tech text-slate-400 mt-1 block">
                Base: {formatLakhsToINR(player.basePrice)}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-tech text-slate-500 uppercase block tracking-wider">
                {player.status === 'SOLD' ? 'SOLD TO' : 'LEADER'}
              </span>
              {activeTeamForDisplay ? (
                <div className="flex items-center justify-end gap-2 mt-1">
                  <span
                    className="font-editorial text-xl font-bold tracking-wider uppercase"
                    style={{ color: activeTeamForDisplay.primaryColor || '#FFC400' }}
                  >
                    {activeTeamForDisplay.shortName}
                  </span>
                  <TeamLogo teamId={activeTeamForDisplay.id} maxHeight="max-h-6" maxWidth="max-w-8" />
                </div>
              ) : (
                <span className="text-xs font-tech text-slate-500 italic mt-1 block">
                  {player.status === 'UNSOLD' ? 'Unsold' : 'Awaiting Opening Bid'}
                </span>
              )}
            </div>
          </div>

          {/* IPL Career Statistics */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-tech text-slate-400 uppercase tracking-widest block font-semibold">
              CAREER IPL STATISTICS
            </span>
            <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center font-tech">
              <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[8px] sm:text-[9px] text-slate-500 uppercase block truncate">MATCHES</span>
                <span className="font-bold text-white text-[11px] sm:text-sm">{matchesCount}</span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[8px] sm:text-[9px] text-slate-500 uppercase block truncate">RUNS</span>
                <span className="font-bold text-amber-400 text-[11px] sm:text-sm">{runsCount.toLocaleString()}</span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[8px] sm:text-[9px] text-slate-500 uppercase block truncate">WICKETS</span>
                <span className="font-bold text-emerald-400 text-[11px] sm:text-sm">{wicketsCount}</span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[8px] sm:text-[9px] text-slate-500 uppercase block truncate">S/R</span>
                <span className="font-bold text-slate-300 text-[11px] sm:text-sm">{strikeRateVal}</span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[8px] sm:text-[9px] text-slate-500 uppercase block truncate">ECON</span>
                <span className="font-bold text-slate-300 text-[11px] sm:text-sm">{economyVal}</span>
              </div>
            </div>
          </div>

          {/* Result / Hammer Status Banner */}
          {player.status === 'UNSOLD' ? (
            <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 border border-rose-500/60 text-center flex items-center justify-between px-4 animate-in fade-in shadow-xl">
              <div className="text-left">
                <span className="font-editorial text-2xl sm:text-3xl tracking-wider text-rose-400 font-extrabold uppercase block leading-none">
                  UNSOLD
                </span>
                <span className="text-xs font-tech text-slate-300 font-bold tracking-wide mt-1 block">
                  No bids received
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-tech uppercase text-slate-400 block">BASE PRICE</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-slate-200 bg-black/50 px-2.5 py-0.5 rounded border border-slate-700">
                  {formatLakhsToINR(player.basePrice)}
                </span>
              </div>
            </div>
          ) : player.status === 'SOLD' ? (
            <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-emerald-900/30 to-emerald-950/40 border border-emerald-500/60 text-center flex items-center justify-between px-4 animate-in fade-in shadow-xl">
              <div className="text-left">
                <span className="font-editorial text-2xl sm:text-3xl tracking-wider text-emerald-400 font-extrabold uppercase block leading-none">
                  SOLD!
                </span>
                <span className="text-xs font-tech text-slate-200 mt-1 block">
                  Sold to <strong className="text-emerald-300 font-bold">{winningTeam?.name || leadingTeam?.name || 'Franchise'}</strong> for {formatLakhsToINR(player.soldPrice || currentBid)}{player.wasRTMUsed ? ' (via Right To Match)' : ''}
                </span>
              </div>
              {(winningTeam || leadingTeam) && (
                <div
                  className="px-3 py-1 rounded-lg text-white font-tech font-bold text-xs uppercase shadow-md flex items-center gap-1.5"
                  style={{ backgroundColor: (winningTeam || leadingTeam)!.primaryColor }}
                >
                  <span>{(winningTeam || leadingTeam)!.shortName}</span>
                  {player.wasRTMUsed && (
                    <span className="text-[9px] bg-black/40 text-purple-200 px-1 py-0.5 rounded border border-purple-400/40 font-mono font-bold">
                      RTM
                    </span>
                  )}
                </div>
              )}
            </div>
          ) : hammerStage > 0 && (
            <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-[#FF2D8D]/20 via-[#FF2D8D]/10 to-[#FF2D8D]/20 border border-[#FF2D8D]/50 text-center flex items-center justify-between px-4 animate-pulse shadow-lg">
              <span className="font-editorial text-lg sm:text-xl tracking-wider text-[#FF2D8D] font-extrabold uppercase">
                {hammerStage === 1
                  ? 'GOING ONCE'
                  : hammerStage === 2
                  ? 'GOING TWICE'
                  : hammerStage === 3
                  ? 'GOING THRICE'
                  : 'FINALIZING...'}
              </span>
              {hammerStage < 4 && timer > 0 && (
                <span className="font-mono text-xs sm:text-sm font-bold text-amber-300 bg-black/40 px-2 py-0.5 rounded-md border border-amber-400/30">
                  {timer}s
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
