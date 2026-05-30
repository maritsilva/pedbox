import React, { useState } from 'react';
import { ChevronLeft, Download, Share2, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Growth curve data (percentiles: P3, P10, P25, P50, P75, P90, P97)
const GROWTH_DATA_HEIGHT = [
  { age: 0, p3: 45.5, p10: 47.0, p25: 48.5, p50: 50.0, p75: 51.5, p90: 53.0, p97: 54.5 },
  { age: 3, p3: 53.0, p10: 54.8, p25: 56.5, p50: 58.5, p75: 60.5, p90: 62.0, p97: 63.5 },
  { age: 6, p3: 60.5, p10: 62.5, p25: 64.5, p50: 66.5, p75: 68.5, p90: 70.5, p97: 72.0 },
  { age: 12, p3: 68.0, p10: 70.5, p25: 73.0, p50: 75.5, p75: 78.0, p90: 80.5, p97: 82.5 },
  { age: 24, p3: 78.0, p10: 81.0, p25: 84.0, p50: 87.5, p75: 91.0, p90: 94.0, p97: 97.0 },
  { age: 36, p3: 87.0, p10: 90.5, p25: 94.0, p50: 97.5, p75: 101.0, p90: 104.5, p97: 107.5 },
  { age: 48, p3: 94.0, p10: 98.0, p25: 102.0, p50: 106.0, p75: 110.0, p90: 113.5, p97: 117.0 },
  { age: 60, p3: 100.5, p10: 105.0, p25: 109.5, p50: 114.0, p75: 118.5, p90: 122.5, p97: 126.5 },
];

const GROWTH_DATA_WEIGHT = [
  { age: 0, p3: 2.5, p10: 2.8, p25: 3.1, p50: 3.5, p75: 3.9, p90: 4.2, p97: 4.6 },
  { age: 3, p3: 4.5, p10: 5.0, p25: 5.5, p50: 6.2, p75: 6.9, p90: 7.4, p97: 8.0 },
  { age: 6, p3: 6.0, p10: 6.7, p25: 7.4, p50: 8.2, p75: 9.0, p90: 9.8, p97: 10.5 },
  { age: 12, p3: 8.0, p10: 9.0, p25: 10.0, p50: 11.2, p75: 12.5, p90: 13.8, p97: 15.0 },
  { age: 24, p3: 11.0, p10: 12.5, p25: 14.0, p50: 15.8, p75: 17.8, p90: 19.5, p97: 21.5 },
  { age: 36, p3: 13.0, p10: 15.0, p25: 17.0, p50: 19.5, p75: 22.0, p90: 24.5, p97: 27.0 },
  { age: 48, p3: 14.8, p10: 17.0, p25: 19.5, p50: 22.5, p75: 25.8, p90: 29.0, p97: 32.5 },
  { age: 60, p3: 16.5, p10: 19.0, p25: 22.0, p50: 25.5, p75: 29.5, p90: 33.0, p97: 37.0 },
];

const PERCENTILES = [
  { value: 'p50', label: 'Mediana (P50)', color: '#3b82f6', opacity: 1 },
  { value: 'p25', label: 'P25', color: '#60a5fa', opacity: 0.6 },
  { value: 'p75', label: 'P75', color: '#60a5fa', opacity: 0.6 },
  { value: 'p10', label: 'P10', color: '#bfdbfe', opacity: 0.4 },
  { value: 'p90', label: 'P90', color: '#bfdbfe', opacity: 0.4 },
];

export default function CurvasCrescimento() {
  const navigate = useNavigate();
  const [selectedMetric, setSelectedMetric] = useState('height');
  const [selectedPercentiles, setSelectedPercentiles] = useState(['p50', 'p25', 'p75']);

  const data = selectedMetric === 'height' ? GROWTH_DATA_HEIGHT : GROWTH_DATA_WEIGHT;
  const unit = selectedMetric === 'height' ? 'cm' : 'kg';
  const title = selectedMetric === 'height' ? 'Altura/Comprimento' : 'Peso';

  const togglePercentile = (p) => {
    setSelectedPercentiles(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </button>

          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                Referência de Crescimento
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                Curvas de Crescimento Pediátricas
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Gráficos de crescimento baseados em diretrizes da SBP para monitoramento de crianças de 0 a 60 meses.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Alert */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6"
        >
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="font-semibold mb-1">Sobre estas curvas</p>
            <p className="leading-relaxed">
              As curvas apresentadas seguem as diretrizes da Sociedade Brasileira de Pediatria (SBP) para monitoramento do crescimento. 
              Use em conjunto com avaliação clínica e consulta com o pediatra.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white border border-border rounded-2xl p-5 sticky top-20 space-y-6">
              {/* Metric selector */}
              <div>
                <p className="font-bold text-sm text-foreground mb-3">Métrica</p>
                <div className="space-y-2">
                  {[
                    { id: 'height', label: 'Altura/Comprimento' },
                    { id: 'weight', label: 'Peso' },
                  ].map(m => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMetric(m.id)}
                      className={`w-full px-4 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                        selectedMetric === m.id
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white border border-border text-foreground hover:border-blue-300'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Percentiles */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-sm text-foreground mb-3">Percentis</p>
                <div className="space-y-2.5">
                  {PERCENTILES.map(p => (
                    <button
                      key={p.value}
                      onClick={() => togglePercentile(p.value)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        selectedPercentiles.includes(p.value)
                          ? 'bg-blue-50 border border-blue-200'
                          : 'bg-white border border-border hover:bg-gray-50'
                      }`}
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: p.color, opacity: p.opacity }}
                      />
                      <span className="text-xs font-medium text-foreground flex-1 text-left">
                        {p.label}
                      </span>
                      <input
                        type="checkbox"
                        checked={selectedPercentiles.includes(p.value)}
                        onChange={() => {}}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-border pt-4 space-y-2">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-sm font-semibold text-foreground hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  Baixar PDF
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-semibold transition-colors">
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </button>
              </div>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-foreground mb-1">
                  {title} por Idade
                </h2>
                <p className="text-sm text-muted-foreground">
                  Unidade: {unit} · Idade: 0 a 60 meses
                </p>
              </div>

              <div className="w-full h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="age"
                      label={{ value: `Idade (meses)`, position: 'insideBottomRight', offset: -10 }}
                    />
                    <YAxis
                      label={{ value: `${unit}`, angle: -90, position: 'insideLeftTop', offset: 10 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend
                      wrapperStyle={{ paddingTop: '20px' }}
                      height={36}
                    />

                    {selectedPercentiles.includes('p3') && (
                      <Line
                        type="monotone"
                        dataKey="p3"
                        stroke="#e5e7eb"
                        dot={false}
                        name="P3"
                        strokeWidth={1}
                        isAnimationActive={false}
                      />
                    )}
                    {selectedPercentiles.includes('p10') && (
                      <Line
                        type="monotone"
                        dataKey="p10"
                        stroke="#bfdbfe"
                        dot={false}
                        name="P10"
                        strokeWidth={1.5}
                        isAnimationActive={false}
                      />
                    )}
                    {selectedPercentiles.includes('p25') && (
                      <Line
                        type="monotone"
                        dataKey="p25"
                        stroke="#60a5fa"
                        dot={false}
                        name="P25"
                        strokeWidth={1.5}
                        isAnimationActive={false}
                      />
                    )}
                    {selectedPercentiles.includes('p50') && (
                      <Line
                        type="monotone"
                        dataKey="p50"
                        stroke="#3b82f6"
                        dot={false}
                        name="P50 (Mediana)"
                        strokeWidth={2.5}
                        isAnimationActive={false}
                      />
                    )}
                    {selectedPercentiles.includes('p75') && (
                      <Line
                        type="monotone"
                        dataKey="p75"
                        stroke="#60a5fa"
                        dot={false}
                        name="P75"
                        strokeWidth={1.5}
                        isAnimationActive={false}
                      />
                    )}
                    {selectedPercentiles.includes('p90') && (
                      <Line
                        type="monotone"
                        dataKey="p90"
                        stroke="#bfdbfe"
                        dot={false}
                        name="P90"
                        strokeWidth={1.5}
                        isAnimationActive={false}
                      />
                    )}
                    {selectedPercentiles.includes('p97') && (
                      <Line
                        type="monotone"
                        dataKey="p97"
                        stroke="#e5e7eb"
                        dot={false}
                        name="P97"
                        strokeWidth={1}
                        isAnimationActive={false}
                      />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Legend explanation */}
              <div className="mt-6 pt-6 border-t border-border grid md:grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-foreground mb-2">Interpretação:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• <strong>P50:</strong> Valor mediano (centro da distribuição)</li>
                    <li>• <strong>P25–P75:</strong> Intervalo interquartil (50% da população)</li>
                    <li>• <strong>P10–P90:</strong> Intervalo esperado (80% da população)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Referência:</p>
                  <p className="text-muted-foreground">
                    Sociedade Brasileira de Pediatria. Curvas de Crescimento e Desenvolvimento.
                    Atualizadas conforme diretrizes internacionais de crescimento infantil.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}