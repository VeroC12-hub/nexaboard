/**
 * Stored lessons for Basic 4 Science.
 *
 * Written at about grade 4, with a `brief` form on every topic.
 *
 * Nearly all of these can be tried with what is in a Ghanaian home or yard:
 * ice, a gutter, a mosquito, a magnet, a bowl of water in the sun. Where a
 * lesson names an experiment, it is one a child can actually do, because a
 * science lesson that is only read is a reading lesson.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── solids, liquids and gases ────────────────────────────────────────────── */

teach({
  topicId: 'states-of-matter',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A solid keeps its own shape. A liquid takes the shape of its container. '
      + 'A gas spreads out to fill whatever it is in.',
    method: [
      'Pour it into a different container.',
      'Kept its shape? Solid. Took the new shape? Liquid.',
      'Spread out to fill the whole thing? Gas.',
    ],
  },

  idea:
    'Everything around you is a solid, a liquid or a gas. '
    + 'What tells them apart is what happens to the shape '
    + 'when you move the thing from one container to another.',

  mechanism:
    'The difference is how tightly the tiny parts are held together. '
    + 'In a solid they are locked in place, so the shape cannot change. '
    + 'In a liquid they are touching but can slide past each other, '
    + 'so it flows and settles into whatever holds it. '
    + 'In a gas they are far apart and moving fast, '
    + 'so it spreads until something stops it. '
    + 'Heat is what loosens the hold, which is why ice becomes water '
    + 'and water becomes steam without ever becoming a different substance.',

  recap:
    'You can sort things into groups once you know what you are sorting by. '
    + 'Here you sort by what happens to the shape.',

  method: [
    'Take the thing and put it in a different container.',
    'Did it keep its own shape? It is a solid.',
    'Did it take the shape of the container but stay at the bottom? Liquid.',
    'Did it fill the whole container? Gas.',
    'To change one into another, add heat or take heat away.',
  ],

  worked: [
    {
      level: 2,
      ask: 'You pour water from a cup into a bowl. What happens to its shape?',
      steps: [
        'In the cup it was cup shaped.',
        'In the bowl it is bowl shaped.',
      ],
      answer: 'It takes the shape of whatever holds it, because it is a liquid.',
    },
    {
      level: 3,
      ask: 'Ice is left in the sun and becomes water. '
        + 'Has it turned into a different substance?',
      steps: [
        'Ice is water with its parts locked in place.',
        'Heat loosens the hold so they can slide.',
        'It is the same water throughout.',
      ],
      answer: 'No. It is the same substance in a different state. '
        + 'Freeze it again and you have ice back.',
    },
    {
      level: 4,
      ask: 'A pot of water boils dry. Where did the water go?',
      steps: [
        'Heat loosened the parts until they moved fast enough to escape.',
        'They spread out into the air as a gas.',
        'The gas is still water, just too spread out to see.',
      ],
      answer: 'Into the air as water vapour, which is water as a gas.',
    },
  ],

  traps: [
    {
      mistake: 'Calling sand a liquid because it pours.',
      why: 'Each grain keeps its own shape. '
        + 'It is a heap of tiny solids, not a liquid.',
    },
    {
      mistake: 'Thinking melting makes a new substance.',
      why: 'Melting changes the state, not the substance. '
        + 'Ice and water are the same thing.',
    },
    {
      mistake: 'Saying a gas is nothing because you cannot see it.',
      why: 'Blow up a balloon. Something is holding it out. '
        + 'A gas has weight and takes up space.',
    },
  ],

  extension:
    'There is a fourth state, called plasma, '
    + 'and it is the commonest one in the universe. '
    + 'The sun is made of it. '
    + 'You will not meet it in a kitchen, but it is worth knowing the three '
    + 'you see every day are not the whole list.',

  figure: {
    alt: 'Three boxes showing how the tiny parts sit. In the solid, drawn '
      + 'first, they are locked in a neat grid. In the liquid they still '
      + 'touch but lie loosely, with a flat surface and a space above it. '
      + 'In the gas they are far apart, each with a short line showing it '
      + 'moving.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="30,110 160,110 160,296 30,296"/>'
      + '<circle cx="56" cy="150" r="11"/><circle cx="82" cy="150" r="11"/>'
      + '<circle cx="108" cy="150" r="11"/>'
      + '<circle cx="134" cy="150" r="11"/>'
      + '<circle cx="56" cy="176" r="11"/><circle cx="82" cy="176" r="11"/>'
      + '<circle cx="108" cy="176" r="11"/>'
      + '<circle cx="134" cy="176" r="11"/>'
      + '<circle cx="56" cy="202" r="11"/><circle cx="82" cy="202" r="11"/>'
      + '<circle cx="108" cy="202" r="11"/>'
      + '<circle cx="134" cy="202" r="11"/>'
      + '<circle cx="56" cy="228" r="11"/><circle cx="82" cy="228" r="11"/>'
      + '<circle cx="108" cy="228" r="11"/>'
      + '<circle cx="134" cy="228" r="11"/>'
      + '<text x="95" y="328" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">solid</text>'
      + '<text x="95" y="356" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">locked in place</text>'
      + '<polygon points="222,110 352,110 352,296 222,296"/>'
      + '<circle cx="236" cy="196" r="11"/>'
      + '<circle cx="260" cy="212" r="11"/>'
      + '<circle cx="284" cy="196" r="11"/>'
      + '<circle cx="308" cy="212" r="11"/>'
      + '<circle cx="332" cy="198" r="11"/>'
      + '<circle cx="248" cy="232" r="11"/>'
      + '<circle cx="272" cy="230" r="11"/>'
      + '<circle cx="296" cy="234" r="11"/>'
      + '<circle cx="320" cy="232" r="11"/>'
      + '<circle cx="258" cy="256" r="11"/>'
      + '<circle cx="284" cy="258" r="11"/>'
      + '<circle cx="310" cy="254" r="11"/>'
      + '<line x1="224" y1="184" x2="350" y2="184"/>'
      + '<text x="287" y="328" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">liquid</text>'
      + '<text x="287" y="356" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">touching, but sliding</text>'
      + '<polygon points="440,110 614,110 614,296 440,296"/>'
      + '<circle cx="470" cy="142" r="11"/>'
      + '<line x1="483" y1="136" x2="496" y2="130"/>'
      + '<circle cx="532" cy="168" r="11"/>'
      + '<line x1="545" y1="162" x2="558" y2="156"/>'
      + '<circle cx="572" cy="136" r="11"/>'
      + '<line x1="585" y1="130" x2="598" y2="124"/>'
      + '<circle cx="482" cy="222" r="11"/>'
      + '<line x1="495" y1="216" x2="508" y2="210"/>'
      + '<circle cx="546" cy="244" r="11"/>'
      + '<line x1="559" y1="238" x2="572" y2="232"/>'
      + '<circle cx="578" cy="200" r="11"/>'
      + '<line x1="591" y1="194" x2="604" y2="188"/>'
      + '<circle cx="506" cy="276" r="11"/>'
      + '<line x1="519" y1="270" x2="532" y2="264"/>'
      + '<circle cx="558" cy="278" r="11"/>'
      + '<line x1="571" y1="272" x2="584" y2="266"/>'
      + '<text x="527" y="328" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">gas</text>'
      + '<text x="527" y="356" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">far apart, moving fast</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What each state does with its shape and its container',
    columns: [
      'State',
      'Its own shape',
      'What it does in a container',
      'Example',
    ],
    rows: [
      ['Solid', 'Keeps it', 'Sits there unchanged', 'A stone'],
      ['Liquid', 'Loses it', 'Takes the shape, stays at the bottom', 'Water'],
      ['Gas', 'Loses it', 'Fills the whole container', 'Air'],
    ],
    note: 'Heat is what loosens the hold between the tiny parts, which is '
      + 'how one of these becomes another without becoming a different '
      + 'substance.',
  }],
  questions: [
    {
      id: 'som-1',
      ask: 'Which one takes the shape of its container but stays at the bottom?',
      kind: 'choice',
      options: ['A solid', 'A liquid', 'A gas'],
      answer: 'A liquid',
      teach: 'A liquid flows and settles. '
        + 'A gas would fill the whole container, top to bottom.',
      level: 2,
    },
    {
      id: 'som-2',
      ask: 'Ice melts into water. Is it a different substance now?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'No',
      teach: 'It is the same water with its parts held less tightly. '
        + 'Freeze it and the ice comes back.',
      level: 3,
    },
    {
      id: 'som-3',
      ask: 'Why is sand not a liquid, even though you can pour it?',
      kind: 'choice',
      options: [
        'Because each grain keeps its own shape',
        'Because it is dry',
        'Because it is heavy',
      ],
      answer: 'Because each grain keeps its own shape',
      teach: 'Sand is many tiny solids. '
        + 'The heap pours, but no single grain changes shape.',
      level: 4,
    },
  ],
})

/* ── the water cycle ──────────────────────────────────────────────────────── */

teach({
  topicId: 'water-cycle-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The sun heats the sea and water rises as vapour. '
      + 'High up it cools into clouds. '
      + 'It falls as rain and runs back to the sea.',
    method: [
      'Start at the sea. The sun heats it and water rises.',
      'High up it cools and gathers into clouds.',
      'It falls as rain, then flows back down to the sea.',
    ],
  },

  idea:
    'Water goes round and round and never runs out. '
    + 'The sun heats the sea and water rises into the air. '
    + 'Up high it is cold, so it turns back into tiny drops and makes clouds. '
    + 'When the drops get heavy they fall as rain, '
    + 'and the rain runs down rivers back to the sea.',

  mechanism:
    'Heat drives the whole thing, and cold closes it. '
    + 'Heat turns liquid water into a gas that can rise. '
    + 'Cold turns that gas back into a liquid that must fall. '
    + 'Because the sun keeps shining, the cycle never stops, '
    + 'and because no water leaves the Earth, '
    + 'the water in the rain today is the same water that has been going '
    + 'round for millions of years. '
    + 'None of it is new.',

  recap:
    'You know that water can be a solid, a liquid or a gas, '
    + 'and that heat is what moves it between them. '
    + 'This is that, happening across a whole country.',

  method: [
    'Start at the sea or a lake.',
    'The sun heats it. Water rises as vapour. Call that evaporation.',
    'High up it is cold. The vapour becomes tiny drops. Call that condensation.',
    'The drops gather into clouds.',
    'They grow heavy and fall. Call that precipitation.',
    'The water runs into streams and rivers and back to the sea.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Why does a puddle disappear on a sunny day?',
      steps: [
        'The sun heats the water.',
        'It turns into vapour and rises into the air.',
      ],
      answer: 'It evaporated. The water did not vanish, it went into the air.',
    },
    {
      level: 3,
      ask: 'Why do drops form on the outside of a cold bottle?',
      steps: [
        'There is water vapour in the air around the bottle.',
        'The bottle is cold, so the air touching it cools.',
        'Cool air cannot hold the vapour, so it turns back into drops.',
      ],
      answer: 'The vapour in the air condensed on the cold surface. '
        + 'The water came from the air, not out of the bottle.',
    },
    {
      level: 4,
      ask: 'Is the rain that falls today new water?',
      steps: [
        'Water rises, falls and runs back, over and over.',
        'None of it leaves the Earth.',
      ],
      answer: 'No. It is the same water going round again, '
        + 'and it has been doing so for a very long time.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the puddle dried up into nothing.',
      why: 'It went into the air as vapour. '
        + 'Nothing was destroyed, it only changed state.',
    },
    {
      mistake: 'Thinking the drops on a cold bottle leaked through it.',
      why: 'They came out of the air. '
        + 'Dry the bottle and wait: they come back.',
    },
    {
      mistake: 'Thinking clouds are made of vapour.',
      why: 'Vapour is invisible. '
        + 'A cloud is tiny liquid drops, which is why you can see it.',
    },
  ],

  extension:
    'Not all the rain reaches the sea above ground. '
    + 'Much of it soaks in and travels slowly underground, '
    + 'which is what a well reaches down to. '
    + 'That is why a dry season still has water in the ground '
    + 'long after the streams have stopped.',

  figure: {
    alt: 'The water cycle drawn as a loop: the sun heating the sea, vapour '
      + 'rising, clouds forming, rain falling on hills and a river running '
      + 'back to the sea',
    svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<circle cx="54" cy="48" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/>'
      + '<g stroke="currentColor" stroke-width="2"><path d="M54 16v-8M54 88v8M22 48h-8M86 48h8"/></g>'
      + '<path d="M20 232h440v48H20z" fill="#0f8a4d" opacity="0.18"/>'
      + '<path d="M20 232h440" stroke="currentColor" stroke-width="2"/>'
      + '<text x="70" y="262" font-size="19" fill="currentColor">the sea</text>'
      + '<g stroke="#0f8a4d" stroke-width="2.5" fill="none">'
      + '<path d="M120 224 C 120 180, 140 150, 170 128"/>'
      + '<path d="M170 128 l 2 13 l 11 -7 z" fill="#0f8a4d"/>'
      + '</g>'
      + '<text x="96" y="188" font-size="18" fill="#0f8a4d">rises</text>'
      + '<g fill="none" stroke="currentColor" stroke-width="2.5">'
      + '<path d="M210 112 a 26 26 0 0 1 52 -6 a 22 22 0 0 1 34 18 h -92 z"/>'
      + '</g>'
      + '<text x="252" y="88" text-anchor="middle" font-size="18" fill="currentColor">cloud</text>'
      + '<g stroke="#0f8a4d" stroke-width="2.5">'
      + '<path d="M222 132v26M244 132v34M266 132v26M288 132v34"/>'
      + '</g>'
      + '<text x="316" y="156" font-size="18" fill="#0f8a4d">rain</text>'
      + '<path d="M330 232 L392 168 L440 232 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>'
      + '<path d="M392 180 C 380 206, 360 216, 344 232" stroke="#0f8a4d" '
      + 'stroke-width="2.5" fill="none"/>'
      + '<text x="398" y="214" font-size="18" fill="#0f8a4d">river</text>'
      + '<text x="240" y="296" text-anchor="middle" font-size="18" fill="currentColor">'
      + 'The same water, going round again.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'wc-1',
      ask: 'What makes water rise from the sea?',
      kind: 'choice',
      options: ['The wind', 'Heat from the sun', 'The moon'],
      answer: 'Heat from the sun',
      teach: 'Heat turns liquid water into a gas, and the gas rises. '
        + 'That step is called evaporation.',
      level: 2,
    },
    {
      id: 'wc-2',
      ask: 'Where does the water on the outside of a cold bottle come from?',
      kind: 'choice',
      options: ['Through the bottle', 'Out of the air', 'From your hand'],
      answer: 'Out of the air',
      teach: 'There is vapour in the air. '
        + 'The cold surface cools it until it turns back into drops.',
      level: 3,
    },
    {
      id: 'wc-3',
      ask: 'Are clouds made of vapour?',
      kind: 'choice',
      options: ['Yes', 'No, they are tiny liquid drops'],
      answer: 'No, they are tiny liquid drops',
      teach: 'Vapour cannot be seen. '
        + 'You can see a cloud, so it must already have turned back to liquid.',
      level: 4,
    },
  ],
})

/* ── life cycles ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'life-cycles',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Living things go through stages from beginning to adult, '
      + 'and then start the cycle again. '
      + 'A mosquito goes egg, larva, pupa, adult.',
    method: [
      'Start at the egg or the seed.',
      'Name each stage in order.',
      'Say what the thing needs at that stage.',
    ],
  },

  idea:
    'Every living thing goes through stages, in order, '
    + 'and the last stage makes a new beginning. '
    + 'That is what a life cycle is: '
    + 'not a line from birth to death but a ring that comes round.',

  mechanism:
    'Notice that the mosquito and the butterfly have the same four stages, '
    + 'and that the young one looks nothing like the adult. '
    + 'That is not an accident. '
    + 'A caterpillar eats leaves and an adult butterfly drinks nectar, '
    + 'so they are not competing for the same food. '
    + 'The mosquito does the same thing: the larva lives in water '
    + 'and the adult flies. '
    + 'Being completely different from your own young is a way of sharing '
    + 'a place without fighting over it.',

  recap:
    'You know that living things grow and make more of themselves. '
    + 'A life cycle is the shape that takes, stage by stage.',

  method: [
    'Find the beginning: an egg, or a seed.',
    'Name the next stage, and what it looks like.',
    'Keep going until you reach the adult.',
    'Say how the adult starts the cycle again.',
    'For each stage, say what it needs: water, food, warmth.',
  ],

  worked: [
    {
      level: 2,
      ask: 'What are the four stages of a mosquito?',
      steps: [
        'It begins as an egg laid on water.',
        'Then a larva, which lives in the water.',
        'Then a pupa, still in the water.',
        'Then the adult, which flies.',
      ],
      answer: 'Egg, larva, pupa, adult.',
    },
    {
      level: 3,
      ask: 'Why does emptying standing water reduce mosquitoes?',
      steps: [
        'Three of the four stages happen in water.',
        'No standing water means the eggs and larvae cannot survive.',
      ],
      answer: 'Because you break the cycle at its early stages, '
        + 'so no new adults are made.',
    },
    {
      level: 4,
      ask: 'Why is a caterpillar so unlike a butterfly?',
      steps: [
        'A caterpillar eats leaves. A butterfly drinks nectar.',
        'So they do not want the same food.',
        'They can live in the same place without competing.',
      ],
      answer: 'Because being different means the young and the adult are not '
        + 'after the same food.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a caterpillar is a different animal from a butterfly.',
      why: 'It is the same animal at an earlier stage, '
        + 'the way you are the same person you were as a baby.',
    },
    {
      mistake: 'Leaving out the pupa stage.',
      why: 'It looks like nothing is happening, '
        + 'and it is the stage where the whole body is rebuilt.',
    },
    {
      mistake: 'Thinking mosquitoes breed in dirty water only.',
      why: 'Clean standing water does just as well. '
        + 'A bucket of rainwater is enough.',
    },
  ],

  extension:
    'Not every animal changes shape. '
    + 'A chick looks like a small hen and a goat kid like a small goat. '
    + 'Scientists call the big change metamorphosis, '
    + 'and it is worth asking why some animals do it and others do not.',

  figure: {
    alt: 'The four stages of a butterfly drawn as a ring, with green arrows '
      + 'running round it: egg, then caterpillar, then pupa, then adult, '
      + 'and from the adult back to the egg. In the middle it says it '
      + 'begins again.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<ellipse cx="320" cy="96" rx="84" ry="36"/>'
      + '<text x="320" y="103" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">egg</text>'
      + '<ellipse cx="516" cy="212" rx="84" ry="36"/>'
      + '<text x="516" y="219" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">caterpillar</text>'
      + '<ellipse cx="320" cy="328" rx="84" ry="36"/>'
      + '<text x="320" y="335" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">pupa</text>'
      + '<ellipse cx="124" cy="212" rx="84" ry="36"/>'
      + '<text x="124" y="219" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">adult</text>'
      + '<path d="M 404 112 Q 470 132 500 174" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<polyline points="482,160 504,180 496,154" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<path d="M 500 250 Q 470 292 404 312" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<polyline points="424,298 400,316 424,322" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<path d="M 236 312 Q 170 292 140 250" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<polyline points="158,264 136,244 144,270" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<path d="M 140 174 Q 170 132 236 112" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<polyline points="216,126 240,108 216,102" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="320" y="206" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">it begins</text>'
      + '<text x="320" y="230" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">again</text></svg>',
  },
  tables: [{
    caption: 'The stages each of these goes through, in order',
    columns: ['Living thing', 'First', 'Next', 'Then', 'Last'],
    rows: [
      ['Bean', 'Seed', 'Sprout', 'Growing plant', 'Flowers, then new seeds'],
      ['Mosquito', 'Egg', 'Larva in water', 'Pupa', 'Adult that flies'],
      ['Butterfly', 'Egg', 'Caterpillar', 'Pupa', 'Adult that drinks nectar'],
    ],
    note: 'The mosquito and the butterfly share the same four stages, and in '
      + 'both the young one looks nothing like the adult.',
  }],
  questions: [
    {
      id: 'lc-1',
      ask: 'What comes after the egg in a mosquito life cycle?',
      kind: 'choice',
      options: ['Pupa', 'Larva', 'Adult'],
      answer: 'Larva',
      teach: 'Egg, larva, pupa, adult. '
        + 'The first three all happen in water.',
      level: 2,
    },
    {
      id: 'lc-2',
      ask: 'Why does emptying buckets of standing water help?',
      kind: 'choice',
      options: [
        'It breaks the mosquito cycle before adults form',
        'It makes the yard tidy',
        'Mosquitoes dislike dry ground',
      ],
      answer: 'It breaks the mosquito cycle before adults form',
      teach: 'Three of the four stages need water. '
        + 'Remove the water and no new adults are made.',
      level: 3,
    },
    {
      id: 'lc-3',
      ask: 'A caterpillar and a butterfly are:',
      kind: 'choice',
      options: [
        'Two different animals',
        'The same animal at two stages',
        'Parent and child',
      ],
      answer: 'The same animal at two stages',
      teach: 'The same creature, rebuilt during the pupa stage. '
        + 'Like you and your baby photograph.',
      level: 3,
    },
  ],
})

/* ── teeth ────────────────────────────────────────────────────────────────── */

teach({
  topicId: 'teeth-and-care',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Incisors cut, canines tear, molars grind. '
      + 'Decay happens when germs turn sugar left on teeth into acid.',
    method: [
      'Brush twice a day, including last thing at night.',
      'Brush every surface, not just the front.',
      'Cut down on how often you eat sugar, not just how much.',
    ],
  },

  idea:
    'You have different teeth in different places, '
    + 'and the shape of each one tells you the job it does: '
    + 'flat for cutting, pointed for tearing, broad for grinding.',

  mechanism:
    'Decay is not caused by sugar directly. '
    + 'Germs living on your teeth eat the sugar you leave behind, '
    + 'and what they make is acid. '
    + 'The acid eats into the hard surface of the tooth. '
    + 'This explains something surprising: '
    + 'how often you eat sugar matters more than how much. '
    + 'One sweet eaten slowly all afternoon feeds the germs all afternoon, '
    + 'while the same sweets eaten at once give one short attack. '
    + 'It also explains why brushing at night matters most: '
    + 'you make less spit while asleep, so there is less to wash the acid '
    + 'away.',

  recap:
    'You know about germs and how washing removes them. '
    + 'Teeth are the same problem in a place that is harder to reach.',

  method: [
    'Brush twice a day. The night one matters most.',
    'Brush every surface: outside, inside and the chewing tops.',
    'Brush for about two minutes, not ten seconds.',
    'Do not rinse hard straight after. Let the paste sit on the teeth.',
    'Cut down on how often you eat sugar, not only how much.',
    'A tooth that hurts does not get better by itself. Tell somebody.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Which teeth do you use to bite into an apple?',
      steps: [
        'Biting is cutting.',
        'The flat teeth at the front cut.',
      ],
      answer: 'The incisors, at the front.',
    },
    {
      level: 3,
      ask: 'Why is brushing at night more important than brushing in the '
        + 'morning?',
      steps: [
        'Spit washes acid away during the day.',
        'You make much less spit while asleep.',
        'So food left overnight does more damage.',
      ],
      answer: 'Because your mouth defends itself less while you sleep.',
    },
    {
      level: 4,
      ask: 'Two children eat four sweets a day. One eats all four at once, '
        + 'the other one every hour. Who is at greater risk?',
      steps: [
        'Germs make acid whenever sugar is present.',
        'Four at once is one attack.',
        'One an hour is four attacks spread through the day.',
      ],
      answer: 'The one spreading them out, '
        + 'even though both ate the same amount.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking sugar attacks the tooth directly.',
      why: 'Germs eat the sugar and make acid. '
        + 'The acid does the damage.',
    },
    {
      mistake: 'Brushing only the front teeth.',
      why: 'Those are the ones you can see. '
        + 'The molars at the back do the grinding and trap the most food.',
    },
    {
      mistake: 'Thinking a milk tooth does not matter because it falls out.',
      why: 'It holds the space for the adult tooth. '
        + 'Lose it early and the next one can come in crooked.',
    },
  ],

  extension:
    'Chewing sticks have been used in Ghana for generations, '
    + 'and some of the plants used do carry substances that fight germs. '
    + 'They work best on the surfaces they can reach, '
    + 'which is the same limit a brush has.',

  figure: {
    alt: 'Two timelines of one afternoon. In the first, one sweet is eaten '
      + 'slowly, and a long red bar underneath shows acid attacking the '
      + 'teeth the whole afternoon. In the second the same sweets are eaten '
      + 'at once, and the red bar is one short block. Under them it says '
      + 'how often you eat sugar matters more than how much.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="42" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the same sweets, two different '
      + 'afternoons</text><line x1="70" y1="138" x2="580" y2="138"/>'
      + '<circle cx="110" cy="118" r="11" fill="currentColor"/>'
      + '<circle cx="192" cy="118" r="11" fill="currentColor"/>'
      + '<circle cx="274" cy="118" r="11" fill="currentColor"/>'
      + '<circle cx="356" cy="118" r="11" fill="currentColor"/>'
      + '<circle cx="438" cy="118" r="11" fill="currentColor"/>'
      + '<circle cx="520" cy="118" r="11" fill="currentColor"/>'
      + '<text x="70" y="90" font-size="18" text-anchor="start" '
      + 'fill="currentColor" stroke="none">one at a time, all '
      + 'afternoon</text>'
      + '<polygon points="96,150 540,150 540,184 96,184" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="318" y="174" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">acid on the teeth all '
      + 'afternoon</text><line x1="70" y1="276" x2="580" y2="276"/>'
      + '<circle cx="104" cy="256" r="11" fill="currentColor"/>'
      + '<circle cx="128" cy="256" r="11" fill="currentColor"/>'
      + '<circle cx="152" cy="256" r="11" fill="currentColor"/>'
      + '<circle cx="176" cy="256" r="11" fill="currentColor"/>'
      + '<circle cx="200" cy="256" r="11" fill="currentColor"/>'
      + '<circle cx="224" cy="256" r="11" fill="currentColor"/>'
      + '<text x="70" y="228" font-size="18" text-anchor="start" '
      + 'fill="currentColor" stroke="none">all at once</text>'
      + '<polygon points="96,288 240,288 240,322 96,322" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="168" y="312" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">one short attack</text>'
      + '<text x="320" y="366" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">how often you eat sugar matters more '
      + 'than how much</text></svg>',
  },
  tables: [{
    caption: 'Which teeth do which job',
    columns: ['Tooth', 'What it looks like', 'What it does'],
    rows: [
      ['Incisor', 'Flat, at the front', 'Cuts'],
      ['Canine', 'Pointed, beside the incisors', 'Tears'],
      ['Molar', 'Broad, at the back', 'Grinds'],
    ],
    note: 'The shape of a tooth tells you the job it was made for.',
  }],
  questions: [
    {
      id: 'th-1',
      ask: 'Which teeth grind food?',
      kind: 'choice',
      options: ['Incisors', 'Canines', 'Molars'],
      answer: 'Molars',
      teach: 'The broad ones at the back. '
        + 'Incisors cut and canines tear.',
      level: 2,
    },
    {
      id: 'th-2',
      ask: 'What actually damages the tooth?',
      kind: 'choice',
      options: ['Sugar', 'Acid made by germs', 'Hard food'],
      answer: 'Acid made by germs',
      teach: 'Germs eat the sugar and make acid, and the acid eats the tooth. '
        + 'That is why how often you eat sugar matters so much.',
      level: 3,
    },
    {
      id: 'th-3',
      ask: 'Why does a milk tooth matter if it will fall out anyway?',
      kind: 'choice',
      options: [
        'It holds the space for the adult tooth',
        'It does not matter',
        'It is stronger than an adult tooth',
      ],
      answer: 'It holds the space for the adult tooth',
      teach: 'Lose it too early and the adult tooth can come through crooked.',
      level: 4,
    },
  ],
})

/* ── friction ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'friction-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Friction is the rubbing between two surfaces that slows things down. '
      + 'Rough surfaces give more. Smooth give less. '
      + 'It can help you or get in your way.',
    method: [
      'Slide the same object on a rough surface, then a smooth one.',
      'Rougher means more friction and a shorter slide.',
      'Ask whether the friction is helping here or hindering.',
    ],
  },

  idea:
    'Rub your hands together and they get warm. '
    + 'That rubbing is friction. '
    + 'It happens whenever two surfaces slide against each other, '
    + 'and it always pushes against the way things are moving.',

  mechanism:
    'Friction is why nothing keeps moving for ever. '
    + 'A ball rolling on a rough floor is being pushed back the whole way, '
    + 'so it slows and stops. '
    + 'The same ball on smooth tiles goes much further. '
    + 'The important thing is that friction is neither good nor bad. '
    + 'It stops your shoes slipping and lets brakes work, '
    + 'and it also wears out machines and wastes effort. '
    + 'Whether you want more or less depends entirely on the job.',

  recap:
    'You know that a push can start, stop or turn something. '
    + 'Friction is a push that is always there, '
    + 'always against the direction of travel.',

  method: [
    'Find the two surfaces that are rubbing.',
    'Ask how rough each one is.',
    'Rougher means more friction and a quicker stop.',
    'Ask whether friction is helping or hindering here.',
    'Then make it rougher or smoother, depending on which you want.',
  ],

  worked: [
    {
      level: 2,
      ask: 'A ball rolls further on tiles than on sand. Why?',
      steps: [
        'Sand is rough and tiles are smooth.',
        'Rough gives more friction.',
      ],
      answer: 'Sand gives more friction, so the ball stops sooner.',
    },
    {
      level: 3,
      ask: 'Name one place friction helps and one where it gets in the way.',
      steps: [
        'Shoes grip the ground because of friction.',
        'Machine parts wear out because of friction.',
      ],
      answer: 'It helps your shoes grip. '
        + 'It hinders by wearing out moving parts.',
    },
    {
      level: 4,
      ask: 'Why does oil in a machine help?',
      steps: [
        'The parts rub against each other.',
        'Oil puts a slippery layer between them.',
        'Less rubbing means less heat and less wear.',
      ],
      answer: 'It lowers friction, so the parts last longer and less effort '
        + 'is wasted as heat.',
    },
  ],

  traps: [
    {
      mistake: 'Calling friction a bad thing.',
      why: 'Without it you could not walk. '
        + 'Whether you want it depends on the job.',
    },
    {
      mistake: 'Thinking a rolling ball stops on its own.',
      why: 'Friction is pushing against it the whole way. '
        + 'With less friction it would roll much further.',
    },
    {
      mistake: 'Thinking only rough things have friction.',
      why: 'Even smooth surfaces have some. '
        + 'Smooth means less, not none.',
    },
  ],

  extension:
    'Friction turns movement into heat, which is why your hands warm up. '
    + 'It is also how people made fire before matches: '
    + 'rub hard enough and long enough and the heat is enough to light dry '
    + 'grass.',

  figure: {
    alt: 'The same ball rolling on two floors. On the rough floor, drawn as '
      + 'a jagged line, it stops early, and a red arrow from it points back '
      + 'against the way it was going, labelled friction pushes back. On '
      + 'the smooth floor it travels much further before stopping.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<path d="M 60 226 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l '
      + '9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 '
      + '8 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 '
      + 'l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 l 9 -8 l 9 8 l '
      + '9 -8 l 9 8"/><circle cx="96" cy="198" r="20"/>'
      + '<circle cx="250" cy="198" r="20"/>'
      + '<line x1="124" y1="198" x2="224" y2="198" stroke="#0f8a4d"/>'
      + '<polyline points="211,188 224,198 211,208" stroke="#0f8a4d"/>'
      + '<line x1="240" y1="180" x2="208" y2="162" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<polyline points="224,160 204,160 212,178" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="252" y="156" font-size="17" text-anchor="start" '
      + 'fill="#c8433a" stroke="none">friction pushes back</text>'
      + '<text x="250" y="276" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">rough floor: it stops '
      + 'soon</text>'
      + '<line x1="60" y1="340" x2="600" y2="340" stroke-width="4"/>'
      + '<circle cx="96" cy="318" r="20"/>'
      + '<circle cx="520" cy="318" r="20"/>'
      + '<line x1="124" y1="318" x2="494" y2="318" stroke="#0f8a4d"/>'
      + '<polyline points="481,308 494,318 481,328" stroke="#0f8a4d"/>'
      + '<text x="320" y="384" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">smooth floor: it goes much '
      + 'further</text></svg>',
  },
  tables: [{
    caption: 'How to get more friction, and how to get less',
    columns: ['You want', 'What to do', 'Where you see it'],
    rows: [
      [
        'More friction',
        'Rougher surfaces, or press harder',
        'Shoe soles, and brakes',
      ],
      [
        'Less friction',
        'Smoother surfaces, oil, or wheels',
        'A bicycle chain, a trolley',
      ],
    ],
    note: 'Friction is neither good nor bad. Which one you want depends '
      + 'entirely on the job.',
  }],
  questions: [
    {
      id: 'fp-1',
      ask: 'Which surface gives more friction?',
      kind: 'choice',
      options: ['Sand', 'Smooth tiles'],
      answer: 'Sand',
      teach: 'Rougher surfaces give more friction, '
        + 'so things stop sooner on them.',
      level: 2,
    },
    {
      id: 'fp-2',
      ask: 'Is friction good or bad?',
      kind: 'choice',
      options: ['Good', 'Bad', 'It depends on the job'],
      answer: 'It depends on the job',
      teach: 'It lets your shoes grip and your brakes work. '
        + 'It also wears out machines. Same force, different jobs.',
      level: 3,
    },
    {
      id: 'fp-3',
      ask: 'Why does oil help a machine?',
      kind: 'choice',
      options: [
        'It lowers friction between the parts',
        'It makes the parts heavier',
        'It cools the metal only',
      ],
      answer: 'It lowers friction between the parts',
      teach: 'Oil keeps the surfaces from rubbing directly, '
        + 'so there is less wear and less wasted heat.',
      level: 4,
    },
  ],
})

/* ── magnets ──────────────────────────────────────────────────────────────── */

teach({
  topicId: 'magnets-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A magnet pulls iron and steel, and nothing else. '
      + 'It has two poles. '
      + 'Unlike poles pull together and like poles push apart.',
    method: [
      'Touch the magnet to the object.',
      'It sticks only if the object has iron or steel in it.',
      'Bring two magnets together both ways to find the poles.',
    ],
  },

  idea:
    'A magnet pulls some things and ignores everything else, '
    + 'and what decides it is not whether the thing is metal. '
    + 'Every magnet has two ends, called poles.',

  mechanism:
    'The part people get wrong is thinking a magnet attracts all metals. '
    + 'It does not. '
    + 'A coin may be metal and still not stick, '
    + 'because what matters is iron, not metal in general. '
    + 'The poles behave by a strict rule: '
    + 'opposite poles pull together and matching poles push apart. '
    + 'You can feel that push without the magnets ever touching, '
    + 'which is the strangest and most useful thing about them.',

  recap:
    'You can sort materials by what they do. '
    + 'This is a test that sorts them into two groups very sharply.',

  method: [
    'Take the magnet and touch it to the object.',
    'If it sticks, the object contains iron or steel.',
    'If it does not, it does not, however metal it looks.',
    'Take two magnets and bring two ends together.',
    'Feel a pull? Those are opposite poles.',
    'Feel a push? Those are matching poles. Turn one round and try again.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Will a magnet pick up a plastic spoon?',
      steps: [
        'A magnet pulls iron and steel.',
        'Plastic has neither.',
      ],
      answer: 'No.',
    },
    {
      level: 3,
      ask: 'A coin is metal but the magnet ignores it. Why?',
      steps: [
        'A magnet does not pull all metals.',
        'It pulls iron and steel.',
        'The coin is made of a different metal.',
      ],
      answer: 'Because metal is not the test. Iron is.',
    },
    {
      level: 4,
      ask: 'Two magnets push each other apart. How do you make them pull?',
      steps: [
        'A push means matching poles are facing.',
        'Turn one magnet round.',
        'Now opposite poles face each other.',
      ],
      answer: 'Turn one of them round.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a magnet attracts all metals.',
      why: 'Only iron and steel, and a couple of rarer metals. '
        + 'Aluminium and copper are ignored.',
    },
    {
      mistake: 'Thinking a magnet must touch to act.',
      why: 'Bring two together slowly and you feel the push before they meet. '
        + 'The force works across a gap.',
    },
    {
      mistake: 'Expecting a magnet to work the same at both ends.',
      why: 'The two ends behave oppositely towards another magnet. '
        + 'That is what having poles means.',
    },
  ],

  extension:
    'The Earth behaves like one enormous magnet, '
    + 'which is why a compass needle always swings to point the same way. '
    + 'The needle is a small magnet being pulled by a very large one.',

  figure: {
    alt: 'Two pairs of bar magnets with their ends named N and S. In the top '
      + 'pair an S faces an N and green arrows point them together, '
      + 'labelled opposite ends pull. In the bottom pair an N faces an N '
      + 'and red arrows point them apart, labelled matching ends push.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="40,90 190,90 190,146 40,146"/>'
      + '<line x1="115" y1="90" x2="115" y2="146"/>'
      + '<text x="78" y="128" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">N</text>'
      + '<text x="153" y="128" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">S</text>'
      + '<polygon points="290,90 440,90 440,146 290,146"/>'
      + '<line x1="365" y1="90" x2="365" y2="146"/>'
      + '<text x="328" y="128" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">N</text>'
      + '<text x="403" y="128" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">S</text>'
      + '<line x1="196" y1="118" x2="236" y2="118" stroke="#0f8a4d"/>'
      + '<polyline points="223,108 236,118 223,128" stroke="#0f8a4d"/>'
      + '<line x1="284" y1="118" x2="244" y2="118" stroke="#0f8a4d"/>'
      + '<polyline points="257,108 244,118 257,128" stroke="#0f8a4d"/>'
      + '<text x="540" y="124" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">they pull</text>'
      + '<polygon points="40,230 190,230 190,286 40,286"/>'
      + '<line x1="115" y1="230" x2="115" y2="286"/>'
      + '<text x="78" y="268" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">S</text>'
      + '<text x="153" y="268" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">N</text>'
      + '<polygon points="290,230 440,230 440,286 290,286"/>'
      + '<line x1="365" y1="230" x2="365" y2="286"/>'
      + '<text x="328" y="268" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">N</text>'
      + '<text x="403" y="268" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">S</text>'
      + '<line x1="236" y1="258" x2="196" y2="258" stroke="#c8433a"/>'
      + '<polyline points="209,248 196,258 209,268" stroke="#c8433a"/>'
      + '<line x1="244" y1="258" x2="284" y2="258" stroke="#c8433a"/>'
      + '<polyline points="271,248 284,258 271,268" stroke="#c8433a"/>'
      + '<text x="540" y="264" font-size="20" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">they push</text>'
      + '<text x="320" y="358" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">opposite ends pull, matching '
      + 'ends push</text></svg>',
  },
  tables: [{
    caption: 'What a magnet pulls and what it ignores',
    columns: ['Material', 'Does a magnet pull it'],
    rows: [
      ['Iron', 'Yes'],
      ['Steel', 'Yes'],
      ['Aluminium', 'No'],
      ['Copper', 'No'],
      ['Wood, plastic, glass', 'No'],
    ],
    note: 'What matters is iron, not metal in general, which is why a coin '
      + 'can be metal and still not stick.',
  }],
  questions: [
    {
      id: 'mg-1',
      ask: 'Which will a magnet pick up?',
      kind: 'choice',
      options: ['An iron nail', 'A plastic spoon', 'A glass marble'],
      answer: 'An iron nail',
      teach: 'Magnets pull iron and steel, and nothing else here.',
      level: 2,
    },
    {
      id: 'mg-2',
      ask: 'A magnet ignores an aluminium can. Why?',
      kind: 'choice',
      options: [
        'The can is too light',
        'Aluminium is not iron or steel',
        'The magnet is too weak',
      ],
      answer: 'Aluminium is not iron or steel',
      teach: 'Being metal is not enough. '
        + 'The test is whether it contains iron.',
      level: 3,
    },
    {
      id: 'mg-3',
      ask: 'Two magnet ends push apart. What are they?',
      kind: 'choice',
      options: ['Opposite poles', 'Matching poles'],
      answer: 'Matching poles',
      teach: 'Matching poles push, opposite poles pull. '
        + 'Turn one round and it will pull instead.',
      level: 4,
    },
  ],
})

/* ── where energy comes from ──────────────────────────────────────────────── */

teach({
  topicId: 'sources-of-energy',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Energy at home comes from the sun, water, wind, wood, charcoal, '
      + 'gas and oil. '
      + 'Renewable sources come back. The rest run out.',
    method: [
      'Name the source.',
      'Ask whether it comes back on its own.',
      'Comes back means renewable. Runs out means not.',
    ],
  },

  idea:
    'Everything that works needs energy, '
    + 'and in Ghana it reaches us from several different places. '
    + 'The question worth asking about each of them is the same one: '
    + 'will there be as much of it tomorrow.',

  mechanism:
    'The test for renewable is simple: '
    + 'will there be as much of it tomorrow as there was today, '
    + 'without anybody doing anything? '
    + 'The sun will rise again. The river will keep flowing. '
    + 'The wind will blow. Those are renewable. '
    + 'Oil took millions of years to form and we use it far faster than '
    + 'that, so it runs down. '
    + 'Wood sits in between, and this is the part worth thinking about: '
    + 'a tree does grow back, but only if it is replanted and given years. '
    + 'Cut faster than they grow and a renewable source stops being one.',

  recap:
    'You know that things need energy to move and to heat. '
    + 'This asks where that energy came from before it reached you.',

  method: [
    'Name the source.',
    'Ask whether it comes back on its own.',
    'Comes back means renewable.',
    'Runs out and does not return means not renewable.',
    'For wood, ask whether it is replanted. That decides it.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Is sunlight renewable?',
      steps: [
        'Will the sun shine again tomorrow?',
        'Yes, without anybody doing anything.',
      ],
      answer: 'Yes, it is renewable.',
    },
    {
      level: 3,
      ask: 'The Akosombo dam makes electricity from the Volta. '
        + 'Is that renewable?',
      steps: [
        'The water flows because of rain, and the rain comes from the sun.',
        'Both keep happening.',
      ],
      answer: 'Yes. It is driven by the water cycle, which does not run down.',
    },
    {
      level: 4,
      ask: 'Why is charcoal only sometimes renewable?',
      steps: [
        'Charcoal comes from trees, and trees grow back.',
        'But growing back takes years.',
        'If trees are cut faster than they are replanted, the supply falls.',
      ],
      answer: 'It is renewable only if trees are replanted and given time. '
        + 'Cut faster than they grow and it is not.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking renewable means endless and free.',
      why: 'It means it comes back. '
        + 'A dam still costs money and a solar panel still wears out.',
    },
    {
      mistake: 'Calling all wood renewable.',
      why: 'Only if it is replanted and given years. '
        + 'The rate of cutting is what decides.',
    },
    {
      mistake: 'Thinking electricity is a source of energy.',
      why: 'Electricity is how energy is carried to you. '
        + 'Something had to make it: water, sun, gas or oil.',
    },
  ],

  extension:
    'Almost every source traces back to the sun. '
    + 'Wind is caused by the sun heating air unevenly. '
    + 'Rain behind a dam was lifted by the sun. '
    + 'Even oil is ancient plants that grew in sunlight. '
    + 'The exception is nuclear, which comes from the atoms themselves.',

  figure: {
    alt: 'One question with three answers. From the question will there be '
      + 'as much of it tomorrow, one arrow leads to yes, which is renewable '
      + 'and names the sun, a river and wind. Another leads to no, which is '
      + 'not renewable and names gas and oil. A third leads to wood and '
      + 'charcoal, which are renewable only if the trees are replanted.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="160,56 480,56 480,118 160,118"/>'
      + '<text x="320" y="84" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">will there be as much of '
      + 'it</text>'
      + '<text x="320" y="108" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">tomorrow, on its own</text>'
      + '<line x1="130" y1="130" x2="510" y2="130"/>'
      + '<line x1="130" y1="130" x2="130" y2="184" stroke="#0f8a4d"/>'
      + '<polyline points="120,171 130,184 140,171" stroke="#0f8a4d"/>'
      + '<line x1="320" y1="130" x2="320" y2="184"/>'
      + '<polyline points="310,171 320,184 330,171"/>'
      + '<line x1="510" y1="130" x2="510" y2="184" stroke="#c8433a"/>'
      + '<polyline points="500,171 510,184 520,171" stroke="#c8433a"/>'
      + '<polygon points="30,190 230,190 230,300 30,300" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="130" y="218" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">yes</text>'
      + '<text x="130" y="248" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the sun, a river,</text>'
      + '<text x="130" y="272" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the wind</text>'
      + '<text x="130" y="330" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">renewable</text>'
      + '<polygon points="234,190 406,190 406,300 234,300"/>'
      + '<text x="320" y="218" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">only if replanted</text>'
      + '<text x="320" y="252" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">wood and</text>'
      + '<text x="320" y="276" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">charcoal</text>'
      + '<text x="320" y="330" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">it depends on us</text>'
      + '<polygon points="410,190 610,190 610,300 410,300" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="510" y="218" font-size="20" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">no</text>'
      + '<text x="510" y="252" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">gas and oil</text>'
      + '<text x="510" y="330" font-size="19" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">not renewable</text></svg>',
  },
  tables: [{
    caption: 'Which sources of energy come back and which run down',
    columns: ['Source', 'Does it come back on its own', 'So it is'],
    rows: [
      ['The sun', 'Yes, it rises again', 'Renewable'],
      ['A river behind a dam', 'Yes, it keeps flowing', 'Renewable'],
      ['Wind', 'Yes', 'Renewable'],
      [
        'Wood and charcoal',
        'Only if trees are replanted and given years',
        'Renewable only if it is replanted',
      ],
      [
        'Gas and oil',
        'No, it took millions of years to form',
        'Not renewable',
      ],
    ],
    note: 'Cut trees faster than they grow back and a renewable source stops '
      + 'being one.',
  }],
  questions: [
    {
      id: 'se-1',
      ask: 'Which of these is renewable?',
      kind: 'choice',
      options: ['Sunlight', 'Petrol', 'Coal'],
      answer: 'Sunlight',
      teach: 'The sun comes back every day without anybody doing anything. '
        + 'Petrol and coal run down.',
      level: 2,
    },
    {
      id: 'se-2',
      ask: 'Is electricity a source of energy?',
      kind: 'choice',
      options: ['Yes', 'No, it is how energy is carried'],
      answer: 'No, it is how energy is carried',
      teach: 'Something had to make it first: water at a dam, sun, gas or oil.',
      level: 3,
    },
    {
      id: 'se-3',
      ask: 'What decides whether firewood is renewable?',
      kind: 'choice',
      options: [
        'Whether trees are replanted and given time to grow',
        'How dry the wood is',
        'How much it costs',
      ],
      answer: 'Whether trees are replanted and given time to grow',
      teach: 'Cut faster than they grow back and a renewable source stops '
        + 'being one.',
      level: 4,
    },
  ],
})

/* ── food and a balanced diet ─────────────────────────────────────────────── */

teach({
  topicId: 'food-and-nutrition',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Food does three jobs: it gives energy, it builds the body, '
      + 'and it protects it. '
      + 'A balanced meal has something from each.',
    method: [
      'Find the energy food: rice, yam, kenkey, oil.',
      'Find the building food: fish, beans, eggs, meat.',
      'Find the protecting food: fruit and vegetables.',
    ],
  },

  idea:
    'Food does three different jobs: '
    + 'it gives energy, it builds the body, and it protects it. '
    + 'A balanced meal has something doing each of them.',

  mechanism:
    'Balance matters because the jobs cannot stand in for each other. '
    + 'Eat only energy food and you will feel full while your body has '
    + 'nothing to build with, '
    + 'which is why a child can eat plenty and still not grow properly. '
    + 'That is the thing to understand: '
    + 'being full and being fed are not the same. '
    + 'A plate of plain rice fills a stomach and does one job out of three.',

  recap:
    'You know that living things need food to grow. '
    + 'This is about which food does which part of that.',

  method: [
    'Look at the plate.',
    'Find the energy food. There is usually plenty.',
    'Find the building food.',
    'Find the protecting food.',
    'Any job missing? That is what the meal needs.',
    'Add water. It is needed for everything the body does.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Which group does fish belong to?',
      steps: [
        'Fish is what the body uses to build and repair.',
      ],
      answer: 'The building group.',
    },
    {
      level: 3,
      ask: 'A meal is plain rice and nothing else. What is missing?',
      steps: [
        'Rice gives energy.',
        'There is no fish, bean or egg, so nothing to build with.',
        'There is no fruit or vegetable, so nothing to protect with.',
      ],
      answer: 'The building and protecting groups. '
        + 'It fills you without feeding you properly.',
    },
    {
      level: 4,
      ask: 'How can somebody eat a lot and still not be well fed?',
      steps: [
        'Being full comes from the amount.',
        'Being fed comes from the mix.',
        'Lots of one group leaves the other two jobs undone.',
      ],
      answer: 'Because the body needs all three jobs done, '
        + 'and no amount of one group does the work of another.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a big plate means a good meal.',
      why: 'Size is not balance. '
        + 'Check that all three groups are on the plate.',
    },
    {
      mistake: 'Thinking only meat builds the body.',
      why: 'Beans, groundnuts, eggs and fish do the same job, '
        + 'and often cost much less.',
    },
    {
      mistake: 'Forgetting water.',
      why: 'Every process in the body uses it. '
        + 'It is part of eating well, not separate from it.',
    },
  ],

  extension:
    'Beans and groundnuts do the building job at a fraction of the price '
    + 'of meat, which is why so many Ghanaian dishes pair them with a '
    + 'starchy food. '
    + 'The combination was worked out by cooks long before anybody wrote '
    + 'down the science.',

  figure: {
    alt: 'Two plates. The first is divided into three parts named energy, '
      + 'building and protecting, and is labelled a balanced meal. The '
      + 'second holds only energy food, with the other two parts empty and '
      + 'marked in red, and is labelled full, but two jobs are not being '
      + 'done.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="160" cy="180" r="110"/>'
      + '<circle cx="160" cy="180" r="96"/>'
      + '<line x1="160" y1="84" x2="160" y2="276"/>'
      + '<line x1="160" y1="180" x2="256" y2="180"/>'
      + '<text x="112" y="174" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">energy</text>'
      + '<text x="206" y="148" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">building</text>'
      + '<text x="206" y="222" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">protecting</text>'
      + '<text x="160" y="334" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">a balanced meal</text>'
      + '<circle cx="470" cy="180" r="110"/>'
      + '<circle cx="470" cy="180" r="96"/>'
      + '<line x1="470" y1="84" x2="470" y2="276"/>'
      + '<line x1="470" y1="180" x2="566" y2="180"/>'
      + '<text x="422" y="174" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">energy</text>'
      + '<line x1="502" y1="128" x2="546" y2="172" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="546" y1="128" x2="502" y2="172" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="502" y1="200" x2="546" y2="244" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="546" y1="200" x2="502" y2="244" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="470" y="334" font-size="20" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">full, but two jobs undone</text>'
      + '<text x="320" y="380" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">being full and being fed are not '
      + 'the same</text></svg>',
  },
  tables: [{
    caption: 'The three jobs food does, and which foods do them',
    columns: ['The job', 'Foods that do it'],
    rows: [
      ['Gives energy', 'Rice, yam, plantain, kenkey, oil'],
      ['Builds the body', 'Fish, beans, eggs, meat, groundnuts'],
      ['Protects it', 'Fruit and vegetables'],
    ],
    note: 'A balanced meal has something from each, because the three jobs '
      + 'cannot stand in for one another. Water is needed for everything '
      + 'the body does.',
  }],
  questions: [
    {
      id: 'fn-1',
      ask: 'Which group gives the body energy?',
      kind: 'choice',
      options: ['Rice and yam', 'Fish and beans', 'Oranges and leaves'],
      answer: 'Rice and yam',
      teach: 'Starchy foods give energy. '
        + 'Fish and beans build. Fruit and vegetables protect.',
      level: 2,
    },
    {
      id: 'fn-2',
      ask: 'A plate of plain rice is missing which jobs?',
      kind: 'choice',
      options: [
        'Building and protecting',
        'Energy only',
        'Nothing, it is complete',
      ],
      answer: 'Building and protecting',
      teach: 'Rice does the energy job. '
        + 'Nothing on the plate builds or protects.',
      level: 3,
    },
    {
      id: 'fn-3',
      ask: 'Can somebody be full but not well fed?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'Yes',
      teach: 'Full comes from the amount, fed comes from the mix. '
        + 'A lot of one group leaves two jobs undone.',
      level: 4,
    },
  ],
})

/* ── waste and what to do with it ─────────────────────────────────────────── */

teach({
  topicId: 'waste-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Waste that rots can go back to the soil. '
      + 'Waste that does not must be collected or recycled. '
      + 'Burning plastic and blocking gutters both cause real harm.',
    method: [
      'Sort waste into what rots and what does not.',
      'What rots can be composted.',
      'What does not should be collected or recycled, never burned.',
    ],
  },

  idea:
    'Some waste rots away and some does not, '
    + 'and that one question decides what should be done with it. '
    + 'So the sorting is not tidiness. It is the whole of the job.',

  mechanism:
    'Two common habits cause most of the harm, and both have a clear reason. '
    + 'Burning plastic does not make it disappear. '
    + 'It turns it into smoke carrying substances that damage lungs, '
    + 'and the people breathing it are whoever is standing nearby. '
    + 'Throwing waste in a gutter does not remove it either. '
    + 'It blocks the gutter, so the next heavy rain has nowhere to go '
    + 'and floods the street. '
    + 'Standing water then breeds mosquitoes. '
    + 'In both cases the waste has not gone anywhere. '
    + 'It has only moved to where it does more damage.',

  recap:
    'You know that mosquitoes breed in standing water, '
    + 'and you know germs travel. '
    + 'Both of those come back in this topic.',

  method: [
    'Sort the waste as you make it, not later.',
    'Ask of each piece: will this rot away?',
    'If it rots, it can go on a compost heap.',
    'If it does not, keep it for collection or for reuse.',
    'Never burn plastic, and never put anything in a gutter.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Which of these rots away: a banana peel or a plastic bottle?',
      steps: [
        'A banana peel is from a plant and breaks down.',
        'A plastic bottle does not.',
      ],
      answer: 'The banana peel.',
    },
    {
      level: 3,
      ask: 'What happens when waste is thrown into a gutter?',
      steps: [
        'The gutter blocks.',
        'Rain water has nowhere to run, so the street floods.',
        'Water stands, and mosquitoes breed in it.',
      ],
      answer: 'Flooding, and then mosquitoes. '
        + 'The waste did not leave, it only moved.',
    },
    {
      level: 4,
      ask: 'Somebody says burning rubbish gets rid of it. Are they right?',
      steps: [
        'The pile is smaller afterwards, so it looks true.',
        'But the plastic became smoke.',
        'The smoke carries substances that harm the lungs of whoever is near.',
      ],
      answer: 'No. It turned a pile you can see into smoke you breathe.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking burning makes waste disappear.',
      why: 'It becomes smoke, and somebody breathes it. '
        + 'Plastic smoke in particular is harmful.',
    },
    {
      mistake: 'Thinking a gutter is a drain for rubbish.',
      why: 'It is a drain for water. '
        + 'Rubbish blocks it and the next rain floods the street.',
    },
    {
      mistake: 'Sorting waste only once it is already mixed.',
      why: 'Mixed waste is far harder to separate, '
        + 'and wet food spoils paper and card. Sort as you go.',
    },
  ],

  extension:
    'Peelings and leaves piled in a corner and left will rot down into '
    + 'compost, which puts goodness back into soil for growing. '
    + 'That turns a waste problem into something useful, '
    + 'and it costs nothing but a corner of the yard and some patience.',

  figure: {
    alt: 'Two things people do with waste, both drawn in red. Burning '
      + 'plastic leads to smoke, and smoke leads to the lungs of whoever is '
      + 'standing near. Waste in a gutter leads to a blocked gutter, then a '
      + 'flooded street, then mosquitoes. Under them it says the waste has '
      + 'not gone anywhere, it has moved to where it does more damage.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="40" y="86" font-size="20" text-anchor="start" '
      + 'fill="#c8433a" stroke="none">burning plastic</text>'
      + '<polygon points="40,100 220,100 220,158 40,158" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="130" y="134" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">smoke</text>'
      + '<line x1="226" y1="129" x2="282" y2="129" stroke="#c8433a"/>'
      + '<polyline points="269,119 282,129 269,139" stroke="#c8433a"/>'
      + '<polygon points="288,100 468,100 468,158 288,158" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="378" y="134" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">into the lungs</text>'
      + '<text x="40" y="222" font-size="20" text-anchor="start" '
      + 'fill="#c8433a" stroke="none">waste in a gutter</text>'
      + '<polygon points="40,236 190,236 190,294 40,294" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="115" y="270" font-size="17" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">it blocks</text>'
      + '<line x1="196" y1="265" x2="232" y2="265" stroke="#c8433a"/>'
      + '<polyline points="219,255 232,265 219,275" stroke="#c8433a"/>'
      + '<polygon points="238,236 388,236 388,294 238,294" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="313" y="270" font-size="17" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">the street floods</text>'
      + '<line x1="394" y1="265" x2="430" y2="265" stroke="#c8433a"/>'
      + '<polyline points="417,255 430,265 417,275" stroke="#c8433a"/>'
      + '<polygon points="436,236 586,236 586,294 436,294" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="511" y="270" font-size="17" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">mosquitoes</text>'
      + '<text x="320" y="350" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the waste has not gone '
      + 'anywhere</text>'
      + '<text x="320" y="378" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">it has moved to where it does '
      + 'more damage</text></svg>',
  },
  tables: [{
    caption: 'What to do with each kind of waste',
    columns: ['Waste', 'Does it rot', 'What to do with it'],
    rows: [
      ['Peelings, leaves, food scraps', 'Yes', 'Put it on a compost heap'],
      ['Plastic bottles', 'No', 'Keep it for collection or reuse'],
      ['Glass and metal tins', 'No', 'Keep it for collection or reuse'],
      [
        'Batteries and medicines',
        'No',
        'These need special handling, so ask an adult',
      ],
    ],
    note: 'Never burn plastic, and never put anything in a gutter. Neither '
      + 'of those makes the waste go away.',
  }],
  questions: [
    {
      id: 'wa-1',
      ask: 'Which of these rots away?',
      kind: 'choice',
      options: ['A plastic bag', 'Banana peelings', 'A glass bottle'],
      answer: 'Banana peelings',
      teach: 'They come from a plant and break down into the soil. '
        + 'Plastic and glass do not.',
      level: 2,
    },
    {
      id: 'wa-2',
      ask: 'What happens after rubbish blocks a gutter?',
      kind: 'choice',
      options: [
        'The street floods and mosquitoes breed',
        'The rubbish rots away safely',
        'Nothing much',
      ],
      answer: 'The street floods and mosquitoes breed',
      teach: 'The water has nowhere to run, so it stands. '
        + 'Standing water is where mosquitoes lay eggs.',
      level: 3,
    },
    {
      id: 'wa-3',
      ask: 'Why should plastic never be burned?',
      kind: 'choice',
      options: [
        'The smoke carries substances that harm the lungs',
        'It takes too long',
        'It does not burn',
      ],
      answer: 'The smoke carries substances that harm the lungs',
      teach: 'Burning does not remove it. '
        + 'It turns a pile you can see into smoke that people nearby breathe.',
      level: 4,
    },
  ],
})
