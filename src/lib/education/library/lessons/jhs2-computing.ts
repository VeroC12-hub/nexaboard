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
    + 'A kilobyte is about a thousand bytes, '
    + 'a megabyte about a thousand kilobytes, '
    + 'a gigabyte about a thousand megabytes, '
    + 'and a terabyte about a thousand gigabytes. '
    + 'So a page of text is a few kilobytes, '
    + 'a photograph is a few megabytes, '
    + 'and an hour of video is a few gigabytes.',

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
    + 'SUM adds a range: =SUM(B2:B10). '
    + 'AVERAGE gives the mean of a range, '
    + 'and MAX and MIN give the largest and smallest. '
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
    + 'Transitions and animations exist and are almost always a '
    + 'distraction. '
    + 'The speaker gives the information; '
    + 'the slides show the things that are better seen than described, '
    + 'such as a photograph, a graph or a map.',

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
    + 'A local area network, or LAN, covers one building or site, '
    + 'and is usually joined by cable or by wifi. '
    + 'A wide area network, or WAN, joins places far apart, '
    + 'using lines rented from a telecommunications company. '
    + 'The internet is the largest WAN there is. '
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
    + 'Other common tricks are easy to list. '
    + 'A prize you never entered for. '
    + 'A job that asks you to pay a fee. '
    + 'A friend’s account asking for money. '
    + 'A file that installs something when you open it. '
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
    + 'A flowchart is an algorithm drawn. '
    + 'An oval marks the start and the stop. '
    + 'A parallelogram is input or output. '
    + 'A rectangle is a process, such as a calculation. '
    + 'A diamond is a decision, '
    + 'and it has exactly two exits, labelled yes and no. '
    + 'Arrows show the order, '
    + 'and an arrow may lead backwards to make a loop. '
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
    + 'and do not skip a line because you think you know what it does. '
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
    + 'which is why tracing is taught before writing.',

  recap:
    'You can write an algorithm as steps and draw it as a flowchart. '
    + 'This runs it: '
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
      mistake: 'Assuming you know what a line does and skipping it.',
      why: 'The error is nearly always in a line you were sure about.',
    },
  ],

  extension:
    'A loop inside a loop multiplies the repetitions: '
    + 'three times four is twelve passes through the inner body. '
    + 'It is how a program works through a grid, '
    + 'such as the rows and columns of a table.',

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
