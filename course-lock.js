/*
  ============================================================
  BIO 004 HUMAN ANATOMY  ·  WEEK UNLOCK GATE
  ------------------------------------------------------------
  Drop-in date lock for the weekly pages. Each week opens at
  12:01 AM Pacific (PDT, UTC-7) on the SUNDAY before its Monday.
  Week 1 is always open. Any locked week sends the visitor back
  to the course home before the page renders.

  HOW TO USE: paste this ONE line as the FIRST tag inside the
  <head> of every weekly page (week-N.html, week-N-hub.html,
  week-N-lab-sprints.html), so it runs before the body paints:

      <script src="course-lock.js"></script>

  The script reads the week number from the file name (week-2,
  week-3, ...), so no per-page configuration is needed.

  NOTE (honest limit): this is client-side. On a static GitHub
  Pages site it stops normal navigation and direct URL visits
  for anyone running a browser normally, but it cannot stop a
  determined person who disables JavaScript. True enforcement
  needs a server with sign-in (e.g. Canvas).
  ============================================================
*/
(function () {
  "use strict";

  // Unlock instants, written as UTC. 12:01 AM PDT = 07:01 UTC same day.
  // Month is 0-based (5 = June, 6 = July, 7 = August).
  var UNLOCKS = {
    1: 0,                              // always open
    2: Date.UTC(2026, 5, 21, 7, 1),    // Sun Jun 21, 2026
    3: Date.UTC(2026, 5, 28, 7, 1),    // Sun Jun 28, 2026
    4: Date.UTC(2026, 6, 5,  7, 1),    // Sun Jul 5,  2026
    5: Date.UTC(2026, 6, 12, 7, 1),    // Sun Jul 12, 2026
    6: 0,                              // opened early: rest of semester unlocked
    7: 0,                              // opened early: rest of semester unlocked
    8: 0                               // opened early: rest of semester unlocked
  };

  var HOME = "https://drsrennie-stack.github.io/new-build-bio4-solano/index.html";

  // Which week is this page? Read it from the file name: "week-<n>..."
  var file = (location.pathname.split("/").pop() || "").toLowerCase();
  var match = file.match(/week-(\d+)/);
  if (!match) { return; }                    // not a weekly page

  var week = parseInt(match[1], 10);
  var unlock = UNLOCKS[week];

  if (unlock === undefined) { return; }      // unknown week, leave it open
  if (unlock === 0) { return; }              // week 1, always open
  if (Date.now() >= unlock) { return; }      // already unlocked, allow

  // Locked: hide the page immediately, then send them home.
  try { document.documentElement.style.display = "none"; } catch (e) {}
  location.replace(HOME + "?locked=" + week);
})();
