import fs from 'fs';

const userImages = {
  'Krish Bhagat': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpuiU5RNnP5rHXUT4iXQfVochMb1vE3AzdubT1czHvA&s=10',
  'KL Rahul': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqBcqILwJEVRh0mbf9aaCZwbZXxUBLeC0XRYGIJODmQ&s=10',
  'Madhav Tiwari': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxkrRwz2fWriGTJmhgmYSNSOu08hJJuucGLZx7Z-Lmg&s=10',
  'Auqib Nabi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUW1SP0TNsNMLaIjUsUJ6WP7nAWu3Yd0DOQlOijJ2AsA&s=10',
  'Kuldeep Yadav': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRag41-LSyCAyYGS8qRRax3eG8gSi-fQSZsIi5r_JK8tQ&s=10',
  'Shubman Gill': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0E3Ac0yA7yB1m60Nzy99J8zOsPbiVGIZJJAA36G8_w&s=10',
  'Kagiso Rabada': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AY7wI4z2u1oExoZKDLp8dmGa_4dT0L3bZMvDmEMx1Q&s=10',
  'Mohammed Siraj': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IMYfqytpBgVjKoYR4WZXkgUNGhpIRL725yZeyJ5OFw&s=10',
  'Rashid Khan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMQ8GHlEd_BzAC7xKB6LeOdDnGGP_kI0BVtNZR78SiQ&s=10',
  'Ishant Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY9zIGkUuEuaV1MnPHmkxIhhSlREKbsmo7tvOBwZfdA&s=10',
  'Jos Buttler': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKvwuGeLS_QDX8tDy213bNYpST43iooilymjyKJB8bA&s=10',
  'Sai Kishore': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqUbQcrVJBZ6xi7LxDSTSyvAxEu6WDtG0rpqlY1XtDg&s=10',
  'Daksh Kamra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsAplHBez0ZHbF-9Nxh4t_DFqhSI7JF_1Y8cUNES17w&s=10',
  'Sarthak Ranjan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kd_rrarFiTg68EiJnr0z2stNa-lw6BPDtQP3CaJLmA&s=10',
  'Rinku Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwihMCv4Waegda3OwnMtIXeQC8Sfn96Xf-tASgPg0KZg&s=10',
  'Sunil Narine': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcqVF-JJeUUu5EIcvaLhyWc0Xm06BqXRDd5-iEKdZRA&s=10',
  'Harshit Rana': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZfdBxpuUAKUVL8KJadL2r6i6r6gTWqPWp2RixMBfWg&s=10',
  'Mohammed Shami': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBkUthuhEFKNBL3kG1Tyw-746pbYoDypRGtpFv3jAGQ&s=10',
  'Nicholas Pooran': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnLhhGA9Wk8LKLeRbkAeEx3_HiihQHtt4NDIbaVSFkw&s=10',
  'Rishabh Pant': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06JvQ0T2LbJh5cZU0bavUyxNtyoKn6bO05xacYV3r3w&s=10',
  'Shreyas Iyer': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy63Nqc93cplxI3n5J5Om1YC99VgC2g611_1wwtonNpw&s=10',
  'Yashasvi Jaiswal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fH7dsiaINJTmmmfiQDXyjKTgqVDoIhgNzIHyH3DA7g&s=10',
  'Vaibhav Sooryavanshi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSergR4SqjR0wIpIg3VBLfsq7Zj7wR9mJ4D4okS1bejsQ&s=10',
  'Emanjot Singh Chahal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2mit7IhgKaD1qWT_JhnwKiDu82qAW2BfGWMasl4ftg&s=10',
  'Ravindra Jadeja': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquWuWHFpkfQs-RtcJPR0IU0xLONuxvFFFK5vCBlWW_g&s=10',
  'Vihaan Malhotra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchbsycplSMhB_IGlQFeYQRlW4uMYCddDGN_v1pAmOhw&s=10',
  'Kanishk Chouhan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWdWunKJ3NSLTk8xN6U24-2CNNojd8ZsXFMISGcPZEyQ&s=10',
  'Travis Head': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1cKOHlMWm04uWcc9hcSw7bVIRyT4u4sITg5ZAURNCw&s=10',
  'Ravichandran Smaran': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGJA4GPl21XYih0WqDk52jetSUf6MsW7rDAG2dk2U4w&s=10',
  'Pat Cummins': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCYe5T7J-YbQhv7TnXGX2XK5gZnTCN-rl19Hx-zyKug&s=10',
  'Dilshan Madushanka': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjbtFZBafH0p1FLE739bQ3jddr6ebxccBtT6GcPEnDw&s=10',
  'Heinrich Klaasen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXwj81ZsD2PSyj1wEvfkvkPESsKyUtcAMdDaNlNlzwA&s=10',
  'Jack Edwards': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT08nB9TUK1_M901SN5mH15jitDkCuB6hB751ELBpWwA&s=10'
};

const cappedStatusMap = {
  'Krish Bhagat': 'UNCAPPED',
  'KL Rahul': 'CAPPED',
  'Madhav Tiwari': 'UNCAPPED',
  'Auqib Nabi': 'UNCAPPED',
  'Kuldeep Yadav': 'CAPPED',
  'Shubman Gill': 'CAPPED',
  'Kagiso Rabada': 'CAPPED',
  'Mohammed Siraj': 'CAPPED',
  'Rashid Khan': 'CAPPED',
  'Ishant Sharma': 'CAPPED',
  'Jos Buttler': 'CAPPED',
  'Sai Kishore': 'CAPPED',
  'Daksh Kamra': 'UNCAPPED',
  'Sarthak Ranjan': 'UNCAPPED',
  'Rinku Singh': 'CAPPED',
  'Sunil Narine': 'CAPPED',
  'Harshit Rana': 'CAPPED',
  'Mohammed Shami': 'CAPPED',
  'Nicholas Pooran': 'CAPPED',
  'Rishabh Pant': 'CAPPED',
  'Shreyas Iyer': 'CAPPED',
  'Yashasvi Jaiswal': 'CAPPED',
  'Vaibhav Sooryavanshi': 'UNCAPPED',
  'Emanjot Singh Chahal': 'UNCAPPED',
  'Ravindra Jadeja': 'CAPPED',
  'Vihaan Malhotra': 'UNCAPPED',
  'Kanishk Chouhan': 'UNCAPPED',
  'Travis Head': 'CAPPED',
  'Ravichandran Smaran': 'UNCAPPED',
  'Pat Cummins': 'CAPPED',
  'Dilshan Madushanka': 'CAPPED',
  'Heinrich Klaasen': 'CAPPED',
  'Jack Edwards': 'UNCAPPED'
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

// Load canonical registry
const canonicalRegistry = JSON.parse(fs.readFileSync('src/data/canonicalPlayerRegistry.json', 'utf8'));
const squads = JSON.parse(fs.readFileSync('src/data/teamsSquads2026.json', 'utf8'));
const master = JSON.parse(fs.readFileSync('src/data/masterPlayersDatabase.json', 'utf8'));
const off = JSON.parse(fs.readFileSync('src/data/official350Players.json', 'utf8'));

let appliedCount = 0;

for (const [name, url] of Object.entries(userImages)) {
  const norm = normalizeName(name);
  const slug = normalizeSlug(name);
  const cappedStatus = cappedStatusMap[name] || 'CAPPED';
  const isCapped = cappedStatus === 'CAPPED';

  // 1. Update or create in canonicalRegistry
  let foundKey = null;
  for (const k in canonicalRegistry) {
    const p = canonicalRegistry[k];
    if (
      normalizeSlug(k) === slug ||
      normalizeSlug(p.id) === slug ||
      normalizeSlug(p.playerId) === slug ||
      normalizeName(p.name) === norm ||
      normalizeName(p.canonicalName) === norm ||
      normalizeName(p.fullName) === norm ||
      (p.aliases && p.aliases.some(a => normalizeName(a) === norm))
    ) {
      foundKey = k;
      break;
    }
  }

  if (foundKey) {
    canonicalRegistry[foundKey].imageUrl = url;
    canonicalRegistry[foundKey].photo = url;
    canonicalRegistry[foundKey].imageVerified = true;
    canonicalRegistry[foundKey].imageStatus = 'VERIFIED';
    canonicalRegistry[foundKey].cappedStatus = cappedStatus;
    canonicalRegistry[foundKey].isCapped = isCapped;
  } else {
    canonicalRegistry[slug] = {
      id: slug,
      playerId: slug,
      canonicalId: slug,
      name: name,
      canonicalName: name,
      fullName: name,
      imageUrl: url,
      photo: url,
      imageVerified: true,
      imageStatus: 'VERIFIED',
      cappedStatus: cappedStatus,
      isCapped: isCapped,
      role: 'All-Rounder',
      specialism: 'All-Rounder',
      country: 'India',
      countryCode: 'IN',
      isOverseas: false,
      aliases: [name]
    };
  }

  // 2. Update in squads
  for (const tid in squads) {
    for (const sp of squads[tid]) {
      if (
        normalizeSlug(sp.id) === slug ||
        normalizeSlug(sp.playerId) === slug ||
        normalizeName(sp.name) === norm ||
        normalizeName(sp.fullName) === norm
      ) {
        sp.imageUrl = url;
        sp.photo = url;
        sp.imageVerified = true;
        sp.imageStatus = 'VERIFIED';
        sp.cappedStatus = cappedStatus;
        sp.isCapped = isCapped;
      }
    }
  }

  // 3. Update in master
  for (const p of master) {
    if (
      normalizeSlug(p.id) === slug ||
      normalizeSlug(p.playerId) === slug ||
      normalizeName(p.name) === norm ||
      normalizeName(p.fullName) === norm
    ) {
      p.imageUrl = url;
      p.photo = url;
      p.imageVerified = true;
      p.imageStatus = 'VERIFIED';
      p.cappedStatus = cappedStatus;
      p.isCapped = isCapped;
    }
  }

  // 4. Update in official350
  for (const p of off) {
    if (
      normalizeSlug(p.id) === slug ||
      normalizeSlug(p.playerId) === slug ||
      normalizeName(p.name) === norm ||
      normalizeName(p.fullName) === norm
    ) {
      p.imageUrl = url;
      p.photo = url;
      p.imageVerified = true;
      p.imageStatus = 'VERIFIED';
      p.cappedStatus = cappedStatus;
      p.isCapped = isCapped;
    }
  }

  appliedCount++;
}

console.log(`Successfully processed ${appliedCount} player images.`);

// Write back updated datasets
fs.writeFileSync('src/data/canonicalPlayerRegistry.json', JSON.stringify(canonicalRegistry, null, 2));
fs.writeFileSync('src/data/teamsSquads2026.json', JSON.stringify(squads, null, 2));
fs.writeFileSync('src/data/masterPlayersDatabase.json', JSON.stringify(master, null, 2));
fs.writeFileSync('src/data/official350Players.json', JSON.stringify(off, null, 2));
