/**
 * Stored lessons for SHS 2 Core Mathematics: geometry, trigonometry,
 * mensuration and statistics.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── Why these seven need drawings more than any others ───────────────────
 *
 * Because in every one of them the first mark is for the diagram. A
 * bearing problem is solved by the north lines you drew. A circle theorem
 * question is solved by seeing the diameter in the picture. A cone
 * question is solved by knowing which of two lengths the question gave
 * you. So each of these lessons carries a figure that is the thing being
 * taught rather than a decoration beside it, and each `method` begins with
 * drawing rather than with calculating.
 *
 * ── What changes at SHS ──────────────────────────────────────────────────
 *
 * The reason is marked. In circle geometry that is explicit: a step
 * earns its mark when the theorem is quoted beside it, and loses it when
 * the same step is written bare. Construction is the same rule in
 * another form, since the arcs are the evidence and rubbing them out
 * destroys the proof that the construction was done rather than
 * measured. Both lessons say so plainly.
 *
 * ── Notation ─────────────────────────────────────────────────────────────
 *
 * Plain words and ASCII, as everywhere here: the square root of, x
 * squared, sin A over a. No LaTeX, because the renderer shows plain text
 * and a learner has to be able to read it aloud.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── circle theorems ────────────────────────────────────────────────────── */

teach({
  topicId: 'circle-theorems-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The angle at the centre is twice the angle at the circumference '
      + 'standing on the same arc. '
      + 'Angles in the same segment are equal. '
      + 'The angle in a semicircle is 90 degrees. '
      + 'Opposite angles of a cyclic quadrilateral add to 180 degrees. '
      + 'A tangent meets a radius at 90 degrees, '
      + 'and two tangents from one point are equal. '
      + 'Quote the theorem beside every step, '
      + 'because the naming carries the mark.',
    method: [
      'Mark every known angle on the diagram.',
      'Look for a diameter, a cyclic quadrilateral, or a tangent.',
      'Write each step with the theorem named beside it.',
    ],
  },

  idea:
    'A chord joins two points on a circle. '
    + 'A diameter is a chord through the centre. '
    + 'An arc is part of the circumference, '
    + 'and a segment is the region between a chord and its arc. '
    + 'A tangent touches the circle at one point only. '
    + 'A cyclic quadrilateral has all four corners on the circle. '
    + 'The theorems are these. '
    + 'The angle subtended at the centre by an arc '
    + 'is twice the angle subtended at the circumference by the same arc. '
    + 'Angles in the same segment, standing on the same arc, are equal. '
    + 'The angle in a semicircle is a right angle. '
    + 'Opposite angles of a cyclic quadrilateral add to 180 degrees. '
    + 'A tangent is perpendicular to the radius at the point of contact. '
    + 'Two tangents drawn from the same outside point are equal in length. '
    + 'The angle between a tangent and a chord '
    + 'equals the angle in the alternate segment. '
    + 'A radius that bisects a chord is perpendicular to it.',

  mechanism:
    'There are two skills here '
    + 'and the second one is what the examination actually rewards. '
    + 'The first skill is seeing which theorem applies, '
    + 'and it is a matter of knowing what to look for in the picture. '
    + 'Scan the diagram for three things in order. '
    + 'Is there a diameter. '
    + 'If a diameter is drawn and a third point sits on the circle, '
    + 'there is a right angle at that third point, '
    + 'and that right angle is often the whole key to the question. '
    + 'Is there a quadrilateral with all four corners on the circle. '
    + 'If so, its opposite angles add to 180, '
    + 'which gives you an angle for nothing. '
    + 'Is there a tangent. '
    + 'If so, there is a right angle at the point of contact '
    + 'where the radius meets it, '
    + 'and probably an alternate segment angle as well. '
    + 'Then look for two angles standing on the same arc, '
    + 'one at the centre and one at the edge, '
    + 'which gives the doubling, '
    + 'or two at the edge, which gives equality. '
    + 'That scan takes twenty seconds and it usually finds the way in. '
    + 'The second skill is writing the reason, '
    + 'and this is where most marks in the topic are won and lost. '
    + 'An SHS answer is a chain of statements, '
    + 'and each statement has to carry the theorem that justifies it. '
    + 'Compare two answers. '
    + 'The first says: angle ABC equals 40, '
    + 'so angle AOC equals 80, '
    + 'so angle OAC equals 50. '
    + 'The second says: '
    + 'angle AOC equals 80 degrees, '
    + 'angle at the centre is twice the angle at the circumference. '
    + 'Triangle OAC is isosceles, since OA and OC are radii. '
    + 'So angle OAC equals (180 minus 80) over 2, which is 50 degrees. '
    + 'The numbers are identical. '
    + 'The second answer earns roughly twice as many marks, '
    + 'because every step states what it rests on. '
    + 'So the discipline is: one line of working, '
    + 'one reason beside it, every time, '
    + 'and the reason is named in the words of the theorem '
    + 'rather than as a number or an abbreviation. '
    + 'Two particular habits are worth building. '
    + 'First, mark the radii. '
    + 'The moment two radii form a triangle, '
    + 'that triangle is isosceles, '
    + 'and the base angles are equal. '
    + 'An enormous number of circle questions '
    + 'turn on noticing exactly that, '
    + 'and it is invisible until you mark the equal sides on the drawing. '
    + 'Second, redraw the diagram if it is crowded. '
    + 'A copy with only the lines you are using on it, '
    + 'and every known angle written in, '
    + 'is worth the minute it takes, '
    + 'because the commonest error in this topic '
    + 'is applying the doubling theorem to two angles '
    + 'that do not stand on the same arc. '
    + 'They have to stand on the same arc. '
    + 'Check by tracing the arc with a finger '
    + 'from one end of it to the other '
    + 'and seeing that both angles open onto it.',

  recap:
    'You know that angles in a triangle add to 180 degrees, '
    + 'that the base angles of an isosceles triangle are equal, '
    + 'and that angles on a straight line add to 180. '
    + 'This adds the facts that hold when the points lie on a circle, '
    + 'and asks you to name the one you used.',

  method: [
    'Redraw the diagram if it is crowded, keeping only what you need.',
    'Write every given angle onto the drawing.',
    'Mark every radius, and mark the equal sides of any triangle of radii.',
    'Look for a diameter: it gives a right angle on the circumference.',
    'Look for a cyclic quadrilateral: opposite angles add to 180.',
    'Look for a tangent: it gives a right angle with the radius.',
    'Look for two angles on the same arc: at the centre it doubles, at the edge it is equal.',
    'Write each step on its own line with the theorem named beside it.',
    'Check that your angles close: triangles to 180, angles round a point to 360.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A, B and C are on a circle and AC is a diameter. '
        + 'Angle BAC is 35 degrees. Find angle BCA.',
      steps: [
        'Angle ABC equals 90 degrees, angle in a semicircle.',
        'Angles in triangle ABC add to 180.',
        'So angle BCA equals 180 minus 90 minus 35.',
      ],
      answer: '55 degrees. '
        + 'Naming the semicircle theorem is what earns the first mark.',
    },
    {
      level: 4,
      ask: 'An angle at the circumference standing on arc PQ is 40 degrees. '
        + 'Find the angle at the centre on the same arc.',
      steps: [
        'Angle at the centre is twice the angle at the circumference, '
          + 'on the same arc.',
        'So it is 2 times 40.',
      ],
      answer: '80 degrees. '
        + 'Check that both angles really do stand on arc PQ '
        + 'before doubling.',
    },
    {
      level: 5,
      ask: 'O is the centre. Angle ABC at the circumference is 40 degrees, '
        + 'standing on arc AC. Find angle OAC.',
      steps: [
        'Angle AOC equals 80 degrees, '
          + 'angle at the centre is twice the angle at the circumference.',
        'OA and OC are radii, so triangle OAC is isosceles.',
        'Its base angles are equal, and the three add to 180.',
        'So angle OAC equals (180 minus 80) over 2.',
      ],
      answer: '50 degrees. '
        + 'The step that is easy to miss is marking OA and OC as equal, '
        + 'which is what makes the triangle isosceles.',
    },
    {
      level: 6,
      ask: 'PQRS is a cyclic quadrilateral. '
        + 'TP is a tangent at P, '
        + 'angle QPT between the tangent and chord PQ is 50 degrees, '
        + 'and angle PQS is 30 degrees. '
        + 'Find angle QRS, with reasons.',
      steps: [
        'Angle PSQ equals 50 degrees, '
          + 'angle between a tangent and a chord equals the angle in the '
          + 'alternate segment.',
        'In triangle PQS, angles add to 180, '
          + 'so angle QPS equals 180 minus 50 minus 30, which is 100.',
        'PQRS is cyclic, so angle QPS and angle QRS are opposite angles.',
        'Opposite angles of a cyclic quadrilateral add to 180.',
        'So angle QRS equals 180 minus 100.',
      ],
      answer: '80 degrees. '
        + 'Three theorems were used and all three are named: '
        + 'the alternate segment, the angle sum of a triangle, '
        + 'and the cyclic quadrilateral. '
        + 'Each naming is a mark.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the working without naming the theorems.',
      why: 'The reason carries its own mark at SHS. '
        + 'One line of working, one named reason beside it.',
    },
    {
      mistake: 'Doubling two angles that do not stand on the same arc.',
      why: 'The theorem requires the same arc. '
        + 'Trace the arc and check that both angles open onto it.',
    },
    {
      mistake: 'Missing that two radii make an isosceles triangle.',
      why: 'It is the step a great many questions turn on. '
        + 'Mark the equal sides on the drawing.',
    },
    {
      mistake: 'Treating adjacent angles of a cyclic quadrilateral as '
        + 'adding to 180.',
      why: 'It is the opposite angles that do. '
        + 'Check you have picked the pair across the shape, '
        + 'not the pair next to each other.',
    },
  ],

  extension:
    'The intersecting chords result is worth meeting. '
    + 'If two chords cross inside a circle at a point X, '
    + 'then the products of the parts are equal: '
    + 'AX times XB equals CX times XD. '
    + 'It follows from similar triangles, '
    + 'using the angles in the same segment, '
    + 'and it is the reason the same relation holds '
    + 'when the chords meet outside the circle. '
    + 'In that outside form, '
    + 'with a tangent of length t and a line cutting the circle, '
    + 't squared equals the product of the two parts of the line, '
    + 'which is how a tangent length can be found without any angle.',

  figure: {
    alt: 'A circle with centre O carrying four of the theorems at once, '
      + 'each labelled on the drawing. At the top, two points A and C on '
      + 'the circle are joined to the centre and to a third point B on '
      + 'the major arc, with the angle at the centre marked eighty '
      + 'degrees and the angle at B marked forty degrees, labelled as '
      + 'the angle at the centre being twice the angle at the '
      + 'circumference on the same arc, and with the two radii marked '
      + 'equal so that the triangle they form is isosceles. On the left '
      + 'a diameter is drawn with a third point on the circle, and the '
      + 'angle there is marked as a right angle, labelled angle in a '
      + 'semicircle. At the bottom a quadrilateral with all four corners '
      + 'on the circle has one pair of opposite angles marked and '
      + 'labelled as adding to one hundred and eighty degrees. On the '
      + 'right a tangent touches the circle and the radius to the point '
      + 'of contact is drawn, with the right angle between them marked, '
      + 'labelled tangent perpendicular to radius.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* main circle */
      + '<circle cx="250" cy="200" r="140" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="250" cy="200" r="4" fill="currentColor"/>'
      + '<text x="256" y="214" font-size="12" fill="currentColor">O</text>'
      /* A and C with centre angle */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M250 200L160 90"/><path d="M250 200L340 90"/>'
      + '</g>'
      + '<text x="142" y="84" font-size="12" fill="currentColor">A</text>'
      + '<text x="344" y="84" font-size="12" fill="currentColor">C</text>'
      + '<path d="M250 160a44 44 0 0 1 36 18" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="236" y="152" font-size="11" fill="#0f8a4d">80</text>'
      /* radii marks */
      + '<path d="M200 140l10 -8" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 140l-10 -8" stroke="currentColor" stroke-width="2" fill="none"/>'
      /* B at bottom with 40 */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M250 340L160 90"/><path d="M250 340L340 90"/>'
      + '</g>'
      + '<text x="244" y="360" font-size="12" fill="currentColor">B</text>'
      + '<path d="M232 308a36 36 0 0 0 36 0" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="240" y="300" font-size="11" fill="#0f8a4d">40</text>'
      /* tangent on the right */
      + '<path d="M390 120v180" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M250 200h140" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M374 186h16v16h-16Z" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="398" y="118" font-size="11" fill="#0f8a4d">tangent:</text>'
      + '<text x="398" y="134" font-size="11" fill="#0f8a4d">90 to the radius</text>'
      /* small semicircle diagram */
      + '<circle cx="80" cy="370" r="40" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M40 370h80" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M40 370L96 342"/><path d="M120 370L96 342"/>'
      + '</g>'
      + '<path d="M88 350l10 6-6 10" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="20" y="326" font-size="11" fill="#0f8a4d">angle in a semicircle: 90</text>'
      /* cyclic quad */
      + '<circle cx="540" cy="340" r="56" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M500 300L584 318L572 384L498 376Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="462" y="296" font-size="11" fill="#0f8a4d">opposite angles</text>'
      + '<text x="462" y="312" font-size="11" fill="#0f8a4d">add to 180</text>'
      + '<text x="20" y="40" font-size="12" fill="currentColor">the angle at the centre is twice the angle at the circumference, on the same arc</text>'
      + '<text x="20" y="412" font-size="11" fill="#0f8a4d">OA and OC are radii, so that triangle is isosceles: the step most questions turn on</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each theorem, what to look for in the drawing, and what it hands you',
      columns: ['Theorem', 'Look for', 'It gives you'],
      rows: [
        ['Angle at the centre is twice the angle at the circumference', 'Two angles on the same arc, one at O', 'A doubling or a halving'],
        ['Angles in the same segment are equal', 'Two angles at the edge on the same arc', 'An equal angle for nothing'],
        ['Angle in a semicircle is 90 degrees', 'A diameter and a third point on the circle', 'A right angle'],
        ['Opposite angles of a cyclic quadrilateral add to 180', 'Four corners all on the circle', 'An angle from its opposite'],
        ['Tangent is perpendicular to the radius', 'A tangent and the radius to its point of contact', 'A right angle'],
        ['Two tangents from a point are equal', 'Two tangents meeting outside', 'An isosceles triangle'],
        ['Tangent and chord equals the alternate segment angle', 'A tangent with a chord drawn from the contact point', 'An angle across the circle'],
      ],
      note: 'Scan for a diameter, a cyclic quadrilateral and a tangent '
        + 'first. Those three findings open most questions.',
    },
  ],

  questions: [
    {
      id: 'ct-1',
      ask: 'The angle in a semicircle is how many degrees?',
      kind: 'numeric',
      options: [],
      answer: '90',
      teach: 'Any point on the circle, joined to the ends of a diameter, '
        + 'gives a right angle.',
      level: 3,
    },
    {
      id: 'ct-2',
      ask: 'An angle at the circumference on an arc is 35 degrees. '
        + 'The angle at the centre on the same arc is:',
      kind: 'numeric',
      options: [],
      answer: '70',
      teach: 'Twice the angle at the circumference, on the same arc.',
      level: 4,
    },
    {
      id: 'ct-3',
      ask: 'In a cyclic quadrilateral, which pair of angles adds to 180?',
      kind: 'choice',
      options: [
        'The opposite pair',
        'The adjacent pair',
        'All four, in pairs of your choice',
      ],
      answer: 'The opposite pair',
      teach: 'Across the shape, not next to each other.',
      level: 4,
    },
    {
      id: 'ct-4',
      ask: 'A triangle formed by two radii and a chord is always:',
      kind: 'choice',
      options: ['Isosceles', 'Equilateral', 'Right angled'],
      answer: 'Isosceles',
      teach: 'The two radii are equal, so the base angles are equal. '
        + 'Mark them on the drawing.',
      level: 5,
    },
    {
      id: 'ct-5',
      ask: 'At SHS, a correct numerical answer with no theorems named:',
      kind: 'choice',
      options: [
        'Loses the reason marks for each step',
        'Scores full marks',
        'Is marked wrong',
      ],
      answer: 'Loses the reason marks for each step',
      teach: 'One line of working, one named theorem beside it. '
        + 'The naming is roughly half the marks in this topic.',
      level: 6,
    },
  ],
})

/* ── construction and loci ─────────────────────────────────────────────── */

teach({
  topicId: 'construction-loci',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A construction is made with compasses and a straight edge only, '
      + 'and never by measuring an angle with a protractor. '
      + 'Leave every arc showing, '
      + 'because the arcs are the evidence and they carry the marks. '
      + 'A locus is the path of all points obeying a condition. '
      + 'Equidistant from two points is the perpendicular bisector. '
      + 'Equidistant from two lines is the angle bisector. '
      + 'A fixed distance from a point is a circle.',
    method: [
      'Use compasses and a straight edge, and keep the same radius where the method says so.',
      'Leave all construction arcs on the paper.',
      'Describe a locus in words and then draw it.',
    ],
  },

  idea:
    'A construction uses only compasses and a straight edge. '
    + 'The perpendicular bisector of a line AB '
    + 'is drawn by setting the compasses to more than half of AB, '
    + 'making arcs from A and from B above and below, '
    + 'and joining the two crossings. '
    + 'An angle bisector is drawn by making an arc from the vertex '
    + 'cutting both arms, '
    + 'then arcs of equal radius from those two points, '
    + 'and joining the vertex to where they cross. '
    + 'An angle of 60 degrees is constructed '
    + 'by drawing an arc from a point on a line '
    + 'and then an arc of the same radius from where it cuts the line. '
    + 'Bisecting 60 gives 30, '
    + 'and bisecting a right angle gives 45. '
    + 'A locus is the set of all points that satisfy a condition. '
    + 'The locus of points a fixed distance from a point is a circle. '
    + 'The locus a fixed distance from a straight line '
    + 'is a pair of parallel lines, one on each side. '
    + 'The locus equidistant from two points '
    + 'is the perpendicular bisector of the line joining them. '
    + 'The locus equidistant from two intersecting lines '
    + 'is the pair of angle bisectors.',

  mechanism:
    'The rule that governs this whole topic '
    + 'is that the arcs are the answer. '
    + 'A learner who measures 45 degrees with a protractor '
    + 'and draws a clean line has produced the right line '
    + 'and will score almost nothing, '
    + 'because nothing on the paper shows the construction was done. '
    + 'A learner whose line is half a degree out '
    + 'but whose arcs are all visible, '
    + 'in the right places and with the right radii, '
    + 'scores nearly everything. '
    + 'That is not a quirk of marking; '
    + 'it is the point of the exercise, '
    + 'which is to produce an exact result '
    + 'from two instruments that cannot measure anything. '
    + 'So: never rub out an arc, '
    + 'keep the pencil sharp, '
    + 'and when a method says to keep the same radius, keep it. '
    + 'The second thing worth understanding is why the constructions work, '
    + 'because then they cannot be half remembered. '
    + 'The perpendicular bisector method '
    + 'makes two points that are each the same distance from A and from B. '
    + 'Two such points determine a line, '
    + 'and every point on that line is equidistant from A and B. '
    + 'So the construction and the locus are the same fact '
    + 'approached from two sides, '
    + 'which is why they are taught together. '
    + 'The 60 degree construction works '
    + 'because the three arcs of equal radius '
    + 'build an equilateral triangle, '
    + 'and the angles of an equilateral triangle are 60 degrees each. '
    + 'Knowing that, you can see at once '
    + 'why the radius must not be changed between the two arcs: '
    + 'change it and the triangle is no longer equilateral '
    + 'and the angle is no longer 60. '
    + 'The third thing is what a locus answer must contain. '
    + 'It is two things, and learners give one. '
    + 'Give the description in words: '
    + 'the locus is a circle of radius 3 centimetres with centre at P. '
    + 'And give the drawing. '
    + 'Words alone do not show you can draw it; '
    + 'a drawing alone does not show you know what it is. '
    + 'Most mark schemes award both separately. '
    + 'Then there are combined loci, '
    + 'which is where the interesting questions live. '
    + 'Two conditions together usually leave a region, not a path, '
    + 'and the region has to be shaded and labelled. '
    + 'Suppose a water tank must be within 50 metres of a house '
    + 'and nearer to the road than to the stream. '
    + 'The first condition is a circle of radius 50 metres '
    + 'round the house, '
    + 'and you want the inside of it. '
    + 'The second is the angle bisector or perpendicular bisector '
    + 'between the road and the stream, '
    + 'and you want the side towards the road. '
    + 'The answer is the overlap, '
    + 'shaded, '
    + 'with a sentence saying what it is. '
    + 'Test the shading by picking a point inside it '
    + 'and checking both conditions, '
    + 'which takes ten seconds and catches the commonest error, '
    + 'which is shading the wrong side of a bisector.',

  recap:
    'You have used a ruler, a pair of compasses and a protractor, '
    + 'and drawn circles and triangles. '
    + 'This asks you to work without the protractor, '
    + 'and introduces the idea of describing every point '
    + 'that satisfies a condition.',

  method: [
    'Draw the given points and lines accurately, in pencil.',
    'Set the compasses as the method requires, and do not change the radius unless told to.',
    'Make the arcs long enough to cross clearly.',
    'Join the crossings with a straight edge.',
    'Leave every arc on the paper.',
    'For a locus, say in words what it is, with its measurements.',
    'Then draw it, and label it.',
    'For two conditions, draw both loci and shade the region that satisfies both.',
    'Test one point inside your shading against both conditions.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Describe the locus of points 4 centimetres from a fixed '
        + 'point P.',
      steps: [
        'Every such point is the same distance from P.',
        'That is the definition of a circle.',
      ],
      answer: 'A circle of radius 4 centimetres with centre P. '
        + 'The answer needs the description in words and the drawing.',
    },
    {
      level: 4,
      ask: 'Construct the perpendicular bisector of AB, '
        + 'and say what locus it is.',
      steps: [
        'Open the compasses to more than half of AB.',
        'From A, draw arcs above and below the line.',
        'Keeping the same radius, do the same from B.',
        'Join the two crossing points.',
      ],
      answer: 'The line drawn is the perpendicular bisector, '
        + 'and it is the locus of points equidistant from A and from B. '
        + 'The arcs must be left showing.',
    },
    {
      level: 5,
      ask: 'Construct an angle of 30 degrees, '
        + 'and explain why the first radius must not be changed.',
      steps: [
        'Draw a line and mark a point O on it.',
        'With any radius, draw an arc from O cutting the line at P.',
        'With the same radius, draw an arc from P cutting the first arc at Q.',
        'Join OQ: angle QOP is 60 degrees.',
        'Now bisect angle QOP.',
      ],
      answer: '30 degrees. '
        + 'The radius must stay the same because OP, OQ and PQ '
        + 'are then all equal, '
        + 'so triangle OPQ is equilateral and its angles are 60 degrees. '
        + 'Change the radius and the triangle is not equilateral.',
    },
    {
      level: 6,
      ask: 'A borehole must be within 60 metres of the school '
        + 'and nearer to the road than to the stream. '
        + 'Describe the loci and the region, '
        + 'and say how you would check your shading.',
      steps: [
        'First condition: a circle of radius 60 metres, '
          + 'to the scale given, centred on the school; '
          + 'the borehole is inside it.',
        'Second condition: the locus equidistant from the road and the '
          + 'stream, which for two straight lines is the angle bisector '
          + 'between them.',
        'The borehole must lie on the road side of that bisector.',
        'Shade the overlap of the two regions.',
        'Pick a point inside the shading and measure to the school, '
          + 'to the road and to the stream.',
      ],
      answer: 'The region is inside the circle and on the road side of '
        + 'the bisector, shaded and labelled. '
        + 'Checking one interior point against both conditions '
        + 'catches shading the wrong side of the bisector, '
        + 'which is the commonest error in these questions.',
    },
  ],

  traps: [
    {
      mistake: 'Using a protractor for a construction.',
      why: 'The marks are for the construction, '
        + 'and a measured angle shows none of it. '
        + 'Compasses and straight edge only.',
    },
    {
      mistake: 'Rubbing out the arcs to make the drawing neat.',
      why: 'The arcs are the evidence. '
        + 'A clean page with no arcs scores almost nothing.',
    },
    {
      mistake: 'Changing the compass radius between the two arcs of a '
        + '60 degree construction.',
      why: 'The construction works because the triangle is equilateral. '
        + 'A different radius makes it something else.',
    },
    {
      mistake: 'Giving a locus as a drawing with no words, or words with '
        + 'no drawing.',
      why: 'Mark schemes usually award the description and the drawing '
        + 'separately. Give both.',
    },
  ],

  extension:
    'Not every length can be constructed with these two instruments, '
    + 'and that is a real mathematical result rather than a limitation of '
    + 'skill. '
    + 'An angle of 60 degrees can be trisected by nobody, '
    + 'using compasses and straight edge alone, '
    + 'and this was proved impossible in the nineteenth century '
    + 'after two thousand years of attempts. '
    + 'So the rule about the two instruments '
    + 'is not an arbitrary examination condition. '
    + 'It marks out a precise set of things that can be done, '
    + 'and the constructions in this syllabus are inside it.',

  figure: {
    alt: 'Four loci drawn side by side with their conditions. The first '
      + 'shows a point P with a circle around it, labelled as the locus '
      + 'of points a fixed distance from a point. The second shows a '
      + 'straight line with a parallel line drawn on each side of it at '
      + 'equal distance, labelled as the locus of points a fixed '
      + 'distance from a line. The third shows two points A and B with '
      + 'the perpendicular bisector drawn between them, and the four '
      + 'construction arcs left visible crossing above and below, '
      + 'labelled as the locus of points equidistant from two points and '
      + 'noting that the arcs are the evidence. The fourth shows two '
      + 'lines crossing with the bisector of the angle between them '
      + 'drawn, and its construction arcs visible, labelled as the locus '
      + 'of points equidistant from two lines. Beneath them a fifth '
      + 'drawing combines two conditions: a circle around a school and a '
      + 'bisector between a road and a stream, with the overlapping '
      + 'region shaded and a test point marked inside it.',
    svg: '<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* 1 circle */
      + '<circle cx="80" cy="90" r="44" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<circle cx="80" cy="90" r="3" fill="currentColor"/>'
      + '<path d="M80 90h44" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" fill="none"/>'
      + '<text x="86" y="86" font-size="10" fill="currentColor">P</text>'
      + '<text x="30" y="156" font-size="10" fill="currentColor">fixed distance</text>'
      + '<text x="36" y="170" font-size="10" fill="currentColor">from a point</text>'
      /* 2 parallel pair */
      + '<path d="M190 90h110" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M190 62h110" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M190 118h110" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="178" y="156" font-size="10" fill="currentColor">fixed distance</text>'
      + '<text x="186" y="170" font-size="10" fill="currentColor">from a line</text>'
      /* 3 perpendicular bisector with arcs */
      + '<path d="M350 90h100" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<g fill="currentColor"><circle cx="350" cy="90" r="3"/><circle cx="450" cy="90" r="3"/></g>'
      + '<text x="342" y="106" font-size="10" fill="currentColor">A</text>'
      + '<text x="446" y="106" font-size="10" fill="currentColor">B</text>'
      + '<path d="M350 90m-62 0a62 62 0 0 1 124 0" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<path d="M350 90m-62 0a62 62 0 0 0 124 0" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<path d="M450 90m-62 0a62 62 0 0 1 124 0" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<path d="M450 90m-62 0a62 62 0 0 0 124 0" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<path d="M400 30v120" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="332" y="170" font-size="10" fill="currentColor">equidistant from two points;</text>'
      + '<text x="342" y="184" font-size="10" fill="#0f8a4d">the arcs are the evidence</text>'
      /* 4 angle bisector */
      + '<g stroke="currentColor" stroke-width="3" fill="none">'
      + '<path d="M520 140L620 70"/><path d="M520 140h100"/>'
      + '</g>'
      + '<path d="M520 140m-0 -40a40 40 0 0 1 36 22" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<path d="M520 140L616 118" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="500" y="170" font-size="10" fill="currentColor">equidistant from two lines</text>'
      /* combined */
      + '<circle cx="200" cy="320" r="90" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="200" cy="320" r="3" fill="currentColor"/>'
      + '<text x="206" y="316" font-size="10" fill="currentColor">school</text>'
      + '<path d="M60 240L420 400" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<text x="420" y="406" font-size="10" fill="currentColor">road</text>'
      + '<path d="M60 400L420 260" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<text x="424" y="258" font-size="10" fill="currentColor">stream</text>'
      + '<path d="M60 324L420 328" stroke="#0f8a4d" stroke-width="3" stroke-dasharray="8 5" fill="none"/>'
      + '<text x="424" y="332" font-size="10" fill="#0f8a4d">bisector</text>'
      + '<path d="M200 320m-90 6a90 90 0 0 0 180 0Z" fill="currentColor" fill-opacity="0.2" stroke="none"/>'
      + '<circle cx="212" cy="360" r="5" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="222" y="364" font-size="10" fill="#0f8a4d">test one point inside the shading</text>'
      + '<text x="60" y="432" font-size="11" fill="currentColor">two conditions leave a region: shade it, label it, and check one interior point against both</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each condition and the locus it gives',
      columns: ['Condition', 'The locus', 'How it is drawn'],
      rows: [
        ['A fixed distance from one point', 'A circle', 'Compasses, set to that distance'],
        ['A fixed distance from a straight line', 'Two parallel lines, one each side', 'Measure off at two places and join'],
        ['Equidistant from two points', 'The perpendicular bisector of the join', 'Arcs from each point, above and below'],
        ['Equidistant from two intersecting lines', 'The two angle bisectors', 'Arc from the vertex, then equal arcs'],
        ['Equidistant from a point and a line', 'A curve, the parabola', 'Beyond this syllabus to construct'],
      ],
      note: 'The first four are the examinable ones, '
        + 'and all four come up inside combined locus questions.',
    },
  ],

  questions: [
    {
      id: 'cl-1',
      ask: 'The locus of points 5 centimetres from a point P is:',
      kind: 'choice',
      options: [
        'A circle of radius 5 centimetres centred at P',
        'A line 5 centimetres from P',
        'Two parallel lines',
      ],
      answer: 'A circle of radius 5 centimetres centred at P',
      teach: 'Give the description in words and the drawing. '
        + 'Mark schemes usually award both.',
      level: 3,
    },
    {
      id: 'cl-2',
      ask: 'The locus of points equidistant from A and B is:',
      kind: 'choice',
      options: [
        'The perpendicular bisector of AB',
        'The circle through A and B',
        'The line AB',
      ],
      answer: 'The perpendicular bisector of AB',
      teach: 'Which is also what the two pairs of arcs construct, '
        + 'so the construction and the locus are the same fact.',
      level: 4,
    },
    {
      id: 'cl-3',
      ask: 'In a construction question, the arcs should be:',
      kind: 'choice',
      options: [
        'Left on the paper, because they are the evidence',
        'Rubbed out for neatness',
        'Drawn in ink',
      ],
      answer: 'Left on the paper, because they are the evidence',
      teach: 'A clean page with no arcs scores almost nothing, '
        + 'even when the line is in the right place.',
      level: 4,
    },
    {
      id: 'cl-4',
      ask: 'Bisecting a constructed 60 degree angle gives:',
      kind: 'numeric',
      options: [],
      answer: '30',
      teach: 'And bisecting a right angle gives 45.',
      level: 4,
    },
    {
      id: 'cl-5',
      ask: 'Why must the compass radius stay the same '
        + 'in the 60 degree construction?',
      kind: 'choice',
      options: [
        'The three equal lengths make the triangle equilateral, so the angle is 60',
        'It keeps the drawing neat',
        'The compasses would break',
      ],
      answer: 'The three equal lengths make the triangle equilateral, so the angle is 60',
      teach: 'Change the radius and the triangle is not equilateral, '
        + 'so the angle is not 60.',
      level: 6,
    },
  ],
})

/* ── sine and cosine rules ─────────────────────────────────────────────── */

teach({
  topicId: 'sine-cosine-rules',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'For a triangle that is not right angled, '
      + 'the sine rule says a over sin A equals b over sin B '
      + 'equals c over sin C. '
      + 'The cosine rule says '
      + 'a squared equals b squared plus c squared minus 2bc cos A. '
      + 'Use the cosine rule when you have two sides and the angle '
      + 'between them, or all three sides. '
      + 'Use the sine rule otherwise. '
      + 'The area is one half ab sin C.',
    method: [
      'Label the triangle so each side faces its own angle.',
      'Count what you are given, and choose the rule from that.',
      'Substitute, then rearrange, and keep the units.',
    ],
  },

  idea:
    'In any triangle, label the angles A, B and C, '
    + 'and label each side with the small letter of the angle it faces, '
    + 'so side a is opposite angle A. '
    + 'The sine rule says that '
    + 'a over sin A equals b over sin B equals c over sin C. '
    + 'It can be turned upside down as '
    + 'sin A over a equals sin B over b, '
    + 'which is more convenient when an angle is wanted. '
    + 'The cosine rule says that '
    + 'a squared equals b squared plus c squared minus 2bc cos A, '
    + 'and the same pattern holds for the other sides. '
    + 'Rearranged for the angle it becomes '
    + 'cos A equals (b squared plus c squared minus a squared) '
    + 'over 2bc. '
    + 'The area of a triangle '
    + 'is one half times two sides times the sine of the angle between '
    + 'them, '
    + 'which is written one half ab sin C. '
    + 'When the angle is 90 degrees, '
    + 'cos A is zero and the cosine rule becomes Pythagoras, '
    + 'and sin C is 1 and the area becomes one half base times height.',

  mechanism:
    'The whole of this topic is one decision, '
    + 'and it is made by counting what the question gave you. '
    + 'There are only four patterns. '
    + 'Two sides and the angle between them: cosine rule, '
    + 'and it gives the third side. '
    + 'All three sides: cosine rule rearranged, '
    + 'and it gives any angle you like. '
    + 'Two angles and any side: sine rule, '
    + 'and remember you can get the third angle for free '
    + 'since they add to 180. '
    + 'Two sides and an angle not between them: sine rule, '
    + 'and this is the awkward case, discussed below. '
    + 'So the first line of any solution '
    + 'should be the sketch with the given parts marked, '
    + 'and the second line should be the name of the rule you chose. '
    + 'Choosing by counting, rather than by trying one and seeing, '
    + 'is what makes this topic quick. '
    + 'The reason the cosine rule is needed for two sides and the '
    + 'included angle '
    + 'is worth seeing: the sine rule relates a side to the angle '
    + 'opposite it, '
    + 'and in that pattern you know no side with its own opposite angle, '
    + 'so the sine rule has no pair to start from. '
    + 'The cosine rule is the one that uses an angle '
    + 'together with the two sides beside it. '
    + 'Two mechanical warnings matter more than anything else here. '
    + 'First, in the cosine rule the whole of 2bc cos A is subtracted. '
    + 'So if A is obtuse, cos A is negative, '
    + 'and subtracting a negative adds, '
    + 'which makes a squared larger than b squared plus c squared. '
    + 'That is correct and it is what you should expect: '
    + 'the side facing an obtuse angle is the long one. '
    + 'A learner who takes the minus sign as meaning the answer gets '
    + 'smaller '
    + 'will get a shorter side and not notice. '
    + 'So after any cosine rule calculation, '
    + 'glance at the triangle and ask whether the longest side '
    + 'does indeed face the largest angle. '
    + 'That check catches almost every arithmetic slip in this topic. '
    + 'Second, the sine rule has an ambiguity '
    + 'when you are finding an angle. '
    + 'The sine of 40 degrees and the sine of 140 degrees are the same '
    + 'number. '
    + 'So an inverse sine on a calculator gives you the acute answer, '
    + 'and the obtuse one may be the correct one. '
    + 'Decide by the diagram: '
    + 'if the side facing your unknown angle is the longest side, '
    + 'the angle may be obtuse, and both answers must be considered. '
    + 'If the given angle is already obtuse, '
    + 'the unknown one cannot be, since two obtuse angles '
    + 'would exceed 180. '
    + 'Saying which case applies, and why, '
    + 'is often a mark in itself. '
    + 'The cosine rule has no such ambiguity, '
    + 'because cosine is negative for an obtuse angle and positive for '
    + 'an acute one, '
    + 'so the sign of the answer tells you which it is. '
    + 'That is a good reason to prefer the cosine rule for an angle '
    + 'whenever all three sides are known. '
    + 'Last, the area formula. '
    + 'It needs the angle between the two sides you are using, '
    + 'not any angle. '
    + 'Mark the two sides and the angle between them on the sketch '
    + 'before substituting, '
    + 'and if the angle given is not between them, '
    + 'find a different pair or find the angle you need first.',

  recap:
    'You have used Pythagoras and the three trigonometric ratios '
    + 'in right angled triangles. '
    + 'This handles triangles with no right angle at all, '
    + 'which is most of the triangles in a real survey or a bearing '
    + 'problem.',

  method: [
    'Sketch the triangle and label the angles A, B, C and the sides a, b, c.',
    'Mark on the sketch exactly what you were given.',
    'Count the pattern: two sides and the included angle, three sides, two angles and a side, or two sides and a non included angle.',
    'Choose the cosine rule for the first two patterns and the sine rule for the others.',
    'Write the rule down before substituting.',
    'Substitute, then rearrange, keeping the units.',
    'For an angle from the sine rule, consider whether the obtuse answer is possible.',
    'Check that the longest side faces the largest angle.',
    'For the area, use the angle between the two sides you are using.',
  ],

  worked: [
    {
      level: 3,
      ask: 'In triangle ABC, b is 7 centimetres, c is 9 centimetres '
        + 'and angle A is 50 degrees. Find a.',
      steps: [
        'Two sides and the angle between them, so the cosine rule.',
        'a squared equals 49 plus 81 minus 2 times 7 times 9 times cos 50.',
        'cos 50 is about 0.643, so 2 times 7 times 9 times 0.643 '
          + 'is about 81.0.',
        'a squared is about 130 minus 81, which is 49.',
      ],
      answer: 'a is about 7 centimetres. '
        + 'Check: the largest angle is not A, '
        + 'and a is not the longest side, which is consistent.',
    },
    {
      level: 4,
      ask: 'In triangle PQR, angle P is 40 degrees, angle Q is 65 degrees '
        + 'and side p is 12 centimetres. Find side q.',
      steps: [
        'Two angles and a side, so the sine rule.',
        'q over sin Q equals p over sin P.',
        'q equals 12 times sin 65 over sin 40.',
        'sin 65 is about 0.906 and sin 40 is about 0.643.',
        'q is about 12 times 1.409.',
      ],
      answer: 'q is about 16.9 centimetres. '
        + 'Angle Q is larger than angle P, '
        + 'so side q should be longer than side p, and it is.',
    },
    {
      level: 5,
      ask: 'A triangle has sides 8, 10 and 15 centimetres. '
        + 'Find its largest angle, and say why the cosine rule is safer '
        + 'here than the sine rule.',
      steps: [
        'The largest angle faces the longest side, which is 15.',
        'cos A equals (64 plus 100 minus 225) over (2 times 8 times 10).',
        'That is minus 61 over 160, which is about minus 0.381.',
        'The negative cosine shows the angle is obtuse.',
        'A is about 112 degrees.',
      ],
      answer: 'About 112 degrees. '
        + 'The cosine rule is safer because a negative cosine '
        + 'says at once that the angle is obtuse, '
        + 'while an inverse sine would have returned the acute answer '
        + 'of about 68 degrees and left you to spot the ambiguity.',
    },
    {
      level: 6,
      ask: 'A farmer has a triangular plot with two sides of 40 metres '
        + 'and 55 metres, meeting at 70 degrees. '
        + 'Find the area, and the length of the fence along the third '
        + 'side.',
      steps: [
        'Area equals one half ab sin C, '
          + 'with the angle between the two sides.',
        'One half times 40 times 55 times sin 70.',
        'sin 70 is about 0.940, so the area is about 1100 times 0.940.',
        'For the third side, two sides and the included angle: '
          + 'cosine rule.',
        'c squared equals 1600 plus 3025 minus 2 times 40 times 55 '
          + 'times cos 70.',
        'cos 70 is about 0.342, so that subtracts about 1505.',
        'c squared is about 4625 minus 1505, which is 3120.',
      ],
      answer: 'The area is about 1034 square metres '
        + 'and the third side is about 55.9 metres. '
        + 'Both used the angle between the two known sides, '
        + 'which is why the question could be done at all.',
    },
  ],

  traps: [
    {
      mistake: 'Using the sine rule with two sides and the angle between '
        + 'them.',
      why: 'The sine rule needs a side with its own opposite angle, '
        + 'and that pattern gives you none. '
        + 'Use the cosine rule.',
    },
    {
      mistake: 'Expecting the cosine rule to make the side shorter when '
        + 'the angle is obtuse.',
      why: 'cos A is then negative, '
        + 'and subtracting a negative adds, '
        + 'so the side facing an obtuse angle is the long one.',
    },
    {
      mistake: 'Taking the calculator answer for an inverse sine as the '
        + 'only one.',
      why: 'The sine of 40 and of 140 are equal. '
        + 'Decide from the diagram whether the obtuse angle is possible.',
    },
    {
      mistake: 'Using the wrong angle in the area formula.',
      why: 'It must be the angle between the two sides you are using. '
        + 'Mark them on the sketch before substituting.',
    },
  ],

  extension:
    'Both rules can be derived from what you already know, '
    + 'and seeing that makes them easier to trust. '
    + 'Drop a perpendicular from one vertex to the opposite side. '
    + 'Its length can be written two ways, '
    + 'as b sin C and as c sin B, '
    + 'and setting those equal gives the sine rule at once. '
    + 'Then apply Pythagoras to the two right angled triangles '
    + 'the perpendicular has made, '
    + 'with the foot of the perpendicular splitting the base, '
    + 'and the cosine rule drops out after a line of algebra. '
    + 'So neither rule is new mathematics. '
    + 'They are Pythagoras and the ratios, '
    + 'applied to a triangle that has been split into two right angled '
    + 'ones.',

  figure: {
    alt: 'A triangle labelled in the standard way, with angles A, B and '
      + 'C at the vertices and each side marked with the small letter of '
      + 'the angle it faces. Beside it four small triangles show the '
      + 'four patterns of given information and the rule each one calls '
      + 'for. The first has two sides and the angle between them marked, '
      + 'labelled cosine rule. The second has all three sides marked, '
      + 'labelled cosine rule rearranged for the angle. The third has '
      + 'two angles and one side marked, labelled sine rule. The fourth '
      + 'has two sides and an angle not between them marked, labelled '
      + 'sine rule with the ambiguous case to check. Beneath them a '
      + 'single note says that the side facing an obtuse angle is the '
      + 'long one, because the cosine of an obtuse angle is negative and '
      + 'subtracting a negative adds.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* main labelled triangle */
      + '<path d="M50 200L210 200L140 70Z" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<text x="36" y="216" font-size="13" fill="currentColor">A</text>'
      + '<text x="214" y="216" font-size="13" fill="currentColor">B</text>'
      + '<text x="134" y="60" font-size="13" fill="currentColor">C</text>'
      + '<text x="124" y="218" font-size="12" fill="#0f8a4d">c</text>'
      + '<text x="184" y="138" font-size="12" fill="#0f8a4d">a</text>'
      + '<text x="84" y="132" font-size="12" fill="#0f8a4d">b</text>'
      + '<text x="20" y="250" font-size="11" fill="currentColor">each side carries the small letter</text>'
      + '<text x="20" y="266" font-size="11" fill="currentColor">of the angle it faces</text>'
      /* four patterns */
      + '<path d="M300 110L380 110L348 60Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 110L380 110" stroke="#0f8a4d" stroke-width="4" fill="none"/>'
      + '<path d="M300 110L348 60" stroke="#0f8a4d" stroke-width="4" fill="none"/>'
      + '<path d="M300 110m18 0a18 18 0 0 0 -8 -14" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="300" y="130" font-size="10" fill="currentColor">two sides and the angle</text>'
      + '<text x="300" y="144" font-size="10" fill="currentColor">between them</text>'
      + '<text x="300" y="160" font-size="10" fill="#0f8a4d">cosine rule</text>'
      + '<path d="M470 110L550 110L518 60Z" stroke="#0f8a4d" stroke-width="4" fill="none"/>'
      + '<text x="470" y="130" font-size="10" fill="currentColor">all three sides</text>'
      + '<text x="470" y="146" font-size="10" fill="#0f8a4d">cosine rule, rearranged</text>'
      + '<text x="470" y="160" font-size="10" fill="#0f8a4d">for the angle</text>'
      + '<path d="M300 250L380 250L348 200Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 250L380 250" stroke="#0f8a4d" stroke-width="4" fill="none"/>'
      + '<path d="M300 250m18 0a18 18 0 0 0 -8 -14" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M380 250m-18 0a18 18 0 0 1 10 -13" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="300" y="270" font-size="10" fill="currentColor">two angles and a side</text>'
      + '<text x="300" y="286" font-size="10" fill="#0f8a4d">sine rule</text>'
      + '<path d="M470 250L550 250L518 200Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M470 250L550 250" stroke="#0f8a4d" stroke-width="4" fill="none"/>'
      + '<path d="M518 200L550 250" stroke="#0f8a4d" stroke-width="4" fill="none"/>'
      + '<path d="M470 250m18 0a18 18 0 0 0 -8 -14" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="470" y="270" font-size="10" fill="currentColor">two sides, angle not between</text>'
      + '<text x="470" y="286" font-size="10" fill="#0f8a4d">sine rule: check the</text>'
      + '<text x="470" y="300" font-size="10" fill="#0f8a4d">obtuse answer too</text>'
      /* obtuse note */
      + '<path d="M50 340L250 340L90 300Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M90 300m20 14a24 24 0 0 0 -4 20" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="20" y="378" font-size="11" fill="#0f8a4d">cos of an obtuse angle is negative, and subtracting a negative adds,</text>'
      + '<text x="20" y="394" font-size="11" fill="#0f8a4d">so the side facing the obtuse angle comes out as the long one</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'What you were given decides which rule to use',
      columns: ['You are given', 'Rule to use', 'It gives you', 'Watch out for'],
      rows: [
        ['Two sides and the angle between them', 'Cosine rule', 'The third side', 'Subtracting a negative cosine'],
        ['All three sides', 'Cosine rule for the angle', 'Any angle', 'Nothing; the sign settles acute or obtuse'],
        ['Two angles and any side', 'Sine rule', 'Another side', 'Getting the third angle free from 180'],
        ['Two sides and an angle not between them', 'Sine rule', 'An angle', 'The obtuse answer may also be valid'],
        ['Two sides and the angle between them', 'Area: one half ab sin C', 'The area', 'The angle must be between those two sides'],
      ],
      note: 'Count the given parts before writing anything. '
        + 'Choosing by counting is what makes this topic quick.',
    },
  ],

  questions: [
    {
      id: 'sc-1',
      ask: 'Given two sides and the angle between them, use the:',
      kind: 'choice',
      options: ['Cosine rule', 'Sine rule', 'Either'],
      answer: 'Cosine rule',
      teach: 'The sine rule needs a side with its own opposite angle, '
        + 'and this pattern gives none.',
      level: 3,
    },
    {
      id: 'sc-2',
      ask: 'The area of a triangle with sides 10 and 12 '
        + 'and an angle of 30 degrees between them is:',
      kind: 'numeric',
      options: [],
      answer: '30',
      teach: 'One half times 10 times 12 times sin 30, '
        + 'and sin 30 is one half, so 60 times 0.5.',
      level: 4,
    },
    {
      id: 'sc-3',
      ask: 'In the cosine rule, a negative value of cos A means the '
        + 'angle A is:',
      kind: 'choice',
      options: ['Obtuse', 'Acute', 'A right angle'],
      answer: 'Obtuse',
      teach: 'And the side facing it comes out longer than the other '
        + 'two, which is the right answer, not an error.',
      level: 5,
    },
    {
      id: 'sc-4',
      ask: 'An inverse sine on a calculator gives 40 degrees. '
        + 'The other possible angle is:',
      kind: 'numeric',
      options: [],
      answer: '140',
      teach: '180 minus 40. '
        + 'Decide from the diagram which one the triangle allows.',
      level: 6,
    },
    {
      id: 'sc-5',
      ask: 'When the angle is 90 degrees, the cosine rule becomes:',
      kind: 'choice',
      options: [
        'Pythagoras, since cos 90 is zero',
        'The sine rule',
        'The area formula',
      ],
      answer: 'Pythagoras, since cos 90 is zero',
      teach: 'Which is a useful check that you have written the rule down '
        + 'correctly.',
      level: 5,
    },
  ],
})

/* ── bearings and angles of elevation ──────────────────────────────────── */

teach({
  topicId: 'bearings-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A bearing is measured from north, clockwise, '
      + 'and written with three figures, '
      + 'so 70 degrees is written 070. '
      + 'Draw a north line at every point before anything else. '
      + 'The back bearing differs by 180 degrees. '
      + 'An angle of elevation is measured up from the horizontal, '
      + 'and an angle of depression down from it, '
      + 'and the two between the same pair of points are equal.',
    method: [
      'Draw a north line at every point in the problem.',
      'Mark each bearing clockwise from its own north line.',
      'Find the angle inside the triangle, then use the sine or cosine rule.',
    ],
  },

  idea:
    'A bearing gives a direction. '
    + 'It is measured from the north line at the point you are standing '
    + 'at, '
    + 'turning clockwise, '
    + 'and it is always written with three figures: '
    + '005, 070, 135, 290. '
    + 'The bearing of B from A '
    + 'and the bearing of A from B are different, '
    + 'and they differ by exactly 180 degrees. '
    + 'The second is called the back bearing. '
    + 'If the first is less than 180, add 180; '
    + 'if it is more than 180, subtract 180. '
    + 'An angle of elevation is the angle between the horizontal '
    + 'and the line of sight to something above you. '
    + 'An angle of depression is the angle between the horizontal '
    + 'and the line of sight to something below you. '
    + 'The angle of elevation of a tower top from a point '
    + 'equals the angle of depression of that point '
    + 'from the tower top, '
    + 'because they are alternate angles between two horizontal lines.',

  mechanism:
    'Every bearing question is won or lost on the diagram, '
    + 'and the diagram has one rule: '
    + 'a north line at every point. '
    + 'Not one north line at the first point. '
    + 'One at each. '
    + 'The reason is that the north lines are parallel, '
    + 'and all the angle work in these problems '
    + 'comes from angles between parallel lines. '
    + 'Suppose the bearing of B from A is 070. '
    + 'Draw north at A and mark 070 clockwise from it to AB. '
    + 'Now draw north at B. '
    + 'The angle between that north line and BA, '
    + 'measured on the inside, '
    + 'is 70 degrees as well, '
    + 'because it is an alternate angle with the one at A. '
    + 'So the back bearing of A from B '
    + 'is 180 plus 70, which is 250, '
    + 'and you have derived it rather than remembered it. '
    + 'That is the whole method: '
    + 'the north lines turn the bearings into angles inside the triangle, '
    + 'and once you have the angles inside the triangle '
    + 'it is an ordinary sine or cosine rule problem. '
    + 'A learner who draws one north line '
    + 'has to guess at the angle at the second point, '
    + 'and that guess is where the question is lost. '
    + 'Three habits of notation are worth building. '
    + 'Write the three figures, always. '
    + 'A bearing of 70 degrees is written 070, '
    + 'and the leading zero is part of the convention, '
    + 'not decoration. '
    + 'Say the bearing of what from where, in that order, '
    + 'because the bearing of B from A '
    + 'and the bearing of A from B are different numbers '
    + 'and the question will specify which it wants. '
    + 'And keep bearings and plain angles apart in your working. '
    + 'Label a bearing as a bearing '
    + 'and the angles inside the triangle as ordinary angles, '
    + 'because mixing them is how a learner ends up '
    + 'putting 250 into a sine rule '
    + 'where the triangle angle is 50. '
    + 'For elevation and depression there is one fact to see clearly, '
    + 'and it saves a great deal of confusion. '
    + 'The angle of depression from the top of a tower to a boat '
    + 'equals the angle of elevation of the tower top from the boat. '
    + 'The reason is that the horizontal at the tower top '
    + 'and the horizontal at the boat are parallel, '
    + 'and the line of sight cuts both, '
    + 'so the two angles are alternate angles. '
    + 'Learners often mark the depression angle inside the triangle '
    + 'at the top of the tower, '
    + 'which is wrong, '
    + 'because the depression is measured from the horizontal '
    + 'and the triangle angle there is 90 minus the depression. '
    + 'The safe move is to transfer it: '
    + 'mark the equal angle at the bottom instead, '
    + 'where it is an ordinary angle in the right angled triangle, '
    + 'and then use tangent. '
    + 'Last, the order of work. '
    + 'Draw, mark north lines, convert bearings to triangle angles, '
    + 'check the triangle angles add to 180, '
    + 'then calculate. '
    + 'That check on 180 is free '
    + 'and it catches nearly every bearing conversion error '
    + 'before it reaches the arithmetic.',

  recap:
    'You have used a compass direction such as north east, '
    + 'and you have worked with angles between parallel lines. '
    + 'This replaces the compass points with three figure bearings, '
    + 'and uses the parallel north lines to get inside the triangle.',

  method: [
    'Draw a rough diagram, large, with the points in roughly the right '
      + 'places.',
    'Draw a north line at every point.',
    'Mark each given bearing clockwise from its own north line.',
    'Use alternate or corresponding angles to find the angles inside the triangle.',
    'Check that the triangle angles add to 180.',
    'Choose the sine or cosine rule from what you now know.',
    'For a distance, calculate and keep the units.',
    'For a bearing answer, convert back to a three figure bearing from the right point.',
    'For elevation, transfer a depression angle to the equal elevation angle below.',
  ],

  worked: [
    {
      level: 3,
      ask: 'The bearing of B from A is 070. '
        + 'Give the bearing of A from B.',
      steps: [
        'The back bearing differs by 180 degrees.',
        '070 is less than 180, so add.',
      ],
      answer: '250. '
        + 'The north lines at A and B are parallel, '
        + 'which is why the difference is exactly 180.',
    },
    {
      level: 4,
      ask: 'The bearing of Q from P is 130. Give the bearing of P from Q.',
      steps: [
        '130 is less than 180, so add 180.',
      ],
      answer: '310.',
    },
    {
      level: 5,
      ask: 'A tower is 25 metres high. '
        + 'From a boat, the angle of elevation of its top is 32 degrees. '
        + 'Find the distance of the boat from the foot of the tower.',
      steps: [
        'Draw the right angled triangle: '
          + 'tower vertical, sea horizontal.',
        'The 32 degrees is at the boat, between the horizontal and the '
          + 'line of sight.',
        'tan 32 equals the opposite over the adjacent, '
          + 'which is 25 over d.',
        'So d equals 25 over tan 32.',
        'tan 32 is about 0.625.',
      ],
      answer: 'About 40 metres. '
        + 'The angle of depression from the tower top to the boat '
        + 'is also 32 degrees, by alternate angles.',
    },
    {
      level: 6,
      ask: 'A ship sails 30 kilometres from A on a bearing of 060 to B, '
        + 'then 40 kilometres from B on a bearing of 140 to C. '
        + 'Find the distance AC.',
      steps: [
        'Draw north lines at A, at B and at C.',
        'At A, AB is 060 clockwise from north.',
        'At B, the north line is parallel to the one at A, '
          + 'so the angle between north at B and BA is 060 '
          + 'measured on the other side, '
          + 'giving a back bearing of 240 for A from B.',
        'BC is on 140 from north at B.',
        'So the angle ABC is 240 minus 140, which is 100 degrees.',
        'Now two sides and the included angle, so the cosine rule.',
        'AC squared equals 900 plus 1600 minus 2 times 30 times 40 '
          + 'times cos 100.',
        'cos 100 is about minus 0.174, '
          + 'so minus 2400 times minus 0.174 adds about 417.',
        'AC squared is about 2500 plus 417, which is 2917.',
      ],
      answer: 'AC is about 54 kilometres. '
        + 'The whole question was the step that found angle ABC as 100 '
        + 'degrees, and that step needed the north line at B.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing only one north line.',
      why: 'The angles inside the triangle come from the parallel north '
        + 'lines. With one line the second angle has to be guessed.',
    },
    {
      mistake: 'Writing a bearing with fewer than three figures.',
      why: 'The convention is three figures, so 70 degrees is 070. '
        + 'The leading zero is part of the answer.',
    },
    {
      mistake: 'Putting a bearing straight into the sine or cosine rule.',
      why: 'A bearing is measured from north, not inside the triangle. '
        + 'Convert it to a triangle angle first, and check the angles '
        + 'add to 180.',
    },
    {
      mistake: 'Marking an angle of depression inside the triangle at the '
        + 'top.',
      why: 'It is measured from the horizontal there, '
        + 'so the triangle angle is 90 minus it. '
        + 'Transfer it to the equal elevation angle below instead.',
    },
  ],

  extension:
    'A journey made of two legs can be answered a second way, '
    + 'using components, '
    + 'and it is often quicker when there are three or more legs. '
    + 'Resolve each leg into how far north and how far east it goes: '
    + '30 kilometres on 060 goes 30 cos 60 north, which is 15, '
    + 'and 30 sin 60 east, which is about 26. '
    + 'Add all the north parts and all the east parts, '
    + 'and the resultant comes from Pythagoras '
    + 'with its bearing from the inverse tangent of east over north. '
    + 'This is how a ship or an aircraft actually keeps its position, '
    + 'and it scales to any number of legs '
    + 'while the cosine rule method does not.',

  figure: {
    alt: 'Two points A and B with a north line drawn at each, the two '
      + 'north lines parallel and vertical. The line AB runs up to the '
      + 'right, and at A the bearing of B from A is marked as seventy '
      + 'degrees measured clockwise from the north line at A. At B the '
      + 'angle between its north line and the line back to A is marked, '
      + 'also seventy degrees, labelled as an alternate angle with the '
      + 'one at A, and the full back bearing is marked as one hundred '
      + 'and eighty plus seventy, giving two hundred and fifty. Below, a '
      + 'second drawing shows a tower standing on the shore with a boat '
      + 'out at sea. The horizontal at the tower top and the sea surface '
      + 'are drawn as two parallel lines, with the angle of depression '
      + 'marked at the top between the horizontal and the line of sight, '
      + 'and the equal angle of elevation marked at the boat, labelled '
      + 'as alternate angles, with a note to transfer the angle down to '
      + 'the boat where it sits inside the right angled triangle.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* bearings */
      + '<path d="M90 190V60" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M84 70l6-14 6 14Z" fill="currentColor"/>'
      + '<text x="76" y="52" font-size="11" fill="currentColor">N</text>'
      + '<path d="M300 130V20" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M294 30l6-14 6 14Z" fill="currentColor"/>'
      + '<text x="286" y="14" font-size="11" fill="currentColor">N</text>'
      + '<path d="M90 190L300 130" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<g fill="currentColor"><circle cx="90" cy="190" r="4"/><circle cx="300" cy="130" r="4"/></g>'
      + '<text x="72" y="208" font-size="12" fill="currentColor">A</text>'
      + '<text x="306" y="146" font-size="12" fill="currentColor">B</text>'
      /* 070 arc at A */
      + '<path d="M90 140a50 50 0 0 1 48 36" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="104" y="150" font-size="11" fill="#0f8a4d">070</text>'
      /* alternate angle at B */
      + '<path d="M300 170a40 40 0 0 0 -38 -28" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="252" y="182" font-size="11" fill="#0f8a4d">70, alternate</text>'
      + '<text x="330" y="100" font-size="11" fill="currentColor">the two north lines are parallel,</text>'
      + '<text x="330" y="116" font-size="11" fill="currentColor">so the angle at B is the same 70</text>'
      + '<text x="330" y="140" font-size="11" fill="#0f8a4d">bearing of A from B = 180 + 70 = 250</text>'
      + '<text x="40" y="240" font-size="11" fill="currentColor">a north line at every point, always</text>'
      /* tower and boat */
      + '<path d="M90 380v-90" stroke="currentColor" stroke-width="4" fill="none"/>'
      + '<path d="M60 380h450" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M90 290h180" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4" fill="none"/>'
      + '<path d="M90 290L360 380" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<circle cx="360" cy="380" r="5" fill="currentColor"/>'
      + '<text x="340" y="400" font-size="11" fill="currentColor">boat</text>'
      + '<text x="56" y="286" font-size="11" fill="currentColor">tower top</text>'
      /* depression arc */
      + '<path d="M140 290a50 50 0 0 0 -4 16" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="146" y="302" font-size="10" fill="#0f8a4d">depression</text>'
      /* elevation arc */
      + '<path d="M320 380a44 44 0 0 1 -8 -26" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="252" y="366" font-size="10" fill="#0f8a4d">equal elevation</text>'
      + '<text x="40" y="412" font-size="11" fill="#0f8a4d">transfer the depression down to the boat, where it sits inside the right angled triangle</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Bearings, back bearings and what each one is measured from',
      columns: ['Bearing of B from A', 'Measured at', 'Back bearing of A from B', 'Rule used'],
      rows: [
        ['005', 'North line at A', '185', 'Add 180'],
        ['070', 'North line at A', '250', 'Add 180'],
        ['130', 'North line at A', '310', 'Add 180'],
        ['200', 'North line at A', '020', 'Subtract 180'],
        ['290', 'North line at A', '110', 'Subtract 180'],
      ],
      note: 'All five answers are three figures. '
        + 'The reason the difference is exactly 180 '
        + 'is that the north lines at A and B are parallel.',
    },
  ],

  questions: [
    {
      id: 'be-1',
      ask: 'A bearing of 70 degrees is written as:',
      kind: 'choice',
      options: ['070', '70', '70.0'],
      answer: '070',
      teach: 'Three figures always, so the leading zero is part of the '
        + 'answer.',
      level: 3,
    },
    {
      id: 'be-2',
      ask: 'The bearing of Q from P is 130. '
        + 'Give the bearing of P from Q.',
      kind: 'numeric',
      options: [],
      answer: '310',
      teach: 'Less than 180, so add 180.',
      level: 4,
    },
    {
      id: 'be-3',
      ask: 'Why must a north line be drawn at every point?',
      kind: 'choice',
      options: [
        'The parallel north lines give the angles inside the triangle',
        'To show which way is up',
        'It is only a convention',
      ],
      answer: 'The parallel north lines give the angles inside the triangle',
      teach: 'With one north line the angle at the second point has to '
        + 'be guessed, and that is where the question is lost.',
      level: 5,
    },
    {
      id: 'be-4',
      ask: 'An angle of depression from a tower top to a boat '
        + 'is equal to:',
      kind: 'choice',
      options: [
        'The angle of elevation of the tower top from the boat',
        '90 minus the elevation',
        'The bearing of the boat',
      ],
      answer: 'The angle of elevation of the tower top from the boat',
      teach: 'The two horizontals are parallel and the line of sight '
        + 'cuts both, so the angles are alternate.',
      level: 5,
    },
    {
      id: 'be-5',
      ask: 'A bearing may be put straight into the cosine rule:',
      kind: 'choice',
      options: [
        'No; convert it to an angle inside the triangle first',
        'Yes, always',
        'Only if it is under 180',
      ],
      answer: 'No; convert it to an angle inside the triangle first',
      teach: 'A bearing is measured from north. '
        + 'Convert, then check the triangle angles add to 180.',
      level: 6,
    },
  ],
})

/* ── surface area and volume of solids ─────────────────────────────────── */

teach({
  topicId: 'solids-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Volume of a prism or a cylinder '
      + 'is the area of the cross section times the length. '
      + 'Volume of a cone or a pyramid is one third of that. '
      + 'Volume of a sphere is four thirds pi r cubed. '
      + 'For a cone, the slant height l and the vertical height h '
      + 'are different lengths, '
      + 'joined by l squared equals h squared plus r squared. '
      + 'Read whether the question wants curved or total surface area.',
    method: [
      'Name the solid and write down which formula you need.',
      'Check whether you have been given the slant height or the vertical height.',
      'Read whether curved or total surface area is wanted, and keep the units.',
    ],
  },

  idea:
    'A prism has the same cross section all along its length. '
    + 'Its volume is the area of that cross section times the length. '
    + 'A cylinder is a prism with a circular cross section, '
    + 'so its volume is pi r squared times h. '
    + 'Its curved surface area is 2 pi r h, '
    + 'and its total surface area adds the two circular ends, '
    + 'giving 2 pi r h plus 2 pi r squared. '
    + 'A cone has volume one third pi r squared h, '
    + 'curved surface area pi r l where l is the slant height, '
    + 'and total surface area pi r l plus pi r squared. '
    + 'A pyramid has volume one third times the base area times the '
    + 'vertical height. '
    + 'A sphere has volume four thirds pi r cubed '
    + 'and surface area 4 pi r squared. '
    + 'For a cone, the radius, the vertical height and the slant height '
    + 'form a right angled triangle, '
    + 'so l squared equals h squared plus r squared. '
    + 'Volume is measured in cubic units '
    + 'and surface area in square units.',

  mechanism:
    'Three things go wrong in this topic, '
    + 'and all three are about reading rather than about calculating. '
    + 'The first is the cone, '
    + 'and it is the single commonest lost mark in SHS mensuration. '
    + 'A cone has two different heights. '
    + 'The vertical height h runs from the apex straight down to the '
    + 'centre of the base. '
    + 'The slant height l runs from the apex down the side to the rim. '
    + 'They are not the same number, '
    + 'and l is always the longer. '
    + 'The volume formula needs h. '
    + 'The curved surface area formula needs l. '
    + 'So a question that gives you one '
    + 'and asks for the thing that needs the other '
    + 'is asking you to use Pythagoras first, '
    + 'and that is usually where the marks are. '
    + 'Given r equals 5 and l equals 13, '
    + 'then h squared equals 169 minus 25, which is 144, so h is 12. '
    + 'Now the volume can be found. '
    + 'Draw the right angled triangle inside the cone every time, '
    + 'label r, h and l on it, '
    + 'and the question tells you which one you are missing. '
    + 'The second is curved against total surface area, '
    + 'and it is a reading error with a real consequence. '
    + 'A closed cylindrical tank has two ends. '
    + 'An open pipe has none. '
    + 'A cylindrical tank with a lid but standing on the ground '
    + 'has one end that matters for painting '
    + 'and one that does not. '
    + 'So read the words of the question: '
    + 'closed, open, open at one end, '
    + 'and count the circles yourself rather than reaching for a '
    + 'remembered total. '
    + 'The same applies to a cone: '
    + 'a solid cone has a base circle, '
    + 'a conical roof or a party hat does not. '
    + 'This is why the lesson gives curved and total separately '
    + 'instead of giving one formula for each solid. '
    + 'The third is units, '
    + 'and it costs more marks than it should. '
    + 'Volume is cubic and area is square, '
    + 'and when the dimensions are mixed '
    + 'they must all be converted before anything is multiplied. '
    + 'Note that the conversion factors are not what a learner expects: '
    + '1 metre is 100 centimetres, '
    + 'but 1 square metre is 10000 square centimetres, '
    + 'and 1 cubic metre is 1000000 cubic centimetres. '
    + 'A learner who divides a volume in cubic centimetres by 100 '
    + 'to get cubic metres is out by a factor of ten thousand, '
    + 'and the answer is nonsense without looking obviously wrong. '
    + 'Also useful in Ghanaian questions: '
    + '1 litre is 1000 cubic centimetres, '
    + 'so a cylindrical water tank of 1 cubic metre holds 1000 litres. '
    + 'That conversion turns a mensuration answer '
    + 'into something a question about filling a polytank can use. '
    + 'One more habit. '
    + 'When a solid is made of two solids joined, '
    + 'such as a cylinder with a cone on top or a hemisphere on the end, '
    + 'split it, '
    + 'work each part separately, '
    + 'and then be careful about the surfaces. '
    + 'Volumes simply add. '
    + 'Surface areas do not, '
    + 'because the two faces that are joined have disappeared from the '
    + 'outside. '
    + 'For a cylinder topped by a cone '
    + 'the total outside area is the cone curved area '
    + 'plus the cylinder curved area '
    + 'plus the one circle at the bottom, '
    + 'and the circle where they meet is counted zero times, '
    + 'not twice. '
    + 'Saying that explicitly in the working is worth a mark.',

  recap:
    'You have found the area of a circle and a triangle, '
    + 'and the volume of a cuboid and a cylinder. '
    + 'This adds the cone, the pyramid and the sphere, '
    + 'and asks you to read carefully which height '
    + 'and which surfaces the question means.',

  method: [
    'Name the solid, and sketch it.',
    'Label every length given, with its units.',
    'For a cone, draw the right angled triangle of r, h and l inside it.',
    'If the height you need is missing, find it with Pythagoras.',
    'Convert all lengths to the same unit before multiplying.',
    'Write the formula down before substituting.',
    'For surface area, read whether it is open or closed, and count the circles.',
    'For a joined solid, add the volumes, '
      + 'but leave out any face that is now inside.',
    'Give the answer with cubic units for volume and square units for area.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A cylinder has radius 7 centimetres and height 20 '
        + 'centimetres. '
        + 'Find its volume, taking pi as 22 over 7.',
      steps: [
        'Volume equals pi r squared h.',
        '22 over 7 times 49 times 20.',
        '22 over 7 times 49 is 154.',
        '154 times 20.',
      ],
      answer: '3080 cubic centimetres, '
        + 'which is 3.08 litres.',
    },
    {
      level: 4,
      ask: 'A cone has radius 5 centimetres and slant height 13 '
        + 'centimetres. '
        + 'Find its vertical height, then its volume, taking pi as 3.14.',
      steps: [
        'l squared equals h squared plus r squared.',
        '169 equals h squared plus 25, so h squared is 144 and h is 12.',
        'Volume equals one third pi r squared h.',
        'One third times 3.14 times 25 times 12.',
        '3.14 times 25 is 78.5, times 12 is 942, divided by 3.',
      ],
      answer: 'Vertical height 12 centimetres, '
        + 'volume 314 cubic centimetres. '
        + 'The slant height was given and the volume needed the vertical '
        + 'height, which is exactly the step the question was testing.',
    },
    {
      level: 5,
      ask: 'A closed cylindrical water tank has radius 1.4 metres '
        + 'and height 3 metres. '
        + 'Find its total surface area and its capacity in litres, '
        + 'taking pi as 22 over 7.',
      steps: [
        'Curved area equals 2 pi r h: '
          + '2 times 22 over 7 times 1.4 times 3, which is 26.4 square '
          + 'metres.',
        'Two ends: 2 pi r squared equals 2 times 22 over 7 times 1.96, '
          + 'which is about 12.32 square metres.',
        'Total about 38.7 square metres.',
        'Volume equals pi r squared h: 22 over 7 times 1.96 times 3, '
          + 'which is about 18.48 cubic metres.',
        '1 cubic metre is 1000 litres.',
      ],
      answer: 'About 38.7 square metres of surface, '
        + 'and about 18480 litres of water. '
        + 'Closed means both ends count, '
        + 'and the litre conversion is what makes the answer useful.',
    },
    {
      level: 6,
      ask: 'A grain store is a cylinder of radius 2 metres '
        + 'and height 3 metres, '
        + 'with a conical roof of slant height 2.5 metres. '
        + 'Find the volume, and the area to be thatched or painted '
        + 'on the outside, including the floor.',
      steps: [
        'Cone vertical height: l squared equals h squared plus r '
          + 'squared, so 6.25 equals h squared plus 4, so h is 1.5.',
        'Cylinder volume: pi times 4 times 3, which is 12 pi.',
        'Cone volume: one third pi times 4 times 1.5, which is 2 pi.',
        'Total volume 14 pi, which is about 44 cubic metres.',
        'Cone curved area: pi r l equals pi times 2 times 2.5, '
          + 'which is 5 pi.',
        'Cylinder curved area: 2 pi r h equals 12 pi.',
        'Floor: pi r squared equals 4 pi.',
        'The circle where the cone meets the cylinder is inside, '
          + 'so it is counted zero times.',
      ],
      answer: 'Volume about 44 cubic metres. '
        + 'Outside area 5 pi plus 12 pi plus 4 pi, which is 21 pi, '
        + 'about 66 square metres. '
        + 'The volumes added; the joining circle did not, '
        + 'because it is no longer on the outside.',
    },
  ],

  traps: [
    {
      mistake: 'Using the slant height in the volume of a cone.',
      why: 'The volume needs the vertical height. '
        + 'Draw the triangle of r, h and l and convert with Pythagoras.',
    },
    {
      mistake: 'Giving total surface area when curved was asked for, or '
        + 'the reverse.',
      why: 'Read the words: closed, open, open at one end. '
        + 'Count the circles yourself.',
    },
    {
      mistake: 'Converting a volume between metres and centimetres by '
        + '100.',
      why: 'Volume scales by the cube, '
        + 'so 1 cubic metre is 1000000 cubic centimetres. '
        + 'Area scales by the square.',
    },
    {
      mistake: 'Adding surface areas when two solids are joined.',
      why: 'The joining faces are now inside. '
        + 'Volumes add; areas do not.',
    },
  ],

  extension:
    'All three of the one third formulas have the same reason behind them. '
    + 'A pyramid or a cone, '
    + 'standing on the same base as a prism or cylinder '
    + 'and with the same height, '
    + 'holds exactly one third as much. '
    + 'You can see it roughly by experiment: '
    + 'a cone shaped paper cup filled with sand three times '
    + 'fills a cylinder of the same base and height. '
    + 'A school with a tin and some stiff paper can do that in ten '
    + 'minutes, '
    + 'and it is worth doing once, '
    + 'because afterwards the one third is a remembered fact '
    + 'about a real pouring '
    + 'rather than a number in a formula.',

  figure: {
    alt: 'A cone drawn with the right angled triangle inside it made '
      + 'visible. The radius r runs from the centre of the base to the '
      + 'rim, the vertical height h runs from the apex straight down to '
      + 'the centre of the base, and the slant height l runs from the '
      + 'apex to the rim, with the right angle at the base centre '
      + 'marked. The relation l squared equals h squared plus r squared '
      + 'is written beside it, with a note that the volume needs h and '
      + 'the curved surface area needs l. Beside the cone a cylinder is '
      + 'drawn opened out flat as a net: a rectangle whose length is the '
      + 'circumference two pi r and whose height is h, with a circle at '
      + 'each end, labelled to show that the curved surface area is two '
      + 'pi r times h and that the two circles are counted only if the '
      + 'question says the solid is closed. Beneath them a composite '
      + 'solid of a cylinder with a conical roof is drawn, with the '
      + 'circle where the two meet marked with a cross and noted as '
      + 'counting zero times in the outside area although the volumes '
      + 'still add.',
    svg: '<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* cone */
      + '<path d="M120 50L50 190h140Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M50 190a70 20 0 0 0 140 0" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M50 190a70 20 0 0 1 140 0" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" fill="none"/>'
      + '<path d="M120 50V190" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M120 190h70" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M120 176h14v14" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="126" y="126" font-size="12" fill="#0f8a4d">h</text>'
      + '<text x="150" y="184" font-size="12" fill="#0f8a4d">r</text>'
      + '<text x="150" y="110" font-size="12" fill="currentColor">l</text>'
      + '<text x="20" y="226" font-size="11" fill="currentColor">l squared = h squared + r squared</text>'
      + '<text x="20" y="244" font-size="11" fill="#0f8a4d">volume needs h; curved area needs l</text>'
      /* cylinder net */
      + '<rect x="300" y="80" width="200" height="90" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="270" cy="125" r="28" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="530" cy="125" r="28" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="340" y="66" font-size="11" fill="currentColor">length = 2 pi r, the circumference</text>'
      + '<text x="506" y="178" font-size="11" fill="currentColor">height h</text>'
      + '<text x="300" y="200" font-size="11" fill="#0f8a4d">curved area = 2 pi r h</text>'
      + '<text x="300" y="218" font-size="11" fill="currentColor">add the two circles only if the solid is closed</text>'
      + '<text x="300" y="236" font-size="11" fill="currentColor">a pipe has none; a tank has two</text>'
      /* composite */
      + '<path d="M200 420h120V330H200Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M260 280L200 330h120Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M200 330h120" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M248 322l24 16" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M272 322l-24 16" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="336" y="326" font-size="11" fill="#0f8a4d">this circle is now inside:</text>'
      + '<text x="336" y="342" font-size="11" fill="#0f8a4d">counted zero times in the</text>'
      + '<text x="336" y="358" font-size="11" fill="#0f8a4d">outside area</text>'
      + '<text x="336" y="384" font-size="11" fill="currentColor">volumes still add: cylinder plus cone</text>'
      + '<text x="20" y="300" font-size="11" fill="currentColor">1 cubic metre = 1000000 cubic centimetres = 1000 litres</text>'
      + '<text x="20" y="418" font-size="11" fill="currentColor">volume in cubic units; area in square units</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The formulas for each solid, kept separate for curved and total area',
      columns: ['Solid', 'Volume', 'Curved or slant area', 'Add for a closed solid'],
      rows: [
        ['Prism', 'Cross section area times length', 'Perimeter times length', 'The two end faces'],
        ['Cylinder', 'pi r squared h', '2 pi r h', '2 pi r squared, the two circles'],
        ['Cone', 'one third pi r squared h', 'pi r l', 'pi r squared, the base circle'],
        ['Pyramid', 'one third base area times h', 'Sum of the triangular faces', 'The base'],
        ['Sphere', 'four thirds pi r cubed', '4 pi r squared', 'Nothing; it is already closed'],
        ['Hemisphere', 'two thirds pi r cubed', '2 pi r squared', 'pi r squared, the flat circle'],
      ],
      note: 'The cone row is the one to read twice. '
        + 'The volume uses h and the curved area uses l, '
        + 'and the two are different lengths.',
    },
    {
      caption: 'Conversions that are got wrong because they are not what you expect',
      columns: ['From', 'To', 'Multiply by', 'Why'],
      rows: [
        ['Metres', 'Centimetres', '100', 'Length scales once'],
        ['Square metres', 'Square centimetres', '10000', 'Area scales by the square of 100'],
        ['Cubic metres', 'Cubic centimetres', '1000000', 'Volume scales by the cube of 100'],
        ['Cubic centimetres', 'Litres', 'Divide by 1000', '1 litre is 1000 cubic centimetres'],
        ['Cubic metres', 'Litres', '1000', 'A cubic metre is a thousand litres'],
      ],
      note: 'The last row turns a mensuration answer into something a '
        + 'question about filling a polytank can use.',
    },
  ],

  questions: [
    {
      id: 'so-1',
      ask: 'The volume of a cone is one third pi r squared times:',
      kind: 'choice',
      options: [
        'The vertical height',
        'The slant height',
        'The radius',
      ],
      answer: 'The vertical height',
      teach: 'The curved surface area is the one that uses the slant '
        + 'height.',
      level: 4,
    },
    {
      id: 'so-2',
      ask: 'A cone has r equal to 5 and l equal to 13. '
        + 'Give its vertical height.',
      kind: 'numeric',
      options: [],
      answer: '12',
      teach: '169 minus 25 is 144, and the square root of 144 is 12.',
      level: 4,
    },
    {
      id: 'so-3',
      ask: 'How many cubic centimetres are in a cubic metre?',
      kind: 'numeric',
      options: [],
      answer: '1000000',
      teach: 'Volume scales by the cube of 100, not by 100.',
      level: 5,
    },
    {
      id: 'so-4',
      ask: 'A cylinder open at both ends has a surface area of:',
      kind: 'choice',
      options: [
        '2 pi r h only',
        '2 pi r h plus 2 pi r squared',
        '2 pi r h plus pi r squared',
      ],
      answer: '2 pi r h only',
      teach: 'No circles at all; it is a pipe. '
        + 'Read the words of the question and count the circles.',
      level: 5,
    },
    {
      id: 'so-5',
      ask: 'A cone sits on top of a cylinder. For the outside area, '
        + 'the circle where they meet is counted:',
      kind: 'numeric',
      options: [],
      answer: '0',
      teach: 'It is now inside the solid. '
        + 'Volumes add, but a face that has gone inside is not a '
        + 'surface.',
      level: 6,
    },
  ],
})

/* ── measures of dispersion ────────────────────────────────────────────── */

teach({
  topicId: 'measures-spread',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An average says where the middle is. '
      + 'A measure of spread says how far from the middle the values lie, '
      + 'and two sets with the same mean can be quite different. '
      + 'Range is largest minus smallest. '
      + 'The interquartile range is the upper quartile minus the lower. '
      + 'Variance is the mean of the squared distances from the mean, '
      + 'and the standard deviation is its square root, '
      + 'which puts it back into the original units.',
    method: [
      'Find the mean first; the spread is measured from it.',
      'Set out a table of x, the distance from the mean, and its square.',
      'Take the mean of those squares, then the square root.',
    ],
  },

  idea:
    'A measure of dispersion says how spread out a set of values is. '
    + 'The range is the largest value minus the smallest, '
    + 'and it uses only two values, '
    + 'so one freak value changes it completely. '
    + 'The quartiles divide an ordered set into four. '
    + 'The lower quartile has a quarter of the values below it '
    + 'and the upper quartile has three quarters below it. '
    + 'The interquartile range is the upper quartile minus the lower, '
    + 'and it describes the middle half, '
    + 'so it ignores freak values at either end. '
    + 'The variance is found by taking each value’s distance from the '
    + 'mean, '
    + 'squaring it, '
    + 'and taking the mean of those squares. '
    + 'The standard deviation is the square root of the variance. '
    + 'For a frequency table, '
    + 'each squared distance is multiplied by its frequency '
    + 'before the total is divided by the total frequency. '
    + 'A small standard deviation means the values cluster near the mean, '
    + 'and a large one means they are scattered.',

  mechanism:
    'Begin with why the topic exists, '
    + 'because a learner who cannot answer that '
    + 'treats the formulas as arbitrary. '
    + 'Two schools each have a mean examination mark of 60. '
    + 'In the first, every pupil scored between 55 and 65. '
    + 'In the second, half scored 30 and half scored 90. '
    + 'The averages are identical and the schools are nothing alike. '
    + 'The mean cannot tell them apart, and a measure of spread can. '
    + 'That is the whole argument, '
    + 'and it is the answer to any question asking '
    + 'what spread adds to an average. '
    + 'Now the mechanics, where three things matter. '
    + 'First, the squaring, '
    + 'and why the distances are not simply averaged. '
    + 'Add up the distances from the mean, with their signs, '
    + 'and the total is always exactly zero, '
    + 'because that is what the mean is: '
    + 'the point where the pulls balance. '
    + 'So the plain average distance is useless, '
    + 'and something has to be done about the signs. '
    + 'Squaring does it, '
    + 'and it also makes a large distance count for much more than a '
    + 'small one, '
    + 'which matches how we think about an outlier. '
    + 'Then the square root at the end undoes the squaring '
    + 'so that the answer is in the same units as the data: '
    + 'variance of marks is in marks squared, which means nothing, '
    + 'while a standard deviation of 7.5 marks is a sentence '
    + 'a teacher can use. '
    + 'Saying that is the full answer to why the square root is taken. '
    + 'Second, the table, '
    + 'because this is a question where the layout is marked. '
    + 'Draw columns for x, for the frequency f if there is one, '
    + 'for f x, '
    + 'for the distance x minus the mean, '
    + 'for the square of that distance, '
    + 'and for f times that square. '
    + 'Total the f column and the f x column '
    + 'and find the mean before touching the distance columns, '
    + 'because every later column needs it. '
    + 'A learner who tries to do it without the table '
    + 'loses track of a sign somewhere in the middle '
    + 'and has nothing to show the examiner. '
    + 'Third, when to use which measure, '
    + 'which is a question the paper asks directly. '
    + 'Use the range for a quick idea and nothing more. '
    + 'Use the interquartile range when there is an extreme value '
    + 'you want ignored, '
    + 'because it looks only at the middle half: '
    + 'one trader in a market with enormous takings '
    + 'does not move it at all. '
    + 'Use the standard deviation '
    + 'when every value should count and the data has no freak values, '
    + 'and when the data will be compared with another set, '
    + 'because the standard deviation is the measure '
    + 'the rest of statistics is built on. '
    + 'One last caution about an outlier. '
    + 'An extreme value should be looked at, not automatically removed. '
    + 'Sometimes it is a recording error and should go. '
    + 'Sometimes it is the most important fact in the data, '
    + 'as with the one flooded farm in a survey of yields. '
    + 'The honest practice is to report both, '
    + 'with and without it, '
    + 'and say what you did.',

  recap:
    'You have found the mean, the median and the mode, '
    + 'and drawn bar charts from a frequency table. '
    + 'This asks the question an average cannot answer: '
    + 'how close together the values actually are.',

  method: [
    'Order the values if quartiles or the range are wanted.',
    'Range: largest minus smallest.',
    'Quartiles: find the value a quarter and three quarters of the way through.',
    'Interquartile range: upper quartile minus lower quartile.',
    'For a standard deviation, first find the mean.',
    'Make a table: x, f, f x, x minus the mean, its square, f times its square.',
    'Total the last column.',
    'Variance: that total divided by the total frequency.',
    'Standard deviation: the square root of the variance, in the original units.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the range and the interquartile range of '
        + '4, 7, 8, 11, 13, 15, 21.',
      steps: [
        'They are already in order. Range: 21 minus 4.',
        'Seven values, so the median is the fourth, 11.',
        'Lower quartile is the middle of 4, 7, 8, which is 7.',
        'Upper quartile is the middle of 13, 15, 21, which is 15.',
      ],
      answer: 'Range 17. '
        + 'Interquartile range 15 minus 7, which is 8.',
    },
    {
      level: 4,
      ask: 'Two sets both have mean 60. '
        + 'Set A is 55, 58, 60, 62, 65. '
        + 'Set B is 30, 30, 60, 90, 90. '
        + 'Say what a measure of spread adds here.',
      steps: [
        'Both means are 60, so the mean cannot tell them apart.',
        'Set A ranges over 10 marks; set B over 60.',
        'Set A clusters tightly; set B has nobody near the mean at all.',
      ],
      answer: 'The spread shows that the sets are quite different '
        + 'although their averages are identical. '
        + 'In Set B the mean describes nobody, '
        + 'which is exactly the situation a measure of spread exists to '
        + 'reveal.',
    },
    {
      level: 5,
      ask: 'Find the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.',
      steps: [
        'Total is 40 and there are 8 values, so the mean is 5.',
        'Distances from the mean: minus 3, minus 1, minus 1, minus 1, '
          + '0, 0, 2, 4.',
        'Their squares: 9, 1, 1, 1, 0, 0, 4, 16.',
        'Total of the squares is 32.',
        'Variance is 32 over 8, which is 4.',
        'Standard deviation is the square root of 4.',
      ],
      answer: '2. '
        + 'Notice that the distances themselves add to zero, '
        + 'which is why they had to be squared first.',
    },
    {
      level: 6,
      ask: 'A survey of ten farms gives yields in bags: '
        + '12, 13, 13, 14, 14, 15, 15, 16, 17, and one flooded farm at 1. '
        + 'Say which measure of spread to report, and why, '
        + 'and what to do about the flooded farm.',
      steps: [
        'The flooded farm is far from the rest, so it is an outlier.',
        'The range would be 16, almost all of it caused by that one farm.',
        'The standard deviation would also be pulled up by it, '
          + 'because the distance is squared.',
        'The interquartile range looks only at the middle half, '
          + 'so the flooded farm does not affect it.',
        'But the flooded farm may be the most important fact in the '
          + 'survey.',
      ],
      answer: 'Report the interquartile range as the measure of the '
        + 'typical spread, because it is not distorted by the one farm. '
        + 'Then report the flooded farm separately rather than deleting '
        + 'it, with the standard deviation given both with and without '
        + 'it, and say which you did. '
        + 'An outlier is to be examined, not automatically removed.',
    },
  ],

  traps: [
    {
      mistake: 'Averaging the distances from the mean without squaring.',
      why: 'They always add to exactly zero, '
        + 'because the mean is where the pulls balance. '
        + 'Squaring removes the signs.',
    },
    {
      mistake: 'Giving the variance as the final answer.',
      why: 'It is in squared units, which mean nothing. '
        + 'Take the square root so the answer is in marks, bags or '
        + 'cedis.',
    },
    {
      mistake: 'Forgetting to multiply by the frequency.',
      why: 'In a frequency table each squared distance occurs f times. '
        + 'Total f times the square, then divide by the total frequency.',
    },
    {
      mistake: 'Deleting an outlier to tidy the data.',
      why: 'It may be the most important observation there is. '
        + 'Report with and without it, and say what you did.',
    },
  ],

  extension:
    'There is a shortcut formula for the variance '
    + 'that avoids the column of distances: '
    + 'the variance equals the mean of the squares minus the square of '
    + 'the mean. '
    + 'For the worked example, '
    + 'the mean of the squares is 232 over 8, which is 29, '
    + 'and the square of the mean is 25, '
    + 'so the variance is 4, as before. '
    + 'It is quicker and it is safer with awkward means, '
    + 'because nothing is subtracted until the end. '
    + 'The cost is that it shows the examiner less of your reasoning, '
    + 'so the long way is better when method marks are at stake '
    + 'and the shortcut is better when a quick answer is wanted.',

  figure: {
    alt: 'Two dot plots drawn one above the other on the same scale from '
      + 'twenty five to ninety five, both with their mean marked at '
      + 'sixty by a vertical line. The upper plot, Set A, has five dots '
      + 'clustered tightly between fifty five and sixty five, with a '
      + 'note that the standard deviation is small and the mean '
      + 'describes everybody. The lower plot, Set B, has two dots at '
      + 'thirty and two at ninety with one at sixty, spread right across '
      + 'the scale, with a note that the standard deviation is large and '
      + 'the mean describes almost nobody. Both are labelled as having '
      + 'the same mean of sixty, with a line beneath saying that an '
      + 'average alone cannot tell these two sets apart. Beside the '
      + 'plots a small worked table shows the columns used for a '
      + 'standard deviation: the value, the distance from the mean, and '
      + 'the square of that distance, with a note that the distances '
      + 'themselves add to zero, which is why they are squared.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* scale A */
      + '<path d="M40 130h320" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M40 130v8"/><path d="M120 130v8"/><path d="M200 130v8"/>'
      + '<path d="M280 130v8"/><path d="M360 130v8"/>'
      + '</g>'
      + '<text x="30" y="152" font-size="10" fill="currentColor">25</text>'
      + '<text x="190" y="152" font-size="10" fill="currentColor">60</text>'
      + '<text x="346" y="152" font-size="10" fill="currentColor">95</text>'
      + '<path d="M200 60v70" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="5 4" fill="none"/>'
      + '<g fill="currentColor">'
      + '<circle cx="184" cy="112" r="6"/><circle cx="191" cy="96" r="6"/>'
      + '<circle cx="200" cy="112" r="6"/><circle cx="209" cy="96" r="6"/>'
      + '<circle cx="216" cy="112" r="6"/>'
      + '</g>'
      + '<text x="40" y="52" font-size="11" fill="currentColor">Set A: mean 60</text>'
      + '<text x="236" y="96" font-size="10" fill="#0f8a4d">small spread: the mean</text>'
      + '<text x="236" y="110" font-size="10" fill="#0f8a4d">describes everybody</text>'
      /* scale B */
      + '<path d="M40 270h320" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M40 270v8"/><path d="M120 270v8"/><path d="M200 270v8"/>'
      + '<path d="M280 270v8"/><path d="M360 270v8"/>'
      + '</g>'
      + '<text x="30" y="292" font-size="10" fill="currentColor">25</text>'
      + '<text x="190" y="292" font-size="10" fill="currentColor">60</text>'
      + '<text x="346" y="292" font-size="10" fill="currentColor">95</text>'
      + '<path d="M200 200v70" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="5 4" fill="none"/>'
      + '<g fill="currentColor">'
      + '<circle cx="52" cy="252" r="6"/><circle cx="52" cy="236" r="6"/>'
      + '<circle cx="200" cy="252" r="6"/>'
      + '<circle cx="348" cy="252" r="6"/><circle cx="348" cy="236" r="6"/>'
      + '</g>'
      + '<text x="40" y="192" font-size="11" fill="currentColor">Set B: mean 60</text>'
      + '<text x="130" y="222" font-size="10" fill="#0f8a4d">large spread: the mean</text>'
      + '<text x="130" y="236" font-size="10" fill="#0f8a4d">describes almost nobody</text>'
      + '<text x="40" y="330" font-size="12" fill="currentColor">the two sets have the same mean, and an average alone cannot tell them apart</text>'
      /* table */
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<rect x="420" y="50" width="60" height="26"/><rect x="480" y="50" width="70" height="26"/><rect x="550" y="50" width="60" height="26"/>'
      + '<rect x="420" y="76" width="60" height="22"/><rect x="480" y="76" width="70" height="22"/><rect x="550" y="76" width="60" height="22"/>'
      + '<rect x="420" y="98" width="60" height="22"/><rect x="480" y="98" width="70" height="22"/><rect x="550" y="98" width="60" height="22"/>'
      + '<rect x="420" y="120" width="60" height="22"/><rect x="480" y="120" width="70" height="22"/><rect x="550" y="120" width="60" height="22"/>'
      + '<rect x="420" y="142" width="60" height="22"/><rect x="480" y="142" width="70" height="22"/><rect x="550" y="142" width="60" height="22"/>'
      + '</g>'
      + '<text x="430" y="68" font-size="10" fill="currentColor">x</text>'
      + '<text x="486" y="62" font-size="9" fill="currentColor">x minus</text>'
      + '<text x="486" y="73" font-size="9" fill="currentColor">the mean</text>'
      + '<text x="556" y="68" font-size="10" fill="currentColor">its square</text>'
      + '<text x="444" y="92" font-size="10" fill="currentColor">2</text>'
      + '<text x="506" y="92" font-size="10" fill="currentColor">-3</text>'
      + '<text x="576" y="92" font-size="10" fill="currentColor">9</text>'
      + '<text x="444" y="114" font-size="10" fill="currentColor">4</text>'
      + '<text x="506" y="114" font-size="10" fill="currentColor">-1</text>'
      + '<text x="576" y="114" font-size="10" fill="currentColor">1</text>'
      + '<text x="444" y="136" font-size="10" fill="currentColor">7</text>'
      + '<text x="508" y="136" font-size="10" fill="currentColor">2</text>'
      + '<text x="576" y="136" font-size="10" fill="currentColor">4</text>'
      + '<text x="444" y="158" font-size="10" fill="currentColor">9</text>'
      + '<text x="508" y="158" font-size="10" fill="currentColor">4</text>'
      + '<text x="572" y="158" font-size="10" fill="currentColor">16</text>'
      + '<text x="420" y="186" font-size="10" fill="#0f8a4d">the middle column always</text>'
      + '<text x="420" y="200" font-size="10" fill="#0f8a4d">adds to zero, which is why</text>'
      + '<text x="420" y="214" font-size="10" fill="#0f8a4d">it has to be squared</text>'
      + '<text x="420" y="240" font-size="10" fill="currentColor">then the square root puts the</text>'
      + '<text x="420" y="254" font-size="10" fill="currentColor">answer back into the data units</text>'
      + '<text x="40" y="376" font-size="11" fill="#0f8a4d">report an outlier, with and without, rather than deleting it to tidy the data</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Which measure of spread to use, and what each one is blind to',
      columns: ['Measure', 'How it is found', 'Use it when', 'Blind to'],
      rows: [
        ['Range', 'Largest minus smallest', 'A quick rough idea only', 'Everything between the two ends'],
        ['Interquartile range', 'Upper quartile minus lower quartile', 'There is an extreme value to ignore', 'The outer quarters entirely'],
        ['Variance', 'Mean of the squared distances', 'As a step towards the standard deviation', 'Nothing, but its units are meaningless'],
        ['Standard deviation', 'Square root of the variance', 'Every value should count, and sets are to be compared', 'Nothing, but an outlier moves it a lot'],
      ],
      note: 'The last column is what the question is really asking when '
        + 'it says which measure is more suitable and why.',
    },
  ],

  questions: [
    {
      id: 'ms-1',
      ask: 'Give the range of 4, 7, 8, 11, 13, 15, 21.',
      kind: 'numeric',
      options: [],
      answer: '17',
      teach: '21 minus 4. It uses only the two end values.',
      level: 3,
    },
    {
      id: 'ms-2',
      ask: 'Why are the distances from the mean squared?',
      kind: 'choice',
      options: [
        'Because with their signs they always add to zero',
        'To make the numbers larger',
        'Because the mean is a square',
      ],
      answer: 'Because with their signs they always add to zero',
      teach: 'The mean is the point where the pulls balance, '
        + 'so the plain average distance is useless.',
      level: 5,
    },
    {
      id: 'ms-3',
      ask: 'The variance of 2, 4, 4, 4, 5, 5, 7, 9 is 4. '
        + 'Give the standard deviation.',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'The square root of the variance, '
        + 'which puts the answer back into the units of the data.',
      level: 4,
    },
    {
      id: 'ms-4',
      ask: 'Which measure is least affected by one extreme value?',
      kind: 'choice',
      options: [
        'The interquartile range',
        'The range',
        'The standard deviation',
      ],
      answer: 'The interquartile range',
      teach: 'It looks only at the middle half, '
        + 'so a single freak value does not move it.',
      level: 5,
    },
    {
      id: 'ms-5',
      ask: 'Two sets both have mean 60. This tells you:',
      kind: 'choice',
      options: [
        'Nothing about how alike they are',
        'That they are the same',
        'That their ranges are equal',
      ],
      answer: 'Nothing about how alike they are',
      teach: 'One may run from 55 to 65 and the other from 30 to 90. '
        + 'That is the whole reason spread is measured.',
      level: 6,
    },
  ],
})

/* ── probability ───────────────────────────────────────────────────────── */

teach({
  topicId: 'probability-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The probability of an event '
      + 'is the number of favourable outcomes '
      + 'over the total number of equally likely outcomes. '
      + 'For A and B both happening, multiply. '
      + 'For A or B when they cannot both happen, add. '
      + 'Without replacement, the second denominator is one smaller, '
      + 'because the first item was not put back. '
      + 'Draw a tree or a table and the arithmetic follows.',
    method: [
      'List or tabulate all the equally likely outcomes.',
      'Decide whether the question is an and, or an or.',
      'Check whether the first item is replaced before the second draw.',
    ],
  },

  idea:
    'An outcome is one thing that can happen. '
    + 'An event is a set of outcomes we are interested in. '
    + 'If all the outcomes are equally likely, '
    + 'the probability of an event '
    + 'is the number of outcomes in it '
    + 'divided by the total number of outcomes. '
    + 'Every probability lies between 0 and 1. '
    + 'The probability that an event does not happen '
    + 'is 1 minus the probability that it does. '
    + 'Two events are mutually exclusive '
    + 'if they cannot both happen, '
    + 'and then the probability of one or the other is the sum. '
    + 'Two events are independent '
    + 'if one happening does not change the chance of the other, '
    + 'and then the probability of both is the product. '
    + 'For two or more stages, '
    + 'a tree diagram shows every path, '
    + 'with the probability on each branch, '
    + 'and the probability of a path is the product along it. '
    + 'For two dice or two coins, '
    + 'a table of all the outcomes is often clearer than a tree.',

  mechanism:
    'Three decisions carry this topic, '
    + 'and each has a sentence that settles it. '
    + 'The first is whether to add or to multiply, '
    + 'and the words of the question decide. '
    + 'And means multiply: both things happen, '
    + 'so you take a fraction of a fraction. '
    + 'Or means add, '
    + 'but only when the two cannot happen together. '
    + 'The probability of rolling a 3 or a 5 on one die '
    + 'is one sixth plus one sixth, '
    + 'because a single roll cannot be both. '
    + 'The probability of a card being red or a king '
    + 'is not the sum of those two, '
    + 'because the red kings would be counted twice, '
    + 'so you add and then subtract the overlap. '
    + 'That is the same correction as in the set formula '
    + 'for n(A union B), '
    + 'and noticing that it is the same correction '
    + 'is worth more than learning two rules. '
    + 'The second decision is with or without replacement, '
    + 'and it is the commonest lost mark in the topic. '
    + 'A bag holds 5 red and 3 blue beads. '
    + 'Draw one, put it back, draw again: '
    + 'the second draw is from 8 beads, exactly as the first was, '
    + 'so the two draws are independent '
    + 'and the probabilities on the second set of branches '
    + 'are the same as on the first. '
    + 'Draw one and keep it, then draw again: '
    + 'the second draw is from 7 beads, '
    + 'and how many of them are red depends on what came out first. '
    + 'So the second set of branches has different probabilities '
    + 'on each path. '
    + 'This is why a tree diagram is drawn rather than described. '
    + 'Writing the fractions onto the branches '
    + 'forces you to notice that the denominator changed, '
    + 'and a learner who works without the diagram '
    + 'almost always leaves it as 8. '
    + 'The third decision is how to handle at least. '
    + 'The probability of at least one red in three draws '
    + 'would need the cases of exactly one, exactly two and exactly '
    + 'three, '
    + 'which is a long calculation with many chances to slip. '
    + 'Use the complement instead: '
    + 'at least one red is the opposite of no reds at all, '
    + 'so work out the probability of no reds '
    + 'and subtract it from 1. '
    + 'One short calculation replaces three long ones. '
    + 'Any question with the words at least or at most '
    + 'should prompt you to ask whether the opposite is easier, '
    + 'and it usually is. '
    + 'Two checks are worth doing before writing the final answer. '
    + 'The branches leaving any one point on a tree '
    + 'must add to 1, '
    + 'because something must happen. '
    + 'And the probabilities of all the complete paths '
    + 'must also add to 1. '
    + 'If they do not, a denominator is wrong somewhere, '
    + 'and that check finds it in seconds. '
    + 'Last, keep the fractions as fractions '
    + 'through the working '
    + 'and convert at the end if a decimal is asked for. '
    + 'Rounding early turns an exact answer into an approximate one '
    + 'and the error grows along each path.',

  recap:
    'You have found simple probabilities from a die or a bag of counters, '
    + 'and you have used the set formula '
    + 'that subtracts the overlap when two groups are combined. '
    + 'This adds several stages at once, '
    + 'and the difference it makes when something is not put back.',

  method: [
    'Count the total number of equally likely outcomes.',
    'For one stage, count the favourable outcomes and divide.',
    'For two stages, draw a tree, or a table for two dice or two coins.',
    'Write a probability on every branch.',
    'Check that the branches from any point add to 1.',
    'Decide whether the question is and, or or.',
    'For and, multiply along the path; for or, add the paths.',
    'For or with an overlap, add and then subtract the overlap.',
    'For at least or at most, consider working with the opposite event.',
    'Keep fractions exact until the final answer.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A bag holds 5 red and 3 blue beads. '
        + 'One is drawn. Find the probability that it is blue.',
      steps: [
        'Total beads: 8.',
        'Blue beads: 3.',
      ],
      answer: 'Three eighths.',
    },
    {
      level: 4,
      ask: 'Two dice are thrown. '
        + 'Find the probability that the total is 7.',
      steps: [
        'Total outcomes: 6 times 6, which is 36.',
        'Totals of 7: 1 and 6, 2 and 5, 3 and 4, 4 and 3, 5 and 2, '
          + '6 and 1.',
        'That is 6 outcomes.',
      ],
      answer: '6 over 36, which is one sixth. '
        + 'A table of the 36 outcomes makes the count safe, '
        + 'and 7 is the most likely total.',
    },
    {
      level: 5,
      ask: 'From a bag of 5 red and 3 blue beads, two are drawn '
        + 'without replacement. '
        + 'Find the probability that both are red.',
      steps: [
        'First draw: 5 reds out of 8, so five eighths.',
        'The red is kept, so 7 beads remain and 4 are red.',
        'Second draw: four sevenths.',
        'Both happen, so multiply.',
        'Five eighths times four sevenths is 20 over 56.',
      ],
      answer: 'Five fourteenths. '
        + 'The denominator changed from 8 to 7, '
        + 'and the number of reds from 5 to 4, '
        + 'because the first bead was not put back.',
    },
    {
      level: 6,
      ask: 'From the same bag, three beads are drawn without replacement. '
        + 'Find the probability of at least one blue, '
        + 'and say why you chose that method.',
      steps: [
        'At least one blue is the opposite of no blue at all.',
        'No blue means all three are red.',
        'Five eighths times four sevenths times three sixths.',
        'That is 60 over 336, which simplifies to five twenty eighths.',
        'So at least one blue is 1 minus five twenty eighths.',
      ],
      answer: 'Twenty three twenty eighths. '
        + 'The complement was used because the direct method would need '
        + 'exactly one blue, exactly two and exactly three, '
        + 'which is three long calculations instead of one short one. '
        + 'Any question saying at least should prompt that question.',
    },
  ],

  traps: [
    {
      mistake: 'Keeping the same denominator on the second draw '
        + 'without replacement.',
      why: 'One bead has gone, so the total is one smaller '
        + 'and the count of that colour may be too. '
        + 'Write the fractions on the branches and it is forced on you.',
    },
    {
      mistake: 'Adding for or when the events overlap.',
      why: 'Red or king counts the red kings twice. '
        + 'Add and then subtract the overlap, '
        + 'exactly as in the set formula.',
    },
    {
      mistake: 'Working out at least one directly.',
      why: 'It needs every case. '
        + 'Find the probability of none and subtract from 1.',
    },
    {
      mistake: 'Rounding part way through a tree.',
      why: 'The error grows along the path. '
        + 'Keep fractions exact and convert at the end.',
    },
  ],

  extension:
    'A conditional probability is the chance of one event '
    + 'given that another has already happened. '
    + 'That is just what the second layer of a tree shows '
    + 'when there is no replacement. '
    + 'It gives the chance of red on the second draw, '
    + 'given that the first was red. '
    + 'The rule is this. '
    + 'The chance of A and B equals the chance of A, '
    + 'times the chance of B given A. '
    + 'That is exactly multiplying along the branches. '
    + 'So a tree is not a trick for school questions. '
    + 'It is conditional probability drawn out. '
    + 'Reading it that way is what makes the next course easy.',

  figure: {
    alt: 'Two tree diagrams side by side for drawing two beads from a '
      + 'bag holding five red and three blue. In the first, labelled '
      + 'with replacement, the first pair of branches carry five eighths '
      + 'for red and three eighths for blue, and every second pair '
      + 'carries the same five eighths and three eighths, because the '
      + 'bead was put back. In the second, labelled without replacement, '
      + 'the first pair again carries five eighths and three eighths, '
      + 'but each second pair is different: after a red the branches '
      + 'carry four sevenths and three sevenths, and after a blue they '
      + 'carry five sevenths and two sevenths, because one bead has gone '
      + 'and the total is now seven. Beside the second tree the product '
      + 'along the top path is written out as five eighths times four '
      + 'sevenths giving five fourteenths. A note beneath says that the '
      + 'branches leaving any single point must add to one, which is the '
      + 'check that catches a wrong denominator.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* with replacement */
      + '<text x="20" y="40" font-size="12" fill="currentColor">with replacement</text>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M40 150L110 90"/><path d="M40 150L110 210"/>'
      + '<path d="M110 90L190 60"/><path d="M110 90L190 120"/>'
      + '<path d="M110 210L190 180"/><path d="M110 210L190 240"/>'
      + '</g>'
      + '<text x="52" y="104" font-size="10" fill="#0f8a4d">5/8</text>'
      + '<text x="52" y="200" font-size="10" fill="#0f8a4d">3/8</text>'
      + '<text x="140" y="62" font-size="10" fill="#0f8a4d">5/8</text>'
      + '<text x="140" y="118" font-size="10" fill="#0f8a4d">3/8</text>'
      + '<text x="140" y="182" font-size="10" fill="#0f8a4d">5/8</text>'
      + '<text x="140" y="240" font-size="10" fill="#0f8a4d">3/8</text>'
      + '<text x="196" y="62" font-size="10" fill="currentColor">R</text>'
      + '<text x="196" y="124" font-size="10" fill="currentColor">B</text>'
      + '<text x="196" y="184" font-size="10" fill="currentColor">R</text>'
      + '<text x="196" y="244" font-size="10" fill="currentColor">B</text>'
      + '<text x="20" y="280" font-size="10" fill="currentColor">the second branches are</text>'
      + '<text x="20" y="294" font-size="10" fill="currentColor">the same: the bead went back</text>'
      /* without replacement */
      + '<text x="330" y="40" font-size="12" fill="currentColor">without replacement</text>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M350 150L420 90"/><path d="M350 150L420 210"/>'
      + '<path d="M420 90L500 60"/><path d="M420 90L500 120"/>'
      + '<path d="M420 210L500 180"/><path d="M420 210L500 240"/>'
      + '</g>'
      + '<text x="362" y="104" font-size="10" fill="#0f8a4d">5/8</text>'
      + '<text x="362" y="200" font-size="10" fill="#0f8a4d">3/8</text>'
      + '<text x="450" y="62" font-size="10" fill="#0f8a4d">4/7</text>'
      + '<text x="450" y="118" font-size="10" fill="#0f8a4d">3/7</text>'
      + '<text x="450" y="182" font-size="10" fill="#0f8a4d">5/7</text>'
      + '<text x="450" y="240" font-size="10" fill="#0f8a4d">2/7</text>'
      + '<text x="506" y="62" font-size="10" fill="currentColor">R</text>'
      + '<text x="506" y="124" font-size="10" fill="currentColor">B</text>'
      + '<text x="506" y="184" font-size="10" fill="currentColor">R</text>'
      + '<text x="506" y="244" font-size="10" fill="currentColor">B</text>'
      + '<text x="528" y="78" font-size="10" fill="#0f8a4d">5/8 x 4/7 = 5/14</text>'
      + '<text x="330" y="280" font-size="10" fill="#0f8a4d">the second branches differ:</text>'
      + '<text x="330" y="294" font-size="10" fill="#0f8a4d">7 beads left, and the count</text>'
      + '<text x="330" y="308" font-size="10" fill="#0f8a4d">of that colour has dropped</text>'
      + '<text x="20" y="344" font-size="11" fill="currentColor">the branches leaving any one point must add to 1, which is the check that catches a wrong denominator</text>'
      + '<text x="20" y="368" font-size="11" fill="#0f8a4d">for at least one, work out the probability of none and subtract it from 1</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The outcomes of two dice, with every total shown',
      columns: ['First die', '1', '2', '3', '4', '5', '6'],
      rows: [
        ['1', '2', '3', '4', '5', '6', '7'],
        ['2', '3', '4', '5', '6', '7', '8'],
        ['3', '4', '5', '6', '7', '8', '9'],
        ['4', '5', '6', '7', '8', '9', '10'],
        ['5', '6', '7', '8', '9', '10', '11'],
        ['6', '7', '8', '9', '10', '11', '12'],
      ],
      note: 'Thirty six equally likely outcomes. '
        + 'Counting sevens along the diagonal gives six of them, '
        + 'so the probability of a total of 7 is one sixth, '
        + 'and 7 is the most likely total.',
    },
    {
      caption: 'Which rule the words of the question are asking for',
      columns: ['The question says', 'Rule', 'What to do', 'Watch for'],
      rows: [
        ['Both, and', 'Multiply', 'Multiply along the path', 'Whether the second stage changed'],
        ['Either, or, and they cannot both happen', 'Add', 'Add the separate probabilities', 'Nothing'],
        ['Either, or, and they can both happen', 'Add then subtract', 'Subtract the overlap once', 'Counting the overlap twice'],
        ['At least one', 'Complement', 'Find none, subtract from 1', 'Doing it the long way'],
        ['Not', 'Complement', 'Subtract from 1', 'Nothing'],
      ],
      note: 'The first row is where without replacement does its damage, '
        + 'and the fourth row saves the most time.',
    },
  ],

  questions: [
    {
      id: 'pb-1',
      ask: 'A bag has 5 red and 3 blue beads. '
        + 'Give the probability of drawing blue, as a fraction of 8.',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Three blue out of eight beads, so three eighths. '
        + 'The numerator is 3.',
      level: 3,
    },
    {
      id: 'pb-2',
      ask: 'Two dice are thrown. How many of the 36 outcomes '
        + 'give a total of 7?',
      kind: 'numeric',
      options: [],
      answer: '6',
      teach: 'The whole diagonal of the table, '
        + 'which is why 7 is the most likely total.',
      level: 4,
    },
    {
      id: 'pb-3',
      ask: 'Drawing two beads without replacement, '
        + 'the denominator on the second draw:',
      kind: 'choice',
      options: [
        'Is one smaller than on the first',
        'Stays the same',
        'Doubles',
      ],
      answer: 'Is one smaller than on the first',
      teach: 'One bead has gone, '
        + 'and the count of its colour has dropped as well.',
      level: 5,
    },
    {
      id: 'pb-4',
      ask: 'For at least one red, the quickest method is to:',
      kind: 'choice',
      options: [
        'Find the probability of no red and subtract from 1',
        'Add the cases of exactly one, two and three',
        'Multiply the single probabilities',
      ],
      answer: 'Find the probability of no red and subtract from 1',
      teach: 'One short calculation instead of three long ones.',
      level: 6,
    },
    {
      id: 'pb-5',
      ask: 'The branches leaving any single point of a tree must add to:',
      kind: 'numeric',
      options: [],
      answer: '1',
      teach: 'Because something must happen. '
        + 'The check catches a wrong denominator in seconds.',
      level: 4,
    },
  ],
})
