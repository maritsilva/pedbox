import React, {useState} from 'react';
import {calculateCorrectedAge} from '@/lib/correctedAge';

const empty = {weeks:'', days:'', birthDate:'', assessmentDate:''};
const duration = value => `${value.weeks} semanas e ${value.days} dias`;
export default function IdadeGestacionalCorrigida() {
  const [form,setForm] = useState(empty);
  const [result,setResult] = useState(null);
  const set = (key,value) => {setForm(current=>({...current,[key]:value}));setResult(null);};
  const calculate = event => {event.preventDefault();setResult(calculateCorrectedAge(form));};
  return <main className="clinical-page max-w-2xl">
    <header className="clinical-heading"><h1>Idade corrigida</h1><p>Idade cronológica e correção para prematuridade, em semanas e dias.</p></header>
    <form onSubmit={calculate} className="bg-white border border-border rounded-xl p-5 space-y-5">
      <fieldset><legend className="font-medium mb-3">Idade gestacional ao nascer</legend><div className="grid grid-cols-2 gap-4">
        <label className="text-sm">Semanas<input aria-label="Semanas ao nascer" type="number" min="20" max="44" step="1" required value={form.weeks} onChange={e=>set('weeks',e.target.value)} className="mt-2 w-full rounded-lg border p-3"/></label>
        <label className="text-sm">Dias<input aria-label="Dias adicionais ao nascer" type="number" min="0" max="6" step="1" required value={form.days} onChange={e=>set('days',e.target.value)} className="mt-2 w-full rounded-lg border p-3"/></label>
      </div></fieldset>
      <label className="block text-sm">Data de nascimento<input type="date" required value={form.birthDate} onChange={e=>set('birthDate',e.target.value)} className="mt-2 block w-full rounded-lg border p-3"/></label>
      <label className="block text-sm">Data da avaliação<input type="date" required value={form.assessmentDate} onChange={e=>set('assessmentDate',e.target.value)} className="mt-2 block w-full rounded-lg border p-3"/></label>
      <div className="flex gap-3"><button type="submit" className="bg-primary text-primary-foreground rounded-lg px-5 py-3">Calcular</button><button type="button" className="rounded-lg border px-5 py-3" onClick={()=>{setForm(empty);setResult(null);}}>Limpar</button></div>
    </form>
    {result?.error && <p role="alert" className="mt-4 text-red-700">{result.error}</p>}
    {result && !result.error && <section aria-label="Resultado da idade" className="mt-5 space-y-4">
      <div className="border rounded-xl p-5"><h2 className="text-sm text-muted-foreground">Idade cronológica</h2><p className="text-xl font-semibold mt-1">{duration(result.chronological)}</p><p className="text-sm text-muted-foreground mt-1">{result.chronologicalDays} dias desde o nascimento</p></div>
      {result.beforeTerm ? <div className="border rounded-xl p-5"><h2 className="text-sm text-muted-foreground">Idade pós-menstrual</h2><p className="text-xl font-semibold mt-1">{duration(result.postmenstrual)}</p><p className="text-sm mt-2">Ainda não alcançou 40 semanas. Faltam {-result.correctedDays} dias para essa referência; esse valor não é uma idade corrigida positiva.</p></div>
        : <div className="border rounded-xl p-5"><h2 className="text-sm text-muted-foreground">{result.preterm ? 'Idade corrigida' : 'Sem correção por prematuridade'}</h2><p className="text-xl font-semibold mt-1">{duration(result.corrected)}</p><p className="text-sm mt-2">{result.preterm ? `${result.correctionDays} dias subtraídos da idade cronológica.` : 'Nascimento a partir de 37 semanas: mantida a idade cronológica.'}</p></div>}
      {result.preterm && result.beyondTwoYears && <p className="review-note">Avaliação a partir de 2 anos: o valor acima é a diferença aritmética. A aplicação clínica da correção nesta idade deve ser individualizada.</p>}
    </section>}
    <aside className="mt-6 text-sm text-muted-foreground space-y-2"><p>A correção subtrai da idade cronológica o intervalo entre a idade gestacional ao nascer e 40 semanas, em crianças prematuras. Antes de atingir essa referência, mostramos a idade pós-menstrual.</p><p>Os resultados usam dias exatos; não convertem meses em blocos de 30 dias. Para acompanhamento do desenvolvimento, a AAP orienta considerar a idade corrigida nos primeiros 2 anos.</p><a className="underline" href="https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx" target="_blank" rel="noreferrer">Referência: AAP — Corrected Age for Preemies</a></aside>
  </main>;
}
