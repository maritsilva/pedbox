import 'dotenv/config';
import { openDatabase, migrate } from './db.js';
import { configFromEnv } from './config.js';
import { createApp } from './app.js';

const config = configFromEnv();
const db = await openDatabase({ url: config.databaseUrl, directory: config.databaseDirectory });
await migrate(db);
const app = createApp({ db, config, serveFrontend: true });
const server = app.listen(config.port, config.host, () => console.log(`PedBox API: http://${config.host}:${config.port}`));
const cleanup = setInterval(() => Promise.all([
  db.query('DELETE FROM sessions WHERE expires_at<now()'),
  db.query('DELETE FROM login_attempts WHERE expires_at<now()'),
  db.query('DELETE FROM request_limits WHERE reset_at<now()'),
]).catch(() => console.error('Falha na limpeza de sessões')), 3600000).unref();
for (const event of ['SIGINT','SIGTERM']) process.on(event, () => {
  clearInterval(cleanup);
  server.close(async () => { await db.close(); process.exit(0); });
  setTimeout(() => process.exit(1), 10000).unref();
});
