const fs = require('fs');
const https = require('https');

const data = JSON.parse(fs.readFileSync('/Users/hannanulazim/teacup-demos/data/images.json', 'utf8'));

const urls = [];

function extractUrls(obj) {
  if (typeof obj === 'string' && obj.startsWith('http')) {
    urls.push(obj);
  } else if (Array.isArray(obj)) {
    obj.forEach(extractUrls);
  } else if (typeof obj === 'object' && obj !== null) {
    Object.values(obj).forEach(extractUrls);
  }
}

extractUrls(data);

console.log(`Checking ${urls.length} URLs...`);

const results = [];

async function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'GET' }, (res) => {
      // We don't need the whole body, just the status
      res.destroy(); 
      resolve({ url, status: res.statusCode });
    });

    req.on('error', (e) => {
      resolve({ url, status: 'ERROR', error: e.message });
    });

    req.end();
  });
}

Promise.all(urls.map(checkUrl)).then((results) => {
  const failed = results.filter(r => r.status !== 200);
  if (failed.length === 0) {
    console.log('All URLs are valid (200 OK).');
  } else {
    console.log('Found failed URLs:');
    failed.forEach(r => console.log(`${r.status}: ${r.url}`));
  }
});
