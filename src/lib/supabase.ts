import { createClient } from '@supabase/supabase-js'

// Publishable key is safe to ship in client code; data access is governed by RLS.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? 'https://nmwfevhetlwehbuikflk.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'sb_publishable_D1EUai8YKAFn2M_Sov38RQ_jwg5X7FC'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
