// tools/tts.mjs
//
// Turning a line of a storyboard into a spoken WAV file.
//
// The video needs its narration baked into the MP4, so the browser's own
// speech synthesis is no use here: that speaks out loud on a device and cannot
// hand back a file. This needs a synthesiser that writes audio.
//
// ── Which voice ──────────────────────────────────────────────────────────────
//
// Three providers, chosen by EDU_TTS, and the default needs nothing installed:
//
//   sapi    Windows' own speech synthesis, through PowerShell. Free, offline,
//           on every Windows machine, and it has an en-GB voice, which is
//           closer to Ghanaian English convention than the American one. The
//           quality is dated. It is the default because it works today on the
//           machine that renders, with no download and no key.
//
//   piper   Open source, MIT, runs on a CPU, and markedly better. Set
//           PIPER_BIN and PIPER_VOICE to use it. About sixty megabytes of
//           voice model, which is why it is not the default.
//
//   none    No narration. The video still renders, with the line on screen as
//           a subtitle, which is what it did before any of this existed.
//
// A learner on a borrowed phone in a noisy room is reading the subtitle anyway,
// so narration adds to the lesson and is never the only way through it.

import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PROVIDER = process.env.EDU_TTS
  || (process.platform === 'win32' ? 'sapi' : 'none');

/** en-GB by preference: Ghanaian English follows British convention. */
const SAPI_VOICE = process.env.EDU_TTS_VOICE || 'Microsoft Hazel Desktop';

/** Slower than default. A child following a count needs the pauses. */
const SAPI_RATE = Number(process.env.EDU_TTS_RATE ?? -2);

export const narrationProvider = () => PROVIDER;

/**
 * How long a WAV runs, from its own header.
 *
 * Needed because a scene must be at least as long as the words spoken over it,
 * and guessing from the word count, which is what this replaced, was wrong by
 * a second or more either way. Returns 0 for anything unreadable, which makes
 * the caller fall back to the estimate rather than cut the audio off.
 */
export function wavSeconds(file) {
  try {
    const buf = fs.readFileSync(file);
    if (buf.length < 44 || buf.toString('ascii', 0, 4) !== 'RIFF') return 0;

    /* Walk the chunks rather than assuming the canonical 44 byte header:
       SAPI writes a fact chunk on some formats and the offsets move. */
    let at = 12;
    let rate = 0;
    let channels = 0;
    let bits = 0;
    let dataBytes = 0;
    while (at + 8 <= buf.length) {
      const id = buf.toString('ascii', at, at + 4);
      const size = buf.readUInt32LE(at + 4);
      if (id === 'fmt ') {
        channels = buf.readUInt16LE(at + 10);
        rate = buf.readUInt32LE(at + 12);
        bits = buf.readUInt16LE(at + 22);
      } else if (id === 'data') {
        dataBytes = Math.min(size, buf.length - at - 8);
        break;
      }
      at += 8 + size + (size % 2);
    }
    if (!rate || !channels || !bits || !dataBytes) return 0;
    return dataBytes / (rate * channels * (bits / 8));
  } catch {
    return 0;
  }
}

/** Escape a line for a PowerShell single quoted string. */
const forPowerShell = (text) => text.replace(/'/g, "''");

function viaSapi(text, out) {
  return new Promise((resolve, reject) => {
    /* Written as one script rather than a here-string so nothing in the line
       being spoken can be read as PowerShell. */
    const script = [
      'Add-Type -AssemblyName System.Speech;',
      '$s = New-Object System.Speech.Synthesis.SpeechSynthesizer;',
      `try { $s.SelectVoice('${forPowerShell(SAPI_VOICE)}') } catch { }`,
      `$s.Rate = ${Math.max(-10, Math.min(10, SAPI_RATE))};`,
      `$s.SetOutputToWaveFile('${forPowerShell(out)}');`,
      `$s.Speak('${forPowerShell(text)}');`,
      '$s.Dispose();',
    ].join(' ');

    const child = spawn('powershell', ['-NoProfile', '-NonInteractive', '-Command', script], {
      windowsHide: true,
    });
    let noise = '';
    child.stderr.on('data', d => { noise += d; });
    child.on('error', reject);
    child.on('close', code => {
      if (code === 0 && fs.existsSync(out) && fs.statSync(out).size > 1024) {
        resolve(out);
        return;
      }
      reject(new Error('speech failed: ' + (noise.split('\n')[0] || 'no audio written')));
    });
  });
}

function viaPiper(text, out) {
  return new Promise((resolve, reject) => {
    const bin = process.env.PIPER_BIN;
    const voice = process.env.PIPER_VOICE;
    if (!bin || !voice) { reject(new Error('PIPER_BIN and PIPER_VOICE are not set')); return; }

    const child = spawn(bin, ['--model', voice, '--output_file', out], { windowsHide: true });
    let noise = '';
    child.stderr.on('data', d => { noise += d; });
    child.on('error', reject);
    child.on('close', code => {
      if (code === 0 && fs.existsSync(out)) { resolve(out); return; }
      reject(new Error('piper failed: ' + (noise.split('\n')[0] || code)));
    });
    child.stdin.end(text, 'utf8');
  });
}

/**
 * Speak one line to a file.
 *
 * Returns the duration in seconds, or 0 when there is no narration, so a
 * caller can tell "no voice on this machine" from "a voice that failed"
 * without catching anything.
 */
export async function speak(text, out) {
  const line = String(text || '').trim();
  if (!line || PROVIDER === 'none') return 0;

  fs.mkdirSync(path.dirname(out), { recursive: true });
  try {
    if (PROVIDER === 'piper') await viaPiper(line, out);
    else await viaSapi(line, out);
  } catch (err) {
    /* Narration is an addition. A lesson with subtitles and no voice is a
       lesson; a render that fails because a voice was missing is not. */
    console.log('    no narration: ' + String(err.message).slice(0, 90));
    return 0;
  }
  return wavSeconds(out);
}
