import type { Player, TeamId } from '../types/auction.ts';
import official350Data from './official350Players.json' with { type: 'json' };

export interface AuctionSetMetadata {
  setNumber: number;
  setCode: string;
  setName: string;
  category: 'BATTER' | 'ALL_ROUNDER' | 'WICKET_KEEPER' | 'FAST_BOWLER' | 'SPINNER';
  cappedStatus: 'CAPPED' | 'UNCAPPED';
  playerCount: number;
  verifiedImageCount: number;
  playerIds: string[];
  playerNames: string[];
}

export interface GameSetQueue {
  gameId: string;
  setNumber: number;
  setCode: string;
  playerIds: string[];
  randomizedPlayerIds: string[];
  currentPlayerIndex: number;
  queueGenerated: boolean;
}

// Canonical Definition of all 50 Sets in Official IPL Sequence
export const OFFICIAL_SETS_CONFIG: Array<{
  setNumber: number;
  setCode: string;
  setName: string;
  category: 'BATTER' | 'ALL_ROUNDER' | 'WICKET_KEEPER' | 'FAST_BOWLER' | 'SPINNER';
  cappedStatus: 'CAPPED' | 'UNCAPPED';
}> = [
  // Round 1
  { setNumber: 1, setCode: 'BA1', setName: 'Capped Batters 1', category: 'BATTER', cappedStatus: 'CAPPED' },
  { setNumber: 2, setCode: 'AL1', setName: 'Capped All-rounders 1', category: 'ALL_ROUNDER', cappedStatus: 'CAPPED' },
  { setNumber: 3, setCode: 'WK1', setName: 'Capped Wicketkeepers 1', category: 'WICKET_KEEPER', cappedStatus: 'CAPPED' },
  { setNumber: 4, setCode: 'FA1', setName: 'Capped Fast Bowlers 1', category: 'FAST_BOWLER', cappedStatus: 'CAPPED' },
  { setNumber: 5, setCode: 'SP1', setName: 'Capped Spinners 1', category: 'SPINNER', cappedStatus: 'CAPPED' },

  // Round 2
  { setNumber: 6, setCode: 'UBA1', setName: 'Uncapped Batters 1', category: 'BATTER', cappedStatus: 'UNCAPPED' },
  { setNumber: 7, setCode: 'UAL1', setName: 'Uncapped All-rounders 1', category: 'ALL_ROUNDER', cappedStatus: 'UNCAPPED' },
  { setNumber: 8, setCode: 'UWK1', setName: 'Uncapped Wicketkeepers 1', category: 'WICKET_KEEPER', cappedStatus: 'UNCAPPED' },
  { setNumber: 9, setCode: 'UFA1', setName: 'Uncapped Fast Bowlers 1', category: 'FAST_BOWLER', cappedStatus: 'UNCAPPED' },
  { setNumber: 10, setCode: 'USP1', setName: 'Uncapped Spinners 1', category: 'SPINNER', cappedStatus: 'UNCAPPED' },

  // Round 3
  { setNumber: 11, setCode: 'BA2', setName: 'Capped Batters 2', category: 'BATTER', cappedStatus: 'CAPPED' },
  { setNumber: 12, setCode: 'AL2', setName: 'Capped All-rounders 2', category: 'ALL_ROUNDER', cappedStatus: 'CAPPED' },
  { setNumber: 13, setCode: 'WK2', setName: 'Capped Wicketkeepers 2', category: 'WICKET_KEEPER', cappedStatus: 'CAPPED' },
  { setNumber: 14, setCode: 'FA2', setName: 'Capped Fast Bowlers 2', category: 'FAST_BOWLER', cappedStatus: 'CAPPED' },
  { setNumber: 15, setCode: 'SP2', setName: 'Capped Spinners 2', category: 'SPINNER', cappedStatus: 'CAPPED' },

  // Round 4
  { setNumber: 16, setCode: 'UBA2', setName: 'Uncapped Batters 2', category: 'BATTER', cappedStatus: 'UNCAPPED' },
  { setNumber: 17, setCode: 'UAL2', setName: 'Uncapped All-rounders 2', category: 'ALL_ROUNDER', cappedStatus: 'UNCAPPED' },
  { setNumber: 18, setCode: 'UWK2', setName: 'Uncapped Wicketkeepers 2', category: 'WICKET_KEEPER', cappedStatus: 'UNCAPPED' },
  { setNumber: 19, setCode: 'UFA2', setName: 'Uncapped Fast Bowlers 2', category: 'FAST_BOWLER', cappedStatus: 'UNCAPPED' },
  { setNumber: 20, setCode: 'USP2', setName: 'Uncapped Spinners 2', category: 'SPINNER', cappedStatus: 'UNCAPPED' },

  // Round 5
  { setNumber: 21, setCode: 'BA3', setName: 'Capped Batters 3', category: 'BATTER', cappedStatus: 'CAPPED' },
  { setNumber: 22, setCode: 'AL3', setName: 'Capped All-rounders 3', category: 'ALL_ROUNDER', cappedStatus: 'CAPPED' },
  { setNumber: 23, setCode: 'WK3', setName: 'Capped Wicketkeepers 3', category: 'WICKET_KEEPER', cappedStatus: 'CAPPED' },
  { setNumber: 24, setCode: 'FA3', setName: 'Capped Fast Bowlers 3', category: 'FAST_BOWLER', cappedStatus: 'CAPPED' },
  { setNumber: 25, setCode: 'UBA3', setName: 'Uncapped Batters 3', category: 'BATTER', cappedStatus: 'UNCAPPED' },

  // Round 6
  { setNumber: 26, setCode: 'UAL3', setName: 'Uncapped All-rounders 3', category: 'ALL_ROUNDER', cappedStatus: 'UNCAPPED' },
  { setNumber: 27, setCode: 'UWK3', setName: 'Uncapped Wicketkeepers 3', category: 'WICKET_KEEPER', cappedStatus: 'UNCAPPED' },
  { setNumber: 28, setCode: 'UFA3', setName: 'Uncapped Fast Bowlers 3', category: 'FAST_BOWLER', cappedStatus: 'UNCAPPED' },
  { setNumber: 29, setCode: 'USP3', setName: 'Uncapped Spinners 3', category: 'SPINNER', cappedStatus: 'UNCAPPED' },
  { setNumber: 30, setCode: 'BA4', setName: 'Capped Batters 4', category: 'BATTER', cappedStatus: 'CAPPED' },

  // Round 7
  { setNumber: 31, setCode: 'AL4', setName: 'Capped All-rounders 4', category: 'ALL_ROUNDER', cappedStatus: 'CAPPED' },
  { setNumber: 32, setCode: 'FA4', setName: 'Capped Fast Bowlers 4', category: 'FAST_BOWLER', cappedStatus: 'CAPPED' },
  { setNumber: 33, setCode: 'UBA4', setName: 'Uncapped Batters 4', category: 'BATTER', cappedStatus: 'UNCAPPED' },
  { setNumber: 34, setCode: 'UAL4', setName: 'Uncapped All-rounders 4', category: 'ALL_ROUNDER', cappedStatus: 'UNCAPPED' },
  { setNumber: 35, setCode: 'UWK4', setName: 'Uncapped Wicketkeepers 4', category: 'WICKET_KEEPER', cappedStatus: 'UNCAPPED' },

  // Round 8
  { setNumber: 36, setCode: 'UFA4', setName: 'Uncapped Fast Bowlers 4', category: 'FAST_BOWLER', cappedStatus: 'UNCAPPED' },
  { setNumber: 37, setCode: 'USP4', setName: 'Uncapped Spinners 4', category: 'SPINNER', cappedStatus: 'UNCAPPED' },
  { setNumber: 38, setCode: 'BA5', setName: 'Capped Batters 5', category: 'BATTER', cappedStatus: 'CAPPED' },
  { setNumber: 39, setCode: 'AL5', setName: 'Capped All-rounders 5', category: 'ALL_ROUNDER', cappedStatus: 'CAPPED' },
  { setNumber: 40, setCode: 'FA5', setName: 'Capped Fast Bowlers 5', category: 'FAST_BOWLER', cappedStatus: 'CAPPED' },

  // Round 9
  { setNumber: 41, setCode: 'UBA5', setName: 'Uncapped Batters 5', category: 'BATTER', cappedStatus: 'UNCAPPED' },
  { setNumber: 42, setCode: 'UAL5', setName: 'Uncapped All-rounders 5', category: 'ALL_ROUNDER', cappedStatus: 'UNCAPPED' },
  { setNumber: 43, setCode: 'UFA5', setName: 'Uncapped Fast Bowlers 5', category: 'FAST_BOWLER', cappedStatus: 'UNCAPPED' },
  { setNumber: 44, setCode: 'BA6', setName: 'Capped Batters 6', category: 'BATTER', cappedStatus: 'CAPPED' },
  { setNumber: 45, setCode: 'FA6', setName: 'Capped Fast Bowlers 6', category: 'FAST_BOWLER', cappedStatus: 'CAPPED' },

  // Round 10
  { setNumber: 46, setCode: 'UBA6', setName: 'Uncapped Batters 6', category: 'BATTER', cappedStatus: 'UNCAPPED' },
  { setNumber: 47, setCode: 'UFA6', setName: 'Uncapped Fast Bowlers 6', category: 'FAST_BOWLER', cappedStatus: 'UNCAPPED' },
  { setNumber: 48, setCode: 'FA7', setName: 'Capped Fast Bowlers 7', category: 'FAST_BOWLER', cappedStatus: 'CAPPED' },
  { setNumber: 49, setCode: 'UBA7', setName: 'Uncapped Batters 7', category: 'BATTER', cappedStatus: 'UNCAPPED' },
  { setNumber: 50, setCode: 'FA8', setName: 'Capped Fast Bowlers 8', category: 'FAST_BOWLER', cappedStatus: 'CAPPED' },
];

export const OFFICIAL_42_SETS_CONFIG = OFFICIAL_SETS_CONFIG;
export const OFFICIAL_AUCTION_SETS_CONFIG = OFFICIAL_SETS_CONFIG;
export const TOTAL_OFFICIAL_SETS = OFFICIAL_SETS_CONFIG.length;

/**
 * Returns structured metadata for all sets computed from the authoritative player list.
 */
export function getStructuredAuctionSets(playerList: Player[] = official350Data as any[]): AuctionSetMetadata[] {
  return OFFICIAL_SETS_CONFIG.map((config) => {
    const setPlayers = playerList.filter(
      (p) => (p.setNumber === config.setNumber || p.setNo === config.setNumber)
    );

    const verifiedCount = setPlayers.filter(
      (p) => p.imageVerified && p.imageUrl && p.imageStatus === 'VERIFIED'
    ).length;

    return {
      setNumber: config.setNumber,
      setCode: config.setCode,
      setName: config.setName,
      category: config.category,
      cappedStatus: config.cappedStatus,
      playerCount: setPlayers.length,
      verifiedImageCount: verifiedCount,
      playerIds: setPlayers.map((p) => p.playerId || p.id),
      playerNames: setPlayers.map((p) => p.name),
    };
  });
}

/**
 * Returns players grouped by set in canonical set order 1 to 35.
 */
export function getPlayersGroupedBySet(playerList: Player[]): Array<{
  setInfo: (typeof OFFICIAL_SETS_CONFIG)[0];
  players: Player[];
}> {
  return OFFICIAL_SETS_CONFIG.map((cfg) => {
    const playersInSet = playerList.filter(
      (p) => (p.setNumber === cfg.setNumber || p.setNo === cfg.setNumber)
    );
    return {
      setInfo: cfg,
      players: playersInSet,
    };
  }).filter((group) => group.players.length > 0);
}

/**
 * Server-Authoritative Set-Wise Randomizer:
 * 1. Preserves official set sequence from Set 1 through Set 35.
 * 2. Shuffles only the eligible players within each set (Fisher-Yates).
 * 3. Never mixes players from different sets.
 * 4. Never changes a player's official set assignment.
 * 5. Automatically skips empty sets.
 */
export function buildAuthoritativeRandomizedQueue(
  eligiblePlayers: Player[],
  gameId: string
): {
  queue: Player[];
  setQueues: GameSetQueue[];
} {
  const setQueues: GameSetQueue[] = [];
  const queue: Player[] = [];
  let overallIndex = 1;

  for (const cfg of OFFICIAL_SETS_CONFIG) {
    const playersInThisSet = eligiblePlayers.filter(
      (p) => (p.setNumber === cfg.setNumber || p.setNo === cfg.setNumber)
    );

    if (playersInThisSet.length === 0) continue; // Skip empty set

    // Fisher-Yates shuffle within this set only
    const shuffled = [...playersInThisSet];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const setQueue: GameSetQueue = {
      gameId,
      setNumber: cfg.setNumber,
      setCode: cfg.setCode,
      playerIds: playersInThisSet.map((p) => p.id),
      randomizedPlayerIds: shuffled.map((p) => p.id),
      currentPlayerIndex: 0,
      queueGenerated: true,
    };
    setQueues.push(setQueue);

    for (let i = 0; i < shuffled.length; i++) {
      queue.push({
        ...shuffled[i],
        auctionOrder: i + 1,
        overallAuctionOrder: overallIndex++,
        status: 'UPCOMING',
      });
    }
  }

  return { queue, setQueues };
}
