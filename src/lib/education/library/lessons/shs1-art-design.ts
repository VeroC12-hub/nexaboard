/**
 * Stored lessons for SHS 1 Art and Design Foundation.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── Drawing is measuring, not talent ─────────────────────────────────────
 *
 * The belief that costs learners most in this subject is that drawing is a
 * gift. It is not. A drawing from observation goes wrong in a small number
 * of predictable ways, almost all of them because the learner drew what they
 * expected rather than measuring what was in front of them. So the lessons
 * here teach measuring: comparing one length against another, holding a
 * pencil at arm's length, checking an angle against the vertical, squinting
 * to reduce a scene to three tones. Every one of those is a procedure, and a
 * learner who follows them will produce a drawing that reads correctly
 * whether or not they feel able to draw.
 *
 * ── What the examination marks ───────────────────────────────────────────
 *
 * Observation, proportion and the handling of tone, and then the ability to
 * describe a work in the language of the subject. A learner may be asked to
 * identify the elements of design in a given piece, which is a vocabulary
 * task, and to say what a Ghanaian tradition means, which is a knowledge
 * task. Both are learnable on paper by somebody who cannot get to a studio.
 *
 * ── Materials ────────────────────────────────────────────────────────────
 *
 * A pencil, paper and an eraser are enough for three of these five topics.
 * The colour lesson needs paint or coloured pencils, and says what can be
 * learned without them. The Ghanaian traditions lesson needs nothing but
 * observation of what is already around the learner.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── the elements of design ───────────────────────────────────────────── */

teach({
  topicId: 'elements-design-adf',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The elements of design are what a work is made of: '
      + 'line, shape, form, space, texture, colour and value. '
      + 'The principles are what is done with them: '
      + 'balance, rhythm, contrast, emphasis, proportion, '
      + 'harmony and unity. '
      + 'So an element is a thing and a principle is an arrangement. '
      + 'An answer names the element, '
      + 'points to where it is, '
      + 'and says what it does in that work.',
    method: [
      'Name the element.',
      'Point to where in the work it occurs.',
      'Say what effect it produces there.',
      'Keep elements separate from principles.',
      'Use the principle to describe how the elements are arranged.',
    ],
  },

  idea:
    'The elements of design are the components '
    + 'from which a work is built. '
    + 'Line is a mark with length, '
    + 'and it may be thick or thin, straight or curved, '
    + 'continuous or broken. '
    + 'Shape is a flat enclosed area, '
    + 'and it may be geometric or organic. '
    + 'Form is a three dimensional shape, '
    + 'having height, width and depth. '
    + 'Space is the area around and between things, '
    + 'and the space not occupied is called negative space. '
    + 'Texture is the surface quality, '
    + 'whether actual, which can be felt, '
    + 'or implied, which is suggested by marks. '
    + 'Colour has three properties: '
    + 'hue, which is the name of the colour; '
    + 'value, which is its lightness or darkness; '
    + 'and intensity, which is its brightness or dullness. '
    + 'Value is also treated as an element in its own right, '
    + 'as the range from light to dark. '
    + 'The principles of design are the ways the elements are '
    + 'organised. '
    + 'Balance is the distribution of visual weight, '
    + 'symmetrical, asymmetrical or radial. '
    + 'Rhythm is repetition that creates movement. '
    + 'Contrast is a marked difference '
    + 'that makes each part more visible. '
    + 'Emphasis gives one part dominance, '
    + 'and the dominant part is called the focal point. '
    + 'Proportion is the relation of sizes. '
    + 'Harmony is agreement among the parts, '
    + 'and unity is the sense that the whole holds together.',

  mechanism:
    'The distinction that answers nearly every question in this topic '
    + 'is between an element and a principle. '
    + 'An element is a thing present in the work. '
    + 'A principle is something done with the things. '
    + 'So line is an element, '
    + 'and the repetition of lines to make rhythm is a principle. '
    + 'Colour is an element, '
    + 'and the placing of one bright colour among dull ones '
    + 'to create emphasis is a principle. '
    + 'Candidates mix them, '
    + 'and write that balance is an element, '
    + 'which loses the mark '
    + 'because the examination is testing exactly this division. '
    + 'The test is simple: '
    + 'could you point at it, '
    + 'or do you have to describe an arrangement? '
    + 'You can point at a line. '
    + 'You cannot point at balance; '
    + 'you have to show how the weight is distributed. '
    + 'Second, the shape of an answer. '
    + 'A question gives a work '
    + 'and asks you to identify the elements in it. '
    + 'Naming them earns one mark each at most. '
    + 'The marks are in the three part answer: '
    + 'the element, where it is, and what it does. '
    + 'So not line is used, '
    + 'but the thick dark lines around the figures '
    + 'separate them from the background '
    + 'and make them read as solid. '
    + 'Not texture is present, '
    + 'but the short repeated marks on the cloth '
    + 'suggest a woven surface '
    + 'without the artist having to draw every thread. '
    + 'Each of those is three marks '
    + 'where the single word was one. '
    + 'Third, negative space, '
    + 'which is the element learners find hardest to see '
    + 'and the one most useful in practice. '
    + 'Negative space is the shape of the gaps. '
    + 'Look at the space between a chair legs '
    + 'rather than at the legs, '
    + 'and you have a shape you have no expectations about, '
    + 'so you can draw it accurately. '
    + 'Drawing the gaps is a standard technique '
    + 'for correcting a drawing that looks wrong '
    + 'and whose error cannot be found, '
    + 'because the eye checks a familiar object against memory '
    + 'and checks an unfamiliar shape against the thing itself. '
    + 'So negative space is both an element to identify '
    + 'and a method to use, '
    + 'and saying both earns more than saying either. '
    + 'Fourth, the focal point, '
    + 'which is the practical use of emphasis. '
    + 'A work in which everything is equally emphatic '
    + 'is tiring to look at '
    + 'and has nowhere for the eye to rest. '
    + 'A focal point is created by contrast: '
    + 'the lightest area in a dark work, '
    + 'the one curved shape among straight ones, '
    + 'the brightest colour, '
    + 'the place where lines converge, '
    + 'or simply isolation, '
    + 'since a thing alone draws the eye. '
    + 'So when a question asks how the artist draws attention '
    + 'to a particular part, '
    + 'the answer is which contrast was used. '
    + 'Fifth, value, which does double duty '
    + 'and should be understood as a range rather than as a colour. '
    + 'Value is lightness and darkness. '
    + 'A photograph printed in grey '
    + 'still reads correctly, '
    + 'which proves that value carries most of the information '
    + 'in a picture '
    + 'and colour carries less than people assume. '
    + 'That is why the tone lesson in this file matters so much, '
    + 'and it is also a practical test: '
    + 'if a drawing does not read when imagined in grey, '
    + 'the problem is value and not colour. '
    + 'What has to be written down, for every element named, '
    + 'is where it occurs and what it achieves. '
    + 'Nothing in this topic needs materials: '
    + 'the work to be analysed is given in the question, '
    + 'or is on the wall of the classroom, '
    + 'or is a cloth somebody is wearing.',

  recap:
    'You can look at a picture and say whether you like it. '
    + 'This gives the vocabulary to say what is in it '
    + 'and how the parts have been arranged.',

  method: [
    'List the elements: line, shape, form, space, texture, colour, '
      + 'value.',
    'For each one present, point to where it occurs.',
    'Say what it achieves in that place.',
    'List the principles: balance, rhythm, contrast, emphasis, '
      + 'proportion, harmony, unity.',
    'Use a principle to describe how the elements are arranged.',
    'Test the distinction: an element can be pointed at, '
      + 'a principle must be described.',
    'For emphasis, name the contrast that creates the focal point.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Distinguish an element of design from a principle, '
        + 'with two examples of each.',
      steps: [
        'An element is a thing present.',
        'A principle is something done with the things.',
      ],
      answer: 'An element is a component present in the work, '
        + 'such as line or colour, '
        + 'and it can be pointed at. '
        + 'A principle is a way the elements are organised, '
        + 'such as balance or rhythm, '
        + 'and it must be described rather than pointed at. '
        + 'So line and texture are elements; '
        + 'contrast and emphasis are principles. '
        + 'Candidates who call balance an element '
        + 'lose the mark, '
        + 'because this division is exactly what is being tested.',
    },
    {
      level: 4,
      ask: 'How should an answer identifying an element be written?',
      steps: [
        'Name it, locate it, say what it does.',
      ],
      answer: 'In three parts. '
        + 'Name the element. '
        + 'Say where in the work it occurs. '
        + 'Say what it achieves there. '
        + 'So not line is used, '
        + 'but the thick dark lines around the figures '
        + 'separate them from the background '
        + 'and make them read as solid. '
        + 'The single word earns one mark '
        + 'where the three part answer earns three.',
    },
    {
      level: 4,
      ask: 'What is negative space, '
        + 'and why is drawing it a useful correction?',
      steps: [
        'It is the shape of the gaps.',
        'The eye has no expectations about a gap.',
        'So it can be drawn accurately.',
      ],
      answer: 'Negative space is the shape of the areas '
        + 'around and between the objects, '
        + 'rather than the objects themselves. '
        + 'Drawing it corrects a drawing '
        + 'because the eye checks a familiar object against memory, '
        + 'and so draws what it expects, '
        + 'while it has no expectations at all '
        + 'about the shape of a gap between two chair legs '
        + 'and must therefore look at the thing itself. '
        + 'So when a drawing looks wrong '
        + 'and the error cannot be found, '
        + 'drawing the gaps usually finds it.',
    },
    {
      level: 5,
      ask: 'How does an artist create a focal point? '
        + 'Give four means, '
        + 'and say what happens in a work without one.',
      steps: [
        'A focal point is created by contrast of some kind.',
        'Several kinds are available.',
        'Without one the eye has nowhere to rest.',
      ],
      answer: 'By contrast. '
        + 'The lightest area in an otherwise dark work. '
        + 'The one curved shape among straight ones. '
        + 'The brightest or most saturated colour '
        + 'among duller ones. '
        + 'The point at which lines converge. '
        + 'Isolation is a fifth, '
        + 'since an object placed alone draws the eye. '
        + 'A work in which everything is equally emphatic '
        + 'gives the eye nowhere to rest, '
        + 'so it reads as busy or as flat, '
        + 'and the viewer does not know what to look at. '
        + 'That is why emphasis is a principle '
        + 'and not simply a matter of taste.',
    },
  ],

  traps: [
    {
      mistake: 'Calling balance or rhythm an element.',
      why: 'They are principles. '
        + 'An element can be pointed at; '
        + 'a principle has to be described.',
    },
    {
      mistake: 'Answering with a list of element names.',
      why: 'The marks are for naming, locating and explaining. '
        + 'One word earns one mark of three.',
    },
    {
      mistake: 'Ignoring negative space.',
      why: 'It is an element and also a correction method, '
        + 'because the eye has no expectations about a gap.',
    },
    {
      mistake: 'Treating colour as the main carrier of information.',
      why: 'Value carries most of it. '
        + 'A picture printed in grey still reads, '
        + 'which is the test to apply to a drawing.',
    },
  ],

  extension:
    'The principles are not rules about beauty, '
    + 'and that is worth being clear about. '
    + 'They are descriptions of how vision works. '
    + 'Contrast attracts the eye '
    + 'because the eye is built to detect difference, '
    + 'which is why a single bright mark is seen first. '
    + 'Rhythm is readable '
    + 'because the eye follows repetition '
    + 'and anticipates the next element. '
    + 'Balance matters '
    + 'because a viewer reads visual weight '
    + 'the way they read physical weight, '
    + 'and an unbalanced composition feels unstable. '
    + 'So a designer who breaks a principle deliberately, '
    + 'making a deliberately unbalanced composition '
    + 'to create unease, '
    + 'is using the principle rather than ignoring it. '
    + 'Knowing why each one works '
    + 'is what allows it to be broken on purpose.',

  questions: [
    {
      id: 'el-1',
      ask: 'Which of these is a principle of design rather than an '
        + 'element?',
      kind: 'choice',
      options: ['balance', 'texture', 'line'],
      answer: 'balance',
      teach: 'An element can be pointed at. '
        + 'Balance has to be described.',
      level: 3,
    },
    {
      id: 'el-2',
      ask: 'The three properties of colour are hue, intensity and:',
      kind: 'choice',
      options: ['value', 'texture', 'shape'],
      answer: 'value',
      teach: 'Hue is the name, value the lightness, '
        + 'intensity the brightness.',
      level: 3,
    },
    {
      id: 'el-3',
      ask: 'Negative space is:',
      kind: 'choice',
      options: [
        'the shape of the gaps between objects',
        'a dark background',
        'empty paper left by mistake',
      ],
      answer: 'the shape of the gaps between objects',
      teach: 'Drawing the gaps corrects a drawing, '
        + 'because the eye has no expectations about a gap.',
      level: 4,
    },
    {
      id: 'el-4',
      ask: 'The dominant part of a composition is called the:',
      kind: 'choice',
      options: ['focal point', 'negative space', 'ground'],
      answer: 'focal point',
      teach: 'It is created by contrast of value, shape, colour, '
        + 'convergence or isolation.',
      level: 4,
    },
    {
      id: 'el-5',
      ask: 'An answer identifying an element should name it, '
        + 'locate it and:',
      kind: 'choice',
      options: [
        'say what it achieves there',
        'name the artist',
        'give the date of the work',
      ],
      answer: 'say what it achieves there',
      teach: 'Three parts, three marks. '
        + 'A single word earns one of them.',
      level: 4,
    },
  ],
})

/* ── line, shape and proportion ───────────────────────────────────────── */

teach({
  topicId: 'line-shape-adf',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A drawing from observation goes wrong '
      + 'because the drawer draws what they expect '
      + 'rather than what is there. '
      + 'The cure is measurement. '
      + 'Choose one length as a unit, '
      + 'and compare every other length against it. '
      + 'Check angles against the vertical and the horizontal. '
      + 'Block in the whole shape lightly before any detail.',
    method: [
      'Look for longer than you think you need to.',
      'Choose a unit: one measurable length in the subject.',
      'Compare every other length against that unit.',
      'Hold the pencil at arm length to measure and to check angles.',
      'Block in the whole lightly, then correct, then add detail.',
    ],
  },

  idea:
    'Drawing from observation means recording '
    + 'what is actually in front of you. '
    + 'Line is the basic means: '
    + 'a contour line follows the edge of a form, '
    + 'a construction line is a light line used to position things, '
    + 'and a gesture line records movement or direction quickly. '
    + 'Shape is the flat enclosed area a contour encloses. '
    + 'Proportion is the relation of one measurement to another, '
    + 'and in a drawing it is proportion rather than absolute size '
    + 'that makes the subject recognisable. '
    + 'Proportions are found by comparison. '
    + 'One length in the subject is chosen as a unit, '
    + 'often the width of the smallest object '
    + 'or the height of a head, '
    + 'and every other length is expressed in those units: '
    + 'this jar is two units high and one unit wide, '
    + 'and the bottle beside it is three units high. '
    + 'The sighting method measures those units: '
    + 'hold the pencil at arm length, '
    + 'with the arm straight and the elbow locked, '
    + 'align the tip with one end of the length '
    + 'and the thumb with the other, '
    + 'then carry that measure to the next length. '
    + 'The same method checks angles: '
    + 'hold the pencil along an edge of the subject '
    + 'and compare its slope with the vertical or horizontal. '
    + 'Blocking in means drawing the whole subject '
    + 'as light simple shapes first, '
    + 'checking the proportions, '
    + 'and only then drawing the contours and the detail.',

  mechanism:
    'Almost every failure in observational drawing '
    + 'has the same cause, '
    + 'and naming it is the most useful thing a teacher can do. '
    + 'The drawer looks at the subject, '
    + 'recognises it, '
    + 'and then draws from the recognition '
    + 'rather than from the subject. '
    + 'So a cup is drawn with a round opening '
    + 'because cups have round openings, '
    + 'when from this angle the opening is a narrow ellipse. '
    + 'A table is drawn with a rectangular top '
    + 'because tables are rectangular, '
    + 'when from here the far edge is shorter than the near one. '
    + 'A head is drawn with the eyes high '
    + 'because that is where we attend to them, '
    + 'when they are in fact about halfway down the skull. '
    + 'In each case the eye was working correctly '
    + 'and the mind overruled it. '
    + 'So the whole method of this topic '
    + 'is to put a measurement between the looking and the drawing, '
    + 'because a measurement cannot be overruled. '
    + 'The sighting method is that measurement, '
    + 'and it has to be done properly or it gives nothing. '
    + 'The arm must be straight and the elbow locked every time, '
    + 'because the measure is an angle subtended at the eye '
    + 'and bending the arm changes the scale. '
    + 'One eye closed, for the same reason. '
    + 'And the pencil held square to the line of sight, '
    + 'not tilted away, '
    + 'or the apparent length is foreshortened. '
    + 'Those three conditions '
    + 'are the difference between a method and a gesture, '
    + 'and candidates who hold the pencil loosely '
    + 'get numbers that do not agree '
    + 'and conclude that measuring does not work. '
    + 'Second, the choice of unit, '
    + 'which decides how useful the measuring is. '
    + 'Choose a length that is easy to see the ends of '
    + 'and that is not too small, '
    + 'because a small unit multiplies its own error. '
    + 'If a jar is one unit wide '
    + 'and the group is seven units across, '
    + 'then an error of a tenth in the unit '
    + 'becomes an error of most of a unit across the group. '
    + 'So a medium sized length is the right unit, '
    + 'and the proportions of the smaller things '
    + 'are then expressed as fractions of it. '
    + 'Third, checking angles, '
    + 'which candidates omit '
    + 'and which fixes the most visible errors. '
    + 'A drawing in which an edge slopes the wrong way '
    + 'looks wrong immediately, '
    + 'even to somebody who cannot say why. '
    + 'The check takes two seconds: '
    + 'hold the pencil along the edge in the subject, '
    + 'note its slope against the upright, '
    + 'and compare it with the line on the paper. '
    + 'Doing this for the three or four main edges '
    + 'before adding any detail '
    + 'prevents a drawing that has to be restarted. '
    + 'Fourth, the order of work, '
    + 'which matters more than any technique. '
    + 'Block in the whole subject lightly, '
    + 'as simple shapes, '
    + 'before drawing anything carefully. '
    + 'The reason is that an error in proportion '
    + 'found at the blocking in stage '
    + 'costs one light line, '
    + 'and the same error found after an hour of careful detail '
    + 'cannot be corrected at all. '
    + 'So a learner who begins at the top left corner '
    + 'and draws finished detail across the page '
    + 'will produce a drawing that does not fit the paper '
    + 'and whose proportions are wrong, '
    + 'however good each part is. '
    + 'Fifth, the honest statement about talent, '
    + 'because it changes how a learner approaches the subject. '
    + 'The learners who draw well '
    + 'are not seeing something others cannot see. '
    + 'They are looking longer, '
    + 'measuring more, '
    + 'and correcting more often. '
    + 'All three are habits. '
    + 'A learner who times themselves '
    + 'and finds they spend most of the drawing time looking at the '
    + 'paper '
    + 'has found the problem, '
    + 'and the remedy is to look at the subject '
    + 'about as often as at the drawing. '
    + 'What has to be shown on the page, '
    + 'and what the examination credits, '
    + 'is the light construction and blocking in lines, '
    + 'because they are evidence that the proportions were measured. '
    + 'Erasing them hides the method. '
    + 'Materials: a pencil, paper and an eraser, and nothing else.',

  recap:
    'You can draw a thing you have in mind. '
    + 'This draws a thing in front of you, '
    + 'by measuring it instead of recognising it.',

  method: [
    'Look at the subject for longer than feels necessary.',
    'Choose a medium length in the subject as the unit.',
    'Hold the pencil at arm length, elbow locked, one eye closed.',
    'Measure each length in units and note the figure.',
    'Hold the pencil along each main edge to check its angle.',
    'Block in the whole subject lightly as simple shapes.',
    'Check the proportions and correct while the lines are still light.',
    'Only then draw the contours and the detail.',
    'Leave the construction lines visible.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why does a learner draw the opening of a cup as a circle '
        + 'when it looks like an ellipse?',
      steps: [
        'They recognise the cup.',
        'Then they draw from the recognition.',
        'The mind overrules the eye.',
      ],
      answer: 'Because they are drawing what they know '
        + 'rather than what they see. '
        + 'A cup opening is circular, '
        + 'so the mind supplies a circle, '
        + 'even though from this viewpoint '
        + 'the eye is reporting a narrow ellipse. '
        + 'The eye was working correctly and the mind overruled it. '
        + 'The cure is to put a measurement '
        + 'between the looking and the drawing, '
        + 'because a measurement cannot be overruled.',
    },
    {
      level: 4,
      ask: 'Describe the sighting method, '
        + 'and give the three conditions it depends on.',
      steps: [
        'Pencil at arm length, tip and thumb on the two ends.',
        'Arm straight, one eye closed, pencil square to the sight line.',
      ],
      answer: 'Hold the pencil out at arm length '
        + 'with the arm straight and the elbow locked. '
        + 'Align the tip with one end of the length you are measuring '
        + 'and slide the thumb to the other end. '
        + 'That distance is now a unit, '
        + 'and it can be carried to any other length in the subject. '
        + 'Three conditions. '
        + 'The arm must be straight every time, '
        + 'because the measure is an angle at the eye '
        + 'and a bent arm changes the scale. '
        + 'One eye must be closed, for the same reason. '
        + 'And the pencil must be held square to the line of sight, '
        + 'or its own length is foreshortened. '
        + 'Without those three the numbers will not agree.',
    },
    {
      level: 4,
      ask: 'Why block in the whole subject lightly before any detail?',
      steps: [
        'An error in proportion is cheap to correct early.',
        'It is impossible to correct late.',
      ],
      answer: 'Because an error in proportion found at the blocking in '
        + 'stage '
        + 'costs one light line to correct, '
        + 'while the same error found after an hour of finished detail '
        + 'cannot be corrected at all. '
        + 'A learner who starts at one corner '
        + 'and draws finished detail across the page '
        + 'produces a drawing that does not fit the paper '
        + 'and whose proportions are wrong, '
        + 'however well each part is drawn. '
        + 'Blocking in also places the subject on the sheet, '
        + 'which is itself marked.',
    },
    {
      level: 5,
      ask: 'A learner believes they cannot draw. '
        + 'What are the learners who draw well actually doing '
        + 'differently?',
      steps: [
        'Looking longer.',
        'Measuring more.',
        'Correcting more often.',
        'All three are habits.',
      ],
      answer: 'They are not seeing anything others cannot see. '
        + 'They look at the subject for longer, '
        + 'they measure proportions instead of estimating them, '
        + 'and they correct more often while the lines are still light. '
        + 'All three are habits rather than gifts. '
        + 'A learner can test themselves: '
        + 'if most of the drawing time is spent looking at the paper '
        + 'rather than at the subject, '
        + 'that is the problem, '
        + 'and the remedy is to look up about as often '
        + 'as you look down. '
        + 'The construction lines left on the page '
        + 'are the evidence that the work was measured, '
        + 'which is why they should not be erased.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing what you know instead of what you see.',
      why: 'A cup opening seen from above the rim is an ellipse. '
        + 'Put a measurement between the looking and the drawing.',
    },
    {
      mistake: 'Sighting with a bent arm or both eyes open.',
      why: 'The measure is an angle at the eye. '
        + 'A bent arm changes the scale, so the numbers will not agree.',
    },
    {
      mistake: 'Starting with finished detail in one corner.',
      why: 'Block in the whole lightly first. '
        + 'A proportion error found late cannot be corrected.',
    },
    {
      mistake: 'Erasing the construction lines.',
      why: 'They are evidence that the proportions were measured, '
        + 'and they are credited.',
    },
  ],

  extension:
    'The same method scales up to the figure, '
    + 'where the unit is traditionally the head. '
    + 'An adult figure is about seven and a half heads tall, '
    + 'with the hips at about halfway '
    + 'and the elbows at about the waist. '
    + 'A child is proportionally different, '
    + 'with a larger head relative to the body, '
    + 'which is about five heads at the age of six. '
    + 'So a figure drawn with adult proportions and a small head '
    + 'reads as a giant, '
    + 'and one drawn with a large head reads as a child. '
    + 'The figures are a starting check and not a formula, '
    + 'and they are checked against the actual model by sighting, '
    + 'which is the same procedure as for a jar on a table.',

  questions: [
    {
      id: 'ls-1',
      ask: 'The commonest cause of error in observational drawing is:',
      kind: 'choice',
      options: [
        'drawing what you expect rather than what you see',
        'a blunt pencil',
        'poor paper',
      ],
      answer: 'drawing what you expect rather than what you see',
      teach: 'The eye reports correctly and the mind overrules it. '
        + 'Measurement cannot be overruled.',
      level: 3,
    },
    {
      id: 'ls-2',
      ask: 'When sighting a measurement, the arm must be:',
      kind: 'choice',
      options: ['straight, with the elbow locked', 'bent', 'resting on a '
        + 'table'],
      answer: 'straight, with the elbow locked',
      teach: 'The measure is an angle at the eye, '
        + 'so a bent arm changes the scale.',
      level: 4,
    },
    {
      id: 'ls-3',
      ask: 'A good unit for measuring proportions is:',
      kind: 'choice',
      options: [
        'a medium length whose ends are easy to see',
        'the smallest length available',
        'the whole width of the subject',
      ],
      answer: 'a medium length whose ends are easy to see',
      teach: 'A small unit multiplies its own error '
        + 'when it is stepped off many times.',
      level: 4,
    },
    {
      id: 'ls-4',
      ask: 'An adult figure is traditionally taken as about how many '
        + 'heads tall?',
      kind: 'numeric',
      options: [],
      answer: '7.5',
      teach: 'About seven and a half, '
        + 'with the hips near halfway. '
        + 'A six year old is about five heads.',
      level: 4,
    },
    {
      id: 'ls-5',
      ask: 'Construction lines should be:',
      kind: 'choice',
      options: [
        'left visible as evidence of measuring',
        'erased for neatness',
        'drawn as dark as the contours',
      ],
      answer: 'left visible as evidence of measuring',
      teach: 'They show the proportions were measured rather than '
        + 'guessed, '
        + 'and that is credited.',
      level: 3,
    },
  ],
})

/* ── tone, light and form ─────────────────────────────────────────────── */

teach({
  topicId: 'tone-form-adf',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Tone is lightness and darkness, '
      + 'and it is what makes a flat drawing read as solid. '
      + 'On a lit object there are five areas: '
      + 'the highlight, the light, the mid tone, '
      + 'the core shadow and the reflected light, '
      + 'with a cast shadow on the surface beneath. '
      + 'A drawing reads as flat '
      + 'when its tones are all in the middle of the range.',
    method: [
      'Find the direction of the light first.',
      'Find the highlight and the darkest area.',
      'Establish those two extremes before any mid tones.',
      'Work from light to dark, building up gradually.',
      'Keep the cast shadow darkest nearest the object.',
    ],
  },

  idea:
    'Tone, also called value, is the lightness or darkness of an area. '
    + 'It is what makes a drawing on flat paper '
    + 'read as a solid object in space. '
    + 'On a simple object lit from one side '
    + 'there are five tonal areas. '
    + 'The highlight is the lightest point, '
    + 'where the surface faces the light directly. '
    + 'The light area surrounds it. '
    + 'The mid tone is the transition. '
    + 'The core shadow is the darkest part of the object itself, '
    + 'on the side turned away from the light, '
    + 'and it sits just before the edge rather than on it. '
    + 'The reflected light is a slightly lighter band '
    + 'at the far edge, '
    + 'caused by light bouncing back from the surface nearby, '
    + 'and it is what separates the object from its own shadow. '
    + 'The cast shadow falls on the surface beneath the object, '
    + 'and it is darkest and sharpest where it meets the object '
    + 'and lighter and softer further away. '
    + 'Tone is applied by several means: '
    + 'hatching, which is parallel lines; '
    + 'cross hatching, which crosses them; '
    + 'stippling, which is dots; '
    + 'and blending, which smooths the graphite. '
    + 'A tonal scale is a strip '
    + 'showing a graded series from white to the darkest the pencil '
    + 'gives, '
    + 'and drawing one is the standard exercise.',

  mechanism:
    'The reason a learner drawing looks flat '
    + 'is almost always the same, '
    + 'and it is measurable rather than mysterious: '
    + 'the tonal range is too narrow. '
    + 'Everything has been drawn in the middle greys. '
    + 'The paper has not been left white anywhere '
    + 'and nothing has been made genuinely dark. '
    + 'So the test to apply to any drawing is: '
    + 'where is the lightest point, '
    + 'and where is the darkest, '
    + 'and are they far enough apart? '
    + 'If the lightest tone on the page is a light grey '
    + 'and the darkest is a medium grey, '
    + 'the drawing cannot read as solid, '
    + 'because the eye judges form from the range of tone '
    + 'and the range is small. '
    + 'The practical remedy is a procedure, '
    + 'and it is the most useful instruction in the topic: '
    + 'establish the two extremes first. '
    + 'Find the highlight and leave it as white paper. '
    + 'Find the darkest area, usually in the cast shadow '
    + 'where it meets the object, '
    + 'and make it as dark as the pencil will go. '
    + 'Only then work the middle tones in between. '
    + 'Starting with the extremes gives a scale to judge against, '
    + 'and every mid tone is then placed relative to a known light '
    + 'and a known dark. '
    + 'Starting in the middle gives nothing to judge against at all, '
    + 'which is why drawings begun that way stay flat. '
    + 'Second, the single most useful observation in the topic, '
    + 'and the one candidates are not told: '
    + 'the core shadow is not at the edge of the object. '
    + 'It sits just inside the edge, '
    + 'and beyond it the reflected light makes a lighter band. '
    + 'The reason is physical. '
    + 'Light bounces off the table or the wall '
    + 'and strikes the far side of the object, '
    + 'so the very edge is lifted slightly. '
    + 'Draw the shadow darkest at the edge '
    + 'and the object fuses with its own shadow '
    + 'and loses its roundness. '
    + 'Draw the dark band just inside, '
    + 'with the lighter reflected band beyond it, '
    + 'and the object immediately reads as curved and separate. '
    + 'This is the difference between a drawing of a circle '
    + 'and a drawing of a sphere, '
    + 'and it is one observation. '
    + 'Third, the cast shadow, '
    + 'where two things carry marks. '
    + 'It is darkest and hardest edged '
    + 'where it touches the object, '
    + 'and it lightens and softens as it goes away. '
    + 'Drawing it as a uniform grey shape '
    + 'makes it look like a flat cut out lying on the table. '
    + 'And its direction and length '
    + 'are determined by the light, '
    + 'so a shadow drawn on the wrong side '
    + 'contradicts the tone on the object '
    + 'and the drawing cannot be read at all. '
    + 'So the first thing to do in any tonal drawing '
    + 'is to decide where the light is coming from '
    + 'and write it down if necessary, '
    + 'because every tonal decision afterwards depends on it. '
    + 'Fourth, squinting, '
    + 'which is a technique and not a figure of speech. '
    + 'Half close the eyes and look at the subject. '
    + 'The detail disappears '
    + 'and the subject reduces to a few large areas of tone, '
    + 'which is exactly the information needed '
    + 'and exactly what a learner cannot see '
    + 'while looking at the detail. '
    + 'Squinting also reveals '
    + 'which of two areas is actually darker, '
    + 'a comparison the eye makes badly with full detail present. '
    + 'So the sequence is: squint, see three or four tonal areas, '
    + 'block them in, '
    + 'and only then refine. '
    + 'Fifth, the pencils, '
    + 'because the equipment limits the range. '
    + 'A single HB pencil cannot produce a full tonal range: '
    + 'its darkest mark is a medium grey, '
    + 'and pressing harder makes it shiny rather than darker. '
    + 'Two or three grades, '
    + 'such as 2H, HB and 2B or 4B, '
    + 'give a usable range, '
    + 'and that is an inexpensive purchase. '
    + 'A learner with only one pencil '
    + 'should know that the flatness of their drawings '
    + 'is partly the pencil and not only the technique, '
    + 'and can compensate by building up with cross hatching, '
    + 'which reaches a darker tone than a single layer can. '
    + 'What has to be shown on the page '
    + 'is a full range from white paper to the darkest the pencil '
    + 'allows, '
    + 'with the five areas distinguishable. '
    + 'Materials: two or three pencil grades, paper, an eraser, '
    + 'and one object with one light on it.',

  recap:
    'You can draw the outline of an object correctly. '
    + 'This makes that outline read as solid, '
    + 'by putting light and dark in the right places.',

  method: [
    'Decide where the light is coming from.',
    'Squint to reduce the subject to three or four tonal areas.',
    'Find the highlight and leave it as white paper.',
    'Find the darkest point and make it as dark as the pencil allows.',
    'Place the mid tones between those two extremes.',
    'Put the core shadow just inside the edge, not on it.',
    'Add the reflected light beyond it.',
    'Make the cast shadow darkest where it meets the object.',
    'Check the full range: white paper somewhere, '
      + 'and a genuine dark somewhere.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the five tonal areas on a lit object '
        + 'and the shadow it casts.',
      steps: [
        'From lightest to darkest, then the reflected band.',
      ],
      answer: 'The highlight, the lightest point, '
        + 'where the surface faces the light directly. '
        + 'The light area around it. '
        + 'The mid tone, which is the transition. '
        + 'The core shadow, the darkest part of the object, '
        + 'on the side turned from the light. '
        + 'And the reflected light, a lighter band at the far edge. '
        + 'The cast shadow falls on the surface beneath, '
        + 'darkest where it meets the object.',
    },
    {
      level: 4,
      ask: 'A drawing looks flat. '
        + 'Diagnose the problem and give the procedure that fixes it.',
      steps: [
        'The tonal range is too narrow.',
        'Everything is in the middle greys.',
        'Establish the two extremes first.',
      ],
      answer: 'The tonal range is too narrow: '
        + 'everything has been drawn in the middle greys, '
        + 'with no white paper left and nothing made genuinely dark. '
        + 'The eye judges form from the range of tone, '
        + 'so a small range cannot read as solid. '
        + 'The procedure is to establish the extremes before the middle. '
        + 'Find the highlight and leave it as white paper. '
        + 'Find the darkest point and make it as dark as the pencil '
        + 'goes. '
        + 'Then place every mid tone between those two known values. '
        + 'Starting in the middle leaves nothing to judge against, '
        + 'which is why drawings begun that way stay flat.',
    },
    {
      level: 4,
      ask: 'Why should the core shadow not be drawn at the very edge '
        + 'of the object?',
      steps: [
        'Light bounces back from the surface nearby.',
        'So the far edge is slightly lifted.',
        'Darkening the edge fuses the object with its shadow.',
      ],
      answer: 'Because light bounces off the table or the wall '
        + 'and strikes the far side of the object, '
        + 'lifting the very edge slightly. '
        + 'That lighter band is the reflected light. '
        + 'If the shadow is drawn darkest right at the edge, '
        + 'the object fuses with its own cast shadow '
        + 'and loses its roundness. '
        + 'Put the dark band just inside the edge '
        + 'with the lighter reflected band beyond, '
        + 'and the object reads at once as curved and separate. '
        + 'That single observation is the difference '
        + 'between drawing a circle and drawing a sphere.',
    },
    {
      level: 5,
      ask: 'What does squinting at the subject achieve, '
        + 'and why can a learner not get the same information '
        + 'with their eyes fully open?',
      steps: [
        'Squinting removes detail.',
        'What remains is a few large areas of tone.',
        'With detail present the eye compares tones badly.',
      ],
      answer: 'Squinting removes the detail '
        + 'and leaves three or four large areas of tone, '
        + 'which is exactly the information a tonal drawing needs. '
        + 'With the eyes fully open '
        + 'the detail dominates attention, '
        + 'and the eye compares the overall lightness '
        + 'of two areas badly '
        + 'because it is distracted by edges, pattern and colour. '
        + 'Squinting also settles which of two areas is actually darker, '
        + 'a judgement learners get wrong with full detail present. '
        + 'So the sequence is to squint, '
        + 'see the few tonal areas, '
        + 'block them in, '
        + 'and only then refine with the eyes open.',
    },
  ],

  traps: [
    {
      mistake: 'Working only in the middle greys.',
      why: 'The range is then too narrow to read as solid. '
        + 'Leave white paper and make a genuine dark.',
    },
    {
      mistake: 'Drawing the core shadow at the very edge.',
      why: 'Reflected light lifts the far edge. '
        + 'Put the dark just inside, with a lighter band beyond it.',
    },
    {
      mistake: 'Drawing the cast shadow as a uniform grey shape.',
      why: 'It is darkest and sharpest where it meets the object '
        + 'and lightens away from it.',
    },
    {
      mistake: 'Starting tone before deciding where the light is.',
      why: 'Every tonal decision depends on it, '
        + 'and a shadow on the wrong side makes the drawing '
        + 'unreadable.',
    },
  ],

  extension:
    'Chiaroscuro is the deliberate use of a very wide tonal range. '
    + 'Strong light, deep shadow, and little in between. '
    + 'It produces drama, '
    + 'because the eye has few mid tones to rest in. '
    + 'It suits a composition '
    + 'in which one figure must dominate. '
    + 'The opposite choice is a narrow range of close tones. '
    + 'Chosen deliberately, that is not a failure. '
    + 'It produces softness and distance. '
    + 'It is how a hazy landscape is drawn, '
    + 'with far hills in close pale tones '
    + 'and near objects in the full range. '
    + 'That is called aerial perspective. '
    + 'So tone creates depth as well as form. '
    + 'A narrow range is a flat drawing when it is accidental. '
    + 'It is a distant one when it is intended. '
    + 'The difference is whether the near objects '
    + 'were given the full range.',

  questions: [
    {
      id: 'tn-1',
      ask: 'Tone in a drawing is:',
      kind: 'choice',
      options: [
        'lightness and darkness',
        'the choice of colour',
        'the texture of the paper',
      ],
      answer: 'lightness and darkness',
      teach: 'It is what makes a flat drawing read as a solid object.',
      level: 2,
    },
    {
      id: 'tn-2',
      ask: 'A drawing that looks flat most often has:',
      kind: 'choice',
      options: [
        'too narrow a tonal range',
        'too much white paper',
        'lines that are too dark',
      ],
      answer: 'too narrow a tonal range',
      teach: 'Everything sits in the middle greys. '
        + 'Establish the lightest and darkest points first.',
      level: 4,
    },
    {
      id: 'tn-3',
      ask: 'The lighter band at the far edge of a lit object is:',
      kind: 'choice',
      options: ['reflected light', 'the highlight', 'the cast shadow'],
      answer: 'reflected light',
      teach: 'Light bounces back from the nearby surface. '
        + 'It is what separates the object from its own shadow.',
      level: 4,
    },
    {
      id: 'tn-4',
      ask: 'A cast shadow is darkest:',
      kind: 'choice',
      options: [
        'where it meets the object',
        'at its far end',
        'evenly throughout',
      ],
      answer: 'where it meets the object',
      teach: 'It lightens and softens away from the object. '
        + 'A uniform grey shape looks like a cut out.',
      level: 4,
    },
    {
      id: 'tn-5',
      ask: 'Squinting at the subject helps because it:',
      kind: 'choice',
      options: [
        'removes detail and leaves a few areas of tone',
        'makes the subject look larger',
        'reduces glare',
      ],
      answer: 'removes detail and leaves a few areas of tone',
      teach: 'With detail present the eye compares overall lightness '
        + 'badly.',
      level: 5,
    },
  ],
})

/* ── colour theory ────────────────────────────────────────────────────── */

teach({
  topicId: 'colour-theory-adf',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The primary colours in paint are red, yellow and blue. '
      + 'Mixing two primaries gives a secondary: '
      + 'orange, green or violet. '
      + 'A primary mixed with its neighbouring secondary '
      + 'gives a tertiary. '
      + 'Complementary colours sit opposite on the wheel, '
      + 'and mixing a little of one into the other dulls it. '
      + 'Hue is the colour name, '
      + 'value its lightness, '
      + 'intensity its brightness.',
    method: [
      'Name the hue you want.',
      'Decide its value: lighter or darker than the pure hue.',
      'Decide its intensity: as bright as it comes, or dulled.',
      'Lighten with white, darken with a darker hue.',
      'Dull a colour by adding a little of its complement.',
    ],
  },

  idea:
    'The colour wheel arranges hues in a circle. '
    + 'In pigment the primary colours are red, yellow and blue, '
    + 'and they cannot be mixed from other colours. '
    + 'Mixing two primaries gives a secondary: '
    + 'red and yellow give orange, '
    + 'yellow and blue give green, '
    + 'blue and red give violet. '
    + 'Mixing a primary with the secondary beside it '
    + 'gives a tertiary, '
    + 'such as yellow green or red orange. '
    + 'Colour has three properties. '
    + 'Hue is the name of the colour, its position on the wheel. '
    + 'Value is its lightness or darkness. '
    + 'A hue lightened is called a tint, '
    + 'a hue darkened is a shade, '
    + 'and a hue dulled with grey is a tone. '
    + 'Intensity, also called saturation or chroma, '
    + 'is how bright or dull the colour is. '
    + 'Complementary colours lie opposite each other on the wheel: '
    + 'red and green, yellow and violet, blue and orange. '
    + 'Placed side by side they intensify each other; '
    + 'mixed together they dull each other '
    + 'and in equal parts give a near neutral. '
    + 'Colour schemes include monochromatic, '
    + 'using one hue in several values; '
    + 'analogous, using hues adjacent on the wheel; '
    + 'complementary, using opposites; '
    + 'and triadic, using three hues equally spaced. '
    + 'Warm colours are the reds, oranges and yellows, '
    + 'and they appear to advance. '
    + 'Cool colours are the blues, greens and violets, '
    + 'and they appear to recede.',

  mechanism:
    'The error that spoils most learner painting '
    + 'is mixing by adding, '
    + 'and understanding why it fails '
    + 'is the most useful thing in this topic. '
    + 'Every time two different pigments are mixed, '
    + 'the result is duller than either, '
    + 'because each pigment absorbs some light '
    + 'and the mixture absorbs what both absorb. '
    + 'So a colour mixed from four pigments '
    + 'is duller than one mixed from two, '
    + 'and a learner who keeps adding '
    + 'ends with mud and cannot see where it went wrong. '
    + 'The rule that follows is: '
    + 'mix with as few pigments as possible, '
    + 'and reach the hue in as few steps as you can. '
    + 'If a dull brown is wanted, mix it deliberately '
    + 'from two colours rather than arriving at it by accident '
    + 'from five. '
    + 'Second, the three properties '
    + 'and why they must be separated before mixing. '
    + 'A learner says the colour is wrong '
    + 'and does not know what to change. '
    + 'Ask three questions instead. '
    + 'Is the hue wrong, '
    + 'meaning it is too far round the wheel, '
    + 'too orange or too violet? '
    + 'Then move it towards the hue you want '
    + 'by adding a little of the neighbouring colour. '
    + 'Is the value wrong, '
    + 'meaning it is too light or too dark? '
    + 'Then add white to lighten, '
    + 'or add a darker hue to darken. '
    + 'Is the intensity wrong, '
    + 'meaning it is too bright or too dull? '
    + 'Then add a very little of the complement to dull it, '
    + 'or start again with a purer pigment to brighten it. '
    + 'Those three questions turn an unsolvable problem '
    + 'into one with a known remedy, '
    + 'and that diagnostic habit is what the examination is after '
    + 'when it asks a candidate to explain a scheme '
    + 'in terms of hue, value and intensity. '
    + 'Third, darkening with black, '
    + 'which is the standard mistake '
    + 'and should be named. '
    + 'Adding black to a hue darkens it '
    + 'and also shifts the hue and kills the intensity, '
    + 'so a red mixed with black becomes a dull brownish colour '
    + 'rather than a dark red. '
    + 'The better method is to darken with a darker hue: '
    + 'a red is darkened towards violet or towards burnt earth, '
    + 'and the result keeps its character. '
    + 'Black is used sparingly '
    + 'and not as the general means of making a colour darker. '
    + 'White, by contrast, is the ordinary means of lightening, '
    + 'and it too has a cost: '
    + 'it reduces intensity as well as raising value, '
    + 'so a pink is necessarily less intense than the red it came from. '
    + 'That is not a failure of technique; '
    + 'it is how pigment behaves. '
    + 'Fourth, the complement, '
    + 'which does two opposite things '
    + 'and candidates confuse them. '
    + 'Side by side, complements intensify: '
    + 'a red looks reddest against green. '
    + 'Mixed, they neutralise: '
    + 'red and green together make a grey brown. '
    + 'So the same pair is used to make a colour shout '
    + 'and to make it quiet, '
    + 'depending on whether you place it beside '
    + 'or stir it in. '
    + 'This is the most useful piece of colour knowledge there is, '
    + 'because it means a painter needs no grey tube: '
    + 'the neutrals can be mixed from complements '
    + 'and will then relate to the rest of the painting, '
    + 'which a tube grey does not. '
    + 'Fifth, the honest note on materials. '
    + 'This topic can be taught with very little. '
    + 'Three tubes of paint, red, yellow and blue, plus white, '
    + 'will mix every hue on the wheel '
    + 'and will teach everything in this lesson, '
    + 'including the complement effect and the dulling of mixtures. '
    + 'Coloured pencils work for the wheel and the schemes '
    + 'and not for mixing. '
    + 'Where there is no paint at all, '
    + 'the examinable content remains: '
    + 'the wheel, the names, the three properties, '
    + 'the schemes, '
    + 'and the reasoning about what to change. '
    + 'What cannot be learned without paint '
    + 'is the feel of how much complement is a little, '
    + 'and that should be said rather than pretended. '
    + 'What has to be written down, '
    + 'in a question about a colour scheme, '
    + 'is the name of the scheme, '
    + 'the hues used, '
    + 'and the effect in terms of value and intensity.',

  recap:
    'You know the primary colours and can mix green from blue and '
    + 'yellow. '
    + 'This makes the mixing deliberate, '
    + 'and gives the three things about a colour '
    + 'that can be changed separately.',

  method: [
    'Identify the hue you want on the wheel.',
    'Mix it from as few pigments as possible.',
    'Ask whether the hue is wrong, and move it with a neighbour '
      + 'colour.',
    'Ask whether the value is wrong, and use white or a darker hue.',
    'Ask whether the intensity is wrong, '
      + 'and dull it with a little of the complement.',
    'Avoid black as the general way to darken a colour.',
    'Mix neutrals from complements rather than using tube grey.',
    'Name the scheme you are using and say what effect it gives.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the three secondary colours '
        + 'and the complement of each primary.',
      steps: [
        'Each secondary comes from two primaries.',
        'A complement is opposite on the wheel.',
      ],
      answer: 'Red and yellow give orange. '
        + 'Yellow and blue give green. '
        + 'Blue and red give violet. '
        + 'The complement of red is green, '
        + 'of yellow is violet, '
        + 'and of blue is orange. '
        + 'Each primary is complementary '
        + 'to the secondary mixed from the other two.',
    },
    {
      level: 4,
      ask: 'Why does a mixture of several pigments turn to mud?',
      steps: [
        'Each pigment absorbs some light.',
        'A mixture absorbs what both absorb.',
        'So each addition reduces intensity.',
      ],
      answer: 'Because each pigment absorbs part of the light '
        + 'falling on it, '
        + 'and a mixture absorbs everything that either of them '
        + 'absorbs. '
        + 'So every addition makes the result duller, '
        + 'and a colour mixed from four pigments '
        + 'is duller than one mixed from two. '
        + 'The rule that follows is to mix '
        + 'with as few pigments as possible '
        + 'and to reach the hue in as few steps as you can. '
        + 'A dull brown should be mixed on purpose from two colours, '
        + 'not arrived at by accident from five.',
    },
    {
      level: 4,
      ask: 'A learner says a mixed colour is wrong '
        + 'and does not know what to change. '
        + 'What three questions should they ask?',
      steps: [
        'Hue, value, intensity, each with its own remedy.',
      ],
      answer: 'Is the hue wrong, '
        + 'meaning it is too far round the wheel? '
        + 'Move it towards the hue wanted '
        + 'by adding a little of the neighbouring colour. '
        + 'Is the value wrong, '
        + 'meaning too light or too dark? '
        + 'Add white to lighten or a darker hue to darken. '
        + 'Is the intensity wrong, '
        + 'meaning too bright or too dull? '
        + 'Add a very little of the complement to dull it, '
        + 'or start again with a purer pigment to brighten it. '
        + 'Separating the three turns an unsolvable problem '
        + 'into one with a known remedy.',
    },
    {
      level: 5,
      ask: 'Complementary colours both intensify and neutralise '
        + 'each other. '
        + 'Explain, and say why this means a painter needs no grey '
        + 'tube.',
      steps: [
        'Side by side they intensify.',
        'Mixed, they neutralise.',
        'So neutrals can be mixed from the colours already in use.',
      ],
      answer: 'Placed side by side, complements intensify each other, '
        + 'so a red looks reddest against a green. '
        + 'Mixed together, they neutralise each other, '
        + 'because each absorbs what the other reflects, '
        + 'and in roughly equal parts they give a grey brown. '
        + 'So the same pair makes a colour shout '
        + 'or makes it quiet, '
        + 'depending on whether it is placed beside or stirred in. '
        + 'It follows that a painter needs no tube of grey. '
        + 'Neutrals mixed from the complements already on the palette '
        + 'relate to the rest of the painting, '
        + 'because they are made of the same pigments, '
        + 'while a tube grey sits apart from everything.',
    },
  ],

  traps: [
    {
      mistake: 'Darkening a colour with black.',
      why: 'Black shifts the hue and kills the intensity. '
        + 'Darken with a darker hue instead.',
    },
    {
      mistake: 'Adding more and more pigments to correct a mixture.',
      why: 'Every addition dulls the result. '
        + 'Decide which of hue, value or intensity is wrong, '
        + 'and change only that.',
    },
    {
      mistake: 'Confusing the two effects of complements.',
      why: 'Side by side they intensify; mixed they neutralise. '
        + 'The same pair does both.',
    },
    {
      mistake: 'Expecting a tint to be as intense as the pure hue.',
      why: 'White raises value and lowers intensity. '
        + 'A pink is necessarily less intense than its red.',
    },
  ],

  extension:
    'Light mixes differently from paint, '
    + 'and the difference confuses learners who meet both. '
    + 'In light the primaries are red, green and blue, '
    + 'and mixing all three gives white, '
    + 'because each adds its own wavelengths. '
    + 'That is additive mixing, '
    + 'and it is how a screen works. '
    + 'In paint, mixing all three primaries '
    + 'moves towards black, '
    + 'because each pigment subtracts some wavelengths. '
    + 'That is subtractive mixing. '
    + 'So the same word, primary, '
    + 'names two different sets '
    + 'depending on whether light is being added or absorbed, '
    + 'and a learner who knows which system they are in '
    + 'will not be surprised '
    + 'that a photograph on a phone '
    + 'cannot be matched exactly with paint.',

  questions: [
    {
      id: 'co-1',
      ask: 'The complement of blue is:',
      kind: 'choice',
      options: ['orange', 'green', 'violet'],
      answer: 'orange',
      teach: 'Each primary is complementary to the secondary '
        + 'mixed from the other two.',
      level: 3,
    },
    {
      id: 'co-2',
      ask: 'A hue lightened with white is called a:',
      kind: 'choice',
      options: ['tint', 'shade', 'tone'],
      answer: 'tint',
      teach: 'A shade is darkened and a tone is dulled with grey.',
      level: 3,
    },
    {
      id: 'co-3',
      ask: 'Mixing several pigments produces mud because each pigment:',
      kind: 'choice',
      options: [
        'absorbs some of the light',
        'contains white',
        'dries at a different rate',
      ],
      answer: 'absorbs some of the light',
      teach: 'The mixture absorbs what all of them absorb, '
        + 'so every addition dulls the result.',
      level: 4,
    },
    {
      id: 'co-4',
      ask: 'To dull a colour without changing its hue much, add a little:',
      kind: 'choice',
      options: ['of its complement', 'black', 'white'],
      answer: 'of its complement',
      teach: 'Black shifts the hue. '
        + 'White raises the value as well as dulling.',
      level: 4,
    },
    {
      id: 'co-5',
      ask: 'In light, as opposed to paint, the primaries are:',
      kind: 'choice',
      options: [
        'red, green and blue',
        'red, yellow and blue',
        'cyan, magenta and yellow',
      ],
      answer: 'red, green and blue',
      teach: 'Light adds wavelengths and mixes to white. '
        + 'Pigment subtracts them and mixes towards black.',
      level: 5,
    },
  ],
})

/* ── Ghanaian art traditions ──────────────────────────────────────────── */

teach({
  topicId: 'ghanaian-art-adf',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghanaian art traditions carry meaning and not only decoration. '
      + 'An adinkra symbol stands for a proverb or a value. '
      + 'A kente cloth has a named pattern, '
      + 'and the name carries a saying. '
      + 'An akuaba figure and a stool have functions '
      + 'beyond their appearance. '
      + 'So describing a tradition means '
      + 'describing the making, the meaning and the occasion.',
    method: [
      'Name the tradition and where it is practised.',
      'Describe the material and the process of making.',
      'Give the meaning carried by a named example.',
      'Name the occasion on which it is used.',
      'Say who may use it, if that is restricted.',
    ],
  },

  idea:
    'Ghana has several art traditions '
    + 'in which the work carries meaning beyond its appearance. '
    + 'Adinkra is a cloth printed with symbols, '
    + 'associated with the Asante and the Gyaman, '
    + 'and made at Ntonso and nearby. '
    + 'The dye, adinkra aduru, is made from the bark of the badie tree '
    + 'boiled down, '
    + 'and the symbols are stamped with blocks cut from calabash. '
    + 'Each symbol has a name and a meaning: '
    + 'gye nyame refers to the supremacy of God, '
    + 'sankofa to returning for what has been left behind, '
    + 'dwennimmen, the ram horns, to strength with humility, '
    + 'nyansapo, the wisdom knot, to wisdom and ingenuity. '
    + 'Kente is a cloth woven in narrow strips on a horizontal loom '
    + 'and sewn together, '
    + 'associated with Bonwire in Asante and with the Ewe at Agbozume '
    + 'and Kpetoe. '
    + 'Each pattern has a name, '
    + 'and the name usually carries a proverb or a historical '
    + 'reference, '
    + 'as with adwinasa, meaning that all the designs are used up. '
    + 'Wood carving produces stools, '
    + 'the akuaba fertility figure with its flat disc head, '
    + 'masks, and figures for shrines. '
    + 'A stool is not only furniture: '
    + 'a chief stool holds the soul of the state, '
    + 'and each stool design has a name and a meaning. '
    + 'Pottery, mostly made by women, '
    + 'produces vessels for water, cooking and storage, '
    + 'built by hand and fired in an open fire. '
    + 'Brass casting by the lost wax method '
    + 'produced the gold weights once used to weigh gold dust, '
    + 'each a small figure or geometric form, '
    + 'many of them illustrating proverbs. '
    + 'Beadwork, basketry at Bolgatanga, '
    + 'and leatherwork in the north '
    + 'are further traditions.',

  mechanism:
    'The error that costs most marks in this topic '
    + 'is describing a tradition as decoration. '
    + 'A candidate writes that adinkra cloth has beautiful patterns '
    + 'and has missed the whole subject. '
    + 'Each symbol is a statement. '
    + 'A cloth printed with particular symbols '
    + 'and worn to a particular occasion '
    + 'is saying something that the people present can read, '
    + 'and the wearer chose it in order to say that. '
    + 'So a full answer about adinkra has four parts: '
    + 'how it is made, '
    + 'what a named symbol means, '
    + 'the occasion it is worn on, '
    + 'and who may wear it. '
    + 'The occasion is the part candidates leave out '
    + 'and it is the part that shows the tradition is understood. '
    + 'Adinkra in its dark forms is worn at funerals, '
    + 'and in white or light cloth at celebrations, '
    + 'so the colour of the ground '
    + 'is itself part of the message '
    + 'before any symbol is read. '
    + 'A candidate who says that '
    + 'has given the examiner something '
    + 'a decorative description cannot. '
    + 'Second, the making, '
    + 'which is examined because it explains the look of the thing. '
    + 'Adinkra symbols are stamped, '
    + 'and that is why they repeat in blocks '
    + 'with ruled lines between: '
    + 'the block is the unit, '
    + 'and the comb drawn lines divide the cloth into panels. '
    + 'Kente is woven in strips about four inches wide, '
    + 'and that is why the pattern is built from narrow bands '
    + 'and why the strips must be sewn so the pattern aligns. '
    + 'Lost wax casting explains the detail of a gold weight: '
    + 'a wax model is made, invested in clay, '
    + 'the wax is melted out, '
    + 'and metal is poured into the space, '
    + 'so the finished piece reproduces the wax exactly, '
    + 'including fine detail, '
    + 'and the mould is destroyed to release it, '
    + 'which is why each piece is unique. '
    + 'In every case the process explains the appearance, '
    + 'and a candidate who connects the two '
    + 'is answering the question rather than listing facts. '
    + 'Third, the restriction on use, '
    + 'which is a real part of several traditions '
    + 'and should be stated accurately. '
    + 'Some kente patterns were reserved for royalty, '
    + 'and some adinkra symbols are associated with a particular stool. '
    + 'A blackened stool is not an ornament '
    + 'and is not handled by anybody. '
    + 'So who may use a thing '
    + 'is part of describing the tradition, '
    + 'and a description that treats everything as available to all '
    + 'has flattened it. '
    + 'This also means a learner designing work '
    + 'that borrows a symbol '
    + 'should know what the symbol says, '
    + 'because using gye nyame as a pattern without knowing it '
    + 'is the mistake the subject exists to prevent. '
    + 'Fourth, a point of accuracy about origins '
    + 'that candidates get wrong. '
    + 'Kente is woven both by the Asante and by the Ewe, '
    + 'in distinct traditions '
    + 'with different design conventions, '
    + 'and claiming it for one alone is inaccurate. '
    + 'Adinkra is associated with the Asante and the Gyaman. '
    + 'Gold weights were used across the Akan area. '
    + 'Pottery and basketry traditions exist in every region. '
    + 'So naming the place and the people accurately '
    + 'is part of the mark, '
    + 'and a general answer about Ghanaian art '
    + 'without any place name earns little. '
    + 'Fifth, the practical part '
    + 'that needs no materials at all. '
    + 'The research for this topic is available to every learner: '
    + 'a cloth somebody is wearing, '
    + 'a stool in a house, '
    + 'a pot in the kitchen, '
    + 'a basket from the market. '
    + 'A learner can record a named pattern, '
    + 'ask an older person what it means, '
    + 'note the occasion it is used on, '
    + 'and draw it. '
    + 'That is primary research of exactly the kind '
    + 'the subject asks for, '
    + 'and it is better evidence '
    + 'than a copied list of symbol names. '
    + 'What has to be written down, for any tradition, '
    + 'is the making, the meaning, the occasion '
    + 'and who may use it.',

  recap:
    'You have seen adinkra cloth and kente, '
    + 'and know they are Ghanaian. '
    + 'This asks how each is made, '
    + 'what it says, '
    + 'and when it is used.',

  method: [
    'Name the tradition, the people and the place.',
    'Describe the material and the process of making.',
    'Explain how the process accounts for the appearance.',
    'Name one example and give its meaning.',
    'Name the occasion on which it is used.',
    'Say whether its use is restricted, and to whom.',
    'For research, record a real example and ask what it means.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How is adinkra cloth made, '
        + 'and name two symbols with their meanings.',
      steps: [
        'Dye from bark; stamps cut from calabash.',
      ],
      answer: 'The dye, adinkra aduru, '
        + 'is made from the bark of the badie tree, boiled down. '
        + 'Stamps are cut from pieces of calabash, '
        + 'and the symbols are printed onto the cloth, '
        + 'which is first divided into panels with drawn lines. '
        + 'Gye nyame refers to the supremacy of God. '
        + 'Sankofa means returning to take what has been left behind, '
        + 'and is used about learning from the past. '
        + 'Dwennimmen, the ram horns, means strength with humility.',
    },
    {
      level: 4,
      ask: 'Why is it wrong to describe adinkra as decoration?',
      steps: [
        'Each symbol is a statement.',
        'The cloth is chosen to say something.',
        'The occasion and the colour are part of the message.',
      ],
      answer: 'Because each symbol carries a meaning, '
        + 'usually a proverb or a value, '
        + 'so a cloth printed with particular symbols '
        + 'is saying something the people present can read, '
        + 'and the wearer chose it in order to say that. '
        + 'The colour of the ground is part of the message too: '
        + 'dark cloth is worn at funerals '
        + 'and white or light cloth at celebrations, '
        + 'so the cloth speaks before any symbol is read. '
        + 'A description that treats the symbols as pattern '
        + 'has missed the subject.',
    },
    {
      level: 4,
      ask: 'Explain lost wax casting '
        + 'and say why each gold weight is unique.',
      steps: [
        'A wax model is invested in clay.',
        'The wax is melted out and metal poured in.',
        'The mould is broken to release the piece.',
      ],
      answer: 'A model is made in wax, '
        + 'then covered in clay to form a mould, '
        + 'leaving channels. '
        + 'The mould is heated so the wax melts and runs out, '
        + 'leaving a cavity in the exact shape of the model. '
        + 'Molten metal is poured in and allowed to cool. '
        + 'The clay mould is then broken away to release the casting. '
        + 'Each piece is unique because both the wax model '
        + 'and the mould are destroyed in the process, '
        + 'so no two castings can be identical, '
        + 'and the method reproduces fine detail '
        + 'because the metal fills exactly where the wax was.',
    },
    {
      level: 5,
      ask: 'How would you research a Ghanaian art tradition '
        + 'without a library or the internet?',
      steps: [
        'The examples are already present.',
        'The meanings are held by people.',
        'Record, ask, note the occasion, draw.',
      ],
      answer: 'From the examples already around you. '
        + 'A cloth somebody is wearing, '
        + 'a stool in a house, '
        + 'a pot in the kitchen, '
        + 'a basket from the market. '
        + 'Record the name of the pattern or the object, '
        + 'ask an older person what it means '
        + 'and on what occasion it is used, '
        + 'note who may use it if that is restricted, '
        + 'and draw it accurately. '
        + 'That is primary research of exactly the kind the subject '
        + 'wants, '
        + 'and it is stronger evidence '
        + 'than a copied list of symbol names, '
        + 'because it records a living use '
        + 'with the name of the person who explained it.',
    },
  ],

  traps: [
    {
      mistake: 'Describing a tradition as decoration.',
      why: 'Each symbol or pattern carries a meaning, '
        + 'and the wearer chose it to say something.',
    },
    {
      mistake: 'Omitting the occasion.',
      why: 'Dark adinkra is worn at funerals and light cloth at '
        + 'celebrations. '
        + 'The occasion shows the tradition is understood.',
    },
    {
      mistake: 'Claiming kente for one people only.',
      why: 'It is woven in distinct Asante and Ewe traditions, '
        + 'at Bonwire and at Agbozume and Kpetoe.',
    },
    {
      mistake: 'Using a symbol in your own design '
        + 'without knowing its meaning.',
      why: 'The symbol says something. '
        + 'Knowing what is the point of studying the tradition.',
    },
  ],

  extension:
    'The gold weights are a case where art and measurement meet. '
    + 'Gold dust was the currency of the Akan states, '
    + 'and it had to be weighed, '
    + 'so each household and trader kept a set of brass weights '
    + 'in a box with scales and a spoon. '
    + 'The weights were cast by the lost wax method '
    + 'in the form of small figures, animals, tools, '
    + 'and geometric shapes, '
    + 'and very many of them illustrate proverbs, '
    + 'so a transaction was conducted with sayings in the hand. '
    + 'They also record daily life in detail, '
    + 'showing tools, hairstyles, weapons and animals, '
    + 'which makes them historical evidence '
    + 'about a period with few written sources. '
    + 'So a set of weights is at once '
    + 'a currency system, a sculpture collection '
    + 'and an archive.',

  questions: [
    {
      id: 'ga-1',
      ask: 'Adinkra dye is made from the bark of which tree?',
      kind: 'choice',
      options: ['badie', 'odum', 'mahogany'],
      answer: 'badie',
      teach: 'The bark is boiled down to make adinkra aduru, '
        + 'and the stamps are cut from calabash.',
      level: 3,
    },
    {
      id: 'ga-2',
      ask: 'Sankofa refers to:',
      kind: 'choice',
      options: [
        'returning for what has been left behind',
        'the supremacy of God',
        'strength with humility',
      ],
      answer: 'returning for what has been left behind',
      teach: 'Gye nyame is the supremacy of God '
        + 'and dwennimmen is strength with humility.',
      level: 3,
    },
    {
      id: 'ga-3',
      ask: 'Kente is woven:',
      kind: 'choice',
      options: [
        'in narrow strips that are then sewn together',
        'as one wide piece',
        'by printing with stamps',
      ],
      answer: 'in narrow strips that are then sewn together',
      teach: 'That is why the pattern is built from narrow bands '
        + 'and why the strips must align when sewn.',
      level: 4,
    },
    {
      id: 'ga-4',
      ask: 'Each lost wax casting is unique because:',
      kind: 'choice',
      options: [
        'both the wax model and the mould are destroyed',
        'the metal is always different',
        'the caster works freehand',
      ],
      answer: 'both the wax model and the mould are destroyed',
      teach: 'The wax is melted out and the clay mould broken '
        + 'to release the piece.',
      level: 4,
    },
    {
      id: 'ga-5',
      ask: 'Dark adinkra cloth is worn chiefly at:',
      kind: 'choice',
      options: ['funerals', 'weddings', 'harvest festivals'],
      answer: 'funerals',
      teach: 'White or light cloth is worn at celebrations, '
        + 'so the ground colour is part of the message.',
      level: 4,
    },
  ],
})
