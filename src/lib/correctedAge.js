const DAY = 86400000;
function dateOnly(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(value + 'T00:00:00.000Z');
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value ? date : null;
}
const splitWeeks = days => ({weeks: Math.floor(days / 7), days: days % 7});

// AAP: chronological age minus the interval between birth GA and 40 weeks,
// for children born before 37 completed weeks. Durations stay in exact days.
export function calculateCorrectedAge({weeks, days, birthDate, assessmentDate}) {
  if (String(weeks).trim() === '' || String(days).trim() === '') return {error:'Informe as semanas e os dias da idade gestacional ao nascer.'};
  const w = Number(weeks), d = Number(days);
  if (!Number.isInteger(w) || w < 20 || w > 44 || !Number.isInteger(d) || d < 0 || d > 6) {
    return {error:'Informe semanas inteiras entre 20 e 44 e dias entre 0 e 6.'};
  }
  const birth = dateOnly(birthDate), assessment = dateOnly(assessmentDate);
  if (!birth || !assessment) return {error:'Informe datas válidas de nascimento e avaliação.'};
  const chronologicalDays = (assessment.getTime() - birth.getTime()) / DAY;
  if (chronologicalDays < 0) return {error:'A avaliação não pode ser anterior ao nascimento.'};
  const gestationalDays = w * 7 + d;
  const preterm = gestationalDays < 37 * 7;
  const correctionDays = preterm ? 280 - gestationalDays : 0;
  const correctedDays = chronologicalDays - correctionDays;
  const postmenstrualDays = gestationalDays + chronologicalDays;
  const secondBirthday = new Date(birth);
  secondBirthday.setUTCFullYear(birth.getUTCFullYear() + 2);
  return {
    error:null, chronologicalDays, correctedDays, correctionDays, preterm,
    chronological:splitWeeks(chronologicalDays),
    corrected:correctedDays >= 0 ? splitWeeks(correctedDays) : null,
    postmenstrual:splitWeeks(postmenstrualDays),
    beforeTerm:preterm && correctedDays < 0,
    beyondTwoYears:assessment >= secondBirthday,
  };
}
