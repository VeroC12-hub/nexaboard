/**
 * Stored lessons for Basic 5 English.
 *
 * Written at about grade 5, with a `brief` form on every topic.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── talking to the class ─────────────────────────────────────────────────── */

teach({
  topicId: 'give-a-talk',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A short talk needs three parts: say what you will cover, cover it, '
      + 'then say what it came to. '
      + 'Practise aloud, and look at the class rather than your paper.',
    method: [
      'Plan three points, no more.',
      'Practise it out loud, standing up.',
      'Look at the class. Pause instead of saying "em".',
    ],
  },

  why:
    'Your teacher says that on Friday you will stand in front '
    + 'of the class for two minutes and talk about keeping the '
    + 'school clean. '
    + 'You have an opinion about it already. '
    + 'But two minutes is a long time when you are standing up, '
    + 'and the first thing that happens is that your mind goes '
    + 'blank. '
    + 'What do you say first, and when do you stop?',

  idea:
    'A talk is not a paper read aloud. '
    + 'It has three parts: tell them what you are going to say, '
    + 'say it, then tell them what you said. '
    + 'Three points is plenty for a short talk.',

  mechanism:
    'A listener cannot go back and reread. '
    + 'That single fact explains the whole shape. '
    + 'A reader who loses the thread can look up the page; '
    + 'a listener who loses it is lost for good. '
    + 'So you say what is coming, which lets them follow, '
    + 'and you say it again at the end, which lets them keep it. '
    + 'The repetition that would be clumsy in writing is a kindness in '
    + 'speech.',

  recap:
    'A sentence is a full thought with somebody in it and '
    + 'something happening. '
    + '"The rain stopped" is a sentence, and "stopped" on its own '
    + 'is not. '
    + 'Reading aloud at a steady pace means not rushing and not '
    + 'crawling, with a small stop at every full stop. '
    + 'A talk uses both of those. '
    + 'The difference is that the words are your own and there is '
    + 'no page in front of you to hide behind.',

  method: [
    'Choose your topic and write down three points.',
    'Write an opening sentence that says what the talk is about.',
    'Write a closing sentence that sums it up.',
    'Make notes, not a script. Keywords, not sentences.',
    'Practise out loud, standing, at least twice.',
    'On the day, look at the class, not at your notes.',
    'When you lose your place, pause. A pause sounds like thinking.',
  ],

  worked: [
    {
      level: 4,
      ask: 'How many main points should a short talk have?',
      steps: [
        'A listener cannot go back and check.',
        'More than three and they lose track.',
      ],
      answer: 'About three.',
    },
    {
      level: 4,
      ask: 'Why make notes rather than write the talk out in full?',
      steps: [
        'A full script invites you to read it.',
        'Reading means looking down, not at the class.',
        'Notes force you to speak.',
      ],
      answer: 'Because a script turns a talk into reading aloud.',
    },
    {
      level: 5,
      ask: 'Somebody asks a question you cannot answer. What do you do?',
      steps: [
        'Guessing is worse than not knowing.',
        'Saying so costs nothing and keeps your credit.',
      ],
      answer: 'Say you do not know, and offer to find out. '
        + 'That is a better answer than a made up one.',
    },
  ],

  traps: [
    {
      mistake: 'Reading the whole talk off a page.',
      why: 'The class stops listening within a minute. '
        + 'Use notes with keywords only.',
    },
    {
      mistake: 'Cramming every fact you have into the talk.',
      why: 'Three points remembered beats ten points forgotten.',
    },
    {
      mistake: 'Filling every pause with "em".',
      why: 'Silence sounds like thinking. '
        + '"Em" sounds like panic. Just stop for a moment.',
    },
  ],

  extension:
    'Watch somebody give a talk you enjoyed and count their points. '
    + 'It will usually be three or four. '
    + 'Watch one you found hard to follow and you will often find there '
    + 'were eight.',

  figure: {
    alt: 'Three boxes stacked down the page with arrows running from '
      + 'each to the next. The top box is the opening, which says '
      + 'what the talk is about. The middle box is the largest and '
      + 'holds three smaller boxes marked Point 1, Point 2 and '
      + 'Point 3. The bottom box is the closing, which says what it '
      + 'came to.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<rect x="130" y="18" width="380" height="58"/>'
      + '<text x="320" y="42" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">Opening</text>'
      + '<text x="320" y="66" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">say what the talk is about</text>'
      + '<line x1="320" y1="76" x2="320" y2="104"/>'
      + '<polygon points="320,116 313,103 327,103" fill="currentColor" stroke="none"/>'
      + '<rect x="50" y="120" width="540" height="160" stroke="#0f8a4d"/>'
      + '<text x="320" y="146" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">Middle: three points</text>'
      + '<rect x="74" y="162" width="152" height="100" stroke="#0f8a4d"/>'
      + '<text x="150" y="218" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Point 1</text>'
      + '<rect x="244" y="162" width="152" height="100" stroke="#0f8a4d"/>'
      + '<text x="320" y="218" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Point 2</text>'
      + '<rect x="414" y="162" width="152" height="100" stroke="#0f8a4d"/>'
      + '<text x="490" y="218" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Point 3</text>'
      + '<line x1="320" y1="280" x2="320" y2="308"/>'
      + '<polygon points="320,320 313,307 327,307" fill="currentColor" stroke="none"/>'
      + '<rect x="130" y="324" width="380" height="58"/>'
      + '<text x="320" y="348" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">Closing</text>'
      + '<text x="320" y="372" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">say what it came to</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'gt-1',
      ask: 'How many main points suit a short talk?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'About three. A listener cannot go back and check, '
        + 'so more than that gets lost.',
      level: 4,
    },
    {
      id: 'gt-2',
      ask: 'Why use notes instead of a full script?',
      kind: 'choice',
      options: [
        'A script makes you read instead of speak',
        'Notes are quicker to write',
        'Scripts are not allowed',
      ],
      answer: 'A script makes you read instead of speak',
      teach: 'Reading means looking down. '
        + 'Notes force you to look at the class and use your own words.',
      level: 4,
    },
    {
      id: 'gt-3',
      ask: 'You cannot answer a question. What is best?',
      kind: 'choice',
      options: [
        'Say you do not know and offer to find out',
        'Guess confidently',
        'Change the subject',
      ],
      answer: 'Say you do not know and offer to find out',
      teach: 'A guess that turns out wrong costs you more than admitting it. '
        + 'Saying so costs nothing.',
      level: 5,
    },
    {
      id: 'gt-4',
      ask: 'What are the three parts of a short talk?',
      kind: 'choice',
      options: [
        'Greet the class, read your paper, sit down',
        'Say what you will cover, cover it, then say what it came to',
        'Tell a joke, give ten facts, say thank you',
      ],
      answer: 'Say what you will cover, cover it, then say what it came to',
      teach: 'A talk is not a paper read aloud. '
        + 'Tell them what is coming, say it, then sum it up so they keep it.',
      level: 2,
    },
    {
      id: 'gt-5',
      ask: 'Where should you look while you give your talk?',
      kind: 'choice',
      options: ['At your notes', 'At the class', 'At the floor'],
      answer: 'At the class',
      teach: 'Looking down at a page means you are reading, not talking. '
        + 'Look at the class, and glance at your notes only when you need to.',
      level: 2,
    },
    {
      id: 'gt-6',
      ask: 'You lose your place in the middle of your talk. '
        + 'What should you do?',
      kind: 'choice',
      options: [
        'Say "em" until you remember',
        'Start again from the beginning',
        'Pause for a moment',
      ],
      answer: 'Pause for a moment',
      teach: 'Filling the gap with "em" sounds like panic. '
        + 'A short silence sounds like thinking, and it gives you time to '
        + 'find your place.',
      level: 2,
    },
    {
      id: 'gt-7',
      ask: 'What should your notes for a talk have in them?',
      kind: 'choice',
      options: [
        'Every word of the talk',
        'Keywords, not full sentences',
        'Nothing at all',
      ],
      answer: 'Keywords, not full sentences',
      teach: 'A full script tempts you to read it out. '
        + 'Keywords remind you of each point and make you use your own words.',
      level: 3,
    },
    {
      id: 'gt-8',
      ask: 'How should you practise a talk?',
      kind: 'choice',
      options: [
        'Silently in your head, once',
        'Out loud, standing up, at least twice',
        'Not at all, so it sounds fresh',
      ],
      answer: 'Out loud, standing up, at least twice',
      teach: 'Reading it in your head is not the same as saying it. '
        + 'Practise the way you will give it: out loud and standing.',
      level: 3,
    },
    {
      id: 'gt-9',
      ask: 'Why do you say your main points again at the end of a talk?',
      kind: 'choice',
      options: [
        'To make the talk longer',
        'Because you forgot you said them',
        'A listener cannot go back and reread',
      ],
      answer: 'A listener cannot go back and reread',
      teach: 'A reader who misses something can look back up the page. '
        + 'A listener cannot, so saying it again helps them keep it.',
      level: 3,
    },
    {
      id: 'gt-10',
      ask: 'Yaw plans a two minute talk with eight points. '
        + 'What should he change?',
      kind: 'choice',
      options: [
        'Talk faster to fit them all in',
        'Keep all eight points',
        'Cut it to about three points',
      ],
      answer: 'Cut it to about three points',
      teach: 'Talking faster does not help, because listeners still lose '
        + 'track. '
        + 'Three points remembered beats eight points forgotten.',
      level: 3,
    },
  ],
})

/* ── working out what is not said ─────────────────────────────────────────── */

teach({
  topicId: 'inference-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An inference is a conclusion the writer did not state but the text '
      + 'supports. '
      + 'You must be able to point at the words that led you to it.',
    method: [
      'Notice what the character does or says.',
      'Ask what that suggests.',
      'Point at the exact words. No words, no inference.',
    ],
  },

  why:
    'A story says a boy stood at the gate, looked at the dog, '
    + 'then walked the long way round the house. '
    + 'It never says he was afraid. '
    + 'Your teacher asks how the boy felt, and she will not '
    + 'accept I just know. '
    + 'How do you prove a feeling the writer never named?',

  idea:
    'Writers often show rather than tell. '
    + 'A passage may never say a boy was frightened, '
    + 'and tell you he backed away and his voice shook. '
    + 'Working that out is called inference. '
    + 'It is not guessing, because the words are there.',

  mechanism:
    'The line between inference and guessing is a single test: '
    + 'can you point at the words? '
    + 'If you can, it is an inference and you can defend it. '
    + 'If you cannot, you brought it from your own head, however reasonable '
    + 'it feels. '
    + 'This matters because two readers will often infer different things, '
    + 'and the one who can quote the line is the one who is right. '
    + 'Writing "he was frightened, because it says his voice shook" '
    + 'is a complete answer. Writing "he was frightened" is half of one.',

  recap:
    'Some answers are written in a passage in plain words. '
    + 'If the passage says "Kofi was late because the lorry broke '
    + 'down", and the question asks why Kofi was late, you can '
    + 'put your finger on the very line that says it. '
    + 'That is the rule for every answer: show the words it came '
    + 'from. '
    + 'This lesson keeps that same rule for answers the passage '
    + 'never writes down.',

  method: [
    'Read the passage.',
    'Notice what characters do, say and notice.',
    'Ask what that behaviour suggests about how they feel.',
    'Find the exact words that made you think it.',
    'Write your answer and the words together.',
    'No words to point at? Then you are guessing. Think again.',
  ],

  worked: [
    {
      level: 4,
      ask: 'The passage says: "Kofi stared at the floor and would not answer." '
        + 'How does he feel?',
      steps: [
        'He will not look up and will not speak.',
        'Those are things people do when ashamed or afraid.',
      ],
      answer: 'Ashamed or afraid, '
        + 'because he stared at the floor and would not answer.',
    },
    {
      level: 5,
      ask: 'Somebody says the character is poor because he walked to school. '
        + 'Is that a fair inference?',
      steps: [
        'Walking to school is extremely common.',
        'It does not point to poverty on its own.',
        'The reader brought that idea with them.',
      ],
      answer: 'No. The words do not support it. '
        + 'It is a guess dressed up as an inference.',
    },
    {
      level: 5,
      ask: 'Why should you give the words as well as the answer?',
      steps: [
        'Two readers can infer different things.',
        'The words are what settle it.',
      ],
      answer: 'Because the words are your evidence, '
        + 'and without them your answer cannot be defended.',
    },
  ],

  traps: [
    {
      mistake: 'Inferring from your own experience rather than the text.',
      why: 'Your own experience is not evidence about this character. '
        + 'Point at the text.',
    },
    {
      mistake: 'Giving the answer with no words to support it.',
      why: 'Half the mark is the evidence. '
        + 'It is also the only thing that makes your answer better than '
        + 'somebody else’s.',
    },
    {
      mistake: 'Thinking inference means anything you can imagine.',
      why: 'It must be supported. '
        + 'Supported and imaginable are not the same.',
    },
  ],

  extension:
    'Good writers rely on inference constantly, '
    + 'because being told how to feel is dull and working it out is not. '
    + 'Once you start noticing it, you will see how little a strong writer '
    + 'actually states outright.',

  figure: {
    alt: 'Two columns side by side. On the left, headed an '
      + 'inference, a box holding the words his voice shook, '
      + 'underlined, with an arrow down to the conclusion he was '
      + 'frightened, and a note that you can point at the words. On '
      + 'the right, headed a guess, a box holding he walked to '
      + 'school, with an arrow down to his family is poor, and a '
      + 'note that no words say that.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="160" y="28" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">an inference</text>'
      + '<rect x="16" y="44" width="288" height="92"/>'
      + '<text x="160" y="74" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">The passage says:</text>'
      + '<text x="160" y="108" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">his voice shook</text>'
      + '<line x1="68" y1="118" x2="252" y2="118" stroke="#0f8a4d"/>'
      + '<line x1="160" y1="136" x2="160" y2="178"/>'
      + '<polygon points="160,190 153,177 167,177" fill="currentColor" stroke="none"/>'
      + '<rect x="16" y="194" width="288" height="72" stroke="#0f8a4d"/>'
      + '<text x="160" y="238" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">he was frightened</text>'
      + '<text x="160" y="300" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">You can point at the words,</text>'
      + '<text x="160" y="322" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">so you can defend it.</text>'
      + '<text x="480" y="28" font-size="19" text-anchor="middle" fill="#c8433a" stroke="none">a guess</text>'
      + '<rect x="336" y="44" width="288" height="92"/>'
      + '<text x="480" y="74" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">The passage says:</text>'
      + '<text x="480" y="108" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">he walked to school</text>'
      + '<line x1="480" y1="136" x2="480" y2="178"/>'
      + '<polygon points="480,190 473,177 487,177" fill="#c8433a" stroke="none"/>'
      + '<rect x="336" y="194" width="288" height="72" stroke="#c8433a"/>'
      + '<text x="480" y="238" font-size="19" text-anchor="middle" fill="#c8433a" stroke="none">his family is poor</text>'
      + '<text x="480" y="300" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">No words say that. You</text>'
      + '<text x="480" y="322" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">brought it from your head.</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'if-1',
      ask: 'What makes an inference different from a guess?',
      kind: 'choice',
      options: [
        'You can point at the words that support it',
        'It sounds more likely',
        'It comes from experience',
      ],
      answer: 'You can point at the words that support it',
      teach: 'Evidence is the whole difference. '
        + 'No words, no inference.',
      level: 4,
    },
    {
      id: 'if-2',
      ask: '"Kofi stared at the floor and would not answer." What can you '
        + 'infer?',
      kind: 'choice',
      options: [
        'He feels ashamed or afraid',
        'He is tired',
        'He cannot hear',
      ],
      answer: 'He feels ashamed or afraid',
      teach: 'Not looking up and not speaking are what people do when '
        + 'ashamed or afraid. The words support it.',
      level: 4,
    },
    {
      id: 'if-3',
      ask: 'Why give the words as well as your answer?',
      kind: 'choice',
      options: [
        'They are the evidence that makes your answer defensible',
        'To make the answer longer',
        'To show you read it',
      ],
      answer: 'They are the evidence that makes your answer defensible',
      teach: 'Two readers can infer differently. '
        + 'The one who quotes the line is the one who can be shown right.',
      level: 5,
    },
    {
      id: 'if-4',
      ask: 'Writers often show a feeling instead of naming it. '
        + 'What is working out that feeling called?',
      kind: 'choice',
      options: ['Inference', 'Spelling', 'Punctuation'],
      answer: 'Inference',
      teach: 'Working out what the writer did not say, from the words they '
        + 'did write, is called inference.',
      level: 2,
    },
    {
      id: 'if-5',
      ask: '"Abena smiled widely and hugged her new bag." '
        + 'How does Abena feel?',
      kind: 'choice',
      options: ['Angry', 'Afraid', 'Happy'],
      answer: 'Happy',
      teach: 'Look at what she does. '
        + 'People smile widely and hug things when they are pleased.',
      level: 2,
    },
    {
      id: 'if-6',
      ask: '"Abena smiled widely and hugged her new bag." '
        + 'Which words show how she feels?',
      kind: 'choice',
      options: ['Abena', 'her new bag', 'smiled widely and hugged her new bag'],
      answer: 'smiled widely and hugged her new bag',
      teach: 'Her name and the bag are not clues to a feeling. '
        + 'The actions, smiling and hugging, are the evidence.',
      level: 3,
    },
    {
      id: 'if-7',
      ask: '"Adwoa slammed the door and would not look at her brother." '
        + 'How does Adwoa feel?',
      kind: 'choice',
      options: ['Sleepy', 'Angry', 'Excited'],
      answer: 'Angry',
      teach: 'Slamming a door and refusing to look at somebody are things '
        + 'people do when they are cross. '
        + 'The words support it.',
      level: 3,
    },
    {
      id: 'if-8',
      ask: '"The boy looked at the dog, then walked the long way round the '
        + 'house." '
        + 'How does the boy feel about the dog?',
      kind: 'choice',
      options: ['Happy to see it', 'Afraid of it', 'Hungry'],
      answer: 'Afraid of it',
      teach: 'He keeps away from the dog on purpose. '
        + 'That points to fear, even though the writer never says "afraid".',
      level: 3,
    },
    {
      id: 'if-9',
      ask: 'Which answer is complete?',
      kind: 'choice',
      options: [
        'Kofi was frightened',
        'Kofi was frightened, because it says his voice shook',
        'Kofi was frightened, I just know',
      ],
      answer: 'Kofi was frightened, because it says his voice shook',
      teach: 'An answer needs the feeling and the words that show it. '
        + '"I just know" is not evidence.',
      level: 3,
    },
    {
      id: 'if-10',
      ask: 'Fuseini says a character is rich because she lives in Accra. '
        + 'The story says nothing about money. '
        + 'Is that an inference?',
      kind: 'choice',
      options: [
        'Yes, because it sounds likely',
        'No, it is a guess, because no words support it',
        'Yes, because many people in Accra are rich',
      ],
      answer: 'No, it is a guess, because no words support it',
      teach: 'Ask: can you point at the words? '
        + 'Living in Accra does not show anything about money. '
        + 'Fuseini brought that idea from his own head.',
      level: 4,
    },
  ],
})

/* ── meaning from the sentence around it ──────────────────────────────────── */

teach({
  topicId: 'vocabulary-in-context',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'You can often work out a new word from the sentence around it. '
      + 'Look for a definition, an example, or an opposite nearby.',
    method: [
      'Read the whole sentence, and the one after.',
      'Look for a clue: a definition, an example or a contrast.',
      'Try your meaning in the sentence and see if it fits.',
    ],
  },

  why:
    'You are reading a story and you reach a word '
    + 'you have never seen. '
    + 'There is no dictionary in the room and nobody to ask. '
    + 'You can stop, which means you never find out what happens. '
    + 'Or you can jump over it and hope. '
    + 'Neither of those is any good. '
    + 'Is there a third thing you can do?',

  idea:
    'When you meet a word you do not know, '
    + 'do not stop and do not skip it. '
    + 'The sentence around it usually tells you roughly what it means.',

  mechanism:
    'Writers leave clues without meaning to. '
    + 'A few shapes are worth knowing, '
    + 'and the table below sets them out. '
    + 'You will rarely get the exact dictionary meaning this way. '
    + 'You will usually get close enough to keep reading. '
    + 'That is the point.',

  recap:
    'A passage is a few sentences written one after another '
    + 'about one thing. '
    + 'When a question asks about it, '
    + 'the answer is somewhere in those lines. '
    + 'Your job is to find the line it sits in. '
    + 'Take this one: "The soil was dry and nothing would grow." '
    + 'Ask what the soil was like, '
    + 'and the first half of that sentence answers it. '
    + 'This lesson does something a bit different. '
    + 'It uses the lines around a word '
    + 'to work out the word itself.',

  method: [
    'Read the whole sentence, then the one after it.',
    'Look for a clue near the word, using the table of clues.',
    'Guess a meaning and put it in place of the word.',
    'Does the sentence still make sense? Then you are close enough.',
    'For an important word, check a dictionary afterwards.',
  ],

  worked: [
    {
      level: 4,
      ask: '"The soil was arid, so dry that nothing would grow." '
        + 'What does arid mean?',
      steps: [
        'The meaning follows straight after the comma.',
      ],
      answer: 'Very dry.',
    },
    {
      level: 5,
      ask: '"Unlike his talkative sister, Kwame was taciturn." '
        + 'What does taciturn mean?',
      steps: [
        '"Unlike" signals a contrast.',
        'His sister is talkative.',
        'So he is the opposite.',
      ],
      answer: 'Saying little, quiet.',
    },
    {
      level: 5,
      ask: 'Why check an important word in a dictionary afterwards?',
      steps: [
        'Context gives you a rough meaning.',
        'Rough is enough to keep reading.',
        'It is not enough to use the word yourself.',
      ],
      answer: 'Because context gets you close, '
        + 'and using a word yourself needs it exact.',
    },
  ],

  traps: [
    {
      mistake: 'Stopping dead at an unknown word.',
      why: 'You lose the thread of the whole passage for one word. '
        + 'Work it out roughly and keep going.',
    },
    {
      mistake: 'Guessing from what the word looks like.',
      why: 'Words that look alike often are not related. '
        + 'Use the sentence, not the spelling.',
    },
    {
      mistake: 'Trusting a context guess enough to use the word yourself.',
      why: 'Close enough to read is not close enough to write. '
        + 'Check it before you use it.',
    },
  ],

  extension:
    'This is how almost all your vocabulary was learned, '
    + 'long before anybody gave you a dictionary. '
    + 'A child meets a word again and again in different sentences, '
    + 'until its meaning settles. '
    + 'Reading widely works for exactly this reason.',

  figure: {
    alt: 'The word arid in a box at the top, marked as a word the '
      + 'reader does not know. Below it a wider box holds the words '
      + 'next to it in the sentence, so dry that nothing would '
      + 'grow, with an arrow pointing up from those words to the '
      + 'unknown word. Underneath, three lines say to try your '
      + 'meaning in place of the word and see whether the sentence '
      + 'still makes sense.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="40" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">a word you do not know</text>'
      + '<rect x="248" y="56" width="144" height="62" stroke="#c8433a"/>'
      + '<text x="320" y="98" font-size="26" text-anchor="middle" fill="#c8433a" stroke="none">arid</text>'
      + '<line x1="320" y1="182" x2="320" y2="130"/>'
      + '<polygon points="320,118 313,131 327,131" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="56" y="186" width="528" height="82" stroke="#0f8a4d"/>'
      + '<text x="320" y="216" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the words next to it:</text>'
      + '<text x="320" y="248" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">so dry that nothing would grow</text>'
      + '<text x="320" y="308" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Try your meaning in place of the word.</text>'
      + '<text x="320" y="336" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Does the sentence still make sense?</text>'
      + '<text x="320" y="364" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Then you are close enough to read on.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'The clues a sentence leaves about a word you do not know',
    columns: [
      'Clue in the sentence',
      'Words to look for',
      'Example',
    ],
    rows: [
      [
        'The meaning, straight out',
        'a comma, or "which"',
        'arid, so dry that nothing would grow',
      ],
      [
        'An example of it',
        '"such as", "for instance"',
        'tubers such as yam and cocoyam',
      ],
      [
        'A contrast with it',
        '"but", "unlike", "however"',
        'unlike his talkative sister, he was taciturn',
      ],
      [
        'What else could fit',
        'none, use the whole sentence',
        'she tethered the goat to the post',
      ],
    ],
    note: 'Context gets you close enough to keep reading. For a word you '
      + 'mean to use yourself, check a dictionary afterwards.',
  }],
  questions: [
    {
      id: 'vc-1',
      ask: '"The soil was arid, so dry that nothing would grow." '
        + 'What does arid mean?',
      kind: 'choice',
      options: ['Very dry', 'Very rich', 'Very rocky'],
      answer: 'Very dry',
      teach: 'The meaning is given straight after the comma. '
        + 'That is the easiest clue there is.',
      level: 4,
    },
    {
      id: 'vc-2',
      ask: 'Which word signals that a contrast is coming?',
      kind: 'choice',
      options: ['Unlike', 'Such as', 'And'],
      answer: 'Unlike',
      teach: '"Unlike", "but" and "however" all tell you the next thing is '
        + 'opposite to the last.',
      level: 5,
    },
    {
      id: 'vc-3',
      ask: 'What should you do when you meet a word you do not know?',
      kind: 'choice',
      options: [
        'Work it out from the sentence and keep reading',
        'Stop and look it up at once',
        'Skip the sentence',
      ],
      answer: 'Work it out from the sentence and keep reading',
      teach: 'Stopping loses the thread of the passage. '
        + 'Check important words afterwards.',
      level: 4,
    },
    {
      id: 'vc-4',
      ask: 'Which words tell you that an example is coming?',
      kind: 'choice',
      options: ['unlike', 'such as', 'however'],
      answer: 'such as',
      teach: '"Such as" and "for instance" bring an example. '
        + '"Unlike" and "however" bring a contrast.',
      level: 2,
    },
    {
      id: 'vc-5',
      ask: 'After you guess what a word means, how do you check your guess?',
      kind: 'choice',
      options: [
        'Look at how the word is spelled',
        'Put it in place of the word and see if the sentence makes sense',
        'Count its letters',
      ],
      answer: 'Put it in place of the word and see if the sentence makes sense',
      teach: 'What a word looks like is not a good clue. '
        + 'Swap your meaning into the sentence. '
        + 'If it still makes sense, you are close enough.',
      level: 2,
    },
    {
      id: 'vc-6',
      ask: '"Unlike his talkative sister, Kwame was taciturn." '
        + 'What does taciturn mean?',
      kind: 'choice',
      options: ['Very talkative', 'Quiet, saying little', 'Very tall'],
      answer: 'Quiet, saying little',
      teach: '"Unlike" signals a contrast. '
        + 'His sister talks a lot, so Kwame is the opposite.',
      level: 3,
    },
    {
      id: 'vc-7',
      ask: '"The market sold tubers such as yam and cocoyam." '
        + 'What are tubers?',
      kind: 'choice',
      options: [
        'Fruits like mango',
        'Foods like yam and cocoyam',
        'Drinks like water',
      ],
      answer: 'Foods like yam and cocoyam',
      teach: '"Such as" gives examples. '
        + 'Yam and cocoyam are examples of tubers, so tubers are foods of '
        + 'that kind.',
      level: 3,
    },
    {
      id: 'vc-8',
      ask: '"She tethered the goat to the post so it could not wander off." '
        + 'What does tethered mean?',
      kind: 'choice',
      options: ['Fed', 'Painted', 'Tied'],
      answer: 'Tied',
      teach: 'There is no clue word here, so use the whole sentence. '
        + 'Something done to a goat and a post that stops it wandering off '
        + 'is tying.',
      level: 3,
    },
    {
      id: 'vc-9',
      ask: 'Adwoa worked out a new word from the sentence. '
        + 'She wants to use it in her own story. '
        + 'What should she do first?',
      kind: 'choice',
      options: [
        'Use it straight away',
        'Check it in a dictionary',
        'Never use it',
      ],
      answer: 'Check it in a dictionary',
      teach: 'Context gets you close enough to keep reading. '
        + 'Using a word yourself needs the exact meaning, so check it.',
      level: 3,
    },
    {
      id: 'vc-10',
      ask: '"In the harmattan the well was dry, but in the rainy season it '
        + 'was brimming." '
        + 'What does brimming mean?',
      kind: 'choice',
      options: ['Empty', 'Full to the top', 'Broken'],
      answer: 'Full to the top',
      teach: '"But" signals a contrast. '
        + 'The well was dry, so in the rainy season it was the opposite: '
        + 'full.',
      level: 4,
    },
  ],
})

/* ── writing a story ──────────────────────────────────────────────────────── */

teach({
  topicId: 'narrative',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A story needs a beginning, a middle and an ending. '
      + 'Something must go wrong in the middle, '
      + 'or there is nothing to tell.',
    method: [
      'Beginning: who, where, and what they want.',
      'Middle: something goes wrong.',
      'Ending: it is settled, and something has changed.',
    ],
  },

  why:
    'Something happened at a funeral in your home town and you '
    + 'have told your friends about it four times. '
    + 'Now your teacher asks you to write it down. '
    + 'On paper the whole thing comes out in three lines and '
    + 'sounds like nothing. '
    + 'The event has not changed, so what was your telling of it '
    + 'doing that the three lines are not?',

  idea:
    'A story has three parts: a beginning, a middle and an ending. '
    + 'The middle is where something goes wrong, '
    + 'and without that there is nothing to tell.',

  mechanism:
    'The middle is the story. '
    + 'A piece where nothing goes wrong is a description, not a story, '
    + 'however nicely it is written. '
    + 'The reader keeps reading because they want to know how the trouble '
    + 'ends, '
    + 'and if there is no trouble there is no reason to turn the page. '
    + 'The other half of it is that somebody should be different at the end: '
    + 'they learned something, lost something, or got what they wanted '
    + 'and found it was not what they expected.',

  recap:
    'A paragraph is a group of sentences about one idea. '
    + 'Write four sentences about your journey to school, then '
    + 'start a new paragraph when you move on to the classroom. '
    + 'The past tense is for things already finished: walked, not '
    + 'walk, and said, not say. '
    + 'Keeping it the same all the way through stops you slipping '
    + 'from walked into walks halfway down the page. '
    + 'A story is several such paragraphs, nearly always in the '
    + 'past.',

  method: [
    'Decide who the story is about and what they want.',
    'Decide what gets in the way. This is the most important choice.',
    'Beginning: set the scene and show what they want. Keep it short.',
    'Middle: the trouble, and their attempts to deal with it.',
    'Ending: how it is settled.',
    'Ask: is anybody different at the end? If not, add that.',
    'Stay in one tense throughout.',
  ],

  worked: [
    {
      level: 4,
      ask: 'What is missing from this: "Ama went to the market, bought fish '
        + 'and came home."?',
      steps: [
        'She wanted something and she got it.',
        'Nothing went wrong.',
      ],
      answer: 'A problem. Without one there is nothing to tell.',
    },
    {
      level: 5,
      ask: 'How could you make that into a story?',
      steps: [
        'Put something in the way.',
        'Perhaps the money is lost, or the fish is gone, or it starts to '
          + 'rain.',
        'Then show what she does about it.',
      ],
      answer: 'Give her a problem: she loses the money on the way. '
        + 'Now there is a middle.',
    },
    {
      level: 5,
      ask: 'Why should somebody be different at the end?',
      steps: [
        'If nothing changed, the story made no difference.',
        'The reader wants the trouble to have meant something.',
      ],
      answer: 'Because a change is what makes the ending feel like an ending '
        + 'rather than a stop.',
    },
  ],

  traps: [
    {
      mistake: 'Spending most of the story on the beginning.',
      why: 'Readers wait for the trouble. '
        + 'Set the scene in a paragraph and get to it.',
    },
    {
      mistake: 'Ending with "and then I woke up".',
      why: 'It takes away everything that happened. '
        + 'The reader’s attention is paid back with nothing.',
    },
    {
      mistake: 'Changing tense halfway.',
      why: 'The reader loses when it is happening. '
        + 'Pick past or present and keep it.',
    },
  ],

  extension:
    'Many Ghanaian folktales follow this shape exactly. '
    + 'Ananse wants something, his cleverness creates a problem, '
    + 'and the ending leaves him worse off than when he started. '
    + 'The structure is older than any book.',

  figure: {
    alt: 'A line running left to right that climbs to a peak in the '
      + 'middle and comes down again. The peak is marked with a dot '
      + 'and labelled something goes wrong. Two dashed lines divide '
      + 'the page into three parts, labelled Beginning, who and '
      + 'what they want, Middle, the trouble and what they do, and '
      + 'Ending, somebody has changed.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<polyline points="30,252 120,246 220,172 320,92 420,132 520,222 610,246" stroke-width="4"/>'
      + '<circle cx="320" cy="92" r="11" fill="#0f8a4d" stroke="none"/>'
      + '<text x="320" y="62" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">something goes wrong</text>'
      + '<line x1="215" y1="72" x2="215" y2="272" stroke-width="2" stroke-dasharray="6 6"/>'
      + '<line x1="425" y1="72" x2="425" y2="272" stroke-width="2" stroke-dasharray="6 6"/>'
      + '<text x="112" y="302" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">Beginning</text>'
      + '<text x="112" y="328" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">who, and what they want</text>'
      + '<text x="320" y="302" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">Middle</text>'
      + '<text x="320" y="328" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the trouble, and what they do</text>'
      + '<text x="522" y="302" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">Ending</text>'
      + '<text x="522" y="328" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">somebody has changed</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What each part of a story has to do',
    columns: [
      'Part',
      'What happens there',
      'How much space',
    ],
    rows: [
      ['Beginning', 'Who it is about, and what they want', 'A paragraph'],
      [
        'Middle',
        'Something goes wrong, and they deal with it',
        'Most of the story',
      ],
      [
        'Ending',
        'It is settled, and somebody has changed',
        'A paragraph or two',
      ],
    ],
    note: 'The middle is the part to plan first, because everything else '
      + 'follows from what goes wrong.',
  }],
  questions: [
    {
      id: 'nr-1',
      ask: 'What must happen in the middle of a story?',
      kind: 'choice',
      options: [
        'Something goes wrong',
        'The setting is described',
        'The characters are introduced',
      ],
      answer: 'Something goes wrong',
      teach: 'Without trouble there is nothing for the reader to wonder '
        + 'about, and nothing to tell.',
      level: 4,
    },
    {
      id: 'nr-2',
      ask: 'Why is "and then I woke up" a weak ending?',
      kind: 'choice',
      options: [
        'It cancels everything that happened',
        'It is too short',
        'It is in the wrong tense',
      ],
      answer: 'It cancels everything that happened',
      teach: 'The reader followed the trouble. '
        + 'Telling them it never happened pays that attention back with '
        + 'nothing.',
      level: 5,
    },
    {
      id: 'nr-3',
      ask: 'What makes an ending feel finished?',
      kind: 'choice',
      options: [
        'Somebody is different from how they started',
        'It is long',
        'Everybody is happy',
      ],
      answer: 'Somebody is different from how they started',
      teach: 'A change is what turns a stop into an ending. '
        + 'It need not be a happy change.',
      level: 5,
    },
    {
      id: 'nr-4',
      ask: 'What are the three parts of a story?',
      kind: 'choice',
      options: [
        'A greeting, a body and a closing',
        'A title, a picture and a name',
        'A beginning, a middle and an ending',
      ],
      answer: 'A beginning, a middle and an ending',
      teach: 'A greeting, body and closing belong to a letter. '
        + 'A story has a beginning, a middle and an ending.',
      level: 1,
    },
    {
      id: 'nr-5',
      ask: 'What goes in the beginning of a story?',
      kind: 'choice',
      options: [
        'How the trouble is settled',
        'Who it is about, and what they want',
        'The biggest problem',
      ],
      answer: 'Who it is about, and what they want',
      teach: 'The beginning sets the scene. '
        + 'The trouble comes in the middle and is settled at the end.',
      level: 2,
    },
    {
      id: 'nr-6',
      ask: 'Which part should take up most of the story?',
      kind: 'choice',
      options: ['The beginning', 'The ending', 'The middle'],
      answer: 'The middle',
      teach: 'Readers wait for the trouble. '
        + 'Keep the beginning short and give most of the space to the middle.',
      level: 2,
    },
    {
      id: 'nr-7',
      ask: '"Ama went to the market, bought fish and came home." '
        + 'What is missing?',
      kind: 'choice',
      options: ['A name', 'A problem', 'A place'],
      answer: 'A problem',
      teach: 'Ama wanted something and got it. '
        + 'Nothing went wrong, so there is nothing to tell.',
      level: 2,
    },
    {
      id: 'nr-8',
      ask: 'Which middle turns Ama’s trip into a story?',
      kind: 'choice',
      options: [
        'She walks to the market',
        'She buys fish and goes home',
        'She loses her money on the way and must find a way to buy the fish',
      ],
      answer: 'She loses her money on the way and must find a way to buy the fish',
      teach: 'A middle needs trouble, and then what she does about it. '
        + 'The other two have nothing going wrong.',
      level: 3,
    },
    {
      id: 'nr-9',
      ask: 'A story says "Kofi walked to school." '
        + 'Later it says "Kofi runs into the class." '
        + 'What is wrong?',
      kind: 'choice',
      options: [
        'Kofi is not named',
        'The tense changes from past to present',
        'There is no ending',
      ],
      answer: 'The tense changes from past to present',
      teach: 'Walked is past and runs is present. '
        + 'Pick one tense and keep it, or the reader loses when it is '
        + 'happening.',
      level: 3,
    },
    {
      id: 'nr-10',
      ask: 'Which part of a story should you plan first?',
      kind: 'choice',
      options: [
        'The title',
        'The last line',
        'The middle, where something goes wrong',
      ],
      answer: 'The middle, where something goes wrong',
      teach: 'Everything else follows from what goes wrong. '
        + 'Once the trouble is chosen, the beginning and the ending fall '
        + 'into place.',
      level: 3,
    },
  ],
})

/* ── writing a letter ─────────────────────────────────────────────────────── */

teach({
  topicId: 'letter-writing',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An informal letter has your address, the date, a greeting, '
      + 'the body, and a closing with your name. '
      + 'Write it to a real person about something real.',
    method: [
      'Your address top right, then the date under it.',
      'Greeting on the left: Dear Auntie.',
      'Body in paragraphs, then a closing and your name.',
    ],
  },

  why:
    'Your cousin in Takoradi has not seen you for a year and '
    + 'there is no phone in the house. '
    + 'You write to her and the letter goes in the post. '
    + 'It will be read without you there to explain anything, by '
    + 'somebody who cannot see when you wrote it or where you '
    + 'are. '
    + 'So what has to be on that paper besides your news?',

  notation:
    'The part at the top right, with your address and the date, '
    + 'is called the heading. '
    + 'The line that begins Dear Ama is called the greeting, and '
    + 'it always ends with a comma. '
    + 'The part carrying your news is called the body, and the '
    + 'ending, such as Your loving cousin, is called the closing. '
    + 'Leaving the comma off the greeting is the commonest way to '
    + 'lose a mark.',

  idea:
    'An informal letter is one to a friend or a relative. '
    + 'It has a set layout: your address at the top right, '
    + 'the date below it, a greeting on the left, '
    + 'then the body, then a closing and your name.',

  mechanism:
    'The layout is not fussiness, it is usefulness. '
    + 'Your address is there so they can reply. '
    + 'The date is there because a letter may be read long after it arrives, '
    + 'and because in a year nobody will remember when it was sent. '
    + 'Both exist to serve the person receiving it. '
    + 'The body follows the same rule as any writing: '
    + 'one idea per paragraph, '
    + 'and the first paragraph should say why you are writing, '
    + 'because they are wondering.',

  recap:
    'A paragraph holds one idea, and you start a new one when '
    + 'the idea changes. '
    + 'Punctuation marks are the signs that tell a reader where '
    + 'to stop. '
    + 'A full stop ends a sentence, a comma makes a short pause, '
    + 'and a question mark closes a question. '
    + '"Ama, are you coming?" needs both the comma and the question mark. '
    + 'A letter is paragraphs and punctuation like that, set '
    + 'inside a fixed layout, and the layout is what this lesson '
    + 'adds.',

  method: [
    'Write your address at the top right.',
    'Write the date underneath it.',
    'Write the greeting on the left: Dear Auntie Akos.',
    'First paragraph: say why you are writing.',
    'Middle paragraphs: one idea each.',
    'Last paragraph: say what you want them to do, or send good wishes.',
    'Close with something like "Your loving nephew", then your name.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Where does your own address go on an informal letter?',
      steps: [
        'It is there so they can reply.',
      ],
      answer: 'Top right, with the date underneath.',
    },
    {
      level: 5,
      ask: 'Why does a letter need a date?',
      steps: [
        'It may be read much later.',
        'Letters are often kept.',
        'Without a date nobody can tell when it was written.',
      ],
      answer: 'So the reader knows when it was written, '
        + 'which matters more the longer it is kept.',
    },
    {
      level: 5,
      ask: 'What should the first paragraph do?',
      steps: [
        'The reader opens it wondering why you wrote.',
        'Answer that before anything else.',
      ],
      answer: 'Say why you are writing.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving off your address.',
      why: 'Then they cannot reply, which is often the point of the letter.',
    },
    {
      mistake: 'Writing the whole letter as one block.',
      why: 'The same rule applies as anywhere: one idea per paragraph.',
    },
    {
      mistake: 'Using formal language to a relative.',
      why: 'An informal letter should sound like you. '
        + '"I trust this missive finds you well" does not.',
    },
  ],

  extension:
    'A formal letter, to an office or an employer, '
    + 'adds the recipient’s address on the left and uses a different '
    + 'closing. '
    + 'The layout is stricter because the reader does not know you '
    + 'and is judging partly on whether you got it right.',

  figure: {
    alt: 'A sheet of paper with each part of an informal letter '
      + 'labelled by an arrow from the right. At the top right is '
      + 'the address, House 12, Nsawam Road, Adabraka, Accra, with '
      + 'the date 4 May 2026 under it. On the left is the greeting, '
      + 'Dear Auntie Akos, then two blocks of lines standing for '
      + 'paragraphs, the first labelled why you wrote and the '
      + 'second one idea. At the bottom left is the closing, Your '
      + 'loving nephew, and the name Kwame.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<rect x="40" y="14" width="360" height="370" stroke-width="2"/>'
      + '<text x="384" y="52" font-size="14" text-anchor="end" fill="currentColor" stroke="none">House 12, Nsawam Road</text>'
      + '<text x="384" y="72" font-size="14" text-anchor="end" fill="currentColor" stroke="none">Adabraka, Accra</text>'
      + '<text x="384" y="116" font-size="14" text-anchor="end" fill="currentColor" stroke="none">4 May 2026</text>'
      + '<text x="56" y="154" font-size="15" text-anchor="start" fill="currentColor" stroke="none">Dear Auntie Akos,</text>'
      + '<line x1="56" y1="186" x2="380" y2="186" stroke-width="2"/>'
      + '<line x1="56" y1="204" x2="380" y2="204" stroke-width="2"/>'
      + '<line x1="56" y1="222" x2="280" y2="222" stroke-width="2"/>'
      + '<line x1="56" y1="252" x2="380" y2="252" stroke-width="2"/>'
      + '<line x1="56" y1="270" x2="380" y2="270" stroke-width="2"/>'
      + '<line x1="56" y1="288" x2="320" y2="288" stroke-width="2"/>'
      + '<text x="56" y="322" font-size="15" text-anchor="start" fill="currentColor" stroke="none">Your loving nephew,</text>'
      + '<text x="56" y="356" font-size="15" text-anchor="start" fill="currentColor" stroke="none">Kwame</text>'
      + '<line x1="434" y1="62" x2="412" y2="62"/>'
      + '<polygon points="404,62 417,56 417,68" fill="currentColor" stroke="none"/>'
      + '<text x="444" y="67" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">your address</text>'
      + '<line x1="434" y1="116" x2="412" y2="116"/>'
      + '<polygon points="404,116 417,110 417,122" fill="currentColor" stroke="none"/>'
      + '<text x="444" y="121" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">the date</text>'
      + '<line x1="434" y1="154" x2="412" y2="154"/>'
      + '<polygon points="404,154 417,148 417,160" fill="currentColor" stroke="none"/>'
      + '<text x="444" y="159" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">greeting</text>'
      + '<line x1="434" y1="204" x2="412" y2="204"/>'
      + '<polygon points="404,204 417,198 417,210" fill="currentColor" stroke="none"/>'
      + '<text x="444" y="209" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">why you wrote</text>'
      + '<line x1="434" y1="270" x2="412" y2="270"/>'
      + '<polygon points="404,270 417,264 417,276" fill="currentColor" stroke="none"/>'
      + '<text x="444" y="275" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">one idea</text>'
      + '<line x1="434" y1="322" x2="412" y2="322"/>'
      + '<polygon points="404,322 417,316 417,328" fill="currentColor" stroke="none"/>'
      + '<text x="444" y="327" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">closing</text>'
      + '<line x1="434" y1="356" x2="412" y2="356"/>'
      + '<polygon points="404,356 417,350 417,362" fill="currentColor" stroke="none"/>'
      + '<text x="444" y="361" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">your name</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'lw-1',
      ask: 'Where does your address go on an informal letter?',
      kind: 'choice',
      options: ['Top right', 'Top left', 'At the bottom'],
      answer: 'Top right',
      teach: 'Top right with the date below it, so they can reply '
        + 'and know when you wrote.',
      level: 4,
    },
    {
      id: 'lw-2',
      ask: 'What should the first paragraph do?',
      kind: 'choice',
      options: [
        'Say why you are writing',
        'Ask about their health',
        'Describe the weather',
      ],
      answer: 'Say why you are writing',
      teach: 'They open it wondering. Answer that first.',
      level: 5,
    },
    {
      id: 'lw-3',
      ask: 'Why does a letter need a date?',
      kind: 'choice',
      options: [
        'Letters are kept, and later nobody remembers when it was sent',
        'It looks neat',
        'The post office requires it',
      ],
      answer: 'Letters are kept, and later nobody remembers when it was sent',
      teach: 'The date serves the reader, which is what the whole layout '
        + 'is for.',
      level: 5,
    },
    {
      id: 'lw-4',
      ask: 'Where does the date go on an informal letter?',
      kind: 'choice',
      options: [
        'At the very bottom',
        'Under your address, at the top right',
        'On the left, before the greeting',
      ],
      answer: 'Under your address, at the top right',
      teach: 'Your address goes at the top right and the date sits just '
        + 'under it. '
        + 'Together they are called the heading.',
      level: 2,
    },
    {
      id: 'lw-5',
      ask: 'Which greeting is written correctly?',
      kind: 'choice',
      options: ['Dear Auntie Akos', 'dear auntie akos.', 'Dear Auntie Akos,'],
      answer: 'Dear Auntie Akos,',
      teach: 'The greeting starts with Dear and the name, and always ends '
        + 'with a comma. '
        + 'Leaving off the comma is the commonest lost mark.',
      level: 2,
    },
    {
      id: 'lw-6',
      ask: 'What is the part of a letter that carries your news called?',
      kind: 'choice',
      options: ['The heading', 'The body', 'The closing'],
      answer: 'The body',
      teach: 'The heading has your address and the date. '
        + 'The closing comes at the end. '
        + 'The body is where your news goes.',
      level: 2,
    },
    {
      id: 'lw-7',
      ask: 'Why must your own address be on the letter?',
      kind: 'choice',
      options: [
        'So they can reply',
        'So the post office can weigh it',
        'To fill the space',
      ],
      answer: 'So they can reply',
      teach: 'The layout is there to help the reader. '
        + 'Your address tells them where to send their answer.',
      level: 2,
    },
    {
      id: 'lw-8',
      ask: 'Which of these is a closing for an informal letter?',
      kind: 'choice',
      options: [
        'Dear Ama,',
        'Your loving cousin',
        'I trust this missive finds you well',
      ],
      answer: 'Your loving cousin',
      teach: '"Dear Ama," is a greeting, which comes at the start. '
        + 'A closing such as "Your loving cousin" comes at the end, before '
        + 'your name.',
      level: 2,
    },
    {
      id: 'lw-9',
      ask: 'Akosua has three pieces of news: her exams, a new baby sister '
        + 'and the rain. '
        + 'How should she write them?',
      kind: 'choice',
      options: [
        'All in one paragraph',
        'One paragraph for each piece of news',
        'All in the greeting',
      ],
      answer: 'One paragraph for each piece of news',
      teach: 'One idea per paragraph. '
        + 'Writing the letter as one block makes it hard for the reader to '
        + 'follow.',
      level: 3,
    },
    {
      id: 'lw-10',
      ask: 'Kwame is writing to his grandmother. '
        + 'Which sentence suits his letter?',
      kind: 'choice',
      options: [
        'I trust this missive finds you well.',
        'I hope you are well, Grandma.',
        'To whom it may concern.',
      ],
      answer: 'I hope you are well, Grandma.',
      teach: 'An informal letter should sound like you talking to somebody '
        + 'you know. '
        + 'Stiff, formal words sound like a stranger.',
      level: 3,
    },
  ],
})

/* ── subject and verb agreement ───────────────────────────────────────────── */

teach({
  topicId: 'subject-verb-agreement',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The verb must match its subject. '
      + 'One thing takes one form, more than one takes another. '
      + 'The boy runs. The boys run.',
    method: [
      'Find the subject: who or what is doing it.',
      'Is it one, or more than one?',
      'Match the verb, ignoring any words in between.',
    ],
  },

  why:
    'You write "My brothers goes to school in Tamale" and the '
    + 'teacher crosses it out. '
    + 'You write "My brother go to school in Tamale" and she '
    + 'crosses that out too. '
    + 'Both sentences say exactly what you meant, and in Twi '
    + 'nothing like this happens. '
    + 'So which word has to change when you speak about one '
    + 'brother instead of two?',

  idea:
    'The verb changes to match its subject. '
    + 'Whether the subject is one thing or more than one '
    + 'decides which form of the verb you use.',

  mechanism:
    'Nearly every mistake here comes from matching the verb to the nearest '
    + 'noun '
    + 'instead of to the actual subject. '
    + '"The box of mangoes are heavy" sounds fine because mangoes is right '
    + 'next to the verb. '
    + 'But the box is what is heavy, and there is one box. '
    + 'So the trick is to cover the words between the subject and the verb '
    + 'with your finger and read it again. '
    + '"The box is heavy" settles it instantly.',

  recap:
    'In a sentence, the subject is who or what the sentence is '
    + 'about, and the verb is what they do. '
    + 'In "The girl sweeps the floor", the subject is the girl '
    + 'and the verb is sweeps. '
    + 'Singular means one and plural means more than one, so one '
    + 'girl is singular and two girls is plural. '
    + 'In "The girls sweep the floor" the subject is plural, and '
    + 'the verb is not sweeps any more. '
    + 'This lesson is about why the verb had to change.',

  method: [
    'Find the verb.',
    'Ask who or what is doing it. That is the subject.',
    'Cover everything between the subject and the verb.',
    'Is the subject one thing or more than one?',
    'One: the verb usually takes s. More than one: it does not.',
    'Read it back with the covered words restored.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Which is right: "The boys runs" or "The boys run"?',
      steps: [
        'The subject is boys, which is more than one.',
        'A plural subject takes the verb without s.',
      ],
      answer: '"The boys run."',
    },
    {
      level: 5,
      ask: 'Which is right: "The box of mangoes is heavy" or "are heavy"?',
      steps: [
        'Cover "of mangoes".',
        'That leaves "The box ... heavy".',
        'One box.',
      ],
      answer: '"The box of mangoes is heavy."',
    },
    {
      level: 5,
      ask: 'Why does "mangoes" not decide the verb in that sentence?',
      steps: [
        'Mangoes is not the subject.',
        'It is inside a phrase describing the box.',
        'The subject is box.',
      ],
      answer: 'Because the verb matches the subject, '
        + 'not whichever noun happens to sit nearest.',
    },
  ],

  traps: [
    {
      mistake: 'Matching the verb to the nearest noun.',
      why: 'Cover the words in between and the real subject appears.',
    },
    {
      mistake: 'Thinking the s works the same way as on nouns.',
      why: 'It is the opposite. '
        + 'One boy runs; two boys run. The s moves across.',
    },
    {
      mistake: 'Guessing by what sounds right in speech.',
      why: 'The common mistake sounds right, '
        + 'which is exactly why it is common. Use the covering test.',
    },
  ],

  extension:
    'Some subjects are tricky because they are one thing made of many: '
    + 'a team, a class, a family. '
    + 'In Ghanaian and British usage either form is often accepted, '
    + 'and what matters is choosing one and keeping to it in a piece.',

  figure: {
    alt: 'The sentence The box of mangoes is heavy, with the words '
      + 'of mangoes crossed out inside a box labelled cover this, '
      + 'and a curved arrow running over the crossed out words from '
      + 'The box to is, labelled one box, so is. Below it the '
      + 'sentence with those words removed, The box is heavy. Below '
      + 'that the wrong version, The box of mangoes are heavy, '
      + 'struck through and labelled as matching the nearest noun '
      + 'instead of the subject.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Cover the words between the subject and the verb.</text>'
      + '<text x="120" y="150" font-size="24" text-anchor="start" fill="currentColor" stroke="none">The box</text>'
      + '<text x="245" y="150" font-size="24" text-anchor="start" fill="currentColor" stroke="none">of mangoes</text>'
      + '<text x="410" y="150" font-size="24" text-anchor="start" fill="currentColor" stroke="none">is heavy.</text>'
      + '<rect x="238" y="122" width="134" height="38" stroke="#c8433a"/>'
      + '<line x1="238" y1="122" x2="372" y2="160" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="238" y1="160" x2="372" y2="122" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="305" y="184" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">cover this</text>'
      + '<path d="M 158 112 Q 300 62 442 112" stroke="#0f8a4d"/>'
      + '<polygon points="442,116 435,103 449,103" fill="#0f8a4d" stroke="none"/>'
      + '<text x="300" y="52" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">one box, so is</text>'
      + '<text x="320" y="248" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">What is left settles it:</text>'
      + '<text x="320" y="288" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">The box is heavy.</text>'
      + '<text x="320" y="344" font-size="20" text-anchor="middle" fill="#c8433a" stroke="none">The box of mangoes are heavy.</text>'
      + '<line x1="118" y1="338" x2="522" y2="338" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="320" y="374" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">this matches the nearest noun, not the subject</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'How the verb changes when the subject is one thing or more '
      + 'than one',
    columns: [
      'Subject',
      'One or more?',
      'Verb',
      'The sentence',
    ],
    rows: [
      ['The boy', 'One', 'runs', 'The boy runs.'],
      ['The boys', 'More than one', 'run', 'The boys run.'],
      ['The box of mangoes', 'One', 'is', 'The box of mangoes is heavy.'],
      [
        'The boxes of mangoes',
        'More than one',
        'are',
        'The boxes of mangoes are heavy.',
      ],
    ],
    note: 'Notice that the s moves across. The single subject has no s '
      + 'and its verb does, and the plural subject has the s and its '
      + 'verb does not.',
  }],
  questions: [
    {
      id: 'sv-1',
      ask: 'Which is correct?',
      kind: 'choice',
      options: ['The boys run', 'The boys runs'],
      answer: 'The boys run',
      teach: 'A plural subject takes the verb without s. '
        + 'The s moves across: one boy runs, two boys run.',
      level: 4,
    },
    {
      id: 'sv-2',
      ask: 'Which is correct?',
      kind: 'choice',
      options: [
        'The box of mangoes is heavy',
        'The box of mangoes are heavy',
      ],
      answer: 'The box of mangoes is heavy',
      teach: 'Cover "of mangoes" and you are left with "the box is heavy". '
        + 'One box.',
      level: 5,
    },
    {
      id: 'sv-3',
      ask: 'What is the quickest test for agreement?',
      kind: 'choice',
      options: [
        'Cover the words between the subject and the verb',
        'Read it aloud',
        'Count the words',
      ],
      answer: 'Cover the words between the subject and the verb',
      teach: 'Reading aloud is unreliable here, '
        + 'because the common mistake is exactly what sounds right.',
      level: 5,
    },
    {
      id: 'sv-4',
      ask: 'Which is correct?',
      kind: 'choice',
      options: ['The girl sweep the floor', 'The girl sweeps the floor'],
      answer: 'The girl sweeps the floor',
      teach: 'One girl is singular, so the verb takes s: sweeps. '
        + 'Two girls would sweep.',
      level: 1,
    },
    {
      id: 'sv-5',
      ask: 'In "The girls sweep the floor", what is the subject?',
      kind: 'choice',
      options: ['sweep', 'the floor', 'The girls'],
      answer: 'The girls',
      teach: 'The subject is who is doing it. '
        + 'The girls are doing the sweeping. '
        + 'Sweep is the verb.',
      level: 2,
    },
    {
      id: 'sv-6',
      ask: 'Which is correct?',
      kind: 'choice',
      options: [
        'My brother go to school in Tamale',
        'My brothers goes to school in Tamale',
        'My brother goes to school in Tamale',
      ],
      answer: 'My brother goes to school in Tamale',
      teach: 'One brother, so the verb takes s: goes. '
        + '"My brothers goes" puts the s on both words, which is wrong.',
      level: 2,
    },
    {
      id: 'sv-7',
      ask: 'Choose the verb: "The children in the yard ___ football."',
      kind: 'choice',
      options: ['plays', 'play'],
      answer: 'play',
      teach: 'Cover "in the yard". '
        + 'The children play. '
        + 'Children is more than one, so the verb has no s.',
      level: 3,
    },
    {
      id: 'sv-8',
      ask: 'Choose the verb: "The basket of oranges ___ on the table."',
      kind: 'choice',
      options: ['are', 'is'],
      answer: 'is',
      teach: 'Oranges sits next to the verb and pulls you towards "are". '
        + 'Cover "of oranges": the basket is. '
        + 'There is one basket.',
      level: 3,
    },
    {
      id: 'sv-9',
      ask: 'Which is correct?',
      kind: 'choice',
      options: [
        'The boxes of mangoes is heavy',
        'The boxes of mangoes are heavy',
      ],
      answer: 'The boxes of mangoes are heavy',
      teach: 'Cover "of mangoes": the boxes are heavy. '
        + 'Boxes is more than one, so the verb is are.',
      level: 3,
    },
    {
      id: 'sv-10',
      ask: 'Choose the verb: "The teacher of the boys ___ kind."',
      kind: 'choice',
      options: ['are', 'is'],
      answer: 'is',
      teach: 'Boys is the nearest noun, but it is not the subject. '
        + 'Cover "of the boys": the teacher is kind. '
        + 'One teacher.',
      level: 4,
    },
  ],
})

/* ── adjectives and adverbs ───────────────────────────────────────────────── */

teach({
  topicId: 'adjectives-adverbs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An adjective describes a noun. An adverb describes a verb. '
      + 'Use them to be exact, not to make writing longer.',
    method: [
      'Adjective: describes a thing. The red bag.',
      'Adverb: describes how something is done. She ran quickly.',
      'Could a stronger noun or verb do the job instead? Use that.',
    ],
  },

  why:
    'You tell your friend you saw a dog, and he asks which dog. '
    + 'You say the big black one by the gate, and now he can '
    + 'picture it. '
    + 'You tell him you ran home and he asks how, and you say '
    + 'quickly, because it had started raining. '
    + 'Your first sentences were true but told him almost '
    + 'nothing, so which words in the second ones were doing the '
    + 'real work?',

  idea:
    'An adjective describes a noun: the red bag, a heavy box. '
    + 'An adverb describes a verb: she ran quickly, he spoke softly. '
    + 'Both exist to make writing exact.',

  mechanism:
    'Here is the part that is rarely taught and matters most. '
    + 'Describing words are often a sign that you chose a weak word first. '
    + 'The table below puts a few of them beside the one stronger word '
    + 'that does the same job in fewer words. '
    + 'So the test is not whether a describing word is correct. '
    + 'It is whether a better noun or verb would make it unnecessary.',

  recap:
    'A noun is a word for a person, a place or a thing: Ama, '
    + 'Kumasi, bag. '
    + 'A verb is a word for what somebody does: run, speak, '
    + 'carry. '
    + 'So in "Ama carried the bag", Ama and bag are nouns and '
    + 'carried is the verb. '
    + 'This lesson is about two kinds of word that fasten onto '
    + 'those: one that fastens onto a noun and one that fastens '
    + 'onto a verb.',

  method: [
    'Find the noun. A word describing it is an adjective.',
    'Find the verb. A word describing how it was done is an adverb.',
    'Many adverbs end in ly, though not all of them.',
    'Before keeping a describing word, ask what it adds.',
    'Ask whether a stronger noun or verb would replace it.',
    'Cut every describing word that adds nothing.',
  ],

  worked: [
    {
      level: 4,
      ask: 'In "she sang beautifully", which word is the adverb?',
      steps: [
        'The verb is sang.',
        'Beautifully tells you how she sang.',
      ],
      answer: 'Beautifully.',
    },
    {
      level: 5,
      ask: 'Improve: "He walked quickly to the shop."',
      steps: [
        'Walked quickly is a weak verb plus an adverb.',
        'One stronger verb does both.',
      ],
      answer: '"He hurried to the shop." Shorter and stronger.',
    },
    {
      level: 5,
      ask: 'What is wrong with "a very big large house"?',
      steps: [
        'Big and large mean the same thing.',
        '"Very" adds nothing measurable.',
        'A stronger noun would do all of it.',
      ],
      answer: 'It piles up describing words instead of choosing a better '
        + 'noun. "A mansion" says more in one word.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking more describing words means better writing.',
      why: 'Usually the opposite. '
        + 'They often cover for a weak noun or verb.',
    },
    {
      mistake: 'Using an adjective where an adverb belongs.',
      why: '"He ran quick" should be "he ran quickly". '
        + 'Ran is a verb, so it needs an adverb.',
    },
    {
      mistake: 'Assuming every word ending in ly is an adverb.',
      why: 'Friendly and lovely are adjectives. '
        + 'Ask what the word describes, not how it ends.',
    },
  ],

  extension:
    'Strong writers use fewer describing words than you expect, '
    + 'and choose harder working nouns and verbs instead. '
    + 'Take a paragraph you have written, cut every adjective and adverb, '
    + 'and put back only the ones you genuinely miss.',

  figure: {
    alt: 'Two rows. The top row shows the words the red bag, with '
      + 'red labelled adjective and bag labelled noun, and a curved '
      + 'arrow running from red to bag over the heading an '
      + 'adjective describes a noun. The bottom row shows she ran '
      + 'quickly, with ran labelled verb and quickly labelled '
      + 'adverb, and a curved arrow running from quickly back to '
      + 'ran over the heading an adverb describes a verb.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="40" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">An adjective describes a noun</text>'
      + '<text x="240" y="110" font-size="24" text-anchor="start" fill="currentColor" stroke="none">the</text>'
      + '<text x="300" y="110" font-size="24" text-anchor="start" fill="#0f8a4d" stroke="none">red</text>'
      + '<text x="370" y="110" font-size="24" text-anchor="start" fill="currentColor" stroke="none">bag</text>'
      + '<path d="M 318 86 Q 353 56 388 86" stroke="#0f8a4d"/>'
      + '<polygon points="388,90 381,77 395,77" fill="#0f8a4d" stroke="none"/>'
      + '<text x="318" y="142" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">adjective</text>'
      + '<text x="390" y="142" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">noun</text>'
      + '<text x="320" y="218" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">An adverb describes a verb</text>'
      + '<text x="208" y="288" font-size="24" text-anchor="start" fill="currentColor" stroke="none">she</text>'
      + '<text x="278" y="288" font-size="24" text-anchor="start" fill="currentColor" stroke="none">ran</text>'
      + '<text x="348" y="288" font-size="24" text-anchor="start" fill="#0f8a4d" stroke="none">quickly</text>'
      + '<path d="M 390 264 Q 343 234 296 264" stroke="#0f8a4d"/>'
      + '<polygon points="296,268 289,255 303,255" fill="#0f8a4d" stroke="none"/>'
      + '<text x="296" y="320" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">verb</text>'
      + '<text x="390" y="320" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">adverb</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'A weak word with a describing word beside the single stronger '
      + 'word that replaces both',
    columns: [
      'Weak version',
      'Stronger version',
    ],
    rows: [
      ['walked quickly', 'hurried'],
      ['said loudly', 'shouted'],
      ['looked carefully at', 'studied'],
      ['a very big house', 'a mansion'],
      ['very tired', 'worn out'],
    ],
    note: 'Before you keep a describing word, ask whether a better noun '
      + 'or verb would make it unnecessary.',
  }],
  questions: [
    {
      id: 'aa-1',
      ask: 'In "she sang beautifully", what is "beautifully"?',
      kind: 'choice',
      options: ['An adverb', 'An adjective', 'A noun'],
      answer: 'An adverb',
      teach: 'It describes how she sang, and sang is a verb.',
      level: 4,
    },
    {
      id: 'aa-2',
      ask: 'Which is stronger?',
      kind: 'choice',
      options: ['He hurried to the shop', 'He walked quickly to the shop'],
      answer: 'He hurried to the shop',
      teach: 'One strong verb beats a weak verb plus an adverb.',
      level: 5,
    },
    {
      id: 'aa-3',
      ask: 'Is "friendly" an adverb because it ends in ly?',
      kind: 'choice',
      options: ['No, it describes a noun', 'Yes'],
      answer: 'No, it describes a noun',
      teach: 'A friendly man. It describes the man, so it is an adjective. '
        + 'The ending is not the test.',
      level: 5,
    },
    {
      id: 'aa-4',
      ask: 'In "the red bag", what kind of word is "red"?',
      kind: 'choice',
      options: ['An adverb', 'A verb', 'An adjective'],
      answer: 'An adjective',
      teach: 'Red describes the bag, and a bag is a noun. '
        + 'A word that describes a noun is an adjective.',
      level: 1,
    },
    {
      id: 'aa-5',
      ask: 'What does an adverb describe?',
      kind: 'choice',
      options: ['A noun', 'A verb', 'A full stop'],
      answer: 'A verb',
      teach: 'An adverb tells you how something was done. '
        + 'An adjective is the one that describes a noun.',
      level: 2,
    },
    {
      id: 'aa-6',
      ask: 'In "Kwame spoke softly", which word is the adverb?',
      kind: 'choice',
      options: ['Kwame', 'spoke', 'softly'],
      answer: 'softly',
      teach: 'The verb is spoke. '
        + 'Softly tells you how he spoke, so it is the adverb.',
      level: 2,
    },
    {
      id: 'aa-7',
      ask: 'Which one word could replace "said loudly"?',
      kind: 'choice',
      options: ['whispered', 'shouted', 'walked'],
      answer: 'shouted',
      teach: 'A strong verb can do the job of a weak verb plus an adverb. '
        + 'Shouted means said loudly.',
      level: 2,
    },
    {
      id: 'aa-8',
      ask: 'Which is correct?',
      kind: 'choice',
      options: ['He ran quick', 'He ran quickly'],
      answer: 'He ran quickly',
      teach: 'Ran is a verb, so it needs an adverb to describe it. '
        + 'Quick is an adjective; quickly is the adverb.',
      level: 3,
    },
    {
      id: 'aa-9',
      ask: 'Which one word could replace "looked carefully at"?',
      kind: 'choice',
      options: ['glanced', 'ignored', 'studied'],
      answer: 'studied',
      teach: 'Glanced means looked quickly, which is the opposite. '
        + 'Studied means looked carefully at, in one word.',
      level: 3,
    },
    {
      id: 'aa-10',
      ask: 'Which sentence is more exact?',
      kind: 'choice',
      options: [
        'Ama was very, very tired after the walk.',
        'Ama was worn out after the walk.',
      ],
      answer: 'Ama was worn out after the walk.',
      teach: 'Piling up "very" adds length but not meaning. '
        + 'Choosing a stronger word says it better.',
      level: 3,
    },
  ],
})

/* ── talking about a book you finished ────────────────────────────────────── */

teach({
  topicId: 'book-report',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Say what the book was about without giving away the ending, '
      + 'say what you thought of it, '
      + 'and say who would enjoy it.',
    method: [
      'Name the book and who it is about.',
      'Say what happens, without the ending.',
      'Say what you thought and who would like it.',
    ],
  },

  why:
    'You have just finished a book you liked and your friend is '
    + 'deciding whether to read it. '
    + 'Tell her the whole story and she has no reason to read it '
    + 'at all. '
    + 'Say only that it was nice and she has learned nothing. '
    + 'What do you tell her, so that she can decide for herself?',

  idea:
    'Talking about a book has three parts: '
    + 'what it was about, what you thought of it, '
    + 'and whether you would tell a friend to read it. '
    + 'The last one is the part people most want to hear.',

  mechanism:
    'The rule about not giving away the ending exists for a reason '
    + 'worth understanding. '
    + 'Your listener is deciding whether to read it. '
    + 'Tell them the ending and you have removed the thing they would be '
    + 'reading for. '
    + 'So you say enough to interest them and stop. '
    + 'And "I liked it" on its own helps nobody: '
    + 'they do not know whether they like what you like. '
    + 'Saying why is what lets them judge for themselves.',

  recap:
    'The main idea of a passage is what the whole thing is '
    + 'mostly about, not one detail out of it. '
    + 'If a passage describes a market, the noise, the traders '
    + 'and the goods, the main idea is the market and not the '
    + 'noise. '
    + 'A short talk has three parts: say what you are going to '
    + 'say, say it, then say what you said. '
    + 'This lesson uses both of those, about a book you chose '
    + 'yourself.',

  method: [
    'Name the book and the writer.',
    'Say who it is mainly about.',
    'Say what the problem in the story is.',
    'Stop before the ending.',
    'Say what you thought, and give a reason.',
    'Say who would enjoy it, and who would not.',
  ],

  worked: [
    {
      level: 4,
      ask: 'What three things should you cover?',
      steps: [
        'What it was about.',
        'What you thought.',
        'Who would like it.',
      ],
      answer: 'The story, your opinion, and your recommendation.',
    },
    {
      level: 5,
      ask: 'Why not tell the ending?',
      steps: [
        'Your listener may read it.',
        'The ending is what they would be reading towards.',
      ],
      answer: 'Because it removes their reason to read it.',
    },
    {
      level: 5,
      ask: 'Why is "I liked it" not enough?',
      steps: [
        'They do not know what you like.',
        'Without a reason they cannot judge whether they would agree.',
      ],
      answer: 'Because the reason is what lets somebody else decide. '
        + 'Your verdict alone tells them about you, not about the book.',
    },
  ],

  traps: [
    {
      mistake: 'Retelling the whole plot from start to finish.',
      why: 'That is not a report, it is a summary nobody asked for. '
        + 'Say enough to interest them.',
    },
    {
      mistake: 'Giving away the ending.',
      why: 'It removes the point of reading it.',
    },
    {
      mistake: 'Saying it was nice or boring and stopping.',
      why: 'Give the reason. '
        + 'The reason is the only useful part.',
    },
  ],

  extension:
    'A real review does one more thing: '
    + 'it says who the book is for. '
    + '"Boring" often means "not for me", '
    + 'and saying which it is makes your opinion far more useful '
    + 'to somebody whose taste differs from yours.',

  figure: {
    alt: 'Three numbered boxes in a row, headed three things to '
      + 'cover: what it was about, meaning who it is about and what '
      + 'the problem is; what you thought, and the reason you '
      + 'thought it; and who would enjoy it and who would not. '
      + 'Below them a fourth box labelled the ending is crossed '
      + 'out, with the words leave the ending out, it is the thing '
      + 'they would be reading for.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">Three things to cover</text>'
      + '<rect x="16" y="58" width="192" height="130" stroke="#0f8a4d"/>'
      + '<text x="112" y="88" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">1</text>'
      + '<text x="112" y="124" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">What it was about</text>'
      + '<text x="112" y="150" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">who it is about, and</text>'
      + '<text x="112" y="172" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">what the problem is</text>'
      + '<rect x="224" y="58" width="192" height="130" stroke="#0f8a4d"/>'
      + '<text x="320" y="88" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">2</text>'
      + '<text x="320" y="124" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">What you thought</text>'
      + '<text x="320" y="150" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and the reason you</text>'
      + '<text x="320" y="172" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">thought it</text>'
      + '<rect x="432" y="58" width="192" height="130" stroke="#0f8a4d"/>'
      + '<text x="528" y="88" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">3</text>'
      + '<text x="528" y="124" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Who would enjoy it</text>'
      + '<text x="528" y="150" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and who would</text>'
      + '<text x="528" y="172" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">not</text>'
      + '<rect x="200" y="248" width="240" height="56" stroke="#c8433a"/>'
      + '<text x="320" y="284" font-size="20" text-anchor="middle" fill="#c8433a" stroke="none">the ending</text>'
      + '<line x1="200" y1="248" x2="440" y2="304" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="200" y1="304" x2="440" y2="248" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="320" y="340" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">Leave the ending out.</text>'
      + '<text x="320" y="366" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">It is the thing they would be reading for.</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'brp-1',
      ask: 'Should you tell the ending?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'Your listener may want to read it, '
        + 'and the ending is what they would be reading towards.',
      level: 4,
    },
    {
      id: 'brp-2',
      ask: 'Why is "I liked it" not a useful opinion?',
      kind: 'choice',
      options: [
        'It gives no reason, so nobody can judge for themselves',
        'It is too short',
        'It is impolite',
      ],
      answer: 'It gives no reason, so nobody can judge for themselves',
      teach: 'The reason is the useful part. '
        + 'Without it you have described yourself, not the book.',
      level: 5,
    },
    {
      id: 'brp-3',
      ask: 'What makes a recommendation more useful?',
      kind: 'choice',
      options: [
        'Saying who the book is for',
        'Saying how long it is',
        'Saying how fast you read it',
      ],
      answer: 'Saying who the book is for',
      teach: '"Boring" often just means "not for me". '
        + 'Saying who would enjoy it helps somebody with different taste.',
      level: 5,
    },
    {
      id: 'brp-4',
      ask: 'What three things should you say about a book?',
      kind: 'choice',
      options: [
        'The title, the price and the number of pages',
        'What it was about, what you thought, and who would like it',
        'The ending, the cover and the colour',
      ],
      answer: 'What it was about, what you thought, and who would like it',
      teach: 'The price and the number of pages do not help a friend decide. '
        + 'Say what it was about, your opinion, and who would enjoy it.',
      level: 2,
    },
    {
      id: 'brp-5',
      ask: 'What should you name first?',
      kind: 'choice',
      options: ['The ending', 'Your favourite page', 'The book and the writer'],
      answer: 'The book and the writer',
      teach: 'Start with the book and who wrote it, so the listener can find '
        + 'it. '
        + 'Then say who it is mainly about.',
      level: 2,
    },
    {
      id: 'brp-6',
      ask: 'Which part do people most want to hear?',
      kind: 'choice',
      options: [
        'How many pages it has',
        'Whether you would tell a friend to read it',
        'The ending',
      ],
      answer: 'Whether you would tell a friend to read it',
      teach: 'Your listener is deciding whether to read it. '
        + 'Your recommendation is what helps them decide.',
      level: 2,
    },
    {
      id: 'brp-7',
      ask: 'When you say what happens in the book, where should you stop?',
      kind: 'choice',
      options: [
        'After the ending',
        'Before the ending',
        'After the first page',
      ],
      answer: 'Before the ending',
      teach: 'Say what the problem is, then stop. '
        + 'The ending is the thing your friend would be reading for.',
      level: 2,
    },
    {
      id: 'brp-8',
      ask: 'Which opinion is most useful to a friend?',
      kind: 'choice',
      options: [
        'I liked it',
        'It was nice',
        'I liked it, because the girl solves the problem by herself',
      ],
      answer: 'I liked it, because the girl solves the problem by herself',
      teach: 'An opinion with a reason lets your friend decide whether they '
        + 'like what you like. '
        + '"It was nice" tells them nothing.',
      level: 3,
    },
    {
      id: 'brp-9',
      ask: 'Akosua tells the whole story from start to finish. What is wrong?',
      kind: 'choice',
      options: [
        'It is too short',
        'It leaves her friend no reason to read it',
        'Nothing, that is a good report',
      ],
      answer: 'It leaves her friend no reason to read it',
      teach: 'A report should say enough to interest the listener and then '
        + 'stop. '
        + 'Retelling the whole plot gives away the ending.',
      level: 3,
    },
    {
      id: 'brp-10',
      ask: 'Kofi says a book was boring. What might he really mean?',
      kind: 'choice',
      options: [
        'It was not for him',
        'Nobody would like it',
        'It was too short',
      ],
      answer: 'It was not for him',
      teach: '"Boring" often means "not for me". '
        + 'Saying who the book is for helps a friend whose taste is '
        + 'different.',
      level: 3,
    },
  ],
})
