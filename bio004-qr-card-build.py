"""One branded QR card, as a PNG.

    python3 bio004-qr-card-build.py <url> <eyebrow> <name> <outfile.png> [light]

Error correction is H, which is what lets the logo sit in the middle without
breaking the code. Always decode the finished PNG before trusting it:

    import cv2; cv2.QRCodeDetector().detectAndDecodeMulti(cv2.imread(path))
"""
import segno, re, sys, subprocess, json, os

url, eyebrow, name, out = sys.argv[1:5]
light = len(sys.argv) > 5 and sys.argv[5] == 'light'

BG    = '#FAFAF9' if light else '#0B1530'
RING  = '#C9A14A'
EYE   = '#7A2A22' if light else '#E8C97E'
NAME  = '#08101F' if light else '#EBCE86'
SCAN  = '#4A5763' if light else '#D7DEE8'

svg = segno.make(url, error='h').svg_inline(scale=1, border=2, dark='#0B1530',
                                            svgclass='qr', lineclass='qrline')
svg = re.sub(r'<svg width="(\d+)" height="\d+" class="qr"',
             lambda m: '<svg viewBox="0 0 %s %s" preserveAspectRatio="xMidYMid meet" class="qr"'
                       % (m.group(1), m.group(1)), svg)

# the logo lockup, lifted from the poster so there is one source for it
poster = open(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           'bio004-tour-poster.html'), encoding='utf-8').read()
i = poster.index('<div class="site-logo">'); j = poster.index('</svg>', i) + 6
logo = poster[i:j]; logo = logo[logo.index('<svg'):]

html = """<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=DM+Sans:wght@700;800&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0}
  body{width:1200px;height:1200px;display:grid;place-items:center;background:#fff}
  .card{width:1200px;height:1200px;background:BG_;border-radius:96px;
    box-shadow:0 0 0 7px RING_ inset;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;
    padding:70px 70px 58px;font-family:'Plus Jakarta Sans',system-ui,sans-serif}
  .qrbox{position:relative;width:820px;height:820px;background:#fff;border-radius:46px;padding:30px}
  .qr{width:100%;height:100%;display:block;shape-rendering:crispEdges}
  .qrline{stroke:#0B1530}
  .mark{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
    width:186px;height:186px;background:#fff;border:6px solid #0B1530;border-radius:48px;
    display:grid;place-items:center}
  .mark svg{width:118px;height:118px;display:block}
  .eyebrow{font-family:'DM Sans',system-ui,sans-serif;font-size:29px;font-weight:800;
    letter-spacing:.2em;text-transform:uppercase;color:EYE_}
  .name{font-size:52px;font-weight:800;letter-spacing:-.02em;color:NAME_}
  .scan{font-family:'DM Sans',system-ui,sans-serif;font-size:24px;font-weight:700;
    letter-spacing:.1em;text-transform:uppercase;color:SCAN_}
</style></head><body>
<div class="card">
  <div class="qrbox">QR_<span class="mark">LOGO_</span></div>
  <p class="eyebrow">EYEBROW_</p>
  <p class="name">NAME_TEXT_</p>
  <p class="scan">Scan to open the course</p>
</div></body></html>"""
# Longest tokens first: NAME_ is a prefix of NAME_TEXT_, and replacing the
# short one first turns the card title into a hex colour. It did once.
for k, v in sorted([('BG_', BG), ('RING_', RING), ('EYE_', EYE), ('NAME_', NAME),
                    ('SCAN_', SCAN), ('QR_', svg), ('LOGO_', logo),
                    ('EYEBROW_', eyebrow), ('NAME_TEXT_', name)],
                   key=lambda kv: -len(kv[0])):
    html = html.replace(k, v)
open('/tmp/qrcard.html', 'w', encoding='utf-8').write(html)

shot = """import pw from '/opt/node-tools/node_modules/playwright/index.js';
const b = await pw.chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const pg = await (await b.newContext({viewport:{width:1200,height:1200}, deviceScaleFactor:2})).newPage();
await pg.goto('file:///tmp/qrcard.html',{waitUntil:'networkidle'});
await pg.waitForTimeout(900);
await pg.locator('.card').screenshot({path:process.argv[2]});
await b.close();"""
open('/tmp/qrshot.mjs', 'w').write(shot)
subprocess.run(['node', '/tmp/qrshot.mjs', out], check=True)
print('wrote', out)
