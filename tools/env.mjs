// Load .env, for tools run from a terminal.
//
// Import this FIRST, before anything that reads `process.env` at module level:
//
//   import './env.mjs';
//   import { uploadRender } from './upload.mjs';
//
// ── Why this exists ─────────────────────────────────────────────────────────
//
// Eleven tools under this folder read `process.env` and not one of them loaded
// `.env`, so every one of them had to be run with the variables already
// exported in the shell. Nothing said so. The failure looked like a missing
// key rather than a missing import:
//
//   $ node tools/tutor-worker.mjs
//     EDU_WORKER_SECRET is not set.
//
// with `EDU_WORKER_SECRET` sitting in `.env` the whole time. The same gap in
// `tools/vite-api.mjs` meant every server side route answered 501 in
// development, which quietly made lesson generation untestable locally.
//
// `node --env-file=.env` does this too and the npm scripts now pass it. This
// module exists as well because it also covers a tool run directly, which is
// how anybody actually debugs one.
//
// ── What it will not do ─────────────────────────────────────────────────────
//
// It never overwrites a variable that is already set. A value exported in the
// shell, or injected by Vercel in production, is the more specific instruction
// and outranks a file sitting in the repository. That also means this is safe
// to import from a tool that may run on a deployment: there is no .env there,
// and if there were, the real environment would still win.

import fs from 'node:fs';
import path from 'node:path';

/**
 * Parsed rather than passed to dotenv, so this has no dependency and behaves
 * the same whether the tool is run with tsx, with node, or from a npm script.
 * The format accepted is the one .env files actually use: KEY=value, with
 * optional surrounding quotes, blank lines and # comments skipped.
 */
function parse(text) {
  const out = {};
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq < 1) continue;
    const key = line.slice(0, eq).trim();
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) continue;
    let value = line.slice(eq + 1).trim();
    /* Strip one matching pair of quotes, and only a matching pair, so a value
       that legitimately starts with a quote is not silently truncated. */
    if (value.length > 1
      && ((value.startsWith('"') && value.endsWith('"'))
        || (value.startsWith("'") && value.endsWith("'")))) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

/** Where .env is, from the repository root rather than the caller's cwd. */
const file = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..', '.env');

let loaded = 0;
try {
  if (fs.existsSync(file)) {
    const values = parse(fs.readFileSync(file, 'utf8'));
    for (const [key, value] of Object.entries(values)) {
      if (process.env[key] === undefined) {
        process.env[key] = value;
        loaded += 1;
      }
    }
  }
} catch (err) {
  /* A tool with no configuration already reports that clearly for itself, and
     each one's message is more useful than anything this could say. */
}

/** How many variables came from the file, for a tool that wants to say so. */
export const fromEnvFile = loaded;
