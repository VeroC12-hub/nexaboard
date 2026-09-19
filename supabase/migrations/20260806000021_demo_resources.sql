-- ============================================================================
-- DEMO CONTENT — NOT OFFICIAL CURRICULUM
--
-- Resources for the [DEMO] curriculum only, so §5 can be exercised against the
-- existing edu_content_items model without inventing a second one.
--
-- Deliberately varied so every state in the requirement is reachable:
--   VIDEO     has a lite_uri, to prove the low-bandwidth path is real
--   TEXTBOOK  downloadable with a true size, for the download affordance
--   HANDOUT   has NO uri at all, so "we cannot show you this yet" is testable
--             rather than asserted
--   PAST_PAPER not downloadable, to prove is_downloadable is honoured
--   DRAFT     unapproved, so the learner-side approval gate is testable
--
-- Removed with everything else by:
--   delete from edu_curricula where code = 'DEMO_NAVIGATOR';
-- ============================================================================

do $$
declare
  v_cur uuid;
  v_obj record;
  v_id  uuid;
begin
  select id into v_cur from edu_curricula where code = 'DEMO_NAVIGATOR';
  if v_cur is null then return; end if;

  for v_obj in
    select o.id, o.full_code
    from edu_learning_objectives o
    where o.curriculum_id = v_cur
      and o.full_code like '%.1'
  loop
    -- video, with a low-bandwidth alternative
    if not exists (select 1 from edu_content_items
                   where curriculum_id = v_cur and title = '[DEMO] Video · ' || v_obj.full_code) then
      insert into edu_content_items (curriculum_id, title, kind, author, language, uri,
                                     size_bytes, duration_seconds, lite_uri, lite_size_bytes,
                                     difficulty, origin, approval, is_downloadable)
      values (v_cur, '[DEMO] Video · ' || v_obj.full_code, 'VIDEO',
              'Demonstration, not official', 'en',
              'demo://video/' || v_obj.full_code,
              24117248, 840,
              'demo://audio/' || v_obj.full_code, 3145728,
              'CORE', 'AUTHORED', 'APPROVED', true)
      returning id into v_id;
      insert into edu_content_objectives (content_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- textbook chapter, downloadable
    if not exists (select 1 from edu_content_items
                   where curriculum_id = v_cur and title = '[DEMO] Reading · ' || v_obj.full_code) then
      insert into edu_content_items (curriculum_id, title, kind, author, publisher, language, uri,
                                     size_bytes, page_count, difficulty, origin, approval, is_downloadable)
      values (v_cur, '[DEMO] Reading · ' || v_obj.full_code, 'TEXTBOOK',
              'Demonstration, not official', 'Demonstration publisher', 'en',
              'demo://doc/' || v_obj.full_code,
              6291456, 18, 'CORE', 'AUTHORED', 'APPROVED', true)
      returning id into v_id;
      insert into edu_content_objectives (content_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- approved, but no file attached: the honest "not available yet" case
    if not exists (select 1 from edu_content_items
                   where curriculum_id = v_cur and title = '[DEMO] Handout with no file · ' || v_obj.full_code) then
      insert into edu_content_items (curriculum_id, title, kind, author, language, uri,
                                     origin, approval, is_downloadable)
      values (v_cur, '[DEMO] Handout with no file · ' || v_obj.full_code, 'HANDOUT',
              'Demonstration, not official', 'en', null, 'AUTHORED', 'APPROVED', false)
      returning id into v_id;
      insert into edu_content_objectives (content_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- viewable but not downloadable
    if not exists (select 1 from edu_content_items
                   where curriculum_id = v_cur and title = '[DEMO] Past paper · ' || v_obj.full_code) then
      insert into edu_content_items (curriculum_id, title, kind, author, language, uri,
                                     size_bytes, page_count, origin, approval, is_downloadable)
      values (v_cur, '[DEMO] Past paper · ' || v_obj.full_code, 'PAST_PAPER',
              'Demonstration, not official', 'en', 'demo://doc/paper/' || v_obj.full_code,
              2097152, 12, 'AUTHORED', 'APPROVED', false)
      returning id into v_id;
      insert into edu_content_objectives (content_id, objective_id) values (v_id, v_obj.id);
    end if;

    -- unapproved: must never reach a learner
    if not exists (select 1 from edu_content_items
                   where curriculum_id = v_cur and title = '[DEMO] Unapproved resource · ' || v_obj.full_code) then
      insert into edu_content_items (curriculum_id, title, kind, author, language, uri,
                                     size_bytes, origin, approval, is_downloadable)
      values (v_cur, '[DEMO] Unapproved resource · ' || v_obj.full_code, 'VIDEO',
              'Demonstration, not official', 'en', 'demo://video/draft', 1048576,
              'AUTHORED', 'DRAFT', true)
      returning id into v_id;
      insert into edu_content_objectives (content_id, objective_id) values (v_id, v_obj.id);
    end if;
  end loop;
end
$$;
