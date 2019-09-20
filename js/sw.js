self.addEventListener('install', function(event) {
    // Perform install steps
    var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
'/',
  '/Google-Gifts/',
  '/Google-Gifts/css/main.css',
  '/Google-Gifts/js/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
  });