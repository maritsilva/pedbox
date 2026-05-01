import React, { useState } from 'react';
import { Syringe, Info, ChevronDown, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AGES = [
  { label: 'Ao nascer', id: 'nascimento', color: 'indigo' },
  { label: '1 mês', id: 'mes1', color: 'indigo' },
  { label: '2 meses', id: 'mes2', color: 'purple' },
  { label: '3 meses', id: 'mes3', color: 'purple' },
  { label: '4 meses', id: 'mes4', color: 'blue' },
  { label: '5 meses', id: 'mes5', color: 'blue' },
  { label: '6 meses', id: 'mes6', color: 'cyan' },
  { label: '7 meses', id: 'mes7', color: 'cyan' },
  { label: '9 meses', id: 'mes9', color: 'teal' },
  { label: '12 meses', id: 'mes12', color: 'green' },
  { label: '15 meses', id: 'mes15', color: 'green' },
  { label: '18 meses', id: 'mes18', color: 'emerald' },
  { label: '24 meses', id: 'mes24', color: 'emerald' },
  { label: '4 anos', id: 'anos4', color: 'orange' },
  { label: '5-6 anos', id: 'anos5-6', color: 'amber' },
  { label: '9+ anos', id: 'anos9+', color: 'rose' },
];

const VACCINES = {
  nascimento: [
    { name: 'BCG', ms: true, obs: 'Dose única. Aplicar precocemente' },
    { name: 'Hepatite B', ms: true, obs: '1ª dose ao nascer' },
  ],
  mes1: [
    { name: 'Hepatite B', ms: false, sbim: true, obs: 'Esquema 0, 1 e 6 meses' },
  ],
  mes2: [
    { name: 'Penta (DTPw + Hib + Hepatite B)', ms: true, obs: '1ª dose' },
    { name: 'VIP — poliomielite inativada', ms: true, obs: '1ª dose' },
    { name: 'Pneumocócica conjugada (VPC10)', ms: true, obs: '1ª dose' },
    { name: 'Rotavírus humano', ms: true, obs: 'Monovalente, 1ª dose' },
    { name: 'DTPa / penta acelular', ms: false, sbim: true, obs: 'SBIm prefere acelular' },
    { name: 'Pneumocócica VPC15/VPC20', ms: false, sbim: true, obs: 'SBIm prefere ampliar sorotipos' },
    { name: 'Rotavírus pentavalente', ms: false, sbim: true, obs: 'Disponível no privado' },
  ],
  mes3: [
    { name: 'Meningocócica C', ms: true, obs: '1ª dose' },
    { name: 'Meningocócica ACWY', ms: false, sbim: true, obs: 'SBIm prefere pela cobertura ampla' },
    { name: 'Meningocócica B', ms: false, sbim: true, obs: 'SBIm recomenda 1ª dose' },
  ],
  mes4: [
    { name: 'Penta (DTPw + Hib + Hepatite B)', ms: true, obs: '2ª dose' },
    { name: 'VIP — poliomielite inativada', ms: true, obs: '2ª dose' },
    { name: 'Pneumocócica conjugada (VPC10)', ms: true, obs: '2ª dose' },
    { name: 'Rotavírus humano', ms: true, obs: '2ª dose' },
    { name: 'DTPa / penta acelular', ms: false, sbim: true, obs: 'Alternativa SBIm/privado' },
    { name: 'Pneumocócica VPC15/VPC20', ms: false, sbim: true, obs: 'Alternativa ampliada' },
    { name: 'Rotavírus pentavalente', ms: false, sbim: true, obs: '2ª dose' },
  ],
  mes5: [
    { name: 'Meningocócica C', ms: true, obs: '2ª dose' },
    { name: 'Meningocócica ACWY', ms: false, sbim: true, obs: 'SBIm recomenda como preferencial' },
    { name: 'Meningocócica B', ms: false, sbim: true, obs: 'SBIm recomenda 2ª dose' },
  ],
  mes6: [
    { name: 'Penta (DTPw + Hib + Hepatite B)', ms: true, obs: '3ª dose' },
    { name: 'VIP — poliomielite inativada', ms: true, obs: '3ª dose' },
    { name: 'Influenza', ms: true, obs: '1ª dose (primovacinação: 2 doses)' },
    { name: 'Covid-19', ms: true, obs: 'Início do esquema' },
    { name: 'Rotavírus pentavalente', ms: false, sbim: true, obs: '3ª dose se pentavalente' },
    { name: 'Pneumocócica VPC15/VPC20', ms: false, sbim: true, obs: 'Esquema 3+1' },
    { name: 'Influenza quadrivalente', ms: false, sbim: true, obs: 'SBIm inclui 4V' },
  ],
  mes7: [
    { name: 'Covid-19', ms: true, obs: '2ª dose' },
    { name: 'Influenza', ms: true, obs: '2ª dose (primovacinação)' },
  ],
  mes9: [
    { name: 'Febre amarela', ms: true, obs: '1ª dose de rotina' },
    { name: 'Covid-19', ms: true, obs: '3ª dose' },
  ],
  mes12: [
    { name: 'Pneumocócica conjugada (VPC10)', ms: true, obs: 'Reforço' },
    { name: 'Meningocócica ACWY', ms: true, obs: 'Reforço' },
    { name: 'Tríplice viral — SCR', ms: true, obs: '1ª dose' },
    { name: 'Hepatite A', ms: false, sbim: true, obs: 'SBIm recomenda 1ª dose (MS aos 15m)' },
    { name: 'Varicela', ms: false, sbim: true, obs: 'SBIm recomenda 1ª dose (MS aos 15m)' },
    { name: 'Meningocócica B', ms: false, sbim: true, obs: 'Reforço SBIm' },
    { name: 'Pneumocócica VPC15/VPC20', ms: false, sbim: true, obs: 'Reforço SBIm' },
  ],
  mes15: [
    { name: 'DTP', ms: true, obs: '1º reforço' },
    { name: 'VIP', ms: true, obs: 'Reforço' },
    { name: 'Tríplice viral — SCR', ms: true, obs: '2ª dose' },
    { name: 'Varicela', ms: true, obs: '1ª dose' },
    { name: 'Hepatite A', ms: true, obs: 'Dose única' },
    { name: 'DTPa / DTPa-VIP', ms: false, sbim: true, obs: 'SBIm prefere acelular' },
    { name: 'Tetraviral — SCRV', ms: false, sbim: true, obs: 'Substitui SCR + varicela' },
  ],
  mes18: [
    { name: 'Hepatite A', ms: false, sbim: true, obs: 'SBIm recomenda 2ª dose' },
    { name: 'Varicela', ms: false, sbim: true, obs: 'SBIm pode considerar 2ª dose' },
  ],
  mes24: [
    { name: 'Revisão de atrasados', ms: true, obs: 'Conferir pendências' },
    { name: 'Dengue — Qdenga', ms: false, sbim: true, obs: 'SBIm recomenda a partir de 4 anos' },
  ],
  anos4: [
    { name: 'DTP', ms: true, obs: '2º reforço' },
    { name: 'Febre amarela', ms: true, obs: 'Reforço' },
    { name: 'Varicela', ms: true, obs: '2ª dose' },
    { name: 'DTPa-VIP', ms: false, sbim: true, obs: 'MS não inclui reforço de VIP' },
    { name: 'Dengue — Qdenga', ms: false, sbim: true, obs: '2 doses (0 e 3 meses)' },
  ],
  'anos5-6': [
    { name: 'Revisão vacinal', ms: true, obs: 'Conferir atrasos' },
    { name: 'Meningocócica ACWY', ms: false, sbim: true, obs: 'Reforço SBIm' },
    { name: 'DTPa-VIP / dTpa-VIP', ms: false, sbim: true, obs: 'Reforço SBIm' },
  ],
  'anos9+': [
    { name: 'HPV4', ms: true, obs: 'Dose única para 9-14 anos' },
    { name: 'HPV9', ms: false, sbim: true, obs: 'SBIm prefere, 2 doses (0 e 6m)' },
    { name: 'dTpa', ms: false, sbim: true, obs: 'Reforço SBIm 9-11 anos' },
    { name: 'Dengue — Qdenga', ms: false, sbim: true, obs: 'Já pode ter iniciado aos 4 anos' },
  ],
};

function VaccineCard({ vaccine, ageColor }) {
  const bgColor = {
    indigo: 'bg-indigo-50',
    purple: 'bg-purple-50',
    blue: 'bg-blue-50',
    cyan: 'bg-cyan-50',
    teal: 'bg-teal-50',
    green: 'bg-green-50',
    emerald: 'bg-emerald-50',
    orange: 'bg-orange-50',
    amber: 'bg-amber-50',
    rose: 'bg-rose-50',
  };

  const borderColor = {
    indigo: 'border-indigo-200',
    purple: 'border-purple-200',
    blue: 'border-blue-200',
    cyan: 'border-cyan-200',
    teal: 'border-teal-200',
    green: 'border-green-200',
    emerald: 'border-emerald-200',
    orange: 'border-orange-200',
    amber: 'border-amber-200',
    rose: 'border-rose-200',
  };

  return (
    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className={`${bgColor[ageColor]} border-2 ${borderColor[ageColor]} rounded-lg p-3`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <p className="font-semibold text-gray-800 text-sm">{vaccine.name}</p>
          <p className="text-xs text-gray-600 mt-1">{vaccine.obs}</p>
        </div>
        <div className="flex gap-1">
          {vaccine.ms && <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-semibold">MS</span>}
          {vaccine.sbim && <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-semibold">SBIm</span>}
        </div>
      </div>
    </motion.div>
  );
}

function AgeSection({ age, vaccines, color }) {
  const [open, setOpen] = useState(true);

  const colorMap = {
    indigo: { bg: 'from-indigo-500 to-indigo-600', text: 'text-indigo-900' },
    purple: { bg: 'from-purple-500 to-purple-600', text: 'text-purple-900' },
    blue: { bg: 'from-blue-500 to-blue-600', text: 'text-blue-900' },
    cyan: { bg: 'from-cyan-500 to-cyan-600', text: 'text-cyan-900' },
    teal: { bg: 'from-teal-500 to-teal-600', text: 'text-teal-900' },
    green: { bg: 'from-green-500 to-green-600', text: 'text-green-900' },
    emerald: { bg: 'from-emerald-500 to-emerald-600', text: 'text-emerald-900' },
    orange: { bg: 'from-orange-500 to-orange-600', text: 'text-orange-900' },
    amber: { bg: 'from-amber-500 to-amber-600', text: 'text-amber-900' },
    rose: { bg: 'from-rose-500 to-rose-600', text: 'text-rose-900' },
  };

  return (
    <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200 mb-3">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full bg-gradient-to-r ${colorMap[color].bg} text-white px-6 py-4 flex items-center justify-between hover:shadow-lg transition-all`}
      >
        <span className="font-bold text-lg">{age}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="p-6 bg-white space-y-3">
              {vaccines.map((vaccine, i) => (
                <VaccineCard key={i} vaccine={vaccine} ageColor={color} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Vacinas() {
  const [filterType, setFilterType] = useState('all'); // 'all', 'ms', 'sbim'

  const filteredAges = AGES.filter(age => {
    const vaccines = VACCINES[age.id] || [];
    if (filterType === 'all') return vaccines.length > 0;
    if (filterType === 'ms') return vaccines.some(v => v.ms);
    if (filterType === 'sbim') return vaccines.some(v => v.sbim);
    return false;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Syringe className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-extrabold text-gray-900">Calendário de Vacinação Infantil</h1>
          </div>
          <p className="text-gray-600 text-lg">MS/PNI + SBIm 2026/2027</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full">MS</span>
              <span className="text-gray-700">Calendário Nacional de Vacinação</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full">SBIm</span>
              <span className="text-gray-700">Recomendações adicionais</span>
            </div>
          </div>
        </motion.div>

        {/* Filtros */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-8 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setFilterType('all')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold transition-all ${
              filterType === 'all' ? 'bg-gray-900 text-white shadow-lg' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400'
            }`}
          >
            <Filter className="w-4 h-4" />
            Todos
          </button>
          <button
            onClick={() => setFilterType('ms')}
            className={`px-4 py-2.5 rounded-full font-semibold transition-all ${
              filterType === 'ms' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-400'
            }`}
          >
            Apenas MS
          </button>
          <button
            onClick={() => setFilterType('sbim')}
            className={`px-4 py-2.5 rounded-full font-semibold transition-all ${
              filterType === 'sbim' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-green-600 border-2 border-green-200 hover:border-green-400'
            }`}
          >
            Apenas SBIm
          </button>
        </motion.div>

        {/* Calendário */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-3 mb-12">
          {filteredAges.map((age, i) => (
            <AgeSection key={age.id} age={age.label} vaccines={VACCINES[age.id] || []} color={age.color} />
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
          <div className="flex gap-4">
            <Info className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sobre este calendário</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>MS/PNI:</strong> Vacinas oferecidas gratuitamente no Sistema Único de Saúde (SUS)</li>
                <li>• <strong>SBIm:</strong> Recomendações adicionais da Sociedade Brasileira de Imunizações para proteção ampliada</li>
                <li>• As recomendações SBIm estão disponíveis principalmente em clínicas de vacinação privadas</li>
                <li>• Sempre consulte seu pediatra para orientações personalizadas baseadas na saúde e histórico de seu filho</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Referências */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Referências</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Ministério da Saúde. Calendário Nacional de Vacinação 2026</li>
            <li>• Sociedade Brasileira de Imunizações — SBIm. Calendário de Vacinação Recomendações 2026/2027</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}