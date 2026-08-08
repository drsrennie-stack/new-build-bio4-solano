# What's already in the repo, and what I reused

You asked me to look for things that work better than what I was building, and reconfigure rather than duplicate. Here is the state of it.

**The headline was that I had not read `welcome.html`.** It is the richest file in the repo at 70KB, and I built a Hootie without checking whether one existed. One did, and it was better than mine in several ways.

---

## Done

### 1. The real Hootie mark
A pufferfish in a mortarboard with round glasses and a maroon bow tie, drawn in SVG in the Mastery OS palette. Mine was a blowfish emoji. The mark is now shared by `hootie.js`, so there is one Hootie, not two drawings.

### 2. The "Stuck? Ask Hootie." nudge
A gold bubble by the launcher that retires the moment Hootie opens. This is the thing that actually gets a student to click. Mine had no prompt at all.

### 3. Your intent matcher replaced my regex chain
12 weighted intents, scored by keyword hits, ordered most urgent first so ties resolve sensibly. Mine was a brittle ordered if-chain.

Verified: **"I am struggling, who do I email"** reaches `contact`, not `struggle`, because someone asking for an address needs the address rather than a pep talk.

### 4. The `struggle` intent, which mine did not have
This was the worst thing about the version I shipped. A student typing **"I am drowning and so far behind"** got a refusal about anatomy content. They now get the Gap Finder, a 3-Day Cram, Study With Me, and the Success Sprint after Exam 1.

### 5. Your answer bank, merged with my dates
Yours knew grading weights, TBL mechanics, contact routes, the ASC accommodations path and ASTC tutoring. Mine knew the schedule. Neither could do the other's job.

Merged, the answers carry live data where it helps:
- **Exams** opens with the student's own next exam date and days remaining, then explains the five-exam structure.
- **Struggle** ends with their actual next exam date, because "reach out early" means more when you can see the deadline.
- **This week** names the real days before pointing at the section hub.

### 6. `course-links.js`, one home for every URL
The Atlas, Loops, Study With Me and ASTC addresses were hand-written in `welcome.html` while `week-links.js` and `resources.js` shipped empty a few files away.

Every entry declares `internal` or `external` explicitly, because guessing that from the URL is how a Canvas course ends up rendering inside its own iframe. Verified: internal emits `target="_top"`, external emits `target="_blank" rel="noopener"`, and syllabus and hub links follow the student's section.

---

## Still on the table

### 7. `welcome.html` keeps its own inline Hootie
This is the one remaining duplicate. It works, so I left it rather than swapping it late in a long session.

The merged component is now a **superset** of it: everything welcome.html's Hootie answers, plus the dates. Swapping means deleting the inline Hootie markup and `bindHootie()`, roughly two hundred lines, and loading `course-links.js` and `hootie.js` instead. The one thing to preserve is the `tour` intent, which calls `startTour()` on that page.

### 8. Shadow and card tokens
`welcome.html` defines `--shadow-rest` and `--shadow-hover` as variables and `.tcard` is a clean card with an icon chip, hover lift and gold focus ring. `module-nav.js` still hardcodes its shadow values. Worth extracting a small token file so components stop redefining the same three numbers.

### 9. Voice narration
A working `speechSynthesis` Listen button already exists on the tour. Real accessibility feature, already built, would work on the week pages for students who would rather hear the week than read it.

### 10. The guided tour scaffold
Card tour with a progress counter, modal, and positioning that follows the current card. You have said you want an animated pointing hand walking students through the pre-work sequence. **That scaffolding exists.** Building it from scratch would be redoing work.

---

## Recommended next

1. Swap `welcome.html` onto the shared Hootie and delete its inline copy.
2. Reuse the tour scaffold for the pre-work pointing hand.
3. Extract the shadow and card tokens.

Voice narration is a nice-to-have and can wait.
