const fs = require('fs');
const content = fs.readFileSync('src/data/interiorStages.ts', 'utf8');
const urls = content.match(/https:\/\/images\.unsplash\.com\/photo-[^\s"']+/g);
const uniqueUrls = [...new Set(urls)];

async function check() {
  let count = 0;
  for (const url of uniqueUrls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) {
        console.log('BROKEN:', url, res.status);
      }
    } catch(e) {
      console.log('ERROR:', url, e.message);
    }
  }
  console.log('Done checking ' + uniqueUrls.length + ' URLs');
}
check();
