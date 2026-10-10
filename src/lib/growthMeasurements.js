import { calcPercentile } from './cdcGrowthData.js';

export function localDate() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function dateValue(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
  const ms = Date.parse(`${value}T00:00:00Z`);
  return Number.isFinite(ms) && new Date(ms).toISOString().slice(0,10) === value ? ms : NaN;
}
export function evaluateGrowth(form, today = localDate()) {
  const birth = dateValue(form.birthDate), measurement = dateValue(form.measureDate);
  if (!Number.isFinite(birth) || !Number.isFinite(measurement)) throw new Error('Informe datas válidas de nascimento e medição.');
  if (measurement < birth || measurement > dateValue(today)) throw new Error('A medição deve ocorrer entre o nascimento e hoje.');
  // Calendar anniversaries preserve the exact supported endpoints, including leap days.
  const b = new Date(birth), m = new Date(measurement);
  let months = (m.getUTCFullYear()-b.getUTCFullYear())*12 + m.getUTCMonth()-b.getUTCMonth();
  const anniversary = offset => {
    const first = new Date(Date.UTC(b.getUTCFullYear(), b.getUTCMonth()+offset, 1));
    const lastDay = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth()+1, 0)).getUTCDate();
    return Date.UTC(first.getUTCFullYear(), first.getUTCMonth(), Math.min(b.getUTCDate(),lastDay));
  };
  if (measurement < anniversary(months)) months--;
  const ageMonths = months+(measurement-anniversary(months))/(anniversary(months+1)-anniversary(months));
  if (ageMonths < 24 || ageMonths > 240) throw new Error('Esta referência aceita de 2 a 20 anos completos. Para lactentes, abra 0–36 meses.');
  if (!['M','F'].includes(form.sex)) throw new Error('Selecione o sexo da referência.');
  const numeric = value => typeof value === 'string' && /^\d+(?:[.,]\d+)?$/.test(value.trim()) ? Number(value.trim().replace(',','.')) : NaN;
  const height = numeric(form.height), weight = numeric(form.weight);
  if (!Number.isFinite(height) || !Number.isFinite(weight) || height < 50 || height > 230 || weight < 3 || weight > 200) throw new Error('Informe altura entre 50 e 230 cm e peso entre 3 e 200 kg.');
  const bmi = weight / (height/100)**2;
  return { birthDate:form.birthDate, date:form.measureDate, sex:form.sex, ageMonths, age:ageMonths/12, height, weight, bmi,
    scores: Object.fromEntries(Object.entries({height,weight,bmi}).map(([type,value])=>[type,calcPercentile(type,form.sex,ageMonths,value)])) };
}
