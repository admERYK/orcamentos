
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("carvalho-orcamentos-cache").then((cache) => {
      return cache.addAll([
        "/orcamentos/",
        "/orcamentos/index.html",
        "/orcamentos/icon-192.png",
        "/orcamentos/icon-512.png",
        "/orcamentos/manifest.json",
        "/orcamentos/qr_pix_cortado.png",
        "/orcamentos/1001398390.png"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
