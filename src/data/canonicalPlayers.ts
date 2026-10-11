// Authoritative Canonical Player Registry
// Single Source of Truth for Player Identities and Verified Images
// Ensures identical image in Auction Pool, Retention List, Player Cards, Auction Results, and Playing XI

export interface CanonicalPlayerRecord {
  playerId: string;
  id: string;
  canonicalName: string;
  name: string;
  fullName: string;
  imageUrl: string | null;
  photo: string | null;
  imageVerified: boolean;
  imageStatus: 'VERIFIED' | 'MISSING';
  role: string;
  specialism: string;
  country: string;
  countryCode: string;
  isOverseas: boolean;
  isCapped: boolean;
  isUncapped?: boolean;
  cappedStatus?: 'CAPPED' | 'UNCAPPED';
  internationalStatus?: 'CAPPED' | 'UNCAPPED' | 'NEVER_PLAYED';
  lastInternationalMatchDate?: string | null;
  cappedReason?: string;
  aliases: string[];
}

import registryData from './canonicalPlayerRegistry.json' with { type: 'json' };
import { calculateCappedStatusFromActivity } from './internationalCricketActivity.ts';

export const CANONICAL_PLAYER_MAP: Record<string, CanonicalPlayerRecord> = registryData as Record<string, CanonicalPlayerRecord>;

// Normalize any ID or name to canonical ID
export function getCanonicalPlayerId(idOrName: string): string {
  if (!idOrName) return '';
  const slug = idOrName
    .toLowerCase()
    .replace(/[.\-_\s'’]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  const aliasMap: Record<string, string> = {
    'matt-short': 'matthew-short',
    'mitch-santner': 'mitchell-santner',
    'am-ghazanfar': 'allah-ghazanfar',
    'allah-mohammad-ghazanfar': 'allah-ghazanfar',
    'rasikh-dar': 'rasikh-salam',
    'rasikh-salam-dar': 'rasikh-salam',
    'yarra-prithviraj': 'prithviraj-yarra',
    'yudhvir-singh-charak': 'yudhvir-charak',
    'yudhvir-singh': 'yudhvir-charak',
    'yash-punja': 'yash-raj-punja',
    'lhuan-dr-pretorius': 'lhuan-dre-pretorius',
    'varun-chakaravarthy': 'varun-chakravarthy',
    'mahendra-singh-dhoni': 'ms-dhoni',
    'm-s-dhoni': 'ms-dhoni',
    'k-l-rahul': 'kl-rahul',
    'm-shami': 'mohammed-shami',
    't-natarajan': 'thangarasu-natarajan',
    't-natarajan-dc': 'thangarasu-natarajan',
    'thangarasu-natarajan-dc': 'thangarasu-natarajan',
    'dc-t-natarajan': 'thangarasu-natarajan',
    'donavon-ferreira': 'donovan-ferreira',
    'doain-forester': 'dian-forrester',
    'donovan-forester': 'donovan-ferreira',
    'dian-forester': 'dian-forrester',
    'dian-forestor': 'dian-forrester',
    'dian-ferreira': 'donovan-ferreira',
    'mitch-marsh': 'mitchell-marsh',
    'm-siddharth': 'manimaran-siddharth',
    'aman-rao': 'aman-rao-perala',
    'digvesh-rathi': 'digvesh-singh-rathi',
    'mitch-owen': 'mitchell-owen',
    't-vijay': 'tripurana-vijay',
    'r-smaran': 'ravichandran-smaran',
    'hrithik-shokeen': 'hritik-shokeen',
    'praveen-dubey': 'pravin-dubey',
    'auqib-dar': 'auqib-nabi',
    'auqib-nabi-dar': 'auqib-nabi',
    'mohammed-izhar': 'mohammad-izhar',
    'tanay-thyagarajan': 'tanay-thyagarajann',
  };

  return aliasMap[slug] || slug;
}

// Retrieve canonical player record by ID or Name
export function getCanonicalPlayer(idOrName: string): CanonicalPlayerRecord | null {
  const canonicalId = getCanonicalPlayerId(idOrName);
  let baseRecord: CanonicalPlayerRecord | null = null;
  if (CANONICAL_PLAYER_MAP[canonicalId]) {
    baseRecord = CANONICAL_PLAYER_MAP[canonicalId];
  } else {
    // Try finding by alias/name
    const norm = idOrName.toLowerCase().trim();
    for (const key in CANONICAL_PLAYER_MAP) {
      const p = CANONICAL_PLAYER_MAP[key];
      if (p.name.toLowerCase() === norm || p.fullName.toLowerCase() === norm || p.aliases.some(a => a.toLowerCase() === norm)) {
        baseRecord = p;
        break;
      }
    }
  }

  if (!baseRecord) return null;

  const classification = calculateCappedStatusFromActivity(baseRecord.id || baseRecord.playerId, baseRecord);
  return {
    ...baseRecord,
    isUncapped: classification.isUncapped,
    isCapped: classification.isCapped,
    cappedStatus: classification.cappedStatus,
    internationalStatus: classification.internationalStatus,
    lastInternationalMatchDate: classification.lastInternationalMatchDate,
    cappedReason: classification.reason,
  };
}

// Retrieve single verified canonical image URL
export function getCanonicalPlayerImage(idOrName: string, fallback?: string): string | null {
  const canon = getCanonicalPlayer(idOrName);
  if (canon && canon.imageUrl) {
    return canon.imageUrl;
  }
  return fallback || null;
}
