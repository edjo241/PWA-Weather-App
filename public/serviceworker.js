const  CACHE_NAME="version-1";
const  UrlsToCache=['index.html','offline.html'];

const self=this;

//Install SW

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            console.log('Opened Cache');
            return cache.addAll(UrlsToCache);
        })
    )
})

//Listen for request

self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
        .then(()=>{
            return fetch(event.request)
            .catch(()=> caches.match('offline.html'))
        })
    )
})

//Activate SW

self.addEventListener('activate',(event)=>{
    const cacheWhitelist=[];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
            Promise.all(
                cacheNames.map((cacheName)=>{
                    if(!cacheWhitelist.includes(cacheName)){
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})