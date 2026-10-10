import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { collections, httpError, record } from './schemas.js';

export function installCollections(app, db) {
  for (const [name, spec] of Object.entries(collections)) {
    const route = '/api/v1/' + name;
    const authorize = (req, write = false) => {
      if ((spec.private || write) && !req.user) throw httpError(401, 'Entre para continuar.');
      if (!spec.private && write && req.user.role !== 'admin') throw httpError(403, 'Acesso restrito ao administrador.');
    };
    app.get(route, async (req, res) => {
      authorize(req);
      const { offset, limit, sort } = z.object({
        offset: z.coerce.number().int().min(0).max(10000000).default(0),
        limit: z.coerce.number().int().min(1).max(200).default(100),
        sort: z.enum(['created_date','-created_date','updated_date','-updated_date']).default('-created_date'),
      }).parse(req.query);
      const params = [], where = [];
      if (name === 'contents' && req.user?.role !== 'admin') where.push("COALESCE(data->>'publication_status', 'published') = 'published'");
      if (spec.private) { params.push(req.user.id); where.push(`user_id=$${params.length}`); }
      if (req.query.filter) {
        let filter;
        try { filter = JSON.parse(req.query.filter); } catch { throw httpError(422, 'Filtro inválido.'); }
        const allowed = name === 'favorites' ? ['tipo','chave'] : ['created_by_id'];
        if (!filter || typeof filter !== 'object' || Array.isArray(filter) || Object.keys(filter).some(key => !allowed.includes(key))) throw httpError(422, 'Filtro inválido.');
        for (const [key, value] of Object.entries(filter)) {
          if (typeof value !== 'string' || value.length > 1000) throw httpError(422, 'Filtro inválido.');
          if (key === 'created_by_id') {
            if (!req.user || value !== req.user.id) throw httpError(403, 'Acesso negado.');
          } else { params.push(value); where.push(`${key}=$${params.length}`); }
        }
      }
      const order = sort.startsWith('-') ? 'DESC' : 'ASC';
      const column = sort.replace('-', ''); // enum validated above
      params.push(limit, offset);
      const { rows } = await db.query(`SELECT * FROM ${spec.table} ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY ${column} ${order},id ${order} LIMIT $${params.length - 1} OFFSET $${params.length}`, params);
      res.json({ items: rows.map(record), nextOffset: rows.length === limit ? offset + limit : null });
    });
    app.post(route, async (req, res) => {
      authorize(req, true);
      const data = spec.schema.parse(req.body), id = randomUUID();
      if (name === 'contents') data.publication_status = 'draft';
      const fields = ['id','data'], params = [id, data];
      if (spec.private) { fields.push('user_id'); params.push(req.user.id); }
      if (name === 'favorites') { fields.push('tipo','chave'); params.push(data.tipo, data.chave); }
      const conflict = name === 'favorites' ? 'ON CONFLICT(user_id,tipo,chave) DO UPDATE SET data=excluded.data,updated_date=now()' : '';
      const { rows } = await db.query(`INSERT INTO ${spec.table}(${fields.join(',')}) VALUES(${params.map((_, i) => '$' + (i + 1)).join(',')}) ${conflict} RETURNING *`, params);
      res.status(201).json(record(rows[0]));
    });
    app.patch(route + '/:id', async (req, res) => {
      authorize(req, true);
      if (name === 'favorites') throw httpError(405, 'Crie ou remova o favorito por tipo e chave.');
      const patch = spec.schema.partial().parse(req.body);
      const params = [req.params.id];
      const owner = spec.private ? ' AND user_id=$2' : '';
      if (spec.private) params.push(req.user.id);
      const result = await db.transaction(async tx => {
        const { rows } = await tx.query(`SELECT * FROM ${spec.table} WHERE id=$1${owner} FOR UPDATE`, params);
        if (!rows.length) throw httpError(404, 'Registro não encontrado.');
        const data = spec.schema.parse({ ...rows[0].data, ...patch });
        if (name === 'contents') {
          const contentChanged = ['conteudo','imagens','topico_label','review_sources'].some(key => key in patch);
          if (contentChanged) data.publication_status = 'draft';
          if (data.publication_status === 'published' && !(data.review_sources?.trim() && data.conteudo?.trim())) throw httpError(422, 'Conteúdo e referências são obrigatórios para publicar.');
        }
        return (await tx.query(`UPDATE ${spec.table} SET data=$1,updated_date=now() WHERE id=$2 RETURNING *`, [data, req.params.id])).rows[0];
      });
      res.json(record(result));
    });
    app.delete(route + '/:id', async (req, res) => {
      authorize(req, true);
      const params = [req.params.id];
      if (spec.private) params.push(req.user.id);
      const { rows } = await db.query(`DELETE FROM ${spec.table} WHERE id=$1${spec.private ? ' AND user_id=$2' : ''} RETURNING id`, params);
      if (!rows.length) throw httpError(404, 'Registro não encontrado.');
      res.json({ ok: true });
    });
  }
  app.delete('/api/v1/favorites', async (req, res) => {
    if (!req.user) throw httpError(401, 'Entre para continuar.');
    const { tipo, chave } = collections.favorites.schema.parse(req.body);
    await db.query('DELETE FROM favorites WHERE user_id=$1 AND tipo=$2 AND chave=$3', [req.user.id, tipo, chave]);
    res.json({ ok: true });
  });
}
