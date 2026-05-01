import React, { useState, useMemo } from 'react';
import { Calculator, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// WHO/CDC head circumference percentiles by age and sex (in cm)
const HEAD_CIRCUMFERENCE_DATA = {
  male: {
    0: { p3: 32.0, p5: 32.4, p10: 33.2, p25: 34.5, p50: 35.6, p75: 36.7, p90: 37.6, p95: 38.2, p97: 38.6 },
    1: { p3: 34.8, p5: 35.2, p10: 36.1, p25: 37.5, p50: 38.7, p75: 39.9, p90: 40.9, p95: 41.5, p97: 42.0 },
    2: { p3: 36.7, p5: 37.1, p10: 38.1, p25: 39.6, p50: 40.8, p75: 42.0, p90: 43.1, p95: 43.7, p97: 44.1 },
    3: { p3: 37.9, p5: 38.3, p10: 39.3, p25: 40.8, p50: 42.0, p75: 43.2, p90: 44.3, p95: 44.9, p97: 45.3 },
    4: { p3: 38.8, p5: 39.2, p10: 40.2, p25: 41.7, p50: 42.9, p75: 44.1, p90: 45.2, p95: 45.8, p97: 46.2 },
    5: { p3: 39.4, p5: 39.8, p10: 40.9, p25: 42.3, p50: 43.5, p75: 44.7, p90: 45.8, p95: 46.4, p97: 46.8 },
    6: { p3: 39.9, p5: 40.3, p10: 41.4, p25: 42.8, p50: 44.0, p75: 45.2, p90: 46.3, p95: 46.9, p97: 47.3 },
    12: { p3: 42.2, p5: 42.6, p10: 43.8, p25: 45.3, p50: 46.6, p75: 48.0, p90: 49.2, p95: 49.8, p97: 50.2 },
    24: { p3: 43.8, p5: 44.2, p10: 45.4, p25: 47.0, p50: 48.3, p75: 49.7, p90: 50.9, p95: 51.5, p97: 52.0 },
    36: { p3: 44.4, p5: 44.8, p10: 46.0, p25: 47.6, p50: 49.0, p75: 50.4, p90: 51.6, p95: 52.2, p97: 52.7 },
  },
  female: {
    0: { p3: 31.2, p5: 31.6, p10: 32.4, p25: 33.7, p50: 34.7, p75: 35.8, p90: 36.6, p95: 37.2, p97: 37.6 },
    1: { p3: 33.9, p5: 34.3, p10: 35.1, p25: 36.5, p50: 37.6, p75: 38.7, p90: 39.6, p95: 40.2, p97: 40.6 },
    2: { p3: 35.7, p5: 36.1, p10: 37.0, p25: 38.4, p50: 39.5, p75: 40.6, p90: 41.5, p95: 42.1, p97: 42.5 },
    3: { p3: 36.9, p5: 37.3, p10: 38.2, p25: 39.6, p50: 40.7, p75: 41.8, p90: 42.7, p95: 43.3, p97: 43.7 },
    4: { p3: 37.7, p5: 38.1, p10: 39.0, p25: 40.4, p50: 41.5, p75: 42.6, p90: 43.5, p95: 44.1, p97: 44.5 },
    5: { p3: 38.2, p5: 38.6, p10: 39.5, p25: 40.9, p50: 42.0, p75: 43.1, p90: 44.0, p95: 44.6, p97: 45.0 },
    6: { p3: 38.6, p5: 39.0, p10: 39.9, p25: 41.3, p50: 42.4, p75: 43.5, p90: 44.4, p95: 45.0, p97: 45.4 },
    12: { p3: 40.6, p5: 41.0, p10: 42.0, p25: 43.4, p50: 44.5, p75: 45.7, p90: 46.6, p95: 47.2, p97: 47.6 },
    24: { p3: 42.0, p5: 42.4, p10: 43.4, p25: 44.8, p50: 46.0, p75: 47.2, p90: 48.1, p95: 48.7, p97: 49.1 },
    36: { p3: 42.6, p5: 43.0, p10: 44.0, p25: 45.4, p50: 46.6, p75: 47.8, p90: 48.7, p95: 49.3, p97: 49.7 },
  }
};

export default function PerimetroCefalico() {
  const [pc, setPc] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [sex, setSex] = useState('');
  const [result, setResult] = useState(null);

  const calculateAge = (birth) => {
    const today = new Date();
    const birthObj = new Date(birth);
    let months = (today.getFullYear() - birthObj.getFullYear()) * 12;
    months += today.getMonth() - birthObj.getMonth();
    return months;
  };

  const getClosestAgeKey = (months) => {
    const keys = [0, 1, 2, 3, 4, 5, 6, 12, 24, 36].sort((a, b) => a - b);
    if (months <= 0) return 0;
    if (months >= 36) return 36;
    for (let i = 0; i < keys.length - 1; i++) {
      if (months >= keys[i] && months < keys[i + 1]) {
        const dist1 = Math.abs(months - keys[i]);
        const dist2 = Math.abs(months - keys[i + 1]);
        return dist1 < dist2 ? keys[i] : keys[i + 1];
      }
    }
    return keys[keys.length - 1];
  };

  const getPercentile = (value, percentiles) => {
    const vals = Object.entries(percentiles).sort((a, b) => {
      const numA = parseInt(a[0].replace('p', ''));
      const numB = parseInt(b[0].replace('p', ''));
      return numA - numB;
    });

    for (let i = 0; i < vals.length; i++) {
      if (value <= vals[i][1]) {
        if (i === 0 && value < vals[i][1]) return `< P${parseInt(vals[i][0].replace('p', ''))}`;
        if (i === 0) return `P${parseInt(vals[i][0].replace('p', ''))}`;
        return `P${parseInt(vals[i - 1][0].replace('p', ''))}-P${parseInt(vals[i][0].replace('p', ''))}`;
      }
    }
    return `> P${parseInt(vals[vals.length - 1][0].replace('p', ''))}`;
  };

  const getClassification = (value, percentiles) => {
    if (value < percentiles.p3) return { type: 'Microcefalia', color: 'text-red-600', bg: 'bg-red-50' };
    if (value > percentiles.p97) return { type: 'Macrocefalia', color: 'text-orange-600', bg: 'bg-orange-50' };
    return { type: 'Normal', color: 'text-green-600', bg: 'bg-green-50' };
  };

  const handleCalculate = () => {
    if (!pc || !birthDate || !sex) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const months = calculateAge(birthDate);
    if (months < 0) {
      alert('Data de nascimento inválida');
      return;
    }

    const ageKey = getClosestAgeKey(months);
    const percentiles = HEAD_CIRCUMFERENCE_DATA[sex][ageKey];
    const percentile = getPercentile(parseFloat(pc), percentiles);
    const classification = getClassification(parseFloat(pc), percentiles);

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    let ageText = '';
    if (years > 0) ageText += `${years} ano${years > 1 ? 's' : ''} `;
    if (remainingMonths > 0) ageText += `${remainingMonths} mês${remainingMonths > 1 ? 'es' : ''}`;

    setResult({
      pc: parseFloat(pc),
      months,
      ageText: ageText || '0 meses',
      percentile,
      classification,
      percentiles,
      ageKey
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Perímetro Cefálico</h1>
          </div>
          <p className="text-gray-600">Avalie o perímetro cefálico por idade e sexo</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Perímetro Cefálico (cm)</label>
              <input
                type="number"
                step="0.1"
                value={pc}
                onChange={(e) => setPc(e.target.value)}
                placeholder="Ex: 35.5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Data de Nascimento</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Sexo</label>
              <select
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition bg-white"
              >
                <option value="">Selecione</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </select>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition mt-6"
            >
              Calcular
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`${result.classification.bg} rounded-2xl p-8 mb-6 border-2 border-current`}>
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-1">Idade</p>
                <p className="text-2xl font-bold text-gray-800">{result.ageText}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm">Perímetro Cefálico</p>
                  <p className="text-xl font-bold text-gray-800">{result.pc} cm</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Percentil</p>
                  <p className="text-xl font-bold text-gray-800">{result.percentile}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 mb-6">
                <p className={`text-lg font-bold ${result.classification.color}`}>{result.classification.type}</p>
              </div>

              <div className="bg-white rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-600 mb-3 uppercase">Referência (P3 a P97)</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">P3:</span>
                    <span className="font-semibold text-gray-800">{result.percentiles.p3} cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">P50 (Mediana):</span>
                    <span className="font-semibold text-gray-800">{result.percentiles.p50} cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">P97:</span>
                    <span className="font-semibold text-gray-800">{result.percentiles.p97} cm</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">Sobre esta calculadora:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Baseada em curvas de crescimento OMS/CDC</li>
                <li>Microcefalia: PC &lt; P3</li>
                <li>Normal: PC entre P3 e P97</li>
                <li>Macrocefalia: PC &gt; P97</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}