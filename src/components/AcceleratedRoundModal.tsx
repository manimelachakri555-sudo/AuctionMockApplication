import React from 'react';
import { Zap, X, ArrowRight, Flame, AlertCircle } from 'lucide-react';
import { AuctionRoomState, Player } from '../types/auction';
import { formatLakhsToINR } from '../utils/auctionCalculations';

interface AcceleratedRoundModalProps {
  room: AuctionRoomState;
  onNominatePlayer: (playerId: string) => void;
  onClose: () => void;
}

export const AcceleratedRoundModal: React.FC<AcceleratedRoundModalProps> = ({
  room,
  onNominatePlayer,
  onClose,
}) => {
  const unsoldPlayers = room.players.filter((p) => p.status === 'UNSOLD');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-purple-300">
                ACCELERATED ROUND NOMINATIONS
              </h2>
              <p className="text-xs text-slate-400 font-tech">
                Fast-track unsold players back to the hammer podium for second chance bidding
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unsold Players List */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
          {(unsoldPlayers || []).length > 0 ? (
            (unsoldPlayers || []).map((player) => (
              <div
                key={player.id}
                className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-purple-500/50 flex items-center justify-between gap-3 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={player.photo}
                    alt={player.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700 shrink-0"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-100">{player.name}</h4>
                    <p className="text-[11px] font-tech text-slate-400">
                      {player.role} • {player.country} • Ex: {player.previousTeam}
                    </p>
                    <p className="text-[10px] font-tech text-amber-400 mt-0.5">
                      Base: {formatLakhsToINR(player.basePrice)} • Form Rating: {player.hiddenFormRating}/100
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onNominatePlayer(player.id);
                    onClose();
                  }}
                  className="py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-tech font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shrink-0 shadow-md shadow-purple-500/20 active:scale-95 cursor-pointer"
                >
                  <span>Nominate to Block</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 font-tech text-xs">
              <p>No unsold players available.</p>
              <p className="text-slate-600 mt-1">
                Any players that go unsold during the standard sets will appear here for nomination.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
