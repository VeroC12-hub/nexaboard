// api/queue.js
//
// The tutor without an API key.
//
// A deployment with no ANTHROPIC_API_KEY cannot answer for itself, but a
// machine you own, signed into Claude Code on your own subscription, can. This
// is the queue between the two:
//
//   POST   /api/queue            a learner's page submits a job, gets an id
//   GET    /api/queue?id=...     the page polls for the answer
//   GET    /api/queue?claim=1    the worker claims the next pending job
//   PUT    /api/queue            the worker posts the finished answer
//
// The store is Supabase rather than memory, for the same reason as in the exam
// engine: Vercel runs many instances, so an in-memory queue loses the job
// between the browser that submitted it and the worker that answers it.
//
// Nothing here talks to any model. The prompt is assembled here, so a learner's
// profile becomes instructions through the same code whichever route answers,
// and the worker only runs what it is handed.

import { buildSystem, SHAPES, TASKS } from './prompt.js';

const SUPA_URL = process.env.SUPABASE_URL || '';
const SUPA_KEY = process.env.SUPABASE_SERVICE_KEY || '';
const TABLE = '/rest/v1/edu_jobs';

/** How long a claimed job may sit untouched before another worker may take it. */
const STALE_MINUTES = 15;

/** A learner watching a spinner has stopped learning, so this is short. */
const GIVE_UP_MS = 4 * 60 * 1000;

const headers = (extra) => ({
  apikey: SUPA_KEY,
  Authorization: 'Bearer ' + SUPA_KEY,
  'content-type': 'application/json',
  ...extra,
});

async function supa(pathname, init) {
  const res = await fetch(SUPA_URL + pathname, { ...init, headers: headers(init && init.headers) });
  const text = await res.text();
  if (!res.ok) throw new Error('store ' + res.status + ': ' + text.slice(0, 200));
  return text ? JSON.parse(text) : null;
}

function workerAuthorised(req) {
  const want = process.env.EDU_WORKER_SECRET || '';
  if (!want) return false;
  return String(req.headers['x-worker-secret'] || '') === want;
}

function configured(res) {
  if (SUPA_URL && SUPA_KEY && process.env.EDU_WORKER_SECRET) return true;
  res.status(501).json({
    error: 'No tutor is configured for this deployment. It needs SUPABASE_URL, '
      + 'SUPABASE_SERVICE_KEY and EDU_WORKER_SECRET set here, plus '
      + 'tools/tutor-worker.mjs running on a machine signed into Claude Code. '
      + 'The written explanations work without any of that.',
  });
  return false;
}

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');
  if (!configured(res)) return;

  try {
    // ------------------------------------------------------- submit a job
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const task = Object.hasOwn(TASKS, body.task) ? body.task : 'explain';
      const shape = SHAPES[task] ?? SHAPES.explain;

      /* A question for the tutoring tasks, a topic for the teaching ones.
         Refused here rather than sent to a worker that can do nothing with it. */
      if (shape.needs === 'question' && !String(body.question || '').trim()) {
        res.status(400).json({ error: 'No question was sent.' });
        return;
      }
      if (shape.needs === 'topic' && !String(body.topic || '').trim()) {
        res.status(400).json({ error: 'No topic was sent.' });
        return;
      }

      const learner = body.learner && typeof body.learner === 'object' ? body.learner : {};

      const [saved] = await supa(TABLE, {
        method: 'POST',
        headers: { Prefer: 'return=representation' },
        body: JSON.stringify({
          status: 'pending',
          task,
          subject: String(body.subjectId || '').slice(0, 60),
          /* Carried so the worker can render the storyboard without having to
             understand learners or subjects: it needs the style and the topic
             title, and nothing else. */
          style: String(body.style || '').slice(0, 20) || null,
          topic_title: String(body.topic || '').slice(0, 300) || null,
          /* The prompt is built here and stored whole, so the worker never has
             to know anything about learners, subjects or teaching. */
          system: buildSystem({
            subjectId: String(body.subjectId || ''),
            subjectName: String(body.subjectName || ''),
            learner,
            task,
            syllabus: body.syllabus && typeof body.syllabus === 'object' ? body.syllabus : null,
          }),
          instruction: shape.build({
            question: String(body.question || '').slice(0, 4000),
            answer: String(body.answer || '').slice(0, 2000),
            given: body.given,
            topic: String(body.topic || '').slice(0, 300),
            askedFor: String(body.askedFor || '').slice(0, 600),
            lesson: String(body.lesson || '').slice(0, 6000),
            count: body.count,
            level: body.level,
            avoid: body.avoid,
            round: body.round,
          }),
        }),
      });
      res.status(200).json({ id: saved.id, status: 'pending' });
      return;
    }

    // -------------------------------------------------- claim, or poll
    if (req.method === 'GET') {
      const url = new URL(req.url, 'http://x');

      if (url.searchParams.get('claim')) {
        if (!workerAuthorised(req)) { res.status(401).json({ error: 'Bad worker secret.' }); return; }

        let pending = await supa(
          TABLE + '?status=eq.pending&order=created_at.asc&limit=1', { method: 'GET' });

        /* A worker closed mid job leaves it marked running for ever. Anything
           claimed long enough ago that no worker could still be on it is
           offered again rather than lost. */
        if (!pending || !pending.length) {
          const stale = new Date(Date.now() - STALE_MINUTES * 60 * 1000).toISOString();
          const abandoned = await supa(TABLE + '?status=eq.running&claimed_at=lt.'
            + encodeURIComponent(stale) + '&order=claimed_at.asc&limit=1', { method: 'GET' });
          if (abandoned && abandoned.length) {
            const back = await supa(TABLE + '?id=eq.' + abandoned[0].id + '&status=eq.running', {
              method: 'PATCH',
              headers: { Prefer: 'return=representation' },
              body: JSON.stringify({ status: 'pending' }),
            });
            pending = back && back.length ? back : [];
          }
        }

        if (!pending || !pending.length) { res.status(200).json({ job: null }); return; }
        const job = pending[0];
        /* Claimed by id AND status together, so two workers cannot take one job. */
        const claimed = await supa(TABLE + '?id=eq.' + job.id + '&status=eq.pending', {
          method: 'PATCH',
          headers: { Prefer: 'return=representation' },
          body: JSON.stringify({ status: 'running', claimed_at: new Date().toISOString() }),
        });
        if (!claimed || !claimed.length) { res.status(200).json({ job: null }); return; }
        res.status(200).json({ job: claimed[0] });
        return;
      }

      const id = url.searchParams.get('id');
      if (!id) { res.status(400).json({ error: 'Missing job id.' }); return; }
      const rows = await supa(TABLE + '?id=eq.' + encodeURIComponent(id)
        + '&select=status,answer,claimed_at', { method: 'GET' });
      if (!rows || !rows.length) {
        res.status(404).json({ error: 'That question has expired. Ask again.' });
        return;
      }
      const job = rows[0];

      /* A claimed job whose worker died must not leave a learner waiting. */
      if (job.status === 'running' && job.claimed_at
          && Date.now() - new Date(job.claimed_at).getTime() > GIVE_UP_MS) {
        res.status(200).json({
          status: 'error',
          answer: 'The tutor machine did not answer in time. The written '
            + 'explanation above still stands.',
        });
        return;
      }
      res.status(200).json({ status: job.status, answer: job.answer });
      return;
    }

    // ------------------------------------------------------ post an answer
    if (req.method === 'PUT') {
      if (!workerAuthorised(req)) { res.status(401).json({ error: 'Bad worker secret.' }); return; }
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      if (!body.id) { res.status(400).json({ error: 'Missing job id.' }); return; }

      /* 'progress' leaves the job running, so a long explanation can appear in
         parts rather than all at once at the end. */
      const partial = body.status === 'progress';
      await supa(TABLE + '?id=eq.' + encodeURIComponent(body.id), {
        method: 'PATCH',
        body: JSON.stringify(partial ? {
          status: 'running',
          answer: String(body.answer || ''),
        } : {
          status: body.status === 'error' ? 'error' : 'done',
          answer: String(body.answer || ''),
          finished_at: new Date().toISOString(),
        }),
      });
      res.status(200).json({ ok: true });
      return;
    }

    res.status(405).json({ error: 'Method not allowed.' });
  } catch (err) {
    res.status(500).json({ error: 'The tutor queue failed: ' + (err.message || 'unknown error') });
  }
}
