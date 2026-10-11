import fs from 'fs';

const players = JSON.parse(fs.readFileSync('src/data/seedPlayers.json', 'utf8'));

const setSummary = {};

for (let s = 1; s <= 15; s++) {
  setSummary[s] = {
    setNumber: s,
    setCode: '',
    setName: '',
    players: 0,
    verifiedPhotos: 0,
    missingPhotos: 0,
    brokenPhotos: 0,
    identityUnverified: 0,
    statsVerified: 0,
    formVerified: 0,
  };
}

let totalPlayers = players.length;
let totalImagesSupplied = 0;
let totalImagesVerified = 0;
let totalMissingImages = 0;
let totalBrokenImages = 0;
let totalIdentityUnverified = 0;
let totalPlayersWithStats = 0;
let totalPlayersWithForm = 0;

players.forEach((p) => {
  const sNum = p.setNumber || p.setNo || 1;
  const s = setSummary[sNum];
  if (s) {
    s.setCode = p.setCode || p.currentSet;
    s.setName = p.setName || p.set;
    s.players++;

    if (p.imageUrl) {
      totalImagesSupplied++;
      if (p.imageVerified && p.imageStatus === 'VERIFIED') {
        s.verifiedPhotos++;
        totalImagesVerified++;
      } else if (p.imageStatus === 'IDENTITY_UNVERIFIED') {
        s.identityUnverified++;
        totalIdentityUnverified++;
      } else if (p.imageStatus === 'BROKEN') {
        s.brokenPhotos++;
        totalBrokenImages++;
      }
    } else {
      s.missingPhotos++;
      totalMissingImages++;
    }

    if (p.stats && p.stats.matches > 0) {
      s.statsVerified++;
      totalPlayersWithStats++;
    }

    if (p.form && p.form.last5Matches && p.form.last5Matches.length > 0) {
      s.formVerified++;
      totalPlayersWithForm++;
    }
  }
});

console.log('================================================================================');
console.log('                 IPL MOCK AUCTION — AUDIT REPORT FOR SETS 1–15');
console.log('================================================================================');
for (let s = 1; s <= 15; s++) {
  const row = setSummary[s];
  console.log(
    `SET ${String(row.setNumber).padStart(2)} (${row.setCode.padEnd(5)} — ${row.setName.padEnd(25)}): ` +
    `Players: ${String(row.players).padStart(2)} | ` +
    `Verified Photos: ${String(row.verifiedPhotos).padStart(2)} | ` +
    `Missing Photos: ${String(row.missingPhotos).padStart(2)} | ` +
    `Stats: ${String(row.statsVerified).padStart(2)} | ` +
    `Form: ${String(row.formVerified).padStart(2)}`
  );
}
console.log('--------------------------------------------------------------------------------');
console.log(`Total players processed:            ${totalPlayers}`);
console.log(`Total images supplied:             ${totalImagesSupplied}`);
console.log(`Total images verified:             ${totalImagesVerified}`);
console.log(`Total missing images:              ${totalMissingImages}`);
console.log(`Total broken images:               ${totalBrokenImages}`);
console.log(`Total identity-unverified images:  ${totalIdentityUnverified}`);
console.log(`Total players with 2026 stats:     ${totalPlayersWithStats}`);
console.log(`Total players with recent-form:    ${totalPlayersWithForm}`);
console.log('================================================================================');
