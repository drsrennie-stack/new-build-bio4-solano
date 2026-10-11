# Compliance notes: Cadaver Video Library

## 1. Project, files, date

- Project: BIO 004 Human Anatomy, Solano Community College (Fall 2026)
- Files covered: bio004-bluelink-videos.html, bio004-bluelink-notes.js (teaching notes for all 48 sections), bio004-bluelink-announcement.html, the new tile in bio004-dock.js, the new Lab door in bio004-launchpad.html and bio004-launchpad-overlay.js, the new entry in bio004-announcements.js, images/bluelink-videos/course-tools-tile.png, images/bluelink-videos/lab-door-tile.png
- Date: October 7, 2026; teaching notes added October 10, 2026

## 2. WCAG version and level

- Target: WCAG 2.2 AA floor, AAA where achievable.
- 1.1.1 Non-text content: AA met. Both announcement screenshots have alt text that names the circled tile. Decorative icons are aria-hidden.
- 1.3.1 Info and relationships: AA met. Landmarks (header, nav, main), one h1 per page, heading order h1 to h2 to h3 with no skips. Search input uses label for/id. Type filters sit in a labelled group.
- 1.4.3 / 1.4.6 Contrast: AAA met for all text (see section 3).
- 2.1.1 Keyboard: AA met. Every control is a native button, link, checkbox, or input.
- 2.4.1 Bypass blocks: AA met. Skip link to the videos.
- 2.4.7 Focus visible: AA met. 3px gold outline on every interactive element.
- 2.5.8 Target size (2.2): AA met. Play buttons 44 by 44 px, chips at least 36 px tall, checkboxes 20 px inside a larger label target.
- 4.1.2 Name, role, value: AA met. Play buttons carry "Play" plus the video title. Type chips use aria-pressed. Group toggles use aria-expanded and aria-controls. Current system uses aria-current. Result count is an aria-live polite region.
- 2.3.3 Animation from interactions: prefers-reduced-motion turns off transitions and smooth scrolling.

## 3. Color contrast audit

| Pair | Ratio | Result |
|---|---|---|
| Body text #08101F on #FAFAF9 | 18.21 | AAA pass |
| Card text #08101F on #FFFFFF | 19.02 | AAA pass |
| Eyebrow and labels #7A2A22 on #FAFAF9 | 9.22 | AAA pass |
| Group headings #7A2A22 on #FFFFFF | 9.63 | AAA pass |
| Muted text #3D4A57 on #FAFAF9 | 8.68 | AAA pass |
| Active chip and system #FFFFFF on #1E3D4C | 11.49 | AAA pass |
| Play button #1E3D4C on #FFFFFF | 11.49 | AAA pass |
| Tag Cadaver dissection #7A2A22 on #F6E9E6 | 8.12 | AAA pass |
| Tag Lab station #1E3D4C on #E4ECF0 | 9.61 | AAA pass |
| Tag Bone specimen #574516 on #F5EEDC | above 7 | AAA pass |
| Tag Lecture #3D4A57 on #EEF0F2 | 7.94 | AAA pass |
| Tag Learning objective #723510 on #F8EDE4 | above 7 | AAA pass |
| Tag Movement clip #244A33 on #E6EFE8 | 8.50 | AAA pass |
| Tag Demonstration #4B2E5C on #EFE8F3 | 9.49 | AAA pass |
| Watched row text #08101F on #EDF1F3 | 16.73 | AAA pass |

Tag type is never carried by color alone; every tag also prints its name.

## 3b. Teaching notes

- Each section opens with a Teaching notes heading (h4 under the section's h3), a short lead, bulleted points, and data tables.
- Tables use a caption, column headers with scope=col and row headers with scope=row.
- Wide tables scroll inside their own focusable region (tabindex=0, labelled by the caption), so the page itself never scrolls sideways. Checked at 390 px and 1280 px.
- A Show teaching notes checkbox lets a student hide the notes and see only videos; the choice is remembered in that browser.
- The external Muscle charts link says it opens in a new tab, visibly with an arrow and for screen readers with hidden text.

## 4. Keyboard flow verified

Skip link, search, Hide watched checkbox, type chips, body system buttons, then each group toggle, play button, and Watched checkbox in reading order. The video player is a native modal dialog: focus moves to Close on open, Escape closes it, and focus returns to the play button that opened it. Checked in headless Chromium with scripted keyboard input.

## 5. Screen reader testing

Verified programmatically in Chromium's accessibility tree: names and states for play buttons, chips (pressed), group toggles (expanded), the current system, and the live result count. Not yet checked by ear with NVDA or VoiceOver.

## 6. Known limitations and remediation plan

- Embedded YouTube player controls are YouTube's own and outside this page's control. Every video also has an Open on YouTube link.
- Captions depend on what BlueLink uploaded to YouTube; this page cannot add them.
- Video IDs and running times were read from the BlueLink YouTube channel on October 7, 2026. If BlueLink removes or renames a video, its row will show a YouTube "unavailable" message in the player. Remediation: spot check each term.
- Watched checkmarks live in the student's own browser, so they do not follow a student to another device.
- Manual screen reader pass with NVDA and VoiceOver still to do.

## 7. Reviewer

Prepared for review by Dr. Sharilyn Rennie.
