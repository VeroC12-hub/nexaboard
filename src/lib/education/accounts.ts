/**
 * Accounts, and getting back into one.
 *
 * Three kinds of account, because three different people arrive here and only
 * one of them has an email address.
 *
 *   learner   signs in with a name and a password
 *   parent    signs in with an email and a password, and holds their children
 *   school    signs in with an email and a password, and holds its students
 *
 * A learner is deliberately not asked for an email. Most basic school pupils in
 * Ghana do not have one, and phone verification costs money per message on a
 * product that is meant to be free. A name and a password they choose is enough
 * to come back to their own work, and it is the pattern the platform's own plan
 * already commits to.
 *
 * A learner record is never owned by the account that created it. A parent adds
 * a child and can see their progress; the child's identity and history belong
 * to the child, and survive the parent's account being deleted, the child
 * changing school, or the child later signing in for themselves.
 *
 * ── On the password handling ────────────────────────────────────────────────
 *
 * This module stores accounts on the device, and hashes with SHA-256 and a
 * per-account salt. That is honest local storage, not authentication: anyone
 * with the device can read the store, and SHA-256 is fast enough to brute force
 * a weak password offline. It is enough to keep two siblings out of each
 * other's work on a shared phone, which is the real threat here.
 *
 * It is NOT enough once a real grade hangs off an account. The functions below
 * are deliberately the only place that knows how a password is checked, so the
 * day this moves to Supabase Auth, this file changes and nothing else does.
 */

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
  salt: string
  passwordHash: string
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

export const allAccounts = () => read<Account[]>(ACCOUNTS, [])
export const allLearners = () => read<LearnerProfile[]>(LEARNERS, [])

export function saveLearner(p: LearnerProfile) {
  const list = allLearners().filter(l => l.id !== p.id)
  write(LEARNERS, [...list, p])
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

export function saveAttempts(learnerId: string, attempts: Attempt[]) {
  write(attemptsKey(learnerId), attempts.slice(-500))
}

/* ── passwords ────────────────────────────────────────────────────────────── */

const randomSalt = () => {
  const b = new Uint8Array(16)
  crypto.getRandomValues(b)
  return [...b].map(x => x.toString(16).padStart(2, '0')).join('')
}

async function hash(password: string, salt: string): Promise<string> {
  const bytes = new TextEncoder().encode(`${salt}:${password}`)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * How a handle is compared.
 *
 * A learner signing in types their name, and a child will not reproduce their
 * own capitalisation or stray spaces. Matching loosely here is the difference
 * between getting back into your work and being locked out of it by a capital
 * letter, and the password is what actually guards the account.
 */
const normalise = (handle: string) => handle.trim().toLowerCase().replace(/\s+/g, ' ')

export function handleTaken(handle: string): boolean {
  const h = normalise(handle)
  return allAccounts().some(a => normalise(a.handle) === h)
}

export type SignUp =
  | { kind: 'learner'; name: string; password: string; learner: LearnerProfile }
  | { kind: 'parent' | 'school'; name: string; email: string; password: string }

export interface Created { account: Account; session: Session }

export async function createAccount(input: SignUp): Promise<Created> {
  const handle = input.kind === 'learner' ? input.name : input.email
  const salt = randomSalt()
  const account: Account = {
    id: input.kind === 'learner'
      ? input.learner.id
      : `${input.kind === 'school' ? 'ORG' : 'GRD'}-${Date.now().toString(36).toUpperCase()}`,
    kind: input.kind,
    name: input.name,
    email: input.kind === 'learner' ? undefined : input.email,
    handle,
    salt,
    passwordHash: await hash(input.password, salt),
    createdAt: new Date().toISOString(),
    learnerIds: input.kind === 'learner' ? [input.learner.id] : [],
  }

  if (input.kind === 'learner') saveLearner(input.learner)
  write(ACCOUNTS, [...allAccounts(), account])

  const session: Session = {
    accountId: account.id,
    activeLearnerId: input.kind === 'learner' ? input.learner.id : null,
  }
  saveSession(session)
  return { account, session }
}

export type SignInResult =
  | { ok: true; account: Account; session: Session }
  | { ok: false; why: string }

/**
 * Signing back in.
 *
 * One message for both a wrong handle and a wrong password, deliberately: a
 * message that distinguishes them tells a stranger which names exist on the
 * device.
 */
export async function signIn(handle: string, password: string): Promise<SignInResult> {
  const h = normalise(handle)
  const account = allAccounts().find(a => normalise(a.handle) === h)
  const wrong = { ok: false as const, why: 'That name and password do not match an account on this device.' }
  if (!account) return wrong
  const check = await hash(password, account.salt)
  if (check !== account.passwordHash) return wrong

  const session: Session = {
    accountId: account.id,
    activeLearnerId: account.kind === 'learner'
      ? account.learnerIds[0] ?? null
      : account.learnerIds[0] ?? null,
  }
  saveSession(session)
  return { ok: true, account, session }
}

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
}

/** Replace an account in place. Used by the school console. */
export function updateAccount(next: Account) {
  write(ACCOUNTS, allAccounts().map(a => (a.id === next.id ? next : a)))
}

export function addClass(account: Account, name: string, level: string): Account {
  const next: Account = {
    ...account,
    classes: [...(account.classes ?? []), {
      id: `C${Date.now().toString(36).toUpperCase()}`,
      name: name.trim(), level, teacherId: null, learnerIds: [],
    }],
  }
  updateAccount(next)
  return next
}

export function addTeacher(account: Account, name: string, email: string): Account {
  const next: Account = {
    ...account,
    teachers: [...(account.teachers ?? []), {
      id: `T${Date.now().toString(36).toUpperCase()}`,
      name: name.trim(), email: email.trim() || undefined,
    }],
  }
  updateAccount(next)
  return next
}

/** Put a teacher in front of a class, or take them off it. */
export function assignTeacher(account: Account, classId: string, teacherId: string | null): Account {
  const next: Account = {
    ...account,
    classes: (account.classes ?? []).map(k =>
      k.id === classId ? { ...k, teacherId } : k),
  }
  updateAccount(next)
  return next
}

/** Which class a learner sits in, if any. */
export function classOf(account: Account, learnerId: string): Klass | null {
  return (account.classes ?? []).find(k => k.learnerIds.includes(learnerId)) ?? null
}

/**
 * Move a student between classes, or out of all of them.
 *
 * **This changes the class and never the student.** Their profile, their id and
 * their whole history of attempts are untouched: a class is a grouping the
 * school keeps, and a child's record belongs to the child. It is the same rule
 * the identity follows everywhere else in this layer, and it is what makes a
 * student repeating a year, or moving school, not lose what they have done.
 *
 * Removed from every class first, then added to the target. A student who
 * somehow ended up in two classes comes out of both, so this repairs that
 * state rather than preserving half of it.
 */
export function moveLearner(
  account: Account,
  learnerId: string,
  classId: string | null,
): Account {
  const next: Account = {
    ...account,
    classes: (account.classes ?? []).map(k => {
      const without = k.learnerIds.filter(id => id !== learnerId)
      return k.id === classId
        ? { ...k, learnerIds: [...without, learnerId] }
        : { ...k, learnerIds: without }
    }),
  }
  updateAccount(next)
  return next
}

/** What a password must be before it is accepted, said plainly. */
export function passwordProblem(password: string): string | null {
  if (password.length < 6) return 'Use at least six characters.'
  return null
}

/** Whether an email looks like one. Deliberately loose. */
export function emailProblem(email: string): string | null {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return 'Check the email address.'
  return null
}
