# Week 1 Notes-to-Bank Gap Audit

Date: June 19, 2026. Source of truth: `BIO004-Week1-Notes.pdf`. Checked against: the spaced-recall bank (`course-content.js` + `dok3-explain-why.js`), Week 1 module, 192 cards across 5 topics.

## Method (so you can judge it before I run weeks 2 to 8)

1. Extracted a concept inventory from the notes by pulling every defined term out of the notes' definition tables (the left-column term in each row), grouped by the five Week 1 sections.
2. For each term, searched the entire bank (all 37 topics, ~1,400 cards), not just Week 1, recording whether it is tested in its Week 1 topic, only in a later week, or nowhere.
3. Manually reviewed every flagged term, because raw text-presence is a proxy: it can miss a concept taught with different wording, and it can over-credit a short word that appears inside an unrelated one. The list below is after that review.

Limitation to keep in mind: this finds concepts that are *named and defined* in the notes but not *tested* in the bank. It does not yet judge whether a tested concept is tested at sufficient depth. That is a second pass if you want it.

## Headline

Week 1 coverage is strong. Everything conceptually heavy is in the bank: the six levels of organization, anatomical position, all planes and sections, every directional pair, the dorsal and ventral cavities and their subdivisions, serous membranes (parietal and visceral), the four mediastinal compartments, the peritoneum, SADPUCKER and intraperitoneal versus retroperitoneal, the clinical taps (thoracentesis, paracentesis, pericardiocentesis, lumbar puncture), the nine-region and four-quadrant grids and their planes, the generalized cell, plasma membrane components, surface specializations, every membranous and non-membranous organelle, the endomembrane path, the three germ layers, and the four tissue types. A student who masters the Week 1 bank is not missing any of the big ideas.

The gaps are real but narrow, and they cluster in four places.

## Gaps to close (Week 1)

1. **Regional surface terms: 16 of the 44 in your notes are not tested as regional terms.** Tested: 28. Missing as Week 1 surface regions: Cephalic, Orbital, Nasal, Otic, Occipital, Cervical, Thoracic, Mammary, Pelvic, Antebrachial, Manus, Palmar, Fibular, Tarsal, Calcaneal, Pedal. (Some of these words appear in later weeks in a different sense, for example occipital and nasal as skull bones in Week 2, but a student doing the Week 1 regional-terms material would not be tested on them as regions.) This is the largest gap and the one most likely to surface on a practical that points at a body region.

2. **Two of the nine abdominopelvic regions are not tested by name.** The bank tests the hypochondriac, epigastric, hypogastric, umbilical, and lumbar regions, but not the **right iliac (inguinal)** and **left iliac (inguinal)** regions. The nine-region grid is a classic fill-in, so the two missing corners are worth a card each.

3. **Two cell junctions are missing.** The bank tests tight junctions, desmosomes, and gap junctions, but not **adherens junctions** or **hemidesmosomes**, both of which your tissues notes define.

4. **One gland secretion mode is missing.** The bank tests merocrine (eccrine) and apocrine secretion, but not **holocrine** secretion, which your integumentary notes teach as the mode of the sebaceous glands. Minor related item: the notes name dermal **macrophages** as skin immune cells; the bank covers dendritic (Langerhans) cells but "macrophage" only appears in the Week 3 blood topic.

## Recommendation

These close with roughly 20 to 30 new cards, mostly DOK 1 and 2: a handful that drill the untested regional terms, two for the iliac regions, two or three for adherens junctions and hemidesmosomes, and one or two for holocrine secretion and dermal macrophages. They drop straight into the existing bank format (`q`, `a`, `options`, `correctIndex`, `explanation`, with `dok`), so the OS would pick them up with no other change, and the coverage map would then be honest against your notes, not just against the bank.

## Your call

1. Does this method look right to you? If yes, I will run the same audit on Weeks 2 to 8 and give you one combined gap list.
2. Do you want me to draft the Week 1 gap-closing cards now, in the bank format, for your review?

Reviewer: Dr. Sharilyn Rennie.

---

## Status: CLOSED (June 19, 2026)

All card-worthy Week 1 gaps are closed in `gap-cards.js` (8 cards: the two iliac regions, adherens junction, hemidesmosome, desmosome-vs-hemidesmosome, holocrine secretion, merocrine-vs-holocrine, dermal macrophage). Surface regional terms are routed to the lab sprints and Match-up. `gap-cards.js` is loaded by mastery-os_3.html, gauntlet.html, and reps.html.
