/**
 * Base de Dados: Amamentação e uso de medicamentos e outras substâncias
 * Referência Oficial:
 * Brasil. Ministério da Saúde. Secretaria da Atenção Primária à Saúde.
 * Departamento de Gestão do Cuidado Integral.
 * Amamentação e uso de medicamentos e outras substâncias [recurso eletrônico]
 * 3. ed. – Brasília : Ministério da Saúde, 2025. 121 p.
 * ISBN 978-65-5993-866-7
 * Link: http://bvsms.saude.gov.br/bvs/publicacoes/amamentacao_uso_medicamentos_outras_substancias_3ed.pdf
 */

export const AMAMENTACAO_METADATA = {
  titulo: 'Amamentação e Uso de Medicamentos e Outras Substâncias',
  edicao: '3ª Edição – 2025',
  orgao: 'Ministério da Saúde do Brasil',
  departamento: 'Secretaria da Atenção Primária à Saúde (SAPS) / DGCI',
  cidade: 'Brasília - DF',
  ano: 2025,
  paginas: 121,
  isbn: '978-65-5993-866-7',
  pdfUrl: 'http://bvsms.saude.gov.br/bvs/publicacoes/amamentacao_uso_medicamentos_outras_substancias_3ed.pdf',
  totalItens: 1301
};

export const NIVEIS_SEGURANCA = {
  1: {
    nivel: 1,
    label: 'Nível 1',
    titulo: 'Uso compatível com a amamentação',
    resumo: 'Seguro. Sem evidências de efeitos adversos clinicamente relevantes.',
    cor: 'emerald',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
    dotClass: 'bg-emerald-500',
    icon: 'CheckCircle2',
    significado: 'Fármacos e substâncias com segurança documentada ou de risco desprezível para a criança amamentada. Não há necessidade de suspender o aleitamento materno.'
  },
  2: {
    nivel: 2,
    label: 'Nível 2',
    titulo: 'Dados limitados: uso provavelmente compatível',
    resumo: 'Poucos estudos, mas propriedades farmacocinéticas sugerem segurança.',
    cor: 'sky',
    badgeClass: 'bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
    dotClass: 'bg-sky-500',
    icon: 'Info',
    significado: 'Existem poucos dados na literatura, mas a farmacocinética do fármaco e a experiência clínica disponível indicam baixo risco de efeitos adversos no lactente.'
  },
  3: {
    nivel: 3,
    label: 'Nível 3',
    titulo: 'Possibilidade de efeitos adversos / Monitorar',
    resumo: 'Uso provavelmente compatível, com recomendação de monitorar o bebê.',
    cor: 'amber',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
    dotClass: 'bg-amber-500',
    icon: 'AlertTriangle',
    significado: 'Dados limitados ou ausentes. Uso provavelmente compatível, mas existe possibilidade teórica ou descrita de efeitos colaterais. Recomenda-se monitorar atentamente o lactente (sonolência, sucção, diarreia, etc.).'
  },
  4: {
    nivel: 4,
    label: 'Nível 4',
    titulo: 'Uso possivelmente perigoso / Risco potencial',
    resumo: 'Há relatos ou riscos de toxicidade. Avaliar substituição ou suspensão temporária.',
    cor: 'orange',
    badgeClass: 'bg-orange-50 text-orange-800 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800',
    dotClass: 'bg-orange-500',
    icon: 'AlertOctagon',
    significado: 'Evidência documentada ou forte suspeita de risco de toxicidade ou efeitos adversos significativos para o bebê amamentado. Deve-se considerar fármacos alternativos mais seguros ou avaliar a suspensão temporária da amamentação.'
  },
  5: {
    nivel: 5,
    label: 'Nível 5',
    titulo: 'Uso contraindicado durante a amamentação',
    resumo: 'Contraindicado. Toxicidade comprovada ou risco severo à criança.',
    cor: 'rose',
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
    dotClass: 'bg-rose-500',
    icon: 'XCircle',
    significado: 'Fármacos e substâncias com contraindicação absoluta durante a amamentação devido à toxicidade grave demonstrada no lactente (ex: agentes citotóxicos, drogas ilícitas, radiofármacos).'
  }
};

export const AMAMENTACAO_DATA = [
  {
    "id": "mam_0001",
    "nome": "Abacavir",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0002",
    "nome": "Abaloparatida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0003",
    "nome": "Acamprosato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0004",
    "nome": "Acarbose",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0005",
    "nome": "Acebrofilina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0006",
    "nome": "Acebutolol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0007",
    "nome": "Acessulfame",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0008",
    "nome": "Acetato de alumínio",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0009",
    "nome": "Acetazolamida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0010",
    "nome": "Acetoexamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Risco teórico de hipoglicemia. Deve-se monitorar o lactente."
  },
  {
    "id": "mam_0011",
    "nome": "Acetonida de triancinolona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0012",
    "nome": "Aciclovir",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0013",
    "nome": "Acitretina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0014",
    "nome": "ACTH (corticotropina)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0015",
    "nome": "Açafrão (Crocus sativus e Curcuma longa)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0016",
    "nome": "Adapaleno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0017",
    "nome": "Adefovir",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0018",
    "nome": "Adenosina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0019",
    "nome": "Adrenalina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0020",
    "nome": "Adrenalina (epinefrina)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0021",
    "nome": "Adrenalina ou epinefrina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0022",
    "nome": "Airborne (ervas + vitaminas e minerais)",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Elevada concentração de vitamina A e risco teórico de intoxicação com uso regular."
  },
  {
    "id": "mam_0023",
    "nome": "Albendazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0024",
    "nome": "Albumina humana",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0025",
    "nome": "Albuterol",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0026",
    "nome": "Alcaftadina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0027",
    "nome": "Alcurônio (Cloreto)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0028",
    "nome": "Alefacept",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0029",
    "nome": "Alemtuzumab",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Embora o peso molecular deste medicamento seja muito grande e espere-se que a quantidade no leite materno seja excepcionalmente baixa, não há dados de longo prazo sobre a segurança do uso de medicamentos imunomoduladores em mães que amamentam."
  },
  {
    "id": "mam_0030",
    "nome": "Alendronato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0031",
    "nome": "Alfentanil",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0032",
    "nome": "Alho (Allium sativum)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0033",
    "nome": "Alirocumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0034",
    "nome": "Alisquireno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0035",
    "nome": "Alizaprida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0036",
    "nome": "Almotriptano",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0037",
    "nome": "Alopurinol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0038",
    "nome": "Alosetron",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0039",
    "nome": "Alprazolam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0040",
    "nome": "Alteplase",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0041",
    "nome": "Altetramina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Recomenda-se a suspensão da amamentação por 72 horas após a administração do fármaco."
  },
  {
    "id": "mam_0042",
    "nome": "Alvimopan",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0043",
    "nome": "Amantadina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0044",
    "nome": "Ambrisentana",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0045",
    "nome": "Ambroxol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0046",
    "nome": "Amicacina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0047",
    "nome": "Amilorida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0048",
    "nome": "Aminofilina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0049",
    "nome": "Amiodarona",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0050",
    "nome": "Amissulprida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0051",
    "nome": "Amitriptilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0052",
    "nome": "Amlodipina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0053",
    "nome": "Amodiaquina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0054",
    "nome": "Amoxapina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0055",
    "nome": "Amoxicilina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0056",
    "nome": "Amoxicilina + Claritromicina + Lansoprazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0057",
    "nome": "Amoxicilina + Clavulanato de potássio",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0058",
    "nome": "Amônia",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0059",
    "nome": "Ampicilina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0060",
    "nome": "Ampicilina + Sulbactam",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0061",
    "nome": "Anagrelida HCL",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0062",
    "nome": "Anakinra",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0063",
    "nome": "Anastrozol",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0064",
    "nome": "Anfepramona",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0065",
    "nome": "Anfetaminas",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Para minimizar o risco, após o último uso recreativo de anfetamina, é aconselhável aguardar 48 a 56 horas antes de amamentar novamente. Deve-se evitar o uso recreacional durante a amamentação."
  },
  {
    "id": "mam_0066",
    "nome": "Anfotericina B",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0067",
    "nome": "Anidulafungin",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0068",
    "nome": "Antimoniato de meglumina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0069",
    "nome": "Apazona (azapropazona)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Preferir uso de medicamento alternativo, especialmente durante a amamentação de recém- nascido ou prematuro."
  },
  {
    "id": "mam_0070",
    "nome": "Apixabana",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0071",
    "nome": "Apremilast",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0072",
    "nome": "Aprepitanto",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0073",
    "nome": "Arformoterol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0074",
    "nome": "Argatobran",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0075",
    "nome": "Aripiprazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0076",
    "nome": "Armodafinil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0077",
    "nome": "Artemeter + Lumefantrina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0078",
    "nome": "Artesunato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0079",
    "nome": "Articaína",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0080",
    "nome": "Asenapina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0081",
    "nome": "Asparaginase",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por, pelo menos, 7 dias após a administração do fármaco."
  },
  {
    "id": "mam_0082",
    "nome": "Aspartame",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0083",
    "nome": "Astemizol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0084",
    "nome": "Atenolol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0085",
    "nome": "Atogepant",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0086",
    "nome": "Atomoxetina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0087",
    "nome": "Atorvastatina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0088",
    "nome": "Atosibano",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0089",
    "nome": "Atovaquona + Proguanil",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Até o momento, esta combinação de fármacos não é recomendada pela Organização Mundial da Saúde (OMS) para o tratamento de malária em mulheres lactantes."
  },
  {
    "id": "mam_0090",
    "nome": "Atracúrio (Besilato)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0091",
    "nome": "Atropina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0092",
    "nome": "Atropina (sulfato)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0093",
    "nome": "Ayahuasca",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por 17 a 40 horas após a ingestão."
  },
  {
    "id": "mam_0094",
    "nome": "Azatadina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0095",
    "nome": "Azatioprina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Os riscos para o bebê são provavelmente baixos. Deve-se monitorar o lactente quanto a sinais de imunossupressão, leucopenia, trombocitopenia, hepatotoxicidade, pancreatite."
  },
  {
    "id": "mam_0096",
    "nome": "Azelastina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0097",
    "nome": "Azitromicina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0098",
    "nome": "Aztreonam",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0099",
    "nome": "Azul de metileno",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0100",
    "nome": "Ácido acetilsalicílico",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0101",
    "nome": "Ácido acético",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0102",
    "nome": "Ácido aminolevulínico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0103",
    "nome": "Ácido ascórbico (vitamina C)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0104",
    "nome": "Ácido azelaico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0105",
    "nome": "Ácido benzoico",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0106",
    "nome": "Ácido Bórico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0107",
    "nome": "Ácido clavulânico (clavulanato)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0108",
    "nome": "Ácido docoexanoico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0109",
    "nome": "Ácido eicosapentaenoico (EPA)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0110",
    "nome": "Ácido etacrínico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0111",
    "nome": "Ácido flufenâmico",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0112",
    "nome": "Ácido folínico",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0113",
    "nome": "Ácido fólico",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0114",
    "nome": "Ácido fólico (vitamina B9)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0115",
    "nome": "Ácido fusídico",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0116",
    "nome": "Ácido gama- -hidroxibutírico",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Quando exposta, a lactante deve descartar o leite por, no mínimo, 24 horas antes de retomar a amamentação."
  },
  {
    "id": "mam_0117",
    "nome": "Ácido hialunônico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0118",
    "nome": "Ácido iopanóico",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0119",
    "nome": "Ácido ioxitalâmico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0120",
    "nome": "Ácido mefenâmico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0121",
    "nome": "Ácido nalidíxico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0122",
    "nome": "Ácido nicotínico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0123",
    "nome": "Ácido para-aminobenzoico, fator de proteção solar",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0124",
    "nome": "Ácido paraminossalicílico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0125",
    "nome": "Ácido retinoico(tretinoína) Uso tópico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0126",
    "nome": "Ácido salicílico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0127",
    "nome": "Ácido tricloroacético (TCA)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0128",
    "nome": "Ácido valproico",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Relatos questionáveis de doença hemorrágica e icterícia em lactentes após uso materno deste fármaco."
  },
  {
    "id": "mam_0129",
    "nome": "Álcool (etanol)",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Evitar amamentar por cerca de duas horas após a ingestão de uma dose de bebida alcoólica."
  },
  {
    "id": "mam_0130",
    "nome": "Babosa (Aloe vera)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0131",
    "nome": "Bacampicilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0132",
    "nome": "Bacitracina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0133",
    "nome": "Baclofeno",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0134",
    "nome": "Baloxavir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0135",
    "nome": "Balsalazida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0136",
    "nome": "Bandeira doce, raiz (Acorus calamus)",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0137",
    "nome": "Beclometasona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0138",
    "nome": "Benazepril",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0139",
    "nome": "Bendroflumetiazina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0140",
    "nome": "Benoxinato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0141",
    "nome": "Benralizumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0142",
    "nome": "Benzalcônio (cloreto)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0143",
    "nome": "Benzilpenicilina procaína",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0144",
    "nome": "Benzilpenicilina – penicilina G benzatina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0145",
    "nome": "Benzoato de benzila",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0146",
    "nome": "Benzocaína",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0147",
    "nome": "Benzofenonas (fator de proteção solar)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0148",
    "nome": "Benzonatato",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0149",
    "nome": "Benzonidazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0150",
    "nome": "Benzotropina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0151",
    "nome": "Bepridil",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0152",
    "nome": "Besifloxacino",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0153",
    "nome": "Betacaroteno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0154",
    "nome": "Betametasona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0155",
    "nome": "Betanecol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0156",
    "nome": "Betaxolol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0157",
    "nome": "Bevacizumab",
    "nivel": "Nível 3 / Nível 5",
    "primaryLevel": 3,
    "levels": [
      3,
      5
    ],
    "classificacao": "Dados limitados ou ausência de dados / Uso contraindicado durante a amamentação",
    "descricao": "Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos Nível 5 – Uso contraindicado durante a amamentação O uso intravítreo deste fármaco provavelmente é compatível com a amamentação. O uso sistêmico deste medicamento pode não ser compatível com a amamentação."
  },
  {
    "id": "mam_0158",
    "nome": "Bicarbonato de sódio",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0159",
    "nome": "Bimatoprost",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0160",
    "nome": "Biperideno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0161",
    "nome": "Bisacodil",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0162",
    "nome": "Bisoprolol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0163",
    "nome": "Bivalirudina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0164",
    "nome": "Bleomicina (sulfato)",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por, pelo menos, 24 horas. Estender esta recomendação a mães com insuficiência renal."
  },
  {
    "id": "mam_0165",
    "nome": "Boceprevir",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0166",
    "nome": "Borage (Officinalis borage)",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "A amabilina, um dos componentes, é uma substância altamente hepatotóxica."
  },
  {
    "id": "mam_0167",
    "nome": "Bosentana",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0168",
    "nome": "Brexanolona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0169",
    "nome": "Brexpiprazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0170",
    "nome": "Brivaracetam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0171",
    "nome": "Bromazepam",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação **Possui elevada meia-vida",
    "descricao": "de eliminação."
  },
  {
    "id": "mam_0172",
    "nome": "Brometo de ipratrópio",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0173",
    "nome": "Brometos",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0174",
    "nome": "Bromocriptina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0175",
    "nome": "Bromoprida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0176",
    "nome": "Bronfeniramina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0177",
    "nome": "Budesonida",
    "nivel": "Nível 3 / Nível 1",
    "primaryLevel": 3,
    "levels": [
      3,
      1
    ],
    "classificacao": "Dados limitados ou ausência de dados / Uso compatível com a amamentação",
    "descricao": "O manual apresenta classificações diferentes nas seções correspondentes. Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. | Nível 1 – Uso compatível com a amamentação"
  },
  {
    "id": "mam_0178",
    "nome": "Bumetanida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0179",
    "nome": "Bupivacaína (marcaína)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0180",
    "nome": "Buprenorfina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0181",
    "nome": "Bupropiona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0182",
    "nome": "Buspirona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0183",
    "nome": "Busulfan",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0184",
    "nome": "Butabarbital",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0185",
    "nome": "Butalbital",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0186",
    "nome": "Butamirato",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0187",
    "nome": "Butorfanol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0188",
    "nome": "Cabergolina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0189",
    "nome": "Cafeína",
    "nivel": "Nível 2 / Nível 3",
    "primaryLevel": 2,
    "levels": [
      2,
      3
    ],
    "classificacao": "Dados limitados / Dados limitados ou ausência de dados",
    "descricao": "O manual apresenta classificações diferentes nas seções correspondentes. Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação. | Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0190",
    "nome": "Calcipotrieno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0191",
    "nome": "Calcitonina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0192",
    "nome": "Calcitriol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0193",
    "nome": "Calêndula (Calendula officinalis)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0194",
    "nome": "Cambendazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0195",
    "nome": "Camomila germânica (Matricaria chamomilla)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0196",
    "nome": "Canabidiol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0197",
    "nome": "Canaglifozina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0198",
    "nome": "Candesartana",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0199",
    "nome": "Caolin-pectina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0200",
    "nome": "Capecitabina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0201",
    "nome": "Capreomicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Até o momento da publicação deste Manual, há um alerta importante para problemas no neurodesenvolvimento em duas crianças expostas, embora seja considerado possivelmente compatível."
  },
  {
    "id": "mam_0202",
    "nome": "Capsaicina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. Evitar a aplicação sobre a aréola e o mamilo."
  },
  {
    "id": "mam_0203",
    "nome": "Captopril",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0204",
    "nome": "Carbamazepina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0205",
    "nome": "Carbenicilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0206",
    "nome": "Carbetocina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0207",
    "nome": "Carbimazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0208",
    "nome": "Carbinoxamina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0209",
    "nome": "Carbonato de cálcio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0210",
    "nome": "Carbonato de lítio",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Relatos de níveis elevados no leite materno e no lactente. Possível efeito tireotóxico. Alternativas: carbamazepina, lamotrigina."
  },
  {
    "id": "mam_0211",
    "nome": "Carboplatina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0212",
    "nome": "Carboprost",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0213",
    "nome": "Carboximetilcelulose",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0214",
    "nome": "Cardo-Santo (Cnicus benedictus)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0215",
    "nome": "Cariprazina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Não usar em mães de prematuros e/ou lactentes com episódio documentado de apneia."
  },
  {
    "id": "mam_0216",
    "nome": "Carisoprodol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0217",
    "nome": "Carmelose (carboximetilcelulose)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0218",
    "nome": "Carmustina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0219",
    "nome": "Carnitina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0220",
    "nome": "Carteolol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0221",
    "nome": "Carvão ativado",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0222",
    "nome": "Carvão em pó (coaltar)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0223",
    "nome": "Carvedilol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0224",
    "nome": "Caspofungin",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0225",
    "nome": "Cálcio (acetato)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0226",
    "nome": "Cálcio (carbonato)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0227",
    "nome": "Cálcio (citrato)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0228",
    "nome": "Cálcio (gluconato)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0229",
    "nome": "Cáscara sagrada",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0230",
    "nome": "Cefaclor",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0231",
    "nome": "Cefadroxila",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0232",
    "nome": "Cefalexina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0233",
    "nome": "Cefalotina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0234",
    "nome": "Cefamandol",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0235",
    "nome": "Cefapirina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0236",
    "nome": "Cefazolina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0237",
    "nome": "Cefdinir",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0238",
    "nome": "Cefditoren",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0239",
    "nome": "Cefepima",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0240",
    "nome": "Cefid Rocol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0241",
    "nome": "Cefixima",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0242",
    "nome": "Cefmetazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0243",
    "nome": "Cefonicida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0244",
    "nome": "Cefoperazona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0245",
    "nome": "Ceforanida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0246",
    "nome": "Cefotaxima",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0247",
    "nome": "Cefotetam",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0248",
    "nome": "Cefoxitina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0249",
    "nome": "Cefpodoxime Proxetil",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0250",
    "nome": "Cefprozil",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0251",
    "nome": "Cefradina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0252",
    "nome": "Ceftaroline Fosamil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0253",
    "nome": "Ceftazidima",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0254",
    "nome": "Ceftibuten",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0255",
    "nome": "Ceftizoxima",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0256",
    "nome": "Ceftriaxona",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0257",
    "nome": "Cefuroxima",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0258",
    "nome": "Celecoxib",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0259",
    "nome": "Certolizumab",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0260",
    "nome": "Cetamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0261",
    "nome": "Cetirizina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0262",
    "nome": "Cetoconazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0263",
    "nome": "Cetoprofeno",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0264",
    "nome": "Cetorolaco",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0265",
    "nome": "Cetotifeno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0266",
    "nome": "Cetuximab",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Elevado peso molecular muito grande. Espera-se quantidade excepcionalmente baixa no leite materno, contudo não há dados de longo prazo sobre a segurança do uso de medicamentos imunomoduladores em mães que amamentam. Assim, recomenda-se alguma precaução."
  },
  {
    "id": "mam_0267",
    "nome": "Cevimeline",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0268",
    "nome": "Chocolate (teobromina)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação Entretanto, em consumo excessivo (mais de 450 g/dia), pode causar irritabilidade ou aumento da peristalse intestinal no lactente. Esses efeitos podem ser potencializados quando este alimento é ingerido com café ou teofilina."
  },
  {
    "id": "mam_0269",
    "nome": "Chumbo",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0270",
    "nome": "Ciclamato",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0271",
    "nome": "Ciclesonida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0272",
    "nome": "Ciclizina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0273",
    "nome": "Ciclizine",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0274",
    "nome": "Ciclobenzaprina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0275",
    "nome": "Ciclofosfamida",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0276",
    "nome": "Ciclopentolato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0277",
    "nome": "Ciclopirox olamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0278",
    "nome": "Cicloserina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Recomenda-se a suspensão da amamentação por 24 horas após o uso materno."
  },
  {
    "id": "mam_0279",
    "nome": "Ciclosporina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. | Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O uso de ciclosporina em mães que amamentam deve ser seguido de observação do lactente quanto a sinais de toxicidade e monitoramento dos níveis plasmáticos do lactente."
  },
  {
    "id": "mam_0280",
    "nome": "Cimetidina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0281",
    "nome": "Cinacalcete",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0282",
    "nome": "Cinarizina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0283",
    "nome": "Ciprofloxacina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0284",
    "nome": "Ciproheptadina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0285",
    "nome": "Ciproterona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0286",
    "nome": "Cisaprida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Retirado do mercado nacional devido ao risco de arritmia cardíaca."
  },
  {
    "id": "mam_0287",
    "nome": "Cisatracúrio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0288",
    "nome": "Cisplatina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0289",
    "nome": "Citalopram",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0290",
    "nome": "Citarabina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0291",
    "nome": "Cladribina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0292",
    "nome": "Claritromicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0293",
    "nome": "Clemastina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0294",
    "nome": "Clidinium (brometo)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0295",
    "nome": "Clindamicina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0296",
    "nome": "Clobazam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0297",
    "nome": "Clobetasol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0298",
    "nome": "Clobutinol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0299",
    "nome": "Clofazimina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0300",
    "nome": "Clomifeno",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0301",
    "nome": "Clomipramina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0302",
    "nome": "Clonazepam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. | Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Meia-vida de eliminação longa."
  },
  {
    "id": "mam_0303",
    "nome": "Clonidina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0304",
    "nome": "Clopidogrel",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0305",
    "nome": "Clorambucil",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0306",
    "nome": "Cloranfenicol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0307",
    "nome": "Clorazepato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0308",
    "nome": "Clordiazepóxido",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0309",
    "nome": "Cloreto de cetilpiridínio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0310",
    "nome": "Clorfeniramina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0311",
    "nome": "Cloridrato de diclonina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0312",
    "nome": "Cloroquina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0313",
    "nome": "Clorotiazida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0314",
    "nome": "Cloroxilenol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0315",
    "nome": "Clorpromazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso compatível com a amamentação, com possibilidade de efeito adverso."
  },
  {
    "id": "mam_0316",
    "nome": "Clorpropamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0317",
    "nome": "Clorprotiexeno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0318",
    "nome": "Clortalidona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0319",
    "nome": "Clortetraciclina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0320",
    "nome": "Clorzoxazona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0321",
    "nome": "Clotrimazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0322",
    "nome": "Cloxacilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0323",
    "nome": "Cloxazolam (Metilcloxazolam)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Meia-vida de eliminação prolongada (65 horas). Dar preferência a outro fármaco."
  },
  {
    "id": "mam_0324",
    "nome": "Clozapina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0325",
    "nome": "Cocaína e crack",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 24 horas após o uso da droga. Usuárias regulares devem ser orientadas a suspender a amamentação."
  },
  {
    "id": "mam_0326",
    "nome": "Codeína",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0327",
    "nome": "Coenzima Q10 (ubiquinona)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0328",
    "nome": "Cohosh azul (Caulophyllum thalictroides)",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Choque cardiogênico e falência cardíaca congestiva foram relatados em um recém-nascido cuja mãe usou o cohosh azul por três semanas para estimular as contrações uterinas no trabalho de parto."
  },
  {
    "id": "mam_0329",
    "nome": "Cohosh preto (Cimicifuga racemosa)",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Risco teórico de redução da produção láctea. Evitar uso crônico."
  },
  {
    "id": "mam_0330",
    "nome": "Colchicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0331",
    "nome": "Colesevelan",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0332",
    "nome": "Colestipol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0333",
    "nome": "Colestiramina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. *e-lactancia"
  },
  {
    "id": "mam_0334",
    "nome": "Concentrado de complexo de fator IX",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0335",
    "nome": "Concentrado de fator VIII",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0336",
    "nome": "Condroitina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0337",
    "nome": "Confrei (Symphytum officinale)",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação. Possui alcaloides pirrolizidínicos com",
    "descricao": "propriedade hepatotóxica."
  },
  {
    "id": "mam_0338",
    "nome": "Contra antraz",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0339",
    "nome": "Contra covid-19",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0340",
    "nome": "Contra cólera",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0341",
    "nome": "Contra difteria, tétano e coqueluche (DPT)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0342",
    "nome": "Contra doença de Lyme",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0343",
    "nome": "Contra febre amarela",
    "nivel": "Nível 4 / Nível 5",
    "primaryLevel": 4,
    "levels": [
      4,
      5
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação / Uso contraindicado durante a amamentação",
    "descricao": "Nível 4 – Uso possivelmente perigoso durante a amamentação Nível 5 – Uso contraindicado durante a amamentação Durante os primeiros 6 meses da criança."
  },
  {
    "id": "mam_0344",
    "nome": "Contra febre tifoide",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0345",
    "nome": "Contra gripe (influenza)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0346",
    "nome": "Contra Haemofilus influenza",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0347",
    "nome": "Contra hepatite A",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0348",
    "nome": "Contra hepatite B",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0349",
    "nome": "Contra meningococo C",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0350",
    "nome": "Contra papilomavírus humano (HPV)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0351",
    "nome": "Contra poliomielite (oral ou injetável)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Não há indicação para uso em adolescentes ou adultos."
  },
  {
    "id": "mam_0352",
    "nome": "Contra raiva",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0353",
    "nome": "Contra rubéola",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0354",
    "nome": "Contra sarampo, caxumba e rubéola (MMR ou tríplice viral)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0355",
    "nome": "Contra tétano",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0356",
    "nome": "Contra tuberculose (BCG)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0357",
    "nome": "Contra varicela",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0358",
    "nome": "Contra varíola",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0359",
    "nome": "Cosintropina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0360",
    "nome": "Cranberry (extrato)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0361",
    "nome": "Cromo",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0362",
    "nome": "Cromoglicato de sódio",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0363",
    "nome": "Dabigatran etexilato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0364",
    "nome": "Dacarbazina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Este produto tem um peso molecular muito baixo (182 Daltons), com uma meia-vida breve de 5 horas, e provavelmente penetrará facilmente no leite, portanto as mães devem ser aconselhadas a suspender a amamentação por, pelo menos, 48 horas após a exposição."
  },
  {
    "id": "mam_0365",
    "nome": "Daclizumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0366",
    "nome": "Dactinomicina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por, pelo menos, 10 dias após a administração do fármaco."
  },
  {
    "id": "mam_0367",
    "nome": "Dalbavancina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0368",
    "nome": "Dalteparina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0369",
    "nome": "Danazol",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0370",
    "nome": "Dantrolene",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0371",
    "nome": "Dapsona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0372",
    "nome": "Daptomicina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0373",
    "nome": "Darbepoetina alfa",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0374",
    "nome": "Daridorexanto",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0375",
    "nome": "Darifenacina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0376",
    "nome": "Daunorubicina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 7 a 10 dias após a administração do fármaco."
  },
  {
    "id": "mam_0377",
    "nome": "DDT e outros inseticidas",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. A contaminação do leite por inseticidas tem sido exaustivamente estudada, sem relato de efeitos adversos. Apenas em situações excepcionais de intensa exposição, há motivo para preocupação."
  },
  {
    "id": "mam_0378",
    "nome": "DEET (dietil-metil- -benzamida)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0379",
    "nome": "Deferasirox",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0380",
    "nome": "Deferoxamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0381",
    "nome": "Deflazacort",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0382",
    "nome": "Delavirdine",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0383",
    "nome": "Deltametrina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0384",
    "nome": "Denosumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0385",
    "nome": "Desipramina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0386",
    "nome": "Desloratadina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0387",
    "nome": "Desogestrel + Etinilestradiol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0388",
    "nome": "Desonida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0389",
    "nome": "Desvenlafaxina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0390",
    "nome": "Dexametasona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0391",
    "nome": "Dexbronfeniramina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0392",
    "nome": "Dexclorfeniramina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos"
  },
  {
    "id": "mam_0393",
    "nome": "Dexlansoprazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0394",
    "nome": "Dexmedetomidine",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0395",
    "nome": "Dexmetilfenidato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0396",
    "nome": "Dextrano 40, 60, 70, 75",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0397",
    "nome": "Dextroanfetamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0398",
    "nome": "Dextrometorfano",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0399",
    "nome": "Dextropropoxifeno",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0400",
    "nome": "Diatrizoato (amidotrizoato)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0401",
    "nome": "Diazepam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. | Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Meia-vida de eliminação prolongada. Preferir outro fármaco."
  },
  {
    "id": "mam_0402",
    "nome": "Diazóxido",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0403",
    "nome": "Dibucaína",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0404",
    "nome": "Diciclomina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Há um relato de apneia em recém-nascido após uso materno do fármaco."
  },
  {
    "id": "mam_0405",
    "nome": "Diclofenaco",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0406",
    "nome": "Dicloxacilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0407",
    "nome": "Dicumarol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0408",
    "nome": "Didanosina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. É contraindicado que pessoas soropositivas amamentem."
  },
  {
    "id": "mam_0409",
    "nome": "Dienogest + Estradiol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0410",
    "nome": "Dieta vegetariana",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. Relato de sinais de deficiência de vitamina B no lactente de mães vegetarianas restritas ou 12 veganas. Deve-se complementar a dieta da nutriz com essa vitamina."
  },
  {
    "id": "mam_0411",
    "nome": "Dietilcarbamazina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0412",
    "nome": "Dietilestilbestrol",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0413",
    "nome": "Dietilpropiona",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0414",
    "nome": "Difenidol Hidrocloro",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0415",
    "nome": "Difenidramina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0416",
    "nome": "Difenil-hidantoína (fenitoína)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0417",
    "nome": "Difenoxilato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0418",
    "nome": "Difilina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0419",
    "nome": "Diflunisal",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0420",
    "nome": "Difluprednato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0421",
    "nome": "Digitoxina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0422",
    "nome": "Digoxina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0423",
    "nome": "Diloxanida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0424",
    "nome": "Diltiazem",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0425",
    "nome": "Dimenidrinato",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0426",
    "nome": "Dimercaprol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0427",
    "nome": "Dimetilsulfóxido",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0428",
    "nome": "Dinoprostone",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0429",
    "nome": "Dipirona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Risco teórico de agranulocitose. Este efeito parece ser mais frequente em determinadas etnias, como populações celtas-britânicas."
  },
  {
    "id": "mam_0430",
    "nome": "Dipivefrina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0431",
    "nome": "Dipropionato de beclometasona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0432",
    "nome": "Diritromicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0433",
    "nome": "Disopiramida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0434",
    "nome": "Dispositivo intrauterino (DIU)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0435",
    "nome": "Dissulfiram",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0436",
    "nome": "Ditranol (antralina)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0437",
    "nome": "Dobutamina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0438",
    "nome": "Docetaxel",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 4 a 5 dias após a administração do fármaco."
  },
  {
    "id": "mam_0439",
    "nome": "Docosanol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0440",
    "nome": "Docusato sódico",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0441",
    "nome": "Dolasetrona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0442",
    "nome": "Dolutegravir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0443",
    "nome": "Domperidona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0444",
    "nome": "Donepezila",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0445",
    "nome": "Dopamina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0446",
    "nome": "Doripenem",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0447",
    "nome": "Dornase",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0448",
    "nome": "Dorzolamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0449",
    "nome": "Dotiepina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0450",
    "nome": "Doxazosina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0451",
    "nome": "Doxepina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Relatos de significante depressão do sistema nervoso central de recém-nascidos e lactentes."
  },
  {
    "id": "mam_0452",
    "nome": "Doxercalciferol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0453",
    "nome": "Doxiciclina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Classificação válida se usada por período inferior a três semanas. O uso por período maior que três semanas pode produzir risco de dano à cartilagem de crescimento, alteração na coloração dos dentes e na flora intestinal."
  },
  {
    "id": "mam_0454",
    "nome": "Doxilamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0455",
    "nome": "Doxilamina succinato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0456",
    "nome": "Doxorrubicina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 7 a 10 dias após a administração do fármaco."
  },
  {
    "id": "mam_0457",
    "nome": "Dronabinol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "O e-lactancia considera seu uso contraindicado."
  },
  {
    "id": "mam_0458",
    "nome": "Dronedarone",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0459",
    "nome": "Droperidol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0460",
    "nome": "Dropopizina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0461",
    "nome": "Drotrecogina alfa",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0462",
    "nome": "Dulaglutida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0463",
    "nome": "Duloxetina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0464",
    "nome": "Eculizumab",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0465",
    "nome": "Edrofônio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0466",
    "nome": "Efavirenz",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0467",
    "nome": "Efedrina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0468",
    "nome": "Elbasvir + Grazoprevir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0469",
    "nome": "Eletriptano",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0470",
    "nome": "Eluxadolina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0471",
    "nome": "Emtricitabina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0472",
    "nome": "Enalapril",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0473",
    "nome": "Encainide",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0474",
    "nome": "Enoxacina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0475",
    "nome": "Enoxaparina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação"
  },
  {
    "id": "mam_0476",
    "nome": "Entecavir",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0477",
    "nome": "Enxofre",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0478",
    "nome": "Epinastina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0479",
    "nome": "Epinastina (cloridrato)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0480",
    "nome": "Epirrubicina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 7 a 10 dias após a administração do fármaco."
  },
  {
    "id": "mam_0481",
    "nome": "Eplerenona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0482",
    "nome": "Epoetina alfa",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0483",
    "nome": "Epoprostenol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0484",
    "nome": "Eprosartana",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0485",
    "nome": "Eptifibatide",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0486",
    "nome": "Equinácea (Echinacea purpurea)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0487",
    "nome": "Ergonovina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0488",
    "nome": "Ergotamina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "O uso por curtos períodos é considerado possivelmente seguro, mas o uso crônico deve ser evitado. Deve-se monitorar o lactente para náuseas e vômitos (ergotismo)."
  },
  {
    "id": "mam_0489",
    "nome": "Eritromicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0490",
    "nome": "Eritropoietina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0491",
    "nome": "Erlotinib",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 10 a 15 dias após a administração do fármaco."
  },
  {
    "id": "mam_0492",
    "nome": "Ertapenem",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0493",
    "nome": "Erva-de-São-João (Hypercurium perforatum)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0494",
    "nome": "Escitalopram",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0495",
    "nome": "Esketamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0496",
    "nome": "Eslicarbazepina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0497",
    "nome": "Esmolol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0498",
    "nome": "Esomeprazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0499",
    "nome": "Espectinomicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0500",
    "nome": "Espinosade",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0501",
    "nome": "Espiramicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0502",
    "nome": "Espironolactona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0503",
    "nome": "Estavudina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0504",
    "nome": "Estazolam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0505",
    "nome": "Estradiol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0506",
    "nome": "Estradiol + Medroxiprogesterona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0507",
    "nome": "Estreptomicina",
    "nivel": "Nível 2 / Nível 3",
    "primaryLevel": 2,
    "levels": [
      2,
      3
    ],
    "classificacao": "Dados limitados / Dados limitados ou ausência de dados",
    "descricao": "O manual apresenta classificações diferentes nas seções correspondentes. Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação. | Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0508",
    "nome": "Eszopiclone",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0509",
    "nome": "Etambutol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0510",
    "nome": "Etanercept",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0511",
    "nome": "Etanol (uso tópico, desinfetante)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0512",
    "nome": "Etidronato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0513",
    "nome": "Etinilestradiol + Drospirenona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0514",
    "nome": "Etinilestradiol + Etonogestrel",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0515",
    "nome": "Etinilestradiol + Levonorgestrel",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0516",
    "nome": "Etinilestradiol + Norelgestromina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0517",
    "nome": "Etinilestradiol + Noretindrona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0518",
    "nome": "Etinilestradiol + Norgestimate",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0519",
    "nome": "Etionamida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0520",
    "nome": "Etodolaco",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0521",
    "nome": "Etofamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0522",
    "nome": "Etomidato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados / Ausência de dados: uso provavelmente compatível com a amamentação",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Nível 3 – Ausência de dados: uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0523",
    "nome": "Etonogestrel implante",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0524",
    "nome": "Etoposide",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 2 a 3 dias após a administração do fármaco."
  },
  {
    "id": "mam_0525",
    "nome": "Etosuximida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0526",
    "nome": "Etotoína",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0527",
    "nome": "Etravirina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0528",
    "nome": "Etretinato",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0529",
    "nome": "Evolocumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0530",
    "nome": "Exemestane",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por, pelo menos, 5 a 10 dias após a administração do fármaco."
  },
  {
    "id": "mam_0531",
    "nome": "Exenatide",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0532",
    "nome": "Ezetimiba",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0533",
    "nome": "Éter",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0534",
    "nome": "Famotidina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0535",
    "nome": "Fanciclovir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0536",
    "nome": "Fator anti-hemofílico (Von Willebrand)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0537",
    "nome": "Fator de coagulação VIIa",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0538",
    "nome": "Febuxostato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0539",
    "nome": "Fedrilato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0540",
    "nome": "Felbamato",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0541",
    "nome": "Felodipina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0542",
    "nome": "Femproporex",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0543",
    "nome": "Fenazopiridina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0544",
    "nome": "Fenciclidina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0545",
    "nome": "Fendimetrazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0546",
    "nome": "Fenilbutazona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0547",
    "nome": "Fenilefrina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0548",
    "nome": "Feniltoloxamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0549",
    "nome": "Fenindiona",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0550",
    "nome": "Feniramina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0551",
    "nome": "Feno-Greco (Trigonella foenum-graecum)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos"
  },
  {
    "id": "mam_0552",
    "nome": "Fenobarbital",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Monitorar o lactente para ocorrência de sedação ou irritabilidade, apneia, déficit de sucção e ganho de peso. Avaliar o monitoramento das enzimas hepáticas – os níveis plasmáticos infantis se aproximam de um terço (ou menos) do nível plasmático materno."
  },
  {
    "id": "mam_0553",
    "nome": "Fenofibrato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0554",
    "nome": "Fenol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0555",
    "nome": "Fenoldopam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0556",
    "nome": "Fenolftaleína",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0557",
    "nome": "Fenoprofeno",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0558",
    "nome": "Fenoterol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0559",
    "nome": "Fenoxazolina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0560",
    "nome": "Fenoximetilpenicilina – penicilina V",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0561",
    "nome": "Fentanil",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0562",
    "nome": "Fentermina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0563",
    "nome": "Ferriprotinato",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0564",
    "nome": "Ferro dextran",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0565",
    "nome": "Ferro dextrano",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0566",
    "nome": "Ferro sucrose",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0567",
    "nome": "FerromaItose",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0568",
    "nome": "Fesoterodina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0569",
    "nome": "Fexofenadina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0570",
    "nome": "Fidaxomicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0571",
    "nome": "Fisostigmina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0572",
    "nome": "Fitomenadiona",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0573",
    "nome": "Flecainide",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0574",
    "nome": "Floxacilina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0575",
    "nome": "Flucitosina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0576",
    "nome": "Flucloxacilina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0577",
    "nome": "Fluconazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0578",
    "nome": "Fludrocortisona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0579",
    "nome": "Flufenazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0580",
    "nome": "Flumazenil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0581",
    "nome": "Flunisolida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0582",
    "nome": "Flunitrazepam",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0583",
    "nome": "Fluocinolona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0584",
    "nome": "Fluocinonida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0585",
    "nome": "Fluoresceína",
    "nivel": "Nível 2 / Nível 4",
    "primaryLevel": 2,
    "levels": [
      2,
      4
    ],
    "classificacao": "Dados limitados / Uso possivelmente perigoso durante a amamentação",
    "descricao": "Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação. Apenas uso oftálmico. Nível 4 – Uso possivelmente perigoso durante a amamentação Para uso endovenoso."
  },
  {
    "id": "mam_0586",
    "nome": "Fluorouracil",
    "nivel": "Nível 4 / Nível 3",
    "primaryLevel": 4,
    "levels": [
      4,
      3
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação / Dados limitados ou ausência de dados",
    "descricao": "O manual apresenta classificações diferentes nas seções correspondentes. Nível 4 – Uso possivelmente perigoso durante a amamentação Suspender a amamentação por 24 horas após a administração do fármaco. Compatível com a amamentação para uso tópico. | Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Em áreas pequenas. Nível 4 – Uso possivelmente perigoso durante a amamentação Em áreas extensas."
  },
  {
    "id": "mam_0587",
    "nome": "Fluoxetina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0588",
    "nome": "Flupentixol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0589",
    "nome": "Flurazepam",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0590",
    "nome": "Flurbiprofeno",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0591",
    "nome": "Fluticasona",
    "nivel": "Nível 2 / Nível 3",
    "primaryLevel": 2,
    "levels": [
      2,
      3
    ],
    "classificacao": "Dados limitados / Dados limitados ou ausência de dados",
    "descricao": "O manual apresenta classificações diferentes nas seções correspondentes. Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação. | Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0592",
    "nome": "Fluvastatina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0593",
    "nome": "Fluvoxamina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0594",
    "nome": "Flúor",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0595",
    "nome": "Fondaparinux sódica",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0596",
    "nome": "Fondaparinux sódico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0597",
    "nome": "Formaldeído",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0598",
    "nome": "Formol",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso como alisante de cabelo não é permitido pela Agência Nacional de Vigilância Sanitária (Anvisa) devido ao risco de intoxicação."
  },
  {
    "id": "mam_0599",
    "nome": "Formoterol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0600",
    "nome": "Foscarnet",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0601",
    "nome": "Fosfenitoína",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0602",
    "nome": "Fosfomicina trometamol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0603",
    "nome": "Fosinopril",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0604",
    "nome": "Frângula",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0605",
    "nome": "Frovatriptano",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0606",
    "nome": "Fumarato ferroso",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0607",
    "nome": "Funcho (Foeniculum officinale)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0608",
    "nome": "Furazolidona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0609",
    "nome": "Furosemida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0610",
    "nome": "Gabapentina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0611",
    "nome": "Gadobenato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0612",
    "nome": "Gadobutrol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0613",
    "nome": "Gadodiamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0614",
    "nome": "Gadopentetato",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0615",
    "nome": "Gadoteridol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0616",
    "nome": "Gadoversetamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0617",
    "nome": "Gadoxetato dissódio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0618",
    "nome": "Ganciclovir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0619",
    "nome": "Ganciclovir (gel oftálmico)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0620",
    "nome": "Gatifloxacin",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0621",
    "nome": "Gemcitabina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por até 7 dias após a administração do fármaco."
  },
  {
    "id": "mam_0622",
    "nome": "Gemfibrozil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0623",
    "nome": "Gemifloxacin",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0624",
    "nome": "Gentamicina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0625",
    "nome": "Ginko biloba (Pterophyllus salisburiensis)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0626",
    "nome": "Ginseng (Panax sp.)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0627",
    "nome": "Glatiramer",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0628",
    "nome": "Glibenclamida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0629",
    "nome": "Gliburida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0630",
    "nome": "Glicerina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0631",
    "nome": "Gliclazida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Preferir outro antidiabético oral."
  },
  {
    "id": "mam_0632",
    "nome": "Glicopirrolato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0633",
    "nome": "Glimepirida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Estudos em roedores mostram excreção significativa para o leite e níveis plasmáticos elevados nos filhotes. Observar hipoglicemia no lactente."
  },
  {
    "id": "mam_0634",
    "nome": "Glipizida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0635",
    "nome": "Gluconato ferroso",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0636",
    "nome": "Glucosamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0637",
    "nome": "Glutamato monossódico",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0638",
    "nome": "Glutaral ou glutaraldeído",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0639",
    "nome": "Goma de celulose modificada",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0640",
    "nome": "Gonadorrelina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0641",
    "nome": "Gonadotrofina coriônica",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0642",
    "nome": "Goserelina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0643",
    "nome": "Gramicidina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0644",
    "nome": "Granisetrona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0645",
    "nome": "Grepafloxacin",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0646",
    "nome": "Griseofulvina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0647",
    "nome": "Guaifenesina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0648",
    "nome": "Guanfacina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0649",
    "nome": "Guselkumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0650",
    "nome": "Halazepam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0651",
    "nome": "Haloperidol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0652",
    "nome": "Halotano",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0653",
    "nome": "Hemina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0654",
    "nome": "Heparina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0655",
    "nome": "Heroína",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0656",
    "nome": "Hexaclorobenzeno",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0657",
    "nome": "Hexaclorofeno",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Nível 4 – Uso possivelmente perigoso durante a amamentação | Nível 4 – Uso possivelmente perigoso durante a amamentação Relatos de lesão cerebral, cegueira e insuficiência respiratória em humanos e animais."
  },
  {
    "id": "mam_0658",
    "nome": "Hexilresorcinol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0659",
    "nome": "Hidralazina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0660",
    "nome": "Hidrato de cloral",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0661",
    "nome": "Hidrocloro de trimetobenzamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0662",
    "nome": "Hidroclorotiazida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação"
  },
  {
    "id": "mam_0663",
    "nome": "Hidrocodona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0664",
    "nome": "Hidrocortisona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0665",
    "nome": "Hidromorfona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0666",
    "nome": "Hidroquinona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0667",
    "nome": "Hidroxianfetamina + Tropicamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0668",
    "nome": "Hidroxiureia",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Suspender a amamentação por 3 horas após a administração pode reduzir significativamente a exposição. Em caso de recém-nascidos e lactentes jovens ou frágeis, esse tempo pode não ser suficiente. Para uma abordagem mais cautelosa, suspender a amamentação por um período de, pelo menos, 4 a 5 horas limitaria substancialmente a exposição do bebê."
  },
  {
    "id": "mam_0669",
    "nome": "Hidroxizine",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0670",
    "nome": "Hidróxido de alumínio",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0671",
    "nome": "Hidróxido de magnésio",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0672",
    "nome": "Hioscina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0673",
    "nome": "Hipoclorito de sódio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0674",
    "nome": "Homatropina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0675",
    "nome": "Hormônio folículo estimulante",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0676",
    "nome": "Hormônio luteinizante (alfalutropina)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0677",
    "nome": "Ibandronato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0678",
    "nome": "Ibuprofeno",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0679",
    "nome": "Icaridina (picaridina)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0680",
    "nome": "Idoxuridina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0681",
    "nome": "Ifosfamida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por, pelo menos, 72 horas."
  },
  {
    "id": "mam_0682",
    "nome": "Iloperidona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0683",
    "nome": "Iloprost",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0684",
    "nome": "Imatinib",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por, pelo menos, 10 dias após a administração do fármaco."
  },
  {
    "id": "mam_0685",
    "nome": "Imipenem + Cilastina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0686",
    "nome": "Imipramina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0687",
    "nome": "Implantes de silicone",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0688",
    "nome": "Imunoglobulina anti-D (anti-RH)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0689",
    "nome": "Imunoglobulina anti-hepatite B",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0690",
    "nome": "Imunoglobulina antirrábica",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0691",
    "nome": "Imunoglobulina antitetânica",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0692",
    "nome": "Imunoglobulina humana",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0693",
    "nome": "Inalantes",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0694",
    "nome": "Indapamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0695",
    "nome": "Indinavir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0696",
    "nome": "Indocianina verde",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0697",
    "nome": "Indometacina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0698",
    "nome": "Infliximab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0699",
    "nome": "Insulinas",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0700",
    "nome": "Interferon (alfa-2B)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0701",
    "nome": "Interferon (alfa-N3, beta-1A, beta-1B e gama)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0702",
    "nome": "Iodamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0703",
    "nome": "Iodeto de potássio",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0704",
    "nome": "Iodipamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0705",
    "nome": "Iodixanol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0706",
    "nome": "Iodo",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0707",
    "nome": "Iodopovidona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Nível 4 – Uso possivelmente perigoso durante a amamentação | Nível 4 – Uso possivelmente perigoso durante a amamentação Há risco de supressão da função tireoidiana do lactente."
  },
  {
    "id": "mam_0708",
    "nome": "Ioexol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0709",
    "nome": "Iopamidol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0710",
    "nome": "Iopentol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0711",
    "nome": "Iopromida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0712",
    "nome": "Iotalamato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0713",
    "nome": "Ioversol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0714",
    "nome": "Ioxaglato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0715",
    "nome": "Ipeca",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0716",
    "nome": "Ipilimumab",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0717",
    "nome": "Ipodato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0718",
    "nome": "Irbesartana",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0719",
    "nome": "Isoconazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0720",
    "nome": "Isoetarina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0721",
    "nome": "Isometepteno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0722",
    "nome": "Isometepteno + Cafeína + Paracetamol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0723",
    "nome": "Isoniazida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0724",
    "nome": "Isoproterenol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0725",
    "nome": "Isossorbida (dinitrato e mononitrato)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0726",
    "nome": "Isossorbida mono e dinitrato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0727",
    "nome": "Isosulfan azul",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender amamentação por 48 horas."
  },
  {
    "id": "mam_0728",
    "nome": "Isotretinoína (uso oral)",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0729",
    "nome": "Isoxsuprina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0730",
    "nome": "Ispágula",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0731",
    "nome": "Isradipina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0732",
    "nome": "Itraconazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação | Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0733",
    "nome": "Ivermectina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0734",
    "nome": "Kanamicina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0735",
    "nome": "Kava-Kava (Piper methysticum)",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "O risco de toxicidade desta planta sobre o sistema nervoso central (SNC) é potencializado quando associada ao álcool."
  },
  {
    "id": "mam_0736",
    "nome": "Kombucha (Kombucha Gyokuroen)",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0737",
    "nome": "Labetalol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0738",
    "nome": "Lacosamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0739",
    "nome": "Lactase",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0740",
    "nome": "Lactitol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0741",
    "nome": "Lactulose",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O e-lactancia classifica como segura e compatível com a amamentação."
  },
  {
    "id": "mam_0742",
    "nome": "Lamivudina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0743",
    "nome": "Lamotrigina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação"
  },
  {
    "id": "mam_0744",
    "nome": "Lanadelumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0745",
    "nome": "Lansoprazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0746",
    "nome": "Latanoprost",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0747",
    "nome": "Ledipasvir + Sofosbuvir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0748",
    "nome": "Lefamulina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0749",
    "nome": "Leflunomide",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0750",
    "nome": "Lemborexanto",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0751",
    "nome": "Lepirudina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0752",
    "nome": "Letrozol",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 10 dias após a administração do fármaco."
  },
  {
    "id": "mam_0753",
    "nome": "Leuprolida (leuprorrelina)",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0754",
    "nome": "Levalbuterol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0755",
    "nome": "Levamisol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0756",
    "nome": "Levetiracetam",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0757",
    "nome": "Levobunolol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0758",
    "nome": "Levocabastina",
    "nivel": "Nível 2 / Nível 3",
    "primaryLevel": 2,
    "levels": [
      2,
      3
    ],
    "classificacao": "Dados limitados / Dados limitados ou ausência de dados",
    "descricao": "O manual apresenta classificações diferentes nas seções correspondentes. Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação. | Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0759",
    "nome": "Levocarnitina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0760",
    "nome": "Levocetirizina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0761",
    "nome": "Levodopa",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0762",
    "nome": "Levodopa + Benserazida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0763",
    "nome": "Levodopa + Carbidopa",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0764",
    "nome": "Levodropropizina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0765",
    "nome": "Levofloxacina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0766",
    "nome": "Levomepromazina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0767",
    "nome": "Levonorgestrel (contracepção de emergência)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0768",
    "nome": "Levotiroxina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0769",
    "nome": "Lidocaína",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0770",
    "nome": "Lidocaína (xilocaína)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0771",
    "nome": "Linagliptina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0772",
    "nome": "Lincomicina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0773",
    "nome": "Lindano",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0774",
    "nome": "Linestrenol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0775",
    "nome": "Linezolida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0776",
    "nome": "Liotironina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0777",
    "nome": "Liraglutida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0778",
    "nome": "Lisdexanfetamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0779",
    "nome": "Lisina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0780",
    "nome": "Lisinopril",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0781",
    "nome": "Lisurida",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0782",
    "nome": "Lítio (carbonato)",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Relatos de níveis elevados no leite materno e no lactente. Possível efeito tireotóxico."
  },
  {
    "id": "mam_0783",
    "nome": "Loção de calamina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0784",
    "nome": "lodeto de potássio",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0785",
    "nome": "Lomefloxacina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0786",
    "nome": "Lomustina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0787",
    "nome": "Loperamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0788",
    "nome": "Lopinavir + Ritonavir",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0789",
    "nome": "Lopinavir*",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_0790",
    "nome": "Loracarbef",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0791",
    "nome": "Loratadina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0792",
    "nome": "Lorazepam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0793",
    "nome": "Lormetazepam",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0794",
    "nome": "Losartana",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0795",
    "nome": "Loteprednol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0796",
    "nome": "Lovastatina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0797",
    "nome": "Loxapina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0798",
    "nome": "LSD",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por sete dias após o uso da droga."
  },
  {
    "id": "mam_0799",
    "nome": "Lubiprostona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0800",
    "nome": "Lurasidona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0801",
    "nome": "Luteína",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0802",
    "nome": "Macitentana",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0803",
    "nome": "Maconha e haxixe (Cannabis sativa)",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0804",
    "nome": "Malathion",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0805",
    "nome": "Mangafodipir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0806",
    "nome": "Manitol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0807",
    "nome": "Maprotilina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0808",
    "nome": "Mazindol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0809",
    "nome": "Mebendazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0810",
    "nome": "Meclizina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0811",
    "nome": "Meclofenamato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0812",
    "nome": "Medroxiprogesterona acetato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0813",
    "nome": "Mefloquina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0814",
    "nome": "Melatonina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0815",
    "nome": "Melfalan",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 24 horas após a administração do fármaco."
  },
  {
    "id": "mam_0816",
    "nome": "Meloxican",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0817",
    "nome": "Mentol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0818",
    "nome": "Meperidina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0819",
    "nome": "Mepindolol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0820",
    "nome": "Mepivacaína",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0821",
    "nome": "Mepolizumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0822",
    "nome": "Meprobamato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0823",
    "nome": "Mequitazina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0824",
    "nome": "Mercaptopurina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Ver “Azatioprina”. A azatioprina é metabolizada em 6-mercaptopurina, portanto ambas são essencialmente idênticas."
  },
  {
    "id": "mam_0825",
    "nome": "Mercúrio",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0826",
    "nome": "Meropenem",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0827",
    "nome": "Mesalamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0828",
    "nome": "Mesoridazina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0829",
    "nome": "Metacolina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0830",
    "nome": "Metadona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0831",
    "nome": "Metanfetamina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Há relato de uma morte infantil após exposição à anfetamina no leite materno."
  },
  {
    "id": "mam_0832",
    "nome": "Metaxalona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0833",
    "nome": "Metenamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0834",
    "nome": "Metformina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0835",
    "nome": "Meticilina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0836",
    "nome": "Metilcelulose",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0837",
    "nome": "Metildopa",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0838",
    "nome": "Metilergometrina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0839",
    "nome": "Metilergonovina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0840",
    "nome": "Metilfenidato (psicoestimulante)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0841",
    "nome": "Metilfolato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0842",
    "nome": "Metilnaltrexona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0843",
    "nome": "Metilprednisolona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0844",
    "nome": "Metilsalicilato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0845",
    "nome": "Metilsulfonilmetano",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0846",
    "nome": "Metiltestosterona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0847",
    "nome": "Metimazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0848",
    "nome": "Metocarbamol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0849",
    "nome": "Metoclopramida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação"
  },
  {
    "id": "mam_0850",
    "nome": "Metohexital (metoexital)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0851",
    "nome": "Metoprolol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0852",
    "nome": "Metotrexate",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0853",
    "nome": "Metrizamida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0854",
    "nome": "Metrizoato",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0855",
    "nome": "Metronidazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0856",
    "nome": "Metronizadol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0857",
    "nome": "Mexiletina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0858",
    "nome": "Métodos de barreira",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0859",
    "nome": "Mianserina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0860",
    "nome": "Miconazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0861",
    "nome": "Midazolam",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0862",
    "nome": "Midrodina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0863",
    "nome": "Mifepristone ou RU 486",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0864",
    "nome": "Miglitol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0865",
    "nome": "Milk thistle (Silybum marianum)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0866",
    "nome": "Milnaciprano",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0867",
    "nome": "Milrinona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0868",
    "nome": "Minociclina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos.  Classificação válida para uso inferior a quatro semanas. O uso prolongado deve ser evitado, pois pode afetar a cartilagem de crescimento e o esmalte dentário. | Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0869",
    "nome": "Minoxidil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0870",
    "nome": "Mirabegron",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0871",
    "nome": "Mirtazapina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0872",
    "nome": "Misoprostol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0873",
    "nome": "Mitomicina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 24 a 48 horas após a administração."
  },
  {
    "id": "mam_0874",
    "nome": "Mitoxantrona",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0875",
    "nome": "Mitraginina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0876",
    "nome": "Mivacúrio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0877",
    "nome": "Moclobemida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0878",
    "nome": "Modafinila",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0879",
    "nome": "Mometasona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0880",
    "nome": "Monossulfiram",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0881",
    "nome": "Montelucaste",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0882",
    "nome": "Morfina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos"
  },
  {
    "id": "mam_0883",
    "nome": "Moringa (Moringa oleifera)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0884",
    "nome": "Moxifloxacin",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0885",
    "nome": "Muciloide hidrofílico de psílio",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0886",
    "nome": "Mupirocina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0887",
    "nome": "N-acetilcisteína",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0888",
    "nome": "Nabilone",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0889",
    "nome": "Nabumetona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0890",
    "nome": "Nadolol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0891",
    "nome": "Nafazolina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0892",
    "nome": "Nafcilina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0893",
    "nome": "Nalbufina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0894",
    "nome": "Naldemedin",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0895",
    "nome": "Naloxona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0896",
    "nome": "Naltrexona",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0897",
    "nome": "Naproxeno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0898",
    "nome": "Naratriptan",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0899",
    "nome": "Natalizumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0900",
    "nome": "Nateglinida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0901",
    "nome": "Nebivolol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0902",
    "nome": "Nedocromil",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0903",
    "nome": "Nefazodona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Um relato de sonolência, letargia, apneia e déficit de crescimento em lactente com 9 semanas de vida nascido prematuro."
  },
  {
    "id": "mam_0904",
    "nome": "Nefloquina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0905",
    "nome": "Nefopam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0906",
    "nome": "Neomicina + Bacitracina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0907",
    "nome": "Neostigmina",
    "nivel": "Nível 3 / Nível 2",
    "primaryLevel": 3,
    "levels": [
      3,
      2
    ],
    "classificacao": "Dados limitados ou ausência de dados / Dados limitados",
    "descricao": "O manual apresenta classificações diferentes nas seções correspondentes. Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. | Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação"
  },
  {
    "id": "mam_0908",
    "nome": "Nepafenaco",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0909",
    "nome": "Nesiritida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0910",
    "nome": "Netilmicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0911",
    "nome": "Nevirapina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0912",
    "nome": "Nicardipina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0913",
    "nome": "Niclosamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0914",
    "nome": "Nicotina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. A nicotina pode reduzir a produção láctea e alterar o sabor do leite. O uso de medicamentos (adesivo, goma de mascar e spray) contendo nicotina é compatível com a amamentação."
  },
  {
    "id": "mam_0915",
    "nome": "Nicotina (aerossóis, adesivos e gomas)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0916",
    "nome": "Nifedipina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0917",
    "nome": "Nifurtimox",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0918",
    "nome": "Nimodipina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0919",
    "nome": "Nimorazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0920",
    "nome": "Nisoldipina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0921",
    "nome": "Nistatina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Nível 1 – Uso compatível com a amamentação | Nível 1 – Uso compatível com a amamentação."
  },
  {
    "id": "mam_0922",
    "nome": "Nitazoxanida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0923",
    "nome": "Nitrazepam",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0924",
    "nome": "Nitrendipina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0925",
    "nome": "Nitrofurantoína",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0926",
    "nome": "Nitroglicerina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0927",
    "nome": "Nitroprussiato",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0928",
    "nome": "Nitroprussiato de sódio",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0929",
    "nome": "Nizatidina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0930",
    "nome": "Nonoxinol 9",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0931",
    "nome": "Noradrenalina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0932",
    "nome": "Noretisterona (noretindrona)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0933",
    "nome": "Norfloxacina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0934",
    "nome": "Nortriptilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0935",
    "nome": "Novobiocina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Evitar o uso por período superior a quatro semanas devido ao risco de alterações na cartilagem de crescimento e no esmalte dentário."
  },
  {
    "id": "mam_0936",
    "nome": "Ocitocina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0937",
    "nome": "Ofloxacina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação. | Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação"
  },
  {
    "id": "mam_0938",
    "nome": "Olanzepina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0939",
    "nome": "Olmesartana",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0940",
    "nome": "Olopatadina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0941",
    "nome": "Olsalazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0942",
    "nome": "Omadaciclina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0943",
    "nome": "Omalizumab",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0944",
    "nome": "Omeprazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0945",
    "nome": "Ondansetrona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0946",
    "nome": "Orfenadrina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0947",
    "nome": "Oritavancina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0948",
    "nome": "Orlistat",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0949",
    "nome": "Oseltamivir",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0950",
    "nome": "Oxacilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0951",
    "nome": "Oxaliplatina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_0952",
    "nome": "Oxamniquina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0953",
    "nome": "Oxaprozina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0954",
    "nome": "Oxazepam",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0955",
    "nome": "Oxcarbazepina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0956",
    "nome": "Oxibato de sódio",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0957",
    "nome": "Oxicodona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0958",
    "nome": "Oximetazolina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0959",
    "nome": "Oximorfona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0960",
    "nome": "Oxitetraciclina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0961",
    "nome": "Óleo de melaleuca (Melaleuca alternifolia)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0962",
    "nome": "Óleo de prímula-da-noite (Oenothera biennis)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0963",
    "nome": "Óleo de rícino",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0964",
    "nome": "Óleo mineral",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0965",
    "nome": "Óxido de zinco",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0966",
    "nome": "Óxido nitroso",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0967",
    "nome": "Paclitaxel",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 6 a 10 dias após a administração do fármaco."
  },
  {
    "id": "mam_0968",
    "nome": "Paliperidona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0969",
    "nome": "Palonosetrona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0970",
    "nome": "Pamabrom",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0971",
    "nome": "Pamidronato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0972",
    "nome": "Pamoato de pirantel",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0973",
    "nome": "Pamoato de pirvínio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0974",
    "nome": "Pancrelipase",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0975",
    "nome": "Pancurônio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0976",
    "nome": "Pantoprazol",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0977",
    "nome": "Paracetamol",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_0978",
    "nome": "Parecoxib",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0979",
    "nome": "Paricalcitol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0980",
    "nome": "Paromomicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0981",
    "nome": "Paroxetina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0982",
    "nome": "Pasugrel",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0983",
    "nome": "Pefloxacina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0984",
    "nome": "Penciclovir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0985",
    "nome": "Penicilamina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Nível 4 – Uso possivelmente perigoso durante a amamentação | Nível 4 – Uso possivelmente perigoso durante a amamentação A segurança não foi estabelecida durante a lactação, mas a cinética sugere transferência significativa para o leite materno. É um fármaco potente que requer observação e cuidados constantes. Alguns autores recomendam a interrupção da lactação."
  },
  {
    "id": "mam_0986",
    "nome": "Pentamidina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0987",
    "nome": "Pentazocina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0988",
    "nome": "Pentobarbital",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0989",
    "nome": "Pentostatina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por, pelo menos, 72 horas após a administração do fármaco."
  },
  {
    "id": "mam_0990",
    "nome": "Pentoxifilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação | Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0991",
    "nome": "Perampanel",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Possíveis reações comportamentais graves."
  },
  {
    "id": "mam_0992",
    "nome": "Perfenazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0993",
    "nome": "Pergolide",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_0994",
    "nome": "Periciazina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0995",
    "nome": "Perindopril",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_0996",
    "nome": "Permanganato de potássio",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0997",
    "nome": "Permetrina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0998",
    "nome": "Peróxido de benzoila",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_0999",
    "nome": "Peróxido de benzoíla",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1000",
    "nome": "Peróxido de hidrogênio",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1001",
    "nome": "Pertuzumab",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1002",
    "nome": "Picossulfato sódico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1003",
    "nome": "Piercings",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Risco de dano aos ductos mamários com consequente obstrução e prejuízo à amamentação."
  },
  {
    "id": "mam_1004",
    "nome": "Pilocarpina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1005",
    "nome": "Pimecrolimus",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1006",
    "nome": "Pimozida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1007",
    "nome": "Pindolol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1008",
    "nome": "Pioglitazona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1009",
    "nome": "Piperacilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1010",
    "nome": "Piperaquina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1011",
    "nome": "Piperazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1012",
    "nome": "Pipotiazina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1013",
    "nome": "Pirazinamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1014",
    "nome": "Pirbuterol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1015",
    "nome": "Piridostigmina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1016",
    "nome": "Piridoxina hidrocloro",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1017",
    "nome": "Pirilamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1018",
    "nome": "Pirimetamina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. A dose relativa no lactente é igual a 46% da dose materna, contudo a pirimetamina é aprovada para uso em lactentes a partir de 2 meses. Considerar realizar a suplementação de ácido fólico nos lactentes em casos de uso materno por período prolongado."
  },
  {
    "id": "mam_1019",
    "nome": "Piroxicam",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1020",
    "nome": "Podofilox (podofiloxina)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Aguardar pelo menos 4 horas após a aplicação antes de amamentar. O lactente deve ser monitorado de perto quanto a problemas gastrointestinais. O uso desse produto em mulheres que amamentam deve ser evitado sempre que possível."
  },
  {
    "id": "mam_1021",
    "nome": "Poligelina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. *Fonte: e-lactancia."
  },
  {
    "id": "mam_1022",
    "nome": "Polimixina B",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1023",
    "nome": "Polimixina B (sulfato)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação"
  },
  {
    "id": "mam_1024",
    "nome": "Polissulfato de pentosano",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1025",
    "nome": "Posaconazole",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1026",
    "nome": "Potássio (sais)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1027",
    "nome": "Pramipexol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1028",
    "nome": "Pramlintide",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1029",
    "nome": "Pramoxina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1030",
    "nome": "Pravastatina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1031",
    "nome": "Prazepam",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1032",
    "nome": "Praziquantel",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1033",
    "nome": "Prazosina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1034",
    "nome": "Prednicarbato",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1035",
    "nome": "Prednisolona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1036",
    "nome": "Prednisona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1037",
    "nome": "Pregabalina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1038",
    "nome": "Primaquina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1039",
    "nome": "Primidona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "É um pró-fármaco, sendo convertida em fenobarbital."
  },
  {
    "id": "mam_1040",
    "nome": "Procainamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1041",
    "nome": "Procaína",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1042",
    "nome": "Procarbazina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_1043",
    "nome": "Proclorperazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1044",
    "nome": "Progesterona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1045",
    "nome": "Proguanil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1046",
    "nome": "Prometazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1047",
    "nome": "Propafenona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1048",
    "nome": "Propiltiouracil",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1049",
    "nome": "Propiodona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1050",
    "nome": "Propionato de fIuticasona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1051",
    "nome": "Propofol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1052",
    "nome": "Propoxifeno",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1053",
    "nome": "Propranolol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1054",
    "nome": "Protamina sulfato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1055",
    "nome": "Protriptilina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1056",
    "nome": "Pseudoefedrina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1057",
    "nome": "Quazepam",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1058",
    "nome": "Quelato glicinato de ferro",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1059",
    "nome": "Quetiapina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1060",
    "nome": "Quinapril",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1061",
    "nome": "Quinidina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1062",
    "nome": "Quinina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1063",
    "nome": "Quinupristina + Dalfopristina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1064",
    "nome": "Rabeprazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1065",
    "nome": "Racecadotrila",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1066",
    "nome": "Raloxifeno",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1067",
    "nome": "Raltegravir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_1068",
    "nome": "Ramelteon",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1069",
    "nome": "Ramipril",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1070",
    "nome": "Ranitidina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. Está sendo retirada do mercado em vários países por ter sido detectada contaminação com nitrosamina, um produto cancerígeno."
  },
  {
    "id": "mam_1071",
    "nome": "Remdesivir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1072",
    "nome": "Remifentanil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1073",
    "nome": "Repaglinida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1074",
    "nome": "Reserpina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1075",
    "nome": "Resorcinol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1076",
    "nome": "Retapamulina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1077",
    "nome": "Ribavirina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1078",
    "nome": "Rifampicina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação. | Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação"
  },
  {
    "id": "mam_1079",
    "nome": "Rifaximina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1080",
    "nome": "Rimantadina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1081",
    "nome": "Rimegepant",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1082",
    "nome": "Rimonabanto",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1083",
    "nome": "Risankizumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1084",
    "nome": "Risedronato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1085",
    "nome": "Risperidona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1086",
    "nome": "Ritodrina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1087",
    "nome": "Ritonavir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_1088",
    "nome": "Rituximab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1089",
    "nome": "Rivaroxabana",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1090",
    "nome": "Rizatriptan",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1091",
    "nome": "Romosozumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1092",
    "nome": "Ropirinol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1093",
    "nome": "Ropivacaína",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1094",
    "nome": "Rosiglitazona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1095",
    "nome": "Rosuvastatina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1096",
    "nome": "Rotigotina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1097",
    "nome": "Roxitromicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1098",
    "nome": "Sacarina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1099",
    "nome": "Sacubitril + Valsartan",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1100",
    "nome": "Sais de ouro",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_1101",
    "nome": "Sais de sódio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1102",
    "nome": "Salbutamol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1103",
    "nome": "Salbutamol (albuterol)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1104",
    "nome": "Salicilamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1105",
    "nome": "Salicilato de magnésio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1106",
    "nome": "Salmeterol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1107",
    "nome": "Salsalato",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Trata-se de um dímero do ácido acetilsalicílico."
  },
  {
    "id": "mam_1108",
    "nome": "Saquinavir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_1109",
    "nome": "Sareciclina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1110",
    "nome": "Sálvia (Salvia officinalis)",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Risco teórico de efeitos anticolinérgicos sobre o lactente."
  },
  {
    "id": "mam_1111",
    "nome": "Secnidazol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1112",
    "nome": "Secobarbital",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1113",
    "nome": "Selegilina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1114",
    "nome": "Selênio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1115",
    "nome": "Semaglutida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1116",
    "nome": "Sene",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1117",
    "nome": "Sertralina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1118",
    "nome": "Sevoflurano",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1119",
    "nome": "Sibutramina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por 2 a 5 horas após a administração."
  },
  {
    "id": "mam_1120",
    "nome": "Sildenafil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1121",
    "nome": "Simeprevir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1122",
    "nome": "Sinefrina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1123",
    "nome": "Sinvastatina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1124",
    "nome": "Sitagliptina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1125",
    "nome": "Sofosbuvir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1126",
    "nome": "Solifenacina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1127",
    "nome": "Sorbitol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1128",
    "nome": "Soro antiaracnídico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1129",
    "nome": "Soro antidiftérico",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1130",
    "nome": "Soro antiescorpiônico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1131",
    "nome": "Soro antiofídico",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1132",
    "nome": "Sotalol",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1133",
    "nome": "Stévia",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1134",
    "nome": "Subsalicilato de bismuto",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1135",
    "nome": "Succimer",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Dados limitados ou ausência de dados."
  },
  {
    "id": "mam_1136",
    "nome": "Succinilcolina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1137",
    "nome": "Sucralfato",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1138",
    "nome": "Sucralose",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1139",
    "nome": "Sugammadex",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1140",
    "nome": "SuIfametoxipiridazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1141",
    "nome": "Sulbactan",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1142",
    "nome": "Sulfacetamida",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1143",
    "nome": "Sulfacetamida sódica",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1144",
    "nome": "Sulfadiazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1145",
    "nome": "Sulfadiazina de prata",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1146",
    "nome": "Sulfadoxina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Contraindicada até 2 meses de idade."
  },
  {
    "id": "mam_1147",
    "nome": "Sulfametizol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1148",
    "nome": "Sulfametoxazol + Trimetropin (cotrimoxazol)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1149",
    "nome": "Sulfasalazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1150",
    "nome": "Sulfassalazina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1151",
    "nome": "Sulfato de bário",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1152",
    "nome": "Sulfato de magnésio",
    "nivel": "Nível 1 / Nível 2",
    "primaryLevel": 1,
    "levels": [
      1,
      2
    ],
    "classificacao": "Uso compatível com a amamentação / Dados limitados",
    "descricao": "O manual apresenta classificações diferentes nas seções correspondentes. Nível 1 – Uso compatível com a amamentação | Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1153",
    "nome": "Sulfato ferroso",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1154",
    "nome": "Sulfeto de selênio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1155",
    "nome": "Sulfisoxazol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1156",
    "nome": "Sulindac",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1157",
    "nome": "Sulpirida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1158",
    "nome": "Sumatriptan",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1159",
    "nome": "Suramina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1160",
    "nome": "Suvorexanto",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1161",
    "nome": "Suxametônio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1162",
    "nome": "Tacrolimus",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1163",
    "nome": "Talidomida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1164",
    "nome": "Tamoxifen",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_1165",
    "nome": "Tamoxifeno",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_1166",
    "nome": "Tapentadol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1167",
    "nome": "Tasimelteon",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1168",
    "nome": "Tatuagens",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos.  Risco de dermatite local e obstrução ductal."
  },
  {
    "id": "mam_1169",
    "nome": "Tazaroteno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1170",
    "nome": "Teclozan",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1171",
    "nome": "Tedizolida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1172",
    "nome": "Tegaserod",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Não há indicação para uso por mulheres."
  },
  {
    "id": "mam_1173",
    "nome": "Tegaserode",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1174",
    "nome": "Teicoplanina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1175",
    "nome": "Telavancina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1176",
    "nome": "Telbivudina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1177",
    "nome": "Telitromicina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1178",
    "nome": "Telmisartana",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1179",
    "nome": "Temazepam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1180",
    "nome": "Temozolomida",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_1181",
    "nome": "Teniposide",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por 36 a 48 horas após a administração do fármaco."
  },
  {
    "id": "mam_1182",
    "nome": "Tenofovir",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_1183",
    "nome": "Teofilina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1184",
    "nome": "Terazosina HCL",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1185",
    "nome": "Terbinafina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1186",
    "nome": "Terbutalina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1187",
    "nome": "Terconazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1188",
    "nome": "Terfenadine",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1189",
    "nome": "Teriparatida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1190",
    "nome": "Teste tuberculínico (PPD)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1191",
    "nome": "Testosterona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1192",
    "nome": "Tetraciclinas",
    "nivel": "Nível 3 / Nível 2",
    "primaryLevel": 3,
    "levels": [
      3,
      2
    ],
    "classificacao": "Dados limitados ou ausência de dados / Dados limitados",
    "descricao": "O manual apresenta classificações diferentes nas seções correspondentes. Nível 3 – Dados limitados ou ausência de dados Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. | Nível 2 – Dados limitados Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1193",
    "nome": "Tetraidrozolina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1194",
    "nome": "Tiabendazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1195",
    "nome": "Tiagabina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1196",
    "nome": "Tiaprida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1197",
    "nome": "Ticagrelor",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1198",
    "nome": "Ticarcilina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1199",
    "nome": "Ticlodipina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1200",
    "nome": "Tigeciclina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1201",
    "nome": "Timolol",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1202",
    "nome": "Tinidazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1203",
    "nome": "Tinturas para cabelo",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos. Categoria válida, desde que não contenha o metal chumbo."
  },
  {
    "id": "mam_1204",
    "nome": "Tinzaparina sódica",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1205",
    "nome": "Tiopental",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1206",
    "nome": "Tioridazida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1207",
    "nome": "Tiotiexeno",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1208",
    "nome": "Tiotrópio (brometo)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1209",
    "nome": "Tiropanoato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1210",
    "nome": "Tirotropina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1211",
    "nome": "Tizanidina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1212",
    "nome": "Tobramicina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1213",
    "nome": "Tocainide",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Uso contraindicado durante a amamentação."
  },
  {
    "id": "mam_1214",
    "nome": "Tolbutamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1215",
    "nome": "Tolmetina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1216",
    "nome": "Tolterodina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1217",
    "nome": "Topiramato",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1218",
    "nome": "Toremifeno",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por 25 a 30 dias após a administração do fármaco."
  },
  {
    "id": "mam_1219",
    "nome": "Torsemida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1220",
    "nome": "Toxina botulínica",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1221",
    "nome": "Toxina botulínica tipo A",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1222",
    "nome": "Tramadol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1223",
    "nome": "Trandolapril",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1224",
    "nome": "Trastuzumab",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1225",
    "nome": "Travoprost",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1226",
    "nome": "Trazodona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1227",
    "nome": "Treprostinil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1228",
    "nome": "Triancinolona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1229",
    "nome": "Triantereno",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1230",
    "nome": "Triazolam",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1231",
    "nome": "Triclabendazol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1232",
    "nome": "Triclosana",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1233",
    "nome": "Triexifenidil",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1234",
    "nome": "Trifluperazina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1235",
    "nome": "Trifluridina (trifluorotimidina)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1236",
    "nome": "Trimebutina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1237",
    "nome": "Trimeprazine",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1238",
    "nome": "Trimetadiona",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Alto risco de discrasias sanguíneas."
  },
  {
    "id": "mam_1239",
    "nome": "Trimetropim",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1240",
    "nome": "Trimipramine",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1241",
    "nome": "Tripelenamina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1242",
    "nome": "Triprolidina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1243",
    "nome": "Trissilicato de magnésio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1244",
    "nome": "Tropicamida",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1245",
    "nome": "Tropisetrona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1246",
    "nome": "Trospium",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1247",
    "nome": "Trovafloxacin",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1248",
    "nome": "Tubocurarina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1249",
    "nome": "Ubrogepant",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1250",
    "nome": "Ulipristal",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1251",
    "nome": "Ursodiol",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Não há indicação para uso por mulheres."
  },
  {
    "id": "mam_1252",
    "nome": "Ustekinumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1253",
    "nome": "Valaciclovir",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1254",
    "nome": "Valeriane (Valeriane officinalis)",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1255",
    "nome": "Valganciclovir",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1256",
    "nome": "Valsartana",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1257",
    "nome": "Vancomicina",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1258",
    "nome": "Vareniclina",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Uso possivelmente perigoso durante a amamentação."
  },
  {
    "id": "mam_1259",
    "nome": "Varfarina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1260",
    "nome": "Vecurônio",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1261",
    "nome": "Vedolizumab",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1262",
    "nome": "Venlafaxina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1263",
    "nome": "Verapamil",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1264",
    "nome": "Verteporfin",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Suspender a amamentação por 24 horas após a administração do fármaco."
  },
  {
    "id": "mam_1265",
    "nome": "Vidarabina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1266",
    "nome": "Vigabatrina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1267",
    "nome": "Vilazodona",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1268",
    "nome": "Vildagliptina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1269",
    "nome": "Vinblastina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por, pelo menos, 10 dias após a administração do fármaco."
  },
  {
    "id": "mam_1270",
    "nome": "Vincristina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 35 dias após a administração do fármaco."
  },
  {
    "id": "mam_1271",
    "nome": "Vinorelbina",
    "nivel": "Nível 5",
    "primaryLevel": 5,
    "levels": [
      5
    ],
    "classificacao": "Uso contraindicado durante a amamentação",
    "descricao": "Suspender a amamentação por 30 dias após a administração do fármaco."
  },
  {
    "id": "mam_1272",
    "nome": "Violeta genciana",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1273",
    "nome": "Vitamina A (retinol)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1274",
    "nome": "Vitamina B1 (tiamina)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1275",
    "nome": "Vitamina B12 (cianocobalamina)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1276",
    "nome": "Vitamina B2 (cianocobalamina)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1277",
    "nome": "Vitamina B2 (riboflavina)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1278",
    "nome": "Vitamina B3 (ácido nicotínico, niacina)",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1279",
    "nome": "Vitamina B5 (ácido pantotênico)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1280",
    "nome": "Vitamina B6 (piridoxina)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1281",
    "nome": "Vitamina B7 (biotina)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1282",
    "nome": "Vitamina C (ácido ascórbico)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1283",
    "nome": "Vitamina D (calciferol)",
    "nivel": "Nível 1 / Nível 4",
    "primaryLevel": 1,
    "levels": [
      1,
      4
    ],
    "classificacao": "Uso compatível com a amamentação / Uso possivelmente perigoso durante a amamentação",
    "descricao": "Nível 1 – Uso compatível com a amamentação Nível 4 – Uso possivelmente perigoso durante a amamentação O uso de doses maternas extremamente elevadas resulta em altas concentrações de vitamina D no leite materno. Monitorar o bebê para risco de hipercalcemia e sinais de intoxicação."
  },
  {
    "id": "mam_1284",
    "nome": "Vitamina E (alfa tocoferol)",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1285",
    "nome": "Vitamina K (fitanodiona)",
    "nivel": "Nível 1",
    "primaryLevel": 1,
    "levels": [
      1
    ],
    "classificacao": "Uso compatível com a amamentação",
    "descricao": "Uso compatível com a amamentação."
  },
  {
    "id": "mam_1286",
    "nome": "Voriconazole",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1287",
    "nome": "Vortioxetina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1288",
    "nome": "Vortioxetine",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1289",
    "nome": "Xilometazolina",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1290",
    "nome": "Zafirlucaste",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1291",
    "nome": "Zaleplon",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1292",
    "nome": "Zanamivir",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1293",
    "nome": "Zidovudina",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação. O Ministério da Saúde do Brasil recomenda que as pessoas vivendo com HIV não amamentem."
  },
  {
    "id": "mam_1294",
    "nome": "Zileuton",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1295",
    "nome": "Zinco",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1296",
    "nome": "Ziprazidona",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1297",
    "nome": "Zolmitriptano",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1298",
    "nome": "Zolpidem",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  },
  {
    "id": "mam_1299",
    "nome": "Zonisamida",
    "nivel": "Nível 4",
    "primaryLevel": 4,
    "levels": [
      4
    ],
    "classificacao": "Uso possivelmente perigoso durante a amamentação",
    "descricao": "Elevada dose relativa no lactente (33%). Há risco de sonolência, vertigem, agitação, leucopenia, perda de peso, hipertermia e oligo-hidrose."
  },
  {
    "id": "mam_1300",
    "nome": "Zopiclone",
    "nivel": "Nível 2",
    "primaryLevel": 2,
    "levels": [
      2
    ],
    "classificacao": "Dados limitados",
    "descricao": "Uso provavelmente compatível com a amamentação."
  },
  {
    "id": "mam_1301",
    "nome": "Zuclopentixol",
    "nivel": "Nível 3",
    "primaryLevel": 3,
    "levels": [
      3
    ],
    "classificacao": "Dados limitados ou ausência de dados",
    "descricao": "Uso provavelmente compatível com a amamentação, com possibilidade de efeitos adversos."
  }
];

export default AMAMENTACAO_DATA;

export function normalizeAmamentacaoText(text) {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function getAmamentacaoStats() {
  const stats = { total: AMAMENTACAO_DATA.length, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, dual: 0 };
  for (const item of AMAMENTACAO_DATA) {
    if (item.levels && item.levels.length > 1) {
      stats.dual++;
    }
    const prim = item.primaryLevel;
    if (stats[prim] !== undefined) {
      stats[prim]++;
    }
  }
  return stats;
}

export function filterAmamentacao({ query = '', nivel = 'all', sort = 'name' } = {}) {
  const q = normalizeAmamentacaoText(query);
  const targetLevel = nivel === 'all' ? null : parseInt(nivel, 10);

  let filtered = AMAMENTACAO_DATA.filter((item) => {
    // Level match
    if (targetLevel !== null) {
      const matchLevel = item.levels ? item.levels.includes(targetLevel) : item.primaryLevel === targetLevel;
      if (!matchLevel) return false;
    }

    // Query match
    if (q) {
      const normNome = normalizeAmamentacaoText(item.nome);
      const normDesc = normalizeAmamentacaoText(item.descricao);
      const normClass = normalizeAmamentacaoText(item.classificacao);
      if (!normNome.includes(q) && !normDesc.includes(q) && !normClass.includes(q)) {
        return false;
      }
    }

    return true;
  });

  if (sort === 'name') {
    filtered.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' }));
  } else if (sort === 'risk-asc') {
    filtered.sort((a, b) => a.primaryLevel - b.primaryLevel || a.nome.localeCompare(b.nome, 'pt-BR'));
  } else if (sort === 'risk-desc') {
    filtered.sort((a, b) => b.primaryLevel - a.primaryLevel || a.nome.localeCompare(b.nome, 'pt-BR'));
  }

  return filtered;
}
