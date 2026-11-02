/**
 * Stored lessons for Basic 6 Science, Our World Our People, Ghanaian
 * Language and Computing. The last of primary.
 *
 * Written at about grade 6, with a `brief` form on every topic.
 *
 * The first aid lesson is written to be acted on, and it is deliberately
 * clear about its own limit: what a child should do, and the point at which
 * they should stop and fetch an adult. A first aid lesson that leaves that
 * out is worse than none.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── acids and bases around us ────────────────────────────────────────────── */

teach({
  topicId: 'acids-bases-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Acids taste sour, like lime. Bases feel slippery, like soap. '
      + 'Neutral is neither. '
      + 'An indicator changes colour to tell you which you have.',
    method: [
      'Make an indicator by boiling red cabbage or using litmus paper.',
      'Dip it in the liquid and watch the colour.',
      'Never taste or touch an unknown liquid to find out.',
    ],
  },

  idea:
    'A liquid can be acidic, or basic, or neither of the two, '
    + 'and you cannot tell by looking at it. '
    + 'You find out which by using an indicator, '
    + 'a substance that changes colour depending on what it is put in.',

  mechanism:
    'The reason an indicator matters is safety as much as science. '
    + 'The old tests were taste and touch: sour means acid, slippery means '
    + 'base. '
    + 'Those work for lime juice and soap and will injure you with a '
    + 'stronger substance, '
    + 'and many dangerous liquids look exactly like water. '
    + 'An indicator lets you answer the question without putting anything '
    + 'in your mouth or on your skin, '
    + 'which is why it replaced the old tests entirely.',

  recap:
    'You know how to separate mixtures and that a solution is something '
    + 'dissolved in water. '
    + 'The liquids here are solutions.',

  method: [
    'Boil chopped red cabbage in water and keep the coloured liquid, '
      + 'or use litmus paper.',
    'Put a little of the liquid you are testing in a clean container.',
    'Add a few drops of indicator, or dip the paper.',
    'Note the colour.',
    'Compare with a known acid and a known base.',
    'Never taste. Never touch an unknown liquid.',
  ],

  worked: [
    {
      level: 5,
      ask: 'Is lime juice acidic or basic?',
      steps: [
        'It tastes sour.',
      ],
      answer: 'Acidic.',
    },
    {
      level: 6,
      ask: 'Why use an indicator instead of tasting?',
      steps: [
        'Taste works for lime juice.',
        'A strong acid would burn your mouth.',
        'Many dangerous liquids look like water.',
      ],
      answer: 'Because the old tests are unsafe with anything stronger, '
        + 'and you cannot tell by looking.',
    },
    {
      level: 6,
      ask: 'Wood ash water is used for soaking some foods. '
        + 'What does that tell you about it?',
      steps: [
        'Ash water feels slippery.',
        'Slippery suggests a base.',
      ],
      answer: 'It is basic. '
        + 'Cooks used that property long before anybody named it.',
    },
  ],

  traps: [
    {
      mistake: 'Tasting or touching to find out.',
      why: 'Safe for lime juice and dangerous for anything stronger, '
        + 'and you cannot tell which you have by looking.',
    },
    {
      mistake: 'Thinking all acids are dangerous.',
      why: 'The juice of an orange is an acid. '
        + 'Strength matters more than the category.',
    },
    {
      mistake: 'Using a dirty container.',
      why: 'What was in it before will change your result, '
        + 'and you will trust a reading that is wrong.',
    },
  ],

  extension:
    'An acid and a base added together cancel each other out, '
    + 'which is called neutralising. '
    + 'It is why baking soda settles an acid stomach, '
    + 'and why lime juice takes the smell of fish off your hands.',

  figure: {
    alt: 'On the left, two red boxes reading taste it and touch it, each '
      + 'with a red cross beside it and labelled these will injure you. An '
      + 'arrow leads right to a test tube with a dropper above it, labelled '
      + 'add a few drops and read the colour.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">how to tell, without touching '
      + 'it</text><line x1="50" y1="110" x2="80" y2="140" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<line x1="80" y1="110" x2="50" y2="140" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<polygon points="96,98 300,98 300,152 96,152" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="198" y="134" font-size="22" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">taste it</text>'
      + '<line x1="50" y1="202" x2="80" y2="232" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<line x1="80" y1="202" x2="50" y2="232" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<polygon points="96,190 300,190 300,244 96,244" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="198" y="226" font-size="22" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">touch it</text>'
      + '<text x="176" y="294" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">these will injure you</text>'
      + '<line x1="326" y1="170" x2="390" y2="170"/>'
      + '<polyline points="377,160 390,170 377,180"/>'
      + '<line x1="448" y1="72" x2="448" y2="104"/>'
      + '<circle cx="448" cy="112" r="7" fill="currentColor"/>'
      + '<polygon points="426,178 470,178 470,244 461,260 435,260 426,244" '
      + 'fill="#0f8a4d" fill-opacity="0.2" stroke="none"/>'
      + '<polygon points="424,130 472,130 472,244 462,262 434,262 '
      + '424,244"/><path d="M 426 178 Q 448 168 470 178" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="448" y="300" font-size="18" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">add a few drops</text>'
      + '<text x="448" y="326" font-size="18" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">and read the colour</text></svg>',
  },
  tables: [{
    caption: 'Which everyday liquids are acidic and which are basic',
    columns: ['Liquid', 'Which it is'],
    rows: [
      ['Lime juice, vinegar, soured milk', 'Acidic'],
      ['Soap, wood ash water, baking soda', 'Basic'],
      ['Pure water', 'Neutral'],
    ],
    note: 'The colours your own indicator gives depend on what you made it '
      + 'from, so always test a known acid and a known base beside the '
      + 'liquid you are asking about.',
  }],
  questions: [
    {
      id: 'ab-1',
      ask: 'Lime juice is:',
      kind: 'choice',
      options: ['Acidic', 'Basic', 'Neutral'],
      answer: 'Acidic',
      teach: 'Sour taste indicates an acid. '
        + 'Soap and ash water are the basic ones.',
      level: 5,
    },
    {
      id: 'ab-2',
      ask: 'Why test with an indicator instead of tasting?',
      kind: 'choice',
      options: [
        'A strong acid would injure you and looks like water',
        'Indicators are more interesting',
        'Tasting is slower',
      ],
      answer: 'A strong acid would injure you and looks like water',
      teach: 'You cannot tell strength by looking, '
        + 'so the safe test is the only sensible one.',
      level: 6,
    },
    {
      id: 'ab-3',
      ask: 'Are all acids dangerous?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'Orange juice is an acid. '
        + 'How strong it is matters far more than which group it is in.',
      level: 6,
    },
  ],
})

/* ── simple machines ──────────────────────────────────────────────────────── */

teach({
  topicId: 'simple-machines-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A simple machine makes a job easier by trading force for distance. '
      + 'A lever, a ramp and a pulley all let you push less, '
      + 'over a longer way.',
    method: [
      'Find what is making the job easier.',
      'Ask what you give up: usually distance or time.',
      'Less force over more distance is the trade.',
    ],
  },

  idea:
    'A simple machine makes a job easier, '
    + 'and every one of them does it the same way: '
    + 'it lets you use a smaller force over a longer distance.',

  mechanism:
    'None of them reduces the work. '
    + 'They trade force for distance. '
    + 'Pushing a barrel up a ramp takes less force than lifting it, '
    + 'and you push it much further than the height you gained. '
    + 'A longer lever needs less push and your end travels further. '
    + 'That is the bargain in every one of them, '
    + 'and understanding it tells you what to expect from a machine you '
    + 'have never seen: '
    + 'if it makes the force smaller, something else got bigger.',

  recap:
    'You know that a push can start, stop or turn something, '
    + 'and that friction resists movement. '
    + 'Machines work with both.',

  method: [
    'Identify the machine: lever, ramp, pulley, wheel.',
    'Ask what job it is making easier.',
    'Ask what you give up in exchange.',
    'Remember the total work does not fall.',
  ],

  worked: [
    {
      level: 5,
      ask: 'Why is pushing a barrel up a ramp easier than lifting it?',
      steps: [
        'Lifting means taking the whole weight at once.',
        'A ramp spreads the rise over a longer distance.',
      ],
      answer: 'Because you use less force, over a longer distance.',
    },
    {
      level: 6,
      ask: 'What do you give up when you use a ramp?',
      steps: [
        'The force is smaller.',
        'The distance travelled is greater.',
      ],
      answer: 'Distance. You push further than the height you gained.',
    },
    {
      level: 6,
      ask: 'Does a machine reduce the total work done?',
      steps: [
        'Less force over more distance.',
        'The two changes cancel.',
      ],
      answer: 'No. It makes the job easier to do, not smaller.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a machine creates force from nothing.',
      why: 'It trades. Less force always means more distance.',
    },
    {
      mistake: 'Thinking a longer lever is always better.',
      why: 'It needs less force and more room and more movement. '
        + 'In a tight space a short lever may be the only option.',
    },
    {
      mistake: 'Forgetting friction.',
      why: 'A ramp with a rough surface costs you some of what it saved.',
    },
  ],

  extension:
    'Every complicated machine is simple machines combined. '
    + 'A bicycle has levers in the brakes, wheels on axles, '
    + 'and a chain working as a kind of pulley. '
    + 'Take any machine apart and you find these few ideas repeated.',

  figure: {
    alt: 'The same barrel raised to the same height two ways. Lifted '
      + 'straight up it needs one short arrow drawn thick, marked a big '
      + 'force over a short distance. Pushed up a ramp it needs a long thin '
      + 'green arrow, marked a small force over a long distance. The height '
      + 'gained is the same in both.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="44" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the same barrel, the same '
      + 'height</text><line x1="40" y1="300" x2="600" y2="300"/>'
      + '<line x1="190" y1="300" x2="190" y2="150" stroke-dasharray="7 7"/>'
      + '<ellipse cx="190" cy="136" rx="30" ry="22"/>'
      + '<line x1="150" y1="296" x2="150" y2="162" stroke-width="9"/>'
      + '<polyline points="140,175 150,162 160,175" stroke-width="9"/>'
      + '<text x="170" y="336" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">lifted straight up</text>'
      + '<text x="130" y="200" font-size="17" text-anchor="end" '
      + 'fill="currentColor" stroke="none">a big force,</text>'
      + '<text x="130" y="222" font-size="17" text-anchor="end" '
      + 'fill="currentColor" stroke="none">a short way</text>'
      + '<polygon points="330,300 600,300 600,150"/>'
      + '<ellipse cx="576" cy="128" rx="30" ry="22"/>'
      + '<line x1="330" y1="300" x2="600" y2="150" stroke="#0f8a4d" '
      + 'stroke-width="5"/>'
      + '<polyline points="566,170 598,150 586,182" stroke="#0f8a4d" '
      + 'stroke-width="5"/>'
      + '<text x="466" y="336" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">pushed up the ramp</text>'
      + '<text x="470" y="266" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a small force,</text>'
      + '<text x="470" y="288" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a long way</text>'
      + '<text x="590" y="228" font-size="17" text-anchor="end" '
      + 'fill="currentColor" stroke="none">same height</text></svg>',
  },
  tables: [{
    caption: 'What each machine gives you and what it costs',
    columns: ['Machine', 'What it makes easier', 'What you give up'],
    rows: [
      [
        'Lever',
        'Lifting a heavy load with a pole',
        'Your own end has to travel further',
      ],
      [
        'Ramp',
        'Raising a load without lifting it',
        'You push it much further than the height gained',
      ],
      [
        'Pulley',
        'Pulling down instead of lifting up',
        'The same bargain: more rope for less force',
      ],
    ],
    note: 'None of them reduces the work. If the force got smaller, '
      + 'something else got bigger.',
  }],
  questions: [
    {
      id: 'sm6-1',
      ask: 'Why is a ramp easier than lifting?',
      kind: 'choice',
      options: [
        'Less force, over a longer distance',
        'It removes the weight',
        'It reduces the work',
      ],
      answer: 'Less force, over a longer distance',
      teach: 'The machine trades. '
        + 'Smaller force always costs you distance.',
      level: 5,
    },
    {
      id: 'sm6-2',
      ask: 'Does a simple machine reduce the total work?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'It makes the job easier to do, not smaller. '
        + 'Less force over more distance cancels out.',
      level: 6,
    },
    {
      id: 'sm6-3',
      ask: 'A lever needs less force when:',
      kind: 'choice',
      options: ['The arm is longer', 'The arm is shorter', 'It is made of metal'],
      answer: 'The arm is longer',
      teach: 'And your end then travels further, which is the trade.',
      level: 6,
    },
  ],
})

/* ── simple circuits ──────────────────────────────────────────────────────── */

teach({
  topicId: 'electricity-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A circuit must be a complete loop from one end of the cell, '
      + 'through the bulb, and back to the other end. '
      + 'A break anywhere stops everything.',
    method: [
      'Trace the loop with your finger, all the way round.',
      'A gap anywhere means nothing works.',
      'Check the connections first, then the bulb, then the cell.',
    ],
  },

  idea:
    'To light a bulb you need a cell, wires and the bulb, '
    + 'joined in a complete loop. '
    + 'Electricity must be able to leave one end of the cell, '
    + 'pass through the bulb, and return to the other end.',

  mechanism:
    'The loop is the whole idea, and it explains every fault. '
    + 'A break anywhere stops everything, '
    + 'not just the part after the break, '
    + 'because nothing can flow in a path that does not come back. '
    + 'That is also why a switch works: '
    + 'it is a deliberate break you can open and close. '
    + 'So when a circuit does not work, you do not look for the broken bit. '
    + 'You trace the loop and find where it stops being a loop.',

  recap:
    'You know that metals conduct and that wood and plastic do not. '
    + 'Wires are metal inside plastic for exactly that reason.',

  method: [
    'Connect one wire from the cell to the bulb.',
    'Connect a second wire from the bulb back to the other end of the cell.',
    'Trace the loop with your finger. It must come back to where it started.',
    'Not working? Check each connection is tight.',
    'Then try a different bulb.',
    'Then try a different cell.',
    'Change one thing at a time.',
  ],

  worked: [
    {
      level: 5,
      ask: 'What is needed to light a bulb?',
      steps: [
        'A source, a path out, the bulb, and a path back.',
      ],
      answer: 'A cell, wires and a bulb in a complete loop.',
    },
    {
      level: 6,
      ask: 'The bulb does not light. How do you find the fault?',
      steps: [
        'Trace the loop and look for a gap.',
        'Check connections are tight.',
        'Then swap the bulb, then the cell, one at a time.',
      ],
      answer: 'Trace the loop first, then change one thing at a time.',
    },
    {
      level: 6,
      ask: 'Why does a break anywhere stop the whole circuit?',
      steps: [
        'Electricity must return to the cell.',
        'A gap means there is no return path at all.',
      ],
      answer: 'Because without a complete loop nothing can flow anywhere, '
        + 'not just past the break.',
    },
  ],

  traps: [
    {
      mistake: 'Changing several things at once.',
      why: 'Then you never learn which one was the fault.',
    },
    {
      mistake: 'Thinking only the part after the break stops working.',
      why: 'Nothing flows at all. '
        + 'A loop with a gap is not a loop.',
    },
    {
      mistake: 'Experimenting with mains electricity.',
      why: 'Cells are safe. Wall sockets are not, and the difference is '
        + 'not a matter of being careful.',
    },
  ],

  extension:
    'In a series circuit the bulbs share one loop, '
    + 'so removing one breaks it and all go out. '
    + 'In a parallel circuit each has its own path, '
    + 'so one can fail and the others stay lit. '
    + 'House wiring is parallel, for exactly that reason.',

  figure: {
    alt: 'Two circuits. In the first the wire runs from the cell to the bulb '
      + 'and back to the cell, a complete loop, and the bulb is lit. In the '
      + 'second there is a gap in the wire marked in red, and the bulb is '
      + 'dark, with a note that one break stops everything.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="60,130 260,130 260,280 60,280"/>'
      + '<polygon points="136,262 184,262 184,298 136,298"/>'
      + '<line x1="160" y1="262" x2="160" y2="250"/>'
      + '<text x="160" y="330" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the cell</text>'
      + '<circle cx="160" cy="130" r="26"/>'
      + '<line x1="142" y1="112" x2="178" y2="148"/>'
      + '<line x1="178" y1="112" x2="142" y2="148"/>'
      + '<line x1="192" y1="130" x2="206" y2="130"/>'
      + '<line x1="183" y1="153" x2="193" y2="163"/>'
      + '<line x1="160" y1="162" x2="160" y2="176"/>'
      + '<line x1="137" y1="153" x2="127" y2="163"/>'
      + '<line x1="128" y1="130" x2="114" y2="130"/>'
      + '<line x1="137" y1="107" x2="127" y2="97"/>'
      + '<line x1="160" y1="98" x2="160" y2="84"/>'
      + '<line x1="183" y1="107" x2="193" y2="97"/>'
      + '<text x="160" y="62" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the bulb lights</text>'
      + '<text x="160" y="206" font-size="18" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">a complete loop</text>'
      + '<line x1="380" y1="130" x2="580" y2="130"/>'
      + '<line x1="580" y1="130" x2="580" y2="280"/>'
      + '<line x1="380" y1="280" x2="580" y2="280"/>'
      + '<line x1="380" y1="130" x2="380" y2="182"/>'
      + '<line x1="380" y1="228" x2="380" y2="280"/>'
      + '<line x1="368" y1="182" x2="392" y2="182" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<line x1="368" y1="228" x2="392" y2="228" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<polygon points="456,262 504,262 504,298 456,298"/>'
      + '<line x1="480" y1="262" x2="480" y2="250"/>'
      + '<text x="480" y="330" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the cell</text>'
      + '<circle cx="480" cy="130" r="26"/>'
      + '<text x="480" y="62" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the bulb stays dark</text>'
      + '<text x="480" y="200" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">one break</text>'
      + '<text x="480" y="226" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">stops everything</text></svg>',
  },
  questions: [
    {
      id: 'el-1',
      ask: 'What shape must a working circuit be?',
      kind: 'choice',
      options: ['A complete loop', 'A straight line', 'Any shape'],
      answer: 'A complete loop',
      teach: 'Electricity must leave the cell and return to it.',
      level: 5,
    },
    {
      id: 'el-2',
      ask: 'There is a break in the wire. What happens?',
      kind: 'choice',
      options: [
        'Nothing in the circuit works',
        'Only the part after the break stops',
        'The bulb dims',
      ],
      answer: 'Nothing in the circuit works',
      teach: 'A loop with a gap is not a loop, so nothing flows anywhere.',
      level: 6,
    },
    {
      id: 'el-3',
      ask: 'How should you find a fault?',
      kind: 'choice',
      options: [
        'Change one thing at a time',
        'Change several things quickly',
        'Start again from scratch',
      ],
      answer: 'Change one thing at a time',
      teach: 'Otherwise you fix it and never learn what was wrong.',
      level: 6,
    },
  ],
})

/* ── sound ────────────────────────────────────────────────────────────────── */

teach({
  topicId: 'sound-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Sound comes from something vibrating. '
      + 'Faster vibration gives a higher note. '
      + 'Sound needs a material to travel through.',
    method: [
      'Find what is vibrating. Touch it and feel it.',
      'Make it vibrate faster for a higher note: shorter, tighter, smaller.',
      'Stop the vibration and the sound stops at once.',
    ],
  },

  idea:
    'Every sound comes from something vibrating. '
    + 'Pluck a string and you can see it shake. '
    + 'Touch your throat while you speak and you can feel it. '
    + 'Stop the vibration and the sound stops.',

  mechanism:
    'How high a note sounds depends on how fast the vibration is. '
    + 'Faster gives a higher note. '
    + 'That single rule explains every instrument. '
    + 'So when you want to predict what an unfamiliar instrument will sound '
    + 'like, '
    + 'you ask what is vibrating and how fast it can.',

  recap:
    'You know that your ears catch sound, '
    + 'and that sound travels in the dark because it is not light.',

  method: [
    'Find the part that vibrates.',
    'Touch it gently and feel the shaking.',
    'Stop it and the sound stops.',
    'To raise the note, make the vibration faster.',
    'Shorter, tighter or smaller all vibrate faster.',
    'Remember sound needs something to travel through: air, water, wood.',
  ],

  worked: [
    {
      level: 5,
      ask: 'What makes a sound?',
      steps: [
        'Every sound traces back to something shaking.',
      ],
      answer: 'Something vibrating.',
    },
    {
      level: 6,
      ask: 'Why does a short string sound higher than a long one?',
      steps: [
        'A short string vibrates faster.',
        'Faster vibration means a higher note.',
      ],
      answer: 'Because it vibrates faster.',
    },
    {
      level: 6,
      ask: 'Could you hear a drum on the moon, where there is no air?',
      steps: [
        'Sound travels through a material.',
        'The moon has no air to carry it.',
      ],
      answer: 'No. Sound needs something to travel through, '
        + 'and there is nothing there.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking loud and high are the same.',
      why: 'Loud is how big the vibration is. '
        + 'High is how fast it is. '
        + 'A big drum can be loud and low at once.',
    },
    {
      mistake: 'Thinking sound travels through nothing.',
      why: 'It needs a material. '
        + 'In a vacuum there is silence however hard something shakes.',
    },
    {
      mistake: 'Looking for the vibration only in the obvious part.',
      why: 'A drum skin vibrates and so does the air inside, '
        + 'which is why the shell size changes the sound.',
    },
  ],

  extension:
    'Sound travels faster through water than air, and faster still through '
    + 'solids, '
    + 'which is why you can hear a vehicle through the ground before you '
    + 'hear it through the air. '
    + 'Tighter packed material carries a vibration more quickly.',

  figure: {
    alt: 'Two strings fixed between posts. The long one carries a slow wide '
      + 'wave and is labelled slower, a lower note. The short one carries a '
      + 'quick narrow wave drawn in green and is labelled faster, a higher '
      + 'note.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">whatever vibrates faster sounds '
      + 'higher</text>'
      + '<line x1="70" y1="108" x2="70" y2="188" stroke-width="6"/>'
      + '<line x1="540" y1="108" x2="540" y2="188" stroke-width="6"/>'
      + '<path d="M 70 148 Q 129 122 188 148 Q 246 174 305 148 Q 364 122 '
      + '422 148 Q 481 174 540 148" stroke-width="3"/>'
      + '<text x="305" y="226" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a long string: slower, a lower '
      + 'note</text>'
      + '<line x1="190" y1="280" x2="190" y2="360" stroke-width="6"/>'
      + '<line x1="420" y1="280" x2="420" y2="360" stroke-width="6"/>'
      + '<path d="M 190 320 Q 209 294 228 320 Q 248 346 267 320 Q 286 294 '
      + '305 320 Q 324 346 343 320 Q 362 294 382 320 Q 401 346 420 320" '
      + 'stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="305" y="396" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">a short string: faster, a higher '
      + 'note</text></svg>',
  },
  tables: [{
    caption: 'What to change to get a higher note or a lower one',
    columns: ['What you change', 'Lower note', 'Higher note'],
    rows: [
      ['The length of a string', 'Long', 'Short'],
      ['The tightness of a string', 'Slack', 'Tight'],
      ['The size of a drum', 'Large', 'Small'],
    ],
    note: 'All three are the same rule underneath: whatever vibrates faster '
      + 'sounds higher.',
  }],
  questions: [
    {
      id: 'sn-1',
      ask: 'What makes every sound?',
      kind: 'choice',
      options: ['Something vibrating', 'Air moving', 'Heat'],
      answer: 'Something vibrating',
      teach: 'Stop the vibration and the sound stops at once.',
      level: 5,
    },
    {
      id: 'sn-2',
      ask: 'A short string sounds higher because it:',
      kind: 'choice',
      options: ['Vibrates faster', 'Is thinner', 'Is quieter'],
      answer: 'Vibrates faster',
      teach: 'Faster vibration means a higher note. '
        + 'That one rule explains every instrument.',
      level: 6,
    },
    {
      id: 'sn-3',
      ask: 'Can sound travel where there is no air at all?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'Sound needs a material to pass through. '
        + 'A vacuum is silent.',
      level: 6,
    },
  ],
})

/* ── simple first aid ─────────────────────────────────────────────────────── */

teach({
  topicId: 'first-aid-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'For a small cut: clean hands, press to stop bleeding, wash, cover. '
      + 'For a small burn: cool running water for twenty minutes. '
      + 'Anything more than small, fetch an adult.',
    method: [
      'Make sure you are safe first.',
      'Small cut: press, wash, cover.',
      'Small burn: cool water for twenty minutes, nothing else on it.',
    ],
  },

  idea:
    'First aid is the help given straight away, before any other help '
    + 'arrives. '
    + 'Part of the skill is knowing where it stops: '
    + 'for anything more than small, the right first aid '
    + 'is to fetch an adult at once.',

  mechanism:
    'The twenty minutes of cool water on a burn is the instruction people '
    + 'cut short, '
    + 'and it is the one that matters most. '
    + 'Heat keeps damaging tissue after the contact ends, '
    + 'so cooling is not about comfort, it is about stopping the injury '
    + 'continuing. '
    + 'Two minutes feels like enough because the pain eases, '
    + 'and the damage is still going on underneath. '
    + 'The other rule behind all of this is that first aid has a limit: '
    + 'knowing when to stop and get somebody is itself part of the skill, '
    + 'not a failure of it.',

  recap:
    'You know that germs travel from hands to wounds, '
    + 'and that washing with soap breaks that path. '
    + 'That is why the first step is your own hands.',

  method: [
    'Check it is safe for you before you help.',
    'Wash your hands if you can.',
    'Small cut: press with a clean cloth until bleeding stops.',
    'Then wash the cut with clean water and cover it.',
    'Small burn: hold under cool running water for twenty minutes.',
    'Put nothing else on a burn. No oil, no toothpaste, no ice.',
    'Deep, large, on the face, or still bleeding: fetch an adult now.',
  ],

  worked: [
    {
      level: 5,
      ask: 'What is the first thing to do for a small burn?',
      steps: [
        'Heat keeps damaging after contact ends.',
      ],
      answer: 'Cool running water, for twenty minutes.',
    },
    {
      level: 6,
      ask: 'Why twenty minutes and not two?',
      steps: [
        'The pain eases long before the heat has gone.',
        'Damage continues under the skin.',
      ],
      answer: 'Because the burn is still doing harm after it stops hurting '
        + 'so much.',
    },
    {
      level: 6,
      ask: 'A cut is deep and will not stop bleeding. What do you do?',
      steps: [
        'This is past what first aid at your level can handle.',
        'Keep pressing while you call.',
      ],
      answer: 'Keep pressing and fetch an adult immediately. '
        + 'Knowing the limit is part of first aid.',
    },
  ],

  traps: [
    {
      mistake: 'Putting oil, toothpaste or butter on a burn.',
      why: 'It holds the heat in and has to be cleaned off later, '
        + 'which hurts and risks infection. Only cool water.',
    },
    {
      mistake: 'Stopping the cooling when the pain eases.',
      why: 'Pain easing is not the same as the heat being gone. '
        + 'Twenty minutes.',
    },
    {
      mistake: 'Trying to handle something serious yourself.',
      why: 'Fetching an adult is the correct action, not a failure. '
        + 'Delay is the real danger.',
    },
  ],

  extension:
    'Every home benefits from a small kit kept in one known place: '
    + 'clean cloth, plasters, a bandage, clean water. '
    + 'What matters nearly as much is that everybody knows where it is, '
    + 'because a kit nobody can find in a hurry is not much use.',

  figure: {
    alt: 'Two burns side by side on the same timeline. The first is cooled '
      + 'for two minutes and a long red bar after it shows the heat still '
      + 'damaging the tissue. The second is cooled for twenty minutes, '
      + 'drawn in green, and the damage stops where the cooling stops.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="44" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">cool a burn for twenty minutes, '
      + 'not two</text>'
      + '<text x="70" y="104" font-size="18" text-anchor="start" '
      + 'fill="currentColor" stroke="none">cooled for two minutes</text>'
      + '<polygon points="70,118 126,118 126,152 70,152" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="98" y="142" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">cool</text>'
      + '<polygon points="126,118 580,118 580,152 126,152" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="353" y="142" font-size="17" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">the heat is still damaging the '
      + 'tissue</text>'
      + '<text x="70" y="244" font-size="18" text-anchor="start" '
      + 'fill="currentColor" stroke="none">cooled for twenty minutes</text>'
      + '<polygon points="70,258 540,258 540,292 70,292" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="305" y="282" font-size="17" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">cool water, the whole twenty '
      + 'minutes</text><polygon points="540,258 580,258 580,292 540,292"/>'
      + '<text x="560" y="282" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">done</text>'
      + '<text x="320" y="362" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the pain eases long before the '
      + 'damage stops</text></svg>',
  },
  tables: [{
    caption: 'What to do for a cut, for a burn, and for anything bigger',
    columns: ['The injury', 'What to do', 'What never to do'],
    rows: [
      [
        'A small cut',
        'Press until it stops bleeding, then wash and cover it',
        'Do not start before checking it is safe for you',
      ],
      [
        'A small burn',
        'Hold it under cool running water for twenty minutes',
        'Put nothing else on it: no oil, no toothpaste, no ice',
      ],
      [
        'Deep, large, on the face, or still bleeding',
        'Fetch an adult at once',
        'Do not try to manage it on your own',
      ],
    ],
    note: 'Wash your own hands first if you can, because germs travel from '
      + 'hands into a wound.',
  }],
  questions: [
    {
      id: 'fa-1',
      ask: 'How long should a small burn be cooled under running water?',
      kind: 'numeric',
      answer: '20',
      accept: ['twenty', '20 minutes'],
      teach: 'Twenty minutes. The pain eases long before the heat is gone.',
      level: 5,
    },
    {
      id: 'fa-2',
      ask: 'What should you put on a burn?',
      kind: 'choice',
      options: ['Only cool water', 'Oil', 'Toothpaste'],
      answer: 'Only cool water',
      teach: 'Anything else holds the heat in '
        + 'and has to be cleaned off later.',
      level: 6,
    },
    {
      id: 'fa-3',
      ask: 'A cut is deep and will not stop bleeding. What do you do?',
      kind: 'choice',
      options: [
        'Keep pressing and fetch an adult immediately',
        'Wash it and carry on',
        'Wait and see',
      ],
      answer: 'Keep pressing and fetch an adult immediately',
      teach: 'Knowing the limit of what you should handle is part of first '
        + 'aid, not a failure of it.',
      level: 6,
    },
  ],
})

/* ── being a good citizen ─────────────────────────────────────────────────── */

teach({
  topicId: 'citizenship-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every right has a duty beside it. '
      + 'You have a right to be taught, and a duty to let others learn. '
      + 'Rights are held by everybody at once.',
    method: [
      'Name the right.',
      'Ask what it would take for everybody to have it.',
      'That is the duty that sits beside it.',
    ],
  },

  idea:
    'A citizen has rights, and beside every right sits a duty. '
    + 'The duty is not a separate rule somebody added. '
    + 'It is the same right, looked at from where everybody else is '
    + 'standing.',

  mechanism:
    'The reason duties exist is not that somebody wants to limit you. '
    + 'It is that a right is held by everybody at the same time. '
    + 'Your right to be heard and everybody else’s right to be heard '
    + 'can only both be real if people take turns. '
    + 'So the duty is simply your right, seen from the other side. '
    + 'That is why you can work out the duty from the right '
    + 'without being told: '
    + 'ask what it would take for everybody to have this at once.',

  recap:
    'You know that rules exist because of what goes wrong without them, '
    + 'and that a community has leaders answerable for different things.',

  method: [
    'Name the right.',
    'Ask who holds it. The answer is always everybody.',
    'Ask what it would take for all of them to have it at once.',
    'Whatever that requires of you is the duty.',
    'Check it with an example from your own class.',
  ],

  worked: [
    {
      level: 5,
      ask: 'You have a right to be taught. What duty sits beside it?',
      steps: [
        'Everybody in the class holds the same right.',
        'That is only possible if the lesson can proceed.',
      ],
      answer: 'A duty not to disturb the class, '
        + 'so that others can learn too.',
    },
    {
      level: 6,
      ask: 'You have a right to be heard. What duty goes with it?',
      steps: [
        'Everybody has that right.',
        'All can only be heard if people take turns.',
      ],
      answer: 'A duty to listen to others, and to wait your turn.',
    },
    {
      level: 6,
      ask: 'Somebody says rights should have no duties attached. '
        + 'What is the problem?',
      steps: [
        'A right is held by everybody at once.',
        'Without duties, the loudest or strongest take theirs first.',
        'Then the others have the right in name only.',
      ],
      answer: 'Rights without duties belong only to whoever can take them, '
        + 'which means most people do not really have them.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a duty is a limit somebody imposed on you.',
      why: 'It is your own right seen from the other side. '
        + 'It exists because everybody holds the right at once.',
    },
    {
      mistake: 'Claiming a right while ignoring the matching duty.',
      why: 'You are asking for something you are not prepared to let others '
        + 'have.',
    },
    {
      mistake: 'Thinking citizenship is only about voting.',
      why: 'Most of it is daily: queueing, paying, taking turns, '
        + 'and not spoiling what everybody uses.',
    },
  ],

  extension:
    'Ghana’s constitution lists rights and also lists duties of the '
    + 'citizen. '
    + 'Reading the two lists side by side shows the pattern clearly: '
    + 'almost every duty is there so that somebody else’s right can be '
    + 'real.',

  figure: {
    alt: 'Two children facing each other, one speaking and one listening, '
      + 'each with the words my right to be heard above them. Between them, '
      + 'in green, it says so we take turns, and underneath it says the '
      + 'duty is your own right seen from the other side.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="140" cy="120" r="34"/>'
      + '<line x1="140" y1="154" x2="140" y2="236"/>'
      + '<line x1="89" y1="188" x2="191" y2="188"/>'
      + '<line x1="140" y1="236" x2="109" y2="304"/>'
      + '<line x1="140" y1="236" x2="171" y2="304"/>'
      + '<circle cx="500" cy="120" r="34"/>'
      + '<line x1="500" y1="154" x2="500" y2="236"/>'
      + '<line x1="449" y1="188" x2="551" y2="188"/>'
      + '<line x1="500" y1="236" x2="469" y2="304"/>'
      + '<line x1="500" y1="236" x2="531" y2="304"/>'
      + '<ellipse cx="244" cy="88" rx="66" ry="34"/>'
      + '<text x="244" y="82" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">my right</text>'
      + '<text x="244" y="104" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">to be heard</text>'
      + '<ellipse cx="396" cy="88" rx="66" ry="34"/>'
      + '<text x="396" y="82" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">my right</text>'
      + '<text x="396" y="104" font-size="17" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">to be heard</text>'
      + '<line x1="272" y1="232" x2="368" y2="232" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<polyline points="286,222 270,232 286,242" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<polyline points="354,222 370,232 354,242" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="320" y="290" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">so we take turns</text>'
      + '<text x="320" y="356" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the duty is your own '
      + 'right</text>'
      + '<text x="320" y="382" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">seen from the other side</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Each right, and the duty that sits beside it',
    columns: ['Your right', 'The duty on the other side of it'],
    rows: [
      ['To be educated', 'Not to stop anybody else learning'],
      ['To be safe', 'Not to make anybody else unsafe'],
      ['To be heard', 'To let the others have their turn'],
      ['To be treated equally', 'To treat the others equally'],
    ],
    note: 'Every one of these duties can be worked out from the right '
      + 'itself, by asking what it would take for everybody to hold that '
      + 'right at once.',
  }],
  questions: [
    {
      id: 'ci-1',
      ask: 'You have a right to be taught. What is the duty beside it?',
      kind: 'choice',
      options: [
        'Not to stop others learning',
        'To come early',
        'To thank the teacher',
      ],
      answer: 'Not to stop others learning',
      teach: 'Everybody holds the same right, '
        + 'and that is only possible if the lesson can go on.',
      level: 5,
    },
    {
      id: 'ci-2',
      ask: 'Why does every right have a duty beside it?',
      kind: 'choice',
      options: [
        'Because everybody holds the right at the same time',
        'To make life harder',
        'Because the government says so',
      ],
      answer: 'Because everybody holds the right at the same time',
      teach: 'The duty is your own right seen from the other side.',
      level: 6,
    },
    {
      id: 'ci-3',
      ask: 'What happens to rights with no duties attached?',
      kind: 'choice',
      options: [
        'Only the strongest actually get them',
        'Everybody is freer',
        'Nothing changes',
      ],
      answer: 'Only the strongest actually get them',
      teach: 'Then most people hold the right in name and not in fact.',
      level: 6,
    },
  ],
})

/* ── translating ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'translate-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Translate the meaning, not the words. '
      + 'Read the whole sentence, work out what it says, '
      + 'then say that naturally in the other language.',
    method: [
      'Read the whole sentence before translating anything.',
      'Work out what it means.',
      'Say that meaning naturally in the other language.',
    ],
  },

  idea:
    'Translating means saying in one language what was said in another. '
    + 'The thing to carry across is the meaning. '
    + 'A word for word translation almost always fails, '
    + 'because languages do not line up word by word.',

  mechanism:
    'Languages differ in more than vocabulary. '
    + 'They put words in different orders, '
    + 'they have idioms that mean nothing literally, '
    + 'and one language often has a single word where the other needs five. '
    + 'So translating word by word produces something that is technically '
    + 'made of the right words and says the wrong thing, or nothing. '
    + 'The reliable method is to stop translating words at all: '
    + 'read the whole sentence, understand it, look away, '
    + 'and then say that meaning as you naturally would in the other '
    + 'language.',

  recap:
    'You know that a proverb cannot be translated word for word '
    + 'because the meaning lives in when it is used. '
    + 'The same problem applies, more mildly, to ordinary sentences.',

  method: [
    'Read the whole sentence. Never translate as you read.',
    'Work out what it actually means.',
    'Look away from the original.',
    'Say that meaning in the other language, as you naturally would.',
    'Read your version back. Does it sound like something a person would '
      + 'say?',
    'Compare with the original for anything left out.',
  ],

  worked: [
    {
      level: 5,
      ask: 'Why does word for word translation usually fail?',
      steps: [
        'Word orders differ.',
        'Idioms mean nothing literally.',
      ],
      answer: 'Because languages do not line up word by word.',
    },
    {
      level: 6,
      ask: 'Why look away from the original before writing your version?',
      steps: [
        'With it in front of you, you follow its word order.',
        'Looking away forces you to use your own.',
      ],
      answer: 'Because the original pulls your sentence into its shape, '
        + 'and the result sounds wrong.',
    },
    {
      level: 6,
      ask: 'How do you know your translation is good?',
      steps: [
        'Read it to somebody who speaks that language.',
        'Do not show them the original.',
        'Ask what it means.',
      ],
      answer: 'If they tell you back what the original said, it worked. '
        + 'If they hesitate, something is wrong.',
    },
  ],

  traps: [
    {
      mistake: 'Translating as you read.',
      why: 'You commit to a shape before you know where the sentence is '
        + 'going.',
    },
    {
      mistake: 'Keeping the original word order.',
      why: 'It is the commonest sign of a translation, '
        + 'and it often makes the sentence hard to follow.',
    },
    {
      mistake: 'Translating an idiom literally.',
      why: 'It will mean nothing, or something unintended. '
        + 'Find what the idiom means, then say that.',
    },
  ],

  extension:
    'Some things genuinely do not translate: '
    + 'a word that carries a whole relationship, or a joke built on sounds. '
    + 'A good translator chooses what to lose and says so. '
    + 'Pretending nothing was lost is the worse option.',

  figure: {
    alt: 'Two ways of translating. Along the top, in red, translating as you '
      + 'read leads to a sentence made of the right words that says the '
      + 'wrong thing. Along the bottom, in green, four steps in order: read '
      + 'the whole sentence, work out what it means, look away, then say it '
      + 'as you naturally would.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="60,96 290,96 290,164 60,164" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="175" y="126" font-size="17" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">translate as you read</text>'
      + '<text x="175" y="150" font-size="17" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">word by word</text>'
      + '<line x1="296" y1="130" x2="346" y2="130" stroke="#c8433a"/>'
      + '<polyline points="333,120 346,130 333,140" stroke="#c8433a"/>'
      + '<polygon points="352,96 600,96 600,164 352,164" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="476" y="126" font-size="17" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">the right words,</text>'
      + '<text x="476" y="150" font-size="17" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">the wrong meaning</text>'
      + '<text x="320" y="212" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">carry the meaning across, not '
      + 'the words</text>'
      + '<polygon points="8,240 134,240 134,320 8,320" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="71" y="272" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">read the whole</text>'
      + '<text x="71" y="296" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">sentence</text>'
      + '<polygon points="172,240 298,240 298,320 172,320" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="235" y="272" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">work out what</text>'
      + '<text x="235" y="296" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">it means</text>'
      + '<line x1="136" y1="280" x2="170" y2="280" stroke="#0f8a4d"/>'
      + '<polyline points="157,270 170,280 157,290" stroke="#0f8a4d"/>'
      + '<polygon points="336,240 462,240 462,320 336,320" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="399" y="286" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">look away</text>'
      + '<line x1="300" y1="280" x2="334" y2="280" stroke="#0f8a4d"/>'
      + '<polyline points="321,270 334,280 321,290" stroke="#0f8a4d"/>'
      + '<polygon points="500,240 626,240 626,320 500,320" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="563" y="272" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">say it as you</text>'
      + '<text x="563" y="296" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">naturally would</text>'
      + '<line x1="464" y1="280" x2="498" y2="280" stroke="#0f8a4d"/>'
      + '<polyline points="485,270 498,280 485,290" stroke="#0f8a4d"/>'
      + '</svg>',
  },
  questions: [
    {
      id: 'tr-1',
      ask: 'What should you translate?',
      kind: 'choice',
      options: ['The meaning', 'Each word', 'The word order'],
      answer: 'The meaning',
      teach: 'Languages do not line up word by word, so words are the wrong '
        + 'unit.',
      level: 5,
    },
    {
      id: 'tr-2',
      ask: 'Why look away from the original before writing?',
      kind: 'choice',
      options: [
        'It pulls your sentence into its shape',
        'To test your memory',
        'To be quicker',
      ],
      answer: 'It pulls your sentence into its shape',
      teach: 'Keeping the original word order is the commonest sign of a '
        + 'poor translation.',
      level: 6,
    },
    {
      id: 'tr-3',
      ask: 'How can you test a translation?',
      kind: 'choice',
      options: [
        'Read it to a speaker without showing the original',
        'Count the words',
        'Translate it back yourself',
      ],
      answer: 'Read it to a speaker without showing the original',
      teach: 'If they tell you back what the original said, it worked.',
      level: 6,
    },
  ],
})

/* ── making a presentation ────────────────────────────────────────────────── */

teach({
  topicId: 'presentation-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Slides support what you say. They do not replace it. '
      + 'Few words per slide, one idea each, '
      + 'and you supply the rest by speaking.',
    method: [
      'Plan what you will say first, then make slides for it.',
      'A few words per slide, not sentences.',
      'Look at the class, not at the screen.',
    ],
  },

  idea:
    'A presentation is a talk with slides. '
    + 'The slides are there to help the audience follow: '
    + 'a heading, a few words, a picture. '
    + 'What you say is the presentation. '
    + 'The slides are not.',

  mechanism:
    'There is one mistake that ruins more presentations than everything '
    + 'else combined, '
    + 'and it has a reason behind it worth knowing. '
    + 'If you put full sentences on a slide, your audience reads them, '
    + 'and people read faster than you speak. '
    + 'So they finish the slide, stop listening, and wait. '
    + 'You are then competing with your own slide for their attention, '
    + 'and losing. '
    + 'Few words means they glance, understand the heading, and return to '
    + 'you.',

  recap:
    'You can give a short talk with three points and notes rather than a '
    + 'script. '
    + 'This adds slides, and the same rule applies: '
    + 'they prompt, they do not script.',

  method: [
    'Plan the talk first. Slides come after.',
    'One idea per slide.',
    'A heading and a few words. Not sentences.',
    'Add a picture only when it shows something words cannot.',
    'Practise out loud with the slides.',
    'On the day, face the class, not the screen.',
    'Never read a slide aloud. They can read.',
  ],

  worked: [
    {
      level: 5,
      ask: 'How much text should be on a slide?',
      steps: [
        'They read faster than you speak.',
      ],
      answer: 'A heading and a few words. Not sentences.',
    },
    {
      level: 6,
      ask: 'Why is reading your slides aloud a problem?',
      steps: [
        'The audience has already read them.',
        'So you are telling them what they know.',
        'They stop listening.',
      ],
      answer: 'Because they can read, and doing it for them makes you '
        + 'unnecessary.',
    },
    {
      level: 6,
      ask: 'The projector fails. Can you still present?',
      steps: [
        'If the slides were the presentation, no.',
        'If you planned the talk first, yes.',
      ],
      answer: 'Yes, if you planned the talk first. '
        + 'That is the test of whether your slides were doing the right job.',
    },
  ],

  traps: [
    {
      mistake: 'Putting your whole talk on the slides.',
      why: 'They read it faster than you say it and stop listening.',
    },
    {
      mistake: 'Facing the screen while you talk.',
      why: 'Your voice goes to the wall. '
        + 'Glance at it and turn back.',
    },
    {
      mistake: 'Making the slides before planning the talk.',
      why: 'Then the slides decide what you say, '
        + 'and the talk comes out in whatever order the slides happened to '
        + 'land in.',
    },
  ],

  extension:
    'The strongest test of a presentation is whether it still works '
    + 'if the projector fails. '
    + 'If it does, your slides were supporting you. '
    + 'If it does not, they were carrying you, and the audience could tell.',

  figure: {
    alt: 'Two slides side by side. The one on the left is full of lines of '
      + 'writing and is marked in red: they read it and stop listening. The '
      + 'one on the right has a heading and three short words and is marked '
      + 'in green: they glance, then look back at you.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="60,100 290,100 290,290 60,290" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="84" y1="140" x2="210" y2="140" stroke="#0f8a4d" '
      + 'stroke-width="6"/>'
      + '<line x1="84" y1="184" x2="190" y2="184" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<line x1="84" y1="216" x2="200" y2="216" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<line x1="84" y1="248" x2="176" y2="248" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="175" y="330" font-size="18" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">a heading and a few words</text>'
      + '<text x="175" y="358" font-size="18" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">they glance, then look at you</text>'
      + '<polygon points="350,100 580,100 580,290 350,290" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<line x1="374" y1="140" x2="556" y2="140" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="374" y1="166" x2="556" y2="166" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="374" y1="192" x2="556" y2="192" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="374" y1="218" x2="556" y2="218" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="374" y1="244" x2="556" y2="244" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="374" y1="270" x2="556" y2="270" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="465" y="330" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">full sentences</text>'
      + '<text x="465" y="358" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">they read, and stop listening</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'pr-1',
      ask: 'How much text belongs on a slide?',
      kind: 'choice',
      options: ['A few words', 'Full sentences', 'Everything you will say'],
      answer: 'A few words',
      teach: 'People read faster than you speak, '
        + 'so a full slide makes them stop listening.',
      level: 5,
    },
    {
      id: 'pr-2',
      ask: 'Why not read your slides aloud?',
      kind: 'choice',
      options: [
        'They can read, so it makes you unnecessary',
        'It takes too long',
        'It is against the rules',
      ],
      answer: 'They can read, so it makes you unnecessary',
      teach: 'They finished that slide before you did. '
        + 'Say the thing the slide does not.',
      level: 6,
    },
    {
      id: 'pr-3',
      ask: 'What should you plan first?',
      kind: 'choice',
      options: ['The talk', 'The slides', 'The pictures'],
      answer: 'The talk',
      teach: 'Otherwise the slides decide what you say, '
        + 'in whatever order they happened to end up in.',
      level: 6,
    },
  ],
})

/* ── rows, columns and a total ────────────────────────────────────────────── */

teach({
  topicId: 'simple-spreadsheet',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A spreadsheet is a grid of cells named by column and row, like B3. '
      + 'A formula calculates from other cells, '
      + 'so the answer updates when they change.',
    method: [
      'Type your data down a column.',
      'In the cell below, use a sum formula over that range.',
      'Change a number and watch the total update itself.',
    ],
  },

  idea:
    'A spreadsheet is a grid. '
    + 'Columns have letters, rows have numbers, '
    + 'so every cell has a name like B3. '
    + 'You can type numbers in, and you can type a formula '
    + 'that works something out from other cells.',

  mechanism:
    'The formula is the whole point, and it is worth being clear why. '
    + 'If you add the numbers yourself and type the answer, '
    + 'you have written down a fact that becomes wrong '
    + 'the moment anybody changes one of the numbers. '
    + 'A formula does not store the answer. '
    + 'It stores the instruction. '
    + 'So when a number changes, the total recalculates on its own, '
    + 'and it cannot drift out of step with the data it came from. '
    + 'That is why a spreadsheet is useful for anything that will be '
    + 'updated.',

  recap:
    'You can find a mean by adding and dividing, '
    + 'and you know that a computer does exactly what it is told.',

  method: [
    'Put a heading at the top of each column.',
    'Type your data down the column, one value per cell.',
    'Click the cell where you want the total.',
    'Type a sum formula covering the range of cells.',
    'Press enter. The total appears.',
    'Change one of the numbers and watch the total change by itself.',
    'Never type a total you worked out by hand.',
  ],

  worked: [
    {
      level: 5,
      ask: 'What is the name of the cell in column B, row 3?',
      steps: [
        'Column letter first, then row number.',
      ],
      answer: 'B3.',
    },
    {
      level: 6,
      ask: 'Why use a formula instead of typing the total?',
      steps: [
        'A typed total is a fact frozen at one moment.',
        'Change a number and it becomes wrong, silently.',
        'A formula recalculates.',
      ],
      answer: 'Because the formula stays correct when the numbers change, '
        + 'and a typed total quietly stops being true.',
    },
    {
      level: 6,
      ask: 'Your total is wrong. What is the most likely cause?',
      steps: [
        'Check which cells the formula covers.',
        'A range that misses the last row is the usual fault.',
      ],
      answer: 'The formula probably does not cover all the rows. '
        + 'Check the range first.',
    },
  ],

  traps: [
    {
      mistake: 'Typing a total you worked out yourself.',
      why: 'It is right once and then quietly wrong for ever after.',
    },
    {
      mistake: 'Writing a range that misses a row.',
      why: 'The commonest spreadsheet error there is, '
        + 'and it gives a plausible answer, which is what makes it dangerous.',
    },
    {
      mistake: 'Putting data and headings in the same cell.',
      why: 'Then a formula cannot use the column. '
        + 'Heading in its own cell at the top.',
    },
  ],

  extension:
    'Spreadsheets run a great deal of the world’s business, '
    + 'and a surprising number of serious errors have come from a formula '
    + 'whose range missed a row. '
    + 'Checking the range is not a beginner’s precaution. '
    + 'Professionals do it because professionals have been caught.',

  figure: {
    alt: 'A spreadsheet grid with columns named A, B and C and rows numbered '
      + 'one to four. Three numbers are typed down column B, and the cell '
      + 'under them holds a sum formula instead of a typed answer. An arrow '
      + 'to the side says change a number and the total changes by itself.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="120" y="112" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">A</text>'
      + '<text x="240" y="112" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">B</text>'
      + '<text x="360" y="112" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<line x1="60" y1="124" x2="420" y2="124"/>'
      + '<text x="38" y="154" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1</text>'
      + '<line x1="60" y1="168" x2="420" y2="168"/>'
      + '<text x="38" y="198" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">2</text>'
      + '<line x1="60" y1="212" x2="420" y2="212"/>'
      + '<text x="38" y="242" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">3</text>'
      + '<line x1="60" y1="256" x2="420" y2="256"/>'
      + '<text x="38" y="286" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">4</text>'
      + '<line x1="60" y1="300" x2="420" y2="300"/>'
      + '<line x1="60" y1="124" x2="60" y2="300"/>'
      + '<line x1="180" y1="124" x2="180" y2="300"/>'
      + '<line x1="300" y1="124" x2="300" y2="300"/>'
      + '<line x1="420" y1="124" x2="420" y2="300"/>'
      + '<text x="120" y="154" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">marks</text>'
      + '<text x="240" y="198" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">12</text>'
      + '<text x="240" y="242" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">15</text>'
      + '<text x="240" y="286" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">9</text>'
      + '<polygon points="180,300 300,300 300,344 180,344" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="240" y="330" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">=SUM(B2:B4)</text>'
      + '<line x1="430" y1="190" x2="304" y2="190" stroke-dasharray="7 7"/>'
      + '<text x="438" y="196" font-size="17" text-anchor="start" '
      + 'fill="currentColor" stroke="none">this cell is B2</text>'
      + '<line x1="430" y1="322" x2="304" y2="322" stroke="#0f8a4d" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<text x="438" y="322" font-size="16" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">a formula, not an answer</text>'
      + '<text x="438" y="348" font-size="16" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">so the total cannot drift</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'sp-1',
      ask: 'What is the cell in column B, row 3 called?',
      kind: 'choice',
      options: ['B3', '3B', 'BR3'],
      answer: 'B3',
      teach: 'Column letter first, then row number.',
      level: 5,
    },
    {
      id: 'sp-2',
      ask: 'Why use a formula rather than typing the total?',
      kind: 'choice',
      options: [
        'It updates itself when the numbers change',
        'It is faster to type',
        'It looks more professional',
      ],
      answer: 'It updates itself when the numbers change',
      teach: 'A typed total is correct once and then silently wrong.',
      level: 6,
    },
    {
      id: 'sp-3',
      ask: 'Your total looks wrong. What should you check first?',
      kind: 'choice',
      options: [
        'Whether the formula covers every row',
        'Whether the computer is faulty',
        'Whether you typed the numbers twice',
      ],
      answer: 'Whether the formula covers every row',
      teach: 'A range that misses the last row is the commonest spreadsheet '
        + 'error, and it gives a believable answer.',
      level: 6,
    },
  ],
})
