// api/render-free.js
//
// Real pictures, from open weight models, with no key and no bill.
//
// Pollinations serves FLUX over a plain GET, free and unauthenticated. So a
// deployment with nothing configured at all can still put a real photograph in
// a lesson, which matters more here than it would elsewhere: a school in Ghana
// should not need a card on file before its learners see anything.
//
// ── What it costs instead ────────────────────────────────────────────────────
//
// Nothing in money. Three things in kind, and all three are the reason this is
// opt in rather than the default:
//
//   1. The prompt leaves the country to a third party, the same as fal, but
//      without a contract. The prompt is written from a learner's lesson, so it
//      can carry the topic they are studying. It carries nothing about who they
//      are: `ai.ts` never sends a name, an id or an account.
//   2. Free images come back watermarked. `nologo` is a paid flag, so the
//      corner says pollinations.ai. Honest, and not ideal on a lesson page.
//   3. There is no queue and no guarantee. It is a free service, so it can be
//      slow or away, and a lesson simply has no photograph that day.
//
// ── Video ────────────────────────────────────────────────────────────────────
//
// There is no free video. Wan and the rest need a GPU for minutes per clip and
// nobody gives that away, so a clip asks for FAL_KEY and otherwise says so
// plainly rather than pretending.

const BASE = 'https://image.pollinations.ai/prompt/';

/** Open weights, and the one this service names. */
const MODEL = process.env.EDU_FREE_IMAGE_MODEL || 'flux';

/**
 * Build the url, which IS the request: there is nothing to submit and nothing
 * to poll, the image is generated when the url is fetched.
 *
 * `seed` is derived from the prompt so the same lesson gets the same picture
 * twice rather than a different one on every reload, which would be unsettling
 * in a page a learner comes back to.
 */
/**
 * What must never be in the picture, said in the prompt itself.
 *
 * This service takes no negative prompt, so the only place to say it is here.
 * The reason is the same as in render.js: asked for two patches of farm soil,
 * FLUX produced a young girl crouching in water. The brief is told not to ask
 * for people and this says it again, because this is a platform for children
 * and nothing checks the picture before they see it.
 */
const NEVER = ', no people, no person, no child, no face, no hands, '
  + 'empty scene, no text, no writing, no labels, no watermark';

function urlFor(prompt) {
  let seed = 5381;
  for (let i = 0; i < prompt.length; i++) seed = ((seed << 5) + seed + prompt.charCodeAt(i)) | 0;
  const q = new URLSearchParams({
    width: '1024',
    height: '768',
    model: MODEL,
    nologo: 'true',
    seed: String(Math.abs(seed)),
  });
  return BASE + encodeURIComponent(prompt.slice(0, 900) + NEVER) + '?' + q.toString();
}

/** Same shape as the other two renderers, so the endpoint treats all three alike. */
export const FREE_TAG = 'free';

export function submit(kind, prompt) {
  if (kind === 'clip') {
    return { error: 'There is no free video renderer. A clip needs FAL_KEY set.' };
  }
  return { id: `${FREE_TAG}|${Buffer.from(urlFor(prompt), 'utf8').toString('base64url')}` };
}

/**
 * Poll.
 *
 * The work happens when the browser loads the url, so this hands it back at
 * once. The one thing worth checking first is that the service is actually
 * answering, because an <img> that never loads looks like a broken lesson and
 * saying nothing is better than that.
 */
export async function poll(id) {
  const parts = id.split('|');
  if (parts[0] !== FREE_TAG || parts.length < 2) {
    return { status: 'error', error: 'Not a free render.' };
  }
  const url = Buffer.from(parts.slice(1).join('|'), 'base64url').toString('utf8');

  try {
    /* Generated on demand, so this is the render, not a HEAD against a cache.
       It is slow on purpose: better to wait here than to hand the browser a
       url that will take ten seconds to become a picture. */
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) {
      return { status: 'error', error: 'The free renderer is not answering right now.' };
    }
    const type = res.headers.get('content-type') || '';
    if (!type.startsWith('image/')) {
      return { status: 'error', error: 'The free renderer returned something that is not a picture.' };
    }
    return { status: 'done', url, madeBy: `FLUX, free and watermarked` };
  } catch (err) {
    return { status: 'error', error: 'Could not reach the free renderer.' };
  }
}
