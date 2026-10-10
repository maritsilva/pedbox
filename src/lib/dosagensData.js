import { DOSE_REVIEW } from './doseReview.js';
/**
 * Dosagens — Cálculo Rápido
 * Catálogo legado: dados sujeitos a conferência individual de fontes clínicas.
 */

import { PART1_CATEGORIAS } from './dosagensData_part1.js';
import { PART2_CATEGORIAS } from './dosagensData_part2.js';
import { PART3_CATEGORIAS } from './dosagensData_part3.js';
import { PART4_CATEGORIAS } from './dosagensData_part4.js';

const SOURCE_CATEGORIES = [
  ...PART1_CATEGORIAS,
  ...PART2_CATEGORIAS,
  ...PART3_CATEGORIAS,
  ...PART4_CATEGORIAS,
];

// Keep source records intact. Omit only a runtime duplicate whose indications
// are byte-for-byte contained in a more complete record with the same ID.
export const DOSAGENS_CATEGORIAS = SOURCE_CATEGORIES.map(cat => ({
  ...cat,
  drugs: cat.drugs.filter((drug, index, all) => !all.some((other, otherIndex) =>
    other.id === drug.id && otherIndex !== index &&
    (other.indicacoes.length > drug.indicacoes.length || (other.indicacoes.length === drug.indicacoes.length && otherIndex < index)) &&
    drug.indicacoes.every(indication => other.indicacoes.some(candidate => JSON.stringify(candidate) === JSON.stringify(indication)))
  )),
}));

export function getAllDosagens() {
  return DOSAGENS_CATEGORIAS.flatMap(cat =>
    cat.drugs.map(d => ({
      ...d,
      indicacoes: d.indicacoes.map(i => ({...i, ...DOSE_REVIEW[`${d.id}/${i.id}`]})),
      catLabel: cat.label,
      catColor: cat.color,
      catIcon: cat.icon,
      catId: cat.id,
      // Para a busca rápida na Home: usar dose da primeira indicação
      dose_min: d.indicacoes[0]?.dose_min ?? null,
      dose_max: d.indicacoes[0]?.dose_max ?? null,
      unidade: d.indicacoes[0]?.unidade ?? '',
    }))
  );
}