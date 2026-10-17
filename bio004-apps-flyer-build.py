"""The apps flyer: Mastery OS, Lab Loops, Digital Atlas, Brain dumps, Practice exam.

    python3 bio004-apps-flyer-build.py

Writes bio004-apps-flyer.html. Render the PDF from that file with Chromium.

Why the Mastery OS code carries ?open=1: every outbound link on that page
comes from the Course tools dock, and Course tools opens the whole course,
lectures and notes included. The flag tells bio004-dock.js not to mount. It is
the real page either way, so there is nothing to keep in sync.

This flyer loads no dock either, for the same reason. It is meant to be handed
to people who are not in the course.
"""
import segno, json, html, re

ICONS = json.load(open('/tmp/icons.json'))
SITE = 'https://drsrennie-stack.github.io/new-build-bio4-solano/'

APPS = [
    dict(icon='iconBrain', tone='gold', name='Mastery OS',
         tag='Your study engine',
         desc='Spaced recall that brings a card back exactly when you are about '
              'to forget it. It tracks what is weak, builds the day, and keeps '
              'the evidence of what you have actually learned.',
         use='Best on a laptop. Your progress saves on the device you use.',
         url=SITE + 'mastery-os-fall-2026.html?open=1'),
    dict(icon='iconLoop', tone='terra', name='Lab Loops',
         tag='Fast visual practice',
         desc='Thirty-nine image loops. A structure appears, you name it, the '
              'answer follows. Built for the ten minutes between other things.',
         use='Works well on a phone. Your misses count toward your weak areas.',
         url=SITE + 'mastery-os-fall-2026.html#s-loops'),
    dict(icon='iconAtlas', tone='blue', name='Digital Atlas',
         tag='Turn it around',
         desc='Explore structures in three dimensions. Rotate them, take layers '
              'off, and see how things sit against each other before you ever '
              'meet them on a model.',
         use='Phone or laptop. Give it a moment to load the first time.',
         url='https://drsrennie-stack.github.io/new-digital-atlas/'),
    dict(icon='iconPencil', tone='navy', name='Brain dumps',
         tag='Write it from memory',
         desc='Three levels per topic. Pick a prompt, write everything you know on '
              'paper, then check your answer against the key.',
         use='Paper and a pen. The timer is on the page.',
         url=SITE + 'mastery-os-fall-2026.html#s-dumps'),
    dict(icon='iconDoc', tone='maroon', name='Practice exam',
         tag='A simulated exam',
         desc='A fresh 100 point paper in the real format. Pick the topics and the '
              'difficulty, take it, and see the score with the reasoning.',
         use='None of it counts toward your grade.',
         url=SITE + 'practice-lecture-exam.html'),
]


def qr(url):
    """Error correction M is plenty here: these codes print large."""
    svg = segno.make(url, error='m').svg_inline(scale=1, border=1, dark='#08101F',
                                                svgclass='qr', lineclass='qrline')
    return re.sub(r'<svg width="(\d+)" height="\d+" class="qr"',
                  lambda m: '<svg viewBox="0 0 %s %s" preserveAspectRatio="xMidYMid meet" class="qr"'
                            % (m.group(1), m.group(1)), svg)


def card(a):
    return f"""      <li class="a">
        <span class="a-ic tone-{a['tone']}" aria-hidden="true">{ICONS[a['icon']]}</span>
        <div class="a-body">
          <p class="a-tag">{html.escape(a['tag'])}</p>
          <h2 class="a-h">{html.escape(a['name'])}</h2>
          <p class="a-d">{html.escape(a['desc'])}</p>
          <p class="a-use">{html.escape(a['use'])}</p>
        </div>
        <div class="a-scan">
          <div class="a-qr">{qr(a['url'])}</div>
          <p class="a-cap">Scan to open</p>
        </div>
      </li>"""


# the logo lockup, taken from the poster so there is one source for it
poster = open('bio004-tour-poster.html', encoding='utf-8').read()
i = poster.index('<div class="site-logo">')
j = poster.index('</svg>', i) + 6
LOGO = poster[i:j] + '</div>'
LOGO = LOGO[LOGO.index('<svg'):LOGO.index('</svg>') + 6]

CARDS = '\n'.join(card(a) for a in APPS)

PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Five apps you can use &middot; BIO 004 Human Anatomy</title>
<meta name="description" content="Mastery OS, Lab Loops, the Digital Atlas, Brain dumps and the Practice exam. Scan a code to open one.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;700;800&display=swap" rel="stylesheet">
<style>
  :root{
    --navy:#08101F; --tile:#0B1530; --maroon:#7A2A22; --gold:#C9A14A;
    --gold-name:#EBCE86; --gold-mins:#E8C97E;
    --paper:#FAFAF9; --rule:#E6E4DF; --gray:#4A5763;
    --fd:'Plus Jakarta Sans',system-ui,sans-serif;
    --fe:'DM Sans',system-ui,sans-serif;
  }
  *{box-sizing:border-box}
  html,body{margin:0}
  body{background:var(--paper);color:var(--navy);font-family:var(--fd);line-height:1.5}
  .skip{position:absolute;left:-9999px}
  .skip:focus{left:12px;top:12px;background:#fff;padding:10px 14px;border-radius:6px;z-index:20}
  .sheet{max-width:980px;margin:0 auto;padding:0 26px 56px}

  .brandbar{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;
    padding:22px 0 16px;border-bottom:.5px solid rgba(11,21,48,.10)}
  .site-logo{display:inline-flex;align-items:center;gap:16px;text-decoration:none}
  .site-logo svg{height:58px;width:auto;display:block}
  .logo-text{display:flex;flex-direction:column;gap:3px}
  .logo-title{font-size:29.1px;font-weight:800;letter-spacing:-.02em;color:#08101F;line-height:1}
  .logo-title .logo-accent{color:var(--maroon)}
  .logo-sub{font-size:11.8px;font-weight:700;letter-spacing:.20em;text-transform:uppercase;
    color:#08101F;opacity:.72}
  .brand-term{font-family:var(--fe);font-size:.74rem;font-weight:700;letter-spacing:.18em;
    text-transform:uppercase;color:var(--maroon)}

  .intro{padding:26px 0 22px}
  .eyebrow{font-family:var(--fe);font-size:.72rem;font-weight:700;letter-spacing:.2em;
    text-transform:uppercase;color:var(--maroon);margin:0 0 10px}
  h1{font-size:clamp(25px,3.4vw,38px);font-weight:800;line-height:1.07;letter-spacing:-.02em;
    margin:0;color:var(--navy)}
  h1 .accent{color:var(--maroon)}
  .sub{font-size:clamp(14px,1.6vw,17px);color:var(--navy);opacity:.82;margin:10px 0 0;max-width:70ch}
  .usage{font-size:15px;color:var(--gray);
    margin:12px 0 0;max-width:66ch}

  .apps{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:16px}
  .a{display:grid;grid-template-columns:66px 1fr 168px;gap:20px;align-items:center;
    background:var(--tile);border-radius:18px;padding:22px 24px;color:#fff;
    box-shadow:0 0 0 2px var(--gold),0 8px 18px -12px rgba(8,16,31,.4)}
  .a-ic{width:56px;height:56px;border-radius:15px;display:grid;place-items:center;flex:none;
    background:linear-gradient(145deg,#C9A14A,#A87F2E);box-shadow:inset 0 1px 0 rgba(255,255,255,.45)}
  .a-ic svg{width:28px;height:28px;stroke:#0B1530;fill:none;stroke-width:2.1;
    stroke-linecap:round;stroke-linejoin:round}
  .tone-terra{background:linear-gradient(145deg,#C2734D,#8B3A2E)}
  .tone-blue{background:linear-gradient(145deg,#5C7FA8,#2F4C7D)}
  .tone-navy{background:linear-gradient(145deg,#4F6B85,#243B52)}
  .tone-maroon{background:linear-gradient(145deg,#A34A3F,#6A241D)}
  .a-body{min-width:0}
  .a-tag{font-family:var(--fe);font-size:11px;font-weight:800;letter-spacing:.14em;
    text-transform:uppercase;color:var(--gold-mins);margin:0}
  .a-h{font-size:25px;font-weight:800;letter-spacing:-.015em;color:var(--gold-name);
    margin:3px 0 0;line-height:1.15}
  .a-d{font-size:13.5px;line-height:1.5;color:#E9EDF3;margin:7px 0 0}
  .a-use{font-size:12.5px;color:#C3CCD8;margin:7px 0 0}
  .a-scan{display:flex;flex-direction:column;align-items:center;gap:6px}
  .a-qr{width:140px;height:140px;background:#fff;border-radius:12px;padding:7px}
  .a-qr svg{width:100%;height:100%;display:block;shape-rendering:crispEdges}
  .a-qr .qrline{stroke:#0B1530}
  .a-cap{font-family:var(--fe);font-size:10px;font-weight:800;letter-spacing:.08em;
    text-transform:uppercase;color:var(--gold-mins);margin:0}

  .how{display:flex;gap:22px;flex-wrap:wrap;margin:22px 0 0;padding:0;list-style:none}
  .how li{display:flex;align-items:baseline;gap:9px;font-size:.88rem;color:var(--navy)}
  .how b{font-family:var(--fe);font-size:.7rem;font-weight:800;letter-spacing:.1em;
    color:#fff;background:var(--maroon);border-radius:999px;padding:3px 9px}

  .foot{margin:26px 0 0;padding-top:15px;border-top:1px solid var(--rule);
    display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;
    font-size:.83rem;color:var(--gray)}
  .foot b{color:var(--navy)}

  @media (max-width:720px){
    .a{grid-template-columns:1fr;justify-items:center;text-align:center;gap:14px}
    .a-body{text-align:center}
  }

  @page{ size:letter portrait; margin:0.42in; }
  @media print{
    body{background:#fff}
    .sheet{max-width:none;padding:0}
    .brandbar{padding:0 0 5pt;margin-bottom:5pt}
    .site-logo svg{height:34pt}
    .logo-title{font-size:17pt}
    .logo-sub{font-size:7pt}
    .brand-term{font-size:6.6pt}
    .intro{padding:0 0 6pt}
    .eyebrow{font-size:6.6pt;margin-bottom:3pt}
    h1{font-size:18pt}
    .sub{font-size:8.8pt;margin-top:3pt}
    .usage{font-size:8.4pt;margin-top:3pt}
    .apps{gap:5pt}
    .a{break-inside:avoid;grid-template-columns:40pt 1fr 84pt;gap:11pt;padding:6pt 12pt;
      border-radius:12pt;box-shadow:0 0 0 1.5pt var(--gold);
      -webkit-print-color-adjust:exact;print-color-adjust:exact}
    .a-ic{width:36pt;height:36pt;border-radius:10pt}
    .a-ic svg{width:19pt;height:19pt}
    .a-tag{font-size:7.6pt}
    .a-h{font-size:13.5pt}
    .a-d{font-size:8.8pt;line-height:1.35;margin-top:2pt}
    .a-use{font-size:8.2pt;margin-top:2pt}
    .a-qr{width:74pt;height:74pt;padding:4pt;border-radius:7pt}
    .a-cap{font-size:6.6pt}
    .how{gap:12pt;margin-top:6pt}
    .how li{font-size:8.4pt}
    .how b{font-size:6.4pt;padding:2pt 7pt}
    .foot{margin-top:6pt;padding-top:5pt;font-size:7.4pt}
  }
</style>
</head>
<body data-no-reading-mode>
<a class="skip" href="#apps">Skip to the apps</a>
<div class="sheet">
  <header class="brandbar">
    <div class="site-logo">
      __LOGO__
      <span class="logo-text">
        <span class="logo-title">Human <span class="logo-accent">Anatomy</span></span>
        <span class="logo-sub">BIO 004 &middot; Solano Community College</span>
      </span>
    </div>
    <span class="brand-term">Fall 2026</span>
  </header>

  <div class="intro">
    <p class="eyebrow">Study tools</p>
    <h1>Five apps, <span class="accent">yours to use</span></h1>
    <p class="sub">These are the practice tools from BIO 004 Human Anatomy. They are free,
    they need no account, and you can use them whether or not you are in the course.</p>
    <p class="usage">Scan a code with your phone camera. Nothing to install.</p>
  </div>

  <ul class="apps" id="apps">
__CARDS__
  </ul>

  <ol class="how">
    <li><b>1</b> Open your phone camera</li>
    <li><b>2</b> Point it at a code</li>
    <li><b>3</b> Tap the link that appears</li>
  </ol>

  <div class="foot">
    <span><b>Dr. Sharilyn Rennie</b> &middot; BIO 004 Human Anatomy &middot; Solano Community College</span>
    <span>Practice tools only. Course materials stay in the course.</span>
  </div>
</div>
</body>
</html>
"""

out = PAGE.replace('__LOGO__', LOGO).replace('__CARDS__', CARDS)
open('bio004-apps-flyer.html', 'w', encoding='utf-8').write(out)
print('flyer written:', len(APPS), 'apps')
