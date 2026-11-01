/**
 * Who is calling, and whether they have had enough.
 *
 * Shared by every endpoint that spends money, which today is the tutor and
 * the image queue. `signup.js` has its own, older and narrower, version of
 * the same idea against its own table; this one is the general case.
 *
 * ── The decision that differs from signup.js ───────────────────────────────
 *
 * `signup.js` fails OPEN when the throttle table cannot be reached, and
 * explains why at length: refusing every sign up during a database hiccup is
 * worse than briefly not counting.
 *
 * This one fails CLOSED for anonymous callers and open for signed in ones,
 * and the difference is what is at stake. An uncounted sign up costs a row.
 * An uncounted tutor call costs money, from a key anybody on the internet can
 * reach by name, so "we cannot count right now" must not mean "help
 * yourself". A signed in learner is a person with an account we can see and
 * suspend, so they keep working through an outage; a stranger waits.
 *
 * Underneath both sits a per instance counter that needs nothing at all. It
 * is nearly useless against a distributed script, as migration 000006
 * demonstrates with numbers, and it is the only thing standing between the
 * key and a flood when the database is unreachable, so it stays.
 */

const SUPA_URL = process.env.SUPABASE_URL || '';
const SUPA_KEY = process.env.SUPABASE_SERVICE_KEY || '';

/* ── who ──────────────────────────────────────────────────────────────── */

/**
 * The address, as Vercel reports it.
 *
 * `x-forwarded-for` is a list when there are proxies in front, and the first
 * entry is the client. Taking the whole header would let a caller mint a new
 * identity per request by adding one of their own.
 */
function addressOf(req) {
  const raw = String(
    req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '',
  );
  return raw.split(',')[0].trim() || 'unknown';
}

/**
 * A short, stable, non reversible stand in for an address.
 *
 * An IP is personal data and the limiter does not need it: it needs to tell
 * one caller from another for an hour. So the table stores a hash and never
 * the address itself, which also means a leaked backup of the throttle table
 * is not a list of who was studying.
 */
async function hashed(value) {
  const bytes = new TextEncoder().encode(`nexaedu:${value}`);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest).slice(0, 10))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * The signed in account behind this request, if there is one.
 *
 * The browser sends its Supabase access token; this asks Supabase who it
 * belongs to rather than decoding it here, because verifying a JWT signature
 * by hand is the kind of code that is wrong in a way nobody notices. An
 * invalid or expired token is treated as no token at all: the caller is then
 * anonymous and gets the anonymous allowance, which is the safe direction.
 */
async function accountOf(req) {
  const header = String(req.headers.authorization || '');
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!token || !SUPA_URL || !SUPA_KEY) return null;

  try {
    const res = await fetch(`${SUPA_URL.replace(/\/+$/, '')}/auth/v1/user`, {
      headers: { apikey: SUPA_KEY, Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const user = await res.json();
    return user && typeof user.id === 'string' ? user.id : null;
  } catch {
    return null;
  }
}

/** Who to count this call against, and whether they are signed in. */
export async function identify(req) {
  const account = await accountOf(req);
  if (account) return { who: account, signedIn: true };
  return { who: `ip:${await hashed(addressOf(req))}`, signedIn: false };
}

/* ── the per instance counter ─────────────────────────────────────────── */

const recent = new Map();

/**
 * True when this caller is over the burst limit on this instance.
 *
 * Deliberately short and generous: it exists to blunt a flood arriving at one
 * instance while the database is unreachable, not to be the real limit. The
 * map is swept on every call so a long lived instance does not grow without
 * bound.
 */
function burst(who, max, windowMs) {
  const now = Date.now();
  for (const [key, times] of recent) {
    const live = times.filter(t => now - t < windowMs);
    if (live.length) recent.set(key, live); else recent.delete(key);
  }
  const mine = recent.get(who) ?? [];
  mine.push(now);
  recent.set(who, mine);
  return mine.length > max;
}

/* ── the shared counter ───────────────────────────────────────────────── */

/**
 * Record the call and decide.
 *
 * Returns `{ ok }` and, when it is not ok, `why` in words a learner can read
 * and `status` to send. `today` comes back on every call so a caller that
 * wants to log how close the deployment is to its cap can.
 */
export async function allowTutorCall(req, {
  task = '',
  windowMinutes = 60,
  perWindow = 40,
  perWindowSignedIn = 120,
  perDayAll = 4000,
} = {}) {
  const { who, signedIn } = await identify(req);
  const ceiling = signedIn ? perWindowSignedIn : perWindow;

  /* The cheap check first, so a flood is refused without a round trip. */
  if (burst(who, Math.ceil(ceiling / 4), 60_000)) {
    return {
      ok: false,
      who,
      status: 429,
      why: 'That is a lot of questions at once. Wait a minute and ask again.',
    };
  }

  if (!SUPA_URL || !SUPA_KEY) {
    /* No database configured at all. The per instance counter above is the
       only limit there is, so say so in the logs rather than pretending the
       endpoint is protected. */
    console.warn('[limit] no SUPABASE_URL or SUPABASE_SERVICE_KEY: tutor calls are counted per instance only');
    return { ok: true, who, today: null };
  }

  try {
    const res = await fetch(
      `${SUPA_URL.replace(/\/+$/, '')}/rest/v1/rpc/edu_tutor_rate`,
      {
        method: 'POST',
        headers: {
          apikey: SUPA_KEY,
          Authorization: `Bearer ${SUPA_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          the_who: who, the_task: task, window_minutes: windowMinutes,
        }),
      },
    );
    if (!res.ok) throw new Error(`rate rpc ${res.status}`);

    /* The function returns a single row: { mine, today }. */
    const rows = await res.json();
    const row = Array.isArray(rows) ? rows[0] : rows;
    const mine = Number(row?.mine ?? 0);
    const today = Number(row?.today ?? 0);

    if (today > perDayAll) {
      /* The circuit breaker. Not the learner's fault and not their problem to
         solve, so it does not tell them to try again shortly. */
      console.error(`[limit] deployment cap reached: ${today} tutor calls in 24h`);
      return {
        ok: false, who, today, status: 503,
        why: 'The tutor has reached its limit for today. The written lessons '
          + 'still work, and it comes back tomorrow.',
      };
    }

    if (mine > ceiling) {
      return {
        ok: false, who, today, status: 429,
        why: signedIn
          ? 'You have asked the tutor a great many questions this hour. '
            + 'It will answer again shortly.'
          : 'This device has reached its limit for the hour. Signing in '
            + 'raises it, and the written lessons work either way.',
      };
    }

    return { ok: true, who, today };
  } catch (err) {
    /* Cannot count. See the note at the top: a signed in learner keeps
       working, a stranger does not. */
    console.error('[limit] rate check failed', err);
    if (signedIn) return { ok: true, who, today: null };
    return {
      ok: false, who, status: 503,
      why: 'The tutor cannot take new questions at the moment. The written '
        + 'lessons still work. Signing in will let you through.',
    };
  }
}
