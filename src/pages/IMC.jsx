import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Trash2, Star, TrendingUp, RotateCcw } from 'lucide-react';
import { CartesianGrid, Line, ReferenceLine, ResponsiveContainer, Scatter, ComposedChart, Tooltip, XAxis, YAxis } from 'recharts';
import PageHeader from '@/components/PageHeader';
import IMCInfante from './IMCInfante';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { request } from '@/api/services';
import { GROWTH_REFERENCES, GROWTH_FORMATS, BONE_AGE_METHODS, referenceLabel, specialistAllowed } from '@/lib/growthOptions';
import { chartSeries } from '@/lib/rcpchGrowth';
import { localDate } from '@/lib/growthMeasurements';

const TYPES = { height: { label:'Estatura', unit:'cm' }, weight:{label:'Peso',unit:'kg'}, bmi:{label:'IMC',unit:'kg/m²'}, ofc:{label:'Perímetro cefálico',unit:'cm'} };


const format = value => value == null ? '—' : new Intl.NumberFormat('pt-BR',{maximumFractionDigits:2}).format(value);
const initialForm = () => ({birthDate:'',measureDate:localDate(),sex:'M',height:'',weight:'',gestationWeeks:40,gestationDays:0,measurement:'combined',value:'',diagnosis:'none',boneAge:'',boneAgeType:''});
const displayDate = value => value.split('-').reverse().join('/');

function GrowthPlot({ rows, type, sex, reference, diagnosis, formatChoice, custom, isSds, mode, zoom, monochrome }) {
  const [loaded,setLoaded]=useState({key:'',series:[],error:''});
  const key=`${reference}/${sex}/${type}/${diagnosis}/${formatChoice}/${custom}/${isSds}`;
  useEffect(()=>{
    const controller=new AbortController();
    request(`/growth/charts?reference=${reference}&sex=${sex}&type=${type}&diagnosis=${diagnosis}&format=${formatChoice}&custom=${encodeURIComponent(custom)}&isSds=${isSds}`,{signal:controller.signal})
      .then(data=>{if(!controller.signal.aborted)setLoaded({key,series:chartSeries(data,sex,type),error:''});})
      .catch(e=>{if(!controller.signal.aborted)setLoaded({key,series:[],error:e.message});});
    return ()=>controller.abort();
  },[key,reference,sex,type,diagnosis,formatChoice,custom,isSds]);
  const series=loaded.key===key?loaded.series:[];
  const points=rows.filter(r=>r.scores[type].z!==null).map(r=>({age:r.age,value:mode==='z'?r.scores[type].z:r[type]}));
  const allAges=[...series.flatMap(c=>c.data.map(p=>p.age)),...points.map(p=>p.age)];
  const low=allAges.length?Math.min(...allAges):0, high=allAges.length?Math.max(...allAges):(reference==='who'?19:20);
  const domain=zoom&&points.length?[Math.max(low,Math.min(...points.map(p=>p.age))-1),Math.max(...points.map(p=>p.age))+1]:[low,high];
  const vals=mode==='z'?[-3,3,...points.map(p=>p.value)]:[...series.flatMap(c=>c.data.map(p=>p.value)),...points.map(p=>p.value)];
  const min=vals.length?Math.min(...vals):0, max=vals.length?Math.max(...vals):1, pad=Math.max((max-min)*.08,.5);
  if(loaded.key!==key)return <p className="growth-empty" role="status">Carregando curvas de {reference==='who'?'OMS/WHO':'CDC'}…</p>;
  if(loaded.error)return <p className="growth-empty" role="alert">{loaded.error} As curvas não foram substituídas por outra referência.</p>;
  if(!series.length)return <p className="growth-empty">Não há curvas para esta medida na referência selecionada.</p>;
  return <div className="growth-plot" role="img" aria-label={`Gráfico de ${TYPES[type].label}, ${mode==='z'?'escore Z':'percentis'} ${reference.toUpperCase()}. ${rows.length} medições. Valores na tabela abaixo.`}>
    <ResponsiveContainer width="100%" height={410}>
      <ComposedChart margin={{top:20,right:20,bottom:25,left:0}}>
        <CartesianGrid stroke="#e7edf4" strokeDasharray="3 3"/>
        <XAxis type="number" dataKey="age" domain={domain} allowDataOverflow tick={{fontSize:11}} tickFormatter={format} label={{value:'Idade corrigida (anos)',position:'insideBottom',offset:-5,fontSize:11}}/>
        <YAxis type="number" dataKey="value" domain={[Math.floor(min-pad),Math.ceil(max+pad)]} width={48} tick={{fontSize:11}} label={{value:mode==='z'?'Escore Z (SDS)':TYPES[type].unit,angle:-90,position:'insideLeft',fontSize:11}}/>
        <Tooltip formatter={(v,n)=>[format(Number(v)),n]} labelFormatter={v=>`${format(Number(v))} anos`}/>
        {mode==='z'?[-3,-2,-1,0,1,2,3].map(z=><ReferenceLine key={z} y={z} stroke={z===0?'#517594':'#c7d4e2'} strokeDasharray="4 4"/>):series.map(c=><Line key={c.id} data={c.data} dataKey="value" name={isSds?`${c.sds} Z`:`P${c.centile}`} type="linear" dot={false} stroke={monochrome?'#617080':c.centile===50?'#356894':'#91adcb'} strokeWidth={c.centile===50?2:1} strokeDasharray={c.centile===50?'':'5 3'} isAnimationActive={false}/>)}
        <Scatter data={points} name="Medições" fill="#156aaa" isAnimationActive={false}/>
      </ComposedChart>
    </ResponsiveContainer>
    <div className="growth-legend">{mode==='centiles'&&[...new Set(series.map(c=>isSds?`${c.sds} Z`:`P${c.centile}`))].map(label=><span key={label}>{label}</span>)}<strong>● Medições</strong></div>
  </div>;
}

export default function IMC() {
  const [reference,setReference]=useState('cdc');
  const [formatChoice,setFormatChoice]=useState('three-percent-centiles');
  const [customInput,setCustomInput]=useState('3;10;25;50;75;90;97');
  const [custom,setCustom]=useState('3;10;25;50;75;90;97');
  const [isSds,setIsSds]=useState(false);
  const [busy,setBusy]=useState(false);
  const [ageTab,setAgeTab]=useState('child');
  const [form,setForm]=useState(initialForm);
  const [rows,setRows]=useState([]);
  const [type,setType]=useState('bmi');
  const [mode,setMode]=useState('centiles');
  const [zoom,setZoom]=useState(false);
  const [monochrome,setMonochrome]=useState(false);
  const [error,setError]=useState('');
  const [resetPending,setResetPending]=useState(false);
  const {isFavorite,toggleFavorite}=usePageFavorites();
  const sorted = [...rows].sort((a,b)=>a.age-b.age);
  const last = sorted.filter(row=>row.scores[type]?.z!=null).at(-1);
  const set = (key,value)=>{setForm(f=>({...f,[key]:value}));setError('');};
  async function submit(event) {
    event.preventDefault();
    try {
      if(rows.some(r=>r.date===form.measureDate&&(r.measurement||'combined')===form.measurement)) throw new Error('Já existe uma medição nesta data. Remova a anterior para substituí-la.');
      setBusy(true);
      const number = value => /^\d+(?:[.,]\d+)?$/.test(value.trim()) ? Number(value.replace(',','.')) : NaN;
      const height=number(form.height),weight=number(form.weight);
      if(form.measurement==='combined'&&(!Number.isFinite(height)||!Number.isFinite(weight)))throw new Error('Informe peso e altura válidos.');
      const body={reference,sex:form.sex,birthDate:form.birthDate,measureDate:form.measureDate,gestationWeeks:form.gestationWeeks,gestationDays:form.gestationDays,measurement:form.measurement,diagnosis:form.diagnosis,...(form.measurement==='combined'?{height,weight}:{value:number(form.value)}),...(form.boneAge?{boneAge:number(form.boneAge),boneAgeType:form.boneAgeType}:{})};
      const result=await request('/growth/measurements',{method:'POST',body});
      setType(form.measurement==='combined'?'bmi':form.measurement);
      setRows(previous=>[...previous,result]);setError('');setResetPending(false);
    } catch(e) {setError(e.message);} finally {setBusy(false);}
  }
  function reset() {
    if(rows.length&&!resetPending){setResetPending(true);return;}
    setRows([]);setForm(initialForm());setError('');setResetPending(false);
  }
  return <div className="clinical-page growth-workspace">
    <PageHeader kind="calculator" eyebrow="Acompanhamento do crescimento" title="IMC e curvas de crescimento" description="Registre medições e acompanhe a evolução de estatura, peso e IMC no mesmo gráfico.">
      <button className="growth-favorite" aria-label="Favoritar IMC" aria-pressed={isFavorite('/imc')} onClick={()=>toggleFavorite('/imc')}><Star size={16} fill={isFavorite('/imc')?'currentColor':'none'}/>Favoritos</button>
    </PageHeader>
    <div className="growth-age-tabs" aria-label="Faixa etária"><button aria-pressed={ageTab==='child'} disabled={busy} onClick={()=>setAgeTab('child')}>Curvas da API</button><button aria-pressed={ageTab==='infant'} disabled={busy} onClick={()=>setAgeTab('infant')}>Lactentes · CDC local</button></div>
    {ageTab==='infant'?<IMCInfante/>:<>
      <div className="review-note mb-5">Em revisão clínica. Cálculos e curvas via RCPCH na referência selecionada. Datas, sexo, idade gestacional e medidas são enviados ao serviço; não informe nomes. Medições mantidas somente nesta sessão.</div>
      <div className="growth-workbench">
        <aside className="growth-entry clinical-card">
          <div className="growth-panel-title"><h2>Nova medição</h2><TrendingUp size={20}/></div>
          <form onSubmit={submit} noValidate><fieldset disabled={busy} className="space-y-4">
            <label className="field-label">Diagnóstico para curvas específicas<select value={form.diagnosis} disabled={rows.length>0} onChange={e=>{set('diagnosis',e.target.value);if(!specialistAllowed(reference,e.target.value)){setReference('cdc');}}}><option value="none">Sem diagnóstico específico informado</option><option value="turner">Turner — diagnóstico confirmado</option><option value="trisomy-21">Trissomia 21 — diagnóstico confirmado</option></select></label>
            <label className="field-label">Referência<select aria-label="Referência de crescimento" value={reference} disabled={rows.length>0} onChange={e=>{const ref=e.target.value;setReference(ref);setError('');if(ref==='turner'){setForm(f=>({...f,sex:'F',measurement:'height'}));setType('height');}}}>{GROWTH_REFERENCES.map(([value,label])=><option key={value} value={value} disabled={!specialistAllowed(value,form.diagnosis)}>{label}</option>)}</select></label>
            <div className="growth-form-pair"><label className="field-label">Nascimento<input type="date" value={form.birthDate} max={localDate()} disabled={rows.length>0} onChange={e=>set('birthDate',e.target.value)}/></label><label className="field-label">Data da medição<input type="date" value={form.measureDate} max={localDate()} onChange={e=>set('measureDate',e.target.value)}/></label></div>
            <label className="field-label">Sexo da referência<select value={form.sex} disabled={rows.length>0} onChange={e=>set('sex',e.target.value)}><option value="M" disabled={reference==='turner'}>Masculino</option><option value="F">Feminino</option></select></label>
            {rows.length>0&&<p className="text-xs text-muted-foreground">Referência, nascimento e sexo fixados para não misturar curvas. Use “Novo acompanhamento” para trocar.</p>}
            <div className="growth-form-pair"><label className="field-label">Gestação (semanas)<input type="number" min="22" max="44" value={form.gestationWeeks} disabled={rows.length>0} onChange={e=>set('gestationWeeks',Number(e.target.value))}/></label><label className="field-label">Dias adicionais<input type="number" min="0" max="6" value={form.gestationDays} disabled={rows.length>0} onChange={e=>set('gestationDays',Number(e.target.value))}/></label></div>
            <label className="field-label">Tipo de medição<select value={form.measurement} onChange={e=>{set('measurement',e.target.value);setType(e.target.value==='combined'?'bmi':e.target.value);}}><option value="combined" disabled={reference==='turner'}>Peso + altura → IMC calculado</option>{Object.entries(TYPES).map(([key,item])=><option key={key} value={key} disabled={reference==='turner'&&key!=='height'}>{item.label} ({item.unit})</option>)}</select></label>
            {form.measurement==='combined'?<div className="growth-form-pair"><label className="field-label">Altura (cm)<input inputMode="decimal" placeholder="Ex.: 120" value={form.height} onChange={e=>set('height',e.target.value)}/></label><label className="field-label">Peso (kg)<input inputMode="decimal" placeholder="Ex.: 25" value={form.weight} onChange={e=>set('weight',e.target.value)}/></label></div>:<label className="field-label">Valor ({TYPES[form.measurement].unit})<input inputMode="decimal" value={form.value} onChange={e=>set('value',e.target.value)}/></label>}
            <details><summary className="text-sm text-primary">Idade óssea (opcional)</summary><div className="space-y-3 mt-3"><label className="field-label">Idade óssea (anos)<input inputMode="decimal" value={form.boneAge} onChange={e=>set('boneAge',e.target.value)}/></label><label className="field-label">Método da idade óssea<select value={form.boneAgeType} onChange={e=>set('boneAgeType',e.target.value)}><option value="">Selecione</option>{BONE_AGE_METHODS.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label></div></details>
            <p className="text-xs text-muted-foreground">Informe comprimento deitado antes de 2 anos e estatura em pé a partir de 2 anos. A idade do gráfico segue a correção gestacional retornada pelo RCPCH.</p>
            {error&&<p role="alert" className="text-sm text-red-800 bg-red-50 rounded-lg p-3">{error}</p>}
            <button className="growth-primary" type="submit"><Plus size={17}/>{busy?'Calculando…':'Calcular e adicionar ao gráfico'}</button>
            <button className="growth-reset" type="button" onClick={reset}><RotateCcw size={15}/>{resetPending?'Confirmar: apagar medições':'Novo acompanhamento'}</button>
            {resetPending&&<button type="button" className="text-sm text-primary" onClick={()=>setResetPending(false)}>Cancelar</button>}
          </fieldset></form>
          <div className="growth-help"><strong>Outras avaliações</strong><Link to="/alvo-parental">Altura-alvo parental →</Link><Link to="/perimetro-cefalico">Perímetro cefálico →</Link><p>OMS/WHO é diferente de UK-WHO. Peso por idade OMS tem faixa menor que IMC e estatura; resultados não disponíveis aparecem como “—”.</p></div>
        </aside>
        <section className="growth-chart-panel clinical-card">
          <div className="growth-chart-tabs" aria-label="Medida do gráfico">{Object.entries(TYPES).map(([key,item])=><button key={key} disabled={reference==='turner'&&key!=='height'} aria-pressed={type===key} onClick={()=>setType(key)}>{item.label}</button>)}</div>
          <div className="growth-chart-heading"><div><p className="eyebrow">{referenceLabel(reference)} · {form.sex==='M'?'Masculino':'Feminino'}</p><h2>{TYPES[type].label} por idade</h2></div><span className="growth-session-count">{rows.length} medições</span></div>
          <div className="growth-form-pair mb-4"><label className="field-label">Formato das curvas<select value={formatChoice} onChange={e=>{setFormatChoice(e.target.value);setIsSds(false);}}>{GROWTH_FORMATS.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label>{formatChoice==='custom'&&<label className="field-label">Unidade dos valores<select value={isSds?'z':'p'} onChange={e=>{setIsSds(e.target.value==='z');const v=e.target.value==='z'?'-3;-2;-1;0;1;2;3':'3;10;25;50;75;90;97';setCustom(v);setCustomInput(v);}}><option value="p">Percentis</option><option value="z">Escore Z / SDS</option></select></label>}</div>
          {formatChoice==='custom'&&<div className="flex gap-2 mb-4"><label className="field-label flex-1">Valores separados por ;<input value={customInput} onChange={e=>setCustomInput(e.target.value)}/></label><button className="filter-toggle self-end" onClick={()=>setCustom(customInput)}>Aplicar</button></div>}
          <div className="growth-chart-controls"><button aria-pressed={mode==='centiles'} onClick={()=>setMode('centiles')}>Percentis</button><button aria-pressed={mode==='z'} onClick={()=>setMode('z')}>Escore Z / SDS</button><label><input type="checkbox" checked={monochrome} onChange={e=>setMonochrome(e.target.checked)}/>Monocromático</label><label><input type="checkbox" checked={zoom} onChange={e=>setZoom(e.target.checked)}/>Aproximar medições</label></div>
          <GrowthPlot diagnosis={form.diagnosis} formatChoice={formatChoice} custom={custom} isSds={isSds} reference={reference} rows={sorted} type={type} sex={form.sex} mode={mode} zoom={zoom} monochrome={monochrome}/>
          {!last&&<p className="growth-empty">Adicione uma medição para localizar o ponto e ver os resultados.</p>}
          {last&&<div className="growth-summary" role="status"><div><small>Última medição · {displayDate(last.date)}</small><strong>{format(last[type])} {TYPES[type].unit}</strong></div><div><small>Percentil</small><strong>{last.scores[type].percentile==null?'—':`P${format(last.scores[type].percentile)}`}</strong></div><div><small>Escore Z</small><strong>{format(last.scores[type].z)}</strong></div></div>}
          <p className="text-xs text-muted-foreground mt-4">Percentis e escore Z descrevem a posição na referência; não constituem diagnóstico. A referência e a versão do motor de cálculo ficam registradas com cada medição nesta sessão.</p>
        </section>
      </div>
      <section className="clinical-card mt-5"><div className="growth-panel-title"><h2>Medições do acompanhamento</h2><span className="text-xs text-muted-foreground">Somente nesta sessão</span></div>
        {rows.length?<div className="growth-table-scroll"><table className="growth-table"><caption className="sr-only">Valores e percentis de {TYPES[type].label} por data</caption><thead><tr><th>Data</th><th>Idade (anos)</th><th>Altura (cm)</th><th>Peso (kg)</th><th>IMC (kg/m²)</th><th>PC (cm)</th><th>Percentil · {TYPES[type].label}</th><th>Z</th><th>Ações</th></tr></thead><tbody>{sorted.map(row=><tr key={row.date+(row.measurement||'combined')}><td>{displayDate(row.date)}</td><td>{format(row.age)}</td><td>{format(row.height)}</td><td>{format(row.weight)}</td><td>{format(row.bmi)}</td><td>{format(row.ofc)}</td><td>{row.scores[type].percentile==null?'—':`P${format(row.scores[type].percentile)}`}</td><td>{format(row.scores[type].z)}</td><td><button className="icon-action" aria-label={`Remover medição de ${displayDate(row.date)}${row.measurement&&row.measurement!=='combined'?' · '+TYPES[row.measurement].label:''}`} disabled={busy} onClick={()=>{setRows(previous=>previous.filter(r=>r!==row));setResetPending(false);}}><Trash2 size={16}/></button></td></tr>)}</tbody></table></div>:<p className="text-sm text-muted-foreground">Nenhuma medição adicionada.</p>}
      </section>
    </>}
    <footer className="growth-sources"><strong>Referência e método</strong><p>Referências gerais e especializadas via <a href="https://growth.rcpch.ac.uk/integrator/making-api-calls/" target="_blank" rel="noreferrer">RCPCH Digital Growth Charts</a>. A referência OMS utiliza os padrões de 2006 e a referência de 2007 conforme a idade. As curvas são traçadas em segmentos separados, preservando transições de referência.</p><p>As versões e respostas completas são mantidas com a medição durante a sessão. A integração não implica certificação do PedBox pelo RCPCH.</p>{last&&<details><summary>Versões desta avaliação</summary><pre className="text-xs whitespace-pre-wrap break-all">{JSON.stringify(Object.values(last.raw||{})[0]?.provenance,null,2)}</pre></details>}</footer>
  </div>;
}
