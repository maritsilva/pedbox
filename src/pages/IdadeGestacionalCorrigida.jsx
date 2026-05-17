import React, { useState } from 'react';
import { Baby, Info, RefreshCw, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IdadeGestacionalCorrigida() {
  const [igNasc, setIgNasc] = useState('');
  const [diasIgNasc, setDiasIgNasc] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [dataCorrec, setDataCorrec] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateCorrectedAge = () => {
    setError('');
    if (!igNasc || !diasIgNasc || !dataNasc || !dataCorrec) {
      setError('Preencha todos os campos para calcular.');
      return;
    }

    const semanas = parseInt(igNasc);
    const dias = parseInt(diasIgNasc);
    const dataNascObj = new Date(dataNasc);
    const dataCorrecObj = new Date(dataCorrec);

    if (dataNascObj > dataCorrecObj) {
      setError('A data de correção deve ser posterior à data de nascimento.');
      return;
    }

    const diffTime = dataCorrecObj - dataNascObj;
    const idadeCronologicaDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diasAte40Semanas = (40 - semanas) * 7 - dias;

    let idadeCorrAno = 0, idadeCorrMes = 0, idadeCorrSem = 0, idadeCorrDia = 0;

    if (diasAte40Semanas > 0) {
      const diasApos40 = idadeCronologicaDias - diasAte40Semanas;
      if (diasApos40 >= 0) {
        idadeCorrAno = Math.floor(diasApos40 / 365);
        let dr = diasApos40 % 365;
        idadeCorrMes = Math.floor(dr / 30);
        dr = dr % 30;
        idadeCorrSem = Math.floor(dr / 7);
        idadeCorrDia = dr % 7;
      } else {
        const idadeGestCorrec = semanas + dias / 7 + (idadeCronologicaDias / 7);
        idadeCorrSem = Math.floor(idadeGestCorrec);
        idadeCorrDia = Math.floor((idadeGestCorrec % 1) * 7);
      }
    } else {
      const diasApos40 = idadeCronologicaDias + Math.abs(diasAte40Semanas);
      idadeCorrAno = Math.floor(diasApos40 / 365);
      let dr = diasApos40 % 365;
      idadeCorrMes = Math.floor(dr / 30);
      dr = dr % 30;
      idadeCorrSem = Math.floor(dr / 7);
      idadeCorrDia = dr % 7;
    }

    const idadeCronAno = Math.floor(idadeCronologicaDias / 365);
    let dr = idadeCronologicaDias % 365;
    const idadeCronMes = Math.floor(dr / 30);
    dr = dr % 30;
    const idadeCronSem = Math.floor(dr / 7);
    const idadeCronDia = dr % 7;

    setResult({
      igNasc: `${semanas}s + ${dias}d`,
      idadeCronAno, idadeCronMes, idadeCronSem, idadeCronDia,
      idadeCorrAno, idadeCorrMes, idadeCorrSem, idadeCorrDia,
      diasCronologicos: idadeCronologicaDias,
      deficiente: diasAte40Semanas > 0 ? diasAte40Semanas : 0,
    });
  };

  const handleReset = () => {
    setIgNasc(''); setDiasIgNasc('');
    setDataNasc(''); setDataCorrec('');
    setResult(null); setError('');
  };

  const AgeBlock = ({ value, label, color }) => (
    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 pb-12">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-12 bg-sky-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Baby className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">Idade Corrigida</h1>
          </div>
          <p className="text-gray-600 text-base">Idade Gestacional Corrigida do Prematuro</p>
          <p className="text-xs text-gray-400 mt-1">Desconsidera o tempo de prematuridade (até 40 semanas)</p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 p-6 mb-6"
        >
          <p className="text-sm font-bold text-gray-700 mb-4">Dados do Paciente</p>
          <div className="space-y-4">

            {/* IG */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Idade Gestacional no Nascimento</label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="number"
                    value={igNasc}
                    onChange={e => setIgNasc(e.target.value)}
                    placeholder="Semanas"
                    min="22" max="39"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-400 transition text-sm"
                  />
                  <p className="text-xs text-gray-400 mt-1">Semanas</p>
                </div>
                <div>
                  <input
                    type="number"
                    value={diasIgNasc}
                    onChange={e => setDiasIgNasc(e.target.value)}
                    placeholder="Dias"
                    min="0" max="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-400 transition text-sm"
                  />
                  <p className="text-xs text-gray-400 mt-1">Dias (0–6)</p>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Data de Nascimento</label>
              <input
                type="date"
                value={dataNasc}
                onChange={e => setDataNasc(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-400 transition text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Data de Avaliação</label>
              <input
                type="date"
                value={dataCorrec}
                onChange={e => setDataCorrec(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-400 transition text-sm"
              />
              <p className="text-xs text-gray-400 mt-1">Data em que deseja calcular a idade</p>
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 rounded-xl px-3 py-2">{error}</p>
            )}

            <div className="flex gap-3 pt-1">
              <button
                onClick={calculateCorrectedAge}
                className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" /> Calcular
              </button>
              {result && (
                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-500 hover:bg-gray-50 transition"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Result */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4 mb-6"
            >
              {/* Cronológica */}
              <div className="bg-sky-50 border-2 border-sky-300 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-sky-500 text-white px-5 py-3">
                  <p className="text-sm font-bold uppercase tracking-wide">Idade Cronológica (Real)</p>
                  <p className="text-xs text-sky-100 mt-0.5">Tempo real desde o nascimento</p>
                </div>
                <div className="p-4 grid grid-cols-4 gap-2">
                  <AgeBlock value={result.idadeCronAno} label={`Ano${result.idadeCronAno !== 1 ? 's' : ''}`} color="text-sky-600" />
                  <AgeBlock value={result.idadeCronMes} label={`Mês${result.idadeCronMes !== 1 ? 'es' : ''}`} color="text-sky-600" />
                  <AgeBlock value={result.idadeCronSem} label={`Sem${result.idadeCronSem !== 1 ? 'anas' : 'ana'}`} color="text-sky-600" />
                  <AgeBlock value={result.idadeCronDia} label={`Dia${result.idadeCronDia !== 1 ? 's' : ''}`} color="text-sky-600" />
                </div>
              </div>

              {/* Corrigida */}
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-emerald-500 text-white px-5 py-3">
                  <p className="text-sm font-bold uppercase tracking-wide">Idade Corrigida (Gestacional)</p>
                  <p className="text-xs text-emerald-100 mt-0.5">Descontada a prematuridade até 40 semanas</p>
                </div>
                <div className="p-4 grid grid-cols-4 gap-2">
                  <AgeBlock value={result.idadeCorrAno} label={`Ano${result.idadeCorrAno !== 1 ? 's' : ''}`} color="text-emerald-600" />
                  <AgeBlock value={result.idadeCorrMes} label={`Mês${result.idadeCorrMes !== 1 ? 'es' : ''}`} color="text-emerald-600" />
                  <AgeBlock value={result.idadeCorrSem} label={`Sem${result.idadeCorrSem !== 1 ? 'anas' : 'ana'}`} color="text-emerald-600" />
                  <AgeBlock value={result.idadeCorrDia} label={`Dia${result.idadeCorrDia !== 1 ? 's' : ''}`} color="text-emerald-600" />
                </div>
              </div>

              {/* Info adicional */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                  <p className="font-bold text-gray-700 text-sm">Dados do Cálculo</p>
                </div>
                <div className="p-4 space-y-2 text-sm">
                  {[
                    { label: 'IG ao nascimento', value: result.igNasc },
                    { label: 'Dias cronológicos totais', value: `${result.diasCronologicos} dias` },
                    ...(result.deficiente > 0 ? [{ label: 'Dias antecipados (prematuridade)', value: `${result.deficiente} dias` }] : []),
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between bg-gray-50 rounded-xl px-4 py-2.5">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-bold text-gray-800">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info box */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5"
        >
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-2">Sobre a Idade Corrigida</p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>• <strong className="text-gray-700">Idade cronológica:</strong> tempo real desde o nascimento</li>
                <li>• <strong className="text-gray-700">Idade corrigida:</strong> desconsidera o tempo de prematuridade em relação a 40 semanas</li>
                <li>• A correção deve ser usada até os 2–3 anos de idade</li>
                <li>• Essencial para avaliar desenvolvimento neuropsicomotor em prematuros</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}