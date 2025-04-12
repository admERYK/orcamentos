self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('orcamento-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './logo.png',
        './qrcode-whatsapp.png',
        './qrcode-pix.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});