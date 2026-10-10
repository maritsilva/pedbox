// Explicit metadata for limits already stated in the catalogue. These do not
// certify clinical approval; every drug remains pending professional review.
export const DOSE_REVIEW = {
 'paracetamol/analgesia': { maxScope:'dose', maxDailyPerKg:75, maxDaily:4000, maxAdministrations:4,
   references:[{title:'AAP — acetaminophen safety (limite de tomadas)',url:'https://www.aap.org/en/news-room/fact-checked/acetaminophen-is-safe-for-children-when-taken-as-directed-no-link-to-autism/'}] },
 'ibuprofeno/febre-dor': {maxScope:'dose',maxDailyPerKg:40},
 'ibuprofeno/antiinflamatorio': {blockedReason:'Em revisão: a faixa cadastrada (20–40 mg/kg/dia) diverge da observação (30–50 mg/kg/dia). O cálculo desta indicação foi desativado até reconciliar a fonte.'},
};
