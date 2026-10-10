import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { openDatabase, migrate } from '../server/db.js';
import { importData, exportData, entityMap } from '../scripts/migration.js';

test('migration dry run rolls back; apply repeats safely; export restores into a fresh database', async () => {
  const root = await mkdtemp(join(tmpdir(),'pedbox-import-')), input = join(root,'input');
  await mkdir(input);
  const db = await openDatabase({directory:'memory://'}), restored = await openDatabase({directory:'memory://'});
  try {
    await migrate(db); await migrate(restored);
    const created_date = '2026-01-01T00:00:00.000Z';
    await writeFile(join(input,'User.json'),JSON.stringify([{id:'old-user',role:'user',email:'a@example.com',created_date}]));
    for (const entity of Object.keys(entityMap)) await writeFile(join(input,entity+'.json'),'[]');
    await writeFile(join(input,'Anotacao.json'),JSON.stringify([{id:'old-note',created_by_id:'old-user',titulo:'Preservar',created_date}]));
    const report = await importData(db,input);
    assert.equal(report.unlinkedUsers,1);
    assert.equal((await db.query('SELECT * FROM users')).rows.length,0);
    await importData(db,input,{apply:true}); await importData(db,input,{apply:true});
    assert.equal((await db.query('SELECT * FROM notes')).rows.length,1);
    const out = join(root,'backup');
    await exportData(db,out);
    await importData(restored,out,{apply:true});
    assert.equal((await restored.query('SELECT * FROM notes')).rows[0].id,'old-note');
    // Never silently overwrite a newer record or import another user's ownership.
    await writeFile(join(input,'Anotacao.json'),JSON.stringify([{id:'old-note',created_by_id:'old-user',titulo:'Alterada',created_date}]));
    await assert.rejects(()=>importData(db,input,{apply:true}),/diferenças/);
    assert.equal((await db.query('SELECT * FROM notes')).rows[0].data.titulo,'Preservar');
    await writeFile(join(input,'Anotacao.json'),JSON.stringify([{id:'new-note',created_by_id:'missing',titulo:'Inválida',created_date}]));
    await assert.rejects(()=>importData(db,input,{apply:true}),/Proprietário/);
  } finally { await db.close(); await restored.close(); await rm(root,{recursive:true,force:true}); }
});
