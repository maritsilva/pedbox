import { before, after, beforeEach, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { openDatabase, migrate } from '../server/db.js';
import { createApp } from '../server/app.js';
import { configFromEnv } from '../server/config.js';
import { hash } from '../server/auth.js';

let db, app, folder, config;
const origin = 'http://localhost:5173';

before(async () => {
  folder = await mkdtemp(join(tmpdir(), 'pedbox-adversarial-'));
  db = await openDatabase({ directory: 'memory://' });
  await migrate(db);
  await migrate(db);
  config = {
    ...configFromEnv({ APP_ORIGIN: origin }),
    uploadDirectory: folder,
    contactTo: 'marina@pedbox.app',
    mailFrom: 'noreply@pedbox.app',
  };
  app = createApp({
    db,
    config,
    integrations: {
      mail: { sendMail: async () => {} },
    },
    serveFrontend: false,
  });
});

after(async () => {
  await db?.close();
  await rm(folder, { recursive: true, force: true });
});

describe('Adversarial Challenge: Registration Privilege Escalation Vectors', () => {
  beforeEach(async () => {
    await db.query('DELETE FROM request_limits');
  });

  test('registration with marina@pedbox.app variations never yields admin', async () => {
    // 1. Lowercase marina@pedbox.app
    const res1 = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', origin)
      .send({ email: 'marina@pedbox.app', password: 'Password123!', full_name: 'Marina Official' });
    assert.equal(res1.status, 200);
    assert.equal(res1.body.user.role, 'user', 'marina@pedbox.app must be assigned user role');

    // Confirm in DB
    const dbUser1 = await db.query('SELECT role FROM users WHERE email = $1', ['marina@pedbox.app']);
    assert.equal(dbUser1.rows[0].role, 'user');

    // 2. Uppercase MARINA@PEDBOX.APP (duplicate rejection)
    const res2 = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', origin)
      .send({ email: 'MARINA@PEDBOX.APP', password: 'Password123!' });
    assert.equal(res2.status, 409, 'Uppercase duplicate email must be rejected with 409');

    // 3. Variations with subaddressing
    const res3 = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', origin)
      .send({ email: 'marina+admin@pedbox.app', password: 'Password123!' });
    assert.equal(res3.status, 200);
    assert.equal(res3.body.user.role, 'user');

    // 4. Role injection attempt in register payload
    const res4 = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', origin)
      .send({
        email: 'attacker1@pedbox.app',
        password: 'Password123!',
        role: 'admin',
      });
    assert.equal(res4.status, 422, 'Register schema must reject role injection with 422');

    // 5. isMasterAdmin / isPrivileged injection attempt
    const res5 = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', origin)
      .send({
        email: 'attacker2@pedbox.app',
        password: 'Password123!',
        isMasterAdmin: true,
      });
    assert.equal(res5.status, 422, 'Register schema must reject unknown fields with 422');
  });
});

describe('Adversarial Challenge: Profile Tampering and Role Modification (PATCH /api/v1/me)', () => {
  let regularCookie;
  let adminCookie;
  let adminId;

  before(async () => {
    await db.query('DELETE FROM request_limits');
    // Register normal user
    const resReg = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', origin)
      .send({ email: 'target_user@pedbox.app', password: 'PasswordTarget123', full_name: 'Target User' });
    regularCookie = resReg.headers['set-cookie'];

    // Create an explicit admin user in DB
    adminId = randomUUID();
    await db.query(
      "INSERT INTO users(id, issuer, subject, email, full_name, role) VALUES($1, 'local', 'admin@pedbox.app', 'admin@pedbox.app', 'Super Admin', 'admin')",
      [adminId]
    );
    const adminSessionToken = 'admin-adversarial-session-token-32b';
    await db.query(
      'INSERT INTO sessions(token_hash, user_id, expires_at) VALUES($1, $2, $3)',
      [hash(adminSessionToken), adminId, new Date(Date.now() + 3600000)]
    );
    adminCookie = [`pedbox_session=${adminSessionToken}; Path=/; HttpOnly`];
  });

  beforeEach(async () => {
    await db.query('DELETE FROM request_limits');
  });

  test('non-admin user cannot promote themselves via PATCH /api/v1/me', async () => {
    // Attempt role: 'admin'
    const resRole = await request(app)
      .patch('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ role: 'admin' });
    assert.equal(resRole.status, 422, 'PATCH /api/v1/me must reject role field with 422');

    // Attempt role: 'user' (should still fail because schema is strict)
    const resRoleUser = await request(app)
      .patch('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ role: 'user' });
    assert.equal(resRoleUser.status, 422, 'PATCH /api/v1/me must reject even role=user with 422');

    // Attempt arbitrary property injection
    const resInject = await request(app)
      .patch('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ isPrivileged: true, password_hash: 'hacked' });
    assert.equal(resInject.status, 422, 'Strict schema must reject arbitrary properties');
  });

  test('user cannot hijack existing user email via PATCH /api/v1/me', async () => {
    // Attempt to change email to marina@pedbox.app
    const resHijack = await request(app)
      .patch('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ email: 'marina@pedbox.app' });
    assert.equal(resHijack.status, 409, 'Duplicate email change must return 409');

    // Case-insensitive hijack attempt
    const resHijackUpper = await request(app)
      .patch('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ email: 'MARINA@PEDBOX.APP' });
    assert.equal(resHijackUpper.status, 409, 'Case-insensitive duplicate email must return 409');
  });

  test('admin user updating profile is NOT demoted to user', async () => {
    const resAdminUpdate = await request(app)
      .patch('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', adminCookie)
      .send({ full_name: 'Super Admin Renamed', drive_folder_url: 'https://drive.google.com/test' });
    assert.equal(resAdminUpdate.status, 200);
    assert.equal(resAdminUpdate.body.user.role, 'admin', 'Admin must retain admin role after PATCH /me');

    // Verify directly in DB
    const dbAdmin = await db.query('SELECT role FROM users WHERE id = $1', [adminId]);
    assert.equal(dbAdmin.rows[0].role, 'admin', 'DB role must remain admin');
  });

  test('password change during profile update requires current_password verification', async () => {
    // Omit current_password
    const resNoCurrent = await request(app)
      .patch('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ new_password: 'BrandNewPassword123' });
    assert.equal(resNoCurrent.status, 401, 'Password update without current_password must return 401');

    // Wrong current_password
    const resWrongCurrent = await request(app)
      .patch('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ current_password: 'WrongPassword!', new_password: 'BrandNewPassword123' });
    assert.equal(resWrongCurrent.status, 401, 'Password update with wrong current_password must return 401');

    // Correct current_password
    const resValid = await request(app)
      .patch('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ current_password: 'PasswordTarget123', new_password: 'BrandNewPassword123' });
    assert.equal(resValid.status, 200);

    // Verify login with new password succeeds and old fails
    const resOldLogin = await request(app)
      .post('/api/v1/auth/login')
      .set('Origin', origin)
      .send({ email: 'target_user@pedbox.app', password: 'PasswordTarget123' });
    assert.equal(resOldLogin.status, 401);

    const resNewLogin = await request(app)
      .post('/api/v1/auth/login')
      .set('Origin', origin)
      .send({ email: 'target_user@pedbox.app', password: 'BrandNewPassword123' });
    assert.equal(resNewLogin.status, 200);
  });
});

describe('Adversarial Challenge: Dedicated Change Password Endpoint', () => {
  let userCookie;

  before(async () => {
    await db.query('DELETE FROM request_limits');
    const res = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', origin)
      .send({ email: 'chg_pass_user@pedbox.app', password: 'OriginalPass123' });
    userCookie = res.headers['set-cookie'];
  });

  beforeEach(async () => {
    await db.query('DELETE FROM request_limits');
  });

  test('unauthenticated request returns 401', async () => {
    const res = await request(app)
      .post('/api/v1/auth/change-password')
      .set('Origin', origin)
      .send({ current_password: 'OriginalPass123', new_password: 'NewPass123' });
    assert.equal(res.status, 401);
  });

  test('malformed payloads return 422', async () => {
    // Missing new_password
    const r1 = await request(app)
      .post('/api/v1/auth/change-password')
      .set('Origin', origin)
      .set('Cookie', userCookie)
      .send({ current_password: 'OriginalPass123' });
    assert.equal(r1.status, 422);

    // Short new_password (< 6 chars)
    const r2 = await request(app)
      .post('/api/v1/auth/change-password')
      .set('Origin', origin)
      .set('Cookie', userCookie)
      .send({ current_password: 'OriginalPass123', new_password: '123' });
    assert.equal(r2.status, 422);

    // Extra unknown field
    const r3 = await request(app)
      .post('/api/v1/auth/change-password')
      .set('Origin', origin)
      .set('Cookie', userCookie)
      .send({ current_password: 'OriginalPass123', new_password: 'NewPass123', extraField: true });
    assert.equal(r3.status, 422);
  });

  test('wrong current_password returns 401', async () => {
    const res = await request(app)
      .post('/api/v1/auth/change-password')
      .set('Origin', origin)
      .set('Cookie', userCookie)
      .send({ current_password: 'IncorrectPassword', new_password: 'NewPass123' });
    assert.equal(res.status, 401);
  });

  test('correct current_password updates password successfully', async () => {
    const res = await request(app)
      .post('/api/v1/auth/change-password')
      .set('Origin', origin)
      .set('Cookie', userCookie)
      .send({ current_password: 'OriginalPass123', new_password: 'NewPass123' });
    assert.equal(res.status, 200);
    assert.equal(res.body.ok, true);
  });
});

describe('Adversarial Challenge: requireAdmin HTTP Status Code Rigor', () => {
  let regularCookie;
  let adminCookie;

  before(async () => {
    await db.query('DELETE FROM request_limits');
    const resUser = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', origin)
      .send({ email: 'regular_for_admin_test@pedbox.app', password: 'UserPass123' });
    regularCookie = resUser.headers['set-cookie'];

    const adminId = randomUUID();
    await db.query(
      "INSERT INTO users(id, issuer, subject, email, full_name, role) VALUES($1, 'local', 'admin_rbac@pedbox.app', 'admin_rbac@pedbox.app', 'RBAC Admin', 'admin')",
      [adminId]
    );
    const token = 'admin-rbac-token-unique-12345';
    await db.query('INSERT INTO sessions(token_hash, user_id, expires_at) VALUES($1, $2, $3)', [
      hash(token),
      adminId,
      new Date(Date.now() + 3600000),
    ]);
    adminCookie = [`pedbox_session=${token}; Path=/; HttpOnly`];
  });

  beforeEach(async () => {
    await db.query('DELETE FROM request_limits');
  });

  const endpoints = [
    { method: 'get', path: '/api/v1/admin/analytics', expectAdmin: 200 },
    { method: 'get', path: '/api/v1/admin/contacts', expectAdmin: 200 },
    { method: 'get', path: '/api/v1/admin/health', expectAdmin: 200 },
    { method: 'get', path: '/api/v1/admin/settings', expectAdmin: 200 },
  ];

  for (const ep of endpoints) {
    test(`${ep.method.toUpperCase()} ${ep.path}: unauthenticated returns 401`, async () => {
      const res = await request(app)[ep.method](ep.path).set('Origin', origin);
      assert.equal(res.status, 401, `Unauthenticated request to ${ep.path} must return 401`);
      assert.equal(res.body.error, 'Entre para continuar.');
    });

    test(`${ep.method.toUpperCase()} ${ep.path}: forged/tampered session cookie returns 401`, async () => {
      const res = await request(app)
        [ep.method](ep.path)
        .set('Origin', origin)
        .set('Cookie', ['pedbox_session=forged_invalid_cookie_token; Path=/']);
      assert.equal(res.status, 401, `Forged session cookie to ${ep.path} must return 401`);
    });

    test(`${ep.method.toUpperCase()} ${ep.path}: authenticated non-admin returns 403`, async () => {
      const res = await request(app)
        [ep.method](ep.path)
        .set('Origin', origin)
        .set('Cookie', regularCookie);
      assert.equal(res.status, 403, `Non-admin request to ${ep.path} must return 403`);
      assert.equal(res.body.error, 'Acesso restrito ao administrador.');
    });

    test(`${ep.method.toUpperCase()} ${ep.path}: authenticated admin returns ${ep.expectAdmin}`, async () => {
      const res = await request(app)
        [ep.method](ep.path)
        .set('Origin', origin)
        .set('Cookie', adminCookie);
      assert.equal(res.status, ep.expectAdmin, `Admin request to ${ep.path} must return ${ep.expectAdmin}`);
    });
  }

  test('PATCH /api/v1/admin/contacts/:id: 401 unauth, 403 non-admin', async () => {
    const unauth = await request(app)
      .patch('/api/v1/admin/contacts/fake-id')
      .set('Origin', origin)
      .send({ status: 'read' });
    assert.equal(unauth.status, 401);

    const nonAdmin = await request(app)
      .patch('/api/v1/admin/contacts/fake-id')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ status: 'read' });
    assert.equal(nonAdmin.status, 403);
  });

  test('DELETE /api/v1/admin/contacts/:id: 401 unauth, 403 non-admin', async () => {
    const unauth = await request(app)
      .delete('/api/v1/admin/contacts/fake-id')
      .set('Origin', origin);
    assert.equal(unauth.status, 401);

    const nonAdmin = await request(app)
      .delete('/api/v1/admin/contacts/fake-id')
      .set('Origin', origin)
      .set('Cookie', regularCookie);
    assert.equal(nonAdmin.status, 403);
  });

  test('PATCH /api/v1/admin/settings: 401 unauth, 403 non-admin', async () => {
    const unauth = await request(app)
      .patch('/api/v1/admin/settings')
      .set('Origin', origin)
      .send({ googleAnalyticsId: 'G-12345' });
    assert.equal(unauth.status, 401);

    const nonAdmin = await request(app)
      .patch('/api/v1/admin/settings')
      .set('Origin', origin)
      .set('Cookie', regularCookie)
      .send({ googleAnalyticsId: 'G-12345' });
    assert.equal(nonAdmin.status, 403);
  });
});

describe('Adversarial Challenge: Zod Validation and Fuzzing across Auth Endpoints', () => {
  beforeEach(async () => {
    await db.query('DELETE FROM request_limits');
  });

  test('POST /api/v1/auth/register rejects invalid inputs with 422', async () => {
    const badBodies = [
      {},
      { email: 'notanemail', password: 'validPassword123' },
      { email: 'user@domain.com', password: '123' }, // < 6 chars
      { email: 'user@domain.com', password: 'a'.repeat(129) }, // > 128 chars
      { email: 'a'.repeat(250) + '@b.co', password: 'validPassword123' }, // > 254 chars
      { email: 'valid@pedbox.app', password: 'validPassword123', extra: 'bad' },
      { email: 12345, password: 'validPassword123' },
      { email: 'valid@pedbox.app', password: true },
      { email: 'valid@pedbox.app', password: ['array'] },
    ];

    for (const body of badBodies) {
      const res = await request(app)
        .post('/api/v1/auth/register')
        .set('Origin', origin)
        .send(body);
      assert.equal(res.status, 422, `Register must reject payload with 422: ${JSON.stringify(body)}`);
      assert.equal(res.body.error, 'Dados inválidos.');
    }
  });

  test('POST /api/v1/auth/login rejects invalid inputs with 422', async () => {
    const badBodies = [
      {},
      { email: 'notanemail', password: 'validPassword123' },
      { email: 'user@domain.com' }, // missing password
      { password: 'validPassword123' }, // missing email
      { email: 'user@domain.com', password: 'validPassword123', extraField: 1 },
      { email: 999, password: 'validPassword123' },
    ];

    for (const body of badBodies) {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .set('Origin', origin)
        .send(body);
      assert.equal(res.status, 422, `Login must reject payload with 422: ${JSON.stringify(body)}`);
      assert.equal(res.body.error, 'Dados inválidos.');
    }
  });

  test('POST /api/v1/auth/google/verify rejects invalid inputs with 422', async () => {
    const badBodies = [
      {},
      { credential: '' },
      { credential: 12345 },
      { credential: 'a'.repeat(10001) },
      { credential: 'validToken', role: 'admin' },
    ];

    for (const body of badBodies) {
      const res = await request(app)
        .post('/api/v1/auth/google/verify')
        .set('Origin', origin)
        .send(body);
      assert.equal(res.status, 422, `Google verify must reject payload with 422: ${JSON.stringify(body)}`);
      assert.equal(res.body.error, 'Dados inválidos.');
    }
  });
});

describe('Adversarial Challenge: Rate Limiting Enforcement', () => {
  beforeEach(async () => {
    await db.query('DELETE FROM request_limits');
  });

  test('/api/v1/auth rate limit triggers 429 after 30 requests', async () => {
    // Send 30 requests that fail with 422
    for (let i = 0; i < 30; i++) {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .set('Origin', origin)
        .send({});
      assert.equal(res.status, 422, `Request ${i + 1} should be within rate limit`);
    }

    // 31st request must trigger 429
    const limitedRes = await request(app)
      .post('/api/v1/auth/login')
      .set('Origin', origin)
      .send({});
    assert.equal(limitedRes.status, 429, '31st auth request must return 429 Too Many Requests');
    assert.match(limitedRes.body.error, /Muitas solicitações/);
  });

  test('/api/v1/me rate limit triggers 429 after 60 requests', async () => {
    // Register a user to get cookie
    const resUser = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', origin)
      .send({ email: 'ratelimit_me@pedbox.app', password: 'PasswordRate123' });
    const userCookie = resUser.headers['set-cookie'];

    // Clear request_limits so we have full quota for /api/v1/me
    await db.query('DELETE FROM request_limits');

    // Send 60 requests to /api/v1/me
    for (let i = 0; i < 60; i++) {
      const res = await request(app)
        .get('/api/v1/me')
        .set('Origin', origin)
        .set('Cookie', userCookie);
      assert.equal(res.status, 200, `Request ${i + 1} to /me should succeed`);
    }

    // 61st request must trigger 429
    const limitedRes = await request(app)
      .get('/api/v1/me')
      .set('Origin', origin)
      .set('Cookie', userCookie);
    assert.equal(limitedRes.status, 429, '61st /me request must return 429');
    assert.match(limitedRes.body.error, /Muitas solicitações/);
  });
});

describe('Adversarial Challenge: Security Headers & CSP Verification', () => {
  beforeEach(async () => {
    await db.query('DELETE FROM request_limits');
  });

  test('Helmet CSP directives and headers are enforced', async () => {
    const res = await request(app).get('/api/v1/health');
    assert.equal(res.status, 200);

    // Verify CSP header
    const csp = res.headers['content-security-policy'];
    assert.ok(csp, 'Content-Security-Policy header must be present');
    assert.ok(csp.includes("default-src 'self'"), 'CSP must restrict default-src to self');
    assert.ok(csp.includes("object-src 'none'"), 'CSP must set object-src to none');
    assert.ok(csp.includes("base-uri 'self'"), 'CSP must set base-uri to self');
    assert.ok(csp.includes('https://drive.google.com'), 'CSP must allow Google Drive frameSrc');

    // Verify X-Powered-By is disabled
    assert.equal(res.headers['x-powered-by'], undefined, 'x-powered-by header must be disabled');
  });
});

describe('Adversarial Challenge: SMTP Credential Leak Check', () => {
  test('configuration does not contain default hardcoded credentials', () => {
    const cfg = configFromEnv({});
    assert.equal(cfg.smtpUrl, undefined, 'Default smtpUrl must be undefined when no env is set');
  });
});

describe('Adversarial Challenge: Contact Note Schema Conformance', () => {
  beforeEach(async () => {
    await db.query('DELETE FROM request_limits');
  });

  test('contact message creates note conforming to strict schema', async () => {
    // 1. Ensure marina@pedbox.app exists in DB
    const marinaId = randomUUID();
    await db.query(
      "INSERT INTO users(id, issuer, subject, email, full_name, role) VALUES($1, 'local', 'marina_note@pedbox.app', 'marina@pedbox.app', 'Dra. Marina', 'admin') ON CONFLICT DO NOTHING",
      [marinaId]
    );

    // 2. Submit contact message
    const resContact = await request(app)
      .post('/api/v1/contact')
      .set('Origin', origin)
      .send({
        name: 'Dr. Teste Contato',
        email: 'medico.contato@hospital.com',
        institution: 'Hospital Infantil',
        reason: 'Sugestão de conduta',
        message: 'Por favor, adicionar calculadora de desidratação.',
      });
    assert.equal(resContact.status, 200);

    // 3. Check note in database
    const { rows: noteRows } = await db.query(
      "SELECT data FROM notes WHERE user_id = (SELECT id FROM users WHERE email = 'marina@pedbox.app' LIMIT 1)"
    );
    assert.ok(noteRows.length > 0, 'Note should be inserted for marina@pedbox.app');
    const noteData = noteRows[0].data;
    assert.ok(noteData.titulo, 'Note must have titulo');
    assert.ok(noteData.conteudo, 'Note must have conteudo');
    assert.equal(noteData.cor, 'yellow', 'Note must have valid cor');

    // Verify note conforms to collections.notes schema
    assert.ok(noteData.titulo.includes('Dr. Teste Contato'));
    assert.ok(noteData.conteudo.includes('medico.contato@hospital.com'));
  });

  test('admin contact status patch preserves note schema and allows subsequent PATCH /notes/:id', async () => {
    // 1. Submit a contact message
    const contactMsg = {
      name: 'Dr. Interacao Status',
      email: 'interacao@status.com',
      message: 'Mensagem para testar status update',
    };
    await request(app).post('/api/v1/contact').set('Origin', origin).send(contactMsg);

    // 2. Fetch contact ID from contact_submissions
    const { rows: contactRows } = await db.query(
      "SELECT id FROM contact_submissions WHERE email = 'interacao@status.com' LIMIT 1"
    );
    assert.ok(contactRows.length > 0);
    const contactId = contactRows[0].id;

    // 3. Create admin session to call PATCH /api/v1/admin/contacts/:id
    const adminId = randomUUID();
    await db.query(
      "INSERT INTO users(id, issuer, subject, email, full_name, role) VALUES($1, 'local', 'admin_contact@pedbox.app', 'admin_contact@pedbox.app', 'Admin', 'admin') ON CONFLICT DO NOTHING",
      [adminId]
    );
    const token = 'admin-contact-token-' + randomUUID();
    await db.query('INSERT INTO sessions(token_hash, user_id, expires_at) VALUES($1, $2, $3)', [
      hash(token),
      adminId,
      new Date(Date.now() + 3600000),
    ]);
    const adminCookie = [`pedbox_session=${token}; Path=/; HttpOnly`];

    // Admin updates contact status to 'read'
    const patchContactRes = await request(app)
      .patch(`/api/v1/admin/contacts/${contactId}`)
      .set('Origin', origin)
      .set('Cookie', adminCookie)
      .send({ status: 'read' });
    assert.equal(patchContactRes.status, 200);

    // 4. Now verify what is in notes table for contactId
    const { rows: noteRows } = await db.query('SELECT data FROM notes WHERE id = $1', [contactId]);
    if (noteRows.length > 0) {
      const noteData = noteRows[0].data;
      // Admin endpoint must NOT inject status into personal note data
      assert.equal(noteData.status, undefined, 'Admin endpoint does not inject status into note data');

      // 5. User (marina) tries to update this note via PATCH /api/v1/notes/:id
      const marinaUser = (await db.query("SELECT id FROM users WHERE email = 'marina@pedbox.app'")).rows[0];
      const mToken = 'marina-token-' + randomUUID();
      await db.query('INSERT INTO sessions(token_hash, user_id, expires_at) VALUES($1, $2, $3)', [
        hash(mToken),
        marinaUser.id,
        new Date(Date.now() + 3600000),
      ]);
      const marinaCookie = [`pedbox_session=${mToken}; Path=/; HttpOnly`];

      const patchNoteRes = await request(app)
        .patch(`/api/v1/notes/${contactId}`)
        .set('Origin', origin)
        .set('Cookie', marinaCookie)
        .send({ cor: 'blue' });

      assert.equal(patchNoteRes.status, 200, 'PATCH /notes/:id succeeds with 200');
      assert.equal(patchNoteRes.body.cor, 'blue');
    }
  });

  test('legacy notes with existing status field remain editable via PATCH /notes/:id', async () => {
    const marinaUser = (await db.query("SELECT id FROM users WHERE email = 'marina@pedbox.app'")).rows[0];
    const legacyNoteId = randomUUID();
    await db.query(
      "INSERT INTO notes(id, user_id, data) VALUES($1, $2, $3)",
      [legacyNoteId, marinaUser.id, JSON.stringify({ titulo: 'Nota Antiga', conteudo: 'Conteudo antigo', cor: 'yellow', status: 'archived' })]
    );

    const mToken = 'marina-legacy-' + randomUUID();
    await db.query('INSERT INTO sessions(token_hash, user_id, expires_at) VALUES($1, $2, $3)', [
      hash(mToken),
      marinaUser.id,
      new Date(Date.now() + 3600000),
    ]);
    const marinaCookie = [`pedbox_session=${mToken}; Path=/; HttpOnly`];

    const patchRes = await request(app)
      .patch(`/api/v1/notes/${legacyNoteId}`)
      .set('Origin', origin)
      .set('Cookie', marinaCookie)
      .send({ cor: 'pink' });

    assert.equal(patchRes.status, 200, 'Legacy note with status updates successfully');
    assert.equal(patchRes.body.cor, 'pink');
    assert.equal(patchRes.body.status, 'archived');
  });
});

