import { getAllGuideDrugs } from './guideData';

/**
 * Normaliza texto: minúsculas, sem acentos, sem caracteres especiais
 */
function normalize(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim();
}

/**
 * Extrai todas as strings pesquisáveis de um medicamento:
 * nome, sufixo/sinonimos e todas as marcas comerciais
 */
function getDrugSearchTokens(drug) {
  const tokens = [];

  // nome principal e sufixo
  if (drug.name) tokens.push(normalize(drug.name));
  if (drug.suffix) tokens.push(normalize(drug.suffix));

  // marcas: cada string de brand pode conter "Marca1 / Marca2 — descrição"
  if (Array.isArray(drug.brands)) {
    drug.brands.forEach(b => {
      // pega a parte antes do "—" e separa por "/"
      const before = b.split('—')[0];
      before.split('/').forEach(part => {
        tokens.push(normalize(part));
      });
    });
  }

  return tokens;
}

/**
 * Busca inteligente: retorna medicamentos que correspondam ao termo
 * por nome, sufixo ou qualquer marca comercial
 */
export function searchDrugs(query, limit = 8) {
  if (!query || normalize(query).length < 2) return [];
  const q = normalize(query);

  const allDrugs = getAllGuideDrugs();
  const results = [];

  for (const drug of allDrugs) {
    const tokens = getDrugSearchTokens(drug);
    // match exato no início tem prioridade
    const exactStart = tokens.some(t => t.startsWith(q));
    const contains = tokens.some(t => t.includes(q));

    if (exactStart || contains) {
      results.push({ drug, score: exactStart ? 2 : 1 });
    }
  }

  // ordenar por score (exactStart primeiro) e deduplicar por id
  const seen = new Set();
  return results
    .sort((a, b) => b.score - a.score)
    .filter(({ drug }) => {
      if (seen.has(drug.id)) return false;
      seen.add(drug.id);
      return true;
    })
    .slice(0, limit)
    .map(({ drug }) => drug);
}