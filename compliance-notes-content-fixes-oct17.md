# Compliance notes: content fixes to notes pages, October 17, 2026 (Recall Lab Part II)

## 1. Project, files, date
BIO 004 Human Anatomy, new-build-bio4-solano. October 17, 2026. Notes pages, notes PDFs, Module 1 to 3 packets and PDFs, the Module 3 list and lab packet, the Module 5 note sheet key, study guides, the Module 5 exam, practice-exam-bank.js, competenciesfall2026.js and bio004-card-bank.js. Full list in PUSH-THESE.txt.

## 2. WCAG version and level
WCAG 2.2 AA floor. No markup structure changed: the edits replace words inside existing table cells, list items and callout labels, and add one bnote paragraph to the Module 3 forearm block. Heading order, landmarks and table headers are unchanged.

## 3. Color contrast
No colors changed. The callout label "Key point" uses the same class and colors as before.

## 4. Keyboard navigation
Unchanged. No interactive elements added or removed.

## 5. Screen reader testing
Markup checked. Notes PDFs rebuilt with WeasyPrint as tagged PDF/UA-1 (structure tree, language en-US, title shown); page counts match the old PDFs. Module 1 to 3 packet PDFs rebuilt in Chromium with tagging on; page counts match (81, 82, 84). A live VoiceOver or NVDA pass is still to do.

## 6. Known limitations
- male-reproductive-system.pdf was not rebuilt (see docs/recall-rx-card-audit.md).
- Live screen reader pass still to do.

## 7. Reviewer
Checked with Claude for Dr. Sharilyn Rennie. Every page that changed was loaded in headless Chromium over http: no script errors and no missing files. Facts follow the reviewed course notes (BIO004-Module4-Packet.html, BIO004-Module5-Packet.html).
