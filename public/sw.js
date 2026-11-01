/**
 * The service worker: what makes "works offline" true.
 *
 * ── Why this exists ────────────────────────────────────────────────────────
 *
 * Offline is the promise the whole platform is built around. The lessons are
 * in the JavaScript bundle, the registries are read synchronously from local
 * storage, the review sync is a cache and an outbox precisely so a school on
 * a bad connection keeps working, and migration after migration argues that
 * nothing in the teaching path may wait on the network.
 *
 * None of that survived closing the tab. With no service worker, a second
 * visit with no connection gets the browser's dinosaur, because the HTML and
 * the scripts themselves have to come from somewhere. The data was offline
 * and the application was not.
 *
 * ── The caching rules, and why each is what it is ──────────────────────────
 *
 * Hashed build assets are cache first, forever. Vite puts a content hash in
 * every filename, so `index-XBRKyNfa.js` can never change meaning: if the
 * content changes the name changes. Revalidating them would be a network
 * round trip to be told what the name already guaranteed.
 *
 * The page itself is network first with a cache fallback. The HTML is the
 * one file whose name never changes, so serving it from cache forever would
 * pin a learner to the version they first visited, including the script tags
 * pointing at assets a deploy has already removed. Network first means a
 * connected learner always gets today's app, and a disconnected one gets the
 * last one that worked.
 *
 * Anything under /api is never cached. A tutor answer is written for one
 * learner and one question, and a cached queue poll would report a job
 * finished that is not.
 *
 * Fonts and the KaTeX stylesheet are cached on first use, because they are
 * loaded from a CDN by `index.html` and without them an offline lesson would
 * render in a fallback font with broken mathematics.
 *
 * ── What is deliberately NOT precached ─────────────────────────────────────
 *
 * The stage chunks. SHS alone is 366 kB gzipped and growing, and precaching
 * every stage on first visit would hand a creche parent the download this
 * app spent a whole commit removing. They are cached when they are used, so
 * a learner ends up with their own stage offline and nobody else's.
 */

const VERSION = 'v1';
const SHELL = `shell-${VERSION}`;
const ASSETS = `assets-${VERSION}`;
const VENDOR = `vendor-${VERSION}`;

/** The least that has to be there for the app to start with no connection. */
const SHELL_FILES = ['/', '/index.html', '/share-card.jpg', '/favicon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    /* Individually, and tolerant of a failure: `addAll` rejects the whole
       install if one file 404s, which would leave the worker never
       installing and the fault invisible. */
    await Promise.all(SHELL_FILES.map(url =>
      cache.add(new Request(url, { cache: 'reload' })).catch(() => {})));
    /* Take over as soon as installed. The alternative is a learner who
       updates the app and keeps the old worker until every tab is closed,
       which on a phone can be weeks. */
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keep = new Set([SHELL, ASSETS, VENDOR]);
    for (const name of await caches.keys()) {
      if (!keep.has(name)) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

/** Build output: hashed, immutable, safe to keep for ever. */
const isBuildAsset = (url) =>
  url.origin === self.location.origin && url.pathname.startsWith('/assets/');

/** The CDN things `index.html` pulls in: fonts and the KaTeX stylesheet. */
const isVendor = (url) =>
  url.hostname === 'fonts.googleapis.com'
  || url.hostname === 'fonts.gstatic.com'
  || url.hostname === 'cdn.jsdelivr.net';

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request);
  if (hit) return hit;
  const res = await fetch(request);
  /* An opaque response from a CDN has status 0 and cannot be inspected, and
     caching one is still worth it: it is what makes the font work offline.
     A real error is not cached, or the next visit would serve the error. */
  if (res && (res.ok || res.type === 'opaque')) {
    cache.put(request, res.clone()).catch(() => {});
  }
  return res;
}

async function pageOrCache(request) {
  try {
    const res = await fetch(request);
    if (res && res.ok) {
      const cache = await caches.open(SHELL);
      cache.put('/index.html', res.clone()).catch(() => {});
    }
    return res;
  } catch {
    const cache = await caches.open(SHELL);
    /* Any address inside the app resolves to the one page, because this is a
       single page application and the router decides from there. Without
       this, a learner offline on /study/course/photosynthesis gets nothing,
       while the same learner on / gets the whole app. */
    return (await cache.match('/index.html'))
      ?? (await cache.match('/'))
      ?? Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  /* Never the API. A tutor answer belongs to one learner and one question,
     and a cached queue poll would report a job finished that is not. */
  if (url.origin === self.location.origin && url.pathname.startsWith('/api/')) return;

  /* Nor anything going to the database or to storage: those have their own
     freshness rules, and the app already caches what it needs in local
     storage on purpose. */
  if (url.hostname.endsWith('.supabase.co')) return;

  if (request.mode === 'navigate') {
    event.respondWith(pageOrCache(request));
    return;
  }

  if (isBuildAsset(url)) {
    event.respondWith(cacheFirst(request, ASSETS));
    return;
  }

  if (isVendor(url)) {
    event.respondWith(cacheFirst(request, VENDOR));
    return;
  }

  /* Everything else in /public: the narration audio, the games, the icons.
     Cache first, because none of it changes without a deploy, and the
     narration is the part a child without a connection most needs. */
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request, SHELL));
  }
});
