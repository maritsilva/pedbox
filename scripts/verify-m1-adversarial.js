import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import request from 'supertest';
import { openDatabase, migrate } from '../server/db.js';
import { createApp } from '../server/app.js';
import { collections } from '../server/schemas.js';

let passed = 0;
let failed = 0;

function report(name, ok, err = null) {
  if (ok) {
    passed++;
    console.log(`  [PASS] ${name}`);
  } else {
    failed++;
    console.error(`  [FAIL] ${name}:`, err);
  }
}

async function run() {
  console.log('=== EMPIRICAL CHALLENGER STRESS SUITE (M1) ===\n');

  const folder = await mkdtemp(join(tmpdir(), 'pedbox-challenger-'));
  const db = await openDatabase({ directory: 'memory://' });
  await migrate(db);

  const configDev = {
    production: false,
    origin: 'http://localhost:5173',
    devAuth: false,
    uploadDirectory: folder,
    trustProxyHops: 0,
    contactTo: 'marina@pedbox.app',
    mailFrom: 'PedBox <marina@pedbox.app>',
  };

  const configProd = {
    production: true,
    origin: 'https://pedbox.app',
    devAuth: false,
    uploadDirectory: folder,
    trustProxyHops: 0,
    contactTo: 'marina@pedbox.app',
    mailFrom: 'PedBox <marina@pedbox.app>',
  };

  const sentMails = [];
  const mockMailTransport = {
    sendMail: async (mail) => {
      sentMails.push(mail);
      return { messageId: 'test-' + randomUUID() };
    },
  };

  const appDev = createApp({ db, config: configDev, integrations: { mail: mockMailTransport } });
  const appProd = createApp({ db, config: configProd, integrations: { mail: mockMailTransport } });

  try {
    console.log('--- 1. AUTHENTICATION & PRIVILEGE ESCALATION ---');

    // 1.1 Register marina@pedbox.app -> must receive role 'user'
    {
      const res = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({
          email: 'marina@pedbox.app',
          password: 'senhaForte123!',
          full_name: 'Dra. Marina Silva',
        });
      report('1.1 Register marina@pedbox.app assigns role: user', res.status === 200 && res.body.user.role === 'user');
    }

    // 1.2 Register with case variations e.g. uppercase
    {
      const res = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({
          email: 'OUTRO_ADMIN@pedbox.app',
          password: 'senhaForte123!',
          full_name: 'Outro Admin',
        });
      report('1.2 Register uppercase email assigns role: user', res.status === 200 && res.body.user.role === 'user');
    }

    // 1.3 Mass assignment: passing role in register
    {
      const res = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({
          email: 'hacker@pedbox.app',
          password: 'senhaForte123!',
          role: 'admin',
        });
      report('1.3 Register rejects role in body with 422', res.status === 422);
    }

    // 1.4 Extra unexpected fields in register
    {
      const res = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({
          email: 'hacker2@pedbox.app',
          password: 'senhaForte123!',
          is_admin: true,
          permissions: ['*'],
        });
      report('1.4 Register rejects unexpected fields with 422', res.status === 422);
    }

    // 1.5 Short password (< 6 chars)
    {
      const res = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({
          email: 'curto@pedbox.app',
          password: '123',
        });
      report('1.5 Register rejects short password (<6) with 422', res.status === 422);
    }

    // 1.6 Password length > 128 chars
    {
      const res = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({
          email: 'longo@pedbox.app',
          password: 'a'.repeat(129),
        });
      report('1.6 Register rejects password > 128 with 422', res.status === 422);
    }

    // 1.7 Invalid email formats
    {
      const res1 = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({ email: 'not-an-email', password: 'senhaForte123!' });
      const res2 = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({ email: 'test@', password: 'senhaForte123!' });
      report('1.7 Register rejects invalid email formats with 422', res1.status === 422 && res2.status === 422);
    }

    // 1.8 Duplicate registration returns 409
    {
      const res = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({
          email: 'marina@pedbox.app',
          password: 'outraSenha123!',
        });
      report('1.8 Duplicate registration returns 409 Conflict', res.status === 409);
    }

    // 1.9 Valid login returns session cookie and correct role from DB
    let userCookie;
    {
      const res = await request(appDev)
        .post('/api/v1/auth/login')
        .set('Origin', configDev.origin)
        .send({
          email: 'marina@pedbox.app',
          password: 'senhaForte123!',
        });
      userCookie = res.headers['set-cookie'];
      report('1.9 Valid login succeeds with role: user', res.status === 200 && res.body.user.role === 'user' && Boolean(userCookie));
    }

    // 1.10 Case-insensitive email login
    {
      const res = await request(appDev)
        .post('/api/v1/auth/login')
        .set('Origin', configDev.origin)
        .send({
          email: 'MARINA@PEDBOX.APP',
          password: 'senhaForte123!',
        });
      report('1.10 Case-insensitive email login succeeds', res.status === 200 && res.body.user.email === 'marina@pedbox.app');
    }

    // 1.11 Login schema strictness
    {
      const res = await request(appDev)
        .post('/api/v1/auth/login')
        .set('Origin', configDev.origin)
        .send({
          email: 'marina@pedbox.app',
          password: 'senhaForte123!',
          role: 'admin',
        });
      report('1.11 Login rejects extra fields with 422', res.status === 422);
    }

    // 1.12 Wrong password returns 401
    {
      const res = await request(appDev)
        .post('/api/v1/auth/login')
        .set('Origin', configDev.origin)
        .send({
          email: 'marina@pedbox.app',
          password: 'senhaErrada123!',
        });
      report('1.12 Wrong password returns 401', res.status === 401);
    }

    // 1.13 Nonexistent email returns 401
    {
      const res = await request(appDev)
        .post('/api/v1/auth/login')
        .set('Origin', configDev.origin)
        .send({
          email: 'nonexistent@pedbox.app',
          password: 'senhaQualquer123!',
        });
      report('1.13 Nonexistent email returns 401', res.status === 401);
    }

    // 1.14 PATCH /api/v1/me rejects role escalation with 422
    {
      const res = await request(appDev)
        .patch('/api/v1/me')
        .set('Origin', configDev.origin)
        .set('Cookie', userCookie)
        .send({ role: 'admin' });
      report('1.14 PATCH /me rejects role parameter with 422', res.status === 422);
    }

    // 1.15 PATCH /api/v1/me rejects unexpected fields with 422
    {
      const res = await request(appDev)
        .patch('/api/v1/me')
        .set('Origin', configDev.origin)
        .set('Cookie', userCookie)
        .send({ is_admin: true, permissions: ['admin'] });
      report('1.15 PATCH /me rejects extra parameters with 422', res.status === 422);
    }

    // 1.16 Promote user to admin via DB, then test PATCH /me does NOT demote
    let adminCookie;
    {
      await db.query("UPDATE users SET role = 'admin' WHERE email = 'marina@pedbox.app'");
      const resLogin = await request(appDev)
        .post('/api/v1/auth/login')
        .set('Origin', configDev.origin)
        .send({ email: 'marina@pedbox.app', password: 'senhaForte123!' });
      adminCookie = resLogin.headers['set-cookie'];

      const resPatch = await request(appDev)
        .patch('/api/v1/me')
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie)
        .send({ full_name: 'Dra. Marina Santos' });
      report('1.16 PATCH /me preserves admin role without demotion', resPatch.status === 200 && resPatch.body.user.role === 'admin');
    }

    // 1.17 PATCH /me email conflict check (409)
    {
      const res = await request(appDev)
        .patch('/api/v1/me')
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie)
        .send({ email: 'outro_admin@pedbox.app' });
      report('1.17 PATCH /me duplicate email returns 409', res.status === 409);
    }

    // 1.18 PATCH /me password change: incorrect current password -> 401
    {
      const res = await request(appDev)
        .patch('/api/v1/me')
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie)
        .send({ current_password: 'senhaErrada!', new_password: 'novaSenha123!' });
      report('1.18 PATCH /me wrong current password returns 401', res.status === 401);
    }

    // 1.19 POST /api/v1/auth/change-password endpoint
    {
      // unauthenticated
      const resUnauth = await request(appDev)
        .post('/api/v1/auth/change-password')
        .set('Origin', configDev.origin)
        .send({ current_password: 'senhaForte123!', new_password: 'novaSenha123!' });

      // wrong password
      const resWrong = await request(appDev)
        .post('/api/v1/auth/change-password')
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie)
        .send({ current_password: 'senhaErrada!', new_password: 'novaSenha123!' });

      // correct password
      const resCorrect = await request(appDev)
        .post('/api/v1/auth/change-password')
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie)
        .send({ current_password: 'senhaForte123!', new_password: 'novaSenha123!' });

      // verify login with new password
      const resNewLogin = await request(appDev)
        .post('/api/v1/auth/login')
        .set('Origin', configDev.origin)
        .send({ email: 'marina@pedbox.app', password: 'novaSenha123!' });

      adminCookie = resNewLogin.headers['set-cookie'];

      report(
        '1.19 POST /auth/change-password enforces auth, validates current pw, and applies new pw',
        resUnauth.status === 401 && resWrong.status === 401 && resCorrect.status === 200 && resNewLogin.status === 200
      );
    }

    // 1.20 Admin authorization HTTP status codes (401 unauthenticated, 403 non-admin, 200 admin)
    {
      // Create regular user
      const resRegUser = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({ email: 'comum@pedbox.app', password: 'senhaForte123!' });
      const regUserCookie = resRegUser.headers['set-cookie'];

      const res401 = await request(appDev)
        .get('/api/v1/admin/analytics')
        .set('Origin', configDev.origin);

      const res403 = await request(appDev)
        .get('/api/v1/admin/analytics')
        .set('Origin', configDev.origin)
        .set('Cookie', regUserCookie);

      const res200 = await request(appDev)
        .get('/api/v1/admin/analytics')
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie);

      report(
        '1.20 Admin endpoints return 401 (unauth), 403 (forbidden for regular user), 200 (admin)',
        res401.status === 401 && res403.status === 403 && res200.status === 200
      );
    }

    console.log('\n--- 2. CONTENT-SECURITY-POLICY (CSP) HEADERS ---');

    // 2.1 CSP header on health check response
    {
      const res = await request(appDev).get('/api/v1/health');
      const csp = res.headers['content-security-policy'] || '';
      report('2.1 CSP header present on API response', Boolean(csp));

      const hasDefaultSrc = csp.includes("default-src 'self'");
      const hasScriptSrc = csp.includes("script-src 'self' 'unsafe-inline' https://accounts.google.com https://www.googletagmanager.com");
      const hasStyleSrc = csp.includes("style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://accounts.google.com");
      const hasFontSrc = csp.includes("font-src 'self' https://fonts.gstatic.com data:");
      const hasImgSrc = csp.includes("img-src 'self' data: blob: https://*.googleusercontent.com https://www.googletagmanager.com");
      const hasConnectSrc = csp.includes("https://accounts.google.com") && csp.includes("https://www.google-analytics.com");
      const hasFrameSrc = csp.includes("https://drive.google.com") && csp.includes("https://docs.google.com");
      const hasObjectSrc = csp.includes("object-src 'none'");
      const hasBaseUri = csp.includes("base-uri 'self'");

      report(
        '2.2 CSP contains all required origins (Google Auth, GA4, Drive, Fonts, self)',
        hasDefaultSrc && hasScriptSrc && hasStyleSrc && hasFontSrc && hasImgSrc && hasConnectSrc && hasFrameSrc && hasObjectSrc && hasBaseUri
      );
    }

    // 2.3 Production mode CSP and HSTS
    {
      const res = await request(appProd).get('/api/v1/health');
      const csp = res.headers['content-security-policy'] || '';
      const hsts = res.headers['strict-transport-security'];
      const hasUpgrade = csp.includes('upgrade-insecure-requests');
      report('2.3 Production mode includes upgrade-insecure-requests and HSTS', hasUpgrade && Boolean(hsts));
    }

    // 2.4 Upload static directory sandbox CSP
    {
      // Create a test file in upload dir
      const testFile = join(folder, 'test.png');
      const pngBuf = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jFuoAAAAASUVORK5CYII=', 'base64');
      const { writeFile } = await import('node:fs/promises');
      await writeFile(testFile, pngBuf);

      const res = await request(appDev).get('/uploads/test.png');
      const csp = res.headers['content-security-policy'] || '';
      report('2.4 Static uploads enforce sandbox CSP (default-src \'none\'; sandbox)', csp.includes("default-src 'none'; sandbox"));
    }

    console.log('\n--- 3. RATE LIMITING ON /api/v1/auth AND /api/v1/me ---');

    // Create fresh isolated DB and app to test rate limits cleanly
    const rlDb = await openDatabase({ directory: 'memory://' });
    await migrate(rlDb);
    const rlApp = createApp({ db: rlDb, config: configDev });

    // 3.1 Rate limit on /api/v1/auth (30 requests allowed, 31st rejected)
    {
      let all30Ok = true;
      for (let i = 1; i <= 30; i++) {
        const res = await request(rlApp)
          .get('/api/v1/auth/status')
          .set('Origin', configDev.origin);
        if (res.status !== 200) {
          all30Ok = false;
          break;
        }
      }
      const res31 = await request(rlApp)
        .get('/api/v1/auth/status')
        .set('Origin', configDev.origin);

      report('3.1 /api/v1/auth permits exactly 30 requests and returns 429 on 31st', all30Ok && res31.status === 429);
      report('3.1b 429 error message is user-friendly', res31.body.error === 'Muitas solicitações. Aguarde e tente novamente.');
    }

    // 3.2 Expiry reset on rate limiter
    {
      // Set reset_at to past
      await rlDb.query("UPDATE request_limits SET reset_at = now() - interval '1 second' WHERE key LIKE 'auth:%'");
      const resAfterReset = await request(rlApp)
        .get('/api/v1/auth/status')
        .set('Origin', configDev.origin);
      report('3.2 Expired rate limit window resets counter cleanly', resAfterReset.status === 200);
    }

    // 3.3 Rate limit on /api/v1/me (60 requests allowed, 61st rejected)
    {
      // Create and login user
      await request(rlApp)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({ email: 'rl_user@pedbox.app', password: 'senhaForte123!' });

      const resLog = await request(rlApp)
        .post('/api/v1/auth/login')
        .set('Origin', configDev.origin)
        .send({ email: 'rl_user@pedbox.app', password: 'senhaForte123!' });
      const rlCookie = resLog.headers['set-cookie'];

      let all60Ok = true;
      for (let i = 1; i <= 60; i++) {
        const res = await request(rlApp)
          .get('/api/v1/me')
          .set('Origin', configDev.origin)
          .set('Cookie', rlCookie);
        if (res.status !== 200) {
          all60Ok = false;
          break;
        }
      }

      const res61 = await request(rlApp)
        .get('/api/v1/me')
        .set('Origin', configDev.origin)
        .set('Cookie', rlCookie);

      report('3.3 /api/v1/me permits exactly 60 requests and returns 429 on 61st', all60Ok && res61.status === 429);

      // Verify user isolation: another user is NOT blocked by rl_user's limit
      await request(rlApp)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({ email: 'rl_user2@pedbox.app', password: 'senhaForte123!' });

      const resLog2 = await request(rlApp)
        .post('/api/v1/auth/login')
        .set('Origin', configDev.origin)
        .send({ email: 'rl_user2@pedbox.app', password: 'senhaForte123!' });
      const rlCookie2 = resLog2.headers['set-cookie'];

      const resOtherUser = await request(rlApp)
        .get('/api/v1/me')
        .set('Origin', configDev.origin)
        .set('Cookie', rlCookie2);

      report('3.4 /api/v1/me rate limiting isolates different authenticated users', resOtherUser.status === 200);
    }

    // 3.5 IP Spoofing check when trustProxyHops is 0
    {
      // Unauthenticated requests to /api/v1/me return 401, but rate limiter still logs by IP
      // Let's test whether X-Forwarded-For is ignored when trustProxyHops is 0
      // If trust proxy is false/0, req.ip remains 127.0.0.1 (or loopback)
      // Check that random X-Forwarded-For headers do not create multiple distinct keys
      const countBefore = (await rlDb.query("SELECT count(*) FROM request_limits WHERE key LIKE 'auth:%'")).rows[0].count;
      for (let i = 0; i < 5; i++) {
        await request(rlApp)
          .get('/api/v1/auth/status')
          .set('Origin', configDev.origin)
          .set('X-Forwarded-For', `10.0.0.${i + 10}`);
      }
      const countAfter = (await rlDb.query("SELECT count(*) FROM request_limits WHERE key LIKE 'auth:%'")).rows[0].count;
      report('3.5 X-Forwarded-For is not trusted when trustProxyHops is 0 (no IP spoofing bypass)', countBefore === countAfter);
    }

    console.log('\n--- 4. NOTES SCHEMA INTEGRITY & CONTACT MESSAGE ARCHIVING ---');

    // 4.1 Contact message with reason creates note with valid title and schema
    {
      const contactPayload = {
        name: 'Dra. Claudia Ramos',
        email: 'claudia@hospital.org',
        institution: 'Hospital Infantil',
        reason: 'Sugestão de Conduta',
        message: 'Gostaria de sugerir uma atualização no protocolo de sepse neonatal.',
      };

      const res = await request(appDev)
        .post('/api/v1/contact')
        .set('Origin', configDev.origin)
        .send(contactPayload);
      report('4.1 Contact form submission succeeds (200)', res.status === 200);

      // Check notes in database for marina@pedbox.app
      const { rows } = await db.query(
        "SELECT n.* FROM notes n JOIN users u ON u.id = n.user_id WHERE u.email = 'marina@pedbox.app' ORDER BY n.created_date DESC LIMIT 1"
      );
      assert.ok(rows.length > 0, 'Note should have been inserted');
      const noteRow = rows[0];
      const noteData = typeof noteRow.data === 'string' ? JSON.parse(noteRow.data) : noteRow.data;

      report('4.2 Note title matches format [Contato] {reason} — {name}', noteData.titulo === '[Contato] Sugestão de Conduta — Dra. Claudia Ramos');
      report('4.3 Note color is default valid color (yellow)', noteData.cor === 'yellow');
      report('4.4 Note content contains contact details', noteData.conteudo.includes('Dra. Claudia Ramos') && noteData.conteudo.includes('claudia@hospital.org'));

      // Validate against collections.notes.schema
      const parsedNote = collections.notes.schema.safeParse(noteData);
      report('4.5 Note payload strictly conforms to collections.notes.schema', parsedNote.success);
    }

    // 4.2 Contact message WITHOUT reason (empty reason)
    {
      const contactPayloadNoReason = {
        name: 'Dr. Roberto Santos',
        email: 'roberto@clinica.org',
        message: 'Dúvida sobre calculadora de bilirrubina.',
      };

      const res = await request(appDev)
        .post('/api/v1/contact')
        .set('Origin', configDev.origin)
        .send(contactPayloadNoReason);
      report('4.6 Contact form without reason succeeds (200)', res.status === 200);

      const { rows } = await db.query(
        "SELECT n.* FROM notes n JOIN users u ON u.id = n.user_id WHERE u.email = 'marina@pedbox.app' ORDER BY n.created_date DESC LIMIT 1"
      );
      const noteData = typeof rows[0].data === 'string' ? JSON.parse(rows[0].data) : rows[0].data;
      report('4.7 Note title without reason formatted as [Contato] {name}', noteData.titulo === '[Contato] Dr. Roberto Santos');
      const parsedNote = collections.notes.schema.safeParse(noteData);
      report('4.8 Note without reason strictly conforms to schema', parsedNote.success);
    }

    // 4.3 Marina fetches contact notes via GET /api/v1/notes
    let noteId;
    {
      const res = await request(appDev)
        .get('/api/v1/notes')
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie);
      report('4.9 Admin Marina can fetch contact notes via GET /api/v1/notes', res.status === 200 && res.body.items.length >= 2);
      const firstNote = res.body.items[0];
      noteId = firstNote.id;
      report('4.10 Note record includes id, created_date, and created_by_id', Boolean(firstNote.id) && Boolean(firstNote.created_by_id));
    }

    // 4.4 Marina updates the contact note via PATCH /api/v1/notes/:id
    {
      const res = await request(appDev)
        .patch(`/api/v1/notes/${noteId}`)
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie)
        .send({ cor: 'green', titulo: '[Contato Concluído] Dr. Roberto Santos' });
      report('4.11 Marina can update contact note via PATCH /notes/:id', res.status === 200 && res.body.cor === 'green');
    }

    // 4.5 Marina deletes the contact note via DELETE /api/v1/notes/:id
    {
      const res = await request(appDev)
        .delete(`/api/v1/notes/${noteId}`)
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie);
      report('4.12 Marina can delete contact note via DELETE /notes/:id', res.status === 200);

      const resAfter = await request(appDev)
        .get('/api/v1/notes')
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie);
      report('4.13 Deleted note is no longer returned in list', !resAfter.body.items.some((n) => n.id === noteId));
    }

    // 4.6 Other users cannot access Marina's contact notes
    {
      const resRegUser = await request(appDev)
        .post('/api/v1/auth/register')
        .set('Origin', configDev.origin)
        .send({ email: 'outro_medico@pedbox.app', password: 'senhaForte123!' });
      const otherCookie = resRegUser.headers['set-cookie'];

      const resList = await request(appDev)
        .get('/api/v1/notes')
        .set('Origin', configDev.origin)
        .set('Cookie', otherCookie);
      report('4.14 Another user sees 0 notes (complete privacy isolation)', resList.status === 200 && resList.body.items.length === 0);
    }

    // 4.7 Boundary stress: maximum allowed length strings in contact form
    {
      const maxPayload = {
        name: 'A'.repeat(200),
        email: 'max@pedbox.app',
        institution: 'B'.repeat(500),
        reason: 'C'.repeat(200),
        message: 'D'.repeat(20000),
      };

      const res = await request(appDev)
        .post('/api/v1/contact')
        .set('Origin', configDev.origin)
        .send(maxPayload);
      report('4.15 Contact form accepts maximum boundary lengths', res.status === 200);

      const { rows } = await db.query(
        "SELECT n.* FROM notes n JOIN users u ON u.id = n.user_id WHERE u.email = 'marina@pedbox.app' ORDER BY n.created_date DESC LIMIT 1"
      );
      const noteData = typeof rows[0].data === 'string' ? JSON.parse(rows[0].data) : rows[0].data;
      const parsedNote = collections.notes.schema.safeParse(noteData);
      report('4.16 Max boundary note title <= 1000 and valid schema', parsedNote.success && noteData.titulo.length <= 1000);
    }

    // 4.8 Contact form when marina@pedbox.app does NOT exist
    {
      const isolatedDb = await openDatabase({ directory: 'memory://' });
      await migrate(isolatedDb);
      const isolatedApp = createApp({ db: isolatedDb, config: configDev, integrations: { mail: mockMailTransport } });

      const res = await request(isolatedApp)
        .post('/api/v1/contact')
        .set('Origin', configDev.origin)
        .send({
          name: 'Visitante',
          email: 'visitante@pedbox.app',
          message: 'Mensagem sem admin no banco.',
        });
      report('4.17 Contact submission succeeds gracefully even if marina user does not exist in DB', res.status === 200);
      await isolatedDb.close();
    }

    // 4.18 Note patch behavior after admin contact status update
    {
      const contactPayload = {
        name: 'Dra. Teste Status',
        email: 'status@teste.org',
        message: 'Teste de status update.',
      };
      await request(appDev)
        .post('/api/v1/contact')
        .set('Origin', configDev.origin)
        .send(contactPayload);

      const contactsRes = await request(appDev)
        .get('/api/v1/admin/contacts')
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie);
      const contactItem = contactsRes.body.items[0];

      // Admin updates status of contact to 'read'
      const patchAdminRes = await request(appDev)
        .patch(`/api/v1/admin/contacts/${contactItem.id}`)
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie)
        .send({ status: 'read' });
      assert.equal(patchAdminRes.status, 200);

      // Marina tries to patch her note via /api/v1/notes/:id
      const patchNoteRes = await request(appDev)
        .patch(`/api/v1/notes/${contactItem.id}`)
        .set('Origin', configDev.origin)
        .set('Cookie', adminCookie)
        .send({ cor: 'blue' });

      console.log('    [INVESTIGATION] patchNoteRes status:', patchNoteRes.status, patchNoteRes.body);
      report(
        '4.18 Note can still be updated via PATCH /notes/:id after admin contact status change',
        patchNoteRes.status === 200
      );
    }

    await rlDb.close();
  } finally {
    await db.close();
    await rm(folder, { recursive: true, force: true });
  }

  console.log(`\n=== SUMMARY: ${passed} passed, ${failed} failed ===`);
  if (failed > 0) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error('Fatal error during test run:', err);
  process.exit(1);
});
