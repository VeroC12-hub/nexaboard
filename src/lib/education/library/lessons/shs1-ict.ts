/**
 * Stored lessons for SHS 1 Elective ICT.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── The four topics and what holds them together ──────────────────────────
 *
 * Architecture says what the machine is: a processor, memory and buses, and
 * a cycle that fetches an instruction and carries it out. Number systems
 * say what the machine holds: everything as patterns of two states, which
 * is why binary and hexadecimal are learned at all. Software says what sits
 * between the learner and that machine, and what the operating system is
 * actually doing while nothing appears to happen. Advanced word processing
 * is the one practical topic, and it is included here at full weight
 * because the examination tests it and because the features it teaches,
 * styles and automatic references, are the ones that save a learner real
 * work in every later year.
 *
 * ── What changes at SHS ───────────────────────────────────────────────────
 *
 * At JHS the question is what a part is called. At SHS it is what the part
 * does and why the design is that way: why the cache exists, why a program
 * must be copied into RAM before it runs, why hexadecimal is used when the
 * machine itself knows only binary. Each lesson gives the reason, because
 * at this level the reason carries the marks.
 *
 * ── Equipment ─────────────────────────────────────────────────────────────
 *
 * Only the word processing topic needs a working computer, and it says so.
 * Everything examinable in the other three is paper work: conversions,
 * labelled diagrams, and explanations. Where a school has one shared
 * machine the word processing lesson names the order to practise the
 * features in, so that limited time at a keyboard is spent on what is
 * tested.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── computer architecture ──────────────────────────────────────────────── */

teach({
  topicId: 'architecture-ict',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The CPU has three parts: '
      + 'a control unit that directs, '
      + 'an arithmetic and logic unit that computes, '
      + 'and registers that hold what is in use. '
      + 'RAM holds the program and data while the machine runs '
      + 'and loses them when power goes. '
      + 'Buses carry data, addresses and control signals. '
      + 'A program runs by repeating fetch, decode, execute.',
    method: [
      'Name the component, then say what it does.',
      'For memory, state whether it is volatile and how fast it is.',
      'For a bus, say what it carries and in which direction.',
      'For execution, give the cycle in order: fetch, decode, execute.',
      'Explain a design feature by the problem it solves.',
    ],
  },

  idea:
    'A computer has a processor, memory, buses, '
    + 'and input and output devices. '
    + 'The central processing unit has three main parts. '
    + 'The control unit fetches each instruction '
    + 'and directs the other parts to carry it out. '
    + 'The arithmetic and logic unit performs calculations '
    + 'and logical comparisons. '
    + 'Registers are very small, very fast stores inside the CPU '
    + 'holding the data currently in use, '
    + 'including the program counter, '
    + 'which holds the address of the next instruction, '
    + 'and the accumulator, which holds a result. '
    + 'Memory comes in a hierarchy. '
    + 'Registers are fastest and smallest. '
    + 'Cache is a small fast memory inside or beside the CPU. '
    + 'Main memory, or RAM, holds the running program and its data, '
    + 'and it is volatile, meaning its contents are lost '
    + 'when the power is removed. '
    + 'ROM is non-volatile and holds the startup instructions. '
    + 'Secondary storage, such as a hard disk or a flash drive, '
    + 'is non-volatile, much larger and much slower. '
    + 'Three buses connect the parts. '
    + 'The data bus carries data both ways. '
    + 'The address bus carries addresses, '
    + 'one way only, from the CPU. '
    + 'The control bus carries control signals. '
    + 'A program is executed by the machine cycle, '
    + 'repeated for every instruction: '
    + 'fetch the instruction from memory, '
    + 'decode it, '
    + 'then execute it. '
    + 'Clock speed, measured in gigahertz, '
    + 'is how many cycles the CPU can perform each second.',

  mechanism:
    'The question this topic really answers '
    + 'is why there are so many kinds of memory '
    + 'instead of one. '
    + 'Answer it and most of the examination follows. '
    + 'Fast memory is expensive and small. '
    + 'Large memory is cheap and slow. '
    + 'No single technology is both fast and large at a price '
    + 'anybody would pay. '
    + 'So a computer uses several, '
    + 'arranged so that the data in use sits in the fast store '
    + 'and everything else waits in the slow one. '
    + 'Registers hold the few values being worked on right now. '
    + 'Cache holds what has just been used, '
    + 'on the reasonable guess that it will be wanted again soon. '
    + 'RAM holds the whole running program. '
    + 'The disk holds everything, '
    + 'including the programs that are not running. '
    + 'Each level is bigger and slower than the one above it. '
    + 'That single sentence explains the hierarchy, '
    + 'the existence of cache, '
    + 'and why a computer feels slow when RAM runs short: '
    + 'the operating system is forced to use the disk as though it were '
    + 'memory, '
    + 'and the disk is thousands of times slower. '
    + 'From the same idea comes the answer to another standard question. '
    + 'Why must a program be copied from the disk into RAM before it '
    + 'runs? '
    + 'Because the CPU can only fetch instructions from main memory, '
    + 'and because fetching each instruction from a disk '
    + 'would make the machine unusably slow. '
    + 'So loading is a copy from slow storage to fast storage, '
    + 'and that is also why a long program takes a moment to open '
    + 'and then runs smoothly. '
    + 'Here is where marks are lost. '
    + 'The first is confusing RAM with storage. '
    + 'They are different in kind, not in size. '
    + 'RAM is volatile working memory '
    + 'that the CPU can address directly. '
    + 'A hard disk is non-volatile storage '
    + 'that the CPU cannot execute from. '
    + 'Saying that a computer has 500 gigabytes of memory '
    + 'when the disk is meant '
    + 'is marked wrong, '
    + 'and the word the answer needs is storage. '
    + 'The second is the machine cycle, '
    + 'which must be given in order and in full. '
    + 'Fetch: the control unit reads the address in the program counter, '
    + 'sends it on the address bus, '
    + 'and the instruction comes back on the data bus. '
    + 'Decode: the control unit works out which operation is wanted. '
    + 'Execute: the arithmetic and logic unit or another part '
    + 'carries it out, '
    + 'and the program counter moves on. '
    + 'Three stages, each with a named part doing it, '
    + 'and answers that give the three words alone '
    + 'lose the marks for the detail. '
    + 'The third is the address bus direction. '
    + 'The data bus is bidirectional, '
    + 'because data must travel both into and out of the CPU. '
    + 'The address bus is unidirectional, '
    + 'because only the CPU issues addresses; '
    + 'memory never sends one back. '
    + 'That asymmetry is examined '
    + 'and it is easy to state once the reason is seen. '
    + 'The fourth is clock speed as a measure of performance. '
    + 'A higher clock speed means more cycles per second, '
    + 'and it does not by itself mean a faster computer, '
    + 'because the amount of work done per cycle '
    + 'and the number of processing cores also matter. '
    + 'An answer that treats gigahertz as the whole story '
    + 'has missed the point of a comparison question. '
    + 'What has to be written down is the component, '
    + 'its function, '
    + 'and where it sits relative to the others. '
    + 'Nothing in this topic needs a working machine. '
    + 'A labelled block diagram with the three buses drawn '
    + 'and arrows showing direction '
    + 'is the whole of the practical requirement, '
    + 'and arrows are marked.',

  recap:
    'You know a computer has a processor, memory and a hard disk. '
    + 'This says what each one does, '
    + 'why there are several kinds of memory, '
    + 'and how a program is actually carried out.',

  method: [
    'Name the component and give its function.',
    'For memory, state the speed, the size and whether it is volatile.',
    'Place each kind of memory in the hierarchy.',
    'For a bus, say what it carries and whether it is one way.',
    'For execution, give fetch, decode and execute in order, '
      + 'naming the part that does each.',
    'Explain any design feature by the problem it solves.',
    'Distinguish memory from storage in every answer.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three parts of the CPU and give the function of each.',
      steps: [
        'Control, calculation, and temporary holding.',
      ],
      answer: 'The control unit fetches and decodes each instruction '
        + 'and directs the other parts to carry it out. '
        + 'The arithmetic and logic unit performs calculations '
        + 'and logical comparisons. '
        + 'The registers are very small, very fast stores '
        + 'holding the data and addresses currently in use, '
        + 'such as the program counter and the accumulator.',
    },
    {
      level: 4,
      ask: 'Why does a computer have registers, cache, RAM and a disk '
        + 'rather than one kind of memory?',
      steps: [
        'Fast memory is expensive and small.',
        'Large memory is cheap and slow.',
        'No one technology is both fast and large affordably.',
        'So keep what is in use in the fast store.',
      ],
      answer: 'Because fast memory is expensive and therefore small, '
        + 'while large memory is cheap and therefore slow, '
        + 'and no single technology is both fast and large '
        + 'at a price anybody would pay. '
        + 'So the machine uses a hierarchy: '
        + 'registers hold the values in use at this instant, '
        + 'cache holds what was used recently '
        + 'on the assumption it will be wanted again, '
        + 'RAM holds the whole running program, '
        + 'and the disk holds everything else. '
        + 'Each level is larger and slower than the one above.',
    },
    {
      level: 4,
      ask: 'Describe the machine cycle in full, '
        + 'naming the part that performs each stage.',
      steps: [
        'Fetch uses the program counter, the address bus and the data '
          + 'bus.',
        'Decode is done by the control unit.',
        'Execute is done by the arithmetic and logic unit or another '
          + 'part.',
      ],
      answer: 'Fetch: the control unit takes the address '
        + 'held in the program counter, '
        + 'places it on the address bus, '
        + 'and the instruction is returned on the data bus '
        + 'into a register. '
        + 'Decode: the control unit interprets the instruction '
        + 'to determine which operation is required. '
        + 'Execute: the arithmetic and logic unit, '
        + 'or whichever part is needed, carries it out, '
        + 'and the program counter is advanced '
        + 'to point at the next instruction. '
        + 'The cycle then repeats.',
    },
    {
      level: 5,
      ask: 'A computer becomes very slow when many programs are open. '
        + 'Explain why, using the memory hierarchy, '
        + 'and say why a faster clock speed would not fix it.',
      steps: [
        'Each open program needs space in RAM.',
        'When RAM is full the operating system uses disk space instead.',
        'The disk is thousands of times slower than RAM.',
        'The CPU then waits, so its speed is not the limit.',
      ],
      answer: 'Each running program must be held in RAM. '
        + 'When RAM is full the operating system moves some of it '
        + 'onto the disk and swaps pieces back as they are needed, '
        + 'and the disk is thousands of times slower than RAM. '
        + 'So the processor spends most of its time waiting '
        + 'for data to arrive. '
        + 'A faster clock speed would not help, '
        + 'because the limit is not how fast the CPU can work '
        + 'but how fast data reaches it. '
        + 'Adding RAM would help, '
        + 'because it removes the need to use the disk as memory.',
    },
  ],

  traps: [
    {
      mistake: 'Calling a hard disk the memory of the computer.',
      why: 'RAM is volatile working memory the CPU addresses directly. '
        + 'A disk is non-volatile storage and the CPU cannot execute from '
        + 'it.',
    },
    {
      mistake: 'Giving the machine cycle as three words only.',
      why: 'The marks are for the detail: '
        + 'the program counter, the buses, '
        + 'and which part performs each stage.',
    },
    {
      mistake: 'Saying the address bus carries data both ways.',
      why: 'Only the CPU issues addresses, '
        + 'so it is unidirectional. '
        + 'The data bus is the bidirectional one.',
    },
    {
      mistake: 'Treating clock speed as the whole measure of performance.',
      why: 'Work done per cycle and the number of cores matter too, '
        + 'and a machine short of RAM is limited by neither.',
    },
  ],

  extension:
    'Adding processing cores rather than clock speed '
    + 'is how performance has mainly improved in recent years, '
    + 'and the reason is heat. '
    + 'Raising the clock speed raises the power consumed '
    + 'and therefore the heat produced, '
    + 'faster than it raises the work done, '
    + 'so there is a ceiling beyond which a chip cannot be cooled. '
    + 'Two cores at a moderate speed '
    + 'can do more total work than one core '
    + 'at a speed that would melt it. '
    + 'The cost is that a program has to be written '
    + 'to use more than one core, '
    + 'and many are not, '
    + 'which is why a four core machine '
    + 'is not four times as fast at everything.',

  questions: [
    {
      id: 'arch-1',
      ask: 'Which part of the CPU performs calculations?',
      kind: 'choice',
      options: [
        'the arithmetic and logic unit',
        'the control unit',
        'the program counter',
      ],
      answer: 'the arithmetic and logic unit',
      teach: 'The control unit directs; the ALU computes; '
        + 'the program counter holds the next address.',
      level: 2,
    },
    {
      id: 'arch-2',
      ask: 'RAM is described as volatile because it:',
      kind: 'choice',
      options: [
        'loses its contents when power is removed',
        'can be written to',
        'is faster than cache',
      ],
      answer: 'loses its contents when power is removed',
      teach: 'ROM and a disk are non-volatile. '
        + 'That is the difference between memory and storage.',
      level: 3,
    },
    {
      id: 'arch-3',
      ask: 'Which bus is unidirectional?',
      kind: 'choice',
      options: ['the address bus', 'the data bus', 'neither'],
      answer: 'the address bus',
      teach: 'Only the CPU issues addresses. '
        + 'Data must travel both ways, so the data bus is '
        + 'bidirectional.',
      level: 4,
    },
    {
      id: 'arch-4',
      ask: 'How many stages has the machine cycle?',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Fetch, decode, execute, '
        + 'each with a named part performing it.',
      level: 3,
    },
    {
      id: 'arch-5',
      ask: 'Cache memory exists mainly because:',
      kind: 'choice',
      options: [
        'fast memory is expensive, so only a little can be afforded',
        'RAM is non-volatile',
        'the CPU cannot address RAM',
      ],
      answer: 'fast memory is expensive, so only a little can be afforded',
      teach: 'The hierarchy exists because no technology is both fast '
        + 'and large at an affordable price.',
      level: 5,
    },
  ],
})

/* ── number systems and data representation ─────────────────────────────── */

teach({
  topicId: 'number-systems-ict',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A computer stores everything as patterns of two states, '
      + 'written 0 and 1. '
      + 'Binary is base two, denary base ten, hexadecimal base sixteen. '
      + 'To convert binary to denary, add the place values of the ones. '
      + 'To convert denary to binary, divide by two and read the '
      + 'remainders upwards. '
      + 'Hexadecimal is used because one hex digit '
      + 'is exactly four binary digits.',
    method: [
      'Write the place values above the digits.',
      'Binary to denary: add the place values where there is a 1.',
      'Denary to binary: divide by 2 repeatedly, read remainders bottom '
        + 'to top.',
      'Binary to hexadecimal: group in fours from the right.',
      'Check every answer by converting back.',
    ],
  },

  idea:
    'A computer circuit has two reliable states, '
    + 'current flowing or not, '
    + 'so all data is held as patterns of those two, written 0 and 1. '
    + 'One such digit is a bit, '
    + 'eight bits make a byte, '
    + 'and a byte can hold 256 different patterns. '
    + 'Binary is base two, '
    + 'with place values 1, 2, 4, 8, 16, 32, 64, 128 '
    + 'reading from the right. '
    + 'Denary is base ten, with place values 1, 10, 100 and so on. '
    + 'Hexadecimal is base sixteen, '
    + 'using the digits 0 to 9 and then A to F for ten to fifteen, '
    + 'with place values 1, 16, 256. '
    + 'To convert binary to denary, '
    + 'add the place values of the positions holding a 1. '
    + 'To convert denary to binary, '
    + 'divide repeatedly by 2 and read the remainders from the bottom '
    + 'upwards. '
    + 'One hexadecimal digit corresponds exactly to four binary digits, '
    + 'so conversion between those two is done by grouping in fours. '
    + 'Text is stored by giving each character a number: '
    + 'in ASCII, seven or eight bits per character, '
    + 'and in Unicode, enough to cover every writing system. '
    + 'An image is stored as a grid of pixels, '
    + 'each pixel holding a number for its colour, '
    + 'so file size depends on the number of pixels '
    + 'and the number of bits per pixel. '
    + 'Sound is stored by sampling the wave many times a second '
    + 'and recording each height as a number.',

  mechanism:
    'Binary is not a strange convention. '
    + 'It is what you get when a device has two reliable states, '
    + 'and that is worth saying first '
    + 'because a question often asks why computers use binary. '
    + 'A circuit can tell current from no current reliably, '
    + 'even when the voltage drifts a little. '
    + 'Asking it to distinguish ten different voltage levels '
    + 'would mean that a small drift '
    + 'turns a 6 into a 7, '
    + 'and the machine would make errors constantly. '
    + 'So two states are chosen for reliability, not for elegance, '
    + 'and everything else follows from that choice. '
    + 'Now hexadecimal, which learners regard as an extra burden '
    + 'and which exists to reduce work. '
    + 'Sixteen is two to the power four, '
    + 'so one hexadecimal digit is exactly four binary digits, '
    + 'with no remainder and no carrying between groups. '
    + 'The byte 11010110 becomes 1101 and 0110, '
    + 'which is D and 6, so D6. '
    + 'Two characters instead of eight, '
    + 'and the conversion needs no arithmetic at all, '
    + 'only the four bit table. '
    + 'That is why memory addresses and colour codes '
    + 'are written in hexadecimal: '
    + 'it is binary made readable, '
    + 'and it is not a third number system to master '
    + 'but a shorthand for the second. '
    + 'Saying so answers the standard question '
    + 'about why hexadecimal is used. '
    + 'Here is where marks are lost. '
    + 'The first is the direction of the remainders. '
    + 'Converting 25 to binary: '
    + '25 divided by 2 is 12 remainder 1; '
    + '12 is 6 remainder 0; '
    + '6 is 3 remainder 0; '
    + '3 is 1 remainder 1; '
    + '1 is 0 remainder 1. '
    + 'The remainders in the order produced are 1, 0, 0, 1, 1, '
    + 'and the answer is those read from the bottom up: 11001. '
    + 'Reading them downwards gives 10011, which is 19, '
    + 'and that is the commonest error in the topic. '
    + 'The habit that prevents it: '
    + 'always check by converting back. '
    + '11001 is 16 plus 8 plus 1, which is 25, so it is right. '
    + 'The check takes five seconds and catches the error every time. '
    + 'The second is grouping hexadecimal from the wrong end. '
    + 'Group in fours from the right, not the left, '
    + 'and pad the leftmost group with zeros if it is short. '
    + '110110 has six digits, '
    + 'so grouping from the right gives 11 and 0110, '
    + 'and the first group is padded to 0011, '
    + 'giving 3 and 6, so 36. '
    + 'Grouping from the left would give 1101 and 10, '
    + 'which is a different and wrong answer, '
    + 'and the reason is the same as in denary: '
    + 'place value is counted from the right. '
    + 'The third is the file size calculation, '
    + 'which is examined and is arithmetic. '
    + 'An image 100 pixels by 200 pixels '
    + 'with 8 bits per pixel '
    + 'holds 100 times 200 times 8 bits, '
    + 'which is 160000 bits, '
    + 'which is 20000 bytes, '
    + 'because 8 bits make a byte. '
    + 'Dividing by 8 is the step learners omit, '
    + 'and the answer must say which unit it is in. '
    + 'The fourth is the character code. '
    + 'A computer does not store the letter A. '
    + 'It stores the number 65, in binary 01000001, '
    + 'and software displays the shape when it sees that number. '
    + 'So the same byte is a letter, a small number, '
    + 'or part of a colour, '
    + 'depending on what the program expects, '
    + 'and nothing in the byte itself says which. '
    + 'That point explains why a file opened in the wrong program '
    + 'shows nonsense, '
    + 'and it is worth marks in a question '
    + 'about how text is represented. '
    + 'What has to be written down in every conversion '
    + 'is the working: '
    + 'the place values, or the division column with remainders. '
    + 'A bare answer earns one mark where three were available.',

  recap:
    'You know numbers in base ten '
    + 'and that computers work in ones and zeros. '
    + 'This gives the conversions in both directions, '
    + 'and shows how letters, pictures and sound become numbers.',

  method: [
    'Write the place values above the binary digits.',
    'Binary to denary: add the place values where a 1 appears.',
    'Denary to binary: divide by 2, keeping remainders, '
      + 'and read them bottom to top.',
    'Check by converting the answer back.',
    'Binary to hexadecimal: group in fours from the right, padding the '
      + 'left.',
    'Hexadecimal to binary: write four bits for each digit.',
    'For a file size, multiply the counts, then divide by 8 for bytes.',
    'State the unit on every answer.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Convert the binary number 10110 to denary.',
      steps: [
        'Place values from the right: 1, 2, 4, 8, 16.',
        'The ones sit at 16, 4 and 2.',
        'Add them.',
      ],
      answer: '22. '
        + '16 plus 4 plus 2. '
        + 'Writing the place values above the digits '
        + 'is the working the marking scheme pays for.',
    },
    {
      level: 4,
      ask: 'Convert 25 to binary, and check your answer.',
      steps: [
        '25 divided by 2 is 12 remainder 1.',
        '12 divided by 2 is 6 remainder 0.',
        '6 divided by 2 is 3 remainder 0.',
        '3 divided by 2 is 1 remainder 1.',
        '1 divided by 2 is 0 remainder 1.',
        'Read the remainders from the bottom upwards.',
      ],
      answer: '11001. '
        + 'Check: 16 plus 8 plus 1 is 25, so it is correct. '
        + 'Reading the remainders downwards would give 10011, '
        + 'which is 19, '
        + 'and the check catches that at once.',
    },
    {
      level: 4,
      ask: 'Convert the binary number 11010110 to hexadecimal, '
        + 'and explain why hexadecimal is used at all.',
      steps: [
        'Group in fours from the right: 1101 and 0110.',
        '1101 is 13, which is D.',
        '0110 is 6.',
        'Sixteen is two to the power four.',
      ],
      answer: 'D6. '
        + 'Hexadecimal is used because one hexadecimal digit '
        + 'is exactly four binary digits, '
        + 'since sixteen is two to the power four. '
        + 'So a byte becomes two characters instead of eight, '
        + 'and the conversion needs no arithmetic, '
        + 'only the four bit groups. '
        + 'It is binary made readable, '
        + 'which is why addresses and colour codes use it.',
    },
    {
      level: 5,
      ask: 'An image is 200 pixels wide and 150 pixels high '
        + 'with 8 bits per pixel. '
        + 'Find its size in bytes and in kilobytes, '
        + 'and say what would halve it.',
      steps: [
        'Pixels: 200 times 150, which is 30000.',
        'Bits: 30000 times 8, which is 240000.',
        'Bytes: divide by 8, giving 30000.',
        'Kilobytes: divide by 1000, giving about 30.',
      ],
      answer: '30000 bytes, which is about 30 kilobytes. '
        + 'The size would be halved '
        + 'by using 4 bits per pixel instead of 8, '
        + 'which reduces the number of available colours from 256 to 16, '
        + 'or by halving the number of pixels, '
        + 'which reduces the detail. '
        + 'Either way something is given up, '
        + 'and saying what is given up is part of the answer.',
    },
  ],

  traps: [
    {
      mistake: 'Reading the division remainders from the top downwards.',
      why: 'They are read from the bottom up. '
        + 'Convert the answer back as a check and the error shows at '
        + 'once.',
    },
    {
      mistake: 'Grouping binary into fours from the left.',
      why: 'Place value is counted from the right, '
        + 'so group from the right and pad the leftmost group with zeros.',
    },
    {
      mistake: 'Giving a file size in bits when bytes were asked for.',
      why: 'Divide by 8. '
        + 'State the unit on the answer, '
        + 'since bits and bytes differ by a factor of eight.',
    },
    {
      mistake: 'Saying the computer stores the letter A.',
      why: 'It stores a number, 65 in ASCII. '
        + 'Software interprets the number as a character.',
    },
  ],

  extension:
    'Compression removes the repetition in data, '
    + 'not the information. '
    + 'Take a photograph of a wall. '
    + 'Thousands of neighbouring pixels share almost one colour. '
    + 'So the file can store that colour once, '
    + 'with a count of the pixels that share it. '
    + 'That is lossless compression. '
    + 'The original comes back exactly. '
    + 'Lossy compression goes further. '
    + 'It throws away detail a viewer is unlikely to notice. '
    + 'This is why a photograph saved again and again '
    + 'in a lossy format slowly decays. '
    + 'So the choice is between file size and fidelity. '
    + 'It is made one way for a scanned document '
    + 'and another for a holiday photograph.',

  questions: [
    {
      id: 'num-1',
      ask: 'How many bits are in a byte?',
      kind: 'numeric',
      options: [],
      answer: '8',
      teach: 'Eight bits, giving 256 possible patterns.',
      level: 2,
    },
    {
      id: 'num-2',
      ask: 'The binary number 1011 in denary is:',
      kind: 'numeric',
      options: [],
      answer: '11',
      teach: 'Place values 8, 4, 2, 1. '
        + 'Ones at 8, 2 and 1, so 8 plus 2 plus 1.',
      level: 3,
    },
    {
      id: 'num-3',
      ask: 'When converting denary to binary by repeated division, '
        + 'the remainders are read:',
      kind: 'choice',
      options: [
        'from the bottom upwards',
        'from the top downwards',
        'in any order',
      ],
      answer: 'from the bottom upwards',
      teach: 'The last remainder is the most significant bit. '
        + 'Convert back to check.',
      level: 4,
    },
    {
      id: 'num-4',
      ask: 'One hexadecimal digit corresponds to how many binary digits?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Sixteen is two to the power four, '
        + 'which is why the grouping is exact.',
      level: 4,
    },
    {
      id: 'num-5',
      ask: 'An image of 1000 pixels at 8 bits per pixel occupies how many '
        + 'bytes?',
      kind: 'numeric',
      options: [],
      answer: '1000',
      teach: '1000 times 8 is 8000 bits, '
        + 'and dividing by 8 gives 1000 bytes.',
      level: 5,
    },
  ],
})

/* ── system and application software ────────────────────────────────────── */

teach({
  topicId: 'software-ict',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'System software runs the machine. '
      + 'Application software does the user work. '
      + 'The operating system is the main piece of system software, '
      + 'and it manages memory, processes, files, '
      + 'devices and users, '
      + 'and provides the interface. '
      + 'Utility programs maintain the system. '
      + 'Software is also classified by how it is licensed.',
    method: [
      'Ask whose work the program does: the machine or the user.',
      'For the operating system, name the function being managed.',
      'For a utility, say what it maintains.',
      'For a licence, say what the user may and may not do.',
      'Give a named example for every category.',
    ],
  },

  idea:
    'Software is the set of instructions that tells hardware what to do. '
    + 'It divides into system software and application software. '
    + 'System software runs and maintains the computer itself. '
    + 'It includes the operating system, '
    + 'utility programs, '
    + 'device drivers, '
    + 'and language translators such as compilers and interpreters. '
    + 'Application software performs tasks for the user: '
    + 'word processors, spreadsheets, '
    + 'database programs, browsers, media players. '
    + 'The operating system has several defined functions. '
    + 'It manages memory, deciding what is held where. '
    + 'It manages processes, '
    + 'sharing processor time between programs. '
    + 'It manages files, '
    + 'organising storage into directories '
    + 'and keeping track of where each file sits. '
    + 'It manages input and output devices through drivers. '
    + 'It manages users and security, '
    + 'controlling who may read or change what. '
    + 'And it provides the user interface, '
    + 'whether graphical or a command line. '
    + 'Utility programs include antivirus software, '
    + 'disk defragmenters, backup tools and compression tools. '
    + 'Software is also classified by licence. '
    + 'Proprietary software is sold or licensed '
    + 'with the source code withheld. '
    + 'Open source software is distributed with its source code '
    + 'and may be modified. '
    + 'Freeware costs nothing but is not open. '
    + 'Shareware is free to try for a period. '
    + 'Custom or bespoke software is written for one organisation.',

  mechanism:
    'The question that makes this topic make sense is '
    + 'what the operating system is doing when nothing seems to happen. '
    + 'A learner types a letter and sees it appear. '
    + 'Between the key and the screen, '
    + 'the operating system took an interrupt from the keyboard '
    + 'through a driver, '
    + 'decided which program had the focus, '
    + 'gave that program a share of processor time, '
    + 'found memory for the character, '
    + 'and sent the change to the display driver. '
    + 'None of this is visible '
    + 'and all of it is the operating system doing its named functions. '
    + 'Hold that picture and the function list stops being a list. '
    + 'The clearest of its jobs to explain is process management, '
    + 'because the fact behind it is surprising. '
    + 'A single processor core can only execute one instruction at a '
    + 'time. '
    + 'So when a learner plays music while typing, '
    + 'the two programs are not really running at once. '
    + 'The operating system gives each a very short turn, '
    + 'switching between them thousands of times a second, '
    + 'and the switching is too fast to notice. '
    + 'That is multitasking, '
    + 'and describing it as rapid switching rather than simultaneous '
    + 'running '
    + 'is what earns the mark. '
    + 'It also explains why opening too many programs slows everything: '
    + 'each gets a smaller share of the same processor time, '
    + 'and the switching itself costs a little. '
    + 'Memory management is the next most examined, '
    + 'and it connects to the architecture topic. '
    + 'The operating system decides which program occupies which part of '
    + 'RAM, '
    + 'keeps programs from writing into each other space, '
    + 'and when RAM is exhausted '
    + 'moves some of it to disk and brings it back as needed. '
    + 'That last part is why a machine short of memory crawls, '
    + 'and it is the same point from the other direction. '
    + 'Here is where marks are lost. '
    + 'The first error is classifying by where the program came from '
    + 'rather than by what it does. '
    + 'Antivirus software is system software, '
    + 'specifically a utility, '
    + 'because it maintains the machine, '
    + 'even though the user bought and installed it. '
    + 'A browser is application software, '
    + 'even though it came with the operating system. '
    + 'The test is whose work the program does: '
    + 'the machine, or the user. '
    + 'The second is the driver. '
    + 'A device driver is system software, '
    + 'and its function is to let the operating system '
    + 'communicate with one particular piece of hardware. '
    + 'This is why a new printer needs a driver: '
    + 'the operating system knows how to print in general '
    + 'and not how to speak to that model. '
    + 'Saying that a driver drives the device is not an answer. '
    + 'The third is the compiler and the interpreter, '
    + 'which are confused reliably. '
    + 'A compiler translates the whole program into machine code once, '
    + 'producing a file that then runs by itself and runs fast. '
    + 'An interpreter translates and executes line by line each time, '
    + 'which is slower to run and easier to correct, '
    + 'because an error is reported at the line where it occurs. '
    + 'So the trade is startup effort against running speed, '
    + 'and that framing answers any comparison question. '
    + 'The fourth is the licence categories, '
    + 'where open source and freeware are treated as the same thing. '
    + 'They are not. '
    + 'Freeware costs nothing and keeps its source code closed, '
    + 'so a user cannot change it. '
    + 'Open source publishes the source code '
    + 'and permits modification and redistribution, '
    + 'and it may still be sold. '
    + 'Free of charge and freedom to modify '
    + 'are two different things, '
    + 'and a question on licensing is testing that distinction. '
    + 'For Ghanaian schools the practical point is worth making: '
    + 'open source office and operating system software '
    + 'removes a licence cost per machine, '
    + 'which is why many institutions use it, '
    + 'and the cost is retraining and occasional file compatibility '
    + 'trouble. '
    + 'What has to be written down is the category, '
    + 'the function, '
    + 'and a named example. '
    + 'Three things in every answer.',

  recap:
    'You have used a computer and opened programs on it. '
    + 'This divides software into what runs the machine '
    + 'and what does your work, '
    + 'and says what the operating system is doing underneath.',

  method: [
    'Decide whether the program serves the machine or the user.',
    'Machine means system software; user means application software.',
    'For the operating system, name which of its functions applies.',
    'Describe multitasking as rapid switching, not simultaneous running.',
    'For a driver, say which hardware it lets the system address.',
    'For a translator, distinguish compiling once from interpreting line '
      + 'by line.',
    'For a licence, say what the user may and may not do.',
    'Give a named example in every case.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Classify each as system or application software, '
        + 'with a reason: '
        + 'a word processor, an antivirus program, '
        + 'a printer driver, a browser.',
      steps: [
        'Ask whose work each one does.',
      ],
      answer: 'A word processor is application software, '
        + 'because it does the user work. '
        + 'An antivirus program is system software, specifically a '
        + 'utility, '
        + 'because it maintains the machine. '
        + 'A printer driver is system software, '
        + 'because it lets the operating system address the hardware. '
        + 'A browser is application software, '
        + 'even if it was installed with the operating system, '
        + 'because the test is what the program does and not where it came '
        + 'from.',
    },
    {
      level: 4,
      ask: 'Name five functions of an operating system.',
      steps: [
        'Each function manages a named resource.',
      ],
      answer: 'Memory management, deciding what is held where in RAM. '
        + 'Process management, sharing processor time between programs. '
        + 'File management, organising storage into directories '
        + 'and tracking where each file is. '
        + 'Device management, communicating with hardware through '
        + 'drivers. '
        + 'User and security management, '
        + 'controlling who may read or change what. '
        + 'Providing the user interface is a sixth.',
    },
    {
      level: 4,
      ask: 'A learner plays music while typing a document '
        + 'on a single core computer. '
        + 'Explain how both appear to run at once.',
      steps: [
        'One core executes one instruction at a time.',
        'So they cannot truly run together.',
        'The operating system gives each a very short turn.',
        'The switching is too fast to notice.',
      ],
      answer: 'They are not truly running at the same time. '
        + 'A single core can execute only one instruction at a moment, '
        + 'so the operating system gives each program a very short turn '
        + 'of processor time '
        + 'and switches between them thousands of times a second. '
        + 'The switching is far too fast for a person to notice, '
        + 'so both appear continuous. '
        + 'This is process management, and it is also why opening many '
        + 'programs '
        + 'slows all of them: '
        + 'each receives a smaller share of the same time.',
    },
    {
      level: 5,
      ask: 'Distinguish a compiler from an interpreter, '
        + 'and distinguish open source software from freeware.',
      steps: [
        'A compiler translates the whole program once.',
        'An interpreter translates and runs line by line each time.',
        'Freeware is free of charge with closed source.',
        'Open source publishes the source and permits modification.',
      ],
      answer: 'A compiler translates the entire program into machine code '
        + 'once, '
        + 'producing a file that afterwards runs on its own and runs '
        + 'quickly. '
        + 'An interpreter translates and executes one line at a time, '
        + 'every time the program is run, '
        + 'which is slower but makes correction easier '
        + 'because an error is reported at the line where it happens. '
        + 'Freeware costs nothing to use '
        + 'but keeps its source code closed, '
        + 'so the user cannot change it. '
        + 'Open source software publishes its source code '
        + 'and permits modification and redistribution, '
        + 'and may still be sold. '
        + 'Free of charge and free to modify '
        + 'are different things.',
    },
  ],

  traps: [
    {
      mistake: 'Calling antivirus software an application '
        + 'because the user installed it.',
      why: 'The test is what the program does. '
        + 'It maintains the machine, so it is a utility, '
        + 'which is system software.',
    },
    {
      mistake: 'Describing multitasking as programs running at the same '
        + 'time.',
      why: 'One core executes one instruction at a time. '
        + 'The operating system switches between them very rapidly.',
    },
    {
      mistake: 'Treating open source and freeware as the same.',
      why: 'Freeware is free of charge with closed source. '
        + 'Open source publishes the code and permits modification.',
    },
    {
      mistake: 'Saying a driver drives the device.',
      why: 'It lets the operating system communicate with '
        + 'one particular piece of hardware, '
        + 'which is why each model needs its own.',
    },
  ],

  extension:
    'The reason schools and governments debate software licensing '
    + 'is arithmetic. '
    + 'A licence fee per machine is small on one machine '
    + 'and large across a district of schools, '
    + 'and it recurs. '
    + 'Open source removes that fee entirely, '
    + 'which is why many Ghanaian institutions have adopted it. '
    + 'The costs are real too: '
    + 'retraining staff, '
    + 'occasional trouble exchanging files with offices '
    + 'that use proprietary formats, '
    + 'and the absence of a vendor to call. '
    + 'A sound answer to should a school use open source '
    + 'compares the recurring licence saving '
    + 'against those one off and ongoing costs, '
    + 'rather than arguing from principle.',

  questions: [
    {
      id: 'soft-1',
      ask: 'A spreadsheet program is:',
      kind: 'choice',
      options: [
        'application software',
        'system software',
        'a device driver',
      ],
      answer: 'application software',
      teach: 'It does the user work rather than running the machine.',
      level: 2,
    },
    {
      id: 'soft-2',
      ask: 'Which is a function of an operating system?',
      kind: 'choice',
      options: [
        'managing memory',
        'editing photographs',
        'printing a document',
      ],
      answer: 'managing memory',
      teach: 'Editing and printing are user tasks. '
        + 'The operating system manages memory, processes, files, '
        + 'devices and users.',
      level: 3,
    },
    {
      id: 'soft-3',
      ask: 'On a single core machine, multitasking works by:',
      kind: 'choice',
      options: [
        'switching rapidly between programs',
        'running programs truly at the same time',
        'using the hard disk as a second processor',
      ],
      answer: 'switching rapidly between programs',
      teach: 'One core executes one instruction at a time, '
        + 'and the switching is too fast to notice.',
      level: 4,
    },
    {
      id: 'soft-4',
      ask: 'An interpreter differs from a compiler in that it:',
      kind: 'choice',
      options: [
        'translates and runs the program line by line',
        'produces a faster program',
        'does not need source code',
      ],
      answer: 'translates and runs the program line by line',
      teach: 'A compiler translates the whole program once '
        + 'and the result runs faster.',
      level: 5,
    },
    {
      id: 'soft-5',
      ask: 'Freeware differs from open source software in that freeware:',
      kind: 'choice',
      options: [
        'does not give the user the source code',
        'always costs money',
        'cannot be installed',
      ],
      answer: 'does not give the user the source code',
      teach: 'Free of charge and free to modify are different. '
        + 'Open source publishes the code.',
      level: 5,
    },
  ],
})

/* ── advanced word processing ───────────────────────────────────────────── */

teach({
  topicId: 'word-ict',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A style is a named set of formatting '
      + 'applied to a paragraph rather than typed by hand. '
      + 'Using heading styles lets the program '
      + 'build a table of contents and update it automatically. '
      + 'Mail merge joins one document to a list of records '
      + 'to produce many personalised copies. '
      + 'The principle throughout is to describe what a thing is, '
      + 'not what it should look like.',
    method: [
      'Apply a heading style rather than making text big and bold.',
      'Insert a table of contents, then update it when the document '
        + 'changes.',
      'For mail merge, prepare the data source first.',
      'Insert merge fields rather than typing names.',
      'Use the program referencing tools for citations and captions.',
    ],
  },

  idea:
    'A word processor can do far more than type and print. '
    + 'A style is a named collection of formatting, '
    + 'such as Heading 1 or Normal, '
    + 'applied to a whole paragraph at once. '
    + 'Changing the style changes every paragraph using it. '
    + 'A table of contents is generated by the program '
    + 'from the paragraphs marked with heading styles, '
    + 'and it can be updated after the document changes. '
    + 'Page numbering, headers and footers '
    + 'are set once for a section rather than typed on each page. '
    + 'A section break allows different page settings '
    + 'in different parts of one document, '
    + 'such as a landscape table within a portrait report. '
    + 'Mail merge combines a main document '
    + 'with a data source such as a list of names and addresses, '
    + 'inserting merge fields where the personalised text should go, '
    + 'and producing one copy per record. '
    + 'Referencing tools insert citations and build a bibliography, '
    + 'and captions numbered by the program '
    + 'renumber themselves if a figure is inserted earlier. '
    + 'Track changes records every edit with its author, '
    + 'and comments allow a reviewer to query without altering the text. '
    + 'Find and replace changes every occurrence at once, '
    + 'and templates store a document structure for reuse.',

  mechanism:
    'There is one principle under every feature in this topic, '
    + 'and a learner who has it can work out the rest. '
    + 'Mark what a thing is, not what it should look like. '
    + 'A heading is not large bold text. '
    + 'It is a heading, '
    + 'and if it is marked as one '
    + 'then the program knows it is a heading '
    + 'and can do several things with that knowledge. '
    + 'It can collect all the headings into a table of contents. '
    + 'It can show the document outline for navigation. '
    + 'It can change the look of every heading at once '
    + 'when the style is edited. '
    + 'None of that is possible if the text was merely made big by hand, '
    + 'because then the program sees only formatting '
    + 'and has no idea what the text is for. '
    + 'So styles are not a shortcut for formatting. '
    + 'They are how meaning is recorded in the file, '
    + 'and the automatic features are consequences. '
    + 'Saying that in an examination answer, '
    + 'in a question about why styles are preferred '
    + 'to manual formatting, '
    + 'earns more than a list of steps. '
    + 'The practical argument is easy to feel. '
    + 'A learner writing a forty page project '
    + 'who formats twenty headings by hand '
    + 'and is then told to make all headings smaller '
    + 'must do twenty edits and will miss one. '
    + 'With a style it is one edit, and nothing is missed. '
    + 'And the table of contents, '
    + 'typed by hand, '
    + 'is wrong the moment a page is inserted; '
    + 'generated from styles, '
    + 'it is corrected by one update command. '
    + 'Here is where marks are lost in this topic, '
    + 'and they are practical losses as much as examination ones. '
    + 'The first is forgetting to update the table of contents '
    + 'after editing. '
    + 'The table is a snapshot, not a live view, '
    + 'so it must be refreshed before printing, '
    + 'and a project submitted with page numbers '
    + 'that no longer match '
    + 'loses marks for presentation. '
    + 'Make updating the last step before printing, every time. '
    + 'The second is mail merge, '
    + 'where the error is almost always in the data source '
    + 'rather than in the document. '
    + 'The data must have one column per field, '
    + 'with a clear heading row, '
    + 'and one record per row, with no blank rows between. '
    + 'If the first row is not headings, '
    + 'the program will treat a real record as the field names '
    + 'and that record will vanish from the output. '
    + 'So prepare and check the data source first, '
    + 'and only then write the letter. '
    + 'The third is typing a name where a merge field belongs. '
    + 'The point of mail merge '
    + 'is that the letter contains a placeholder '
    + 'which the program replaces per record. '
    + 'Typing the first recipient name into the letter '
    + 'produces two hundred letters addressed to the same person, '
    + 'and a question showing that symptom '
    + 'is asking the candidate to identify exactly this cause. '
    + 'The fourth is spacing created with the enter key. '
    + 'Pressing enter several times to push a heading to a new page '
    + 'works until a paragraph above is edited, '
    + 'and then everything moves. '
    + 'A page break puts the heading on a new page permanently, '
    + 'and paragraph spacing settings control the gaps. '
    + 'The same reasoning as styles: '
    + 'say what you want, do not simulate it. '
    + 'Where a school has limited time on a shared machine, '
    + 'practise in this order, '
    + 'because it is the order of the marks: '
    + 'apply heading styles to a document; '
    + 'insert and update a table of contents; '
    + 'insert page numbers through a header or footer; '
    + 'then mail merge from a small list of five records; '
    + 'then captions and references. '
    + 'The first three are the most frequently examined '
    + 'and take the least time to learn. '
    + 'The theory of all of it, '
    + 'including why styles beat manual formatting, '
    + 'can be written and marked on paper, '
    + 'so a learner with no machine at home '
    + 'is not shut out of the written paper.',

  recap:
    'You can type, save and print a document, '
    + 'and make text bold or larger. '
    + 'This replaces hand formatting with named styles, '
    + 'which is what lets the program do the repetitive work.',

  method: [
    'Mark each heading with a heading style instead of formatting it by '
      + 'hand.',
    'Set the look of all headings by editing the style once.',
    'Insert a table of contents, which is built from those styles.',
    'Update the table of contents as the last step before printing.',
    'Use a page break, not repeated enter presses, to start a new page.',
    'For mail merge, build and check the data source first, '
      + 'with a heading row and one record per row.',
    'Insert merge fields in the letter rather than typing any name.',
    'Preview the merge before producing all the copies.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why is applying a heading style better '
        + 'than making the text large and bold by hand?',
      steps: [
        'A style records what the text is.',
        'The program can then collect the headings.',
        'One edit changes them all.',
      ],
      answer: 'Because a style records that the paragraph is a heading, '
        + 'not merely that it is large. '
        + 'The program can then build a table of contents from the '
        + 'headings, '
        + 'show an outline for navigation, '
        + 'and change the appearance of every heading at once '
        + 'when the style is edited. '
        + 'Manual formatting gives the program no information, '
        + 'so none of that is possible '
        + 'and every change must be made twenty times by hand.',
    },
    {
      level: 4,
      ask: 'List the steps to produce a table of contents '
        + 'for a twenty page report.',
      steps: [
        'Styles must be applied first.',
        'The table is generated, not typed.',
        'It must be updated after edits.',
      ],
      answer: 'Apply Heading 1 to each main heading '
        + 'and Heading 2 to each subheading throughout the report. '
        + 'Place the cursor where the table is to appear, '
        + 'usually after the title page. '
        + 'Insert a table of contents, '
        + 'choosing how many heading levels to show. '
        + 'Continue editing the report as needed. '
        + 'Before printing, update the table of contents, '
        + 'since it is a snapshot and not a live view, '
        + 'and page numbers will otherwise be wrong.',
    },
    {
      level: 4,
      ask: 'A learner runs a mail merge for 200 members '
        + 'and every letter is addressed to the first member. '
        + 'Diagnose the fault.',
      steps: [
        'The output repeated one record, so the letter is not using '
          + 'fields.',
        'That happens when a name was typed instead of inserted.',
      ],
      answer: 'The name was typed into the letter '
        + 'instead of a merge field being inserted. '
        + 'A merge field is a placeholder that the program replaces '
        + 'with the value from each record in turn; '
        + 'typed text is the same in every copy. '
        + 'The fix is to delete the typed name, '
        + 'insert the correct merge field in its place, '
        + 'and preview the merge before producing all the letters.',
    },
    {
      level: 5,
      ask: 'A mail merge produces 199 letters from a list of 200 members, '
        + 'and the first member is missing. '
        + 'Explain the likely cause and the fix.',
      steps: [
        'One record is missing, and it is the first.',
        'The program takes the first row as field names.',
        'So the data source has no heading row.',
      ],
      answer: 'The data source has no heading row, '
        + 'so the program has taken the first member record '
        + 'as the row of field names. '
        + 'That record is therefore used as labels '
        + 'and does not appear as a letter, '
        + 'which is why exactly one is missing '
        + 'and why it is the first. '
        + 'The fix is to insert a heading row at the top of the data '
        + 'source, '
        + 'naming each column, '
        + 'and to reconnect the merge. '
        + 'Checking the data source before writing the letter '
        + 'prevents the whole class of fault.',
    },
  ],

  traps: [
    {
      mistake: 'Formatting headings by hand instead of using a style.',
      why: 'The program then has no record of what the text is, '
        + 'so no table of contents or outline can be generated.',
    },
    {
      mistake: 'Printing without updating the table of contents.',
      why: 'It is a snapshot, not a live view, '
        + 'so page numbers go wrong as soon as the document is edited.',
    },
    {
      mistake: 'Typing a recipient name in a mail merge letter.',
      why: 'Typed text is the same in every copy. '
        + 'A merge field is replaced for each record.',
    },
    {
      mistake: 'Using repeated enter presses to start a new page.',
      why: 'Editing anything above moves it all. '
        + 'Use a page break, which says what you mean.',
    },
  ],

  extension:
    'The principle behind styles has a name. '
    + 'It is separating content from presentation, '
    + 'and it reaches far beyond word processing. '
    + 'A web page marks a heading as a heading in its markup. '
    + 'The appearance is set apart from it, in a stylesheet. '
    + 'That is why one change of stylesheet restyles a whole site. '
    + 'A screen reader for a blind user needs the same marking. '
    + 'It can announce the headings '
    + 'and let the user jump between them. '
    + 'But it can do that only if they were marked as headings, '
    + 'and not merely made larger. '
    + 'So the habit learned here does something more. '
    + 'It makes a document usable by somebody who cannot see it.',

  questions: [
    {
      id: 'word-1',
      ask: 'A table of contents is built from:',
      kind: 'choice',
      options: [
        'paragraphs marked with heading styles',
        'text that has been made bold',
        'the first line of each page',
      ],
      answer: 'paragraphs marked with heading styles',
      teach: 'The style records that the text is a heading, '
        + 'which is what the program collects.',
      level: 3,
    },
    {
      id: 'word-2',
      ask: 'After editing a report, a table of contents must be:',
      kind: 'choice',
      options: ['updated', 'deleted', 'retyped'],
      answer: 'updated',
      teach: 'It is a snapshot. '
        + 'Make updating the last step before printing.',
      level: 3,
    },
    {
      id: 'word-3',
      ask: 'In a mail merge, the personalised position in the letter '
        + 'is filled by:',
      kind: 'choice',
      options: [
        'a merge field',
        'typed text',
        'a page break',
      ],
      answer: 'a merge field',
      teach: 'A merge field is replaced per record. '
        + 'Typed text is identical in every copy.',
      level: 4,
    },
    {
      id: 'word-4',
      ask: 'A merge from 50 records produces 49 letters, '
        + 'missing the first. '
        + 'The likely cause is:',
      kind: 'choice',
      options: [
        'the data source has no heading row',
        'the printer skipped a page',
        'the letter is too long',
      ],
      answer: 'the data source has no heading row',
      teach: 'The program took the first record as the field names, '
        + 'so it became labels instead of a letter.',
      level: 5,
    },
    {
      id: 'word-5',
      ask: 'To start a heading on a new page you should insert:',
      kind: 'choice',
      options: [
        'a page break',
        'several blank lines',
        'a section heading style only',
      ],
      answer: 'a page break',
      teach: 'Blank lines move whenever anything above is edited. '
        + 'A page break says what you mean.',
      level: 4,
    },
  ],
})
