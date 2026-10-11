import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Layers,
  Users,
  Shield,
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Player, PlayerRole } from '../types/auction';
import { OFFICIAL_350_PLAYERS, MASTER_PLAYERS_DATABASE } from '../data/playersData';
import { OFFICIAL_SETS_CONFIG } from '../data/auctionSetsData';
import { formatLakhsToINR } from '../utils/auctionCalculations';
import { PlayerProfileModal } from './PlayerProfileModal';

// Set metadata derived from canonical database sets
export const SETS_METADATA = OFFICIAL_SETS_CONFIG.map((s) => ({
  setNumber: s.setNumber,
  setCode: s.setCode,
  setName: s.setName,
  reservePriceRange: s.cappedStatus === 'CAPPED' ? (s.setNumber <= 5 ? '₹2.00 Cr' : s.setNumber <= 15 ? '₹1.50 Cr' : '₹1.00 Cr') : (s.setNumber <= 10 ? '₹30 - ₹50 Lakh' : '₹30 Lakh')
}));

export const SETS_42_METADATA = SETS_METADATA;

interface AuctionPlayerPoolViewProps {
  onBackToHome?: () => void;
  onEnterAuction?: () => void;
}

export const AuctionPlayerPoolView: React.FC<AuctionPlayerPoolViewProps> = ({
  onBackToHome,
  onEnterAuction,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSet, setSelectedSet] = useState<string>('ALL');
  const [selectedRole, setSelectedRole] = useState<string>('ALL');
  const [selectedNationality, setSelectedNationality] = useState<string>('ALL');
  const [selectedCapped, setSelectedCapped] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'SET_ORDER' | 'PRICE_HIGH' | 'PRICE_LOW' | 'NAME' | 'AGE'>('SET_ORDER');
  const [viewMode, setViewMode] = useState<'GRID' | 'LIST'>('GRID');
  const [collapsedSets, setCollapsedSets] = useState<Record<number, boolean>>({});
  const [activePlayerForModal, setActivePlayerForModal] = useState<Player | null>(null);

  const totalSetsCount = SETS_METADATA.length;
  const totalPlayersCount = OFFICIAL_350_PLAYERS.length;

  // Group all official auction players by set number
  const playersBySet = useMemo(() => {
    const map = new Map<number, Player[]>();
    for (const s of SETS_METADATA) {
      map.set(s.setNumber, []);
    }

    OFFICIAL_350_PLAYERS.forEach((p) => {
      const setNum = p.setNo || p.setNumber || 1;
      if (!map.has(setNum)) {
        map.set(setNum, []);
      }
      map.get(setNum)!.push(p);
    });

    return map;
  }, []);

  // Filter function for players
  const filterPlayer = (p: Player) => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matchesName = p.name.toLowerCase().includes(query);
      const matchesCountry = p.country.toLowerCase().includes(query);
      const matchesRole = p.role.toLowerCase().includes(query);
      if (!matchesName && !matchesCountry && !matchesRole) return false;
    }

    if (selectedRole !== 'ALL' && p.role !== selectedRole) return false;
    if (selectedNationality === 'INDIAN' && p.isOverseas) return false;
    if (selectedNationality === 'OVERSEAS' && !p.isOverseas) return false;
    const isPlayerCapped = p.cappedStatus !== 'UNCAPPED' && p.isCapped !== false && p.isUncapped !== true;
    if (selectedCapped === 'CAPPED' && !isPlayerCapped) return false;
    if (selectedCapped === 'UNCAPPED' && isPlayerCapped) return false;

    return true;
  };

  const toggleSetCollapse = (setNo: number) => {
    setCollapsedSets((prev) => ({
      ...prev,
      [setNo]: !prev[setNo],
    }));
  };

  const collapseAllSets = () => {
    const state: Record<number, boolean> = {};
    for (const s of SETS_METADATA) state[s.setNumber] = true;
    setCollapsedSets(state);
  };

  const expandAllSets = () => {
    setCollapsedSets({});
  };

  // Filtered sets list
  const visibleSets = useMemo(() => {
    if (selectedSet !== 'ALL') {
      const sNum = parseInt(selectedSet, 10);
      return SETS_METADATA.filter((s) => s.setNumber === sNum);
    }
    return SETS_METADATA;
  }, [selectedSet]);

  const totalFilteredCount = useMemo(() => {
    let count = 0;
    for (const s of visibleSets) {
      const players = playersBySet.get(s.setNumber) || [];
      count += players.filter(filterPlayer).length;
    }
    return count;
  }, [visibleSets, playersBySet, searchQuery, selectedRole, selectedNationality, selectedCapped]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-amber-500/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-tech font-bold uppercase mb-2">
            <Layers className="w-4 h-4" /> Official {totalSetsCount}-Set Auction Directory
          </div>
          <h1 className="text-2xl sm:text-4xl font-display font-extrabold tracking-wider text-slate-100 uppercase">
            TATA IPL AUCTION PLAYER POOL
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-tech">
            Browse all <strong>{totalPlayersCount} official auction players</strong> grouped across <strong>Sets 1 to {totalSetsCount}</strong>. Search by player name, role, verified age, and reserve price before entering live bidding.
          </p>
        </div>

        {/* Stats Pill / Live Action */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <div className="bg-slate-950/80 border border-slate-800 px-4 py-3 rounded-2xl font-tech text-center">
            <span className="text-[11px] text-slate-400 block uppercase">TOTAL POOL</span>
            <span className="text-lg font-bold text-amber-400">{totalPlayersCount} Players • {totalSetsCount} Sets</span>
          </div>
          {onEnterAuction && (
            <button
              onClick={onEnterAuction}
              className="py-3 px-6 rounded-2xl font-bold font-tech text-sm uppercase tracking-wider bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Auction <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-lg">
        {/* Search row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search player by name, country, or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-tech text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-slate-950 border border-slate-800 rounded-2xl">
              <button
                onClick={() => setViewMode('GRID')}
                className={`p-2 rounded-xl text-xs font-tech transition-colors ${
                  viewMode === 'GRID' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('LIST')}
                className={`p-2 rounded-xl text-xs font-tech transition-colors ${
                  viewMode === 'LIST' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Expand / Collapse All */}
            <button
              onClick={expandAllSets}
              className="px-3 py-2 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-tech font-bold transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAllSets}
              className="px-3 py-2 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-tech font-bold transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 font-tech text-xs">
          {/* Set Filter */}
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Auction Set</label>
            <select
              value={selectedSet}
              onChange={(e) => setSelectedSet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="ALL">All {totalSetsCount} Sets</option>
              {SETS_METADATA.map((s) => (
                <option key={s.setNumber} value={s.setNumber}>
                  Set {s.setNumber} — {s.setCode} ({s.setName})
                </option>
              ))}
            </select>
          </div>

          {/* Role Filter */}
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Specialism</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="ALL">All Roles</option>
              <option value="BATTER">Batters</option>
              <option value="ALL_ROUNDER">All-Rounders</option>
              <option value="WICKET_KEEPER">Wicketkeepers</option>
              <option value="FAST_BOWLER">Fast Bowlers</option>
              <option value="SPINNER">Spinners</option>
            </select>
          </div>

          {/* Nationality Filter */}
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Nationality</label>
            <select
              value={selectedNationality}
              onChange={(e) => setSelectedNationality(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="ALL">All Nationalities</option>
              <option value="INDIAN">Indian Players 🇮🇳</option>
              <option value="OVERSEAS">Overseas Players 🌍</option>
            </select>
          </div>

          {/* Capped / Uncapped */}
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Status</label>
            <select
              value={selectedCapped}
              onChange={(e) => setSelectedCapped(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="ALL">All Statuses</option>
              <option value="CAPPED">Capped Players</option>
              <option value="UNCAPPED">Uncapped Players</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Sort Order</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="SET_ORDER">Official Set Sequence</option>
              <option value="PRICE_HIGH">Price: High to Low</option>
              <option value="PRICE_LOW">Price: Low to High</option>
              <option value="NAME">Name: A to Z</option>
              <option value="AGE">Age: Youngest First</option>
            </select>
          </div>
        </div>

        {/* Filter Results Summary */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] font-tech text-slate-400">
          <span>
            Showing <strong className="text-amber-400">{totalFilteredCount}</strong> of 350 auction players across{' '}
            <strong className="text-slate-200">{visibleSets.length}</strong> sets.
          </span>
          {(searchQuery || selectedSet !== 'ALL' || selectedRole !== 'ALL' || selectedNationality !== 'ALL' || selectedCapped !== 'ALL') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSet('ALL');
                setSelectedRole('ALL');
                setSelectedNationality('ALL');
                setSelectedCapped('ALL');
              }}
              className="text-amber-400 hover:text-amber-300 underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Set-Wise Display Loop */}
      <div className="space-y-6">
        {visibleSets.map((setMeta) => {
          let players = (playersBySet.get(setMeta.setNumber) || []).filter(filterPlayer);

          // Apply Sorting inside set
          if (sortBy === 'PRICE_HIGH') {
            players = [...players].sort((a, b) => b.basePrice - a.basePrice);
          } else if (sortBy === 'PRICE_LOW') {
            players = [...players].sort((a, b) => a.basePrice - b.basePrice);
          } else if (sortBy === 'NAME') {
            players = [...players].sort((a, b) => a.name.localeCompare(b.name));
          } else if (sortBy === 'AGE') {
            players = [...players].sort((a, b) => (a.age || 99) - (b.age || 99));
          }

          if (players.length === 0 && (searchQuery || selectedRole !== 'ALL' || selectedNationality !== 'ALL' || selectedCapped !== 'ALL')) {
            return null; // Skip non-matching sets during active search
          }

          const isCollapsed = !!collapsedSets[setMeta.setNumber];

          return (
            <div
              key={setMeta.setNumber}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-lg transition-all"
            >
              {/* Set Header Bar */}
              <div
                onClick={() => toggleSetCollapse(setMeta.setNumber)}
                className="p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-between cursor-pointer hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-tech font-extrabold text-xs shrink-0">
                    #{setMeta.setNumber < 10 ? `0${setMeta.setNumber}` : setMeta.setNumber}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-sm sm:text-base font-bold font-display text-slate-100 tracking-wider">
                        SET {setMeta.setNumber < 10 ? `0${setMeta.setNumber}` : setMeta.setNumber} — {setMeta.setCode}
                      </h2>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 font-tech border border-slate-700">
                        {setMeta.setName}
                      </span>
                    </div>
                    <p className="text-[11px] font-tech text-slate-400 mt-0.5">
                      Reserve Price: <strong className="text-slate-200">{setMeta.reservePriceRange}</strong> •{' '}
                      {players.length} Players Available
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-2">
                  <span className="text-xs font-tech text-slate-400 hidden sm:inline">
                    {isCollapsed ? 'Click to expand' : 'Click to collapse'}
                  </span>
                  <div className="p-1.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                    {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Set Content */}
              {!isCollapsed && (
                <div className="p-4 sm:p-6">
                  {players.length > 0 ? (
                    viewMode === 'GRID' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {players.map((player) => (
                          <div
                            key={player.id}
                            onClick={() => setActivePlayerForModal(player)}
                            className="bg-slate-950/70 border border-slate-800/90 rounded-2xl p-4 hover:border-amber-400/50 hover:bg-slate-900/90 transition-all cursor-pointer group shadow flex flex-col justify-between"
                          >
                            <div className="space-y-3">
                              {/* Top card bar */}
                              <div className="flex items-start justify-between gap-2">
                                <div className="relative">
                                  <div className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 group-hover:border-amber-400 transition-colors shadow overflow-hidden p-0.5">
                                    {player.photo || player.imageUrl ? (
                                      <img
                                        src={player.photo || player.imageUrl || undefined}
                                        alt={player.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-auto h-auto max-w-[64px] max-h-[64px] object-contain block"
                                        onError={(e) => {
                                          e.currentTarget.style.display = 'none';
                                        }}
                                      />
                                    ) : (
                                      <div className="w-16 h-16 flex flex-col items-center justify-center text-slate-400 bg-slate-900/90 text-xs font-tech font-bold uppercase tracking-wider">
                                        {player.name ? player.name.split(' ').map((n) => n[0]).join('').slice(0, 2) : 'IPL'}
                                      </div>
                                    )}
                                  </div>
                                  <span
                                    className="absolute -bottom-1 -right-1 text-sm bg-slate-900 rounded-full px-0.5 border border-slate-700"
                                    title={player.isOverseas ? `Overseas (${player.country})` : 'Indian'}
                                  >
                                    {player.isOverseas ? '🌍' : '🇮🇳'}
                                  </span>
                                </div>

                                <div className="text-right">
                                  <span className="text-[10px] font-tech text-slate-400 block">BASE PRICE</span>
                                  <span className="text-sm font-bold text-amber-400 font-tech">
                                    {formatLakhsToINR(player.basePrice)}
                                  </span>
                                </div>
                              </div>

                              {/* Details */}
                              <div>
                                <h3 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors truncate">
                                  {player.name}
                                </h3>
                                <p className="text-[11px] font-tech text-slate-400 mt-0.5 truncate">
                                  {player.role} • {player.country}
                                </p>
                                <p className="text-[10px] font-tech text-slate-400 mt-0.5 flex items-center gap-1">
                                  <Calendar className="w-3 h-3 text-slate-500" />
                                  <span>
                                    {player.age !== null && player.age !== undefined ? (
                                      `Age: ${player.age} yrs`
                                    ) : (
                                      <span className="text-slate-500">Age unavailable</span>
                                    )}
                                  </span>
                                </p>
                              </div>
                            </div>

                            {/* Bottom badges */}
                            <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[9px] font-tech">
                              <span
                                className={`px-1.5 py-0.5 rounded font-bold ${
                                  player.isCapped
                                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                }`}
                              >
                                {player.cappedStatus}
                              </span>

                              {player.imageVerified ? (
                                <span className="text-emerald-400 flex items-center gap-0.5">
                                  <CheckCircle2 className="w-3 h-3" /> Verified
                                </span>
                              ) : (
                                <span className="text-slate-500">Profile</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* List View */
                      <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/60 font-tech text-xs">
                        {players.map((player) => (
                          <div
                            key={player.id}
                            onClick={() => setActivePlayerForModal(player)}
                            className="p-3 sm:p-3.5 flex items-center justify-between hover:bg-slate-900 transition-colors cursor-pointer gap-3"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-10 h-10 rounded-xl border border-slate-700 bg-slate-900 shrink-0 overflow-hidden flex items-center justify-center p-0.5">
                                {player.photo || player.imageUrl ? (
                                  <img
                                    src={player.photo || player.imageUrl || undefined}
                                    alt={player.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-auto h-auto max-w-full max-h-full object-contain block"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                    }}
                                  />
                                ) : (
                                  <span className="text-[10px] font-tech text-slate-500 font-bold uppercase">
                                    {player.name ? player.name.split(' ').map((n) => n[0]).join('').slice(0, 2) : 'IPL'}
                                  </span>
                                )}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-bold text-slate-100 truncate">{player.name}</h4>
                                  <span>{player.isOverseas ? '🌍' : '🇮🇳'}</span>
                                  <span className="text-[9px] px-1 rounded bg-slate-800 text-slate-400">
                                    {player.role}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                                  {player.country} • {player.age ? `${player.age} yrs` : 'Age unavailable'} • Base:{' '}
                                  <strong className="text-amber-400">{formatLakhsToINR(player.basePrice)}</strong>
                                </p>
                              </div>
                            </div>

                            <button className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-tech shrink-0">
                              View <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    <div className="text-center py-8 text-xs font-tech text-slate-500">
                      No players match your active search filters in this set.
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Player Profile Modal */}
      {activePlayerForModal && (
        <PlayerProfileModal
          player={activePlayerForModal}
          onClose={() => setActivePlayerForModal(null)}
        />
      )}
    </div>
  );
};
