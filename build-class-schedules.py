"""Build the three class schedule pages from bio004-course-calendar-alt.html.

Run from the repo root after any change to bio004-course-calendar-alt.html:
    python3 tools/build-class-schedules.py
Each page shows one class only, with no section buttons.
"""
import re
SRC = 'bio004-course-calendar-alt.html'
PAGES = [
    ('bio004-schedule-mw.html',     'mw',     'Mon / Wed',         'Mon / Wed Schedule'),
    ('bio004-schedule-tr-am.html',  'tr-am',  'Tue / Thu morning', 'Tue / Thu Morning Schedule'),
    ('bio004-schedule-tr-eve.html', 'tr-eve', 'Tue / Thu evening', 'Tue / Thu Evening Schedule'),
]
src = open(SRC, encoding='utf-8').read()
for out, sec, label, title in PAGES:
    t = src.replace('<html lang="en">', '<html lang="en" data-force-sec="%s">' % sec, 1)
    t = re.sub(r'<title>.*?</title>', '<title>%s &middot; BIO 004 Human Anatomy &middot; Fall 2026</title>' % title, t, count=1)
    t = t.replace('<p class="eyebrow">BIO 004 &middot; Human Anatomy &middot; Fall 2026</p>',
                  '<p class="eyebrow">BIO 004 &middot; Human Anatomy &middot; %s &middot; Fall 2026</p>' % label, 1)
    t = t.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n<!-- BUILT FILE. Edit bio004-course-calendar-alt.html, then run tools/build-class-schedules.py. -->', 1)
    assert 'data-force-sec="%s"' % sec in t
    open(out, 'w', encoding='utf-8').write(t)
    print('built', out)
