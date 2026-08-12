# Installing the one-door Mastery OS

Read this once before you copy anything. It is short, and step 3 is the one
that protects your cards.

---

## What changed, in one paragraph

Your cards were spread across fifteen files. Mastery OS held the map of which
competency each card belonged to but held no cards at all, so it linked out to a
separate recall page, and that page read only two of the fifteen files. Ten
files were loaded by nothing. All of it is now one bank, loaded inside Mastery
OS, and the separate pages redirect there.

**Reachable before: 2,248 cards. Reachable now: 4,756.** Nothing was deleted.

---

## The rule that keeps your cards safe

> **Never add a `<script src="...cards.js">` tag to a page.**

That is the whole rule. Here is why it matters.

Two of your old card files, `course-content-tagged.js` and `recall-rx-cards.js`,
each begin with:

```js
window.BIO004_COURSE_CONTENT = { ... }
```

That is a plain assignment, not an addition. If both are on the same page, the
second one to load **erases every card from the first**. Silently. No error, no
warning, just 2,020 cards gone and a page that still looks fine.

`bio004-card-bank.js` cannot do that. It ends with:

```js
if (!window.BIO004_COURSE_CONTENT) {
  window.BIO004_COURSE_CONTENT = window.BIO004_CARD_BANK;
}
```

It only fills the slot if the slot is empty. So the bank can be loaded anywhere,
in any order, next to anything, and it will never overwrite. The load-order trap
is gone as long as you do not re-add the old files.

---

## Step 1. Copy these files in

New files, they do not exist in your repo yet:

- `bio004-card-bank.js` — the merged bank, 4,756 cards, 2.3 MB
- `recall-view.js` — the recall engine that runs inside Mastery OS

Updated files, they replace what is there:

- `mastery-os-fall-2026.html` — your newest build, plus the Recall section
- `mastery-os-fall-2026-instructor.html`
- `mastery-canvas.html` — your newest build
- `bio004-dock.js`

Now redirects, they replace the old apps:

- `bio004-spaced-recall.html`
- `bio004-spaced-recall-weakness-dashboard.html`
- `card-gap-finder.html`
- `bio004-draw.html`

Plus 104 content pages whose links were repointed, and `sw.js`.

**Do not delete the fifteen original card files.** They are the source the bank
is generated from. Nothing loads them any more, so they cost you nothing sitting
there, and you will want them the next time you add cards.

## Step 2. Check it worked

Open `mastery-os-fall-2026.html`. You should see **Recall** in the section nav,
between Weaknesses and Self-Tutoring. Click it. You should get four counters
across the top, then a question with three buttons asking how sure you are.

If instead you see "The card bank did not load", then `bio004-card-bank.js` is
missing or is loading after `recall-view.js`. Both script tags are already in
the file in the right order, so this only happens if a copy went wrong.

## Step 3. Never do these three things

1. **Do not add old card files to any page.** Covered above. This is the one
   that costs you 2,000 cards.
2. **Do not hand-edit `bio004-card-bank.js`.** It is generated. Your edit will
   be wiped the next time it is regenerated, and the file says so at the top.
3. **Do not delete the source decks** to tidy up. They are the only copy of the
   card text that is not generated.

---

## When you want to add or change cards

Edit the source deck, not the bank. The decks are:

```
course-content-tagged.js      recall-rx-cards.js
heart-cards.js                heart-cards-part2.js
heart-cards-part3.js          bio004-heart-cards.js
bio004-w3-bvresp-cards.js     bio004-w4-cards.js
bio004-w5-cards.js            bio004-w6-cards.js
bio004-w7-cards.js            bio004-w8-cards.js
dok3-explain-why.js           gap-cards.js
```

Then ask me to regenerate the bank, or run the generator yourself. Every card in
the bank carries a `src` field naming the deck it came from, so you can always
trace one back.

---

## Two things worth knowing

**Seventy-nine of your cards were never landing, and now they do.**
`dok3-explain-why.js` and `gap-cards.js` do not define cards, they inject them
into topics by topic id. Nine of the ids they look for had been renamed or split
when the bank was reorganised, so 79 written cards were dropped on every page
load, silently, with no error. They were not missing content, just stale
addresses. The rename table is applied at generation time:

| The old id | Where those cards live now |
|---|---|
| `t-muscle-structure` | `t-muscle-microanatomy` |
| `t-muscle-fascicles` | `t-muscle-gross` |
| `t-lymphatic-system` | `t-lymph-overview-vessels` |
| `t-cns-brain`, `t-cns-spinal-cord` | `t-cns-brain-spinal-cord` |
| `t-cns-brainstem` | `t-w7-brainstem-regions` |
| `t-cranial-nerves` | `t-w8-cranial-nerves` |
| `t-nerve-plexuses` | `t-pns` |
| `t-blood` | split five ways, each card routed on its own subject |

One wrinkle worth recording, in case it ever bites again. The two files inject
differently. `dok3-explain-why.js` pushes into the topic's card array, which
mutates it in place. `gap-cards.js` does `t.cards = t.cards.concat(...)`, which
replaces the array instead. The generator handles both, but if you write a new
injection file, push rather than reassign.

**Your two Mastery OS builds had a CSS bug I fixed.** A find-and-replace at some
point ate two commas. `.g2.g3.g4` should have been `.g2,.g3,.g4`, which meant
the mobile breakpoint matched no element and two, three and four column grids
never collapsed on a phone. And `.field input.field textarea` should have been
`.field input,.field textarea`, which left every form field in the app unstyled,
including its focus ring. Both repaired in the student and instructor builds.

---

## What a student sees now

One tile in the dock: **Mastery OS**. Under it, a second tile, **Recall cards**,
that skips the front page and drops them straight into what is due today.

The pre-work sequence still reads sheet, then video, then test yourself. What
changed is where step 3 lands. It used to open the Mastery OS front page and
leave them to find the cards. On all seventeen week pages and the calendar it
now opens the cards directly.

And the four old apps are not dead ends. Any bookmark a student saved still
works, it just arrives inside Mastery OS.

Dr. Sharilyn Rennie
