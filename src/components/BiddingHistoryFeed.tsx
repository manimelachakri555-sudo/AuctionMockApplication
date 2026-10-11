import React from 'react';
import { History, TrendingUp, Gavel, Award, ShieldAlert } from 'lucide-react';
import { BidEntry, TeamId } from '../types/auction';
import { IPL_TEAMS } from '../data/teamsData';
import { formatLakhsToINR } from '../utils/auctionCalculations';

interface BiddingHistoryFeedProps {
  history: BidEntry[];
}

export const BiddingHistoryFeed: React.FC<BiddingHistoryFeedProps> = React.memo(({ history }) => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-5 flex flex-col h-[380px]">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-display font-bold tracking-wider text-slate-200 uppercase">
            LIVE BIDDING LOG & LOGBOOK
          </h3>
        </div>
        <span className="text-[10px] font-tech text-slate-500 uppercase">
          {history?.length || 0} Events
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {(history || []).length > 0 ? (
          (history || []).map((entry) => {
            const team = IPL_TEAMS[entry.teamId as TeamId];
            const isSold = entry.type === 'SOLD';
            const isUnsold = entry.type === 'UNSOLD';
            const isRTM = entry.type.startsWith('RTM');

            return (
              <div
                key={entry.id}
                className={`p-2.5 rounded-2xl border flex items-center justify-between gap-3 text-xs transition-all ${
                  isSold
                    ? 'bg-emerald-500/15 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                    : isUnsold
                    ? 'bg-rose-500/10 border-rose-500/30'
                    : isRTM
                    ? 'bg-purple-500/15 border-purple-500/40 text-purple-200'
                    : 'bg-slate-950/70 border-slate-800/80 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  {team ? (
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center font-tech font-bold text-white text-[10px] shrink-0 shadow"
                      style={{ backgroundColor: team.primaryColor }}
                    >
                      {team.shortName}
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 shrink-0">
                      IPL
                    </div>
                  )}

                  <div className="overflow-hidden">
                    <p className="font-bold text-slate-100 truncate text-[11px] leading-tight">
                      {entry.teamName}
                    </p>
                    <p className="text-[10px] font-tech text-slate-400 truncate">
                      {entry.note ? entry.note : `Raised bid to ${formatLakhsToINR(entry.amount)}`}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  {entry.amount > 0 && (
                    <span className="font-tech font-bold text-amber-400 block text-xs">
                      {formatLakhsToINR(entry.amount)}
                    </span>
                  )}
                  <span className="text-[9px] font-tech text-slate-500 block">
                    {new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 text-xs py-8">
            <TrendingUp className="w-8 h-8 text-slate-700 mb-2" />
            <p>No bids placed yet in this round.</p>
            <p className="text-[10px] font-tech text-slate-600 mt-1">
              Franchise bids will stream here live across all connected devices.
            </p>
          </div>
        )}
      </div>
    </div>
  );
});
