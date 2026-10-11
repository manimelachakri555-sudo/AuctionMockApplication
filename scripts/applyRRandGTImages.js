import fs from 'fs';

export const RR_GT_PROVIDED_IMAGES = {
  // RR
  'Yashasvi Jaiswal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZS8cn1N59YuXzrmeBo1_9tBjIXZB5wjJq1PPJ3nmHLA&s=10',
  'Ravindra Jadeja': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquWuWHFpkfQs-RtcJPR0IU0xLONuxvFFFK5vCBlWW_g&s=10',
  'Ravi Bishnoi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqFK4x_MRKYUR3KCDRX8nbIzqX_Qa0uD2OJZRty73FQ&s=10',
  'Riyan Parag': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHccwFy26HI__ANvDSihD2n3B5EHfzp7eaeo_hYIHasQ&s=10',
  'Dhruv Jurel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G5ex3bRqrtI7qj3UbmlsyaA95G0x7I19xddMwz5fcQ&s=10',
  'Sandeep Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqAAbKUU3Q2JQHAd18eRQQpDzMJ7OBo4wRc90rSYcAg&s=10',
  'Jofra Archer': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1G6RPVezho1TrVOG6srZZL1g7jXl2czKIpuJT_B2dw&s=10',
  'Shimron Hetmyer': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzKOITr9ZHXipvRxG3sBl3IEolYSJClOLGMl8hOUxZw&s=10',
  'Tushar Deshpande': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTpfy_EkdNR2xUEjA6IbPFSP29qQwWOLMt0vHG2vdqQ&s=10',
  'Sushant Mishra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3lNvpUwL6P4JWHJjTFvMSoo5o0BrPKDyK83EUeIINw&s=10',
  'Kuldeep Sen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaNEnyZZPFnnYHZjEx8UalN8Rr7rpvqPr-R3knp0nWA&s=10',
  'Adam Milne': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNMfqH20X_iCrWAAdKAHV2CPMvVNCsDCHjAAOZSQ0Vw&s=10',
  'Nandre Burger': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9NcsRKW49WVQ9g8JikGi9J515yVdTy19ClUSDWfFEQ&s=10',
  'Kwena Maphaka': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoYmWe__5b9qgswcxXl-slONPF7Rsqe4qN6K5fBBtCw&s=10',
  'Donovan Ferreira': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWZnA6u7wsQs6S_d_Vy7azQOoGM156kOw8lQ1yX969g&s=10',
  'Lhuan-dre Pretorius': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEKaLkgHlfYPQQ8zqJoA5pFAgxoaQQA14VrGsIYzceg&s',
  'Dasun Shanaka': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LyojLwBq9NCZ8BU9IPOzRkiEWVVkAkMcqqDN4D1R-w&s=10',
  'Shubham Dubey': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVogkMjMnw6h2op_M2UqJ09j7QXGHmjo2FCaAu2YThQ&s=10',
  'Vaibhav Suryavanshi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjZJZlcBwlVmQ6jjr9PSb4hoDHG5q-2m5KFEp5J4wjA&s=10',
  'Aman Rao': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzw2mjNxGY9Heveiv-AEOnE194wmS4-VwCf90dZ3bm9Q&s=10',
  'Ravi Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1_Kv7lahCXJD-DYAsvUDZkC1ZQpmK_aYZ41HeVEJ_g&s=10',
  'Yudhvir Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNdvWEsD_IDlx5aQ-QFaOgtpsgxPVXIgC-AwWz72Lbw&s=10',
  'Yash Raj Punja': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EinozMyV8hF7ZSYm7xvvCtpJYlkBef6E9iRIUQRItA&s=10',
  'Vignesh Puthur': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVLNSKCyoWwq2_Z9QKr2Ucwu00n1poOwre1Wik28dyA&s=10',
  'Brijesh Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRviDkAyZ_1SkammRi6IWaV-wNJmEc-Zt-d-nioCRoFA&s=10',

  // GT
  'Shubman Gill': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6jhtOJpkDRHcVM7LC-ta4s-v_INHNMpPSxxLykBX1g&s=10',
  'Rashid Khan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMQ8GHlEd_BzAC7xKB6LeOdDnGGP_kI0BVtNZR78SiQ&s=10',
  'Mohammed Siraj': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IMYfqytpBgVjKoYR4WZXkgUNGhpIRL725yZeyJ5OFw&s=10',
  'KL Rahul': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqBcqILwJEVRh0mbf9aaCZwbZXxUBLeC0XRYGIJODmQ&s=10',
  'Glenn Phillips': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNjNy5_c7Jo2vWBoGlkFK6OzcdjbLxlvrlAD6aIV3jA&s=10',
  'Kagiso Rabada': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTdeJK0l2kjB7JUuMkDlmUDeqNVKXdu4v_nqUsyJ8HQ&s=10',
  'Sai Sudharsan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVx_cQBRVid4H6HldyFuBEvD_n6zKUHUaJd_imsjO41g&s=10',
  'Rahul Tewatia': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRig2cpefTdmB8o2NEP2m9lmlx-mj7S6qzbU1wf777ihw&s=10',
  'Shahrukh Khan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtMPvT3DdrvhxIJePIgZEzp6wWgGLr1_Z5AyXUecy3A&s=10',
  'David Miller': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaPmpnTQlUdY2a95DyV6fm0fsi-TJOe0Xm651vZWzTA&s=10',
  'Prasidh Krishna': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YMpA5d13yUQCOoawZqgs2cqPv3XAdSWGYXd8_qiD_g&s=10',
  'Washington Sundar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKl3WKslp3Echqvqhfq92kFkVMBJGbBYk6BtBlniW9w&s=10',
  'Nishant Sindhu': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKUKmZ-OfhG67jVjNqrQ-w2KXIX2KRQB_ufSsXgAXTQ&s=10',
  'Ishan Porel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkL33eSpWy3B4Cs85x0KMuV_kyfEpZ51A784iOOXw3Zg&s=10',
  'Arshad Khan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8igiPw9baHNWH1Bk_9c3P0yxoyp3m9etxNW9f4v7Nw&s=10',
  'Gurnoor Brar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5HS6Sm6lVpROvObetVOBNlk_nJHSDdszXRjw9nYv7ug&s=10',
  'Ashok Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgP-pP-ow7oEbRKkZhQTWwX0i_nCSHZ6tFoO5Lec68Pw&s=10',
  'Kulwant Khejroliya': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYfBoB0qqM1bK7eHos6s1YxGTspnpJ7VVutbLtmiIQQ&s=10',
  'Tom Banton': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlh-M4-_BbvB30EdNO6Lo-lz1IDOY64kWEcO5HMMMbg&s=10',
  'Luke Wood': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGilGGAk5_N4yaXFn1IqaeMAbWWI-0GoOIgkREekkXPA&s=10',
  'Jason Holder': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWpsuzaEModokBOVutGOOGs5bDL2tpVmFPGu3HR3Pkg&s=10',
  'Mahipal Lomror': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoklMKb336r6I_4FtU0kWT6M8Ahl3EZ8FwARRw5iEHg&s=10',
  'Kumar Kushagra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFp0K3SRKgxytf1V41DY0X_gKmRm9TCHOXpVDPYn81A&s=10',
  'Anuj Rawat': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VnQjv55-rot5Ly4p7d1gBIGE_f9AlHD9DUSsUKhw0g&s=10',
  'Jayant Yadav': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRng5UFL0zyPL7EwEsIULaNrHGA0ppOrAVPAQVgw5-Qw&s=10',
};

const squadsPath = 'src/data/teamsSquads2026.json';
const squads = JSON.parse(fs.readFileSync(squadsPath, 'utf8'));

const offPath = 'src/data/official350Players.json';
const off = JSON.parse(fs.readFileSync(offPath, 'utf8'));

const masterPath = 'src/data/masterPlayersDatabase.json';
const master = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

// Helper to determine if player has authentic verified photo
function hasAlreadyVerifiedPhoto(player) {
  if (!player) return false;
  const url = player.imageUrl || player.photo;
  if (!url) return false;
  if (url.includes('dicebear.com')) return false;
  if (player.imageVerified === true || player.imageStatus === 'VERIFIED') return true;
  if (url.startsWith('https://upload.wikimedia.org') || url.startsWith('https://thumb.wikimedia.org')) return true;
  return false;
}

// 1. Ensure Brijesh Sharma is in RR if not present
if (!squads.RR.some(p => p.name.toLowerCase().trim() === 'brijesh sharma')) {
  squads.RR.push({
    id: 'brijesh-sharma',
    playerId: 'brijesh-sharma_rr',
    name: 'Brijesh Sharma',
    fullName: 'Brijesh Sharma',
    role: 'ALL_ROUNDER',
    specialism: 'ALL_ROUNDER',
    country: 'India',
    countryCode: 'IN',
    isOverseas: false,
    isCapped: false,
    currentTeam: 'RR',
    previousTeam: 'RR',
    basePrice: 30,
    imageUrl: RR_GT_PROVIDED_IMAGES['Brijesh Sharma'],
    photo: RR_GT_PROVIDED_IMAGES['Brijesh Sharma'],
    imageVerified: true,
    imageStatus: 'VERIFIED'
  });
}

// 2. Transfer instruction: "kl and miller is in Delhi so add in dc"
// Ensure KL Rahul and David Miller are in DC and removed from GT
squads.GT = squads.GT.filter(p => {
  const norm = p.name.toLowerCase().trim();
  return norm !== 'kl rahul' && norm !== 'david miller';
});

// Ensure DC has KL Rahul and David Miller
if (!squads.DC.some(p => p.name.toLowerCase().trim() === 'kl rahul')) {
  squads.DC.push({
    id: 'kl-rahul',
    playerId: 'kl-rahul_dc',
    name: 'KL Rahul',
    fullName: 'KL Rahul',
    role: 'WICKET_KEEPER',
    specialism: 'WICKET_KEEPER',
    country: 'India',
    countryCode: 'IN',
    isOverseas: false,
    isCapped: true,
    currentTeam: 'DC',
    previousTeam: 'DC',
    basePrice: 200,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/KL_Rahul_in_2023.jpg',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/KL_Rahul_in_2023.jpg',
    imageVerified: true,
    imageStatus: 'VERIFIED'
  });
}

if (!squads.DC.some(p => p.name.toLowerCase().trim() === 'david miller')) {
  squads.DC.push({
    id: 'david-miller',
    playerId: 'david-miller_dc',
    name: 'David Miller',
    fullName: 'David Miller',
    role: 'BATTER',
    specialism: 'BATTER',
    country: 'South Africa',
    countryCode: 'OS',
    isOverseas: true,
    isCapped: true,
    currentTeam: 'DC',
    previousTeam: 'DC',
    basePrice: 200,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6pPLjCL-Ra_YyIjLbyXyuGiUIHIBJAcuYR81UIONsQ&s=10',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6pPLjCL-Ra_YyIjLbyXyuGiUIHIBJAcuYR81UIONsQ&s=10',
    imageVerified: true,
    imageStatus: 'VERIFIED'
  });
}

// 3. Update RR and GT squads with photos (preserving already verified photos)
let updatedRRGTCount = 0;
let preservedRRGTCount = 0;

for (const team of ['RR', 'GT']) {
  squads[team] = squads[team].map(p => {
    const norm = p.name.toLowerCase().trim();
    const matchKey = Object.keys(RR_GT_PROVIDED_IMAGES).find(k => k.toLowerCase().trim() === norm);
    if (!matchKey) return p;

    if (hasAlreadyVerifiedPhoto(p)) {
      preservedRRGTCount++;
      return p; // KEEP verified photo
    } else {
      updatedRRGTCount++;
      const url = RR_GT_PROVIDED_IMAGES[matchKey];
      return {
        ...p,
        imageUrl: url,
        photo: url,
        imageVerified: true,
        imageStatus: 'VERIFIED'
      };
    }
  });
}

fs.writeFileSync(squadsPath, JSON.stringify(squads, null, 2));

// 4. Update masterPlayersDatabase.json & official350Players.json
for (const [name, url] of Object.entries(RR_GT_PROVIDED_IMAGES)) {
  const norm = name.toLowerCase().trim();
  
  // Master
  const masterPlayer = master.find(p => p.name.toLowerCase().trim() === norm);
  if (masterPlayer && !hasAlreadyVerifiedPhoto(masterPlayer)) {
    masterPlayer.imageUrl = url;
    masterPlayer.photo = url;
    masterPlayer.imageVerified = true;
    masterPlayer.imageStatus = 'VERIFIED';
  } else if (!masterPlayer) {
    const id = norm.replace(/[^a-z0-9]+/g, '-');
    master.push({
      id,
      playerId: id,
      name,
      fullName: name,
      role: 'BATTER',
      specialism: 'BATTER',
      country: 'India',
      countryCode: 'IN',
      isOverseas: false,
      isCapped: false,
      imageUrl: url,
      photo: url,
      imageVerified: true,
      imageStatus: 'VERIFIED'
    });
  }

  // Official
  const offPlayer = off.find(p => p.name.toLowerCase().trim() === norm);
  if (offPlayer && !hasAlreadyVerifiedPhoto(offPlayer)) {
    offPlayer.imageUrl = url;
    offPlayer.photo = url;
    offPlayer.imageVerified = true;
    offPlayer.imageStatus = 'VERIFIED';
  }
}

fs.writeFileSync(masterPath, JSON.stringify(master, null, 2));
fs.writeFileSync(offPath, JSON.stringify(off, null, 2));

// 5. Update verifiedPhotosMap.ts for the newly updated players
let vContent = fs.readFileSync('src/data/verifiedPhotosMap.ts', 'utf8');
for (const [name, url] of Object.entries(RR_GT_PROVIDED_IMAGES)) {
  let wasUpdated = false;
  for (const team of ['RR', 'GT', 'DC']) {
    const found = squads[team]?.find(p => p.name.toLowerCase().trim() === name.toLowerCase().trim());
    if (found && found.imageUrl === url) {
      wasUpdated = true;
      break;
    }
  }

  if (wasUpdated) {
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
}
fs.writeFileSync('src/data/verifiedPhotosMap.ts', vContent, 'utf8');

console.log(`Updated RR & GT successfully! Updated: ${updatedRRGTCount}, Preserved: ${preservedRRGTCount}`);
console.log('RR squad count:', squads.RR.length, 'GT squad count:', squads.GT.length, 'DC squad count:', squads.DC.length);
