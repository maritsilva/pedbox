import React, { useState } from 'react';
import ScoreCalculatorLayout from '@/components/calculators/ScoreCalculatorLayout';

const CRITERIA = [
  {
    id: 'comportamento',
    label: 'Comportamento / Estado Neurológico',
    subtitle: 'Nível de alerta, interação e resposta a estímulos',
    icon: '🧠',
    iconBg: 'bg-indigo-50 text-indigo-600',
    options: [
      { label: 'Brincando / Apropriado', desc: 'Alerta, ativo, consolável e interativo conforme a idade', value: 0 },
      { label: 'Dormindo', desc: 'Sonolento mas prontamente despertável ao toque ou chamada', value: 1 },
      { label: 'Irritável', desc: 'Inconsolável, choro persistente, difícil de acalmar', value: 2 },
      { label: 'Letárgico / Confuso', desc: 'Redução importante da resposta, sonolência profunda ou desorientação', value: 3 },
      { label: 'Não responsivo / Coma', desc: 'Sem resposta a estímulos ou resposta reflexa mínima à dor', value: 4 },
    ],
  },
  {
    id: 'cardiovascular',
    label: 'Cardiovascular / Perfusão Periférica',
    subtitle: 'Coloração cutânea e Tempo de Enchimento Capilar (TEC)',
    icon: '❤️',
    iconBg: 'bg-rose-50 text-rose-600',
    options: [
      { label: 'Rosado, TEC < 3s', desc: 'Perfusão periférica rápida e coloração rosada normal', value: 0 },
      { label: 'Pálido OU TEC = 3s', desc: 'Palidez cutaneomucosa discreta ou perfusão limítrofe', value: 1 },
      { label: 'Acinzentado OU TEC = 4s', desc: 'Pele acinzentada ou lentificação moderada da perfusão', value: 2 },
      { label: 'Cinza / Moteado OU TEC ≥ 5s', desc: 'Livedo reticular, pele fria, moteada e má perfusão grave', value: 3 },
    ],
  },
  {
    id: 'respiratorio',
    label: 'Padrão Respiratório e Frequência',
    subtitle: 'Frequência respiratória e uso de musculatura acessória',
    icon: '🫁',
    iconBg: 'bg-sky-50 text-sky-600',
    options: [
      { label: 'Normal para idade', desc: 'FR na faixa de normalidade, sem tiragens ou gemência', value: 0 },
      { label: 'FR > 10 acima do normal', desc: 'Taquipneia leve sem retração torácica aparente', value: 1 },
      { label: 'FR > 20 acima OU musculatura acessória', desc: 'Taquipneia evidente ou tiragem subcostal/intercostal', value: 2 },
      { label: 'FR < 5 abaixo OU tiragens intensas', desc: 'Bradipneia preocupante ou esforço respiratório acentuado', value: 3 },
      { label: 'FR ≥ 5 abaixo OU gemido / estridor', desc: 'Bradipneia grave ou estridor em repouso / gemido contínuo', value: 4 },
    ],
  },
  {
    id: 'o2',
    label: 'Necessidade de Oxigenoterapia',
    subtitle: 'Suporte ventilatório adicional para manter oximetria',
    icon: '💨',
    iconBg: 'bg-teal-50 text-teal-600',
    options: [
      { label: 'Ar ambiente (SpO₂ > 94%)', desc: 'Boa saturação sem necessidade de oxigênio suplementar', value: 0 },
      { label: 'Qualquer O₂ suplementar', desc: 'Cateter nasal ou máscara de baixo fluxo para manter saturação', value: 2 },
      { label: 'O₂ ≥ 6 L/min ou FiO₂ ≥ 50%', desc: 'Alto fluxo, máscara não reinalante ou suporte avançado', value: 3 },
    ],
  },
  {
    id: 'nebulizacao',
    label: 'Nebulizações nas Últimas 4h',
    subtitle: 'Frequência de broncodilatadores de resgate administrados',
    icon: '💊',
    iconBg: 'bg-amber-50 text-amber-600',
    options: [
      { label: 'Nenhuma nebulização', desc: 'Sem broncodilatador inalatório recente', value: 0 },
      { label: '1 nebulização', desc: 'Uma administração de broncodilatador nas últimas 4 horas', value: 1 },
      { label: '≥ 2 nebulizações', desc: 'Múltiplas nebulizações de resgate nas últimas 4 horas', value: 2 },
    ],
  },
  {
    id: 'vomitos',
    label: 'Vômitos Persistentes (Pós-operatório)',
    subtitle: 'Tolerância gástrica e emese incoercível pós-cirúrgica',
    icon: '🏥',
    iconBg: 'bg-slate-50 text-slate-600',
    options: [
      { label: 'Sem vômitos / Não cirúrgico', desc: 'Paciente estável ou sem episódios eméticos recorrentes', value: 0 },
      { label: 'Vômitos persistentes', desc: 'Episódios repetidos de vômito com risco de aspiração ou desidratação', value: 2 },
    ],
  },
];

const REFERENCE_TABLE = [
  {
    label: 'Verde (Baixo Risco)',
    range: '0 a 2 pontos',
    desc: 'Estabilidade clínica. Reavaliação a cada 4 a 8 horas, cuidados rotineiros.',
    status: 'normal',
  },
  {
    label: 'Amarelo (Risco Moderado)',
    range: '3 a 4 pontos',
    desc: 'Sinais de alerta. Reavaliar a cada 2 a 4 horas e comunicar equipe de enfermagem.',
    status: 'warning',
  },
  {
    label: 'Laranja (Risco Alto)',
    range: '5 a 6 pontos',
    desc: 'Deterioração clínica iminente. Avaliação médica presencial imediata em até 30 min.',
    status: 'warning',
  },
  {
    label: 'Vermelho (Emergência)',
    range: '≥ 7 pontos',
    desc: 'Risco crítico. Acionar Time de Resposta Rápida (TRR) e preparar leito de UTI.',
    status: 'danger',
  },
];

const CLINICAL_NOTES = [
  'O PEWS (Pediatric Early Warning Score) monitora e previne deterioração clínica hospitalar em enfermarias pediátricas.',
  'Ponto de corte de segurança: qualquer critério individual com pontuação máxima (≥ 3) exige avaliação médica imediata independente da pontuação total.',
  'Se o paciente apresentar pontuação ≥ 7 ou piora abrupta de 2 pontos entre avaliações consecutivas, acione imediatamente o Time de Resposta Rápida.',
];

function getClassification(total) {
  if (total <= 2) {
    return {
      label: 'Verde — Baixo Risco (PEWS ' + total + ')',
      status: 'normal',
      description: 'Condição clínica estável sem evidências de deterioração aguda.',
      conduta: 'Manter monitorização e reavaliação clínica a cada 4 a 8 horas de acordo com a rotina do setor.',
    };
  }
  if (total <= 4) {
    return {
      label: 'Amarelo — Risco Moderado (PEWS ' + total + ')',
      status: 'warning',
      description: 'Alterações fisiológicas leves a moderadas com potencial de descompensação.',
      conduta: 'Reavaliar a cada 2 a 4 horas. Comunicar médico de plantão e revisar plano terapêutico.',
    };
  }
  if (total <= 6) {
    return {
      label: 'Laranja — Risco Alto (PEWS ' + total + ')',
      status: 'warning',
      description: 'Deterioração fisiológica significativa em curso.',
      conduta: 'Avaliação médica presencial em até 30 minutos. Monitorização contínua de sinais vitais e reavaliação horária.',
    };
  }
  return {
    label: 'Vermelho — Emergência Crítica (PEWS ' + total + ')',
    status: 'danger',
    description: 'Risco iminente de parada cardiorrespiratória ou falência de múltiplos órgãos.',
    conduta: 'Acionamento IMEDIATO do Time de Resposta Rápida (TRR) ou equipe de emergência. Preparar transferência para UTI Pediátrica.',
  };
}

export default function PEWS() {
  const [scores, setScores] = useState({});

  const handleSelectOption = (criterionId, value) => {
    setScores((prev) => ({
      ...prev,
      [criterionId]: value,
    }));
  };

  const handleReset = () => {
    setScores({});
  };

  const allAnswered = CRITERIA.every((c) => scores[c.id] !== undefined);
  const total = Object.values(scores).reduce((a, b) => a + Number(b), 0);
  const classification = allAnswered ? getClassification(total) : null;

  return (
    <ScoreCalculatorLayout
      title="PEWS — Pediatric Early Warning Score"
      eyebrow="Escore de Alerta Precoce Pediátrico"
      subtitle="Detecção precoce de deterioração clínica e prevenção de paradas cardiorrespiratórias em pacientes internados"
      icon3d="⚠️"
      criteria={CRITERIA}
      scores={scores}
      onSelectOption={handleSelectOption}
      maxScore={18}
      classification={classification}
      referenceTable={REFERENCE_TABLE}
      clinicalNotes={CLINICAL_NOTES}
      onReset={handleReset}
      referenceSource="Monaghan A. Detecting and managing deterioration in children. Paediatr Nurs. 2005; Duncan H et al. Nature Pediatr Res 2006."
    />
  );
}