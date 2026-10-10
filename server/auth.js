import { createHash, randomBytes, randomUUID } from 'node:crypto';
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

export async function issueSession(db, userId, res, config) {
  const raw = token();
  await db.query('INSERT INTO sessions(token_hash,user_id,expires_at) VALUES($1,$2,$3)', [hash(raw), userId, new Date(Date.now() + 8 * 3600000)]);
  res.cookie(sessionCookie, raw, { ...cookieOptions(config), maxAge: 8 * 3600000 });
}

export function installAuth(app, db, config) {
  let discovery;
  const getOidc = () => {
    if (!config.oidcIssuer || !config.oidcClientId) throw httpError(503, 'Login ainda não configurado.');
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
  app.get('/api/v1/auth/status', (_req, res) => res.json({ configured: Boolean(config.oidcIssuer && config.oidcClientId), development: config.devAuth }));
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
      // A fresh provider authentication is also required before deleting an account.
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
    // Never link by email or let a claim promote a user to admin. Imported identities
    // must be explicitly mapped to issuer+subject by the migration operator.
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
    // Fixed local identities; no role/id supplied by the browser is trusted.
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
