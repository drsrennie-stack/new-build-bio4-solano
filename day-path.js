/* day-path.js — daily connection path + week-level Blue Lab Card, from COURSE_MAP.
   <ol data-daypath="integumentary"></ol>  Notes -> Concept Videos -> Slides(PPT/HTML) -> Recall Rx
   <nav data-weeklab="1"></nav>             Lab Sprint, Atlas Canvas, Digital Atlas */
(function () {
  var FONT = "'Plus Jakarta Sans Variable','Plus Jakarta Sans',system-ui,-apple-system,Segoe UI,Roboto,sans-serif";
  function css() {
    if (document.getElementById("dp-css")) return;
    var s = document.createElement("style");
    s.id = "dp-css";
    s.textContent = [
      ".daypath{font-family:" + FONT + ";list-style:none;display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0;padding:0}",
      ".daypath>li{display:flex;align-items:center;gap:6px}",
      ".daypath>li:not(:last-child)::after{content:'\\2192';color:#0B1530;opacity:.45;font-weight:800;font-size:16px;margin-left:2px}",
      ".daypath a.dp-pill{display:inline-flex;align-items:center;text-decoration:none;border-radius:11px;padding:9px 15px;font-size:13.5px;font-weight:800;transition:transform 160ms ease,box-shadow 160ms ease}",
      ".daypath a.dp-pill:hover{transform:translateY(-2px);box-shadow:0 6px 14px rgba(11,21,48,.16)}",
      ".daypath a.dp-pill:focus-visible{outline:3px solid #C9A14A;outline-offset:2px}",
      ".daypath .dp-pending{display:inline-flex;align-items:center;border-radius:11px;padding:9px 15px;font-size:13.5px;font-weight:800;color:#5a6573;background:#EDF1F3;border:1px dashed #9aa6b2}",
      ".weeklab{font-family:" + FONT + ";background:#0B1530;border-radius:10px;padding:16px 18px}",
      ".weeklab .wl-eyebrow{font-weight:700;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#C9A14A;margin:0 0 4px}",
      ".weeklab .wl-sub{font-size:13px;color:#fff;opacity:.8;margin:0 0 12px}",
      ".weeklab ol{list-style:none;display:flex;flex-wrap:wrap;gap:10px;margin:0;padding:0;counter-reset:wl}",
      ".weeklab li{display:flex}",
      ".weeklab a.wl-pill{display:inline-flex;align-items:center;gap:9px;text-decoration:none;font-size:14px;font-weight:800;border-radius:999px;padding:10px 16px;transition:transform 160ms ease}",
      ".weeklab a.wl-pill:hover{transform:translateY(-2px)}",
      ".weeklab a.wl-pill:focus-visible{outline:3px solid #C9A14A;outline-offset:2px}",
      ".weeklab a.wl-pill .n{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:rgba(11,21,48,.18);font-size:11px}",
      "@media(prefers-reduced-motion:reduce){.daypath a.dp-pill,.weeklab a.wl-pill{transition:none}}"
    ].join("");
    document.head.appendChild(s);
  }

  function url(topic, slot) {
    var a = topic[slot];
    return (a && a.length && a[0].url) ? a[0].url : null;
  }
  function pending(topic, slot) {
    var a = topic[slot];
    return !!(a && a.length && a[0].pending);
  }
  function pill(href, bg, fg, label) {
    var a = document.createElement("a");
    a.className = "dp-pill"; a.href = href; a.target = "_top";
    if (/A-P-lecture-core/.test(href)) a.setAttribute("rel", "noopener");
    a.style.background = bg; a.style.color = fg; a.textContent = label;
    return a;
  }

  function buildPath(el, map) {
    var topic = map.topics[el.getAttribute("data-daypath")];
    if (!topic) { el.hidden = true; return; }
    el.classList.add("daypath");
    el.setAttribute("aria-label", "Daily study path for " + topic.title);
    map.path.forEach(function (step) {
      var li = document.createElement("li");
      if (step.group) {
        step.group.forEach(function (sub) {
          if (pending(topic, sub.slot)) {
            var sp = document.createElement("span");
            sp.className = "dp-pending"; sp.textContent = sub.label + " (soon)";
            li.appendChild(sp);
          } else {
            var u = url(topic, sub.slot);
            if (u) li.appendChild(pill(u, sub.bg, sub.fg, sub.label));
          }
        });
        if (!li.childNodes.length) return;
      } else {
        var u = url(topic, step.slot);
        if (!u) return;
        li.appendChild(pill(u, step.bg, step.fg, step.label));
      }
      el.appendChild(li);
    });
  }

  function buildWeekLab(el, map) {
    var wl = map.weekLab; if (!wl) { el.hidden = true; return; }
    var n = el.getAttribute("data-weeklab") || "1";
    el.classList.add("weeklab");
    el.setAttribute("aria-label", "Lab resources for the week");
    var eye = document.createElement("p"); eye.className = "wl-eyebrow"; eye.textContent = "Lab \u00b7 start of the week";
    var sub = document.createElement("p"); sub.className = "wl-sub"; sub.textContent = "Set these up before the week begins.";
    el.appendChild(eye); el.appendChild(sub);
    var ol = document.createElement("ol");
    var sprint = { label: wl.sprintLabel, url: wl.sprintBase.replace("{N}", n) };
    var items = [
      { it: sprint,     bg: "#C9A14A", fg: "#0B1530" },
      { it: wl.canvas,  bg: "#C2734D", fg: "#0B1530" },
      { it: wl.digital, bg: "#FFFFFF", fg: "#0B1530" }
    ];
    items.forEach(function (row, i) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "wl-pill"; a.href = row.it.url;
      if (row.it.external) { a.target = "_blank"; a.setAttribute("rel", "noopener"); } else { a.target = "_top"; }
      a.style.background = row.bg; a.style.color = row.fg;
      a.innerHTML = '<span class="n" aria-hidden="true">' + (i + 1) + "</span>";
      a.appendChild(document.createTextNode(row.it.label));
      li.appendChild(a); ol.appendChild(li);
    });
    el.appendChild(ol);
  }

  function init() {
    var map = window.COURSE_MAP; if (!map) return;
    css();
    Array.prototype.forEach.call(document.querySelectorAll("[data-daypath]"), function (e) { buildPath(e, map); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-weeklab]"), function (e) { buildWeekLab(e, map); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
