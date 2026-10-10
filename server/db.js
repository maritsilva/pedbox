import { readFile, readdir, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import pg from 'pg';
import { PGlite } from '@electric-sql/pglite';

// Both adapters execute the same PostgreSQL migrations and parameterized queries.
export async function openDatabase({ url, directory = '.data/postgres' } = {}) {
  if (url) {
    const pool = new pg.Pool({ connectionString: url, max: 10 });
    return {
      query: (sql, params) => pool.query(sql, params),
      async transaction(fn) {
        const client = await pool.connect();
        try {
          await client.query('BEGIN');
          const result = await fn(client);
          await client.query('COMMIT');
          return result;
        } catch (error) {
          await client.query('ROLLBACK');
          throw error;
        } finally { client.release(); }
      },
      close: () => pool.end(),
    };
  }
  if (directory !== 'memory://') await mkdir(resolve(directory), { recursive: true });
  const db = new PGlite(directory);
  await db.waitReady;
  return db;
}

export async function migrate(db) {
  await db.query('CREATE TABLE IF NOT EXISTS schema_migrations (name text PRIMARY KEY, applied_at timestamptz NOT NULL DEFAULT now())');
  const folder = new URL('./migrations/', import.meta.url);
  for (const name of (await readdir(folder)).filter(n => n.endsWith('.sql')).sort()) {
    await db.transaction(async tx => {
      // Serializes migration runners sharing an external PostgreSQL database.
      await tx.query('LOCK TABLE schema_migrations IN EXCLUSIVE MODE');
      if ((await tx.query('SELECT 1 FROM schema_migrations WHERE name=$1', [name])).rows.length) return;
      const sql = await readFile(new URL(name, folder), 'utf8');
      // Migration files contain simple statements, without function bodies.
      for (const statement of sql.split(';').filter(s => s.trim())) await tx.query(statement);
      await tx.query('INSERT INTO schema_migrations(name) VALUES($1)', [name]);
    });
  }
}
