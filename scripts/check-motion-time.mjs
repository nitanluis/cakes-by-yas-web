import assert from 'node:assert/strict';
import fs from 'node:fs';
import { cssSeconds } from '../src/shared/css-time.ts';

// Production CSS rewrites time units; GSAP must receive identical seconds in either form.
for (const [raw, expected] of [['1200ms',1.2],['1.2s',1.2],['  .3s ',.3],['850ms',.85],['.85s',.85],['3600ms',3.6],['3.6s',3.6],['0',0],['0s',0],['0ms',0]]) {
  assert.equal(cssSeconds(raw),expected,raw);
}
assert.throws(()=>cssSeconds(''),/Expected a CSS time/);
assert.throws(()=>cssSeconds('1200'),/Expected a CSS time/);
const source = fs.readFileSync('src/shared/tokens/primitives.css','utf8');
const tokens = [...source.matchAll(/(--(?:dur|delay)-[\w-]+):\s*([\d.]+)(ms|s);/g)];
assert.ok(tokens.length>0);
for (const [,name,amount,unit] of tokens) {
  const expected = unit==='ms' ? Number(amount)/1000 : Number(amount);
  assert.equal(cssSeconds(`${amount}${unit}`),expected,name);
  assert.equal(cssSeconds(`${expected}s`),expected,`${name} minified`);
}
const duration = name => {
  const token = tokens.find(([,key]) => key === name);
  assert.ok(token, name);
  return cssSeconds(`${token[2]}${token[3]}`);
};
assert.ok(duration('--dur-intro-min') + duration('--dur-intro-handoff') + duration('--dur-line') < duration('--dur-intro-failsafe'), 'The opaque handoff and curtain must finish before the safety timeout.');
console.log(`Motion timing: ${tokens.length} tokens preserve duration in ms and minified s.`);
