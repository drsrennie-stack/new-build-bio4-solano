# Accessibility Compliance Notes: Recall Rx (October 2026 rebuild)

## 1. Project, files, date

- Project: BIO 004 Human Anatomy, Recall Rx spaced recall inside Mastery OS
- Files covered: recall-view.js (the recall engine), bio004-card-bank.js (5,109 cards), and the four redirect pages spaced-recall.html, recall-cards.html, recall-rx-exam-prep.html, spaced-recall-heart.html
- Date: October 14, 2026

## 2. WCAG version and target level

Target WCAG 2.2 AA minimum, AAA where achievable.

| Criterion | Level achieved | Notes |
|---|---|---|
| 1.3.1 Info and relationships | AA | Topic lists are real lists of labeled checkboxes; display choices are radio groups in fieldsets with legends; module tabs use tablist, tab and tabpanel roles |
| 1.4.1 Use of color | AA | Right and wrong answers are named in text ("Correct answer", "Your answer") as well as by color; topic status is written in each tag ("Taught Oct 5", "Today", "Coming Oct 19") |
| 1.4.3 / 1.4.6 Contrast | AAA on all text except the two upcoming-tag grays, which meet AA | See section 3 |
| 1.4.10 Reflow | AA | Tested at 390 px wide with no horizontal scrolling |
| 2.1.1 Keyboard | AA | Every control is a native button, checkbox, radio, select or link |
| 2.4.3 Focus order | AA | After each action focus moves to the next logical control (the first choice, then Next card) |
| 2.4.7 / 2.4.13 Focus visible and appearance | AA | 3 px gold outline with 2 px offset on every focusable control |
| 2.5.8 Target size | AA | Buttons, choices and tabs are at least 44 px tall; checkboxes sit inside full-row labels |
| 3.3.2 Labels | AA | Every checkbox, radio and select has a programmatic label |
| 4.1.2 Name, role, value | AA | aria-pressed on theme and section buttons, aria-expanded on Display options and module sections, aria-selected on tabs |
| 4.1.3 Status messages | AA | Card verdicts and selected-topic counts are announced through aria-live regions |
| 2.3.3 Motion | AAA | All transitions switch off under prefers-reduced-motion |

## 3. Color contrast audit

Palette: navy #0B1530, dark terra cotta #8B3A2E / #7A2E24, brushed gold #B8924A. No teal, no sage, no cream. Text gold is the darker #6F5316 on light backgrounds.

| Theme | Pair | Colors | Ratio | AA | AAA |
|---|---|---|---|---|---|
| Light/Navy | Card text navy on white | #0B1530 on #FFFFFF | 18.0:1 | Pass | Pass |
| Light/Navy | Secondary text on white | #454B5C on #FFFFFF | 8.7:1 | Pass | Pass |
| Light/Navy | Terra cotta links and tags on white | #7A2E24 on #FFFFFF | 9.4:1 | Pass | Pass |
| Light/Navy | Gold text (Today, Apply) on white | #6F5316 on #FFFFFF | 7.2:1 | Pass | Pass |
| Light/Navy | Upcoming tag gray on white | #6B7080 on #FFFFFF | 4.9:1 | Pass | Below 7:1 |
| Light/Navy | Navy text on tint (correct answer, why box) | #0B1530 on #ECEEF3 | 15.5:1 | Pass | Pass |
| Light/Navy | Navy text on wrong-answer fill | #0B1530 on #F7EDEB | 15.7:1 | Pass | Pass |
| Light/Navy | White on navy (buttons, odometer) | #FFFFFF on #0B1530 | 18.0:1 | Pass | Pass |
| Navy | Gold link on navy page | #E2C281 on #0B1530 | 10.5:1 | Pass | Pass |
| Navy | Light gray text on navy page | #D8DBE3 on #0B1530 | 13.0:1 | Pass | Pass |
| Light | Navy text on off-white page | #0B1530 on #FAFAF9 | 17.3:1 | Pass | Pass |
| Light | Terra link on off-white page | #7A2E24 on #FAFAF9 | 9.0:1 | Pass | Pass |
| Dark | Text on dark card | #ECEEF3 on #111A30 | 14.9:1 | Pass | Pass |
| Dark | Secondary text on dark card | #B3B8C8 on #111A30 | 8.7:1 | Pass | Pass |
| Dark | Terra text on dark card | #E9A397 on #111A30 | 8.4:1 | Pass | Pass |
| Dark | Gold text on dark card | #E2C281 on #111A30 | 10.1:1 | Pass | Pass |
| Dark | Upcoming gray on dark card | #9097A8 on #111A30 | 5.9:1 | Pass | Below 7:1 |
| Dark | Text on wrong-answer fill | #ECEEF3 on #3A1F1C | 13.0:1 | Pass | Pass |
| Dark | Navy on light button | #0B1530 on #E8EAF2 | 15.0:1 | Pass | Pass |
| Dark | Gold link on page | #E2C281 on #070C18 | 11.4:1 | Pass | Pass |

Gold #B8924A is used only for borders, the selected-tab underline, the Today dot and the gold button fill (navy text on gold, 6.2:1), never for text on white.

## 4. Keyboard navigation flow

Verified with a scripted keyboard pass in Chromium.

1. Display options button, then the theme buttons (Light, Navy, Dark).
2. When Display options is open: three radio groups (topic layout, answer style, theme), each operated with the arrow keys.
3. Class day buttons (Mon / Wed, Tue / Thu).
4. Module tabs: Tab reaches the selected tab, and Left, Right, Home and End move between modules. In the stacked layout each module has a select-all checkbox and an expand button. In the timeline layout a module select replaces the tabs.
5. Quick-select buttons, then each topic checkbox in teaching order.
6. Show me select, then Start session.
7. On a card: the three confidence buttons, then the four answer choices, then the explanation controls (tabs or flip, depending on the student's choice), then Next card, then Change topics.

## 5. Screen reader testing

Verified by inspection of the rendered accessibility tree in Chromium. Not yet tested with VoiceOver or NVDA by a person.

- The card question is a heading, and each card is an article labeled by its question.
- Answer choices are a labeled ordered list of buttons. After answering, each choice's state is spoken as part of its name ("Correct answer", "Your answer").
- The verdict and a pointer to the explanations are announced through a polite live region.
- Decorative letter circles are aria-hidden.

## 6. Known limitations and remediation plan

- The upcoming-topic gray meets AA (4.9:1 light, 5.9:1 dark) but not AAA. It is kept lighter on purpose so upcoming topics read as secondary. Darken it to #4A4F5E if AAA is required everywhere.
- No hands-on screen reader session yet. Plan: one VoiceOver pass on iPhone and one NVDA pass on Windows before Exam 4.
- The redirect pages send students to Mastery OS. Inside a Canvas iframe they try to move the top window and fall back to the frame.
- The bank is about 6.5 MB of text (about 1.5 MB over the network with compression). On a slow phone connection the first load of Mastery OS will take a few seconds.

## 7. Reviewer

Claude, at Dr. Rennie's request, October 14, 2026.
