# One Recall Rx, wired into Mastery OS

Repo root, overwriting. Nothing deleted, including `spaced-recall.html`
and `recall-cards.html` (just no longer linked).

## Files

| File | New or changed |
|---|---|
| `competenciesfall2026.js` | **NEW.** 196 competencies |
| `card-competency-map.js` | **NEW.** 44 card topics to competencies |
| `mastery-os-fall-2026.html` | Overwrites |
| `week-1-hub.html` … `week-17-hub.html` | Overwrite |

## 1. One deck

Mastery OS pointed at `spaced-recall.html` (the 1,110-question bank). Your
hubs pointed at Recall Rx (the 2,020-question bank). Two decks, separate
progress. Mastery OS now points at **Recall Rx**, same as everything else.

## 2. The Recall Rx block is one thing now

It was a white block holding two white cards, so the two decks read as two
unrelated boxes. The container now takes the navy surface (same treatment as
the Lab block) and the two white cards read as the choice inside it.

"Your Deck" also **repointed**, see below.

## 3. A bug I shipped in the last zip, caught and fixed

My first bridge read `card.attempts` and `card.correct`. **Those fields do not
exist.** Recall Rx stores the truth in `history[]`, one entry per attempt. The
bridge would have read zero for every real card and done nothing. It reads
`history[]` now, with attempts/correct kept only as a fallback for imported
state. Re-verified against the real shape:

- 20 of 20 on The Language of Anatomy → 5 Foundations competencies at **100%**
- 10 of 20 on The Heart → 16 cardiovascular competencies at **50%**

## 4. Student-made cards

**Only if they are made inside Recall Rx.**

- Recall Rx's own card maker (`#make`) stores cards in `STATE.personal` with a
  **`topicId`**, in the same `bio004-recall-v2` store. Those answers roll up to
  competencies exactly like yours.
- The standalone `recall-cards.html` stores in **IndexedDB** (`recall-cards-db`).
  Mastery OS and the weak spot board both read localStorage. Nothing made there
  is visible to either.

So "Your Deck" on every hub now points at `bio004-spaced-recall.html#make`
instead of `recall-cards.html`. Same card maker, but the results count.

## 5. The weak spot board

It already reads the right key, `bio004-recall-v2`, and loads
`course-content-tagged.js`. It was working. It was just **linked from nowhere**
in Mastery OS, zero references. It is now an evidence route inside Mastery OS,
so students can actually reach it.
