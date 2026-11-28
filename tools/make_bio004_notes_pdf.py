#!/usr/bin/env python3
"""
tools/make_bio004_notes_pdf.py

BIO 004 printable course notes in the Spring 2027 minimal style, one tagged
PDF/UA-1 file per notes page (m1-cell-notes.html -> BIO004-M1-Cell-Notes.pdf).
Nov 27 2026.

Same paper rules as tools/make_notes_pdf.py: two columns, no filled
backgrounds, figures capped in height, folded parts printed open. The look
follows the Spring course map: DM Sans text, light Plus Jakarta Sans titles,
dark navy ink, terra-dark labels, thin gray rules.

Run:  python3 tools/make_bio004_notes_pdf.py              every m?-*-notes.html
      python3 tools/make_bio004_notes_pdf.py m1-cell      one page
"""
import asyncio, sys, re, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import make_pdf as M
from playwright.async_api import async_playwright
from weasyprint import HTML

ROOT = M.ROOT
SITE = "drsrennie-stack.github.io/new-build-bio4-solano/"

PREP = r"""(meta) => {
  const [title, mod, file, site] = meta;
  document.querySelectorAll('header.site-header, .site-header, footer, .mm-foot, .lightbox, .rm-bar, .rm-toc, .atl-wrap, .bd-launch, .bd-back, .bd-panel, .dcm, nav, .skip, .skip-link, script, .noprint')
    .forEach(n => n.remove());
  document.querySelectorAll('canvas').forEach(c => {
    const note = document.createElement('p');
    note.className = 'modelnote';
    note.textContent = 'Interactive model: open it on the course site, ' + site + file;
    c.replaceWith(note);
  });
  document.querySelectorAll('button').forEach(b => b.remove());
  document.querySelectorAll('details').forEach(d => d.open = true);
  document.querySelectorAll('[hidden]').forEach(h => h.removeAttribute('hidden'));
  document.querySelectorAll('.rm-orig').forEach(e => e.classList.remove('rm-orig'));
  /* anything still hidden by the page's print view is not part of the paper copy */
  [].slice.call(document.body.querySelectorAll('*')).forEach(n => {
    if (!n.isConnected) return;
    const cs = getComputedStyle(n);
    if (cs.display === 'none' || cs.visibility === 'hidden') n.remove();
  });
  const h1 = document.querySelector('h1');
  if (h1) {
    const k = document.createElement('p');
    k.className = 'kick';
    k.textContent = 'BIO 004 Human Anatomy · Module ' + mod + ' notes · Dr. Sharilyn Rennie';
    h1.insertAdjacentElement('beforebegin', k);
  }
  document.querySelectorAll('body *').forEach(e => {
    const d = getComputedStyle(e).display;
    if (d === 'grid' || d === 'flex') e.style.setProperty('display', 'block', 'important');
    else if (d === 'inline-grid' || d === 'inline-flex') e.style.setProperty('display', 'inline-block', 'important');
  });
  document.querySelectorAll('img').forEach(i => { if (!i.hasAttribute('alt')) i.setAttribute('alt',''); });
  document.querySelectorAll('svg').forEach(s => {
    const alt = s.getAttribute('aria-label') || (s.querySelector('title') ? s.querySelector('title').textContent.trim() : '');
    if (!alt) { s.setAttribute('aria-hidden','true'); return; }
    const clone = s.cloneNode(true);
    if (!clone.getAttribute('xmlns')) clone.setAttribute('xmlns','http://www.w3.org/2000/svg');
    const img = document.createElement('img');
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(clone))));
    img.alt = alt; img.style.width = '100%';
    s.replaceWith(img);
  });
  /* drop every page stylesheet: the paper copy uses one sheet, below */
  document.querySelectorAll('style, link[rel=stylesheet]').forEach(n => n.remove());
  const st = document.createElement('style');
  st.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Plus+Jakarta+Sans:wght@300;500;600&display=swap');
  @page{size:letter;margin:0.5in 0.5in 0.55in;
    @bottom-left{content:"BIO 004 · Module ${mod} notes · ${title.replace(/"/g,'')}";font:300 7pt 'DM Sans',sans-serif;color:#4A5A63}
    @bottom-right{content:counter(page) " / " counter(pages);font:300 7pt 'DM Sans',sans-serif;color:#4A5A63}}
  html,body{background:#fff}
  body{font-family:'DM Sans',sans-serif;font-size:8.8pt;line-height:1.4;color:#0B1530;margin:0}
  *{box-shadow:none!important;text-shadow:none!important;background:transparent!important;max-width:none!important}
  body > *, main, .wrap{padding:0!important;margin:0!important;width:auto!important}
  .cols{column-count:2;column-gap:0.28in;column-fill:auto}
  .kick{column-span:all;font-size:6.8pt;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#A0522D;margin:0 0 4pt}
  h1{column-span:all;font-family:'Plus Jakarta Sans',sans-serif;font-weight:300;font-size:24pt;line-height:1.05;letter-spacing:-.02em;margin:0 0 6pt;padding:0 0 8pt;border-bottom:2pt solid #0B1530;color:#0B1530}
  h2{font-family:'Plus Jakarta Sans',sans-serif;font-weight:500;font-size:12pt;line-height:1.2;margin:12pt 0 4pt;padding-top:4pt;border-top:1pt solid #0B1530;color:#0B1530;break-after:avoid}
  h3{font-family:'Plus Jakarta Sans',sans-serif;font-weight:500;font-size:9.8pt;margin:8pt 0 2pt;color:#0B1530;break-after:avoid}
  h4,h5{font-size:9pt;font-weight:700;margin:6pt 0 2pt;break-after:avoid}
  p{margin:0 0 4.5pt}
  ul,ol{margin:0 0 5pt 1.1em;padding:0}
  li{margin:0 0 2pt}
  strong,b{font-weight:600}
  .eyebrow,.tag,.stg,[class*="eyebrow"]{font-size:6.6pt;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#A0522D}
  aside,.card,.note,.box,.clin,.key,.callout,[class*="card"],[class*="box"]{border:0;border-left:1.2pt solid #B8924A;padding:0 0 0 6pt;margin:4pt 0 7pt;border-radius:0}
  figure{margin:4pt 0 8pt;padding:0;break-inside:avoid}
  img,svg{max-width:100%!important;height:auto;max-height:3in;display:block;margin:0 auto 2pt}
  img[alt*="QR" i],img[alt*="scan" i],img[alt*="code" i],img[src*="qr" i]{max-width:1.1in!important;max-height:1.1in;margin:0 0 2pt}
  figcaption{font-size:7.4pt;color:#4A5A63;margin:2pt 0 0}
  table{width:100%;border-collapse:collapse;font-size:7.6pt;margin:3pt 0 8pt;break-inside:avoid}
  th,td{padding:2pt 4pt 2pt 0;border:0;border-bottom:.5pt solid #D5D8DE;vertical-align:top;text-align:left}
  th{font-size:6.6pt;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#4A5A63;border-bottom:.8pt solid #0B1530}
  mark,.hl{background:transparent!important;color:#0B1530;font-weight:600}
  .modelnote{font-size:7.4pt;color:#4A5A63;border-top:.5pt solid #D5D8DE;border-bottom:.5pt solid #D5D8DE;padding:3pt 0;margin:3pt 0 6pt}
  a{color:#0B1530;text-decoration:none}
  `;
  document.head.appendChild(st);
  (document.querySelector('main') || document.body).classList.add('cols');
  const k2 = document.querySelector('.kick'), h = document.querySelector('h1');
  if (k2 && h && h.parentElement !== document.body) { document.body.insertBefore(h, document.body.firstChild); document.body.insertBefore(k2, h); }
  return '<!DOCTYPE html>' + document.documentElement.outerHTML;
}"""

def pdf_name(f):
    b = f[:-len("-notes.html")]
    mod, slug = b[1], b[3:]
    return mod, "BIO004-M%s-%s-Notes.pdf" % (mod, "-".join(w.capitalize() for w in slug.split("-")))

async def render(files):
    out = {}
    async with async_playwright() as pw:
        b = await pw.chromium.launch(executable_path='/opt/pw-browsers/chromium' if pathlib.Path('/opt/pw-browsers/chromium').exists() else None)
        for f in files:
            mod, _ = pdf_name(f)
            p = await b.new_page()
            await p.emulate_media(media='print')
            await p.goto('file://' + str(ROOT) + '/' + f + '?site=1')
            await p.wait_for_timeout(1500)
            h1 = await p.evaluate("() => (document.querySelector('h1')||{}).textContent || document.title")
            title = re.sub(r"\s+", " ", h1).strip()
            out[f] = (title, await p.evaluate(PREP, [title, mod, f, SITE]))
            await p.close()
        await b.close()
    return out

def main():
    pick = sys.argv[1:]
    files = sorted(x.name for x in ROOT.glob("m?-*-notes.html"))
    if pick: files = [f for f in files if any(f.startswith(k) for k in pick)]
    pages = asyncio.run(render(files))
    for f in files:
        title, html = pages[f]
        mod, name = pdf_name(f)
        target = ROOT / name
        HTML(string=html, base_url=str(ROOT) + '/').write_pdf(target, pdf_variant='pdf/ua-1', uncompressed_pdf=False)
        M.stamp(target, "Module %s %s · Notes · BIO 004 Human Anatomy" % (mod, title), "Printable notes for %s, two columns" % title)
        print("  ", name, M.audit(target))

if __name__ == "__main__":
    main()
