// Asignar nombre y versión de la caché
const CACHE_NAME = 'v1_cache_SaygonHernandezPWA';

// Ficheros a cachear en la aplicación
var urlsToCache = [
    // Lista de recursos a cachear
    './',
    './styles.css',
    './img/favicon.png',
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/facebook.png',
    './img/instagram.png',
    './img/twitter.png',
    './img/favicon-1024.png',
    './img/favicon-512.png',
    './img/favicon-384.png',
    './img/favicon-256.png',
    './img/favicon-192.png',
    './img/favicon-128.png',
    './img/favicon-96.png',
    './img/favicon-64.png',
    './img/favicon-32.png',
    './img/favicon-16.png'
];

// Evento install
// Instalación del Service Worker y guarda en caché los recursos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
            .then(() => {
                self.skipWaiting();
            });
        })
        .catch(err => console.log('No se ha registrado el caché', err))
    );
});

// Evento activate
// Hacer que la aplicación funcione sin conexión
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            // Borrar elementos que no se necesitarán
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        .then(() => {
            // Activar el caché
            self.clients.claim();
        })
    );
});
