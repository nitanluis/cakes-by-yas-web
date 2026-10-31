import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const pkg = JSON.parse(fs.readFileSync('node_modules/astro/package.json', 'utf8'));
const child = spawn(process.execPath, [path.resolve('node_modules/astro', pkg.bin.astro), ...process.argv.slice(2)], {
  stdio: 'inherit', env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
});
child.on('exit', code => process.exit(code ?? 1));
child.on('error', error => { console.error(error); process.exit(1); });
