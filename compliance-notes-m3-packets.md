# Compliance notes: Module 3 print packets and muscle video pages

## 1. Project, files, date

- Project: BIO 004 Human Anatomy, Fall 2026 (new-build-bio4-solano)
- Files covered:
  - BIO004-M3-Note-Sheet-Packet.html and .pdf (brain dump prompts and note sheets, 38 competencies)
  - bio004-m3-sheet-data.js (the prompt data behind that packet)
  - BIO004-M3-Lab-Packet.html and .pdf (structure list, muscle charts, blood cell charts, lab exam questions)
  - muscle-structure-concept-videos.html and muscle-fascicles-concept-videos.html (Loom video and chapter buttons replace the "coming soon" placeholder)
  - m3-back-thorax-notes.html and BIO004-M3-Back-Thorax-Notes.pdf (one accuracy fix to the trapezius action)
- Date: September 30, 2026

## 2. WCAG version and level

WCAG 2.2. Target AA, AAA where achievable.

| Criterion | Level reached | Notes |
|---|---|---|
| 1.1.1 Non-text content | AA | QR codes carry an aria-label naming the destination; the URL is also printed as a text link beside each code. Decorative marks are aria-hidden. |
| 1.3.1 Info and relationships | AA | Charts are real tables with scope="col" and scope="row" headers and aria-labelledby to their heading. Structure lists are lists. Terms use a dl. |
| 1.4.3 / 1.4.6 Contrast | AAA | See section 3. |
| 1.4.10 Reflow | AA | Charts sit in a horizontally scrollable card at phone width; everything else reflows to one column under 760px. |
| 2.1.1 Keyboard | AA | All controls are native buttons and links. Chapter buttons on the video pages are button elements. |
| 2.4.1 Bypass blocks | AA | Skip link on every page. |
| 2.4.6 Headings and labels | AA | One visible h1 per view (the print cover h1 is hidden on screen, the screen h1 is hidden in print). |
| 2.4.7 / 2.4.11 Focus visible | AA | 3px outline on :focus-visible. |
| 2.3.3 Animation from interactions | AAA | Card lift is turned off under prefers-reduced-motion. |
| 4.1.2 Name, role, value | AA | Video iframes carry a title. |

PDFs are written by WeasyPrint as PDF/UA-1 with a tagged structure tree (headings, tables, lists).

## 3. Color contrast audit

| Text / background | Ratio | Result |
|---|---|---|
| Navy #08101F on white | 19.02:1 | Pass AAA |
| Navy #08101F on off-white #FAFAF9 | 18.21:1 | Pass AAA |
| Terra-dark #5E201A (eyebrows, h3) on white | 12.37:1 | Pass AAA |
| Terra-dark #5E201A on off-white | 11.85:1 | Pass AAA |
| Terra #7A2A22 (heading dot) on off-white | 9.22:1 | Pass AAA |
| Gray #414B5C (notes, ledes) on white | 8.80:1 | Pass AAA |
| White on navy (table header row, buttons) | 19.02:1 | Pass AAA |
| #3A4453 video note text on white | 9.85:1 | Pass AAA |
| #8B3A2E chapter timestamps on white | 7.66:1 | Pass AAA |

Print output is black on white.

## 4. Keyboard navigation flow

Skip link, header logo, course home, print button, download and companion links, jump links, then the packet content in reading order. On the video pages: skip link, logo, back button, the player iframe, each chapter button in time order, the notes and slide buttons, the slide iframe, footer links. Verified by tab order in the markup; no positive tabindex values.

## 5. Screen reader testing

Checked the markup structure for landmarks (header, nav, main, footer), heading order, table header association, and list semantics. A live screen reader pass (VoiceOver on macOS and iOS) has not been run on these files yet.

## 6. Known limitations and remediation plan

- VoiceOver pass still to do before the packets are posted.
- The Loom player's own controls are Loom's; their accessibility is outside this page.
- The Fascicles page plays the general muscle recording until a fascicle and lever video is recorded. Replace the Loom ID and chapter list when it exists.

## 7. Reviewer

Built and checked with Claude for Dr. Sharilyn Rennie. Anatomy content fact-checked against OpenStax Anatomy and Physiology 2e and Gray's Anatomy for Students.

## Addendum, October 17, 2026: Module 3 tag check

Files: module-3-structure-list.html; muscle-structure, head-neck-muscles, antebrachium-muscles, heart and blood-vessels lab sprints; week-3, week-4 and week-7 lab sprint pages.

- The structure list and the sprints now hold only the structures Dr. Rennie tags, from her choices in the Module 3 tag check editor (all nine sections checked).
- The list gains a Chapter 2, Muscles of the Head and Neck (17 face muscles, platysma, sternocleidomastoid). Chapters 2 to 8 became 3 to 9; the contents list and the chapter menu were updated to match. The new chapter uses the same markup as the others, so the accordion, the finder and the print layout pick it up.
- Sprint counts (category counts, totals, Spiral Rounds sets, the study plan counter) match the remaining structures. Empty categories were removed from both the HTML list and the script data.
- 1.3.1 and 2.4.6: the new chapter has one h2 and the same block structure as the other chapters. No duplicate ids on any changed page.
- 1.4.10 Reflow: checked at 375px wide. Fixed a contents title on the structure list that pushed the page 48px wider than the screen (it now wraps).
- No script errors on any changed page in Chromium.

## Addendum, October 17, 2026: Module 3 lab packet trimmed to the tag check

Files: BIO004-M3-Lab-Packet.html, BIO004-M3-Lab-Packet.pdf.

- Part A (structure list) is now the same content as module-3-structure-list.html, so the packet and the list name the same 261 structures.
- Part B (muscle charts): rows for muscles that are not tagged were removed (orbicularis oculi, the pterygoids, scalenes, supra and infrahyoids, innermost intercostals, transversus thoracis, serratus posterior, subclavius, extensor indicis, and every hand muscle except abductor pollicis brevis). The deep back chart was removed. Platysma moved to the neck chart to match the list. Chart notes were rewritten where they named removed muscles.
- Part C (blood): hemocytoblast row, rouleaux term and the rouleaux mention removed.
- Part D (questions): questions on untagged structures and nerve-to-muscle questions removed; "origin, insertion, action, or nerve" now reads "origin, insertion, or action". One location question added (axillary nerve at the surgical neck of the humerus, which is on the list).
- PDF: 26 to 21 pages. Built with WeasyPrint as PDF/UA-1 (tagged, structure tree, language en-US, title shown). The page was rendered with scripts off so the dock does not add on-screen badges to the printed headings; the QR codes keep their alt text and print at 1.3 inches.
- Print CSS: a lab question now stays on the same page as the block above it.
- No duplicate ids, no broken in-page links, no script errors, no horizontal scroll at 375px.
