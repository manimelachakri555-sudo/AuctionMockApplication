import type { TeamId } from '../types/auction.ts';

/**
 * EXACT USER-PROVIDED TEAM LOGOS MAPPING
 * Used for all Franchise Claim and Profile Cards
 */
export const USER_PROVIDED_TEAM_LOGOS: Record<TeamId, string> = {
  MI: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNu3n4Qox-MP58aUoPZEXAOrihAHSTEoooGag7vzbHqlFoMVVzkSSqJ0R&s=10",

  RCB: "https://thumb.wikimedia.org/wikipedia/en/thumb/d/d4/Royal_Challengers_Bengaluru_Logo.svg/960px-Royal_Challengers_Bengaluru_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",

  KKR: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiremlLyN_PmoppbOq1d-cLqJfoiJiAvSzAHYmyJN1GzpUa0F0NHw1Bg&s=10",

  RR: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19mYdJ_9C4JQaAWsSgP0hU00oFKTRdpm0bmLz0Ws7KQ&s=10",

  LSG: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3Lbz-B9khowZoT1oovEPBqqoTVwzHk6-CBOJV1F-MQ&s=10",

  GT: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1-_X8B58GXhZxesd8UtiWnYdPTELj9o4HyNMqCYT3GvHy6kOPuA1kZI&s=10",

  PBKS: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjP3Dwx6HqABHaeT1JzYsGyRXdmgrjo9Cf77t8waMNCw&s=10",

  SRH: "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",

  DC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtes1reHeKFeBpSiQullBDmAFBOcvoOZ1P5wo-8FyoQ0RrWYIGOAI2Ars&s=10",

  CSK: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/500px-Chennai_Super_Kings_Logo.svg.png"
};

/**
 * Validation Audit Metadata
 * Evaluates whether supplied links contain standalone logos or promotional graphics/schedules
 */
export interface TeamLogoAudit {
  teamId: TeamId;
  isProperLogo: boolean;
  isHotlinkBlockedOrFragile?: boolean;
  flagReason?: string;
}

export const TEAM_LOGO_AUDIT_REPORT: Record<TeamId, TeamLogoAudit> = {
  MI: {
    teamId: 'MI',
    isProperLogo: true,
  },
  RCB: {
    teamId: 'RCB',
    isProperLogo: true,
  },
  KKR: {
    teamId: 'KKR',
    isProperLogo: true,
  },
  RR: {
    teamId: 'RR',
    isProperLogo: true,
    isHotlinkBlockedOrFragile: true,
    flagReason: 'Seeklogo host returns 403 Forbidden (cross-origin hotlink block)',
  },
  LSG: {
    teamId: 'LSG',
    isProperLogo: false,
    isHotlinkBlockedOrFragile: true,
    flagReason: 'Article banner crop (625x300 NDTV image) — needs standalone emblem',
  },
  GT: {
    teamId: 'GT',
    isProperLogo: true,
  },
  PBKS: {
    teamId: 'PBKS',
    isProperLogo: false,
    isHotlinkBlockedOrFragile: true,
    flagReason: 'Social share website banner (default-social-share.jpeg) — needs standalone crest',
  },
  SRH: {
    teamId: 'SRH',
    isProperLogo: true,
  },
  DC: {
    teamId: 'DC',
    isProperLogo: false,
    flagReason: 'Tournament schedule promotional graphic (dc-schedule.jpg) — needs standalone crest',
  },
  CSK: {
    teamId: 'CSK',
    isProperLogo: true,
  },
};
