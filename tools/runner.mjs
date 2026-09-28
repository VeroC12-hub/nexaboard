// tools/runner.mjs
// Runs one prompt through Claude Code on this machine.
//
// This is the same arrangement as the exam engine's worker, and the reasons
// behind each flag were learned there rather than guessed here:
//
//   - the real claude binary, not the npm .cmd shim, which subprocesses on
//     Windows cannot drive reliably
//   - MCP servers off, because they hang the run
//   - user settings skipped, because a plugin hook can fail the run
//   - the prompt on stdin, never as an argument: Windows caps a command line at
//     about 32,000 characters and a long explanation prompt can exceed it
//
// Claude Code reports failures on STDOUT with exit code 1 rather than on
// stderr, so every reply is classified before it is trusted. Without that the
// worker would post "Failed to authenticate. API Error: 401" to a learner as
// though it were the lesson.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

/** A tutor's explanation is short work. Long enough for a slow cold start. */
const TASK_TIMEOUT_MS = 3 * 60 * 1000;

/** The real binary, preferred over the shim. */
export function resolveClaude() {
  if (process.env.CLAUDE_BIN) return process.env.CLAUDE_BIN;
  const roots = [
    process.env.APPDATA ? path.join(process.env.APPDATA, 'npm') : null,
    '/usr/local/lib',
    '/usr/lib',
    path.join(os.homedir(), '.npm-global', 'lib'),
    path.join(os.homedir(), '.local/share/npm/lib'),
  ].filter(Boolean);
  for (const r of roots) {
    for (const bin of ['claude.exe', 'claude']) {
      const p = path.join(r, 'node_modules/@anthropic-ai/claude-code/bin', bin);
      if (fs.existsSync(p)) return p;
    }
  }
  return 'claude';
}

/** Claude Code writes UTF-8 when piped, but a Windows console codepage can
 *  leak through, which is what turns a dash into mojibake. */
export function decode(buf) {
  if (!buf || !buf.length) return '';
  const utf8 = buf.toString('utf8');
  if (!utf8.includes('�')) return utf8;
  return buf.toString('latin1');
}

/**
 * Is this reply an answer, or a failure wearing one's clothes?
 *
 * 'limit' and 'auth' are worth telling apart from a plain error, because they
 * are the two a person can actually do something about.
 */
export function classify(text, exitCode) {
  const t = String(text || '').trim();
  const head = t.slice(0, 400);

  if (/usage limit|rate limit|too many requests|429|quota|limit reached|try again later/i.test(head)) {
    return { ok: false, kind: 'limit', message: head.split('\n')[0] };
  }
  if (/failed to authenticate|oauth access token is invalid|invalid api key|please run \/login|401|403|credit balance/i.test(head)) {
    return { ok: false, kind: 'auth', message: head.split('\n')[0] };
  }
  /* A short reply that is only an API error line is a failure whatever the code. */
  if (/^API Error:/i.test(head)) {
    return { ok: false, kind: 'error', message: head.split('\n')[0] };
  }
  if (!t) return { ok: false, kind: 'empty', message: 'no output' };
  if (exitCode !== 0 && t.length < 200) {
    return { ok: false, kind: 'error', message: head.split('\n')[0] };
  }
  return { ok: true, kind: 'answer', message: '' };
}

export class Runner {
  constructor(opts = {}) {
    this.claude = opts.claude || resolveClaude();
    this.model = opts.model || 'sonnet';
    this.workdir = opts.workdir || path.join(os.tmpdir(), 'nexaedu-tutor');
    this.log = opts.log || (() => {});
    /* The engine tried when this one is out of allowance. Injected rather than
       constructed here, so `runner.mjs` does not have to know what a backup
       is and a caller can supply a different one or none. */
    this.backup = opts.backup || null;
    fs.mkdirSync(this.workdir, { recursive: true });
  }

  /**
   * One attempt. Never throws: the verdict says what happened.
   *
   * `onChunk` sees the reply as it is written, so a caller can put the first
   * sentence in front of a learner while the rest is still coming. That needs
   * the streaming output format: `--output-format text` hands over the whole
   * answer in one piece at the end, which is a wait of twenty seconds looking
   * at nothing. It is given everything so far rather than the delta, because
   * the text is only trustworthy once judged as a whole and the caller has to
   * be able to judge it again each time.
   */
  attempt(prompt, onChunk) {
    return new Promise((resolve) => {
      const streaming = !!onChunk;
      const args = [
        '-p',
        '--model', this.model,
        ...(streaming
          ? ['--output-format', 'stream-json', '--include-partial-messages', '--verbose']
          : ['--output-format', 'text']),
        '--strict-mcp-config',                 // no MCP servers, they hang the run
        '--setting-sources', 'project,local',  // skip user plugins, their hooks can fail the run
        /* The tutor writes prose. It has no reason to touch this machine. */
        '--allowedTools', '',
        '--add-dir', this.workdir,
      ];

      let child;
      try {
        child = spawn(this.claude, args, {
          cwd: this.workdir,
          windowsHide: true,
          shell: false,
          env: { ...process.env },
        });
      } catch (err) {
        resolve({ out: '', verdict: classify(err.message, 1) });
        return;
      }

      const outChunks = [];
      const errChunks = [];

      /* Streaming mode: whole JSON lines are events, and a trailing partial
         line is held until the rest of it arrives. The decoder is kept across
         chunks so a multi-byte character split down the middle by the pipe is
         held too, rather than arriving as a question mark. */
      const utf8 = new TextDecoder('utf-8');
      let pending = '';
      let written = '';   // the answer, assembled from text deltas
      let settled = '';   // the final text, when the run reports one

      const onLine = (line) => {
        const t = line.trim();
        if (!t || t[0] !== '{') return;
        let ev;
        try { ev = JSON.parse(t); } catch (e) { return; }

        if (ev.type === 'stream_event' && ev.event
            && ev.event.type === 'content_block_delta'
            && ev.event.delta && ev.event.delta.type === 'text_delta') {
          written += ev.event.delta.text || '';
          try { onChunk(written); } catch (e) { /* the caller's problem */ }
          return;
        }
        /* The run's own final answer, preferred over the deltas because it is
           what Claude Code considers the reply. */
        if (typeof ev.result === 'string' && ev.result.trim()) settled = ev.result;
      };

      let done = false;
      const finish = (code, extra) => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        if (streaming) {
          pending += utf8.decode();
          if (pending) { onLine(pending); pending = ''; }
        }
        const raw = decode(Buffer.concat(outChunks)).trim();
        const out = streaming ? (settled || written).trim() : raw;
        const err = extra || decode(Buffer.concat(errChunks));
        /* Judged on the prose when there is prose, and otherwise on whatever
           came out, which is where an authentication failure would be. */
        resolve({ out, verdict: classify(out || raw || err, code) });
      };

      const timer = setTimeout(() => {
        try { child.kill(); } catch (e) { /* already gone */ }
        finish(1, 'Claude Code did not finish within '
          + Math.round(TASK_TIMEOUT_MS / 60000) + ' minutes.');
      }, TASK_TIMEOUT_MS);

      child.stdout.on('data', (d) => {
        outChunks.push(d);
        if (!streaming) return;
        pending += utf8.decode(d, { stream: true });
        const lines = pending.split(/\r?\n/);
        pending = lines.pop() ?? '';   // the last piece may be half a line
        for (const line of lines) onLine(line);
      });
      child.stderr.on('data', (d) => errChunks.push(d));
      child.on('error', (err) => finish(1, err.message));
      child.on('close', (code) => finish(typeof code === 'number' ? code : 0));

      /* A closed pipe is normal if Claude exits early, and must not take the
         worker down with it. */
      child.stdin.on('error', () => { /* the child stopped reading */ });
      child.stdin.end(prompt, 'utf8');
    });
  }

  /**
   * Run a prompt, on whichever engine still has allowance.
   *
   * ── Why there is a chain ──────────────────────────────────────────────────
   *
   * This used to be one attempt on Claude, and a learner mid lesson whose
   * subscription had run out was told the tutor was unavailable. That was true
   * and useless: a second allowance was sitting on the same machine.
   *
   * So the order is Claude, then Codex, and the first with allowance answers.
   * A `limit` or `auth` verdict is the whole reason this exists and moves on
   * immediately. A plain `error` or an empty reply also moves on, because from
   * the learner's side an engine that errors and an engine that is out are the
   * same thing, and the second engine costs a few seconds to try.
   *
   * Images are deliberately NOT part of this chain: they go to OpenAI, a
   * different account, so a lesson's pictures never consume the allowance its
   * words need.
   */
  async run(prompt, onChunk) {
    const tried = [];

    const first = await this.attempt(prompt, onChunk);
    if (first.verdict.ok) return first.out;
    tried.push('Claude: ' + (first.verdict.message || first.verdict.kind));
    this.log('  claude ' + first.verdict.kind + ', trying the next engine');

    const backup = this.backup;
    if (backup && backup.available) {
      /* No `onChunk`. Codex runs to completion, and anything already streamed
         from the failed attempt has to be discarded by the caller rather than
         appended to, which is why `classify` is applied to the whole text
         each time. */
      const second = await backup.attempt(prompt);
      if (second.verdict.ok) {
        this.log('  codex answered');
        return second.out;
      }
      tried.push('Codex: ' + (second.verdict.message || second.verdict.kind));
    } else {
      tried.push('Codex: not installed');
    }

    throw new Error('No engine could answer. ' + tried.join('; '));
  }
}
