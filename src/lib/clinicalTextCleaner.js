/**
 * Utilitário para sanitizar e formatar textos clínicos e anotações médicas.
 * Limpa automaticamente códigos HTML colados de fontes como Google Docs, Word ou prontuários eletrônicos
 * (ex: <span id="docs-internal-guid-...">, <p dir="ltr">, &nbsp;, &gt;, &lt;, etc.),
 * preservando a legibilidade, parágrafos e quebras de linha médicas limpas.
 */

export function cleanClinicalText(raw) {
  if (!raw || typeof raw !== 'string') return '';

  let t = raw;

  // Se contiver tags HTML ou entidades de formatação
  if (t.includes('<') || t.includes('&')) {
    // 1. Converter quebras de linha e blocos antes de remover tags
    t = t.replace(/<br\s*\/?>/gi, '\n');
    t = t.replace(/<\/p>/gi, '\n');
    t = t.replace(/<\/div>/gi, '\n');
    t = t.replace(/<\/li>/gi, '\n');
    t = t.replace(/<\/h[1-6]>/gi, '\n\n');

    // 2. Remover todas as tags HTML restantes
    t = t.replace(/<[^>]+>/g, '');

    // 3. Decodificar entidades HTML essenciais
    t = t
      .replace(/&nbsp;/gi, ' ')
      .replace(/&gt;/gi, '>')
      .replace(/&lt;/gi, '<')
      .replace(/&amp;/gi, '&')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/&ndash;/gi, '–')
      .replace(/&mdash;/gi, '—');
  }

  // 4. Limpar espaços não-quebráveis Unicode
  t = t.replace(/\u00a0/g, ' ');

  // 5. Normalizar quebras de linha
  t = t.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  t = t.replace(/\n{3,}/g, '\n\n');

  return t.trim();
}
