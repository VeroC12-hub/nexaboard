/**
 * JHS 2 Mathematics, written to be taught from with no curriculum loaded.
 *
 * This is the model source course: what a learner meets on a platform that has
 * just been installed and has nothing in its database. Every explanation gives
 * the reason a rule works rather than the rule alone, because a reason is what
 * survives into the next topic and a rule is what gets forgotten over the
 * holidays.
 *
 * Nothing here names an indicator code, an examination or a mark weighting.
 * Those are claims about a specific national document, and until that document
 * is loaded the platform has not read it. See `capability.ts`.
 */

import type { Course } from '../course'

export const MATHS_JHS2: Course = {
  id: 'model-maths-jhs2',
  subject: 'Mathematics',
  level: 'JHS 2',
  source: 'MODEL',
  note: 'A standard outline for this subject, until your school adds its own.',
  objectives: [
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lin-eq',
      title: 'Solving linear equations',
      outcome: 'Find the unknown in an equation, and know why each move is allowed.',
      explain: [
        'An equation is a claim that two things are equal. When you write 3x + 4 = 19, you are saying that whatever 3x + 4 comes to, it is the same amount as 19. Solving it means finding the value of x that makes the claim true.',
        'Everything you are allowed to do follows from that one idea. If two amounts are truly equal, and you take 4 away from both of them, they are still equal. If you halve both, still equal. What you must never do is change one side without changing the other, because the moment you do, you are no longer talking about the same claim, and the answer you reach belongs to a different equation.',
        'That is the whole reason behind "do the same to both sides". It is not a rule somebody invented to make the work harder. It is the only way to keep the statement true while you tidy it up.',
        'The tidying has an order, and the order is simply the reverse of how the expression was built. In 3x + 4, x was multiplied by 3 first, then 4 was added. To undo it you take the 4 away first, then divide by 3. Think of it as unwrapping a parcel: the last thing wrapped is the first thing off.',
        'When the unknown appears on both sides, as in 5x - 2 = 3x + 8, nothing changes except that you first gather the x terms onto one side. Take 3x from both sides and you are left with 2x - 2 = 8, which is the kind of equation you already know how to finish.',
      ],
      worked: [
        {
          ask: 'Solve 3x + 4 = 19',
          steps: [
            'The 4 was added last, so undo it first. Take 4 from both sides: 3x = 15.',
            'Now x is multiplied by 3, so divide both sides by 3: x = 5.',
            'Check by putting it back: 3 times 5 is 15, plus 4 is 19. The claim holds.',
          ],
          answer: 'x = 5',
        },
        {
          ask: 'Solve 5x - 2 = 3x + 8',
          steps: [
            'Gather the unknowns. Take 3x from both sides: 2x - 2 = 8.',
            'Undo the subtraction. Add 2 to both sides: 2x = 10.',
            'Divide both sides by 2: x = 5.',
            'Check: the left gives 25 - 2 = 23, the right gives 15 + 8 = 23. Equal, so it is right.',
          ],
          answer: 'x = 5',
        },
      ],
      pitfall: 'Doing something to one side only. If you take 4 from the left, it must come off the right as well, or the equation you finish with is not the one you were asked about.',
      questions: [
        { id: 'lin-1', level: 1, kind: 'numeric', ask: 'Solve x + 7 = 12', answer: '5',
          teach: 'The 7 is added to x, so undo it by taking 7 from both sides. That leaves x = 5. If you answered 19 you added instead of subtracting: adding is what the equation already did, and your job is to undo it.' },
        { id: 'lin-2', level: 1, kind: 'numeric', ask: 'Solve 4x = 20', answer: '5',
          teach: 'x is multiplied by 4, so divide both sides by 4 to undo it, giving x = 5. If you answered 80 you multiplied: the equation multiplied already, you have to reverse it.' },
        { id: 'lin-3', level: 2, kind: 'numeric', ask: 'Solve 2x + 5 = 17', answer: '6',
          teach: 'Unwrap in reverse order. The 5 was added last so take it off both sides first: 2x = 12. Then divide by 2: x = 6. A common wrong answer is 11, which comes from dividing only the 12 by 2 after halving nothing else, or from taking 5 from 17 and stopping.' },
        { id: 'lin-4', level: 2, kind: 'numeric', ask: 'Solve 3x - 7 = 14', answer: '7',
          teach: 'Add 7 to both sides to undo the subtraction: 3x = 21. Then divide by 3: x = 7. If you got 2.33 you divided 7 by 3 somewhere, which happens when the subtraction is undone after the division instead of before.' },
        { id: 'lin-5', level: 3, kind: 'numeric', ask: 'Solve 5x - 2 = 3x + 8', answer: '5',
          teach: 'Take 3x from both sides first so the unknown is only in one place: 2x - 2 = 8. Add 2: 2x = 10. Divide by 2: x = 5. The usual slip is taking 3x from the right only, which breaks the equality straight away.' },
        { id: 'lin-6', level: 4, kind: 'numeric', ask: 'Solve 2(x + 3) = 16', answer: '5',
          teach: 'Either divide both sides by 2 first, giving x + 3 = 8 and so x = 5, or expand the bracket to 2x + 6 = 16 and work as usual. Both are correct because both keep the two sides equal. The mistake to avoid is multiplying only the x by 2 and leaving the 3 alone: the bracket says the whole of x + 3 is doubled.' },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'ratio',
      title: 'Ratio and proportion',
      outcome: 'Share an amount in a given ratio, and scale quantities up or down correctly.',
      explain: [
        'A ratio tells you how something is divided, not how much of it there is. If two people share money in the ratio 3 : 2, that tells you the first gets three parts for every two the second gets. It says nothing at all about whether the total is twenty cedis or twenty thousand.',
        'That is why almost every ratio question is solved the same way: find out what one part is worth. Add the numbers in the ratio to get the total number of parts, divide the amount by that, and you have the value of a single part. Everything else is then multiplication.',
        'It is worth seeing why adding the ratio numbers is legitimate. Three parts and two parts is five parts in total, and those five parts are the whole amount, because the sharing used all of it. So the whole divided by five is one part. Learners who memorise "add the ratio" without this often add when the question is about a difference rather than a total, and go wrong.',
        'Proportion is the same idea seen from the other direction. If four exercise books cost 20 cedis, the cost per book is fixed, so twelve books cost three times as much, because twelve is three times four. You do not need a formula for this. You need to notice what stayed the same, which here is the price of one book.',
        'Watch for the questions where the ratio describes a difference. "Ama has 12 more than Kofi, and they share in the ratio 5 : 3" is not solved by dividing by 8. The difference is 5 - 3 = 2 parts, and it is that difference which equals 12, so one part is 6.',
      ],
      worked: [
        {
          ask: 'Share 200 cedis between Ama and Kofi in the ratio 3 : 2.',
          steps: [
            'Total parts: 3 + 2 = 5.',
            'One part: 200 divided by 5 = 40 cedis.',
            'Ama gets 3 parts: 3 times 40 = 120 cedis.',
            'Kofi gets 2 parts: 2 times 40 = 80 cedis.',
            'Check they add back to the original: 120 + 80 = 200.',
          ],
          answer: 'Ama 120 cedis, Kofi 80 cedis',
        },
        {
          ask: 'If 4 books cost 20 cedis, what do 12 books cost?',
          steps: [
            'Find what stayed the same, which is the price of one book: 20 divided by 4 = 5 cedis.',
            'Twelve books at 5 cedis each: 12 times 5 = 60 cedis.',
          ],
          answer: '60 cedis',
        },
      ],
      pitfall: 'Dividing by one of the ratio numbers instead of by their total. Sharing 200 in the ratio 3 : 2 is not 200 divided by 3.',
      questions: [
        { id: 'rat-1', level: 1, kind: 'numeric', ask: 'Share 100 cedis in the ratio 1 : 1. How much does each get?', answer: '50',
          teach: 'The parts total 1 + 1 = 2, so one part is 100 divided by 2 = 50, and each person gets one part. This is the same method you will use on every ratio question, just with easy numbers.' },
        { id: 'rat-2', level: 2, kind: 'numeric', ask: 'Share 200 cedis in the ratio 3 : 2. How much is the larger share?', answer: '120',
          teach: 'Add the parts: 3 + 2 = 5. One part is 200 divided by 5 = 40. The larger share is 3 parts, so 3 times 40 = 120. If you answered 66.7 you divided by 3 instead of by 5: the 3 is how many parts one person gets, not how many parts there are.' },
        { id: 'rat-3', level: 2, kind: 'numeric', ask: 'If 5 pens cost 30 cedis, what do 8 pens cost?', answer: '48',
          teach: 'Find the price of one pen, because that is what does not change: 30 divided by 5 = 6 cedis. Then 8 times 6 = 48 cedis. Going straight from 5 to 8 without finding one first is where most errors come from.' },
        { id: 'rat-4', level: 3, kind: 'numeric', ask: 'Share 350 cedis in the ratio 4 : 3. How much is the smaller share?', answer: '150',
          teach: 'Parts total 4 + 3 = 7, so one part is 350 divided by 7 = 50. The smaller share is 3 parts: 3 times 50 = 150. Check by adding: 200 + 150 = 350, which is the original amount, so the split is right.' },
        { id: 'rat-5', level: 4, kind: 'numeric', ask: 'Ama and Kofi share in the ratio 5 : 3, and Ama gets 12 cedis more than Kofi. How much was shared altogether?', answer: '48',
          teach: 'This one is about a difference, not a total. Ama has 5 parts and Kofi 3, so the difference is 2 parts, and that difference is the 12 cedis. So one part is 6. Altogether there are 5 + 3 = 8 parts, giving 8 times 6 = 48 cedis. Dividing 12 by 8 here is the trap: the 12 is not the total.' },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'pythagoras',
      title: "Pythagoras' theorem",
      outcome: 'Find a missing side of a right angled triangle, and know when you may not use it.',
      explain: [
        'In a right angled triangle, the square on the longest side equals the squares on the other two added together. Written down, that is a squared plus b squared equals c squared, where c is the side opposite the right angle.',
        'The longest side has a name, the hypotenuse, and it is always opposite the right angle. That is not a coincidence you have to remember separately. The right angle is the largest angle in the triangle, and in any triangle the longest side sits opposite the largest angle, so the hypotenuse is forced to be the longest.',
        'That fact is also your check. If you work out a "hypotenuse" that comes out shorter than one of the other sides, you have made an error somewhere, and you can catch it before you write the answer down.',
        'Which way round you work depends on what is missing. If you are looking for the hypotenuse, you add the two squares. If you are looking for one of the shorter sides, you subtract: the square you want is the big square take away the other small one. Adding when you should subtract is the single most common mistake in this topic, and it always produces an answer that is too big.',
        'The theorem only applies when there is a right angle. It is not a general fact about triangles. If the question does not tell you there is a right angle, and you cannot see one marked, you may not use it.',
      ],
      worked: [
        {
          ask: 'A right angled triangle has shorter sides 3 cm and 4 cm. Find the hypotenuse.',
          steps: [
            'The hypotenuse is missing, so add the squares.',
            '3 squared is 9, and 4 squared is 16. Together that is 25.',
            'The hypotenuse squared is 25, so the hypotenuse is the square root of 25, which is 5 cm.',
            'Check: 5 is longer than both 3 and 4, as the hypotenuse must be.',
          ],
          answer: '5 cm',
        },
        {
          ask: 'A right angled triangle has hypotenuse 13 cm and one shorter side 5 cm. Find the other side.',
          steps: [
            'A shorter side is missing, so subtract.',
            '13 squared is 169, and 5 squared is 25.',
            '169 take away 25 is 144, so the missing side is the square root of 144, which is 12 cm.',
            'Check: 12 is shorter than the hypotenuse 13, as it must be.',
          ],
          answer: '12 cm',
        },
      ],
      pitfall: 'Adding when the missing side is a short one. If you are given the hypotenuse, you must subtract, and your answer must come out smaller than it.',
      questions: [
        { id: 'pyt-1', level: 1, kind: 'numeric', ask: 'Shorter sides 3 cm and 4 cm. Find the hypotenuse, in cm.', answer: '5',
          teach: 'Add the squares because the hypotenuse is missing: 9 + 16 = 25, and the square root of 25 is 5. If you answered 7 you added the sides instead of their squares, which is the most frequent slip in this topic.' },
        { id: 'pyt-2', level: 2, kind: 'numeric', ask: 'Shorter sides 6 cm and 8 cm. Find the hypotenuse, in cm.', answer: '10',
          teach: '36 + 64 = 100, and the square root of 100 is 10. Notice this is the 3, 4, 5 triangle with every side doubled, which is why the answer is exactly 10 rather than an awkward decimal.' },
        { id: 'pyt-3', level: 3, kind: 'numeric', ask: 'Hypotenuse 13 cm, one shorter side 5 cm. Find the other side, in cm.', answer: '12',
          teach: 'The missing side is a short one, so subtract: 169 - 25 = 144, and the square root of 144 is 12. If you answered about 13.9 you added the squares. Adding always makes the answer bigger than the hypotenuse, which is impossible.' },
        { id: 'pyt-4', level: 3, kind: 'numeric', ask: 'Hypotenuse 25 cm, one shorter side 7 cm. Find the other side, in cm.', answer: '24',
          teach: '625 - 49 = 576, and the square root of 576 is 24. Check it is shorter than 25, which it is. Any answer larger than the hypotenuse means the subtraction went the wrong way round.' },
        { id: 'pyt-5', level: 4, kind: 'choice', ask: 'A triangle has sides 5 cm, 6 cm and 7 cm. Can you use Pythagoras to find an angle here?',
          options: ['Yes, all triangles obey it', 'No, it needs a right angle', 'Only if it is isosceles'],
          answer: 'No, it needs a right angle',
          teach: 'The theorem is a fact about right angled triangles only. Nothing here says there is a right angle, and 25 + 36 does not equal 49, so there is not one. Using it anyway would give an answer that means nothing.' },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'expand-factorise',
      title: 'Expanding and factorising',
      outcome: 'Multiply out brackets, and put an expression back into brackets.',
      explain: [
        'Expanding a bracket means multiplying everything inside it by what is outside. In 3(x + 2), the 3 multiplies the whole of x + 2, which means both the x and the 2, giving 3x + 6.',
        'The reason it reaches everything is that the bracket is one quantity. If x + 2 is worth 7 altogether, then three of them is 21, and you would get the same by taking three lots of x and three lots of 2 and adding. Multiplying only the first term is the commonest error and it comes from treating the bracket as a list rather than as one amount.',
        'Factorising is the same operation run backwards. You look at the terms and ask what they all have in common, take that out to the front, and write what is left inside the bracket. In 6x + 9, both terms divide by 3, so it becomes 3(2x + 3).',
        'You can always check a factorisation instantly by expanding it again. If it does not return to what you started with, something was left behind. This is worth doing every time, because it costs a few seconds and it catches the usual error of taking out a factor that only one of the terms actually has.',
        'Take out the largest common factor, not just any factor. Writing 6x + 9 as 3(2x + 3) is fully factorised. Writing 12x + 18 as 2(6x + 9) is correct but not finished, because 6x + 9 still has a 3 in common.',
      ],
      worked: [
        {
          ask: 'Expand 3(x + 2)',
          steps: [
            'The 3 multiplies everything in the bracket.',
            '3 times x is 3x, and 3 times 2 is 6.',
            'So the answer is 3x + 6.',
          ],
          answer: '3x + 6',
        },
        {
          ask: 'Factorise 6x + 9',
          steps: [
            'Ask what divides into both terms. 6 and 9 are both divisible by 3.',
            'Take the 3 out to the front, and see what is left: 6x divided by 3 is 2x, and 9 divided by 3 is 3.',
            'So it is 3(2x + 3).',
            'Check by expanding: 3 times 2x is 6x, 3 times 3 is 9. Back where we started, so it is right.',
          ],
          answer: '3(2x + 3)',
        },
      ],
      pitfall: 'Multiplying only the first term inside the bracket. In 3(x + 2), the 3 reaches the 2 as well, so the answer is 3x + 6 and never 3x + 2.',
      questions: [
        { id: 'exp-1', level: 1, kind: 'numeric', ask: 'Expand 2(x + 5). Write your answer like 2x+10', answer: '2x+10', accept: ['2x + 10'],
          teach: 'The 2 multiplies both terms: 2 times x is 2x, and 2 times 5 is 10, giving 2x + 10. Answering 2x + 5 means the 2 was applied only to the x, but the bracket is one quantity and the multiplier reaches all of it.' },
        { id: 'exp-2', level: 2, kind: 'numeric', ask: 'Expand 4(2x - 3). Write your answer like 8x-12', answer: '8x-12', accept: ['8x - 12'],
          teach: '4 times 2x is 8x, and 4 times -3 is -12, so the answer is 8x - 12. The sign matters: multiplying a negative by a positive stays negative.' },
        { id: 'exp-3', level: 2, kind: 'numeric', ask: 'Factorise 6x + 9. Write your answer like 3(2x+3)', answer: '3(2x+3)', accept: ['3(2x + 3)'],
          teach: 'Both 6 and 9 divide by 3, so 3 comes out to the front, leaving 2x + 3 inside: 3(2x + 3). Expand it again to check and you get 6x + 9, which is where you started.' },
        { id: 'exp-4', level: 3, kind: 'numeric', ask: 'Factorise 12x + 18 completely. Write your answer like 6(2x+3)', answer: '6(2x+3)', accept: ['6(2x + 3)'],
          teach: 'The largest number dividing both 12 and 18 is 6, giving 6(2x + 3). Answering 2(6x + 9) is not wrong arithmetic, but it is not finished: 6x + 9 still has a common factor of 3 waiting to come out.' },
        { id: 'exp-5', level: 4, kind: 'choice', ask: 'Which of these is 3(x + 2) equal to?',
          options: ['3x + 2', '3x + 6', 'x + 6'],
          answer: '3x + 6',
          teach: 'The 3 multiplies the whole bracket, so both the x and the 2 are tripled: 3x + 6. The answer 3x + 2 comes from multiplying only the first term, which is the error this topic is really testing for.' },
      ],
    },
  ],
}

/** Every course the platform can teach with nothing loaded. */
export const MODEL_COURSES: Course[] = [MATHS_JHS2]
