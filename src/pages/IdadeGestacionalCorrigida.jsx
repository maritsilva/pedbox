import React, { useState } from 'react';
import { Baby, RefreshCw, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IdadeGestacionalCorrigida() {
  const [igNasc, setIgNasc] = useState('');
  const [diasIgNasc, setDiasIgNasc] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [dataCorrec, setDataCorrec] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!igNasc || !diasIgNasc || !dataNasc || !dataCorrec) return;
    const semanas = parseInt(igNasc);
    const dias = parseInt(diasIgNasc);
    const dataNascObj = new Date(dataNasc);
    const dataCorrecObj = new Date(dataCorrec);
    if (dataNascObj > dataCorrecObj) return;

    const diffTime = dataCorrecObj - dataNascObj;
    const idadeCronologicaDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diasAte40Semanas = (40 - semanas) * 7 - dias;

    let idadeCorrAno = 0, idadeCorrMes = 0, idadeCorrSem = 0, idadeCorrDia = 0;

    if (diasAte40Semanas > 0) {
      const diasApos40 = idadeCronologicaDias - diasAte40Semanas;
      if (diasApos40 >= 0) {
        idadeCorrAno = Math.floor(diasApos40 / 365);
        let r = diasApos40 % 365;
        idadeCorrMes = Math.floor(r / 30);
        r = r % 30;
        idadeCorrSem = Math.floor(r / 7);
        idadeCorrDia = r % 7;
      } else {
        const igCorrec = semanas + dias / 7 + (idadeCronologicaDias / 7);
        idadeCorrSem = Math.floor(igCorrec);
        idadeCorrDia = Math.floor((igCorrec % 1) * 7);
      }
    } else {
      const diasApos40 = idadeCronologicaDias + Math.abs(diasAte40Semanas);
      idadeCorrAno = Math.floor(diasApos40 / 365);
      let r = diasApos40 % 365;
      idadeCorrMes = Math.floor(r / 30);
      r = r % 30;
      idadeCorrSem = Math.floor(r / 7);
      idadeCorrDia = r % 7;
    }

    const idadeCronAno = Math.floor(idadeCronologicaDias / 365);
    let r2 = idadeCronologicaDias % 365;
    const idadeCronMes = Math.floor(r2 / 30);
    r2 = r2 % 30;
    const idadeCronSem = Math.floor(r2 / 7);
    const idadeCronDia = r2 % 7;

    setResult({
      igNasc: `${semanas}s + ${dias}d`,
      idadeCronAno, idadeCronMes, idadeCronSem, idadeCronDia,
      idadeCorrAno, idadeCorrMes, idadeCorrSem, idadeCorrDia,
      diasCronologicos: idadeCronologicaDias,
      deficiente: diasAte40Semanas > 0 ? diasAte40Semanas : 0,
    });
  };

  const handleReset = () => {
    setIgNasc(''); setDiasIgNasc(''); setDataNasc(''); setDataCorrec(''); setResult(null);
  };

  function AgeBlock({ label, values, color }) {
    const items = [
      { v: values.ano, u: 'ano', u2: 'anos' },
      { v: values.mes, u: 'mês', u2: 'meses' },
      { v: values.sem, u: 'semana', u2: 'semanas' },
      { v: values.dia, u: 'dia', u2: 'dias' },
    ].filter(x => x.v > 0 || (values.sem === 0 && values.dia === 0 && values.ano === 0 && values.mes === 0));
    const shown = items.length ? items : [{ v: 0, u: 'dia', u2: 'dias' }];
    return (
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{label}</p>
        <div className="grid grid-cols-4 gap-2">
          {[
            { v: values.ano, u: 'Ano', u2: 'Anos' },
            { v: values.mes, u: 'Mês', u2: 'Meses' },
            { v: values.sem, u: 'Sem', u2: 'Sems' },
            { v: values.dia, u: 'Dia', u2: 'Dias' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm">
              <p className={`text-2xl font-extrabold ${color}`}>{item.v}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.v === 1 ? item.u : item.u2}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 pb-16">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-lg mb-4">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">IG Corrigida</h1>
          <p className="text-gray-500 mt-1 text-sm">Idade gestacional corrigida para prematuros</p>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm p-6 mb-6 space-y-4">

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">IG no Nascimento</label>
            <div className="flex gap-3">
              <div className="flex-1">
                <input type="number" value={igNasc} onChange={e => { setResult(null); setIgNasc(e.target.value); }}
                  placeholder="Semanas"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-400 transition text-sm" />
                <p className="text-xs text-gray-400 mt-1 text-center">Semanas</p>
              </div>
              <div className="flex-1">
                <input type="number" value={diasIgNasc} onChange={e => { setResult(null); setDiasIgNasc(e.target.value); }}
                  placeholder="Dias"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-400 transition text-sm" />
                <p className="text-xs text-gray-400 mt-1 text-center">Dias</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Data de Nascimento</label>
            <input type="date" value={dataNasc} onChange={e => { setResult(null); setDataNasc(e.target.value); }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-400 transition text-sm" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Data da Avaliação</label>
            <input type="date" value={dataCorrec} onChange={e => { setResult(null); setDataCorrec(e.target.value); }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-400 transition text-sm" />
          </div>

          <button onClick={calculate} disabled={!igNasc || !diasIgNasc || !dataNasc || !dataCorrec}
            className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-40 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm">
            Calcular
          </button>
        </motion.div>

        {/* Result */}
        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }}
              className="space-y-4 mb-6">
              <div className="bg-sky-50 border-2 border-sky-300 rounded-2xl p-5">
                <AgeBlock label="Idade Cronológica (Real)"
                  values={{ ano: result.idadeCronAno, mes: result.idadeCronMes, sem: result.idadeCronSem, dia: result.idadeCronDia }}
                  color="text-sky-600" />
              </div>
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-5">
                <AgeBlock label="Idade Corrigida"
                  values={{ ano: result.idadeCorrAno, mes: result.idadeCorrMes, sem: result.idadeCorrSem, dia: result.idadeCorrDia }}
                  color="text-emerald-600" />
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Informações</p>
                <div className="space-y-2 text-sm">
                  {[
                    ['IG no nascimento', result.igNasc],
                    ['Dias cronológicos', `${result.diasCronologicos} dias`],
                    ...(result.deficiente > 0 ? [['Dias de prematuridade', `${result.deficiente} dias`]] : []),
                  ].map(([k, v], i) => (
                    <div key={i} className="flex justify-between bg-gray-50 rounded-xl px-4 py-2.5">
                      <span className="text-gray-600">{k}</span>
                      <span className="font-bold text-gray-800">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset */}
        {result && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={handleReset}
            className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mb-8">
            <RefreshCw className="w-4 h-4" /> Nova avaliação
          </motion.button>
        )}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex gap-3">
          <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-blue-900 space-y-1">
            <p className="font-semibold">Sobre a Idade Corrigida</p>
            <p>A correção desconsidera o tempo de prematuridade. Essencial para avaliar DNPM até os 2–3 anos de vida.</p>
            <p><strong>Fórmula:</strong> IC = Idade cronológica − semanas de prematuridade (semanas faltantes para 40 semanas)</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}