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
 * The image models to try, best first.
 *
 * ── Why this is a list and not a setting ──────────────────────────────────
 *
 * It was one model, and one model means one thing going wrong takes all the
 * pictures with it. A model is withdrawn, or is briefly overloaded, and every
 * lesson on the platform loses its illustrations until somebody notices and
 * edits an environment variable.
 *
 * The writing side already works the other way: Claude, then ChatGPT through
 * the Codex CLI, and the first with allowance left answers. This is the same
 * shape for pictures. The exam engine on this machine has done it this way
 * for months.
 *
 * ── Why this order ───────────────────────────────────────────────────────
 *
 * Measured on the same prompt, a hibiscus cut in half for a JHS science
 * lesson, all three produced a usable picture:
 *
 *   gpt-image-2.5-flare   32s
 *   gpt-image-1.5         43s
 *   gpt-image-2           69s
 *
 * So the newest is also the fastest, by a factor of two over gpt-image-2,
 * which matters when a lesson asks for three pictures and a learner is
 * waiting on the first.
 *
 * `flare` is a codename rather than a plain version number, so it is the one
 * most likely to be withdrawn. That is exactly why `gpt-image-2` sits behind
 * it: it is the stable name and needs no intervention when that happens.
 *
 * `dall-e-3` is deliberately absent. It is no longer on the account at all,
 * having been superseded by this family, so listing it would only add a
 * failed attempt to every chain.
 *
 * EDU_OPENAI_IMAGE_MODEL still wins outright and is comma separated too, so
 * one model can be pinned for comparing output, or a different order tried
 * without editing this file.
 */
const MODELS = process.env.EDU_OPENAI_IMAGE_MODEL
  ? String(process.env.EDU_OPENAI_IMAGE_MODEL)
    .split(',').map(name => name.trim()).filter(Boolean)
  : ['gpt-image-2.5-flare', 'gpt-image-2', 'gpt-image-1.5'];

/**
 * Whether a failure is worth trying the next model for.
 *
 * A withdrawn model, a bad request for that model, or a provider having a bad
 * minute are all worth moving on from. Authentication and billing are not:
 * they are facts about the whole account, so every model in the list would
 * fail the same way and trying them only makes a learner wait three times as
 * long for the same answer.
 *
 * The same distinction `classify` in tools/runner.mjs draws for the writing
 * engines, for the same reason.
 */
function worthAnotherModel(status, body) {
  if (status === 401 || status === 403) return false;
  const said = String(body || '').toLowerCase();
  if (said.includes('insufficient_quota') || said.includes('billing')) return false;
  if (said.includes('exceeded your current quota')) return false;
  return true;
}

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
 * Ask for the image, from the first model that will make one.
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

  const tried = [];

  for (const model of MODELS) {
    let res;
    try {
      res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${key}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model,
          prompt: `${prompt}

${NEVER}`,
          size: SIZE,
          quality: QUALITY,
          n: 1,
        }),
      });
    } catch (err) {
      tried.push(`${model}: could not reach OpenAI`);
      continue;
    }

    if (!res.ok) {
      /* The body may carry a billing message that is the actual answer, and it
         decides whether the next model is worth trying. It is logged and not
         returned: `render.js` decides what reaches a learner. */
      let detail = '';
      try { detail = (await res.text()).slice(0, 300); } catch (e) { /* ignore */ }
      tried.push(`${model}: ${res.status}`);
      console.error('openai images', model, res.status, detail);

      if (!worthAnotherModel(res.status, detail)) {
        return { error: `OpenAI images ${res.status}: ${detail}` };
      }
      continue;
    }

    let body;
    try { body = await res.json(); } catch (err) {
      tried.push(`${model}: reply was not JSON`);
      continue;
    }

    const first = body && body.data && body.data[0];
    if (!first) { tried.push(`${model}: no image`); continue; }

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

    if (!url) { tried.push(`${model}: no image`); continue; }

    if (tried.length) console.log('openai images: fell back to ' + model);
    return {
      id: `${OPENAI_TAG}|${Buffer.from(url, 'utf8').toString('base64url')}`,
      madeBy: `${model}, ${QUALITY} quality`,
    };
  }

  return { error: 'No OpenAI image model could answer. ' + tried.join('; ') };
}

export async function poll(id) {
  const parts = String(id).split('|');
  if (parts[0] !== OPENAI_TAG || parts.length < 2) {
    return { status: 'error', error: 'Not an OpenAI render.' };
  }
  const url = Buffer.from(parts.slice(1).join('|'), 'base64url').toString('utf8');
  if (!url) return { status: 'error', error: 'That render id carries no picture.' };
  /* Which model made it is reported by `submit`, which is the only place
     that knows: the id carries the url and nothing else. */
  return { status: 'done', url, madeBy: `OpenAI, ${QUALITY} quality` };
}
