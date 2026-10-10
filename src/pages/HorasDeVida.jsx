import React, {useEffect,useState} from 'react';
import PageHeader from '@/components/PageHeader';
import {calculateLifeHours,localDate,localTime} from '@/lib/timeCalculators';

export default function HorasDeVida() {
 const [form,setForm]=useState({birthDate:'',birthTime:'',referenceDate:localDate(),referenceTime:localTime()});
 const [mode,setMode]=useState('now');
 const [clock,setClock]=useState(Date.now());
 const [active,setActive]=useState(false);
 useEffect(()=>{
  const tick=()=>setClock(Date.now());
  const timer=setInterval(tick,1000); window.addEventListener('focus',tick);
  return ()=>{clearInterval(timer);window.removeEventListener('focus',tick);};
 },[]);
 const set=(key,value)=>{setForm(f=>({...f,[key]:value}));setActive(false);};
 const result=active?calculateLifeHours({...form,now:mode==='now'?clock:null}):null;
 const field=(key,label,type)=><label className="field-label">{label}<input required type={type} value={form[key]} onChange={e=>set(key,e.target.value)}/></label>;
 return <main className="clinical-page max-w-3xl">
  <PageHeader kind="calculator" eyebrow="NEONATOLOGIA" title="Horas de vida" description="Tempo desde o nascimento, em horas completas e minutos, até agora ou até um horário escolhido."/>
  <form className="clinical-card p-5 space-y-5" onSubmit={e=>{e.preventDefault();setClock(Date.now());setActive(true);}}>
   <div className="grid sm:grid-cols-2 gap-4">{field('birthDate','Data de nascimento','date')}{field('birthTime','Hora de nascimento','time')}</div>
   <label className="field-label">Calcular até<select value={mode} onChange={e=>{setMode(e.target.value);setClock(Date.now());setActive(false);}}><option value="now">Horário atual</option><option value="selected">Data e horário escolhidos</option></select></label>
   {mode==='selected' && <div className="grid sm:grid-cols-2 gap-4">{field('referenceDate','Data de referência','date')}{field('referenceTime','Hora de referência','time')}</div>}
   <p className="text-sm text-muted-foreground">Fuso do dispositivo: {Intl.DateTimeFormat().resolvedOptions().timeZone}. Informe ambos os horários nesse fuso. Em horário repetido por mudança de horário de verão, o navegador adota a primeira ocorrência.</p>
   <div className="flex gap-3"><button className="rounded-xl bg-primary text-primary-foreground px-5 py-3" type="submit">Calcular horas de vida</button><button className="rounded-xl border px-5 py-3" type="button" onClick={()=>{setForm({birthDate:'',birthTime:'',referenceDate:localDate(),referenceTime:localTime()});setActive(false);setMode('now');}}>Limpar</button></div>
  </form>
  {result?.error && <p role="alert" className="mt-5 text-red-700">{result.error}</p>}
  {result && !result.error && <section aria-label="Resultado das horas de vida" className="clinical-card p-6 mt-5">
   <p className="text-sm text-muted-foreground">Tempo de vida</p><h2 className="text-3xl font-bold text-primary mt-2">{result.hours} horas e {result.minutes} minutos</h2>
   <p className="mt-3">{result.days} dias, {result.remainingHours} horas e {result.minutes} minutos</p>
   <p className="text-sm text-muted-foreground mt-3">Horas decimais: {result.decimalHours.toLocaleString('pt-BR',{maximumFractionDigits:2,minimumFractionDigits:2})} h. A contagem principal não arredonda para cima.</p>
   <p className="text-sm text-muted-foreground mt-2">Referência: {new Date(result.reference).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'})}. {mode==='now'?'Atualização automática enquanto a página está aberta.':''}</p>
  </section>}
 </main>;
}
