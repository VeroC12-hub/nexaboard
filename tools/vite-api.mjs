// tools/vite-api.mjs
// Serves the api/ folder during `npm run dev`.
//
// Vercel runs those files as functions in production, but the dev server knows
// nothing about them, so without this the tutor can only be tried on a
// deployment. That is a slow way to find out that a prompt reads badly.
//
// Each request imports the handler fresh, so editing a handler and asking
// again shows the new behaviour without restarting anything.
//
// That used to be claimed for api/prompt.js too, and was false: a static
// `import ... from './prompt.js'` inside a handler resolves to Node's cached
// copy however the handler itself was imported, so prompt edits appeared to
// have no effect. `tools/api-loader.mjs` fixes it by making the cache busting
// query inherit down the local import graph, and explains it at length. The handlers are
// written to Vercel's shape, which is Node's req and res plus a parsed body and
// res.status().json(), so the small amount of shimming happens here.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { register } from 'node:module';
import dotenv from 'dotenv';

/* Makes the per request cache busting query below reach the modules a handler
   imports, not just the handler. Registered once, at module load. */
register('./api-loader.mjs', import.meta.url);

const API_DIR = path.resolve('api');
/** Where tools/video-render.mjs writes finished lesson videos. */
const RENDERS = path.resolve('.renders');

/** Vercel parses a JSON body for you, so the handlers expect that too. */
function readBody(req) {
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (d) => { raw += d; });
    req.on('end', () => {
      if (!raw) { resolve({}); return; }
      try { resolve(JSON.parse(raw)); } catch (e) { resolve(raw); }
    });
  });
}

/**
 * Put .env into process.env, for the handlers rather than for the browser.
 *
 * This was missing, and the effect was larger than it sounds: EVERY server side
 * route returned 501 in development. `api/queue.js`, `api/tutor.js`,
 * `api/render.js` and `api/signup.js` all read `process.env.SUPABASE_URL` and
 * friends, and Vite does not put them there. It reads .env only to expose the
 * `VITE_` prefixed ones to client code through `import.meta.env`, which is
 * exactly the set the handlers do not use.
 *
 * So the whole free tutor route, the thing this plugin's own header says it
 * exists to make testable without a deployment, answered
 *
 *   "No tutor is configured for this deployment"
 *
 * on every local request, and had done since it was written. Anybody reading
 * that message would go looking for a missing key rather than a missing four
 * lines here.
 *
 * Dev only: this plugin has no production counterpart, because on Vercel the
 * environment comes from the project settings.
 */
let envLoaded = false;

function loadEnv() {
  if (envLoaded) return;
  envLoaded = true;

  const file = path.resolve('.env');
  if (!fs.existsSync(file)) {
    console.log('[api] no .env file, so server side routes will report 501');
    return;
  }

  /* `override` is deliberately left off. A variable already exported in the
     shell is the more specific instruction and should win over a file. */
  const { error } = dotenv.config({ path: file });
  if (error) {
    console.log('[api] .env could not be read:', error.message);
    return;
  }

  /* Names only, never values. This file holds the service key and an
     ElevenLabs key, and a terminal log is a place secrets leak from. */
  const needed = ['SUPABASE_URL', 'SUPABASE_SERVICE_KEY'];
  const optional = ['EDU_WORKER_SECRET', 'OPENAI_API_KEY', 'FAL_KEY'];
  const missing = needed.filter((k) => !process.env[k]);
  if (missing.length) {
    console.log('[api] .env loaded, but still missing: ' + missing.join(', '));
  } else {
    const have = optional.filter((k) => process.env[k]);
    console.log('[api] .env loaded; renderer=' + (process.env.EDU_RENDERER || 'unset')
      + (have.length ? ', also set: ' + have.join(', ') : ''));
  }
}

export default function viteApi() {
  return {
    name: 'nexaedu-api',
    configureServer(server) {
      loadEnv();
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';

        /**
         * The rendered videos.
         *
         * Served here in development only. In production these belong in
         * Supabase Storage, because a Vercel function has no disk to keep them
         * on and the worker that made them is somebody's laptop.
         *
         * Range requests are handled because a <video> element asks for them,
         * and without them seeking does not work and Safari will not play at
         * all.
         */
        if (url.startsWith('/renders/')) {
          const name = decodeURIComponent(url.slice('/renders/'.length).split('?')[0]);
          /* No traversal: the name must be a plain file in that one folder. */
          if (/[\\/]|\.\./.test(name)) { res.statusCode = 400; res.end(); return; }
          const file = path.join(RENDERS, name);
          if (!fs.existsSync(file)) { res.statusCode = 404; res.end(); return; }

          const size = fs.statSync(file).size;
          const type = name.endsWith('.mp4') ? 'video/mp4' : 'application/json';
          const range = req.headers.range;

          if (range) {
            const [fromRaw, toRaw] = range.replace(/bytes=/, '').split('-');
            const from = Number(fromRaw) || 0;
            const to = toRaw ? Number(toRaw) : size - 1;
            res.writeHead(206, {
              'content-type': type,
              'content-range': `bytes ${from}-${to}/${size}`,
              'accept-ranges': 'bytes',
              'content-length': to - from + 1,
            });
            fs.createReadStream(file, { start: from, end: to }).pipe(res);
            return;
          }

          res.writeHead(200, {
            'content-type': type,
            'content-length': size,
            'accept-ranges': 'bytes',
          });
          fs.createReadStream(file).pipe(res);
          return;
        }

        if (!url.startsWith('/api/')) { next(); return; }

        const name = url.slice('/api/'.length).split('?')[0].replace(/[^a-z0-9-]/gi, '');
        const file = path.join(API_DIR, name + '.js');
        if (!name || !fs.existsSync(file)) { next(); return; }

        /* A query string makes the import fresh, so an edited prompt is picked
           up on the next question rather than on the next restart. */
        const mod = await import(pathToFileURL(file).href + '?t=' + Date.now());
        const handler = mod.default;
        if (typeof handler !== 'function') { next(); return; }

        req.body = await readBody(req);

        let code = 200;
        const shim = {
          setHeader: (k, v) => res.setHeader(k, v),
          status: (c) => { code = c; return shim; },
          json: (o) => {
            res.statusCode = code;
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify(o));
          },
          write: (t) => {
            if (!res.headersSent) res.statusCode = code;
            res.write(t);
          },
          end: () => res.end(),
          get headersSent() { return res.headersSent; },
        };

        try {
          await handler(req, shim);
        } catch (err) {
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify({ error: String(err && err.message || err) }));
          } else {
            res.end();
          }
        }
      });
    },
  };
}
