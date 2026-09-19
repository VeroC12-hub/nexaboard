// api/render-local.js
//
// A renderer that makes no pictures, so the picture pipeline can be tested
// without a GPU, a key, or a bill.
//
// ── What this is, plainly ────────────────────────────────────────────────────
//
// This is a TEST DOUBLE. It does not generate content and it is not a video
// model. It produces a placeholder that says so on its face, in the shape and
// duration the real thing would produce, so that everything around it can be
// exercised: the brief Claude writes, the submit, the poll, the url coming
// back, the <video> or <img> landing on the page, the caption, the attribution,
// and every way each of those can fail.
//
// The reason it exists is hardware. Wan 2.2, Mochi 1, CogVideoX and Open-Sora
// are all permissively licensed and all need a GPU. On the machine this was
// built on, Intel UHD 620 with no CUDA, a single clip would take hours. The
// licence was never the obstacle.
//
// So: run the whole product against this, for free, as often as you like. Set
// FAL_KEY and drop EDU_RENDERER when you want real pictures.
//
// It draws SVG, animated for a clip, and returns it as a data url. No files, no
// storage, no network, no dependencies.

/** Same shape as the real renderer's ids, so the client cannot tell them apart. */
const TAG = 'local';

/** Deterministic, so the same prompt gives the same placeholder every run. */
function hash(text) {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const escape = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Enough of the prompt to recognise which render this is, on the picture. */
function wrap(text, width, lines) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const out = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > width) {
      out.push(line.trim());
      line = w;
      if (out.length === lines) break;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (out.length < lines && line) out.push(line.trim());
  return out;
}

/**
 * A placeholder that could not be mistaken for a real render.
 *
 * It says TEST RENDER across it and prints the prompt it was given, which is
 * the single most useful thing to see while building: whether the prompt Claude
 * wrote is any good is visible without spending a penny to find out.
 */
function placeholder(kind, prompt) {
  const n = hash(prompt);
  const hue = n % 360;
  const back = `hsl(${hue} 30% 92%)`;
  const ink = `hsl(${hue} 45% 28%)`;
  const mark = `hsl(${(hue + 40) % 360} 55% 45%)`;
  const lines = wrap(prompt, 46, 4);

  /* A clip moves, so that a <video> or animated <img> can be seen to be
     working rather than assumed to be. SMIL animates inside an <img>. */
  const moving = kind === 'clip'
    ? `<circle cx="80" cy="300" r="16" fill="${mark}">
         <animate attributeName="cx" values="80;560;80" dur="4s" repeatCount="indefinite"/>
       </circle>
       <rect x="60" y="330" width="520" height="2" fill="${ink}" opacity="0.25"/>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="640" height="360">
  <rect width="640" height="360" fill="${back}"/>
  <rect x="8" y="8" width="624" height="344" fill="none" stroke="${ink}" stroke-width="2"
        stroke-dasharray="10 7" opacity="0.5"/>
  <text x="320" y="70" text-anchor="middle" fill="${mark}"
        font-family="ui-monospace, Menlo, monospace" font-size="20" letter-spacing="4">TEST RENDER</text>
  <text x="320" y="96" text-anchor="middle" fill="${ink}" opacity="0.7"
        font-family="ui-sans-serif, system-ui, sans-serif" font-size="12">
    no model ran, this is what ${kind === "illustration" ? "an illustration" : "a " + kind} would look like
  </text>
  ${lines.map((l, i) => `<text x="320" y="${160 + i * 26}" text-anchor="middle" fill="${ink}"
        font-family="ui-sans-serif, system-ui, sans-serif" font-size="16">${escape(l)}</text>`).join('\n  ')}
  ${moving}
</svg>`;
}

const dataUrl = (svg) =>
  'data:image/svg+xml;base64,' + Buffer.from(svg, 'utf8').toString('base64');

/**
 * Submit. Returns at once, because there is nothing to wait for.
 *
 * The id still carries everything the poll needs, so the client's submit then
 * poll loop runs exactly as it does against the real service. A renderer that
 * answered instantly would leave that loop untested.
 */
export function submit(kind, prompt) {
  return { id: `${TAG}|${kind}|${Buffer.from(prompt, 'utf8').toString('base64url').slice(0, 400)}` };
}

/**
 * Poll.
 *
 * Says pending on the first look and done on the second, so the waiting copy
 * on the page is seen rather than skipped past. `EDU_RENDER_DELAY` overrides
 * the number of looks, including to 0 for a test that wants no waiting.
 */
const seen = new Map();

export function poll(id) {
  const parts = id.split('|');
  if (parts[0] !== TAG || parts.length < 3) return { status: 'error', error: 'Not a local render.' };
  const kind = parts[1] === 'clip' ? 'clip' : 'illustration';
  const prompt = Buffer.from(parts.slice(2).join('|'), 'base64url').toString('utf8');

  const waits = Number(process.env.EDU_RENDER_DELAY ?? 1);
  const been = (seen.get(id) ?? 0) + 1;
  seen.set(id, been);
  if (been <= waits) return { status: 'pending', queued: waits - been + 1 };

  seen.delete(id);
  return {
    status: 'done',
    url: dataUrl(placeholder(kind, prompt)),
    /* Named for what it is. Nothing here should ever read as a real model. */
    madeBy: 'a test renderer, not a model',
  };
}

export const LOCAL_TAG = TAG;
