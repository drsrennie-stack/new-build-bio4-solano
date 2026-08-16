import segno, json, html, re

ICONS = json.load(open('/tmp/icons.json'))
BASE = 'https://drsrennie-stack.github.io/new-build-bio4-solano/'

# video: the Loom link once recorded. fallback: where the QR points until then.
TONES = ['blue','gold','terra','gold','terra','gold','terra','gold','terra','gold']

TOURS = [
 dict(n='01', icon='iconHome',  name='Start here',
      tag='Welcome, your first page, and the calendar',
      desc='What this course is, the page you land on, and how to read the calendar day by day.',
      video='https://www.loom.com/share/9f98501c0a544ad8a3c9544183052366',
      fallback=BASE+'welcome.html?sec=mw'),
 dict(n='02', icon='iconPlay',  name='Course materials',
      tag='Everything, by module',
      desc='Notes, pre-work sheets, videos and workbooks for every class day, sorted by module.',
      video='https://www.loom.com/share/915795837c4b49f685916d3357c2c9f1',
      fallback=BASE+'course-materials.html'),
 dict(n='03', icon='iconDoc',   name='Syllabus',
      tag='How the course runs',
      desc='Grading, attendance, late work, and every date that matters for your section.',
      mins='About an hour, the longest tour',
      video='https://www.loom.com/share/5303f6a835324402bfbf79073c55c57e',
      fallback=BASE+'syllabus-class1.html'),
 dict(n='04', icon='iconBrain', name='Mastery OS',
      tag='Your study engine',
      desc='Spaced recall, weak spots, and a plan built around your exam dates.',
      video='https://www.loom.com/share/d2bd6408d0694e59a3bae02f360e37e0',
      fallback=BASE+'mastery-os-fall-2026.html'),
 # One video covers the whole Lab materials group, so the group gets one card
 # instead of a card each for sprints, the Atlas and Loops.
 dict(n='05', icon='iconFlask', name='Lab materials',
      tag='Sprints, Atlas, Loops, histology',
      desc='The lab sprint checklists, the Digital Atlas in three dimensions, thirty-nine image loops, and the histology slide tools. What each one is for and when to reach for it.',
      video='https://www.loom.com/share/90fb8efac2bb40a0a7e37e512731cf31',
      fallback=BASE+'lab-sprints.html'),
 dict(n='06', icon='iconDoc',   name='Practice exam',
      tag='A simulated exam',
      desc='A practice paper built to look like the real one, scored as soon as you finish, with the reasoning shown. None of it counts toward your grade.',
      video='https://www.loom.com/share/06f082a4d7114280a511ada0e85f6315',
      fallback=BASE+'practice-lecture-exam.html'),
 dict(n='07', icon='iconPeople',name='Study With Me',
      tag='Study together',
      desc='Live co-study sessions, and verified engagement hours toward Scholar Points.',
      video='https://www.loom.com/share/22ae2ca9e71a4bdcb04002c5fe106c3f',
      fallback=BASE+'study-session-signup.html'),
]

def qr(url):
    svg = segno.make(url, error='m').svg_inline(scale=1, border=1, dark='#08101F',
                                                svgclass='qr', lineclass='qrline')
    return re.sub(r'<svg width="(\d+)" height="\d+" class="qr"',
                  lambda m: '<svg viewBox="0 0 %s %s" preserveAspectRatio="xMidYMid meet" class="qr"'
                            % (m.group(1), m.group(1)), svg)

# Badges only earn their space while some tours are still unrecorded. Once
# every card has a video, seven identical "Video ready" pills say nothing, so
# they come off. Add a card without a video and they come back on their own.
ANY_PENDING = any(not t['video'] for t in TOURS)

def card(t, i):
    live = bool(t['video'])
    url  = t['video'] or t['fallback']
    tone = TONES[i % len(TONES)]
    if not ANY_PENDING:
        badge = ''
    else:
        badge = ('<span class="t-badge is-live">Video ready</span>' if live
                 else '<span class="t-badge">Video coming</span>')
    mins = ('<p class="t-mins">%s</p>' % html.escape(t['mins'])) if t.get('mins') else ''
    return f"""      <li class="t{' is-live' if live else ''}">
        <span class="t-ic tone-{tone}" aria-hidden="true">{ICONS[t['icon']]}</span>
        {badge}
        <h3 class="t-h">{html.escape(t['name'])}</h3>
        <p class="t-tag">{html.escape(t['tag'])}</p>
        <p class="t-d">{html.escape(t['desc'])}</p>
        {mins}
        <div class="t-qr">{qr(url)}</div>
        <p class="t-scan">{'Scan to watch' if live else 'Scan to open'}</p>
      </li>"""

cards = '\n'.join(card(t, i) for i, t in enumerate(TOURS))
live_n = sum(1 for t in TOURS if t['video'])
open('/tmp/cards.html','w').write(cards)
print('cards built:', len(TOURS), '| with video:', live_n)
