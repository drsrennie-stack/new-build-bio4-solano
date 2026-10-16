# Compliance notes: calmer Mastery OS, recall and brain dump pages

1. Files: mastery-os-fall-2026.html, recall-view.js, brain-dump-practice.html. Date: October 15, 2026.
2. WCAG 2.2 AA, AAA contrast where the existing palette allows.
   - "Today's list" is now a button (aria-expanded, aria-controls="workRail") that opens the list. Escape or a click outside closes it and returns focus to the button. A weak-spot repair run opens it automatically.
   - Recall "Display" button lives in the maroon band (aria-expanded, aria-controls="rv-disp"). Class days move into the Display panel once chosen.
   - Recall and brain dump open on this week's module. "Study a different module" is a real button with aria-expanded; focus moves to the selected module tab when the tabs open.
   - Brain dump spin settings sit in a native details/summary disclosure.
3. Contrast: band text #FFFFFF and #F3E3BC on #7A2E24 (9.4:1 and 7.4:1, AAA). Display button outline is decorative; its label is white on maroon.
4. Keyboard: tab order unchanged apart from the new buttons, which sit where they appear visually. Escape closes the list.
5. Screen reader: checked through the Chromium accessibility tree. Not yet checked with VoiceOver or NVDA by a person.
6. Known limitations: the "Stuck? Ask Hootie" bubble is hidden on Mastery OS only, and the floating Back pill is off on Mastery OS (Course home is inside Course tools). Other pages still show both.
7. Reviewer: Claude, at Dr. Rennie's request.
