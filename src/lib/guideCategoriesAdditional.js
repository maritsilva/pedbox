// Categorias adicionais: Hipertensão Pulmonar, Antilipemiantes, ICC Refratária, Digitálicos, Broncodilatadores

import { hipertensaoPulmonarDrugs } from './guideDataHipertensaoPulmonar.js';
import { inibidoresPCSK9, sequestradoresAcidoBiliar, fibratosAntilipemiantes, omegaTres } from './guideDataAntilipemiantes.js';
import { estatinas } from './guideDataEstatinas.js';
import { insuficienciaCardiacaRefratariaDrugs, digitalicos } from './guideDataInsuficienciaCardiacaRefrataria.js';
import { broncodilatadoresAdrenergicosAcao } from './guideDataBroncodilatadores.js';
import { broncodilatadoresAdrenergicosLonga } from './guideDataBroncodilatadoresLonga.js';
import { anticolinergicos } from './guideDataAnticolinergicos.js';
import { prevencaoConjuntiviteNeonatal, antiviraisOftalmologia, glaucomaOftalmologia, antiinflamatoriasAntialerogicasOftalmologia, antimicrobianoOftalmologia } from './guideDataOftalmologia.js';
import { corticosteroideNasal, antialergicosNasais, descongestRinoNasais, antimicrobianosOtologicos, emolientesCerume } from './guideDataNasalOtologica.js';
import { ansiolíticosHipnóticos } from './guideDataAnsiolíticosHipnóticos.js';
import { anticonvulsivantes } from './guideDataAnticonvulsivantes.js';

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
  {
    id: 'broncodilatadores-acao-curta',
    label: 'Broncodilatadores Adrenérgicos de Ação Curta',
    color: 'cyan-500',
    icon: '💨',
    drugs: broncodilatadoresAdrenergicosAcao,
  },
  {
    id: 'broncodilatadores-acao-longa',
    label: 'Broncodilatadores Adrenérgicos de Ação Longa',
    color: 'blue-500',
    icon: '💨',
    drugs: broncodilatadoresAdrenergicosLonga,
  },
  {
    id: 'broncodilatadores-anticolinergico',
    label: 'Broncodilatadores Anticolinérgicos',
    color: 'teal-500',
    icon: '💨',
    drugs: anticolinergicos,
  },
  {
    id: 'oftalmologia-prevencao',
    label: 'Oftalmologia — Prevenção Conjuntivite Neonatal',
    color: 'blue-500',
    icon: '👁️',
    drugs: prevencaoConjuntiviteNeonatal,
  },
  {
    id: 'oftalmologia-antivirais',
    label: 'Oftalmologia — Antivirais',
    color: 'purple-500',
    icon: '🦠',
    drugs: antiviraisOftalmologia,
  },
  {
    id: 'oftalmologia-glaucoma',
    label: 'Oftalmologia — Tratamento do Glaucoma',
    color: 'green-500',
    icon: '💧',
    drugs: glaucomaOftalmologia,
  },
  {
    id: 'oftalmologia-anti-inflamatorio',
    label: 'Oftalmologia — Anti-inflamatórios e Antialérgicos',
    color: 'pink-500',
    icon: '✨',
    drugs: antiinflamatoriasAntialerogicasOftalmologia,
  },
  {
    id: 'oftalmologia-antimicrobiano',
    label: 'Oftalmologia — Antimicrobianos',
    color: 'orange-500',
    icon: '🧫',
    drugs: antimicrobianoOftalmologia,
  },
  {
    id: 'nasal-corticosteroide',
    label: 'Tópicos Nasais — Corticosteroides',
    color: 'cyan-500',
    icon: '👃',
    drugs: corticosteroideNasal,
  },
  {
    id: 'nasal-antialergico',
    label: 'Tópicos Nasais — Antialérgicos',
    color: 'indigo-500',
    icon: '💨',
    drugs: antialergicosNasais,
  },
  {
    id: 'nasal-descongestionante',
    label: 'Tópicos Nasais — Descongestionantes e Vasoconstritores',
    color: 'teal-500',
    icon: '🌊',
    drugs: descongestRinoNasais,
  },
  {
    id: 'otologico-antimicrobiano',
    label: 'Tópicos Otológicos — Antimicrobianos',
    color: 'amber-500',
    icon: '👂',
    drugs: antimicrobianosOtologicos,
  },
  {
    id: 'otologico-emoliente',
    label: 'Tópicos Otológicos — Emolientes de Cerume',
    color: 'yellow-500',
    icon: '💧',
    drugs: emolientesCerume,
  },
  {
    id: 'ansiolíticos-hipnóticos-benzodiazepínicos',
    label: 'Ansiolíticos e Hipnóticos — Benzodiazepínicos',
    color: 'blue-500',
    icon: '💊',
    drugs: ansiolíticosHipnóticos.filter(d => ['alprazolam', 'bromazepam', 'clonazepam', 'diazepam', 'flunitrazepam', 'lorazepam'].includes(d.id)),
  },
  {
    id: 'ansiolíticos-hipnóticos-outros',
    label: 'Ansiolíticos e Hipnóticos — Outros',
    color: 'purple-500',
    icon: '🌙',
    drugs: ansiolíticosHipnóticos.filter(d => ['zolpidem', 'buspirona', 'melatonina', 'valeriana'].includes(d.id)),
  },
  {
    id: 'anticonvulsivantes-geracao1',
    label: 'Anticonvulsivantes — Geração 1 (Clássicos)',
    color: 'blue-500',
    icon: '⚡',
    drugs: anticonvulsivantes.filter(d => ['valproato', 'fenobarbital', 'fenitoina', 'carbamazepina', 'primidona'].includes(d.id)),
  },
  {
    id: 'anticonvulsivantes-geracao2',
    label: 'Anticonvulsivantes — Geração 2 (Modernas)',
    color: 'cyan-500',
    icon: '🧠',
    drugs: anticonvulsivantes.filter(d => ['lamotrigina', 'oxcarbazepina', 'levetiracetam', 'topiramato', 'gabapentina', 'pregabalina', 'lacosamida'].includes(d.id)),
  },
  {
    id: 'anticonvulsivantes-outros',
    label: 'Anticonvulsivantes — Outros / Especiais',
    color: 'indigo-500',
    icon: '💊',
    drugs: anticonvulsivantes.filter(d => ['vigabatrina', 'rufinamida', 'clobazam'].includes(d.id)),
  },
];