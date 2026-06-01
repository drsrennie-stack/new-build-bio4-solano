# BIO 004 — Canvas lock fix (Apple Pencil + iPad select-while-drawing)

Applies the touch-event lock to every slide deck that has a drawable canvas. Fixes the bug where drawing with Apple Pencil or finger on iPad would trigger text selection and mess up writing.

## What changed in each file

Two patches per file:

1. **CSS lock** added to `.canvas-col`, `.canvas-wrap`, and `.draw-canvas`:
   - `touch-action: none`
   - `-webkit-user-select: none; user-select: none`
   - `-webkit-touch-callout: none`
   - `overscroll-behavior: contain`
   - `-webkit-user-drag: none` (canvas only)
   - Marker comment `/* canvas-lock-v1 */` so future passes can detect it
2. **JS handlers** added on each canvas, all calling `preventDefault()`:
   - `touchstart`, `touchmove` (with `{passive: false}`) — **stylus-aware**: skips preventDefault when the touch is from Apple Pencil so the Pencil's pointer events still fire (otherwise pencil drawing breaks on iPad Safari)
   - `gesturestart`
   - `contextmenu`

No visual or layout changes. Existing drawing, undo, eraser, save, and image-import behavior is untouched.

## Files (28)

All 28 slide decks in BIO-004-Solano-Anatomy/ that contain a canvas. Full list in the folder.

## Push

```bash
cd ~/Documents/new-build-bio4-solano
cp "/Users/sharilynrennie/Documents/Claude/Projects/Lecture Slides/_PUSH-TO-GITHUB/BIO-004-canvas-lock-fix/"slides-*.html .
git add slides-*.html
git commit -m "Canvas lock: prevent iPad text-selection while drawing on slide canvases"
git push origin main
```

After push + 2 min, on iPad:

1. Reload any slide deck with a canvas.
2. Draw with Apple Pencil. No more highlighting/selecting nearby text.
3. **Also** turn off iPad Settings → Apple Pencil → Scribble for full coverage.

## Cleanup tip

After you confirm the fix is live, delete this folder to keep `_PUSH-TO-GITHUB/` tidy.
