import { test } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { hashPassword, verifyPassword } from '../server/auth.js';
import { openDatabase, migrate } from '../server/db.js';
import { createApp } from '../server/app.js';

test('password hashing and verification with scrypt', () => {
  const hash = hashPassword('segredo123');
  assert.ok(hash.includes(':'), 'Hash must contain salt delimiter');
  assert.ok(verifyPassword('segredo123', hash), 'Valid password must verify');
  assert.ok(!verifyPassword('errada456', hash), 'Invalid password must fail');
  assert.ok(!verifyPassword('', hash), 'Empty password must fail');
  assert.ok(!verifyPassword('segredo123', null), 'Null stored hash must fail');
});

test('local registration and login flow via API', async () => {
  const db = await openDatabase({ directory: 'memory://' });
  try {
    await migrate(db);
    const config = {
      production: false,
      origin: 'http://localhost:5173',
      devAuth: false,
      uploadDirectory: '.data/uploads',
      trustProxyHops: 0,
    };
    const app = createApp({ db, config, serveFrontend: false });

    // 1. Register a regular user (should get role 'user')
    const resReg = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', config.origin)
      .send({
        email: 'medico@pedbox.app',
        password: 'senhaSegura123',
        full_name: 'Dra. Ana Pediatra',
      });
    assert.equal(resReg.status, 200);
    assert.equal(resReg.body.ok, true);
    assert.equal(resReg.body.user.email, 'medico@pedbox.app');
    assert.equal(resReg.body.user.full_name, 'Dra. Ana Pediatra');
    assert.equal(resReg.body.user.role, 'user');
    const userCookie = resReg.headers['set-cookie'];

    // 2. Reject duplicate registration
    const resDup = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', config.origin)
      .send({
        email: 'medico@pedbox.app',
        password: 'outraSenha123',
        full_name: 'Outro Nome',
      });
    assert.equal(resDup.status, 409);

    // 3. Login with correct password
    const resLogin = await request(app)
      .post('/api/v1/auth/login')
      .set('Origin', config.origin)
      .send({
        email: 'medico@pedbox.app',
        password: 'senhaSegura123',
      });
    assert.equal(resLogin.status, 200);
    assert.equal(resLogin.body.ok, true);
    assert.equal(resLogin.body.user.email, 'medico@pedbox.app');

    // 4. Reject login with wrong password
    const resBadLogin = await request(app)
      .post('/api/v1/auth/login')
      .set('Origin', config.origin)
      .send({
        email: 'medico@pedbox.app',
        password: 'senhaErrada',
      });
    assert.equal(resBadLogin.status, 401);

    // 5. Update user profile (name, email, password) via PATCH /api/v1/me
    const resPatch = await request(app)
      .patch('/api/v1/me')
      .set('Origin', config.origin)
      .set('Cookie', userCookie)
      .send({
        full_name: 'Dra. Ana Santos',
        current_password: 'senhaSegura123',
        new_password: 'novaSenha456',
      });
    assert.equal(resPatch.status, 200);
    assert.equal(resPatch.body.ok, true);
    assert.equal(resPatch.body.user.full_name, 'Dra. Ana Santos');

    // 6. Test login with the new password
    const resNewLogin = await request(app)
      .post('/api/v1/auth/login')
      .set('Origin', config.origin)
      .send({
        email: 'medico@pedbox.app',
        password: 'novaSenha456',
      });
    assert.equal(resNewLogin.status, 200);

    // 7. Register marina@pedbox.app -> must receive role 'admin'
    const resMarina = await request(app)
      .post('/api/v1/auth/register')
      .set('Origin', config.origin)
      .send({
        email: 'marina@pedbox.app',
        password: 'adminPassword123',
        full_name: 'Administradora PedBox',
      });
    assert.equal(resMarina.status, 200);
    assert.equal(resMarina.body.user.role, 'admin');
  } finally {
    await db.close();
  }
});
