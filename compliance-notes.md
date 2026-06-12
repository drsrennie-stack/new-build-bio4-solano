# Accessibility compliance notes

Project: BIO 004 Spaced Recall (redesigned, no-lock)
Files covered: bio004-spaced-recall.html (engine), course-content.js (1110-card content, unchanged)
Date: June 12, 2026
Reviewer: Dr. Sharilyn Rennie

## WCAG version and target

WCAG 2.2. Target level AA as the floor, AAA where achievable on text contrast. Built on the MCAS palette (navy #0B1530, rust #8B3A2E, gold #C9A14A) with cream removed per the standing rule; cool neutral surfaces replace cream. Sage is not used. Green is not used for completed or correct states; completed and correct use navy on a cool navy-tint, in-progress uses gold.

## Color contrast audit

Light mode (page background off-white #FAFAF9, cards white #FFFFFF):

1. MCAS navy text #0B1530 on off-white #FAFAF9: about 17:1. Pass AAA.
2. MCAS navy text #0B1530 on white #FFFFFF: about 18:1. Pass AAA.
3. Rust eyebrow/heading #8B3A2E on off-white: about 7.7:1. Pass AAA (normal text).
4. Gray-soft #5c6970 on white: about 5.9:1. Pass AA.
5. Primary button: white #FFFFFF on navy #0B1530: about 18:1. Pass AAA.
6. Gold button: near-black #241a00 on gold #C9A14A: about 8.0:1. Pass AAA.
7. Navy text on navy-tint #ECEEF2 (completed fill): about 15:1. Pass AAA.

All pairs meet the AA floor; most reach AAA. The tool ships in light mode only (dark mode was removed at the instructor's request), so there is a single set of colors to verify.

## Keyboard navigation flow verified

Tab order: skip link, brand home link, primary nav (Home, Study, Make, Report, Settings, theme toggle), then main content for the active view. All controls are native button, a, input, select, and textarea elements, so they are reachable and operable by keyboard with no custom key handling required. Answer options and rating buttons are real buttons. The focus moves to the view heading (tabindex -1) on navigation so screen reader users land in context. Visible focus is a 3px gold outline with 2px offset on every interactive element.

## Screen reader testing

Verified structure with semantic landmarks: header, nav with aria-label, main with id, footer. Single h1 per view, h2 and h3 used in order. Live regions: the home stats, the card progress text, the make-card feedback, the share feedback, and the report body use aria-live polite so updates are announced. The theme toggle exposes aria-pressed. Icon-free, text-labeled controls throughout. The hidden file input has an accessible trigger button.

## Reduced motion

prefers-reduced-motion: reduce disables all transitions.

## Embedding and links

iframe height-sender posts message type mcas-embed-height with id bio004-spaced-recall on load, resize, and via ResizeObserver, so the tool grows inside a Kajabi or GitHub Pages embed. Internal and same-domain links use target="_top". The full lecture page link uses target="_top". No external links are present in the shell; if videos are added as YouTube, they embed via youtube-nocookie.

## Known limitations and remediation plan

1. Data is stored only in the student's browser localStorage. There is no server. If a student clears browser data or switches devices, progress does not follow. Mitigation in product copy: students submit the weekly report each week, and can export their own cards to a file. Remediation if central collection is ever needed: add an optional backend or LMS submission.

2. Video watched is recorded by a real end event for self-hosted mp4 video and by an honor-system button for YouTube embeds (YouTube end detection needs the IFrame Player API, not yet wired). Watching never blocks cards, so this affects only the optional tracking number, not access. Remediation: wire the YouTube IFrame API for true end detection in a later pass.

3. Dark mode contrast was computed from hex values, not yet validated with an automated contrast tool in a live browser. Remediation: run an axe or Lighthouse pass in the browser before wide release.

4. Imported shared cards are trusted as study content. They are sanitized for display (all text is HTML-escaped) but not reviewed for correctness. This is expected for peer-shared study material.

## Setup, categories, and activation (added)

The tool opens on a setup screen the first time: the student picks their course format (Summer 8-week or Semester 16-week, which sets the weekly bonus targets), enters their name, and turns on the topics they are studying. Topics start all off, so the tool is not tied to the BIO 004 schedule and works in any class. Topics are grouped into eight units taken from the course schedule (Onboarding and Foundations, Skeletal System, Joints and the Muscular System, Nervous System I, Nervous System II Senses and Endocrine, Cardiovascular and Lymphatic, Respiratory and Digestive, Urinary and Reproductive), which together cover all 37 official topics. Each unit has an optional exam date; as an exam nears, that unit's due cards sort to the front of the daily review, and the report shows a countdown. Students can add their own topics from the Make cards page, which become activatable and studyable. Setup is re-openable from Settings and from a Manage topics button in Study. The setup checklist uses native checkboxes and date inputs with labels, and exam dates and activation save immediately.

## Verification performed

A jsdom harness loaded the app against the real 1110-card course-content.js and confirmed: no runtime errors, 37 topics and 5 units detected, all 1110 cards reachable with no lock, the SM2-lite scheduler advances on correct answers and resets on wrong answers with a 14-day interval cap, the weekly engagement score computes 0 to 100 from days active plus cards plus optional videos, a card review logs to the day's session, viewing lists creates zero card state (progress only counts real reviews), personal card create works, export and import round-trips add shared cards to the bank, and the light and dark theme toggle switches and persists.
