/* Recall Rx service worker.
   Makes the app installable (the browser "Install" option) and lets it work offline.
   Strategy: network first so students always get the newest cards when online,
   falling back to the cached copy when they are offline. */
const CACHE = "recall-rx-v1";
const CORE = [
  "./bio004-spaced-recall.html",
  "./course-content.js",
  "./manifest.webmanifest",
  "./recall-rx-192.png",
  "./recall-rx-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(CORE).catch(function(){}); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return; // ignore fonts CDN etc.
  e.respondWith(
    fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
      return res;
    }).catch(function () {
      return caches.match(req).then(function (r) { return r || caches.match("./bio004-spaced-recall.html"); });
    })
  );
});
