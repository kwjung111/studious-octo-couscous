importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);


self.addEventListener("push", (event) => {
    const payload = JSON.parse(event.data.text());
    event.waitUntil(
      registration.showNotification(payload.title, {
        body: payload.body,
        data: { link: payload.link },
      })
    );
  });
  self.addEventListener("notificationclick", (event) => {
    clients.openWindow(event.notification.data.link);
  });
  self.addEventListener("install", () => {
    self.skipWaiting();
  });