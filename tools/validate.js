#!/usr/bin/env node
/* Bank validator — structural gate for all question banks.
   Usage: node tools/validate.js [banks/file.js ...]   (no args = validate all + cross-file checks) */
const fs = require('fs'), path = require('path'), vm = require('vm');

const EXPECT = {
  "teas-reading":    { prefix:"TRA", exam:"teas", total:45, subs:{"Key Ideas and Details":17,"Craft and Structure":11,"Integration of Knowledge and Ideas":17}, alt:{order:2, ms:2} },
  "teas-math":       { prefix:"TMA", exam:"teas", total:38, subs:{"Numbers and Algebra":21,"Measurement and Data":17}, alt:{fill:5, hotspot:1, ms:1} },
  "teas-science-ap": { prefix:"TSA", exam:"teas", total:31, subs:{"Human Anatomy & Physiology":21,"Biology":10}, alt:{order:2, ms:3, hotspot:1} },
  "teas-science-cr": { prefix:"TSC", exam:"teas", total:19, subs:{"Chemistry":9,"Scientific Reasoning":10}, alt:{order:1, ms:1, hotspot:1, fill:1} },
  "teas-english":    { prefix:"TEA", exam:"teas", total:37, subs:{"Conventions of Standard English":13,"Knowledge of Language":12,"Vocabulary Acquisition":12}, alt:{ms:3} },
  "hesi-math":       { prefix:"HMA", exam:"hesi", total:55, subs:{"fractions":8,"decimals-percents":8,"ratio-proportion":8,"conversions":9,"military time":3,"roman numerals":3,"dosage word problems":9,"basic algebra":7}, alt:{fill:7} },
  "hesi-reading":    { prefix:"HRA", exam:"hesi", total:55, subs:{"main idea":12,"supporting detail":10,"inference":13,"author's purpose/tone":10,"vocabulary in context":10}, alt:{} },
  "hesi-vocab":      { prefix:"HVA", exam:"hesi", total:55, subs:{"clinical-flavored":22,"general academic":25,"word parts/context":8}, alt:{} },
  "hesi-grammar":    { prefix:"HGA", exam:"hesi", total:55, subs:{"subject-verb agreement":9,"pronoun case/agreement":9,"punctuation":9,"commonly confused words":12,"sentence structure/modifiers":9,"verb tense/form":7}, alt:{} },
  "hesi-bio-ap":     { prefix:"HBA", exam:"hesi", total:60, subs:{"macromolecules":6,"cell structure":6,"cellular respiration/photosynthesis":5,"genetics":6,"DNA/RNA-protein synthesis":4,"scientific method/taxonomy":3,"A&P":30}, alt:{} },
};
const TYPES = ["mc","ms","fill","order","hotspot"];
const BANNED = [/\ball of the above\b/i, /\bnone of the above\b/i, /\bboth a and b\b/i];

let failures = 0, warnings = 0;
const fail = (f,m) => { failures++; console.log(`  FAIL  [${f}] ${m}`); };
const warn = (f,m) => { warnings++; console.log(`  warn  [${f}] ${m}`); };

function loadBank(file) {
  const code = fs.readFileSync(file, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: file });
  return sandbox.window.BANKS || {};
}

function validateFile(file, globalIds, globalStems) {
  const base = path.basename(file, '.js');
  const exp = EXPECT[base];
  console.log(`\n== ${base} ==`);
  if (!exp) { fail(base, `unknown bank file (not in EXPECT table)`); return; }
  let banks;
  try { banks = loadBank(file); }
  catch (e) { fail(base, `does not execute: ${e.message}`); return; }
  const keys = Object.keys(banks);
  if (keys.length !== 1 || keys[0] !== base) { fail(base, `must define exactly window.BANKS["${base}"], found [${keys}]`); return; }
  const bank = banks[base];
  if (bank.exam !== exp.exam) fail(base, `exam should be "${exp.exam}"`);
  const qs = bank.questions || [];
  if (qs.length !== exp.total) fail(base, `question count ${qs.length}, expected ${exp.total}`);

  const subCount = {}, typeCount = {}, keyPos = [0,0,0,0];
  const serialRe = new RegExp(`^${exp.prefix}-\\d{3}$`);
  qs.forEach((q,i) => {
    const tag = q.id || `#${i}`;
    if (!q.id || !serialRe.test(q.id)) fail(base, `${tag}: id must match ${exp.prefix}-NNN`);
    if (globalIds.has(q.id)) fail(base, `${tag}: duplicate id (also in ${globalIds.get(q.id)})`); else globalIds.set(q.id, base);
    if (!(q.sub in exp.subs)) fail(base, `${tag}: sub "${q.sub}" not in blueprint ${Object.keys(exp.subs).join(" | ")}`);
    subCount[q.sub] = (subCount[q.sub]||0)+1;
    if (!TYPES.includes(q.type)) fail(base, `${tag}: bad type "${q.type}"`);
    typeCount[q.type] = (typeCount[q.type]||0)+1;
    if (!q.q || q.q.length < 8) fail(base, `${tag}: missing/short stem`);
    const stemKey = (q.q||'').toLowerCase().replace(/\W+/g,' ').trim();
    if (globalStems.has(stemKey)) warn(base, `${tag}: stem duplicates ${globalStems.get(stemKey)}`); else globalStems.set(stemKey, q.id);
    if (![1,2,3].includes(q.diff)) fail(base, `${tag}: diff must be 1|2|3`);
    if (typeof q.secs !== 'number') fail(base, `${tag}: secs missing`);
    if (q.passage && !(bank.passages||{})[q.passage]) fail(base, `${tag}: passage "${q.passage}" not defined`);
    if (!q.rationale || !q.rationale.correct || q.rationale.correct.length < 15) fail(base, `${tag}: rationale.correct missing/short`);
    (q.choices||[]).forEach(c => BANNED.forEach(re => { if (re.test(c)) fail(base, `${tag}: banned option "${c}"`); }));

    if (q.type === 'mc') {
      if (!Array.isArray(q.choices) || q.choices.length !== 4) fail(base, `${tag}: mc needs exactly 4 choices`);
      else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) fail(base, `${tag}: mc answer out of range`);
      else {
        keyPos[q.answer]++;
        const w = (q.rationale||{}).wrong;
        if (!Array.isArray(w) || w.length !== 4) fail(base, `${tag}: rationale.wrong must have 4 entries`);
        else { if (w[q.answer] !== null) fail(base, `${tag}: rationale.wrong[key] must be null`);
               w.forEach((x,j) => { if (j !== q.answer && (!x || x.length < 8)) fail(base, `${tag}: rationale.wrong[${j}] missing`); }); }
        const lens = q.choices.map(c=>c.length);
        if (lens[q.answer] === Math.max(...lens) && lens[q.answer] > 1.6*(lens.reduce((a,b)=>a+b,0)-lens[q.answer])/3)
          warn(base, `${tag}: key noticeably longest option`);
      }
    } else if (q.type === 'ms') {
      if (!Array.isArray(q.choices) || q.choices.length < 5 || q.choices.length > 6) fail(base, `${tag}: ms needs 5-6 choices`);
      if (!Array.isArray(q.answer) || q.answer.length < 2 || q.answer.length > 3
          || q.answer.some(a=>!Number.isInteger(a)||a<0||a>=(q.choices||[]).length)
          || new Set(q.answer).size !== q.answer.length) fail(base, `${tag}: ms answer must be 2-3 unique valid indices`);
      if (!/select all that apply/i.test(q.q)) fail(base, `${tag}: ms stem must say "Select all that apply."`);
    } else if (q.type === 'fill') {
      if (!q.answer || !Array.isArray(q.answer.accept) || !q.answer.accept.length) fail(base, `${tag}: fill needs answer.accept[]`);
    } else if (q.type === 'order') {
      if (!Array.isArray(q.items) || q.items.length < 4 || q.items.length > 6) fail(base, `${tag}: order needs 4-6 items`);
      else if (!Array.isArray(q.answer) || q.answer.length !== q.items.length
          || [...q.answer].sort((a,b)=>a-b).join() !== q.items.map((_,j)=>j).join()) fail(base, `${tag}: order answer must be a permutation of item indices`);
      else if (q.answer.join() === q.items.map((_,j)=>j).join()) warn(base, `${tag}: items listed already in correct order — scramble them`);
    } else if (q.type === 'hotspot') {
      if (!q.svg || !/viewBox/.test(q.svg)) fail(base, `${tag}: hotspot needs svg with viewBox`);
      if (!Array.isArray(q.regions) || q.regions.length < 2 || q.regions.length > 5) fail(base, `${tag}: hotspot needs 2-5 regions`);
      else { const ids = q.regions.map(r=>r.id);
        if (new Set(ids).size !== ids.length) fail(base, `${tag}: duplicate region ids`);
        if (!ids.includes(q.answer)) fail(base, `${tag}: answer must be a region id`);
        q.regions.forEach(r => { if (!r.label || !['rect'].includes(r.shape) || [r.x,r.y,r.w,r.h].some(v=>typeof v!=='number')) fail(base, `${tag}: region ${r.id} malformed`); });
      }
    }
  });

  Object.entries(exp.subs).forEach(([s,n]) => { if ((subCount[s]||0) !== n) fail(base, `sub "${s}": ${subCount[s]||0} items, expected ${n}`); });
  Object.entries(exp.alt).forEach(([t,n]) => { if ((typeCount[t]||0) < n) fail(base, `type "${t}": ${typeCount[t]||0} items, expected >= ${n}`); });
  const mcTotal = keyPos.reduce((a,b)=>a+b,0);
  if (mcTotal >= 20) keyPos.forEach((n,i) => { const share = n/mcTotal;
    if (share < 0.14 || share > 0.36) warn(base, `key position ${'ABCD'[i]} share ${(share*100).toFixed(0)}% (aim 15-35%)`); });
  console.log(`  ${qs.length} items | subs ${JSON.stringify(subCount)} | types ${JSON.stringify(typeCount)} | keys A/B/C/D ${keyPos.join('/')}`);
}

const args = process.argv.slice(2);
const files = args.length ? args : fs.readdirSync(path.join(__dirname,'..','banks')).filter(f=>f.endsWith('.js')).map(f=>path.join(__dirname,'..','banks',f));
const globalIds = new Map(), globalStems = new Map();
files.forEach(f => validateFile(f, globalIds, globalStems));
console.log(`\n${failures ? 'FAIL' : 'PASS'} — ${failures} failure(s), ${warnings} warning(s) across ${files.length} file(s)`);
process.exit(failures ? 1 : 0);
