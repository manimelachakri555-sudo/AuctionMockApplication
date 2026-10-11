import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Users,
  Globe2,
  ShieldCheck,
  Award,
  Download,
  FileSpreadsheet,
  Search,
  CheckCircle2,
  AlertTriangle,
  Wallet,
  Coins,
} from 'lucide-react';
import { AuctionRoomState, IPLTeam, Player, TeamId } from '../types/auction';
import { formatLakhsToINR, MAX_OVERSEAS, MIN_SQUAD_SIZE } from '../utils/auctionCalculations';
import { exportSingleTeamToCSV, exportSquadsToCSV } from '../utils/squadExport';
import { TeamLogo } from './TeamLogo';

interface SquadDrawerProps {
  isOpen: boolean;
  room: AuctionRoomState;
  initialTeamId?: TeamId;
  onClose: () => void;
}

export const SquadDrawer: React.FC<SquadDrawerProps> = ({
  isOpen,
  room,
  initialTeamId,
  onClose,
}) => {
  // Only operate on teams that actually have human participants
  const activeFranchiseIds = useMemo(() => {
    const list = (Object.keys(room?.teams || {}) as TeamId[]).filter((tid) => {
      const t = room?.teams?.[tid];
      return t && t.isActive !== false && (!!t.ownerUserId || t.squad.length > 0);
    });
    return list.length > 0 ? list : (Object.keys(room?.teams || {}) as TeamId[]);
  }, [room?.teams]);

  const defaultId = initialTeamId && room.teams[initialTeamId] ? initialTeamId : activeFranchiseIds[0] || (Object.keys(room?.teams || {})[0] as TeamId);
  const [selectedTeamId, setSelectedTeamId] = useState<TeamId>(defaultId);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'ALL' | 'RETENTIONS' | 'PURCHASES'>('ALL');

  // Keep selectedTeamId in sync if initialTeamId changes
  useEffect(() => {
    if (initialTeamId && room.teams[initialTeamId]) {
      setSelectedTeamId(initialTeamId);
    }
  }, [initialTeamId, room.teams]);

  if (!isOpen) return null;

  const currentTeam = room.teams[selectedTeamId] || room.teams[activeFranchiseIds[0]] || Object.values(room.teams)[0];
  const allSquad = currentTeam?.squad || [];

  // Categorize squad into Retentions and Auction Purchases
  const retainedPlayers = allSquad.filter((p) => p.status === 'RETAINED');
  const purchasedPlayers = allSquad.filter((p) => p.status !== 'RETAINED');

  // Check if room is in WITH RETENTIONS mode (MEGA auction mode) vs CLEAN SLATE (WITHOUT RETENTIONS / MINI)
  const isRetentionMode = room.gameMode === 'MEGA';

  // Total metrics
  const totalSquadSize = allSquad.length;
  const overseasCount = allSquad.filter((p) => p.isOverseas || (p.country && p.country !== 'India')).length;
  const remainingSlots = Math.max(0, 25 - totalSquadSize);
  const remainingOverseasSlots = Math.max(0, MAX_OVERSEAS - overseasCount);
  const minSquadRequirement = Math.min(totalSquadSize, MIN_SQUAD_SIZE);

  // Role Breakdown
  const battersCount = allSquad.filter((p) => {
    const r = (p.specialism || p.role || '').toLowerCase();
    return r.includes('bat') && !r.includes('bowl');
  }).length;

  const wicketKeepersCount = allSquad.filter((p) => {
    const r = (p.specialism || p.role || '').toLowerCase();
    return r.includes('keep') || r.includes('wk');
  }).length;

  const allRoundersCount = allSquad.filter((p) => {
    const r = (p.specialism || p.role || '').toLowerCase();
    return r.includes('all');
  }).length;

  const bowlersCount = allSquad.filter((p) => {
    const r = (p.specialism || p.role || '').toLowerCase();
    return r.includes('bowl') || r.includes('spin') || r.includes('fast') || r.includes('pace');
  }).length;

  // Filter players based on search query
  const filterList = (list: Player[]) => {
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.role && p.role.toLowerCase().includes(q)) ||
        (p.specialism && p.specialism.toLowerCase().includes(q)) ||
        (p.country && p.country.toLowerCase().includes(q))
    );
  };

  const filteredRetained = filterList(retainedPlayers);
  const filteredPurchased = filterList(purchasedPlayers);

  const renderPlayerCard = (player: Player, isRetention: boolean) => {
    const isPlayerCapped = player.cappedStatus !== 'UNCAPPED' && player.isCapped !== false && player.isUncapped !== true;
    const isOS = player.isOverseas || (player.country && player.country !== 'India');
    const price = player.soldPrice || player.basePrice;

    return (
      <div
        key={player.id}
        className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 text-xs transition-all"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Player Photo with Exact Fit Tight Wrapper */}
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 shrink-0 overflow-hidden flex items-center justify-center p-0.5">
            {player.photo || player.imageUrl ? (
              <img
                src={player.photo || player.imageUrl || undefined}
                alt={player.name}
                className="w-auto h-auto max-w-full max-h-full object-contain block"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : (
              <span className="text-[11px] font-tech text-slate-400 font-bold uppercase">
                {player.name ? player.name.split(' ').map((n) => n[0]).join('').slice(0, 2) : 'IPL'}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h5 className="font-bold text-slate-100 truncate text-xs">{player.name}</h5>
              {isOS ? (
                <span className="text-[9px] font-tech px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  🌍 {player.country || 'Overseas'}
                </span>
              ) : (
                <span className="text-[9px] font-tech px-1 py-0.2 rounded bg-emerald-500/15 text-emerald-300">
                  🇮🇳
                </span>
              )}
              <span
                className={`text-[9px] font-tech px-1.5 py-0.2 rounded border ${
                  !isPlayerCapped
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                    : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                }`}
                title={player.cappedReason || undefined}
              >
                {!isPlayerCapped
                  ? player.lastInternationalMatchDate
                    ? 'UNCAPPED (5-YR)'
                    : 'UNCAPPED'
                  : 'CAPPED'}
              </span>
            </div>

            <p className="text-[11px] font-tech text-slate-400 mt-0.5 truncate">
              {player.specialism || player.role} • {player.batStyle || 'Right-hand'}
            </p>
          </div>
        </div>

        {/* Right: Badge & Price */}
        <div className="text-right shrink-0 font-tech">
          <span className="font-bold text-amber-400 block text-sm">
            {formatLakhsToINR(price)}
          </span>
          <span
            className={`text-[9px] px-1.5 py-0.5 rounded font-extrabold uppercase inline-block mt-0.5 ${
              isRetention
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
            }`}
          >
            {isRetention ? 'RETAINED' : 'BOUGHT'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl h-full bg-[#080D1C] border-l border-amber-500/30 p-4 sm:p-6 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#FFC400]" />
            <h3 className="text-lg font-editorial font-bold tracking-wider text-slate-100 uppercase">
              LIVE FRANCHISE SQUAD
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Franchise Horizontal Selector: strictly active participating teams */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin mb-3">
          {activeFranchiseIds.map((tid) => {
            const t = room?.teams?.[tid];
            if (!t) return null;
            const isPicked = selectedTeamId === tid;
            return (
              <button
                key={tid}
                onClick={() => setSelectedTeamId(tid)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-tech font-bold uppercase transition-all whitespace-nowrap cursor-pointer ${
                  isPicked
                    ? 'border-[#FFC400] bg-slate-900 text-white shadow-sm ring-1 ring-[#FFC400]/40'
                    : 'border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-400'
                }`}
              >
                <TeamLogo teamId={tid} maxHeight="max-h-4" maxWidth="max-w-6" />
                <span>{t.shortName}</span>
                <span className="text-[10px] text-slate-500 font-normal">({t.squad.length})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Team Overview Card with Live Squad Summary */}
        {currentTeam && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/90 border border-slate-800 mb-3 space-y-3 shrink-0">
            {/* Team Manager & Purse Header */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <TeamLogo teamId={currentTeam.id} maxHeight="max-h-10" maxWidth="max-w-10" />
                <div>
                  <h4 className="text-base font-bold text-slate-100">{currentTeam.name}</h4>
                  <p className="text-[11px] font-tech text-slate-400">
                    Manager: <span className="text-slate-200 font-semibold">{currentTeam.ownerName || 'BCCI Table'}</span>
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-tech text-slate-500 uppercase block font-bold">REMAINING PURSE</span>
                <span className="text-lg font-tech font-bold text-[#FFC400]">
                  {formatLakhsToINR(currentTeam.purse)}
                </span>
              </div>
            </div>

            {/* Live Squad Summary Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center text-xs font-tech">
              <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">PLAYERS</span>
                <span className="font-bold text-slate-100 text-sm">
                  {totalSquadSize} <span className="text-slate-500 font-normal">/ 25</span>
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  ({remainingSlots} slots left)
                </span>
              </div>

              <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">OVERSEAS</span>
                <span className={`font-bold text-sm ${overseasCount >= MAX_OVERSEAS ? 'text-rose-400' : 'text-cyan-400'}`}>
                  {overseasCount} <span className="text-slate-500 font-normal">/ {MAX_OVERSEAS}</span>
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  ({remainingOverseasSlots} OS left)
                </span>
              </div>

              <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">MINIMUM SQUAD</span>
                <span className={`font-bold text-sm ${totalSquadSize >= MIN_SQUAD_SIZE ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {minSquadRequirement} <span className="text-slate-500 font-normal">/ {MIN_SQUAD_SIZE}</span>
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  {totalSquadSize >= MIN_SQUAD_SIZE ? '✓ Met' : `${MIN_SQUAD_SIZE - totalSquadSize} needed`}
                </span>
              </div>
            </div>

            {/* Live Role Availability & Needs Bar */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-[10px] font-tech text-slate-500 uppercase font-bold mb-1.5">
                <span>ROLE AVAILABILITY & NEEDS</span>
                <span className="text-slate-400">Total: {totalSquadSize}</span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 text-center font-tech text-xs">
                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">BATTERS</span>
                  <span className="font-bold text-white text-sm">{battersCount}</span>
                  <span className="text-[9px] block text-slate-500 mt-0.5">
                    {battersCount >= 4 ? '✓ Good' : '⚠ Need'}
                  </span>
                </div>

                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">WK</span>
                  <span className="font-bold text-white text-sm">{wicketKeepersCount}</span>
                  <span className="text-[9px] block text-slate-500 mt-0.5">
                    {wicketKeepersCount >= 1 ? '✓ Good' : '⚠ Need (0/1)'}
                  </span>
                </div>

                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">ALL-ROUND</span>
                  <span className="font-bold text-white text-sm">{allRoundersCount}</span>
                  <span className="text-[9px] block text-slate-500 mt-0.5">
                    {allRoundersCount >= 2 ? '✓ Good' : '⚠ Need'}
                  </span>
                </div>

                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">BOWLERS</span>
                  <span className="font-bold text-white text-sm">{bowlersCount}</span>
                  <span className="text-[9px] block text-slate-500 mt-0.5">
                    {bowlersCount >= 4 ? '✓ Good' : '⚠ Need'}
                  </span>
                </div>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search squad..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-tech text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#FFC400]"
                />
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => exportSingleTeamToCSV(currentTeam)}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/60 text-slate-300 hover:text-white text-[11px] font-tech font-bold uppercase flex items-center gap-1 cursor-pointer transition-colors"
                  title="Export this squad to CSV"
                >
                  <FileSpreadsheet className="w-3 h-3 text-emerald-400" />
                  <span>CSV</span>
                </button>

                <button
                  type="button"
                  onClick={() => exportSquadsToCSV(room)}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/60 text-slate-300 hover:text-white text-[11px] font-tech font-bold uppercase flex items-center gap-1 cursor-pointer transition-colors"
                  title="Export all squads to CSV"
                >
                  <Download className="w-3 h-3 text-cyan-400" />
                  <span>All</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section Tabs: In With Retentions mode, show RETENTIONS and AUCTION PURCHASES. In Clean Slate, show only AUCTION PURCHASES. */}
        {isRetentionMode && (
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 mb-3 text-xs font-tech">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`px-3 py-1.5 rounded-lg font-bold uppercase transition-all cursor-pointer ${
                activeTab === 'ALL'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ALL SQUAD ({allSquad.length})
            </button>

            <button
              onClick={() => setActiveTab('RETENTIONS')}
              className={`px-3 py-1.5 rounded-lg font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'RETENTIONS'
                  ? 'bg-amber-500/20 text-[#FFC400] border border-amber-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>RETENTIONS ({retainedPlayers.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('PURCHASES')}
              className={`px-3 py-1.5 rounded-lg font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'PURCHASES'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>AUCTION PURCHASES ({purchasedPlayers.length})</span>
            </button>
          </div>
        )}

        {/* Player Roster Sections */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {allSquad.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 text-xs py-10">
              <Users className="w-8 h-8 text-slate-700 mb-2" />
              <p>No players acquired yet by {currentTeam?.name}.</p>
              <p className="text-[10px] font-tech text-slate-600 mt-1">
                Players bought or retained will appear live in this roster.
              </p>
            </div>
          ) : (
            <>
              {/* 1. RETENTIONS SECTION (Only in With Retentions mode and when relevant) */}
              {isRetentionMode && (activeTab === 'ALL' || activeTab === 'RETENTIONS') && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-tech font-bold uppercase tracking-wider text-amber-400">
                    <span>RETENTIONS ({retainedPlayers.length})</span>
                    <span className="text-[10px] text-slate-500">Pre-Auction</span>
                  </div>

                  {filteredRetained.length > 0 ? (
                    <div className="space-y-2">
                      {filteredRetained.map((p) => renderPlayerCard(p, true))}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 text-center text-slate-500 text-xs font-tech">
                      No retained players for this franchise.
                    </div>
                  )}
                </div>
              )}

              {/* 2. AUCTION PURCHASES SECTION (Always present; in Clean Slate, this is the ONLY section) */}
              {(activeTab === 'ALL' || activeTab === 'PURCHASES' || !isRetentionMode) && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-tech font-bold uppercase tracking-wider text-emerald-400">
                    <span>AUCTION PURCHASES ({purchasedPlayers.length})</span>
                    <span className="text-[10px] text-slate-500">Live Auction</span>
                  </div>

                  {filteredPurchased.length > 0 ? (
                    <div className="space-y-2">
                      {filteredPurchased.map((p) => renderPlayerCard(p, false))}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 text-center text-slate-500 text-xs font-tech">
                      No players purchased in auction yet.
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
