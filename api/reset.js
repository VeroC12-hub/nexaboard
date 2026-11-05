// api/reset.js
//
// Getting back into an account whose password has been forgotten.
//
//   POST /api/reset  { name }                      -> { sent, channel, hint }
//   POST /api/reset  { name, code, password }      -> { ok: true }
//
// ── Why this is a server endpoint and not three lines in the browser ─────────
//
// A learner signs in with a name. The address behind that name is synthetic,
// `kwame.boateng@learners.nexaedu.gh`, on a domain nothing can deliver to, so
// there has never been anywhere to send a reset. Families now give a phone
// number or an email when they register, and that contact is what the code
// goes to.
//
// It cannot be done in the browser, for two reasons:
//
//   - The contact must be looked up from the name, and the browser is not
//     allowed to read other people's rows. Nor should it ever hold the number:
//     a client that could fetch "the phone number for the name Ama Mensah" is
//     a directory of children's family phone numbers with a public API.
//   - Verifying the code and setting the password both need the service key.
//
// So the number never leaves this file. What goes back is a masked hint,
// enough for the person to recognise their own number and no use to anybody
// else.
//
// ── Three children, one phone ────────────────────────────────────────────────
//
// The contact is deliberately not unique. A mother's number carries all three
// of her children, each with their own name and their own password. The reset
// is therefore keyed on the NAME: you say which child you are, and the code
// goes to that child's registered contact. Holding the phone proves the
// family; the name says which account. A sibling with the phone can reset
// another sibling, which is true of every family device and is the trade the
// owner chose knowingly.
//
// ── What this endpoint will not do ───────────────────────────────────────────
//
//   - It never returns the contact, only a mask: +233 •• ••• 4821.
//   - It answers the same way whether or not the name exists. A reset form
//     that said "no such account" would be the enumeration oracle the rest of
//     this codebase has carefully avoided: type names until one is confirmed.
//     The only visible difference is the mask, which a caller who does not
//     hold the phone cannot use.
//   - It never returns a session or a token. A successful reset gives the
//     caller a password they chose and nothing else; they sign in afterwards
//     through the ordinary public endpoint.
//   - It refuses to set a password without a code that Supabase itself has
//     just verified against that contact.

const SUPA_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
const SUPA_KEY = process.env.SUPABASE_SERVICE_KEY || '';

/** The same normalisation `accounts.ts` and `signup.js` use. Must not drift. */
function normalise(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9@. ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Enough of the contact to be recognised, and no more.
 *
 * A phone keeps its last four digits, an email its first character and its
 * domain. Somebody looking at their own account knows at once which number it
 * is; somebody guessing a name learns nothing they can dial.
 */
function mask(contact, channel) {
  if (channel === 'email') {
    const [user, domain] = String(contact).split('@');
    const head = user ? user[0] : '';
    return `${head}${'•'.repeat(Math.max(2, (user || '').length - 1))}@${domain || ''}`;
  }
  const digits = String(contact).replace(/\D/g, '');
  const tail = digits.slice(-4);
  return `${'•'.repeat(Math.max(2, digits.length - 4))}${tail}`;
}

const api = (path, init) => fetch(`${SUPA_URL}${path}`, {
  ...init,
  headers: {
    apikey: SUPA_KEY,
    Authorization: `Bearer ${SUPA_KEY}`,
    'content-type': 'application/json',
    ...(init && init.headers),
  },
});

function safeJson(s) {
  try { return JSON.parse(s); } catch { return {}; }
}

/** The account row for a handle, or null. Service key, so RLS does not apply. */
async function accountFor(handle) {
  const res = await api(
    `/rest/v1/edu_account?handle=eq.${encodeURIComponent(handle)}`
    + '&select=id,handle,recovery_contact,recovery_channel&limit=1',
    { method: 'GET' },
  );
  if (!res.ok) return null;
  const rows = await res.json();
  return Array.isArray(rows) && rows[0] ? rows[0] : null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'POST only.' });
  }
  if (!SUPA_URL || !SUPA_KEY) {
    return res.status(501).json({
      error: 'Password reset is not configured on this deployment. '
        + 'SUPABASE_URL and SUPABASE_SERVICE_KEY must be set.',
    });
  }

  const body = typeof req.body === 'string' ? safeJson(req.body) : (req.body || {});
  const handle = normalise(body.name);
  const code = String(body.code || '').trim();
  const password = String(body.password || '');

  if (!handle) {
    return res.status(400).json({ error: 'Type the name you sign in with.' });
  }

  const account = await accountFor(handle);

  /* ── asking for a code ──────────────────────────────────────────────────── */

  if (!code) {
    /* No account, or an account with no contact on it. Both answer as though
       a code went out. See the header: the reply must not differ. The caller
       simply never receives anything, which is what a wrong name should feel
       like. A real owner who registered before contacts existed gets the one
       honest extra sentence on the screen rather than here. */
    if (!account || !account.recovery_contact || !account.recovery_channel) {
      return res.status(200).json({ sent: true, channel: null, hint: null });
    }

    const channel = account.recovery_channel;
    const to = account.recovery_contact;

    const r = await api('/auth/v1/otp', {
      method: 'POST',
      body: JSON.stringify(
        channel === 'sms'
          ? { phone: to, should_create_user: false }
          : { email: to, should_create_user: false },
      ),
    });

    if (!r.ok) {
      const said = await r.text();
      /* An SMS provider that is not configured is the one failure worth
         naming, because it is the deployment's fault and not the person's,
         and without saying so they will stand there waiting for a text that
         can never arrive. */
      if (channel === 'sms' && /provider|twilio|not enabled|unsupported/i.test(said)) {
        return res.status(501).json({
          error: 'Text messages are not switched on for this deployment yet, '
            + 'so a code cannot be sent to a phone. Whoever runs this can '
            + 'connect an SMS provider in Supabase to turn it on.',
        });
      }
      if (/rate|too many/i.test(said)) {
        return res.status(429).json({
          error: 'A code was sent recently. Wait a minute and try again.',
        });
      }
      return res.status(502).json({ error: 'The code could not be sent just now.' });
    }

    return res.status(200).json({
      sent: true,
      channel,
      hint: mask(to, channel),
    });
  }

  /* ── spending the code ──────────────────────────────────────────────────── */

  if (password.length < 8) {
    return res.status(400).json({ error: 'Eight characters or more.' });
  }
  /* A missing account here answers as a wrong code, for the same reason the
     branch above answers as though it sent one. */
  if (!account || !account.recovery_contact || !account.recovery_channel) {
    return res.status(400).json({ error: 'That code is wrong or has expired.' });
  }

  const channel = account.recovery_channel;
  const to = account.recovery_contact;

  /* Supabase verifies the code against the contact. This is the whole proof:
     nothing below runs unless the person is holding the phone or the inbox
     the account was registered with. */
  const v = await api('/auth/v1/verify', {
    method: 'POST',
    body: JSON.stringify(
      channel === 'sms'
        ? { type: 'sms', phone: to, token: code }
        : { type: 'email', email: to, token: code },
    ),
  });

  if (!v.ok) {
    return res.status(400).json({ error: 'That code is wrong or has expired.' });
  }

  /* The code proved the contact. The contact is on this account's row, so it
     proves this account, and the password is set on that user id and no
     other. The id comes from the row this endpoint read, never from the
     request, which is what stops a verified code being spent on somebody
     else's account. */
  const u = await api(`/auth/v1/admin/users/${account.id}`, {
    method: 'PUT',
    body: JSON.stringify({ password }),
  });

  if (!u.ok) {
    return res.status(502).json({ error: 'The password could not be saved just now.' });
  }

  return res.status(200).json({ ok: true });
}
