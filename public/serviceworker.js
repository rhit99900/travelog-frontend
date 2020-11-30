const { cache } = require("npm")

let CACHE_NAME = 'travelog-pwa-manager'
let urlsToCache = [
  '/',
  '/login',
  '/register'
]


// Installing Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache){
        console.log('Opened Cache')
        return cache.addAll(urlsToCache)
      })
  )
})

// Cache and Return Requests 
self.addEventListener('fetch',event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response){
        // Cache History, return response 
        if(response){
          return response;
        }
        return fetch(event.request)
      })
  )
})


// Update a service worker 
self.addEventListener('activate',event => {
  let cacheWhiteList = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if(cacheWhiteList.indexOf(cacheName) === -1){
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})