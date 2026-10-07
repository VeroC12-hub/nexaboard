# Running the tutor worker somewhere that is always on

The deployed site holds the queue; this worker answers it. While it is not
running, a learner who asks for a lesson waits and gets nothing, and there is
no sign on the site that anything is wrong.

Today it runs in a PowerShell window on Godwin's laptop. That means lessons
stop for every learner when the laptop sleeps, loses its connection, or when
the window is closed. It has already happened twice in one day.

This directory is what moves it onto a box that stays on.

## What it costs

A small VPS is enough. The worker holds no state, keeps nothing on disk except
a usage log, and spends almost all of its time waiting on an empty queue.

- 1 vCPU, 1 GB RAM, Ubuntu 24.04
- about $6 a month at Hetzner, DigitalOcean or Linode
- Accra or Frankfurt: anywhere with a decent route to Vercel and Supabase

Writing still bills to the Claude subscription, not the API, so the VPS is the
whole additional cost.

## Step 1, on the box

```sh
sudo apt update && sudo apt install -y nodejs npm git
sudo npm install -g @anthropic-ai/claude-code

git clone https://github.com/VeroC12-hub/nexaboard.git
cd nexaboard
npm install
```

## Step 2, sign the subscription in

This is the one step that cannot be scripted, and it has to be done by the
person who owns the subscription.

On **your laptop**, not the box:

```sh
claude setup-token
```

That prints a long-lived token. It is a credential for the Claude
subscription: do not paste it into a chat, a commit, or an issue.

## Step 3, the environment

On the box, create `/etc/nexaedu.env`, readable only by root:

```sh
sudo install -m 600 /dev/null /etc/nexaedu.env
sudo nano /etc/nexaedu.env
```

```
CLAUDE_CODE_OAUTH_TOKEN=<the token from step 2>
EDU_WORKER_SECRET=<the same value as EDU_WORKER_SECRET on Vercel>
SUPABASE_URL=<as on Vercel>
SUPABASE_SERVICE_KEY=<as on Vercel>
OPENAI_API_KEY=<as on Vercel>
EDU_SITE=https://nexaboard-ten.vercel.app
EDU_LEDGER=/var/lib/nexaedu/tutor-usage.jsonl
```

`EDU_WORKER_SECRET` must match Vercel exactly or every poll is rejected with a
401 and the worker sits there reporting nothing to do. Check it with:

```sh
curl -s -o /dev/null -w '%{http_code}\n' \
  -H "x-worker-secret: $EDU_WORKER_SECRET" \
  "$EDU_SITE/api/queue?claim=1"
```

200 means the secret is right. 401 means it is not. Note that `claim=1` takes a
job if one is waiting and does not answer it; the queue reclaims an abandoned
job after fifteen minutes, so do this while nobody is using the site.

## Step 4, the service

```sh
sudo mkdir -p /var/lib/nexaedu
sudo cp deploy/worker/nexaedu-tutor.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now nexaedu-tutor
systemctl status nexaedu-tutor
journalctl -u nexaedu-tutor -f
```

The log looks like this, one block per job:

```
  job 1caf4e2f  lesson · maths
    answered in 15s, 3011 characters, 4210 in (2600 cached) / 820 out
```

## Checking it is actually working

The failure this is meant to prevent is silent: no learner, no error, just
nothing happening. Two checks that distinguish "quiet" from "broken":

```sh
# is it running and has it answered anything
journalctl -u nexaedu-tutor --since '1 hour ago' | grep -c 'answered in'

# what has it consumed, from the ledger
wc -l /var/lib/nexaedu/tutor-usage.jsonl
```

An empty ledger after a day when learners were definitely on the site means
the worker is not reaching the queue, not that nobody asked.

## What this does not solve

One worker, one subscription, one process. It answers jobs one at a time, each
taking 5 to 18 seconds, which is roughly 20 lessons an hour. That is ample for
tens of learners and not enough for a thousand: around 500 to 700 learners the
arithmetic stops working and the choice is a second subscription on a second
box or the Anthropic API. `tutor-usage.jsonl` is what will say when that point
is near, rather than a guess.

A burst is the likelier limit before then. A whole class signing in at 8am can
exhaust the subscription's rolling window while the monthly total is barely
touched. The queue turns that into a wait rather than an error, and
`tools/codex.mjs` fails writing over to the ChatGPT subscription, which has
never been exercised under a real limit and should be before a client is
watching.
