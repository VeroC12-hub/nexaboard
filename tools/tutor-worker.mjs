// tools/tutor-worker.mjs
// Answers NEXA•EDU's tutor using the Claude subscription on this machine, so
// the hosted site needs no API key and nothing is billed per token.
//
//   node tools/tutor-worker.mjs
//
// It polls the queue on the deployed site, runs each job through `claude -p`,
// and posts the explanation back. Because the site holds the queue, the learner
// can be on a phone anywhere. This machine only has to be on and signed in.
//
// The same pattern as the exam engine's solver worker, cut down to what a tutor
// needs: no attachments, no drawings, one short prose answer per job.
//
// Set up:
//   1. npm install -g @anthropic-ai/claude-code, then `claude` once to sign in
//      (or `claude setup-token` and put CLAUDE_CODE_OAUTH_TOKEN in the
//      environment, which is what a host that is not your laptop would use)
//   2. on Vercel: SUPABASE_URL, SUPABASE_SERVICE_KEY, EDU_WORKER_SECRET
//   3. here: EDU_WORKER_SECRET, the same value, and EDU_SITE if not the default

import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';
import { Runner, resolveClaude, classify } from './runner.mjs';
import { render, RENDERS } from './video-render.mjs';
import { speak, narrationProvider } from './tts.mjs';
import { readStoryboard } from '../src/lib/education/storyboard.ts';

const SITE = process.env.EDU_SITE || 'https://nexaboard.vercel.app';
const SECRET = process.env.EDU_WORKER_SECRET || '';
const MODEL = process.env.EDU_WORKER_MODEL || 'sonnet';

/** How long to wait between looks at an empty queue. */
const IDLE_MS = Number(process.env.EDU_IDLE_MS || 1200);
const BUSY_MS = 200;

/** How often a part written answer is posted while the rest is still coming. */
const PROGRESS_MS = 1500;

/** Enough text to be sure it is prose rather than an error line. */
const PROGRESS_MIN = 160;

const WORKDIR = path.join(os.tmpdir(), 'nexaedu-tutor');

const runner = new Runner({ model: MODEL, workdir: WORKDIR, log: (m) => console.log(m) });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(pathname, init) {
  const res = await fetch(SITE + pathname, {
    ...init,
    headers: {
      'content-type': 'application/json',
      'x-worker-secret': SECRET,
      ...(init && init.headers),
    },
  });
  const text = await res.text();
  let body = null;
  try { body = text ? JSON.parse(text) : null; } catch (e) { body = null; }
  if (!res.ok) {
    const said = body && body.error ? body.error : text.slice(0, 200);
    throw new Error(res.status + ': ' + said);
  }
  return body;
}

/**
 * One job.
 *
 * The system text and the instruction were both built by api/queue.js, so this
 * only has to join them. Nothing here knows what a learner or a subject is,
 * which means the teaching lives in one place and cannot drift between the two
 * routes that answer.
 */
async function work(job) {
  const label = (job.task || 'explain') + (job.subject ? ' · ' + job.subject : '');
  console.log('  job ' + String(job.id).slice(0, 8) + '  ' + label);

  const prompt = [job.system, '----', job.instruction].join('\n\n');
  const started = Date.now();

  /* Post what has been written so far, so the learner reads the first sentence
     while the rest is still coming instead of watching nothing for ten seconds.
     Judged before it is sent: Claude Code reports failures on stdout, and half
     an authentication error must never reach a learner as a lesson. */
  let posted = 0;
  let lastPost = 0;
  const onChunk = (soFar) => {
    const now = Date.now();
    if (soFar.length < PROGRESS_MIN || soFar.length === posted) return;
    if (now - lastPost < PROGRESS_MS) return;
    if (!classify(soFar, 0).ok) return;
    lastPost = now;
    posted = soFar.length;
    api('/api/queue', {
      method: 'PUT',
      body: JSON.stringify({ id: job.id, status: 'progress', answer: soFar }),
    }).catch(() => { /* the final post is the one that matters */ });
  };

  try {
    const answer = await runner.run(prompt, onChunk);

    /* A storyboard is not the deliverable, the video is. So this job has one
       more stage than the others: the model writes the scenes, and then this
       machine renders them, because rendering needs a headless browser and
       ffmpeg and the deployment has neither.

       What goes back is the url of the file, not the scenes, so the learner's
       page has nothing to do but play it. */
    if (job.task === 'storyboard') {
      const made = await renderStoryboard(job, answer);
      await api('/api/queue', {
        method: 'PUT',
        body: JSON.stringify({ id: job.id, status: 'done', answer: made }),
      });
      console.log('    answered in ' + Math.round((Date.now() - started) / 1000) + 's');
      return;
    }

    await api('/api/queue', {
      method: 'PUT',
      body: JSON.stringify({ id: job.id, status: 'done', answer }),
    });
    console.log('    answered in ' + Math.round((Date.now() - started) / 1000)
      + 's, ' + answer.length + ' characters');
  } catch (err) {
    const why = String(err.message || 'unknown').split('\n')[0];
    console.log('    failed: ' + why.slice(0, 140));
    /* The learner is told something true and short. The detail stays here,
       because "OAuth token invalid" is not their problem to read. */
    await api('/api/queue', {
      method: 'PUT',
      body: JSON.stringify({
        id: job.id,
        status: 'error',
        answer: 'The tutor could not answer just now. The written explanation '
          + 'above still stands, and you can ask again.',
      }),
    }).catch(() => { /* the site may be down too; the job goes stale and is retried */ });
  }
}

/**
 * Render the scenes the model just wrote, and hand back where the file is.
 *
 * Named from the job, so the same topic re-rendered overwrites rather than
 * filling the disk with near identical films. Returns JSON because that is
 * what the queue carries, and the client reads `video` out of it.
 */
async function renderStoryboard(job, answer) {
  const style = String(job.style || job.subject_style || '') || 'school';
  const board = readStoryboard(answer, job.subject || 'topic', job.topic_title || '', style);
  if (!board) {
    /* Better to say nothing came back than to render an empty film. */
    return JSON.stringify({ error: 'The storyboard could not be read.' });
  }

  fs.mkdirSync(RENDERS, { recursive: true });
  const stem = 'lesson-' + String(job.id).replace(/[^a-z0-9]+/gi, '-');
  const name = stem + '.mp4';

  /* Speak every line before rendering, because the length of the audio decides
     how long its scene runs. Written into Remotion's public folder, which is
     the only place `staticFile` can reach.

     Each file is named from the job and the scene, so re-rendering a topic
     overwrites rather than filling the folder with near identical takes. */
  let spoken = 0;
  if (narrationProvider() !== 'none') {
    const voices = path.resolve('public', 'narration');
    fs.mkdirSync(voices, { recursive: true });
    for (let i = 0; i < board.scenes.length; i++) {
      const rel = 'narration/' + stem + '-' + i + '.wav';
      const secs = await speak(board.scenes[i].say, path.join(voices, path.basename(rel)));
      if (secs > 0) {
        board.scenes[i].audio = rel;
        board.scenes[i].audioSeconds = secs;
        spoken += 1;
      }
    }
  }

  const boardPath = path.join(RENDERS, stem + '.json');
  fs.writeFileSync(boardPath, JSON.stringify({ board }));

  const out = path.join(RENDERS, name);
  console.log('    ' + board.scenes.length + ' scenes, style ' + board.style
    + ', ' + (spoken ? spoken + ' narrated' : 'no narration') + ', rendering');
  await render(boardPath, out, m => console.log(m));

  return JSON.stringify({
    video: '/renders/' + name,
    scenes: board.scenes.length,
    narrated: spoken,
    style: board.style,
  });
}

async function main() {
  if (!SECRET) {
    console.error('\n  EDU_WORKER_SECRET is not set.\n');
    console.error('  Set the same long random string here and on the deployment:\n');
    console.error('    vercel env add EDU_WORKER_SECRET production');
    console.error('    setx EDU_WORKER_SECRET "your-long-random-string"\n');
    process.exit(1);
  }

  console.log('\nNEXA•EDU tutor worker');
  console.log('  site     ' + SITE);
  console.log('  claude   ' + resolveClaude());
  console.log('  model    ' + MODEL);
  console.log('  account  ' + (process.env.CLAUDE_CODE_OAUTH_TOKEN
    ? 'subscription token, headless'
    : 'the interactive login on this machine'));
  console.log('\nWaiting for questions. Ctrl+C to stop.\n');

  let quiet = 0;
  for (;;) {
    let job = null;
    try {
      const got = await api('/api/queue?claim=1', { method: 'GET' });
      job = got && got.job;
    } catch (err) {
      /* A deployment that is down, or a wrong secret. Say it once rather than
         once a second, so the window stays readable. */
      if (quiet % 25 === 0) console.log('  cannot reach the queue: ' + err.message.slice(0, 120));
      quiet += 1;
      await wait(5000);
      continue;
    }
    quiet = 0;

    if (!job) { await wait(IDLE_MS); continue; }
    await work(job);
    await wait(BUSY_MS);
  }
}

main().catch((err) => {
  console.error('\n  the worker stopped: ' + (err.message || err) + '\n');
  process.exit(1);
});
