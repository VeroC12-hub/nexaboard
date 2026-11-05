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

  why:
    'Two cups stand on the table. '
    + 'One holds water with lime juice stirred into it. '
    + 'The other holds water with washing soda stirred into it. '
    + 'They look exactly the same. '
    + 'Drinking the washing soda one would burn your mouth. '
    + 'How do you find out which cup is which, '
    + 'without tasting either of them?',

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
    'Stir a spoon of salt into a cup of water and keep stirring. '
    + 'The salt goes out of sight. '
    + 'The water still tastes salty, so the salt is there. '
    + 'Something spread right through water like that is called a solution. '
    + 'The lime juice and the washing soda in this lesson are solutions. '
    + 'Something is in the water that you cannot see, '
    + 'and that is why looking at a cup tells you nothing.',

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
    {
      id: 'ab-4',
      ask: 'Soap is:',
      kind: 'choice',
      options: ['Acidic', 'Neutral', 'Basic'],
      answer: 'Basic',
      teach: 'Soap feels slippery, and slippery things like soap and '
        + 'wood ash water are basic. Sour things like lime juice are '
        + 'the acidic ones.',
      level: 2,
    },
    {
      id: 'ab-5',
      ask: 'Pure water is:',
      kind: 'choice',
      options: ['Neutral', 'Acidic', 'Basic'],
      answer: 'Neutral',
      teach: 'Neutral means neither acidic nor basic. Pure water is the '
        + 'usual example of a neutral liquid.',
      level: 2,
    },
    {
      id: 'ab-6',
      ask: 'What is an indicator?',
      kind: 'choice',
      options: [
        'A liquid that always tastes sour',
        'A substance that changes colour depending on what it is put in',
        'A clean cup for testing',
      ],
      answer: 'A substance that changes colour depending on what it is put in',
      teach: 'You cannot tell an acid from a base by looking. An '
        + 'indicator shows you by turning a different colour, so you '
        + 'never need to taste.',
      level: 3,
    },
    {
      id: 'ab-7',
      ask: 'Vinegar is:',
      kind: 'choice',
      options: ['Basic', 'Acidic', 'Neutral'],
      answer: 'Acidic',
      teach: 'Vinegar is sour, like lime juice and soured milk, so it '
        + 'sits with the acids. Baking soda and soap are the bases.',
      level: 3,
    },
    {
      id: 'ab-8',
      ask: 'What can you use at home to make an indicator?',
      kind: 'choice',
      options: [
        'Salt stirred into water',
        'Cooking oil',
        'Water from boiled red cabbage',
      ],
      answer: 'Water from boiled red cabbage',
      teach: 'Boil chopped red cabbage and keep the coloured liquid. It '
        + 'changes colour in acids and bases. Salt water and oil do '
        + 'not.',
      level: 3,
    },
    {
      id: 'ab-9',
      ask: 'Why should you test a known acid and a known base beside '
        + 'the liquid you are asking about?',
      kind: 'choice',
      options: [
        'Your own indicator colours depend on what you made it from',
        'To use up the indicator',
        'Acids only work next to bases',
      ],
      answer: 'Your own indicator colours depend on what you made it from',
      teach: 'A cabbage indicator and litmus paper give different '
        + 'colours. Testing a known acid and base shows you what each '
        + 'colour means this time.',
      level: 4,
    },
    {
      id: 'ab-10',
      ask: 'Why must you test in a clean container?',
      kind: 'choice',
      options: [
        'A dirty one makes the colour brighter',
        'What was in it before will change your result',
        'It does not matter at all',
      ],
      answer: 'What was in it before will change your result',
      teach: 'A little lime juice left in the cup will make soap water '
        + 'look less basic. Then you trust a reading that is wrong.',
      level: 4,
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

  why:
    'A mason has to get a drum of water onto the back of a pickup. '
    + 'He cannot lift it. It is too heavy. '
    + 'So he lays a plank from the ground to the tailboard '
    + 'and rolls the drum up it instead. '
    + 'The drum weighs the same either way. '
    + 'So why can he roll what he cannot lift?',

  idea:
    'A simple machine makes a job easier. '
    + 'Every one of them does it the same way. '
    + 'It lets you use a smaller force over a longer distance.',

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
    'A push or a pull is called a force. '
    + 'A force can start a thing moving, stop it, or turn it. '
    + 'Push a box across the floor and it also drags. '
    + 'That drag is called friction, '
    + 'and it works against the movement. '
    + 'Lift a bucket of water and you feel its weight, '
    + 'which is another force. '
    + 'Machines work with all of these. '
    + 'This lesson is about the ones that make a force easier to give.',

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
    {
      id: 'sm6-4',
      ask: 'What does a simple machine do?',
      kind: 'choice',
      options: [
        'Makes a load weigh less',
        'Makes a job easier',
        'Does the work for you',
      ],
      answer: 'Makes a job easier',
      teach: 'The load weighs the same and the work is the same. The '
        + 'machine lets you use a smaller force over a longer '
        + 'distance, so the job is easier.',
      level: 2,
    },
    {
      id: 'sm6-5',
      ask: 'A mason rolls a drum up a plank onto a pickup. Which '
        + 'simple machine is the plank?',
      kind: 'choice',
      options: ['A pulley', 'A lever', 'A ramp'],
      answer: 'A ramp',
      teach: 'A plank laid from the ground up to a higher place is a '
        + 'ramp. It lets you raise a load without lifting it straight '
        + 'up.',
      level: 2,
    },
    {
      id: 'sm6-6',
      ask: 'Which of these is a simple machine?',
      kind: 'choice',
      options: ['A lever', 'A bucket of water', 'A stone'],
      answer: 'A lever',
      teach: 'A lever, a ramp and a pulley are simple machines. A bucket '
        + 'or a stone does not trade force for distance.',
      level: 2,
    },
    {
      id: 'sm6-7',
      ask: 'What does a pulley let you do?',
      kind: 'choice',
      options: [
        'Make the load lighter',
        'Pull down instead of lifting up',
        'Lift without any rope',
      ],
      answer: 'Pull down instead of lifting up',
      teach: 'Pulling down on a rope is easier than lifting. You still '
        + 'pay with more rope pulled for less force.',
      level: 3,
    },
    {
      id: 'sm6-8',
      ask: 'A machine makes the force you need smaller. What gets '
        + 'bigger?',
      kind: 'choice',
      options: [
        'The distance you move',
        'The weight of the load',
        'Nothing gets bigger',
      ],
      answer: 'The distance you move',
      teach: 'Every simple machine trades. If the force gets smaller, '
        + 'the distance gets bigger. Nothing comes free.',
      level: 4,
    },
    {
      id: 'sm6-9',
      ask: 'You use a long pole as a lever. Compared with the load, '
        + 'your end of the pole:',
      kind: 'choice',
      options: ['Travels less far', 'Stays still', 'Travels further'],
      answer: 'Travels further',
      teach: 'A longer lever needs less push, and the price is that your '
        + 'end moves a longer way than the load does.',
      level: 4,
    },
    {
      id: 'sm6-10',
      ask: 'A ramp has a rough surface. What does that do?',
      kind: 'choice',
      options: [
        'Friction costs you some of what the ramp saved',
        'It makes the ramp work better',
        'It changes nothing',
      ],
      answer: 'Friction costs you some of what the ramp saved',
      teach: 'Friction is a drag that works against movement. On a rough '
        + 'ramp you push against the weight and against the drag.',
      level: 4,
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

  why:
    'A torch has a good cell in it and a good bulb, '
    + 'and it does not light. '
    + 'Shake it and it flashes once, then stops. '
    + 'Nothing is broken that you can see. '
    + 'Something inside has to be touching and is not quite touching. '
    + 'What has to be joined to what, for a bulb to light at all?',

  notation:
    'A circuit is drawn with signs instead of pictures, '
    + 'and that drawing is called a circuit diagram. '
    + 'A cell is one long thin line beside one short fat line. '
    + 'A bulb is a circle with a cross in it. '
    + 'A switch is a line with one end lifted off a dot. '
    + 'Wires are drawn as straight lines, '
    + 'and every line must run right up to the sign it joins, '
    + 'because a line that stops short means a gap, '
    + 'and that is the commonest mistake in a drawing.',

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
    'Hold a metal spoon and a wooden spoon in the same hot water. '
    + 'The metal one gets hot in your hand and the wooden one does not. '
    + 'Heat passes through metal and will not pass through wood. '
    + 'Electricity does the same thing. '
    + 'It passes through metal. '
    + 'It will not pass through wood, plastic or rubber. '
    + 'A thing electricity passes through is called a conductor, '
    + 'and a thing it will not pass through is called an insulator. '
    + 'A wire is metal on the inside with plastic around it, '
    + 'for exactly those two reasons.',

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
    {
      id: 'el-4',
      ask: 'What do you need to light a bulb?',
      kind: 'choice',
      options: [
        'A bulb and a switch only',
        'A cell, wires and a bulb in a loop',
        'A cell and a bulb with no wires',
      ],
      answer: 'A cell, wires and a bulb in a loop',
      teach: 'Electricity must leave the cell, pass through the bulb and '
        + 'come back. The wires make that path, and the loop must be '
        + 'complete.',
      level: 2,
    },
    {
      id: 'el-5',
      ask: 'Which of these lets electricity pass through it?',
      kind: 'choice',
      options: ['A wooden spoon', 'A rubber band', 'A metal spoon'],
      answer: 'A metal spoon',
      teach: 'Electricity passes through metal, so metal is a conductor. '
        + 'Wood, rubber and plastic are insulators.',
      level: 2,
    },
    {
      id: 'el-6',
      ask: 'Why does a wire have plastic around the metal?',
      kind: 'choice',
      options: [
        'Plastic is an insulator, so the electricity stays in the metal',
        'Plastic carries electricity better than metal',
        'Only to make it colourful',
      ],
      answer: 'Plastic is an insulator, so the electricity stays in the metal',
      teach: 'The metal inside is the conductor that carries '
        + 'electricity. The plastic outside will not let it through, '
        + 'which keeps it in.',
      level: 3,
    },
    {
      id: 'el-7',
      ask: 'What does a switch do in a circuit?',
      kind: 'choice',
      options: [
        'Makes the cell stronger',
        'Makes a break you can open and close',
        'Stores electricity for later',
      ],
      answer: 'Makes a break you can open and close',
      teach: 'Open the switch and the loop has a gap, so nothing flows. '
        + 'Close it and the loop is complete again.',
      level: 3,
    },
    {
      id: 'el-8',
      ask: 'In a circuit diagram, what is a circle with a cross in it?',
      kind: 'choice',
      options: ['A cell', 'A switch', 'A bulb'],
      answer: 'A bulb',
      teach: 'A cell is a long thin line beside a short fat one. A '
        + 'switch is a line lifted off a dot. The circle with a cross '
        + 'is the bulb.',
      level: 3,
    },
    {
      id: 'el-9',
      ask: 'The bulb does not light. What should you check first?',
      kind: 'choice',
      options: [
        'That each connection is tight',
        'Swap the bulb and cell together',
        'Buy a new torch',
      ],
      answer: 'That each connection is tight',
      teach: 'Trace the loop and check the connections first. Then try a '
        + 'new bulb, then a new cell, changing one thing at a time.',
      level: 3,
    },
    {
      id: 'el-10',
      ask: 'A torch flashes once when shaken, then goes dark. What is '
        + 'most likely wrong?',
      kind: 'choice',
      options: [
        'The bulb is too bright',
        'A connection is loose',
        'The cell has too much electricity',
      ],
      answer: 'A connection is loose',
      teach: 'Shaking made two parts touch for a moment, so the loop was '
        + 'complete for a flash. Then the gap came back. Tighten the '
        + 'connection.',
      level: 4,
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

  why:
    'Stand at the back of the field while a teacher claps at the front. '
    + 'You see the hands meet, '
    + 'and the clap reaches you a moment later. '
    + 'The light from the hands got to you first. '
    + 'At night you can hear a drum from the next village '
    + 'when you cannot see anything at all. '
    + 'So the sound is not coming to you the way the light is. '
    + 'What is it that actually travels from the drum to your ear?',

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
    'Put your hands over your ears while somebody speaks. '
    + 'The voice goes faint. '
    + 'Take your hands away and it comes back, '
    + 'so it is your ears that catch sound. '
    + 'Now close your eyes instead and you can still hear everything. '
    + 'Sound and light are two different things. '
    + 'Sound crosses a dark room, and light does not cross a wall. '
    + 'This lesson is about what sound is and where it starts.',

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
    {
      id: 'sn-4',
      ask: 'Touch your throat while you speak. What do you feel?',
      kind: 'choice',
      options: ['Heat', 'Vibration', 'Nothing at all'],
      answer: 'Vibration',
      teach: 'Your voice comes from parts in your throat vibrating. '
        + 'Every sound starts with something shaking like this.',
      level: 2,
    },
    {
      id: 'sn-5',
      ask: 'You hold a ringing bell tightly in your hand. What '
        + 'happens?',
      kind: 'choice',
      options: ['The sound stops', 'It gets louder', 'It gets higher'],
      answer: 'The sound stops',
      teach: 'Holding the bell stops it vibrating. Stop the vibration '
        + 'and the sound stops at once.',
      level: 2,
    },
    {
      id: 'sn-6',
      ask: 'How do you make a string give a higher note?',
      kind: 'choice',
      options: ['Loosen it', 'Make it longer', 'Tighten it'],
      answer: 'Tighten it',
      teach: 'A tight string vibrates faster, and faster means higher. '
        + 'Loose and long both make it slower, so the note goes '
        + 'lower.',
      level: 3,
    },
    {
      id: 'sn-7',
      ask: 'Which drum gives the lower note?',
      kind: 'choice',
      options: ['The small drum', 'The large drum', 'They give the same note'],
      answer: 'The large drum',
      teach: 'A large drum vibrates more slowly than a small one. Slower '
        + 'vibration gives a lower note.',
      level: 3,
    },
    {
      id: 'sn-8',
      ask: 'What can sound travel through?',
      kind: 'choice',
      options: [
        'Air, water and wood',
        'Only air',
        'Empty space with nothing in it',
      ],
      answer: 'Air, water and wood',
      teach: 'Sound needs a material to pass through. Air, water and '
        + 'wood all carry it. Empty space has nothing to carry it, so '
        + 'it is silent.',
      level: 3,
    },
    {
      id: 'sn-9',
      ask: 'How loud a sound is depends on:',
      kind: 'choice',
      options: [
        'How fast the vibration is',
        'How big the vibration is',
        'How long the string is',
      ],
      answer: 'How big the vibration is',
      teach: 'Loud and high are different. Loud is how big the vibration '
        + 'is. High is how fast it is. A big drum can be loud and low '
        + 'at once.',
      level: 4,
    },
    {
      id: 'sn-10',
      ask: 'A teacher claps at the front of the field. At the back you '
        + 'see the hands meet before you hear the clap. Why?',
      kind: 'choice',
      options: [
        'The clap is too quiet',
        'The light reaches you before the sound does',
        'Your eyes are closer than your ears',
      ],
      answer: 'The light reaches you before the sound does',
      teach: 'Light and sound are different things. Light gets to you '
        + 'first, and the sound arrives a moment later through the '
        + 'air.',
      level: 4,
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

  why:
    'Your little brother tips hot water on his arm. '
    + 'He screams, you hold the arm under the tap, '
    + 'and after two minutes he says it feels better. '
    + 'You turn the tap off. '
    + 'The next day the arm has blistered badly. '
    + 'The water worked while it was running. '
    + 'Why was two minutes not enough?',

  idea:
    'First aid is the help given straight away, before any other help '
    + 'arrives. '
    + 'Part of the skill is knowing where it stops: '
    + 'for anything more than small, the right first aid '
    + 'is to fetch an adult at once.',

  mechanism:
    'The twenty minutes of cool water on a burn '
    + 'is the instruction people cut short. '
    + 'It is also the one that matters most. '
    + 'Heat keeps damaging tissue after the contact ends. '
    + 'So cooling is not about comfort. '
    + 'It is about stopping the injury going on. '
    + 'Two minutes feels like enough because the pain eases. '
    + 'The damage underneath is still happening. '
    + 'The other rule behind all of this '
    + 'is that first aid has a limit. '
    + 'Knowing when to stop and get somebody is part of the skill. '
    + 'It is not a failure of it.',

  recap:
    'Germs are living things too small to see. '
    + 'They sit on your hands and on anything you touch. '
    + 'A cut is an opening in the skin, '
    + 'and skin is what normally keeps germs out. '
    + 'So germs on your hands can go straight into somebody else. '
    + 'Washing with soap lifts them off your hands first. '
    + 'That is why the first step in this lesson is your own hands.',

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
    {
      id: 'fa-4',
      ask: 'Before you help somebody who is hurt, what do you check?',
      kind: 'choice',
      options: [
        'That it is safe for you',
        'Where the plasters are',
        'What time it is',
      ],
      answer: 'That it is safe for you',
      teach: 'If you get hurt too, there are now two people needing '
        + 'help. Check it is safe for you first.',
      level: 2,
    },
    {
      id: 'fa-5',
      ask: 'Somebody has a small cut that is bleeding. What do you do '
        + 'first?',
      kind: 'choice',
      options: [
        'Put toothpaste on it',
        'Press on it with a clean cloth',
        'Leave it open to the air',
      ],
      answer: 'Press on it with a clean cloth',
      teach: 'Pressing with a clean cloth stops the bleeding. Only then '
        + 'wash the cut with clean water and cover it.',
      level: 2,
    },
    {
      id: 'fa-6',
      ask: 'Why should you wash your own hands before treating a cut?',
      kind: 'choice',
      options: [
        'Germs on your hands can get into the cut',
        'To cool the cut down',
        'Soap stops bleeding',
      ],
      answer: 'Germs on your hands can get into the cut',
      teach: 'A cut is an opening in the skin, and skin normally keeps '
        + 'germs out. Washing lifts the germs off your hands first.',
      level: 3,
    },
    {
      id: 'fa-7',
      ask: 'The cut has stopped bleeding. What next?',
      kind: 'choice',
      options: [
        'Rub ash into it',
        'Do nothing else',
        'Wash it with clean water and cover it',
      ],
      answer: 'Wash it with clean water and cover it',
      teach: 'Washing takes dirt out of the cut, and a cover keeps new '
        + 'germs out while it heals.',
      level: 3,
    },
    {
      id: 'fa-8',
      ask: 'Is fetching an adult a failure of first aid?',
      kind: 'choice',
      options: [
        'Yes, you should manage alone',
        'No, knowing the limit is part of it',
        'Only if you are scared',
      ],
      answer: 'No, knowing the limit is part of it',
      teach: 'For anything more than small, fetching an adult at once is '
        + 'the right first aid. Delay is the real danger.',
      level: 3,
    },
    {
      id: 'fa-9',
      ask: 'Your brother burned his arm. After two minutes under the '
        + 'tap he says it feels better. What do you do?',
      kind: 'choice',
      options: [
        'Keep it under cool water for the full twenty minutes',
        'Stop, because it has stopped hurting',
        'Put ice on it instead',
      ],
      answer: 'Keep it under cool water for the full twenty minutes',
      teach: 'The pain eases long before the heat is gone. The damage '
        + 'goes on under the skin, so keep cooling for twenty '
        + 'minutes.',
      level: 4,
    },
    {
      id: 'fa-10',
      ask: 'Which of these needs an adult fetched at once?',
      kind: 'choice',
      options: [
        'A small scratch on a finger',
        'A burn on the face',
        'A small cut that has stopped bleeding',
      ],
      answer: 'A burn on the face',
      teach: 'Deep, large, on the face, or still bleeding means fetch an '
        + 'adult now. Small cuts and scratches you can clean and '
        + 'cover.',
      level: 4,
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

  why:
    'Your class has one football. '
    + 'Everybody wants it at break. '
    + 'On Monday three boys take it '
    + 'and keep it for the whole break. '
    + 'No school rule was broken. '
    + 'Everybody has the same right to play. '
    + 'So how can one right be real for all forty of you at once?',

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
    'A rule is an answer to a problem. '
    + 'Cars keep to the right because two cars meeting head on '
    + 'would crash. '
    + 'The rule came after the crash, not before it. '
    + 'A community also has people put in charge of different things. '
    + 'The assembly member speaks for your area. '
    + 'The head teacher runs the school. '
    + 'The chief settles matters of custom. '
    + 'Each one answers for a part of it, not for all of it. '
    + 'This lesson is about what a citizen holds '
    + 'and what a citizen owes.',

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
    {
      id: 'ci-4',
      ask: 'You have a right to be heard. What duty goes with it?',
      kind: 'choice',
      options: [
        'To speak the loudest',
        'To listen and wait your turn',
        'To always speak first',
      ],
      answer: 'To listen and wait your turn',
      teach: 'Everybody holds the right to be heard. All of you can only '
        + 'be heard if people take turns and listen.',
      level: 2,
    },
    {
      id: 'ci-5',
      ask: 'You have a right to be safe. What duty goes with it?',
      kind: 'choice',
      options: [
        'Not to make anybody else unsafe',
        'To stay at home',
        'To tell others to keep away',
      ],
      answer: 'Not to make anybody else unsafe',
      teach: 'Everybody has the right to be safe at the same time. That '
        + 'only works if nobody puts anybody else in danger.',
      level: 2,
    },
    {
      id: 'ci-6',
      ask: 'Who holds a right?',
      kind: 'choice',
      options: [
        'Only adults',
        'Only the strongest',
        'Everybody at the same time',
      ],
      answer: 'Everybody at the same time',
      teach: 'A right belongs to everybody at once. That is exactly why '
        + 'each right has a duty beside it.',
      level: 3,
    },
    {
      id: 'ci-7',
      ask: 'You have a right to be treated equally. What duty goes '
        + 'with it?',
      kind: 'choice',
      options: [
        'To be treated better than others',
        'To treat the others equally',
        'To ignore people you do not know',
      ],
      answer: 'To treat the others equally',
      teach: 'The duty is the same right seen from the other side. If '
        + 'you want equal treatment, you must give it too.',
      level: 3,
    },
    {
      id: 'ci-8',
      ask: 'Is being a good citizen only about voting?',
      kind: 'choice',
      options: [
        'Yes, only voting counts',
        'No, most of it is daily, like queueing and taking turns',
        'No, it is only about paying money',
      ],
      answer: 'No, most of it is daily, like queueing and taking turns',
      teach: 'Citizenship is mostly everyday things: queueing, taking '
        + 'turns and not spoiling what everybody uses.',
      level: 3,
    },
    {
      id: 'ci-9',
      ask: 'Three boys keep the class football for the whole break. No '
        + 'rule was broken. What went wrong?',
      kind: 'choice',
      options: [
        'They used the right to play so that others could not have it',
        'Nothing went wrong',
        'The others should have taken it by force',
      ],
      answer: 'They used the right to play so that others could not have it',
      teach: 'All forty learners have the right to play. It can only be '
        + 'real for everybody if the ball is shared, and that is the '
        + 'duty.',
      level: 4,
    },
    {
      id: 'ci-10',
      ask: 'How can you work out the duty that sits beside a right?',
      kind: 'choice',
      options: [
        'Wait for an adult to tell you',
        'Ask what it would take for everybody to have the right at once',
        'Look for a rule that stops you',
      ],
      answer: 'Ask what it would take for everybody to have the right at once',
      teach: 'You do not need to be told. Whatever it takes for '
        + 'everybody to hold the right at once is the duty.',
      level: 4,
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

  why:
    'Your uncle in Kumasi sends a message in Twi for your teacher, '
    + 'who speaks only English. '
    + 'You take the words one at a time '
    + 'and write down what each one means. '
    + 'What comes out is "Me I say that thing it finish", '
    + 'and your teacher cannot read it. '
    + 'Every single word is right and the sentence is wrong. '
    + 'So what else has to change '
    + 'when a sentence moves from one language to another?',

  idea:
    'Translating means saying in one language what was said in another. '
    + 'The thing to carry across is the meaning. '
    + 'A word for word translation almost always fails, '
    + 'because languages do not line up word by word.',

  mechanism:
    'Languages differ in more than words. '
    + 'They put words in different orders. '
    + 'They have idioms that mean nothing when taken literally. '
    + 'One language often has a single word '
    + 'where another needs five. '
    + 'So translating word by word gives you something '
    + 'made of the right words that says the wrong thing, '
    + 'or nothing at all. '
    + 'The reliable method is to stop translating words at all. '
    + 'Read the whole sentence. '
    + 'Understand it. '
    + 'Look away. '
    + 'Then say that meaning the way you naturally would '
    + 'in the other language.',

  recap:
    'A proverb is a short saying that carries a lesson. '
    + 'Take the Akan one: Obi nkyerɛ abɔfra Nyame. '
    + 'Word for word that is "somebody not-show child God", '
    + 'which is not English and means nothing. '
    + 'What it actually says is that a child comes to know some things '
    + 'without anybody teaching them. '
    + 'So the words and the meaning are two different things, '
    + 'and only one of them can cross into English. '
    + 'The same problem turns up, more mildly, in ordinary sentences, '
    + 'and that is what this lesson is about.',

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
      ask: 'How can you tell your translation is good?',
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
      why: 'You commit to a shape before the sentence has finished '
        + 'telling you where it is going.',
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
    {
      id: 'tr-4',
      ask: 'What is the first step when translating a sentence?',
      kind: 'choice',
      options: [
        'Translate the first word',
        'Read the whole sentence',
        'Write as you read',
      ],
      answer: 'Read the whole sentence',
      teach: 'Translating as you read makes you choose a shape before '
        + 'you can see where the sentence is going. Read it all, then '
        + 'work out what it means.',
      level: 2,
    },
    {
      id: 'tr-5',
      ask: 'A Twi message turned word by word into English gives: Me I '
        + 'say that thing it finish. What went wrong?',
      kind: 'choice',
      options: [
        'One word was spelled wrongly',
        'Each word was turned on its own, so the meaning was lost',
        'The message was too short',
      ],
      answer: 'Each word was turned on its own, so the meaning was lost',
      teach: 'Every word was right and the sentence was wrong. Languages '
        + 'do not line up word by word, so carry the meaning across '
        + 'instead.',
      level: 3,
    },
    {
      id: 'tr-6',
      ask: 'An idiom is translated word for word. What usually '
        + 'happens?',
      kind: 'choice',
      options: [
        'It means nothing, or the wrong thing',
        'It becomes a perfect translation',
        'It gets shorter and clearer',
      ],
      answer: 'It means nothing, or the wrong thing',
      teach: 'An idiom does not mean what its words say. Find what it '
        + 'means first, then say that in the other language.',
      level: 3,
    },
    {
      id: 'tr-7',
      ask: 'You have written your translation. What should you ask as '
        + 'you read it back?',
      kind: 'choice',
      options: [
        'Does it have the same number of words?',
        'Are the words in the same order as the original?',
        'Does it sound like something a person would say?',
      ],
      answer: 'Does it sound like something a person would say?',
      teach: 'Keeping the same words or order often makes it sound '
        + 'wrong. A good translation sounds natural in the new '
        + 'language.',
      level: 3,
    },
    {
      id: 'tr-8',
      ask: 'The Akan proverb Obi nkyerɛ abɔfra Nyame means:',
      kind: 'choice',
      options: [
        'Somebody not-show child God',
        'A child comes to know some things without anybody teaching them',
        'Children should not talk about God',
      ],
      answer: 'A child comes to know some things without anybody teaching them',
      teach: 'Somebody not-show child God is the word for word version, '
        + 'and it is not English. The meaning is what crosses into '
        + 'the other language.',
      level: 4,
    },
    {
      id: 'tr-9',
      ask: 'One language uses a single word where English needs five. '
        + 'What should a good translation do?',
      kind: 'choice',
      options: [
        'Use the number of words the meaning needs',
        'Always keep the same number of words',
        'Leave that word out',
      ],
      answer: 'Use the number of words the meaning needs',
      teach: 'Languages differ in how many words they need for an idea. '
        + 'Carry the meaning, and let the word count change.',
      level: 4,
    },
    {
      id: 'tr-10',
      ask: 'A joke is built on the sounds of Twi words and cannot be '
        + 'translated. What does a good translator do?',
      kind: 'choice',
      options: [
        'Pretend nothing was lost',
        'Refuse to translate the passage',
        'Choose what to lose and say so',
      ],
      answer: 'Choose what to lose and say so',
      teach: 'Some things truly do not cross between languages. '
        + 'Pretending nothing was lost is worse than saying honestly '
        + 'what was.',
      level: 5,
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

  why:
    'A pupil has to tell the class about the Volta Lake. '
    + 'She writes down everything she knows on four slides, '
    + 'in small letters, '
    + 'and reads it out with her back half turned to the class. '
    + 'Everybody has finished reading slide one '
    + 'long before she reaches the end of it. '
    + 'Nobody looks up and nobody remembers anything. '
    + 'She did all the work and the talk still failed. '
    + 'What are the slides for, '
    + 'if not for holding what you want to say?',

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
    'A short talk is easier to follow when it has only a few parts. '
    + 'Pick three things you want the class to remember, '
    + 'and say them in order, one at a time. '
    + 'Hold a small card with just those three things on it, '
    + 'three or four words each, '
    + 'and look at the class while you talk. '
    + 'Reading a whole page out loud sounds flat '
    + 'and the class stops listening. '
    + 'This lesson adds slides to that talk, '
    + 'and the card rule holds for a slide too: '
    + 'it reminds you, it does not say it for you.',

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
    {
      id: 'pr-4',
      ask: 'How many ideas should one slide have?',
      kind: 'choice',
      options: ['As many as fit', 'One', 'Five'],
      answer: 'One',
      teach: 'One idea per slide lets the class glance, understand the '
        + 'heading and look back at you.',
      level: 2,
    },
    {
      id: 'pr-5',
      ask: 'While you present, where should you look?',
      kind: 'choice',
      options: ['At the screen', 'At the floor', 'At the class'],
      answer: 'At the class',
      teach: 'Facing the screen sends your voice to the wall. Glance at '
        + 'the slide if you need to, then turn back to the class.',
      level: 2,
    },
    {
      id: 'pr-6',
      ask: 'When should you add a picture to a slide?',
      kind: 'choice',
      options: [
        'On every slide',
        'When it shows something words cannot',
        'Never',
      ],
      answer: 'When it shows something words cannot',
      teach: 'A picture should do a job. Add one when it shows what '
        + 'words cannot, not just to fill space.',
      level: 3,
    },
    {
      id: 'pr-7',
      ask: 'Which slide about the Volta Lake is best?',
      kind: 'choice',
      options: [
        'A heading and three short words',
        'Four full sentences',
        'Every fact about the lake, in small letters',
      ],
      answer: 'A heading and three short words',
      teach: 'People read faster than you speak. A full slide makes them '
        + 'read and stop listening. A few words let them glance and '
        + 'come back to you.',
      level: 3,
    },
    {
      id: 'pr-8',
      ask: 'What should you do before the day of the talk?',
      kind: 'choice',
      options: [
        'Practise out loud with the slides',
        'Only read the slides in your head',
        'Add more words to every slide',
      ],
      answer: 'Practise out loud with the slides',
      teach: 'Practising out loud shows you where you stumble and how '
        + 'long it takes, while there is still time to fix it.',
      level: 3,
    },
    {
      id: 'pr-9',
      ask: 'A pupil puts everything she knows on four slides and reads '
        + 'them out. Nobody remembers anything. Why did it fail?',
      kind: 'choice',
      options: [
        'She used too few slides',
        'The class read the slides and stopped listening to her',
        'She looked at the class too much',
      ],
      answer: 'The class read the slides and stopped listening to her',
      teach: 'Full slides are read faster than they are spoken, so the '
        + 'class finishes and waits. Few words keep them listening to '
        + 'you.',
      level: 4,
    },
    {
      id: 'pr-10',
      ask: 'The projector stops working just before your talk. If you '
        + 'planned the talk first, what can you do?',
      kind: 'choice',
      options: [
        'Give the talk anyway',
        'Cancel the talk',
        'Wait until the projector is fixed',
      ],
      answer: 'Give the talk anyway',
      teach: 'If the talk was planned first, the slides were only '
        + 'helping. You still have everything you meant to say.',
      level: 4,
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

  why:
    'A class of 40 pupils is weighed for the health record. '
    + 'The teacher wants the total and the average. '
    + 'He adds the 40 numbers on paper, gets 1 248, and divides. '
    + 'Then two pupils are weighed again, '
    + 'because the first reading was wrong. '
    + 'Now the whole adding has to be done over from the beginning. '
    + 'Is there a way of writing the numbers down '
    + 'so that correcting two of them fixes the total by itself?',

  notation:
    'Every box in the grid is a cell, '
    + 'and its name is its column letter, then its row number, '
    + 'so B3 is said "B three" and means column B, row 3. '
    + 'A formula always starts with an equals sign, '
    + 'so =B3+B4 is said "equals B three plus B four". '
    + 'Without that equals sign at the front '
    + 'the computer treats what you typed as plain words '
    + 'and works nothing out at all. '
    + 'A run of cells is written with two dots between the ends, '
    + 'so B3:B10 means every cell from B3 down to B10. '
    + 'To add up a run of cells, type =SUM( then the run, then a '
    + 'closing bracket, so =SUM(B3:B10) totals every cell from B3 to '
    + 'B10. '
    + 'Typing the row number before the column letter, as 3B, '
    + 'is the commonest mistake.',

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
    'To find an average, add all the numbers, '
    + 'then divide by how many numbers there are. '
    + 'Four pupils weighing 30, 32, 34 and 36 kilograms '
    + 'add up to 132, and 132 divided by 4 is 33 kilograms. '
    + 'A computer can do that adding and dividing, '
    + 'but only if it is told exactly which numbers to add. '
    + 'It cannot look at a page and work out what you meant. '
    + 'This lesson is about writing numbers somewhere '
    + 'the computer can be told exactly where they are.',

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
    {
      id: 'sp-4',
      ask: 'In a spreadsheet, how are the columns named?',
      kind: 'choice',
      options: ['With numbers', 'With letters', 'With colours'],
      answer: 'With letters',
      teach: 'Columns have letters and rows have numbers. So a cell name '
        + 'is a column letter, then a row number, like B3.',
      level: 2,
    },
    {
      id: 'sp-5',
      ask: 'What must a formula start with?',
      kind: 'choice',
      options: ['A letter', 'A full stop', 'An equals sign'],
      answer: 'An equals sign',
      teach: 'Without the equals sign at the front, the computer treats '
        + 'what you typed as plain words and works nothing out.',
      level: 2,
    },
    {
      id: 'sp-6',
      ask: 'What does B3:B10 mean?',
      kind: 'choice',
      options: [
        'Every cell from B3 down to B10',
        'Only cells B3 and B10',
        'B3 divided by B10',
      ],
      answer: 'Every cell from B3 down to B10',
      teach: 'Two dots between two cell names mean the whole run of '
        + 'cells from one to the other, not just the two ends.',
      level: 3,
    },
    {
      id: 'sp-7',
      ask: 'Cells B2 to B5 hold the weights 30, 32, 34 and 36. What '
        + 'does =SUM(B2:B5) show?',
      kind: 'numeric',
      answer: '132',
      accept: ['132 kg', 'one hundred and thirty two'],
      teach: '=SUM(B2:B5) adds every cell from B2 to B5. 30 and 32 is '
        + '62, and 34 and 36 is 70. 62 and 70 is 132.',
      level: 3,
    },
    {
      id: 'sp-8',
      ask: 'The weights are in B2, B3, B4 and B5. Which formula totals '
        + 'all of them?',
      kind: 'choice',
      options: ['=SUM(B2:B4)', 'SUM B2 B5', '=SUM(B2:B5)'],
      answer: '=SUM(B2:B5)',
      teach: '=SUM(B2:B4) misses the last row and gives a believable '
        + 'wrong total. SUM B2 B5 has no equals sign, so nothing is '
        + 'worked out.',
      level: 4,
    },
    {
      id: 'sp-9',
      ask: 'Akosua types SUM(B2:B5) with no equals sign. What happens?',
      kind: 'choice',
      options: [
        'It adds the column as normal',
        'It shows as plain words',
        'It deletes column B',
      ],
      answer: 'It shows as plain words',
      teach: 'A formula must start with an equals sign. Without it, the '
        + 'computer shows what you typed and works nothing out.',
      level: 4,
    },
    {
      id: 'sp-10',
      ask: 'B2 to B5 hold 30, 32, 34 and 36, and B6 holds =SUM(B2:B5). '
        + 'A pupil is weighed again and B3 is changed from 32 to 35. '
        + 'What does B6 show now?',
      kind: 'numeric',
      answer: '135',
      accept: ['135 kg', 'one hundred and thirty five'],
      teach: 'The formula adds again by itself. The old total was 132, '
        + 'and B3 went up by 3, so 135. A total typed by hand would '
        + 'still say 132.',
      level: 5,
    },
  ],
})
