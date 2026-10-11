import React, { useState } from 'react';
import { Shield, Check, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { IPLTeam, TeamId, UserProfile, AuctionRoomState } from '../types/auction';
import { IPL_TEAMS } from '../data/teamsData';
import { FranchiseClaimCard } from './FranchiseClaimCard';

interface TeamSelectionModalProps {
  room: AuctionRoomState;
  user: UserProfile;
  onConfirmTeam: (teamId: TeamId) => void;
  onLeaveRoom?: () => void;
  error?: string | null;
}

export const TeamSelectionModal: React.FC<TeamSelectionModalProps> = ({
  room,
  user,
  onConfirmTeam,
  onLeaveRoom,
  error,
}) => {
  const [selectedTeam, setSelectedTeam] = useState<TeamId | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const teamList = Object.values(IPL_TEAMS);

  // Determine which teams are already claimed by another participant in this room
  const participants = room.participants || [];
  const claimedByOtherMap: Record<string, string> = {};

  for (const team of Object.values(room.teams || {})) {
    if (team.ownerUserId && team.ownerUserId !== user.id) {
      claimedByOtherMap[team.id] = team.ownerName || 'Another Manager';
    }
  }

  for (const p of participants) {
    if (p.teamId && p.uid !== user.id) {
      claimedByOtherMap[p.teamId] = p.displayName || 'Another Manager';
    }
  }

  const handleConfirm = () => {
    if (!selectedTeam) {
      setLocalError('Please select an available IPL franchise to continue.');
      return;
    }
    if (claimedByOtherMap[selectedTeam]) {
      setLocalError(`That franchise is already claimed by ${claimedByOtherMap[selectedTeam]}. Please choose another.`);
      return;
    }
    setLocalError(null);
    setSubmitting(true);
    onConfirmTeam(selectedTeam);
  };

  const selectedTeamData = selectedTeam ? IPL_TEAMS[selectedTeam] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-[#080D1C] border border-amber-500/40 rounded-3xl p-5 sm:p-8 shadow-2xl shadow-amber-500/10 my-auto">
        {/* Header */}
        <div className="text-center space-y-2 mb-6 relative">
          {onLeaveRoom && (
            <button
              onClick={onLeaveRoom}
              className="absolute left-0 top-0 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-amber-400/50 text-xs font-tech font-bold uppercase transition-all cursor-pointer shadow-sm"
              title="Leave Room"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#FFC400]" />
              <span>← Back</span>
            </button>
          )}

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-tech font-bold uppercase">
            <Shield className="w-3.5 h-3.5" /> Room Code: {room.roomCode}
          </div>
          <h1 className="font-editorial text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            SELECT YOUR IPL FRANCHISE
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
            Claim your franchise table to bid, manage purse, and retain players for this auction room session. Taken franchises cannot be selected.
          </p>
        </div>

        {/* Error Alert */}
        {(error || localError) && (
          <div className="mb-4 p-3 rounded-2xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs font-tech flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error || localError}</span>
          </div>
        )}

        {/* 10-Franchise Selection Grid (Responsive: 2 cols on mobile, 5 cols on tablet, 10 cols on large screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 max-h-[50vh] sm:max-h-none overflow-y-auto p-1.5 bg-slate-950/40 rounded-2xl border border-slate-800/80 mb-6">
          {teamList.map((t) => {
            const isTaken = !!claimedByOtherMap[t.id];
            const isSelected = selectedTeam === t.id;
            const ownerName = claimedByOtherMap[t.id];

            return (
              <FranchiseClaimCard
                key={t.id}
                team={t}
                isSelected={isSelected}
                isClaimed={isTaken}
                ownerName={ownerName}
                onSelect={() => {
                  if (!isTaken) {
                    setSelectedTeam(t.id);
                    setLocalError(null);
                  }
                }}
              />
            );
          })}
        </div>

        {/* Footer Confirmation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="text-center sm:text-left">
            {selectedTeamData ? (
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white"
                  style={{ backgroundColor: selectedTeamData.primaryColor }}
                >
                  {selectedTeamData.shortName}
                </div>
                <div>
                  <span className="text-[10px] font-tech uppercase text-slate-400 block">Selected Franchise</span>
                  <span className="text-sm font-bold text-slate-100">{selectedTeamData.name}</span>
                </div>
              </div>
            ) : (
              <span className="text-xs font-tech text-slate-500 italic">
                No team selected. Click an available franchise above.
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            disabled={!selectedTeam || submitting}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-editorial text-lg tracking-wider uppercase font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl ${
              selectedTeam && !submitting
                ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 hover:scale-105 active:scale-95 shadow-amber-500/20'
                : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
            }`}
          >
            <span>{submitting ? 'Confirming...' : 'CONFIRM TEAM & ENTER LOBBY'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
