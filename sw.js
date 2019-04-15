
const cacheName = `castilloandres.com`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/about.html',
        '/projects.html',
        '/assets/js/main.js',
        '/images/blog/mobile-friendly/bad-font-size.png',
        '/assets/js/jquery.min.js',
        '/assets/js/jquery.scrollex.min.js',
        '/assets/js/jquery.scrolly.min.js',
        '/assets/js/skel.min.js',
        '/assets/js/util.js',
        '/assets/css/main.css',
        '/assets/css/font-awesome.min.css',
        '/images/banner.jpg',
        '/images/favicon.png'
       ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
