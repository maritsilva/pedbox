/** Arithmetic only: clinical source review is tracked separately from calculation tests. */
export const numberInput = value => typeof value === 'number' ? value : typeof value === 'string' && value.trim() ? Number(value.replace(',', '.')) : NaN;
const positive = n => Number.isFinite(n) && n > 0;

export function intervalOptions(freq = '') {
  // Reject an interval range, but not a range in the course duration (e.g. 5–10 days).
  if (/\d+\s*(?:[–-]|a)\s*\d+\s*h\b/i.test(freq) || /\d+\s*\/\s*\d+\s*[–-]\s*\d+\s*\/\s*\d+\s*h\b/i.test(freq)) return [];
  const matches = [...freq.matchAll(/(?:\b(\d+)\s*\/\s*)?(\d+)\s*h\b/gi)];
  if (matches.some(m => m[1] && Number(m[1]) !== Number(m[2]))) return [];
  const intervals = matches.map(m => Number(m[2]));
  for (const once of freq.matchAll(/\b([1-4])\s*(?:x|vez(?:es)?)\s*(?:ao|por)\s*dia\b/gi)) intervals.push(24 / Number(once[1]));
  return [...new Set(intervals)].filter(n => n > 0 && n <= 24);
}

export function calculateDose(indication, weight, interval) {
  const unit = indication?.unidade || '';
  const fail = reason => ({ error: reason });
  if (!indication) return fail('Indicação não encontrada.');
  if (indication.blockedReason) return fail(indication.blockedReason);
  if (!positive(weight) || weight > 200) return fail('Informe peso maior que zero e até 200 kg.');
  // Infusions, surface-area doses, percentages and staged regimens cannot be calculated as boluses.
  if (/\/h\b|\/min\b|m²|%|g\/local|protocolo|bolsas/i.test(unit)) return fail('Este esquema não é compatível com cálculo por tomada. Consulte o protocolo específico.');
  const match = unit.match(/^(mg|mcg|UI)(?:\/kg)?(?:\/dose|\/dia|\s|$)/);
  if (!match) return fail('Unidade sem conversão segura cadastrada.');
  if (indication.maxScope != null && !['day', 'dose'].includes(indication.maxScope)) return fail('Escopo do limite inválido no cadastro.');
  for (const key of ['dose_max_abs', 'maxDailyPerKg', 'maxDaily', 'maxAdministrations']) {
    if (indication[key] != null && !positive(indication[key])) return fail('Limite inválido no cadastro.');
  }
  const doseUnit = match[1];
  const daily = /\/dia\b/.test(unit);
  const perKg = /\/kg\b/.test(unit);
  const low = indication.dose_min, high = indication.dose_max;
  if (![low, high].every(positive) || high < low) return fail('Faixa de dose inconsistente no cadastro.');
  if ((indication.maxAdministrations || indication.maxDaily || indication.maxDailyPerKg || (indication.dose_max_abs && indication.maxScope === 'day')) && !positive(interval)) return fail('Selecione o intervalo para verificar o limite em 24 horas.');
  if (daily && !positive(interval)) return fail('Selecione um intervalo de administração para dividir a dose diária.');
  if (positive(interval) && (interval > 24 || !intervalOptions(indication.freq).includes(interval))) return fail('Intervalo não definido para esta indicação.');
  if (daily && indication.dose_max_abs && !indication.maxScope) return fail('Em revisão: o cadastro não distingue se o teto é diário ou por tomada.');
  let min = low * (perKg ? weight : 1), max = high * (perKg ? weight : 1);
  const doses = positive(interval) ? 24 / interval : null;
  if (daily) { min /= doses; max /= doses; }
  const ceilings = [];
  if (indication.dose_max_abs) ceilings.push(indication.maxScope === 'day' ? indication.dose_max_abs / doses : indication.dose_max_abs);
  if (indication.maxDailyPerKg && doses) ceilings.push(indication.maxDailyPerKg * weight / doses);
  if (indication.maxDaily && doses) ceilings.push(indication.maxDaily / doses);
  if (indication.maxAdministrations && doses > indication.maxAdministrations) return fail(`Não ultrapassar ${indication.maxAdministrations} tomadas em 24 horas. Escolha outro intervalo.`);
  const ceiling = Math.min(...ceilings);
  // Apply the recorded ceiling consistently to both endpoints.
  const capped = max > ceiling;
  min = Math.min(min, ceiling); max = Math.min(max, ceiling);
  return { min, max, unit: doseUnit, daily, perKg, doses, capped, dailyMin: doses ? min * doses : null, dailyMax: doses ? max * doses : null };
}

export function presentationAmount(presentation, dose, unit, { ageMonths = NaN, weight = NaN } = {}) {
  const fail = error => ({ error });
  if (!presentation || !positive(dose)) return fail('Apresentação indisponível.');
  if (presentation.idade_min != null && (!Number.isFinite(ageMonths) || ageMonths < presentation.idade_min * 12)) return fail(`Apresentação indicada a partir de ${presentation.idade_min} anos. Informe e confira a idade.`);
  if (presentation.peso_min != null && (!positive(weight) || weight < presentation.peso_min)) return fail(`Apresentação indicada a partir de ${presentation.peso_min} kg.`);
  if (!positive(presentation.conc)) return fail('Concentração inválida.');
  const concentrationUnit = presentation.concUnit || (/mcg|µg/.test(presentation.label) ? 'mcg' : /\bUI\b/i.test(presentation.label) ? 'UI' : /\bmg\b/i.test(presentation.label) ? 'mg' : null);
  if (!['mg', 'mcg', 'UI'].includes(concentrationUnit)) return fail('Unidade da concentração não identificada ou não suportada.');
  if ((unit === 'UI') !== (concentrationUnit === 'UI')) return fail('Dose e concentração têm unidades incompatíveis.');
  let amount = dose * (unit === 'mcg' && concentrationUnit === 'mg' ? 0.001 : unit === 'mg' && concentrationUnit === 'mcg' ? 1000 : 1) / presentation.conc;
  if (presentation.tipo === 'mL') return { value: amount, unit: 'mL' };
  if (presentation.tipo === 'gotas') {
    if (!positive(presentation.mL_por_gota)) return fail('Fator de gotas não cadastrado para esta apresentação.');
    amount /= presentation.mL_por_gota;
    return { value: amount, unit: 'gotas', theoretical: !Number.isInteger(amount) };
  }
  if (presentation.tipo === 'comprimido' || presentation.tipo === 'jatos') {
    const step = presentation.tipo === 'jatos' ? 1 : presentation.fractionStep ?? 1;
    if (!positive(step) || step > 1) return fail('Fração autorizada inválida no cadastro.');
    if (Math.abs(amount / step - Math.round(amount / step)) > 1e-8) return fail('Dose não representável em unidades inteiras ou frações autorizadas desta apresentação.');
    return { value: amount, unit: presentation.tipo === 'jatos' ? 'jatos' : 'comprimidos' };
  }
  return fail('Apresentação requer preparo específico; conversão automática indisponível.');
}
