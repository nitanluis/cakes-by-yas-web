import { mkdirSync, writeFileSync } from 'node:fs';
import { getPaletteReport } from '../src/dev/palette.ts';
const pairs = getPaletteReport();
mkdirSync('audit', { recursive: true });
writeFileSync('audit/design-contrast.json', JSON.stringify({ generated: new Date().toISOString(), method: 'sRGB relative luminance, alpha composited on the declared background; solid token pairs only.', pairs }, null, 2));
for (const pair of pairs) console.log(`${pair.pass ? 'PASS' : 'FAIL'} ${pair.theme}: ${pair.label} ${pair.ratio.toFixed(2)}:1`);
if (pairs.some(pair => !pair.pass)) process.exit(1);
