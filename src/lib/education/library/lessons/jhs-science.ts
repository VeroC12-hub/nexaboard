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
    'Everything around you is built from about a hundred basic substances. '
    + 'We call them elements. '
    + 'An element cannot be broken into anything simpler. '
    + 'Iron is iron all the way down. '
    + 'When elements join chemically they make a compound. '
    + 'A compound is a new substance with its own properties. '
    + 'When substances are only mixed, and not joined, you have a mixture. '
    + 'In a mixture each one is still itself.',

  mechanism:
    'One question settles it. Are they joined, or only sitting together? '
    + 'In a compound the atoms are bonded. '
    + 'They are bonded in a fixed ratio. '
    + 'It takes a chemical reaction to part them. '
    + 'Water is always two hydrogen to one oxygen. '
    + 'Nothing you do by hand gets the hydrogen back out. '
    + 'In a mixture nothing is bonded. '
    + 'The proportions can be whatever you like. '
    + 'A physical method is enough to separate it. '
    + 'Every other difference follows from that one question.',

  recap:
    'Everything is made of particles too small to see. '
    + 'In a solid they are packed close and only vibrate. '
    + 'In a liquid they are close but slide past each other. '
    + 'In a gas they are far apart and move freely. '
    + 'Hold that picture, because this topic asks one thing about it. '
    + 'Are the particles joined to each other, or merely near each other?',

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

  figure: {
    alt: 'Three boxes. An element holds one kind of atom and nothing '
      + 'simpler. A compound holds pairs of two different atoms, each '
      + 'pair joined, in a fixed ratio. A mixture holds the same two '
      + 'kinds of atom loose and in no particular proportion, each one '
      + 'still itself.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">are they joined, or only sitting together?</text>'
      + '<path d="M 40 70 H 200 V 220 H 40 Z"/>'
      + '<text x="120" y="56" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">an element</text>'
      + '<circle cx="80" cy="110" r="13"/>'
      + '<circle cx="130" cy="104" r="13"/>'
      + '<circle cx="168" cy="130" r="13"/>'
      + '<circle cx="70" cy="160" r="13"/>'
      + '<circle cx="120" cy="158" r="13"/>'
      + '<circle cx="164" cy="184" r="13"/>'
      + '<circle cx="96" cy="198" r="13"/>'
      + '<text x="120" y="246" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">one kind of atom</text>'
      + '<text x="120" y="268" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">and nothing simpler inside</text>'
      + '<path d="M 240 70 H 400 V 220 H 240 Z" stroke="#0f8a4d"/>'
      + '<text x="320" y="56" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">a compound</text>'
      + '<circle cx="280" cy="110" r="13" stroke="#0f8a4d"/>'
      + '<circle cx="306" cy="110" r="8" stroke="#0f8a4d"/>'
      + '<line x1="293" y1="110" x2="298" y2="110" stroke="#0f8a4d"/>'
      + '<circle cx="340" cy="110" r="13" stroke="#0f8a4d"/>'
      + '<circle cx="366" cy="110" r="8" stroke="#0f8a4d"/>'
      + '<line x1="353" y1="110" x2="358" y2="110" stroke="#0f8a4d"/>'
      + '<circle cx="280" cy="170" r="13" stroke="#0f8a4d"/>'
      + '<circle cx="306" cy="170" r="8" stroke="#0f8a4d"/>'
      + '<line x1="293" y1="170" x2="298" y2="170" stroke="#0f8a4d"/>'
      + '<circle cx="340" cy="170" r="13" stroke="#0f8a4d"/>'
      + '<circle cx="366" cy="170" r="8" stroke="#0f8a4d"/>'
      + '<line x1="353" y1="170" x2="358" y2="170" stroke="#0f8a4d"/>'
      + '<text x="320" y="246" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">joined, in a fixed ratio</text>'
      + '<text x="320" y="268" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">and a new substance</text>'
      + '<path d="M 440 70 H 600 V 220 H 440 Z" stroke="#c8433a"/>'
      + '<text x="520" y="56" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">a mixture</text>'
      + '<circle cx="478" cy="108" r="13" stroke="#c8433a"/>'
      + '<circle cx="540" cy="98" r="13" stroke="#c8433a"/>'
      + '<circle cx="586" cy="140" r="13" stroke="#c8433a"/>'
      + '<circle cx="470" cy="164" r="13" stroke="#c8433a"/>'
      + '<circle cx="560" cy="170" r="13" stroke="#c8433a"/>'
      + '<circle cx="514" cy="200" r="13" stroke="#c8433a"/>'
      + '<circle cx="520" cy="132" r="8" stroke="#c8433a"/>'
      + '<circle cx="580" cy="190" r="8" stroke="#c8433a"/>'
      + '<circle cx="462" cy="200" r="8" stroke="#c8433a"/>'
      + '<circle cx="556" cy="128" r="8" stroke="#c8433a"/>'
      + '<text x="520" y="246" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">not joined at all</text>'
      + '<text x="520" y="268" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">and each one still itself</text>'
      + '<text x="320" y="326" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">water is always two hydrogen to one oxygen</text>'
      + '<text x="320" y="354" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and nothing you do by hand gets the hydrogen back out</text>'
      + '<text x="320" y="390" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">a mixture needs only a physical method to part it</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'A compound and a mixture, settled by one question',
      columns: ['The question', 'A compound', 'A mixture'],
      rows: [
        [
          'Are the parts joined',
          'Yes, they are bonded',
          'No, they are only sitting together',
        ],
        [
          'In what proportions',
          'A fixed ratio, always',
          'Whatever proportions you like',
        ],
        [
          'How do you part them',
          'Only by a chemical reaction',
          'By a physical method, such as filtering',
        ],
        [
          'Has it its own properties',
          'Yes, it is a new substance',
          'No, each part is still itself',
        ],
        [
          'An example',
          'Water, always two hydrogen to one oxygen',
          'Sand in water, in any amounts at all',
        ],
      ],
      note: 'Every other difference follows from the first row, so that is '
        + 'the question to ask first.',
    },
  ],
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
