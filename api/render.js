// api/render.js
//
// Turning a brief into a picture or a few seconds of video.
//
// The division of labour is the same one the rest of the platform uses. Claude
// knows the topic, the learner's year and what they have been getting wrong, so
// Claude writes the brief. An open source model renders it. This endpoint is
// the wire between them, and it holds the key so the browser never does.
//
//   POST /api/render         { kind, prompt }  ->  { id }
//   GET  /api/render?id=...                    ->  { status, url }
//
// ── Which models ─────────────────────────────────────────────────────────────
//
// Both are open weight and served rather than self hosted, because serving them
// needs a GPU that a school laptop does not have. The defaults:
//
//   images   FLUX.1 [schnell], Apache 2.0, a few seconds and a fraction of a penny
//   video    Wan 2.2, Apache 2.0, a few seconds of 480p for a few cents
//
// Both are overridable, because model names move faster than this file will.
// Set EDU_IMAGE_MODEL and EDU_VIDEO_MODEL to any fal model id.
//
// ── What this will not do ────────────────────────────────────────────────────
//
// Neither model can write. Text comes out as nonsense letters and a quantity
// comes out wrong, which is why `api/prompt.js` forbids asking either of them
// for a label, a number or a diagram, and why anything a learner must be able
// to READ is drawn as SVG by Claude instead. That rule is in `visuals.ts` and
// it is the whole reason the platform has three kinds of visual rather than one.

import { submit as localSubmit, poll as localPoll, LOCAL_TAG } from './render-local.js';
import { submit as freeSubmit, poll as freePoll, FREE_TAG } from './render-free.js';
import { submit as aiSubmit, poll as aiPoll, OPENAI_TAG } from './render-openai.js';

const FAL = 'https://queue.fal.run';

/**
 * Which renderers answer, in order. Set EDU_RENDERER.
 *
 *   fal     open weight models on somebody else's GPU, images and video,
 *           paid per render, needs FAL_KEY.
 *   openai  gpt-image, clean and billed per image, on its own list of models.
 *           See render-openai.js.
 *   free    real images from FLUX with no key and no bill, watermarked, and
 *           no video at all. See render-free.js for what it costs instead.
 *   local   a test double that makes no pictures. Offline and instant.
 *
 * ── Why this is an order and not a choice ─────────────────────────────────
 *
 * It used to be exactly one, and one means a learner gets nothing the moment
 * that one has a bad minute. Writing has not worked that way for a while:
 * Claude, then ChatGPT through the Codex CLI, and the first with allowance
 * left answers. Pictures now have the same shape at both levels, the models
 * inside `render-openai.js` and the providers here.
 *
 * Comma separated, best first:
 *
 *   EDU_RENDERER=openai,free    the sensible one. Good pictures, and a
 *                               watermarked picture rather than none when
 *                               the account is out or the API is down.
 *   EDU_RENDERER=openai         no fallback, for judging quality honestly.
 *   EDU_RENDERER=fal            when FAL_KEY exists and video is wanted.
 *
 * A single value still works and still means exactly that one, so nothing
 * that was configured before behaves differently today.
 *
 * ── What is NOT in the chain ──────────────────────────────────────────────
 *
 * `local` is never reached by fallback, only by being asked for on its own. A
 * deployment quietly serving placeholders to real learners would be worse
 * than one that served nothing and said so, and a chain ending in `local`
 * would do exactly that, silently.
 *
 * Polling needs no chain at all: every id carries its provider's tag, so
 * whichever one answered, the GET below finds it.
 */
const RENDERERS = String(process.env.EDU_RENDERER || 'fal')
  .split(',')
  .map(name => name.trim().toLowerCase())
  .filter(Boolean);

/** Whether a provider is named anywhere in the chain. */
const uses = (name) => RENDERERS.includes(name);

const LOCAL = RENDERERS[0] === 'local';
const FREE = uses('free');
const OPENAI = uses('openai');

/** Tried in order, minus the ones that cannot be reached by fallback. */
const CHAIN = RENDERERS.filter(name => name !== 'local' || LOCAL);

/** Open weight, commercially usable, and quick enough to wait for. */
const MODELS = {
  illustration: process.env.EDU_IMAGE_MODEL || 'fal-ai/flux/schnell',
  clip: process.env.EDU_VIDEO_MODEL || 'fal-ai/wan/v2.2-5b/text-to-video',
};

/** Long enough for video, short enough that nobody waits on a dead job. */
const GIVE_UP_MS = 6 * 60 * 1000;

function configured(res) {
  if (LOCAL || FREE || OPENAI || process.env.FAL_KEY) return true;
  res.status(501).json({
    error: 'No renderer is configured for this deployment, so lessons have '
      + 'diagrams but no photographs or video. EDU_RENDERER=free gives real '
      + 'images with no key, EDU_RENDERER=openai gives clean images with '
      + 'OPENAI_API_KEY, FAL_KEY gives images and video, and '
      + 'EDU_RENDERER=local gives placeholders for testing. The diagrams are '
      + 'drawn by the tutor itself and need none of them.',
  });
  return false;
}

const auth = () => ({
  Authorization: 'Key ' + process.env.FAL_KEY,
  'content-type': 'application/json',
});

/**
 * What the renderer is asked for, beyond the prompt.
 *
 * Deliberately small and cheap. A lesson illustration is looked at for a few
 * seconds beside a paragraph, so 480p video and a single image are the right
 * size, and the difference in cost between this and something cinematic is the
 * difference between a platform a school can afford and one it cannot.
 */
function argsFor(kind, prompt) {
  if (kind === 'clip') {
    return {
      prompt,
      resolution: '480p',
      /* Short on purpose. The movement is the lesson, and nothing after the
         first few seconds of a generated clip adds to it. */
      num_frames: 81,
      enable_prompt_expansion: true,
    };
  }
  return {
    prompt,
    image_size: 'landscape_4_3',
    num_images: 1,
    /* Two jobs. The lettering half is housekeeping: these models are trained
       on captioned photographs and will cheerfully add signage.

       The people half is not housekeeping. Asked for a farm plot showing two
       soil types, FLUX returned a young girl crouching in water in a wet
       dress: nothing that was asked for, and not something to put in front of
       a class. The brief is already told never to ask for a person, and this
       is the second refusal, because one instruction between a child and a
       bad image is not enough. */
    negative_prompt: 'person, people, human, child, children, girl, boy, man, woman, '
      + 'face, portrait, hands, figure, crowd, nude, swimwear, wet clothing, '
      + 'text, letters, words, labels, captions, watermark, signature, diagram, chart',
  };
}

/** Pull whatever the model called its output back to one url. */
function urlFrom(result) {
  if (!result || typeof result !== 'object') return '';
  if (result.video && result.video.url) return result.video.url;
  if (Array.isArray(result.images) && result.images[0] && result.images[0].url) {
    return result.images[0].url;
  }
  if (Array.isArray(result.video) && result.video[0] && result.video[0].url) {
    return result.video[0].url;
  }
  if (typeof result.url === 'string') return result.url;
  return '';
}

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');
  if (!configured(res)) return;

  try {
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const kind = body.kind === 'clip' ? 'clip' : 'illustration';
      const prompt = String(body.prompt || '').trim().slice(0, 1500);
      if (!prompt) {
        res.status(400).json({ error: 'Nothing to render.' });
        return;
      }

      /* Each provider in turn, until one makes a picture.
 
         Every one of them answers in the same shape, an id plus a pending
         status, and every id carries its own provider's tag, so the GET below
         finds whichever one won without being told. That is what makes a chain
         possible here at all.
 
         A clip is a special case worth knowing about: only fal makes video, so
         a chain of openai then free will refuse one twice and say so, rather
         than quietly returning a still. Answering a request for a clip with a
         photograph would be a lie about what was asked for. */
      const attempt = async (name) => {
        if (name === 'local') return { ...localSubmit(kind, prompt) };
        if (name === 'free') return freeSubmit(kind, prompt);
        if (name === 'openai') return await aiSubmit(kind, prompt);
        if (name === 'fal') {
          if (!process.env.FAL_KEY) return { error: 'fal needs FAL_KEY.' };
          const model = MODELS[kind];
          let made;
          try {
            made = await fetch(`${FAL}/${model}`, {
              method: 'POST',
              headers: auth(),
              body: JSON.stringify(argsFor(kind, prompt)),
            });
          } catch (err) {
            return { error: 'Could not reach fal.' };
          }
          const said = await made.json().catch(() => null);
          if (!made.ok || !said || !said.request_id) {
            return {
              error: 'fal refused that: '
                + ((said && (said.detail || said.error)) || made.status),
            };
          }
          /* The model id travels back in the id, because polling needs it and
             the browser should not have to remember which model made what. */
          return { id: `${model}|${said.request_id}` };
        }
        return { error: `Unknown renderer "${name}".` };
      };

      const refused = [];
      for (const name of CHAIN) {
        const made = await attempt(name);
        if (made.id) {
          if (refused.length) console.log('render: fell back to ' + name);
          res.status(200).json({ ...made, status: 'pending' });
          return;
        }
        refused.push(`${name}: ${made.error || 'no picture'}`);
        console.error('render', name, made.error || 'no picture');
      }

      /* Nothing in the chain could answer. 501 rather than 502 because the
         commonest cause by far is configuration, and the message says which
         providers were tried so that is diagnosable from the response alone. */
      res.status(501).json({
        error: 'No renderer could make that. ' + refused.join('; '),
      });
      return;
    }

    if (req.method === 'GET') {
      const url = new URL(req.url, 'http://x');
      const id = url.searchParams.get('id') || '';

      if (id.startsWith(LOCAL_TAG + '|')) {
        if (!LOCAL) {
          res.status(400).json({ error: 'That id is from the test renderer.' });
          return;
        }
        res.status(200).json(localPoll(id));
        return;
      }
      if (id.startsWith(FREE_TAG + '|')) {
        if (!FREE) {
          res.status(400).json({ error: 'That id is from the free renderer.' });
          return;
        }
        res.status(200).json(await freePoll(id));
        return;
      }

      if (id.startsWith(OPENAI_TAG + '|')) {
        if (!OPENAI) {
          res.status(400).json({ error: 'That id is from the OpenAI renderer.' });
          return;
        }
        res.status(200).json(await aiPoll(id));
        return;
      }

      const cut = id.lastIndexOf('|');
      if (cut === -1) { res.status(400).json({ error: 'Missing job id.' }); return; }
      const model = id.slice(0, cut);
      const request = id.slice(cut + 1);

      /* Only the models this endpoint offers. Without this, an id from the
         browser would name any model on the service and spend on it. */
      if (!Object.values(MODELS).includes(model)) {
        res.status(400).json({ error: 'Unknown renderer.' });
        return;
      }

      const look = await fetch(
        `${FAL}/${model}/requests/${encodeURIComponent(request)}/status`,
        { headers: auth() });
      const state = await look.json().catch(() => null);
      if (!look.ok || !state) {
        res.status(502).json({ error: 'Could not reach the renderer.' });
        return;
      }

      if (state.status === 'IN_QUEUE' || state.status === 'IN_PROGRESS') {
        res.status(200).json({
          status: 'pending',
          queued: typeof state.queue_position === 'number' ? state.queue_position : null,
        });
        return;
      }
      if (state.status !== 'COMPLETED') {
        res.status(200).json({ status: 'error', error: state.error || 'The render failed.' });
        return;
      }

      const got = await fetch(`${FAL}/${model}/requests/${encodeURIComponent(request)}`,
        { headers: auth() });
      const result = await got.json().catch(() => null);
      const made = urlFrom(result);
      if (!made) {
        res.status(200).json({ status: 'error', error: 'Nothing usable came back.' });
        return;
      }
      res.status(200).json({ status: 'done', url: made, madeBy: model });
      return;
    }

    res.status(405).json({ error: 'Method not allowed.' });
  } catch (err) {
    res.status(500).json({ error: 'The renderer failed: ' + (err.message || 'unknown error') });
  }
}

/** Exported so the client and the docs agree on how long is too long. */
export const RENDER_GIVE_UP_MS = GIVE_UP_MS;
