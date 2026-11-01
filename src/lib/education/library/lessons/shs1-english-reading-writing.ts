/**
 * Stored lessons for SHS 1 English Language: comprehension, narrative
 * writing, speech sounds and literary devices.
 *
 * Written at about grade 9 to 10, which is inside the SHS expectation of
 * 10 to 12.
 *
 * ── Why these four belong together ─────────────────────────────────────────
 *
 * All four are marked on evidence rather than on recall, and all four are
 * failed in the same way: by answering a question the paper did not ask.
 * A comprehension answer that copies a sentence out has not answered in
 * the candidate's own words. A narrative that lists events has not shown
 * anything. A device named without its effect has earned nothing. And a
 * sounds question answered from how a word is spelled, rather than from how
 * it is said, is answered from the wrong evidence altogether.
 *
 * So each lesson here is built on the same move: point at the thing in the
 * text, then say what it does. `comprehension-passage` asks it of a
 * writer's sentence, `literary-devices-shs` asks it of a writer's choice,
 * `narrative-descriptive-shs` asks the learner to make the choice
 * themselves, and `vowels-consonants` asks it of their own mouth.
 *
 * `vowels-consonants` is written for Ghanaian speakers specifically. The
 * mergers it names are the ones that actually occur here, and the lesson
 * says plainly that they are features of Ghanaian English and not errors
 * of character, while still teaching the distinctions the examination
 * tests. Pretending the mergers do not exist would make the lesson useless
 * to the learner sitting in front of it.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── comprehension of an unseen passage ─────────────────────────────────── */

teach({
  topicId: 'comprehension-passage',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A comprehension answer must come from the passage '
      + 'and be written in your own words. '
      + 'Literal questions are answered by locating; '
      + 'inferential questions by reasoning from what is on the page; '
      + 'vocabulary questions by replacing the word so the sentence '
      + 'still means the same. '
      + 'The marks follow the question word.',
    method: [
      'Read the whole passage once before looking at the questions.',
      'Read each question and decide what kind it is.',
      'Find the part of the passage that answers it.',
      'Rewrite the answer in your own words, in a full sentence.',
    ],
  },

  idea:
    'A comprehension passage is unseen, '
    + 'so every answer has to be built from the text in front of you '
    + 'and not from general knowledge. '
    + 'There are three kinds of question. '
    + 'A literal question asks for something stated outright, '
    + 'and is answered by finding it. '
    + 'An inferential question asks for something the passage implies '
    + 'but does not say, '
    + 'and is answered by pointing at the evidence '
    + 'and then reasoning from it. '
    + 'A vocabulary question gives a word or phrase as used in the '
    + 'passage '
    + 'and asks what it means there, '
    + 'which is settled by the sentence it sits in '
    + 'and not by the dictionary alone. '
    + 'The instruction in your own words is part of the question. '
    + 'Copying a sentence out of the passage scores nothing, '
    + 'because the point of the exercise is to show you understood it. '
    + 'The question word tells you the shape of the answer: '
    + 'why asks for a reason, '
    + 'how asks for a manner or a method, '
    + 'what effect asks for a consequence, '
    + 'and identify asks only for naming.',

  mechanism:
    'The work in comprehension is done before the writing, '
    + 'and the order matters. '
    + 'Read the whole passage first, '
    + 'even though it feels faster to read the questions and hunt. '
    + 'Hunting finds the word and misses the sense, '
    + 'and the inferential questions, '
    + 'which carry the most marks, '
    + 'cannot be answered from one sentence at all. '
    + 'Then take each question and name its kind, '
    + 'because the kind decides the method. '
    + 'For a vocabulary question there is a test '
    + 'that turns guessing into checking: '
    + 'substitute your answer back into the sentence. '
    + 'If the sentence still says the same thing, '
    + 'the answer is right, '
    + 'and if it reads oddly, '
    + 'the meaning you chose is a different sense of the word. '
    + 'Take the passage said the trader was bent on going. '
    + 'Bent means curved in another sentence, '
    + 'but substituting curved on going gives nonsense, '
    + 'while determined to go reads exactly as the passage did. '
    + 'The grammar must match too: '
    + 'a verb is replaced by a verb, '
    + 'and an answer in the wrong form loses the mark '
    + 'even when the meaning is understood. '
    + 'For an inferential question, '
    + 'the answer has two parts and candidates usually give one. '
    + 'Why was the woman anxious '
    + 'is answered by the evidence, '
    + 'she kept looking towards the road, '
    + 'and then by the reasoning, '
    + 'because her son had not returned. '
    + 'Evidence with no reasoning is a quotation, '
    + 'and reasoning with no evidence is a guess. '
    + 'Last, the own words instruction. '
    + 'It does not mean replacing every word with a synonym, '
    + 'which usually produces something worse. '
    + 'It means understanding the sentence and then saying it, '
    + 'so the technical names stay, '
    + 'and the structure changes. '
    + 'Answer in a full sentence that would make sense '
    + 'to somebody who had not read the question, '
    + 'and keep it short: '
    + 'an examiner marking a two mark question '
    + 'is looking for two things, not for a paragraph.',

  recap:
    'You have found information in a passage '
    + 'and answered questions on what you read. '
    + 'This names the three kinds of question, '
    + 'and adds the habit of giving evidence '
    + 'and then the reasoning from it.',

  method: [
    'Read the whole passage once, without stopping.',
    'Read it again, marking who, where and what changes.',
    'Read the first question and decide its kind.',
    'Find the part of the passage that bears on it.',
    'For a vocabulary question, substitute your answer back into the '
      + 'sentence.',
    'For an inference, write the evidence and then the reasoning.',
    'Write the answer in your own words, in a full sentence.',
    'Check the number of marks and give that many points.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A passage says: The lorry left Accra at dawn and reached '
        + 'Takoradi at noon. '
        + 'Question: when did the lorry leave?',
      steps: [
        'A literal question. The answer is stated.',
      ],
      answer: 'It left at dawn. '
        + 'A full sentence, and nothing added.',
    },
    {
      level: 4,
      ask: 'In the same passage: '
        + 'the driver glanced again and again at the fuel gauge. '
        + 'What does this suggest about the driver?',
      steps: [
        'Inferential, so give the evidence and then the reasoning.',
        'Evidence: he looked at the gauge repeatedly.',
        'Reasoning: he was worried the fuel would not last.',
      ],
      answer: 'He was anxious about running out of fuel, '
        + 'because he kept checking the gauge rather than looking at it '
        + 'once.',
    },
    {
      level: 5,
      ask: 'What does the phrase bent on reaching the market mean as '
        + 'used in the passage?',
      steps: [
        'Test a meaning by substitution.',
        'Curved on reaching is nonsense.',
        'Determined to reach keeps the sense and the grammar.',
      ],
      answer: 'Determined to reach the market. '
        + 'The grammatical form matches: a phrase replaced by a phrase.',
    },
    {
      level: 6,
      ask: 'A question is worth three marks and asks: '
        + 'why did the trader refuse the offer? '
        + 'What should the answer contain?',
      steps: [
        'Three marks means three separate points.',
        'Each point needs evidence from the passage.',
        'The question word is why, so each point is a reason.',
      ],
      answer: 'Three distinct reasons, each drawn from the passage '
        + 'and each written in your own words. '
        + 'One well explained reason still scores one mark, '
        + 'because the marks are for separate points, not for length.',
    },
  ],

  traps: [
    {
      mistake: 'Copying a sentence from the passage.',
      why: 'In your own words is part of the question. '
        + 'A copied sentence shows nothing was understood.',
    },
    {
      mistake: 'Answering from general knowledge.',
      why: 'Only the passage counts. '
        + 'What you know about lorries is not evidence here.',
    },
    {
      mistake: 'Giving evidence with no reasoning, or the reverse.',
      why: 'An inference needs both: '
        + 'what the passage says, and what follows from it.',
    },
    {
      mistake: 'Answering a vocabulary question with the wrong word '
        + 'class.',
      why: 'Replace a verb with a verb. '
        + 'Substitute your answer back and read the sentence.',
    },
  ],

  extension:
    'Summary writing is comprehension with the answers joined up: '
    + 'find the points the question asks for, '
    + 'drop everything else including the examples, '
    + 'and write them in continuous prose '
    + 'within the word limit. '
    + 'The commonest loss there is including an illustration '
    + 'that supports a point already made.',

  questions: [
    {
      id: 'com-1',
      ask: 'An inferential question asks for something that is:',
      kind: 'choice',
      options: [
        'implied by the passage',
        'stated in the passage',
        'known from outside the passage',
      ],
      answer: 'implied by the passage',
      teach: 'You reason from the evidence on the page.',
      level: 4,
    },
    {
      id: 'com-2',
      ask: 'The best test for a vocabulary answer is to:',
      kind: 'choice',
      options: [
        'substitute it back into the sentence',
        'recall the dictionary meaning',
        'choose the longest option',
      ],
      answer: 'substitute it back into the sentence',
      teach: 'If the sentence still means the same, the answer fits.',
      level: 5,
    },
    {
      id: 'com-3',
      ask: 'Copying a sentence from the passage as your answer:',
      kind: 'choice',
      options: [
        'scores nothing when own words are asked for',
        'is safest, because it cannot be wrong',
        'scores half marks',
      ],
      answer: 'scores nothing when own words are asked for',
      teach: 'The instruction is part of the question.',
      level: 4,
    },
    {
      id: 'com-4',
      ask: 'A question worth three marks needs:',
      kind: 'choice',
      options: [
        'three separate points',
        'three sentences on one point',
        'a long paragraph',
      ],
      answer: 'three separate points',
      teach: 'Marks are for distinct points, not for length.',
      level: 5,
    },
  ],
})

/* ── narrative and descriptive writing ──────────────────────────────────── */

teach({
  topicId: 'narrative-descriptive-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A narrative needs one clear problem, '
      + 'a middle that makes it worse, '
      + 'and an end that settles it. '
      + 'Show rather than tell: '
      + 'give the detail that makes the reader conclude it for '
      + 'themselves. '
      + 'Control the pace by spending words where the story turns '
      + 'and summarising everything else.',
    method: [
      'Plan the problem, the turning point and the ending before '
        + 'writing.',
      'Open in the middle of something happening.',
      'Replace every feeling word with what was seen, heard or done.',
      'Slow down at the turning point and summarise the rest.',
    ],
  },

  idea:
    'A narrative tells what happened; '
    + 'a description makes a reader see something. '
    + 'In an examination both are marked on content, organisation, '
    + 'expression and mechanical accuracy, '
    + 'so a good story spelled badly loses as much '
    + 'as a dull one written cleanly. '
    + 'A workable narrative has one problem, not three. '
    + 'The beginning puts somebody in a situation, '
    + 'the middle makes it harder, '
    + 'and the end settles it, '
    + 'for better or for worse. '
    + 'Showing means giving the evidence '
    + 'and letting the reader draw the conclusion: '
    + 'not she was nervous, '
    + 'but she read the same line of the letter three times. '
    + 'Pace is controlled by how many words you spend: '
    + 'the moment the story turns gets the detail, '
    + 'and the three weeks before it get a sentence. '
    + 'Description works by selection, '
    + 'and the senses other than sight are the ones that '
    + 'are forgotten and that carry the most: '
    + 'the smell of the market at midday, '
    + 'the sound of a gutter after rain.',

  mechanism:
    'The single change that lifts a WASSCE narrative '
    + 'is replacing stated feelings with evidence, '
    + 'and it can be done mechanically. '
    + 'Go through the draft, '
    + 'circle every word naming a feeling, '
    + 'angry, happy, afraid, worried, '
    + 'and replace each with what a camera would have recorded. '
    + 'He was angry becomes he set the cup down harder than he meant '
    + 'to. '
    + 'The reader supplies the word angry, '
    + 'and because they supplied it themselves they believe it. '
    + 'That is the whole of show rather than tell, '
    + 'and it is a rule you can apply without talent. '
    + 'The second mechanism is pace, '
    + 'which is where most scripts go wrong even when the writing is '
    + 'clean. '
    + 'A story that gives equal space to every event reads as a list: '
    + 'I woke up, I bathed, I ate, I went to school, and then the '
    + 'accident happened. '
    + 'Four sentences of nothing and one sentence of everything. '
    + 'The repair is to decide which single moment the story is about '
    + 'and spend half the words there. '
    + 'Summarise the approach in a clause, '
    + 'on the Thursday after the rains began, '
    + 'and then slow right down. '
    + 'Third, the opening. '
    + 'Begin in the middle of something happening, '
    + 'not with waking up and not with an explanation of who '
    + 'everybody is. '
    + 'The reader will work out the background from what people do. '
    + 'Fourth, keep the tense and the person steady. '
    + 'A story begun in the past tense that slips into the present '
    + 'for the exciting part is a common and heavily penalised fault, '
    + 'and so is a first person story '
    + 'that forgets and describes the narrator from outside. '
    + 'Read the draft once for tense alone, looking at nothing else. '
    + 'Last, the plan is not optional, '
    + 'and five minutes of it saves the whole essay. '
    + 'Write three lines before you start: '
    + 'the problem, the turning point, the ending. '
    + 'Most failed narratives are not badly written, '
    + 'they are narratives whose writer did not know '
    + 'how they would end when they began, '
    + 'and the last paragraph shows it.',

  recap:
    'You have written a story with a beginning, a middle and an end, '
    + 'and described a place using the senses. '
    + 'This adds control: '
    + 'showing instead of telling, '
    + 'and spending words where the story turns.',

  method: [
    'Read the question and note what kind of story is asked for.',
    'Write three lines of plan: problem, turning point, ending.',
    'Decide the tense and the person and keep them.',
    'Open in the middle of something happening.',
    'Summarise the approach to the turning point in a clause or two.',
    'Slow down at the turning point and give concrete detail.',
    'Replace every feeling word with what was seen, heard or done.',
    'End within a paragraph of the turning point.',
    'Read once for tense, once for concord, once for punctuation.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Improve by showing: She was very happy.',
      steps: [
        'Ask what a camera would have recorded.',
      ],
      answer: 'She read the result twice, then ran to tell her mother '
        + 'without putting on her sandals.',
    },
    {
      level: 4,
      ask: 'Improve the opening: '
        + 'My name is Kofi and I am a student at a school in Kumasi. '
        + 'One day something happened to me.',
      steps: [
        'It explains instead of starting.',
        'Begin inside the event, and let the reader learn the rest.',
      ],
      answer: 'The gate was already locked when I reached the school '
        + 'that Monday, and I could hear the assembly bell inside.',
    },
    {
      level: 5,
      ask: 'A narrative about losing a wallet at Kejetia market '
        + 'spends a paragraph on the journey there '
        + 'and one sentence on the loss. '
        + 'What is wrong and how is it repaired?',
      steps: [
        'The pace is inverted: words are spent where nothing happens.',
        'Summarise the journey in a clause.',
        'Spend the detail on the moment of discovery.',
      ],
      answer: 'Reduce the journey to something like '
        + 'by the time the trotro reached Kejetia the sun was high, '
        + 'then give four or five sentences to the pocket, the hand, '
        + 'the faces in the crowd and the first thought.',
    },
    {
      level: 6,
      ask: 'Plan a narrative on the title: A day I shall never forget.',
      steps: [
        'Choose one problem, not a whole day of events.',
        'Problem: the examination entry form is missing on the last '
          + 'day for submission.',
        'Turning point: the form is found in a book lent to a '
          + 'classmate who has travelled.',
        'Ending: the headmaster accepts a sworn statement, '
          + 'and the narrator never lends a book with papers in it '
          + 'again.',
      ],
      answer: 'Three lines of plan, then write. '
        + 'The title says never forget, '
        + 'so the ending must say why it stayed with the narrator, '
        + 'which is what turns a sequence of events into a story.',
    },
  ],

  traps: [
    {
      mistake: 'Naming feelings instead of showing them.',
      why: 'Circle every feeling word and replace it with what a '
        + 'camera would record.',
    },
    {
      mistake: 'Giving equal space to every event.',
      why: 'It reads as a list. '
        + 'Summarise the approach, slow down at the turning point.',
    },
    {
      mistake: 'Slipping from past tense into present.',
      why: 'It is heavily penalised. '
        + 'Read the draft once for tense and nothing else.',
    },
    {
      mistake: 'Starting with who you are and where you live.',
      why: 'That is background, not a beginning. '
        + 'Open inside the event.',
    },
  ],

  extension:
    'Dialogue moves a narrative faster than description '
    + 'and shows character at the same time, '
    + 'but it has to be punctuated correctly to earn anything, '
    + 'with a new line for each speaker '
    + 'and the speaker’s own punctuation inside the quotation marks. '
    + 'Two or three exchanges at the turning point '
    + 'are worth a paragraph of explanation.',

  questions: [
    {
      id: 'nar-1',
      ask: 'Show rather than tell means:',
      kind: 'choice',
      options: [
        'give the detail and let the reader conclude',
        'use longer adjectives',
        'describe everything you can see',
      ],
      answer: 'give the detail and let the reader conclude',
      teach: 'The reader who supplies the word believes it.',
      level: 4,
    },
    {
      id: 'nar-2',
      ask: 'In a narrative, the most words should be spent:',
      kind: 'choice',
      options: [
        'at the turning point',
        'on the background',
        'evenly throughout',
      ],
      answer: 'at the turning point',
      teach: 'Summarise the rest in a clause. Equal space reads as a '
        + 'list.',
      level: 5,
    },
    {
      id: 'nar-3',
      ask: 'Before writing, a candidate should plan:',
      kind: 'choice',
      options: [
        'the problem, the turning point and the ending',
        'the first sentence only',
        'nothing, to stay natural',
      ],
      answer: 'the problem, the turning point and the ending',
      teach: 'Most failed narratives are ones whose writer did not know '
        + 'the ending.',
      level: 4,
    },
    {
      id: 'nar-4',
      ask: 'Changing from past to present tense halfway through:',
      kind: 'choice',
      options: [
        'is a serious and common fault',
        'adds excitement',
        'is acceptable in a story',
      ],
      answer: 'is a serious and common fault',
      teach: 'Choose a tense and hold it. Read the draft for tense '
        + 'alone.',
      level: 6,
    },
  ],
})

/* ── vowel and consonant sounds ─────────────────────────────────────────── */

teach({
  topicId: 'vowels-consonants',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Spelling does not tell you the sound. '
      + 'English has more vowel sounds than vowel letters, '
      + 'and a sounds question is answered by how a word is said. '
      + 'Ghanaian English merges several pairs that the examination '
      + 'keeps apart, '
      + 'so those pairs have to be learned as pairs.',
    method: [
      'Say the word aloud before answering.',
      'Group the words by sound, not by spelling.',
      'For a minimal pair, practise the two words one after the other.',
      'Learn the merged pairs as a list, because the ear will not '
        + 'separate them.',
    ],
  },

  idea:
    'A vowel sound is made with the air flowing freely; '
    + 'a consonant sound involves some blocking or narrowing. '
    + 'English has five vowel letters '
    + 'and about twenty vowel sounds, '
    + 'so the same letter carries different sounds '
    + 'and the same sound is spelled many ways. '
    + 'The vowel in meet, meat, mete and machine is one sound '
    + 'with four spellings. '
    + 'So a question asking which word has the same vowel sound as '
    + 'another '
    + 'cannot be answered by looking. '
    + 'A long vowel is held, as in seat; '
    + 'a short vowel is clipped, as in sit. '
    + 'A diphthong is a glide from one vowel to another inside one '
    + 'syllable, '
    + 'as in boy, house and face. '
    + 'For consonants the distinctions the examination tests most '
    + 'are between the two th sounds, as in thin and this, '
    + 'and between l and r, '
    + 'and between the sound at the end of judge and the one at the '
    + 'end of church. '
    + 'A minimal pair is two words differing in one sound only, '
    + 'such as ship and sheep, '
    + 'and it is the tool for hearing a distinction you do not yet '
    + 'make.',

  mechanism:
    'Several distinctions that English examinations test '
    + 'are not made in most Ghanaian speech, '
    + 'and that is a fact about the variety spoken here, '
    + 'not a fault in the speaker. '
    + 'But because WASSCE tests them, '
    + 'they have to be learned deliberately, '
    + 'and knowing which ones they are '
    + 'is most of the work. '
    + 'The mergers that matter are these. '
    + 'The long and short i, as in sheep and ship, '
    + 'are often both said as the long one, '
    + 'so seat and sit sound alike. '
    + 'The two th sounds are often said as t and d, '
    + 'so think becomes tink and this becomes dis. '
    + 'The vowel in bird and the vowel in bed '
    + 'are often merged. '
    + 'And a final consonant cluster is often simplified, '
    + 'so asked loses the k '
    + 'and the plural or past ending disappears, '
    + 'which matters in writing as well as in speech, '
    + 'because a learner who does not say the d of walked '
    + 'is more likely to leave it out on paper. '
    + 'The method for each is the same, '
    + 'and it is practice in pairs rather than practice of one word. '
    + 'Say ship, sheep, ship, sheep '
    + 'until the two feel different in the mouth, '
    + 'because the ear cannot be trained by listening alone '
    + 'if the mouth never makes the contrast. '
    + 'For the th sounds, put the tongue tip lightly between the teeth '
    + 'and push air: thin has no voice, this has voice in the throat. '
    + 'A hand on the throat tells you which you have made. '
    + 'In the paper itself the whole of the method is one sentence: '
    + 'say the word before you answer. '
    + 'The questions are built on the gap between spelling and sound, '
    + 'so the wrong answers are always the ones that look right. '
    + 'Asked which word has the same vowel sound as cough, '
    + 'the option though looks closest and is wrong, '
    + 'while off looks nothing like it and is right. '
    + 'Group the options by sound in the margin, '
    + 'and ignore how they are written.',

  recap:
    'You have matched letters to sounds, '
    + 'and sounded out new words in reading. '
    + 'This separates the two: '
    + 'the sound is what the question asks about, '
    + 'and the spelling is a distraction.',

  method: [
    'Read the question and find which sound is being asked about.',
    'Say every option aloud, quietly, before choosing.',
    'Write the options in groups by the sound you hear.',
    'Ignore the spelling entirely.',
    'For a known merged pair, recall it from your learned list rather '
      + 'than from your ear.',
    'Check your answer by saying the two words one after the other.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which of these has the same vowel sound as seat: '
        + 'sit, meat, set?',
      steps: [
        'Say them. Seat and meat are held long.',
        'Sit is clipped short.',
      ],
      answer: 'meat.',
    },
    {
      level: 4,
      ask: 'Which word does not belong by vowel sound: '
        + 'through, true, tough?',
      steps: [
        'Through and true both have the long oo sound.',
        'Tough rhymes with cuff.',
      ],
      answer: 'tough. '
        + 'All three are spelled with ou and only two sound alike.',
    },
    {
      level: 5,
      ask: 'Say which of thin and this is voiced, and how you can tell.',
      steps: [
        'Put a hand on the throat and say each.',
        'Thin has only air; this buzzes.',
      ],
      answer: 'This is voiced, thin is voiceless. '
        + 'Both are written th, which is why the spelling cannot '
        + 'decide it.',
    },
    {
      level: 6,
      ask: 'A learner says I ask him yesterday for I asked him '
        + 'yesterday. '
        + 'What is happening, and why does it matter in writing?',
      steps: [
        'The final cluster sked is simplified in speech, '
          + 'so the d is not heard.',
        'The learner writes what they say.',
        'The past tense marker is then missing on paper, '
          + 'which is a grammar error, not a pronunciation one.',
      ],
      answer: 'A consonant cluster has been simplified, '
        + 'and the lost sound takes the tense marker with it. '
        + 'Practising the full cluster aloud, asked, walked, stopped, '
        + 'fixes an error in two subjects at once.',
    },
  ],

  traps: [
    {
      mistake: 'Answering a sounds question from the spelling.',
      why: 'Through and tough share four letters and no vowel sound. '
        + 'Say the words.',
    },
    {
      mistake: 'Trusting your ear on a merged pair.',
      why: 'If your speech does not separate sheep and ship, '
        + 'listening will not decide it. '
        + 'Learn those pairs as a list.',
    },
    {
      mistake: 'Treating th as one sound.',
      why: 'Thin is voiceless and this is voiced. '
        + 'A hand on the throat tells them apart.',
    },
    {
      mistake: 'Dropping the end of a cluster in speech and then in '
        + 'writing.',
      why: 'Asked and walked carry the past tense in that cluster. '
        + 'Lose the sound and the grammar goes with it.',
    },
  ],

  extension:
    'Stress is tested too, and it changes meaning. '
    + 'In a two syllable word that is both a noun and a verb, '
    + 'the noun is usually stressed on the first syllable '
    + 'and the verb on the second: '
    + 'a record, to record; '
    + 'a present, to present. '
    + 'Sentence stress goes to the word carrying the new information, '
    + 'which is why the same sentence can be said many ways.',

  questions: [
    {
      id: 'snd-1',
      ask: 'Which has the same vowel sound as feet?',
      kind: 'choice',
      options: [
        'meat',
        'fit',
        'fate',
      ],
      answer: 'meat',
      teach: 'One sound, several spellings. Say them aloud.',
      level: 3,
    },
    {
      id: 'snd-2',
      ask: 'A minimal pair is:',
      kind: 'choice',
      options: [
        'two words differing in one sound only',
        'two words that rhyme',
        'two words with the same spelling',
      ],
      answer: 'two words differing in one sound only',
      teach: 'Ship and sheep. It is the tool for learning a '
        + 'distinction.',
      level: 4,
    },
    {
      id: 'snd-3',
      ask: 'The th in this differs from the th in thin because it is:',
      kind: 'choice',
      options: [
        'voiced',
        'longer',
        'spelled differently',
      ],
      answer: 'voiced',
      teach: 'Put a hand on your throat. This buzzes; thin does not.',
      level: 5,
    },
    {
      id: 'snd-4',
      ask: 'Why should a sounds question never be answered from the '
        + 'spelling?',
      kind: 'choice',
      options: [
        'English spells one sound many ways',
        'the spelling is usually wrong',
        'the examiner forbids it',
      ],
      answer: 'English spells one sound many ways',
      teach: 'Meet, meat, mete and machine share one vowel sound.',
      level: 5,
    },
  ],
})

/* ── literary devices ───────────────────────────────────────────────────── */

teach({
  topicId: 'literary-devices-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Naming a device earns almost nothing. '
      + 'The marks are for the effect: '
      + 'what the choice makes the reader see, hear or feel, '
      + 'and why the writer wanted that. '
      + 'So every answer has three parts: '
      + 'name it, quote it, say what it does.',
    method: [
      'Quote the words exactly.',
      'Name the device.',
      'Say what the comparison or the sound adds.',
      'Link it to the mood or the meaning of the whole passage.',
    ],
  },

  idea:
    'A literary device is a choice a writer makes '
    + 'about how to say something '
    + 'rather than about what to say. '
    + 'A simile compares using like or as: '
    + 'the road was as rough as a file. '
    + 'A metaphor compares by saying one thing is another: '
    + 'the market was a furnace. '
    + 'Personification gives a thing human qualities: '
    + 'the harmattan scraped at the windows. '
    + 'Hyperbole exaggerates deliberately. '
    + 'Irony says one thing and means the opposite, '
    + 'or describes an outcome that is the reverse of what was '
    + 'intended. '
    + 'Onomatopoeia uses a word that sounds like its meaning. '
    + 'Alliteration repeats an initial consonant sound, '
    + 'and assonance repeats a vowel sound. '
    + 'Repetition insists. '
    + 'Imagery is the general name for language that appeals to the '
    + 'senses. '
    + 'In every case, the question is not what it is called '
    + 'but what it does to the reader.',

  mechanism:
    'The difference between a weak answer and a full one here '
    + 'is the whole of the lesson, '
    + 'and it is easiest to see side by side. '
    + 'The passage reads: the lorry coughed twice and died on the hill. '
    + 'A weak answer says this is personification. '
    + 'True, and nearly worthless, '
    + 'because it tells the examiner only that a term has been '
    + 'memorised. '
    + 'A full answer says: '
    + 'coughed and died are personification, '
    + 'and they make the lorry seem old and ill rather than merely '
    + 'broken, '
    + 'which prepares the reader for the driver’s weariness in the '
    + 'next paragraph. '
    + 'Name it, quote it, say what it does, and connect it. '
    + 'So the test to apply to your own answer is this: '
    + 'could the sentence have been written '
    + 'about a completely different passage? '
    + 'If yes, it is a label and not an answer, '
    + 'because the effect you described is not in the words you '
    + 'quoted. '
    + 'The second habit is to say what the comparison actually '
    + 'transfers. '
    + 'The market was a furnace '
    + 'is not merely vivid, '
    + 'it carries heat, noise, danger and the idea of something being '
    + 'consumed, '
    + 'and which of those the writer wants '
    + 'depends on what surrounds it. '
    + 'A good answer picks the one the passage supports. '
    + 'Third, sound devices need the sound described, not just named. '
    + 'Alliteration in the wind whistled in the withered weeds '
    + 'does not just link the words: '
    + 'the repeated w is breathy, '
    + 'so the line imitates the wind it describes. '
    + 'That sentence earns the mark; the word alliteration does not. '
    + 'Last, do not hunt for devices that are not there. '
    + 'A candidate who calls every comparison a metaphor, '
    + 'or who finds alliteration in two words that merely start with '
    + 'the same letter '
    + 'but not the same sound, '
    + 'such as church and chemist, '
    + 'loses credit. '
    + 'And remember the question of why the writer chose it: '
    + 'a device in a poem about loss and the same device in an '
    + 'advertisement '
    + 'are doing different work, '
    + 'and the mark is for noticing which.',

  recap:
    'You have named similes, metaphors and personification, '
    + 'and found them in a poem. '
    + 'This asks for the effect as well as the name, '
    + 'and for the link between the choice and the meaning of the '
    + 'whole piece.',

  method: [
    'Read the passage or poem through for its overall meaning first.',
    'Find a phrase that is doing more than stating a fact.',
    'Quote it exactly.',
    'Name the device.',
    'Say what the comparison or the sound transfers to the subject.',
    'Link that to the mood or the argument of the whole piece.',
    'Test your answer: could it have been written about another '
      + 'passage?',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the device: Her voice was like a radio left on all '
        + 'night.',
      steps: [
        'A comparison using like.',
      ],
      answer: 'A simile.',
    },
    {
      level: 4,
      ask: 'Give the effect, not just the name: '
        + 'The examination hall was a courtroom.',
      steps: [
        'Metaphor: the hall is said to be a courtroom.',
        'A courtroom brings judgement, silence and consequence.',
      ],
      answer: 'The metaphor transfers judgement and dread to the hall, '
        + 'so the reader feels the candidates are on trial '
        + 'rather than being tested.',
    },
    {
      level: 5,
      ask: 'Comment on the sound: '
        + 'the drums rumbled and the roof rattled.',
      steps: [
        'Rumbled and rattled are onomatopoeic.',
        'The repeated r is alliteration.',
        'Both are rough, low sounds.',
      ],
      answer: 'The words imitate the noise they name, '
        + 'and the repeated r makes the line itself sound rough, '
        + 'so the reader hears the storm rather than being told about '
        + 'it.',
    },
    {
      level: 6,
      ask: 'Why is it wrong to answer only: this is irony?',
      steps: [
        'Naming shows recall, not understanding.',
        'The mark is for the effect and the purpose.',
      ],
      answer: 'Because the examiner is asking what the choice achieves. '
        + 'A full answer quotes the words, names the irony, '
        + 'says what the gap between what is said and what is meant '
        + 'exposes, '
        + 'and connects that to the writer’s attitude to the subject.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the device and stopping.',
      why: 'The name is worth almost nothing. '
        + 'The marks are for the effect.',
    },
    {
      mistake: 'Writing an effect that would fit any passage.',
      why: 'Makes it more interesting is not an effect. '
        + 'Say what these words transfer to this subject.',
    },
    {
      mistake: 'Calling every comparison a metaphor.',
      why: 'With like or as it is a simile. '
        + 'The distinction is tested.',
    },
    {
      mistake: 'Finding alliteration in letters rather than sounds.',
      why: 'Church and chemist begin with the same letters and '
        + 'different sounds. '
        + 'Alliteration is about sound.',
    },
  ],

  extension:
    'In a prose passage the devices usually serve characterisation '
    + 'or mood, '
    + 'and in a poem they usually serve the central image, '
    + 'so the link you draw should point at different things. '
    + 'In poetry also look at the structure itself: '
    + 'a short last line, or a stanza break in the middle of a '
    + 'sentence, '
    + 'is a choice with an effect, '
    + 'and it can be commented on in exactly the same three parts.',

  questions: [
    {
      id: 'lit-1',
      ask: 'A comparison using like or as is:',
      kind: 'choice',
      options: [
        'a simile',
        'a metaphor',
        'personification',
      ],
      answer: 'a simile',
      teach: 'A metaphor says one thing is another, with no like or as.',
      level: 3,
    },
    {
      id: 'lit-2',
      ask: 'An answer that only names the device:',
      kind: 'choice',
      options: [
        'earns almost nothing',
        'earns full marks',
        'is all that is required',
      ],
      answer: 'earns almost nothing',
      teach: 'Name it, quote it, say what it does.',
      level: 4,
    },
    {
      id: 'lit-3',
      ask: 'The lorry coughed twice and died. This is:',
      kind: 'choice',
      options: [
        'personification',
        'hyperbole',
        'assonance',
      ],
      answer: 'personification',
      teach: 'Coughing and dying are human. '
        + 'Now say what it makes the reader feel about the lorry.',
      level: 4,
    },
    {
      id: 'lit-4',
      ask: 'A good test of your own answer about an effect is:',
      kind: 'choice',
      options: [
        'could it have been written about any other passage',
        'is it long enough',
        'does it use the technical term',
      ],
      answer: 'could it have been written about any other passage',
      teach: 'If it could, it is a label rather than an answer.',
      level: 6,
    },
  ],
})
