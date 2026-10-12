import React from 'react';

export default function PageHeader({
  title,
  description,
  eyebrow,
  kind: _kind = 'tools',
  children = null,
}) {

  return (
    <header className="mb-6 pb-2 border-b border-slate-200/60">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-1">
              {eyebrow}
            </p>
          )}
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children && <div className="shrink-0">{children}</div>}
      </div>
    </header>
  );
}
