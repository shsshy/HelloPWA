var cacheName = 'Hello-PWASC';

var filesToCache = [
'/',
'/index.html',
'/css/style.css',
'/js/main.js',
'/çontactus.html
'/mainpage.html'
];


/* Start the servie worker and cache all of the app's cotent */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cachName).then(function(cache) {
                return cache.addAll(filesToCache);
            })
    );
});



/* Serve cached content when offline */
self.addEventListener('fetch', function(e){

    e.respondWith(
        caches.match(e.request).then
            (function(response){
                return response || fetch(e.request);
            }
        )   
    );
});
