// Sínteses próprias. Histórico anterior preservado em vacinasData.js, fora desta página.
export const VACCINE_REVIEW_DATE = '10/10/2026';
export const VACCINE_SOURCES = {
 pni: {title: 'Ministério da Saúde — Instrução Normativa 2026', url: 'https://www.gov.br/saude/pt-br/vacinacao/publicacoes/instrucao-normativa-que-instrui-o-calendario-nacional-de-vacinacao-2026.pdf/@@download/file'},
 sbim: {title: 'SBIm 2026/2027 — criança, PDF pp. 10–11, atualização 17/06/2026', url: 'https://sbim.org.br/images/livreto-Calend-SBIm-2026-27-260619a.pdf_2026-06-19.pdf'},
 reading: {title: 'Imunização pediátrica — leitura expandida, Marina Silva, 07/10/2026 (material fornecido)'}
};
export const VACCINE_AGES = [[0,'Ao nascer'],[1,'1 mês'],[2,'2 meses'],[3,'3 meses'],[4,'4 meses'],[5,'5 meses'],[6,'6 meses'],[7,'7 meses'],[9,'9 meses'],[12,'12 meses'],[15,'15–18 meses'],[18,'18 meses'],[48,'4–6 anos'],[60,'5–6 anos'],[108,'9–14 anos'],[120,'10–14 anos'],[132,'11–14 anos']];
export const vaccineGuide = [
  {
    "id": "bcg",
    "name": "BCG",
    "pni": "Ao nascer, dose única.",
    "sbim": "Ao nascer, dose única.",
    "note": "Adiar se peso inferior a 2.000 g. Ausência de cicatriz, com dose documentada, não indica revacinação. Suspeita de imunodeficiência exige avaliação antes da aplicação.",
    "readingPage": 3,
    "pniAges": [
      0
    ],
    "sbimAges": [
      0
    ]
  },
  {
    "id": "hepb",
    "name": "Hepatite B",
    "pni": "Ao nascer e componente da penta aos 2, 4 e 6 meses.",
    "sbim": "Ao nascer, 1 e 6 meses; quatro doses quando utilizada combinação contendo hepatite B.",
    "note": "Preferir a dose neonatal nas primeiras 12 horas. Mãe HBsAg positiva: associar imunoglobulina específica em local diferente e organizar seguimento.",
    "readingPage": 3,
    "pniAges": [
      0,
      2,
      4,
      6
    ],
    "sbimAges": [
      0,
      1,
      6
    ]
  },
  {
    "id": "dtp",
    "name": "Difteria, tétano e coqueluche",
    "pni": "Penta com DTPw aos 2, 4 e 6 meses; DTP aos 15 meses e 4 anos.",
    "sbim": "Preferir DTPa aos 2, 4 e 6 meses; reforços aos 15–18 meses e 4–6 anos. dTpa preferencialmente aos 9–11 anos, cinco anos após o reforço anterior.",
    "note": "Penta do SUS contém hepatite B e Hib; penta acelular contém VIP e Hib; hexa acelular contém todos esses componentes. Conferir por antígeno para evitar omissões ou duplicidade.",
    "readingPage": 9,
    "pniAges": [
      2,
      4,
      6,
      15,
      48
    ],
    "sbimAges": [
      2,
      4,
      6,
      15,
      48,
      108
    ]
  },
  {
    "id": "vip",
    "name": "Poliomielite — VIP",
    "pni": "2, 4 e 6 meses; reforços aos 15 meses e 4 anos.",
    "sbim": "2, 4 e 6 meses; reforços aos 15–18 meses e 4–6 anos.",
    "note": "Esquema exclusivamente inativado. Divergência documental: o livreto SBIm de junho ainda descreve apenas um reforço no PNI; a norma PNI consultada e a aula posterior incluem o reforço aos 4 anos.",
    "readingPage": 5,
    "pniAges": [
      2,
      4,
      6,
      15,
      48
    ],
    "sbimAges": [
      2,
      4,
      6,
      15,
      48
    ]
  },
  {
    "id": "hib",
    "name": "Haemophilus influenzae b — Hib",
    "pni": "Componente da penta aos 2, 4 e 6 meses.",
    "sbim": "2, 4 e 6 meses; reforço aos 15–18 meses, especialmente após combinações acelulares.",
    "note": "Rotina para crianças saudáveis menores de 5 anos. Condições especiais, como asplenia e imunodeficiências, exigem consulta à RIE/CRIE.",
    "readingPage": 5,
    "pniAges": [
      2,
      4,
      6
    ],
    "sbimAges": [
      2,
      4,
      6,
      15
    ]
  },
  {
    "id": "rotavirus",
    "name": "Rotavírus — RV1 / RV5",
    "pni": "RV1: 2 e 4 meses.",
    "sbim": "RV1: 2 e 4 meses; RV5: 2, 4 e 6 meses.",
    "note": "Recuperação: primeira dose até 11 meses e 29 dias e última até 23 meses e 29 dias. A ampliação para RV5 é off label. Não repetir se regurgitar ou vomitar. Intussuscepção prévia e imunodeficiência grave contraindicam. Não administrar durante internação; planejar após alta.",
    "readingPage": 4,
    "pniAges": [
      2,
      4
    ],
    "sbimAges": [
      2,
      4,
      6
    ]
  },
  {
    "id": "pneumo",
    "name": "Pneumocócicas conjugadas",
    "pni": "Transição 2+1: VPC20 aos 2 meses, VPC10 aos 4 e VPC20 aos 12 meses.",
    "sbim": "Preferir VPC20 ou VPC15: 2, 4 e 6 meses, com reforço aos 12–15 meses, quando iniciada até 6 meses.",
    "note": "Na falta de VPC10, seguir a norma para VPC20. Esquema completo anterior de VPC10 permanece válido no PNI. Complementação SBIm depende de idade, produto e risco; não equivale a reiniciar toda a série.",
    "readingPage": 7,
    "pniAges": [
      2,
      4,
      12
    ],
    "sbimAges": [
      2,
      4,
      6,
      12
    ]
  },
  {
    "id": "men",
    "name": "Meningocócicas C / ACWY",
    "pni": "MenC aos 3 e 5 meses; ACWY aos 12 meses e dos 11 aos 14 anos.",
    "sbim": "Preferir ACWY aos 3 e 5 meses, reforço aos 12–15 meses e aos 5–6 anos; adequar ao fabricante e histórico.",
    "note": "MenC protege contra C; ACWY acrescenta A, W e Y. Trocar o produto requer avaliar proteção contra os sorogrupos adicionais. Nenhuma delas substitui a MenB.",
    "readingPage": 6,
    "pniAges": [
      3,
      5,
      12,
      132
    ],
    "sbimAges": [
      3,
      5,
      12,
      60
    ]
  },
  {
    "id": "menb",
    "name": "Meningocócica B",
    "pni": "Não integra a rotina universal do PNI.",
    "sbim": "Início aos 3 e 5 meses, reforço aos 12–15 meses.",
    "note": "Início tardio modifica número de doses e intervalos. A partir de 2 anos, esquema conforme idade e apresentação; não extrapolar o esquema do lactente para todos os produtos.",
    "readingPage": 6,
    "pniAges": [],
    "sbimAges": [
      3,
      5,
      12
    ]
  },
  {
    "id": "influenza",
    "name": "Influenza",
    "pni": "Anual a partir de 6 meses até menores de 6 anos, além dos grupos elegíveis.",
    "sbim": "Anual para todas as crianças e adolescentes a partir de 6 meses.",
    "note": "Primovacinação em menores de 9 anos: duas doses separadas por 30 dias. PNI considera dose anual quando há pelo menos uma dose em anos anteriores. Alergia a ovo não é proibição automática; reação grave exige ambiente e avaliação apropriados. Conferir formulação sazonal.",
    "readingPage": 7,
    "pniAges": [
      6
    ],
    "sbimAges": [
      6
    ]
  },
  {
    "id": "covid",
    "name": "Covid-19",
    "pni": "Rotina dos 6 meses aos menores de 5 anos. Esquema conforme produto e histórico.",
    "sbim": "Seguir a recomendação vigente do PNI para idade e condição clínica.",
    "note": "Pfizer: três doses, agenda 6, 7 e 9 meses; mínimos de quatro semanas entre D1–D2 e oito semanas entre D2–D3. Reconhecer esquema prévio Moderna de duas doses. Criança saudável com esquema completo não recebe dose periódica de rotina; grupos especiais têm indicação própria. Conferir apresentação antes da aplicação.",
    "readingPage": 12,
    "pniAges": [
      6,
      7,
      9
    ],
    "sbimAges": [
      6,
      7,
      9
    ]
  },
  {
    "id": "fa",
    "name": "Febre amarela",
    "pni": "9 meses e reforço aos 4 anos.",
    "sbim": "9 meses e 4 anos; se primeira dose a partir de 5 anos, segunda dose dez anos depois.",
    "note": "No PNI, início a partir de 5 anos corresponde a dose única; início antes dos 5 exige segunda dose. Em menores de 2 anos, separar de SCR/tetraviral por 30 dias na rotina. Exceções epidemiológicas exigem avaliação. Vacina viva: verificar contraindicações.",
    "readingPage": 11,
    "pniAges": [
      9,
      48
    ],
    "sbimAges": [
      9,
      48
    ]
  },
  {
    "id": "scr",
    "name": "Tríplice viral — SCR",
    "pni": "12 e 15 meses.",
    "sbim": "12 e 15 meses.",
    "note": "Dose zero entre 6 e 11 meses em situações epidemiológicas indicadas não substitui as duas doses após 12 meses. Avaliar imunossupressão e hemoderivados. SCR não contém varicela; tetraviral contém.",
    "readingPage": 8,
    "pniAges": [
      12,
      15
    ],
    "sbimAges": [
      12,
      15
    ]
  },
  {
    "id": "varicela",
    "name": "Varicela",
    "pni": "15 meses e 4 anos.",
    "sbim": "12 e 15 meses.",
    "note": "Vacina viva. Identificar doses recebidas como monovalente ou tetraviral. Avaliar imunossupressão e interferência de imunoglobulinas antes de aplicar.",
    "readingPage": 8,
    "pniAges": [
      15,
      48
    ],
    "sbimAges": [
      12,
      15
    ]
  },
  {
    "id": "hepa",
    "name": "Hepatite A",
    "pni": "Dose única aos 15 meses; recuperação até menores de 5 anos.",
    "sbim": "Duas doses aos 12 e 18 meses, com intervalo de seis meses.",
    "note": "Condições especiais podem ter indicação de duas doses no SUS. Conferir histórico e critérios da RIE/CRIE; a dose única da rotina pública não se aplica indistintamente a pacientes de risco.",
    "readingPage": 8,
    "pniAges": [
      15
    ],
    "sbimAges": [
      12,
      18
    ]
  },
  {
    "id": "hpv",
    "name": "HPV",
    "pni": "HPV4: dose única dos 9 aos 14 anos na rotina.",
    "sbim": "Preferir HPV9. Crianças de 9–14 anos: duas doses com intervalo de seis meses.",
    "note": "Não aplicar a regra de dose única aos grupos especiais. Imunodeprimidos têm esquema próprio. Resgate de 15–19 anos depende da estratégia vigente. A aula posterior descreve duas doses de HPV9 até 19 anos, off label a partir de 15; consultar posicionamento atualizado antes dessa ampliação.",
    "readingPage": 10,
    "pniAges": [
      108
    ],
    "sbimAges": [
      108
    ]
  },
  {
    "id": "dengue",
    "name": "Dengue — Qdenga",
    "pni": "10–14 anos, conforme estratégia de oferta; duas doses com intervalo de três meses.",
    "sbim": "A partir de 4 anos: duas doses com intervalo de três meses, independentemente de dengue prévia.",
    "note": "Não indicada antes dos 4 anos. Vacina viva, contraindicada em gestantes, lactantes e imunodeprimidos. Após dengue antes da primeira dose, aguardar seis meses; doença entre doses exige ao menos 30 dias desde seu início para D2. Não intercambiar fabricantes.",
    "readingPage": 10,
    "pniAges": [
      120
    ],
    "sbimAges": [
      48
    ]
  }
];
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export function filterVaccineGuide({ network = 'compare', query = '', age = 'all' } = {}) {
 const term = normalize(query.trim());
 return vaccineGuide.filter(v => {
  const ages = network === 'pni' ? v.pniAges : network === 'sbim' ? v.sbimAges : [...v.pniAges, ...v.sbimAges];
  return ages.length > 0 && (age === 'all' || ages.includes(Number(age))) && normalize([v.name, v.pni, v.sbim, v.note].join(' ')).includes(term);
 });
}
