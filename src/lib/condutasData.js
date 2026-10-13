// DADOS DE CONDUTAS E MANEJOS PEDIÁTRICOS
// Catálogo de Diretrizes Clínicas e Protocolos do PedBox
import { getNeonatalConteudo } from './condutasNeonatologiaData.js';
import { getCipeConteudo } from './condutasCirurgiaPediatricaData.js';
import { getUrgenciaConteudo } from './condutasUrgenciaEmergenciaData.js';
import { getPuericulturaConteudo } from './condutasPuericulturaData.js';
import { getRespiratorioConteudo } from './condutasRespiratoriasData.js';
import { getHematologiaConteudo } from './condutasHematologiaData.js';
import { getNefrologiaConteudo } from './condutasNefrologiaData.js';
import { getNeurologiaConteudo } from './condutasNeurologiaData.js';
import { getGastroConteudo } from './condutasGastroenterologiaData.js';
import { getEndocrinoConteudo } from './condutasEndocrinologiaData.js';
import { getSintomasConteudo } from './condutasAbordagemSintomasData.js';


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
          { id: 'adaptacao-neonatal', label: 'Adaptação Neonatal', conteudo: getNeonatalConteudo('adaptacao-neonatal') },
          { id: 'aleitamento-materno', label: 'Aleitamento Materno', conteudo: getNeonatalConteudo('aleitamento-materno') },
          { id: 'alojamento-conjunto', label: 'Alojamento Conjunto', conteudo: getNeonatalConteudo('alojamento-conjunto') },
          { id: 'classificacao-neonatal', label: 'Classificação Neonatal', conteudo: getNeonatalConteudo('classificacao-neonatal') },
          { id: 'cuidados-imediatos-rn', label: 'Cuidados Imediatos do RN', conteudo: getNeonatalConteudo('cuidados-imediatos-rn') },
          { id: 'reanimacao-neonatal', label: 'Reanimação Neonatal', conteudo: getNeonatalConteudo('reanimacao-neonatal') },
          { id: 'triagem-neonatal', label: 'Triagem Neonatal', conteudo: getNeonatalConteudo('triagem-neonatal') },
        ],
      },
      {
        id: 'infeccoes-congenitas',
        label: 'Infecções Congênitas TORCHS',
        topicos: [
          { id: 'citomegaloviro', label: 'Citomegalovirose Congênita', conteudo: getNeonatalConteudo('citomegaloviro') },
          { id: 'herpes-neonatal', label: 'Herpes Neonatal', conteudo: getNeonatalConteudo('herpes-neonatal') },
          { id: 'sifilis-congenita', label: 'Sífilis Congênita', conteudo: getNeonatalConteudo('sifilis-congenita') },
          { id: 'toxoplasmose-congenita', label: 'Toxoplasmose Congênita', conteudo: getNeonatalConteudo('toxoplasmose-congenita') },
        ],
      },
      {
        id: 'malformacoes-neonatais',
        label: 'Malformações Neonatais',
        topicos: [
          { id: 'cardiopatias-congenitas-no-rn', label: 'Cardiopatias Congênitas no RN', conteudo: getNeonatalConteudo('cardiopatias-congenitas-no-rn') },
          { id: 'defeitos-do-tubo-neural', label: 'Defeitos do Tubo Neural', conteudo: getNeonatalConteudo('defeitos-do-tubo-neural') },
          { id: 'displasia-do-desenvolvimento-do-quadril', label: 'Displasia do Desenvolvimento do Quadril', conteudo: getNeonatalConteudo('displasia-do-desenvolvimento-do-quadril') },
          { id: 'hipospadia', label: 'Hipospádia', conteudo: getNeonatalConteudo('hipospadia') },
          { id: 'malformacoes-congenitas-do-rn', label: 'Malformações Congênitas do RN', conteudo: getNeonatalConteudo('malformacoes-congenitas-do-rn') },
          { id: 'persistencia-do-canal-arterial', label: 'Persistência do Canal Arterial', conteudo: getNeonatalConteudo('persistencia-do-canal-arterial') },
        ],
      },
      {
        id: 'patologias-neonatais-especificas',
        label: 'Patologias Neonatais Específicas',
        topicos: [
          { id: 'apneia-da-prematuridade', label: 'Apneia da Prematuridade', conteudo: getNeonatalConteudo('apneia-da-prematuridade') },
          { id: 'disturbios-metabolicos-do-rn', label: 'Distúrbios Metabólicos do RN', conteudo: getNeonatalConteudo('disturbios-metabolicos-do-rn') },
          { id: 'disturbios-neurologicos-do-rn', label: 'Distúrbios Neurológicos do RN', conteudo: getNeonatalConteudo('disturbios-neurologicos-do-rn') },
          { id: 'disturbios-respiratorios-do-rn', label: 'Distúrbios Respiratórios do RN', conteudo: getNeonatalConteudo('disturbios-respiratorios-do-rn') },
          { id: 'enterocolite-necrosante', label: 'Enterocolite Necrosante', conteudo: getNeonatalConteudo('enterocolite-necrosante') },
          { id: 'hiperbilirrubinemia-neonatal', label: 'Hiperbilirrubinemia Neonatal', conteudo: getNeonatalConteudo('hiperbilirrubinemia-neonatal') },
          { id: 'ictericia-neonatal', label: 'Icterícia Neonatal', conteudo: getNeonatalConteudo('ictericia-neonatal') },
          { id: 'leucomalacia-periventricular', label: 'Leucomalácia Periventricular', conteudo: getNeonatalConteudo('leucomalacia-periventricular') },
          { id: 'pneumotorax-neonatal', label: 'Pneumotórax Neonatal', conteudo: getNeonatalConteudo('pneumotorax-neonatal') },
          { id: 'retinopatia-da-prematuridade', label: 'Retinopatia da Prematuridade', conteudo: getNeonatalConteudo('retinopatia-da-prematuridade') },
          { id: 'sepse-neonatal', label: 'Sepse Neonatal', conteudo: getNeonatalConteudo('sepse-neonatal') },
          { id: 'sindrome-de-aspiracao-do-meconio', label: 'Síndrome de Aspiração de Mecônio (SAM)', conteudo: getNeonatalConteudo('sindrome-de-aspiracao-do-meconio') },
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
        id: 'abdome-agudo-cirurgico',
        label: 'Abdome Agudo Cirúrgico',
        topicos: [
          { id: 'apendicite-aguda', label: 'Apendicite Aguda', conteudo: getCipeConteudo('apendicite-aguda') },
        ],
      },
      {
        id: 'atresias-e-esofago',
        label: 'Atresias e Esôfago',
        topicos: [
          { id: 'atresia-duodenal', label: 'Atresia Duodenal', conteudo: getCipeConteudo('atresia-duodenal') },
          { id: 'atresia-esofagica', label: 'Atresia Esofágica', conteudo: getCipeConteudo('atresia-esofagica') },
        ],
      },
      {
        id: 'avaliacao-e-perioperatorio',
        label: 'Avaliação e Perioperatório',
        topicos: [
          { id: 'avaliacao-pre-operatoria-pediatrica', label: 'Avaliação Pré-operatória Pediátrica', conteudo: getCipeConteudo('avaliacao-pre-operatoria-pediatrica') },
          { id: 'suporte-nutricional-no-paciente-cirurgico-infantil', label: 'Suporte Nutricional no Paciente Cirúrgico Infantil', conteudo: getCipeConteudo('suporte-nutricional-no-paciente-cirurgico-infantil') },
        ],
      },
      {
        id: 'cabeca-e-pescoco',
        label: 'Cabeça e Pescoço',
        topicos: [
          { id: 'fenda-labial-e-fenda-palatina', label: 'Fenda Labial e Fenda Palatina', conteudo: getCipeConteudo('fenda-labial-e-fenda-palatina') },
        ],
      },
      {
        id: 'escroto-e-bolsa',
        label: 'Escroto e Bolsa',
        topicos: [
          { id: 'escroto-agudo-pediatrico', label: 'Escroto Agudo Pediátrico', conteudo: getCipeConteudo('escroto-agudo-pediatrico') },
        ],
      },
      {
        id: 'hepatobiliar-e-pancreas',
        label: 'Hepatobiliar e Pâncreas',
        topicos: [
          { id: 'cisto-de-coledoco', label: 'Cisto de Colédoco', conteudo: getCipeConteudo('cisto-de-coledoco') },
        ],
      },
      {
        id: 'malformacoes-anorretais-e-intestinais',
        label: 'Malformações Anorretais e Intestinais',
        topicos: [
          { id: 'anomalias-anorretais', label: 'Anomalias Anorretais', conteudo: getCipeConteudo('anomalias-anorretais') },
          { id: 'atresia-do-intestino-delgado', label: 'Atresia do Intestino Delgado', conteudo: getCipeConteudo('atresia-do-intestino-delgado') },
          { id: 'diverticulo-de-meckel', label: 'Divertículo de Meckel', conteudo: getCipeConteudo('diverticulo-de-meckel') },
          { id: 'doenca-de-hirschsprung', label: 'Doença de Hirschsprung', conteudo: getCipeConteudo('doenca-de-hirschsprung') },
          { id: 'estenose-hipertrofica-do-piloro', label: 'Estenose Hipertrófica do Piloro', conteudo: getCipeConteudo('estenose-hipertrofica-do-piloro') },
          { id: 'invaginacao-intestinal', label: 'Invaginação Intestinal', conteudo: getCipeConteudo('invaginacao-intestinal') },
          { id: 'ma-rotacao-intestinal', label: 'Má Rotação Intestinal', conteudo: getCipeConteudo('ma-rotacao-intestinal') },
          { id: 'obstrucao-intestinal-neonatal', label: 'Obstrução Intestinal Neonatal', conteudo: getCipeConteudo('obstrucao-intestinal-neonatal') },
        ],
      },
      {
        id: 'parede-abdominal',
        label: 'Parede Abdominal',
        topicos: [
          { id: 'gastrosquise', label: 'Gastrosquise', conteudo: getCipeConteudo('gastrosquise') },
          { id: 'hernia-inguinal', label: 'Hérnia Inguinal', conteudo: getCipeConteudo('hernia-inguinal') },
          { id: 'onfalocele', label: 'Onfalocele', conteudo: getCipeConteudo('onfalocele') },
        ],
      },
      {
        id: 'torax-e-pulmao',
        label: 'Tórax e Pulmão',
        topicos: [
          { id: 'hernia-de-morgagni', label: 'Hérnia de Morgagni', conteudo: getCipeConteudo('hernia-de-morgagni') },
          { id: 'hernia-diafragmatica-congenita', label: 'Hérnia Diafragmática Congênita', conteudo: getCipeConteudo('hernia-diafragmatica-congenita') },
          { id: 'malformacao-adenomatoide-cistica-pulmonar-cpam', label: 'Malformação Adenomatoide Cística Pulmonar (CPAM)', conteudo: getCipeConteudo('malformacao-adenomatoide-cistica-pulmonar-cpam') },
          { id: 'malformacao-congenita-das-vias-aereas-pulmonares', label: 'Malformação Congênita das Vias Aéreas Pulmonares', conteudo: getCipeConteudo('malformacao-congenita-das-vias-aereas-pulmonares') },
          { id: 'sequestro-pulmonar', label: 'Sequestro Pulmonar', conteudo: getCipeConteudo('sequestro-pulmonar') },
        ],
      },
      {
        id: 'urologia-cirurgica',
        label: 'Urologia Cirúrgica',
        topicos: [
          { id: 'anomalias-uretrais-e-prolapso-uretral', label: 'Anomalias Uretrais e Prolapso Uretral', conteudo: getCipeConteudo('anomalias-uretrais-e-prolapso-uretral') },
          { id: 'criptorquidia', label: 'Criptorquidia', conteudo: getCipeConteudo('criptorquidia') },
          { id: 'extrofia-vesical-e-epispadia', label: 'Extrofia Vesical e Epispádia', conteudo: getCipeConteudo('extrofia-vesical-e-epispadia') },
          { id: 'fimose-e-parafimose', label: 'Fimose e Parafimose', conteudo: getCipeConteudo('fimose-e-parafimose') },
          { id: 'hidrocele-infantil', label: 'Hidrocele Infantil', conteudo: getCipeConteudo('hidrocele-infantil') },
          { id: 'malformacoes-ureterais-congenitas', label: 'Malformações Ureterais Congênitas', conteudo: getCipeConteudo('malformacoes-ureterais-congenitas') },
          { id: 'micropenis', label: 'Micropênis', conteudo: getCipeConteudo('micropenis') },
          { id: 'obstrucao-da-juncao-ureteropelvica', label: 'Obstrução da Junção Ureteropélvica', conteudo: getCipeConteudo('obstrucao-da-juncao-ureteropelvica') },
          { id: 'urolitiase-pediatrica', label: 'Urolitíase Pediátrica', conteudo: getCipeConteudo('urolitiase-pediatrica') },
          { id: 'valvula-de-uretra-posterior', label: 'Válvula de Uretra Posterior', conteudo: getCipeConteudo('valvula-de-uretra-posterior') },
          { id: 'varicocele-infantil', label: 'Varicocele Infantil', conteudo: getCipeConteudo('varicocele-infantil') },
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
        id: 'disturbios-hidroeletroliticos-e-acido-base',
        label: 'Distúrbios Hidroeletrolíticos e Ácido Base',
        topicos: [
          { id: 'acidose-metabolica', label: 'Acidose Metabólica', conteudo: getUrgenciaConteudo('acidose-metabolica') },
          { id: 'alcalose-metabolica', label: 'Alcalose Metabólica', conteudo: getUrgenciaConteudo('alcalose-metabolica') },
          { id: 'desidratacao', label: 'Desidratação', conteudo: getUrgenciaConteudo('desidratacao') },
          { id: 'gastroenterite-aguda', label: 'Gastroenterite Aguda', conteudo: getUrgenciaConteudo('gastroenterite-aguda') },
        ],
      },
      {
        id: 'emergencias-circulatorias-choque',
        label: 'Emergências Circulatórias (Choque)',
        topicos: [
          { id: 'choque', label: 'Choque', conteudo: getUrgenciaConteudo('choque') },
          { id: 'choque-hipovolemico', label: 'Choque Hipovolêmico', conteudo: getUrgenciaConteudo('choque-hipovolemico') },
          { id: 'choque-septico', label: 'Choque Séptico', conteudo: getUrgenciaConteudo('choque-septico') },
        ],
      },
      {
        id: 'emergencias-metabolicas',
        label: 'Emergências Metabólicas',
        topicos: [
          { id: 'cetoacidose-diabetica', label: 'Cetoacidose Diabética (CAD)', conteudo: getUrgenciaConteudo('cetoacidose-diabetica') },
          { id: 'coma-hipoglicemico', label: 'Coma Hipoglicêmico', conteudo: getUrgenciaConteudo('coma-hipoglicemico') },
        ],
      },
      {
        id: 'emergencias-neurologicas',
        label: 'Emergências Neurológicas',
        topicos: [
          { id: 'crises-epileticas', label: 'Crises Epiléticas', conteudo: getUrgenciaConteudo('crises-epileticas') },
          { id: 'encefalite', label: 'Encefalite', conteudo: getUrgenciaConteudo('encefalite') },
          { id: 'estado-de-mal-epileptico', label: 'Estado de Mal Epiléptico (EME)', conteudo: getUrgenciaConteudo('estado-de-mal-epileptico') },
          { id: 'meningite-bacteriana', label: 'Meningite Bacteriana', conteudo: getUrgenciaConteudo('meningite-bacteriana') },
        ],
      },
      {
        id: 'emergencias-pediatricas-gerais',
        label: 'Emergências Pediátricas Gerais',
        topicos: [
          { id: 'anafilaxia', label: 'Anafilaxia', conteudo: getUrgenciaConteudo('anafilaxia') },
          { id: 'dengue', label: 'Dengue', conteudo: getUrgenciaConteudo('dengue') },
          { id: 'febre-sem-sinais-localizatorios-fssl', label: 'Febre sem Sinais Localizatórios (FSSL)', conteudo: getUrgenciaConteudo('febre-sem-sinais-localizatorios-fssl') },
          { id: 'insuficiencia-respiratoria-aguda', label: 'Insuficiência Respiratória Aguda', conteudo: getUrgenciaConteudo('insuficiencia-respiratoria-aguda') },
          { id: 'intoxicacoes', label: 'Intoxicações', conteudo: getUrgenciaConteudo('intoxicacoes') },
          { id: 'parada-cardiorrespiratoria', label: 'Parada Cardiorrespiratória (PCR)', conteudo: getUrgenciaConteudo('parada-cardiorrespiratoria') },
          { id: 'queimaduras', label: 'Queimaduras', conteudo: getUrgenciaConteudo('queimaduras') },
          { id: 'sindrome-da-morte-subita-do-lactente-smsl', label: 'Síndrome da Morte Súbita do Lactente (SMSL)', conteudo: getUrgenciaConteudo('sindrome-da-morte-subita-do-lactente-smsl') },
          { id: 'trauma', label: 'Trauma', conteudo: getUrgenciaConteudo('trauma') },
        ],
      },
      {
        id: 'suporte-e-via-aerea',
        label: 'Suporte e Via Aérea',
        topicos: [
          { id: 'analgesia-e-sedacao-em-pediatria', label: 'Analgesia e Sedação em Pediatria', conteudo: getUrgenciaConteudo('analgesia-e-sedacao-em-pediatria') },
          { id: 'parada-cardiorrespiratoria-e-reanimacao-cardiopulmonar', label: 'Parada Cardiorrespiratória e Reanimação Cardiopulmonar', conteudo: getUrgenciaConteudo('parada-cardiorrespiratoria-e-reanimacao-cardiopulmonar') },
          { id: 'suporte-basico-de-vida-pediatrico', label: 'Suporte Básico de Vida Pediátrico', conteudo: getUrgenciaConteudo('suporte-basico-de-vida-pediatrico') },
          { id: 'via-aerea-avancada-em-pediatria', label: 'Via Aérea Avançada em Pediatria', conteudo: getUrgenciaConteudo('via-aerea-avancada-em-pediatria') },
        ],
      },
      {
        id: 'ventilacao',
        label: 'Ventilação',
        topicos: [
          { id: 'ventilacao-mecanica-invasiva-na-crianca', label: 'Ventilação Mecânica Invasiva na Criança', conteudo: getUrgenciaConteudo('ventilacao-mecanica-invasiva-na-crianca') },
          { id: 'ventilacao-mecanica-nao-invasiva-na-crianca', label: 'Ventilação Mecânica Não Invasiva na Criança', conteudo: getUrgenciaConteudo('ventilacao-mecanica-nao-invasiva-na-crianca') },
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
          { id: 'alimentacao-complementar', label: 'Alimentação Complementar', conteudo: getPuericulturaConteudo('alimentacao-complementar') },
          { id: 'alimentacao-na-infancia', label: 'Alimentação na Infância', conteudo: getPuericulturaConteudo('alimentacao-na-infancia') },
          { id: 'formulas-infantis', label: 'Fórmulas Infantis', conteudo: getPuericulturaConteudo('formulas-infantis') },
          { id: 'suplementacao-de-vitaminas-e-ferro', label: 'Suplementação de Vitaminas e Ferro', conteudo: getPuericulturaConteudo('suplementacao-de-vitaminas-e-ferro') },
        ],
      },
      {
        id: 'crescimento-e-desenvolvimento',
        label: 'Crescimento e Desenvolvimento',
        topicos: [
          { id: 'atraso-constitucional-do-desenvolvimento', label: 'Atraso Constitucional do Desenvolvimento', conteudo: getPuericulturaConteudo('atraso-constitucional-do-desenvolvimento') },
          { id: 'avaliacao-do-crescimento', label: 'Avaliação do Crescimento', conteudo: getPuericulturaConteudo('avaliacao-do-crescimento') },
        ],
      },
      {
        id: 'cuidados-em-puericultura',
        label: 'Cuidados em Puericultura',
        topicos: [
          { id: 'choro-no-lactente', label: 'Choro no Lactente', conteudo: getPuericulturaConteudo('choro-no-lactente') },
          { id: 'colica-no-lactente', label: 'Cólica no Lactente', conteudo: getPuericulturaConteudo('colica-no-lactente') },
          { id: 'cuidados-gerais-com-o-recem-nascido', label: 'Cuidados Gerais com o Recém-Nascido', conteudo: getPuericulturaConteudo('cuidados-gerais-com-o-recem-nascido') },
        ],
      },
      {
        id: 'fichas-de-acompanhamento',
        label: 'Fichas de Acompanhamento',
        topicos: [
          { id: 'ficha-inicial-para-acompanhamento', label: 'Ficha inicial para acompanhamento', conteudo: getPuericulturaConteudo('ficha-inicial-para-acompanhamento') },
          { id: 'ficha-de-acompanhamento-15-dias-a-1-mes', label: 'Ficha de Acompanhamento — 15 dias a 1 mês', conteudo: getPuericulturaConteudo('ficha-de-acompanhamento-15-dias-a-1-mes') },
          { id: 'ficha-de-acompanhamento-1-a-2-meses', label: 'Ficha de Acompanhamento — 1 a 2 meses', conteudo: getPuericulturaConteudo('ficha-de-acompanhamento-1-a-2-meses') },
          { id: 'ficha-de-acompanhamento-2-a-4-meses', label: 'Ficha de Acompanhamento — 2 a 4 meses', conteudo: getPuericulturaConteudo('ficha-de-acompanhamento-2-a-4-meses') },
          { id: 'ficha-de-acompanhamento-4-a-6-meses', label: 'Ficha de Acompanhamento — 4 a 6 meses', conteudo: getPuericulturaConteudo('ficha-de-acompanhamento-4-a-6-meses') },
          { id: 'ficha-de-acompanhamento-6-a-9-meses', label: 'Ficha de Acompanhamento — 6 a 9 meses', conteudo: getPuericulturaConteudo('ficha-de-acompanhamento-6-a-9-meses') },
          { id: 'ficha-de-acompanhamento-9-a-12-meses', label: 'Ficha de Acompanhamento — 9 a 12 meses', conteudo: getPuericulturaConteudo('ficha-de-acompanhamento-9-a-12-meses') },
          { id: 'ficha-de-acompanhamento-12-a-18-meses', label: 'Ficha de Acompanhamento — 12 a 18 meses', conteudo: getPuericulturaConteudo('ficha-de-acompanhamento-12-a-18-meses') },
          { id: 'ficha-de-acompanhamento-18-a-24-meses', label: 'Ficha de Acompanhamento — 18 a 24 meses', conteudo: getPuericulturaConteudo('ficha-de-acompanhamento-18-a-24-meses') },
          { id: 'ficha-de-acompanhamento-2-a-5-anos', label: 'Ficha de Acompanhamento — 2 a 5 anos', conteudo: getPuericulturaConteudo('ficha-de-acompanhamento-2-a-5-anos') },
        ],
      },
      {
        id: 'prevencao-e-risco',
        label: 'Prevenção e Risco',
        topicos: [
          { id: 'sindrome-da-morte-subita-infantil', label: 'Síndrome da Morte Súbita Infantil', conteudo: getPuericulturaConteudo('sindrome-da-morte-subita-infantil') },
        ],
      },
      {
        id: 'saude-bucal',
        label: 'Saúde Bucal',
        topicos: [
          { id: 'denticao-e-higiene-bucal', label: 'Dentição e Higiene Bucal', conteudo: getPuericulturaConteudo('denticao-e-higiene-bucal') },
        ],
      },
      {
        id: 'saude-escolar-e-comportamento',
        label: 'Saúde Escolar e Comportamento',
        topicos: [
          { id: 'bullying-e-violencia-escolar', label: 'Bullying e Violência Escolar', conteudo: getPuericulturaConteudo('bullying-e-violencia-escolar') },
        ],
      },
      {
        id: 'triagens-neonatais',
        label: 'Triagens Neonatais',
        topicos: [
          { id: 'teste-da-linguinha', label: 'Teste da Linguinha', conteudo: getPuericulturaConteudo('teste-da-linguinha') },
          { id: 'teste-da-orelhinha', label: 'Teste da Orelhinha', conteudo: getPuericulturaConteudo('teste-da-orelhinha') },
          { id: 'teste-do-coracaozinho', label: 'Teste do Coraçãozinho', conteudo: getPuericulturaConteudo('teste-do-coracaozinho') },
          { id: 'teste-do-olhinho', label: 'Teste do Olhinho', conteudo: getPuericulturaConteudo('teste-do-olhinho') },
          { id: 'triagem-neonatal', label: 'Triagem Neonatal', conteudo: getPuericulturaConteudo('triagem-neonatal') },
        ],
      },
      {
        id: 'vacinacao',
        label: 'Vacinação',
        topicos: [
          { id: 'eventos-adversos-em-vacinacao', label: 'Eventos Adversos em Vacinação', conteudo: getPuericulturaConteudo('eventos-adversos-em-vacinacao') },
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
          { id: 'derrame-pleural', label: 'Derrame Pleural', conteudo: getRespiratorioConteudo('derrame-pleural') },
          { id: 'mastoidite', label: 'Mastoidite', conteudo: getRespiratorioConteudo('mastoidite') },
          { id: 'pneumotorax', label: 'Pneumotórax', conteudo: getRespiratorioConteudo('pneumotorax') },
        ],
      },
      {
        id: 'doencas-obstrutivas-cronicas',
        label: 'Doenças Obstrutivas e Crônicas',
        topicos: [
          { id: 'apneia-do-sono', label: 'Apneia do Sono', conteudo: getRespiratorioConteudo('apneia-do-sono') },
          { id: 'asma', label: 'Asma', conteudo: getRespiratorioConteudo('asma') },
          { id: 'displasia-broncopulmonar', label: 'Displasia Broncopulmonar', conteudo: getRespiratorioConteudo('displasia-broncopulmonar') },
          { id: 'fibrose-cistica', label: 'Fibrose Cística', conteudo: getRespiratorioConteudo('fibrose-cistica') },
          { id: 'hipertensao-pulmonar', label: 'Hipertensão Pulmonar', conteudo: getRespiratorioConteudo('hipertensao-pulmonar') },
          { id: 'rinite-alergica', label: 'Rinite Alérgica', conteudo: getRespiratorioConteudo('rinite-alergica') },
        ],
      },
      {
        id: 'doencas-por-corpo-estranho',
        label: 'Doenças por Corpo Estranho',
        topicos: [
          { id: 'aspiracao-de-corpo-estranho', label: 'Aspiração de Corpo Estranho', conteudo: getRespiratorioConteudo('aspiracao-de-corpo-estranho') },
        ],
      },
      {
        id: 'infeccoes-respiratorias',
        label: 'Infecções Respiratórias',
        topicos: [
          { id: 'bronquiolite-viral', label: 'Bronquiolite Viral', conteudo: getRespiratorioConteudo('bronquiolite-viral') },
          { id: 'coqueluche-pertussis', label: 'Coqueluche (Pertussis)', conteudo: getRespiratorioConteudo('coqueluche-pertussis') },
          { id: 'faringoamigdalite-aguda', label: 'Faringoamigdalite Aguda', conteudo: getRespiratorioConteudo('faringoamigdalite-aguda') },
          { id: 'gripe-influenza', label: 'Gripe (Influenza)', conteudo: getRespiratorioConteudo('gripe-influenza') },
          { id: 'otite-media-aguda-oma', label: 'Otite Média Aguda (OMA)', conteudo: getRespiratorioConteudo('otite-media-aguda-oma') },
          { id: 'pneumonia', label: 'Pneumonia', conteudo: getRespiratorioConteudo('pneumonia') },
          { id: 'pneumonia-adquirida-na-comunidade', label: 'Pneumonia Adquirida na Comunidade (PAC)', conteudo: getRespiratorioConteudo('pneumonia-adquirida-na-comunidade') },
          { id: 'pneumonia-hospitalar', label: 'Pneumonia Hospitalar', conteudo: getRespiratorioConteudo('pneumonia-hospitalar') },
          { id: 'rinofaringite-aguda-resfriado-comum', label: 'Rinofaringite Aguda (Resfriado Comum)', conteudo: getRespiratorioConteudo('rinofaringite-aguda-resfriado-comum') },
          { id: 'tuberculose', label: 'Tuberculose', conteudo: getRespiratorioConteudo('tuberculose') },
        ],
      },
      {
        id: 'malformacoes-outras',
        label: 'Malformações e Outras',
        topicos: [
          { id: 'malformacoes-pulmonares', label: 'Malformações Pulmonares', conteudo: getRespiratorioConteudo('malformacoes-pulmonares') },
        ],
      },
      {
        id: 'sindromes-respiratorias-agudas',
        label: 'Síndromes Respiratórias Agudas',
        topicos: [
          { id: 'epiglotite', label: 'Epiglotite', conteudo: getRespiratorioConteudo('epiglotite') },
          { id: 'laringotraqueite-viral-crupe', label: 'Laringotraqueíte Viral (Crupe)', conteudo: getRespiratorioConteudo('laringotraqueite-viral-crupe') },
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
          { id: 'anemia-falciforme', label: 'Anemia Falciforme', conteudo: getHematologiaConteudo('anemia-falciforme') },
          { id: 'anemia-ferropriva', label: 'Anemia Ferropriva', conteudo: getHematologiaConteudo('anemia-ferropriva') },
          { id: 'anemia-hemolitica-autoimune', label: 'Anemia Hemolítica Autoimune', conteudo: getHematologiaConteudo('anemia-hemolitica-autoimune') },
          { id: 'anemia-megaloblastica-deficiencia-b12-e-b9-folato', label: 'Anemia Megaloblástica (Deficiência B12 e B9/Folato)', conteudo: getHematologiaConteudo('anemia-megaloblastica-deficiencia-b12-e-b9-folato') },
          { id: 'anemias-carenciais', label: 'Anemias Carenciais', conteudo: getHematologiaConteudo('anemias-carenciais') },
          { id: 'anemia-transitoria-da-infancia', label: 'Anemia Transitória da Infância', conteudo: getHematologiaConteudo('anemia-transitoria-da-infancia') },
          { id: 'crises-falcemicas', label: 'Crises Falcêmicas', conteudo: getHematologiaConteudo('crises-falcemicas') },
          { id: 'deficiencia-de-g6pd', label: 'Deficiência de G6PD', conteudo: getHematologiaConteudo('deficiencia-de-g6pd') },
          { id: 'esferocitose-hereditaria', label: 'Esferocitose Hereditária', conteudo: getHematologiaConteudo('esferocitose-hereditaria') },
          { id: 'talassemias', label: 'Talassemias', conteudo: getHematologiaConteudo('talassemias') },
        ],
      },
      {
        id: 'coagulacao',
        label: 'Coagulação',
        topicos: [
          { id: 'anticoagulacao-pediatrica', label: 'Anticoagulação Pediátrica', conteudo: getHematologiaConteudo('anticoagulacao-pediatrica') },
          { id: 'deficiencia-do-fator-vii', label: 'Deficiência do Fator VII', conteudo: getHematologiaConteudo('deficiencia-do-fator-vii') },
          { id: 'deficiencia-do-fator-xiii', label: 'Deficiência do Fator XIII', conteudo: getHematologiaConteudo('deficiencia-do-fator-xiii') },
          { id: 'doenca-de-von-willebrand', label: 'Doença de von Willebrand', conteudo: getHematologiaConteudo('doenca-de-von-willebrand') },
          { id: 'hemofilia-a', label: 'Hemofilia A', conteudo: getHematologiaConteudo('hemofilia-a') },
          { id: 'hemofilia-b', label: 'Hemofilia B', conteudo: getHematologiaConteudo('hemofilia-b') },
          { id: 'purpura-trombocitopenica-imune', label: 'Púrpura Trombocitopênica Imune', conteudo: getHematologiaConteudo('purpura-trombocitopenica-imune') },
          { id: 'sindrome-antifosfolipide-pediatrica', label: 'Síndrome Antifosfolípide Pediátrica', conteudo: getHematologiaConteudo('sindrome-antifosfolipide-pediatrica') },
        ],
      },
      {
        id: 'suporte',
        label: 'Suporte',
        topicos: [
          { id: 'abordagem-da-pancitopenia', label: 'Abordagem da Pancitopenia', conteudo: getHematologiaConteudo('abordagem-da-pancitopenia') },
          { id: 'hemotransfusao-pediatrica', label: 'Hemotransfusão Pediátrica', conteudo: getHematologiaConteudo('hemotransfusao-pediatrica') },
          { id: 'neutropenia-febril', label: 'Neutropenia Febril', conteudo: getHematologiaConteudo('neutropenia-febril') },
        ],
      },
    ],
  },

  {
    id: 'gastrointestinais',
    label: 'Gastrointestinais e Alergias Alimentares',
    icon: '🫃',
    color: 'amber',
    subcategorias: [
      {
        id: 'disturbios-funcionais-e-motilidade',
        label: 'Distúrbios Funcionais e Motilidade',
        topicos: [
          { id: 'constipacao-funcional', label: 'Constipação Funcional', conteudo: getGastroConteudo('constipacao-funcional') },
          { id: 'refluxo-gastroesofagico', label: 'Refluxo Gastroesofágico', conteudo: getGastroConteudo('refluxo-gastroesofagico') },
        ],
      },
      {
        id: 'alergias-e-doencas-intestinais',
        label: 'Alergias e Doenças Intestinais',
        topicos: [
          { id: 'alergia-a-proteina-do-leite-de-vaca-aplv', label: 'Alergia à Proteína do Leite de Vaca (APLV)', conteudo: getGastroConteudo('alergia-a-proteina-do-leite-de-vaca-aplv') },
          { id: 'doenca-celiaca', label: 'Doença Celíaca', conteudo: getGastroConteudo('doenca-celiaca') },
        ],
      },
    ],
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
        label: 'Glomerulopatias e Microangiopatias',
        topicos: [
          { id: 'glomerulonefrite-difusa-aguda-pos-estreptococica-gnpe', label: 'Glomerulonefrite Difusa Aguda Pós-Estreptocócica (GNPE)', conteudo: getNefrologiaConteudo('glomerulonefrite-difusa-aguda-pos-estreptococica-gnpe') },
          { id: 'sindrome-hemolitico-uremica', label: 'Síndrome Hemolítico-Urêmica (SHU)', conteudo: getNefrologiaConteudo('sindrome-hemolitico-uremica') },
          { id: 'sindrome-nefritica-aguda', label: 'Síndrome Nefrítica Aguda', conteudo: getNefrologiaConteudo('sindrome-nefritica-aguda') },
          { id: 'sindrome-nefrotica', label: 'Síndrome Nefrótica', conteudo: getNefrologiaConteudo('sindrome-nefrotica') },
          { id: 'vasculite-por-iga-e-acometimento-renal', label: 'Vasculite por IgA e Acometimento Renal', conteudo: getNefrologiaConteudo('vasculite-por-iga-e-acometimento-renal') },
        ],
      },
      {
        id: 'infeccoes-do-trato-urinario',
        label: 'Infecções do Trato Urinário',
        topicos: [
          { id: 'cistite', label: 'Cistite', conteudo: getNefrologiaConteudo('cistite') },
          { id: 'infeccao-do-trato-urinario', label: 'Infecção do Trato Urinário (ITU)', conteudo: getNefrologiaConteudo('infeccao-do-trato-urinario') },
          { id: 'pielonefrite-aguda', label: 'Pielonefrite Aguda', conteudo: getNefrologiaConteudo('pielonefrite-aguda') },
        ],
      },
      {
        id: 'insuficiencia-renal',
        label: 'Insuficiência Renal',
        topicos: [
          { id: 'doenca-renal-cronica', label: 'Doença Renal Crônica (DRC)', conteudo: getNefrologiaConteudo('doenca-renal-cronica') },
          { id: 'lesao-renal-aguda', label: 'Lesão Renal Aguda (LRA)', conteudo: getNefrologiaConteudo('lesao-renal-aguda') },
        ],
      },
      {
        id: 'outras-afeccoes',
        label: 'Distúrbios Funcionais e Alterações Urinárias',
        topicos: [
          { id: 'disfuncao-vesicointestinal', label: 'Disfunção Vesicointestinal', conteudo: getNefrologiaConteudo('disfuncao-vesicointestinal') },
          { id: 'enurese-noturna', label: 'Enurese Noturna', conteudo: getNefrologiaConteudo('enurese-noturna') },
          { id: 'hipertensao-arterial-secundaria', label: 'Hipertensão Arterial Secundária', conteudo: getNefrologiaConteudo('hipertensao-arterial-secundaria') },
          { id: 'litiase-urinaria', label: 'Litíase Urinária', conteudo: getNefrologiaConteudo('litiase-urinaria') },
          { id: 'proteinuria-e-hematuria-isoladas', label: 'Proteinúria e Hematúria Isoladas', conteudo: getNefrologiaConteudo('proteinuria-e-hematuria-isoladas') },
          { id: 'refluxo-vesicoureteral', label: 'Refluxo Vesicoureteral (RVU)', conteudo: getNefrologiaConteudo('refluxo-vesicoureteral') },
        ],
      },
    ],
  },

  {
    id: 'endocrinologia',
    label: 'Endocrinologia e Distúrbios Metabólicos',
    icon: '🧬',
    color: 'indigo',
    subcategorias: [
      {
        id: 'diabetes-e-metabolismo',
        label: 'Diabetes e Metabolismo',
        topicos: [
          { id: 'diabetes-mellitus-tipo-1', label: 'Diabetes Mellitus Tipo 1', conteudo: getEndocrinoConteudo('diabetes-mellitus-tipo-1') },
          { id: 'obesidade-pediatrica', label: 'Obesidade Pediátrica', conteudo: getEndocrinoConteudo('obesidade-pediatrica') },
        ],
      },
      {
        id: 'crescimento-e-desenvolvimento-endocrino',
        label: 'Crescimento e Desenvolvimento Endócrino',
        topicos: [
          { id: 'baixa-estatura', label: 'Baixa Estatura', conteudo: getEndocrinoConteudo('baixa-estatura') },
          { id: 'hipotireoidismo-na-infancia', label: 'Hipotireoidismo na Infância', conteudo: getEndocrinoConteudo('hipotireoidismo-na-infancia') },
          { id: 'puberdade-precoce', label: 'Puberdade Precoce', conteudo: getEndocrinoConteudo('puberdade-precoce') },
        ],
      },
    ],
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
          { id: 'convulsao-febril', label: 'Convulsão Febril', conteudo: getNeurologiaConteudo('convulsao-febril') },
          { id: 'epilepsias-da-infancia-e-tratamento-de-manutencao', label: 'Epilepsias da Infância e Tratamento de Manutenção', conteudo: getNeurologiaConteudo('epilepsias-da-infancia-e-tratamento-de-manutencao') },
          { id: 'espasmos-epilepticos-infantis', label: 'Espasmos Epilépticos Infantis', conteudo: getNeurologiaConteudo('espasmos-epilepticos-infantis') },
        ],
      },
      {
        id: 'cefaleias',
        label: 'Cefaleias',
        topicos: [
          { id: 'cefaleia-na-infancia', label: 'Cefaleia na Infância', conteudo: getNeurologiaConteudo('cefaleia-na-infancia') },
          { id: 'enxaqueca-pediatrica', label: 'Enxaqueca Pediátrica', conteudo: getNeurologiaConteudo('enxaqueca-pediatrica') },
        ],
      },
      {
        id: 'transtornos-do-neurodesenvolvimento',
        label: 'Transtornos do Neurodesenvolvimento',
        topicos: [
          { id: 'atraso-global-do-desenvolvimento-e-regressao', label: 'Atraso Global do Desenvolvimento e Regressão', conteudo: getNeurologiaConteudo('atraso-global-do-desenvolvimento-e-regressao') },
          { id: 'transtorno-do-deficit-de-atencao-com-hiperatividade-tdah', label: 'Transtorno do Déficit de Atenção com Hiperatividade (TDAH)', conteudo: getNeurologiaConteudo('transtorno-do-deficit-de-atencao-com-hiperatividade-tdah') },
          { id: 'transtorno-do-espectro-autista-tea', label: 'Transtorno do Espectro Autista (TEA)', conteudo: getNeurologiaConteudo('transtorno-do-espectro-autista-tea') },
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
  {
    id: 'abordagem-sintomas',
    label: 'Abordagem de Sinais e Sintomas',
    icon: '🩺',
    color: 'teal',
    subcategorias: [
      {
        id: 'sintomas-sistemicos-e-hematologicos',
        label: 'Sinais e Sintomas Sistêmicos',
        topicos: [
          { id: 'abordagem-da-crianca-com-edema', label: 'Abordagem da Criança com Edema', conteudo: getSintomasConteudo('abordagem-da-crianca-com-edema') },
          { id: 'abordagem-da-crianca-com-palidez', label: 'Abordagem da Criança com Palidez', conteudo: getSintomasConteudo('abordagem-da-crianca-com-palidez') },
          { id: 'abordagem-da-crianca-com-petequias', label: 'Abordagem da Criança com Petéquias', conteudo: getSintomasConteudo('abordagem-da-crianca-com-petequias') },
        ],
      },
      {
        id: 'sintomas-neurologicos-e-urinarios',
        label: 'Sinais Neurológicos e Urinários',
        topicos: [
          { id: 'abordagem-da-crianca-com-cefaleia', label: 'Abordagem da Criança com Cefaleia', conteudo: getSintomasConteudo('abordagem-da-crianca-com-cefaleia') },
          { id: 'abordagem-da-crianca-com-hematuria', label: 'Abordagem da Criança com Hematúria', conteudo: getSintomasConteudo('abordagem-da-crianca-com-hematuria') },
          { id: 'abordagem-da-crianca-com-perda-de-habilidades', label: 'Abordagem da Criança com Perda de Habilidades', conteudo: getSintomasConteudo('abordagem-da-crianca-com-perda-de-habilidades') },
        ],
      },
    ],
  },
];