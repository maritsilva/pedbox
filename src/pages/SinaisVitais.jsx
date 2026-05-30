import React, { useState } from 'react';
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
      { age: 'Recém-nascido (0-3 meses)', min: 30, max: 60, unit: 'irpm' },
      { age: '3-6 meses', min: 25, max: 55, unit: 'irpm' },
      { age: '6-12 meses', min: 25, max: 50, unit: 'irpm' },
      { age: '1-2 anos', min: 20, max: 40, unit: 'irpm' },
      { age: '2-6 anos', min: 20, max: 30, unit: 'irpm' },
      { age: '6-12 anos', min: 18, max: 26, unit: 'irpm' },
      { age: '> 12 anos', min: 12, max: 20, unit: 'irpm' },
    ],
  },
  {
    id: 'freq-cardiaca',
    title: 'Frequência Cardíaca',
    icon: '❤️',
    data: [
      { age: 'Recém-nascido (0-3 meses)', min: 100, max: 160, unit: 'bpm' },
      { age: '3-6 meses', min: 100, max: 160, unit: 'bpm' },
      { age: '6-12 meses', min: 80, max: 140, unit: 'bpm' },
      { age: '1-2 anos', min: 80, max: 130, unit: 'bpm' },
      { age: '2-6 anos', min: 70, max: 110, unit: 'bpm' },
      { age: '6-12 anos', min: 60, max: 100, unit: 'bpm' },
      { age: '> 12 anos', min: 60, max: 100, unit: 'bpm' },
    ],
  },
  {
    id: 'pressao-arterial',
    title: 'Pressão Arterial',
    icon: '📊',
    data: [
      { age: '1-3 anos', systolic: '95-105', diastolic: '53-66', unit: 'mmHg' },
      { age: '3-5 anos', systolic: '100-110', diastolic: '55-70', unit: 'mmHg' },
      { age: '5-7 anos', systolic: '100-120', diastolic: '55-75', unit: 'mmHg' },
      { age: '7-10 anos', systolic: '105-125', diastolic: '60-80', unit: 'mmHg' },
      { age: '> 13 anos (Normal)', systolic: '< 120', diastolic: '< 80', unit: 'mmHg' },
      { age: '> 13 anos (Elevada)', systolic: '120-129', diastolic: '< 80', unit: 'mmHg' },
      { age: '> 13 anos (Hipertensão 1)', systolic: '130-139', diastolic: '80-89', unit: 'mmHg' },
      { age: '> 13 anos (Hipertensão 2)', systolic: '≥ 140', diastolic: '≥ 90', unit: 'mmHg' },
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
  const [expandedTable, setExpandedTable] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Voltar
      </button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
          Sinais Vitais Pediátricos
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Valores de referência de sinais vitais em pediatria. Os sinais vitais fornecem informações objetivas sobre o estado de saúde e metabolismo do paciente pediátrico.
        </p>
      </motion.div>

      {/* Alert */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-10"
      >
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900">
          <p className="font-semibold mb-1">Sobre estas referências</p>
          <p>
            Os valores apresentados são diretrizes baseadas em evidências clínicas e devem ser interpretados em conjunto com a avaliação clínica. Sempre correlacione com a história do paciente e protocolos institucionais.
          </p>
        </div>
      </motion.div>

      {/* Quick reference cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="grid md:grid-cols-3 gap-4 mb-10"
      >
        {VITAL_SIGNS.map((sign, idx) => (
          <motion.div
            key={sign.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.05 }}
            className={`rounded-2xl p-6 border ${sign.color}`}
          >
            <span className="text-4xl mb-3 block">{sign.icon}</span>
            <h3 className="font-bold text-foreground mb-2">{sign.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{sign.description}</p>
            <p className="font-bold text-lg text-primary">{sign.normal}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tables */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-foreground">Valores por Faixa Etária</h2>

        {VITAL_TABLES.map((table, idx) => (
          <motion.div
            key={table.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.06 }}
            className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Table header */}
            <button
              onClick={() => setExpandedTable(expandedTable === table.id ? null : table.id)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 text-left">
                <span className="text-3xl">{table.icon}</span>
                <h3 className="font-bold text-foreground">{table.title}</h3>
              </div>
              <div className="text-2xl">
                {expandedTable === table.id ? '−' : '+'}
              </div>
            </button>

            {/* Table content */}
            {expandedTable === table.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-border bg-gray-50"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      {table.data.map((row, rowIdx) => (
                        <tr
                          key={rowIdx}
                          className={
                            rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }
                        >
                          <td className="px-6 py-3 font-medium text-foreground">
                            {row.age}
                          </td>
                          <td className="px-6 py-3 text-muted-foreground">
                            {row.min && row.max ? (
                              <>
                                {row.min} - {row.max} {row.unit}
                              </>
                            ) : row.systolic ? (
                              <>
                                {row.systolic} / {row.diastolic} {row.unit}
                              </>
                            ) : (
                              <>
                                {row.volume}
                              </>
                            )}
                          </td>
                          {row.note && (
                            <td className="px-6 py-3 text-xs text-muted-foreground italic">
                              {row.note}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
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
          <li>• Guias internacionais de monitoramento pediátrico</li>
        </ul>
      </motion.div>
    </div>
  );
}