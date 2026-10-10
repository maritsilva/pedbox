import { readFile, readdir, mkdir, writeFile, copyFile } from 'node:fs/promises';
import { resolve, join, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { collections, record } from '../server/schemas.js';

export const entityMap = { Favorito: 'favorites', Anotacao: 'notes', CategoriaCustom: 'categories', Conduta: 'contents', LinkBiblioteca: 'library-links', Vacina: 'vaccines' };
const metadata = new Set(['id','created_date','updated_date','created_by_id','created_by','app_id','is_sample']);
const same = (a, b) => JSON.stringify(sort(a)) === JSON.stringify(sort(b));
function sort(x) { return Array.isArray(x) ? x.map(sort) : x && typeof x === 'object' ? Object.fromEntries(Object.keys(x).sort().map(k => [k, sort(x[k])])) : x; }
async function load(dir, name, fallback) {
  try { return JSON.parse(await readFile(join(dir, name), 'utf8')); }
  catch (e) { if (e.code === 'ENOENT' && fallback !== undefined) return fallback; throw e; }
}
function date(value) {
  if (!value || !Number.isFinite(new Date(value).getTime())) throw new Error('Data ausente ou inválida no arquivo de exportação.');
  return new Date(value).toISOString();
}
function id(value) { if (typeof value !== 'string' || !value || value.length > 1000) throw new Error('ID inválido na exportação.'); return value; }
function rewrite(value, urls) {
  if (typeof value === 'string') {
    for (const [oldUrl, newUrl] of Object.entries(urls)) value = value.split(oldUrl).join(newUrl);
    if (/https?:\/\/[^\s/]*base44\.[^\s]*/i.test(value)) throw new Error('URL Base44 sem mapeamento em media-map.json.');
    return value;
  }
  if (Array.isArray(value)) return value.map(v => rewrite(v, urls));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, rewrite(v, urls)]));
  return value;
}

export async function importData(db, folder, { apply = false, replace = false, uploadDirectory } = {}) {
  const dir = resolve(folder), urls = await load(dir, 'media-map.json', {});
  const identity = await load(dir, 'identity-map.json', {});
  const media = await load(dir, 'files.json', []);
  const users = await load(dir, 'User.json');
  if (!Array.isArray(users)) throw new Error('User.json deve conter um array completo.');
  const report = { mode: apply ? 'apply' : 'dry-run', entities: {}, unlinkedUsers: 0, files: media.length };
  // Files are validated before opening the data transaction. Files copied before
  // a failed commit can be orphaned, but no committed row points at a missing file.
  for (const file of media) {
    const source = resolve(dir, file.path), rel = relative(dir, source);
    if (rel.startsWith('..') || isAbsolute(rel) || !/^[a-zA-Z0-9._-]+$/.test(file.name) || file.name.startsWith('.')) throw new Error('Caminho de mídia inválido.');
    const bytes = await readFile(source);
    if (createHash('sha256').update(bytes).digest('hex') !== file.sha256) throw new Error('Checksum de mídia divergente.');
    if (apply) {
      if (!uploadDirectory) throw new Error('UPLOAD_DIR obrigatório para importar arquivos.');
      await mkdir(uploadDirectory, { recursive: true });
      const target = join(uploadDirectory, file.name);
      try {
        const existing = await readFile(target);
        if (!bytes.equals(existing)) throw new Error('Arquivo de destino já existe com conteúdo diferente.');
      } catch (e) { if (e.code !== 'ENOENT') throw e; await copyFile(source, target); }
    }
  }
  for (const value of Object.values(urls)) {
    if (!/^\/uploads\/[a-zA-Z0-9._-]+$/.test(value) || !media.some(file => '/uploads/' + file.name === value)) throw new Error('Mapeamento de mídia deve apontar para arquivo presente em files.json.');
  }
  const dryRun = new Error('dry-run');
  try {
    await db.transaction(async tx => {
      const seenUsers = new Set();
      for (const user of users) {
        id(user.id);
        if (seenUsers.has(user.id)) throw new Error('IDs de usuário duplicados.');
        seenUsers.add(user.id);
        const link = identity[user.id] || { issuer: user.issuer, subject: user.subject };
        if (Boolean(link.issuer) !== Boolean(link.subject)) throw new Error('Identidade exige issuer e subject juntos.');
        if (!link.issuer) report.unlinkedUsers++;
        const role = user.role || 'user';
        if (!['user','admin'].includes(role)) throw new Error('Papel de usuário inválido.');
        const params = [user.id, link.issuer || null, link.subject || null, user.email || '', user.full_name || '', role];
        const existing = (await tx.query('SELECT * FROM users WHERE id=$1', [user.id])).rows[0];
        if (existing && !replace) {
          if (!same([existing.id,existing.issuer,existing.subject,existing.email,existing.full_name,existing.role], params)) throw new Error('Usuário já existe com diferenças; revise antes de usar --replace.');
          continue;
        }
        await tx.query(`INSERT INTO users(id,issuer,subject,email,full_name,role,created_date) VALUES($1,$2,$3,$4,$5,$6,$7)
          ON CONFLICT(id) DO UPDATE SET issuer=excluded.issuer,subject=excluded.subject,email=excluded.email,full_name=excluded.full_name,role=excluded.role`, [...params,date(user.created_date)]);
      }
      report.entities.User = users.length;
      for (const [entity, name] of Object.entries(entityMap)) {
        const rows = await load(dir, entity + '.json');
        if (!Array.isArray(rows)) throw new Error(entity + '.json deve conter um array completo (use [] se vazio).');
        const spec = collections[name], seen = new Set();
        for (const row of rows) {
          id(row.id);
          if (seen.has(row.id)) throw new Error('IDs duplicados em ' + entity);
          seen.add(row.id);
          const data = spec.schema.parse(rewrite(Object.fromEntries(Object.entries(row).filter(([k]) => !metadata.has(k))), urls));
          if (spec.private && !seenUsers.has(row.created_by_id)) throw new Error('Proprietário ausente em ' + entity);
          const existing = (await tx.query(`SELECT * FROM ${spec.table} WHERE id=$1`, [row.id])).rows[0];
          if (existing && !replace) {
            if (!same(existing.data, data) || (spec.private && existing.user_id !== row.created_by_id)) throw new Error('Registro existente com diferenças em ' + entity + '; revise antes de --replace.');
            continue;
          }
          const fields = ['id','data','created_date','updated_date'];
          const params = [row.id,data,date(row.created_date),date(row.updated_date || row.created_date)];
          if (spec.private) { fields.push('user_id'); params.push(row.created_by_id); }
          if (name === 'favorites') { fields.push('tipo','chave'); params.push(data.tipo,data.chave); }
          await tx.query(`INSERT INTO ${spec.table}(${fields.join(',')}) VALUES(${params.map((_,i) => '$'+(i+1)).join(',')})
            ON CONFLICT(id) DO UPDATE SET ${fields.filter(k => k !== 'id').map(k => `${k}=excluded.${k}`).join(',')}`, params);
        }
        report.entities[entity] = rows.length;
      }
      const conversations = await load(dir, 'Conversation.json', []);
      for (const row of conversations) {
        id(row.id);
        const owner = row.user_id || row.created_by_id;
        if (!seenUsers.has(owner) || !Array.isArray(row.messages)) throw new Error('Conversa sem proprietário ou mensagens válidas.');
        if (row.messages.some(m => !['user','assistant'].includes(m.role) || typeof m.content !== 'string')) throw new Error('Formato de mensagem não suportado. Adapte explicitamente a exportação.');
        const messages = rewrite(row.messages, urls);
        const existing = (await tx.query('SELECT * FROM conversations WHERE id=$1', [row.id])).rows[0];
        if (existing && !replace) {
          if (existing.user_id !== owner || !same(existing.messages, messages)) throw new Error('Conversa existente com diferenças.');
          continue;
        }
        await tx.query(`INSERT INTO conversations(id,user_id,name,messages,created_date,updated_date) VALUES($1,$2,$3,$4,$5,$6)
          ON CONFLICT(id) DO UPDATE SET user_id=excluded.user_id,name=excluded.name,messages=excluded.messages,updated_date=excluded.updated_date`,
          [row.id,owner,row.name || 'Pesquisa Pediátrica',JSON.stringify(messages),date(row.created_date),date(row.updated_date || row.created_date)]);
      }
      report.entities.Conversation = conversations.length;
      const memory = await load(dir, 'Memory.json', []);
      for (const row of memory) {
        if (!seenUsers.has(row.user_id) || typeof row.content !== 'string') throw new Error('Memória inválida.');
        const existing = (await tx.query('SELECT content FROM research_memory WHERE user_id=$1', [row.user_id])).rows[0];
        if (existing && existing.content !== row.content && !replace) throw new Error('Memória existente com diferenças.');
        await tx.query('INSERT INTO research_memory(user_id,content) VALUES($1,$2) ON CONFLICT(user_id) DO UPDATE SET content=excluded.content', [row.user_id,row.content]);
      }
      report.entities.Memory = memory.length;
      if (!apply) throw dryRun;
    });
  } catch (e) { if (e !== dryRun) throw e; }
  return report;
}

export async function exportData(db, folder, { uploadDirectory } = {}) {
  await mkdir(folder, { recursive: false, mode: 0o700 });
  const manifest = {};
  await db.transaction(async tx => {
    await tx.query('SET TRANSACTION ISOLATION LEVEL REPEATABLE READ READ ONLY');
    const datasets = { User: (await tx.query('SELECT * FROM users ORDER BY id')).rows };
    for (const [entity, name] of Object.entries(entityMap)) datasets[entity] = (await tx.query(`SELECT * FROM ${collections[name].table} ORDER BY id`)).rows.map(record);
    datasets.Conversation = (await tx.query('SELECT id,user_id,name,messages,created_date,updated_date FROM conversations ORDER BY id')).rows;
    datasets.Memory = (await tx.query('SELECT * FROM research_memory ORDER BY user_id')).rows;
    for (const [entity, rows] of Object.entries(datasets)) {
      const body = JSON.stringify(rows, null, 2) + '\n';
      await writeFile(join(folder, entity + '.json'), body, { mode: 0o600, flag: 'wx' });
      manifest[entity] = { count: rows.length, sha256: createHash('sha256').update(body).digest('hex') };
    }
  });
  const files = [];
  if (uploadDirectory) {
    await mkdir(join(folder, 'files'), { mode: 0o700 });
    let entries = [];
    try { entries = await readdir(uploadDirectory, { withFileTypes: true }); } catch (e) { if (e.code !== 'ENOENT') throw e; }
    for (const entry of entries) {
      if (!entry.isFile() || !/^[a-zA-Z0-9._-]+$/.test(entry.name) || entry.name.startsWith('.')) continue;
      const bytes = await readFile(join(uploadDirectory,entry.name));
      await writeFile(join(folder,'files',entry.name),bytes,{mode:0o600});
      files.push({name:entry.name,path:'files/'+entry.name,sha256:createHash('sha256').update(bytes).digest('hex')});
    }
  }
  await writeFile(join(folder, 'files.json'), JSON.stringify(files,null,2), { mode: 0o600 });
  await writeFile(join(folder, 'manifest.json'), JSON.stringify(manifest, null, 2), { mode: 0o600 });
  return manifest;
}
