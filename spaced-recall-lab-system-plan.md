# Spaced Recall Lab System: Planning Notes

**Saved:** 2026-05-26
**Status:** Parked. Build course by course when ready. BIO 431 is the first candidate.
**Author:** Dr. Sharilyn Rennie

---

## What this is

A spaced-recall (flashcard-style) study tool that complements the existing per-page lab sprint pattern. Lives separately from the per-page sprints. Designed to drive cross-unit retention over a full term, not week-to-week exam prep.

The per-page lab sprints already handle "I have a lab exam Monday, what do I drill this week." This system handles "the cumulative final is in twelve weeks, what should I be reviewing today."

---

## The three courses (each gets its own system)

| Course   | Institution | Scope                          | Pace      | First-build priority |
| -------- | ----------- | ------------------------------ | --------- | -------------------- |
| BIO 004  | Solano      | Anatomy only                   | 8-week    | Skip                 |
| BIO 430  | ARC         | A&P, Part 1                    | 16-week   | Second               |
| BIO 431  | ARC         | A&P, Part 2 (TBL, in-person)   | 16-week   | First                |

### Why per-course, not one universal system

Content differs. BIO 004 is pure anatomy. BIO 430 and BIO 431 add physiology. Even within ARC, Part 1 and Part 2 cover different systems. One universal card bank would mean every student wading through 60 percent irrelevant material. Per-course keeps practice focused.

### Why BIO 004 is skipped

The 8-week summer intensive doesn't have the runway for true spaced repetition. A card you saw on day 3 needs to come back on day 17 to be worth anything, and day 17 is week 3 of an 8-week course. The per-page weekly tools already do the right thing for that pace.

### Why BIO 431 is first

It is the next course on the calendar after summer (Fall 2026 start), 16 weeks, in-person, TBL. The pacing makes spaced recall pay off. The TBL structure means students are already primed for retrieval practice in class, so cross-unit retrieval at home is a natural extension.

---

## The recipe (same across courses)

### 1. Source data

For each course, gather:

- **Lab structure list** (every structure students must identify, organized by category and week)
- **Question bank** (optional but valuable; one or more recall questions per structure, ideally at varying DOK levels)
- **Concept items** (if including lecture content: definitions, mechanisms, relationships)

Source the structures from the existing per-page lab sprint files. The `STRUCTURES` arrays in each `*-lab-sprint.html` are the canonical source. The "Also be ready to answer" sections in the prep-cat blocks have the question stems.

### 2. Build with the spaced-recall-builder skill

The `spaced-recall-builder` skill is installed and built for exactly this. It produces:

- `course-content.js` (the question bank in the expected format)
- A flashcard app with the spacing algorithm, daily review, correctness tracking, and DOK-level progression already wired in

Reference the skill description in `~/.claude/skills/spaced-recall-builder/SKILL.md` for input format.

### 3. Brand chrome (PRIMARY palette)

Match the index.html chrome from each course:

- Navy `#0B1530`, navy-deep `#060A18`, terra `#8B3A2E`, gold `#C9A14A`, cream `#F5F1E8` on dark sections only
- Plus Jakarta Sans throughout
- White cards on off-white page background
- Same hub-and-spoke architecture (link back to course home from every page)
- `target="_top"` on internal links

### 4. Accessibility floor

- WCAG 2.2 AA minimum, AAA where achievable
- Semantic landmarks, focus-visible outlines, prefers-reduced-motion respected
- Keyboard reachable for every interaction (next card, mark known, mark hard, etc.)
- Screen reader announces card state changes via aria-live

### 5. Privacy and storage

- Browser localStorage only. No backend, no accounts, no PII.
- Per-device. Tell students up front: pick one device.
- If cross-device sync ever becomes a real need: separate project, requires Supabase/Firebase, raises real PII concerns. Don't half-build it.

### 6. Delivery

- Standalone HTML file in the course repo (e.g., `bio431-spaced-recall.html`)
- iframe height-sender baked in (`postMessage` with `type: 'resize'`)
- Linked from the course index.html and from each weekly hub page
- Kajabi-embeddable

---

## What changes per course

| Item                  | BIO 430                    | BIO 431                    |
| --------------------- | -------------------------- | -------------------------- |
| Card count (est.)     | 400 to 600                 | 500 to 700                 |
| Categories            | A&P 1 systems              | A&P 2 systems              |
| Lecture concepts?     | Decide before build        | Decide before build        |
| Course start date     | (confirm)                  | (confirm)                  |
| Exam schedule for plan| (lab exams, cumulative final) | (lab exams, cumulative final) |
| Hub link location     | week-N pages, index.html   | week-N pages, index.html   |

---

## Open decisions to lock before building

For each course, confirm:

1. **Scope:** lab structures only, or also lecture concepts?
2. **Units in scope:** all weeks, or omit any?
3. **Algorithm flavor:** simple 3-bucket Leitner (cheap, transparent) vs. SM-2 style intervals (more accurate, more opaque). Recommend Leitner for v1.
4. **DOK progression:** does the skill's DOK-level progression match how you want students to advance, or do you want all cards in one pool?
5. **Daily card limit:** cap at 20 per day? 30? unlimited?
6. **Delivery surface:** standalone GitHub Pages tool, Canvas embed, or both?
7. **Reset rule:** can students reset their progress mid-term, or is the deck locked once started?

---

## What NOT to build (lessons from BIO 004 work)

- **Don't build a parallel drilling system that competes with the per-page sprints.** Students get confused, use neither well. The spaced-recall app is for cross-unit retention, not week-of-exam cramming.
- **Don't add cross-device sync without a real plan.** Browser-local works for a single-device student. If you add sync, do it as a full feature with consent, account model, and privacy review.
- **Don't include student names, IDs, or grades in any persisted file or memory.** Standard rule. Especially important here because the app touches a lot of student data.

---

## When to revisit (triggers)

- BIO 431 fall semester start is approaching (typical August / September)
- Students on the per-page lab sprints ask for "a way to review across units"
- You want to test the spaced-recall-builder skill end-to-end before extending it elsewhere
- STAT Success program (academic recovery) wants a recall component (potential reuse)

---

## Related work already in place

- 30 BIO 004 lab sprints, all restyled and wired to weekly hubs (see workspace folder)
- BIO 431 CLAUDE.md and BIO 304 CLAUDE.md scaffolds in the Cowork setup
- `spaced-recall-builder` skill installed at `~/.claude/skills/spaced-recall-builder/`

---

## Suggested first session when you're ready

1. Open the BIO-431-ARC project in Cowork
2. Tell me: "Let's start the spaced recall build for BIO 431"
3. I'll walk through the open decisions above as `AskUserQuestion` prompts
4. I'll pull structures from the existing BIO 431 materials (or you can paste them in)
5. We'll build the question bank first, the app second, the brand polish third
6. Estimated total build time: 1 to 2 working sessions for a clean v1
