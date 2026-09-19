/**
 * Junior High School, JHS 1 to JHS 3.
 *
 * The three years where a learner stops being taught arithmetic and starts
 * being taught mathematics. The outlines reflect that: algebra becomes its own
 * strand rather than a pattern exercise, science stops being nature study, and
 * English begins to be assessed on whether an argument holds.
 *
 * Mathematics here is also the one subject that already has a written course,
 * `library/maths-jhs2.ts`, with full prose and questions for four objectives.
 * The two coexist deliberately: where a written objective exists it is used,
 * and everywhere else the tutor teaches from the outline below. That is the
 * same arrangement as a school with a good textbook for one term and a teacher
 * for the rest of the year.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard JHS outline, until your school adds its own.'

/* ── Mathematics ──────────────────────────────────────────────────────────── */

register({
  subjectId: 'maths',
  stage: 'jhs',
  subject: 'Mathematics',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'number-jhs',
      name: 'Number',
      purpose: 'Numbers of every kind, and working with them exactly.',
      subStrands: [
        {
          id: 'number-systems',
          name: 'Number and numeration',
          topics: [
            {
              id: 'whole-numbers-jhs',
              title: 'Whole numbers and place value',
              outcome: 'Write large numbers in figures, words and standard form.',
              year: 'JHS 1',
            },
            {
              id: 'integers',
              title: 'Integers',
              outcome: 'Add, subtract, multiply and divide negative numbers, and say why two minuses make a plus.',
              year: 'JHS 1',
              needs: ['whole-numbers-jhs'],
            },
            {
              id: 'indices-jhs',
              title: 'Indices',
              outcome: 'Use the laws of indices, including zero and negative powers.',
              year: 'JHS 2',
              needs: ['integers'],
            },
            {
              id: 'standard-form',
              title: 'Standard form',
              outcome: 'Write very large and very small numbers in standard form and calculate with them.',
              year: 'JHS 2',
              needs: ['indices-jhs'],
            },
            {
              id: 'number-bases',
              title: 'Number bases',
              outcome: 'Convert between base ten and other bases, and add in base two.',
              year: 'JHS 2',
              needs: ['whole-numbers-jhs'],
            },
            {
              id: 'surds-approx',
              title: 'Approximation and significant figures',
              outcome: 'Round to significant figures and decimal places, and estimate to check an answer.',
              year: 'JHS 1',
              needs: ['whole-numbers-jhs'],
            },
          ],
        },
        {
          id: 'fractions-jhs',
          name: 'Fractions, decimals and percentages',
          topics: [
            {
              id: 'fraction-operations',
              title: 'The four operations on fractions',
              outcome: 'Add, subtract, multiply and divide fractions, and say why dividing flips the second one.',
              year: 'JHS 1',
            },
            {
              id: 'percentage-change',
              title: 'Percentage increase and decrease',
              outcome: 'Work out a percentage change, and find the original amount after one.',
              year: 'JHS 2',
              needs: ['fraction-operations'],
            },
            {
              id: 'ratio-proportion-jhs',
              title: 'Ratio, rate and proportion',
              outcome: 'Share in a ratio, work with rates, and tell direct from inverse proportion.',
              year: 'JHS 2',
              needs: ['fraction-operations'],
            },
            {
              id: 'money-commercial',
              title: 'Commercial arithmetic',
              outcome: 'Calculate profit, loss, discount, commission, simple interest and hire purchase.',
              year: 'JHS 3',
              needs: ['percentage-change'],
            },
          ],
        },
      ],
    },
    {
      id: 'algebra-jhs',
      name: 'Algebra',
      purpose: 'Working with numbers you do not know yet, which is most of the useful ones.',
      subStrands: [
        {
          id: 'expressions',
          name: 'Algebraic expressions',
          topics: [
            {
              id: 'substitution',
              title: 'Substitution',
              outcome: 'Put numbers into an expression and evaluate it, minding the order of operations.',
              year: 'JHS 1',
              needs: ['integers'],
            },
            {
              id: 'collecting-terms',
              title: 'Simplifying expressions',
              outcome: 'Collect like terms, and say why 3x and 3x squared are not alike.',
              year: 'JHS 1',
              needs: ['substitution'],
            },
            {
              id: 'expanding-brackets',
              title: 'Expanding brackets',
              outcome: 'Expand single and double brackets correctly, including with negatives.',
              year: 'JHS 2',
              needs: ['collecting-terms'],
            },
            {
              id: 'factorising-jhs',
              title: 'Factorisation',
              outcome: 'Factorise by taking out a common factor and by grouping.',
              year: 'JHS 2',
              needs: ['expanding-brackets', 'factors-multiples-jhs'],
            },
            {
              id: 'factors-multiples-jhs',
              title: 'Factors, multiples, HCF and LCM',
              outcome: 'Find HCF and LCM by prime factorisation and use them in a problem.',
              year: 'JHS 1',
              needs: ['whole-numbers-jhs'],
            },
          ],
        },
        {
          id: 'equations',
          name: 'Equations and inequalities',
          topics: [
            {
              id: 'linear-equations',
              title: 'Linear equations',
              outcome: 'Solve an equation in one unknown and check the answer in the original.',
              year: 'JHS 1',
              needs: ['collecting-terms'],
            },
            {
              id: 'word-to-equation',
              title: 'Turning a word problem into an equation',
              outcome: 'Choose what the letter stands for, write the equation, and solve it.',
              year: 'JHS 2',
              needs: ['linear-equations'],
            },
            {
              id: 'simultaneous-jhs',
              title: 'Simultaneous linear equations',
              outcome: 'Solve a pair of equations by elimination and by substitution.',
              year: 'JHS 3',
              needs: ['linear-equations'],
            },
            {
              id: 'inequalities-jhs',
              title: 'Linear inequalities',
              outcome: 'Solve an inequality, show it on a number line, and know when the sign flips.',
              year: 'JHS 3',
              needs: ['linear-equations'],
            },
            {
              id: 'change-of-subject',
              title: 'Changing the subject of a formula',
              outcome: 'Rearrange a formula to make another letter the subject.',
              year: 'JHS 3',
              needs: ['linear-equations'],
            },
          ],
        },
        {
          id: 'relations-functions',
          name: 'Relations and functions',
          topics: [
            {
              id: 'mapping',
              title: 'Mappings and relations',
              outcome: 'Show a relation as a mapping, a table and a set of ordered pairs.',
              year: 'JHS 2',
              needs: ['substitution'],
            },
            {
              id: 'linear-graphs-jhs',
              title: 'Graphs of linear relations',
              outcome: 'Plot a straight line from a rule and read its gradient and intercept.',
              year: 'JHS 3',
              needs: ['mapping', 'coordinates-jhs'],
            },
            {
              id: 'sequences-jhs',
              title: 'Number sequences',
              outcome: 'Find the rule of a sequence and write the nth term of a linear one.',
              year: 'JHS 2',
              needs: ['collecting-terms'],
            },
          ],
        },
      ],
    },
    {
      id: 'geometry-jhs',
      name: 'Geometry and Measurement',
      purpose: 'Shape, position and size, proved rather than assumed.',
      subStrands: [
        {
          id: 'shape-properties-jhs',
          name: 'Shape and space',
          topics: [
            {
              id: 'angles-jhs',
              title: 'Angles',
              outcome: 'Use angles on a line, at a point, and in parallel lines, giving the reason each time.',
              year: 'JHS 1',
            },
            {
              id: 'triangles-polygons',
              title: 'Triangles and polygons',
              outcome: 'Use the angle sum of a triangle and of a polygon, and classify each by its sides.',
              year: 'JHS 1',
              needs: ['angles-jhs'],
            },
            {
              id: 'construction-jhs',
              title: 'Geometric construction',
              outcome: 'Construct angles of 60, 90 and their bisectors with compasses alone.',
              year: 'JHS 2',
              needs: ['angles-jhs'],
            },
            {
              id: 'pythagoras-jhs',
              title: 'Pythagoras’ theorem',
              outcome: 'Find a missing side of a right angled triangle and know when the rule applies.',
              year: 'JHS 2',
              needs: ['triangles-polygons', 'indices-jhs'],
            },
            {
              id: 'circles-jhs',
              title: 'The circle',
              outcome: 'Name the parts of a circle and calculate circumference and area.',
              year: 'JHS 2',
              needs: ['triangles-polygons'],
            },
            {
              id: 'transformations-jhs',
              title: 'Transformations',
              outcome: 'Reflect, rotate, translate and enlarge a shape on a grid.',
              year: 'JHS 3',
              needs: ['coordinates-jhs'],
            },
            {
              id: 'coordinates-jhs',
              title: 'Coordinates',
              outcome: 'Plot points in all four quadrants and find the distance between two.',
              year: 'JHS 2',
              needs: ['integers'],
            },
            {
              id: 'bearings-jhs',
              title: 'Bearings',
              outcome: 'Read and draw a three figure bearing and solve a simple journey problem.',
              year: 'JHS 3',
              needs: ['angles-jhs'],
            },
          ],
        },
        {
          id: 'measurement-jhs',
          name: 'Measurement',
          topics: [
            {
              id: 'perimeter-area-jhs',
              title: 'Perimeter and area',
              outcome: 'Find the area of triangles, parallelograms, trapeziums and compound shapes.',
              year: 'JHS 1',
            },
            {
              id: 'volume-surface-area',
              title: 'Volume and surface area',
              outcome: 'Find the volume and surface area of prisms and cylinders.',
              year: 'JHS 3',
              needs: ['perimeter-area-jhs', 'circles-jhs'],
            },
            {
              id: 'scale-drawing',
              title: 'Scale drawing',
              outcome: 'Draw to scale and convert between a drawing and the real thing.',
              year: 'JHS 3',
              needs: ['ratio-proportion-jhs'],
            },
          ],
        },
      ],
    },
    {
      id: 'data-jhs',
      name: 'Data and Probability',
      purpose: 'Making sense of many numbers at once, and of what has not happened yet.',
      subStrands: [
        {
          id: 'statistics-jhs',
          name: 'Handling data',
          topics: [
            {
              id: 'collect-organise',
              title: 'Collecting and organising data',
              outcome: 'Collect data and organise it into a frequency table.',
              year: 'JHS 1',
            },
            {
              id: 'charts-jhs',
              title: 'Charts and graphs',
              outcome: 'Draw and interpret bar charts, pie charts and pictograms.',
              year: 'JHS 2',
              needs: ['collect-organise'],
            },
            {
              id: 'averages-jhs',
              title: 'Mean, median and mode',
              outcome: 'Find all three averages and say which one is the fair summary here.',
              year: 'JHS 2',
              needs: ['collect-organise'],
            },
            {
              id: 'probability-jhs',
              title: 'Probability',
              outcome: 'Work out the probability of a single event and of two independent events.',
              year: 'JHS 3',
              needs: ['fraction-operations'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── English Language ─────────────────────────────────────────────────────── */

register({
  subjectId: 'english',
  stage: 'jhs',
  subject: 'English Language',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'oral-jhs',
      name: 'Oral Language',
      purpose: 'Speaking well enough to be believed, and listening well enough to answer.',
      subStrands: [
        {
          id: 'speaking-jhs',
          name: 'Speaking and listening',
          topics: [
            {
              id: 'formal-speech',
              title: 'Speaking formally',
              outcome: 'Give a prepared talk in standard English, without reading it out.',
              year: 'JHS 1',
            },
            {
              id: 'debate-jhs',
              title: 'Debating',
              outcome: 'Argue a side with evidence, and answer the strongest point against you.',
              year: 'JHS 2',
              needs: ['formal-speech'],
            },
            {
              id: 'listening-for-detail',
              title: 'Listening for detail and for attitude',
              outcome: 'Answer questions on something heard once, including how the speaker felt about it.',
              year: 'JHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'reading-jhs',
      name: 'Reading',
      purpose: 'Understanding what a text says, and what it is doing.',
      subStrands: [
        {
          id: 'comprehension-jhs',
          name: 'Comprehension',
          topics: [
            {
              id: 'literal-inferential',
              title: 'Literal and inferential questions',
              outcome: 'Tell a question that is answered in the passage from one you must work out.',
              year: 'JHS 1',
            },
            {
              id: 'summary-jhs',
              title: 'Summary writing',
              outcome: 'Summarise a passage in your own words within a word limit.',
              year: 'JHS 2',
              needs: ['literal-inferential'],
            },
            {
              id: 'authors-purpose',
              title: 'Purpose and tone',
              outcome: 'Say what the writer wanted and which words reveal their attitude.',
              year: 'JHS 3',
              needs: ['summary-jhs'],
            },
            {
              id: 'vocabulary-jhs',
              title: 'Vocabulary in context',
              outcome: 'Give the meaning of a word as used in the passage, not its usual one.',
              year: 'JHS 1',
            },
          ],
        },
        {
          id: 'literature-jhs',
          name: 'Literature',
          topics: [
            {
              id: 'figures-of-speech',
              title: 'Figures of speech',
              outcome: 'Identify simile, metaphor, personification and irony, and say what each achieves.',
              year: 'JHS 2',
            },
            {
              id: 'poetry-jhs',
              title: 'Reading a poem',
              outcome: 'Say what a poem is about and how its sound and images carry that.',
              year: 'JHS 3',
              needs: ['figures-of-speech'],
            },
            {
              id: 'prose-drama-jhs',
              title: 'Prose and drama',
              outcome: 'Discuss plot, character and setting in a story or play you have read.',
              year: 'JHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'writing-jhs',
      name: 'Writing',
      purpose: 'Producing the kinds of writing that are actually asked for.',
      subStrands: [
        {
          id: 'composition-jhs',
          name: 'Composition',
          topics: [
            {
              id: 'essay-narrative',
              title: 'Narrative and descriptive essays',
              outcome: 'Write an essay with a plan, paragraphs that link, and an ending that lands.',
              year: 'JHS 1',
            },
            {
              id: 'formal-letter',
              title: 'Formal and informal letters',
              outcome: 'Write both kinds with the correct layout, register and closing.',
              year: 'JHS 2',
              needs: ['essay-narrative'],
            },
            {
              id: 'argumentative',
              title: 'Argumentative and expository essays',
              outcome: 'Argue a case in writing with reasons in order of strength.',
              year: 'JHS 3',
              needs: ['formal-letter', 'debate-jhs'],
            },
            {
              id: 'report-article',
              title: 'Reports and articles',
              outcome: 'Write a report of an event, and an article for a named audience.',
              year: 'JHS 3',
              needs: ['formal-letter'],
            },
          ],
        },
      ],
    },
    {
      id: 'grammar-jhs',
      name: 'Writing Conventions and Grammar Usage',
      purpose: 'The parts of the language, named, so mistakes can be explained.',
      subStrands: [
        {
          id: 'parts-of-speech',
          name: 'Grammar',
          topics: [
            {
              id: 'parts-of-speech-jhs',
              title: 'The parts of speech',
              outcome: 'Identify all eight parts of speech and how each behaves in a sentence.',
              year: 'JHS 1',
            },
            {
              id: 'tenses-jhs',
              title: 'Tenses and aspect',
              outcome: 'Use the tenses consistently, including the perfect and continuous forms.',
              year: 'JHS 1',
              needs: ['parts-of-speech-jhs'],
            },
            {
              id: 'sentence-types',
              title: 'Phrases, clauses and sentence types',
              outcome: 'Tell a phrase from a clause and write simple, compound and complex sentences.',
              year: 'JHS 2',
              needs: ['parts-of-speech-jhs'],
            },
            {
              id: 'active-passive',
              title: 'Active and passive voice',
              outcome: 'Change voice both ways and say when the passive is the better choice.',
              year: 'JHS 2',
              needs: ['tenses-jhs'],
            },
            {
              id: 'direct-indirect',
              title: 'Direct and indirect speech',
              outcome: 'Report what somebody said, changing tense, person and time words correctly.',
              year: 'JHS 3',
              needs: ['tenses-jhs'],
            },
            {
              id: 'concord-jhs',
              title: 'Concord',
              outcome: 'Keep subject and verb agreeing, including the cases that trip people up.',
              year: 'JHS 2',
              needs: ['parts-of-speech-jhs'],
            },
            {
              id: 'punctuation-jhs',
              title: 'Punctuation',
              outcome: 'Punctuate a passage correctly, including the comma, colon and apostrophe.',
              year: 'JHS 1',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Integrated Science ───────────────────────────────────────────────────── */

register({
  subjectId: 'science',
  stage: 'jhs',
  subject: 'Integrated Science',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'matter-jhs',
      name: 'Diversity of Matter',
      purpose: 'What everything is made of, and how it is classified.',
      subStrands: [
        {
          id: 'living-classification',
          name: 'Living things',
          topics: [
            {
              id: 'cells-jhs',
              title: 'Cells',
              outcome: 'Name the parts of plant and animal cells and say what each part does.',
              year: 'JHS 1',
            },
            {
              id: 'classification-jhs',
              title: 'Classifying living things',
              outcome: 'Place a living thing in its kingdom and group, and give the features you used.',
              year: 'JHS 1',
              needs: ['cells-jhs'],
            },
          ],
        },
        {
          id: 'matter-materials',
          name: 'Matter and materials',
          topics: [
            {
              id: 'particles-jhs',
              title: 'The particle nature of matter',
              outcome: 'Explain solids, liquids and gases by how their particles are arranged and move.',
              year: 'JHS 1',
            },
            {
              id: 'elements-compounds',
              title: 'Elements, compounds and mixtures',
              outcome: 'Tell the three apart and give an everyday example of each.',
              year: 'JHS 2',
              needs: ['particles-jhs'],
            },
            {
              id: 'atoms-jhs',
              title: 'Atoms and the periodic table',
              outcome: 'Describe an atom, and read a group and period from the table.',
              year: 'JHS 2',
              needs: ['elements-compounds'],
            },
            {
              id: 'acids-bases-jhs',
              title: 'Acids, bases and salts',
              outcome: 'Test with indicators, describe neutralisation, and name the salt formed.',
              year: 'JHS 3',
              needs: ['elements-compounds'],
            },
            {
              id: 'separating-jhs',
              title: 'Separating mixtures',
              outcome: 'Choose filtration, distillation, evaporation or chromatography, and justify it.',
              year: 'JHS 2',
              needs: ['elements-compounds'],
            },
          ],
        },
      ],
    },
    {
      id: 'cycles-jhs',
      name: 'Cycles',
      purpose: 'Matter and life going round rather than running out.',
      subStrands: [
        {
          id: 'natural-cycles-jhs',
          name: 'Cycles in nature',
          topics: [
            {
              id: 'water-cycle-jhs',
              title: 'The water cycle',
              outcome: 'Explain each stage by what the particles are doing.',
              year: 'JHS 1',
              needs: ['particles-jhs'],
            },
            {
              id: 'carbon-nitrogen',
              title: 'The carbon and nitrogen cycles',
              outcome: 'Trace carbon and nitrogen through living things, soil and air.',
              year: 'JHS 3',
              needs: ['photosynthesis-jhs'],
            },
            {
              id: 'reproduction-plants',
              title: 'Reproduction in plants',
              outcome: 'Describe pollination and fertilisation, and name the parts involved.',
              year: 'JHS 2',
              needs: ['classification-jhs'],
            },
            {
              id: 'reproduction-humans',
              title: 'Reproduction in humans',
              outcome: 'Describe the reproductive systems, puberty, and how a pregnancy begins.',
              year: 'JHS 2',
              needs: ['cells-jhs'],
            },
            {
              id: 'life-cycles-jhs',
              title: 'Life cycles and vectors',
              outcome: 'Describe the mosquito and housefly life cycles and where to break them.',
              year: 'JHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'systems-jhs',
      name: 'Systems',
      purpose: 'Parts that only make sense together.',
      subStrands: [
        {
          id: 'human-systems-jhs',
          name: 'Systems of the human body',
          topics: [
            {
              id: 'digestive-jhs',
              title: 'The digestive system',
              outcome: 'Follow food through the gut, naming the enzymes and what each breaks down.',
              year: 'JHS 2',
            },
            {
              id: 'circulatory-jhs',
              title: 'The circulatory system',
              outcome: 'Trace blood through heart, lungs and body, and say what it carries each way.',
              year: 'JHS 2',
              needs: ['digestive-jhs'],
            },
            {
              id: 'respiratory-jhs',
              title: 'The respiratory system',
              outcome: 'Explain breathing and gas exchange, and distinguish it from respiration.',
              year: 'JHS 2',
              needs: ['circulatory-jhs'],
            },
            {
              id: 'excretory-jhs',
              title: 'Excretion',
              outcome: 'Say what the kidneys and skin remove and why it must be removed.',
              year: 'JHS 3',
              needs: ['circulatory-jhs'],
            },
            {
              id: 'skeletal-jhs',
              title: 'The skeletal and muscular systems',
              outcome: 'Name the main bones, describe a joint, and explain how a muscle pair moves it.',
              year: 'JHS 1',
            },
          ],
        },
        {
          id: 'plant-systems',
          name: 'Systems in plants',
          topics: [
            {
              id: 'photosynthesis-jhs',
              title: 'Photosynthesis',
              outcome: 'Give the word equation, name what is needed, and design a test for one factor.',
              year: 'JHS 2',
              needs: ['cells-jhs'],
            },
            {
              id: 'transport-plants',
              title: 'Transport in plants',
              outcome: 'Explain how water rises and where food made in the leaf goes.',
              year: 'JHS 3',
              needs: ['photosynthesis-jhs'],
            },
          ],
        },
        {
          id: 'ecosystems-jhs',
          name: 'Ecosystems',
          topics: [
            {
              id: 'food-webs-jhs',
              title: 'Food chains and webs',
              outcome: 'Build a food web and predict what happens when one population falls.',
              year: 'JHS 1',
              needs: ['classification-jhs'],
            },
          ],
        },
      ],
    },
    {
      id: 'forces-jhs',
      name: 'Forces and Energy',
      purpose: 'Why things move and change, with numbers attached.',
      subStrands: [
        {
          id: 'forces-motion-jhs',
          name: 'Forces and motion',
          topics: [
            {
              id: 'force-types',
              title: 'Forces and their effects',
              outcome: 'Name contact and non-contact forces and describe what each does to motion.',
              year: 'JHS 1',
            },
            {
              id: 'motion-jhs',
              title: 'Speed, distance and time',
              outcome: 'Calculate speed and read a distance time graph.',
              year: 'JHS 2',
              needs: ['force-types'],
            },
            {
              id: 'density-jhs',
              title: 'Density',
              outcome: 'Calculate density and explain why a ship floats.',
              year: 'JHS 2',
              needs: ['particles-jhs'],
            },
            {
              id: 'pressure-jhs',
              title: 'Pressure',
              outcome: 'Calculate pressure and explain why a sharp knife cuts more easily.',
              year: 'JHS 3',
              needs: ['force-types'],
            },
            {
              id: 'machines-jhs',
              title: 'Simple machines',
              outcome: 'Find the mechanical advantage of a lever or pulley, and explain efficiency.',
              year: 'JHS 3',
              needs: ['force-types'],
            },
          ],
        },
        {
          id: 'energy-jhs',
          name: 'Energy',
          topics: [
            {
              id: 'energy-forms-jhs',
              title: 'Forms of energy and conversion',
              outcome: 'Trace energy changes through a device and state that energy is conserved.',
              year: 'JHS 1',
            },
            {
              id: 'heat-jhs',
              title: 'Heat transfer',
              outcome: 'Explain conduction, convection and radiation, and where each dominates.',
              year: 'JHS 2',
              needs: ['particles-jhs'],
            },
            {
              id: 'light-jhs',
              title: 'Light',
              outcome: 'Use the law of reflection, describe refraction, and explain how the eye focuses.',
              year: 'JHS 2',
            },
            {
              id: 'sound-jhs',
              title: 'Sound',
              outcome: 'Relate pitch and loudness to frequency and amplitude.',
              year: 'JHS 2',
            },
            {
              id: 'electricity-jhs',
              title: 'Electricity and magnetism',
              outcome: 'Build series and parallel circuits, use V = IR, and describe an electromagnet.',
              year: 'JHS 3',
              needs: ['energy-forms-jhs'],
            },
          ],
        },
      ],
    },
    {
      id: 'humans-env-jhs',
      name: 'Humans and the Environment',
      purpose: 'Health, farming, industry and the cost of each.',
      subStrands: [
        {
          id: 'health-jhs',
          name: 'Health and disease',
          topics: [
            {
              id: 'nutrition-jhs',
              title: 'Food and nutrition',
              outcome: 'Name the food classes, their sources, and the effect of a deficiency.',
              year: 'JHS 1',
            },
            {
              id: 'disease-jhs',
              title: 'Communicable and non-communicable disease',
              outcome: 'Explain how named diseases spread and how each is prevented.',
              year: 'JHS 2',
              needs: ['life-cycles-jhs'],
            },
            {
              id: 'drugs-jhs',
              title: 'Drug use and abuse',
              outcome: 'Describe what common drugs do to the body and why dependence forms.',
              year: 'JHS 3',
            },
          ],
        },
        {
          id: 'agriculture-jhs',
          name: 'Agriculture and industry',
          topics: [
            {
              id: 'soil-jhs',
              title: 'Soil',
              outcome: 'Compare soil types, test for texture, and explain what fertiliser replaces.',
              year: 'JHS 1',
            },
            {
              id: 'crop-animal-jhs',
              title: 'Crop and animal production',
              outcome: 'Describe good practice in growing a crop and in keeping livestock.',
              year: 'JHS 2',
              needs: ['soil-jhs'],
            },
            {
              id: 'environment-jhs',
              title: 'Pollution and conservation',
              outcome: 'Explain a named pollution problem in Ghana and evaluate a response to it.',
              year: 'JHS 3',
              needs: ['carbon-nitrogen'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Social Studies ───────────────────────────────────────────────────────── */

register({
  subjectId: 'social',
  stage: 'jhs',
  subject: 'Social Studies',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'environment-social',
      name: 'Environment',
      purpose: 'The physical setting people live in, and what they do to it.',
      subStrands: [
        {
          id: 'physical-env',
          name: 'The physical environment',
          topics: [
            {
              id: 'ghana-location',
              title: 'Ghana’s position and relief',
              outcome: 'Describe where Ghana sits, its regions, rivers and vegetation belts.',
              year: 'JHS 1',
            },
            {
              id: 'climate-social',
              title: 'Climate and vegetation',
              outcome: 'Explain why the north and south differ, and what that means for farming.',
              year: 'JHS 1',
              needs: ['ghana-location'],
            },
            {
              id: 'env-degradation',
              title: 'Environmental degradation',
              outcome: 'Explain the causes and effects of a named problem such as galamsey or deforestation.',
              year: 'JHS 2',
              needs: ['climate-social'],
            },
          ],
        },
      ],
    },
    {
      id: 'governance-social',
      name: 'Governance, Politics and Stability',
      purpose: 'How the country is run and who answers for it.',
      subStrands: [
        {
          id: 'government-social',
          name: 'Government and citizenship',
          topics: [
            {
              id: 'constitution-jhs',
              title: 'The constitution and the arms of government',
              outcome: 'Name the three arms and say what each does and how each is checked.',
              year: 'JHS 2',
            },
            {
              id: 'rights-duties',
              title: 'Rights and responsibilities',
              outcome: 'State citizens’ rights and the duty that comes with each.',
              year: 'JHS 2',
              needs: ['constitution-jhs'],
            },
            {
              id: 'democracy-jhs',
              title: 'Democracy and elections',
              outcome: 'Explain how leaders are chosen and why a peaceful transfer matters.',
              year: 'JHS 3',
              needs: ['constitution-jhs'],
            },
            {
              id: 'conflict-jhs',
              title: 'Conflict and nation building',
              outcome: 'Explain causes of conflict in Ghana and ways it has been resolved.',
              year: 'JHS 3',
              needs: ['democracy-jhs'],
            },
          ],
        },
      ],
    },
    {
      id: 'social-economic',
      name: 'Social and Economic Development',
      purpose: 'Making a living, and what development actually means.',
      subStrands: [
        {
          id: 'economy-jhs',
          name: 'The economy',
          topics: [
            {
              id: 'resources-jhs',
              title: 'Ghana’s resources',
              outcome: 'Name major resources and explain how each contributes to the economy.',
              year: 'JHS 1',
              needs: ['ghana-location'],
            },
            {
              id: 'production-jhs',
              title: 'Production and its factors',
              outcome: 'Name the factors of production and apply them to a local business.',
              year: 'JHS 2',
              needs: ['resources-jhs'],
            },
            {
              id: 'money-banking-jhs',
              title: 'Money, saving and banking',
              outcome: 'Explain what banks do and why saving and interest matter to a household.',
              year: 'JHS 2',
            },
            {
              id: 'development-jhs',
              title: 'Development and its obstacles',
              outcome: 'Say what makes a country developed and name obstacles Ghana faces.',
              year: 'JHS 3',
              needs: ['production-jhs'],
            },
            {
              id: 'population-jhs',
              title: 'Population and migration',
              outcome: 'Explain population growth and why people move from the north and to the cities.',
              year: 'JHS 3',
              needs: ['development-jhs'],
            },
          ],
        },
        {
          id: 'social-institutions',
          name: 'Social institutions',
          topics: [
            {
              id: 'family-social',
              title: 'The family',
              outcome: 'Compare extended and nuclear families and describe the systems of descent.',
              year: 'JHS 1',
            },
            {
              id: 'culture-jhs',
              title: 'Culture and socialisation',
              outcome: 'Explain what culture is and how it is passed on.',
              year: 'JHS 1',
              needs: ['family-social'],
            },
            {
              id: 'adolescent-jhs',
              title: 'Adolescent development and chastity',
              outcome: 'Describe the changes of adolescence and the responsibilities that come with them.',
              year: 'JHS 2',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Computing ────────────────────────────────────────────────────────────── */

register({
  subjectId: 'computing',
  stage: 'jhs',
  subject: 'Computing',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'systems-computing',
      name: 'Computers and Computer Systems',
      purpose: 'What the machine is and how it actually works.',
      subStrands: [
        {
          id: 'hardware-jhs',
          name: 'Hardware and software',
          topics: [
            {
              id: 'components-jhs',
              title: 'Components of a computer system',
              outcome: 'Describe input, processing, storage and output, and place real devices in each.',
              year: 'JHS 1',
            },
            {
              id: 'software-types',
              title: 'System and application software',
              outcome: 'Tell an operating system from an application and say what each is responsible for.',
              year: 'JHS 1',
              needs: ['components-jhs'],
            },
            {
              id: 'storage-units',
              title: 'Data and storage units',
              outcome: 'Convert between bits, bytes, kilobytes and megabytes and estimate a file’s size.',
              year: 'JHS 2',
              needs: ['components-jhs'],
            },
            {
              id: 'file-management',
              title: 'Managing files',
              outcome: 'Organise work into folders, rename, copy, and recover something deleted.',
              year: 'JHS 1',
              needs: ['software-types'],
            },
          ],
        },
      ],
    },
    {
      id: 'productivity-jhs',
      name: 'Productivity Software',
      purpose: 'Doing real work with the tools that exist.',
      subStrands: [
        {
          id: 'office-jhs',
          name: 'Documents, spreadsheets and presentations',
          topics: [
            {
              id: 'word-jhs',
              title: 'Word processing',
              outcome: 'Produce a formatted document with styles, tables and page numbers.',
              year: 'JHS 1',
              needs: ['file-management'],
            },
            {
              id: 'spreadsheet-jhs',
              title: 'Spreadsheets',
              outcome: 'Use formulae, SUM and AVERAGE, and chart the result.',
              year: 'JHS 2',
              needs: ['word-jhs'],
            },
            {
              id: 'presentation-jhs',
              title: 'Presentations',
              outcome: 'Build a presentation that supports a talk rather than replacing it.',
              year: 'JHS 2',
              needs: ['word-jhs'],
            },
            {
              id: 'database-jhs',
              title: 'Introduction to databases',
              outcome: 'Explain records and fields, and query a small table for an answer.',
              year: 'JHS 3',
              needs: ['spreadsheet-jhs'],
            },
          ],
        },
      ],
    },
    {
      id: 'networks-jhs',
      name: 'Communication Networks',
      purpose: 'How machines are joined, and how to behave once they are.',
      subStrands: [
        {
          id: 'internet-jhs',
          name: 'Networks and the internet',
          topics: [
            {
              id: 'network-basics',
              title: 'Networks',
              outcome: 'Describe LAN and WAN and what is needed to join a network.',
              year: 'JHS 2',
              needs: ['components-jhs'],
            },
            {
              id: 'internet-services',
              title: 'Internet services',
              outcome: 'Use email and search properly, and explain what a browser is doing.',
              year: 'JHS 1',
            },
            {
              id: 'safety-jhs',
              title: 'Digital safety and citizenship',
              outcome: 'Identify a scam or phishing attempt and explain how to protect an account.',
              year: 'JHS 2',
              needs: ['internet-services'],
            },
            {
              id: 'health-computing',
              title: 'Health and ethics in computing',
              outcome: 'Describe the risks of long use and the ethics of copying others’ work.',
              year: 'JHS 3',
            },
          ],
        },
      ],
    },
    {
      id: 'programming-jhs',
      name: 'Programming and Algorithms',
      purpose: 'Instructing a machine precisely, and finding out why it disobeyed.',
      subStrands: [
        {
          id: 'algorithms-jhs',
          name: 'Algorithms and programming',
          topics: [
            {
              id: 'flowcharts-jhs',
              title: 'Algorithms and flowcharts',
              outcome: 'Write an algorithm in steps and draw it as a flowchart.',
              year: 'JHS 2',
            },
            {
              id: 'sequence-selection-repetition',
              title: 'Sequence, selection and repetition',
              outcome: 'Use if and loops in a program and predict what it will output.',
              year: 'JHS 2',
              needs: ['flowcharts-jhs'],
            },
            {
              id: 'debug-jhs',
              title: 'Finding and fixing errors',
              outcome: 'Trace a program that misbehaves and locate the line responsible.',
              year: 'JHS 3',
              needs: ['sequence-selection-repetition'],
            },
            {
              id: 'web-jhs',
              title: 'Making a simple web page',
              outcome: 'Build a page with headings, links and an image using HTML.',
              year: 'JHS 3',
              needs: ['file-management'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Career Technology ───────────────────────────────────────────────────── */

register({
  subjectId: 'career-tech',
  stage: 'jhs',
  subject: 'Career Technology',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'design-tech',
      name: 'Design and Technology',
      purpose: 'Designing something, then actually making it.',
      subStrands: [
        {
          id: 'drawing-tech',
          name: 'Technical drawing',
          topics: [
            {
              id: 'drawing-instruments',
              title: 'Drawing instruments and lines',
              outcome: 'Use the instruments correctly and draw the standard line types.',
              year: 'JHS 1',
            },
            {
              id: 'geometric-drawing',
              title: 'Geometric construction',
              outcome: 'Construct plane figures accurately with compasses and set squares.',
              year: 'JHS 2',
              needs: ['drawing-instruments'],
            },
            {
              id: 'orthographic-jhs',
              title: 'Orthographic and pictorial drawing',
              outcome: 'Draw front, top and side views of an object, and read them back.',
              year: 'JHS 3',
              needs: ['geometric-drawing'],
            },
          ],
        },
        {
          id: 'materials-tools',
          name: 'Materials and tools',
          topics: [
            {
              id: 'tools-safety',
              title: 'Hand tools and workshop safety',
              outcome: 'Name tools, use each for its purpose, and state the safety rule for each.',
              year: 'JHS 1',
            },
            {
              id: 'wood-metal',
              title: 'Working with wood and metal',
              outcome: 'Measure, mark, cut and join wood or metal to a tolerance.',
              year: 'JHS 2',
              needs: ['tools-safety'],
            },
            {
              id: 'make-a-project',
              title: 'Making a designed article',
              outcome: 'Take a project from brief and drawing through to a finished article.',
              year: 'JHS 3',
              needs: ['wood-metal', 'orthographic-jhs'],
            },
          ],
        },
      ],
    },
    {
      id: 'home-economics',
      name: 'Home Economics',
      purpose: 'Food, clothing and managing a home competently.',
      subStrands: [
        {
          id: 'food-nutrition-ct',
          name: 'Food and nutrition',
          topics: [
            {
              id: 'meal-planning',
              title: 'Planning and cooking a meal',
              outcome: 'Plan a balanced meal to a budget and cook it hygienically.',
              year: 'JHS 1',
            },
            {
              id: 'food-preservation',
              title: 'Food preservation',
              outcome: 'Describe preservation methods and say what each stops from happening.',
              year: 'JHS 2',
              needs: ['meal-planning'],
            },
          ],
        },
        {
          id: 'textiles',
          name: 'Clothing and textiles',
          topics: [
            {
              id: 'stitches',
              title: 'Basic stitches and seams',
              outcome: 'Work the basic stitches by hand and finish a seam neatly.',
              year: 'JHS 1',
            },
            {
              id: 'garment-jhs',
              title: 'Making a simple article',
              outcome: 'Take measurements, cut to a pattern, and sew a simple article.',
              year: 'JHS 3',
              needs: ['stitches'],
            },
            {
              id: 'care-of-clothing',
              title: 'Care of clothing',
              outcome: 'Launder, mend and store clothing so it lasts.',
              year: 'JHS 2',
              needs: ['stitches'],
            },
          ],
        },
      ],
    },
    {
      id: 'entrepreneurship-jhs',
      name: 'Entrepreneurship',
      purpose: 'Turning a skill into an income.',
      subStrands: [
        {
          id: 'business-jhs',
          name: 'Business basics',
          topics: [
            {
              id: 'business-idea',
              title: 'Finding a business idea',
              outcome: 'Identify a need in your community that a small business could meet.',
              year: 'JHS 2',
            },
            {
              id: 'costing-pricing',
              title: 'Costing and pricing',
              outcome: 'Work out what an article costs to make and set a price that leaves a profit.',
              year: 'JHS 3',
              needs: ['business-idea'],
            },
            {
              id: 'records-jhs',
              title: 'Keeping simple records',
              outcome: 'Keep a record of sales and expenses and say whether the month made money.',
              year: 'JHS 3',
              needs: ['costing-pricing'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Religious and Moral Education ────────────────────────────────────────── */

register({
  subjectId: 'rme',
  stage: 'jhs',
  subject: 'Religious and Moral Education',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'god-creation-jhs',
      name: 'God, His Creation and Attributes',
      purpose: 'What the faiths teach about God, creation and the place of people in it.',
      subStrands: [
        {
          id: 'creation-jhs',
          name: 'Creation and stewardship',
          topics: [
            {
              id: 'creation-teachings',
              title: 'Teachings on creation',
              outcome: 'Compare what the three faiths teach about how the world came to be.',
              year: 'JHS 1',
            },
            {
              id: 'stewardship-jhs',
              title: 'Stewardship of the environment',
              outcome: 'Argue from religious teaching for a duty to care for the environment.',
              year: 'JHS 2',
              needs: ['creation-teachings'],
            },
            {
              id: 'attributes-god',
              title: 'The nature of God',
              outcome: 'State attributes of God each faith affirms and where they agree.',
              year: 'JHS 2',
              needs: ['creation-teachings'],
            },
          ],
        },
      ],
    },
    {
      id: 'practices-jhs',
      name: 'Religious Practices and their Moral Implications',
      purpose: 'What believers do, and what it is supposed to make of them.',
      subStrands: [
        {
          id: 'worship-jhs',
          name: 'Worship, festivals and rites',
          topics: [
            {
              id: 'worship-forms-jhs',
              title: 'Forms of worship',
              outcome: 'Describe worship in each faith and what it asks of the worshipper.',
              year: 'JHS 1',
            },
            {
              id: 'rites-passage',
              title: 'Rites of passage',
              outcome: 'Describe naming, puberty, marriage and funeral rites and their purpose.',
              year: 'JHS 2',
              needs: ['worship-forms-jhs'],
            },
            {
              id: 'founders-jhs',
              title: 'Religious leaders and their teachings',
              outcome: 'Describe the life of a founder or leader and a teaching still acted on.',
              year: 'JHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'moral-jhs',
      name: 'Religion and Moral Life',
      purpose: 'Decisions, character, and the reasons behind both.',
      subStrands: [
        {
          id: 'moral-decisions',
          name: 'Moral life',
          topics: [
            {
              id: 'moral-choice',
              title: 'Making a moral decision',
              outcome: 'Work through a real dilemma and say what decided it.',
              year: 'JHS 2',
            },
            {
              id: 'chastity-jhs',
              title: 'Chastity and responsible living',
              outcome: 'Explain the teachings on chastity and the consequences they are guarding against.',
              year: 'JHS 3',
              needs: ['moral-choice'],
            },
            {
              id: 'work-jhs',
              title: 'Work, honesty and corruption',
              outcome: 'Explain why corruption is condemned religiously and what it costs a country.',
              year: 'JHS 3',
              needs: ['moral-choice'],
            },
            {
              id: 'peace-tolerance',
              title: 'Tolerance and living together',
              outcome: 'Argue for religious tolerance from within your own tradition.',
              year: 'JHS 3',
              needs: ['worship-forms-jhs'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Ghanaian Language ───────────────────────────────────────────────────── */

register({
  subjectId: 'ghl',
  stage: 'jhs',
  subject: 'Ghanaian Language',
  source: 'MODEL',
  note: 'A standard outline. The tutor will ask which language you are studying, '
    + 'and your school can add its own.',
  strands: [
    {
      id: 'oral-ghl-jhs',
      name: 'Oral Language',
      purpose: 'Using the language properly in public as well as at home.',
      subStrands: [
        {
          id: 'speaking-ghl-jhs',
          name: 'Speaking and listening',
          topics: [
            {
              id: 'formal-ghl',
              title: 'Formal speaking',
              outcome: 'Address a gathering appropriately, using the right forms of respect.',
              year: 'JHS 1',
            },
            {
              id: 'appellations',
              title: 'Appellations and oral poetry',
              outcome: 'Recite an appellation or dirge and explain its images.',
              year: 'JHS 2',
              needs: ['formal-ghl'],
            },
            {
              id: 'proverbs-jhs-ghl',
              title: 'Proverbs and idioms',
              outcome: 'Use proverbs correctly in speech and explain them in English.',
              year: 'JHS 2',
              needs: ['formal-ghl'],
            },
          ],
        },
      ],
    },
    {
      id: 'reading-ghl-jhs',
      name: 'Reading and Literature',
      purpose: 'Reading the language well, including its literature.',
      subStrands: [
        {
          id: 'comprehension-ghl',
          name: 'Comprehension and literature',
          topics: [
            {
              id: 'read-comprehend-ghl',
              title: 'Comprehension',
              outcome: 'Read an unseen passage and answer questions on it in the language.',
              year: 'JHS 1',
            },
            {
              id: 'folk-literature-ghl',
              title: 'Folktales, riddles and songs',
              outcome: 'Analyse a folktale for its lesson and its literary devices.',
              year: 'JHS 2',
              needs: ['read-comprehend-ghl'],
            },
          ],
        },
      ],
    },
    {
      id: 'writing-ghl-jhs',
      name: 'Writing and Grammar',
      purpose: 'Writing the language accurately, including composition.',
      subStrands: [
        {
          id: 'grammar-ghl-jhs',
          name: 'Grammar and composition',
          topics: [
            {
              id: 'grammar-rules-ghl',
              title: 'Grammar of the language',
              outcome: 'Use the tense, tone marks and sentence structures correctly.',
              year: 'JHS 1',
            },
            {
              id: 'composition-ghl-jhs',
              title: 'Composition',
              outcome: 'Write a narrative, a letter and an argument in the language.',
              year: 'JHS 2',
              needs: ['grammar-rules-ghl'],
            },
            {
              id: 'translation-ghl-jhs',
              title: 'Translation',
              outcome: 'Translate a passage both ways, keeping idiom rather than word order.',
              year: 'JHS 3',
              needs: ['composition-ghl-jhs'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── French ───────────────────────────────────────────────────────────────── */

register({
  subjectId: 'french',
  stage: 'jhs',
  subject: 'French',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'oral-french',
      name: 'Listening and Speaking',
      purpose: 'Understanding French spoken at normal speed, and being understood.',
      subStrands: [
        {
          id: 'speaking-french',
          name: 'Speaking',
          topics: [
            {
              id: 'greetings-french',
              title: 'Greetings and introductions',
              outcome: 'Greet, introduce yourself, and ask somebody about themselves.',
              year: 'JHS 1',
            },
            {
              id: 'describe-french',
              title: 'Describing people and places',
              outcome: 'Describe your family, your school and where you live.',
              year: 'JHS 2',
              needs: ['greetings-french'],
            },
            {
              id: 'conversation-french',
              title: 'Everyday conversation',
              outcome: 'Shop, ask directions and order food in French.',
              year: 'JHS 3',
              needs: ['describe-french'],
            },
          ],
        },
      ],
    },
    {
      id: 'grammar-french',
      name: 'Grammar',
      purpose: 'The machinery of the language, which English speakers must learn explicitly.',
      subStrands: [
        {
          id: 'structures-french',
          name: 'Structures',
          topics: [
            {
              id: 'gender-articles',
              title: 'Gender and articles',
              outcome: 'Use le, la, les, un and une correctly and know why nouns have gender.',
              year: 'JHS 1',
            },
            {
              id: 'present-tense-french',
              title: 'The present tense',
              outcome: 'Conjugate regular and the common irregular verbs in the present.',
              year: 'JHS 1',
              needs: ['gender-articles'],
            },
            {
              id: 'past-future-french',
              title: 'Past and future tenses',
              outcome: 'Use the passé composé and the near future correctly.',
              year: 'JHS 3',
              needs: ['present-tense-french'],
            },
            {
              id: 'adjectives-french',
              title: 'Adjective agreement',
              outcome: 'Make adjectives agree and place them correctly.',
              year: 'JHS 2',
              needs: ['gender-articles'],
            },
            {
              id: 'numbers-time-french',
              title: 'Numbers, dates and time',
              outcome: 'Say numbers, dates, prices and the time.',
              year: 'JHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'reading-writing-french',
      name: 'Reading and Writing',
      purpose: 'Reading French and writing it without translating in your head.',
      subStrands: [
        {
          id: 'literacy-french',
          name: 'Reading and writing',
          topics: [
            {
              id: 'read-french',
              title: 'Reading comprehension',
              outcome: 'Read a short French text and answer questions in French.',
              year: 'JHS 2',
              needs: ['present-tense-french'],
            },
            {
              id: 'write-french',
              title: 'Writing',
              outcome: 'Write a letter or short composition in French with correct agreement.',
              year: 'JHS 3',
              needs: ['read-french', 'past-future-french'],
            },
          ],
        },
      ],
    },
  ],
})
