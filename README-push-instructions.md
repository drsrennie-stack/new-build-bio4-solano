# BIO 004 — string injection bug fix

## What broke

34 lecture pages had a JavaScript "video coming soon" iframe that uses `iframe.srcdoc = '<html>...<body>...</body>'` — i.e., a `</body>` tag INSIDE a JS string literal. My wiring script (Phase B v2) looked for the first `</body>` and inserted `<script src="slide-modal.js" defer></script>` before it. The first `</body>` it found was inside that string literal, so my script tag landed inside the JS string, leaving the string unterminated. Browser threw `SyntaxError` at that line, which broke the page's JS, which prevented slide-modal.js from wiring the click handler.

Result: button visible, click did nothing.

## What this push fixes

For each of the 34 affected files:

1. Removes the misplaced `<script src="slide-modal.js" defer></script>` from inside the JS string literal
2. Adds it back in the correct location (right before the real `</body>` at the end of the page)
3. Leaves everything else untouched

## Push commands

```bash
cd ~/Documents/new-build-bio4-solano
cp "/Users/sharilynrennie/Documents/Claude/Projects/Lecture Slides/_PUSH-TO-GITHUB/BIO-004-stringbug-fix/"*.html .
git add *.html
git status
```

`git status` should show ~34 modified HTML files. Then:

```bash
git commit -m "Fix: script tag was injected inside JS string literal, broke wiring on lecture pages"
git push origin main
```

Wait 2 min, then test in incognito:

https://drsrennie-stack.github.io/new-build-bio4-solano/anatomical-terminology.html

Open dev tools → Console → reload. Should be no red errors. Click the "Draw the anatomical foundations" button — modal should open with the slide deck inside.
