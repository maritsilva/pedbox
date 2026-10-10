import 'dotenv/config';
import { openDatabase, migrate } from '../server/db.js';
import { configFromEnv } from '../server/config.js';
const id = process.argv[2], role = process.argv[3] || 'admin';
if (!id || !['admin','user'].includes(role)) throw new Error('Uso: node scripts/set-admin.js ID [admin|user]');
const config = configFromEnv(), db = await openDatabase({ url: config.databaseUrl, directory: config.databaseDirectory });
try {
  await migrate(db);
  const result = await db.query('UPDATE users SET role=$1 WHERE id=$2 RETURNING id', [role, id]);
  if (!result.rows.length) throw new Error('Usuário não encontrado. Faça o primeiro login antes.');
  console.log('Papel atualizado.');
} finally { await db.close(); }
