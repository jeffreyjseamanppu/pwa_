self.addEventListener("install", e => {
      //console.log("Install decode");
      //Test
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["../PWA", "../PWA/src/master.css", "../PWA/images/logo192.png"]);
        })
    )
});

self.addEventListener("fetch", e => {
    console.log(`Intercepting fetch request for : ${e.request.url}`);
});