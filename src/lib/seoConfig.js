/**
 * Configuração Centralizada de SEO para o PedBox
 * Inclui títulos, meta descriptions, palavras-chave e Schema.org (JSON-LD)
 */

export const BASE_URL = 'https://pedbox.app';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/hero-pediatra.jpg`;
export const SITE_NAME = 'PedBox | Plataforma Médica Pediátrica';

export const SEO_PAGES = {
  '/': {
    title: 'PedBox | Guia de Pediatria Grátis, Calculadoras, Doses e Condutas no Plantão',
    description: 'Plataforma médica 100% gratuita para ajuda rápida no plantão pediátrico: doses por kg, 203 condutas clínicas, escores de emergência e curvas OMS sem assinatura.',
    keywords: [
      'pedbox', 'pedbok', 'pedbook', 'pedbooks', 'ped ajuda', 'pede ajuda', 'pedajuda', 'medped',
      'plantão pediátrico', 'calculadoras pediátricas', 'doses de medicamentos infantis',
      'guia de bolso pediatria', 'livro digital pediatria', 'condutas médicas', 'neonatologia',
      'hidratação venosa', 'holliday segar', 'apgar', 'pews', 'pediatria grátis', 'medicina pediátrica prática'
    ],
    category: 'Plataforma Médica',
    priority: '1.0',
    changefreq: 'daily',
  },
  '/curvas-crescimento': {
    title: 'Curvas de Crescimento OMS e Intergrowth-21st | PedBox',
    description: 'Cálculo de percentil e escore Z para peso, estatura, IMC e perímetro cefálico segundo a OMS (0-19 anos) e Intergrowth-21st para prematuros.',
    keywords: ['curvas de crescimento oms', 'percentil peso estatura', 'escore z pediatria', 'intergrowth-21st', 'crescimento infantil', 'antropometria'],
    category: 'Calculadora de Crescimento',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/guia': {
    title: 'Guia de Bolso de Medicamentos e Antimicrobianos Pediátricos | PedBox',
    description: 'Livro e guia de bolso digital com posologia, apresentações comerciais, reconstituição e diluição de medicamentos e antibióticos pediátricos.',
    keywords: ['guia de bolso pediatria', 'livro de pediatria', 'antimicrobianos pediátricos', 'guia de medicamentos pediatria', 'antibióticos infantis', 'pedbook', 'pedbooks', 'posologia pediátrica', 'doses por kg'],
    category: 'Guia Farmacológico',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/dosagens': {
    title: 'Calculadora de Dosagens e Diluição Pediátrica por Peso | PedBox',
    description: 'Calcule doses exatas em mg/kg e mL de medicamentos pediátricos, apresentações comerciais, reconstituição e diluição segura para o plantão. 100% gratuito.',
    keywords: ['calculadora de dosagem pediátrica', 'dose por peso mg kg', 'diluição de antibióticos', 'prescrição infantil', 'cálculo de xarope', 'medped', 'ped ajuda doses', 'doses infantis'],
    category: 'Calculadora de Doses',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/calculadoras': {
    title: 'Calculadoras Pediátricas e Escores Clínicos no Plantão | PedBox',
    description: 'Hub completo com 48 calculadoras e escores clínicos pediátricos: Holliday-Segar, APGAR, Glasgow, PEWS, SIPA, Wood-Downes, Silverman-Andersen e PRAM. 100% grátis.',
    keywords: ['calculadoras pediátricas', 'escores pediátricos', 'holliday segar', 'pews pediatria', 'apgar recém-nascido', 'escala glasgow pediátrica', 'ped ajuda', 'plantão pediátrico', 'ajuda rápida plantão'],
    category: 'Hub de Calculadoras',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/biblioteca': {
    title: 'Biblioteca Clínica e Protocolos Pediátricos | PedBox',
    description: 'Acervo estruturado com 203 condutas especializadas, protocolos clínicos para urgência e emergência e guias práticos para plantonistas.',
    keywords: ['condutas pediátricas', 'protocolos de pediatria', 'livro digital pediatria', 'guia clínico pediatria', 'diretrizes sbp', 'pedbook'],
    category: 'Diretrizes Médicas',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/condutas': {
    title: '203 Condutas Clínicas em Neonatologia e Especialidades | PedBox',
    description: '203 diretrizes clínicas baseadas em evidências: neonatologia, cirurgia pediátrica, nefrologia, neurologia, emergência e puericultura. Acesso livre e irrestrito.',
    keywords: ['condutas pediátricas', 'neonatologia condutas', 'cirurgia pediátrica protocolos', 'nefrologia infantil', 'neurologia pediátrica', 'pedbook condutas', 'ped ajuda condutas'],
    category: 'Condutas Clínicas',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/protocolos': {
    title: 'Protocolos Clínicos Hospitalares e Ambulatoriais | PedBox',
    description: 'Protocolos estruturados para infecções do trato urinário, faringoamigdalite, pneumonia complicada, meningite e hidratação venosa.',
    keywords: ['protocolos clínicos pediatria', 'pneumonia infantil protocolo', 'itu pediatria', 'meningite bacteriana', 'faringoamigdalite'],
    category: 'Protocolos Clínicos',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/vacinas': {
    title: 'Calendário Vacinal SBIm e PNI Atualizado | PedBox',
    description: 'Guia completo de imunização infantil: esquemas da SBIm e PNI, vacinas por idade, contraindicações, vias e atualização de atrasos.',
    keywords: ['calendário vacinal sbim', 'vacinas pni infantil', 'vacinação prematuro', 'esquema vacinal atrasado', 'imunização pediatria'],
    category: 'Imunização',
    priority: '0.9',
    changefreq: 'monthly',
  },
  '/sinais-vitais': {
    title: 'Tabela de Sinais Vitais em Pediatria por Faixa Etária | PedBox',
    description: 'Valores de referência para frequência cardíaca, frequência respiratória, pressão arterial e temperatura do recém-nascido ao adolescente.',
    keywords: ['sinais vitais pediatria', 'frequência cardíaca infantil normal', 'frequência respiratória por idade', 'tabela sinais vitais'],
    category: 'Tabela de Referência',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/hidratacao': {
    title: 'Hidratação Venosa Pediátrica (Holliday-Segar) | PedBox',
    description: 'Cálculo de hidratação venosa de manutenção pelo método de Holliday-Segar, eletrólitos (Na e K), taxa de infusão e regras de expansão.',
    keywords: ['holliday segar cálculo', 'hidratação venosa pediatria', 'expansão volêmica infantil', 'soro de manutenção', 'reposição hidroeletrolítica'],
    category: 'Calculadora de Hidratação',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/drogas-emergencia': {
    title: 'Drogas de Emergência e Ressuscitação PALS | PedBox',
    description: 'Doses rápidas para emergência e UTI pediátrica: adrenalina, atropina, amiodarona, drogas de intubação em sequência rápida (ISR) e cardioversão.',
    keywords: ['drogas de emergência pediatria', 'pals doses pediátricas', 'intubação sequência rápida', 'adrenalina parada cardíaca infantil'],
    category: 'Emergência Pediátrica',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/horas-de-vida': {
    title: 'Calculadora de Horas de Vida do Recém-Nascido | PedBox',
    description: 'Cálculo exato de idade pós-natal em horas e minutos para interpretação de bilirrubina, triagem neonatal e perda ponderal.',
    keywords: ['horas de vida recém-nascido', 'idade pós-natal horas', 'nomograma de bhutani', 'icterícia neonatal horas'],
    category: 'Calculadora Neonatal',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/idade-gestacional': {
    title: 'Idade Gestacional e Data Provável do Parto (DPP) | PedBox',
    description: 'Calcule a idade gestacional exata por DUM e ultrassonografia obstétrica com regra de Naegele e projeção temporal.',
    keywords: ['idade gestacional dum', 'data provável do parto dpp', 'cálculo idade gestacional ultrassom', 'regra de naegele'],
    category: 'Calculadora Obstétrica',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/idade-gestacional-corrigida': {
    title: 'Idade Gestacional Corrigida para Prematuros | PedBox',
    description: 'Correção cronológica para desenvolvimento e crescimento de prematuros até os 2 anos de idade segundo critérios AAP.',
    keywords: ['idade gestacional corrigida', 'cálculo prematuridade', 'idade corrigida prematuro', 'curva fenton intergrowth'],
    category: 'Calculadora Neonatal',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/ictericia': {
    title: 'Fototerapia e Risco de Icterícia Neonatal (AAP) | PedBox',
    description: 'Indicação de fototerapia e exsanguineotransfusão baseada nas diretrizes da Academia Americana de Pediatria (AAP).',
    keywords: ['icterícia neonatal fototerapia', 'curva aap bilirrubina', 'nomograma fototerapia', 'exsanguineotransfusão recém-nascido'],
    category: 'Calculadora Neonatal',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/pressao-arterial': {
    title: 'Percentis de Pressão Arterial na Infância (AHA/AAP) | PedBox',
    description: 'Classificação da pressão arterial pediátrica por sexo, idade e percentil de estatura com identificação de pré-hipertensão e hipertensão.',
    keywords: ['pressão arterial pediatria', 'percentil pa infantil', 'hipertensão arterial pediátrica', 'tabela pressão arterial crianças'],
    category: 'Calculadora Cardiovascular',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/imc': {
    title: 'Cálculo de IMC Pediátrico e Z-Score OMS | PedBox',
    description: 'Avaliação nutricional pediátrica: IMC por idade, escore Z e classificação de magreza, eutrofia, sobrepeso e obesidade.',
    keywords: ['imc pediátrico cálculo', 'z-score imc crianças', 'obesidade infantil oms', 'percentil imc'],
    category: 'Calculadora Nutricional',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/perimetro-cefalico': {
    title: 'Perímetro Cefálico e Z-Score OMS | PedBox',
    description: 'Monitoramento do crescimento craniano, rastreio de microcefalia e macrocefalia segundo os padrões da Organização Mundial da Saúde.',
    keywords: ['perímetro cefálico oms', 'microcefalia percentil', 'macrocefalia z-score', 'crescimento craniano bebê'],
    category: 'Calculadora Antropométrica',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/alvo-parental': {
    title: 'Cálculo do Alvo Parental e Estatura Alvo | PedBox',
    description: 'Cálculo da altura esperada do paciente adulto a partir da altura da mãe e do pai com intervalo de dispersão ±5 cm.',
    keywords: ['alvo parental cálculo', 'estatura alvo infantil', 'altura estimada adulto', 'canal de crescimento familiar'],
    category: 'Calculadora de Crescimento',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/centor-mcisaac': {
    title: 'Escore Centor-McIsaac para Faringite Estreptocócica | PedBox',
    description: 'Escore clínico para probabilidade de infecção por Streptococcus do grupo A e indicação racional de teste rápido e antibiótico.',
    keywords: ['centor mcisaac escore', 'faringite estreptocócica teste', 'amigdalite bacteriana pontuação'],
    category: 'Escore Clínico',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/amamentacao': {
    title: 'Segurança de Medicamentos na Amamentação | PedBox',
    description: 'Consulta rápida do nível de compatibilidade de fármacos com a amamentação baseado em evidências (LactMed / e-lactancia).',
    keywords: ['medicamentos amamentação', 'remédios e lactação', 'segurança aleitamento materno', 'compatibilidade fármacos leite'],
    category: 'Guia Farmacológico',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/desenvolvimento': {
    title: 'Cartilha de Marcos do Desenvolvimento Infantil | PedBox',
    description: 'Guia visual e checklist de marcos motores, cognitivos, de linguagem e sociais do recém-nascido aos 5 anos de idade.',
    keywords: ['marcos do desenvolvimento infantil', 'triagem neuropsicomotora', 'desenvolvimento bebê mês a mês', 'puericultura marcos'],
    category: 'Puericultura',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/apgar': {
    title: 'Calculadora do Escore de APGAR no Recém-Nascido | PedBox',
    description: 'Avaliação da vitalidade neonatal no 1º e 5º minutos de vida: frequência cardíaca, respiração, tônus, reflexos e cor.',
    keywords: ['escore de apgar cálculo', 'vitalidade recém-nascido', 'apgar neonatal', 'reanimação sala de parto'],
    category: 'Calculadora Neonatal',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/glasgow-pediatrico': {
    title: 'Escala de Coma de Glasgow Pediátrica | PedBox',
    description: 'Avaliação neurológica adaptada para lactentes e crianças com abertura ocular, resposta verbal e resposta motora.',
    keywords: ['glasgow pediátrico', 'escala coma lactentes', 'trauma craniano criança', 'avaliação neurológica pediátrica'],
    category: 'Calculadora Neurológica',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/pews': {
    title: 'Escore de Alerta Precoce Pediátrico (PEWS) | PedBox',
    description: 'Ferramenta de identificação precoce de deterioração clínica em enfermarias pediátricas através de parâmetros vitais.',
    keywords: ['pews escore pediátrico', 'alerta precoce deterioração clínica', 'escore gravidade enfermarias'],
    category: 'Escore Clínico',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/sipa': {
    title: 'Índice de Choque Pediátrico por Idade (SIPA) | PedBox',
    description: 'Cálculo de FC/PAS ajustado por faixa etária para diagnóstico precoce de choque hemorrágico e choque séptico compensado.',
    keywords: ['sipa índice de choque pediátrico', 'choque séptico infantil', 'choque hemorrágico trauma pediatria'],
    category: 'Escore de Choque',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/silverman-anderson': {
    title: 'Boletim de Silverman-Andersen para Desconforto Respiratório | PedBox',
    description: 'Quantificação da gravidade do desconforto respiratório neonatal: batimento de asa de nariz, gemido, tiragem e retração esternal.',
    keywords: ['silverman anderson boletim', 'desconforto respiratório recém-nascido', 'retração esternal neonatal'],
    category: 'Calculadora Neonatal',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/rodwell': {
    title: 'Escore Hematológico de Rodwell para Sepse Neonatal | PedBox',
    description: 'Critérios hematológicos laboratoriais para triagem precoce de sepse no recém-nascido a termo e pré-termo.',
    keywords: ['escore rodwell sepse neonatal', 'leucograma sepse rn', 'índice it neutrófilos'],
    category: 'Calculadora Neonatal',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/wood-downes': {
    title: 'Escore de Wood-Downes para Bronquiolite Aguda | PedBox',
    description: 'Classificação de gravidade da bronquiolite viral aguda e crise asmática em lactentes com indicação de suporte de oxigênio.',
    keywords: ['wood downes bronquiolite', 'escore gravidade bva', 'sibilância lactente escore'],
    category: 'Escore Respiratório',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/pram': {
    title: 'Escore PRAM para Crise de Asma Pediátrica | PedBox',
    description: 'Preschool Respiratory Assessment Measure (PRAM): avaliação objetiva da obstrução das vias aéreas na asma infantil.',
    keywords: ['escore pram asma', 'crise de asma pediatria', 'avaliação respiratória pré-escolar'],
    category: 'Escore Respiratório',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/pas-asma': {
    title: 'Pediatric Asthma Score (PAS) | PedBox',
    description: 'Escore de gravidade da crise asmática em pediatria para orientação do tratamento ambulatorial ou internação.',
    keywords: ['pas asma pediatria', 'pediatric asthma score', 'gravidade asma infantil'],
    category: 'Escore Respiratório',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/rastreio-preventivo': {
    title: 'Rastreio Preventivo e Puericultura Pediátrica | PedBox',
    description: 'Calendário de triagens neonatais (teste do pezinho, coraçãozinho, orelhinha, olhinho, linguinha) e exames de rotina.',
    keywords: ['triagem neonatal testes', 'teste pezinho coracaozinho', 'rastreio preventivo puericultura', 'exames de rotina criança'],
    category: 'Puericultura',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/contato': {
    title: 'Contato, Suporte e Sugestões Clínicas | PedBox',
    description: 'Entre em contato com a equipe médica e de desenvolvimento do PedBox para dúvidas clínicas, sugestões de calculadoras e reporte de erros.',
    keywords: ['contato pedbox', 'suporte médico pediatria', 'sugestão de calculadora'],
    category: 'Institucional',
    priority: '0.6',
    changefreq: 'monthly',
  },
};

/**
 * Gera os dados estruturados Schema.org (JSON-LD) para a página
 */
export function generateSchemaLD(path) {
  const page = SEO_PAGES[path] || SEO_PAGES['/'];
  const fullUrl = `${BASE_URL}${path === '/' ? '' : path}`;

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'PedBox',
      description: 'Plataforma médica 100% gratuita para ajuda rápida no plantão pediátrico e guia de bolso clínico.',
      inLanguage: 'pt-BR',
      publisher: {
        '@type': 'Organization',
        name: 'PedBox',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/assets/pedbox-logo.png`,
        },
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${BASE_URL}/#app`,
      name: 'PedBox - Guia e Calculadoras Pediátricas',
      operatingSystem: 'All',
      applicationCategory: 'MedicalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '1240',
      },
      featureList: [
        'Ajuda rápida no plantão pediátrico',
        '203 condutas clínicas atualizadas',
        '48 calculadoras e escores pediátricos',
        'Doses exatas por kg e frascos comerciais',
        'Curvas de crescimento OMS e Intergrowth-21st',
        'Acesso 100% gratuito sem assinatura',
      ],
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${fullUrl}#webpage`,
      url: fullUrl,
      name: page.title,
      description: page.description,
      inLanguage: 'pt-BR',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: {
        '@type': 'MedicalEntity',
        name: page.category,
      },
      specialty: {
        '@type': 'MedicalSpecialty',
        name: 'Pediatria e Neonatologia',
      },
    },
  ];

  if (path === '/') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O PedBox é realmente 100% gratuito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim! O PedBox é uma plataforma médica totalmente livre e gratuita para sempre. Todos os módulos, calculadoras, guias de doses e mais de 200 condutas clínicas são abertos para médicos, residentes e estudantes, sem mensalidade, sem assinatura e sem paywalls.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como o PedBox auxilia na tomada de decisão rápida no plantão pediátrico?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O PedBox foi desenhado para agilidade beira-leito em pronto-socorros, enfermarias e UTIs pediátricas: oferece busca universal instantânea com atalho (Ctrl+K), cálculo de doses exatas por peso corporal com diluição e volumes comerciais, escores validados (PEWS, APGAR, Silverman-Andersen, Glasgow) e condutas estruturadas em passos objetivos.',
          },
        },
        {
          '@type': 'Question',
          name: 'O PedBox funciona como um livro ou guia de bolso digital de pediatria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. O PedBox atua como um guia de bolso e livro digital interativo para o dia a dia da medicina pediátrica, reunindo tabelas de sinais vitais, calendário vacinal, curvas de crescimento OMS/Intergrowth e protocolos clínicos atualizados em um formato moderno e acessível pelo celular.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais especialidades pediátricas estão contempladas nas condutas clínicas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A biblioteca conta com 203 condutas clínicas abrangendo Neonatologia, Cirurgia Pediátrica, Nefrologia e Urologia, Neurologia, Infectologia, Pneumologia, Emergência Pediátrica, Terapia Intensiva e Puericultura, baseadas em evidências oficiais da Sociedade Brasileira de Pediatria (SBP) e Ministério da Saúde.',
          },
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
