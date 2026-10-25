// ÍNDICE CONSOLIDADO DE INFECTOLOGIA E IMUNIZAÇÕES — AAP RED BOOK (2024–2027)
import { REDBOOK_PART1_MAP } from './condutasRedbookPart1Data.js';
import { REDBOOK_PART2_MAP } from './condutasRedbookPart2Data.js';
import { REDBOOK_PART3_MAP } from './condutasRedbookPart3Data.js';

export const CONDUTAS_INFECCIOSAS_MAP = {
  ...REDBOOK_PART1_MAP,
  ...REDBOOK_PART2_MAP,
  ...REDBOOK_PART3_MAP,
};

export function getInfecciosasConteudo(idOrLabel) {
  if (!idOrLabel) return '';
  if (CONDUTAS_INFECCIOSAS_MAP[idOrLabel]) {
    return CONDUTAS_INFECCIOSAS_MAP[idOrLabel];
  }
  const normalized = String(idOrLabel)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return CONDUTAS_INFECCIOSAS_MAP[normalized] || '';
}
