# BIO 004 Course Site — Work Handoff

**Date:** May 25, 2026
**Project folder:** BIOL OO4 Content
**Repo:** drsrennie-stack/new-build-bio4-solano
**Live site:** https://drsrennie-stack.github.io/new-build-bio4-solano/

## What this project is

BIO 004 Human Anatomy, Solano Community College. 8-week summer 2026 intensive, in-person, Team-Based Learning. A hub-and-spoke static course website built in the "cream" design language (adapted from the MedMasters marketing site, with all MedMasters wording removed).

## Design system (apply to every page)

- Palette: navy #0B1530, near-black #060A18, rust #8B3A2E (hover #A0452F), terra cotta #C2734D, gold #C9A14A, cream #F5F1E8, white #FFFFFF, border #8C90A0
- Font: Plus Jakarta Sans
- Accent rule: rust accents on light sections; on dark sections, gold eyebrows plus terra cotta (#C2734D) for accent words and numbers
- WCAG 2.2 AA minimum; iframe height-sender script before the closing body tag; target="_top" on internal links
- No em dashes anywhere. Student-facing byline: "Dr. Sharilyn Rennie" (no credential suffix)

## Done so far

- index.html (course home) and week-1.html through week-8.html (week hub pages)
- anatomical-terminology.html — first concept page redesigned to the cream design (this is the approved template for the rest)
- 8 lab sprint MASTER pages: week-1-lab-sprints.html through week-8-lab-sprints.html. Each is a card grid that links out to per-topic lab sprint pages.
- 404.html, prework.html recolored, compliance-notes.md

## What we're doing right now — two active tasks

### Task 1 — Anatomical terminology LAB SPRINT ID page

The concept page (anatomical-terminology.html) already has a Regional Terms vocabulary list. That is the teaching HTML and it stays as is. Separately, students need to PRACTICE identifying body regions, and that ID practice belongs on the lab sprint page, not the concept page.

Build: **anatomical-terminology-lab-sprint.html** — a per-topic lab sprint page. It does not exist yet; it is linked from week-1-lab-sprints.html. The anatomical terminology lab sprint covers regional landmarks, directional terms, and body planes (57 structures total).

Source material: 5 labeled body diagrams (anterior and posterior views). Exact regional terms to use for ID:

**Anterior (head to toe):** Cranial/Cephalic, Frontal, Orbital/Ocular, Nasal, Buccal, Oris/Oral, Mental, Cervical, Acromial, Deltoid, Axillary, Brachial, Mammary, Sternal, Antecubital, Abdominal, Antebrachial, Umbilical, Carpal, Coxal, Pelvic, Pubic, Inguinal, Pollex (thumb), Digital (fingers), Femoral, Patellar, Crural, Fibular, Tarsal, Plantar, Digital (toes), Hallux (big toe)

**Posterior (head to toe):** Occipital, Cranial/Cephalic, Cervical, Scapular, Vertebral, Lumbar, Sacral, Gluteal, Femoral, Popliteal, Sural, Tarsal, Calcaneal

Note: the 5 diagrams were pasted into chat, not uploaded as files, so they cannot be embedded directly. To use the actual photos, add them to the repo. Otherwise the page is built from the transcribed term set (and/or drawn diagrams).

### Task 2 — Place cell images into HTML pages

Three image files were uploaded to the GitHub repo:

- "Images for atlas.023.jpeg" — labeled cell model
- "Images for atlas.024.jpeg" — labeled cell model
- Khan Academy cell membrane image (filename ends "Khan Academy-Cell membrane.png")

These need to be placed into the relevant cell HTML pages. The project currently has cell-anatomy.html. Still to confirm: the exact filenames, which page each image goes on, and where in the page.

## Still pending (broader)

- 36 remaining concept pages still in the old navy design — redesign to the cream design (use anatomical-terminology.html as the template)
- Build the remaining per-topic lab sprint pages (body cavities, tissues, integumentary, then weeks 2 through 8)
- Push all new and updated files to GitHub

## Exam structure (context)

45% lab exams, 45% weekly TBL, 5% cumulative lecture final, 5% end-of-day lab quizzes. Lab exams are fill-in-the-blank ID on histology, microscope slides, models, and cadaver.
