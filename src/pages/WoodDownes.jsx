import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wind, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

const CRITERIA = [
  {
    id: 'sibilancias',
    label: 'Sibilâncias',
    options: [
      { value: 0, label: 'Sem sibilâncias' },
      { value: 1, label: 'Final da expiração (com estetoscópio)' },
      { value: 2, label: 'Toda expiração (com estetoscópio)' },
      { value: 3, label: 'Ins. + esp. / sem estetoscópio' },
    ],
  },
  {
    id: 'retracoes',
    label: 'Retrações',
    options: [
      { value: 0, label: 'Sem retrações' },
      { value: 1, label: 'Intercostais leves' },
      { value: 2, label: 'Intercostais + subcostais' },
      { value: 3, label: 'Intercostais + subcostais + supraesternais' },
    ],
  },
  {
    id: 'entrada_ar',
    label: 'Entrada de ar',
    options: [
      { value: 0, label: 'Normal / simétrica' },
      { value: 1, label: 'Discreta diminuição' },
      { value: 2, label: 'Importante diminuição' },
      { value: 3, label: 'Ausente / mínima' },
    ],
  },
  {
    id: 'cianose',
    label: 'Cianose',
    options: [
      { value: 0, label: 'Sem cianose' },
      { value: 1, label: 'Perioral em repouso' },
      { value: 2, label: 'Generalizada em repouso' },
    ],
  },
  {
    id: 'fr',
    label: 'Frequência Respiratória',
    options: [
      { value: 0, label: '≤ 30 ipm' },
      { value: 1, label: '31–45 ipm' },
      { value: 2, label: '46–60 ipm' },
      { value: 3, label: '> 60 ipm' },
    ],
  },
  {
    id: 'fc',
    label: 'Frequência Cardíaca',
    options: [
      { value: 0, label: '≤ 120 bpm' },
      { value: 1, label: '121–140 bpm' },
      { value: 2, label: '> 140 bpm' },
    ],
  },
];

function getClassification(score) {
  if (score <= 3) return {
    label: 'Leve',
    color: 'green',
    bg: 'bg-green-50',
    border: 'border-green-300',
    text: 'text-green-800',
    badge: 'bg-green-100 text-green-800',
    icon: <CheckCircle className="w-8 h-8 text-green-600" />,
    description: 'Desconforto respiratório leve. Tratamento ambulatorial com reavaliação.',
    conduct: [
      'Suporte domiciliar com orientações aos pais',
      'Posicionamento: cabeceira elevada 30°',
      'Higiene nasal com soro fisiológico',
      'Aleitamento materno / hidratação oral',
      'Retorno se piora dos sintomas',
    ],
  };
  if (score <= 6) return {
    label: 'Moderada',
    color: 'yellow',
    bg: 'bg-yellow-50',
    border: 'border-yellow-300',
    text: 'text-yellow-800',
    badge: 'bg-yellow-100 text-yellow-800',
    icon: <Activity className="w-8 h-8 text-yellow-600" />,
    description: 'Desconforto respiratório moderado. Avaliação hospitalar recomendada.',
    conduct: [
      'Internação hospitalar para observação',
      'Oxigênio suplementar se SpO₂ < 94%',
      'Higiene nasal frequente',
      'Hidratação adequada (oral ou EV se necessário)',
      'Fisioterapia respiratória conforme protocolo',
      'Monitorização contínua de SpO₂ e FC',
    ],
  };
  if (score <= 9) return {
    label: 'Grave',
    color: 'orange',
    bg: 'bg-orange-50',
    border: 'border-orange-300',
    text: 'text-orange-800',
    badge: 'bg-orange-100 text-orange-800',
    icon: <AlertTriangle className="w-8 h-8 text-orange-600" />,
    description: 'Desconforto respiratório grave. Internação imediata necessária.',
    conduct: [
      'Internação hospitalar imediata',
      'Oxigenoterapia suplementar (alvo SpO₂ > 94%)',
      'Considerar CNAF (Cânula Nasal de Alto Fluxo)',
      'Acesso venoso periférico',
      'Hidratação endovenosa',
      'Monitorização contínua',
      'Considerar transferência para UTI pediátrica',
    ],
  };
  return {
    label: 'Muito Grave',
    color: 'red',
    bg: 'bg-red-50',
    border: 'border-red-300',
    text: 'text-red-800',
    badge: 'bg-red-100 text-red-800',
    icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
    description: 'Insuficiência respiratória iminente. UTI pediátrica urgente.',
    conduct: [
      'Transferência imediata para UTI pediátrica',
      'Suporte ventilatório não invasivo (VNI/CNAF)',
      'Considerar intubação orotraqueal',
      'Monitorização intensiva (ECG, SpO₂, capnografia)',
      'Acesso venoso seguro / IOT se apneia',
    ],
  };
}

export default function WoodDownes() {
  const [scores, setScores] = useState({});
  const [total, setTotal] = useState(null);

  const allAnswered = CRITERIA.every(c => scores[c.id] !== undefined);

  useEffect(() => {
    if (allAnswered) {
      const sum = Object.values(scores).reduce((a, b) => a + b, 0);
      setTotal(sum);
    } else {
      setTotal(null);
    }
  }, [scores, allAnswered]);

  const classification = total !== null ? getClassification(total) : null;

  const handleReset = () => {
    setScores({});
    setTotal(null);
  };

  const colorBar = (score) => {
    if (score <= 3) return 'bg-green-500';
    if (score <= 6) return 'bg-yellow-500';
    if (score <= 9) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pb-12">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Wind className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">Wood-Downes-Ferrés</h1>
          </div>
          <p className="text-gray-600 text-base">Escala de gravidade para bronquiolite</p>
          <p className="text-xs text-gray-400 mt-1">Lactentes com suspeita de bronquiolite viral aguda</p>
        </motion.div>

        {/* Criteria Cards */}
        <div className="space-y-4 mb-6">
          {CRITERIA.map((criterion, idx) => (
            <motion.div
              key={criterion.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className={`bg-white rounded-2xl shadow-sm border-2 transition-all ${
                scores[criterion.id] !== undefined
                  ? 'border-blue-300'
                  : 'border-gray-100'
              } p-5`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-800 text-base">{criterion.label}</h3>
                {scores[criterion.id] !== undefined && (
                  <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {scores[criterion.id]} pt{scores[criterion.id] !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                {criterion.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setScores(prev => ({ ...prev, [criterion.id]: opt.value }))}
                    className={`w-full text-left px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                      scores[criterion.id] === opt.value
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <span className={`inline-block w-5 h-5 rounded-full border-2 mr-2 align-middle text-xs font-bold text-center leading-4 ${
                      scores[criterion.id] === opt.value
                        ? 'bg-white border-white text-blue-600'
                        : 'bg-white border-gray-300 text-gray-500'
                    }`}>
                      {opt.value}
                    </span>
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result */}
        {classification && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-2xl border-2 ${classification.border} ${classification.bg} p-6 mb-6 shadow-md`}
          >
            <div className="flex items-center gap-4 mb-4">
              {classification.icon}
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Pontuação Total</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-extrabold ${classification.text}`}>{total}</span>
                  <span className="text-gray-400 text-sm">/ 14</span>
                </div>
              </div>
              <span className={`ml-auto text-lg font-extrabold px-4 py-2 rounded-xl ${classification.badge}`}>
                {classification.label}
              </span>
            </div>

            {/* Score bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(total / 14) * 100}%` }}
                transition={{ duration: 0.5 }}
                className={`h-3 rounded-full ${colorBar(total)}`}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-4">
              <span>0 — Leve</span>
              <span>4 — Moderado</span>
              <span>7 — Grave</span>
              <span>10 — Muito grave</span>
            </div>

            <p className={`text-sm font-semibold ${classification.text} mb-3`}>{classification.description}</p>

            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Conduta sugerida</p>
              <ul className="space-y-1">
                {classification.conduct.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colorBar(total).replace('bg-', 'bg-')}`} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Score Reference Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6"
        >
          <h3 className="font-bold text-gray-800 mb-3">Interpretação da Escala</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              { range: '0 – 3', label: 'Leve', color: 'bg-green-100 text-green-800' },
              { range: '4 – 6', label: 'Moderada', color: 'bg-yellow-100 text-yellow-800' },
              { range: '7 – 9', label: 'Grave', color: 'bg-orange-100 text-orange-800' },
              { range: '10 – 14', label: 'Muito Grave', color: 'bg-red-100 text-red-800' },
            ].map(row => (
              <div key={row.label} className={`flex justify-between items-center rounded-xl px-4 py-2 font-semibold ${row.color}`}>
                <span>{row.range} pts</span>
                <span>{row.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mb-4">
          Escala de Wood-Downes modificada por Ferrés. Pontuação máxima: 14 pontos.<br />
          Use como suporte à decisão clínica, não substitui avaliação médica individualizada.
        </p>

        {/* Reset */}
        {Object.keys(scores).length > 0 && (
          <button
            onClick={handleReset}
            className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:border-gray-400 hover:text-gray-700 transition-all text-sm"
          >
            Limpar e recalcular
          </button>
        )}
      </div>
    </div>
  );
}