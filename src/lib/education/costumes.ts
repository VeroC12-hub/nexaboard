/**
 * Named games, built from the verbs the engine already has.
 *
 * ── Why this exists ─────────────────────────────────────────────────────────
 *
 * The engine composes games from a grammar: a verb, a subject, a place. That
 * gave real variety and it did not feel like variety, because every game was
 * dressed the same way. `collect` was always "put things in a basket" with the
 * same eight objects, whatever the topic and whoever the learner.
 *
 * A costume is what makes `collect` into Count the Apples rather than a
 * counting exercise. It is the character, the things, the place and the words,
 * and it is data rather than code: nothing in a costume can decide an answer,
 * which is exactly what makes it safe to have a great many of them.
 *
 * ── Three kinds of game, and only one of them is cheap ──────────────────────
 *
 * Going through the games this platform is meant to have, each one is:
 *
 *   a costume     a verb we have, differently dressed. A data file.
 *   a verb        a new thing to do with your hands. A few hundred lines, once,
 *                 and it pays out across every topic and learner afterwards.
 *   a simulation  its own rules and its own screen. Weeks, each, and the rules
 *                 have to be written by somebody who knows the subject.
 *
 * Most of the early years list is the first kind. This file is where those
 * live.
 *
 * ── The line a costume may not cross ────────────────────────────────────────
 *
 * The engine works out what is true at the point of play. A costume says what
 * the game is called, what is in it and how to ask; it never says what the
 * answer is. That is the same rule that keeps a model from handing a child an
 * answer key, and it applies to a handwritten costume for the same reason: a
 * mistake in a costume should be able to make a game ugly, never wrong.
 */

import type { Goal, Scene, Subject, Thing } from './heavy'
import type { Stage } from './learner'

/**
 * Somebody who lives in the scene.
 *
 * Drawn by the engine from this description, not loaded, so a character costs
 * nothing to download. The engine knows a small set of bodies; a costume picks
 * one and colours it.
 */
export interface Character {
  /** Which body the engine draws. */
  body: 'child' | 'monster' | 'animal' | 'bird'
  /** What the child calls them, used in the wording. */
  name: string
  /** Two colours: the body and its markings. */
  colours: [string, string]
  /** Where they stand, as a fraction of the width. */
  at?: number
}

/** How the things in play are presented. */
export type Look = 'card' | 'bare' | 'balloon'

export interface Costume {
  id: string
  /** The name a grown-up sees. A child hears the intro instead. */
  name: string
  /** The verb this dresses. */
  goal: Goal
  /** What it teaches, which decides what the engine lays out. */
  subject: Subject
  scene: Scene
  /** Which learners it suits. */
  stages: Stage[]
  /**
   * What the topic has to be about for this game to be offered.
   *
   * Matched on the topic title, the same way `games.ts` does, so a costume
   * about apples is never served for a lesson on handwriting.
   */
  suits: RegExp
  /** Never offered for a topic matching this, however well `suits` matches. */
  not?: RegExp
  things: Thing[]
  /**
   * On the board: a card, the thing alone, or a balloon.
   *
   * Apples on a farm should be apples, not apples printed on white cards. The
   * card is right for a numeral and wrong for fruit.
   */
  look?: Look
  /** Said when the game opens. One sentence, in a child's words. */
  intro: string
  character?: Character
}

const REGISTRY: Costume[] = []

export function dress(c: Costume): Costume {
  REGISTRY.push(c)
  return c
}

/**
 * The costumes that fit this learner and this topic.
 *
 * Both have to match: a costume is a game about something, and offering Count
 * the Apples for a lesson on shapes would be the same mistake as offering a
 * letter game for algebra, which this platform has already made once.
 */
export function costumesFor(stage: Stage, topicTitle: string): Costume[] {
  return REGISTRY.filter(c =>
    c.stages.includes(stage)
    && c.suits.test(topicTitle)
    && !(c.not && c.not.test(topicTitle)))
}

/** One costume for a verb, if any fits. */
export function costumeFor(
  stage: Stage,
  topicTitle: string,
  goal: Goal,
): Costume | null {
  const fits = costumesFor(stage, topicTitle).filter(c => c.goal === goal)
  if (!fits.length) return null
  return fits[Math.floor(Math.random() * fits.length)]
}

export const allCostumes = (): Costume[] => REGISTRY.slice()
