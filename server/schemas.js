import { z } from 'zod';

const text = z.string().max(1000);
const short = text.optional();
const url = z.string().max(4000).refine(v => /^https?:\/\//i.test(v) || /^\/uploads\/[a-zA-Z0-9._-]+$/.test(v), 'URL inválida');
// An explicit allowlist, not an arbitrary entity proxy. Unknown fields are rejected.
export const collections = {
  favorites: { table: 'favorites', private: true, schema: z.object({
    tipo: z.enum(['ferramenta','medicamento','dosagem','anotacao']), chave: text.min(1), label: short,
  }).strict() },
  notes: { table: 'notes', private: true, schema: z.object({
    titulo: text.min(1), conteudo: z.string().max(200000).optional(), cor: z.enum(['yellow','blue','green','pink','purple']).default('yellow'),
  }).strict() },
  categories: { table: 'custom_categories', schema: z.object({
    categoria_id: short, label: text.min(1), icon: text, color: text,
    subcategorias: z.array(z.object({ id: text, label: text }).strict()).max(1000).optional(),
  }).strict() },
  contents: { table: 'clinical_contents', schema: z.object({
    publication_status: z.enum(['draft','published']).default('draft'),
    review_sources: z.string().max(20000).optional(),
    categoria_id: short, categoria_label: text.min(1), categoria_icon: short, categoria_color: short,
    subcategoria_id: short, subcategoria_label: short, topico_id: short, topico_label: text.min(1),
    conteudo: z.string().max(1000000).optional(), imagens: z.array(url).max(100).optional(), is_custom: z.boolean().optional(),
  }).strict() },
  'library-links': { table: 'library_links', schema: z.object({
    titulo: text.min(1), url, descricao: z.string().max(20000).optional(), categoria: short, icone: short,
  }).strict() },
  'user-links': { table: 'user_links', private: true, schema: z.object({
    titulo: text.min(1), url, descricao: z.string().max(20000).optional(), categoria: short, icone: short,
  }).strict() },
  vaccines: { table: 'vaccines', schema: z.object({
    nome: text.min(1), idade: text.min(1), previne: text.min(1), composicao: short, indicacao: short,
    contraindicacao: short, esquema: short, via: short, efeitosAdversos: short, ondeEncontrar: short,
  }).strict() },
};

export function record(row) {
  return { ...row.data, id: row.id, created_date: row.created_date, updated_date: row.updated_date,
    ...(row.user_id ? { created_by_id: row.user_id } : {}) };
}

export function httpError(status, message) { return Object.assign(new Error(message), { status }); }
