// service-worker.js

self.addEventListener('install', (event) => {
  console.log('[SW] Service Worker installing...');
  self.skipWaiting(); // Lewati waiting phase (optional)
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Service Worker activated!');
});

self.addEventListener('fetch', (event) => {
  console.log('[SW] Fetching:', event.request.url);
});
