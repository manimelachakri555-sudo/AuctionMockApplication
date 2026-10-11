import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  Filter,
  Users,
  Trophy,
  DollarSign,
  Globe,
  Flame,
  Shield,
  Zap,
  Tag,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
} from 'lucide-react';
import { Player, AuctionRoomState, TeamId } from '../types/auction';
import { formatLakhsToINR } from '../utils/auctionCalculations';
import { IPL_TEAMS } from '../data/teamsData';
import { TEAMS_SQUADS_2026 } from '../data/playersData';

interface PlayerSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  players: Player[];
  room?: AuctionRoomState | null;
  onSelectPlayer?: (player: Player) => void;
}

export const PlayerSearchModal: React.FC<PlayerSearchModalProps> = ({
  isOpen,
  onClose,
  players = [],
  room,
  onSelectPlayer,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [scopeFilter, setScopeFilter] = useState<'ALL' | 'AUCTION' | 'SQUADS'>('ALL');
  const [roleFilter, setRoleFilter] = useState<'ALL' | 'BAT' | 'BOWL' | 'ALL_ROUND' | 'WK'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'SOLD' | 'UNSOLD' | 'UPCOMING'>('ALL');
  const [originFilter, setOriginFilter] = useState<'ALL' | 'INDIA' | 'OVERSEAS'>('ALL');

  // Combined master list of auction pool + franchise stars
  const combinedPlayerPool = useMemo(() => {
    const map = new Map<string, Player>();

    // 1. Add players passed in prop (auction pool)
    players.forEach((p) => {
      map.set(p.name.toLowerCase().trim(), p);
    });

    // 2. Add all franchise squad stars (Rohit, Kohli, Hardik, Bumrah, etc.)
    for (const tid in TEAMS_SQUADS_2026) {
      for (const p of TEAMS_SQUADS_2026[tid as TeamId]) {
        const norm = p.name.toLowerCase().trim();
        if (!map.has(norm)) {
          map.set(norm, {
            ...p,
            currentTeam: tid,
            previousTeam: tid,
            soldTo: (tid as TeamId),
            status: 'RETAINED',
            setName: `${tid} Franchise Squad`,
            setCode: 'SQUAD',
          });
        }
      }
    }

    return Array.from(map.values());
  }, [players]);

  const filteredPlayers = useMemo(() => {
    let list = combinedPlayerPool;

    // Scope filter
    if (scopeFilter === 'AUCTION') {
      list = list.filter((p) => (p.setCode !== 'SQUAD' && p.currentSet !== 'SQUAD'));
    } else if (scopeFilter === 'SQUADS') {
      list = list.filter((p) => p.setCode === 'SQUAD' || p.currentSet === 'SQUAD' || p.status === 'RETAINED');
    }

    // Search query
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.country && p.country.toLowerCase().includes(q)) ||
          (p.role && p.role.toLowerCase().includes(q)) ||
          (p.setCode && p.setCode.toLowerCase().includes(q)) ||
          (p.currentTeam && p.currentTeam.toLowerCase().includes(q)) ||
          (p.soldTo && p.soldTo.toLowerCase().includes(q))
      );
    }

    // Role Filter
    if (roleFilter !== 'ALL') {
      list = list.filter((p) => {
        const r = (p.role || '').toLowerCase();
        const s = (p.specialism || '').toLowerCase();
        if (roleFilter === 'BAT') return r.includes('bat');
        if (roleFilter === 'BOWL') return r.includes('bowl');
        if (roleFilter === 'ALL_ROUND') return r.includes('all');
        if (roleFilter === 'WK') return r.includes('keep') || s.includes('wk');
        return true;
      });
    }

    // Status Filter
    if (statusFilter !== 'ALL') {
      list = list.filter((p) => {
        if (statusFilter === 'SOLD') return p.status === 'SOLD' || p.status === 'RETAINED';
        if (statusFilter === 'UNSOLD') return p.status === 'UNSOLD';
        if (statusFilter === 'UPCOMING') return p.status === 'UPCOMING' || !p.status;
        return true;
      });
    }

    // Origin Filter
    if (originFilter !== 'ALL') {
      list = list.filter((p) => {
        const isOverseas = p.isOverseas || (p.country && p.country.toLowerCase() !== 'india');
        return originFilter === 'OVERSEAS' ? isOverseas : !isOverseas;
      });
    }

    return list;
  }, [combinedPlayerPool, scopeFilter, searchTerm, roleFilter, statusFilter, originFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0E1A] border-2 border-cyan-500/50 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-tech font-extrabold uppercase">
                IPL PLAYERS DATABASE (SETS 1-35 + FRANCHISE SQUADS)
              </span>
              <span className="text-[10px] font-tech text-slate-400">
                Found {filteredPlayers.length} of {combinedPlayerPool.length} players
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-display uppercase tracking-wider text-white mt-1 flex items-center gap-2">
              <Search className="w-5 h-5 text-cyan-400" />
              <span>Player Search & Statistics Database</span>
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input & Filter Controls */}
        <div className="py-3 space-y-3 shrink-0">
          {/* Main search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by player name (e.g. Rohit, Kohli, Bumrah, Starc), role, or team..."
              autoFocus
              className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-slate-950 border border-slate-700 text-sm font-tech text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-tech">
            {/* Scope (All vs Auction vs Squads) */}
            <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setScopeFilter('ALL')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  scopeFilter === 'ALL' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>All Players</span>
              </button>
              <button
                onClick={() => setScopeFilter('AUCTION')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  scopeFilter === 'AUCTION' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Auction Pool (Sets 1-35)
              </button>
              <button
                onClick={() => setScopeFilter('SQUADS')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  scopeFilter === 'SQUADS' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Franchise Squads (Rohit, Kohli...)
              </button>
            </div>
            {/* Roles */}
            <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setRoleFilter('ALL')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  roleFilter === 'ALL' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Roles
              </button>
              <button
                onClick={() => setRoleFilter('BAT')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  roleFilter === 'BAT' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Batters
              </button>
              <button
                onClick={() => setRoleFilter('BOWL')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  roleFilter === 'BOWL' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Bowlers
              </button>
              <button
                onClick={() => setRoleFilter('ALL_ROUND')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  roleFilter === 'ALL_ROUND' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All-rounders
              </button>
              <button
                onClick={() => setRoleFilter('WK')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  roleFilter === 'WK' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Keepers
              </button>
            </div>

            {/* Status */}
            <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setStatusFilter('ALL')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  statusFilter === 'ALL' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Status
              </button>
              <button
                onClick={() => setStatusFilter('SOLD')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  statusFilter === 'SOLD' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Sold
              </button>
              <button
                onClick={() => setStatusFilter('UNSOLD')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  statusFilter === 'UNSOLD' ? 'bg-rose-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Unsold
              </button>
              <button
                onClick={() => setStatusFilter('UPCOMING')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  statusFilter === 'UPCOMING' ? 'bg-blue-500 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                In Pool
              </button>
            </div>

            {/* Origin */}
            <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setOriginFilter('ALL')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  originFilter === 'ALL' ? 'bg-slate-700 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Origin
              </button>
              <button
                onClick={() => setOriginFilter('INDIA')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  originFilter === 'INDIA' ? 'bg-orange-500 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                🇮🇳 Domestic
              </button>
              <button
                onClick={() => setOriginFilter('OVERSEAS')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  originFilter === 'OVERSEAS' ? 'bg-indigo-500 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                ✈️ Overseas
              </button>
            </div>
          </div>
        </div>

        {/* Players List */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 font-tech">
          {filteredPlayers.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center text-slate-500 space-y-2">
              <Users className="w-8 h-8 text-slate-600 mb-1" />
              <p className="font-bold text-slate-400">No matching players found</p>
              <p className="text-xs text-slate-500">Try changing your search term or clear the active filters.</p>
            </div>
          ) : (
            filteredPlayers.map((player) => {
              const basePriceFormatted = formatLakhsToINR(player.basePrice || 0);
              const soldPriceFormatted = player.soldPrice ? formatLakhsToINR(player.soldPrice) : null;
              const soldTeam = player.soldTo ? IPL_TEAMS[player.soldTo as TeamId] : null;
              const isOverseas = player.isOverseas || (player.country && player.country.toLowerCase() !== 'india');

              return (
                <div
                  key={player.id}
                  className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors"
                >
                  {/* Left: Player Info & Photo */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 p-1 flex items-center justify-center shrink-0 overflow-hidden relative">
                      {player.imageUrl ? (
                        <img
                          src={player.imageUrl}
                          alt={player.name}
                          className="w-full h-full object-contain filter contrast-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-[10px] text-slate-500 font-bold bg-slate-950">
                          🏏
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-extrabold text-sm text-white">
                          {player.name}
                        </span>
                        <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 text-[10px]">
                          {player.role || player.specialism}
                        </span>
                        {isOverseas ? (
                          <span className="px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[9px]">
                            ✈️ {player.country}
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 text-[9px]">
                            🇮🇳 India
                          </span>
                        )}
                        {player.rating && (
                          <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] font-bold">
                            ★ {player.rating}
                          </span>
                        )}
                      </div>

                      {/* Stats snippet */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-slate-400 mt-1">
                        <span>Set {player.setNumber || player.setNo}: <strong className="text-slate-300">{player.setCode || 'Pool'}</strong></span>
                        {player.stats?.matches ? (
                          <>
                            <span>Mat: <strong className="text-slate-300">{player.stats.matches}</strong></span>
                            {player.stats.runs ? <span>Runs: <strong className="text-slate-300">{player.stats.runs}</strong> (SR: {player.stats.strikeRate})</span> : null}
                            {player.stats.wickets ? <span>Wkts: <strong className="text-slate-300">{player.stats.wickets}</strong> (Econ: {player.stats.economy})</span> : null}
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Right: Contract & Price Info */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800/80">
                    <div className="text-left sm:text-right">
                      <div className="text-[10px] text-slate-500 uppercase">
                        Base: {basePriceFormatted}
                      </div>
                      {player.status === 'SOLD' && soldPriceFormatted ? (
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold font-display">
                            SOLD: {soldPriceFormatted}
                          </span>
                          {soldTeam && (
                            <span
                              className="px-1.5 py-0.5 rounded text-[10px] font-bold text-white shadow"
                              style={{ backgroundColor: soldTeam.primaryColor }}
                            >
                              {soldTeam.shortName}
                            </span>
                          )}
                        </div>
                      ) : player.status === 'UNSOLD' ? (
                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold">
                          UNSOLD
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs font-bold flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>UPCOMING</span>
                        </span>
                      )}
                    </div>

                    {onSelectPlayer && (
                      <button
                        onClick={() => {
                          onSelectPlayer(player);
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer transition-colors"
                      >
                        Inspect
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-tech text-slate-400 shrink-0">
          <span>Press <kbd className="px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-slate-300">Esc</kbd> to close</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-display font-bold uppercase tracking-wider cursor-pointer transition-colors"
          >
            Close Search
          </button>
        </div>
      </div>
    </div>
  );
};
