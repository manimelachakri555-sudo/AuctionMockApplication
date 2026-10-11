import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Award, Medal, ShieldAlert, Sparkles, X, ChevronRight, CheckCircle2, AlertTriangle, Users, DollarSign, Flame, FileSpreadsheet, FileCode } from 'lucide-react';
import { AuctionRoomState, IPLTeam, SquadRatingMetrics, TeamId } from '../types/auction';
import { calculateSquadRating, formatLakhsToINR, MIN_SQUAD_SIZE } from '../utils/auctionCalculations';
import { exportSquadsToCSV, exportSquadsToJSON } from '../utils/squadExport';

interface LeaderboardModalProps {
  room: AuctionRoomState;
  onClose: () => void;
  onViewSquadDetails: (teamId: TeamId) => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  room,
  onClose,
  onViewSquadDetails,
}) => {
  const [selectedTeamMetric, setSelectedTeamMetric] = useState<SquadRatingMetrics | null>(null);

  // Compute squad metrics for active participating teams (supports 1 to 10 players)
  const participatingTeams = Object.values(room?.teams || {}).filter(
    (team) => team && team.isActive !== false && (!!team.ownerUserId || (room?.activeTeamIds && room.activeTeamIds.includes(team.id)))
  );
  const teamsToRank = participatingTeams.length > 0
    ? participatingTeams
    : Object.values(room?.teams || {}).filter((t) => t.squad.length > 0);

  const sortedMetrics: (SquadRatingMetrics & { team: IPLTeam; rank: number })[] = (teamsToRank || [])
    .map((team) => {
      const metrics = calculateSquadRating(team);
      return {
        ...metrics,
        team,
        rank: 0,
      };
    })
    .sort((a, b) => b.totalRating - a.totalRating)
    .map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

  useEffect(() => {
    // Fire celebratory confetti for the champion team!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }

    if (sortedMetrics.length > 0) {
      setSelectedTeamMetric(sortedMetrics[0]);
    }
  }, []);

  const champion = sortedMetrics[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10 text-slate-100 my-auto flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-0.5 shadow-lg shadow-amber-500/30 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Trophy className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
                POST-AUCTION SQUAD RATINGS & PODIUM
              </h2>
              <p className="text-xs text-slate-400 font-tech">
                Official franchise rankings evaluated via Form Ratings, Squad Balance & IPL Compliance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => exportSquadsToCSV(room)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-tech flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Export all squads to CSV"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => exportSquadsToJSON(room)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-tech flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Export all squads to JSON"
            >
              <FileCode className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Champion Podium Spotlight Banner */}
        {champion && (
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 border-2 border-amber-400/50 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 relative overflow-hidden">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-tech font-bold text-white text-xl shadow-xl border-2 border-amber-400 shrink-0"
                style={{ backgroundColor: champion.team.primaryColor }}
              >
                {champion.team.shortName}
              </div>
              <div>
                <span className="text-[10px] font-tech font-bold uppercase px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                  🏆 AUCTION TITLE CHAMPION (RANK #1)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-wider text-slate-100 mt-1">
                  {champion.team.name}
                </h3>
                <p className="text-xs font-tech text-slate-300">
                  Squad Score: <strong className="text-amber-400 text-sm">{champion.totalRating}/100</strong> • {champion.squadSize} Players • Spent {formatLakhsToINR(champion.totalSpent)}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedTeamMetric(champion)}
              className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-tech font-bold text-xs uppercase tracking-wider shrink-0 cursor-pointer"
            >
              Analyze Squad
            </button>
          </div>
        )}

        {/* Main Content: Left Leaderboard List, Right Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 overflow-hidden">
          {/* Left Column: 1st to 10th Rankings */}
          <div className="lg:col-span-6 overflow-y-auto space-y-2 pr-1 max-h-[440px]">
            {sortedMetrics.map((item) => {
              const isSelected = selectedTeamMetric?.teamId === item.teamId;
              const isPodium = item.rank <= 3;
              const hasPenalties = item.compliancePenalty > 0;

              return (
                <div
                  key={item.teamId}
                  onClick={() => setSelectedTeamMetric(item)}
                  className={`p-3 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400 shadow-lg ring-1 ring-amber-400'
                      : 'bg-slate-950 border-slate-800/80 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-tech font-bold text-xs shrink-0 ${
                        item.rank === 1
                          ? 'bg-amber-400 text-slate-950'
                          : item.rank === 2
                          ? 'bg-slate-300 text-slate-950'
                          : item.rank === 3
                          ? 'bg-amber-700 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {item.rank}
                    </span>

                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center font-tech font-bold text-white text-xs shrink-0"
                      style={{ backgroundColor: item.team.primaryColor }}
                    >
                      {item.team.shortName}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-slate-100">{item.team.name}</h4>
                        {hasPenalties && (
                          <span className="text-[9px] font-tech text-rose-400 px-1 rounded bg-rose-500/20">
                            Penalty
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] font-tech text-slate-400">
                        {item.squadSize} players ({item.overseasCount} overseas) • Left: {formatLakhsToINR(item.team.purse)}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <span className="text-lg font-display font-extrabold text-amber-400">
                        {item.totalRating}
                      </span>
                      <span className="text-[10px] font-tech text-slate-500">/100</span>
                    </div>
                    <span className="text-[9px] font-tech text-slate-400 uppercase">Rating</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Squad Analysis of Selected Franchise */}
          <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 overflow-y-auto max-h-[440px] space-y-4">
            {selectedTeamMetric ? (
              <>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: room.teams[selectedTeamMetric.teamId].primaryColor }}
                      />
                      {room.teams[selectedTeamMetric.teamId].name}
                    </h3>
                    <p className="text-xs font-tech text-amber-400 mt-0.5">
                      {selectedTeamMetric.analysisSummary}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onViewSquadDetails(selectedTeamMetric.teamId);
                      onClose();
                    }}
                    className="text-xs font-tech text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer"
                  >
                    View Roster
                  </button>
                </div>

                {/* Balance Metrics Bars */}
                <div className="space-y-2.5 font-tech text-xs">
                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Form & Quality Score:</span>
                      <span className="font-bold text-slate-100">{selectedTeamMetric.totalRating >= 70 ? 'High' : 'Medium'}</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full" style={{ width: `${selectedTeamMetric.totalRating}%` }} />
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                      {selectedTeamMetric.hasDedicatedWK ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                      <span className="text-[11px] text-slate-300">Dedicated Wicketkeeper</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                      {selectedTeamMetric.hasPrimarySpinner ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                      <span className="text-[11px] text-slate-300">Frontline Spinner</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                      {selectedTeamMetric.fastBowlingCount >= 3 ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      )}
                      <span className="text-[11px] text-slate-300">Pace Battery ({selectedTeamMetric.fastBowlingCount} pacers)</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                      {selectedTeamMetric.squadSize >= MIN_SQUAD_SIZE ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                      <span className="text-[11px] text-slate-300">Min 18 Squad ({selectedTeamMetric.squadSize}/18)</span>
                    </div>
                  </div>

                  {/* Highlights: Star player and Bargain buy */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {selectedTeamMetric.starPlayer && (
                      <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                        <span className="text-[10px] uppercase text-amber-400 block font-bold">Marquee Anchor</span>
                        <span className="text-xs font-bold text-slate-100">{selectedTeamMetric.starPlayer.name}</span>
                        <span className="text-[10px] text-slate-400 block">Form: {selectedTeamMetric.starPlayer.hiddenFormRating}/100</span>
                      </div>
                    )}
                    {selectedTeamMetric.bargainBuy && (
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                        <span className="text-[10px] uppercase text-emerald-400 block font-bold">Top Value Buy</span>
                        <span className="text-xs font-bold text-slate-100">{selectedTeamMetric.bargainBuy.name}</span>
                        <span className="text-[10px] text-slate-400 block">At: {formatLakhsToINR(selectedTeamMetric.bargainBuy.soldPrice || selectedTeamMetric.bargainBuy.basePrice)}</span>
                      </div>
                    )}
                  </div>

                  {/* Strengths & Weaknesses */}
                  <div className="pt-2 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-300 uppercase block">Scouting Report:</span>
                    {(selectedTeamMetric.strengths || []).map((str, i) => (
                      <p key={i} className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                        <span className="text-emerald-500 font-bold">+</span> {str}
                      </p>
                    ))}
                    {(selectedTeamMetric.weaknesses || []).map((wk, i) => (
                      <p key={i} className="text-[11px] text-rose-400 flex items-center gap-1.5">
                        <span className="text-rose-500 font-bold">-</span> {wk}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-slate-500 font-tech text-xs">
                Select a franchise from the left to inspect squad rating metrics
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
