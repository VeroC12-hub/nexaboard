/**
 * What a topic can teach with no AI, no network and no content written for it.
 *
 * ── The problem this exists for ─────────────────────────────────────────────
 *
 * The platform had a map and no territory. `library/syllabus/` names 846
 * topics across creche to university, and not one of them carries any teaching
 * text: the lesson was written on demand, per learner, per view, by a model
 * reached through a machine that has to be switched on.
 *
 * So when that machine is off, or has no key, or the connection drops, opening
 * a topic gave a sentence apologising and nothing else. The copy even said
 * "what this topic covers is above", and above it was the title. On a shared
 * phone on a weak connection, which is the case this product is for, that is
 * most of the time.
 *
 * A topic must always teach something. This is the floor under everything: it
 * uses only what is already in the bundle, so it cannot fail, cannot wait, and
 * costs nothing.
 *
 * ── What it honestly is, and is not ─────────────────────────────────────────
 *
 * It is not a lesson and it must never pretend to be one. It is the thing a
 * teacher writes on the board before teaching: what we are doing, what you
 * will be able to do by the end, what you need to already know, and why it
 * matters later.
 *
 * That is genuinely useful on its own. A learner who reads "before this lands
 * you need to be able to share a whole into equal parts" and realises they
 * cannot has learned something real, and can go and fix it. It is also the
 * honest thing to show: every line here is written in `library/syllabus/` by a
 * person, so nothing in it is invented at the moment of reading.
 *
 * Where a written lesson exists, this is not used. Where one does not, this is
 * what stands in until the content build reaches that topic.
 */

import { foundations, placeOf, topicById, type Syllabus, type Topic } from './syllabus'

/** One thing the primer can say, and where it came from. */
export interface PrimerPart {
  /** A heading the learner reads. */
  heading: string
  /** Sentences under it. Already plain; no formatting to interpret. */
  lines: string[]
}

export interface Primer {
  topic: Topic
  /** The subject and the part of it this sits in. */
  where: string
  parts: PrimerPart[]
  /**
   * Topics to go to first, when this one stands on something.
   *
   * Given as topics rather than text so the screen can make them openable: a
   * learner told they are missing fractions should be one tap from fractions,
   * not told to go and find it.
   */
  before: Topic[]
  /** Topics that stand on this one, so "why bother" has an answer. */
  after: Topic[]
}

/**
 * Every topic that names this one as something it needs.
 *
 * The syllabus only stores the arrow one way, from a topic to what it stands
 * on. Reading it backwards is what lets a topic say what it leads to, which is
 * the only honest answer to "why am I learning this".
 */
export function leadsTo(s: Syllabus, topicId: string): Topic[] {
  const out: Topic[] = []
  for (const strand of s.strands) {
    for (const sub of strand.subStrands) {
      for (const t of sub.topics) {
        if (t.needs?.includes(topicId)) out.push(t)
      }
    }
  }
  return out
}

/**
 * The floor for one topic.
 *
 * Returns null only when the topic is not in this syllabus at all, which is a
 * caller mistake rather than a state a learner can reach.
 */
export function primerFor(s: Syllabus, topicId: string): Primer | null {
  const topic = topicById(s, topicId)
  if (!topic) return null

  const place = placeOf(s, topicId)
  const where = place
    ? `${s.subject} · ${place.strand.name}`
    : s.subject

  const parts: PrimerPart[] = []

  /* What this part of the subject is for. Written per strand by a person, and
     the one line that tells a learner why a group of topics belong together. */
  if (place?.strand.purpose) {
    parts.push({
      heading: 'What this part of the subject is for',
      lines: [place.strand.purpose],
    })
  }

  /* The outcome. The single most useful line in the whole syllabus, and it is
     already written for all 846 topics. */
  parts.push({
    heading: 'By the end of this topic',
    lines: [`You should be able to ${lowerFirst(topic.outcome)}`],
  })

  /* What it stands on, with each outcome spelled out rather than only named.
     "You need fractions" is not actionable; "you need to be able to add two
     fractions with different denominators" is. */
  const before = foundations(s, topicId, 1)
  if (before.length) {
    parts.push({
      heading: 'What you need first',
      lines: [
        before.length === 1
          ? 'This one stands on something else. Make sure you can already do it:'
          : 'This one stands on a few things. Make sure you can already do them:',
        ...before.map(t => `${t.title}: ${lowerFirst(t.outcome)}`),
        'If any of those does not feel solid, start there instead. Going back is'
          + ' faster than pushing on, because the thing going wrong is usually'
          + ' underneath.',
      ],
    })
  }

  /* Why it matters, answered with the syllabus rather than with encouragement.
     A topic that leads nowhere in this subject says nothing, which is honest. */
  const after = leadsTo(s, topicId)
  if (after.length) {
    parts.push({
      heading: 'What it leads to',
      lines: [
        'Later topics build directly on this one:',
        ...after.slice(0, 4).map(t => t.title),
      ],
    })
  }

  return { topic, where, parts, before, after }
}

/**
 * The same thing for a learner who cannot read it, as lines to be spoken.
 *
 * Shorter, because the youngest tier gets this read aloud and a spoken list of
 * prerequisites is not something a five year old can hold. What survives is
 * the outcome, which is the only part that is about them.
 */
export function primerAloud(p: Primer): string {
  return [
    `This one is about ${lowerFirst(p.topic.title)}.`,
    `By the end you should be able to ${lowerFirst(p.topic.outcome)}`,
  ].join(' ')
}

/** "Share in a ratio." to "share in a ratio." Leaves acronyms alone. */
function lowerFirst(s: string): string {
  const t = s.trim()
  if (!t) return t
  /* Two capitals in a row means it opens with something like DNA or ICT, and
     lowering that is worse than the inconsistency it fixes. */
  if (/^[A-Z]{2}/.test(t)) return t
  return t[0].toLowerCase() + t.slice(1)
}
