/**
 * Stored lessons for Basic 2 Science.
 *
 * Basic 1 asked whether a thing is living. Basic 2 goes inside one living
 * thing and asks what each part is for, then does the same for the child's own
 * body, then moves to forces, which is the first topic here that can be tested
 * by pushing something across a desk.
 *
 * Every lesson below can be done with what is in the room or the yard. That is
 * deliberate: a science lesson a child only reads is a reading lesson.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── parts of a plant ─────────────────────────────────────────────────────── */

teach({
  topicId: 'plant-parts',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Roots drink and hold the plant down. The stem holds it up. '
      + 'Leaves make the food. Flowers make the seed.',
    method: [
      'Start below the ground: those are the roots.',
      'Follow the stem up.',
      'Find the leaves, then the flower and fruit.',
    ],
  },

  idea:
    'A plant has roots, a stem, leaves, and often flowers and fruit. Each part '
    + 'has a job. The roots hold it down and drink. The stem holds it up and '
    + 'carries the water. The leaves make the food. The flower makes the seed, '
    + 'and the fruit carries the seed away.',

  mechanism:
    'A plant cannot walk to water. '
    + 'So it grows roots down to the water instead. '
    + 'A plant cannot carry its food about. '
    + 'So it makes food where the light falls, in the leaves. '
    + 'Every part solves one problem the plant has. '
    + 'So ask what problem a part solves. '
    + 'That works better than learning a list.',

  recap:
    'Living things grow, need water and food, and make young ones. A plant '
    + 'does all three, which is why it is living even though it does not move '
    + 'about.',

  method: [
    'Start at the bottom. What is under the ground? Roots.',
    'Follow it up. The long part holding everything is the stem.',
    'Find the flat green parts. Those are the leaves.',
    'Look for a flower, and for fruit where a flower has been.',
    'For each part, ask what the plant would lose without it.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Which part of the plant is under the ground?',
      steps: [
        'Look at where the plant meets the soil.',
        'Everything below that line is the root.',
      ],
      answer: 'The roots.',
    },
    {
      level: 2,
      ask: 'A plant is left in a dark room for two weeks. What happens, and why?',
      steps: [
        'The leaves make the plant food, and they need light to do it.',
        'With no light the leaves cannot make food.',
        'The plant still uses food, so it uses up what it has.',
      ],
      answer: 'It goes pale and weak, because its food is made in the leaves '
        + 'and that needs light.',
    },
    {
      level: 3,
      ask: 'Why does a plant pulled out of the ground die even if you water it?',
      steps: [
        'The roots do two jobs: hold the plant and take in water.',
        'Pulling it out tears the fine roots that do the drinking.',
        'Water poured on it cannot get in without them.',
      ],
      answer: 'Because the drinking is done by the roots, and those are what '
        + 'get torn. Water outside the plant is no use to it.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the roots make the food.',
      why: 'The roots drink. The leaves make the food, which is why they are '
        + 'spread out flat where the light falls.',
    },
    {
      mistake: 'Thinking the flower is only for beauty.',
      why: 'The flower is where the seed is made. The fruit grows round the '
        + 'seed afterwards, which is why fruit appears where a flower was.',
    },
    {
      mistake: 'Counting only the parts you can see.',
      why: 'Most of a plant can be underground. The root is often as big as '
        + 'everything above it.',
    },
  ],

  extension:
    'Some plants keep a store of food. You can eat it. '
    + 'Cassava keeps its store in the root. '
    + 'Yam keeps its store in a stem under the ground. '
    + 'Cabbage keeps its store in the leaves. '
    + 'When you eat a plant, you are usually eating its store.',

  figure: {
    alt: 'A plant drawn with roots below the soil line and stem, leaves, '
      + 'flower and fruit above it, each part labelled with the job it does',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<path d="M40 280h560" stroke="currentColor" stroke-width="2" opacity="0.5"/>'
      + '<text x="52" y="300" font-size="14" fill="currentColor" opacity="0.7">soil</text>'
      + '<g fill="none" stroke="currentColor" stroke-width="3">'
      /* stem */
      + '<path d="M300 280V96"/>'
      /* leaves */
      + '<path d="M300 200 C 250 186, 216 196, 206 216 C 240 234, 280 224, 300 200"/>'
      + '<path d="M300 162 C 350 148, 384 158, 394 178 C 360 196, 320 186, 300 162"/>'
      /* flower */
      + '<circle cx="300" cy="84" r="16"/>'
      + '<circle cx="272" cy="70" r="14"/><circle cx="328" cy="70" r="14"/>'
      + '<circle cx="286" cy="48" r="14"/><circle cx="314" cy="48" r="14"/>'
      /* fruit */
      + '<circle cx="356" cy="124" r="20"/>'
      + '<path d="M356 104 V 96"/>'
      /* roots */
      + '<path d="M300 280 C 284 310, 262 324, 240 344"/>'
      + '<path d="M300 280 C 316 310, 338 324, 360 344"/>'
      + '<path d="M300 280 V 356"/>'
      + '<path d="M276 304 C 262 320, 256 332, 252 348"/>'
      + '<path d="M324 304 C 338 320, 344 332, 348 348"/>'
      + '</g>'
      /* labels */
      + '<g font-size="16" fill="#0f8a4d">'
      + '<text x="420" y="54">flower</text>'
      + '<text x="420" y="130">fruit</text>'
      + '<text x="420" y="182">leaf</text>'
      + '<text x="420" y="252">stem</text>'
      + '<text x="420" y="348">root</text>'
      + '</g>'
      + '<g font-size="14" fill="currentColor">'
      + '<text x="420" y="74">makes the seed</text>'
      + '<text x="420" y="150">carries the seed away</text>'
      + '<text x="420" y="202">makes the food, in the light</text>'
      + '<text x="420" y="272">holds it up, carries water</text>'
      + '<text x="420" y="368">holds it down, drinks</text>'
      + '</g>'
      + '<g stroke="#0f8a4d" stroke-width="1.5" opacity="0.8">'
      + '<path d="M332 60h82"/><path d="M378 124h36"/><path d="M398 178h16"/>'
      + '<path d="M304 248h110"/><path d="M308 342h106"/>'
      + '</g>'
      + '</svg>',
  },

  questions: [
    {
      id: 'pp-1',
      ask: 'Which part of a plant makes its food?',
      kind: 'choice',
      options: ['The roots', 'The leaves', 'The flower'],
      answer: 'The leaves',
      teach: 'The leaves, and they need light to do it, which is why they are '
        + 'flat and spread out. The roots drink and the flower makes seed.',
      level: 1,
    },
    {
      id: 'pp-2',
      ask: 'Which part would you look at to find out how a plant drinks?',
      kind: 'choice',
      options: ['The roots', 'The fruit', 'The flower'],
      answer: 'The roots',
      teach: 'The roots take in water from the soil and the stem carries it '
        + 'up. A plant cannot walk to water, so it grows to it.',
      level: 2,
    },
    {
      id: 'pp-3',
      ask: 'A plant in a dark cupboard goes pale and weak. Which part has '
        + 'stopped doing its job?',
      kind: 'choice',
      options: ['The roots', 'The leaves', 'The stem'],
      answer: 'The leaves',
      teach: 'The leaves make food and need light. In the dark they cannot, so '
        + 'the plant lives on its store until that runs low.',
      level: 3,
    },
  ],
})

/* ── the sense organs ─────────────────────────────────────────────────────── */

teach({
  topicId: 'sense-organs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Eyes see, ears hear, nose smells, tongue tastes, skin feels. '
      + 'Each one catches a different thing.',
    method: [
      'Ask what kind of thing you are noticing.',
      'Match it to the organ that catches it.',
      'If one cannot help, use another.',
    ],
  },

  idea:
    'You find out about the world through five parts of your body. Eyes to '
    + 'see, ears to hear, nose to smell, tongue to taste, skin to feel. Those '
    + 'are the sense organs, and everything you know about what is around you '
    + 'came in through one of them.',

  mechanism:
    'Each organ catches one kind of thing. Only one. '
    + 'The eye catches light. '
    + 'So in the dark the eye tells you nothing. '
    + 'You can stare as hard as you like. '
    + 'The ear catches sound, and sound is not light. '
    + 'So the ear still works in the dark. '
    + 'That is why you have five and not one. '
    + 'Each one covers what the others miss.',

  recap:
    'Your body has parts that each do a job, the way a plant does. The sense '
    + 'organs are the parts whose job is finding things out.',

  method: [
    'Ask what kind of thing you are trying to notice.',
    'Light or colour or shape means the eyes.',
    'Sound means the ears. Smell means the nose.',
    'Taste means the tongue. Hot, cold, rough or smooth means the skin.',
    'If one organ cannot help, ask which other one can. In the dark, listen.',
    'Protect each one. They do not grow back.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Which sense organ do you use to know that food is hot?',
      steps: [
        'Hot is something you feel, not something you see.',
        'Feeling happens in the skin, including the skin of your mouth.',
      ],
      answer: 'The skin.',
    },
    {
      level: 2,
      ask: 'The lights go out. How do you still know somebody has come into '
        + 'the room?',
      steps: [
        'The eyes need light, and there is none, so they cannot help.',
        'The ears do not need light at all.',
        'You hear footsteps or breathing.',
      ],
      answer: 'By hearing. The ears work in the dark because sound is not '
        + 'light.',
    },
    {
      level: 3,
      ask: 'When you have a heavy cold, food tastes of almost nothing. Why?',
      steps: [
        'Taste and smell usually work together on food.',
        'A cold blocks the nose, so the smell part is missing.',
        'The tongue still works, so you get some taste but not the whole of it.',
      ],
      answer: 'Because much of what we call taste is really smell, and the '
        + 'blocked nose has taken that part away.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the mouth is the sense organ for taste.',
      why: 'The tongue is the organ. The mouth is the room it sits in.',
    },
    {
      mistake: 'Thinking each sense works on its own.',
      why: 'They work together. Smell and taste share the work on food, which '
        + 'is why a blocked nose dulls your dinner.',
    },
    {
      mistake: 'Putting things in your ear to clean it.',
      why: 'The thin part inside tears easily and does not heal back the same. '
        + 'Clean only the outside, with a cloth.',
    },
  ],

  extension:
    'Some people cannot use one of their senses. '
    + 'They often get very good with the rest. '
    + 'Some read by touch, with raised dots. '
    + 'The senses they have left do more of the work. '
    + 'That shows how much each one was carrying all along.',

  figure: {
    alt: 'A table of the five sense organs, what each one senses, and one way '
      + 'to protect each of them',
    svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.35">'
      + '<path d="M30 40h580M30 92h580M30 148h580M30 204h580M30 260h580M30 316h580M30 360h580"/>'
      + '<path d="M30 40v320M180 40v320M360 40v320M610 40v320"/>'
      + '</g>'
      + '<g font-size="16" font-weight="700" fill="#0f8a4d">'
      + '<text x="44" y="72">Organ</text><text x="194" y="72">Senses</text>'
      + '<text x="374" y="72">Look after it by</text>'
      + '</g>'
      + '<g font-size="16" fill="currentColor">'
      + '<text x="44" y="128">Eyes</text><text x="194" y="128">light, colour, shape</text>'
      + '<text x="374" y="128">reading in good light</text>'
      + '<text x="44" y="184">Ears</text><text x="194" y="184">sound</text>'
      + '<text x="374" y="184">putting nothing inside them</text>'
      + '<text x="44" y="240">Nose</text><text x="194" y="240">smell</text>'
      + '<text x="374" y="240">keeping smoke away from it</text>'
      + '<text x="44" y="296">Tongue</text><text x="194" y="296">taste</text>'
      + '<text x="374" y="296">letting hot food cool</text>'
      + '<text x="44" y="348">Skin</text><text x="194" y="348">hot, cold, rough, smooth</text>'
      + '<text x="374" y="348">washing, and covering cuts</text>'
      + '</g>'
      + '</svg>',
  },

  questions: [
    {
      id: 'so-1',
      ask: 'Which organ do you hear with?',
      kind: 'choice',
      options: ['The nose', 'The ears', 'The skin'],
      answer: 'The ears',
      teach: 'The ears catch sound. Each organ catches one kind of thing and '
        + 'nothing else, which is why you need all five.',
      level: 1,
    },
    {
      id: 'so-2',
      ask: 'Which sense still works when the room is completely dark?',
      kind: 'choice',
      options: ['Sight', 'Hearing', 'Neither'],
      answer: 'Hearing',
      teach: 'The eye catches light and there is none, so it tells you '
        + 'nothing. Sound is not light, so the ears carry on as normal.',
      level: 2,
    },
    {
      id: 'so-3',
      ask: 'Food tastes of nothing when your nose is blocked. What does that '
        + 'tell you?',
      kind: 'choice',
      options: [
        'The tongue has stopped working',
        'Smell does part of the work of tasting',
        'The food has gone bad',
      ],
      answer: 'Smell does part of the work of tasting',
      teach: 'The tongue is fine. Much of what we call taste comes through the '
        + 'nose, so blocking it removes part of the picture.',
      level: 3,
    },
  ],
})

/* ── pushes and pulls ─────────────────────────────────────────────────────── */

teach({
  topicId: 'push-and-pull',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A push or pull can start something, stop it, or turn it. '
      + 'Towards you is a pull, away is a push.',
    method: [
      'Find what moved.',
      'Ask which way: towards you or away.',
      'Ask which job it did: start, stop or turn.',
    ],
  },

  idea:
    'A push or a pull is what makes things move, stop or change direction. You '
    + 'push a door to open it and pull it to close it. Nothing starts moving by '
    + 'itself, and nothing moving stops by itself either. Something pushed or '
    + 'pulled it.',

  mechanism:
    'Here is the important part. '
    + 'A push does three jobs, not one. '
    + 'It can start a thing that was still. '
    + 'It can stop a thing that was moving. '
    + 'It can turn a thing that was going one way. '
    + 'So a goalkeeper catching a ball and a child kicking one '
    + 'are doing the same kind of thing. '
    + 'Both are pushes. Only the job is different.',

  recap:
    'Moving means changing where you are. A thing can move fast or slowly, and '
    + 'it can move in a straight line or round a bend.',

  method: [
    'Find the thing that moved.',
    'Ask what touched it just before it moved.',
    'Decide the direction: towards you is a pull, away from you is a push.',
    'Ask which job it did: start, stop, or change direction.',
    'Try it again harder and watch what changes. A bigger push does more.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You open a drawer. Is that a push or a pull?',
      steps: [
        'The drawer comes towards you.',
        'Towards you is a pull.',
      ],
      answer: 'A pull. Closing it again is a push.',
    },
    {
      level: 2,
      ask: 'A ball rolls towards you and you catch it. What has your push done?',
      steps: [
        'The ball was moving before you touched it.',
        'After you touched it, it was not moving.',
      ],
      answer: 'It stopped something that was moving. That is one of the three '
        + 'jobs a push can do.',
    },
    {
      level: 3,
      ask: 'A football comes at you from the left and you head it to the '
        + 'right. Did you start it, stop it, or change it?',
      steps: [
        'It was already moving, so you did not start it.',
        'It is still moving afterwards, so you did not stop it.',
        'It is going a different way than before.',
      ],
      answer: 'You changed its direction. The ball never stopped, it turned.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a push can only start something moving.',
      why: 'It can also stop it or turn it. Catching a ball is a push just as '
        + 'much as kicking it.',
    },
    {
      mistake: 'Saying a rolling ball stops on its own.',
      why: 'The ground rubs against it and that rubbing is a push against the '
        + 'way it is going. On smooth ice it would roll much further.',
    },
    {
      mistake: 'Mixing up push and pull by looking at the thing instead of the '
        + 'direction.',
      why: 'The same door takes both. Ask which way the thing moved compared '
        + 'to you: towards you is a pull.',
    },
  ],

  extension:
    'A bigger push makes a bigger change. '
    + 'And the same push moves a light thing further than a heavy one. '
    + 'Push an empty box. It slides across the floor. '
    + 'Push a full one the same way. It hardly moves. '
    + 'Try it with two boxes and the same shove.',

  figure: {
    alt: 'Three pictures of a ball: a push starting it moving, a hand stopping '
      + 'it, and a push turning it sideways, each labelled with the job the '
      + 'push did',
    svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* start */
      + '<circle cx="80" cy="110" r="26" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<path d="M118 110h66" stroke="#0f8a4d" stroke-width="3.5" fill="none"/>'
      + '<path d="M184 110 l -13 -8 v 16 z" fill="#0f8a4d"/>'
      + '<text x="130" y="178" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">start</text>'
      + '<text x="130" y="204" text-anchor="middle" font-size="15" fill="#0f8a4d">it was still</text>'
      /* stop */
      + '<circle cx="290" cy="110" r="26" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<path d="M236 110h-40" stroke="currentColor" stroke-width="2" opacity="0.4" fill="none"/>'
      + '<path d="M332 72v76" stroke="#0f8a4d" stroke-width="5" fill="none"/>'
      + '<text x="300" y="178" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">stop</text>'
      + '<text x="300" y="204" text-anchor="middle" font-size="15" fill="#0f8a4d">it was moving</text>'
      /* turn */
      + '<circle cx="470" cy="110" r="26" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<path d="M412 110h30" stroke="currentColor" stroke-width="2" opacity="0.4" fill="none"/>'
      + '<path d="M498 100 C 530 94, 548 72, 552 46" stroke="#0f8a4d" stroke-width="3.5" fill="none"/>'
      + '<path d="M552 46 l -10 11 l 14 3 z" fill="#0f8a4d"/>'
      + '<text x="500" y="178" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">turn</text>'
      + '<text x="500" y="204" text-anchor="middle" font-size="15" fill="#0f8a4d">it changes direction</text>'
      + '<text x="320" y="262" text-anchor="middle" font-size="17" fill="currentColor">'
      + 'One kind of thing, three different jobs.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'pf-1',
      ask: 'You pull a drawer towards you. Which is it?',
      kind: 'choice',
      options: ['A push', 'A pull'],
      answer: 'A pull',
      teach: 'Towards you is a pull, away from you is a push. The same drawer '
        + 'takes both, so judge by the direction and not by the thing.',
      level: 1,
    },
    {
      id: 'pf-2',
      ask: 'You catch a moving ball. What job did your push do?',
      kind: 'choice',
      options: ['Started it', 'Stopped it', 'Nothing, you only held it'],
      answer: 'Stopped it',
      teach: 'It was moving and then it was not, so your hands pushed against '
        + 'it. Stopping is as much a push as kicking is.',
      level: 2,
    },
    {
      id: 'pf-3',
      ask: 'Why does a rolling ball slow down and stop on a rough floor?',
      kind: 'choice',
      options: [
        'Balls stop on their own',
        'The floor rubs against it and pushes back',
        'It runs out of air',
      ],
      answer: 'The floor rubs against it and pushes back',
      teach: 'Nothing moving stops by itself. The rubbing between ball and '
        + 'floor pushes against the way it is going, which is why it rolls '
        + 'much further on something smooth.',
      level: 3,
    },
  ],
})
