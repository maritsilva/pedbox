import React, { useState } from 'react';
import { TrendingUp, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AlvoParental() {
  const [alturaP, setAlturaP] = useState('');
  const [alturaM, setAlturaM] = useState('');
  const [sex, setSex] = useState('');
  const [result, setResult] = useState(null);

  const calculateAlvo = () => {
    if (!alturaP || !alturaM || !sex) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const p = parseFloat(alturaP);
    const m = parseFloat(alturaM);

    if (p <= 0 || m <= 0) {
      alert('Por favor, insira valores válidos');
      return;
    }

    let alvo, minimo, maximo;

    if (sex === 'male') {
      // Menino: (altura pai + altura mãe + 13) / 2
      alvo = (p + m + 13) / 2;
      minimo = alvo - 8.5;
      maximo = alvo + 8.5;
    } else {
      // Menina: (altura pai + altura mãe - 13) / 2
      alvo = (p + m - 13) / 2;
      minimo = alvo - 8.5;
      maximo = alvo + 8.5;
    }

    setResult({
      alvo: alvo.toFixed(1),
      minimo: minimo.toFixed(1),
      maximo: maximo.toFixed(1),
      sex: sex === 'male' ? 'Menino' : 'Menina',
      range: (parseFloat(maximo) - parseFloat(minimo)).toFixed(1)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-8 h-8 text-teal-600" />
            <h1 className="text-3xl font-bold text-gray-800">Alvo Parental</h1>
          </div>
          <p className="text-gray-600">Calcule a estatura-alvo com base na altura dos pais</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Altura do Pai (cm)</label>
              <input
                type="number"
                step="0.1"
                value={alturaP}
                onChange={(e) => setAlturaP(e.target.value)}
                placeholder="Ex: 180"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Altura da Mãe (cm)</label>
              <input
                type="number"
                step="0.1"
                value={alturaM}
                onChange={(e) => setAlturaM(e.target.value)}
                placeholder="Ex: 165"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Sexo da Criança</label>
              <select
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-teal-500 transition bg-white"
              >
                <option value="">Selecione</option>
                <option value="male">Menino</option>
                <option value="female">Menina</option>
              </select>
            </div>

            <button
              onClick={calculateAlvo}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition mt-6"
            >
              Calcular
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-emerald-50 rounded-2xl p-8 mb-6 border-2 border-emerald-200">
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-1">Sexo da Criança</p>
                <p className="text-2xl font-bold text-gray-800">{result.sex}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-xl p-4">
                  <p className="text-gray-600 text-sm mb-1">Estatura-Alvo</p>
                  <p className="text-3xl font-bold text-teal-600">{result.alvo} cm</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-gray-600 text-sm mb-1">Mínimo</p>
                    <p className="text-2xl font-bold text-gray-800">{result.minimo} cm</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-gray-600 text-sm mb-1">Máximo</p>
                    <p className="text-2xl font-bold text-gray-800">{result.maximo} cm</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4">
                  <p className="text-gray-600 text-sm mb-1">Intervalo de Variação</p>
                  <p className="text-lg font-semibold text-gray-800">±{(parseFloat(result.range) / 2).toFixed(1)} cm</p>
                </div>
              </div>

              <div className="bg-teal-100 rounded-xl p-4 border border-teal-300">
                <p className="text-xs font-semibold text-teal-900 mb-2 uppercase">Interpretação</p>
                <p className="text-sm text-teal-900">A estatura adulta esperada situa-se entre <strong>{result.minimo} cm</strong> e <strong>{result.maximo} cm</strong>, considerando variações genéticas normais.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-teal-900">
              <p className="font-semibold mb-2">Fórmula Utilizada:</p>
              <div className="space-y-2 text-xs font-mono bg-white rounded p-3">
                <p><strong>Para meninos:</strong> (Altura Pai + Altura Mãe + 13) / 2</p>
                <p><strong>Para meninas:</strong> (Altura Pai + Altura Mãe - 13) / 2</p>
                <p className="mt-3">Intervalo de confiança: ±8,5 cm</p>
              </div>
              <p className="text-xs mt-2">Esta calculadora utiliza o método padrão de estimativa de estatura-alvo parental em pediatria.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}