/**
 * Stored lessons for JHS 2 Computing.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── Still written for a class that may have no computer ────────────────────
 *
 * Same rule as the JHS 1 file. The spreadsheet lesson teaches what a
 * reference IS before where the button sits, because a learner who
 * understands that a formula names a cell rather than copying its value can
 * use any spreadsheet ever written, and a learner who memorised a menu can
 * use one version of one program.
 *
 * `flowcharts-jhs` and `sequence-selection-repetition` are deliberately a
 * pair: the first writes the algorithm down, the second runs it. Both are
 * doable on paper, which matters, because tracing a loop by hand is how
 * anybody learns what a loop does.
 *
 * `safety-jhs` is about pressure rather than technology. Every scam works by
 * making somebody hurry, so the lesson teaches the pause, not a list of
 * suspicious logos.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── data and storage units ─────────────────────────────────────────────── */

teach({
  topicId: 'storage-units',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A bit is one 0 or 1. '
      + 'Eight bits make a byte, and a byte holds about one character. '
      + 'A thousand bytes is a kilobyte, '
      + 'a thousand kilobytes a megabyte, '
      + 'a thousand megabytes a gigabyte. '
      + 'Each step up is about a thousand times.',
    method: [
      'Work in bytes, then step up or down by about a thousand.',
      'To estimate a text file, count the characters.',
      'Pictures and video are far larger because each pixel is stored.',
    ],
  },

  idea:
    'A bit is a single 0 or 1, '
    + 'and it is the smallest piece of data a computer holds. '
    + 'Eight bits make one byte, '
    + 'which is enough to store one character of text. '
    + 'Every unit above the byte is about a thousand times '
    + 'the one below it.',

  mechanism:
    'The unit names are easy and the sizes are what people get wrong, '
    + 'so it helps to know why a photograph is a thousand times a page of '
    + 'text. '
    + 'A page of text is about two thousand characters, '
    + 'and each character is one byte, '
    + 'so the page is about two kilobytes. '
    + 'That is all the storage a page of writing needs. '
    + 'Now a photograph. '
    + 'The machine does not store "a picture of a market". '
    + 'It stores the colour of every single dot in the image, '
    + 'and a modest photograph has two million dots, '
    + 'with about three bytes for each one to record its colour. '
    + 'That is six million bytes, or about six megabytes, '
    + 'before any compression. '
    + 'So the photograph is three thousand pages of text, '
    + 'and nothing about that is surprising once you know what is being '
    + 'stored. '
    + 'Video follows at once: it is many such pictures every second, '
    + 'which is why an hour of it reaches gigabytes. '
    + 'This is worth knowing for a practical reason. '
    + 'When a phone runs out of space it is almost never because of '
    + 'messages or documents, '
    + 'and almost always because of photographs and video, '
    + 'and knowing the arithmetic tells you where to look without '
    + 'guessing.',

  recap:
    'You know base two from mathematics, '
    + 'and that a computer stores everything as 0s and 1s. '
    + 'This gives the units those 0s and 1s are counted in.',

  method: [
    'Start from bytes. One character is one byte.',
    'Multiply by about a thousand for each step up.',
    'Divide by about a thousand for each step down.',
    'For a text file, estimate the characters.',
    'For a picture, think of the number of dots times about three bytes.',
    'For video, multiply a picture by the frames per second and the '
      + 'seconds.',
    'Give the unit with every answer.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How many bits are in a byte?',
      steps: [
        'A byte is the group that holds one character.',
      ],
      answer: 'Eight.',
    },
    {
      level: 4,
      ask: 'About how large is a plain text file of 4 000 characters?',
      steps: [
        'One character is one byte.',
        '4 000 bytes is about 4 kilobytes.',
      ],
      answer: 'About 4 kilobytes.',
    },
    {
      level: 5,
      ask: 'Why is a photograph thousands of times larger than a page of '
        + 'text?',
      steps: [
        'A page of text is about two thousand characters, so two '
          + 'kilobytes.',
        'A photograph stores the colour of every dot.',
        'Two million dots at about three bytes each is six million bytes.',
        'That is about six megabytes.',
      ],
      answer: 'Because the machine stores the colour of every dot in the '
        + 'image. '
        + 'Two million dots at three bytes each is about six megabytes, '
        + 'against two kilobytes for a page of writing.',
    },
  ],

  traps: [
    {
      mistake: 'Mixing up bits and bytes.',
      why: 'Eight bits make a byte. '
        + 'Internet speeds are usually quoted in bits and file sizes in '
        + 'bytes.',
    },
    {
      mistake: 'Thinking a short document can fill a phone.',
      why: 'Documents are kilobytes. '
        + 'Photographs and video are what fill a device.',
    },
    {
      mistake: 'Giving a size with no unit.',
      why: '500 could be bytes, kilobytes or megabytes. '
        + 'They differ by a million.',
    },
    {
      mistake: 'Thinking a longer file name makes a bigger file.',
      why: 'The name is a handful of bytes. '
        + 'The contents are the size.',
    },
  ],

  extension:
    'Compression stores the same content in fewer bytes '
    + 'by recording patterns instead of every dot. '
    + 'Some kinds lose a little quality to save a lot of space, '
    + 'which is why a photograph saved twice can look worse than the '
    + 'original.',

  figure: {
    alt: 'A page of text drawn beside a photograph. The page holds about '
      + 'two thousand characters at one byte each, which comes to about 2 '
      + 'kilobytes. The photograph is drawn as a grid of tiny squares, '
      + 'about two million dots at three bytes each, which comes to about '
      + '6 megabytes, so one photograph is about three thousand pages.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the machine stores every dot, not the idea of a picture</text>'
      + '<path d="M 40 60 H 190 V 240 H 40 Z"/>'
      + '<path d="M 58 86 H 172" stroke-width="2"/>'
      + '<path d="M 58 108 H 172" stroke-width="2"/>'
      + '<path d="M 58 130 H 172" stroke-width="2"/>'
      + '<path d="M 58 152 H 172" stroke-width="2"/>'
      + '<path d="M 58 174 H 172" stroke-width="2"/>'
      + '<path d="M 58 196 H 172" stroke-width="2"/>'
      + '<path d="M 58 218 H 128" stroke-width="2"/>'
      + '<text x="115" y="272" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">a page of text</text>'
      + '<text x="115" y="294" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">about two thousand characters,</text>'
      + '<text x="115" y="312" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">one byte each</text>'
      + '<text x="115" y="338" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">about 2 kilobytes</text>'
      + '<path d="M 330 60 H 600 V 240 H 330 Z"/>'
      + '<path d="M 360 60 V 240" stroke-width="1"/>'
      + '<path d="M 390 60 V 240" stroke-width="1"/>'
      + '<path d="M 420 60 V 240" stroke-width="1"/>'
      + '<path d="M 450 60 V 240" stroke-width="1"/>'
      + '<path d="M 480 60 V 240" stroke-width="1"/>'
      + '<path d="M 510 60 V 240" stroke-width="1"/>'
      + '<path d="M 540 60 V 240" stroke-width="1"/>'
      + '<path d="M 570 60 V 240" stroke-width="1"/>'
      + '<path d="M 330 90 H 600" stroke-width="1"/>'
      + '<path d="M 330 120 H 600" stroke-width="1"/>'
      + '<path d="M 330 150 H 600" stroke-width="1"/>'
      + '<path d="M 330 180 H 600" stroke-width="1"/>'
      + '<path d="M 330 210 H 600" stroke-width="1"/>'
      + '<text x="465" y="272" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">a photograph</text>'
      + '<text x="465" y="294" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">about two million dots,</text>'
      + '<text x="465" y="312" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">three bytes each</text>'
      + '<text x="465" y="338" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">about 6 megabytes</text>'
      + '<text x="320" y="378" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so one photograph is about three thousand pages</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The storage units, each about a thousand times the one '
        + 'above it',
      columns: ['Unit', 'How big it is', 'About enough for'],
      rows: [
        ['Bit', 'A single 0 or 1', 'The smallest piece there is'],
        ['Byte', 'Eight bits', 'One character of text'],
        ['Kilobyte', 'About a thousand bytes', 'Half a page of writing'],
        ['Megabyte', 'About a thousand kilobytes', 'Part of one photograph'],
        [
          'Gigabyte',
          'About a thousand megabytes',
          'A couple of hundred photographs',
        ],
        [
          'Terabyte',
          'About a thousand gigabytes',
          'Hundreds of hours of video',
        ],
      ],
      note: 'This is why a full phone is almost never full of messages. '
        + 'Look at the photographs and the video first.',
    },
  ],
  questions: [
    {
      id: 'sto-1',
      ask: 'How much storage does one character of text need?',
      kind: 'choice',
      options: ['One byte', 'One bit', 'One kilobyte'],
      answer: 'One byte',
      teach: 'And a byte is eight bits.',
      level: 3,
    },
    {
      id: 'sto-2',
      ask: 'A megabyte is about how many kilobytes?',
      kind: 'choice',
      options: ['A thousand', 'A hundred', 'A million'],
      answer: 'A thousand',
      teach: 'Each step up the units is about a thousand times.',
      level: 4,
    },
    {
      id: 'sto-3',
      ask: 'What usually fills up a phone?',
      kind: 'choice',
      options: [
        'Photographs and video',
        'Text messages',
        'Contact names',
      ],
      answer: 'Photographs and video',
      teach: 'They store the colour of every dot, many times a second for '
        + 'video.',
      level: 5,
    },
  ],
})

/* ── spreadsheets ──────────────────────────────────────────────────────── */

teach({
  topicId: 'spreadsheet-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A spreadsheet is a grid of cells, each named by column and row. '
      + 'A formula starts with = and refers to cells by name, '
      + 'so when a cell changes the answer changes with it. '
      + 'SUM adds a range and AVERAGE means it.',
    method: [
      'Put each quantity in its own cell.',
      'In a formula, name cells rather than typing their values.',
      'Check a total by changing one input and watching it update.',
    ],
  },

  idea:
    'A spreadsheet is a grid. '
    + 'Columns have letters, rows have numbers, '
    + 'and a cell is named by both: B4. '
    + 'A cell can hold text, a number, or a formula. '
    + 'A formula begins with an equals sign '
    + 'and may refer to other cells: =B4+C4. '
    + 'A few named functions work on a whole range of cells at once. '
    + 'A chart can be made from a range of cells, '
    + 'and it updates when the cells do.',

  mechanism:
    'There is one idea in spreadsheets and everything else is menus. '
    + 'A formula does not store a number. '
    + 'It stores an instruction about where to look. '
    + '=B4+C4 does not mean "add 300 and 450". '
    + 'It means "add whatever is in B4 to whatever is in C4", '
    + 'and it will keep meaning that after you change both of them. '
    + 'That is why a spreadsheet is worth using at all: '
    + 'you can change one figure and every total, average and chart that '
    + 'depends on it corrects itself. '
    + 'A learner who types =300+450 has a calculator with extra steps, '
    + 'and has thrown away the only thing the program does. '
    + 'From this, two practical rules follow. '
    + 'First, every quantity gets its own cell, '
    + 'because a number buried inside a formula cannot be changed later '
    + 'and cannot be seen by anybody checking your work. '
    + 'Second, a total should be tested by changing an input. '
    + 'If the total does not move, your formula was not referring to that '
    + 'cell, '
    + 'and you have just found the error in two seconds. '
    + 'The same reference idea explains why SUM takes a range. '
    + 'You are naming a region rather than listing cells, '
    + 'so inserting a row inside it is taken into account '
    + 'without rewriting the formula.',

  recap:
    'You can add a column of figures on paper '
    + 'and you have met the mean in mathematics. '
    + 'A spreadsheet does both, '
    + 'and keeps them correct when the figures change.',

  method: [
    'Put headings in the first row.',
    'Give every quantity its own cell.',
    'Start every formula with an equals sign.',
    'Refer to cells by name, never type the number into the formula.',
    'Use SUM for a total and AVERAGE for a mean.',
    'Check by changing one input and watching the total change.',
    'Select the data and its headings before making a chart.',
    'Label the chart and its axes.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write a formula to add cells B2 to B8.',
      steps: [
        'A formula starts with an equals sign.',
        'SUM takes a range with a colon.',
      ],
      answer: '=SUM(B2:B8)',
    },
    {
      level: 4,
      ask: 'Which is better in a spreadsheet, =300+450 or =B4+C4? Why?',
      steps: [
        'The first stores the answer to one sum.',
        'The second stores an instruction about where to look.',
        'Change the figures and only one of them stays correct.',
      ],
      answer: '=B4+C4. '
        + 'It still gives the right answer after the figures change, '
        + 'because it refers to the cells rather than their values.',
    },
    {
      level: 5,
      ask: 'A learner changes a figure and the total does not change. '
        + 'What has gone wrong, and how do you find it?',
      steps: [
        'A formula referring to that cell would have updated.',
        'So the formula does not refer to it.',
        'Either the number was typed into the formula, '
          + 'or the range does not include that cell.',
        'Click the total and read its formula.',
      ],
      answer: 'The formula is not referring to that cell: '
        + 'either the value was typed in directly, '
        + 'or the range leaves it out. '
        + 'Click on the total and read the formula to see which.',
    },
  ],

  traps: [
    {
      mistake: 'Typing numbers into formulas.',
      why: 'It throws away the only thing a spreadsheet does. '
        + 'Refer to cells.',
    },
    {
      mistake: 'Forgetting the equals sign.',
      why: 'Without it the cell holds text, '
        + 'and the formula is displayed rather than worked out.',
    },
    {
      mistake: 'Typing a total worked out by hand.',
      why: 'It will be wrong the first time a figure changes, '
        + 'and nothing will warn you.',
    },
    {
      mistake: 'A SUM range that misses the last row.',
      why: 'Change an input and watch the total. '
        + 'If it does not move, the range is wrong.',
    },
  ],

  extension:
    'Copying a formula down a column adjusts the references '
    + 'so each row refers to its own cells, '
    + 'which is why one formula can fill a hundred rows. '
    + 'When a reference should not move, it is fixed with dollar signs.',

  figure: {
    alt: 'A small spreadsheet of crop figures with columns A to D and rows '
      + '1 to 5. In row 4 the cells B4 and C4, holding 300 and 450, are '
      + 'ringed in green, and cell D4 holds the formula =B4+C4 rather than '
      + 'a number, so changing either figure corrects the total by itself.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">a formula stores where to look, not what it found</text>'
      + '<text x="165" y="58" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">A</text>'
      + '<text x="255" y="58" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">B</text>'
      + '<text x="345" y="58" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">C</text>'
      + '<text x="435" y="58" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">D</text>'
      + '<text x="108" y="96" font-size="14" text-anchor="end" fill="currentColor" stroke="none">1</text>'
      + '<text x="108" y="136" font-size="14" text-anchor="end" fill="currentColor" stroke="none">2</text>'
      + '<text x="108" y="176" font-size="14" text-anchor="end" fill="currentColor" stroke="none">3</text>'
      + '<text x="108" y="216" font-size="14" text-anchor="end" fill="currentColor" stroke="none">4</text>'
      + '<text x="108" y="256" font-size="14" text-anchor="end" fill="currentColor" stroke="none">5</text>'
      + '<path d="M 120 70 V 270" stroke-width="2"/>'
      + '<path d="M 210 70 V 270" stroke-width="2"/>'
      + '<path d="M 300 70 V 270" stroke-width="2"/>'
      + '<path d="M 390 70 V 270" stroke-width="2"/>'
      + '<path d="M 480 70 V 270" stroke-width="2"/>'
      + '<path d="M 120 70 H 480" stroke-width="2"/>'
      + '<path d="M 120 110 H 480" stroke-width="2"/>'
      + '<path d="M 120 150 H 480" stroke-width="2"/>'
      + '<path d="M 120 190 H 480" stroke-width="2"/>'
      + '<path d="M 120 230 H 480" stroke-width="2"/>'
      + '<path d="M 120 270 H 480" stroke-width="2"/>'
      + '<text x="165" y="96" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Crop</text>'
      + '<text x="255" y="96" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Term 1</text>'
      + '<text x="345" y="96" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Term 2</text>'
      + '<text x="435" y="96" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Total</text>'
      + '<text x="165" y="136" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Cassava</text>'
      + '<text x="255" y="136" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">200</text>'
      + '<text x="345" y="136" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">260</text>'
      + '<text x="435" y="136" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">=B2+C2</text>'
      + '<text x="165" y="176" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Yam</text>'
      + '<text x="255" y="176" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">180</text>'
      + '<text x="345" y="176" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">150</text>'
      + '<text x="435" y="176" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">=B3+C3</text>'
      + '<text x="165" y="216" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Maize</text>'
      + '<path d="M 212 192 H 298 V 228 H 212 Z" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="255" y="216" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">300</text>'
      + '<path d="M 302 192 H 388 V 228 H 302 Z" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="345" y="216" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">450</text>'
      + '<text x="435" y="216" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">=B4+C4</text>'
      + '<text x="165" y="256" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Total</text>'
      + '<text x="435" y="256" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">=SUM(D2:D4)</text>'
      + '<text x="320" y="306" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">=B4+C4 means: add whatever is in B4 to whatever is in C4</text>'
      + '<text x="320" y="332" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">so change the 300, and the total corrects itself</text>'
      + '<text x="320" y="368" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">typing =300+450 instead throws all of that away</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The functions worth knowing, and what each gives back',
      columns: ['Function', 'What it gives', 'Written as'],
      rows: [
        ['SUM', 'The total of everything in a range', '=SUM(B2:B10)'],
        ['AVERAGE', 'The mean of a range', '=AVERAGE(B2:B10)'],
        ['MAX', 'The largest value in a range', '=MAX(B2:B10)'],
        ['MIN', 'The smallest value in a range', '=MIN(B2:B10)'],
      ],
      note: 'Each one takes a range, which names a region rather than '
        + 'listing cells. Insert a row inside the range and the formula '
        + 'takes it in without being rewritten.',
    },
  ],
  questions: [
    {
      id: 'spr-1',
      ask: 'What must every formula begin with?',
      kind: 'choice',
      options: ['An equals sign', 'A number', 'The word SUM'],
      answer: 'An equals sign',
      teach: 'Without it the cell holds text instead.',
      level: 3,
    },
    {
      id: 'spr-2',
      ask: 'What does =AVERAGE(C2:C11) give?',
      kind: 'choice',
      options: [
        'The mean of those ten cells',
        'The total of those ten cells',
        'The largest of those cells',
      ],
      answer: 'The mean of those ten cells',
      teach: 'SUM gives the total and MAX gives the largest.',
      level: 4,
    },
    {
      id: 'spr-3',
      ask: 'Why refer to a cell instead of typing its value?',
      kind: 'choice',
      options: [
        'The answer then corrects itself when the figure changes',
        'It is quicker to type',
        'Cells are more accurate',
      ],
      answer: 'The answer then corrects itself when the figure changes',
      teach: 'That is the whole reason a spreadsheet exists.',
      level: 5,
    },
  ],
})

/* ── presentations ─────────────────────────────────────────────────────── */

teach({
  topicId: 'presentation-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A presentation supports a talk. '
      + 'The speaker carries the information and the slides carry the '
      + 'evidence. '
      + 'Few words, large type, one idea per slide. '
      + 'If your slides can be read instead of heard, you are not needed.',
    method: [
      'Write what you will say first, then decide what needs showing.',
      'Put at most a few words on a slide, in large type.',
      'Never read your slides aloud.',
    ],
  },

  idea:
    'A presentation is a set of slides shown while somebody talks. '
    + 'Each slide may hold a heading, a few words, '
    + 'a picture, a chart or a table. '
    + 'Type should be large enough to read from the back of the room. '
    + 'One idea belongs on one slide. '
    + 'The whole skill is dividing the work between what you say '
    + 'and what the screen shows.',

  mechanism:
    'Almost every bad presentation has the same fault, '
    + 'and it comes from a misunderstanding of what the slides are for. '
    + 'A learner writes the whole talk onto the slides '
    + 'and then reads it out. '
    + 'Two things go wrong at once. '
    + 'The audience reads faster than anybody speaks, '
    + 'so they finish the slide and stop listening, '
    + 'and whatever you say after that is competing with your own slide. '
    + 'And since everything you said was on the screen, '
    + 'you were not needed in the room. '
    + 'So the test of a good slide is unkind and useful: '
    + 'if somebody could get everything by reading your slides without '
    + 'you, '
    + 'the slides are wrong. '
    + 'The division of labour is this. '
    + 'The spoken word is good at explanation, argument and emphasis. '
    + 'The screen is good at things that cannot be spoken: '
    + 'a photograph of the eroded field, '
    + 'a graph showing the rise, '
    + 'a map of where the rivers run. '
    + 'So write your talk first, '
    + 'then go through it asking which parts somebody needs to SEE, '
    + 'and only those become slides. '
    + 'This is also why large type is not merely a courtesy. '
    + 'Choosing type large enough to read from the back '
    + 'physically limits how many words fit, '
    + 'which forces the discipline the presentation needs.',

  recap:
    'You can give a prepared talk from short notes. '
    + 'This adds a screen behind you, '
    + 'and the whole skill is deciding what belongs on it.',

  method: [
    'Write what you are going to say first, in full.',
    'Go through it and mark what has to be seen rather than heard.',
    'Make a slide for each of those, and nothing else.',
    'Give each slide a heading of a few words.',
    'Use type large enough to read from the back.',
    'One idea per slide.',
    'Leave out animations and sound effects.',
    'Number the slides.',
    'Rehearse aloud with the slides, and never read them out.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How many ideas should one slide carry?',
      steps: [
        'A slide is looked at for a few seconds.',
      ],
      answer: 'One.',
    },
    {
      level: 4,
      ask: 'Which belongs on a slide: '
        + 'the sentence explaining why erosion happens, '
        + 'or a photograph of an eroded field?',
      steps: [
        'An explanation is better spoken.',
        'A photograph cannot be spoken at all.',
      ],
      answer: 'The photograph. '
        + 'You say the explanation yourself.',
    },
    {
      level: 5,
      ask: 'Why is reading your slides aloud the worst thing you can do?',
      steps: [
        'The audience reads faster than you speak.',
        'They finish the slide and stop listening.',
        'Your voice is then competing with your own screen.',
        'And everything you said was already visible, so you added '
          + 'nothing.',
      ],
      answer: 'Because the audience reads faster than you talk, '
        + 'so they stop listening, '
        + 'and because if everything is on the screen '
        + 'the presentation did not need you.',
    },
  ],

  traps: [
    {
      mistake: 'Putting the whole talk on the slides.',
      why: 'The audience reads it and stops listening, '
        + 'and you have made yourself unnecessary.',
    },
    {
      mistake: 'Small type to fit more in.',
      why: 'The back of the room cannot read it. '
        + 'Large type also forces fewer words, which is the point.',
    },
    {
      mistake: 'Animations on every line.',
      why: 'They take the attention the content needed.',
    },
    {
      mistake: 'Making the slides before writing the talk.',
      why: 'You then build a talk around whatever you happened to put on '
        + 'the screen.',
    },
  ],

  extension:
    'A handout can carry everything the slides could not: '
    + 'the detail, the figures, the references. '
    + 'Give it out at the end, '
    + 'because given out at the start it is read instead of you.',

  figure: {
    alt: 'Two slides side by side. The one on the left, in red, is the '
      + 'whole talk written out in lines of text, which the audience reads '
      + 'faster than anybody can speak. The one on the right, in green, '
      + 'carries a heading and a single picture of an eroded field, '
      + 'leaving the speaker to say the rest.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">if the slides say it all, you were not needed in the room</text>'
      + '<path d="M 24 56 H 300 V 226 H 24 Z" stroke="#c8433a"/>'
      + '<path d="M 42 82 H 282" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 42 100 H 282" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 42 118 H 282" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 42 136 H 282" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 42 154 H 282" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 42 172 H 282" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 42 190 H 282" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 42 208 H 210" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="162" y="252" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the whole talk, written out</text>'
      + '<text x="162" y="276" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">they read it faster than you speak,</text>'
      + '<text x="162" y="294" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">finish it, and stop listening</text>'
      + '<path d="M 340 56 H 616 V 226 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="478" y="88" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">The eroded field</text>'
      + '<path d="M 380 104 H 576 V 206 H 380 Z" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 380 180 L 428 140 L 470 172 L 520 122 L 576 158" stroke="#0f8a4d" stroke-width="2"/>'
      + '<circle cx="412" cy="126" r="13" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="478" y="252" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">one thing they must see</text>'
      + '<text x="478" y="276" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">you say the rest, and the picture</text>'
      + '<text x="478" y="294" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">does what words cannot</text>'
      + '<text x="320" y="340" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">write the talk first, then ask which parts</text>'
      + '<text x="320" y="366" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">somebody has to see rather than hear</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What belongs on the screen, what belongs in the speech, and '
        + 'what belongs nowhere',
      columns: ['What you have to get across', 'Where it goes', 'Why'],
      rows: [
        [
          'An explanation, or an argument',
          'You say it',
          'Speech is good at reasons given in order',
        ],
        [
          'A photograph of the eroded field',
          'On the screen',
          'Describing it takes far longer than seeing it',
        ],
        [
          'A graph showing the rise',
          'On the screen',
          'The shape is the point',
        ],
        [
          'A map of where the rivers run',
          'On the screen',
          'Position cannot be said',
        ],
        [
          'Your whole talk, written out',
          'Nowhere',
          'They read it, finish, and stop listening',
        ],
        [
          'Transitions and animations',
          'Nowhere',
          'They take attention and give nothing back',
        ],
      ],
      note: 'Large type is not only a courtesy. It limits how many words '
        + 'fit, which forces the discipline the rest of the table '
        + 'describes.',
    },
  ],
  questions: [
    {
      id: 'prs-1',
      ask: 'Who should carry the information in a presentation?',
      kind: 'choice',
      options: ['The speaker', 'The slides', 'The handout'],
      answer: 'The speaker',
      teach: 'The slides show what is better seen than said.',
      level: 3,
    },
    {
      id: 'prs-2',
      ask: 'Why use large type on slides?',
      kind: 'choice',
      options: [
        'So the back of the room can read it, and fewer words fit',
        'It looks more serious',
        'It uses less ink',
      ],
      answer: 'So the back of the room can read it, and fewer words fit',
      teach: 'The limit on words is a benefit, not a cost.',
      level: 4,
    },
    {
      id: 'prs-3',
      ask: 'What is the test of a good set of slides?',
      kind: 'choice',
      options: [
        'Nobody could get the whole talk by reading them alone',
        'They contain everything you will say',
        'They have the most slides',
      ],
      answer: 'Nobody could get the whole talk by reading them alone',
      teach: 'If they could, you were not needed in the room.',
      level: 5,
    },
  ],
})

/* ── networks ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'network-basics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A network is computers joined so they can share data and devices. '
      + 'A LAN covers one site; a WAN spans distances, '
      + 'and the internet is the largest WAN. '
      + 'To join one you need a connection, '
      + 'a device that routes traffic, and an address on that network.',
    method: [
      'Decide the scale: one building, or further.',
      'Name what is needed: medium, router or switch, address.',
      'Explain sharing as the reason the network exists.',
    ],
  },

  idea:
    'A network is two or more computers joined so that they can share: '
    + 'files, a printer, an internet connection, or messages. '
    + 'Networks are named by how far they reach: '
    + 'a local area network, or LAN, and a wide area network, or WAN. '
    + 'To join a network a device needs '
    + 'a physical or wireless connection, '
    + 'a network interface, '
    + 'something to direct the traffic such as a switch or a router, '
    + 'and an address so that data can be sent to it.',

  mechanism:
    'A network exists for one reason: '
    + 'something is in one place and is wanted in another. '
    + 'Everything about its design follows from that, '
    + 'including the thing learners find hardest, which is the address. '
    + 'If a classroom has twenty machines on one cable, '
    + 'and data arrives for one of them, '
    + 'the network has to know which. '
    + 'So every device gets an address, '
    + 'and data is sent in pieces each carrying the address it is for, '
    + 'which is why the address is as necessary as the wire. '
    + 'Without a wire nothing arrives. '
    + 'Without an address it arrives and nobody knows whose it is. '
    + 'The difference between a LAN and a WAN is only distance, '
    + 'and distance has consequences rather than being a label. '
    + 'A LAN is yours: you own the cable, so it is fast and you control '
    + 'it. '
    + 'A WAN crosses land you do not own, '
    + 'so the link is rented, slower, and shared with other people’s '
    + 'traffic. '
    + 'That is why a file copies between two machines in one room far '
    + 'faster '
    + 'than the same file downloads from another country, '
    + 'even though both are "the network". '
    + 'And it is why the internet is best thought of as many networks '
    + 'agreeing to pass each other’s traffic, '
    + 'rather than as one big machine somewhere.',

  recap:
    'You know a browser asks another computer for a page. '
    + 'This explains the joining that makes the asking possible, '
    + 'and the difference between a network in one room and one across a '
    + 'country.',

  method: [
    'Say what is being shared and where it is.',
    'Decide the scale: one site is a LAN, further is a WAN.',
    'Name the medium: cable or wireless.',
    'Name the device that directs traffic: switch or router.',
    'Say that each device needs an address.',
    'Give one advantage of networking and one risk.',
    'For speed questions, think about who owns the link.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What kind of network joins the computers in one school '
        + 'laboratory?',
      steps: [
        'They are all on one site.',
      ],
      answer: 'A local area network, a LAN.',
    },
    {
      level: 4,
      ask: 'Why does every device on a network need an address?',
      steps: [
        'Many devices share the same connection.',
        'Data arriving is meant for one of them.',
        'The network must know which.',
      ],
      answer: 'So that data can be delivered to the right device. '
        + 'Without an address it arrives with nobody to give it to.',
    },
    {
      level: 5,
      ask: 'Why is copying a file between two machines in one room '
        + 'faster than downloading the same file from abroad?',
      steps: [
        'The room is a LAN, on a cable you own.',
        'The download crosses rented links across long distances.',
        'Those links are shared with everybody else’s traffic.',
      ],
      answer: 'Because the LAN link is short, owned and unshared, '
        + 'while the long distance link is rented, far longer, '
        + 'and carrying other people’s traffic at the same time.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the internet is one computer somewhere.',
      why: 'It is many networks agreeing to pass each other’s traffic.',
    },
    {
      mistake: 'Saying a network only needs a cable.',
      why: 'It also needs addresses and something to direct the traffic.',
    },
    {
      mistake: 'Calling any wireless connection a WAN.',
      why: 'Wifi in one building is a LAN. '
        + 'The scale decides, not the medium.',
    },
    {
      mistake: 'Listing only the advantages of networking.',
      why: 'Shared files can be reached by the wrong person, '
        + 'and one infected machine can reach the others.',
    },
  ],

  extension:
    'A server is a computer whose job is to answer other machines: '
    + 'holding files, printing, or serving web pages. '
    + 'A peer to peer network has no server, '
    + 'and every machine shares with every other, '
    + 'which is simpler to set up and much harder to control.',

  figure: {
    alt: 'On the left, a LAN inside one building: three machines and a '
      + 'printer joined to a switch by cable the owner owns. On the right, '
      + 'another LAN in another town. Between them, two routers joined by '
      + 'a red dashed line marked as a rented link, slower and shared with '
      + 'other people, which is what makes the pair of them a WAN.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">a LAN is yours; a WAN crosses land you do not own</text>'
      + '<text x="140" y="60" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">LAN: one building</text>'
      + '<path d="M 20 72 H 260 V 250 H 20 Z" stroke="#0f8a4d" stroke-dasharray="8 6" stroke-width="2"/>'
      + '<path d="M 96 92 H 184 V 126 H 96 Z"/>'
      + '<text x="140" y="114" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">switch</text>'
      + '<path d="M 118 126 L 70 164" stroke-width="2"/>'
      + '<path d="M 140 126 V 164" stroke-width="2"/>'
      + '<path d="M 162 126 L 210 164" stroke-width="2"/>'
      + '<path d="M 38 168 H 102 V 200 H 38 Z" stroke-width="2"/>'
      + '<text x="70" y="190" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">machine</text>'
      + '<path d="M 108 168 H 172 V 200 H 108 Z" stroke-width="2"/>'
      + '<text x="140" y="190" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">machine</text>'
      + '<path d="M 178 168 H 242 V 200 H 178 Z" stroke-width="2"/>'
      + '<text x="210" y="190" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">printer</text>'
      + '<text x="140" y="228" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">your own cable, fast,</text>'
      + '<text x="140" y="244" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">and nobody else on it</text>'
      + '<path d="M 276 92 H 364 V 126 H 276 Z"/>'
      + '<text x="320" y="114" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">router</text>'
      + '<path d="M 260 109 H 270" stroke-width="2"/>'
      + '<path d="M 364 109 H 420" stroke="#c8433a" stroke-width="2" stroke-dasharray="7 5"/>'
      + '<path d="M 428 109 L 410 99 L 410 119 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="382" y="146" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">a rented line,</text>'
      + '<text x="382" y="164" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">slower, and shared</text>'
      + '<text x="530" y="60" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">WAN: another town</text>'
      + '<path d="M 440 72 H 620 V 250 H 440 Z" stroke-dasharray="8 6" stroke-width="2"/>'
      + '<path d="M 486 92 H 574 V 126 H 486 Z"/>'
      + '<text x="530" y="114" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">router</text>'
      + '<path d="M 508 126 L 480 164" stroke-width="2"/>'
      + '<path d="M 552 126 L 580 164" stroke-width="2"/>'
      + '<path d="M 448 168 H 512 V 200 H 448 Z" stroke-width="2"/>'
      + '<text x="480" y="190" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">machine</text>'
      + '<path d="M 548 168 H 612 V 200 H 548 Z" stroke-width="2"/>'
      + '<text x="580" y="190" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">machine</text>'
      + '<text x="530" y="228" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">another LAN, which</text>'
      + '<text x="530" y="244" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">somebody else owns</text>'
      + '<text x="320" y="306" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">every machine needs an address as much as it needs a wire:</text>'
      + '<text x="320" y="332" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">without the wire nothing arrives,</text>'
      + '<text x="320" y="358" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and without the address nobody knows whose it is</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'A LAN and a WAN differ in distance, and the rest follows '
        + 'from that',
      columns: ['Question', 'LAN', 'WAN'],
      rows: [
        [
          'How far it reaches',
          'One building or site',
          'Between towns or countries',
        ],
        [
          'Who owns the line',
          'You do',
          'A telephone company, and you rent it',
        ],
        ['How fast', 'Fast', 'Slower'],
        ['Shared with strangers', 'No', 'Yes, with other people’s traffic'],
        [
          'Joined through',
          'A switch, by cable or wifi',
          'A router, by the rented line',
        ],
        [
          'An example',
          'The machines in one classroom',
          'The internet, the largest there is',
        ],
      ],
      note: 'Only the first row is a definition. Every row under it is a '
        + 'consequence of it, which is why the same file copies in a '
        + 'second across a room and takes minutes from abroad.',
    },
  ],
  questions: [
    {
      id: 'net-1',
      ask: 'What does LAN stand for?',
      kind: 'choice',
      options: [
        'Local area network',
        'Large area network',
        'Linked access network',
      ],
      answer: 'Local area network',
      teach: 'It covers one building or site.',
      level: 3,
    },
    {
      id: 'net-2',
      ask: 'The internet is best described as:',
      kind: 'choice',
      options: [
        'Many networks agreeing to pass each other’s traffic',
        'One very large computer',
        'A collection of websites',
      ],
      answer: 'Many networks agreeing to pass each other’s traffic',
      teach: 'Websites are a service running on it, not the thing itself.',
      level: 4,
    },
    {
      id: 'net-3',
      ask: 'Besides a connection, what must a device have to join a '
        + 'network?',
      kind: 'choice',
      options: ['An address', 'A printer', 'A password'],
      answer: 'An address',
      teach: 'Otherwise data arrives with nobody to deliver it to.',
      level: 5,
    },
  ],
})

/* ── digital safety and citizenship ───────────────────────────────────── */

teach({
  topicId: 'safety-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every scam works by making you hurry. '
      + 'Phishing is a message pretending to be somebody you trust, '
      + 'asking for a password or a code. '
      + 'Nobody legitimate ever needs your password or your one time code. '
      + 'The defence is to stop and check by another route.',
    method: [
      'Notice the urgency. Urgency is the signal.',
      'Never give a password or a one time code to anybody.',
      'Check by contacting the organisation yourself, not through the '
        + 'message.',
    ],
  },

  idea:
    'Phishing is a message that pretends to be somebody you trust. '
    + 'It may seem to come from a bank, a network, a school or a friend. '
    + 'It asks you for a password, '
    + 'or asks you to put details on a page, '
    + 'or asks for a one time code. '
    + 'The other common tricks differ in the story they tell '
    + 'and not in their shape. '
    + 'To protect an account, '
    + 'use a long password and use it nowhere else. '
    + 'Turn on a second step at login where it is offered. '
    + 'Log out on a shared machine. '
    + 'And never pass on a one time code. '
    + 'Digital citizenship is also how you treat other people. '
    + 'Do not share somebody’s picture or message without asking. '
    + 'Do not join in abuse. '
    + 'And report it when you see it.',

  mechanism:
    'Scams are not detected by spotting bad spelling or an odd logo, '
    + 'because those get better every year. '
    + 'They are detected by one structural feature they cannot do without: '
    + 'they must make you act before you think. '
    + 'Read the messages and they are all the same shape. '
    + 'Your account will be closed today. '
    + 'The prize expires in one hour. '
    + 'Your mother is in hospital, send the money now. '
    + 'The urgency is not a detail of the story. '
    + 'It is the mechanism, '
    + 'because a person who waits ten minutes and checks will not be '
    + 'caught, '
    + 'and the attacker knows it. '
    + 'So urgency is the alarm. '
    + 'When a message pushes you to hurry, that is the moment to slow down, '
    + 'and almost nothing legitimate is damaged by a ten minute delay. '
    + 'Then there is one rule that needs no judgement at all. '
    + 'A one time code is sent to you so that YOU can prove it is you. '
    + 'Giving it to somebody else, for any reason, '
    + 'is handing them your identity, '
    + 'and no bank, no network and no employer will ever ask for it, '
    + 'because the whole point of the code is that only you have it. '
    + 'The same goes for a password. '
    + 'Any request for either is a scam, with no exceptions to weigh up, '
    + 'which makes it the one rule you can follow while frightened. '
    + 'And when you do want to check something, '
    + 'check by another route: '
    + 'type the bank’s address yourself, '
    + 'or ring the friend on the number you already had, '
    + 'because the message is exactly what you are trying to verify.',

  recap:
    'You know not to enter a password on a page reached from a link. '
    + 'This explains what all these attacks have in common, '
    + 'so you can recognise one you have never seen before.',

  method: [
    'Read the message and ask whether it is pushing you to hurry.',
    'If it is, stop. Urgency is the signal.',
    'Never give a password or a one time code to anybody at all.',
    'Do not click the link in the message.',
    'Check by another route: type the address yourself, '
      + 'or use a number you already had.',
    'Use a different password for each important account.',
    'Turn on a second step at login where it is offered.',
    'Log out of shared computers.',
    'If something has gone wrong, tell an adult at once rather than '
      + 'hiding it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A message says your account will be closed today '
        + 'unless you confirm your password. What do you do?',
      steps: [
        'It is urgent and asks for a password.',
        'Both are signals.',
      ],
      answer: 'Nothing in the message. '
        + 'No legitimate organisation asks for your password, '
        + 'and the urgency is the trick.',
    },
    {
      level: 4,
      ask: 'Somebody says they sent you a code by mistake '
        + 'and asks you to read it back. Why is this never safe?',
      steps: [
        'A one time code proves that you are you.',
        'It was sent to your phone for that purpose.',
        'Reading it out gives somebody else that proof.',
      ],
      answer: 'Because the code is how you prove your identity. '
        + 'Giving it away hands over your account, '
        + 'and no genuine organisation ever asks for it.',
    },
    {
      level: 5,
      ask: 'Scams are written better every year. '
        + 'What can you still rely on to spot one?',
      steps: [
        'Spelling and logos can be perfected.',
        'But the attacker needs you to act before you check.',
        'So urgency cannot be removed from the attack.',
      ],
      answer: 'The urgency. '
        + 'A scam has to make you act before you think, '
        + 'so pressure to hurry is the one feature it cannot do without.',
    },
  ],

  traps: [
    {
      mistake: 'Judging a message by its spelling or logo.',
      why: 'Those improve every year. '
        + 'The pressure to hurry does not go away.',
    },
    {
      mistake: 'Checking by replying to the message or clicking its link.',
      why: 'The message is the thing you are checking. '
        + 'Use a route you already had.',
    },
    {
      mistake: 'Passing on a one time code to anybody.',
      why: 'It is your proof of identity. '
        + 'Nobody legitimate will ever ask.',
    },
    {
      mistake: 'Using one password everywhere.',
      why: 'One leak then opens every account you have.',
    },
    {
      mistake: 'Hiding it when something has gone wrong.',
      why: 'Acting in the first hour usually limits the damage. '
        + 'Hiding it guarantees the opposite.',
    },
  ],

  extension:
    'The same pressure is used offline too. '
    + 'And the same defence works. '
    + 'Any stranger who needs an answer from you at once '
    + 'has just told you to take your time.',

  figure: {
    alt: 'A message in red saying an account will be closed today and '
      + 'demanding a code at once. Two paths lead away from it. The red '
      + 'one, where you hurry, ends with the code sent, the attacker able '
      + 'to act as you, and the account gone. The green one, where you '
      + 'wait ten minutes and ring the bank on the number you already had, '
      + 'ends with nothing lost.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">every scam needs you to act before you think</text>'
      + '<path d="M 170 48 H 470 V 124 H 170 Z" stroke="#c8433a"/>'
      + '<text x="320" y="74" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">Your account will be closed TODAY.</text>'
      + '<text x="320" y="96" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">Send the code now to keep it open.</text>'
      + '<text x="320" y="116" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">the hurry is not part of the story, it is the trick</text>'
      + '<path d="M 320 124 V 150" stroke-width="2"/>'
      + '<path d="M 260 158 L 190 158" stroke="#c8433a"/>'
      + '<path d="M 320 150 L 260 158" stroke="#c8433a"/>'
      + '<path d="M 182 158 L 200 148 L 200 168 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 380 158 L 450 158" stroke="#0f8a4d"/>'
      + '<path d="M 320 150 L 380 158" stroke="#0f8a4d"/>'
      + '<path d="M 458 158 L 440 148 L 440 168 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 20 176 H 250 V 286 H 20 Z" stroke="#c8433a"/>'
      + '<text x="135" y="202" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">you hurry</text>'
      + '<text x="135" y="228" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">you send the code,</text>'
      + '<text x="135" y="248" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">and they are now you</text>'
      + '<text x="135" y="272" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">the account is gone</text>'
      + '<path d="M 390 176 H 620 V 286 H 390 Z" stroke="#0f8a4d"/>'
      + '<text x="505" y="202" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">you wait ten minutes</text>'
      + '<text x="505" y="228" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">you ring the bank on the</text>'
      + '<text x="505" y="248" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">number you already had</text>'
      + '<text x="505" y="272" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">nothing is lost</text>'
      + '<text x="320" y="326" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so the hurry itself is the alarm,</text>'
      + '<text x="320" y="352" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and almost nothing honest is spoiled by waiting</text>'
      + '<text x="320" y="382" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">no bank will ever ask for your code, because only you have it</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The common tricks, and what gives each of them away',
      columns: ['The trick', 'What it asks you for', 'What gives it away'],
      rows: [
        [
          'A message from your bank',
          'A password, or a one time code',
          'No bank ever asks for either of those',
        ],
        [
          'A prize you never entered for',
          'A fee, or your details',
          'You cannot win what you never entered',
        ],
        [
          'A job offer',
          'A payment before you start',
          'Work pays you; you do not pay it',
        ],
        [
          'A friend’s account asking for money',
          'Money, and quickly',
          'Ring them on the number you already had',
        ],
        [
          'A file sent to you',
          'That you open it',
          'It installs something when you do',
        ],
      ],
      note: 'The stories differ and the shape does not: every one of them '
        + 'needs you to act before you think.',
    },
  ],
  questions: [
    {
      id: 'saf-1',
      ask: 'Who may ask you for your one time code?',
      kind: 'choice',
      options: ['Nobody', 'Your bank', 'A network agent'],
      answer: 'Nobody',
      teach: 'The code exists to prove you are you. '
        + 'Giving it away gives away your identity.',
      level: 3,
    },
    {
      id: 'saf-2',
      ask: 'How should you check a suspicious message from your bank?',
      kind: 'choice',
      options: [
        'Contact the bank yourself, not through the message',
        'Reply and ask',
        'Click the link and look at the page',
      ],
      answer: 'Contact the bank yourself, not through the message',
      teach: 'The message is what you are trying to verify.',
      level: 4,
    },
    {
      id: 'saf-3',
      ask: 'What do all scams have in common?',
      kind: 'choice',
      options: [
        'They need you to act before you think',
        'They have bad spelling',
        'They come by email',
      ],
      answer: 'They need you to act before you think',
      teach: 'Which is why urgency is the alarm, not the story.',
      level: 5,
    },
  ],
})

/* ── algorithms and flowcharts ────────────────────────────────────────── */

teach({
  topicId: 'flowcharts-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An algorithm is a finite list of unambiguous steps '
      + 'that solves a problem. '
      + 'A flowchart draws it: '
      + 'oval for start and stop, '
      + 'parallelogram for input and output, '
      + 'rectangle for a process, '
      + 'diamond for a decision with two labelled exits.',
    method: [
      'Write the steps in words first.',
      'Check each step could be done by somebody who knows nothing.',
      'Then draw, using the right shape for each kind of step.',
    ],
  },

  idea:
    'An algorithm is a list of steps that solves a problem, '
    + 'where every step is clear, '
    + 'the order is fixed, '
    + 'and the list comes to an end. '
    + 'A flowchart is the same algorithm drawn, '
    + 'with a different shape for each kind of step. '
    + 'Pseudocode writes the same thing in short plain sentences '
    + 'instead of shapes.',

  mechanism:
    'The hard part of an algorithm is not the drawing. '
    + 'It is that a step which seems obvious to you '
    + 'may not be a step at all. '
    + 'Write an algorithm for making tea and somebody will write '
    + '"boil the water". '
    + 'That is not one step, '
    + 'and more importantly it assumes the reader knows what boiling means, '
    + 'where the kettle is, and when to stop. '
    + 'A computer knows none of that. '
    + 'So the test for every step is this: '
    + 'could somebody who knows nothing about the problem do exactly this, '
    + 'with no choices left to them? '
    + 'If there is any judgement left in a step, it is not finished. '
    + 'This is why writing the steps in words comes before drawing, '
    + 'because the drawing hides vagueness behind neat boxes. '
    + 'The decision diamond is the other place marks are lost, '
    + 'and the rule is exact: '
    + 'two exits, both labelled, and every path must eventually reach the '
    + 'stop. '
    + 'A diamond with one exit is not a decision. '
    + 'A path that goes nowhere is a program that hangs. '
    + 'Checking this is easy and worth doing every time: '
    + 'put your finger on the start '
    + 'and trace each possible route to the end. '
    + 'If any route loops forever or stops in the middle of the page, '
    + 'the algorithm is wrong, '
    + 'and you have found it before anybody ran it.',

  recap:
    'You can follow a recipe or a set of directions. '
    + 'This writes such instructions so exactly '
    + 'that something with no judgement at all could follow them.',

  method: [
    'State the problem in one sentence.',
    'List what is given and what is wanted.',
    'Write the steps in words, in order.',
    'Test each step: could somebody who knows nothing do it exactly?',
    'Split any step that contains a choice.',
    'Draw it: oval, parallelogram, rectangle, diamond.',
    'Give every diamond two labelled exits.',
    'Trace every path from start to stop with your finger.',
    'Check the algorithm ends.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which flowchart shape is used for a decision?',
      steps: [
        'A decision has two possible answers.',
      ],
      answer: 'A diamond, with two exits labelled yes and no.',
    },
    {
      level: 4,
      ask: 'Write an algorithm to decide whether a pupil has passed, '
        + 'where 50 or more is a pass.',
      steps: [
        'Something must be taken in.',
        'Then compared.',
        'Then one of two things reported.',
      ],
      answer: 'Start. Input the mark. '
        + 'Is the mark 50 or more? '
        + 'If yes, output "pass". If no, output "fail". Stop.',
    },
    {
      level: 5,
      ask: 'Why is "boil the water" a poor step in an algorithm?',
      steps: [
        'It assumes the reader knows what to boil it in and how.',
        'It leaves the stopping point to judgement.',
        'A computer has no judgement to apply.',
      ],
      answer: 'Because it leaves decisions to the reader. '
        + 'A step must be doable by somebody who knows nothing, '
        + 'with no choices left to them.',
    },
  ],

  traps: [
    {
      mistake: 'A diamond with only one exit.',
      why: 'A decision has two outcomes. '
        + 'One exit means it was not a decision.',
    },
    {
      mistake: 'Drawing before writing the steps in words.',
      why: 'Neat boxes hide vague steps. '
        + 'Write first, then draw.',
    },
    {
      mistake: 'An algorithm with no end.',
      why: 'An algorithm must terminate. '
        + 'Trace every path to the stop.',
    },
    {
      mistake: 'Using a rectangle for input.',
      why: 'Input and output take the parallelogram. '
        + 'The rectangle is for a process.',
    },
  ],

  extension:
    'The same algorithm can be written as a flowchart, as pseudocode, '
    + 'or as a program in any language. '
    + 'The algorithm is the thinking; '
    + 'the language is only how it is written down.',

  figure: {
    alt: 'A flowchart that totals a set of marks. An oval marked START '
      + 'leads to a rectangle setting the total to zero, then a '
      + 'parallelogram reading a mark, then a rectangle adding it to the '
      + 'total, then a diamond asking whether there are more marks. Its '
      + 'yes exit loops back in green to the reading step, and its no exit '
      + 'leads to a parallelogram printing the total and an oval marked '
      + 'STOP.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">a shape for each kind of step, and every path reaching a stop</text>'
      + '<ellipse cx="200" cy="64" rx="52" ry="18"/>'
      + '<text x="200" y="70" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">START</text>'
      + '<path d="M 200 82 V 94" stroke-width="2"/>'
      + '<path d="M 200 102 L 193 86 L 207 86 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 120 104 H 280 V 136 H 120 Z"/>'
      + '<text x="200" y="125" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">total = 0</text>'
      + '<path d="M 200 136 V 142" stroke-width="2"/>'
      + '<path d="M 200 150 L 193 134 L 207 134 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 134 152 L 280 152 L 266 184 L 120 184 Z"/>'
      + '<text x="200" y="173" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">READ a mark</text>'
      + '<path d="M 200 184 V 190" stroke-width="2"/>'
      + '<path d="M 200 198 L 193 182 L 207 182 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 108 200 H 292 V 232 H 108 Z"/>'
      + '<text x="200" y="221" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">total = total + mark</text>'
      + '<path d="M 200 232 V 236" stroke-width="2"/>'
      + '<path d="M 200 244 L 193 228 L 207 228 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 200 244 L 278 274 L 200 304 L 122 274 Z"/>'
      + '<text x="200" y="279" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">more marks?</text>'
      + '<path d="M 122 274 H 56 V 168 H 110" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 118 168 L 102 161 L 102 175 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="88" y="262" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">yes</text>'
      + '<path d="M 278 274 H 374" stroke-width="2"/>'
      + '<path d="M 382 274 L 366 267 L 366 281 Z" fill="currentColor" stroke="none"/>'
      + '<text x="326" y="262" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">no</text>'
      + '<path d="M 400 258 L 546 258 L 532 290 L 386 290 Z"/>'
      + '<text x="466" y="279" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">PRINT total</text>'
      + '<path d="M 466 290 V 306" stroke-width="2"/>'
      + '<path d="M 466 314 L 459 298 L 473 298 Z" fill="currentColor" stroke="none"/>'
      + '<ellipse cx="466" cy="334" rx="52" ry="18"/>'
      + '<text x="466" y="340" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">STOP</text>'
      + '<text x="320" y="382" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">trace every route with your finger: each one must reach STOP</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The flowchart shapes, and the rule each one is marked on',
      columns: ['Shape', 'What it means', 'The rule that is tested'],
      rows: [
        ['Oval', 'The start, and the stop', 'Every path must reach a stop'],
        ['Parallelogram', 'Input, or output', 'Say what is read or written'],
        [
          'Rectangle',
          'A process, such as a calculation',
          'One step, with no judgement left in it',
        ],
        ['Diamond', 'A decision', 'Exactly two exits, both labelled'],
        [
          'Arrow',
          'The order the steps run in',
          'One leading backwards makes a loop',
        ],
      ],
      note: 'Write the steps in words before drawing any of these, because '
        + 'neat boxes hide a vague step and plain sentences do not.',
    },
  ],
  questions: [
    {
      id: 'flw-1',
      ask: 'Which shape marks the start of a flowchart?',
      kind: 'choice',
      options: ['An oval', 'A rectangle', 'A diamond'],
      answer: 'An oval',
      teach: 'The same shape marks the stop.',
      level: 3,
    },
    {
      id: 'flw-2',
      ask: 'How many exits must a decision have?',
      kind: 'choice',
      options: ['Two, both labelled', 'One', 'As many as needed'],
      answer: 'Two, both labelled',
      teach: 'Yes and no, and both must lead somewhere.',
      level: 4,
    },
    {
      id: 'flw-3',
      ask: 'What makes a step good enough for an algorithm?',
      kind: 'choice',
      options: [
        'Somebody who knows nothing could do it with no choices left',
        'It is short',
        'It uses the right shape',
      ],
      answer: 'Somebody who knows nothing could do it with no choices left',
      teach: 'Any judgement left in a step means it is not finished.',
      level: 5,
    },
  ],
})

/* ── sequence, selection and repetition ──────────────────────────────── */

teach({
  topicId: 'sequence-selection-repetition',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every program is built from three structures. '
      + 'Sequence does things in order. '
      + 'Selection chooses with if. '
      + 'Repetition does something again with a loop. '
      + 'To predict what a program outputs, trace it line by line '
      + 'and write down each variable as it changes.',
    method: [
      'Name which of the three structures each part uses.',
      'To trace, make a column for every variable and fill it line by '
        + 'line.',
      'For a loop, check what changes each time and what ends it.',
    ],
  },

  why:
    'A mobile money agent wants a small program to work out her charge. '
    + 'Up to 50 cedis the fee is 50 pesewas. '
    + 'Above 50 cedis it is one percent of the amount. '
    + 'She also wants the program to run through a whole day of '
    + 'transactions, one after another, and total the fees. '
    + 'You can work out the fee for one transaction on paper. '
    + 'But the program has to pick between two rules for each one, '
    + 'and then do the same work again for the next. '
    + 'Nothing written on that paper does either of those. '
    + 'So how does a program choose, and how does it repeat?',

  notation:
    'Programs are planned in a plain form called pseudocode, '
    + 'which is English laid out like code. '
    + 'A choice is written "if ... then ... else ...", '
    + 'and said "if, then, otherwise". '
    + 'A loop is written "while ... do ..." or "for each ... do ...". '
    + 'The lines belonging inside an if or a loop '
    + 'are pushed in from the left margin. '
    + 'That indentation is the only thing saying they are inside it. '
    + 'The commonest way to lose a mark is to leave it out, '
    + 'because then nobody can tell where the loop ends.',

  idea:
    'Sequence means one instruction after another, in order. '
    + 'Selection means choosing: '
    + 'if a condition is true do one thing, otherwise do another. '
    + 'Repetition means a loop: '
    + 'doing something again, either a fixed number of times '
    + 'or while a condition stays true. '
    + 'A variable is a named store holding a value that can change. '
    + 'Tracing a program means working through it by hand, '
    + 'line by line, '
    + 'writing down what each variable holds at each step, '
    + 'and recording anything it outputs.',

  mechanism:
    'The three structures are worth taking seriously because there are '
    + 'only three. '
    + 'Every program ever written, of any size, '
    + 'is sequence, selection and repetition combined. '
    + 'So a learner who can trace all three can read any program, '
    + 'and tracing is the skill the examination actually tests. '
    + 'Here is how to do it so it never goes wrong. '
    + 'Draw a column for each variable and a column for output. '
    + 'Then take the lines one at a time, '
    + 'and when a variable changes, '
    + 'write the new value in its column on a new row. '
    + 'Do not keep a value in your head, '
    + 'and do not skip a line because it looks obvious. '
    + 'That is the whole method, and it is slow on purpose. '
    + 'For a loop there are two questions you must be able to answer: '
    + 'what changes each time round, '
    + 'and what will eventually make it stop. '
    + 'If nothing changes, nothing can end it, '
    + 'and the program runs forever, '
    + 'which is the commonest bug of all '
    + 'and is always this: '
    + 'the condition for stopping was never affected by the body of the '
    + 'loop. '
    + 'The other classic error is the off by one. '
    + 'A loop from 1 to 5 runs five times; '
    + 'a loop while a counter is less than 5, starting at 1, '
    + 'runs four times. '
    + 'Nobody gets these right by reasoning about them. '
    + 'They get them right by tracing, '
    + 'which is why tracing comes before writing.',

  recap:
    'An algorithm is a list of steps that solves a problem, '
    + 'written so that anybody who follows them gets the same result. '
    + 'Here is one for making tea. '
    + 'Boil the water. Put a tea bag in a cup. Pour the water in. '
    + 'Wait two minutes. Take the bag out. '
    + 'A flowchart is that same list drawn as boxes joined by arrows, '
    + 'with a diamond wherever there is a choice to make. '
    + 'Both of those say what should happen. '
    + 'This lesson is about running it: '
    + 'the three structures a program is built from, '
    + 'and how to work out by hand what one will do.',

  method: [
    'Identify sequence, selection and repetition in the program.',
    'List the variables.',
    'Draw a column for each variable and one for output.',
    'Work line by line, writing each new value on a new row.',
    'Never hold a value in your head.',
    'At an if, check the condition against the current values.',
    'For a loop, write down what changes each time.',
    'Name what will make the loop stop.',
    'Count the repetitions carefully, including the first and last.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which structure is used for "if the mark is 50 or more, '
        + 'print pass"?',
      steps: [
        'A choice is being made.',
      ],
      answer: 'Selection.',
    },
    {
      level: 4,
      ask: 'Trace: set total to 0. '
        + 'For each number in 1, 2, 3: add the number to total. '
        + 'Output total.',
      steps: [
        'total starts at 0.',
        'Add 1: total is 1.',
        'Add 2: total is 3.',
        'Add 3: total is 6.',
      ],
      answer: '6.',
    },
    {
      level: 5,
      ask: 'A loop says: while count is less than 5, output count. '
        + 'The program never stops. Why?',
      steps: [
        'The condition depends on count.',
        'Nothing in the loop changes count.',
        'So the condition stays true forever.',
      ],
      answer: 'Because count is never increased inside the loop, '
        + 'so the condition that would end it never becomes false. '
        + 'Every endless loop is this same fault.',
    },
  ],

  traps: [
    {
      mistake: 'Tracing in your head.',
      why: 'You will lose a value. '
        + 'Write a column for each variable.',
    },
    {
      mistake: 'A loop whose body does not affect its condition.',
      why: 'It runs forever. '
        + 'This is the commonest bug there is.',
    },
    {
      mistake: 'Miscounting how many times a loop runs.',
      why: 'From 1 to 5 is five times. '
        + 'While less than 5, starting at 1, is four. Trace it.',
    },
    {
      mistake: 'Deciding a line is obvious and skipping it.',
      why: 'The error is nearly always in a line you were sure about.',
    },
  ],

  extension:
    'A loop inside a loop multiplies the repetitions: '
    + 'three times four is twelve passes through the inner body. '
    + 'It is how a program works through a grid, '
    + 'such as the rows and columns of a table.',

  figure: {
    alt: 'The three structures drawn side by side. Sequence is three boxes '
      + 'one under another. Selection is a diamond asking whether '
      + 'something is true, with a yes branch and a no branch that do '
      + 'different things and then join again. Repetition is a box '
      + 'followed by a diamond asking whether to go again, whose yes exit '
      + 'loops back in green to the box and whose no exit carries on.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">every program ever written is these three, combined</text>'
      + '<text x="110" y="58" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">sequence</text>'
      + '<path d="M 60 76 H 160 V 108 H 60 Z"/>'
      + '<text x="110" y="97" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">step 1</text>'
      + '<path d="M 110 108 V 118" stroke-width="2"/>'
      + '<path d="M 110 126 L 103 110 L 117 110 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 60 128 H 160 V 160 H 60 Z"/>'
      + '<text x="110" y="149" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">step 2</text>'
      + '<path d="M 110 160 V 170" stroke-width="2"/>'
      + '<path d="M 110 178 L 103 162 L 117 162 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 60 180 H 160 V 212 H 60 Z"/>'
      + '<text x="110" y="201" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">step 3</text>'
      + '<text x="110" y="248" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">one after another,</text>'
      + '<text x="110" y="266" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">in order</text>'
      + '<text x="320" y="58" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">selection</text>'
      + '<path d="M 320 76 L 376 102 L 320 128 L 264 102 Z"/>'
      + '<text x="320" y="107" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">is it true?</text>'
      + '<path d="M 264 102 H 244 V 140" stroke-width="2"/>'
      + '<path d="M 244 148 L 237 132 L 251 132 Z" fill="currentColor" stroke="none"/>'
      + '<text x="238" y="90" font-size="13" text-anchor="end" fill="currentColor" stroke="none">yes</text>'
      + '<path d="M 376 102 H 396 V 140" stroke-width="2"/>'
      + '<path d="M 396 148 L 389 132 L 403 132 Z" fill="currentColor" stroke="none"/>'
      + '<text x="402" y="90" font-size="13" text-anchor="start" fill="currentColor" stroke="none">no</text>'
      + '<path d="M 204 150 H 284 V 182 H 204 Z"/>'
      + '<text x="244" y="171" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">do this</text>'
      + '<path d="M 356 150 H 436 V 182 H 356 Z"/>'
      + '<text x="396" y="171" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">or this</text>'
      + '<path d="M 244 182 V 202 H 396 V 182" stroke-width="2"/>'
      + '<path d="M 320 202 V 216" stroke-width="2"/>'
      + '<path d="M 320 224 L 313 208 L 327 208 Z" fill="currentColor" stroke="none"/>'
      + '<text x="320" y="248" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">one way or the other,</text>'
      + '<text x="320" y="266" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">never both</text>'
      + '<text x="520" y="58" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">repetition</text>'
      + '<path d="M 470 76 H 570 V 108 H 470 Z"/>'
      + '<text x="520" y="97" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">do this</text>'
      + '<path d="M 520 108 V 118" stroke-width="2"/>'
      + '<path d="M 520 126 L 513 110 L 527 110 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 520 128 L 576 154 L 520 180 L 464 154 Z"/>'
      + '<text x="520" y="159" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">again?</text>'
      + '<path d="M 576 154 H 598 V 92 H 574" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 566 92 L 582 85 L 582 99 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="604" y="148" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">yes</text>'
      + '<path d="M 520 180 V 200" stroke-width="2"/>'
      + '<path d="M 520 208 L 513 192 L 527 192 Z" fill="currentColor" stroke="none"/>'
      + '<text x="506" y="200" font-size="13" text-anchor="end" fill="currentColor" stroke="none">no</text>'
      + '<text x="520" y="248" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">round again until</text>'
      + '<text x="520" y="266" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">something stops it</text>'
      + '<text x="320" y="322" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so if you can trace all three, you can read any program</text>'
      + '<text x="320" y="356" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">and a loop whose body never changes the test</text>'
      + '<text x="320" y="378" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">runs forever: the commonest bug there is</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'A trace of a short loop, written down one pass at a time',
      columns: ['After this step', 'count', 'total', 'Output'],
      rows: [
        ['total is set to 0 and count to 1', '1', '0', ''],
        ['First pass round the loop', '2', '1', ''],
        ['Second pass', '3', '3', ''],
        ['Third pass', '4', '6', ''],
        ['count is now 4, so the loop stops', '4', '6', ''],
        ['print total', '4', '6', '6'],
      ],
      note: 'The loop traced here adds count to total, adds one to count, '
        + 'and goes round again while count is 3 or less. Notice that the '
        + 'count which stopped it is one more than the last one used, '
        + 'which is where the off by one error comes from.',
    },
  ],
  questions: [
    {
      id: 'ssr-1',
      ask: 'Which structure repeats instructions?',
      kind: 'choice',
      options: ['Repetition', 'Selection', 'Sequence'],
      answer: 'Repetition',
      teach: 'Selection chooses, and sequence just goes in order.',
      level: 3,
    },
    {
      id: 'ssr-2',
      ask: 'What is the best way to predict a program’s output?',
      kind: 'choice',
      options: [
        'Trace it line by line with a column per variable',
        'Read it through once carefully',
        'Guess from the variable names',
      ],
      answer: 'Trace it line by line with a column per variable',
      teach: 'Slow on purpose. It is the method that does not fail.',
      level: 4,
    },
    {
      id: 'ssr-3',
      ask: 'Why does a loop sometimes never end?',
      kind: 'choice',
      options: [
        'Nothing in it changes what the condition depends on',
        'The computer is too slow',
        'The loop has too many lines',
      ],
      answer: 'Nothing in it changes what the condition depends on',
      teach: 'So the condition stays true forever.',
      level: 5,
    },
  ],
})
