/* course-map.js — single source of truth for BIO 004 Week 1 resources.
   Per topic: notes, videos, slides (HTML), ppt (accessible PowerPoint), recall.
   The Blue Lab Card is week-level: Lab Sprint + Atlas Canvas + Digital Atlas. */
(function (w) {
  var HUB = "https://drsrennie-stack.github.io/new-build-bio4-solano/";
  var DECK = "https://drsrennie-stack.github.io/A-P-lecture-core/";
  var RECALL = [{ label: "Recall Rx", url: HUB + "bio004-spaced-recall.html" }];

  w.COURSE_MAP = {
    /* the daily connection: Notes -> Concept Videos -> Slides (PPT / HTML) -> Recall Rx */
    path: [
      { key: "notes",  label: "Notes",          slot: "notes",  bg: "#C9A14A", fg: "#0B1530" },
      { key: "videos", label: "Concept videos", slot: "videos", bg: "#C2734D", fg: "#0B1530" },
      { key: "recall", label: "Recall Rx",       slot: "recall", bg: "#0B1530", fg: "#FFFFFF" }
    ],
    /* week-level Blue Lab Card */
    weekLab: {
      sprintBase:  HUB + "week-{N}-lab-sprints.html",
      sprintLabel: "Lab Sprint",
      canvas:  { label: "Atlas Canvas", url: HUB + "atlas-coloring-book.html" },
      digital: { label: "Digital Atlas", url: "https://share.articulate.com/UOHEe3p6DmTC4nXuUTE02", external: true }
    },
    topics: {
      foundations: {
        title: "Foundations",
        notes:  [{ label: "Notes", url: HUB + "BIO004-Week1-Notes.pdf#page=3" }],
        videos: [{ label: "Concept videos", url: HUB + "week1-concept-videos.html" }],
        slides: [{ label: "HTML", url: DECK + "foundations-human-anatomy.html" }],
        ppt:    [{ label: "Accessible PPT", url: DECK + "Foundations-Human-Anatomy.pptx" }],
        recall: RECALL
      },
      cell: {
        title: "The Cell",
        notes:  [{ label: "Notes", url: HUB + "BIO004-Week1-Notes.pdf#page=11" }],
        videos: [{ label: "Concept videos", url: HUB + "cell-concept-videos.html" }],
        slides: [{ label: "HTML", url: DECK + "cell-anatomy-histology.html" }],
        ppt:    [{ label: "Accessible PPT", url: DECK + "The-Cell-Anatomy-and-Histology.pptx" }],
        recall: RECALL
      },
      tissues: {
        title: "Tissues & Histology",
        notes:  [{ label: "Notes", url: HUB + "BIO004-Week1-Notes.pdf#page=14" }],
        videos: [{ label: "Concept videos", url: HUB + "tissues-concept-videos.html" }],
        slides: [{ label: "HTML", url: DECK + "tissues-histology.html" }],
        ppt:    [{ label: "Accessible PPT", pending: true }],
        recall: RECALL
      },
      integumentary: {
        title: "Integumentary",
        notes:  [{ label: "Notes", url: HUB + "BIO004-Week1-Notes.pdf#page=19" }],
        videos: [{ label: "Concept videos", url: HUB + "integumentary-concept-videos.html" }],
        slides: [{ label: "HTML", url: DECK + "integumentary-anatomy-histology.html" }],
        ppt:    [{ label: "Accessible PPT", pending: true }],
        recall: RECALL
      },
      bone: {
        title: "Bone Tissue",
        notes:  [{ label: "Notes", url: HUB + "bone-histology.html" }],
        videos: [{ label: "Concept videos", url: HUB + "bone-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-bone-tissue.html" }],
        ppt:    [{ label: "Accessible PPT", pending: true }],
        recall: RECALL
      },
      axial: {
        title: "Axial Skeleton",
        notes:  [{ label: "Notes", url: HUB + "axial-skeleton-skull.html" }],
        videos: [{ label: "Concept videos", url: HUB + "axial-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-axial-skeleton.html" }],
        ppt:    [{ label: "Accessible PPT", pending: true }],
        recall: RECALL
      },
      appendicular: {
        title: "Appendicular Skeleton",
        notes:  [{ label: "Notes", url: HUB + "appendicular-skeleton-upper.html" }],
        videos: [{ label: "Concept videos", url: HUB + "appendicular-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-appendicular-skeleton.html" }],
        ppt:    [{ label: "Accessible PPT", pending: true }],
        recall: RECALL
      },
      joints: {
        title: "Joints & Articulations",
        notes:  [{ label: "Notes", url: HUB + "articulations.html" }],
        videos: [{ label: "Concept videos", url: HUB + "joints-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-joints.html" }],
        ppt:    [{ label: "Accessible PPT", pending: true }],
        recall: RECALL
      },
      "heart": {
        title: "The Heart",
        notes:  [{ label: "Notes", url: HUB + "heart.html" }],
        videos: [{ label: "Concept videos", url: HUB + "heart-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-heart-anatomy.html" }],
        recall: RECALL
      },
      "cardiac-conduction": {
        title: "Cardiac Conduction",
        notes:  [{ label: "Notes", url: HUB + "cardiac-conduction.html" }],
        videos: [{ label: "Concept videos", url: HUB + "cardiac-conduction-concept-videos.html" }],
        recall: RECALL
      },
      "blood-vessels": {
        title: "Blood Vessels",
        notes:  [{ label: "Notes", url: HUB + "blood-vessels.html" }],
        videos: [{ label: "Concept videos", url: HUB + "blood-vessels-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-blood-vessels.html" }],
        recall: RECALL
      },
      "respiratory": {
        title: "Respiratory System",
        notes:  [{ label: "Notes", url: HUB + "respiratory.html" }],
        videos: [{ label: "Concept videos", url: HUB + "respiratory-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-respiratory-anatomy.html" }],
        recall: RECALL
      },
      "muscle-structure": {
        title: "Muscle Structure",
        notes:  [{ label: "Notes", url: HUB + "muscle-structure.html" }],
        videos: [{ label: "Concept videos", url: HUB + "muscle-structure-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-muscle-microanatomy.html" }],
        recall: RECALL
      },
      "muscle-fascicles": {
        title: "Muscle Fascicles & Levers",
        notes:  [{ label: "Notes", url: HUB + "muscle-fascicles.html" }],
        videos: [{ label: "Concept videos", url: HUB + "muscle-fascicles-concept-videos.html" }],
        recall: RECALL
      },
      "lymphatic": {
        title: "Lymphatic System",
        notes:  [{ label: "Notes", url: HUB + "lymphatic-system.html" }],
        videos: [{ label: "Concept videos", url: HUB + "lymphatic-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-lymphatic-innate-immunity.html" }],
        recall: RECALL
      },
      "blood": {
        title: "Blood",
        notes:  [{ label: "Notes", url: HUB + "blood.html" }],
        videos: [{ label: "Concept videos", url: HUB + "blood-concept-videos.html" }],
        recall: RECALL
      },
      "alimentary": {
        title: "Alimentary Canal",
        notes:  [{ label: "Notes", url: HUB + "alimentary-canal.html" }],
        videos: [{ label: "Concept videos", url: HUB + "alimentary-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-gi-alimentary-canal.html" }],
        recall: RECALL
      },
      "accessory-digestive": {
        title: "Accessory Digestive Organs",
        notes:  [{ label: "Notes", url: HUB + "accessory-digestive-organs.html" }],
        videos: [{ label: "Concept videos", url: HUB + "accessory-digestive-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-gi-accessory-structures.html" }],
        recall: RECALL
      },
      "urinary": {
        title: "Urinary System",
        notes:  [{ label: "Notes", url: HUB + "urinary-system.html" }],
        videos: [{ label: "Concept videos", url: HUB + "urinary-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-kidney-anatomy-gfr.html" }],
        recall: RECALL
      },
      "reproductive": {
        title: "Reproductive Systems",
        notes:  [{ label: "Notes", url: HUB + "reproductive-male.html" }],
        videos: [{ label: "Concept videos", url: HUB + "reproductive-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-reproductive-systems.html" }],
        recall: RECALL
      },
      "pregnancy": {
        title: "Pregnancy & Birth",
        notes:  [{ label: "Notes", url: HUB + "pregnancy-and-birth.html" }],
        videos: [{ label: "Concept videos", url: HUB + "pregnancy-concept-videos.html" }],
        recall: RECALL
      },
      "endocrine": {
        title: "Endocrine System",
        notes:  [{ label: "Notes", url: HUB + "endocrine.html" }],
        videos: [{ label: "Concept videos", url: HUB + "endocrine-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-endocrine.html" }],
        recall: RECALL
      },
      "brain": {
        title: "The Brain",
        notes:  [{ label: "Notes", url: HUB + "cns-brain.html" }],
        videos: [{ label: "Concept videos", url: HUB + "brain-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-cns-organization.html" }],
        recall: RECALL
      },
      "brainstem": {
        title: "The Brainstem",
        notes:  [{ label: "Notes", url: HUB + "cns-brainstem.html" }],
        videos: [{ label: "Concept videos", url: HUB + "brainstem-concept-videos.html" }],
        recall: RECALL
      },
      "meninges": {
        title: "Meninges & CSF",
        notes:  [{ label: "Notes", url: HUB + "cns-meninges-csf.html" }],
        videos: [{ label: "Concept videos", url: HUB + "meninges-concept-videos.html" }],
        recall: RECALL
      },
      "spinal-cord": {
        title: "Spinal Cord",
        notes:  [{ label: "Notes", url: HUB + "cns-spinal-cord.html" }],
        videos: [{ label: "Concept videos", url: HUB + "spinal-cord-concept-videos.html" }],
        recall: RECALL
      },
      "pns": {
        title: "Peripheral Nervous System",
        notes:  [{ label: "Notes", url: HUB + "pns.html" }],
        videos: [{ label: "Concept videos", url: HUB + "pns-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-pns-autonomic.html" }],
        recall: RECALL
      },
      "cranial-nerves": {
        title: "Cranial Nerves",
        notes:  [{ label: "Notes", url: HUB + "cranial-nerves.html" }],
        videos: [{ label: "Concept videos", url: HUB + "cranial-nerves-concept-videos.html" }],
        recall: RECALL
      },
      "ans": {
        title: "Autonomic Nervous System",
        notes:  [{ label: "Notes", url: HUB + "ans.html" }],
        videos: [{ label: "Concept videos", url: HUB + "ans-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-pns-autonomic.html" }],
        recall: RECALL
      },
      "nervous-tissue": {
        title: "Nervous Tissue",
        notes:  [{ label: "Notes", url: HUB + "nervous-tissue.html" }],
        videos: [{ label: "Concept videos", url: HUB + "nervous-tissue-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-muscle-nervous-tissue.html" }],
        recall: RECALL
      },
      "brain-meninges": {
        title: "Brain, Brainstem & Meninges",
        notes:  [{ label: "Notes", url: HUB + "cns-brain.html" }],
        videos: [{ label: "Concept videos", url: HUB + "brain-meninges-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-cns-organization.html" }],
        recall: RECALL
      },
      "spinal-pns": {
        title: "Cranial Nerves, Spinal Cord & PNS",
        notes:  [{ label: "Notes", url: HUB + "cns-spinal-cord.html" }],
        videos: [{ label: "Concept videos", url: HUB + "spinal-pns-concept-videos.html" }],
        slides: [{ label: "HTML", url: HUB + "slides-pns-autonomic.html" }],
        recall: RECALL
      }
    }
  };
})(window);
