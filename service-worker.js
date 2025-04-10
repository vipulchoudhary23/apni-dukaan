const CACHE_NAME = 'apni-dukaan-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',       // Replace with actual paths
  '/js/script.js',        // Replace with actual paths
  '/images/logo.png'      // Add relevant files to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
