self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // Delete old caches
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.responseWith(fetch(event.request));
  // add/get fetch request to/from caches
});
