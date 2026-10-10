import PageHeader from '@/components/PageHeader';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, ArrowUpRight } from 'lucide-react';
import { CALCULATORS, normalizeSearch } from '@/lib/calculatorRegistry';
import { usePageFavorites } from '@/hooks/usePageFavorites';
export default function CalculadorasHub() {
 const [query,setQuery]=useState(''), [category,setCategory]=useState('Todas');
 const {isFavorite,toggleFavorite}=usePageFavorites();
 const categories=['Todas',...new Set(CALCULATORS.map(c=>c.category))];
 const filtered=CALCULATORS.filter(c=>(category==='Todas'||c.category===category)&&normalizeSearch(`${c.label} ${c.desc}`).includes(normalizeSearch(query)));
 return <div className="clinical-page"><PageHeader kind="calculator" eyebrow="Ferramentas clínicas" title="Calculadoras e escalas" description="Encontre pelo nome, sigla ou área. Consulte a população aplicável e as referências em cada ferramenta."/>
 <div className="filter-toolbar mb-6"><label className="field-label flex-1"><span className="flex gap-2"><Search size={16}/> Buscar calculadora</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Nome, sigla ou situação clínica"/></label><label className="field-label">Categoria<select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select></label></div>
 <p className="text-sm text-muted-foreground mb-4">{filtered.length} ferramentas · Novas ferramentas em revisão antes da liberação clínica.</p>
 <div className="calculator-grid">{filtered.map(c=><article className="clinical-card calculator-card flex flex-col" key={c.id}><div className="flex justify-between items-start gap-2"><p className="eyebrow">{c.category}</p><button className="icon-action" aria-label={`Favoritar ${c.label}`} aria-pressed={isFavorite(c.path)} onClick={()=>toggleFavorite(c.path)}><Star size={18} fill={isFavorite(c.path)?'currentColor':'none'}/></button></div><h2 className="mt-3">{c.label}</h2><p className="text-sm text-muted-foreground my-2 flex-1">{c.desc}</p><p className="text-xs text-amber-800 my-2">{c.status==='blocked'?'Em revisão · cálculo desativado':c.status==='draft'?'Rascunho · revisão clínica pendente':'Revisão clínica pendente'}</p><Link className="flex items-center justify-between text-primary font-semibold mt-3" to={c.path}>{c.status==='draft'?'Ver ferramenta em revisão':'Abrir calculadora'}<ArrowUpRight size={18}/></Link></article>)}</div>
 {!filtered.length&&<p role="status" className="clinical-card">Nenhuma ferramenta encontrada. Tente outro termo.</p>}</div>;
}
