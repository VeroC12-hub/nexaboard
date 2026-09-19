-- ============================================================================
-- edu_guard_profile_privileges refused every migration and service-role write.
--
-- The guard exists to stop a signed-in teacher promoting themselves. But it
-- keyed entirely off auth.uid(), which is null when the statement is not
-- coming from an authenticated client: migrations, service-role calls, trusted
-- server processes. Those hit the final raise and the table became impossible
-- to administer, including by the seed that assigns roles in the first place.
--
-- Allowing a null uid is safe. RLS runs first and there is no policy granting
-- anon or an unauthenticated caller update on edu_profiles, so the only
-- callers that reach this trigger with a null uid are ones that already bypass
-- RLS by virtue of being privileged.
-- ============================================================================

create or replace function edu_guard_profile_privileges()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  scope_changed boolean := (
       new.role        is distinct from old.role
    or new.school_id   is distinct from old.school_id
    or new.circuit_id  is distinct from old.circuit_id
    or new.district_id is distinct from old.district_id
    or new.region_id   is distinct from old.region_id
  );
begin
  if not scope_changed then
    return new;
  end if;

  -- Not an authenticated client: migration, service role, trusted process.
  if auth.uid() is null then
    return new;
  end if;

  if edu_is_national() then
    return new;
  end if;

  -- Self-promotion is never allowed, whatever your role.
  if new.id = auth.uid() then
    raise exception 'cannot change your own role or scope'
      using errcode = '42501';
  end if;

  if edu_can_manage_school(old.school_id)
     and new.role in ('student','teacher','head_teacher','school_admin')
     and new.school_id = old.school_id
     and new.circuit_id  is null
     and new.district_id is null
     and new.region_id   is null
  then
    return new;
  end if;

  raise exception 'insufficient privilege to change role or scope'
    using errcode = '42501';
end;
$$;
