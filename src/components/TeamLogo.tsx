import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { TeamId } from '../types/auction';
import { USER_PROVIDED_TEAM_LOGOS } from '../data/teamLogos';
import { IPL_TEAMS } from '../data/teamsData';

interface TeamLogoProps {
  teamId: TeamId;
  alt?: string;
  className?: string;
  maxHeight?: string; // e.g. "max-h-12", "max-h-14", "max-h-[48px]"
  maxWidth?: string;  // e.g. "max-w-full", "max-w-[70px]"
}

/**
 * TeamLogo Component:
 * Strict enforcement of user specification:
 * - Transparent background (no white boxes, no borders, no colored boxes)
 * - Natural aspect ratio preserved (no squashing, stretching, or cropping)
 * - Tightly wrapped with inline-flex
 * - Visible website dark background around transparent parts
 */
export const TeamLogo: React.FC<TeamLogoProps> = React.memo(({
  teamId,
  alt,
  className = '',
  maxHeight = 'max-h-14',
  maxWidth = 'max-w-full',
}) => {
  const [hasError, setHasError] = useState(false);
  const logoUrl = USER_PROVIDED_TEAM_LOGOS[teamId] || IPL_TEAMS[teamId]?.logo;
  const team = IPL_TEAMS[teamId];

  if (!hasError && logoUrl) {
    return (
      <div
        className={`inline-flex items-center justify-center w-fit h-fit bg-transparent p-0 overflow-hidden ${className}`}
        style={{ background: 'transparent' }}
      >
        <img
          src={logoUrl}
          alt={alt || `${team?.name || teamId} Logo`}
          onError={() => setHasError(true)}
          className={`block w-auto h-auto ${maxWidth} ${maxHeight} object-contain transition-transform duration-200`}
          style={{ background: 'transparent' }}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-fit h-fit bg-transparent p-1 ${className}`}
      style={{ background: 'transparent' }}
    >
      <Shield className="w-5 h-5" style={{ color: team?.primaryColor || '#FFC400' }} />
      <span className="text-[9px] font-tech font-bold text-slate-300 uppercase mt-0.5">
        {team?.shortName || teamId}
      </span>
    </div>
  );
});
