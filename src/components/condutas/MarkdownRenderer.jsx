import React from 'react';
import ReactMarkdown from 'react-markdown';

// Convert TSV-style tables (tab-separated) into Markdown pipe tables
function convertTsvTables(text) {
  const lines = text.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    // Detect if this line has tabs (TSV row)
    if (line.includes('\t')) {
      // Collect all consecutive tab-separated lines
      const tableLines = [];
      while (i < lines.length && lines[i].includes('\t')) {
        tableLines.push(lines[i]);
        i++;
      }
      // Convert to markdown table
      const rows = tableLines.map(l => l.split('\t').map(cell => cell.trim()));
      const header = rows[0];
      const mdHeader = '| ' + header.join(' | ') + ' |';
      const mdSep = '| ' + header.map(() => '---').join(' | ') + ' |';
      const mdBody = rows.slice(1).map(r => {
        // Pad row to match header length
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

// Custom renderers for beautiful Markdown display
const components = {
  h1: ({ children }) => (
    <h1 className="text-xl font-extrabold text-foreground mt-6 mb-3 pb-2 border-b-2 border-primary/20 flex items-center gap-2">
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
    <h4 className="text-sm font-semibold text-muted-foreground mt-3 mb-1.5 uppercase tracking-wide text-xs">
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
    <ol className="mb-3 space-y-1 pl-1 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-sm text-foreground flex items-start gap-2 leading-relaxed">
      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),
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
  hr: () => <hr className="border-border my-4" />,
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
    <th className="px-3 py-2.5 text-left font-bold text-xs uppercase tracking-wide">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2 text-foreground">{children}</td>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="max-w-full rounded-xl my-3 shadow border border-border"
    />
  ),
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
      {children}
    </a>
  ),
};

export default function MarkdownRenderer({ content }) {
  const processed = convertTsvTables(content || '');
  return (
    <div className="markdown-body">
      <ReactMarkdown components={components}>{processed}</ReactMarkdown>
    </div>
  );
}