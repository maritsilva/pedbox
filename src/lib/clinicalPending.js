// Explicit prerequisites for tools whose implementation is not ready.
export const CLINICAL_PENDING = {
 cdlqi: {
  reason:'A integração eletrônica do questionário depende de confirmar as condições de uso com a Cardiff University e utilizar a versão autorizada. Enquanto isso, consulte o instrumento e o aplicativo oficial.',
  links:[['CDLQI — Cardiff University','https://www.cardiff.ac.uk/medicine/resources/quality-of-life-questionnaires/childrens-dermatology-life-quality-index']],
 },
 'roma-iv': {
  reason:'A incorporação dos questionários oficiais exige licença da Rome Foundation. É necessário definir a faixa etária e distinguir os critérios clínicos de um questionário validado antes de implementar esta ferramenta.',
  links:[['Rome Foundation — questionários e licenciamento','https://theromefoundation.org/copyright-and-licensing/']],
 },
 bhutani: {
  reason:'O nomograma histórico de risco não corresponde aos limiares de fototerapia. A implementação depende de conferir a curva original, a população de aplicação e a distinção em relação às diretrizes atuais de hiperbilirrubinemia.',
  links:[],
 },
 'sirs-sepsis': {
  reason:'É necessário separar os critérios históricos de SIRS das definições atuais de sepse pediátrica. A ferramenta não deve apresentar SIRS isoladamente como diagnóstico de sepse.',
  links:[],
 },
};
