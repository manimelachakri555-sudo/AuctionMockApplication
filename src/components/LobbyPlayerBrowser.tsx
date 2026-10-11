import React, { useState, useMemo } from 'react';
import {
  Search,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Player } from '../types/auction';
import { OFFICIAL_42_SETS_CONFIG, getPlayersGroupedBySet } from '../data/auctionSetsData';
import { formatLakhsToINR } from '../utils/auctionCalculations';
import { getCountryFlag } from '../utils/countryFlags';

interface LobbyPlayerBrowserProps {
  players: Player[];
}

export const LobbyPlayerBrowser: React.FC<LobbyPlayerBrowserProps> = ({
  players,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('ALL');
  const [selectedSetFilter, setSelectedSetFilter] = useState<string>('ALL');
  const [collapsedSets, setCollapsedSets] = useState<Record<number, boolean>>({});

  // Group players by canonical sequence of sets
  const groupedSets = useMemo(() => {
    return getPlayersGroupedBySet(players);
  }, [players]);

  // Filter players based on search and filter selections
  const filteredSets = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return groupedSets.map(({ setInfo, players: setPlayers }) => {
      if (
        selectedSetFilter !== 'ALL' &&
        String(setInfo.setNumber) !== selectedSetFilter &&
        setInfo.setCode !== selectedSetFilter
      ) {
        return { setInfo, players: [] };
      }

      const matching = setPlayers.filter((p) => {
        if (q && !p.name.toLowerCase().includes(q) && !(p.fullName || '').toLowerCase().includes(q)) {
          return false;
        }

        if (selectedRole !== 'ALL') {
          const spec = (p.specialism || p.role || '').toUpperCase();
          if (selectedRole === 'BATTER' && !spec.includes('BATTER') && p.role !== 'BATTER') return false;
          if (selectedRole === 'BOWLER' && !spec.includes('BOWL') && p.role !== 'FAST_BOWLER' && p.role !== 'SPINNER') return false;
          if (selectedRole === 'ALL_ROUNDER' && !spec.includes('ALL') && p.role !== 'ALL_ROUNDER') return false;
          if (selectedRole === 'WICKET_KEEPER' && !spec.includes('WICKET') && p.role !== 'WICKET_KEEPER') return false;
        }

        return true;
      });

      return { setInfo, players: matching };
    }).filter((g) => g.players.length > 0 || (searchQuery === '' && selectedRole === 'ALL' && selectedSetFilter === 'ALL'));
  }, [groupedSets, searchQuery, selectedRole, selectedSetFilter]);

  const toggleSetCollapse = (setNumber: number) => {
    setCollapsedSets((prev) => ({
      ...prev,
      [setNumber]: !prev[setNumber],
    }));
  };

  const expandAll = () => setCollapsedSets({});
  const collapseAll = () => {
    const allCollapsed: Record<number, boolean> = {};
    groupedSets.forEach((g) => {
      allCollapsed[g.setInfo.setNumber] = true;
    });
    setCollapsedSets(allCollapsed);
  };

  return (
    <div className="space-y-8">
      {/* 1. Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div>
          <h3 className="font-editorial text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            AUCTION PLAYER POOL
          </h3>
          <p className="font-tech text-xs text-slate-400 mt-1 uppercase tracking-widest">
            {players.length} PLAYERS • {groupedSets.length} SETS
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search player..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 bg-[#080D1C] border border-slate-800 rounded-lg text-xs font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC400]"
            />
          </div>

          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="px-2.5 py-1.5 bg-[#080D1C] border border-slate-800 rounded-lg text-xs font-sans text-slate-300 focus:outline-none focus:border-[#FFC400]"
          >
            <option value="ALL">All Roles</option>
            <option value="BATTER">Batters</option>
            <option value="ALL_ROUNDER">All-rounders</option>
            <option value="WICKET_KEEPER">Wicketkeepers</option>
            <option value="BOWLER">Bowlers</option>
          </select>

          <select
            value={selectedSetFilter}
            onChange={(e) => setSelectedSetFilter(e.target.value)}
            className="px-2.5 py-1.5 bg-[#080D1C] border border-slate-800 rounded-lg text-xs font-sans text-slate-300 focus:outline-none focus:border-[#FFC400]"
          >
            <option value="ALL">All {groupedSets.length} Sets</option>
            {groupedSets.map(({ setInfo }) => (
              <option key={setInfo.setNumber} value={String(setInfo.setNumber)}>
                Set {setInfo.setNumber < 10 ? `0${setInfo.setNumber}` : setInfo.setNumber} — {setInfo.setCode}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-1.5 text-xs font-tech">
            <button
              onClick={expandAll}
              className="px-2 py-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Expand
            </button>
            <span className="text-slate-700">/</span>
            <button
              onClick={collapseAll}
              className="px-2 py-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Collapse
            </button>
          </div>
        </div>
      </div>

      {/* 2. Sets in Strict Numerical Sequence (01 BA1 to 42 UAL10) */}
      <div className="space-y-8">
        {filteredSets.map(({ setInfo, players: setPlayers }) => {
          const isCollapsed = collapsedSets[setInfo.setNumber];
          const formattedNumber = setInfo.setNumber < 10 ? `0${setInfo.setNumber}` : `${setInfo.setNumber}`;

          return (
            <div key={setInfo.setNumber} className="space-y-4">
              {/* Set Header */}
              <div
                onClick={() => toggleSetCollapse(setInfo.setNumber)}
                className="flex items-center justify-between cursor-pointer group select-none pt-2"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-editorial text-4xl sm:text-5xl font-black text-[#FFC400] leading-none">
                    {formattedNumber}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                      {setInfo.setCode}
                    </span>
                    <span className="text-xs font-tech text-slate-400 uppercase tracking-widest hidden sm:inline">
                      — {setInfo.setName}
                    </span>
                    <span className="text-[10px] font-tech text-slate-500 uppercase">
                      ({setPlayers.length} players)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-500 group-hover:text-slate-300 transition-colors">
                  {isCollapsed ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                </div>
              </div>

              {/* Thin Accent Line */}
              <div className="h-[1px] w-full bg-gradient-to-r from-[#FFC400]/60 via-slate-800 to-transparent" />

              {/* Compact Player Cards Grid */}
              {!isCollapsed && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {setPlayers.map((player) => {
                    const flag = getCountryFlag(player.country || player.nationality);
                    const basePriceDisplay = formatLakhsToINR(player.basePrice);

                    return (
                      <div
                        key={player.id}
                        className="bg-[#080D1C] border border-slate-800/80 hover:border-[#FFC400]/40 rounded-xl p-3 flex flex-col justify-between transition-all group relative"
                      >
                        {/* Player Portrait Container (Adaptive Fit, No large empty box) */}
                        <div className="w-full flex items-center justify-center py-1 mb-2">
                          <div className="inline-flex items-center justify-center max-h-36 rounded-lg border border-slate-800/80 overflow-hidden bg-slate-950/60 shadow-sm">
                            {player.imageUrl ? (
                              <img
                                src={player.imageUrl}
                                alt={player.name}
                                className="w-auto h-auto max-w-full max-h-32 object-contain block group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            ) : (
                              <div className="w-24 h-28 flex flex-col items-center justify-center text-slate-600 bg-slate-900/40 p-2 text-center">
                                <svg className="w-8 h-8 text-slate-700 mb-1" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                                <span className="text-[9px] font-tech text-slate-500 uppercase tracking-wider font-semibold">No Photo</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Player Info */}
                        <div className="space-y-1">
                          <h4 className="font-editorial text-base sm:text-lg font-bold text-white uppercase tracking-wide truncate group-hover:text-[#FFC400] transition-colors leading-tight">
                            {player.name}
                          </h4>

                          <div className="flex items-center justify-between gap-1.5 text-[10px] font-tech text-slate-400">
                            <div className="flex items-center gap-1.5 truncate">
                              <span>{flag}</span>
                              <span className="truncate">{player.country || 'India'}</span>
                              {player.age && (
                                <>
                                  <span>•</span>
                                  <span>{player.age}y</span>
                                </>
                              )}
                            </div>
                            <span className={`px-1.5 py-0.2 rounded text-[9px] font-tech font-bold uppercase shrink-0 border ${
                              player.cappedStatus === 'UNCAPPED' || player.isCapped === false || player.isUncapped === true
                                ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                                : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                            }`} title={player.cappedReason || undefined}>
                              {player.cappedStatus === 'UNCAPPED' || player.isCapped === false || player.isUncapped === true
                                ? player.lastInternationalMatchDate
                                  ? 'UNCAPPED (5-YR)'
                                  : 'UNCAPPED'
                                : 'CAPPED'}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-tech pt-1 border-t border-slate-800/60">
                            <span className="text-slate-400 uppercase font-semibold">
                              {player.specialism || player.role}
                            </span>
                            <span className="font-bold text-[#FFC400]">
                              {basePriceDisplay}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
