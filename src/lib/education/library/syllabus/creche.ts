/**
 * The early years: creche, nursery and kindergarten.
 *
 * These outlines are shaped differently from every other stage, because the
 * learner cannot read them. A four year old does not study; they are played
 * with in the direction of an idea. So every outcome here is written as
 * something a child DOES with something they can hold, and an adult is assumed
 * to be sitting with them.
 *
 * That assumption is already in the data model: `forChild` on the profile, and
 * `ANSWERED_BY_ADULT` in `learner.ts`. The tutor is told the same, so it writes
 * to the parent about the child rather than to a child who cannot read yet.
 *
 * Nothing here is symbolic. No digits standing alone, no letter names before
 * their sounds, no arithmetic written down. Those come at primary, and pushing
 * them earlier teaches a child that the subject is a mystery.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard early years outline, until your school adds its own.'

/* ── Numeracy ─────────────────────────────────────────────────────────────── */

register({
  subjectId: 'numeracy',
  stage: 'creche',
  subject: 'Numeracy',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'counting',
      name: 'Counting and number sense',
      purpose: 'Knowing how many, and that the last word you say is the answer.',
      subStrands: [
        {
          id: 'saying-numbers',
          name: 'Saying the number names',
          topics: [
            {
              id: 'count-to-five',
              title: 'Counting to five',
              outcome: 'Say one to five in order, without skipping or repeating.',
              year: 'Creche',
            },
            {
              id: 'count-to-ten',
              title: 'Counting to ten',
              outcome: 'Say one to ten in order, and carry on from a number you are given.',
              year: 'Nursery',
              needs: ['count-to-five'],
            },
            {
              id: 'count-to-twenty',
              title: 'Counting to twenty',
              outcome: 'Count to twenty, and know that the teens are ten and some more.',
              year: 'KG 1',
              needs: ['count-to-ten'],
            },
            {
              id: 'count-back',
              title: 'Counting backwards',
              outcome: 'Count back from ten to one, which is what taking away sounds like.',
              year: 'KG 2',
              needs: ['count-to-ten'],
            },
          ],
        },
        {
          id: 'how-many',
          name: 'Finding how many',
          topics: [
            {
              id: 'touch-and-count',
              title: 'Touching each thing once',
              outcome: 'Count a row of objects by touching each one exactly once.',
              year: 'Nursery',
              needs: ['count-to-five'],
            },
            {
              id: 'last-word-counts',
              title: 'The last number is the answer',
              outcome: 'Say how many there are without counting the row all over again.',
              year: 'KG 1',
              needs: ['touch-and-count'],
            },
            {
              id: 'see-small-numbers',
              title: 'Seeing small amounts at a glance',
              outcome: 'Say how many dots or fingers there are, up to five, without counting.',
              year: 'KG 1',
              needs: ['touch-and-count'],
            },
            {
              id: 'same-number-moved',
              title: 'Moving things does not change how many',
              outcome: 'Know that spreading four stones out still leaves four stones.',
              year: 'KG 2',
              needs: ['last-word-counts'],
            },
          ],
        },
        {
          id: 'compare',
          name: 'More, fewer and the same',
          topics: [
            {
              id: 'more-or-fewer',
              title: 'Which group has more',
              outcome: 'Match two groups one to one and say which has more, fewer, or the same.',
              year: 'KG 1',
              needs: ['touch-and-count'],
            },
            {
              id: 'one-more-one-less',
              title: 'One more and one less',
              outcome: 'Say what one more and one less than a number up to ten is.',
              year: 'KG 2',
              needs: ['count-to-ten', 'count-back'],
            },
          ],
        },
      ],
    },
    {
      id: 'putting-together',
      name: 'Putting together and taking away',
      purpose: 'The two things you can do to an amount, done with real objects.',
      subStrands: [
        {
          id: 'joining',
          name: 'Joining groups',
          topics: [
            {
              id: 'join-two-groups',
              title: 'Two groups become one',
              outcome: 'Join two small groups of objects and count how many altogether.',
              year: 'KG 1',
              needs: ['last-word-counts'],
            },
            {
              id: 'take-some-away',
              title: 'Taking some away',
              outcome: 'Take some objects out of a group and count what is left.',
              year: 'KG 2',
              needs: ['join-two-groups'],
            },
            {
              id: 'number-stories',
              title: 'Number stories out loud',
              outcome: 'Answer "three mangoes and two more" without anything being written down.',
              year: 'KG 2',
              needs: ['join-two-groups', 'take-some-away'],
            },
          ],
        },
        {
          id: 'sharing',
          name: 'Sharing fairly',
          topics: [
            {
              id: 'share-equally',
              title: 'Giving everyone the same',
              outcome: 'Share a handful of objects between two or three people fairly.',
              year: 'KG 2',
              needs: ['touch-and-count'],
            },
          ],
        },
      ],
    },
    {
      id: 'shape-space',
      name: 'Shape and space',
      purpose: 'Naming what things look like, and saying where they are.',
      subStrands: [
        {
          id: 'shapes',
          name: 'Shapes around us',
          topics: [
            {
              id: 'name-shapes',
              title: 'Circle, square, triangle',
              outcome: 'Point out circles, squares and triangles on real things in the room.',
              year: 'Nursery',
            },
            {
              id: 'sort-shapes',
              title: 'Sorting by shape and size',
              outcome: 'Put objects into groups by shape, by size, or by colour, and say why.',
              year: 'KG 1',
              needs: ['name-shapes'],
            },
            {
              id: 'patterns',
              title: 'Carrying on a pattern',
              outcome: 'Continue a red, blue, red, blue pattern and make one of your own.',
              year: 'KG 2',
              needs: ['sort-shapes'],
            },
          ],
        },
        {
          id: 'position',
          name: 'Where things are',
          topics: [
            {
              id: 'position-words',
              title: 'On, under, behind, beside',
              outcome: 'Put an object where you are told, and say where something is.',
              year: 'Nursery',
            },
          ],
        },
      ],
    },
    {
      id: 'measure-early',
      name: 'Measuring',
      purpose: 'Comparing things before any ruler is involved.',
      subStrands: [
        {
          id: 'compare-size',
          name: 'Comparing size and weight',
          topics: [
            {
              id: 'long-short',
              title: 'Longer, shorter, taller',
              outcome: 'Put three sticks in order from shortest to longest.',
              year: 'KG 1',
            },
            {
              id: 'heavy-light',
              title: 'Heavier and lighter',
              outcome: 'Hold two things and say which is heavier, then check on a balance.',
              year: 'KG 2',
              needs: ['long-short'],
            },
            {
              id: 'full-empty',
              title: 'Full, empty and half',
              outcome: 'Fill a cup to full, to empty and to about half, using water or sand.',
              year: 'KG 2',
            },
          ],
        },
        {
          id: 'time-early',
          name: 'Time and money',
          topics: [
            {
              id: 'day-order',
              title: 'What comes first in the day',
              outcome: 'Put morning, afternoon and night in order, and name the days.',
              year: 'KG 1',
            },
            {
              id: 'know-coins',
              title: 'Recognising our coins',
              outcome: 'Name the cedi coins and say which buys more.',
              year: 'KG 2',
              needs: ['more-or-fewer'],
            },
          ],
        },
      ],
    },
    {
      id: 'writing-numbers',
      name: 'Writing numbers',
      purpose: 'The written symbol, last, once the amount is already understood.',
      subStrands: [
        {
          id: 'numerals',
          name: 'Numerals',
          topics: [
            {
              id: 'match-numeral',
              title: 'Matching the numeral to the amount',
              outcome: 'Put the card marked 4 beside the group of four objects.',
              year: 'KG 1',
              needs: ['last-word-counts'],
            },
            {
              id: 'write-numerals',
              title: 'Writing 0 to 10',
              outcome: 'Form the numerals 0 to 10 the right way round.',
              year: 'KG 2',
              needs: ['match-numeral'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Literacy ─────────────────────────────────────────────────────────────── */

register({
  subjectId: 'literacy',
  stage: 'creche',
  subject: 'Literacy',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'oral',
      name: 'Speaking and listening',
      purpose: 'Language is spoken long before it is read, and this is where reading starts.',
      subStrands: [
        {
          id: 'talking',
          name: 'Talking and being understood',
          topics: [
            {
              id: 'say-my-name',
              title: 'My own name and my people',
              outcome: 'Say your own name, and name the people you live with.',
              year: 'Creche',
            },
            {
              id: 'ask-and-answer',
              title: 'Answering a question asked of you',
              outcome: 'Answer who, what and where questions about something you just did.',
              year: 'Nursery',
              needs: ['say-my-name'],
            },
            {
              id: 'tell-what-happened',
              title: 'Telling what happened',
              outcome: 'Tell something that happened at home, in order, in a few sentences.',
              year: 'KG 1',
              needs: ['ask-and-answer'],
            },
            {
              id: 'follow-two-steps',
              title: 'Following two instructions',
              outcome: 'Do two things you were asked, in the right order.',
              year: 'KG 1',
            },
          ],
        },
        {
          id: 'stories',
          name: 'Listening to stories',
          topics: [
            {
              id: 'listen-to-story',
              title: 'Sitting with a story',
              outcome: 'Listen to a short story and say who was in it and what they did.',
              year: 'Nursery',
            },
            {
              id: 'what-happens-next',
              title: 'Guessing what happens next',
              outcome: 'Say what you think comes next, and why you think so.',
              year: 'KG 1',
              needs: ['listen-to-story'],
            },
            {
              id: 'retell',
              title: 'Telling the story back',
              outcome: 'Retell a familiar story with the beginning, middle and end in order.',
              year: 'KG 2',
              needs: ['what-happens-next'],
            },
          ],
        },
      ],
    },
    {
      id: 'sounds',
      name: 'Sounds in words',
      purpose: 'Hearing the pieces a word is made of, which is what makes reading possible.',
      subStrands: [
        {
          id: 'hearing',
          name: 'Hearing the pieces',
          topics: [
            {
              id: 'rhyme',
              title: 'Words that rhyme',
              outcome: 'Say whether two words end with the same sound, and give another.',
              year: 'Nursery',
            },
            {
              id: 'first-sound',
              title: 'The sound a word starts with',
              outcome: 'Say the first sound in your name, and find something that starts the same.',
              year: 'KG 1',
              needs: ['rhyme'],
            },
            {
              id: 'clap-syllables',
              title: 'Clapping the beats in a word',
              outcome: 'Clap once for each part of a word, like Ku-ma-si.',
              year: 'KG 1',
            },
            {
              id: 'blend-sounds',
              title: 'Pushing sounds together into a word',
              outcome: 'Hear c, a, t said separately and say the word.',
              year: 'KG 2',
              needs: ['first-sound'],
            },
            {
              id: 'pull-apart',
              title: 'Pulling a word into its sounds',
              outcome: 'Say the three sounds in a short word, in order.',
              year: 'KG 2',
              needs: ['blend-sounds'],
            },
          ],
        },
      ],
    },
    {
      id: 'letters',
      name: 'Letters and print',
      purpose: 'Which mark makes which sound, and how a book works.',
      subStrands: [
        {
          id: 'print',
          name: 'How print works',
          topics: [
            {
              id: 'hold-a-book',
              title: 'Holding a book the right way',
              outcome: 'Hold a book upright, turn pages one at a time, and follow from left to right.',
              year: 'Nursery',
            },
            {
              id: 'print-carries-meaning',
              title: 'The marks say something',
              outcome: 'Understand that the adult is reading the print, not the picture.',
              year: 'KG 1',
              needs: ['hold-a-book'],
            },
          ],
        },
        {
          id: 'letter-sounds',
          name: 'Letters and their sounds',
          topics: [
            {
              id: 'letter-shapes',
              title: 'Recognising letters',
              outcome: 'Point out the letters of your own name wherever you see them.',
              year: 'KG 1',
              needs: ['print-carries-meaning'],
            },
            {
              id: 'sound-per-letter',
              title: 'The sound each letter makes',
              outcome: 'Give the sound for most single letters when you see them.',
              year: 'KG 2',
              needs: ['letter-shapes', 'first-sound'],
            },
            {
              id: 'read-short-words',
              title: 'Reading a short word',
              outcome: 'Sound out and read simple three letter words.',
              year: 'KG 2',
              needs: ['sound-per-letter', 'blend-sounds'],
            },
          ],
        },
      ],
    },
    {
      id: 'writing-early',
      name: 'Writing',
      purpose: 'Making marks on purpose, ending with your own name.',
      subStrands: [
        {
          id: 'mark-making',
          name: 'Making marks',
          topics: [
            {
              id: 'hold-pencil',
              title: 'Holding a pencil',
              outcome: 'Hold a pencil steadily and draw lines and circles on purpose.',
              year: 'Nursery',
            },
            {
              id: 'draw-and-say',
              title: 'Drawing something and saying what it is',
              outcome: 'Draw a picture of something that happened and tell an adult about it.',
              year: 'KG 1',
              needs: ['hold-pencil'],
            },
            {
              id: 'write-my-name',
              title: 'Writing my own name',
              outcome: 'Write your own first name without copying it.',
              year: 'KG 2',
              needs: ['letter-shapes', 'hold-pencil'],
            },
            {
              id: 'write-letters',
              title: 'Forming letters',
              outcome: 'Form most lower case letters recognisably.',
              year: 'KG 2',
              needs: ['write-my-name'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Our World Our People ─────────────────────────────────────────────────── */

register({
  subjectId: 'owop-early',
  stage: 'creche',
  subject: 'Our World Our People',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'myself',
      name: 'Myself and my family',
      purpose: 'Who I am, and who I belong to.',
      subStrands: [
        {
          id: 'me',
          name: 'All about me',
          topics: [
            {
              id: 'my-body',
              title: 'Parts of my body',
              outcome: 'Name the main parts of your body and say what each one does.',
              year: 'Creche',
            },
            {
              id: 'keeping-clean',
              title: 'Keeping myself clean',
              outcome: 'Wash your hands properly, and say when it matters most.',
              year: 'Nursery',
            },
            {
              id: 'my-family',
              title: 'The people in my family',
              outcome: 'Name the people at home and say what each one does for the family.',
              year: 'KG 1',
            },
            {
              id: 'my-feelings',
              title: 'How I am feeling',
              outcome: 'Name what you are feeling and say what caused it.',
              year: 'KG 1',
            },
          ],
        },
      ],
    },
    {
      id: 'community',
      name: 'My community',
      purpose: 'The places and people just outside the house.',
      subStrands: [
        {
          id: 'around-us',
          name: 'Around where I live',
          topics: [
            {
              id: 'my-home-town',
              title: 'Where I live',
              outcome: 'Say the name of your town or village and something found there.',
              year: 'KG 1',
            },
            {
              id: 'people-who-help',
              title: 'People who help us',
              outcome: 'Name people who help the community and say what each one does.',
              year: 'KG 2',
              needs: ['my-home-town'],
            },
            {
              id: 'staying-safe',
              title: 'Keeping safe',
              outcome: 'Say what is not safe to touch, and who to tell.',
              year: 'KG 2',
            },
            {
              id: 'our-celebrations',
              title: 'Our festivals and celebrations',
              outcome: 'Talk about a festival your family keeps and what happens at it.',
              year: 'KG 2',
              needs: ['my-family'],
            },
          ],
        },
      ],
    },
    {
      id: 'environment-early',
      name: 'The world around me',
      purpose: 'Living things, weather, and looking after both.',
      subStrands: [
        {
          id: 'living',
          name: 'Living and non-living things',
          topics: [
            {
              id: 'plants-animals',
              title: 'Plants and animals near us',
              outcome: 'Name plants and animals you see, and say which are kept and which are wild.',
              year: 'KG 1',
            },
            {
              id: 'what-living-needs',
              title: 'What living things need',
              outcome: 'Say that plants and animals need water, food and air.',
              year: 'KG 2',
              needs: ['plants-animals'],
            },
            {
              id: 'weather-early',
              title: 'Today’s weather',
              outcome: 'Say what the weather is today and what to wear or carry.',
              year: 'KG 1',
            },
            {
              id: 'caring-for-place',
              title: 'Keeping our place clean',
              outcome: 'Put rubbish where it belongs and say why it matters.',
              year: 'KG 2',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Creative Arts ────────────────────────────────────────────────────────── */

register({
  subjectId: 'arts-early',
  stage: 'creche',
  subject: 'Creative Arts',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'making',
      name: 'Making things',
      purpose: 'Using hands and materials to make something that was your idea.',
      subStrands: [
        {
          id: 'draw-paint',
          name: 'Drawing, painting and modelling',
          topics: [
            {
              id: 'colour-play',
              title: 'Colours and mixing them',
              outcome: 'Name the main colours and see what happens when two are mixed.',
              year: 'Nursery',
            },
            {
              id: 'draw-what-i-see',
              title: 'Drawing something real',
              outcome: 'Draw something in front of you and point out its parts.',
              year: 'KG 1',
              needs: ['colour-play'],
            },
            {
              id: 'clay-modelling',
              title: 'Modelling with clay',
              outcome: 'Roll, pinch and join clay to make a simple object.',
              year: 'KG 1',
            },
            {
              id: 'make-from-scrap',
              title: 'Making something from what we have',
              outcome: 'Make something useful or pretty from boxes, bottle tops or leaves.',
              year: 'KG 2',
              needs: ['clay-modelling'],
            },
          ],
        },
      ],
    },
    {
      id: 'performing',
      name: 'Music, dance and drama',
      purpose: 'Rhythm, movement and pretending, which is how children rehearse the world.',
      subStrands: [
        {
          id: 'music-dance',
          name: 'Singing, clapping and dancing',
          topics: [
            {
              id: 'sing-along',
              title: 'Singing our songs',
              outcome: 'Sing familiar songs and rhymes with the group.',
              year: 'Creche',
            },
            {
              id: 'keep-a-beat',
              title: 'Keeping the beat',
              outcome: 'Clap or drum steadily along with a song.',
              year: 'Nursery',
              needs: ['sing-along'],
            },
            {
              id: 'move-to-music',
              title: 'Dancing to what you hear',
              outcome: 'Move fast for fast music and slow for slow, and follow a simple dance.',
              year: 'KG 1',
              needs: ['keep-a-beat'],
            },
            {
              id: 'pretend-play',
              title: 'Acting it out',
              outcome: 'Take a part in a pretend scene and stay in it.',
              year: 'KG 2',
            },
          ],
        },
      ],
    },
  ],
})
