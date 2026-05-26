const CACHE_NAME = 'coro-mcle-v2'; // <--- Cambiado de v1 a v2
const ASSETS = [
  'index.html',
  'cantos.txt',
  'icono-coro.png', // <--- Asegúrate de que esté listado aquí el icono
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdn.jsdelivr.net/gh/gitbrent/pptxgenjs@3.12.0/dist/pptxgen.bundle.js'
];

// El resto del archivo se queda exactamente igual...
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});