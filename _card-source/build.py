"""
BIO 004 Human Anatomy course card.

Builds a self-contained SVG in two crops, wide and square, from the
motifs in motifs.py. Fonts are embedded as base64 woff2 so the file
renders identically anywhere, with no network call and nothing to
install.

Palette is the teaching PRIMARY set as the live pages use it:
navy ground, brushed gold linework, terra cotta for the vascular
lines and the eyebrow. No sage. No cream.
"""
import base64
import pathlib
import motifs as M

HERE = pathlib.Path(__file__).parent

NAVY      = "#08101F"
NAVY_LIFT = "#132133"
GOLD      = "#DCB45C"
TERRA     = "#C2734D"
INK_SOFT  = "#C6CEDA"

# The red end of the ground. #8B1D1D and #6B1616 are the terra values
# already carried by the live pages, so the gradient lands somewhere
# the rest of the course site already goes rather than inventing a
# colour. Deep and desaturated: a bright red behind gold linework
# would fight it, and would put the white type on a moving contrast
# ratio instead of a stable one.
RED_MID   = "#2C1018"
RED_DEEP  = "#5A1519"

# The course code and the strapline. One line each, one place, so a
# term rolls over or a code changes without hunting through the file.
CODE      = "BIOL 004"
STRAPLINE = "Fall 2026"


def font_face(name, weight, filename):
    b = base64.b64encode((HERE / filename).read_bytes()).decode()
    return (f"@font-face{{font-family:'{name}';font-weight:{weight};font-style:normal;"
            f"src:url(data:font/woff2;base64,{b}) format('woff2');}}")


FONTS = (font_face("PJS", 800, "pjs800.woff2")
         + font_face("PJS", 600, "pjs600.woff2")
         + font_face("DMS", 700, "dm700.woff2"))


def artwork(W, H, square=False):
    """The linework field. Motifs are placed so several bleed off an
    edge: a composition that runs past the frame reads as a window
    onto something larger, where one that fits neatly inside reads as
    a diagram."""
    a = []

    if not square:
        # WIDE 1600 x 900. The title holds the left 44%, so the field
        # is weighted right. Several motifs bleed off an edge: a
        # composition that runs past the frame reads as a window onto
        # something larger, where one that fits neatly inside reads
        # as a diagram.
        a.append(M.g(M.artery_section(),   x=1102, y=336, s=1.28, opacity=0.90, stroke=TERRA, w=2.0))
        a.append(M.g(M.muscle_section(.4), x=1452, y=214, s=0.96, opacity=0.60, stroke=GOLD,  w=1.9))
        a.append(M.g(M.epithelium(340, 250, 26, 3), x=690, y=598, s=1.06, opacity=0.46, stroke=GOLD, w=1.6))
        a.append(M.g(M.osteon(5, 14, 13, 0.0), x=828, y=250, s=1.30, opacity=0.72, stroke=GOLD, w=1.6))
        a.append(M.g(M.osteon(4, 11, 11, 1.1), x=700, y=352, s=0.86, opacity=0.40, stroke=GOLD, w=1.3))
        a.append(M.g(M.nerve_section(5),   x=1372, y=706, s=1.02, opacity=0.62, stroke=GOLD,  w=1.9))
        # The alveoli were here and came out. Nine motifs crowded the
        # bottom centre and the duct ran straight through the
        # epithelial field. A card that is busy is not richer.
        a.append(M.g(M.trabeculae(300, 220, 7), x=1288, y=-40, s=1.00, opacity=0.26, stroke=GOLD, w=1.4))
        a.append(M.g(M.vessels(6, 1.0),    x=1584, y=560, s=1.16, opacity=0.52, stroke=TERRA, w=2.4))
        a.append(M.g(M.sarcomere(6, 90, 120), x=560, y=126, s=0.56, opacity=0.24, stroke=GOLD, w=1.6))
    else:
        # SQUARE 1200 x 1200. The type sits in the lower third, so the
        # field fills the upper two thirds.
        a.append(M.g(M.artery_section(),   x=470, y=330, s=1.36, opacity=0.90, stroke=TERRA, w=2.1))
        a.append(M.g(M.muscle_section(.4), x=930, y=196, s=0.92, opacity=0.56, stroke=GOLD,  w=1.9))
        a.append(M.g(M.osteon(5, 14, 13, 0.0), x=178, y=232, s=1.26, opacity=0.66, stroke=GOLD, w=1.6))
        a.append(M.g(M.osteon(4, 11, 11, 1.1), x=296, y=112, s=0.86, opacity=0.38, stroke=GOLD, w=1.3))
        a.append(M.g(M.nerve_section(5),   x=1024, y=598, s=0.94, opacity=0.52, stroke=GOLD,  w=1.9))
        a.append(M.g(M.epithelium(340, 250, 26, 3), x=132, y=520, s=1.00, opacity=0.40, stroke=GOLD, w=1.6))
        a.append(M.g(M.trabeculae(300, 200, 7), x=852, y=-24, s=0.92, opacity=0.24, stroke=GOLD, w=1.4))
        a.append(M.g(M.vessels(6, 1.0),    x=1168, y=386, s=1.02, opacity=0.44, stroke=TERRA, w=2.4))
        a.append(M.g(M.sarcomere(5, 90, 120), x=64, y=92, s=0.52, opacity=0.22, stroke=GOLD, w=1.6))

    return "".join(a)


def build(W, H, square=False):
    title_x = 96 if not square else 92
    # Wide: type is vertically centred on the left. Square: type sits
    # in the lower third, under the artwork.
    if not square:
        eyebrow_y, l1, l2, rule_y, sub_y = 340, 470, 596, 660, 716
        f_eyebrow, f_title, f_sub = 25, 118, 30
        kicker_y = 268
        f_kicker = 74
    else:
        eyebrow_y, l1, l2, rule_y, sub_y = 812, 920, 1034, 1088, 1134
        f_eyebrow, f_title, f_sub = 24, 106, 28
        kicker_y = 754
        f_kicker = 62

    # A scrim behind the type. Without it the linework runs under the
    # words and the contrast ratio stops being a number you can trust.
    scrim_w = int(W * (0.62 if not square else 1.0))
    scrim = (f'<rect x="0" y="{0 if not square else H*0.52:.0f}" width="{scrim_w}" '
             f'height="{H if not square else H*0.48:.0f}" fill="url(#scrim)"/>')

    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}"
     viewBox="0 0 {W} {H}" role="img"
     aria-labelledby="ttl desc">
<title id="ttl">{CODE} Human Anatomy, Solano Community College</title>
<desc id="desc">A deep navy card. Line drawings of human tissue in cross section, in
brushed gold and terra cotta: an artery showing its three tunics, a muscle belly with
its fascicles and fibres, compact bone with concentric lamellae, a peripheral nerve, an
epithelial sheet, alveoli, spongy bone lattice, an arterial tree and skeletal muscle
striation, arranged as an open field. The course title sits over a darkened area at the
{'left' if not square else 'lower part'} of the card.</desc>
<defs>
  <style>{FONTS}</style>
  <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="{NAVY_LIFT}"/>
    <stop offset="0.34" stop-color="{NAVY}"/>
    <stop offset="0.62" stop-color="#0C1020"/>
    <stop offset="0.84" stop-color="{RED_MID}"/>
    <stop offset="1" stop-color="{RED_DEEP}"/>
  </linearGradient>
  <radialGradient id="ember" cx="0.92" cy="0.94" r="0.62">
    <stop offset="0" stop-color="#7A1A1C" stop-opacity="0.55"/>
    <stop offset="0.5" stop-color="#5A1519" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#5A1519" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="glow" cx="0.72" cy="0.34" r="0.72">
    <stop offset="0" stop-color="{GOLD}" stop-opacity="0.14"/>
    <stop offset="0.55" stop-color="{GOLD}" stop-opacity="0.04"/>
    <stop offset="1" stop-color="{GOLD}" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="scrim" x1="{'0' if not square else '0'}" y1="{'0' if not square else '0'}"
                  x2="{'1' if not square else '0'}" y2="{'0' if not square else '1'}">
    <stop offset="0" stop-color="#040910" stop-opacity="{0.94 if not square else 0}"/>
    <stop offset="{0.55 if not square else 0.42}" stop-color="#040910" stop-opacity="{0.80 if not square else 0.86}"/>
    <stop offset="1" stop-color="#040910" stop-opacity="{0 if not square else 0.97}"/>
  </linearGradient>
  <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="{GOLD}"/>
    <stop offset="0.55" stop-color="#B3453C"/>
    <stop offset="1" stop-color="#B3453C" stop-opacity="0"/>
  </linearGradient>
</defs>

<rect width="{W}" height="{H}" fill="url(#ground)"/>
<rect width="{W}" height="{H}" fill="url(#ember)"/>
<rect width="{W}" height="{H}" fill="url(#glow)"/>

{artwork(W, H, square)}

{scrim}

<text x="{title_x}" y="{kicker_y}" font-family="PJS" font-weight="800"
      font-size="{f_kicker}" fill="{GOLD}" letter-spacing="{f_kicker*0.02:.1f}">{CODE}</text>

<text x="{title_x}" y="{eyebrow_y}" font-family="DMS" font-weight="700"
      font-size="{f_eyebrow}" fill="{TERRA}" letter-spacing="{f_eyebrow*0.19:.1f}">SOLANO COMMUNITY COLLEGE</text>

<text x="{title_x}" y="{l1}" font-family="PJS" font-weight="800" font-size="{f_title}"
      fill="#FFFFFF" letter-spacing="{-f_title*0.022:.1f}">Human</text>
<text x="{title_x}" y="{l2}" font-family="PJS" font-weight="800" font-size="{f_title}"
      fill="#FFFFFF" letter-spacing="{-f_title*0.022:.1f}">Anatomy</text>

<rect x="{title_x}" y="{rule_y}" width="{170 if not square else 150}" height="4" rx="2" fill="url(#rule)"/>

<text x="{title_x}" y="{sub_y}" font-family="PJS" font-weight="600" font-size="{f_sub}"
      fill="{INK_SOFT}">{STRAPLINE}</text>
</svg>'''


if __name__ == "__main__":
    (HERE / "bio004-course-card-wide.svg").write_text(build(1600, 900, False), encoding="utf-8")
    (HERE / "bio004-course-card-square.svg").write_text(build(1200, 1200, True), encoding="utf-8")
    print("wrote wide 1600x900 and square 1200x1200")
