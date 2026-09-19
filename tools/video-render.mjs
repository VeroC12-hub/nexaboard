// tools/video-render.mjs
//
// Turns a storyboard into an MP4.
//
// Runs on the same machine as the tutor worker, because rendering needs a
// headless browser and ffmpeg and Vercel is the wrong place for either. That is
// also why it can exist at all: Remotion renders on a CPU, so the laptop that
// answers the tutor queue can make the video too. No GPU, no key, no per render
// charge.
//
//   node tools/video-render.mjs board.json out.mp4
//
// The board is the JSON Claude wrote for the `storyboard` task, already read
// and validated by `storyboard.ts` on the way through, so nothing here has to
// trust it beyond checking that it has scenes.

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn } from 'node:child_process';

/** Where finished videos go. Git ignored: these are large and regenerable. */
export const RENDERS = path.resolve('.renders');

/**
 * Render one board.
 *
 * Resolves to the path of the file. Rejects with something a person can read,
 * because the commonest failures here are environmental: a browser that will
 * not start, a disk that is full.
 */
export function render(boardPath, outPath, log = () => {}) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    const args = [
      'remotion', 'render', 'video/index.ts', 'Lesson', outPath,
      '--props=' + boardPath,
      /* Quiet: the per frame progress is thousands of lines and the worker's
         window is meant to stay readable. */
      '--log=error',
    ];

    /* No shell. With `shell: true` the arguments are concatenated rather than
       escaped, so a render path containing a space or a quote would become part
       of the command. Node warns about exactly this. On Windows the .cmd
       shim has to be named explicitly instead. */
    const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    const child = spawn(npx, args, {
      cwd: process.cwd(),
      windowsHide: true,
      shell: false,
      env: { ...process.env },
    });

    let noise = '';
    child.stdout.on('data', d => { noise += d; });
    child.stderr.on('data', d => { noise += d; });

    /* Long enough for a ninety second video on a slow laptop, short enough
       that a wedged browser does not hold the queue all day. */
    const timer = setTimeout(() => {
      try { child.kill(); } catch (e) { /* already gone */ }
      reject(new Error('The render did not finish within ten minutes.'));
    }, 10 * 60 * 1000);

    child.on('error', err => { clearTimeout(timer); reject(err); });
    child.on('close', code => {
      clearTimeout(timer);
      if (code === 0 && fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
        log('    ' + path.basename(outPath) + ' '
          + Math.round(fs.statSync(outPath).size / 1024) + ' kB');
        resolve(outPath);
        return;
      }
      reject(new Error('Render failed: ' + noise.split('\n').filter(Boolean).slice(-3).join(' ')));
    });
  });
}

/** Run directly, for testing one board by hand. */
const direct = process.argv[1] && process.argv[1].endsWith('video-render.mjs');
if (direct) {
  const [boardPath, outPath] = process.argv.slice(2);
  if (!boardPath) {
    console.error('usage: node tools/video-render.mjs board.json [out.mp4]');
    process.exit(1);
  }
  const out = outPath || path.join(RENDERS, 'lesson-' + Date.now() + '.mp4');
  const started = Date.now();
  render(boardPath, out, m => console.log(m))
    .then(p => {
      console.log('rendered in ' + Math.round((Date.now() - started) / 1000) + 's');
      console.log(p);
    })
    .catch(e => { console.error(String(e.message)); process.exit(1); });
}

export const TEMP = os.tmpdir();
