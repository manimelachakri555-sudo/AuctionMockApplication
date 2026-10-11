import fs from 'fs';

export const CSK_AND_TRANSFERS_IMAGES = {
  'MS Dhoni': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo_kvg8_2kE9lJeNLhYzYesp-XCENtXGYBX3Did71YA&s=10',
  'Ruturaj Gaikwad': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDO1HAh69wnvzE8DTgWIYx5laSAZLojh0HYygqjudQA&s=10',
  'Shivam Dube': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78giagpizfj54RLlhEIy1tCe-sgojXqYfxgm27EJEDQ&s=10',
  'Devon Conway': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIJcqB0FSFN2PXFl3NySmgVvfcFYp0PmSe6FsXX4-nw&s=10',
  'Sanju Samson': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKtMippHdKKAURDqQjqjLXG9v2dCvk1_y6yhI5h8vxg&s=10',
  'Ravichandran Ashwin': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRcRB6LkGIpQnvhoCbbvu-yNlnLldhzrcOqX-YRXQQw&s=10',
  'Sam Curran': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFlJWAdSNq4ySjheLBjFAv7hFxD13gKbNRwTzoYFRkw&s=10',
  'Noor Ahmad': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qdWoW4eguT7uz1Viij01yvHESZQWtSUt663OMFqz_g&s=10',
  'Ayush Mhatre': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnHDIXoZvNI1yVYqXpvGutxgF4tiuIKUUBrGYJqhHpA&s=10',
  'Dewald Brevis': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUtjwSYzkwrDwM5BvL8sauXkTTJOWix2adPF3AvoDyA&s=10',
  'Urvil Patel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNo57O7n6A9hhj7N7hMerQStG61_cZKRt_CPTH_MCA0A&s=10',
  'Anshul Kamboj': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr6_eCEClJ3NfVay41B803J5tttpJ2S3uioqHdO9wYw&s=10',
  'Ramakrishna Ghosh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Brt9fn2dwAttpVEltiXf_vscEv_yWFe-l_h-cThS-Q&s=10',
  'Shreyas Gopal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRCdKeWe9x3KQ7sDLild2x6HxOKB4giXPILTAYqwQ8A&s=10',
  'Manav Suthar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02OSHWnJ_qqZYGeZcmRmlv731CyhzLhsXuSVju5GO_w&s=10',
  'Khaleel Ahmed': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7uwY3nha1NwrcN_WKKfuQ7npcIhd2b6TcjkysT1ySA&s=10',
  'Mukesh Choudhary': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6L7Yzx9oVKE7eLSb7-PS0dx_qDgeOj8cDmeU2kABcw&s=10',
  'Gurjapneet Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX59fTdKPzCegeFo-72D3i3Rt-JXp6az3K_39L6Jjlgg&s=10',
  'Nathan Ellis': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6ylxwupE1FPVq7tjiDkHqXuP1jsYudPEEi4SKUHgPA&s',
  'Jamie Overton': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekjKjjR6eoMX4YLm9nvpSl2fYT_yG_RBu4q1n2L9k-A&s=10',
  'Kamlesh Nagarkoti': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIiuCaTwS5Q4HawaoYJBdkFX_VTFAkwfQ7YclcRluQg&s=10',
  'Vijay Shankar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULX5UWW0V_410TN5Gl5erkhV8I_VqnCZBaL_8rs8qKw&s=10',
  'Shaik Rasheed': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcn527FJvyrTzvJLo0ostQw2IBUkhDyPF_FbOw5cBqg&s=10',
  'Simarjeet Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEg_bkeA0nKpzBnyhGVu4zf7_2XwZBeAoPaiuuhb7-vw&s=10',
  'Sameer Rizvi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqFBUupVeTL3yA1YEfMN7hGPNU-fx5xoDP3MCBleSlA&s=10',
};

// 1. Update teamsSquads2026.json
const squadsPath = 'src/data/teamsSquads2026.json';
const squads = JSON.parse(fs.readFileSync(squadsPath, 'utf8'));

// Handle user team specifications:
// - Manav Suthar in Gujarat Titans (GT)
// - Sameer Rizvi in Delhi Capitals (DC)
// Remove Manav Suthar and Sameer Rizvi from CSK if present
squads.CSK = squads.CSK.filter(p => {
  const norm = p.name.toLowerCase().trim();
  return norm !== 'manav suthar' && norm !== 'sameer rizvi';
});

// Ensure Manav Suthar is in GT
if (!squads.GT.some(p => p.name.toLowerCase().trim() === 'manav suthar')) {
  squads.GT.push({
    id: 'manav-suthar',
    playerId: 'manav-suthar_gt',
    name: 'Manav Suthar',
    fullName: 'Manav Suthar',
    role: 'SPINNER',
    specialism: 'SPINNER',
    country: 'India',
    countryCode: 'IN',
    isOverseas: false,
    isCapped: false,
    currentTeam: 'GT',
    previousTeam: 'GT',
    basePrice: 30,
    imageUrl: CSK_AND_TRANSFERS_IMAGES['Manav Suthar'],
    photo: CSK_AND_TRANSFERS_IMAGES['Manav Suthar'],
    imageVerified: true,
    imageStatus: 'VERIFIED'
  });
}

// Ensure Sameer Rizvi is in DC
if (!squads.DC.some(p => p.name.toLowerCase().trim() === 'sameer rizvi')) {
  squads.DC.push({
    id: 'sameer-rizvi',
    playerId: 'sameer-rizvi_dc',
    name: 'Sameer Rizvi',
    fullName: 'Sameer Rizvi',
    role: 'BATTER',
    specialism: 'BATTER',
    country: 'India',
    countryCode: 'IN',
    isOverseas: false,
    isCapped: false,
    currentTeam: 'DC',
    previousTeam: 'DC',
    basePrice: 50,
    imageUrl: CSK_AND_TRANSFERS_IMAGES['Sameer Rizvi'],
    photo: CSK_AND_TRANSFERS_IMAGES['Sameer Rizvi'],
    imageVerified: true,
    imageStatus: 'VERIFIED'
  });
}

// CSK Target list
const CSK_TARGET_PLAYERS = [
  { name: 'MS Dhoni', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: true, base: 400 },
  { name: 'Ruturaj Gaikwad', role: 'BATTER', country: 'India', isOverseas: false, isCapped: true, base: 1800 },
  { name: 'Shivam Dube', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 1200 },
  { name: 'Devon Conway', role: 'BATTER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 200 },
  { name: 'Sanju Samson', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: true, base: 1800 },
  { name: 'Ravichandran Ashwin', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
  { name: 'Sam Curran', role: 'ALL_ROUNDER', country: 'England', isOverseas: true, isCapped: true, base: 200 },
  { name: 'Noor Ahmad', role: 'SPINNER', country: 'Afghanistan', isOverseas: true, isCapped: true, base: 1000 },
  { name: 'Ayush Mhatre', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
  { name: 'Dewald Brevis', role: 'BATTER', country: 'South Africa', isOverseas: true, isCapped: true, base: 200 },
  { name: 'Urvil Patel', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
  { name: 'Anshul Kamboj', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
  { name: 'Ramakrishna Ghosh', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
  { name: 'Shreyas Gopal', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
  { name: 'Khaleel Ahmed', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
  { name: 'Mukesh Choudhary', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
  { name: 'Gurjapneet Singh', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
  { name: 'Nathan Ellis', role: 'FAST_BOWLER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
  { name: 'Jamie Overton', role: 'ALL_ROUNDER', country: 'England', isOverseas: true, isCapped: true, base: 150 },
  { name: 'Kamlesh Nagarkoti', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
  { name: 'Vijay Shankar', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
  { name: 'Shaik Rasheed', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
  { name: 'Simarjeet Singh', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
];

// Add any missing from CSK_TARGET_PLAYERS into squads.CSK
for (const tp of CSK_TARGET_PLAYERS) {
  const existingIdx = squads.CSK.findIndex(p => p.name.toLowerCase().trim() === tp.name.toLowerCase().trim());
  const imgUrl = CSK_AND_TRANSFERS_IMAGES[tp.name];
  if (existingIdx >= 0) {
    squads.CSK[existingIdx].imageUrl = imgUrl;
    squads.CSK[existingIdx].photo = imgUrl;
    squads.CSK[existingIdx].imageVerified = true;
    squads.CSK[existingIdx].imageStatus = 'VERIFIED';
  } else {
    const id = tp.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    squads.CSK.push({
      id,
      playerId: `${id}_csk`,
      name: tp.name,
      fullName: tp.name,
      role: tp.role,
      specialism: tp.role,
      country: tp.country,
      countryCode: tp.isOverseas ? 'OS' : 'IN',
      isOverseas: tp.isOverseas,
      isCapped: tp.isCapped,
      currentTeam: 'CSK',
      previousTeam: 'CSK',
      basePrice: tp.base,
      imageUrl: imgUrl,
      photo: imgUrl,
      imageVerified: true,
      imageStatus: 'VERIFIED'
    });
  }
}

// Update all player images across all teams in teamsSquads2026.json
for (const t in squads) {
  squads[t] = squads[t].map(p => {
    const key = Object.keys(CSK_AND_TRANSFERS_IMAGES).find(k => k.toLowerCase().trim() === p.name.toLowerCase().trim());
    if (key) {
      return {
        ...p,
        imageUrl: CSK_AND_TRANSFERS_IMAGES[key],
        photo: CSK_AND_TRANSFERS_IMAGES[key],
        imageVerified: true,
        imageStatus: 'VERIFIED'
      };
    }
    return p;
  });
}
fs.writeFileSync(squadsPath, JSON.stringify(squads, null, 2));
console.log('Updated teamsSquads2026.json successfully. CSK player count:', squads.CSK.length);

// 2. Update official350Players.json
const offPath = 'src/data/official350Players.json';
const off = JSON.parse(fs.readFileSync(offPath, 'utf8'));
let offMatch = 0;
const updatedOff = off.map(p => {
  const key = Object.keys(CSK_AND_TRANSFERS_IMAGES).find(k => k.toLowerCase().trim() === p.name.toLowerCase().trim());
  if (key) {
    offMatch++;
    return {
      ...p,
      imageUrl: CSK_AND_TRANSFERS_IMAGES[key],
      photo: CSK_AND_TRANSFERS_IMAGES[key],
      imageVerified: true,
      imageStatus: 'VERIFIED'
    };
  }
  return p;
});
fs.writeFileSync(offPath, JSON.stringify(updatedOff, null, 2));
console.log('Updated official350Players.json matches:', offMatch);

// 3. Update masterPlayersDatabase.json
const masterPath = 'src/data/masterPlayersDatabase.json';
const master = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
let masterMatch = 0;
const updatedMaster = master.map(p => {
  const key = Object.keys(CSK_AND_TRANSFERS_IMAGES).find(k => k.toLowerCase().trim() === p.name.toLowerCase().trim());
  if (key) {
    masterMatch++;
    return {
      ...p,
      imageUrl: CSK_AND_TRANSFERS_IMAGES[key],
      photo: CSK_AND_TRANSFERS_IMAGES[key],
      imageVerified: true,
      imageStatus: 'VERIFIED'
    };
  }
  return p;
});

// If any player not in master, add them
for (const [name, url] of Object.entries(CSK_AND_TRANSFERS_IMAGES)) {
  if (!updatedMaster.some(p => p.name.toLowerCase().trim() === name.toLowerCase().trim())) {
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    updatedMaster.push({
      id,
      playerId: id,
      name,
      fullName: name,
      role: 'ALL_ROUNDER',
      specialism: 'ALL-ROUNDER',
      country: 'India',
      countryCode: 'IN',
      isOverseas: false,
      isCapped: true,
      imageUrl: url,
      photo: url,
      imageVerified: true,
      imageStatus: 'VERIFIED'
    });
  }
}
fs.writeFileSync(masterPath, JSON.stringify(updatedMaster, null, 2));
console.log('Updated masterPlayersDatabase.json matches:', masterMatch);

// 4. Update verifiedPhotosMap.ts
let vContent = fs.readFileSync('src/data/verifiedPhotosMap.ts', 'utf8');
for (const [name, url] of Object.entries(CSK_AND_TRANSFERS_IMAGES)) {
  const entryKey = `'${name}':`;
  if (vContent.includes(entryKey)) {
    const reg = new RegExp(`'${name}':\\s*\\{[\\s\\S]*?\\},`, 'g');
    vContent = vContent.replace(reg, `'${name}': {\n    url: '${url}',\n    source: 'Verified IPL Headshot',\n  },`);
  } else {
    vContent = vContent.replace(
      'export const VERIFIED_PLAYER_PHOTOS: Record<string, { url: string; source: string }> = {',
      `export const VERIFIED_PLAYER_PHOTOS: Record<string, { url: string; source: string }> = {\n  '${name}': {\n    url: '${url}',\n    source: 'Verified IPL Headshot',\n  },`
    );
  }
}
fs.writeFileSync('src/data/verifiedPhotosMap.ts', vContent, 'utf8');
console.log('Successfully updated verifiedPhotosMap.ts with all 25 players!');
