import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
const reports = [];
const base = (process.env.BASE_PATH || '/').replace(/\/+$/, '');
const artifact = value => { const pathname = new URL(value,'http://preview.local').pathname; if(base && !pathname.startsWith(base+'/')) throw Error(`URL outside base: ${value}`); return path.join('dist', base ? pathname.slice(base.length) : pathname); };
for (const locale of ['en', 'es']) {
  const html = fs.readFileSync(`dist/${locale}/index.html`, 'utf8');
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    if (match[1].startsWith('//')) continue;
    const target = artifact(match[1]);
    if (!fs.existsSync(target)) throw Error(`Missing internal target: ${match[1]}`);
  }
  if (!html.includes(`lang="${locale}"`)) throw Error(`Wrong document language: ${locale}`);
  if (/pecca/i.test(html)) throw Error('Rejected product found');
  if ((html.match(/class="menu-item"/g) || []).length !== 10) throw Error(`Incomplete menu: ${locale}`);
  if (!html.includes('noindex,nofollow') && !process.env.PUBLIC_INDEXABLE) throw Error('Preview indexing gate absent');
  const image = html.match(/property="og:image" content="([^"]+)"/)?.[1];
  if (!image) throw Error('Missing social image');
  const svgIcon = html.match(/<link[^>]*rel="icon"[^>]*type="image\/svg\+xml"[^>]*href="([^"]+)"/)?.[1];
  const touchIcon = html.match(/<link[^>]*rel="apple-touch-icon"[^>]*href="([^"]+)"/)?.[1];
  if (!svgIcon || !touchIcon) throw Error('Missing SVG favicon or touch icon');
  const iconSvg = fs.readFileSync(artifact(svgIcon), 'utf8');
  if (!/<svg\b/.test(iconSvg) || /<(?:image|script)\b/i.test(iconSvg)) throw Error('Favicon must be a local vector');
  const touch = await sharp(artifact(touchIcon)).metadata();
  if (touch.width !== 180 || touch.height !== 180) throw Error('Touch icon dimensions');
  const file = artifact(image);
  const info = await sharp(file).metadata();
  if (info.width !== 1200 || info.height !== 630 || fs.statSync(file).size > 1000000) throw Error('Social image violates budget');
  const scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m => m[1]);
  if (scripts.some(src => /^https?:/.test(src))) throw Error('External runtime script');
  reports.push({ locale, menuItems: 10, socialImage: { width: info.width, height: info.height, bytes: fs.statSync(file).size }, externalScripts: 0 });
}
if (fs.existsSync('dist/_gallery') || fs.existsSync('dist/galeria')) throw Error('Development gallery emitted');
for (const route of ['404.html', '500.html', 'robots.txt', 'sitemap.xml']) if (!fs.existsSync(`dist/${route}`)) throw Error(`Missing ${route}`);
fs.mkdirSync('audit', { recursive: true });
fs.writeFileSync('audit/built.json', JSON.stringify({ generated: new Date().toISOString(), reports, galleryEmitted: false }, null, 2));
console.log('Built artifact: both locales, 10 menu items each, real 1200×630 social image, no gallery.');
