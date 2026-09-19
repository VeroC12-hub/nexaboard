/**
 * Primary school, Basic 1 to Basic 6.
 *
 * The strands follow the divisions these subjects are actually organised into
 * here: Number, Algebra, Geometry and Measurement, and Data for Mathematics;
 * the five science strands; the five language strands. Naming the divisions is
 * a description of the subject and is safe. What is not written anywhere in
 * this folder is an indicator code or a claim about an examination, because
 * those are facts about a document nobody has given us yet.
 *
 * Six years is a wide span. `year` on each topic is what makes one outline
 * serve all of it, so a Basic 2 learner is not shown Basic 6 work as though it
 * were next.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard primary outline, until your school adds its own.'

/* ── Mathematics ──────────────────────────────────────────────────────────── */

register({
  subjectId: 'maths',
  stage: 'primary',
  subject: 'Mathematics',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'number',
      name: 'Number',
      purpose: 'What numbers are, and the four things you can do with them.',
      subStrands: [
        {
          id: 'counting-place-value',
          name: 'Counting and place value',
          topics: [
            {
              id: 'numbers-to-100',
              title: 'Numbers to 100',
              outcome: 'Read, write and order numbers to 100, and say which is bigger and why.',
              year: 'Basic 1',
            },
            {
              id: 'tens-and-ones',
              title: 'Tens and ones',
              outcome: 'Say how many tens and ones are in a two digit number, and why 42 is not 24.',
              year: 'Basic 2',
              needs: ['numbers-to-100'],
            },
            {
              id: 'numbers-to-1000',
              title: 'Numbers to 1000',
              outcome: 'Read, write and compare numbers to 1000 using hundreds, tens and ones.',
              year: 'Basic 3',
              needs: ['tens-and-ones'],
            },
            {
              id: 'large-numbers',
              title: 'Larger numbers',
              outcome: 'Read and write numbers beyond a thousand, and say what each digit is worth.',
              year: 'Basic 4',
              needs: ['numbers-to-1000'],
            },
            {
              id: 'rounding',
              title: 'Rounding',
              outcome: 'Round to the nearest ten, hundred or thousand, and say when rounding is sensible.',
              year: 'Basic 5',
              needs: ['large-numbers'],
            },
          ],
        },
        {
          id: 'add-subtract',
          name: 'Addition and subtraction',
          topics: [
            {
              id: 'add-within-20',
              title: 'Adding and taking away within 20',
              outcome: 'Add and subtract within 20, knowing the small facts by heart.',
              year: 'Basic 1',
              needs: ['numbers-to-100'],
            },
            {
              id: 'add-with-carrying',
              title: 'Adding with carrying',
              outcome: 'Add two and three digit numbers, and explain what the carried digit is.',
              year: 'Basic 3',
              needs: ['tens-and-ones', 'add-within-20'],
            },
            {
              id: 'subtract-with-borrowing',
              title: 'Subtracting with borrowing',
              outcome: 'Subtract with borrowing, and say what was actually exchanged.',
              year: 'Basic 3',
              needs: ['add-with-carrying'],
            },
            {
              id: 'word-problems-addsub',
              title: 'Word problems',
              outcome: 'Decide whether a story needs adding or taking away, and say how you knew.',
              year: 'Basic 4',
              needs: ['subtract-with-borrowing'],
            },
          ],
        },
        {
          id: 'multiply-divide',
          name: 'Multiplication and division',
          topics: [
            {
              id: 'groups-of',
              title: 'Groups of the same size',
              outcome: 'See multiplication as equal groups, and draw one from the other.',
              year: 'Basic 2',
              needs: ['add-within-20'],
            },
            {
              id: 'times-tables',
              title: 'Multiplication facts',
              outcome: 'Recall tables to 10 and use them without counting up.',
              year: 'Basic 3',
              needs: ['groups-of'],
            },
            {
              id: 'long-multiplication',
              title: 'Multiplying larger numbers',
              outcome: 'Multiply a two or three digit number by a single digit and by a ten.',
              year: 'Basic 4',
              needs: ['times-tables', 'tens-and-ones'],
            },
            {
              id: 'division-sharing',
              title: 'Division as sharing and grouping',
              outcome: 'Divide by sharing out and by asking how many groups fit, and see they agree.',
              year: 'Basic 4',
              needs: ['times-tables'],
            },
            {
              id: 'division-remainder',
              title: 'Division with remainders',
              outcome: 'Divide with a remainder and say what the remainder means in the story.',
              year: 'Basic 5',
              needs: ['division-sharing'],
            },
            {
              id: 'factors-multiples',
              title: 'Factors and multiples',
              outcome: 'List factors and multiples, and find the highest common factor of two numbers.',
              year: 'Basic 5',
              needs: ['times-tables'],
            },
          ],
        },
        {
          id: 'fractions-decimals',
          name: 'Fractions, decimals and percentages',
          topics: [
            {
              id: 'halves-quarters',
              title: 'Halves and quarters',
              outcome: 'Find half and a quarter of a shape and of a small amount.',
              year: 'Basic 2',
              needs: ['division-sharing'],
            },
            {
              id: 'what-a-fraction-is',
              title: 'What a fraction is',
              outcome: 'Read a fraction as parts of a whole, and say what the bottom number counts.',
              year: 'Basic 3',
              needs: ['halves-quarters'],
            },
            {
              id: 'equivalent-fractions',
              title: 'Fractions that are the same size',
              outcome: 'Show that 1/2 and 2/4 are the same amount, and simplify a fraction.',
              year: 'Basic 4',
              needs: ['what-a-fraction-is', 'factors-multiples'],
            },
            {
              id: 'add-fractions',
              title: 'Adding and subtracting fractions',
              outcome: 'Add and subtract fractions, including when the bottoms differ.',
              year: 'Basic 5',
              needs: ['equivalent-fractions'],
            },
            {
              id: 'decimals',
              title: 'Decimals',
              outcome: 'Read and order decimals, and connect 0.5 to a half and to 50%.',
              year: 'Basic 5',
              needs: ['what-a-fraction-is', 'rounding'],
            },
            {
              id: 'percentages-primary',
              title: 'Percentages',
              outcome: 'Find a simple percentage of an amount, and say what per cent means.',
              year: 'Basic 6',
              needs: ['decimals'],
            },
            {
              id: 'ratio-primary',
              title: 'Ratio and proportion',
              outcome: 'Share an amount in a given ratio, and explain why it is not a fair split.',
              year: 'Basic 6',
              needs: ['division-sharing', 'equivalent-fractions'],
            },
          ],
        },
      ],
    },
    {
      id: 'algebra-primary',
      name: 'Algebra',
      purpose: 'Patterns, and the first idea of a letter standing for a number.',
      subStrands: [
        {
          id: 'patterns-primary',
          name: 'Patterns and relations',
          topics: [
            {
              id: 'continue-pattern',
              title: 'Continuing a pattern',
              outcome: 'Carry on a number or shape pattern and say the rule in words.',
              year: 'Basic 2',
            },
            {
              id: 'find-the-rule',
              title: 'Finding the rule',
              outcome: 'Work out the rule behind a sequence and use it to find a later term.',
              year: 'Basic 4',
              needs: ['continue-pattern', 'times-tables'],
            },
            {
              id: 'missing-number',
              title: 'The missing number',
              outcome: 'Find the missing number in a number sentence and explain how.',
              year: 'Basic 5',
              needs: ['find-the-rule', 'subtract-with-borrowing'],
            },
            {
              id: 'letters-for-numbers',
              title: 'Letters standing for numbers',
              outcome: 'Write a simple rule using a letter, and work out its value.',
              year: 'Basic 6',
              needs: ['missing-number'],
            },
          ],
        },
      ],
    },
    {
      id: 'geometry-measurement',
      name: 'Geometry and Measurement',
      purpose: 'Shape, size, and how we say how much.',
      subStrands: [
        {
          id: 'shapes-primary',
          name: 'Shapes and their properties',
          topics: [
            {
              id: 'name-2d-3d',
              title: 'Naming shapes',
              outcome: 'Name flat and solid shapes and count their sides, corners and faces.',
              year: 'Basic 1',
            },
            {
              id: 'symmetry',
              title: 'Lines of symmetry',
              outcome: 'Find lines of symmetry in a shape and complete a symmetrical drawing.',
              year: 'Basic 3',
              needs: ['name-2d-3d'],
            },
            {
              id: 'angles-primary',
              title: 'Angles',
              outcome: 'Recognise right, acute and obtuse angles and measure one with a protractor.',
              year: 'Basic 5',
              needs: ['name-2d-3d'],
            },
          ],
        },
        {
          id: 'measure-primary',
          name: 'Measurement',
          topics: [
            {
              id: 'length-mass-capacity',
              title: 'Length, mass and capacity',
              outcome: 'Measure in metres, centimetres, kilograms and litres, and pick the right unit.',
              year: 'Basic 3',
            },
            {
              id: 'time-primary',
              title: 'Telling the time',
              outcome: 'Read a clock to the minute and work out how long something took.',
              year: 'Basic 3',
            },
            {
              id: 'money-primary',
              title: 'Money',
              outcome: 'Add prices, work out change, and check whether the change is right.',
              year: 'Basic 4',
              needs: ['add-with-carrying', 'decimals'],
            },
            {
              id: 'perimeter-area',
              title: 'Perimeter and area',
              outcome: 'Find the perimeter and area of rectangles, and say why they are different things.',
              year: 'Basic 5',
              needs: ['length-mass-capacity', 'times-tables'],
            },
            {
              id: 'volume-primary',
              title: 'Volume',
              outcome: 'Find the volume of a box, and say what a cubic centimetre is.',
              year: 'Basic 6',
              needs: ['perimeter-area'],
            },
          ],
        },
      ],
    },
    {
      id: 'data-primary',
      name: 'Data',
      purpose: 'Collecting information and reading what somebody else collected.',
      subStrands: [
        {
          id: 'handling-data',
          name: 'Collecting and showing data',
          topics: [
            {
              id: 'tally-and-table',
              title: 'Tally charts and tables',
              outcome: 'Collect answers from your class and record them in a tally chart.',
              year: 'Basic 2',
            },
            {
              id: 'bar-charts',
              title: 'Bar charts and pictographs',
              outcome: 'Draw a bar chart and answer questions from somebody else’s.',
              year: 'Basic 4',
              needs: ['tally-and-table'],
            },
            {
              id: 'average-primary',
              title: 'The mean',
              outcome: 'Find the mean of a small set and say what it tells you about the group.',
              year: 'Basic 6',
              needs: ['bar-charts', 'division-sharing'],
            },
            {
              id: 'chance-primary',
              title: 'Chance',
              outcome: 'Say whether something is certain, likely, unlikely or impossible, and why.',
              year: 'Basic 6',
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
  stage: 'primary',
  subject: 'English Language',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'oral-language',
      name: 'Oral Language',
      purpose: 'Speaking so you are understood, and listening so you understand.',
      subStrands: [
        {
          id: 'conversation',
          name: 'Conversation and presentation',
          topics: [
            {
              id: 'speak-in-sentences',
              title: 'Speaking in full sentences',
              outcome: 'Answer a question in a complete sentence rather than one word.',
              year: 'Basic 1',
            },
            {
              id: 'describe-something',
              title: 'Describing something clearly',
              outcome: 'Describe an object or a person so somebody else could pick it out.',
              year: 'Basic 3',
              needs: ['speak-in-sentences'],
            },
            {
              id: 'give-a-talk',
              title: 'Talking to the class',
              outcome: 'Give a short talk on a topic you prepared, and take a question.',
              year: 'Basic 5',
              needs: ['describe-something'],
            },
            {
              id: 'discussion',
              title: 'Taking part in a discussion',
              outcome: 'Give your view with a reason, and respond to somebody who disagrees.',
              year: 'Basic 6',
              needs: ['give-a-talk'],
            },
          ],
        },
      ],
    },
    {
      id: 'reading',
      name: 'Reading',
      purpose: 'Getting the words off the page, and then getting the meaning out of them.',
      subStrands: [
        {
          id: 'phonics-fluency',
          name: 'Phonics and fluency',
          topics: [
            {
              id: 'letter-sounds-primary',
              title: 'Letters and their sounds',
              outcome: 'Give the sound of each letter and the common two letter sounds.',
              year: 'Basic 1',
            },
            {
              id: 'blend-to-read',
              title: 'Sounding out a word',
              outcome: 'Blend sounds to read unfamiliar short words without being told them.',
              year: 'Basic 1',
              needs: ['letter-sounds-primary'],
            },
            {
              id: 'sight-words',
              title: 'Words you know on sight',
              outcome: 'Read common words instantly, without sounding them out.',
              year: 'Basic 2',
              needs: ['blend-to-read'],
            },
            {
              id: 'read-aloud-fluently',
              title: 'Reading aloud with expression',
              outcome: 'Read a passage aloud at a steady pace, pausing at the punctuation.',
              year: 'Basic 3',
              needs: ['sight-words'],
            },
          ],
        },
        {
          id: 'comprehension',
          name: 'Comprehension',
          topics: [
            {
              id: 'answer-from-text',
              title: 'Answering from the passage',
              outcome: 'Find the answer in the passage and point to the line it came from.',
              year: 'Basic 3',
              needs: ['read-aloud-fluently'],
            },
            {
              id: 'main-idea',
              title: 'The main idea',
              outcome: 'Say what a passage is mainly about, not just one thing that happened in it.',
              year: 'Basic 4',
              needs: ['answer-from-text'],
            },
            {
              id: 'inference-primary',
              title: 'Working out what is not said',
              outcome: 'Say how a character felt and which words made you think so.',
              year: 'Basic 5',
              needs: ['main-idea'],
            },
            {
              id: 'vocabulary-in-context',
              title: 'Meaning from the sentence around it',
              outcome: 'Work out a new word’s meaning from the rest of the sentence.',
              year: 'Basic 5',
              needs: ['answer-from-text'],
            },
            {
              id: 'summarise-primary',
              title: 'Summarising',
              outcome: 'Say a passage in far fewer words without losing what mattered.',
              year: 'Basic 6',
              needs: ['main-idea'],
            },
          ],
        },
      ],
    },
    {
      id: 'writing',
      name: 'Writing',
      purpose: 'Putting something on paper that a stranger could read and follow.',
      subStrands: [
        {
          id: 'composition',
          name: 'Composition',
          topics: [
            {
              id: 'write-sentences',
              title: 'Writing sentences',
              outcome: 'Write a sentence that starts with a capital and ends with a full stop.',
              year: 'Basic 2',
            },
            {
              id: 'paragraph',
              title: 'Writing a paragraph',
              outcome: 'Write a paragraph on one idea, with sentences that follow each other.',
              year: 'Basic 4',
              needs: ['write-sentences'],
            },
            {
              id: 'narrative',
              title: 'Writing a story',
              outcome: 'Write a story with a beginning, a middle and an ending.',
              year: 'Basic 5',
              needs: ['paragraph'],
            },
            {
              id: 'letter-writing',
              title: 'Writing a letter',
              outcome: 'Write an informal letter laid out correctly, to a real person.',
              year: 'Basic 5',
              needs: ['paragraph'],
            },
            {
              id: 'describe-and-explain',
              title: 'Describing and explaining in writing',
              outcome: 'Write a description, and write instructions somebody could actually follow.',
              year: 'Basic 6',
              needs: ['paragraph'],
            },
          ],
        },
      ],
    },
    {
      id: 'grammar',
      name: 'Writing Conventions and Grammar Usage',
      purpose: 'The rules that stop a reader having to guess what you meant.',
      subStrands: [
        {
          id: 'grammar-primary',
          name: 'Grammar',
          topics: [
            {
              id: 'nouns-verbs',
              title: 'Nouns and verbs',
              outcome: 'Pick out the naming word and the doing word in a sentence.',
              year: 'Basic 2',
            },
            {
              id: 'singular-plural',
              title: 'Singular and plural',
              outcome: 'Form plurals correctly, including the ones that do not just take an s.',
              year: 'Basic 3',
              needs: ['nouns-verbs'],
            },
            {
              id: 'tenses-primary',
              title: 'Tenses',
              outcome: 'Write the same sentence in the past, present and future.',
              year: 'Basic 4',
              needs: ['nouns-verbs'],
            },
            {
              id: 'subject-verb-agreement',
              title: 'Subject and verb agreement',
              outcome: 'Match the verb to its subject, and catch it when it is wrong.',
              year: 'Basic 5',
              needs: ['tenses-primary', 'singular-plural'],
            },
            {
              id: 'punctuation-primary',
              title: 'Punctuation',
              outcome: 'Use capitals, full stops, question marks, commas and apostrophes correctly.',
              year: 'Basic 4',
              needs: ['write-sentences'],
            },
            {
              id: 'adjectives-adverbs',
              title: 'Adjectives and adverbs',
              outcome: 'Use describing words to make writing exact rather than merely longer.',
              year: 'Basic 5',
              needs: ['nouns-verbs'],
            },
          ],
        },
        {
          id: 'spelling',
          name: 'Spelling',
          topics: [
            {
              id: 'spelling-patterns',
              title: 'Spelling patterns',
              outcome: 'Spell words with common patterns, and use a dictionary for the rest.',
              year: 'Basic 4',
              needs: ['blend-to-read'],
            },
          ],
        },
      ],
    },
    {
      id: 'extensive-reading',
      name: 'Extensive Reading',
      purpose: 'Reading a whole book because you want to, which is what makes readers.',
      subStrands: [
        {
          id: 'library',
          name: 'Reading for yourself',
          topics: [
            {
              id: 'choose-a-book',
              title: 'Choosing a book you can read',
              outcome: 'Pick a book at about your level and say why you chose it.',
              year: 'Basic 3',
            },
            {
              id: 'book-report',
              title: 'Talking about a book you finished',
              outcome: 'Say what a book was about and whether you would tell a friend to read it.',
              year: 'Basic 5',
              needs: ['choose-a-book'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Science ──────────────────────────────────────────────────────────────── */

register({
  subjectId: 'science',
  stage: 'primary',
  subject: 'Science',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'diversity-of-matter',
      name: 'Diversity of Matter',
      purpose: 'What things are made of, and how they are sorted.',
      subStrands: [
        {
          id: 'living-things',
          name: 'Living and non-living things',
          topics: [
            {
              id: 'living-or-not',
              title: 'Living and non-living',
              outcome: 'Sort things into living and non-living, and give the test you used.',
              year: 'Basic 1',
            },
            {
              id: 'plant-parts',
              title: 'Parts of a plant',
              outcome: 'Name the parts of a plant and say what each one does for it.',
              year: 'Basic 2',
              needs: ['living-or-not'],
            },
            {
              id: 'animal-groups',
              title: 'Grouping animals',
              outcome: 'Group animals by how they move, what they eat, or where they live.',
              year: 'Basic 3',
              needs: ['living-or-not'],
            },
          ],
        },
        {
          id: 'materials',
          name: 'Materials',
          topics: [
            {
              id: 'material-properties',
              title: 'Materials and their properties',
              outcome: 'Say why a cooking pot is metal and a window is glass.',
              year: 'Basic 3',
            },
            {
              id: 'states-of-matter',
              title: 'Solids, liquids and gases',
              outcome: 'Sort things into solid, liquid and gas, and describe what changes when ice melts.',
              year: 'Basic 4',
              needs: ['material-properties'],
            },
            {
              id: 'mixtures-primary',
              title: 'Mixtures and separating them',
              outcome: 'Separate a mixture by hand, by sieving and by filtering, and say why each works.',
              year: 'Basic 5',
              needs: ['states-of-matter'],
            },
            {
              id: 'acids-bases-primary',
              title: 'Acids and bases around us',
              outcome: 'Test household liquids and sort them as acidic, basic or neutral.',
              year: 'Basic 6',
              needs: ['mixtures-primary'],
            },
          ],
        },
      ],
    },
    {
      id: 'cycles',
      name: 'Cycles',
      purpose: 'The things in nature that go round and come back.',
      subStrands: [
        {
          id: 'earth-cycles',
          name: 'Cycles in nature',
          topics: [
            {
              id: 'day-night-seasons',
              title: 'Day, night and the seasons',
              outcome: 'Explain day and night by the turning of the Earth, not the moving of the sun.',
              year: 'Basic 3',
            },
            {
              id: 'water-cycle-primary',
              title: 'The water cycle',
              outcome: 'Describe how water leaves the sea and comes back as rain.',
              year: 'Basic 4',
              needs: ['states-of-matter'],
            },
            {
              id: 'life-cycles',
              title: 'Life cycles',
              outcome: 'Describe the life cycle of a mosquito, a butterfly and a bean plant.',
              year: 'Basic 4',
              needs: ['plant-parts', 'animal-groups'],
            },
            {
              id: 'weather-climate-primary',
              title: 'Weather and climate',
              outcome: 'Record the weather for a week and say how weather differs from climate.',
              year: 'Basic 5',
              needs: ['water-cycle-primary'],
            },
          ],
        },
      ],
    },
    {
      id: 'systems',
      name: 'Systems',
      purpose: 'Parts working together, in a body, a machine or a place.',
      subStrands: [
        {
          id: 'body-systems',
          name: 'The human body',
          topics: [
            {
              id: 'sense-organs',
              title: 'The sense organs',
              outcome: 'Name the sense organs, what each senses, and how to protect them.',
              year: 'Basic 2',
            },
            {
              id: 'digestion-primary',
              title: 'Digestion',
              outcome: 'Follow food through the body and say what happens at each stage.',
              year: 'Basic 5',
              needs: ['sense-organs'],
            },
            {
              id: 'breathing-primary',
              title: 'Breathing',
              outcome: 'Describe how air gets into the lungs and what the body takes from it.',
              year: 'Basic 5',
            },
            {
              id: 'teeth-and-care',
              title: 'Teeth',
              outcome: 'Name the kinds of teeth, say what each is for, and explain how decay happens.',
              year: 'Basic 4',
            },
          ],
        },
        {
          id: 'ecosystems-primary',
          name: 'Living things together',
          topics: [
            {
              id: 'food-chains',
              title: 'Food chains',
              outcome: 'Build a food chain from a local habitat and say which way the arrows go.',
              year: 'Basic 5',
              needs: ['animal-groups'],
            },
          ],
        },
      ],
    },
    {
      id: 'forces-energy',
      name: 'Forces and Energy',
      purpose: 'What makes things move, stop, heat up and light up.',
      subStrands: [
        {
          id: 'forces-primary',
          name: 'Forces and movement',
          topics: [
            {
              id: 'push-and-pull',
              title: 'Pushes and pulls',
              outcome: 'Show that a push or pull can start, stop or turn something.',
              year: 'Basic 2',
            },
            {
              id: 'friction-primary',
              title: 'Friction',
              outcome: 'Show friction slowing something down, and say when it helps and when it hinders.',
              year: 'Basic 4',
              needs: ['push-and-pull'],
            },
            {
              id: 'magnets-primary',
              title: 'Magnets',
              outcome: 'Find which materials a magnet attracts, and show like poles pushing apart.',
              year: 'Basic 4',
              needs: ['push-and-pull'],
            },
            {
              id: 'simple-machines-primary',
              title: 'Simple machines',
              outcome: 'Explain how a lever, a pulley or a ramp makes a job easier.',
              year: 'Basic 6',
              needs: ['friction-primary'],
            },
          ],
        },
        {
          id: 'energy-primary',
          name: 'Energy',
          topics: [
            {
              id: 'sources-of-energy',
              title: 'Where energy comes from',
              outcome: 'Name sources of energy used at home and say which are renewable.',
              year: 'Basic 4',
            },
            {
              id: 'light-and-shadow',
              title: 'Light and shadows',
              outcome: 'Show how a shadow forms and how its size changes as the light moves.',
              year: 'Basic 5',
            },
            {
              id: 'heat-transfer-primary',
              title: 'Heat',
              outcome: 'Show heat moving from hot to cold, and name a good and a poor conductor.',
              year: 'Basic 5',
              needs: ['states-of-matter'],
            },
            {
              id: 'electricity-primary',
              title: 'Simple circuits',
              outcome: 'Light a bulb with a cell and wires, and find why a circuit is not working.',
              year: 'Basic 6',
              needs: ['sources-of-energy'],
            },
            {
              id: 'sound-primary',
              title: 'Sound',
              outcome: 'Show that sound comes from something vibrating, and change how high it is.',
              year: 'Basic 6',
            },
          ],
        },
      ],
    },
    {
      id: 'humans-environment',
      name: 'Humans and the Environment',
      purpose: 'Health, food, water and what we do to the place we live in.',
      subStrands: [
        {
          id: 'health-primary',
          name: 'Personal and community health',
          topics: [
            {
              id: 'hygiene-primary',
              title: 'Keeping clean and well',
              outcome: 'Explain how washing hands breaks the path a germ takes.',
              year: 'Basic 1',
            },
            {
              id: 'food-and-nutrition',
              title: 'Food and a balanced diet',
              outcome: 'Sort foods by what they do for the body and build a balanced meal.',
              year: 'Basic 4',
            },
            {
              id: 'diseases-primary',
              title: 'Common diseases and how they spread',
              outcome: 'Explain how malaria and cholera spread, and how each is prevented.',
              year: 'Basic 5',
              needs: ['hygiene-primary', 'life-cycles'],
            },
            {
              id: 'first-aid-primary',
              title: 'Simple first aid',
              outcome: 'Treat a small cut or burn safely and say when to fetch an adult.',
              year: 'Basic 6',
            },
          ],
        },
        {
          id: 'environment-primary',
          name: 'Looking after the environment',
          topics: [
            {
              id: 'waste-primary',
              title: 'Waste and what to do with it',
              outcome: 'Sort waste, and explain what happens when it is burned or left in a gutter.',
              year: 'Basic 4',
            },
            {
              id: 'water-and-sanitation',
              title: 'Clean water',
              outcome: 'Say how water gets dirty and describe two ways to make it safe to drink.',
              year: 'Basic 5',
              needs: ['diseases-primary'],
            },
            {
              id: 'soil-and-farming',
              title: 'Soil and growing food',
              outcome: 'Compare soils for growing, and say what plants take from the soil.',
              year: 'Basic 5',
              needs: ['plant-parts'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Our World Our People ─────────────────────────────────────────────────── */

register({
  subjectId: 'owop',
  stage: 'primary',
  subject: 'Our World Our People',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'all-about-us',
      name: 'All About Us',
      purpose: 'The self, the family, and growing up.',
      subStrands: [
        {
          id: 'self-family',
          name: 'Myself and my family',
          topics: [
            {
              id: 'who-i-am',
              title: 'Who I am',
              outcome: 'Say your full name, age, town and what makes you yourself.',
              year: 'Basic 1',
            },
            {
              id: 'family-roles',
              title: 'Roles in the family',
              outcome: 'Describe what each member of a household contributes.',
              year: 'Basic 2',
              needs: ['who-i-am'],
            },
            {
              id: 'growing-up',
              title: 'Growing and changing',
              outcome: 'Describe how people change from baby to adult and what each stage needs.',
              year: 'Basic 4',
              needs: ['family-roles'],
            },
          ],
        },
      ],
    },
    {
      id: 'our-beliefs',
      name: 'All Around Us',
      purpose: 'The environment, and the people and institutions in it.',
      subStrands: [
        {
          id: 'environment-owop',
          name: 'Our environment',
          topics: [
            {
              id: 'my-community-owop',
              title: 'My community',
              outcome: 'Describe your community and draw a simple map of it.',
              year: 'Basic 2',
            },
            {
              id: 'natural-features',
              title: 'Natural features of Ghana',
              outcome: 'Name major rivers, lakes and regions and say where you are among them.',
              year: 'Basic 4',
              needs: ['my-community-owop'],
            },
            {
              id: 'ghana-map',
              title: 'Reading a map of Ghana',
              outcome: 'Use a key and the directions to find places on a map.',
              year: 'Basic 5',
              needs: ['natural-features'],
            },
          ],
        },
        {
          id: 'institutions',
          name: 'Our institutions',
          topics: [
            {
              id: 'school-and-rules',
              title: 'Rules and why they exist',
              outcome: 'Explain a school rule by what would happen without it.',
              year: 'Basic 2',
            },
            {
              id: 'community-leaders',
              title: 'Leaders in the community',
              outcome: 'Name local leaders and describe what each is responsible for.',
              year: 'Basic 4',
              needs: ['school-and-rules'],
            },
            {
              id: 'citizenship-primary',
              title: 'Being a good citizen',
              outcome: 'Give examples of rights and the duty that sits beside each one.',
              year: 'Basic 6',
              needs: ['community-leaders'],
            },
          ],
        },
      ],
    },
    {
      id: 'our-nation',
      name: 'Our Nation Ghana',
      purpose: 'The country, its history and its symbols.',
      subStrands: [
        {
          id: 'nation',
          name: 'Ghana',
          topics: [
            {
              id: 'national-symbols',
              title: 'Our national symbols',
              outcome: 'Name the flag’s colours and what each stands for, and sing the anthem.',
              year: 'Basic 3',
            },
            {
              id: 'independence',
              title: 'How Ghana became independent',
              outcome: 'Say when independence came and name people who brought it about.',
              year: 'Basic 5',
              needs: ['national-symbols'],
            },
            {
              id: 'our-cultures',
              title: 'The peoples of Ghana',
              outcome: 'Name major ethnic groups and describe a festival of one of them.',
              year: 'Basic 4',
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
  stage: 'primary',
  subject: 'Religious and Moral Education',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'god-and-creation',
      name: 'God, His Creation and Attributes',
      purpose: 'What the major faiths in Ghana teach about God and the created world.',
      subStrands: [
        {
          id: 'creation',
          name: 'Creation',
          topics: [
            {
              id: 'creation-accounts',
              title: 'Accounts of creation',
              outcome: 'Retell how creation is described in the faiths practised in Ghana.',
              year: 'Basic 2',
            },
            {
              id: 'caring-for-creation',
              title: 'Caring for what was created',
              outcome: 'Explain, from your own faith, why the environment must be cared for.',
              year: 'Basic 4',
              needs: ['creation-accounts'],
            },
          ],
        },
      ],
    },
    {
      id: 'religious-practices',
      name: 'Religious Practices',
      purpose: 'Worship, festivals and the leaders of each tradition.',
      subStrands: [
        {
          id: 'worship',
          name: 'Worship and festivals',
          topics: [
            {
              id: 'how-we-worship',
              title: 'How people worship',
              outcome: 'Describe worship in Christianity, Islam and Ghanaian traditional religion.',
              year: 'Basic 3',
            },
            {
              id: 'religious-festivals',
              title: 'Religious festivals',
              outcome: 'Describe a major festival of each faith and what it remembers.',
              year: 'Basic 4',
              needs: ['how-we-worship'],
            },
            {
              id: 'religious-leaders',
              title: 'Founders and leaders',
              outcome: 'Say who founded each faith and give one thing each taught.',
              year: 'Basic 5',
              needs: ['how-we-worship'],
            },
          ],
        },
      ],
    },
    {
      id: 'moral-life',
      name: 'The Family and the Community',
      purpose: 'How belief becomes behaviour, at home and outside it.',
      subStrands: [
        {
          id: 'moral-values',
          name: 'Moral values',
          topics: [
            {
              id: 'honesty-and-truth',
              title: 'Honesty',
              outcome: 'Give a real example of honesty costing something, and why it was still right.',
              year: 'Basic 2',
            },
            {
              id: 'respect-and-obedience',
              title: 'Respect for others',
              outcome: 'Describe how to treat elders, peers and people unlike you.',
              year: 'Basic 3',
            },
            {
              id: 'hard-work',
              title: 'Work and its rewards',
              outcome: 'Explain why work is valued in your faith and give an example.',
              year: 'Basic 4',
            },
            {
              id: 'forgiveness',
              title: 'Forgiveness and living together',
              outcome: 'Describe a quarrel and how it could be settled well.',
              year: 'Basic 5',
              needs: ['respect-and-obedience'],
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
  stage: 'primary',
  subject: 'Computing',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'components',
      name: 'Introduction to Computing',
      purpose: 'What the machine is made of and what each part does.',
      subStrands: [
        {
          id: 'hardware',
          name: 'Parts of a computer',
          topics: [
            {
              id: 'name-the-parts',
              title: 'Naming the parts',
              outcome: 'Name the monitor, keyboard, mouse and system unit and what each does.',
              year: 'Basic 1',
            },
            {
              id: 'input-output',
              title: 'Input and output',
              outcome: 'Sort devices into input and output, and say what decided it.',
              year: 'Basic 3',
              needs: ['name-the-parts'],
            },
            {
              id: 'storage-devices',
              title: 'Storing work',
              outcome: 'Save a file, find it again, and explain where it actually went.',
              year: 'Basic 4',
              needs: ['input-output'],
            },
          ],
        },
      ],
    },
    {
      id: 'productivity',
      name: 'Productivity Software',
      purpose: 'Using a computer to do something you actually needed done.',
      subStrands: [
        {
          id: 'word-processing',
          name: 'Word processing and presentation',
          topics: [
            {
              id: 'typing',
              title: 'Typing',
              outcome: 'Type a short passage using both hands and the correct keys.',
              year: 'Basic 3',
              needs: ['name-the-parts'],
            },
            {
              id: 'format-a-document',
              title: 'Formatting a document',
              outcome: 'Type and lay out a letter with headings, bold text and a picture.',
              year: 'Basic 5',
              needs: ['typing', 'storage-devices'],
            },
            {
              id: 'presentation-primary',
              title: 'Making a presentation',
              outcome: 'Build a few slides on a topic and present them to the class.',
              year: 'Basic 6',
              needs: ['format-a-document'],
            },
          ],
        },
        {
          id: 'spreadsheet-primary',
          name: 'Spreadsheets',
          topics: [
            {
              id: 'simple-spreadsheet',
              title: 'Rows, columns and a total',
              outcome: 'Enter data in a spreadsheet and total a column with a formula.',
              year: 'Basic 6',
              needs: ['format-a-document'],
            },
          ],
        },
      ],
    },
    {
      id: 'communication-networks',
      name: 'Communication and Networks',
      purpose: 'How machines reach each other, and how to be safe when they do.',
      subStrands: [
        {
          id: 'internet-primary',
          name: 'The internet',
          topics: [
            {
              id: 'searching',
              title: 'Searching for something',
              outcome: 'Search for information and say how you judged whether to believe it.',
              year: 'Basic 5',
            },
            {
              id: 'online-safety',
              title: 'Staying safe online',
              outcome: 'Say what must never be shared online, and who to tell if something worries you.',
              year: 'Basic 4',
            },
          ],
        },
      ],
    },
    {
      id: 'programming-primary',
      name: 'Programming and Algorithms',
      purpose: 'Telling a machine exactly what to do, in order.',
      subStrands: [
        {
          id: 'algorithms-primary',
          name: 'Algorithms',
          topics: [
            {
              id: 'steps-in-order',
              title: 'Instructions in the right order',
              outcome: 'Write the steps for an everyday task so somebody else could follow them exactly.',
              year: 'Basic 4',
            },
            {
              id: 'block-programming',
              title: 'Programming with blocks',
              outcome: 'Make a character move and repeat actions using blocks, and fix it when it misbehaves.',
              year: 'Basic 5',
              needs: ['steps-in-order'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Creative Arts ────────────────────────────────────────────────────────── */

register({
  subjectId: 'arts',
  stage: 'primary',
  subject: 'Creative Arts',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'visual-arts',
      name: 'Visual Arts',
      purpose: 'Making things that are looked at, and knowing why they work.',
      subStrands: [
        {
          id: 'making-visual',
          name: 'Making',
          topics: [
            {
              id: 'drawing-primary',
              title: 'Drawing from observation',
              outcome: 'Draw an object in front of you with its proportions roughly right.',
              year: 'Basic 2',
            },
            {
              id: 'colour-primary',
              title: 'Colour',
              outcome: 'Mix secondary colours and say which colours sit well together.',
              year: 'Basic 3',
              needs: ['drawing-primary'],
            },
            {
              id: 'ghanaian-crafts',
              title: 'Ghanaian crafts',
              outcome: 'Describe kente, adinkra or pottery, and make something in that manner.',
              year: 'Basic 4',
              needs: ['colour-primary'],
            },
            {
              id: 'weaving-modelling',
              title: 'Weaving and modelling',
              outcome: 'Weave with paper or raffia, or model a pot, and say how it was made.',
              year: 'Basic 5',
              needs: ['ghanaian-crafts'],
            },
          ],
        },
      ],
    },
    {
      id: 'performing-arts',
      name: 'Performing Arts',
      purpose: 'Music, dance and drama as things done rather than watched.',
      subStrands: [
        {
          id: 'music-primary',
          name: 'Music and dance',
          topics: [
            {
              id: 'rhythm-primary',
              title: 'Rhythm and beat',
              outcome: 'Keep a beat and clap a rhythm back after hearing it once.',
              year: 'Basic 2',
            },
            {
              id: 'singing-primary',
              title: 'Singing together',
              outcome: 'Sing a Ghanaian song in tune with others, and lead a verse.',
              year: 'Basic 3',
              needs: ['rhythm-primary'],
            },
            {
              id: 'local-instruments',
              title: 'Our instruments',
              outcome: 'Name local instruments, say how each makes its sound, and play one.',
              year: 'Basic 5',
              needs: ['rhythm-primary'],
            },
            {
              id: 'drama-primary',
              title: 'Drama',
              outcome: 'Take a part in a short play and perform it for an audience.',
              year: 'Basic 4',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Ghanaian Language ────────────────────────────────────────────────────── */

register({
  subjectId: 'ghl',
  stage: 'primary',
  subject: 'Ghanaian Language',
  source: 'MODEL',
  note: 'A standard outline. The tutor will ask which language you are studying, '
    + 'and your school can add its own.',
  strands: [
    {
      id: 'oral-ghl',
      name: 'Oral Language',
      purpose: 'Speaking and hearing the language as it is actually spoken.',
      subStrands: [
        {
          id: 'speaking-ghl',
          name: 'Speaking and listening',
          topics: [
            {
              id: 'greetings-ghl',
              title: 'Greetings and courtesies',
              outcome: 'Greet correctly for the time of day and for the age of the person.',
              year: 'Basic 1',
            },
            {
              id: 'everyday-talk-ghl',
              title: 'Everyday conversation',
              outcome: 'Hold a short conversation about home, school and the market.',
              year: 'Basic 3',
              needs: ['greetings-ghl'],
            },
            {
              id: 'proverbs-ghl',
              title: 'Proverbs and their meanings',
              outcome: 'Say a proverb and explain the situation it is used in.',
              year: 'Basic 5',
              needs: ['everyday-talk-ghl'],
            },
            {
              id: 'folktales-ghl',
              title: 'Folktales',
              outcome: 'Tell a folktale in the language and say what it teaches.',
              year: 'Basic 4',
              needs: ['everyday-talk-ghl'],
            },
          ],
        },
      ],
    },
    {
      id: 'reading-ghl',
      name: 'Reading',
      purpose: 'Reading the language, which is spelt as it sounds far more than English is.',
      subStrands: [
        {
          id: 'decoding-ghl',
          name: 'Reading and comprehension',
          topics: [
            {
              id: 'sounds-ghl',
              title: 'The sounds and letters of the language',
              outcome: 'Read the letters, including the ones English does not have.',
              year: 'Basic 2',
            },
            {
              id: 'read-passages-ghl',
              title: 'Reading passages',
              outcome: 'Read a short passage aloud and answer questions on it.',
              year: 'Basic 4',
              needs: ['sounds-ghl'],
            },
          ],
        },
      ],
    },
    {
      id: 'writing-ghl',
      name: 'Writing and Grammar',
      purpose: 'Writing the language correctly, including its marks and tones.',
      subStrands: [
        {
          id: 'composition-ghl',
          name: 'Writing',
          topics: [
            {
              id: 'write-sentences-ghl',
              title: 'Writing sentences',
              outcome: 'Write correct sentences with the proper letters and marks.',
              year: 'Basic 3',
              needs: ['sounds-ghl'],
            },
            {
              id: 'compose-ghl',
              title: 'Writing a composition',
              outcome: 'Write a short composition or letter in the language.',
              year: 'Basic 5',
              needs: ['write-sentences-ghl'],
            },
            {
              id: 'translate-ghl',
              title: 'Translating',
              outcome: 'Translate short passages both ways without losing the meaning.',
              year: 'Basic 6',
              needs: ['compose-ghl'],
            },
          ],
        },
      ],
    },
  ],
})
