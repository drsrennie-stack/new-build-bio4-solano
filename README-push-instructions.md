# BIO 004 — Phase B v2 (lecture pages only)

**This is the corrected Phase B for BIO 004.** Since you hadn't pushed Phase B v1 yet, this just replaces that bundle wholesale. Don't push the old `BIO-004-PhaseB/` folder — use this one instead.

## Difference from v1

v1 wired ALL lecture-ish pages including workbooks and lab sprints. v2 wires ONLY video-matched lecture pages. Workbooks, lab sprints, week summaries, portfolio templates left untouched.

## What's in this bundle (80 files)

- **66 lecture pages** with concept-anchored drawing buttons + script tag
- **14 lecture pages** with just the script tag (no slide topic matched — `bone-microanatomy`, `fascicle-arrangement-lever-systems`, etc.)
- Zero workbooks, sprints, trainers, or portfolio pages — they're left alone.

## Push commands

```bash
cd /path/to/new-build-bio4-solano
git checkout main
git pull origin main

cp "/Users/sharilynrennie/Documents/Claude/Projects/Lecture Slides/_PUSH-TO-GITHUB/BIO-004-PhaseB-v2/"*.html .

git status        # should show ~80 modified files
git add *.html
git commit -m "Phase B: wire slide-modal into lecture pages (video-matched only)"
git push origin main
```

## Verify after push

Wait ~2 min. Test ONE lecture and ONE workbook:

**A lecture page (should have a button):**
https://drsrennie-stack.github.io/new-build-bio4-solano/the-spinal-cord.html
→ "Draw the CNS organization" button under the title. Click → CNS deck opens in floating panel.

**A workbook page (should NOT have a button):**
https://drsrennie-stack.github.io/new-build-bio4-solano/cell-anatomy-workbook.html
→ Looks like a normal workbook, no "Drawing tools" box.

If both check out, you're done. Both repos shipped, no v3 needed.
