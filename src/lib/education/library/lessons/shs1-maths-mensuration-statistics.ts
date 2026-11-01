/**
 * Stored lessons for SHS 1 Core Mathematics: mensuration and statistics.
 *
 * Written at about grade 9 to 10, which is inside the SHS expectation of
 * 10 to 12.
 *
 * ── Why these three finish SHS 1 Core Mathematics ──────────────────────────
 *
 * Mensuration is where a learner first meets a formula that is nearly
 * right. Area of a circle is remembered; the sector that is three
 * hundredths of it is not, and a compound figure is marked on whether the
 * shape was broken up sensibly rather than on whether pi was recalled. So
 * this lesson is about decomposition and about units, which is where the
 * marks actually live.
 *
 * The two statistics lessons are deliberately written as one argument in
 * two halves. `data-presentation-shs` builds the grouped table, and the act
 * of grouping is also the act of throwing information away: once a value is
 * inside a class, the exact figure is gone. `measures-central` then has to
 * compute a mean from what survives, which is why the midpoint is used and
 * why the answer is an estimate and has to be called one. A learner who
 * meets the formula without that history treats the estimated mean as a
 * worse version of a real mean, instead of as the best that the table
 * allows.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── perimeter and area of plane figures ────────────────────────────────── */

teach({
  topicId: 'area-perimeter-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Perimeter is the distance round the edge, measured in cm or m. '
      + 'Area is the space inside, measured in square units. '
      + 'A compound figure is cut into shapes you have formulas for. '
      + 'A sector is a fraction of a circle, '
      + 'that fraction being the angle over 360.',
    method: [
      'Sketch the figure and write every length on it.',
      'Cut it into rectangles, triangles, circles and sectors.',
      'Work out each piece separately and add, or subtract a hole.',
      'Give the units: cm for perimeter, cm squared for area.',
    ],
  },

  idea:
    'The perimeter of a figure is the total distance round its edge. '
    + 'The area is the amount of surface inside it. '
    + 'For a rectangle, area is length times breadth. '
    + 'For a triangle, area is half the base times the perpendicular '
    + 'height. '
    + 'For a parallelogram, base times perpendicular height. '
    + 'For a trapezium, half the sum of the two parallel sides, '
    + 'times the distance between them. '
    + 'For a circle of radius r, '
    + 'the circumference is 2 pi r and the area is pi r squared. '
    + 'A sector is the slice cut by two radii. '
    + 'If its angle at the centre is theta degrees, '
    + 'it is theta over 360 of the whole circle, '
    + 'so its area is theta over 360 times pi r squared '
    + 'and its arc length is theta over 360 times 2 pi r. '
    + 'The perimeter of a sector is that arc plus the two radii. '
    + 'A compound figure has no formula of its own: '
    + 'it is cut into parts that do.',

  mechanism:
    'The marks in mensuration are lost in three predictable places, '
    + 'and none of them is the formula. '
    + 'The first is the perimeter of a sector. '
    + 'A learner finds the arc length correctly and stops, '
    + 'but the slice is bounded by the arc and by two straight radii, '
    + 'so the perimeter is the arc plus 2r. '
    + 'Draw the shape and run a finger round the edge: '
    + 'whatever the finger travels along is in the perimeter. '
    + 'The second is the height of a triangle. '
    + 'Half base times height needs the perpendicular height, '
    + 'the straight distance from the base to the opposite corner, '
    + 'not the length of a slanting side. '
    + 'In a question about a roof or a field '
    + 'the slant length is usually the one given on purpose, '
    + 'and the perpendicular height has to be found first, '
    + 'often by Pythagoras. '
    + 'The third is units, which cost more marks than anything else. '
    + 'Area is in square units, '
    + 'so an answer in cm when the question asked for an area '
    + 'is wrong even when the number is right. '
    + 'And a length conversion squares: '
    + '1 m is 100 cm, '
    + 'so 1 square metre is 100 times 100, '
    + 'which is 10 000 square centimetres, not 100. '
    + 'The habit that prevents all three is to work in one unit '
    + 'from the start: '
    + 'convert every length in the question before any calculation, '
    + 'and write the unit on every line rather than at the end. '
    + 'One more habit worth the time. '
    + 'For a compound figure, choose the cut that uses the lengths '
    + 'you were given. '
    + 'A shape can be split many ways, all correct, '
    + 'but the split that needs a length you must work out first '
    + 'is the slow one. '
    + 'And for a hole, subtract rather than cut: '
    + 'the area of a washer is the big circle minus the small one.',

  recap:
    'You have found the area of rectangles, triangles and circles, '
    + 'and the perimeter of straight sided shapes. '
    + 'This adds the sector, '
    + 'and asks you to break an unfamiliar figure into familiar pieces.',

  method: [
    'Sketch the figure, however rough.',
    'Convert all the lengths to the same unit before calculating.',
    'Mark every length you are given, and the right angles.',
    'Cut the figure into shapes you have a formula for.',
    'For a hole, work out the whole and subtract the hole.',
    'Work out each piece on its own line, with units.',
    'For a sector, use the angle over 360 as the fraction.',
    'For the perimeter of a sector, add the two radii to the arc.',
    'Add the pieces and state the answer with the correct unit.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the area and perimeter of a rectangle 12 cm by 7 cm.',
      steps: [
        'Area is length times breadth.',
        'Perimeter is 2 times (12 plus 7).',
      ],
      answer: 'Area 84 cm squared, perimeter 38 cm.',
    },
    {
      level: 4,
      ask: 'A circle has radius 7 cm. Taking pi as 22 over 7, '
        + 'find its area.',
      steps: [
        'Area is pi r squared.',
        '22 over 7 times 49.',
      ],
      answer: '154 cm squared.',
    },
    {
      level: 5,
      ask: 'A sector of a circle of radius 10 cm has an angle of '
        + '72 degrees at the centre. '
        + 'Find its area and its perimeter. Take pi as 3.142.',
      steps: [
        '72 over 360 is one fifth of the circle.',
        'Whole area is 3.142 times 100, which is 314.2 cm squared.',
        'Sector area is one fifth of that.',
        'Whole circumference is 2 times 3.142 times 10, '
          + 'which is 62.84 cm, so the arc is one fifth, 12.568 cm.',
        'Perimeter is the arc plus the two radii, so add 20 cm.',
      ],
      answer: 'Area 62.84 cm squared, perimeter 32.6 cm to one decimal '
        + 'place.',
    },
    {
      level: 6,
      ask: 'A farmer in Techiman has a plot shaped like a rectangle '
        + '30 m by 20 m with a semicircular end of diameter 20 m '
        + 'added on one short side. '
        + 'Find the area of the plot. Take pi as 3.142.',
      steps: [
        'Cut it into a rectangle and a semicircle.',
        'Rectangle: 30 times 20, which is 600 square metres.',
        'The semicircle has diameter 20 m, so radius 10 m.',
        'Whole circle: 3.142 times 100, which is 314.2.',
        'Half of that is 157.1 square metres.',
      ],
      answer: '757.1 square metres. '
        + 'If this were fencing, the perimeter would use the curved arc, '
        + 'not the straight diameter, '
        + 'because that side is no longer an edge.',
    },
  ],

  traps: [
    {
      mistake: 'Giving the arc length as the perimeter of a sector.',
      why: 'The two radii are edges too. '
        + 'Run a finger round the shape and add everything it travels '
        + 'along.',
    },
    {
      mistake: 'Using a slanting side as the height of a triangle.',
      why: 'Half base times height needs the perpendicular height. '
        + 'Find it first, often by Pythagoras.',
    },
    {
      mistake: 'Converting a square unit as though it were a length.',
      why: '1 square metre is 10 000 square centimetres, not 100. '
        + 'The conversion squares.',
    },
    {
      mistake: 'Leaving the unit off, or giving an area in cm.',
      why: 'An area is in square units. '
        + 'The unit is part of the answer and carries a mark.',
    },
  ],

  extension:
    'In SHS 2 the same fraction argument gives the surface area '
    + 'and volume of a cone and a sphere, '
    + 'and the sector becomes the net of the cone: '
    + 'the arc of the sector is the circumference of the cone base, '
    + 'which is what lets you find the angle to cut.',

  questions: [
    {
      id: 'mens-1',
      ask: 'The area of a triangle with base 10 cm and perpendicular '
        + 'height 6 cm, in cm squared, is:',
      kind: 'numeric',
      options: [],
      answer: '30',
      teach: 'Half times 10 times 6.',
      level: 3,
    },
    {
      id: 'mens-2',
      ask: 'A sector has an angle of 90 degrees. It is what fraction of '
        + 'the circle?',
      kind: 'choice',
      options: [
        'One quarter',
        'One half',
        'One ninth',
      ],
      answer: 'One quarter',
      teach: '90 over 360. The fraction is always the angle over 360.',
      level: 4,
    },
    {
      id: 'mens-3',
      ask: 'The perimeter of a sector is:',
      kind: 'choice',
      options: [
        'the arc plus two radii',
        'the arc only',
        'the arc plus one radius',
      ],
      answer: 'the arc plus two radii',
      teach: 'Both straight edges are part of the boundary.',
      level: 5,
    },
    {
      id: 'mens-4',
      ask: 'How many square centimetres are in 1 square metre?',
      kind: 'numeric',
      options: [],
      answer: '10000',
      teach: '100 times 100. A square unit conversion squares.',
      level: 5,
    },
  ],
})

/* ── collecting and presenting data ─────────────────────────────────────── */

teach({
  topicId: 'data-presentation-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Grouping data into classes makes a large set readable, '
      + 'and loses the exact values in exchange. '
      + 'A histogram has bars that touch, '
      + 'because the scale is continuous. '
      + 'A cumulative frequency curve is plotted at the upper class '
      + 'boundary, '
      + 'and is what the median and the quartiles are read from.',
    method: [
      'Choose classes of equal width that cover every value once.',
      'Tally, then write the frequency.',
      'For a histogram, use class boundaries so the bars touch.',
      'For the curve, add the frequencies as you go and plot at the '
        + 'upper boundary.',
    ],
  },

  idea:
    'Raw data is a list of values. '
    + 'A frequency table counts how many fall in each group, or class. '
    + 'Classes must be of equal width, '
    + 'must not overlap, '
    + 'and must leave no value without a home. '
    + 'Written 10 to 19 and 20 to 29, '
    + 'the class limits have a gap, '
    + 'so for a continuous measure the class boundaries are used '
    + 'instead: 9.5 to 19.5 and 19.5 to 29.5. '
    + 'The class midpoint is halfway between the limits. '
    + 'A bar chart shows separate categories, with gaps between bars. '
    + 'A histogram shows a continuous measure, '
    + 'so its bars touch and are drawn to the class boundaries. '
    + 'The cumulative frequency of a class is the total up to and '
    + 'including it. '
    + 'Plotted against the upper class boundary and joined with a smooth '
    + 'curve, '
    + 'that gives the cumulative frequency curve, also called the ogive, '
    + 'from which the median and the quartiles are read.',

  mechanism:
    'The single most common lost mark in this topic '
    + 'is plotting the cumulative frequency at the midpoint. '
    + 'It belongs at the upper class boundary, '
    + 'and the reason is in what the number means. '
    + 'The cumulative frequency of the class 20 to 29 '
    + 'is how many values are at most 29.5, '
    + 'so 29.5 is the only place on the horizontal axis '
    + 'where that statement is true. '
    + 'At the midpoint, 24.5, '
    + 'the true count is smaller, because the upper half of the class '
    + 'has not been reached, '
    + 'and every reading taken off a curve plotted that way '
    + 'is shifted. '
    + 'Say the sentence to yourself as you plot: '
    + 'this many are less than or equal to this value. '
    + 'The second thing to hold on to is what grouping costs. '
    + 'Once 23, 24 and 29 are inside the class 20 to 29, '
    + 'the table no longer knows they were 23, 24 and 29. '
    + 'That is not sloppiness; it is the price of a readable table, '
    + 'and it is why the next lesson can only estimate the mean. '
    + 'Choosing the class width is the one real judgement here. '
    + 'Too few classes and the shape is hidden, '
    + 'too many and the table is as unreadable as the raw list. '
    + 'Five to ten classes is the usual range, '
    + 'and an examination normally fixes the width for you. '
    + 'Last, the difference between a bar chart and a histogram '
    + 'is not decoration. '
    + 'Gaps say the categories are separate things, '
    + 'such as maize, cassava, yam. '
    + 'Touching bars say the scale runs continuously, '
    + 'such as mass in kilograms, '
    + 'with nothing missing between one class and the next. '
    + 'Drawing a histogram with gaps claims there are masses '
    + 'that nothing could have, '
    + 'and that is why it is marked wrong.',

  recap:
    'You have made a tally chart, '
    + 'drawn a bar chart, '
    + 'and read values off a graph. '
    + 'This groups data into classes, '
    + 'and adds the two graphs that grouped data needs.',

  method: [
    'Decide on classes of equal width covering the whole range.',
    'Check no value belongs to two classes.',
    'Tally the values, then write each frequency.',
    'Write the class boundaries and the midpoints in their own '
      + 'columns.',
    'Add a cumulative frequency column, running down the table.',
    'For a histogram, draw bars to the boundaries, touching, with '
      + 'frequency up the side.',
    'For the curve, plot cumulative frequency against the upper class '
      + 'boundary.',
    'Join the points with a smooth curve and label both axes.',
  ],

  worked: [
    {
      level: 3,
      ask: 'The masses 12, 15, 18, 21, 24, 27 kg are grouped in classes '
        + 'of width 10 starting at 10. Give the frequencies.',
      steps: [
        'Class 10 to 19 holds 12, 15 and 18.',
        'Class 20 to 29 holds 21, 24 and 27.',
      ],
      answer: '10 to 19: frequency 3. 20 to 29: frequency 3.',
    },
    {
      level: 4,
      ask: 'For the class 30 to 39 of a continuous measure, '
        + 'give the class boundaries and the midpoint.',
      steps: [
        'Boundaries go half a unit either side: 29.5 and 39.5.',
        'Midpoint is halfway between the limits, (30 plus 39) over 2.',
      ],
      answer: 'Boundaries 29.5 to 39.5, midpoint 34.5.',
    },
    {
      level: 5,
      ask: 'Marks out of 50 are grouped as 1 to 10 frequency 4, '
        + '11 to 20 frequency 9, 21 to 30 frequency 15, '
        + '31 to 40 frequency 8, 41 to 50 frequency 4. '
        + 'Build the cumulative frequency column and say where each '
        + 'point is plotted.',
      steps: [
        'Running totals: 4, 13, 28, 36, 40.',
        'Each is plotted at the upper class boundary.',
      ],
      answer: 'Plot (10.5, 4), (20.5, 13), (30.5, 28), (40.5, 36), '
        + '(50.5, 40). '
        + 'The last cumulative frequency must equal the total, 40, '
        + 'which is the check.',
    },
    {
      level: 6,
      ask: 'From that curve, how would you estimate the median '
        + 'and the number of pupils who scored above 35?',
      steps: [
        'The total is 40, so the median is at a cumulative frequency '
          + 'of 20.',
        'Go across from 20 on the vertical axis to the curve, '
          + 'then down to the mark axis.',
        'For above 35, read the cumulative frequency at 35, '
          + 'which gives those at most 35.',
        'Subtract that from 40.',
      ],
      answer: 'The median is read as about 25 marks. '
        + 'At 35 the curve reads about 32, '
        + 'so about 8 pupils scored above 35. '
        + 'Both are estimates, and should be called estimates.',
    },
  ],

  traps: [
    {
      mistake: 'Plotting cumulative frequency at the class midpoint.',
      why: 'The total is for everything up to the upper boundary, '
        + 'so that is the only place it is true.',
    },
    {
      mistake: 'Drawing a histogram with gaps between the bars.',
      why: 'Gaps claim values that cannot occur. '
        + 'A continuous scale has none, so the bars touch.',
    },
    {
      mistake: 'Using classes that overlap, such as 10 to 20 and 20 to '
        + '30.',
      why: 'A value of 20 would be counted twice. '
        + 'Each value belongs to exactly one class.',
    },
    {
      mistake: 'Forgetting to check the last cumulative frequency.',
      why: 'It must equal the total frequency. '
        + 'If it does not, a class was added wrongly.',
    },
  ],

  extension:
    'A histogram with unequal class widths '
    + 'must plot frequency density, '
    + 'which is frequency divided by class width, '
    + 'because then the area of each bar, not its height, '
    + 'represents the frequency. '
    + 'Using height with unequal widths exaggerates the wide classes.',

  questions: [
    {
      id: 'dat-1',
      ask: 'In a histogram the bars touch because:',
      kind: 'choice',
      options: [
        'the scale is continuous',
        'it looks tidier',
        'the frequencies are equal',
      ],
      answer: 'the scale is continuous',
      teach: 'A gap would mean values that cannot occur. '
        + 'A bar chart of separate categories does have gaps.',
      level: 3,
    },
    {
      id: 'dat-2',
      ask: 'The class boundaries of 20 to 29 for a continuous measure '
        + 'are:',
      kind: 'choice',
      options: [
        '19.5 to 29.5',
        '20 to 29',
        '20.5 to 28.5',
      ],
      answer: '19.5 to 29.5',
      teach: 'Half a unit either side, so there is no gap to the next '
        + 'class.',
      level: 4,
    },
    {
      id: 'dat-3',
      ask: 'Cumulative frequency is plotted against:',
      kind: 'choice',
      options: [
        'the upper class boundary',
        'the class midpoint',
        'the lower class limit',
      ],
      answer: 'the upper class boundary',
      teach: 'The running total counts everything up to that boundary.',
      level: 5,
    },
    {
      id: 'dat-4',
      ask: 'Grouping data into classes:',
      kind: 'choice',
      options: [
        'loses the exact values',
        'keeps every value available',
        'changes the total frequency',
      ],
      answer: 'loses the exact values',
      teach: 'That is the price of a readable table, and the reason the '
        + 'mean from a grouped table is an estimate.',
      level: 6,
    },
  ],
})

/* ── measures of central tendency ───────────────────────────────────────── */

teach({
  topicId: 'measures-central',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The mean is the total divided by how many. '
      + 'The median is the middle value when they are in order. '
      + 'The mode is the most common. '
      + 'From a grouped table the mean uses the class midpoints '
      + 'and is an estimate, '
      + 'because the exact values are no longer there.',
    method: [
      'For a frequency table, mean is the sum of fx divided by the sum '
        + 'of f.',
      'For grouped data, use the midpoint of each class as x.',
      'Put the values in order before finding a median.',
      'Say which average suits the data, and why.',
    ],
  },

  idea:
    'An average is one number standing for a whole set. '
    + 'The mean is the sum of the values divided by how many there are. '
    + 'From a frequency table it is the sum of f times x, '
    + 'divided by the sum of f, '
    + 'because each value x occurs f times. '
    + 'The median is the middle value once they are in order. '
    + 'With n values, it is at position (n plus 1) over 2, '
    + 'and for an even n it is the mean of the two middle values. '
    + 'The mode is the value occurring most often, '
    + 'and for grouped data the modal class is the class with the '
    + 'highest frequency. '
    + 'From a grouped table the mean is found using the midpoint of '
    + 'each class, '
    + 'and the result is an estimated mean, '
    + 'because grouping threw the exact values away. '
    + 'The median of grouped data is read from the cumulative frequency '
    + 'curve, '
    + 'at a cumulative frequency of half the total.',

  mechanism:
    'The mean from a frequency table is got wrong in one particular way: '
    + 'dividing by the number of classes '
    + 'instead of by the total frequency. '
    + 'If 40 pupils are in 5 classes, '
    + 'the sum of fx is divided by 40, not by 5. '
    + 'Writing the column headings as f, x and fx, '
    + 'and totalling both f and fx, '
    + 'makes the right divisor the number sitting at the foot of the f '
    + 'column, '
    + 'and that one layout prevents the error for good. '
    + 'Why the midpoint is the right x is worth understanding, '
    + 'because it is the whole honesty of the method. '
    + 'In the class 20 to 29 the table knows only that twelve values '
    + 'are somewhere inside. '
    + 'Taking the midpoint assumes they are spread evenly, '
    + 'which is the fairest guess available '
    + 'and is sometimes slightly wrong. '
    + 'That is why the answer is called an estimated mean. '
    + 'It is not a weaker version of a real mean; '
    + 'it is the best the table allows, '
    + 'and in an examination the word estimate is part of the answer. '
    + 'Choosing between the three averages is also examinable, '
    + 'and the argument is always about extreme values. '
    + 'The mean uses every value, so one extreme value drags it. '
    + 'Nine farm labourers in a village earn 300 cedis a month '
    + 'and the owner earns 12 000. '
    + 'The mean is 1470 cedis, '
    + 'which describes nobody in the village. '
    + 'The median is 300, which describes nine people out of ten. '
    + 'So for income, house prices, or anything with a long tail, '
    + 'the median is the honest average, '
    + 'and saying so earns the mark. '
    + 'The mode is the one to use for something that cannot be averaged '
    + 'at all, '
    + 'such as the most common shoe size to stock, '
    + 'where a mean of 7.4 is of no use to anybody. '
    + 'Last, order the values before taking a median. '
    + 'The middle of an unordered list is not the median, '
    + 'it is just the middle of a list.',

  recap:
    'You have found the mean, median and mode of a short list, '
    + 'and read a frequency table. '
    + 'This applies all three to grouped data, '
    + 'where the exact values are gone, '
    + 'and asks which average is the fair one to quote.',

  method: [
    'Lay the table out in columns: class, f, midpoint x, then fx.',
    'Work out each midpoint as halfway between the class limits.',
    'Multiply f by x on every row.',
    'Total the f column and total the fx column.',
    'Mean is the fx total divided by the f total.',
    'Call it an estimated mean when the data is grouped.',
    'For the median, use the cumulative frequency curve at half the '
      + 'total.',
    'For the mode, name the class with the highest frequency.',
    'If asked which average is best, argue from the extreme values.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the mean, median and mode of 4, 7, 7, 9, 13.',
      steps: [
        'Sum is 40, and there are 5 values.',
        'Already in order, so the middle one is the third.',
        '7 appears twice.',
      ],
      answer: 'Mean 8, median 7, mode 7.',
    },
    {
      level: 4,
      ask: 'A frequency table gives x equal to 1, 2, 3 with f equal to '
        + '5, 8, 7. Find the mean.',
      steps: [
        'fx values: 5, 16, 21, so the fx total is 42.',
        'The f total is 20.',
        '42 divided by 20.',
      ],
      answer: '2.1. '
        + 'Note the divisor is 20, the total frequency, not 3.',
    },
    {
      level: 5,
      ask: 'Masses in kg are grouped: 10 to 19 frequency 4, '
        + '20 to 29 frequency 10, 30 to 39 frequency 6. '
        + 'Estimate the mean and name the modal class.',
      steps: [
        'Midpoints: 14.5, 24.5, 34.5.',
        'fx values: 58, 245, 207, so the fx total is 510.',
        'The f total is 20.',
        '510 divided by 20.',
      ],
      answer: 'Estimated mean 25.5 kg. '
        + 'Modal class 20 to 29, since it has the highest frequency. '
        + 'The word estimated matters: the exact masses are not known.',
    },
    {
      level: 6,
      ask: 'In a small workshop in Kumasi nine workers earn 400 cedis '
        + 'a week and the owner earns 8800. '
        + 'Work out the mean and the median, '
        + 'and say which should be quoted as the typical wage.',
      steps: [
        'Total is 9 times 400 plus 8800, which is 12 400.',
        'There are 10 people, so the mean is 1240 cedis.',
        'In order, the fifth and sixth values are both 400, '
          + 'so the median is 400.',
      ],
      answer: 'Mean 1240 cedis, median 400 cedis. '
        + 'The median should be quoted, '
        + 'because the single large wage pulls the mean above what nine '
        + 'of the ten people actually earn.',
    },
  ],

  traps: [
    {
      mistake: 'Dividing the fx total by the number of classes.',
      why: 'Divide by the total frequency. '
        + 'Total the f column and use the number at its foot.',
    },
    {
      mistake: 'Using the class limits instead of the midpoints as x.',
      why: 'The midpoint is the fair guess for values inside the class. '
        + 'A limit assumes they all sit at one edge.',
    },
    {
      mistake: 'Calling a grouped mean exact.',
      why: 'Grouping lost the values. '
        + 'It is an estimated mean and the word is part of the answer.',
    },
    {
      mistake: 'Taking the middle of an unordered list as the median.',
      why: 'Order the values first, or the middle one means nothing.',
    },
  ],

  extension:
    'Spread matters as much as the average. '
    + 'The interquartile range, '
    + 'read from the cumulative frequency curve '
    + 'as the upper quartile minus the lower quartile, '
    + 'describes the middle half of the data '
    + 'and ignores the extreme values, '
    + 'which is why it is quoted beside a median.',

  questions: [
    {
      id: 'cen-1',
      ask: 'The median of 3, 8, 5, 9, 4 is:',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'Order first: 3, 4, 5, 8, 9. The middle value is 5.',
      level: 3,
    },
    {
      id: 'cen-2',
      ask: 'The mean from a frequency table is the fx total divided by:',
      kind: 'choice',
      options: [
        'the total frequency',
        'the number of classes',
        'the largest frequency',
      ],
      answer: 'the total frequency',
      teach: 'Each value occurred f times, so the divisor is the sum of '
        + 'f.',
      level: 4,
    },
    {
      id: 'cen-3',
      ask: 'For grouped data, the value of x used for each class is:',
      kind: 'choice',
      options: [
        'the midpoint',
        'the lower limit',
        'the upper boundary',
      ],
      answer: 'the midpoint',
      teach: 'It is the fair assumption that values are spread evenly '
        + 'through the class.',
      level: 5,
    },
    {
      id: 'cen-4',
      ask: 'One very large value in a set of wages affects:',
      kind: 'choice',
      options: [
        'the mean much more than the median',
        'the median much more than the mean',
        'neither of them',
      ],
      answer: 'the mean much more than the median',
      teach: 'The mean uses every value. '
        + 'The median only cares about position, so quote it when there '
        + 'is a long tail.',
      level: 6,
    },
  ],
})
