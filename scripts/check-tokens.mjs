import fs from 'node:fs';
import path from 'node:path';
const errors = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(file); continue; }
    if (!/\.(css|astro|ts|js)$/.test(file) || file.replaceAll('\\','/').includes('/tokens/')) continue;
    const text = fs.readFileSync(file,'utf8');
    const blocks = file.endsWith('.css') ? [text] : file.endsWith('.astro') ? [...text.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(m=>m[1]) : [];
    for (const block of blocks) {
      const clean = block.replace(/\/\*[\s\S]*?\*\//g,'').replace(/@media[^{}]+\{/g,'{');
      if (/#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})\b/i.test(clean)) errors.push(`${file}: raw color`);
      if (/(?:\d|\.\d)(?:px|ms)\b/.test(clean)) errors.push(`${file}: raw dimension/duration`);
      if (/font-weight\s*:\s*\d/.test(clean)) errors.push(`${file}: raw weight`);
    }
    if (/style\s*=\s*["'][^"']*#[\da-f]{3,8}/i.test(text)) errors.push(`${file}: inline color`);
    if (/\[[^\]]*#[\da-f]{3,8}\]/i.test(text)) errors.push(`${file}: arbitrary color class`);
    if (/<svg\b/.test(text) && !file.replaceAll('\\','/').includes('/icons/')) errors.push(`${file}: SVG outside shared icons`);
  }
}
walk('src');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Tokens/icons: source CSS and Astro styles checked; media query thresholds excepted.');
