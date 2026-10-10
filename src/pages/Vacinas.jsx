import React, { useState } from 'react';
import { Search, Syringe, ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { VACCINE_AGES, VACCINE_REVIEW_DATE, VACCINE_SOURCES, filterVaccineGuide } from '../lib/vaccineGuide';

function SourceLinks({ page }) {
  return <p className="mt-3 text-xs leading-relaxed text-slate-500">Referências: <a className="underline" href={VACCINE_SOURCES.pni.url} target="_blank" rel="noreferrer">PNI 2026</a> · <a className="underline" href={VACCINE_SOURCES.sbim.url} target="_blank" rel="noreferrer">SBIm, PDF pp. 10–11</a> · Leitura expandida, p. {page}.</p>;
}
export default function Vacinas() {
  const [network, setNetwork] = useState('compare');
  const [query, setQuery] = useState('');
  const [age, setAge] = useState('all');
  const vaccines = filterVaccineGuide({ network, query, age });
  return <div className="clinical-page">
    <PageHeader kind="library" eyebrow="PREVENÇÃO · PEDIATRIA" title="Vacinas" description="Calendário pediátrico, diferenças entre PNI e SBIm e cuidados para revisar a caderneta." />
    <div className="clinical-card p-4 sm:p-6 mb-5">
      <p className="text-sm text-slate-600">Fontes conferidas em {VACCINE_REVIEW_DATE} · PNI 2026 e SBIm 2026/2027</p>
      <p className="mt-2 text-sm text-slate-600">Agenda de rotina para consulta. Atrasos, condições especiais e combinações exigem conferir o histórico por antígeno. As duas recomendações são alternativas de planejamento: não some automaticamente as doses.</p>
    </div>
    <section aria-label="Consultar calendário" className="clinical-card p-4 sm:p-6 mb-5">
      <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Recomendação">
        {[['compare','Comparar PNI e SBIm'],['pni','PNI · SUS'],['sbim','SBIm']].map(([value,label]) => <button key={value} onClick={() => setNetwork(value)} aria-pressed={network === value} className={`rounded-xl px-4 py-2 text-sm font-semibold border ${network === value ? 'bg-teal-700 text-white border-teal-700' : 'bg-white text-slate-600 border-slate-200'}`}>{label}</button>)}
      </div>
      <div className="grid gap-4 sm:grid-cols-[1fr_220px]">
        <label className="text-sm font-medium text-slate-700">Buscar vacina ou tema<div className="relative mt-2"><Search className="absolute left-3 top-3 w-4 h-4 text-slate-400"/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Ex.: rotavírus, HPV, reforço" className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3" /></div></label>
        <label className="text-sm font-medium text-slate-700">Marco do calendário<select value={age} onChange={e => setAge(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 p-2.5 bg-white"><option value="all">Todas as idades</option>{VACCINE_AGES.map(([value,label]) => <option key={value} value={value}>{label}</option>)}</select></label>
      </div>
      <p className="text-xs text-slate-500 mt-3">O filtro mostra vacinas com doses previstas nesse marco; não calcula resgate nem substitui a avaliação de elegibilidade. Influenza é anual após o início aos 6 meses.</p>
    </section>
    <p role="status" className="mb-3 text-sm text-slate-500">{vaccines.length} vacinas ou grupos encontrados</p>
    <div className="space-y-4">
      {vaccines.map(v => <article key={v.id} className="clinical-card p-4 sm:p-6" data-testid={`vaccine-${v.id}`}>
        <h2 className="flex items-center gap-3 text-lg font-semibold text-slate-800"><Syringe className="h-5 w-5 text-teal-700 shrink-0"/>{v.name}</h2>
        <div className={`grid gap-3 mt-4 ${network === 'compare' ? 'md:grid-cols-2' : ''}`}>
          {network !== 'sbim' && <div className="rounded-xl bg-slate-50 p-4"><h3 className="text-xs font-bold tracking-wide text-slate-600 mb-2">PNI · SUS</h3><p className="text-sm leading-relaxed text-slate-700">{v.pni}</p></div>}
          {network !== 'pni' && <div className="rounded-xl bg-teal-50/60 p-4"><h3 className="text-xs font-bold tracking-wide text-teal-800 mb-2">SBIm</h3><p className="text-sm leading-relaxed text-slate-700">{v.sbim}</p></div>}
        </div>
        <details className="mt-4"><summary className="cursor-pointer text-sm font-semibold text-teal-800 py-2">Cuidados e diferenças do esquema</summary><p className="mt-2 text-sm leading-relaxed text-slate-600">{v.note}</p></details>
        <SourceLinks page={v.readingPage}/>
      </article>)}
      {!vaccines.length && <div className="clinical-card p-8 text-center"><p>Nenhuma vacina corresponde aos filtros.</p><button className="mt-3 text-teal-700 underline" onClick={() => { setAge('all'); setQuery(''); setNetwork('compare'); }}>Limpar filtros</button></div>}
    </div>
    <section className="clinical-card p-4 sm:p-6 mt-6" aria-labelledby="special-vaccines"><h2 id="special-vaccines" className="text-lg font-semibold text-slate-800">Na revisão da caderneta</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4 text-sm leading-relaxed text-slate-600">
        <div><h3 className="font-semibold text-slate-800 mb-2">Atrasos e prematuridade</h3><p>Atraso isolado geralmente não exige reiniciar séries. Conferir produto, idade na aplicação, doses válidas e intervalos. Prematuros usam idade cronológica quando estáveis; BCG aguarda peso de pelo menos 2.000 g.</p><p className="text-xs mt-2">Leitura expandida, pp. 13, 15–16.</p></div>
        <div><h3 className="font-semibold text-slate-800 mb-2">Proteção contra VSR</h3><p>Nirsevimabe é anticorpo monoclonal, não vacina. O material descreve no PNI prematuros com menos de 37 semanas e idade inferior a 6 meses, e comorbidades elegíveis até menos de 24 meses conforme sazonalidade. A SBIm amplia situações conforme vacinação materna, risco e idade. Confirmar elegibilidade no protocolo específico.</p><p className="text-xs mt-2">Leitura expandida, pp. 13–14; SBIm, comentário 19, PDF p. 11.</p></div>
        <div><h3 className="font-semibold text-slate-800 mb-2">Vacinas combinadas</h3><p>Penta PNI: DTPw + hepatite B + Hib. Penta acelular: DTPa + VIP + Hib. Hexa acelular: DTPa + VIP + Hib + hepatite B. Nomes semelhantes não garantem a mesma composição.</p><p className="text-xs mt-2">Leitura expandida, p. 9; SBIm, PDF p. 11.</p></div>
        <div><h3 className="font-semibold text-slate-800 mb-2">Situações especiais</h3><p>Imunossupressão, hemoderivados, anafilaxia e eventos graves após doses anteriores exigem avaliação específica. Registrar produto, lote e cronologia do evento e acionar a RIE/CRIE quando indicado.</p><p className="text-xs mt-2">Leitura expandida, pp. 14–15.</p></div>
      </div>
    </section>
    <details className="clinical-card p-4 sm:p-6 mt-5"><summary className="cursor-pointer font-semibold text-slate-800">Fontes, versões e limites da atualização</summary><div className="mt-4 space-y-3 text-sm text-slate-600">
      {Object.entries(VACCINE_SOURCES).map(([key,source]) => <p key={key}>{'url' in source ? <a className="underline inline-flex items-center gap-1" href={source.url} target="_blank" rel="noreferrer">{source.title}<ArrowUpRight className="w-4 h-4 shrink-0"/></a> : source.title}</p>)}
      <p>O livreto anexado confirma a atualização de 17/06/2026 nas páginas da criança. A aula de outubro cita edições de setembro que não estão entre estes dois arquivos. Essas edições não foram atribuídas como consultadas. A mudança do reforço de VIP no SUS foi confrontada com a norma pública atual.</p>
      <p>Síntese documental para apoio à consulta, sem validação clínica independente concluída. Oferta local, campanhas, resgates e produtos devem ser confirmados no serviço. Os PDFs fornecidos não foram incorporados ao site.</p>
    </div></details>
  </div>;
}
