// Single Source of Truth for International Cricket Activity & 5-Year Rule Calculation
// Under official IPL Mega Auction regulations (Rule 4.2):
// If a player has NOT played in the starting XI in senior International Cricket (Test, ODI, T20I)
// for the last 5 years preceding the auction reference date, the player is classified as UNCAPPED.
// Otherwise, the player is classified as CAPPED.
// Players who have never played senior international cricket are classified as UNCAPPED (NEVER_PLAYED).

export const REFERENCE_AUCTION_DATE = '2024-10-31'; // Official BCCI Mega Auction retention deadline reference

export interface InternationalActivityRecord {
  playerId: string;
  name: string;
  lastInternationalMatchDate: string | null; // ISO YYYY-MM-DD
  hasPlayedInternational: boolean;
  matchDetails?: string;
  country: string;
}

// Known international activity for players in the database
// Players with last international match > 5 years before 2024-10-31 (i.e. before 2019-10-31) are UNCAPPED.
export const KNOWN_INTERNATIONAL_ACTIVITY: Record<string, InternationalActivityRecord> = {
  // CRITICAL EXAMPLE: MS Dhoni
  // Last international match: 2019-07-10 (ICC Cricket World Cup 2019 Semi-Final vs New Zealand at Manchester)
  // Elapsed: > 5 years -> UNCAPPED -> Retention Price ₹4 Cr
  'ms-dhoni': {
    playerId: 'ms-dhoni',
    name: 'MS Dhoni',
    lastInternationalMatchDate: '2019-07-10',
    hasPlayedInternational: true,
    matchDetails: 'ODI World Cup Semifinal vs NZ (July 10, 2019)',
    country: 'India',
  },
  // Sandeep Sharma: Last international: 2015-07-19 (T20I vs Zimbabwe at Harare) -> >5 years -> UNCAPPED
  'sandeep-sharma': {
    playerId: 'sandeep-sharma',
    name: 'Sandeep Sharma',
    lastInternationalMatchDate: '2015-07-19',
    hasPlayedInternational: true,
    matchDetails: 'T20I vs Zimbabwe (July 19, 2015)',
    country: 'India',
  },
  // Mohit Sharma: Last international: 2015-10-25 (ODI vs South Africa at Mumbai) -> >5 years -> UNCAPPED
  'mohit-sharma': {
    playerId: 'mohit-sharma',
    name: 'Mohit Sharma',
    lastInternationalMatchDate: '2015-10-25',
    hasPlayedInternational: true,
    matchDetails: 'ODI vs South Africa (October 25, 2015)',
    country: 'India',
  },
  // Piyush Chawla: Last international: 2012-12-22 (T20I vs England at Mumbai) -> >5 years -> UNCAPPED
  'piyush-chawla': {
    playerId: 'piyush-chawla',
    name: 'Piyush Chawla',
    lastInternationalMatchDate: '2012-12-22',
    hasPlayedInternational: true,
    matchDetails: 'T20I vs England (December 22, 2012)',
    country: 'India',
  },
  // Karn Sharma: Last international: 2014-12-13 (Test vs Australia at Adelaide) -> >5 years -> UNCAPPED
  'karn-sharma': {
    playerId: 'karn-sharma',
    name: 'Karn Sharma',
    lastInternationalMatchDate: '2014-12-13',
    hasPlayedInternational: true,
    matchDetails: 'Test vs Australia (December 13, 2014)',
    country: 'India',
  },
  // Vijay Shankar: Last international: 2019-06-27 (ODI vs West Indies at Manchester) -> >5 years -> UNCAPPED
  'vijay-shankar': {
    playerId: 'vijay-shankar',
    name: 'Vijay Shankar',
    lastInternationalMatchDate: '2019-06-27',
    hasPlayedInternational: true,
    matchDetails: 'World Cup ODI vs WI (June 27, 2019)',
    country: 'India',
  },
  // Rishi Dhawan: Last international: 2016-06-22 (T20I vs Zimbabwe at Harare) -> >5 years -> UNCAPPED
  'rishi-dhawan': {
    playerId: 'rishi-dhawan',
    name: 'Rishi Dhawan',
    lastInternationalMatchDate: '2016-06-22',
    hasPlayedInternational: true,
    matchDetails: 'T20I vs Zimbabwe (June 22, 2016)',
    country: 'India',
  },
  // Amit Mishra: Last international: 2017-02-01 (T20I vs England at Bengaluru) -> >5 years -> UNCAPPED
  'amit-mishra': {
    playerId: 'amit-mishra',
    name: 'Amit Mishra',
    lastInternationalMatchDate: '2017-02-01',
    hasPlayedInternational: true,
    matchDetails: 'T20I vs England (February 1, 2017)',
    country: 'India',
  },
  // Active Capped Indian & Overseas Stars (< 5 years ago)
  'virat-kohli': {
    playerId: 'virat-kohli',
    name: 'Virat Kohli',
    lastInternationalMatchDate: '2024-10-26',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'rohit-sharma': {
    playerId: 'rohit-sharma',
    name: 'Rohit Sharma',
    lastInternationalMatchDate: '2024-10-26',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'jasprit-bumrah': {
    playerId: 'jasprit-bumrah',
    name: 'Jasprit Bumrah',
    lastInternationalMatchDate: '2024-10-26',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'cameron-green': {
    playerId: 'cameron-green',
    name: 'Cameron Green',
    lastInternationalMatchDate: '2024-09-24',
    hasPlayedInternational: true,
    matchDetails: 'Active Australian International (ODI vs England, Sep 2024)',
    country: 'Australia',
  },
  'josh-inglis': {
    playerId: 'josh-inglis',
    name: 'Josh Inglis',
    lastInternationalMatchDate: '2024-11-18',
    hasPlayedInternational: true,
    matchDetails: 'Active Australian International Captain/Wicketkeeper (T20I vs Pakistan, Nov 2024)',
    country: 'Australia',
  },
  'ravindra-jadeja': {
    playerId: 'ravindra-jadeja',
    name: 'Ravindra Jadeja',
    lastInternationalMatchDate: '2024-10-26',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'hardik-pandya': {
    playerId: 'hardik-pandya',
    name: 'Hardik Pandya',
    lastInternationalMatchDate: '2024-10-12',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (T20I vs BAN, Oct 2024)',
    country: 'India',
  },
  'suryakumar-yadav': {
    playerId: 'suryakumar-yadav',
    name: 'Suryakumar Yadav',
    lastInternationalMatchDate: '2024-10-12',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (T20I vs BAN, Oct 2024)',
    country: 'India',
  },
  'rishabh-pant': {
    playerId: 'rishabh-pant',
    name: 'Rishabh Pant',
    lastInternationalMatchDate: '2024-10-26',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'kl-rahul': {
    playerId: 'kl-rahul',
    name: 'KL Rahul',
    lastInternationalMatchDate: '2024-10-18',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'shreyas-iyer': {
    playerId: 'shreyas-iyer',
    name: 'Shreyas Iyer',
    lastInternationalMatchDate: '2024-08-07',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (ODI vs SL, Aug 2024)',
    country: 'India',
  },
  'shubman-gill': {
    playerId: 'shubman-gill',
    name: 'Shubman Gill',
    lastInternationalMatchDate: '2024-10-26',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'yashasvi-jaiswal': {
    playerId: 'yashasvi-jaiswal',
    name: 'Yashasvi Jaiswal',
    lastInternationalMatchDate: '2024-10-26',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'sanju-samson': {
    playerId: 'sanju-samson',
    name: 'Sanju Samson',
    lastInternationalMatchDate: '2024-10-12',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (T20I 111 vs BAN, Oct 2024)',
    country: 'India',
  },
  'rinku-singh': {
    playerId: 'rinku-singh',
    name: 'Rinku Singh',
    lastInternationalMatchDate: '2024-10-12',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (T20I vs BAN, Oct 2024)',
    country: 'India',
  },
  'arshdeep-singh': {
    playerId: 'arshdeep-singh',
    name: 'Arshdeep Singh',
    lastInternationalMatchDate: '2024-10-12',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (T20I vs BAN, Oct 2024)',
    country: 'India',
  },
  'axar-patel': {
    playerId: 'axar-patel',
    name: 'Axar Patel',
    lastInternationalMatchDate: '2024-09-22',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs BAN, Sep 2024)',
    country: 'India',
  },
  'kuldeep-yadav': {
    playerId: 'kuldeep-yadav',
    name: 'Kuldeep Yadav',
    lastInternationalMatchDate: '2024-10-18',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'mohammed-shami': {
    playerId: 'mohammed-shami',
    name: 'Mohammed Shami',
    lastInternationalMatchDate: '2023-11-19',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (CWC Final, Nov 2023)',
    country: 'India',
  },
  'mohammed-siraj': {
    playerId: 'mohammed-siraj',
    name: 'Mohammed Siraj',
    lastInternationalMatchDate: '2024-10-18',
    hasPlayedInternational: true,
    matchDetails: 'Active Indian International (Test vs NZ, Oct 2024)',
    country: 'India',
  },
  'travis-head': {
    playerId: 'travis-head',
    name: 'Travis Head',
    lastInternationalMatchDate: '2024-09-29',
    hasPlayedInternational: true,
    matchDetails: 'Active Australia International (ODI vs ENG, Sep 2024)',
    country: 'Australia',
  },
  'pat-cummins': {
    playerId: 'pat-cummins',
    name: 'Pat Cummins',
    lastInternationalMatchDate: '2024-06-24',
    hasPlayedInternational: true,
    matchDetails: 'Active Australia International (T20 World Cup, June 2024)',
    country: 'Australia',
  },
  'mitchell-starc': {
    playerId: 'mitchell-starc',
    name: 'Mitchell Starc',
    lastInternationalMatchDate: '2024-09-29',
    hasPlayedInternational: true,
    matchDetails: 'Active Australia International (ODI vs ENG, Sep 2024)',
    country: 'Australia',
  },
  'heinrich-klaasen': {
    playerId: 'heinrich-klaasen',
    name: 'Heinrich Klaasen',
    lastInternationalMatchDate: '2024-06-29',
    hasPlayedInternational: true,
    matchDetails: 'Active South Africa International (T20 CWC Final, June 2024)',
    country: 'South Africa',
  },
  'nicholas-pooran': {
    playerId: 'nicholas-pooran',
    name: 'Nicholas Pooran',
    lastInternationalMatchDate: '2024-08-27',
    hasPlayedInternational: true,
    matchDetails: 'Active West Indies International (T20I vs SA, Aug 2024)',
    country: 'West Indies',
  },
  'rashid-khan': {
    playerId: 'rashid-khan',
    name: 'Rashid Khan',
    lastInternationalMatchDate: '2024-09-22',
    hasPlayedInternational: true,
    matchDetails: 'Active Afghanistan International (ODI vs SA, Sep 2024)',
    country: 'Afghanistan',
  },
  'jos-buttler': {
    playerId: 'jos-buttler',
    name: 'Jos Buttler',
    lastInternationalMatchDate: '2024-06-27',
    hasPlayedInternational: true,
    matchDetails: 'Active England International (T20 CWC Semifinal, June 2024)',
    country: 'England',
  },
  // Pure Uncapped Players (Never played senior international cricket)
  'ayush-badoni': {
    playerId: 'ayush-badoni',
    name: 'Ayush Badoni',
    lastInternationalMatchDate: null,
    hasPlayedInternational: false,
    matchDetails: 'Domestic Indian Player (Never represented Senior India)',
    country: 'India',
  },
  'shashank-singh': {
    playerId: 'shashank-singh',
    name: 'Shashank Singh',
    lastInternationalMatchDate: null,
    hasPlayedInternational: false,
    matchDetails: 'Domestic Indian Player (Never represented Senior India)',
    country: 'India',
  },
  'ashutosh-sharma': {
    playerId: 'ashutosh-sharma',
    name: 'Ashutosh Sharma',
    lastInternationalMatchDate: null,
    hasPlayedInternational: false,
    matchDetails: 'Domestic Indian Player (Never represented Senior India)',
    country: 'India',
  },
  'angkrish-raghuvanshi': {
    playerId: 'angkrish-raghuvanshi',
    name: 'Angkrish Raghuvanshi',
    lastInternationalMatchDate: null,
    hasPlayedInternational: false,
    matchDetails: 'Domestic Indian Player (Never represented Senior India)',
    country: 'India',
  },
  'nehal-wadhera': {
    playerId: 'nehal-wadhera',
    name: 'Nehal Wadhera',
    lastInternationalMatchDate: null,
    hasPlayedInternational: false,
    matchDetails: 'Domestic Indian Player (Never represented Senior India)',
    country: 'India',
  },
  'prabhsimran-singh': {
    playerId: 'prabhsimran-singh',
    name: 'Prabhsimran Singh',
    lastInternationalMatchDate: null,
    hasPlayedInternational: false,
    matchDetails: 'Domestic Indian Player (Never represented Senior India)',
    country: 'India',
  },
  'sameer-rizvi': {
    playerId: 'sameer-rizvi',
    name: 'Sameer Rizvi',
    lastInternationalMatchDate: null,
    hasPlayedInternational: false,
    matchDetails: 'Domestic Indian Player (Never represented Senior India)',
    country: 'India',
  },
  'harpreet-brar': {
    playerId: 'harpreet-brar',
    name: 'Harpreet Brar',
    lastInternationalMatchDate: null,
    hasPlayedInternational: false,
    matchDetails: 'Domestic Indian Player (Never represented Senior India)',
    country: 'India',
  },
};

export interface CappedClassificationResult {
  isUncapped: boolean;
  isCapped: boolean;
  cappedStatus: 'CAPPED' | 'UNCAPPED';
  internationalStatus: 'CAPPED' | 'UNCAPPED' | 'NEVER_PLAYED';
  lastInternationalMatchDate: string | null;
  reason: string;
}

/**
 * Calculates whether a player is CAPPED or UNCAPPED based on international cricket activity.
 * RULE:
 * 1. If never played senior international cricket -> UNCAPPED (NEVER_PLAYED).
 * 2. If last international match was MORE than 5 years ago from reference date -> UNCAPPED (5-Year Inactivity Rule).
 * 3. Otherwise -> CAPPED.
 */
export function calculateCappedStatusFromActivity(
  playerId: string,
  rawPlayer?: {
    name?: string;
    isCapped?: boolean;
    cappedStatus?: string;
    lastInternationalMatchDate?: string | null;
    hasPlayedInternational?: boolean;
    isOverseas?: boolean;
    country?: string;
  },
  refDateStr: string = REFERENCE_AUCTION_DATE
): CappedClassificationResult {
  const normId = (playerId || '').toLowerCase().trim();
  const known = KNOWN_INTERNATIONAL_ACTIVITY[normId];

  const hasPlayed = known
    ? known.hasPlayedInternational
    : rawPlayer?.lastInternationalMatchDate
    ? true
    : rawPlayer?.hasPlayedInternational ?? (rawPlayer?.cappedStatus === 'CAPPED' || rawPlayer?.isCapped === true);

  const lastDate = known?.lastInternationalMatchDate ?? rawPlayer?.lastInternationalMatchDate ?? null;

  // Never played senior international cricket
  if (!hasPlayed || (!lastDate && (rawPlayer?.cappedStatus === 'UNCAPPED' || rawPlayer?.isCapped === false))) {
    return {
      isUncapped: true,
      isCapped: false,
      cappedStatus: 'UNCAPPED',
      internationalStatus: 'NEVER_PLAYED',
      lastInternationalMatchDate: null,
      reason: 'Has never played senior international cricket',
    };
  }

  // If we have a verified last international match date
  if (lastDate) {
    const matchDate = new Date(lastDate);
    const refDate = new Date(refDateStr);

    // Compute exact 5-year cutoff
    const fiveYearsPrior = new Date(refDate);
    fiveYearsPrior.setFullYear(refDate.getFullYear() - 5);

    if (matchDate.getTime() < fiveYearsPrior.getTime()) {
      return {
        isUncapped: true,
        isCapped: false,
        cappedStatus: 'UNCAPPED',
        internationalStatus: 'UNCAPPED',
        lastInternationalMatchDate: lastDate,
        reason: `No international cricket in last 5 years (Last played: ${lastDate})`,
      };
    }

    return {
      isUncapped: false,
      isCapped: true,
      cappedStatus: 'CAPPED',
      internationalStatus: 'CAPPED',
      lastInternationalMatchDate: lastDate,
      reason: `Active international cricketer in last 5 years (Last played: ${lastDate})`,
    };
  }

  // Fallback for players without recorded match date:
  // If flagged as Capped in raw database, default to CAPPED with recent activity assumption
  const isCappedRaw = rawPlayer?.cappedStatus === 'CAPPED' || rawPlayer?.isCapped === true;
  if (isCappedRaw) {
    return {
      isUncapped: false,
      isCapped: true,
      cappedStatus: 'CAPPED',
      internationalStatus: 'CAPPED',
      lastInternationalMatchDate: '2024-01-01', // Standard current season representation
      reason: 'Senior international appearance in last 5 years',
    };
  }

  return {
    isUncapped: true,
    isCapped: false,
    cappedStatus: 'UNCAPPED',
    internationalStatus: 'NEVER_PLAYED',
    lastInternationalMatchDate: null,
    reason: 'Domestic uncapped player',
  };
}

export interface AuditReportRow {
  playerId: string;
  name: string;
  lastInternationalMatch: string;
  status: 'CAPPED' | 'UNCAPPED';
  reason: string;
}

/**
 * Builds the official Admin/Development Audit Report of Capped vs Uncapped players
 */
export function buildInternationalAuditReport(players: any[] = []): AuditReportRow[] {
  return players.map((p) => {
    const classification = calculateCappedStatusFromActivity(p.id || p.playerId, p);
    return {
      playerId: p.id || p.playerId,
      name: p.name,
      lastInternationalMatch: classification.lastInternationalMatchDate || 'Never Played',
      status: classification.cappedStatus,
      reason: classification.reason,
    };
  });
}
