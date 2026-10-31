// Browser interaction must run through the CUA extension in this environment.
// This entry validates the real evidence file after the supported browser run.
import fs from 'node:fs';
const file = process.argv[2] || '.impeccable/review/flujos/_resumen.json';
if (!fs.existsSync(file)) { console.error('Browser evidence pending. Run the CUA route/keyboard/viewport matrix first.'); process.exit(1); }
const report = JSON.parse(fs.readFileSync(file,'utf8'));
const failed = report.steps.filter(step => !step.ok);
console.log(`${report.steps.length - failed.length}/${report.steps.length} recorded steps pass. Evidence date: ${report.generated}`);
if (failed.length) process.exit(1);
