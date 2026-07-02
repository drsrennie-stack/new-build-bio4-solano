#!/usr/bin/env python3
"""Re-skin Batch 5 card viewer to the Mastery OS brand.
Reads _rows5.json (produced by build_batch5.py) and writes the styled HTML.
Card data is untouched; this only changes presentation.
"""
import json, html, os, collections

OUT = os.path.dirname(os.path.abspath(__file__))
rows = json.load(open(os.path.join(OUT, "_rows5.json"), encoding="utf-8"))
def esc(s): return html.escape(str(s), quote=True)

dok = collections.Counter(r["Depth of Knowledge"] for r in rows)
topics = []
for r in rows:
    if r["Topic"] not in topics: topics.append(r["Topic"])
diffs = [r["Difficulty"] for r in rows]
DOKLBL = {1: "Recall", 2: "Concept", 3: "Reasoning"}

LOGO = ('<svg viewBox="40 10 125 148" aria-hidden="true"><g transform="translate(0,18)">'
 '<g transform="translate(60,0) rotate(8 0 130)"><circle cx="0" cy="20" r="10" fill="#C9A14A"/>'
 '<path d="M 0,32 C -10,32 -16,36 -16,42 C -16,55 -13,68 -11,82 C -10,100 -12,118 -14,130 L 14,130 '
 'C 12,118 10,100 11,82 C 13,68 16,55 16,42 C 16,36 10,32 0,32 Z" fill="#C9A14A"/></g>'
 '<g transform="translate(100,0)"><circle cx="0" cy="10" r="11" fill="#8B3A2E"/>'
 '<path d="M 0,22 C -11,22 -17,26 -17,34 C -17,52 -14,70 -12,86 C -11,108 -13,122 -15,132 L 15,132 '
 'C 13,122 11,108 12,86 C 14,70 17,52 17,34 C 17,26 11,22 0,22 Z" fill="#8B3A2E"/></g>'
 '<g transform="translate(140,0) rotate(-8 0 130)"><circle cx="0" cy="20" r="10" fill="#0B1530"/>'
 '<path d="M 0,32 C -10,32 -16,36 -16,42 C -16,55 -13,68 -11,82 C -10,100 -12,118 -14,130 L 14,130 '
 'C 12,118 10,100 11,82 C 13,68 16,55 16,42 C 16,36 10,32 0,32 Z" fill="#0B1530"/></g>'
 '</g></svg>')

def search_blob(r):
    return esc(" ".join([r["Question"], r["Answer"], r["Subtopic"], r["Tags"],
                         r["Topic"], r["_qtype"]]).lower())

cards_html = []
for r in rows:
    dokv = r["Depth of Knowledge"]
    cards_html.append(
      f'''      <article class="card" data-topic="{esc(r['Topic'])}" data-dok="{dokv}" data-search="{search_blob(r)}" tabindex="0" aria-label="Card {esc(r['Card ID'])}">
        <div class="card-head">
          <span class="cid">{esc(r['Card ID'])}</span>
          <span class="chips">
            <span class="chip chip-topic">{esc(r['Topic'])}</span>
            <span class="chip chip-type">{esc(r['_qtype'])}</span>
            <span class="chip dok dok-{dokv}">DOK {dokv} · {DOKLBL[dokv]}</span>
            <span class="chip chip-diff" title="Difficulty 1 to 10">Diff {r['Difficulty']}</span>
          </span>
        </div>
        <p class="sub">{esc(r['Subtopic'])}</p>
        <p class="q">{esc(r['Question'])}</p>
        <details>
          <summary><span class="sum-open">Show answer &amp; teaching notes</span><span class="sum-close">Hide</span></summary>
          <div class="reveal">
            <p class="a"><span class="lbl lbl-a">Answer</span>{esc(r['Answer'])}</p>
            <p class="ex"><span class="lbl">Why it matters</span>{esc(r['Explanation'])}</p>
            <p class="mc"><span class="lbl lbl-mc">Common misconception</span>{esc(r['Common Misconception'])}</p>
            <p class="lo"><span class="lbl">Objective</span><span class="lo-txt">{esc(r['Learning Objective'])}</span></p>
          </div>
        </details>
        <p class="tags">{esc(r['Tags'])}</p>
      </article>''')
cards_joined = "\n".join(cards_html)
topic_options = "\n".join(f'          <option value="{esc(t)}">{esc(t)}</option>' for t in topics)
d1, d2, d3 = dok[1], dok[2], dok[3]

CSS = """
:root{
  --navy:#0B1530; --card-navy:#1C2E4F; --near-black:#060A18;
  --rust:#8B3A2E; --rust-hover:#A0452F; --terra:#C2734D; --terra-dark:#A0522D;
  --gold:#C9A14A; --gold-light:#D9B065; --cream:#F5F1E8;
  --white:#FFFFFF; --offwhite:#FAFAF9;
  --ink:#0B1530; --ink-soft:rgba(11,21,48,0.74); --ink-faint:rgba(11,21,48,0.52);
  --line:rgba(11,21,48,0.12); --line-soft:rgba(11,21,48,0.07);
  --ok:#3F7A5B; --warn:#B4772E; --bad:#8B3A2E;
  --shadow:0 1px 3px rgba(11,21,48,0.08);
  --lift:0 14px 34px -16px rgba(11,21,48,0.30);
  --disp:'Plus Jakarta Sans',system-ui,sans-serif;
  --mono:'DM Sans',system-ui,sans-serif;
  --serif:'Lora',Georgia,serif;
  --r-sm:6px; --r:10px; --r-lg:16px;
  --ease:cubic-bezier(.22,.61,.36,1);
}
*{box-sizing:border-box}
html,body{margin:0}
body{background:var(--offwhite);color:var(--ink);font-family:var(--disp);font-size:16px;line-height:1.55;-webkit-font-smoothing:antialiased}
h1,h2,h3{letter-spacing:-0.02em;color:var(--navy);line-height:1.15;margin:0}
p{margin:0}
button,select,input{font-family:inherit}
:focus-visible{outline:3px solid var(--gold);outline-offset:2px;border-radius:var(--r-sm)}
.skip{position:absolute;left:-999px;top:0;background:var(--navy);color:#fff;padding:10px 16px;border-radius:var(--r);z-index:999;text-decoration:none;font-weight:700}
.skip:focus{left:12px;top:12px}
.eyebrow{font-family:var(--mono);font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--terra-dark);margin:0 0 6px}
/* header */
.site-header{position:sticky;top:0;z-index:30;background:rgba(250,250,249,.9);backdrop-filter:saturate(1.4) blur(10px);border-bottom:1px solid var(--line-soft)}
.hbar{max-width:1120px;margin:0 auto;padding:12px 22px;display:flex;align-items:center;gap:14px}
.logo{display:inline-flex;align-items:center;gap:12px}
.logo svg{height:38px;flex:none}
.logo .lt{font-size:20px;font-weight:800;color:var(--navy);letter-spacing:-.02em;line-height:1}
.logo .lt .ac{color:var(--rust)}
.logo .ls{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--ink-faint);display:block;margin-top:3px}
.spacer{flex:1}
.hbadge{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--navy);background:var(--cream);border:1px solid var(--line);padding:6px 12px;border-radius:999px}
/* layout */
.wrap{max-width:1120px;margin:0 auto;padding:0 22px}
/* hero */
.hero{margin:26px 0 0;background:radial-gradient(140% 135% at 12% 0%,#12203f 0%,var(--navy) 48%,var(--near-black) 100%);color:var(--cream);border-radius:var(--r-lg);padding:30px;box-shadow:var(--lift)}
.hero .heb{font-family:var(--mono);font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold-light);margin:0 0 8px}
.hero h1{color:#fff;font-size:clamp(26px,4.4vw,38px);font-weight:800;margin:0 0 8px}
.hero .lead{font-family:var(--serif);font-style:italic;color:var(--cream);opacity:.9;max-width:64ch;font-size:16px}
.stats{display:flex;flex-wrap:wrap;gap:12px;margin-top:22px}
.stat{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:var(--r);padding:12px 16px;min-width:104px}
.stat .num{font-size:26px;font-weight:800;color:#fff;line-height:1}
.stat .lbl{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--gold-light);margin-top:5px}
/* controls */
.controls{position:sticky;top:62px;z-index:20;margin:18px 0 4px;background:rgba(250,250,249,.94);backdrop-filter:blur(8px);border:1px solid var(--line);border-radius:var(--r-lg);padding:14px 16px;display:flex;flex-wrap:wrap;gap:14px;align-items:flex-end;box-shadow:var(--shadow)}
.field{display:flex;flex-direction:column;gap:5px}
.field label{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-soft)}
select,.search input{font-size:15px;padding:10px 12px;border:1.5px solid var(--line);border-radius:var(--r);background:var(--white);color:var(--navy)}
select{min-width:190px}
select:focus,.search input:focus{border-color:var(--gold);outline:none}
.search{flex:1;min-width:200px}
.search input{width:100%}
.ctl-btn{border:1.5px solid var(--line);background:var(--white);color:var(--navy);font-weight:700;font-size:14px;padding:10px 16px;border-radius:var(--r);cursor:pointer;transition:transform .18s var(--ease),box-shadow .18s var(--ease),border-color .18s}
.ctl-btn:hover{transform:translateY(-1px);box-shadow:var(--lift);border-color:var(--navy)}
.count{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--ink-soft);margin-left:auto;align-self:center}
/* grid + cards */
#cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px;margin:18px 0 8px}
.card{background:var(--white);border:1px solid var(--line);border-radius:var(--r-lg);padding:18px 19px;box-shadow:var(--shadow);transition:transform .2s var(--ease),box-shadow .2s var(--ease);display:flex;flex-direction:column;gap:9px}
.card:hover,.card:focus-within{transform:translateY(-2px);box-shadow:var(--lift)}
.card-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:wrap}
.cid{font-family:var(--mono);font-weight:700;font-size:13px;color:var(--navy)}
.chips{display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end}
.chip{font-family:var(--mono);font-weight:700;font-size:10.5px;letter-spacing:.03em;padding:4px 9px;border-radius:999px;border:1px solid var(--line);color:var(--navy);white-space:nowrap}
.chip-topic{border-color:var(--terra);color:var(--terra-dark)}
.chip-type{background:var(--cream);border-color:var(--line)}
.chip-diff{color:var(--ink-soft)}
.dok{border:none}
.dok-1{background:var(--cream);color:var(--navy);box-shadow:inset 0 0 0 1px var(--gold)}
.dok-2{background:#f6ecd9;color:var(--warn)}
.dok-3{background:#f6e4e0;color:var(--rust)}
.sub{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-faint);margin:0}
.q{font-weight:700;font-size:16.5px;color:var(--navy);margin:2px 0 0;line-height:1.35}
details{border-top:1px solid var(--line-soft);padding-top:10px;margin-top:2px}
summary{list-style:none;cursor:pointer;font-family:var(--mono);font-weight:700;font-size:13px;color:var(--rust);display:inline-flex;align-items:center;gap:7px}
summary::-webkit-details-marker{display:none}
summary::before{content:"";width:8px;height:8px;border-right:2px solid var(--rust);border-bottom:2px solid var(--rust);transform:rotate(-45deg);transition:transform .2s var(--ease);margin-top:-2px}
details[open] summary::before{transform:rotate(45deg)}
.sum-close{display:none}
details[open] .sum-open{display:none}
details[open] .sum-close{display:inline}
.reveal{margin-top:12px;display:flex;flex-direction:column;gap:11px}
.reveal p{margin:0;font-size:14.5px;line-height:1.5}
.lbl{display:block;font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--terra-dark);margin-bottom:3px}
.lbl-a{color:var(--ok)}
.lbl-mc{color:var(--rust)}
.a{background:#eef4f0;border-left:3px solid var(--ok);border-radius:var(--r-sm);padding:10px 12px}
.mc{background:#faf0ed;border-left:3px solid var(--rust);border-radius:var(--r-sm);padding:10px 12px}
.ex{color:var(--ink-soft)}
.lo{border-top:1px dashed var(--line);padding-top:9px}
.lo-txt{font-family:var(--serif);font-style:italic;color:var(--navy)}
.tags{font-family:var(--mono);font-size:11px;color:var(--ink-faint);margin-top:2px}
.empty{grid-column:1/-1;text-align:center;color:var(--ink-faint);padding:40px 0;font-weight:600}
/* footer */
.foot{padding:30px 0 46px;color:var(--ink-faint);font-size:13px;border-top:1px solid var(--line-soft);margin-top:22px}
.foot .disc{max-width:78ch;line-height:1.6;margin:0 0 12px}
.foot .sig{font-weight:700;color:var(--ink-soft)}
@media (prefers-reduced-motion:reduce){*{transition-duration:.001ms!important;scroll-behavior:auto!important}}
"""

HTML = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mastery OS · BIO 004 Spaced Recall · Integumentary (401 to 500)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Lora:ital@0;1&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>{CSS}</style>
</head>
<body>
<a class="skip" href="#cards">Skip to cards</a>
<header class="site-header">
  <div class="hbar">
    <span class="logo">{LOGO}<span><span class="lt">Mastery <span class="ac">OS</span></span><span class="ls">Human Anatomy</span></span></span>
    <span class="spacer"></span>
    <span class="hbadge">Week 1 · Integumentary</span>
  </div>
</header>
<main class="wrap" id="main">
  <section class="hero" aria-labelledby="h1">
    <p class="heb">BIO 004 · Human Anatomy · Spaced Recall · Batch 5</p>
    <h1 id="h1">Integumentary System</h1>
    <p class="lead">Read the question, answer it in your own words, then reveal the answer and teaching notes. Filter or search to drill a weak area. Given, not Googled.</p>
    <div class="stats" aria-label="Batch summary">
      <div class="stat"><div class="num">100</div><div class="lbl">Cards 401–500</div></div>
      <div class="stat"><div class="num">{d1}</div><div class="lbl">DOK 1 · Recall</div></div>
      <div class="stat"><div class="num">{d2}</div><div class="lbl">DOK 2 · Concept</div></div>
      <div class="stat"><div class="num">{d3}</div><div class="lbl">DOK 3 · Reasoning</div></div>
      <div class="stat"><div class="num">{len(topics)}</div><div class="lbl">Topics</div></div>
      <div class="stat"><div class="num">{min(diffs)}–{max(diffs)}</div><div class="lbl">Difficulty</div></div>
    </div>
  </section>

  <section class="controls" aria-label="Filters">
    <div class="search field">
      <label for="q">Search</label>
      <input id="q" type="search" placeholder="Search questions, answers, tags..." autocomplete="off" aria-controls="cards">
    </div>
    <div class="field">
      <label for="topic">Topic</label>
      <select id="topic" aria-controls="cards">
        <option value="all">All topics</option>
{topic_options}
      </select>
    </div>
    <div class="field">
      <label for="dok">Depth of Knowledge</label>
      <select id="dok" aria-controls="cards">
        <option value="all">All levels</option>
        <option value="1">DOK 1 · Recall</option>
        <option value="2">DOK 2 · Concept</option>
        <option value="3">DOK 3 · Reasoning</option>
      </select>
    </div>
    <button class="ctl-btn" id="toggleAll" aria-pressed="false">Reveal all</button>
    <p class="count" id="count" role="status" aria-live="polite">100 of 100</p>
  </section>

  <section id="cards" aria-live="polite">
{cards_joined}
  </section>

  <footer class="foot">
    <p class="disc">Comprehensive schema: Card ID, Week, System, Module, Topic, Subtopic, Learning Objective, Difficulty, Depth of Knowledge, Question, Answer, Explanation, Common Misconception, Tags. Continues directly from cards 1 to 400 with no repeats. Competency tag reserved for a later pass. A study aid, not a substitute for lecture, lab, the structure list, or the syllabus.</p>
    <p>Mastery OS · Spaced Recall · Batch 5 &nbsp;·&nbsp; <span class="sig">Dr. Sharilyn Rennie</span></p>
  </footer>
</main>
<script>
(function(){{
  var q=document.getElementById('q'),topic=document.getElementById('topic'),
      dok=document.getElementById('dok'),count=document.getElementById('count'),
      toggle=document.getElementById('toggleAll'),grid=document.getElementById('cards'),
      cards=Array.prototype.slice.call(document.querySelectorAll('.card')),
      empty=null;
  function apply(){{
    var term=(q.value||'').trim().toLowerCase(), t=topic.value, d=dok.value, shown=0;
    cards.forEach(function(c){{
      var ok=(t==='all'||c.dataset.topic===t)
           &&(d==='all'||c.dataset.dok===d)
           &&(!term||c.dataset.search.indexOf(term)>-1);
      c.style.display=ok?'':'none'; if(ok) shown++;
    }});
    count.textContent=shown+' of '+cards.length;
    if(!empty){{empty=document.createElement('p');empty.className='empty';empty.textContent='No cards match. Clear the filters or search.';grid.appendChild(empty);}}
    empty.style.display=shown?'none':'';
  }}
  q.addEventListener('input',apply);
  topic.addEventListener('change',apply);
  dok.addEventListener('change',apply);
  toggle.addEventListener('click',function(){{
    var open=toggle.getAttribute('aria-pressed')!=='true';
    document.querySelectorAll('.card details').forEach(function(d){{ if(d.closest('.card').style.display!=='none') d.open=open; }});
    toggle.setAttribute('aria-pressed',open?'true':'false');
    toggle.textContent=open?'Hide all':'Reveal all';
  }});
}})();
/* iframe height-sender for Kajabi / GitHub Pages embeds */
(function(){{
  function send(){{ try{{parent.postMessage({{id:'bio004-week1-batch5',frameId:'bio004-week1-batch5',type:'resize',height:document.documentElement.scrollHeight}}, '*');}}catch(e){{}} }}
  window.addEventListener('load',send); window.addEventListener('resize',send);
  document.addEventListener('click',function(){{setTimeout(send,300);}});
  if(window.ResizeObserver){{ new ResizeObserver(send).observe(document.body); }}
}})();
</script>
</body>
</html>'''

path = os.path.join(OUT, "Week1_Spaced_Recall_Cards_401-500.html")
with open(path, "w", encoding="utf-8") as f:
    f.write(HTML)
print("Wrote", path, "|", len(rows), "cards |", len(topics), "topics | DOK", dict(sorted(dok.items())))
