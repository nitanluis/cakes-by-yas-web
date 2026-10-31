#!/usr/bin/env node
// check-design-sync.mjs — barrier for convention C8: DESIGN.md (prose) and its machine sidecar say the same thing.
//
//   node check-design-sync.mjs [--doc DESIGN.md] [--sidecar .impeccable/design.json] [--root .]
//
// Checks: every named rule ("**The … Rule**") exists on both sides; token files declared in the
// front-matter and in the sidecar match and exist; every sidecar component has a section in the doc
// and its file exists; the action token exists in the semantic tokens file. Exit 1 on any mismatch.
// Why: when one of the two forms drifts, the other is ghost documentation and agents decide against a system that no longer exists.
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : def; };
const ROOT = path.resolve(opt("--root", "."));
const DOC = path.resolve(ROOT, opt("--doc", "DESIGN.md"));
const SIDE = path.resolve(ROOT, opt("--sidecar", ".impeccable/design.json"));
const problems = [];
if (!fs.existsSync(DOC)) { console.error("no existe " + DOC); process.exit(2); }
if (!fs.existsSync(SIDE)) { console.error("no existe " + SIDE + " — crea el sidecar (references/design-doc.md de design-foundations)"); process.exit(2); }

const doc = fs.readFileSync(DOC, "utf8");
const side = JSON.parse(fs.readFileSync(SIDE, "utf8"));
const fm = (doc.match(/^---\s*\n([\s\S]*?)\n---/) || [, ""])[1];
const fmTokens = ((fm.match(/^tokens:\s*(.*)$/m) || [, ""])[1]).split(",").map((s) => s.trim()).filter(Boolean);

// 1) named rules on both sides
// "**The 2 % Rule.**" (Serviarte writes the period inside the bold) and "### The X Rule" both count.
const docRules = [...doc.matchAll(/(?:\*\*|^#{2,4}\s+)(The [^*\n]+? Rule)[.:]?(?:\*\*|\s*$)/gm)].map((m) => m[1].trim());
const sideRules = ((side.narrative && side.narrative.rules) || []).map((r) => (r.name || "").trim());
for (const r of docRules) if (!sideRules.includes(r)) problems.push(`regla "${r}" está en DESIGN.md pero no en el sidecar`);
for (const r of sideRules) if (!docRules.includes(r)) problems.push(`regla "${r}" está en el sidecar pero no en DESIGN.md`);

// 2) token files
const sideTokens = side.tokens ? [side.tokens.primitives, side.tokens.semantic].filter(Boolean) : [];
for (const t of new Set([...fmTokens, ...sideTokens])) {
  if (fmTokens.length && !fmTokens.includes(t)) problems.push(`token file ${t} en el sidecar pero no en el front-matter`);
  if (sideTokens.length && !sideTokens.includes(t)) problems.push(`token file ${t} en el front-matter pero no en el sidecar`);
  if (!fs.existsSync(path.resolve(ROOT, t))) problems.push(`token file ${t} no existe`);
}

// 3) components — the sidecar uses human names ("Botón primario") while the prose titles by family
// ("Buttons (`Boton`)"): match loosely inside the Components section (name, aliases or the file's basename).
// A missing mention is a warning; a missing file is a failure.
const warnings = [];
const compSection = (doc.split(/^##\s+Components\b/m)[1] || doc).toLowerCase();
for (const c of side.components || []) {
  const needles = [c.name, ...(c.aliases || []), c.file ? path.basename(c.file).replace(/\.[^.]+$/, "") : ""].filter(Boolean).map((s) => s.toLowerCase());
  if (!needles.some((n) => compSection.includes(n))) warnings.push(`componente "${c.name}" no se menciona en la sección Components de DESIGN.md (ni por alias ni por archivo)`);
  if (c.file && !fs.existsSync(path.resolve(ROOT, c.file))) problems.push(`componente ${c.name}: ${c.file} no existe`);
}

// 4) action token
const action = side.tokens && side.tokens.action;
const semantic = side.tokens && side.tokens.semantic;
if (action && semantic && fs.existsSync(path.resolve(ROOT, semantic))) {
  if (!fs.readFileSync(path.resolve(ROOT, semantic), "utf8").includes(action + ":")) problems.push(`${action} no está declarado en ${semantic}`);
}

console.log(`# check-design-sync · ${path.relative(ROOT, DOC)} ↔ ${path.relative(ROOT, SIDE)} · reglas doc=${docRules.length} sidecar=${sideRules.length} · componentes=${(side.components || []).length}`);
for (const p of problems) console.log("  ✗ " + p);
for (const w of warnings) console.log("  · " + w);
console.log(problems.length ? `\n${problems.length} desajuste(s): uno de los dos es documentación fantasma.` : warnings.length ? `\nSincronizados, con ${warnings.length} aviso(s).` : "\nSincronizados.");
process.exit(problems.length ? 1 : 0);
