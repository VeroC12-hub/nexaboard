/**
 * Stored lessons for JHS 2 English Language.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── The year the learner is asked to choose ────────────────────────────────
 *
 * JHS 1 English asked for the reason a thing was right. JHS 2 asks the
 * learner to choose: which average of several possible sentence types,
 * which voice, which figure of speech, which points to keep in a summary.
 * Every topic here has a decision in it, and the mechanism of each lesson
 * is written to make that decision answerable rather than a matter of taste.
 *
 * `active-passive` is the clearest case. Most learners are taught the
 * passive is bad writing, which is wrong and leaves them unable to say why
 * "the shop was robbed last night" is the right sentence. The lesson gives
 * the three cases where the passive is the better choice, and says plainly
 * when it is a way of hiding who acted.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── debating ───────────────────────────────────────────────────────────── */

teach({
  topicId: 'debate-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A debate argues one side of a motion. '
      + 'Each point needs a claim, a reason and evidence. '
      + 'You must also answer the strongest point against you, '
      + 'not the weakest, because the judges have already thought of it.',
    method: [
      'Write your three strongest points, with evidence for each.',
      'Then write the strongest point against you and answer it.',
      'Attack the argument, never the speaker.',
    ],
  },

  idea:
    'A motion is the statement being debated, '
    + 'and one side proposes it while the other opposes. '
    + 'A good point has three parts: '
    + 'the claim, the reason it holds, and evidence for it. '
    + 'A rebuttal answers what the other side said. '
    + 'A speech goes in a fixed order, '
    + 'and the part that decides the debate is the rebuttal. '
    + 'You speak to the chair and the audience, '
    + 'and you answer arguments rather than people.',

  mechanism:
    'The thing that decides a debate is not how many points you make. '
    + 'It is whether you dealt with the strongest point against you, '
    + 'and most learners do the opposite: '
    + 'they pick the weakest opposing point, knock it down easily, '
    + 'and sit down pleased. '
    + 'The judges are not fooled, because they already thought of the '
    + 'strong one, '
    + 'and watching you avoid it tells them you have no answer. '
    + 'So the preparation that wins is done from the other side. '
    + 'Write down the best case against you, as well as its own supporters '
    + 'could put it, '
    + 'and then answer that. '
    + 'There are three honest ways to answer a point, '
    + 'and they differ in how much of it you are willing to grant. '
    + 'The third one, granting the whole point and outweighing it, '
    + 'is the most useful and the least used, '
    + 'because learners think admitting anything is losing. '
    + 'It is not. '
    + '"Yes, school uniform costs money, and it costs less than the clothes '
    + 'it replaces" concedes a true thing and wins the exchange. '
    + 'Finally, evidence. '
    + 'A claim with a number, an example or a named case is worth several '
    + 'claims without one.',

  recap:
    'You can give a prepared talk in standard English. '
    + 'A debate adds an opponent, '
    + 'so now you need evidence for your points and answers to theirs.',

  method: [
    'Read the motion and decide exactly what it claims.',
    'Choose your side and write it in one sentence.',
    'List your three strongest points.',
    'Give each a reason and a piece of evidence.',
    'Write the strongest point against you, as well as they would put it.',
    'Answer it: wrong fact, wrong conclusion, or outweighed.',
    'Order your points with a strong one first and the strongest last.',
    'Close by naming what the debate turns on.',
    'Keep notes short. Argue the point, never the person.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which is a complete debating point? '
        + '(a) "Uniform is good." '
        + '(b) "Uniform reduces bullying, because clothing cannot be '
        + 'compared, and our school saw fewer cases after it was '
        + 'introduced."',
      steps: [
        'A point needs a claim, a reason and evidence.',
        '(a) has only a claim.',
      ],
      answer: '(b). It has all three parts.',
    },
    {
      level: 4,
      ask: 'Opposing: "Uniform costs parents money." '
        + 'Give an answer that concedes the fact.',
      steps: [
        'The fact is true, so do not deny it.',
        'Show that your side outweighs it.',
      ],
      answer: '"Yes, uniform costs money. '
        + 'It costs less than the everyday clothes it replaces, '
        + 'and it is worn for two years rather than one season."',
    },
    {
      level: 5,
      ask: 'A speaker answers only the weakest point against her side. '
        + 'Why does this lose marks?',
      steps: [
        'The judges have already thought of the strong point.',
        'Avoiding it looks like having no answer.',
        'Knocking down a weak point proves nothing about the strong one.',
      ],
      answer: 'Because the strongest point against her is the one the '
        + 'judges are waiting for. '
        + 'Leaving it unanswered reads as an admission that she cannot '
        + 'answer it.',
    },
  ],

  traps: [
    {
      mistake: 'Answering the weakest point against you.',
      why: 'It is easier and it wins nothing. '
        + 'The judges are waiting for the strong one.',
    },
    {
      mistake: 'Attacking the speaker rather than the argument.',
      why: 'It loses marks for conduct '
        + 'and it leaves the argument standing.',
    },
    {
      mistake: 'Claims without evidence.',
      why: 'A claim with a number or an example outweighs three without.',
    },
    {
      mistake: 'Refusing to concede any true fact.',
      why: 'Conceding a fact and showing it is outweighed is a win. '
        + 'Denying a true fact loses your credit for everything else.',
    },
  ],

  extension:
    'A summing up speech makes no new points. '
    + 'It names the two or three clashes in the debate '
    + 'and says why your side won each, '
    + 'which is only possible if you were listening rather than reading '
    + 'notes.',

  figure: {
    alt: 'The other side’s three points drawn as bars of increasing height. '
      + 'On the left, in red, the shortest bar is struck through and the '
      + 'tallest is left standing, which is what most speakers do. On the '
      + 'right, in green, the tallest bar is the one struck through.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">a debate turns on whether you answered their strongest point</text>'
      + '<text x="140" y="60" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">what most speakers do</text>'
      + '<path d="M 40 186 H 94 V 230 H 40 Z" stroke="#c8433a"/>'
      + '<text x="67" y="252" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">their</text>'
      + '<text x="67" y="268" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">weak</text>'
      + '<path d="M 32 238 L 102 178" stroke="#c8433a" stroke-width="5"/>'
      + '<path d="M 120 144 H 174 V 230 H 120 Z" stroke="#c8433a"/>'
      + '<text x="147" y="252" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">their</text>'
      + '<text x="147" y="268" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">middling</text>'
      + '<path d="M 200 90 H 254 V 230 H 200 Z" stroke="#c8433a"/>'
      + '<text x="227" y="252" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">their</text>'
      + '<text x="227" y="268" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">strongest</text>'
      + '<text x="140" y="300" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">the easy one is knocked down,</text>'
      + '<text x="140" y="318" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">and the big one is still standing,</text>'
      + '<text x="140" y="336" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">which tells the judges you have no answer</text>'
      + '<text x="460" y="60" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">what wins</text>'
      + '<path d="M 360 186 H 414 V 230 H 360 Z" stroke="#0f8a4d"/>'
      + '<text x="387" y="252" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">their</text>'
      + '<text x="387" y="268" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">weak</text>'
      + '<path d="M 440 144 H 494 V 230 H 440 Z" stroke="#0f8a4d"/>'
      + '<text x="467" y="252" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">their</text>'
      + '<text x="467" y="268" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">middling</text>'
      + '<path d="M 520 90 H 574 V 230 H 520 Z" stroke="#0f8a4d"/>'
      + '<text x="547" y="252" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">their</text>'
      + '<text x="547" y="268" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">strongest</text>'
      + '<path d="M 512 238 L 582 82" stroke="#0f8a4d" stroke-width="5"/>'
      + '<text x="460" y="300" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">take the one they were relying on,</text>'
      + '<text x="460" y="318" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">and the judges watched you do it</text>'
      + '<text x="320" y="370" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so prepare from the other side: write their best case as well</text>'
      + '<text x="320" y="390" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">as its own supporters could put it, and then answer that</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The order a debate speech goes in, and what each part is '
        + 'for',
      columns: ['Part', 'What you do', 'Why'],
      rows: [
        [
          'Open',
          'State the motion and which side you are on',
          'Nobody can follow you until they know where you stand',
        ],
        [
          'Your points',
          'Strongest first, each with a claim, a reason and evidence',
          'The first one is the one they remember',
        ],
        [
          'Rebuttal',
          'Answer the strongest point against you',
          'Avoiding it tells the judges you have no answer to it',
        ],
        [
          'Close',
          'Say what the whole debate turns on',
          'It leaves the judges holding your question, not theirs',
        ],
      ],
      note: 'A claim with a number, an example or a named case behind it is '
        + 'worth several claims without one.',
    },
    {
      caption: 'The three honest ways to answer a point against you',
      columns: ['The answer', 'What you are granting', 'How it sounds'],
      rows: [
        [
          'Show the fact is wrong',
          'Nothing',
          'That figure is from 1990, not from last year',
        ],
        [
          'Grant the fact, deny what follows',
          'The fact only',
          'True, and it does not make them unfair',
        ],
        [
          'Grant the point, and outweigh it',
          'The whole point',
          'Yes, uniform costs money, and it costs less than the clothes it replaces',
        ],
      ],
      note: 'Learners avoid the third because they think granting anything '
        + 'is losing. It is not, and it is the one that wins exchanges.',
    },
  ],
  questions: [
    {
      id: 'deb-1',
      ask: 'What three parts does a good debating point have?',
      kind: 'choice',
      options: [
        'Claim, reason and evidence',
        'Introduction, middle and end',
        'Greeting, point and thanks',
      ],
      answer: 'Claim, reason and evidence',
      teach: 'A claim alone is an opinion. '
        + 'Evidence is what makes it an argument.',
      level: 3,
    },
    {
      id: 'deb-2',
      ask: 'Which point against you should you answer?',
      kind: 'choice',
      options: ['The strongest', 'The weakest', 'The last one made'],
      answer: 'The strongest',
      teach: 'The judges have already thought of it, '
        + 'so avoiding it looks like having no answer.',
      level: 4,
    },
    {
      id: 'deb-3',
      ask: 'Is it ever right to agree with a fact from the other side?',
      kind: 'choice',
      options: [
        'Yes, if you then show your side outweighs it',
        'No, never agree with anything',
        'Only if the judges agree first',
      ],
      answer: 'Yes, if you then show your side outweighs it',
      teach: 'Denying a true fact costs you credit for everything else you '
        + 'say.',
      level: 5,
    },
  ],
})

/* ── listening for detail and attitude ──────────────────────────────────── */

teach({
  topicId: 'listening-for-detail',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'You hear it once, so prepare before it starts. '
      + 'Read the questions first and note what to listen for. '
      + 'Detail is in the words. '
      + 'Attitude is in the tone, the word choice and what the speaker '
      + 'leaves out.',
    method: [
      'Read all the questions before the passage begins.',
      'Write single words, not sentences, while listening.',
      'For attitude, note the words the speaker chose over plainer ones.',
    ],
  },

  idea:
    'A listening test plays something once, or sometimes twice, '
    + 'and asks questions on it. '
    + 'The questions come in two kinds, '
    + 'and the answers to the two are carried in different places, '
    + 'which is why they need different kinds of attention.',

  mechanism:
    'The whole difficulty of a listening test is that it does not wait for '
    + 'you, '
    + 'and that changes what preparation means. '
    + 'In a reading test you can look back. '
    + 'Here, anything you did not catch is gone, '
    + 'so the work has to happen before the recording starts. '
    + 'Read every question first and turn each into one thing to listen '
    + 'for: '
    + 'a number, a name, a reason, a feeling. '
    + 'Then you are waiting for those things rather than following the '
    + 'whole passage equally, '
    + 'and you catch them. '
    + 'The second rule is to write single words. '
    + 'A learner writing a full sentence misses the next three sentences '
    + 'while doing it, '
    + 'so good notes look like: Tema, 6am, lorry broke. '
    + 'Attitude questions need a different kind of attention, '
    + 'and there is a reliable way in: '
    + 'notice the word the speaker chose instead of the plain one. '
    + '"The scheme was abandoned" and "the scheme collapsed" report the '
    + 'same fact. '
    + 'Collapsed carries judgement; abandoned does not. '
    + 'So the choice of word is the attitude, '
    + 'and you can point at it as evidence, '
    + 'which is what the mark is for.',

  recap:
    'You answer comprehension questions on a passage you can read as often '
    + 'as you like. '
    + 'This is the same skill with one difference, '
    + 'and the difference changes the method completely: '
    + 'you only hear it once.',

  method: [
    'Read every question before the recording starts.',
    'Beside each, write what you are listening for in one word.',
    'Listen the first time for the shape of the whole thing.',
    'Write single words and figures, never sentences.',
    'If a second playing is given, use it for the gaps only.',
    'For attitude, note the loaded words the speaker used.',
    'Answer in complete sentences when the paper asks for them.',
    'Leave nothing blank. An informed guess may be right.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why should you read the questions before the recording plays?',
      steps: [
        'You cannot go back and listen again.',
        'Knowing what to listen for means you catch it.',
      ],
      answer: 'Because you only hear it once, '
        + 'so you must know in advance what to listen for.',
    },
    {
      level: 4,
      ask: 'A speaker says: "The new timetable is, I suppose, an '
        + 'improvement." '
        + 'What is her attitude?',
      steps: [
        'The fact is that she calls it an improvement.',
        'But "I suppose" holds the agreement back.',
      ],
      answer: 'Doubtful or reluctant. '
        + 'She agrees in words but "I suppose" withholds real approval.',
    },
    {
      level: 5,
      ask: 'Two reports say "the scheme was abandoned" and "the scheme '
        + 'collapsed". '
        + 'Same fact. What is the difference?',
      steps: [
        'Abandoned says somebody chose to stop it.',
        'Collapsed says it failed on its own.',
        'Collapsed also carries judgement; abandoned does not.',
      ],
      answer: 'The word chosen carries the attitude. '
        + 'Collapsed suggests failure and blame; '
        + 'abandoned reports a decision without judging it.',
    },
  ],

  traps: [
    {
      mistake: 'Starting to listen before reading the questions.',
      why: 'You then listen to everything equally and remember little of '
        + 'it.',
    },
    {
      mistake: 'Writing full sentences while listening.',
      why: 'You miss the next three sentences. '
        + 'Single words are enough.',
    },
    {
      mistake: 'Answering an attitude question with a fact.',
      why: 'The question asks how the speaker felt, '
        + 'and the evidence is the words they chose.',
    },
    {
      mistake: 'Leaving a question blank.',
      why: 'A blank earns nothing for certain. '
        + 'A guess from what you did hear sometimes earns the mark.',
    },
  ],

  extension:
    'In a discussion with several speakers, '
    + 'note who says what, because a question will ask which speaker held a '
    + 'view. '
    + 'One initial beside each note is enough.',

  figure: {
    alt: 'The recording drawn as a row of sentences running left to right, '
      + 'with the preparation done in a green box before it begins. '
      + 'Underneath, a red box spans three sentences to show that writing '
      + 'out one full sentence loses the next three, while below that '
      + 'three green ticks catch single words, Tema, 6am, lorry broke, and '
      + 'miss nothing.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the recording does not wait, so the work is done before it starts</text>'
      + '<path d="M 16 70 H 196 V 150 H 16 Z" stroke="#0f8a4d"/>'
      + '<text x="106" y="94" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">before it starts</text>'
      + '<text x="106" y="116" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">read every question and</text>'
      + '<text x="106" y="132" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">turn each into one thing</text>'
      + '<text x="106" y="148" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">to listen for</text>'
      + '<path d="M 204 110 H 232" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 242 110 L 224 101 L 224 119 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 252 90 H 624 V 130 H 252 Z"/>'
      + '<path d="M 314 90 V 130" stroke-width="1.5"/>'
      + '<path d="M 376 90 V 130" stroke-width="1.5"/>'
      + '<path d="M 438 90 V 130" stroke-width="1.5"/>'
      + '<path d="M 500 90 V 130" stroke-width="1.5"/>'
      + '<path d="M 562 90 V 130" stroke-width="1.5"/>'
      + '<text x="438" y="78" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the recording, one sentence after another</text>'
      + '<path d="M 314 160 H 500 V 196 H 314 Z" stroke="#c8433a"/>'
      + '<text x="407" y="182" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">writing out one full sentence</text>'
      + '<path d="M 376 140 V 156" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="407" y="218" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">and the next three went past</text>'
      + '<text x="407" y="236" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">while the pen was moving</text>'
      + '<path d="M 283 262 V 278" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="283" y="296" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">Tema</text>'
      + '<path d="M 407 262 V 278" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="407" y="296" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">6am</text>'
      + '<path d="M 531 262 V 278" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="531" y="296" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">lorry broke</text>'
      + '<path d="M 252 262 H 624" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="438" y="320" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">single words, and nothing is missed</text>'
      + '<text x="320" y="364" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">detail is in the words themselves; attitude is in the word</text>'
      + '<text x="320" y="386" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the speaker chose instead of the plain one</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The two kinds of question, and where each answer is carried',
      columns: ['Question', 'What it wants', 'Where the answer is'],
      rows: [
        [
          'About detail',
          'A fact: a name, a number, a reason given',
          'In the words themselves',
        ],
        [
          'About attitude',
          'How the speaker felt: approving, doubtful, annoyed, amused, regretful',
          'In the tone, in the words chosen, and in what was left unsaid',
        ],
      ],
      note: 'Read every question before the recording starts and turn each '
        + 'one into a single thing to listen for. After that you are '
        + 'waiting for those things rather than following everything '
        + 'equally.',
    },
    {
      caption: 'The same fact reported two ways, and the attitude in the '
        + 'difference',
      columns: [
        'The plain word',
        'The word chosen instead',
        'What the choice carries',
      ],
      rows: [
        [
          'The scheme was abandoned',
          'The scheme collapsed',
          'Judgement: it fell of its own weight',
        ],
        ['He spoke for an hour', 'He went on for an hour', 'Impatience'],
        ['She asked again', 'She kept on asking', 'Annoyance'],
        ['The price went up', 'The price shot up', 'Alarm'],
      ],
      note: 'Both columns report the same fact, so the attitude is in the '
        + 'choice and nowhere else. Pointing at the chosen word is what '
        + 'the mark is for.',
    },
  ],
  questions: [
    {
      id: 'lis-1',
      ask: 'What should you do first in a listening test?',
      kind: 'choice',
      options: [
        'Read all the questions',
        'Start writing notes',
        'Close your eyes',
      ],
      answer: 'Read all the questions',
      teach: 'You hear it once, so the preparation has to happen first.',
      level: 3,
    },
    {
      id: 'lis-2',
      ask: 'Where is a speaker’s attitude mainly carried?',
      kind: 'choice',
      options: [
        'In the words chosen and the tone',
        'In the length of the passage',
        'In the first sentence only',
      ],
      answer: 'In the words chosen and the tone',
      teach: 'The word picked instead of the plain one is the evidence you '
        + 'quote.',
      level: 4,
    },
    {
      id: 'lis-3',
      ask: 'How should notes be written while listening?',
      kind: 'choice',
      options: [
        'Single words and figures',
        'Full sentences',
        'A summary paragraph',
      ],
      answer: 'Single words and figures',
      teach: 'Writing a sentence costs you the next three.',
      level: 5,
    },
  ],
})

/* ── summary writing ────────────────────────────────────────────────────── */

teach({
  topicId: 'summary-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A summary keeps the points and drops everything else: '
      + 'examples, repetition, description, the writer’s opinion. '
      + 'It is written in your own words, in continuous prose, '
      + 'inside the word limit.',
    method: [
      'Underline each separate point once.',
      'Write each in your own words as a short sentence.',
      'Join them into prose and count the words.',
    ],
  },

  idea:
    'A summary gives the points of a passage in fewer words. '
    + 'You keep each separate point once, and you drop the support '
    + 'under it. '
    + 'You write in your own words, '
    + 'in continuous prose rather than a list, '
    + 'in the third person, '
    + 'and inside the word limit you were given. '
    + 'You add nothing: '
    + 'no opinion of your own and no fact the passage did not state.',

  mechanism:
    'The reason summaries go wrong is that learners cut the wrong things. '
    + 'They shorten the sentences and keep all of them, '
    + 'and the result is the whole passage squeezed, '
    + 'which is over the limit and has no points in it. '
    + 'The cut has to be by kind, not by length, '
    + 'and the test for each sentence is one question: '
    + 'is this a new point, or is it support for a point already made? '
    + 'Support goes. '
    + 'An example is support. '
    + 'A second sentence saying the same thing differently is support. '
    + 'A description is almost always support. '
    + 'When a paragraph makes one point with three illustrations, '
    + 'you keep one sentence from the whole paragraph. '
    + 'That is what makes a summary short enough without losing anything '
    + 'that counts. '
    + 'Own words matters for a specific reason. '
    + 'A marker cannot tell whether a learner who copied has understood, '
    + 'so copying earns little even when the sentence chosen was the right '
    + 'one. '
    + 'And the word limit is part of the task, not a guideline. '
    + 'A summary over the limit is marked only up to the limit, '
    + 'so the points you put at the end are thrown away.',

  recap:
    'You can find the main idea of a paragraph. '
    + 'A summary does that for a whole passage '
    + 'and then writes the results as prose inside a word count.',

  method: [
    'Read the passage once for the whole sense.',
    'Read the question. It may ask about one aspect only.',
    'Read again, underlining each new point once.',
    'Ignore examples, repetition, description and opinion.',
    'Write each point in your own words as a short sentence.',
    'Count the points. Check none is a repeat.',
    'Join them into continuous prose with linking words.',
    'Count the words and cut to the limit.',
    'Read it back. It should make sense to somebody who has not read the '
      + 'passage.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which of these would be dropped from a summary? '
        + 'A statistic that supports the point, '
        + 'or the point itself?',
      steps: [
        'A summary keeps points and drops support.',
      ],
      answer: 'The statistic. It supports the point rather than being one.',
    },
    {
      level: 4,
      ask: 'A paragraph argues that bad roads cost farmers money, '
        + 'then gives three examples of spoilt produce. '
        + 'How much goes in the summary?',
      steps: [
        'The paragraph makes one point.',
        'The three examples all support that one point.',
      ],
      answer: 'One sentence: bad roads cost farmers money because produce '
        + 'spoils on the way. '
        + 'All three examples are dropped.',
    },
    {
      level: 5,
      ask: 'A learner shortens every sentence of a passage and stays close '
        + 'to the limit. '
        + 'Why does this score badly?',
      steps: [
        'She cut by length instead of by kind.',
        'So the examples and repetition are still there, in shorter form.',
        'The points are not separated out.',
        'A reader cannot see what the passage argued.',
      ],
      answer: 'Because she kept every sentence and only made them shorter. '
        + 'A summary selects the points and drops the support entirely.',
    },
  ],

  traps: [
    {
      mistake: 'Shortening every sentence instead of selecting points.',
      why: 'That gives a squeezed passage, not a summary. '
        + 'Cut by kind: points stay, support goes.',
    },
    {
      mistake: 'Copying sentences from the passage.',
      why: 'The marker cannot see understanding in a copied sentence, '
        + 'so it earns little.',
    },
    {
      mistake: 'Going over the word limit.',
      why: 'Marking stops at the limit, '
        + 'so anything after it is thrown away.',
    },
    {
      mistake: 'Adding your own opinion or a fact from elsewhere.',
      why: 'A summary reports the passage. '
        + 'Anything added is wrong by definition.',
    },
  ],

  extension:
    'Note making is the same selection with a different output. '
    + 'The points are listed with headings instead of joined into prose, '
    + 'which is faster to use and must not be handed in when a summary was '
    + 'asked for.',

  figure: {
    alt: 'Three bars against a dashed line marking the word limit. The '
      + 'passage is the longest. Shortening every sentence and keeping all '
      + 'of them, in red, still crosses the limit, and an arrow shows that '
      + 'the part beyond it is not marked. Keeping one sentence per point '
      + 'and cutting the support, in green, ends well inside the limit.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">cut by kind, not by length</text>'
      + '<path d="M 400 54 V 326" stroke-dasharray="8 6" stroke-width="2"/>'
      + '<text x="406" y="48" font-size="14" text-anchor="start" fill="currentColor" stroke="none">the word limit</text>'
      + '<text x="30" y="88" font-size="14" text-anchor="start" fill="currentColor" stroke="none">the passage</text>'
      + '<path d="M 30 100 H 600 V 136 H 30 Z"/>'
      + '<text x="315" y="122" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">every point, and all the support under each one</text>'
      + '<text x="30" y="178" font-size="14" text-anchor="start" fill="#c8433a" stroke="none">every sentence shortened, and all of them kept</text>'
      + '<path d="M 30 190 H 520 V 226 H 30 Z" stroke="#c8433a"/>'
      + '<text x="275" y="212" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">still over the limit, and no points stand out in it</text>'
      + '<path d="M 520 236 L 408 236" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 400 236 L 416 230 L 416 242 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="462" y="256" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">this part is not marked</text>'
      + '<text x="30" y="294" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">one sentence kept per point, and the support cut</text>'
      + '<path d="M 30 306 H 330 V 342 H 30 Z" stroke="#0f8a4d"/>'
      + '<text x="180" y="328" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">inside the limit, and every point in it</text>'
      + '<text x="320" y="378" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">ask of every sentence: is this a new point,</text>'
      + '<text x="320" y="396" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">or support for a point already made? Support goes.</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What to keep and what to cut, decided by kind and not by '
        + 'length',
      columns: ['What it is', 'Keep or cut', 'Why'],
      rows: [
        [
          'A new point',
          'Keep it, once',
          'The points are what a summary is made of',
        ],
        [
          'A second sentence saying the same thing',
          'Cut',
          'It is support for a point already made',
        ],
        ['An example', 'Cut', 'It is support'],
        ['A description', 'Cut, almost always', 'It is support'],
        [
          'A figure of speech',
          'Cut',
          'It is the writer’s manner, and not their point',
        ],
        [
          'Anything the question did not ask about',
          'Cut',
          'It earns nothing and spends the words you have',
        ],
      ],
      note: 'When a paragraph makes one point with three illustrations, one '
        + 'sentence survives the whole paragraph. That is what makes a '
        + 'summary short without losing anything that counts.',
    },
  ],
  questions: [
    {
      id: 'sum-1',
      ask: 'Which of these belongs in a summary?',
      kind: 'choice',
      options: ['A new point', 'An example', 'A description'],
      answer: 'A new point',
      teach: 'Examples and descriptions support points. '
        + 'A summary keeps the points.',
      level: 3,
    },
    {
      id: 'sum-2',
      ask: 'Why must a summary be in your own words?',
      kind: 'choice',
      options: [
        'A copied sentence does not show understanding',
        'It makes it shorter',
        'The passage is copyrighted',
      ],
      answer: 'A copied sentence does not show understanding',
      teach: 'That is what the marks are for.',
      level: 4,
    },
    {
      id: 'sum-3',
      ask: 'What happens to writing beyond the word limit?',
      kind: 'choice',
      options: [
        'It is not marked',
        'It earns half marks',
        'It is marked as an extension',
      ],
      answer: 'It is not marked',
      teach: 'So the points you leave until last are the ones you lose.',
      level: 5,
    },
  ],
})

/* ── figures of speech ─────────────────────────────────────────────────── */

teach({
  topicId: 'figures-of-speech',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A simile compares with like or as. '
      + 'A metaphor says one thing IS another. '
      + 'Personification gives human action to something not human. '
      + 'Irony says the opposite of what is meant. '
      + 'Naming it earns little. Saying what it achieves earns the mark.',
    method: [
      'Name the figure.',
      'Quote the words it is in.',
      'Say what it makes the reader see or feel.',
    ],
  },

  why:
    'A passage in your examination says: '
    + '"The harmattan had its hand on the town." '
    + 'The question asks what effect that has. '
    + 'You can see at once that the harmattan has no hand. '
    + 'So you write that it means the town was very dry. '
    + 'That is true, and it scores almost nothing. '
    + 'The marks are for saying what those words do '
    + 'that "the town was very dry" cannot do. '
    + 'You have no method for that yet. '
    + 'This topic is that method.',

  notation:
    'The words you are discussing go inside inverted commas, '
    + 'like this: "a hunted animal". '
    + 'Inverted commas are the pair of raised marks '
    + 'that show the words are copied from the passage and not your own. '
    + 'Copy them letter for letter. '
    + 'The names of the figures take a small letter: '
    + 'simile, metaphor, personification, irony. '
    + 'The commonest way to lose a mark is to quote the whole sentence '
    + 'instead of the few words the figure actually sits in.',

  idea:
    'A figure of speech says a thing in a way the plain words would not. '
    + 'The figures in the syllabus are few and each has its own job, '
    + 'and a question about one of them almost always asks for its '
    + 'effect rather than for its name.',

  mechanism:
    'Naming the figure is the easy half and the half worth fewest marks. '
    + 'The question nearly always asks for the effect, '
    + 'so the real skill is saying what the figure does that plain words '
    + 'would not. '
    + 'Compare "he was frightened" with "he was a hunted animal". '
    + 'The metaphor does three things the plain sentence cannot. '
    + 'It makes the fear physical rather than described. '
    + 'It puts something in the picture that is chasing him, '
    + 'so the sentence now implies a pursuer. '
    + 'And it makes him prey, which says something about power as well as '
    + 'fear. '
    + 'That is what you write in an answer. '
    + 'The difference between a simile and a metaphor is worth '
    + 'understanding rather than spotting by the word like. '
    + 'A simile holds the two things apart and says they resemble each '
    + 'other. '
    + 'A metaphor collapses them, so the qualities transfer completely, '
    + 'which is why a metaphor is usually the stronger of the two. '
    + 'Irony is the figure learners most often miss, '
    + 'because it depends on knowing the situation and not only the words. '
    + '"Wonderful weather" said in a downpour is irony, '
    + 'and the same words on a fine day are not, '
    + 'so irony is the one figure you cannot identify from the sentence '
    + 'alone.',

  recap:
    'A comparison puts two things side by side and says they are alike. '
    + '"The boy runs fast" is not a comparison. '
    + '"The boy runs like a deer" is one. '
    + 'It brings in a deer to tell you how fast. '
    + 'A sentence can also mean something its words do not say. '
    + 'A man is handed a heavy load and says, "Nice work." '
    + 'The words are praise and he means the opposite, '
    + 'and everybody standing there hears it. '
    + 'Both of those are ordinary speech, and everybody already uses them. '
    + 'This lesson gives them names '
    + 'and asks you to say what each one achieves.',

  method: [
    'Read the sentence and ask whether anything is being compared.',
    'If like or as is used, it is a simile.',
    'If one thing is called another outright, it is a metaphor.',
    'If something not human acts like a person, it is personification.',
    'If the words say the opposite of what is meant, it is irony.',
    'Name the figure and quote the exact words.',
    'Say what the reader now sees or feels.',
    'Say what plain words would have lost.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the figure: "Her voice was as sharp as a razor."',
      steps: [
        'Two things are compared.',
        'The comparison uses "as".',
      ],
      answer: 'A simile.',
    },
    {
      level: 4,
      ask: 'Name the figure and its effect: "The old house groaned in the '
        + 'wind."',
      steps: [
        'Groaning is something a person or animal does.',
        'A house cannot groan.',
        'So human action is given to a thing.',
      ],
      answer: 'Personification. '
        + 'It makes the house seem alive and suffering, '
        + 'so the reader feels its age rather than being told about it.',
    },
    {
      level: 5,
      ask: 'Why is "he was a hunted animal" stronger than "he was very '
        + 'frightened"?',
      steps: [
        'The metaphor makes the fear physical.',
        'It implies something chasing him, which the plain sentence does '
          + 'not.',
        'It makes him prey, which says something about power too.',
      ],
      answer: 'Because the metaphor shows the fear instead of naming it, '
        + 'adds a pursuer to the picture, '
        + 'and makes him prey, which the plain sentence cannot do.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the figure and stopping there.',
      why: 'The marks are for the effect. '
        + 'Say what the reader sees that plain words would not have shown.',
    },
    {
      mistake: 'Calling every comparison a metaphor.',
      why: 'With like or as it is a simile. '
        + 'A metaphor says the thing IS the other.',
    },
    {
      mistake: 'Trying to identify irony from the words alone.',
      why: 'Irony depends on the situation. '
        + '"Wonderful weather" is only ironic if the weather is bad.',
    },
    {
      mistake: 'Explaining an idiom word by word.',
      why: 'An idiom means something its words do not say. '
        + 'Give the meaning, not the translation.',
    },
  ],

  extension:
    'In a poem the figures work together rather than one at a time. '
    + 'If the whole poem treats a river as a person, '
    + 'then every line adds to one piece of personification, '
    + 'which is called an extended metaphor.',

  figure: {
    alt: 'He was frightened drawn in one box, with the note that it names '
      + 'the feeling and does nothing else. Beside it, in green, he was a '
      + 'hunted animal, with three ticked notes running down from it: the '
      + 'fear is physical rather than described, something is now chasing '
      + 'him, and he is prey, so the sentence is about power as well as '
      + 'fear.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">naming the figure is the easy half; the marks are in the effect</text>'
      + '<path d="M 24 60 H 294 V 118 H 24 Z"/>'
      + '<text x="159" y="96" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">he was frightened</text>'
      + '<text x="159" y="148" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">it names the feeling,</text>'
      + '<text x="159" y="168" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and that is all it does</text>'
      + '<path d="M 346 60 H 616 V 118 H 346 Z" stroke="#0f8a4d"/>'
      + '<text x="481" y="96" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">he was a hunted animal</text>'
      + '<path d="M 352 140 L 362 152 L 382 130" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="394" y="150" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">the fear is physical,</text>'
      + '<text x="394" y="168" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">not described</text>'
      + '<path d="M 352 196 L 362 208 L 382 186" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="394" y="206" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">something is now</text>'
      + '<text x="394" y="224" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">chasing him</text>'
      + '<path d="M 352 252 L 362 264 L 382 242" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="394" y="262" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">he is prey, so it is</text>'
      + '<text x="394" y="280" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">about power too</text>'
      + '<text x="159" y="226" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">a simile holds the two</text>'
      + '<text x="159" y="244" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">things apart: he ran LIKE</text>'
      + '<text x="159" y="262" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">a hunted animal</text>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a metaphor collapses the two, so every quality transfers,</text>'
      + '<text x="320" y="356" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">which is why it is usually the stronger of the two</text>'
      + '<text x="320" y="386" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">write the effect, not the name: that is where the marks are</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each figure of speech, an example of it, and what it does',
      columns: ['Figure', 'Example', 'What it does'],
      rows: [
        [
          'Simile',
          'He ran like a hunted animal',
          'Holds the two things apart and says they resemble each other',
        ],
        [
          'Metaphor',
          'He was a hunted animal',
          'Collapses the two, so every quality transfers',
        ],
        [
          'Personification',
          'The wind tore at the roof',
          'Gives a human action to something that is not human',
        ],
        [
          'Hyperbole',
          'I have told you a thousand times',
          'Exaggerates on purpose, and is not meant to be believed',
        ],
        [
          'Irony',
          'Wonderful weather, said in a downpour',
          'Says the opposite, and expects the listener to hear it',
        ],
        [
          'Idiom',
          'He let the cat out of the bag',
          'Means something its own words do not say',
        ],
        [
          'Proverb',
          'The rain does not fall on one roof alone',
          'States a general truth in a fixed form',
        ],
      ],
      note: 'Irony is the one you cannot name from the sentence alone, '
        + 'because it depends on the situation: the same two words on a '
        + 'fine day are not irony at all.',
    },
  ],
  questions: [
    {
      id: 'fig-1',
      ask: 'Which is a metaphor?',
      kind: 'choice',
      options: [
        'He is a lion in a fight.',
        'He fights like a lion.',
        'He fights as a lion does.',
      ],
      answer: 'He is a lion in a fight.',
      teach: 'A metaphor says the thing IS the other. '
        + 'Like and as make a simile.',
      level: 3,
    },
    {
      id: 'fig-2',
      ask: '"The sun smiled on the village." Which figure is this?',
      kind: 'choice',
      options: ['Personification', 'Simile', 'Irony'],
      answer: 'Personification',
      teach: 'Smiling is a human action given to something not human.',
      level: 4,
    },
    {
      id: 'fig-3',
      ask: 'What earns the marks in a figures of speech question?',
      kind: 'choice',
      options: [
        'Saying what the figure achieves',
        'Naming the figure',
        'Quoting the whole sentence',
      ],
      answer: 'Saying what the figure achieves',
      teach: 'Naming it is the easy half. '
        + 'The effect is what the question is really asking for.',
      level: 5,
    },
  ],
})

/* ── prose and drama ───────────────────────────────────────────────────── */

teach({
  topicId: 'prose-drama-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Plot is what happens and why. '
      + 'Character is who it happens to, shown by what they do. '
      + 'Setting is where and when, and it often makes the plot possible. '
      + 'Theme is what the whole work is about. '
      + 'Every claim needs evidence from the text.',
    method: [
      'State the point, then give the moment in the text that shows it.',
      'Describe a character from their actions, not from adjectives.',
      'Ask what the setting makes possible or impossible.',
    ],
  },

  idea:
    'Prose and drama are read for four things: '
    + 'plot, character, setting and theme. '
    + 'None of the four is a label to be attached. '
    + 'Each is a question to be asked of the text, '
    + 'and each answer has to carry a moment from the text with it. '
    + 'In drama there is no narrator, '
    + 'so everything reaches you through dialogue, action and stage '
    + 'directions. '
    + 'Every claim you make about any of these needs a moment from the text '
    + 'behind it.',

  mechanism:
    'The difference between an answer that scores and one that does not '
    + 'is almost always evidence, '
    + 'and the habit to build is simple: '
    + 'never write a claim without the moment that proves it. '
    + '"He is proud" is an assertion the marker cannot check. '
    + '"He is proud: he refuses his brother’s help even when the farm is '
    + 'failing" '
    + 'is the same claim with the text behind it, '
    + 'and it is worth several times as much. '
    + 'Character is where this matters most, '
    + 'because learners describe characters with adjectives '
    + 'and adjectives are not evidence. '
    + 'What a person does under pressure is evidence. '
    + 'Setting is the element most often wasted. '
    + 'Learners write that a story is set in a village and stop, '
    + 'as though it were a label. '
    + 'Ask instead what the setting makes possible or impossible. '
    + 'A story set in a small village where everyone knows everyone '
    + 'cannot have a secret kept for long, '
    + 'so the setting is driving the plot. '
    + 'That is the kind of observation a question about setting wants. '
    + 'And in drama, remember what has been taken away. '
    + 'There is no narrator to tell you what anybody is thinking, '
    + 'so a dramatist has to make characters reveal themselves in speech, '
    + 'which is why plays are full of arguments and confessions.',

  recap:
    'You have read stories and answered questions on them. '
    + 'This names the four elements examiners ask about '
    + 'and insists on evidence for every claim.',

  method: [
    'Read the whole work before writing about any part of it.',
    'For plot, write the events as a chain with so and because between '
      + 'them.',
    'For character, list what each one does at the turning points.',
    'Describe a character from those actions.',
    'For setting, ask what it makes possible or impossible.',
    'For theme, ask what the work is about beyond its events.',
    'Make a claim, then give the moment that shows it.',
    'Use the present tense for events in the work.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the difference between plot and setting?',
      steps: [
        'One is what happens.',
        'The other is where and when it happens.',
      ],
      answer: 'Plot is the chain of events. '
        + 'Setting is the place and time they happen in.',
    },
    {
      level: 4,
      ask: 'Improve this answer: "The main character is kind."',
      steps: [
        'The claim has no evidence.',
        'Find an action in the text that shows kindness.',
      ],
      answer: 'Something like: "She is kind: she gives her own food to the '
        + 'younger children when the harvest fails, '
        + 'and says nothing about it afterwards."',
    },
    {
      level: 5,
      ask: 'A play has no narrator. '
        + 'What does the writer have to do differently?',
      steps: [
        'Nobody can tell the audience what a character thinks.',
        'So thought must come out in speech or action.',
        'Characters have to be put in situations that make them speak.',
      ],
      answer: 'Everything has to be shown through dialogue and action, '
        + 'so the writer builds scenes that force characters to say what '
        + 'they think.',
    },
  ],

  traps: [
    {
      mistake: 'Retelling the story instead of answering the question.',
      why: 'A retelling shows you read it, nothing more. '
        + 'Answer what was asked, using events as evidence.',
    },
    {
      mistake: 'Describing a character with adjectives only.',
      why: 'Adjectives are claims. '
        + 'Actions are evidence.',
    },
    {
      mistake: 'Treating setting as scenery.',
      why: 'Setting limits what can happen. '
        + 'Say what it makes possible or impossible.',
    },
    {
      mistake: 'Writing about events in the past tense.',
      why: 'Convention uses the present for what happens in a text: '
        + '"he refuses", not "he refused".',
    },
  ],

  extension:
    'Conflict is the engine under all four elements: '
    + 'a character against another, against their circumstances, '
    + 'or against themselves. '
    + 'Naming the conflict usually explains the plot and the theme at once.',

  figure: {
    alt: 'Two pairs of answers compared. He is proud, in red, is an '
      + 'adjective the marker cannot check; he is proud because he refuses '
      + 'his brother’s help even as the farm fails, in green, is the same '
      + 'claim with a choice made under pressure behind it. Below, it is '
      + 'set in a village, in red, is a label; everyone knows everyone so '
      + 'the secret cannot be kept, in green, has the setting driving the '
      + 'plot.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">never a claim without the moment that proves it</text>'
      + '<text x="30" y="60" font-size="14" text-anchor="start" fill="currentColor" stroke="none">about a character</text>'
      + '<path d="M 24 72 H 300 V 124 H 24 Z" stroke="#c8433a"/>'
      + '<text x="162" y="104" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">He is proud.</text>'
      + '<text x="162" y="146" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">an adjective, and the marker</text>'
      + '<text x="162" y="164" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">has no way to check it</text>'
      + '<path d="M 340 72 H 616 V 124 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="478" y="94" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">He is proud: he refuses his</text>'
      + '<text x="478" y="114" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">brother’s help even as the farm fails.</text>'
      + '<text x="478" y="146" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the same claim, with a choice</text>'
      + '<text x="478" y="164" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">he made under pressure behind it</text>'
      + '<path d="M 24 186 H 616" stroke-dasharray="7 6" stroke-width="1.5"/>'
      + '<text x="30" y="222" font-size="14" text-anchor="start" fill="currentColor" stroke="none">about the setting</text>'
      + '<path d="M 24 234 H 300 V 286 H 24 Z" stroke="#c8433a"/>'
      + '<text x="162" y="265" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">It is set in a village.</text>'
      + '<text x="162" y="308" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">a label, and nothing follows</text>'
      + '<text x="162" y="326" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">from it</text>'
      + '<path d="M 340 234 H 616 V 286 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="478" y="256" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">Everyone knows everyone, so the</text>'
      + '<text x="478" y="276" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">secret cannot be kept for long.</text>'
      + '<text x="478" y="308" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the setting is driving the plot,</text>'
      + '<text x="478" y="326" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">which is what the question wants</text>'
      + '<text x="320" y="370" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">adjectives are not evidence; what a person does</text>'
      + '<text x="320" y="390" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">under pressure is</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The four elements, the question to ask of each, and what '
        + 'counts as evidence',
      columns: [
        'Element',
        'What it is',
        'The question to ask',
        'What counts as evidence',
      ],
      rows: [
        [
          'Plot',
          'The chain of events, and the links between them',
          'What made this happen?',
          'The earlier event that caused it',
        ],
        [
          'Character',
          'The people in it',
          'What did they do under pressure?',
          'A choice they made, never an adjective',
        ],
        [
          'Setting',
          'The place and the time',
          'What does it make possible, or impossible?',
          'Something the story could not do anywhere else',
        ],
        [
          'Theme',
          'What the work is about underneath the story',
          'What keeps coming back?',
          'Two or three separate moments that share it',
        ],
      ],
      note: 'Setting is the one most often wasted. Writing that a story is '
        + 'set in a village and stopping treats it as scenery, when it is '
        + 'one of the things driving the plot.',
    },
  ],
  questions: [
    {
      id: 'prd-1',
      ask: 'How is a character best shown?',
      kind: 'choice',
      options: [
        'By what they do and choose',
        'By adjectives describing them',
        'By their name',
      ],
      answer: 'By what they do and choose',
      teach: 'Actions are evidence. Adjectives are only claims.',
      level: 3,
    },
    {
      id: 'prd-2',
      ask: 'What should a question about setting be answered with?',
      kind: 'choice',
      options: [
        'What the setting makes possible or impossible',
        'A description of the scenery',
        'The year the work was written',
      ],
      answer: 'What the setting makes possible or impossible',
      teach: 'Setting drives the plot. It is not a label.',
      level: 4,
    },
    {
      id: 'prd-3',
      ask: 'What does a play lack that a novel has?',
      kind: 'choice',
      options: [
        'A narrator who can report thoughts',
        'Characters',
        'A plot',
      ],
      answer: 'A narrator who can report thoughts',
      teach: 'So everything must be shown through dialogue and action.',
      level: 5,
    },
  ],
})

/* ── formal and informal letters ───────────────────────────────────────── */

teach({
  topicId: 'formal-letter',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A formal letter has your address, the date, '
      + 'the receiver’s address, a salutation, a subject heading, '
      + 'the body, and a closing that matches the salutation. '
      + 'Dear Sir ends Yours faithfully. '
      + 'Dear Mr Mensah ends Yours sincerely. '
      + 'An informal letter drops the receiver’s address and the heading.',
    method: [
      'Lay out the addresses and date before writing anything else.',
      'Match the closing to the salutation.',
      'State your purpose in the first sentence.',
    ],
  },

  idea:
    'A formal letter is written to somebody in an official position, '
    + 'and its layout carries marks of its own. '
    + 'An informal letter to a friend or a relative '
    + 'keeps some of that furniture and drops the rest. '
    + 'The salutation and the closing go together as a pair, '
    + 'and mixing them is the commonest error in the topic.',

  mechanism:
    'The layout carries marks of its own, '
    + 'which is unusual and worth knowing, '
    + 'because it means a weak letter laid out correctly beats a good '
    + 'letter laid out wrongly. '
    + 'So the first thing you do is the furniture: '
    + 'addresses, date, salutation, heading, closing. '
    + 'Do that before you think about what to say, '
    + 'and those marks are secured whatever happens next. '
    + 'The pairing of salutation and closing has a reason that makes it '
    + 'easy to remember. '
    + 'Faithfully is used when you do not know who you are writing to, '
    + 'so you are being faithful to an office rather than a person. '
    + 'Sincerely is used when you do know them, '
    + 'because sincerity is something between people. '
    + 'Dear Sir with Yours sincerely is therefore a contradiction, '
    + 'and it is the single most common error in the topic. '
    + 'Register is the other half of the task. '
    + 'A formal letter uses no contractions, no slang and no jokes, '
    + 'and it states its business in the first sentence, '
    + 'because the person reading it has a pile of them. '
    + 'An informal letter may do all the things a formal one may not, '
    + 'and a learner who writes an informal letter in formal language '
    + 'has got it as wrong as the other way round.',

  recap:
    'You have written letters in primary school. '
    + 'This fixes the layout exactly, '
    + 'and separates the two kinds, '
    + 'because what is right in one is wrong in the other.',

  method: [
    'Write your address at the top right, then the date beneath it.',
    'For a formal letter, write the receiver’s address on the left.',
    'Write the salutation: Dear Sir, or Dear Mr Mensah.',
    'Add a subject heading, underlined.',
    'First paragraph: say why you are writing.',
    'Middle paragraphs: one point each.',
    'Last paragraph: say what you want to happen.',
    'Close to match the salutation.',
    'Sign, and print your name underneath.',
  ],

  worked: [
    {
      level: 3,
      ask: 'You have written Dear Sir. How must you close?',
      steps: [
        'Dear Sir means you do not know the name.',
        'That pairs with faithfully.',
      ],
      answer: 'Yours faithfully.',
    },
    {
      level: 4,
      ask: 'Rewrite for a formal letter: '
        + '"I can’t come to the meeting, sorry about that."',
      steps: [
        'Remove the contraction.',
        'Remove the casual apology.',
        'State it plainly and give a reason.',
      ],
      answer: '"I regret that I shall be unable to attend the meeting, '
        + 'as I have a prior engagement."',
    },
    {
      level: 5,
      ask: 'Why does Dear Sir pair with faithfully and Dear Mr Mensah with '
        + 'sincerely?',
      steps: [
        'Dear Sir means the person is unknown to you.',
        'You are writing to the office, so you are faithful to it.',
        'Dear Mr Mensah means you know who they are.',
        'Sincerity is something between people.',
      ],
      answer: 'Faithfully goes with an unknown reader, '
        + 'because you are addressing a position. '
        + 'Sincerely goes with a named reader, '
        + 'because you are addressing a person.',
    },
  ],

  traps: [
    {
      mistake: 'Dear Sir closed with Yours sincerely.',
      why: 'The commonest error in the topic. '
        + 'Unknown name takes faithfully.',
    },
    {
      mistake: 'Writing the letter before laying it out.',
      why: 'Marks are given for the layout. '
        + 'Secure them first.',
    },
    {
      mistake: 'Contractions and slang in a formal letter.',
      why: 'Cannot, not can’t. '
        + 'The register is part of what is being marked.',
    },
    {
      mistake: 'A subject heading on an informal letter.',
      why: 'It belongs only in a formal letter. '
        + 'Writing to a friend with a heading is as wrong as the reverse.',
    },
  ],

  extension:
    'An application for a job is a formal letter with one addition. '
    + 'The second paragraph has to say what you can do. '
    + 'And every claim in it should be something the reader could '
    + 'check.',

  figure: {
    alt: 'A formal letter laid out on a page, with the parts that carry '
      + 'layout marks drawn in green: your address at the top right, the '
      + 'date under it, the receiver’s address on the left, Dear Sir, an '
      + 'underlined subject heading, and Yours faithfully above the '
      + 'signature. The body is drawn plain, and lines join Dear Sir to '
      + 'the note that there is no name, and to Yours faithfully as its '
      + 'pair.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the layout carries marks of its own, so do the furniture first</text>'
      + '<path d="M 110 40 H 430 V 392 H 110 Z" stroke-width="2"/>'
      + '<path d="M 310 66 H 412" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 330 84 H 412" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 346 102 H 412" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 348 128 H 412" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 128 158 H 250" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 128 176 H 236" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 128 194 H 214" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="128" y="230" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">Dear Sir,</text>'
      + '<text x="128" y="262" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">REQUEST FOR A TRANSCRIPT</text>'
      + '<path d="M 128 268 H 322" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 128 292 H 412" stroke-width="2"/>'
      + '<path d="M 128 310 H 412" stroke-width="2"/>'
      + '<path d="M 128 328 H 356" stroke-width="2"/>'
      + '<text x="128" y="358" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">Yours faithfully,</text>'
      + '<path d="M 128 376 C 146 362, 160 388, 178 370 S 206 376, 220 366" stroke-width="2"/>'
      + '<text x="446" y="88" font-size="13" text-anchor="start" fill="currentColor" stroke="none">your address</text>'
      + '<text x="446" y="132" font-size="13" text-anchor="start" fill="currentColor" stroke="none">the date</text>'
      + '<text x="446" y="180" font-size="13" text-anchor="start" fill="currentColor" stroke="none">who it goes to</text>'
      + '<text x="446" y="230" font-size="13" text-anchor="start" fill="currentColor" stroke="none">salutation</text>'
      + '<text x="446" y="266" font-size="13" text-anchor="start" fill="currentColor" stroke="none">subject heading</text>'
      + '<text x="446" y="314" font-size="13" text-anchor="start" fill="currentColor" stroke="none">the body, with the</text>'
      + '<text x="446" y="332" font-size="13" text-anchor="start" fill="currentColor" stroke="none">business in sentence one</text>'
      + '<text x="446" y="358" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">closing: faithfully,</text>'
      + '<text x="446" y="376" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">because Dear Sir</text>'
      + '<text x="20" y="230" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">no name,</text>'
      + '<text x="20" y="248" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">so Sir</text>'
      + '<path d="M 76 226 H 104" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 436 354 H 418" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 436 226 H 418" stroke="#0f8a4d" stroke-width="2"/>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What goes in a formal letter, and what an informal one does '
        + 'instead',
      columns: ['Part', 'Formal letter', 'Informal letter'],
      rows: [
        ['Your address and the date', 'Top right', 'Top right, the same'],
        ['The receiver’s address', 'On the left, under the date', 'Left out'],
        ['Subject heading', 'In capitals, or underlined', 'Left out'],
        ['Salutation', 'Dear Sir, or Dear Mr Mensah', 'Dear Kofi'],
        [
          'Closing',
          'Yours faithfully, or Yours sincerely',
          'Yours affectionately, or something like it',
        ],
        [
          'Register',
          'No contractions, no slang, the business in sentence one',
          'Anything you would say aloud',
        ],
      ],
      note: 'Faithfully goes with Dear Sir, because you are being faithful '
        + 'to an office rather than to a person. Sincerely goes with a '
        + 'name, because sincerity is something between people. Dear Sir '
        + 'with Yours sincerely is a contradiction.',
    },
  ],
  questions: [
    {
      id: 'ltr-1',
      ask: 'Where does your own address go in a formal letter?',
      kind: 'choice',
      options: ['Top right', 'Top left', 'At the end'],
      answer: 'Top right',
      teach: 'Your address top right, the date beneath, '
        + 'and the receiver’s address on the left.',
      level: 3,
    },
    {
      id: 'ltr-2',
      ask: 'Dear Madam should be closed with:',
      kind: 'choice',
      options: ['Yours faithfully', 'Yours sincerely', 'Yours truly'],
      answer: 'Yours faithfully',
      teach: 'No name means faithfully.',
      level: 4,
    },
    {
      id: 'ltr-3',
      ask: 'Which belongs in a formal letter but not an informal one?',
      kind: 'choice',
      options: [
        'A subject heading',
        'The date',
        'Your own address',
      ],
      answer: 'A subject heading',
      teach: 'The date and your address appear in both. '
        + 'The heading and the receiver’s address are formal only.',
      level: 5,
    },
  ],
})

/* ── phrases, clauses and sentence types ──────────────────────────────── */

teach({
  topicId: 'sentence-types',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A phrase has no verb of its own. '
      + 'A clause has a subject and a verb. '
      + 'A simple sentence has one main clause. '
      + 'A compound sentence joins two main clauses with and, but or so. '
      + 'A complex sentence has a main clause and a subordinate one.',
    method: [
      'Look for a subject and a verb. That makes it a clause.',
      'Count the clauses that could stand alone.',
      'A joining word like because or although signals a complex sentence.',
    ],
  },

  idea:
    'A phrase and a clause are told apart by one thing. '
    + 'A clause has a verb of its own, and a phrase does not. '
    + 'A clause that makes sense alone is a main clause, '
    + 'and one that does not is subordinate. '
    + 'Sentences are then named by how many of each they hold.',

  mechanism:
    'The test for every question in this topic is the same, '
    + 'and it takes five seconds: look for a subject and a verb. '
    + 'If both are there it is a clause. '
    + 'If not, it is a phrase, however long it is. '
    + '"The man in the long blue shirt from Tamale" is seven words and has '
    + 'no verb, '
    + 'so it is a phrase. '
    + '"He left" is two words with a subject and a verb, '
    + 'so it is a clause and in fact a sentence. '
    + 'Length has nothing to do with it. '
    + 'Then to classify the sentence, ask which clauses could stand alone. '
    + 'Two that could, joined by and or but, is compound. '
    + 'One that could and one that could not is complex. '
    + 'And the reason any of this is worth knowing is control. '
    + 'A paragraph of simple sentences reads like a list, '
    + 'and a paragraph of long complex ones loses the reader. '
    + 'Mixing them is what makes writing readable, '
    + 'and you cannot mix what you cannot name. '
    + 'The complex sentence also does something the compound one cannot: '
    + 'it ranks ideas. '
    + '"It rained and we stayed inside" gives the two facts equal weight. '
    + '"Because it rained, we stayed inside" says one caused the other, '
    + 'and puts the staying inside first in importance. '
    + 'That is why subordination is the more useful of the two.',

  recap:
    'You can identify a subject and a verb in a sentence. '
    + 'This builds on that: '
    + 'a group with both is a clause, '
    + 'and how clauses are joined decides the type of sentence.',

  method: [
    'Find the verb. If there is none, it is a phrase.',
    'Find the subject of that verb. Both present means a clause.',
    'Ask whether the clause could stand alone as a sentence.',
    'One standalone clause only: simple.',
    'Two standalone clauses joined by and, but, or, so: compound.',
    'One standalone and one that cannot stand: complex.',
    'When writing, vary the types on purpose.',
    'Use a complex sentence when one idea depends on another.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Phrase or clause? "After the long rain."',
      steps: [
        'Look for a verb.',
        'There is none.',
      ],
      answer: 'A phrase.',
    },
    {
      level: 4,
      ask: 'What type of sentence is this? '
        + '"Although he was tired, he finished the work."',
      steps: [
        '"He finished the work" could stand alone.',
        '"Although he was tired" could not.',
        'One main clause and one subordinate.',
      ],
      answer: 'Complex.',
    },
    {
      level: 5,
      ask: 'What is the difference in meaning between '
        + '"It rained and we stayed inside" and '
        + '"Because it rained, we stayed inside"?',
      steps: [
        'The first joins two main clauses, giving them equal weight.',
        'The second subordinates one to the other.',
        'So the second states a cause as well as two facts.',
      ],
      answer: 'The compound sentence reports two facts equally. '
        + 'The complex one says the rain caused the staying inside, '
        + 'and makes the staying inside the main point.',
    },
  ],

  traps: [
    {
      mistake: 'Deciding by length whether something is a phrase.',
      why: 'A seven word group with no verb is a phrase. '
        + 'A two word group with a subject and verb is a clause.',
    },
    {
      mistake: 'Calling any long sentence complex.',
      why: 'Complex means it contains a subordinate clause. '
        + 'A long compound sentence is still compound.',
    },
    {
      mistake: 'Writing a subordinate clause as a whole sentence.',
      why: '"Because it rained." is not a sentence. '
        + 'It needs a main clause with it.',
    },
    {
      mistake: 'Writing every sentence the same way.',
      why: 'All simple reads like a list. '
        + 'All complex loses the reader. Mix them.',
    },
  ],

  extension:
    'A compound complex sentence has two main clauses and a subordinate '
    + 'one. '
    + 'It is the longest form that stays readable, '
    + 'and beyond it a sentence should be split.',

  figure: {
    alt: 'On the left, a compound sentence drawn as two boxes of the same '
      + 'size, it rained and we stayed inside, joined by and, so the two '
      + 'facts weigh the same. On the right, a complex sentence drawn as '
      + 'one large green box holding the main clause, we stayed inside, '
      + 'with a smaller box beneath it holding because it rained, which '
      + 'cannot stand alone.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">and joins two ideas; because ranks one under the other</text>'
      + '<text x="180" y="62" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">compound</text>'
      + '<path d="M 24 82 H 152 V 142 H 24 Z"/>'
      + '<text x="88" y="118" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">it rained</text>'
      + '<text x="180" y="118" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and</text>'
      + '<path d="M 208 82 H 336 V 142 H 208 Z"/>'
      + '<text x="272" y="110" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">we stayed</text>'
      + '<text x="272" y="130" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">inside</text>'
      + '<text x="180" y="170" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">two boxes the same size:</text>'
      + '<text x="180" y="190" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the facts weigh the same</text>'
      + '<text x="490" y="62" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">complex</text>'
      + '<path d="M 386 82 H 610 V 142 H 386 Z" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="498" y="110" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">we stayed inside</text>'
      + '<text x="498" y="132" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the main clause</text>'
      + '<path d="M 498 176 V 152" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 498 144 L 491 160 L 505 160 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 420 178 H 576 V 228 H 420 Z" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="498" y="200" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">because it rained</text>'
      + '<text x="498" y="220" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">it cannot stand alone</text>'
      + '<text x="490" y="256" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">one is ranked under the other,</text>'
      + '<text x="490" y="276" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">and it gives the reason for it</text>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so a complex sentence does what a compound one cannot:</text>'
      + '<text x="320" y="356" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">it says which of the two ideas matters</text>'
      + '<text x="320" y="384" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and the test for a clause is always the same: has it a verb of its own?</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Phrase or clause, decided by the verb and never by the '
        + 'length',
      columns: [
        'Group of words',
        'Has a verb of its own?',
        'Can it stand alone?',
        'So it is',
      ],
      rows: [
        ['in the blue shirt', 'No', 'No', 'A phrase'],
        [
          'the man in the long blue shirt from Tamale',
          'No',
          'No',
          'Still a phrase, however long',
        ],
        ['he left', 'Yes', 'Yes', 'A clause, and a whole sentence'],
        ['because the rain stopped', 'Yes', 'No', 'A subordinate clause'],
      ],
      note: 'The test takes five seconds and it never changes: look for a '
        + 'verb of its own.',
    },
    {
      caption: 'The three kinds of sentence, and what each one is made of',
      columns: ['Sentence', 'What it holds', 'Example'],
      rows: [
        ['Simple', 'One main clause', 'The rain stopped.'],
        [
          'Compound',
          'Two main clauses, joined by and, but, or or so',
          'The rain stopped and we went out.',
        ],
        [
          'Complex',
          'A main clause and at least one subordinate clause',
          'Because the rain stopped, we went out.',
        ],
      ],
      note: 'Only the complex sentence ranks its ideas. It rained and we '
        + 'stayed inside gives the two facts equal weight; because it '
        + 'rained, we stayed inside says one caused the other.',
    },
  ],
  questions: [
    {
      id: 'sen-1',
      ask: 'What makes a group of words a clause?',
      kind: 'choice',
      options: [
        'It has a subject and a verb',
        'It is longer than five words',
        'It starts with a capital letter',
      ],
      answer: 'It has a subject and a verb',
      teach: 'Length has nothing to do with it.',
      level: 3,
    },
    {
      id: 'sen-2',
      ask: '"He read the book and she wrote the letter." This is:',
      kind: 'choice',
      options: ['Compound', 'Complex', 'Simple'],
      answer: 'Compound',
      teach: 'Two clauses that could each stand alone, joined by and.',
      level: 4,
    },
    {
      id: 'sen-3',
      ask: 'What can a complex sentence do that a compound one cannot?',
      kind: 'choice',
      options: [
        'Rank one idea above another',
        'Be longer',
        'Contain two verbs',
      ],
      answer: 'Rank one idea above another',
      teach: 'Subordination says which idea is the main point '
        + 'and which depends on it.',
      level: 5,
    },
  ],
})

/* ── active and passive voice ─────────────────────────────────────────── */

teach({
  topicId: 'active-passive',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Active: the subject does the action. '
      + 'Passive: the subject receives it. '
      + 'To make a sentence passive, move the object to the front, '
      + 'add a form of be with the past participle, '
      + 'and put the doer after by, or leave it out. '
      + 'The passive is right when the doer is unknown or does not matter.',
    method: [
      'Find who is doing and who is receiving.',
      'To go passive, start with the receiver.',
      'Ask whether leaving the doer out is honest in that sentence.',
    ],
  },

  idea:
    'In the active voice the subject does the action: '
    + 'the boy broke the window. '
    + 'In the passive the subject receives it: '
    + 'the window was broken by the boy. '
    + 'To change active to passive, '
    + 'make the object the new subject, '
    + 'use the right form of the verb be with the past participle, '
    + 'and put the original subject after by. '
    + 'The doer can be dropped: the window was broken. '
    + 'To go from passive back to active, put the doer first '
    + 'and remove the be and the by.',

  mechanism:
    'Learners are often told the passive is weak writing, '
    + 'and that is a rule of thumb mistaken for a rule. '
    + 'The passive is the right choice in three situations, '
    + 'and knowing them is what the examination is testing. '
    + 'In each of the three the doer is either genuinely unknown '
    + 'or simply beside the point, '
    + 'so leaving it out loses the reader nothing. '
    + 'The passive is not weak. It is a tool with three jobs. '
    + 'But it also has one dishonest use, and you should be able to name '
    + 'it. '
    + 'Because the passive allows the doer to be left out, '
    + 'it can hide who is responsible. '
    + '"Mistakes were made" admits a fault and names nobody. '
    + '"The money was lost" says less than "I lost the money", '
    + 'and it says less on purpose. '
    + 'So when you meet a passive sentence, '
    + 'the useful question is whether the missing doer is missing because '
    + 'they are unknown, '
    + 'or because somebody would rather not say.',

  recap:
    'You know what a subject, a verb and an object are. '
    + 'This swaps the subject and the object around '
    + 'and changes the verb to match.',

  method: [
    'Identify the subject, the verb and the object.',
    'For the passive, make the object the new subject.',
    'Choose the form of be that keeps the original tense.',
    'Add the past participle of the main verb.',
    'Put the original subject after by, or leave it out.',
    'Check the tense has not changed.',
    'Before choosing the passive, ask why the doer is being moved.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Make this passive: "The teacher marked the books."',
      steps: [
        'The object is "the books". It becomes the subject.',
        'Past tense, so use "were".',
        'The participle of mark is marked.',
      ],
      answer: '"The books were marked by the teacher."',
    },
    {
      level: 4,
      ask: 'Make this active: "The letter has been written by Ama."',
      steps: [
        'The doer is Ama, so she goes first.',
        'Remove been and by.',
        'Keep the perfect tense: has written.',
      ],
      answer: '"Ama has written the letter."',
    },
    {
      level: 5,
      ask: 'Why is "the shop was robbed last night" better than any active '
        + 'version?',
      steps: [
        'An active sentence needs a doer as its subject.',
        'Nobody knows who robbed the shop.',
        'So any active version would have to invent or guess a doer.',
      ],
      answer: 'Because the doer is unknown. '
        + 'The passive lets the sentence be true without naming somebody, '
        + 'which no active version could do.',
    },
  ],

  traps: [
    {
      mistake: 'Changing the tense while changing the voice.',
      why: '"The books were marked" is past, like the original. '
        + '"The books are marked" is not.',
    },
    {
      mistake: 'Believing the passive is always wrong.',
      why: 'It is right when the doer is unknown, '
        + 'when the receiver matters more, and in scientific writing.',
    },
    {
      mistake: 'Using the passive to avoid saying who was responsible.',
      why: '"Mistakes were made" is grammatical and evasive. '
        + 'Notice it when you read it and when you write it.',
    },
    {
      mistake: 'Forgetting the past participle.',
      why: '"The window was break" is not passive. '
        + 'It needs broken.',
    },
  ],

  extension:
    'A verb with no object cannot be made passive at all. '
    + '"He slept" has nothing to move to the front, '
    + 'which is a neat way of seeing that the passive works by promoting '
    + 'the object.',

  figure: {
    alt: 'The boy broke the window drawn as three boxes, then the same '
      + 'sentence again in the passive. A red curve carries the window '
      + 'from the end of the active sentence to the front of the passive '
      + 'one, and a green curve carries the boy from the front to the '
      + 'back, where the dashed box round by the boy shows that it can be '
      + 'dropped altogether.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the object moves to the front, and the doer goes to the back</text>'
      + '<text x="30" y="68" font-size="15" text-anchor="start" fill="currentColor" stroke="none">active</text>'
      + '<path d="M 60 82 H 196 V 128 H 60 Z"/>'
      + '<text x="128" y="110" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">The boy</text>'
      + '<text x="128" y="146" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">the doer</text>'
      + '<path d="M 212 82 H 326 V 128 H 212 Z"/>'
      + '<text x="269" y="110" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">broke</text>'
      + '<path d="M 342 82 H 510 V 128 H 342 Z"/>'
      + '<text x="426" y="110" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">the window</text>'
      + '<text x="426" y="146" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">what it happened to</text>'
      + '<path d="M 380 170 C 340 212, 200 196, 130 232" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 122 236 L 140 226 L 144 240 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 150 170 C 240 230, 420 212, 500 234" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 508 236 L 490 244 L 492 228 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="30" y="244" font-size="15" text-anchor="start" fill="currentColor" stroke="none">passive</text>'
      + '<path d="M 60 252 H 228 V 298 H 60 Z"/>'
      + '<text x="144" y="280" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">The window</text>'
      + '<path d="M 244 252 H 400 V 298 H 244 Z"/>'
      + '<text x="322" y="280" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">was broken</text>'
      + '<text x="322" y="316" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">be, plus the past participle</text>'
      + '<path d="M 416 252 H 552 V 298 H 416 Z" stroke-dasharray="7 6" stroke="#0f8a4d"/>'
      + '<text x="484" y="280" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">by the boy</text>'
      + '<text x="484" y="316" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">and this can be dropped</text>'
      + '<text x="320" y="356" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">that dropping is what makes the passive useful</text>'
      + '<text x="320" y="382" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">when nobody knows who did it, and dishonest when somebody does</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three jobs the passive does, and why it is right for '
        + 'each',
      columns: ['The situation', 'The sentence', 'Why the passive'],
      rows: [
        [
          'Nobody knows who did it',
          'The shop was robbed last night',
          'Naming a doer would be inventing one',
        ],
        [
          'The receiver is what the sentence is about',
          'The bridge was completed in 1965',
          'The bridge is the subject of the paragraph, not the builders',
        ],
        [
          'Scientific writing',
          'The mixture was heated',
          'The procedure matters, not the person holding the flask',
        ],
      ],
      note: 'There is a fourth use of it and that one is dishonest. Because '
        + 'the passive lets the doer be left out, it can hide who is '
        + 'responsible: mistakes were made admits a fault and names '
        + 'nobody.',
    },
  ],
  questions: [
    {
      id: 'voi-1',
      ask: 'Which sentence is passive?',
      kind: 'choice',
      options: [
        'The ball was kicked by Kofi.',
        'Kofi kicked the ball.',
        'Kofi is kicking the ball.',
      ],
      answer: 'The ball was kicked by Kofi.',
      teach: 'The subject, the ball, receives the action.',
      level: 3,
    },
    {
      id: 'voi-2',
      ask: 'When is the passive the better choice?',
      kind: 'choice',
      options: [
        'When the doer is unknown or unimportant',
        'When you want a longer sentence',
        'Never',
      ],
      answer: 'When the doer is unknown or unimportant',
      teach: 'Also in scientific writing, '
        + 'where the procedure matters more than who performed it.',
      level: 4,
    },
    {
      id: 'voi-3',
      ask: 'What is the dishonest use of the passive?',
      kind: 'choice',
      options: [
        'Leaving out who was responsible',
        'Making sentences longer',
        'Changing the tense',
      ],
      answer: 'Leaving out who was responsible',
      teach: '"Mistakes were made" admits a fault and names nobody.',
      level: 5,
    },
  ],
})

/* ── concord ───────────────────────────────────────────────────────────── */

teach({
  topicId: 'concord-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The verb must agree with its subject. '
      + 'Find the real subject first, '
      + 'because words between the subject and the verb do not change it. '
      + 'Either, neither, each and every take a singular verb. '
      + 'Two subjects joined by and take a plural one.',
    method: [
      'Find the subject and ignore everything between it and the verb.',
      'Decide whether that subject is singular or plural.',
      'Check the special cases: either, neither, each, every, none.',
    ],
  },

  idea:
    'Concord means the subject and the verb agree in number. '
    + 'The boy runs. The boys run. '
    + 'Almost all of the difficulty is in finding the subject, '
    + 'because other words can sit between it and the verb, '
    + 'and because some words that look plural are not.',

  mechanism:
    'Nearly every concord error has one cause: '
    + 'the writer agreed the verb with the nearest noun '
    + 'instead of with the subject. '
    + 'The sentence "a box of nails are heavy" happens because nails sits '
    + 'next to the verb '
    + 'and sounds plural in the writer’s ear. '
    + 'But the box is heavy, not the nails, '
    + 'and the subject is box. '
    + 'So the single habit that fixes this topic '
    + 'is to cover everything between the subject and the verb with your '
    + 'finger, '
    + 'then read it: a box is heavy. '
    + 'Every phrase beginning with of, with, together with, as well as, '
    + 'or including is such an interruption, '
    + 'and none of them changes the subject. '
    + 'The words that look plural and are not need a different reason, '
    + 'and there is one. '
    + 'Each, every and either are picking out one at a time: '
    + 'each of the boys is counting them one by one, '
    + 'which is why the verb is singular even though boys is plural. '
    + 'Once you hear each as "each one", nothing about it is strange. '
    + 'Either or and neither nor are the one case where position matters: '
    + 'the verb agrees with whichever subject is nearer to it, '
    + 'so neither the teacher nor the pupils were ready '
    + 'and neither the pupils nor the teacher was ready are both correct.',

  recap:
    'You already say "he goes" and "they go" without thinking. '
    + 'This topic is the cases where the subject is hard to find, '
    + 'or where a word that looks plural is not.',

  method: [
    'Find the verb.',
    'Find its subject: who or what is doing it.',
    'Cover everything between the two with your finger.',
    'Read the subject and verb together.',
    'Check for and: two subjects joined by and are plural.',
    'Check for each, every, either, neither: these are singular.',
    'For either or and neither nor, agree with the nearer subject.',
    'For a collective noun, ask whether it is acting as one body.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Correct this: "The boys is playing."',
      steps: [
        'The subject is boys, which is plural.',
      ],
      answer: '"The boys are playing."',
    },
    {
      level: 4,
      ask: 'Correct this: "A basket of oranges were delivered."',
      steps: [
        'Find the subject: what was delivered? A basket.',
        'Cover "of oranges".',
        '"A basket ... was delivered."',
      ],
      answer: '"A basket of oranges was delivered."',
    },
    {
      level: 5,
      ask: 'Which is correct, and why? '
        + '"Neither the teacher nor the pupils was ready" or '
        + '"... were ready"?',
      steps: [
        'With neither nor, the verb agrees with the nearer subject.',
        'The nearer subject here is pupils.',
        'Pupils is plural.',
      ],
      answer: '"Neither the teacher nor the pupils were ready." '
        + 'The verb follows the nearer subject.',
    },
  ],

  traps: [
    {
      mistake: 'Agreeing the verb with the nearest noun.',
      why: 'It is the commonest error in the topic. '
        + 'Cover the words between the subject and the verb.',
    },
    {
      mistake: 'Treating each and every as plural.',
      why: 'They pick out one at a time, '
        + 'so the verb is singular however many there are.',
    },
    {
      mistake: 'Thinking as well as makes a subject plural.',
      why: 'It does not. '
        + '"The teacher, as well as the pupils, is ready" is correct.',
    },
    {
      mistake: 'Using a plural verb after a collective noun acting as one.',
      why: '"The team is winning" when it acts as one body. '
        + '"The team are arguing" when the members act separately.',
    },
  ],

  extension:
    'Concord of person works the same way. '
    + 'A pronoun must match the noun it stands for in number. '
    + 'That is why "every pupil must bring their book" is disputed. '
    + '"All pupils must bring their books" is not.',

  figure: {
    alt: 'The sentence a box of nails are heavy written out, with a red '
      + 'curve running from nails to are to show the ear agreeing the verb '
      + 'with the nearest noun. Beneath it the same sentence with of nails '
      + 'boxed out in dashes, leaving a box is heavy, and a green curve '
      + 'running from box straight to is.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">cover what sits between, and the subject is obvious</text>'
      + '<text x="140" y="110" font-size="22" text-anchor="start" fill="currentColor" stroke="none">A box</text>'
      + '<text x="212" y="110" font-size="22" text-anchor="start" fill="currentColor" stroke="none">of nails</text>'
      + '<text x="310" y="110" font-size="22" text-anchor="start" fill="#c8433a" stroke="none">are</text>'
      + '<text x="362" y="110" font-size="22" text-anchor="start" fill="currentColor" stroke="none">heavy</text>'
      + '<path d="M 255 122 C 262 152, 310 152, 322 124" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 324 118 L 314 132 L 328 134 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="290" y="174" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">the ear agrees the verb with the nearest noun,</text>'
      + '<text x="290" y="192" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">and nails is not the subject</text>'
      + '<path d="M 60 222 H 580" stroke-dasharray="7 6" stroke-width="1.5"/>'
      + '<text x="140" y="288" font-size="22" text-anchor="start" fill="#0f8a4d" stroke="none">A box</text>'
      + '<path d="M 208 266 H 300 V 296 H 208 Z" stroke-dasharray="6 5" stroke-width="2"/>'
      + '<text x="254" y="289" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">. . .</text>'
      + '<text x="310" y="288" font-size="22" text-anchor="start" fill="#0f8a4d" stroke="none">is</text>'
      + '<text x="352" y="288" font-size="22" text-anchor="start" fill="currentColor" stroke="none">heavy</text>'
      + '<path d="M 182 262 C 200 232, 300 232, 318 260" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 320 266 L 308 254 L 322 250 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="254" y="330" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">cover it with your finger and read it again:</text>'
      + '<text x="254" y="348" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">a box is heavy</text>'
      + '<text x="320" y="384" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">of, with, together with, as well as and including all start such an interruption</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The concord rules, each with the sentence that tests it',
      columns: ['Rule', 'The sentence', 'Why'],
      rows: [
        [
          'Words between the subject and the verb change nothing',
          'The box of nails is heavy',
          'The subject is box, and not nails',
        ],
        [
          'Two subjects joined by and take a plural verb',
          'Kofi and Ama are here',
          'There are two of them',
        ],
        [
          'Each, every, either and neither take a singular verb',
          'Each of the boys is counted',
          'They pick the boys out one at a time',
        ],
        [
          'Everybody, somebody and nobody take a singular verb',
          'Nobody was ready',
          'It is one person, whoever that person is',
        ],
        [
          'With either or and neither nor, the verb follows the nearer subject',
          'Neither the teacher nor the pupils were ready',
          'And neither the pupils nor the teacher was ready',
        ],
        [
          'A collective noun acting as one body takes a singular verb',
          'The team is winning',
          'The team is doing one thing together',
        ],
      ],
      note: 'Every phrase beginning with of, with, together with, as well '
        + 'as or including is an interruption of the first kind, and not '
        + 'one of them changes the subject.',
    },
  ],
  questions: [
    {
      id: 'cnc-1',
      ask: 'Which is correct?',
      kind: 'choice',
      options: [
        'The list of names is on the wall.',
        'The list of names are on the wall.',
        'The list of names were on the wall.',
      ],
      answer: 'The list of names is on the wall.',
      teach: 'The subject is list, not names.',
      level: 3,
    },
    {
      id: 'cnc-2',
      ask: 'Which verb goes with "each of the pupils"?',
      kind: 'choice',
      options: ['has', 'have', 'were'],
      answer: 'has',
      teach: 'Each means each one, so the verb is singular.',
      level: 4,
    },
    {
      id: 'cnc-3',
      ask: 'With neither nor, the verb agrees with:',
      kind: 'choice',
      options: [
        'the subject nearer to it',
        'the first subject',
        'always the plural one',
      ],
      answer: 'the subject nearer to it',
      teach: 'This is the one case in concord where position decides.',
      level: 5,
    },
  ],
})
