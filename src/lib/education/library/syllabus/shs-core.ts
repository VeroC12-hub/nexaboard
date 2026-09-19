/**
 * Senior High School, the four subjects everybody sits.
 *
 * The outlines are organised by the topic areas these subjects are actually
 * built from, which for Core Mathematics means number and numeration, algebraic
 * processes, mensuration, geometry, trigonometry, statistics and probability.
 * Describing the content of a subject is safe; what is not written here is any
 * claim about which paper a topic appears on or what it is worth, because those
 * are facts about a document and a learner cannot tell when they are invented.
 *
 * Years are labelled SHS 1 to SHS 3 as the stage labels them. A learner in SHS 3
 * revising gets the whole outline rather than only the final year's part, which
 * is what `topicsFor` falling back to everything is for.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard SHS outline, until your school adds its own.'

/* ── Core Mathematics ─────────────────────────────────────────────────────── */

register({
  subjectId: 'maths',
  stage: 'shs',
  subject: 'Mathematics',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'number-numeration',
      name: 'Number and Numeration',
      purpose: 'Numbers handled exactly, including the awkward kinds.',
      subStrands: [
        {
          id: 'sets-shs',
          name: 'Sets and operations',
          topics: [
            {
              id: 'sets-shs-t',
              title: 'Sets',
              outcome: 'Use union, intersection and complement, and solve problems with a Venn diagram.',
              year: 'SHS 1',
            },
            {
              id: 'real-numbers',
              title: 'The real number system',
              outcome: 'Classify numbers as natural, integer, rational or irrational and place them on a line.',
              year: 'SHS 1',
            },
            {
              id: 'surds-shs',
              title: 'Surds',
              outcome: 'Simplify surds and rationalise a denominator.',
              year: 'SHS 1',
              needs: ['real-numbers'],
            },
            {
              id: 'indices-logs-shs',
              title: 'Indices and logarithms',
              outcome: 'Use the index and logarithm laws, and solve equations with an unknown exponent.',
              year: 'SHS 2',
              needs: ['surds-shs'],
            },
            {
              id: 'number-bases-shs',
              title: 'Number bases',
              outcome: 'Convert between bases and perform arithmetic in a base other than ten.',
              year: 'SHS 1',
              needs: ['real-numbers'],
            },
            {
              id: 'modular-arithmetic',
              title: 'Modular arithmetic',
              outcome: 'Work in modulo arithmetic and use it on a real cycle such as days of the week.',
              year: 'SHS 2',
              needs: ['real-numbers'],
            },
            {
              id: 'ratio-percent-shs',
              title: 'Ratio, proportion, rates and percentages',
              outcome: 'Solve problems on sharing, rates, percentage change and financial arithmetic.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'algebraic-processes',
      name: 'Algebraic Processes',
      purpose: 'Manipulating expressions and solving what they equal.',
      subStrands: [
        {
          id: 'expressions-shs',
          name: 'Expressions and equations',
          topics: [
            {
              id: 'algebraic-expressions-shs',
              title: 'Algebraic expressions',
              outcome: 'Expand, factorise and simplify, including algebraic fractions.',
              year: 'SHS 1',
            },
            {
              id: 'linear-equations-shs',
              title: 'Linear equations and simultaneous equations',
              outcome: 'Solve one and two unknowns algebraically and graphically.',
              year: 'SHS 1',
              needs: ['algebraic-expressions-shs'],
            },
            {
              id: 'quadratics-shs',
              title: 'Quadratic equations',
              outcome: 'Solve by factorising, completing the square and formula, and know which to choose.',
              year: 'SHS 2',
              needs: ['linear-equations-shs'],
            },
            {
              id: 'inequalities-shs',
              title: 'Inequalities and linear programming',
              outcome: 'Solve inequalities, graph a feasible region, and find a maximum within it.',
              year: 'SHS 2',
              needs: ['linear-equations-shs'],
            },
            {
              id: 'variation',
              title: 'Variation',
              outcome: 'Handle direct, inverse, joint and partial variation and find the constant.',
              year: 'SHS 2',
              needs: ['ratio-percent-shs'],
            },
            {
              id: 'sequences-series-shs',
              title: 'Sequences and series',
              outcome: 'Find terms and sums of arithmetic and geometric progressions.',
              year: 'SHS 2',
              needs: ['algebraic-expressions-shs'],
            },
            {
              id: 'binary-operations',
              title: 'Binary operations',
              outcome: 'Test an operation for closure, commutativity, identity and inverse.',
              year: 'SHS 2',
              needs: ['sets-shs-t'],
            },
          ],
        },
        {
          id: 'relations-shs',
          name: 'Relations and functions',
          topics: [
            {
              id: 'functions-shs',
              title: 'Relations and functions',
              outcome: 'State domain and range, and evaluate and compose functions.',
              year: 'SHS 1',
              needs: ['algebraic-expressions-shs'],
            },
            {
              id: 'graphs-functions-shs',
              title: 'Graphs of functions',
              outcome: 'Draw linear and quadratic graphs and use them to solve an equation.',
              year: 'SHS 2',
              needs: ['functions-shs', 'quadratics-shs'],
            },
          ],
        },
      ],
    },
    {
      id: 'geometry-shs',
      name: 'Plane Geometry and Trigonometry',
      purpose: 'Shape and angle, with results that must be justified.',
      subStrands: [
        {
          id: 'plane-geometry',
          name: 'Plane geometry',
          topics: [
            {
              id: 'angles-lines-shs',
              title: 'Angles, lines and polygons',
              outcome: 'Apply angle facts and polygon angle sums, stating the reason for each step.',
              year: 'SHS 1',
            },
            {
              id: 'triangles-congruence',
              title: 'Congruent and similar triangles',
              outcome: 'Prove congruence or similarity and use it to find an unknown length.',
              year: 'SHS 1',
              needs: ['angles-lines-shs'],
            },
            {
              id: 'circle-theorems-shs',
              title: 'Circle theorems',
              outcome: 'Apply the circle theorems and quote the theorem used.',
              year: 'SHS 2',
              needs: ['triangles-congruence'],
            },
            {
              id: 'construction-loci',
              title: 'Construction and loci',
              outcome: 'Construct accurately and describe a locus in words and in a drawing.',
              year: 'SHS 2',
              needs: ['angles-lines-shs'],
            },
            {
              id: 'coordinate-geometry-core',
              title: 'Coordinate geometry of straight lines',
              outcome: 'Find gradient, midpoint, distance and the equation of a line.',
              year: 'SHS 2',
              needs: ['linear-equations-shs'],
            },
            {
              id: 'vectors-core',
              title: 'Vectors',
              outcome: 'Add vectors, find magnitude and direction, and use them on a plane problem.',
              year: 'SHS 3',
              needs: ['coordinate-geometry-core'],
            },
            {
              id: 'transformations-shs',
              title: 'Rigid motion and enlargement',
              outcome: 'Perform and describe reflection, rotation, translation and enlargement.',
              year: 'SHS 3',
              needs: ['coordinate-geometry-core'],
            },
          ],
        },
        {
          id: 'trigonometry-core',
          name: 'Trigonometry',
          topics: [
            {
              id: 'trig-ratios-shs',
              title: 'Trigonometric ratios',
              outcome: 'Use sine, cosine and tangent in a right angled triangle, and the special angles.',
              year: 'SHS 1',
              needs: ['triangles-congruence'],
            },
            {
              id: 'sine-cosine-rules',
              title: 'Sine and cosine rules',
              outcome: 'Solve a non-right triangle and find its area from two sides and an angle.',
              year: 'SHS 2',
              needs: ['trig-ratios-shs'],
            },
            {
              id: 'bearings-shs',
              title: 'Bearings and angles of elevation',
              outcome: 'Solve a bearing or elevation problem with a clear diagram first.',
              year: 'SHS 2',
              needs: ['trig-ratios-shs'],
            },
            {
              id: 'trig-graphs-core',
              title: 'Trigonometric graphs',
              outcome: 'Sketch sine and cosine curves and read solutions from them.',
              year: 'SHS 3',
              needs: ['sine-cosine-rules'],
            },
          ],
        },
      ],
    },
    {
      id: 'mensuration',
      name: 'Mensuration',
      purpose: 'Measuring what shapes and solids actually contain.',
      subStrands: [
        {
          id: 'measure-shs',
          name: 'Perimeter, area and volume',
          topics: [
            {
              id: 'area-perimeter-shs',
              title: 'Perimeter and area of plane figures',
              outcome: 'Find areas of triangles, circles, sectors and compound figures.',
              year: 'SHS 1',
            },
            {
              id: 'solids-shs',
              title: 'Surface area and volume of solids',
              outcome: 'Find surface area and volume of prisms, cylinders, cones, pyramids and spheres.',
              year: 'SHS 2',
              needs: ['area-perimeter-shs'],
            },
            {
              id: 'earth-geometry',
              title: 'Longitude and latitude',
              outcome: 'Calculate distance along a great circle and along a parallel of latitude.',
              year: 'SHS 3',
              needs: ['solids-shs', 'trig-ratios-shs'],
            },
          ],
        },
      ],
    },
    {
      id: 'statistics-probability-core',
      name: 'Statistics and Probability',
      purpose: 'Summarising data honestly, and reasoning about uncertainty.',
      subStrands: [
        {
          id: 'statistics-core',
          name: 'Statistics',
          topics: [
            {
              id: 'data-presentation-shs',
              title: 'Collecting and presenting data',
              outcome: 'Build a grouped frequency table, histogram and cumulative frequency curve.',
              year: 'SHS 1',
            },
            {
              id: 'measures-central',
              title: 'Measures of central tendency',
              outcome: 'Find mean, median and mode from raw and grouped data.',
              year: 'SHS 1',
              needs: ['data-presentation-shs'],
            },
            {
              id: 'measures-spread',
              title: 'Measures of dispersion',
              outcome: 'Find range, quartiles, variance and standard deviation, and say what spread adds.',
              year: 'SHS 2',
              needs: ['measures-central'],
            },
          ],
        },
        {
          id: 'probability-core',
          name: 'Probability',
          topics: [
            {
              id: 'probability-shs',
              title: 'Probability',
              outcome: 'Calculate probabilities of single and combined events using tables and trees.',
              year: 'SHS 2',
              needs: ['sets-shs-t'],
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
  stage: 'shs',
  subject: 'English Language',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'comprehension-shs',
      name: 'Reading and Comprehension',
      purpose: 'Reading a hard text and being able to say precisely what it does.',
      subStrands: [
        {
          id: 'reading-shs',
          name: 'Comprehension and summary',
          topics: [
            {
              id: 'comprehension-passage',
              title: 'Comprehension of an unseen passage',
              outcome: 'Answer literal, inferential and vocabulary questions in your own words.',
              year: 'SHS 1',
            },
            {
              id: 'summary-shs',
              title: 'Summary',
              outcome: 'Extract only the points asked for and write them in continuous prose.',
              year: 'SHS 2',
              needs: ['comprehension-passage'],
            },
            {
              id: 'tone-attitude-shs',
              title: 'Tone, mood and attitude',
              outcome: 'Identify a writer’s attitude and quote the words that establish it.',
              year: 'SHS 2',
              needs: ['comprehension-passage'],
            },
            {
              id: 'register-shs',
              title: 'Register',
              outcome: 'Identify the register of a passage and rewrite a line in another.',
              year: 'SHS 3',
              needs: ['tone-attitude-shs'],
            },
          ],
        },
      ],
    },
    {
      id: 'grammar-shs',
      name: 'Lexis and Structure',
      purpose: 'Precision: the difference between nearly right and right.',
      subStrands: [
        {
          id: 'structure-shs',
          name: 'Structure',
          topics: [
            {
              id: 'sentence-structure-shs',
              title: 'Sentence structure',
              outcome: 'Analyse and write simple, compound, complex and compound-complex sentences.',
              year: 'SHS 1',
            },
            {
              id: 'concord-shs',
              title: 'Concord',
              outcome: 'Apply the harder concord rules, including with collective and indefinite subjects.',
              year: 'SHS 1',
              needs: ['sentence-structure-shs'],
            },
            {
              id: 'tense-aspect-shs',
              title: 'Tense, aspect and voice',
              outcome: 'Keep tense consistent and use the passive deliberately.',
              year: 'SHS 2',
              needs: ['concord-shs'],
            },
            {
              id: 'clauses-shs',
              title: 'Phrases and clauses',
              outcome: 'Name the function of a clause within its sentence.',
              year: 'SHS 2',
              needs: ['sentence-structure-shs'],
            },
            {
              id: 'idioms-shs',
              title: 'Idioms, collocation and phrasal verbs',
              outcome: 'Use idioms and phrasal verbs correctly and explain them literally.',
              year: 'SHS 2',
            },
            {
              id: 'word-formation',
              title: 'Word formation and synonyms',
              outcome: 'Form words with prefixes and suffixes and choose between near synonyms.',
              year: 'SHS 1',
            },
            {
              id: 'punctuation-shs',
              title: 'Punctuation and mechanics',
              outcome: 'Punctuate complex prose, including semicolons and quotation.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'writing-shs',
      name: 'Composition',
      purpose: 'Writing to a purpose, an audience and a form.',
      subStrands: [
        {
          id: 'essays-shs',
          name: 'Essay writing',
          topics: [
            {
              id: 'argumentative-shs',
              title: 'Argumentative and debate writing',
              outcome: 'Argue a case in order of strength and rebut the opposing view.',
              year: 'SHS 2',
              needs: ['sentence-structure-shs'],
            },
            {
              id: 'expository-shs',
              title: 'Expository and article writing',
              outcome: 'Explain a process or issue clearly for a named readership.',
              year: 'SHS 2',
            },
            {
              id: 'narrative-descriptive-shs',
              title: 'Narrative and descriptive writing',
              outcome: 'Write a narrative with controlled pace and concrete detail.',
              year: 'SHS 1',
            },
            {
              id: 'letters-reports-shs',
              title: 'Letters, reports and speeches',
              outcome: 'Produce formal letters, reports and speeches in the correct form and register.',
              year: 'SHS 3',
              needs: ['argumentative-shs'],
            },
          ],
        },
      ],
    },
    {
      id: 'oral-shs',
      name: 'Oral English',
      purpose: 'Sound: stress, intonation and the sounds English actually distinguishes.',
      subStrands: [
        {
          id: 'phonology-shs',
          name: 'Sounds and stress',
          topics: [
            {
              id: 'vowels-consonants',
              title: 'Vowel and consonant sounds',
              outcome: 'Identify and produce the sounds that Ghanaian speakers commonly merge.',
              year: 'SHS 1',
            },
            {
              id: 'stress-shs',
              title: 'Word and sentence stress',
              outcome: 'Place stress correctly and hear how it changes meaning and word class.',
              year: 'SHS 2',
              needs: ['vowels-consonants'],
            },
            {
              id: 'intonation-shs',
              title: 'Intonation and rhyme',
              outcome: 'Use rising and falling intonation correctly and identify rhyming words.',
              year: 'SHS 3',
              needs: ['stress-shs'],
            },
          ],
        },
      ],
    },
    {
      id: 'literature-shs-core',
      name: 'Literature',
      purpose: 'Reading whole works closely enough to argue about them.',
      subStrands: [
        {
          id: 'lit-core',
          name: 'Prose, drama and poetry',
          topics: [
            {
              id: 'literary-devices-shs',
              title: 'Literary devices',
              outcome: 'Identify devices and explain the effect rather than merely naming them.',
              year: 'SHS 1',
            },
            {
              id: 'set-texts-shs',
              title: 'Studying a set text',
              outcome: 'Discuss plot, character, setting and theme with quotation as evidence.',
              year: 'SHS 2',
              needs: ['literary-devices-shs'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Integrated Science ───────────────────────────────────────────────────── */

register({
  subjectId: 'general-science',
  stage: 'shs',
  subject: 'General Science',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'sci-method',
      name: 'Scientific Method and Measurement',
      purpose: 'How a claim becomes evidence, and how to measure without fooling yourself.',
      subStrands: [
        {
          id: 'method-shs',
          name: 'Investigating scientifically',
          topics: [
            {
              id: 'variables-shs',
              title: 'Variables and fair testing',
              outcome: 'Design an experiment with one variable changed and the rest controlled.',
              year: 'SHS 1',
            },
            {
              id: 'measurement-shs',
              title: 'Measurement and units',
              outcome: 'Use SI units, estimate uncertainty, and give an answer to sensible precision.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'diversity-shs',
      name: 'Diversity of Matter',
      purpose: 'Matter, from the atom up to a living organism.',
      subStrands: [
        {
          id: 'chemistry-shs-core',
          name: 'Matter and its changes',
          topics: [
            {
              id: 'atomic-structure-core',
              title: 'Atomic structure and bonding',
              outcome: 'Describe the atom, write electron arrangements, and explain ionic and covalent bonding.',
              year: 'SHS 1',
              needs: ['measurement-shs'],
            },
            {
              id: 'periodic-table-core',
              title: 'The periodic table',
              outcome: 'Use position to predict whether an element is a metal and how it reacts.',
              year: 'SHS 1',
              needs: ['atomic-structure-core'],
            },
            {
              id: 'reactions-core',
              title: 'Chemical reactions and equations',
              outcome: 'Balance an equation and classify a reaction by what it does.',
              year: 'SHS 2',
              needs: ['atomic-structure-core'],
            },
            {
              id: 'acids-bases-core',
              title: 'Acids, bases and salts',
              outcome: 'Explain pH, carry out a neutralisation, and prepare a named salt.',
              year: 'SHS 2',
              needs: ['reactions-core'],
            },
            {
              id: 'water-air-core',
              title: 'Water and air',
              outcome: 'Describe the composition of air, hardness of water, and how water is treated.',
              year: 'SHS 2',
              needs: ['reactions-core'],
            },
          ],
        },
        {
          id: 'biology-shs-core',
          name: 'Living things',
          topics: [
            {
              id: 'cells-core',
              title: 'Cells and cell division',
              outcome: 'Describe cell structure and the purpose of mitosis and meiosis.',
              year: 'SHS 1',
            },
            {
              id: 'classification-core',
              title: 'Classification of living things',
              outcome: 'Classify an organism to kingdom and phylum from its features.',
              year: 'SHS 1',
              needs: ['cells-core'],
            },
          ],
        },
      ],
    },
    {
      id: 'cycles-shs',
      name: 'Cycles',
      purpose: 'Matter cycling through the living and non-living world.',
      subStrands: [
        {
          id: 'cycles-shs-sub',
          name: 'Natural cycles',
          topics: [
            {
              id: 'nutrient-cycles-core',
              title: 'Carbon, nitrogen and water cycles',
              outcome: 'Trace each cycle and say where human activity interrupts it.',
              year: 'SHS 2',
              needs: ['water-air-core'],
            },
            {
              id: 'reproduction-core',
              title: 'Reproduction and growth',
              outcome: 'Compare sexual and asexual reproduction and describe fertilisation in plants and humans.',
              year: 'SHS 2',
              needs: ['cells-core'],
            },
            {
              id: 'genetics-core',
              title: 'Heredity and variation',
              outcome: 'Use a Punnett square to predict offspring and explain why variation matters.',
              year: 'SHS 3',
              needs: ['reproduction-core'],
            },
          ],
        },
      ],
    },
    {
      id: 'systems-shs',
      name: 'Systems',
      purpose: 'Bodies, plants and ecosystems as systems with inputs and outputs.',
      subStrands: [
        {
          id: 'body-shs-core',
          name: 'Systems of the body and the plant',
          topics: [
            {
              id: 'nutrition-digestion-core',
              title: 'Nutrition and digestion',
              outcome: 'Describe digestion with the enzymes involved and diagnose a deficiency.',
              year: 'SHS 1',
            },
            {
              id: 'transport-core',
              title: 'Transport and respiration',
              outcome: 'Describe circulation and gas exchange, and distinguish aerobic from anaerobic respiration.',
              year: 'SHS 2',
              needs: ['nutrition-digestion-core'],
            },
            {
              id: 'photosynthesis-core',
              title: 'Photosynthesis',
              outcome: 'Give the equation, describe the limiting factors, and test for starch.',
              year: 'SHS 1',
              needs: ['cells-core'],
            },
            {
              id: 'coordination-core',
              title: 'Coordination and excretion',
              outcome: 'Describe the nervous and hormonal systems and how the kidney regulates water.',
              year: 'SHS 3',
              needs: ['transport-core'],
            },
          ],
        },
        {
          id: 'ecology-core',
          name: 'Ecosystems',
          topics: [
            {
              id: 'ecology-shs-core',
              title: 'Ecosystems and energy flow',
              outcome: 'Draw a food web and a pyramid of energy, and explain the loss at each level.',
              year: 'SHS 2',
              needs: ['classification-core'],
            },
          ],
        },
      ],
    },
    {
      id: 'forces-energy-shs',
      name: 'Forces and Energy',
      purpose: 'Physics, with the equations that make it predictive.',
      subStrands: [
        {
          id: 'mechanics-core',
          name: 'Motion and forces',
          topics: [
            {
              id: 'motion-core',
              title: 'Motion',
              outcome: 'Use the equations of uniformly accelerated motion and read motion graphs.',
              year: 'SHS 1',
              needs: ['measurement-shs'],
            },
            {
              id: 'newton-core',
              title: 'Forces and Newton’s laws',
              outcome: 'Apply the three laws, resolve forces, and use the idea of equilibrium.',
              year: 'SHS 2',
              needs: ['motion-core'],
            },
            {
              id: 'work-energy-core',
              title: 'Work, energy and power',
              outcome: 'Calculate work, energy and power, and apply conservation of energy.',
              year: 'SHS 2',
              needs: ['newton-core'],
            },
            {
              id: 'machines-core',
              title: 'Machines and efficiency',
              outcome: 'Find mechanical advantage, velocity ratio and efficiency, and explain the shortfall.',
              year: 'SHS 2',
              needs: ['work-energy-core'],
            },
            {
              id: 'pressure-core',
              title: 'Pressure and floating',
              outcome: 'Use pressure in fluids, and explain flotation by upthrust.',
              year: 'SHS 1',
              needs: ['measurement-shs'],
            },
          ],
        },
        {
          id: 'waves-electricity-core',
          name: 'Waves, heat and electricity',
          topics: [
            {
              id: 'heat-core',
              title: 'Heat and temperature',
              outcome: 'Distinguish heat from temperature and use specific heat capacity.',
              year: 'SHS 2',
            },
            {
              id: 'waves-core',
              title: 'Waves, light and sound',
              outcome: 'Use the wave equation, and explain reflection, refraction and the electromagnetic spectrum.',
              year: 'SHS 2',
            },
            {
              id: 'electricity-core',
              title: 'Electricity and magnetism',
              outcome: 'Use Ohm’s law in series and parallel, and explain how a generator and motor work.',
              year: 'SHS 3',
              needs: ['work-energy-core'],
            },
            {
              id: 'radioactivity-core',
              title: 'Radioactivity',
              outcome: 'Describe the three radiations, half life, and the uses and dangers.',
              year: 'SHS 3',
              needs: ['atomic-structure-core'],
            },
          ],
        },
      ],
    },
    {
      id: 'humans-env-shs',
      name: 'Humans and the Environment',
      purpose: 'Science applied to health, food and the state of the country.',
      subStrands: [
        {
          id: 'applied-core',
          name: 'Health, agriculture and environment',
          topics: [
            {
              id: 'disease-core',
              title: 'Disease and immunity',
              outcome: 'Explain how named diseases spread, how vaccination works, and why resistance arises.',
              year: 'SHS 2',
            },
            {
              id: 'agriculture-core',
              title: 'Soil and crop production',
              outcome: 'Relate soil properties to crop choice and explain what fertiliser supplies.',
              year: 'SHS 1',
            },
            {
              id: 'biotech-core',
              title: 'Biotechnology',
              outcome: 'Describe fermentation and one modern biotechnology, with its trade-offs.',
              year: 'SHS 3',
              needs: ['genetics-core'],
            },
            {
              id: 'pollution-core',
              title: 'Pollution, energy and conservation',
              outcome: 'Evaluate an energy source or a pollution response for Ghana on evidence.',
              year: 'SHS 3',
              needs: ['nutrient-cycles-core'],
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
  stage: 'shs',
  subject: 'Social Studies',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'environment-shs-social',
      name: 'Environment',
      purpose: 'The physical and human setting, and the pressure between them.',
      subStrands: [
        {
          id: 'physical-shs',
          name: 'Physical and human environment',
          topics: [
            {
              id: 'ghana-env-shs',
              title: 'Ghana’s physical environment',
              outcome: 'Describe relief, drainage, climate and vegetation and their effect on settlement.',
              year: 'SHS 1',
            },
            {
              id: 'env-problems-shs',
              title: 'Environmental problems',
              outcome: 'Analyse the causes, effects and management of a named problem in Ghana.',
              year: 'SHS 1',
              needs: ['ghana-env-shs'],
            },
            {
              id: 'sustainable-dev',
              title: 'Sustainable development',
              outcome: 'Explain sustainability and judge a development project against it.',
              year: 'SHS 3',
              needs: ['env-problems-shs'],
            },
          ],
        },
      ],
    },
    {
      id: 'governance-shs',
      name: 'Governance, Politics and Stability',
      purpose: 'Power, how it is held to account, and what happens when it is not.',
      subStrands: [
        {
          id: 'government-shs',
          name: 'Government and citizenship',
          topics: [
            {
              id: 'constitution-shs',
              title: 'The constitution and separation of powers',
              outcome: 'Explain the three arms, how each checks the others, and what the constitution entrenches.',
              year: 'SHS 1',
            },
            {
              id: 'democracy-shs',
              title: 'Democracy, elections and political parties',
              outcome: 'Describe how power changes hands and what makes an election credible.',
              year: 'SHS 2',
              needs: ['constitution-shs'],
            },
            {
              id: 'rights-shs',
              title: 'Human rights and the rule of law',
              outcome: 'State fundamental human rights and explain what the rule of law requires.',
              year: 'SHS 2',
              needs: ['constitution-shs'],
            },
            {
              id: 'corruption-shs',
              title: 'Corruption and accountability',
              outcome: 'Explain how corruption occurs, what it costs, and which bodies exist to check it.',
              year: 'SHS 3',
              needs: ['rights-shs'],
            },
            {
              id: 'conflict-shs',
              title: 'Conflict, peace and nationalism',
              outcome: 'Analyse a conflict in Ghana and evaluate how it was handled.',
              year: 'SHS 3',
              needs: ['democracy-shs'],
            },
          ],
        },
      ],
    },
    {
      id: 'social-economic-shs',
      name: 'Social and Economic Development',
      purpose: 'Livelihoods, institutions and why development is uneven.',
      subStrands: [
        {
          id: 'economy-shs-social',
          name: 'Economy and development',
          topics: [
            {
              id: 'resources-shs-social',
              title: 'Resources and the economy',
              outcome: 'Relate Ghana’s resources to its economic structure and its exports.',
              year: 'SHS 1',
            },
            {
              id: 'development-shs',
              title: 'Development and underdevelopment',
              outcome: 'Compare measures of development and explain obstacles Ghana faces.',
              year: 'SHS 2',
              needs: ['resources-shs-social'],
            },
            {
              id: 'population-shs',
              title: 'Population and urbanisation',
              outcome: 'Explain population structure, migration and the strain of rapid urban growth.',
              year: 'SHS 2',
              needs: ['development-shs'],
            },
            {
              id: 'unemployment-shs',
              title: 'Work, unemployment and entrepreneurship',
              outcome: 'Explain youth unemployment and evaluate responses to it.',
              year: 'SHS 3',
              needs: ['development-shs'],
            },
          ],
        },
        {
          id: 'social-shs-inst',
          name: 'Social institutions and issues',
          topics: [
            {
              id: 'culture-shs',
              title: 'Culture, socialisation and change',
              outcome: 'Explain how culture is transmitted and why it changes.',
              year: 'SHS 1',
            },
            {
              id: 'family-marriage-shs',
              title: 'Family, marriage and inheritance',
              outcome: 'Compare systems of marriage and inheritance in Ghana and their legal position.',
              year: 'SHS 2',
              needs: ['culture-shs'],
            },
            {
              id: 'adolescent-shs',
              title: 'Adolescent problems and responsible living',
              outcome: 'Analyse a pressure facing young people and argue a considered response.',
              year: 'SHS 1',
            },
            {
              id: 'science-tech-society',
              title: 'Science, technology and society',
              outcome: 'Evaluate how a technology has changed life in Ghana, for better and worse.',
              year: 'SHS 3',
              needs: ['culture-shs'],
            },
          ],
        },
      ],
    },
  ],
})
