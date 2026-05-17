import React, { useState } from 'react';
import { TrendingUp, Info, AlertTriangle, Ruler } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AlvoParental() {
  const [alturaP, setAlturaP] = useState('');
  const [alturaM, setAlturaM] = useState('');
  const [sex, setSex] = useState('');
  const [result, setResult] = useState(null);

  const calculateAlvo = () => {
    if (!alturaP || !alturaM || !sex) return;

    const p = parseFloat(alturaP);
    const m = parseFloat(alturaM);
    if (p <= 0 || m <= 0) return;

    let alvo;
    if (sex === 'male') {
      alvo = (p + m + 13) / 2;
    } else {
      alvo = (p + m - 13) / 2;
    }

    const minimo = alvo - 8.5;
    const maximo = alvo + 8.5;

    setResult({
      alvo: alvo.toFixed(1),
      minimo: minimo.toFixed(1),
      maximo: maximo.toFixed(1),
      sex: sex === 'male' ? 'Menino' : 'Menina',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pb-12">
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Ruler className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Alvo Parental</h1>
        </div>
        <p className="text-gray-600 text-base">Estimativa de estatura-alvo genética</p>
        <p className="text-xs text-gray-400 mt-1">Baseada na altura dos pais biológicos</p>
      </motion.div>

      {/* Form */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm p-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Altura do Pai (cm)</label>
            <input
              type="number"
              step="0.1"
              value={alturaP}
              onChange={(e) => setAlturaP(e.target.value)}
              placeholder="Ex: 180"
              className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Altura da Mãe (cm)</label>
            <input
              type="number"
              step="0.1"
              value={alturaM}
              onChange={(e) => setAlturaM(e.target.value)}
              placeholder="Ex: 165"
              className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Sexo da Criança</label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            >
              <option value="">Selecione</option>
              <option value="male">Menino</option>
              <option value="female">Menina</option>
            </select>
          </div>

          <button
            onClick={calculateAlvo}
            disabled={!alturaP || !alturaM || !sex}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-40 text-primary-foreground font-bold py-3 rounded-xl transition-all mt-2"
          >
            Calcular
          </button>
        </div>
      </motion.div>

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-card border border-border rounded-2xl shadow-sm p-6 mb-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground">Resultado — {result.sex}</span>
            </div>

            {/* Main target */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-4 text-center">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Estatura-Alvo</p>
              <p className="text-5xl font-extrabold text-primary">{result.alvo}</p>
              <p className="text-sm text-muted-foreground mt-1">cm</p>
            </div>

            {/* Range */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-secondary rounded-xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">Mínimo</p>
                <p className="text-2xl font-bold text-foreground">{result.minimo}</p>
                <p className="text-xs text-muted-foreground">cm</p>
              </div>
              <div className="bg-secondary rounded-xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">Máximo</p>
                <p className="text-2xl font-bold text-foreground">{result.maximo}</p>
                <p className="text-xs text-muted-foreground">cm</p>
              </div>
            </div>

            <div className="bg-secondary/60 border border-border rounded-xl p-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                A estatura adulta esperada situa-se entre <strong className="text-foreground">{result.minimo} cm</strong> e <strong className="text-foreground">{result.maximo} cm</strong>, considerando variações genéticas normais (IC ±8,5 cm).
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formula */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
        <div className="flex gap-3">
          <Info className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-700">
            <p className="font-semibold mb-2">Fórmula Utilizada</p>
            <div className="space-y-1.5 text-xs font-mono bg-gray-50 rounded-xl p-3 border border-gray-200">
              <p><strong>Meninos:</strong> (Pai + Mãe + 13) ÷ 2</p>
              <p><strong>Meninas:</strong> (Pai + Mãe − 13) ÷ 2</p>
              <p className="pt-1 text-gray-400">Intervalo de confiança: ±8,5 cm</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Referências */}
      <div className="mt-6 text-xs text-gray-400 space-y-1 px-1">
        <p className="font-semibold text-gray-500">Referências</p>
        <p>Tanner JM, Goldstein H, Whitehouse RH. Standards for children's heights at ages 2–9 years allowing for height of parents. <em>Arch Dis Child</em> 1970;45(244):755-62.</p>
        <p>Sociedade Brasileira de Pediatria (SBP). <em>Avaliação do Crescimento e Desenvolvimento</em>. Rio de Janeiro: SBP; 2021.</p>
        <p>Linhares MBM, et al. Alvo parental como referência de crescimento estatural. <em>J Pediatr (Rio J)</em> 2004;80(4):265-72.</p>
      </div>
    </div>
    </div>
  );
}