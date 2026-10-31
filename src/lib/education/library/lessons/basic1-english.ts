/**
 * Stored lessons for Basic 1 English Language.
 *
 * Written for a six or seven year old who is still learning to read, so every
 * line is written to be SPOKEN to them. See the note at the top of
 * `basic1-maths.ts` for why that changes the prose.
 *
 * One thing is specific to this subject. These lessons are about sounds, and
 * sounds cannot be written down for somebody who cannot yet read. So each one
 * is written for an adult or the app to SAY out loud, and the figure carries
 * the part a child can see: the letters themselves, and how they join.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── speaking in full sentences ───────────────────────────────────────────── */

teach({
  topicId: 'speak-in-sentences',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A sentence tells somebody the whole thing. If I ask where you are going '
    + 'and you say "market", I know one word. If you say "I am going to the '
    + 'market", I know who is going and where. A sentence needs the person and '
    + 'what they are doing.',

  mechanism:
    'One word makes the other person do the work. '
    + 'They have to guess the rest. '
    + 'And they can guess wrong. '
    + 'A full sentence carries the whole message. '
    + 'Then nobody has to guess. '
    + 'Short answers are not rude. '
    + 'They just leave things out.',

  recap:
    'Someone asks you a question. '
    + 'They are waiting for you to speak. '
    + 'Look at them. '
    + 'Say it loud enough to be heard.',

  method: [
    'Listen to the question all the way to the end.',
    'Start your answer with the person: I, we, she, my brother.',
    'Then say what they are doing.',
    'Say it again in your head before you say it out loud.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Somebody asks: What is your name? Answer in a full sentence.',
      steps: [
        'Start with the person. That is me, so I start with "My name".',
        'Then the thing itself.',
      ],
      answer: 'My name is Ama.',
    },
    {
      level: 2,
      ask: 'Somebody asks: What did you eat? You ate kenkey. Answer properly.',
      steps: [
        'Start with the person: I.',
        'Then what you did: ate.',
        'Then the thing: kenkey.',
      ],
      answer: 'I ate kenkey.',
    },
    {
      level: 3,
      ask: 'Somebody asks: Why are you late? You were helping your mother.',
      steps: [
        'Start with the person: I.',
        'Say what you were doing: was helping.',
        'Say who or what: my mother.',
        'A why question wants the reason, so say that too.',
      ],
      answer: 'I am late because I was helping my mother.',
    },
  ],

  traps: [
    {
      mistake: 'Answering with one word.',
      why: 'The listener has to guess the rest. Say who, and say what they '
        + 'are doing.',
    },
    {
      mistake: 'Answering so quietly that nobody hears.',
      why: 'A sentence nobody hears has not been said. Look up and speak out.',
    },
    {
      mistake: 'Leaving out the person, like saying "went to market".',
      why: 'Went where, and who went? Start with I, we or the person’s name.',
    },
  ],

  extension:
    'Join two sentences with "because". '
    + 'Now you give the reason too. '
    + '"I am late" tells them what happened. '
    + '"I am late because I was helping my mother" tells them why. '
    + 'That kind of answer stops the next question.',

  figure: {
    alt: 'One word answer compared with a full sentence, showing the parts a '
      + 'sentence has: who, and what they are doing',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="46" text-anchor="middle" font-size="17" fill="currentColor">Where are you going?</text>'
      /* the thin answer */
      + '<rect x="60" y="86" width="230" height="74" rx="12" fill="none" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="175" y="132" text-anchor="middle" font-size="24" fill="#c8433a">Market.</text>'
      + '<text x="175" y="186" text-anchor="middle" font-size="15" fill="#c8433a">one word</text>'
      + '<text x="175" y="208" text-anchor="middle" font-size="15" fill="#c8433a">they must guess</text>'
      /* the full one */
      + '<rect x="340" y="86" width="250" height="74" rx="12" fill="none" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="465" y="132" text-anchor="middle" font-size="20" fill="#0f8a4d">I am going to the market.</text>'
      + '<text x="465" y="186" text-anchor="middle" font-size="15" fill="#0f8a4d">a whole sentence</text>'
      + '<text x="465" y="208" text-anchor="middle" font-size="15" fill="#0f8a4d">nothing left out</text>'
      /* the parts */
      + '<text x="320" y="282" text-anchor="middle" font-size="17" fill="currentColor">Every sentence needs both</text>'
      + '<rect x="150" y="306" width="150" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>'
      + '<text x="225" y="332" text-anchor="middle" font-size="16" fill="currentColor">who</text>'
      + '<text x="225" y="352" text-anchor="middle" font-size="14" fill="currentColor">I</text>'
      + '<rect x="340" y="306" width="180" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>'
      + '<text x="430" y="332" text-anchor="middle" font-size="16" fill="currentColor">what they are doing</text>'
      + '<text x="430" y="352" text-anchor="middle" font-size="14" fill="currentColor">am going to the market</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'sis-1',
      ask: 'Which one is a full sentence?',
      kind: 'choice',
      options: ['Fufu.', 'I like fufu.', 'Like.'],
      answer: 'I like fufu.',
      teach: 'It says who (I) and what they are doing (like fufu). The other '
        + 'two leave the listener guessing.',
      level: 1,
    },
    {
      id: 'sis-2',
      ask: 'What is missing from "going to school"?',
      kind: 'choice',
      options: ['The person', 'The place', 'Nothing'],
      answer: 'The person',
      teach: 'We know where, but not who. Put the person at the front: I am '
        + 'going to school.',
      level: 2,
    },
    {
      id: 'sis-3',
      ask: 'Which word joins a fact to its reason?',
      kind: 'choice',
      options: ['and', 'because', 'but'],
      answer: 'because',
      teach: '"Because" tells the listener why. I am late because I was '
        + 'helping my mother.',
      level: 3,
    },
  ],
})

/* ── letters and their sounds ─────────────────────────────────────────────── */

teach({
  topicId: 'letter-sounds-primary',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Letters are marks that stand for sounds. The letter m says mmm, like the '
    + 'start of maame. The letter s says sss, like the start of sika. When you '
    + 'know the sound a letter makes, you can start to read words you have '
    + 'never seen.',

  mechanism:
    'Writing is just talking, written down. '
    + 'Long ago people agreed on it. '
    + 'This mark stands for that sound. '
    + 'Learn those and you can open any word. '
    + 'So the sound matters more than the name. '
    + 'We call one letter "em". '
    + 'But it makes the sound mmm. '
    + 'The sound is what helps you read.',

  recap:
    'Words are made of sounds joined up. '
    + 'Say your own name slowly. '
    + 'Listen to each sound in it.',

  method: [
    'Look at the letter.',
    'Say its sound, not its name. Say mmm, not em.',
    'Think of a word that starts with that sound.',
    'For two letters that make one sound, like sh and ch, say the one sound '
      + 'they make together.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What sound does the letter s make?',
      steps: [
        'Say it out, not its name.',
        'Think of a word: sika starts with it.',
      ],
      answer: 'sss.',
    },
    {
      level: 2,
      ask: 'What sound do s and h make when they are together?',
      steps: [
        'They stop being two sounds and become one.',
        'The sound is shh, like asking for quiet.',
      ],
      answer: 'shh, one sound.',
    },
    {
      level: 3,
      ask: 'The word chop starts with c and h. Why is it not said as "cuh huh op"?',
      steps: [
        'c and h together are one sound, ch.',
        'So the word has three sounds: ch, o, p.',
        'Said quickly that is chop.',
      ],
      answer: 'Because ch is one sound, not two.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the letter name instead of its sound.',
      why: 'Saying "em ay tee" does not get you to mat. Saying mmm, a, t does.',
    },
    {
      mistake: 'Adding an "uh" to the end of every sound.',
      why: '"muh ay tuh" does not sound like mat. Keep the sound short: mmm, '
        + 'not muh.',
    },
    {
      mistake: 'Splitting sh or ch into two sounds.',
      why: 'Those two letters make one sound together. Treat them as one.',
    },
  ],

  extension:
    'Some sounds can be spelled more than one way. '
    + 'And some letters make more than one sound. '
    + 'The c in cat is not the c in rice. '
    + 'You do not need this yet. '
    + 'But a word may not sound right one day. '
    + 'This is often why.',

  figure: {
    alt: 'Letters with the sound each one makes and a Ghanaian word that '
      + 'starts with it, and the two letter sounds sh and ch shown as one sound',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="40" y="40" font-size="16" fill="currentColor">The letter, the sound it makes, a word that starts with it</text>'
      + '<g font-size="40" font-weight="700" fill="currentColor">'
      + '<text x="70" y="110">m</text><text x="250" y="110">s</text><text x="430" y="110">t</text>'
      + '</g>'
      + '<g font-size="20" fill="#0f8a4d">'
      + '<text x="120" y="110">mmm</text><text x="290" y="110">sss</text><text x="470" y="110">t</text>'
      + '</g>'
      + '<g font-size="17" fill="currentColor">'
      + '<text x="70" y="146">maame</text><text x="250" y="146">sika</text><text x="430" y="146">tomato</text>'
      + '</g>'
      + '<path d="M40 180h560" stroke="currentColor" stroke-width="1.5"/>'
      + '<text x="40" y="218" font-size="16" fill="currentColor">Two letters, one sound</text>'
      + '<g transform="translate(70,240)">'
      + '<rect x="0" y="0" width="54" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/>'
      + '<text x="27" y="42" text-anchor="middle" font-size="32" font-weight="700" fill="currentColor">s</text>'
      + '<rect x="66" y="0" width="54" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/>'
      + '<text x="93" y="42" text-anchor="middle" font-size="32" font-weight="700" fill="currentColor">h</text>'
      + '<path d="M130 30h44" stroke="#0f8a4d" stroke-width="2.5"/>'
      + '<path d="M174 30 l -11 -7 l 0 14 z" fill="#0f8a4d"/>'
      + '<text x="212" y="42" font-size="30" font-weight="700" fill="#0f8a4d">shh</text>'
      + '</g>'
      + '<g transform="translate(360,240)">'
      + '<rect x="0" y="0" width="54" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/>'
      + '<text x="27" y="42" text-anchor="middle" font-size="32" font-weight="700" fill="currentColor">c</text>'
      + '<rect x="66" y="0" width="54" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/>'
      + '<text x="93" y="42" text-anchor="middle" font-size="32" font-weight="700" fill="currentColor">h</text>'
      + '<path d="M130 30h44" stroke="#0f8a4d" stroke-width="2.5"/>'
      + '<path d="M174 30 l -11 -7 l 0 14 z" fill="#0f8a4d"/>'
      + '<text x="212" y="42" font-size="30" font-weight="700" fill="#0f8a4d">ch</text>'
      + '</g>'
      + '<text x="320" y="368" text-anchor="middle" font-size="16" fill="#c8433a">Say the sound, not the letter’s name</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'lsp-1',
      ask: 'What sound does m make?',
      kind: 'choice',
      options: ['em', 'mmm', 'muh'],
      answer: 'mmm',
      teach: '"em" is its name and "muh" has an extra sound stuck on the end. '
        + 'The sound itself is mmm, and that is what helps you read.',
      level: 1,
    },
    {
      id: 'lsp-2',
      ask: 'How many sounds do s and h make when they are together?',
      kind: 'numeric',
      answer: '1',
      accept: ['one'],
      teach: 'One. Together they say shh. Two letters, one sound.',
      level: 2,
    },
    {
      id: 'lsp-3',
      ask: 'Which word starts with the shh sound?',
      kind: 'choice',
      options: ['sika', 'shop', 'chop'],
      answer: 'shop',
      teach: 'sika starts with sss and chop starts with ch. Only shop starts '
        + 'with shh.',
      level: 2,
    },
  ],
})

/* ── sounding out a word ──────────────────────────────────────────────────── */

teach({
  topicId: 'blend-to-read',
  source: 'WRITTEN',
  approved: true,

  idea:
    'To read a word you do not know, say each sound in it and then run them '
    + 'together. For mat, say mmm, a, t, then say it faster until it becomes '
    + 'mat. That is called blending, and it is how you read a word nobody has '
    + 'told you.',

  mechanism:
    'The sounds are the word already. '
    + 'You are just saying them too slowly to hear it. '
    + 'Say them faster and nothing changes. '
    + 'But now your ear catches the whole word. '
    + 'Not the bits. '
    + 'So do not think harder. Just say it faster.',

  recap:
    'Each letter stands for a sound. '
    + 'You need the sounds before you can join them. '
    + 'Not sure of a letter? '
    + 'Say its sound on its own first.',

  method: [
    'Point at the first letter and say its sound.',
    'Move your finger along, saying each sound as you reach it.',
    'Do not stop between them.',
    'Now say the whole thing faster.',
    'Ask yourself: is that a real word I know? If not, check a sound again.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Read the word sat.',
      steps: [
        'sss.',
        'a.',
        't.',
        'Now faster: sss-a-t.',
      ],
      answer: 'sat.',
    },
    {
      level: 2,
      ask: 'Read the word shop.',
      steps: [
        's and h are together, so that is one sound: shh.',
        'o.',
        'p.',
        'Faster: shh-o-p.',
      ],
      answer: 'shop.',
    },
    {
      level: 3,
      ask: 'A child sounds out b, a, g and says "bug". What went wrong?',
      steps: [
        'The sounds they said were right.',
        'But the middle sound changed when they joined them.',
        'Say it again slowly, holding the middle: b, aaa, g.',
        'Then speed it up without changing it.',
      ],
      answer: 'The middle sound was swapped. Say it slowly again, then speed '
        + 'up the same sounds.',
    },
  ],

  traps: [
    {
      mistake: 'Guessing the word from the first letter.',
      why: 'Seeing b and saying "boy" is guessing, not reading. Say every '
        + 'sound to the end of the word.',
    },
    {
      mistake: 'Stopping between the sounds.',
      why: 'A long gap makes three separate noises instead of one word. Run '
        + 'them together.',
    },
    {
      mistake: 'Not checking whether the answer is a real word.',
      why: 'If what comes out is not a word you have heard, one of the sounds '
        + 'was wrong. Go back and check.',
    },
  ],

  extension:
    'Long words work the same way. '
    + 'You just take them in chunks. '
    + 'Take market. Read mar. Then read ket. '
    + 'Then put the two together. '
    + 'The way never changes. Only the size of the bits.',

  figure: {
    alt: 'The word mat shown as three separate sounds being joined into one '
      + 'word, with an arrow showing the sounds running together',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="46" text-anchor="middle" font-size="17" fill="currentColor">Say each sound, then run them together</text>'
      + '<g transform="translate(90,80)">'
      + '<rect x="0" y="0" width="100" height="90" rx="10" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<text x="50" y="52" text-anchor="middle" font-size="40" font-weight="700" fill="currentColor">m</text>'
      + '<text x="50" y="78" text-anchor="middle" font-size="17" fill="#0f8a4d">mmm</text>'
      + '<rect x="130" y="0" width="100" height="90" rx="10" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<text x="180" y="52" text-anchor="middle" font-size="40" font-weight="700" fill="currentColor">a</text>'
      + '<text x="180" y="78" text-anchor="middle" font-size="17" fill="#0f8a4d">a</text>'
      + '<rect x="260" y="0" width="100" height="90" rx="10" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<text x="310" y="52" text-anchor="middle" font-size="40" font-weight="700" fill="currentColor">t</text>'
      + '<text x="310" y="78" text-anchor="middle" font-size="17" fill="#0f8a4d">t</text>'
      + '</g>'
      /* the sweep that joins them */
      + '<path d="M120 210 C 200 262, 360 262, 440 210" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M440 210 l -14 2 l 7 12 z" fill="#0f8a4d"/>'
      + '<text x="280" y="286" text-anchor="middle" font-size="16" fill="#0f8a4d">now faster, without stopping</text>'
      + '<text x="320" y="348" text-anchor="middle" font-size="46" font-weight="700" fill="currentColor">mat</text>'
      + '<text x="320" y="380" text-anchor="middle" font-size="15" fill="#c8433a">Is it a word you know? If not, check a sound.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'b2r-1',
      ask: 'Blend these sounds: s, i, t. What is the word?',
      kind: 'choice',
      options: ['sat', 'sit', 'set'],
      answer: 'sit',
      teach: 'The middle sound is i, so it is sit. If you said sat, the middle '
        + 'sound changed on the way. Say it slowly again, holding the middle.',
      level: 1,
    },
    {
      id: 'b2r-2',
      ask: 'How many sounds are in the word shop?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'Three: shh, o, p. It has four letters, but s and h make one '
        + 'sound together.',
      level: 2,
    },
    {
      id: 'b2r-3',
      ask: 'You sound out a word and get "lof". What should you do?',
      kind: 'choice',
      options: [
        'Move on, it is close enough',
        'Check the sounds again, it is not a word',
        'Guess a word that looks like it',
      ],
      answer: 'Check the sounds again, it is not a word',
      teach: 'If what comes out is not a word you have heard, one sound was '
        + 'wrong. Going back and checking is reading. Guessing is not.',
      level: 3,
    },
  ],
})
