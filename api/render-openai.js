// Images from OpenAI, for when the picture has to be judged rather than just
// counted.
//
// ── Why this exists alongside the free route ──────────────────────────────────
//
// `render-free.js` costs nothing and is the right thing to test the chain with:
// does a lesson ask for a picture, does one come back, does it reach the page.
// What it cannot answer is whether the pictures are good enough to put in front
// of a child, because every one of them carries a pollinations.ai watermark in
// the corner. You cannot judge a lesson page through a watermark.
//
// So this is the quality route. Same contract as the other two, chosen the same
// way, and it bills per image.
//
// ── What it costs, said plainly ──────────────────────────────────────────────
//
// It is not the cheap option and it was asked for as one. `gpt-image-1` is
// billed per image by size and quality, and at the low quality setting used
// here a lesson illustration is on the order of a US cent, which is more than
// `fal-ai/flux/schnell` costs for the same job. The reason to use it is that
// the key already exists and fal's does not, not that it saves money. Check
// current prices before generating at volume: these figures move.
//
// The honest ordering for a test is therefore:
//
//   EDU_RENDERER=free      prove the chain works, zero cost, watermarked
//   EDU_RENDERER=openai    judge the pictures, cents per image, clean
//   FAL_KEY                run at volume, cheapest per image, plus video
//
// ── Video ────────────────────────────────────────────────────────────────────
//
// Sora is not wired up here. A teaching clip in this product comes from
// Remotion, which renders real DOM and is therefore the only renderer whose
// numbers and equations are guaranteed correct. A generative clip is
// atmosphere, and atmosphere is not worth a second billing relationship yet.

export const OPENAI_TAG = 'openai';

const ENDPOINT = 'https://api.openai.com/v1/images/generations';

/** Cheapest size that still reads on a lesson page at full width. */
const SIZE = process.env.EDU_OPENAI_IMAGE_SIZE || '1024x1024';

/**
 * `medium`, changed up from `low`.
 *
 * `low` was chosen to keep testing cheap, and it was the wrong trade. The
 * picture is often the part of the lesson that does the teaching, and for a
 * learner who cannot read it is the ONLY part that does. A soft, muddled
 * illustration of the parts of a flower is not a cheaper version of the
 * lesson, it is a lesson that does not work, and the saving is a fraction of
 * a cent.
 *
 * `high` is not the default either: it costs several times more for detail
 * that matters in a photograph being inspected, not in a picture beside a
 * paragraph. Override with EDU_OPENAI_IMAGE_QUALITY where a topic genuinely
 * needs it.
 */
const QUALITY = process.env.EDU_OPENAI_IMAGE_QUALITY || 'medium';

/**
 * The newest image model on the account, not the oldest.
 *
 * This was `gpt-image-1`, and that was simply out of date: the same key also
 * exposes `gpt-image-1.5`, `gpt-image-2` and two `gpt-image-2.5` builds. The
 * pictures were being judged, and found wanting, on the weakest model
 * available.
 *
 * Measured on the same prompt, a hibiscus cut in half for a JHS science
 * lesson:
 *
 *   gpt-image-2.5-flare   32s
 *   gpt-image-1.5         43s
 *   gpt-image-2           69s
 *
 * So the newest is also the fastest by a factor of two, which matters when a
 * lesson asks for three pictures and a learner is waiting for the first.
 *
 * `flare` is a codename rather than a plain version, so it may be withdrawn.
 * If this starts failing, `gpt-image-2` is the stable fallback and needs only
 * EDU_OPENAI_IMAGE_MODEL set. `dall-e-3` is deliberately not mentioned as an
 * option: it is no longer on the account at all, having been superseded by
 * this family.
 */
const MODEL = process.env.EDU_OPENAI_IMAGE_MODEL || 'gpt-image-2.5-flare';

/**
 * What must never be in the picture, said in the prompt itself.
 *
 * The same reasoning as the free route: there is no negative prompt on this
 * API, so the only place to say it is in the prompt. Text is the important
 * one. A generated picture that tries to write "seven" and produces "sevne"
 * beside a lesson about seven is worse than no picture, which is why every
 * number, label and equation in this product is real DOM and never generated.
 */
const NEVER = 'No text, no letters, no numbers, no words, no captions, '
  + 'no watermark, no signature, no logo.';

/**
 * Where a finished picture is put, and why it is not kept in memory.
 *
 * ── The two problems this solves ──────────────────────────────────────────
 *
 * The OpenAI images API returns the PICTURE rather than a ticket to fetch it
 * later, unlike fal, so there is nothing to poll. The first version dealt with
 * that by holding the image in a module level Map between the submit and the
 * poll, and handing back a base64 data uri.
 *
 * Both halves of that were wrong.
 *
 * A module level Map does not survive. In development the api shim reloads the
 * module per request, so the poll read an empty Map and every picture answered
 * "that picture is no longer held"; in production a Vercel function is many
 * instances and the poll may land on a different one. Either way the image was
 * made, paid for, and thrown away.
 *
 * A data uri is 2.16 MB of base64 inlined into the page for one picture. A
 * lesson with three of them is six megabytes of markup, on a product whose
 * audience is on metered phone connections, and the picture cannot be cached
 * or reused by the next learner because it is part of the document.
 *
 * So the picture is uploaded to Supabase Storage and the id carries its url,
 * exactly as the free route carries the pollinations url. Nothing is held,
 * nothing is inlined, and a picture made once is a file a CDN can serve to
 * everybody who meets that topic.
 */
const BUCKET = process.env.EDU_IMAGE_BUCKET || 'lesson-video';

async function store(bytes, name) {
  const base = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const key = process.env.SUPABASE_SERVICE_KEY || '';
  if (!base || !key) return null;

  try {
    const res = await fetch(`${base}/storage/v1/object/${BUCKET}/${name}`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'content-type': 'image/png',
        'x-upsert': 'true',
      },
      body: bytes,
    });
    if (!res.ok) return null;
    return `${base}/storage/v1/object/public/${BUCKET}/${name}`;
  } catch (err) {
    return null;
  }
}

/**
 * Ask for the image.
 *
 * The work all happens here, because there is no queue to poll: the request
 * returns the picture. `poll` only decodes the url out of the id.
 */
export async function submit(kind, prompt) {
  if (kind === 'clip') {
    return {
      error: 'There is no clip renderer on the OpenAI route. Teaching films '
        + 'come from Remotion, and a generative clip needs FAL_KEY.',
    };
  }
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return { error: 'EDU_RENDERER=openai needs OPENAI_API_KEY set.' };
  }

  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        prompt: `${prompt}

${NEVER}`,
        size: SIZE,
        quality: QUALITY,
        n: 1,
      }),
    });
  } catch (err) {
    return { error: 'Could not reach OpenAI.' };
  }

  if (!res.ok) {
    /* The status matters to whoever is configuring this, and the body may
       carry a billing message that is the actual answer. Neither is shown to a
       learner: `render.js` decides what reaches the page. */
    let detail = '';
    try { detail = (await res.text()).slice(0, 300); } catch (e) { /* ignore */ }
    return { error: `OpenAI images ${res.status}: ${detail}` };
  }

  let body;
  try { body = await res.json(); } catch (err) {
    return { error: 'OpenAI returned something that was not JSON.' };
  }

  const first = body && body.data && body.data[0];
  if (!first) return { error: 'OpenAI returned no image.' };

  /* A url when the model gives one, otherwise the base64 is uploaded and its
     url used instead. Either way what travels onward is a url. */
  let url = typeof first.url === 'string' ? first.url : '';

  if (!url && typeof first.b64_json === 'string') {
    const bytes = Buffer.from(first.b64_json, 'base64');
    const name = `img-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}.png`;
    url = (await store(bytes, name)) || '';
    if (!url) {
      /* Storage is not configured on this deployment. The data uri still
         works and is still enormous, so it is used rather than losing a
         picture that has already been paid for, and the size is the reason
         `store` exists. */
      url = `data:image/png;base64,${first.b64_json}`;
    }
  }

  if (!url) return { error: 'OpenAI returned no image.' };

  return { id: `${OPENAI_TAG}|${Buffer.from(url, 'utf8').toString('base64url')}` };
}

export async function poll(id) {
  const parts = String(id).split('|');
  if (parts[0] !== OPENAI_TAG || parts.length < 2) {
    return { status: 'error', error: 'Not an OpenAI render.' };
  }
  const url = Buffer.from(parts.slice(1).join('|'), 'base64url').toString('utf8');
  if (!url) return { status: 'error', error: 'That render id carries no picture.' };
  return { status: 'done', url, madeBy: `${MODEL}, ${QUALITY} quality` };
}
