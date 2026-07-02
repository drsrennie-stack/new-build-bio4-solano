# BIO 004 Spaced Recall — Build Folder

Local working copy for the Human Anatomy spaced-recall knowledge graph (BIO 004, Solano). This folder is the source of truth on disk. Push it to GitHub (drsrennie-stack/Solano-Anatomy-) to back it up and, if you want, serve the viewers with GitHub Pages.

## Structure

```
week-1/
  cards/                     All card banks, now uniform 14-column schema
    _original-8col/          Backup of the original 8-column files
    Week1_MASTER_001-500_14col.csv   Consolidated master (all 489 cards)
  viewers/                   Self-contained HTML study apps
```

## Status

- Schema is now uniform. Cards 1–400 were migrated up to the 14-column comprehensive schema and merged with 401–500. One master file holds all 489 cards.
- **Teaching-field pass still owed.** Explanation and Common Misconception are authored for cards 401–500 only. Cards 1–400 (389 of them) have those two columns present but blank, waiting on a teaching pass. Every other field is populated.
- **ID gaps remain.** Cards W1-196–200 and W1-295–300 do not exist (the original uploads were short). These will be closed as Week 1 expands.

## Target: expand Week 1 to 800 cards

Current count 489. Plan is a clean, contiguous W1-001 → W1-800 (800 cards, no gaps), all in the 14-column schema with full teaching fields.

Remaining Week 1 work:
1. Backfill Explanation + Common Misconception on the 389 migrated cards.
2. Author ~311 new cards (fill the 11 ID gaps, then extend), deepening all five Week 1 topics with more DOK 2–3 comparison, clinical, and board-style items.

## Schema (14 columns)
Card ID, Week, System, Module, Topic, Subtopic, Learning Objective, Difficulty, Depth of Knowledge, Question, Answer, Explanation, Common Misconception, Tags

Notes: for Week 1, System mirrors Module and Subtopic mirrors Topic on migrated cards, pending finer tagging. Competency tag reserved for a later pass. Viewers are self-contained with a Kajabi/GitHub Pages height-sender. Student-facing byline: Dr. Sharilyn Rennie.
