import React, { useState } from 'react';
import { Stethoscope, Info, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CentorMcIsaac() {
  const [idade, setIdade] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [tempUnit, setTempUnit] = useState('C');
  const [tosse, setTosse] = useState(null);
  const [nodulos, setNodeulos] = useState(null);
  const [edema, setEdema] = useState(null);
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    if (!idade || !temperatura || tosse === null || nodulos === null || edema === null) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const idadeNum = parseInt(idade);
    const tempNum = parseFloat(temperatura);

    // Converter temperatura para Celsius se em Fahrenheit
    const tempCelsius = tempUnit === 'F' ? (tempNum - 32) * 5 / 9 : tempNum;

    // Calcular Age Factor
    let ageFactor = 0;
    if (idadeNum >= 45) {
      ageFactor = -1;
    } else if (idadeNum >= 15) {
      ageFactor = 0;
    } else {
      ageFactor = 1;
    }

    // Calcular Temperature Factor
    const tempFactor = tempCelsius > 38 ? 1 : 0;

    // Calcular Score
    const score = ageFactor + tempFactor + tosse + nodulos + edema;

    // Definir recomendações baseado no score
    let risco, probabilidade, recomendacao;
    
    if (score === 0) {
      risco = 'Muito Baixo';
      probabilidade = '2-3%';
      recomendacao = 'Sem cultura ou antibiótico';
    } else if (score === 1) {
      risco = 'Baixo';
      probabilidade = '4-6%';
      recomendacao = 'Sem cultura ou antibiótico';
    } else if (score === 2) {
      risco = 'Moderado';
      probabilidade = '10-12%';
      recomendacao = 'Cultura e tratar se positivo';
    } else if (score === 3) {
      risco = 'Alto';
      probabilidade = '27-28%';
      recomendacao = 'Cultura e tratar se positivo';
    } else {
      risco = 'Muito Alto';
      probabilidade = '38-63%';
      recomendacao = 'Cultura e tratar com base clínica';
    }

    setResultado({
      score,
      risco,
      probabilidade,
      recomendacao,
      detalhes: {
        ageFactor,
        tempFactor,
        tosse,
        nodulos,
        edema
      }
    });
  };

  const getRiscoColor = (risco) => {
    const cores = {
      'Muito Baixo': { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', tag: 'bg-green-100 text-green-800' },
      'Baixo': { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-700', tag: 'bg-blue-100 text-blue-800' },
      'Moderado': { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-700', tag: 'bg-yellow-100 text-yellow-800' },
      'Alto': { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-700', tag: 'bg-orange-100 text-orange-800' },
      'Muito Alto': { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-700', tag: 'bg-red-100 text-red-800' }
    };
    return cores[risco] || cores['Baixo'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Stethoscope className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Critério de Centor/McIsaac</h1>
          </div>
          <p className="text-gray-600">Avaliação de faringite por Streptococcus pyogenes</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="space-y-5">
            {/* Idade */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Idade</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  placeholder="Digite a idade"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition"
                />
                <span className="px-4 py-3 bg-gray-100 rounded-xl text-gray-600 font-semibold">anos</span>
              </div>
            </div>

            {/* Temperatura */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Temperatura</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  step="0.1"
                  value={temperatura}
                  onChange={(e) => setTemperatura(e.target.value)}
                  placeholder="Digite a temperatura"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition"
                />
                <select
                  value={tempUnit}
                  onChange={(e) => setTempUnit(e.target.value)}
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition bg-white"
                >
                  <option value="C">°C</option>
                  <option value="F">°F</option>
                </select>
              </div>
            </div>

            {/* Tosse */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Tosse</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tosse"
                    checked={tosse === 0}
                    onChange={() => setTosse(0)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Sim (0 pontos)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tosse"
                    checked={tosse === 1}
                    onChange={() => setTosse(1)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Não (1 ponto)</span>
                </label>
              </div>
            </div>

            {/* Nódulos Cervicais */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Nódulos cervicais anteriores dolorosos</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="nodulos"
                    checked={nodulos === 1}
                    onChange={() => setNodeulos(1)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Sim (1 ponto)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="nodulos"
                    checked={nodulos === 0}
                    onChange={() => setNodeulos(0)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Não (0 pontos)</span>
                </label>
              </div>
            </div>

            {/* Edema */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Edema das amígdalas ou exsudado</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="edema"
                    checked={edema === 1}
                    onChange={() => setEdema(1)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Sim (1 ponto)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="edema"
                    checked={edema === 0}
                    onChange={() => setEdema(0)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Não (0 pontos)</span>
                </label>
              </div>
            </div>

            <button
              onClick={calcular}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition mt-6"
            >
              Calcular
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {resultado && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4 mb-6">
              {/* Score */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border-2 border-indigo-300">
                <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Escore Total</p>
                <div className="text-center">
                  <p className="text-5xl font-bold text-indigo-600">{resultado.score}</p>
                  <p className="text-gray-600 mt-2">de 5 pontos</p>
                </div>
              </div>

              {/* Risco */}
              <div className={`rounded-2xl p-6 border-2 ${getRiscoColor(resultado.risco).bg} ${getRiscoColor(resultado.risco).border}`}>
                <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Nível de Risco</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-2xl font-bold ${getRiscoColor(resultado.risco).text}`}>{resultado.risco}</p>
                    <p className="text-gray-600 mt-1">Probabilidade: <span className="font-semibold">{resultado.probabilidade}</span></p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${getRiscoColor(resultado.risco).tag}`}>
                    {resultado.score} pts
                  </span>
                </div>
              </div>

              {/* Recomendação */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-300">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Recomendação</p>
                    <p className="text-purple-900 font-semibold">{resultado.recomendacao}</p>
                  </div>
                </div>
              </div>

              {/* Detalhes */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Detalhamento do Cálculo</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-600">Age Factor:</span>
                    <span className="font-semibold text-gray-800">{resultado.detalhes.ageFactor > 0 ? '+' : ''}{resultado.detalhes.ageFactor}</span>
                  </div>
                  <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-600">Temperature Factor:</span>
                    <span className="font-semibold text-gray-800">{resultado.detalhes.tempFactor}</span>
                  </div>
                  <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-600">Tosse:</span>
                    <span className="font-semibold text-gray-800">{resultado.detalhes.tosse}</span>
                  </div>
                  <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-600">Nódulos cervicais:</span>
                    <span className="font-semibold text-gray-800">{resultado.detalhes.nodulos}</span>
                  </div>
                  <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-600">Edema de amígdalas:</span>
                    <span className="font-semibold text-gray-800">{resultado.detalhes.edema}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-indigo-900">
              <p className="font-semibold mb-2">Interpretação do Critério de McIsaac:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li><strong>0-1 pontos:</strong> Baixa probabilidade - Sem testes ou antibióticos recomendados</li>
                <li><strong>2-3 pontos:</strong> Risco moderado - Realizar cultura se indicado clinicamente</li>
                <li><strong>4-5 pontos:</strong> Alta probabilidade - Considerar tratamento empírico</li>
                <li>Ferramenta para reduzir uso desnecessário de antibióticos em faringite</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}