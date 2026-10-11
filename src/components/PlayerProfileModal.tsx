import React from 'react';
import { X, Calendar, Award, Shield, Activity } from 'lucide-react';
import { Player } from '../types/auction';
import { formatLakhsToINR } from '../utils/auctionCalculations';

interface PlayerProfileModalProps {
  player: Player | null;
  onClose: () => void;
}

export const PlayerProfileModal: React.FC<PlayerProfileModalProps> = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fade-in">
      <div className="bg-slate-900 border border-amber-500/30 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="inline-flex items-center justify-center rounded-xl overflow-hidden border border-slate-700 bg-slate-950 p-1 shadow-md">
                {player.photo || player.imageUrl ? (
                  <img
                    src={(player.photo || player.imageUrl) || undefined}
                    alt={player.name}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                    className="w-auto h-auto max-w-24 max-h-24 object-contain block"
                  />
                ) : (
                  <div className="w-20 h-20 flex flex-col items-center justify-center p-2 text-center">
                    <svg className="w-8 h-8 text-slate-600 mb-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                    <span className="text-[8px] font-tech text-slate-500 uppercase font-semibold">No Photo</span>
                  </div>
                )}
              </div>
              <span
                className="absolute -bottom-1 -right-1 text-base bg-slate-900 rounded-full px-1 border border-slate-700 shadow"
                title={player.isOverseas ? `Overseas (${player.country})` : 'Indian'}
              >
                {player.isOverseas ? '🌍' : '🇮🇳'}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[10px] font-tech font-bold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {player.currentSet ? `${player.setName || 'Set'} (${player.setCode || player.currentSet})` : 'Franchise Squad'}
                </span>
                {player.isCapped && !player.isUncapped && player.cappedStatus !== 'UNCAPPED' ? (
                  <span className="text-[10px] font-tech font-bold uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
                    Capped
                  </span>
                ) : (
                  <span className="text-[10px] font-tech font-bold uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40" title={player.cappedReason || undefined}>
                    {player.lastInternationalMatchDate ? 'Uncapped (5-Yr Rule)' : 'Uncapped'}
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold font-display tracking-wider text-slate-100">
                {player.name}
              </h2>
              <p className="text-xs font-tech text-slate-400 mt-0.5">
                {player.role} • {player.country} • Franchise: <strong className="text-amber-400">{player.currentTeam}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Vitals Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-tech">
            {/* Age & Date of Birth */}
            <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 block text-[10px] flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-400" /> VERIFIED AGE
              </span>
              <span className="font-bold text-slate-100 text-sm mt-0.5 block">
                {player.age !== null && player.age !== undefined ? `${player.age} Years` : <span className="text-slate-500 font-normal">Age unavailable</span>}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                DOB: {player.dateOfBirth || 'Not verified'}
              </span>
            </div>

            {/* Base / Reserve Price */}
            <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 block text-[10px] flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" /> RESERVE PRICE
              </span>
              <span className="font-bold text-amber-400 text-sm mt-0.5 block">
                {formatLakhsToINR(player.basePrice)}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {player.basePrice >= 100 ? `₹${(player.basePrice / 100).toFixed(2)} Cr` : `₹${player.basePrice} L`}
              </span>
            </div>

            {/* Role & Style */}
            <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 block text-[10px] flex items-center gap-1">
                <Shield className="w-3 h-3 text-amber-400" /> SPECIALISM
              </span>
              <span className="font-bold text-slate-100 text-sm mt-0.5 block truncate">
                {player.specialism || player.role}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5 truncate">
                {player.batStyle || 'Right-hand bat'}
              </span>
            </div>

            {/* Form Rating */}
            <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 block text-[10px] flex items-center gap-1">
                <Activity className="w-3 h-3 text-emerald-400" /> FORM RATING
              </span>
              <span className="font-bold text-emerald-400 text-sm mt-0.5 block">
                {player.hiddenFormRating || 85} / 100
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Tier: {player.hiddenFormRating && player.hiddenFormRating >= 88 ? 'Elite' : 'Prime'}
              </span>
            </div>
          </div>

          {/* IPL Career Statistics */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-300">
              IPL Career Statistics
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 font-tech text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">MATCHES</span>
                <span className="font-bold text-slate-100 text-sm">{player.careerMatches ?? player.matches ?? player.stats?.matches ?? 0}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">RUNS</span>
                <span className="font-bold text-amber-400 text-sm">{(player.totalRuns ?? player.runs ?? player.stats?.runs ?? 0).toLocaleString()}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">WICKETS</span>
                <span className="font-bold text-emerald-400 text-sm">{player.totalWickets ?? player.wickets ?? player.stats?.wickets ?? 0}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">STRIKE RATE</span>
                <span className="font-bold text-slate-100 text-sm">{player.stats?.strikeRate || 135.0}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">ECONOMY</span>
                <span className="font-bold text-slate-100 text-sm">{player.stats?.economy || 8.2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-tech text-xs uppercase font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
