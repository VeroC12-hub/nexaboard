/**
 * Stored lessons for JHS Integrated Science.
 *
 * The first file of its kind, written by hand rather than generated, so the
 * shape in `taught.ts` was decided against real material instead of against an
 * imagined lesson. Everything here is ordinary school science that needs no
 * document to assert: what an element is, why a mixture separates and a
 * compound does not. Nothing claims an indicator code, a paper or a mark
 * allocation, which is the line `capability.ts` draws.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line. Generated lessons arrive as `GENERATED` and `approved: false`
 * and are not served until somebody has read them.
 */

import { teach } from '../../taught-registry'

teach({
  topicId: 'elements-compounds',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Everything around you is made of about a hundred basic substances called '
    + 'elements. An element cannot be broken into anything simpler by any '
    + 'ordinary means: iron is iron all the way down. When two or more elements '
    + 'join chemically they make a compound, and the compound is a new substance '
    + 'with its own properties. When substances are only mixed together, without '
    + 'joining chemically, you have a mixture, and each one keeps being itself.',

  mechanism:
    'The difference that matters is whether the substances are joined or only '
    + 'sitting together. In a compound the atoms are bonded, in a fixed ratio, '
    + 'and it takes a chemical reaction to separate them. Water is always two '
    + 'hydrogen to one oxygen, and nothing you do by hand will get the hydrogen '
    + 'back out. In a mixture nothing is bonded, the proportions can be anything '
    + 'you like, and a physical method is enough to separate it. That single '
    + 'question, are they joined or only together, decides every other '
    + 'difference between the two.',

  recap:
    'Everything is made of particles that are too small to see. In a solid they '
    + 'are packed close and only vibrate, in a liquid they are close but slide '
    + 'past each other, and in a gas they are far apart and move freely. That is '
    + 'the picture you need here, because the difference between a compound and '
    + 'a mixture is a question about what those particles are doing: joined to '
    + 'each other, or merely nearby.',

  method: [
    'Ask first: is it one kind of atom only? If yes, it is an element.',
    'If not, ask: are the different atoms chemically joined?',
    'If they are joined, in a fixed ratio, making a substance with new '
      + 'properties, it is a compound.',
    'If they are not joined, and each part keeps its own properties, it is a '
      + 'mixture.',
    'Check your answer with the separation test: if a physical method like '
      + 'filtering, evaporating or using a magnet would separate it, it was a '
      + 'mixture.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Is sea water an element, a compound or a mixture?',
      steps: [
        'Is it one kind of atom only? No, it contains water and salt and more.',
        'Are they chemically joined? No. The salt is dissolved in the water, '
          + 'not bonded to it.',
        'Could a physical method separate them? Yes. Leave it in the sun and '
          + 'the water evaporates, leaving the salt.',
      ],
      answer: 'A mixture.',
    },
    {
      level: 2,
      ask: 'Air is often called a mixture. Give one piece of evidence for that.',
      steps: [
        'A mixture has no fixed proportions, and air does not: the amount of '
          + 'water vapour in it changes from day to day.',
        'A mixture can be separated physically, and air can be: cooling it '
          + 'until it liquefies separates the nitrogen from the oxygen, because '
          + 'they boil at different temperatures.',
      ],
      answer: 'Either reason is enough. The proportions vary, and it separates '
        + 'by a physical method.',
    },
    {
      level: 3,
      ask: 'Iron filings and sulphur powder are stirred together, then heated '
        + 'strongly. Before heating, a magnet pulls the iron out. After heating, '
        + 'it does not. Explain what happened.',
      steps: [
        'Before heating, the two were only mixed. Each kept its own properties, '
          + 'so the iron was still magnetic and came out on the magnet.',
        'Heating supplied the energy for a chemical reaction between them.',
        'The iron and sulphur joined to form a compound, iron sulphide, which '
          + 'is a new substance with its own properties.',
        'Iron sulphide is not magnetic, so the magnet no longer separates it. '
          + 'The iron has not gone anywhere; it is now bonded.',
      ],
      answer: 'A mixture became a compound. The loss of magnetism is the '
        + 'evidence that a new substance formed.',
    },
  ],

  traps: [
    {
      mistake: 'Calling anything that looks uniform a compound.',
      why: 'Sea water and air both look like one thing, and both are mixtures. '
        + 'Uniform appearance is not the test; whether the substances are '
        + 'chemically joined is.',
    },
    {
      mistake: 'Saying a compound is "a mixture of elements".',
      why: 'It uses the word being tested. A compound is elements chemically '
        + 'joined, and saying mixture in the same sentence throws away the very '
        + 'distinction the question is about.',
    },
    {
      mistake: 'Thinking a compound must contain different elements in equal '
        + 'amounts.',
      why: 'Fixed does not mean equal. Water is fixed at two hydrogen to one '
        + 'oxygen, and that ratio is what makes it fixed, not that the numbers '
        + 'match.',
    },
  ],

  extension:
    'The line between mixture and compound is sharper in a textbook than in a '
    + 'laboratory. Alloys such as brass are metals mixed at the atomic level: '
    + 'no chemical bond in the ordinary sense, but they cannot be separated by '
    + 'filtering either, and they have properties neither metal had alone. '
    + 'Solutions raise the same question. What you are really being asked at '
    + 'this stage is whether a chemical reaction was needed, and that is a good '
    + 'question to keep asking as the examples get harder.',

  questions: [
    {
      id: 'ecm-1',
      ask: 'Which of these is a compound?',
      kind: 'choice',
      options: ['Air', 'Carbon dioxide', 'Sea water', 'Brass'],
      answer: 'Carbon dioxide',
      teach: 'Carbon dioxide is carbon and oxygen chemically joined in a fixed '
        + 'ratio, and it behaves like neither. The other three are mixtures: '
        + 'their proportions vary and a physical method separates them.',
      level: 1,
    },
    {
      id: 'ecm-2',
      ask: 'A sample can be separated into two substances by filtering. Is it '
        + 'an element, a compound or a mixture?',
      kind: 'choice',
      options: ['An element', 'A compound', 'A mixture'],
      answer: 'A mixture',
      teach: 'Filtering is a physical method, so nothing had to be chemically '
        + 'broken. That is the separation test: if a physical method is enough, '
        + 'the substances were never joined, so it was a mixture.',
      level: 2,
    },
    {
      id: 'ecm-3',
      ask: 'How many different kinds of atom are in an element?',
      kind: 'numeric',
      answer: '1',
      accept: ['one'],
      teach: 'One. That is the whole definition of an element: a substance made '
        + 'of a single kind of atom, which is why it cannot be broken into '
        + 'anything simpler.',
      level: 1,
    },
  ],
})
