import fs from 'node:fs';
const base = process.argv[2] || 'http://127.0.0.1:4322';
const probes = [];
for (const [route, expected] of [['/en/',200],['/es/',200],['/missing-cake',404],['/missing-cake.json',404],['/_gallery/',404],['/galeria/',404]]) {
  const response = await fetch(new URL(route,base), { signal: AbortSignal.timeout(10000) });
  probes.push({route,status:response.status,expected,ok:response.status===expected});
}
fs.writeFileSync('audit/preview-surfaces.json',JSON.stringify({base,generated:new Date().toISOString(),probes},null,2));
console.log(probes);
if(probes.some(p=>!p.ok))process.exit(1);
