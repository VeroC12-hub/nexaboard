/**
 * A real lesson.
 *
 * The rest of the learner platform describes learning. This is the thing the
 * learner actually works through, and it is built the way a good teacher
 * teaches rather than the way a textbook is laid out:
 *
 *   tell them the idea, show one worked all the way through, let them try one
 *   with help available, then check they can do it unaided.
 *
 * Two rules shape the structure. Worked examples reveal one step at a time,
 * because a fully visible solution gets skimmed and a hidden one gets thought
 * about. And a learner is never stuck: every question has a hint before it has
 * an answer, so the exit from confusion is always forward.
 */

export type StepKind = 'idea' | 'worked' | 'try' | 'check'

export interface WorkedLine {
  /** The mathematics. */
  line: string
  /** Why this line follows from the one before. */
  because: string
}

export interface Step {
  id: string
  kind: StepKind
  title: string
  /** Plain-language teaching text. Kept short: reading load is a real barrier. */
  body?: string
  /** kind: 'worked' */
  problem?: string
  lines?: WorkedLine[]
  /** kind: 'try' */
  question?: string
  answer?: string[]
  hint?: string
  solution?: string
  /** kind: 'check' */
  options?: string[]
  correct?: number
  explain?: string
}

export interface Lesson {
  id: string
  subject: string
  topic: string
  title: string
  level: string
  minutes: number
  objective: string
  steps: Step[]
}

export const CIRCLE_LESSON: Lesson = {
  id: 'l-circle',
  subject: 'Elective Mathematics',
  topic: 'The circle',
  title: 'Equation of a circle',
  level: 'SHS 2',
  minutes: 20,
  objective: 'Write the equation of a circle from its centre and radius, and read the centre and radius back out of an equation.',
  steps: [
    {
      id: 's1', kind: 'idea', title: 'What a circle really is',
      body: 'A circle is every point that sits the same distance from one fixed point. That fixed point is the centre. That fixed distance is the radius. Nothing else. Once you hold on to that, the equation writes itself.',
    },
    {
      id: 's2', kind: 'idea', title: 'Where the equation comes from',
      body: 'Take a centre (a, b) and any point (x, y) on the circle. The distance between them must equal the radius r. The distance formula says that distance is √((x − a)² + (y − b)²). Set it equal to r, square both sides, and you have the equation of a circle.',
    },
    {
      id: 's3', kind: 'worked', title: 'Worked example: building the equation',
      problem: 'Write the equation of the circle with centre (2, −3) and radius 4.',
      lines: [
        { line: '(x − a)² + (y − b)² = r²', because: 'Start from the general form. a and b are the centre, r is the radius.' },
        { line: '(x − 2)² + (y − (−3))² = 4²', because: 'Substitute a = 2, b = −3 and r = 4. Nothing clever yet, just putting numbers in.' },
        { line: '(x − 2)² + (y + 3)² = 16', because: 'Subtracting a negative is adding, so y − (−3) becomes y + 3. And 4² = 16.' },
      ],
    },
    {
      id: 's4', kind: 'try', title: 'Your turn',
      question: 'Write the equation of the circle with centre (5, 1) and radius 3.',
      answer: ['(x-5)^2+(y-1)^2=9', '(x-5)²+(y-1)²=9', '(x - 5)^2 + (y - 1)^2 = 9'],
      hint: 'Put a = 5, b = 1 and r = 3 into (x − a)² + (y − b)² = r². Remember to square the 3.',
      solution: '(x − 5)² + (y − 1)² = 9',
    },
    {
      id: 's5', kind: 'idea', title: 'Going backwards',
      body: 'Exams more often give you the equation and ask for the centre and radius. If it is already in the bracket form you can just read them off. If it is spread out, like x² + y² − 6x + 4y − 12 = 0, you have to complete the square first. That step is where most marks are lost.',
    },
    {
      id: 's6', kind: 'worked', title: 'Worked example: completing the square',
      problem: 'Find the centre and radius of x² + y² − 6x + 4y − 12 = 0.',
      lines: [
        { line: '(x² − 6x) + (y² + 4y) = 12', because: 'Group the x terms and the y terms, and move the number to the other side.' },
        { line: '(x − 3)² − 9 + (y + 2)² − 4 = 12', because: 'Complete the square on each. Half of −6 is −3, and (−3)² = 9, so subtract it back. Half of 4 is 2, and 2² = 4.' },
        { line: '(x − 3)² + (y + 2)² = 25', because: 'Move the −9 and −4 across: 12 + 9 + 4 = 25.' },
        { line: 'Centre (3, −2), radius 5', because: 'Read it off. The sign flips: (x − 3) means a = 3, and (y + 2) means b = −2. r² = 25, so r = 5.' },
      ],
    },
    {
      id: 's7', kind: 'try', title: 'Your turn again',
      question: 'What is the radius of the circle (x + 1)² + (y − 4)² = 49?',
      answer: ['7'],
      hint: 'The right-hand side is r², not r.',
      solution: 'r² = 49, so r = 7.',
    },
    {
      id: 's8', kind: 'check', title: 'Check you have it',
      question: 'What is the centre of (x + 1)² + (y − 4)² = 49?',
      options: ['(1, −4)', '(−1, 4)', '(1, 4)', '(−1, −4)'],
      correct: 1,
      explain: 'The form is (x − a)² + (y − b)². Here x + 1 is x − (−1), so a = −1. And y − 4 gives b = 4. The signs flip from what you see written.',
    },
  ],
}

/* --------------------------------------------------------------- mastery -- */

export type MasteryState = 'not_started' | 'learning' | 'practised' | 'mastered'

export interface TopicMastery {
  id: string
  subject: string
  topic: string
  state: MasteryState
  /** Correct out of attempted, across every question tagged to this topic. */
  right: number
  attempted: number
  lastSeen: string
}

/**
 * Mastery is tracked per topic, never per subject.
 *
 * "Chemistry 54%" tells a learner nothing they can act on. "You can balance
 * equations, you cannot yet do mole calculations" tells them exactly what to
 * open next, and it is the difference between a report card and a teacher.
 */
export const MASTERY: TopicMastery[] = [
  { id: 'm1', subject: 'Elective Maths', topic: 'Coordinate geometry: the line', state: 'mastered',  right: 18, attempted: 20, lastSeen: '3 days ago' },
  { id: 'm2', subject: 'Elective Maths', topic: 'The circle',                    state: 'learning',  right: 4,  attempted: 9,  lastSeen: 'today' },
  { id: 'm3', subject: 'Elective Maths', topic: 'Completing the square',         state: 'learning',  right: 3,  attempted: 11, lastSeen: 'today' },
  { id: 'm4', subject: 'Elective Maths', topic: 'Vectors',                       state: 'not_started', right: 0, attempted: 0, lastSeen: 'not yet taught' },
  { id: 'm5', subject: 'Chemistry',      topic: 'Balancing equations',           state: 'practised', right: 12, attempted: 16, lastSeen: '1 week ago' },
  { id: 'm6', subject: 'Chemistry',      topic: 'Mole calculations',             state: 'learning',  right: 5,  attempted: 19, lastSeen: '2 days ago' },
  { id: 'm7', subject: 'Chemistry',      topic: 'Rates of reaction',             state: 'not_started', right: 0, attempted: 0, lastSeen: 'taught Monday' },
  { id: 'm8', subject: 'Physics',        topic: "Newton's laws",                 state: 'mastered',  right: 22, attempted: 24, lastSeen: '2 weeks ago' },
  { id: 'm9', subject: 'Physics',        topic: 'Waves and sound',               state: 'practised', right: 14, attempted: 18, lastSeen: '4 days ago' },
]

export const MASTERY_LABEL: Record<MasteryState, string> = {
  not_started: 'Not started',
  learning: 'Learning',
  practised: 'Practised',
  mastered: 'Mastered',
}
