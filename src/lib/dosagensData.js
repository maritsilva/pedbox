/**
 * Dosagens — Cálculo Rápido
 * Baseado no pedb.com.br — todas as categorias clonadas
 */

import { PART1_CATEGORIAS } from './dosagensData_part1.js';
import { PART2_CATEGORIAS } from './dosagensData_part2.js';
import { PART3_CATEGORIAS } from './dosagensData_part3.js';
import { PART4_CATEGORIAS } from './dosagensData_part4.js';

export const DOSAGENS_CATEGORIAS = [
  ...PART1_CATEGORIAS,
  ...PART2_CATEGORIAS,
  ...PART3_CATEGORIAS,
  ...PART4_CATEGORIAS,
];

export function getAllDosagens() {
  return DOSAGENS_CATEGORIAS.flatMap(cat =>
    cat.drugs.map(d => ({
      ...d,
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