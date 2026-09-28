import { createClient } from '@supabase/supabase-js'

/*
 * The one client, pointed at the one project.
 *
 * The publishable key is safe to ship in client code: data access is governed
 * by row level security, not by keeping this string secret.
 *
 * ── Why a missing variable throws instead of falling back ────────────────────
 *
 * These two used to default to `nmwfevhetlwehbuikflk`, which is the NexaCore
 * Web Assistant project and not this one. NexaBoard's backend is
 * `aoanslmovspmjqiqozcq`, and it has been since the original project was
 * deleted in June.
 *
 * While the fallback was only serving whiteboard sessions it was merely wrong.
 * It is now dangerous. Accounts, learner identities and every answered question
 * live behind Supabase Auth on this project, so a build that lost its
 * environment variables would not break: it would quietly sign children up
 * into a different product's database, write their work there, and report
 * success. Nobody would find out until somebody went looking for a learner who
 * was never here.
 *
 * A build with no configuration is a mistake, and the useful thing to do with a
 * mistake is to make it loud. Vite inlines these at build time, so this throws
 * during the build or on first load, which is exactly when somebody can still
 * fix it. Silent and wrong is the only outcome worth ruling out.
 */

function required(name: string, value: string | undefined): string {
  if (typeof value === 'string' && value.trim()) return value.trim()
  throw new Error(
    `${name} is not set. NEXA-EDU talks to Supabase project aoanslmovspmjqiqozcq `
    + 'and there is deliberately no default: a missing value used to fall back to '
    + 'a different project, which would store accounts and learner work in the '
    + 'wrong database. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env '
    + 'for development, and in the Vercel project settings for a deployment.',
  )
}

const supabaseUrl = required('VITE_SUPABASE_URL', import.meta.env.VITE_SUPABASE_URL)
const supabaseAnonKey = required('VITE_SUPABASE_ANON_KEY', import.meta.env.VITE_SUPABASE_ANON_KEY)

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    /* A learner comes back to their own work on their own phone, so the
       session is kept and refreshed rather than ending with the tab. */
    persistSession: true,
    autoRefreshToken: true,
    /* Nothing in this product signs in through a redirect, so there is never a
       token in the address bar to detect. Leaving it on makes the client parse
       every url it is loaded under, which is noise at best. */
    detectSessionInUrl: false,
  },
})
