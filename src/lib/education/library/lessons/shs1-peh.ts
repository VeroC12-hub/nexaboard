/**
 * Stored lessons for SHS 1 Core Physical Education and Health.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What this subject is examined on ──────────────────────────────────────
 *
 * Not on being good at sport. The paper asks for the reason behind the
 * practice: which component of fitness a test measures, what each part of a
 * warm up prevents and why, which route a disease travels and therefore
 * which measure blocks it. A learner who runs fast and cannot say what the
 * shuttle run measures will lose marks that a slower classmate keeps. So
 * every lesson here pairs the activity with its reason.
 *
 * ── Equipment, honestly ──────────────────────────────────────────────────
 *
 * A school may have no track, no measured pit, no stopwatch and no mats.
 * Each lesson says which part of the topic needs equipment and which does
 * not. The fitness tests are mostly improvisable: a marked distance on a
 * level patch of ground, a wall, a bench, and a phone clock cover almost
 * all of them. The athletics lesson says plainly where a proper facility is
 * needed for safety, because a learner should not be encouraged to attempt
 * a high jump onto bare ground.
 *
 * ── Ghanaian context ─────────────────────────────────────────────────────
 *
 * The nutrition lesson plans meals from what is actually in a Ghanaian
 * market, to a budget, because that is what the syllabus asks and because a
 * diet sheet built from imported foods teaches nothing usable. The disease
 * lesson names the diseases that matter here: malaria, cholera, typhoid,
 * tuberculosis.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── components of fitness ─────────────────────────────────────────────── */

teach({
  topicId: 'fitness-components',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Fitness is not one thing. '
      + 'The health related components are '
      + 'cardiovascular endurance, muscular strength, '
      + 'muscular endurance, flexibility and body composition. '
      + 'The skill related components are '
      + 'speed, agility, balance, coordination, power and reaction time. '
      + 'Each has its own test, '
      + 'and a person can be strong in one and weak in another.',
    method: [
      'Name the component.',
      'Say what it means in one clause.',
      'Name a test that measures it.',
      'Say what the test result tells you.',
      'Decide whether the component is health related or skill '
        + 'related.',
    ],
  },

  idea:
    'Physical fitness is the ability to carry out daily activity '
    + 'without undue fatigue '
    + 'and with energy left over. '
    + 'It is made of separate components, '
    + 'and they divide into two groups. '
    + 'The health related components are five. '
    + 'Cardiovascular endurance is the ability of the heart and lungs '
    + 'to supply oxygen during sustained activity, '
    + 'tested by a distance run such as 12 minutes '
    + 'or a step test. '
    + 'Muscular strength is the greatest force a muscle can exert once, '
    + 'tested by a hand grip dynamometer '
    + 'or a one repetition maximum lift. '
    + 'Muscular endurance is the ability to repeat a contraction, '
    + 'tested by press ups or sit ups in one minute. '
    + 'Flexibility is the range of movement at a joint, '
    + 'tested by the sit and reach. '
    + 'Body composition is the proportion of fat to lean tissue, '
    + 'estimated from skinfold measurements '
    + 'or roughly from the body mass index. '
    + 'The skill related components are six. '
    + 'Speed is how quickly a movement is completed, '
    + 'tested by a 30 or 50 metre sprint. '
    + 'Agility is the ability to change direction quickly, '
    + 'tested by a shuttle run. '
    + 'Balance is keeping the body stable, '
    + 'tested by standing on one leg. '
    + 'Coordination is using two or more body parts together, '
    + 'tested by throwing and catching against a wall. '
    + 'Power is strength applied quickly, '
    + 'tested by a standing vertical or broad jump. '
    + 'Reaction time is how quickly you respond to a signal, '
    + 'tested by the ruler drop.',

  mechanism:
    'The idea that makes this topic worth teaching, '
    + 'and that the examination tests, '
    + 'is that fitness is specific. '
    + 'A person is not simply fit or unfit. '
    + 'A weightlifter has great muscular strength '
    + 'and may be unable to run two kilometres. '
    + 'A long distance runner has great cardiovascular endurance '
    + 'and little power. '
    + 'A goalkeeper needs reaction time and agility '
    + 'and does not need endurance in the same degree. '
    + 'So the first question about any fitness demand '
    + 'is which component it is, '
    + 'and the answer decides both the test and the training. '
    + 'A candidate who writes that a footballer needs to be fit '
    + 'has said nothing. '
    + 'A candidate who writes that a midfielder '
    + 'needs cardiovascular endurance to cover ground for ninety '
    + 'minutes, '
    + 'agility to turn with the ball, '
    + 'and power for a shot, '
    + 'has answered the question. '
    + 'The habit to build is to name the component '
    + 'before naming anything else. '
    + 'The second point is the difference '
    + 'between strength and endurance, '
    + 'which candidates confuse '
    + 'because both involve muscles working. '
    + 'The distinction is single effort against repetition. '
    + 'Strength is the most you can do once: '
    + 'the heaviest load lifted one time. '
    + 'Endurance is how many times you can do a lighter one: '
    + 'press ups until you cannot continue. '
    + 'So the tests differ accordingly, '
    + 'and a test that counts repetitions '
    + 'is measuring endurance whatever the exercise is. '
    + 'The same distinction separates strength from power, '
    + 'and this one is subtler. '
    + 'Power is strength applied quickly, '
    + 'so it includes speed. '
    + 'A slow heavy lift shows strength. '
    + 'A jump shows power, '
    + 'because the force has to be produced in an instant. '
    + 'That is why a vertical jump tests power and not strength, '
    + 'and it is a standard examination question. '
    + 'Third, the match between a test and a component, '
    + 'which is where most of the marks sit. '
    + 'A question gives a test and asks what it measures, '
    + 'or gives a component and asks for a test. '
    + 'The way to be sure is to ask what the test actually demands. '
    + 'The sit and reach demands that a joint move far, '
    + 'so it is flexibility. '
    + 'The shuttle run demands repeated changes of direction, '
    + 'so it is agility and not speed, '
    + 'even though it is run fast. '
    + 'The ruler drop demands nothing physical at all '
    + 'except a fast response, '
    + 'so it is reaction time. '
    + 'The 12 minute run demands that the heart and lungs '
    + 'keep supplying oxygen, '
    + 'so it is cardiovascular endurance. '
    + 'Reasoning from the demand '
    + 'is more reliable than recalling a list of pairs. '
    + 'Fourth, a point of honesty about equipment. '
    + 'A dynamometer and skinfold calipers '
    + 'will not be in most school stores, '
    + 'and the lesson should say so rather than pretend. '
    + 'What is examinable is knowing '
    + 'which instrument measures which component '
    + 'and what the reading means, '
    + 'and that can be learned from the page. '
    + 'What can actually be done in any school compound '
    + 'is most of the rest: '
    + 'a sit and reach using a bench and a ruler; '
    + 'press ups and sit ups counted in a minute by a phone clock; '
    + 'a sprint over a measured distance marked with stones; '
    + 'a shuttle run between two marks; '
    + 'a standing broad jump measured with a tape; '
    + 'balance on one leg; '
    + 'and the ruler drop, which needs only a ruler. '
    + 'So a learner can measure eight or nine components '
    + 'with a tape, a ruler and a phone, '
    + 'and should, because a measured result is memorable '
    + 'in a way a definition is not. '
    + 'Fifth, the body mass index, '
    + 'which is examined and should be stated with its limitation. '
    + 'It is mass in kilograms divided by height in metres squared. '
    + 'It estimates body composition roughly '
    + 'and it cannot distinguish muscle from fat, '
    + 'so a muscular athlete can register as overweight. '
    + 'Saying that limitation earns a mark '
    + 'and shows the index is understood rather than recited. '
    + 'What has to be written down is always the pair: '
    + 'the component and the test, '
    + 'or the test and what it measures.',

  recap:
    'You know that some people can run further '
    + 'and others can lift more. '
    + 'This divides fitness into its components, '
    + 'and gives a test for each.',

  method: [
    'Decide which component the question concerns.',
    'Define it in one clause.',
    'Ask what a test of it would have to demand.',
    'Name the test that makes that demand.',
    'Say what the result tells you.',
    'Classify the component as health related or skill related.',
    'For body mass index, give the formula and its limitation.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the five health related components of fitness '
        + 'and a test for each.',
      steps: [
        'Five components, each with a test that makes its own demand.',
      ],
      answer: 'Cardiovascular endurance, tested by a 12 minute run '
        + 'or a step test. '
        + 'Muscular strength, tested by a hand grip dynamometer '
        + 'or a single maximum lift. '
        + 'Muscular endurance, tested by press ups or sit ups counted '
        + 'in a minute. '
        + 'Flexibility, tested by the sit and reach. '
        + 'Body composition, estimated from skinfold measurements '
        + 'or roughly from the body mass index.',
    },
    {
      level: 4,
      ask: 'Distinguish muscular strength, muscular endurance and power.',
      steps: [
        'Strength is a single maximum effort.',
        'Endurance is repetition of a lighter effort.',
        'Power adds speed to strength.',
      ],
      answer: 'Muscular strength is the greatest force a muscle can '
        + 'exert '
        + 'in a single effort, '
        + 'tested by the heaviest load lifted once. '
        + 'Muscular endurance is the ability to repeat a lighter '
        + 'contraction, '
        + 'tested by counting press ups or sit ups. '
        + 'Power is strength applied quickly, '
        + 'so it includes a speed element, '
        + 'and it is tested by a jump, '
        + 'where the force must be produced in an instant. '
        + 'That is why a vertical jump measures power and not strength.',
    },
    {
      level: 4,
      ask: 'What does a shuttle run measure, and why not speed?',
      steps: [
        'Ask what the test demands.',
        'It demands repeated changes of direction.',
      ],
      answer: 'Agility. '
        + 'The shuttle run requires the runner '
        + 'to stop, turn and accelerate again repeatedly, '
        + 'and that ability to change direction quickly is agility. '
        + 'A straight sprint over 30 or 50 metres measures speed, '
        + 'because no change of direction is involved. '
        + 'Reasoning from what the test demands '
        + 'is more reliable than recalling which test goes with which '
        + 'component.',
    },
    {
      level: 5,
      ask: 'A midfielder, a goalkeeper and a sprinter. '
        + 'Name the components each most needs, '
        + 'and what this shows about fitness.',
      steps: [
        'Each position has its own demands.',
        'So fitness is specific, not general.',
      ],
      answer: 'A midfielder needs cardiovascular endurance '
        + 'to cover ground for ninety minutes, '
        + 'agility to turn with the ball, '
        + 'and power for a shot or a header. '
        + 'A goalkeeper needs reaction time above all, '
        + 'with agility, power for a dive, and balance, '
        + 'and far less endurance. '
        + 'A sprinter needs speed and power, '
        + 'with reaction time for the start, '
        + 'and very little cardiovascular endurance. '
        + 'This shows that fitness is specific rather than general. '
        + 'A person is not simply fit or unfit, '
        + 'and training must target the component the activity demands, '
        + 'which is why naming the component '
        + 'is the first step in any answer.',
    },
  ],

  traps: [
    {
      mistake: 'Writing that an athlete needs to be fit.',
      why: 'Fitness is specific. '
        + 'Name the components the activity demands and why.',
    },
    {
      mistake: 'Confusing muscular strength with muscular endurance.',
      why: 'Strength is a single maximum effort. '
        + 'A test that counts repetitions measures endurance.',
    },
    {
      mistake: 'Saying a vertical jump tests strength.',
      why: 'It tests power, '
        + 'because the force must be produced quickly.',
    },
    {
      mistake: 'Giving the body mass index without its limitation.',
      why: 'It cannot distinguish muscle from fat, '
        + 'so a muscular athlete can register as overweight. '
        + 'The limitation is a mark.',
    },
  ],

  extension:
    'Training is specific too. '
    + 'That is the practical consequence of this topic. '
    + 'The principle is called specificity. '
    + 'You improve the component you train. '
    + 'Running long distances improves cardiovascular endurance. '
    + 'It will not make a person jump higher, '
    + 'because jumping is power. '
    + 'Three other principles go with it. '
    + 'Overload says a demand must exceed present capacity '
    + 'for any gain at all. '
    + 'Progression says the demand must rise as capacity grows. '
    + 'Reversibility says a gain is lost when training stops. '
    + 'Together these explain two things. '
    + 'A training programme has to be designed, not just undertaken. '
    + 'And a programme that worked once '
    + 'must be made harder to go on working.',

  questions: [
    {
      id: 'fit-1',
      ask: 'The sit and reach test measures:',
      kind: 'choice',
      options: ['flexibility', 'muscular endurance', 'agility'],
      answer: 'flexibility',
      teach: 'It demands that a joint move through a large range, '
        + 'which is flexibility.',
      level: 3,
    },
    {
      id: 'fit-2',
      ask: 'A test that counts press ups in one minute measures:',
      kind: 'choice',
      options: ['muscular endurance', 'muscular strength', 'power'],
      answer: 'muscular endurance',
      teach: 'Counting repetitions measures endurance. '
        + 'Strength is a single maximum effort.',
      level: 3,
    },
    {
      id: 'fit-3',
      ask: 'A standing broad jump measures:',
      kind: 'choice',
      options: ['power', 'strength', 'flexibility'],
      answer: 'power',
      teach: 'Power is strength applied quickly, '
        + 'and a jump requires the force in an instant.',
      level: 4,
    },
    {
      id: 'fit-4',
      ask: 'How many health related components of fitness are there?',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'Cardiovascular endurance, muscular strength, '
        + 'muscular endurance, flexibility and body composition.',
      level: 3,
    },
    {
      id: 'fit-5',
      ask: 'The main limitation of the body mass index is that it:',
      kind: 'choice',
      options: [
        'cannot distinguish muscle from fat',
        'needs expensive equipment',
        'only works for children',
      ],
      answer: 'cannot distinguish muscle from fat',
      teach: 'So a muscular athlete can register as overweight. '
        + 'Stating the limitation earns a mark.',
      level: 5,
    },
  ],
})

/* ── warming up and avoiding injury ────────────────────────────────────── */

teach({
  topicId: 'warm-up-injury',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A warm up has three parts. '
      + 'Light continuous activity raises the heart rate '
      + 'and the temperature of the muscles. '
      + 'Mobility and dynamic stretching '
      + 'take the joints through their range. '
      + 'Activity specific drills prepare the exact movements to come. '
      + 'Each part prevents a particular injury, '
      + 'and a cool down afterwards clears waste '
      + 'and reduces stiffness.',
    method: [
      'Begin with five to ten minutes of light continuous activity.',
      'Move to mobility and dynamic stretches.',
      'Finish with drills from the activity itself.',
      'For each part, be able to say what it prevents.',
      'Cool down with light activity and then static stretching.',
    ],
  },

  idea:
    'A warm up prepares the body for activity in three stages. '
    + 'The first is light continuous activity, '
    + 'such as jogging for five to ten minutes, '
    + 'which raises the heart rate, '
    + 'increases blood flow to the muscles '
    + 'and raises their temperature. '
    + 'The second is mobility work and dynamic stretching, '
    + 'moving each joint through its range, '
    + 'with leg swings, arm circles, lunges and high knees. '
    + 'The third is activity specific preparation, '
    + 'performing the movements of the coming activity at low intensity: '
    + 'short strides before a sprint, '
    + 'easy passes before a football match, '
    + 'light throws before a javelin session. '
    + 'A cool down follows the activity: '
    + 'light continuous movement for several minutes, '
    + 'then static stretching, '
    + 'held for twenty to thirty seconds per muscle. '
    + 'Common injuries have known causes. '
    + 'A strain is damage to a muscle or tendon, '
    + 'often from a sudden effort on a cold muscle. '
    + 'A sprain is damage to a ligament at a joint, '
    + 'usually from a twist. '
    + 'A dislocation is a bone forced out of its joint. '
    + 'A fracture is a broken bone. '
    + 'Cramp is an involuntary contraction, '
    + 'associated with dehydration and loss of salts. '
    + 'The immediate treatment for a soft tissue injury '
    + 'is rest, ice, compression and elevation. '
    + 'Prevention includes warming up, '
    + 'correct technique, '
    + 'suitable footwear, '
    + 'protective equipment where the game requires it, '
    + 'checking the playing surface, '
    + 'and matching opponents by size and skill.',

  mechanism:
    'The examination does not ask for a list of warm up exercises. '
    + 'It asks what each part of the warm up prevents, '
    + 'and the answer has to be physiological. '
    + 'So take the three parts in turn and give the reason. '
    + 'The light activity first. '
    + 'A cold muscle is stiffer and tears more easily, '
    + 'in much the same way that a cold rubber band snaps '
    + 'where a warm one stretches. '
    + 'Raising the temperature of the muscle makes it more extensible, '
    + 'and increasing the blood flow delivers oxygen '
    + 'so the muscle can work aerobically from the start '
    + 'rather than going into oxygen debt immediately. '
    + 'So the first part prevents muscle strain '
    + 'and reduces early fatigue. '
    + 'The second part, the mobility work. '
    + 'A joint has a range of movement, '
    + 'and a sudden movement beyond that range '
    + 'damages the ligaments, which is a sprain. '
    + 'Taking the joint through its range beforehand, '
    + 'progressively, '
    + 'both prepares the tissues '
    + 'and tells the performer where their limit is today, '
    + 'which varies. '
    + 'So the second part prevents sprains. '
    + 'The third part, the specific drills. '
    + 'A movement performed for the first time at full speed '
    + 'is poorly coordinated, '
    + 'and poor coordination is how a performer lands badly '
    + 'or reaches awkwardly. '
    + 'Rehearsing the movement slowly first '
    + 'establishes the pattern, '
    + 'so the third part prevents injuries caused by bad technique '
    + 'and also improves early performance. '
    + 'Three parts, three distinct reasons, '
    + 'and those reasons are the marks. '
    + 'The second point to get right '
    + 'is dynamic against static stretching, '
    + 'and it is a place where older teaching was wrong '
    + 'and candidates repeat it. '
    + 'Holding a long static stretch before activity '
    + 'is not recommended, '
    + 'because it temporarily reduces the force a muscle can produce. '
    + 'Dynamic stretching, moving through the range, '
    + 'is what belongs in a warm up. '
    + 'Static stretching belongs in the cool down, '
    + 'where reducing muscle tension is what you want. '
    + 'So the rule is: dynamic before, static after, '
    + 'and a candidate who states it that way '
    + 'is giving the current guidance '
    + 'rather than what was taught a generation ago. '
    + 'Third, the cool down, which candidates omit. '
    + 'During hard activity '
    + 'blood is pooled in the working muscles. '
    + 'Stopping suddenly leaves it there, '
    + 'which can cause dizziness, '
    + 'and leaves metabolic waste in the muscle. '
    + 'Light continuous movement keeps the blood circulating '
    + 'so the waste is carried away, '
    + 'which reduces the stiffness felt the next day. '
    + 'Then the static stretching. '
    + 'A question asking why a cool down matters '
    + 'wants circulation and waste removal, '
    + 'not simply that it is good practice. '
    + 'Fourth, the treatment of an injury, '
    + 'which must be given in the right order and with the reason. '
    + 'Rest stops further damage. '
    + 'Ice reduces bleeding into the tissue and reduces pain. '
    + 'Compression limits swelling. '
    + 'Elevation drains fluid away from the injury. '
    + 'And heat is not applied to a fresh injury, '
    + 'because it increases blood flow '
    + 'and therefore increases the swelling, '
    + 'which is the standard error '
    + 'and is worth stating explicitly. '
    + 'Fifth, the honest point about facilities. '
    + 'A school may have no ice. '
    + 'Cold water, or a cloth soaked and wrung out, '
    + 'achieves part of the effect, '
    + 'and the examinable knowledge is the principle, '
    + 'which is to cool the injury. '
    + 'A school may have no mats, '
    + 'which matters for landing, '
    + 'and in that case the activity should be modified '
    + 'rather than attempted, '
    + 'and saying so is part of knowing about safety. '
    + 'What the topic needs is a level surface, '
    + 'water to drink, '
    + 'and somebody counting time, '
    + 'all of which any school can provide. '
    + 'What has to be written down, '
    + 'for each part of a warm up or each precaution, '
    + 'is what it prevents and by what mechanism.',

  recap:
    'You know that players run and stretch before a match. '
    + 'This says what each part of that is doing, '
    + 'and which injury it prevents.',

  method: [
    'Start with five to ten minutes of light continuous activity.',
    'State that this raises muscle temperature and blood flow.',
    'Move to dynamic stretching and joint mobility.',
    'State that this prepares the ligaments and finds today range.',
    'Add drills from the activity itself at low intensity.',
    'State that this establishes the movement pattern.',
    'Cool down with light movement, then static stretching.',
    'For an injury, apply rest, ice, compression and elevation, '
      + 'and do not apply heat.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the three parts of a warm up in order.',
      steps: [
        'General, then mobility, then specific.',
      ],
      answer: 'First, five to ten minutes of light continuous activity '
        + 'such as jogging. '
        + 'Second, mobility work and dynamic stretching, '
        + 'taking each joint through its range. '
        + 'Third, activity specific drills '
        + 'performed at low intensity, '
        + 'such as short strides before sprinting '
        + 'or easy passes before a match.',
    },
    {
      level: 4,
      ask: 'What does each part of a warm up prevent, and how?',
      steps: [
        'Each part has its own physiological reason.',
      ],
      answer: 'The light activity raises muscle temperature '
        + 'and increases blood flow, '
        + 'so the muscle becomes more extensible '
        + 'and is less likely to strain, '
        + 'and oxygen is delivered so the muscle works aerobically '
        + 'from the start. '
        + 'The mobility work takes each joint through its range '
        + 'progressively, '
        + 'which prepares the ligaments '
        + 'and shows the performer where today limit is, '
        + 'so sprains are less likely. '
        + 'The specific drills establish the movement pattern '
        + 'before it is performed at full speed, '
        + 'so the injuries caused by poor coordination '
        + 'and bad technique are avoided.',
    },
    {
      level: 4,
      ask: 'Should static stretching be done before or after activity? '
        + 'Explain.',
      steps: [
        'A held static stretch temporarily reduces force production.',
        'Dynamic stretching does not.',
        'After activity, reducing muscle tension is wanted.',
      ],
      answer: 'After. '
        + 'Holding a long static stretch before activity '
        + 'temporarily reduces the force a muscle can produce, '
        + 'so it is not recommended in a warm up. '
        + 'Dynamic stretching, which moves the joint through its range, '
        + 'belongs there instead. '
        + 'Static stretching belongs in the cool down, '
        + 'where reducing muscle tension is exactly what is wanted. '
        + 'So the rule is dynamic before and static after, '
        + 'which is current guidance '
        + 'and differs from what was taught a generation ago.',
    },
    {
      level: 5,
      ask: 'A player twists an ankle in a match. '
        + 'State the immediate treatment with a reason for each step, '
        + 'and name one thing not to do.',
      steps: [
        'Rest, ice, compression, elevation.',
        'Each has its own purpose.',
        'Heat increases blood flow and so increases swelling.',
      ],
      answer: 'Rest: stop play at once, to prevent further damage. '
        + 'Ice, or cold water if no ice is available: '
        + 'to reduce bleeding into the tissue and to reduce pain. '
        + 'Compression with a bandage: to limit the swelling. '
        + 'Elevation above the level of the heart: '
        + 'to help fluid drain away from the injury. '
        + 'Do not apply heat to a fresh injury, '
        + 'because heat increases blood flow '
        + 'and therefore increases the swelling. '
        + 'That is the commonest mistake '
        + 'and naming it earns a mark.',
    },
  ],

  traps: [
    {
      mistake: 'Listing warm up exercises without saying what they '
        + 'prevent.',
      why: 'The marks are for the reason. '
        + 'Each of the three parts prevents a different injury.',
    },
    {
      mistake: 'Recommending held static stretches before activity.',
      why: 'They temporarily reduce force production. '
        + 'Dynamic before, static after.',
    },
    {
      mistake: 'Omitting the cool down.',
      why: 'It keeps blood circulating so waste is carried away, '
        + 'which reduces next day stiffness and prevents dizziness.',
    },
    {
      mistake: 'Applying heat to a fresh injury.',
      why: 'It increases blood flow and so increases the swelling. '
        + 'Cool the injury instead.',
    },
  ],

  extension:
    'Most sports injuries are not accidents in the ordinary sense. '
    + 'The records show where they cluster. '
    + 'At the end of a match, when fatigue has spoiled technique. '
    + 'Early in a season, when the body is unprepared. '
    + 'In the first match after a long break. '
    + 'And in mismatched contests, '
    + 'where a much smaller or weaker player meets a stronger one. '
    + 'Each of those can be addressed. '
    + 'Substitute a tiring player. '
    + 'Build a pre season programme. '
    + 'Return gradually after a break. '
    + 'Match opponents by size and ability. '
    + 'Each measure removes a condition in which injuries happen. '
    + 'So a teacher who understands this topic '
    + 'prevents more injuries by scheduling '
    + 'than by any amount of first aid.',

  questions: [
    {
      id: 'wu-1',
      ask: 'The first part of a warm up should be:',
      kind: 'choice',
      options: [
        'light continuous activity',
        'held static stretches',
        'full speed sprints',
      ],
      answer: 'light continuous activity',
      teach: 'It raises muscle temperature and blood flow, '
        + 'which reduces the risk of strain.',
      level: 3,
    },
    {
      id: 'wu-2',
      ask: 'Damage to a ligament at a joint is a:',
      kind: 'choice',
      options: ['sprain', 'strain', 'fracture'],
      answer: 'sprain',
      teach: 'A strain is damage to a muscle or tendon. '
        + 'Mobility work in the warm up reduces sprains.',
      level: 3,
    },
    {
      id: 'wu-3',
      ask: 'Static stretching is best done:',
      kind: 'choice',
      options: ['after activity', 'before activity', 'during activity'],
      answer: 'after activity',
      teach: 'Held before activity it reduces force production. '
        + 'Dynamic before, static after.',
      level: 4,
    },
    {
      id: 'wu-4',
      ask: 'In treating a fresh sprain you should not:',
      kind: 'choice',
      options: ['apply heat', 'elevate the limb', 'apply compression'],
      answer: 'apply heat',
      teach: 'Heat increases blood flow and therefore the swelling. '
        + 'Cool the injury.',
      level: 4,
    },
    {
      id: 'wu-5',
      ask: 'The main purpose of a cool down is to:',
      kind: 'choice',
      options: [
        'keep blood circulating so waste is carried away',
        'increase muscle temperature',
        'build strength',
      ],
      answer: 'keep blood circulating so waste is carried away',
      teach: 'Stopping suddenly leaves blood pooled in the muscles, '
        + 'which causes dizziness and next day stiffness.',
      level: 5,
    },
  ],
})

/* ── athletics ─────────────────────────────────────────────────────────── */

teach({
  topicId: 'athletics-peh',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Athletics divides into track events, field events '
      + 'and combined events. '
      + 'A sprint uses a crouch start from blocks '
      + 'and is run in lanes. '
      + 'A middle distance race uses a standing start '
      + 'and may break from lanes. '
      + 'In the shot put the implement is pushed from the shoulder, '
      + 'not thrown, '
      + 'and must land inside the sector. '
      + 'Every event has rules '
      + 'whose breach means a foul.',
    method: [
      'Name the event and say whether it is track or field.',
      'Give the start or the approach.',
      'Give the technique in named phases.',
      'State the rule that defines a foul.',
      'Say what equipment is needed and what can be improvised.',
    ],
  },

  idea:
    'Athletics has three divisions. '
    + 'Track events are races: '
    + 'sprints at 100, 200 and 400 metres; '
    + 'middle distance at 800 and 1500 metres; '
    + 'long distance at 5000 and 10000 metres; '
    + 'hurdles; and relays. '
    + 'Field events are jumps and throws: '
    + 'long jump, triple jump, high jump and pole vault; '
    + 'shot put, discus, javelin and hammer. '
    + 'Combined events are the decathlon and the heptathlon. '
    + 'A sprint starts from a crouch position in blocks, '
    + 'on the commands on your marks, set, and the gun. '
    + 'The sprinter drives out low and rises gradually. '
    + 'Sprints up to 400 metres are run entirely in lanes, '
    + 'and leaving your lane means disqualification. '
    + 'The 800 metres starts in lanes and breaks after the first bend; '
    + 'the 1500 and longer start with a standing start, '
    + 'often from a curved line. '
    + 'A relay baton must be passed within the takeover zone. '
    + 'In the long jump the phases are approach, take off, '
    + 'flight and landing, '
    + 'and the jump is measured from the take off board '
    + 'to the nearest mark in the pit. '
    + 'Stepping beyond the board is a foul. '
    + 'In the shot put the shot is held at the neck '
    + 'and pushed, not thrown, '
    + 'the elbow staying behind the shot, '
    + 'and the thrower must not leave the circle '
    + 'until the shot has landed '
    + 'and must leave from the back half. '
    + 'The throw must land within the marked sector. '
    + 'In the high jump the athlete may not take off from two feet, '
    + 'and knocking the bar off is a failure; '
    + 'three consecutive failures end the attempt.',

  mechanism:
    'The examination tests technique as named phases '
    + 'and rules as conditions for a foul, '
    + 'so an answer should be built from those two things. '
    + 'Take the long jump. '
    + 'A candidate who writes that the athlete runs and jumps '
    + 'has one mark. '
    + 'A candidate who names the four phases '
    + 'and says what each achieves has four or five. '
    + 'The approach builds controlled speed '
    + 'and must be a consistent number of strides '
    + 'so that the last stride lands on the board; '
    + 'that consistency is the whole difficulty of the event, '
    + 'and it is why athletes measure and mark their run up. '
    + 'The take off converts horizontal speed '
    + 'into some vertical lift, '
    + 'driving the free knee up, '
    + 'from the board and not beyond it. '
    + 'The flight holds a position '
    + 'to keep the legs forward for the landing '
    + 'and to stop rotation. '
    + 'The landing reaches the feet forward '
    + 'and then collapses the body forward past them, '
    + 'because the measurement is taken '
    + 'from the nearest mark in the sand, '
    + 'so sitting back loses distance that was already achieved. '
    + 'That last point is the one worth knowing: '
    + 'a poor landing shortens a good jump, '
    + 'and understanding why follows from the rule '
    + 'rather than from coaching advice. '
    + 'The shot put teaches the same lesson. '
    + 'The rule is that the shot is pushed and not thrown, '
    + 'with the elbow behind the shot throughout. '
    + 'That is not an arbitrary restriction. '
    + 'It is a safety rule: '
    + 'a thrown shot could be released in any direction, '
    + 'and a pushed one travels where the body is facing. '
    + 'And a candidate who knows '
    + 'that the elbow must stay behind the shot '
    + 'can also explain the commonest foul in the event, '
    + 'which is letting the elbow drop and slinging the shot. '
    + 'Three further rules carry marks '
    + 'and each has a reason: '
    + 'the thrower must stay in the circle until the shot lands, '
    + 'which prevents a run up that would make the circle pointless; '
    + 'they must leave from the back half, '
    + 'which keeps them behind the landing area; '
    + 'and the shot must land in the sector, '
    + 'which keeps spectators and officials safe. '
    + 'So every rule in a throwing event '
    + 'is either about fairness or about safety, '
    + 'and saying which is a good way to answer '
    + 'a question about why the rule exists. '
    + 'The sprint start is the third thing examined closely. '
    + 'The three commands matter: '
    + 'on your marks, which places the hands and feet; '
    + 'set, which raises the hips and loads the legs; '
    + 'and the gun. '
    + 'Moving after set and before the gun is a false start. '
    + 'The reason for the crouch '
    + 'is that it allows the body to drive forward at a low angle, '
    + 'and force applied backwards at a low angle '
    + 'produces forward acceleration more effectively '
    + 'than standing upright allows. '
    + 'So the sprinter leaves low and rises over the first strides, '
    + 'and a candidate who stands up immediately '
    + 'has thrown away the advantage of the start. '
    + 'Now the honest part about facilities, '
    + 'which this topic needs more than any other. '
    + 'Starting blocks, a tartan track, '
    + 'a measured sand pit, a proper shot '
    + 'and high jump mats '
    + 'will not be in most Ghanaian school stores. '
    + 'What can be done safely is a good deal. '
    + 'A level patch of ground marked with a tape '
    + 'serves for sprints, with a crouch start from the ground; '
    + 'the technique of the start is the same without blocks. '
    + 'A dug and loosened patch of earth '
    + 'serves as a jumping pit for the long jump, '
    + 'and the take off line can be a board or a marked line. '
    + 'Relay changeovers need only a baton, or a stick, '
    + 'and two marked lines, '
    + 'and the takeover zone rule can be practised exactly. '
    + 'The shot put can be practised '
    + 'for the standing throw position and the push action '
    + 'with a heavy stone of similar mass, '
    + 'provided the sector is clear and nobody stands in it. '
    + 'What should not be improvised is the high jump landing. '
    + 'Jumping onto bare ground, or onto a thin mat, '
    + 'risks a neck or back injury, '
    + 'and a school without proper landing equipment '
    + 'should teach the approach and the take off '
    + 'and not the full jump. '
    + 'Saying that plainly is part of knowing the subject, '
    + 'and the examinable content for high jump, '
    + 'which is the phases and the rules, '
    + 'can be learned without performing it. '
    + 'What has to be written down, for any event, '
    + 'is the phases named in order '
    + 'and the rule that would make an attempt a foul.',

  recap:
    'You have run races and jumped at a school sports day. '
    + 'This gives the technique in named phases '
    + 'and the rules that decide whether an attempt counts.',

  method: [
    'Say whether the event is track, field or combined.',
    'For a race, give the start and the lane rule.',
    'For a jump or throw, give the phases in order.',
    'Say what each phase achieves.',
    'State the rule whose breach is a foul.',
    'Say whether the rule exists for fairness or for safety.',
    'Name the equipment, and what can be safely improvised.',
    'Do not attempt a high jump without proper landing equipment.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the four phases of the long jump '
        + 'and say what each achieves.',
      steps: [
        'Approach, take off, flight, landing.',
      ],
      answer: 'The approach builds controlled speed '
        + 'over a consistent number of strides '
        + 'so the last stride lands on the board. '
        + 'The take off converts some of that horizontal speed '
        + 'into lift, with the free knee driven up. '
        + 'The flight holds a position '
        + 'that keeps the legs forward and prevents rotation. '
        + 'The landing reaches the feet forward '
        + 'and then carries the body past them, '
        + 'since the measurement is to the nearest mark in the sand.',
    },
    {
      level: 4,
      ask: 'Why does a poor landing shorten a good long jump?',
      steps: [
        'The measurement is to the nearest mark.',
        'Sitting back puts a mark behind the feet.',
      ],
      answer: 'Because the jump is measured from the take off board '
        + 'to the nearest mark made in the sand. '
        + 'If the jumper reaches the feet forward '
        + 'and then sits back, '
        + 'the hands or the seat make a mark behind the feet, '
        + 'and that nearer mark is the one measured. '
        + 'So distance already achieved in the air is lost. '
        + 'The remedy is to carry the body forward past the feet '
        + 'on landing, '
        + 'and the reason follows from the rule '
        + 'rather than from coaching preference.',
    },
    {
      level: 4,
      ask: 'State three rules of the shot put '
        + 'and say whether each is for fairness or for safety.',
      steps: [
        'Pushed not thrown; stay in the circle; land in the sector.',
      ],
      answer: 'The shot must be pushed from the shoulder '
        + 'with the elbow behind it, not thrown: '
        + 'this is safety, '
        + 'because a thrown shot could be released in any direction '
        + 'while a pushed one goes where the body faces. '
        + 'The thrower must remain in the circle until the shot lands '
        + 'and must then leave from the back half: '
        + 'fairness for the first part, '
        + 'since a run up would make the circle pointless, '
        + 'and safety for the second, '
        + 'since it keeps the thrower behind the landing area. '
        + 'The shot must land within the marked sector: '
        + 'safety, since it keeps officials and spectators clear.',
    },
    {
      level: 5,
      ask: 'A school has no high jump mats. '
        + 'What can and cannot be taught, and why?',
      steps: [
        'Landing from height onto hard ground risks serious injury.',
        'The approach and take off can be practised.',
        'The phases and rules are examinable and can be learned on '
          + 'paper.',
      ],
      answer: 'The full jump should not be attempted. '
        + 'Landing from height onto bare ground or a thin mat '
        + 'risks a neck or back injury, '
        + 'which is a different order of risk '
        + 'from the ordinary bruises of sport. '
        + 'What can safely be taught is the curved approach, '
        + 'the take off from one foot, '
        + 'and the drive of the free leg, '
        + 'practised without clearing a bar at height. '
        + 'The examinable content, '
        + 'which is the phases, the rule against a two footed take off, '
        + 'and the three failures rule, '
        + 'can be learned and answered without performing the event. '
        + 'A teacher who says so is not lowering standards; '
        + 'improvising a landing area is the one improvisation '
        + 'in this topic that should not be made.',
    },
  ],

  traps: [
    {
      mistake: 'Describing a jump as running and jumping.',
      why: 'The marks are for the named phases '
        + 'and what each achieves.',
    },
    {
      mistake: 'Throwing the shot instead of pushing it.',
      why: 'The elbow must stay behind the shot. '
        + 'Letting it drop is the commonest foul in the event.',
    },
    {
      mistake: 'Standing up immediately out of a sprint start.',
      why: 'The crouch allows a low drive angle. '
        + 'Rising at once throws away the advantage of the start.',
    },
    {
      mistake: 'Improvising a high jump landing area.',
      why: 'Landing from height onto hard ground '
        + 'risks a neck or back injury. '
        + 'Teach the approach and take off only.',
    },
  ],

  extension:
    'The rules of athletics have been changed again and again. '
    + 'Each change removed an advantage that was not athletic. '
    + 'Knowing that makes the rules easier to remember. '
    + 'The false start rule was tightened for a reason. '
    + 'A sprinter could gain a tenth of a second '
    + 'by anticipating the gun and risking a warning. '
    + 'A jump is measured to the nearest mark '
    + 'because measuring to the feet '
    + 'would reward jumpers who fell backwards. '
    + 'The relay takeover zone exists for the same kind of reason. '
    + 'Without it a team would pass wherever suited them, '
    + 'and the distances run would differ. '
    + 'So each rule closes a loophole somebody found. '
    + 'Ask what advantage a rule removes '
    + 'and you can usually rebuild the rule '
    + 'without having memorised it.',

  questions: [
    {
      id: 'ath-1',
      ask: 'The long jump is measured from the board to:',
      kind: 'choice',
      options: [
        'the nearest mark in the sand',
        'the heel marks only',
        'where the jumper stands up',
      ],
      answer: 'the nearest mark in the sand',
      teach: 'That is why sitting back on landing '
        + 'shortens a good jump.',
      level: 4,
    },
    {
      id: 'ath-2',
      ask: 'In the shot put the implement must be:',
      kind: 'choice',
      options: [
        'pushed with the elbow behind it',
        'thrown overarm',
        'swung from below',
      ],
      answer: 'pushed with the elbow behind it',
      teach: 'It is a safety rule: '
        + 'a pushed shot goes where the body faces.',
      level: 3,
    },
    {
      id: 'ath-3',
      ask: 'How many consecutive failures end a high jump attempt?',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Three consecutive failures. '
        + 'Taking off from two feet is also a failure.',
      level: 3,
    },
    {
      id: 'ath-4',
      ask: 'Sprints up to 400 metres are run:',
      kind: 'choice',
      options: [
        'entirely in lanes',
        'in lanes until the first bend',
        'with no lanes',
      ],
      answer: 'entirely in lanes',
      teach: 'The 800 metres starts in lanes and breaks after the first '
        + 'bend. '
        + 'Leaving your lane in a sprint means disqualification.',
      level: 4,
    },
    {
      id: 'ath-5',
      ask: 'The takeover zone in a relay exists so that:',
      kind: 'choice',
      options: [
        'each runner covers the same distance',
        'the baton is not dropped',
        'the runners can rest',
      ],
      answer: 'each runner covers the same distance',
      teach: 'Without it a team would pass wherever suited them '
        + 'and the distances would differ.',
      level: 5,
    },
  ],
})

/* ── nutrition and a balanced diet ─────────────────────────────────────── */

teach({
  topicId: 'nutrition-peh',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A balanced diet supplies carbohydrate, protein, fat, '
      + 'vitamins, minerals, water and fibre '
      + 'in the right proportions for the person. '
      + 'Planning one to a budget means '
      + 'starting from the cheap local source of each nutrient '
      + 'rather than from a list of ideal foods. '
      + 'In Ghana the cheapest protein is usually beans, '
      + 'groundnut, egg or small fish, '
      + 'and that is where a budget plan begins.',
    method: [
      'List the nutrients the diet must supply.',
      'For each, name the cheapest local source.',
      'Build the day around three meals and one snack.',
      'Check that every nutrient appears somewhere in the day.',
      'Price it, and justify each choice by the nutrient it supplies.',
    ],
  },

  idea:
    'A balanced diet supplies all the nutrients the body needs. '
    + 'It supplies them in the right proportions '
    + 'for the age, size and activity of the person. '
    + 'Carbohydrate provides energy. '
    + 'In Ghana it comes from maize, rice, cassava, '
    + 'yam, plantain, millet and bread. '
    + 'Protein builds and repairs tissue. '
    + 'It comes from beans, groundnut, egg, fish, '
    + 'meat, milk and agushie. '
    + 'Fat gives concentrated energy '
    + 'and carries the fat soluble vitamins. '
    + 'It comes from palm oil, groundnut oil, coconut and avocado. '
    + 'Vitamins are needed in small amounts, each for its own job. '
    + 'Vitamin A comes from red palm oil, carrot and dark green leaves. '
    + 'Vitamin C comes from orange, pineapple, mango, pepper and '
    + 'tomato. '
    + 'The B vitamins come from whole grains, beans and liver. '
    + 'Vitamin D comes from sunlight and oily fish. '
    + 'Minerals matter too. '
    + 'Iron comes from dark green leaves, liver and beans. '
    + 'Calcium comes from milk, small whole fish and green leaves. '
    + 'Iodine comes from iodised salt. '
    + 'Water is needed in quantity, '
    + 'and more in heat and with activity. '
    + 'Fibre keeps the gut moving, '
    + 'and comes from vegetables, fruit and whole grains. '
    + 'Energy need rises with activity. '
    + 'So an athlete needs more carbohydrate '
    + 'than a still person of the same size. '
    + 'And a growing adolescent needs more protein '
    + 'per kilogram of body weight than an adult does.',

  mechanism:
    'The question this topic asks is a planning question, '
    + 'and candidates answer it the wrong way round. '
    + 'They begin with an ideal menu '
    + 'and then discover it costs more than the budget. '
    + 'The right order is the reverse: '
    + 'begin with the nutrients that must be supplied, '
    + 'and for each one find the cheapest local source. '
    + 'The plan then comes out affordable by construction, '
    + 'and every item in it has a justification, '
    + 'which is what the examination asks for. '
    + 'Work it through for protein, '
    + 'which is the nutrient a budget makes difficult. '
    + 'Meat is expensive per unit of protein. '
    + 'Beans are cheap. '
    + 'Groundnut is cheap. '
    + 'Egg is moderate. '
    + 'Small whole fish, such as the ones dried and sold by the cup, '
    + 'are cheap and bring calcium with them '
    + 'because the bones are eaten. '
    + 'So a budget plan supplies protein from beans and groundnut '
    + 'with fish or egg where it fits, '
    + 'and it does so because of the price per unit of protein '
    + 'and not because of a preference. '
    + 'A candidate who writes that reasoning has answered the question. '
    + 'A candidate who writes a menu with chicken in it '
    + 'and no reference to the budget has not. '
    + 'The same reasoning runs through the other nutrients. '
    + 'Vitamin A: red palm oil is cheap, '
    + 'in daily use, '
    + 'and one of the best sources available anywhere, '
    + 'so a stew made with it covers vitamin A almost free. '
    + 'Dark green leaves, kontomire among them, '
    + 'supply vitamin A, iron and calcium together '
    + 'and are among the cheapest items in the market. '
    + 'Vitamin C: a seasonal fruit, '
    + 'and in Ghana there is one in season at any time of year, '
    + 'or pepper and tomato in the stew. '
    + 'Iodine: iodised salt, '
    + 'which costs nothing extra '
    + 'and is the measure that eliminated goitre '
    + 'where it was taken up. '
    + 'So a Ghanaian diet built from local staples, '
    + 'a bean or groundnut protein, '
    + 'green leaves, '
    + 'red palm oil '
    + 'and a seasonal fruit '
    + 'is close to balanced at a very low cost, '
    + 'and saying so with the reasons '
    + 'is the strongest form of this answer. '
    + 'Now the specific weaknesses to notice, '
    + 'because the examination asks what is missing from a given diet. '
    + 'The commonest gap in a Ghanaian diet on a tight budget '
    + 'is protein, '
    + 'because the staples are starchy '
    + 'and the protein foods cost more per meal. '
    + 'The second is iron, '
    + 'particularly for adolescent girls, '
    + 'where the requirement is higher. '
    + 'The third is the vitamin A gap '
    + 'in a diet of cassava and plantain with little oil or leaf. '
    + 'And a fourth, '
    + 'which candidates rarely mention and examiners reward, '
    + 'is that a meal can be adequate in nutrients '
    + 'and still fail if it is one large meal a day, '
    + 'because a learner who eats nothing before school '
    + 'cannot concentrate '
    + 'however good the evening meal is. '
    + 'So the distribution across the day is part of the plan. '
    + 'Fourth, the method for answering '
    + 'the plan a day to a budget question. '
    + 'Lay it out as a table in the answer booklet: '
    + 'meal, food, nutrient supplied, cost. '
    + 'Three meals and one snack. '
    + 'Then a line under it checking that every nutrient appears. '
    + 'Then the total against the budget. '
    + 'That structure earns marks for completeness, '
    + 'for justification and for arithmetic, '
    + 'and a prose paragraph cannot show the same thing as clearly. '
    + 'Fifth, a caution about the energy figures. '
    + 'An examination may give energy requirements '
    + 'in kilojoules or kilocalories, '
    + 'and the two differ by a factor of about 4.2. '
    + 'Read which unit the question uses '
    + 'and keep to it, '
    + 'because mixing them gives an answer wrong by four times. '
    + 'What has to be written down, beside every food in a plan, '
    + 'is the nutrient it is there for. '
    + 'A menu without justifications '
    + 'answers a cookery question, not a nutrition one.',

  recap:
    'You know the food groups '
    + 'and that a diet should contain all of them. '
    + 'This asks you to build a day of meals from what is in the '
    + 'market, '
    + 'to a price, and to defend every choice.',

  method: [
    'List the nutrients that must be supplied.',
    'For each, name the cheapest local source.',
    'Lay out three meals and a snack as a table.',
    'For each food, write the nutrient it is there for.',
    'Check that every nutrient appears somewhere in the day.',
    'Spread the food across the day, not into one meal.',
    'Total the cost and compare it with the budget.',
    'Keep to the energy unit the question uses.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the cheapest local source in Ghana '
        + 'of protein, vitamin A, vitamin C and iron.',
      steps: [
        'Price per unit of nutrient, not preference.',
      ],
      answer: 'Protein: beans or groundnut, '
        + 'with small dried fish as an alternative '
        + 'that also brings calcium because the bones are eaten. '
        + 'Vitamin A: red palm oil, '
        + 'which is in daily use and among the best sources anywhere, '
        + 'or dark green leaves such as kontomire. '
        + 'Vitamin C: a seasonal fruit such as orange or mango, '
        + 'or pepper and tomato in the stew. '
        + 'Iron: dark green leaves, beans or liver.',
    },
    {
      level: 4,
      ask: 'Why should a budget meal plan start from the nutrients '
        + 'rather than from a menu?',
      steps: [
        'Starting from a menu produces something unaffordable.',
        'Starting from nutrients finds the cheapest source of each.',
        'Then every item has a justification.',
      ],
      answer: 'Because starting from a menu produces a plan '
        + 'that then has to be cut to fit the budget, '
        + 'and the cuts remove nutrients unpredictably. '
        + 'Starting from the list of nutrients '
        + 'and finding the cheapest local source of each '
        + 'produces a plan that is affordable by construction. '
        + 'It also means every item in the plan '
        + 'has a reason attached, '
        + 'which is what the question asks for '
        + 'when it says justify your plan.',
    },
    {
      level: 4,
      ask: 'Plan a day of meals for a learner on a small budget, '
        + 'and justify each choice.',
      steps: [
        'Three meals and a snack.',
        'Each food paired with the nutrient it supplies.',
        'Check every nutrient appears.',
      ],
      answer: 'Breakfast: koko with groundnut paste and bread. '
        + 'The koko gives carbohydrate, '
        + 'the groundnut protein and fat. '
        + 'Snack: a seasonal fruit, for vitamin C and fibre. '
        + 'Lunch: rice and beans with red palm oil stew '
        + 'and a little fish. '
        + 'Rice for carbohydrate, '
        + 'beans for protein, '
        + 'palm oil for fat and vitamin A, '
        + 'fish for protein and calcium. '
        + 'Supper: banku with kontomire stew. '
        + 'Banku for carbohydrate, '
        + 'kontomire for vitamin A, iron and calcium. '
        + 'Water through the day, '
        + 'and iodised salt in the cooking for iodine. '
        + 'Every nutrient appears, '
        + 'the food is spread over three meals and a snack, '
        + 'and the only items with any real cost '
        + 'are the fish and the fruit.',
    },
    {
      level: 5,
      ask: 'A learner eats cassava and plantain with a little pepper '
        + 'sauce, once a day in the evening. '
        + 'Identify four problems and say what you would change.',
      steps: [
        'Protein is almost absent.',
        'Vitamin A and iron are absent.',
        'One meal a day is poor distribution.',
        'Each change should be cheap.',
      ],
      answer: 'First, protein is almost absent, '
        + 'since cassava and plantain are starchy, '
        + 'which risks poor growth and in a child kwashiorkor. '
        + 'Add beans or groundnut, which are cheap. '
        + 'Second, vitamin A is absent. '
        + 'Cook with red palm oil, '
        + 'which costs little and is one of the best sources. '
        + 'Third, iron is absent, '
        + 'which matters especially for an adolescent girl. '
        + 'Add dark green leaves such as kontomire, '
        + 'which also carry vitamin A and calcium. '
        + 'Fourth, one meal a day in the evening '
        + 'leaves the learner unfed through the school day, '
        + 'so concentration suffers however good that meal is. '
        + 'Spread the same food into a morning meal and an evening one. '
        + 'Each change is affordable, '
        + 'which is the test a plan has to pass.',
    },
  ],

  traps: [
    {
      mistake: 'Starting a budget plan from an ideal menu.',
      why: 'Start from the nutrients and find the cheapest local source '
        + 'of each. '
        + 'The plan is then affordable by construction.',
    },
    {
      mistake: 'Listing foods without the nutrient each supplies.',
      why: 'The justification is the mark. '
        + 'A menu alone answers a cookery question.',
    },
    {
      mistake: 'Ignoring how the food is spread across the day.',
      why: 'A nutritionally adequate single evening meal '
        + 'still leaves a learner unfed through the school day.',
    },
    {
      mistake: 'Mixing kilojoules and kilocalories.',
      why: 'They differ by a factor of about 4.2. '
        + 'Keep to the unit the question uses.',
    },
  ],

  extension:
    'Fortification is the cheapest nutrition policy there is. '
    + 'Ghana has used it. '
    + 'Adding iodine to salt costs almost nothing a packet. '
    + 'It has largely removed goitre '
    + 'where iodised salt is used consistently. '
    + 'Vitamin A is added to cooking oil. '
    + 'Iron and folate are added to flour. '
    + 'The principle is the same in each case. '
    + 'Put the nutrient into something nearly everybody already buys. '
    + 'No change of behaviour is needed at all. '
    + 'So fortification reaches people '
    + 'whom education campaigns do not. '
    + 'And the policy question becomes '
    + 'enforcement at the mill or the factory, '
    + 'rather than persuading households.',

  questions: [
    {
      id: 'nut-1',
      ask: 'The cheapest good source of protein in a Ghanaian market is '
        + 'usually:',
      kind: 'choice',
      options: ['beans', 'beef', 'cheese'],
      answer: 'beans',
      teach: 'Groundnut and small dried fish are also cheap, '
        + 'and the fish brings calcium because the bones are eaten.',
      level: 3,
    },
    {
      id: 'nut-2',
      ask: 'Red palm oil is a particularly good source of:',
      kind: 'choice',
      options: ['vitamin A', 'vitamin C', 'protein'],
      answer: 'vitamin A',
      teach: 'It is in daily use and among the best sources anywhere, '
        + 'so a stew made with it covers vitamin A cheaply.',
      level: 3,
    },
    {
      id: 'nut-3',
      ask: 'A budget meal plan should begin from:',
      kind: 'choice',
      options: [
        'the nutrients needed',
        'a list of favourite dishes',
        'the total money available only',
      ],
      answer: 'the nutrients needed',
      teach: 'Then find the cheapest local source of each, '
        + 'and the plan is affordable by construction.',
      level: 4,
    },
    {
      id: 'nut-4',
      ask: 'Kontomire supplies vitamin A, calcium and:',
      kind: 'choice',
      options: ['iron', 'vitamin D', 'iodine'],
      answer: 'iron',
      teach: 'Dark green leaves carry all three, '
        + 'and they are among the cheapest items in the market.',
      level: 4,
    },
    {
      id: 'nut-5',
      ask: 'A diet adequate in nutrients can still fail if:',
      kind: 'choice',
      options: [
        'it is eaten as one meal a day',
        'it contains palm oil',
        'it is cooked with iodised salt',
      ],
      answer: 'it is eaten as one meal a day',
      teach: 'A learner unfed through the school day '
        + 'cannot concentrate, however good the evening meal is.',
      level: 5,
    },
  ],
})

/* ── personal hygiene and disease prevention ───────────────────────────── */

teach({
  topicId: 'hygiene-disease-peh',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A disease is prevented by blocking the route it travels. '
      + 'So the method is always the same: '
      + 'name the disease, name its route, '
      + 'then choose the measure that blocks that route. '
      + 'Malaria travels by mosquito, '
      + 'so the measures concern mosquitoes. '
      + 'Cholera and typhoid travel by water and food, '
      + 'so the measures concern water and food. '
      + 'Tuberculosis travels through the air.',
    method: [
      'Name the disease and its causative organism.',
      'Name the route of transmission.',
      'Choose measures that block that specific route.',
      'Check that each measure matches the route named.',
      'Add the measures that work whatever the route.',
    ],
  },

  idea:
    'Communicable diseases are caused by organisms '
    + 'and spread by identifiable routes. '
    + 'Malaria is caused by a protozoan, plasmodium, '
    + 'and is spread by the bite of an infected female anopheles '
    + 'mosquito. '
    + 'Cholera is caused by a bacterium '
    + 'and is spread by water or food contaminated with faeces. '
    + 'Typhoid is a bacterial disease spread the same way. '
    + 'Diarrhoeal disease generally follows the faecal and oral route. '
    + 'Tuberculosis is caused by a bacterium '
    + 'and spread through the air in droplets from coughing. '
    + 'Influenza and the common cold travel by droplets too. '
    + 'Hepatitis B and HIV are spread by blood and by sexual contact. '
    + 'Worm infections are spread by contaminated soil, food or water, '
    + 'and hookworm enters through the skin of a bare foot. '
    + 'Bilharzia, or schistosomiasis, '
    + 'is spread by a parasite that develops in freshwater snails '
    + 'and enters through the skin of somebody in the water. '
    + 'Ringworm and scabies spread by direct contact '
    + 'and shared clothing. '
    + 'Personal hygiene measures include washing the hands with soap '
    + 'at the critical times, '
    + 'bathing, '
    + 'keeping the nails short, '
    + 'brushing the teeth, '
    + 'washing clothing, '
    + 'and wearing footwear. '
    + 'Environmental measures include safe water, '
    + 'latrines and sanitation, '
    + 'refuse disposal, '
    + 'and drainage to remove standing water. '
    + 'Immunisation protects against several of these diseases, '
    + 'and tuberculosis and typhoid are among them.',

  mechanism:
    'The method in this topic is one sentence long '
    + 'and it answers every question in it: '
    + 'block the route. '
    + 'A measure that does not touch the route '
    + 'does not prevent the disease, '
    + 'however hygienic it is in general. '
    + 'This is the point the examination tests, '
    + 'and it tests it by offering a mismatch. '
    + 'Washing your hands is excellent practice '
    + 'and it does not prevent malaria, '
    + 'because malaria arrives by mosquito '
    + 'and not by the hands. '
    + 'Sleeping under a treated net '
    + 'does not prevent cholera, '
    + 'because cholera arrives in water. '
    + 'So a candidate asked for malaria prevention '
    + 'who writes about hand washing '
    + 'has given a true statement about hygiene '
    + 'and a wrong answer to the question. '
    + 'The discipline is: '
    + 'name the route first, in writing, '
    + 'and then let the measures follow from it. '
    + 'Work through malaria to see what that produces. '
    + 'The route is the bite of an infected mosquito, '
    + 'so there are three places to intervene. '
    + 'Stop the bite: '
    + 'sleep under an insecticide treated net, '
    + 'use repellent, '
    + 'wear long sleeves in the evening, '
    + 'screen windows. '
    + 'Reduce the mosquitoes: '
    + 'drain standing water, '
    + 'clear gutters, '
    + 'empty containers, tyres and tins that hold water, '
    + 'since the mosquito breeds in still water. '
    + 'And treat the human reservoir: '
    + 'prompt diagnosis and full treatment of cases, '
    + 'so there is less parasite for a mosquito to pick up. '
    + 'Three categories, each derived from the route, '
    + 'and that structure is worth more marks '
    + 'than a longer undifferentiated list. '
    + 'Now cholera, by the same method. '
    + 'The route is faecal and oral: '
    + 'faeces reach the mouth through water or food. '
    + 'So the interventions are at each step of that path. '
    + 'Contain the faeces: latrines, '
    + 'and an end to open defecation. '
    + 'Protect the water: '
    + 'a protected source, '
    + 'treatment or boiling, '
    + 'safe storage in a covered container with a tap '
    + 'rather than a cup dipped into it. '
    + 'Protect the food: '
    + 'wash it, cook it, cover it against flies. '
    + 'And break the hand link: '
    + 'wash hands with soap after using the toilet '
    + 'and before handling food. '
    + 'Here hand washing is exactly right, '
    + 'because here the hands are on the route. '
    + 'The contrast with malaria is the lesson. '
    + 'Third, the diseases that need a less obvious measure, '
    + 'because they are where the better marks are. '
    + 'Hookworm enters through the skin of the foot, '
    + 'so the specific measure is wearing shoes, '
    + 'and that is not an answer a candidate reaches '
    + 'without thinking about the route. '
    + 'Bilharzia is picked up from fresh water '
    + 'where the snail host lives, '
    + 'so the measure is avoiding bathing or wading '
    + 'in infested water, '
    + 'and in Ghana that matters at the Volta and in irrigation '
    + 'channels. '
    + 'Tuberculosis travels in the air, '
    + 'so the measures are ventilation, '
    + 'covering a cough, '
    + 'not crowding a sleeping room, '
    + 'and immunisation, '
    + 'and no amount of water treatment touches it. '
    + 'Fourth, the measures that work regardless of route, '
    + 'which belong at the end of an answer and not at the start. '
    + 'Immunisation. '
    + 'Good nutrition, '
    + 'because a well nourished person resists infection better. '
    + 'Prompt treatment, '
    + 'which shortens the time a person is infectious. '
    + 'And health education, '
    + 'which is what makes the other measures happen. '
    + 'These are legitimate and they are general, '
    + 'so they earn marks after the route specific measures '
    + 'and not instead of them. '
    + 'Fifth, the point about open defecation, '
    + 'which is a live public health issue in Ghana '
    + 'and should be stated plainly. '
    + 'Where there is no latrine '
    + 'the faecal and oral route is open, '
    + 'and every measure downstream of it, '
    + 'including water treatment, '
    + 'is working against a continuing supply of contamination. '
    + 'So sanitation is the measure with the largest effect, '
    + 'and it is also the one that costs most '
    + 'and requires a decision beyond the individual, '
    + 'which is why it appears in a question '
    + 'about what a community rather than a person should do. '
    + 'What has to be written down, for every disease, '
    + 'is the route, named, '
    + 'and then each measure with the step of the route it blocks.',

  recap:
    'You know to wash your hands and to sleep under a net. '
    + 'This says which disease each of those prevents, '
    + 'and why a measure that misses the route does nothing.',

  method: [
    'Name the disease and its causative organism.',
    'Name the route of transmission, in writing.',
    'Break the route into steps.',
    'Give a measure for each step.',
    'Check that every measure touches the route you named.',
    'Add general measures last: immunisation, nutrition, '
      + 'prompt treatment, education.',
    'For a community question, include sanitation and water supply.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the causative organism and the route of transmission '
        + 'for malaria, cholera and tuberculosis.',
      steps: [
        'Organism and route for each.',
      ],
      answer: 'Malaria is caused by the protozoan plasmodium '
        + 'and spread by the bite of an infected female anopheles '
        + 'mosquito. '
        + 'Cholera is caused by a bacterium '
        + 'and spread by water or food contaminated with faeces. '
        + 'Tuberculosis is caused by a bacterium '
        + 'and spread through the air in droplets from coughing.',
    },
    {
      level: 4,
      ask: 'Why does hand washing not prevent malaria, '
        + 'although it is good hygiene?',
      steps: [
        'A measure must block the route.',
        'Malaria arrives by mosquito bite.',
        'The hands are not on that route.',
      ],
      answer: 'Because a measure prevents a disease '
        + 'only by blocking the route the disease travels, '
        + 'and malaria travels by the bite of a mosquito. '
        + 'The hands are not on that route at any point, '
        + 'so washing them, however good a practice, '
        + 'does nothing about malaria. '
        + 'For cholera the hands are on the route, '
        + 'because faeces reach the mouth partly by the hands, '
        + 'and there hand washing is exactly the right measure. '
        + 'The contrast is the point of the topic.',
    },
    {
      level: 4,
      ask: 'Give malaria prevention measures in three groups, '
        + 'each derived from the route.',
      steps: [
        'Stop the bite; reduce the mosquitoes; treat the cases.',
      ],
      answer: 'Stop the bite: '
        + 'sleep under an insecticide treated net, '
        + 'use repellent, '
        + 'wear long sleeves in the evening, '
        + 'screen windows. '
        + 'Reduce the mosquito population: '
        + 'drain standing water, clear gutters, '
        + 'empty tins, tyres and containers that hold water, '
        + 'since the mosquito breeds in still water. '
        + 'Treat the human reservoir: '
        + 'diagnose and fully treat cases promptly, '
        + 'so there is less parasite for a mosquito to take up. '
        + 'The three groups come from the three points '
        + 'at which the route can be broken.',
    },
    {
      level: 5,
      ask: 'A village has a treated water supply '
        + 'and still has repeated outbreaks of diarrhoeal disease. '
        + 'Suggest why, and what would help most.',
      steps: [
        'Treating water does not close the whole route.',
        'Faeces may still be reaching food and hands.',
        'Storage after collection may recontaminate.',
        'Sanitation is the measure with the largest effect.',
      ],
      answer: 'Because treating the water closes only one step '
        + 'of the faecal and oral route. '
        + 'If there is open defecation, '
        + 'faeces continue to reach food through flies and hands '
        + 'and to reach water at the point of use. '
        + 'Water that is safe at the standpipe '
        + 'may also be recontaminated in storage, '
        + 'if it is kept in an open container '
        + 'into which a cup is dipped. '
        + 'The measures that would help most '
        + 'are latrines and an end to open defecation, '
        + 'which closes the route at its source, '
        + 'safe storage in a covered container with a tap, '
        + 'and hand washing with soap '
        + 'after the toilet and before handling food. '
        + 'Sanitation has the largest effect '
        + 'and is also the most expensive '
        + 'and requires a community decision rather than an individual '
        + 'one.',
    },
  ],

  traps: [
    {
      mistake: 'Offering hand washing as a malaria measure.',
      why: 'Malaria travels by mosquito bite. '
        + 'A measure must touch the route the disease actually travels.',
    },
    {
      mistake: 'Giving a long undifferentiated list of measures.',
      why: 'Group them by the step of the route they block. '
        + 'The structure earns more than the length.',
    },
    {
      mistake: 'Putting general measures first.',
      why: 'Immunisation, nutrition and education are legitimate '
        + 'and belong after the route specific measures, '
        + 'not instead of them.',
    },
    {
      mistake: 'Treating a safe water supply as the whole answer '
        + 'to diarrhoeal disease.',
      why: 'It closes one step. '
        + 'Open defecation, unsafe storage and unwashed hands '
        + 'keep the route open.',
    },
  ],

  extension:
    'The route also decides who has to act. '
    + 'That is why some diseases are harder to control than others. '
    + 'Sleeping under a net is an individual decision. '
    + 'A household can make it alone. '
    + 'Draining the gutters of a neighbourhood is not. '
    + 'One household draining its own yard achieves little '
    + 'while the next yard breeds mosquitoes. '
    + 'Building latrines for a village '
    + 'is beyond any one household. '
    + 'So the measures sort into three kinds: '
    + 'individual, household and community action. '
    + 'A question may ask why a disease persists '
    + 'when the measures are known. '
    + 'The answer is often this. '
    + 'The effective measure needs collective action, '
    + 'and nobody has organised it.',

  questions: [
    {
      id: 'hy-1',
      ask: 'Malaria is spread by:',
      kind: 'choice',
      options: [
        'the bite of an infected mosquito',
        'contaminated water',
        'droplets in the air',
      ],
      answer: 'the bite of an infected mosquito',
      teach: 'So the measures must concern mosquitoes and bites, '
        + 'not water or hands.',
      level: 2,
    },
    {
      id: 'hy-2',
      ask: 'Cholera travels by which route?',
      kind: 'choice',
      options: ['faecal and oral', 'airborne', 'through the skin'],
      answer: 'faecal and oral',
      teach: 'Faeces reach the mouth through water, food or hands, '
        + 'so each of those steps can be blocked.',
      level: 3,
    },
    {
      id: 'hy-3',
      ask: 'Wearing shoes is the specific measure against:',
      kind: 'choice',
      options: ['hookworm', 'cholera', 'tuberculosis'],
      answer: 'hookworm',
      teach: 'It enters through the skin of a bare foot, '
        + 'so footwear blocks the route.',
      level: 4,
    },
    {
      id: 'hy-4',
      ask: 'Bilharzia is picked up from:',
      kind: 'choice',
      options: [
        'fresh water where the snail host lives',
        'the air',
        'uncooked meat',
      ],
      answer: 'fresh water where the snail host lives',
      teach: 'So the measure is avoiding bathing or wading '
        + 'in infested water.',
      level: 4,
    },
    {
      id: 'hy-5',
      ask: 'A measure prevents a disease only if it:',
      kind: 'choice',
      options: [
        'blocks the route the disease travels',
        'is hygienic in general',
        'is cheap',
      ],
      answer: 'blocks the route the disease travels',
      teach: 'That is why hand washing stops cholera and not malaria. '
        + 'Name the route first, then choose the measures.',
      level: 5,
    },
  ],
})
