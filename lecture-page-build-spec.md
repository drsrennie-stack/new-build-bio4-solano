# Lecture Page Build Spec (Concept Page with Video + Explain-Back Gate)

Paste this whole document into a fresh chat. It is a complete, self-contained
specification for building HTML "concept pages" (lecture reference pages) for a
human anatomy course. The assistant receiving this has no prior context, so
everything it needs is here.

---

## 1. What you are building

A **concept page** (also called a lecture page). One HTML file per topic. It is
a single, self-contained static page hosted on GitHub Pages and embedded inside
a Canvas LMS course via an iframe. Each page does four things:

1. Presents a topic's lecture **video** (toggle to reveal an embedded iframe).
2. Presents a **printable reference**: definitions, term tables, labeled
   figures, and structured notes for the topic.
3. Gates the student with an **explain-back retrieval check** (the "Option A"
   gate): after watching the video, the student must write 60+ words in their
   own words, hitting a set of key concepts, before the pre-work link unlocks.
4. Offers three **print modes**: Notes (full reference), Study (fill-in-the-
   blank worksheet), Quiz me (on-screen self-test).

The page must work standalone AND inside a Canvas iframe.

---

## 2. Non-negotiable rules

These are course-wide rules. Follow them exactly.

### Writing
- **Never use em dashes.** Replace with commas, periods, parentheses, or
  rewrite the sentence. This applies to all content, code comments, everything.
- **Byline / signature** is the instructor's name with **no credential suffix**.
  Never append ", ND" or ", MD" or any other suffix in student-facing output.
- Plain, direct language. No filler ("certainly", "great question").

### Design system (PRIMARY palette, the only palette for teaching materials)
Use these CSS custom properties. **No sage. No cream. No pastels.**

```css
:root{
  --navy:        #1E3D4C;  /* primary text, headers, borders */
  --navy-deep:   #142A36;  /* hover state on navy elements */
  --navy-tint:   #EDF1F3;  /* completed-state fill only, not page backgrounds */
  --gold:        #B8924A;  /* accents, unlocked-state borders, key CTAs */
  --terra:       #C2734D;  /* eyebrow text, secondary accents */
  --terra-dark:  #A0522D;  /* terra hover, emphasis */
  --white:       #FFFFFF;  /* cards only */
  --offwhite:    #FAFAF9;  /* page background only */
  --rule:        rgba(30,61,76,0.18);
  --rule-soft:   rgba(30,61,76,0.10);
  --shadow-rest: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-hover:0 8px 16px rgba(0,0,0,0.10);
}
```

White cards on an off-white page background. Cards lift on hover (translate up
2px, softer shadow). Borders are thin (1px), navy or terra by context. No
decorative bookend bars at the top or bottom of sections. No shaded card
backgrounds. White on off-white only.

### Fonts (load from Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Lora:ital,wght@0,400;1,400;1,500&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
```
- **DM Sans**: eyebrow text (12px, uppercase, letter-spacing .12em, terra-dark),
  button labels, meters.
- **Plus Jakarta Sans**: h1 (800 weight, navy), h2 and h3 (600-800 weight,
  terra-dark or navy by context).
- **Lora** (italic available): body text, usage instructions, emphasis.

### Accessibility floor (WCAG 2.2 AA minimum, target AAA where achievable)
- Semantic HTML, correct heading hierarchy (one h1, then h2, then h3, no skips).
- Every form input paired with a label via for and id.
- Accessible names on icon-only buttons (aria-label).
- aria-live on dynamic regions (the gate status, the meter).
- aria-expanded on collapsible toggles (the video toggle).
- Skip link to main content.
- Visible focus indicators (3px gold outline, 2-3px offset).
- prefers-reduced-motion respected (kill transitions and animations).
- Full keyboard operability. Every interactive element reachable and operable.
- Contrast: 7:1 for normal text where achievable, 4.5:1 minimum for large text.

### Canvas iframe integration (every HTML deliverable)
Bake this **iframe height-sender** script in just before the closing body tag.
It lets the page tell its Canvas parent frame how tall to be:

```html
<script>
(function(){
  if(window.self===window.top)return;
  function sendHeight(){
    var h=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    try{window.parent.postMessage({type:'iframe-height',id:'PAGE_ID',height:h},'*');}catch(e){}
  }
  window.addEventListener('load',sendHeight);
  window.addEventListener('resize',sendHeight);
  if(window.ResizeObserver){new ResizeObserver(sendHeight).observe(document.body);}
  else{setInterval(sendHeight,800);}
})();
</script>
```
Replace PAGE_ID with a short stable id (e.g. 'anatomy-lecture').

Add **target="_top"** to every internal and same-domain link (logo, nav, CTAs,
the pre-work link) so a click breaks out of the Canvas iframe instead of
nesting. External links use target="_blank" rel="noopener".

---

## 3. Page structure, section by section

Order top to bottom:

### 3a. Header
- Eyebrow (DM Sans, 12px, uppercase, terra-dark): the course label, e.g.
  `BIO 004 . Human Anatomy`
- H1 (Plus Jakarta Sans 800, navy): the topic title.
- Subhead (Plus Jakarta Sans 600, terra-dark, 17-22px): the module name.
- Usage line (Lora italic, soft gray): one sentence on what the page is for.

### 3b. Resource bar
A row with two controls:
- A **"Watch the video"** toggle button. It has `aria-expanded` and
  `aria-controls` pointing at the video panel.
- A **"Go to the pre-work"** link styled as a primary button. This link is
  **locked by default** (see the gate, section 4).

### 3c. Video panel
A `<div class="video-panel" hidden>` containing a lazy-loaded `<iframe>`. The
toggle button reveals it. The iframe `src` starts at `about:blank` and is set to
the real video URL only when first revealed (saves bandwidth, avoids autoplay).
Allow attributes: `accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture; web-share`, plus `allowfullscreen`.

### 3d. Objectives block
A short "By the end" block with a 3-item ordered list of learning objectives,
each a single action verb sentence (Identify..., Demonstrate..., Apply...).

### 3e. Figure plate (optional but recommended)
Labeled figures. If you use OpenStax images, they are CC BY 4.0: include a
caption credit line and a link to the license. Every `<img>` needs a thorough
`alt` description (describe what the figure shows, not just "figure 1.12").

### 3f. Content sections (the printable reference)
The body of the page. Organize as term tables. Each table has a heading (h2 or
h3) and rows. The standard row is **three columns**:
1. The term (navy, bold).
2. The definition (Lora).
3. A blank fill-in cell labeled "Your landmark" / "Your note" / "Your example".

That third column is what makes the page work as a worksheet: in Study print
mode, the definition column hides and the student writes it themselves.

Group terms logically (for anatomy: Directional Terms, Body Planes, Body
Cavities, Regional Terms, etc.). Keep each table focused.

### 3g. The explain-back gate
See section 4. It sits near the bottom, after the reference content.

### 3h. Footer
Italic, soft gray, centered. The instructor byline with no credential suffix,
plus course and page identifiers.

---

## 4. The explain-back gate ("Option A")

This is the load-bearing pedagogy feature. The principle: students should not
reach the pre-work (flashcards) until they have done one active retrieval pass.
Watching a video is passive. Writing 60 words in your own words is active. The
gate enforces it.

### Behavior
1. On page load, the **pre-work link is locked**: it gets a `gate-locked` class,
   `aria-disabled="true"`, dimmed opacity, and a hint label next to it reading
   "Watch the video and complete the retrieval check to unlock."
2. Clicking the locked link does not navigate. If the gate section is still
   hidden, it alerts "Watch the video first." If the gate is visible, it smooth-
   scrolls to the gate and focuses the textarea.
3. The **gate section** contains:
   - An eyebrow, an h2 ("Explain it back" or similar), and an instruction
     paragraph telling the student to write 60+ words pulling together what the
     video taught, including the key concepts.
   - A `<textarea>` (labeled, min-height ~140px).
   - A live **meter** (aria-live polite) showing "Words: X / 60" and "Concepts
     found: Y / N".
   - A submit button, disabled until requirements are met.
   - A status line (aria-live) for pass/fail feedback.
4. **Validation logic** (JavaScript):
   - `MIN_WORDS = 60`. Word count = trimmed text split on whitespace.
   - `GATE_KEYWORDS` = an array of 4 to 8 key concept strings for the topic.
   - `MIN_KEYWORDS = max(2, ceil(GATE_KEYWORDS.length * 0.6))`. A keyword counts
     as "found" if its lowercased form appears as a substring of the lowercased
     student text.
   - The submit button enables only when word count >= MIN_WORDS AND keyword
     count >= MIN_KEYWORDS.
5. On a successful submit:
   - Set the status line to a pass state.
   - Unlock the pre-work link (remove `gate-locked`, remove `aria-disabled`,
     restore full opacity, remove the hint).
   - Write two flags to localStorage so other pages know this topic is cleared:
     `localStorage.setItem('COURSEKEY-gate-' + TOPIC_ID, 'true')` and
     `localStorage.setItem('COURSEKEY-video-' + TOPIC_ID, 'true')`.
     (Replace COURSEKEY with a short course slug.)
6. **Supplementary pages** (reference pages with no topic mapping) set
   `TOPIC_ID` to an empty value. When `TOPIC_ID` is falsy, remove the gate
   section entirely and leave the pre-work link as a normal link.

### Per-page configuration block
Each page's script starts with a small config block. This is the only thing
that changes page to page:
```js
var TOPIC_ID = 't-anatomical-terminology';      // unique topic id, or '' for supplementary
var GATE_KEYWORDS = ["anatomical position", "sagittal", "transverse", "superior"];
var PREWORK_TARGET = "spaced-recall.html#topic=t-anatomical-terminology";
```

---

## 5. The three print modes

A small toolbar offers Notes, Study, and Quiz me. Implement with a body class
that CSS print rules respond to.

- **Notes**: prints the full reference, every definition visible. The default.
- **Study**: prints as a fill-in-the-blank worksheet. The definition column is
  blanked; the student writes each definition by hand while watching the video
  or reading. The "Your note" column stays blank too.
- **Quiz me**: an on-screen (not print) self-test. The student types a term,
  clicks Reveal to check themselves. No grading, no storage, pure retrieval
  practice.

Print CSS: hide the resource bar, video panel, toolbar, gate, and footer
controls. Keep the reference content clean, no shadows, readable on paper.

---

## 6. Content-writing approach

- **"Given not Googled."** Write content the student is meant to learn and
  retrieve, not look up. The fill-in columns and the gate enforce retrieval.
- For an **anatomy-only course**: keep content at the structural level. Name
  structures, locations, spatial relationships, regional terms. Do **not** drift
  into physiology (function, mechanism, "what it does"). If a structure's
  function is genuinely needed for orientation, keep it to a clause, not a
  paragraph.
- Thread **clinical context** lightly where it aids memory (e.g., "supine is
  the default position in a hospital bed"), but do not turn it into a
  pathophysiology lesson.
- Objectives use action verbs and are measurable.
- Figure alt text is thorough and describes the actual content.

---

## 7. What to change for a new course

Everything course-specific is small and localized. To retarget these pages for
a different human anatomy course:

1. **Eyebrow text**: the course label string.
2. **Subhead**: the module name per page.
3. **Byline**: the instructor name (no credential suffix).
4. **TOPIC_ID, GATE_KEYWORDS, PREWORK_TARGET**: the per-page config block.
5. **localStorage key prefix**: the COURSEKEY slug.
6. **Scope**: for an anatomy-only course, drop physiology content entirely.
7. **The palette, fonts, gate logic, print modes, accessibility rules, and
   iframe integration do NOT change.** They are the same across every course.

---

## 8. Build checklist (per page)

- [ ] Header: eyebrow, h1, subhead, usage line
- [ ] Resource bar: video toggle + locked pre-work link
- [ ] Video panel: hidden, lazy iframe, src set on first reveal
- [ ] Objectives block: 3 measurable objectives
- [ ] Figure plate with thorough alt text and license credit if applicable
- [ ] Content sections: term tables with the three-column fill-in pattern
- [ ] Explain-back gate: textarea, meter, 60-word + keyword validation, unlock
- [ ] Three print modes: Notes, Study, Quiz me
- [ ] Footer with byline (no credential suffix)
- [ ] iframe height-sender script before closing body
- [ ] target="_top" on internal links, target="_blank" rel="noopener" external
- [ ] WCAG 2.2 AA: semantics, labels, focus rings, aria-live, skip link,
      reduced-motion
- [ ] No em dashes anywhere
- [ ] No sage, no cream, no pastel tints
- [ ] Single self-contained file (CSS and JS inline, no external stylesheet)

A page is not done until every box is checked.
