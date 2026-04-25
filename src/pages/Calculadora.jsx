import React, { useState, useEffect, useRef } from 'react';
import { ALL_CATEGORIES } from '@/lib/drugData';
import { Search, ChevronLeft, Calculator, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DrugResult from '@/components/DrugResult';
import DrugInfo from '@/components/DrugInfo';

const categoryColorMap = {
  'red-500': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-500', pill: 'bg-red-500' },
  'purple-500': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-500', pill: 'bg-purple-500' },
  'orange-500': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-500', pill: 'bg-orange-500' },
  'green-500': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-500', pill: 'bg-green-500' },
  'cyan-500': { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-500', pill: 'bg-cyan-500' },
  'lime-500': { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-500', pill: 'bg-lime-500' },
  'yellow-500': { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-500', pill: 'bg-yellow-500' },
  'red-400': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-400', pill: 'bg-red-400' },
  'teal-600': { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600', pill: 'bg-teal-600' },
  'blue-500': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-500', pill: 'bg-blue-500' },
};

export default function Calculadora() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [selectedDoseIdx, setSelectedDoseIdx] = useState(0);
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);
  const resultRef = useRef(null);

  // Handle URL param ?categoria=
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('categoria');
    if (cat) {
      const found = ALL_CATEGORIES.find(c => c.id === cat);
      if (found) setSelectedCat(found);
    }
  }, []);

  const handleCalcular = (e) => {
    e.preventDefault();
    const p = parseFloat(peso);
    if (!p || p < 1.5) return;
    setResultado(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const resetDrug = () => {
    setSelectedDrug(null);
    setResultado(null);
    setPeso('');
    setSelectedDoseIdx(0);
  };

  const resetAll = () => {
    resetDrug();
    setSelectedCat(null);
    setSearch('');
    window.history.replaceState({}, '', window.location.pathname);
  };

  // Search results
  const searchResults = search.trim().length > 1
    ? ALL_CATEGORIES.flatMap(cat => cat.drugs.map(d => ({ ...d, catLabel: cat.label, catColor: cat.color, catIcon: cat.icon, catObj: cat })))
        .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  if (selectedDrug) {
    const cat = ALL_CATEGORIES.find(c => c.id === selectedDrug.category);
    const colors = categoryColorMap[cat?.color] || categoryColorMap['blue-500'];
    return (
      <div className="max-w-2xl mx-auto px-4 pb-12">

        {/* Sticky top panel: header + peso + resultado */}
        <div className="sticky top-14 z-40 bg-background pt-4 pb-3 -mx-4 px-4 border-b border-border shadow-sm">
          {/* Back + Drug name */}
          <div className="flex items-center gap-3 mb-3">
            <button onClick={resetDrug} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className={`flex items-center gap-2 flex-1 min-w-0`}>
              <span className="text-xl flex-shrink-0">{cat?.icon}</span>
              <div className="min-w-0">
                <p className={`text-xs font-semibold ${colors.text} leading-none`}>{cat?.label}</p>
                <h1 className="text-base font-bold text-foreground truncate">{selectedDrug.name}</h1>
              </div>
            </div>
          </div>

          {/* Peso form */}
          <form onSubmit={handleCalcular} className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="number"
                placeholder="Peso da criança (kg)"
                value={peso}
                onChange={e => { setPeso(e.target.value); setResultado(null); }}
                step="0.1"
                min="1.5"
                className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm shadow-primary/30 text-sm flex-shrink-0"
            >
              {resultado ? <RotateCcw className="w-4 h-4" /> : <Calculator className="w-4 h-4" />}
              Calcular
            </button>
          </form>
        </div>

        {/* Result (shown right after the sticky bar) */}
        <AnimatePresence>
          {resultado && (
            <motion.div
              ref={resultRef}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4"
            >
              <DrugResult
                key={`${selectedDrug.id}-${selectedDoseIdx}`}
                drug={selectedDrug}
                peso={parseFloat(peso)}
                colors={colors}
                selectedDoseIdx={selectedDoseIdx}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drug info (doses, presentations, indications, notes) */}
        <div className="mt-4">
          <DrugInfo
            drug={selectedDrug}
            colors={colors}
            selectedDoseIdx={selectedDoseIdx}
            onSelectDose={(idx) => { setSelectedDoseIdx(idx); setResultado(null); }}
          />
        </div>
      </div>
    );
  }

  if (selectedCat) {
    const colors = categoryColorMap[selectedCat.color] || categoryColorMap['blue-500'];
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <button onClick={resetAll} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Todas as Categorias
        </button>

        <div className={`${colors.bg} ${colors.border} border rounded-2xl p-5 mb-6 flex items-center gap-3`}>
          <span className="text-3xl">{selectedCat.icon}</span>
          <div>
            <p className={`text-xs font-semibold ${colors.text}`}>Categoria</p>
            <h1 className="text-xl font-bold">{selectedCat.label}</h1>
          </div>
        </div>

        <div className="space-y-2">
          {selectedCat.drugs.map((drug, i) => (
            <motion.button
              key={drug.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              onClick={() => setSelectedDrug(drug)}
              className="w-full text-left bg-white border border-border rounded-xl px-4 py-3.5 flex items-center justify-between hover:border-primary/40 hover:shadow-sm transition-all group"
            >
              <span className="font-medium text-sm text-foreground">{drug.name}</span>
              <ChevronLeft className="w-4 h-4 text-muted-foreground rotate-180 group-hover:text-primary transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Calculadora de Doses</h1>
        <p className="text-muted-foreground text-sm">Selecione uma categoria ou pesquise um medicamento</p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Pesquisar medicamento..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-border rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white shadow-sm"
        />
      </div>

      {/* Search results */}
      <AnimatePresence>
        {searchResults.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mb-8 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Resultados</p>
            {searchResults.map(drug => {
              const colors = categoryColorMap[drug.catColor] || categoryColorMap['blue-500'];
              return (
                <button
                  key={`${drug.catObj.id}-${drug.id}`}
                  onClick={() => { setSelectedCat(drug.catObj); setSelectedDrug(drug); }}
                  className="w-full text-left bg-white border border-border rounded-xl px-4 py-3 flex items-center gap-3 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <span className="text-xl">{drug.catIcon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{drug.name}</p>
                    <p className={`text-xs ${colors.text}`}>{drug.catLabel}</p>
                  </div>
                  <ChevronLeft className="w-4 h-4 text-muted-foreground rotate-180" />
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {!search && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ALL_CATEGORIES.map((cat, i) => {
            const colors = categoryColorMap[cat.color] || categoryColorMap['blue-500'];
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setSelectedCat(cat)}
                className={`${colors.bg} ${colors.border} border rounded-2xl p-4 flex flex-col items-center gap-2 text-center cursor-pointer hover:shadow-md transition-all`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <p className={`text-xs font-bold ${colors.text} leading-tight`}>{cat.label.toUpperCase()}</p>
                <span className="text-xs text-muted-foreground">{cat.drugs.length} medicamentos</span>
              </motion.button>
            );
          })}
        </div>
      )}
    </div>
  );
}