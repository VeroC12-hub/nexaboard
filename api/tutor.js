// api/tutor.js
//
// The tutor. One learner, one question they just got wrong, one explanation
// written for them rather than for everybody.
//
// Same shape as the exam engine's endpoints: POST only, the key lives here and
// never in the browser, 501 with a sentence a person can act on when the
// deployment has no key. The response is streamed as plain text, because a
// learner staring at a spinner has already stopped learning.

import Anthropic from '@anthropic-ai/sdk';
import { buildSystem, SHAPES, TASKS } from './prompt.js';

export const maxDuration = 60;

const MODEL = 'claude-opus-5';

/**
 * Long enough for a full explanation, short enough to keep the tutor honest.
 *
 * A lesson teaches a topic from nothing and needs more room than an
 * explanation of one wrong answer. An observation is one sentence, and giving
 * it four thousand tokens would only invite it to write an essay.
 */
const MAX_TOKENS = { lesson: 8000, questions: 8000, observe: 400, plan: 400 };
const DEFAULT_MAX_TOKENS = 4000;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Use POST.' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY || '';
  if (!apiKey) {
    /* Not an error the learner caused, so it says what is missing and who can
       fix it. The course itself keeps working without this endpoint. */
    res.status(501).json({
      error: 'This deployment has no ANTHROPIC_API_KEY set, so the tutor is off. '
        + 'The written explanations still work. Whoever deploys this can add the '
        + 'key in the project environment settings to turn the tutor on.',
    });
    return;
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const task = Object.hasOwn(TASKS, body.task) ? body.task : 'explain';
  const shape = SHAPES[task] ?? SHAPES.explain;

  /* The same requirement as the queue route, from the same table, so the two
     cannot drift into accepting different things. */
  if (shape.needs === 'question' && !String(body.question || '').trim()) {
    res.status(400).json({ error: 'No question was sent.' });
    return;
  }
  if (shape.needs === 'topic' && !String(body.topic || '').trim()) {
    res.status(400).json({ error: 'No topic was sent.' });
    return;
  }

  const system = buildSystem({
    subjectId: String(body.subjectId || ''),
    subjectName: String(body.subjectName || ''),
    learner: body.learner && typeof body.learner === 'object' ? body.learner : {},
    task,
    syllabus: body.syllabus && typeof body.syllabus === 'object' ? body.syllabus : null,
  });

  const user = shape.build({
    question: String(body.question || ''),
    answer: String(body.answer || ''),
    given: body.given,
    topic: String(body.topic || ''),
    askedFor: String(body.askedFor || ''),
    lesson: String(body.lesson || ''),
    count: body.count,
    level: body.level,
    avoid: body.avoid,
    round: body.round,
  });

  const client = new Anthropic({ apiKey });

  try {
    const stream = client.beta.messages.stream({
      model: MODEL,
      max_tokens: MAX_TOKENS[task] ?? DEFAULT_MAX_TOKENS,
      /* Working out where a learner's thinking went wrong is the hard part of
         this job, and it is the part they never see. */
      thinking: { type: 'adaptive' },
      system,
      messages: [{ role: 'user', content: user }],
      betas: ['server-side-fallback-2026-06-01'],
      fallbacks: [{ model: 'claude-opus-4-8' }],
    });

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    /* Proxies that buffer would undo the point of streaming. */
    res.setHeader('X-Accel-Buffering', 'no');

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        res.write(event.delta.text);
      }
    }

    const final = await stream.finalMessage();
    if (final.stop_reason === 'refusal') {
      res.write('\n\nI could not answer that one. Ask for the method instead, '
        + 'or go back and read the topic again.');
    }
    res.end();
  } catch (err) {
    const message =
      err instanceof Anthropic.RateLimitError
        ? 'The tutor is busy at the moment. Try again in a few seconds.'
        : err instanceof Anthropic.AuthenticationError
          ? 'The tutor key on this deployment is not being accepted.'
          : err instanceof Anthropic.APIConnectionError
            ? 'Could not reach the tutor. Check the connection and try again.'
            : 'The tutor could not finish that explanation.';

    /* Once bytes are on the wire the status is already sent, so the only honest
       thing left is to say so inside the text the learner is reading. */
    if (res.headersSent) {
      res.write(`\n\n${message}`);
      res.end();
      return;
    }
    const status = err instanceof Anthropic.APIError && err.status ? err.status : 502;
    res.status(status).json({ error: message });
  }
}
