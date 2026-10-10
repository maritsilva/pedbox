import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Pill, Calculator, BookOpen, Star, X } from 'lucide-react';
import { universalSearch } from '@/lib/universalSearch';
/** @type {Array<[string, string, string, typeof Pill]>} */
const modules = [
  ['Dosagens', 'Calcule por peso e apresentação.', '/dosagens', Pill],
  ['Calculadoras', 'Encontre cálculos e escalas clínicas.', '/calculadoras', Calculator],
  ['Biblioteca', 'Consulte protocolos e condutas.', '/biblioteca', BookOpen],
  ['Favoritos', 'Acesse seus itens salvos.', '/favoritos', Star],
];
export default function Home() {
  const [query, setQuery] = useState('');
  const results = universalSearch(query, 12);
  return <div className="clinical-page home-page">
    <header className="clinical-heading home-hero"><div className="home-hero-copy"><p className="eyebrow">PEDBOX · PEDIATRIA NO DIA A DIA</p><h1>Consulta pediátrica, simplificada.</h1><p>Encontre medicamentos, ferramentas e referências em um só lugar.</p></div><div className="home-hero-art" aria-hidden="true"><BookOpen/><span className="hero-orbit"><Pill/></span><span className="hero-orbit second"><Calculator/></span></div></header>
    <section className="home-search mb-8" aria-label="Busca geral">
      <label htmlFor="home-search" className="sr-only">Buscar no PedBox</label>
      <div className="relative"><Search size={20} className="absolute left-4 top-4 text-muted-foreground"/><input id="home-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar medicamento, calculadora ou conduta" className="w-full border bg-white rounded-lg pl-12 pr-12 py-4"/>{query && <button className="icon-action absolute right-1 top-1" aria-label="Limpar busca" onClick={() => setQuery('')}><X size={18}/></button>}</div>
      {query.trim().length > 1 && <div className="search-results" aria-live="polite">{results.length ? results.map((r, i) => <Link key={i} to={r.path} className="resource-row"><div><span className="font-semibold">{r.label}</span><span className="block text-sm text-muted-foreground mt-1">{r.desc}</span></div><ArrowRight size={18} className="shrink-0"/></Link>) : <p className="p-5">Nenhum resultado encontrado. Tente outro termo.</p>}</div>}
    </section>
    <div className="grid sm:grid-cols-2 gap-4">{modules.map(([name, desc, path, Icon]) => <Link key={path} to={path} className="home-module"><span className="module-icon"><Icon size={24}/></span><div className="flex-1"><h2 className="font-semibold">{name}</h2><p className="text-sm text-muted-foreground mt-1">{desc}</p></div><ArrowRight size={18} className="text-muted-foreground shrink-0"/></Link>)}</div>
    <section className="mt-8"><h2 className="text-sm font-semibold mb-3">Outras ferramentas</h2><div className="quick-links">{[['Guia de medicamentos','/guia'],['Hidratação','/hidratacao'],['Sinais vitais','/sinais-vitais'],['Vacinas','/vacinas'],['Desenvolvimento','/desenvolvimento'],['Ver todas','/ferramentas']].map(([label,path]) => <Link key={path} to={path}>{label}<ArrowRight size={14}/></Link>)}</div></section>
    <p className="text-xs text-muted-foreground mt-8 leading-relaxed">Consulte o estado de revisão e as referências de cada ferramenta.</p>
  </div>;
}
