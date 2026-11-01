// Pictures and clips from Google AI Studio: Gemini for images, Veo for video.
//
// ── Why this route exists alongside the other three ──────────────────────────
//
// `render-free.js` proves the chain works and watermarks everything.
// `render-openai.js` makes clean pictures and cannot make a clip at all.
// `render.js` talks to fal, which does both and needs a key that was
// deliberately never bought.
//
// This is the route for somebody who already has a Google AI Studio key,
// which is the common case in Ghana because the free tier is generous and it
// is the key most people here already have. It is also the only route in this
// project that can produce a teaching clip without a second billing
// relationship: Veo is on the same key as the images.
//
// ── What it costs ────────────────────────────────────────────────────────────
//
// Images through Gemini are billed per image and are in the same region as
// the OpenAI route. Veo is billed per second of video and is an order of
// magnitude more, so a clip is a deliberate act and not something a lesson
// should request casually. The queue in `api/queue.js` is what stops forty
// children in one classroom each generating their own copy: an artifact is
// keyed on the syllabus and shared, which is the whole argument of migration
// 20260921000002.
//
// ── What it will not do ──────────────────────────────────────────────────────
//
// A diagram. Figures are SVG written by the model from the lesson text, so
// their labels are correct and their numbers match the worked example in
// front of this learner. A generated picture cannot spell and cannot be
// trusted with a quantity, which is why `visuals.ts` separates the kinds and
// prints who made each one under it. That rule does not change here.

export const GOOGLE_TAG = 'google';

const BASE = 'https://generativelanguage.googleapis.com/v1beta';

/** Gemini's image model. Overridable, because these names move. */
const IMAGE_MODEL = process.env.EDU_GOOGLE_IMAGE_MODEL
  || 'gemini-2.5-flash-image';

/** Veo, for a few seconds of something happening. */
const VIDEO_MODEL = process.env.EDU_GOOGLE_VIDEO_MODEL || 'veo-3.1-fast';

const key = () => process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || '';

/**
 * What a generated picture must never contain.
 *
 * The same instruction the other routes carry, for the same reason: a
 * generated image cannot spell, so asking for one with writing in it
 * produces confident nonsense on a page a child is being taught from.
 */
const NEVER = 'No text, no letters, no numbers, no labels, no watermark, '
  + 'no signature. A clear photograph or illustration only.';

/* ── images ──────────────────────────────────────────────────────────────── */

async function image(prompt) {
  const k = key();
  let res;
  try {
    res = await fetch(`${BASE}/models/${IMAGE_MODEL}:generateContent`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': k },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${prompt}\n\n${NEVER}` }] }],
        generationConfig: { responseModalities: ['IMAGE'] },
      }),
    });
  } catch {
    return { error: 'Could not reach Google AI Studio.' };
  }

  const said = await res.json().catch(() => null);
  if (!res.ok || !said) {
    const why = (said && said.error && said.error.message) || res.status;
    return { error: `Google refused that: ${why}` };
  }

  /* The picture comes back inline as base64 rather than as a url, so there is
     nothing to poll: the id carries the image itself, exactly as the OpenAI
     route carries its url. */
  const parts = said?.candidates?.[0]?.content?.parts ?? [];
  const found = parts.find(p => p.inlineData?.data || p.inline_data?.data);
  const inline = found?.inlineData ?? found?.inline_data;
  if (!inline?.data) {
    /* A safety block comes back as a 200 with no image, which is the one
       failure that would otherwise look like success. */
    const stop = said?.candidates?.[0]?.finishReason;
    return {
      error: stop && stop !== 'STOP'
        ? `Google would not make that picture (${stop}).`
        : 'Google returned no picture.',
    };
  }

  const mime = inline.mimeType || inline.mime_type || 'image/png';
  return { id: `${GOOGLE_TAG}|img|${mime}|${inline.data}` };
}

/* ── clips ───────────────────────────────────────────────────────────────── */

/**
 * Veo is asynchronous, and genuinely so: a clip takes minutes rather than
 * seconds. The operation name is what the id carries, and `poll` asks whether
 * it is finished. This is the only renderer in the project with a real queue
 * behind it, which is why `poll` below is more than a decoder.
 */
async function clip(prompt) {
  const k = key();
  let res;
  try {
    res = await fetch(`${BASE}/models/${VIDEO_MODEL}:predictLongRunning`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': k },
      body: JSON.stringify({
        instances: [{ prompt: `${prompt}\n\n${NEVER}` }],
        parameters: { aspectRatio: '16:9' },
      }),
    });
  } catch {
    return { error: 'Could not reach Veo.' };
  }

  const said = await res.json().catch(() => null);
  if (!res.ok || !said?.name) {
    const why = (said && said.error && said.error.message) || res.status;
    return { error: `Veo refused that: ${why}` };
  }
  return { id: `${GOOGLE_TAG}|op|${said.name}` };
}

export async function submit(kind, prompt) {
  if (!key()) {
    return {
      error: 'EDU_RENDERER=google needs GOOGLE_API_KEY (or GEMINI_API_KEY) '
        + 'set. The key comes from Google AI Studio.',
    };
  }
  if (kind === 'clip') return clip(prompt);
  return image(prompt);
}

/* ── reading it back ─────────────────────────────────────────────────────── */

export async function poll(id) {
  const parts = String(id).split('|');
  if (parts[0] !== GOOGLE_TAG || parts.length < 3) {
    return { status: 'error', error: 'Not a Google render.' };
  }

  /* An image is already here: the id is the picture, as a data url the page
     can show without a second request. */
  if (parts[1] === 'img') {
    const mime = parts[2];
    const data = parts.slice(3).join('|');
    if (!data) return { status: 'error', error: 'That render id carries no picture.' };
    return {
      status: 'done',
      url: `data:${mime};base64,${data}`,
      madeBy: `Google, ${IMAGE_MODEL}`,
    };
  }

  const name = parts.slice(2).join('|');
  let res;
  try {
    res = await fetch(`${BASE}/${name}`, { headers: { 'x-goog-api-key': key() } });
  } catch {
    /* Not an error the learner caused and not a dead end: the clip may well
       be finished by the next poll. */
    return { status: 'pending' };
  }

  const said = await res.json().catch(() => null);
  if (!res.ok || !said) return { status: 'pending' };
  if (!said.done) return { status: 'pending' };

  if (said.error) {
    return { status: 'error', error: said.error.message || 'Veo could not finish that.' };
  }

  const video = said.response?.generateVideoResponse?.generatedSamples?.[0]?.video
    ?? said.response?.generatedSamples?.[0]?.video;
  const url = video?.uri || video?.url;
  if (!url) return { status: 'error', error: 'Veo finished with no video.' };

  /* The uri needs the key to fetch, so it is handed on with it attached. The
     worker downloads it and puts it in the bucket; nothing with a key in it
     ever reaches a browser. */
  return { status: 'done', url, needsKey: true, madeBy: `Google, ${VIDEO_MODEL}` };
}
