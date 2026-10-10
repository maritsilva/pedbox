import PageHeader from '@/components/PageHeader';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ArrowRight,
  Search,
  Calculator,
  Pill,
  FileText,
  Syringe,
  Activity,
  BookOpen,
  Scale,
  ShieldAlert,
} from 'lucide-react';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { CALCULATORS, normalizeSearch } from '@/lib/calculatorRegistry';

const CATEGORY_TILES = [
  { label: 'Calculadoras', desc: 'Cálculos e escores clínicos', cat: 'Calculadoras', icon: Calculator, color: 'text-blue-600 bg-blue-50' },
  { label: 'Medicamentos', desc: 'Doses, bulas e interações', cat: 'Doses', icon: Pill, color: 'text-emerald-600 bg-emerald-50' },
  { label: 'Protocolos', desc: 'Condutas e guias clínicos', cat: 'Biblioteca', icon: FileText, color: 'text-purple-600 bg-purple-50' },
  { label: 'Vacinas', desc: 'Calendário e esquemas', cat: 'Puericultura', icon: Syringe, color: 'text-orange-600 bg-orange-50' },
  { label: 'Sinais Vitais', desc: 'Valores de referência', cat: 'Puericultura', icon: Activity, color: 'text-teal-600 bg-teal-50' },
  { label: 'Biblioteca', desc: 'Artigos, guias e materiais', cat: 'Biblioteca', icon: BookOpen, color: 'text-indigo-600 bg-indigo-50' },
  { label: 'Avaliação Clínica', desc: 'Escalas e escores', cat: 'Escores', icon: Scale, color: 'text-sky-600 bg-sky-50' },
  { label: 'Emergência', desc: 'Drogas e suporte rápido', cat: 'Emergência', icon: ShieldAlert, color: 'text-rose-600 bg-rose-50' },
];

const TOOLS = [
  { path: '/vacinas', label: 'Vacinas', icon: '💉', desc: 'Calendário vacinal e informações detalhadas por imunobiológico.', cat: 'Puericultura' },
  { path: '/desenvolvimento', label: 'Desenvolvimento Infantil', icon: '🌱', desc: 'Marcos dos 2 meses aos 5 anos com sinais de alerta.', cat: 'Puericultura' },
  { path: '/curvas-crescimento', label: 'Curvas de Crescimento', icon: '📈', desc: 'Curvas de crescimento OMS, CDC e SBP para download.', cat: 'Puericultura' },
  { path: '/imc', label: 'IMC Pediátrico', icon: '📊', desc: 'Cálculo do índice de massa corporal para crianças e adolescentes.', cat: 'Puericultura' },
  { path: '/perimetro-cefalico', label: 'Perímetro Cefálico', icon: '🔵', desc: 'Avaliação e percentis do perímetro cefálico por idade e sexo.', cat: 'Puericultura' },
  { path: '/alvo-parental', label: 'Alvo Parental', icon: '📐', desc: 'Estimativa da altura alvo adulta baseada na estatura parental.', cat: 'Puericultura' },
  { path: '/sinais-vitais', label: 'Sinais Vitais Pediátricos', icon: '📋', desc: 'Valores de referência de FC, FR e PA por faixa etária.', cat: 'Puericultura' },
  { path: '/dosagens', label: 'Dosagens — Cálculo Rápido', icon: '⚡', desc: 'Calcule doses por peso instantaneamente · 30+ medicamentos.', cat: 'Doses' },
  { path: '/guia', label: 'Guia de Medicamentos', icon: '📖', desc: 'Doses, preparo e apresentações completas por princípio ativo.', cat: 'Doses' },
  { path: '/hidratacao', label: 'Hidratação Venosa', icon: '💧', desc: 'Cálculo de fluidos e manutenção para hidratação venosa.', cat: 'Doses' },
  { path: '/pressao-arterial', label: 'PA Pediátrica', icon: '❤️', desc: 'Estimativa de pressão arterial por faixa etária e percentil.', cat: 'Emergência' },
  { path: '/glasgow-pediatrico', label: 'Glasgow Pediátrico', icon: '🧠', desc: 'Avaliação do nível de consciência em pacientes pediátricos.', cat: 'Emergência' },
  { path: '/pews', label: 'PEWS', icon: '⚠️', desc: 'Pontuação de alerta precoce em pediatria.', cat: 'Emergência' },
  { path: '/sipa', label: 'SIPA', icon: '💓', desc: 'Shock Index pediátrico ajustado por faixa etária.', cat: 'Emergência' },
  { path: '/drogas-emergencia', label: 'Drogas na Emergência', icon: '🚨', desc: 'Guias rápidos de drogas para situações de emergência.', cat: 'Emergência' },
  { path: '/centor-mcisaac', label: 'Centor / McIsaac', icon: '🦠', desc: 'Probabilidade de faringoamigdalite estreptocócica.', cat: 'Escores' },
  { path: '/pas-asma', label: 'PAS — Asma', icon: '🌬️', desc: 'Pediatric Asthma Score para triagem na emergência.', cat: 'Escores' },
  { path: '/pram', label: 'PRAM', icon: '💨', desc: 'Pontuação de risco em asma pediátrica (2–17 anos).', cat: 'Escores' },
  { path: '/wood-downes', label: 'Wood-Downes', icon: '🫁', desc: 'Classificação de gravidade da bronquiolite.', cat: 'Escores' },
  { path: '/apgar', label: 'APGAR', icon: '👶', desc: 'Avaliação rápida da vitalidade do recém-nascido.', cat: 'Neonatal' },
  { path: '/silverman-anderson', label: 'Silverman-Anderson', icon: '🫂', desc: 'Avaliação da gravidade do desconforto respiratório.', cat: 'Neonatal' },
  { path: '/rodwell', label: 'Escore de Rodwell', icon: '🧬', desc: 'Probabilidade de sepse neonatal.', cat: 'Neonatal' },
  { path: '/idade-gestacional-corrigida', label: 'IG Corrigida', icon: '🍼', desc: 'Cálculo da idade gestacional corrigida para prematuros.', cat: 'Neonatal' },
  { path: '/calculadoras', label: 'Calculadoras Clínicas', icon: '🧮', desc: 'Conjunto de calculadoras clínicas para o dia a dia do plantão.', cat: 'Calculadoras' },
  { path: '/biblioteca?tab=protocolos', label: 'Protocolos Clínicos', icon: '🧪', desc: 'Fluxogramas passo a passo por condição clínica.', cat: 'Biblioteca' },
  { path: '/biblioteca?tab=condutas', label: 'Condutas Clínicas', icon: '🩺', desc: 'Manejos e condutas estruturadas por categoria.', cat: 'Biblioteca' },
  { path: '/biblioteca', label: 'Biblioteca Completa', icon: '📚', desc: 'Protocolos, condutas, links e anotações pediátricas.', cat: 'Biblioteca' },
  { path: '/rastreio-preventivo', label: 'Rastreio Preventivo', icon: '🛡️', desc: 'Calendário de triagens pediátricas — Bright Futures / AAP.', cat: 'Preventivo' },
];

const catalog = [
  ...TOOLS.filter((t) => !CALCULATORS.some((c) => c.path === t.path)).map((t) => ({
    ...t,
    status: '',
  })),
  ...CALCULATORS.map((c) => ({ ...c, cat: c.category })),
];

export default function ExplorarFerramentas() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('Todas');
  const { isFavorite, toggleFavorite } = usePageFavorites();

  const filtered = catalog.filter(
    (t) =>
      (selectedCat === 'Todas' || t.cat === selectedCat) &&
      normalizeSearch(`${t.label} ${t.desc} ${t.cat}`).includes(normalizeSearch(search))
  );

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-6">
      {/* HEADER WITH SEARCH INPUT */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
            Ferramentas
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Encontre rapidamente o que você precisa para o atendimento pediátrico.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar ferramentas..."
            className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
          />
        </div>
      </div>

      {/* TOP CATEGORY GRID (Mockup 2 Style) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Categorias de Consulta
          </h2>
          {selectedCat !== 'Todas' && (
            <button
              onClick={() => setSelectedCat('Todas')}
              className="text-xs font-semibold text-brand-teal hover:underline"
            >
              Mostrar todas
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {CATEGORY_TILES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCat === cat.cat;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setSelectedCat(isSelected ? 'Todas' : cat.cat)}
                className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  isSelected
                    ? 'bg-brand-sky border-brand-teal shadow-xs ring-2 ring-brand-teal/20'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cat.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-800 truncate">{cat.label}</h3>
                    <p className="text-[11px] text-slate-500 truncate">{cat.desc}</p>
                  </div>
                </div>
                <ArrowRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-brand-teal translate-x-0.5' : 'text-slate-300'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* SEARCH RESULTS COUNT */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {filtered.length} {filtered.length === 1 ? 'ferramenta disponível' : 'ferramentas disponíveis'}
          {selectedCat !== 'Todas' && ` em ${selectedCat}`}
        </p>
      </div>

      {/* TOOLS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filtered.map((t) => (
          <article
            key={t.path}
            className="group relative bg-white border border-slate-200/90 rounded-2xl p-4 hover:border-brand-teal hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <Link to={t.path} className="block space-y-2">
              <div className="flex items-center justify-between pr-8">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  {t.cat}
                </span>
                <span className="text-lg">{t.icon || '🛠️'}</span>
              </div>
              <h2 className="text-sm font-bold text-slate-800 group-hover:text-brand-navy transition-colors">
                {t.label}
              </h2>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{t.desc}</p>
              {t.status && (
                <p className="text-[11px] font-medium text-amber-700">
                  {t.status === 'blocked' ? 'Cálculo desativado' : 'Revisão pendente'}
                </p>
              )}
            </Link>

            <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 text-xs">
              <Link
                to={t.path}
                className="text-brand-teal font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
              >
                Acessar <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                className="icon-action"
                aria-label={`Favoritar ${t.label}`}
                aria-pressed={isFavorite(t.path)}
                onClick={() => toggleFavorite(t.path)}
              >
                <Star
                  className={`w-4 h-4 transition-colors ${
                    isFavorite(t.path) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                  }`}
                />
              </button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
          <p className="text-sm font-semibold text-slate-700">Nenhuma ferramenta encontrada.</p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCat('Todas');
            }}
            className="text-xs font-bold text-brand-teal hover:underline"
          >
            Limpar busca e filtros
          </button>
        </div>
      )}
    </div>
  );
}
