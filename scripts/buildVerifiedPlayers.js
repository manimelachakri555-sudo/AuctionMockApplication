import fs from 'fs';
import path from 'path';
import https from 'https';

function checkUrl(url) {
  return new Promise((resolve) => {
    try {
      const req = https.get(
        url,
        {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          },
          timeout: 6000,
        },
        (res) => {
          const ct = res.headers['content-type'] || '';
          const ok = (res.statusCode === 200 || res.statusCode === 304) && ct.includes('image');
          res.destroy();
          resolve({ ok, status: res.statusCode || 0, ct, len: res.headers['content-length'] });
        }
      );
      req.on('error', () => resolve({ ok: false, status: 0 }));
      req.on('timeout', () => {
        req.destroy();
        resolve({ ok: false, status: 408 });
      });
    } catch (e) {
      resolve({ ok: false, status: 0 });
    }
  });
}

async function getWikiThumbnail(name) {
  return new Promise((resolve) => {
    const url =
      'https://en.wikipedia.org/w/api.php?action=query&titles=' +
      encodeURIComponent(name) +
      '&prop=pageimages&format=json&pithumbsize=500';
    https
      .get(url, { headers: { 'User-Agent': 'IPLTest/1.0 (contact: test@example.com)' } }, (res) => {
        let d = '';
        res.on('data', (c) => (d += c));
        res.on('end', () => {
          try {
            const j = JSON.parse(d);
            for (const pid in j.query.pages) {
              const p = j.query.pages[pid];
              if (p.thumbnail?.source) {
                resolve(p.thumbnail.source);
                return;
              }
            }
            resolve(null);
          } catch (e) {
            resolve(null);
          }
        });
      })
      .on('error', () => resolve(null));
  });
}

console.log('Testing script setup...');
