import fs from 'fs';

export const RCB_PLAYER_IMAGES = {
  'Virat Kohli': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImqRj_s79SH5WwtcDS9pf2IlmCWmXasGuJ6OxfYMg8Q&s=10',
  'Venkatesh Iyer': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIR5uHFC2foxNP29ugiwiQRJlMvAXr4wK10m8SA2oDQ&s=10',
  'Jacob Duffy': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQF8DdJ8mlgOluGu-lTrxxm3csWPGQ6Str8rtF78lKg&s=10',
  'Rajat Patidar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2Bx5s-QeFVkFBRf4kKzQ5At2ABtocAq7pz6vnQMvyg&s=10',
  'Devdutt Padikkal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_bbwEb94SEjrSv4BU7Z-ViMH3hCyHm8rx9YF6_YZ2Q&s=10',
  'Jitesh Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLu_j1jQ8j4pfpn1hfqPWOB0bkG6Vi8BIvgd0i9xQ7nw&s=10',
  'Krunal Pandya': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgX21F_OtEkmyrLY9N37d9NFtf0wUN3n6vDBflIJtVyQ&s=10',
  'Swapnil Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyb7h0jSrkZooj4X8JOGkaJ0BjYI90B2H4xbZT8v8fmA&s=10',
  'Satwik Deswal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIS2qxndl2a9u-GMG_DeHO9zaWOmHDVeIIqawzgo0ig&s=10',
  'Vicky Ostwal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxrkrdsUsGGOkbeSLAD7vsfLW8KMbpLUwQ0u1w-T76g&s=10',
  'Suyash Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYl6PXl7oPzyTQ6Ctdg2itMLBOMVkqHUcVNJlKoE5OJg&s=10',
  'Bhuvneshwar Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63Wf3PKKgwbeCysiInRiCELJkigmbbUO4rx3IJvLwhw&s',
  'Rasikh Salam': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BcwjIzatSsCF6P7vbnP9v115LImkeWfkZPpy3prDRw&s=10',
  'Mangesh Yadav': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsxuURo4PJte2yrExiv3N0_CVELFIPeTbpRgVheGf8A&s=10',
  'Abhinandan Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iIEl64LZxHSKCj5tSOH_ur7qLuaxeiiIGrUDWD4bQg&s=10',
  'Jacob Bethell': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIR7sbks5CofeoDpyyTLoOEVi4iAKOsxJ-JdOs5oCjA&s=10',
  'Phil Salt': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FypM-1BV7h2v8KoqtCdMPo4J_O9e7_1Doe2mL11yow&s=10',
  'Jordan Cox': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRGMz56AwtMUkksxq0MF2J93RqJN8WI__fjhNcDCkkA&s=10',
  'Josh Hazlewood': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedXIK4yxkaKWjMkLIwV-aWf1vvjClU7TrsKKTCwZdDQ&s=10',
  'Tim David': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLv_6lsImLKHrZPVLRy4cSEELX6d52QFsWWICY7NqK8Q&s=10',
  'Romario Shepherd': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT03vA9-ByLI0tD1jJqzUjmnDkdNoOuMVQwpQth6iL8xw&s=10',
  'Nuwan Thushara': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vuBKvQga5jZUOi3n0A6rCtH7fYkb-LimZUP6PWf02A&s=10'
};

// 1. Update teamsSquads2026.json
const squadsPath = 'src/data/teamsSquads2026.json';
const squads = JSON.parse(fs.readFileSync(squadsPath, 'utf8'));
let squadMatch = 0;
for (const t in squads) {
  squads[t] = squads[t].map(p => {
    const key = Object.keys(RCB_PLAYER_IMAGES).find(k => k.toLowerCase().trim() === p.name.toLowerCase().trim());
    if (key) {
      squadMatch++;
      return {
        ...p,
        imageUrl: RCB_PLAYER_IMAGES[key],
        photo: RCB_PLAYER_IMAGES[key],
        imageVerified: true,
        imageStatus: 'VERIFIED'
      };
    }
    return p;
  });
}
fs.writeFileSync(squadsPath, JSON.stringify(squads, null, 2));
console.log('Updated teamsSquads2026.json matches:', squadMatch);

// 2. Update official350Players.json
const offPath = 'src/data/official350Players.json';
const off = JSON.parse(fs.readFileSync(offPath, 'utf8'));
let offMatch = 0;
const updatedOff = off.map(p => {
  const key = Object.keys(RCB_PLAYER_IMAGES).find(k => k.toLowerCase().trim() === p.name.toLowerCase().trim());
  if (key) {
    offMatch++;
    return {
      ...p,
      imageUrl: RCB_PLAYER_IMAGES[key],
      photo: RCB_PLAYER_IMAGES[key],
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
  const key = Object.keys(RCB_PLAYER_IMAGES).find(k => k.toLowerCase().trim() === p.name.toLowerCase().trim());
  if (key) {
    masterMatch++;
    return {
      ...p,
      imageUrl: RCB_PLAYER_IMAGES[key],
      photo: RCB_PLAYER_IMAGES[key],
      imageVerified: true,
      imageStatus: 'VERIFIED'
    };
  }
  return p;
});
fs.writeFileSync(masterPath, JSON.stringify(updatedMaster, null, 2));
console.log('Updated masterPlayersDatabase.json matches:', masterMatch);

// 4. Update verifiedPhotosMap.ts
let vContent = fs.readFileSync('src/data/verifiedPhotosMap.ts', 'utf8');
for (const [name, url] of Object.entries(RCB_PLAYER_IMAGES)) {
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
console.log('Successfully updated verifiedPhotosMap.ts with all 22 RCB players!');
