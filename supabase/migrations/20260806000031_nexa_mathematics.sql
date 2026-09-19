-- ============================================================================
-- NEXA EDU AUTHORED INSTRUCTIONAL CONTENT — Core Mathematics
--
-- Provenance: NEXA_CORE, authority "Nexa EDU". Standard secondary algebra
-- written for this platform. Not GES or NaCCA material; no official curriculum
-- document was used as its source; GES_SBC is untouched.
--
-- Mathematics is taught here, not merely tested. Each lesson explains the idea,
-- works an example line by line with the reason for each line, and only then
-- asks the learner to try one. The feedback names the specific error rather
-- than marking the answer wrong.
-- ============================================================================

do $$
declare
  v_cur uuid; v_subject uuid; v_off uuid; v_class uuid;
  v_strand uuid; v_sub uuid; v_topic uuid;
  v_o uuid; v_prev uuid; v_l uuid; v_q uuid;
begin
  select id into v_cur from edu_curricula where code = 'NEXA_CORE' and version = '1.0';
  select id into v_subject from edu_subjects where name = 'Core Mathematics';
  if v_cur is null or v_subject is null then return; end if;

  insert into edu_subject_offerings (curriculum_id, subject_id, level_code, is_core)
  values (v_cur, v_subject, 'SHS_2', true)
  on conflict (curriculum_id, subject_id, level_code) do nothing;
  select id into v_off from edu_subject_offerings
   where curriculum_id = v_cur and subject_id = v_subject and level_code = 'SHS_2';

  select c.id into v_class from edu_classes c where c.level_code = 'SHS_2' limit 1;
  if v_class is not null then
    update edu_class_subjects cs set offering_id = v_off
     where cs.class_id = v_class
       and exists (select 1 from edu_subject_offerings o
                    where o.id = cs.offering_id and o.subject_id = v_subject);
  end if;

  insert into edu_strands (offering_id, code, name, sort_order)
  values (v_off, '1', 'Algebra', 1) on conflict (offering_id, code) do nothing;
  select id into v_strand from edu_strands where offering_id = v_off and code = '1';

  insert into edu_sub_strands (strand_id, code, name, sort_order)
  values (v_strand, '1', 'Quadratic Equations', 1) on conflict (strand_id, code) do nothing;
  select id into v_sub from edu_sub_strands where strand_id = v_strand and code = '1';

  insert into edu_topics (sub_strand_id, code, name, expected_period, sort_order)
  values (v_sub, '1', 'Solving Quadratic Equations', 3, 1)
  on conflict (sub_strand_id, code) do nothing;
  select id into v_topic from edu_topics where sub_strand_id = v_sub and code = '1';

  -- ======================================================= 1. factorisation
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_topic, v_cur, 'MATH 1.1',
    'Solve quadratic equations by factorisation.',
    'Factorise a quadratic expression and use it to find both roots.',
    'APPLY', 3, 1)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'MATH 1.1';
  v_prev := v_o;

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_topic, v_cur, 'Solving by factorisation',
    'If two numbers multiply to give zero, one of them must be zero. That single fact is what makes factorising a quadratic useful.',
    1, 15, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to factorise a quadratic of the form x squared + bx + c, and use the factors to find both solutions.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'Why factorising solves the equation',
   'A quadratic equation is one where the highest power of the unknown is 2, for example x squared + 5x + 6 = 0.'
   || E'\n\nThe whole method rests on one idea, the **zero product property**: if A times B = 0, then either A = 0 or B = 0. Nothing else can make a product zero.'
   || E'\n\nSo if we can rewrite the left-hand side as two brackets multiplied together, we can set each bracket to zero in turn and read off the answers.'
   || E'\n\nTo factorise x squared + bx + c, look for **two numbers that multiply to give c and add to give b**. In x squared + 5x + 6, we need two numbers multiplying to 6 and adding to 5. The pairs multiplying to 6 are 1 and 6, and 2 and 3. Since 2 + 3 = 5, the numbers are 2 and 3.'
   || E'\n\nThat gives (x + 2)(x + 3) = 0.'
   || E'\n\nWatch the signs. If c is positive and b is negative, both numbers are negative. If c is negative, one number is positive and the other negative.',
   '{}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'Solve x squared + 5x + 6 = 0.'
   || E'\n\n**Step 1. Identify b and c.** Here b = 5 and c = 6.'
   || E'\n\n**Step 2. Find two numbers that multiply to 6 and add to 5.** They are 2 and 3, because 2 times 3 = 6 and 2 + 3 = 5.'
   || E'\n\n**Step 3. Write the factors.** x squared + 5x + 6 = (x + 2)(x + 3), so (x + 2)(x + 3) = 0.'
   || E'\n\n**Step 4. Apply the zero product property.** Either x + 2 = 0 or x + 3 = 0.'
   || E'\n\n**Step 5. Solve each bracket.** x + 2 = 0 gives x = -2. x + 3 = 0 gives x = -3.'
   || E'\n\n**Answer.** x = -2 or x = -3.'
   || E'\n\n**Check.** Put x = -2 back in: 4 - 10 + 6 = 0. Correct. Always check at least one root; it catches sign errors immediately.',
   '{}'::jsonb),
  (v_l, 4, 'TRY', 'Now try one',
   'Solve x squared + 7x + 12 = 0 using the same five steps.'
   || E'\n\nWork it on paper before reading on. You need two numbers multiplying to 12 and adding to 7.'
   || E'\n\n**Solution.** The pairs multiplying to 12 are 1 and 12, 2 and 6, and 3 and 4. Since 3 + 4 = 7, the factors are (x + 3)(x + 4) = 0, giving **x = -3 or x = -4**.'
   || E'\n\nIf you got 3 and 4 as your answers rather than -3 and -4, you stopped one step early: the bracket x + 3 = 0 gives x = -3, not +3.',
   '{}'::jsonb),
  (v_l, 5, 'CHECK', 'Check your understanding',
   'Answer the question below. The explanation will show the working.', '{"check":true}'::jsonb),
  (v_l, 6, 'REFLECTION', 'Before you move on',
   'You can now solve a quadratic when it factorises neatly. But not every quadratic does. Next you will meet a method that works even when no whole numbers fit.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Solve x squared + 8x + 15 = 0.',
    '{"options":[{"key":"A","text":"x = 3 or x = 5"},{"key":"B","text":"x = -3 or x = -5"},{"key":"C","text":"x = -3 or x = 5"},{"key":"D","text":"x = 15 or x = 8"}],"answer":"B"}'::jsonb,
    'x = -3 or x = -5. Two numbers multiplying to 15 and adding to 8 are 3 and 5, so the equation factorises to (x + 3)(x + 5) = 0. Setting each bracket to zero gives x = -3 and x = -5. If you chose 3 and 5, remember that x + 3 = 0 means x = -3, not +3.',
    2, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'Which pair of numbers is needed to factorise x squared - 7x + 10?',
    '{"options":[{"key":"A","text":"2 and 5"},{"key":"B","text":"-2 and -5"},{"key":"C","text":"-2 and 5"},{"key":"D","text":"1 and 10"}],"answer":"B"}'::jsonb,
    '-2 and -5. They multiply to +10 and add to -7, which is what the equation needs. The pair 2 and 5 multiplies to 10 but adds to +7, giving the wrong middle term. When c is positive and b is negative, both numbers must be negative.',
    2, 'EXTENSION', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  -- ============================================== 2. the quadratic formula
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_topic, v_cur, 'MATH 1.2',
    'Use the quadratic formula to solve equations that do not factorise.',
    'Substitute correctly into the formula and simplify to find both roots.',
    'APPLY', 3, 2)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'MATH 1.2';
  insert into edu_objective_prerequisites values (v_o, v_prev, 'REQUIRED') on conflict do nothing;
  v_prev := v_o;

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_topic, v_cur, 'The quadratic formula',
    'Most quadratics do not factorise with whole numbers. The formula solves every one of them, provided you substitute carefully.',
    2, 15, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to write any quadratic in the form ax squared + bx + c = 0, substitute into the formula, and simplify to two roots.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'A formula that always works',
   'Try to factorise x squared + 3x + 1 = 0 and you will not find two whole numbers multiplying to 1 and adding to 3. The equation still has solutions; they are simply not whole numbers.'
   || E'\n\nFor any equation written as ax squared + bx + c = 0:'
   || E'\n\n**x = ( -b plus or minus the square root of (b squared - 4ac) ) divided by 2a**'
   || E'\n\nThree habits prevent almost every mistake with it.'
   || E'\n\n**Write the equation in standard form first.** Everything must be on one side, equal to zero, before you read off a, b and c.'
   || E'\n\n**Carry the signs.** In x squared - 3x + 2, b is -3, not 3. Substituting -b then gives +3.'
   || E'\n\n**Work out b squared - 4ac on its own first.** This part is called the **discriminant**. If it is positive there are two roots; if zero, one repeated root; if negative, no real roots. Computing it first tells you what to expect.',
   '{}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'Solve 2x squared - 5x + 2 = 0, giving exact answers.'
   || E'\n\n**Step 1. Read off a, b and c.** The equation is already in standard form: a = 2, b = -5, c = 2.'
   || E'\n\n**Step 2. Work out the discriminant.** b squared - 4ac = (-5) squared - 4 times 2 times 2 = 25 - 16 = 9. It is positive, so expect two roots. It is also a perfect square, so the answers will be exact fractions.'
   || E'\n\n**Step 3. Substitute.** x = ( 5 plus or minus the square root of 9 ) divided by (2 times 2) = (5 plus or minus 3) divided by 4. Note that -b = -(-5) = +5.'
   || E'\n\n**Step 4. Split the plus or minus.** x = (5 + 3) / 4 = 8/4 = 2, or x = (5 - 3) / 4 = 2/4 = one half.'
   || E'\n\n**Answer.** x = 2 or x = 0.5.'
   || E'\n\n**Check.** Substituting x = 2: 2 times 4 - 5 times 2 + 2 = 8 - 10 + 2 = 0. Correct.',
   '{}'::jsonb),
  (v_l, 4, 'TRY', 'Now try one',
   'Solve x squared - 4x + 3 = 0 using the formula, even though it also factorises. Using both methods on the same equation is a good way to check you are substituting correctly.'
   || E'\n\n**Solution.** a = 1, b = -4, c = 3. The discriminant is 16 - 12 = 4. So x = (4 plus or minus 2) / 2, giving x = 3 or x = 1.'
   || E'\n\nFactorising gives (x - 3)(x - 1) = 0 and the same two roots, which confirms the substitution was right.',
   '{}'::jsonb),
  (v_l, 5, 'CHECK', 'Check your understanding',
   'Answer the question below.', '{"check":true}'::jsonb),
  (v_l, 6, 'REFLECTION', 'Before you move on',
   'You can now solve any quadratic. Next you will use that skill on problems that arrive as words rather than as an equation.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'For 3x squared + 2x - 8 = 0, what is the value of the discriminant b squared - 4ac?',
    '{"options":[{"key":"A","text":"4"},{"key":"B","text":"100"},{"key":"C","text":"-92"},{"key":"D","text":"28"}],"answer":"B"}'::jsonb,
    '100. Here a = 3, b = 2 and c = -8, so b squared - 4ac = 4 - 4 times 3 times (-8) = 4 + 96 = 100. The common error is to miss that c is negative: subtracting a negative gives addition. A discriminant of 100 is positive and a perfect square, so there are two rational roots.',
    2, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'A quadratic equation has discriminant equal to zero. What does this tell you?',
    '{"options":[{"key":"A","text":"There are two different real roots"},{"key":"B","text":"There is one repeated real root"},{"key":"C","text":"There are no real roots"},{"key":"D","text":"The equation is not quadratic"}],"answer":"B"}'::jsonb,
    'One repeated real root. The plus or minus in the formula acts on the square root of the discriminant; if that is zero, adding and subtracting it give the same answer. A positive discriminant gives two different roots, and a negative one gives no real roots.',
    2, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  -- ==================================================== 3. word problems
  insert into edu_learning_objectives
    (topic_id, curriculum_id, full_code, text, competency, bloom_level, expected_period, sort_order)
  values (v_topic, v_cur, 'MATH 1.3',
    'Form and solve a quadratic equation from a word problem, and reject roots that make no sense.',
    'Translate a described situation into a quadratic and interpret the roots in context.',
    'ANALYSE', 3, 3)
  on conflict (curriculum_id, full_code) do nothing;
  select id into v_o from edu_learning_objectives where curriculum_id = v_cur and full_code = 'MATH 1.3';
  insert into edu_objective_prerequisites values (v_o, v_prev, 'REQUIRED') on conflict do nothing;

  insert into edu_lessons (topic_id, curriculum_id, title, summary, sequence, duration_minutes, origin, approval)
  values (v_topic, v_cur, 'Quadratics from word problems',
    'Examination questions rarely hand you an equation. They describe a situation and expect you to build one, solve it, and then decide which answer is sensible.',
    3, 15, 'AUTHORED', 'APPROVED') returning id into v_l;
  insert into edu_lesson_objectives values (v_l, v_o) on conflict do nothing;

  insert into edu_lesson_steps (lesson_id, sequence, kind, title, body, payload) values
  (v_l, 1, 'IDEA', 'What you will learn',
   'By the end of this lesson you will be able to turn a described situation into a quadratic equation, solve it, and say which of the two roots actually answers the question.',
   '{}'::jsonb),
  (v_l, 2, 'IDEA', 'From words to an equation, and back again',
   'The work happens in four stages, and the last one is the one most learners forget.'
   || E'\n\n**Name the unknown.** Write down exactly what x stands for, including its units. "Let x be the width of the garden in metres" is useful; "let x be the width" is not.'
   || E'\n\n**Build the equation.** Translate each fact into algebra. "The length is 3 m more than the width" becomes length = x + 3. "The area is 40 square metres" becomes x(x + 3) = 40.'
   || E'\n\n**Rearrange and solve.** Expand and bring everything to one side: x squared + 3x - 40 = 0. Then factorise or use the formula.'
   || E'\n\n**Interpret the roots.** A quadratic gives two answers, but a real situation often allows only one. A width cannot be negative. A number of people cannot be a fraction. Say clearly which root you reject and why; examiners award marks for it.',
   '{}'::jsonb),
  (v_l, 3, 'WORKED_EXAMPLE', 'Worked example',
   'A rectangular garden is 3 metres longer than it is wide. Its area is 40 square metres. Find its width.'
   || E'\n\n**Step 1. Name the unknown.** Let x be the width in metres. Then the length is x + 3.'
   || E'\n\n**Step 2. Build the equation.** Area = length times width, so x(x + 3) = 40.'
   || E'\n\n**Step 3. Rearrange.** Expanding gives x squared + 3x = 40, so x squared + 3x - 40 = 0.'
   || E'\n\n**Step 4. Solve.** Two numbers multiplying to -40 and adding to 3 are 8 and -5. So (x + 8)(x - 5) = 0, giving x = -8 or x = 5.'
   || E'\n\n**Step 5. Interpret.** A width cannot be negative, so x = -8 is rejected.'
   || E'\n\n**Answer.** The width is 5 metres, and the length is 8 metres. Checking: 5 times 8 = 40 square metres, as required.',
   '{}'::jsonb),
  (v_l, 4, 'TRY', 'Now try one',
   'The product of two consecutive positive whole numbers is 56. Find the numbers.'
   || E'\n\n**Solution.** Let x be the smaller number, so the next is x + 1. Then x(x + 1) = 56, which rearranges to x squared + x - 56 = 0. Two numbers multiplying to -56 and adding to 1 are 8 and -7, so (x + 8)(x - 7) = 0 and x = -8 or x = 7.'
   || E'\n\nThe question says positive, so x = -8 is rejected. The numbers are **7 and 8**, and 7 times 8 = 56 confirms it.',
   '{}'::jsonb),
  (v_l, 5, 'CHECK', 'Check your understanding',
   'Answer the question below.', '{"check":true}'::jsonb),
  (v_l, 6, 'REFLECTION', 'You have finished this topic',
   'You can now solve quadratics by factorising, by formula, and from a description in words. The habit of checking whether a root makes sense in context will earn you marks in every examination you sit.',
   '{}'::jsonb);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'MULTIPLE_CHOICE',
    'A rectangle is 2 cm longer than it is wide and has area 24 square cm. Solving gives x = 4 or x = -6, where x is the width. What is the width?',
    '{"options":[{"key":"A","text":"4 cm, because a width cannot be negative"},{"key":"B","text":"-6 cm, because it is the larger value"},{"key":"C","text":"Both 4 cm and -6 cm are valid"},{"key":"D","text":"24 cm, from the area"}],"answer":"A"}'::jsonb,
    '4 cm. Both roots satisfy the equation, but only one fits the situation: a physical width cannot be negative, so -6 is rejected. Stating that you reject it, and why, is part of a complete answer. The length is then 6 cm, and 4 times 6 = 24 square cm as required.',
    2, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);

  insert into edu_questions (curriculum_id, kind, stem, payload, explanation, marks, difficulty, auto_markable, origin, approval)
  values (v_cur, 'SHORT_ANSWER',
    'The product of two consecutive positive whole numbers is 30. What is the smaller number?',
    '{"accepted":["5","five"],"placeholder":"A number"}'::jsonb,
    '5. Let x be the smaller number, so x(x + 1) = 30, which gives x squared + x - 30 = 0 and factorises to (x + 6)(x - 5) = 0. The roots are -6 and 5, and since the question says positive, the answer is 5. The numbers are 5 and 6.',
    2, 'CORE', true, 'AUTHORED', 'APPROVED') returning id into v_q;
  insert into edu_question_objectives values (v_q, v_o);
end
$$;
