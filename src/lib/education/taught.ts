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
  /**
   * One step at a time.
   *
   * A step is either a sentence, as every lesson written so far has it, or a
   * line of mathematics with the reason for it. The second form is what a
   * learner actually needs from a maths topic and what a teacher writes on a
   * board: the line changes, and beside it is why it changed.
   *
   * Written as sentences, the working disappears into prose. “Subtract 2x
   * from both sides to get 3x minus 7 equals 8” asks a reader to find the
   * equation inside the sentence, reconstruct it, and compare it with the one
   * before. Set as `{ math, why }` the equation is on its own line, in
   * mathematical notation, and the reason sits under it in smaller type, so
   * the page can be followed down the left edge without reading a word.
   *
   * Both forms are allowed on purpose: 589 lessons are written in the first,
   * and a step that genuinely is a sentence, “check the argument of every
   * logarithm is positive”, should stay one.
   */
  steps: Array<string | WorkedStep>
  answer: string
}

/** One line of working: what the mathematics became, and why. */
export interface WorkedStep {
  /** The line itself, as LaTeX without the dollar signs: `3x = 15`. */
  math: string
  /** Why that line follows from the one above, in a few words. */
  why?: string
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
  /**
   * What the topic is for, and the question the reader cannot answer yet.
   *
   * ── Why this field exists ──────────────────────────────────────────────
   * Read a published textbook section on the same topic and the first thing
   * on the page is not the definition. OpenStax opens its logarithm section
   * with two earthquakes on the Richter scale, then poses an exponential
   * equation the reader has no method for, and only then names the new tool.
   * The teaching research says the same thing from the other side: studies
   * of textbooks that open with the formal definition report that students
   * treat the properties as rules imposed on them, and one calls the usual
   * introduction out of the blue, with little connection to what the
   * students have learned before.
   *
   * Every lesson in this library opened with the definition. "A logarithm is
   * an index" is the first sentence of the logarithms lesson, addressed to
   * somebody who has not been told what an index is or why anyone would want
   * one. That is a lesson written for a reader who already knows the topic.
   *
   * So: one concrete situation a Ghanaian learner can picture, and one
   * question in it that the topic exists to answer. Not a definition, not a
   * list of uses, and not "this topic is important in everyday life".
   */
  why?: string
  /**
   * How to read the thing out loud, and what each part of it is called.
   *
   * A textbook gives notation its own stage before any rule: how the
   * expression is said, which number is which, what the brackets mean. A
   * learner who cannot say "log base 3 of 81" cannot ask about it, cannot
   * check it with a friend, and cannot hear it in class. Naming the parts is
   * also what makes the rules sayable rather than shapes to be copied.
   *
   * Only for topics that have notation. A lesson on soil types has none.
   */
  notation?: string
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
    | 'extension' | 'figure' | 'table' | 'question' | 'why' | 'notation'
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
  /* What it is for, before what it is.

     Kept even for the gist: somebody asking what a thing is in one screen is
     asking the question this field answers. Dropped for a learner who says
     they are strong here and wants to be doing, who has already met the
     topic and does not need persuading that it exists. */
  const purpose: Piece | null = t.why && !(strong && doing)
    ? { kind: 'why', heading: 'What it is for', text: t.why }
    : null

  const idea: Piece = {
    kind: 'idea',
    heading: 'The idea',
    text: (gist && t.brief?.idea) || t.idea,
  }

  /* How to say it. Not in the gist, where the reader wants the thing itself,
     and not for a strong learner who is already reading it fluently. */
  const notation: Piece | null = t.notation && !gist && !strong
    ? { kind: 'notation', heading: 'How to read it', text: t.notation }
    : null
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

  /* ── Why everybody gets the groundwork now ──────────────────────────────
     BRIEF dropped the recap along with everything else, and that was the
     wrong cut. The learner who asks for the gist and is shaky is not asking
     to be told less about the thing they are missing: they are asking for a
     short page, and the one part a short page cannot do without is the thing
     this topic stands on.

     The bigger wrong cut was the gate itself. The recap was shown only to a
     learner who had ticked "catching up" or "shaky", so a learner who stated
     no preference, which is most of them, was handed a lesson that opens
     straight into the new idea. In this library that means a lesson on
     logarithms whose first sentence is "a logarithm is an index", to a
     reader who has not been told what an index is, what a logarithm is, or
     that the two have anything to do with each other. Written out, 535 of
     601 lessons store the sentence that would have told them, and the
     assembler was throwing it away for everybody who had not confessed to
     being behind.

     Nobody has to say they are struggling to be told what a word means.
     Stating that you are strong means you want less hand-holding in the
     reasoning, which `wantsMechanism` already handles; it does not mean you
     want the vocabulary withheld. So the groundwork is now part of every
     lesson that has it, and the sentence explaining why only appears for
     the learners who asked to start further back than usual. */
  const recap: Piece | null = t.recap
    ? { kind: 'recap', heading: 'First, the thing it stands on', text: t.recap }
    : null
  if (recap && catchingUp) why.push('it starts further back because you are closing gaps')
  else if (recap && shaky) why.push('it starts further back because you said you are shaky here')

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
  const tablePieces: Piece[] = (gist ? (t.tables ?? []).slice(0, 1) : t.tables ?? [])
    .map(table => ({ kind: 'table' as const, heading: table.caption, table }))

  /* The first table carries the break in the reasoning and the rest follow
     the method, rather than all of them arriving in one stack. A lesson with
     three tables used to put three in a row, which is as much of a wall as
     three paragraphs and harder to read. */
  const tableFirst: Piece[] = tablePieces.slice(0, 1)
  const tableRest: Piece[] = tablePieces.slice(1)

  /* One question inside the lesson. The rest belong to practice, not here.

     ── Why this is no longer only for somebody who asked to be doing ───────
     It was gated on `diet === 'PRACTISE'`, and measured across the library
     that meant 0 of 601 lessons showed a question to a learner who had
     stated no preference, which is most of them. The reasoning was that a
     reader wants to read; the effect was that the one moment in a lesson
     where the page stops talking and asks something was switched off for
     almost everybody. One question in the middle of a lesson is not practice,
     it is the thing that tells a reader whether the last three paragraphs
     landed, and nobody has to answer it to carry on.

     It stays out of the gist, where the whole request is for less. */
  const first = (t.questions ?? [])
    .slice()
    .sort((a, b) => Math.abs(a.level - wantLevel) - Math.abs(b.level - wantLevel))[0]
  const question: Piece | null = first && !gist
    ? { kind: 'question', heading: doing ? 'Try this one' : 'Before you read on', question: first }
    : null

  /* ── the order ──────────────────────────────────────────────────────────
     This is the whole of `approach`, and it is the clearest case for storing
     parts: the same pieces, arranged three ways.

     ── Why the picture moved ──────────────────────────────────────────────
     It used to sit after the traps, near the end, for every learner who had
     not said they prefer watching. Measured over the library that put the
     picture in the last third of the page in 472 of 472 lessons that have
     one: every single time. A diagram at the bottom of a page of prose is a
     diagram most readers never reach, and it is the one block that can show
     in a second what a paragraph spends two hundred words on.

     It now comes directly after the idea, before the reasoning. The idea
     says what the thing is, the picture shows it, and only then does the
     page explain why it works. For a learner who takes things in better
     shown than told it still leads the whole lesson.

     ── Why anything moved at all ──────────────────────────────────────────
     Measured with `scripts/lesson-shape.mts`: a learner who has stated no
     preference read on average 356 words, and in 105 lessons more than 700
     words, of unbroken paragraphs before meeting anything that was not a
     paragraph. The pieces to break that up were already written and stored
     in every one of those lessons. They were simply all queued behind the
     prose. Nothing here changes what a lesson says. */
  let pieces: Piece[]

  if (p.approach === 'TRY_FIRST' && (question || worked)) {
    /* Attempt it cold, then find out why. The question if there is one,
       otherwise the worked example with its answer still to come. */
    why.push('it opens with something to try, because you learn from the mistake')
    pieces = [
      question ?? worked!,
      purpose, recap, idea, notation, figure, mechanism, ...tableFirst, method,
      question ? worked : null,
      ...workedMore, ...tableRest,
      traps, extension,
    ].filter(Boolean) as Piece[]
  } else if (p.approach === 'SHOW_FIRST') {
    why.push('it shows you one done first')
    pieces = [
      purpose, recap,
      shows ? figure : null,
      worked, idea, notation,
      shows ? null : figure,
      mechanism, ...tableFirst, method,
      ...workedMore, ...tableRest,
      question, traps, extension,
    ].filter(Boolean) as Piece[]
  } else {
    /* IDEA_FIRST, and the default. The idea in full before anything is
       touched, which is also the order a textbook uses. */
    pieces = [
      purpose, recap,
      shows ? figure : null,
      idea, notation,
      shows ? null : figure,
      mechanism, ...tableFirst, method, worked,
      ...workedMore, ...tableRest,
      question, traps, extension,
    ].filter(Boolean) as Piece[]
  }

  if (shows && figure) why.push('the picture leads, because you take things in better shown than told')
  else if (figure) why.push('the picture comes early, so you can see the thing before reading why it works')

  return {
    pieces,
    because: why.length
      ? `Put together for you: ${why.join('; ')}.`
      : 'Put together in the usual order.',
  }
}
