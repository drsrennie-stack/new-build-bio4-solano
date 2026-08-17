"""The Study With Me poster.

    python3 bio004-study-with-me-poster-build.py

Writes bio004-study-with-me-poster.html. Render the PDF from that file.

The code points at the real Study With Me page with ?open=1 on the end. That
flag tells bio004-dock.js not to mount, so somebody who scans this off a wall
gets the calendar without Course tools, and therefore without the lectures and
the notes. One URL, one calendar, nothing to keep in sync.

The wording is deliberately short. The point of the poster is that somebody
reads eight words while walking past and knows whether it is for them.
"""
import segno, json, html, re

ICONS = json.load(open('/tmp/icons.json'))
SITE = 'https://drsrennie-stack.github.io/new-build-bio4-solano/'

WHO = [
    dict(who='Students', line='Claim a seat, or offer to host one. '
                              'Hosting and going both count the same.'),
    dict(who='Tutors',   line='Put your session on the schedule so the people '
                              'who need it can find it.'),
    dict(who='Faculty',  line='Post a review, or an event that helps students. '
                              'Tell your class to look for the sessions that '
                              'will get them through.'),
]

# One code. The host guide had its own card and it was one thing too many for
# a poster somebody reads while walking past. The calendar page links to the
# guide anyway, so a host still finds it one tap in.
CODES = [
    dict(icon='iconPeople', tone='gold', name='The Study With Me calendar',
         line='See what is on, claim a seat, or offer to host your own.',
         url=SITE + 'study-session-signup.html?open=1'),
]


def qr(url):
    svg = segno.make(url, error='m').svg_inline(scale=1, border=1, dark='#08101F',
                                                svgclass='qr', lineclass='qrline')
    return re.sub(r'<svg width="(\d+)" height="\d+" class="qr"',
                  lambda m: '<svg viewBox="0 0 %s %s" preserveAspectRatio="xMidYMid meet" class="qr"'
                            % (m.group(1), m.group(1)), svg)


def who_row(w):
    return f"""      <li class="w">
        <span class="w-who">{html.escape(w['who'])}</span>
        <span class="w-line">{html.escape(w['line'])}</span>
      </li>"""


def code_card(c):
    return f"""      <li class="c">
        <span class="c-ic tone-{c['tone']}" aria-hidden="true">{ICONS[c['icon']]}</span>
        <h2 class="c-h">{html.escape(c['name'])}</h2>
        <p class="c-d">{html.escape(c['line'])}</p>
        <div class="c-qr">{qr(c['url'])}</div>
        <p class="c-cap">Scan with your phone camera</p>
      </li>"""


poster = open('bio004-tour-poster.html', encoding='utf-8').read()
i = poster.index('<div class="site-logo">')
j = poster.index('</svg>', i) + 6
LOGO = poster[i:j]
LOGO = LOGO[LOGO.index('<svg'):]

PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Study With Me &middot; BIO 004 Human Anatomy</title>
<meta name="description" content="Student-run anatomy study sessions. Find one, or host one.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;700;800&family=Lora:ital@1&display=swap" rel="stylesheet">
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
  .sheet{max-width:940px;margin:0 auto;padding:0 26px 56px}

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

  .intro{padding:30px 0 8px}
  .eyebrow{font-family:var(--fe);font-size:.72rem;font-weight:700;letter-spacing:.2em;
    text-transform:uppercase;color:var(--maroon);margin:0 0 10px}
  h1{font-size:clamp(34px,5.8vw,66px);font-weight:800;line-height:1.01;letter-spacing:-.03em;
    margin:0;color:var(--navy)}
  h1 .accent{color:var(--maroon)}
  /* the subheading, in the h2 treatment from the palette: Plus Jakarta 600,
     terra dark */
  .tagline{font-size:clamp(19px,2.5vw,28px);font-weight:600;letter-spacing:-.01em;
    color:var(--maroon);margin:12px 0 0}
  .sub{font-size:clamp(15px,1.8vw,20px);color:var(--navy);opacity:.86;margin:12px 0 0;max-width:60ch}
  .usage{font-family:Lora,Georgia,serif;font-style:italic;font-size:15.5px;color:var(--gray);
    margin:12px 0 0;max-width:60ch}

  .who{list-style:none;margin:26px 0 0;padding:0;display:flex;flex-direction:column;gap:0}
  .w{display:grid;grid-template-columns:118px 1fr;gap:16px;align-items:baseline;
    padding:12px 0;border-top:1px solid var(--rule)}
  .w:last-child{border-bottom:1px solid var(--rule)}
  .w-who{font-family:var(--fe);font-size:.76rem;font-weight:800;letter-spacing:.16em;
    text-transform:uppercase;color:var(--maroon)}
  .w-line{font-size:1.02rem;color:var(--navy)}

  .codes{list-style:none;margin:26px auto 0;padding:0;display:grid;
    grid-template-columns:1fr;gap:18px;max-width:520px}
  .c{display:flex;flex-direction:column;align-items:center;text-align:center;gap:7px;
    background:var(--tile);border-radius:18px;padding:24px 20px 20px;color:#fff;
    box-shadow:0 0 0 2px var(--gold),0 8px 18px -12px rgba(8,16,31,.4)}
  .c-ic{width:54px;height:54px;border-radius:15px;display:grid;place-items:center;flex:none;
    background:linear-gradient(145deg,#C9A14A,#A87F2E);box-shadow:inset 0 1px 0 rgba(255,255,255,.45)}
  .c-ic svg{width:27px;height:27px;stroke:#0B1530;fill:none;stroke-width:2.1;
    stroke-linecap:round;stroke-linejoin:round}
  .tone-terra{background:linear-gradient(145deg,#C2734D,#8B3A2E)}
  .c-h{font-size:20px;font-weight:800;letter-spacing:-.015em;color:var(--gold-name);
    margin:4px 0 0;line-height:1.2}
  .c-d{font-size:13px;color:#E9EDF3;margin:0}
  .c-qr{width:250px;height:250px;background:#fff;border-radius:16px;padding:10px;margin:12px 0 0}
  .c-qr svg{width:100%;height:100%;display:block;shape-rendering:crispEdges}
  .c-qr .qrline{stroke:#0B1530}
  .c-cap{font-family:var(--fe);font-size:10px;font-weight:800;letter-spacing:.08em;
    text-transform:uppercase;color:var(--gold-mins);margin:0}

  .foot{margin:26px 0 0;padding-top:15px;border-top:1px solid var(--rule);
    display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;
    font-size:.83rem;color:var(--gray)}
  .foot b{color:var(--navy)}

  @page{ size:letter portrait; margin:0.42in; }
  @media print{
    body{background:#fff}
    .sheet{max-width:none;padding:0}
    .brandbar{padding:0 0 7pt;margin-bottom:8pt}
    .site-logo svg{height:36pt}
    .logo-title{font-size:18pt}
    .logo-sub{font-size:7.2pt}
    .brand-term{font-size:6.8pt}
    .intro{padding:11pt 0 0}
    .eyebrow{font-size:7pt;margin-bottom:4pt}
    h1{font-size:42pt}
    .tagline{font-size:17pt;margin-top:8pt}
    .sub{font-size:12.6pt;margin-top:8pt}
    .usage{font-size:10.4pt;margin-top:7pt}
    .who{margin-top:14pt}
    .w{grid-template-columns:92pt 1fr;gap:12pt;padding:6.5pt 0}
    .w-who{font-size:8.4pt}
    .w-line{font-size:10.8pt}
    .codes{margin-top:14pt;grid-template-columns:1fr;max-width:222pt}
    .c{break-inside:avoid;padding:13pt 14pt 11pt;border-radius:13pt;
      box-shadow:0 0 0 1.5pt var(--gold);
      -webkit-print-color-adjust:exact;print-color-adjust:exact}
    .c-ic{width:40pt;height:40pt;border-radius:11pt}
    .c-ic svg{width:20pt;height:20pt}
    .c-h{font-size:16pt}
    .c-d{font-size:10.4pt}
    .c-qr{width:150pt;height:150pt;padding:7pt;border-radius:11pt;margin-top:8pt}
    .c-cap{font-size:7.2pt}
    .foot{margin-top:12pt;padding-top:7pt;font-size:8pt}
  }
</style>
</head>
<body data-no-reading-mode>
<a class="skip" href="#codes">Skip to the code</a>
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
    <p class="eyebrow">BIO 004 &middot; Human Anatomy</p>
    <h1>Study With Me <span class="accent">Anatomy</span></h1>
    <p class="tagline">Nobody gets through anatomy alone.</p>
    <p class="sub">One person hosts. A few people show up. Everybody says the anatomy
    out loud instead of watching one person talk.</p>
    <p class="usage">Online or in person, an hour is plenty. No lesson plan, no experience needed.</p>
  </div>

  <ul class="who">
__WHO__
  </ul>

  <ul class="codes" id="codes">
__CODES__
  </ul>

  <div class="foot">
    <span><b>Dr. Sharilyn Rennie</b> &middot; BIO 004 Human Anatomy &middot; Solano Community College</span>
    <span>Sessions count toward Scholar Points hours.</span>
  </div>
</div>
</body>
</html>
"""

out = (PAGE.replace('__LOGO__', LOGO)
           .replace('__WHO__', '\n'.join(who_row(w) for w in WHO))
           .replace('__CODES__', '\n'.join(code_card(c) for c in CODES)))
open('bio004-study-with-me-poster.html', 'w', encoding='utf-8').write(out)
print('poster written')
