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
  questions?: Question[]
}

/* ── assembling one for a learner ─────────────────────────────────────────── */

/** One piece of an assembled lesson, ready to render. */
export interface Piece {
  kind: 'idea' | 'mechanism' | 'recap' | 'method' | 'worked' | 'traps'
    | 'extension' | 'figure' | 'question'
  heading: string
  /** Set for the prose kinds. */
  text?: string
  /** Set for `method`, `traps`. */
  lines?: string[]
  worked?: Worked
  figure?: { alt: string, svg: string }
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

  const idea: Piece = { kind: 'idea', heading: 'The idea', text: t.idea }

  const mechanism: Piece | null = t.mechanism && !(strong && doing)
    ? { kind: 'mechanism', heading: 'Why it works', text: t.mechanism }
    : null
  if (t.mechanism && !mechanism) why.push('the reasoning is left out because you are strong here and prefer to be doing')

  const recap: Piece | null = t.recap && (catchingUp || shaky)
    ? { kind: 'recap', heading: 'First, the thing it stands on', text: t.recap }
    : null
  if (recap) why.push(catchingUp ? 'it starts further back because you are closing gaps' : 'it starts further back because you said you are shaky here')

  const method: Piece = { kind: 'method', heading: 'How to do any of them', lines: t.method }

  /* One worked example, at the level that suits them, not all of them. A page
     of five worked examples is a page nobody finishes. */
  const wantLevel = startingLevel(p)
  const pick = (t.worked ?? [])
    .slice()
    .sort((a, b) => Math.abs(a.level - wantLevel) - Math.abs(b.level - wantLevel))[0]
  const worked: Piece | null = pick
    ? { kind: 'worked', heading: 'Worked example', worked: pick }
    : null

  /* Traps are useful to everybody and required for somebody sitting an exam,
     which is the one goal that explicitly asks for the common trap. */
  const traps: Piece | null = t.traps?.length
    ? {
      kind: 'traps',
      heading: forExam ? 'What loses marks' : 'Where it usually goes wrong',
      lines: t.traps.map(x => `${x.mistake} ${x.why}`),
    }
    : null

  const extension: Piece | null = t.extension && further
    ? { kind: 'extension', heading: 'Further than your class has gone', text: t.extension }
    : null
  if (extension) why.push('it goes past your year because you asked not to be held back')

  const figure: Piece | null = t.figure
    ? { kind: 'figure', heading: 'Picture it', figure: t.figure }
    : null

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
      recap, idea, mechanism, method,
      question ? worked : null,
      traps, figure, extension,
    ].filter(Boolean) as Piece[]
  } else if (p.approach === 'SHOW_FIRST') {
    why.push('it shows you one done first')
    pieces = [
      recap,
      shows ? figure : null,
      worked, idea, mechanism, method, traps,
      shows ? null : figure,
      question, extension,
    ].filter(Boolean) as Piece[]
  } else {
    /* IDEA_FIRST, and the default. The idea in full before anything is
       touched, which is also the order a textbook uses. */
    pieces = [
      recap,
      shows ? figure : null,
      idea, mechanism, method, worked, traps,
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
