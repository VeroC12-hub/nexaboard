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
    'You can speak in full sentences and read aloud at a steady pace. '
    + 'A talk is those two with your own words and no page to hide behind.',

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
      mistake: 'Cramming in everything you know.',
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
    'You can find an answer stated in a passage and point at the line. '
    + 'This is the same discipline for an answer that is not stated.',

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
      mistake: 'Inferring from what you know rather than what it says.',
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

  idea:
    'When you meet a word you do not know, '
    + 'do not stop and do not skip it. '
    + 'The sentence around it usually tells you roughly what it means.',

  mechanism:
    'Writers leave clues without meaning to, '
    + 'and there are a few shapes worth recognising. '
    + 'Sometimes the meaning follows directly, after a comma or the word '
    + '"which". '
    + 'Sometimes an example comes next, after "such as". '
    + 'Sometimes a contrast gives it away, after "but" or "unlike". '
    + 'And sometimes the rest of the sentence only lets a certain kind of '
    + 'word fit. '
    + 'You will rarely get the exact dictionary meaning this way, '
    + 'and you will usually get close enough to keep reading, '
    + 'which is the point.',

  recap:
    'You know how to answer from a passage by finding the right line. '
    + 'This uses the lines around a word instead of the word itself.',

  method: [
    'Read the whole sentence, then the one after it.',
    'Is the meaning given straight out? Look after a comma or "which".',
    'Is there an example? Look after "such as" or "for instance".',
    'Is there a contrast? Look after "but", "unlike" or "however".',
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
    + 'You met words repeatedly in context until the meaning settled. '
    + 'Reading widely works for exactly this reason.',

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

  idea:
    'A story has three parts. '
    + 'The beginning introduces who it is about and what they want. '
    + 'The middle is where something goes wrong. '
    + 'The ending is where it is settled, one way or the other.',

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
    'You can write a paragraph on one idea, '
    + 'and you can use the past tense consistently. '
    + 'A story is several paragraphs, usually in the past.',

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

  idea:
    'An informal letter is one to somebody you know. '
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
    'You can write paragraphs on one idea each, '
    + 'and you can punctuate properly. '
    + 'A letter is that, inside a layout.',

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

  idea:
    'The verb changes to match its subject. '
    + 'One boy runs. Two boys run. '
    + 'Notice that the s moves: '
    + 'the single subject has no s and its verb does, '
    + 'and the plural subject has the s and its verb does not.',

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
    'You can find the subject and the verb in a sentence, '
    + 'and you know singular from plural. '
    + 'This is those two working together.',

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

  idea:
    'An adjective describes a noun: the red bag, a heavy box. '
    + 'An adverb describes a verb: she ran quickly, he spoke softly. '
    + 'Both exist to make writing exact.',

  mechanism:
    'Here is the part that is rarely taught and matters most. '
    + 'Describing words are often a sign that you chose a weak word first. '
    + '"He walked quickly" is three words doing what "he hurried" does in '
    + 'two, '
    + 'and the two word version is stronger. '
    + '"A very big house" is weaker than "a mansion". '
    + 'So the test is not whether a describing word is correct. '
    + 'It is whether a better noun or verb would make it unnecessary.',

  recap:
    'You can find nouns and verbs in a sentence. '
    + 'Adjectives attach to the first and adverbs to the second.',

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
    'You can find the main idea of a passage, '
    + 'and you can give a short talk. '
    + 'This is both, about something you chose to read.',

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
  ],
})
