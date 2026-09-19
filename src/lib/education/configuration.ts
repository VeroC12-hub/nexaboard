import type {
  AgeBandCode, AssessmentModelCode, EducationSystemCode, ExaminationCode,
  FeatureKey, GroupTypeCode, LevelCode, ProgressionModelCode, RankingPolicy,
  WorkLabelCode,
} from './codes'

/**
 * The education configuration: the single source of truth for how the platform
 * behaves for a given level.
 *
 * Two rules govern this file.
 *
 * 1. Educational rules live here and nowhere else. "JHS 3 leads to BECE" is a
 *    government decision that has changed before and will change again. If a
 *    screen holds that rule, changing it means rewriting screens; if this file
 *    holds it, it means editing a row. Eventually this becomes administered
 *    data rather than source, which is why nothing outside reads it directly.
 *
 * 2. It is versioned. A learner assessed under the 2026 structure keeps the
 *    2026 meaning of their record forever. Silently reinterpreting a 2026
 *    result under a 2029 curriculum would corrupt the history the Digital
 *    Education Passport exists to protect.
 */

export const CONFIGURATION_VERSION = '2026.1'

/* ------------------------------------------------------------------ display */

/**
 * Display strings, separated from codes so language is a lookup rather than a
 * migration. Adding Twi means adding a map, not touching learner records.
 */
export type LanguageCode = 'en' | 'tw' | 'ga' | 'ee' | 'dag'

type DisplayMap = Partial<Record<LanguageCode, string>>

const LEVEL_NAMES: Record<LevelCode, DisplayMap> = {
  KG_1: { en: 'KG 1' }, KG_2: { en: 'KG 2' },
  BASIC_1: { en: 'Basic 1' }, BASIC_2: { en: 'Basic 2' }, BASIC_3: { en: 'Basic 3' },
  BASIC_4: { en: 'Basic 4' }, BASIC_5: { en: 'Basic 5' }, BASIC_6: { en: 'Basic 6' },
  JHS_1: { en: 'JHS 1' }, JHS_2: { en: 'JHS 2' }, JHS_3: { en: 'JHS 3' },
  SHS_1: { en: 'SHS 1' }, SHS_2: { en: 'SHS 2' }, SHS_3: { en: 'SHS 3' },
  TVET_1: { en: 'Level 1' }, TVET_2: { en: 'Level 2' },
  TVET_3: { en: 'Level 3' }, TVET_4: { en: 'Level 4' },
  UNI_FOUNDATION: { en: 'Foundation' },
  UNI_YEAR_1: { en: 'Year 1' }, UNI_YEAR_2: { en: 'Year 2' },
  UNI_YEAR_3: { en: 'Year 3' }, UNI_YEAR_4: { en: 'Year 4' },
  UNI_MASTERS: { en: 'Masters' }, UNI_DOCTORAL: { en: 'Doctoral' },
  PROFESSIONAL: { en: 'Professional' },
}

const GROUP_NAMES: Record<GroupTypeCode, DisplayMap> = {
  CLASS: { en: 'Class' }, STREAM: { en: 'Stream' }, TRADE: { en: 'Trade' },
  PROGRAMME: { en: 'Programme' }, COHORT: { en: 'Cohort' },
  COURSE: { en: 'Course' }, DEPARTMENT: { en: 'Department' },
}

const WORK_NAMES: Record<WorkLabelCode, DisplayMap> = {
  ACTIVITIES: { en: 'Activities' }, CLASSWORK: { en: 'Classwork' },
  ASSIGNMENTS: { en: 'Assignments' }, COURSEWORK: { en: 'Coursework' },
  COMPETENCIES: { en: 'Competencies' }, PRACTICAL_TASKS: { en: 'Practical tasks' },
  MODULES: { en: 'Modules' },
}

const EXAM_NAMES: Record<ExaminationCode, DisplayMap> = {
  BECE: { en: 'BECE' }, WASSCE: { en: 'WASSCE' },
  NVTI: { en: 'NVTI assessment' }, UNIVERSITY: { en: 'University examinations' },
  NONE: { en: '' },
}

/** Progress is not one quantity. What it is called depends on how it is measured. */
const PROGRESS_NAMES: Record<AssessmentModelCode, DisplayMap> = {
  DEVELOPMENTAL: { en: 'Learning development' },
  SCHOOL_ASSESSMENT: { en: 'Learning progress' },
  CONTINUOUS: { en: 'Subject performance' },
  COMPETENCY: { en: 'Competencies achieved' },
  ACADEMIC_CREDIT: { en: 'Course progress' },
}

const pick = (m: DisplayMap, lang: LanguageCode) => m[lang] ?? m.en ?? ''

export const display = {
  level: (c: LevelCode, lang: LanguageCode = 'en') => pick(LEVEL_NAMES[c], lang),
  group: (c: GroupTypeCode, lang: LanguageCode = 'en') => pick(GROUP_NAMES[c], lang),
  work: (c: WorkLabelCode, lang: LanguageCode = 'en') => pick(WORK_NAMES[c], lang),
  exam: (c: ExaminationCode, lang: LanguageCode = 'en') => pick(EXAM_NAMES[c], lang),
  progress: (c: AssessmentModelCode, lang: LanguageCode = 'en') => pick(PROGRESS_NAMES[c], lang),
}

/* ------------------------------------------------------------- level config */

export interface LevelConfiguration {
  level: LevelCode
  system: EducationSystemCode
  groupType: GroupTypeCode
  primaryWork: WorkLabelCode
  secondaryWork?: WorkLabelCode
  assessmentModel: AssessmentModelCode
  /** The examination this level leads towards, if any. */
  examination: ExaminationCode
  /** True only in the year the examination is actually sat. */
  examinationImminent: boolean
  progression: ProgressionModelCode
  ageBand: AgeBandCode
  ranking: RankingPolicy
  features: FeatureKey[]
}

const NO_RANKING: RankingPolicy = { enabled: false, visibility: 'HIDDEN', scope: 'NONE', metric: 'NONE' }
const CLASS_RANKING: RankingPolicy = { enabled: true, visibility: 'LEARNER', scope: 'CLASS', metric: 'AVERAGE' }
/** Primary defaults to staff-only: available to the school, not shown to the child. */
const STAFF_RANKING: RankingPolicy = { enabled: true, visibility: 'STAFF_ONLY', scope: 'CLASS', metric: 'AVERAGE' }
const GPA_RANKING: RankingPolicy = { enabled: true, visibility: 'LEARNER', scope: 'COHORT', metric: 'GPA' }

const EARLY_FEATURES: FeatureKey[] = [
  'lessons', 'library', 'stories', 'games',
  'developmentalProgress', 'parentVisibility', 'portfolio',
]

const PRIMARY_FEATURES: FeatureKey[] = [
  'aiTutor', 'lessons', 'library', 'practice', 'assignments', 'assessments',
  'progressPercent', 'parentVisibility', 'portfolio', 'skills', 'projects',
]

const JHS_FEATURES: FeatureKey[] = [
  ...PRIMARY_FEATURES, 'terminalExam', 'pastQuestions', 'ranking',
  'careerPath', 'opportunities', 'certificates',
]

const SHS_FEATURES: FeatureKey[] = [
  ...JHS_FEATURES, 'coursework', 'universities',
]

const TVET_FEATURES: FeatureKey[] = [
  'aiTutor', 'lessons', 'library', 'competencies', 'practicalTasks',
  'assessments', 'terminalExam', 'portfolio', 'skills', 'projects',
  'certificates', 'careerPath', 'opportunities', 'internships',
]

const TERTIARY_FEATURES: FeatureKey[] = [
  'aiTutor', 'lessons', 'library', 'coursework', 'assessments',
  'gpa', 'credits', 'progressPercent', 'research', 'internships',
  'portfolio', 'skills', 'projects', 'certificates', 'careerPath',
  'opportunities', 'cpd',
]

const lvl = (
  level: LevelCode, system: EducationSystemCode, o: Partial<LevelConfiguration>,
): LevelConfiguration => ({
  level, system,
  groupType: 'CLASS',
  primaryWork: 'ASSIGNMENTS',
  assessmentModel: 'SCHOOL_ASSESSMENT',
  examination: 'NONE',
  examinationImminent: false,
  progression: 'AUTOMATIC',
  ageBand: 'CHILD',
  ranking: NO_RANKING,
  features: PRIMARY_FEATURES,
  ...o,
})

export const LEVELS: Record<LevelCode, LevelConfiguration> = {
  KG_1: lvl('KG_1', 'EARLY_CHILDHOOD', { primaryWork: 'ACTIVITIES', assessmentModel: 'DEVELOPMENTAL', ageBand: 'EARLY', features: EARLY_FEATURES }),
  KG_2: lvl('KG_2', 'EARLY_CHILDHOOD', { primaryWork: 'ACTIVITIES', assessmentModel: 'DEVELOPMENTAL', ageBand: 'EARLY', features: EARLY_FEATURES }),

  BASIC_1: lvl('BASIC_1', 'BASIC', { primaryWork: 'CLASSWORK', secondaryWork: 'ACTIVITIES', ranking: STAFF_RANKING }),
  BASIC_2: lvl('BASIC_2', 'BASIC', { primaryWork: 'CLASSWORK', secondaryWork: 'ACTIVITIES', ranking: STAFF_RANKING }),
  BASIC_3: lvl('BASIC_3', 'BASIC', { primaryWork: 'CLASSWORK', secondaryWork: 'ACTIVITIES', ranking: STAFF_RANKING }),
  BASIC_4: lvl('BASIC_4', 'BASIC', { primaryWork: 'CLASSWORK', secondaryWork: 'ASSIGNMENTS', ranking: STAFF_RANKING }),
  BASIC_5: lvl('BASIC_5', 'BASIC', { primaryWork: 'CLASSWORK', secondaryWork: 'ASSIGNMENTS', ranking: STAFF_RANKING }),
  BASIC_6: lvl('BASIC_6', 'BASIC', { primaryWork: 'CLASSWORK', secondaryWork: 'ASSIGNMENTS', ranking: STAFF_RANKING }),

  JHS_1: lvl('JHS_1', 'JUNIOR_HIGH', { assessmentModel: 'CONTINUOUS', examination: 'BECE', progression: 'EXAM_GATED', ageBand: 'ADOLESCENT', ranking: CLASS_RANKING, features: JHS_FEATURES }),
  JHS_2: lvl('JHS_2', 'JUNIOR_HIGH', { assessmentModel: 'CONTINUOUS', examination: 'BECE', progression: 'EXAM_GATED', ageBand: 'ADOLESCENT', ranking: CLASS_RANKING, features: JHS_FEATURES }),
  JHS_3: lvl('JHS_3', 'JUNIOR_HIGH', { assessmentModel: 'CONTINUOUS', examination: 'BECE', examinationImminent: true, progression: 'EXAM_GATED', ageBand: 'ADOLESCENT', ranking: CLASS_RANKING, features: JHS_FEATURES }),

  SHS_1: lvl('SHS_1', 'SENIOR_HIGH', { primaryWork: 'COURSEWORK', secondaryWork: 'ASSIGNMENTS', assessmentModel: 'CONTINUOUS', examination: 'WASSCE', progression: 'EXAM_GATED', ageBand: 'ADOLESCENT', ranking: CLASS_RANKING, features: SHS_FEATURES }),
  SHS_2: lvl('SHS_2', 'SENIOR_HIGH', { primaryWork: 'COURSEWORK', secondaryWork: 'ASSIGNMENTS', assessmentModel: 'CONTINUOUS', examination: 'WASSCE', progression: 'EXAM_GATED', ageBand: 'ADOLESCENT', ranking: CLASS_RANKING, features: SHS_FEATURES }),
  SHS_3: lvl('SHS_3', 'SENIOR_HIGH', { primaryWork: 'COURSEWORK', secondaryWork: 'ASSIGNMENTS', assessmentModel: 'CONTINUOUS', examination: 'WASSCE', examinationImminent: true, progression: 'EXAM_GATED', ageBand: 'YOUNG_ADULT', ranking: CLASS_RANKING, features: SHS_FEATURES }),

  TVET_1: lvl('TVET_1', 'TVET', { groupType: 'TRADE', primaryWork: 'COMPETENCIES', secondaryWork: 'PRACTICAL_TASKS', assessmentModel: 'COMPETENCY', examination: 'NVTI', progression: 'COMPETENCY_BASED', ageBand: 'YOUNG_ADULT', features: TVET_FEATURES }),
  TVET_2: lvl('TVET_2', 'TVET', { groupType: 'TRADE', primaryWork: 'COMPETENCIES', secondaryWork: 'PRACTICAL_TASKS', assessmentModel: 'COMPETENCY', examination: 'NVTI', progression: 'COMPETENCY_BASED', ageBand: 'YOUNG_ADULT', features: TVET_FEATURES }),
  TVET_3: lvl('TVET_3', 'TVET', { groupType: 'TRADE', primaryWork: 'COMPETENCIES', secondaryWork: 'PRACTICAL_TASKS', assessmentModel: 'COMPETENCY', examination: 'NVTI', progression: 'COMPETENCY_BASED', ageBand: 'ADULT', features: TVET_FEATURES }),
  TVET_4: lvl('TVET_4', 'TVET', { groupType: 'TRADE', primaryWork: 'COMPETENCIES', secondaryWork: 'PRACTICAL_TASKS', assessmentModel: 'COMPETENCY', examination: 'NVTI', examinationImminent: true, progression: 'COMPETENCY_BASED', ageBand: 'ADULT', features: TVET_FEATURES }),

  UNI_FOUNDATION: lvl('UNI_FOUNDATION', 'TERTIARY', { groupType: 'PROGRAMME', primaryWork: 'COURSEWORK', assessmentModel: 'ACADEMIC_CREDIT', examination: 'UNIVERSITY', progression: 'CREDIT_BASED', ageBand: 'YOUNG_ADULT', ranking: GPA_RANKING, features: TERTIARY_FEATURES }),
  UNI_YEAR_1: lvl('UNI_YEAR_1', 'TERTIARY', { groupType: 'PROGRAMME', primaryWork: 'COURSEWORK', assessmentModel: 'ACADEMIC_CREDIT', examination: 'UNIVERSITY', progression: 'CREDIT_BASED', ageBand: 'YOUNG_ADULT', ranking: GPA_RANKING, features: TERTIARY_FEATURES }),
  UNI_YEAR_2: lvl('UNI_YEAR_2', 'TERTIARY', { groupType: 'PROGRAMME', primaryWork: 'COURSEWORK', assessmentModel: 'ACADEMIC_CREDIT', examination: 'UNIVERSITY', progression: 'CREDIT_BASED', ageBand: 'YOUNG_ADULT', ranking: GPA_RANKING, features: TERTIARY_FEATURES }),
  UNI_YEAR_3: lvl('UNI_YEAR_3', 'TERTIARY', { groupType: 'PROGRAMME', primaryWork: 'COURSEWORK', assessmentModel: 'ACADEMIC_CREDIT', examination: 'UNIVERSITY', progression: 'CREDIT_BASED', ageBand: 'ADULT', ranking: GPA_RANKING, features: TERTIARY_FEATURES }),
  UNI_YEAR_4: lvl('UNI_YEAR_4', 'TERTIARY', { groupType: 'PROGRAMME', primaryWork: 'COURSEWORK', assessmentModel: 'ACADEMIC_CREDIT', examination: 'UNIVERSITY', progression: 'CREDIT_BASED', ageBand: 'ADULT', ranking: GPA_RANKING, features: TERTIARY_FEATURES }),
  UNI_MASTERS: lvl('UNI_MASTERS', 'TERTIARY', { groupType: 'PROGRAMME', primaryWork: 'COURSEWORK', assessmentModel: 'ACADEMIC_CREDIT', examination: 'UNIVERSITY', progression: 'CREDIT_BASED', ageBand: 'ADULT', ranking: GPA_RANKING, features: TERTIARY_FEATURES }),
  UNI_DOCTORAL: lvl('UNI_DOCTORAL', 'TERTIARY', { groupType: 'PROGRAMME', primaryWork: 'MODULES', assessmentModel: 'ACADEMIC_CREDIT', examination: 'NONE', progression: 'CONTINUOUS', ageBand: 'ADULT', ranking: NO_RANKING, features: TERTIARY_FEATURES }),

  PROFESSIONAL: lvl('PROFESSIONAL', 'PROFESSIONAL', { groupType: 'COURSE', primaryWork: 'MODULES', assessmentModel: 'COMPETENCY', examination: 'NONE', progression: 'CONTINUOUS', ageBand: 'ADULT', ranking: NO_RANKING, features: ['aiTutor', 'lessons', 'library', 'assessments', 'certificates', 'cpd', 'portfolio', 'skills', 'careerPath', 'opportunities'] }),
}

/** Ordered, so progression and level pickers derive from configuration too. */
export const LEVEL_ORDER: LevelCode[] = [
  'KG_1', 'KG_2',
  'BASIC_1', 'BASIC_2', 'BASIC_3', 'BASIC_4', 'BASIC_5', 'BASIC_6',
  'JHS_1', 'JHS_2', 'JHS_3',
  'SHS_1', 'SHS_2', 'SHS_3',
  'TVET_1', 'TVET_2', 'TVET_3', 'TVET_4',
  'UNI_FOUNDATION', 'UNI_YEAR_1', 'UNI_YEAR_2', 'UNI_YEAR_3', 'UNI_YEAR_4',
  'UNI_MASTERS', 'UNI_DOCTORAL',
  'PROFESSIONAL',
]

export const SYSTEM_NAMES: Record<EducationSystemCode, DisplayMap> = {
  EARLY_CHILDHOOD: { en: 'Early Childhood' },
  BASIC: { en: 'Basic Education' },
  JUNIOR_HIGH: { en: 'Junior High' },
  SENIOR_HIGH: { en: 'Senior High' },
  TVET: { en: 'TVET' },
  TERTIARY: { en: 'Tertiary' },
  PROFESSIONAL: { en: 'Professional' },
}
