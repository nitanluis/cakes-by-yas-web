import fs from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import sharp from 'sharp';

// Public, read-only checks for the commercial hostname and its redirect aliases.
const base = new URL(process.argv.slice(2).find(arg => !arg.startsWith('--')) || 'https://cakesbyyas.com/');
if (base.protocol !== 'https:' || base.pathname !== '/') throw new Error('Use an HTTPS origin with a root path.');
const checks = [];
const publicDns = process.argv.includes('--public-dns');
const addresses = new Map();
async function get(url, redirect = 'follow', hops = 0) {
  const target = new URL(url, base);
  if (publicDns) {
    // Use current public DNS during registrar propagation; TLS validation stays enabled.
    if (!addresses.has(target.hostname)) {
      const dns = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(target.hostname)}&type=A`, { headers: { accept: 'application/dns-json' }, signal: AbortSignal.timeout(15000) });
      const answer = await dns.json();
      const ips = answer.Answer?.filter(a => a.type === 1).map(a => a.data);
      if (!ips?.length) throw new Error(`No public A record for ${target.hostname}`);
      addresses.set(target.hostname, ips);
    }
    const ips = addresses.get(target.hostname);
    const result = await new Promise((resolve, reject) => {
      const request = (target.protocol === 'https:' ? https : http).get(target, {
        lookup: (_host, options, done) => done(null, options.all ? ips.map(address => ({ address, family: 4 })) : ips[0], 4),
      }, response => {
        const chunks = [];
        response.on('data', chunk => chunks.push(chunk));
        response.on('end', () => resolve({ status: response.statusCode, headers: response.headers, bytes: Buffer.concat(chunks) }));
        response.on('error', reject);
      });
      request.on('error', reject);
      request.setTimeout(20000, () => request.destroy(new Error('Request timed out')));
    });
    if (redirect === 'follow' && result.status >= 300 && result.status < 400 && result.headers.location) {
      if (hops >= 6) throw new Error('Redirect loop');
      return get(new URL(result.headers.location, target).href, redirect, hops + 1);
    }
    return result;
  }
  const response = await fetch(target, { redirect, signal: AbortSignal.timeout(20000) });
  return { status: response.status, headers: Object.fromEntries(response.headers), bytes: Buffer.from(await response.arrayBuffer()) };
}
async function check(name, run) {
  try { checks.push({ name, ...await run() }); }
  catch (error) { checks.push({ name, ok: false, error: error.message }); }
}
for (const [route, expected] of [['', 200], ['en/', 200], ['es/', 200], ['production-probe-missing', 404], ['production-probe-missing.json', 404], ['galeria/', 404]]) {
  await check(`surface ${route || '/'}`, async () => { const r = await get(route); return { status: r.status, expected, ok: r.status === expected }; });
}
for (const locale of ['en', 'es']) {
  await check(`${locale} metadata and assets`, async () => {
    const r = await get(`${locale}/`);
    const html = r.bytes.toString();
    const canonical = html.match(/rel="canonical" href="([^"]+)"/i)?.[1];
    const og = html.match(/property="og:image" content="([^"]+)"/i)?.[1];
    const image = og ? await get(og) : undefined;
    const metadata = image ? await sharp(image.bytes).metadata() : {};
    const assets = [...new Set([...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1]).filter(value => value.startsWith('/') && /\.(?:svg|png|woff2|css|js|webp)(?:\?|$)/.test(value)))];
    const responses = await Promise.all(assets.map(async asset => ({ asset, status: (await get(asset)).status })));
    const fields = {
      indexable: !/noindex/i.test(r.headers['x-robots-tag'] || '') && !/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html),
      canonical: canonical === new URL(`${locale}/`, base).href,
      lang: html.includes(`lang="${locale}"`),
      oneH1: (html.match(/<h1(?:\s|>)/g) || []).length === 1,
      alternateEn: html.includes(`hreflang="en" href="${base}en/"`),
      alternateEs: html.includes(`hreflang="es" href="${base}es/"`),
      credit: html.includes('href="https://themonkeys.do"'),
      social: image?.status === 200 && metadata.width === 1200 && metadata.height === 630 && image.bytes.length < 1000000,
      assets: responses.every(a => a.status === 200),
      security: ['content-security-policy', 'strict-transport-security', 'x-content-type-options', 'referrer-policy', 'permissions-policy'].every(h => !!r.headers[h]),
    };
    return { ok: Object.values(fields).every(Boolean), fields, canonical, og, image: { width: metadata.width, height: metadata.height, bytes: image?.bytes.length }, assets: responses };
  });
}
await check('robots and sitemap', async () => {
  const robots = await get('robots.txt'); const sitemap = await get('sitemap.xml');
  const text = robots.bytes.toString(); const xml = sitemap.bytes.toString();
  return { ok: robots.status === 200 && sitemap.status === 200 && text.includes(`Sitemap: ${base}sitemap.xml`) && !/^Disallow:\s*\/\s*$/m.test(text) && ['en/', 'es/'].every(p => xml.includes(`${base}${p}`)), robots: text, sitemapStatus: sitemap.status };
});
const path = '/es/?utm_source=production-review';
for (const origin of ['http://cakesbyyas.com', 'http://www.cakesbyyas.com', 'https://www.cakesbyyas.com', 'http://cakebyyas.com', 'https://cakebyyas.com', 'http://www.cakebyyas.com', 'https://www.cakebyyas.com']) {
  await check(`301 ${origin}`, async () => {
    const r = await get(`${origin}${path}`, 'manual'); const location = r.headers.location;
    return { status: r.status, location, ok: r.status === 301 && location === `${base.origin}${path}` };
  });
}
fs.mkdirSync('audit', { recursive: true });
const report = { generated: new Date().toISOString(), url: base.href, dnsMode: publicDns ? 'public-cloudflare-doh' : 'system', checks };
fs.writeFileSync(publicDns ? 'audit/production-live-public-dns.json' : 'audit/production-live.json', JSON.stringify(report, null, 2));
console.log(`${checks.filter(c => c.ok).length}/${checks.length} production checks pass: ${base}`);
for (const result of checks.filter(c => !c.ok)) console.log(JSON.stringify(result));
if (checks.some(c => !c.ok)) process.exitCode = 1;
