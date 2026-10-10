const DAY = 86400000;
export const localDate = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export const localTime = (date = new Date()) => `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
export function calendarDate(value) {
 if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '') || Number(value.slice(0,4)) < 1900) return null;
 const date = new Date(`${value}T00:00:00Z`);
 return Number.isFinite(+date) && date.toISOString().slice(0,10) === value ? +date : null;
}
export function localTimestamp(date, time) {
 if (calendarDate(date) === null || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time || '')) return null;
 const stamp = new Date(`${date}T${time}:00`);
 // Reject nonexistent local times during a daylight-saving transition.
 return localDate(stamp) === date && localTime(stamp) === time ? +stamp : null;
}
export function calculateLifeHours({birthDate,birthTime,referenceDate='',referenceTime='',now=null}) {
 const birth = localTimestamp(birthDate,birthTime);
 const reference = now === null ? localTimestamp(referenceDate,referenceTime) : now;
 if (birth === null || reference === null || !Number.isFinite(reference)) return {error:'Informe datas e horários válidos.'};
 if (reference < birth) return {error:'O horário de referência não pode ser anterior ao nascimento.'};
 const minutes = Math.floor((reference-birth)/60000);
 return {error:null, hours:Math.floor(minutes/60), minutes:minutes%60, days:Math.floor(minutes/1440), remainingHours:Math.floor(minutes/60)%24, decimalHours:minutes/60, reference};
}
export function calculateGestationalAge({method,baseDate,referenceDate,weeks='',days='',embryoDay='5'}) {
 const base=calendarDate(baseDate), reference=calendarDate(referenceDate);
 if(base===null || reference===null) return {error:'Informe datas válidas para a base do cálculo e a referência.'};
 let start=base;
 if(method==='ultrasound') {
  const w=Number(weeks),d=Number(days);
  if(weeks==='' || days==='' || !Number.isInteger(w) || w<0 || w>44 || !Number.isInteger(d) || d<0 || d>6) return {error:'Informe a idade do laudo: semanas inteiras de 0 a 44 e dias de 0 a 6.'};
  start=base-(w*7+d)*DAY;
 } else if(method==='dpp') start=base-280*DAY;
 else if(method==='ivf') {
  const embryo=Number(embryoDay);
  if(!Number.isInteger(embryo) || embryo<1 || embryo>6) return {error:'Selecione a idade do embrião entre D1 e D6.'};
  start=base-(14+embryo)*DAY;
 } else if(method!=='dum') return {error:'Selecione um método válido.'};
 const totalDays=(reference-start)/DAY;
 if(totalDays<0) return {error:'A referência é anterior ao início gestacional calculado. Confira as datas.'};
 if(totalDays>44*7+6) return {error:'Resultado acima de 44 semanas e 6 dias, fora do intervalo desta ferramenta. Confira as datas.'};
 const iso=stamp=>new Date(stamp).toISOString().slice(0,10);
 return {error:null,totalDays,weeks:Math.floor(totalDays/7),days:totalDays%7,dpp:iso(start+280*DAY),start:iso(start),daysToDue:280-totalDays,trimester:totalDays<98?1:totalDays<196?2:3,
  calendar:[12,20,28,37,40,41,42].map(week=>({week,date:iso(start+week*7*DAY)}))};
}
