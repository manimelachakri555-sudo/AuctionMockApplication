import fs from 'fs';

const off = JSON.parse(fs.readFileSync('src/data/official350Players.json', 'utf8'));
console.log('Total players in official350Players.json:', off.length);

const setsMap = new Map();
off.forEach((p, idx) => {
  const setNumber = p.setNumber ?? p.setIndex ?? (p.set ? parseInt(p.set.replace(/\D/g, '')) : null);
  const setCode = p.setCode || p.set || 'UNKNOWN';
  const setName = p.setName || p.setFullName || setCode;
  const key = `${setNumber || ''}_${setCode}`;

  if (!setsMap.has(key)) {
    setsMap.set(key, {
      setNumber: setNumber,
      setCode: setCode,
      setName: setName,
      players: []
    });
  }
  setsMap.get(key).players.push(p);
});

console.log('Total sets count:', setsMap.size);
let idx = 1;
const sortedSets = Array.from(setsMap.values()).sort((a, b) => (a.setNumber || 999) - (b.setNumber || 999));

for (const s of sortedSets) {
  console.log(`SET ${String(idx).padStart(2, '0')} (orig setNumber: ${s.setNumber}, code: ${s.setCode}, name: "${s.setName}"): ${s.players.length} players`);
  idx++;
}
