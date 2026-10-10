import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { openDatabase, migrate } from '../server/db.js';
import { createApp } from '../server/app.js';
import { configFromEnv } from '../server/config.js';
import { hash, returnPath } from '../server/auth.js';

let db, app, folder, config;
const origin = 'http://localhost:5173';
const cookie = user => 'pedbox_session=' + user;
const api = (method, path, user = 'alice') => {
  const call = request(app)[method]('/api/v1' + path).set('Origin', origin);
  return user ? call.set('Cookie', cookie(user)) : call;
};
before(async () => {
  folder = await mkdtemp(join(tmpdir(), 'pedbox-test-'));
  db = await openDatabase({ directory: 'memory://' });
  await migrate(db); await migrate(db);
  config = { ...configFromEnv({ APP_ORIGIN: origin }), uploadDirectory: folder };
  for (const user of ['alice','bob','admin']) {
    await db.query('INSERT INTO users(id,role) VALUES($1,$2)', [user, user === 'admin' ? 'admin' : 'user']);
    await db.query('INSERT INTO sessions(token_hash,user_id,expires_at) VALUES($1,$2,$3)', [hash(user),user,new Date(Date.now()+3600000)]);
  }
  app = createApp({ db, config, integrations: { research: async () => ({ content: 'Resposta de teste, sem orientação clínica.' }) } });
});
after(async () => { await db?.close(); await rm(folder, { recursive: true, force: true }); });

test('health and public contents work without a session; private data do not', async () => {
  await api('get','/health',null).expect(200);
  await api('get','/contents',null).expect(200);
  await api('get','/notes',null).expect(401);
  await api('get','/me',null).expect(401);
  const me = await api('get','/me').expect(200);
  assert.equal(me.body.id, 'alice');
  assert.match(me.headers['cache-control'], /no-store/);
});
test('writes require exact origin; no service role or mass assignment', async () => {
  await request(app).post('/api/v1/notes').set('Cookie',cookie('alice')).send({ titulo:'x' }).expect(403);
  await api('post','/notes').set('Origin','https://evil.example').send({ titulo:'x' }).expect(403);
  await api('post','/notes').send({ titulo:'x',user_id:'bob' }).expect(422);
  await api('post','/contents').send({ topico_label:'x',categoria_label:'x' }).expect(403);
});
test('notes enforce ownership on reads, filters, update and delete', async () => {
  const note = await api('post','/notes').send({ titulo:'Privada',conteudo:'conteúdo' }).expect(201);
  assert.equal(note.body.created_by_id,'alice');
  assert.equal(note.body.cor,'yellow');
  const other = await api('get','/notes','bob').expect(200);
  assert.equal(other.body.items.length,0);
  await api('get','/notes?filter=' + encodeURIComponent(JSON.stringify({created_by_id:'alice'})),'bob').expect(403);
  await api('patch','/notes/'+note.body.id,'bob').send({titulo:'roubada'}).expect(404);
  await api('delete','/notes/'+note.body.id,'bob').expect(404);
  await api('patch','/notes/'+note.body.id).send({cor:'blue'}).expect(200);
  const patched = await api('get','/notes').expect(200);
  assert.equal(patched.body.items[0].titulo,'Privada');
  assert.equal(patched.body.items[0].cor,'blue');
  await api('delete','/notes/'+note.body.id).expect(200);
});
test('favorite creation is idempotent and types never collide', async () => {
  const payload = {tipo:'medicamento',chave:'same'};
  const a = await api('post','/favorites').send(payload).expect(201);
  const b = await api('post','/favorites').send(payload).expect(201);
  assert.equal(a.body.id,b.body.id);
  await api('post','/favorites').send({...payload,tipo:'dosagem'}).expect(201);
  await api('post','/favorites','bob').send(payload).expect(201);
  await api('delete','/favorites').send(payload).expect(200);
  await api('delete','/favorites').send(payload).expect(200);
  const rows = await api('get','/favorites').expect(200);
  assert.deepEqual(rows.body.items.map(f=>f.tipo),['dosagem']);
  assert.equal((await api('get','/favorites','bob')).body.items.length,1);
});
test('public collections permit admin writes only and validate schemas', async () => {
  const created = await api('post','/categories','admin').send({label:'Teste',icon:'📋',color:'blue'}).expect(201);
  await api('patch','/categories/'+created.body.id).send({label:'x'}).expect(403);
  await api('get','/categories?sort=created_date%3BDROP%20TABLE%20users').expect(422);
  await api('post','/library-links','admin').send({titulo:'x',url:'javascript:alert(1)'}).expect(422);
  await api('delete','/categories/'+created.body.id,'admin').expect(200);
});
test('pagination uses deterministic tie breaking and returns every record', async () => {
  for (let i=0;i<3;i++) await api('post','/notes').send({titulo:'page'+i}).expect(201);
  const first = await api('get','/notes?limit=2&sort=created_date').expect(200);
  const second = await api('get','/notes?limit=2&sort=created_date&offset='+first.body.nextOffset).expect(200);
  assert.equal(new Set([...first.body.items,...second.body.items].map(r=>r.id)).size,3);
  assert.equal(second.body.nextOffset,null);
});
test('uploads reject visitors, ordinary users and disguised HTML', async () => {
  await api('post','/uploads',null).expect(401);
  await api('post','/uploads').expect(403);
  await api('post','/uploads','admin').attach('file',Buffer.from('<script>alert(1)</script>'),'fake.png').expect(422);
  const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jFuoAAAAASUVORK5CYII=','base64');
  const uploaded = await api('post','/uploads','admin').attach('file',png,'pixel.png').expect(201);
  assert.match(uploaded.body.file_url,/^\/uploads\/[\w-]+\.png$/);
  await request(app).get(uploaded.body.file_url).expect(200);
});
test('unconfigured integrations fail explicitly instead of reporting success', async () => {
  await api('post','/contact',null).send({name:'Teste',email:'a@example.com',message:'Olá'}).expect(503);
  await api('post','/contact',null).send({name:'Teste',email:'a@example.com',message:'Olá',to:'other@example.com'}).expect(422);
  const isolated = createApp({db,config});
  await request(isolated).post('/api/v1/conversations').set('Origin',origin).set('Cookie',cookie('alice')).expect(503);
});
test('mail destination is server controlled', async () => {
  let delivered;
  const configured = createApp({db,config:{...config,contactTo:'owner@example.com',mailFrom:'pedbox@example.com'},integrations:{mail:{sendMail: async message=>{delivered=message;}}}});
  await request(configured).post('/api/v1/contact').set('Origin',origin).send({name:'Teste',email:'sender@example.com',message:'Mensagem'}).expect(200);
  assert.equal(delivered.to,'owner@example.com'); assert.equal(delivered.replyTo,'sender@example.com');
});
test('research persists replies, isolates history and deduplicates retries', async () => {
  const conv = await api('post','/conversations').expect(201);
  await api('get','/conversations/'+conv.body.id,'bob').expect(404);
  const payload = {content:'Teste de transporte',requestId:randomUUID()};
  const reply = await api('post','/conversations/'+conv.body.id+'/messages').send(payload).expect(200);
  assert.match(reply.text, /"status":"completed"/);
  const duplicate = await api('post','/conversations/'+conv.body.id+'/messages').send(payload).expect(200);
  assert.equal(duplicate.body.messages.length,2);
  assert.equal((await api('get','/conversations/'+conv.body.id)).body.messages.length,2);
});
test('account deletion revokes all sessions and cascades private data', async () => {
  await db.query("INSERT INTO users(id) VALUES('delete-me')");
  await db.query('INSERT INTO sessions(token_hash,user_id,expires_at) VALUES($1,$2,$3)',[hash('delete-me'),'delete-me',new Date(Date.now()+3600000)]);
  await api('post','/notes','delete-me').send({titulo:'Apagar'}).expect(201);
  await api('post','/favorites','delete-me').send({tipo:'ferramenta',chave:'x'}).expect(201);
  await api('post','/conversations','delete-me').expect(201);
  await api('delete','/me','delete-me').expect(200);
  await api('get','/me','delete-me').expect(401);
  for (const table of ['notes','favorites','conversations']) assert.equal((await db.query(`SELECT * FROM ${table} WHERE user_id='delete-me'`)).rows.length,0);
});
test('expired session is rejected; old authentication cannot delete account', async () => {
  await db.query("UPDATE sessions SET authenticated_at=now()-interval '1 hour' WHERE user_id='bob'");
  await api('delete','/me','bob').expect(403);
  await db.query("UPDATE sessions SET expires_at=now()-interval '1 hour' WHERE user_id='bob'");
  await api('get','/me','bob').expect(401);
});
test('development auth and redirects cannot escape production constraints', async () => {
  await api('post','/auth/dev-login',null).expect(404);
  assert.equal(returnPath('https://evil.example',origin),'/');
  assert.equal(returnPath('//evil.example',origin),'/');
  assert.equal(returnPath('/guia?q=1',origin),'/guia?q=1');
  assert.throws(()=>configFromEnv({NODE_ENV:'production',DEV_AUTH:'true',APP_ORIGIN:'https://app.example',DATABASE_URL:'postgres://example'}));
});
test('clinical drafts are private to administrators and edits withdraw publication', async () => {
  const created = await api('post','/contents','admin').send({categoria_label:'Neonatal',topico_label:'Revisão de teste',conteudo:'Texto para revisão',review_sources:'Livro, edição, capítulo e página',publication_status:'published'}).expect(201);
  const id=created.body.id;
  assert.equal(created.body.publication_status,'draft');
  for (const user of [null,'alice']) { const list=await api('get','/contents',user).expect(200); assert.ok(!list.body.items.some(item=>item.id===id)); }
  const adminList=await api('get','/contents','admin').expect(200); assert.ok(adminList.body.items.some(item=>item.id===id));
  await api('patch','/contents/'+id,'alice').send({publication_status:'published'}).expect(403);
  await api('patch','/contents/'+id,'admin').send({publication_status:'published'}).expect(200);
  const publicList=await api('get','/contents',null).expect(200); assert.ok(publicList.body.items.some(item=>item.id===id));
  const edited=await api('patch','/contents/'+id,'admin').send({conteudo:'Texto alterado',publication_status:'published'}).expect(200);
  assert.equal(edited.body.publication_status,'draft');
  await api('patch','/contents/'+id,'admin').send({review_sources:''}).expect(200);
  await api('patch','/contents/'+id,'admin').send({publication_status:'published'}).expect(422);
});

test('logout invalidates the token', async () => {
  await api('post','/logout','admin').expect(200);
  await api('get','/me','admin').expect(401);
});
