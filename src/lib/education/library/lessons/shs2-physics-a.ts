/**
 * Stored lessons for SHS 2 Physics: work and energy, equilibrium, fluids,
 * elasticity, calorimetry and the gas laws.
 *
 * Written at about grade 10, which is inside the SHS expectation of 10 to 12.
 *
 * ── What these six have in common ────────────────────────────────────────
 *
 * Every one of them is a conservation argument. Energy is conserved, so
 * what is lost in height is gained in speed or in heat. Forces and moments
 * balance, so a body stays put. The weight of fluid pushed aside is the
 * upthrust. The heat one body loses the other gains. The product of
 * pressure and volume over temperature stays fixed. In each case the
 * physics is an equation of the form "what went out equals what came in",
 * and the examinable skill is knowing which quantity to track and where it
 * went.
 *
 * ── Apparatus a school may not own ───────────────────────────────────────
 *
 * The calorimetry and elasticity topics are written so the examinable
 * calculation can be learned with a pencil, and the place where a real
 * calorimeter or a real spring is needed is said plainly rather than
 * pretended away.
 *
 * ── Notation ─────────────────────────────────────────────────────────────
 *
 * Mathematics is LaTeX between dollar signs. Captions and `alt` text stay
 * in words, since those are read aloud.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── work, energy and power ─────────────────────────────────────────────── */

teach({
  topicId: 'energy-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Work is force times the distance moved along the force. '
      + 'Energy is the capacity to do work, and it is never destroyed, '
      + 'only moved. '
      + 'So in any problem, write what energy there was at the start, '
      + 'what there is at the end, and account for the difference. '
      + 'With friction present the difference has gone to heat.',
    method: [
      'Choose the start and the end point, and a level for zero height.',
      'Write the total energy at each, then set them equal.',
      'If friction acts, add the work done against it to the end total.',
    ],
  },

  idea:
    'Work is done when a force moves its point of application: '
    + '$$W = Fd\\cos\\theta,$$ '
    + 'where $\\theta$ is the angle between the force and the movement, so '
    + 'a force at right angles to the motion does no work at all. '
    + 'Work is measured in joules. '
    + 'Kinetic energy is the energy of motion, '
    + '$E_k = \\tfrac{1}{2}mv^{2}$, and gravitational potential energy is '
    + 'the energy of position, $E_p = mgh$. '
    + 'The principle of conservation of energy says energy is neither '
    + 'created nor destroyed but only changed from one form to another, so '
    + 'for a body falling freely '
    + '$$mgh = \\tfrac{1}{2}mv^{2}.$$ '
    + 'Power is the rate of doing work, '
    + '$P = \\frac{W}{t} = Fv$, measured in watts. '
    + 'Efficiency is useful output over total input, as a percentage, and '
    + 'is always below 100 per cent in a real machine.',

  tables: [{
    caption: 'Where the energy goes in four everyday situations',
    columns: ['Situation', 'Energy at the start', 'Energy at the end'],
    rows: [
      ['A mango falls from a tree', 'Potential', 'Kinetic, then sound and heat'],
      ['A ball rolls up a slope', 'Kinetic', 'Potential, and heat from friction'],
      ['A trotro brakes to a stop', 'Kinetic', 'Heat in the brake drums'],
      ['Akosombo turbine turns', 'Potential of the water', 'Electrical, and some heat'],
    ],
    note: 'The last column always holds everything the first one held. '
      + 'Heat is the term learners forget, and it is where the lost marks '
      + 'are.',
  }],

  figure: {
    alt: 'A ball on a slope shown at three positions. At the top it is '
      + 'labelled all potential energy, with height h marked from a dashed '
      + 'line along the ground. Halfway down it is labelled half potential '
      + 'and half kinetic. At the bottom it is labelled all kinetic, with '
      + 'speed v marked by an arrow. A bar beside each position shows the '
      + 'same total height of energy split differently, and a note says '
      + 'that with friction a thin slice of each bar becomes heat.',
    svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="60" y1="300" x2="600" y2="300"/>'
      + '<line x1="80" y1="300" x2="400" y2="80"/>'
      + '<circle cx="396" cy="74" r="12" stroke="#0f8a4d"/>'
      + '<circle cx="240" cy="188" r="12" stroke="#0f8a4d"/>'
      + '<circle cx="96" cy="288" r="12" stroke="#0f8a4d"/>'
      + '<line x1="400" y1="80" x2="400" y2="300" '
      + 'stroke-dasharray="4 4" stroke-opacity="0.5"/>'
      + '<text x="412" y="190" font-size="15" fill="currentColor" '
      + 'stroke="none">height h</text>'
      + '<text x="330" y="52" font-size="14" fill="currentColor" '
      + 'stroke="none">all potential</text>'
      + '<text x="188" y="162" font-size="14" fill="currentColor" '
      + 'stroke="none">half and half</text>'
      + '<text x="96" y="332" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">all kinetic</text>'
      + '<path d="M120 288 L176 288" stroke="#b4531a"/>'
      + '<path d="M168 282 L178 288 L168 294" stroke="#b4531a"/>'
      + '<text x="150" y="276" font-size="14" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">v</text>'
      + '<rect x="500" y="70" width="40" height="90" stroke="#1d4ed8"/>'
      + '<rect x="500" y="70" width="40" height="90" fill="#1d4ed8" '
      + 'fill-opacity="0.18" stroke="none"/>'
      + '<rect x="500" y="180" width="40" height="45" stroke="#1d4ed8"/>'
      + '<rect x="500" y="180" width="40" height="45" fill="#1d4ed8" '
      + 'fill-opacity="0.18" stroke="none"/>'
      + '<rect x="500" y="225" width="40" height="45" stroke="#b4531a"/>'
      + '<text x="552" y="120" font-size="13" fill="currentColor" '
      + 'stroke="none">potential</text>'
      + '<text x="552" y="252" font-size="13" fill="currentColor" '
      + 'stroke="none">kinetic</text>'
      + '<text x="500" y="300" font-size="13" fill="currentColor" '
      + 'stroke="none">same total</text>'
      + '<text x="60" y="344" font-size="14" fill="currentColor" '
      + 'stroke="none">'
      + 'with friction, part of the total leaves as heat</text>'
      + '</svg>',
  },

  mechanism:
    'Conservation of energy is the most useful single idea in this syllabus '
    + 'because it skips the middle of a problem. '
    + 'To find how fast a stone is going after falling 20 m you could find '
    + 'the acceleration, the time, and then the speed. '
    + 'Or you can say that the potential energy it had has become kinetic '
    + 'energy, write $mgh = \\tfrac{1}{2}mv^{2}$, cancel the mass, and get '
    + '$v = \\sqrt{2gh}$ in one line. '
    + 'Notice what the cancelling tells you: the mass disappears, so a '
    + 'heavy stone and a light one arrive at the same speed. '
    + 'That is a result, not an accident of the algebra, and it is worth '
    + 'stating when you use it. '
    + 'Three places lose marks, and the first is the word "lost". '
    + 'When a trotro brakes, learners write that the kinetic energy is '
    + 'lost. '
    + 'It is not lost, it is in the brake drums as heat, and they are hot '
    + 'enough to prove it. '
    + 'An examiner asking where the energy went wants the destination '
    + 'named. '
    + 'So the sentence to write is that the kinetic energy is converted to '
    + 'heat in the brakes and to sound, and the word converted is doing the '
    + 'work. '
    + 'The second place is friction in a conservation equation. '
    + 'Without friction, start energy equals end energy. '
    + 'With friction, start energy equals end energy plus the work done '
    + 'against friction, which is $F_{\\text{friction}} \\times d$. '
    + 'Putting that term on the wrong side is the commonest error in the '
    + 'topic, and the way to avoid it is to ask which total must be '
    + 'bigger. '
    + 'The start must be bigger, because some of it has been spent on the '
    + 'way, so the friction term joins the smaller side. '
    + 'The third place is the $\\cos\\theta$ in the work formula. '
    + 'A head porter carrying a load on her head along a level road does '
    + 'no work on the load in the physics sense, because the force she '
    + 'exerts is upward and the movement is horizontal, so '
    + '$\\cos 90^\\circ = 0$. '
    + 'She is certainly tiring, but that energy goes into her muscles, not '
    + 'into the load. '
    + 'This is the clearest case where the physics meaning of a word parts '
    + 'company with the everyday one, and examiners test it most years. '
    + 'One habit ties all of this together. '
    + 'Before calculating, write two short lists: the energy present at the '
    + 'start, and the energy present at the end, heat included. '
    + 'The equation then writes itself, and the lists themselves carry '
    + 'marks.',

  recap:
    'You know that a moving body has kinetic energy and a raised one has '
    + 'potential energy, and that work is force times distance. '
    + 'This makes those into a single accounting rule '
    + 'that solves problems without finding the acceleration.',

  method: [
    'Draw the situation and mark the start and end positions.',
    'Choose a level to measure height from, and say what it is.',
    'List every form of energy at the start.',
    'List every form at the end, including heat if friction acts.',
    'Set the two totals equal.',
    'Add the work done against friction to the smaller side.',
    'Cancel the mass if it appears on both sides, and say that it does.',
    'Substitute, with $g$ as 10 metres per second squared unless told otherwise.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A load of mass 20 kg is lifted 3 m in 6 s. '
        + 'Find the work done and the power. Take $g = 10$.',
      steps: [
        { math: 'W = mgh = 20 \\times 10 \\times 3', why: 'The force needed is the weight, and it acts along the movement.' },
        { math: 'W = 600\\ \\text{J}' },
        { math: 'P = \\frac{W}{t} = \\frac{600}{6}' },
        { math: 'P = 100\\ \\text{W}' },
      ],
      answer: '$600$ J of work, at a power of $100$ W.',
    },
    {
      level: 4,
      ask: 'A stone of mass 2 kg is dropped from a height of 20 m. '
        + 'Find its speed just before it lands. Take $g = 10$.',
      steps: [
        { math: 'mgh = \\tfrac{1}{2}mv^{2}', why: 'All the potential energy has become kinetic energy.' },
        { math: 'gh = \\tfrac{1}{2}v^{2}', why: 'The mass cancels, so the answer does not depend on it. Say this.' },
        { math: 'v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 20}' },
        { math: 'v = 20\\ \\text{m s}^{-1}' },
      ],
      answer: '$20$ m per second. '
        + 'A 5 kg stone dropped from the same height arrives at the same '
        + 'speed.',
    },
    {
      level: 5,
      ask: 'A box of mass 10 kg slides 5 m down a slope, falling 2 m in '
        + 'height, against a constant friction force of 12 N. '
        + 'Find its speed at the bottom. Take $g = 10$.',
      steps: [
        { math: 'E_p = mgh = 10 \\times 10 \\times 2 = 200\\ \\text{J}',
          why: 'The energy available at the start.' },
        { math: 'W_f = F d = 12 \\times 5 = 60\\ \\text{J}',
          why: 'Work against friction, using the distance along the slope, not the height.' },
        { math: '200 = \\tfrac{1}{2}mv^{2} + 60',
          why: 'Start equals end plus what was spent. The start must be the bigger total.' },
        { math: '\\tfrac{1}{2}(10)v^{2} = 140' },
        { math: 'v^{2} = 28,\\quad v = 5.3\\ \\text{m s}^{-1}' },
      ],
      answer: 'About $5.3$ m per second. '
        + 'Without friction it would have been $6.3$ m per second, and the '
        + 'missing 60 J is now heat in the slope and the box.',
    },
    {
      level: 6,
      ask: 'A pump at a Tamale borehole raises 600 kg of water through '
        + '15 m every minute. The motor draws 2.5 kW. '
        + 'Find the useful power output and the efficiency.',
      steps: [
        { math: 'W = mgh = 600 \\times 10 \\times 15' },
        { math: 'W = 90\\,000\\ \\text{J}', why: 'Useful work done on the water each minute.' },
        { math: 'P_{\\text{out}} = \\frac{90\\,000}{60} = 1500\\ \\text{W}',
          why: 'Per second, because a watt is a joule per second.' },
        { math: '\\text{efficiency} = \\frac{1500}{2500} \\times 100' },
        { math: '= 60\\%' },
      ],
      answer: '$1500$ W useful, so the pump is $60$ per cent efficient. '
        + 'The missing $1000$ W leaves as heat in the motor and as noise, '
        + 'which is why the casing is warm to touch.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the energy is lost when a vehicle brakes.',
      why: 'It is converted to heat in the brakes and to sound. '
        + 'An examiner wants the destination named, not the word lost.',
    },
    {
      mistake: 'Putting the friction work on the wrong side.',
      why: 'The starting total must be the bigger one, '
        + 'so the friction term joins the end total.',
    },
    {
      mistake: 'Using the height instead of the distance for friction work.',
      why: 'Friction acts along the surface, so it is the distance along '
        + 'the slope that matters.',
    },
    {
      mistake: 'Saying work is done carrying a load on level ground.',
      why: 'The force is upward and the motion is horizontal, '
        + 'so the angle is ninety degrees and the cosine is zero.',
    },
  ],

  extension:
    'Energy conservation is why a perpetual motion machine cannot exist. '
    + 'Any real machine loses energy to friction at every moving joint, so '
    + 'the output is always smaller than the input, and a machine that '
    + 'fed its own output back would wind down. '
    + 'Every claim of one that has ever been tested has turned out to have '
    + 'a hidden input.',

  questions: [
    {
      id: 'en-1',
      ask: 'The unit of work is the:',
      kind: 'choice',
      options: ['Joule', 'Watt', 'Newton'],
      answer: 'Joule',
      teach: 'The watt is the unit of power, which is work per second.',
      level: 3,
    },
    {
      id: 'en-2',
      ask: 'When a trotro brakes, the kinetic energy becomes:',
      kind: 'choice',
      options: [
        'Heat in the brakes and sound',
        'Nothing, it is destroyed',
        'Potential energy',
      ],
      answer: 'Heat in the brakes and sound',
      teach: 'Energy is never destroyed. '
        + 'Name where it went, because that is what carries the mark.',
      level: 4,
    },
    {
      id: 'en-3',
      ask: 'A body falls 5 m. Find its speed on landing, taking g as 10.',
      kind: 'numeric',
      options: [],
      answer: '10',
      teach: 'Use v as the square root of 2gh. '
        + 'The mass cancels, so it does not appear in the answer.',
      level: 5,
    },
    {
      id: 'en-4',
      ask: 'Carrying a load on your head along a flat road does no work on '
        + 'the load because:',
      kind: 'choice',
      options: [
        'The force is at right angles to the motion',
        'The load is light',
        'The road is smooth',
      ],
      answer: 'The force is at right angles to the motion',
      teach: 'Work is force times distance along the force, '
        + 'and the cosine of ninety degrees is zero.',
      level: 5,
    },
  ],
})

/* ── equilibrium and moments ────────────────────────────────────────────── */

teach({
  topicId: 'equilibrium-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A body at rest obeys two conditions at once. '
      + 'The forces balance in every direction, '
      + 'and the moments about any point balance. '
      + 'The second condition is the useful one, '
      + 'because you may choose the point, '
      + 'and choosing it at an unknown force removes that force from the '
      + 'equation.',
    method: [
      'Draw the body alone, with every force marked at the point it acts.',
      'Take moments about the point where an unknown force acts.',
      'Then use the force balance to find what is left.',
    ],
  },

  idea:
    'The moment of a force about a point is '
    + '$$M = F \\times d,$$ '
    + 'where $d$ is the perpendicular distance from the point to the line '
    + 'of the force, measured in newton metres. '
    + 'A body in equilibrium satisfies two conditions. '
    + 'First, the vector sum of the forces is zero, so the upward forces '
    + 'equal the downward forces and the same holds horizontally. '
    + 'Second, by the principle of moments, the total clockwise moment '
    + 'about any point equals the total anticlockwise moment about that '
    + 'same point. '
    + 'The weight of a uniform body acts at its centre of gravity, which '
    + 'for a uniform rod is its midpoint. '
    + 'Stability depends on the position of the centre of gravity and the '
    + 'width of the base: a low centre of gravity over a wide base is '
    + 'stable, which is why a loaded lorry tips on a bend and an empty one '
    + 'does not.',

  tables: [{
    caption: 'The two conditions for equilibrium and what each one gives you',
    columns: ['Condition', 'In symbols', 'What it is for'],
    rows: [
      ['Forces balance up and down', 'Up equals down',
        'Finding a support force once the other is known'],
      ['Forces balance sideways', 'Left equals right',
        'Problems with a wall, a wire or a push'],
      ['Moments balance', 'Clockwise equals anticlockwise',
        'Finding a distance, or removing an unknown force'],
    ],
    note: 'Both conditions must hold. '
      + 'A body can have balanced forces and still spin, which is what the '
      + 'moment condition rules out.',
  }],

  figure: {
    alt: 'A uniform metre rule resting on two supports, one near each end, '
      + 'labelled R one on the left and R two on the right. The weight of '
      + 'the rule is drawn as a downward arrow at the midpoint, and a load '
      + 'W is drawn as a second downward arrow nearer the right support. '
      + 'Distances are marked from the left support to the midpoint, to '
      + 'the load and to the right support, and a note says that taking '
      + 'moments about the left support removes R one from the equation.',
    svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="60" y="120" width="520" height="16"/>'
      + '<polygon points="110,136 96,172 124,172" stroke="#0f8a4d"/>'
      + '<polygon points="530,136 516,172 544,172" stroke="#0f8a4d"/>'
      + '<path d="M110 118 L110 76" stroke="#0f8a4d"/>'
      + '<path d="M104 86 L110 72 L116 86" stroke="#0f8a4d"/>'
      + '<text x="110" y="62" font-size="15" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">R1</text>'
      + '<path d="M530 118 L530 76" stroke="#0f8a4d"/>'
      + '<path d="M524 86 L530 72 L536 86" stroke="#0f8a4d"/>'
      + '<text x="530" y="62" font-size="15" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">R2</text>'
      + '<path d="M320 138 L320 200" stroke="#b4531a"/>'
      + '<path d="M314 190 L320 204 L326 190" stroke="#b4531a"/>'
      + '<text x="320" y="224" font-size="15" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">weight of rule</text>'
      + '<path d="M450 138 L450 226" stroke="#1d4ed8"/>'
      + '<path d="M444 216 L450 230 L456 216" stroke="#1d4ed8"/>'
      + '<text x="450" y="250" font-size="15" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">load W</text>'
      + '<line x1="110" y1="106" x2="320" y2="106" stroke-opacity="0.5" '
      + 'stroke-dasharray="4 4"/>'
      + '<line x1="110" y1="92" x2="450" y2="92" stroke-opacity="0.5" '
      + 'stroke-dasharray="4 4"/>'
      + '<text x="215" y="100" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">to the midpoint</text>'
      + '<text x="300" y="86" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">to the load</text>'
      + '<text x="60" y="292" font-size="14" fill="currentColor" '
      + 'stroke="none">'
      + 'Take moments about the left support and R1 vanishes,</text>'
      + '<text x="60" y="312" font-size="14" fill="currentColor" '
      + 'stroke="none">'
      + 'because its distance from that point is zero.</text>'
      + '</svg>',
  },

  mechanism:
    'The sentence that turns this topic from guesswork into method is that '
    + 'you choose the point. '
    + 'The principle of moments holds about any point at all, so you may '
    + 'pick the one that makes your life easiest, and the easiest is '
    + 'always the point where an unknown force acts. '
    + 'A force has zero distance from the point it acts through, so its '
    + 'moment there is zero and it drops out of the equation completely. '
    + 'In a beam on two supports with both reactions unknown, taking '
    + 'moments about the left support leaves one unknown instead of two, '
    + 'and the whole problem becomes a single line of arithmetic. '
    + 'Then the force balance gives the other reaction. '
    + 'That order, moments first about an unknown and the force balance '
    + 'second, solves almost every equilibrium question in the syllabus. '
    + 'Two errors do most of the damage. '
    + 'The first is using the wrong distance. '
    + 'The moment needs the perpendicular distance from the pivot to the '
    + 'line of the force, not the length of the rod. '
    + 'When a force is at an angle this matters: a 50 N force at '
    + '$30^\\circ$ to a 2 m rod has a moment of '
    + '$50 \\times 2 \\times \\sin 30^\\circ = 50$ N m, not 100 N m. '
    + 'The habit is to draw the line of the force extended, and then drop '
    + 'a perpendicular onto it from the pivot. '
    + 'The second is forgetting the weight of the rod itself. '
    + 'A question that says uniform is telling you that the rod has weight '
    + 'and that it acts at the midpoint. '
    + 'Leaving it out is the single commonest cause of a wrong answer here, '
    + 'and the word uniform is the clue, placed there deliberately. '
    + 'If the rod is described as light or of negligible mass, then and '
    + 'only then is there no such force. '
    + 'One more point on what must be written down. '
    + 'The marks in this topic are largely for the free body diagram and '
    + 'for the statement of the principle used. '
    + 'Draw the body on its own, put every force on it as an arrow at the '
    + 'place it acts, and write the words "taking moments about" followed '
    + 'by the point you chose. '
    + 'An answer with the right number and no diagram loses most of what '
    + 'was available.',

  recap:
    'You have balanced a seesaw and found that a bigger weight needs a '
    + 'shorter arm. '
    + 'This gives that rule a formula, '
    + 'and adds the second condition that the forces must balance too.',

  method: [
    'Draw the body on its own, away from its supports.',
    'Mark every force as an arrow at the exact point it acts.',
    'If the body is uniform, put its weight at the midpoint.',
    'Choose a pivot at the point where an unknown force acts.',
    'Write "taking moments about" and name that point.',
    'Set the clockwise total equal to the anticlockwise total.',
    'For an angled force, use the perpendicular distance.',
    'Use the force balance, up equals down, to find the last unknown.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A light rod 4 m long balances on a pivot at its centre. '
        + 'A 30 N weight hangs 1.5 m from the pivot on the left. '
        + 'What weight 1 m from the pivot on the right balances it?',
      steps: [
        { math: '\\text{anticlockwise} = 30 \\times 1.5 = 45\\ \\text{N m}' },
        { math: '\\text{clockwise} = W \\times 1' },
        { math: 'W \\times 1 = 45', why: 'Principle of moments about the pivot.' },
        { math: 'W = 45\\ \\text{N}' },
      ],
      answer: '$45$ N. '
        + 'The rod is light, so it has no weight of its own to include.',
    },
    {
      level: 4,
      ask: 'A uniform metre rule of weight 2 N is pivoted at the 30 cm '
        + 'mark and balanced by a weight $W$ hung at the 10 cm mark. '
        + 'Find $W$.',
      steps: [
        { math: '\\text{weight acts at } 50\\ \\text{cm}',
          why: 'Uniform means its weight acts at the midpoint. This is the force most often forgotten.' },
        { math: '\\text{clockwise} = 2 \\times 0.20 = 0.4\\ \\text{N m}',
          why: 'From the pivot at 30 cm to the midpoint is 20 cm.' },
        { math: '\\text{anticlockwise} = W \\times 0.20',
          why: 'From the pivot at 30 cm to the 10 cm mark is also 20 cm.' },
        { math: 'W = 2\\ \\text{N}' },
      ],
      answer: '$W = 2$ N. '
        + 'The distances happen to be equal here, so the two weights are '
        + 'equal.',
    },
    {
      level: 5,
      ask: 'A uniform plank of weight 200 N and length 6 m rests on '
        + 'supports at each end. A man of weight 700 N stands 2 m from the '
        + 'left end. Find both support forces.',
      steps: [
        { math: '\\text{moments about the left support}',
          why: 'Chosen so that the left reaction, being at zero distance, drops out.' },
        { math: 'R_2 \\times 6 = (200 \\times 3) + (700 \\times 2)',
          why: 'The plank weight at the midpoint, 3 m along; the man 2 m along.' },
        { math: 'R_2 \\times 6 = 600 + 1400 = 2000' },
        { math: 'R_2 = 333\\ \\text{N}' },
        { math: 'R_1 + R_2 = 200 + 700 = 900', why: 'Now the force balance: up equals down.' },
        { math: 'R_1 = 567\\ \\text{N}' },
      ],
      answer: '$R_1 = 567$ N and $R_2 = 333$ N. '
        + 'The left support carries more, as it should, because the man '
        + 'stands nearer to it.',
    },
    {
      level: 6,
      ask: 'A uniform ladder of weight 300 N leans against a smooth wall '
        + 'at $60^\\circ$ to the ground, its foot 2 m from the wall. '
        + 'Find the force the wall exerts on it.',
      steps: [
        { math: '\\text{wall is smooth, so its force is horizontal}',
          why: 'A smooth surface exerts no friction, only a normal force. This is what the word smooth is for.' },
        { math: '\\text{length} = \\frac{2}{\\cos 60^\\circ} = 4\\ \\text{m}' },
        { math: '\\text{height reached} = 4\\sin 60^\\circ = 3.46\\ \\text{m}' },
        { math: '\\text{moments about the foot}',
          why: 'Both the ground reaction and the friction act there, so both drop out.' },
        { math: 'F \\times 3.46 = 300 \\times 1',
          why: 'The ladder weight acts at the midpoint, which is 1 m horizontally from the foot.' },
        { math: 'F = 86.7\\ \\text{N}' },
      ],
      answer: 'About $87$ N, horizontally. '
        + 'Taking moments about the foot removed two unknown forces at '
        + 'once, which is why that point was chosen.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving out the weight of a uniform rod.',
      why: 'The word uniform is placed there to tell you it has weight, '
        + 'acting at the midpoint. '
        + 'Only a light rod has none.',
    },
    {
      mistake: 'Using the length of the rod as the distance for an angled force.',
      why: 'A moment needs the perpendicular distance to the line of the '
        + 'force. '
        + 'For a force at an angle that means multiplying by the sine.',
    },
    {
      mistake: 'Choosing a pivot with no unknown force on it.',
      why: 'You may choose any point, so choose the one that cancels an '
        + 'unknown. '
        + 'Any other choice leaves you more algebra.',
    },
    {
      mistake: 'Using only the moment condition.',
      why: 'Equilibrium needs the forces to balance as well. '
        + 'The second support force usually comes from that condition.',
    },
  ],

  extension:
    'A couple is two equal and opposite forces whose lines do not pass '
    + 'through the same point. '
    + 'Its forces balance, so it cannot move a body along, but its moments '
    + 'do not, so it turns the body. '
    + 'That is exactly what a steering wheel and a screwdriver apply, and '
    + 'it is the clearest case of why the two conditions for equilibrium '
    + 'are genuinely separate.',

  questions: [
    {
      id: 'eq-1',
      ask: 'The moment of a force is force multiplied by:',
      kind: 'choice',
      options: [
        'The perpendicular distance to the pivot',
        'The length of the rod',
        'The weight of the rod',
      ],
      answer: 'The perpendicular distance to the pivot',
      teach: 'Perpendicular to the line of the force. '
        + 'For an angled force that is not the rod length.',
      level: 3,
    },
    {
      id: 'eq-2',
      ask: 'The weight of a uniform rod acts at:',
      kind: 'choice',
      options: ['Its midpoint', 'The pivot', 'The heavier end'],
      answer: 'Its midpoint',
      teach: 'That is what uniform means. '
        + 'Forgetting this force is the commonest error in the topic.',
      level: 3,
    },
    {
      id: 'eq-3',
      ask: 'Why take moments about a point where an unknown force acts?',
      kind: 'choice',
      options: [
        'Its distance is zero, so it drops out',
        'It makes the moment larger',
        'The principle only works there',
      ],
      answer: 'Its distance is zero, so it drops out',
      teach: 'The principle holds about any point, so choose the one that '
        + 'removes an unknown.',
      level: 5,
    },
    {
      id: 'eq-4',
      ask: 'A 20 N weight is 0.5 m from a pivot. Find its moment in newton '
        + 'metres.',
      kind: 'numeric',
      options: [],
      answer: '10',
      teach: 'Force times perpendicular distance.',
      level: 3,
    },
  ],
})

/* ── pressure and fluids ────────────────────────────────────────────────── */

teach({
  topicId: 'fluids-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Pressure is force spread over area, so the same force gives more '
      + 'pressure on a smaller area. '
      + 'In a liquid the pressure at a depth is $\\rho g h$, '
      + 'which depends on the depth and not on the shape of the container. '
      + 'A body in a fluid is pushed up by the weight of the fluid it '
      + 'displaces, and that is the whole of flotation.',
    method: [
      'For pressure in a liquid use $P = \\rho g h$, with $h$ as the depth.',
      'For upthrust, find the weight of the fluid displaced.',
      'A body floats when the upthrust equals its own weight.',
    ],
  },

  idea:
    'Pressure is force per unit area, '
    + '$$P = \\frac{F}{A},$$ '
    + 'measured in pascals, where one pascal is one newton per square '
    + 'metre. '
    + 'In a liquid, the pressure due to the liquid at a depth $h$ is '
    + '$$P = \\rho g h,$$ '
    + 'where $\\rho$ is the density. '
    + 'It depends on the depth, the density and $g$ alone, so it is the '
    + 'same at every point on one horizontal level and is unaffected by '
    + 'the shape or width of the vessel. '
    + 'Pressure in a fluid acts equally in all directions. '
    + 'Atmospheric pressure is about $1.0 \\times 10^{5}$ Pa at sea level '
    + 'and is measured with a barometer. '
    + 'Archimedes’ principle says that a body wholly or partly '
    + 'immersed in a fluid experiences an upthrust equal to the weight of '
    + 'the fluid it displaces. '
    + 'The law of flotation follows: a floating body displaces its own '
    + 'weight of fluid.',

  tables: [{
    caption: 'Why the same force gives very different pressures',
    columns: ['Situation', 'Area it acts over', 'Effect'],
    rows: [
      ['A sharp knife', 'Very small', 'High pressure, so it cuts'],
      ['A blunt knife', 'Larger', 'Low pressure, so it does not'],
      ['A lorry with wide tyres', 'Large', 'Low pressure, so it does not sink in sand'],
      ['A woman in narrow heels', 'Tiny', 'High pressure, so she marks soft ground'],
      ['A tractor on a ploughed field', 'Large', 'Low pressure, so the soil is not crushed'],
    ],
    note: 'The weight is unchanged in each pair. '
      + 'Only the area has changed, which is the whole point of the '
      + 'formula.',
  }],

  figure: {
    alt: 'A tall vessel of water with three outlets at different depths. '
      + 'The jet from the lowest outlet travels furthest, the middle one '
      + 'less far, and the top one least, showing that pressure grows with '
      + 'depth. Beside it a block floats partly submerged, with a downward '
      + 'arrow for its weight and an equal upward arrow for the upthrust, '
      + 'and the submerged part is shaded to show the water pushed aside.',
    svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="60" y="60" width="110" height="250"/>'
      + '<line x1="60" y1="90" x2="170" y2="90" stroke="#1d4ed8"/>'
      + '<rect x="60" y="90" width="110" height="220" fill="#1d4ed8" '
      + 'fill-opacity="0.12" stroke="none"/>'
      + '<path d="M170 140 Q 210 148, 230 186" stroke="#1d4ed8"/>'
      + '<path d="M170 210 Q 240 218, 280 266" stroke="#1d4ed8"/>'
      + '<path d="M170 280 Q 270 288, 340 310" stroke="#1d4ed8"/>'
      + '<text x="196" y="120" font-size="14" fill="currentColor" '
      + 'stroke="none">shallow: short jet</text>'
      + '<text x="286" y="238" font-size="14" fill="currentColor" '
      + 'stroke="none">deepest: longest jet</text>'
      + '<text x="60" y="340" font-size="14" fill="currentColor" '
      + 'stroke="none">pressure grows with depth</text>'
      + '<rect x="400" y="150" width="200" height="160"/>'
      + '<line x1="400" y1="190" x2="600" y2="190" stroke="#1d4ed8"/>'
      + '<rect x="400" y="190" width="200" height="120" fill="#1d4ed8" '
      + 'fill-opacity="0.12" stroke="none"/>'
      + '<rect x="450" y="162" width="100" height="56" stroke="#b4531a"/>'
      + '<rect x="450" y="190" width="100" height="28" fill="#b4531a" '
      + 'fill-opacity="0.25" stroke="none"/>'
      + '<path d="M500 218 L500 268" stroke="#b4531a"/>'
      + '<path d="M494 258 L500 272 L506 258" stroke="#b4531a"/>'
      + '<text x="508" y="256" font-size="13" fill="#b4531a" '
      + 'stroke="none">weight</text>'
      + '<path d="M470 162 L470 112" stroke="#0f8a4d"/>'
      + '<path d="M464 122 L470 108 L476 122" stroke="#0f8a4d"/>'
      + '<text x="398" y="110" font-size="13" fill="#0f8a4d" '
      + 'stroke="none">upthrust</text>'
      + '<text x="400" y="340" font-size="14" fill="currentColor" '
      + 'stroke="none">'
      + 'the shaded part is the water pushed aside</text>'
      + '</svg>',
  },

  mechanism:
    'Two ideas in this topic look like formulae to memorise and are '
    + 'actually statements about where something went. '
    + 'The first is that liquid pressure depends on depth and nothing else. '
    + 'Learners expect a wide tank to have more pressure at the bottom '
    + 'than a narrow one, because it holds more water. '
    + 'It does not. '
    + 'The reason is in the derivation: the weight of the column above an '
    + 'area is $\\rho A h g$, and dividing by that same area $A$ to get '
    + 'pressure cancels it, leaving $\\rho g h$. '
    + 'The extra water in a wide tank sits above extra area, so it changes '
    + 'nothing. '
    + 'That is why a dam wall is built thick at the bottom and thin at the '
    + 'top, and why the length of the lake behind it does not matter. '
    + 'The second is upthrust. '
    + 'A body pushed into water has to move water out of the way, and that '
    + 'water used to be held up by the water around it. '
    + 'The surrounding water keeps pushing with the same force, which is '
    + 'now acting on the body instead. '
    + 'So the upthrust is exactly the weight of the fluid displaced, which '
    + 'is Archimedes’ principle, and it is a consequence of the depth '
    + 'rule rather than a separate law: the bottom of the body is deeper '
    + 'than the top, so the upward push on it is greater than the downward '
    + 'push on top. '
    + 'From there, flotation needs no new idea. '
    + 'Push the body further in and it displaces more, so the upthrust '
    + 'grows, until it equals the weight and the body stops sinking. '
    + 'That is where it floats. '
    + 'If the body cannot displace its own weight even when fully under, '
    + 'it sinks, which is why a steel nail sinks and a steel ship does '
    + 'not: the ship is mostly air and displaces an enormous volume. '
    + 'Two calculation traps. '
    + 'The first is using the height of the container rather than the '
    + 'depth below the surface. '
    + 'Depth is measured downwards from the free surface to the point in '
    + 'question. '
    + 'The second is forgetting that the apparent weight of a submerged '
    + 'body is its real weight minus the upthrust, so a spring balance '
    + 'reading in water is less than in air, and the difference is the '
    + 'upthrust. '
    + 'That difference is the standard way an examination asks you to find '
    + 'a volume or a density, and it needs no apparatus beyond a spring '
    + 'balance and a beaker of water, which most schools have.',

  recap:
    'You know that a drawing pin goes into wood more easily than a nail '
    + 'head, and that water comes out of a tap at the bottom of a tank '
    + 'with more force. '
    + 'This puts numbers on both, and explains why a ship of steel floats.',

  method: [
    'Write down the area in square metres and the force in newtons.',
    'For a liquid, measure the depth down from the free surface.',
    'Use $P = \\rho g h$ for the pressure due to the liquid alone.',
    'Add atmospheric pressure if the question asks for the total.',
    'For upthrust, find the volume of fluid displaced.',
    'Multiply that volume by the fluid density and by $g$.',
    'Apparent weight is real weight minus upthrust.',
    'For a floating body, set the upthrust equal to the weight.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A box of weight 600 N stands on a base of area 0.5 m squared. '
        + 'Find the pressure on the floor.',
      steps: [
        { math: 'P = \\frac{F}{A} = \\frac{600}{0.5}' },
        { math: 'P = 1200\\ \\text{Pa}' },
      ],
      answer: '$1200$ Pa. '
        + 'Stood on a base of half that area it would exert twice the '
        + 'pressure, with no change in weight.',
    },
    {
      level: 4,
      ask: 'Find the pressure due to the water at the bottom of a tank '
        + '2.5 m deep. Take the density of water as 1000 kg per cubic '
        + 'metre and $g = 10$.',
      steps: [
        { math: 'P = \\rho g h' },
        { math: 'P = 1000 \\times 10 \\times 2.5' },
        { math: 'P = 25\\,000\\ \\text{Pa}' },
      ],
      answer: '$25\\,000$ Pa. '
        + 'A wider tank of the same depth gives exactly the same answer, '
        + 'because the area cancels in the derivation.',
    },
    {
      level: 5,
      ask: 'A stone weighs 5.0 N in air and 3.2 N when fully immersed in '
        + 'water. Find the upthrust and the volume of the stone. '
        + 'Take $g = 10$.',
      steps: [
        { math: 'U = 5.0 - 3.2 = 1.8\\ \\text{N}',
          why: 'The apparent loss in weight IS the upthrust.' },
        { math: 'U = \\rho V g', why: 'By Archimedes, the upthrust is the weight of water displaced.' },
        { math: '1.8 = 1000 \\times V \\times 10' },
        { math: 'V = 1.8 \\times 10^{-4}\\ \\text{m}^{3}' },
      ],
      answer: 'Upthrust $1.8$ N and volume $1.8 \\times 10^{-4}$ cubic '
        + 'metres, which is 180 cubic centimetres. '
        + 'This needs only a spring balance and a beaker, so it can be '
        + 'done in any school.',
    },
    {
      level: 6,
      ask: 'A wooden block of volume 0.02 cubic metres and density 600 kg '
        + 'per cubic metre floats in water. '
        + 'What fraction of it is below the surface, and why?',
      steps: [
        { math: 'W = \\rho_{w} V g = 600 \\times 0.02 \\times 10 = 120\\ \\text{N}',
          why: 'The weight of the block.' },
        { math: 'U = 120\\ \\text{N}', why: 'A floating body displaces its own weight of fluid, so the upthrust equals the weight.' },
        { math: '120 = 1000 \\times V_{\\text{sub}} \\times 10' },
        { math: 'V_{\\text{sub}} = 0.012\\ \\text{m}^{3}' },
        { math: '\\frac{0.012}{0.02} = 0.6' },
      ],
      answer: 'Six tenths of it is submerged, which is the ratio of the '
        + 'two densities, $\\frac{600}{1000}$. '
        + 'That is a general result: the fraction submerged is the density '
        + 'of the body over the density of the fluid, which is why ice '
        + 'floats with most of itself hidden.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a wider tank gives more pressure at the bottom.',
      why: 'The extra weight sits above extra area, and the area cancels. '
        + 'Only the depth, the density and $g$ matter.',
    },
    {
      mistake: 'Measuring depth from the bottom of the vessel.',
      why: 'Depth is measured downwards from the free surface to the '
        + 'point in question.',
    },
    {
      mistake: 'Giving the apparent weight as the upthrust.',
      why: 'The upthrust is the loss in weight, '
        + 'so it is the air reading minus the water reading.',
    },
    {
      mistake: 'Using the whole volume for a floating body.',
      why: 'Only the submerged part displaces fluid. '
        + 'For a body fully under, the two are the same, which is why the '
        + 'error hides.',
    },
  ],

  extension:
    'A hydrometer uses the law of flotation backwards. '
    + 'It is weighted so that it floats upright, and since it always '
    + 'displaces its own weight, it sinks further in a less dense liquid. '
    + 'The depth it settles to is therefore a reading of density, which is '
    + 'how a battery is tested and how palm wine is checked for dilution.',

  questions: [
    {
      id: 'fl-1',
      ask: 'The unit of pressure is the:',
      kind: 'choice',
      options: ['Pascal', 'Newton', 'Joule'],
      answer: 'Pascal',
      teach: 'One pascal is one newton spread over one square metre.',
      level: 3,
    },
    {
      id: 'fl-2',
      ask: 'Pressure in a liquid depends on:',
      kind: 'choice',
      options: [
        'Depth and density',
        'The width of the container',
        'The total volume of liquid',
      ],
      answer: 'Depth and density',
      teach: 'The area cancels in the derivation, '
        + 'so the shape of the vessel makes no difference.',
      level: 4,
    },
    {
      id: 'fl-3',
      ask: 'A body weighs 8 N in air and 6 N in water. Find the upthrust '
        + 'in newtons.',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'The upthrust is the apparent loss in weight.',
      level: 4,
    },
    {
      id: 'fl-4',
      ask: 'A floating body displaces:',
      kind: 'choice',
      options: [
        'Its own weight of fluid',
        'Its own volume of fluid',
        'Twice its weight of fluid',
      ],
      answer: 'Its own weight of fluid',
      teach: 'That is the law of flotation, '
        + 'and it is why the fraction submerged is the ratio of the '
        + 'densities.',
      level: 5,
    },
  ],
})

/* ── elasticity and surface tension ────────────────────────────────────── */

teach({
  topicId: 'elasticity-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Hooke’s law says extension is proportional to the stretching '
      + 'force, up to the elastic limit and no further. '
      + 'So the graph is a straight line that then bends, '
      + 'and every calculation belongs to the straight part. '
      + 'Surface tension is the pull along a liquid surface '
      + 'caused by molecules attracting one another more than they attract '
      + 'the air.',
    method: [
      'Check the load is below the elastic limit before using the law.',
      'Use $F = ke$, with $e$ as the extension, not the final length.',
      'For surface effects, compare the pull between liquid molecules with the pull on the solid.',
    ],
  },

  idea:
    'Hooke’s law says this. '
    + 'The extension of a spring is in direct proportion to the force '
    + 'that stretches it: '
    + '$$F = ke.$$ '
    + 'Here $k$ is the force constant, in newtons per metre. '
    + 'And $e$ is the extension, which is the new length take away the '
    + 'old one. '
    + 'The law holds up to the elastic limit and no further. '
    + 'Past that limit the spring does not go back to its old length '
    + 'when the load comes off. '
    + 'Past the yield point it stretches a long way for very little '
    + 'extra load. '
    + 'The work done in stretching is '
    + '$W = \\tfrac{1}{2}Fe = \\tfrac{1}{2}ke^{2}$. '
    + 'That is the area under the graph of force against extension. '
    + 'Surface tension is the pull along the top of a liquid, measured '
    + 'as force per unit length. '
    + 'It is there because a molecule at the surface has neighbours '
    + 'beside it and below it, but almost none above. '
    + 'Capillarity is the rise or fall of a liquid in a thin tube. '
    + 'Water climbs the glass and wets it, because water is drawn to '
    + 'glass more than to itself. '
    + 'Mercury pulls away instead, and leaves the glass dry.',

  tables: [{
    caption: 'What happens to a wire as the load on it is increased',
    columns: ['Stage', 'What the graph does', 'What the wire does'],
    rows: [
      ['Below the elastic limit', 'A straight line',
        'Returns fully to its old length'],
      ['At the elastic limit', 'The line starts to bend',
        'The last point of full recovery'],
      ['Past the elastic limit', 'Curves away', 'Stays slightly stretched'],
      ['At the yield point', 'Almost flat',
        'Stretches a lot for little extra load'],
      ['At the breaking point', 'Ends', 'Snaps'],
    ],
    note: 'Hooke’s law applies to the first row only. '
      + 'Using $F = ke$ past the elastic limit is the main error in this '
      + 'topic.',
  }],

  figure: {
    alt: 'A graph of stretching force up the side against extension along '
      + 'the bottom. From the origin the line is straight and is labelled '
      + 'Hooke law region, obeys F equals k e. It then bends at a point '
      + 'marked elastic limit, flattens at a point marked yield point, and '
      + 'ends at a cross marked breaks. The triangle under the straight '
      + 'part is shaded and labelled as the work done in stretching.',
    svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="70" y1="310" x2="560" y2="310"/>'
      + '<line x1="70" y1="310" x2="70" y2="40"/>'
      + '<text x="300" y="344" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">extension</text>'
      + '<text x="24" y="170" font-size="15" fill="currentColor" '
      + 'stroke="none">force</text>'
      + '<polygon points="70,310 260,310 260,140" fill="#1d4ed8" '
      + 'fill-opacity="0.14" stroke="none"/>'
      + '<line x1="70" y1="310" x2="260" y2="140" stroke="#0f8a4d"/>'
      + '<path d="M260 140 Q 330 96, 390 86" stroke="#0f8a4d"/>'
      + '<path d="M390 86 Q 450 82, 490 70" stroke="#0f8a4d"/>'
      + '<circle cx="260" cy="140" r="5" fill="currentColor"/>'
      + '<text x="268" y="166" font-size="14" fill="currentColor" '
      + 'stroke="none">elastic limit</text>'
      + '<circle cx="390" cy="86" r="5" fill="currentColor"/>'
      + '<text x="368" y="76" font-size="14" fill="currentColor" '
      + 'stroke="none">yield point</text>'
      + '<path d="M484 62 L498 78 M498 62 L484 78" stroke="#b4531a"/>'
      + '<text x="470" y="106" font-size="14" fill="#b4531a" '
      + 'stroke="none">breaks</text>'
      + '<text x="96" y="256" font-size="14" fill="currentColor" '
      + 'stroke="none">straight: F = k e</text>'
      + '<text x="96" y="286" font-size="13" fill="currentColor" '
      + 'stroke="none">shaded area is the work done</text>'
      + '</svg>',
  },

  mechanism:
    'The single most important word in Hooke’s law is the condition '
    + 'attached to it, and a learner who states the law without it has not '
    + 'stated the law. '
    + 'Extension is proportional to force only up to the elastic limit. '
    + 'Past that point the graph bends, the constant $k$ is no longer '
    + 'constant, and any calculation using $F = ke$ is wrong, often badly. '
    + 'So the first thing to do with a numerical question is to check that '
    + 'the load you are asked about is inside the straight part. '
    + 'Examiners set this deliberately: a table of loads and extensions is '
    + 'given, the proportion holds for the first four rows and fails for '
    + 'the fifth, and the question asks what happened. '
    + 'The answer is that the elastic limit has been passed. '
    + 'The second habit is about the word extension. '
    + 'It is the increase in length, not the final length. '
    + 'A spring 20 cm long that becomes 26 cm has an extension of 6 cm, '
    + 'and using 26 cm gives an answer more than four times too big. '
    + 'Write the subtraction down as its own line and the mistake cannot '
    + 'happen. '
    + 'Why does a spring obey the law at all? '
    + 'Because the atoms sit at a separation where the forces between them '
    + 'balance, and for a small displacement from that position the '
    + 'restoring force is very nearly proportional to the displacement. '
    + 'The straight part of the graph is simply the region where the '
    + 'stretch is small enough for that to hold, and the bend is where it '
    + 'stops holding, because atomic planes have begun to slide past one '
    + 'another and will not slide back. '
    + 'That is the physical meaning of the elastic limit, and it is why '
    + 'the wire stays longer afterwards. '
    + 'Surface tension comes from the same molecular picture. '
    + 'A molecule inside a liquid is pulled equally in every direction by '
    + 'its neighbours. '
    + 'A molecule at the surface has neighbours beside it and below it but '
    + 'almost none above, so the pull is sideways and inwards. '
    + 'The surface therefore behaves like a stretched skin, which is why a '
    + 'needle laid carefully flat floats on water though steel is denser, '
    + 'and why a drop of water pulls itself into a ball. '
    + 'Capillarity is the competition between two attractions. '
    + 'Water molecules are attracted to glass more strongly than to each '
    + 'other, so water climbs the glass and the surface curves upward. '
    + 'Mercury molecules attract each other more strongly than they are '
    + 'attracted to glass, so mercury pulls away and its surface curves '
    + 'downward. '
    + 'Naming which attraction wins is what an examination answer needs; '
    + 'saying only that water rises in a thin tube describes the '
    + 'observation without explaining it. '
    + 'On apparatus: the stretching experiment needs a spiral spring, a '
    + 'metre rule and a set of slotted masses, and if the school has no '
    + 'set, the graph and every calculation on it can be learned from a '
    + 'table of readings. '
    + 'What cannot be learned on paper is the feel of the spring going '
    + 'past its limit and not coming back, so if there is one spring in '
    + 'the school, that is the demonstration worth doing.',

  recap:
    'You have stretched a rubber band and felt it pull harder the further '
    + 'it goes, and seen that pulled too far it does not return. '
    + 'This puts a formula on the first part and a name on the second.',

  method: [
    'Find the extension by subtracting the original length from the new one.',
    'Check the load is inside the straight part of the graph.',
    'Use $F = ke$ to find the force constant, with SI units.',
    'For a new load, use the same $k$, provided it is still below the limit.',
    'For work done, use half of force times extension.',
    'For a graph question, name the elastic limit where the line bends.',
    'For a surface question, compare the two attractions by name.',
    'State which attraction wins, and therefore which way the surface curves.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A spring of natural length 20 cm stretches to 26 cm under a '
        + 'load of 12 N. Find its force constant.',
      steps: [
        { math: 'e = 26 - 20 = 6\\ \\text{cm} = 0.06\\ \\text{m}',
          why: 'Extension is the increase, not the final length. Write this line separately.' },
        { math: 'k = \\frac{F}{e} = \\frac{12}{0.06}' },
        { math: 'k = 200\\ \\text{N m}^{-1}' },
      ],
      answer: '$200$ N per metre.',
    },
    {
      level: 4,
      ask: 'The same spring carries a load of 9 N. Find the new length, '
        + 'stating your assumption.',
      steps: [
        { math: 'e = \\frac{F}{k} = \\frac{9}{200}' },
        { math: 'e = 0.045\\ \\text{m} = 4.5\\ \\text{cm}' },
        { math: '\\text{length} = 20 + 4.5 = 24.5\\ \\text{cm}' },
      ],
      answer: '$24.5$ cm, assuming 9 N is still below the elastic limit. '
        + 'Stating that assumption is part of the answer.',
    },
    {
      level: 5,
      ask: 'Loads of 2, 4, 6, 8 and 10 N give extensions of 1.0, 2.0, '
        + '3.0, 4.0 and 6.5 cm. What has happened, and what is the force '
        + 'constant?',
      steps: [
        { math: '\\frac{F}{e}: \\; 200,\\;200,\\;200,\\;200,\\;154',
          why: 'Test the ratio row by row. It is constant for four rows and then falls.' },
        { math: 'k = 200\\ \\text{N m}^{-1}', why: 'From the straight part only.' },
        { math: '\\text{the elastic limit lies between 8 N and 10 N}',
          why: 'The proportion has failed, so the straight region has ended.' },
      ],
      answer: '$k = 200$ N per metre, and the elastic limit has been '
        + 'passed somewhere between 8 N and 10 N. '
        + 'The spring will no longer return to 20 cm.',
    },
    {
      level: 6,
      ask: 'Explain why a steel needle can float on water although steel '
        + 'is eight times denser, and why water rises in a narrow glass '
        + 'tube while mercury falls.',
      steps: [
        'A molecule inside the water is pulled equally in all directions.',
        'A molecule at the surface has no neighbours above it, so the pull '
          + 'is sideways and inwards.',
        'The surface therefore acts like a stretched skin with a force '
          + 'along it, and if the needle is laid flat the skin is not '
          + 'broken.',
        'For the tube, compare two attractions: water to glass, and water '
          + 'to water.',
        'Water is attracted to glass more strongly, so it climbs and the '
          + 'surface curves upward.',
        'Mercury is attracted to itself more strongly than to glass, so '
          + 'it pulls away and the surface curves downward.',
      ],
      answer: 'The needle is held by surface tension, not by upthrust, '
        + 'which is why it must be laid flat and sinks at once if pushed '
        + 'through the surface. '
        + 'Water wets glass because adhesion to glass beats cohesion '
        + 'between water molecules, and mercury does the opposite. '
        + 'Naming which attraction wins is what earns the marks.',
    },
  ],

  traps: [
    {
      mistake: 'Using the final length as the extension.',
      why: 'Extension is new length minus original length. '
        + 'Write that subtraction as its own line.',
    },
    {
      mistake: 'Stating Hooke’s law without the elastic limit.',
      why: 'The condition is part of the law. '
        + 'Without it the statement is wrong and the mark is lost.',
    },
    {
      mistake: 'Using $F = ke$ for a load past the limit.',
      why: 'The constant is no longer constant there. '
        + 'Test the ratio across the readings first.',
    },
    {
      mistake: 'Saying water rises in a thin tube because of surface tension alone.',
      why: 'It rises because it is attracted to the glass more than to '
        + 'itself. '
        + 'Mercury has surface tension too and falls.',
    },
  ],

  extension:
    'Stress is force per unit area. '
    + 'Strain is extension per unit length. '
    + 'Divide the first by the second and you have the Young modulus. '
    + 'It belongs to the material, not to the one wire you tested. '
    + 'So an engineer quotes a modulus for steel and never a force '
    + 'constant. '
    + 'The modulus holds whatever the length and the thickness of the '
    + 'bar.',

  questions: [
    {
      id: 'el-1',
      ask: 'Hooke law holds only:',
      kind: 'choice',
      options: [
        'Up to the elastic limit',
        'For springs of steel',
        'For small springs',
      ],
      answer: 'Up to the elastic limit',
      teach: 'The condition is part of the law. '
        + 'Past that point the force constant is not constant.',
      level: 3,
    },
    {
      id: 'el-2',
      ask: 'A spring 15 cm long stretches to 19 cm. The extension in '
        + 'centimetres is:',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Extension is the increase in length, not the new length.',
      level: 3,
    },
    {
      id: 'el-3',
      ask: 'Water rises in a narrow glass tube because:',
      kind: 'choice',
      options: [
        'It is attracted to glass more than to itself',
        'The tube is narrow',
        'Air pushes it up',
      ],
      answer: 'It is attracted to glass more than to itself',
      teach: 'Mercury has surface tension too, and it falls, '
        + 'because the comparison goes the other way.',
      level: 5,
    },
    {
      id: 'el-4',
      ask: 'The work done stretching a spring is the:',
      kind: 'choice',
      options: [
        'Area under the force against extension graph',
        'Gradient of that graph',
        'Force times the final length',
      ],
      answer: 'Area under the force against extension graph',
      teach: 'For the straight part that area is a triangle, '
        + 'so the work is half of force times extension.',
      level: 5,
    },
  ],
})

/* ── heat capacity and latent heat ─────────────────────────────────────── */

teach({
  topicId: 'heat-capacity-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Heat given to a substance either raises its temperature '
      + 'or changes its state, never both at once. '
      + 'So use $Q = mc\\Delta\\theta$ while the temperature is moving, '
      + 'and $Q = ml$ while it is standing still during melting or '
      + 'boiling. '
      + 'A problem that crosses a change of state is worked in separate '
      + 'stages.',
    method: [
      'Sketch the temperature against time graph and mark the flat parts.',
      'Split the problem into one stage per section of that graph.',
      'Use $mc\\Delta\\theta$ on the slopes and $ml$ on the flats, then add.',
    ],
  },

  idea:
    'To change the temperature of a mass $m$ by $\\Delta\\theta$ takes '
    + 'heat '
    + '$$Q = mc\\,\\Delta\\theta.$$ '
    + 'Here $c$ is the specific heat capacity. '
    + 'It is the heat needed to raise one kilogram by one kelvin, in '
    + 'joules per kilogram per kelvin. '
    + 'For a whole object the heat capacity is $C = mc$, in joules per '
    + 'kelvin. '
    + 'To change the state of a mass $m$, with no change of temperature '
    + 'at all, takes heat '
    + '$$Q = ml.$$ '
    + 'Here $l$ is the specific latent heat. '
    + 'It is called the latent heat of fusion for melting or freezing. '
    + 'It is called the latent heat of vaporisation for boiling or '
    + 'condensing. '
    + 'For water, $c$ is $4200$ J per kg per K. '
    + 'The latent heat of fusion is $3.36 \\times 10^{5}$ J per kg. '
    + 'The latent heat of vaporisation is $2.26 \\times 10^{6}$ J per '
    + 'kg, which is nearly seven times as much. '
    + 'In a mixing experiment, the heat lost by the hot body equals the '
    + 'heat gained by the cold one. '
    + 'That holds only if no heat escapes to the room.',

  tables: [{
    caption: 'Which formula to use, and how to tell which stage you are in',
    columns: ['What is happening', 'Temperature', 'Formula'],
    rows: [
      ['Ice warming from minus 10 to 0', 'Rising', '$Q = mc\\Delta\\theta$'],
      ['Ice melting at 0', 'Standing still', '$Q = ml_f$'],
      ['Water warming from 0 to 100', 'Rising', '$Q = mc\\Delta\\theta$'],
      ['Water boiling at 100', 'Standing still', '$Q = ml_v$'],
      ['Steam heating above 100', 'Rising', '$Q = mc\\Delta\\theta$'],
    ],
    note: 'A moving thermometer means $mc\\Delta\\theta$. '
      + 'A still thermometer means $ml$. '
      + 'Nothing uses both at once.',
  }],

  figure: {
    alt: 'A graph of temperature up the side against heat supplied along '
      + 'the bottom, for ice heated until it becomes steam. The line '
      + 'rises, then runs flat at zero degrees while the ice melts, rises '
      + 'again through the water range, runs flat and much longer at one '
      + 'hundred degrees while the water boils, and then rises again. The '
      + 'two flat sections are labelled as the latent heat stages where '
      + 'the temperature does not change, and the longer flat is marked as '
      + 'the reason boiling takes far more heat than melting.',
    svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="70" y1="290" x2="610" y2="290"/>'
      + '<line x1="70" y1="290" x2="70" y2="40"/>'
      + '<text x="330" y="326" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">heat supplied</text>'
      + '<text x="18" y="160" font-size="15" fill="currentColor" '
      + 'stroke="none">temp</text>'
      + '<line x1="80" y1="268" x2="120" y2="230" stroke="#0f8a4d"/>'
      + '<line x1="120" y1="230" x2="200" y2="230" stroke="#b4531a"/>'
      + '<line x1="200" y1="230" x2="300" y2="120" stroke="#0f8a4d"/>'
      + '<line x1="300" y1="120" x2="520" y2="120" stroke="#b4531a"/>'
      + '<line x1="520" y1="120" x2="580" y2="70" stroke="#0f8a4d"/>'
      + '<line x1="70" y1="230" x2="120" y2="230" stroke-opacity="0.4" '
      + 'stroke-dasharray="4 4"/>'
      + '<line x1="70" y1="120" x2="300" y2="120" stroke-opacity="0.4" '
      + 'stroke-dasharray="4 4"/>'
      + '<text x="56" y="235" font-size="14" text-anchor="end" '
      + 'fill="currentColor" stroke="none">0</text>'
      + '<text x="56" y="125" font-size="14" text-anchor="end" '
      + 'fill="currentColor" stroke="none">100</text>'
      + '<text x="160" y="216" font-size="13" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">melting</text>'
      + '<text x="410" y="106" font-size="13" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">boiling, and much longer</text>'
      + '<text x="88" y="256" font-size="12" fill="currentColor" '
      + 'stroke="none">ice</text>'
      + '<text x="236" y="186" font-size="12" fill="currentColor" '
      + 'stroke="none">water</text>'
      + '<text x="548" y="64" font-size="12" fill="currentColor" '
      + 'stroke="none">steam</text>'
      + '<text x="70" y="316" font-size="13" fill="currentColor" '
      + 'stroke="none">'
      + 'on a flat part the heat goes into breaking bonds, not into '
      + 'temperature</text>'
      + '</svg>',
  },

  mechanism:
    'The idea that makes calorimetry straightforward is that heat does one '
    + 'job at a time. '
    + 'While a substance is warming, the heat is increasing the kinetic '
    + 'energy of its molecules, which is what a thermometer reads. '
    + 'While it is melting or boiling, the heat is breaking the bonds that '
    + 'hold the molecules in place, and the molecules are not moving any '
    + 'faster, so the thermometer does not move at all. '
    + 'Those are two different jobs and they have two different formulae, '
    + 'and this is why a question that crosses a change of state must be '
    + 'cut into stages. '
    + 'The practical rule is to sketch the temperature against time graph '
    + 'first. '
    + 'Every sloping section is an $mc\\Delta\\theta$ term. '
    + 'Every flat section is an $ml$ term. '
    + 'Count the sections, write that many terms, add them. '
    + 'Ice at $-10^\\circ$C becoming water at $20^\\circ$C is three '
    + 'terms: warm the ice, melt it, warm the water. '
    + 'Learners who write one term have not noticed the flat part, and no '
    + 'arithmetic can repair that. '
    + 'The flat parts are also where the physics is most surprising, and '
    + 'the surprise is worth using. '
    + 'Melting one kilogram of ice takes $3.36 \\times 10^{5}$ J, which is '
    + 'the same heat as warming one kilogram of water by $80^\\circ$C. '
    + 'Boiling it takes nearly seven times more again. '
    + 'This is why a drink is cooled far more effectively by ice than by '
    + 'cold water, and why a steam burn is so much worse than a burn from '
    + 'boiling water: the steam gives up all of its latent heat into your '
    + 'skin as it condenses, before the temperature begins to fall at all. '
    + 'The second habit is the direction of the heat flow. '
    + 'In a mixing problem, write heat lost by the hot body equals heat '
    + 'gained by the cold body, and then be careful with each '
    + '$\\Delta\\theta$: for the hot body it is its start temperature '
    + 'minus the final one, and for the cold body it is the final one '
    + 'minus its start. '
    + 'Both differences come out positive, and a negative '
    + '$\\Delta\\theta$ is a sign that one has been written backwards. '
    + 'The assumption also carries a mark: the equation holds only if no '
    + 'heat escapes to the surroundings and none goes into the container, '
    + 'so say that, or include the calorimeter as a third term when its '
    + 'heat capacity is given. '
    + 'On apparatus: a proper calorimetry experiment needs a copper '
    + 'calorimeter, a thermometer and a balance. '
    + 'Where a school has none of these, every calculation in this topic '
    + 'can be done from a table of readings, and WASSCE asks for the '
    + 'calculation and the assumption rather than the handling of the '
    + 'equipment. '
    + 'What the apparatus gives that paper cannot is the sight of the '
    + 'thermometer stopping dead while ice melts in warm water, which is '
    + 'the whole idea in one observation.',

  recap:
    'You know that heating a pot of water raises its temperature, and that '
    + 'water boiling away stays at the same temperature however high the '
    + 'flame. '
    + 'This explains the second fact and puts numbers on both.',

  method: [
    'Sketch temperature against heat supplied for the whole process.',
    'Mark each sloping section and each flat section.',
    'Write one $mc\\Delta\\theta$ term for each slope.',
    'Write one $ml$ term for each flat.',
    'Convert every mass to kilograms and every temperature change to kelvin.',
    'For a mixture, set heat lost equal to heat gained.',
    'Take each temperature change so that it comes out positive.',
    'State the assumption that no heat is lost to the surroundings.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the heat needed to raise 2 kg of water from '
        + '$25^\\circ$C to $75^\\circ$C. Take $c$ as 4200.',
      steps: [
        { math: '\\Delta\\theta = 75 - 25 = 50\\ \\text{K}' },
        { math: 'Q = mc\\Delta\\theta = 2 \\times 4200 \\times 50' },
        { math: 'Q = 420\\,000\\ \\text{J}' },
      ],
      answer: '$4.2 \\times 10^{5}$ J, or 420 kJ.',
    },
    {
      level: 4,
      ask: 'Find the heat needed to melt 0.5 kg of ice at $0^\\circ$C. '
        + 'Take the latent heat of fusion as $3.36 \\times 10^{5}$ J per '
        + 'kg.',
      steps: [
        { math: '\\text{temperature does not change, so use } Q = ml',
          why: 'The heat is breaking bonds, not speeding molecules up.' },
        { math: 'Q = 0.5 \\times 3.36 \\times 10^{5}' },
        { math: 'Q = 1.68 \\times 10^{5}\\ \\text{J}' },
      ],
      answer: '$1.68 \\times 10^{5}$ J. '
        + 'The same heat would raise that half kilogram of water by about '
        + '$80^\\circ$C, which is why ice cools a drink so well.',
    },
    {
      level: 5,
      ask: 'Find the heat needed to turn 0.2 kg of ice at $0^\\circ$C '
        + 'into water at $30^\\circ$C.',
      steps: [
        { math: '\\text{two stages: a flat then a slope}',
          why: 'Sketch the graph first and count the sections.' },
        { math: 'Q_1 = ml_f = 0.2 \\times 3.36 \\times 10^{5} = 67\\,200\\ \\text{J}' },
        { math: 'Q_2 = mc\\Delta\\theta = 0.2 \\times 4200 \\times 30 = 25\\,200\\ \\text{J}' },
        { math: 'Q = 67\\,200 + 25\\,200' },
        { math: 'Q = 92\\,400\\ \\text{J}' },
      ],
      answer: '$92\\,400$ J. '
        + 'Most of it, 67 kJ of the 92 kJ, went into melting, where the '
        + 'thermometer did not move at all.',
    },
    {
      level: 6,
      ask: 'A 0.4 kg block of hot metal at $200^\\circ$C is dropped into '
        + '1.0 kg of water at $25^\\circ$C and the mixture settles at '
        + '$35^\\circ$C. Find the specific heat capacity of the metal, '
        + 'and state your assumption.',
      steps: [
        { math: '\\text{heat lost by metal} = \\text{heat gained by water}',
          why: 'The assumption behind this line is that nothing escapes to the surroundings or the container.' },
        { math: '0.4 \\times c \\times (200 - 35) = 1.0 \\times 4200 \\times (35 - 25)',
          why: 'Each temperature change written so that it is positive.' },
        { math: '0.4c \\times 165 = 42\\,000' },
        { math: '66c = 42\\,000' },
        { math: 'c = 636\\ \\text{J kg}^{-1}\\text{K}^{-1}' },
      ],
      answer: 'About $640$ J per kg per K, assuming no heat is lost to the '
        + 'surroundings and none is taken up by the container. '
        + 'The real value would be a little higher, since in practice '
        + 'some heat does escape.',
    },
  ],

  traps: [
    {
      mistake: 'Using one formula across a change of state.',
      why: 'Heat either raises temperature or changes state, never both. '
        + 'Sketch the graph and write one term per section.',
    },
    {
      mistake: 'Putting a temperature into $\\Delta\\theta$ instead of a change.',
      why: 'It is a difference. '
        + 'Subtract first, and write that subtraction on its own line.',
    },
    {
      mistake: 'Leaving the mass in grams.',
      why: 'The constants are per kilogram, '
        + 'so a mass in grams makes the answer a thousand times too big.',
    },
    {
      mistake: 'Omitting the assumption in a mixing problem.',
      why: 'Heat lost equals heat gained only if nothing escapes. '
        + 'That sentence is worth a mark on its own.',
    },
  ],

  extension:
    'Evaporation cools, and here is the reason. '
    + 'The fastest molecules are the ones that break free. '
    + 'They take away more than their share of the energy. '
    + 'The slower ones are left behind, so the average falls. '
    + 'That is all that sweating is. '
    + 'It is also why water in a clay pot stays cool in Bolga, '
    + 'and why a wet cloth on the head brings a fever down.',

  questions: [
    {
      id: 'ht-1',
      ask: 'While ice is melting, its temperature:',
      kind: 'choice',
      options: ['Stays the same', 'Rises slowly', 'Falls'],
      answer: 'Stays the same',
      teach: 'The heat is breaking the bonds holding the molecules in '
        + 'place, not making them move faster.',
      level: 3,
    },
    {
      id: 'ht-2',
      ask: 'Heat needed to raise 1 kg of water by 10 K, with c as 4200, in '
        + 'joules:',
      kind: 'numeric',
      options: [],
      answer: '42000',
      teach: 'Mass times specific heat capacity times the temperature '
        + 'change.',
      level: 4,
    },
    {
      id: 'ht-3',
      ask: 'A steam burn is worse than a boiling water burn because:',
      kind: 'choice',
      options: [
        'Steam gives up its latent heat as it condenses on the skin',
        'Steam is hotter than boiling water',
        'Steam moves faster',
      ],
      answer: 'Steam gives up its latent heat as it condenses on the skin',
      teach: 'Both start at one hundred degrees. '
        + 'The steam delivers the latent heat of vaporisation first.',
      level: 5,
    },
    {
      id: 'ht-4',
      ask: 'In a mixing problem, the equation to write is:',
      kind: 'choice',
      options: [
        'Heat lost by the hot body equals heat gained by the cold',
        'The temperatures are equal',
        'The masses are equal',
      ],
      answer: 'Heat lost by the hot body equals heat gained by the cold',
      teach: 'And say that it assumes no heat escapes, '
        + 'because that statement carries a mark.',
      level: 4,
    },
  ],
})

/* ── gas laws and kinetic theory ──────────────────────────────────────── */

teach({
  topicId: 'gas-laws-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'For a fixed mass of gas, $\\frac{PV}{T}$ does not change. '
      + 'Each of the three gas laws is that one statement with something '
      + 'held constant. '
      + 'Temperature must always be in kelvin, '
      + 'because the laws are about absolute temperature '
      + 'and Celsius has its zero in the wrong place.',
    method: [
      'Convert every temperature to kelvin by adding 273.',
      'Write down which quantity is held constant.',
      'Use $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$ and cancel what does not change.',
    ],
  },

  idea:
    'For a fixed mass of gas, '
    + '$$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2},$$ '
    + 'and the three named laws are special cases of it. '
    + 'Boyle’s law, at constant temperature, says $PV$ is constant, so '
    + 'pressure is inversely proportional to volume. '
    + 'Charles’ law, at constant pressure, says $\\frac{V}{T}$ is '
    + 'constant. '
    + 'The pressure law, at constant volume, says $\\frac{P}{T}$ is '
    + 'constant. '
    + 'Temperature in all three is absolute temperature in kelvin, where '
    + '$T = \\theta + 273$. '
    + 'The kinetic theory explains them: a gas is a very large number of '
    + 'molecules in rapid random motion, far apart, colliding with each '
    + 'other and with the walls, and pressure is the result of those '
    + 'collisions with the walls. '
    + 'The absolute temperature is a measure of the average kinetic energy '
    + 'of the molecules, so at absolute zero that motion would cease.',

  tables: [{
    caption: 'The three gas laws, and the molecular reason for each',
    columns: ['Law', 'Held constant', 'The relation', 'Why, in molecules'],
    rows: [
      ['Boyle', 'Temperature', '$PV$ constant',
        'A smaller box means more hits on each wall each second'],
      ['Charles', 'Pressure', '$\\frac{V}{T}$ constant',
        'Hotter molecules hit harder, so the gas must expand to keep the pressure'],
      ['Pressure law', 'Volume', '$\\frac{P}{T}$ constant',
        'Hotter molecules hit harder and more often in a fixed box'],
    ],
    note: 'All three come from the one equation by cancelling whatever is '
      + 'constant, so there is really only one law to know.',
  }],

  figure: {
    alt: 'Three boxes of gas with dots for molecules. In the first a '
      + 'piston has squeezed the gas into half the space and the dots are '
      + 'twice as crowded, labelled Boyle, half the volume means twice the '
      + 'pressure. In the second the same box is heated and the piston has '
      + 'risen, labelled Charles, hotter gas expands to keep the pressure '
      + 'the same. In the third the box is sealed and heated and the dots '
      + 'have longer arrows, labelled pressure law, hotter molecules hit '
      + 'the fixed walls harder.',
    svg: '<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="40" y="90" width="80" height="120"/>'
      + '<rect x="40" y="150" width="80" height="60" fill="#1d4ed8" '
      + 'fill-opacity="0.12" stroke="none"/>'
      + '<line x1="40" y1="150" x2="120" y2="150" stroke="#b4531a" '
      + 'stroke-width="5"/>'
      + '<circle cx="58" cy="166" r="3" fill="currentColor"/>'
      + '<circle cx="80" cy="176" r="3" fill="currentColor"/>'
      + '<circle cx="102" cy="162" r="3" fill="currentColor"/>'
      + '<circle cx="68" cy="196" r="3" fill="currentColor"/>'
      + '<circle cx="94" cy="190" r="3" fill="currentColor"/>'
      + '<circle cx="78" cy="156" r="3" fill="currentColor"/>'
      + '<text x="80" y="238" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Boyle</text>'
      + '<text x="80" y="258" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">squeezed:</text>'
      + '<text x="80" y="274" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">more hits</text>'
      + '<rect x="250" y="60" width="80" height="150"/>'
      + '<rect x="250" y="100" width="80" height="110" fill="#1d4ed8" '
      + 'fill-opacity="0.12" stroke="none"/>'
      + '<line x1="250" y1="100" x2="330" y2="100" stroke="#b4531a" '
      + 'stroke-width="5"/>'
      + '<path d="M290 92 L290 66" stroke="#b4531a"/>'
      + '<path d="M284 76 L290 62 L296 76" stroke="#b4531a"/>'
      + '<circle cx="266" cy="130" r="3" fill="currentColor"/>'
      + '<circle cx="300" cy="150" r="3" fill="currentColor"/>'
      + '<circle cx="280" cy="180" r="3" fill="currentColor"/>'
      + '<circle cx="312" cy="196" r="3" fill="currentColor"/>'
      + '<circle cx="258" cy="200" r="3" fill="currentColor"/>'
      + '<text x="290" y="238" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Charles</text>'
      + '<text x="290" y="258" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">heated: it</text>'
      + '<text x="290" y="274" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">expands</text>'
      + '<rect x="470" y="90" width="90" height="120" stroke-width="4"/>'
      + '<rect x="470" y="90" width="90" height="120" fill="#b4531a" '
      + 'fill-opacity="0.1" stroke="none"/>'
      + '<circle cx="492" cy="120" r="3" fill="currentColor"/>'
      + '<path d="M496 118 L516 108" stroke="#b4531a"/>'
      + '<circle cx="534" cy="150" r="3" fill="currentColor"/>'
      + '<path d="M532 154 L512 170" stroke="#b4531a"/>'
      + '<circle cx="498" cy="186" r="3" fill="currentColor"/>'
      + '<path d="M502 184 L526 176" stroke="#b4531a"/>'
      + '<text x="515" y="238" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Pressure law</text>'
      + '<text x="515" y="258" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">sealed and heated:</text>'
      + '<text x="515" y="274" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">harder hits</text>'
      + '</svg>',
  },

  mechanism:
    'There is only one gas law in this syllabus, and the three named ones '
    + 'are it with something cancelled. '
    + 'Start every question by writing '
    + '$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$, then cross out '
    + 'whatever the question holds constant. '
    + 'If the temperature is unchanged, $T$ cancels and you have '
    + 'Boyle’s law. '
    + 'If the pressure is unchanged, $P$ cancels and you have Charles’ '
    + 'law. '
    + 'This saves remembering which is which, and it also stops the '
    + 'commonest structural error, which is using Boyle’s law on a '
    + 'problem where the temperature has in fact changed. '
    + 'The single biggest source of lost marks here is the kelvin. '
    + 'The laws are statements about absolute temperature, so a '
    + 'temperature of $27^\\circ$C must be entered as $300$ K. '
    + 'Using $27$ does not make a small error, it makes a nonsense: '
    + 'doubling the temperature from $27^\\circ$C to $54^\\circ$C looks '
    + 'like a doubling in Celsius but is a rise from $300$ K to only '
    + '$327$ K, which is nine per cent. '
    + 'The reason the kelvin scale is the right one is that its zero is '
    + 'the point where molecular motion would stop, so a temperature in '
    + 'kelvin is proportional to the average kinetic energy of the '
    + 'molecules. '
    + 'Celsius has its zero at the freezing point of water, which is a '
    + 'convenient household fact and not a physical zero of anything. '
    + 'So the first line of every solution is the conversion, written out. '
    + 'Kinetic theory is what makes these laws understandable rather than '
    + 'memorable, and examiners ask for the explanation as often as the '
    + 'calculation. '
    + 'Pressure is molecules striking the walls. '
    + 'Halve the volume and each molecule reaches a wall in half the '
    + 'distance, so there are twice as many strikes each second on the '
    + 'same area, and the pressure doubles. '
    + 'That is Boyle. '
    + 'Raise the temperature and the molecules move faster, so they strike '
    + 'harder and more often; in a sealed tin the pressure rises, which is '
    + 'Charles’ law’s partner, and it is why a tin of tomatoes '
    + 'thrown on a fire bursts. '
    + 'If instead the container can expand, the gas grows until the strikes '
    + 'on each square metre are back to what they were, and that is '
    + 'Charles. '
    + 'Notice that each explanation names the collisions with the walls. '
    + 'An answer that says only that the gas expands when heated has '
    + 'described the observation and explained nothing, and it earns the '
    + 'observation mark alone.',

  recap:
    'You know that a bicycle pump gets hot and hard to push as the air '
    + 'inside is squeezed, and that a football left in the sun goes tight. '
    + 'This gives both of those an equation and a reason in molecules.',

  method: [
    'Write down $P$, $V$ and $T$ for both states, with units.',
    'Convert every temperature to kelvin by adding 273.',
    'Write $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$.',
    'Cross out whatever the question says is constant.',
    'Make the unknown the subject.',
    'Substitute, keeping the pressure units the same on both sides.',
    'Check the direction: squeezing raises pressure, heating expands a gas.',
    'For an explanation, name the collisions with the walls.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A gas occupies 300 cubic centimetres at a pressure of 100 kPa. '
        + 'Find its volume at 150 kPa, at the same temperature.',
      steps: [
        { math: 'T\\ \\text{constant, so } P_1V_1 = P_2V_2',
          why: 'Boyle, which is the general law with $T$ cancelled.' },
        { math: '100 \\times 300 = 150 \\times V_2' },
        { math: 'V_2 = 200\\ \\text{cm}^{3}' },
      ],
      answer: '$200$ cubic centimetres. '
        + 'The pressure went up, so the volume came down, which is the '
        + 'check worth making.',
    },
    {
      level: 4,
      ask: 'A gas has a volume of 250 cubic centimetres at $27^\\circ$C. '
        + 'Find its volume at $127^\\circ$C, at constant pressure.',
      steps: [
        { math: 'T_1 = 27 + 273 = 300\\ \\text{K}',
          why: 'Convert first, every time. This line is where the topic is won or lost.' },
        { math: 'T_2 = 127 + 273 = 400\\ \\text{K}' },
        { math: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2}', why: 'Charles, with $P$ cancelled.' },
        { math: '\\frac{250}{300} = \\frac{V_2}{400}' },
        { math: 'V_2 = 333\\ \\text{cm}^{3}' },
      ],
      answer: 'About $333$ cubic centimetres. '
        + 'In Celsius the temperature looked almost five times bigger; in '
        + 'kelvin it is only a third bigger, and the volume follows the '
        + 'kelvin.',
    },
    {
      level: 5,
      ask: 'A fixed mass of gas has a volume of 2.0 litres at 100 kPa and '
        + '$27^\\circ$C. Find its pressure when compressed to 1.2 litres '
        + 'at $87^\\circ$C.',
      steps: [
        { math: 'T_1 = 300\\ \\text{K},\\quad T_2 = 360\\ \\text{K}' },
        { math: '\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}',
          why: 'Nothing is constant here, so the full equation is needed.' },
        { math: '\\frac{100 \\times 2.0}{300} = \\frac{P_2 \\times 1.2}{360}' },
        { math: '0.667 = \\frac{1.2P_2}{360}' },
        { math: 'P_2 = 200\\ \\text{kPa}' },
      ],
      answer: '$200$ kPa. '
        + 'Both the squeezing and the heating push the pressure up, so a '
        + 'doubling is reasonable.',
    },
    {
      level: 6,
      ask: 'Explain, in terms of molecules, why a sealed tin of tomatoes '
        + 'thrown on a fire bursts, and why the air in a bicycle pump gets '
        + 'hot when you push the handle down quickly.',
      steps: [
        'The tin has a fixed volume, so the pressure law applies.',
        'Heating raises the average kinetic energy of the molecules, so '
          + 'they move faster.',
        'They therefore strike the walls harder and more often each '
          + 'second, so the pressure on each square metre rises.',
        'When that pressure exceeds what the metal can hold, the tin '
          + 'bursts.',
        'In the pump, the piston moves towards the molecules as they '
          + 'strike it.',
        'A molecule bouncing off an advancing surface comes away faster '
          + 'than it arrived, so the average kinetic energy rises.',
        'A rise in average kinetic energy IS a rise in temperature, which '
          + 'is why the barrel gets warm.',
      ],
      answer: 'In both cases the answer names the collisions. '
        + 'The tin bursts because the molecules hit the fixed walls harder '
        + 'and more often as they are heated. '
        + 'The pump warms because work is done on the molecules by the '
        + 'advancing piston, raising their average kinetic energy, and '
        + 'temperature is a measure of exactly that.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving the temperature in degrees Celsius.',
      why: 'The laws are about absolute temperature. '
        + 'Add 273 as the first line of every solution.',
    },
    {
      mistake: 'Using Boyle when the temperature has changed too.',
      why: 'Write the full equation and cancel only what is actually '
        + 'constant.',
    },
    {
      mistake: 'Mixing pressure units across the equation.',
      why: 'The units cancel only if they match. '
        + 'Keep both pressures in the same unit, whichever it is.',
    },
    {
      mistake: 'Explaining expansion without mentioning collisions.',
      why: 'Saying the gas expands when heated repeats the observation. '
        + 'The explanation is that faster molecules strike the walls '
        + 'harder and more often.',
    },
  ],

  extension:
    'The three laws join into one. '
    + 'For $n$ moles of gas, $PV = nRT$, where $R$ is the gas constant. '
    + 'Kinetic theory reaches the same place from the collisions alone, '
    + 'and gives $PV = \\tfrac{1}{3}Nmc^{2}$. '
    + 'Now set the two side by side. '
    + 'Absolute temperature turns out to be in proportion to the mean '
    + 'square speed of the molecules. '
    + 'That is the exact form of the rough claim that temperature '
    + 'measures how fast they move.',

  questions: [
    {
      id: 'gas-1',
      ask: 'A temperature of 27 degrees Celsius in kelvin is:',
      kind: 'numeric',
      options: [],
      answer: '300',
      teach: 'Add 273. '
        + 'Every gas law question starts with this conversion.',
      level: 3,
    },
    {
      id: 'gas-2',
      ask: 'Boyle law holds at constant:',
      kind: 'choice',
      options: ['Temperature', 'Pressure', 'Volume'],
      answer: 'Temperature',
      teach: 'It is the general law with the temperature cancelled, '
        + 'leaving pressure times volume constant.',
      level: 3,
    },
    {
      id: 'gas-3',
      ask: 'Squeezing a gas into half the volume at constant temperature:',
      kind: 'choice',
      options: [
        'Doubles the pressure',
        'Halves the pressure',
        'Leaves the pressure unchanged',
      ],
      answer: 'Doubles the pressure',
      teach: 'Each molecule reaches a wall in half the distance, '
        + 'so there are twice as many hits per second on the same area.',
      level: 4,
    },
    {
      id: 'gas-4',
      ask: 'Pressure in a gas is caused by:',
      kind: 'choice',
      options: [
        'Molecules colliding with the walls',
        'The weight of the gas',
        'Molecules sticking to the walls',
      ],
      answer: 'Molecules colliding with the walls',
      teach: 'Every explanation in this topic has to name those '
        + 'collisions, or it is only describing what was seen.',
      level: 5,
    },
  ],
})
