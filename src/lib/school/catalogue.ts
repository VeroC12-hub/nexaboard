/**
 * The course catalogue and syllabus spine.
 *
 * The platform is not a pile of courses. It is the Ghanaian curriculum, whole,
 * with content hanging off every objective. That is the thing Coursera and
 * YouTube structurally will not build: they have no reason to cover
 * B8.2.1.1.3 to the NaCCA syllabus, and no way to know which objective a
 * particular learner's class reached this morning.
 *
 * So the unit of the platform is the OBJECTIVE, not the course. Every lesson,
 * video, handout, slide deck, textbook chapter, exercise and past question
 * attaches to one, which is what makes coverage measurable and gaps visible.
 */

export type Band = 'KG' | 'Primary' | 'JHS' | 'SHS' | 'TVET' | 'Tertiary'

export interface Course {
  id: string
  name: string
  band: Band
  /** Levels this subject runs across, e.g. B7 to B9. */
  levels: string
  objectives: number
  /** Objectives with at least one lesson attached. */
  covered: number
  core: boolean
}

/** Ghana's actual subject offering, band by band. */
export const COURSES: Course[] = [
  // Kindergarten
  { id: 'kg-num',  name: 'Numeracy',                     band: 'KG', levels: 'KG1 to KG2', objectives: 96,  covered: 71,  core: true },
  { id: 'kg-lang', name: 'Language and Literacy',        band: 'KG', levels: 'KG1 to KG2', objectives: 112, covered: 84,  core: true },
  { id: 'kg-cre',  name: 'Creative Arts',                band: 'KG', levels: 'KG1 to KG2', objectives: 64,  covered: 38,  core: false },
  { id: 'kg-owo',  name: 'Our World Our People',         band: 'KG', levels: 'KG1 to KG2', objectives: 72,  covered: 44,  core: true },

  // Primary
  { id: 'pr-math', name: 'Mathematics',                  band: 'Primary', levels: 'B1 to B6', objectives: 642, covered: 596, core: true },
  { id: 'pr-eng',  name: 'English Language',             band: 'Primary', levels: 'B1 to B6', objectives: 588, covered: 531, core: true },
  { id: 'pr-sci',  name: 'Science',                      band: 'Primary', levels: 'B1 to B6', objectives: 414, covered: 361, core: true },
  { id: 'pr-owop', name: 'Our World Our People',         band: 'Primary', levels: 'B1 to B3', objectives: 208, covered: 166, core: true },
  { id: 'pr-hist', name: 'History',                      band: 'Primary', levels: 'B1 to B6', objectives: 186, covered: 128, core: true },
  { id: 'pr-cre',  name: 'Creative Arts',                band: 'Primary', levels: 'B1 to B6', objectives: 224, covered: 141, core: false },
  { id: 'pr-rme',  name: 'Religious and Moral Education',band: 'Primary', levels: 'B1 to B6', objectives: 168, covered: 119, core: false },
  { id: 'pr-gha',  name: 'Ghanaian Language',            band: 'Primary', levels: 'B1 to B6', objectives: 292, covered: 174, core: true },
  { id: 'pr-comp', name: 'Computing',                    band: 'Primary', levels: 'B1 to B6', objectives: 196, covered: 132, core: false },
  { id: 'pr-pe',   name: 'Physical Education',           band: 'Primary', levels: 'B1 to B6', objectives: 144, covered: 61,  core: false },

  // JHS
  { id: 'jh-math', name: 'Mathematics',                  band: 'JHS', levels: 'B7 to B9', objectives: 388, covered: 361, core: true },
  { id: 'jh-eng',  name: 'English Language',             band: 'JHS', levels: 'B7 to B9', objectives: 342, covered: 318, core: true },
  { id: 'jh-sci',  name: 'Integrated Science',           band: 'JHS', levels: 'B7 to B9', objectives: 306, covered: 284, core: true },
  { id: 'jh-soc',  name: 'Social Studies',               band: 'JHS', levels: 'B7 to B9', objectives: 224, covered: 191, core: true },
  { id: 'jh-comp', name: 'Computing',                    band: 'JHS', levels: 'B7 to B9', objectives: 198, covered: 146, core: true },
  { id: 'jh-ctc',  name: 'Career Technology',            band: 'JHS', levels: 'B7 to B9', objectives: 212, covered: 138, core: true },
  { id: 'jh-cad',  name: 'Creative Arts and Design',     band: 'JHS', levels: 'B7 to B9', objectives: 184, covered: 96,  core: true },
  { id: 'jh-rme',  name: 'Religious and Moral Education',band: 'JHS', levels: 'B7 to B9', objectives: 152, covered: 121, core: true },
  { id: 'jh-gha',  name: 'Ghanaian Language',            band: 'JHS', levels: 'B7 to B9', objectives: 176, covered: 88,  core: true },
  { id: 'jh-fr',   name: 'French',                       band: 'JHS', levels: 'B7 to B9', objectives: 164, covered: 74,  core: false },
  { id: 'jh-ara',  name: 'Arabic',                       band: 'JHS', levels: 'B7 to B9', objectives: 148, covered: 41,  core: false },

  // SHS
  { id: 'sh-cmath', name: 'Core Mathematics',            band: 'SHS', levels: 'SHS1 to SHS3', objectives: 286, covered: 271, core: true },
  { id: 'sh-emath', name: 'Elective Mathematics',        band: 'SHS', levels: 'SHS1 to SHS3', objectives: 248, covered: 232, core: false },
  { id: 'sh-eng',   name: 'English Language',            band: 'SHS', levels: 'SHS1 to SHS3', objectives: 264, covered: 246, core: true },
  { id: 'sh-sci',   name: 'Integrated Science',          band: 'SHS', levels: 'SHS1 to SHS3', objectives: 232, covered: 214, core: true },
  { id: 'sh-soc',   name: 'Social Studies',              band: 'SHS', levels: 'SHS1 to SHS3', objectives: 196, covered: 178, core: true },
  { id: 'sh-phy',   name: 'Physics',                     band: 'SHS', levels: 'SHS1 to SHS3', objectives: 218, covered: 201, core: false },
  { id: 'sh-chem',  name: 'Chemistry',                   band: 'SHS', levels: 'SHS1 to SHS3', objectives: 226, covered: 208, core: false },
  { id: 'sh-bio',   name: 'Biology',                     band: 'SHS', levels: 'SHS1 to SHS3', objectives: 244, covered: 219, core: false },
  { id: 'sh-geo',   name: 'Geography',                   band: 'SHS', levels: 'SHS1 to SHS3', objectives: 188, covered: 152, core: false },
  { id: 'sh-eco',   name: 'Economics',                   band: 'SHS', levels: 'SHS1 to SHS3', objectives: 174, covered: 141, core: false },
  { id: 'sh-gov',   name: 'Government',                  band: 'SHS', levels: 'SHS1 to SHS3', objectives: 166, covered: 128, core: false },
  { id: 'sh-hist',  name: 'History',                     band: 'SHS', levels: 'SHS1 to SHS3', objectives: 158, covered: 116, core: false },
  { id: 'sh-lit',   name: 'Literature in English',       band: 'SHS', levels: 'SHS1 to SHS3', objectives: 142, covered: 109, core: false },
  { id: 'sh-acc',   name: 'Financial Accounting',        band: 'SHS', levels: 'SHS1 to SHS3', objectives: 196, covered: 147, core: false },
  { id: 'sh-bm',    name: 'Business Management',         band: 'SHS', levels: 'SHS1 to SHS3', objectives: 164, covered: 118, core: false },
  { id: 'sh-cost',  name: 'Cost Accounting',             band: 'SHS', levels: 'SHS1 to SHS3', objectives: 148, covered: 94,  core: false },
  { id: 'sh-ict',   name: 'ICT',                         band: 'SHS', levels: 'SHS1 to SHS3', objectives: 182, covered: 139, core: true },
  { id: 'sh-tdraw', name: 'Technical Drawing',           band: 'SHS', levels: 'SHS1 to SHS3', objectives: 156, covered: 101, core: false },
  { id: 'sh-food',  name: 'Food and Nutrition',          band: 'SHS', levels: 'SHS1 to SHS3', objectives: 168, covered: 106, core: false },
  { id: 'sh-agric', name: 'General Agriculture',         band: 'SHS', levels: 'SHS1 to SHS3', objectives: 204, covered: 143, core: false },
  { id: 'sh-fr',    name: 'French',                      band: 'SHS', levels: 'SHS1 to SHS3', objectives: 152, covered: 71,  core: false },
  { id: 'sh-crs',   name: 'Christian Religious Studies', band: 'SHS', levels: 'SHS1 to SHS3', objectives: 138, covered: 92,  core: false },
  { id: 'sh-irs',   name: 'Islamic Religious Studies',   band: 'SHS', levels: 'SHS1 to SHS3', objectives: 134, covered: 78,  core: false },

  // TVET
  { id: 'tv-elec',  name: 'Electrical Installation',     band: 'TVET', levels: 'NVTI 1 to 3', objectives: 214, covered: 118, core: false },
  { id: 'tv-weld',  name: 'Welding and Fabrication',     band: 'TVET', levels: 'NVTI 1 to 3', objectives: 186, covered: 92,  core: false },
  { id: 'tv-auto',  name: 'Automotive Engineering',      band: 'TVET', levels: 'NVTI 1 to 3', objectives: 226, covered: 104, core: false },
  { id: 'tv-plumb', name: 'Plumbing',                    band: 'TVET', levels: 'NVTI 1 to 3', objectives: 164, covered: 71,  core: false },
  { id: 'tv-carp',  name: 'Carpentry and Joinery',       band: 'TVET', levels: 'NVTI 1 to 3', objectives: 178, covered: 83,  core: false },
  { id: 'tv-cad',   name: 'CAD and Technical Drawing',   band: 'TVET', levels: 'Certificate',  objectives: 142, covered: 96,  core: false },
  { id: 'tv-fash',  name: 'Fashion and Textiles',        band: 'TVET', levels: 'NVTI 1 to 3', objectives: 168, covered: 74,  core: false },
  { id: 'tv-cater', name: 'Catering and Hospitality',    band: 'TVET', levels: 'NVTI 1 to 3', objectives: 156, covered: 68,  core: false },
  { id: 'tv-agri',  name: 'Agricultural Mechanisation',  band: 'TVET', levels: 'NVTI 1 to 3', objectives: 148, covered: 52,  core: false },
  { id: 'tv-solar', name: 'Renewable Energy Systems',    band: 'TVET', levels: 'Certificate',  objectives: 128, covered: 61,  core: false },
  { id: 'tv-graph', name: 'Graphic Design',              band: 'TVET', levels: 'Certificate',  objectives: 134, covered: 79,  core: false },

  // Tertiary and lifelong
  { id: 'te-eng',   name: 'Engineering Mathematics',     band: 'Tertiary', levels: 'Year 1 to 2', objectives: 218, covered: 164, core: false },
  { id: 'te-therm', name: 'Thermodynamics',              band: 'Tertiary', levels: 'Year 2',      objectives: 142, covered: 98,  core: false },
  { id: 'te-strm',  name: 'Strength of Materials',       band: 'Tertiary', levels: 'Year 2',      objectives: 156, covered: 104, core: false },
  { id: 'te-cs',    name: 'Programming Fundamentals',    band: 'Tertiary', levels: 'Year 1',      objectives: 184, covered: 141, core: false },
  { id: 'te-stat',  name: 'Statistics and Probability',  band: 'Tertiary', levels: 'Year 1',      objectives: 168, covered: 122, core: false },
  { id: 'te-cyber', name: 'Cybersecurity Foundations',   band: 'Tertiary', levels: 'Professional',objectives: 126, covered: 88,  core: false },
  { id: 'te-data',  name: 'Data Analysis',               band: 'Tertiary', levels: 'Professional',objectives: 138, covered: 96,  core: false },
]

export const BANDS: Band[] = ['KG', 'Primary', 'JHS', 'SHS', 'TVET', 'Tertiary']

/* ------------------------------------------------------------- syllabus -- */

export type AssetKind = 'lesson' | 'video' | 'notes' | 'slides' | 'textbook' | 'exercise' | 'past'

export interface Objective {
  code: string
  strand: string
  subStrand: string
  text: string
  term: number
  /** How many of each asset are attached to this objective. */
  assets: Partial<Record<AssetKind, number>>
}

export const ASSET_LABEL: Record<AssetKind, string> = {
  lesson: 'Lesson', video: 'Video', notes: 'Handout', slides: 'Slides',
  textbook: 'Textbook', exercise: 'Exercises', past: 'Past questions',
}

/** Elective Mathematics, SHS 2, as an example of a fully built-out subject. */
export const SYLLABUS: Objective[] = [
  { code: 'E2.1.1.1.1', strand: 'Algebra', subStrand: 'Polynomials', term: 1,
    text: 'Perform the four basic operations on polynomials.',
    assets: { lesson: 1, video: 2, notes: 1, slides: 1, textbook: 3, exercise: 24, past: 8 } },
  { code: 'E2.1.1.1.2', strand: 'Algebra', subStrand: 'Polynomials', term: 1,
    text: 'Apply the remainder and factor theorems to factorise polynomials.',
    assets: { lesson: 1, video: 1, notes: 1, slides: 1, textbook: 2, exercise: 18, past: 11 } },
  { code: 'E2.1.2.1.1', strand: 'Algebra', subStrand: 'Rational functions', term: 1,
    text: 'Resolve rational functions into partial fractions.',
    assets: { lesson: 1, video: 2, notes: 2, slides: 1, textbook: 2, exercise: 22, past: 9 } },
  { code: 'E2.1.3.1.1', strand: 'Algebra', subStrand: 'Binomial theorem', term: 1,
    text: 'Expand expressions using the binomial theorem for positive integral indices.',
    assets: { lesson: 1, video: 1, notes: 1, slides: 1, textbook: 2, exercise: 20, past: 14 } },
  { code: 'E2.2.1.1.1', strand: 'Coordinate Geometry', subStrand: 'The straight line', term: 2,
    text: 'Find the distance between two points and the midpoint of a line segment.',
    assets: { lesson: 1, video: 2, notes: 1, slides: 1, textbook: 3, exercise: 26, past: 12 } },
  { code: 'E2.2.1.1.2', strand: 'Coordinate Geometry', subStrand: 'The straight line', term: 2,
    text: 'Determine the gradient and equation of a straight line in various forms.',
    assets: { lesson: 1, video: 2, notes: 1, slides: 1, textbook: 3, exercise: 30, past: 16 } },
  { code: 'E2.2.1.1.3', strand: 'Coordinate Geometry', subStrand: 'The straight line', term: 2,
    text: 'Find the angle between two lines and the perpendicular distance from a point to a line.',
    assets: { lesson: 1, video: 1, notes: 1, slides: 1, textbook: 2, exercise: 18, past: 7 } },
  { code: 'E2.2.1.1.4', strand: 'Coordinate Geometry', subStrand: 'The circle', term: 2,
    text: 'Find the equation of a circle given the centre and radius.',
    assets: { lesson: 1, video: 2, notes: 2, slides: 1, textbook: 3, exercise: 28, past: 13 } },
  { code: 'E2.2.1.1.5', strand: 'Coordinate Geometry', subStrand: 'The circle', term: 2,
    text: 'Deduce the centre and radius from the general equation of a circle.',
    assets: { lesson: 1, video: 2, notes: 1, slides: 1, textbook: 2, exercise: 24, past: 15 } },
  { code: 'E2.2.1.1.6', strand: 'Coordinate Geometry', subStrand: 'The circle', term: 2,
    text: 'Find the equation of a tangent to a circle at a given point.',
    assets: { lesson: 1, video: 1, notes: 1, slides: 1, textbook: 2, exercise: 16, past: 10 } },
  { code: 'E2.3.1.1.1', strand: 'Vectors', subStrand: 'Vectors in a plane', term: 3,
    text: 'Represent vectors in component form and find magnitude and direction.',
    assets: { lesson: 1, video: 2, notes: 1, slides: 1, textbook: 2, exercise: 22, past: 9 } },
  { code: 'E2.3.1.1.2', strand: 'Vectors', subStrand: 'Vectors in a plane', term: 3,
    text: 'Apply the scalar product to find the angle between two vectors.',
    assets: { lesson: 1, video: 1, notes: 1, slides: 1, textbook: 2, exercise: 18, past: 11 } },
  { code: 'E2.4.1.1.1', strand: 'Statistics', subStrand: 'Measures of dispersion', term: 3,
    text: 'Calculate variance and standard deviation for grouped and ungrouped data.',
    assets: { lesson: 1, video: 2, notes: 1, slides: 1, textbook: 3, exercise: 24, past: 13 } },
  { code: 'E2.4.2.1.1', strand: 'Statistics', subStrand: 'Probability', term: 3,
    text: 'Apply the addition and multiplication laws of probability.',
    assets: { lesson: 1, video: 2, notes: 2, slides: 1, textbook: 2, exercise: 26, past: 17 } },
]
