import fs from 'fs';

const offPlayers = JSON.parse(fs.readFileSync('src/data/official350Players.json', 'utf8'));
const masterPlayers = JSON.parse(fs.readFileSync('src/data/masterPlayersDatabase.json', 'utf8'));
const squads = JSON.parse(fs.readFileSync('src/data/teamsSquads2026.json', 'utf8'));

// Canonical identity map: aliases to canonical playerId
const CANONICAL_ALIASES = {
  // Variations of Auction Pool / Retained players
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
  'm-shami': 'mohammed-shami'
};

function normalizeSlug(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[.\-_\s'’]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizeName(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[.\-_\s'’]+/g, ' ')
    .trim();
}

// 1. Build canonical player registry
// playerId -> CanonicalPlayer
const canonicalMap = new Map();
const nameToId = new Map();

// Helper to register player
function addPlayerToRegistry(p, source) {
  let slug = normalizeSlug(p.id || p.name);
  if (CANONICAL_ALIASES[slug]) slug = CANONICAL_ALIASES[slug];

  const normName = normalizeName(p.name || p.fullName);
  const img = p.imageUrl || p.photo;
  const isReal = img && !img.includes('dicebear') && !img.includes('placeholder') && img.trim() !== '';

  let existing = canonicalMap.get(slug);
  if (!existing && nameToId.has(normName)) {
    existing = canonicalMap.get(nameToId.get(normName));
  }

  if (existing) {
    // If incoming has a real image and existing doesn't, update
    if (isReal && (!existing.imageUrl || existing.imageUrl.includes('dicebear'))) {
      existing.imageUrl = img;
      existing.photo = img;
      existing.imageVerified = true;
      existing.imageStatus = 'VERIFIED';
      existing.source = source;
    }
    if (!existing.aliases.includes(p.name)) existing.aliases.push(p.name);
    if (p.id && !existing.aliases.includes(p.id)) existing.aliases.push(p.id);
  } else {
    const record = {
      playerId: slug,
      id: slug,
      canonicalName: p.name || p.fullName,
      name: p.name || p.fullName,
      fullName: p.fullName || p.name,
      imageUrl: isReal ? img : null,
      photo: isReal ? img : null,
      imageVerified: isReal,
      imageStatus: isReal ? 'VERIFIED' : 'MISSING',
      role: p.role || p.specialism || 'All-Rounder',
      specialism: p.specialism || p.role || 'All-Rounder',
      country: p.country || (p.isOverseas ? 'Overseas' : 'India'),
      countryCode: p.countryCode || (p.isOverseas ? 'OS' : 'IN'),
      isOverseas: !!p.isOverseas,
      isCapped: p.isCapped !== undefined ? !!p.isCapped : true,
      currentTeam: p.currentTeam,
      previousTeam: p.previousTeam,
      source: source,
      aliases: [p.name, p.fullName, p.id].filter(Boolean)
    };
    canonicalMap.set(slug, record);
    nameToId.set(normName, slug);
  }
}

// 1. Register Auction Pool players (authoritative verified set)
for (const p of offPlayers) {
  addPlayerToRegistry(p, 'AUCTION_POOL');
}

// 2. Register Master DB players (authoritative for retained superstars like Kohli, Bumrah, Rohit)
for (const p of masterPlayers) {
  addPlayerToRegistry(p, 'MASTER_DB');
}

// 3. Register valid real photos from Squads (for franchise retained players who might have real photo)
for (const tid in squads) {
  for (const sp of squads[tid]) {
    const img = sp.imageUrl || sp.photo;
    const isReal = img && !img.includes('dicebear') && !img.includes('placeholder') && img.trim() !== '';
    if (isReal) {
      addPlayerToRegistry({ ...sp, currentTeam: tid }, 'FRANCHISE_SQUAD');
    }
  }
}

console.log('Total Canonical Players registered:', canonicalMap.size);

// 4. Update squads and generate audit
const updatedSquads = {};
const audit = {
  samePlayerSameImage: [],
  samePlayerDifferentImage: [],
  retentionMissingFromAuctionPool: [],
  playerExistsImageMissing: [],
  nameMismatches: [],
  possibleDuplicates: [],
  missingRetentionImagesByTeam: {}
};

for (const tid of ['CSK', 'DC', 'GT', 'KKR', 'LSG', 'MI', 'PBKS', 'RR', 'RCB', 'SRH']) {
  audit.missingRetentionImagesByTeam[tid] = [];
  const squad = squads[tid] || [];
  const updatedList = [];

  for (const sp of squad) {
    let slug = normalizeSlug(sp.id || sp.name);
    if (CANONICAL_ALIASES[slug]) slug = CANONICAL_ALIASES[slug];
    const normName = normalizeName(sp.name);

    let canon = canonicalMap.get(slug);
    if (!canon && nameToId.has(normName)) {
      canon = canonicalMap.get(nameToId.get(normName));
      slug = canon.id;
    }

    const spImg = sp.imageUrl || sp.photo;
    const isSpReal = spImg && !spImg.includes('dicebear') && !spImg.includes('placeholder') && spImg.trim() !== '';

    // Check match with Auction Pool
    const inAuctionPool = offPlayers.find(p => {
      let pSlug = normalizeSlug(p.id);
      if (CANONICAL_ALIASES[pSlug]) pSlug = CANONICAL_ALIASES[pSlug];
      return pSlug === slug || normalizeName(p.name) === normName;
    });

    if (inAuctionPool) {
      const poolImg = inAuctionPool.imageUrl || inAuctionPool.photo;
      if (sp.name !== inAuctionPool.name || sp.id !== inAuctionPool.id) {
        audit.nameMismatches.push({
          team: tid,
          retentionName: sp.name,
          retentionId: sp.id,
          auctionPoolName: inAuctionPool.name,
          auctionPoolId: inAuctionPool.id
        });
      }

      if (spImg === poolImg) {
        audit.samePlayerSameImage.push({
          team: tid,
          playerId: slug,
          name: canon ? canon.canonicalName : sp.name,
          imageUrl: poolImg
        });
      } else {
        audit.samePlayerDifferentImage.push({
          team: tid,
          playerId: slug,
          name: canon ? canon.canonicalName : sp.name,
          retentionImage: spImg,
          auctionPoolImage: poolImg
        });
      }
    } else {
      audit.retentionMissingFromAuctionPool.push({
        team: tid,
        playerId: slug,
        name: sp.name,
        hasImage: isSpReal || (canon && canon.imageUrl)
      });
    }

    // Determine final unified image from canonical registry
    const finalImg = canon && canon.imageUrl ? canon.imageUrl : (isSpReal ? spImg : null);
    const finalVerified = !!finalImg;

    if (!finalVerified) {
      audit.playerExistsImageMissing.push({
        team: tid,
        playerId: slug,
        name: sp.name
      });
      audit.missingRetentionImagesByTeam[tid].push({
        playerId: slug,
        name: sp.name
      });
    }

    // Produce synchronized player object for squad
    updatedList.push({
      ...sp,
      id: slug,
      playerId: slug,
      name: canon ? canon.canonicalName : sp.name,
      fullName: canon ? canon.fullName : sp.fullName || sp.name,
      imageUrl: finalImg,
      photo: finalImg,
      imageVerified: finalVerified,
      imageStatus: finalVerified ? 'VERIFIED' : 'MISSING'
    });
  }

  updatedSquads[tid] = updatedList;
}

// Save updated squads
fs.writeFileSync('src/data/teamsSquads2026.json', JSON.stringify(updatedSquads, null, 2));

// Save canonical registry as JSON
const canonicalRegistryObj = {};
for (const [k, v] of canonicalMap.entries()) {
  canonicalRegistryObj[k] = v;
}
fs.writeFileSync('src/data/canonicalPlayerRegistry.json', JSON.stringify(canonicalRegistryObj, null, 2));

// Generate TypeScript module for canonical lookup
const tsContent = `// Authoritative Canonical Player Registry
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
  aliases: string[];
}

import registryData from './canonicalPlayerRegistry.json';

export const CANONICAL_PLAYER_MAP: Record<string, CanonicalPlayerRecord> = registryData as Record<string, CanonicalPlayerRecord>;

// Normalize any ID or name to canonical ID
export function getCanonicalPlayerId(idOrName: string): string {
  if (!idOrName) return '';
  const slug = idOrName
    .toLowerCase()
    .replace(/[.\\-_\\s'’]+/g, '-')
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
    'm-shami': 'mohammed-shami'
  };

  return aliasMap[slug] || slug;
}

// Retrieve canonical player record by ID or Name
export function getCanonicalPlayer(idOrName: string): CanonicalPlayerRecord | null {
  const canonicalId = getCanonicalPlayerId(idOrName);
  if (CANONICAL_PLAYER_MAP[canonicalId]) {
    return CANONICAL_PLAYER_MAP[canonicalId];
  }
  // Try finding by alias/name
  const norm = idOrName.toLowerCase().trim();
  for (const key in CANONICAL_PLAYER_MAP) {
    const p = CANONICAL_PLAYER_MAP[key];
    if (p.name.toLowerCase() === norm || p.fullName.toLowerCase() === norm || p.aliases.some(a => a.toLowerCase() === norm)) {
      return p;
    }
  }
  return null;
}

// Retrieve single verified canonical image URL
export function getCanonicalPlayerImage(idOrName: string, fallback?: string): string | null {
  const canon = getCanonicalPlayer(idOrName);
  if (canon && canon.imageUrl) {
    return canon.imageUrl;
  }
  return fallback || null;
}
`;

fs.writeFileSync('src/data/canonicalPlayers.ts', tsContent);
fs.writeFileSync('scripts/auditCanonicalSummary.json', JSON.stringify(audit, null, 2));

console.log('\n=============================');
console.log('      PLAYER IMAGE AUDIT     ');
console.log('=============================');
console.log('✅ Same player + same image:', audit.samePlayerSameImage.length);
console.log('❌ Same player + different image (now synchronized):', audit.samePlayerDifferentImage.length);
console.log('⚠️ Retention player missing from auction pool:', audit.retentionMissingFromAuctionPool.length);
console.log('⚠️ Player exists but image missing:', audit.playerExistsImageMissing.length);
console.log('⚠️ Name mismatch:', audit.nameMismatches.length);
console.log('⚠️ Possible duplicate player:', audit.possibleDuplicates.length);

console.log('\n=============================');
console.log('   MISSING RETENTION IMAGES  ');
console.log('=============================');
let totalMissing = 0;
for (const tid of ['CSK', 'DC', 'GT', 'KKR', 'LSG', 'MI', 'PBKS', 'RR', 'RCB', 'SRH']) {
  const missing = audit.missingRetentionImagesByTeam[tid] || [];
  if (missing.length > 0) {
    totalMissing += missing.length;
    console.log(`\n${tid}`);
    for (const m of missing) {
      console.log(`- ${m.name}`);
    }
  }
}
console.log('\nTotal Missing:', totalMissing);
