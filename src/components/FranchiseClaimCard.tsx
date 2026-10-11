import React from 'react';
import { Check } from 'lucide-react';
import { IPLTeam } from '../types/auction';
import { TeamLogo } from './TeamLogo';

interface FranchiseClaimCardProps {
  team: IPLTeam;
  isSelected: boolean;
  onSelect: () => void;
  isClaimed?: boolean;
  ownerName?: string;
  isMine?: boolean;
}

export const FranchiseClaimCard: React.FC<FranchiseClaimCardProps> = ({
  team,
  isSelected,
  onSelect,
  isClaimed = false,
  ownerName,
  isMine = false,
}) => {
  const active = isSelected || isMine;
  const isTaken = isClaimed && !isMine;

  return (
    <button
      type="button"
      onClick={isTaken ? undefined : onSelect}
      disabled={isTaken}
      title={isTaken ? `${team.name} is managed by ${ownerName || 'another player'}` : `${team.name} (${team.shortName})`}
      className={`p-2.5 rounded-xl border text-center transition-all duration-200 relative flex flex-col items-center justify-between group ${
        active
          ? 'border-[#FFC400] bg-slate-900/90 shadow-[0_0_15px_rgba(255,196,0,0.2)] cursor-pointer'
          : isTaken
          ? 'border-slate-800/80 bg-slate-950/40 text-slate-500 opacity-75 cursor-not-allowed'
          : 'border-slate-800/80 bg-[#080D1C]/90 hover:bg-slate-900 hover:border-slate-700 text-slate-400 cursor-pointer'
      }`}
    >
      {/* Checkmark in top-right when selected */}
      {active && (
        <div className="absolute top-1.5 right-1.5 z-20 w-4 h-4 rounded-full bg-[#FFC400] text-slate-950 flex items-center justify-center shadow-md animate-in zoom-in-50 duration-200">
          <Check className="w-2.5 h-2.5 stroke-[3]" />
        </div>
      )}

      {/* Natural-Fit Transparent Logo Wrapper — No white background */}
      <div className="w-full flex items-center justify-center py-1 mb-1 min-h-[52px] max-h-[64px] bg-transparent">
        <TeamLogo
          teamId={team.id}
          alt={`${team.name} Logo`}
          maxHeight="max-h-[46px]"
          maxWidth="max-w-[76px]"
          className={active ? 'scale-105' : 'group-hover:scale-105 transition-transform duration-200'}
        />
      </div>

      {/* Team Short Name */}
      <p className={`text-xs font-bold font-display uppercase tracking-wider truncate w-full text-center ${active ? 'text-[#FFC400]' : isTaken ? 'text-slate-400' : 'text-slate-100'}`}>
        {team.shortName}
      </p>

      {/* Full Team Name */}
      <p className="text-[9px] font-tech text-slate-400 truncate w-full text-center mt-0.5 leading-tight">
        {team.name}
      </p>

      {/* Claimed / Taken status */}
      {isTaken ? (
        <div className="mt-1 w-full">
          <span className="text-[8px] font-tech font-bold text-amber-400/90 block truncate">
            {team.shortName} — Taken
          </span>
          <span className="text-[8px] font-tech text-slate-400 block truncate">
            {ownerName ? ownerName.split(' ')[0] : 'Occupied'}
          </span>
        </div>
      ) : active ? (
        <span className="text-[8px] font-tech font-bold text-emerald-400 mt-1 block truncate">
          Your Team ✓
        </span>
      ) : (
        <span className="text-[8px] font-tech text-slate-500 mt-1 block truncate">
          Available
        </span>
      )}
    </button>
  );
};
