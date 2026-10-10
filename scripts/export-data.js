import 'dotenv/config';
import { openDatabase, migrate } from '../server/db.js';
import { configFromEnv } from '../server/config.js';
import { exportData } from './migration.js';
const folder = process.argv[2];
if (!folder) throw new Error('Uso: npm run migrate:export -- PASTA_NOVA');
const config = configFromEnv();
const db = await openDatabase({ url: config.databaseUrl, directory: config.databaseDirectory });
try { await migrate(db); console.log(JSON.stringify(await exportData(db, folder, { uploadDirectory: config.uploadDirectory }), null, 2)); }
finally { await db.close(); }
