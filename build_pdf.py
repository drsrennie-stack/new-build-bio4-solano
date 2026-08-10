#!/usr/bin/env python3
"""Build the printable student packet (cover + body) and merge to one PDF.

Content is lifted from the built web page so the two can never drift.
Answers are never written into the packet.
"""
import asyncio, re, html
from bank import BANK, TITLES
from playwright.async_api import async_playwright

WEB = open("bio004-histology-microscope.html").read()
BLANK_SVG = open("microscope-blank.svg").read()

PACKET_NAME = "BIO 004 Module 1 Lab, Introduction to Histology and the Microscope"


def grab(sid: str) -> str:
    m = re.search(rf'<section id="{sid}".*?>(.*?)</section>', WEB, re.S)
    body = m.group(1)
    body = re.sub(r'^\s*<div class="card">', "", body).rsplit("</div>", 1)[0]
    return body.strip()


SECTIONS = []
for sid in ("s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"):
    SECTIONS.append(grab(sid))

# initial boxes on the bench walkthrough
SECTIONS[7] = SECTIONS[7].replace(
    "<li><strong>", '<li><span class="initbox" aria-hidden="true"></span><strong>')

CH_TITLES = [
    "What histology is",
    "The compound light microscope",
    "Magnification and resolution",
    "Electron microscopes",
    "How a slide gets made",
    "Stains and what they tell you",
    "Reading a slide well",
    "Your first five minutes at the scope",
]


def lines(n: int) -> str:
    return '<div class="wl">' + "".join('<div class="wline"></div>' for _ in range(n)) + "</div>"


def practice_html() -> str:
    out = ['<h2 class="chap"><span class="cn">9</span>Practice set</h2>']
    out.append('<p class="chaplede">Work every item here before you open the answers. '
               'The answers live on the course web page, not in this packet, on purpose. '
               'Commit to an answer in pen first, then go check it. That is the part that '
               'makes it stick.</p>')

    # Part A, labeling
    out.append('<section class="part"><h3 class="parth">Part A. Label the microscope</h3>')
    out.append('<p class="partlede">Write the name of each numbered part on the line beside it.</p>')
    out.append('<figure class="figblank">' + BLANK_SVG + "</figure></section>")

    n = 0
    for key, items in BANK.items():
        out.append(f'<section class="part"><h3 class="parth">Part {key}. {TITLES[key]}</h3>')
        for it in items:
            n += 1
            out.append('<div class="pq">')
            out.append(f'<p class="pstem"><span class="pn">{n}.</span>{it["q"]}</p>')
            if "choices" in it:
                letters = "ABCDE"
                out.append('<ol class="pchoices">')
                for i, c in enumerate(it["choices"]):
                    out.append(f'<li><span class="pl">{letters[i]}.</span>{c}</li>')
                out.append("</ol>")
                out.append('<p class="pans">Answer: <span class="blankbox"></span></p>')
            else:
                out.append(lines(it.get("lines", 3)))
            out.append("</div>")
        out.append("</section>")
    return "\n".join(out)


CSS = """
@page { size: letter; margin: 0.6in 0.62in 0.72in; }
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  font-family:'Plus Jakarta Sans',system-ui,sans-serif;
  font-size:10.6pt; line-height:1.5; color:#08101F; background:#fff;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
em,i,cite,dfn,var{font-style:normal}
p{margin:0 0 .62em}
ul,ol{margin:0 0 .7em;padding-left:1.15em}
li{margin-bottom:.24em}
strong{font-weight:700}
a{color:#6B1616;text-decoration:none}

h2.chap{
  font-size:19pt;font-weight:800;letter-spacing:-.01em;margin:0 0 .1em;
  padding-bottom:.28em;border-bottom:2px solid #08101F;
  break-after:avoid; page-break-after:avoid;
}
h2.chap .cn{color:#8B1D1D;font-weight:800;margin-right:.55rem}
.chaplede{color:#3D4860;font-weight:500;margin:.55em 0 1.1em;font-size:10.2pt}
h3{font-size:11.6pt;font-weight:700;color:#6B1616;margin:1.1em 0 .35em;break-after:avoid;page-break-after:avoid}
h4{font-size:10.6pt;font-weight:700;margin:.9em 0 .3em}

.chapter{break-before:page;page-break-before:always}
.chapter:first-of-type{break-before:auto;page-break-before:auto}

/* key term lists */
dl.terms{margin:0 0 .9em}
dl.terms > div{border-left:2.5px solid #DCB45C;padding-left:.7em;margin-bottom:.6em;break-inside:avoid;page-break-inside:avoid}
dl.terms dt{font-weight:700;margin-bottom:.05em}
dl.terms dd{margin:0;color:#3D4860}

/* numbered steps */
ol.steps{list-style:none;counter-reset:s;padding:0;margin:0 0 .8em}
ol.steps li{
  counter-increment:s;position:relative;padding:.38em 0 .38em 2.05em;
  border-bottom:.5px solid #DCE0E6;break-inside:avoid;page-break-inside:avoid;margin:0;
}
ol.steps li:last-child{border-bottom:0}
ol.steps li::before{
  content:counter(s);position:absolute;left:0;top:.42em;
  width:1.5em;height:1.5em;border-radius:99px;background:#08101F;color:#fff;
  font-size:8pt;font-weight:800;display:flex;align-items:center;justify-content:center;
}
.initbox{
  float:right;width:1.5em;height:1.5em;border:1px solid #08101F;border-radius:3px;
  margin-left:.5em;
}

/* callouts */
.callout{
  border:1px solid #DCE0E6;border-radius:8px;padding:.65em .8em;margin:.8em 0;
  break-inside:avoid;page-break-inside:avoid;
}
.callout .tag{
  display:inline-block;font-size:7pt;font-weight:800;letter-spacing:.11em;text-transform:uppercase;
  color:#fff;background:#6B1616;padding:.14em .5em;border-radius:99px;margin-bottom:.35em;
}
.callout.gold .tag{background:#08101F}
.callout > :last-child{margin-bottom:0}

/* tables */
.table-wrap{border:1px solid #DCE0E6;border-radius:8px;overflow:hidden;margin:0 0 .9em;break-inside:avoid;page-break-inside:avoid}
table{border-collapse:collapse;width:100%;font-size:9.5pt}
caption{text-align:left;font-weight:700;padding:.45em .7em;border-bottom:1px solid #DCE0E6}
thead{display:table-header-group}
th,td{text-align:left;padding:.38em .7em;border-bottom:.5px solid #DCE0E6;vertical-align:top}
thead th{background:#08101F;color:#fff;font-weight:700;border-bottom:0}
tbody tr:last-child td{border-bottom:0}

/* figures */
figure{margin:.6em 0 .9em;break-inside:avoid;page-break-inside:avoid}
figure svg{width:100%;height:auto;display:block}
figcaption{margin-top:.4em;font-size:8.6pt;color:#3D4860;border-top:.5px solid #DCE0E6;padding-top:.35em}
.figblank svg{max-height:6.4in}

/* practice */
.part{break-inside:auto}
h3.parth{
  font-size:12pt;color:#08101F;background:#ECEFF4;border-radius:6px;
  padding:.35em .6em;margin:1.15em 0 .5em;break-after:avoid;page-break-after:avoid;
}
.partlede{font-size:9.6pt;color:#3D4860;margin:0 0 .5em}
.pq{
  border:1px solid #DCE0E6;border-radius:8px;padding:.6em .75em;margin:0 0 .55em;
  break-inside:avoid;page-break-inside:avoid;
}
.pstem{margin:0 0 .35em;font-weight:600}
.pn{display:inline-block;min-width:1.85em;padding-right:.2em;font-weight:800;color:#6B1616}
ol.pchoices{list-style:none;padding:0;margin:.25em 0 .45em}
ol.pchoices li{margin-bottom:.16em}
.pl{display:inline-block;width:1.4em;font-weight:700;color:#3D4860}
.pans{margin:.2em 0 0;font-size:9.6pt;font-weight:600}
.blankbox{display:inline-block;width:2.3em;border-bottom:1.2px solid #08101F;height:1em;vertical-align:-.15em}
.wl{margin:.3em 0 0}
.wline{border-bottom:.75px solid #B8BEC8;height:1.42em}

/* closing page */
.closing{break-before:page;page-break-before:always;text-align:center;padding-top:1.4in}
.closing h2{font-size:20pt;font-weight:800;border:0;margin-bottom:.4em}
.closing p{max-width:5.2in;margin:0 auto .8em;color:#3D4860}
.closing .cbox{
  border:1.5px solid #08101F;border-radius:12px;padding:1em 1.2em;max-width:5in;margin:1.2em auto 0;
  text-align:left;
}
.closing .cbox p{margin:0 0 .5em;color:#08101F}
.closing .cbox p:last-child{margin:0}

/* contents */
.contents{margin-top:.4em}
.contents ol{list-style:none;padding:0;margin:0}
.contents li{display:flex;align-items:baseline;gap:.5em;padding:.42em 0}
.contents .t{flex:0 0 auto}
.contents .dots{flex:1 1 auto;border-bottom:1.5px dotted #B8BEC8;margin:0 .5em;transform:translateY(-.22em)}
.contents .pg{font-weight:700;color:#3D4860;min-width:1.6em;text-align:right}
.contents .num{font-weight:800;color:#8B1D1D;min-width:1.4em}
.contents .t{font-weight:600}
"""

def make_body(pagemap):
    CONTENTS_ROWS = "".join(
        f'<li><span class="num">{i+1}</span><span class="t">{t}</span>'
        f'<span class="dots"></span><span class="pg">{pagemap.get(i+1, "") or ""}</span></li>'
        for i, t in enumerate(CH_TITLES + ["Practice set"]))
    return f"""<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<title>{html.escape(PACKET_NAME)}</title><style>{CSS}</style></head><body>

<div class="chapter">
<h2 class="chap"><span class="cn"></span>Contents</h2>
<div class="contents"><ol>
{CONTENTS_ROWS}
</ol></div>
<div class="callout" style="margin-top:1.1em">
<span class="tag">How to use this packet</span>
<p>Read a chapter, then work the matching part of the practice set with the packet open. This packet
does not contain the answers. Answers live on the course web page, so that you have to commit to
an answer before you find out whether you were right. That gap is where the learning happens.</p>
</div>
<div class="callout gold">
<span class="tag">Bring to lab</span>
<p>Bring this packet, completed in pen, to your first histology lab. You will use the bench
walkthrough in chapter 8 at the scope, and the labeling exercise is the same figure that shows up
on your first lab practical.</p>
</div>
</div>

{''.join(f'<div class="chapter"><h2 class="chap"><span class="cn">{i+1}</span>{CH_TITLES[i]}</h2>{re.sub(chr(60) + "h2.*?" + chr(60) + "/h2" + chr(62), "", s, count=1, flags=re.S)}</div>' for i, s in enumerate(SECTIONS))}

<div class="chapter">
{practice_html()}
</div>

<div class="closing">
<h2>Now go check yourself.</h2>
<p>You have committed to your answers. Open the course web page for this module and reveal the
answers one item at a time.</p>
<div class="cbox">
<p><strong>Where the answers are</strong></p>
<p>Course site, Module 1 Lab, Introduction to Histology and the Microscope. Scroll to section 9,
Practice set, and use the Show answer button under each question.</p>
<p><strong>What to do with the ones you missed</strong></p>
<p>Do not just read the right answer and move on. Write, in your own words, what you thought the
answer was and where your reasoning broke. Bring that note to lab.</p>
</div>
</div>

</body></html>"""

COVER = f"""<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>
@page {{ size: letter; margin: 0; }}
*{{box-sizing:border-box}}
html,body{{margin:0;padding:0;height:100%}}
body{{font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#08101F;
 -webkit-print-color-adjust:exact;print-color-adjust:exact;position:relative}}
.wrap{{padding:1.35in 0.95in 0}}
.mark{{margin-bottom:1.5in}}
.eyebrow{{font-size:9.5pt;font-weight:800;letter-spacing:.17em;text-transform:uppercase;
 color:#6B1616;margin:0 0 .7em}}
h1{{font-size:41pt;font-weight:800;line-height:1.03;letter-spacing:-.025em;margin:0 0 .35em;max-width:6in}}
h1 .dot{{color:#8B1D1D}}
.sub{{font-size:13pt;font-weight:600;color:#3D4860;margin:0;max-width:5.4in;line-height:1.4}}
.band{{position:absolute;left:0;right:0;bottom:0;height:1.5in;background:#8B1D1D;color:#fff;
 display:flex;align-items:center;justify-content:space-between;padding:0 .95in}}
.band .l{{font-size:11pt;font-weight:600;line-height:1.45}}
.band .r{{text-align:right;font-size:11pt;line-height:1.45}}
.band .r .nm{{font-weight:800;font-size:13pt}}
</style></head><body>
<div class="wrap">
  <div class="mark">
    <svg width="74" height="68" viewBox="0 0 92 84" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke-width="5" stroke-linecap="round">
        <g stroke="#8B1D1D"><circle cx="18" cy="20" r="9" fill="#8B1D1D" stroke="none"/><path d="M6 76 V54 a12 12 0 0 1 24 0 V76"/></g>
        <g stroke="#08101F"><circle cx="46" cy="14" r="10" fill="#08101F" stroke="none"/><path d="M32 78 V50 a14 14 0 0 1 28 0 V78"/></g>
        <g stroke="#DCB45C"><circle cx="74" cy="20" r="9" fill="#DCB45C" stroke="none"/><path d="M62 76 V54 a12 12 0 0 1 24 0 V76"/></g>
      </g>
    </svg>
  </div>
  <p class="eyebrow">Module 1 &middot; Lab &middot; Student Packet</p>
  <h1>Introduction to Histology and the Microscope<span class="dot">.</span></h1>
  <p class="sub">What histology is, how a compound light microscope actually works, how a slide gets
  made, and a practice set to work before you sit down at the bench.</p>
</div>
<div class="band">
  <div class="l">Solano Community College<br>BIO 004 Human Anatomy</div>
  <div class="r"><span class="nm">Dr. Sharilyn Rennie</span><br>Professor of Anatomy &amp; Physiology</div>
</div>
</body></html>"""

open("_cover.html", "w").write(COVER)

FOOT = ("""<div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:7pt;color:#3D4860;
width:100%;padding:0 0.62in;display:flex;justify-content:space-between;">
<span>""" + html.escape(PACKET_NAME) + """</span>
<span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>""")
EMPTY = '<div style="display:none"></div>'


async def render(pagemap):
    open("_body.html", "w").write(make_body(pagemap))
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page()
        await pg.goto("file:///home/claude/work/build/_cover.html")
        await pg.wait_for_timeout(400)
        await pg.pdf(path="_cover.pdf", format="Letter", print_background=True,
                     margin={"top": "0", "bottom": "0", "left": "0", "right": "0"})
        await pg.goto("file:///home/claude/work/build/_body.html")
        await pg.wait_for_timeout(900)
        await pg.pdf(path="_body.pdf", format="Letter", print_background=True,
                     display_header_footer=True, header_template=EMPTY, footer_template=FOOT,
                     margin={"top": "0.6in", "bottom": "0.72in", "left": "0.62in", "right": "0.62in"})
        await b.close()


def scan_pages():
    """Which body page does each chapter start on?"""
    import pdfplumber
    titles = CH_TITLES + ["Practice set"]
    found = {}
    with pdfplumber.open("_body.pdf") as pdf:
        for pno, page in enumerate(pdf.pages, 1):
            t = re.sub(r"\s+", " ", page.extract_text() or "")
            if t.lstrip().startswith("Contents"):
                continue
            for i, title in enumerate(titles, 1):
                if i in found:
                    continue
                if re.search(rf"\b{i}\s+{re.escape(title)}", t):
                    found[i] = pno
    return found


asyncio.run(render({}))
asyncio.run(render(scan_pages()))

from pypdf import PdfWriter, PdfReader
w = PdfWriter()
for f in ("_cover.pdf", "_body.pdf"):
    for pg_ in PdfReader(f).pages:
        w.add_page(pg_)
w.add_metadata({"/Title": PACKET_NAME, "/Author": "Dr. Sharilyn Rennie",
                "/Subject": "BIO 004 Human Anatomy, Solano Community College"})
with open("BIO004-M1-Histology-Microscope-Packet.pdf", "wb") as f:
    w.write(f)
print("pages:", len(PdfReader("BIO004-M1-Histology-Microscope-Packet.pdf").pages))
