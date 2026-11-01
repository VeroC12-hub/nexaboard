/**
 * Stored lessons for SHS 2 General Science: forces, energy, machines,
 * heat and waves.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What these five have in common ───────────────────────────────────────
 *
 * They are the topics where a learner can get the number right and the
 * physics wrong, so every `mechanism` here is about a distinction rather
 * than a formula. Force is not motion, which is why a steady speed needs
 * no net force. Energy is not force, which is why a weight held still
 * does no work however much it hurts. Heat is not temperature, which is
 * why a bucket of warm water melts more ice than a red hot nail. And a
 * machine does not create anything, which is why the work out can never
 * exceed the work in and why efficiency is always short of a hundred.
 *
 * Each of those four sentences is a whole examination answer, and each is
 * the thing a learner is most likely never to have been told plainly.
 *
 * ── Equipment ────────────────────────────────────────────────────────────
 *
 * All the calculation is paper work and carries most of the marks. What
 * real apparatus adds is said in each lesson. A machines experiment needs
 * only a pulley, string and known weights, which a school can make from a
 * bicycle wheel and sand bags, and it gives a genuine efficiency figure.
 * Specific heat capacity needs a thermometer and a balance. Waves can be
 * shown with a rope, a bowl of water and a ruler, and refraction with a
 * coin in a bucket, all of which cost nothing.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── forces and Newton's laws ────────────────────────────────────────── */

teach({
  topicId: 'newton-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The first law: a body stays at rest, '
      + 'or keeps moving at a steady speed in a straight line, '
      + 'unless a net force acts. '
      + 'The second law: force equals mass times acceleration. '
      + 'The third law: '
      + 'for every force there is an equal and opposite force '
      + 'on a different body. '
      + 'So a steady speed means the forces balance, '
      + 'and an unbalanced force means acceleration, not motion.',
    method: [
      'Draw the body alone and mark every force on it.',
      'Add the forces in each direction to find the net force.',
      'Use F equals m a, with the net force, not one of the forces.',
    ],
  },

  idea:
    'A force is a push or a pull, measured in newtons. '
    + 'Newton’s first law says that a body at rest stays at rest, '
    + 'and a body in motion keeps its speed and direction, '
    + 'unless a net force acts on it. '
    + 'That tendency to keep doing what it was doing is called inertia, '
    + 'and it depends on mass. '
    + 'Newton’s second law says that '
    + 'the net force equals the mass times the acceleration: '
    + 'F equals m a. '
    + 'So one newton is the force that gives one kilogram '
    + 'an acceleration of one metre per second every second. '
    + 'Newton’s third law says that '
    + 'if body A pushes body B, '
    + 'then B pushes A with an equal force in the opposite direction. '
    + 'The two forces are on different bodies, '
    + 'which is why they do not cancel each other out. '
    + 'Weight is the force of gravity on a mass, '
    + 'and it is mass times g, '
    + 'with g about 10 newtons for each kilogram. '
    + 'A body is in equilibrium when the net force is zero '
    + 'and the net turning effect is zero, '
    + 'and it is then either at rest '
    + 'or moving at a steady speed in a straight line.',

  mechanism:
    'Everything in this topic rests on one correction, '
    + 'and it is the deepest correction in school physics. '
    + 'Force does not cause motion. '
    + 'Force causes a change of motion. '
    + 'The everyday belief is the opposite: '
    + 'that a moving thing needs a force to keep it moving, '
    + 'because that is what experience seems to show. '
    + 'Push a box and it moves; stop pushing and it stops. '
    + 'But the box stopped because of friction, '
    + 'not because the pushing ended, '
    + 'and if you could remove the friction '
    + 'it would keep going for ever. '
    + 'So a trotro travelling at a steady 60 kilometres an hour '
    + 'has zero net force on it. '
    + 'The engine’s driving force forward '
    + 'is exactly balanced by friction and air resistance backwards. '
    + 'The engine is working hard '
    + 'and the net force is nothing at all. '
    + 'Once that is in place, '
    + 'the second law is read correctly: '
    + 'F equals m a uses the net force, '
    + 'not the engine force, '
    + 'and if a question gives you a driving force and a friction '
    + 'you must subtract before you divide. '
    + 'This is the commonest arithmetic error in the topic, '
    + 'and it comes from the conceptual one. '
    + 'The second correction is about the third law, '
    + 'and it has one sentence that settles every confusion: '
    + 'the two forces act on different bodies. '
    + 'Learners ask, reasonably, '
    + 'why anything ever moves '
    + 'if every force has an equal opposite. '
    + 'The answer is that the pair never acts on the same thing. '
    + 'When you push a wall, '
    + 'you push the wall and the wall pushes you. '
    + 'To find out whether the wall moves, '
    + 'you look only at the forces on the wall, '
    + 'and your push is the only one in that direction. '
    + 'The wall’s push on you appears in the accounting for you, '
    + 'not for the wall. '
    + 'So when answering, '
    + 'always say which body each force acts on. '
    + 'The same reasoning explains how anything walks, swims or flies. '
    + 'You push the ground backwards and the ground pushes you forwards, '
    + 'and it is the ground’s push, '
    + 'the force on you, '
    + 'that moves you. '
    + 'A rocket works in the same way, '
    + 'pushing gas out backwards '
    + 'and being pushed forwards in return, '
    + 'which is why it works in space '
    + 'where there is nothing to push against: '
    + 'it is pushing against its own exhaust. '
    + 'The third thing is the free body diagram, '
    + 'and it is where the marks are. '
    + 'Draw the body on its own, '
    + 'detached from everything touching it, '
    + 'and replace each contact with the force it applies. '
    + 'Weight always acts downwards. '
    + 'A surface pushes at right angles to itself, '
    + 'which is the normal force. '
    + 'Friction acts along the surface, '
    + 'against the direction of sliding. '
    + 'A rope pulls along its own length and never pushes. '
    + 'Then resolve any angled force '
    + 'into horizontal and vertical parts, '
    + 'add each direction separately, '
    + 'and apply the second law to each. '
    + 'A learner who draws that diagram before calculating '
    + 'almost never applies the formula to the wrong force, '
    + 'and a learner who calculates first '
    + 'almost always does.',

  recap:
    'You have met speed, acceleration and the forces of friction '
    + 'and weight. '
    + 'This asks the harder question of what a force actually does, '
    + 'and the answer is not what experience suggests.',

  method: [
    'Draw the body on its own, detached from what touches it.',
    'Mark the weight, downwards.',
    'Mark the normal force from any surface, at right angles to it.',
    'Mark friction along the surface, opposing the sliding.',
    'Mark any pull along the rope that applies it.',
    'Resolve angled forces into horizontal and vertical parts.',
    'Add the forces in each direction to get the net force.',
    'Apply F equals m a with the net force.',
    'For a third law pair, say which body each of the two forces acts on.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A force of 12 newtons acts on a mass of 3 kilograms. '
        + 'Find the acceleration.',
      steps: [
        'F equals m a, so a equals F over m.',
        '12 divided by 3.',
      ],
      answer: '4 metres per second every second.',
    },
    {
      level: 4,
      ask: 'A car of mass 800 kilograms has a driving force of 2400 '
        + 'newtons and meets 400 newtons of resistance. '
        + 'Find its acceleration.',
      steps: [
        'Net force equals 2400 minus 400, which is 2000 newtons.',
        'a equals net force over mass.',
        '2000 divided by 800.',
      ],
      answer: '2.5 metres per second every second. '
        + 'The resistance had to be subtracted first: '
        + 'the second law uses the net force, not the driving force.',
    },
    {
      level: 5,
      ask: 'A trotro travels at a steady 60 kilometres an hour '
        + 'on a level road. '
        + 'What is the net force on it, and explain.',
      steps: [
        'Steady speed in a straight line means no change of motion.',
        'By the first law, no change of motion means no net force.',
        'The driving force must therefore equal the resistances.',
      ],
      answer: 'Zero. '
        + 'The engine’s driving force forward '
        + 'is exactly balanced by friction and air resistance backwards. '
        + 'The engine is working hard and the net force is nothing, '
        + 'because force causes a change of motion and not motion '
        + 'itself.',
    },
    {
      level: 6,
      ask: 'If every force has an equal and opposite force, '
        + 'how does a person walking ever move forward?',
      steps: [
        'The foot pushes backwards on the ground.',
        'By the third law the ground pushes forwards on the foot.',
        'Those two forces act on different bodies.',
        'To see whether the person moves, '
          + 'look only at the forces on the person.',
      ],
      answer: 'Because the pair acts on two different bodies. '
        + 'The person pushes the ground backwards '
        + 'and the ground pushes the person forwards, '
        + 'and only the second of those appears in the accounting '
        + 'for the person, so there is a net force on them. '
        + 'The force on the ground does not cancel it, '
        + 'because it is not a force on the person at all.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a moving body needs a force to keep it moving.',
      why: 'It stops because of friction. '
        + 'A steady speed in a straight line means the net force is '
        + 'zero.',
    },
    {
      mistake: 'Putting the driving force into F equals m a.',
      why: 'The law uses the net force. '
        + 'Subtract the resistances first.',
    },
    {
      mistake: 'Thinking third law pairs cancel each other.',
      why: 'They act on different bodies. '
        + 'Say which body each force acts on and the confusion goes.',
    },
    {
      mistake: 'Confusing mass and weight.',
      why: 'Mass is in kilograms and does not change. '
        + 'Weight is a force in newtons, '
        + 'and it is mass times g.',
    },
  ],

  extension:
    'The first law explains why a seat belt matters, '
    + 'and it is worth saying in those words. '
    + 'A passenger in a moving car is moving at the car’s speed. '
    + 'When the car stops suddenly, '
    + 'the car has a very large force on it from whatever it hit, '
    + 'and the passenger has none. '
    + 'So by the first law the passenger keeps going '
    + 'at the original speed '
    + 'until something applies a force to them, '
    + 'and that something is either the belt, '
    + 'spread across the chest over a tenth of a second, '
    + 'or the windscreen, '
    + 'over a thousandth. '
    + 'The same change of motion either way; '
    + 'the force depends entirely on the time taken, '
    + 'which is why a belt and an airbag work at all.',

  figure: {
    alt: 'Three panels, one for each law. The first shows a trotro '
      + 'travelling at a steady speed with two equal horizontal arrows '
      + 'on it, a driving force forward and resistance backward, drawn '
      + 'the same length, labelled net force zero with a note that the '
      + 'engine is working hard and the net force is still nothing. The '
      + 'second shows the same vehicle accelerating, with the driving '
      + 'force arrow longer than the resistance arrow and the difference '
      + 'marked as the net force, with F equals m a written beside it '
      + 'and a note that the net force goes into the formula, not the '
      + 'driving force. The third shows a person walking, with one arrow '
      + 'from the foot pushing backwards on the ground and a second '
      + 'equal arrow from the ground pushing forwards on the foot, each '
      + 'labelled with the body it acts on, and a note that the pair '
      + 'does not cancel because the two forces are on different bodies, '
      + 'so only the ground’s push appears in the accounting for the '
      + 'person. Beneath the panels a free body diagram shows a block on '
      + 'a surface with four forces marked: weight down, normal force up '
      + 'at right angles to the surface, friction along the surface '
      + 'against the sliding, and a rope pulling along its own length.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* panel 1 */
      + '<rect x="40" y="60" width="90" height="40" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="62" cy="104" r="8" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="110" cy="104" r="8" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M130 80h50" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M172 74l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<path d="M40 80h-50" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M-2 74l-10 6 10 6Z" fill="currentColor"/>'
      + '<text x="136" y="68" font-size="9" fill="#0f8a4d">driving</text>'
      + '<text x="2" y="68" font-size="9" fill="currentColor">resistance</text>'
      + '<text x="10" y="134" font-size="10" fill="currentColor">steady speed</text>'
      + '<text x="10" y="148" font-size="10" fill="#0f8a4d">net force = 0</text>'
      + '<text x="10" y="164" font-size="9" fill="currentColor">the engine works hard and</text>'
      + '<text x="10" y="176" font-size="9" fill="currentColor">the net force is still nothing</text>'
      /* panel 2 */
      + '<rect x="250" y="60" width="90" height="40" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="272" cy="104" r="8" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="320" cy="104" r="8" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M340 80h90" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M422 74l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<path d="M250 80h-36" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M222 74l-10 6 10 6Z" fill="currentColor"/>'
      + '<path d="M376 100h54" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3" fill="none"/>'
      + '<text x="378" y="116" font-size="9" fill="currentColor">the difference: the net force</text>'
      + '<text x="222" y="134" font-size="10" fill="currentColor">accelerating</text>'
      + '<text x="222" y="150" font-size="10" fill="#0f8a4d">F = m a, with the NET force</text>'
      + '<text x="222" y="166" font-size="9" fill="currentColor">subtract the resistance first:</text>'
      + '<text x="222" y="178" font-size="9" fill="currentColor">that is the commonest error</text>'
      /* panel 3 */
      + '<circle cx="520" cy="66" r="10" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M520 76v34" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M520 110l-14 24" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M520 110l16 24" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M470 150h150" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M506 138h-40" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M472 132l-10 6 10 6Z" fill="currentColor"/>'
      + '<text x="440" y="128" font-size="8" fill="currentColor">foot pushes the</text>'
      + '<text x="446" y="118" font-size="8" fill="currentColor">ground back</text>'
      + '<path d="M536 162h46" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M576 156l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<text x="500" y="180" font-size="8" fill="#0f8a4d">the ground pushes the person forward</text>'
      + '<text x="440" y="200" font-size="9" fill="currentColor">the pair does not cancel: the two forces</text>'
      + '<text x="440" y="212" font-size="9" fill="currentColor">are on different bodies, so only one of</text>'
      + '<text x="440" y="224" font-size="9" fill="currentColor">them is a force on the person</text>'
      /* free body diagram */
      + '<path d="M60 350h300" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<rect x="170" y="300" width="80" height="50" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M210 350v50" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M204 390l6 12 6-12Z" fill="#0f8a4d"/>'
      + '<text x="216" y="384" font-size="9" fill="#0f8a4d">weight, always down</text>'
      + '<path d="M210 300v-46" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M204 264l6-12 6 12Z" fill="#0f8a4d"/>'
      + '<text x="216" y="266" font-size="9" fill="#0f8a4d">normal force, at right angles to the surface</text>'
      + '<path d="M170 338h-60" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M116 332l-10 6 10 6Z" fill="currentColor"/>'
      + '<text x="60" y="328" font-size="9" fill="currentColor">friction, along the surface</text>'
      + '<path d="M250 318h80" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M322 312l10 6-10 6Z" fill="currentColor"/>'
      + '<text x="252" y="308" font-size="9" fill="currentColor">a rope pulls along itself, and never pushes</text>'
      + '<text x="60" y="414" font-size="11" fill="currentColor">draw this before calculating, and the formula is almost never applied to the wrong force</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each law, what it actually says, and the belief it corrects',
      columns: ['Law', 'What it says', 'The everyday belief it corrects', 'Use it to'],
      rows: [
        ['First', 'No net force means no change of motion', 'That motion needs a force to keep it going', 'Say that a steady speed means balanced forces'],
        ['Second', 'Net force equals mass times acceleration', 'That any force gives acceleration', 'Calculate, after subtracting the resistances'],
        ['Third', 'Forces come in equal opposite pairs on two bodies', 'That the pair cancels, so nothing could move', 'Explain walking, swimming, and a rocket'],
      ],
      note: 'The third column is where the teaching has to happen. '
        + 'Each belief is reasonable, '
        + 'and each is what experience with friction suggests.',
    },
  ],

  questions: [
    {
      id: 'nw-1',
      ask: 'A 5 kilogram mass has a net force of 20 newtons on it. '
        + 'Give the acceleration in metres per second every second.',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: '20 divided by 5, from F equals m a.',
      level: 3,
    },
    {
      id: 'nw-2',
      ask: 'A lorry moves at a steady speed on a level road. '
        + 'The net force on it is:',
      kind: 'numeric',
      options: [],
      answer: '0',
      teach: 'Steady speed in a straight line means no change of motion, '
        + 'so the driving force balances the resistances.',
      level: 5,
    },
    {
      id: 'nw-3',
      ask: 'Driving force 3000 newtons, resistance 500 newtons, '
        + 'mass 500 kilograms. '
        + 'Give the acceleration.',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'Net force is 2500 newtons, '
        + 'and 2500 divided by 500 is 5. '
        + 'Subtract before dividing.',
      level: 5,
    },
    {
      id: 'nw-4',
      ask: 'Third law pairs do not cancel because they:',
      kind: 'choice',
      options: [
        'Act on different bodies',
        'Are not quite equal',
        'Act at different times',
      ],
      answer: 'Act on different bodies',
      teach: 'Say which body each force acts on, '
        + 'and the whole confusion disappears.',
      level: 6,
    },
    {
      id: 'nw-5',
      ask: 'A person walks forward because:',
      kind: 'choice',
      options: [
        'The ground pushes the person forwards',
        'The person pushes themselves forwards',
        'Friction is removed',
      ],
      answer: 'The ground pushes the person forwards',
      teach: 'The foot pushes the ground backwards, '
        + 'and the ground’s reaction is the force on the person.',
      level: 6,
    },
  ],
})

/* ── work, energy and power ──────────────────────────────────────────── */

teach({
  topicId: 'work-energy-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Work is force times the distance moved '
      + 'in the direction of the force, '
      + 'measured in joules. '
      + 'No movement means no work, however great the force. '
      + 'Energy is the capacity to do work, '
      + 'and it is never created or destroyed, only changed in form. '
      + 'Kinetic energy is one half m v squared '
      + 'and gravitational potential energy is m g h. '
      + 'Power is work divided by the time taken, in watts.',
    method: [
      'Check that the body actually moved, and in which direction.',
      'Use work equals force times distance along the force.',
      'For power, divide the work by the time.',
    ],
  },

  idea:
    'Work is done when a force moves its point of application. '
    + 'Work equals the force times the distance moved '
    + 'in the direction of the force, '
    + 'and the unit is the joule. '
    + 'One joule is one newton acting through one metre. '
    + 'If nothing moves, no work is done. '
    + 'If the movement is at right angles to the force, '
    + 'that force does no work either. '
    + 'Energy is the capacity to do work, '
    + 'and it is measured in joules as well. '
    + 'Kinetic energy is the energy of motion, '
    + 'and it is one half times mass times the square of the speed. '
    + 'Gravitational potential energy is the energy of position, '
    + 'and it is mass times g times the height raised. '
    + 'The principle of conservation of energy says '
    + 'that energy is never created or destroyed, '
    + 'only changed from one form into another. '
    + 'Power is the rate of doing work: '
    + 'work divided by time, '
    + 'measured in watts. '
    + 'One watt is one joule a second.',

  mechanism:
    'Three distinctions decide this topic, '
    + 'and each one is a sentence worth memorising. '
    + 'The first is that work needs movement. '
    + 'A labourer who holds a bag of cement '
    + 'on his head for ten minutes without moving '
    + 'does no work on the bag at all, '
    + 'in the physics sense, '
    + 'because the force did not move its point of application. '
    + 'He is exhausted, '
    + 'and the energy he used went into his own muscle fibres, '
    + 'which were contracting and releasing many times a second '
    + 'to hold the position. '
    + 'So the physics and the feeling disagree, '
    + 'and the reason is worth stating in an answer. '
    + 'The same rule explains the second case: '
    + 'carrying that bag horizontally along a level road '
    + 'does almost no work against gravity either, '
    + 'because the force on the bag is upwards '
    + 'and the movement is sideways, '
    + 'and those are at right angles. '
    + 'The work being done is against air resistance '
    + 'and in moving his own body. '
    + 'This is a favourite examination question '
    + 'precisely because it feels wrong. '
    + 'The second distinction is between energy and force, '
    + 'and it shows up in the two formulas. '
    + 'Kinetic energy has the speed squared in it, '
    + 'and that one fact has large consequences. '
    + 'Double the speed of a vehicle and you have four times the energy, '
    + 'so it needs four times the distance to stop '
    + 'with the same braking force. '
    + 'A car at 60 kilometres an hour '
    + 'does not need twice the stopping distance of one at 30; '
    + 'it needs four times. '
    + 'That is the physics behind every speed limit argument '
    + 'and it is the best answer to a question '
    + 'about why speed matters more than it seems to. '
    + 'The third is that conservation of energy is an accounting rule '
    + 'and not a hope. '
    + 'When something seems to lose energy, '
    + 'the energy went somewhere, '
    + 'and in nearly every school case it went to heat, '
    + 'through friction or through air resistance. '
    + 'So for a ball dropped from a height, '
    + 'the potential energy at the top '
    + 'equals the kinetic energy at the bottom, '
    + 'if air resistance is ignored, '
    + 'which gives a useful equation: '
    + 'm g h equals one half m v squared, '
    + 'and the mass cancels, '
    + 'so v squared equals 2 g h. '
    + 'The mass cancelling is the surprise worth drawing out: '
    + 'a heavy stone and a light one '
    + 'dropped from the same height '
    + 'arrive at the same speed, '
    + 'and that is a conservation result '
    + 'rather than a fact to be memorised. '
    + 'And when the ball does not quite reach the predicted speed, '
    + 'the shortfall is not a failure of the principle; '
    + 'it is the heat the air took. '
    + 'Last, power, '
    + 'which learners treat as another word for energy. '
    + 'It is energy divided by time, '
    + 'so it says how fast rather than how much. '
    + 'Two labourers who carry the same load up the same stairs '
    + 'do exactly the same work. '
    + 'The one who takes half the time '
    + 'has developed twice the power. '
    + 'That distinction is examined directly, '
    + 'and it is also how machines are compared in real life: '
    + 'a pump is rated in watts '
    + 'because what matters is how fast it can lift the water, '
    + 'not how much it could lift given for ever.',

  recap:
    'You have met forces and the forms of energy, '
    + 'and you know that energy is needed to lift a load. '
    + 'This puts numbers on it, '
    + 'and asks exactly when a force counts as doing work.',

  method: [
    'Identify the force and ask whether its point of application moved.',
    'If nothing moved, the work is zero.',
    'Check that the movement is along the force, not at right angles to it.',
    'Work equals force times distance along the force.',
    'For a raised mass, potential energy is m g h.',
    'For a moving mass, kinetic energy is one half m v squared.',
    'For a fall, set m g h equal to one half m v squared and cancel the mass.',
    'If the answer falls short of the prediction, account for it as heat.',
    'For power, divide the work by the time taken.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A force of 50 newtons drags a box 4 metres along the floor '
        + 'in the direction of the force. '
        + 'Find the work done.',
      steps: [
        'Work equals force times distance along the force.',
        '50 times 4.',
      ],
      answer: '200 joules.',
    },
    {
      level: 4,
      ask: 'A labourer holds a 25 kilogram bag of cement on his head '
        + 'for ten minutes without moving. '
        + 'How much work does he do on the bag, and why is he tired?',
      steps: [
        'Work needs the point of application to move.',
        'The bag did not move.',
        'So the work on the bag is zero.',
        'His muscles were contracting and releasing to hold it.',
      ],
      answer: 'No work at all on the bag, '
        + 'because nothing moved. '
        + 'He is tired because his muscle fibres were contracting and '
        + 'releasing many times a second to hold the position, '
        + 'and that used energy inside his body. '
        + 'The physics and the feeling disagree, '
        + 'and the reason is the definition of work.',
    },
    {
      level: 5,
      ask: 'A stone of mass 2 kilograms is dropped from 20 metres. '
        + 'Find its speed on landing, taking g as 10, '
        + 'and say why the mass did not matter.',
      steps: [
        'Potential energy at the top: m g h equals 2 times 10 times 20, '
          + 'which is 400 joules.',
        'All of it becomes kinetic energy: one half m v squared equals '
          + '400.',
        'So one half times 2 times v squared equals 400, '
          + 'giving v squared equals 400.',
        'Or cancel the mass first: v squared equals 2 g h.',
      ],
      answer: '20 metres a second. '
        + 'The mass appears on both sides of '
        + 'm g h equals one half m v squared, '
        + 'so it cancels, '
        + 'and a heavy stone and a light one '
        + 'dropped from the same height arrive at the same speed.',
    },
    {
      level: 6,
      ask: 'Two labourers each carry 300 newtons of load up 6 metres of '
        + 'stairs. '
        + 'One takes 30 seconds and the other 60. '
        + 'Compare their work and their power.',
      steps: [
        'Work equals force times distance: 300 times 6, which is 1800 '
          + 'joules each.',
        'Power equals work over time.',
        'First: 1800 over 30, which is 60 watts.',
        'Second: 1800 over 60, which is 30 watts.',
      ],
      answer: 'Both did 1800 joules of work, '
        + 'exactly the same. '
        + 'The faster one developed 60 watts and the slower 30, '
        + 'so twice the power for the same work. '
        + 'Power says how fast, and work says how much, '
        + 'which is why a pump is rated in watts.',
    },
  ],

  traps: [
    {
      mistake: 'Saying work is done when a heavy load is held still.',
      why: 'Work needs the point of application to move. '
        + 'The energy the person used went into their own muscles.',
    },
    {
      mistake: 'Counting work against gravity for a horizontal carry.',
      why: 'The force is upwards and the movement sideways, '
        + 'and those are at right angles.',
    },
    {
      mistake: 'Forgetting the square in kinetic energy.',
      why: 'Doubling the speed gives four times the energy, '
        + 'and therefore four times the stopping distance.',
    },
    {
      mistake: 'Using power and energy as the same word.',
      why: 'Power is energy divided by time. '
        + 'Two people can do the same work at quite different powers.',
    },
  ],

  extension:
    'A thrown object shows the conversion both ways '
    + 'and is worth tracing. '
    + 'At the moment of throwing, '
    + 'all the energy given to it is kinetic. '
    + 'As it rises, '
    + 'the kinetic energy falls and the potential energy grows, '
    + 'and at the very top '
    + 'the vertical kinetic energy is zero '
    + 'while the potential energy is greatest. '
    + 'Coming down, the exchange runs in reverse, '
    + 'and if air resistance is ignored '
    + 'it returns to the hand at exactly the speed it left. '
    + 'In reality it comes back a little slower, '
    + 'and the difference went to heating the air. '
    + 'Measuring that difference '
    + 'is one way of measuring air resistance, '
    + 'and it is a good demonstration '
    + 'that conservation of energy is not contradicted by friction '
    + 'but explained by it.',

  figure: {
    alt: 'Three panels. The first shows a labourer standing still with a '
      + 'bag of cement on his head, with an upward force arrow from his '
      + 'head and a distance of zero marked beside it, labelled no '
      + 'movement so no work on the bag, with a note that the energy he '
      + 'used went into his own muscle fibres holding the position. The '
      + 'second shows the same labourer walking along a level road, with '
      + 'the force on the bag drawn upward and the movement drawn '
      + 'sideways and a right angle marked between them, labelled no '
      + 'work against gravity because the force and the movement are at '
      + 'right angles. The third shows a stone falling from a height, '
      + 'with its energy drawn as two stacked bars at three points on '
      + 'the way down: at the top all potential and no kinetic, halfway '
      + 'down half and half, and at the bottom all kinetic and no '
      + 'potential, with the total height of the bars the same at all '
      + 'three points, and the equation m g h equals one half m v '
      + 'squared written beside it with the mass crossed out on both '
      + 'sides to show that it cancels.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* panel 1 */
      + '<rect x="40" y="40" width="54" height="20" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="67" cy="76" r="12" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M67 88v40" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M67 128l-14 32" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M67 128l14 32" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M110 60v-14" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M104 56l6-12 6 12Z" fill="#0f8a4d"/>'
      + '<text x="118" y="54" font-size="9" fill="#0f8a4d">force</text>'
      + '<text x="118" y="70" font-size="9" fill="currentColor">distance = 0</text>'
      + '<text x="20" y="186" font-size="10" fill="#0f8a4d">no movement, so no work</text>'
      + '<text x="20" y="200" font-size="10" fill="#0f8a4d">on the bag at all</text>'
      + '<text x="20" y="218" font-size="9" fill="currentColor">the energy he used went into</text>'
      + '<text x="20" y="230" font-size="9" fill="currentColor">his own muscle fibres</text>'
      /* panel 2 */
      + '<rect x="240" y="40" width="54" height="20" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="267" cy="76" r="12" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M267 88v40" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M267 128l-16 32" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M267 128l18 30" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M310 50v-16" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M304 44l6-12 6 12Z" fill="#0f8a4d"/>'
      + '<path d="M300 170h70" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M362 164l10 6-10 6Z" fill="currentColor"/>'
      + '<path d="M310 50h12v12" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="318" y="46" font-size="9" fill="#0f8a4d">force up</text>'
      + '<text x="306" y="188" font-size="9" fill="currentColor">movement sideways</text>'
      + '<text x="220" y="218" font-size="10" fill="#0f8a4d">no work against gravity:</text>'
      + '<text x="220" y="232" font-size="10" fill="#0f8a4d">the two are at right angles</text>'
      /* panel 3 */
      + '<path d="M470 40v300" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<circle cx="470" cy="50" r="7" fill="currentColor"/>'
      + '<circle cx="470" cy="190" r="7" fill="currentColor"/>'
      + '<circle cx="470" cy="330" r="7" fill="currentColor"/>'
      /* bars top */
      + '<rect x="500" y="34" width="26" height="32" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>'
      + '<text x="532" y="48" font-size="8" fill="currentColor">all potential</text>'
      + '<text x="532" y="60" font-size="8" fill="currentColor">no kinetic</text>'
      /* bars middle */
      + '<rect x="500" y="174" width="26" height="16" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>'
      + '<rect x="500" y="190" width="26" height="16" fill="#0f8a4d" fill-opacity="0.4" stroke="#0f8a4d" stroke-width="1"/>'
      + '<text x="532" y="188" font-size="8" fill="currentColor">half and half</text>'
      + '<text x="532" y="200" font-size="8" fill="#0f8a4d">total unchanged</text>'
      /* bars bottom */
      + '<rect x="500" y="314" width="26" height="32" fill="#0f8a4d" fill-opacity="0.4" stroke="#0f8a4d" stroke-width="1"/>'
      + '<text x="532" y="328" font-size="8" fill="#0f8a4d">all kinetic</text>'
      + '<text x="532" y="340" font-size="8" fill="#0f8a4d">no potential</text>'
      + '<text x="396" y="368" font-size="11" fill="currentColor">m g h = one half m v squared</text>'
      + '<path d="M396 364h22" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M476 364h22" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="396" y="388" font-size="10" fill="#0f8a4d">the mass cancels, so a heavy stone and a light one</text>'
      + '<text x="396" y="402" font-size="10" fill="#0f8a4d">dropped from the same height arrive together</text>'
      + '<text x="20" y="282" font-size="11" fill="currentColor">kinetic energy has the speed squared in it: double the speed and you have four times</text>'
      + '<text x="20" y="300" font-size="11" fill="currentColor">the energy, and so four times the stopping distance at the same braking force</text>'
      + '<text x="20" y="324" font-size="11" fill="#0f8a4d">power is energy divided by time: it says how fast, not how much</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'When a force does work, and when it does none',
      columns: ['Situation', 'Force', 'Movement', 'Work done by that force'],
      rows: [
        ['Dragging a box along the floor', 'Horizontal pull', 'Along the pull', 'Force times distance'],
        ['Holding a load still', 'Upward', 'None', 'None at all'],
        ['Carrying a load on level ground', 'Upward', 'Sideways', 'None against gravity'],
        ['Lifting a load straight up', 'Upward', 'Upward', 'Force times height, which is m g h'],
        ['A satellite circling the earth', 'Towards the centre', 'At right angles to it', 'None, which is why it needs no fuel'],
      ],
      note: 'The second and third rows are the ones examined, '
        + 'because they feel wrong. '
        + 'Work needs movement along the force.',
    },
    {
      caption: 'The three quantities, with their formulas and units',
      columns: ['Quantity', 'Formula', 'Unit', 'What it tells you'],
      rows: [
        ['Work', 'Force times distance along the force', 'Joule', 'How much energy was transferred'],
        ['Kinetic energy', 'One half m v squared', 'Joule', 'The energy of something moving'],
        ['Potential energy', 'm g h', 'Joule', 'The energy of something raised'],
        ['Power', 'Work divided by time', 'Watt', 'How fast the work was done'],
      ],
      note: 'The first three are all in joules, '
        + 'which is why they can be set equal to one another. '
        + 'Power is the only one with time in it.',
    },
  ],

  questions: [
    {
      id: 'we-1',
      ask: 'A force of 20 newtons moves a box 5 metres along its own '
        + 'direction. Give the work done in joules.',
      kind: 'numeric',
      options: [],
      answer: '100',
      teach: 'Force times distance along the force.',
      level: 3,
    },
    {
      id: 'we-2',
      ask: 'A man holds a heavy load still for five minutes. '
        + 'The work he does on the load is:',
      kind: 'numeric',
      options: [],
      answer: '0',
      teach: 'Work needs the point of application to move. '
        + 'His energy went into his own muscle fibres.',
      level: 5,
    },
    {
      id: 'we-3',
      ask: 'A 3 kilogram mass is raised 4 metres. '
        + 'Taking g as 10, give the potential energy gained in joules.',
      kind: 'numeric',
      options: [],
      answer: '120',
      teach: 'm g h equals 3 times 10 times 4.',
      level: 4,
    },
    {
      id: 'we-4',
      ask: 'Doubling the speed of a vehicle multiplies its kinetic '
        + 'energy by:',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'The speed is squared, '
        + 'so the stopping distance is four times as long '
        + 'at the same braking force.',
      level: 5,
    },
    {
      id: 'we-5',
      ask: 'Two workers do 1800 joules each, one in 30 seconds and one '
        + 'in 60. Give the faster one’s power in watts.',
      kind: 'numeric',
      options: [],
      answer: '60',
      teach: '1800 divided by 30. '
        + 'The work was identical; only the power differed.',
      level: 6,
    },
  ],
})

/* ── machines and efficiency ─────────────────────────────────────────── */

teach({
  topicId: 'machines-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A machine makes a job easier, '
      + 'and it never makes energy. '
      + 'Mechanical advantage is the load divided by the effort. '
      + 'Velocity ratio is the distance the effort moves '
      + 'divided by the distance the load moves, '
      + 'and it depends only on the shape of the machine. '
      + 'Efficiency is the work got out '
      + 'divided by the work put in, as a percentage, '
      + 'and it is always less than a hundred '
      + 'because of friction and the weight of the machine itself.',
    method: [
      'Work out the velocity ratio from the geometry alone.',
      'Work out the mechanical advantage from the measured load and effort.',
      'Efficiency is mechanical advantage over velocity ratio, as a percentage.',
    ],
  },

  idea:
    'A machine lets a small effort move a large load. '
    + 'It may also change the direction of a force. '
    + 'Mechanical advantage is the load divided by the effort. '
    + 'It has no units. '
    + 'Velocity ratio is the distance moved by the effort '
    + 'divided by the distance moved by the load. '
    + 'It has no units either. '
    + 'The velocity ratio depends only on the shape of the machine. '
    + 'For a lever it is the ratio of the arms. '
    + 'For a pulley system it is the number of ropes '
    + 'supporting the load. '
    + 'For an inclined plane it is the length of the slope '
    + 'divided by the height. '
    + 'For a wheel and axle it is the radius of the wheel '
    + 'divided by the radius of the axle. '
    + 'Efficiency is the useful work got out '
    + 'divided by the work put in, as a percentage. '
    + 'It can also be found as the mechanical advantage '
    + 'divided by the velocity ratio, times a hundred. '
    + 'No machine reaches a hundred per cent. '
    + 'Some of the work put in overcomes friction, '
    + 'and some lifts the moving parts of the machine itself.',

  mechanism:
    'The first thing to understand, '
    + 'because it rules out whole classes of wrong answer, '
    + 'is that a machine gives you nothing for nothing. '
    + 'It trades distance for force. '
    + 'A pulley system with four ropes '
    + 'lets you lift a load with a quarter of the force, '
    + 'and in exchange you must pull four times as much rope. '
    + 'The work you do, '
    + 'force times distance, '
    + 'is the same or more. '
    + 'So the velocity ratio is not a happy accident, '
    + 'it is the price. '
    + 'And that is why the velocity ratio depends only on the shape: '
    + 'the geometry fixes how much further the effort must travel, '
    + 'and nothing you do to the machine '
    + 'other than rebuilding it '
    + 'can change it. '
    + 'Friction does not change the velocity ratio. '
    + 'Oil does not change the velocity ratio. '
    + 'A learner who writes that oiling a machine '
    + 'increases its velocity ratio has missed the whole idea, '
    + 'and this distinction is examined almost every year. '
    + 'What oil does change is the mechanical advantage, '
    + 'because with less friction '
    + 'the same load can be moved by a smaller effort. '
    + 'So the pair of definitions '
    + 'is the whole topic: '
    + 'velocity ratio from the geometry, '
    + 'mechanical advantage from the measurement. '
    + 'The second thing is why efficiency can never reach a hundred, '
    + 'and the answer has two parts '
    + 'and most learners give one. '
    + 'Part one is friction: '
    + 'surfaces rub, '
    + 'and that work ends up as heat. '
    + 'Part two is the weight of the machine itself: '
    + 'in a pulley system '
    + 'you are lifting the lower block as well as the load, '
    + 'and that work is real but not useful. '
    + 'Part two is the one that is left out, '
    + 'and it explains something a learner can check: '
    + 'the efficiency of a real pulley system '
    + 'rises as the load gets heavier. '
    + 'The reason is that the weight of the moving block is fixed, '
    + 'so with a small load it is a large share of the work '
    + 'and with a large load it is a small share. '
    + 'Being able to explain that graph '
    + 'is a strong answer, '
    + 'because it shows the two causes behaving differently. '
    + 'The third is the arithmetic order, '
    + 'which keeps the two ratios apart. '
    + 'Write the velocity ratio first, from the drawing: '
    + 'count the ropes, or measure the arms. '
    + 'Then write the mechanical advantage from the figures given: '
    + 'load over effort. '
    + 'Then divide the second by the first '
    + 'and multiply by a hundred. '
    + 'If you get more than a hundred per cent '
    + 'you have either counted the ropes wrongly '
    + 'or divided the wrong way round, '
    + 'and that check is free. '
    + 'Last, equipment, '
    + 'and this is the one physics topic '
    + 'where a school can do the real experiment for almost nothing. '
    + 'A pulley from a bicycle wheel, '
    + 'string, '
    + 'and bags of sand of known weight '
    + 'give a genuine efficiency figure, '
    + 'and repeating it with a heavier load '
    + 'shows the efficiency rising, '
    + 'which is the mechanism above '
    + 'seen rather than asserted. '
    + 'An inclined plane is a plank and a brick. '
    + 'A lever is a stick and a stone. '
    + 'So a school with no laboratory at all '
    + 'can still teach this topic from measurement, '
    + 'and that is worth saying, '
    + 'because it is not true of most of the syllabus.',

  recap:
    'You have used a lever, a pulley and a ramp, '
    + 'and you know that work is force times distance. '
    + 'This asks exactly what a machine gives you, '
    + 'what it charges for it, '
    + 'and why the accounts never quite balance.',

  method: [
    'Draw the machine and label the load and the effort.',
    'Find the velocity ratio from the geometry alone: count ropes, or measure arms.',
    'Note that friction and oiling do not change the velocity ratio.',
    'Find the mechanical advantage from the load and effort given.',
    'Efficiency equals mechanical advantage over velocity ratio, times a hundred.',
    'Check that the answer is below a hundred per cent.',
    'If asked to explain the shortfall, give both friction and the weight of the moving parts.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A load of 600 newtons is raised by an effort of 200 newtons. '
        + 'Find the mechanical advantage.',
      steps: [
        'Mechanical advantage is load over effort.',
        '600 divided by 200.',
      ],
      answer: '3, with no units.',
    },
    {
      level: 4,
      ask: 'A pulley system has four ropes supporting the load. '
        + 'Give the velocity ratio, '
        + 'and say what happens to it if the system is oiled.',
      steps: [
        'For a pulley system the velocity ratio '
          + 'is the number of ropes supporting the load.',
        'The velocity ratio comes from the geometry only.',
      ],
      answer: '4. '
        + 'Oiling does not change it at all, '
        + 'because the geometry has not changed. '
        + 'Oiling increases the mechanical advantage, '
        + 'because a smaller effort now moves the same load.',
    },
    {
      level: 5,
      ask: 'A pulley system of velocity ratio 5 '
        + 'lifts a 400 newton load with a 100 newton effort. '
        + 'Find the mechanical advantage and the efficiency.',
      steps: [
        'Mechanical advantage: 400 over 100, which is 4.',
        'Efficiency: mechanical advantage over velocity ratio, '
          + 'times a hundred.',
        '4 over 5, times 100.',
      ],
      answer: 'Mechanical advantage 4, efficiency 80 per cent. '
        + 'A fifth of the work put in went to friction '
        + 'and to lifting the moving block.',
    },
    {
      level: 6,
      ask: 'A learner measures the efficiency of one pulley system '
        + 'with several loads and finds it rises as the load increases. '
        + 'Explain.',
      steps: [
        'There are two causes of loss: friction, '
          + 'and lifting the machine’s own moving parts.',
        'The weight of the moving block is fixed, '
          + 'whatever the load.',
        'With a small load, that fixed weight is a large share of the '
          + 'total work.',
        'With a large load, it is a small share.',
      ],
      answer: 'Because the work wasted on lifting the moving block '
        + 'is roughly fixed, '
        + 'while the useful work rises with the load. '
        + 'So the wasted share falls and the efficiency rises. '
        + 'That graph is evidence '
        + 'that the two causes of loss behave differently, '
        + 'and it is why both must be named in an answer.',
    },
  ],

  traps: [
    {
      mistake: 'Saying that oiling a machine raises its velocity ratio.',
      why: 'Velocity ratio comes from the geometry alone. '
        + 'Oiling raises the mechanical advantage.',
    },
    {
      mistake: 'Explaining the shortfall in efficiency by friction only.',
      why: 'The machine also lifts its own moving parts. '
        + 'That second cause explains why efficiency rises with the '
        + 'load.',
    },
    {
      mistake: 'Getting an efficiency above a hundred per cent.',
      why: 'Then the ropes were miscounted or the division was the wrong '
        + 'way round. The check is free, so do it.',
    },
    {
      mistake: 'Thinking a machine reduces the work needed.',
      why: 'It reduces the force and increases the distance. '
        + 'The work done is the same or more.',
    },
  ],

  extension:
    'The screw is an inclined plane wrapped round a cylinder, '
    + 'and seeing that explains its enormous velocity ratio. '
    + 'In one full turn, '
    + 'the effort travels all the way round the circle '
    + 'at the end of the spanner, '
    + 'while the load moves forward by only one thread pitch, '
    + 'perhaps two millimetres. '
    + 'So the velocity ratio '
    + 'is the circumference of that circle divided by the pitch, '
    + 'which is often several hundred. '
    + 'That is why a car jack lifts a tonne '
    + 'with one hand, '
    + 'and also why a screw is very inefficient: '
    + 'with that much surface rubbing, '
    + 'most of the work put in goes into friction. '
    + 'A high velocity ratio and a low efficiency '
    + 'usually go together, '
    + 'for exactly that reason.',

  figure: {
    alt: 'A pulley system drawn with four ropes supporting the lower '
      + 'block, with the load hanging from it and the effort applied to '
      + 'the free end of the rope. Beside it two dimension arrows show '
      + 'the trade: the effort end moves four metres while the load '
      + 'rises one metre, labelled velocity ratio four, from the '
      + 'geometry alone. A note says that oiling cannot change this '
      + 'number because the shape has not changed. Beneath, a graph of '
      + 'efficiency against load rises steeply at first and then levels '
      + 'off below a hundred per cent, with the gap to a hundred divided '
      + 'into two shaded parts: a fixed lower band labelled lifting the '
      + 'machine’s own moving parts, which stays the same width as the '
      + 'load grows and therefore becomes a smaller share, and a band '
      + 'above it labelled friction. A note says this is why the '
      + 'efficiency of one pulley system rises as the load gets heavier, '
      + 'and why both causes must be named.',
    svg: '<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* beam */
      + '<path d="M60 40h240" stroke="currentColor" stroke-width="4" fill="none"/>'
      /* upper pulleys */
      + '<circle cx="120" cy="56" r="14" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="160" cy="56" r="14" stroke="currentColor" stroke-width="2" fill="none"/>'
      /* lower block */
      + '<rect x="100" y="170" width="80" height="24" rx="6" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<circle cx="120" cy="156" r="14" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="160" cy="156" r="14" stroke="currentColor" stroke-width="2" fill="none"/>'
      /* four supporting ropes */
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M106 56v100"/><path d="M134 56v100"/><path d="M146 56v100"/><path d="M174 56v100"/>'
      + '</g>'
      + '<path d="M174 56C200 56 220 70 220 120" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M220 120v60" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M214 170l6 12 6-12Z" fill="currentColor"/>'
      + '<text x="228" y="150" font-size="10" fill="currentColor">effort</text>'
      /* load */
      + '<rect x="116" y="194" width="48" height="36" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="124" y="248" font-size="10" fill="currentColor">load</text>'
      + '<text x="60" y="30" font-size="10" fill="#0f8a4d">four ropes support the load</text>'
      /* trade dimensions */
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M300 120v60"/><path d="M296 120h8"/><path d="M296 180h8"/>'
      + '<path d="M340 60v120"/><path d="M336 60h8"/><path d="M336 180h8"/>'
      + '</g>'
      + '<text x="306" y="156" font-size="9" fill="currentColor">load rises 1 m</text>'
      + '<text x="348" y="120" font-size="9" fill="#0f8a4d">effort end moves 4 m</text>'
      + '<text x="348" y="140" font-size="10" fill="#0f8a4d">velocity ratio = 4</text>'
      + '<text x="348" y="156" font-size="9" fill="currentColor">from the geometry alone</text>'
      + '<text x="348" y="178" font-size="9" fill="currentColor">oiling cannot change it;</text>'
      + '<text x="348" y="190" font-size="9" fill="currentColor">it raises the mechanical</text>'
      + '<text x="348" y="202" font-size="9" fill="currentColor">advantage instead</text>'
      /* graph */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M70 400V290"/><path d="M70 400h460"/>'
      + '</g>'
      + '<path d="M70 300h460" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" fill="none"/>'
      + '<text x="534" y="304" font-size="9" fill="currentColor">100%</text>'
      + '<text x="78" y="286" font-size="9" fill="currentColor">efficiency</text>'
      + '<text x="490" y="418" font-size="9" fill="currentColor">load</text>'
      + '<path d="M90 392C160 350 280 330 520 324" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      /* loss bands */
      + '<path d="M90 300h430v10H90Z" fill="currentColor" fill-opacity="0.3" stroke="none"/>'
      + '<path d="M90 310C160 348 280 322 520 316" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="200" y="320" font-size="9" fill="currentColor">friction</text>'
      + '<text x="200" y="308" font-size="9" fill="currentColor">the machine’s own moving parts: a fixed amount of work</text>'
      + '<text x="70" y="432" font-size="10" fill="#0f8a4d">the fixed loss is a large share of a small load and a small share of a large one, so the efficiency rises</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The velocity ratio of each machine, which comes from its shape alone',
      columns: ['Machine', 'Velocity ratio is', 'A worked example', 'What raises its mechanical advantage'],
      rows: [
        ['Lever', 'Effort arm over load arm', 'Arms of 120 cm and 30 cm give 4', 'Less friction at the fulcrum'],
        ['Pulley system', 'Number of ropes supporting the load', 'Four ropes give 4', 'Oiling, and a lighter moving block'],
        ['Inclined plane', 'Length of slope over height', 'A 5 m plank to a height of 1 m gives 5', 'A smoother surface, or rollers'],
        ['Wheel and axle', 'Radius of wheel over radius of axle', '40 cm over 5 cm gives 8', 'Better bearings'],
        ['Screw', 'Circumference of the effort circle over the pitch', '2 pi times 25 cm over 0.2 cm, about 785', 'Grease; but it is always poor'],
      ],
      note: 'Nothing in the second column mentions friction, '
        + 'which is the point. '
        + 'The fourth column is where friction belongs.',
    },
  ],

  questions: [
    {
      id: 'mc-1',
      ask: 'A load of 800 newtons is lifted by an effort of 200 newtons. '
        + 'Give the mechanical advantage.',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Load over effort, and it has no units.',
      level: 3,
    },
    {
      id: 'mc-2',
      ask: 'A pulley system has five ropes supporting the load. '
        + 'Give its velocity ratio.',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'For a pulley system it is the number of supporting ropes, '
        + 'and it comes from the geometry alone.',
      level: 4,
    },
    {
      id: 'mc-3',
      ask: 'Oiling a machine changes its:',
      kind: 'choice',
      options: [
        'Mechanical advantage',
        'Velocity ratio',
        'Both equally',
      ],
      answer: 'Mechanical advantage',
      teach: 'The velocity ratio depends only on the shape, '
        + 'and oil does not change the shape.',
      level: 5,
    },
    {
      id: 'mc-4',
      ask: 'Mechanical advantage 4, velocity ratio 5. '
        + 'Give the efficiency as a percentage.',
      kind: 'numeric',
      options: [],
      answer: '80',
      teach: '4 over 5, times a hundred. '
        + 'An answer above a hundred means a miscount.',
      level: 5,
    },
    {
      id: 'mc-5',
      ask: 'The efficiency of one pulley system rises as the load '
        + 'increases because:',
      kind: 'choice',
      options: [
        'The work wasted on the machine’s own weight is fixed',
        'Friction falls with a heavier load',
        'The velocity ratio increases',
      ],
      answer: 'The work wasted on the machine’s own weight is fixed',
      teach: 'So it is a large share of a small load '
        + 'and a small share of a large one.',
      level: 6,
    },
  ],
})

/* ── heat and temperature ───────────────────────────────────────────── */

teach({
  topicId: 'heat-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Temperature says how hot something is. '
      + 'Heat is the energy that flows '
      + 'because of a difference in temperature, '
      + 'and it is measured in joules. '
      + 'A bucket of warm water holds far more heat '
      + 'than a red hot nail, '
      + 'although the nail is at the higher temperature. '
      + 'Heat needed equals mass times specific heat capacity '
      + 'times the rise in temperature. '
      + 'Heat flows by conduction, convection and radiation.',
    method: [
      'Separate the two questions: how hot, and how much energy.',
      'Use heat equals m c times the change in temperature.',
      'Name the method of transfer and say what carries the energy in it.',
    ],
  },

  idea:
    'Temperature is a measure of how hot a thing is, '
    + 'in degrees Celsius or in kelvin, '
    + 'and it depends on how fast the particles are moving '
    + 'rather than on how many there are. '
    + 'Heat is energy in transfer, '
    + 'and it flows from a hotter body to a cooler one '
    + 'until they are at the same temperature. '
    + 'It is measured in joules. '
    + 'Specific heat capacity is the heat needed '
    + 'to raise the temperature of one kilogram of a substance '
    + 'by one degree Celsius, '
    + 'and the heat needed in general '
    + 'is the mass times the specific heat capacity '
    + 'times the change in temperature. '
    + 'Water has an unusually high specific heat capacity, '
    + 'about 4200 joules for each kilogram and each degree. '
    + 'Heat travels in three ways. '
    + 'Conduction passes energy from particle to particle '
    + 'without the particles themselves moving far, '
    + 'and it works best in metals. '
    + 'Convection carries energy '
    + 'by the movement of the heated fluid itself, '
    + 'which rises because it has expanded and become less dense. '
    + 'Radiation travels as waves, '
    + 'needs no material at all, '
    + 'and is how the sun’s energy reaches the earth.',

  mechanism:
    'The whole topic turns on one distinction, '
    + 'and it is stated best by an example '
    + 'that settles it for good. '
    + 'Take a nail heated until it glows, '
    + 'at perhaps 600 degrees, '
    + 'and a bucket of water at 40 degrees. '
    + 'The nail is at the far higher temperature. '
    + 'Drop the nail into a block of ice '
    + 'and it melts a little hollow and goes cold. '
    + 'Pour the bucket of water over the ice '
    + 'and most of the block disappears. '
    + 'So the bucket held far more heat, '
    + 'although it was much cooler. '
    + 'The reason is that temperature is about '
    + 'how fast the particles move '
    + 'while heat is about how much energy there is in total, '
    + 'and the bucket has perhaps a hundred thousand times '
    + 'as many particles. '
    + 'That is the distinction, '
    + 'and once a learner has it '
    + 'the formula stops looking arbitrary: '
    + 'the mass is in it because the number of particles matters, '
    + 'and the temperature change is in it '
    + 'because the speed of the particles matters, '
    + 'and the specific heat capacity is in it '
    + 'because different substances store different amounts '
    + 'per particle. '
    + 'The second mechanism is why water’s high specific heat capacity '
    + 'matters so much in Ghana, '
    + 'because this is the applied question the paper sets. '
    + 'Water needs about 4200 joules '
    + 'to warm one kilogram by one degree, '
    + 'while iron needs about 450 '
    + 'and sand about 800. '
    + 'So water warms slowly and cools slowly. '
    + 'This is why the sea at Cape Coast '
    + 'is cooler than the sand in the afternoon '
    + 'and warmer than the sand at night: '
    + 'the same sunshine falls on both, '
    + 'and the sand takes less energy to heat '
    + 'so it heats much more. '
    + 'It is why the coast has a smaller range of temperature '
    + 'between day and night than the inland north does, '
    + 'and it is why a car radiator uses water: '
    + 'water can carry away a great deal of heat '
    + 'for a small rise in its own temperature. '
    + 'It is also why a pot of water takes a long time to boil '
    + 'while the dry pot beside it is too hot to touch in a minute. '
    + 'Each of those is the same figure doing its work, '
    + 'and naming the figure in an answer '
    + 'is what turns an observation into physics. '
    + 'The third is the three transfers, '
    + 'and the examinable point is what carries the energy in each. '
    + 'In conduction the energy passes along '
    + 'while the material stays put, '
    + 'which is why it works in a solid '
    + 'and is best in a metal, '
    + 'where free electrons carry it quickly. '
    + 'In convection the material itself moves, '
    + 'and that is why convection cannot happen in a solid at all: '
    + 'the particles cannot travel. '
    + 'The driving mechanism is density: '
    + 'heated fluid expands, becomes less dense, and rises, '
    + 'and cooler fluid falls to take its place, '
    + 'which sets up a current. '
    + 'This is why a freezer compartment is at the top of a '
    + 'refrigerator, '
    + 'so that the air it cools can fall through the cabinet, '
    + 'and why a hot water tank is heated from the bottom. '
    + 'In radiation nothing carries it, '
    + 'which is the surprise: '
    + 'it crosses empty space, '
    + 'and dark matt surfaces both emit and absorb it best '
    + 'while shiny light ones reflect it. '
    + 'That is why a white or silver roof '
    + 'keeps a Ghanaian building cooler than a black one, '
    + 'and why a thermos flask is silvered inside. '
    + 'A flask, in fact, '
    + 'is the whole topic in one object: '
    + 'the vacuum stops conduction and convection, '
    + 'because both need material, '
    + 'and the silvering reflects the radiation, '
    + 'which does not. '
    + 'Explaining a flask is therefore the standard question, '
    + 'and all three transfers have to be named.',

  recap:
    'You know that heat flows from hot to cold '
    + 'and that a thermometer measures temperature. '
    + 'This separates the two ideas, '
    + 'puts a figure on how much energy a substance stores, '
    + 'and explains why water behaves as it does.',

  method: [
    'Decide which question is being asked: how hot, or how much energy.',
    'For how much, use heat equals mass times specific heat capacity times the temperature change.',
    'Keep the mass in kilograms and the change as a difference, not a final value.',
    'For transfer, name which of the three it is.',
    'Say what carries the energy: particle to particle, the fluid itself, or nothing.',
    'For an insulation question, block each of the three in turn.',
    'For a water question, name the high specific heat capacity and give the figure.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which holds more heat: '
        + 'a red hot nail or a bucket of warm water? Explain.',
      steps: [
        'The nail is at the higher temperature.',
        'The bucket has far more particles.',
        'Heat is the total energy, not the temperature.',
      ],
      answer: 'The bucket of warm water, by a great deal. '
        + 'Temperature says how fast the particles move; '
        + 'heat says how much energy there is altogether, '
        + 'and the bucket has vastly more particles.',
    },
    {
      level: 4,
      ask: 'How much heat is needed to raise 2 kilograms of water '
        + 'from 25 to 75 degrees? '
        + 'Take the specific heat capacity as 4200.',
      steps: [
        'The change in temperature is 75 minus 25, which is 50.',
        'Heat equals m c times the change.',
        '2 times 4200 times 50.',
      ],
      answer: '420000 joules, which is 420 kilojoules. '
        + 'The 50 is the change, not the final temperature.',
    },
    {
      level: 5,
      ask: 'Why is the sea cooler than the beach sand in the afternoon '
        + 'and warmer at night?',
      steps: [
        'The same sunshine falls on both.',
        'Water needs about 4200 joules a kilogram a degree; '
          + 'sand about 800.',
        'So the same energy raises the sand’s temperature far more.',
        'At night both lose heat, and the water’s store is larger.',
      ],
      answer: 'Because water has a much higher specific heat capacity. '
        + 'The same sunshine raises the sand’s temperature several times '
        + 'as much, so the sand is hotter by afternoon. '
        + 'At night the water has a far larger store of heat to give up, '
        + 'so it cools more slowly and ends up the warmer of the two. '
        + 'The same figure explains why the coast has a smaller range '
        + 'between day and night than the inland north.',
    },
    {
      level: 6,
      ask: 'Explain how a vacuum flask keeps a drink hot, '
        + 'naming all three methods of heat transfer.',
      steps: [
        'Conduction needs material to pass the energy along.',
        'Convection needs a fluid that can move.',
        'The vacuum between the walls has neither.',
        'Radiation needs no material, so the vacuum does not stop it.',
        'The silvered surfaces reflect radiation back.',
        'The stopper and the thin glass neck limit what is left.',
      ],
      answer: 'The vacuum between the double walls '
        + 'stops conduction and convection, '
        + 'because both of those need material to work. '
        + 'Radiation crosses a vacuum, '
        + 'so it is dealt with separately, '
        + 'by silvering both surfaces so that each reflects it back. '
        + 'The stopper stops convection out of the top, '
        + 'and the thin glass neck leaves little path for conduction. '
        + 'A flask is the whole topic in one object, '
        + 'which is why it is the standard question.',
    },
  ],

  traps: [
    {
      mistake: 'Using heat and temperature as the same word.',
      why: 'A bucket of warm water holds more heat than a red hot nail. '
        + 'Temperature is how fast, heat is how much.',
    },
    {
      mistake: 'Putting the final temperature into the formula.',
      why: 'It needs the change. '
        + 'From 25 to 75 degrees the change is 50.',
    },
    {
      mistake: 'Saying convection happens in a solid.',
      why: 'Convection needs the material itself to move, '
        + 'and in a solid the particles cannot travel.',
    },
    {
      mistake: 'Explaining a flask by the vacuum alone.',
      why: 'The vacuum stops two of the three transfers. '
        + 'Radiation crosses it, and the silvering is what deals with '
        + 'that.',
    },
  ],

  extension:
    'There is a second kind of heat that changes no temperature at all, '
    + 'and it is worth knowing because it seems impossible. '
    + 'Melting ice at zero degrees '
    + 'takes a great deal of energy, '
    + 'and while it melts '
    + 'the thermometer stays at zero. '
    + 'The energy is going into breaking the bonds '
    + 'that hold the solid together '
    + 'rather than into speeding the particles up. '
    + 'This is called latent heat, '
    + 'and it is why a drink with ice in it stays cold '
    + 'until the last of the ice has gone, '
    + 'and why sweating cools you: '
    + 'the water takes its latent heat of evaporation '
    + 'from your skin as it leaves.',

  figure: {
    alt: 'Two drawings. The first compares a red hot nail with a bucket '
      + 'of warm water, each shown beside a block of ice. The nail at '
      + 'six hundred degrees melts a small hollow, and the water at '
      + 'forty degrees melts most of the block, with the nail labelled '
      + 'high temperature and little heat and the bucket labelled lower '
      + 'temperature and much more heat, and a note that temperature is '
      + 'how fast the particles move while heat is how much energy there '
      + 'is altogether. The second shows the three transfers side by '
      + 'side: conduction along a metal bar, with the energy passing '
      + 'from particle to particle while the particles stay put; '
      + 'convection in a pot of water over a fire, with a circulating '
      + 'current drawn because the heated water expands and rises; and '
      + 'radiation from the sun to a roof, crossing empty space with '
      + 'nothing to carry it, and a dark roof absorbing while a light '
      + 'roof reflects. Beneath them a vacuum flask is drawn in section '
      + 'with each of the three transfers labelled where it is blocked: '
      + 'the vacuum stops conduction and convection, the silvering '
      + 'reflects the radiation, and the stopper closes the top.',
    svg: '<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* nail and ice */
      + '<path d="M40 60h50l10 6-10 6H40Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.4"/>'
      + '<text x="40" y="52" font-size="9" fill="currentColor">nail at 600 degrees</text>'
      + '<rect x="40" y="86" width="90" height="50" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M70 86a10 6 0 0 0 20 0" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="40" y="152" font-size="9" fill="#0f8a4d">melts a small hollow</text>'
      + '<text x="40" y="166" font-size="9" fill="currentColor">high temperature, little heat</text>'
      /* bucket and ice */
      + '<path d="M210 54h60l-8 36h-44Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.2"/>'
      + '<text x="200" y="46" font-size="9" fill="currentColor">bucket at 40 degrees</text>'
      + '<rect x="200" y="104" width="90" height="12" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M200 104h90" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="4 3" fill="none"/>'
      + '<text x="198" y="136" font-size="9" fill="#0f8a4d">melts most of the block</text>'
      + '<text x="198" y="150" font-size="9" fill="currentColor">lower temperature, far more heat</text>'
      + '<text x="40" y="196" font-size="10" fill="#0f8a4d">temperature is how fast the particles move; heat is how much energy there is altogether</text>'
      /* three transfers */
      + '<rect x="380" y="46" width="110" height="16" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g fill="currentColor"><circle cx="394" cy="54" r="3"/><circle cx="412" cy="54" r="3"/><circle cx="430" cy="54" r="3"/><circle cx="448" cy="54" r="3"/><circle cx="466" cy="54" r="3"/></g>'
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M398 54h10"/><path d="M416 54h10"/><path d="M434 54h10"/><path d="M452 54h10"/>'
      + '</g>'
      + '<text x="380" y="40" font-size="9" fill="#0f8a4d">conduction: energy passes, particles stay</text>'
      + '<text x="500" y="56" font-size="9" fill="currentColor">metal</text>'
      /* convection */
      + '<path d="M380 110h110v60H380Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M400 160C400 120 470 120 470 160C470 176 400 176 400 160" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M396 150l4 12 8-10Z" fill="#0f8a4d"/>'
      + '<path d="M410 180h50" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<text x="380" y="104" font-size="9" fill="#0f8a4d">convection: the fluid itself moves</text>'
      + '<text x="380" y="196" font-size="9" fill="currentColor">heated water expands, becomes less dense, rises</text>'
      /* radiation */
      + '<circle cx="400" cy="240" r="16" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M420 234h60"/><path d="M420 244h60"/><path d="M420 254h60"/>'
      + '</g>'
      + '<path d="M490 220h60l-10 40h-50Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.5"/>'
      + '<text x="380" y="216" font-size="9" fill="#0f8a4d">radiation: nothing carries it, so a vacuum does not stop it</text>'
      + '<text x="490" y="278" font-size="9" fill="currentColor">a dark matt roof absorbs it; a light shiny one reflects</text>'
      /* flask */
      + '<path d="M80 250h80v120H80Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M94 264h52v96H94Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<rect x="94" y="236" width="52" height="16" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<g stroke="#0f8a4d" stroke-width="3" fill="none">'
      + '<path d="M86 270v80"/><path d="M154 270v80"/>'
      + '</g>'
      + '<text x="176" y="250" font-size="9" fill="#0f8a4d">stopper: no convection out of the top</text>'
      + '<text x="176" y="282" font-size="9" fill="#0f8a4d">the vacuum stops conduction and convection,</text>'
      + '<text x="176" y="294" font-size="9" fill="#0f8a4d">because both of those need material</text>'
      + '<text x="176" y="318" font-size="9" fill="#0f8a4d">the silvering reflects the radiation back,</text>'
      + '<text x="176" y="330" font-size="9" fill="#0f8a4d">which the vacuum could not stop</text>'
      + '<text x="176" y="354" font-size="9" fill="currentColor">a flask is the whole topic in one object, which is</text>'
      + '<text x="176" y="366" font-size="9" fill="currentColor">why it is the standard question</text>'
      + '<text x="40" y="404" font-size="10" fill="currentColor">water needs about 4200 joules a kilogram a degree; sand about 800 and iron about 450</text>'
      + '<text x="40" y="424" font-size="10" fill="#0f8a4d">which is why the sea is cooler than the sand by afternoon and warmer by night</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Specific heat capacity, and what each figure explains',
      columns: ['Substance', 'Joules a kilogram a degree', 'So it warms', 'What that explains'],
      rows: [
        ['Water', 'About 4200', 'Very slowly', 'A radiator; a slow kettle; a mild coastal climate'],
        ['Sand or soil', 'About 800', 'Quickly', 'Hot beach sand, and a wide day to night range inland'],
        ['Iron', 'About 450', 'Very quickly', 'A dry pot too hot to touch within a minute'],
        ['Aluminium', 'About 900', 'Quickly', 'A cooking pot that heats fast and cools fast'],
      ],
      note: 'Water is the odd one out by a long way, '
        + 'and almost every applied question in this topic '
        + 'is that single figure doing its work.',
    },
    {
      caption: 'The three ways heat travels, and what carries it in each',
      columns: ['Transfer', 'What carries the energy', 'Works in', 'Does not work in', 'Blocked by'],
      rows: [
        ['Conduction', 'Particle to particle, while they stay put', 'Solids, best in metals', 'A vacuum', 'Air gaps, cloth, a vacuum'],
        ['Convection', 'The heated fluid itself, rising as it expands', 'Liquids and gases', 'Solids, and a vacuum', 'A lid, a closed space, a vacuum'],
        ['Radiation', 'Nothing at all; it is a wave', 'Everything, including empty space', 'Nothing stops it by absence', 'A shiny light surface, which reflects it'],
      ],
      note: 'The last column is why a flask needs both a vacuum '
        + 'and silvering: two of the three are stopped by absence '
        + 'of material and the third is not.',
    },
  ],

  questions: [
    {
      id: 'ht-1',
      ask: 'Heat is measured in:',
      kind: 'choice',
      options: ['Joules', 'Degrees Celsius', 'Watts'],
      answer: 'Joules',
      teach: 'Temperature is in degrees. '
        + 'Heat is energy, so it is in joules.',
      level: 3,
    },
    {
      id: 'ht-2',
      ask: 'How much heat raises 2 kilograms of water by 50 degrees, '
        + 'with c equal to 4200? Give the answer in joules.',
      kind: 'numeric',
      options: [],
      answer: '420000',
      teach: '2 times 4200 times 50. '
        + 'Use the change in temperature, not the final value.',
      level: 4,
    },
    {
      id: 'ht-3',
      ask: 'Which cannot happen in a solid?',
      kind: 'choice',
      options: ['Convection', 'Conduction', 'Radiation'],
      answer: 'Convection',
      teach: 'It needs the material itself to move, '
        + 'and in a solid the particles cannot travel.',
      level: 5,
    },
    {
      id: 'ht-4',
      ask: 'The beach sand is hotter than the sea in the afternoon '
        + 'because water has a higher:',
      kind: 'choice',
      options: [
        'Specific heat capacity',
        'Temperature',
        'Density',
      ],
      answer: 'Specific heat capacity',
      teach: 'The same sunshine raises the sand’s temperature far more, '
        + 'because sand takes less energy a degree.',
      level: 5,
    },
    {
      id: 'ht-5',
      ask: 'A flask is silvered because the vacuum cannot stop:',
      kind: 'choice',
      options: ['Radiation', 'Conduction', 'Convection'],
      answer: 'Radiation',
      teach: 'Radiation needs no material, '
        + 'so it crosses the vacuum and must be reflected instead.',
      level: 6,
    },
  ],
})

/* ── waves, light and sound ─────────────────────────────────────────── */

teach({
  topicId: 'waves-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A wave carries energy without carrying matter. '
      + 'Speed equals frequency times wavelength. '
      + 'Reflection sends a wave back, '
      + 'with the angle of reflection equal to the angle of incidence. '
      + 'Refraction bends a wave as it changes speed '
      + 'on entering a new material. '
      + 'The electromagnetic spectrum is one family, '
      + 'from radio waves to gamma rays, '
      + 'differing only in wavelength and frequency.',
    method: [
      'Write v equals f times the wavelength and check the units.',
      'For reflection, measure both angles from the normal.',
      'For refraction, decide first whether the wave speeds up or slows down.',
    ],
  },

  idea:
    'A wave is a travelling disturbance '
    + 'that carries energy from place to place '
    + 'without moving matter along with it. '
    + 'In a transverse wave '
    + 'the particles move at right angles to the direction of travel, '
    + 'as in light and in a wave on a rope. '
    + 'In a longitudinal wave '
    + 'they move along the direction of travel, '
    + 'as in sound. '
    + 'Amplitude is the greatest displacement from the rest position, '
    + 'and it decides loudness in sound and brightness in light. '
    + 'Wavelength is the distance from one crest to the next. '
    + 'Frequency is the number of waves passing a point each second, '
    + 'measured in hertz, '
    + 'and it decides pitch in sound and colour in light. '
    + 'The wave equation is '
    + 'speed equals frequency times wavelength. '
    + 'Reflection is the return of a wave from a surface, '
    + 'and the angle of incidence equals the angle of reflection, '
    + 'both measured from the normal, '
    + 'which is the line at right angles to the surface. '
    + 'Refraction is the change of direction '
    + 'when a wave enters a material where its speed differs. '
    + 'Light slows on entering glass or water and bends towards the '
    + 'normal, '
    + 'and speeds up and bends away on leaving. '
    + 'The electromagnetic spectrum runs from radio waves, '
    + 'through microwaves, infrared, visible light, ultraviolet '
    + 'and x rays, to gamma rays, '
    + 'all travelling at the same speed in a vacuum.',

  mechanism:
    'Three mechanisms carry this topic. '
    + 'The first is the wave equation, '
    + 'and the point to grasp is which quantity is fixed. '
    + 'When a wave passes into a new material, '
    + 'its frequency does not change. '
    + 'It cannot: '
    + 'the waves arriving at the boundary each second '
    + 'must equal the waves leaving it each second, '
    + 'or they would pile up. '
    + 'What changes is the speed, '
    + 'and therefore the wavelength must change with it. '
    + 'So light entering water slows down, '
    + 'and since v equals f times the wavelength '
    + 'and f is fixed, '
    + 'the wavelength shortens. '
    + 'That is why refraction happens at all, '
    + 'and it is a better answer than saying light bends in water. '
    + 'The second is why refraction bends the wave, '
    + 'and the clearest way to see it '
    + 'is to think of the wavefront as a line '
    + 'arriving at the boundary at an angle. '
    + 'One end of that line reaches the slower material first '
    + 'and is held back, '
    + 'while the other end is still travelling fast. '
    + 'So the line swings round, '
    + 'exactly as a column of soldiers wheels '
    + 'when those on one side take shorter steps. '
    + 'Hence the rule: '
    + 'entering a slower material, the wave bends towards the normal; '
    + 'entering a faster one, it bends away. '
    + 'Deciding which of those applies '
    + 'before touching any angle '
    + 'is what prevents the commonest error in the topic, '
    + 'which is bending the ray the wrong way '
    + 'and then calculating correctly. '
    + 'The practical consequences are worth naming '
    + 'because the paper asks for them. '
    + 'A coin in a bucket of water looks nearer the surface '
    + 'than it is, '
    + 'because the light from it bends away from the normal '
    + 'as it leaves the water '
    + 'and the eye traces it back along a straighter line. '
    + 'A stick in water looks bent at the surface for the same reason. '
    + 'And a fisherman spearing a fish must aim lower than it looks, '
    + 'which is a real skill resting on this physics. '
    + 'The third mechanism is the unity of the electromagnetic spectrum, '
    + 'and it is the idea that makes the list worth learning. '
    + 'Radio waves and gamma rays are not different kinds of thing. '
    + 'They are the same kind of wave '
    + 'differing only in wavelength, '
    + 'and therefore in frequency, '
    + 'and therefore in the energy each wave carries. '
    + 'They all travel at the same speed in a vacuum, '
    + 'about 300 million metres a second. '
    + 'From that single fact '
    + 'everything about their uses and dangers follows. '
    + 'The long wavelength end carries little energy '
    + 'and is used for carrying signals: '
    + 'radio for broadcasting, '
    + 'microwaves for telephones and for heating water in food. '
    + 'The short wavelength end carries a great deal of energy '
    + 'in each wave, '
    + 'enough to damage the molecules of a cell, '
    + 'which is why ultraviolet causes skin damage, '
    + 'why x rays are used sparingly and behind a shield, '
    + 'and why gamma rays can sterilise equipment '
    + 'by killing everything living on it. '
    + 'So the order of the spectrum is also an order of danger, '
    + 'and a learner who gives the order '
    + 'can predict the hazard of a band '
    + 'without having been told it. '
    + 'One more point, '
    + 'because learners ask: '
    + 'sound is not part of this family. '
    + 'Sound is a longitudinal wave in matter, '
    + 'it travels at about 340 metres a second in air, '
    + 'far slower, '
    + 'and it cannot cross a vacuum at all. '
    + 'That difference is why you see lightning before you hear thunder, '
    + 'and the delay, '
    + 'about three seconds for each kilometre, '
    + 'lets you work out how far away the storm is.',

  recap:
    'You have seen waves on water, '
    + 'heard echoes, '
    + 'and watched a stick appear to bend where it enters water. '
    + 'This gives those an equation, '
    + 'and explains the bending by what happens to the speed.',

  method: [
    'For a calculation, write v equals f times the wavelength.',
    'Keep metres and hertz, and convert before substituting.',
    'Remember that frequency does not change between materials; the speed and wavelength do.',
    'For reflection, draw the normal and measure both angles from it.',
    'For refraction, decide first whether the wave speeds up or slows down.',
    'Slower means bending towards the normal; faster means away from it.',
    'For a spectrum question, give the order and read the hazard from it.',
    'Keep sound separate: it is a wave in matter and cannot cross a vacuum.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A wave has a frequency of 50 hertz '
        + 'and a wavelength of 4 metres. Find its speed.',
      steps: [
        'Speed equals frequency times wavelength.',
        '50 times 4.',
      ],
      answer: '200 metres a second.',
    },
    {
      level: 4,
      ask: 'Light slows down on entering water. '
        + 'What happens to its frequency and its wavelength, and why?',
      steps: [
        'The waves arriving each second must equal those leaving.',
        'So the frequency cannot change.',
        'Speed equals frequency times wavelength.',
        'If the speed falls and the frequency is fixed, '
          + 'the wavelength must fall.',
      ],
      answer: 'The frequency stays the same '
        + 'and the wavelength shortens. '
        + 'The frequency cannot change '
        + 'because the waves would otherwise pile up at the boundary, '
        + 'so the wavelength has to take the change instead.',
    },
    {
      level: 5,
      ask: 'Why does a coin at the bottom of a bucket of water '
        + 'look nearer the surface than it is?',
      steps: [
        'Light from the coin leaves the water into air.',
        'It speeds up, so it bends away from the normal.',
        'The eye cannot know it was bent.',
        'It traces the light back in a straight line.',
      ],
      answer: 'Because the light bends away from the normal '
        + 'as it leaves the water, '
        + 'and the eye traces it back along a straight line '
        + 'that meets the bottom higher up than the coin really is. '
        + 'The same effect makes a stick look bent, '
        + 'and it is why a fisherman spearing a fish '
        + 'must aim lower than it appears.',
    },
    {
      level: 6,
      ask: 'Give the electromagnetic spectrum in order of wavelength, '
        + 'and explain from that order why x rays are dangerous '
        + 'and radio waves are not.',
      steps: [
        'From longest to shortest: radio, microwave, infrared, '
          + 'visible, ultraviolet, x ray, gamma.',
        'All travel at the same speed in a vacuum.',
        'Shorter wavelength means higher frequency.',
        'Higher frequency means more energy in each wave.',
        'Enough energy damages the molecules of a cell.',
      ],
      answer: 'Radio, microwave, infrared, visible light, ultraviolet, '
        + 'x rays, gamma rays. '
        + 'They are one family differing only in wavelength, '
        + 'and the shorter the wavelength the higher the frequency '
        + 'and the more energy each wave carries. '
        + 'An x ray carries enough to damage the molecules in a cell, '
        + 'and a radio wave does not come near it, '
        + 'so the order of the spectrum is also the order of the hazard.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the frequency changes when a wave enters water.',
      why: 'It cannot, or the waves would pile up at the boundary. '
        + 'The speed and the wavelength change instead.',
    },
    {
      mistake: 'Measuring the angles from the surface.',
      why: 'Both angles are measured from the normal, '
        + 'the line at right angles to the surface.',
    },
    {
      mistake: 'Bending the ray the wrong way in refraction.',
      why: 'Decide first whether the wave speeds up or slows down. '
        + 'Slower bends towards the normal; faster bends away.',
    },
    {
      mistake: 'Putting sound in the electromagnetic spectrum.',
      why: 'Sound is a wave in matter, far slower, '
        + 'and it cannot cross a vacuum at all.',
    },
  ],

  extension:
    'An echo lets you measure a distance with nothing but a stopwatch, '
    + 'and it is the same arithmetic as the ultrasonic sensor. '
    + 'Clap once facing a wall a long way off '
    + 'and time the echo. '
    + 'If it takes 0.6 seconds '
    + 'then the sound travelled 340 times 0.6, '
    + 'which is 204 metres, '
    + 'and the wall is half of that away, 102 metres. '
    + 'The halving is the step to remember, '
    + 'because the sound went there and came back. '
    + 'The same method, '
    + 'with the delay between a flash of lightning and its thunder, '
    + 'gives the distance of a storm: '
    + 'about one kilometre for every three seconds, '
    + 'since light arrives effectively at once '
    + 'and the sound takes the time.',

  figure: {
    alt: 'Three drawings. The first shows a transverse wave on a rope '
      + 'with the wavelength marked from one crest to the next and the '
      + 'amplitude marked from the rest line to a crest, with a note '
      + 'that speed equals frequency times wavelength. The second shows '
      + 'refraction: a ray entering a block of glass at an angle, with '
      + 'the normal drawn as a dashed line at right angles to the '
      + 'surface, the angle of incidence and the angle of refraction '
      + 'both marked from the normal, and the ray bending towards the '
      + 'normal on entering and away from it on leaving. Beside it the '
      + 'wavefronts are drawn as a line of parallel bars reaching the '
      + 'boundary at an angle, with the bars closer together inside the '
      + 'glass and a note that one end of each front is held back first, '
      + 'which swings the line round. The third drawing lays the '
      + 'electromagnetic spectrum out as a bar from radio at the left '
      + 'through microwave, infrared, visible, ultraviolet and x ray to '
      + 'gamma at the right, with wavelength falling and frequency and '
      + 'energy rising along it, and a note that the order of the '
      + 'spectrum is also the order of the hazard.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* transverse wave */
      + '<path d="M30 90h250" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" fill="none"/>'
      + '<path d="M30 90C50 40 70 40 90 90C110 140 130 140 150 90C170 40 190 40 210 90C230 140 250 140 270 90" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M70 50v-16"/><path d="M190 50v-16"/><path d="M70 42h120"/>'
      + '<path d="M250 90v26"/><path d="M250 128v-12"/>'
      + '</g>'
      + '<text x="104" y="36" font-size="9" fill="currentColor">wavelength</text>'
      + '<path d="M276 90v-36" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="282" y="72" font-size="9" fill="currentColor">amplitude</text>'
      + '<text x="30" y="150" font-size="10" fill="#0f8a4d">speed = frequency times wavelength</text>'
      + '<text x="30" y="166" font-size="9" fill="currentColor">amplitude decides loudness or brightness; frequency decides pitch or colour</text>'
      /* refraction */
      + '<rect x="400" y="60" width="180" height="80" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.08"/>'
      + '<path d="M440 20v160" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<path d="M380 24L440 60" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M440 60L480 140" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M480 140L540 180" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M440 44a22 22 0 0 0 -14 6" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="400" y="48" font-size="8" fill="currentColor">i</text>'
      + '<path d="M440 82a22 22 0 0 0 10 10" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="448" y="84" font-size="8" fill="currentColor">r</text>'
      + '<text x="446" y="30" font-size="8" fill="currentColor">the normal</text>'
      + '<text x="490" y="78" font-size="9" fill="currentColor">slower in the glass:</text>'
      + '<text x="490" y="90" font-size="9" fill="#0f8a4d">bends towards the normal</text>'
      + '<text x="490" y="158" font-size="9" fill="currentColor">faster in the air again:</text>'
      + '<text x="490" y="170" font-size="9" fill="#0f8a4d">bends away from it</text>'
      /* wavefronts */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M300 220l30 -22"/><path d="M318 236l30 -22"/><path d="M336 252l30 -22"/>'
      + '</g>'
      + '<path d="M290 262h200" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M354 268l22 -10"/><path d="M366 282l22 -10"/><path d="M378 296l22 -10"/><path d="M390 310l22 -10"/>'
      + '</g>'
      + '<text x="290" y="208" font-size="9" fill="currentColor">wavefronts arriving at an angle</text>'
      + '<text x="414" y="288" font-size="9" fill="#0f8a4d">closer together, and swung round</text>'
      + '<text x="290" y="332" font-size="9" fill="currentColor">one end of each front reaches the slower material first and is held back,</text>'
      + '<text x="290" y="344" font-size="9" fill="currentColor">like a column of soldiers wheeling when one side takes shorter steps</text>'
      /* spectrum */
      + '<rect x="30" y="366" width="560" height="26" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M110 366v26"/><path d="M190 366v26"/><path d="M270 366v26"/>'
      + '<path d="M350 366v26"/><path d="M430 366v26"/><path d="M510 366v26"/>'
      + '</g>'
      + '<text x="44" y="384" font-size="8" fill="currentColor">radio</text>'
      + '<text x="116" y="384" font-size="8" fill="currentColor">microwave</text>'
      + '<text x="200" y="384" font-size="8" fill="currentColor">infrared</text>'
      + '<text x="284" y="384" font-size="8" fill="currentColor">visible</text>'
      + '<text x="356" y="384" font-size="8" fill="currentColor">ultraviolet</text>'
      + '<text x="448" y="384" font-size="8" fill="currentColor">x ray</text>'
      + '<text x="528" y="384" font-size="8" fill="currentColor">gamma</text>'
      + '<text x="30" y="360" font-size="9" fill="currentColor">wavelength falls, and frequency and energy rise, along this bar</text>'
      + '<text x="30" y="410" font-size="10" fill="#0f8a4d">one family at one speed, so the order of the spectrum is also the order of the hazard</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The electromagnetic spectrum, with a use and a hazard for each band',
      columns: ['Band', 'Wavelength', 'A use', 'The hazard'],
      rows: [
        ['Radio', 'Longest, metres to kilometres', 'Broadcasting, telephones', 'Almost none; very little energy a wave'],
        ['Microwave', 'Centimetres', 'Mobile telephones, heating food and water', 'Heating of tissue, at high power'],
        ['Infrared', 'Under a millimetre', 'Heaters, remote controls, night vision', 'Burns'],
        ['Visible light', 'About half a micrometre', 'Seeing; photosynthesis', 'Damage to the eye at high intensity'],
        ['Ultraviolet', 'Shorter still', 'Sterilising, detecting forged notes', 'Skin damage and skin cancer; eye damage'],
        ['X ray', 'Very short', 'Seeing bone and the inside of a body', 'Damage to the molecules of a cell'],
        ['Gamma ray', 'Shortest', 'Sterilising equipment, treating tumours', 'Severe cell damage; shielding needed'],
      ],
      note: 'The hazard column follows from the wavelength column, '
        + 'because shorter wavelength means more energy in each wave. '
        + 'A learner who knows the order can predict the hazard.',
    },
    {
      caption: 'Light against sound, and why the two are not the same kind of wave',
      columns: ['', 'Light', 'Sound'],
      rows: [
        ['Kind of wave', 'Transverse, electromagnetic', 'Longitudinal, in matter'],
        ['Speed in air', 'About 300 million metres a second', 'About 340 metres a second'],
        ['Crosses a vacuum', 'Yes', 'No, at all'],
        ['What decides pitch or colour', 'Frequency', 'Frequency'],
        ['What decides brightness or loudness', 'Amplitude', 'Amplitude'],
      ],
      note: 'The speed row is why you see lightning before you hear '
        + 'thunder, and the delay of about three seconds a kilometre '
        + 'lets you tell how far the storm is.',
    },
  ],

  questions: [
    {
      id: 'wv-1',
      ask: 'A wave of frequency 25 hertz has a wavelength of 8 metres. '
        + 'Give its speed in metres a second.',
      kind: 'numeric',
      options: [],
      answer: '200',
      teach: 'Speed equals frequency times wavelength.',
      level: 3,
    },
    {
      id: 'wv-2',
      ask: 'When light enters water, what does not change?',
      kind: 'choice',
      options: ['Its frequency', 'Its speed', 'Its wavelength'],
      answer: 'Its frequency',
      teach: 'It cannot, or waves would pile up at the boundary. '
        + 'The speed and wavelength change instead.',
      level: 5,
    },
    {
      id: 'wv-3',
      ask: 'A wave entering a slower material bends:',
      kind: 'choice',
      options: [
        'Towards the normal',
        'Away from the normal',
        'Not at all',
      ],
      answer: 'Towards the normal',
      teach: 'Decide whether it speeds up or slows down first, '
        + 'and the direction follows.',
      level: 5,
    },
    {
      id: 'wv-4',
      ask: 'Which band of the spectrum has the shortest wavelength?',
      kind: 'choice',
      options: ['Gamma rays', 'Radio waves', 'Infrared'],
      answer: 'Gamma rays',
      teach: 'And so the highest frequency and the most energy a wave, '
        + 'which is why they are the most hazardous.',
      level: 4,
    },
    {
      id: 'wv-5',
      ask: 'An echo returns in 0.6 seconds, with sound at 340 metres a '
        + 'second. Give the distance to the wall in metres.',
      kind: 'numeric',
      options: [],
      answer: '102',
      teach: '340 times 0.6 is 204 metres there and back, '
        + 'so the wall is 102 metres away. '
        + 'The halving is the step to remember.',
      level: 6,
    },
  ],
})
