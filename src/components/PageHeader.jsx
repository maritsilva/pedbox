import React from 'react';
import { BookOpen, Calculator, Pill, LayoutGrid } from 'lucide-react';
const icons = { library: BookOpen, calculator: Calculator, doses: Pill, tools: LayoutGrid };
export default function PageHeader({ title, description, eyebrow, kind = 'tools', children = null }) {
  const Icon = icons[kind] || LayoutGrid;
  return <header className={`section-hero section-hero--${kind}`}>
    <div className="section-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="section-description">{description}</p>{children}</div>
    <div className="section-hero-symbol" aria-hidden="true"><Icon strokeWidth={1.3}/></div>
  </header>;
}
