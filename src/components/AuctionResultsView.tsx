import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle2,
  Clock,
  ArrowLeft,
  FileSpreadsheet,
  FileCode,
  Shield,
  Award,
  AlertCircle,
  Users,
  Info,
  Check,
  Zap,
  TrendingUp,
  RefreshCw,
} from 'lucide-react';
import { AuctionRoomState, IPLTeam, Player, TeamId, UserProfile } from '../types/auction';
import { formatLakhsToINR } from '../utils/auctionCalculations';
import { exportSquadsToCSV, exportSquadsToJSON } from '../utils/squadExport';
import { analyzeTeamPlayingXI } from '../utils/playingXIAnalysis';
import { TeamLogo } from './TeamLogo';
import { PlayerProfileModal } from './PlayerProfileModal';

interface AuctionResultsViewProps {
  room: AuctionRoomState;
  user: UserProfile;
  onConfirmPlayingXI: (teamId: TeamId, selectedPlayerIds: string[]) => void;
  onSavePlayingXIDraft?: (teamId: TeamId, selectedPlayerIds: string[]) => void;
  onBackToLobby: () => void;
  onViewSquadDetails?: (teamId: TeamId) => void;
  onStartNextMiniCycle?: () => void;
}

export const AuctionResultsView: React.FC<AuctionResultsViewProps> = ({
  room,
  user,
  onConfirmPlayingXI,
  onSavePlayingXIDraft,
  onBackToLobby,
  onStartNextMiniCycle,
}) => {
  // Participating active teams (strictly human participants from 1 to 10)
  const participatingTeams = useMemo(() => {
    const list = Object.values(room.teams).filter(
      (t) => t.isActive !== false && (!!t.ownerUserId || (room.activeTeamIds && room.activeTeamIds.includes(t.id)))
    );
    return list.length > 0 ? list : Object.values(room.teams).filter((t) => t.squad.length > 0);
  }, [room.teams, room.activeTeamIds]);

  // Determine current active team view
  const defaultTeamId = useMemo(() => {
    if (user.selectedTeamId && room.teams[user.selectedTeamId]?.squad.length > 0) {
      return user.selectedTeamId;
    }
    const found = participatingTeams.find((t) => t.ownerUserId === user.id);
    if (found) return found.id;
    return participatingTeams[0]?.id || (Object.keys(room.teams)[0] as TeamId);
  }, [user.selectedTeamId, user.id, participatingTeams, room.teams]);

  const [activeTeamId, setActiveTeamId] = useState<TeamId>(defaultTeamId);
  const [inspectingPlayer, setInspectingPlayer] = useState<Player | null>(null);

  const currentTeam = room.teams[activeTeamId] || participatingTeams[0] || Object.values(room.teams)[0];
  const isOwner = currentTeam?.ownerUserId === user.id;
  const isHost = room.hostUserId === user.id;
  const canManageCurrentTeam = isOwner || isHost || !currentTeam?.ownerUserId;

  const currentTeamPlayingXIData = room.playingXIs?.[activeTeamId];
  const isCurrentTeamConfirmed = !!currentTeamPlayingXIData?.confirmed;

  // Selected player IDs for current team
  const [selectedPlayerIds, setSelectedPlayerIds] = useState<string[]>(() => {
    if (currentTeamPlayingXIData?.selectedPlayerIds && currentTeamPlayingXIData.selectedPlayerIds.length > 0) {
      return currentTeamPlayingXIData.selectedPlayerIds;
    }
    // Auto-select up to 11 players prioritizing squad balance
    const squad = currentTeam?.squad || [];
    const initialSelected: string[] = [];
    let osCount = 0;
    for (const p of squad) {
      if (initialSelected.length >= 11) break;
      const isOS = p.isOverseas || (p.country && p.country !== 'India');
      if (isOS && osCount >= 4) continue;
      initialSelected.push(String(p.id));
      if (isOS) osCount++;
    }
    return initialSelected;
  });

  // Keep selection in sync when team changes or room updates
  useEffect(() => {
    const existing = room.playingXIs?.[activeTeamId];
    if (existing?.selectedPlayerIds && existing.selectedPlayerIds.length > 0) {
      setSelectedPlayerIds(existing.selectedPlayerIds);
    } else {
      const squad = currentTeam?.squad || [];
      const initialSelected: string[] = [];
      let osCount = 0;
      for (const p of squad) {
        if (initialSelected.length >= 11) break;
        const isOS = p.isOverseas || (p.country && p.country !== 'India');
        if (isOS && osCount >= 4) continue;
        initialSelected.push(String(p.id));
        if (isOS) osCount++;
      }
      setSelectedPlayerIds(initialSelected);
    }
  }, [activeTeamId, room.playingXIs, currentTeam]);

  // Check if all participating teams have confirmed their Playing XI
  const allTeamsConfirmed = useMemo(() => {
    if (participatingTeams.length === 0) return false;
    return participatingTeams.every(
      (t) => room.playingXIs && room.playingXIs[t.id] && room.playingXIs[t.id].confirmed
    );
  }, [participatingTeams, room.playingXIs]);

  // Calculate selected metrics for current team
  const selectedPlayersList = useMemo(() => {
    const squad = currentTeam?.squad || [];
    return squad.filter(
      (p) => selectedPlayerIds.includes(String(p.id)) || selectedPlayerIds.includes(String(p.playerId))
    );
  }, [currentTeam, selectedPlayerIds]);

  const selectedCount = selectedPlayersList.length;
  const overseasSelectedCount = selectedPlayersList.filter(
    (p) => p.isOverseas || (p.country && p.country !== 'India')
  ).length;

  const isValidXI = selectedCount === 11 && overseasSelectedCount <= 4;

  const togglePlayerSelection = (player: Player) => {
    if (isCurrentTeamConfirmed || !canManageCurrentTeam) return;

    const pId = String(player.id);
    setSelectedPlayerIds((prev) => {
      const isSelected = prev.includes(pId);
      if (isSelected) {
        const next = prev.filter((id) => id !== pId);
        onSavePlayingXIDraft?.(currentTeam.id, next);
        return next;
      }

      if (prev.length >= 11) {
        return prev;
      }

      const isOS = player.isOverseas || (player.country && player.country !== 'India');
      if (isOS) {
        const currentOSCount = prev.filter((id) => {
          const m = currentTeam.squad.find((x) => String(x.id) === id || String(x.playerId) === id);
          return m && (m.isOverseas || (m.country && m.country !== 'India'));
        }).length;
        if (currentOSCount >= 4) {
          return prev;
        }
      }

      const next = [...prev, pId];
      onSavePlayingXIDraft?.(currentTeam.id, next);
      return next;
    });
  };

  const handleConfirmPlayingXI = () => {
    if (!isValidXI || !canManageCurrentTeam) return;
    onConfirmPlayingXI(currentTeam.id, selectedPlayerIds);
  };

  // Precalculate analysis for all confirmed teams
  const teamAnalyses = useMemo(() => {
    return participatingTeams.map((team, index) => {
      const xiData = room.playingXIs?.[team.id];
      const xiIds = xiData?.selectedPlayerIds || [];
      const xiPlayers = team.squad.filter(
        (p) => xiIds.includes(String(p.id)) || xiIds.includes(String(p.playerId))
      );
      const analysis = analyzeTeamPlayingXI(
        team,
        xiPlayers.length === 11 ? xiPlayers : team.squad.slice(0, 11)
      );
      return {
        teamNumber: index + 1,
        team,
        analysis,
        isConfirmed: !!xiData?.confirmed,
      };
    });
  }, [participatingTeams, room.playingXIs]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8 space-y-8">
      {/* Top Banner: Status Header (No 2026 in title) */}
      <div className="relative bg-gradient-to-r from-[#080D1C] via-slate-900 to-[#080D1C] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 text-xs font-tech font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                AUCTION ENDED
              </span>
              <span className="text-xs font-tech text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                {allTeamsConfirmed ? 'ALL PLAYING XIs CONFIRMED' : 'PLAYING XI SELECTION PHASE'}
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              TATA IPL MOCK AUCTION
            </h1>
            <p className="text-xs sm:text-sm font-sans text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {allTeamsConfirmed
                ? 'All participating teams have finalized their Playing XI. Review the transparent, data-based team evaluations below.'
                : 'Select exactly 11 players (maximum 4 overseas) from your final auction squad to represent your franchise table.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0 font-tech">
            {room.gameMode === 'MINI' && onStartNextMiniCycle && (
              <button
                onClick={onStartNextMiniCycle}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs uppercase flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                title={`Start Mini Auction Cycle ${(room.miniAuctionCycle || 1) + 1} with these squads`}
              >
                <RefreshCw className="w-4 h-4 animate-spin-slow" />
                <span>Start Mini Auction Cycle {(room.miniAuctionCycle || 1) + 1}</span>
              </button>
            )}

            <button
              onClick={() => exportSquadsToCSV(room)}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-white text-xs uppercase flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
              title="Export complete squad stats to CSV"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => exportSquadsToJSON(room)}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs uppercase flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
              title="Export complete squad data to JSON"
            >
              <FileCode className="w-4 h-4 text-cyan-400" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={onBackToLobby}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold uppercase flex items-center gap-2 cursor-pointer transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Lobby</span>
            </button>
          </div>
        </div>

        {/* Real-time Confirmation Tracker Strip */}
        <div className="mt-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-tech font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#FFC400]" />
              PLAYING XI CONFIRMATION STATUS ({participatingTeams.filter((t) => room.playingXIs?.[t.id]?.confirmed).length}/{participatingTeams.length} TEAMS)
            </span>
            {!allTeamsConfirmed && (
              <span className="text-[11px] font-tech text-amber-400 italic">
                Waiting for other teams to confirm...
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {participatingTeams.map((t, idx) => {
              const isConf = !!room.playingXIs?.[t.id]?.confirmed;
              const isCurrent = t.id === activeTeamId;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTeamId(t.id)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-tech flex items-center gap-2 transition-all cursor-pointer ${
                    isCurrent
                      ? 'border-[#FFC400] bg-slate-900 text-white shadow-sm'
                      : 'border-slate-800 bg-[#080D1C] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-slate-500 font-bold">Team {idx + 1}</span>
                  <TeamLogo teamId={t.id} maxHeight="max-h-4" maxWidth="max-w-6" />
                  <span className="font-bold text-slate-200">{t.shortName}</span>
                  {isConf ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-0.5 text-[11px]">
                      <Check className="w-3 h-3 stroke-[3]" /> CONFIRMED
                    </span>
                  ) : (
                    <span className="text-amber-400/80 text-[10px] uppercase">Pending</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* PHASE 1: SQUAD PLAYING XI SELECTION (Shown before all teams confirm) */}
      {!allTeamsConfirmed ? (
        <div className="space-y-6">
          {/* Active Team Overview Header */}
          <div className="p-6 rounded-3xl bg-[#080D1C] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Transparent Team Logo */}
              <div className="w-16 h-16 rounded-2xl bg-transparent flex items-center justify-center p-1 shrink-0">
                <TeamLogo teamId={currentTeam.id} maxHeight="max-h-14" maxWidth="max-w-14" />
              </div>

              <div>
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-[#FFC400] block">
                  MY TEAM
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide leading-none mt-0.5">
                  {currentTeam.name}
                </h2>
                <p className="text-xs font-tech text-slate-400 mt-1">
                  Owner: <span className="text-slate-200 font-semibold">{currentTeam.ownerName || 'BCCI Franchise Table'}</span>
                  {isHost && <span className="ml-2 text-amber-400 text-[10px] uppercase font-bold">(Host Admin)</span>}
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto font-tech">
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">REMAINING PURSE</span>
                <span className="font-editorial text-lg font-bold text-[#FFC400] block leading-tight">
                  {formatLakhsToINR(currentTeam.purse)}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">SQUAD SIZE</span>
                <span className="font-editorial text-lg font-bold text-white block leading-tight">
                  {currentTeam.squad.length} PLAYERS
                </span>
              </div>

              <div className={`p-3 rounded-2xl border text-center ${
                overseasSelectedCount > 4
                  ? 'bg-rose-500/10 border-rose-500/40 text-rose-300'
                  : 'bg-slate-950/80 border-slate-800 text-slate-200'
              }`}>
                <span className="text-[10px] text-slate-500 uppercase block font-bold">OVERSEAS IN XI</span>
                <span className="font-editorial text-lg font-bold block leading-tight">
                  {overseasSelectedCount} / 4 MAX
                </span>
              </div>

              <div className={`p-3 rounded-2xl border text-center ${
                selectedCount === 11
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                  : 'bg-slate-950/80 border-slate-800 text-[#FFC400]'
              }`}>
                <span className="text-[10px] text-slate-500 uppercase block font-bold">PLAYING XI</span>
                <span className="font-editorial text-lg font-bold block leading-tight">
                  {selectedCount} / 11 SELECTED
                </span>
              </div>
            </div>
          </div>

          {/* Instructions & Validation Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#080D1C] border border-slate-800/90 font-tech">
            <div className="flex items-center gap-3">
              {isCurrentTeamConfirmed ? (
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              ) : selectedCount === 11 && overseasSelectedCount <= 4 ? (
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-[#FFC400] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
              )}

              <div>
                <p className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                  {isCurrentTeamConfirmed
                    ? 'PLAYING XI CONFIRMED & LOCKED ✓'
                    : selectedCount === 11 && overseasSelectedCount <= 4
                    ? 'PLAYING XI READY TO CONFIRM'
                    : `SELECT ${11 - selectedCount} MORE PLAYER${11 - selectedCount === 1 ? '' : 'S'}`}
                </p>
                <p className="text-[11px] text-slate-400">
                  {isCurrentTeamConfirmed
                    ? 'Your selection is locked. Waiting for other participating franchises to confirm.'
                    : overseasSelectedCount > 4
                    ? 'Rule violation: Playing XI cannot exceed 4 overseas players. Please deselect an overseas player.'
                    : 'Click a player card to select or deselect. Click the info icon to inspect verified stats without "Last 5 Matches".'}
                </p>
              </div>
            </div>

            {/* Confirmation Action Button */}
            {!isCurrentTeamConfirmed && canManageCurrentTeam && (
              <button
                onClick={handleConfirmPlayingXI}
                disabled={!isValidXI}
                className={`px-8 py-3 rounded-xl font-editorial text-lg font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
                  isValidXI
                    ? 'bg-[#FFC400] hover:bg-amber-300 text-slate-950 shadow-[0_0_20px_rgba(255,196,0,0.3)] hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>CONFIRM PLAYING XI</span>
              </button>
            )}

            {isCurrentTeamConfirmed && (
              <div className="px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-tech text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>CONFIRMED ✓</span>
              </div>
            )}
          </div>

          {/* Squad Players Interactive Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-editorial text-2xl font-bold uppercase tracking-wide text-white">
                PURCHASED SQUAD ({currentTeam.squad.length} PLAYERS)
              </h3>
              <span className="text-xs font-tech text-slate-400">
                {selectedCount} of 11 Selected
              </span>
            </div>

            {currentTeam.squad.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#080D1C] border border-slate-800 text-slate-500 font-tech text-sm">
                No players purchased for this franchise yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {currentTeam.squad.map((player) => {
                  const pId = String(player.id);
                  const isSelected = selectedPlayerIds.includes(pId);
                  const selectedPosition = isSelected ? selectedPlayerIds.indexOf(pId) + 1 : null;
                  const isOS = player.isOverseas || (player.country && player.country !== 'India');

                  return (
                    <div
                      key={player.id}
                      onClick={() => togglePlayerSelection(player)}
                      className={`relative p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                        isSelected
                          ? 'border-[#FFC400] bg-slate-900 shadow-[0_0_15px_rgba(255,196,0,0.15)] ring-1 ring-[#FFC400]/40'
                          : 'border-slate-800/80 bg-[#080D1C] hover:bg-slate-900/60 hover:border-slate-700'
                      }`}
                    >
                      {/* Top Selection Status Pill */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {isSelected ? (
                            <span className="px-2 py-0.5 rounded-lg bg-[#FFC400] text-slate-950 font-tech font-extrabold text-[10px] uppercase flex items-center gap-1 shadow-sm">
                              <Check className="w-3 h-3 stroke-[3]" /> #{selectedPosition} IN XI
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-lg bg-slate-800/80 text-slate-400 font-tech text-[10px] uppercase">
                              Available
                            </span>
                          )}

                          {isOS && (
                            <span className="px-1.5 py-0.5 rounded bg-blue-500/15 border border-blue-500/30 text-blue-300 font-tech text-[9px] font-bold uppercase">
                              🌍 {player.country || 'Overseas'}
                            </span>
                          )}
                        </div>

                        {/* Player Profile Inspection Icon */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setInspectingPlayer(player);
                          }}
                          title="Inspect Player Profile"
                          className="p-1 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          <Info className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Player Headshot & Details with Exact Fit */}
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                          {player.photo || player.imageUrl ? (
                            <img
                              src={(player.photo || player.imageUrl) || undefined}
                              alt={player.name}
                              className="w-auto h-auto max-w-full max-h-full object-contain block"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs font-tech">
                              {player.name.charAt(0)}
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="font-editorial text-lg font-bold uppercase text-white truncate leading-tight group-hover:text-[#FFC400] transition-colors">
                            {player.name}
                          </h4>
                          <p className="text-[11px] font-tech text-slate-400 truncate mt-0.5">
                            {player.specialism || player.role} • {player.batStyle || 'Right-hand'}
                          </p>
                          <div className="flex items-center gap-2 mt-1 text-[11px] font-tech">
                            <span className="text-[#FFC400] font-bold">
                              ₹{player.soldPrice ? (player.soldPrice >= 100 ? `${(player.soldPrice / 100).toFixed(2)} Cr` : `${player.soldPrice}L`) : formatLakhsToINR(player.basePrice)}
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-emerald-400">
                              SR: {player.stats?.strikeRate || 135}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* PHASE 2: FINAL TEAM-BY-TEAM DISPLAY & ANALYSIS (Shown automatically when all teams confirmed) */
        <div className="space-y-10">
          <div className="text-center space-y-2 py-4">
            <span className="text-xs font-tech font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              ALL TEAMS READY • DATA-DRIVEN ANALYSIS
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              FINAL AUCTION TEAMS & SQUAD RATINGS
            </h2>
            <p className="text-xs sm:text-sm font-sans text-slate-400 max-w-xl mx-auto">
              Transparent assessment computed exclusively from verified career statistics, recent IPL form ratings, role suitability, and team balance.
            </p>
          </div>

          {/* Sequential Team-by-Team Display: TEAM 1, TEAM 2, TEAM 3... */}
          <div className="space-y-10">
            {teamAnalyses.map(({ teamNumber, team, analysis }) => (
              <div
                key={team.id}
                className="rounded-3xl bg-[#080D1C] border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl"
              >
                {/* Team Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-transparent flex items-center justify-center shrink-0">
                      <TeamLogo teamId={team.id} maxHeight="max-h-14" maxWidth="max-w-14" />
                    </div>

                    <div>
                      <span className="text-xs font-tech font-bold uppercase tracking-widest text-[#FFC400]">
                        TEAM {teamNumber}
                      </span>
                      <h3 className="font-editorial text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide leading-none mt-0.5">
                        {team.name} ({team.shortName})
                      </h3>
                      <p className="text-xs font-tech text-slate-400 mt-1">
                        Owner: <span className="text-slate-200 font-semibold">{team.ownerName || 'BCCI Table'}</span>
                        {' • '}
                        Purse Left: <span className="text-emerald-400 font-bold">₹{(team.purse / 100).toFixed(2)} Cr</span>
                      </p>
                    </div>
                  </div>

                  {/* Overall Team Score Badge */}
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-950 border border-amber-500/30 font-tech shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#FFC400]" />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-bold leading-none">TEAM RATING</span>
                      <span className="font-editorial text-2xl font-extrabold text-[#FFC400] leading-none">
                        {analysis.overallScore} / 100
                      </span>
                    </div>
                  </div>
                </div>

                {/* Confirmed Playing XI (1..11) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-editorial text-xl font-bold uppercase text-white tracking-wide">
                      PLAYING XI (11 PLAYERS)
                    </h4>
                    <span className="text-xs font-tech text-slate-400">
                      Confirmed Lineup
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 font-tech text-xs">
                    {analysis.playingXI.map((player, idx) => (
                      <div
                        key={player.id}
                        className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3"
                      >
                        <span className="text-[#FFC400] font-bold font-editorial text-base w-5 text-center shrink-0">
                          {idx + 1}
                        </span>

                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                          {player.photo || player.imageUrl ? (
                            <img
                              src={(player.photo || player.imageUrl) || undefined}
                              alt={player.name}
                              className="w-auto h-auto max-w-full max-h-full object-contain block"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-slate-600 text-xs font-bold">{player.name.charAt(0)}</span>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-slate-100 truncate text-xs">{player.name}</p>
                          <p className="text-[10px] text-slate-400 truncate">
                            {player.specialism || player.role}
                            {player.isOverseas && ` • 🌍 ${player.country}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Composition Summary */}
                <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 font-tech">
                  <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 uppercase font-bold">COMPOSITION:</span>
                      <span className="text-slate-200">
                        {analysis.composition.battersCount} Batters • {analysis.composition.allRoundersCount} All-rounders • {analysis.composition.bowlersCount} Bowlers • {analysis.composition.wicketKeepersCount} Wicketkeeper
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-300 font-bold text-[11px]">
                        🌍 {analysis.composition.overseasCount} / 4 Overseas
                      </span>
                    </div>
                  </div>
                </div>

                {/* Data-Based Transparent Team Analysis */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-editorial text-lg font-bold uppercase text-slate-300 tracking-wide flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#FFC400]" />
                    TEAM ANALYSIS (VERIFIED CRICKET METRICS)
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-tech text-xs">
                    {/* Batting Strength */}
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 uppercase font-bold text-[11px]">Batting Strength</span>
                        <span className="font-bold text-[#FFC400] text-sm">{analysis.battingStrength.score} / 100</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{analysis.battingStrength.description}</p>
                      <p className="text-[10px] text-slate-500 pt-1">
                        Key Scorers: {analysis.battingStrength.keyBatters.join(', ')}
                      </p>
                    </div>

                    {/* Bowling Strength */}
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 uppercase font-bold text-[11px]">Bowling Strength</span>
                        <span className="font-bold text-emerald-400 text-sm">{analysis.bowlingStrength.score} / 100</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{analysis.bowlingStrength.description}</p>
                      <p className="text-[10px] text-slate-500 pt-1">
                        Key Attack: {analysis.bowlingStrength.keyBowlers.join(', ')}
                      </p>
                    </div>

                    {/* All-Round Balance */}
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 uppercase font-bold text-[11px]">All-Round Balance</span>
                        <span className="font-bold text-cyan-400 text-sm">{analysis.allRoundBalance.score} / 100</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{analysis.allRoundBalance.description}</p>
                    </div>

                    {/* Recent IPL Form */}
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 uppercase font-bold text-[11px]">Recent IPL Form</span>
                        <span className="font-bold text-amber-300 text-sm">{analysis.recentForm.score} / 100</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{analysis.recentForm.description}</p>
                    </div>

                    {/* Squad Balance */}
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 uppercase font-bold text-[11px]">Squad Balance</span>
                        <span className="font-bold text-purple-300 text-sm">{analysis.squadBalance.score} / 100</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{analysis.squadBalance.description}</p>
                    </div>

                    {/* Overseas Balance */}
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 uppercase font-bold text-[11px]">Overseas Quota</span>
                        <span className="font-bold text-blue-300 text-sm">{analysis.overseasBalance.score} / 100</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{analysis.overseasBalance.description}</p>
                    </div>
                  </div>

                  <p className="text-xs font-sans text-slate-400 pt-2 italic">
                    Scout Verdict: {analysis.overallSummary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Inspect Player Profile Modal */}
      {inspectingPlayer && (
        <PlayerProfileModal
          player={inspectingPlayer}
          onClose={() => setInspectingPlayer(null)}
        />
      )}
    </div>
  );
};
