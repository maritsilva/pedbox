// Categorias adicionais: Hipertensão Pulmonar, Antilipemiantes, ICC Refratária, Digitálicos

import { hipertensaoPulmonarDrugs } from './guideDataHipertensaoPulmonar.js';
import { inibidoresPCSK9, sequestradoresAcidoBiliar, fibratosAntilipemiantes, omegaTres } from './guideDataAntilipemiantes.js';
import { estatinas } from './guideDataEstatinas.js';
import { insuficienciaCardiacaRefratariaDrugs, digitalicos } from './guideDataInsuficienciaCardiacaRefrataria.js';

export const ADDITIONAL_CATEGORIES = [
  {
    id: 'hipertensao-pulmonar',
    label: 'Tratamento da Hipertensão Pulmonar',
    color: 'pink-500',
    icon: '🫁',
    drugs: hipertensaoPulmonarDrugs,
  },
  {
    id: 'inibidores-pcsk9',
    label: 'Antilipemiantes — Inibidores PCSK9',
    color: 'purple-500',
    icon: '💊',
    drugs: inibidoresPCSK9,
  },
  {
    id: 'sequestrador-acido-biliar',
    label: 'Antilipemiantes — Sequestrador de Ácido Biliar',
    color: 'blue-500',
    icon: '🧬',
    drugs: sequestradoresAcidoBiliar,
  },
  {
    id: 'fibratos-antilipemiantes',
    label: 'Antilipemiantes — Fibratos',
    color: 'orange-500',
    icon: '💄',
    drugs: fibratosAntilipemiantes,
  },
  {
    id: 'omega-tres',
    label: 'Antilipemiantes — Ômega 3',
    color: 'cyan-500',
    icon: '🐟',
    drugs: omegaTres,
  },
  {
    id: 'estatinas',
    label: 'Antilipemiantes — Estatinas',
    color: 'indigo-500',
    icon: '💊',
    drugs: estatinas,
  },
  {
    id: 'insuficiencia-cardiaca-refrataria',
    label: 'Tratamento da Insuficiência Cardíaca Refratária',
    color: 'red-500',
    icon: '❤️',
    drugs: insuficienciaCardiacaRefratariaDrugs,
  },
  {
    id: 'digitalicos',
    label: 'Digitálicos',
    color: 'amber-500',
    icon: '💊',
    drugs: digitalicos,
  },
];