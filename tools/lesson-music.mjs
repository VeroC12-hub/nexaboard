/**
 * The lesson's music, synthesised.
 *
 * ── Why the notes rise with the count ────────────────────────────────────────
 *
 * This is the one musical idea that is also a teaching idea. In every counting
 * song a child has ever heard, the pitch climbs as the number climbs, so "how
 * many" and "how high" become the same sensation. A child who cannot yet hold
 * ten in their head can still hear that ten is further up than three.
 *
 * So the ten counting notes are a scale, one per number, and they are the same
 * ten notes both times the video counts. The second, faster pass is then
 * recognisably the same tune played quicker, which is what makes it feel like
 * a reprise rather than a repeat.
 *
 * ── Why pentatonic ──────────────────────────────────────────────────────────
 *
 * A major scale has semitones in it, and two of its notes played close
 * together sound wrong to an ear that has not been taught otherwise. A
 * pentatonic scale has none: every note goes with every other note, in any
 * order, at any speed. It is why toy xylophones are tuned this way, and it
 * means the counting cannot sound bad even when a child taps ahead of the
 * beat in the game later.
 *
 * ── Why synthesised and not bought ──────────────────────────────────────────
 *
 * There is no music in this project and no licence to buy one under. Sine
 * waves with a hard decay and two harmonics is a passable mallet instrument,
 * it costs nothing, it ships in the repo, and it is ours. It is not a real
 * marimba and does not pretend to be.
 *
 *   node tools/lesson-music.mjs
 */

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import ffmpeg from 'ffmpeg-static'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const out = path.join(root, 'public', 'ananse', 'music')
fs.mkdirSync(out, { recursive: true })

/** C major pentatonic across two octaves: ten notes, one per number. */
const SCALE = [
  261.63, // C4   one
  293.66, // D4   two
  329.63, // E4   three
  392.00, // G4   four
  440.00, // A4   five
  523.25, // C5   six
  587.33, // D5   seven
  659.25, // E5   eight
  783.99, // G5   nine
  880.00, // A5   ten
]

function run(args) {
  execFileSync(ffmpeg, ['-y', '-hide_banner', '-loglevel', 'error', ...args])
}

/**
 * One struck note.
 *
 * A fundamental plus two harmonics, each decaying faster than the one below
 * it, which is roughly what a struck wooden bar does and is the difference
 * between a note and a beep. The short fade at the top stops the attack
 * clicking.
 */
function mallet(freq, seconds, gain = 0.5) {
  const f = freq
  return `${gain}*(`
    + `sin(2*PI*${f}*t)*exp(-3.6*t)`
    + ` + 0.34*sin(2*PI*${f * 2}*t)*exp(-6.5*t)`
    + ` + 0.14*sin(2*PI*${f * 3.01}*t)*exp(-10*t)`
    + `)*min(1,t*400)`
}

function tone(file, expr, seconds) {
  /* The expression is quoted because it contains commas, and ffmpeg's filter
     parser reads an unquoted comma as the end of the argument. There is no
     shell in the way here, so the quotes reach ffmpeg itself, which is what
     strips them. */
  run([
    '-f', 'lavfi',
    '-i', `aevalsrc='${expr}':d=${seconds}:s=44100`,
    '-ac', '1',
    file,
  ])
}

/* ── the ten counting notes ─────────────────────────────────────────────────*/

SCALE.forEach((freq, i) => {
  const n = String(i + 1).padStart(2, '0')
  tone(path.join(out, `count-${n}.wav`), mallet(freq, 1.1), 1.1)
})

/* ── what this no longer makes ─────────────────────────────────────────────
 *
 * It used to synthesise the arrival chime, the closing fanfare and a slow pad
 * under the whole video. All three are gone and the first two are now Kenney
 * CC0 steel drum jingles in this same folder.
 *
 * The reason is worth writing down. Sine waves with a decay make a passable
 * single note, which is why the counting scale survives, and they make a
 * thoroughly boring piece of music. The pad in particular was four notes
 * eight seconds apart: tasteful, and exactly the sort of thing a four year old
 * gets up and walks away from. A real recording of a real instrument beats
 * anything this file can generate, and Kenney gives them away.
 */

const files = fs.readdirSync(out).filter(f => /\.(wav|mp3)$/.test(f))
const bytes = files.reduce((n, f) => n + fs.statSync(path.join(out, f)).size, 0)
console.log(`${files.length} files, ${(bytes / 1024).toFixed(0)} KB in public/ananse/music`)
