/* study-bar.js — renders an accessible resource bar from COURSE_MAP.
   Usage: <nav data-studybar="integumentary" data-current="videos"></nav>
   data-current is optional and marks the page you are on. */
(function () {
  function injectCSS() {
    if (document.getElementById("sb-css")) return;
    var s = document.createElement("style");
    s.id = "sb-css";
    s.textContent = [
      ".studybar{font-family:'Plus Jakarta Sans',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;margin:0}",
      ".studybar .sb-label{font:700 10px/1 'Plus Jakarta Sans',system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#8B3A2E;margin:0 0 8px}",
      ".studybar ul{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0}",
      ".studybar li{margin:0}",
      ".studybar a.sb-link{display:inline-flex;align-items:center;gap:7px;text-decoration:none;",
      "font-size:13px;font-weight:700;color:#0B1530;background:#fff;border:1px solid #0B1530;",
      "border-radius:999px;padding:8px 14px;transition:background 160ms ease,color 160ms ease}",
      ".studybar a.sb-link:hover{background:#0B1530;color:#fff}",
      ".studybar a.sb-link:focus-visible{outline:3px solid #C9A14A;outline-offset:2px}",
      ".studybar a.sb-deck{border-color:#C9A14A}",
      ".studybar a.sb-deck:hover{background:#C9A14A;color:#0B1530}",
      ".studybar a[aria-current='page']{background:#0B1530;color:#fff;cursor:default}",
      ".studybar .sb-pending{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:700;",
      "color:#5a6573;background:#EDF1F3;border:1px dashed #9aa6b2;border-radius:999px;padding:8px 14px}",
      ".studybar .sb-ico{font-size:12px;line-height:1}",
      "@media(prefers-reduced-motion:reduce){.studybar a.sb-link{transition:none}}"
    ].join("");
    document.head.appendChild(s);
  }

  function build(el) {
    var map = window.COURSE_MAP;
    if (!map) return;
    var key = el.getAttribute("data-studybar");
    var current = el.getAttribute("data-current");
    var topic = map.topics[key];
    if (!topic) { el.hidden = true; return; }

    el.classList.add("studybar");
    el.setAttribute("aria-label", "Study resources for " + topic.title);

    var lab = document.createElement("p");
    lab.className = "sb-label";
    lab.textContent = "Study resources";
    el.appendChild(lab);

    var ul = document.createElement("ul");
    map.order.forEach(function (mod) {
      var items = topic[mod];
      if (!items || !items.length) return;
      items.forEach(function (it) {
        var li = document.createElement("li");
        var icon = '<span class="sb-ico" aria-hidden="true">' + (map.icons[mod] || "") + "</span> ";
        if (it.pending) {
          var sp = document.createElement("span");
          sp.className = "sb-pending";
          sp.innerHTML = icon;
          sp.appendChild(document.createTextNode(it.label + " (coming soon)"));
          li.appendChild(sp);
        } else {
          var a = document.createElement("a");
          a.className = "sb-link" + (/A-P-lecture-core/.test(it.url) ? " sb-deck" : "");
          a.href = it.url;
          a.setAttribute("target", "_top");
          if (/A-P-lecture-core/.test(it.url)) a.setAttribute("rel", "noopener");
          if (current && current === mod) a.setAttribute("aria-current", "page");
          a.innerHTML = icon;
          a.appendChild(document.createTextNode(it.label));
          li.appendChild(a);
        }
        ul.appendChild(li);
      });
    });
    el.appendChild(ul);
  }

  function init() {
    injectCSS();
    var nodes = document.querySelectorAll("[data-studybar]");
    Array.prototype.forEach.call(nodes, build);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
