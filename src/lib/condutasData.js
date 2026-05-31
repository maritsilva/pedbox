// DADOS DE CONDUTAS E MANEJOS PEDIÁTRICOS
// Estrutura espelhada do PedBook (pedb.com.br/condutas-e-manejos)

export const CONDUTAS_CATEGORIAS = [
  {
    id: 'neonatal',
    label: 'Neonatal',
    icon: '👶',
    color: 'blue',
    subcategorias: [
      {
        id: 'cuidados-neonatais-basicos',
        label: 'Cuidados Neonatais Básicos',
        topicos: [
          { id: 'adaptacao-neonatal', label: 'Adaptação Neonatal', conteudo: '' },
          { id: 'aleitamento-materno', label: 'Aleitamento Materno', conteudo: '' },
          { id: 'alojamento-conjunto', label: 'Alojamento Conjunto', conteudo: '' },
          { id: 'classificacao-neonatal', label: 'Classificação Neonatal', conteudo: '' },
          { id: 'cuidados-imediatos-rn', label: 'Cuidados Imediatos do RN', conteudo: '' },
          { id: 'reanimacao-neonatal', label: 'Reanimação Neonatal', conteudo: '' },
          { id: 'triagem-neonatal', label: 'Triagem Neonatal', conteudo: '' },
        ],
      },
      {
        id: 'infeccoes-congenitas',
        label: 'Infecções Congênitas TORCHS',
        topicos: [
          { id: 'citomegaloviro', label: 'Citomegalovirose Congênita', conteudo: '' },
          { id: 'herpes-neonatal', label: 'Herpes Neonatal', conteudo: '' },
          { id: 'sifilis-congenita', label: 'Sífilis Congênita', conteudo: '' },
          { id: 'toxoplasmose-congenita', label: 'Toxoplasmose Congênita', conteudo: '' },
        ],
      },
      {
        id: 'malformacoes-neonatais',
        label: 'Malformações Neonatais',
        topicos: [
          { id: 'cardiopatias-congenitas-no-rn', label: 'Cardiopatias Congênitas no RN', conteudo: '' },
          { id: 'defeitos-do-tubo-neural', label: 'Defeitos do Tubo Neural', conteudo: '' },
          { id: 'displasia-do-desenvolvimento-do-quadril', label: 'Displasia do Desenvolvimento do Quadril', conteudo: '' },
          { id: 'hipospadia', label: 'Hipospádia', conteudo: '' },
          { id: 'malformacoes-congenitas-do-rn', label: 'Malformações Congênitas do RN', conteudo: '' },
          { id: 'persistencia-do-canal-arterial', label: 'Persistência do Canal Arterial', conteudo: '' },
        ],
      },
      {
        id: 'patologias-neonatais-especificas',
        label: 'Patologias Neonatais Específicas',
        topicos: [
          { id: 'apneia-da-prematuridade', label: 'Apneia da Prematuridade', conteudo: '' },
          { id: 'disturbios-metabolicos-do-rn', label: 'Distúrbios Metabólicos do RN', conteudo: '' },
          { id: 'disturbios-neurologicos-do-rn', label: 'Distúrbios Neurológicos do RN', conteudo: '' },
          { id: 'disturbios-respiratorios-do-rn', label: 'Distúrbios Respiratórios do RN', conteudo: '' },
          { id: 'enterocolite-necrosante', label: 'Enterocolite Necrosante', conteudo: '' },
          { id: 'hiperbilirrubinemia-neonatal', label: 'Hiperbilirrubinemia Neonatal', conteudo: '' },
          { id: 'ictericia-neonatal', label: 'Icterícia Neonatal', conteudo: '' },
          { id: 'leucomalacia-periventricular', label: 'Leucomalácia Periventricular', conteudo: '' },
          { id: 'pneumotorax-neonatal', label: 'Pneumotórax Neonatal', conteudo: '' },
          { id: 'retinopatia-da-prematuridade', label: 'Retinopatia da Prematuridade', conteudo: '' },
          { id: 'sepse-neonatal', label: 'Sepse Neonatal', conteudo: '' },
          { id: 'sindrome-de-aspiracao-do-meconio', label: 'Síndrome de Aspiração de Mecônio (SAM)', conteudo: '' },
        ],
      },
    ],
  },

  {
    id: 'infecciosas',
    label: 'Infecciosas e Exantemáticas',
    icon: '🦠',
    color: 'orange',
    subcategorias: [],
  },

  {
    id: 'cirurgia-pediatrica',
    label: 'Cirurgia Pediátrica',
    icon: '🔪',
    color: 'red',
    subcategorias: [
      {
        id: 'atresias-e-esofago',
        label: 'Atresias e Esôfago',
        topicos: [
          { id: 'atresia-duodenal', label: 'Atresia Duodenal', conteudo: '' },
          { id: 'atresia-esofagica', label: 'Atresia Esofágica', conteudo: '' },
        ],
      },
      {
        id: 'avaliacao-e-perioperatorio',
        label: 'Avaliação e Perioperatório',
        topicos: [
          { id: 'avaliacao-pre-operatoria-pediatrica', label: 'Avaliação Pré-operatória Pediátrica', conteudo: '' },
          { id: 'suporte-nutricional-no-paciente-cirurgico-infantil', label: 'Suporte Nutricional no Paciente Cirúrgico Infantil', conteudo: '' },
        ],
      },
      {
        id: 'cabeca-e-pescoco',
        label: 'Cabeça e Pescoço',
        topicos: [
          { id: 'fenda-labial-e-fenda-palatina', label: 'Fenda Labial e Fenda Palatina', conteudo: '' },
        ],
      },
      {
        id: 'escroto-e-bolsa',
        label: 'Escroto e Bolsa',
        topicos: [
          { id: 'escroto-agudo-pediatrico', label: 'Escroto Agudo Pediátrico', conteudo: '' },
        ],
      },
      {
        id: 'hepatobiliar-e-pancreas',
        label: 'Hepatobiliar e Pâncreas',
        topicos: [
          { id: 'cisto-de-coledoco', label: 'Cisto de Colédoco', conteudo: '' },
        ],
      },
      {
        id: 'malformacoes-anorretais-e-intestinais',
        label: 'Malformações Anorretais e Intestinais',
        topicos: [
          { id: 'anomalias-anorretais', label: 'Anomalias Anorretais', conteudo: '' },
          { id: 'atresia-do-intestino-delgado', label: 'Atresia do Intestino Delgado', conteudo: '' },
          { id: 'diverticulo-de-meckel', label: 'Divertículo de Meckel', conteudo: '' },
          { id: 'doenca-de-hirschsprung', label: 'Doença de Hirschsprung', conteudo: '' },
          { id: 'ma-rotacao-intestinal', label: 'Má Rotação Intestinal', conteudo: '' },
          { id: 'obstrucao-intestinal-neonatal', label: 'Obstrução Intestinal Neonatal', conteudo: '' },
        ],
      },
      {
        id: 'parede-abdominal',
        label: 'Parede Abdominal',
        topicos: [
          { id: 'onfalocele', label: 'Onfalocele', conteudo: '' },
        ],
      },
      {
        id: 'torax-e-pulmao',
        label: 'Tórax e Pulmão',
        topicos: [
          { id: 'hernia-de-morgagni', label: 'Hérnia de Morgagni', conteudo: '' },
          { id: 'hernia-diafragmatica-congenita', label: 'Hérnia Diafragmática Congênita', conteudo: '' },
          { id: 'malformacao-adenomatoide-cistica-pulmonar-cpam', label: 'Malformação Adenomatoide Cística Pulmonar (CPAM)', conteudo: '' },
          { id: 'malformacao-congenita-das-vias-aereas-pulmonares', label: 'Malformação Congênita das Vias Aéreas Pulmonares', conteudo: '' },
          { id: 'sequestro-pulmonar', label: 'Sequestro Pulmonar', conteudo: '' },
        ],
      },
      {
        id: 'urologia-cirurgica',
        label: 'Urologia Cirúrgica',
        topicos: [
          { id: 'anomalias-uretrais-e-prolapso-uretral', label: 'Anomalias Uretrais e Prolapso Uretral', conteudo: '' },
          { id: 'criptorquidia', label: 'Criptorquidia', conteudo: '' },
          { id: 'extrofia-vesical-e-epispadia', label: 'Extrofia Vesical e Epispádia', conteudo: '' },
          { id: 'fimose-e-parafimose', label: 'Fimose e Parafimose', conteudo: '' },
          { id: 'hidrocele-infantil', label: 'Hidrocele Infantil', conteudo: '' },
          { id: 'malformacoes-ureterais-congenitas', label: 'Malformações Ureterais Congênitas', conteudo: '' },
          { id: 'micropenis', label: 'Micropênis', conteudo: '' },
          { id: 'obstrucao-da-juncao-ureteropelvica', label: 'Obstrução da Junção Ureteropélvica', conteudo: '' },
          { id: 'urolitiase-pediatrica', label: 'Urolitíase Pediátrica', conteudo: '' },
          { id: 'valvula-de-uretra-posterior', label: 'Válvula de Uretra Posterior', conteudo: '' },
          { id: 'varicocele-infantil', label: 'Varicocele Infantil', conteudo: '' },
        ],
      },
    ],
  },

  {
    id: 'urgencias-emergencias',
    label: 'Urgências e Emergências',
    icon: '🚨',
    color: 'red',
    subcategorias: [
      {
        id: 'ambiental-e-trauma',
        label: 'Ambiental e Trauma',
        topicos: [],
      },
      {
        id: 'disturbios-hidroeletroliticos-e-acido-base',
        label: 'Distúrbios Hidroeletrolíticos e Ácido Base',
        topicos: [
          { id: 'acidose-metabolica', label: 'Acidose Metabólica', conteudo: '' },
          { id: 'alcalose-metabolica', label: 'Alcalose Metabólica', conteudo: '' },
        ],
      },
      {
        id: 'emergencias-circulatorias-choque',
        label: 'Emergências Circulatórias (Choque)',
        topicos: [
          { id: 'choque', label: 'Choque', conteudo: '' },
          { id: 'choque-hipovolemico', label: 'Choque Hipovolêmico', conteudo: '' },
          { id: 'choque-septico', label: 'Choque Séptico', conteudo: '' },
        ],
      },
      {
        id: 'emergencias-metabolicas',
        label: 'Emergências Metabólicas',
        topicos: [
          { id: 'cetoacidose-diabetica', label: 'Cetoacidose Diabética (CAD)', conteudo: '' },
          { id: 'coma-hipoglicemico', label: 'Coma Hipoglicêmico', conteudo: '' },
        ],
      },
      {
        id: 'emergencias-neurologicas',
        label: 'Emergências Neurológicas',
        topicos: [
          { id: 'crises-epileticas', label: 'Crises Epiléticas', conteudo: '' },
          { id: 'estado-de-mal-epileptico', label: 'Estado de Mal Epiléptico (EME)', conteudo: '' },
        ],
      },
      {
        id: 'emergencias-pediatricas-gerais',
        label: 'Emergências Pediátricas Gerais',
        topicos: [
          { id: 'febre-sem-sinais-localizatorios-fssl', label: 'Febre sem Sinais Localizatórios (FSSL)', conteudo: '' },
          { id: 'insuficiencia-repiratoria-aguda', label: 'Insuficiência Respiratória Aguda', conteudo: '' },
          { id: 'intoxicacoes', label: 'Intoxicações', conteudo: '' },
          { id: 'parada-cardiorrespiratoria', label: 'Parada Cardiorrespiratória (PCR)', conteudo: '' },
          { id: 'queimaduras', label: 'Queimaduras', conteudo: '' },
          { id: 'sindrome-da-morte-subita-do-lactente-smsl', label: 'Síndrome da Morte Súbita do Lactente (SMSL)', conteudo: '' },
          { id: 'trauma', label: 'Trauma', conteudo: '' },
        ],
      },
      {
        id: 'suporte-e-via-aerea',
        label: 'Suporte e Via Aérea',
        topicos: [
          { id: 'analgesia-e-sedacao-em-pediatria', label: 'Analgesia e Sedação em Pediatria', conteudo: '' },
          { id: 'parada-cardiorrespiratoria-e-reanimacao-cardiopulmonar', label: 'Parada Cardiorrespiratória e Reanimação Cardiopulmonar', conteudo: '' },
          { id: 'suporte-basico-de-vida-pediatrico', label: 'Suporte Básico de Vida Pediátrico', conteudo: '' },
          { id: 'via-aerea-avancada-em-pediatria', label: 'Via Aérea Avançada em Pediatria', conteudo: '' },
        ],
      },
      {
        id: 'ventilacao',
        label: 'Ventilação',
        topicos: [
          { id: 'ventilacao-mecanica-invasiva-na-crianca', label: 'Ventilação Mecânica Invasiva na Criança', conteudo: '' },
          { id: 'ventilacao-mecanica-nao-invasiva-na-crianca', label: 'Ventilação Mecânica Não Invasiva na Criança', conteudo: '' },
        ],
      },
    ],
  },

  {
    id: 'puericultura',
    label: 'Puericultura',
    icon: '🌱',
    color: 'green',
    subcategorias: [
      {
        id: 'aleitamento-e-alimentacao',
        label: 'Aleitamento e Alimentação',
        topicos: [
          { id: 'alimentacao-complementar', label: 'Alimentação Complementar', conteudo: '' },
          { id: 'alimentacao-na-infancia', label: 'Alimentação na Infância', conteudo: '' },
          { id: 'formulas-infantis', label: 'Fórmulas Infantis', conteudo: '' },
          { id: 'suplementacao-de-vitaminas-e-ferro', label: 'Suplementação de Vitaminas e Ferro', conteudo: '' },
        ],
      },
      {
        id: 'crescimento-e-desenvolvimento',
        label: 'Crescimento e Desenvolvimento',
        topicos: [
          { id: 'atraso-constitucional-do-desenvolvimento', label: 'Atraso Constitucional do Desenvolvimento', conteudo: '' },
          { id: 'avaliacao-do-crescimento', label: 'Avaliação do Crescimento', conteudo: '' },
        ],
      },
      {
        id: 'cuidados-em-puericultura',
        label: 'Cuidados em Puericultura',
        topicos: [
          { id: 'choro-no-lactente', label: 'Choro no Lactente', conteudo: '' },
          { id: 'colica-no-lactente', label: 'Cólica no Lactente', conteudo: '' },
          { id: 'cuidados-gerais-com-o-recem-nascido', label: 'Cuidados Gerais com o Recém-Nascido', conteudo: '' },
        ],
      },
      {
        id: 'fichas-de-acompanhamento',
        label: 'Fichas de Acompanhamento',
        topicos: [
          { id: 'ficha-inicial-para-acompanhamento', label: 'Ficha inicial para acompanhamento', conteudo: '' },
          { id: 'ficha-de-acompanhamento-15-dias-a-1-mes', label: 'Ficha de Acompanhamento — 15 dias a 1 mês', conteudo: '' },
          { id: 'ficha-de-acompanhamento-1-a-2-meses', label: 'Ficha de Acompanhamento — 1 a 2 meses', conteudo: '' },
          { id: 'ficha-de-acompanhamento-2-a-4-meses', label: 'Ficha de Acompanhamento — 2 a 4 meses', conteudo: '' },
          { id: 'ficha-de-acompanhamento-4-a-6-meses', label: 'Ficha de Acompanhamento — 4 a 6 meses', conteudo: '' },
          { id: 'ficha-de-acompanhamento-6-a-9-meses', label: 'Ficha de Acompanhamento — 6 a 9 meses', conteudo: '' },
          { id: 'ficha-de-acompanhamento-9-a-12-meses', label: 'Ficha de Acompanhamento — 9 a 12 meses', conteudo: '' },
          { id: 'ficha-de-acompanhamento-12-a-18-meses', label: 'Ficha de Acompanhamento — 12 a 18 meses', conteudo: '' },
          { id: 'ficha-de-acompanhamento-18-a-24-meses', label: 'Ficha de Acompanhamento — 18 a 24 meses', conteudo: '' },
          { id: 'ficha-de-acompanhamento-2-a-5-anos', label: 'Ficha de Acompanhamento — 2 a 5 anos', conteudo: '' },
        ],
      },
      {
        id: 'prevencao-e-risco',
        label: 'Prevenção e Risco',
        topicos: [
          { id: 'sindrome-da-morte-subita-infantil', label: 'Síndrome da Morte Súbita Infantil', conteudo: '' },
        ],
      },
      {
        id: 'saude-bucal',
        label: 'Saúde Bucal',
        topicos: [
          { id: 'denticao-e-higiene-bucal', label: 'Dentição e Higiene Bucal', conteudo: '' },
        ],
      },
      {
        id: 'saude-escolar-e-comportamento',
        label: 'Saúde Escolar e Comportamento',
        topicos: [
          { id: 'bullying-e-violencia-escolar', label: 'Bullying e Violência Escolar', conteudo: '' },
        ],
      },
      {
        id: 'triagens-neonatais',
        label: 'Triagens Neonatais',
        topicos: [
          { id: 'teste-da-linguinha', label: 'Teste da Linguinha', conteudo: '' },
          { id: 'teste-da-orelhinha', label: 'Teste da Orelhinha', conteudo: '' },
          { id: 'triagem-cardiologica-e-auditiva-no-neonato', label: 'Teste do Coraçãozinho', conteudo: '' },
          { id: 'teste-do-olhinho', label: 'Teste do Olhinho', conteudo: '' },
          { id: 'triagem-neonatal', label: 'Triagem Neonatal', conteudo: '' },
        ],
      },
      {
        id: 'vacinacao',
        label: 'Vacinação',
        topicos: [
          { id: 'eventos-adversos-em-vacinacao', label: 'Eventos Adversos em Vacinação', conteudo: '' },
        ],
      },
    ],
  },

  {
    id: 'respiratorio',
    label: 'Doenças Respiratórias',
    icon: '🫁',
    color: 'cyan',
    subcategorias: [
      {
        id: 'complicacoes-e-urgencias',
        label: 'Complicações e Urgências',
        topicos: [
          { id: 'derrame-pleural', label: 'Derrame Pleural', conteudo: '' },
          { id: 'mastoidite', label: 'Mastoidite', conteudo: '' },
          { id: 'pneumotorax', label: 'Pneumotórax', conteudo: '' },
        ],
      },
      {
        id: 'doencas-obstrutivas-cronicas',
        label: 'Doenças Obstrutivas e Crônicas',
        topicos: [
          { id: 'apneia-do-sono', label: 'Apneia do Sono', conteudo: '' },
          { id: 'asma', label: 'Asma', conteudo: '' },
          { id: 'displasia-broncopulmonar', label: 'Displasia Broncopulmonar', conteudo: '' },
          { id: 'fibrose-cistica', label: 'Fibrose Cística', conteudo: '' },
          { id: 'hipertensao-pulmonar', label: 'Hipertensão Pulmonar', conteudo: '' },
          { id: 'rinite-alergica', label: 'Rinite Alérgica', conteudo: '' },
        ],
      },
      {
        id: 'doencas-por-corpo-estranho',
        label: 'Doenças por Corpo Estranho',
        topicos: [
          { id: 'aspiracao-de-corpo-estranho', label: 'Aspiração de Corpo Estranho', conteudo: '' },
        ],
      },
      {
        id: 'infeccoes-respiratorias',
        label: 'Infecções Respiratórias',
        topicos: [
          { id: 'bronquiolite-viral', label: 'Bronquiolite Viral', conteudo: '' },
          { id: 'coqueluche-pertussis', label: 'Coqueluche (Pertussis)', conteudo: '' },
          { id: 'faringoamigdalite-aguda', label: 'Faringoamigdalite Aguda', conteudo: '' },
          { id: 'gripe-influenza', label: 'Gripe (Influenza)', conteudo: '' },
          { id: 'otite-media-aguda-oma', label: 'Otite Média Aguda (OMA)', conteudo: '' },
          { id: 'pneumonia', label: 'Pneumonia', conteudo: '' },
          { id: 'pneumonia-adquirida-na-comunidade', label: 'Pneumonia Adquirida na Comunidade (PAC)', conteudo: '' },
          { id: 'pneumonia-hospitalar', label: 'Pneumonia Hospitalar', conteudo: '' },
          { id: 'rinofaringite-aguda-resfriado-comum', label: 'Rinofaringite Aguda (Resfriado Comum)', conteudo: '' },
          { id: 'tuberculose', label: 'Tuberculose', conteudo: '' },
        ],
      },
      {
        id: 'malformacoes-outras',
        label: 'Malformações e Outras',
        topicos: [
          { id: 'malformacoes-pulmonares', label: 'Malformações Pulmonares', conteudo: '' },
        ],
      },
      {
        id: 'sindromes-respiratorias-agudas',
        label: 'Síndromes Respiratórias Agudas',
        topicos: [
          { id: 'epiglotite', label: 'Epiglotite', conteudo: '' },
          { id: 'laringotraqueite-aguda-viral-crupe', label: 'Laringotraqueíte Viral (Crupe)', conteudo: '' },
        ],
      },
    ],
  },

  {
    id: 'hematologia',
    label: 'Hematologia',
    icon: '🩸',
    color: 'red',
    subcategorias: [
      {
        id: 'anemias',
        label: 'Anemias e Carências',
        topicos: [
          { id: 'anemia-falciforme', label: 'Anemia Falciforme', conteudo: '' },
          { id: 'anemia-ferropriva', label: 'Anemia Ferropriva', conteudo: '' },
          { id: 'anemia-hemolitica-autoimune', label: 'Anemia Hemolítica Autoimune', conteudo: '' },
          { id: 'anemia-megaloblastica-deficiencia-b12-e-b9-folato', label: 'Anemia Megaloblástica (Deficiência B12 e B9/Folato)', conteudo: '' },
          { id: 'anemias-carenciais', label: 'Anemias Carenciais', conteudo: '' },
          { id: 'anemia-transitoria-da-infancia', label: 'Anemia Transitória da Infância', conteudo: '' },
          { id: 'crises-falcemicas', label: 'Crises Falcêmicas', conteudo: '' },
          { id: 'deficiencia-de-g6pd', label: 'Deficiência de G6PD', conteudo: '' },
        ],
      },
      {
        id: 'coagulacao',
        label: 'Coagulação',
        topicos: [
          { id: 'anticoagulacao-pediatrica', label: 'Anticoagulação Pediátrica', conteudo: '' },
          { id: 'deficiencia-do-fator-vii', label: 'Deficiência do Fator VII', conteudo: '' },
          { id: 'deficiencia-do-fator-xiii', label: 'Deficiência do Fator XIII', conteudo: '' },
          { id: 'doenca-de-von-willebrand', label: 'Doença de von Willebrand', conteudo: '' },
          { id: 'purpura-trombocitopenica-imune', label: 'Púrpura Trombocitopênica Imune', conteudo: '' },
          { id: 'sindrome-antifosfolipide-pediatrica', label: 'Síndrome Antifosfolípide Pediátrica', conteudo: '' },
        ],
      },
      {
        id: 'onco-hemato-e-sindromes',
        label: 'Onco-hemato e Síndromes',
        topicos: [],
      },
      {
        id: 'suporte',
        label: 'Suporte',
        topicos: [
          { id: 'hemotransfusao-pediatrica', label: 'Hemotransfusão Pediátrica', conteudo: '' },
          { id: 'neutropenia-febril', label: 'Neutropenia Febril', conteudo: '' },
        ],
      },
    ],
  },

  {
    id: 'gastrointestinais',
    label: 'Gastrointestinais e Alergias Alimentares',
    icon: '🫃',
    color: 'amber',
    subcategorias: [],
  },

  {
    id: 'dermatologia',
    label: 'Dermatologia',
    icon: '🧴',
    color: 'yellow',
    subcategorias: [],
  },

  {
    id: 'nefrologia',
    label: 'Nefrologia e Urologia',
    icon: '🫘',
    color: 'teal',
    subcategorias: [
      {
        id: 'glomerulopatias',
        label: 'Glomerulopatias',
        topicos: [
          { id: 'glomerulonefrite-difusa-aguda-pos-estreptococica-gnpe', label: 'Glomerulonefrite Difusa Aguda Pós-Estreptocócica (GNPE)', conteudo: '' },
          { id: 'sindrome-nefritica-aguda', label: 'Síndrome Nefrítica Aguda', conteudo: '' },
          { id: 'sindrome-nefrotica', label: 'Síndrome Nefrótica', conteudo: '' },
        ],
      },
      {
        id: 'infeccoes-do-trato-urinario',
        label: 'Infecções do Trato Urinário',
        topicos: [
          { id: 'cistite', label: 'Cistite', conteudo: '' },
          { id: 'infeccao-do-trato-urinario', label: 'Infecção do Trato Urinário (ITU)', conteudo: '' },
          { id: 'pielonefrite-aguda', label: 'Pielonefrite Aguda', conteudo: '' },
        ],
      },
      {
        id: 'insuficiencia-renal',
        label: 'Insuficiência Renal',
        topicos: [
          { id: 'doenca-renal-cronica', label: 'Doença Renal Crônica (DRC)', conteudo: '' },
          { id: 'lesao-renal-aguda', label: 'Lesão Renal Aguda (LRA)', conteudo: '' },
        ],
      },
      {
        id: 'outras-afeccoes',
        label: 'Outras Afecções',
        topicos: [
          { id: 'enurese-noturna', label: 'Enurese Noturna', conteudo: '' },
          { id: 'hipertensao-arterial-secundaria', label: 'Hipertensão Arterial Secundária', conteudo: '' },
          { id: 'litiase-urinaria', label: 'Litíase Urinária', conteudo: '' },
          { id: 'refluxo-vesicoureteral', label: 'Refluxo Vesicoureteral (RVU)', conteudo: '' },
        ],
      },
    ],
  },

  {
    id: 'endocrinologia',
    label: 'Endocrinologia e Distúrbios Metabólicos',
    icon: '🧬',
    color: 'indigo',
    subcategorias: [],
  },

  {
    id: 'neurologia',
    label: 'Neurologia',
    icon: '🧠',
    color: 'purple',
    subcategorias: [
      {
        id: 'epilepsias-e-convulsoes',
        label: 'Epilepsias e Convulsões',
        topicos: [
          { id: 'convulsao-febril', label: 'Convulsão Febril', conteudo: '' },
        ],
      },
      {
        id: 'transtornos-do-neurodesenvolvimento',
        label: 'Transtornos do Neurodesenvolvimento',
        topicos: [
          { id: 'transtorno-do-deficit-de-atencao-com-hiperatividade-tdah', label: 'Transtorno do Déficit de Atenção com Hiperatividade (TDAH)', conteudo: '' },
          { id: 'transtorno-do-espectro-autista-tea', label: 'Transtorno do Espectro Autista (TEA)', conteudo: '' },
        ],
      },
    ],
  },

  {
    id: 'cardiovasculares',
    label: 'Cardiovasculares e Reumatológicas',
    icon: '❤️',
    color: 'pink',
    subcategorias: [],
  },
];