// Service Worker para Calculadora de Infusión Médica
const CACHE_NAME = 'infusion-calc-v1';
const urlsToCache = [
  './infusion_calculadora.html',
  './manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar requests para funcionar offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devolver desde cache si existe
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Manejar notificaciones push (para futuras mejoras)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Notificación de infusión',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    vibrate: [800, 300, 800, 300, 1200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver detalles',
        icon: 'icon-192.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: 'icon-192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('🏥 Infusión Médica', options)
  );
});

// Manejar clicks en notificaciones
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    // Abrir o enfocar la aplicación
    event.waitUntil(
      clients.matchAll().then(clientList => {
        if (clientList.length > 0) {
          return clientList[0].focus();
        }
        return clients.openWindow('./infusion_calculadora.html');
      })
    );
  }
});

// Manejar mensajes desde la aplicación principal
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, body, delay } = event.data;
    
    setTimeout(() => {
      self.registration.showNotification(title, {
        body: body,
        icon: 'icon-192.png',
        badge: 'icon-192.png',
        vibrate: [800, 300, 800, 300, 1200, 500, 800, 300, 1500],
        requireInteraction: true,
        persistent: true,
        data: {
          timestamp: Date.now()
        }
      });
    }, delay);
  }
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});