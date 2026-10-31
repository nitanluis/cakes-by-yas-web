import fs from 'node:fs';
import crypto from 'node:crypto';
import sharp from 'sharp';

const source = 'assets/brand-delivery-2026-10-31';
const out = 'public/brand';
fs.mkdirSync(out, { recursive: true });
const logo = fs.readFileSync(`${source}/cakes-by-yas-logo-colores-marca.svg`, 'utf8');
const mark = fs.readFileSync(`${source}/cakes-by-yas-isotipo.svg`, 'utf8').replaceAll('#ea6272', '#ea677d');
for (const svg of [logo, mark]) {
  if (/<(?:script|image|foreignObject|text)\b/i.test(svg) || /(?:href|src)\s*=\s*["'](?:https?:|data:|\/\/)/i.test(svg)) throw Error('Brand SVG must contain local vector geometry only.');
}
// Keep the prior delivery outside the public artifact for recoverability.
fs.mkdirSync('assets/brand-previous', { recursive: true });
for (const name of ['logo.png', 'isotipo.png']) {
  if (!fs.existsSync(`assets/brand-previous/${name}`) && fs.existsSync(`${out}/${name}`)) fs.copyFileSync(`${out}/${name}`, `assets/brand-previous/${name}`);
}
fs.writeFileSync(`${out}/logo.svg`, logo);
fs.writeFileSync(`${out}/isotipo.svg`, mark);
fs.writeFileSync(`${out}/logo-inverse.svg`, logo.replaceAll('#352127', '#faf5ee'));
await sharp(Buffer.from(logo)).resize({ width: 1052 }).png().toFile(`${out}/logo.png`);
await sharp(Buffer.from(mark)).resize(1024, 1024, { fit: 'contain' }).png().toFile(`${out}/isotipo.png`);
await sharp(Buffer.from(mark)).resize(32, 32, { fit: 'contain' }).png().toFile(`${out}/favicon-32.png`);
await sharp(Buffer.from(mark)).resize(180, 180, { fit: 'contain', background: '#faf5ee' }).flatten({ background: '#faf5ee' }).png().toFile(`${out}/apple-touch-icon.png`);
const files = ['logo.svg', 'isotipo.svg', 'logo-inverse.svg', 'logo.png', 'isotipo.png', 'favicon-32.png', 'apple-touch-icon.png'];
fs.mkdirSync('audit', { recursive: true });
fs.writeFileSync('audit/brand-assets.json', JSON.stringify({ source, generated: new Date().toISOString(), adaptations: ['Isotipo uses the coral from the supplied brand-colors logo.', 'Inverse lettering uses existing ivory for the dark footer.', 'PNG compatibility and touch icons rendered from the new vectors.'], files: files.map(name => ({ name, bytes: fs.statSync(`${out}/${name}`).size, sha256: crypto.createHash('sha256').update(fs.readFileSync(`${out}/${name}`)).digest('hex') })) }, null, 2));
console.log('New brand vectors and PNG fallbacks installed; previous assets archived outside public.');
