import React, { useState, useEffect, useMemo } from 'react';
import { ALL_CATEGORIES as GUIDE_CATEGORIES, getAllGuideDrugs } from '@/lib/guideData';
import { searchDrugs } from '@/lib/searchDrugs';
import { Search, ChevronRight, ChevronLeft, Star, Zap, LayoutGrid, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DrugGuideDetail from '@/components/DrugGuideDetail';
import { useFavorites } from '@/hooks/useFavorites.jsx';

const colorMap = {
  'red-500':    { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-500',    pill: 'bg-red-500',    iconBg: 'bg-red-100' },
  'purple-500': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-500', pill: 'bg-purple-500', iconBg: 'bg-purple-100' },
  'orange-500': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-500', pill: 'bg-orange-500', iconBg: 'bg-orange-100' },
  'green-500':  { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-500',  pill: 'bg-green-500',  iconBg: 'bg-green-100' },
  'cyan-500':   { bg: 'bg-cyan-50',   border: 'border-cyan-200',   text: 'text-cyan-500',   pill: 'bg-cyan-500',   iconBg: 'bg-cyan-100' },
  'blue-500':   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-500',   pill: 'bg-blue-500',   iconBg: 'bg-blue-100' },
  'indigo-500': { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-500', pill: 'bg-indigo-500', iconBg: 'bg-indigo-100' },
  'amber-500':  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-500',  pill: 'bg-amber-500',  iconBg: 'bg-amber-100' },
  'pink-500':   { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-500',   pill: 'bg-pink-500',   iconBg: 'bg-pink-100' },
  'teal-500':   { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-500',   pill: 'bg-teal-500',   iconBg: 'bg-teal-100' },
  'lime-500':   { bg: 'bg-lime-50',   border: 'border-lime-200',   text: 'text-lime-500',   pill: 'bg-lime-500',   iconBg: 'bg-lime-100' },
};

const MAIS_CONSULTADOS = [
  { name: 'Paracetamol',   catLabel: 'Analgésicos e Anti-inflamatórios', drugId: 'paracetamol' },
  { name: 'Ibuprofeno',    catLabel: 'Analgésicos e Anti-inflamatórios', drugId: 'ibuprofeno' },
  { name: 'Amoxicilina',   catLabel: 'Antibióticos',                     drugId: 'amoxicilina' },
  { name: 'Salbutamol',    catLabel: 'Sistema Respiratório',              drugId: 'salbutamol' },
  { name: 'Dipirona',      catLabel: 'Analgésicos e Anti-inflamatórios', drugId: 'dipirona' },
  { name: 'Prednisolona',  catLabel: 'Corticosteroides',                  drugId: 'prednisolona' },
  { name: 'Omeprazol',     catLabel: 'Gastroprotetores',                  drugId: 'omeprazol' },
  { name: 'Cetirizina',    catLabel: 'Anti-histamínicos',                 drugId: 'cetirizina' },
];

export default function Guia() {
  const [search, setSearch] = useState('');
  const [catSearch, setCatSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [activeTab, setActiveTab] = useState('categorias');
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [sortAZ, setSortAZ] = useState(false);
  const { favorites, isFavorite } = useFavorites();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const drugId = params.get('drug');
    if (drugId) {
      const found = getAllGuideDrugs().find(d => d.id === drugId);
      if (found) {
        const cat = GUIDE_CATEGORIES.find(c => c.id === found.category);
        setSelectedCat(cat);
        setSelectedDrug(found);
      }
    }
  }, []);

  const searchResults = search.trim().length > 1 ? searchDrugs(search, 12) : [];

  const resetAll = () => {
    setSelectedDrug(null);
    setSelectedCat(null);
    setSearch('');
    window.history.replaceState({}, '', window.location.pathname);
  };

  const allDrugsMap = useMemo(() => Object.fromEntries(
    GUIDE_CATEGORIES.flatMap(c => c.drugs.map(d => [d.id, { ...d, catLabel: c.label, catColor: c.color, catIcon: c.icon, catId: c.id }]))
  ), []);

  const favoriteDrugs = favorites.map(id => allDrugsMap[id]).filter(Boolean);

  const filteredCats = useMemo(() => {
    const q = catSearch.toLowerCase().trim();
    let filtered = !q ? GUIDE_CATEGORIES : GUIDE_CATEGORIES.filter(c => c.label.toLowerCase().includes(q));
    if (selectedClasses.length > 0) {
      filtered = filtered.filter(c => selectedClasses.includes(c.id));
    }
    return filtered;
  }, [catSearch, selectedClasses]);

  const allDrugsFlat = useMemo(() => {
    let drugs = GUIDE_CATEGORIES.flatMap(c => c.drugs.map(d => ({ ...d, catLabel: c.label, catColor: c.color, catIcon: c.icon, catId: c.id })));
    if (sortAZ) {
      drugs = [...drugs].sort((a, b) => a.name.localeCompare(b.name));
    }
    return drugs;
  }, [sortAZ]);

  // ── Drug detail ──
  if (selectedDrug) {
    const cat = GUIDE_CATEGORIES.find(c => c.id === selectedDrug.category);
    const colors = colorMap[cat?.color] || colorMap['blue-500'];
    return (
      <div className="max-w-3xl mx-auto px-4 pb-12 pt-6">
        <button onClick={() => setSelectedDrug(null)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Voltar
        </button>
        <DrugGuideDetail drug={selectedDrug} colors={colors} catIcon={cat?.icon} catLabel={cat?.label} />
      </div>
    );
  }

  // ── Category drug list ──
  if (selectedCat) {
    const colors = colorMap[selectedCat.color] || colorMap['blue-500'];
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
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
            <motion.button key={drug.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
              onClick={() => setSelectedDrug(drug)}
              className="w-full text-left bg-white border border-border rounded-xl px-4 py-3.5 flex items-center justify-between hover:border-primary/40 hover:shadow-sm transition-all group"
            >
              <div>
                <span className="font-semibold text-sm text-foreground">{drug.name}</span>
                {drug.suffix && <span className="ml-2 text-xs text-muted-foreground">({drug.suffix})</span>}
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // ── Main view ──
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ── HEADER ── */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground mb-1">Bulas</h1>
        <p className="text-muted-foreground text-sm">Referência clínica completa de medicamentos pediátricos e adultos</p>
      </div>

      {/* ── GLOBAL SEARCH ── */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar medicamento, classe ou princípio ativo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-border rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Search dropdown */}
        <AnimatePresence>
          {searchResults.length > 0 && (
            <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-2xl shadow-lg overflow-hidden z-30">
              {searchResults.map(drug => {
                const cat = GUIDE_CATEGORIES.find(c => c.id === drug.category);
                const colors = colorMap[cat?.color] || colorMap['blue-500'];
                return (
                  <button key={drug.id} onClick={() => { setSelectedCat(cat); setSelectedDrug(drug); setSearch(''); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-secondary transition-colors border-b border-border last:border-0">
                    <span className="text-xl">{cat?.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold">{drug.name}</p>
                      {drug.suffix && <span className="text-xs text-muted-foreground">({drug.suffix}) · </span>}
                      <span className={`text-xs ${colors.text}`}>{cat?.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── TABS ── */}
      <div className="flex gap-3 mb-8 flex-wrap">
        <button onClick={() => setActiveTab('categorias')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${activeTab === 'categorias' ? 'bg-primary text-white border-primary' : 'bg-white text-foreground border-border hover:bg-secondary/50'}`}>
          <LayoutGrid className="w-4 h-4" /> Categorias
        </button>
        <button onClick={() => setActiveTab('favoritos')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${activeTab === 'favoritos' ? 'bg-primary text-white border-primary' : 'bg-white text-foreground border-border hover:bg-secondary/50'}`}>
          <Star className={`w-4 h-4 ${activeTab === 'favoritos' ? 'fill-white' : ''}`} />
          Favoritos
          {favorites.length > 0 && (
            <span className={`text-xs rounded-full px-1.5 font-bold ${activeTab === 'favoritos' ? 'bg-white/20' : 'bg-secondary text-foreground'}`}>
              {favorites.length}
            </span>
          )}
        </button>
      </div>

      {/* ── FAVORITOS TAB ── */}
      {activeTab === 'favoritos' && (
        <div className="max-w-3xl">
          {favoriteDrugs.length === 0 ? (
            <div className="text-center py-16 bg-white border border-border rounded-2xl text-muted-foreground">
              <Star className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <p className="font-semibold text-foreground">Nenhum favorito ainda</p>
              <p className="text-sm mt-1">Abra um medicamento e toque na estrela ⭐ para salvá-lo aqui.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {favoriteDrugs.map((drug, i) => {
                const cat = GUIDE_CATEGORIES.find(c => c.id === drug.category);
                return (
                  <motion.button key={drug.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                    onClick={() => { setSelectedCat(cat); setSelectedDrug(drug); }}
                    className="w-full text-left bg-white border border-border rounded-xl px-4 py-3.5 flex items-center gap-3 hover:border-yellow-300 hover:shadow-sm transition-all group">
                    <span className="text-xl">{cat?.icon}</span>
                    <div className="flex-1">
                      <span className="font-semibold text-sm text-foreground">{drug.name}</span>
                      {drug.suffix && <span className="ml-2 text-xs text-muted-foreground">({drug.suffix})</span>}
                      <p className="text-xs text-muted-foreground mt-0.5">{cat?.label}</p>
                    </div>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                  </motion.button>
                );
              })}
            </div>
            )}
        </div>
      )}

      {/* ── CATEGORIAS TAB ── */}
      {activeTab === 'categorias' && (
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT — Main content area */}
          <div className="flex-1 min-w-0">

            {/* Category grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredCats.map((cat, i) => {
                  const colors = colorMap[cat.color] || colorMap['blue-500'];
                  return (
                    <motion.button key={cat.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                      onClick={() => setSelectedCat(cat)}
                      className="w-full bg-white border border-border rounded-lg px-4 py-4 flex items-center gap-3 text-left hover:bg-secondary/50 transition-all group">
                      <div className={`w-10 h-10 rounded-lg ${colors.iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
                        {cat.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-foreground leading-snug">{cat.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{cat.drugs.length} medicamento{cat.drugs.length !== 1 ? 's' : ''}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </motion.button>
                  );
                })}
              </div>

            {filteredCats.length === 0 && (
              <div className="text-center py-16 bg-white border border-border rounded-lg">
                <p className="text-3xl mb-2">🔍</p>
                <p className="font-semibold text-foreground text-sm">Nenhuma categoria encontrada</p>
              </div>
            )}
          </div>

          {/* RIGHT — Sidebar */}
          <div className="lg:w-64 xl:w-72 flex-shrink-0">
            <div className="bg-white border border-border rounded-lg p-4 sticky top-20 shadow-sm">
              <p className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Mais consultados
              </p>
              <div className="space-y-2 text-sm">
                {MAIS_CONSULTADOS.map((drug, i) => (
                  <button
                    key={drug.drugId}
                    onClick={() => {
                      const found = getAllGuideDrugs().find(d => d.id === drug.drugId);
                      if (found) {
                        const cat = GUIDE_CATEGORIES.find(c => c.id === found.category);
                        setSelectedCat(cat);
                        setSelectedDrug(found);
                      }
                    }}
                    className="w-full text-left flex items-start gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <span className="font-bold text-primary text-xs flex-shrink-0 w-5">{i + 1}.</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-xs leading-snug">{drug.name}</p>
                      <p className="text-[11px] text-muted-foreground leading-tight">{drug.catLabel}</p>
                    </div>
                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform flex-shrink-0 mt-0.5" />
                  </button>
                ))}
              </div>
              <button className="mt-3 w-full text-center text-xs text-primary font-semibold hover:underline">
                Ver todos →
              </button>
            </div>
          </div>
        </div>
      )}
             </div>
             );
             }