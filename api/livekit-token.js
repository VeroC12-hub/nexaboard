// api/livekit-token.js
//
// Large class video through LiveKit (an open source SFU). The browser never
// holds the LiveKit secret: it asks here for a short lived access token, and
// this function decides what that token may do.
//
//   POST /api/livekit-token { action: 'status' }
//        -> { configured: boolean, url? }
//   POST /api/livekit-token { action: 'token', sessionId, participantId? }
//        Authorization: Bearer <supabase access token>   (teachers)
//        -> { token, url, identity, role }
//   POST /api/livekit-token { action: 'permit', sessionId, identity, allow }
//        Authorization: Bearer <supabase access token>   (the session's teacher)
//        -> { ok: true }
//
// ── Who gets what ───────────────────────────────────────────────────────────
//
// Teacher (signed in, owns the session): publish camera, microphone and
//   screen share, and is room admin.
// Student (anonymous participant row in an ACTIVE session): subscribe only.
//   A student can talk or show their camera only after the teacher "invites
//   them to speak", which goes through `permit` and LiveKit's own server API.
//   That is what makes it scale: 100 people download one or two streams, and
//   nobody uploads unless asked.
//
// ── Environment ─────────────────────────────────────────────────────────────
//
//   LIVEKIT_URL         wss://<project>.livekit.cloud (or your own server)
//   LIVEKIT_API_KEY
//   LIVEKIT_API_SECRET
//   SUPABASE_URL / VITE_SUPABASE_URL, SUPABASE_ANON_KEY / VITE_SUPABASE_ANON_KEY
//
// Without the three LiveKit values every action answers 503
// { error: 'not_configured' } (status answers { configured: false }) and the
// app falls back to direct video or broadcast mode.
//
// The token is a plain HS256 JWT built with node:crypto, which is all a
// LiveKit token is, so no server SDK has to be bundled into the function.

import crypto from 'node:crypto';

const LK_URL = process.env.LIVEKIT_URL || '';
const LK_KEY = process.env.LIVEKIT_API_KEY || '';
const LK_SECRET = process.env.LIVEKIT_API_SECRET || '';
const SUPA_URL = (process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '').replace(/\/+$/, '');
const SUPA_ANON = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const TOKEN_TTL_S = 6 * 60 * 60; // one long class

const configured = () => Boolean(LK_URL && LK_KEY && LK_SECRET && SUPA_URL && SUPA_ANON);
const roomFor = (sessionId) => `nexaboard-${sessionId}`;

function b64url(input) {
  return Buffer.from(input).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function sign(claims) {
  const header = b64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = b64url(JSON.stringify(claims));
  const sig = crypto.createHmac('sha256', LK_SECRET).update(`${header}.${body}`).digest('base64')
    .replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
  return `${header}.${body}.${sig}`;
}

function accessToken({ identity, name, room, grant, metadata }) {
  const now = Math.floor(Date.now() / 1000);
  return sign({
    iss: LK_KEY,
    sub: identity,
    nbf: now - 10,
    exp: now + TOKEN_TTL_S,
    name,
    metadata,
    video: { room, roomJoin: true, ...grant },
  });
}

async function supa(path, { token } = {}) {
  const r = await fetch(`${SUPA_URL}${path}`, {
    headers: { apikey: SUPA_ANON, Authorization: `Bearer ${token || SUPA_ANON}` },
  });
  const text = await r.text();
  let json = null;
  try { json = JSON.parse(text); } catch { /* not json */ }
  return { ok: r.ok, status: r.status, json };
}

/** The signed in user, if the bearer token is a valid Supabase session. */
async function userFrom(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || '';
  const m = /^Bearer\s+(.+)$/i.exec(String(h));
  if (!m) return null;
  const { ok, json } = await supa('/auth/v1/user', { token: m[1] });
  if (!ok || !json?.id) return null;
  return { id: json.id, token: m[1], name: json.user_metadata?.full_name || (json.email || '').split('@')[0] || 'Teacher' };
}

/** Does this user own this session? Read through RLS with their own token. */
async function ownsSession(user, sessionId) {
  const { ok, json } = await supa(
    `/rest/v1/sessions?select=id,teacher_id,status&id=eq.${sessionId}&teacher_id=eq.${user.id}`,
    { token: user.token },
  );
  return ok && Array.isArray(json) && json.length === 1 ? json[0] : null;
}

/** RoomService over Twirp, authorised by a short admin token for one room. */
async function updatePermission(room, identity, allow) {
  const httpUrl = LK_URL.replace(/^ws(s?):\/\//i, 'http$1://').replace(/\/+$/, '');
  const now = Math.floor(Date.now() / 1000);
  const admin = sign({ iss: LK_KEY, sub: 'nexaboard-server', nbf: now - 10, exp: now + 60, video: { room, roomAdmin: true } });
  const r = await fetch(`${httpUrl}/twirp/livekit.RoomService/UpdateParticipant`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${admin}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      room,
      identity,
      permission: {
        canSubscribe: true,
        canPublish: Boolean(allow),
        canPublishData: true,
      },
    }),
  });
  if (!r.ok) {
    const t = await r.text().catch(() => '');
    console.error('livekit permit', r.status, t.slice(0, 200));
    return false;
  }
  return true;
}

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const body = typeof req.body === 'object' && req.body ? req.body : {};
  const action = String(body.action || 'token');

  if (action === 'status') {
    return res.status(200).json({ configured: configured() });
  }
  if (!configured()) {
    return res.status(503).json({ error: 'not_configured' });
  }

  const sessionId = String(body.sessionId || '');
  if (!UUID.test(sessionId)) return res.status(400).json({ error: 'sessionId required' });
  const room = roomFor(sessionId);

  if (action === 'permit') {
    const user = await userFrom(req);
    if (!user) return res.status(401).json({ error: 'Sign in as the teacher.' });
    if (!(await ownsSession(user, sessionId))) return res.status(403).json({ error: 'Not your session.' });
    const identity = String(body.identity || '');
    if (!/^p:[0-9a-f-]{36}$/i.test(identity)) return res.status(400).json({ error: 'Bad identity.' });
    const ok = await updatePermission(room, identity, body.allow === true);
    return ok ? res.status(200).json({ ok: true }) : res.status(502).json({ error: 'LiveKit refused the change.' });
  }

  if (action !== 'token') return res.status(400).json({ error: 'Unknown action.' });

  // Teacher path: a valid Supabase session that owns this class.
  const user = await userFrom(req);
  if (user) {
    const s = await ownsSession(user, sessionId);
    if (s) {
      if (s.status !== 'active') return res.status(409).json({ error: 'This class has ended.' });
      const identity = `t:${user.id}:${crypto.randomBytes(3).toString('hex')}`;
      const token = accessToken({
        identity,
        name: String(body.name || user.name).slice(0, 60),
        room,
        metadata: JSON.stringify({ role: 'teacher' }),
        grant: { canPublish: true, canSubscribe: true, canPublishData: true, roomAdmin: true },
      });
      return res.status(200).json({ token, url: LK_URL, identity, role: 'teacher' });
    }
    // Signed in but not this session's teacher: fall through and be treated
    // as a student if they also sent a participant id.
  }

  // Student path: an active participant row in an active session.
  const participantId = String(body.participantId || '');
  if (!UUID.test(participantId)) return res.status(401).json({ error: 'Join the class first.' });
  const p = await supa(
    `/rest/v1/session_participants?select=id,name,is_active,session_id&id=eq.${participantId}&session_id=eq.${sessionId}`,
  );
  const part = p.ok && Array.isArray(p.json) ? p.json[0] : null;
  if (!part || part.is_active === false) return res.status(403).json({ error: 'You are not in this class.' });
  const s = await supa(`/rest/v1/sessions?select=id,status&id=eq.${sessionId}`);
  if (!s.ok || !Array.isArray(s.json) || s.json[0]?.status !== 'active') {
    return res.status(409).json({ error: 'This class is not live.' });
  }

  const token = accessToken({
    identity: `p:${participantId}`,
    name: String(part.name || 'Student').slice(0, 60),
    room,
    metadata: JSON.stringify({ role: 'student' }),
    // Listen and watch, chat over data, raise a hand. No media until invited.
    grant: { canPublish: false, canSubscribe: true, canPublishData: true },
  });
  return res.status(200).json({ token, url: LK_URL, identity: `p:${participantId}`, role: 'student' });
}
