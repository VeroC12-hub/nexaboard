/**
 * Stored lessons for SHS 1 Arabic.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── Why these lessons transliterate ───────────────────────────────────────
 *
 * Arabic is written in its own script, right to left, and a learner has to
 * read and write that script. These lessons name every letter and give every
 * word in a consistent transliteration using the Latin alphabet, rather than
 * printing Arabic characters, for two reasons. The first is practical: the
 * platform renders plain text, and a mixture of right to left and left to
 * right text in one line is unreliable to read on a small screen. The second
 * is pedagogical: a transliteration a learner can sound out from the page
 * lets them work without a teacher, and the script itself is learned by
 * writing it on paper, which no screen can do for them. So the lessons say
 * what to write and in which direction, name each letter, and describe its
 * shape in words.
 *
 * The transliteration used throughout: a long vowel is doubled, as aa, ii,
 * uu. The emphatic consonants are marked with a following dot, as s dot,
 * because a bare s and an emphatic s are different letters. The letters with
 * no English equivalent are named: hamza, ayn, ghayn, haa, khaa, qaaf.
 *
 * ── Why Arabic is in a Ghanaian syllabus ──────────────────────────────────
 *
 * It has been taught in Ghana for centuries, in the Muslim north and in the
 * zongos, long before any European language arrived, and manuscripts in
 * Arabic are among the oldest written sources for the history of the
 * savanna states. The last lesson treats that as history rather than as
 * religious instruction, because that is what the syllabus asks for.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── the Arabic alphabet ────────────────────────────────────────────────── */

teach({
  topicId: 'alphabet-ar',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Arabic has twenty eight letters '
      + 'and is written from right to left. '
      + 'Letters join to their neighbours, '
      + 'so most have four shapes: '
      + 'isolated, initial, medial and final. '
      + 'Six letters never join to the letter after them, '
      + 'which breaks a word into pieces. '
      + 'Many letters share one skeleton '
      + 'and differ only in their dots.',
    method: [
      'Write from right to left, always.',
      'Identify the letter by its skeleton, then count its dots.',
      'Decide which of the four shapes the position requires.',
      'Check whether the previous letter is one of the six non joiners.',
      'Join to the next letter unless the letter forbids it.',
    ],
  },

  idea:
    'The Arabic alphabet has twenty eight letters '
    + 'and is written from right to left. '
    + 'The letters are, in their traditional order: '
    + 'alif, baa, taa, thaa, jiim, haa, khaa, '
    + 'daal, dhaal, raa, zaay, siin, shiin, '
    + 's dot aad, d dot aad, t dot aa, z dot aa, '
    + 'ayn, ghayn, faa, qaaf, kaaf, laam, '
    + 'miim, nuun, haa light, waaw, yaa. '
    + 'Arabic is a joined script: '
    + 'within a word the letters connect, '
    + 'so most letters have four forms, '
    + 'depending on whether they stand alone, '
    + 'begin a word, sit in the middle, or end it. '
    + 'Six letters join only on their right '
    + 'and never to the letter that follows: '
    + 'alif, daal, dhaal, raa, zaay and waaw. '
    + 'After one of these, the next letter begins a new piece, '
    + 'so a single word can look like two or three groups. '
    + 'Many letters share one basic shape, called a skeleton, '
    + 'and are told apart only by their dots: '
    + 'baa has one dot below, '
    + 'taa two above, '
    + 'thaa three above, '
    + 'nuun one above when final, '
    + 'and yaa two below. '
    + 'Jiim, haa and khaa share a skeleton too, '
    + 'with one dot inside, no dot, and one dot above. '
    + 'There are no capital letters, '
    + 'and the printed and handwritten forms are much the same.',

  mechanism:
    'The feature of this script that decides '
    + 'whether a learner progresses quickly or slowly '
    + 'is the skeleton and the dots. '
    + 'There are twenty eight letters and far fewer skeletons, '
    + 'because the dots do most of the distinguishing. '
    + 'So the right way to learn the alphabet '
    + 'is not twenty eight separate shapes '
    + 'but about fifteen shapes '
    + 'and then the dots that sit on them. '
    + 'Take the commonest family. '
    + 'One skeleton, a small hook on the line, '
    + 'carries baa with one dot below, '
    + 'taa with two above, '
    + 'thaa with three above, '
    + 'and in initial and medial position nuun and yaa as well. '
    + 'A learner who has memorised that one shape '
    + 'has the skeleton of five letters, '
    + 'and only the dots remain. '
    + 'The practical consequence is in reading: '
    + 'when you cannot identify a letter, '
    + 'do not search your memory for the whole shape. '
    + 'Look at the skeleton first, '
    + 'which narrows it to a family of three or four, '
    + 'then count the dots and note whether they are above or below. '
    + 'Two questions instead of one search. '
    + 'And in writing, the dots are not optional decoration: '
    + 'baa without its dot is not baa, '
    + 'and a missing dot can make a different word. '
    + 'The second thing to master is the four positions, '
    + 'and the key to them is that joining is the normal state. '
    + 'A letter standing alone is the unusual case. '
    + 'Inside a word a letter reaches out on both sides, '
    + 'so its shape is squeezed and often reduced to a stroke. '
    + 'This is why a learner who has learned only the isolated forms '
    + 'cannot read a single real word: '
    + 'the isolated form is the one that appears least. '
    + 'So the alphabet should be learned in connected words '
    + 'from the start, '
    + 'and a letter should be practised in all four positions '
    + 'before moving to the next. '
    + 'Third, the six non joiners, '
    + 'which cause the confusion that most often stops a beginner. '
    + 'Alif, daal, dhaal, raa, zaay and waaw '
    + 'connect to the letter before them and not to the letter after. '
    + 'So after one of them there is a visible gap, '
    + 'and a learner reads the gap as a space between words '
    + 'and so divides one word into two. '
    + 'The way to avoid it is to learn the six as a set, '
    + 'and when a gap appears mid line, '
    + 'to check whether the letter before the gap is one of them. '
    + 'If it is, the gap is inside a word. '
    + 'This single check removes a large part of a beginner '
    + 'difficulty in reading. '
    + 'Fourth, writing direction, '
    + 'which sounds trivial and is not. '
    + 'The letters run right to left, '
    + 'and so do the words, '
    + 'and so does the page: '
    + 'an Arabic book opens from what an English reader '
    + 'would call the back. '
    + 'But the numerals, in the form most often used, '
    + 'are written left to right, '
    + 'so a date or a page number inside Arabic text '
    + 'runs the other way. '
    + 'That mixture is normal and should be expected '
    + 'rather than treated as an error. '
    + 'What has to be written down is the letter in its right position. '
    + 'In a writing question the marks are for the correct form: '
    + 'an initial form used at the end of a word '
    + 'is a wrong answer even if the letter was identified correctly. '
    + 'The only way to secure this is practice on paper, '
    + 'and the topic cannot be learned by reading about it, '
    + 'which is worth saying plainly. '
    + 'Paper and a pencil are all the equipment required, '
    + 'and every school has them.',

  recap:
    'You can read and write the Latin alphabet, '
    + 'left to right, with capital and small letters. '
    + 'Arabic runs the other way, '
    + 'joins its letters, '
    + 'and distinguishes many of them by dots alone.',

  method: [
    'Set the page and write from right to left.',
    'To identify a letter, read the skeleton first.',
    'Then count the dots and note whether they are above or below.',
    'Decide the position: isolated, initial, medial or final.',
    'Use the form that position requires.',
    'When a gap appears, check whether the letter before it '
      + 'is one of the six non joiners.',
    'If it is, the gap is inside the word.',
    'Practise each letter in all four positions before moving on.',
  ],

  worked: [
    {
      level: 2,
      ask: 'How many letters has the Arabic alphabet, '
        + 'and in which direction is it written?',
      steps: [
        'Count the letters; note the direction of writing.',
      ],
      answer: 'Twenty eight letters, written from right to left. '
        + 'The words and the pages also run right to left, '
        + 'though the numerals most often used run left to right.',
    },
    {
      level: 3,
      ask: 'Baa, taa and thaa share one skeleton. '
        + 'How are they told apart?',
      steps: [
        'The skeleton is the same hook shape.',
        'Only the dots differ.',
      ],
      answer: 'Only by their dots. '
        + 'Baa has one dot below the skeleton, '
        + 'taa has two above it, '
        + 'and thaa has three above it. '
        + 'In initial and medial position '
        + 'nuun and yaa use the same skeleton as well, '
        + 'so five letters share one shape '
        + 'and the dots carry the whole distinction. '
        + 'A missing dot therefore makes a different letter, '
        + 'and often a different word.',
    },
    {
      level: 4,
      ask: 'Why does a single Arabic word sometimes appear '
        + 'to be two or three separate pieces?',
      steps: [
        'Six letters join only on the right.',
        'They are alif, daal, dhaal, raa, zaay and waaw.',
        'After one of them a gap appears.',
      ],
      answer: 'Because six letters, '
        + 'alif, daal, dhaal, raa, zaay and waaw, '
        + 'join to the letter before them '
        + 'but never to the letter after. '
        + 'So wherever one of them occurs inside a word '
        + 'there is a visible gap, '
        + 'and the word looks like several pieces. '
        + 'A beginner reads the gap as a word break and misreads the '
        + 'line. '
        + 'The check is to look at the letter before the gap: '
        + 'if it is one of the six, the gap is inside a word.',
    },
    {
      level: 5,
      ask: 'Why can a learner who has memorised only the isolated forms '
        + 'not read a real Arabic text?',
      steps: [
        'Most letters have four forms.',
        'Inside a word the letter joins on both sides.',
        'The shape is then compressed, often to a stroke.',
        'So the isolated form is the one that appears least.',
      ],
      answer: 'Because the isolated form is the rarest of the four. '
        + 'Inside a word a letter must connect on both sides, '
        + 'so its shape is compressed, '
        + 'and several letters reduce to little more than a stroke '
        + 'with dots. '
        + 'A learner who knows only the isolated shapes '
        + 'will not recognise those strokes at all. '
        + 'The remedy is to learn each letter '
        + 'in all four positions together, '
        + 'and to practise in connected words from the first lesson '
        + 'rather than in lists of separate letters.',
    },
  ],

  traps: [
    {
      mistake: 'Learning the isolated forms only.',
      why: 'The isolated form is the rarest. '
        + 'Inside a word the letter is compressed and joined on both '
        + 'sides.',
    },
    {
      mistake: 'Reading a gap inside a word as a word break.',
      why: 'Six letters join only on the right. '
        + 'Check whether the letter before the gap is one of them.',
    },
    {
      mistake: 'Treating the dots as decoration.',
      why: 'Five letters share one skeleton. '
        + 'The dots carry the whole distinction, '
        + 'so a missing dot is a different letter.',
    },
    {
      mistake: 'Memorising twenty eight unrelated shapes.',
      why: 'There are far fewer skeletons than letters. '
        + 'Learn the skeleton families, then the dots.',
    },
  ],

  extension:
    'Arabic script is used for languages that are not Arabic. '
    + 'Some of them are languages of Ghana. '
    + 'Hausa written in Arabic script is called Ajami. '
    + 'It was used across the savanna '
    + 'for letters, records and poetry, '
    + 'long before the Latin alphabet arrived. '
    + 'Persian, Urdu and Malay have used the script too. '
    + 'Each language needed letters for sounds Arabic lacks. '
    + 'Each added them by putting dots on an existing skeleton, '
    + 'which is the system the alphabet already uses. '
    + 'So the script has proved adaptable. '
    + 'And in Ghana it means something particular. '
    + 'Some of the oldest documents in a Ghanaian language '
    + 'are written in these letters.',

  questions: [
    {
      id: 'alf-1',
      ask: 'How many letters are in the Arabic alphabet?',
      kind: 'numeric',
      options: [],
      answer: '28',
      teach: 'Twenty eight, written from right to left.',
      level: 2,
    },
    {
      id: 'alf-2',
      ask: 'Most Arabic letters have how many written forms?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Isolated, initial, medial and final, '
        + 'because the script joins.',
      level: 3,
    },
    {
      id: 'alf-3',
      ask: 'Baa is distinguished from taa by:',
      kind: 'choice',
      options: [
        'its dots',
        'its skeleton',
        'its position in the word',
      ],
      answer: 'its dots',
      teach: 'Baa has one dot below and taa two above. '
        + 'The skeleton is the same.',
      level: 3,
    },
    {
      id: 'alf-4',
      ask: 'How many letters join only on their right?',
      kind: 'numeric',
      options: [],
      answer: '6',
      teach: 'Alif, daal, dhaal, raa, zaay and waaw. '
        + 'They create gaps inside words.',
      level: 4,
    },
    {
      id: 'alf-5',
      ask: 'A gap in the middle of an Arabic word usually means:',
      kind: 'choice',
      options: [
        'the previous letter does not join to the right',
        'a new word has begun',
        'a letter is missing',
      ],
      answer: 'the previous letter does not join to the right',
      teach: 'Check whether it is one of the six non joiners. '
        + 'If so, the word continues.',
      level: 5,
    },
  ],
})

/* ── short and long vowels ──────────────────────────────────────────────── */

teach({
  topicId: 'vowels-ar',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Arabic writes the consonants as letters '
      + 'and the short vowels as small marks above or below them. '
      + 'The three short vowels are fathah for a, '
      + 'kasrah for i and dammah for u. '
      + 'The long vowels use full letters: '
      + 'alif for aa, yaa for ii, waaw for uu. '
      + 'Ordinary printed Arabic leaves the short vowel marks out, '
      + 'so a reader supplies them from knowledge of the word.',
    method: [
      'Read the consonants first.',
      'Look above and below for the short vowel marks.',
      'Fathah above is a, kasrah below is i, dammah above is u.',
      'A following alif, yaa or waaw signals a long vowel.',
      'Where the marks are absent, use the sense of the sentence.',
    ],
  },

  idea:
    'Arabic writing represents consonants with letters '
    + 'and short vowels with small marks, '
    + 'called harakaat, placed above or below the consonant. '
    + 'There are three short vowels. '
    + 'Fathah is a small stroke above the letter '
    + 'and gives the sound a. '
    + 'Kasrah is a small stroke below the letter '
    + 'and gives the sound i. '
    + 'Dammah is a small loop above the letter '
    + 'and gives the sound u. '
    + 'Sukuun is a small circle above a letter '
    + 'and shows that it carries no vowel at all. '
    + 'Shaddah is a small mark showing the consonant is doubled. '
    + 'The three long vowels are written with full letters. '
    + 'A fathah followed by alif gives aa. '
    + 'A kasrah followed by yaa gives ii. '
    + 'A dammah followed by waaw gives uu. '
    + 'The long vowel lasts about twice as long as the short one, '
    + 'and the difference changes the word: '
    + 'kataba means he wrote '
    + 'while kaataba means he corresponded. '
    + 'Fully vowelled text, with every mark written, '
    + 'is used in the Quran, '
    + 'in poetry, in dictionaries and in books for learners. '
    + 'Ordinary printed Arabic, '
    + 'such as a newspaper or a letter, '
    + 'leaves the short vowel marks out, '
    + 'and the reader supplies them '
    + 'from knowledge of the word and the grammar.',

  mechanism:
    'The fact that the short vowels are usually left unwritten '
    + 'is the single most important thing about reading Arabic, '
    + 'and it changes what reading means. '
    + 'In English a reader who knows the letters '
    + 'can sound out a word they have never met. '
    + 'In unvowelled Arabic they cannot, '
    + 'because the same consonant skeleton '
    + 'can be several different words. '
    + 'Take the three consonants k, t and b. '
    + 'With one set of vowels they give kataba, he wrote. '
    + 'With another, kutub, books. '
    + 'With another, kutiba, it was written. '
    + 'With another, kaatib, a writer. '
    + 'One written form, several words, '
    + 'and only the sentence decides. '
    + 'So reading Arabic is partly recognition and partly inference, '
    + 'and a learner has to build both. '
    + 'The practical consequence for study is clear '
    + 'and it is the point of this lesson: '
    + 'learn every new word with its vowels, aloud, '
    + 'because the written form will not remind you later. '
    + 'A learner who has learned kataba only by sight '
    + 'has learned a shape that could be four words. '
    + 'A learner who has learned it aloud '
    + 'has learned the word. '
    + 'This is why Quranic schools in Ghana '
    + 'have always taught by recitation: '
    + 'the recitation carries the information '
    + 'that the script leaves out, '
    + 'and that is a pedagogical fact rather than a tradition only. '
    + 'The second point is the long and short distinction, '
    + 'which English speakers under hear. '
    + 'English vowel length is not usually meaningful, '
    + 'so an English speaker treats a longer vowel as emphasis. '
    + 'In Arabic it is a different word. '
    + 'The pair to hold is kataba and kaataba: '
    + 'he wrote and he corresponded. '
    + 'And since the long vowel is written with a full letter '
    + 'while the short one is a mark that may be omitted, '
    + 'the long vowels are the ones always visible on the page, '
    + 'which makes them the skeleton of the word in unvowelled text. '
    + 'So a reader of a newspaper sees the long vowels '
    + 'and infers the short ones, '
    + 'and that is another reason to hear the difference accurately. '
    + 'Third, the marks themselves and where candidates lose marks. '
    + 'Fathah and dammah go above the letter '
    + 'and kasrah goes below. '
    + 'Writing a kasrah above the letter is a clear error '
    + 'in a vowelling question. '
    + 'And the vowel mark belongs to the consonant it sits on, '
    + 'not to the one before or after, '
    + 'so placement matters: '
    + 'a fathah on the first letter '
    + 'means that letter is followed by a. '
    + 'Sukuun is the one candidates forget: '
    + 'it marks a consonant with no vowel, '
    + 'and leaving it out of a fully vowelled text '
    + 'is an incomplete answer, '
    + 'not merely an omission, '
    + 'because the reader cannot then tell '
    + 'whether a vowel was intended and left off. '
    + 'Fourth, shaddah, '
    + 'which doubles a consonant and changes the word. '
    + 'The doubling is pronounced, '
    + 'held about twice as long as a single consonant, '
    + 'and it distinguishes real pairs of words. '
    + 'A learner who does not hold the doubled consonant '
    + 'is saying a different word, '
    + 'and in an oral examination it is heard. '
    + 'What has to be written down in a vowelling question '
    + 'is every mark, in the right place, '
    + 'above or below as the mark requires, '
    + 'including sukuun where a consonant has no vowel. '
    + 'The marks are given individually, '
    + 'so a text with most of the marks correct '
    + 'earns most of the marks available.',

  recap:
    'You can read the Arabic letters '
    + 'and know they are consonants. '
    + 'This adds the vowels: '
    + 'three short ones written as marks, '
    + 'three long ones written as letters, '
    + 'and the habit of supplying what is left out.',

  method: [
    'Read the consonant skeleton of the word.',
    'Look above each letter for fathah or dammah.',
    'Look below each letter for kasrah.',
    'Treat a small circle above as sukuun, meaning no vowel.',
    'Treat the doubling mark as a consonant held twice as long.',
    'Read a following alif, yaa or waaw as a long vowel.',
    'Where the marks are absent, use the sense and the grammar.',
    'Learn every new word aloud, with its vowels.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Name the three short vowels and say where each is written.',
      steps: [
        'Two above and one below.',
      ],
      answer: 'Fathah, a small stroke above the letter, giving a. '
        + 'Kasrah, a small stroke below the letter, giving i. '
        + 'Dammah, a small loop above the letter, giving u. '
        + 'Writing a kasrah above the letter is a clear error.',
    },
    {
      level: 3,
      ask: 'How are the long vowels written, '
        + 'and how long do they last?',
      steps: [
        'Each long vowel uses a full letter.',
        'Length is about double.',
      ],
      answer: 'A fathah followed by the letter alif gives aa. '
        + 'A kasrah followed by yaa gives ii. '
        + 'A dammah followed by waaw gives uu. '
        + 'Each lasts about twice as long as the corresponding short '
        + 'vowel, '
        + 'and the difference changes the word: '
        + 'kataba is he wrote and kaataba is he corresponded.',
    },
    {
      level: 4,
      ask: 'The consonants k, t and b can give kataba, kutub, '
        + 'kutiba and kaatib. '
        + 'What does this show about reading unvowelled Arabic?',
      steps: [
        'One skeleton, several words.',
        'The short vowels are not written.',
        'So the reader must infer them.',
      ],
      answer: 'That reading unvowelled Arabic is partly inference. '
        + 'The same consonant skeleton can be several different words, '
        + 'since the short vowels are not written, '
        + 'so the reader supplies them '
        + 'from knowledge of the word and from the sentence. '
        + 'It follows that a learner must learn each new word aloud '
        + 'with its vowels, '
        + 'because the written form will not supply them later. '
        + 'This is why teaching by recitation '
        + 'has always been the method in Quranic schools: '
        + 'the recitation carries what the script leaves out.',
    },
    {
      level: 5,
      ask: 'Why is sukuun necessary in a fully vowelled text, '
        + 'and what does shaddah change?',
      steps: [
        'Without sukuun a reader cannot tell '
          + 'whether a vowel was intended and omitted.',
        'Shaddah doubles the consonant, and the doubling is pronounced.',
      ],
      answer: 'Sukuun marks a consonant that carries no vowel at all. '
        + 'In a fully vowelled text every letter must be marked, '
        + 'so without sukuun a reader cannot tell '
        + 'whether the writer meant no vowel '
        + 'or simply left a mark off, '
        + 'which is why omitting it is an incomplete answer '
        + 'rather than a small slip. '
        + 'Shaddah shows that the consonant is doubled, '
        + 'and the doubling is held in speech '
        + 'for about twice as long as a single consonant. '
        + 'It distinguishes real pairs of words, '
        + 'so a learner who does not hold the doubled consonant '
        + 'is saying a different word, '
        + 'and in an oral examination it is heard.',
    },
  ],

  traps: [
    {
      mistake: 'Writing kasrah above the letter.',
      why: 'Fathah and dammah go above; kasrah goes below. '
        + 'Placement is marked.',
    },
    {
      mistake: 'Treating a long vowel as emphasis.',
      why: 'In Arabic length distinguishes words. '
        + 'Kataba is he wrote and kaataba is he corresponded.',
    },
    {
      mistake: 'Learning a new word by sight only.',
      why: 'The written form may stand for several words, '
        + 'because the short vowels are usually left out. '
        + 'Learn it aloud.',
    },
    {
      mistake: 'Omitting sukuun from a fully vowelled text.',
      why: 'Without it the reader cannot tell '
        + 'whether no vowel was intended or a mark was forgotten.',
    },
  ],

  extension:
    'Writing systems divide into two kinds, '
    + 'and Arabic shows the difference clearly. '
    + 'An alphabet writes vowels and consonants alike, '
    + 'as the Latin alphabet does. '
    + 'An abjad writes the consonants '
    + 'and leaves most vowels to the reader, '
    + 'as Arabic and Hebrew do. '
    + 'An abjad suits a language '
    + 'where the consonants carry the root meaning '
    + 'and the vowels mark grammar, '
    + 'which is exactly how Arabic works: '
    + 'k, t and b carry the idea of writing '
    + 'in every word built on them. '
    + 'So the script is not an incomplete alphabet. '
    + 'It is fitted to the structure of the language, '
    + 'and understanding that makes '
    + 'the absence of the vowels sensible rather than inconvenient.',

  questions: [
    {
      id: 'vow-1',
      ask: 'Which short vowel is written below the letter?',
      kind: 'choice',
      options: ['kasrah', 'fathah', 'dammah'],
      answer: 'kasrah',
      teach: 'Fathah and dammah are written above.',
      level: 2,
    },
    {
      id: 'vow-2',
      ask: 'The long vowel aa is written with which letter?',
      kind: 'choice',
      options: ['alif', 'yaa', 'waaw'],
      answer: 'alif',
      teach: 'Yaa gives ii and waaw gives uu.',
      level: 3,
    },
    {
      id: 'vow-3',
      ask: 'Sukuun shows that a letter:',
      kind: 'choice',
      options: [
        'carries no vowel',
        'is doubled',
        'is at the end of a word',
      ],
      answer: 'carries no vowel',
      teach: 'Doubling is shown by shaddah. '
        + 'Sukuun is needed so no mark looks forgotten.',
      level: 4,
    },
    {
      id: 'vow-4',
      ask: 'Ordinary printed Arabic such as a newspaper:',
      kind: 'choice',
      options: [
        'leaves the short vowel marks out',
        'writes every vowel mark',
        'uses no consonants',
      ],
      answer: 'leaves the short vowel marks out',
      teach: 'The reader supplies them from the word and the sentence, '
        + 'which is why new words are learned aloud.',
      level: 4,
    },
    {
      id: 'vow-5',
      ask: 'Kataba and kaataba differ in meaning because of:',
      kind: 'choice',
      options: [
        'the length of the first vowel',
        'the number of dots',
        'the direction of writing',
      ],
      answer: 'the length of the first vowel',
      teach: 'He wrote against he corresponded. '
        + 'Vowel length distinguishes words in Arabic.',
      level: 5,
    },
  ],
})

/* ── sounds that English does not have ──────────────────────────────────── */

teach({
  topicId: 'pronunciation-ar',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Several Arabic consonants have no English equivalent. '
      + 'Haa and khaa are made in the throat. '
      + 'Ayn and ghayn are made deeper still. '
      + 'Qaaf is a k made far back. '
      + 'And four letters are emphatic, '
      + 'made with the tongue flatter and the sound heavier. '
      + 'Each has a plain partner, '
      + 'and confusing the pair changes the word.',
    method: [
      'Learn each difficult sound against its nearest plain partner.',
      'Feel where in the mouth or throat the sound is made.',
      'Practise the pair aloud one after the other.',
      'Say the whole word, not the letter alone.',
      'Have somebody who knows the sound check it if you can.',
    ],
  },

  idea:
    'Arabic has consonants that English does not. '
    + 'They fall into three groups. '
    + 'The throat sounds: '
    + 'haa, a strong h made with friction in the throat, '
    + 'much stronger than the English h; '
    + 'khaa, made at the same place as the ch in Scottish loch; '
    + 'ayn, made deeper in the throat by tightening it, '
    + 'with no English counterpart at all; '
    + 'and ghayn, which is ayn with voice and friction, '
    + 'close to a French r. '
    + 'The back sound: '
    + 'qaaf, a k made much further back than the English k, '
    + 'against the soft part of the palate near the throat. '
    + 'The emphatic sounds: '
    + 's dot aad, d dot aad, t dot aa and z dot aa. '
    + 'Each corresponds to a plain letter, '
    + 'siin, daal, taa and dhaal, '
    + 'and is made with the tongue flatter and lower, '
    + 'which makes the sound heavier and darkens the vowel beside it. '
    + 'The letter hamza is a glottal stop, '
    + 'the catch in the throat '
    + 'heard in the middle of the English expression uh oh. '
    + 'Each of these pairs is a genuine distinction: '
    + 'the words are different, '
    + 'and substituting the English like sound for the Arabic one '
    + 'produces a different word or no word at all.',

  mechanism:
    'There is one method for every sound in this topic, '
    + 'and it is to learn the sound against its plain partner '
    + 'rather than on its own. '
    + 'The reason is that an English speaker '
    + 'hears both members of the pair as the same letter, '
    + 'and will go on hearing them as the same '
    + 'until they have been put side by side deliberately. '
    + 'Take siin and s dot aad, the plain s and the emphatic s. '
    + 'Alone, a learner says both as English s '
    + 'and cannot tell them apart. '
    + 'Said one after the other, '
    + 'the difference is immediately audible: '
    + 'for the emphatic the tongue lies flatter and lower, '
    + 'the sound is heavier, '
    + 'and the vowel beside it is darker. '
    + 'So the drill is always a pair, never a single sound, '
    + 'and that applies to all four emphatics, '
    + 'to haa against the English h, '
    + 'and to qaaf against the plain kaaf. '
    + 'A Ghanaian learner has a real advantage here '
    + 'and should be told so. '
    + 'Several of these sounds exist, or nearly exist, '
    + 'in Ghanaian languages and in words already borrowed. '
    + 'The names that have come into Ghanaian use through Islam '
    + 'carry them: '
    + 'the h in Ahmed, the kh sound in the name Khalid, '
    + 'and the q of Quran, '
    + 'which is a qaaf and not an English k. '
    + 'A learner who already says these names '
    + 'as they are said in a Ghanaian Muslim community '
    + 'is already producing sounds '
    + 'that a learner from an English speaking background elsewhere '
    + 'would find difficult. '
    + 'Starting from words the learner already knows '
    + 'is faster than starting from a description of the throat. '
    + 'Now the specific ones, in order of difficulty. '
    + 'Ayn is the hardest and it is the one most often abandoned. '
    + 'It is made by tightening the throat '
    + 'in a way English never requires. '
    + 'The approach that works is not to describe the muscle '
    + 'but to start from a word: '
    + 'the Arabic greeting that begins the phrase for upon you '
    + 'opens with ayn, '
    + 'and a learner in a Ghanaian zongo '
    + 'has heard it said correctly many times. '
    + 'Imitation of a heard word '
    + 'works where instruction about the throat does not. '
    + 'Qaaf is easier and is often simply replaced by k, '
    + 'which is the commonest substitution a Ghanaian learner makes. '
    + 'The two are distinguished by how far back the closure is: '
    + 'kaaf is made where English k is made, '
    + 'and qaaf much further back. '
    + 'Saying kaaf and then qaaf one after the other, '
    + 'with a hand on the throat, '
    + 'makes the difference clear. '
    + 'And the pair distinguishes words, '
    + 'so the substitution is not an accent but an error. '
    + 'Haa and khaa are both made in the throat, '
    + 'haa with breath and khaa with friction, '
    + 'and both are commonly reduced to the English h, '
    + 'which collapses three distinct letters into one. '
    + 'The emphatics are the group '
    + 'most often ignored altogether, '
    + 'because each has a plain partner '
    + 'that sounds acceptable to an English ear. '
    + 'But they are separate letters, '
    + 'spelled differently, and they make different words. '
    + 'What has to be done, and this is the honest part, '
    + 'is that pronunciation cannot be learned from a page. '
    + 'A learner needs to hear the sound '
    + 'and to have their own attempt corrected. '
    + 'In Ghana that is usually available: '
    + 'a teacher, an imam, an older student at a makaranta, '
    + 'or a recording of recitation. '
    + 'Where it is not, the examinable part '
    + 'is still substantially learnable: '
    + 'a written paper asks which letter makes which sound, '
    + 'where in the mouth or throat it is made, '
    + 'and which pairs are distinguished, '
    + 'and all of that can be learned and answered on paper. '
    + 'What the page cannot supply is the oral mark, '
    + 'and a learner should seek out somebody who can. '
    + 'What has to be written down, in a written question, '
    + 'is the place of articulation and the pair. '
    + 'Not that ayn is difficult, '
    + 'but that ayn is made by tightening the throat, '
    + 'that it has no English equivalent, '
    + 'and that it is distinct from hamza, '
    + 'which is a glottal stop.',

  recap:
    'You can produce the sounds of English '
    + 'and of your own Ghanaian language. '
    + 'Arabic needs several that neither has, '
    + 'and this lesson pairs each with its nearest familiar sound.',

  method: [
    'Take the difficult sound together with its plain partner.',
    'Say the two one after the other, aloud.',
    'Notice where in the mouth or throat each is made.',
    'Use a word you already know that contains the sound.',
    'For an emphatic, flatten and lower the tongue.',
    'For qaaf, make the closure further back than for kaaf.',
    'Practise in whole words, not single letters.',
    'Have the attempt checked by somebody who knows the sound.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How does s dot aad differ from siin, '
        + 'and why does it matter?',
      steps: [
        'Both are s sounds.',
        'The emphatic is made with the tongue flatter and lower.',
        'The vowel beside it is darkened.',
        'They are different letters, so they make different words.',
      ],
      answer: 'Siin is the plain s, made as in English. '
        + 'S dot aad is the emphatic s, '
        + 'made with the tongue flatter and lower, '
        + 'so the sound is heavier '
        + 'and the vowel beside it is darker. '
        + 'They are separate letters, spelled differently, '
        + 'and they distinguish real words, '
        + 'so substituting one for the other is an error '
        + 'and not an accent. '
        + 'The way to learn the difference '
        + 'is to say the two sounds one after the other.',
    },
    {
      level: 4,
      ask: 'Distinguish qaaf from kaaf, '
        + 'and name a word a Ghanaian learner already knows '
        + 'that contains qaaf.',
      steps: [
        'Both are k like closures.',
        'Kaaf is where English k is made.',
        'Qaaf is further back, near the throat.',
      ],
      answer: 'Both are made by closing the back of the mouth, '
        + 'but at different points. '
        + 'Kaaf is made where the English k is made. '
        + 'Qaaf is made much further back, '
        + 'against the soft palate near the throat, '
        + 'which gives it a deeper sound. '
        + 'The word Quran begins with qaaf, '
        + 'so a learner who has heard it said '
        + 'in a Ghanaian Muslim community '
        + 'has already heard the sound correctly. '
        + 'Replacing qaaf with k is the commonest substitution '
        + 'and it changes the word.',
    },
    {
      level: 4,
      ask: 'Distinguish hamza from ayn.',
      steps: [
        'Hamza is a glottal stop.',
        'Ayn is made deeper, by tightening the throat.',
        'English has the first and not the second.',
      ],
      answer: 'Hamza is a glottal stop, '
        + 'the catch heard in the middle of the English uh oh, '
        + 'so an English speaker already makes it '
        + 'and only has to learn that it is a letter. '
        + 'Ayn is made deeper in the throat, '
        + 'by tightening it, '
        + 'and English has no counterpart at all. '
        + 'They are often confused by learners '
        + 'because both involve the throat, '
        + 'but one is a stop and the other a constriction, '
        + 'and they are distinct letters making distinct words.',
    },
    {
      level: 5,
      ask: 'Why can this topic not be fully learned from a book, '
        + 'and what part of it can?',
      steps: [
        'Production needs a model and correction.',
        'Written questions ask about place and distinction.',
      ],
      answer: 'Producing a sound that your own languages do not contain '
        + 'needs a model to imitate '
        + 'and somebody to correct the attempt, '
        + 'because a learner cannot hear their own error. '
        + 'That is available in Ghana from a teacher, an imam, '
        + 'a senior student at a makaranta, '
        + 'or a recording of recitation, '
        + 'and a learner should seek it out. '
        + 'The part that can be learned from the page '
        + 'is substantial and is what the written paper tests: '
        + 'which letter makes which sound, '
        + 'where in the mouth or throat it is made, '
        + 'which letters pair as emphatic and plain, '
        + 'and that each pair distinguishes words. '
        + 'So the written marks are available to any learner, '
        + 'and the oral marks require a model.',
    },
  ],

  traps: [
    {
      mistake: 'Practising a difficult sound on its own.',
      why: 'An English speaker hears both members of a pair as one '
        + 'letter. '
        + 'Say the pair one after the other instead.',
    },
    {
      mistake: 'Replacing qaaf with an English k.',
      why: 'Qaaf is made much further back, '
        + 'and the pair distinguishes words. '
        + 'The q of Quran is the sound.',
    },
    {
      mistake: 'Reducing haa, khaa and the English h to one sound.',
      why: 'They are three distinct letters. '
        + 'Haa has throat friction and khaa is as in Scottish loch.',
    },
    {
      mistake: 'Ignoring the emphatics because the plain partner sounds '
        + 'acceptable.',
      why: 'They are separate letters with separate spellings, '
        + 'and they make different words.',
    },
  ],

  extension:
    'The emphatic consonants are a feature of the Semitic languages '
    + 'and they are not unique to Arabic. '
    + 'Hebrew and the Ethiopian languages have related sets, '
    + 'and in each the emphatic is the heavier partner of a plain sound. '
    + 'What makes them hard for an English speaker '
    + 'is not the sound itself '
    + 'but that English does not use the distinction, '
    + 'so the ear has never been trained to notice it. '
    + 'The same thing happens the other way round: '
    + 'Arabic has no p, '
    + 'so an Arabic speaker learning English '
    + 'hears p and b as one sound at first, '
    + 'and says Barbados for both. '
    + 'The difficulty is never in the throat. '
    + 'It is in what the ear has learned to ignore.',

  questions: [
    {
      id: 'pr-1',
      ask: 'Which sound has no English equivalent at all?',
      kind: 'choice',
      options: ['ayn', 'hamza', 'siin'],
      answer: 'ayn',
      teach: 'Hamza is the glottal stop in uh oh, which English has. '
        + 'Ayn is made deeper, by tightening the throat.',
      level: 4,
    },
    {
      id: 'pr-2',
      ask: 'Qaaf differs from kaaf in that it is made:',
      kind: 'choice',
      options: ['further back', 'further forward', 'with the lips'],
      answer: 'further back',
      teach: 'Against the soft palate near the throat. '
        + 'The q of Quran is a qaaf, not a k.',
      level: 4,
    },
    {
      id: 'pr-3',
      ask: 'How many emphatic consonants are named in this lesson?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'S dot aad, d dot aad, t dot aa and z dot aa, '
        + 'each the heavier partner of a plain letter.',
      level: 3,
    },
    {
      id: 'pr-4',
      ask: 'An emphatic consonant is made with the tongue:',
      kind: 'choice',
      options: ['flatter and lower', 'curled upward', 'between the teeth'],
      answer: 'flatter and lower',
      teach: 'The sound becomes heavier '
        + 'and the vowel beside it darker.',
      level: 4,
    },
    {
      id: 'pr-5',
      ask: 'The best way to learn a sound your language does not have '
        + 'is to:',
      kind: 'choice',
      options: [
        'practise it against its nearest plain partner',
        'practise it alone many times',
        'read a description of the throat',
      ],
      answer: 'practise it against its nearest plain partner',
      teach: 'The ear hears both as one letter '
        + 'until they are deliberately put side by side.',
      level: 5,
    },
  ],
})

/* ── the nominal sentence ───────────────────────────────────────────────── */

teach({
  topicId: 'noun-sentence-ar',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Arabic forms a simple statement with no verb at all. '
      + 'Al baytu kabiirun means the house is big, '
      + 'and there is no word for is. '
      + 'The first part is the subject, which is definite, '
      + 'and the second is the predicate, which is indefinite. '
      + 'That difference in definiteness '
      + 'is what marks which part is which.',
    method: [
      'Decide what you are talking about: that is the subject.',
      'Make the subject definite, usually with al.',
      'Say what you are saying about it: that is the predicate.',
      'Leave the predicate indefinite.',
      'Supply no word for is.',
    ],
  },

  idea:
    'Arabic has two kinds of sentence. '
    + 'A verbal sentence begins with a verb. '
    + 'A nominal sentence has no verb at all, '
    + 'and it is used for simple statements '
    + 'of the kind English makes with is or are. '
    + 'Al baytu kabiirun means the house is big. '
    + 'The first part, al baytu, is the subject, '
    + 'called the mubtada, '
    + 'and it is definite, '
    + 'marked here by the definite article al. '
    + 'The second part, kabiirun, is the predicate, '
    + 'called the khabar, '
    + 'and it is indefinite. '
    + 'No word corresponding to is appears, '
    + 'and none is needed. '
    + 'Other examples: '
    + 'al waladu t dot aaliburn, the boy is a student; '
    + 'al madrasatu kabiiratun, the school is big, '
    + 'where the predicate takes a feminine ending '
    + 'because the subject is feminine; '
    + 'ana mudarrisun, I am a teacher, '
    + 'where a pronoun serves as the definite subject. '
    + 'The predicate may also be a phrase of place: '
    + 'al kitaabu alaa al maktabi, '
    + 'the book is on the desk. '
    + 'In the past or the future a verb does appear, '
    + 'the verb kaana for was, '
    + 'so al baytu kaana kabiiran '
    + 'means the house was big. '
    + 'So the verbless sentence belongs to the present.',

  mechanism:
    'The question a learner asks immediately '
    + 'is how a reader knows which part is the subject '
    + 'if there is no verb to divide them. '
    + 'The answer is definiteness, '
    + 'and it is the whole mechanism of this topic. '
    + 'The subject is definite and the predicate is indefinite. '
    + 'So in al baytu kabiirun, '
    + 'al baytu carries the article and is therefore the subject, '
    + 'and kabiirun has no article and is therefore the predicate. '
    + 'Reverse the definiteness and the sentence changes: '
    + 'al baytu al kabiiru '
    + 'is no longer a sentence at all. '
    + 'It is a phrase, the big house, '
    + 'because when both words are definite '
    + 'the adjective is simply describing the noun. '
    + 'That contrast is the single most useful thing in the lesson, '
    + 'and it should be written out as a pair: '
    + 'al baytu kabiirun, a statement, the house is big; '
    + 'al baytu al kabiiru, a phrase, the big house. '
    + 'One article added, '
    + 'and a sentence has become a noun phrase. '
    + 'A learner who can explain that '
    + 'has understood how Arabic marks a predicate, '
    + 'and it is a standard examination question. '
    + 'The practical consequence '
    + 'is that the definite article is not optional '
    + 'and cannot be added for politeness or style. '
    + 'Putting al on the predicate destroys the sentence, '
    + 'and leaving it off the subject '
    + 'makes the whole thing an indefinite phrase. '
    + 'Second, the error English speakers make first. '
    + 'They look for a word meaning is and insert one, '
    + 'usually the pronoun huwa, which means he or it. '
    + 'Al baytu huwa kabiirun is not the ordinary form. '
    + 'The pronoun is used in that position only '
    + 'for particular emphasis '
    + 'or when both parts are definite and a divider is needed. '
    + 'For a simple statement, nothing goes between the two parts. '
    + 'Saying so plainly is worth doing, '
    + 'because the instinct to supply a verb is strong '
    + 'and English grammar teaches it. '
    + 'Third, agreement, which is where marks are lost. '
    + 'The predicate agrees with the subject '
    + 'in gender and in number. '
    + 'Al baytu kabiirun has a masculine subject '
    + 'and a masculine predicate. '
    + 'Al madrasatu kabiiratun has a feminine subject, '
    + 'so the predicate takes the feminine ending. '
    + 'Writing al madrasatu kabiirun is an agreement error '
    + 'and it is marked as one. '
    + 'The habit is the same as in French and Spanish: '
    + 'settle the subject first, then copy its features. '
    + 'A Ghanaian learner taking more than one language '
    + 'can use the same discipline in all of them. '
    + 'Fourth, the case endings, '
    + 'which is the part of Arabic grammar '
    + 'that candidates find most unfamiliar. '
    + 'In a fully vowelled nominal sentence '
    + 'both the subject and the predicate '
    + 'carry the nominative ending, '
    + 'which is u for a definite noun '
    + 'and un for an indefinite one. '
    + 'Hence baytu and kabiirun. '
    + 'The endings are information, not decoration: '
    + 'they say what role each word plays, '
    + 'which is why Arabic can afford '
    + 'to be freer with word order than English. '
    + 'In unvowelled text they are not written, '
    + 'and a reader supplies them, '
    + 'exactly as with the short vowels. '
    + 'In a written examination question that asks for vowelling, '
    + 'they are expected. '
    + 'Fifth, the past. '
    + 'The verbless sentence is a present tense sentence. '
    + 'To put it in the past, '
    + 'Arabic brings in the verb kaana, '
    + 'and the predicate then changes its ending '
    + 'from the nominative to the accusative: '
    + 'al baytu kaana kabiiran. '
    + 'A candidate who writes kaana '
    + 'and leaves the predicate in the nominative '
    + 'has the structure right and the ending wrong, '
    + 'and that is a separate mark. '
    + 'What has to be written down '
    + 'is the two parts, named. '
    + 'Mubtada and khabar, subject and predicate, '
    + 'with the definiteness of each stated. '
    + 'An answer that translates correctly '
    + 'without identifying the parts '
    + 'has answered a comprehension question '
    + 'rather than a grammar one.',

  recap:
    'You can read vowelled Arabic '
    + 'and know that nouns take the article al. '
    + 'This builds a complete sentence '
    + 'out of two nouns and no verb.',

  method: [
    'Decide what the sentence is about: that is the subject.',
    'Make the subject definite, with al or a pronoun.',
    'Decide what is being said about it: that is the predicate.',
    'Leave the predicate indefinite, with no al.',
    'Agree the predicate with the subject in gender and number.',
    'Supply no word for is.',
    'In vowelled text, give both parts the nominative ending.',
    'For the past, add kaana and put the predicate in the accusative.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Translate the house is big into Arabic, '
        + 'and name the two parts.',
      steps: [
        'The subject is the house, which is definite.',
        'The predicate is big, which is indefinite.',
        'No verb is used.',
      ],
      answer: 'Al baytu kabiirun. '
        + 'Al baytu is the subject, the mubtada, and it is definite. '
        + 'Kabiirun is the predicate, the khabar, and it is indefinite. '
        + 'There is no word for is, and none is needed.',
    },
    {
      level: 4,
      ask: 'Explain the difference between '
        + 'al baytu kabiirun and al baytu al kabiiru.',
      steps: [
        'In the first, the predicate is indefinite.',
        'So it is a statement.',
        'In the second, both are definite.',
        'So the adjective is describing the noun.',
      ],
      answer: 'Al baytu kabiirun is a sentence: the house is big. '
        + 'The subject is definite and the predicate is indefinite, '
        + 'and that difference is what marks it as a statement. '
        + 'Al baytu al kabiiru is not a sentence at all. '
        + 'It is a noun phrase, the big house, '
        + 'because when both words are definite '
        + 'the adjective is simply describing the noun. '
        + 'One article has turned a statement into a phrase, '
        + 'which is why the definite article '
        + 'cannot be added for style.',
    },
    {
      level: 4,
      ask: 'Correct and explain: al madrasatu kabiirun.',
      steps: [
        'madrasatu is feminine.',
        'The predicate must agree.',
        'So the feminine ending is needed.',
      ],
      answer: 'Al madrasatu kabiiratun. '
        + 'The subject al madrasatu is feminine, '
        + 'and the predicate agrees with the subject '
        + 'in gender and number, '
        + 'so kabiirun must take the feminine ending '
        + 'and become kabiiratun. '
        + 'The discipline is the same as in French and Spanish: '
        + 'settle the subject first, then copy its features '
        + 'onto what describes it.',
    },
    {
      level: 5,
      ask: 'Put al baytu kabiirun into the past, '
        + 'and explain both changes.',
      steps: [
        'A verb is now needed: kaana.',
        'The predicate changes case after kaana.',
        'So the ending becomes accusative.',
      ],
      answer: 'Al baytu kaana kabiiran. '
        + 'The verbless sentence belongs to the present, '
        + 'so the past requires the verb kaana, meaning was. '
        + 'And after kaana the predicate '
        + 'moves from the nominative to the accusative, '
        + 'so kabiirun becomes kabiiran. '
        + 'A candidate who adds kaana '
        + 'and leaves the predicate in the nominative '
        + 'has the structure right and the ending wrong, '
        + 'and loses a separate mark for it.',
    },
  ],

  traps: [
    {
      mistake: 'Inserting a word for is.',
      why: 'Nothing goes between the two parts in a simple statement. '
        + 'The pronoun huwa is used only for emphasis '
        + 'or when both parts are definite.',
    },
    {
      mistake: 'Putting al on the predicate.',
      why: 'That makes the whole thing a noun phrase. '
        + 'Al baytu al kabiiru is the big house, not a sentence.',
    },
    {
      mistake: 'Leaving the predicate unagreed.',
      why: 'It agrees with the subject in gender and number. '
        + 'A feminine subject needs a feminine predicate.',
    },
    {
      mistake: 'Adding kaana and keeping the nominative ending.',
      why: 'After kaana the predicate takes the accusative: kabiiran.',
    },
  ],

  extension:
    'A verbless present tense is not peculiar to Arabic. '
    + 'Russian does the same thing: '
    + 'its sentence for the house is big '
    + 'has no verb either, '
    + 'and like Arabic it supplies one for the past. '
    + 'What this shows is that a verb meaning to be '
    + 'is not necessary to make a statement. '
    + 'English requires one '
    + 'because English depends heavily on word order '
    + 'and on auxiliary verbs '
    + 'to show how the parts of a sentence relate. '
    + 'Arabic has case endings to do that work instead, '
    + 'so the relation is marked on the words themselves '
    + 'and no connecting verb is needed. '
    + 'Each language pays for what it does not have '
    + 'somewhere else in the grammar.',

  questions: [
    {
      id: 'nom-1',
      ask: 'In a nominal sentence, the subject is:',
      kind: 'choice',
      options: ['definite', 'indefinite', 'always a pronoun'],
      answer: 'definite',
      teach: 'The predicate is indefinite, '
        + 'and that difference is what marks which part is which.',
      level: 3,
    },
    {
      id: 'nom-2',
      ask: 'Al baytu al kabiiru means:',
      kind: 'choice',
      options: ['the big house', 'the house is big', 'a big house'],
      answer: 'the big house',
      teach: 'Both words are definite, '
        + 'so the adjective describes the noun '
        + 'and the result is a phrase, not a statement.',
      level: 4,
    },
    {
      id: 'nom-3',
      ask: 'How many words in Arabic correspond to the English is '
        + 'in a simple present statement?',
      kind: 'numeric',
      options: [],
      answer: '0',
      teach: 'None. '
        + 'Nothing goes between the subject and the predicate.',
      level: 3,
    },
    {
      id: 'nom-4',
      ask: 'The predicate of a feminine subject must:',
      kind: 'choice',
      options: [
        'take a feminine ending',
        'take the definite article',
        'come first',
      ],
      answer: 'take a feminine ending',
      teach: 'Al madrasatu kabiiratun. '
        + 'The predicate agrees in gender and number.',
      level: 4,
    },
    {
      id: 'nom-5',
      ask: 'To put a nominal sentence into the past, Arabic adds:',
      kind: 'choice',
      options: ['kaana', 'al', 'huwa'],
      answer: 'kaana',
      teach: 'And the predicate then takes the accusative ending: '
        + 'kabiiran.',
      level: 5,
    },
  ],
})

/* ── conversation ──────────────────────────────────────────────────────── */

teach({
  topicId: 'conversation-ar',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'As salaamu alaykum is the greeting, '
      + 'answered wa alaykum as salaam. '
      + 'Kayfa haaluka asks how you are, '
      + 'and the ka ending changes to ki for a woman. '
      + 'Ismii is my name is. '
      + 'Many questions and answers change their ending '
      + 'according to whether you speak to a man or a woman, '
      + 'and getting that wrong is the commonest error.',
    method: [
      'Give the greeting and learn its fixed reply.',
      'Note the gender of the person you are speaking to.',
      'Use ka for a man and ki for a woman.',
      'Answer in the same form you were asked.',
      'Keep the whole exchange in one register.',
    ],
  },

  idea:
    'The standard greeting is as salaamu alaykum, '
    + 'peace be upon you, '
    + 'and the fixed reply is wa alaykum as salaam, '
    + 'and upon you peace. '
    + 'Other greetings follow the time of day: '
    + 's dot abaah al khayr for good morning, '
    + 'answered s dot abaah an nuur, '
    + 'and masaa al khayr for good evening, '
    + 'answered masaa an nuur. '
    + 'To ask how somebody is: '
    + 'kayfa haaluka to a man, '
    + 'kayfa haaluki to a woman. '
    + 'The answer is al h dot amdu lillaah, '
    + 'praise be to God, '
    + 'often with bi khayr, well, added. '
    + 'To give a name: ismii Kofi, my name is Kofi. '
    + 'To ask: maa ismuka to a man, maa ismuki to a woman. '
    + 'Other useful exchanges: '
    + 'min ayna anta for where are you from, to a man, '
    + 'answered anaa min Ghaanaa; '
    + 'kam umruka for how old are you, '
    + 'answered umrii sittata ashara sanatan; '
    + 'ayna taskunu for where do you live. '
    + 'Courtesies: shukran for thank you, '
    + 'answered afwan; '
    + 'min fad dot lika for please, to a man; '
    + 'na am for yes and laa for no; '
    + 'maa as salaamah for goodbye; '
    + 'and in shaa Allaah, if God wills, '
    + 'used of anything still to come.',

  mechanism:
    'The feature of Arabic conversation '
    + 'that a learner must get right from the first lesson '
    + 'is that the person addressed is marked in the word. '
    + 'English says how are you '
    + 'to a man and a woman alike. '
    + 'Arabic does not. '
    + 'Kayfa haaluka is said to a man '
    + 'and kayfa haaluki to a woman, '
    + 'and the difference is one vowel at the end. '
    + 'The same ka and ki run through the whole topic: '
    + 'maa ismuka and maa ismuki, '
    + 'kam umruka and kam umruki, '
    + 'min fad dot lika and min fad dot liki. '
    + 'So the ending is not an extra detail. '
    + 'It is a single pattern, '
    + 'and a learner who has it '
    + 'has the gender distinction in every phrase at once. '
    + 'The practical rule: '
    + 'decide the gender of the person before you open your mouth, '
    + 'then use ka or ki throughout. '
    + 'Mixing them inside one conversation '
    + 'is the commonest error in an oral examination '
    + 'and it is entirely avoidable. '
    + 'The second thing to know '
    + 'is that several of these exchanges are fixed pairs. '
    + 'As salaamu alaykum has one reply, '
    + 'and the reply is not another as salaamu alaykum. '
    + 'It is wa alaykum as salaam, '
    + 'with the words reversed, '
    + 'and that reversal is the form. '
    + 'The same holds for s dot abaah al khayr, '
    + 'whose reply is s dot abaah an nuur: '
    + 'morning of goodness answered by morning of light. '
    + 'A candidate who answers a greeting by repeating it '
    + 'has not learned the pair, '
    + 'and in an oral test the pair is what is being listened for. '
    + 'So these should be memorised two by two rather than singly. '
    + 'Third, a point about register '
    + 'that matters in Ghana specifically. '
    + 'What is taught in school '
    + 'is Modern Standard Arabic, '
    + 'which is the written language and the language of broadcasting, '
    + 'and it is what the examination uses. '
    + 'The Arabic a learner may hear in a Ghanaian zongo, '
    + 'or from a visiting trader, '
    + 'may be a spoken dialect, '
    + 'which differs in pronunciation and in some vocabulary. '
    + 'Neither is wrong. '
    + 'But the two should not be mixed in an examination, '
    + 'and a learner who has heard a dialect at home '
    + 'should know which forms belong in the paper. '
    + 'The greetings in this lesson are standard '
    + 'and are understood everywhere, '
    + 'which is why they are the safe ground. '
    + 'Fourth, the religious formulas, '
    + 'which need stating carefully '
    + 'because they are both linguistic and religious. '
    + 'Al h dot amdu lillaah, in shaa Allaah '
    + 'and as salaamu alaykum are Arabic expressions '
    + 'in daily use by Muslims '
    + 'and are also the ordinary conversational currency of the '
    + 'language. '
    + 'A learner studying Arabic as a language '
    + 'needs them in order to hold any conversation at all, '
    + 'and they appear in the syllabus for that reason. '
    + 'Many of them are already in daily use in Ghana, '
    + 'in Hausa, Dagbani and Ghanaian English, '
    + 'which is a real advantage: '
    + 'a Ghanaian learner often knows the phrase '
    + 'before meeting it in a lesson. '
    + 'Fifth, the age idiom, '
    + 'which follows a pattern of its own. '
    + 'Umrii sittata ashara sanatan '
    + 'is literally my age is sixteen years, '
    + 'so the noun umr, meaning age, carries the information '
    + 'and there is no verb. '
    + 'That is a nominal sentence of the kind '
    + 'the previous lesson described, '
    + 'and seeing the connection is worth a mark '
    + 'in a question that asks about sentence structure. '
    + 'What has to be written down, in a dialogue question, '
    + 'is a consistent and complete exchange: '
    + 'the greeting with its correct reply, '
    + 'the questions with the right gender ending, '
    + 'and the answers in the same form as the questions. '
    + 'An exchange in which the greeting is answered wrongly '
    + 'loses marks even when every word is spelled correctly.',

  recap:
    'You can read vowelled Arabic '
    + 'and build a sentence with no verb. '
    + 'This gives the exchanges a conversation needs, '
    + 'and the endings that change with the person addressed.',

  method: [
    'Open with as salaamu alaykum.',
    'Learn the reply as part of the greeting, not separately.',
    'Note whether you are speaking to a man or a woman.',
    'Use ka for a man and ki for a woman, throughout.',
    'Answer a question in the same form it was asked.',
    'Use the fixed reply for each time of day greeting.',
    'Keep to Modern Standard Arabic in the examination.',
    'Close with maa as salaamah.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Give the standard greeting and its reply.',
      steps: [
        'The reply reverses the words.',
      ],
      answer: 'As salaamu alaykum, peace be upon you. '
        + 'The reply is wa alaykum as salaam, and upon you peace. '
        + 'The reply is not a repetition of the greeting: '
        + 'the words are reversed, and that reversal is the form.',
    },
    {
      level: 3,
      ask: 'Ask a man and then a woman how they are, '
        + 'and give the usual answer.',
      steps: [
        'The ending changes with the gender of the person addressed.',
      ],
      answer: 'To a man: kayfa haaluka. '
        + 'To a woman: kayfa haaluki. '
        + 'The usual answer is al h dot amdu lillaah, '
        + 'often with bi khayr added. '
        + 'The ka and ki endings run through the whole topic, '
        + 'so a learner who has the pattern '
        + 'has the distinction in every phrase at once.',
    },
    {
      level: 4,
      ask: 'Write a short exchange: '
        + 'greet a woman, ask her name and where she is from, '
        + 'and give her answers.',
      steps: [
        'Use ki endings throughout.',
        'Use anti for a woman.',
      ],
      answer: 'As salaamu alaykum. '
        + 'Wa alaykum as salaam. '
        + 'Maa ismuki? '
        + 'Ismii Amina. '
        + 'Min ayna anti? '
        + 'Anaa min Ghaanaa. '
        + 'Every question uses the feminine ending, '
        + 'and anti rather than anta, '
        + 'because the person addressed is a woman. '
        + 'Mixing ka and ki inside one exchange '
        + 'is the commonest error in an oral test.',
    },
    {
      level: 5,
      ask: 'Give your age in Arabic '
        + 'and explain the structure of the sentence.',
      steps: [
        'The noun umr carries the meaning.',
        'There is no verb.',
        'So it is a nominal sentence.',
      ],
      answer: 'Umrii sittata ashara sanatan, '
        + 'which is literally my age is sixteen years. '
        + 'There is no verb. '
        + 'Umrii, my age, is the definite subject, '
        + 'and the number with sanatan is the predicate, '
        + 'so this is a nominal sentence '
        + 'of exactly the kind described in the previous topic. '
        + 'Noticing that connection '
        + 'earns a mark in a question about sentence structure, '
        + 'because it shows the greeting phrases '
        + 'are built on the grammar and not learned as noises.',
    },
  ],

  traps: [
    {
      mistake: 'Answering as salaamu alaykum by repeating it.',
      why: 'The reply reverses the words: '
        + 'wa alaykum as salaam. '
        + 'The pair is what an oral test listens for.',
    },
    {
      mistake: 'Using ka to a woman.',
      why: 'The ending marks the person addressed. '
        + 'Ka for a man and ki for a woman, in every phrase.',
    },
    {
      mistake: 'Mixing ka and ki inside one conversation.',
      why: 'Decide the gender before speaking '
        + 'and keep the same ending throughout.',
    },
    {
      mistake: 'Mixing dialect forms into an examination answer.',
      why: 'The paper uses Modern Standard Arabic. '
        + 'The greetings in this lesson are standard '
        + 'and understood everywhere.',
    },
  ],

  extension:
    'Arabic greetings are among the most borrowed phrases anywhere. '
    + 'Ghana is no exception. '
    + 'As salaamu alaykum is used across West Africa. '
    + 'Speakers of Hausa, Dagbani, Wolof and many other languages '
    + 'say it, often with their own pronunciation. '
    + 'So are al h dot amdu lillaah and in shaa Allaah. '
    + 'So a Ghanaian learner starts this topic '
    + 'already knowing several of its phrases. '
    + 'That is unusual in a foreign language. '
    + 'Use it on purpose. '
    + 'The phrases you already know '
    + 'give a sound model of the pronunciation. '
    + 'They carry the ayn, '
    + 'and the emphatic consonants, '
    + 'which are otherwise hard to hear.',

  questions: [
    {
      id: 'cv-1',
      ask: 'The reply to as salaamu alaykum is:',
      kind: 'choice',
      options: [
        'wa alaykum as salaam',
        'as salaamu alaykum',
        'maa as salaamah',
      ],
      answer: 'wa alaykum as salaam',
      teach: 'The words are reversed, and that reversal is the form. '
        + 'Maa as salaamah is goodbye.',
      level: 2,
    },
    {
      id: 'cv-2',
      ask: 'To ask a woman her name you say:',
      kind: 'choice',
      options: ['maa ismuki', 'maa ismuka', 'ismii'],
      answer: 'maa ismuki',
      teach: 'Ki for a woman and ka for a man. '
        + 'Ismii means my name is.',
      level: 3,
    },
    {
      id: 'cv-3',
      ask: 'The reply to s dot abaah al khayr is:',
      kind: 'choice',
      options: [
        's dot abaah an nuur',
        's dot abaah al khayr',
        'masaa al khayr',
      ],
      answer: 's dot abaah an nuur',
      teach: 'Morning of goodness answered by morning of light. '
        + 'These greetings come in fixed pairs.',
      level: 3,
    },
    {
      id: 'cv-4',
      ask: 'Which Arabic is used in the examination?',
      kind: 'choice',
      options: [
        'Modern Standard Arabic',
        'any spoken dialect',
        'a mixture of both',
      ],
      answer: 'Modern Standard Arabic',
      teach: 'It is the written and broadcast language. '
        + 'A dialect heard at home is not wrong, '
        + 'but it does not belong in the paper.',
      level: 4,
    },
    {
      id: 'cv-5',
      ask: 'Umrii sittata ashara sanatan is an example of:',
      kind: 'choice',
      options: [
        'a nominal sentence',
        'a verbal sentence',
        'a question',
      ],
      answer: 'a nominal sentence',
      teach: 'There is no verb. '
        + 'Umrii is the definite subject '
        + 'and the number phrase is the predicate.',
      level: 5,
    },
  ],
})

/* ── Arabic in Ghana and beyond ─────────────────────────────────────────── */

teach({
  topicId: 'arabic-in-ghana',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Arabic has been read and written in Ghana for centuries. '
      + 'It arrived with the trans-Saharan trade, '
      + 'long before any European language. '
      + 'At the northern courts it was the language '
      + 'of scholarship, letters and records. '
      + 'Today it is taught in makaranta and Islamic schools, '
      + 'and used in worship. '
      + 'It is also an official language '
      + 'of the United Nations and the African Union.',
    method: [
      'Say how Arabic reached Ghana, and when.',
      'Name what it was used for at the northern courts.',
      'Name where it is taught and used in Ghana today.',
      'Give its international standing.',
      'Distinguish its religious use from its use as a language.',
    ],
  },

  idea:
    'Arabic reached what is now Ghana through the trans-Saharan trade. '
    + 'Merchants and scholars from the north carried it. '
    + 'It took hold at the courts of the savanna states, '
    + 'among them Gonja, Dagbon and Mamprugu. '
    + 'All of that came before any European language '
    + 'was heard on the coast. '
    + 'At those courts Muslim scholars advised the rulers. '
    + 'They wrote letters and kept records, '
    + 'because they could read and write '
    + 'when nobody else at the court could. '
    + 'The manuscripts and chronicles they left '
    + 'are among the oldest written sources '
    + 'for the history of northern Ghana. '
    + 'Historians use them beside oral tradition and archaeology. '
    + 'Arabic script was also used to write Ghanaian languages. '
    + 'Hausa above all. '
    + 'That practice is called Ajami. '
    + 'Today Arabic is taught in makaranta and Quranic schools. '
    + 'It is taught in Islamic basic and senior high schools, '
    + 'and as an elective in the senior high curriculum. '
    + 'Muslims use it in worship throughout the country, '
    + 'most of all in the north '
    + 'and in the zongos of the southern cities. '
    + 'Beyond Ghana, Arabic is official in more than twenty countries. '
    + 'It is official in the African Union. '
    + 'And it is one of six official languages '
    + 'of the United Nations. '
    + 'In Africa it is official in Egypt, Sudan and Libya, '
    + 'in Algeria, Morocco and Tunisia, '
    + 'and in Mauritania, Somalia, Djibouti, Chad and the Comoros.',

  mechanism:
    'The point this topic is really making, '
    + 'and the one that earns marks, '
    + 'is that Arabic is not a recent import into Ghana. '
    + 'It is older here than English. '
    + 'Follow the dating. '
    + 'Arabic came with the trans-Saharan trade, '
    + 'which was running for centuries '
    + 'before the first Portuguese ship reached Elmina in 1471. '
    + 'So when Europeans arrived on the coast, '
    + 'there were already courts in the north '
    + 'keeping records in a written language, '
    + 'and that language was Arabic. '
    + 'A candidate who can say that sentence '
    + 'has given the whole argument of the topic. '
    + 'And it has a consequence for historians '
    + 'that connects this subject to the History syllabus: '
    + 'for parts of northern Ghana '
    + 'the oldest written evidence is in Arabic, '
    + 'so a historian who cannot read it '
    + 'is confined to oral tradition and archaeology. '
    + 'That is a practical reason '
    + 'for a Ghanaian historian to learn the language, '
    + 'and it is a better answer '
    + 'than any general statement about heritage. '
    + 'The second point is the distinction '
    + 'between Arabic as a religious language '
    + 'and Arabic as a language, '
    + 'and it should be made carefully and fairly. '
    + 'Arabic is the language of the Quran, '
    + 'and that is why it has been taught in Ghana for so long: '
    + 'the makaranta system exists '
    + 'to teach recitation and reading. '
    + 'It is also an ordinary modern language, '
    + 'spoken by several hundred million people, '
    + 'used for newspapers, broadcasting, trade and diplomacy, '
    + 'and taught in the senior high curriculum as a language subject '
    + 'alongside French and Spanish. '
    + 'Both are true at once, '
    + 'and the syllabus asks for both. '
    + 'A candidate who writes only about worship '
    + 'has answered half the question, '
    + 'and one who writes only about diplomacy '
    + 'has left out the reason the language has been here for centuries. '
    + 'Third, the practical reasons for a Ghanaian today, '
    + 'which an examination asks for directly. '
    + 'Four specific ones. '
    + 'Work in the Gulf states, '
    + 'where many Ghanaians are employed '
    + 'and where Arabic is the working language outside the '
    + 'international firms. '
    + 'Trade with North Africa, '
    + 'which is reached overland through the same routes '
    + 'the trans-Saharan trade used. '
    + 'International employment, '
    + 'since Arabic is one of six United Nations languages '
    + 'and an African Union language, '
    + 'so translators and officials with it are in demand '
    + 'and few Ghanaian candidates offer it. '
    + 'And access to the historical sources already described. '
    + 'Each of those is a mark, '
    + 'and each is more specific '
    + 'than saying Arabic is widely spoken. '
    + 'Fourth, Ajami, which candidates do not know '
    + 'and which is worth knowing. '
    + 'Hausa and some other West African languages '
    + 'were written in Arabic script long before the Latin alphabet '
    + 'arrived, '
    + 'and that writing was used for correspondence, poetry, '
    + 'records of trade and religious instruction. '
    + 'So the Arabic alphabet '
    + 'is part of the written history of Ghanaian languages, '
    + 'not only of Arabic itself. '
    + 'Mentioning Ajami in an answer '
    + 'shows a candidate understands '
    + 'that a script and a language are different things, '
    + 'which is exactly what the alphabet lesson established. '
    + 'What has to be written down is the date relation. '
    + 'Not that Arabic has been in Ghana a long time, '
    + 'but that it arrived with the trans-Saharan trade, '
    + 'centuries before Europeans reached the coast in 1471, '
    + 'and was already the written language of the northern courts. '
    + 'The comparison is the argument.',

  recap:
    'You know Arabic is the language of the Quran '
    + 'and that it is spoken in North Africa and the Middle East. '
    + 'This says how it came to Ghana, '
    + 'what it was used for here, '
    + 'and what it is worth to a Ghanaian now.',

  method: [
    'Say that Arabic came with the trans-Saharan trade.',
    'Date it against the European arrival on the coast in 1471.',
    'Name the courts where it was used: Gonja, Dagbon, Mamprugu.',
    'Say what the scholars did there: advice, letters, records.',
    'Note that Arabic manuscripts are among the oldest written sources '
      + 'for northern Ghana.',
    'Mention Ajami, the writing of Hausa in Arabic script.',
    'Name where Arabic is taught and used in Ghana today.',
    'Give its standing in the United Nations and the African Union.',
    'Give a specific practical reason for learning it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How did Arabic reach Ghana, and when?',
      steps: [
        'It came with trade across the Sahara.',
        'That trade long preceded European arrival.',
      ],
      answer: 'It came with the trans-Saharan trade, '
        + 'carried by merchants and scholars from the north, '
        + 'and it was established at the courts of the savanna states '
        + 'centuries before any European language was heard on the coast. '
        + 'The Portuguese reached Elmina in 1471, '
        + 'by which time the northern courts '
        + 'were already keeping records in Arabic.',
    },
    {
      level: 4,
      ask: 'What was Arabic used for at the northern courts, '
        + 'and why does this matter to a historian?',
      steps: [
        'Scholars could read and write when others could not.',
        'So they advised, wrote letters and kept records.',
        'Those records survive as manuscripts.',
      ],
      answer: 'Muslim scholars at the courts of Gonja, Dagbon and '
        + 'Mamprugu '
        + 'served as advisers, wrote correspondence '
        + 'and kept records, '
        + 'because they could read and write '
        + 'when nobody else at the court could. '
        + 'The manuscripts and chronicles they produced '
        + 'are among the oldest written sources '
        + 'for the history of northern Ghana. '
        + 'So a historian who cannot read Arabic '
        + 'is confined to oral tradition and archaeology for that '
        + 'period, '
        + 'which is a practical reason '
        + 'for a Ghanaian historian to learn the language.',
    },
    {
      level: 4,
      ask: 'Give four specific reasons why a Ghanaian '
        + 'might learn Arabic today.',
      steps: [
        'Each reason needs a concrete consequence.',
      ],
      answer: 'Employment in the Gulf states, '
        + 'where many Ghanaians work '
        + 'and where Arabic is the working language '
        + 'outside international firms. '
        + 'Trade with North Africa. '
        + 'International employment, '
        + 'since Arabic is one of the six official languages '
        + 'of the United Nations '
        + 'and an African Union language, '
        + 'so translators and officials with it are in demand '
        + 'and few Ghanaian candidates offer it. '
        + 'And access to the Arabic manuscript sources '
        + 'for the history of northern Ghana.',
    },
    {
      level: 5,
      ask: 'What is Ajami, and why is it important '
        + 'to the history of Ghanaian languages?',
      steps: [
        'A script can be used for more than one language.',
        'Hausa was written in Arabic script.',
        'That writing predates the Latin alphabet here.',
      ],
      answer: 'Ajami is the writing of a non-Arabic language '
        + 'in Arabic script, '
        + 'and in West Africa it was used above all for Hausa. '
        + 'It carried correspondence, poetry, '
        + 'records of trade and religious instruction '
        + 'long before the Latin alphabet reached the region. '
        + 'It matters because it means '
        + 'some of the oldest written documents '
        + 'in a Ghanaian language '
        + 'are written in Arabic letters, '
        + 'not in the Latin ones used today. '
        + 'It also shows that a script and a language '
        + 'are different things, '
        + 'since the same alphabet served both Arabic and Hausa, '
        + 'with letters added for sounds Arabic does not have.',
    },
  ],

  traps: [
    {
      mistake: 'Treating Arabic as a recent arrival in Ghana.',
      why: 'It came with the trans-Saharan trade, '
        + 'centuries before the Portuguese reached Elmina in 1471.',
    },
    {
      mistake: 'Writing only about religious use.',
      why: 'The syllabus asks for both. '
        + 'Arabic is also a modern working language '
        + 'of the United Nations and the African Union.',
    },
    {
      mistake: 'Giving general reasons for learning it.',
      why: 'Each specific fact is a mark: '
        + 'the Gulf states, North African trade, '
        + 'the United Nations, the manuscript sources.',
    },
    {
      mistake: 'Forgetting Ajami.',
      why: 'Arabic script was used to write Hausa, '
        + 'so it is part of the written history '
        + 'of Ghanaian languages too.',
    },
  ],

  extension:
    'The Arabic manuscripts of West Africa '
    + 'are a research field in their own right. '
    + 'The best known collections are at Timbuktu. '
    + 'Tens of thousands of documents survive there, '
    + 'held in family libraries. '
    + 'They cover law and astronomy, '
    + 'medicine, trade and poetry, as well as religion. '
    + 'That answers an old claim '
    + 'that West Africa had no written scholarship of its own. '
    + 'Collections exist in Ghana too, '
    + 'in family and mosque holdings in the north. '
    + 'Much of that material has never been catalogued. '
    + 'So a Ghanaian who can read Arabic '
    + 'is qualified to work on sources about Ghana '
    + 'that nobody has yet read. '
    + 'Few school subjects can say that.',

  questions: [
    {
      id: 'arg-1',
      ask: 'Arabic reached Ghana through:',
      kind: 'choice',
      options: [
        'the trans-Saharan trade',
        'European traders on the coast',
        'the colonial school system',
      ],
      answer: 'the trans-Saharan trade',
      teach: 'It was established at the northern courts '
        + 'long before Europeans reached the coast.',
      level: 3,
    },
    {
      id: 'arg-2',
      ask: 'In which year did the Portuguese reach Elmina?',
      kind: 'numeric',
      options: [],
      answer: '1471',
      teach: 'Arabic was already the written language '
        + 'of the northern courts by then, '
        + 'which is the comparison the topic rests on.',
      level: 4,
    },
    {
      id: 'arg-3',
      ask: 'Ajami is:',
      kind: 'choice',
      options: [
        'a Ghanaian language written in Arabic script',
        'a dialect of Arabic',
        'a kind of manuscript paper',
      ],
      answer: 'a Ghanaian language written in Arabic script',
      teach: 'Hausa above all. '
        + 'It shows that a script and a language are different things.',
      level: 5,
    },
    {
      id: 'arg-4',
      ask: 'Arabic is one of how many official languages '
        + 'of the United Nations?',
      kind: 'numeric',
      options: [],
      answer: '6',
      teach: 'It is also an official language of the African Union.',
      level: 3,
    },
    {
      id: 'arg-5',
      ask: 'Why do historians of northern Ghana need Arabic?',
      kind: 'choice',
      options: [
        'the oldest written sources for the region are in Arabic',
        'all Ghanaian history was written in Arabic',
        'oral tradition is unreliable',
      ],
      answer: 'the oldest written sources for the region are in Arabic',
      teach: 'Without it a historian is confined '
        + 'to oral tradition and archaeology for that period.',
      level: 5,
    },
  ],
})
