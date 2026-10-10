import PageHeader from '@/components/PageHeader';
import React, {useMemo,useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Search,ChevronRight,Star,X} from 'lucide-react';
import {DOSAGENS_CATEGORIAS,getAllDosagens} from '@/lib/dosagensData';
import {normalizeSearch} from '@/lib/calculatorRegistry';
import {useDosagemFavorites} from '@/hooks/useDosagemFavorites.jsx';
import DosagemDetalhe from '@/components/dosagens/DosagemDetalhe';

export default function Dosagens(){
 const drugs=useMemo(()=>getAllDosagens(),[]);
 const [params,setParams]=useSearchParams();
 const [search,setSearch]=useState('');
 const [category,setCategory]=useState('');
 const [onlyFavorites,setOnlyFavorites]=useState(false);
 const {isFavorite,toggleFavorite}=useDosagemFavorites();
 const selected=drugs.find(d=>d.id===params.get('drug'));
 const select=drug=>{const next=new URLSearchParams(params);if(drug)next.set('drug',drug.id);else next.delete('drug');setParams(next);};
 const q=normalizeSearch(search);
 const filtered=drugs.filter(d=>(!category||d.catId===category)&&(!onlyFavorites||isFavorite(d.id))&&(!q||[d.name,d.sinonimo,d.marcas,d.catLabel,...(d.indicacoes?.map(i=>i.label)||[])].filter(Boolean).some(s=>normalizeSearch(s).includes(q))));
 if(selected)return <DosagemDetalhe key={selected.id} drug={selected} onBack={()=>select(null)}/>;
 return <div className="page-surface catalogue-page mx-auto px-4">
  <PageHeader kind="doses" eyebrow="Consulta por medicamento" title="Dosagens" description="Encontre o medicamento e abra o cálculo por indicação e apresentação."/>
  <div className="catalogue-toolbar">
   <div className="catalogue-search"><Search size={18}/><input aria-label="Buscar medicamento" placeholder="Nome, marca ou indicação" value={search} onChange={e=>setSearch(e.target.value)}/>{search&&<button aria-label="Limpar busca de medicamento" onClick={()=>setSearch('')}><X size={18}/></button>}</div>
   <select aria-label="Categoria de medicamentos" value={category} onChange={e=>setCategory(e.target.value)}><option value="">Todas as categorias</option>{DOSAGENS_CATEGORIAS.map(c=><option key={c.id} value={c.id}>{c.label}</option>)}</select>
   <button className="filter-toggle" aria-pressed={onlyFavorites} onClick={()=>setOnlyFavorites(!onlyFavorites)}><Star size={16}/>Favoritos</button>
  </div>
  <p className="catalogue-count" role="status">{filtered.length} medicamentos{onlyFavorites?' favoritos':''}</p>
  <div className="catalogue-columns">{DOSAGENS_CATEGORIAS.map(cat=>{const items=filtered.filter(d=>d.catId===cat.id);if(!items.length)return null;return <section key={cat.id} className="catalogue-group"><header><h2>{cat.label}</h2><span>{items.length}</span></header>{items.map(drug=><article key={drug.id} className="catalogue-item"><button className="catalogue-open" onClick={()=>select(drug)}><span><strong>{drug.name}</strong>{drug.sinonimo&&<small>{drug.sinonimo}</small>}</span><ChevronRight size={17}/></button><button className="icon-action" aria-label={`Favoritar ${drug.name}`} aria-pressed={isFavorite(drug.id)} onClick={()=>toggleFavorite(drug.id)}><Star size={17} fill={isFavorite(drug.id)?'currentColor':'none'}/></button></article>)}</section>;})}</div>
  {!filtered.length&&<div className="catalogue-empty"><h2>Nenhum medicamento encontrado</h2><p>Altere a busca ou os filtros.</p><button onClick={()=>{setSearch('');setCategory('');setOnlyFavorites(false);}}>Limpar filtros</button></div>}
 </div>;
}
