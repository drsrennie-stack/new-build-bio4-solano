/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   tools/validate_tbl_apps.js

   Checks application questions for the TBL Study Group tool.
   Usage:
     node tools/validate_tbl_apps.js file1.json [file2.json ...]
     node tools/validate_tbl_apps.js bio004-tbl-apps.js
   Exit code 1 if any problem is found.
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

global.window = {};
require(path.join(ROOT, 'competenciesfall2026.js'));
require(path.join(ROOT, 'bio004-card-bank.js'));
require(path.join(ROOT, 'bio004-tbl-lab-data.js'));
const COMPS = new Set(window.BIO004_COMPETENCIES.map((c) => c.id));
const TOPICS = new Set();
window.BIO004_CARD_BANK.modules.forEach((m) => m.topics.forEach((t) => TOPICS.add(t.id)));
window.BIO004_TBL_LAB.modules.forEach((m) => m.topics.forEach((t) => TOPICS.add(t.id)));

const TYPES = ['Ranking', 'Sequence', 'Priority', 'Trigger'];
const BAD = [
  [/[\u2014\u2013]/, 'em or en dash'],
  [/<\/?(i|em)>|\*[^*]+\*/, 'italics'],
  [/\b(choice|option|answer)\s+[A-D]\b|\(\s*[A-D]\s*\)|\b[A-D]\s+is (correct|wrong|incorrect)/i, 'refers to a choice by letter'],
  [/all of the above|none of the above|both [A-D] and/i, 'all/none of the above'],
  [/given not googled/i, 'banned phrase'],
  [/which nerve (supplies|innervates)|innervat(es|ion of) the/i, 'nerve-to-muscle question'],
  [/\u00b0\s*F\b(?![^(]*\))/, 'Fahrenheit without Celsius first']
];

function load(file) {
  const s = fs.readFileSync(file, 'utf8');
  if (file.endsWith('.json')) return JSON.parse(s);
  window.BIO004_TBL_APPS = null;
  eval(s); // eslint-disable-line no-eval
  const A = window.BIO004_TBL_APPS;
  return A.items || A;
}

let problems = 0;
const seen = new Set();
const allItems = [];
for (const file of process.argv.slice(2)) {
  let items;
  try { items = load(file); } catch (e) { console.log(file + ': cannot parse: ' + e.message); problems++; continue; }
  if (!Array.isArray(items)) { console.log(file + ': not an array'); problems++; continue; }
  items.forEach((it, i) => {
    const where = file.split('/').pop() + ' #' + i + ' ' + (it.id || '');
    const err = (m) => { console.log(where + ': ' + m); problems++; };
    ['id', 'mode', 'topic', 'comp', 'type', 'dok', 'q', 'options', 'correctIndex', 'why', 'notes', 'fix'].forEach((k) => { if (it[k] === undefined || it[k] === '') err('missing ' + k); });
    if (seen.has(it.id)) err('duplicate id'); seen.add(it.id);
    if (!['lecture', 'lab'].includes(it.mode)) err('mode must be lecture or lab');
    if (!TOPICS.has(it.topic)) err('unknown topic ' + it.topic);
    if (!COMPS.has(it.comp)) err('unknown competency ' + it.comp);
    if (!TYPES.includes(it.type)) err('type must be one of ' + TYPES.join(', '));
    if (![3, 4].includes(it.dok)) err('dok must be 3 or 4');
    if (!Array.isArray(it.options) || it.options.length !== 4) err('needs exactly 4 options');
    else {
      const norm = it.options.map((o) => String(o).trim().toLowerCase());
      if (new Set(norm).size !== 4) err('options are not all different');
    }
    if (!(it.correctIndex >= 0 && it.correctIndex <= 3)) err('correctIndex must be 0 to 3');
    if (!Array.isArray(it.notes) || it.notes.length !== 4) err('needs exactly 4 notes');
    else {
      it.notes.forEach((n, ni) => {
        const isC = /^Correct\b/.test(String(n).trim());
        if (ni === it.correctIndex && !isC) err('note for the correct option must start with "Correct."');
        if (ni !== it.correctIndex && isC) err('a wrong option note starts with "Correct"');
        if (String(n).trim().length < 40) err('note ' + ni + ' is too thin');
      });
    }
    if (String(it.why).length < 120) err('why is too thin');
    const text = [it.q, it.why, it.fix].concat(it.options || [], it.notes || []).join(' \n ');
    BAD.forEach(([rx, msg]) => { if (rx.test(text)) err(msg); });
    allItems.push(it);
  });
}
if (allItems.length) {
  const pos = [0, 0, 0, 0];
  let longest = 0;
  allItems.forEach((it) => {
    pos[it.correctIndex] = (pos[it.correctIndex] || 0) + 1;
    if (Array.isArray(it.options) && it.options.length === 4) {
      const L = it.options.map((o) => String(o).length);
      if (L[it.correctIndex] === Math.max(...L) && L.filter((x) => x === Math.max(...L)).length === 1) longest++;
    }
  });
  const pct = Math.round((100 * longest) / allItems.length);
  console.log(allItems.length + ' items. Correct position counts: ' + pos.join(' / ') + '. Correct is the single longest choice on ' + pct + '%.');
  if (pct > 35) { console.log('Too often the longest choice (keep it under 35%).'); problems++; }
}
console.log(problems ? problems + ' problem(s).' : 'No problems found.');
process.exit(problems ? 1 : 0);
