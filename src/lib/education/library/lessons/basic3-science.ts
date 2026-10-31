/**
 * Stored lessons for Basic 3 Science.
 *
 * Written short from the start, at about grade 3. See `basic3-english.ts` for
 * why, and `scripts/coverage/reading-level.mts` for the check.
 *
 * All three topics can be done with what is in the room or the yard. A
 * science lesson a child only reads is a reading lesson.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── grouping animals ─────────────────────────────────────────────────────── */

teach({
  topicId: 'animal-groups',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Animals are sorted into groups. Decide what you are grouping '
      + 'by before you start.',
    method: [
      'Pick the question: how they move, what they eat, where they live.',
      'Say the groups out loud.',
      'Put each animal in one.',
    ],
  },

  idea:
    'There are too many animals to learn one at a time. '
    + 'So we put them into groups. '
    + 'You can group them by how they move. '
    + 'Or by what they eat. '
    + 'Or by where they live.',

  mechanism:
    'Here is the part people miss. '
    + 'The same animal goes in different groups on different days. '
    + 'A duck swims, so it goes with the swimmers. '
    + 'A duck also flies, so it goes with the fliers. '
    + 'Neither answer is wrong. '
    + 'What changed is the question you asked. '
    + 'So before you group anything, say what you are grouping by.',

  recap:
    'You can already tell a living thing from a non living one. '
    + 'All of these are living. '
    + 'Now you are sorting them into smaller sets.',

  method: [
    'Decide your question first. How it moves? What it eats? Where it lives?',
    'Say the groups out loud before you start.',
    'Take each animal and put it in one group.',
    'Stuck between two? Your question was not clear enough. Make it sharper.',
    'At the end, check that every animal has a home.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Group these by how they move: fish, bird, goat.',
      steps: [
        'A fish swims.',
        'A bird flies.',
        'A goat walks.',
      ],
      answer: 'One swims, one flies, one walks.',
    },
    {
      level: 2,
      ask: 'Group these by what they eat: goat, lion, fowl.',
      steps: [
        'A goat eats plants.',
        'A lion eats meat.',
        'A fowl eats both grain and insects.',
      ],
      answer: 'Goat eats plants. Lion eats meat. Fowl eats both.',
    },
    {
      level: 3,
      ask: 'Is a duck a swimmer or a flier?',
      steps: [
        'A duck swims. So it is a swimmer.',
        'A duck also flies. So it is a flier.',
        'Both are true at once.',
      ],
      answer: 'Both. The group depends on the question you asked, '
        + 'not on the duck.',
    },
  ],

  traps: [
    {
      mistake: 'Starting to sort before you have picked a question.',
      why: 'Then every animal fits everywhere. '
        + 'Pick the question first.',
    },
    {
      mistake: 'Thinking one animal belongs to one group only.',
      why: 'A duck swims and flies. '
        + 'A new question gives a new group.',
    },
    {
      mistake: 'Grouping by size and calling it a fact.',
      why: 'Big and small depend on what you compare with. '
        + 'A goat is big beside a rat and small beside a cow.',
    },
  ],

  extension:
    'Scientists group animals by their bodies, not by what they do. '
    + 'A bat flies like a bird, but it feeds its young on milk. '
    + 'So it goes with the goats and not with the birds. '
    + 'That grouping tells you more, because it does not change with the '
    + 'question.',

  figure: {
    alt: 'The same six animals sorted twice, once by how they move and once '
      + 'by what they eat, showing that the groups change with the question',
    svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="20" y="28" font-size="20" font-weight="700" fill="#0f8a4d">'
      + 'By how they move</text>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="20" y="40" width="140" height="78" rx="10"/>'
      + '<rect x="172" y="40" width="140" height="78" rx="10"/>'
      + '<rect x="324" y="40" width="136" height="78" rx="10"/>'
      + '</g>'
      + '<g font-size="19" fill="currentColor" text-anchor="middle">'
      + '<text x="90" y="66">swim</text><text x="242" y="66">fly</text>'
      + '<text x="392" y="66">walk</text>'
      + '<text x="90" y="94">fish, duck</text><text x="242" y="94">duck, bird</text>'
      + '<text x="392" y="94">goat, lion</text>'
      + '</g>'
      + '<text x="20" y="166" font-size="20" font-weight="700" fill="#0f8a4d">'
      + 'By what they eat</text>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="20" y="178" width="140" height="78" rx="10"/>'
      + '<rect x="172" y="178" width="140" height="78" rx="10"/>'
      + '<rect x="324" y="178" width="136" height="78" rx="10"/>'
      + '</g>'
      + '<g font-size="19" fill="currentColor" text-anchor="middle">'
      + '<text x="90" y="204">plants</text><text x="242" y="204">meat</text>'
      + '<text x="392" y="204">both</text>'
      + '<text x="90" y="232">goat</text><text x="242" y="232">lion, fish</text>'
      + '<text x="392" y="232">duck, fowl</text>'
      + '</g>'
      + '<text x="240" y="288" text-anchor="middle" font-size="19" fill="currentColor">'
      + 'Same animals. New question. New groups.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'ag-1',
      ask: 'Which group does a fish go in, if you are grouping by how they move?',
      kind: 'choice',
      options: ['Swimmers', 'Fliers', 'Walkers'],
      answer: 'Swimmers',
      teach: 'A fish swims. That is the only thing the question asked about.',
      level: 1,
    },
    {
      id: 'ag-2',
      ask: 'What must you decide before you start grouping animals?',
      kind: 'choice',
      options: [
        'How many animals there are',
        'What you are grouping by',
        'Which animal you like best',
      ],
      answer: 'What you are grouping by',
      teach: 'Without a question, every animal fits everywhere. '
        + 'The question is what makes the groups.',
      level: 2,
    },
    {
      id: 'ag-3',
      ask: 'A duck swims and a duck flies. Is that a problem?',
      kind: 'choice',
      options: [
        'Yes, it can only be in one group',
        'No, the group depends on the question',
        'Yes, ducks should be left out',
      ],
      answer: 'No, the group depends on the question',
      teach: 'Ask about moving in water and it is a swimmer. '
        + 'Ask about moving in air and it is a flier. '
        + 'The duck has not changed.',
      level: 3,
    },
  ],
})

/* ── materials and their properties ───────────────────────────────────────── */

teach({
  topicId: 'material-properties',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Things are made of materials, and the material is chosen for '
      + 'the job the thing has to do.',
    method: [
      'Name the object and what it is made of.',
      'Say what job it has to do.',
      'Ask what the material does that fits that job.',
    ],
  },

  idea:
    'Things are made of materials. Metal, wood, glass, cloth, plastic. '
    + 'Each material behaves in its own way. '
    + 'Metal carries heat. Glass lets light through. Cloth bends. '
    + 'The material is chosen for what the thing has to do.',

  mechanism:
    'So you can work backwards. '
    + 'Look at any object and ask what job it does. '
    + 'The job tells you why that material was picked. '
    + 'A cooking pot has to sit in fire and get hot. '
    + 'Metal does that. Plastic would melt. '
    + 'A window has to let you see out and keep the rain off. '
    + 'Glass does both. Wood does only one. '
    + 'Nobody chose at random.',

  recap:
    'You can name things around you. '
    + 'Now you look at what each one is made of, and ask why.',

  method: [
    'Name the object.',
    'Say what it is made of.',
    'Say what job it has to do.',
    'Ask what the material does that fits that job.',
    'Then test it: what would go wrong with a different material?',
  ],

  worked: [
    {
      level: 1,
      ask: 'What is a window made of?',
      steps: [
        'Look at it. You can see through it.',
      ],
      answer: 'Glass.',
    },
    {
      level: 2,
      ask: 'Why is a cooking pot made of metal?',
      steps: [
        'A pot sits on fire. It must get hot and stay whole.',
        'Metal carries heat and does not burn.',
        'Plastic would melt. Wood would catch fire.',
      ],
      answer: 'Because metal carries heat and survives the fire.',
    },
    {
      level: 3,
      ask: 'Why is the handle of a good cooking pot sometimes wood or plastic?',
      steps: [
        'The pot needs to carry heat. The handle must not.',
        'Metal would carry heat straight into your hand.',
        'Wood and plastic do not carry heat well.',
      ],
      answer: 'So you can hold it. '
        + 'One object can use two materials for two different jobs.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking one material is simply the best.',
      why: 'There is no best. There is only best for this job. '
        + 'Metal is wrong for a window.',
    },
    {
      mistake: 'Naming the object instead of the material.',
      why: 'A cup is the object. '
        + 'Clay, plastic or metal is the material.',
    },
    {
      mistake: 'Assuming one object is made of one material.',
      why: 'A pot can be metal with a wooden handle. '
        + 'Look at each part and ask about it on its own.',
    },
  ],

  extension:
    'Some materials can be used again. '
    + 'Metal and glass can be melted and made into something new. '
    + 'That is recycling. '
    + 'It works because melting changes the shape and not the material.',

  questions: [
    {
      id: 'mat-1',
      ask: 'Which material lets light through?',
      kind: 'choice',
      options: ['Glass', 'Metal', 'Wood'],
      answer: 'Glass',
      teach: 'That is why windows are made of it. '
        + 'You can see out and the rain stays off.',
      level: 1,
    },
    {
      id: 'mat-2',
      ask: 'Why is a cooking pot not made of plastic?',
      kind: 'choice',
      options: [
        'Plastic is too cheap',
        'Plastic would melt on the fire',
        'Plastic is too heavy',
      ],
      answer: 'Plastic would melt on the fire',
      teach: 'The job is to sit in heat and stay whole. '
        + 'Plastic cannot do that job.',
      level: 2,
    },
    {
      id: 'mat-3',
      ask: 'Why might a metal pot have a wooden handle?',
      kind: 'choice',
      options: [
        'Wood looks nicer',
        'Wood does not carry heat to your hand',
        'Wood is stronger than metal',
      ],
      answer: 'Wood does not carry heat to your hand',
      teach: 'The pot and the handle have different jobs. '
        + 'So they get different materials.',
      level: 3,
    },
  ],
})

/* ── day, night and the seasons ───────────────────────────────────────────── */

teach({
  topicId: 'day-night-seasons',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The Earth turns. Your side faces the sun and that is day. It '
      + 'turns away and that is night.',
    method: [
      'Picture the Earth turning, not the sun moving.',
      'Your side towards the sun is day.',
      'Your side away is night.',
    ],
  },

  idea:
    'The sun does not move across the sky. The Earth turns. '
    + 'Your side of the Earth turns towards the sun, and that is day. '
    + 'It keeps turning until your side faces away, and that is night. '
    + 'One full turn takes a day and a night.',

  mechanism:
    'This is hard to believe, because you can watch the sun move. '
    + 'So think about a bus. '
    + 'You sit still and the trees seem to rush past the window. '
    + 'The trees are not moving. You are. '
    + 'It is the same with the sun. '
    + 'You are on the thing that turns, so the sun looks like it travels. '
    + 'What you see and what is happening are not the same.',

  recap:
    'You know the sun comes up in the morning and goes down in the evening. '
    + 'This lesson explains what is really happening while that looks true.',

  method: [
    'Hold a ball. That is the Earth.',
    'Put a torch on the table. That is the sun.',
    'Mark one spot on the ball. That is you.',
    'Turn the ball slowly. Do not move the torch.',
    'Watch your spot come into the light, then go out of it.',
    'That is day, then night, from one turn.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What makes it night where you are?',
      steps: [
        'The Earth keeps turning.',
        'Your side has turned away from the sun.',
      ],
      answer: 'Your side of the Earth is facing away from the sun.',
    },
    {
      level: 2,
      ask: 'If the Earth stopped turning, what would happen?',
      steps: [
        'One side would stay facing the sun.',
        'The other side would stay facing away.',
      ],
      answer: 'One half would have day for ever and the other half night '
        + 'for ever.',
    },
    {
      level: 3,
      ask: 'Why does the sun look like it moves if the Earth is turning?',
      steps: [
        'You are standing on the Earth.',
        'So you turn with it, and you cannot feel it.',
        'Anything out there then looks like it is sliding past.',
      ],
      answer: 'Because you are moving with the Earth. '
        + 'It is like trees rushing past a bus window.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the sun goes round the Earth.',
      why: 'It looks that way, and it is not what happens. '
        + 'The Earth turns and the sun stays put.',
    },
    {
      mistake: 'Thinking night means the sun has switched off.',
      why: 'The sun is shining the whole time. '
        + 'It is shining on the other side of the Earth.',
    },
    {
      mistake: 'Mixing up the turn and the year.',
      why: 'One turn of the Earth gives you a day. '
        + 'One trip round the sun gives you a year. '
        + 'Two different movements.',
    },
  ],

  extension:
    'Ghana sits near the middle of the Earth, so our days and nights stay '
    + 'about the same length all year. '
    + 'Far north and far south it is not like that. '
    + 'In some places the summer day never properly goes dark.',

  figure: {
    alt: 'The sun on one side and the Earth beside it, with the half facing '
      + 'the sun marked as day and the half facing away marked as night, and '
      + 'an arrow showing the Earth turning',
    svg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<circle cx="66" cy="140" r="40" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<g stroke="currentColor" stroke-width="2.5">'
      + '<path d="M66 86V70M66 194v16M12 140H-2M120 140h16"/>'
      + '<path d="M28 102 L18 92M104 178l10 10M28 178l-10 10M104 102l10-10"/>'
      + '</g>'
      + '<text x="66" y="238" text-anchor="middle" font-size="20" fill="currentColor">the sun</text>'
      + '<g stroke="#0f8a4d" stroke-width="2" opacity="0.6">'
      + '<path d="M140 118h110M140 140h110M140 162h110"/>'
      + '</g>'
      + '<circle cx="330" cy="140" r="62" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<path d="M330 78 A 62 62 0 0 0 330 202 Z" fill="currentColor" opacity="0.15"/>'
      + '<path d="M330 78v124" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5"/>'
      + '<text x="296" y="146" text-anchor="middle" font-size="19" fill="currentColor">day</text>'
      + '<text x="368" y="146" text-anchor="middle" font-size="19" fill="currentColor">night</text>'
      + '<path d="M330 62 A 78 78 0 0 1 400 96" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M400 96 l -4 -14 l 14 3 z" fill="#0f8a4d"/>'
      + '<text x="330" y="246" text-anchor="middle" font-size="20" fill="currentColor">'
      + 'the Earth turns</text>'
      + '<text x="240" y="272" text-anchor="middle" font-size="18" fill="#0f8a4d">'
      + 'The sun stays still.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'dn-1',
      ask: 'What makes day and night?',
      kind: 'choice',
      options: [
        'The sun moving round the Earth',
        'The Earth turning',
        'The sun switching off',
      ],
      answer: 'The Earth turning',
      teach: 'The Earth turns and the sun stays put. '
        + 'Your side faces the sun, then faces away.',
      level: 1,
    },
    {
      id: 'dn-2',
      ask: 'Is the sun shining at night?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'Yes',
      teach: 'It never stops. '
        + 'At night it is shining on the other side of the Earth.',
      level: 2,
    },
    {
      id: 'dn-3',
      ask: 'Why does the sun look like it moves across the sky?',
      kind: 'choice',
      options: [
        'Because you are turning with the Earth',
        'Because the sun really does move',
        'Because clouds push it along',
      ],
      answer: 'Because you are turning with the Earth',
      teach: 'You cannot feel the Earth turning, so the sun seems to slide. '
        + 'It is like trees rushing past a bus window.',
      level: 3,
    },
  ],
})
