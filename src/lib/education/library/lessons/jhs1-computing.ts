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

  why:
    'You are typing an assignment on a laptop at home. '
    + 'The lights go off before you have saved it. '
    + 'When the power comes back, the work is gone. '
    + 'Your friend says the computer forgot it. '
    + 'But the photographs on the same laptop did not go anywhere, '
    + 'and neither did the programs. '
    + 'So why was the typing lost and not the photographs, '
    + 'when all three were on the same machine? '
    + 'There is a precise answer, '
    + 'and this topic is where it comes from.',

  notation:
    'The parts are usually named by their initials. '
    + 'CPU is said "see pee you" '
    + 'and stands for central processing unit. '
    + 'RAM is said as one word, "ram", '
    + 'and stands for random access memory. '
    + 'That is the memory that empties when the power goes. '
    + 'ROM is read only memory, which does not empty. '
    + 'Sizes are given in bytes: '
    + 'KB for kilobyte, MB for megabyte, GB for gigabyte, '
    + 'each about a thousand times the one before. '
    + 'The commonest way to lose a mark '
    + 'is to write memory where storage is meant. '
    + 'In an examination they are two different things, '
    + 'even though people use both words loosely in ordinary speech.',

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
    'A keyboard is the board of lettered keys you press to type. '
    + 'A screen is the flat glass panel that shows you what came out. '
    + 'Press the letter K on a keyboard and a K appears on the screen. '
    + 'Those are two different jobs, '
    + 'and that one example contains the whole idea of this lesson. '
    + 'The keyboard put something in. '
    + 'The screen gave something back out. '
    + 'Nothing in their shape tells you that. '
    + 'This lesson sorts every part of a computer '
    + 'by the job it does rather than by what it looks like.',

  method: [
    'Name the four jobs: input, processing, storage, output.',
    'For any device, ask which way the information moves.',
    'Into the machine: input. Out to a person: output.',
    'Kept for later: storage. Changed on the way: processing.',
    'Say whether the thing is hardware or software.',
    'Memory empties without power. Storage does not.',
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

  why:
    'You buy a new phone. '
    + 'It has a screen, a battery and storage, '
    + 'all of them better than your old one. '
    + 'Switch it on with nothing installed '
    + 'and it cannot take a photo, send a message or play a song. '
    + 'Every part works. '
    + 'Nothing happens. '
    + 'What is missing?',

  idea:
    'Software is instructions, and it comes in two kinds. '
    + 'System software runs the computer itself. '
    + 'The operating system is the chief example. '
    + 'It starts the machine. '
    + 'It manages memory and storage. '
    + 'It handles the keyboard and the screen. '
    + 'And it decides which program runs when. '
    + 'Application software does a particular job for the user. '
    + 'It reaches the machine only by asking the operating system.',

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
    'A computer has two sides to it. '
    + 'Hardware is the parts you can touch: '
    + 'the screen, the keyboard, the box. '
    + 'Software is the instructions inside, '
    + 'which you cannot touch at all. '
    + 'Hardware with no software does nothing, '
    + 'like a radio with no station. '
    + 'Software with no hardware has nothing to run on. '
    + 'This lesson splits the software side itself into two kinds.',

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

  figure: {
    alt: 'Three boxes along the top, a word processor, a browser and a '
      + 'game, each with an arrow running down into one green box beneath '
      + 'them, the operating system, which is the one that knows the '
      + 'hardware. A single arrow runs from there down to a third box, the '
      + 'hardware: disk, screen and keyboard. A red line down the side, '
      + 'crossed out, shows that an application never reaches the hardware '
      + 'directly.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">an application never touches the hardware itself</text>'
      + '<path d="M 120 58 H 240 V 112 H 120 Z"/>'
      + '<text x="180" y="82" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">word</text>'
      + '<text x="180" y="100" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">processor</text>'
      + '<path d="M 260 58 H 380 V 112 H 260 Z"/>'
      + '<text x="320" y="91" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">browser</text>'
      + '<path d="M 400 58 H 520 V 112 H 400 Z"/>'
      + '<text x="460" y="91" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">a game</text>'
      + '<text x="60" y="91" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">you chose</text>'
      + '<text x="60" y="109" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">these</text>'
      + '<path d="M 180 112 V 144" stroke-width="2"/>'
      + '<path d="M 180 154 L 172 136 L 188 136 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 320 112 V 144" stroke-width="2"/>'
      + '<path d="M 320 154 L 312 136 L 328 136 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 460 112 V 144" stroke-width="2"/>'
      + '<path d="M 460 154 L 452 136 L 468 136 Z" fill="currentColor" stroke="none"/>'
      + '<text x="240" y="138" font-size="13" text-anchor="end" fill="currentColor" stroke="none">they ask</text>'
      + '<path d="M 120 158 H 520 V 222 H 120 Z" stroke="#0f8a4d"/>'
      + '<text x="320" y="186" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">the operating system</text>'
      + '<text x="320" y="210" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">it is the one that knows the hardware</text>'
      + '<path d="M 320 222 V 254" stroke-width="2"/>'
      + '<path d="M 320 264 L 312 246 L 328 246 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 120 268 H 520 V 326 H 120 Z"/>'
      + '<text x="320" y="302" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the hardware: disk, screen, keyboard</text>'
      + '<path d="M 540 84 V 296 H 532" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 528 288 L 546 292 L 534 303 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 528 178 L 552 202" stroke="#c8433a"/>'
      + '<path d="M 552 178 L 528 202" stroke="#c8433a"/>'
      + '<text x="562" y="184" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">never</text>'
      + '<text x="562" y="202" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">directly</text>'
      + '<text x="320" y="366" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so a program runs only on the system it asked in</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The two kinds of software, told apart by who they serve',
      columns: ['Question to ask', 'System software', 'Application software'],
      rows: [
        ['Who it serves', 'The machine', 'You'],
        [
          'Examples',
          'The operating system, antivirus, backup tools',
          'Word processor, spreadsheet, browser, game',
        ],
        [
          'Do you choose it?',
          'No, the machine must have one',
          'Yes, you install what you want',
        ],
        [
          'When it starts',
          'First, before anything else can run',
          'Later, and only when you open it',
        ],
        ['If it fails', 'Everything stops at once', 'You lose that one job'],
      ],
      note: 'The last row is the reason for all the others: everything goes '
        + 'through the operating system, so everything depends on it.',
    },
  ],
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
    + 'There are only a few things you can do to a file, '
    + 'and just one of them cannot be undone.',

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

  figure: {
    alt: 'A folder tree drawn as an indented list. Documents holds JHS 1 '
      + 'and Photos, JHS 1 holds Science and Social, and Science holds one '
      + 'file in green called water cycle notes, with its extension '
      + 'labelled as the part that says which program opens it. '
      + 'Underneath, the route down the tree to that file is written out '
      + 'as the path.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">the store is a tree, and a path is a route down it</text>'
      + '<text x="40" y="82" font-size="16" text-anchor="start" fill="currentColor" stroke="none">Documents</text>'
      + '<path d="M 48 92 V 282" stroke-width="2"/>'
      + '<path d="M 48 116 H 76" stroke-width="2"/>'
      + '<text x="82" y="122" font-size="16" text-anchor="start" fill="currentColor" stroke="none">JHS 1</text>'
      + '<path d="M 90 132 V 242" stroke-width="2"/>'
      + '<path d="M 90 156 H 118" stroke-width="2"/>'
      + '<text x="124" y="162" font-size="16" text-anchor="start" fill="currentColor" stroke="none">Science</text>'
      + '<path d="M 132 172 V 196" stroke-width="2"/>'
      + '<path d="M 132 196 H 160" stroke-width="2"/>'
      + '<text x="166" y="202" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">water-cycle-notes.docx</text>'
      + '<path d="M 90 236 H 118" stroke-width="2"/>'
      + '<text x="124" y="242" font-size="16" text-anchor="start" fill="currentColor" stroke="none">Social</text>'
      + '<path d="M 48 276 H 76" stroke-width="2"/>'
      + '<text x="82" y="282" font-size="16" text-anchor="start" fill="currentColor" stroke="none">Photos</text>'
      + '<path d="M 400 198 H 428" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="434" y="192" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">the extension says</text>'
      + '<text x="434" y="210" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">which program opens it</text>'
      + '<text x="320" y="320" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the path to that one file is</text>'
      + '<text x="320" y="348" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">Documents / JHS 1 / Science / water-cycle-notes.docx</text>'
      + '<text x="320" y="382" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so decide the folder before you press save, not after</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each thing you can do to a file actually does',
      columns: [
        'What you do',
        'What happens to the original',
        'What you are left with',
      ],
      rows: [
        ['Copy', 'It stays where it was', 'Two files, in two places'],
        ['Move', 'It leaves that place', 'One file, in the new place'],
        [
          'Rename',
          'It stays, under a new name',
          'One file, in the same place',
        ],
        ['Delete', 'It goes to the bin', 'One file in the bin, restorable'],
        [
          'Empty the bin',
          'The space is free to be written over',
          'Nothing the keyboard can bring back',
        ],
      ],
      note: 'Only the last row is final, which is why the bin is the first '
        + 'place to look for something missing and the last thing to '
        + 'empty.',
    },
  ],
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
    + 'That alone is the gain over a pen, '
    + 'and the rest of the application exists to hold a long document '
    + 'together.',

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

  figure: {
    alt: 'The same page drawn twice. On the left, in red, the heading was '
      + 'made by selecting it and pressing bold, and the machine sees only '
      + 'thick words. On the right, in green, the Heading 1 style was '
      + 'applied, and the machine sees a heading, so every heading can '
      + 'change at once, a table of contents can be built, and a screen '
      + 'reader can announce it. The two pages look identical.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">bold makes words thick; a style says what they are</text>'
      + '<path d="M 30 50 H 290 V 208 H 30 Z" stroke="#c8433a"/>'
      + '<text x="160" y="88" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor" stroke="none">My Report</text>'
      + '<path d="M 52 116 H 268" stroke-width="2"/>'
      + '<path d="M 52 138 H 268" stroke-width="2"/>'
      + '<path d="M 52 160 H 214" stroke-width="2"/>'
      + '<text x="160" y="194" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">you selected it and pressed bold</text>'
      + '<path d="M 350 50 H 610 V 208 H 350 Z" stroke="#0f8a4d"/>'
      + '<text x="480" y="88" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor" stroke="none">My Report</text>'
      + '<path d="M 372 116 H 588" stroke-width="2"/>'
      + '<path d="M 372 138 H 588" stroke-width="2"/>'
      + '<path d="M 372 160 H 534" stroke-width="2"/>'
      + '<text x="480" y="194" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">you applied the Heading 1 style</text>'
      + '<text x="160" y="240" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the machine sees</text>'
      + '<text x="160" y="262" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">thick words, and nothing more</text>'
      + '<text x="480" y="240" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the machine sees</text>'
      + '<text x="480" y="262" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">a heading, so</text>'
      + '<text x="480" y="284" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">every heading changes at once,</text>'
      + '<text x="480" y="302" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">a table of contents can be built,</text>'
      + '<text x="480" y="320" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">and a screen reader can announce it</text>'
      + '<text x="320" y="356" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the two pages look identical,</text>'
      + '<text x="320" y="380" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and only one of them means anything</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The parts of a word processor, and what each one is for',
      columns: ['Part', 'What it is', 'What it is for'],
      rows: [
        [
          'Formatting',
          'Bold, italic, size, alignment, spacing',
          'Changing how one piece of text looks',
        ],
        [
          'A style',
          'A named set of formatting, such as Heading 1',
          'Saying what a paragraph is, so all of them change together',
        ],
        [
          'A table',
          'Rows and columns',
          'Information that has two directions to it',
        ],
        [
          'Header and footer',
          'Strips at the top and bottom of every page',
          'Anything that repeats, such as page numbers',
        ],
        [
          'Spell check',
          'A list of the words the machine knows',
          'Catching typing errors, and it is not always right',
        ],
      ],
      note: 'The second row is the one that matters most. A style names '
        + 'what something is; everything else only changes how it looks.',
    },
  ],
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
    + 'The services that run on it are separate things, '
    + 'and each one does a different job. '
    + 'A browser is an application that asks another computer, '
    + 'called a server, for a page, '
    + 'and then draws the page that comes back. '
    + 'The address bar holds the address of the page. '
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

  figure: {
    alt: 'The internet drawn as a road, with five boxes travelling along '
      + 'it: the world wide web in green, email, messaging, video calls '
      + 'and file transfer. The road itself is labelled as the network, '
      + 'and the web is marked as the one service people usually mean when '
      + 'they say the internet.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the internet is the road, the services are the traffic</text>'
      + '<path d="M 16 128 H 624"/>'
      + '<path d="M 16 272 H 624"/>'
      + '<path d="M 26 172 H 130 V 228 H 26 Z" stroke="#0f8a4d"/>'
      + '<text x="78" y="196" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">the world</text>'
      + '<text x="78" y="214" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">wide web</text>'
      + '<path d="M 148 172 H 252 V 228 H 148 Z"/>'
      + '<text x="200" y="205" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">email</text>'
      + '<path d="M 270 172 H 374 V 228 H 270 Z"/>'
      + '<text x="322" y="205" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">messaging</text>'
      + '<path d="M 392 172 H 496 V 228 H 392 Z"/>'
      + '<text x="444" y="196" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">video</text>'
      + '<text x="444" y="214" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">calls</text>'
      + '<path d="M 514 172 H 618 V 228 H 514 Z"/>'
      + '<text x="566" y="196" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">file</text>'
      + '<text x="566" y="214" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">transfer</text>'
      + '<text x="320" y="152" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the internet: the network itself</text>'
      + '<text x="320" y="258" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">each service is a separate thing running on it</text>'
      + '<text x="78" y="306" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">people mean this</text>'
      + '<text x="78" y="324" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">when they say</text>'
      + '<text x="78" y="342" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the internet</text>'
      + '<text x="360" y="316" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">which is why email still works</text>'
      + '<text x="360" y="340" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">when a website is down</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The services that run on the internet, and what each one '
        + 'needs',
      columns: ['Service', 'What it does', 'What it needs'],
      rows: [
        [
          'The world wide web',
          'Shows pages you ask a server for',
          'A browser, and the address of the page',
        ],
        [
          'Email',
          'Carries a message that waits until it is read',
          'An address with an at sign, and a subject',
        ],
        [
          'Messaging',
          'Short messages, back and forth, now',
          'An app, and the other person reachable',
        ],
        [
          'Video calls',
          'Sound and picture both ways, live',
          'A camera, and enough data',
        ],
        [
          'File transfer',
          'Moves a whole file to another machine',
          'Somewhere at the other end to put it',
        ],
      ],
      note: 'All five run on the same network, which is why one of them can '
        + 'be down while the others are working.',
    },
  ],
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
