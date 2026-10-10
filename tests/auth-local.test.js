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

    // 1. Register a new user
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
  } finally {
    await db.close();
  }
});
