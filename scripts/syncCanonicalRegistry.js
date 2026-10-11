import fs from 'fs';

const offPlayers = JSON.parse(fs.readFileSync('src/data/official350Players.json', 'utf8'));
const masterPlayers = JSON.parse(fs.readFileSync('src/data/masterPlayersDatabase.json', 'utf8'));
const squads = JSON.parse(fs.readFileSync('src/data/teamsSquads2026.json', 'utf8'));

// Aliases that point to canonical identity
const IDENTITY_ALIASES = {
  'yarra-prithviraj': 'prithviraj-yarra',
  'mitch-santner': 'mitchell-santner',
  'mahendra-singh-dhoni': 'ms-dhoni',
  'm-s-dhoni': 'ms-dhoni',
  'varun-chakaravarthy': 'varun-chakravarthy',
  'lhuan-dr-pretorius': 'lhuan-dre-pretorius',
  'yash-punja': 'yash-raj-punja',
  'yudhvir-singh-charak': 'yudhvir-charak',
  'yudhvir-singh': 'yudhvir-charak',
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

// Build map of verified images from Auction Pool + Master
const verifiedImageMap = new Map(); // id -> { id, name, imageUrl, source }
const nameToVerified = new Map();

for (const p of offPlayers) {
  const img = p.imageUrl || p.photo;
  if (img && !img.includes('dicebear')) {
    const slug = normalizeSlug(p.id);
    const rec = { id: slug, canonicalId: slug, name: p.name, imageUrl: img, source: 'AUCTION_POOL' };
    verifiedImageMap.set(slug, rec);
    nameToVerified.set(normalizeName(p.name), rec);
  }
}

for (const p of masterPlayers) {
  const slug = normalizeSlug(p.id);
  const img = p.imageUrl || p.photo;
  if (img && !img.includes('dicebear')) {
    if (!verifiedImageMap.has(slug)) {
      const rec = { id: slug, canonicalId: slug, name: p.name, imageUrl: img, source: 'MASTER_DB' };
      verifiedImageMap.set(slug, rec);
      nameToVerified.set(normalizeName(p.name), rec);
    }
  }
}

// Now evaluate and update squads
const updatedSquads = {};
const auditReport = {
  samePlayerSameImage: [],
  samePlayerDifferentImageSynchronized: [],
  retentionMissingFromAuctionPool: [],
  missingRetentionImages: {},
  nameMismatchesResolved: []
};

for (const teamId of ['CSK', 'DC', 'GT', 'KKR', 'LSG', 'MI', 'PBKS', 'RR', 'RCB', 'SRH']) {
  auditReport.missingRetentionImages[teamId] = [];
  const squad = squads[teamId] || [];
  const updatedTeamList = [];

  for (const sp of squad) {
    let slug = normalizeSlug(sp.id);
    if (IDENTITY_ALIASES[slug]) {
      const resolvedSlug = IDENTITY_ALIASES[slug];
      auditReport.nameMismatchesResolved.push({
        team: teamId,
        originalId: sp.id,
        originalName: sp.name,
        canonicalId: resolvedSlug
      });
      slug = resolvedSlug;
    }

    const normName = normalizeName(sp.name);
    let canonical = verifiedImageMap.get(slug) || nameToVerified.get(normName);

    const oldImg = sp.imageUrl || sp.photo;
    const oldIsReal = oldImg && !oldImg.includes('dicebear');

    // Check auction pool membership
    const inAuctionPool = offPlayers.some(p => normalizeSlug(p.id) === slug || normalizeName(p.name) === normName);

    if (inAuctionPool) {
      if (canonical && canonical.imageUrl) {
        if (oldImg === canonical.imageUrl) {
          auditReport.samePlayerSameImage.push({
            team: teamId,
            id: slug,
            name: canonical.name,
            imageUrl: canonical.imageUrl
          });
        } else {
          auditReport.samePlayerDifferentImageSynchronized.push({
            team: teamId,
            id: slug,
            name: canonical.name,
            previousRetentionImage: oldImg,
            canonicalAuctionPoolImage: canonical.imageUrl
          });
        }
      }
    } else {
      auditReport.retentionMissingFromAuctionPool.push({
        team: teamId,
        id: slug,
        name: sp.name,
        hasVerifiedImage: !!(canonical && canonical.imageUrl)
      });
    }

    if (canonical && canonical.imageUrl) {
      // Synchronize player with canonical image and canonical ID
      updatedTeamList.push({
        ...sp,
        id: slug,
        playerId: slug,
        name: canonical.name || sp.name,
        imageUrl: canonical.imageUrl,
        photo: canonical.imageUrl,
        imageVerified: true,
        imageStatus: 'VERIFIED'
      });
    } else {
      // Missing verified image! Never copy from a different player!
      auditReport.missingRetentionImages[teamId].push({
        id: slug,
        name: sp.name
      });

      updatedTeamList.push({
        ...sp,
        id: slug,
        playerId: slug,
        imageUrl: oldIsReal ? oldImg : null,
        photo: oldIsReal ? oldImg : null,
        imageVerified: false,
        imageStatus: 'MISSING'
      });
    }
  }

  updatedSquads[teamId] = updatedTeamList;
}

console.log('--- SYNC RESULTS ---');
console.log('✅ Same player + same image:', auditReport.samePlayerSameImage.length);
console.log('🔄 Same player + different image SYNCHRONIZED to canonical:', auditReport.samePlayerDifferentImageSynchronized.length);
console.log('⚠️ Retention players not in auction pool (franchise retentions):', auditReport.retentionMissingFromAuctionPool.length);
console.log('⚠️ Name/identity aliases normalized:', auditReport.nameMismatchesResolved.length);

let totalMissing = 0;
for (const tid in auditReport.missingRetentionImages) {
  const m = auditReport.missingRetentionImages[tid];
  totalMissing += m.length;
  console.log(`\n${tid} Missing (${m.length}):`);
  for (const p of m) {
    console.log(`  - ${p.name} (id: ${p.id})`);
  }
}
console.log('\nTotal Missing Retention Images:', totalMissing);

fs.writeFileSync('src/data/teamsSquads2026.json', JSON.stringify(updatedSquads, null, 2));
fs.writeFileSync('scripts/auditCanonicalSyncResult.json', JSON.stringify(auditReport, null, 2));
