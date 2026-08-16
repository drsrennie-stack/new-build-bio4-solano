"""
Anatomical linework motifs for the BIO 004 course card.

WHAT IS HERE, AND WHY IT IS NOT A SKELETON

The first two passes drew organ and bone silhouettes: a lateral skull,
a heart, a long bone, a pelvis. Every one of them failed the same way.
A heart drawn as an outline reads as a valentine. A long bone reads as
a mallet. A skull carries so much shape memory that a few degrees of
error in the cranial vault turns it into a helmet, and no amount of
suture detail rescues it. Silhouettes of familiar things are the
hardest possible thing to draw in bare line, because the viewer knows
exactly what they should look like.

So this set is built from what anatomy actually looks like when you
section it, where the structure is geometric and the geometry is the
point: concentric lamellae, nested fascicles, packed cells, branching
calibre. These are procedural, so they are precise rather than
approximate, and they are true to what the course teaches first.
Histology is Module 1.

Every motif is stroke only, at a known local size, so the composition
can place and scale them freely.
"""
import math
import random


def g(inner, x=0, y=0, s=1.0, rot=0, opacity=1.0, stroke="#DCB45C", w=1.6, extra=""):
    t = f"translate({x},{y}) scale({s})"
    if rot:
        t += f" rotate({rot})"
    return (f'<g transform="{t}" opacity="{opacity}" stroke="{stroke}" '
            f'stroke-width="{w/s:.3f}" fill="none" stroke-linecap="round" '
            f'stroke-linejoin="round" {extra}>{inner}</g>')


# ---------------------------------------------------------------- bone

def osteon(rings=5, r0=14, step=13, seed=0):
    """Compact bone in cross section. One osteon: the central canal
    carrying its vessel, concentric lamellae laid down around it,
    osteocytes sitting in lacunae between the rings, and canaliculi
    radiating out so the cells can reach each other."""
    p = [f'<circle cx="0" cy="0" r="{r0*0.45:.1f}"/>']
    for i in range(rings):
        p.append(f'<circle cx="0" cy="0" r="{r0 + i*step}" opacity="{0.92 - i*0.09:.2f}"/>')
    for i in range(rings - 1):
        r = r0 + i * step + step / 2
        count = 6 + i * 2
        for k in range(count):
            a = (k / count) * 2 * math.pi + (i * 0.5) + seed
            x, y = r * math.cos(a), r * math.sin(a)
            p.append(f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="3.4" ry="1.8" '
                     f'transform="rotate({math.degrees(a):.0f} {x:.1f} {y:.1f})" '
                     f'opacity="0.62"/>')
    for k in range(14):
        a = (k / 14) * 2 * math.pi + seed
        r1, r2 = r0 * 0.55, r0 + (rings - 1) * step
        p.append(f'<path d="M{r1*math.cos(a):.1f} {r1*math.sin(a):.1f} '
                 f'L{r2*math.cos(a):.1f} {r2*math.sin(a):.1f}" opacity="0.26"/>')
    return "".join(p)


def trabeculae(w=300, h=240, seed=7):
    """Spongy bone. A strut lattice, thickened along the lines that
    carry load, which is why it is a lattice and not a foam."""
    rnd = random.Random(seed)
    pts = []
    cols, rows = 7, 6
    for r in range(rows):
        for c in range(cols):
            x = c * (w / (cols - 1)) + rnd.uniform(-14, 14)
            y = r * (h / (rows - 1)) + rnd.uniform(-12, 12)
            pts.append((x, y, r, c))
    p = []
    for (x, y, r, c) in pts:
        for (x2, y2, r2, c2) in pts:
            if (r2 == r and c2 == c + 1) or (c2 == c and r2 == r + 1):
                mx = (x + x2) / 2 + rnd.uniform(-7, 7)
                my = (y + y2) / 2 + rnd.uniform(-7, 7)
                wd = 1.0 + 1.5 * rnd.random()
                p.append(f'<path d="M{x:.1f} {y:.1f} Q{mx:.1f} {my:.1f} {x2:.1f} {y2:.1f}" '
                         f'stroke-width="{wd:.2f}" opacity="{0.30 + 0.30*rnd.random():.2f}"/>')
    return "".join(p)


# ------------------------------------------------------------- muscle

def muscle_section(seed=0.0):
    """A muscle belly in cross section. Epimysium wrapping the whole
    muscle, perimysium wrapping each fascicle, endomysium around every
    fibre inside it. The nesting is the thing students have to name,
    and it is the thing the drawing is about."""
    p = []
    p.append('<path d="M0 -140 C64 -142 132 -96 140 -26 C148 46 104 124 30 140 '
             'C-44 156 -124 108 -138 34 C-152 -42 -96 -136 0 -140 Z"/>')
    p.append('<path d="M0 -126 C58 -128 118 -86 126 -24 C133 40 94 110 27 125 '
             'C-40 139 -111 96 -124 30 C-136 -38 -86 -122 0 -126 Z" opacity="0.45"/>')
    spots = [(0, 0, 46)]
    for k in range(6):
        a = (k / 6) * 2 * math.pi + seed
        spots.append((math.cos(a) * 82, math.sin(a) * 82, 38))
    for (cx, cy, r) in spots:
        p.append(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r}" opacity="0.85"/>')
        step = r / 2.55
        yy, row = -r, 0
        while yy <= r:
            xx = -r + (step / 2 if row % 2 else 0)
            while xx <= r:
                if xx * xx + yy * yy <= (r - step * 0.75) ** 2:
                    p.append(f'<circle cx="{cx+xx:.1f}" cy="{cy+yy:.1f}" '
                             f'r="{step*0.40:.1f}" opacity="0.42"/>')
                xx += step
            yy += step * 0.88
            row += 1
    return "".join(p)


def sarcomere(units=6, w=90, h=120):
    """Skeletal muscle striation, longitudinal. Z discs bounding each
    sarcomere, the A band, the paler H zone at its centre, and thin
    filaments reaching in from each Z disc. This is why the tissue
    looks striped down a microscope."""
    p = []
    for i in range(units + 1):
        p.append(f'<path d="M{i*w} 0 L{i*w} {h}" stroke-width="3.0"/>')
    for i in range(units):
        x = i * w
        p.append(f'<rect x="{x + w*0.16:.1f}" y="{h*0.14:.1f}" '
                 f'width="{w*0.68:.1f}" height="{h*0.72:.1f}" opacity="0.5"/>')
        p.append(f'<path d="M{x + w*0.43:.1f} {h*0.14:.1f} L{x + w*0.43:.1f} {h*0.86:.1f} '
                 f'M{x + w*0.57:.1f} {h*0.14:.1f} L{x + w*0.57:.1f} {h*0.86:.1f}" opacity="0.34"/>')
        for k in range(5):
            yy = h * (0.22 + k * 0.14)
            p.append(f'<path d="M{x:.1f} {yy:.1f} L{x + w*0.41:.1f} {yy:.1f}" opacity="0.32"/>')
            p.append(f'<path d="M{x + w:.1f} {yy:.1f} L{x + w*0.59:.1f} {yy:.1f}" opacity="0.32"/>')
    return "".join(p)


# ---------------------------------------------------------- epithelium

def _voronoi(sites, box):
    """Clip the bounding box by the perpendicular bisector against
    every other site. O(n squared) and n is small, so the simple way
    is the right way. Returns one polygon per site."""
    x0, y0, x1, y1 = box
    cells = []
    for (sx, sy) in sites:
        poly = [(x0, y0), (x1, y0), (x1, y1), (x0, y1)]
        for (ox, oy) in sites:
            if (ox, oy) == (sx, sy):
                continue
            mx, my = (sx + ox) / 2, (sy + oy) / 2
            dx, dy = ox - sx, oy - sy          # normal, pointing at the other site
            out = []
            n = len(poly)
            for i in range(n):
                ax, ay = poly[i]
                bx, by = poly[(i + 1) % n]
                da = (ax - mx) * dx + (ay - my) * dy
                db = (bx - mx) * dx + (by - my) * dy
                if da <= 0:
                    out.append((ax, ay))
                if (da <= 0) != (db <= 0):
                    t = da / (da - db)
                    out.append((ax + t * (bx - ax), ay + t * (by - ay)))
            poly = out
            if len(poly) < 3:
                break
        if len(poly) >= 3:
            cells.append(((sx, sy), poly))
    return cells


def epithelium(w=340, h=260, n=26, seed=3, relax=2):
    """An epithelial sheet from above. Cells tile the surface with no
    gaps, which is what an epithelium is for, and each carries a
    nucleus. Lloyd relaxation evens the sites out so the cells look
    like tissue rather than like shattered glass."""
    rnd = random.Random(seed)
    sites = [(rnd.uniform(8, w - 8), rnd.uniform(8, h - 8)) for _ in range(n)]
    for _ in range(relax):
        moved = []
        for (s, poly) in _voronoi(sites, (0, 0, w, h)):
            cx = sum(p[0] for p in poly) / len(poly)
            cy = sum(p[1] for p in poly) / len(poly)
            moved.append((cx, cy))
        sites = moved
    # A round field of view, because that is what tissue looks like
    # down a scope, and because a rectangle of cells reads as a boxed
    # diagram rather than as a piece of something continuous.
    cid = f"fov{seed}"
    cx0, cy0 = w / 2, h / 2
    rad = min(w, h) / 2 - 2
    p = [f'<defs><clipPath id="{cid}">'
         f'<circle cx="{cx0:.1f}" cy="{cy0:.1f}" r="{rad:.1f}"/></clipPath></defs>',
         f'<g clip-path="url(#{cid})">']
    for ((sx, sy), poly) in _voronoi(sites, (0, 0, w, h)):
        d = "M" + " L".join(f"{x:.1f} {y:.1f}" for (x, y) in poly) + " Z"
        p.append(f'<path d="{d}" opacity="0.85"/>')
        r = 5.4 + rnd.random() * 2.2
        p.append(f'<ellipse cx="{sx:.1f}" cy="{sy:.1f}" rx="{r:.1f}" ry="{r*0.74:.1f}" '
                 f'transform="rotate({rnd.uniform(0,180):.0f} {sx:.1f} {sy:.1f})" '
                 f'opacity="0.6"/>')
    p.append('</g>')
    # the rim of the field itself
    p.append(f'<circle cx="{cx0:.1f}" cy="{cy0:.1f}" r="{rad:.1f}" opacity="0.55"/>')
    return "".join(p)


# -------------------------------------------------------------- vessel

def artery_section():
    """An artery in cross section. Three tunics: intima with its
    internal elastic lamina thrown into folds when the vessel is not
    under pressure, media carrying the smooth muscle that sets the
    calibre, adventitia anchoring it. Radius about 150."""
    p = []

    def wavy(r, lobes, amp, op, wd=None):
        pts = []
        steps = 240
        for i in range(steps + 1):
            a = (i / steps) * 2 * math.pi
            rr = r + amp * math.sin(lobes * a)
            pts.append(f"{rr*math.cos(a):.1f} {rr*math.sin(a):.1f}")
        extra = f' stroke-width="{wd}"' if wd else ""
        return f'<path d="M{" L".join(pts)} Z" opacity="{op}"{extra}/>'

    p.append(f'<circle cx="0" cy="0" r="150" opacity="0.5"/>')          # adventitia, outer
    p.append(f'<circle cx="0" cy="0" r="128" opacity="0.85"/>')         # media, outer
    p.append(wavy(86, 11, 7, 0.9, 2.4))                                 # internal elastic lamina
    p.append(wavy(74, 11, 6, 0.55))                                     # intima following it
    # smooth muscle of the media, circular
    for i in range(3):
        p.append(f'<circle cx="0" cy="0" r="{96 + i*10}" opacity="{0.30 - i*0.06:.2f}"/>')
    # nuclei of the smooth muscle cells, lying around the circumference
    for k in range(30):
        a = (k / 30) * 2 * math.pi
        r = 104 + 12 * math.sin(k * 2.1)
        x, y = r * math.cos(a), r * math.sin(a)
        p.append(f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="6" ry="2.2" '
                 f'transform="rotate({math.degrees(a)+90:.0f} {x:.1f} {y:.1f})" opacity="0.45"/>')
    # collagen of the adventitia, running obliquely
    for k in range(22):
        a = (k / 22) * 2 * math.pi
        p.append(f'<path d="M{130*math.cos(a):.1f} {130*math.sin(a):.1f} '
                 f'L{150*math.cos(a+0.13):.1f} {150*math.sin(a+0.13):.1f}" opacity="0.3"/>')
    # endothelial nuclei on the luminal surface
    for k in range(12):
        a = (k / 12) * 2 * math.pi + 0.2
        r = 70 + 5 * math.sin(11 * a)
        x, y = r * math.cos(a), r * math.sin(a)
        p.append(f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="5" ry="2" '
                 f'transform="rotate({math.degrees(a)+90:.0f} {x:.1f} {y:.1f})" opacity="0.55"/>')
    return "".join(p)


def vessels(depth=6, seed=1.0):
    """An arterial tree. Calibre falls at every bifurcation, which is
    what makes it read as vascular rather than as a plant."""
    out = []

    def branch(x, y, ang, length, wdt, d):
        if d == 0 or length < 7:
            return
        x2 = x + length * math.cos(ang)
        y2 = y + length * math.sin(ang)
        cx = x + length * 0.5 * math.cos(ang - 0.22)
        cy = y + length * 0.5 * math.sin(ang - 0.22)
        out.append(f'<path d="M{x:.1f} {y:.1f} Q{cx:.1f} {cy:.1f} {x2:.1f} {y2:.1f}" '
                   f'stroke-width="{wdt:.2f}" opacity="{0.30 + 0.11*d:.2f}"/>')
        spread = 0.44 + 0.06 * math.sin(seed * d)
        branch(x2, y2, ang - spread, length * 0.72, wdt * 0.72, d - 1)
        branch(x2, y2, ang + spread * 0.85, length * 0.66, wdt * 0.70, d - 1)

    branch(0, 0, -math.pi / 2, 86, 3.0, depth)
    return "".join(out)


# --------------------------------------------------------------- nerve

def nerve_section(seed=5):
    """A peripheral nerve in cross section. Epineurium around the
    whole nerve, perineurium around each fascicle, and inside them
    myelinated axons: the axon itself with its myelin sheath drawn as
    the ring around it. The same nesting as the muscle, one order
    smaller, which is the point of putting them near each other."""
    rnd = random.Random(seed)
    p = []
    p.append('<path d="M0 -132 C70 -134 128 -84 132 -18 C136 46 92 116 22 130 '
             'C-48 144 -120 96 -128 28 C-136 -42 -78 -130 0 -132 Z"/>')
    p.append('<path d="M0 -118 C62 -120 114 -76 118 -16 C121 42 82 104 20 116 '
             'C-42 128 -107 86 -114 24 C-121 -38 -70 -116 0 -118 Z" opacity="0.4"/>')
    fascicles = [(-42, -44, 44), (46, -34, 38), (8, 52, 42), (-58, 40, 26)]
    for (cx, cy, r) in fascicles:
        p.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" opacity="0.85"/>')
        p.append(f'<circle cx="{cx}" cy="{cy}" r="{r-5}" opacity="0.35"/>')
        placed = []
        tries = 0
        while len(placed) < int(r / 3.2) and tries < 400:
            tries += 1
            a = rnd.uniform(0, 2 * math.pi)
            rr = math.sqrt(rnd.random()) * (r - 12)
            x, y = cx + rr * math.cos(a), cy + rr * math.sin(a)
            ax = 3.2 + rnd.random() * 3.4
            if all((x - px) ** 2 + (y - py) ** 2 > (ax + pr + 3.4) ** 2 for (px, py, pr) in placed):
                placed.append((x, y, ax + 3.2))
                p.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{ax+3.2:.1f}" opacity="0.6"/>')
                p.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{ax:.1f}" opacity="0.38"/>')
    return "".join(p)


# ------------------------------------------------------------ alveolar

def alveoli(seed=11):
    """Lung at the respiratory zone. An alveolar duct opening into a
    cluster of sacs. Neighbouring alveoli share a wall rather than
    each having their own, which is the arrangement that buys the
    surface area, so the drawing packs them instead of scattering
    them."""
    rnd = random.Random(seed)
    p = []
    # the duct, running in from the left
    p.append('<path d="M-186 -16 C-140 -30 -96 -32 -54 -22" stroke-width="2.8"/>')
    p.append('<path d="M-186 34 C-140 46 -96 48 -54 40" stroke-width="2.8"/>')
    p.append('<path d="M-54 -22 C-40 -14 -36 0 -38 10" opacity="0.6"/>')
    p.append('<path d="M-54 40 C-40 32 -36 20 -38 10" opacity="0.6"/>')

    # sacs packed on a rough hex ring so their walls meet
    centers = [(46, 10, 60), (128, -52, 52), (132, 66, 50),
               (56, 118, 44), (48, -92, 46), (212, 8, 44),
               (196, -108, 34), (206, 118, 36), (-4, -160, 32)]
    for (x, y, r) in centers:
        p.append(f'<circle cx="{x}" cy="{y}" r="{r}" opacity="0.85"/>')
        # the thin respiratory membrane, drawn just inside the wall
        p.append(f'<circle cx="{x}" cy="{y}" r="{r-5}" opacity="0.26"/>')
        # capillaries running in the shared wall
        for k in range(5):
            a = rnd.uniform(0, 2 * math.pi)
            x1, y1 = x + (r - 2) * math.cos(a), y + (r - 2) * math.sin(a)
            x2 = x + (r - 2) * math.cos(a + 0.5)
            y2 = y + (r - 2) * math.sin(a + 0.5)
            mx = x + (r + 7) * math.cos(a + 0.25)
            my = y + (r + 7) * math.sin(a + 0.25)
            p.append(f'<path d="M{x1:.1f} {y1:.1f} Q{mx:.1f} {my:.1f} {x2:.1f} {y2:.1f}" '
                     f'opacity="0.3"/>')
    return "".join(p)
