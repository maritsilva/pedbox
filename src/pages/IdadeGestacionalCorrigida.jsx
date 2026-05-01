import React, { useState } from 'react';
import { Baby, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IdadeGestacionalCorrigida() {
  const [igNasc, setIgNasc] = useState('');
  const [diasIgNasc, setDiasIgNasc] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [dataCorrec, setDataCorrec] = useState('');
  const [result, setResult] = useState(null);

  const calculateCorrectedAge = () => {
    if (!igNasc || !diasIgNasc || !dataNasc || !dataCorrec) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const semanas = parseInt(igNasc);
    const dias = parseInt(diasIgNasc);
    const dataNascObj = new Date(dataNasc);
    const dataCorrecObj = new Date(dataCorrec);

    if (dataNascObj > dataCorrecObj) {
      alert('A data de correção deve ser posterior à data de nascimento');
      return;
    }

    // Calcular idade cronológica em dias
    const diffTime = dataCorrecObj - dataNascObj;
    const idadeCronologicaDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Calcular dias até 40 semanas (término da gestação esperada)
    const diasAte40Semanas = (40 - semanas) * 7 - dias;

    // Se ainda não atingiu 40 semanas, usar idade corrigida
    let idadeCorrAno = 0;
    let idadeCorrMes = 0;
    let idadeCorrSem = 0;
    let idadeCorrDia = 0;

    if (diasAte40Semanas > 0) {
      // RN ainda prematuro cronologicamente
      const diasApos40 = idadeCronologicaDias - diasAte40Semanas;
      
      if (diasApos40 >= 0) {
        // Já passou de 40 semanas
        idadeCorrAno = Math.floor(diasApos40 / 365);
        let diasRestantes = diasApos40 % 365;
        idadeCorrMes = Math.floor(diasRestantes / 30);
        diasRestantes = diasRestantes % 30;
        idadeCorrSem = Math.floor(diasRestantes / 7);
        idadeCorrDia = diasRestantes % 7;
      } else {
        // Ainda em idade gestacional positiva
        const idadeGestCorrec = semanas + dias / 7 + (idadeCronologicaDias / 7);
        idadeCorrSem = Math.floor(idadeGestCorrec);
        idadeCorrDia = Math.floor((idadeGestCorrec % 1) * 7);
      }
    } else {
      // Passou de 40 semanas
      const diasApos40 = idadeCronologicaDias + Math.abs(diasAte40Semanas);
      idadeCorrAno = Math.floor(diasApos40 / 365);
      let diasRestantes = diasApos40 % 365;
      idadeCorrMes = Math.floor(diasRestantes / 30);
      diasRestantes = diasRestantes % 30;
      idadeCorrSem = Math.floor(diasRestantes / 7);
      idadeCorrDia = diasRestantes % 7;
    }

    // Calcular idade cronológica
    const idadeCronAno = Math.floor(idadeCronologicaDias / 365);
    let diasRestantes = idadeCronologicaDias % 365;
    const idadeCronMes = Math.floor(diasRestantes / 30);
    diasRestantes = diasRestantes % 30;
    const idadeCronSem = Math.floor(diasRestantes / 7);
    const idadeCronDia = diasRestantes % 7;

    const deficientPrematuridade = diasAte40Semanas > 0 ? diasAte40Semanas : 0;

    setResult({
      igNasc: `${semanas}s + ${dias}d`,
      idadeCronAno,
      idadeCronMes,
      idadeCronSem,
      idadeCronDia,
      idadeCorrAno,
      idadeCorrMes,
      idadeCorrSem,
      idadeCorrDia,
      diasCronologicos: idadeCronologicaDias,
      deficiente: deficientPrematuridade,
      diasAte40: diasAte40Semanas
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 p-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Baby className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Idade Gestacional Corrigida</h1>
          </div>
          <p className="text-gray-600">Calcula a idade corrigida do prematuro</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Idade Gestacional no Nascimento</label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="number"
                    value={igNasc}
                    onChange={(e) => setIgNasc(e.target.value)}
                    placeholder="Semanas"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition"
                  />
                  <p className="text-xs text-gray-500 mt-1">Semanas</p>
                </div>
                <div>
                  <input
                    type="number"
                    value={diasIgNasc}
                    onChange={(e) => setDiasIgNasc(e.target.value)}
                    placeholder="Dias"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition"
                  />
                  <p className="text-xs text-gray-500 mt-1">Dias</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Data de Nascimento</label>
              <input
                type="date"
                value={dataNasc}
                onChange={(e) => setDataNasc(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Data da Correção</label>
              <input
                type="date"
                value={dataCorrec}
                onChange={(e) => setDataCorrec(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition"
              />
              <p className="text-xs text-gray-500 mt-1">Data em que deseja calcular a idade</p>
            </div>

            <button
              onClick={calculateCorrectedAge}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition mt-6"
            >
              Calcular
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4 mb-6">
              {/* Idade Cronológica */}
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 border-2 border-sky-200">
                <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Idade Cronológica (Real)</p>
                <div className="grid grid-cols-4 gap-3">
                  {result.idadeCronAno > 0 && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold text-blue-600">{result.idadeCronAno}</p>
                      <p className="text-xs text-gray-500 mt-1">Ano{result.idadeCronAno !== 1 ? 's' : ''}</p>
                    </div>
                  )}
                  {result.idadeCronMes > 0 && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold text-blue-600">{result.idadeCronMes}</p>
                      <p className="text-xs text-gray-500 mt-1">Mês{result.idadeCronMes !== 1 ? 'es' : ''}</p>
                    </div>
                  )}
                  <div className="bg-white rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-blue-600">{result.idadeCronSem}</p>
                    <p className="text-xs text-gray-500 mt-1">Sem{result.idadeCronSem !== 1 ? 'anas' : 'ana'}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-blue-600">{result.idadeCronDia}</p>
                    <p className="text-xs text-gray-500 mt-1">Dia{result.idadeCronDia !== 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>

              {/* Idade Corrigida */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border-2 border-emerald-200">
                <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Idade Corrigida (Gestacional)</p>
                <div className="grid grid-cols-4 gap-3">
                  {result.idadeCorrAno > 0 && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold text-emerald-600">{result.idadeCorrAno}</p>
                      <p className="text-xs text-gray-500 mt-1">Ano{result.idadeCorrAno !== 1 ? 's' : ''}</p>
                    </div>
                  )}
                  {result.idadeCorrMes > 0 && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold text-emerald-600">{result.idadeCorrMes}</p>
                      <p className="text-xs text-gray-500 mt-1">Mês{result.idadeCorrMes !== 1 ? 'es' : ''}</p>
                    </div>
                  )}
                  <div className="bg-white rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-emerald-600">{result.idadeCorrSem}</p>
                    <p className="text-xs text-gray-500 mt-1">Sem{result.idadeCorrSem !== 1 ? 'anas' : 'ana'}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-emerald-600">{result.idadeCorrDia}</p>
                    <p className="text-xs text-gray-500 mt-1">Dia{result.idadeCorrDia !== 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>

              {/* Info adicional */}
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Informações</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between bg-white rounded-lg p-3">
                    <span className="text-gray-600">IG Nascimento:</span>
                    <span className="font-semibold text-gray-800">{result.igNasc}</span>
                  </div>
                  <div className="flex justify-between bg-white rounded-lg p-3">
                    <span className="text-gray-600">Dias cronológicos:</span>
                    <span className="font-semibold text-gray-800">{result.diasCronologicos} dias</span>
                  </div>
                  {result.deficiente > 0 && (
                    <div className="flex justify-between bg-white rounded-lg p-3">
                      <span className="text-gray-600">Dias até 40 semanas:</span>
                      <span className="font-semibold text-gray-800">{result.deficiente} dias</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-2">Sobre a Idade Corrigida:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li><strong>Idade Cronológica:</strong> tempo real desde o nascimento</li>
                <li><strong>Idade Corrigida:</strong> desconsidera o tempo de prematuridade</li>
                <li>A correção é importante até os 2-3 anos de idade</li>
                <li>Essencial para avaliar desenvolvimento neuropsicomotor</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}