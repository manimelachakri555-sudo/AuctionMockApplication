import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Check,
  Info,
  AlertCircle,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  Trash2,
  RotateCcw,
  Globe,
  Award,
  Wallet,
  Coins,
} from 'lucide-react';
import { AuctionRoomState, Player, TeamId, UserProfile } from '../types/auction';
import { formatLakhsToINR } from '../utils/auctionCalculations';
import { runPlayerDataQualityGate } from '../utils/qualityGate';
import { TEAMS_SQUADS_2026 } from '../data/playersData';
import { calculateRetentionCosts } from '../data/auctionData';

const IPL_2026_FRANCHISES: { id: TeamId; name: string; shortName: string; color: string }[] = [
  { id: 'CSK', name: 'Chennai Super Kings', shortName: 'CSK', color: '#F9CD05' },
  { id: 'DC', name: 'Delhi Capitals', shortName: 'DC', color: '#1E3A8A' },
  { id: 'GT', name: 'Gujarat Titans', shortName: 'GT', color: '#0B4973' },
  { id: 'KKR', name: 'Kolkata Knight Riders', shortName: 'KKR', color: '#3A225D' },
  { id: 'LSG', name: 'Lucknow Super Giants', shortName: 'LSG', color: '#0E7490' },
  { id: 'MI', name: 'Mumbai Indians', shortName: 'MI', color: '#004BA0' },
  { id: 'PBKS', name: 'Punjab Kings', shortName: 'PBKS', color: '#DC2626' },
  { id: 'RR', name: 'Rajasthan Royals', shortName: 'RR', color: '#EA1A85' },
  { id: 'RCB', name: 'Royal Challengers Bengaluru', shortName: 'RCB', color: '#EC1C24' },
  { id: 'SRH', name: 'Sunrisers Hyderabad', shortName: 'SRH', color: '#F26522' },
];

interface RetentionSetupProps {
  room: AuctionRoomState;
  user: UserProfile;
  onSubmitRetentions: (teamId: TeamId, retainedPlayerIds: string[]) => void;
  onStartAuction: () => void;
}

export const RetentionSetup: React.FC<RetentionSetupProps> = ({
  room,
  user,
  onSubmitRetentions,
  onStartAuction,
}) => {
  // Selected team is permanently locked to user's assigned franchise (PART 13 & 14)
  const userAssignedTeamId = (user.selectedTeamId ||
    room.participants?.find((p) => p.uid === user.id || (p as any).userId === user.id)?.teamId ||
    (Object.keys(room.teams)[0] as TeamId)) as TeamId;
  const selectedTeamTab: TeamId = userAssignedTeamId;
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);

  // Authoritatively check room owner or HOST role
  const isRoomOwner =
    (room.hostUid || room.hostUserId) === user.id ||
    (user as any).firebaseUid === (room.hostUid || room.hostUserId) ||
    (user as any).uid === (room.hostUid || room.hostUserId);
  const isHost = isRoomOwner || user.role === 'HOST';

  // Final Player Data Quality Gate audit
  const qualityGate = useMemo(() => runPlayerDataQualityGate(room.players), [room.players]);

  const isMiniMode = room.gameMode === 'MINI';
  const isCanStart = isMiniMode || qualityGate.passed;

  const handleStartAuction = () => {
    if (isStarting) return;
    if (!isCanStart) {
      alert('Cannot start auction: Player Data Quality Gate checks have not all passed!');
      return;
    }
    setIsStarting(true);
    try {
      onStartAuction();
    } finally {
      setTimeout(() => setIsStarting(false), 2500);
    }
  };

  // User-Controlled Retentions:
  // Initial state loads any previously saved retentions for the room, or empty array.
  // Real-life retentions are NOT automatically retained; the user decides freely.
  const [retainedMap, setRetainedMap] = useState<Record<TeamId, string[]>>(() => {
    const initial: Record<string, string[]> = {};
    for (const f of IPL_2026_FRANCHISES) {
      const squad = room?.teams?.[f.id]?.squad || [];
      initial[f.id] = (squad || []).filter((p) => p && p.status === 'RETAINED').map((p) => p.id);
    }
    return initial as Record<TeamId, string[]>;
  });

  const currentTeam = room.teams[selectedTeamTab] || {
    id: selectedTeamTab,
    name: selectedTeamTab,
    shortName: selectedTeamTab,
    primaryColor: '#3B82F6',
    initialPurse: 12000,
    purse: 12000,
  };

  // 2. SHOW THE TEAM'S CANDIDATE PLAYERS:
  // For MEGA Auction: Authoritative current 2026 squad for the selected franchise.
  // For MINI Auction Cycle 2+: Selected franchise's squad created from the PREVIOUS Mini Auction cycle.
  // Enforces unique canonical identity and only shows that team's players.
  const candidatePlayers: Player[] = useMemo(() => {
    const isMiniCycle2Plus = room.gameMode === 'MINI' && (room.miniAuctionCycle || 1) >= 2;
    let rawList: Player[] = [];

    if (isMiniCycle2Plus) {
      // In Cycle 2+, retention must ONLY be chosen from that team's previous Mini Auction squad
      rawList = (room.teams[selectedTeamTab]?.squad || []).filter(Boolean);
    } else {
      rawList = TEAMS_SQUADS_2026[selectedTeamTab] || [];
    }

    const seen = new Set<string>();
    const uniqueList: Player[] = [];
    for (const p of rawList) {
      if (!p) continue;
      const key = p.playerId || p.id;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueList.push(p);
      }
    }
    return uniqueList;
  }, [selectedTeamTab, room.gameMode, room.miniAuctionCycle, room.teams]);

  // Selected player IDs for this team in explicit user retention order (Retention #1, #2, ...)
  const selectedForThisTeam = retainedMap[selectedTeamTab] || [];

  // Map IDs to full player objects preserving exact selection order
  const retainedPlayersList: Player[] = useMemo(() => {
    return (selectedForThisTeam || [])
      .map((id) => (candidatePlayers || []).find((p) => p && p.id === id))
      .filter((p): p is Player => !!p);
  }, [selectedForThisTeam, candidatePlayers]);

  // Exact Retention Calculations using Official IPL 2026 Game Logic
  const retentionStats = useMemo(() => {
    return calculateRetentionCosts(retainedPlayersList);
  }, [retainedPlayersList]);

  // Toggle player selection
  const handleTogglePlayer = (player: Player) => {
    setSaveSuccessMsg(null);
    const isSelected = selectedForThisTeam.includes(player.id);

    if (isSelected) {
      // Remove player
      setRetainedMap((prev) => ({
        ...prev,
        [selectedTeamTab]: (prev[selectedTeamTab] || []).filter((id) => id !== player.id),
      }));
    } else {
      // Rule 4: Maximum retention = 6 players
      if (selectedForThisTeam.length >= 6) {
        alert('Maximum 6 players can be retained per franchise!');
        return;
      }

      // Rule 7: Maximum 5 capped, maximum 2 uncapped
      const isPlayerCapped = player.cappedStatus !== 'UNCAPPED' && player.isCapped !== false && player.isUncapped !== true;
      if (isPlayerCapped && retentionStats.cappedRetained >= 5) {
        alert('Maximum 5 capped players can be retained!');
        return;
      }
      if (!isPlayerCapped && retentionStats.uncappedRetained >= 2) {
        alert('Maximum 2 uncapped players can be retained!');
        return;
      }

      // Assign the next retention slot order
      setRetainedMap((prev) => ({
        ...prev,
        [selectedTeamTab]: [...(prev[selectedTeamTab] || []), player.id],
      }));
    }
  };

  // Reorder retention slot (Move Up)
  const handleMoveUp = (index: number) => {
    if (index <= 0) return;
    setSaveSuccessMsg(null);
    setRetainedMap((prev) => {
      const list = [...(prev[selectedTeamTab] || [])];
      const temp = list[index - 1];
      list[index - 1] = list[index];
      list[index] = temp;
      return { ...prev, [selectedTeamTab]: list };
    });
  };

  // Reorder retention slot (Move Down)
  const handleMoveDown = (index: number) => {
    if (index >= selectedForThisTeam.length - 1) return;
    setSaveSuccessMsg(null);
    setRetainedMap((prev) => {
      const list = [...(prev[selectedTeamTab] || [])];
      const temp = list[index + 1];
      list[index + 1] = list[index];
      list[index] = temp;
      return { ...prev, [selectedTeamTab]: list };
    });
  };

  // Remove specific player from retentions
  const handleRemoveRetention = (playerId: string) => {
    setSaveSuccessMsg(null);
    setRetainedMap((prev) => ({
      ...prev,
      [selectedTeamTab]: (prev[selectedTeamTab] || []).filter((id) => id !== playerId),
    }));
  };

  // Clear all retentions (0 retained is valid!)
  const handleClearRetentions = () => {
    setSaveSuccessMsg(null);
    setRetainedMap((prev) => ({
      ...prev,
      [selectedTeamTab]: [],
    }));
  };

  // Save retentions for this franchise
  const handleSaveTeamRetentions = () => {
    onSubmitRetentions(selectedTeamTab, selectedForThisTeam);
    setSaveSuccessMsg(`✓ Saved ${selectedForThisTeam.length} retentions for ${currentTeam.name}! Remaining purse: ${formatLakhsToINR(retentionStats.remainingPurseLakhs)}.`);
    setTimeout(() => setSaveSuccessMsg(null), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-amber-500/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-tech font-bold uppercase mb-2">
            <ShieldCheck className="w-4 h-4" /> {room.gameMode === 'MINI' ? `Mini Auction Cycle ${room.miniAuctionCycle || 2} Retention Phase` : 'IPL 2026 Team Retention System'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-wider text-slate-100">
            {room.gameMode === 'MINI' ? `MINI AUCTION CYCLE ${room.miniAuctionCycle || 2} RETENTIONS` : 'FRANCHISE RETENTIONS & SQUAD SETUP'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            {room.gameMode === 'MINI'
              ? `Select up to 6 players from your previous Cycle ${(room.miniAuctionCycle || 2) - 1} squad. Non-retained players enter the common auction pool for Cycle ${room.miniAuctionCycle || 2}.`
              : 'Choose which players to retain from your 2026 squad. Retaining 0, 1, 2, 3, 4, 5, or 6 players is completely user-controlled. Retention costs depend on selection order and automatically update the franchise auction purse.'}
          </p>
        </div>

        {/* Start Auction Action Button (Visible only to Host / Room Owner) */}
        {isHost ? (
          <div className="flex flex-col items-end gap-2 shrink-0">
            <button
              onClick={handleStartAuction}
              disabled={!isCanStart || isStarting}
              className={`py-3 px-6 rounded-2xl font-bold font-tech text-sm uppercase tracking-wider shadow-xl transition-all flex items-center gap-2 ${
                isCanStart && !isStarting
                  ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-amber-500/20 active:scale-[0.98] cursor-pointer hover:scale-105'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              {isStarting ? (
                <span>STARTING AUCTION...</span>
              ) : isMiniMode ? (
                <>
                  <span>START AUCTION (CYCLE {room.miniAuctionCycle || 2})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>START LIVE AUCTION</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <span className="text-[11px] font-tech text-slate-400">
              {isStarting
                ? 'Synchronizing auction pool across participants...'
                : isMiniMode
                ? `✓ Squad retentions configured • Ready to commence Cycle ${room.miniAuctionCycle || 2}`
                : qualityGate.passed
                ? '✓ Official 350-Player Pool Verified • Ready'
                : 'Verifying player data...'}
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-end gap-1.5 shrink-0 bg-slate-900/90 border border-slate-700/60 px-4 py-3 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 text-xs font-tech font-bold text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>WAITING FOR HOST TO START AUCTION</span>
            </div>
            <span className="text-[11px] font-tech text-slate-400">
              {isMiniMode
                ? `The host will click Start Auction once Cycle ${room.miniAuctionCycle || 2} retentions are ready`
                : 'The host will start the live auction after squad retentions'}
            </span>
          </div>
        )}
      </div>

      {/* Save Toast Notification */}
      {saveSuccessMsg && (
        <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-4 py-3 rounded-2xl text-xs font-tech font-bold flex items-center gap-2 shadow-lg animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* User's Assigned Franchise Banner - Only the selected franchise is shown (PART 13 & 14) */}
      <div className="bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3.5">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold font-display text-white shadow-xl shrink-0 border border-white/20"
            style={{
              backgroundColor:
                IPL_2026_FRANCHISES.find((f) => f.id === selectedTeamTab)?.color ||
                currentTeam.primaryColor ||
                '#004BA0',
            }}
          >
            {currentTeam.shortName || selectedTeamTab}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-xs font-tech uppercase text-amber-400 font-bold tracking-wider">
                YOUR MANAGED FRANCHISE
              </span>
              <span className="text-[9px] sm:text-[10px] font-tech px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                ✓ ROOM MEMBERSHIP VERIFIED
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-editorial font-extrabold uppercase text-white tracking-wide">
              {currentTeam.name}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Retentions are configured exclusively for your franchise. Players shown below belong to the {currentTeam.name} squad.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800 shrink-0 self-start md:self-center">
          <div>
            <span className="text-[10px] font-tech uppercase text-slate-500 block">RETAINED</span>
            <span className="font-editorial text-lg sm:text-xl text-amber-400 font-bold">
              {selectedForThisTeam.length} / 6
            </span>
          </div>
          <div className="w-px h-8 bg-slate-800" />
          <div>
            <span className="text-[10px] font-tech uppercase text-slate-500 block">REMAINING PURSE</span>
            <span className="font-editorial text-lg sm:text-xl text-emerald-400 font-bold">
              {formatLakhsToINR(retentionStats.remainingPurseLakhs)}
            </span>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 2026 Squad Player List (User Controlled Selection) */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display tracking-wider text-slate-100 flex items-center gap-2">
                <span>{currentTeam.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-tech">
                  2026 Squad ({candidatePlayers.length} Players)
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Check players below to retain. Order of selection determines retention tier cost.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {selectedForThisTeam.length > 0 && (
                <button
                  onClick={handleClearRetentions}
                  className="py-1.5 px-3 rounded-xl text-xs font-tech text-slate-400 hover:text-rose-300 hover:bg-rose-500/10 border border-slate-800 hover:border-rose-500/30 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Reset to 0 retentions"
                >
                  <RotateCcw className="w-3 h-3" /> Clear All (0)
                </button>
              )}
              <button
                onClick={handleSaveTeamRetentions}
                className="py-2 px-4 rounded-xl text-xs font-tech font-bold uppercase bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
              >
                Save Retentions
              </button>
            </div>
          </div>

          {/* Squad Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1">
            {candidatePlayers.length > 0 ? (
              candidatePlayers.map((player) => {
                const isSelected = selectedForThisTeam.includes(player.id);
                const slotIndex = selectedForThisTeam.indexOf(player.id);
                const isPlayerCapped = player.cappedStatus !== 'UNCAPPED' && player.isCapped !== false && player.isUncapped !== true;

                // Dynamic retention price:
                // UNCAPPED is always ₹4 Cr.
                // CAPPED is based on position: 1st -> ₹18 Cr, 2nd -> ₹16 Cr, 3rd -> ₹14 Cr, 4th/5th/6th -> ₹12 Cr
                const currentSlotItem = isSelected && slotIndex >= 0 ? retentionStats.breakdown[slotIndex] : null;
                const dynamicRetentionPrice = currentSlotItem
                  ? currentSlotItem.costFormatted
                  : (!isPlayerCapped
                      ? '₹4 Cr'
                      : (selectedForThisTeam.length === 0
                          ? '₹18 Cr'
                          : selectedForThisTeam.length === 1
                          ? '₹16 Cr'
                          : selectedForThisTeam.length === 2
                          ? '₹14 Cr'
                          : '₹12 Cr'));

                return (
                  <div
                    key={player.id}
                    onClick={() => handleTogglePlayer(player)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 shadow-lg ring-1 ring-amber-400/50'
                        : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/70 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <div className="inline-flex items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 overflow-hidden p-0.5 shadow-sm">
                          {player.imageUrl || player.photo ? (
                            <img
                              src={player.imageUrl || player.photo}
                              alt={player.name}
                              className="w-auto h-auto max-w-[48px] max-h-[48px] object-contain block"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="w-11 h-11 flex flex-col items-center justify-center text-slate-400 bg-slate-900/90 text-[11px] font-tech font-bold uppercase tracking-wider">
                              {player.name ? player.name.split(' ').map((n) => n[0]).join('').slice(0, 2) : 'IPL'}
                            </div>
                          )}
                        </div>
                        {/* Overseas / Indian Flag indicator */}
                        <span
                          className="absolute -bottom-1 -right-1 text-xs bg-slate-900 rounded-full px-0.5 border border-slate-700 shadow"
                          title={player.isOverseas ? `Overseas (${player.country})` : 'Indian Player'}
                        >
                          {player.isOverseas ? '🌍' : '🇮🇳'}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="text-xs font-bold text-slate-100 truncate">{player.name}</h4>
                          <span className={`text-[9px] font-tech font-bold px-1.5 py-0.2 rounded border ${
                            !isPlayerCapped
                              ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                              : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                          }`} title={player.cappedReason || undefined}>
                            {!isPlayerCapped ? (player.lastInternationalMatchDate ? 'UNCAPPED (5-YR INACTIVE)' : 'UNCAPPED') : 'CAPPED'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-tech mt-1">
                          <span className="text-slate-400">Retention Price:</span>
                          <span className="font-bold text-amber-400 font-mono">
                            {dynamicRetentionPrice}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-tech mt-0.5 truncate">
                          {player.role} • {player.country} • Auction Base: {formatLakhsToINR(player.basePrice)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      {isSelected ? (
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-tech font-extrabold text-amber-400">
                            #{slotIndex + 1}
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-lg border border-slate-700 bg-slate-900 text-transparent flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-2 text-center py-10 text-slate-500 text-xs">
                No eligible players found for {currentTeam.shortName}.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Active Retentions Order & Financial Breakdown */}
        <div className="lg:col-span-5 space-y-5">
          {/* Active Retentions Order Panel */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold font-display tracking-wider text-amber-300 uppercase flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" /> Selected Retentions ({retentionStats.totalRetained} / 6)
                </h3>
                <p className="text-[11px] text-slate-400 font-tech">
                  Cost is assigned based on retention priority order.
                </p>
              </div>

              {retentionStats.isValid ? (
                <span className="text-[10px] font-tech font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  VALID ({retentionStats.totalRetained} Retained)
                </span>
              ) : (
                <span className="text-[10px] font-tech font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40">
                  INVALID
                </span>
              )}
            </div>

            {(retentionStats?.breakdown || []).length > 0 ? (
              <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                {(retentionStats?.breakdown || []).map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-tech"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center shrink-0 text-[11px] border border-amber-500/40">
                        #{item.slotNumber}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-100 truncate">{item.name}</span>
                          <span>{item.isOverseas ? '🌍' : '🇮🇳'}</span>
                          {!item.isCapped && (
                            <span className="text-[8px] px-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">
                              UNCAPPED
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-bold text-amber-400">
                          {item.costFormatted}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {/* Move Up */}
                      <button
                        onClick={() => handleMoveUp(idx)}
                        disabled={idx === 0}
                        className={`p-1 rounded-lg border ${
                          idx === 0
                            ? 'text-slate-700 border-slate-800 cursor-not-allowed'
                            : 'text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-amber-400 cursor-pointer'
                        }`}
                        title="Move Up in retention order"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>

                      {/* Move Down */}
                      <button
                        onClick={() => handleMoveDown(idx)}
                        disabled={idx === retentionStats.breakdown.length - 1}
                        className={`p-1 rounded-lg border ${
                          idx === retentionStats.breakdown.length - 1
                            ? 'text-slate-700 border-slate-800 cursor-not-allowed'
                            : 'text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-amber-400 cursor-pointer'
                        }`}
                        title="Move Down in retention order"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>

                      {/* Remove */}
                      <button
                        onClick={() => handleRemoveRetention(item.id)}
                        className="p-1 rounded-lg border border-slate-800 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/30 transition-colors cursor-pointer"
                        title="Remove from retentions"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-center text-xs text-slate-500 font-tech">
                0 Players Retained. Full ₹120 Cr purse and 6 RTM cards will be available in live auction.
              </div>
            )}
          </div>

          {/* Retention Impact & Purse Breakdown (Exact Math) */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 space-y-4">
            <h3 className="text-sm font-bold font-display tracking-wider text-amber-300 uppercase flex items-center gap-2">
              <Coins className="w-4 h-4 text-amber-400" /> Retention Purse Breakdown
            </h3>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-tech">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">TOTAL RETAINED</span>
                <span className="font-bold text-slate-100 text-sm">
                  {retentionStats.totalRetained} <span className="text-xs text-slate-500">/ 6 max</span>
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">CAPPED / UNCAPPED</span>
                <span className="font-bold text-slate-100 text-sm">
                  {retentionStats.cappedRetained} <span className="text-[10px] text-slate-400">cap</span> • {retentionStats.uncappedRetained} <span className="text-[10px] text-slate-400">uncap</span>
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">INDIAN PLAYERS</span>
                <span className="font-bold text-slate-100 text-sm">
                  {retentionStats.indianRetained} 🇮🇳
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">OVERSEAS PLAYERS</span>
                <span className="font-bold text-slate-100 text-sm">
                  {retentionStats.overseasRetained} 🌍
                </span>
              </div>
            </div>

            {/* Financial Ledger */}
            <div className="space-y-2.5 font-tech text-xs pt-1">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Starting Franchise Purse:</span>
                <span className="font-bold text-slate-100">₹120.00 Cr</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Total Retention Deduction:</span>
                <span className="font-bold text-rose-400">
                  - {formatLakhsToINR(retentionStats.totalDeductionLakhs)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800 bg-slate-950/70 px-3 rounded-xl">
                <span className="text-slate-300 font-bold">Remaining Auction Purse:</span>
                <span className="font-bold text-emerald-400 text-base">
                  {formatLakhsToINR(retentionStats.remainingPurseLakhs)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 px-1">
                <span className="text-slate-400">Available RTM Cards:</span>
                <span className="font-bold text-amber-400 text-sm">
                  {retentionStats.remainingRTMs} RTM Cards
                </span>
              </div>
            </div>

            {/* Official IPL Retention Rule Reference */}
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-slate-300 font-tech leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Official Slabs:</strong> 1st: ₹18 Cr • 2nd: ₹14 Cr • 3rd: ₹11 Cr • 4th: ₹18 Cr • 5th: ₹14 Cr • Uncapped: ₹4 Cr.
                Remaining slots become available RTM cards in the live auction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
