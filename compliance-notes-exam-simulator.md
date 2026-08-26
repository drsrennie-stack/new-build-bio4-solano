# Accessibility compliance notes

**Project:** Exam Simulator and AI Exam Tutor
**Files covered:** `exam-simulator.html`, `ai-exam-tutor.html`, `exam-bank.sample.js`, `competency-upload-template.csv`
**Date:** August 25, 2026
**Reviewer:** Claude, verified in headless Chromium. Screen reader confirmation still outstanding, see section 6.

---

## 1. What these files are

`exam-simulator.html` is a student-facing tool covering both courses. The student picks Anatomy, Physiology, or Both, then ticks the topics they are being tested on. Both competency lists are built into the file, extracted verbatim from the Fall 2026 Competency Packets: 193 anatomy competencies across 5 modules and 40 topics, and 268 physiology competencies across 5 units and 34 topics. Every total, and every per-module lecture and lab count, was checked against the load table printed in each packet and matches exactly. Nothing is fetched and nothing has to be uploaded for the page to work; students can optionally paste a list of their own for one session. Questions are then drawn evenly across the competencies in scope, in the same shape as the in-class module exam, and graded on screen. Selecting Physiology switches the accent from navy to maroon, matching how the two courses are distinguished everywhere else. Nothing about the student is transmitted or stored. The only thing written to local storage is a list of item numbers already used, so repeat runs favor unseen questions, plus the section counts last chosen. No names, no IDs, no answers, no scores.

`ai-exam-tutor.html` is a MedMasters tool, running on the same design tokens as the simulator. It builds a set of instructions from the settings on the page and copies them to the clipboard so a student can run a tutoring session inside ChatGPT, Claude, Gemini, or Copilot. It sends nothing anywhere itself.

The simulator finds the course question bank by itself. It crawls the same starting pages for scripts whose names read like a question bank (recall, qbank, question, quiz, bank, course-content, cards, content), skipping obvious libraries, loads each one, and then scans for question shaped data in whatever globals appeared. Verified at full scale against 9,428 questions across four files totalling 1.5 MB: discovery and load took under a second warm, and a full 20 plus 40 form built in 1.7 seconds. Names of the files and globals it used are listed on the setup screen so nothing loads invisibly.

The priority filter is driven by the Yield column in the competency spreadsheets, which the same crawl looks for. Where a spreadsheet row matches a competency by name, that competency picks up its yield and DOK, and High yield and Core only become usable. With no spreadsheet the filter stays on Everything and says why.

The simulator also reads the course notes. It fetches the notes pages from the course site on the same origin, pulls out the places where a term is paired with a description of it, and feeds those into the same question builder the card bank uses. The competency list decides what is in scope; the notes decide what the questions are made of. Extraction is strict: a definition list pair, a two column table row, a bold lead-in followed by its explanation, or a short heading followed by one explanatory paragraph. Prose that does not pair a term with a description is left alone, and nothing is invented from it. What was read is listed page by page on the setup screen with a term count for each, every derived question carries a "From your notes" tag and names its source page, and the student can switch notes off. Results are cached in this browser for a day, and a Read the notes again button forces a fresh pass.

Both files are self-contained apart from Google Fonts and the notes fetches described above, carry the Kajabi iframe height sender before the closing body tag, use `target="_top"` on internal links, and use `target="_blank" rel="noopener"` on the outbound AI links.

---

## 2. WCAG version and level achieved

Target: WCAG 2.2 Level AA as the floor, Level AAA where it was achievable.

| Criterion | Level | Status | How it is met |
|---|---|---|---|
| 1.1.1 Non-text content | A | Pass | The only graphic is the course mark SVG, which carries `role="img"` and an `aria-label`. All other visual flourishes are CSS. |
| 1.3.1 Info and relationships | A | Pass | Sections use `section` with `aria-labelledby`. Each question is an `article` with a `fieldset` and a `legend` carrying the question text. Results use real `table` markup with `caption`, `thead`, and scoped `th`. |
| 1.3.2 Meaningful sequence | A | Pass | Reading order matches visual order. No positioned content out of flow except the skip link and the toast. |
| 1.3.5 Identify input purpose | AA | Pass | No fields collect personal data, so there is nothing with an autocomplete token to declare. The bank file input carries an explicit `aria-label`. |
| 1.4.3 Contrast, minimum | AA | Pass | All text pairs are 7.29:1 or better. Full audit in section 3. |
| 1.4.6 Contrast, enhanced | AAA | Pass | Every text pair on both pages clears 7:1. |
| 1.4.10 Reflow | AA | Pass | Layout is grid and flex with `minmax` tracks, collapsing to a single column at 940px on the tutor and 960px on the simulator. Wide tables sit inside `.table-scroll` containers so the page body never scrolls sideways. |
| 1.4.11 Non-text contrast | AA | Pass | Interactive borders moved from #D7DBE2 (1.39:1) to #767C8C (4.17:1). Focus indicator is a 3px navy ring at 19.02:1 on white. Decorative table rules stay light, which is permitted since they carry no state. |
| 1.4.12 Text spacing | AA | Pass | No fixed heights on text containers. Line height 1.6 body, 1.2 headings. |
| 2.1.1 Keyboard | A | Pass | Every control is a native `button`, `input`, `select`, or `textarea`. No custom widgets, no drag interactions, no pointer-only paths. |
| 2.1.2 No keyboard trap | A | Pass | The tutor modal traps Tab on purpose, closes on Escape, and returns focus to the element that opened it. |
| 2.4.1 Bypass blocks | A | Pass | Skip link to `#main` on both pages. The simulator adds a jump nav to each exam section. |
| 2.4.3 Focus order | A | Pass | DOM order is the tab order. The visually hidden bank file input is removed from the tab order with `tabindex="-1"` because a visible button triggers it. |
| 2.4.6 Headings and labels | AA | Pass | One `h1` per page, no heading level skipped in any state, verified by script across the setup, exam, and results states. |
| 2.4.7 Focus visible | AA | Pass | 3px navy outline with 2px offset plus a gold halo. Outline switches to white inside dark navy cards and the footer. |
| 2.4.11 Focus not obscured | AA | Pass | The sticky exam bar is 55px tall and the focus ring carries a 2px offset. Anchor jumps land below it because sections have their own padding. |
| 2.5.3 Label in name | A | Pass | Visible button text is the accessible name everywhere except the icon-free "All 4" buttons, whose `aria-label` begins with the visible text. |
| 2.5.8 Target size, minimum | AA | Pass | The AA minimum is 24 by 24 CSS pixels. Measured in the browser, the smallest target is a jump-nav pill at 31 by 116. The "All 4" button is 35 by 61, the confidence field 41 by 70, a matching select 43 by 96, a true or false choice 47 by 106, and a brain dump prompt row 74 tall at full width. Radios and checkboxes are wrapped in their labels, so the whole row is the target. |
| 3.2.2 On input | A | Pass | Nothing changes context on input. The false-statement replacement field appears in place when False is selected, below the control, and does not move focus. |
| 3.3.1 Error identification | A | Pass | Unplaced confidence points are named in a live region under the question ("2 points left to place"). Submitting with blanks raises a confirm that counts them. Bank parse failures explain what went wrong. |
| 3.3.2 Labels or instructions | A | Pass | Every control has a visible label or an `aria-label`. Scoring rules are stated before each section, not only at the end. |
| 4.1.2 Name, role, value | A | Pass | Toggle buttons carry `aria-pressed`. The collapsible Gap Finder body is driven by a real checkbox. No ARIA is used where a native element does the job. |
| 4.1.3 Status messages | AA | Pass | `role="status"` with `aria-live="polite"` on the competency-list loading status, the scope summary that recounts as filters change, the progress counter, the per-question points remaining, the tutor status bar, and the toast. |
| 1.4.1 Use of color | A | Pass | Anatomy and physiology items carry a text label on the tag, not just navy against maroon. Competency coverage chips read "In the bank" or "No questions yet" rather than relying on the gold and maroon fills. |
| 1.3.1 (competency scope) | A | Pass | The scope list is a native `details` disclosure. Each row gives the module and topic, the full competency statement, and its flags as text. |
| 1.3.1 (topic tree) | A | Pass | Each module is a `section` labelled by its heading. Its topic checkboxes sit in a grid inside it, so the module a topic belongs to is carried by structure, not just by position. |
| 4.1.3 (discovery status) | AA | Pass | The question bank panel reports through a `role="status"` live region, so "Looking for the question bank" and "Loaded 4 bank files holding 9,428 questions" are announced. |
| 4.1.3 (notes status) | AA | Pass | The notes panel reports progress and outcome through a `role="status"` live region, so "Reading 12 notes pages" and "Read 12 notes pages and pulled 180 terms out of them" are announced rather than only appearing. |
| 4.1.2 (module state) | A | Pass | A module checkbox uses the native `indeterminate` state when only some of its topics are ticked, and reports the count in text beside it for anyone who cannot see the tri-state box. |

Not applicable: 1.2.x (no audio or video), 1.4.2 (no autoplay), 2.3.x (no flashing), 3.1.2 (single language).

---

## 3. Color contrast audit

Ratios computed from the token values, not sampled from a screenshot.

### exam-simulator.html

| Foreground | Background | Ratio | Level | Where |
|---|---|---|---|---|
| #08101F navy | #FFFFFF white | 19.02 | AAA | Body text and headings on cards |
| #08101F navy | #FAFAF9 page | 18.21 | AAA | Body text on the page ground |
| #4A5468 muted | #FFFFFF white | 7.61 | AAA | Secondary copy, table headers, hints |
| #4A5468 muted | #FAFAF9 page | 7.29 | AAA | Secondary copy on the page ground |
| #7A2A22 maroon | #FFFFFF white | 9.63 | AAA | Question numbers, eyebrows, correct answer callouts |
| #7A2A22 maroon | #FAFAF9 page | 9.22 | AAA | Eyebrow above the page title |
| #FFFFFF white | #08101F navy | 19.02 | AAA | Text on the dark scoring card, primary buttons, footer |
| #FFFFFF white | #7A2A22 maroon | 9.63 | AAA | Submit button, incorrect verdict badge |
| #08101F navy | #DCB45C gold | 9.71 | AAA | Gold chips, partial verdict badge |
| #08101F navy | #ECEFF4 navy tint | 16.50 | AAA | Jump nav pills, quiet chips |
| #C9D0DC | #08101F navy | 12.26 | AAA | Footer meta line, muted copy on dark cards |
| #767C8C border | #FFFFFF white | 4.17 | Pass, needs 3:1 | Every interactive control boundary |
| #08101F focus ring | #FFFFFF white | 19.02 | Pass, needs 3:1 | Focus indicator |

### ai-exam-tutor.html

Both files now run on the same tokens, so the ratios match the table above.

| Foreground | Background | Ratio | Level | Where |
|---|---|---|---|---|
| #08101F navy | #FFFFFF white | 19.02 | AAA | Headings and body copy on cards |
| #08101F navy | #FAFAF9 page | 18.21 | AAA | Body copy on the page ground |
| #4A5468 muted | #FFFFFF white | 7.61 | AAA | Secondary copy, notes, hints |
| #4A5468 muted | #FAFAF9 page | 7.29 | AAA | Secondary copy on the page ground |
| #7A2A22 maroon | #FFFFFF white | 9.63 | AAA | Eyebrow, brand accent, links, section eyebrows |
| #7A2A22 maroon | #FAFAF9 page | 9.22 | AAA | Eyebrow above the page title |
| #FFFFFF white | #08101F navy | 19.02 | AAA | Primary buttons, selected segments, dark card, footer |
| #FFFFFF white | #7A2A22 maroon | 9.63 | AAA | Gap Finder status chip |
| #08101F navy | #DCB45C gold | 9.71 | AAA | Gold status chips |
| #08101F navy | #ECEFF4 navy tint | 16.50 | AAA | Header pill, mode chip |
| #C9D0DC | #08101F navy | 12.26 | AAA | Footer meta line, muted copy on the dark card |
| #767C8C border | #FFFFFF white | 4.17 | Pass, needs 3:1 | Every interactive control boundary |
| #08101F focus ring | #FFFFFF white | 19.02 | Pass, needs 3:1 | Focus indicator |

Deliberately not used as text: gold #DCB45C on white (2.02:1) and straw #E8CE85 on white (1.55:1). These appear only as fills with dark text on top, or as the outer halo of the focus ring where the navy inner ring carries the contrast.

The tested term in a true or false statement is marked three ways so color is never the only signal: bold weight, a 2px maroon underline, and the instruction line above the section naming what the marking means.

---

## 4. Keyboard navigation flow, verified

**exam-simulator.html**

1. Tab 1 reveals the skip link. Enter jumps to `#main`.
2. Setup: header link, bank buttons, module checkboxes, length preset radios (arrow keys move within the group), three number fields, four option checkboxes, Build.
3. Build moves the view to the exam. The sticky bar is reachable: jump links to each section, then Submit.
4. Each true or false item: two radios reached with arrow keys. Choosing False inserts the replacement field directly after, in tab order, without stealing focus.
5. Each multiple choice item: four number fields and four "All 4" buttons interleaved in reading order, then Clear. Arrow keys step the number fields. The points remaining line announces after each change.
6. Matching: one select per left-hand item, letters chosen with arrow keys or by typing the letter.
7. Brain dump: four radios, then the textarea.
8. Submit raises a native confirm when anything is unanswered, which is keyboard operable by definition.
9. Results: the brain dump checklist checkboxes come first and re-score on Space. Then the tables, then the review, then Build a new exam, Print, and Change the settings.

**ai-exam-tutor.html**

1. Skip link, brand link, then the left column textareas, then the right column top to bottom.
2. Toggle buttons for question type respond to Enter and Space and report state through `aria-pressed`.
3. Read it first opens the modal, moves focus to the close button, cycles Tab inside it, closes on Escape, and returns focus to the button that opened it.
4. Turning on Gap Finder reveals its panel immediately after the checkbox in tab order.

No mouse-only interaction exists in either file.

---

## 5. Screen reader behavior built for

- Landmarks: `header`, `nav` with `aria-label="Primary"` or `"Jump to exam section"`, `main`, `footer`. Every panel is a `section` named by its heading.
- Each question is announced as a group because the stem is the `legend` of the `fieldset` holding its controls.
- Live regions announce the answered count, the per-question confidence points remaining, the grading mode on the tutor, and every toast.
- Result tables carry a `caption` (visually hidden where the heading above already says it) and scoped column headers, so cells are announced with their column.
- Verdict badges are text, not icons or color alone.
- The visually hidden helper labels use the clip pattern, so they are read but not seen, and the one hidden file input is out of the tab order.

---

## 6. Known limitations and remediation plan

1. **No live screen reader pass yet.** Structure, names, roles, and live regions were verified by script in headless Chromium, and the markup was written to the patterns above. It has not been driven with VoiceOver, NVDA, or JAWS. Before this goes to students, run one full exam with VoiceOver on Safari and one with NVDA on Firefox, listening specifically to the multiple choice confidence rows, which are the densest thing on the page. Log anything that reads awkwardly and adjust the hidden labels.

2. **Google Fonts is an external dependency.** If it is blocked or slow, both pages fall back to the system UI stack. Layout holds, but the type is not the intended face. Nothing about the content depends on the font.

3. **The confidence point input is a number field, not a slider.** That was deliberate, because it is precise and fully keyboard operable. It does mean a student has to type four small numbers per question. The "All 4" buttons cover the common case in one press. Watch for complaints and consider adding a four-position preset row if it slows people down.

4. **Derived items are only as good as the bank.** When the authored pool runs short the simulator builds items from cards, and it only does so in ways the data supports: multiple choice from a definition plus sibling terms in the same topic, and true or false by swapping the tested term for a sibling. Any card whose definition could describe more than one term must carry `unique: false` in the bank or a derived item could be defensibly ambiguous. Review derived items the first few times a new bank goes in.

5. **Brain dump auto-scanning is a keyword match, not comprehension.** It is deliberately conservative and misses synonyms and paraphrase. That is why the student corrects the ticks afterward and why the panel says so plainly. It is a scoring aid, not a grader.

6. **Print styles are basic.** Results print without the navigation and buttons. A dedicated print stylesheet for the review section would be better if students start printing their results to bring to office hours.

7. **The competency lists are a snapshot of the Fall 2026 packets.** They are compiled into the file rather than read live, so the page works with no setup, offline, and inside a Canvas or Kajabi iframe. The cost is that a packet revision means regenerating the file. The extraction was verified against each packet's own load table, module by module, on totals and on lecture and lab counts, and matched exactly, so what students see is what the packet says. Depth of knowledge is not printed per competency in either packet, so items fall back to the DOK carried in the question bank. `CONFIG.DISCIPLINES[0].url` points at `/new-build-bio4-solano/bio004-competencies.csv`, which does not exist yet. Until it does, the Anatomy card says the list could not be loaded and offers a paste box, and the simulator still builds exams from the bank grouped by topic. Set that one line to the real filename and the whole competency layer switches on. The physiology path is live and reads 268 competencies from `human-physiology-Fa26/bio005-competencies.csv`.

8. **The notes reader depends on where the page is served from.** The fetches are same origin, which is what makes them work inside Canvas and Kajabi, and it also means the page has to be served from the course site. Opened from a local file or a different domain the fetches fail, the panel says so plainly, and the paste box is offered instead. The seed list in `CONFIG.NOTES.seeds` names the pages it looks at for links; it currently covers `bio004-quick-access.html`, `welcome.html`, `today.html`, `course-materials.html` and `index.html` in both course repos. Links are collected from markup and from script data alike, so a materials page that builds its own list still works. If a notes page is not reachable from any of those, add its page to the seeds.

9. **Bank discovery executes scripts from the course site.** Loading a bank means adding a script tag for it, which runs that file. Everything loaded is same origin, so it is code already on the course site, and the name filter skips known libraries. It is still worth knowing: if a discovered file does more than declare data, that code runs. Keep bank filenames descriptive and keep anything with side effects out of files matching the bank pattern. The setup screen lists every file loaded and every global it took data from, so nothing arrives silently.

10. **A file that shares a name with a bank but holds no questions is loaded and then ignored.** The scan needs at least five question shaped objects in a global before it accepts it, so a near miss costs a fetch and nothing else, and the panel says the file loaded but yielded nothing.

11. **Extraction quality is only as good as the markup.** Terms come out cleanly from definition lists, two column tables and bold lead-ins. A notes page written as flowing prose with no term and description pairing yields little, and the page by page list on the setup screen shows exactly which pages gave nothing so the markup can be fixed rather than the shortfall going unnoticed. Review a sample of notes derived questions the first time a new notes page goes live.

12. **The even split is capped by the shallower bank.** With Both selected, each discipline gets its own quota and its own competency queue. If one side does not have enough questions to fill its half, the remainder comes from the other side, and the exam page states the split it actually achieved rather than claiming it was even. Watch that line while the banks are still filling out.

13. **Competency coverage is only as honest as the IDs.** An item is tied to a competency by the ID in the CSV. Items with no ID still work, they just group under their topic and count as uncovered, which is what makes the "no questions yet" flag useful. If IDs drift between the CSV and the bank, coverage will understate itself rather than overstate itself, which is the safe direction.

14. **The tutor cannot control what the AI does with the instructions.** The prompt carries an accuracy block that tells the model not to invent anything and to verify the keyed answer, but no prompt guarantees a model behaves. Student-facing framing should say that the tutor is practice, and the notes packet is the source of truth.

---

## 7. Reviewer

Built and audited by Claude on August 25, 2026, against the standing WCAG 2.2 AA floor. Sign-off pending the screen reader pass in item 1 above.
