/**
 * The education domain model: stable internal codes.
 *
 * Nothing in this file is human-facing. Every value here is an identifier that
 * gets written to the database and must never change meaning, because learner
 * records from 2026 will still be read in 2046.
 *
 * Display strings live in configuration.ts, deliberately apart. Storing
 * "SHS 2" as the primary value would make the database depend on the
 * presentation language, and Twi, Ga, Ewe or a change in government
 * terminology would then require rewriting learner history rather than
 * changing a lookup.
 */

/* ------------------------------------------------------------------ systems */

/**
 * An education system is a structure with its own levels, progression and
 * assessment model. Not a synonym for stage: TVET and Tertiary can run
 * concurrently for the same person.
 */
export type EducationSystemCode =
  | 'EARLY_CHILDHOOD'
  | 'BASIC'
  | 'JUNIOR_HIGH'
  | 'SENIOR_HIGH'
  | 'TVET'
  | 'TERTIARY'
  | 'PROFESSIONAL'

/* ------------------------------------------------------------------- levels */

/**
 * Level codes. Ghana's current structure, but this list is expected to be
 * extended and eventually administered rather than edited, so nothing else in
 * the codebase may switch on a specific member.
 */
export type LevelCode =
  | 'KG_1' | 'KG_2'
  | 'BASIC_1' | 'BASIC_2' | 'BASIC_3' | 'BASIC_4' | 'BASIC_5' | 'BASIC_6'
  | 'JHS_1' | 'JHS_2' | 'JHS_3'
  | 'SHS_1' | 'SHS_2' | 'SHS_3'
  | 'TVET_1' | 'TVET_2' | 'TVET_3' | 'TVET_4'
  | 'UNI_FOUNDATION' | 'UNI_YEAR_1' | 'UNI_YEAR_2' | 'UNI_YEAR_3' | 'UNI_YEAR_4'
  | 'UNI_MASTERS' | 'UNI_DOCTORAL'
  | 'PROFESSIONAL'

/* ------------------------------------------------------------------- groups */

/**
 * What a learner belongs to alongside their peers.
 *
 * Deliberately not a single field called "class". A TVET learner is in a
 * trade, a university student in a programme, and calling either a class makes
 * the platform read as written for somebody else.
 */
export type GroupTypeCode =
  | 'CLASS' | 'STREAM' | 'TRADE' | 'PROGRAMME' | 'COHORT' | 'COURSE' | 'DEPARTMENT'

/* --------------------------------------------------------------------- work */

/** What the learner's work is called. Never assumed to be "assignment". */
export type WorkLabelCode =
  | 'ACTIVITIES' | 'CLASSWORK' | 'ASSIGNMENTS' | 'COURSEWORK'
  | 'COMPETENCIES' | 'PRACTICAL_TASKS' | 'MODULES'

/* --------------------------------------------------------------- assessment */

/**
 * Assessment models differ in kind, not only in scale. A developmental
 * observation of a five year old and a WASSCE grade are not the same quantity
 * wearing different labels, so a single numeric score model would be a lie.
 */
export type AssessmentModelCode =
  | 'DEVELOPMENTAL'      // early childhood: observed progress, no marks
  | 'SCHOOL_ASSESSMENT'  // primary: teacher assessment against objectives
  | 'CONTINUOUS'         // JHS and SHS: continuous assessment plus terminal exam
  | 'COMPETENCY'         // TVET: can they do it, assessed practically
  | 'ACADEMIC_CREDIT'    // tertiary: coursework, exams, credits, GPA

/* -------------------------------------------------------------- examination */

export type ExaminationCode = 'BECE' | 'WASSCE' | 'NVTI' | 'UNIVERSITY' | 'NONE'

/* -------------------------------------------------------------- progression */

export type ProgressionModelCode =
  | 'AUTOMATIC'      // moves up with the year group
  | 'EXAM_GATED'     // progression depends on a national examination
  | 'CREDIT_BASED'   // accumulate credits
  | 'COMPETENCY_BASED'
  | 'CONTINUOUS'     // lifelong, no progression

/* ----------------------------------------------------------------- features */

/**
 * Capabilities a context may switch on.
 *
 * Screens ask `context.features.X`. Nothing anywhere asks
 * `if (level === 'JHS_3')`, because that is an educational rule and the
 * frontend is not permitted to hold one.
 */
export type FeatureKey =
  | 'aiTutor' | 'lessons' | 'library' | 'practice'
  | 'assignments' | 'coursework' | 'competencies' | 'practicalTasks'
  | 'assessments' | 'terminalExam' | 'pastQuestions'
  | 'ranking' | 'gpa' | 'credits'
  | 'progressPercent' | 'developmentalProgress'
  | 'careerPath' | 'universities' | 'opportunities'
  | 'portfolio' | 'skills' | 'projects' | 'certificates'
  | 'research' | 'internships' | 'cpd'
  | 'parentVisibility' | 'stories' | 'games'

/* ------------------------------------------------------------------ ranking */

/**
 * Ranking is a policy, not a product decision.
 *
 * Whether a learner is shown their position against classmates is an
 * educational and cultural question that belongs to a ministry or an
 * institution. The architecture must support it being on or off without any
 * screen changing, so it is resolved here and never inferred in a component.
 */
export type RankingVisibility = 'HIDDEN' | 'LEARNER' | 'GUARDIAN' | 'STAFF_ONLY'

export interface RankingPolicy {
  enabled: boolean
  visibility: RankingVisibility
  /** What the learner is ranked within. */
  scope: 'CLASS' | 'COHORT' | 'SUBJECT' | 'NONE'
  /** What the ranking is computed from. */
  metric: 'AVERAGE' | 'GPA' | 'NONE'
}

/* ---------------------------------------------------------------- age bands */

/** Used to pitch AI explanations and reading level, never to gate content. */
export type AgeBandCode = 'EARLY' | 'CHILD' | 'ADOLESCENT' | 'YOUNG_ADULT' | 'ADULT'

/* ------------------------------------------------------------ institutions */

export type InstitutionTypeCode =
  | 'KINDERGARTEN' | 'PRIMARY' | 'BASIC' | 'JHS' | 'SHS'
  | 'TVET_CENTRE' | 'UNIVERSITY' | 'TRAINING_PROVIDER'
