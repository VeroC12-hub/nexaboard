// The second writing engine: ChatGPT, through the Codex CLI.
//
// ── Why there are two ───────────────────────────────────────────────────────
//
// The tutor answered on one subscription and stopped when that subscription ran
// out. A learner mid lesson got "the tutor is unavailable", which is a true
// sentence and a useless one: there was a second allowance sitting on the same
// machine the whole time.
//
// The exam engine on this machine already does the right thing, and this copies
// it: a list of engines, the first with allowance left answers, and drawing
// billed to a different allowance from writing so pictures never eat the words'
// quota. Here, writing goes to Claude then to Codex, and images go to OpenAI,
// which is a separate account entirely.
//
// ── Why it is a whole file ──────────────────────────────────────────────────
//
// Because the two command lines have nothing in common. Claude Code streams
// JSON events and is told which tools it may use; Codex takes a prompt, runs to
// completion, and writes its final message to a file. Wrapping both in one
// function of flags would produce something neither readable nor correct.
//
// What they DO share is the verdict: `classify` in runner.mjs decides whether a
// reply is an answer or a failure wearing one's clothes, and the same rules
// apply to both, so it is imported rather than repeated. A limit is a limit
// whoever hit it.

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { classify, decode } from './runner.mjs';

/** Where the CLI is, or null. */
export function resolveCodex() {
  const named = process.env.EDU_CODEX_BIN;
  if (named && fs.existsSync(named)) return named;
  /* On Windows the npm shim is a .cmd; spawn without a shell will not find it
     by bare name, so both are tried and the path is used as given. */
  const guesses = process.platform === 'win32'
    ? [
      path.join(process.env.APPDATA || '', 'npm', 'codex.cmd'),
      path.join(process.env.APPDATA || '', 'npm', 'codex'),
    ]
    : ['/usr/local/bin/codex', '/usr/bin/codex'];
  for (const guess of guesses) {
    if (guess && fs.existsSync(guess)) return guess;
  }
  return null;
}

export class CodexRunner {
  constructor(opts = {}) {
    this.bin = opts.bin || resolveCodex();
    this.workdir = opts.workdir || path.join(os.tmpdir(), 'nexaedu-codex');
    this.log = opts.log || (() => {});
    this.model = opts.model || process.env.EDU_CODEX_MODEL || '';
    if (this.bin) fs.mkdirSync(this.workdir, { recursive: true });
  }

  get available() { return Boolean(this.bin); }

  /**
   * One attempt. Never throws: the verdict says what happened.
   *
   * No `onChunk`. Codex exec runs to completion and hands over its last
   * message, so there is nothing to stream, and pretending otherwise by
   * emitting the whole answer as one chunk at the end would make the waiting
   * copy on screen lie about what is happening. The caller streams from Claude
   * and waits for this one.
   */
  attempt(prompt) {
    return new Promise((resolve) => {
      if (!this.bin) {
        resolve({ out: '', verdict: { ok: false, kind: 'error', message: 'Codex CLI not found.' } });
        return;
      }

      /* The final message goes to a file rather than being scraped out of the
         transcript on stdout, which also carries reasoning and tool chatter. */
      const outFile = path.join(
        this.workdir,
        `answer-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}.txt`,
      );

      const args = [
        'exec',
        /* This runs in a temp directory, not a checkout. */
        '--skip-git-repo-check',
        /* The tutor writes prose and has no business touching the machine.
           Read only is the strictest policy that still lets it run. */
        '--sandbox', 'read-only',
        '--color', 'never',
        '-o', outFile,
        ...(this.model ? ['-c', `model="${this.model}"`] : []),
        /* A bare dash makes it read the prompt from stdin, which keeps a long
           lesson prompt off the command line and away from its length limits
           and its quoting rules. */
        '-',
      ];

      let child;
      try {
        child = spawn(this.bin, args, {
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
      let settled = false;

      const finish = (code, extra) => {
        if (settled) return;
        settled = true;

        let answer = '';
        try {
          if (fs.existsSync(outFile)) answer = fs.readFileSync(outFile, 'utf8').trim();
        } catch { /* fall through to the transcript */ }
        try { fs.rmSync(outFile, { force: true }); } catch { /* leave it */ }

        const transcript = decode(Buffer.concat(outChunks));
        const errText = decode(Buffer.concat(errChunks));

        /* The answer file is the answer. The transcript is only consulted when
           the file is empty, because then the useful information is whichever
           error was printed. */
        const text = answer || [transcript, errText, extra].filter(Boolean).join('\n');
        resolve({ out: answer, verdict: classify(text, code) });
      };

      child.stdout.on('data', (d) => outChunks.push(d));
      child.stderr.on('data', (d) => errChunks.push(d));
      child.on('error', (err) => finish(1, err.message));
      child.on('close', (code) => finish(typeof code === 'number' ? code : 0));

      child.stdin.on('error', () => { /* the child stopped reading */ });
      child.stdin.end(prompt, 'utf8');
    });
  }
}
