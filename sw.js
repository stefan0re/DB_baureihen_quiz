// Service Worker: macht das Quiz offline verfügbar.
// Strategie "Netz zuerst": Online gibt es immer die neueste Version,
// offline wird die zuletzt geladene Version aus dem Cache genommen.
const CACHE = "zugquiz-v2";

const FILES = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "trains.js",
  "manifest.webmanifest",
  "icons/icon-32.png",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "images/000_start.webp",
  "images/001_233.webp",
  "images/002_346.webp",
  "images/003_232.webp",
  "images/004_151.webp",
  "images/005_193.webp",
  "images/006_155.webp",
  "images/007_187.webp",
  "images/008_155.webp",
  "images/009_285.webp",
  "images/010_253.webp",
  "images/011_192.webp",
  "images/012_147.webp",
  "images/013_185.webp",
  "images/014_241.webp",
  "images/015_223.webp",
  "images/016_146.webp",
  "images/017_641.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request, { ignoreSearch: true }).then((hit) => hit || Response.error())
      )
  );
});
