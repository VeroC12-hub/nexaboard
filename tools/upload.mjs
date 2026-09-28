/**
 * Put a rendered file somewhere a learner can actually reach it.
 *
 * ── The problem this solves ──────────────────────────────────────────────────
 *
 * The worker renders on a machine you own, because rendering needs a headless
 * browser and ffmpeg and Vercel is the wrong place for either. That is what
 * makes video possible at all. It also means the finished mp4 is sitting on
 * somebody's laptop, and the url the worker handed back, `/renders/lesson-x
 * .mp4`, is served by the dev server and by nothing else.
 *
 * So until now video worked in development and nowhere else. A learner on a
 * deployment got a url that 404s. This uploads the file to Supabase Storage
 * and hands back a url that works from anywhere.
 *
 * ── Why the bucket is public ─────────────────────────────────────────────────
 *
 * A film of counting to five is the same film for every learner in the country.
 * Nothing learner specific is ever rendered into one: `ai.ts` never sends a
 * name, an id or an account, and the storyboard is written from the topic. So
 * the artifact is cacheable rather than personal, and a public url means a CDN
 * serves it instead of a function minting a signed one per view.
 *
 * If that ever stops being true, if a film is ever rendered with a child's name
 * or work in it, this has to become signed urls on a private bucket. The
 * comment is here so that decision is made deliberately rather than inherited.
 *
 * ── Why a failure is not an error ────────────────────────────────────────────
 *
 * If the upload fails the local path still works on the machine that rendered
 * it, which is exactly the situation before this file existed. So a failure
 * degrades to the old behaviour and says so, rather than losing a film that
 * took a minute of CPU to make.
 */

import fs from 'node:fs';
import path from 'node:path';

const BUCKET = process.env.EDU_RENDER_BUCKET || 'lesson-video';

/** Enough for a sixty second lesson film several times over. */
const MAX_BYTES = 50 * 1024 * 1024;

const TYPES = {
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
};

export function uploadConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY);
}

/**
 * Why uploading is not possible, in a sentence, or null if it is.
 *
 * Separate from doing it so the worker can say this once at startup rather
 * than discovering it after the first render.
 */
export function uploadBlocked() {
  if (!process.env.SUPABASE_URL) return 'SUPABASE_URL is not set';
  if (!process.env.SUPABASE_SERVICE_KEY) return 'SUPABASE_SERVICE_KEY is not set';
  return null;
}

/**
 * Upload `file` and return its public url, or null.
 *
 * `name` is the object name inside the bucket. It is overwritten rather than
 * versioned, for the same reason the local file is: re-rendering a topic should
 * replace the film, not accumulate near identical takes.
 */
export async function uploadRender(file, name) {
  const why = uploadBlocked();
  if (why) return { url: null, why };

  let body;
  try {
    body = fs.readFileSync(file);
  } catch (err) {
    return { url: null, why: 'could not read ' + path.basename(file) };
  }

  if (body.length > MAX_BYTES) {
    /* The bucket refuses it and the plan's limit is the real constraint, so
       say the size rather than letting storage return a bare 413. */
    return {
      url: null,
      why: `${(body.length / 1048576).toFixed(1)} MB is over the ${MAX_BYTES / 1048576} MB limit`,
    };
  }

  const type = TYPES[path.extname(name).toLowerCase()] || 'application/octet-stream';
  const base = process.env.SUPABASE_URL.replace(/\/+$/, '');
  const key = process.env.SUPABASE_SERVICE_KEY;

  let res;
  try {
    res = await fetch(`${base}/storage/v1/object/${BUCKET}/${encodeURIComponent(name)}`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: 'Bearer ' + key,
        'content-type': type,
        /* Replace rather than fail on a second render of the same topic. */
        'x-upsert': 'true',
      },
      body,
    });
  } catch (err) {
    return { url: null, why: 'could not reach storage' };
  }

  if (!res.ok) {
    let detail = '';
    try { detail = (await res.text()).slice(0, 160); } catch (e) { /* ignore */ }
    return { url: null, why: `storage said ${res.status} ${detail}` };
  }

  return {
    url: `${base}/storage/v1/object/public/${BUCKET}/${encodeURIComponent(name)}`,
    why: null,
    bytes: body.length,
  };
}
