import { createHash, randomBytes, randomUUID, scryptSync, timingSafeEqual } from 'node:crypto';
import * as oidc from 'openid-client';
import { httpError } from './schemas.js';

export const hash = value => createHash('sha256').update(value).digest('hex');
const token = () => randomBytes(32).toString('base64url');
export const sessionCookie = 'pedbox_session';
const cookieOptions = config => ({ httpOnly: true, secure: config.production, sameSite: 'lax', path: '/' });
export function returnPath(value, origin) {
  try {
    const url = new URL(typeof value === 'string' ? value : '/', origin);
    return url.origin === origin ? url.pathname + url.search + url.hash : '/';
  } catch { return '/'; }
}

export function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const derived = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${derived}`;
}

export function verifyPassword(password, stored) {
  if (!stored || typeof stored !== 'string' || !stored.includes(':')) return false;
  const [salt, key] = stored.split(':');
  const derived = scryptSync(password, salt, 64);
  const keyBuf = Buffer.from(key, 'hex');
  return derived.length === keyBuf.length && timingSafeEqual(derived, keyBuf);
}

export async function issueSession(db, userId, res, config) {
  const raw = token();
  await db.query('INSERT INTO sessions(token_hash,user_id,expires_at) VALUES($1,$2,$3)', [hash(raw), userId, new Date(Date.now() + 8 * 3600000)]);
  res.cookie(sessionCookie, raw, { ...cookieOptions(config), maxAge: 8 * 3600000 });
}

export function installAuth(app, db, config) {
  let discovery;
  const getOidc = () => {
    if (!config.oidcIssuer || !config.oidcClientId) throw httpError(503, 'Login Google/OIDC ainda não configurado.');
    return discovery ||= oidc.discovery(new URL(config.oidcIssuer), config.oidcClientId, config.oidcClientSecret).catch(error => { discovery = undefined; throw error; });
  };
  app.use('/api', async (req, _res, next) => {
    const raw = req.cookies[sessionCookie];
    if (raw) {
      const { rows } = await db.query('SELECT u.*, s.authenticated_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.expires_at>now()', [hash(raw)]);
      req.user = rows[0];
    }
    next();
  });
  app.get('/api/v1/me', (req, res) => {
    if (!req.user) throw httpError(401, 'Entre para continuar.');
    const { id, email, full_name, role } = req.user;
    res.json({ id, email, full_name, role });
  });

  app.get('/api/v1/auth/status', (_req, res) => res.json({
    configured: Boolean(config.oidcIssuer && config.oidcClientId),
    googleConfigured: Boolean(config.oidcClientId || (config.oidcIssuer && config.oidcIssuer.includes('google'))),
    googleClientId: config.oidcClientId || '',
    localAuth: true,
    development: config.devAuth
  }));

  // ── Local User Registration ──
  app.post('/api/v1/auth/register', async (req, res) => {
    const { email, password, full_name } = req.body || {};
    if (!email || typeof email !== 'string' || !email.includes('@') || email.length > 254) {
      throw httpError(400, 'Informe um endereço de e-mail válido.');
    }
    if (!password || typeof password !== 'string' || password.length < 6) {
      throw httpError(400, 'A senha deve ter no mínimo 6 caracteres.');
    }
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = typeof full_name === 'string' && full_name.trim() ? full_name.trim().slice(0, 100) : 'Usuário';

    const existing = await db.query('SELECT id FROM users WHERE lower(email)=$1', [cleanEmail]);
    if (existing.rows.length > 0) {
      throw httpError(409, 'Este e-mail já está cadastrado. Por favor, faça login.');
    }

    const pHash = hashPassword(password);
    const userId = randomUUID();
    const { rows: users } = await db.query(
      `INSERT INTO users(id, issuer, subject, email, full_name, password_hash, role)
       VALUES($1, 'local', $2, $3, $4, $5, 'user')
       RETURNING id, email, full_name, role`,
      [userId, cleanEmail, cleanEmail, cleanName, pHash]
    );

    if (req.cookies[sessionCookie]) await db.query('DELETE FROM sessions WHERE token_hash=$1', [hash(req.cookies[sessionCookie])]);
    await issueSession(db, users[0].id, res, config);
    res.json({ ok: true, user: users[0] });
  });

  // ── Local User Login ──
  app.post('/api/v1/auth/login', async (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
      throw httpError(400, 'Informe e-mail e senha.');
    }
    const cleanEmail = email.trim().toLowerCase();
    const { rows } = await db.query(
      'SELECT id, email, full_name, role, password_hash FROM users WHERE lower(email)=$1 AND password_hash IS NOT NULL',
      [cleanEmail]
    );
    const user = rows[0];
    if (!user || !verifyPassword(password, user.password_hash)) {
      throw httpError(401, 'E-mail ou senha incorretos.');
    }

    if (req.cookies[sessionCookie]) await db.query('DELETE FROM sessions WHERE token_hash=$1', [hash(req.cookies[sessionCookie])]);
    await issueSession(db, user.id, res, config);
    res.json({ ok: true, user: { id: user.id, email: user.email, full_name: user.full_name, role: user.role } });
  });

  // ── Google Sign-in Verification (GIS / ID Token) ──
  app.post('/api/v1/auth/google/verify', async (req, res) => {
    const { credential } = req.body || {};
    if (!credential || typeof credential !== 'string') {
      throw httpError(400, 'Credencial Google não fornecida.');
    }
    let googleUser;
    try {
      const gRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`, {
        signal: AbortSignal.timeout(10000)
      });
      if (!gRes.ok) throw new Error('Token rejeitado pelo Google');
      googleUser = await gRes.json();
    } catch {
      throw httpError(401, 'Não foi possível validar o login com o Google.');
    }

    if (!googleUser || !googleUser.sub || !googleUser.email) {
      throw httpError(401, 'Resposta inválida do serviço Google.');
    }

    const email = googleUser.email.toLowerCase();
    const name = googleUser.name || googleUser.given_name || 'Usuário';
    const sub = googleUser.sub;

    const { rows: users } = await db.query(
      `INSERT INTO users(id, issuer, subject, email, full_name)
       VALUES($1, 'https://accounts.google.com', $2, $3, $4)
       ON CONFLICT(issuer, subject) DO UPDATE SET email=excluded.email, full_name=excluded.full_name
       RETURNING id, email, full_name, role`,
      [randomUUID(), sub, email, name]
    );

    if (req.cookies[sessionCookie]) await db.query('DELETE FROM sessions WHERE token_hash=$1', [hash(req.cookies[sessionCookie])]);
    await issueSession(db, users[0].id, res, config);
    res.json({ ok: true, user: users[0] });
  });

  // ── OIDC Provider Flow (Redirect) ──
  app.get('/api/v1/auth/login', async (req, res) => {
    const provider = await getOidc();
    const raw = token(), state = oidc.randomState(), nonce = oidc.randomNonce();
    const verifier = oidc.randomPKCECodeVerifier();
    await db.query('DELETE FROM login_attempts WHERE expires_at<now()');
    await db.query('INSERT INTO login_attempts(token_hash,state,nonce,verifier,return_to,expires_at) VALUES($1,$2,$3,$4,$5,$6)',
      [hash(raw), state, nonce, verifier, returnPath(req.query.returnTo, config.origin), new Date(Date.now() + 600000)]);
    res.cookie('pedbox_login', raw, { ...cookieOptions(config), maxAge: 600000 });
    res.redirect(oidc.buildAuthorizationUrl(provider, {
      redirect_uri: config.origin + '/api/v1/auth/callback', scope: 'openid email profile',
      code_challenge: await oidc.calculatePKCECodeChallenge(verifier), code_challenge_method: 'S256', state, nonce,
      max_age: '0',
    }).href);
  });
  app.get('/api/v1/auth/callback', async (req, res) => {
    const raw = req.cookies.pedbox_login;
    if (!raw) throw httpError(400, 'Login expirado. Tente novamente.');
    const { rows } = await db.query('DELETE FROM login_attempts WHERE token_hash=$1 AND expires_at>now() RETURNING *', [hash(raw)]);
    const attempt = rows[0];
    res.clearCookie('pedbox_login', cookieOptions(config));
    if (!attempt) throw httpError(400, 'Login expirado. Tente novamente.');
    const provider = await getOidc();
    const tokens = await oidc.authorizationCodeGrant(provider, new URL(req.originalUrl, config.origin), {
      pkceCodeVerifier: attempt.verifier, expectedState: attempt.state, expectedNonce: attempt.nonce, idTokenExpected: true,
    });
    const claims = tokens.claims();
    if (!claims?.sub) throw httpError(401, 'Identidade inválida.');
    if (typeof claims.auth_time !== 'number' || Math.abs(Date.now() / 1000 - claims.auth_time) > 300) throw httpError(401, 'O provedor não confirmou uma autenticação recente. Entre novamente.');
    const issuer = provider.serverMetadata().issuer;
    const { rows: users } = await db.query(`INSERT INTO users(id,issuer,subject,email,full_name)
      VALUES($1,$2,$3,$4,$5) ON CONFLICT(issuer,subject) DO UPDATE SET email=excluded.email,full_name=excluded.full_name RETURNING id`,
      [randomUUID(), issuer, claims.sub, claims.email_verified === true ? claims.email || '' : '', claims.name || 'Usuário']);
    if (req.cookies[sessionCookie]) await db.query('DELETE FROM sessions WHERE token_hash=$1', [hash(req.cookies[sessionCookie])]);
    await issueSession(db, users[0].id, res, config);
    res.redirect(attempt.return_to);
  });
  app.post('/api/v1/auth/dev-login', async (req, res) => {
    const loopback = ['127.0.0.1','::1','::ffff:127.0.0.1'].includes(req.socket.remoteAddress);
    if (!config.devAuth || config.production || !loopback) throw httpError(404, 'Não encontrado.');
    const { rows } = await db.query(`INSERT INTO users(id,issuer,subject,email,full_name,role)
      VALUES('local-developer','local','developer','developer@localhost','Desenvolvimento local','admin')
      ON CONFLICT(id) DO UPDATE SET full_name=excluded.full_name RETURNING id`);
    if (req.cookies[sessionCookie]) await db.query('DELETE FROM sessions WHERE token_hash=$1', [hash(req.cookies[sessionCookie])]);
    await issueSession(db, rows[0].id, res, config);
    res.json({ ok: true });
  });
  app.post('/api/v1/logout', async (req, res) => {
    if (req.cookies[sessionCookie]) await db.query('DELETE FROM sessions WHERE token_hash=$1', [hash(req.cookies[sessionCookie])]);
    res.clearCookie(sessionCookie, cookieOptions(config));
    res.json({ ok: true });
  });
  app.delete('/api/v1/me', async (req, res) => {
    if (!req.user) throw httpError(401, 'Entre para continuar.');
    if (Date.now() - new Date(req.user.authenticated_at).getTime() > 300000) throw httpError(403, 'Entre novamente antes de excluir sua conta.');
    await db.query('DELETE FROM users WHERE id=$1', [req.user.id]);
    res.clearCookie(sessionCookie, cookieOptions(config));
    res.json({ ok: true });
  });
}
