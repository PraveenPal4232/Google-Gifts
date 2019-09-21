if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/Google-Gifts/js/sw.js').then(function(registration) {
        // Registration was successful
        console.log('Hello Folks! I am Praveen and good to see you.', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }