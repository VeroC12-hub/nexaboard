// api/signup.js
//
// Making an account for somebody who has no email address.
//
//   POST /api/signup   { name, password }  ->  { ok: true, handle }
//
// ── Why this exists at all ───────────────────────────────────────────────────
//
// A learner signs in with a name. Most basic school pupils in Ghana have no
// email, and phone verification costs money per message on a product meant to
// be free. Supabase Auth needs an address for every user regardless, so
// `accounts.ts` derives a synthetic one at `learners.nexaedu.gh`, a domain
// nothing owns and nothing can deliver to.
//
// The browser cannot create that user itself. This project has email
// confirmation switched on, so an ordinary `signUp` tries to email the
// synthetic address, Resend refuses to deliver to a domain that does not
// exist, and the whole request fails:
//
//   {"code":500,"error_code":"unexpected_failure",
//    "msg":"Error sending confirmation email"}
//
// The obvious fix is to turn confirmations off. That was checked and rejected:
// it is a project wide switch, and this project also carries the ELTUFF Ideas
// Ventures website's authentication, with real SMTP through Resend and real
// users. Weakening their sign up verification to solve a problem only learners
// have is not a trade anybody asked for.
//
// So learners are created pre-confirmed through the Admin API instead, which
// skips the email rather than failing to send it. Confirmations stay on for
// parents, for schools, and for everybody else on the project.
//
// ── What this endpoint is allowed to do ──────────────────────────────────────
//
// It holds the service key, so the interesting question is what it can be
// talked into doing. The answer is: create one user on one domain.
//
//   - The address is BUILT here from the name, never accepted from the caller.
//     There is no request body field that can point this at another address,
//     which is what stops it being used to mint a pre-confirmed account for
//     somebody else's real email and take it over.
//   - It never returns a token or a session. The browser signs in afterwards
//     with the password it already has, through the ordinary public endpoint.
//     So a successful call gives the caller nothing they did not already know.
//   - It refuses every kind except a learner. Parents and schools have real
//     addresses and go through `supabase.auth.signUp` and its confirmation
//     email, as they should.
//
// ── The limitation, stated rather than implied ───────────────────────────────
//
// Sign up is public, so this can be called repeatedly to fill the user table.
// Supabase's own per IP limits do not apply to the Admin API, which is the
// point of using it, so this endpoint counts for itself: twelve per ten
// minutes per address, counted in Postgres so the number survives a cold start
// and is shared across instances.
//
// The first version counted in a module level Map and was measured doing
// nothing, because the dev server re-imports this file per request and each
// Vercel instance has its own memory. Fourteen requests against a limit of
// twelve all returned 200. If this is ever changed back to in-process state,
// that is the test to run.
//
// What it still does not stop is a distributed attempt from many addresses.
// That belongs at the edge, and is recorded in NEXAEDU_OPEN_ISSUES.md.

const SUPA_URL = process.env.SUPABASE_URL || '';
const SUPA_KEY = process.env.SUPABASE_SERVICE_KEY || '';

/** The only domain this endpoint may ever create a user on. */
const LEARNER_DOMAIN = 'learners.nexaedu.gh';

/**
 * Names this will accept.
 *
 * Letters, digits, spaces, apostrophes and hyphens, which covers Ghanaian
 * names including the ones with apostrophes. Two characters is a real floor:
 * a single character name is almost always a mis-tap, and it would also make
 * the handle space small enough to guess through.
 */
const NAME_OK = /^[\p{L}\p{N}][\p{L}\p{N} '-]{1,60}$/u;

/**
 * The same normalisation `accounts.ts` uses, and it has to stay the same.
 *
 * The handle a learner types is turned into an address here and there, and if
 * the two disagreed a learner would create an account and then be unable to
 * sign in to it. Punctuation is stripped rather than encoded, so "Ama-Mensah"
 * and "Ama Mensah" are one handle rather than two accounts one keystroke
 * apart.
 */
function normalise(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9@. ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const addressFor = (handle) => `${handle.replace(/ /g, '.')}@${LEARNER_DOMAIN}`;

/*
 * How many sign ups one address may make in ten minutes.
 *
 * Twelve is chosen for a family rather than for a single person: a parent
 * setting up four children, getting one name wrong and starting again, must
 * not be locked out. A script trying to fill the user table hits it almost at
 * once.
 */
const WINDOW_MINUTES = 10;
const PER_WINDOW = 12;

/**
 * Whether this address has had enough.
 *
 * Counted in the database rather than in this module, because a module level
 * counter here was measured doing nothing: the dev server re-imports the
 * handler on every request, and in production each Vercel instance has its own
 * memory and any of them may be cold. Fourteen requests against a limit of
 * twelve all returned 200. The migration explains it at length.
 *
 * Fails OPEN on an error, and that is a deliberate trade rather than an
 * oversight. If the throttle table cannot be reached, the choice is to refuse
 * every sign up on the platform or to stop counting for as long as the fault
 * lasts. Refusing means a database hiccup locks every new learner out, which
 * is a worse and much more likely event than somebody flooding the user table
 * during that same window.
 */
async function tooMany(ip) {
  try {
    const res = await fetch(
      `${SUPA_URL.replace(/\/+$/, '')}/rest/v1/rpc/edu_signup_rate`,
      {
        method: 'POST',
        headers: {
          apikey: SUPA_KEY,
          Authorization: `Bearer ${SUPA_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({ the_ip: ip, window_minutes: WINDOW_MINUTES }),
      },
    );
    if (!res.ok) return false;
    const n = Number(await res.text());
    return Number.isFinite(n) && n > PER_WINDOW;
  } catch (err) {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'POST only.' });
  }
  if (!SUPA_URL || !SUPA_KEY) {
    return res.status(501).json({
      error: 'Accounts are not configured on this deployment. '
        + 'SUPABASE_URL and SUPABASE_SERVICE_KEY must be set.',
    });
  }

  const ip = String(
    req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
  ).split(',')[0].trim();
  if (await tooMany(ip)) {
    return res.status(429).json({ error: 'Too many accounts from here. Try again later.' });
  }

  const body = typeof req.body === 'string' ? safeJson(req.body) : (req.body || {});
  const rawName = body.name;
  const password = String(body.password || '');

  if (!NAME_OK.test(String(rawName || '').trim())) {
    return res.status(400).json({
      error: 'That name cannot be used. Use letters and numbers, at least two characters.',
    });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: 'Use a password of at least eight characters.' });
  }
  /* The same rule `passwordProblem` in accounts.ts applies, enforced here too.
     It was client side only, which meant "12345678" was refused by the form and
     accepted by this endpoint, and the endpoint is the one that decides. Eight
     digits is ten million possibilities, which is not a password.

     Any rule worth showing a learner has to live on the server as well, or it
     is advice rather than a rule. */
  if (/^\d+$/.test(password)) {
    return res.status(400).json({ error: 'Use letters as well as numbers.' });
  }

  const handle = normalise(rawName);
  if (!handle) {
    return res.status(400).json({ error: 'That name cannot be used.' });
  }
  /* An @ would mean the normalised handle could build an address that is not
     on the learner domain. Refused rather than escaped, because a name with an
     @ in it is not a name. */
  if (handle.includes('@')) {
    return res.status(400).json({ error: 'A name cannot contain an @ sign.' });
  }

  const email = addressFor(handle);

  let made;
  try {
    made = await fetch(`${SUPA_URL.replace(/\/+$/, '')}/auth/v1/admin/users`, {
      method: 'POST',
      headers: {
        apikey: SUPA_KEY,
        Authorization: `Bearer ${SUPA_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        /* The whole reason this endpoint exists: the account is usable at once
           and no message is ever sent to a domain that cannot receive one. */
        email_confirm: true,
        user_metadata: { kind: 'learner', handle },
      }),
    });
  } catch (err) {
    return res.status(502).json({ error: 'Could not reach the accounts service.' });
  }

  const text = await made.text().catch(() => '');
  if (!made.ok) {
    const said = text.toLowerCase();
    if (made.status === 422 || said.includes('already been registered') || said.includes('already exists')) {
      return res.status(409).json({
        error: 'That name is already taken. Try adding a middle name or a number.',
      });
    }
    /* The upstream body may name the service key's project or quote its
       configuration, so it is logged and not returned. */
    console.error('admin signup', made.status, text.slice(0, 300));
    return res.status(502).json({ error: 'That account could not be created. Try again.' });
  }

  /* Deliberately no token. The browser signs in next with the password it
     already holds, so this response tells an attacker nothing. */
  return res.status(200).json({ ok: true, handle });
}

function safeJson(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
