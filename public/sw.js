const CACHE_NAME = 'pedbox-v3';

// Assets to pre-cache on install (static shell)
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/offline.html',
];

// ── Install: pre-cache shell ──────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: remove old caches ───────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: strategy by request type ──────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignore non-GET and cross-origin API/auth requests
  if (request.method !== 'GET') return;
  if (url.pathname.startsWith('/api/') || url.hostname !== self.location.hostname) {
    // Network-first for API; serve stale on failure (enables offline data)
    if (url.pathname.startsWith('/api/')) {
      event.respondWith(networkFirstWithCache(request));
    }
    return;
  }

  // Cache-first for static assets (JS/CSS/images/fonts)
  if (/\.(js|css|png|jpg|jpeg|svg|gif|webp|woff2?|ico)(\?.*)?$/.test(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Network-first for HTML navigation — fall back to cached /index.html
  event.respondWith(networkFirstWithFallback(request));
});

// ── Strategies ────────────────────────────────────────────────────────────

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('', { status: 408 });
  }
}

async function networkFirstWithFallback(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    // Fall back to app shell for SPA navigation
    const shell = await caches.match('/index.html');
    return shell || new Response('Offline', { status: 503 });
  }
}

async function networkFirstWithCache(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    return Response.json({ error: 'offline', data: [] }, { status: 503 });
  }
}
