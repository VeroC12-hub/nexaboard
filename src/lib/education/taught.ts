/**
 * A lesson stored as its parts, and assembled for one learner.
 *
 * ── Why parts and not prose ─────────────────────────────────────────────────
 *
 * The platform generated a whole lesson per learner, per view, from a model
 * reached over the network. That gave real personalisation and three bad
 * things with it: nothing to show when the model could not be reached, nothing
 * anybody could review before a child read it, and a topic that read
 * differently every time it was opened.
 *
 * The obvious fix, storing one written lesson per topic, throws the
 * personalisation away. But look at what the personalisation actually is. From
 * `api/prompt.js`, the axes are:
 *
 *   SHOW_FIRST / TRY_FIRST / IDEA_FIRST     the ORDER of the parts
 *   SHAKY / OKAY / STRONG                   HOW MUCH scaffolding
 *   CATCH_UP / KEEP_UP / EXAM / GO_FURTHER  HOW FAR back and forward
 *   READ / WATCH / PRACTISE / MIXED         WHICH MEDIUM leads
 *
 * Almost none of that is different prose. It is order, inclusion, depth and
 * medium, which are selections among parts rather than rewrites of the
 * explanation. Why you may take 7 from both sides does not change because a
 * learner is shaky; what changes is whether you also recap what an equation
 * is, and whether the worked example comes before or after they try one.
 *
 * So a topic stores its parts once, a person reviews them once, and every
 * learner gets a lesson assembled from them for her. Which is a textbook and a
 * teacher: the book holds the parts, the teacher picks the ones this child
 * needs today.
 *
 * ── This is more personal than what it replaces, not less ───────────────────
 *
 * Today personalisation exists only while the tutor is reachable. A learner
 * who learns by watching, on a dead connection, currently gets nothing at all,
 * not even prose. Assembled from stored parts her preferences shape the lesson
 * offline, instantly, on a shared phone.
 *
 * It is also the first version that can be checked. Nobody has ever verified
 * that a shaky learner receives a different lesson from a strong one; it was
 * asserted in a prompt and never measured. Here the difference is structural,
 * and `assemble` is a pure function of stored content and a profile, so it can
 * simply be tested.
 *
 * ── What the tutor still does ───────────────────────────────────────────────
 *
 * Everything that can only be done live, and nothing that is load bearing: a
 * hint on the wrong answer just given, an explanation of the exact sentence
 * she highlighted, a picture she asked for, a re-teach aimed at her own
 * misconception. Those are short and reactive. When the tutor is off, the
 * lesson is still there.
 *
 * ── Where it sits ───────────────────────────────────────────────────────────
 *
 * Below a written course (`course.ts`, one exists) and above the primer
 * (`primer.ts`, which is the syllabus alone and always available). The order
 * a topic is served in is: written course, stored parts, live tutor, primer.
 */

import type { Question } from './course'
import type { LearnerProfile } from './learner'

/* ── what a topic stores ──────────────────────────────────────────────────── */

/** A worked example, laid out the way marks are awarded. */
export interface Worked {
  /** 1 easiest to 5 hardest, matching the bands the adaptive model uses. */
  level: number
  ask: string
  /** One line per step. Never skip the line that shows the substitution. */
  steps: string[]
  answer: string
}

/** A mistake people actually make, and what it comes from. */
export interface Trap {
  /** What the learner does wrong, stated as the thing rather than as a warning. */
  mistake: string
  /** The thinking behind it, so naming it is useful rather than scolding. */
  why: string
}

/**
 * Everything stored about teaching one topic.
 *
 * Every field except `idea` and `method` is optional, because a topic that has
 * only those two is still worth serving and waiting for completeness would put
 * us back at a blank page. `assemble` copes with whatever is present.
 */
export interface Taught {
  topicId: string
  /**
   * Where the content came from, so a screen can be honest about it and a
   * reviewer can tell hand written material from generated material.
   */
  source: 'WRITTEN' | 'GENERATED'
  /** Whether a person has read this. Nothing unapproved reaches a learner. */
  approved: boolean

  /** What the thing IS. Always shown, to everybody. */
  idea: string
  /**
   * The same lesson told short, for a learner who asked for the gist.
   *
   * Not an extract of the full one. A summary written on purpose: the idea in
   * two or three sentences and the method in as few steps as still work. A
   * learner who picks BRIEF is not being given less teaching, they are being
   * given the part they can act on now, and they can open the full version
   * whenever they want it.
   *
   * Optional. A topic with no brief form serves the full one to everybody,
   * which is what every lesson written before this did.
   */
  brief?: {
    idea?: string
    method?: string[]
  }
  /**
   * Why it works, rather than that it works.
   *
   * The rule the prompts have always carried: "take 4 from both sides" teaches
   * nothing; "an equation is a claim that two amounts are equal, so anything
   * you do to one you must do to the other" teaches the learner.
   */
  mechanism?: string
  /** The prerequisite in one paragraph, for a learner who is catching up. */
  recap?: string
  /** How to handle ANY question of this kind. Always shown. */
  method: string[]
  worked?: Worked[]
  traps?: Trap[]
  /** Where this goes next, for a learner told not to be held back. */
  extension?: string
  /** What to draw, for a learner who is shown things rather than told them. */
  figure?: { alt: string, svg: string }
  /**
   * The parts of the lesson that are a table rather than a paragraph.
   *
   * ── Why this exists ─────────────────────────────────────────────────────
   *
   * Until this field there was nowhere in a lesson to put data, so everything
   * tabular was written out as sentences: the properties of three soil types,
   * the differences between two systems of government, a frequency
   * distribution, the endings of a verb. Prose is the wrong shape for all of
   * them. A reader comparing two things in a paragraph has to hold both in
   * their head and do the comparing themselves, which is exactly the work a
   * table does for them, and a learner scanning for one value has to read the
   * whole thing.
   *
   * It is also what made the library read as a wall of text. A lesson is not
   * improved by breaking prose into shorter paragraphs; it is improved by
   * moving the parts that were never prose out of it.
   *
   * ── Why it is data and not markup ───────────────────────────────────────
   *
   * Cells are plain strings and the renderer escapes them, so a table cannot
   * carry HTML, cannot carry a script, and cannot be styled differently from
   * one lesson to the next. That keeps every table in the library looking the
   * same, keeps it readable on a phone, and means a table can be read aloud,
   * searched and checked by the coverage scripts in the same way as the rest
   * of a lesson. `figure` takes an SVG because a diagram genuinely is a
   * drawing; a table is not.
   */
  tables?: LessonTable[]
  questions?: Question[]
}

/**
 * One table inside a lesson.
 *
 * `caption` is not decoration. It is read aloud in place of the table for a
 * learner using the spoken lesson, it is the accessible name for a screen
 * reader, and it is what makes a table that has scrolled out of view still
 * make sense. Every table has one.
 */
export interface LessonTable {
  caption: string
  columns: string[]
  /** One array per row, each the same length as `columns`. */
  rows: string[][]
  /** An aside under the table: a unit, a source, a caveat. */
  note?: string
}

/* ── assembling one for a learner ─────────────────────────────────────────── */

/** One piece of an assembled lesson, ready to render. */
export interface Piece {
  kind: 'idea' | 'mechanism' | 'recap' | 'method' | 'worked' | 'traps'
    | 'extension' | 'figure' | 'table' | 'question'
  heading: string
  /** Set for the prose kinds. */
  text?: string
  /** Set for `method`, `traps`. */
  lines?: string[]
  worked?: Worked
  figure?: { alt: string, svg: string }
  table?: LessonTable
  question?: Question
}

export interface Assembled {
  pieces: Piece[]
  /**
   * Why it was put together this way, in one sentence.
   *
   * Shown to whoever is sitting with the learner, the same way `plan.ts`
   * explains itself. A lesson that is quietly different for each child and
   * never says so is a lesson nobody can check.
   */
  because: string
}

/** Which worked example suits somebody on this footing. */
function startingLevel(p: LearnerProfile): number {
  if (p.footing === 'SHAKY') return 1
  if (p.footing === 'STRONG') return 3
  return 2
}

/**
 * The lesson this learner gets.
 *
 * Pure: stored content in, ordered pieces out, no clock, no network, no model.
 * That is what makes it instant, offline, and testable.
 */
export function assemble(t: Taught, p: LearnerProfile): Assembled {
  const why: string[] = []

  /* What to include. Each of these is one preference doing one thing, which is
     the whole argument for storing parts. */
  const catchingUp = p.goal === 'CATCH_UP'
  const shaky = p.footing === 'SHAKY'
  const strong = p.footing === 'STRONG'
  const forExam = p.goal === 'EXAM'
  const further = p.goal === 'GO_FURTHER'
  const shows = p.diet === 'WATCH'
  const doing = p.diet === 'PRACTISE'

  /* How much they asked for. Absent means FULL, so nothing changes for a
     learner who was created before the question was asked. */
  const depth = p.depth ?? 'FULL'
  const gist = depth === 'BRIEF'
  const deep = depth === 'DEEP'

  /* The short telling where the topic has one. A topic with no brief form
     falls back to the full wording rather than to nothing, because a shorter
     lesson is the point and an empty one is a bug. */
  const idea: Piece = {
    kind: 'idea',
    heading: 'The idea',
    text: (gist && t.brief?.idea) || t.idea,
  }
  if (gist && t.brief?.idea) why.push('it is the short version, because you asked for the gist')
  else if (gist) why.push('you asked for the gist, and this topic has only the full telling')

  /* The reasoning. Dropped for a strong learner who prefers doing, dropped
     again for anybody who asked for the gist, and kept for DEEP whatever
     else is true: somebody who wants all of it has said so. */
  const wantsMechanism = deep || !(gist || (strong && doing))
  const mechanism: Piece | null = t.mechanism && wantsMechanism
    ? { kind: 'mechanism', heading: 'Why it works', text: t.mechanism }
    : null
  if (t.mechanism && !mechanism && !gist) why.push('the reasoning is left out because you are strong here and prefer to be doing')

  /* ── Why the gist keeps this and used to not ────────────────────────────
     BRIEF dropped the recap along with everything else, and that was the
     wrong cut. The learner who asks for the gist and is shaky is not asking
     to be told less about the thing they are missing: they are asking for a
     short page, and the one part a short page cannot do without is the thing
     this topic stands on. Dropping it also made every BRIEF learner's lesson
     the same page, which `personalisation-check.mts` measured at 100%
     identical for two learners as different as somebody catching up and
     somebody sitting an exam. */
  const recap: Piece | null = t.recap && (catchingUp || shaky)
    ? { kind: 'recap', heading: 'First, the thing it stands on', text: t.recap }
    : null
  if (recap) why.push(catchingUp ? 'it starts further back because you are closing gaps' : 'it starts further back because you said you are shaky here')

  const method: Piece = {
    kind: 'method',
    heading: 'How to do any of them',
    lines: (gist && t.brief?.method?.length) ? t.brief.method : t.method,
  }

  /* One worked example, at the level that suits them, not all of them. A page
     of five worked examples is a page nobody finishes.
     ── Except for DEEP, and that is what DEEP is for ──────────────────────
     DEEP used to differ from FULL by one part, the extension, and nothing
     else: same idea, same reasoning, same single example. Measured, the two
     lessons were 89% the same sentences, so a learner who said they wanted
     all of it was given the ordinary lesson with a paragraph on the end.
     What somebody who wants all of it actually wants is the range: the
     example at their level and the harder ones after it, which is the part
     of a worked set that teaches how far the method stretches. So DEEP gets
     up to three, ordered easiest first, and everybody else still gets the
     one that suits them. */
  const wantLevel = startingLevel(p)
  const nearest = (t.worked ?? [])
    .slice()
    .sort((a, b) => Math.abs(a.level - wantLevel) - Math.abs(b.level - wantLevel))
  const picks = nearest
    .slice(0, deep ? 3 : 1)
    .sort((a, b) => a.level - b.level)
  const workedAll: Piece[] = picks.map((w, i) => ({
    kind: 'worked',
    heading: i === 0
      ? 'Worked example'
      : i === picks.length - 1 ? 'And a harder one' : 'Another',
    worked: w,
  }))
  const worked: Piece | null = workedAll[0] ?? null
  /* The rest, placed after the first wherever the first goes. */
  const workedMore: Piece[] = workedAll.slice(1)
  if (workedMore.length) why.push('it works more than one through, because you asked for all of it')

  /* Traps are useful to everybody and required for somebody sitting an exam,
     which is the one goal that explicitly asks for the common trap. */
  /* Traps are cut from the gist. They are the longest part of most lessons
     and the least useful to somebody who only wants to know what the thing
     is. Anybody sitting an exam is not on BRIEF. */
  /* Cut from the gist, with one exception that matters more than the rule.
     Somebody revising for an examination and asking for the gist is asking
     for the short version OF a revision page, and the one line they cannot
     be sent in without is where the marks go. So they keep a single trap,
     the first, which is the one the lesson author put first. */
  const trapsWanted = gist ? (forExam ? t.traps?.slice(0, 1) : []) : t.traps
  const traps: Piece | null = trapsWanted?.length
    ? {
      kind: 'traps',
      heading: forExam ? 'What loses marks' : 'Where it usually goes wrong',
      lines: trapsWanted.map(x => `${x.mistake} ${x.why}`),
    }
    : null
  if (gist && traps) why.push('the one place marks go is kept, because you are revising')

  const extension: Piece | null = t.extension && (further || deep) && !gist
    ? { kind: 'extension', heading: 'Further than your class has gone', text: t.extension }
    : null
  if (extension) {
    why.push(further
      ? 'it goes past your year because you asked not to be held back'
      : 'it goes past your year because you asked for all of it')
  }

  const figure: Piece | null = t.figure
    ? { kind: 'figure', heading: 'Picture it', figure: t.figure }
    : null

  /**
   * The tables.
   *
   * A learner who asked for the gist gets the first one and no more. That is
   * not a trimmed version of the lesson: a table is usually the densest thing
   * in it, so for somebody who wants the short form it is often the only part
   * worth keeping, while a second and third table is the detail they said
   * they did not want.
   *
   * The heading comes from the caption, because a column of sections all
   * headed "Table" tells a reader nothing about which one to look at.
   */
  const tables: Piece[] = (gist ? (t.tables ?? []).slice(0, 1) : t.tables ?? [])
    .map(table => ({ kind: 'table' as const, heading: table.caption, table }))

  /* One question inside the lesson, for somebody who learns by doing. The rest
     of the questions belong to practice, not here. */
  const first = (t.questions ?? [])
    .slice()
    .sort((a, b) => Math.abs(a.level - wantLevel) - Math.abs(b.level - wantLevel))[0]
  const question: Piece | null = doing && first
    ? { kind: 'question', heading: 'Try this one', question: first }
    : null

  /* ── the order ──────────────────────────────────────────────────────────
     This is the whole of `approach`, and it is the clearest case for storing
     parts: the same six pieces, arranged three ways. */
  let pieces: Piece[]

  if (p.approach === 'TRY_FIRST' && (question || worked)) {
    /* Attempt it cold, then find out why. The question if there is one,
       otherwise the worked example with its answer still to come. */
    why.push('it opens with something to try, because you learn from the mistake')
    pieces = [
      question ?? worked!,
      recap, idea, mechanism, ...tables, method,
      question ? worked : null,
      ...workedMore,
      traps, figure, extension,
    ].filter(Boolean) as Piece[]
  } else if (p.approach === 'SHOW_FIRST') {
    why.push('it shows you one done first')
    pieces = [
      recap,
      shows ? figure : null,
      worked, idea, mechanism, ...tables, method,
      ...workedMore,
      traps,
      shows ? null : figure,
      question, extension,
    ].filter(Boolean) as Piece[]
  } else {
    /* IDEA_FIRST, and the default. The idea in full before anything is
       touched, which is also the order a textbook uses. */
    pieces = [
      recap,
      shows ? figure : null,
      idea, mechanism, ...tables, method, worked,
      ...workedMore,
      traps,
      shows ? null : figure,
      question, extension,
    ].filter(Boolean) as Piece[]
  }

  if (shows && figure) why.push('the picture leads, because you take things in better shown than told')

  return {
    pieces,
    because: why.length
      ? `Put together for you: ${why.join('; ')}.`
      : 'Put together in the usual order.',
  }
}
