/**
 * Stored lessons for JHS 1 Computing.
 *
 * Written at about grade 6 to 7, with a `brief` form on every topic.
 *
 * ── Written for a learner who may not have a computer ──────────────────────
 *
 * This is the subject most likely to be taught without the thing it is
 * about. A JHS 1 class may share one laptop, or have none, and the lesson
 * still has to work. So every topic here is written so that it can be
 * followed, answered and examined on paper, and nothing load bearing depends
 * on having a machine in front of you: the file lesson explains the tree of
 * folders rather than one program's menus, and the word processing lesson
 * teaches what a style IS before it teaches where the button sits.
 *
 * It also means naming no product where a plain word exists. A learner who
 * only ever heard the brand name cannot answer a question about a word
 * processor.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── components of a computer system ─────────────────────────────────────── */

teach({
  topicId: 'components-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A computer system does four things: '
      + 'input, processing, storage and output. '
      + 'A keyboard is input. '
      + 'The processor does the work. '
      + 'A disk stores. '
      + 'A screen or printer is output.',
    method: [
      'Ask which way the information is moving.',
      'In means input, out means output.',
      'If it keeps the information, it is storage.',
    ],
  },

  idea:
    'A computer system has four parts by job, not by shape. '
    + 'Input takes information in: keyboard, mouse, microphone, camera, '
    + 'scanner. '
    + 'Processing works on it: the central processing unit, '
    + 'helped by the main memory. '
    + 'Storage keeps it when the power goes off: '
    + 'hard disk, memory card, flash drive. '
    + 'Output sends it back out to a person: '
    + 'screen, printer, speaker. '
    + 'Hardware is the part you can touch. '
    + 'Software is the instructions, which you cannot.',

  mechanism:
    'Learners get stuck because they try to place devices by what they look '
    + 'like, and the four parts are jobs rather than shapes. '
    + 'Ask instead which way the information is moving. '
    + 'Into the machine is input. '
    + 'Out to a person is output. '
    + 'Kept for later is storage. '
    + 'Changed on the way is processing. '
    + 'Once it is a question about direction, the awkward devices stop '
    + 'being awkward. '
    + 'A touch screen is both: it takes your finger in and shows a picture '
    + 'out. '
    + 'A flash drive is storage going both ways. '
    + 'There is one more distinction worth getting right now, '
    + 'because it explains work being lost. '
    + 'Main memory, called RAM, holds what the processor is working on, '
    + 'and it empties the moment the power goes. '
    + 'Storage keeps things without power. '
    + 'That is why unsaved work disappears in a power cut: '
    + 'it was still in memory and had never reached storage.',

  recap:
    'You have used a phone or a computer and know a keyboard from a screen. '
    + 'This sorts every device by the job it does in the system.',

  method: [
    'Name the four jobs: input, processing, storage, output.',
    'For any device, ask which way the information moves.',
    'Into the machine: input. Out to a person: output.',
    'Kept for later: storage. Changed on the way: processing.',
    'Say whether the thing is hardware or software.',
    'Remember that memory empties without power and storage does not.',
  ],

  figure: {
    alt: 'Four boxes in a row showing input, processing and output, with a '
      + 'storage box below the processing box and arrows going both ways '
      + 'between them',
    svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g fill="none" stroke="currentColor" stroke-width="2.5">'
      + '<rect x="20" y="40" width="150" height="80" rx="10"/>'
      + '<rect x="245" y="40" width="150" height="80" rx="10"/>'
      + '<rect x="470" y="40" width="150" height="80" rx="10"/>'
      + '<rect x="245" y="210" width="150" height="80" rx="10" '
      + 'stroke="#0f8a4d"/>'
      + '<path d="M175 80h62" marker-end="url(#ar)"/>'
      + '<path d="M400 80h62" marker-end="url(#ar)"/>'
      + '<path d="M305 125v78" marker-end="url(#ar)"/>'
      + '<path d="M335 203v-78" marker-end="url(#ar)"/>'
      + '</g>'
      + '<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" '
      + 'markerWidth="7" markerHeight="7" orient="auto">'
      + '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'
      + '<g fill="currentColor" text-anchor="middle">'
      + '<text x="95" y="76" font-size="19" font-weight="700">INPUT</text>'
      + '<text x="95" y="100" font-size="15">keyboard, mouse</text>'
      + '<text x="320" y="70" font-size="19" font-weight="700">'
      + 'PROCESSING</text>'
      + '<text x="320" y="94" font-size="15">the processor</text>'
      + '<text x="320" y="112" font-size="15">and memory</text>'
      + '<text x="545" y="76" font-size="19" font-weight="700">OUTPUT</text>'
      + '<text x="545" y="100" font-size="15">screen, printer</text>'
      + '<text x="320" y="248" font-size="19" font-weight="700">STORAGE</text>'
      + '<text x="320" y="272" font-size="15">disk, flash drive</text>'
      + '<text x="320" y="170" font-size="14">saved, and read back</text>'
      + '</g></svg>',
  },

  worked: [
    {
      level: 3,
      ask: 'Place these: printer, mouse, hard disk.',
      steps: [
        'A printer sends work out to a person.',
        'A mouse sends your movement in.',
        'A hard disk keeps work for later.',
      ],
      answer: 'Printer: output. Mouse: input. Hard disk: storage.',
    },
    {
      level: 4,
      ask: 'Which part of the system is a touch screen?',
      steps: [
        'Ask which way information moves.',
        'Your finger goes in, so it is input.',
        'The picture comes out, so it is output.',
      ],
      answer: 'Both. It is an input device and an output device at once.',
    },
    {
      level: 5,
      ask: 'The power went off and an hour of typing was lost, '
        + 'although the computer was working the whole time. Explain why.',
      steps: [
        'Typed work sits in main memory while it is being worked on.',
        'Main memory needs power to hold anything.',
        'Saving copies the work from memory into storage.',
        'Storage keeps it without power.',
      ],
      answer: 'The work was still in main memory, which empties when the '
        + 'power goes. '
        + 'It had never been saved into storage, which keeps work without '
        + 'power.',
    },
  ],

  traps: [
    {
      mistake: 'Sorting devices by shape instead of by job.',
      why: 'A screen and a scanner look alike in a diagram. '
        + 'Ask which way the information moves.',
    },
    {
      mistake: 'Calling main memory the same thing as storage.',
      why: 'Memory empties without power; storage does not. '
        + 'That difference is why unsaved work is lost.',
    },
    {
      mistake: 'Thinking only the box on the desk is the computer.',
      why: 'A phone has all four parts, '
        + 'so it is a computer system by the same definition.',
    },
  ],

  extension:
    'The four parts explain a network too. '
    + 'When you open a web page, '
    + 'the input and output are on your device '
    + 'and much of the processing and storage is on a machine elsewhere. '
    + 'The jobs did not change. Only their places did.',

  questions: [
    {
      id: 'cmp-1',
      ask: 'A microphone is which part of a computer system?',
      kind: 'choice',
      options: ['Input', 'Output', 'Storage'],
      answer: 'Input',
      teach: 'It takes sound into the machine, '
        + 'so information is moving in.',
      level: 3,
    },
    {
      id: 'cmp-2',
      ask: 'What is the difference between main memory and storage?',
      kind: 'choice',
      options: [
        'Memory empties when the power goes; storage does not',
        'Memory is bigger than storage',
        'They are two names for the same thing',
      ],
      answer: 'Memory empties when the power goes; storage does not',
      teach: 'This is why unsaved work is lost in a power cut. '
        + 'It never reached storage.',
      level: 4,
    },
    {
      id: 'cmp-3',
      ask: 'Why is a touch screen hard to place in one group?',
      kind: 'choice',
      options: [
        'It takes information in and sends information out',
        'It has no processor',
        'It is software, not hardware',
      ],
      answer: 'It takes information in and sends information out',
      teach: 'The groups are jobs, not shapes, '
        + 'and one device can do two jobs.',
      level: 5,
    },
  ],
})

/* ── system and application software ─────────────────────────────────────── */

teach({
  topicId: 'software-types',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'System software runs the machine. '
      + 'The operating system is the main one. '
      + 'Application software does a job for you: '
      + 'writing, drawing, browsing, calculating. '
      + 'Applications ask the operating system for everything they need.',
    method: [
      'Ask who the software is working for.',
      'For the machine: system software.',
      'For you: an application.',
    ],
  },

  idea:
    'Software is instructions, and it comes in two kinds. '
    + 'System software runs the computer itself. '
    + 'The operating system is the chief example: '
    + 'it starts the machine, manages memory and storage, '
    + 'handles the keyboard and screen, '
    + 'and decides which program runs when. '
    + 'Utilities such as antivirus and backup tools are system software too. '
    + 'Application software does a particular job for the user: '
    + 'a word processor, a spreadsheet, a browser, a music player, a game. '
    + 'You choose your applications. '
    + 'You cannot work without an operating system.',

  mechanism:
    'The reason the split exists is that nobody could write an application '
    + 'otherwise. '
    + 'Think about saving a file. '
    + 'If every application had to speak to the disk itself, '
    + 'each one would need to know every make of disk in the world, '
    + 'and a new kind of disk would break every program at once. '
    + 'So applications do not touch the hardware. '
    + 'They ask the operating system, '
    + 'and the operating system knows the hardware. '
    + 'That is the whole arrangement, and three facts follow from it. '
    + 'First, the operating system must start before anything else, '
    + 'because without it no application can reach the disk or the screen. '
    + 'Second, an application written for one operating system will not run '
    + 'on another, '
    + 'because it is asking in a language that system does not speak. '
    + 'Third, when the operating system is damaged, everything fails at '
    + 'once, '
    + 'while a broken application only loses you that one job.',

  recap:
    'You know the difference between hardware, which you can touch, '
    + 'and software, which you cannot. '
    + 'This divides the software itself into two kinds.',

  method: [
    'Ask who the software serves: the machine, or you.',
    'If it runs the machine, it is system software.',
    'If it does a job you chose, it is an application.',
    'Name the operating system as the chief system software.',
    'Remember that applications reach the hardware through it, never '
      + 'directly.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Sort these: a word processor, an operating system, a browser.',
      steps: [
        'Ask who each one serves.',
        'A word processor and a browser do jobs you chose.',
        'An operating system runs the machine.',
      ],
      answer: 'Applications: the word processor and the browser. '
        + 'System software: the operating system.',
    },
    {
      level: 4,
      ask: 'Why must the operating system start before any application?',
      steps: [
        'An application needs the screen, the keyboard and the disk.',
        'It cannot reach any of them itself.',
        'It asks the operating system for all of them.',
      ],
      answer: 'Because applications reach the hardware only through the '
        + 'operating system, so nothing can run until it is loaded.',
    },
    {
      level: 5,
      ask: 'Why will a program bought for one operating system usually not '
        + 'run on another?',
      steps: [
        'A program does not touch the hardware; it asks the system.',
        'Each operating system accepts requests in its own form.',
        'A program built to ask one way is not understood by the other.',
      ],
      answer: 'Because the program is written to ask one particular '
        + 'operating system for what it needs, '
        + 'and another system does not accept requests in that form.',
    },
  ],

  traps: [
    {
      mistake: 'Calling every program on the machine an application.',
      why: 'An antivirus and a backup tool serve the machine, '
        + 'so they are system software.',
    },
    {
      mistake: 'Naming a brand when the question asks for the kind.',
      why: 'The answer wanted is "an operating system" or "a word '
        + 'processor", not the name of one.',
    },
    {
      mistake: 'Thinking an application speaks to the hardware itself.',
      why: 'It asks the operating system. '
        + 'That is why one application failing does not stop the machine.',
    },
  ],

  extension:
    'A phone works the same way. '
    + 'It has an operating system, and the apps on it are applications. '
    + 'This is why an app must be built separately for each kind of phone.',

  questions: [
    {
      id: 'sof-1',
      ask: 'Which of these is system software?',
      kind: 'choice',
      options: ['An operating system', 'A spreadsheet', 'A game'],
      answer: 'An operating system',
      teach: 'It runs the machine. '
        + 'A spreadsheet and a game do jobs you chose.',
      level: 3,
    },
    {
      id: 'sof-2',
      ask: 'How does an application save a file to the disk?',
      kind: 'choice',
      options: [
        'It asks the operating system to do it',
        'It writes to the disk directly',
        'It copies the file to memory instead',
      ],
      answer: 'It asks the operating system to do it',
      teach: 'Applications never touch hardware. '
        + 'That is why a new kind of disk does not break every program.',
      level: 4,
    },
    {
      id: 'sof-3',
      ask: 'Why does damage to the operating system stop everything?',
      kind: 'choice',
      options: [
        'Every application depends on it to reach the hardware',
        'It holds all the files',
        'It is the largest program',
      ],
      answer: 'Every application depends on it to reach the hardware',
      teach: 'A broken application loses you one job. '
        + 'A broken operating system loses you all of them.',
      level: 5,
    },
  ],
})

/* ── managing files ──────────────────────────────────────────────────────── */

teach({
  topicId: 'file-management',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A file is one saved piece of work. '
      + 'A folder holds files and other folders, making a tree. '
      + 'A deleted file usually goes to a bin first and can be restored '
      + 'from there. '
      + 'Once the bin is emptied, it is gone.',
    method: [
      'Decide the folder before you save, not after.',
      'Name the file so you can find it in a year.',
      'Check the bin before you panic about something deleted.',
    ],
  },

  idea:
    'A file is one saved piece of work, with a name and an extension that '
    + 'says what kind it is. '
    + 'A folder, also called a directory, holds files and other folders, '
    + 'so the whole store is a tree. '
    + 'The path is the route down that tree to one file. '
    + 'You can copy a file, which leaves the original where it was, '
    + 'or move it, which does not. '
    + 'Renaming changes the name only. '
    + 'Deleting usually puts the file in a bin, '
    + 'from which it can be restored, '
    + 'until the bin is emptied.',

  mechanism:
    'Files get lost for one reason: '
    + 'they were saved wherever the computer suggested '
    + 'instead of wherever they belonged. '
    + 'The machine offers a default folder, you press save, '
    + 'and three months later a hundred files sit in one place with names '
    + 'like document1. '
    + 'Nothing is corrupt. The work is simply unfindable, '
    + 'which costs exactly as much. '
    + 'So the habit worth building is to decide the folder before saving, '
    + 'and to name the file for the person who will look for it, '
    + 'which is you in a year. '
    + 'A date in the name sorts itself in order, '
    + 'and a name that says what the thing is beats a name that says when '
    + 'you made it. '
    + 'It is also worth understanding what deleting does, '
    + 'because learners treat it as final and it usually is not. '
    + 'The file is moved to a bin and the space is marked as reusable. '
    + 'While it sits in the bin you can restore it. '
    + 'Once the bin is emptied, the computer is free to write other things '
    + 'over that space, '
    + 'and nothing you do from the keyboard will bring it back.',

  recap:
    'You have saved and opened work on a computer or a phone. '
    + 'This explains the tree the work sits in, '
    + 'so you can put something where you will find it again.',

  method: [
    'Make a folder for each subject or each project.',
    'Decide which folder before you press save.',
    'Name the file by what it is, not by when you made it.',
    'Keep the extension. It tells the machine which program to use.',
    'Use copy when you want the original left in place; move when you do '
      + 'not.',
    'If something is missing, look in the bin before anything else.',
    'Empty the bin only when you are sure.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the difference between copying and moving a file?',
      steps: [
        'Ask what happens to the original.',
        'Copying leaves it. Moving does not.',
      ],
      answer: 'Copying makes a second one and leaves the original. '
        + 'Moving takes the only one to the new place.',
    },
    {
      level: 4,
      ask: 'You deleted an assignment yesterday and need it back. '
        + 'What do you do?',
      steps: [
        'Deleting usually moves a file to the bin.',
        'Open the bin and look for it.',
        'Restore it if it is there.',
      ],
      answer: 'Open the recycle bin or trash and restore it. '
        + 'It will be there unless the bin has been emptied.',
    },
    {
      level: 5,
      ask: 'Two learners both have four hundred files. '
        + 'One finds any file in seconds and the other cannot. '
        + 'Neither computer is faster. Explain.',
      steps: [
        'Finding a file depends on where it is and what it is called.',
        'One saved everything into the folder the computer suggested.',
        'The other made a folder per subject and named files by content.',
        'The files are equally safe. Only one set is findable.',
      ],
      answer: 'One decided the folder and the name before saving, '
        + 'so the files are in a tree she understands. '
        + 'The other accepted the default folder and the default name, '
        + 'so the files exist but cannot be found.',
    },
  ],

  traps: [
    {
      mistake: 'Removing the extension when renaming a file.',
      why: 'The extension tells the machine what kind of file it is. '
        + 'Without it the file may not open.',
    },
    {
      mistake: 'Saving everything in one place because it is quicker.',
      why: 'It is quicker once and slower every time after. '
        + 'A folder per subject costs seconds to make.',
    },
    {
      mistake: 'Thinking a deleted file is immediately gone.',
      why: 'It is usually in the bin. '
        + 'It is only unrecoverable after the bin is emptied.',
    },
  ],

  extension:
    'A backup is a copy kept somewhere else, '
    + 'and a copy in the same folder is not a backup. '
    + 'If the disk fails, both go together. '
    + 'The copy has to be on another disk or another machine to count.',

  questions: [
    {
      id: 'fil-1',
      ask: 'What does a folder hold?',
      kind: 'choice',
      options: [
        'Files and other folders',
        'Only files',
        'Only one file at a time',
      ],
      answer: 'Files and other folders',
      teach: 'Folders inside folders make the tree your work sits in.',
      level: 3,
    },
    {
      id: 'fil-2',
      ask: 'Why should you not remove the extension when renaming a file?',
      kind: 'choice',
      options: [
        'It tells the machine what kind of file it is',
        'It makes the file smaller',
        'It is part of the folder name',
      ],
      answer: 'It tells the machine what kind of file it is',
      teach: 'Without the extension the computer may not know which '
        + 'program opens it.',
      level: 4,
    },
    {
      id: 'fil-3',
      ask: 'Which of these counts as a real backup?',
      kind: 'choice',
      options: [
        'A copy on a different disk',
        'A copy in the same folder',
        'A copy with a different name',
      ],
      answer: 'A copy on a different disk',
      teach: 'If the disk fails, everything on it fails together. '
        + 'A backup has to be somewhere else.',
      level: 5,
    },
  ],
})

/* ── word processing ─────────────────────────────────────────────────────── */

teach({
  topicId: 'word-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A word processor lets you write, then change the writing without '
      + 'copying it out again. '
      + 'A style names a kind of text, such as Heading 1, '
      + 'so every heading changes together. '
      + 'Tables hold rows and columns. '
      + 'Page numbers go in the footer, which repeats on every page.',
    method: [
      'Type all the words first, then format.',
      'Use a style for a heading, never bold text by hand.',
      'Put anything that repeats in the header or footer.',
    ],
  },

  idea:
    'A word processor is an application for writing documents. '
    + 'You type, and then you can change what you typed without writing it '
    + 'out again. '
    + 'Formatting changes how text looks: '
    + 'bold, italic, size, alignment, spacing. '
    + 'A style is a named set of formatting, such as Heading 1 or Normal, '
    + 'applied to whole paragraphs. '
    + 'A table arranges information in rows and columns. '
    + 'The header and footer are strips at the top and bottom of every '
    + 'page, '
    + 'which is where page numbers belong. '
    + 'Spell check marks words it does not recognise, '
    + 'and it is not always right.',

  mechanism:
    'There is one idea here worth more than every button, '
    + 'and it is the difference between formatting text and naming it. '
    + 'If you make a heading by selecting it and pressing bold, '
    + 'you have told the computer that those particular words are thick. '
    + 'If you apply the Heading 1 style, '
    + 'you have told it that those words ARE a heading. '
    + 'The second one carries information, and three things come free. '
    + 'Change the style once and every heading in the document changes. '
    + 'The machine can build a table of contents, '
    + 'because it now knows which lines are headings. '
    + 'And a screen reader can announce them to somebody who cannot see the '
    + 'page. '
    + 'None of that is possible with hand bolded text, '
    + 'which looks identical and means nothing. '
    + 'The same idea runs through the rest of the lesson. '
    + 'A page number typed at the bottom of each page is a number. '
    + 'A page number placed in the footer is a page number, '
    + 'so it repeats and renumbers itself when you add a page.',

  recap:
    'You have typed work on a computer or a phone before. '
    + 'This adds the parts that make a long document hold together: '
    + 'styles, tables, headers and footers.',

  method: [
    'Type all the words first. Do not format while writing.',
    'Mark headings with a heading style, not with bold.',
    'Keep body text in one style throughout.',
    'Use a table when information has rows and columns.',
    'Put page numbers in the footer so they repeat and renumber.',
    'Run spell check, then read it yourself for words it cannot catch.',
    'Save before printing, and save under a name you will recognise.',
  ],

  worked: [
    {
      level: 3,
      ask: 'You want your title to stand out. '
        + 'What is the better way, and why?',
      steps: [
        'One way makes the words look thick.',
        'The other tells the document that the words are a heading.',
      ],
      answer: 'Apply a heading style rather than pressing bold, '
        + 'because the style says what the words are, not only how they '
        + 'look.',
    },
    {
      level: 4,
      ask: 'A ten page report needs the page number on every page. '
        + 'How do you do it?',
      steps: [
        'Typing it on each page gives ten separate numbers.',
        'They would not change if you inserted a page.',
        'The footer repeats on every page by itself.',
      ],
      answer: 'Insert a page number in the footer. '
        + 'It then appears on every page and renumbers itself when pages '
        + 'are added.',
    },
    {
      level: 5,
      ask: 'Your teacher asks you to make all headings larger. '
        + 'One learner takes two minutes and another takes half an hour. '
        + 'Explain the difference.',
      steps: [
        'One learner bolded each heading by hand.',
        'So each heading must now be found and changed one at a time.',
        'The other applied a heading style to each.',
        'Changing the style once changes every heading using it.',
      ],
      answer: 'The quick one used a heading style, '
        + 'so changing the style once changed every heading. '
        + 'The slow one formatted each heading by hand, '
        + 'so every one has to be changed separately.',
    },
  ],

  traps: [
    {
      mistake: 'Making headings with bold instead of a style.',
      why: 'It looks the same and carries no meaning, '
        + 'so nothing can be changed or listed automatically later.',
    },
    {
      mistake: 'Pressing enter many times to reach the next page.',
      why: 'Add one line of text above and everything shifts. '
        + 'Use a page break.',
    },
    {
      mistake: 'Trusting spell check.',
      why: 'It checks whether a word exists, not whether you meant it. '
        + '"Their" and "there" both pass.',
    },
    {
      mistake: 'Using the space bar to line up columns.',
      why: 'It only looks lined up in one font. '
        + 'Use a table.',
    },
  ],

  extension:
    'Once headings are real headings, '
    + 'a table of contents can be generated and updated in one action, '
    + 'and the same document can be turned into a web page '
    + 'with its structure intact.',

  questions: [
    {
      id: 'wrd-1',
      ask: 'Where should a page number be placed?',
      kind: 'choice',
      options: ['In the footer', 'At the end of the text', 'In a table'],
      answer: 'In the footer',
      teach: 'The footer repeats on every page, '
        + 'and the number renumbers itself when pages are added.',
      level: 3,
    },
    {
      id: 'wrd-2',
      ask: 'What is a style?',
      kind: 'choice',
      options: [
        'A named set of formatting applied to a paragraph',
        'The font of a document',
        'A kind of table',
      ],
      answer: 'A named set of formatting applied to a paragraph',
      teach: 'Heading 1 and Normal are styles. '
        + 'Change the style once and every paragraph using it changes.',
      level: 4,
    },
    {
      id: 'wrd-3',
      ask: 'Why is spell check not enough?',
      kind: 'choice',
      options: [
        'It checks whether a word exists, not whether you meant it',
        'It only works online',
        'It cannot read headings',
      ],
      answer: 'It checks whether a word exists, not whether you meant it',
      teach: '"Their" and "there" are both real words, '
        + 'so it passes the wrong one without a mark.',
      level: 5,
    },
  ],
})

/* ── internet services ──────────────────────────────────────────────────── */

teach({
  topicId: 'internet-services',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The internet is the network. '
      + 'The web, email and messaging are services on it. '
      + 'A browser asks a distant computer for a page and draws what comes '
      + 'back. '
      + 'A search engine does not search the internet; '
      + 'it searches a list it made earlier.',
    method: [
      'In a search, use the words that would be ON the page you want.',
      'In an email, write the subject so it can be found later.',
      'Check who wrote a page before believing it.',
    ],
  },

  idea:
    'The internet is a network joining computers all over the world. '
    + 'The services that run on it are separate things: '
    + 'the world wide web, email, messaging, video calls, file transfer. '
    + 'A browser is an application that asks another computer, '
    + 'called a server, for a page, '
    + 'and then draws the page that comes back. '
    + 'The address bar holds the address of the page. '
    + 'An email needs an address with an at sign, a subject, and a message. '
    + 'A search engine is itself a service: '
    + 'it visits pages in advance, keeps a list of what is on them, '
    + 'and searches that list when you ask.',

  mechanism:
    'Two confusions cause most of the trouble, and both are worth clearing. '
    + 'The first is thinking the internet and the web are the same. '
    + 'The internet is the road. '
    + 'The web is one kind of traffic on it, '
    + 'and email, messaging and video calls are others. '
    + 'This is why email still works when a website is down. '
    + 'The second is thinking a search engine looks through the internet '
    + 'when you press search. '
    + 'It does not. '
    + 'It read those pages days or weeks ago and wrote down what was on '
    + 'them, '
    + 'and your search looks through that writing. '
    + 'Two useful things follow. '
    + 'A page put up this morning may not be found yet. '
    + 'And your search works best when you type words that would actually '
    + 'appear on the page you want, '
    + 'rather than a question. '
    + '"Capital of Burkina Faso" finds the page. '
    + '"Please can you tell me what the capital of Burkina Faso is" asks a '
    + 'machine that cannot be asked. '
    + 'One more thing matters more than either. '
    + 'Anybody can put up a page. '
    + 'Nothing checks it on the way. '
    + 'So before you use what you read, look at who wrote it, '
    + 'when they wrote it, '
    + 'and whether anybody else says the same.',

  recap:
    'You have used a phone to browse or message. '
    + 'This explains what is actually happening, '
    + 'and separates the network from the services running on it.',

  method: [
    'For a search, pick the words that would be on the page you want.',
    'Put a phrase in quotation marks to keep the words together.',
    'Open more than one result and compare them.',
    'Check the author and the date before you use anything.',
    'For an email, fill the subject line with what it is about.',
    'Reply to all only when everybody needs the reply.',
    'Never put a password into a page you reached from a link in a '
      + 'message.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which service would you use to send a long message with a file '
        + 'attached to a teacher?',
      steps: [
        'Messaging is for short exchanges.',
        'A browser requests pages.',
        'Email carries a subject, a long message and attachments.',
      ],
      answer: 'Email.',
    },
    {
      level: 4,
      ask: 'Improve this search: '
        + '"please tell me the causes of the first world war".',
      steps: [
        'A search engine matches words on pages, not questions.',
        'Remove the words that would not appear on the page.',
        'Keep the words that would.',
      ],
      answer: '"causes of the first world war". '
        + 'Those are the words the page itself would use.',
    },
    {
      level: 5,
      ask: 'Two pages give different dates for the same event. '
        + 'How do you decide which to use?',
      steps: [
        'Nothing checks a page before it goes up.',
        'Look at who wrote each one and what they are.',
        'Look at when each was written.',
        'Look for a third source that agrees with one of them.',
      ],
      answer: 'Check who wrote each page and when, '
        + 'prefer the one from a body that would know, '
        + 'and look for a third source that agrees.',
    },
  ],

  traps: [
    {
      mistake: 'Using "the internet" and "the web" as the same word.',
      why: 'The internet is the network. '
        + 'The web is one service on it, alongside email and messaging.',
    },
    {
      mistake: 'Typing a whole question into a search engine.',
      why: 'It matches words that appear on pages. '
        + 'Type the words the page would use.',
    },
    {
      mistake: 'Believing a page because it came up first.',
      why: 'Order is not truth. '
        + 'Check the author and the date.',
    },
    {
      mistake: 'Entering a password on a page reached from a link in a '
        + 'message.',
      why: 'That is how accounts are stolen. '
        + 'Type the address yourself instead.',
    },
  ],

  extension:
    'A web address beginning with https means the traffic between you and '
    + 'the server is scrambled on the way, '
    + 'so somebody watching the network cannot read it. '
    + 'It says nothing about whether the page is honest.',

  questions: [
    {
      id: 'net-1',
      ask: 'What does a browser do?',
      kind: 'choice',
      options: [
        'Asks a server for a page and draws what comes back',
        'Stores all the pages on your computer',
        'Searches the whole internet each time',
      ],
      answer: 'Asks a server for a page and draws what comes back',
      teach: 'The page lives on another computer. '
        + 'The browser requests it and displays it.',
      level: 3,
    },
    {
      id: 'net-2',
      ask: 'When you press search, what is actually searched?',
      kind: 'choice',
      options: [
        'A list the search engine made earlier',
        'Every page on the internet, right then',
        'Your own computer',
      ],
      answer: 'A list the search engine made earlier',
      teach: 'It visited those pages in advance. '
        + 'That is why a page put up this morning may not be found yet.',
      level: 4,
    },
    {
      id: 'net-3',
      ask: 'Why should you check who wrote a web page?',
      kind: 'choice',
      options: [
        'Anybody can publish, and nothing checks a page on the way',
        'Pages are always out of date',
        'Browsers change the words',
      ],
      answer: 'Anybody can publish, and nothing checks a page on the way',
      teach: 'Look at the author, the date, '
        + 'and whether a second source agrees.',
      level: 5,
    },
  ],
})
