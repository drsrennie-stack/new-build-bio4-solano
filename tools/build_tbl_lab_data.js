/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   tools/build_tbl_lab_data.js

   Builds bio004-tbl-lab-data.js, the LAB question pool for the
   TBL Study Group tool (bio004-tbl-study.html), straight from the
   digital atlas (drsrennie-stack/new-digital-atlas).

   Every labeled structure in an atlas DECK becomes one image
   question: the atlas image with one marker, "Name the structure",
   and four choices. The three wrong choices are other structures
   from the SAME figure whenever the figure has enough of them, so
   the answer breakdown can point to where each wrong choice really
   sits. Atlas "Name the muscle at the gold ring" style cards become
   image questions with wrong choices taken from the same chapter.

   Run from the course repo root:
     node tools/build_tbl_lab_data.js ../new-digital-atlas

   Rerun it whenever atlas pages change. Nothing else needs editing.
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const ATLAS = path.resolve(process.argv[2] || '../new-digital-atlas');
const OUT = path.resolve(__dirname, '..', 'bio004-tbl-lab-data.js');
const BASE = 'https://drsrennie-stack.github.io/new-digital-atlas/';

/* ---------- lab topics, by module ----------
   page:  atlas page id (DECK.id)
   sets:  which DECK sets belong to this lab topic (omit = all)
   bank:  card bank topics whose cards are lab practice for the same
          structures (they join the lab draw as text questions)      */
const MODULES = [
  { id: 'm1', title: 'Module 1. Foundations, Cells, Tissues and Skin', topics: [
    { id: 'lab-m1-bodyplan', title: 'Body regions, planes and cavities', parts: [{ page: 'bodyplan' }] },
    { id: 'lab-m1-tissues', title: 'Tissues under the microscope', parts: [{ page: 'tissues' }, { page: 'muscle', sets: ['histo'] }] },
    { id: 'lab-m1-skin', title: 'Skin model and skin histology', parts: [{ page: 'skin' }] }
  ]},
  { id: 'm2', title: 'Module 2. The Skeletal System', topics: [
    { id: 'lab-m2-bonetissue', title: 'Cartilage, bone tissue and the long bone', parts: [{ page: 'bonetissue' }] },
    { id: 'lab-m2-skull', title: 'Skull', parts: [], bank: ['m2-skull'] },
    { id: 'lab-m2-spine', title: 'Vertebral column and sternum', parts: [{ page: 'skeleton', sets: ['spine'] }, { page: 'ulbones', sets: ['thorax'] }], bank: ['m2-spine-thorax'] },
    { id: 'lab-m2-upper', title: 'Pectoral girdle and upper limb bones', parts: [{ page: 'ulbones', sets: ['girdle', 'arm', 'forearm', 'hand'] }], bank: ['m2-upper-extremity'] },
    { id: 'lab-m2-lower', title: 'Pelvis and lower limb bones', parts: [{ page: 'skeleton', sets: ['pelvis', 'limb'] }], bank: ['m2-lower-extremity'] },
    { id: 'lab-m2-joints', title: 'Joints and the knee', parts: [{ page: 'joints' }] }
  ]},
  { id: 'm3', title: 'Module 3. Heart, Vessels, Muscle and Blood', topics: [
    { id: 'lab-m3-heart', title: 'Heart (models and cadaver)', parts: [{ page: 'heart' }] },
    { id: 'lab-m3-vessels', title: 'Blood vessel histology and models', parts: [{ page: 'bvessels' }] },
    { id: 'lab-m3-blood', title: 'Blood cells', parts: [{ page: 'blood' }] },
    { id: 'lab-m3-muscle-micro', title: 'Muscle microanatomy', parts: [{ page: 'muscle', sets: ['micro'] }] },
    { id: 'lab-m3-back', title: 'Back and thorax muscles', parts: [{ page: 'back' }], bank: ['m3-back-thorax-muscles'] },
    { id: 'lab-m3-arm', title: 'Shoulder and arm muscles', parts: [{ page: 'upper', sets: ['sh', 'arm'] }], bank: ['m3-arm-muscles'] },
    { id: 'lab-m3-forearm', title: 'Forearm and hand muscles', parts: [{ page: 'upper', sets: ['fa'] }], bank: ['m3-forearm-anterior', 'm3-forearm-posterior', 'm3-hand-muscles'] },
    { id: 'lab-m3-ul-review', title: 'Upper limb muscles: models and cadaver review', parts: [{ page: 'upper', sets: ['models', 'cad', 'cadm'] }] },
    { id: 'lab-m3-uevn', title: 'Upper limb vessels and nerves', parts: [{ page: 'uevn' }], bank: ['m3-upper-limb-vessels', 'm3-upper-limb-nerves'] }
  ]},
  { id: 'm4', title: 'Module 4. Respiratory, Lymphatic, Endocrine, Lower Limb and Digestive', topics: [
    { id: 'lab-m4-resp', title: 'Respiratory system', parts: [{ page: 'resp' }] },
    { id: 'lab-m4-thigh', title: 'Thigh and gluteal muscles', parts: [{ page: 'thigh' }], bank: ['m4-hip-thigh-muscles'] },
    { id: 'lab-m4-leg', title: 'Leg muscles, vessels and nerves', parts: [{ page: 'leg' }], bank: ['m4-leg-muscles', 'm4-lower-limb-nav'] },
    { id: 'lab-m4-digest', title: 'Digestive organs', parts: [{ page: 'digest', sets: ['organs', 'stomach', 'intestine', 'liver', 'pancreas', 'glands'] }] },
    { id: 'lab-m4-abwall', title: 'Abdominal wall and peritoneum', parts: [{ page: 'digest', sets: ['wall'] }], bank: ['mx-abdominal-wall'] },
    { id: 'lab-m4-abdves', title: 'Abdominal and pelvic vessels', parts: [{ page: 'abdves' }], bank: ['m4-abdominal-vessels'] }
  ]},
  { id: 'm5', title: 'Module 5. Urinary, Reproductive and Nervous Systems', topics: [
    { id: 'lab-m5-urinary', title: 'Urinary system', parts: [{ page: 'urinary' }] },
    { id: 'lab-m5-female', title: 'Female reproductive system', parts: [{ page: 'repro', sets: ['female'] }] },
    { id: 'lab-m5-male', title: 'Male reproductive system', parts: [{ page: 'repro', sets: ['male'] }] },
    { id: 'lab-m5-brain', title: 'Brain, meninges and ventricles', parts: [{ page: 'brain', sets: ['meninges', 'cerebrum', 'stem', 'csf', 'vessels', 'dura', 'facts'] }] },
    { id: 'lab-m5-cn', title: 'Cranial nerves', parts: [{ page: 'brain', sets: ['cn'] }] },
    { id: 'lab-m5-spinal', title: 'Spinal cord', parts: [{ page: 'spinal' }] },
    { id: 'lab-m5-eye', title: 'Eye muscles', parts: [{ page: 'headneck', sets: ['eye', 'eyem'] }] }
  ]},
  { id: 'mx', title: 'More practice', topics: [
    { id: 'lab-mx-face', title: 'Face, jaw and neck muscles', parts: [{ page: 'upper', sets: ['face', 'facem'] }], bank: ['mx-head-neck-muscles'] }
  ]}
];

/* Atlas "name it" prompts that become image questions. Anything that
   asks which nerve supplies a muscle is left out on purpose: students
   identify nerves by location, not by what they supply. */
const ID_PROMPT = /^name (the|this|these) /i;
/* Atlas prompts that do not fit their answer. The atlas page itself
   should be fixed too; this keeps the TBL question correct meanwhile. */
const PROMPT_FIX = { 'ductus deferens': 'Name this structure.' };
const SKIP_PROMPT = /nerve supplies|supplies the|innervat/i;

function loadDeck(file) {
  const s = fs.readFileSync(file, 'utf8');
  const i = s.indexOf('const DECK=');
  if (i < 0) return null;
  let j = i + 11, d = 0, q = false, e = false;
  for (; j < s.length; j++) {
    const c = s[j];
    if (q) { if (e) e = false; else if (c === '\\') e = true; else if (c === '"') q = false; continue; }
    if (c === '"') q = true; else if (c === '{') d++; else if (c === '}') { d--; if (!d) { j++; break; } }
  }
  return JSON.parse(s.slice(i + 11, j));
}

/* atlas competency matcher (same rules as atlas-competency-map.js) */
global.window = {};
require(path.join(ATLAS, 'atlas-competency-map.js'));
const compsFor = window.ATLAS_COMPETENCY_MAP.compsFor;

const norm = (t) => String(t || '').toLowerCase()
  .replace(/\(.*?\)/g, ' ').replace(/[^a-z0-9 ]+/g, ' ').replace(/\b(the|of|a|an)\b/g, ' ')
  .replace(/\s+/g, ' ').trim();
const clean = (t) => String(t || '').replace(/\s*\u2014\s*/g, ', ').replace(/\s+/g, ' ').trim();
/* structure names: drop add-on facts after a colon ("SA node: intrinsic rate ...") */
const cleanName = (t) => {
  const s = clean(t);
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') depth++; else if (s[i] === ')') depth--;
    else if (s[i] === ':' && depth === 0) return s.slice(0, i).trim();
  }
  return s;
};
/* prompts: keep only the naming question ("Name this space. What fluid ..." -> "Name this space.") */
const cleanQ = (t) => clean(t).split(/(?<=[.?])\s+/)[0];

function sameThing(a, b) {
  const x = norm(a.a), y = norm(b.a);
  if (!x || !y) return true;
  if (x === y) return true;
  const ax = (a.acc || []).map(norm), by = (b.acc || []).map(norm);
  if (ax.includes(y) || by.includes(x)) return true;
  return false;
}

const decks = {};
for (const f of fs.readdirSync(ATLAS).filter((f) => f.endsWith('.html'))) {
  const D = loadDeck(path.join(ATLAS, f));
  if (D && D.cards) decks[D.id] = D;
}

const figs = {};
const report = [];
let skipped = 0;

function figKey(page, card) { return page + '-' + String(card.id || card.n).padStart(2, '0'); }
function addFig(page, card) {
  const k = figKey(page, card);
  if (!figs[k]) figs[k] = { img: card.img, w: card.w, h: card.h, r: card.r || 0, t: clean(card.title),
    pins: (card.pins || []).map((p) => [Math.round(p.x), Math.round(p.y)]) };
  return k;
}

const out = { base: BASE, built: new Date().toISOString().slice(0, 10), modules: [], figs };

for (const M of MODULES) {
  const mod = { id: M.id, title: M.title, topics: [] };
  for (const T of M.topics) {
    const items = [];
    for (const part of T.parts) {
      const D = decks[part.page];
      if (!D) { console.warn('missing atlas page', part.page); continue; }
      const cards = D.cards.filter((c) => !part.sets || part.sets.includes(c.set));

      /* 1. labeled pins */
      for (const c of cards.filter((c) => c.type === 'label' && c.pins && c.pins.length)) {
        const fk = addFig(part.page, c);
        c.pins.forEach((p, pi) => {
          if (!p.a) return;
          const usedNames = [norm(p.a)];
          const pick = [];
          const consider = (cand, onFig) => {
            for (const x of cand) {
              if (pick.length >= 3) return;
              if (sameThing(p, x.pin)) continue;
              if (usedNames.includes(norm(x.pin.a))) continue;
              if (pick.some((y) => sameThing(y.pin, x.pin))) continue;
              usedNames.push(norm(x.pin.a));
              pick.push(Object.assign({ onFig }, x));
            }
          };
          const others = c.pins.map((x, xi) => ({ pin: x, pi: xi })).filter((x) => x.pi !== pi);
          const sameQ = (x) => (x.pin.q || '') === (p.q || '');
          shuffleDet(others, p.n * 7 + c.n);
          consider(others.filter(sameQ), true);
          consider(others, true);
          if (pick.length < 3) {
            const setPins = [];
            cards.filter((o) => o !== c && o.set === c.set && o.type === 'label').forEach((o) => o.pins.forEach((x) => setPins.push({ pin: x, card: o })));
            shuffleDet(setPins, p.n * 13 + c.n);
            consider(setPins.filter(sameQ), false); consider(setPins, false);
          }
          if (pick.length < 3) {
            const pagePins = [];
            D.cards.filter((o) => o !== c && o.type === 'label').forEach((o) => o.pins.forEach((x) => pagePins.push({ pin: x, card: o })));
            shuffleDet(pagePins, p.n * 17 + c.n);
            consider(pagePins, false);
          }
          if (pick.length < 3) { skipped++; return; }
          items.push({
            id: fk + '-' + p.n,
            f: fk, p: pi,
            q: (PROMPT_FIX[norm(cleanName(p.a))] && /muscle/i.test(p.q || '') ? PROMPT_FIX[norm(cleanName(p.a))] : cleanQ(p.q)) || 'Name the structure at the marker.',
            a: cleanName(p.a),
            d: pick.map((x) => (x.onFig ? [cleanName(x.pin.a), x.pi] : [cleanName(x.pin.a), -1, clean(x.card ? x.card.title : '')])),
            k: norm(cleanName(p.a)),
            c: compsFor(part.page, c, p.a)
          });
        });
      }

      /* 2. qa cards whose image already shows a ring or arrow */
      const qaCards = cards.filter((c) => c.type === 'qa' && c.items && c.img);
      const pool = {};
      qaCards.forEach((c) => c.items.forEach((it) => {
        if (it.self || !ID_PROMPT.test(it.q) || SKIP_PROMPT.test(it.q)) return;
        (pool[it.q] = pool[it.q] || []).push({ c, it });
      }));
      Object.keys(pool).forEach((q) => {
        const group = pool[q];
        group.forEach((g, gi) => {
          const others = group.filter((x, xi) => xi !== gi && !sameThing({ a: g.it.a, acc: g.it.acc }, { a: x.it.a, acc: x.it.acc }));
          const names = [];
          shuffleDet(others, gi * 11 + g.c.n);
          for (const o of others) {
            if (names.length >= 3) break;
            if (names.some((n) => norm(n) === norm(o.it.a))) continue;
            names.push(cleanName(o.it.a));
          }
          if (names.length < 3) { skipped++; return; }
          const fk = addFig(part.page, g.c);
          items.push({
            id: fk + '-q', f: fk, p: -1,
            q: cleanQ(g.it.q), a: cleanName(g.it.a),
            d: names.map((n) => [n, -1, '']),
            k: norm(cleanName(g.it.a)),
            c: compsFor(part.page, g.c, g.it.a)
          });
        });
      });
    }
    mod.topics.push({ id: T.id, title: T.title, bank: T.bank || [], items });
    report.push(T.id.padEnd(22) + String(items.length).padStart(5) + ' image questions, ' + new Set(items.map((i) => i.k)).size + ' structures' + (T.bank ? ', plus bank: ' + T.bank.join(' ') : ''));
  }
  out.modules.push(mod);
}

/* deterministic shuffle so reruns give the same file */
function shuffleDet(arr, seed) {
  let s = (seed * 2654435761) >>> 0;
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const header = '/* ============================================================\n' +
  '   BIO 004 Human Anatomy, Fall 2026\n' +
  '   bio004-tbl-lab-data.js   (GENERATED, do not edit by hand)\n\n' +
  '   Lab question pool for the TBL Study Group tool, built from the\n' +
  '   digital atlas by tools/build_tbl_lab_data.js. Images load from\n' +
  '   ' + BASE + '\n\n' +
  '   figs:  one entry per atlas figure (image, size, marker radius,\n' +
  '          marker positions)\n' +
  '   items: f = figure, p = marker index (-1 = ring or arrow is\n' +
  '          printed on the image), q, a, d = wrong choices as\n' +
  '          [name, marker index on this figure or -1, other figure\n' +
  '          title], k = structure key (one per set), c = competencies\n' +
  '   ============================================================ */\n';
fs.writeFileSync(OUT, header + 'window.BIO004_TBL_LAB = ' + JSON.stringify(out) + ';\n');
console.log(report.join('\n'));
console.log('skipped (not enough distinct wrong choices):', skipped);
console.log('wrote', OUT, (fs.statSync(OUT).size / 1024).toFixed(0) + ' KB');
