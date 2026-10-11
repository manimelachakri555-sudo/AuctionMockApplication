import type { IPLTeam, TeamId, TeamAIRankingResult, AIRankingReport } from '../types/auction.ts';

/**
 * Intelligent Algorithmic AI Squad Evaluation
 * Used for instant, deterministic rankings and as fallback when API key is unavailable
 */
export function evaluateSquadsAlgorithmic(teams: IPLTeam[]): AIRankingReport {
  const activeTeams = teams.filter((t) => t && t.isActive !== false);
  const evaluationPool = activeTeams.length >= 2 ? activeTeams : teams;

  const rawResults: (TeamAIRankingResult & { rawScore: number })[] = evaluationPool.map((team) => {
    const squad = team.squad || [];
    const squadSize = squad.length;

    // Categorization
    const batters = squad.filter((p) => (p.role || '').toLowerCase().includes('bat'));
    const bowlers = squad.filter((p) => (p.role || '').toLowerCase().includes('bowl'));
    const allRounders = squad.filter((p) => (p.role || '').toLowerCase().includes('all'));
    const keepers = squad.filter(
      (p) => (p.role || '').toLowerCase().includes('keep') || (p.specialism || '').toLowerCase().includes('wk')
    );
    const spinners = bowlers.filter((p) => (p.specialism || '').toLowerCase().includes('spin'));
    const pacers = bowlers.filter((p) => (p.specialism || '').toLowerCase().includes('fast') || (p.specialism || '').toLowerCase().includes('pace'));

    // 1. Batting Power & Depth (0 - 100)
    let battingScore = 50;
    if (batters.length + allRounders.length >= 5) battingScore += 20;
    if (keepers.length >= 1) battingScore += 10;
    const avgBatSR = squad.reduce((acc, p) => acc + (p.stats?.strikeRate || 120), 0) / Math.max(1, squadSize);
    if (avgBatSR > 135) battingScore += 15;
    else if (avgBatSR > 125) battingScore += 8;
    battingScore = Math.min(98, Math.max(35, battingScore));

    // 2. Bowling Depth (0 - 100)
    let bowlingScore = 45;
    if (pacers.length >= 3) bowlingScore += 20;
    else if (pacers.length >= 2) bowlingScore += 10;
    if (bowlers.length + allRounders.length >= 6) bowlingScore += 15;
    const avgEcon = bowlers.reduce((acc, p) => acc + (p.stats?.economy || 8.2), 0) / Math.max(1, bowlers.length);
    if (avgEcon < 7.8) bowlingScore += 15;
    else if (avgEcon < 8.5) bowlingScore += 8;
    bowlingScore = Math.min(98, Math.max(30, bowlingScore));

    // 3. Spin Attack (0 - 100)
    let spinScore = 40;
    if (spinners.length >= 2) spinScore += 30;
    else if (spinners.length === 1) spinScore += 15;
    const hasPremierSpinner = spinners.some((p) => (p.rating || p.hiddenFormRating || 0) >= 88);
    if (hasPremierSpinner) spinScore += 20;
    spinScore = Math.min(99, Math.max(25, spinScore));

    // 4. All-Rounder Balance (0 - 100)
    let arScore = 40;
    if (allRounders.length >= 3) arScore += 35;
    else if (allRounders.length >= 2) arScore += 25;
    else if (allRounders.length === 1) arScore += 15;
    const premierAR = allRounders.some((p) => (p.rating || p.hiddenFormRating || 0) >= 88);
    if (premierAR) arScore += 15;
    arScore = Math.min(98, Math.max(30, arScore));

    // 5. Form & Skill (0 - 100)
    const avgRating = squad.reduce((acc, p) => acc + (p.rating || p.hiddenFormRating || 80), 0) / Math.max(1, squadSize);
    let formScore = Math.round(avgRating);
    if (squad.some((p) => p.hiddenFormRating >= 88 || (p.rating || 0) >= 90)) formScore += 5;
    formScore = Math.min(98, Math.max(40, formScore));

    // Overall Score
    const rawScore = Math.round(
      battingScore * 0.25 +
      bowlingScore * 0.25 +
      spinScore * 0.15 +
      arScore * 0.15 +
      formScore * 0.20
    );

    // X-Factor Player
    const xFactor = squad.reduce<any>((best, p) => (!best || (p.rating || p.hiddenFormRating || 0) > (best.rating || best.hiddenFormRating || 0) ? p : best), null);

    // Strengths & Weaknesses
    const strengths: string[] = [];
    const weaknesses: string[] = [];

    if (battingScore >= 75) strengths.push('High-octane batting core with explosive boundary-hitters');
    else weaknesses.push('Vulnerable top-order scoring rate in high-pressure chases');

    if (bowlingScore >= 75) strengths.push('Lethal frontline pace unit capable of powerplay wickets');
    else weaknesses.push('Limited death-overs yorker specialists');

    if (spinScore >= 75) strengths.push('Elite spin stranglehold for slow and spinning tracks');
    else weaknesses.push('Sparse spin variation in middle overs');

    if (arScore >= 75) strengths.push('Flexible batting depth extending through #8 and #9');
    else weaknesses.push('Shallow lower-order hitting if top order collapses');

    if (keepers.length === 0) weaknesses.push('CRITICAL: No specialist wicketkeeper contracted!');
    if (squadSize < 11) weaknesses.push(`Roster deficit: Needs ${11 - squadSize} more players for full playing XI`);

    if (strengths.length === 0) strengths.push('Balanced foundation with room for tactical innovation');
    if (weaknesses.length === 0) weaknesses.push('Potential overseas balance dilemma under heavy rotation');

    // Scout Critique
    let scoutCritique = '';
    if (rawScore >= 88) {
      scoutCritique = `${team.name} emerged with an imperial auction haul, combining ferocious power-hitting with clutch death bowling. Certified trophy contenders.`;
    } else if (rawScore >= 78) {
      scoutCritique = `A calculated and disciplined auction campaign by ${team.shortName}. They boast a resilient core with outstanding tactical versatility.`;
    } else if (rawScore >= 68) {
      scoutCritique = `${team.shortName} assembled dependable match-winners, but their qualification journey hinges on key overseas stars maintaining peak fitness.`;
    } else {
      scoutCritique = `An adventurous auction strategy by ${team.shortName}. While possessing explosive spark, structural squad holes could be targeted by clinical opponents.`;
    }

    // Contender Grade
    let grade: 'A+' | 'A' | 'B+' | 'B' | 'C' = 'B';
    if (rawScore >= 88) grade = 'A+';
    else if (rawScore >= 80) grade = 'A';
    else if (rawScore >= 72) grade = 'B+';
    else if (rawScore >= 62) grade = 'B';
    else grade = 'C';

    return {
      rank: 0,
      rawScore,
      teamId: team.id,
      teamName: team.name,
      overallScore: rawScore,
      grade,
      trophyProbability: 0, // Calculated after sorting
      criteria: {
        battingPower: battingScore,
        bowlingDepth: bowlingScore,
        spinAttack: spinScore,
        allRounderBalance: arScore,
        formAndSkill: formScore,
      },
      strengths: strengths.slice(0, 3),
      weaknesses: weaknesses.slice(0, 2),
      xFactorPlayer: xFactor ? xFactor.name : 'Team Captain',
      scoutCritique,
    };
  });

  // Sort by rawScore descending
  rawResults.sort((a, b) => b.rawScore - a.rawScore);

  // Calculate trophy probability percentages proportionally
  const totalScoreSum = rawResults.reduce((acc, r) => acc + Math.pow(r.rawScore, 2), 0);
  const rankings: TeamAIRankingResult[] = rawResults.map((item, index) => {
    const trophyProbability = totalScoreSum > 0 ? Math.round((Math.pow(item.rawScore, 2) / totalScoreSum) * 100) : 10;
    return {
      ...item,
      rank: index + 1,
      trophyProbability: Math.max(5, trophyProbability),
    };
  });

  const championPick = rankings[0] ? rankings[0].teamId : 'CSK';

  return {
    timestamp: Date.now(),
    summary: `Official AI Auction Evaluation complete across ${rankings.length} franchises. Ranked on batting explosiveness, bowling depth, spin control, all-round balance, and big-match form.`,
    rankings,
    championPickTeamId: championPick,
  };
}

/**
 * Fetch AI Rankings from Server (calls Gemini 3.8 Flash, with instant fallback)
 */
export async function fetchGeminiAIRankings(teams: IPLTeam[]): Promise<AIRankingReport> {
  try {
    const res = await fetch('/api/ai/rank-squads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teams }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.rankings && Array.isArray(data.rankings) && data.rankings.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn('AI ranking API unavailable, using local algorithmic model:', err);
  }

  // Graceful fallback to algorithmic engine
  return evaluateSquadsAlgorithmic(teams);
}
