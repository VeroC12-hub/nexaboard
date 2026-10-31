# The tutor, without an API key

NEXA•EDU's tutor answers a learner who has just got something wrong. It can be
paid for per token, and it does not have to be. The arrangement below is the one
already proven in the exam engine: a machine you own, signed into Claude Code on
your own subscription, does the work, and the hosted site holds a queue between
that machine and the learner's phone.

Nothing is billed per token, and no key exists in the browser on either route.

---

## The two routes

| Route | When it answers | What it costs |
|---|---|---|
| `api/tutor.js` | when `ANTHROPIC_API_KEY` is set on the deployment | per token |
| `api/queue.js` + `tools/tutor-worker.mjs` | otherwise | nothing beyond your subscription |

`src/lib/education/ai.ts` tries the first and falls back to the second, so
adding a key later speeds the tutor up without changing anything else. With
neither configured the courses still teach: the written explanation is always on
the page before the tutor is offered, and the tutor says in one line that it is
not available.

The prompt is assembled in `api/prompt.js` and used by both routes, so the
teaching lives in one place. The learner's year, what they are here for, how
they asked to be taught, and the note they wrote in their own words all become
instructions there. The worker knows none of that: it runs the prompt it is
handed and posts the prose back.

---

## Setting up the free route

### 1. The table

Run `supabase/migrations/20260917000001_edu_jobs.sql` in the Supabase SQL
editor. It creates `edu_jobs` with row level security on and no policies, so
only a serverless function holding the service key can reach it.

### 2. The deployment

Three variables on the Vercel project:

```
SUPABASE_URL           https://<project>.supabase.co
SUPABASE_SERVICE_KEY   the service role key, never the anon key
EDU_WORKER_SECRET      a long random string you invent
```

The service key must not appear in any `VITE_` variable. Anything prefixed
`VITE_` is compiled into the bundle and is therefore public.

### 3. The machine that answers

Claude Code, signed in once:

```bash
npm install -g @anthropic-ai/claude-code
claude          # sign in, then quit
```

Then the worker, with the same secret:

```bash
EDU_WORKER_SECRET=the-same-long-random-string \
EDU_SITE=https://your-deployment.vercel.app \
  node tools/tutor-worker.mjs
```

It prints what it is using and waits:

```
NEXA•EDU tutor worker
  site     https://your-deployment.vercel.app
  claude   .../claude-code/bin/claude.exe
  model    sonnet
  account  the interactive login on this machine

Waiting for questions. Ctrl+C to stop.
```

A learner anywhere in the world can now be taught. The site holds the queue, so
this machine only has to be on.

### For a host that is not your laptop

`claude setup-token` prints a long-lived token that authenticates against your
subscription. Put it in `CLAUDE_CODE_OAUTH_TOKEN` on a small always-on box and
the laptop can be shut. Treat it like a password: anyone holding it can spend
your subscription.

---

## Working on it locally

`npm run dev` serves `api/` as well, through `tools/vite-api.mjs`, so both
routes can be tried without deploying. Each request re-imports the handler, so
an edit to `api/prompt.js` shows up on the next question.

```bash
SUPABASE_URL=... SUPABASE_SERVICE_KEY=... EDU_WORKER_SECRET=shhh npm run dev
EDU_SITE=http://127.0.0.1:5173 EDU_WORKER_SECRET=shhh node tools/tutor-worker.mjs
```

---

## What the learner sees while waiting

The explanation arrives in parts rather than all at once. The worker runs Claude
Code with `--output-format stream-json --include-partial-messages`, posts what
has been written every second and a half, and the page shows each new piece as
it lands. Measured on this machine: first text at about five seconds, finished
at about ten.

Until the first words arrive the page says so in words rather than spinning a
shape, because the wait on this route is a machine being asked rather than a
model thinking, and a learner is owed the difference.

Two guards sit on that path. Claude Code reports failures on stdout with exit
code 1, so every reply is classified before it is trusted, and a part written
answer is classified again before it is posted: half of an authentication error
must never reach a learner dressed as a lesson.

---

## Settings

| Variable | Where | Default | What it does |
|---|---|---|---|
| `ANTHROPIC_API_KEY` | deployment | unset | turns on the paid route |
| `SUPABASE_URL` | deployment | unset | the queue's store |
| `SUPABASE_SERVICE_KEY` | deployment | unset | the queue's store |
| `EDU_WORKER_SECRET` | both | unset | must match, or the worker is refused |
| `EDU_SITE` | worker | the Vercel URL | which site to take work from |
| `EDU_WORKER_MODEL` | worker | `sonnet` | which model answers |
| `EDU_IDLE_MS` | worker | `1200` | how often an empty queue is checked |
| `CLAUDE_BIN` | worker | found automatically | the Claude Code binary |
| `CLAUDE_CODE_OAUTH_TOKEN` | worker | unset | for a headless host |
