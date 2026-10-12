/**
 * Utilitários e base de dados de Documentos vinculados ao Google Drive
 */

export function getGoogleDriveEmbedUrl(url) {
  if (!url) return '';
  const trimmed = url.trim();

  // 1. Google Drive file/d/ID
  const fileMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) {
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  }

  // 2. Google Drive open?id=ID ou uc?id=ID
  const idParamMatch = trimmed.match(/drive\.google\.com\/(?:open|uc)\?(?:[^&]*&)*id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch) {
    return `https://drive.google.com/file/d/${idParamMatch[1]}/preview`;
  }

  // 3. Google Docs document/d/ID
  const docMatch = trimmed.match(/docs\.google\.com\/document\/d\/([a-zA-Z0-9_-]+)/);
  if (docMatch) {
    return `https://docs.google.com/document/d/${docMatch[1]}/preview`;
  }

  // 4. Google Sheets spreadsheets/d/ID
  const sheetMatch = trimmed.match(/docs\.google\.com\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  if (sheetMatch) {
    return `https://docs.google.com/spreadsheets/d/${sheetMatch[1]}/preview`;
  }

  // 5. Google Slides presentation/d/ID
  const slideMatch = trimmed.match(/docs\.google\.com\/presentation\/d\/([a-zA-Z0-9_-]+)/);
  if (slideMatch) {
    return `https://docs.google.com/presentation/d/${slideMatch[1]}/embed?start=false&loop=false&delayms=3000`;
  }

  // 6. Google Drive Folder drive/folders/ID
  const folderMatch = trimmed.match(/drive\.google\.com\/drive\/(?:u\/\d+\/)?folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch) {
    return `https://drive.google.com/embeddedfolderview?id=${folderMatch[1]}#grid`;
  }

  // Fallback: se já for link direto com /preview ou /embed
  if (trimmed.includes('/preview') || trimmed.includes('/embed') || trimmed.includes('embeddedfolderview')) {
    return trimmed;
  }

  return trimmed;
}

export function detectGoogleDriveType(url) {
  if (!url) return 'doc';
  const u = url.toLowerCase();
  if (u.includes('folders') || u.includes('embeddedfolderview')) return 'folder';
  if (u.includes('spreadsheets') || u.includes('.xlsx') || u.includes('.csv')) return 'sheet';
  if (u.includes('presentation') || u.includes('.pptx')) return 'slide';
  if (u.includes('.pdf') || u.includes('/file/d/')) return 'pdf';
  return 'doc';
}

export const CATEGORIAS_DOCUMENTOS = [
  { id: 'Todas', label: 'Todos os Documentos' },
  { id: 'Diretrizes', label: 'Diretrizes & Manuais' },
  { id: 'Rotinas', label: 'Rotinas & Plantão' },
  { id: 'Tabelas', label: 'Tabelas & Diluições' },
  { id: 'Impressos', label: 'Impressos & Modelos' },
  { id: 'Pastas', label: 'Pastas do Drive' },
];

export const DEFAULT_DOCUMENTS = [
  {
    id: 'doc_sbp_reanimacao',
    titulo: 'Reanimação do Recém-Nascido em Sala de Parto (SBP 2024)',
    descricao: 'Diretriz oficial da Sociedade Brasileira de Pediatria com fluxograma de passos iniciais, VPP, intubação e medicações.',
    categoria: 'Diretrizes',
    tipo: 'pdf',
    driveUrl: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing',
    embedUrl: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/preview',
    fonte: 'SBP · 2024',
    tags: ['reanimação', 'neonatal', 'sala de parto', 'sbp', 'diretriz'],
    destaque: true,
  },
  {
    id: 'doc_guia_alimentar',
    titulo: 'Guia Alimentar para Crianças Brasileiras < 2 anos (Ministério da Saúde)',
    descricao: 'Manual oficial sobre introdução alimentar oportuna, aleitamento materno e alimentação complementar saudável.',
    categoria: 'Diretrizes',
    tipo: 'pdf',
    driveUrl: 'https://drive.google.com/file/d/1_GuiaAlimentarMS2024_Sample/view?usp=sharing',
    embedUrl: 'https://drive.google.com/file/d/1_GuiaAlimentarMS2024_Sample/preview',
    fonte: 'Ministério da Saúde · 2024',
    tags: ['alimentação', 'introdução alimentar', 'aleitamento', 'puericultura'],
    destaque: true,
  },
  {
    id: 'doc_diluicao_antibioticos',
    titulo: 'Tabela Prática de Diluição e Infusão de Antibióticos Pediátricos',
    descricao: 'Planilha de referência com volumes mínimos de reconstituição, soros compatíveis, tempos de infusão e estabilidade.',
    categoria: 'Tabelas',
    tipo: 'sheet',
    driveUrl: 'https://docs.google.com/spreadsheets/d/1_TabelaDiluicaoPedBoxSample/edit?usp=sharing',
    embedUrl: 'https://docs.google.com/spreadsheets/d/1_TabelaDiluicaoPedBoxSample/preview',
    fonte: 'Farmácia Clínica Pediátrica · HU',
    tags: ['diluição', 'antibióticos', 'infusão', 'estabilidade', 'enfermagem'],
    destaque: true,
  },
  {
    id: 'doc_checklist_enfermaria',
    titulo: 'Checklist de Admissão e Passagem de Plantão na Enfermaria',
    descricao: 'Modelo de resumo clínico SBAR estruturado para admissão pediátrica, balanço hídrico diário e pendências do plantão.',
    categoria: 'Rotinas',
    tipo: 'doc',
    driveUrl: 'https://docs.google.com/document/d/1_ChecklistAdmissaoPedBoxSample/edit?usp=sharing',
    embedUrl: 'https://docs.google.com/document/d/1_ChecklistAdmissaoPedBoxSample/preview',
    fonte: 'Rotinas de Enfermaria · PedBox',
    tags: ['checklist', 'admissão', 'plantão', 'sbar', 'enfermaria'],
    destaque: false,
  },
  {
    id: 'doc_modelos_receituario',
    titulo: 'Modelos de Prescrição Ambulatorial e Orientações aos Pais',
    descricao: 'Orientações pós-consulta prontas para entrega aos responsáveis (febre, lavagem nasal, desidratação e hidratação oral).',
    categoria: 'Impressos',
    tipo: 'doc',
    driveUrl: 'https://docs.google.com/document/d/1_ModelosPrescricaoPedBoxSample/edit?usp=sharing',
    embedUrl: 'https://docs.google.com/document/d/1_ModelosPrescricaoPedBoxSample/preview',
    fonte: 'Puericultura & Ambulatório',
    tags: ['receituário', 'impressos', 'orientações', 'família', 'prescrição'],
    destaque: false,
  },
  {
    id: 'doc_pasta_drive_equipe',
    titulo: 'Pasta Compartilhada: Arquivos e Protocolos do Serviço',
    descricao: 'Repositório central no Google Drive com artigos científicos, apresentações de rounds e rotinas atualizadas.',
    categoria: 'Pastas',
    tipo: 'folder',
    driveUrl: 'https://drive.google.com/drive/folders/1_PastaDriveEquipePedBoxSample',
    embedUrl: 'https://drive.google.com/embeddedfolderview?id=1_PastaDriveEquipePedBoxSample#grid',
    fonte: 'Google Drive do Serviço Pediátrico',
    tags: ['drive', 'pasta', 'compartilhada', 'equipe', 'repositório'],
    destaque: true,
  },
];
