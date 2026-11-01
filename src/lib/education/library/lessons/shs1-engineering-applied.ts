/**
 * Stored lessons for the SHS 1 engineering and applied electives:
 * Engineering, Manufacturing Engineering, Aviation and Aerospace, and
 * Applied Technology.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What these four share ────────────────────────────────────────────────
 *
 * A tolerance. Every lesson in this block is about work that has to be
 * right to a stated amount and no righter, and about what it costs to ask
 * for more than you need. A beam either balances or it does not. A shaft
 * either enters its hole or it does not. A wing either holds its angle or
 * it stalls. A learner who reads these as four subjects learns four lists;
 * a learner who reads them as one habit, state the limit and then work to
 * it, can answer a question none of the lists covered.
 *
 * ── Where this does not repeat DCT ───────────────────────────────────────
 *
 * Design and Communication Technology already has orthographic and
 * pictorial projection, with first angle worked in full. So the drawing
 * lesson here does not teach projection again. It teaches what DCT leaves
 * out and what an engineering drawing lives or dies by: dimensioning from
 * a datum, and tolerance. The two lessons are meant to be read together by
 * a learner taking both, and each says so.
 *
 * ── Equipment, said plainly ──────────────────────────────────────────────
 *
 * This is the part of the library where a lesson can most easily lie. A
 * school with no vernier caliper cannot hand one round, and a school with
 * no foundry cannot pour iron. So each lesson separates the examinable
 * paper work from the workshop work and says which is which. Reading a
 * vernier scale, resolving a force, dimensioning from a datum, choosing a
 * casting process and tracing the four forces of flight are all paper
 * work, and that is where most of the marks are. Taking a cut, pouring a
 * mould, and feeling when a micrometer ratchet has gone far enough are
 * not, and no amount of writing substitutes. Where the real machine is
 * needed the lesson names it and says what it would show.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── Engineering: forces, moments and equilibrium ────────────────────────── */

teach({
  topicId: 'forces-moments-eng',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A force has size and direction. '
      + 'Resolve it into a horizontal part and a vertical part. '
      + 'A moment is force times the perpendicular distance '
      + 'from the pivot to the line of the force. '
      + 'A body in equilibrium obeys two conditions. '
      + 'The forces in each direction add to zero. '
      + 'The moments about any point add to zero. '
      + 'Say which point you took moments about.',
    method: [
      'Draw the body alone, with every force on it.',
      'Resolve any angled force into horizontal and vertical parts.',
      'Take moments about a point that removes an unknown.',
    ],
  },

  idea:
    'A force is a push or a pull. '
    + 'It has size, measured in newtons, and a direction. '
    + 'A force at an angle can be replaced by two forces at right angles. '
    + 'If a force F acts at an angle A to the horizontal, '
    + 'the horizontal part is F times cos A '
    + 'and the vertical part is F times sin A. '
    + 'A moment is the turning effect of a force about a point. '
    + 'It is the force times the perpendicular distance '
    + 'from that point to the line along which the force acts. '
    + 'Its unit is the newton metre. '
    + 'A body is in equilibrium when it has no acceleration, '
    + 'which includes standing still. '
    + 'Two conditions must then hold. '
    + 'First, the forces balance: '
    + 'the horizontal forces add to zero '
    + 'and the vertical forces add to zero. '
    + 'Second, the moments balance: '
    + 'the moments about any point add to zero, '
    + 'so clockwise equals anticlockwise. '
    + 'A free body diagram is the drawing of the body on its own, '
    + 'with every force shown and nothing else.',

  mechanism:
    'Two habits decide whether this topic is easy or impossible, '
    + 'and both are habits of writing rather than of calculating. '
    + 'The first is the perpendicular distance. '
    + 'A moment is not force times the length of the beam. '
    + 'It is force times the distance measured at right angles '
    + 'from the pivot to the line of the force. '
    + 'For a weight hanging on a horizontal beam those are the same, '
    + 'which is why learners get away with it for a while. '
    + 'Put the force at an angle and they part company. '
    + 'A rope pulling at 30 degrees on a beam 2 metres from the hinge '
    + 'has a moment of the force times 2 times sin 30, not times 2. '
    + 'So resolve the force first, '
    + 'and then use the distance to each part. '
    + 'The second habit is choosing the point. '
    + 'The moments balance about any point at all, '
    + 'which means you may choose the point that helps you. '
    + 'A force acting through the point you choose has zero moment, '
    + 'because its perpendicular distance is zero, '
    + 'so it drops out of the equation. '
    + 'A simply supported beam has two unknown reactions. '
    + 'Take moments about the left support '
    + 'and the left reaction vanishes, '
    + 'leaving one equation with one unknown. '
    + 'Then get the other from the vertical forces. '
    + 'A learner who takes moments about the middle '
    + 'is left with two unknowns and two harder equations, '
    + 'and will usually get there, but slowly and with more slips. '
    + 'Now the part that is pure SHS, '
    + 'because at this level the reason carries its own marks. '
    + 'Write the words. '
    + 'Taking moments about A, '
    + 'clockwise moments equal anticlockwise moments. '
    + 'That sentence tells the examiner which point you used, '
    + 'which sign convention you took, '
    + 'and that you know the condition you are applying. '
    + 'It is often worth a mark on its own, '
    + 'and without it a correct number can still lose marks '
    + 'because nobody can tell where it came from. '
    + 'The same goes for the free body diagram. '
    + 'Draw the body separated from its supports, '
    + 'and replace each support with the force it exerts. '
    + 'A missing reaction is the commonest reason '
    + 'an equilibrium problem will not close, '
    + 'and it is almost always the weight of the beam itself, '
    + 'acting at its centre, '
    + 'which the question mentioned in one quiet phrase.',

  recap:
    'You have balanced a see saw, '
    + 'and found that a heavy person near the middle '
    + 'can balance a light person far out. '
    + 'This puts numbers on that, '
    + 'and adds forces that pull at an angle.',

  method: [
    'Draw the body on its own, away from its supports.',
    'Mark every force: loads, weights, and a reaction at each support.',
    'Include the weight of the body itself if it is given.',
    'Resolve each angled force into a horizontal and a vertical part.',
    'Choose a point to take moments about, one that an unknown passes through.',
    'Write: taking moments about that point, clockwise equals anticlockwise.',
    'Solve for the first unknown.',
    'Use the sum of vertical forces equal to zero for the second.',
    'Check with moments about a different point.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A force of 60 newtons acts 0.5 metres from a pivot, '
        + 'at right angles to the arm. Find its moment.',
      steps: [
        'Moment is force times perpendicular distance.',
        '60 times 0.5.',
      ],
      answer: '30 newton metres.',
    },
    {
      level: 4,
      ask: 'Resolve a force of 100 newtons acting at 30 degrees '
        + 'to the horizontal.',
      steps: [
        'Horizontal part is 100 times cos 30, which is 100 times 0.866.',
        'Vertical part is 100 times sin 30, which is 100 times 0.5.',
      ],
      answer: 'About 86.6 newtons horizontally '
        + 'and 50 newtons vertically.',
    },
    {
      level: 5,
      ask: 'A light beam 4 metres long rests on supports at its ends, '
        + 'A on the left and B on the right. '
        + 'A load of 600 newtons hangs 1 metre from A. '
        + 'Find both reactions.',
      steps: [
        'Draw the beam alone, with reactions up at A and B '
          + 'and the load down.',
        'Taking moments about A, clockwise equals anticlockwise.',
        'The load gives 600 times 1, which is 600 newton metres clockwise.',
        'The reaction at B gives B times 4 anticlockwise.',
        'So 4B equals 600, giving B equals 150 newtons.',
        'Vertical forces: A plus B equals 600, so A equals 450 newtons.',
      ],
      answer: 'A is 450 newtons and B is 150 newtons. '
        + 'The support nearer the load carries more, '
        + 'and taking moments about A removed A from the first equation.',
    },
    {
      level: 6,
      ask: 'A uniform beam 3 metres long weighs 200 newtons '
        + 'and is hinged at A. '
        + 'A rope at the far end pulls at 40 degrees above the beam. '
        + 'Find the rope tension that holds the beam horizontal.',
      steps: [
        'The weight acts at the centre, 1.5 metres from A, '
          + 'because the beam is uniform.',
        'Taking moments about A removes the hinge force entirely.',
        'Clockwise: 200 times 1.5, which is 300 newton metres.',
        'The rope force must be resolved: '
          + 'its component at right angles to the beam is T times sin 40.',
        'Anticlockwise: T times sin 40 times 3, '
          + 'which is T times 0.643 times 3, so 1.929 T.',
        'So 1.929 T equals 300.',
      ],
      answer: 'T is about 156 newtons. '
        + 'Two things earned the marks: '
        + 'putting the weight of a uniform beam at its centre, '
        + 'and resolving the rope force before using the distance.',
    },
  ],

  traps: [
    {
      mistake: 'Using the length of the arm instead of the perpendicular '
        + 'distance.',
      why: 'For an angled force they are different. '
        + 'Resolve the force first, then use the distance to each part.',
    },
    {
      mistake: 'Forgetting the weight of the beam itself.',
      why: 'A uniform beam has its weight at its centre. '
        + 'Leave it out and the equations will not close.',
    },
    {
      mistake: 'Taking moments about an awkward point.',
      why: 'You may choose any point. '
        + 'Choose one an unknown passes through, and that unknown drops out.',
    },
    {
      mistake: 'Giving the answer without naming the point.',
      why: 'Write taking moments about A. '
        + 'It states the condition you used, and it carries a mark.',
    },
  ],

  extension:
    'Two equal and opposite forces that do not act along the same line '
    + 'form a couple. '
    + 'Their forces add to zero, so the body does not move off, '
    + 'but their moments do not cancel, so it turns. '
    + 'A couple has the same moment about every point, '
    + 'which is why a steering wheel turns the same '
    + 'wherever you hold it. '
    + 'This also shows that the two conditions for equilibrium '
    + 'are genuinely separate. '
    + 'Balanced forces alone are not enough.',

  figure: {
    alt: 'A simply supported beam four metres long drawn as a free body. '
      + 'Supports at the left end A and the right end B are replaced by '
      + 'upward reaction arrows labelled A and B. A load of six hundred '
      + 'newtons is drawn as a downward arrow one metre from A. The '
      + 'distances one metre and four metres are dimensioned beneath the '
      + 'beam, each measured from A, and a note says that taking moments '
      + 'about A removes the reaction A because its perpendicular '
      + 'distance from A is zero. Beside the beam a small triangle shows '
      + 'a force at an angle resolved into a horizontal part equal to F '
      + 'cos A and a vertical part equal to F sin A.',
    svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* beam */
      + '<path d="M60 130h360" stroke="currentColor" stroke-width="6" fill="none"/>'
      /* reactions */
      + '<path d="M60 200V140" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M54 150l6-12 6 12Z" fill="#0f8a4d"/>'
      + '<path d="M420 200V140" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M414 150l6-12 6 12Z" fill="#0f8a4d"/>'
      + '<text x="40" y="220" font-size="13" fill="#0f8a4d">A</text>'
      + '<text x="414" y="220" font-size="13" fill="#0f8a4d">B</text>'
      /* load */
      + '<path d="M150 50v72" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M144 112l6 12 6-12Z" fill="currentColor"/>'
      + '<text x="116" y="42" font-size="12" fill="currentColor">600 N</text>'
      /* dimensions from A */
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M60 240v30"/><path d="M150 240v30"/><path d="M420 240v30"/>'
      + '<path d="M60 254h90"/><path d="M60 270h360"/>'
      + '</g>'
      + '<text x="88" y="250" font-size="11" fill="currentColor">1 m</text>'
      + '<text x="222" y="288" font-size="11" fill="currentColor">4 m</text>'
      + '<text x="24" y="314" font-size="11" fill="#0f8a4d">both distances measured from A, because that is the point moments are taken about</text>'
      + '<text x="24" y="332" font-size="11" fill="#0f8a4d">A itself has zero perpendicular distance from A, so it drops out of the equation</text>'
      /* resolution triangle */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M480 190h110"/>'
      + '<path d="M480 190L590 118"/>'
      + '<path d="M590 190V118"/>'
      + '</g>'
      + '<path d="M480 190a40 40 0 0 1 36 -24" stroke="#0f8a4d" stroke-width="1" fill="none"/>'
      + '<text x="520" y="184" font-size="11" fill="#0f8a4d">A</text>'
      + '<text x="508" y="138" font-size="11" fill="currentColor">F</text>'
      + '<text x="500" y="206" font-size="11" fill="currentColor">F cos A</text>'
      + '<text x="596" y="158" font-size="11" fill="currentColor">F sin A</text>'
      + '<text x="470" y="236" font-size="11" fill="currentColor">resolve before you</text>'
      + '<text x="470" y="252" font-size="11" fill="currentColor">use a distance</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The two conditions for equilibrium, and what each one buys you',
      columns: ['Condition', 'Written as', 'Equations it gives', 'Use it to find'],
      rows: [
        ['Forces balance horizontally', 'Sum of horizontal forces equals zero', 'One', 'A horizontal reaction or a pull'],
        ['Forces balance vertically', 'Sum of vertical forces equals zero', 'One', 'The second support reaction'],
        ['Moments balance', 'Clockwise equals anticlockwise about a stated point', 'One for each point chosen', 'The first support reaction, or a tension'],
      ],
      note: 'Three equations in all for a flat problem, '
        + 'so three unknowns can be found and no more. '
        + 'Counting unknowns first tells you whether the question '
        + 'can be done at all.',
    },
  ],

  questions: [
    {
      id: 'fm-1',
      ask: 'A force of 40 newtons acts 2 metres from a pivot, '
        + 'at right angles. Give the moment in newton metres.',
      kind: 'numeric',
      options: [],
      answer: '80',
      teach: '40 times 2 is 80 newton metres.',
      level: 3,
    },
    {
      id: 'fm-2',
      ask: 'The horizontal part of a force F at angle A to the horizontal is:',
      kind: 'choice',
      options: ['F cos A', 'F sin A', 'F tan A'],
      answer: 'F cos A',
      teach: 'Cosine for the part along the angle you measured from, '
        + 'sine for the part across it.',
      level: 4,
    },
    {
      id: 'fm-3',
      ask: 'Moments are best taken about a point where:',
      kind: 'choice',
      options: [
        'An unknown force acts',
        'The beam is thickest',
        'The load hangs',
      ],
      answer: 'An unknown force acts',
      teach: 'Its perpendicular distance is zero, '
        + 'so it drops out and one equation has one unknown.',
      level: 5,
    },
    {
      id: 'fm-4',
      ask: 'A uniform beam weighs 300 newtons. '
        + 'Its weight acts:',
      kind: 'choice',
      options: [
        'At its centre',
        'At the loaded end',
        'At the support',
      ],
      answer: 'At its centre',
      teach: 'Uniform means evenly made, '
        + 'so the weight behaves as one force at the middle.',
      level: 5,
    },
    {
      id: 'fm-5',
      ask: 'A 4 metre beam on end supports carries 800 newtons at its '
        + 'midpoint. Give the reaction at one support, in newtons.',
      kind: 'numeric',
      options: [],
      answer: '400',
      teach: 'The load is central, so by symmetry each support carries '
        + 'half. Check with moments about either end.',
      level: 4,
    },
  ],
})

/* ── Engineering: engineering drawing and tolerance ──────────────────────── */

teach({
  topicId: 'eng-drawing',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A drawing is an instruction, not a picture. '
      + 'Dimension every feature once, and from a datum face and edge. '
      + 'Never measure from the last mark, '
      + 'because the errors then add up. '
      + 'A tolerance is the amount a size may be out by and still pass. '
      + 'Give it as two limits, '
      + 'and ask for the widest tolerance the job will take, '
      + 'because a tight one costs money.',
    method: [
      'Choose a datum face and a datum edge, and mark them.',
      'Dimension every feature from the datum, once each.',
      'State a tolerance, as wide as the job allows.',
    ],
  },

  idea:
    'An engineering drawing tells somebody else how to make the part. '
    + 'Projection is covered in Design and Communication Technology, '
    + 'and a learner taking both should read the two lessons together. '
    + 'This one is about the two things projection does not give: '
    + 'dimensioning and tolerance. '
    + 'A dimension is placed on a thin extension line and dimension line, '
    + 'with an arrowhead at each end '
    + 'and the figure above the line and the right way up. '
    + 'Each feature is dimensioned once and only once. '
    + 'A datum is the face or edge that all dimensions are measured from. '
    + 'A tolerance is how far from the stated size a part may be '
    + 'and still be accepted. '
    + 'It can be written as plus or minus a figure, '
    + 'or as two limits, an upper and a lower. '
    + 'A fit is the relation between a shaft and its hole. '
    + 'A clearance fit leaves the hole larger, so the shaft turns. '
    + 'An interference fit leaves it smaller, so the shaft must be pressed '
    + 'in and then holds. '
    + 'Drawings also carry a title block, a scale and a material note.',

  mechanism:
    'There are two ideas to take away, '
    + 'and both of them cost real money when they are missed. '
    + 'The first is why dimensions come from a datum. '
    + 'Suppose four holes are to be spaced 20 millimetres apart '
    + 'along a plate. '
    + 'Dimension them as 20, 20, 20, 20 from each other, '
    + 'which is called chain dimensioning. '
    + 'Each cut has a tolerance, say plus or minus 0.2 millimetres. '
    + 'The first hole may be out by 0.2, '
    + 'and the second measures from that error '
    + 'and adds its own, '
    + 'so by the fourth hole the position may be out by 0.8 millimetres. '
    + 'Nobody broke the tolerance, and the part is still wrong. '
    + 'Now dimension the same holes as 20, 40, 60 and 80 from one datum '
    + 'edge. '
    + 'Each hole carries its own error only, '
    + 'and the worst position error is 0.2 millimetres, not 0.8. '
    + 'Same tolerance, same workshop, four times the accuracy, '
    + 'bought with nothing but a decision about where to measure from. '
    + 'That reasoning is the examinable part of dimensioning, '
    + 'and a question that shows a chain dimensioned drawing '
    + 'and asks what is wrong with it is asking for exactly this answer. '
    + 'The second idea is that a tolerance is a price. '
    + 'A learner writes plus or minus 0.01 millimetres '
    + 'because it looks careful. '
    + 'It is not careful, it is expensive. '
    + 'A fitter can saw and file to about half a millimetre, '
    + 'a lathe will hold about a tenth, '
    + 'and holding a hundredth needs a ground finish, '
    + 'a measured room, '
    + 'and parts checked one by one with some thrown away. '
    + 'Every tightening of a tolerance adds a process '
    + 'and adds rejects. '
    + 'So the rule for a drawing is: '
    + 'ask what the part actually has to do, '
    + 'then give the loosest tolerance that still lets it do it. '
    + 'A bracket that only has to hold a cover '
    + 'needs plus or minus half a millimetre. '
    + 'A shaft that must turn in a bearing needs a few hundredths, '
    + 'and only on that diameter. '
    + 'Writing one tight tolerance on the one feature that needs it, '
    + 'and leaving the rest general, '
    + 'is what a real drawing looks like, '
    + 'and saying why is worth more in an examination '
    + 'than a drawing covered in tight figures. '
    + 'Last, the equipment note. '
    + 'The drawing itself needs a pencil, a rule and a set square, '
    + 'which every school has, '
    + 'and all the reasoning above is done on paper. '
    + 'What a school without a workshop cannot show '
    + 'is that holding a tolerance is hard. '
    + 'A learner who has filed to a line knows it; '
    + 'one who has not should be told plainly '
    + 'that half a millimetre by hand is good work.',

  recap:
    'You have read a plan and used a scale rule, '
    + 'and you have measured a length with a rule. '
    + 'This asks what has to be written on a drawing '
    + 'so that somebody else can make the thing without asking you, '
    + 'and how exact that somebody has to be.',

  method: [
    'Decide what the part must do; that sets which sizes matter.',
    'Choose one face and one edge as datums, and mark them on the drawing.',
    'Measure every dimension from the datum, not from the next feature.',
    'Dimension each feature once only, on the view that shows it best.',
    'Put the figure above the dimension line and the right way up.',
    'Give a general tolerance in the title block, as wide as the job allows.',
    'Give a tighter tolerance only on the features that need one.',
    'State the material, the scale and the units.',
    'Read it back and ask whether a stranger could make it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A length is given as 50 plus or minus 0.2 millimetres. '
        + 'Give the upper and lower limits.',
      steps: [
        'Upper limit is 50 plus 0.2.',
        'Lower limit is 50 minus 0.2.',
      ],
      answer: '50.2 millimetres and 49.8 millimetres. '
        + 'The tolerance, the whole span, is 0.4 millimetres.',
    },
    {
      level: 4,
      ask: 'A hole is 25.00 to 25.05 millimetres and a shaft is 24.90 to '
        + '24.95. Is this a clearance or an interference fit, '
        + 'and what is the smallest gap?',
      steps: [
        'The hole is always larger than the shaft, so the shaft will enter.',
        'Smallest gap is the smallest hole minus the largest shaft.',
        '25.00 minus 24.95.',
      ],
      answer: 'A clearance fit, with a smallest gap of 0.05 millimetres. '
        + 'The largest gap is 25.05 minus 24.90, which is 0.15.',
    },
    {
      level: 5,
      ask: 'Four holes are chain dimensioned 20, 20, 20, 20 along a plate, '
        + 'each cut held to plus or minus 0.2 millimetres. '
        + 'Give the worst error in the position of the fourth hole, '
        + 'and the fix.',
      steps: [
        'Each step is measured from the hole before it.',
        'So each step carries the error of all the steps before.',
        'Worst case the errors all go the same way: 4 times 0.2.',
        'Dimension instead from one datum edge: 20, 40, 60, 80.',
      ],
      answer: 'The fourth hole may be out by 0.8 millimetres, '
        + 'with every cut inside tolerance. '
        + 'Dimensioning from a datum holds the error at 0.2 for every '
        + 'hole, and it costs nothing.',
    },
    {
      level: 6,
      ask: 'A learner marks every dimension on a bracket as plus or minus '
        + '0.01 millimetres. '
        + 'Explain why this is poor engineering, and what to do instead.',
      steps: [
        'Ask what the bracket must do: it carries a cover.',
        'The hole centres must line up with two screws, '
          + 'which needs about half a millimetre.',
        'A hundredth of a millimetre needs grinding, a measured room, '
          + 'and one by one inspection.',
        'Each tightening adds a process and adds rejected parts.',
      ],
      answer: 'It asks for an accuracy the job does not need '
        + 'and multiplies the cost and the rejects. '
        + 'Put a general tolerance of plus or minus 0.5 in the title block, '
        + 'and a tight tolerance only on a feature that must fit something, '
        + 'such as a bearing diameter.',
    },
  ],

  traps: [
    {
      mistake: 'Chain dimensioning a row of features.',
      why: 'The errors add up along the chain. '
        + 'Measure every feature from one datum.',
    },
    {
      mistake: 'Dimensioning the same feature twice.',
      why: 'The two figures will disagree once a tolerance is applied, '
        + 'and then nobody knows which to work to.',
    },
    {
      mistake: 'Asking for a tight tolerance everywhere.',
      why: 'Each tightening adds a process and more rejects. '
        + 'Tight where it matters, general everywhere else.',
    },
    {
      mistake: 'Leaving out the units, the scale or the material.',
      why: 'A drawing is an instruction to a stranger. '
        + 'Any of those missing makes it a guess.',
    },
  ],

  extension:
    'A size tolerance alone does not fully control a part. '
    + 'A shaft can be the right diameter everywhere and still be bent, '
    + 'and a face can be the right distance away and still not be flat. '
    + 'So drawings also carry tolerances of form and position: '
    + 'flatness, roundness, squareness and the position of a hole '
    + 'inside a stated circle. '
    + 'This is called geometrical tolerancing, '
    + 'and it is the reason a part can pass every measured size '
    + 'and still refuse to assemble.',

  figure: {
    alt: 'The same plate with four holes dimensioned two ways. In the '
      + 'upper drawing the holes are chain dimensioned, each twenty '
      + 'millimetres from the one before, and a note shows the worst '
      + 'error growing to zero point eight millimetres by the fourth '
      + 'hole as each tolerance adds to the last. In the lower drawing '
      + 'the same holes are dimensioned twenty, forty, sixty and eighty '
      + 'from a single datum edge marked at the left, and a note shows '
      + 'the worst error staying at zero point two millimetres for every '
      + 'hole.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* chain plate */
      + '<rect x="60" y="50" width="420" height="56" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<circle cx="150" cy="78" r="9"/><circle cx="240" cy="78" r="9"/>'
      + '<circle cx="330" cy="78" r="9"/><circle cx="420" cy="78" r="9"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M60 112v26"/><path d="M150 112v26"/><path d="M240 112v26"/>'
      + '<path d="M330 112v26"/><path d="M420 112v26"/>'
      + '<path d="M60 130h90"/><path d="M150 130h90"/><path d="M240 130h90"/><path d="M330 130h90"/>'
      + '</g>'
      + '<text x="92" y="126" font-size="11" fill="currentColor">20</text>'
      + '<text x="182" y="126" font-size="11" fill="currentColor">20</text>'
      + '<text x="272" y="126" font-size="11" fill="currentColor">20</text>'
      + '<text x="362" y="126" font-size="11" fill="currentColor">20</text>'
      + '<text x="60" y="42" font-size="12" fill="currentColor">chain dimensioned: each hole measured from the last</text>'
      + '<text x="60" y="160" font-size="11" fill="#0f8a4d">error at hole 1: 0.2     hole 2: 0.4     hole 3: 0.6     hole 4: 0.8 mm</text>'
      /* datum plate */
      + '<rect x="60" y="226" width="420" height="56" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M60 226v56" stroke="#0f8a4d" stroke-width="5" fill="none"/>'
      + '<text x="20" y="300" font-size="11" fill="#0f8a4d">datum</text>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<circle cx="150" cy="254" r="9"/><circle cx="240" cy="254" r="9"/>'
      + '<circle cx="330" cy="254" r="9"/><circle cx="420" cy="254" r="9"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M60 288v76"/><path d="M150 288v22"/><path d="M240 288v40"/>'
      + '<path d="M330 288v58"/><path d="M420 288v76"/>'
      + '<path d="M60 304h90"/><path d="M60 322h180"/><path d="M60 340h270"/><path d="M60 358h360"/>'
      + '</g>'
      + '<text x="96" y="300" font-size="11" fill="currentColor">20</text>'
      + '<text x="140" y="318" font-size="11" fill="currentColor">40</text>'
      + '<text x="186" y="336" font-size="11" fill="currentColor">60</text>'
      + '<text x="230" y="354" font-size="11" fill="currentColor">80</text>'
      + '<text x="60" y="218" font-size="12" fill="currentColor">dimensioned from one datum edge</text>'
      + '<text x="60" y="384" font-size="11" fill="#0f8a4d">error at every hole: 0.2 mm, because no hole is measured from another</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'What each tolerance buys, and what it costs to hold',
      columns: ['Tolerance', 'What can hold it', 'Use it for', 'Cost'],
      rows: [
        ['Plus or minus 0.5 mm', 'A saw and a file, by hand', 'A bracket, a cover plate, a frame', 'None beyond care'],
        ['Plus or minus 0.1 mm', 'A lathe or a mill', 'A spacer, a pulley bore', 'A machine and a setter'],
        ['Plus or minus 0.02 mm', 'A ground finish, checked one by one', 'A shaft in a bearing', 'Extra process and rejects'],
        ['Plus or minus 0.002 mm', 'A measured room at fixed temperature', 'A gauge, an instrument part', 'Very high; rarely justified'],
      ],
      note: 'Read the cost column before writing a figure. '
        + 'The right tolerance is the widest one the part can work with.',
    },
    {
      caption: 'The two kinds of fit between a shaft and its hole',
      columns: ['Fit', 'Hole against shaft', 'Assembled by', 'Used when'],
      rows: [
        ['Clearance', 'Hole always larger', 'Sliding together by hand', 'The shaft must turn or slide'],
        ['Interference', 'Hole always smaller', 'Pressing, or heating the hole', 'The parts must not move at all'],
        ['Transition', 'Either, within the limits', 'Light tapping', 'Location wanted, with easy removal'],
      ],
    },
  ],

  questions: [
    {
      id: 'ed-1',
      ask: 'A size is 40 plus or minus 0.3 millimetres. '
        + 'Give the upper limit in millimetres.',
      kind: 'numeric',
      options: [],
      answer: '40.3',
      teach: 'The lower limit is 39.7, and the tolerance span is 0.6.',
      level: 3,
    },
    {
      id: 'ed-2',
      ask: 'Chain dimensioning is poor practice because:',
      kind: 'choice',
      options: [
        'The errors of each step add up along the chain',
        'It uses more arrowheads',
        'It cannot show a hole',
      ],
      answer: 'The errors of each step add up along the chain',
      teach: 'Dimension from one datum and each feature carries only its '
        + 'own error.',
      level: 5,
    },
    {
      id: 'ed-3',
      ask: 'A hole is always larger than its shaft. This is a:',
      kind: 'choice',
      options: ['Clearance fit', 'Interference fit', 'Transition fit'],
      answer: 'Clearance fit',
      teach: 'So the shaft can turn or slide. '
        + 'An interference fit has the hole smaller and must be pressed.',
      level: 4,
    },
    {
      id: 'ed-4',
      ask: 'Asking for plus or minus 0.01 millimetres on every dimension '
        + 'is wrong mainly because:',
      kind: 'choice',
      options: [
        'It adds processes and rejects for accuracy the job does not need',
        'It is hard to write on the drawing',
        'Tolerances must always be equal',
      ],
      answer: 'It adds processes and rejects for accuracy the job does not need',
      teach: 'Tight where it matters, general everywhere else. '
        + 'A tolerance is a price.',
      level: 6,
    },
    {
      id: 'ed-5',
      ask: 'A feature should be dimensioned:',
      kind: 'choice',
      options: [
        'Once only, from a datum',
        'On every view it appears in',
        'Twice, as a check',
      ],
      answer: 'Once only, from a datum',
      teach: 'Two figures for one feature will disagree under tolerance, '
        + 'and then nobody knows which to work to.',
      level: 4,
    },
  ],
})

/* ── Engineering: measurement and instruments ────────────────────────────── */

teach({
  topicId: 'metrology-eng',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A vernier caliper reads to 0.02 millimetres '
      + 'and a micrometer to 0.01. '
      + 'Read the main scale first, '
      + 'then find the one line on the second scale '
      + 'that lines up with a main scale line. '
      + 'Check the zero before you measure, '
      + 'and take the zero error off every reading. '
      + 'A reading without its uncertainty is not a measurement.',
    method: [
      'Close the instrument and read its zero error.',
      'Read the main scale, then the coinciding line on the second scale.',
      'Add the two, correct for zero error, and state the uncertainty.',
    ],
  },

  idea:
    'Metrology is the business of measuring, '
    + 'and of knowing how far to trust what you read. '
    + 'A steel rule reads to about half a millimetre. '
    + 'A vernier caliper has a main scale in millimetres '
    + 'and a sliding scale, the vernier, '
    + 'whose divisions are slightly smaller. '
    + 'A common vernier has 50 divisions over 49 millimetres, '
    + 'so each division is 0.02 millimetres smaller than a main one, '
    + 'and that difference is what it can read. '
    + 'A micrometer has a screw of known pitch, usually 0.5 millimetres, '
    + 'and a thimble divided into 50, '
    + 'so one thimble division is 0.01 millimetres. '
    + 'Resolution is the smallest change an instrument can show. '
    + 'Accuracy is how close a reading is to the true size. '
    + 'A zero error is a reading the instrument gives '
    + 'when it should read zero, '
    + 'and it is added or subtracted from every reading taken. '
    + 'Uncertainty is the range within which the true value lies, '
    + 'and it is quoted with the result, '
    + 'as 24.36 plus or minus 0.01 millimetres.',

  mechanism:
    'Two things make a reading wrong even when the eye is good, '
    + 'and the paper asks about both. '
    + 'The first is the zero error, '
    + 'and it matters because it is the one error that does not average out. '
    + 'Close the jaws of a vernier and look. '
    + 'If the zero of the vernier sits two divisions past the zero '
    + 'of the main scale, the instrument reads 0.04 millimetres too much, '
    + 'and it will read 0.04 too much on every measurement you take '
    + 'with it, all day. '
    + 'Taking ten readings and averaging them does nothing, '
    + 'because every one is wrong by the same amount in the same direction. '
    + 'That is what a systematic error is, '
    + 'and the only cure is to find it and subtract it. '
    + 'A random error, a slight misreading of the line, '
    + 'is the opposite, and averaging does help there. '
    + 'Naming which kind of error you are dealing with '
    + 'is often a question in itself. '
    + 'The second is how hard you close the instrument. '
    + 'A vernier closed with a firm hand '
    + 'can squeeze a soft part and read small, '
    + 'and a micrometer screwed down hard '
    + 'can compress the part and spring its own frame. '
    + 'That is what the ratchet on the end of a micrometer is for. '
    + 'It slips at a set force, '
    + 'so every reading is taken at the same pressure, '
    + 'and two people get the same number. '
    + 'A learner who turns the thimble instead of the ratchet '
    + 'reads whatever their grip gives. '
    + 'There is a third habit, '
    + 'and it is the one that separates an engineering answer '
    + 'from a schoolboy one. '
    + 'Quote the uncertainty. '
    + 'The diameter is 24.36 millimetres '
    + 'is a number. '
    + 'The diameter is 24.36 plus or minus 0.01 millimetres '
    + 'is a measurement, '
    + 'because it says what the instrument could and could not see. '
    + 'This decides real questions. '
    + 'A shaft drawn as 24.35 to 24.40 millimetres '
    + 'cannot be checked with a rule, '
    + 'because the rule cannot resolve the tolerance band at all. '
    + 'It cannot be properly checked with a vernier either, '
    + 'since the band is 0.05 wide and the vernier sees 0.02. '
    + 'It needs a micrometer. '
    + 'The rule of thumb engineers use '
    + 'is that the instrument should resolve about a tenth of the '
    + 'tolerance band, '
    + 'and being able to say that sentence answers a whole class of '
    + 'questions about choosing an instrument. '
    + 'Last, honesty about equipment. '
    + 'Reading a vernier and a micrometer from a drawn scale '
    + 'is paper work, and it is where the marks are: '
    + 'a WASSCE question gives you a picture of a scale and asks for '
    + 'the reading. '
    + 'So a school with no instruments can still teach this properly, '
    + 'by drawing scales large on the board and on paper. '
    + 'What cannot be taught that way is the feel: '
    + 'knowing when the jaws are just touching, '
    + 'and hearing the ratchet slip. '
    + 'One caliper for a class of forty, passed round, '
    + 'is worth more than any diagram for that one lesson, '
    + 'and a school with none should say so rather than pretend.',

  recap:
    'You have measured with a rule and read a scale. '
    + 'This adds instruments that read far finer than a rule, '
    + 'and asks the harder question: '
    + 'how much of what you just read is real.',

  method: [
    'Wipe the measuring faces and the part clean.',
    'Close the instrument fully and read the zero error.',
    'Note whether the zero error is positive or negative.',
    'Place the part squarely between the faces.',
    'Close gently; on a micrometer use the ratchet, never the thimble.',
    'Read the main scale up to the zero of the second scale.',
    'Find the one line on the second scale that lines up, '
      + 'and multiply by the resolution.',
    'Add the two readings, then correct for the zero error.',
    'State the result with its uncertainty.',
  ],

  worked: [
    {
      level: 3,
      ask: 'On a vernier caliper the main scale reads just past 24 '
        + 'millimetres and the eighteenth vernier division lines up. '
        + 'The vernier reads to 0.02 millimetres. Give the reading.',
      steps: [
        'Main scale: 24 millimetres.',
        'Vernier: 18 times 0.02, which is 0.36 millimetres.',
        'Add them.',
      ],
      answer: '24.36 millimetres.',
    },
    {
      level: 4,
      ask: 'A micrometer shows 7.5 millimetres on the sleeve '
        + 'and 28 on the thimble, which reads to 0.01 millimetres. '
        + 'Give the reading.',
      steps: [
        'Sleeve: 7.5 millimetres.',
        'Thimble: 28 times 0.01, which is 0.28 millimetres.',
      ],
      answer: '7.78 millimetres.',
    },
    {
      level: 5,
      ask: 'A vernier closed on itself reads plus 0.04 millimetres. '
        + 'A part then reads 31.52. '
        + 'Give the true size, and say why taking more readings '
        + 'would not have helped.',
      steps: [
        'The instrument reads 0.04 too much on every measurement.',
        'True size is 31.52 minus 0.04.',
        'The error is the same size and the same direction every time.',
      ],
      answer: '31.48 millimetres. '
        + 'It is a systematic error, '
        + 'so averaging more readings just averages the same mistake. '
        + 'Only finding and subtracting it helps.',
    },
    {
      level: 6,
      ask: 'A shaft is drawn 24.35 to 24.40 millimetres. '
        + 'Say which instrument should check it, and why a vernier '
        + 'will not do.',
      steps: [
        'The tolerance band is 24.40 minus 24.35, which is 0.05 millimetres.',
        'An instrument should resolve about a tenth of the band, '
          + 'so about 0.005 millimetres.',
        'A rule reads to 0.5, which cannot see the band at all.',
        'A vernier reads to 0.02, which is nearly half the band.',
        'A micrometer reads to 0.01, and one with a vernier on the sleeve '
          + 'reads to 0.001.',
      ],
      answer: 'A micrometer, preferably one reading to 0.001 millimetres. '
        + 'A vernier at 0.02 cannot tell a part just inside the limit '
        + 'from one just outside it, '
        + 'so it would pass bad parts and reject good ones.',
    },
  ],

  traps: [
    {
      mistake: 'Measuring without checking the zero.',
      why: 'A zero error goes into every reading in the same direction, '
        + 'and no amount of averaging removes it.',
    },
    {
      mistake: 'Turning the thimble of a micrometer instead of the ratchet.',
      why: 'The reading then depends on your grip. '
        + 'The ratchet slips at a set force so everyone reads the same.',
    },
    {
      mistake: 'Quoting a reading with no uncertainty.',
      why: 'A number alone does not say what the instrument could see. '
        + 'Write 24.36 plus or minus 0.01 millimetres.',
    },
    {
      mistake: 'Choosing an instrument that barely resolves the tolerance.',
      why: 'It passes bad parts and rejects good ones. '
        + 'Aim to resolve about a tenth of the tolerance band.',
    },
  ],

  extension:
    'An instrument can be precise and still be wrong. '
    + 'Precision is how closely repeated readings agree. '
    + 'Accuracy is how close they are to the truth. '
    + 'A micrometer with a bent frame '
    + 'may give the same wrong answer ten times, '
    + 'which is precise and inaccurate. '
    + 'That is why instruments are calibrated '
    + 'against gauge blocks of known size, '
    + 'and why a calibration certificate carries a date. '
    + 'An instrument that has been dropped '
    + 'is out of calibration until it has been checked, '
    + 'whatever it looks like.',

  figure: {
    alt: 'A vernier scale drawn large. The main scale is marked in '
      + 'millimetres with twenty, twenty four and twenty eight labelled. '
      + 'Below it the sliding vernier scale has its zero sitting just '
      + 'past the twenty four millimetre mark, which gives the whole '
      + 'millimetre reading. Further along the vernier, its eighteenth '
      + 'division lines up exactly with a main scale line, and that '
      + 'coincidence is arrowed and labelled. The arithmetic is written '
      + 'beneath: twenty four millimetres plus eighteen times zero point '
      + 'zero two, giving twenty four point three six millimetres.',
    svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* main scale */
      + '<path d="M40 110h560" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M60 110V70"/><path d="M110 110V86"/><path d="M160 110V86"/>'
      + '<path d="M210 110V86"/><path d="M260 110V70"/><path d="M310 110V86"/>'
      + '<path d="M360 110V86"/><path d="M410 110V86"/><path d="M460 110V70"/>'
      + '<path d="M510 110V86"/><path d="M560 110V86"/>'
      + '</g>'
      + '<text x="46" y="60" font-size="12" fill="currentColor">20</text>'
      + '<text x="246" y="60" font-size="12" fill="currentColor">24</text>'
      + '<text x="446" y="60" font-size="12" fill="currentColor">28</text>'
      + '<text x="40" y="40" font-size="12" fill="currentColor">main scale, millimetres</text>'
      /* vernier scale */
      + '<path d="M278 114h300" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M278 114v30"/><path d="M308 114v22"/><path d="M338 114v22"/>'
      + '<path d="M368 114v22"/><path d="M398 114v22"/><path d="M428 114v30"/>'
      + '<path d="M458 114v22"/><path d="M488 114v22"/><path d="M518 114v22"/>'
      + '<path d="M548 114v22"/><path d="M578 114v30"/>'
      + '</g>'
      + '<text x="270" y="162" font-size="11" fill="#0f8a4d">0</text>'
      + '<text x="420" y="162" font-size="11" fill="#0f8a4d">18</text>'
      + '<text x="570" y="162" font-size="11" fill="#0f8a4d">36</text>'
      /* pointer for whole mm */
      + '<path d="M278 196v-44" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<text x="140" y="212" font-size="11" fill="currentColor">the vernier zero has passed 24, so 24 whole millimetres</text>'
      /* coincidence arrow */
      + '<path d="M428 238v-96" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M422 152l6-10 6 10Z" fill="#0f8a4d"/>'
      + '<text x="392" y="256" font-size="11" fill="#0f8a4d">this one line coincides exactly: division 18</text>'
      + '<text x="40" y="290" font-size="13" fill="currentColor">24 mm plus 18 times 0.02 mm, which is 24.36 mm</text>'
      + '<text x="40" y="314" font-size="12" fill="#0f8a4d">one line and one line only lines up, and finding it is the whole skill</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Which instrument to reach for, and what it can see',
      columns: ['Instrument', 'Reads to', 'Usual range', 'Right for'],
      rows: [
        ['Steel rule', 'About 0.5 mm', 'Up to 300 mm', 'Cutting lengths, rough layout'],
        ['Vernier caliper', '0.02 mm', '0 to 150 mm', 'A spacer, a bore, a general check'],
        ['Micrometer', '0.01 mm', '0 to 25 mm, in steps', 'A shaft for a bearing, a sheet thickness'],
        ['Dial gauge', '0.01 mm', 'A few millimetres of travel', 'Checking run out and flatness, not size'],
        ['Gauge blocks', '0.001 mm or better', 'A set of fixed sizes', 'Calibrating the instruments above'],
      ],
      note: 'Choose the instrument that resolves about a tenth of the '
        + 'tolerance band. Anything coarser passes bad parts.',
    },
    {
      caption: 'The two kinds of error, and what to do about each',
      columns: ['Error', 'How it behaves', 'Example', 'The cure'],
      rows: [
        ['Systematic', 'Same size, same direction, every time', 'A zero error of plus 0.04 mm', 'Find it and subtract it'],
        ['Random', 'Different each time, either way', 'Misjudging which line coincides', 'Take several readings and average'],
      ],
      note: 'Averaging cures only the second kind, '
        + 'which is why the zero is checked before the first reading '
        + 'rather than after the last.',
    },
  ],

  questions: [
    {
      id: 'me-1',
      ask: 'A vernier reading to 0.02 millimetres shows 31 on the main '
        + 'scale and division 12 coinciding. '
        + 'Give the reading in millimetres.',
      kind: 'numeric',
      options: [],
      answer: '31.24',
      teach: '12 times 0.02 is 0.24, added to 31.',
      level: 4,
    },
    {
      id: 'me-2',
      ask: 'A zero error cannot be removed by averaging because it is:',
      kind: 'choice',
      options: [
        'Systematic, so it is the same every time',
        'Random, so it cancels',
        'Caused by the part',
      ],
      answer: 'Systematic, so it is the same every time',
      teach: 'Every reading is wrong by the same amount in the same '
        + 'direction. Find it and subtract it.',
      level: 5,
    },
    {
      id: 'me-3',
      ask: 'The ratchet on a micrometer exists to:',
      kind: 'choice',
      options: [
        'Apply the same closing force every time',
        'Lock the reading',
        'Turn the thimble faster',
      ],
      answer: 'Apply the same closing force every time',
      teach: 'Otherwise the reading depends on your grip, '
        + 'and two people get two numbers.',
      level: 5,
    },
    {
      id: 'me-4',
      ask: 'A tolerance band is 0.05 millimetres wide. '
        + 'The right instrument should read to about:',
      kind: 'choice',
      options: ['0.005 mm', '0.05 mm', '0.5 mm'],
      answer: '0.005 mm',
      teach: 'About a tenth of the band. '
        + 'Anything coarser cannot tell a good part from a bad one.',
      level: 6,
    },
    {
      id: 'me-5',
      ask: 'An instrument that gives the same wrong answer ten times is:',
      kind: 'choice',
      options: [
        'Precise but not accurate',
        'Accurate but not precise',
        'Both accurate and precise',
      ],
      answer: 'Precise but not accurate',
      teach: 'Precision is agreement between readings. '
        + 'Accuracy is closeness to the truth, '
        + 'and only calibration settles it.',
      level: 6,
    },
  ],
})

/* ── Manufacturing Engineering: casting and moulding ─────────────────────── */

teach({
  topicId: 'casting-moulding',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Casting pours a liquid into a mould and lets it set. '
      + 'In sand casting a pattern makes a cavity in packed sand, '
      + 'and molten metal is poured in through a runner, '
      + 'with a riser to feed the shrinkage. '
      + 'In injection moulding plastic granules are melted '
      + 'and forced into a steel mould under pressure. '
      + 'Sand suits one part or a few; '
      + 'injection suits thousands, '
      + 'because the mould costs so much to make.',
    method: [
      'Name the process and the material it takes.',
      'Give the steps in order, from pattern to finished part.',
      'Justify the choice from the quantity and the material.',
    ],
  },

  idea:
    'Casting makes a part by pouring a liquid into a shaped space '
    + 'and letting it harden. '
    + 'In sand casting the shaped space is made in sand. '
    + 'A pattern, the shape of the part, '
    + 'is packed round with moulding sand in a box of two halves, '
    + 'the upper half called the cope and the lower the drag. '
    + 'The pattern is withdrawn, leaving a cavity. '
    + 'Channels are cut: '
    + 'a runner for the metal to enter, '
    + 'a riser standing above the thickest part to hold a reserve, '
    + 'and vents to let gas out. '
    + 'A core of baked sand is placed in the cavity '
    + 'where a hole is wanted. '
    + 'Molten metal is poured, left to cool, '
    + 'and the sand is broken away. '
    + 'The runner and riser are cut off and the part is cleaned, '
    + 'which is called fettling. '
    + 'In injection moulding, plastic granules are fed from a hopper '
    + 'into a heated barrel, '
    + 'melted, '
    + 'and forced by a screw into a cooled steel mould. '
    + 'The plastic sets in seconds and is ejected, '
    + 'and the mould closes again.',

  mechanism:
    'Three ideas explain every casting defect and every process choice. '
    + 'The first is shrinkage, '
    + 'and it is the reason the riser exists. '
    + 'Metal takes up less room as a solid than as a liquid. '
    + 'So as the casting cools it pulls in on itself, '
    + 'and if there is no reserve of liquid to draw from '
    + 'it draws from inside itself '
    + 'and leaves a hollow in the thickest part, '
    + 'which is called a shrinkage cavity. '
    + 'From the outside the part looks perfect. '
    + 'The riser is a column of metal standing over the thickest section, '
    + 'kept liquid longest because it is thick and surrounded by hot sand, '
    + 'and the casting feeds from it as it shrinks. '
    + 'So the riser is not waste, '
    + 'it is the part of the pour that stays liquid on purpose, '
    + 'and a question asking why a riser is used '
    + 'wants that sentence and not a note about filling. '
    + 'The second is the draft angle. '
    + 'A pattern with vertical sides drags the sand with it '
    + 'as it is lifted out, and the mould crumbles. '
    + 'So every vertical face is tapered by a degree or two, '
    + 'which lets the pattern lift cleanly. '
    + 'The same idea applies in injection moulding, '
    + 'where a part with no draft will not release from the steel '
    + 'and the ejector pins punch through it. '
    + 'Look at the inside of any plastic bucket '
    + 'and the walls lean, which is why. '
    + 'The third is the one that decides which process a factory uses, '
    + 'and it is economics, not engineering. '
    + 'A sand mould is destroyed every time, '
    + 'and making the next one costs a little labour and some sand. '
    + 'An injection mould is machined from steel '
    + 'and costs a very large sum once, '
    + 'then produces a part every twenty seconds for years. '
    + 'So the cost per part falls as the quantity rises, '
    + 'steeply at first, '
    + 'and somewhere there is a quantity at which the two processes cost '
    + 'the same. '
    + 'Below it, sand casting is cheaper. '
    + 'Above it, injection moulding is. '
    + 'This is exactly what a Ghanaian example shows. '
    + 'A local foundry in Suame Magazine '
    + 'casts a replacement gear housing for a maize mill, one off, '
    + 'in sand, and that is the right process: '
    + 'nobody will cut a steel mould for one housing. '
    + 'A factory at Tema making plastic buckets '
    + 'sells hundreds of thousands, '
    + 'so the steel mould is paid off in the first weeks '
    + 'and every bucket after that is cheap. '
    + 'Both decisions are correct and they are opposite, '
    + 'and the reason is the number of parts, '
    + 'which is the answer a question about process choice is looking for. '
    + 'Last, honesty about equipment. '
    + 'Nothing here needs a foundry to learn. '
    + 'The sequence, the function of each channel, '
    + 'the reason for a draft angle '
    + 'and the break even argument are all paper work, '
    + 'and that is where the marks are. '
    + 'A school can go further cheaply: '
    + 'a pattern in wood, a two part mould in damp sand, '
    + 'and candle wax or molten lead free solder poured in, '
    + 'shows shrinkage and draft for the price of nothing. '
    + 'Pouring iron or aluminium needs a furnace, '
    + 'a crucible, tongs, a face shield and leather, '
    + 'and a school without them should visit a foundry '
    + 'rather than improvise one.',

  recap:
    'You have seen a blacksmith beat metal to shape '
    + 'and watched water freeze in a mould as ice. '
    + 'Casting is the second of those used on purpose, '
    + 'and this lesson asks what goes wrong as the liquid sets '
    + 'and how the mould is designed to allow for it.',

  method: [
    'Name the part, its material, and how many are wanted.',
    'For sand casting, make a pattern with a draft angle on every vertical face.',
    'Pack the drag, turn it, pack the cope, and withdraw the pattern.',
    'Cut the runner, the riser over the thickest section, and the vents.',
    'Set any core needed for a hole.',
    'Pour the melt steadily, then let it cool undisturbed.',
    'Break out, cut off the runner and riser, and fettle the part.',
    'For injection moulding, cost the steel mould against the number of parts.',
    'Choose the process from the quantity, and say so in those words.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the two halves of a sand moulding box, '
        + 'and say what a runner and a riser do.',
      steps: [
        'The upper half is the cope, the lower the drag.',
        'The runner lets the metal in.',
        'The riser holds a reserve of liquid metal.',
      ],
      answer: 'Cope and drag. '
        + 'The runner admits the metal; '
        + 'the riser feeds the shrinkage as it cools.',
    },
    {
      level: 4,
      ask: 'Why is every vertical face of a pattern tapered?',
      steps: [
        'A vertical face rubs the sand as the pattern is lifted.',
        'The sand is dragged with it and the mould breaks.',
        'A taper of a degree or two breaks that contact at once.',
      ],
      answer: 'So the pattern can be withdrawn without pulling the sand '
        + 'with it. The taper is called a draft angle, '
        + 'and plastic mouldings need it for the same reason.',
    },
    {
      level: 5,
      ask: 'A cast pulley looks perfect but breaks under load, '
        + 'and the break shows a hollow at the thick centre. '
        + 'Diagnose it and give the fix.',
      steps: [
        'Metal shrinks as it changes from liquid to solid.',
        'The thickest section cools last and shrinks most.',
        'With nothing to feed it, it draws liquid from inside itself.',
        'That leaves a hidden cavity exactly where the stress is highest.',
      ],
      answer: 'A shrinkage cavity. '
        + 'Place a riser directly over the thickest section, '
        + 'big enough to stay liquid longer than the casting, '
        + 'so the casting feeds from the riser instead of from itself.',
    },
    {
      level: 6,
      ask: 'A workshop must supply 30 gear housings, '
        + 'and a factory must supply 200000 buckets. '
        + 'Choose a process for each and justify it with the economics.',
      steps: [
        'A sand mould is destroyed each time, '
          + 'so its cost repeats for every part but is small.',
        'A steel injection mould costs a very large sum once, '
          + 'then costs almost nothing a part.',
        'For 30 parts the steel mould could never be paid off.',
        'For 200000 parts it is paid off early '
          + 'and every part after that is cheap.',
      ],
      answer: 'Sand casting for the 30 housings, '
        + 'injection moulding for the buckets. '
        + 'The deciding figure is the quantity, not the shape: '
        + 'below the break even quantity the repeating mould wins, '
        + 'above it the permanent mould does.',
    },
  ],

  traps: [
    {
      mistake: 'Calling the riser part of the filling system.',
      why: 'Its job is to stay liquid and feed the shrinkage. '
        + 'The runner fills the mould.',
    },
    {
      mistake: 'Drawing a pattern with square vertical sides.',
      why: 'It cannot be withdrawn without tearing the sand. '
        + 'Every vertical face needs a draft angle.',
    },
    {
      mistake: 'Choosing injection moulding because it is modern.',
      why: 'The steel mould must be paid off. '
        + 'For a handful of parts it is far more expensive than sand.',
    },
    {
      mistake: 'Forgetting the vents.',
      why: 'Hot metal drives steam and gas out of the sand. '
        + 'With nowhere to go it is trapped as blow holes in the casting.',
    },
  ],

  extension:
    'Die casting sits between the two. '
    + 'A steel mould is used, as in injection moulding, '
    + 'but molten metal is forced in rather than plastic, '
    + 'usually aluminium or zinc. '
    + 'It gives a far better surface and a tighter tolerance than sand, '
    + 'and it needs a quantity to justify the die. '
    + 'This is how a motorcycle engine case or a padlock body is made, '
    + 'and it is why those parts are smooth '
    + 'where a sand cast housing is rough.',

  figure: {
    alt: 'A cross section through a two part sand mould. The upper box, '
      + 'labelled the cope, and the lower box, labelled the drag, meet '
      + 'along a horizontal parting line. Between them is the cavity '
      + 'left by the withdrawn pattern, with a baked sand core sitting '
      + 'inside it where a hole is wanted. On the left a pouring basin '
      + 'leads down a runner into the cavity. On the right a tall riser '
      + 'stands directly over the thickest part of the cavity, with a '
      + 'note that it stays liquid longest and feeds the shrinkage. Two '
      + 'thin vents rise from the cavity to the top surface, and a '
      + 'detail at the side shows a pattern wall leaning by a small '
      + 'draft angle so that it can be lifted out of the sand.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* boxes */
      + '<rect x="60" y="60" width="420" height="110" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<rect x="60" y="170" width="420" height="110" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M60 170h420" stroke="currentColor" stroke-width="3" stroke-dasharray="8 5" fill="none"/>'
      + '<text x="490" y="118" font-size="12" fill="currentColor">cope</text>'
      + '<text x="490" y="230" font-size="12" fill="currentColor">drag</text>'
      + '<text x="490" y="166" font-size="11" fill="#0f8a4d">parting line</text>'
      /* cavity */
      + '<path d="M170 170h180v54h-26l-14 26h-86l-14-26h-40Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.18"/>'
      + '<text x="196" y="252" font-size="11" fill="currentColor">cavity left by the pattern</text>'
      /* core */
      + '<rect x="238" y="178" width="44" height="34" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="232" y="172" font-size="10" fill="currentColor">core</text>'
      /* pouring basin and runner */
      + '<path d="M86 60h48l-8 18H94Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M106 78v92h64" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<text x="76" y="52" font-size="11" fill="currentColor">pouring basin</text>'
      + '<text x="76" y="140" font-size="11" fill="currentColor">runner</text>'
      /* riser */
      + '<rect x="330" y="60" width="38" height="110" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="378" y="80" font-size="11" fill="#0f8a4d">riser, over the thickest part</text>'
      + '<text x="378" y="96" font-size="11" fill="#0f8a4d">it stays liquid longest and</text>'
      + '<text x="378" y="112" font-size="11" fill="#0f8a4d">feeds the shrinkage</text>'
      /* vents */
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M210 170V60"/><path d="M290 170V60"/>'
      + '</g>'
      + '<text x="196" y="52" font-size="10" fill="currentColor">vents</text>'
      /* draft detail */
      + '<path d="M60 320h110l-14 60H74Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M170 320v60" stroke="#0f8a4d" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<text x="186" y="344" font-size="11" fill="#0f8a4d">the wall leans by a degree or two,</text>'
      + '<text x="186" y="360" font-size="11" fill="#0f8a4d">which is the draft angle: without it the</text>'
      + '<text x="186" y="376" font-size="11" fill="#0f8a4d">pattern drags the sand out with it</text>'
      + '<text x="60" y="312" font-size="11" fill="currentColor">detail: a pattern wall</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Sand casting against injection moulding, and what decides between them',
      columns: ['', 'Sand casting', 'Injection moulding'],
      rows: [
        ['Material', 'Iron, aluminium, brass, bronze', 'Thermoplastics'],
        ['The mould', 'Sand, destroyed every pour', 'Machined steel, used for years'],
        ['Cost of the mould', 'Low, but paid again each time', 'Very high, paid once'],
        ['Time for one part', 'Hours, including making the mould', 'Seconds'],
        ['Surface and tolerance', 'Rough; needs machining where it matters', 'Smooth and repeatable'],
        ['Quantity it suits', 'One to a few hundred', 'Thousands upwards'],
        ['A Ghanaian example', 'A maize mill housing from a Suame foundry', 'Buckets and chairs from a Tema factory'],
      ],
      note: 'The quantity row decides it. '
        + 'Below the break even quantity the repeating mould is cheaper; '
        + 'above it the permanent mould is.',
    },
  ],

  questions: [
    {
      id: 'cm-1',
      ask: 'The upper half of a sand moulding box is called the:',
      kind: 'choice',
      options: ['Cope', 'Drag', 'Core'],
      answer: 'Cope',
      teach: 'The lower half is the drag. '
        + 'A core is the sand shape that leaves a hole.',
      level: 3,
    },
    {
      id: 'cm-2',
      ask: 'The job of the riser is to:',
      kind: 'choice',
      options: [
        'Hold liquid metal to feed the shrinkage',
        'Let the metal into the mould',
        'Let gas escape',
      ],
      answer: 'Hold liquid metal to feed the shrinkage',
      teach: 'The runner fills the mould and the vents release gas. '
        + 'The riser stays liquid on purpose.',
      level: 5,
    },
    {
      id: 'cm-3',
      ask: 'A draft angle on a pattern exists so that:',
      kind: 'choice',
      options: [
        'The pattern lifts out without tearing the sand',
        'The metal flows faster',
        'The casting cools evenly',
      ],
      answer: 'The pattern lifts out without tearing the sand',
      teach: 'Plastic mouldings need it too, '
        + 'which is why the walls of a bucket lean.',
      level: 4,
    },
    {
      id: 'cm-4',
      ask: 'Thirty one off gear housings are needed. The right process is:',
      kind: 'choice',
      options: [
        'Sand casting',
        'Injection moulding',
        'Either, it makes no difference',
      ],
      answer: 'Sand casting',
      teach: 'A steel mould could never be paid off over thirty parts. '
        + 'Quantity decides.',
      level: 5,
    },
    {
      id: 'cm-5',
      ask: 'A casting shows blow holes inside it. The likely cause is:',
      kind: 'choice',
      options: [
        'No vents, so gas was trapped',
        'The riser was too large',
        'The metal was too cold',
      ],
      answer: 'No vents, so gas was trapped',
      teach: 'Hot metal drives steam and gas out of the damp sand, '
        + 'and it must have a way out.',
      level: 6,
    },
  ],
})

/* ── Aviation and Aerospace: lift, weight, thrust and drag ───────────────── */

teach({
  topicId: 'four-forces',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Four forces act on an aircraft in flight. '
      + 'Lift acts upwards from the wings. '
      + 'Weight acts downwards through the centre of gravity. '
      + 'Thrust acts forwards from the engine. '
      + 'Drag acts backwards, opposing the motion. '
      + 'In steady flight lift equals weight and thrust equals drag. '
      + 'Steady means no acceleration, not standing still.',
    method: [
      'Draw the aircraft and mark all four forces.',
      'Check each opposing pair for balance.',
      'Say what the pilot changes to upset or restore the balance.',
    ],
  },

  idea:
    'An aircraft in flight has four forces on it. '
    + 'Lift is produced by air flowing over the wings '
    + 'and acts at right angles to the airflow, '
    + 'which in level flight is upwards. '
    + 'Weight is the pull of gravity on the whole aircraft '
    + 'and acts downwards through one point, '
    + 'the centre of gravity. '
    + 'Thrust is produced by the propeller or the jet '
    + 'and acts forwards. '
    + 'Drag is the resistance of the air '
    + 'and acts backwards along the flight path. '
    + 'In steady level flight the forces balance: '
    + 'lift equals weight, and thrust equals drag. '
    + 'The aircraft is then in equilibrium, '
    + 'and by Newton’s first law it keeps the speed and direction it has. '
    + 'To climb, the pilot increases thrust. '
    + 'To go faster, the pilot increases thrust until drag matches again. '
    + 'Drag has two parts. '
    + 'Parasite drag is the drag of the shape pushing through the air, '
    + 'and it rises as speed rises. '
    + 'Induced drag is the price of making lift, '
    + 'and it falls as speed rises.',

  mechanism:
    'The sentence that costs most marks in this topic '
    + 'is that a plane flies because lift is greater than weight. '
    + 'It is wrong, and the reason matters. '
    + 'A force that is not balanced produces acceleration, '
    + 'by Newton’s second law. '
    + 'If lift were greater than weight all the time, '
    + 'the aircraft would accelerate upwards without limit. '
    + 'It does not. '
    + 'An aircraft in a steady climb at a constant speed '
    + 'has balanced forces, '
    + 'just as one in level flight does. '
    + 'Lift exceeds weight only for the moment '
    + 'in which the climb is being started, '
    + 'and then the balance is restored at the new attitude. '
    + 'So the right answer to why it does not fall '
    + 'is that lift equals weight, '
    + 'and the right answer to why it climbs '
    + 'is that extra thrust gave it extra speed and so extra lift '
    + 'for a moment. '
    + 'Equilibrium does not mean stationary. '
    + 'It means not accelerating. '
    + 'That single distinction is the whole of the topic. '
    + 'The second mechanism is the shape of the drag curve, '
    + 'and it explains something a pilot does every flight. '
    + 'Parasite drag is like the push you feel from the air '
    + 'when you put your hand out of a moving trotro: '
    + 'faster means more. '
    + 'Induced drag is different. '
    + 'It is produced because a wing making lift '
    + 'leaves swirling air behind it, '
    + 'and that swirl takes energy. '
    + 'At low speed the wing must work at a large angle '
    + 'to make enough lift, '
    + 'so the swirl is strong and induced drag is large. '
    + 'At high speed it needs only a small angle, '
    + 'so induced drag is small. '
    + 'One part rises with speed and the other falls, '
    + 'so the total has a lowest point in the middle. '
    + 'The speed at that lowest point '
    + 'is the speed where the aircraft needs least thrust, '
    + 'which makes it the best speed to glide at '
    + 'and the best speed for staying up the longest. '
    + 'Drawing those three curves, '
    + 'one rising, one falling, and the sum with a minimum, '
    + 'answers a whole family of examination questions, '
    + 'and it also answers why flying too slowly needs more power, '
    + 'not less, '
    + 'which is a thing that surprises every learner once. '
    + 'Third, name the point each force acts through, '
    + 'because the paper asks. '
    + 'Weight acts through the centre of gravity. '
    + 'Lift acts through the centre of pressure on the wing. '
    + 'Those two are usually not in the same place, '
    + 'and the small turning moment between them '
    + 'is balanced by a downward force from the tailplane. '
    + 'This is why loading an aircraft wrongly is dangerous '
    + 'even when the total weight is legal: '
    + 'move the centre of gravity too far back '
    + 'and the tail can no longer balance the moment, '
    + 'and the nose cannot be brought down. '
    + 'Saying that is worth more than listing the four forces again.',

  recap:
    'You have met balanced and unbalanced forces, '
    + 'and Newton’s laws of motion. '
    + 'This applies them to one object, '
    + 'and shows that an aircraft holding a steady climb '
    + 'is in balance just as much as one sitting on the ground.',

  method: [
    'Draw the aircraft and the direction of flight.',
    'Mark lift at right angles to the airflow, through the centre of pressure.',
    'Mark weight straight down, through the centre of gravity.',
    'Mark thrust forwards and drag backwards along the flight path.',
    'For steady flight, write lift equals weight and thrust equals drag.',
    'For a change of speed or height, say which force was changed first.',
    'Say what the pilot used to change it: the throttle, or the attitude.',
    'Return to balance and state the new steady condition.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the four forces and the direction each acts in.',
      steps: [
        'Lift: at right angles to the airflow, upwards in level flight.',
        'Weight: downwards.',
        'Thrust: forwards.',
        'Drag: backwards along the flight path.',
      ],
      answer: 'Lift, weight, thrust and drag.',
    },
    {
      level: 4,
      ask: 'An aircraft of 24000 newtons weight flies straight and level '
        + 'at a constant speed, with drag of 3000 newtons. '
        + 'Give the lift and the thrust.',
      steps: [
        'Steady level flight means the forces balance.',
        'Lift equals weight.',
        'Thrust equals drag.',
      ],
      answer: 'Lift is 24000 newtons and thrust is 3000 newtons. '
        + 'Neither pair is unbalanced, '
        + 'which is why the speed and the height stay the same.',
    },
    {
      level: 5,
      ask: 'A learner writes that an aircraft flies because lift is '
        + 'greater than weight. Correct it, using Newton’s laws.',
      steps: [
        'An unbalanced force produces acceleration.',
        'If lift always exceeded weight the aircraft would accelerate '
          + 'upwards without limit.',
        'In steady flight, level or climbing, the forces balance.',
        'Lift exceeds weight only during the moment the climb is started.',
      ],
      answer: 'In steady flight lift equals weight. '
        + 'Equilibrium means no acceleration, not standing still, '
        + 'so a steady climb is also a balance.',
    },
    {
      level: 6,
      ask: 'Explain why flying more slowly can need more power, '
        + 'not less, using the two kinds of drag.',
      steps: [
        'Parasite drag rises with speed, because the air resists the shape.',
        'Induced drag is the price of making lift, '
          + 'and at low speed the wing works at a large angle, '
          + 'so the swirl behind it is strong.',
        'So induced drag rises as speed falls.',
        'The total of a rising curve and a falling curve has a minimum.',
        'Below that speed, total drag increases again.',
      ],
      answer: 'Below the minimum drag speed, induced drag grows faster '
        + 'than parasite drag falls, so total drag rises '
        + 'and more thrust is needed to hold height. '
        + 'The minimum drag speed is therefore the best speed to glide '
        + 'and the best speed for staying up longest.',
    },
  ],

  traps: [
    {
      mistake: 'Saying lift is greater than weight in flight.',
      why: 'An unbalanced force means acceleration. '
        + 'In steady flight, level or climbing, lift equals weight.',
    },
    {
      mistake: 'Taking equilibrium to mean stationary.',
      why: 'It means no acceleration. '
        + 'A steady climb at a constant speed is equilibrium.',
    },
    {
      mistake: 'Treating drag as one thing that always rises with speed.',
      why: 'Induced drag falls as speed rises. '
        + 'The total has a minimum at a middling speed.',
    },
    {
      mistake: 'Drawing lift and weight through the same point.',
      why: 'The centre of pressure and the centre of gravity differ, '
        + 'and the tailplane balances the moment between them. '
        + 'That is why loading matters.',
    },
  ],

  extension:
    'Lift depends on the square of the speed. '
    + 'Double the speed and the wing makes four times the lift '
    + 'at the same angle. '
    + 'That is why an aircraft taking off '
    + 'must reach a particular speed before the wing can carry it, '
    + 'and why a heavier load means a longer run. '
    + 'It is also why air density matters. '
    + 'Thinner air gives less lift at the same speed, '
    + 'so an aircraft at Tamale on a hot afternoon '
    + 'needs more runway than the same aircraft at Accra in the morning, '
    + 'with the same load.',

  figure: {
    alt: 'Two drawings. The upper one shows an aircraft in steady level '
      + 'flight with four force arrows: lift upward from the wing, '
      + 'weight downward through the centre of gravity, thrust forward '
      + 'and drag backward, with each opposing pair drawn the same '
      + 'length to show that they balance. The lower one is a graph of '
      + 'drag against speed, with parasite drag rising as a curve, '
      + 'induced drag falling as a curve, and their sum drawn above both '
      + 'with a clear lowest point, which is marked as the minimum drag '
      + 'speed and labelled as the best speed to glide.',
    svg: '<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* aircraft */
      + '<path d="M210 96h120l40 14h-40l-20 14h-70l-30-14Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M250 110l-34 36h26l26-36" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M250 96l-20-26h18l16 26" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="268" cy="106" r="4" fill="currentColor"/>'
      + '<text x="276" y="102" font-size="10" fill="currentColor">centre of gravity</text>'
      /* force arrows, equal lengths */
      + '<path d="M268 96V36" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M262 46l6-12 6 12Z" fill="#0f8a4d"/>'
      + '<text x="280" y="34" font-size="12" fill="#0f8a4d">lift</text>'
      + '<path d="M268 116v60" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M262 166l6 12 6-12Z" fill="#0f8a4d"/>'
      + '<text x="278" y="176" font-size="12" fill="#0f8a4d">weight</text>'
      + '<path d="M372 106h60" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M424 100l12 6-12 6Z" fill="currentColor"/>'
      + '<text x="440" y="110" font-size="12" fill="currentColor">thrust</text>'
      + '<path d="M196 106h-60" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M144 100l-12 6 12 6Z" fill="currentColor"/>'
      + '<text x="60" y="110" font-size="12" fill="currentColor">drag</text>'
      + '<text x="60" y="206" font-size="11" fill="#0f8a4d">each pair drawn the same length, because in steady flight they balance</text>'
      /* graph */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M80 400V250"/><path d="M80 400h480"/>'
      + '</g>'
      + '<text x="86" y="242" font-size="11" fill="currentColor">drag</text>'
      + '<text x="520" y="418" font-size="11" fill="currentColor">speed</text>'
      /* parasite rising */
      + '<path d="M80 396C220 392 360 350 540 262" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="460" y="286" font-size="11" fill="currentColor">parasite drag</text>'
      /* induced falling */
      + '<path d="M96 256C150 320 240 372 540 392" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4" fill="none"/>'
      + '<text x="104" y="250" font-size="11" fill="currentColor">induced drag</text>'
      /* total with minimum */
      + '<path d="M100 254C160 300 210 336 266 336C340 336 430 290 540 252" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="286" y="320" font-size="11" fill="#0f8a4d">total drag</text>'
      + '<path d="M266 400V342" stroke="#0f8a4d" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<text x="200" y="418" font-size="11" fill="#0f8a4d">minimum drag speed: best to glide</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each of the four forces, where it comes from and what the pilot changes it with',
      columns: ['Force', 'Produced by', 'Acts through', 'Pilot changes it with'],
      rows: [
        ['Lift', 'Air flowing over the wing', 'The centre of pressure', 'Attitude and speed, and the flaps'],
        ['Weight', 'Gravity on the whole aircraft', 'The centre of gravity', 'Loading, and fuel burned off'],
        ['Thrust', 'The propeller or the jet', 'The engine line', 'The throttle'],
        ['Drag', 'Air resisting the motion', 'Spread over the aircraft', 'Speed, and the undercarriage and flaps'],
      ],
      note: 'The acts through column is the one that explains loading. '
        + 'Lift and weight do not act through the same point, '
        + 'so the tailplane carries the difference.',
    },
  ],

  questions: [
    {
      id: 'ff-1',
      ask: 'In steady level flight, lift is:',
      kind: 'choice',
      options: [
        'Equal to weight',
        'Greater than weight',
        'Less than weight',
      ],
      answer: 'Equal to weight',
      teach: 'An unbalanced force would mean acceleration. '
        + 'Steady means not accelerating.',
      level: 3,
    },
    {
      id: 'ff-2',
      ask: 'Weight of 18000 newtons, straight and level at constant speed. '
        + 'Give the lift in newtons.',
      kind: 'numeric',
      options: [],
      answer: '18000',
      teach: 'Lift equals weight in steady level flight.',
      level: 3,
    },
    {
      id: 'ff-3',
      ask: 'Induced drag is:',
      kind: 'choice',
      options: [
        'The price of making lift, and it falls as speed rises',
        'The drag of the shape, and it rises as speed rises',
        'The same at all speeds',
      ],
      answer: 'The price of making lift, and it falls as speed rises',
      teach: 'Parasite drag is the other part, and it rises. '
        + 'The total has a minimum in between.',
      level: 5,
    },
    {
      id: 'ff-4',
      ask: 'An aircraft in a steady climb at a constant speed has:',
      kind: 'choice',
      options: [
        'Balanced forces',
        'Lift greater than weight',
        'Thrust greater than drag',
      ],
      answer: 'Balanced forces',
      teach: 'Steady means no acceleration. '
        + 'The imbalance existed only while the climb was being started.',
      level: 6,
    },
    {
      id: 'ff-5',
      ask: 'Weight acts through the:',
      kind: 'choice',
      options: [
        'Centre of gravity',
        'Centre of pressure',
        'Tailplane',
      ],
      answer: 'Centre of gravity',
      teach: 'Lift acts through the centre of pressure, '
        + 'and the tailplane balances the moment between the two.',
      level: 4,
    },
  ],
})

/* ── Aviation and Aerospace: the aerofoil and angle of attack ───────────── */

teach({
  topicId: 'aerofoil',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An aerofoil is a wing section, curved more on top than below. '
      + 'The chord line runs from the leading edge to the trailing edge. '
      + 'The angle of attack is the angle between the chord line '
      + 'and the oncoming air. '
      + 'The wing turns air downwards, '
      + 'and the reaction to that is lift. '
      + 'Lift rises with the angle of attack '
      + 'until the stall angle, about 15 degrees. '
      + 'Past it the flow separates and lift falls sharply.',
    method: [
      'Draw the chord line and the oncoming airflow.',
      'Mark the angle of attack between them.',
      'Say whether it is below or above the stall angle.',
    ],
  },

  idea:
    'An aerofoil is the cross section of a wing. '
    + 'The leading edge meets the air, '
    + 'the trailing edge is at the back, '
    + 'and the straight line between them is the chord line. '
    + 'Camber is the curve of the section, '
    + 'and most aerofoils are curved more on top than underneath. '
    + 'The angle of attack is the angle '
    + 'between the chord line and the oncoming airflow. '
    + 'It is not the same as the angle of the aircraft to the ground, '
    + 'because the air may itself be coming from below or above. '
    + 'The wing deflects the air flowing past it downwards, '
    + 'and by Newton’s third law '
    + 'the air pushes back on the wing, upwards. '
    + 'The air over the curved upper surface also travels faster '
    + 'and its pressure is lower, '
    + 'so there is less pressure above than below, '
    + 'which is the same lift described another way. '
    + 'As the angle of attack is increased, lift increases. '
    + 'At about 15 degrees, '
    + 'the flow can no longer follow the upper surface '
    + 'and breaks away from it. '
    + 'That is the stall. '
    + 'Lift falls sharply and drag rises.',

  mechanism:
    'The one thing to carry away from this lesson, '
    + 'and it is the thing most learners have backwards, '
    + 'is that a stall is about angle, not about speed. '
    + 'The wing stalls when the air can no longer follow '
    + 'the curve of its upper surface, '
    + 'and that depends on the angle it meets the air at. '
    + 'So an aircraft can stall at any speed. '
    + 'Pull hard into a turn at high speed '
    + 'and the wing is forced to a large angle to make the extra lift, '
    + 'and it will stall with the air rushing past. '
    + 'The reason the stall is usually met at low speed '
    + 'is that at low speed the wing has to work at a large angle '
    + 'to make enough lift at all, '
    + 'so it arrives at the stall angle in ordinary flight. '
    + 'Speed is the circumstance, '
    + 'and the angle is the cause, '
    + 'and a question asking what causes a stall '
    + 'is asking for the angle. '
    + 'The recovery follows from the cause '
    + 'and it is the part that has to be learned '
    + 'because it feels wrong. '
    + 'To recover, reduce the angle of attack: '
    + 'lower the nose. '
    + 'A pilot near the ground, sinking, '
    + 'wants to pull back, '
    + 'and pulling back increases the angle '
    + 'and deepens the stall. '
    + 'So the trained response is to lower the nose first '
    + 'and add power, '
    + 'losing a little height on purpose in order to fly again. '
    + 'That is why stalling is practised at height, over and over, '
    + 'until the correct move is the automatic one. '
    + 'The second mechanism is what the lift curve looks like '
    + 'and why the drop is sharp. '
    + 'While the flow follows the surface, '
    + 'lift grows almost in a straight line with the angle, '
    + 'so a small increase gives a predictable increase in lift. '
    + 'At the stall angle the flow separates, '
    + 'and separation is not gradual: '
    + 'once it begins at the trailing edge it spreads forward quickly. '
    + 'So the curve rises steadily, peaks, and then falls away, '
    + 'which is why the loss of lift is felt as a sudden sink '
    + 'and not as a gentle softening. '
    + 'Sketching that curve with the peak labelled '
    + 'answers most questions on this topic. '
    + 'Third, a caution about the explanation itself, '
    + 'because it is worth being honest with a learner. '
    + 'The popular story, '
    + 'that the air going over the top has further to travel '
    + 'and so must go faster to meet the air underneath, '
    + 'is not true: '
    + 'the two do not have to arrive together, and they do not. '
    + 'The air over the top does go faster, '
    + 'and the pressure there is lower, '
    + 'and those are measured facts. '
    + 'The reason is the way the wing turns the whole flow, '
    + 'and the simplest honest account '
    + 'is the one in the idea above: '
    + 'the wing throws air downwards, '
    + 'and the reaction pushes it up. '
    + 'Answer with that, '
    + 'and add the pressure difference as the same thing seen differently. '
    + 'Last, equipment. '
    + 'A wind tunnel shows separation beautifully and almost no school '
    + 'has one. '
    + 'But a learner can hold a thin curved card at the edge of a fan, '
    + 'or out of a moving vehicle, '
    + 'and feel lift grow with angle and then collapse, '
    + 'which is the whole lesson in the hand. '
    + 'The examinable part, the chord line, the angle, '
    + 'the curve and the recovery, '
    + 'is all paper work.',

  recap:
    'You know that a wing holds an aircraft up, '
    + 'and you have felt your hand pushed up '
    + 'when you tilt it out of a moving car. '
    + 'This gives that tilt a name and a limit.',

  method: [
    'Draw the aerofoil section, with the leading and trailing edges marked.',
    'Draw the chord line between them.',
    'Draw the oncoming airflow as an arrow towards the leading edge.',
    'Mark the angle between the chord line and that arrow.',
    'State that this, not the attitude to the ground, is the angle of attack.',
    'Say whether the angle is below or above about 15 degrees.',
    'If above, say that the flow has separated and lift has fallen.',
    'For a recovery, say: reduce the angle of attack, then add power.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the chord line and define the angle of attack.',
      steps: [
        'The chord line runs from the leading edge to the trailing edge.',
        'The angle of attack is measured from it.',
      ],
      answer: 'The chord line is the straight line from leading edge to '
        + 'trailing edge. '
        + 'The angle of attack is the angle between the chord line '
        + 'and the oncoming air.',
    },
    {
      level: 4,
      ask: 'The angle of attack is increased from 4 degrees to 10 degrees. '
        + 'Say what happens to the lift, and why.',
      steps: [
        'Both angles are below the stall angle of about 15 degrees.',
        'So the flow still follows the upper surface.',
        'More air is turned downwards, so the reaction is larger.',
      ],
      answer: 'Lift increases, almost in proportion to the angle, '
        + 'because the flow is still attached and the wing is deflecting '
        + 'more air downwards.',
    },
    {
      level: 5,
      ask: 'An aircraft stalls while flying fast in a tight turn. '
        + 'Explain how this is possible.',
      steps: [
        'A turn needs more lift than level flight, '
          + 'because the lift must also pull the aircraft round.',
        'The pilot gets it by increasing the angle of attack.',
        'A stall happens when the angle exceeds the stall angle.',
        'Speed does not prevent that.',
      ],
      answer: 'Because a stall is caused by the angle of attack, '
        + 'not by the speed. '
        + 'The hard turn forced the wing past its stall angle '
        + 'with the air still rushing past.',
    },
    {
      level: 6,
      ask: 'A pilot low on the approach feels the aircraft sinking '
        + 'and pulls back on the control column. '
        + 'Say why this is the wrong action and give the right one.',
      steps: [
        'Pulling back raises the nose and increases the angle of attack.',
        'If the sink is a stall, the angle is already too large.',
        'A larger angle separates the flow further and loses more lift.',
        'The cause must be removed: reduce the angle of attack.',
      ],
      answer: 'Pulling back deepens the stall, '
        + 'because it increases the very thing that caused it. '
        + 'The right action is to lower the nose to reduce the angle of '
        + 'attack, and add power, '
        + 'accepting a small loss of height in order to fly again. '
        + 'It feels wrong near the ground, '
        + 'which is why it is practised at height until it is automatic.',
    },
  ],

  traps: [
    {
      mistake: 'Saying a stall is caused by flying too slowly.',
      why: 'It is caused by exceeding the stall angle of attack. '
        + 'An aircraft can stall at any speed, '
        + 'and does so in a hard turn.',
    },
    {
      mistake: 'Recovering from a stall by pulling back.',
      why: 'That increases the angle of attack and deepens the stall. '
        + 'Lower the nose, then add power.',
    },
    {
      mistake: 'Confusing the angle of attack with the attitude to the '
        + 'ground.',
      why: 'The air may be coming from below or above. '
        + 'The angle is measured from the chord line to the oncoming air.',
    },
    {
      mistake: 'Explaining lift by saying the air has further to go over '
        + 'the top so it must go faster.',
      why: 'The two flows do not have to meet again, and they do not. '
        + 'Say that the wing turns air downwards and the reaction lifts '
        + 'it, with the lower pressure above as the same thing seen '
        + 'differently.',
    },
  ],

  extension:
    'Flaps and slats change the wing rather than the angle. '
    + 'Lowering a flap increases the camber, '
    + 'so the wing makes more lift at the same angle of attack, '
    + 'which lets an aircraft fly slowly enough to land. '
    + 'A slat at the leading edge '
    + 'feeds fast air over the top surface, '
    + 'which keeps the flow attached to a larger angle '
    + 'and so raises the stall angle itself. '
    + 'Both cost drag, which is why they are used for take off '
    + 'and landing and put away in the cruise.',

  figure: {
    alt: 'Two drawings. On the left an aerofoil section with its leading '
      + 'and trailing edges marked and a chord line drawn between them, '
      + 'with an arrow for the oncoming airflow and the angle between '
      + 'the two marked as the angle of attack. Streamlines over the top '
      + 'follow the surface and leave the trailing edge deflected '
      + 'downwards, with a note that the reaction to turning that air '
      + 'down is the lift. On the right a graph of lift against angle of '
      + 'attack, rising almost in a straight line to a peak at about '
      + 'fifteen degrees and then falling away sharply, with the peak '
      + 'labelled the stall angle and a small inset showing the flow '
      + 'broken away from the upper surface beyond it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* aerofoil */
      + '<path d="M60 170C110 126 200 118 268 142C210 160 130 176 60 170Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M56 174L272 144" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4" fill="none"/>'
      + '<text x="274" y="148" font-size="10" fill="currentColor">chord line</text>'
      + '<text x="30" y="192" font-size="10" fill="currentColor">leading edge</text>'
      + '<text x="238" y="170" font-size="10" fill="currentColor">trailing edge</text>'
      /* oncoming air */
      + '<path d="M300 196H70" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M78 190l-10 6 10 6Z" fill="#0f8a4d"/>'
      + '<text x="190" y="214" font-size="11" fill="#0f8a4d">oncoming air</text>'
      + '<path d="M90 194a40 40 0 0 0 26 -20" stroke="#0f8a4d" stroke-width="1" fill="none"/>'
      + '<text x="118" y="196" font-size="10" fill="#0f8a4d">angle of attack</text>'
      /* streamlines */
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M40 112C110 86 210 90 262 122C274 130 282 140 290 152"/>'
      + '<path d="M40 86C120 60 220 66 272 104C286 114 294 126 302 140"/>'
      + '</g>'
      + '<path d="M286 150l12 4-6 10Z" fill="currentColor"/>'
      + '<text x="60" y="60" font-size="11" fill="currentColor">the flow follows the top and leaves deflected downwards</text>'
      + '<text x="60" y="246" font-size="11" fill="#0f8a4d">air turned down, so the reaction on the wing is up: that is the lift</text>'
      /* graph */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M380 360V60"/><path d="M380 360h220"/>'
      + '</g>'
      + '<text x="388" y="54" font-size="11" fill="currentColor">lift</text>'
      + '<text x="520" y="382" font-size="11" fill="currentColor">angle of attack</text>'
      + '<path d="M380 352C420 310 470 190 506 122C512 112 518 110 522 120C532 150 540 210 560 250" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M514 360V124" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<text x="462" y="378" font-size="11" fill="#0f8a4d">about 15 degrees: the stall angle</text>'
      + '<text x="528" y="110" font-size="11" fill="#0f8a4d">lift falls away sharply</text>'
      + '<text x="388" y="196" font-size="11" fill="currentColor">nearly a straight</text>'
      + '<text x="388" y="212" font-size="11" fill="currentColor">line while the flow</text>'
      + '<text x="388" y="228" font-size="11" fill="currentColor">stays attached</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'What the wing does as the angle of attack is increased',
      columns: ['Angle of attack', 'The flow', 'Lift', 'Drag'],
      rows: [
        ['0 to 4 degrees', 'Attached, smooth', 'Small, rising', 'Low'],
        ['4 to 12 degrees', 'Attached', 'Rising almost in a straight line', 'Rising'],
        ['About 15 degrees', 'Beginning to separate at the back', 'At its greatest', 'High'],
        ['Beyond 15 degrees', 'Broken away from the upper surface', 'Falls sharply', 'Very high'],
      ],
      note: 'The angle decides every row, '
        + 'and the speed appears nowhere in the table. '
        + 'That is why an aircraft can stall fast.',
    },
  ],

  questions: [
    {
      id: 'af-1',
      ask: 'The angle of attack is measured between the oncoming air and '
        + 'the:',
      kind: 'choice',
      options: ['Chord line', 'Ground', 'Upper surface'],
      answer: 'Chord line',
      teach: 'Not the attitude to the ground, '
        + 'because the air may come from below or above.',
      level: 3,
    },
    {
      id: 'af-2',
      ask: 'A stall is caused by:',
      kind: 'choice',
      options: [
        'Exceeding the stall angle of attack',
        'Flying below a certain speed',
        'Losing engine power',
      ],
      answer: 'Exceeding the stall angle of attack',
      teach: 'Low speed is the usual circumstance, not the cause. '
        + 'A hard turn can stall a wing at high speed.',
      level: 5,
    },
    {
      id: 'af-3',
      ask: 'About how many degrees is the stall angle of a typical wing?',
      kind: 'numeric',
      options: [],
      answer: '15',
      teach: 'Around 15 degrees, '
        + 'after which the flow separates from the upper surface.',
      level: 4,
    },
    {
      id: 'af-4',
      ask: 'To recover from a stall, the pilot should:',
      kind: 'choice',
      options: [
        'Lower the nose to reduce the angle of attack',
        'Pull back to climb away',
        'Hold the attitude and wait',
      ],
      answer: 'Lower the nose to reduce the angle of attack',
      teach: 'Remove the cause, then add power. '
        + 'Pulling back deepens the stall, '
        + 'which is why it is practised at height.',
      level: 6,
    },
    {
      id: 'af-5',
      ask: 'Lowering a flap mainly:',
      kind: 'choice',
      options: [
        'Increases the camber, so more lift at the same angle',
        'Raises the stall angle',
        'Reduces drag',
      ],
      answer: 'Increases the camber, so more lift at the same angle',
      teach: 'A slat is the device that raises the stall angle. '
        + 'Both add drag, so both are put away in the cruise.',
      level: 6,
    },
  ],
})

/* ── Aviation and Aerospace: aviation in Ghana ───────────────────────────── */

teach({
  topicId: 'aviation-ghana',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana has one international airport, Kotoka in Accra. '
      + 'There are also airports at Kumasi, Tamale, Takoradi, '
      + 'Sunyani, Ho and Wa. '
      + 'The Ghana Civil Aviation Authority makes the rules '
      + 'and gives out the licences. '
      + 'Ghana Airports Company runs the airports. '
      + 'Airlines, ground handlers and fuel firms work inside that. '
      + 'Almost every safety job in the industry needs a licence. '
      + 'A licence needs exams, logged hours and a medical.',
    method: [
      'Name the role and what it is responsible for.',
      'Name the licence it needs and who issues it.',
      'State the subjects and the training route honestly, including the cost.',
    ],
  },

  idea:
    'Aviation in Ghana is built in layers. '
    + 'The Ghana Civil Aviation Authority is the regulator. '
    + 'It writes the rules and inspects. '
    + 'It gives out the licences that people and aircraft must hold. '
    + 'It also runs air traffic services in Ghanaian airspace. '
    + 'Ghana Airports Company Limited runs the airports. '
    + 'Kotoka International Airport is in Accra. '
    + 'The home airports are at Kumasi, Tamale, Takoradi, '
    + 'Sunyani, Ho and Wa. '
    + 'Airlines fly the aircraft. '
    + 'Home carriers fly Accra to Kumasi and Accra to Tamale. '
    + 'Foreign carriers fly the long routes. '
    + 'Around them work ground handling firms and fuel suppliers. '
    + 'So do catering firms, freight agents and repair shops. '
    + 'The Ghana Meteorological Agency gives the forecasts. '
    + 'The jobs are many. '
    + 'There is the pilot and the air traffic controller. '
    + 'There is the licensed aircraft maintenance engineer. '
    + 'There is the flight dispatcher and the cabin crew. '
    + 'There are ground handling and load control staff. '
    + 'There is aviation security and the weather officer.',

  mechanism:
    'The thing that shapes every career in this industry, '
    + 'and the thing a careers lesson usually leaves out, '
    + 'is the licence. '
    + 'In most work, a certificate helps you get a job. '
    + 'In aviation, a licence is the job: '
    + 'without the piece of paper the task is illegal, '
    + 'however well you can do it. '
    + 'A licence has three parts, and all three must be held at once. '
    + 'There are written examinations, '
    + 'on subjects set by the regulator. '
    + 'There is logged experience, '
    + 'hours flown for a pilot '
    + 'or months of supervised work for an engineer. '
    + 'And there is a medical certificate, '
    + 'renewed on a fixed cycle, '
    + 'which a pilot or a controller cannot work without. '
    + 'Every one of them expires. '
    + 'So the career is not a qualification you earn once; '
    + 'it is a set of currencies you keep topped up for forty years, '
    + 'and that is the honest shape of it. '
    + 'The second thing to be honest about is the mathematics and physics, '
    + 'because this is where a learner is misled kindly '
    + 'and then stopped at nineteen. '
    + 'A pilot needs physics and mathematics '
    + 'for the examinations in principles of flight, '
    + 'meteorology, navigation and performance: '
    + 'not deep mathematics, '
    + 'but confident work with ratios, triangles, graphs and interpolation, '
    + 'done quickly and under pressure. '
    + 'A licensed maintenance engineer needs the same plus electrical '
    + 'and materials work. '
    + 'An air traffic controller needs the mental arithmetic '
    + 'of speeds, distances and times '
    + 'held in the head while talking. '
    + 'So a learner in SHS 1 who means to go into aviation '
    + 'should be told plainly: '
    + 'keep Core Mathematics and Physics strong, '
    + 'and keep English strong too, '
    + 'because the whole industry works in English on the radio '
    + 'and a language test is part of the licence. '
    + 'Third, the cost, '
    + 'because a lesson that hides it is doing a learner harm. '
    + 'A commercial pilot licence is expensive, '
    + 'running to many tens of thousands of cedis '
    + 'and often far more if trained abroad, '
    + 'because flying hours have to be bought. '
    + 'Routes that exist: '
    + 'training in Ghana through an approved academy, '
    + 'sponsorship by an airline or by the air force, '
    + 'and the military route, '
    + 'which trains pilots and engineers at public expense '
    + 'in exchange for service. '
    + 'Other careers in the same industry '
    + 'cost far less to enter and are far less talked about. '
    + 'Air traffic control is trained and salaried from the start. '
    + 'Aircraft maintenance engineering is a technical course '
    + 'followed by supervised experience, '
    + 'and licensed engineers are in short supply across West Africa. '
    + 'Dispatch, load control, ground handling and aviation security '
    + 'are all entered with a diploma '
    + 'and all are genuine careers. '
    + 'An honest answer to a question about careers in Ghanaian aviation '
    + 'names more than the pilot, '
    + 'and says what each route actually asks of a family’s money. '
    + 'Last, the industry argument the paper likes to set, '
    + 'which is about Accra as a hub. '
    + 'Ghana sits close to the geographic centre of the world’s '
    + 'longitude and latitude lines, '
    + 'with a stable airport and a growing terminal, '
    + 'and the case for a West African hub is made on that. '
    + 'The case against is honest too: '
    + 'high fuel costs and taxes, '
    + 'competition from Lagos and Abidjan, '
    + 'and the fact that a hub needs a strong home airline '
    + 'to feed it. '
    + 'A learner who can state both sides, '
    + 'with one fact on each, '
    + 'is doing what the question asks.',

  recap:
    'You have seen an aircraft overhead '
    + 'and perhaps been through Kotoka. '
    + 'This asks who is responsible for each part of what you saw, '
    + 'and what it takes to be one of those people.',

  method: [
    'Name the layer: regulator, airport operator, airline, or service company.',
    'Say what that layer is responsible for.',
    'For a career, name the role and the licence it needs.',
    'Name who issues the licence and what the licence requires.',
    'State the school subjects that matter for it.',
    'State the training route, in Ghana or abroad.',
    'State the cost honestly, and any sponsored or salaried route.',
    'For a question about the industry, give one fact for and one against.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name Ghana’s international airport and three domestic airports.',
      steps: [
        'The international one is in Accra.',
        'Domestic airports serve the regions.',
      ],
      answer: 'Kotoka International Airport in Accra, '
        + 'with domestic airports at Kumasi, Tamale and Takoradi, '
        + 'and others at Sunyani, Ho and Wa.',
    },
    {
      level: 4,
      ask: 'Who regulates aviation in Ghana, and who operates the airports?',
      steps: [
        'Regulation, inspection and licensing is one job.',
        'Running the terminals and runways is another.',
      ],
      answer: 'The Ghana Civil Aviation Authority regulates and licenses, '
        + 'and also provides air traffic services. '
        + 'Ghana Airports Company Limited operates the airports.',
    },
    {
      level: 5,
      ask: 'Explain why a licence, rather than a certificate, '
        + 'governs an aviation career, and give its three parts.',
      steps: [
        'A safety critical task may only be done by a licensed person.',
        'Examinations set by the regulator.',
        'Logged experience: hours flown, or supervised months worked.',
        'A medical certificate, renewed on a cycle.',
        'All three must be current at the same time.',
      ],
      answer: 'Because without the licence the work is illegal, '
        + 'however skilled the person. '
        + 'Examinations, logged experience and a current medical, '
        + 'all held at once and all renewed, '
        + 'which makes it a career of keeping qualifications current '
        + 'rather than earning one.',
    },
    {
      level: 6,
      ask: 'A learner in SHS 1 wants a career in aviation '
        + 'but the family cannot afford pilot training. '
        + 'Advise them honestly.',
      steps: [
        'Say plainly that a commercial pilot licence is expensive, '
          + 'because flying hours must be bought.',
        'Name the routes that do not need family money: '
          + 'airline or air force sponsorship, and the military route.',
        'Name the careers that are trained and salaried or need only a '
          + 'diploma: air traffic control, aircraft maintenance '
          + 'engineering, dispatch, load control, ground handling, '
          + 'aviation security, meteorology.',
        'Say which subjects to keep strong: '
          + 'Core Mathematics, Physics and English.',
      ],
      answer: 'Keep Mathematics, Physics and English strong, '
        + 'because every licence route tests them '
        + 'and the radio work is in English. '
        + 'Then aim first at a route that does not have to be bought: '
        + 'air traffic control and licensed aircraft maintenance '
        + 'engineering are both real careers in short supply in West '
        + 'Africa, and both are entered by examination and training '
        + 'rather than by paying for hours. '
        + 'Pilot training can still follow later, '
        + 'from inside the industry and on an industry salary.',
    },
  ],

  traps: [
    {
      mistake: 'Treating aviation careers as pilot and cabin crew only.',
      why: 'Controllers, licensed engineers, dispatchers, load controllers '
        + 'and meteorological officers are all needed, '
        + 'and several are easier to enter.',
    },
    {
      mistake: 'Confusing the regulator with the airport operator.',
      why: 'The Civil Aviation Authority licenses and inspects. '
        + 'Ghana Airports Company runs the airports.',
    },
    {
      mistake: 'Saying a licence is held for life.',
      why: 'Every part of it expires: the medical, the currency, '
        + 'the ratings. '
        + 'The career is keeping them current.',
    },
    {
      mistake: 'Leaving the cost of pilot training out of careers advice.',
      why: 'A learner who plans on it and cannot pay '
        + 'loses years. '
        + 'Name the sponsored and salaried routes at the same time.',
    },
  ],

  extension:
    'Aviation has world rules as well as national ones. '
    + 'Ghana belongs to the International Civil Aviation Organization. '
    + 'It sets standards, and member states write them into their own '
    + 'rules. '
    + 'So a licence given in Ghana can be changed over elsewhere. '
    + 'So too an accident is looked into the same way '
    + 'in every member country. '
    + 'It is also why the language of the air is English everywhere. '
    + 'That is a real gain for a Ghanaian entering the industry.',

  figure: {
    alt: 'A chart of who is responsible for one flight, drawn as four '
      + 'layers. At the top the Ghana Civil Aviation Authority is shown '
      + 'as the regulator, with arrows down to everything below, '
      + 'labelled licences, rules and inspection. Below it Ghana '
      + 'Airports Company is shown operating the runway and terminal. '
      + 'Below that the airline is shown operating the aircraft, with '
      + 'the flight crew and the cabin crew under it. At the bottom a '
      + 'row of service companies is shown: ground handling, fuelling, '
      + 'maintenance and catering. Air traffic control and the '
      + 'meteorological agency are drawn to one side, serving the flight '
      + 'at every stage.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* regulator */
      + '<rect x="130" y="30" width="300" height="48" rx="8" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="146" y="52" font-size="13" fill="#0f8a4d">Ghana Civil Aviation Authority</text>'
      + '<text x="146" y="70" font-size="11" fill="#0f8a4d">licences, rules, inspection, air traffic services</text>'
      /* arrows down */
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M180 78v34"/><path d="M280 78v34"/><path d="M380 78v34"/>'
      + '</g>'
      + '<path d="M174 104l6 10 6-10Z" fill="#0f8a4d"/>'
      + '<path d="M274 104l6 10 6-10Z" fill="#0f8a4d"/>'
      + '<path d="M374 104l6 10 6-10Z" fill="#0f8a4d"/>'
      /* airport operator */
      + '<rect x="130" y="114" width="300" height="44" rx="8" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="146" y="134" font-size="12" fill="currentColor">Ghana Airports Company</text>'
      + '<text x="146" y="151" font-size="11" fill="currentColor">runway, terminal, fire service</text>'
      /* airline */
      + '<rect x="130" y="176" width="300" height="44" rx="8" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="146" y="196" font-size="12" fill="currentColor">the airline</text>'
      + '<text x="146" y="213" font-size="11" fill="currentColor">flight crew, cabin crew, dispatch, load control</text>'
      /* services */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="40" y="248" width="130" height="44" rx="6"/>'
      + '<rect x="186" y="248" width="130" height="44" rx="6"/>'
      + '<rect x="332" y="248" width="130" height="44" rx="6"/>'
      + '<rect x="478" y="248" width="120" height="44" rx="6"/>'
      + '</g>'
      + '<text x="50" y="268" font-size="11" fill="currentColor">ground handling</text>'
      + '<text x="50" y="284" font-size="10" fill="currentColor">bags, steps, pushback</text>'
      + '<text x="196" y="268" font-size="11" fill="currentColor">fuelling</text>'
      + '<text x="342" y="268" font-size="11" fill="currentColor">maintenance</text>'
      + '<text x="342" y="284" font-size="10" fill="currentColor">licensed engineers</text>'
      + '<text x="488" y="268" font-size="11" fill="currentColor">catering, freight</text>'
      /* side services */
      + '<rect x="470" y="114" width="140" height="106" rx="8" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4" fill="none"/>'
      + '<text x="480" y="136" font-size="11" fill="currentColor">air traffic control</text>'
      + '<text x="480" y="156" font-size="11" fill="currentColor">and the</text>'
      + '<text x="480" y="176" font-size="11" fill="currentColor">Meteorological</text>'
      + '<text x="480" y="196" font-size="11" fill="currentColor">Agency serve the</text>'
      + '<text x="480" y="214" font-size="11" fill="currentColor">flight throughout</text>'
      + '<text x="40" y="330" font-size="12" fill="#0f8a4d">every safety job in every box above needs a licence, and the licence must be kept current</text>'
      + '<text x="40" y="354" font-size="12" fill="currentColor">so the career is not one qualification earned, but several kept up for a working lifetime</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Careers in Ghanaian aviation, with what each actually asks of you',
      columns: ['Role', 'What it does', 'Licence or qualification', 'Subjects that matter', 'Cost to enter'],
      rows: [
        ['Pilot', 'Flies the aircraft', 'Commercial pilot licence with ratings', 'Mathematics, Physics, English', 'High; hours must be bought'],
        ['Air traffic controller', 'Separates aircraft, by radio and radar', 'Controller licence with ratings', 'Mathematics, English', 'Trained and salaried'],
        ['Maintenance engineer', 'Inspects and certifies the aircraft', 'Aircraft maintenance engineer licence', 'Mathematics, Physics, technical subjects', 'Moderate; in short supply'],
        ['Flight dispatcher', 'Plans fuel, load and route', 'Dispatcher licence', 'Mathematics, Geography, English', 'Moderate'],
        ['Load controller', 'Works out weight and balance', 'Company training and certification', 'Mathematics', 'Low'],
        ['Meteorological officer', 'Forecasts for the flight', 'Degree or diploma in meteorology', 'Physics, Mathematics, Geography', 'Moderate'],
      ],
      note: 'The last two columns are the ones careers talks leave out. '
        + 'Three of these roles are trained and paid from the start.',
    },
  ],

  questions: [
    {
      id: 'ag-1',
      ask: 'Ghana’s international airport is:',
      kind: 'choice',
      options: [
        'Kotoka, in Accra',
        'Tamale',
        'Takoradi',
      ],
      answer: 'Kotoka, in Accra',
      teach: 'The others are domestic, '
        + 'along with Kumasi, Sunyani, Ho and Wa.',
      level: 3,
    },
    {
      id: 'ag-2',
      ask: 'Licences for pilots and engineers in Ghana are issued by:',
      kind: 'choice',
      options: [
        'The Ghana Civil Aviation Authority',
        'Ghana Airports Company',
        'The airline that employs them',
      ],
      answer: 'The Ghana Civil Aviation Authority',
      teach: 'It is the regulator. '
        + 'Ghana Airports Company operates the airports.',
      level: 4,
    },
    {
      id: 'ag-3',
      ask: 'How many parts must an aviation licence hold at once: '
        + 'examinations, logged experience and a medical?',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'And every one of them expires, '
        + 'so the career is keeping them current.',
      level: 5,
    },
    {
      id: 'ag-4',
      ask: 'Which aviation career is usually trained and salaried from '
        + 'the start?',
      kind: 'choice',
      options: [
        'Air traffic controller',
        'Commercial pilot',
        'Cabin crew',
      ],
      answer: 'Air traffic controller',
      teach: 'Pilot training must largely be bought, '
        + 'because flying hours cost money.',
      level: 6,
    },
    {
      id: 'ag-5',
      ask: 'Why does English matter for an aviation licence?',
      kind: 'choice',
      options: [
        'Radio work worldwide is in English and a language test is part of the licence',
        'All the textbooks are English',
        'It is a school requirement only',
      ],
      answer: 'Radio work worldwide is in English and a language test is part of the licence',
      teach: 'Standards agreed internationally set the language of the air, '
        + 'which is an advantage for a Ghanaian entering the industry.',
      level: 5,
    },
  ],
})

/* ── Applied Technology: wood, metal and plastics ────────────────────────── */

teach({
  topicId: 'wood-metal-plastic',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Choose a material from what the job asks of it. '
      + 'Timber is strong along the grain and weak across it. '
      + 'Hardwood and softwood is a botanical division, '
      + 'not a statement of hardness. '
      + 'Ferrous metals contain iron, rust, and are magnetic. '
      + 'Non ferrous metals do not rust and are not magnetic. '
      + 'A thermoplastic softens again when heated; '
      + 'a thermosetting plastic does not, ever.',
    method: [
      'List what the job demands: strength, stiffness, weather, cost.',
      'Name a material whose properties meet each demand.',
      'Say how it will be worked and how it will be joined.',
    ],
  },

  idea:
    'Materials are chosen by their properties. '
    + 'Strength is the load a material carries before it fails. '
    + 'Stiffness is how little it bends under load. '
    + 'Toughness is its resistance to a sudden blow. '
    + 'Hardness is its resistance to being scratched or dented. '
    + 'Ductility is how far it can be drawn out without breaking. '
    + 'Durability is how it stands up to weather, water and insects. '
    + 'Timber is cut from a tree, so it has a grain. '
    + 'It is strong along the grain and weak across it. '
    + 'Hardwoods come from broad leaved trees, such as odum and mahogany, '
    + 'and softwoods from needle leaved trees, such as pine. '
    + 'The names are botanical: '
    + 'balsa is a hardwood and is very soft. '
    + 'Metals divide into ferrous, which contain iron, '
    + 'such as mild steel and cast iron, '
    + 'and non ferrous, which do not, '
    + 'such as aluminium, copper and brass. '
    + 'Ferrous metals rust and are attracted to a magnet. '
    + 'Plastics divide into thermoplastics, '
    + 'which soften whenever they are heated, '
    + 'and thermosetting plastics, '
    + 'which set once and then char rather than soften.',

  mechanism:
    'Three distinctions decide almost every choice, '
    + 'and each one is a decision you can test. '
    + 'The first is grain direction, '
    + 'which is why a timber part can be the right size '
    + 'and still fail. '
    + 'Wood is strong along the grain because its fibres run that way, '
    + 'and weak across it because across the grain '
    + 'you are only pulling fibres apart from each other. '
    + 'So a chair leg with the grain running along its length is sound, '
    + 'and the same leg cut so that the grain runs across it '
    + 'will snap under a sideways load at a fraction of the force. '
    + 'This is also why a mortice is cut with its long side along the '
    + 'grain, '
    + 'and why a wide board shrinks across its width as it dries '
    + 'and almost not at all along its length, '
    + 'which is the cause of nearly every split tabletop in Ghana: '
    + 'the board was fixed down rigidly across the grain '
    + 'and then had nowhere to move. '
    + 'The practical rule is to let a wide board move across its width, '
    + 'and never to glue it rigidly to something that will not move with it. '
    + 'The second distinction is ferrous against non ferrous, '
    + 'and the test is free: '
    + 'a magnet. '
    + 'Ferrous metal sticks to a magnet and rusts in Ghanaian humidity '
    + 'within weeks if it is left bare. '
    + 'Non ferrous metal does neither, '
    + 'which is why a roofing nail, a water tank fitting '
    + 'or anything near the sea is specified in a non ferrous metal '
    + 'or is galvanised. '
    + 'Galvanising is a zinc coat, '
    + 'and it works because the zinc corrodes instead of the steel '
    + 'so long as any zinc is left, '
    + 'which is why a scratch in galvanised sheet does not start a rust '
    + 'patch the way a scratch in paint does. '
    + 'Saying that is worth more than saying galvanising stops rust. '
    + 'The third distinction is thermoplastic against thermosetting, '
    + 'and it decides repair and recycling, '
    + 'which is why it is now examined. '
    + 'A thermoplastic such as polythene or PVC '
    + 'softens every time it is heated. '
    + 'So a PVC pipe can be warmed and bent, '
    + 'a cracked plastic chair can sometimes be welded with heat, '
    + 'and the material can be ground up and moulded again, '
    + 'which is why plastic bottle collection in Accra has a value at all. '
    + 'A thermosetting plastic such as the resin in an electrical fitting '
    + 'has formed permanent links when it cured. '
    + 'Heat it and it chars and gives off fumes '
    + 'rather than softening. '
    + 'So it cannot be reshaped, cannot be heat welded, '
    + 'and cannot be melted down and used again. '
    + 'That single property is why the handle of a cooking pot '
    + 'is a thermoset and the pot’s storage box is a thermoplastic, '
    + 'and it is the right answer to a question '
    + 'about why one plastic can be recycled and another cannot. '
    + 'Last, honesty about the workshop. '
    + 'Identifying a material, choosing one for a job, '
    + 'and justifying the choice from properties '
    + 'is all paper work and is where the marks are. '
    + 'A magnet, a few offcuts and a bucket of water '
    + 'let a school do real identification tests for nothing. '
    + 'What needs a workshop is the feel of each material under a tool: '
    + 'how mild steel files and cast iron crumbles, '
    + 'how a hardwood tears if you plane against the grain. '
    + 'A school without one should say so, '
    + 'and should get offcuts from a local carpenter or welder, '
    + 'which costs nothing and teaches a great deal.',

  recap:
    'You have handled wood, metal and plastic, '
    + 'and you know a cutlass is harder than a stick. '
    + 'This asks why each material is used where it is, '
    + 'in words a drawing can be specified in.',

  method: [
    'Write down what the part must do and where it will live.',
    'List the properties that demands: strength, stiffness, toughness, weather.',
    'Name a candidate material for each demand.',
    'Check the grain direction if it is timber.',
    'Check with a magnet whether a metal is ferrous, and ask about rust.',
    'For plastic, ask whether it must be reshaped, repaired or recycled.',
    'Check the cost and whether it can be bought locally.',
    'State the choice with the property that decided it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How would you tell a ferrous metal from a non ferrous one '
        + 'with no instruments?',
      steps: [
        'Ferrous metals contain iron.',
        'Iron is attracted to a magnet.',
      ],
      answer: 'Hold a magnet to it. '
        + 'If it sticks, it is ferrous, '
        + 'and it will rust if left bare.',
    },
    {
      level: 4,
      ask: 'Why is balsa called a hardwood when it is very soft?',
      steps: [
        'Hardwood and softwood is a botanical division.',
        'Hardwoods come from broad leaved trees.',
        'Balsa is a broad leaved tree.',
      ],
      answer: 'Because the names describe the kind of tree, '
        + 'not the hardness of the wood. '
        + 'Some softwoods, such as yew, are harder than some hardwoods.',
    },
    {
      level: 5,
      ask: 'A tabletop made of a wide board splits along its length '
        + 'a few months after it was screwed firmly to a frame. '
        + 'Explain and give the fix.',
      steps: [
        'Timber shrinks across the grain as it dries, '
          + 'and hardly at all along it.',
        'The screws held the board rigidly at both edges.',
        'The board tried to shrink across its width and could not move.',
        'The stress had to go somewhere, so the board split.',
      ],
      answer: 'It was held so that it could not move across the grain. '
        + 'Fix the board with slotted holes or buttons '
        + 'that let it move across its width while holding it down.',
    },
    {
      level: 6,
      ask: 'Say why a PVC pipe can be heated and bent '
        + 'while the plastic body of an electrical socket cannot, '
        + 'and what this means for recycling.',
      steps: [
        'PVC is a thermoplastic: its chains are not linked permanently.',
        'Heat loosens them, so it softens and can be reshaped, '
          + 'and it hardens again on cooling.',
        'The socket body is a thermosetting plastic: '
          + 'curing formed permanent links between the chains.',
        'Heating cannot undo those links, so it chars instead.',
      ],
      answer: 'Because one has permanent links between its chains '
        + 'and the other does not. '
        + 'So the thermoplastic can be bent, heat welded, '
        + 'ground up and moulded again, '
        + 'which is why collected plastic bottles have a value, '
        + 'while the thermoset can only be buried or burned.',
    },
  ],

  traps: [
    {
      mistake: 'Taking hardwood to mean hard.',
      why: 'It is a botanical division. '
        + 'Balsa is a hardwood and is softer than most softwoods.',
    },
    {
      mistake: 'Ignoring grain direction when cutting a part.',
      why: 'Timber is weak across the grain. '
        + 'A leg with the grain running across it snaps under a sideways '
        + 'load.',
    },
    {
      mistake: 'Fixing a wide board rigidly along both edges.',
      why: 'It shrinks across its width as it dries, '
        + 'and if it cannot move it splits.',
    },
    {
      mistake: 'Treating all plastics as recyclable.',
      why: 'A thermoset cannot be melted again, '
        + 'because curing made permanent links. '
        + 'Only thermoplastics can be reground and moulded.',
    },
  ],

  extension:
    'Many parts are now made from a composite, '
    + 'which is two materials used together '
    + 'so that each does what the other cannot. '
    + 'Reinforced concrete is the familiar one: '
    + 'concrete is strong in compression and weak in tension, '
    + 'steel is strong in tension, '
    + 'so the steel goes where the tension is, '
    + 'in the bottom of a beam. '
    + 'Glass reinforced plastic is the same idea: '
    + 'glass fibres carry the tension '
    + 'and the resin holds them in place and keeps water out. '
    + 'This is why a composite part must be made with the fibres '
    + 'lying along the load, '
    + 'which is the grain direction argument all over again.',

  figure: {
    alt: 'Two drawings about grain direction. On the left a timber leg '
      + 'is drawn with its grain lines running along its length, with a '
      + 'sideways load arrow and a note that the fibres run along the '
      + 'load path so it is strong. On the right the same leg is drawn '
      + 'with the grain lines running across it, with the same load '
      + 'arrow and a crack starting between two fibres, noted as the '
      + 'weak direction because the load is only pulling fibres apart '
      + 'from each other. Beneath, a wide board is shown with arrows at '
      + 'its edges marking shrinkage across the width and a note that '
      + 'the length hardly changes, with a slotted fixing drawn to let '
      + 'the board move.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* strong leg */
      + '<rect x="60" y="40" width="70" height="170" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.7" fill="none">'
      + '<path d="M74 40v170"/><path d="M88 40v170"/><path d="M102 40v170"/><path d="M116 40v170"/>'
      + '</g>'
      + '<path d="M190 70h-54" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M144 64l-10 6 10 6Z" fill="#0f8a4d"/>'
      + '<text x="150" y="58" font-size="11" fill="#0f8a4d">load</text>'
      + '<text x="40" y="236" font-size="12" fill="currentColor">grain along the length:</text>'
      + '<text x="40" y="254" font-size="12" fill="#0f8a4d">strong, the fibres carry it</text>'
      /* weak leg */
      + '<rect x="330" y="40" width="70" height="170" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.7" fill="none">'
      + '<path d="M330 58h70"/><path d="M330 78h70"/><path d="M330 98h70"/>'
      + '<path d="M330 118h70"/><path d="M330 138h70"/><path d="M330 158h70"/><path d="M330 178h70"/>'
      + '</g>'
      + '<path d="M460 70h-54" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M414 64l-10 6 10 6Z" fill="#0f8a4d"/>'
      + '<text x="420" y="58" font-size="11" fill="#0f8a4d">load</text>'
      + '<path d="M330 88l24 6-20 6 22 6" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="310" y="236" font-size="12" fill="currentColor">grain across it:</text>'
      + '<text x="310" y="254" font-size="12" fill="#0f8a4d">weak, the load only pulls fibres apart</text>'
      /* board shrinkage */
      + '<rect x="60" y="296" width="400" height="56" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.6" fill="none">'
      + '<path d="M60 310h400"/><path d="M60 324h400"/><path d="M60 338h400"/>'
      + '</g>'
      + '<path d="M40 296v56" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M34 306l6-10 6 10Z" fill="#0f8a4d"/>'
      + '<path d="M34 342l6 10 6-10Z" fill="#0f8a4d"/>'
      + '<text x="474" y="320" font-size="11" fill="#0f8a4d">shrinks across the width</text>'
      + '<text x="474" y="338" font-size="11" fill="currentColor">length hardly changes</text>'
      /* slotted fixing */
      + '<rect x="200" y="314" width="36" height="14" rx="7" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="150" y="382" font-size="11" fill="currentColor">a slotted hole holds the board down and still lets it move across its width</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The common materials, with the property that decides their use',
      columns: ['Material', 'Key property', 'Weakness', 'A job it suits'],
      rows: [
        ['Odum or mahogany', 'Strong, durable, works well', 'Costly; weak across the grain', 'Furniture, doors, window frames'],
        ['Mild steel', 'Strong, cheap, welds and bends', 'Rusts quickly if bare', 'Gates, frames, brackets'],
        ['Cast iron', 'Hard, takes compression, damps vibration', 'Brittle; cracks under a blow', 'Machine bases, mortar pans, grinding plates'],
        ['Aluminium', 'Light, does not rust, conducts heat', 'Soft; harder to weld', 'Roofing sheet, cooking pots, window sections'],
        ['PVC, a thermoplastic', 'Cheap, waterproof, bends when heated', 'Softens in strong sun; low strength', 'Pipes, conduit, guttering'],
        ['Phenolic resin, a thermoset', 'Keeps shape when hot, insulates', 'Brittle; cannot be reshaped or recycled', 'Electrical fittings, pot handles'],
      ],
      note: 'The weakness column is where a wrong choice shows up. '
        + 'Read it before deciding, '
        + 'because every one of these materials is wrong somewhere.',
    },
  ],

  questions: [
    {
      id: 'wm-1',
      ask: 'A metal sticks to a magnet. It is:',
      kind: 'choice',
      options: ['Ferrous', 'Non ferrous', 'A thermoplastic'],
      answer: 'Ferrous',
      teach: 'It contains iron, so it will also rust if left bare.',
      level: 3,
    },
    {
      id: 'wm-2',
      ask: 'Hardwood and softwood describe:',
      kind: 'choice',
      options: [
        'The kind of tree, not the hardness',
        'How hard the wood is',
        'Whether it floats',
      ],
      answer: 'The kind of tree, not the hardness',
      teach: 'Hardwoods are broad leaved. '
        + 'Balsa is a hardwood and is very soft.',
      level: 4,
    },
    {
      id: 'wm-3',
      ask: 'Timber is weakest:',
      kind: 'choice',
      options: [
        'Across the grain',
        'Along the grain',
        'At its ends',
      ],
      answer: 'Across the grain',
      teach: 'Across it you are only pulling fibres apart from each other.',
      level: 4,
    },
    {
      id: 'wm-4',
      ask: 'A plastic that chars rather than softening when heated is:',
      kind: 'choice',
      options: ['Thermosetting', 'A thermoplastic', 'A composite'],
      answer: 'Thermosetting',
      teach: 'Curing made permanent links between its chains, '
        + 'so it cannot be reshaped or recycled.',
      level: 5,
    },
    {
      id: 'wm-5',
      ask: 'Why does a scratch in galvanised sheet not start a rust patch?',
      kind: 'choice',
      options: [
        'The zinc corrodes instead of the steel',
        'Zinc is harder than steel',
        'The scratch seals itself',
      ],
      answer: 'The zinc corrodes instead of the steel',
      teach: 'It protects while any zinc remains, '
        + 'which paint cannot do once it is broken.',
      level: 6,
    },
  ],
})

/* ── Applied Technology: marking out and measuring ───────────────────────── */

teach({
  topicId: 'marking-measuring-at',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Choose one flat face and one straight edge as datums, '
      + 'and mark everything from them. '
      + 'Never measure from the last mark, '
      + 'because then the errors add up. '
      + 'Mark metal with a scriber and wood with a sharp pencil. '
      + 'Check a try square by reversing it. '
      + 'Cut on the waste side of the line, '
      + 'because the saw itself takes a thickness.',
    method: [
      'Square and mark the datum face and the datum edge.',
      'Measure every dimension from the datum.',
      'Mark the waste side so you know which side to cut.',
    ],
  },

  idea:
    'Marking out is setting out the lines a part will be made to. '
    + 'A datum face is the one flat surface everything is measured from, '
    + 'and a datum edge is the one straight edge at right angles to it. '
    + 'They are chosen first, marked, '
    + 'and never changed during the job. '
    + 'A steel rule measures length. '
    + 'A try square tests and marks a right angle to the datum edge. '
    + 'A marking gauge scribes a line parallel to an edge in wood. '
    + 'A scriber marks a fine line on metal, '
    + 'and a sharp pencil marks wood. '
    + 'An odd leg caliper marks a line parallel to an edge in metal. '
    + 'A centre punch makes a small dent so a drill cannot wander. '
    + 'Dividers scribe circles and step off equal distances. '
    + 'A surface plate with a scribing block '
    + 'marks lines at a set height from the datum face. '
    + 'The waste side is the side of the line that will be cut away, '
    + 'and it is marked with light shading so it cannot be forgotten.',

  mechanism:
    'The whole of accurate marking out is one decision, '
    + 'made before any line is drawn: '
    + 'where you measure from. '
    + 'Suppose five lines are to be 30 millimetres apart along a bar. '
    + 'Measure 30 from the end, mark, '
    + 'then 30 from that mark, '
    + 'then 30 from the next, and so on. '
    + 'Each measurement is good to about a quarter of a millimetre, '
    + 'which is honest work with a rule. '
    + 'But the second mark inherits the error of the first, '
    + 'the third inherits both, '
    + 'and the fifth may be a full millimetre out '
    + 'while every single measurement was accurate. '
    + 'Now mark the same five lines as 30, 60, 90, 120 and 150 '
    + 'from the datum edge. '
    + 'Each line carries its own quarter millimetre and nothing else. '
    + 'Nothing changed but where the rule was held, '
    + 'and the work went from a millimetre out to a quarter. '
    + 'This is the same argument as dimensioning from a datum '
    + 'on an engineering drawing, '
    + 'and the two lessons are the same idea at two ends of the job: '
    + 'the drawing says measure from here, '
    + 'and marking out does it. '
    + 'The second mechanism is the thickness of the line itself. '
    + 'A pencil line is about half a millimetre wide '
    + 'and a saw cut is a millimetre or more. '
    + 'So the line is not where the cut goes; '
    + 'the line is the finished size, '
    + 'and the cut goes beside it, on the waste side. '
    + 'Cut down the middle of the line and the part is half a line short. '
    + 'Cut on the wrong side and it is a whole line and a cut short, '
    + 'which is why the waste is shaded before any cutting starts. '
    + 'For the same reason a scriber is used on metal rather than a pencil: '
    + 'it leaves a line a tenth as wide, '
    + 'and when the tolerance is a few tenths of a millimetre '
    + 'the width of your own mark is part of the error. '
    + 'The third is the try square, '
    + 'and it is worth knowing because a square is trusted blindly. '
    + 'A square that has been dropped may no longer be square, '
    + 'and nothing about it looks wrong. '
    + 'The test is free: '
    + 'hold it against the datum edge and draw a line, '
    + 'then turn the square over '
    + 'and draw a line from the same point. '
    + 'If the two lines lie on top of each other the square is true. '
    + 'If they open into a narrow V, the square is out, '
    + 'and it is out by half the angle of the V. '
    + 'A learner who knows that test will never mark a day’s work '
    + 'from a bent square. '
    + 'Last, the honest note. '
    + 'Choosing a datum, working out dimensions from it, '
    + 'and naming the tool for each line '
    + 'is paper work, and it is examinable. '
    + 'The tools themselves are cheap: '
    + 'a rule, a try square, a scriber, a punch and a gauge '
    + 'can be bought for a class for very little, '
    + 'and that is the one place in this block '
    + 'where a school really can equip itself. '
    + 'What cannot be learned on paper '
    + 'is the habit of checking: '
    + 'reversing the square, feeling the gauge run on the edge. '
    + 'Mark out one piece badly and measure the result, '
    + 'and the lesson sticks for good.',

  recap:
    'You have measured with a rule and drawn a straight line. '
    + 'This asks something harder: '
    + 'where to measure from, so that the tenth line '
    + 'is as accurate as the first.',

  method: [
    'Check the material is flat and the chosen edge is straight.',
    'Mark the datum face and the datum edge clearly.',
    'Check the try square by drawing a line and reversing it.',
    'Work out every dimension as a distance from the datum.',
    'Measure and mark each one from the datum, not from the mark before.',
    'Use a scriber on metal and a sharp pencil on wood.',
    'Shade the waste side of every line.',
    'Centre punch any hole before drilling it.',
    'Check two or three key dimensions again before cutting.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is a datum face, and why is one chosen before marking '
        + 'begins?',
      steps: [
        'It is the one flat surface everything is measured from.',
        'If it changes part way through, the dimensions no longer agree.',
      ],
      answer: 'The reference surface for the whole job. '
        + 'It is chosen first and never changed, '
        + 'so that every dimension means the same thing.',
    },
    {
      level: 4,
      ask: 'Five lines are to be 30 millimetres apart. '
        + 'Give the dimensions you would mark from a datum edge.',
      steps: [
        'Add 30 each time, measured from the datum.',
      ],
      answer: '30, 60, 90, 120 and 150 millimetres, '
        + 'each measured from the datum edge. '
        + 'Never 30 from the last mark.',
    },
    {
      level: 5,
      ask: 'Each measurement with a rule is good to about 0.25 '
        + 'millimetres. '
        + 'Give the worst error at the fifth mark, '
        + 'chained and from a datum.',
      steps: [
        'Chained: the fifth mark inherits all five errors.',
        '5 times 0.25 is 1.25 millimetres.',
        'From a datum: the fifth mark carries only its own error.',
      ],
      answer: 'About 1.25 millimetres chained, '
        + 'and about 0.25 millimetres from a datum. '
        + 'The measurements were equally good in both cases; '
        + 'only the reference changed.',
    },
    {
      level: 6,
      ask: 'A learner marks a 100 millimetre piece, saws down the middle '
        + 'of the line with a saw whose cut is 1.2 millimetres wide, '
        + 'and finds the piece short. '
        + 'Explain the arithmetic and give the rule.',
      steps: [
        'The pencil line is about 0.5 millimetres wide, '
          + 'and the finished size is at the line.',
        'Sawing down the middle removes half the line, '
          + 'about 0.25 millimetres, from the piece.',
        'The saw cut itself takes 1.2 millimetres, '
          + 'and half of that came off the piece as well.',
        'So the piece is short by roughly 0.6 to 0.9 millimetres.',
      ],
      answer: 'The piece came out about three quarters of a millimetre '
        + 'short because part of the line and part of the saw cut '
        + 'were taken from it. '
        + 'The rule is to cut on the waste side of the line, '
        + 'leaving the line itself on the piece, '
        + 'which is why the waste is shaded before cutting begins.',
    },
  ],

  traps: [
    {
      mistake: 'Measuring each mark from the one before it.',
      why: 'The errors add along the chain. '
        + 'Measure every mark from the datum.',
    },
    {
      mistake: 'Changing the datum part way through a job.',
      why: 'Dimensions taken from two references cannot agree. '
        + 'Choose one face and one edge and keep them.',
    },
    {
      mistake: 'Sawing down the middle of the line.',
      why: 'The line is the finished size. '
        + 'Cut on the waste side, or the part comes out short.',
    },
    {
      mistake: 'Trusting a try square without testing it.',
      why: 'A dropped square can be out and still look right. '
        + 'Draw a line, reverse the square, and see if the lines agree.',
    },
  ],

  extension:
    'Some work must be right to a few hundredths of a millimetre. '
    + 'There, marking out is dropped altogether. '
    + 'A machine is set to the datum once. '
    + 'After that every cut is placed by the machine’s own scales, '
    + 'or by its program. '
    + 'No line is ever drawn and no eye ever judges a mark. '
    + 'That is what a numerically controlled machine is doing. '
    + 'It is the datum argument taken to its end: '
    + 'measure everything from one place, '
    + 'and let nothing inherit anything.',

  figure: {
    alt: 'A rectangular plate marked out two ways. In the upper plate '
      + 'five lines are chained, each measured thirty millimetres from '
      + 'the line before it, and a note shows the worst error growing '
      + 'from a quarter of a millimetre at the first line to over a '
      + 'millimetre at the fifth. In the lower plate the same five lines '
      + 'are measured thirty, sixty, ninety, one hundred and twenty and '
      + 'one hundred and fifty from a datum edge marked heavily at the '
      + 'left, with the datum face hatched along the bottom, and a note '
      + 'shows every line carrying only a quarter of a millimetre. A '
      + 'detail at the side shows a cut line with the waste side shaded '
      + 'and the saw cut placed beside the line rather than on it.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* chained plate */
      + '<rect x="50" y="40" width="340" height="70" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M110 40v70"/><path d="M170 40v70"/><path d="M230 40v70"/>'
      + '<path d="M290 40v70"/><path d="M350 40v70"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M50 120v16"/><path d="M110 120v16"/><path d="M170 120v16"/>'
      + '<path d="M230 120v16"/><path d="M290 120v16"/><path d="M350 120v16"/>'
      + '<path d="M50 130h60"/><path d="M110 130h60"/><path d="M170 130h60"/>'
      + '<path d="M230 130h60"/><path d="M290 130h60"/>'
      + '</g>'
      + '<text x="68" y="126" font-size="10" fill="currentColor">30</text>'
      + '<text x="128" y="126" font-size="10" fill="currentColor">30</text>'
      + '<text x="188" y="126" font-size="10" fill="currentColor">30</text>'
      + '<text x="248" y="126" font-size="10" fill="currentColor">30</text>'
      + '<text x="308" y="126" font-size="10" fill="currentColor">30</text>'
      + '<text x="50" y="32" font-size="12" fill="currentColor">chained: each mark measured from the one before</text>'
      + '<text x="50" y="156" font-size="11" fill="#0f8a4d">worst error: 0.25, 0.5, 0.75, 1.0, 1.25 mm</text>'
      /* datum plate */
      + '<rect x="50" y="200" width="340" height="70" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M50 200v70" stroke="#0f8a4d" stroke-width="5" fill="none"/>'
      + '<g stroke="#0f8a4d" stroke-width="1" fill="none">'
      + '<path d="M50 276l8 8"/><path d="M70 276l8 8"/><path d="M90 276l8 8"/>'
      + '<path d="M110 276l8 8"/><path d="M130 276l8 8"/><path d="M150 276l8 8"/>'
      + '</g>'
      + '<text x="22" y="196" font-size="10" fill="#0f8a4d">datum</text>'
      + '<text x="22" y="208" font-size="10" fill="#0f8a4d">edge</text>'
      + '<text x="54" y="298" font-size="10" fill="#0f8a4d">datum face</text>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M110 200v70"/><path d="M170 200v70"/><path d="M230 200v70"/>'
      + '<path d="M290 200v70"/><path d="M350 200v70"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M50 306v70"/><path d="M110 306v12"/><path d="M170 306v26"/>'
      + '<path d="M230 306v40"/><path d="M290 306v54"/><path d="M350 306v70"/>'
      + '<path d="M50 314h60"/><path d="M50 328h120"/><path d="M50 342h180"/>'
      + '<path d="M50 356h240"/><path d="M50 370h300"/>'
      + '</g>'
      + '<text x="70" y="310" font-size="10" fill="currentColor">30</text>'
      + '<text x="96" y="324" font-size="10" fill="currentColor">60</text>'
      + '<text x="124" y="338" font-size="10" fill="currentColor">90</text>'
      + '<text x="152" y="352" font-size="10" fill="currentColor">120</text>'
      + '<text x="180" y="366" font-size="10" fill="currentColor">150</text>'
      + '<text x="50" y="394" font-size="11" fill="#0f8a4d">worst error at every line: 0.25 mm, because nothing inherits anything</text>'
      /* waste side detail */
      + '<path d="M450 40v120" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.6" fill="none">'
      + '<path d="M454 48l18 10"/><path d="M454 68l18 10"/><path d="M454 88l18 10"/>'
      + '<path d="M454 108l18 10"/><path d="M454 128l18 10"/>'
      + '</g>'
      + '<path d="M458 40v120" stroke="#0f8a4d" stroke-width="4" fill="none"/>'
      + '<text x="384" y="34" font-size="11" fill="currentColor">the line is</text>'
      + '<text x="384" y="48" font-size="11" fill="currentColor">the finished</text>'
      + '<text x="384" y="62" font-size="11" fill="currentColor">size</text>'
      + '<text x="480" y="80" font-size="11" fill="#0f8a4d">the saw cut sits beside</text>'
      + '<text x="480" y="96" font-size="11" fill="#0f8a4d">the line, on the shaded</text>'
      + '<text x="480" y="112" font-size="11" fill="#0f8a4d">waste side</text>'
      + '<text x="384" y="182" font-size="11" fill="currentColor">shade the waste before you cut</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The marking out tools and what each one is for',
      columns: ['Tool', 'What it does', 'Use it on', 'How fine'],
      rows: [
        ['Steel rule', 'Measures a length', 'Anything', 'About 0.25 mm by eye'],
        ['Try square', 'Marks and tests a right angle to the datum edge', 'Wood and metal', 'Only as true as the square'],
        ['Scriber', 'Scratches a very fine line', 'Metal', 'Under 0.05 mm wide'],
        ['Sharp pencil', 'Draws a line you can see and rub out', 'Wood', 'About 0.5 mm wide'],
        ['Marking gauge', 'Scribes a line parallel to an edge', 'Wood', 'Repeatable to about 0.2 mm'],
        ['Centre punch', 'Dents the surface so a drill cannot wander', 'Metal', 'Positions the hole, not the size'],
      ],
      note: 'Compare the last column with the tolerance you were given. '
        + 'If the width of your own mark is a large part of the '
        + 'tolerance, you need a finer tool.',
    },
  ],

  questions: [
    {
      id: 'mm-1',
      ask: 'Every dimension in marking out should be measured from:',
      kind: 'choice',
      options: [
        'The datum',
        'The last mark made',
        'The nearest edge',
      ],
      answer: 'The datum',
      teach: 'Measuring from the last mark makes each error inherit the '
        + 'ones before it.',
      level: 3,
    },
    {
      id: 'mm-2',
      ask: 'Five chained marks, each measured to within 0.25 millimetres. '
        + 'Give the worst error at the fifth, in millimetres.',
      kind: 'numeric',
      options: [],
      answer: '1.25',
      teach: 'Five errors in the same direction. '
        + 'From a datum it would be 0.25.',
      level: 5,
    },
    {
      id: 'mm-3',
      ask: 'A try square is tested by:',
      kind: 'choice',
      options: [
        'Drawing a line, reversing it, and drawing again',
        'Looking along the blade',
        'Comparing it with another square',
      ],
      answer: 'Drawing a line, reversing it, and drawing again',
      teach: 'If the two lines open into a V, the square is out by half '
        + 'that angle.',
      level: 5,
    },
    {
      id: 'mm-4',
      ask: 'A saw should cut:',
      kind: 'choice',
      options: [
        'On the waste side of the line',
        'Down the middle of the line',
        'Just inside the line',
      ],
      answer: 'On the waste side of the line',
      teach: 'The line is the finished size, '
        + 'and the cut has a thickness of its own.',
      level: 4,
    },
    {
      id: 'mm-5',
      ask: 'A scriber is used instead of a pencil on metal because:',
      kind: 'choice',
      options: [
        'Its line is far narrower, so your mark is not part of the error',
        'Pencil will not show on metal',
        'It is faster',
      ],
      answer: 'Its line is far narrower, so your mark is not part of the error',
      teach: 'When the tolerance is a few tenths of a millimetre, '
        + 'a half millimetre pencil line is a large share of it.',
      level: 6,
    },
  ],
})

/* ── Applied Technology: hand tools and their use ────────────────────────── */

teach({
  topicId: 'hand-tools-at',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Each hand tool has one purpose, '
      + 'and using it for another spoils the tool and the work. '
      + 'Nearly every hand tool injury comes from one of three things: '
      + 'the work moved, '
      + 'a hand was in front of the cutting edge, '
      + 'or the tool was blunt. '
      + 'So hold the work in a vice or a clamp, '
      + 'keep both hands behind the edge, '
      + 'and keep the tool sharp, '
      + 'because a blunt tool needs more force and slips harder.',
    method: [
      'Name the tool and the one job it is for.',
      'Secure the work in a vice or a clamp before starting.',
      'Check that no hand is in front of the cutting edge.',
    ],
  },

  idea:
    'A hand tool is designed for one job. '
    + 'A tenon saw cuts across the grain in wood '
    + 'and has a stiffened back for straight cuts. '
    + 'A hacksaw cuts metal, '
    + 'with the teeth pointing forward so it cuts on the push. '
    + 'A firmer chisel pares and cuts wood, '
    + 'and a cold chisel cuts metal. '
    + 'A file removes small amounts of metal, '
    + 'and it cuts on the forward stroke only. '
    + 'A hand plane levels and smooths wood. '
    + 'A mallet drives a chisel '
    + 'and a hammer drives a nail or a punch. '
    + 'A screwdriver turns a screw '
    + 'and nothing else. '
    + 'A bench vice holds metal, '
    + 'and a woodworker’s vice or a G cramp holds wood. '
    + 'Each tool also has a safety rule, '
    + 'and the rule always comes from how the tool can fail: '
    + 'the chisel can slip, '
    + 'the file can come off its handle, '
    + 'the hacksaw blade can snap, '
    + 'and the work can turn in the vice.',

  mechanism:
    'Almost every injury in a school workshop '
    + 'can be traced to one of three causes, '
    + 'and knowing which makes the rules stop being a list. '
    + 'The first cause is unsecured work. '
    + 'A learner holds a piece of metal in one hand '
    + 'and a hacksaw in the other, '
    + 'and the moment the blade catches, the work twists. '
    + 'Now the saw is moving and the work is moving '
    + 'and the only fixed thing in the picture is the hand holding it. '
    + 'The vice does not exist to make the job neater; '
    + 'it exists so that the work is the one thing that cannot move. '
    + 'Secure the work and a slip is a spoiled cut; '
    + 'hold it in the hand and the same slip is a wound. '
    + 'The second cause is a hand in front of the edge. '
    + 'A chisel pushed towards the body, '
    + 'with the other hand holding the wood just beyond it, '
    + 'is an accident waiting for the grain to change. '
    + 'The rule is both hands behind the cutting edge, '
    + 'and cut away from yourself, '
    + 'and the reason is that you cannot predict when a tool '
    + 'will suddenly move further than you meant. '
    + 'The third cause is bluntness, '
    + 'and this is the one learners find hardest to believe. '
    + 'A sharp chisel cuts where it is put, '
    + 'with light pressure. '
    + 'A blunt one skids off the surface, '
    + 'so the learner leans on it, '
    + 'and when it finally bites it goes in hard '
    + 'and keeps going. '
    + 'The energy you were pressing with has to go somewhere. '
    + 'So a blunt tool is not merely slower; '
    + 'it is more dangerous than a sharp one, '
    + 'and that sentence is worth writing in an examination '
    + 'because it reverses what most people assume. '
    + 'The same reasoning explains the particular rules. '
    + 'A file is used with a handle '
    + 'because the bare tang is a spike '
    + 'that goes into the palm when the file catches. '
    + 'A hammer head is kept tight on its shaft '
    + 'because a loose head leaves the shaft '
    + 'while the swing is still going. '
    + 'A hacksaw blade is fitted with the teeth pointing forward '
    + 'and tensioned '
    + 'because a loose blade twists in the cut and snaps. '
    + 'A screwdriver is never used as a chisel or a lever, '
    + 'because its tip is hardened to turn and not to be struck, '
    + 'and it shatters. '
    + 'In each case the rule is not etiquette; '
    + 'it is the answer to a specific way the tool fails. '
    + 'Last, the honest part. '
    + 'Naming the tool for a job, '
    + 'giving its safety rule, '
    + 'and explaining the rule from how the tool fails '
    + 'is paper work, and it is where the examination marks are. '
    + 'But skill with a hand tool cannot be read. '
    + 'Nobody learns to saw square, '
    + 'or to feel a plane iron taking a shaving, '
    + 'from a page. '
    + 'A school with a bench, a vice and six tools '
    + 'can teach more than a school with a page and a syllabus, '
    + 'and a school with no workshop at all '
    + 'should borrow a carpenter’s bench for an afternoon '
    + 'rather than claim the skill was taught.',

  recap:
    'You have used a cutlass, a hammer and a saw at home. '
    + 'This asks why each tool is shaped as it is, '
    + 'and turns the warnings you were given into reasons.',

  method: [
    'Name the job, and choose the tool made for it.',
    'Check the tool: handle tight, edge sharp, blade tensioned the right way.',
    'Secure the work in a vice, a clamp or against a stop.',
    'Stand so that you are balanced and can see the line.',
    'Put both hands behind the cutting edge.',
    'Cut away from your body, with light control rather than force.',
    'Let the tool cut on its own stroke: a file and a hacksaw cut forward only.',
    'Put the tool down with its edge away from you, and sweep up.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which way do the teeth of a hacksaw blade point, and why?',
      steps: [
        'A hacksaw is pushed to cut.',
        'The teeth must bite on that stroke.',
      ],
      answer: 'Forward, away from the handle, '
        + 'because the hacksaw cuts on the push stroke.',
    },
    {
      level: 4,
      ask: 'Give three reasons a file must have a handle fitted.',
      steps: [
        'The bare tang is a pointed spike.',
        'A file catches in the work from time to time.',
        'When it catches, the hand runs forward onto the tang.',
      ],
      answer: 'Because the tang is a spike, '
        + 'the file does catch, '
        + 'and when it catches the hand is driven onto the tang. '
        + 'The handle also lets you control the stroke.',
    },
    {
      level: 5,
      ask: 'Explain why a blunt chisel is more dangerous than a sharp one.',
      steps: [
        'A sharp chisel cuts where it is placed, with light pressure.',
        'A blunt one skids instead of cutting.',
        'So the user presses harder to make it bite.',
        'When it finally bites, the stored force drives it further '
          + 'than intended.',
      ],
      answer: 'Because bluntness forces the user to add pressure, '
        + 'and that pressure has to go somewhere when the edge finally '
        + 'catches. '
        + 'A sharp tool needs little force, '
        + 'so a slip has little energy behind it.',
    },
    {
      level: 6,
      ask: 'A learner is cutting a slot in a piece of hardwood. '
        + 'He holds the wood in his left hand, '
        + 'pushes a blunt chisel towards himself, '
        + 'and cuts his thumb. '
        + 'Identify every fault and give the correct method.',
      steps: [
        'The work was not secured, so it could move.',
        'The left hand was in front of the cutting edge.',
        'The chisel was blunt, so it needed force and then bit suddenly.',
        'The cut was towards the body, so the slip had nowhere safe to go.',
      ],
      answer: 'All three causes at once: '
        + 'unsecured work, a hand in front of the edge, and a blunt tool, '
        + 'with the cut made towards himself. '
        + 'Correctly: clamp the wood in a vice, '
        + 'sharpen the chisel, '
        + 'keep both hands behind the edge, '
        + 'and pare away from the body with light pressure, '
        + 'taking several small cuts rather than one deep one.',
    },
  ],

  traps: [
    {
      mistake: 'Holding the work in one hand while cutting with the other.',
      why: 'Then the work can move, and the only fixed thing is your '
        + 'hand. Secure it in a vice or a clamp first.',
    },
    {
      mistake: 'Assuming a blunt tool is a safe tool.',
      why: 'It skids, so you press harder, '
        + 'and when it bites it carries all that force further than you '
        + 'meant.',
    },
    {
      mistake: 'Using a screwdriver as a chisel or a lever.',
      why: 'Its tip is hardened to turn, not to be struck. '
        + 'It shatters, and the pieces travel.',
    },
    {
      mistake: 'Fitting a hacksaw blade with the teeth pointing backwards.',
      why: 'It cuts on the push stroke. '
        + 'Backwards it rubs, heats and blunts, '
        + 'and the work is never cut.',
    },
  ],

  extension:
    'A tool is sharpened in two stages, and the second is the one '
    + 'that is skipped. '
    + 'Grinding forms the main angle and removes the damage. '
    + 'Honing on an oilstone forms the final edge, '
    + 'and it is honing that makes a chisel cut rather than skid. '
    + 'A ground but unhoned edge looks sharp and is not. '
    + 'This is why a workshop keeps an oilstone at the bench '
    + 'rather than at the grinder: '
    + 'honing is done many times during a job, '
    + 'and grinding only when the edge is damaged.',

  figure: {
    alt: 'Two drawings of the same chisel cut. On the left, marked as '
      + 'wrong, the wood is held in one hand with the fingers just in '
      + 'front of the chisel, which is being pushed towards the body, '
      + 'and arrows show both the work and the tool free to move. On the '
      + 'right, marked as right, the wood is clamped in a vice, both '
      + 'hands are behind the cutting edge, and the cut runs away from '
      + 'the body, with a note that the work is now the one thing that '
      + 'cannot move. Beneath, two edges are drawn in section: a sharp '
      + 'edge meeting the wood at a fine point with a small force arrow, '
      + 'and a blunt rounded edge with a large force arrow and a note '
      + 'that the stored force goes somewhere when the edge finally '
      + 'bites.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* wrong */
      + '<text x="40" y="34" font-size="13" fill="currentColor">wrong</text>'
      + '<rect x="40" y="90" width="150" height="34" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M40 124q-18 20 -4 32q14 12 30 0" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="20" y="176" font-size="10" fill="#0f8a4d">hand in front</text>'
      + '<path d="M250 108h-56l-16 -8v16Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M254 108h40" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 100h40v16h-40Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M200 68h-60" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M148 62l-10 6 10 6Z" fill="#0f8a4d"/>'
      + '<text x="150" y="58" font-size="10" fill="#0f8a4d">cut towards the body</text>'
      + '<path d="M60 76h70" stroke="#0f8a4d" stroke-width="1" stroke-dasharray="4 3" fill="none"/>'
      + '<text x="56" y="70" font-size="10" fill="#0f8a4d">work free to move</text>'
      /* right */
      + '<text x="380" y="34" font-size="13" fill="#0f8a4d">right</text>'
      + '<rect x="380" y="90" width="150" height="34" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<rect x="372" y="124" width="166" height="26" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<text x="378" y="168" font-size="10" fill="#0f8a4d">held in a vice</text>'
      + '<path d="M340 108h56l16 -8v16Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 108h40" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M256 100h40v16h-40Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 68h60" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M352 62l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<text x="286" y="58" font-size="10" fill="#0f8a4d">cut away from the body</text>'
      + '<text x="256" y="186" font-size="10" fill="#0f8a4d">both hands behind the edge</text>'
      /* sharp vs blunt */
      + '<path d="M60 300h140l-110 34Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M60 262v30" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M54 284l6 10 6-10Z" fill="#0f8a4d"/>'
      + '<text x="72" y="276" font-size="11" fill="#0f8a4d">small force</text>'
      + '<text x="40" y="364" font-size="12" fill="currentColor">sharp: cuts where it is put</text>'
      + '<path d="M360 300h140l-96 34q-22 -14 -44 -34Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M360 236v56" stroke="#0f8a4d" stroke-width="5" fill="none"/>'
      + '<path d="M352 278l8 14 8-14Z" fill="#0f8a4d"/>'
      + '<text x="372" y="256" font-size="11" fill="#0f8a4d">large force, pressed in</text>'
      + '<text x="340" y="364" font-size="12" fill="currentColor">blunt: skids, then bites suddenly</text>'
      + '<text x="40" y="398" font-size="12" fill="#0f8a4d">the force you pressed with has to go somewhere, which is why a blunt tool is the more dangerous one</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each tool, its one job, and the rule that comes from how it fails',
      columns: ['Tool', 'Its one job', 'Safety rule', 'Because'],
      rows: [
        ['Hacksaw', 'Cutting metal', 'Teeth forward and blade tensioned', 'A loose blade twists in the cut and snaps'],
        ['File', 'Removing small amounts of metal', 'Always fit a handle', 'The bare tang is a spike, and a file does catch'],
        ['Firmer chisel', 'Paring and cutting wood', 'Both hands behind the edge, cut away from you', 'The grain can let the tool run further than you meant'],
        ['Hammer', 'Driving a nail or a punch', 'Keep the head tight on the shaft', 'A loose head leaves the shaft in mid swing'],
        ['Screwdriver', 'Turning a screw', 'Never strike it or lever with it', 'The tip is hardened to turn, and it shatters'],
        ['Bench vice', 'Holding the work', 'Use it; do not hold work in the hand', 'Secured work turns a slip into a spoiled cut, not a wound'],
      ],
      note: 'Every rule in the third column is answered by the fourth. '
        + 'A rule with no reason is forgotten by the next lesson.',
    },
  ],

  questions: [
    {
      id: 'ht-1',
      ask: 'A file must always have:',
      kind: 'choice',
      options: ['A handle fitted', 'Oil on its teeth', 'A guard'],
      answer: 'A handle fitted',
      teach: 'The bare tang is a spike, '
        + 'and when the file catches the hand is driven onto it.',
      level: 3,
    },
    {
      id: 'ht-2',
      ask: 'A blunt chisel is more dangerous than a sharp one because:',
      kind: 'choice',
      options: [
        'It needs more force, which goes somewhere when it finally bites',
        'It is heavier',
        'It cannot be controlled at all',
      ],
      answer: 'It needs more force, which goes somewhere when it finally bites',
      teach: 'A sharp tool cuts under light pressure, '
        + 'so a slip has little energy behind it.',
      level: 5,
    },
    {
      id: 'ht-3',
      ask: 'Work should be held:',
      kind: 'choice',
      options: [
        'In a vice or a clamp',
        'Firmly in one hand',
        'Against your knee',
      ],
      answer: 'In a vice or a clamp',
      teach: 'Then the work is the one thing that cannot move, '
        + 'and a slip spoils a cut instead of a hand.',
      level: 3,
    },
    {
      id: 'ht-4',
      ask: 'A screwdriver must never be:',
      kind: 'choice',
      options: [
        'Struck or used as a lever',
        'Used on a cross head screw',
        'Held near the tip',
      ],
      answer: 'Struck or used as a lever',
      teach: 'Its tip is hardened to turn, not to take a blow, '
        + 'so it shatters and the pieces travel.',
      level: 4,
    },
    {
      id: 'ht-5',
      ask: 'How many of the three usual causes of a hand tool injury are '
        + 'present when a learner holds wood in one hand and pushes a '
        + 'blunt chisel towards himself with the other?',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Unsecured work, a hand in front of the edge, '
        + 'and a blunt tool, with the cut towards the body as well.',
      level: 6,
    },
  ],
})
