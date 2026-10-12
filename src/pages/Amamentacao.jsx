import React, { useState, useMemo } from 'react';
import {
  Search,
  AlertTriangle,
  AlertOctagon,
  XCircle,
  Info,
  CheckCircle2,
  ExternalLink,
  X,
  Star,
  Copy,
  Check,
  ArrowUpDown,
  FileText,
  Baby,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  AMAMENTACAO_METADATA,
  NIVEIS_SEGURANCA,
  filterAmamentacao,
  getAmamentacaoStats
} from '@/lib/amamentacaoData';
import { usePageFavorites } from '@/hooks/usePageFavorites';

// Color map for level styling
const LEVEL_STYLES = {
  1: {
    bg: 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-900/60 dark:text-emerald-200',
    dot: 'bg-emerald-500',
    border: 'border-l-emerald-500',
    icon: CheckCircle2,
    short: 'Compatível'
  },
  2: {
    bg: 'bg-sky-50 border-sky-200 text-sky-800 dark:bg-sky-950/40 dark:border-sky-800 dark:text-sky-200',
    badge: 'bg-sky-100 text-sky-800 border-sky-300 dark:bg-sky-900/60 dark:text-sky-200',
    dot: 'bg-sky-500',
    border: 'border-l-sky-500',
    icon: Info,
    short: 'Provavelmente compatível'
  },
  3: {
    bg: 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-200',
    badge: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/60 dark:text-amber-200',
    dot: 'bg-amber-500',
    border: 'border-l-amber-500',
    icon: AlertTriangle,
    short: 'Monitorar lactente'
  },
  4: {
    bg: 'bg-orange-50 border-orange-200 text-orange-800 dark:bg-orange-950/40 dark:border-orange-800 dark:text-orange-200',
    badge: 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/60 dark:text-orange-200',
    dot: 'bg-orange-500',
    border: 'border-l-orange-500',
    icon: AlertOctagon,
    short: 'Possivelmente perigoso'
  },
  5: {
    bg: 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-200',
    badge: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-900/60 dark:text-rose-200',
    dot: 'bg-rose-500',
    border: 'border-l-rose-500',
    icon: XCircle,
    short: 'Contraindicado'
  }
};

const POPULAR_SEARCHES = [
  'Dipirona',
  'Paracetamol',
  'Ibuprofeno',
  'Amoxicilina',
  'Sertralina',
  'Clonazepam',
  'Febre amarela',
  'Álcool',
  'Maconha',
  'Fluconazol'
];

export default function Amamentacao() {
  const [query, setQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortOrder, setSortOrder] = useState('name');
  const [visibleCount, setVisibleCount] = useState(40);
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [showLegend, setShowLegend] = useState(false);

  // Favorite toggle for /amamentacao
  const { isFavorite, toggleFavorite } = usePageFavorites() || {
    isFavorite: () => false,
    toggleFavorite: () => {}
  };
  const isPageFavorited = isFavorite('/amamentacao');

  const stats = useMemo(() => getAmamentacaoStats(), []);

  // Filtered dataset
  const filteredData = useMemo(() => {
    return filterAmamentacao({
      query,
      nivel: selectedLevel,
      sort: sortOrder
    });
  }, [query, selectedLevel, sortOrder]);

  // Reset pagination when filter or search changes
  const handleQueryChange = (val) => {
    setQuery(val);
    setVisibleCount(40);
  };

  const handleLevelChange = (lvl) => {
    setSelectedLevel(lvl);
    setVisibleCount(40);
  };

  const handleCopyText = (item) => {
    const text = `[Amamentação e Medicamentos - Min. Saúde 2025]\nSubstância: ${item.nome}\nClassificação: ${item.nivel} — ${item.classificacao}\nOrientação: ${item.descricao}`;
    navigator.clipboard?.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const visibleItems = useMemo(() => {
    return filteredData.slice(0, visibleCount);
  }, [filteredData, visibleCount]);

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-6">
      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200/70">
              <Baby className="w-3.5 h-3.5" />
              Lactação & Farmacologia Clínica
            </span>
            <span className="text-xs font-semibold text-slate-400">
              3ª Edição · 2025
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy mt-1 tracking-tight">
            Segurança na Amamentação
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
            Compatibilidade, níveis de risco e precauções clínicas para mais de 1.300 medicamentos, vacinas e substâncias durante o aleitamento materno.
          </p>
        </div>

        {/* ACTIONS: FAVORITE BUTTON & SOURCE LINK */}
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <button
            onClick={() => toggleFavorite('/amamentacao')}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
              isPageFavorited
                ? 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-200'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            title={isPageFavorited ? 'Remover dos favoritos' : 'Favoritar esta página'}
          >
            <Star
              className={`w-4 h-4 ${
                isPageFavorited ? 'fill-amber-400 text-amber-500' : 'text-slate-400'
              }`}
            />
            <span>{isPageFavorited ? 'Favoritado' : 'Favoritar'}</span>
          </button>

          <a
            href={AMAMENTACAO_METADATA.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#164B73] text-white hover:bg-[#113a5a] shadow-xs transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>PDF Oficial MS (121 p.)</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* OFFICIAL CITATION BANNER */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="space-y-1">
            <span className="font-bold text-slate-700">Fonte Oficial do Ministério da Saúde:</span>
            <p className="text-slate-500 leading-relaxed">
              Brasil. Ministério da Saúde. Secretaria da Atenção Primária à Saúde. Departamento de Gestão do Cuidado Integral.{' '}
              <em>Amamentação e uso de medicamentos e outras substâncias [recurso eletrônico]</em> – 3. ed. – Brasília : Ministério da Saúde, 2025. 121 p. ISBN {AMAMENTACAO_METADATA.isbn}.
            </p>
          </div>
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors shrink-0"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand-teal" />
            <span>{showLegend ? 'Ocultar Níveis' : 'Entenda os Níveis (1 a 5)'}</span>
            {showLegend ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* EXPANDABLE NIVEIS GUIDE */}
        {showLegend && (
          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-fadeIn">
            {Object.values(NIVEIS_SEGURANCA).map((n) => {
              const style = LEVEL_STYLES[n.nivel];
              const Icon = style.icon;
              return (
                <div
                  key={n.nivel}
                  className={`p-3 rounded-xl border ${style.bg} space-y-1 transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs flex items-center gap-1.5">
                      <Icon className="w-4 h-4 shrink-0" />
                      {n.label} — {n.titulo}
                    </span>
                  </div>
                  <p className="text-[11px] opacity-90 leading-snug">{n.significado}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FILTER PILLS (TODOS & NÍVEIS 1 A 5) */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => handleLevelChange('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
            selectedLevel === 'all'
              ? 'bg-[#164B73] text-white border-[#164B73] shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Todos ({stats.total})
        </button>

        {[
          { lvl: '1', label: 'Nível 1 · Compatível', count: stats[1], style: LEVEL_STYLES[1] },
          { lvl: '2', label: 'Nível 2 · Provavelmente Compatível', count: stats[2], style: LEVEL_STYLES[2] },
          { lvl: '3', label: 'Nível 3 · Monitorar Lactente', count: stats[3], style: LEVEL_STYLES[3] },
          { lvl: '4', label: 'Nível 4 · Risco Potencial', count: stats[4], style: LEVEL_STYLES[4] },
          { lvl: '5', label: 'Nível 5 · Contraindicado', count: stats[5], style: LEVEL_STYLES[5] }
        ].map(({ lvl, label, count, style }) => (
          <button
            key={lvl}
            onClick={() => handleLevelChange(lvl)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              selectedLevel === lvl
                ? `${style.badge} ring-2 ring-offset-1 ring-slate-400 font-extrabold shadow-xs`
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${style.dot}`} />
            <span>{label}</span>
            <span className="text-[11px] opacity-75 font-normal">({count})</span>
          </button>
        ))}
      </div>

      {/* SEARCH AND SORT BAR */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Buscar por fármaco, princípio ativo, vacina ou substância (ex: Dipirona, Paracetamol, Álcool)..."
              className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#164B73] focus:bg-white transition-all"
            />
            {query && (
              <button
                onClick={() => handleQueryChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                title="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#164B73]"
            >
              <option value="name">Ordem Alfabética (A-Z)</option>
              <option value="risk-asc">Menor Risco Primeiro (Nível 1 → 5)</option>
              <option value="risk-desc">Maior Risco Primeiro (Nível 5 → 1)</option>
            </select>
          </div>
        </div>

        {/* POPULAR SEARCH PILLS */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
          <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Mais buscados:
          </span>
          {POPULAR_SEARCHES.map((term) => (
            <button
              key={term}
              onClick={() => handleQueryChange(term)}
              className={`px-2.5 py-1 rounded-lg transition-colors font-medium ${
                query.toLowerCase() === term.toLowerCase()
                  ? 'bg-brand-navy text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS COUNT & META */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Encontradas <strong className="text-slate-800 font-bold">{filteredData.length}</strong> substâncias
          {selectedLevel !== 'all' && ` no Nível ${selectedLevel}`}
          {query && ` para "${query}"`}
        </span>
        {filteredData.length > visibleCount && (
          <span>
            Mostrando 1 a {Math.min(visibleCount, filteredData.length)}
          </span>
        )}
      </div>

      {/* CARDS LIST GRID */}
      {filteredData.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800">
            Nenhuma substância encontrada
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Não encontramos resultados para "{query}" no filtro selecionado. Verifique a grafia ou tente buscar pelo nome genérico do fármaco.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedLevel('all');
            }}
            className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-xs rounded-xl transition-colors"
          >
            Limpar todos os filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleItems.map((item) => {
            const primaryLevel = item.primaryLevel || 3;
            const style = LEVEL_STYLES[primaryLevel] || LEVEL_STYLES[3];
            const isDual = item.levels && item.levels.length > 1;
            const hasSuspension = item.descricao.toLowerCase().includes('suspender') || item.descricao.toLowerCase().includes('horas');
            const hasMonitoring = item.descricao.toLowerCase().includes('monitorar');

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className={`bg-white border border-slate-200/90 hover:border-brand-teal/60 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between border-l-4 ${style.border}`}
              >
                <div className="space-y-3">
                  {/* Card Header: Name + Level Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-bold text-base text-slate-900 leading-snug">
                      {item.nome}
                    </h3>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-extrabold border ${style.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                        {item.nivel}
                      </span>
                    </div>
                  </div>

                  {/* Classification */}
                  <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    {item.classificacao}
                  </p>

                  {/* Description preview */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>

                {/* Card Footer: Clinical Alerts + View Details */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {isDual && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        Classificação Múltipla
                      </span>
                    )}
                    {hasSuspension && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        Suspender Amamentação
                      </span>
                    )}
                    {hasMonitoring && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-50 text-sky-800 border border-sky-200">
                        Monitorar Bebê
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1 shrink-0 ml-auto">
                    Ver ficha clínica &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* PAGINATION / LOAD MORE */}
      {filteredData.length > visibleCount && (
        <div className="pt-4 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 40)}
            className="px-6 py-2.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-xs rounded-xl shadow-2xs hover:shadow-xs transition-all"
          >
            Carregar mais 40 substâncias (restam {filteredData.length - visibleCount})
          </button>
        </div>
      )}

      {/* DETAIL MODAL */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-5 border border-slate-200 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ficha Oficial · Min. Saúde 2025
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy mt-0.5">
                  {activeModalItem.nome}
                </h2>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Level & Classification Badge */}
            {(() => {
              const style = LEVEL_STYLES[activeModalItem.primaryLevel] || LEVEL_STYLES[3];
              const Icon = style.icon;
              return (
                <div className={`p-4 rounded-xl border ${style.bg} space-y-1.5`}>
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="font-extrabold text-sm">
                      {activeModalItem.nivel} — {activeModalItem.classificacao}
                    </span>
                  </div>
                  <p className="text-xs opacity-90 leading-relaxed">
                    {NIVEIS_SEGURANCA[activeModalItem.primaryLevel]?.significado}
                  </p>
                </div>
              );
            })()}

            {/* Full Clinical Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Orientações Clínicas e Farmacocinética
              </h4>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {activeModalItem.descricao}
              </div>
            </div>

            {/* Conduct Summary Checklist */}
            <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-900 space-y-1.5">
              <span className="font-bold flex items-center gap-1.5 text-teal-950">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Recomendações para a Consulta Pediátrica:
              </span>
              <ul className="list-disc list-inside space-y-1 text-teal-800/90 pl-1">
                <li>Verificar a dosagem materna, via de administração e horário das tomadas.</li>
                <li>Avaliar a idade do lactente (maior vulnerabilidade em prematuros e neonatos &lt; 2 meses).</li>
                <li>Se for recomendada suspensão temporária, orientar ordenha e desprezo do leite para manter a lactação.</li>
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => handleCopyText(activeModalItem)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                {copiedId === activeModalItem.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copiado para o prontuário!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar orientação</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#164B73] text-white hover:bg-[#113a5a] transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
