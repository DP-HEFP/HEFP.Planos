const CACHE = 'hfp-v4';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Always network-first — never cache HTML
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => fetch('/index.html')));
    return;
  }
  // Network-first for everything
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
