/**
 * Stored lessons for SHS 1 Design and Communication Technology.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── A drawing is an instruction, not a picture ────────────────────────────
 *
 * The idea under this whole subject is that a technical drawing exists so
 * that somebody who has never spoken to the designer can make the article
 * exactly. Everything else follows. The line types are a code, so a reader
 * knows which lines are edges and which are dimensions. The projection
 * angle must be stated, because the same three views read two different
 * ways. A pictorial view is for showing and not for measuring. A design
 * brief states what the article must do and for whom, because without that
 * nobody can tell whether the finished thing is any good.
 *
 * ── What the examination marks ────────────────────────────────────────────
 *
 * Accuracy and convention, in that order, and both are learnable without
 * talent. A neat drawing with the wrong line types loses more than a plain
 * one with the right ones. So each lesson names the convention, says why it
 * exists, and says which breach of it costs marks.
 *
 * ── Equipment ─────────────────────────────────────────────────────────────
 *
 * This subject does need instruments: a hard and a soft pencil, a ruler, a
 * pair of compasses, a set square and a protractor. Those are the whole
 * requirement for the first year, they are inexpensive, and nothing in
 * these lessons needs a drawing board or a computer. Where a learner has no
 * compasses the geometry lesson says which constructions can be practised
 * with a ruler and a marked strip of card, and which genuinely cannot.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── line types, lettering and layout ─────────────────────────────────── */

teach({
  topicId: 'lines-lettering-dct',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Each kind of line in a technical drawing means something. '
      + 'A thick continuous line is a visible edge. '
      + 'A thin dashed line is a hidden edge. '
      + 'A thin chain line is a centre line or an axis. '
      + 'A thin continuous line carries dimensions. '
      + 'Lettering is upright, even and in capitals. '
      + 'Every sheet has a border and a title block.',
    method: [
      'Decide what each line represents before you draw it.',
      'Use the line type that means that.',
      'Keep thick lines thick and thin lines thin.',
      'Letter in upright capitals of one height.',
      'Draw the border first and the title block last.',
    ],
  },

  idea:
    'A technical drawing uses a standard set of line types, '
    + 'and each one has a meaning. '
    + 'A thick continuous line shows a visible outline or edge. '
    + 'A thin continuous line is used for dimension lines, '
    + 'projection lines, hatching and leader lines. '
    + 'A thin dashed line shows a hidden edge, '
    + 'one that exists but cannot be seen from that direction. '
    + 'A thin chain line, long dash then short dash, '
    + 'shows a centre line or an axis of symmetry. '
    + 'A thin chain line thickened at the ends and at changes of '
    + 'direction '
    + 'shows a cutting plane. '
    + 'A continuous thin wavy or zigzag line shows a short break. '
    + 'Dimensioning has its own conventions. '
    + 'The dimension line runs between two arrowheads, '
    + 'the projection lines extend from the feature '
    + 'with a small gap at the outline, '
    + 'and the figure is written above the line '
    + 'and read from the bottom or the right of the sheet. '
    + 'A dimension is given once only. '
    + 'Lettering is single stroke, upright, in capitals, '
    + 'of a consistent height, '
    + 'and placed so that it does not cross a line of the drawing. '
    + 'Each sheet carries a border, '
    + 'leaving a margin on all sides, '
    + 'and a title block, usually at the bottom right, '
    + 'giving the title, the scale, '
    + 'the projection used, the drawing number, '
    + 'the name of the drawer and the date.',

  mechanism:
    'The question to ask about every convention in this topic is '
    + 'what would go wrong without it, '
    + 'and the answer is always the same kind of thing: '
    + 'a reader would not know what the drawing meant. '
    + 'Take the dashed line. '
    + 'A drawing of a block with a hole through it '
    + 'shows a circle on one view. '
    + 'From the front view you cannot see the hole walls, '
    + 'but they are there. '
    + 'Drawn as thick continuous lines, '
    + 'they would say that the block has a visible step there. '
    + 'Drawn as dashed lines, '
    + 'they say the edge exists and is hidden. '
    + 'So the dashed line carries information '
    + 'that nothing else in the drawing can carry, '
    + 'and omitting it produces a drawing '
    + 'from which the wrong article would be made. '
    + 'That is the test of a convention: '
    + 'not whether it looks correct '
    + 'but whether a maker could go wrong without it. '
    + 'The second point is line thickness, '
    + 'which candidates treat as a matter of pressure '
    + 'and is actually part of the code. '
    + 'Two line thicknesses are used, '
    + 'and the ratio should be about two to one. '
    + 'They are achieved by pencil grade, not by pressing harder: '
    + 'a softer pencil, HB or B, for the thick lines, '
    + 'and a harder one, 2H or 3H, for the thin ones. '
    + 'Pressing harder with one pencil '
    + 'produces a line that is darker and the same width, '
    + 'and it also grooves the paper '
    + 'so a mistake cannot be erased cleanly. '
    + 'So two pencils are part of the equipment '
    + 'and not an optional refinement. '
    + 'A drawing in which all the lines are the same weight '
    + 'loses marks even where every line is in the right place, '
    + 'because the reader cannot tell the outline from the dimension '
    + 'lines. '
    + 'Third, dimensioning, where most marks are lost '
    + 'and where the rules are simple. '
    + 'A dimension is given once. '
    + 'If the length of a block is stated on the front view, '
    + 'it is not stated again on the plan, '
    + 'because two statements of the same thing '
    + 'can disagree once a drawing is revised, '
    + 'and then nobody knows which is right. '
    + 'This is the real reason for the rule '
    + 'and it is worth stating: '
    + 'duplication creates the possibility of contradiction. '
    + 'The figure goes above the dimension line '
    + 'and is oriented to be read from the bottom or the right, '
    + 'so a sheet turned the usual way is readable without rotating it. '
    + 'The projection lines stop short of the outline '
    + 'by a small gap, '
    + 'so that the dimensioning does not look like part of the article. '
    + 'And arrowheads are small, solid and closed, '
    + 'all of one size. '
    + 'Each of those is a separate mark in a marking scheme. '
    + 'Fourth, lettering, '
    + 'which candidates believe is about handwriting and is not. '
    + 'The requirement is uniformity, not beauty. '
    + 'Upright, single stroke, capitals, one height throughout, '
    + 'with even spacing. '
    + 'A learner whose ordinary handwriting is poor '
    + 'can produce acceptable technical lettering immediately '
    + 'by drawing two faint guide lines '
    + 'at the chosen height and writing between them. '
    + 'That single trick fixes most lettering marks, '
    + 'and the guide lines are erased at the end '
    + 'or drawn so lightly that they do not read. '
    + 'Fifth, layout, which is marked and which candidates leave '
    + 'until the drawing is finished and there is no room. '
    + 'The border goes on first. '
    + 'Then the views are positioned, '
    + 'with space between them for the dimensions, '
    + 'before any detail is drawn. '
    + 'A drawing centred badly on the sheet '
    + 'cannot be corrected without starting again, '
    + 'so the two minutes spent planning the layout '
    + 'are the most valuable two minutes in the examination. '
    + 'The title block is completed last, '
    + 'and the entry that candidates forget '
    + 'is the projection used, '
    + 'which the next lesson explains and which is never optional. '
    + 'What has to be drawn, every time, '
    + 'is the right line type for what the line represents. '
    + 'The equipment is a 2H and an HB pencil, '
    + 'a ruler, a set square, compasses, an eraser '
    + 'and a sharpener, '
    + 'and that is the whole list.',

  recap:
    'You can draw a shape and label it. '
    + 'This gives the code a technical drawing uses, '
    + 'so that somebody else can read it exactly.',

  method: [
    'Plan the layout and draw the border before anything else.',
    'Position the views with space for dimensions between them.',
    'For each line, decide what it represents.',
    'Use a thick continuous line for a visible edge.',
    'Use a thin dashed line for a hidden edge.',
    'Use a thin chain line for a centre line or axis.',
    'Use a soft pencil for thick lines and a hard one for thin.',
    'Dimension each feature once only, with the figure above the line.',
    'Letter between faint guide lines, in upright capitals.',
    'Complete the title block last, including the projection used.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name four line types and what each represents.',
      steps: [
        'Each type carries a different meaning.',
      ],
      answer: 'A thick continuous line represents a visible outline or '
        + 'edge. '
        + 'A thin dashed line represents a hidden edge. '
        + 'A thin chain line of long and short dashes '
        + 'represents a centre line or axis of symmetry. '
        + 'A thin continuous line is used for dimension lines, '
        + 'projection lines and hatching.',
    },
    {
      level: 4,
      ask: 'Why does omitting a hidden detail line '
        + 'produce a wrong drawing rather than an untidy one?',
      steps: [
        'A hidden edge exists but cannot be seen from that direction.',
        'The dashed line is the only way to record it.',
        'Without it the reader concludes the feature is absent.',
      ],
      answer: 'Because the dashed line carries information '
        + 'nothing else in the drawing can carry. '
        + 'A hole through a block has walls '
        + 'that exist but cannot be seen from the front. '
        + 'Shown dashed, they say the edge is there and hidden. '
        + 'Left out, the reader concludes there is no hole, '
        + 'and the wrong article is made. '
        + 'Drawn thick and continuous, '
        + 'the reader concludes there is a visible step. '
        + 'So the convention is not about appearance. '
        + 'It is the difference between a correct instruction '
        + 'and a misleading one.',
    },
    {
      level: 4,
      ask: 'Why is a dimension given once only?',
      steps: [
        'Two statements of the same length can disagree.',
        'A revision may change one and not the other.',
      ],
      answer: 'Because two statements of the same dimension '
        + 'create the possibility of contradiction. '
        + 'If the length appears on the front view and on the plan, '
        + 'and the drawing is later revised, '
        + 'one may be changed and the other left, '
        + 'and then nobody can tell which is correct. '
        + 'Stating it once removes that risk entirely. '
        + 'The rule is therefore about reliability '
        + 'rather than about neatness.',
    },
    {
      level: 5,
      ask: 'A learner with untidy handwriting '
        + 'is losing marks for lettering. '
        + 'What should they do, and what is really being assessed?',
      steps: [
        'The requirement is uniformity, not beauty.',
        'Guide lines fix the height.',
        'Upright single stroke capitals of one size.',
      ],
      answer: 'Draw two faint guide lines at the chosen height '
        + 'and letter between them, '
        + 'in upright single stroke capitals of one size, '
        + 'with even spacing. '
        + 'What is being assessed is uniformity and legibility, '
        + 'not handwriting quality, '
        + 'so a learner whose ordinary writing is poor '
        + 'can produce acceptable technical lettering at once '
        + 'by using the guide lines. '
        + 'They are drawn very lightly, or erased at the end. '
        + 'This is the cheapest recovery of marks in the subject.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing every line at the same weight.',
      why: 'Two thicknesses are part of the code. '
        + 'Use a soft pencil for thick lines and a hard one for thin.',
    },
    {
      mistake: 'Pressing harder instead of changing pencil.',
      why: 'It makes the line darker, not wider, '
        + 'and it grooves the paper so an error cannot be erased '
        + 'cleanly.',
    },
    {
      mistake: 'Dimensioning the same feature on two views.',
      why: 'Duplication allows contradiction after a revision. '
        + 'Each dimension appears once.',
    },
    {
      mistake: 'Drawing the border and title block last.',
      why: 'The border goes first, so the views can be positioned. '
        + 'A drawing badly centred cannot be corrected.',
    },
  ],

  extension:
    'These conventions are international standards. '
    + 'That is the point of them. '
    + 'A drawing made in Takoradi '
    + 'can be read in a workshop in Japan. '
    + 'Both follow the same code for line types, '
    + 'dimensioning and projection. '
    + 'The standards are published by bodies '
    + 'such as the International Organization for Standardization. '
    + 'The Ghana Standards Authority adopts them. '
    + 'So the conventions are not a school exercise. '
    + 'They are the one notation '
    + 'in which engineering is communicated worldwide. '
    + 'A drawing that departs from them is not a personal style. '
    + 'It is a drawing nobody can rely on.',

  questions: [
    {
      id: 'ln-1',
      ask: 'A hidden edge is drawn as a:',
      kind: 'choice',
      options: [
        'thin dashed line',
        'thick continuous line',
        'thin chain line',
      ],
      answer: 'thin dashed line',
      teach: 'A thick continuous line is a visible edge '
        + 'and a chain line is a centre line.',
      level: 3,
    },
    {
      id: 'ln-2',
      ask: 'A centre line is drawn as a:',
      kind: 'choice',
      options: [
        'thin chain line of long and short dashes',
        'thin dashed line',
        'thick continuous line',
      ],
      answer: 'thin chain line of long and short dashes',
      teach: 'It also marks an axis of symmetry.',
      level: 3,
    },
    {
      id: 'ln-3',
      ask: 'Two line thicknesses are achieved by:',
      kind: 'choice',
      options: [
        'using two pencil grades',
        'pressing harder',
        'drawing the line twice',
      ],
      answer: 'using two pencil grades',
      teach: 'A soft pencil gives a thick line and a hard one a thin '
        + 'line. '
        + 'Pressing harder only darkens and grooves the paper.',
      level: 4,
    },
    {
      id: 'ln-4',
      ask: 'How many times is a given dimension stated on a drawing?',
      kind: 'numeric',
      options: [],
      answer: '1',
      teach: 'Once. '
        + 'Duplication allows two figures to disagree after a revision.',
      level: 4,
    },
    {
      id: 'ln-5',
      ask: 'Which entry in the title block do candidates most often '
        + 'omit?',
      kind: 'choice',
      options: ['the projection used', 'the date', 'the title'],
      answer: 'the projection used',
      teach: 'It is never optional, '
        + 'because the same three views read two different ways '
        + 'in first and third angle.',
      level: 5,
    },
  ],
})

/* ── geometric construction ───────────────────────────────────────────── */

teach({
  topicId: 'geometric-construction-dct',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A construction produces an exact figure '
      + 'with compasses and a straight edge, '
      + 'without measuring an angle. '
      + 'An arc struck from a point '
      + 'marks every point at that distance from it, '
      + 'so two arcs crossing '
      + 'mark the one point at both distances. '
      + 'That is the whole method, '
      + 'and every construction in the syllabus uses it.',
    method: [
      'Decide which points you need to find.',
      'Ask which two distances define each point.',
      'Strike an arc for each distance.',
      'The crossing of the arcs is the point.',
      'Leave the construction arcs on the drawing.',
    ],
  },

  idea:
    'A geometric construction produces a figure exactly, '
    + 'using compasses and a straight edge, '
    + 'without measuring angles with a protractor. '
    + 'The basic constructions are these. '
    + 'To bisect a line: '
    + 'strike equal arcs from both ends '
    + 'and join the two crossings. '
    + 'To bisect an angle: '
    + 'strike an arc cutting both arms, '
    + 'then equal arcs from those two cuts, '
    + 'and join the vertex to their crossing. '
    + 'To erect a perpendicular at a point on a line: '
    + 'mark equal distances either side '
    + 'and bisect the segment between them. '
    + 'To construct 60 degrees: '
    + 'strike an arc from the vertex, '
    + 'then an equal arc from where it cuts the line. '
    + '30 degrees follows by bisecting 60, '
    + 'and 45 by bisecting a right angle. '
    + 'To divide a line into any number of equal parts: '
    + 'draw a line at an angle from one end, '
    + 'step off that number of equal spaces along it, '
    + 'join the last to the far end of the original, '
    + 'and draw parallels back. '
    + 'To inscribe a regular polygon in a circle: '
    + 'divide the 360 degrees at the centre '
    + 'by the number of sides. '
    + 'A tangent to a circle is perpendicular to the radius '
    + 'at the point of contact, '
    + 'and that fact is what makes every tangent construction work. '
    + 'Construction lines are drawn thin and are left visible, '
    + 'because they show the method.',

  mechanism:
    'There is one idea behind every construction in the syllabus, '
    + 'and a learner who has it '
    + 'can work out a construction they were never taught. '
    + 'The idea is what an arc is. '
    + 'An arc drawn from a point with the compasses '
    + 'is the set of all points at that distance from it. '
    + 'So if you want the point that is 40 mm from A '
    + 'and 30 mm from B, '
    + 'you strike an arc of 40 from A and an arc of 30 from B, '
    + 'and where they cross is the point. '
    + 'There is no other method and none is needed. '
    + 'Now see that every construction is this. '
    + 'Bisecting a line finds the points '
    + 'equally distant from both ends, '
    + 'which is why the arcs from each end are equal, '
    + 'and the line through the two crossings '
    + 'is the perpendicular bisector. '
    + 'Constructing an equilateral triangle finds the point '
    + 'at the side length from both ends, '
    + 'which is two equal arcs, '
    + 'and incidentally produces a 60 degree angle, '
    + 'which is where the 60 degree construction comes from. '
    + 'So 60 degrees is not a special trick. '
    + 'It is an equilateral triangle, '
    + 'and the three equal arcs are the triangle being built. '
    + 'A learner who sees that '
    + 'will never forget how to construct 60 degrees. '
    + 'The second point is why a protractor is not used, '
    + 'which candidates ask and deserve an answer to. '
    + 'Two reasons. '
    + 'A protractor can be read only to about half a degree, '
    + 'and over a long line '
    + 'half a degree is a visible error at the far end. '
    + 'A construction is exact in principle, '
    + 'limited only by the sharpness of the pencil. '
    + 'And a construction leaves evidence. '
    + 'The arcs on the paper show how the figure was obtained, '
    + 'so a checker can see the method, '
    + 'which a protractor mark does not allow. '
    + 'That is why the examination marks the construction arcs, '
    + 'and why erasing them loses marks '
    + 'even when the figure is perfect. '
    + 'Leave the arcs, drawn thin. '
    + 'Third, the tangent, which is the construction '
    + 'candidates find hardest and which rests on one fact: '
    + 'a tangent meets the radius at a right angle '
    + 'at the point of contact. '
    + 'Hold that and the constructions follow. '
    + 'To draw a tangent at a given point on the circle, '
    + 'join the centre to the point '
    + 'and erect a perpendicular there. '
    + 'To draw a tangent from an external point, '
    + 'join the centre to that point, '
    + 'bisect it to find a midpoint, '
    + 'and draw a circle on that midpoint through both ends; '
    + 'where it cuts the original circle '
    + 'is the point of contact, '
    + 'because an angle in a semicircle is a right angle '
    + 'and so the radius there is perpendicular to the line you want. '
    + 'That construction looks arbitrary '
    + 'until the semicircle theorem is named, '
    + 'and naming it is the mark. '
    + 'Fourth, dividing a line into equal parts, '
    + 'which is the construction most useful in real work '
    + 'and most often done wrongly. '
    + 'Candidates try to measure and divide arithmetically, '
    + 'which fails when the length does not divide neatly. '
    + 'The construction does not care: '
    + 'any angled line, any convenient equal spacing, '
    + 'and the parallels transfer the division exactly. '
    + 'It works because of similar triangles, '
    + 'and that is the justification to give if asked. '
    + 'Fifth, the honest note on equipment. '
    + 'Compasses are necessary. '
    + 'A learner without them '
    + 'can practise the constructions that need only a straight edge '
    + 'and a marked strip of card, '
    + 'which includes transferring a length '
    + 'and dividing a line into equal parts, '
    + 'and can learn the reasoning for all the rest. '
    + 'But bisecting an angle, constructing 60 degrees '
    + 'and every tangent construction '
    + 'genuinely require compasses, '
    + 'and a school should treat a class set as a priority purchase, '
    + 'because they are inexpensive '
    + 'and nothing in the subject proceeds without them. '
    + 'What has to be drawn is the construction, '
    + 'with its arcs visible, '
    + 'and the figure thickened at the end '
    + 'so the finished outline stands out from the working.',

  recap:
    'You can draw a circle with compasses '
    + 'and measure an angle with a protractor. '
    + 'This builds figures exactly, '
    + 'using arcs instead of measurement.',

  method: [
    'Identify the points you need to find.',
    'Ask which two distances fix each point.',
    'Strike an arc for each of those distances.',
    'Take the crossing as the point.',
    'For a tangent, use the right angle between tangent and radius.',
    'For equal divisions, use an angled line and parallels.',
    'Draw construction arcs thin and leave them visible.',
    'Thicken the finished outline at the end.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Describe how to bisect a straight line, '
        + 'and say why the arcs must be equal.',
      steps: [
        'Equal arcs from both ends.',
        'Their crossings are equally distant from both ends.',
      ],
      answer: 'Set the compasses to more than half the length. '
        + 'Strike an arc from each end of the line, '
        + 'above and below it, '
        + 'keeping the same radius. '
        + 'Join the two crossings; '
        + 'this line cuts the original in half '
        + 'and is perpendicular to it. '
        + 'The arcs must be equal '
        + 'because the crossings must be equally distant '
        + 'from both ends, '
        + 'and only equal radii guarantee that.',
    },
    {
      level: 4,
      ask: 'Why is 60 degrees constructed rather than measured, '
        + 'and what figure is really being built?',
      steps: [
        'Three equal arcs.',
        'That is an equilateral triangle.',
        'Its angles are each 60 degrees.',
      ],
      answer: 'Because the construction is exact and leaves evidence. '
        + 'Strike an arc from the vertex cutting the line, '
        + 'then an equal arc from that cut; '
        + 'joining the vertex to the crossing gives 60 degrees. '
        + 'What is being built is an equilateral triangle, '
        + 'since all three distances are equal, '
        + 'and each angle of an equilateral triangle is 60 degrees. '
        + 'Seeing that makes the construction impossible to forget, '
        + 'and 30 degrees follows by bisecting it.',
    },
    {
      level: 4,
      ask: 'Why does the examination mark the construction arcs?',
      steps: [
        'The arcs show the method.',
        'A measured mark shows nothing.',
      ],
      answer: 'Because the arcs are the evidence of how the figure was '
        + 'obtained. '
        + 'A correct figure drawn with a protractor '
        + 'and a correct figure constructed '
        + 'look the same on the paper, '
        + 'and only the arcs distinguish them. '
        + 'So the marks are partly for the method, '
        + 'and erasing the construction lines '
        + 'loses those marks even when the figure is perfect. '
        + 'Draw them thin and leave them, '
        + 'then thicken the finished outline.',
    },
    {
      level: 5,
      ask: 'Explain the construction of a tangent '
        + 'from a point outside a circle, '
        + 'and name the theorem it depends on.',
      steps: [
        'Join the centre to the external point.',
        'Bisect that line to find its midpoint.',
        'Draw a circle on it through both ends.',
        'Where it cuts the original circle is the point of contact.',
      ],
      answer: 'Join the centre O to the external point P. '
        + 'Bisect OP to find its midpoint. '
        + 'With that midpoint as centre, '
        + 'draw a circle passing through O and P. '
        + 'Where this circle cuts the original circle '
        + 'is the point of contact T, '
        + 'and PT is the tangent. '
        + 'It works because the angle in a semicircle is a right angle, '
        + 'so the angle OTP is 90 degrees, '
        + 'which means PT is perpendicular to the radius OT '
        + 'at the point of contact, '
        + 'and that is exactly the condition for a tangent. '
        + 'Naming the semicircle theorem is the mark, '
        + 'because without it the construction looks arbitrary.',
    },
  ],

  traps: [
    {
      mistake: 'Erasing the construction arcs.',
      why: 'They are the evidence of method and they are marked. '
        + 'Draw them thin and leave them.',
    },
    {
      mistake: 'Using a protractor where a construction is asked for.',
      why: 'A protractor reads to about half a degree '
        + 'and leaves no record of method. '
        + 'A construction is exact in principle.',
    },
    {
      mistake: 'Changing the compass radius during a bisection.',
      why: 'The crossings must be equally distant from both ends, '
        + 'which only equal radii guarantee.',
    },
    {
      mistake: 'Dividing a line by measuring and arithmetic.',
      why: 'It fails when the length does not divide neatly. '
        + 'The angled line and parallels construction '
        + 'works for any length.',
    },
  ],

  extension:
    'The reason these constructions are possible at all '
    + 'is a question mathematicians settled long ago, '
    + 'and the answer is interesting. '
    + 'With compasses and a straight edge '
    + 'you can bisect any angle, '
    + 'but you cannot divide an arbitrary angle into three. '
    + 'You can construct a regular pentagon and a regular hexagon, '
    + 'and you cannot construct a regular heptagon. '
    + 'These are not failures of ingenuity. '
    + 'They were proved impossible in the nineteenth century, '
    + 'using algebra rather than geometry, '
    + 'by showing which lengths '
    + 'arcs and straight lines can produce. '
    + 'So when a drawing office needs a seven sided figure '
    + 'it uses an approximate construction '
    + 'and says that it is approximate, '
    + 'which is the honest practice '
    + 'and also the examinable one.',

  questions: [
    {
      id: 'gc-1',
      ask: 'An arc drawn with compasses marks all the points that are:',
      kind: 'choice',
      options: [
        'the same distance from the centre',
        'on a straight line',
        'at the same angle',
      ],
      answer: 'the same distance from the centre',
      teach: 'So two arcs crossing mark the one point '
        + 'at both chosen distances. '
        + 'That is the whole method.',
      level: 3,
    },
    {
      id: 'gc-2',
      ask: 'Constructing 60 degrees actually builds:',
      kind: 'choice',
      options: [
        'an equilateral triangle',
        'a right angle',
        'a regular hexagon',
      ],
      answer: 'an equilateral triangle',
      teach: 'Three equal distances, so three equal angles of 60 '
        + 'degrees.',
      level: 4,
    },
    {
      id: 'gc-3',
      ask: 'Construction arcs should be:',
      kind: 'choice',
      options: [
        'drawn thin and left visible',
        'erased when finished',
        'drawn as thick as the outline',
      ],
      answer: 'drawn thin and left visible',
      teach: 'They are the evidence of method, and they are marked.',
      level: 3,
    },
    {
      id: 'gc-4',
      ask: 'A tangent meets the radius at the point of contact at:',
      kind: 'numeric',
      options: [],
      answer: '90',
      teach: '90 degrees. '
        + 'Every tangent construction depends on that fact.',
      level: 4,
    },
    {
      id: 'gc-5',
      ask: 'The tangent from an external point construction '
        + 'depends on the theorem that:',
      kind: 'choice',
      options: [
        'the angle in a semicircle is a right angle',
        'angles in a triangle sum to 180 degrees',
        'opposite angles are equal',
      ],
      answer: 'the angle in a semicircle is a right angle',
      teach: 'That is what makes the radius perpendicular '
        + 'to the line you want at the point of contact.',
      level: 5,
    },
  ],
})

/* ── orthographic projection ──────────────────────────────────────────── */

teach({
  topicId: 'orthographic-dct',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Orthographic projection shows an object '
      + 'in two or more flat views, '
      + 'each looked at square on, '
      + 'so every length can be measured. '
      + 'In first angle the view seen from the left '
      + 'is drawn on the right. '
      + 'In third angle it is drawn on the left. '
      + 'The same three views mean two different objects '
      + 'in the two systems, '
      + 'so the projection used must be stated.',
    method: [
      'Choose the front view: the one showing most detail.',
      'Project the other views from it with thin lines.',
      'Place each view according to the angle you are using.',
      'Keep the views in line, so widths and heights transfer.',
      'State the projection in the title block.',
    ],
  },

  idea:
    'Orthographic projection represents a solid object '
    + 'by separate flat views, '
    + 'each one looked at square on '
    + 'so that no length is foreshortened. '
    + 'Every measurement can therefore be taken from the drawing. '
    + 'The usual three views are the front elevation, '
    + 'which shows the object from the front; '
    + 'the plan, which shows it from above; '
    + 'and the end elevation, which shows it from the side. '
    + 'The views are placed in line, '
    + 'so that heights carry across between the front and end '
    + 'elevations '
    + 'and widths carry down between the front elevation and the plan. '
    + 'Two systems of placing the views are in use. '
    + 'In first angle projection '
    + 'the object is imagined between the observer and the plane, '
    + 'so the view obtained by looking from the left '
    + 'is drawn on the right of the front view, '
    + 'and the plan is drawn below. '
    + 'In third angle projection '
    + 'the plane is imagined between the observer and the object, '
    + 'so the view from the left is drawn on the left, '
    + 'and the plan is drawn above. '
    + 'Each system has a standard symbol '
    + 'placed in the title block, '
    + 'and the projection must always be stated. '
    + 'A sectional view shows the object cut through, '
    + 'with the cut surface hatched at 45 degrees, '
    + 'and the cutting plane marked on another view '
    + 'with a chain line and arrows showing the direction of sight.',

  mechanism:
    'The whole purpose of orthographic projection '
    + 'is that it can be measured, '
    + 'and that single sentence explains every rule in it. '
    + 'Each view is taken square on, '
    + 'so a line that is 40 mm long on the object '
    + 'is 40 mm long on the drawing, to scale. '
    + 'Nothing is foreshortened '
    + 'because nothing is seen at an angle. '
    + 'That is what makes the drawing an instruction '
    + 'that a maker can work from with a rule. '
    + 'It is also why more than one view is needed: '
    + 'one square on view tells you nothing about depth, '
    + 'so a second view at right angles supplies it. '
    + 'The second thing to understand '
    + 'is why the views are kept in line, '
    + 'because candidates arrange them for appearance '
    + 'and lose both marks and accuracy. '
    + 'If the front elevation and the plan are directly above '
    + 'and below each other, '
    + 'then every width can be projected straight down with a thin '
    + 'line, '
    + 'and no width has to be measured twice. '
    + 'If the front and end elevations are side by side at the same '
    + 'level, '
    + 'every height carries straight across. '
    + 'So the alignment is not an aesthetic convention. '
    + 'It is what allows the second and third views '
    + 'to be constructed from the first '
    + 'rather than measured independently, '
    + 'which is faster and much more accurate. '
    + 'A learner who projects rather than measures '
    + 'will finish sooner and with fewer errors. '
    + 'Third, the difference between first and third angle, '
    + 'which is the examinable heart of the topic '
    + 'and which candidates learn as an arbitrary rule. '
    + 'There is a way to make it make sense. '
    + 'In first angle, imagine the object sitting '
    + 'between you and a wall, '
    + 'and the view being pushed through onto the wall behind it. '
    + 'Looking from the left pushes that view through '
    + 'to the wall on the right, '
    + 'so the left hand view appears on the right. '
    + 'In third angle, imagine a sheet of glass between you and the '
    + 'object, '
    + 'and the view being drawn on the glass as you look. '
    + 'Looking from the left draws on the glass at the left, '
    + 'so the left hand view appears on the left. '
    + 'Pushed through behind, or drawn on glass in front: '
    + 'those two pictures give the two systems '
    + 'and can be reconstructed in the examination '
    + 'without recalling which is which. '
    + 'Now the consequence that makes the statement mandatory. '
    + 'Take a block with a step on one side. '
    + 'Three views of it in first angle '
    + 'and three views of a different block in third angle '
    + 'can be identical on the page. '
    + 'So a drawing that does not say which projection it uses '
    + 'is genuinely ambiguous, '
    + 'and a workshop could make the mirror image of what was wanted. '
    + 'That is not a theoretical risk. '
    + 'It is why the standard requires the symbol in the title block, '
    + 'and why omitting it loses marks '
    + 'however good the views are. '
    + 'Fourth, choosing the front view, '
    + 'which candidates do not think about '
    + 'and which determines how hard the rest of the drawing is. '
    + 'The front view should be the one '
    + 'that shows the most detail '
    + 'and the fewest hidden edges, '
    + 'and usually the one that shows the object in its natural '
    + 'position. '
    + 'Choose it well and the other views are simple. '
    + 'Choose a view along the length of a complicated feature '
    + 'and the other views fill with dashed lines. '
    + 'Fifth, sections, where two conventions carry marks. '
    + 'The hatching runs at 45 degrees '
    + 'and is thin and evenly spaced, '
    + 'and where two different parts are cut '
    + 'the hatching runs in opposite directions '
    + 'so the parts can be told apart. '
    + 'And a hidden detail line is not drawn on a cut surface, '
    + 'because once the object is cut through '
    + 'what was hidden is now visible '
    + 'and is drawn as a visible edge. '
    + 'Candidates leave the dashed lines in, '
    + 'which contradicts the section. '
    + 'What has to be stated, on every orthographic drawing, '
    + 'is the projection used. '
    + 'Equipment is a set square, a ruler and two pencils; '
    + 'no board is needed, '
    + 'and the projection lines can be ruled with the set square '
    + 'against the edge of the sheet.',

  figure: {
    alt: 'Three views of a stepped block arranged in first angle '
      + 'projection, with the front elevation at the upper left, the end '
      + 'elevation obtained by looking from the left drawn to its right, '
      + 'and the plan drawn below it, with thin projection lines '
      + 'carrying heights across and widths down',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* projection lines, thin */
      + '<g stroke="currentColor" stroke-width="1" opacity="0.45" fill="none">'
      + '<path d="M80 60H420"/><path d="M80 110H420"/><path d="M80 160H420"/>'
      + '<path d="M80 160V340"/><path d="M180 160V340"/><path d="M240 160V340"/>'
      + '</g>'
      /* front elevation: stepped block */
      + '<path d="M80 160V60h100v50h60v50Z" stroke="currentColor" stroke-width="3" fill="none"/>'
      /* end elevation to the right, first angle */
      + '<path d="M300 160V60h80v100Z" stroke="currentColor" stroke-width="3" fill="none"/>'
      /* plan below */
      + '<path d="M80 240h160v80H80Z" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M180 240v80" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5" fill="none"/>'
      /* labels */
      + '<text x="84" y="52" font-size="13" fill="currentColor">front elevation</text>'
      + '<text x="300" y="52" font-size="13" fill="currentColor">end elevation</text>'
      + '<text x="84" y="234" font-size="13" fill="currentColor">plan</text>'
      + '<text x="300" y="200" font-size="12" fill="currentColor">heights carry across</text>'
      + '<text x="252" y="300" font-size="12" fill="currentColor">widths carry down</text>'
      + '<text x="80" y="376" font-size="13" fill="#0f8a4d">first angle: the view from the left is drawn on the right</text>'
      + '</svg>',
  },

  recap:
    'You can draw a shape as it looks. '
    + 'This draws it as it measures, '
    + 'in separate square on views '
    + 'from which every length can be read.',

  method: [
    'Choose as the front view the one with most detail '
      + 'and fewest hidden edges.',
    'Draw it first, to scale.',
    'Decide which projection you are using.',
    'In first angle, place the view from the left on the right '
      + 'and the plan below.',
    'In third angle, place the view from the left on the left '
      + 'and the plan above.',
    'Keep the views in line and project with thin lines.',
    'Carry heights across and widths down rather than measuring twice.',
    'For a section, hatch the cut surface at 45 degrees '
      + 'and remove the hidden detail lines there.',
    'State the projection in the title block.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three usual orthographic views '
        + 'and say what each shows.',
      steps: [
        'Front, above, side.',
      ],
      answer: 'The front elevation shows the object from the front. '
        + 'The plan shows it from above. '
        + 'The end elevation shows it from the side. '
        + 'Each is looked at square on, '
        + 'so no length is foreshortened '
        + 'and every measurement can be taken from the drawing.',
    },
    {
      level: 4,
      ask: 'Why are the views kept in line with each other?',
      steps: [
        'Alignment allows projection.',
        'Projection is faster and more accurate than measuring twice.',
      ],
      answer: 'So that measurements can be projected between views '
        + 'instead of being measured again. '
        + 'With the plan directly below the front elevation, '
        + 'every width can be carried down with a thin line. '
        + 'With the end elevation beside the front elevation '
        + 'at the same level, '
        + 'every height carries straight across. '
        + 'That is faster than measuring and far more accurate, '
        + 'because a measurement taken twice can differ. '
        + 'So the alignment is a working method '
        + 'and not an arrangement for appearance.',
    },
    {
      level: 4,
      ask: 'Explain the difference between first and third angle '
        + 'projection in a way you could reconstruct '
        + 'in an examination.',
      steps: [
        'First angle: the view is pushed through onto a wall behind.',
        'Third angle: the view is drawn on glass in front.',
      ],
      answer: 'In first angle, imagine the object '
        + 'between you and a wall, '
        + 'with the view pushed through onto the wall behind it. '
        + 'Looking from the left pushes that view through '
        + 'to the right hand side, '
        + 'so the view from the left is drawn on the right, '
        + 'and the plan goes below. '
        + 'In third angle, imagine a sheet of glass '
        + 'between you and the object, '
        + 'with the view drawn on the glass as you look. '
        + 'Looking from the left draws on the glass at the left, '
        + 'so the view from the left is drawn on the left, '
        + 'and the plan goes above. '
        + 'Pushed through behind, or drawn on glass in front: '
        + 'those two pictures can be rebuilt in the hall '
        + 'without recalling which system is which.',
    },
    {
      level: 5,
      ask: 'Why must the projection be stated in the title block?',
      steps: [
        'The same three views can describe two different objects.',
        'So a drawing without the statement is ambiguous.',
      ],
      answer: 'Because the same arrangement of views '
        + 'means different things in the two systems. '
        + 'Three views of a stepped block in first angle '
        + 'can be identical on the page '
        + 'to three views of a different block in third angle, '
        + 'since the side view has swapped sides. '
        + 'A drawing that does not say which projection it uses '
        + 'is therefore genuinely ambiguous, '
        + 'and a workshop could make the mirror image '
        + 'of what was intended. '
        + 'That is why the standard requires the symbol '
        + 'in the title block, '
        + 'and why omitting it loses marks '
        + 'however accurate the views are.',
    },
  ],

  traps: [
    {
      mistake: 'Arranging the views for appearance.',
      why: 'They must be in line so heights carry across '
        + 'and widths carry down. '
        + 'Alignment is what allows projection.',
    },
    {
      mistake: 'Measuring each view separately.',
      why: 'Project with thin lines instead. '
        + 'A measurement taken twice can differ.',
    },
    {
      mistake: 'Omitting the projection from the title block.',
      why: 'The same three views describe two different objects '
        + 'in the two systems. '
        + 'The drawing is ambiguous without it.',
    },
    {
      mistake: 'Leaving hidden detail lines on a cut surface in a '
        + 'section.',
      why: 'Once the object is cut, '
        + 'what was hidden is visible '
        + 'and is drawn as a visible edge.',
    },
  ],

  extension:
    'An auxiliary view solves a problem '
    + 'the three standard views cannot. '
    + 'If a face of the object is at an angle '
    + 'to all three principal planes, '
    + 'then it is foreshortened in every standard view, '
    + 'so its true shape cannot be measured anywhere. '
    + 'The answer is to project a further view '
    + 'square on to that face, '
    + 'which is an auxiliary view, '
    + 'and in it the face appears in its true shape. '
    + 'The reasoning is the same as before: '
    + 'a view is measurable only when it is taken square on, '
    + 'so a face at an angle needs a view of its own. '
    + 'That is also why a drawing of a complicated casting '
    + 'may carry five or six views: '
    + 'each one exists to make some feature measurable.',

  questions: [
    {
      id: 'or-1',
      ask: 'Orthographic views can be measured because each is:',
      kind: 'choice',
      options: [
        'looked at square on',
        'drawn at an angle',
        'drawn to a smaller scale',
      ],
      answer: 'looked at square on',
      teach: 'Nothing is foreshortened, '
        + 'so every length on the drawing is a true length to scale.',
      level: 3,
    },
    {
      id: 'or-2',
      ask: 'In first angle projection, the view obtained '
        + 'by looking from the left is drawn:',
      kind: 'choice',
      options: ['on the right', 'on the left', 'above'],
      answer: 'on the right',
      teach: 'The view is pushed through onto the plane behind the '
        + 'object. '
        + 'Third angle draws it on the left.',
      level: 4,
    },
    {
      id: 'or-3',
      ask: 'In third angle projection the plan is drawn:',
      kind: 'choice',
      options: ['above the front view', 'below it', 'beside it'],
      answer: 'above the front view',
      teach: 'The view is drawn on glass in front of the object, '
        + 'so looking down draws it above.',
      level: 4,
    },
    {
      id: 'or-4',
      ask: 'Hatching on a cut surface is drawn at:',
      kind: 'numeric',
      options: [],
      answer: '45',
      teach: '45 degrees, thin and evenly spaced, '
        + 'and in opposite directions for two different parts.',
      level: 3,
    },
    {
      id: 'or-5',
      ask: 'A drawing with no projection stated is:',
      kind: 'choice',
      options: [
        'ambiguous, because the side view may be on either side',
        'acceptable if neat',
        'in first angle by default',
      ],
      answer: 'ambiguous, because the side view may be on either side',
      teach: 'A workshop could make the mirror image of what was wanted, '
        + 'which is why the standard requires the symbol.',
      level: 5,
    },
  ],
})

/* ── isometric and oblique drawing ────────────────────────────────────── */

teach({
  topicId: 'pictorial-dct',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A pictorial drawing shows the object in one view '
      + 'that looks like the object. '
      + 'In isometric, the two base edges '
      + 'are drawn at 30 degrees to the horizontal '
      + 'and verticals stay vertical. '
      + 'In oblique, the front face is drawn true '
      + 'and the depth runs back at 45 degrees. '
      + 'Pictorial views are for showing, not measuring, '
      + 'because the receding lengths are not true lengths.',
    method: [
      'Decide isometric or oblique.',
      'For isometric, draw the two base edges at 30 degrees.',
      'Keep every vertical edge vertical.',
      'For oblique, draw the front face true and the depth at 45 '
        + 'degrees.',
      'Box the object first, then cut the features out of the box.',
    ],
  },

  idea:
    'A pictorial drawing shows three faces in one view. '
    + 'So it looks like the object '
    + 'rather than like a measurement. '
    + 'Take isometric drawing first. '
    + 'Its three axes sit at equal angles. '
    + 'The two base edges are drawn '
    + 'at 30 degrees above the horizontal, '
    + 'one to the left and one to the right. '
    + 'The vertical axis stays vertical. '
    + 'All three axes use the same scale. '
    + 'That is why it is called isometric, '
    + 'which means of equal measure. '
    + 'Now oblique drawing. '
    + 'The front face is drawn square on, in true shape. '
    + 'The depth lines run back at an angle, usually 45 degrees. '
    + 'Cabinet oblique draws those depth lines '
    + 'at half their true length, which looks more natural. '
    + 'Cavalier oblique draws them full length. '
    + 'A circle drawn in isometric becomes an ellipse, '
    + 'because the face it lies on is seen at an angle. '
    + 'It is constructed by the four centre method, '
    + 'inside an isometric square. '
    + 'In oblique a circle on the front face stays a circle. '
    + 'That is the main reason for choosing oblique. '
    + 'Pictorial drawings are not dimensioned for manufacture. '
    + 'They show what an article looks like, '
    + 'in a catalogue, a presentation or an instruction sheet.',

  mechanism:
    'The sentence that matters most in this topic '
    + 'is that a pictorial view cannot be measured, '
    + 'and candidates have to be able to say why. '
    + 'The reason is foreshortening. '
    + 'In an isometric drawing, '
    + 'an edge running back at 30 degrees '
    + 'is not seen square on, '
    + 'so its drawn length is not its true length. '
    + 'By convention isometric drawings are made '
    + 'with full true lengths along the axes, '
    + 'which makes the drawing easy to construct '
    + 'and makes it slightly larger than a true projection would be. '
    + 'Either way, '
    + 'any line not along one of the three axes '
    + 'is a length nobody can read off, '
    + 'because the amount of foreshortening depends on its direction. '
    + 'A sloping face on an isometric drawing '
    + 'is the clearest case: '
    + 'its edge is neither vertical nor on an axis, '
    + 'so measuring it gives a wrong figure. '
    + 'That is why a pictorial view is paired with orthographic views '
    + 'rather than used instead of them: '
    + 'the pictorial shows what the article looks like '
    + 'and the orthographic says how big it is. '
    + 'A candidate who writes that sentence '
    + 'has answered the standard question '
    + 'about why the lengths cannot be measured. '
    + 'Second, the method for drawing either kind, '
    + 'and it is the same method: box it first. '
    + 'Draw the overall rectangular box '
    + 'that the whole object would fit inside, '
    + 'on the chosen axes, '
    + 'to the overall length, width and height. '
    + 'Then remove material from the box '
    + 'to produce the shape, '
    + 'drawing each cut as a face. '
    + 'This works because every measurement '
    + 'is then taken along an axis, '
    + 'where lengths are drawn true, '
    + 'and nothing has to be measured along a diagonal. '
    + 'Candidates who draw the object face by face '
    + 'find that the faces do not meet, '
    + 'and the cause is that somewhere they measured '
    + 'along a line that was not an axis. '
    + 'The boxing method prevents it entirely, '
    + 'and it is the single most useful instruction in the lesson. '
    + 'Third, when to choose oblique instead of isometric, '
    + 'which is a real decision and is examined. '
    + 'In oblique the front face is true, '
    + 'so a circle on it remains a circle '
    + 'and can be drawn with compasses. '
    + 'In isometric that circle becomes an ellipse '
    + 'and has to be constructed. '
    + 'So an object whose interesting features '
    + 'are circles on one face, '
    + 'such as a flange or a plate with holes, '
    + 'is far easier in oblique, '
    + 'and the choice should be made for that reason. '
    + 'The cost is that oblique looks distorted, '
    + 'particularly along the depth, '
    + 'which is why cabinet oblique halves the depth '
    + 'to reduce the effect. '
    + 'Naming that trade is a strong answer. '
    + 'Fourth, the ellipse, '
    + 'which candidates draw freehand and should construct. '
    + 'A circle on an isometric face '
    + 'is inscribed in an isometric square, '
    + 'which is a rhombus. '
    + 'The four centre method finds two centres '
    + 'at the obtuse corners '
    + 'and two more on the diagonal, '
    + 'and strikes four arcs to make the ellipse. '
    + 'It is an approximation, '
    + 'and saying that it is an approximation '
    + 'is worth a mark, '
    + 'because a true isometric ellipse is not made of circular arcs. '
    + 'Fifth, the honest statement about what pictorials are for. '
    + 'They are not a lesser form of drawing '
    + 'that a beginner does before learning projection. '
    + 'They are for a different purpose: '
    + 'showing a person who cannot read an orthographic drawing '
    + 'what the article will look like. '
    + 'A customer, a buyer, a client, '
    + 'and the user of an assembly instruction sheet '
    + 'all need a pictorial. '
    + 'So the two kinds of drawing answer two different questions, '
    + 'and a complete drawing office produces both. '
    + 'Equipment is a 30 and 60 set square for isometric, '
    + 'a 45 degree set square for oblique, '
    + 'a ruler, compasses and two pencils. '
    + 'An isometric drawing can also be made '
    + 'on isometric grid paper where a school has it, '
    + 'and the construction is the same with the lines already there.',

  figure: {
    alt: 'An isometric drawing of a rectangular block, with the two base '
      + 'edges drawn at 30 degrees to the horizontal and the vertical '
      + 'edges vertical, beside an oblique drawing of the same block '
      + 'with its front face square on and the depth running back at 45 '
      + 'degrees',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* isometric block, left */
      + '<g stroke="currentColor" stroke-width="3" fill="none">'
      + '<path d="M60 230L150 282L240 230L150 178Z"/>'
      + '<path d="M60 230v-70L150 108v70"/>'
      + '<path d="M240 230v-70L150 108"/>'
      + '<path d="M60 160L150 108L240 160"/>'
      + '<path d="M150 282v-70"/>'
      + '<path d="M150 212L60 160"/><path d="M150 212L240 160"/>'
      + '</g>'
      /* oblique block, right */
      + '<g stroke="currentColor" stroke-width="3" fill="none">'
      + '<path d="M370 250h140V140H370Z"/>'
      + '<path d="M370 140l50-45h140l-50 45"/>'
      + '<path d="M510 140l50-45v110l-50 45"/>'
      + '</g>'
      /* angle guides */
      + '<g stroke="#0f8a4d" stroke-width="1" stroke-dasharray="4 4" fill="none">'
      + '<path d="M60 230h110"/>'
      + '<path d="M510 250h60"/>'
      + '</g>'
      + '<text x="60" y="330" font-size="13" fill="currentColor">isometric: base edges at 30 degrees</text>'
      + '<text x="370" y="330" font-size="13" fill="currentColor">oblique: front face true, depth at 45</text>'
      + '<text x="60" y="356" font-size="12" fill="#0f8a4d">lengths along the axes are true; any other length is not</text>'
      + '</svg>',
  },

  recap:
    'You can draw separate measurable views of an object. '
    + 'This draws it in one view that looks like the object, '
    + 'and explains what that costs.',

  method: [
    'Decide whether isometric or oblique suits the object.',
    'Choose oblique if the important features are circles on one face.',
    'Draw the overall box first, on the chosen axes.',
    'For isometric, use 30 degrees for the base edges '
      + 'and keep verticals vertical.',
    'For oblique, draw the front face true and the depth at 45 degrees.',
    'Remove material from the box to form the shape.',
    'Construct an isometric circle as an ellipse by the four centre '
      + 'method.',
    'Do not dimension the receding lengths for manufacture.',
  ],

  worked: [
    {
      level: 3,
      ask: 'At what angles are the axes drawn '
        + 'in isometric and in oblique?',
      steps: [
        'Isometric: both base edges at 30 degrees, verticals vertical.',
        'Oblique: front face true, depth at 45 degrees.',
      ],
      answer: 'In isometric the two horizontal base edges '
        + 'are drawn at 30 degrees above the horizontal, '
        + 'one to the left and one to the right, '
        + 'and the vertical edges remain vertical. '
        + 'In oblique the front face is drawn square on, in true shape, '
        + 'and the depth lines run back at 45 degrees.',
    },
    {
      level: 4,
      ask: 'Why can the lengths on a pictorial drawing '
        + 'not be measured?',
      steps: [
        'Lines not on an axis are foreshortened.',
        'The amount depends on the direction.',
        'So no scale can be applied to them.',
      ],
      answer: 'Because any line that does not lie along one of the axes '
        + 'is foreshortened, '
        + 'and the amount of foreshortening depends on its direction, '
        + 'so no single scale can be applied to it. '
        + 'A sloping face is the clearest case: '
        + 'its edge is neither vertical nor along an axis, '
        + 'so measuring it gives a wrong figure. '
        + 'That is why a pictorial view is paired with orthographic '
        + 'views: '
        + 'the pictorial shows what the article looks like '
        + 'and the orthographic says how big it is.',
    },
    {
      level: 4,
      ask: 'Why box an object before drawing it pictorially?',
      steps: [
        'Measurements along the axes are drawn true.',
        'Boxing keeps every measurement on an axis.',
        'Drawing face by face forces a diagonal measurement.',
      ],
      answer: 'Because every measurement is then taken along an axis, '
        + 'where lengths are drawn true, '
        + 'so nothing has to be measured along a diagonal. '
        + 'Draw the overall box to the length, width and height, '
        + 'then remove material from it to form the shape. '
        + 'Candidates who draw face by face '
        + 'find the faces do not meet, '
        + 'and the cause is always a measurement '
        + 'taken along a line that was not an axis. '
        + 'Boxing prevents the error entirely.',
    },
    {
      level: 5,
      ask: 'When would you choose oblique rather than isometric, '
        + 'and what does the choice cost?',
      steps: [
        'In oblique the front face is true, so a circle stays a circle.',
        'In isometric a circle becomes an ellipse.',
        'Oblique looks distorted along the depth.',
      ],
      answer: 'Choose oblique when the important features are circles '
        + 'on one face, '
        + 'such as a plate with holes or a flange. '
        + 'In oblique the front face is drawn true, '
        + 'so those circles remain circles '
        + 'and can be drawn with compasses. '
        + 'In isometric each becomes an ellipse '
        + 'and must be constructed by the four centre method, '
        + 'which is slower and only an approximation. '
        + 'The cost of oblique is that it looks distorted, '
        + 'particularly along the depth, '
        + 'because one face is true and the others are not. '
        + 'Cabinet oblique reduces that '
        + 'by drawing the depth at half its true length.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing the object face by face.',
      why: 'The faces will not meet. '
        + 'Box the whole object first and remove material from the box.',
    },
    {
      mistake: 'Measuring a sloping edge on a pictorial drawing.',
      why: 'Only lengths along the axes are true. '
        + 'A line in any other direction is foreshortened.',
    },
    {
      mistake: 'Drawing an isometric circle freehand.',
      why: 'Construct it as an ellipse in an isometric square '
        + 'by the four centre method, '
        + 'and note that it is an approximation.',
    },
    {
      mistake: 'Treating a pictorial as a substitute for orthographic '
        + 'views.',
      why: 'They answer different questions. '
        + 'The pictorial shows appearance; '
        + 'the orthographic gives sizes.',
    },
  ],

  extension:
    'Computer aided design has changed the place of these drawings '
    + 'without removing the need to understand them. '
    + 'A modern designer builds a three dimensional model, '
    + 'and the software then produces '
    + 'the orthographic views and the pictorial views '
    + 'from that one model, '
    + 'in whichever projection is asked for. '
    + 'So the drawings are no longer constructed by hand. '
    + 'What has not changed is that somebody has to read them, '
    + 'and has to know that a first angle drawing '
    + 'means something different from a third angle one, '
    + 'that a dashed line is a hidden edge, '
    + 'and that the pictorial view cannot be scaled. '
    + 'The conventions survive the tool, '
    + 'because they are about communication and not about drawing.',

  questions: [
    {
      id: 'pi-1',
      ask: 'In isometric drawing the base edges are at:',
      kind: 'numeric',
      options: [],
      answer: '30',
      teach: '30 degrees above the horizontal, '
        + 'with verticals remaining vertical.',
      level: 3,
    },
    {
      id: 'pi-2',
      ask: 'In oblique drawing the depth lines usually run back at:',
      kind: 'numeric',
      options: [],
      answer: '45',
      teach: '45 degrees, with the front face drawn in true shape.',
      level: 3,
    },
    {
      id: 'pi-3',
      ask: 'A circle on the top face of an isometric drawing appears '
        + 'as:',
      kind: 'choice',
      options: ['an ellipse', 'a circle', 'a rhombus'],
      answer: 'an ellipse',
      teach: 'The face is seen at an angle. '
        + 'In oblique a circle on the front face stays a circle.',
      level: 4,
    },
    {
      id: 'pi-4',
      ask: 'The first step in a pictorial drawing should be to:',
      kind: 'choice',
      options: [
        'draw the overall box',
        'draw the most detailed face',
        'draw the circles',
      ],
      answer: 'draw the overall box',
      teach: 'Then remove material from it, '
        + 'so every measurement stays on an axis.',
      level: 4,
    },
    {
      id: 'pi-5',
      ask: 'Pictorial lengths cannot be measured because lines off the '
        + 'axes are:',
      kind: 'choice',
      options: [
        'foreshortened by an amount that depends on direction',
        'drawn too thickly',
        'always vertical',
      ],
      answer: 'foreshortened by an amount that depends on direction',
      teach: 'So no single scale applies to them, '
        + 'which is why pictorials accompany orthographic views '
        + 'rather than replace them.',
      level: 5,
    },
  ],
})

/* ── brief, research and specification ────────────────────────────────── */

teach({
  topicId: 'design-brief-dct',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A design brief states the problem, '
      + 'not the solution. '
      + 'It says what the article must do, '
      + 'for whom, '
      + 'and under what constraints. '
      + 'Research then finds out what is already available '
      + 'and what the user actually needs. '
      + 'A specification turns that into testable statements, '
      + 'each one something a finished article '
      + 'can be checked against.',
    method: [
      'Identify the user and the situation.',
      'State what the article must do, as a function.',
      'Do not name a solution in the brief.',
      'Research existing products and the user needs.',
      'Write each specification point so it can be tested.',
    ],
  },

  idea:
    'The design process begins with a situation '
    + 'in which something is needed. '
    + 'From it a design brief is written. '
    + 'A brief states the problem to be solved, '
    + 'who the article is for, '
    + 'what it must do, '
    + 'and the constraints on it: '
    + 'cost, materials available, '
    + 'the skills and tools that will make it, '
    + 'the place it will be used. '
    + 'A brief does not name the solution. '
    + 'Research follows. '
    + 'It includes studying existing products '
    + 'to see what they do well and badly, '
    + 'asking the intended users what they need, '
    + 'measuring the space the article must fit, '
    + 'finding out what materials are available locally '
    + 'and what they cost, '
    + 'and taking the body measurements '
    + 'that a thing used by a person must suit, '
    + 'which is called anthropometric data. '
    + 'Ergonomics is the study of fitting an article '
    + 'to the person who uses it. '
    + 'A specification is then written. '
    + 'It is a list of statements, '
    + 'each one a requirement the finished article must meet, '
    + 'and each one testable: '
    + 'a size, a load, a cost, a time, a material, '
    + 'a function that can be demonstrated. '
    + 'Ideas are then generated and sketched, '
    + 'evaluated against the specification, '
    + 'developed, '
    + 'made, '
    + 'and finally tested against the specification again.',

  mechanism:
    'The discipline of this topic is one rule, '
    + 'and it is the rule candidates break in the first sentence: '
    + 'a brief states the problem and not the solution. '
    + 'Compare two openings. '
    + 'Design a wooden stool for a primary school classroom. '
    + 'And: design a seat for a primary school pupil '
    + 'that can be stacked, '
    + 'made from locally available material, '
    + 'and carried by the pupil. '
    + 'The first has already decided three things: '
    + 'that it is a stool, that it is wooden, '
    + 'and therefore most of the design. '
    + 'The second has decided nothing except the requirements, '
    + 'so it leaves room for a stool, a bench, a moulded seat '
    + 'or something nobody has thought of. '
    + 'And it is testable at the end: '
    + 'can the pupil carry it, can it be stacked, '
    + 'is the material local. '
    + 'So a brief that names the solution '
    + 'has thrown away the design work before starting it, '
    + 'and that is what the examination penalises. '
    + 'The test to apply to your own brief: '
    + 'does it mention a material, a shape or a mechanism? '
    + 'If so, it has specified a solution '
    + 'and those words should move to the specification '
    + 'only if they are genuine constraints. '
    + 'The second point is what makes a specification point useful, '
    + 'and the answer is that it must be testable. '
    + 'The article should be strong is not a specification point, '
    + 'because nobody can check it '
    + 'and two people would disagree about whether it was met. '
    + 'The article must support a load of 80 kilograms '
    + 'without permanent deformation is a specification point, '
    + 'because it can be tested '
    + 'and the result is not a matter of opinion. '
    + 'So each point should contain a number, '
    + 'or a named material, '
    + 'or a function that can be demonstrated. '
    + 'The practical rule is to write each point '
    + 'and then ask how you would check it; '
    + 'if you cannot say, rewrite it. '
    + 'That single habit converts a vague specification '
    + 'into one that earns marks '
    + 'and that can also be used at the end '
    + 'to evaluate the finished article, '
    + 'which is the other half of its purpose. '
    + 'Third, research, '
    + 'where candidates write a page about the history of chairs '
    + 'and score very little. '
    + 'Research in this subject is purposeful: '
    + 'every piece of it should change a decision. '
    + 'Measuring the height of a classroom desk '
    + 'decides the height of the seat. '
    + 'Asking the teacher how the room is cleaned '
    + 'decides whether the seat must be liftable or stackable. '
    + 'Finding the price of plywood at the local timber market '
    + 'decides whether plywood is in the specification at all. '
    + 'So research should be reported '
    + 'with the decision it produced attached, '
    + 'and research that changed nothing '
    + 'should not be in the folder. '
    + 'That is the test an examiner applies, '
    + 'whether stated or not. '
    + 'Fourth, anthropometric data and ergonomics, '
    + 'which are examined and are often treated as jargon. '
    + 'Anthropometric data is body measurement: '
    + 'the seat height that suits a pupil of a given age, '
    + 'the reach of an arm, '
    + 'the width of a hip. '
    + 'Ergonomics is the fitting of the article to the person. '
    + 'The reason they matter '
    + 'is that an article designed for an average person '
    + 'fits almost nobody, '
    + 'so a designer works with a range '
    + 'and usually designs for the fifth to the ninety fifth '
    + 'percentile, '
    + 'or makes the article adjustable. '
    + 'A learner who states a seat height '
    + 'and says where the figure came from '
    + 'has done the work the syllabus asks for. '
    + 'Fifth, the honest part about the Ghanaian context, '
    + 'because it changes the specification. '
    + 'What materials are actually available, '
    + 'what tools the workshop has, '
    + 'and what a school can pay '
    + 'are real constraints '
    + 'and should appear in the specification as such. '
    + 'A design requiring a material that must be imported, '
    + 'or a process the workshop cannot perform, '
    + 'is not a good design however elegant, '
    + 'because the brief said it had to be made. '
    + 'Writing the constraints honestly at the start '
    + 'prevents a learner from developing an idea for three weeks '
    + 'and discovering it cannot be built. '
    + 'What has to be written down is a brief with no solution in it, '
    + 'and a specification in which every point can be checked.',

  recap:
    'You have made things and solved practical problems. '
    + 'This gives the order the work is done in, '
    + 'starting with a statement of the problem '
    + 'that leaves the solution open.',

  method: [
    'Describe the situation and identify the user.',
    'State what the article must do, as a function.',
    'Check that the brief names no material, shape or mechanism.',
    'Research existing products, user needs, space and local '
      + 'materials.',
    'Attach to each piece of research the decision it produced.',
    'Use body measurements where a person will use the article.',
    'Write the specification as a list of testable points.',
    'For each point, ask how you would check it; '
      + 'rewrite any you cannot.',
    'Include the real constraints: cost, tools, materials available.',
    'Evaluate the finished article against the same specification.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the difference between a design brief '
        + 'and a specification?',
      steps: [
        'A brief states the problem.',
        'A specification states testable requirements.',
      ],
      answer: 'A brief states the problem to be solved: '
        + 'who the article is for, what it must do, '
        + 'and the constraints on it, '
        + 'without naming a solution. '
        + 'A specification is a list of requirements '
        + 'that the finished article must meet, '
        + 'each one written so it can be tested, '
        + 'with a size, a load, a cost, a material '
        + 'or a demonstrable function.',
    },
    {
      level: 4,
      ask: 'Rewrite this as a proper brief: '
        + 'design a wooden stool for a primary school classroom. '
        + 'Explain what was wrong with it.',
      steps: [
        'It names the solution: a stool, and wooden.',
        'Replace those with requirements.',
      ],
      answer: 'Design a seat for a primary school pupil '
        + 'that can be stacked, '
        + 'can be carried by the pupil, '
        + 'and can be made from materials available locally '
        + 'with the tools the school workshop has. '
        + 'What was wrong with the original '
        + 'is that it had already decided the solution: '
        + 'that the article is a stool, and that it is wooden. '
        + 'Those decisions belong to the designer '
        + 'after the research, '
        + 'and naming them in the brief '
        + 'throws away the design work before it starts.',
    },
    {
      level: 4,
      ask: 'Why is the article should be strong '
        + 'not a specification point? '
        + 'Rewrite it.',
      steps: [
        'It cannot be tested.',
        'Two people would disagree about whether it was met.',
        'Give a number and a condition.',
      ],
      answer: 'Because it cannot be checked, '
        + 'so two people could disagree about whether it was met, '
        + 'and it is useless for evaluating the finished article. '
        + 'A testable version: '
        + 'the seat must support a load of 80 kilograms '
        + 'without permanent deformation. '
        + 'That contains a number and a condition, '
        + 'so it can be tested '
        + 'and the result is not a matter of opinion. '
        + 'The habit is to write each point '
        + 'and then ask how you would check it.',
    },
    {
      level: 5,
      ask: 'Why does designing for the average person fit almost nobody, '
        + 'and what do designers do instead?',
      steps: [
        'Nobody is average in every dimension.',
        'An article sized for averages fits the whole of nobody.',
        'So design for a range, or make it adjustable.',
      ],
      answer: 'Because almost nobody is average in every dimension at '
        + 'once. '
        + 'A person of average height may have a short reach '
        + 'or wide hips, '
        + 'so an article sized to the average of each measurement '
        + 'fits the whole of nobody. '
        + 'Designers therefore work with a range of body measurements, '
        + 'usually accommodating from the fifth to the ninety fifth '
        + 'percentile, '
        + 'or they make the article adjustable '
        + 'so the user sets it. '
        + 'That is what ergonomics means in practice, '
        + 'and a learner who states a seat height '
        + 'and says which measurement it came from '
        + 'has done the work the syllabus asks for.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the solution in the brief.',
      why: 'Design a wooden stool has decided the shape '
        + 'and the material. '
        + 'A brief states requirements only.',
    },
    {
      mistake: 'Writing specification points that cannot be tested.',
      why: 'Should be strong cannot be checked. '
        + 'Give a load, a size, a cost or a demonstrable function.',
    },
    {
      mistake: 'Filling the research section with general background.',
      why: 'Every piece of research should change a decision. '
        + 'Report the decision with it.',
    },
    {
      mistake: 'Designing for the average user.',
      why: 'Nobody is average in every dimension. '
        + 'Design for a range, or make the article adjustable.',
    },
  ],

  extension:
    'The specification is used twice, '
    + 'and that is the strongest argument for writing it carefully. '
    + 'At the start it tells the designer '
    + 'what the article has to do, '
    + 'so that ideas can be rejected early '
    + 'rather than after weeks of development. '
    + 'At the end it is the standard '
    + 'against which the finished article is evaluated, '
    + 'point by point, '
    + 'and that evaluation is marked. '
    + 'A learner with a vague specification '
    + 'cannot write a real evaluation, '
    + 'because there is nothing definite to test against, '
    + 'and so loses marks twice over. '
    + 'A learner whose points each carry a number '
    + 'can test the article, '
    + 'report which points were met and which were not, '
    + 'and say what they would change, '
    + 'which is exactly what the highest band asks for.',

  questions: [
    {
      id: 'db-1',
      ask: 'A design brief should state:',
      kind: 'choice',
      options: [
        'the problem and the constraints',
        'the material to be used',
        'the finished shape',
      ],
      answer: 'the problem and the constraints',
      teach: 'Naming a material or a shape decides the solution '
        + 'before the design work begins.',
      level: 3,
    },
    {
      id: 'db-2',
      ask: 'Which is a proper specification point?',
      kind: 'choice',
      options: [
        'must support 80 kilograms without permanent deformation',
        'must be strong',
        'must look attractive',
      ],
      answer: 'must support 80 kilograms without permanent deformation',
      teach: 'It contains a number and a condition, '
        + 'so it can be tested and is not a matter of opinion.',
      level: 4,
    },
    {
      id: 'db-3',
      ask: 'Research in a design folder should be reported with:',
      kind: 'choice',
      options: [
        'the decision it produced',
        'its source only',
        'as much background as possible',
      ],
      answer: 'the decision it produced',
      teach: 'Research that changed nothing should not be there. '
        + 'That is the test an examiner applies.',
      level: 4,
    },
    {
      id: 'db-4',
      ask: 'Anthropometric data is:',
      kind: 'choice',
      options: [
        'body measurements',
        'material prices',
        'workshop tool lists',
      ],
      answer: 'body measurements',
      teach: 'Ergonomics is fitting the article to the person, '
        + 'and it uses that data.',
      level: 3,
    },
    {
      id: 'db-5',
      ask: 'Designers usually accommodate which range of users?',
      kind: 'choice',
      options: [
        'the fifth to the ninety fifth percentile',
        'the average user only',
        'the largest user only',
      ],
      answer: 'the fifth to the ninety fifth percentile',
      teach: 'Nobody is average in every dimension, '
        + 'so designing to averages fits almost nobody.',
      level: 5,
    },
  ],
})
