import { createHash, randomBytes, randomUUID, scryptSync, timingSafeEqual } from 'node:crypto';
import * as oidc from 'openid-client';
import { z } from 'zod';
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

export const sessionMiddleware = db => async (req, _res, next) => {
  const raw = req.cookies?.[sessionCookie];
  if (raw) {
    const { rows } = await db.query(
      'SELECT u.*, s.authenticated_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.expires_at>now()',
      [hash(raw)]
    );
    const user = rows[0];
    if (user) {
      req.user = user;
    }
  }
  next();
};

export const registerSchema = z.object({
  email: z.string().trim().email('Informe um endereço de e-mail válido.').max(254),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.').max(128),
  full_name: z.string().trim().max(100).optional(),
}).strict();

export const loginSchema = z.object({
  email: z.string().trim().email('Informe um endereço de e-mail válido.').max(254),
  password: z.string().min(1, 'Informe e-mail e senha.').max(128),
}).strict();

export const profileUpdateSchema = z.object({
  full_name: z.string().trim().min(1, 'O nome não pode estar em branco.').max(100).optional(),
  email: z.string().trim().email('Informe um endereço de e-mail válido.').max(254).optional(),
  current_password: z.string().max(128).optional(),
  new_password: z.string().min(6, 'A nova senha deve ter no mínimo 6 caracteres.').max(128).optional(),
  drive_folder_url: z.string().trim().max(500).optional(),
}).strict();

export const googleVerifySchema = z.object({
  credential: z.string().min(1, 'Credencial Google não fornecida.').max(10000),
}).strict();

export const changePasswordSchema = z.object({
  current_password: z.string().min(1, 'Informe a senha atual.').max(128),
  new_password: z.string().min(6, 'A nova senha deve ter no mínimo 6 caracteres.').max(128),
}).strict();

export function installAuth(app, db, config) {
  let discovery;
  const getOidc = () => {
    if (!config.oidcIssuer || !config.oidcClientId) throw httpError(503, 'Login Google/OIDC ainda não configurado.');
    return discovery ||= oidc.discovery(new URL(config.oidcIssuer), config.oidcClientId, config.oidcClientSecret).catch(error => { discovery = undefined; throw error; });
  };
  app.use('/api', (req, res, next) => {
    if (req.user) return next();
    return sessionMiddleware(db)(req, res, next);
  });
  app.get('/api/v1/me', (req, res) => {
    if (!req.user) throw httpError(401, 'Entre para continuar.');
    const { id, email, full_name, role, drive_folder_url } = req.user;
    res.json({ id, email, full_name, role, drive_folder_url: drive_folder_url || '' });
  });

  app.get('/api/v1/auth/status', (_req, res) => res.json({
    configured: Boolean(config.oidcIssuer && config.oidcClientId),
    googleConfigured: Boolean(config.oidcClientId || (config.oidcIssuer && config.oidcIssuer.includes('google'))),
    googleClientId: config.oidcClientId || '',
    localAuth: true,
    development: config.devAuth
  }));

  // ── Update Profile (Name, Email, Password, Drive Folder) ──
  app.patch('/api/v1/me', async (req, res) => {
    if (!req.user) throw httpError(401, 'Entre para continuar.');
    const body = profileUpdateSchema.parse(req.body);

    let cleanName = req.user.full_name;
    if (body.full_name !== undefined) {
      cleanName = body.full_name;
    }

    let cleanEmail = req.user.email;
    if (body.email !== undefined && body.email.toLowerCase() !== (req.user.email || '').toLowerCase()) {
      cleanEmail = body.email.toLowerCase();
      const existing = await db.query('SELECT id FROM users WHERE lower(email)=$1 AND id != $2', [cleanEmail, req.user.id]);
      if (existing.rows.length > 0) {
        throw httpError(409, 'Este endereço de e-mail já está sendo utilizado por outra conta.');
      }
    }

    let cleanDriveUrl = req.user.drive_folder_url || '';
    if (body.drive_folder_url !== undefined) {
      cleanDriveUrl = body.drive_folder_url;
    }

    let newHash = req.user.password_hash;
    if (body.new_password) {
      if (req.user.password_hash) {
        if (!body.current_password || !verifyPassword(body.current_password, req.user.password_hash)) {
          throw httpError(401, 'A senha atual informada está incorreta.');
        }
      }
      newHash = hashPassword(body.new_password);
    }

    const { rows } = await db.query(
      `UPDATE users
       SET full_name=$1, email=$2, password_hash=$3, drive_folder_url=$4
       WHERE id=$5
       RETURNING id, email, full_name, role, drive_folder_url`,
      [cleanName, cleanEmail, newHash, cleanDriveUrl, req.user.id]
    );

    res.json({ ok: true, user: rows[0] });
  });

  // ── Change Password Dedicated Endpoint ──
  app.post('/api/v1/auth/change-password', async (req, res) => {
    if (!req.user) throw httpError(401, 'Entre para continuar.');
    const body = changePasswordSchema.parse(req.body);
    if (req.user.password_hash) {
      if (!verifyPassword(body.current_password, req.user.password_hash)) {
        throw httpError(401, 'A senha atual informada está incorreta.');
      }
    }
    const newHash = hashPassword(body.new_password);
    await db.query('UPDATE users SET password_hash=$1 WHERE id=$2', [newHash, req.user.id]);
    res.json({ ok: true });
  });

  // ── Local User Registration ──
  app.post('/api/v1/auth/register', async (req, res) => {
    const body = registerSchema.parse(req.body);
    const cleanEmail = body.email.toLowerCase();
    const cleanName = body.full_name || 'Usuário';

    const existing = await db.query('SELECT id FROM users WHERE lower(email)=$1', [cleanEmail]);
    if (existing.rows.length > 0) {
      throw httpError(409, 'Este e-mail já está cadastrado. Por favor, faça login.');
    }

    const pHash = hashPassword(body.password);
    const userId = randomUUID();
    const role = 'user';

    const { rows: users } = await db.query(
      `INSERT INTO users(id, issuer, subject, email, full_name, password_hash, role)
       VALUES($1, 'local', $2, $3, $4, $5, $6)
       RETURNING id, email, full_name, role`,
      [userId, cleanEmail, cleanEmail, cleanName, pHash, role]
    );

    if (req.cookies[sessionCookie]) await db.query('DELETE FROM sessions WHERE token_hash=$1', [hash(req.cookies[sessionCookie])]);
    await issueSession(db, users[0].id, res, config);
    res.json({ ok: true, user: users[0] });
  });

  // ── Local User Login ──
  app.post('/api/v1/auth/login', async (req, res) => {
    const body = loginSchema.parse(req.body);
    const cleanEmail = body.email.toLowerCase();
    const { rows } = await db.query(
      'SELECT id, email, full_name, role, password_hash FROM users WHERE lower(email)=$1 AND password_hash IS NOT NULL',
      [cleanEmail]
    );
    const user = rows[0];
    if (!user || !verifyPassword(body.password, user.password_hash)) {
      throw httpError(401, 'E-mail ou senha incorretos.');
    }

    if (req.cookies[sessionCookie]) await db.query('DELETE FROM sessions WHERE token_hash=$1', [hash(req.cookies[sessionCookie])]);
    await issueSession(db, user.id, res, config);
    res.json({ ok: true, user: { id: user.id, email: user.email, full_name: user.full_name, role: user.role } });
  });

  // ── Google Sign-in Verification (GIS / ID Token) ──
  app.post('/api/v1/auth/google/verify', async (req, res) => {
    const body = googleVerifySchema.parse(req.body);
    let googleUser;
    try {
      const gRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(body.credential)}`, {
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
    const role = 'user';

    const { rows: users } = await db.query(
      `INSERT INTO users(id, issuer, subject, email, full_name, role)
       VALUES($1, 'https://accounts.google.com', $2, $3, $4, $5)
       ON CONFLICT(issuer, subject) DO UPDATE SET email=excluded.email, full_name=excluded.full_name
       RETURNING id, email, full_name, role`,
      [randomUUID(), sub, email, name, role]
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
    const email = claims.email_verified === true ? (claims.email || '').toLowerCase() : '';
    const role = 'user';
    const { rows: users } = await db.query(`INSERT INTO users(id,issuer,subject,email,full_name,role)
      VALUES($1,$2,$3,$4,$5,$6) ON CONFLICT(issuer,subject) DO UPDATE SET email=excluded.email,full_name=excluded.full_name RETURNING id`,
      [randomUUID(), issuer, claims.sub, email, claims.name || 'Usuário', role]);
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
