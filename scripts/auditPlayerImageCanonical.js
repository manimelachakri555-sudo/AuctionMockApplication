import fs from 'fs';

const offPlayers = JSON.parse(fs.readFileSync('src/data/official350Players.json', 'utf8'));
const masterPlayers = JSON.parse(fs.readFileSync('src/data/masterPlayersDatabase.json', 'utf8'));
const squads = JSON.parse(fs.readFileSync('src/data/teamsSquads2026.json', 'utf8'));

// Build comprehensive canonical maps from Auction Pool
const poolById = new Map();
const poolByName = new Map();

function cleanName(n) {
  return (n || '')
    .toLowerCase()
    .replace(/[.\-_']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

for (const p of offPlayers) {
  if (p.id) poolById.set(p.id, p);
  if (p.playerId) poolById.set(p.playerId, p);
  poolByName.set(cleanName(p.name), p);
  if (p.fullName) poolByName.set(cleanName(p.fullName), p);
}

// Master map for non-auction pool players (e.g. retained superstars like Kohli, Bumrah, Rohit, Dhoni)
const masterById = new Map();
const masterByName = new Map();
for (const p of masterPlayers) {
  if (p.id) masterById.set(p.id, p);
  if (p.playerId) masterById.set(p.playerId, p);
  masterByName.set(cleanName(p.name), p);
  if (p.fullName) masterByName.set(cleanName(p.fullName), p);
}

const audit = {
  samePlayerSameImage: [],
  samePlayerDifferentImage: [],
  retentionMissingFromAuctionPool: [],
  missingRetentionImagesByTeam: {},
  nameMismatches: [],
  possibleDuplicates: []
};

for (const tid in squads) {
  audit.missingRetentionImagesByTeam[tid] = [];
  const teamPlayers = squads[tid];

  for (const sp of teamPlayers) {
    const sNorm = cleanName(sp.name);
    // Find matching auction pool player
    let match = poolById.get(sp.id) || poolByName.get(sNorm);
    
    // Check known aliases
    if (!match) {
      if (sNorm === 'kl rahul' || sNorm === 'k l rahul') match = poolByName.get('kl rahul');
      if (sNorm === 'm shami' || sNorm === 'mohammed shami') match = poolByName.get('mohammed shami');
      if (sNorm === 'ms dhoni' || sNorm === 'm s dhoni') match = poolByName.get('ms dhoni');
    }

    const spImg = sp.imageUrl || sp.photo;
    const isDicebear = !spImg || spImg.includes('dicebear');

    if (match) {
      const matchImg = match.imageUrl || match.photo;
      if (sp.id !== match.id) {
        audit.nameMismatches.push({
          team: tid,
          squadPlayer: { id: sp.id, name: sp.name },
          poolPlayer: { id: match.id, name: match.name }
        });
      }
      if (spImg === matchImg) {
        audit.samePlayerSameImage.push({
          playerId: match.id,
          name: match.name,
          team: tid,
          imageUrl: matchImg
        });
      } else {
        audit.samePlayerDifferentImage.push({
          playerId: match.id,
          name: match.name,
          team: tid,
          squadImg: spImg,
          auctionPoolImg: matchImg
        });
      }
    } else {
      // In retention squad, but NOT in auction pool
      // Check if in master
      const inMaster = masterById.get(sp.id) || masterByName.get(sNorm);
      const masterImg = inMaster?.imageUrl || inMaster?.photo;
      const masterHasRealImg = masterImg && !masterImg.includes('dicebear');

      audit.retentionMissingFromAuctionPool.push({
        team: tid,
        id: sp.id,
        name: sp.name,
        hasImageInSquad: !isDicebear,
        hasImageInMaster: masterHasRealImg,
        squadImg: spImg,
        masterImg: masterImg
      });

      if (isDicebear && !masterHasRealImg) {
        audit.missingRetentionImagesByTeam[tid].push({
          id: sp.id,
          name: sp.name
        });
      }
    }
  }
}

console.log('=== SUMMARY AUDIT ===');
console.log('✅ Same player + same image:', audit.samePlayerSameImage.length);
console.log('❌ Same player + different image:', audit.samePlayerDifferentImage.length);
console.log('⚠️ Retention player missing from auction pool:', audit.retentionMissingFromAuctionPool.length);
console.log('⚠️ Name/ID mismatches between squad and auction pool:', audit.nameMismatches.length);

let totalMissingImages = 0;
for (const tid in audit.missingRetentionImagesByTeam) {
  const missing = audit.missingRetentionImagesByTeam[tid];
  totalMissingImages += missing.length;
  if (missing.length > 0) {
    console.log(`Team ${tid} has ${missing.length} missing retention images:`, missing.map(m => m.name).join(', '));
  }
}
console.log('Total players truly missing images across retention:', totalMissingImages);

fs.writeFileSync('scripts/auditResult.json', JSON.stringify(audit, null, 2));
