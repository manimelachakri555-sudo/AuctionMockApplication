import type { IPLTeam, Player, SquadRatingMetrics, TeamId } from '../types/auction.ts';

export const MIN_SQUAD_SIZE = 18;
export const MAX_SQUAD_SIZE = 25;
export const MAX_OVERSEAS = 8;
export const MIN_BASE_PRICE = 30; // ₹30 Lakhs for uncapped players

/**
 * Formats Lakhs into standard Indian IPL currency strings (Crores & Lakhs)
 * e.g. 12000 -> ₹120.00 Cr
 *      200   -> ₹2.00 Cr
 *      75    -> ₹75 Lakh
 */
export function formatLakhsToINR(lakhs: number): string {
  if (lakhs >= 100) {
    const cr = lakhs / 100;
    // If it's a whole number or clean decimal
    const formatted = cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2);
    return `₹${formatted} Cr`;
  }
  return `₹${Math.round(lakhs)} Lakh`;
}

/**
 * Calculates the next bid increment according to exact real IPL auction slabs:
 * - Base price up to ₹1 Crore (up to 100 Lakhs): Increments of ₹5 Lakhs
 * - ₹1 Crore to ₹2 Crore (100 to 200 Lakhs): Increments of ₹20 Lakhs
 * - ₹2 Crore to ₹5 Crore (200 to 500 Lakhs): Increments of ₹25 Lakhs
 * - Above ₹5 Crore (above 500 Lakhs): Increments of ₹50 Lakhs
 */
export function getNextBidIncrement(currentBid: number): number {
  if (currentBid < 100) {
    return 5; // +₹5 Lakhs (up to ₹1 Cr)
  } else if (currentBid < 200) {
    return 20; // +₹20 Lakhs (₹1 Cr to ₹2 Cr)
  } else if (currentBid < 500) {
    return 25; // +₹25 Lakhs (₹2 Cr to ₹5 Cr)
  } else {
    return 50; // +₹50 Lakhs (Above ₹5 Cr)
  }
}

export function getNextBidAmount(currentBid: number, basePrice: number): number {
  if (currentBid <= 0) {
    return basePrice;
  }
  const inc = getNextBidIncrement(currentBid);
  return currentBid + inc;
}

/**
 * Validates whether a team can place a bid of `bidAmount` on `player`:
 * 1. Checks available purse >= bidAmount
 * 2. Checks maximum squad limit (25)
 * 3. Checks overseas player limit (8)
 * 4. Critical Purse Logic: Team MUST have enough purse left to buy the minimum 18 players
 *    at the lowest base price (₹30 Lakhs).
 */
export function validateBid(
  team: IPLTeam,
  player: Player,
  bidAmount: number,
  isCurrentlyLeading: boolean = false
): { allowed: boolean; reason?: string } {
  if (isCurrentlyLeading) {
    return { allowed: false, reason: 'Your team already holds the highest bid!' };
  }

  // 1. Check max squad size
  if (team.squad.length >= MAX_SQUAD_SIZE) {
    return { allowed: false, reason: `Squad limit reached (${MAX_SQUAD_SIZE}/${MAX_SQUAD_SIZE} players)` };
  }

  // 2. Check overseas limit
  if (player.isOverseas) {
    const currentOverseas = team.squad.filter((p) => p.isOverseas).length;
    if (currentOverseas >= MAX_OVERSEAS) {
      return { allowed: false, reason: `Overseas player limit reached (${MAX_OVERSEAS}/${MAX_OVERSEAS})` };
    }
  }

  // 3. Check direct purse affordability
  if (team.purse < bidAmount) {
    return {
      allowed: false,
      reason: `Insufficient purse! Need ${formatLakhsToINR(bidAmount)}, available ${formatLakhsToINR(team.purse)}`,
    };
  }

  // 4. Critical Minimum 18 Squad Reserve Logic:
  // After winning this player, squad size becomes current + 1.
  const squadSizeAfter = team.squad.length + 1;
  const remainingSlotsToMin18 = Math.max(0, MIN_SQUAD_SIZE - squadSizeAfter);
  const minReserveRequired = remainingSlotsToMin18 * MIN_BASE_PRICE; // in Lakhs
  const purseAfterBid = team.purse - bidAmount;

  if (purseAfterBid < minReserveRequired) {
    return {
      allowed: false,
      reason: `Purse Violation: Must retain ${formatLakhsToINR(minReserveRequired)} to afford minimum 18 players at ₹30 Lakh base price!`,
    };
  }

  return { allowed: true };
}

/**
 * Evaluates a team's squad at the conclusion of the auction and computes
 * a comprehensive rating out of 100, ranking metrics, strengths and weaknesses.
 */
export function calculateSquadRating(team: IPLTeam): SquadRatingMetrics {
  const squad = team.squad;
  const squadSize = squad.length;
  const overseasCount = squad.filter((p) => p.isOverseas).length;
  const totalSpent = team.initialPurse - team.purse;

  // Role categorization
  const batters = squad.filter((p) => p.role === 'BATTER');
  const allRounders = squad.filter((p) => p.role === 'ALL_ROUNDER');
  const keepers = squad.filter((p) => p.role === 'WICKET_KEEPER');
  const fastBowlers = squad.filter((p) => p.role === 'FAST_BOWLER');
  const spinners = squad.filter((p) => p.role === 'SPINNER');

  const hasDedicatedWK = keepers.length > 0;
  const hasPrimarySpinner = spinners.length > 0;
  const fastBowlingCount = fastBowlers.length;

  // 1. Player Quality / Form Score (Max 45 points)
  let qualitySum = 0;
  let starPlayer: Player | null = null;
  let highestRating = 0;
  let bargainBuy: Player | null = null;
  let bestValueRatio = 0;

  for (const p of squad) {
    qualitySum += p.hiddenFormRating;
    if (p.hiddenFormRating > highestRating) {
      highestRating = p.hiddenFormRating;
      starPlayer = p;
    }
    const price = p.soldPrice || p.basePrice;
    const valueRatio = p.hiddenFormRating / Math.max(30, price);
    if (valueRatio > bestValueRatio) {
      bestValueRatio = valueRatio;
      bargainBuy = p;
    }
  }

  const avgQuality = squadSize > 0 ? qualitySum / squadSize : 50;
  // Scaled from 60-99 to 0-45 points
  const formScore = Math.min(45, Math.max(10, ((avgQuality - 60) / 40) * 45));

  // 2. Squad Balance Score (Max 35 points)
  let balanceScore = 0;

  // Wicketkeeper (10 pts)
  if (keepers.length >= 2) balanceScore += 10;
  else if (keepers.length === 1) balanceScore += 8;
  else balanceScore -= 12; // severe lack of keeper

  // Spin attack (8 pts)
  if (spinners.length >= 2) balanceScore += 8;
  else if (spinners.length === 1) balanceScore += 6;
  else balanceScore -= 8;

  // Pace battery (10 pts)
  if (fastBowlingCount >= 4) balanceScore += 10;
  else if (fastBowlingCount >= 3) balanceScore += 8;
  else if (fastBowlingCount >= 2) balanceScore += 5;
  else balanceScore -= 10;

  // All-rounder versatility (7 pts)
  if (allRounders.length >= 3) balanceScore += 7;
  else if (allRounders.length >= 1) balanceScore += 4;
  else balanceScore -= 4;

  // Overseas composition (neutral/slight bonus for 6-8 overseas)
  if (overseasCount >= 5 && overseasCount <= 8) {
    balanceScore += 3;
  }

  // 3. Rule Compliance & Size Penalties (Max 20 points)
  let compliancePenalty = 0;
  let complianceScore = 20;

  if (squadSize < MIN_SQUAD_SIZE) {
    const missing = MIN_SQUAD_SIZE - squadSize;
    compliancePenalty += missing * 15; // -15 per missing player
    complianceScore = Math.max(0, complianceScore - compliancePenalty);
  }

  if (overseasCount > MAX_OVERSEAS) {
    compliancePenalty += 25;
    complianceScore = Math.max(0, complianceScore - 25);
  }

  // Total rating calculation
  const rawTotal = formScore + balanceScore + complianceScore;
  const totalRating = Math.min(100, Math.max(20, Math.round(rawTotal)));

  // Generate strengths & weaknesses
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  if (highestRating >= 95) strengths.push(`World-class marquee anchor: ${starPlayer?.name}`);
  if (fastBowlingCount >= 4) strengths.push('Formidable pace battery with deep death-bowling reserves');
  if (allRounders.length >= 3) strengths.push('Extremely versatile bat-and-ball depth in middle overs');
  if (keepers.length >= 2) strengths.push('Solid wicketkeeper contingency cover');
  if (spinners.length >= 2) strengths.push('Multi-angled spin options for choke overs');

  if (!hasDedicatedWK) weaknesses.push('Critical flaw: No dedicated wicketkeeper in squad');
  if (!hasPrimarySpinner) weaknesses.push('Warning: Lacks frontline specialized spinner');
  if (fastBowlingCount < 2) weaknesses.push('Thin fast-bowling unit vulnerable in powerplay & death');
  if (squadSize < MIN_SQUAD_SIZE) weaknesses.push(`Rule breach: Failed to reach minimum 18 players (${squadSize}/18)`);
  if (overseasCount < 4 && squadSize >= 15) weaknesses.push('Under-utilized overseas impact player slots');

  let summary = '';
  if (totalRating >= 88) {
    summary = 'Title Contender: Elite, balanced roster with high-impact match-winners and strategic depth.';
  } else if (totalRating >= 75) {
    summary = 'Playoff Hopeful: Solid foundation with clear core strength, but has 1 or 2 positional trade-offs.';
  } else if (totalRating >= 60) {
    summary = 'Work in Progress: Capable starting XI, but thin bench depth or unbalanced role distribution.';
  } else {
    summary = 'Rebuilding Franchise: Suffered from auction penalties or key squad position oversights.';
  }

  return {
    teamId: team.id,
    totalRating,
    battingScore: Math.round((batters.length * 10 + allRounders.length * 5) / 2),
    bowlingScore: Math.round((fastBowlers.length * 10 + spinners.length * 8) / 2),
    allRoundScore: allRounders.length * 12,
    balanceScore: Math.max(0, Math.round(balanceScore)),
    compliancePenalty,
    totalSpent,
    squadSize,
    overseasCount,
    hasDedicatedWK,
    hasPrimarySpinner,
    fastBowlingCount,
    starPlayer,
    bargainBuy,
    analysisSummary: summary,
    strengths: strengths.length > 0 ? strengths : ['Balanced standard lineup'],
    weaknesses: weaknesses.length > 0 ? weaknesses : ['No critical vulnerabilities detected'],
  };
}
