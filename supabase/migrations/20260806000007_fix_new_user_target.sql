-- ============================================================================
-- Corrective migration.
--
-- edu_handle_new_user() was written before the edu_ namespacing and still
-- pointed at public.profiles, which belongs to another application sharing
-- this database and carries a NOT NULL user_id column this function never
-- supplies. Every attempt to create an auth user therefore failed with
--
--   null value in column "user_id" of relation "profiles"
--
-- and, worse, a successful insert would have written NEXA*EDU rows into
-- another product's table. Repointing it at edu_profiles.
-- ============================================================================

create or replace function edu_handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if coalesce(new.is_anonymous, false) then
    return new;
  end if;

  insert into public.edu_profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  )
  on conflict (id) do nothing;
  return new;
end;
$$;
