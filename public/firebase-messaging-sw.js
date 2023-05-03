importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js');
importScripts(
  "https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging.js"
)
// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

firebase.InitializeApp({
  apiKey: "AIzaSyArhZhxCJQfiSlAmmyjlIoyq_P49DjAec0",
  authDomain: "pushtest-e752a.firebaseapp.com",
  projectId: "pushtest-e752a",
  storageBucket: "pushtest-e752a.appspot.com",
  messagingSenderId: "589795514448",
  appId: "1:589795514448:web:44cdd5cbed32ce5267d955",
  measurementId: "G-ESRYTC2FZK"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});