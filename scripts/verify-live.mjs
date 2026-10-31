import fs from 'node:fs';
import sharp from 'sharp';

const base = new URL(process.argv[2] || 'https://nitanluis.github.io/cakes-by-yas-web/');
if (!base.pathname.endsWith('/')) base.pathname += '/';
const checks = [];
async function get(path) {
  const url = new URL(path, base);
  const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
  return { url: response.url, status: response.status, headers: Object.fromEntries(response.headers), bytes: Buffer.from(await response.arrayBuffer()) };
}
for (const [route, expected] of [['',200],['en/',200],['es/',200],['missing-review-page',404],['missing-review-page.json',404],['galeria/',404],['galeria/hero/signature/',404],['robots.txt',200],['sitemap.xml',200]]) {
  const result = await get(route);
  checks.push({ route, expected, status: result.status, ok: result.status === expected });
}
for (const locale of ['en','es']) {
  const result = await get(`${locale}/`);
  const html = result.bytes.toString();
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  const og = html.match(/property="og:image" content="([^"]+)"/)?.[1];
  checks.push({ route: `${locale} metadata`, canonical, ok: canonical === new URL(`${locale}/`, base).href && html.includes('noindex,nofollow') });
  if (og) {
    const image = await get(og);
    const metadata = await sharp(image.bytes).metadata();
    checks.push({ route: `${locale} social image`, status: image.status, width: metadata.width, height: metadata.height, bytes: image.bytes.length, ok: image.status === 200 && metadata.width === 1200 && metadata.height === 630 && image.bytes.length < 1000000 });
  } else checks.push({ route: `${locale} social image`, ok: false });
  const assets = [...new Set([...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m=>m[1]).filter(value=>value.startsWith(base.pathname)&&/\.(?:svg|png|woff2|css|js|webp)(?:\?|$)/.test(value)))];
  const responses = await Promise.all(assets.map(async asset=>{const r=await get(asset);return {asset,status:r.status,ok:r.status===200};}));
  checks.push({ route: `${locale} assets`, responses, ok: responses.every(r=>r.ok) });
}
fs.mkdirSync('audit',{recursive:true});
fs.writeFileSync('audit/github-pages-live.json',JSON.stringify({generated:new Date().toISOString(),url:base.href,checks},null,2));
console.log(`${checks.filter(c=>c.ok).length}/${checks.length} live checks pass: ${base.href}`);
for(const check of checks.filter(c=>!c.ok)) console.log(check);
if(checks.some(c=>!c.ok))process.exit(1);
