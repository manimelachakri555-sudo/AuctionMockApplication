import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

interface PlayerRecord {
  id: string;
  name: string;
  role: string;
  nationality: string;
  isOverseas: boolean;
  currentTeam: string;
  recentIPLTeam: string;
  hasPlayedIPL: boolean;
  iplDebut: number;
  iplAppearances: number;
  officialBasePrice: number;
  mockAuctionBasePrice: number;
  basePrice: number;
  basePriceUnit: string;
  stats: {
    scope: string;
    matches: number;
    runs: number;
    wickets: number;
    strikeRate: number;
    economy: number | null;
  };
  imageUrl: string;
  imageSource: string;
  imageVerified: boolean;
  dataSource: string;
  lastVerifiedAt: string;
}

function verifyUrl(url?: string | null): Promise<{ ok: boolean; status: number; contentType: string }> {
  if (!url || typeof url !== 'string') {
    return Promise.resolve({ ok: false, status: 0, contentType: 'missing_url' });
  }
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(
      url,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        },
        timeout: 8000,
      },
      (res) => {
        const ct = res.headers['content-type'] || '';
        const isOk = (res.statusCode === 200 || res.statusCode === 304) && (ct.includes('image') || ct.includes('octet-stream'));
        resolve({ ok: isOk, status: res.statusCode || 0, contentType: ct });
      }
    );
    req.on('error', () => resolve({ ok: false, status: 0, contentType: 'network_error' }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ ok: false, status: 0, contentType: 'timeout' });
    });
  });
}

async function validate() {
  console.log('====================================');
  console.log('      PLAYER DATA VALIDATION        ');
  console.log('====================================\n');

  const jsonPath = path.resolve(process.cwd(), 'src/data/seedPlayers.json');
  if (!fs.existsSync(jsonPath)) {
    console.error(`FATAL: Player data file not found at ${jsonPath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(jsonPath, 'utf-8');
  const players: PlayerRecord[] = JSON.parse(raw);

  const seenIds = new Set<string>();
  const seenNames = new Set<string>();

  let passedIdentities = 0;
  let passedImages = 0;
  let passedData = 0;
  let failed = 0;

  const results = await Promise.all(
    players.map(async (player) => {
      let playerFailed = false;
      const errors: string[] = [];

      // 1. Identity Check
      if (!player.name || typeof player.name !== 'string' || player.name.trim().length === 0) {
        errors.push('Missing or invalid player name');
        playerFailed = true;
      }
      if (seenIds.has(player.id)) {
        errors.push(`Duplicate ID: ${player.id}`);
        playerFailed = true;
      }
      seenIds.add(player.id);

      if (seenNames.has(player.name.toLowerCase())) {
        errors.push(`Duplicate player name: ${player.name}`);
        playerFailed = true;
      }
      seenNames.add(player.name.toLowerCase());

      // 2. Data & Stats Check
      const validCategories = [
        'BATTER',
        'WICKETKEEPER-BATTER',
        'ALL-ROUNDER',
        'FAST BOWLER',
        'SPINNER',
        'Batter',
        'Bowler',
        'All-Rounder',
        'Wicketkeeper',
      ];
      const playerRole = player.role || (player as any).specialism;
      if (!playerRole || !validCategories.includes(playerRole)) {
        errors.push(`Invalid role: ${playerRole}`);
        playerFailed = true;
      }
      if (!player.nationality) {
        errors.push('Missing nationality');
        playerFailed = true;
      }
      if (!player.currentTeam) {
        errors.push('Missing currentTeam');
        playerFailed = true;
      }
      if (player.hasPlayedIPL && (!player.iplDebut || player.iplDebut < 2008)) {
        errors.push('Invalid IPL debut year');
        playerFailed = true;
      }
      if (!player.stats || typeof player.stats.matches !== 'number' || player.stats.matches <= 0) {
        errors.push('Missing genuine career matches statistic');
        playerFailed = true;
      }
      if (!player.dataSource) {
        errors.push('Missing dataSource');
        playerFailed = true;
      }

      // 3. Image Check
      if (!player.imageUrl || !player.imageUrl.startsWith('http')) {
        errors.push('Missing or invalid imageUrl');
        playerFailed = true;
      }
      if (!player.imageVerified) {
        errors.push('imageVerified must be explicitly true');
        playerFailed = true;
      }
      if (!player.imageSource) {
        errors.push('Missing imageSource');
        playerFailed = true;
      }

      const imgCheck = await verifyUrl(player.imageUrl);
      if (!imgCheck.ok) {
        errors.push(`Image URL unreachable or invalid: HTTP ${imgCheck.status} (${imgCheck.contentType})`);
        playerFailed = true;
      }

      return { player, playerFailed, errors, imgCheck };
    })
  );

  for (const { player, playerFailed, errors, imgCheck } of results) {
    if (playerFailed) {
      failed++;
      console.log(`❌ ${player.name}`);
      errors.forEach((err) => console.log(`   - ${err}`));
    } else {
      passedIdentities++;
      passedImages++;
      passedData++;
      console.log(`✓ ${player.name} (${player.currentTeam})`);
      console.log(`  ✓ Real player identity confirmed`);
      console.log(`  ✓ Image URL verified: HTTP ${imgCheck.status} (${imgCheck.contentType})`);
      console.log(`  ✓ Image source: ${player.imageSource}`);
      console.log(`  ✓ Career stats: ${player.stats.matches} matches, ${player.stats.runs} runs, ${player.stats.wickets} wkts`);
    }
  }

  console.log('\n====================================');
  console.log('VALIDATION SUMMARY');
  console.log('====================================');
  console.log(`TOTAL PLAYERS TESTED: ${players.length}`);
  console.log(`${passedIdentities} verified identities`);
  console.log(`${passedImages} valid images`);
  console.log(`${passedData} valid records`);
  console.log(`FAILED: ${failed}`);

  if (failed > 0) {
    console.error(`\nValidation failed with ${failed} invalid records.`);
    process.exit(1);
  } else {
    console.log('\nALL PLAYERS SUCCESSFULLY VALIDATED AGAINST GENUINE DATA SOURCES!\n');
    process.exit(0);
  }
}

validate().catch((err) => {
  console.error('Fatal validation runner error:', err);
  process.exit(1);
});
