/**
 * Accounts, and getting back into one.
 *
 * Three kinds of account, because three different people arrive here and only
 * two of them have an email address.
 *
 *   learner   signs in with a name and a password, and is their own account
 *   parent    signs in with an email and a password, and holds their children
 *   school    signs in with an email and a password, and holds its students
 *
 * A learner is deliberately not asked for an email. Most basic school pupils in
 * Ghana do not have one, and phone verification costs money per message on a
 * product that is meant to be free. A name and a password they choose is enough
 * to come back to their own work.
 *
 * A learner record is never owned by the account that created it. A parent adds
 * a child and can see their progress; the child's identity and history belong
 * to the child, and survive the parent's account being deleted, the child
 * changing school, or the child later signing in for themselves. In the
 * database that is why the link is a row in `edu_account_learner` rather than a
 * column on the learner: see the migration, which explains it at length.
 *
 * ── What changed, and why the screens did not ───────────────────────────────
 *
 * This module used to keep accounts, learners and every answered question in
 * `localStorage`, and hash passwords with SHA-256 and a per account salt. Its
 * own header called that honest local storage rather than authentication, and
 * it was right. It could not do the platform's central promise either: one
 * identity from creche to university, openable anywhere. A learner who did a
 * term of work and changed phone lost the term.
 *
 * Passwords are now Supabase Auth's problem and are not in this codebase at
 * all. There is no salt here, no digest, and no `passwordHash` on `Account`.
 *
 * The screens did not change, and the reason is worth stating because it is the
 * one constraint that shaped everything below. Every read in this module is
 * synchronous and is called straight from render: `learnerById`, `attemptsFor`,
 * `learnersFor`, `loadSession`. Making them async would have rippled into all
 * five screens and turned a storage change into a rewrite. So the device store
 * stays, demoted from the source of truth to a cache and an outbox, and reads
 * answer from it at once. That is also exactly the offline behaviour this
 * product needs: read with no network, queue what you wrote, send it when the
 * connection comes back.
 *
 * ── The one thing that is weaker than it looks ──────────────────────────────
 *
 * `handleTaken` cannot be authoritative any more, and must not be. Answering
 * "does this name have an account" for any name typed by anybody is an
 * enumeration oracle: it would tell a stranger holding a phone which children
 * exist on this platform. The row level security on `edu_account` refuses to
 * answer it, deliberately. So that function now checks only what this device
 * already knows, and the real answer comes from the sign up attempt itself,
 * which fails with a clear message. See the note above it.
 */

import { supabase } from '../supabase'
import type { LearnerProfile } from './learner'
import type { Attempt } from './mastery'

export type AccountKind = 'learner' | 'parent' | 'school'

export interface Account {
  id: string
  kind: AccountKind
  /** The learner's name, the parent's name, or the institution's name. */
  name: string
  /** Parents and schools only. A learner is never asked for one. */
  email?: string
  /** What is typed to sign in: the name for a learner, the email otherwise. */
  handle: string
  createdAt: string
  /** Learners this account may see. A learner's own id is in their own list. */
  learnerIds: string[]
  /** School accounts only. */
  classes?: Klass[]
  teachers?: Teacher[]
}

/**
 * A class, and who teaches it.
 *
 * A school's roll is not a flat list of children: it is classes, each with a
 * teacher and a set of learners. A parent's is flat, because a family does not
 * have form teachers, so classes belong to school accounts only.
 *
 * A learner belongs to at most one class at a time. Moving them changes the
 * class and never the learner, which is the same rule the identity follows.
 */
export interface Klass {
  id: string
  /** What the school calls it: "Basic 5 Gold", "SHS 2 Science A". */
  name: string
  /** The year it sits in, from STAGE_YEARS. */
  level: string
  teacherId: string | null
  learnerIds: string[]
}

export interface Teacher {
  id: string
  name: string
  /** Optional: a school may add staff before they have an address on file. */
  email?: string
}

export interface Session {
  accountId: string
  /** Which learner is being looked at, for a parent or school with several. */
  activeLearnerId: string | null
}

const ACCOUNTS = 'nexaedu_accounts_v1'
const LEARNERS = 'nexaedu_learners_v1'
const SESSION = 'nexaedu_session_v1'
/** learner code to database uuid, so foreign keys can be written. */
const IDS = 'nexaedu_learner_uuids_v1'
/** Writes made while offline, or while a write was failing. */
const OUTBOX = 'nexaedu_outbox_v1'
/** The newest attempt timestamp already sent, per learner. */
const SENT = 'nexaedu_attempts_sent_v1'

/* ── storage, kept dull on purpose ────────────────────────────────────────── */

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch { return fallback }
}

function write(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* full or blocked */ }
}

const allAccounts = () => read<Account[]>(ACCOUNTS, [])
export const allLearners = () => read<LearnerProfile[]>(LEARNERS, [])

const uuidMap = () => read<Record<string, string>>(IDS, {})
const rememberUuid = (code: string, uuid: string) =>
  write(IDS, { ...uuidMap(), [code]: uuid })
/** The database key for a learner, or null when this device has never synced. */
const uuidFor = (code: string): string | null => uuidMap()[code] ?? null

export function saveLearner(p: LearnerProfile) {
  const list = allLearners().filter(l => l.id !== p.id)
  write(LEARNERS, [...list, p])
  queue({ what: 'learner', id: p.id })
}

export const learnerById = (id: string) => allLearners().find(l => l.id === id) ?? null

/** The learners an account may see, in the order they were added. */
export function learnersFor(account: Account): LearnerProfile[] {
  const byId = new Map(allLearners().map(l => [l.id, l]))
  return account.learnerIds.map(id => byId.get(id)).filter((l): l is LearnerProfile => !!l)
}

export function loadSession(): Session | null {
  return read<Session | null>(SESSION, null)
}

export function saveSession(s: Session) { write(SESSION, s) }

export function signOut() {
  try { localStorage.removeItem(SESSION) } catch { /* blocked */ }
  /* The cached learners and attempts are deliberately left in place. They are
     this device's copy of work that also exists on the server, the next person
     to sign in cannot read them because every read goes through the session,
     and wiping them would mean a learner who signs out on a bus loses the
     ability to revise until they find a network again. */
  void supabase.auth.signOut().catch(() => { /* already gone */ })
}

export function accountById(id: string) {
  return allAccounts().find(a => a.id === id) ?? null
}

/**
 * Work is stored per learner, not per device.
 *
 * Two siblings on one phone must not share a history: the adaptive model would
 * then be reading one child's mistakes to decide what to give the other, which
 * is worse than having no model at all.
 */
const attemptsKey = (learnerId: string) => `nexaedu_attempts:${learnerId}`

export const attemptsFor = (learnerId: string): Attempt[] =>
  read<Attempt[]>(attemptsKey(learnerId), [])

/**
 * Keep a learner's answers, and send the new ones.
 *
 * The caller hands over the whole list, because that is how the screens have
 * always worked. Remotely the table is append only, by policy: there is no
 * update and no delete on `edu_learner_attempt` for anybody, because an answer
 * already given is a fact about what happened and a parent who could quietly
 * delete a child's wrong answers would be editing the evidence the teaching is
 * built on.
 *
 * So the whole list is written to the cache and only the tail is sent, decided
 * by the newest timestamp already sent for this learner.
 */
export function saveAttempts(learnerId: string, attempts: Attempt[]) {
  write(attemptsKey(learnerId), attempts.slice(-500))
  queue({ what: 'attempts', id: learnerId })
}

/* ── handles ──────────────────────────────────────────────────────────────── */

/**
 * How a handle is compared.
 *
 * A learner signing in types their name, and a child will not reproduce their
 * own capitalisation or stray spaces. Matching loosely here is the difference
 * between getting back into your work and being locked out of it by a capital
 * letter, and the password is what actually guards the account.
 *
 * Punctuation is stripped as well as case, and that is not cosmetic: the
 * synthetic address below is built from this, so anything this function
 * ignores has to be something the address ignores too. Otherwise "Ama-Mensah"
 * and "Ama Mensah" would be one handle and two accounts.
 */
const normalise = (handle: string) =>
  handle.trim().toLowerCase().replace(/[^a-z0-9@. ]+/g, ' ').replace(/\s+/g, ' ').trim()

/** Parents and schools keep their real address; a handle is already an email. */
const normaliseEmail = (email: string) => email.trim().toLowerCase()

/**
 * A domain that exists only inside Supabase Auth.
 *
 * Auth needs an address for every user and a learner has not got one, so one is
 * derived from their name. It is never shown to them, never sent anything, and
 * `nexaedu.gh` is not a domain this product owns, which is the point: nothing
 * can be delivered to it even by accident.
 */
const LEARNER_DOMAIN = 'learners.nexaedu.gh'

const addressFor = (kind: AccountKind, handle: string): string =>
  kind === 'learner'
    ? `${normalise(handle).replace(/ /g, '.')}@${LEARNER_DOMAIN}`
    : normaliseEmail(handle)

/**
 * Whether this device already knows that handle.
 *
 * Read the module header before relying on this. It is a courtesy check for
 * the sign up form so that a parent adding a second child under a name they
 * already used gets told at once. It cannot see accounts made on other devices
 * and it deliberately never will, because a function that answers "does this
 * child have an account" for arbitrary input is an enumeration oracle.
 *
 * `createAccount` is the authoritative answer.
 */
export function handleTaken(handle: string): boolean {
  const h = normalise(handle)
  return allAccounts().some(a => normalise(a.handle) === h)
}

/* ── creating an account ──────────────────────────────────────────────────── */

export type SignUp =
  | { kind: 'learner'; name: string; password: string; learner: LearnerProfile }
  | { kind: 'parent' | 'school'; name: string; email: string; password: string }

export interface Created { account: Account; session: Session }

/** Thrown with a sentence meant to be shown to whoever is holding the phone. */
export class SignUpError extends Error {}

function friendly(message: string, kind: AccountKind): string {
  const m = message.toLowerCase()
  if (m.includes('already registered') || m.includes('already been registered')) {
    return kind === 'learner'
      ? 'That name is already taken. Try adding a middle name or a number.'
      : 'There is already an account with that email address. Try signing in instead.'
  }
  if (m.includes('password')) {
    return 'That password is too weak. Use at least eight characters.'
  }
  if (m.includes('invalid') && m.includes('email')) {
    return kind === 'learner'
      ? 'That name cannot be used. Try using letters and numbers only.'
      : 'That does not look like an email address.'
  }
  if (m.includes('fetch') || m.includes('network')) {
    return 'No connection. Creating an account needs the internet once, after '
      + 'which the app works offline.'
  }
  return message
}

/**
 * Whether this account still has to prove it owns its email address.
 *
 * True only for a parent or a school on a project with confirmations on, which
 * is the state today. Their account exists and cannot be signed in to until
 * they follow the link. A learner is never in this state.
 */
export interface NeedsEmail { needsEmail: true; address: string }

export async function createAccount(input: SignUp): Promise<Created> {
  const handle = input.kind === 'learner' ? normalise(input.name) : normaliseEmail(input.email)
  const address = addressFor(input.kind, handle)

  /* ── learners ──────────────────────────────────────────────────────────────
     Created through `/api/signup`, not through `supabase.auth.signUp`, and the
     reason is not convenience.

     This project has email confirmation switched on and real SMTP behind it,
     because it also carries another product's live authentication. An ordinary
     sign up therefore tries to email `learners.nexaedu.gh`, which is a domain
     nothing owns, Resend refuses the delivery, and the request fails outright
     with a 500. Turning confirmations off would fix it for learners by
     weakening sign up verification for every real user on the project, so the
     endpoint creates the learner pre-confirmed instead and the shared setting
     is left alone. The endpoint never returns a session, which is why the
     ordinary sign in below still has to happen. */
  if (input.kind === 'learner') {
    let res: Response
    try {
      res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: input.name, password: input.password }),
      })
    } catch {
      throw new SignUpError(
        'No connection. Creating an account needs the internet once, after '
        + 'which the app works offline.',
      )
    }
    if (!res.ok) {
      const said = await res.json().catch(() => ({})) as { error?: string }

      /* Which of the endpoint's messages a learner may see.

         This was `said.error ?? fallback`, and the fallback therefore never
         ran: the endpoint always sends an `error`, so its message always won.
         A person trying to sign up on the deployment was shown

           "Accounts are not configured on this deployment.
            SUPABASE_URL and SUPABASE_SERVICE_KEY must be set."

         which is written for whoever is configuring the site, names internal
         variables to anybody who asks, and tells the learner nothing they can
         act on.

         The endpoint's 400, 409 and 429 messages are the opposite: they were
         written for the learner and are better than anything this file could
         invent, because only the endpoint knows whether it was the name, the
         password or the rate limit. So those are passed through and the
         configuration ones are replaced. */
      const mine = res.status === 400 || res.status === 409 || res.status === 429
      if (!mine) console.error('signup', res.status, said.error)

      throw new SignUpError(
        (mine && said.error)
          ? said.error
          : res.status === 501
            ? 'Creating an account is not switched on for this site yet. '
              + 'Nothing you typed was wrong.'
            : 'That account could not be created just now. Please try again.',
      )
    }
  }

  const { data, error } = input.kind === 'learner'
    ? await supabase.auth.signInWithPassword({ email: address, password: input.password })
    : await supabase.auth.signUp({
      email: address,
      password: input.password,
      /* Carried on the auth user so the account row can be rebuilt later.
      
         A parent on a project with confirmations on gets no session here, so
         the `edu_account` insert below never runs: the throw happens first.
         Without this metadata there would be nothing left anywhere saying who
         they are, and `pull` could not heal it after they confirm. */
      options: {
        data: {
          kind: input.kind,
          name: input.name.trim(),
          handle,
        },
      },
    })
  if (error) throw new SignUpError(friendly(error.message, input.kind))

  const user = data.user
  if (!user || !data.session) {
    /* A parent or school on a project with confirmations on. The account was
       made and there is no session until they follow the link in their email.
       This is the normal path rather than a fault, so it says what to do. */
    throw new SignUpError(
      `Almost done. Check ${address} for a message from us and follow the link, `
      + 'then sign in. The account is not usable until you do.',
    )
  }

  const account: Account = {
    id: user.id,
    kind: input.kind,
    name: input.kind === 'learner' ? input.name.trim() : input.name.trim(),
    email: input.kind === 'learner' ? undefined : normaliseEmail(input.email),
    handle,
    createdAt: new Date().toISOString(),
    learnerIds: [],
    ...(input.kind === 'school' ? { classes: [], teachers: [] } : {}),
  }

  const { error: rowError } = await supabase.from('edu_account').insert({
    id: account.id,
    kind: account.kind,
    name: account.name,
    handle: account.handle,
    email: account.email ?? null,
    classes: account.classes ?? [],
    teachers: account.teachers ?? [],
  })
  if (rowError) throw new SignUpError(friendly(rowError.message, input.kind))

  if (input.kind === 'learner') {
    /* Their own account, so the learner row carries `self_user_id`. That column
       is what lets somebody sign in and learn when their school will not take
       part, which is the whole reason this product has a personal account. */
    const made = await putLearner(input.learner, user.id)
    if (made) {
      account.learnerIds = [input.learner.id]
      await supabase.from('edu_account_learner')
        .insert({ account_id: user.id, learner_id: made })
    }
    saveLearner(input.learner)
  }

  write(ACCOUNTS, [...allAccounts().filter(a => a.id !== account.id), account])

  const session: Session = {
    accountId: account.id,
    activeLearnerId: input.kind === 'learner' ? input.learner.id : null,
  }
  saveSession(session)
  return { account, session }
}

/* ── signing back in ─────────────────────────────────────────────────────── */

export type SignInResult =
  | { ok: true; account: Account; session: Session }
  | { ok: false; why: string }

/**
 * Signing back in.
 *
 * One message for both a wrong handle and a wrong password, deliberately: a
 * message that distinguishes them tells a stranger which names exist.
 *
 * The handle is not looked up before the password is tried, and cannot be: the
 * address is derived from the name, so Supabase Auth is asked about exactly one
 * account and answers about exactly one account.
 */
export async function signIn(handle: string, password: string): Promise<SignInResult> {
  const wrong = {
    ok: false as const,
    why: 'That name and password do not match an account.',
  }

  const typed = handle.trim()
  if (!typed || !password) return wrong

  /* A handle with an @ in it is an email, so a parent or a school. Anything
     else is a learner's name and gets the synthetic address. Trying the typed
     value first means a parent is never penalised for the guess. */
  const looksLikeEmail = typed.includes('@')
  const addresses = looksLikeEmail
    ? [normaliseEmail(typed)]
    : [addressFor('learner', typed)]

  let userId = ''
  for (const email of addresses) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (!error && data.user) { userId = data.user.id; break }
    if (error && /fetch|network/i.test(error.message)) {
      /* Offline. If this device already holds a session for a matching handle,
         let them back in to their cached work rather than locking them out of
         a lesson because the bus went through a tunnel. */
      const known = allAccounts().find(a => normalise(a.handle) === normalise(typed))
      const session = known ? loadSession() : null
      if (known && session && session.accountId === known.id) {
        return { ok: true, account: known, session }
      }
      return {
        ok: false,
        why: 'No connection, and this device has not been signed in to that '
          + 'account before. Signing in for the first time needs the internet once.',
      }
    }
  }
  if (!userId) return wrong

  const account = await pull(userId)
  if (!account) return wrong

  const session: Session = {
    accountId: account.id,
    activeLearnerId: account.learnerIds[0] ?? null,
  }
  saveSession(session)
  void flush()
  return { ok: true, account, session }
}

/* ── reading the account down from the server ────────────────────────────── */

interface LearnerRow {
  id: string
  learner_code: string
  full_name: string
  stage: string
  level: string
  for_child: boolean
  goal: string
  approach: string
  when_stuck: string
  footing: string
  diet: string
  programme: string | null
  subject_id: string | null
  ai_notes: Record<string, string> | null
  version: number
}

const asProfile = (r: LearnerRow): LearnerProfile => ({
  id: r.learner_code,
  name: r.full_name,
  stage: r.stage as LearnerProfile['stage'],
  level: r.level,
  forChild: r.for_child,
  goal: r.goal as LearnerProfile['goal'],
  approach: r.approach as LearnerProfile['approach'],
  whenStuck: r.when_stuck as LearnerProfile['whenStuck'],
  footing: r.footing as LearnerProfile['footing'],
  diet: r.diet as LearnerProfile['diet'],
  programme: r.programme,
  subjectId: r.subject_id,
  aiNotes: r.ai_notes ?? {},
  /* Results brought from before are deliberately device only, exactly as the
     `HeldResult` comment says: they are unverified until a school confirms
     them, and uploading an unverified claim would make it look verified. */
  results: [],
  version: r.version,
})

/**
 * Fetch an account and everything it may see, and fill the cache with it.
 *
 * This is the moment the promise in the module header becomes true: a learner
 * signing in on a borrowed phone gets their own work, because it was never on
 * the first phone in the first place.
 */
/**
 * Build the missing account row for a user who is already signed in.
 *
 * Only reachable when Supabase Auth has a confirmed user and this product has
 * no row for them, which happens for exactly one reason: `createAccount` could
 * not insert the row because email confirmation meant there was no session
 * yet. See the note in `pull`.
 *
 * Everything needed comes from the auth user, which is why `createAccount`
 * puts `kind`, `name` and `handle` into its metadata. The email comes from
 * auth itself.
 *
 * Returns null rather than guessing when the metadata is not there. A row
 * invented from nothing would be worse than a failed sign in: it would claim
 * a kind, and the kind decides whether somebody sees a learner's lesson page
 * or a school's register.
 */
async function heal(userId: string): Promise<Account | null> {
  const { data: got } = await supabase.auth.getUser()
  const user = got?.user
  if (!user || user.id !== userId) return null

  const meta = (user.user_metadata ?? {}) as Record<string, unknown>
  const kind = meta.kind === 'parent' || meta.kind === 'school' || meta.kind === 'learner'
    ? meta.kind
    : null
  const name = typeof meta.name === 'string' ? meta.name.trim() : ''
  const handle = typeof meta.handle === 'string' ? meta.handle.trim() : ''
  if (!kind || !name || !handle) return null

  const isLearner = kind === 'learner'
  const email = isLearner ? null : (user.email ?? null)

  const { error } = await supabase.from('edu_account').insert({
    id: userId,
    kind,
    name,
    handle,
    email,
    classes: [],
    teachers: [],
  })
  /* A duplicate here means another tab healed it first, which is a success. */
  if (error && !/duplicate|already exists/i.test(error.message)) return null

  const account: Account = {
    id: userId,
    kind,
    name,
    email: email ?? undefined,
    handle,
    createdAt: user.created_at ?? new Date().toISOString(),
    learnerIds: [],
    ...(kind === 'school' ? { classes: [], teachers: [] } : {}),
  }
  write(ACCOUNTS, [...allAccounts().filter(a => a.id !== userId), account])
  return account
}

async function pull(userId: string): Promise<Account | null> {
  const { data: row, error } = await supabase
    .from('edu_account')
    .select('id,kind,name,handle,email,classes,teachers,created_at')
    .eq('id', userId)
    .maybeSingle()

  /* No row, but a real signed-in user. Build it from what the auth user
     carries, rather than refusing the sign in.
  
     ── The dead end this removes ─────────────────────────────────────────────
  
     A parent signing up on a project with email confirmation on gets no
     session from `signUp`, so `createAccount` throws "check your email"
     BEFORE it can insert the account row. They then confirm the address, sign
     in correctly, and this function found nothing, so `signIn` told them
     their name and password did not match an account. They could not register
     again either, because the auth user already existed.
  
     So a parent who did everything right was permanently locked out, and told
     it was their password. This heals that on the first successful sign in,
     which is the first moment there is a session for the row's policy to
     check `auth.uid()` against. */
  if (!error && !row) return await heal(userId)
  if (error || !row) return null

  /* Learners this account holds, plus the learner they are themselves. Both
     are visible through `edu_may_see_learner`, so one query covers it. */
  /* One literal string, not a concatenation. supabase-js parses this at the
     type level to work out the row shape, and it can only do that with a
     literal: built with a `+` it infers an error type instead and the cast
     below would be hiding that rather than expressing it. */
  const { data: learners } = await supabase
    .from('edu_learner')
    .select('id,learner_code,full_name,stage,level,for_child,goal,approach,when_stuck,footing,diet,programme,subject_id,ai_notes,version')

  const rows = (learners ?? []) as LearnerRow[]
  const profiles = rows.map(asProfile)

  const map = { ...uuidMap() }
  for (const r of rows) map[r.learner_code] = r.id
  write(IDS, map)

  /* Ordered by the membership, so a parent's children stay in the order they
     added them. A learner's own row has no membership and is simply first. */
  const { data: links } = await supabase
    .from('edu_account_learner')
    .select('learner_id,added_at')
    .eq('account_id', userId)
    .order('added_at', { ascending: true })

  const byUuid = new Map(rows.map(r => [r.id, r.learner_code]))
  const ordered: string[] = []
  for (const l of (links ?? []) as { learner_id: string }[]) {
    const code = byUuid.get(l.learner_id)
    if (code && !ordered.includes(code)) ordered.push(code)
  }
  for (const p of profiles) if (!ordered.includes(p.id)) ordered.push(p.id)

  const account: Account = {
    id: row.id as string,
    kind: row.kind as AccountKind,
    name: row.name as string,
    email: (row.email as string | null) ?? undefined,
    handle: row.handle as string,
    createdAt: (row.created_at as string) ?? new Date().toISOString(),
    learnerIds: ordered,
    ...(row.kind === 'school'
      ? {
        classes: (row.classes ?? []) as Klass[],
        teachers: (row.teachers ?? []) as Teacher[],
      }
      : {}),
  }

  const kept = allLearners().filter(l => !profiles.some(p => p.id === l.id))
  write(LEARNERS, [...kept, ...profiles])
  write(ACCOUNTS, [...allAccounts().filter(a => a.id !== account.id), account])

  await Promise.all(profiles.map(p => pullAttempts(p.id)))
  return account
}

/** A learner's answers, so mastery is computed from their whole history. */
async function pullAttempts(code: string): Promise<void> {
  const uuid = uuidFor(code)
  if (!uuid) return
  const { data, error } = await supabase
    .from('edu_learner_attempt')
    .select('objective_id,is_correct,hint_used,via,attempted_at')
    .eq('learner_id', uuid)
    .order('attempted_at', { ascending: true })
    .limit(500)
  if (error || !data) return

  const rows = data as {
    objective_id: string
    is_correct: boolean | null
    hint_used: boolean
    via: string | null
    attempted_at: string
  }[]

  const remote: Attempt[] = rows.map(r => ({
    objectiveId: r.objective_id,
    isCorrect: r.is_correct,
    hintUsed: r.hint_used,
    at: r.attempted_at,
    ...(r.via ? { via: r.via as Attempt['via'] } : {}),
  }))

  /* Merged rather than replaced, because this device may hold answers that
     have not been sent yet. Identity is the objective plus the instant, which
     is what the outbox dedupes on too. */
  const seen = new Set(remote.map(a => `${a.objectiveId}@${a.at}`))
  const mine = attemptsFor(code).filter(a => !seen.has(`${a.objectiveId}@${a.at}`))
  const merged = [...remote, ...mine].sort((a, b) => a.at.localeCompare(b.at))
  write(attemptsKey(code), merged.slice(-500))

  const newest = remote.length ? remote[remote.length - 1].at : ''
  if (newest) write(SENT, { ...read<Record<string, string>>(SENT, {}), [code]: newest })
}

/* ── writing back ────────────────────────────────────────────────────────── */

/** Insert or update a learner, returning its database uuid. */
async function putLearner(p: LearnerProfile, selfUserId?: string): Promise<string | null> {
  const body = {
    learner_code: p.id,
    full_name: p.name,
    stage: p.stage,
    level: p.level ?? '',
    for_child: p.forChild,
    goal: p.goal ?? '',
    approach: p.approach ?? '',
    when_stuck: p.whenStuck ?? '',
    footing: p.footing ?? '',
    diet: p.diet ?? '',
    programme: p.programme,
    subject_id: p.subjectId,
    ai_notes: p.aiNotes ?? {},
    version: p.version ?? 0,
    ...(selfUserId ? { self_user_id: selfUserId } : {}),
  }

  const known = uuidFor(p.id)
  if (known) {
    const { error } = await supabase.from('edu_learner').update(body).eq('id', known)
    return error ? null : known
  }

  /* The uuid is generated here and inserted explicitly, rather than letting
     the database default it and asking for it back with `.select()`.

     Two reasons, and the second is the one that forced it. It is one round
     trip instead of two. And a parent creating a child cannot read that row
     back in the same statement even in principle: the row's `self_user_id` is
     null because it is not their own account, and the membership that makes
     the child theirs does not exist until the next statement. At the instant
     of the insert there is genuinely nothing in the database that says this
     child is theirs, so a select policy that allowed it would be wrong.
     Knowing the id in advance sidesteps the question. */
  const uuid = newUuid()
  const { error } = await supabase.from('edu_learner').insert({ ...body, id: uuid })
  if (error) return null
  rememberUuid(p.id, uuid)
  return uuid
}

/**
 * A uuid, from the platform's own generator where there is one.
 *
 * `crypto.randomUUID` is unavailable on http origins in some browsers, which
 * includes a phone opening a dev server over a local address, so there is a
 * fallback built from `getRandomValues`. It sets the version and variant bits
 * rather than producing a random looking string, because the column is a real
 * uuid and Postgres will reject anything that is not one.
 */
function newUuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  const b = new Uint8Array(16)
  crypto.getRandomValues(b)
  b[6] = (b[6] & 0x0f) | 0x40
  b[8] = (b[8] & 0x3f) | 0x80
  const hex = [...b].map(x => x.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-`
    + `${hex.slice(16, 20)}-${hex.slice(20)}`
}

/** Send a learner's unsent answers. Append only, so only the tail goes. */
async function putAttempts(code: string): Promise<boolean> {
  const uuid = uuidFor(code)
  if (!uuid) {
    /* The learner has never reached the server, so their answers cannot be
       hung off anything yet. Push the learner first and let the next flush
       carry the answers. */
    const p = learnerById(code)
    if (!p) return true
    return Boolean(await putLearner(p))
  }

  const sentAt = read<Record<string, string>>(SENT, {})[code] ?? ''
  const pending = attemptsFor(code).filter(a => a.at > sentAt)
  if (!pending.length) return true

  const { error } = await supabase.from('edu_learner_attempt').insert(
    pending.map(a => ({
      learner_id: uuid,
      objective_id: a.objectiveId,
      question_id: '',
      response: {},
      is_correct: a.isCorrect,
      hint_used: a.hintUsed,
      via: a.via ?? null,
      attempted_at: a.at,
    })),
  )
  if (error) return false

  const newest = pending[pending.length - 1].at
  write(SENT, { ...read<Record<string, string>>(SENT, {}), [code]: newest })
  return true
}

async function putAccount(id: string): Promise<boolean> {
  const a = accountById(id)
  if (!a) return true
  const { error } = await supabase.from('edu_account').update({
    name: a.name,
    classes: a.classes ?? [],
    teachers: a.teachers ?? [],
  }).eq('id', a.id)
  return !error
}

/* ── the outbox ──────────────────────────────────────────────────────────── */

interface Job { what: 'learner' | 'attempts' | 'account'; id: string }

const jobs = () => read<Job[]>(OUTBOX, [])

/**
 * Note that something needs sending, and try to send it now.
 *
 * Deduplicated on what plus id, because these are all "make the server match
 * this record" rather than deltas. Saving a profile four times while a child
 * answers questions should send once.
 */
function queue(job: Job) {
  const list = jobs().filter(j => !(j.what === job.what && j.id === job.id))
  write(OUTBOX, [...list, job])
  void flush()
}

let flushing = false

/**
 * Send whatever is waiting.
 *
 * Never throws and never reports to the learner. A write that cannot leave the
 * device stays in the outbox and the next attempt carries it, which is the
 * behaviour a learner on an intermittent connection needs: their work is on
 * their screen either way.
 */
export async function flush(): Promise<void> {
  if (flushing) return
  const waiting = jobs()
  if (!waiting.length) return

  /* Nothing can be sent without a session, and a learner using the app offline
     legitimately has none loaded yet. Leave the outbox alone. */
  const { data } = await supabase.auth.getSession().catch(() => ({ data: { session: null } }))
  if (!data?.session) return

  flushing = true
  const failed: Job[] = []
  try {
    for (const job of waiting) {
      let ok = false
      try {
        if (job.what === 'attempts') ok = await putAttempts(job.id)
        else if (job.what === 'account') ok = await putAccount(job.id)
        else {
          const p = learnerById(job.id)
          ok = p ? Boolean(await putLearner(p)) : true
        }
      } catch { ok = false }
      if (!ok) failed.push(job)
    }
  } finally {
    write(OUTBOX, failed)
    flushing = false
  }
}

/** How many writes are still waiting, for a screen that wants to say so. */
export const unsentCount = () => jobs().length

/**
 * Try the outbox again when the connection returns.
 *
 * Registered once, at module load, because the alternative is every screen
 * remembering to do it.
 */
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => { void flush() })
}

/**
 * Restore the session on a reload, and catch up.
 *
 * Supabase persists its own session, so this is about the cache rather than
 * about authentication: the account may have changed on another device.
 */
export async function resume(): Promise<Account | null> {
  const { data } = await supabase.auth.getSession().catch(() => ({ data: { session: null } }))
  const userId = data?.session?.user?.id
  if (!userId) return null
  void flush()
  return pull(userId)
}

/* ── the family and the school roll ──────────────────────────────────────── */

/** Add a child or student under a parent or school account. */
export function addLearnerTo(accountId: string, learner: LearnerProfile, classId?: string) {
  saveLearner(learner)
  const list = allAccounts().map(a => {
    if (a.id !== accountId) return a
    const next: Account = a.learnerIds.includes(learner.id)
      ? a
      : { ...a, learnerIds: [...a.learnerIds, learner.id] }
    if (!classId) return next
    return {
      ...next,
      classes: (next.classes ?? []).map(k =>
        k.id === classId && !k.learnerIds.includes(learner.id)
          ? { ...k, learnerIds: [...k.learnerIds, learner.id] }
          : k),
    }
  })
  write(ACCOUNTS, list)
  queue({ what: 'account', id: accountId })
  /* The membership is what actually grants sight of this child, so it is
     written as soon as both ends exist. Ordered after the learner push, which
     is why it is not simply another job. */
  void (async () => {
    const p = learnerById(learner.id)
    if (!p) return
    const uuid = uuidFor(p.id) ?? await putLearner(p)
    if (!uuid) return
    await supabase.from('edu_account_learner')
      .upsert({ account_id: accountId, learner_id: uuid, class_id: classId ?? null },
        { onConflict: 'account_id,learner_id' })
      .select('learner_id')
  })().catch(() => { /* the outbox carries the learner; the link retries next time */ })
}

/** Replace an account in place. Used by the school console. */
export function updateAccount(next: Account) {
  write(ACCOUNTS, allAccounts().map(a => (a.id === next.id ? next : a)))
  queue({ what: 'account', id: next.id })
}

export function addClass(account: Account, name: string, level: string): Account {
  const klass: Klass = {
    id: `CLS-${Date.now().toString(36).toUpperCase()}`,
    name: name.trim(),
    level,
    teacherId: null,
    learnerIds: [],
  }
  const next: Account = { ...account, classes: [...(account.classes ?? []), klass] }
  updateAccount(next)
  return next
}

export function addTeacher(account: Account, name: string, email: string): Account {
  const teacher: Teacher = {
    id: `TCH-${Date.now().toString(36).toUpperCase()}`,
    name: name.trim(),
    ...(email.trim() ? { email: normaliseEmail(email) } : {}),
  }
  const next: Account = { ...account, teachers: [...(account.teachers ?? []), teacher] }
  updateAccount(next)
  return next
}

export function assignTeacher(account: Account, classId: string, teacherId: string | null): Account {
  const next: Account = {
    ...account,
    classes: (account.classes ?? []).map(k =>
      k.id === classId ? { ...k, teacherId } : k),
  }
  updateAccount(next)
  return next
}

export function classOf(account: Account, learnerId: string): Klass | null {
  return (account.classes ?? []).find(k => k.learnerIds.includes(learnerId)) ?? null
}

/**
 * Move a student between classes.
 *
 * Changes the class and never the student. Their identity and their history
 * belong to them, which is the rule the learner id follows everywhere else.
 */
export function moveLearner(
  account: Account,
  learnerId: string,
  toClassId: string | null,
): Account {
  const next: Account = {
    ...account,
    classes: (account.classes ?? []).map(k => {
      const without = k.learnerIds.filter(id => id !== learnerId)
      if (k.id !== toClassId) return { ...k, learnerIds: without }
      return { ...k, learnerIds: [...without, learnerId] }
    }),
  }
  updateAccount(next)
  void (async () => {
    const uuid = uuidFor(learnerId)
    if (!uuid) return
    await supabase.from('edu_account_learner')
      .update({ class_id: toClassId })
      .eq('account_id', account.id)
      .eq('learner_id', uuid)
  })().catch(() => { /* the class is in the account json too, which did send */ })
  return next
}

/* ── what the sign up form may refuse before asking the server ───────────── */

export function passwordProblem(password: string): string | null {
  if (password.length < 8) return 'Use at least eight characters.'
  /* Supabase enforces its own minimum as well. Checking here means a child is
     told before they have filled in the rest of the form. */
  if (/^\d+$/.test(password)) return 'Use letters as well as numbers.'
  return null
}

export function emailProblem(email: string): string | null {
  const e = email.trim()
  if (!e) return 'An email address is needed.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return 'That does not look like an email address.'
  if (e.toLowerCase().endsWith(LEARNER_DOMAIN)) {
    /* Reserved for the synthetic addresses above. A parent who typed one would
       collide with a learner's account. */
    return 'That domain cannot be used.'
  }
  return null
}
