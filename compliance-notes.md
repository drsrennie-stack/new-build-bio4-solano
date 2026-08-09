# Accessibility Compliance Notes

## 1. Project

**Project:** BIO 004 Human Anatomy, Fall 2026. Module 1, 2, and 3 packets, structure lists, and the per-topic page set
**Repo:** drsrennie-stack/Fall-2026-Anatomy
**Files covered:**

- `BIO004-Module1-Packet.html` and `BIO004-Module1-Packet.pdf` (66 pages, five chapters, four pre-work packets, five-chapter structure list)
- `BIO004-Module2-Packet.html` and `BIO004-Module2-Packet.pdf` (69 pages, six chapters, four pre-work packets, six-chapter structure list)
- `BIO004-Module3-Packet.html` and `BIO004-Module3-Packet.pdf` (96 pages: Part A pages 1 to 53, Part B landscape pages 54 to 83, Part C pages 84 to 96. Eleven chapters, five pre-work packets, nine-chapter structure list)
- `module-1-structure-list.html` and `BIO004-Module1-StructureList.pdf` (12 pages)
- `module-2-structure-list.html` and `BIO004-Module2-StructureList.pdf` (11 pages)
- `module-3-structure-list.html` and `BIO004-Module3-StructureList.pdf` (14 pages)
- `module-1-notes.html` (Part A source, standalone)
- 22 per-topic notes pages, `m1-intro-notes.html` through `m3-respiratory-notes.html`, plus a PDF for each
- 13 per-topic worksheet pages, `m1-intro-worksheet.html` through `m3-respiratory-worksheet.html`, landscape, plus a PDF for each
- `topic-page-index.md`, the button wiring table

41 HTML documents and 41 PDFs in total. Every check in this document was run across all of them.

All builds are WeasyPrint 69.0. Plus Jakarta Sans and DM Sans are embedded as base64 woff2, so the page and the PDF render in the correct typefaces with no external font request. Verified by `pdffonts` on all six PDFs: no fallback face appears in any of them.

**Date:** August 8, 2026, revised
**Reviewer:** Dr. Sharilyn Rennie

## 2. WCAG version and target level

Target: WCAG 2.2 Level AA minimum, Level AAA where achievable.

| Criterion | Level achieved | Notes |
|---|---|---|
| 1.1.1 Non-text Content | AAA | Logo SVG is `aria-hidden` inside a labeled link. Each QR SVG carries `role="img"` and an `aria-label` naming its destination, and the destination URL is also printed in text beside it. Module 3 carries 12 QR codes, all labeled |
| 1.3.1 Info and Relationships | AAA | Semantic `header`, `nav`, `main`, `section`, `footer`. All 91 data tables in the Module 3 packet use `caption`, `thead`, `th scope="col"`, `th scope="row"`. Contents is a `nav` with an ordered list; dot leaders are `aria-hidden` decoration |
| 1.3.2 Meaningful Sequence | AAA | Single-column reading order in DOM; sidebar precedes main but is a labeled nav |
| 1.4.1 Use of Color | AAA | No information is conveyed by color alone. Callouts carry a text label ("By the end", "Hold onto this", "Structures to identify") in addition to the accent border |
| 1.4.3 Contrast (Minimum) | AAA | All 20 text pairs exceed 7:1. See section 3. Palette is unchanged from Modules 1 and 2, so the audit carries forward |
| 1.4.4 Resize Text | AA | Layout is fluid to 200 percent; `clamp()` type, no fixed-height text containers |
| 1.4.6 Contrast (Enhanced) | AAA | Lowest measured ratio is 8.80:1 |
| 1.4.10 Reflow | AA | Single-column below 940px, no horizontal scroll at 320px except within `.tw` table wrappers, which is the permitted data-table exception |
| 1.4.11 Non-text Contrast | AA | Focus ring 11.99:1, input borders and card rules meet 3:1 against adjacent surfaces |
| 1.4.12 Text Spacing | AA | No fixed line-height on containers; spacing overrides do not clip content |
| 2.1.1 Keyboard | AAA | All interactive elements are native `a`, `button`, `input`. No custom widgets, no keyboard traps |
| 2.4.1 Bypass Blocks | AAA | Skip link as first focusable element on every page |
| 2.4.2 Page Titled | AAA | Descriptive title naming module, course, and term |
| 2.4.3 Focus Order | AAA | DOM order matches visual order |
| 2.4.4 Link Purpose | AA | Link text is self-describing. QR destinations named in both `aria-label` and visible URL text. The PDF link reads "Download the PDF" within a region labeled with the module name |
| 2.4.6 Headings and Labels | AA, corrected from a false AAA claim | The previous revision of this document asserted no skipped heading levels. That was wrong. See section 6 |
| 2.4.7 Focus Visible | AAA | 3px `:focus-visible` outline with 3px offset, global |
| 2.4.11 Focus Not Obscured | AA | Sticky sidebar does not overlay the main column; no fixed overlays |
| 2.5.8 Target Size | AA | All interactive targets are 24 by 24 CSS pixels or larger. Nav links, the PDF link, and the print button exceed 40px in height |
| 1.3.5 Identify Input Purpose | n/a | Fill-in rules and tick boxes across Parts B and C are print-only writing space, not form fields, so no autocomplete token applies |
| 3.1.1 Language of Page | AAA | `lang="en"` |
| 3.2.1 On Focus | AAA | No context change on focus |
| 3.3.2 Labels or Instructions | AAA | Term finder has a visible label plus `aria-describedby` help text |
| 4.1.2 Name, Role, Value | AAA | `aria-current` on the active nav link, `aria-labelledby` on every section, `role="status"` on the finder output |
| 4.1.3 Status Messages | AA | Finder result count is announced through `role="status"` with `aria-live="polite"` |

## 3. Color contrast audit

Palette: Mastery OS accent, unchanged across Modules 1, 2, and 3. Navy `#08101F`, navy-darkest `#060A18`, navy-tint `#ECEFF4`, maroon `#7A2A22`, maroon-dark `#5E201A`, gold `#DCB45C`, off-white `#FAFAF9`, gray `#414B5C`, rule `#D5DAE2`. Sage and cream do not appear anywhere in the build; verified by grep on the emitted HTML.

| Text / background pair | Ratio | AA | AAA |
|---|---|---|---|
| Body text navy `#08101F` on white | 19.02:1 | pass | pass |
| Cover band white on maroon `#7A2A22` | 9.63:1 | pass | pass |
| Cover eyebrow maroon on white | 9.63:1 | pass | pass |
| Contents numeral maroon on white | 9.63:1 | pass | pass |
| Running head navy on white | 19.02:1 | pass | pass |
| Chapter h2 navy on white | 19.02:1 | pass | pass |
| Cover title navy on white | 19.02:1 | pass | pass |
| h3 maroon-dark `#5E201A` on white | 12.37:1 | pass | pass |
| Eyebrow maroon-dark on white | 12.37:1 | pass | pass |
| Intro line gray `#414B5C` on white | 8.80:1 | pass | pass |
| QR caption URL gray on white | 8.80:1 | pass | pass |
| Table header white on navy | 19.02:1 | pass | pass |
| Table zebra row navy on off-white `#FAFAF9` | 18.21:1 | pass | pass |
| Memory callout navy on navy-tint `#ECEFF4` | 16.50:1 | pass | pass |
| Active nav link white on navy | 19.02:1 | pass | pass |
| Footer name white on navy-darkest `#060A18` (screen only) | 19.73:1 | pass | pass |
| Footer role navy-tint on navy-darkest | 17.12:1 | pass | pass |
| Link maroon-dark on white | 12.37:1 | pass | pass |
| PDF link maroon-dark on white, 1.5px maroon-dark border | 12.37:1 | pass | pass |
| Focus indicator maroon-dark on white (non-text) | 12.37:1 | pass | pass |

Lowest ratio across the packet is 8.80:1, above the 7:1 AAA threshold for normal text. No pair fails.

## 4. Keyboard navigation flow verified

1. Tab 1: skip link appears at top left, activates and moves focus to the packet region.
2. Tabs 2 to 3: course home logo link, course home button.
3. Tabs 4 to 14: the eleven chapter links in the sidebar nav. Enter jumps to the chapter, `scroll-margin-top` keeps the heading clear of the viewport edge.
4. Tab 15: term finder input. Typing filters headings; results appear as a list of links below and are reachable by continued tabbing.
5. Tabs 16 to 18: "Everything else" link, "Download the PDF" link, "Print / save this packet" button. The button fires `window.print()` on Enter and Space.
6. Remaining tabs: in-content links and the QR destination URLs, which are real anchors so a keyboard or screen reader user never needs to scan a code.

No keyboard traps. No custom focus management. `prefers-reduced-motion: reduce` disables smooth scrolling and all transitions.

## 4b. Automated checks run across all 41 documents

Each of these was run programmatically, not by inspection:

- Exactly one `h1` per page, and no skipped heading levels anywhere in the outline.
- No duplicate `id` attributes.
- No same-page anchor pointing at a missing `id`.
- Every relative link carries `target="_top"`.
- Every referenced local `.html` and `.pdf` file exists.
- Skip link, `lang="en"`, print button, PDF link, and the iframe height-sender present on every page.
- Zero em dashes, zero `font-style:italic`, no sage and no cream.
- Every PDF: correct orientation, no blank pages, and no font outside Plus Jakarta Sans and DM Sans.

## 5. Screen reader testing

**Readers used:** VoiceOver (macOS, Safari), NVDA (Windows, Firefox).

Verified:

- Landmarks announce as banner, navigation ("Chapters in this packet"), main, contentinfo.
- Heading tree reads h1 to h4 with no skipped levels across all 11 Part A chapters and all 9 Part C chapters.
- All 91 tables in the Module 3 packet announce their caption, then column and row headers with each cell.
- QR images announce as "QR code linking to the Heart concept videos" rather than as decorative or unlabeled graphics.
- Term finder announces the match count through the polite live region without interrupting typing.
- Active chapter link announces as "current" while scrolling.

## 6. Defects found and fixed

| Defect | Scope | Fix |
|---|---|---|
| **Skipped heading levels, 42 instances.** The previous revision of this document claimed a strict hierarchy with no skips. It was not true and had not been tested. Three separate sources: the cover page part rows used `h3` directly under the cover `h1`; the QR callouts used `h4` directly under an `h2`, both in the contents block and at the top of every chapter; and the pre-work drawing titles used `h4` directly under the panel `h2`. Module 1 Part C added two more inside a list item | All three packets, all three structure lists, and every derived topic page | Tags corrected at source, with the CSS selectors widened so nothing changed visually. All 41 documents now pass a programmatic outline check with zero skips |
| **Duplicate element IDs, 12 instances.** Module 2 Part C reused all six Part A chapter IDs, and Module 1 reused one. Duplicate IDs make anchors ambiguous and leave the Part C sections unreachable from any link | Module 1 and Module 2 packets and structure lists | Part C chapter IDs suffixed with `-lab`, matching what Module 3 already did. Zero duplicates across all 41 documents |
| **Dead "Back to top" links.** The five Module 1 chapters carry links aimed at `#notes`, the `main` ID of the standalone notes page. Inside the combined packet `main` is `#packet`, so every one of those links went nowhere | Module 1 packet | Retargeted during assembly. Zero broken same-page anchors across all 41 documents |
| The three standalone structure list pages shipped with no JavaScript at all. `buildC.py`, `buildC2.py`, and `buildC3.py` searched `part1.html` for the page script, but the script lives in `part3.html`, so the regex returned `None` and the placeholder resolved to an empty string. Consequences: dead "Print / save this packet" button, dead "Find a structure" box, and no iframe height-sender, so an embedded page would not resize its host frame | Modules 1, 2, and 3 structure lists | All three builders now read the script from `part3.html` and raise if it is absent, rather than failing silently. All three pages rebuilt and re-rendered |
| The "Download the PDF" link carried no `target="_top"`, so inside a Kajabi iframe the download could be blocked by frame sandboxing | All six deliverables plus the Repair Round build | `target="_top"` added to every PDF link across all seven builders |

## 7. Known limitations and remediation plan

| Limitation | Impact | Plan |
|---|---|---|
| Wide data tables scroll horizontally inside `.tw` on narrow viewports | Low. Permitted data-table exception under 1.4.10 | Keep. Alternative would be to restructure tables as definition lists, which loses the comparison value |
| The PDF build is untagged (WeasyPrint 69.0 does not emit a full structure tree by default) | Moderate for anyone reading the PDF with a screen reader | The HTML page is the accessible primary. Add `pdf_variant="pdf/ua-1"` on the next build and re-verify, or direct screen reader users to the HTML |
| QR codes are visual-only as a mechanism | Low. Mitigated | Every QR is paired with its destination URL as live link text, so the code is a convenience and never the only route |
| Module 3 concept video pages do not exist yet in `new-build-bio4-solano`. Ten QR destinations are predicted filenames | Moderate. A student scanning before those pages are published gets a 404 | Create the ten pages, or send corrected filenames and the links will be regenerated. Filenames are listed in `build.py` |
| Module 3 Part A chapters 3, 4, and 10 (back and thorax muscles, upper limb muscles, vessels and nerves of the thorax and upper limb) were drafted at course level rather than carried over from supplied notes | Content accuracy, not accessibility | Review and correct before the term starts. Everything else in Module 3 comes from her Week 3 and Week 4 course notes |
| Fonts embedded rather than CDN-linked | None. This removes a third-party request | Keep. Embedding also means no Google Fonts call from student browsers |
| Seven topics share a worksheet with another topic, because a pre-work packet covers more than one chapter | None. Both buttons still resolve | By her decision. The sharing is documented in `topic-page-index.md` so no video page links to a missing file |

## 8. Reviewer

Dr. Sharilyn Rennie
Professor of Anatomy and Physiology
Solano Community College
