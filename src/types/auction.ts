export type GameMode = 'MEGA' | 'MINI' | 'CLEAN_SLATE';

export type AuctionStage = 'LOBBY' | 'RETENTION' | 'LIVE' | 'ACCELERATED' | 'LEADERBOARD' | 'ENDED';

export type PlayerRole = 'BATTER' | 'ALL_ROUNDER' | 'WICKET_KEEPER' | 'FAST_BOWLER' | 'SPINNER';

export type PlayerStatus = 'UPCOMING' | 'CURRENT' | 'SOLD' | 'UNSOLD' | 'RETAINED' | 'SKIPPED';

export type TeamId = 'CSK' | 'MI' | 'RCB' | 'KKR' | 'RR' | 'SRH' | 'GT' | 'LSG' | 'DC' | 'PBKS';

export interface Batting2026Stats {
  season?: number;
  matches: number;
  innings: number;
  runs: number;
  average: number;
  strikeRate: number;
  highestScore?: string;
  fifties?: number;
  hundreds?: number;
  fours?: number;
  sixes?: number;
}

export interface Bowling2026Stats {
  season?: number;
  matches: number;
  innings: number;
  overs: number;
  wickets: number;
  economy: number;
  average: number;
  strikeRate: number;
  bestBowling?: string;
  fourWicketHauls?: number;
  fiveWicketHauls?: number;
}

export interface AllRounder2026Stats {
  season?: number;
  matches: number;
  batting: {
    matches: number;
    innings: number;
    runs: number;
    average: number;
    strikeRate: number;
  };
  bowling: {
    matches: number;
    innings: number;
    overs: number;
    wickets: number;
    economy: number;
    average: number;
    strikeRate: number;
  };
}

export interface WicketKeeper2026Stats extends Batting2026Stats {
  keeping?: {
    catches: number;
    stumpings: number;
  };
}

export interface RecentMatchPerformance {
  opponent: string;
  runs?: number;
  balls?: number;
  strikeRate?: number;
  wickets?: number;
  runsConceded?: number;
  overs?: number;
  economy?: number;
}

export interface RecentForm {
  season: number;
  last5Matches: RecentMatchPerformance[];
  recentRuns: number;
  recentWickets: number;
  recentStrikeRate: number | null;
  recentEconomy: number | null;
  formSummary: string;
  formSource: string;
}

export interface CareerIPLStats {
  matches: number;
  innings?: number;
  runs?: number;
  battingAverage?: number;
  strikeRate?: number;
  wickets?: number;
  bowlingAverage?: number;
  economy?: number;
  catches?: number;
  stumpings?: number;
}

export interface AuctionMetadata {
  season: number;
  setNumber: number;
  setCode: string;
  auctionOrder: number;
  reservePrice: number; // in Lakhs
  cappedStatus: 'CAPPED' | 'UNCAPPED';
  role: string;
}

export interface SourceMetadata {
  auctionSource: string;
  statsSource: string;
  formSource: string;
  imageSource: string | null;
}

export interface GamePlayerState {
  gameId: string;
  playerId: string;
  auctionEligible: boolean;
  retained: boolean;
  retainedBy: TeamId | null;
  sold: boolean;
  soldTo: TeamId | null;
  soldPrice: number | null;
  unsold: boolean;
}

export interface PlayerStats {
  matches: number;
  runs?: number;
  battingAvg?: number;
  average?: number;
  strikeRate?: number;
  wickets?: number;
  economy?: number;
  bestBowling?: string;
  catches?: number;
  fifties?: number;
  hundreds?: number;
  highestScore?: string;
  batting?: {
    matches: number;
    innings: number;
    runs: number;
    average: number;
    strikeRate: number;
  };
  bowling?: {
    matches: number;
    innings: number;
    overs: number;
    wickets: number;
    economy: number;
    average: number;
    strikeRate: number;
  };
  keeping?: {
    catches: number;
    stumpings: number;
  };
}

export interface VerifiedImageMapping {
  url: string;
  source: string;
  identityChecked: boolean;
  urlChecked: boolean;
}

export interface Player {
  id: string;
  playerId?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  name: string;
  nickname?: string;

  setNumber?: number;
  setCode?: string;
  auctionOrder?: number;
  overallAuctionOrder?: number;

  role: PlayerRole;
  specialism?: 'BATTER' | 'WICKETKEEPER-BATTER' | 'ALL-ROUNDER' | 'FAST BOWLER' | 'SPINNER' | string;
  isOverseas: boolean;
  country: string;
  countryCode: string; // 'IN', 'AU', 'ZA', 'ENG', 'WI', 'NZ', 'AFG', 'SL'
  isCapped: boolean;
  cappedStatus?: 'CAPPED' | 'UNCAPPED';
  internationalStatus?: 'CAPPED' | 'UNCAPPED' | 'NEVER_PLAYED';
  lastInternationalMatchDate?: string | null;
  isUncapped?: boolean;
  cappedReason?: string;
  previousTeam: TeamId | string;
  currentTeam?: string;
  currentOrRecentTeam?: string;
  recentIPLTeam?: string;
  teamHistory?: string[];
  hasPlayedIPL?: boolean;
  iplDebut?: number;
  iplAppearances?: number;
  setNo?: number;
  set?: string;
  officialBasePrice?: number;
  mockAuctionBasePrice?: number;
  basePrice: number; // in Lakhs (e.g. 200 = ₹2.00 Cr, 50 = ₹50 Lakh, 30 = ₹30 Lakh)
  reservePrice?: number;
  basePriceUnit?: string;
  currentSet: string; // 'M1', 'M2', 'BA1', 'AL1', 'WK1', 'FA1', 'SP1', 'UBA1', 'UAL1', 'UWK1', 'UFA1', 'USP1', 'BA2', 'AL2', 'WK2', 'FA2', 'SP2'
  setName: string;
  photo: string;
  imageUrl?: string | null;
  imageSource?: string | null;
  imageVerified?: boolean;
  imageStatus?: 'VERIFIED' | 'MISSING' | 'BROKEN' | 'IDENTITY_UNVERIFIED' | 'SOURCE_UNCLEAR';
  imageCheckedAt?: string | null;
  imageVerifiedAt?: string;
  verifiedImage?: VerifiedImageMapping;
  dataSource?: string;
  lastVerifiedAt?: string;
  nationality?: string;
  jerseyColor: string;
  previousIPLSeasonsPlayed: number; // 0 for debutants/new players, >= 1 for players with IPL season experience
  matches?: number;
  runs?: number;
  wickets?: number;
  careerMatches?: number;
  totalRuns?: number;
  totalWickets?: number;
  stats: PlayerStats;
  form?: RecentForm;
  careerStats?: CareerIPLStats;
  auction?: AuctionMetadata;
  sourceMetadata?: SourceMetadata;
  gamePlayerState?: GamePlayerState;
  createdAt?: number;
  updatedAt?: number;
  status: PlayerStatus;
  soldTo?: TeamId;
  finalWinnerTeamId?: TeamId;
  soldPrice?: number; // in Lakhs
  wasRTMUsed?: boolean;
  hiddenFormRating: number; // 60 to 99 score representing recent form
  rating?: number; // 60 to 99 player overall skill rating
  setCategory?: string;
  batStyle?: string;
  bowlStyle?: string;
  dateOfBirth?: string | null;
  age?: number | null;
  ageAsOfDate?: string;
  officialSet?: boolean;
  auctionSet?: string | null;
  auctionSetNumber?: number | null;
}

export interface IPLTeam {
  id: TeamId;
  name: string;
  shortName: string;
  city: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  logo: string;
  purse: number; // in Lakhs (e.g. 12000 for 120 Cr)
  initialPurse: number;
  rtmCardsRemaining: number;
  totalRtmsAllowed: number;
  squad: Player[];
  isActive?: boolean; // For 2-player or flexible player lobbies (unclaimed franchises marked Inactive/Disabled)
  ownerUserId?: string;
  ownerName?: string;
  ownerAvatar?: string;
  isConnected: boolean;
}

export interface BidEntry {
  id: string;
  teamId: TeamId;
  teamName: string;
  amount: number; // in Lakhs
  timestamp: number;
  type: 'BID' | 'RTM_TRIGGERED' | 'RTM_COUNTER_BID' | 'RTM_MATCHED' | 'RTM_DECLINED' | 'SOLD' | 'UNSOLD' | 'SKIPPED' | 'AUCTION_ENDED';
  note?: string;
}

export interface RTMState {
  active: boolean;
  player: Player;
  originalWinningTeamId: TeamId;
  originalBid: number; // in Lakhs
  previousTeamId: TeamId;
  step: 'AWAITING_RTM_DECISION' | 'AWAITING_COUNTER_BID' | 'AWAITING_FINAL_MATCH';
  counterBid?: number; // in Lakhs
  timestamp: number;
  remainingMs?: number;
}

export interface ChatMessage {
  id: string;
  roomId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  teamId?: TeamId;
  text: string;
  timestamp: number;
}

export interface RoomParticipant {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  teamId?: TeamId | null;
  teamShortName?: string | null;
  isHost: boolean;
  joinedAt: number;
  connectionStatus: 'connected' | 'disconnected' | 'reconnecting';
}

export interface AuctionRoomState {
  roomId: string;
  roomCode: string;
  hostUid: string;
  hostUserId: string;
  hostName: string;
  gameMode: GameMode;
  stage: AuctionStage;
  status: AuctionStage;
  participants: RoomParticipant[];
  selectedTeams: { uid: string; teamId: TeamId; teamName: string }[];
  auctionState?: {
    status: 'LOBBY' | 'LIVE' | 'ENDED';
    currentPlayer: Player | null;
    currentPlayerIndex: number;
    currentSet: string | null;
    currentBid: number;
    highestBidderUid: string | null;
    highestBidderTeamId: TeamId | null;
    timerStartedAt: number | null;
    timerDuration: number;
    rtmAvailable?: boolean;
    rtmTeamId?: TeamId | null;
    lastAction?: string;
    lastActionId?: string;
  };
  auctionOrder?: string[];
  playerPoolVisible: boolean;
  currentSetNumber?: number | null;
  currentSetCode?: string | null;
  currentSetPlayerIndex?: number;
  currentSetTotal?: number;
  players: Player[];
  currentPlayerIndex: number;
  currentPlayer: Player | null;
  currentBid: number; // in Lakhs
  leadingTeamId: TeamId | null;
  finalWinnerTeamId?: TeamId | null;
  bidHistory: BidEntry[];
  chatMessages?: ChatMessage[];
  timer: number;
  timerRunning: boolean;
  auctionPaused?: boolean;
  pendingAutoProgression?: boolean;
  timerStartedAt?: number | null;
  timerDuration?: number;
  timerEndsAt?: number | null;
  auctionStateVersion?: number;
  hammerStage: 0 | 1 | 2 | 3 | 4; // 0=none, 1=Going Once, 2=Going Twice, 3=Going Thrice, 4=SOLD/UNSOLD
  rtmState: RTMState | null;
  rtmAvailable?: boolean;
  rtmTeamId?: TeamId | null;
  teams: Record<TeamId, IPLTeam>;
  activeTeamIds: TeamId[]; // List of active human franchise tables (e.g. 2 players in head-to-head mode)
  acceleratedRoundNominatedIds: string[];
  playingXIs?: Record<TeamId, PlayingXIData>;
  miniAuctionCycle?: number;
  miniAuctionCycleId?: string;
  pastCycles?: MiniAuctionCycleRecord[];
  endedByHost?: boolean;
  endedAt?: number;
  createdAt: number;
  updatedAt: number;
}

export interface MiniAuctionCycleRecord {
  cycleNumber: number;
  cycleId: string;
  completedAt: number;
  finalSquads: Record<TeamId, Player[]>;
  teamRatings?: Record<TeamId, any>;
  retentions?: Record<TeamId, { playerIds: string[]; costLakhs: number }>;
  purchases?: {
    playerId: string;
    playerName: string;
    teamId: TeamId;
    amount: number;
    wasRTM: boolean;
  }[];
}

export interface PlayingXIData {
  gameId: string;
  teamId: TeamId;
  ownerUserId: string;
  selectedPlayerIds: string[];
  confirmed: boolean;
  confirmedAt?: number;
}

export interface TeamPlayingXIComposition {
  battersCount: number;
  allRoundersCount: number;
  bowlersCount: number;
  wicketKeepersCount: number;
  overseasCount: number;
  fastBowlersCount: number;
  spinnersCount: number;
}

export interface TeamPlayingXIAnalysis {
  teamId: TeamId;
  teamName: string;
  shortName: string;
  logo: string;
  playingXI: Player[];
  composition: TeamPlayingXIComposition;
  battingStrength: {
    score: number;
    description: string;
    keyBatters: string[];
    avgStrikeRate: number;
  };
  bowlingStrength: {
    score: number;
    description: string;
    keyBowlers: string[];
    avgEconomy: number;
  };
  allRoundBalance: {
    score: number;
    description: string;
    keyAllRounders: string[];
  };
  recentForm: {
    score: number;
    description: string;
    highImpactPlayers: string[];
  };
  squadBalance: {
    score: number;
    description: string;
  };
  overseasBalance: {
    score: number;
    count: number;
    description: string;
  };
  overallScore: number;
  overallSummary: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'AUCTIONEER' | 'TEAM_OWNER' | 'SPECTATOR' | 'HOST';
  selectedTeamId?: TeamId;
  firebaseUid?: string;
  idToken?: string;
}

export interface SquadRatingMetrics {
  teamId: TeamId;
  totalRating: number; // out of 100
  battingScore: number;
  bowlingScore: number;
  allRoundScore: number;
  balanceScore: number;
  compliancePenalty: number;
  totalSpent: number;
  squadSize: number;
  overseasCount: number;
  hasDedicatedWK: boolean;
  hasPrimarySpinner: boolean;
  fastBowlingCount: number;
  starPlayer: Player | null;
  bargainBuy: Player | null;
  analysisSummary: string;
  strengths: string[];
  weaknesses: string[];
}

export interface TeamAICriteria {
  battingPower: number; // 0-100
  bowlingDepth: number; // 0-100
  spinAttack: number; // 0-100
  allRounderBalance: number; // 0-100
  formAndSkill: number; // 0-100
}

export interface TeamAIRankingResult {
  rank: number;
  teamId: TeamId;
  teamName: string;
  overallScore: number; // 0-100
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C';
  trophyProbability: number; // % (e.g. 35)
  criteria: TeamAICriteria;
  strengths: string[];
  weaknesses: string[];
  xFactorPlayer: string;
  scoutCritique: string;
}

export interface AIRankingReport {
  timestamp: number;
  summary: string;
  rankings: TeamAIRankingResult[];
  championPickTeamId: TeamId;
}

// Runtime stubs to satisfy Node.js 22 ESM type-stripping resolution for any value imports
export const Player: any = {};
export const PlayerRole: any = {};
export const PlayerStatus: any = {};
export const TeamId: any = {};
export const GameMode: any = {};
export const AuctionStage: any = {};
export const AuctionRoomState: any = {};
export const IPLTeam: any = {};
export const UserProfile: any = {};
export const BidEntry: any = {};
export const RTMState: any = {};
export const ChatMessage: any = {};
export const TeamAIRankingResult: any = {};
export const AIRankingReport: any = {};
export const SquadRatingMetrics: any = {};
export const TeamPlayingXIComposition: any = {};
export const TeamPlayingXIAnalysis: any = {};
export const RoomParticipant: any = {};

