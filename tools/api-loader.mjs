// A resolve hook that makes editing a shared api/ module take effect.
//
// ── The bug this fixes ──────────────────────────────────────────────────────
//
// `tools/vite-api.mjs` re-imports a handler per request with a cache busting
// query, and its header claimed that "editing api/prompt.js and asking again
// shows the new wording without restarting anything".
//
// That was not true, and it named the one file where it matters most.
// `api/queue.js` holds a static `import { buildSystem } from './prompt.js'`.
// Busting the query on the HANDLER re-evaluates the handler, whose import
// specifier is still the bare './prompt.js', which Node resolves to the copy
// already in its module registry. So the handler was fresh and every module it
// imported was stale.
//
// The effect was worse than a slow feedback loop. Prompt changes appeared to
// have been made and to have had no effect, which reads as "the model ignored
// my instruction" rather than "the model never saw it". That is a fault that
// sends you off editing the wording when the wording was never loaded.
//
// ── How it works ───────────────────────────────────────────────────────────
//
// The query is inherited. When `vite-api.mjs` imports a handler as
// `queue.js?t=1737…`, this hook sees each relative import made BY that module
// and appends the same `?t=1737…`. So one stamp busts the whole local graph in
// one go, every module in it agrees on which generation it belongs to, and
// nothing needs to be told the stamp out of band.
//
// Only relative specifiers are touched. A bare specifier is a package from
// node_modules, which is not being edited and would be wasteful and sometimes
// broken to re-evaluate per request.
//
// Development only, and registered by `vite-api.mjs`. On Vercel each function
// is loaded once per instance, which is what production wants.

/**
 * Modules that must survive between requests, and so must NOT be reloaded.
 *
 * ── The regression this exists to stop ─────────────────────────────────────
 *
 * Reloading the whole local graph broke image rendering, and the failure was
 * a clean one to read once found: `/api/render` answered the submit with an
 * id, and the very next poll said "that picture is no longer held".
 *
 * `render-openai.js` keeps the finished image in a module level Map, because
 * the OpenAI images API returns the picture itself rather than a ticket to
 * fetch later, so there is nowhere else to put it between the POST that makes
 * it and the GET that collects it. Give the poll a fresh copy of that module
 * and the Map is empty. The free route was unaffected only because it encodes
 * the image url inside the id and holds nothing.
 *
 * That bug was fixed properly instead: `render-openai.js` now uploads the
 * picture to Supabase Storage and carries its url inside the render id, the
 * way `render-free.js` always did, so it holds nothing between the two
 * requests and there is no state to preserve. Which is why this list is
 * empty.
 *
 * It is kept, empty, because the hazard is not obvious and will come back. Any
 * module under `api/` that remembers something between one request and the
 * next has to be named here, or its memory will be wiped between the submit
 * and the poll in development and the failure will look like the feature
 * simply not working.
 *
 * On Vercel none of this applies: a function is loaded once per instance.
 */
const STATEFUL = [];

export async function resolve(specifier, context, next) {
  const parent = context.parentURL || '';

  /* Only inherit from a parent that was itself loaded with a stamp, so this is
     inert for anything outside the per request import. */
  const at = parent.indexOf('?t=');
  if (at === -1) return next(specifier, context);

  /* Bare specifiers are packages. Leave them in the registry. */
  if (!specifier.startsWith('./') && !specifier.startsWith('../')) {
    return next(specifier, context);
  }

  /* Already carries one, from a deeper level of the same graph. */
  if (specifier.includes('?t=')) return next(specifier, context);

  /* Holds state between a submit and the poll that collects it. See STATEFUL. */
  if (STATEFUL.some(name => specifier.endsWith(name))) {
    return next(specifier, context);
  }

  const stamp = parent.slice(at);
  return next(specifier + stamp, context);
}
