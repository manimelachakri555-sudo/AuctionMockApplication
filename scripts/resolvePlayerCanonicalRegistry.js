import fs from 'fs';

const offPlayers = JSON.parse(fs.readFileSync('src/data/official350Players.json', 'utf8'));
const masterPlayers = JSON.parse(fs.readFileSync('src/data/masterPlayersDatabase.json', 'utf8'));
const squads = JSON.parse(fs.readFileSync('src/data/teamsSquads2026.json', 'utf8'));

// Common known aliases and name normalizations in Indian cricket
const ALIAS_MAP = {
  'k-l-rahul': 'kl-rahul',
  'k-l--rahul': 'kl-rahul',
  'm-shami': 'mohammed-shami',
  'mohd-shami': 'mohammed-shami',
  'md-shami': 'mohammed-shami',
  'mahendra-singh-dhoni': 'ms-dhoni',
  'm-s-dhoni': 'ms-dhoni',
  'r-sai-kishore': 'sai-kishore',
  'ravisrinivasan-sai-kishore': 'sai-kishore',
  'mitch-santner': 'mitchell-santner',
  'varun-chakravarthy': 'varun-chakaravarthy',
  'rasikh-dar': 'rasikh-salam-dar',
  'rasikh-salam': 'rasikh-salam-dar',
  'allah-ghazanfar': 'am-ghazanfar',
  'allah-mohammad-ghazanfar': 'am-ghazanfar',
  'matthew-short': 'matt-short',
  'lhuan-dre-pretorius': 'lhuan-dre-pretorius',
  'lhuandre-pretorius': 'lhuan-dre-pretorius',
  'yudhvir-charak': 'yudhvir-singh-charak',
  'yudhvir-singh': 'yudhvir-singh-charak'
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

// 1. Build canonical database from official 350 auction pool + master players
// Map: canonicalId -> canonicalRecord
const canonicalRegistry = new Map();
const nameToCanonicalId = new Map();

function registerPlayer(player, source) {
  let slug = normalizeSlug(player.id || player.name);
  if (ALIAS_MAP[slug]) slug = ALIAS_MAP[slug];

  const normName = normalizeName(player.name || player.fullName);
  const img = player.imageUrl || player.photo;
  const isRealImg = img && !img.includes('dicebear') && !img.includes('placeholder');

  let existing = canonicalRegistry.get(slug);
  if (!existing && nameToCanonicalId.has(normName)) {
    existing = canonicalRegistry.get(nameToCanonicalId.get(normName));
  }

  if (existing) {
    // If incoming has a real image and existing doesn't, or existing is not verified
    if (isRealImg && (!existing.imageUrl || existing.imageUrl.includes('dicebear'))) {
      existing.imageUrl = img;
      existing.imageVerified = true;
      existing.imageStatus = 'VERIFIED_ACTIVE';
      existing.source = source;
    }
    // Update aliases
    if (!existing.aliases.includes(player.name)) existing.aliases.push(player.name);
    if (player.id && !existing.aliases.includes(player.id)) existing.aliases.push(player.id);
  } else {
    const record = {
      id: slug,
      canonicalId: slug,
      canonicalName: player.name || player.fullName,
      name: player.name || player.fullName,
      imageUrl: isRealImg ? img : null,
      imageVerified: !!isRealImg,
      imageStatus: isRealImg ? 'VERIFIED_ACTIVE' : 'MISSING',
      role: player.role || player.specialism || 'All-Rounder',
      isOverseas: !!player.isOverseas,
      isCapped: player.isCapped !== undefined ? !!player.isCapped : true,
      aliases: [player.name, player.fullName, player.id].filter(Boolean),
      source: source
    };
    canonicalRegistry.set(slug, record);
    nameToCanonicalId.set(normName, slug);
  }
}

// Register Auction Pool first (these are 100% verified real photos)
for (const p of offPlayers) {
  registerPlayer(p, 'AUCTION_POOL');
}

// Register Master Players next
for (const p of masterPlayers) {
  registerPlayer(p, 'MASTER_DATABASE');
}

console.log('Total Canonical Records in Registry:', canonicalRegistry.size);

// Analyze squads vs Registry
const audit = {
  samePlayerSameImage: [],
  samePlayerDifferentImage: [],
  retentionMissingFromAuctionPool: [],
  playerExistsImageMissing: [],
  nameMismatches: [],
  possibleDuplicates: [],
  missingRetentionImagesByTeam: {}
};

for (const teamId of ['CSK', 'DC', 'GT', 'KKR', 'LSG', 'MI', 'PBKS', 'RR', 'RCB', 'SRH']) {
  audit.missingRetentionImagesByTeam[teamId] = [];
  const squadList = squads[teamId] || [];

  for (const sp of squadList) {
    let slug = normalizeSlug(sp.id || sp.name);
    if (ALIAS_MAP[slug]) slug = ALIAS_MAP[slug];
    const normName = normalizeName(sp.name);

    let canonId = slug;
    let canon = canonicalRegistry.get(slug);
    if (!canon && nameToCanonicalId.has(normName)) {
      canonId = nameToCanonicalId.get(normName);
      canon = canonicalRegistry.get(canonId);
    }

    const spImg = sp.imageUrl || sp.photo;
    const isSpRealImg = spImg && !spImg.includes('dicebear') && !spImg.includes('placeholder');

    // Check if in Auction Pool directly
    const inAuctionPool = offPlayers.find(p => {
      const pSlug = normalizeSlug(p.id || p.name);
      return pSlug === slug || pSlug === canonId || normalizeName(p.name) === normName;
    });

    if (inAuctionPool) {
      const poolImg = inAuctionPool.imageUrl || inAuctionPool.photo;
      if (sp.name !== inAuctionPool.name || sp.id !== inAuctionPool.id) {
        audit.nameMismatches.push({
          team: teamId,
          retentionName: sp.name,
          retentionId: sp.id,
          auctionPoolName: inAuctionPool.name,
          auctionPoolId: inAuctionPool.id
        });
      }

      if (spImg === poolImg) {
        audit.samePlayerSameImage.push({
          team: teamId,
          id: canonId,
          name: canon ? canon.canonicalName : sp.name,
          imageUrl: poolImg
        });
      } else {
        audit.samePlayerDifferentImage.push({
          team: teamId,
          id: canonId,
          name: canon ? canon.canonicalName : sp.name,
          retentionImage: spImg,
          auctionPoolImage: poolImg
        });
      }
    } else {
      // In retention but not in auction pool (e.g. Virat Kohli, Rohit Sharma, etc.)
      audit.retentionMissingFromAuctionPool.push({
        team: teamId,
        id: sp.id,
        name: sp.name,
        hasImage: isSpRealImg || (canon && canon.imageUrl)
      });
    }

    // Check if image is missing
    const hasCanonicalImg = canon && canon.imageUrl && !canon.imageUrl.includes('dicebear');
    if (!isSpRealImg && !hasCanonicalImg) {
      audit.playerExistsImageMissing.push({
        team: teamId,
        id: sp.id,
        name: sp.name
      });
      audit.missingRetentionImagesByTeam[teamId].push({
        id: sp.id,
        name: sp.name
      });
    }
  }
}

console.log('\n=============================');
console.log('      PLAYER IMAGE AUDIT     ');
console.log('=============================');
console.log('✅ Same player + same image:', audit.samePlayerSameImage.length);
console.log('❌ Same player + different image:', audit.samePlayerDifferentImage.length);
console.log('⚠️ Retention player missing from auction pool:', audit.retentionMissingFromAuctionPool.length);
console.log('⚠️ Player exists but image missing:', audit.playerExistsImageMissing.length);
console.log('⚠️ Name mismatch:', audit.nameMismatches.length);
console.log('⚠️ Possible duplicate player:', audit.possibleDuplicates.length);

console.log('\n=============================');
console.log('   MISSING RETENTION IMAGES  ');
console.log('=============================');
for (const teamId of ['CSK', 'DC', 'GT', 'KKR', 'LSG', 'MI', 'PBKS', 'RR', 'RCB', 'SRH']) {
  const missing = audit.missingRetentionImagesByTeam[teamId] || [];
  if (missing.length > 0) {
    console.log(`\n${teamId} (${missing.length} missing):`);
    for (const m of missing) {
      console.log(`- ${m.name} (id: ${m.id})`);
    }
  }
}

fs.writeFileSync('scripts/auditCanonicalDetails.json', JSON.stringify(audit, null, 2));
