const CACHE_NAME='contagem-pasteis-v2';
const ASSETS=["./", "./index.html", "./manifest.json", "./contagem-pasteis-icon-512.png", "./contagem-pasteis-icon-256.png", "./contagem-pasteis-icon-192.png", "./contagem-pasteis-icon-180.png", "./contagem-pasteis-icon-152.png", "./contagem-pasteis-icon-128.png", "./contagem-pasteis-icon-96.png", "./contagem-pasteis-icon-72.png", "./contagem-pasteis-icon-48.png"];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
