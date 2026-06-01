import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Convert TSV-style tables (tab-separated) into Markdown pipe tables
function convertTsvTables(text) {
  const lines = text.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.includes('\t')) {
      const tableLines = [];
      while (i < lines.length && lines[i].includes('\t')) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.map(l => l.split('\t').map(cell => cell.trim()));
      const header = rows[0];
      const mdHeader = '| ' + header.join(' | ') + ' |';
      const mdSep = '| ' + header.map(() => '---').join(' | ') + ' |';
      const mdBody = rows.slice(1).map(r => {
        while (r.length < header.length) r.push('');
        return '| ' + r.join(' | ') + ' |';
      });
      result.push(mdHeader, mdSep, ...mdBody, '');
    } else {
      result.push(line);
      i++;
    }
  }
  return result.join('\n');
}

// Convert inline [N] citations to superscript anchor links
// and add anchor IDs to ordered list items inside the References section
function processReferences(text) {
  const lines = text.split('\n');
  let inRefsSection = false;
  const result = lines.map((line) => {
    if (/^#{1,6}\s+.*referênci/i.test(line)) {
      inRefsSection = true;
      return line;
    }
    if (inRefsSection && /^#{1,6}\s+/.test(line) && !/^#{1,6}\s+.*referênci/i.test(line)) {
      inRefsSection = false;
    }
    if (inRefsSection) {
      // Match ordered list items: "1. " or "1) "
      const refMatch = line.match(/^(\s*)(\d+)[.)]\s/);
      if (refMatch) {
        const num = refMatch[2];
        return line.replace(/^(\s*)(\d+)([.)]\s)/, `$1<span id="ref-${num}"></span>**${num}.**  `);
      }
    }
    return line;
  });

  // Convert inline [N] to superscript links — but not inside code blocks
  const joined = result.join('\n');
  return joined.replace(/\[(\d+)\]/g, (_match, num) => {
    return `[<sup>${num}</sup>](#ref-${num})`;
  });
}

// Custom renderers
const components = {
  h1: ({ children }) => (
    <h1 className="text-xl font-extrabold text-foreground mt-6 mb-3 pb-2 border-b-2 border-primary/20">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-base font-bold text-foreground mt-5 mb-2.5 pb-1.5 border-b border-border">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-sm font-bold text-foreground mt-4 mb-2 flex items-center gap-1.5">
      <span className="w-1 h-4 bg-primary rounded-full inline-block flex-shrink-0" />
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xs font-semibold text-muted-foreground mt-3 mb-1.5 uppercase tracking-wide">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-sm leading-relaxed text-foreground mb-3">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-3 space-y-1 pl-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-3 space-y-1 pl-4 list-decimal">{children}</ol>
  ),
  li: ({ children, ordered }) => {
    if (ordered) {
      return (
        <li className="text-sm text-foreground leading-relaxed pl-1">{children}</li>
      );
    }
    return (
      <li className="text-sm text-foreground flex items-start gap-2 leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
        <span>{children}</span>
      </li>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl pl-4 pr-3 py-3 my-3 text-sm text-amber-900">
      {children}
    </blockquote>
  ),
  code: ({ inline, children }) => {
    if (inline) {
      return (
        <code className="bg-secondary text-primary text-xs font-mono px-1.5 py-0.5 rounded">
          {children}
        </code>
      );
    }
    return (
      <pre className="bg-gray-900 text-green-300 text-xs font-mono p-4 rounded-xl overflow-x-auto my-3">
        <code>{children}</code>
      </pre>
    );
  },
  strong: ({ children }) => (
    <strong className="font-bold text-foreground">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-muted-foreground">{children}</em>
  ),
  hr: () => <hr className="border-border my-5" />,
  // ── Tables ──────────────────────────────────────────────────────────────
  table: ({ children }) => (
    <div className="overflow-x-auto my-4 rounded-xl border border-border shadow-sm">
      <table className="w-full text-xs border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-primary text-white">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-border">{children}</tbody>
  ),
  tr: ({ children }) => (
    <tr className="even:bg-secondary/30 hover:bg-secondary/50 transition-colors">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-3 py-2.5 text-left font-bold text-xs uppercase tracking-wide whitespace-nowrap">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2 text-foreground align-top">{children}</td>
  ),
  // ── Links — inline citations rendered as superscripts ──────────────────
  a: ({ href, children }) => {
    const isRef = href && href.startsWith('#ref-');
    if (isRef) {
      return (
        <a
          href={href}
          className="text-primary font-semibold no-underline hover:text-primary/70 transition-colors scroll-smooth"
          onClick={(e) => {
            e.preventDefault();
            const id = href.replace('#', '');
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
        >
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
        {children}
      </a>
    );
  },
  sup: ({ children }) => (
    <sup className="text-[10px] font-bold text-primary align-super leading-none">{children}</sup>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="max-w-full rounded-xl my-3 shadow border border-border" />
  ),
};

export default function MarkdownRenderer({ content }) {
  const processed = convertTsvTables(processReferences(content || ''));
  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{processed}</ReactMarkdown>
    </div>
  );
}