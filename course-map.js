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
      { key: "slides", label: "Slides", group: [
          { label: "Accessible PPT", slot: "ppt",    bg: "#A0452F", fg: "#FFFFFF" },
          { label: "HTML",           slot: "slides", bg: "#8B3A2E", fg: "#FFFFFF" }
      ] },
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
        notes:  [{ label: "Notes", url: HUB + "week-1-notes.html#language-of-anatomy" }],
        videos: [{ label: "Concept videos", url: HUB + "week1-concept-videos.html" }],
        slides: [{ label: "HTML", url: DECK + "foundations-human-anatomy.html" }],
        ppt:    [{ label: "Accessible PPT", url: DECK + "Foundations-Human-Anatomy.pptx" }],
        recall: RECALL
      },
      cell: {
        title: "The Cell",
        notes:  [{ label: "Notes", url: HUB + "week-1-notes.html#cell" }],
        videos: [{ label: "Concept videos", url: HUB + "cell-concept-videos.html" }],
        slides: [{ label: "HTML", url: DECK + "cell-anatomy-histology.html" }],
        ppt:    [{ label: "Accessible PPT", url: DECK + "The-Cell-Anatomy-and-Histology.pptx" }],
        recall: RECALL
      },
      tissues: {
        title: "Tissues & Histology",
        notes:  [{ label: "Notes", url: HUB + "week-1-notes.html#tissues" }],
        videos: [{ label: "Concept videos", url: HUB + "tissues-concept-videos.html" }],
        slides: [{ label: "HTML", url: DECK + "tissues-histology.html" }],
        ppt:    [{ label: "Accessible PPT", pending: true }],
        recall: RECALL
      },
      integumentary: {
        title: "Integumentary",
        notes:  [{ label: "Notes", url: HUB + "week-1-notes.html#integumentary" }],
        videos: [{ label: "Concept videos", url: HUB + "integumentary-concept-videos.html" }],
        slides: [{ label: "HTML", url: DECK + "integumentary-anatomy-histology.html" }],
        ppt:    [{ label: "Accessible PPT", pending: true }],
        recall: RECALL
      }
    }
  };
})(window);
