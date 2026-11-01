/**
 * Senior High School electives: the humanities and the languages.
 *
 * ── Why this file exists ───────────────────────────────────────────────────
 *
 * `subjects.ts` has always listed these six subjects, and none of them had an
 * outline. A subject listed with no topics is worse than one left out: it
 * appears in the subject list, a learner chooses it, and there is nothing
 * behind it. The coverage scripts also counted the stage as complete, because
 * a subject with no topics cannot have missing ones.
 *
 * So these are outlined to the topic areas each subject is actually built
 * from, at the same grain as `shs-electives.ts`.
 *
 * ── On the three foreign languages ────────────────────────────────────────
 *
 * French, Arabic and Spanish are outlined on the same skeleton, because at
 * SHS they ARE the same skeleton: sounds and script, the present, the past,
 * the future, agreement, reading, writing, and speaking. What differs is the
 * particular grammar each language puts in the way, and that is named in the
 * topic outcomes rather than hidden. Arabic carries one extra topic the other
 * two do not need, which is the script itself, since a learner meets a new
 * alphabet before any grammar.
 *
 * As everywhere in this folder: no indicator codes, and no claims about
 * papers or marks. Those belong to a document nobody has uploaded.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard SHS outline, until your school adds its own.'

/* ── History ─────────────────────────────────────────────────────────────── */

register({
  subjectId: 'history',
  stage: 'shs',
  subject: 'History',
  source: 'MODEL',
  note: NOTE + ' Ghana first, then Africa, then the wider world.',
  strands: [
    {
      id: 'history-method',
      name: 'How history is known',
      purpose: 'Where the evidence comes from, and how far it can be trusted.',
      subStrands: [
        {
          id: 'sources-evidence',
          name: 'Sources and evidence',
          topics: [
            {
              id: 'history-sources',
              title: 'Primary and secondary sources',
              outcome: 'Tell a primary source from a secondary one and say what each is good for.',
              year: 'SHS 1',
            },
            {
              id: 'oral-tradition',
              title: 'Oral tradition as evidence',
              outcome: 'Explain what oral tradition preserves well, and where it needs checking.',
              year: 'SHS 1',
            },
            {
              id: 'bias-in-sources',
              title: 'Reading a source critically',
              outcome: 'Say who wrote a source, for whom, and what that does to its account.',
              year: 'SHS 1',
              needs: ['history-sources'],
            },
          ],
        },
      ],
    },
    {
      id: 'early-ghana',
      name: 'The peoples and states of Ghana',
      purpose: 'Where Ghanaians came from and how they organised themselves.',
      subStrands: [
        {
          id: 'migrations-states',
          name: 'Migrations and state formation',
          topics: [
            {
              id: 'migration-traditions',
              title: 'Traditions of origin and migration',
              outcome: 'Describe the migration traditions of major Ghanaian groups and their evidence.',
              year: 'SHS 1',
              needs: ['oral-tradition'],
            },
            {
              id: 'forest-states',
              title: 'The forest states and Asante',
              outcome: 'Explain how Asante was formed and what held it together.',
              year: 'SHS 1',
            },
            {
              id: 'northern-states',
              title: 'The northern states',
              outcome: 'Describe Dagbon, Mamprugu and Gonja and how they were governed.',
              year: 'SHS 1',
            },
            {
              id: 'coastal-states',
              title: 'The coastal states and trade',
              outcome: 'Explain how the coastal states were shaped by trade with Europeans.',
              year: 'SHS 2',
            },
          ],
        },
        {
          id: 'trade-and-slavery',
          name: 'Trade and the slave trade',
          topics: [
            {
              id: 'trans-saharan',
              title: 'The trans-Saharan trade',
              outcome: 'Describe what was traded across the Sahara and what it did to the savanna states.',
              year: 'SHS 1',
            },
            {
              id: 'atlantic-slave-trade',
              title: 'The Atlantic slave trade',
              outcome: 'Explain how the trade worked, who took part, and its effects on West Africa.',
              year: 'SHS 2',
            },
            {
              id: 'abolition',
              title: 'Abolition and its consequences',
              outcome: 'Explain why the trade was abolished and what replaced it.',
              year: 'SHS 2',
              needs: ['atlantic-slave-trade'],
            },
          ],
        },
      ],
    },
    {
      id: 'colonial-era',
      name: 'Colonial rule and resistance',
      purpose: 'How Ghana came to be ruled from outside, and how that was resisted.',
      subStrands: [
        {
          id: 'conquest-administration',
          name: 'Conquest and administration',
          topics: [
            {
              id: 'bond-1844',
              title: 'The Bond of 1844 and British influence',
              outcome: 'Explain how British authority on the coast was established and extended.',
              year: 'SHS 2',
            },
            {
              id: 'anglo-asante',
              title: 'The Anglo-Asante wars',
              outcome: 'Give the causes and results of the Anglo-Asante conflicts.',
              year: 'SHS 2',
            },
            {
              id: 'indirect-rule',
              title: 'Indirect rule',
              outcome: 'Explain indirect rule and what it did to the authority of chiefs.',
              year: 'SHS 2',
            },
            {
              id: 'colonial-economy',
              title: 'The colonial economy',
              outcome: 'Explain why the colony exported raw materials and what that left behind.',
              year: 'SHS 2',
            },
          ],
        },
        {
          id: 'nationalism',
          name: 'Nationalism and independence',
          topics: [
            {
              id: 'early-nationalism',
              title: 'Early nationalist movements',
              outcome: 'Describe the ARPS and the UGCC and what each wanted.',
              year: 'SHS 3',
            },
            {
              id: 'cpp-independence',
              title: 'The CPP and independence',
              outcome: 'Explain the steps from 1948 to independence in 1957.',
              year: 'SHS 3',
              needs: ['early-nationalism'],
            },
            {
              id: 'post-independence',
              title: 'Ghana after independence',
              outcome: 'Outline the main changes of government since 1957 and their causes.',
              year: 'SHS 3',
              needs: ['cpp-independence'],
            },
          ],
        },
      ],
    },
    {
      id: 'africa-world',
      name: 'Africa and the wider world',
      purpose: 'Ghana placed beside the rest of Africa and the world.',
      subStrands: [
        {
          id: 'african-world',
          name: 'African and world themes',
          topics: [
            {
              id: 'pan-africanism',
              title: 'Pan-Africanism',
              outcome: 'Explain what Pan-Africanism argued and what it achieved.',
              year: 'SHS 3',
            },
            {
              id: 'african-union',
              title: 'From the OAU to the African Union',
              outcome: 'Describe why the OAU was founded and what changed with the AU.',
              year: 'SHS 3',
              needs: ['pan-africanism'],
            },
            {
              id: 'apartheid',
              title: 'Apartheid and its end',
              outcome: 'Explain what apartheid was and how it was brought down.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Religious and Moral Education ───────────────────────────────────────── */

register({
  subjectId: 'rme',
  stage: 'shs',
  subject: 'Religious and Moral Education',
  source: 'MODEL',
  note: NOTE
    + ' Each faith is described as its own followers state it, and none is ranked above another.',
  strands: [
    {
      id: 'god-creation-shs',
      name: 'God, creation and the human being',
      purpose: 'What the three faiths affirm, where they agree and where they differ.',
      subStrands: [
        {
          id: 'beliefs-shs',
          name: 'Beliefs about God and creation',
          topics: [
            {
              id: 'nature-god-shs',
              title: 'The nature of God',
              outcome: 'State the attributes each faith affirms and identify the agreement and the differences.',
              year: 'SHS 1',
            },
            {
              id: 'creation-shs',
              title: 'Accounts of creation',
              outcome: 'Compare the three accounts and the duty each draws from its own.',
              year: 'SHS 1',
            },
            {
              id: 'human-purpose',
              title: 'The purpose of the human being',
              outcome: 'Explain what each faith says a person is for, in that faith’s own terms.',
              year: 'SHS 1',
              needs: ['nature-god-shs'],
            },
          ],
        },
      ],
    },
    {
      id: 'scripture-leaders',
      name: 'Scripture, leaders and worship',
      purpose: 'Where each faith’s teaching comes from and how it is practised.',
      subStrands: [
        {
          id: 'sources-practice',
          name: 'Sources and practice',
          topics: [
            {
              id: 'scriptures-shs',
              title: 'The scriptures and their authority',
              outcome: 'Describe each faith’s sources of teaching and how authority is claimed from them.',
              year: 'SHS 1',
            },
            {
              id: 'leaders-shs',
              title: 'Religious leaders and reformers',
              outcome: 'Describe a leader’s life, a central teaching, and what followers still do because of it.',
              year: 'SHS 2',
            },
            {
              id: 'worship-shs',
              title: 'Forms of worship',
              outcome: 'Describe worship in each faith and what it requires of the worshipper afterwards.',
              year: 'SHS 2',
            },
            {
              id: 'festivals-shs',
              title: 'Religious festivals',
              outcome: 'Explain what a named festival commemorates and how it is observed.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'moral-life',
      name: 'Moral life and society',
      purpose: 'How religious teaching bears on choices people actually face.',
      subStrands: [
        {
          id: 'conduct-shs',
          name: 'Conduct and responsibility',
          topics: [
            {
              id: 'moral-reasoning-shs',
              title: 'Making a moral decision',
              outcome: 'Work through a real dilemma, naming the cost of the option you choose.',
              year: 'SHS 2',
            },
            {
              id: 'work-wealth-shs',
              title: 'Work, wealth and corruption',
              outcome: 'Argue from religious teaching about honest work, and say what corruption costs a country.',
              year: 'SHS 2',
            },
            {
              id: 'marriage-family-shs',
              title: 'Marriage and family life',
              outcome: 'Describe what each faith teaches about marriage and the duties within a family.',
              year: 'SHS 3',
            },
            {
              id: 'tolerance-shs',
              title: 'Religious tolerance',
              outcome: 'Argue for tolerance from inside your own tradition, without requiring agreement.',
              year: 'SHS 3',
            },
            {
              id: 'stewardship-shs',
              title: 'Stewardship of the environment',
              outcome: 'Make the argument from given to held in trust to answerable, and apply it locally.',
              year: 'SHS 3',
            },
            {
              id: 'religion-state',
              title: 'Religion and the state',
              outcome: 'Explain what a secular constitution guarantees and what it asks of believers.',
              year: 'SHS 3',
              needs: ['tolerance-shs'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Ghanaian Language ───────────────────────────────────────────────────── */

register({
  subjectId: 'ghl',
  stage: 'shs',
  subject: 'Ghanaian Language',
  source: 'MODEL',
  note: NOTE
    + ' Written across the written languages of Ghana, since which one a school teaches depends on where it is.',
  strands: [
    {
      id: 'ghl-language',
      name: 'The language itself',
      purpose: 'The structure of the language, named so that you can correct your own work.',
      subStrands: [
        {
          id: 'ghl-structure',
          name: 'Sounds, words and sentences',
          topics: [
            {
              id: 'phonology-ghl',
              title: 'Sounds and tone',
              outcome: 'Describe the sound system and show how tone distinguishes words.',
              year: 'SHS 1',
            },
            {
              id: 'morphology-ghl',
              title: 'Word formation',
              outcome: 'Form words with the affixes the language uses, and explain each one’s job.',
              year: 'SHS 1',
            },
            {
              id: 'syntax-ghl',
              title: 'Sentence structure',
              outcome: 'Analyse simple, compound and complex sentences in the language.',
              year: 'SHS 2',
              needs: ['morphology-ghl'],
            },
            {
              id: 'serial-verbs',
              title: 'Serial verb constructions',
              outcome: 'Use two or more verbs in sequence where English would need a clause.',
              year: 'SHS 2',
              needs: ['syntax-ghl'],
            },
            {
              id: 'orthography-ghl',
              title: 'Spelling and orthography',
              outcome: 'Write the special letters and tone marks correctly and consistently.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'ghl-literature',
      name: 'Oral and written literature',
      purpose: 'What the tradition has made, and how to read and perform it.',
      subStrands: [
        {
          id: 'ghl-oral',
          name: 'Oral literature',
          topics: [
            {
              id: 'appellation-shs',
              title: 'Appellations and praise poetry',
              outcome: 'Perform an appellation and explain the claim inside each image.',
              year: 'SHS 1',
            },
            {
              id: 'dirges-shs',
              title: 'Dirges and funeral poetry',
              outcome: 'Analyse a dirge, showing how its images state loss.',
              year: 'SHS 2',
            },
            {
              id: 'proverbs-shs-ghl',
              title: 'Proverbs and idioms',
              outcome: 'Use a proverb correctly in argument and explain its meaning and its occasion.',
              year: 'SHS 1',
            },
            {
              id: 'folktale-shs',
              title: 'Folktales and their devices',
              outcome: 'Analyse a folktale for its lesson and say what each device does for an audience.',
              year: 'SHS 2',
            },
          ],
        },
        {
          id: 'ghl-written',
          name: 'Written literature and composition',
          topics: [
            {
              id: 'prose-drama-ghl',
              title: 'A prose work or play in the language',
              outcome: 'Discuss plot, character, setting and theme with evidence from the text.',
              year: 'SHS 3',
            },
            {
              id: 'poetry-ghl',
              title: 'Written poetry in the language',
              outcome: 'Analyse a poem, linking its sound and images to what it is about.',
              year: 'SHS 3',
            },
            {
              id: 'composition-ghl-shs',
              title: 'Composition',
              outcome: 'Write a narrative, an argument and a formal letter in the language.',
              year: 'SHS 2',
            },
            {
              id: 'translation-shs',
              title: 'Translation',
              outcome: 'Translate a passage both ways, keeping idiom rather than word order.',
              year: 'SHS 3',
            },
            {
              id: 'formal-speech-ghl-shs',
              title: 'Formal and ceremonial speech',
              outcome: 'Address a gathering in the proper order and with the right forms of respect.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})

/* ── French ──────────────────────────────────────────────────────────────── */

register({
  subjectId: 'french',
  stage: 'shs',
  subject: 'French',
  source: 'MODEL',
  note: NOTE + ' It assumes the JHS French course, or a year of catching up.',
  strands: [
    {
      id: 'french-grammar',
      name: 'Grammar',
      purpose: 'The forms you need in order to say something that is actually correct.',
      subStrands: [
        {
          id: 'french-verbs',
          name: 'Verbs and tenses',
          topics: [
            {
              id: 'present-revision-fr',
              title: 'The present tense, regular and irregular',
              outcome: 'Conjugate the three regular groups and the common irregular verbs.',
              year: 'SHS 1',
            },
            {
              id: 'perfect-imperfect-fr',
              title: 'The perfect and the imperfect',
              outcome: 'Choose between the passé composé and the imperfect, and say why.',
              year: 'SHS 1',
              needs: ['present-revision-fr'],
            },
            {
              id: 'future-conditional-fr',
              title: 'The future and the conditional',
              outcome: 'Use the simple future and the conditional, including in si clauses.',
              year: 'SHS 2',
              needs: ['present-revision-fr'],
            },
            {
              id: 'pronouns-fr',
              title: 'Object and relative pronouns',
              outcome: 'Place direct, indirect and relative pronouns correctly in a sentence.',
              year: 'SHS 2',
            },
            {
              id: 'subjunctive-fr',
              title: 'The subjunctive',
              outcome: 'Recognise the expressions that require the subjunctive and form it.',
              year: 'SHS 3',
              needs: ['future-conditional-fr'],
            },
          ],
        },
        {
          id: 'french-agreement',
          name: 'Agreement and structure',
          topics: [
            {
              id: 'agreement-fr',
              title: 'Gender, number and agreement',
              outcome: 'Make articles, adjectives and participles agree throughout a passage.',
              year: 'SHS 1',
            },
            {
              id: 'negation-questions-fr',
              title: 'Negation and questions',
              outcome: 'Form negatives and questions in three registers, including inversion.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'french-skills',
      name: 'Using the language',
      purpose: 'Reading, writing, listening and speaking for a real purpose.',
      subStrands: [
        {
          id: 'french-receptive',
          name: 'Reading and listening',
          topics: [
            {
              id: 'reading-fr-shs',
              title: 'Reading comprehension',
              outcome: 'Answer questions in French on an unseen text, including inference.',
              year: 'SHS 2',
            },
            {
              id: 'listening-fr-shs',
              title: 'Listening comprehension',
              outcome: 'Answer questions on something heard once, including the speaker’s attitude.',
              year: 'SHS 2',
            },
            {
              id: 'false-friends-fr',
              title: 'Vocabulary and false friends',
              outcome: 'Work out a word from its sentence, and avoid the words that look English.',
              year: 'SHS 1',
            },
          ],
        },
        {
          id: 'french-productive',
          name: 'Writing and speaking',
          topics: [
            {
              id: 'letter-fr-shs',
              title: 'Formal and informal letters',
              outcome: 'Write both kinds with the correct layout, register and closing.',
              year: 'SHS 2',
            },
            {
              id: 'composition-fr-shs',
              title: 'Composition',
              outcome: 'Write a narrative or an argument in French with correct agreement throughout.',
              year: 'SHS 3',
              needs: ['agreement-fr'],
            },
            {
              id: 'speaking-fr-shs',
              title: 'Speaking and oral interaction',
              outcome: 'Hold a conversation on a prepared topic and answer unprepared questions.',
              year: 'SHS 3',
            },
            {
              id: 'francophone-culture',
              title: 'The francophone world',
              outcome: 'Describe francophone West Africa and why French matters to Ghana’s neighbours.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Arabic ──────────────────────────────────────────────────────────────── */

register({
  subjectId: 'arabic',
  stage: 'shs',
  subject: 'Arabic',
  source: 'MODEL',
  note: NOTE
    + ' It starts from the script, since a learner meets a new alphabet before any grammar.',
  strands: [
    {
      id: 'arabic-script',
      name: 'Script and sound',
      purpose: 'Reading and writing the alphabet, which has to come first.',
      subStrands: [
        {
          id: 'arabic-alphabet',
          name: 'The alphabet and pronunciation',
          topics: [
            {
              id: 'alphabet-ar',
              title: 'The Arabic alphabet',
              outcome: 'Read and write every letter in its initial, medial, final and isolated forms.',
              year: 'SHS 1',
            },
            {
              id: 'vowels-ar',
              title: 'Short and long vowels',
              outcome: 'Read vowelled text correctly and write the vowel marks where needed.',
              year: 'SHS 1',
              needs: ['alphabet-ar'],
            },
            {
              id: 'pronunciation-ar',
              title: 'Sounds that English does not have',
              outcome: 'Produce the sounds that have no English equivalent, and distinguish them.',
              year: 'SHS 1',
              needs: ['alphabet-ar'],
            },
          ],
        },
      ],
    },
    {
      id: 'arabic-grammar',
      name: 'Grammar',
      purpose: 'The structure of the sentence, which differs from English in its order and its agreement.',
      subStrands: [
        {
          id: 'arabic-nouns',
          name: 'Nouns and the noun sentence',
          topics: [
            {
              id: 'noun-sentence-ar',
              title: 'The nominal sentence',
              outcome: 'Build a sentence with no verb, as Arabic does for simple statements.',
              year: 'SHS 1',
              needs: ['vowels-ar'],
            },
            {
              id: 'gender-number-ar',
              title: 'Gender, number and the dual',
              outcome: 'Form the dual and the plurals, and make adjectives agree.',
              year: 'SHS 2',
            },
            {
              id: 'definiteness-ar',
              title: 'Definiteness and the construct',
              outcome: 'Use the definite article and build a possessive construct correctly.',
              year: 'SHS 2',
            },
          ],
        },
        {
          id: 'arabic-verbs',
          name: 'Verbs',
          topics: [
            {
              id: 'past-tense-ar',
              title: 'The past tense',
              outcome: 'Conjugate the sound verb in the past for all persons.',
              year: 'SHS 2',
            },
            {
              id: 'present-tense-ar',
              title: 'The present tense',
              outcome: 'Conjugate the sound verb in the present and form the negative.',
              year: 'SHS 2',
              needs: ['past-tense-ar'],
            },
            {
              id: 'verb-forms-ar',
              title: 'The derived verb forms',
              outcome: 'Recognise the common derived forms and say what each does to the meaning.',
              year: 'SHS 3',
              needs: ['present-tense-ar'],
            },
          ],
        },
      ],
    },
    {
      id: 'arabic-use',
      name: 'Using the language',
      purpose: 'Reading, writing and speaking Arabic for a purpose.',
      subStrands: [
        {
          id: 'arabic-skills',
          name: 'Comprehension and composition',
          topics: [
            {
              id: 'reading-ar',
              title: 'Reading comprehension',
              outcome: 'Read an unseen passage aloud and answer questions on it in Arabic.',
              year: 'SHS 2',
            },
            {
              id: 'composition-ar',
              title: 'Composition',
              outcome: 'Write a short composition or letter with correct agreement and script.',
              year: 'SHS 3',
            },
            {
              id: 'conversation-ar',
              title: 'Conversation',
              outcome: 'Greet, introduce yourself and hold a short conversation on a familiar topic.',
              year: 'SHS 1',
            },
            {
              id: 'arabic-in-ghana',
              title: 'Arabic in Ghana and beyond',
              outcome: 'Explain where Arabic is used in Ghana and why it has been taught here for centuries.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Spanish ─────────────────────────────────────────────────────────────── */

register({
  subjectId: 'spanish',
  stage: 'shs',
  subject: 'Spanish',
  source: 'MODEL',
  note: NOTE + ' It starts from nothing, since Spanish is rarely taught at JHS.',
  strands: [
    {
      id: 'spanish-foundations',
      name: 'Foundations',
      purpose: 'Sounds, greetings and the forms needed to say anything at all.',
      subStrands: [
        {
          id: 'spanish-start',
          name: 'Sounds and first forms',
          topics: [
            {
              id: 'pronunciation-es',
              title: 'Pronunciation and spelling',
              outcome: 'Read Spanish aloud accurately, since the spelling is regular.',
              year: 'SHS 1',
            },
            {
              id: 'greetings-es',
              title: 'Greetings and introductions',
              outcome: 'Greet, introduce yourself and ask somebody about themselves.',
              year: 'SHS 1',
            },
            {
              id: 'gender-articles-es',
              title: 'Gender, number and articles',
              outcome: 'Use el, la, los, las, un and una correctly and make adjectives agree.',
              year: 'SHS 1',
            },
            {
              id: 'ser-estar',
              title: 'Ser and estar',
              outcome: 'Choose between the two verbs for to be, and say why each is used.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'spanish-verbs',
      name: 'Verbs and tenses',
      purpose: 'Saying when something happened, which is where Spanish grammar sits.',
      subStrands: [
        {
          id: 'spanish-tenses',
          name: 'The tenses',
          topics: [
            {
              id: 'present-es',
              title: 'The present tense',
              outcome: 'Conjugate ar, er and ir verbs, and the common irregular ones.',
              year: 'SHS 1',
              needs: ['pronunciation-es'],
            },
            {
              id: 'preterite-imperfect-es',
              title: 'The preterite and the imperfect',
              outcome: 'Choose between the two past tenses and justify the choice.',
              year: 'SHS 2',
              needs: ['present-es'],
            },
            {
              id: 'future-conditional-es',
              title: 'The future and the conditional',
              outcome: 'Form both, including with the common irregular stems.',
              year: 'SHS 2',
              needs: ['present-es'],
            },
            {
              id: 'subjunctive-es',
              title: 'The subjunctive',
              outcome: 'Recognise what triggers the subjunctive and form the present subjunctive.',
              year: 'SHS 3',
              needs: ['future-conditional-es'],
            },
            {
              id: 'reflexive-pronouns-es',
              title: 'Reflexive and object pronouns',
              outcome: 'Use reflexive verbs and place object pronouns correctly.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'spanish-use',
      name: 'Using the language',
      purpose: 'Reading, writing and speaking Spanish about real things.',
      subStrands: [
        {
          id: 'spanish-skills',
          name: 'Comprehension, composition and speech',
          topics: [
            {
              id: 'reading-es',
              title: 'Reading comprehension',
              outcome: 'Answer questions in Spanish on an unseen passage.',
              year: 'SHS 2',
            },
            {
              id: 'listening-es',
              title: 'Listening comprehension',
              outcome: 'Answer questions on spoken Spanish heard once.',
              year: 'SHS 2',
            },
            {
              id: 'composition-es',
              title: 'Composition and letters',
              outcome: 'Write a letter or a short composition with correct agreement and tense.',
              year: 'SHS 3',
            },
            {
              id: 'conversation-es',
              title: 'Conversation',
              outcome: 'Shop, ask directions, and hold a conversation on a prepared topic.',
              year: 'SHS 2',
            },
            {
              id: 'hispanic-world',
              title: 'The Spanish speaking world',
              outcome: 'Say where Spanish is spoken and why it is worth a Ghanaian learning it.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
  ],
})
