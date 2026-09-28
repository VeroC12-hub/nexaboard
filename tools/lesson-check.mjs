/**
 * Check every lesson and every rendered lesson video, before anyone watches one.
 *
 * ── Why this exists ──────────────────────────────────────────────────────────
 *
 * A lesson video is expensive to look at. It is a minute long, it has to be
 * rendered first, and the faults that matter most are the ones you only notice
 * at the end: a line that was never baked, so the scene throws halfway through
 * a render that has already run for ten minutes, or a file that came out with
 * a perfect picture and no sound at all. Both have happened.
 *
 * None of that needs a person. A missing cue is a lookup, a silent video is one
 * ffmpeg filter, and a video that is eight seconds shorter than its own
 * timeline says means a scene was dropped. So they are checked here, and the
 * only thing left for a person to judge is whether the lesson is any good.
 *
 * ── What it deliberately does not do ─────────────────────────────────────────
 *
 * It cannot watch the video. Nothing here says the mangoes were in the right
 * place or that Ananse was looking at them. Every check is something a machine
 * can be certain about, because a checker that guesses gets ignored, and a
 * checker that is ignored is worse than no checker.
 *
 *   node tools/lesson-check.mjs
 */

import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import ffmpeg from 'ffmpeg-static'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const lessonsDir = path.join(root, 'video', 'ananse', 'lessons')
const narrationPath = path.join(root, 'video', 'ananse', 'narration.json')
const rendersDir = path.join(root, '.renders')

/** The three files every lesson folder owes. */
const REQUIRED = ['lines.json', 'lesson.ts', 'paint.tsx']

/**
 * Quieter than this and the track is silence.
 *
 * `volumedetect` reports the mean over the whole file. Real narration with
 * music under it sits around -20 dB; a track of digital silence reports -91 dB,
 * and a track that is technically not silent but inaudible sits below -70. So
 * -60 separates "somebody muted the audio" from "this lesson is softly spoken"
 * without ever having to think about which.
 */
const SILENT_DB = -60

/** How far a render may be from its own timeline before something was lost. */
const DRIFT = 1.0

/* A line that is spoken aloud. Both of these are read by the voice as a pause
   at best and as nothing at worst, and the owner has banned them in writing. */
const DASHES = new RegExp('[\\u2014\\u2013\\u2012\\u2015]')

/** A wall of forty identical lines helps nobody. Show enough to act on. */
function some(lines, most = 6) {
  const head = lines.slice(0, most).map(l => `        "${l}"`)
  if (lines.length > most) head.push(`        ...and ${lines.length - most} more`)
  return head.join('\n')
}

/** One line of somebody else's stack trace is a clue; forty is a wall. */
const gist = (message) =>
  String(message).split('\n').map(l => l.trim()).filter(Boolean)[0]?.slice(0, 160)
  || 'no reason given'

const failures = []
const warnings = []
let passed = 0

const fail = (lesson, what, fix) => failures.push({ lesson, what, fix })
const warn = (lesson, what, fix) => warnings.push({ lesson, what, fix })
const ok = () => { passed++ }

/* ── the lessons ───────────────────────────────────────────────────────────── */

if (!fs.existsSync(lessonsDir)) {
  console.error(`No lessons directory at ${path.relative(root, lessonsDir)}`)
  process.exit(1)
}

const lessons = fs.readdirSync(lessonsDir, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => e.name)
  .sort()

if (!lessons.length) {
  console.error('No lesson folders found. Nothing to check.')
  process.exit(1)
}

let narration = null
if (fs.existsSync(narrationPath)) {
  narration = JSON.parse(fs.readFileSync(narrationPath, 'utf8'))
  ok()
} else {
  fail('all lessons', 'video/ananse/narration.json does not exist',
    'Run: npm run voice:bake -- --scope=lesson && node tools/lesson-narration.mjs')
}

/** slug to the lines it speaks, for the cross lesson comparison further down. */
const spoken = new Map()
/** The lessons whose `lesson.ts` has a chance of importing at all. */
const importable = []

for (const slug of lessons) {
  const dir = path.join(lessonsDir, slug)

  /* 6. all three files present. */
  const missingFiles = REQUIRED.filter(f => !fs.existsSync(path.join(dir, f)))
  if (missingFiles.length) {
    fail(slug, `missing ${missingFiles.join(', ')}`,
      `Every lesson folder needs ${REQUIRED.join(', ')}. Copy the shape of `
      + 'video/ananse/lessons/count-1-to-10.')
  } else ok()

  const linesPath = path.join(dir, 'lines.json')
  if (!fs.existsSync(linesPath)) continue

  /* 6. lines.json is an array of non empty strings. */
  let lines
  try {
    lines = JSON.parse(fs.readFileSync(linesPath, 'utf8'))
  } catch (e) {
    fail(slug, `lines.json is not valid JSON: ${e.message}`,
      'Fix the syntax. Nothing else about this lesson can be checked until it parses.')
    continue
  }
  if (!Array.isArray(lines)) {
    fail(slug, 'lines.json is not an array',
      'It must be a flat JSON array of the sentences spoken, in any order.')
    continue
  }
  const bad = lines.filter(l => typeof l !== 'string' || !l.trim())
  if (bad.length) {
    fail(slug, `${bad.length} entr${bad.length === 1 ? 'y is' : 'ies are'} `
      + 'not a non empty string',
      'Every entry is one sentence Ananse says, exactly as he says it.')
  } else ok()

  const strings = lines.filter(l => typeof l === 'string' && l.trim())
  spoken.set(slug, strings)

  /* 1. every line is baked. */
  if (narration) {
    const unbaked = strings.filter(l => !narration[l])
    if (unbaked.length) {
      fail(slug, `${unbaked.length} line(s) have no audio:\n${some(unbaked)}`,
        'lesson.ts throws on import for any of these, so the render dies at the '
        + 'first frame. Run: npm run voice:bake -- --scope=lesson && '
        + 'node tools/lesson-narration.mjs')
    } else {
      ok()
      if (!missingFiles.length) importable.push(slug)
    }
  }

  /* 2. no line repeated inside one lesson. */
  const seen = new Set()
  const repeated = new Set()
  for (const l of strings) {
    if (seen.has(l)) repeated.add(l)
    seen.add(l)
  }
  if (repeated.size) {
    fail(slug, `${repeated.size} line(s) appear twice:\n${some([...repeated])}`,
      'lines.json is the list of lines to bake, not the running order, so a '
      + 'line only ever needs to be in it once. lesson.ts can say it as often '
      + 'as it likes.')
  } else ok()

  /* 5. no em or en dashes, since these are read out loud. */
  const dashed = strings.filter(l => DASHES.test(l))
  if (dashed.length) {
    fail(slug, `${dashed.length} line(s) contain an em or en dash:\n${some(dashed)}`,
      'Rewrite with a comma, a colon, or the word "to". The voice does not '
      + 'read a dash, and the caption prints it.')
  } else ok()
}

/**
 * 2b. the same sentence in two lessons.
 *
 * ── Why this is a warning and why the short ones are left alone ──────────────
 *
 * Every line is baked once and keyed by its own text, so two lessons saying
 * exactly the same sentence share one mp3. For a whole sentence that is nearly
 * always an accident: somebody copied a lesson to start a new one and left the
 * greeting in, and now re-recording one lesson's welcome silently re-records
 * the other's.
 *
 * For "One." it is the entire point. Every counting lesson says the numbers and
 * they should all say them in the same voice with the same timing, so a lesson
 * that counts is not doing anything wrong by sharing them. The line between the
 * two cases is length, so anything of three words or fewer is left alone and
 * everything longer is worth a look.
 */
const homes = new Map()
for (const [slug, strings] of spoken) {
  for (const l of strings) {
    if (l.trim().split(/\s+/).length <= 3) continue
    if (!homes.has(l)) homes.set(l, [])
    homes.get(l).push(slug)
  }
}
let shared = 0
for (const [line, owners] of homes) {
  if (owners.length < 2) continue
  shared++
  warn(owners.join(' and '), `both say "${line}"`,
    'They will share one audio file, so re-recording it changes both. If that '
    + 'is not what you meant, reword one of them.')
}
if (!shared) ok()

/* ── how long each lesson thinks it is ─────────────────────────────────────── */

/**
 * The timelines, read by running them.
 *
 * ── Why a subprocess ─────────────────────────────────────────────────────────
 *
 * A lesson's length is not written down anywhere. It is the sum of the measured
 * narration, computed when `lesson.ts` is imported, so the only honest way to
 * know it is to import the module. This file is a `.mjs` and cannot import
 * TypeScript, so `tsx` is asked to do it, once, for every lesson at the same
 * time: starting `tsx` costs a second and a half and there is no reason to pay
 * that nine times.
 *
 * The job goes in a file rather than to `tsx -e`, which on Windows has to be
 * run through the shell and arrives with its quotes chewed off. The file lives
 * under `node_modules`, because it has to be inside the project for `remotion`
 * to resolve and it is nobody's business anywhere else, and it is deleted after.
 *
 * If any of that fails, the duration check is reported as skipped and says why.
 * A guessed length compared against a real one is worse than no comparison,
 * because it produces failures nobody can act on.
 */
function timelines(slugs) {
  const job = slugs.map(slug =>
    `import(${JSON.stringify(`../../video/ananse/lessons/${slug}/lesson.ts`)})`
    + '.then(m => { for (const v of Object.values(m)) '
    + "if (v && typeof v === 'object' && 'seconds' in v && 'scenes' in v) "
    + `out[${JSON.stringify(slug)}] = { seconds: v.seconds, scenes: v.scenes.length } })`
    + `.catch(e => { bad[${JSON.stringify(slug)}] = String(e && e.message || e) })`,
  ).join(',\n  ')
  const src = 'const out = {}\nconst bad = {}\n'
    + `await Promise.all([\n  ${job}\n])\n`
    + "console.log('@@' + JSON.stringify({ out, bad }))\n"

  const dir = path.join(root, 'node_modules', '.tmp')
  fs.mkdirSync(dir, { recursive: true })
  const file = path.join(dir, `lesson-check-${process.pid}.mts`)
  fs.writeFileSync(file, src)
  try {
    const run = spawnSync('npx', ['tsx', file], {
      cwd: root, encoding: 'utf8', shell: process.platform === 'win32',
      timeout: 120000,
    })
    const m = String(run.stdout || '').match(/@@(\{.*\})/)
    if (!m) {
      throw new Error(gist(run.stderr || run.error?.message
        || 'tsx produced no readable output'))
    }
    return JSON.parse(m[1])
  } finally {
    try { fs.rmSync(file, { force: true }) } catch { /* it was a temp file */ }
  }
}

let planned = {}
let plannedWhy = null
/* Lessons with an unbaked line are left out: `lesson.ts` throws by design for
   those and the failure has already been reported with the lines that caused
   it. Importing them again would report the same fault in worse words. */
const unreadable = lessons.filter(slug => !importable.includes(slug))
if (!importable.length) {
  plannedWhy = 'no lesson has all of its lines baked yet'
} else {
  try {
    const got = timelines(importable)
    planned = got.out
    for (const [slug, why] of Object.entries(got.bad)) {
      fail(slug, `lesson.ts could not be imported: ${gist(why)}`,
        'This is exactly what the renderer will hit on its first frame. Run '
        + `npx tsx video/ananse/lessons/${slug}/lesson.ts to see it in full.`)
    }
    if (!Object.keys(got.bad).length) ok()
  } catch (e) {
    plannedWhy = gist(e.message)
  }
}

/* ── the renders ───────────────────────────────────────────────────────────── */

/**
 * Everything ffmpeg has to say about a run, whether or not it liked it.
 *
 * ── Why this is not `execFileSync` ───────────────────────────────────────────
 *
 * ffmpeg writes its whole report, streams and all, to stderr. Asked only to
 * read a file it also exits non zero, because no output was requested, so the
 * report arrives on the exception. Asked to run a filter it exits zero and the
 * report is thrown away, because `execFileSync` returns stdout and nothing
 * else. `spawnSync` hands back stderr either way, which is the only thing that
 * works for both calls.
 */
const ffrun = (args) =>
  String(spawnSync(ffmpeg, ['-hide_banner', ...args], { encoding: 'utf8' }).stderr || '')

const probe = (file) => ffrun(['-i', file])

/** The mean level over the whole file, in dB, or null if ffmpeg would not say. */
function meanVolume(file) {
  const out = ffrun(['-i', file, '-vn', '-af', 'volumedetect', '-f', 'null', '-'])
  const m = out.match(/mean_volume:\s*(-?[\d.]+) dB/)
  return m ? Number(m[1]) : null
}

function duration(report) {
  const m = report.match(/Duration:\s*(\d+):(\d+):(\d+\.\d+)/)
  if (!m) return null
  return Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
}

const renders = fs.existsSync(rendersDir)
  ? fs.readdirSync(rendersDir).filter(f => f.toLowerCase().endsWith('.mp4')).sort()
  : []

/* A lesson's own render, by the name `tools/video-render.mjs` gives it. */
const renderOf = new Map(lessons.map(slug => [`ananse-${slug}.mp4`, slug]))

for (const file of renders) {
  const full = path.join(rendersDir, file)
  const slug = renderOf.get(file)
  const owner = slug || `.renders/${file}`
  const report = probe(full)

  /**
   * ── Why a stray mp4 is a warning and a lesson's own render is a failure ────
   *
   * `.renders` is a scratch directory. Alongside the lesson videos it collects
   * whatever anyone has rendered from the storyboard pipeline while trying
   * something: job files, one offs, and several that never had narration and
   * were never meant to. Failing on those means the checker is red every day
   * for reasons nobody intends to fix, and a checker that is always red is a
   * checker nobody reads. They are still looked at and still reported, and a
   * file that claims to be a lesson gets no such latitude.
   */
  const note = slug ? fail : warn
  const aside = slug ? '' : ' (not a lesson render, so this does not fail the run)'

  /* 3. a picture and a sound, both. */
  const hasVideo = /Stream #\d+:\d+.*: Video:/.test(report)
  const hasAudio = /Stream #\d+:\d+.*: Audio:/.test(report)
  if (!hasVideo) {
    note(owner, `${file} has no video stream${aside}`,
      'The file is not a video. Delete it and render again.')
  } else ok()

  if (!hasAudio) {
    note(owner, `${file} has no audio stream${aside}`,
      'Render again with the narration in place. A silent lesson looks correct '
      + 'in every thumbnail and is useless to a child.')
  } else {
    const db = meanVolume(full)
    if (db === null) {
      warn(owner, `${file}: ffmpeg would not report a volume`,
        'Listen to it before shipping, since the silence check did not run.')
    } else if (db < SILENT_DB) {
      note(owner, `${file} is silent: mean volume ${db} dB${aside}`,
        'There is an audio track but nothing in it. Check the narration mp3s '
        + 'exist in public/games/voice and render again.')
    } else ok()
  }

  /* 4. as long as its own timeline says. */
  if (!slug) continue
  const actual = duration(report)
  const want = planned[slug] ? planned[slug].seconds : null
  if (plannedWhy) {
    warn(slug, `duration not checked for ${file}`,
      `The timeline could not be read: ${plannedWhy}. Check by hand, or run `
      + `npx tsx video/ananse/lessons/${slug}/lesson.ts to see why it will not import.`)
  } else if (want === null && !importable.includes(slug)) {
    /* Its import already failed and was reported. Nothing to add. */
  } else if (want === null) {
    fail(slug, `lesson.ts imported but exported no lesson, so ${file} `
      + 'could not be compared to a timeline',
      'lesson.ts must export the value built by `lesson(...)`, the way '
      + 'count-1-to-10 exports COUNT_LESSON.')
  } else if (actual === null) {
    fail(slug, `ffmpeg reported no duration for ${file}`,
      'The file is probably truncated. Render again.')
  } else if (Math.abs(actual - want) > DRIFT) {
    fail(slug, `${file} is ${actual.toFixed(1)}s but the timeline is `
      + `${want.toFixed(1)}s (${(actual - want).toFixed(1)}s out)`,
      'The render is stale: the narration has been re-timed since it was made. '
      + 'Render it again.')
  } else ok()
}

/* A lesson with no render is not a failure. It is a lesson nobody has rendered
   yet, which is the normal state of one being written. */
const unrendered = lessons.filter(slug => !renders.includes(`ananse-${slug}.mp4`))

/* ── the report ────────────────────────────────────────────────────────────── */

const bar = '─'.repeat(72)
console.log(bar)
console.log(`Lesson check: ${lessons.length} lesson(s), ${renders.length} render(s) in .renders`)
console.log(bar)

for (const w of warnings) {
  console.log(`\n  WARN  ${w.lesson}`)
  console.log(`        ${w.what}`)
  console.log(`        ${w.fix}`)
}

for (const f of failures) {
  console.log(`\n  FAIL  ${f.lesson}`)
  console.log(`        ${f.what}`)
  console.log(`        ${f.fix}`)
}

console.log('')
if (unrendered.length) {
  console.log(`  Not rendered yet, so only their lines were checked: ${unrendered.join(', ')}`)
}
if (unreadable.length) {
  console.log('  Timelines not read, because a line of theirs is not baked and '
    + `lesson.ts throws: ${unreadable.join(', ')}`)
}
if (plannedWhy) {
  console.log(`  No timeline was read at all: ${plannedWhy}. `
    + 'That check did not run, so no render was compared against its own length.')
}
console.log(bar)
console.log(
  `${passed} check(s) passed, ${failures.length} failed, ${warnings.length} warning(s).`,
)
if (!failures.length) console.log('Nothing here would stop a render or ship a silent video.')
console.log(bar)

process.exit(failures.length ? 1 : 0)
