import 'dotenv/config';
import { openDatabase, migrate } from '../server/db.js';
import { configFromEnv } from '../server/config.js';
import { importData } from './migration.js';

const folder = process.argv[2];
if (!folder || folder.startsWith('--')) throw new Error('Uso: npm run migrate:import -- PASTA [--apply] [--replace]');
const config = configFromEnv();
const db = await openDatabase({ url: config.databaseUrl, directory: config.databaseDirectory });
try {
  await migrate(db);
  console.log(JSON.stringify(await importData(db, folder, { apply: process.argv.includes('--apply'), replace: process.argv.includes('--replace'), uploadDirectory: config.uploadDirectory }), null, 2));
} finally { await db.close(); }
