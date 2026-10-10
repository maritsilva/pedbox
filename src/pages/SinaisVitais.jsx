import PageHeader from '@/components/PageHeader';
import React from 'react';
import { ChevronLeft, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const VITAL_SIGNS = [
  {
    id: 'temperatura',
    title: 'Temperatura Corporal',
    icon: '🌡️',
    normal: '35.8 - 37.3°C',
    description: 'Temperatura corporal normal em repouso',
    color: 'bg-red-50 border-red-200',
  },
  {
    id: 'saturacao',
    title: 'Saturação de Oxigênio',
    icon: '💨',
    normal: '94 - 100%',
    description: 'Medida por oximetria de pulso',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    id: 'tec',
    title: 'Tempo de Enchimento Capilar',
    icon: '💧',
    normal: '< 2 segundos',
    description: 'Indicador de perfusão periférica',
    color: 'bg-cyan-50 border-cyan-200',
  },
];

const VITAL_TABLES = [
  {
    id: 'freq-respiratoria',
    title: 'Frequência Respiratória',
    icon: '🫁',
    data: [
      { age: 'Recém-nascido (0-3 meses)', min: 30, max: 60, unit: 'irpm', note: 'Percentil 95: até 60' },
      { age: '3-6 meses', min: 25, max: 55, unit: 'irpm', note: 'Percentil 95: até 55' },
      { age: '6-12 meses', min: 25, max: 50, unit: 'irpm', note: 'Percentil 95: até 50' },
      { age: '1-2 anos', min: 20, max: 40, unit: 'irpm', note: 'Percentil 95: até 40' },
      { age: '2-6 anos', min: 20, max: 30, unit: 'irpm', note: 'Percentil 95: até 30' },
      { age: '6-12 anos', min: 18, max: 26, unit: 'irpm', note: 'Percentil 95: até 24' },
      { age: '> 12 anos', min: 12, max: 20, unit: 'irpm', note: 'Percentil 95: até 24' },
    ],
  },
  {
    id: 'freq-cardiaca',
    title: 'Frequência Cardíaca',
    icon: '❤️',
    data: [
      { age: 'Recém-nascido (0-3 meses)', min: 100, max: 160, unit: 'bpm', note: 'Acordado: frequência elevada' },
      { age: '3-6 meses', min: 100, max: 160, unit: 'bpm', note: 'Acordado: frequência elevada' },
      { age: '6-12 meses', min: 80, max: 140, unit: 'bpm', note: 'Acordado: 100-130 bpm' },
      { age: '1-2 anos', min: 80, max: 130, unit: 'bpm', note: 'Acordado: 90-120 bpm' },
      { age: '2-6 anos', min: 70, max: 110, unit: 'bpm', note: 'Acordado: 80-110 bpm' },
      { age: '6-12 anos', min: 60, max: 100, unit: 'bpm', note: 'Percentil 95: até 110' },
      { age: '> 12 anos', min: 60, max: 100, unit: 'bpm', note: 'Percentil 95: até 110' },
    ],
  },
  {
    id: 'pressao-arterial',
    title: 'Pressão Arterial',
    icon: '📊',
    data: [
      { age: '1-3 anos', systolic: '95-105', diastolic: '53-66', unit: 'mmHg', note: 'Média esperada' },
      { age: '3-5 anos', systolic: '100-110', diastolic: '55-70', unit: 'mmHg', note: 'Média esperada' },
      { age: '5-7 anos', systolic: '100-120', diastolic: '55-75', unit: 'mmHg', note: 'Média esperada' },
      { age: '7-10 anos', systolic: '105-125', diastolic: '60-80', unit: 'mmHg', note: 'Média esperada' },
      { age: '10-12 anos', systolic: '110-135', diastolic: '65-85', unit: 'mmHg', note: 'P95: 140 mmHg (sistólica)' },
      { age: '> 12 anos (Normal)', systolic: '< 120', diastolic: '< 80', unit: 'mmHg', note: 'P5 (hipotensão): 80 mmHg' },
      { age: '> 12 anos (Elevada)', systolic: '120-129', diastolic: '< 80', unit: 'mmHg', note: 'Observação recomendada' },
      { age: '> 12 anos (Hipertensão 1)', systolic: '130-139', diastolic: '80-89', unit: 'mmHg', note: 'Investigar causas' },
      { age: '> 12 anos (Hipertensão 2)', systolic: '≥ 140', diastolic: '≥ 90', unit: 'mmHg', note: 'P95: 140 mmHg' },
    ],
  },
  {
    id: 'diurese',
    title: 'Débito Urinário',
    icon: '🚰',
    data: [
      { age: 'Lactentes', volume: '2 mL/kg/h', note: 'Mínimo 0.5-1 mL/kg/h' },
      { age: 'Crianças (1-30 kg)', volume: '1 mL/kg/h', note: 'Mínimo adequado' },
      { age: 'Adolescentes (> 30 kg)', volume: '0.5 mL/kg/h', note: 'Mínimo 10-30 mL/h' },
    ],
  },
];

export default function SinaisVitais() {
  const navigate = useNavigate();

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-6">
        <PageHeader
          eyebrow="Avaliação pediátrica"
          title="Sinais Vitais Pediátricos"
          description="Valores de referência clínicos por faixa etária baseados em diretrizes PALS e SBP."
        />

        {/* Clinical Alert */}
        <div className="flex items-start gap-2.5 bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Aviso de prática:</strong> Sempre correlacione os valores com a avaliação clínica individual, temperatura, choro e estado de vigília do paciente.
          </p>
        </div>

        {/* Quick reference - 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {VITAL_SIGNS.map((sign) => (
            <div
              key={sign.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:border-brand-teal transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{sign.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-brand-sky text-brand-navy">
                  Normal
                </span>
              </div>
              <h3 className="text-sm font-bold text-brand-navy">{sign.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5 mb-2 leading-relaxed">{sign.description}</p>
              <p className="text-xl font-display font-extrabold text-brand-teal">{sign.normal}</p>
            </div>
          ))}
        </div>

        {/* Tabelas de referência */}
        <div className="space-y-5">
          {VITAL_TABLES.map((table) => (
            <div
              key={table.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs"
            >
              <div className="bg-gradient-to-r from-brand-sky/60 to-slate-50 px-5 py-3.5 border-b border-slate-200/80 flex items-center gap-2.5">
                <span className="text-lg">{table.icon}</span>
                <h3 className="text-sm font-bold text-brand-navy">{table.title}</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50/70 border-b border-slate-200/80 text-slate-500">
                      <th className="px-5 py-3 text-left font-bold uppercase tracking-wider text-[10px]">Faixa Etária</th>
                      <th className="px-5 py-3 text-left font-bold uppercase tracking-wider text-[10px]">Valores Normais</th>
                      <th className="px-5 py-3 text-left font-bold uppercase tracking-wider text-[10px]">Observações Clínicas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {table.data.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className={`transition-colors hover:bg-brand-sky/20 ${rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
                      >
                        <td className="px-5 py-3 font-bold text-slate-800 whitespace-nowrap">
                          {row.age}
                        </td>
                        <td className="px-5 py-3 font-semibold text-brand-navy">
                          {row.min && row.max ? (
                            <>{row.min} - {row.max} {row.unit}</>
                          ) : row.systolic ? (
                            <>{row.systolic} / {row.diastolic} {row.unit}</>
                          ) : (
                            <>{row.volume}</>
                          )}
                        </td>
                        <td className="px-5 py-3 text-slate-500">
                          {row.note || '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

      {/* Considerações Clínicas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 space-y-6"
      >
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h3 className="font-bold text-foreground mb-3">Fatores que Influenciam os Sinais Vitais</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li><strong>Estado de vigília:</strong> Crianças acordadas apresentam frequências cardíacas e respiratórias mais elevadas que quando dormindo</li>
            <li><strong>Febre e doença aguda:</strong> Alteram significativamente os parâmetros vitais</li>
            <li><strong>Contexto geográfico:</strong> Variações observadas em diferentes regiões geográficas</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="font-bold text-foreground mb-3">Importância da Frequência Respiratória</h3>
          <p className="text-sm text-muted-foreground">
            A frequência respiratória é um <strong>preditor precoce de deterioração clínica</strong> em crianças e deve ser valorizada na avaliação inicial e monitorização contínua. Alterações na frequência respiratória frequentemente indicam comprometimento antes de outras mudanças nos sinais vitais.
          </p>
        </div>
      </motion.div>

      {/* References */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 bg-white border border-border rounded-2xl p-6"
      >
        <p className="font-bold text-foreground mb-3">Referências</p>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• PALS - American Heart Association</li>
          <li>• Sociedade Brasileira de Pediatria</li>
          <li>• Pediatric Advanced Life Support (PALS) - Critérios atualizados</li>
          <li>• Guias internacionais de monitoramento pediátrico com dados baseados em percentis</li>
          <li>• Estudos observacionais em grandes populações pediátricas</li>
        </ul>
      </motion.div>
    </div>
  );
}