// tools/vite-api.mjs
// Serves the api/ folder during `npm run dev`.
//
// Vercel runs those files as functions in production, but the dev server knows
// nothing about them, so without this the tutor can only be tried on a
// deployment. That is a slow way to find out that a prompt reads badly.
//
// Each request imports the handler fresh, so editing api/prompt.js and asking
// again shows the new wording without restarting anything. The handlers are
// written to Vercel's shape, which is Node's req and res plus a parsed body and
// res.status().json(), so the small amount of shimming happens here.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

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

export default function viteApi() {
  return {
    name: 'nexaedu-api',
    configureServer(server) {
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
