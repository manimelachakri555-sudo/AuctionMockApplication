import fs from 'fs';

export const USER_PROVIDED_KKR_SRH = {
  // KKR
  'Rinku Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpTV5Cz9S9XJrZFobx_uOsSjT6ijPqs4SIzze62HTiA&s=10',
  'Sunil Narine': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOCpguBTeUz_pBo5yMGV8x4ydQN7amSCuxkUn2xP8HGA&s=10',
  'Cameron Green': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3bObB2IMLE-4RdhPawfp6K-jQ5bmWlN4gyBrjzjdIg&s=10',
  'Finn Allen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM5sRykSejFuGg5oJLsH7uCxon_p_ZbgRiMOCFtBunw&s=10',
  'Rachin Ravindra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bmZ687CR6a-F6UMmiqzzpKbl7HXolyqu9hcL0kV14g&s=10',
  'Matheesha Pathirana': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhLf7eqcJW3wxQcvpyMSNmQg2r28-zACoHiHTj7gbtw&s=10',
  'Ajinkya Rahane': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxHem3RBOQzbnSCn7JIYBx_q-sPHxHRDSnrAWf89P6g&s=10',
  'Angkrish Raghuvanshi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-9tHbvV90wgDMYW8FGUZdHAl2NhGok9cCLKrTWGpCw&s=10',
  'Manish Pandey': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLT4pepkVL9Pr2qsiFnlmICseSCmjt9ju9KNM4wXHp2Q&s=10',
  'Rahul Tripathi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ae4EGGQylMNC2ZBHtDX4SWjyykKrWptbnVcfaXkPPw&s=10',
  'Tejasvi Dahiya': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYAhk2VhpXwUr4u1UrNjrzo5TxTN0_eN9Ddbn01Yvpw&s=10',
  'Anukul Roy': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1mAm64IEs27xNYEQtGLyj1u9PeNcf5eppxlZG8uqXg&s=10',
  'Ramandeep Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnYe-P8h2ANbC4BOxR6FSrwTywWEyXXZuYONexUAdGw&s=10',
  'Prashant Solanki': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2nmuRE-fHZB10N1xeeNeYigZbilW51DIdPiJ-AQzlg&s=10',
  'Varun Chakravarthy': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNI5fQ8t4xvmdAQLgjl1eR4oGpM_UpiDhdgClXT6q4eA&s=10',
  'Kartik Tyagi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJ4XH-l1a67KHR81UjvST3waWanfr8n8Qu1uU20-xOA&s=10',
  'Umran Malik': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eFacNkF5oqx99QG7744KMEPL3WyDDMcK7tfaIXr-sg&s=10',
  'Vaibhav Arora': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHIgE3nC8ByE-Wuiwb7v4toxIGyjZqCeD9RXmZbptpA&s=10',
  'Saurabh Dubey': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBp-tS6VwbxhyGScD8ve5QtwfTQ9RfeVmLDxpihJDbyQ&s=10',
  'Navdeep Saini': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jntwit2_wfMwWY-tSJ8T6zGtgPseAcXLsayZoaWEmw&s=10',
  'Rovman Powell': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlGlEZnz6zVOa_d76BeUlHP5hNR55FmPFi6J5uE4uLw&s=10',
  'Tim Seifert': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLB0sV9ziBKcKGltsADp_xkkr_tVBPFxJx4RwEpfeUQ&s=10',
  'Blessing Muzarabani': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHygevGlUZjcIqkeU0qZE640amd3-QUXSyAgKebNLVQ&s=10',

  // SRH
  'Pat Cummins': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCYe5T7J-YbQhv7TnXGX2XK5gZnTCN-rl19Hx-zyKug&s=10',
  'Travis Head': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-25SxVOCoPI_G7uppSPyZNYVAquUk4KDYgcdk5hZSjA&s=10',
  'Heinrich Klaasen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMo8Up59-L3254tv45WFOmqh9XlP2IKeX2OPh5QSwydw&s=10',
  'Liam Livingstone': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0RXT6Y-2mOTzgNbgeCSY1en0LUgQEasBMTFn54Jc9g&s=10',
  'Ishan Kishan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bLF6Rj0yRy8naE_HTVUCDZqIlHhDlBLdp-v_5vjkeA&s=10',
  'Abhishek Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexpt9gTab54WNiDulWeqvX7RmSbxVCvjQyjXtPARxeQ&s=10',
  'Nitish Kumar Reddy': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlL9syrO5pj8yL2K_zcbL5suKQlGjTr3GRoAnfW8yOBQ&s=10',
  'Harshal Patel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_eLdP_L75iwSxI9ePj404QNQaMFBC1tGlKxFmPFlAkg&s=10',
  'Harsh Dubey': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVCdfxaDNpe55WmnAEmFcSd8xVSrmV--eDP1gfcuF8w&s=10',
  'Jaydev Unadkat': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_riBB1Y4EGgSrHvYnr8f-dRZOc3mW7SmDkPdB0vwrLQ&s=10',
  'Shivam Mavi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXosudfQTNZXD8cFrKGjPSxeBZUGkX_6mHRXBtACYdqA&s=10',
  'Aniket Verma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGaMtwJWJxCZ5orLit1yy3SrnJeEToPJYyV0zk2cWQw&s=10',
  'R. Smaran': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Qd055JuumniQs0vg5pM5uyz0ceijono9lN56otpsuA&s=10',
  'Salil Arora': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmH2IgyG9-FDu_pKcUsKLj1EIQMwh0rxGuU8FwadE8zA&s=10',
  'Shivang Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hiu-X5T8u0kV0KpRPTqbY-waHyOV9GARGFvOpx_chQ&s=10',
  'Krains Fuletra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3N5EMiIRSjsJ_8x7Y7NPwI3cDYrAd--lwFu-tWqRqA&s=10',
  'Zeeshan Ansari': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJ01h_i2QX9TIkMwKwIKwOdNXNWrCLraEN-ALIpHdWQ&s=10',
  'Amit Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YG66HpfNT1A9vo5r2XgRK678lTxCaof8lOebm5a6Ww&s=10',
  'Onkar Tarmale': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmse5eY-_sJbtr2ZehpACrN-V96RcsUW1QDCPXYZha7g&s=10',
  'Sakib Hussain': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhzPSkJKFx8LhNsKt-Ty-huFs4exngxSdH2FmQQZUoQ&s=10',
  'Praful Hinge': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVVJD9XepyNBRZBiv9eAtw1cGRCearjNM-jSsrkK7VA&s=10',
  'Brydon Carse': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3c9JsbH2RFWkwylgwja6_li0LjagFhRYnfph_0QwMA&s=10',
  'David Payne': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5zBcBOHjUPCe2nbY35wq2m9J8tkbf1a5jnAH6cM3ag&s=10',
  'Kamindu Mendis': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYUjLsOOh7g6XKcilp7aAaPvyYq_U-Svpa-MZjIPqWg&s=10',
  'Eshan Malinga': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTg_TeHrvWxl8DYahLxGYLqAkgUnoDZMbdQKudKESjA&s=10'
};

const squadsPath = 'src/data/teamsSquads2026.json';
const squads = JSON.parse(fs.readFileSync(squadsPath, 'utf8'));

const offPath = 'src/data/official350Players.json';
const off = JSON.parse(fs.readFileSync(offPath, 'utf8'));

const masterPath = 'src/data/masterPlayersDatabase.json';
const master = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

let updatedCount = 0;
let preservedCount = 0;

// Helper to determine if a player already has a genuine verified photo (not dicebear)
function hasAlreadyVerifiedPhoto(player) {
  if (!player) return false;
  if (!player.imageUrl && !player.photo) return false;
  const url = player.imageUrl || player.photo;
  if (url.includes('dicebear.com')) return false;
  if (player.imageVerified === true || player.imageStatus === 'VERIFIED') return true;
  if (url.startsWith('https://upload.wikimedia.org') || url.startsWith('https://thumb.wikimedia.org')) return true;
  return false;
}

// 1. Update squads (KKR & SRH)
for (const team of ['KKR', 'SRH']) {
  if (!squads[team]) continue;
  squads[team] = squads[team].map(p => {
    const norm = p.name.toLowerCase().trim();
    const matchKey = Object.keys(USER_PROVIDED_KKR_SRH).find(k => k.toLowerCase().trim() === norm);
    if (!matchKey) return p;

    if (hasAlreadyVerifiedPhoto(p)) {
      preservedCount++;
      return p; // KEEP existing verified photo!
    } else {
      // Missing or dicebear placeholder -> update with provided image!
      updatedCount++;
      const newUrl = USER_PROVIDED_KKR_SRH[matchKey];
      return {
        ...p,
        imageUrl: newUrl,
        photo: newUrl,
        imageVerified: true,
        imageStatus: 'VERIFIED'
      };
    }
  });
}
fs.writeFileSync(squadsPath, JSON.stringify(squads, null, 2));

// 2. Update official350Players.json for any matching player whose photo was placeholder
const updatedOff = off.map(p => {
  const norm = p.name.toLowerCase().trim();
  const matchKey = Object.keys(USER_PROVIDED_KKR_SRH).find(k => k.toLowerCase().trim() === norm);
  if (!matchKey) return p;

  if (hasAlreadyVerifiedPhoto(p)) {
    return p; // KEEP verified photo
  } else {
    const newUrl = USER_PROVIDED_KKR_SRH[matchKey];
    return {
      ...p,
      imageUrl: newUrl,
      photo: newUrl,
      imageVerified: true,
      imageStatus: 'VERIFIED'
    };
  }
});
fs.writeFileSync(offPath, JSON.stringify(updatedOff, null, 2));

// 3. Update masterPlayersDatabase.json
const updatedMaster = master.map(p => {
  const norm = p.name.toLowerCase().trim();
  const matchKey = Object.keys(USER_PROVIDED_KKR_SRH).find(k => k.toLowerCase().trim() === norm);
  if (!matchKey) return p;

  if (hasAlreadyVerifiedPhoto(p)) {
    return p; // KEEP verified photo
  } else {
    const newUrl = USER_PROVIDED_KKR_SRH[matchKey];
    return {
      ...p,
      imageUrl: newUrl,
      photo: newUrl,
      imageVerified: true,
      imageStatus: 'VERIFIED'
    };
  }
});
fs.writeFileSync(masterPath, JSON.stringify(updatedMaster, null, 2));

// 4. Update verifiedPhotosMap.ts for the newly updated players
let vContent = fs.readFileSync('src/data/verifiedPhotosMap.ts', 'utf8');
for (const [name, url] of Object.entries(USER_PROVIDED_KKR_SRH)) {
  // Check if player in squads was updated
  let wasUpdated = false;
  for (const team of ['KKR', 'SRH']) {
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

console.log(`Finished applying KKR & SRH images! Updated (placeholders replaced): ${updatedCount}, Preserved (already verified): ${preservedCount}`);
