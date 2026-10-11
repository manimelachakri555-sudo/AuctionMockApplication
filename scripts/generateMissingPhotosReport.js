import fs from 'fs';

const offPath = 'src/data/official350Players.json';
const off = JSON.parse(fs.readFileSync(offPath, 'utf8'));

const masterPath = 'src/data/masterPlayersDatabase.json';
const master = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

// Canonical sets map from SET 01 to SET 35
const setCodes = {
  1: { code: 'BA1', name: 'Capped Batters' },
  2: { code: 'AL1', name: 'Capped All-rounders' },
  3: { code: 'WK1', name: 'Capped Wicketkeepers' },
  4: { code: 'FA1', name: 'Capped Fast Bowlers' },
  5: { code: 'SP1', name: 'Capped Spinners' },
  6: { code: 'UBA1', name: 'Uncapped Batters' },
  7: { code: 'UAL1', name: 'Uncapped All-rounders' },
  8: { code: 'UWK1', name: 'Uncapped Wicketkeepers' },
  9: { code: 'UFA1', name: 'Uncapped Fast Bowlers' },
  10: { code: 'USP1', name: 'Uncapped Spinners' },
  11: { code: 'BA2', name: 'Capped Batters 2' },
  12: { code: 'AL2', name: 'Capped All-rounders 2' },
  13: { code: 'WK2', name: 'Capped Wicketkeepers 2' },
  14: { code: 'FA2', name: 'Capped Fast Bowlers 2' },
  15: { code: 'SP2', name: 'Capped Spinners 2' },
  16: { code: 'UBA2', name: 'Uncapped Batters 2' },
  17: { code: 'UAL2', name: 'Uncapped All-rounders 2' },
  18: { code: 'UWK2', name: 'Uncapped Wicketkeepers 2' },
  19: { code: 'UFA2', name: 'Uncapped Fast Bowlers 2' },
  20: { code: 'USP2', name: 'Uncapped Spinners 2' },
  21: { code: 'AL3', name: 'Capped All-rounders 3' },
  22: { code: 'FA3', name: 'Capped Fast Bowlers 3' },
  23: { code: 'UBA3', name: 'Uncapped Batters 3' },
  24: { code: 'UAL3', name: 'Uncapped All-rounders 3' },
  25: { code: 'UWK3', name: 'Uncapped Wicketkeepers 3' },
  26: { code: 'UFA3', name: 'Uncapped Fast Bowlers 3' },
  27: { code: 'USP3', name: 'Uncapped Spinners 3' },
  28: { code: 'AL4', name: 'Capped All-rounders 4' },
  29: { code: 'FA4', name: 'Capped Fast Bowlers 4' },
  30: { code: 'UBA4', name: 'Uncapped Batters 4' },
  31: { code: 'UAL4', name: 'Uncapped All-rounders 4' },
  32: { code: 'UFA4', name: 'Uncapped Fast Bowlers 4' },
  33: { code: 'USP4', name: 'Uncapped Spinners 4' },
  34: { code: 'FA5', name: 'Capped Fast Bowlers 5' },
  35: { code: 'UAL5', name: 'Uncapped All-rounders 5' },
};

let missingPlayers = [];
let playersWithPhotos = 0;

off.forEach((p, idx) => {
  const url = p.imageUrl || p.photo || '';
  const isMissing = !url || url.includes('dicebear.com') || p.imageStatus === 'MISSING';

  const setNum = p.setNumber || p.setNo || 1;
  const setMeta = setCodes[setNum] || { code: p.setCode || `SET${setNum}`, name: p.setName || `Set ${setNum}` };

  if (isMissing) {
    p.imageUrl = null;
    p.photo = null;
    p.imageVerified = false;
    p.imageStatus = 'MISSING';

    missingPlayers.push({
      index: missingPlayers.length + 1,
      id: p.id || p.playerId || `player-${idx + 1}`,
      playerId: p.playerId || p.id || `player-${idx + 1}`,
      name: p.name,
      fullName: p.fullName || p.name,
      role: p.role,
      country: p.country || 'India',
      setNumber: setNum,
      setCode: setMeta.code,
      setName: setMeta.name,
      setLabel: `SET ${String(setNum).padStart(2, '0')} — ${setMeta.code}`
    });
  } else {
    playersWithPhotos++;
    p.imageVerified = true;
    p.imageStatus = 'VERIFIED';
  }
});

fs.writeFileSync(offPath, JSON.stringify(off, null, 2));

// Sync missing status to master
const missingIdSet = new Set(missingPlayers.map(p => p.playerId));
master.forEach(m => {
  const mId = m.id || m.playerId;
  if (missingIdSet.has(mId)) {
    m.imageUrl = null;
    m.photo = null;
    m.imageVerified = false;
    m.imageStatus = 'MISSING';
  }
});
fs.writeFileSync(masterPath, JSON.stringify(master, null, 2));

console.log('=== PHOTO COMPLETION METRICS ===');
console.log(`Total players: ${off.length}`);
console.log(`Players with photos: ${playersWithPhotos}`);
console.log(`Players without photos: ${missingPlayers.length}`);
console.log(`Photo coverage: ${playersWithPhotos} / ${off.length} (${((playersWithPhotos / off.length) * 100).toFixed(1)}%)`);

// Group missing players by set
const groupedBySet = {};
missingPlayers.forEach(p => {
  if (!groupedBySet[p.setLabel]) {
    groupedBySet[p.setLabel] = [];
  }
  groupedBySet[p.setLabel].push(p);
});

fs.writeFileSync('scripts/missingPlayersReport.json', JSON.stringify({
  totalPlayers: off.length,
  playersWithPhotos,
  playersWithoutPhotos: missingPlayers.length,
  missingPlayers,
  groupedBySet
}, null, 2));

console.log('\n=== MISSING PLAYER PHOTOS REPORT PREVIEW ===');
for (const [setLabel, pList] of Object.entries(groupedBySet)) {
  console.log(`\n${setLabel} (${pList.length} players):`);
  pList.forEach(p => {
    console.log(`  - ${p.name} | ID: ${p.playerId}`);
  });
}
