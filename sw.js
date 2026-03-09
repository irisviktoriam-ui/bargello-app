const CACHE_NAME = 'bargello-v1';
const FILES = [
  '/bargello-app/',
  '/bargello-app/index.html',
  '/bargello-app/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
