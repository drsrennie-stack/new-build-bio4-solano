/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   tools-regenerate-card-bank.js

   Builds bio004-card-bank.js from every card deck in the repo.
   Run it from the repo root with:   node tools-regenerate-card-bank.js

   WHY THE DECKS CANNOT SIMPLY BE LOADED ON A PAGE
   course-content.js, course-content-tagged.js and recall-rx-cards.js
   each do a flat  window.BIO004_COURSE_CONTENT = {...}  so whichever
   loads last erases the others. The generator loads each one in its
   own sandbox and merges the results, which is the only safe way to
   have all of them at once.

   THE TWO BASE BANKS ARE NOT VERSIONS OF EACH OTHER
   course-content.js is 37 topics of 30 cards covering the whole
   syllabus. course-content-tagged.js is a separate, larger bank of 44
   topics. They share only about 51 questions, so both are kept. An
   earlier build assumed the tagged file superseded the other and
   dropped it, which quietly cost 1,059 cards.

   dok3-explain-why.js and gap-cards.js define no cards of their own.
   They inject into topics by topic id and were authored against
   course-content.js, which is why nine of their target topics look
   missing if that file is left out. They must run last.
   ============================================================ */

const fs = require('fs'), vm = require('vm');

/* Order matters only for which module gets to own a shared topic, and
   for which wording wins a duplicate. Tagged goes first because its
   module titles are the ones students see. */
const DECKS = [
  'course-content-tagged.js',
  'course-content.js',
  'recall-rx-cards.js',
  'heart-cards.js', 'heart-cards-part2.js', 'heart-cards-part3.js', 'bio004-heart-cards.js',
  'bio004-w3-bvresp-cards.js', 'bio004-w4-cards.js', 'bio004-w5-cards.js',
  'bio004-w6-cards.js', 'bio004-w7-cards.js', 'bio004-w8-cards.js',
];
const PASSES = ['dok3-explain-why.js', 'gap-cards.js'];

/* course-content.js numbers its modules differently for the same five
   blocks. Fold them together so a student sees five modules, not ten. */
const MODULE_ALIAS = {
  'm-01-intro'    : 'm-1-foundations',
  'm-02-support'  : 'm-2-skeletal-muscular',
  'm-03-transport': 'm-3-cardiovascular',
  'm-04-systems'  : 'm-4-visceral',
  'm-05-nervous'  : 'm-5-nervous',
};

const sandbox = () => {
  const c = { window: {}, document: { addEventListener() {} },
              console: { log() {}, warn() {}, error() {} } };
  c.window.window = c.window; c.self = c.window; vm.createContext(c); return c;
};
const norm = s => String(s || '').toLowerCase().replace(/<[^>]+>/g, ' ')
                        .replace(/[^a-z0-9]+/g, ' ').trim();

const bank = { courseLabel: 'BIO 004 Human Anatomy', modules: [] };
const modIx = {}, topIx = {}, seen = new Set(), prov = {};

function merge(cc, src) {
  (cc && cc.modules || []).forEach(m => {
    const mid = MODULE_ALIAS[m.id] || m.id;
    (m.topics || []).forEach(t => {
      /* A topic id is globally unique in this course, so the first module
         to claim it owns it and later decks merge into that same topic.
         Without this, t-muscle-types sat under two modules and 621
         questions appeared twice. */
      let top = topIx[t.id];
      if (!top) {
        let mod = modIx[mid];
        if (!mod) { mod = { id: mid, title: m.title, topics: [] }; modIx[mid] = mod; bank.modules.push(mod); }
        top = { id: t.id, title: t.title, summary: t.summary,
                lecturePageUrl: t.lecturePageUrl, cards: [] };
        topIx[t.id] = top; mod.topics.push(top);
      } else {
        top.summary = top.summary || t.summary;
        top.lecturePageUrl = top.lecturePageUrl || t.lecturePageUrl;
      }
      (t.cards || []).forEach(c => {
        const k = norm(c.q);
        if (!k || seen.has(k)) return;          // same question, whatever deck it came from
        seen.add(k);
        if (!c.src) c.src = src.replace('.js', '');
        top.cards.push(c);
        prov[src] = (prov[src] || 0) + 1;
      });
    });
  });
}

for (const f of DECKS) {
  if (!fs.existsSync(f)) { console.error('missing deck:', f); continue; }
  const c = sandbox();
  try { vm.runInContext(fs.readFileSync(f, 'utf8'), c, { timeout: 30000 }); }
  catch (e) { console.error('ERR', f, e.message.slice(0, 60)); continue; }
  merge(c.window.BIO004_COURSE_CONTENT, f);
}

const count = () => { let n = 0; bank.modules.forEach(m => m.topics.forEach(t => n += t.cards.length)); return n; };

/* The injection passes run against the merged bank, so their topic-id
   lookups see every topic rather than one file's worth. */
for (const f of PASSES) {
  const before = count();
  const c = sandbox(); c.window.BIO004_COURSE_CONTENT = bank;
  try { vm.runInContext(fs.readFileSync(f, 'utf8'), c, { timeout: 30000 }); }
  catch (e) { console.error('ERR', f, e.message.slice(0, 60)); continue; }
  prov[f] = count() - before;
}

/* An injected card can duplicate one already in the bank, since the passes
   do no checking of their own. Strip those, keeping the first. */
let dropped = 0;
bank.modules.forEach(m => m.topics.forEach(t => {
  const keep = [];
  t.cards.forEach(c => {
    const k = norm(c.q);
    if (seen.has(k) && !c.__kept) {
      if (keep.some(x => norm(x.q) === k)) { dropped++; return; }
    }
    seen.add(k); keep.push(c);
  });
  t.cards = keep;
}));
bank.modules.forEach(m => m.topics.forEach(t => t.cards.forEach(c => { if (!c.src) c.src = 'enrichment'; })));

const total = count(), topics = Object.keys(topIx).length;
const header = `/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   bio004-card-bank.js   GENERATED FILE, DO NOT HAND-EDIT

   Every recall and practice card in the course, in one file.
   ${total} cards, ${bank.modules.length} modules, ${topics} topics.

   Generated by tools-regenerate-card-bank.js. To change a card, edit
   its source deck and run that script again. Editing this file by hand
   will be overwritten.

   Cards contributed, after de-duplication on the question text:
${Object.entries(prov).map(([k, v]) => '     ' + k.padEnd(30) + String(v).padStart(5)).join('\n')}

   Each card keeps a  src  field naming the deck it came from.
   ============================================================ */

window.BIO004_CARD_BANK = `;
const footer = `;

/* Back-compatible alias. Older pages read BIO004_COURSE_CONTENT.
   Assigned only if nothing has set it, so this file can never wipe a
   bank another script already installed. */
if (!window.BIO004_COURSE_CONTENT) {
  window.BIO004_COURSE_CONTENT = window.BIO004_CARD_BANK;
}
`;
fs.writeFileSync('bio004-card-bank.js', header + JSON.stringify(bank) + footer);
console.log('wrote bio004-card-bank.js');
console.log('cards:', total, '| modules:', bank.modules.length, '| topics:', topics,
            '| duplicate injections dropped:', dropped);
console.log('size: %sMB', (fs.statSync('bio004-card-bank.js').size / 1048576).toFixed(1));
