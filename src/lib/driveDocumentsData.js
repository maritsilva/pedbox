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

export const DEFAULT_DOCUMENTS = [];

