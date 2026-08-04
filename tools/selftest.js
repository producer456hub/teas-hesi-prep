#!/usr/bin/env node
/* Runs the page's own __selftest() in Node against the real banks,
   with just enough DOM stubbed for the engine to boot.
   Usage: node tools/selftest.js */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const m = html.match(/<script>\n([\s\S]*?)\n<\/script>/);
if (!m) { console.error('could not extract engine script'); process.exit(1); }
const engine = m[1];

/* --- minimal DOM --- */
function node(){ const o = { textContent:'', innerHTML:'', value:'', className:'', style:{},
  classList:{ add(){}, remove(){}, toggle(){}, contains(){return false} },
  appendChild(){}, remove(){}, addEventListener(){}, click(){}, files:[] }; return o; }
const store = {};
const sandbox = {
  console,
  window: { BANKS:{}, addEventListener(){}, },
  document: {
    getElementById: () => node(),
    querySelectorAll: () => [],
    createElement: () => node(),
    body: { appendChild(){} },
    addEventListener(){}
  },
  localStorage: {
    getItem: k => (k in store ? store[k] : null),
    setItem: (k,v) => { store[k] = String(v); },
    removeItem: k => { delete store[k]; }
  },
  setTimeout, clearTimeout, setInterval: () => 0, clearInterval(){},
  Blob: function(){}, URL: { createObjectURL: () => '', revokeObjectURL(){} },
  FileReader: function(){},
  confirm: () => true, alert(){},
  Date, Math, JSON, parseFloat, parseInt, isFinite, isNaN, Set, Map, Array, Object, String, Number
};
sandbox.window.document = sandbox.document;
sandbox.window.localStorage = sandbox.localStorage;
vm.createContext(sandbox);

/* load banks first — they populate window.BANKS */
const bankDir = path.join(root, 'banks');
const files = fs.readdirSync(bankDir).filter(f => f.endsWith('.js')).sort();
files.forEach(f => vm.runInContext(fs.readFileSync(path.join(bankDir, f), 'utf8'), sandbox, { filename: f }));
console.log('loaded ' + files.length + ' bank files, ' +
  Object.values(sandbox.window.BANKS).reduce((a,b)=>a+b.questions.length,0) + ' questions\n');

vm.runInContext(engine, sandbox, { filename: 'engine.js' });

const report = vm.runInContext('__selftest()', sandbox);
console.log(report);
process.exit(/FAIL/.test(report) ? 1 : 0);
