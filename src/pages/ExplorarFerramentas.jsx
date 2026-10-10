import PageHeader from '@/components/PageHeader';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { CALCULATORS, normalizeSearch } from '@/lib/calculatorRegistry';

const TOOLS = [
// Puericultura
{ path: '/vacinas', label: 'Vacinas', icon: '💉', desc: 'Calendário vacinal e informações detalhadas por imunobiológico.', cat: 'Puericultura', color: 'bg-green-50 border-green-200', iconBg: 'bg-green-100' },
{ path: '/desenvolvimento', label: 'Desenvolvimento Infantil', icon: '🌱', desc: 'Marcos dos 2 meses aos 5 anos com sinais de alerta.', cat: 'Puericultura', color: 'bg-lime-50 border-lime-200', iconBg: 'bg-lime-100' },
{ path: '/curvas-crescimento', label: 'Curvas de Crescimento', icon: '📈', desc: 'Curvas de crescimento OMS, CDC e SBP para download.', cat: 'Puericultura', color: 'bg-teal-50 border-teal-200', iconBg: 'bg-teal-100' },
{ path: '/imc', label: 'IMC Pediátrico', icon: '📊', desc: 'Cálculo do índice de massa corporal para crianças e adolescentes.', cat: 'Puericultura', color: 'bg-green-50 border-green-200', iconBg: 'bg-green-100' },
{ path: '/perimetro-cefalico', label: 'Perímetro Cefálico', icon: '🔵', desc: 'Avaliação e percentis do perímetro cefálico por idade e sexo.', cat: 'Puericultura', color: 'bg-blue-50 border-blue-200', iconBg: 'bg-blue-100' },
{ path: '/alvo-parental', label: 'Alvo Parental', icon: '📐', desc: 'Estimativa da altura alvo adulta baseada na estatura parental.', cat: 'Puericultura', color: 'bg-lime-50 border-lime-200', iconBg: 'bg-lime-100' },
{ path: '/sinais-vitais', label: 'Sinais Vitais Pediátricos', icon: '📋', desc: 'Valores de referência de FC, FR e PA por faixa etária.', cat: 'Puericultura', color: 'bg-sky-50 border-sky-200', iconBg: 'bg-sky-100' },
// Doses
{ path: '/dosagens', label: 'Dosagens — Cálculo Rápido', icon: '⚡', desc: 'Calcule doses por peso instantaneamente · 30+ medicamentos.', cat: 'Doses', color: 'bg-yellow-50 border-yellow-200', iconBg: 'bg-yellow-100' },
{ path: '/guia', label: 'Guia de Medicamentos', icon: '📖', desc: 'Doses, preparo e apresentações completas por princípio ativo.', cat: 'Doses', color: 'bg-blue-50 border-blue-200', iconBg: 'bg-blue-100' },
{ path: '/hidratacao', label: 'Hidratação Venosa', icon: '💧', desc: 'Cálculo de fluidos e manutenção para hidratação venosa.', cat: 'Doses', color: 'bg-cyan-50 border-cyan-200', iconBg: 'bg-cyan-100' },
// Emergência
{ path: '/pressao-arterial', label: 'PA Pediátrica', icon: '❤️', desc: 'Estimativa de pressão arterial por faixa etária e percentil.', cat: 'Emergência', color: 'bg-red-50 border-red-200', iconBg: 'bg-red-100' },
{ path: '/glasgow-pediatrico', label: 'Glasgow Pediátrico', icon: '🧠', desc: 'Avaliação do nível de consciência em pacientes pediátricos.', cat: 'Emergência', color: 'bg-purple-50 border-purple-200', iconBg: 'bg-purple-100' },
{ path: '/pews', label: 'PEWS', icon: '⚠️', desc: 'Pontuação de alerta precoce em pediatria.', cat: 'Emergência', color: 'bg-red-50 border-red-200', iconBg: 'bg-red-100' },
{ path: '/sipa', label: 'SIPA', icon: '💓', desc: 'Shock Index pediátrico ajustado por faixa etária.', cat: 'Emergência', color: 'bg-rose-50 border-rose-200', iconBg: 'bg-rose-100' },
{ path: '/drogas-emergencia', label: 'Drogas na Emergência', icon: '🚨', desc: 'Guias rápidos de drogas para situações de emergência.', cat: 'Emergência', color: 'bg-red-50 border-red-200', iconBg: 'bg-red-100' },
// Escores
{ path: '/centor-mcisaac', label: 'Centor / McIsaac', icon: '🦠', desc: 'Probabilidade de faringoamigdalite estreptocócica.', cat: 'Escores', color: 'bg-teal-50 border-teal-200', iconBg: 'bg-teal-100' },
{ path: '/pas-asma', label: 'PAS — Asma', icon: '🌬️', desc: 'Pediatric Asthma Score para triagem na emergência.', cat: 'Escores', color: 'bg-sky-50 border-sky-200', iconBg: 'bg-sky-100' },
{ path: '/pram', label: 'PRAM', icon: '💨', desc: 'Pontuação de risco em asma pediátrica (2–17 anos).', cat: 'Escores', color: 'bg-orange-50 border-orange-200', iconBg: 'bg-orange-100' },
{ path: '/wood-downes', label: 'Wood-Downes', icon: '🫁', desc: 'Classificação de gravidade da bronquiolite.', cat: 'Escores', color: 'bg-sky-50 border-sky-200', iconBg: 'bg-sky-100' },
// Neonatal
{ path: '/apgar', label: 'APGAR', icon: '👶', desc: 'Avaliação rápida da vitalidade do recém-nascido.', cat: 'Neonatal', color: 'bg-pink-50 border-pink-200', iconBg: 'bg-pink-100' },
{ path: '/silverman-anderson', label: 'Silverman-Anderson', icon: '🫂', desc: 'Avaliação da gravidade da síndrome do desconforto respiratório.', cat: 'Neonatal', color: 'bg-indigo-50 border-indigo-200', iconBg: 'bg-indigo-100' },
{ path: '/rodwell', label: 'Escore de Rodwell', icon: '🧬', desc: 'Probabilidade de sepse neonatal.', cat: 'Neonatal', color: 'bg-emerald-50 border-emerald-200', iconBg: 'bg-emerald-100' },
{ path: '/idade-gestacional-corrigida', label: 'IG Corrigida', icon: '🍼', desc: 'Cálculo da idade gestacional corrigida para prematuros.', cat: 'Neonatal', color: 'bg-amber-50 border-amber-200', iconBg: 'bg-amber-100' },
// Calculadoras
{ path: '/calculadoras-hub', label: 'Calculadoras Clínicas', icon: '🧮', desc: 'Conjunto de calculadoras clínicas para o dia a dia do plantão.', cat: 'Calculadoras', color: 'bg-blue-50 border-blue-200', iconBg: 'bg-blue-100' },
// Biblioteca
{ path: '/biblioteca', label: 'Protocolos Clínicos', icon: '🧪', desc: 'Fluxogramas passo a passo por condição clínica.', cat: 'Biblioteca', color: 'bg-violet-50 border-violet-200', iconBg: 'bg-violet-100' },
{ path: '/biblioteca?tab=condutas', label: 'Condutas Clínicas', icon: '🩺', desc: 'Manejos e condutas estruturadas por categoria.', cat: 'Biblioteca', color: 'bg-violet-50 border-violet-200', iconBg: 'bg-violet-100' },
{ path: '/biblioteca', label: 'Biblioteca', icon: '📚', desc: 'Protocolos, condutas, links e anotações pediátricas.', cat: 'Biblioteca', color: 'bg-indigo-50 border-indigo-200', iconBg: 'bg-indigo-100' },
// Pesquisa
{ path: '/pesquisa', label: 'SophIA', icon: '🔬', desc: 'Pesquisa inteligente de evidências e diretrizes clínicas com IA.', cat: 'Pesquisa', color: 'bg-emerald-50 border-emerald-200', iconBg: 'bg-emerald-100' },
// Preventivo
{ path: '/rastreio-preventivo', label: 'Rastreio / Medicina Preventiva', icon: '🛡️', desc: 'Calendário de triagens e rastreios pediátricos — Bright Futures / AAP.', cat: 'Preventivo', color: 'bg-blue-50 border-blue-200', iconBg: 'bg-blue-100' }];
const catalog = [...TOOLS.filter(t => !CALCULATORS.some(c => c.path === t.path)).map(t => ({...t, status: ''})), ...CALCULATORS.map(c => ({...c, cat: c.category}))];
export default function ExplorarFerramentas() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const categories = ['Todas', ...new Set(catalog.map(t => t.cat))];
  const filtered = catalog.filter(t => (category === 'Todas' || t.cat === category) && normalizeSearch(`${t.label} ${t.desc} ${t.cat}`).includes(normalizeSearch(search)));
  return <div className="clinical-page">
    <PageHeader title="Ferramentas" eyebrow="Seu apoio no dia a dia" description="Encontre calculadoras, escalas e guias para cada momento do atendimento." kind="tools"/>
    <div className="filter-toolbar"><label className="field-label flex-1">Buscar ferramenta<input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Nome, sigla ou tema" /></label><label className="field-label">Categoria<select value={category} onChange={e => setCategory(e.target.value)}>{categories.map(c => <option key={c}>{c}</option>)}</select></label></div>
    <p className="text-sm text-muted-foreground my-5" role="status">{filtered.length} ferramentas</p>
    <div className="tool-grid">{filtered.map(t => <article key={t.path} className="tool-card"><Link to={t.path} className="tool-card-link"><div className="min-w-0"><span className="tool-category">{t.cat}</span><h2 className="font-semibold">{t.label}</h2><p className="text-sm text-muted-foreground mt-1">{t.desc}</p>{t.status && <p className="tool-review">{t.status === 'blocked' ? 'Cálculo desativado' : 'Revisão clínica pendente'}</p>}</div><ArrowRight size={18} className="shrink-0 text-muted-foreground"/></Link><button className="icon-action mr-2" aria-label={`Favoritar ${t.label}`} aria-pressed={isFavorite(t.path)} onClick={() => toggleFavorite(t.path)}><Star size={18} fill={isFavorite(t.path) ? 'currentColor' : 'none'}/></button></article>)}</div>
    {!filtered.length && <div className="clinical-card"><p>Nenhuma ferramenta encontrada.</p><button className="text-primary mt-3 min-h-11" onClick={() => {setSearch('');setCategory('Todas');}}>Limpar filtros</button></div>}
  </div>;
}
