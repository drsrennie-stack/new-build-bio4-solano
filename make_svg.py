#!/usr/bin/env python3
"""Generate the labeled and blank compound microscope figures.

Original technical line drawing. No third-party image assets.
Palette: live BIO 004 course-site tokens.
"""
import math

NAVY = "#08101F"
NAVY_MID = "#1E2A47"
TINT = "#ECEFF4"
TINT2 = "#DDE3EB"
TERRA = "#8B1D1D"
GOLD = "#DCB45C"
WHITE = "#FFFFFF"

W, H = 1180, 780
VB_Y, VB_H = 138, 642
DX = 62  # horizontal shift of the drawing to open up the left label gutter

# (number, label text, side, anchor_x, anchor_y, label_y)
PARTS = [
    (1,  "Ocular lenses (eyepieces)", "L", 344, 182, 176),
    (2,  "Body tube (head)",          "L", 388, 268, 250),
    (3,  "Revolving nosepiece",       "L", 356, 384, 330),
    (4,  "Objective lenses",          "L", 374, 422, 400),
    (5,  "Stage clips",               "L", 356, 461, 452),
    (6,  "Mechanical stage",          "L", 300, 479, 502),
    (7,  "Condenser",                 "L", 384, 512, 552),
    (8,  "Iris diaphragm",            "L", 388, 547, 602),
    (9,  "Illuminator (light source)","L", 368, 634, 652),
    (10, "Arm",                       "R", 606, 392, 330),
    (11, "Coarse focus knob",         "R", 648, 447, 428),
    (12, "Fine focus knob",           "R", 628, 482, 506),
    (13, "Light intensity control",   "R", 650, 678, 640),
    (14, "Base",                      "R", 646, 706, 706),
]

LEFT_TEXT_X = 292
RIGHT_TEXT_X = 872


def leader(ax, ay, side, ly):
    ax += DX
    """Elbow leader line from the label gutter to the anchor point on the drawing."""
    if side == "L":
        gx = LEFT_TEXT_X + 10
        elbow = min(gx + 46, ax - 14)
        d = f"M {gx} {ly} L {elbow} {ly} L {ax} {ay}"
    else:
        gx = RIGHT_TEXT_X - 10
        elbow = max(gx - 46, ax + 14)
        d = f"M {gx} {ly} L {elbow} {ly} L {ax} {ay}"
    return (
        f'<path d="{d}" fill="none" stroke="{NAVY}" stroke-opacity=".55" '
        f'stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"/>'
        f'<circle cx="{ax}" cy="{ay}" r="3.4" fill="{TERRA}"/>'
    )


def scope_body():
    """The microscope itself, drawn once and reused by both figures."""
    p = []
    a = p.append
    st = f'stroke="{NAVY}" stroke-width="2.2" stroke-linejoin="round"'
    thin = f'stroke="{NAVY}" stroke-width="1.6" stroke-linejoin="round"'

    # ---- Base -------------------------------------------------------------
    a(f'<path d="M 280 714 L 636 714 Q 652 714 652 698 L 652 664 Q 652 648 636 648 '
      f'L 296 648 Q 280 648 280 664 Z" fill="{TINT}" {st}/>')
    a(f'<path d="M 280 682 L 652 682" fill="none" stroke="{NAVY}" stroke-width="1.2" stroke-opacity=".45"/>')

    # Light intensity dial (protrudes right of the base)
    a(f'<circle cx="634" cy="678" r="17" fill="{WHITE}" {thin}/>')
    a(f'<circle cx="634" cy="678" r="7" fill="{NAVY}"/>')
    a(f'<path d="M 634 678 L 634 664" stroke="{WHITE}" stroke-width="2" stroke-linecap="round"/>')

    # ---- Illuminator ------------------------------------------------------
    a(f'<path d="M 366 648 L 366 630 Q 366 622 376 622 L 410 622 Q 420 622 420 630 '
      f'L 420 648 Z" fill="{TINT}" {st}/>')
    a(f'<ellipse cx="393" cy="622" rx="21" ry="6" fill="{GOLD}" {thin}/>')

    # ---- Arm --------------------------------------------------------------
    a(f'<path d="M 530 650 L 530 344 Q 530 300 574 300 L 610 300 L 610 650 Z" '
      f'fill="{TINT}" {st}/>')

    # ---- Head housing -----------------------------------------------------
    a(f'<path d="M 388 300 Q 372 300 372 316 L 372 340 Q 372 356 388 356 L 610 356 '
      f'L 610 300 Z" fill="{TINT2}" {st}/>')

    # ---- Ocular / body tube (angled) --------------------------------------
    a(f'<g transform="rotate(-28 410 300)">')
    a(f'  <rect x="382" y="198" width="56" height="106" rx="7" fill="{TINT}" {st}/>')
    a(f'  <rect x="374" y="156" width="72" height="46" rx="5" fill="{TINT2}" {st}/>')
    a(f'  <ellipse cx="410" cy="157" rx="36" ry="8" fill="{WHITE}" {thin}/>')
    a(f'  <ellipse cx="410" cy="157" rx="21" ry="4.5" fill="{NAVY}" fill-opacity=".14"/>')
    a(f'  <path d="M 382 216 L 438 216" stroke="{NAVY}" stroke-width="1.3" stroke-opacity=".5"/>')
    a(f'</g>')

    # ---- Revolving nosepiece ---------------------------------------------
    a(f'<path d="M 384 356 L 436 356 L 470 380 L 350 380 Z" fill="{TINT2}" {st}/>')
    a(f'<rect x="348" y="380" width="124" height="20" rx="10" fill="{TINT}" {st}/>')

    # ---- Objective lenses -------------------------------------------------
    def objective(cx, top, ang, scale=1.0, in_use=False):
        g = [f'<g transform="rotate({ang} {cx} {top})">']
        w = 30 * scale
        h = 46 * scale
        g.append(f'<rect x="{cx-w/2:.1f}" y="{top}" width="{w:.1f}" height="{h:.1f}" rx="4" '
                 f'fill="{WHITE}" {thin}/>')
        g.append(f'<rect x="{cx-w/2:.1f}" y="{top+h*0.62:.1f}" width="{w:.1f}" height="{7*scale:.1f}" '
                 f'fill="{GOLD}" stroke="{NAVY}" stroke-width="1.2"/>')
        g.append(f'<path d="M {cx-w*0.30:.1f} {top+h:.1f} L {cx+w*0.30:.1f} {top+h:.1f} '
                 f'L {cx+w*0.17:.1f} {top+h+14*scale:.1f} L {cx-w*0.17:.1f} {top+h+14*scale:.1f} Z" '
                 f'fill="{TINT2}" {thin}/>')
        g.append('</g>')
        return "".join(g)

    a(objective(374, 398, -34, 0.92))
    a(objective(446, 398, 34, 0.92))
    a(objective(410, 398, 0, 1.0, in_use=True))

    # ---- Specimen slide ---------------------------------------------------
    a(f'<rect x="344" y="462" width="132" height="8" rx="2" fill="{WHITE}" {thin}/>')
    a(f'<rect x="392" y="463.5" width="36" height="5" fill="{TERRA}" fill-opacity=".55"/>')

    # ---- Stage ------------------------------------------------------------
    a(f'<rect x="286" y="470" width="258" height="20" rx="3" fill="{TINT}" {st}/>')
    a(f'<ellipse cx="410" cy="480" rx="19" ry="5" fill="{WHITE}" stroke="{NAVY}" stroke-width="1.2"/>')
    # stage clips
    for cx in (352, 462):
        a(f'<path d="M {cx-14} 470 L {cx-14} 458 Q {cx-14} 454 {cx-9} 454 L {cx+12} 454" '
          f'fill="none" stroke="{NAVY}" stroke-width="2.4" stroke-linecap="round"/>')
    # mechanical stage drive housing + coaxial x-y knobs
    a(f'<rect x="452" y="490" width="72" height="14" rx="4" fill="{TINT2}" {thin}/>')
    a(f'<path d="M 500 504 L 500 512" stroke="{NAVY}" stroke-width="3"/>')
    a(f'<circle cx="500" cy="524" r="14" fill="{WHITE}" {thin}/>')
    a(f'<circle cx="500" cy="524" r="7" fill="{TINT2}" stroke="{NAVY}" stroke-width="1.2"/>')

    # ---- Condenser --------------------------------------------------------
    a(f'<path d="M 380 494 L 440 494 L 430 534 L 390 534 Z" fill="{TINT}" {st}/>')
    a(f'<ellipse cx="410" cy="494" rx="30" ry="7" fill="{WHITE}" {thin}/>')

    # ---- Iris diaphragm + lever ------------------------------------------
    a(f'<rect x="384" y="534" width="52" height="15" rx="4" fill="{TINT2}" {st}/>')
    a(f'<path d="M 386 545 L 354 568" fill="none" stroke="{NAVY}" stroke-width="2.4" stroke-linecap="round"/>')
    a(f'<circle cx="352" cy="569" r="5" fill="{NAVY}"/>')
    # condenser support column down to base
    a(f'<path d="M 402 549 L 402 622 M 418 549 L 418 622" stroke="{NAVY}" '
      f'stroke-width="1.6" stroke-opacity=".55"/>')

    # ---- Focus knobs (coaxial, protruding right of the arm) ---------------
    a(f'<circle cx="608" cy="470" r="46" fill="{WHITE}" {st}/>')
    for i in range(24):
        t = i * math.pi / 12
        x1, y1 = 608 + 40 * math.cos(t), 470 + 40 * math.sin(t)
        x2, y2 = 608 + 46 * math.cos(t), 470 + 46 * math.sin(t)
        a(f'<path d="M {x1:.1f} {y1:.1f} L {x2:.1f} {y2:.1f}" stroke="{NAVY}" '
          f'stroke-width="1.3" stroke-opacity=".6"/>')
    a(f'<circle cx="608" cy="470" r="23" fill="{TINT}" {thin}/>')
    a(f'<circle cx="608" cy="470" r="6" fill="{NAVY}"/>')

    # ---- Light path -------------------------------------------------------
    a(f'<g stroke="{GOLD}" stroke-width="3" fill="none" stroke-linecap="round" '
      f'stroke-dasharray="9 7" opacity=".95">')
    a(f'  <path d="M 410 620 L 410 356"/>')
    a(f'  <path d="M 410 356 L 342 228"/>')
    a(f'</g>')
    return "\n".join(p)


def build(labeled: bool) -> str:
    title = ("Labeled diagram of a compound light microscope"
             if labeled else
             "Unlabeled diagram of a compound light microscope with numbered call-outs")
    desc = ("Side view of a compound light microscope. Fourteen parts are identified with "
            "leader lines: ocular lenses, body tube, revolving nosepiece, objective lenses, "
            "stage clips, mechanical stage, condenser, iris diaphragm, illuminator, arm, "
            "coarse focus knob, fine focus knob, light intensity control, and base. A dashed "
            "gold line traces the light path from the illuminator up through the condenser, "
            "the specimen, the objective lens, and the body tube to the ocular lens.")
    if not labeled:
        desc = ("Side view of a compound light microscope with fourteen numbered call-outs and "
                "no part names, for use as a labeling exercise. The numbers run 1 through 14 "
                "from the ocular lenses at the top to the base at the bottom.")

    out = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 {VB_Y} {W} {VB_H}" '
        f'role="img" aria-labelledby="msTitle{"L" if labeled else "B"} msDesc{"L" if labeled else "B"}" '
        f'font-family="\'Plus Jakarta Sans\', system-ui, sans-serif">',
        f'<title id="msTitle{"L" if labeled else "B"}">{title}</title>',
        f'<desc id="msDesc{"L" if labeled else "B"}">{desc}</desc>',
        f'<rect x="0" y="{VB_Y}" width="{W}" height="{VB_H}" fill="{WHITE}"/>',
        f'<g transform="translate({DX} 0)">',
        scope_body(),
        '</g>',
    ]

    for num, text, side, ax, ay, ly in PARTS:
        out.append(leader(ax, ay, side, ly))
        if side == "L":
            tx, anchor = LEFT_TEXT_X, "end"
            bx = tx - 0  # badge sits at gutter edge
        else:
            tx, anchor = RIGHT_TEXT_X, "start"
            bx = tx

        if labeled:
            out.append(
                f'<text x="{tx}" y="{ly + 6}" text-anchor="{anchor}" font-size="18.5" '
                f'font-weight="600" fill="{NAVY}" font-style="normal">{text}</text>')
        else:
            cx = tx - 16 if side == "L" else tx + 16
            out.append(f'<circle cx="{cx}" cy="{ly}" r="17" fill="{WHITE}" stroke="{TERRA}" stroke-width="2.2"/>')
            out.append(
                f'<text x="{cx}" y="{ly + 6.5}" text-anchor="middle" font-size="18" '
                f'font-weight="700" fill="{TERRA}" font-style="normal">{num}</text>')
            # writing rule
            if side == "L":
                out.append(f'<path d="M 24 {ly + 12} L {cx - 26} {ly + 12}" stroke="{NAVY}" '
                           f'stroke-width="1.1" stroke-opacity=".38"/>')
            else:
                out.append(f'<path d="M {cx + 26} {ly + 12} L 1156 {ly + 12}" stroke="{NAVY}" '
                           f'stroke-width="1.1" stroke-opacity=".38"/>')

    # light path key
    keyy = 748
    out.append(f'<path d="M 24 {keyy} L 72 {keyy}" stroke="{GOLD}" stroke-width="3" '
               f'stroke-dasharray="9 7" stroke-linecap="round"/>')
    out.append(f'<text x="82" y="{keyy + 6}" font-size="16" font-weight="600" fill="{NAVY}" '
               f'font-style="normal">Path of light through the microscope</text>')

    out.append('</svg>')
    return "\n".join(out)


for name, lab in (("microscope-labeled.svg", True), ("microscope-blank.svg", False)):
    with open(name, "w") as f:
        f.write(build(lab))
    print("wrote", name)
