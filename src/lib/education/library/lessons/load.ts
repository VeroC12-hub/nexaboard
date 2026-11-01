/**
 * Loading one stage's lessons, when that stage is the one being taught.
 *
 * ── Why this exists ────────────────────────────────────────────────────────
 *
 * Every stored lesson used to be imported by `subjects.ts`, which every
 * screen goes through, so every visitor downloaded the whole library before
 * the front page could paint: 3.9 MB of source and growing by a block every
 * few hours while the cloud finishes SHS. A parent opening the app for a four
 * year old paid for SHS Physics, Literature and Additional Mathematics, on a
 * data bundle, before seeing a single word.
 *
 * Splitting it by stage is possible because no learner is ever in two stages,
 * and a stage is known before any lesson is asked for: it is on the profile
 * that was chosen to get into the course at all.
 *
 * ── Why loading is explicit rather than automatic ──────────────────────────
 *
 * Every read of the registry is synchronous and called straight from render:
 * `taughtFor` is a map lookup inside a `useMemo`. There is no point at which
 * a read could await an import, so the load has to happen earlier, at a place
 * that is allowed to wait and can say so on screen. That place is the learner
 * surface, which already has a profile in hand and already has somewhere to
 * put a loading state.
 *
 * The consequence to respect: a screen that reads the registry without having
 * waited for this sees an empty registry, not an error, and silently falls
 * back to teaching from the outline. That failure is invisible, which is why
 * `lessonsReady` exists and why the loader is called in one place rather than
 * sprinkled through the screens.
 */

import type { Stage } from '../../learner'

/**
 * One dynamic import per stage, written out rather than built from a
 * template, because a bundler can only split what it can see at build time. A
 * computed path, `import('./by-stage/' + stage)`, makes the whole directory a
 * single chunk again and quietly undoes this file.
 *
 * TVET and university are outlined and untaught by the owner's decision, so
 * they resolve immediately: there is no file, and asking for one would be a
 * 404 at runtime rather than a missing lesson.
 */
const LOADERS: Record<Stage, () => Promise<unknown>> = {
  creche: () => import('./by-stage/creche'),
  primary: () => import('./by-stage/primary'),
  jhs: () => import('./by-stage/jhs'),
  shs: () => import('./by-stage/shs'),
  tvet: () => Promise.resolve(),
  uni: () => Promise.resolve(),
}

/**
 * Who to tell when a stage lands.
 *
 * A screen cannot hold this in its own state without writing to state from
 * inside an effect, which React now warns about and which is genuinely the
 * wrong shape: whether a chunk has arrived is not that component's state, it
 * is a fact about the module, shared by every screen. So the module keeps it
 * and React subscribes through `useSyncExternalStore`.
 */
const listeners = new Set<() => void>()

export function onLessonsLoaded(listen: () => void): () => void {
  listeners.add(listen)
  return () => { listeners.delete(listen) }
}

const loaded = new Set<Stage>()
const inflight = new Map<Stage, Promise<void>>()

/** Whether this stage's lessons are in the registry now, synchronously. */
export const lessonsReady = (stage: Stage): boolean => loaded.has(stage)

/**
 * Put a stage's lessons in the registry, once.
 *
 * Safe to call on every render: a stage already loaded resolves immediately,
 * and two callers racing for the same stage share one import rather than
 * fetching the chunk twice.
 *
 * A failed import is not thrown on. The connection dropped mid navigation is
 * the ordinary case here, and the honest fallback is the one the platform
 * already has: a topic with no stored lesson is taught by the tutor from its
 * outline. Throwing would replace a working lesson with an error screen.
 */
export function loadLessons(stage: Stage): Promise<void> {
  if (loaded.has(stage)) return Promise.resolve()
  const already = inflight.get(stage)
  if (already) return already

  const job = LOADERS[stage]()
    .then(() => {
      loaded.add(stage)
      for (const listen of listeners) listen()
    })
    .catch(() => { /* taught from the outline instead */ })
    .finally(() => { inflight.delete(stage) })

  inflight.set(stage, job)
  return job
}
