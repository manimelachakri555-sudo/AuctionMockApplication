import fs from 'fs';
import path from 'path';

async function validateAllImages() {
  const seedPath = path.resolve(process.cwd(), 'src/data/seedPlayers.json');
  if (!fs.existsSync(seedPath)) {
    console.error('Seed file not found at:', seedPath);
    process.exit(1);
  }

  const raw = fs.readFileSync(seedPath, 'utf8');
  const players = JSON.parse(raw);

  console.log('====================================');
  console.log('PLAYER IMAGE VALIDATION');
  console.log('====================================\n');

  let validCount = 0;
  let invalidCount = 0;
  let missingCount = 0;
  const seenUrls = new Set();
  const duplicateUrls = [];

  // Validate with controlled concurrency and polite delay to prevent CDN rate-limiting (429)
  const concurrency = 3;
  const results = [];
  for (let i = 0; i < players.length; i += concurrency) {
    if (i > 0) {
      await new Promise((r) => setTimeout(r, 350));
    }
    const batch = players.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map(async (player) => {
        const issues = [];
        const imageUrl = player.imageUrl || player.verifiedImage?.url;
        const source = player.imageSource || player.verifiedImage?.source;
        const isVerifiedFlag = player.imageVerified === true;

        if (!imageUrl) {
          return {
            name: player.name,
            success: false,
            missing: true,
            details: 'Image URL is missing',
          };
        }

        if (!source) {
          issues.push('Source missing');
        }

        if (!isVerifiedFlag) {
          issues.push('imageVerified is not true');
        }

        if (seenUrls.has(imageUrl)) {
          duplicateUrls.push(imageUrl);
          issues.push('Duplicate image URL with another player');
        } else {
          seenUrls.add(imageUrl);
        }

        // Check HTTP response & content-type with retry on 429
        try {
          let res = null;
          let retries = 3;
          while (retries > 0) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 9000);
            try {
              res = await fetch(imageUrl, {
                method: 'GET',
                headers: {
                  'User-Agent':
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                  Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
                },
                signal: controller.signal,
              });
            } finally {
              clearTimeout(timeout);
            }

            if (res.status === 429) {
              retries--;
              await new Promise((r) => setTimeout(r, 1200));
            } else {
              break;
            }
          }

          if (!res.ok) {
            issues.push(`HTTP ${res.status} ${res.statusText}`);
          } else {
            const contentType = res.headers.get('content-type') || '';
            if (!contentType.startsWith('image/')) {
              issues.push(`Content-Type is not image/* (${contentType})`);
            }
            // Verify body size is > 0 (can be decoded)
            const buffer = await res.arrayBuffer();
            if (buffer.byteLength < 500) {
              issues.push(`Image payload too small (${buffer.byteLength} bytes)`);
            }
          }
        } catch (err) {
          issues.push(`Network fetch error: ${err.message}`);
        }

        // Check identity mapping
        if (!player.playerId || !player.name) {
          issues.push('Player identity mapping incomplete');
        }

        return {
          name: player.name,
          success: issues.length === 0,
          missing: false,
          source: source ? 'Verified' : 'Invalid',
          issues,
        };
      })
    );
    results.push(...batchResults);
  }

  for (const r of results) {
    if (r.success) {
      validCount++;
      console.log(`✓ ${r.name}`);
      console.log('  Source: Verified');
      console.log('  URL: Valid');
      console.log('  Image: Valid');
      console.log('  Identity: Verified\n');
    } else {
      if (r.missing) {
        missingCount++;
      } else {
        invalidCount++;
      }
      console.log(`✗ ${r.name}`);
      console.log(`  Source: ${r.source}`);
      console.log(`  Errors: ${r.issues?.join(', ') || r.details}\n`);
    }
  }

  console.log('====================================');
  console.log('TOTAL');
  console.log('====================================\n');
  console.log(`Players checked: ${players.length}`);
  console.log(`Valid images: ${validCount}`);
  console.log(`Invalid images: ${invalidCount}`);
  console.log(`Missing images: ${missingCount}\n`);

  if (invalidCount === 0 && missingCount === 0 && validCount === players.length) {
    console.log('STATUS: PASS');
    console.log('====================================');
    process.exit(0);
  } else {
    console.log('STATUS: FAILED');
    console.log('====================================');
    process.exit(1);
  }
}

validateAllImages();
