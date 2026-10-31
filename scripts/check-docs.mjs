#!/usr/bin/env node
// check-docs.mjs — documentation claims as executable assertions (barrier for convention C5).
//
//   node check-docs.mjs [docs/claims.yml] [--root .]
//
// Every non-trivial statement in README / CLAUDE.md / PRODUCT / DESIGN / HANDOFF gets an entry:
//   - claim: "el sitio está desplegado en producción"
//     doc: README.md:12
//     assert: curl -s -o /dev/null -w '%{http_code}' https://example.com
//     expect: contains:200        # pass (exit 0) | fail (exit != 0) | contains:<text>
// Runs each assert (read-only) from the project root and fails the build on the first FAIL.
// Why: 7/7 audited projects had docs contradicted by their code; agents read those docs as truth.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const FILE = args.find((a) => !a.startsWith("--")) || "docs/claims.yml";
const opt = (name, def) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : def; };
const ROOT = path.resolve(opt("--root", "."));
const SHELL = opt("--shell", "bash");
if (!fs.existsSync(FILE)) { console.error(`no existe ${FILE}: crea uno desde templates/claims.yml`); process.exit(2); }

// Minimal YAML subset: a list of flat mappings with scalar values ("- key: value" / "  key: value").
function parseClaims(text) {
  const items = []; let cur = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/\s+#.*$/, "").replace(/^\s*#.*$/, "");
    if (!line.trim()) continue;
    const m = line.match(/^(\s*)(-\s+)?([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!m) continue;
    if (m[2]) { cur = {}; items.push(cur); }
    if (!cur) { cur = {}; items.push(cur); }
    let v = m[4].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    cur[m[3]] = v;
  }
  return items;
}
// Same read-only guard as the audit runner: an assert must never be able to change the project.
const UNSAFE = [/(^|[\s;|&(`])(rm|rmdir|mv|cp|dd|tee|chmod|chown|mkdir|touch|ln|npm|npx|pnpm|yarn|bun|pip|ssh|scp|kill|sudo)\b/, /\bsed\s+-i\b/, /\bgit\s+(?!grep\b|ls-files\b|log\b|show\b|status\b|diff\b|rev-parse\b)/, /(?<![0-9&])>(?!>|&|\s*\/dev\/null)/, />>/, /\$\(/, /`/];

const claims = parseClaims(fs.readFileSync(FILE, "utf8"));
let failed = 0;
console.log(`# check-docs · ${FILE} · ${claims.length} claims · root ${ROOT}`);
for (const c of claims) {
  const label = `${(c.doc || "?").padEnd(28)} ${(c.claim || "").slice(0, 70)}`;
  if (!c.assert) { console.log(`  SKIP ${label}  (sin assert)`); continue; }
  if (UNSAFE.some((re) => re.test(c.assert))) { console.log(`  FAIL ${label}  (assert no es de solo lectura)`); failed++; continue; }
  if (c.doc) { const [f, ln] = c.doc.split(":"); const fp = path.join(ROOT, f); if (!fs.existsSync(fp)) { console.log(`  FAIL ${label}  (el documento ${f} no existe)`); failed++; continue; } if (ln && +ln > fs.readFileSync(fp, "utf8").split("\n").length) { console.log(`  FAIL ${label}  (línea ${ln} fuera del documento)`); failed++; continue; } }
  const r = spawnSync(SHELL, ["-c", c.assert], { cwd: ROOT, encoding: "utf8", timeout: 30000, windowsHide: true });
  const out = ((r.stdout || "") + (r.stderr || "")).trim();
  const expect = (c.expect || "pass").trim();
  let ok;
  if (expect === "pass") ok = r.status === 0;
  else if (expect === "fail") ok = r.status !== 0;
  else if (expect.startsWith("contains:")) ok = out.includes(expect.slice(9));
  else ok = false;
  if (!ok) failed++;
  console.log(`  ${ok ? "PASS" : "FAIL"} ${label}${ok ? "" : `  → exit=${r.status} salida="${out.slice(0, 120).replace(/\n/g, " ")}" esperado=${expect}`}`);
}
console.log(failed ? `\n${failed} claim(s) FALSAS: la documentación contradice al proyecto.` : "\nTodas las claims pasan.");
process.exit(failed ? 1 : 0);
