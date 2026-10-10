import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
const forbidden = /base44|base_44/i;
const failures = [];
async function check(path) {
  const entries = await readdir(path, { withFileTypes: true });
  for (const entry of entries) {
    const file = join(path, entry.name);
    if (entry.isDirectory()) await check(file);
    else if (/\.(js|jsx|ts|tsx|json|html|css|svg|txt)$/.test(file) && forbidden.test(await readFile(file, 'utf8'))) failures.push(file);
  }
}
for (const path of ['src','server','public']) await check(path);
for (const path of ['package.json','package-lock.json','vite.config.js','index.html']) if (forbidden.test(await readFile(path, 'utf8'))) failures.push(path);
try { await check('dist'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
if (failures.length) { console.error('Dependências remanescentes:', failures); process.exitCode = 1; }
else console.log('Nenhuma dependência Base44 no código executável, configuração, pacotes e build.');
