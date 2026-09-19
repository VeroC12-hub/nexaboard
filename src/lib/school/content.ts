/**
 * The actual content. Books, videos, tutorials, notes, past papers.
 *
 * A learner opening the portal should see things they can open and read or
 * watch, not statistics about learning. Everything here is a real object with
 * a title, a length and a size, because "1,842 resources" is a boast and
 * "Aki-Ola Elective Mathematics, chapter 7, 18 MB" is something you can use.
 */

export interface Level {
  id: string
  label: string
  band: string
  subjects: string[]
}

export const LEVELS: Level[] = [
  { id: 'kg',  label: 'Kindergarten', band: 'Early years', subjects: ['Numeracy', 'Language and Literacy', 'Creative Arts', 'Our World Our People'] },
  { id: 'b1',  label: 'Basic 1',  band: 'Primary', subjects: ['Mathematics', 'English Language', 'Science', 'Our World Our People', 'Creative Arts', 'Ghanaian Language'] },
  { id: 'b2',  label: 'Basic 2',  band: 'Primary', subjects: ['Mathematics', 'English Language', 'Science', 'Our World Our People', 'Creative Arts', 'Ghanaian Language'] },
  { id: 'b3',  label: 'Basic 3',  band: 'Primary', subjects: ['Mathematics', 'English Language', 'Science', 'Our World Our People', 'Creative Arts', 'Ghanaian Language'] },
  { id: 'b4',  label: 'Basic 4',  band: 'Primary', subjects: ['Mathematics', 'English Language', 'Science', 'History', 'Computing', 'Creative Arts', 'RME', 'Ghanaian Language'] },
  { id: 'b5',  label: 'Basic 5',  band: 'Primary', subjects: ['Mathematics', 'English Language', 'Science', 'History', 'Computing', 'Creative Arts', 'RME', 'Ghanaian Language'] },
  { id: 'b6',  label: 'Basic 6',  band: 'Primary', subjects: ['Mathematics', 'English Language', 'Science', 'History', 'Computing', 'Creative Arts', 'RME', 'Ghanaian Language'] },
  { id: 'b7',  label: 'Basic 7',  band: 'JHS', subjects: ['Mathematics', 'English Language', 'Integrated Science', 'Social Studies', 'Computing', 'Career Technology', 'Creative Arts and Design', 'RME', 'Ghanaian Language', 'French'] },
  { id: 'b8',  label: 'Basic 8',  band: 'JHS', subjects: ['Mathematics', 'English Language', 'Integrated Science', 'Social Studies', 'Computing', 'Career Technology', 'Creative Arts and Design', 'RME', 'Ghanaian Language', 'French'] },
  { id: 'b9',  label: 'Basic 9',  band: 'JHS', subjects: ['Mathematics', 'English Language', 'Integrated Science', 'Social Studies', 'Computing', 'Career Technology', 'Creative Arts and Design', 'RME', 'Ghanaian Language', 'French'] },
  { id: 's1',  label: 'SHS 1',    band: 'SHS', subjects: ['Core Mathematics', 'English Language', 'Integrated Science', 'Social Studies', 'Elective Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'Economics', 'Government', 'History', 'Literature in English', 'Financial Accounting', 'Business Management', 'ICT', 'Technical Drawing', 'General Agriculture', 'French'] },
  { id: 's2',  label: 'SHS 2',    band: 'SHS', subjects: ['Core Mathematics', 'English Language', 'Integrated Science', 'Social Studies', 'Elective Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'Economics', 'Government', 'History', 'Literature in English', 'Financial Accounting', 'Business Management', 'ICT', 'Technical Drawing', 'General Agriculture', 'French'] },
  { id: 's3',  label: 'SHS 3',    band: 'SHS', subjects: ['Core Mathematics', 'English Language', 'Integrated Science', 'Social Studies', 'Elective Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'Economics', 'Government', 'History', 'Literature in English', 'Financial Accounting', 'Business Management', 'ICT', 'Technical Drawing', 'General Agriculture', 'French'] },
  { id: 'tv',  label: 'TVET',     band: 'Technical', subjects: ['Electrical Installation', 'Welding and Fabrication', 'Automotive Engineering', 'Plumbing', 'Carpentry and Joinery', 'CAD and Technical Drawing', 'Fashion and Textiles', 'Catering', 'Renewable Energy', 'Graphic Design'] },
  { id: 'un',  label: 'University', band: 'Tertiary', subjects: ['Engineering Mathematics', 'Thermodynamics', 'Strength of Materials', 'Programming Fundamentals', 'Statistics and Probability', 'Cybersecurity', 'Data Analysis'] },
]

export interface Book {
  title: string
  author: string
  pages: number
  size: string
  chapters: number
}

export interface Video {
  title: string
  by: string
  mins: number
  size: string
  watched?: boolean
}

export interface Handout {
  title: string
  by: string
  pages: number
  size: string
  kind: 'Handout' | 'Slides' | 'Summary' | 'Formula sheet'
}

export interface PastPaper {
  year: string
  paper: string
  questions: number
  solved: boolean
}

export interface SubjectContent {
  books: Book[]
  videos: Video[]
  handouts: Handout[]
  papers: PastPaper[]
  tutorials: { title: string; steps: number; mins: number; done?: boolean }[]
}

/**
 * Content for SHS 2 Elective Mathematics, built out fully as the worked
 * example. Every other subject follows the same shape.
 */
export const ELECTIVE_MATHS: SubjectContent = {
  books: [
    { title: 'Aki-Ola Elective Mathematics for SHS', author: 'Aki-Ola Series', pages: 512, size: '24 MB', chapters: 18 },
    { title: 'Elective Mathematics for Senior High Schools', author: 'Ministry of Education, NaCCA approved', pages: 386, size: '18 MB', chapters: 14 },
    { title: 'Further Mathematics, Book 2', author: 'Baffour Ba Series', pages: 424, size: '21 MB', chapters: 16 },
    { title: 'WASSCE Elective Maths Revision Companion', author: 'Ghana Mathematics Association', pages: 218, size: '9 MB', chapters: 12 },
  ],
  videos: [
    { title: 'Equation of a circle, from first principles', by: 'Mrs Adjei, Wesley Girls\'', mins: 14, size: '22 MB', watched: true },
    { title: 'Completing the square, every case', by: 'Mr Owusu, Prempeh College', mins: 19, size: '28 MB' },
    { title: 'Tangents to a circle', by: 'Mrs Adjei, Wesley Girls\'', mins: 11, size: '17 MB' },
    { title: 'Partial fractions worked slowly', by: 'Dr Mensah, KNUST', mins: 26, size: '38 MB' },
    { title: 'Binomial theorem in 15 minutes', by: 'Mr Owusu, Prempeh College', mins: 15, size: '23 MB' },
    { title: 'Vectors: the scalar product', by: 'Ghana Maths Association', mins: 22, size: '31 MB' },
    { title: 'Standard deviation, grouped data', by: 'Mrs Quaye, Wesley Girls\'', mins: 17, size: '25 MB' },
    { title: 'Probability laws with WASSCE examples', by: 'Dr Mensah, KNUST', mins: 24, size: '35 MB' },
  ],
  handouts: [
    { title: 'Coordinate geometry, all formulae', by: 'Mrs Adjei', pages: 4, size: '400 KB', kind: 'Formula sheet' },
    { title: 'The circle, class handout', by: 'Mrs Adjei', pages: 8, size: '1.2 MB', kind: 'Handout' },
    { title: 'Equation of a circle, lesson slides', by: 'Mrs Adjei', pages: 22, size: '3.4 MB', kind: 'Slides' },
    { title: 'Completing the square, worked examples', by: 'Mr Owusu', pages: 6, size: '900 KB', kind: 'Handout' },
    { title: 'Vectors summary sheet', by: 'NaCCA', pages: 3, size: '320 KB', kind: 'Summary' },
    { title: 'Statistics formulae for WASSCE', by: 'Ghana Maths Association', pages: 2, size: '180 KB', kind: 'Formula sheet' },
    { title: 'Binomial expansion slides', by: 'Mr Owusu', pages: 18, size: '2.8 MB', kind: 'Slides' },
  ],
  papers: [
    { year: '2024', paper: 'Elective Mathematics 1 and 2', questions: 63, solved: true },
    { year: '2023', paper: 'Elective Mathematics 1 and 2', questions: 61, solved: true },
    { year: '2022', paper: 'Elective Mathematics 1 and 2', questions: 62, solved: true },
    { year: '2021', paper: 'Elective Mathematics 1 and 2', questions: 60, solved: false },
    { year: '2020', paper: 'Elective Mathematics 1 and 2', questions: 64, solved: false },
    { year: '2019', paper: 'Elective Mathematics 1 and 2', questions: 62, solved: true },
    { year: '2018', paper: 'Elective Mathematics 1 and 2', questions: 61, solved: false },
    { year: '2017', paper: 'Elective Mathematics 1 and 2', questions: 63, solved: false },
  ],
  tutorials: [
    { title: 'Equation of a circle', steps: 8, mins: 20, done: true },
    { title: 'Completing the square', steps: 7, mins: 18 },
    { title: 'Tangent to a circle', steps: 6, mins: 15 },
    { title: 'Partial fractions', steps: 9, mins: 25 },
    { title: 'The binomial theorem', steps: 7, mins: 20 },
    { title: 'Scalar product of vectors', steps: 6, mins: 16 },
    { title: 'Variance and standard deviation', steps: 8, mins: 22 },
    { title: 'Probability laws', steps: 9, mins: 24 },
  ],
}
