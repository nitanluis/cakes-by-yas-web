import fs from 'node:fs';
const source = fs.readFileSync('src/data/catalog.ts','utf8');
const ids = [...source.matchAll(/id: '([^']+)'/g)].map(m=>m[1]);
if (!source.includes("phone: '18626680038'") || !source.includes('cakes_byyas_')) throw Error('Contact changed');
if (/pecca/i.test(source)) throw Error('Rejected product reintroduced');
for (const expected of ['mini-tres-leches','mini-chocoflan','mini-jellies','passion-fruit-mousse','mini-flan','dominican-cake']) if(!ids.includes(expected)) throw Error(`Missing ${expected}`);
console.log('Content: confirmed contact and required menu entries present; rejected product absent.');
