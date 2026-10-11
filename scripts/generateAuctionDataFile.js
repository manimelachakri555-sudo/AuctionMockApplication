import fs from 'fs';
import path from 'path';

const official350 = JSON.parse(fs.readFileSync('src/data/official350Players.json', 'utf8'));

const SETS_1_TO_15_META = [
  { setNumber: 1, setCode: 'BA1', setName: 'Capped Batters 1', role: 'BATTER', specialism: 'BATTER', cappedStatus: 'CAPPED', reservePriceRange: '₹2.00 Cr' },
  { setNumber: 2, setCode: 'AL1', setName: 'Capped All-Rounders 1', role: 'ALL_ROUNDER', specialism: 'ALL-ROUNDER', cappedStatus: 'CAPPED', reservePriceRange: '₹2.00 Cr' },
  { setNumber: 3, setCode: 'WK1', setName: 'Capped Wicketkeepers 1', role: 'WICKET_KEEPER', specialism: 'WICKETKEEPER-BATTER', cappedStatus: 'CAPPED', reservePriceRange: '₹2.00 Cr' },
  { setNumber: 4, setCode: 'FA1', setName: 'Capped Fast Bowlers 1', role: 'FAST_BOWLER', specialism: 'FAST BOWLER', cappedStatus: 'CAPPED', reservePriceRange: '₹2.00 Cr' },
  { setNumber: 5, setCode: 'SP1', setName: 'Capped Spinners 1', role: 'SPINNER', specialism: 'SPINNER', cappedStatus: 'CAPPED', reservePriceRange: '₹2.00 Cr' },
  { setNumber: 6, setCode: 'UBA1', setName: 'Uncapped Batters 1', role: 'BATTER', specialism: 'BATTER', cappedStatus: 'UNCAPPED', reservePriceRange: '₹30 - ₹50 Lakh' },
  { setNumber: 7, setCode: 'UAL1', setName: 'Uncapped All-Rounders 1', role: 'ALL_ROUNDER', specialism: 'ALL-ROUNDER', cappedStatus: 'UNCAPPED', reservePriceRange: '₹30 - ₹50 Lakh' },
  { setNumber: 8, setCode: 'UWK1', setName: 'Uncapped Wicketkeepers 1', role: 'WICKET_KEEPER', specialism: 'WICKETKEEPER-BATTER', cappedStatus: 'UNCAPPED', reservePriceRange: '₹30 - ₹50 Lakh' },
  { setNumber: 9, setCode: 'UFA1', setName: 'Uncapped Fast Bowlers 1', role: 'FAST_BOWLER', specialism: 'FAST BOWLER', cappedStatus: 'UNCAPPED', reservePriceRange: '₹30 - ₹50 Lakh' },
  { setNumber: 10, setCode: 'USP1', setName: 'Uncapped Spinners 1', role: 'SPINNER', specialism: 'SPINNER', cappedStatus: 'UNCAPPED', reservePriceRange: '₹30 - ₹50 Lakh' },
  { setNumber: 11, setCode: 'BA2', setName: 'Capped Batters 2', role: 'BATTER', specialism: 'BATTER', cappedStatus: 'CAPPED', reservePriceRange: '₹1.50 Cr' },
  { setNumber: 12, setCode: 'AL2', setName: 'Capped All-Rounders 2', role: 'ALL_ROUNDER', specialism: 'ALL-ROUNDER', cappedStatus: 'CAPPED', reservePriceRange: '₹1.50 Cr' },
  { setNumber: 13, setCode: 'WK2', setName: 'Capped Wicketkeepers 2', role: 'WICKET_KEEPER', specialism: 'WICKETKEEPER-BATTER', cappedStatus: 'CAPPED', reservePriceRange: '₹1.50 Cr' },
  { setNumber: 14, setCode: 'FA2', setName: 'Capped Fast Bowlers 2', role: 'FAST_BOWLER', specialism: 'FAST BOWLER', cappedStatus: 'CAPPED', reservePriceRange: '₹1.50 Cr' },
  { setNumber: 15, setCode: 'SP2', setName: 'Capped Spinners 2', role: 'SPINNER', specialism: 'SPINNER', cappedStatus: 'CAPPED', reservePriceRange: '₹1.50 Cr' },
];

const cleanedPlayers = official350.map((p, idx) => ({
  id: p.id,
  playerId: p.playerId || p.id,
  name: p.name,
  firstName: p.firstName || p.name.split(' ')[0],
  lastName: p.lastName || p.name.split(' ').slice(1).join(' '),
  fullName: p.fullName || p.name,
  role: p.role,
  specialism: p.specialism || p.role,
  reservePrice: p.reservePrice || p.basePrice || 200,
  basePrice: p.basePrice || p.reservePrice || 200,
  officialBasePrice: p.officialBasePrice || p.reservePrice || 200,
  setNo: p.setNo || p.setNumber || 1,
  setNumber: p.setNumber || p.setNo || 1,
  setCode: p.setCode || 'BA1',
  setName: p.setName || p.set || 'Set 1',
  set: p.set || `${p.setName || 'Set'} (${p.setCode})`,
  currentSet: p.setCode || 'BA1',
  isOverseas: !!p.isOverseas,
  country: p.country || (p.isOverseas ? 'Overseas' : 'India'),
  countryCode: p.countryCode || (p.isOverseas ? 'OS' : 'IN'),
  nationality: p.nationality || p.country || 'India',
  cappedStatus: p.cappedStatus || (p.isCapped ? 'CAPPED' : 'UNCAPPED'),
  isCapped: p.cappedStatus !== 'UNCAPPED' && p.isCapped !== false,
  previousTeam: p.previousTeam || p.currentTeam || 'CSK',
  currentTeam: p.currentTeam || p.previousTeam || 'CSK',
  previousIPLSeasonsPlayed: p.previousIPLSeasonsPlayed || (p.cappedStatus === 'CAPPED' ? 5 : 1),
  dateOfBirth: p.dateOfBirth || null,
  age: p.age ?? null,
  ageAsOfDate: p.ageAsOfDate || '2026-02-15',
  auctionOrder: idx + 1,
  overallAuctionOrder: idx + 1,
  photo: p.photo || p.imageUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(p.name)}`,
  imageUrl: p.imageUrl || null,
  imageVerified: !!p.imageVerified,
  imageStatus: p.imageStatus || (p.imageVerified ? 'VERIFIED' : 'MISSING'),
  stats: p.stats || { matches: 14, runs: 280, wickets: 4 },
  form: p.form || null,
  careerStats: p.careerStats || null,
  sourceMetadata: p.sourceMetadata || null,
  status: 'UPCOMING',
}));

const fileContent = `/**
 * Official 350-Player IPL 2026 Auction Dataset & Pool Generator
 * Authoritative official IPL 2026 auction list covering Sets 1 through 15 (and 16 to 42).
 * Includes exact roles, reserve prices, official set numbering, and buildAuctionPool function.
 */

export const SETS_1_TO_15_METADATA = ${JSON.stringify(SETS_1_TO_15_META, null, 2)};

export const auctionData = ${JSON.stringify(cleanedPlayers, null, 2)};

export const OFFICIAL_350_PLAYERS = auctionData;

/**
 * Calculates retention deductions and breakdown according to official IPL 2026 rules:
 * - Up to 6 total retentions per franchise
 * - Max 5 capped retentions, max 2 uncapped retentions
 * - Capped cost slabs:
 *   1st player: ₹18 Cr
 *   2nd player: ₹14 Cr
 *   3rd player: ₹11 Cr
 *   4th player: ₹18 Cr
 *   5th player: ₹14 Cr
 *   6th player: ₹4 Cr
 * - Uncapped retentions: ₹4 Cr each
 * - Selection order dictates slot and cost
 * - User can retain 0, 1, 2, 3, 4, 5, or 6 players (e.g. 4 players is completely valid)
 * - Overseas players can be freely retained (0, 1, 2, etc.)
 */
export function calculateRetentionCosts(retainedPlayers: any[] = []): {
  breakdown: any[];
  totalRetained: number;
  indianRetained: number;
  overseasRetained: number;
  cappedRetained: number;
  uncappedRetained: number;
  totalDeductionLakhs: number;
  totalDeductionCr: number;
  startingPurseLakhs: number;
  startingPurseCr: number;
  remainingPurseLakhs: number;
  remainingPurseCr: number;
  remainingRTMs: number;
  isValid: boolean;
  validationError: string | null;
} {
  const cappedSlabs = [1800, 1400, 1100, 1800, 1400, 400];
  let cappedCount = 0;
  let uncappedCount = 0;
  let indianCount = 0;
  let overseasCount = 0;
  let totalDeductionLakhs = 0;

  const breakdown = retainedPlayers.map((player: any, idx: number) => {
    const isOverseas = !!player.isOverseas;
    const isCapped = player.cappedStatus !== 'UNCAPPED' && player.isCapped !== false;

    if (isOverseas) {
      overseasCount++;
    } else {
      indianCount++;
    }

    let costLakhs = 0;
    if (!isCapped) {
      uncappedCount++;
      costLakhs = 400; // ₹4 Cr
    } else {
      costLakhs = cappedSlabs[cappedCount] ?? 400;
      cappedCount++;
    }

    totalDeductionLakhs += costLakhs;

    return {
      slotNumber: idx + 1,
      slotLabel: \`Retention #\${idx + 1}\`,
      player,
      id: player.id,
      name: player.name,
      isOverseas,
      isCapped,
      costLakhs,
      costCr: costLakhs / 100,
      costFormatted: \`₹\${costLakhs >= 100 ? (costLakhs / 100).toFixed(0) : costLakhs} Cr\`,
    };
  });

  const startingPurseLakhs = 12000; // ₹120 Cr
  const remainingPurseLakhs = Math.max(0, startingPurseLakhs - totalDeductionLakhs);
  const totalRetained = retainedPlayers.length;
  const remainingRTMs = Math.max(0, 6 - totalRetained);

  const isValid =
    totalRetained <= 6 &&
    cappedCount <= 5 &&
    uncappedCount <= 2;

  let validationError = null;
  if (totalRetained > 6) {
    validationError = 'Maximum 6 players can be retained!';
  } else if (cappedCount > 5) {
    validationError = 'Maximum 5 capped players can be retained!';
  } else if (uncappedCount > 2) {
    validationError = 'Maximum 2 uncapped players can be retained!';
  }

  return {
    breakdown,
    totalRetained,
    indianRetained: indianCount,
    overseasRetained: overseasCount,
    cappedRetained: cappedCount,
    uncappedRetained: uncappedCount,
    totalDeductionLakhs,
    totalDeductionCr: totalDeductionLakhs / 100,
    startingPurseLakhs,
    startingPurseCr: 120,
    remainingPurseLakhs,
    remainingPurseCr: remainingPurseLakhs / 100,
    remainingRTMs,
    isValid,
    validationError,
  };
}

/**
 * Builds the active auction pool seeded from the official 350-player dataset.
 * Filters out retained players and assigns exact set numbering and auction order.
 */
export function buildAuctionPool(options: any = {}): any[] {
  const {
    retainedPlayerIds = [],
    gameMode = 'MEGA',
    customPlayers = [],
    excludeRetained = true,
  } = options;

  let retainedList: any[] = [];
  if (Array.isArray(retainedPlayerIds)) {
    retainedList = retainedPlayerIds;
  } else if (retainedPlayerIds && typeof retainedPlayerIds === 'object') {
    retainedList = Object.values(retainedPlayerIds).flat();
  }
  const retainedSet = new Set(retainedList.map((id) => String(id).toLowerCase().trim()));

  // Clone official 350 seed data
  let pool = JSON.parse(JSON.stringify(auctionData));

  // MINI Auction mode: top 100 players from Sets 1 to 15
  if (gameMode === 'MINI') {
    pool = pool.filter((p: any) => ((p.setNo || p.setNumber || 1) <= 15)).slice(0, 100);
  }

  // Handle retained players
  if (excludeRetained) {
    pool = pool.filter((p: any) => {
      const pId = String(p.id).toLowerCase().trim();
      const pPlayerId = String(p.playerId || '').toLowerCase().trim();
      return !retainedSet.has(pId) && !retainedSet.has(pPlayerId);
    });
  } else {
    pool = pool.map((p: any) => {
      const pId = String(p.id).toLowerCase().trim();
      const pPlayerId = String(p.playerId || '').toLowerCase().trim();
      if (retainedSet.has(pId) || retainedSet.has(pPlayerId)) {
        return { ...p, status: 'RETAINED' };
      }
      return p;
    });
  }

  // Prepend or integrate custom franchise stars not already in official 350
  if (customPlayers && customPlayers.length > 0) {
    const existingNames = new Set(pool.map((p: any) => p.name.toLowerCase().trim()));
    const existingIds = new Set(pool.map((p: any) => String(p.id).toLowerCase().trim()));
    const extra: any[] = [];

    for (const cp of customPlayers) {
      const normName = cp.name.toLowerCase().trim();
      const normId = String(cp.id).toLowerCase().trim();
      if (!existingNames.has(normName) && !existingIds.has(normId) && !retainedSet.has(normId)) {
        existingNames.add(normName);
        existingIds.add(normId);
        extra.push({
          ...cp,
          setNumber: 1,
          setNo: 1,
          setCode: cp.setCode || 'M1',
          setName: cp.setName || 'Marquee Set',
          set: cp.set || 'Marquee Set (M1)',
          status: 'UPCOMING',
        });
      }
    }
    pool = [...extra, ...pool];
  }

  // Re-sequence auction orders
  return pool.map((p: any, idx: number) => ({
    ...p,
    auctionOrder: idx + 1,
    overallAuctionOrder: idx + 1,
    status: p.status || 'UPCOMING',
  }));
}

export default auctionData;
`;

// Generate pure JS version for .js files
const jsContent = fileContent
  .replace(/\(retainedPlayers: any\[\] = \[\]\): \{[\s\S]*?\} \{/g, '(retainedPlayers = []) {')
  .replace(/\(options: any = \{\}\): any\[\] \{/g, '(options = {}) {')
  .replace(/player: any, idx: number/g, 'player, idx')
  .replace(/retainedList: any\[\] =/g, 'retainedList =')
  .replace(/\(p: any\)/g, '(p)')
  .replace(/\(p: any, idx: number\)/g, '(p, idx)')
  .replace(/extra: any\[\] =/g, 'extra =');

// Ensure data directory exists
if (!fs.existsSync('data')) {
  fs.mkdirSync('data', { recursive: true });
}

fs.writeFileSync('data/auctionData.js', jsContent);
fs.writeFileSync('src/data/auctionData.js', jsContent);
fs.writeFileSync('src/data/auctionData.ts', fileContent);

console.log('Successfully generated data/auctionData.js, src/data/auctionData.js, and src/data/auctionData.ts');
