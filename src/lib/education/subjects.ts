/**
 * What there is to study, by stage.
 *
 * A learner picks a subject before anything is taught, because "learn" is not a
 * thing you can do: you learn Integrated Science, or Core Mathematics, or
 * technical drawing. The earlier version dropped everyone straight into
 * Mathematics whatever their stage, which was the platform deciding for them.
 *
 * The lists follow the Ghanaian pattern each stage actually uses. Creche has
 * numeracy and literacy rather than Mathematics and English, because that is
 * what those years are called and a parent looking for their child's subject
 * should recognise it. SHS splits core from elective, because that is how a
 * timetable there is built and how WASSCE is sat.
 *
 * What a subject can offer is not stored here. It is asked of the syllabus
 * registry, because that is where the answer actually lives and a duplicated
 * flag would drift the first time an outline was added. See `readinessOf`.
 */

import type { Stage } from './learner'
import { hasSyllabus, sizeOf, syllabusFor } from './syllabus'
/* Loads every outline into the registry. Imported here because this is the
   module every screen already goes through to find out what there is to study. */
import './library/syllabus'

export interface Subject {
  id: string
  name: string
  /** Shown under the name, to tell near neighbours apart. */
  note?: string
  /** SHS distinguishes the four everyone sits from the ones they choose. */
  band?: 'core' | 'elective'
  /**
   * A course has been written out in full, with prose and questions.
   *
   * True for exactly one subject today. It is not a gate: an outlined subject
   * is taught by the tutor from its syllabus, which is the normal case rather
   * than the degraded one.
   */
  written?: boolean
}

/**
 * What a subject can offer a learner right now.
 *
 *   written    a course exists with its explanations already on the page
 *   outlined   a syllabus exists and the tutor teaches from it
 *   none       nothing at all, so the subject says so rather than opening empty
 *
 * Only the last is a dead end, and it is the rare one.
 */
export type Readiness = 'written' | 'outlined' | 'none'

export function readinessOf(stage: Stage, subject: Subject): Readiness {
  if (subject.written) return 'written'
  return hasSyllabus(stage, subject.id) ? 'outlined' : 'none'
}

/** How much subject there is, for a screen that should not overstate it. */
export function shapeOf(stage: Stage, subjectId: string): { strands: number, topics: number } | null {
  const s = syllabusFor(stage, subjectId)
  return s ? sizeOf(s) : null
}

export const SUBJECTS: Record<Stage, Subject[]> = {
  creche: [
    { id: 'numeracy', name: 'Numeracy', note: 'Counting, sorting, shapes' },
    { id: 'literacy', name: 'Literacy', note: 'Letters, sounds, first words' },
    { id: 'owop-early', name: 'Our World Our People' },
    { id: 'arts-early', name: 'Creative Arts' },
  ],
  primary: [
    { id: 'maths', name: 'Mathematics' },
    { id: 'english', name: 'English Language' },
    { id: 'science', name: 'Science' },
    { id: 'owop', name: 'Our World Our People' },
    { id: 'ghl', name: 'Ghanaian Language' },
    { id: 'rme', name: 'Religious and Moral Education' },
    { id: 'computing', name: 'Computing' },
    { id: 'arts', name: 'Creative Arts' },
  ],
  jhs: [
    { id: 'maths', name: 'Mathematics', written: true },
    { id: 'english', name: 'English Language' },
    { id: 'science', name: 'Integrated Science' },
    { id: 'social', name: 'Social Studies' },
    { id: 'computing', name: 'Computing' },
    { id: 'career-tech', name: 'Career Technology' },
    { id: 'ghl', name: 'Ghanaian Language' },
    { id: 'rme', name: 'Religious and Moral Education' },
    { id: 'french', name: 'French' },
  ],
  /**
   * Senior high, from the curriculum NaCCA published for the 2024/2025 roll
   * out. This replaced an earlier list that was the previous curriculum:
   * "Core Mathematics" is now Mathematics, "Integrated Science" is General
   * Science, "Elective Mathematics" is Additional Mathematics, and a dozen
   * subjects were added that did not exist before.
   *
   * Every name here is one NaCCA has published a curriculum document for, with
   * two exceptions marked below. Which of these a learner actually sees is
   * decided by their course: see `programmes.ts`.
   */
  shs: [
    { id: 'maths', name: 'Mathematics', band: 'core' },
    { id: 'english', name: 'English Language', band: 'core' },
    { id: 'general-science', name: 'General Science', band: 'core' },
    { id: 'social', name: 'Social Studies', band: 'core' },
    {
      id: 'core-peh',
      name: 'Physical Education and Health',
      note: 'Core, taught but not examined',
      band: 'core',
    },

    { id: 'add-maths', name: 'Additional Mathematics', band: 'elective' },
    { id: 'physics', name: 'Physics', band: 'elective' },
    { id: 'chemistry', name: 'Chemistry', band: 'elective' },
    { id: 'biology', name: 'Biology', band: 'elective' },
    { id: 'biomedical-science', name: 'Biomedical Science', band: 'elective' },
    { id: 'agriculture', name: 'Agriculture', band: 'elective' },
    { id: 'agricultural-science', name: 'Agricultural Science', band: 'elective' },

    { id: 'economics', name: 'Economics', band: 'elective' },
    { id: 'geography', name: 'Geography', band: 'elective' },
    { id: 'government', name: 'Government', band: 'elective' },
    { id: 'history', name: 'History', band: 'elective' },
    { id: 'literature', name: 'Literature in English', band: 'elective' },
    { id: 'rme', name: 'Religious and Moral Education', band: 'elective' },

    { id: 'computing', name: 'Computing', band: 'elective' },
    { id: 'ict', name: 'ICT', band: 'elective' },
    { id: 'robotics', name: 'Robotics', band: 'elective' },
    { id: 'engineering', name: 'Engineering', band: 'elective' },
    {
      id: 'manufacturing-engineering',
      name: 'Manufacturing Engineering',
      band: 'elective',
    },
    {
      id: 'aviation-aerospace',
      name: 'Aviation and Aerospace Engineering',
      band: 'elective',
    },
    { id: 'applied-technology', name: 'Applied Technology', band: 'elective' },
    {
      id: 'dct',
      name: 'Design and Communication Technology',
      band: 'elective',
    },

    { id: 'art-design-foundation', name: 'Art and Design Foundation', band: 'elective' },
    { id: 'art-design-studio', name: 'Art and Design Studio', band: 'elective' },
    { id: 'performing-arts', name: 'Performing Arts', band: 'elective' },

    { id: 'french', name: 'French', band: 'elective' },
    { id: 'arabic', name: 'Arabic', band: 'elective' },
    { id: 'spanish', name: 'Spanish', band: 'elective' },
    {
      id: 'peh-elective',
      name: 'Physical Education and Health',
      note: 'Elective, examined',
      band: 'elective',
    },

    /* Ghanaian Language is a real elective and NaCCA has not published a senior
       high document for it yet, so it is listed and will say it has no material
       rather than being hidden from a learner looking for it. */
    { id: 'ghl', name: 'Ghanaian Language', band: 'elective' },
  ],
  tvet: [
    { id: 'trade-calc', name: 'Trade Calculations' },
    { id: 'tech-drawing', name: 'Technical Drawing' },
    { id: 'workshop', name: 'Workshop Practice' },
    { id: 'applied-science', name: 'Applied Science' },
    { id: 'entrepreneurship', name: 'Entrepreneurship' },
  ],
  uni: [
    { id: 'maths', name: 'Mathematics', note: 'Calculus, algebra, analysis' },
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'engineering', name: 'Engineering Science' },
    { id: 'statistics', name: 'Statistics' },
    { id: 'economics', name: 'Economics' },
    { id: 'computing', name: 'Computer Science' },
  ],
}

export const subjectsFor = (stage: Stage): Subject[] => SUBJECTS[stage] ?? []

export function subjectById(stage: Stage, id: string | null): Subject | null {
  if (!id) return null
  return subjectsFor(stage).find(s => s.id === id) ?? null
}

/**
 * Prompts a learner can lean on when telling the AI how to teach them.
 *
 * A blank box with "anything else?" above it gets left blank. Examples get
 * filled in, and they also teach what kind of instruction is actually useful:
 * something about how you work, not a request for a different syllabus.
 */
export const NOTE_EXAMPLES = [
  'Explain things with real examples I can picture, not just symbols.',
  'I am weak on fractions. Go over them before anything that needs them.',
  'Keep the working short. I lose track over long steps.',
  'I am sitting BECE in June. Push past questions at me.',
  'Ask me to say the reason out loud before giving me the answer.',
]
