import fs from 'fs';

export const MI_PLAYER_IMAGES = {
  'Rohit Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9cUuJ2ihpeOT1ML0jcBiaCrDKS-IR59Y6aPq6Hgtpw&s=10',
  'Jasprit Bumrah': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18-iB2BhtJyrCKgK4tvUrNab5koc_cz63J4Cbx_YNiA&s=10',
  'Hardik Pandya': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QVVFFPnZCAfErpdq83GpuuNAG3zaxmeKFCOS1g7S-A&s=10',
  'Suryakumar Yadav': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qYEANlRWdU_reoy-OSl8HZX4ehXiXHh5M0jXXo-Z3g&s=10',
  'Tilak Varma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndleItBqBEt66QrA5hJEOP3Uq829iLt6Rra_hqFAVpQ&s=10',
  'Quinton de Kock': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbn_0YfeIG39CC761m5eUe4uCb-pX_iqJ_eQ-JfTf0Vw&s=10',
  'Trent Boult': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KBXqxUzhtAR0PLsjtT59URVOpItF7TkNUIM4Y2-CLg&s=10',
  'Will Jacks': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MYOc_zojot92zIjn3svscHRas6UIKEmq7MXwPzxJ5A&s=10',
  'Danish Malewar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMICek65YCscAvzZRYSYn9Y5DuVHJq6lg5gS5JcB4N-w&s=10',
  'Robin Minz': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQOOt9RkfmjHnd6VMd6C7lDqQiVPCYTMCcmUtja0Cag&s=10',
  'Shardul Thakur': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZH5yeFlkVpxW7xvjscGyD8V7Xj8aARc-Z62n0RJ7XTw&s=10',
  'Naman Dhir': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsuNhhjLeimBvim2qhBk403ly_MifVrycaztl8fcwdtg&s=10',
  'Raj Bawa': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cvDqTMuoWNRf_fzOTMRNkzSlxMvw-9oWYefeS8Tffw&s=10',
  'Mayank Markande': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfbkD6vfMjLrDl1x9vzi_QZlPfb0FoqamU5GutC9rDw&s=10',
  'Raghu Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXc_QwWk5l_-v2KRKJvvJbjsMzGb915UUBKp-iaPR2Q&s=10',
  'Ashwani Kumar': 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/lsci/db/PICTURES/CMS/398600/398629.6.jpg',
  'Deepak Chahar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJKiH1I03rZmOrfX18SVNRgfZuUxZuDqp0WLM_hRKWQ&s=10',
  'Mohammed Izhar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVf3OgFVihef1lcaYl-XdTM_rr_4WEvYYTutwXuU896A&s=10',
  'Mayank Rawat': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNKMY14mZP8TAYMI7-_zhHGL97xYSnvc7MBFF7wTQNA&s=10',
  'Ryan Rickelton': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Xmw7hfKh8X9LqFteLk0KYxK0DtSvr0ArLWINwNBz3w&s=10',
  'Corbin Bosch': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qnQI7aNZWA55I6t84I2hb1uEgUhTPJBw8nb-yxqXrg&s=10',
  'Sherfane Rutherford': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSel19z4ncoj51DGMOnScDC0lp1P5mVpHjAG03u9T4qtw&s=10',
  'Mitchell Santner': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9-esIUe9Tk8YCqxrRFP7y9Fd6jzU6tOneXeVsiBaLQ&s=10',
  'Allah Ghazanfar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1Ehx0Lvz3GICgbrrTkGpH9Zm_VlHRcgmDj_KGereWg&s=10'
};

// 1. Update verifiedPhotosMap.ts
let vContent = fs.readFileSync('src/data/verifiedPhotosMap.ts', 'utf8');
for (const [name, url] of Object.entries(MI_PLAYER_IMAGES)) {
  const entryKey = `'${name}':`;
  if (vContent.includes(entryKey)) {
    // Replace URL
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
console.log('Successfully updated verifiedPhotosMap.ts with all 24 MI players!');
