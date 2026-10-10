import React, { useState } from 'react';
import { Search, Syringe, ArrowUpRight, ShieldCheck, Calendar, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {
  VACCINE_AGES,
  VACCINE_REVIEW_DATE,
  VACCINE_SOURCES,
  filterVaccineGuide,
} from '../lib/vaccineGuide';

function SourceLinks({ page }) {
  return (
    <p className="mt-3 text-xs leading-relaxed text-slate-400">
      Referências:{' '}
      <a className="underline hover:text-brand-navy" href={VACCINE_SOURCES.pni.url} target="_blank" rel="noreferrer">
        PNI 2026
      </a>{' '}
      ·{' '}
      <a className="underline hover:text-brand-navy" href={VACCINE_SOURCES.sbim.url} target="_blank" rel="noreferrer">
        SBIm 2026/2027
      </a>{' '}
      · Leitura expandida, p. {page}.
    </p>
  );
}

export default function Vacinas() {
  const [network, setNetwork] = useState('compare');
  const [query, setQuery] = useState('');
  const [age, setAge] = useState('all');
  const vaccines = filterVaccineGuide({ network, query, age });

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-6">
      {/* HEADER WITH SCHEME TOGGLE (PNI vs SBIm vs Comparar) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
            Esquema vacinal pediátrico
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Calendário de vacinação conforme Programa Nacional de Imunizações (PNI) e SBIm.
          </p>
        </div>

        {/* Network Toggle Pills */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start sm:self-auto shrink-0">
          {[
            ['compare', 'Comparar PNI / SBIm'],
            ['pni', 'PNI (SUS)'],
            ['sbim', 'SBIm (Privado)'],
          ].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setNetwork(val)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                network === val
                  ? 'bg-white text-brand-navy shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* HORIZONTAL AGE MILESTONES TIMELINE (Mockup 6 style) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Marco do Calendário Pediátrico</span>
          </span>
          {age !== 'all' && (
            <button
              onClick={() => setAge('all')}
              className="text-xs font-semibold text-brand-teal hover:underline"
            >
              Ver todas as idades
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <button
            onClick={() => setAge('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
              age === 'all'
                ? 'bg-brand-navy text-white shadow-xs'
                : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Todas as idades
          </button>
          {VACCINE_AGES.map(([val, label]) => (
            <button
              key={val}
              onClick={() => setAge(val)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                age === val
                  ? 'bg-brand-navy text-white shadow-xs font-bold'
                  : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* SEARCH BAR & COUNTER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar por nome de vacina ou doença..."
            className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
          />
        </div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {vaccines.length} {vaccines.length === 1 ? 'imunobiológico listado' : 'imunobiológicos listados'}
        </p>
      </div>

      {/* TWO COLUMN GRID: VACCINES CARDS ON LEFT, CLINICAL NOTES ON RIGHT (Mockup 6) */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* VACCINES LIST (Left 8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {vaccines.map((v) => (
              <article
                key={v.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:border-brand-teal transition-all flex flex-col justify-between"
                data-testid={`vaccine-${v.id}`}
              >
                <div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
                      <Syringe className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-bold text-brand-navy leading-tight">
                        {v.name}
                      </h2>
                    </div>
                  </div>

                  {/* Schemes Comparison */}
                  <div className="mt-3 space-y-2 text-xs">
                    {network !== 'sbim' && (
                      <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-slate-500 block mb-0.5">
                          PNI (Público)
                        </span>
                        <p className="text-slate-700 leading-snug">{v.pni}</p>
                      </div>
                    )}
                    {network !== 'pni' && (
                      <div className="rounded-xl bg-brand-sky/40 p-2.5 border border-brand-sky">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-brand-teal block mb-0.5">
                          SBIm (Privado)
                        </span>
                        <p className="text-slate-800 leading-snug">{v.sbim}</p>
                      </div>
                    )}
                  </div>

                  {/* Collapsible Details */}
                  {v.note && (
                    <details className="mt-2 text-xs text-slate-500">
                      <summary className="cursor-pointer font-semibold text-brand-teal hover:underline py-1">
                        Diferenças & Cuidados
                      </summary>
                      <p className="mt-1 text-[11px] leading-relaxed bg-slate-50 p-2 rounded-lg border border-slate-100 text-slate-600">
                        {v.note}
                      </p>
                    </details>
                  )}
                </div>

                <SourceLinks page={v.readingPage} />
              </article>
            ))}
          </div>

          {vaccines.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-700">
                Nenhuma vacina encontrada para estes critérios.
              </p>
              <button
                onClick={() => {
                  setAge('all');
                  setQuery('');
                  setNetwork('compare');
                }}
                className="text-xs font-bold text-brand-teal hover:underline"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: CLINICAL ADVISORIES (Mockup 6 style) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              <span>Informações importantes</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed divide-y divide-slate-100">
              <li className="pt-1.5">
                <strong className="text-slate-800 block">Respeite os intervalos:</strong>
                Atrasos não exigem reiniciar esquemas na maioria das situações.
              </li>
              <li className="pt-2">
                <strong className="text-slate-800 block">Prematuros & Baixo Peso:</strong>
                Usar idade cronológica quando clinicamente estáveis; BCG requer peso ≥ 2.000 g.
              </li>
              <li className="pt-2">
                <strong className="text-slate-800 block">Vacinas Combinadas:</strong>
                Pentavalente PNI (DTPw) difere de penta acelular (DTPa + VIP + Hib).
              </li>
              <li className="pt-2">
                <strong className="text-slate-800 block">Situações Especiais (CRIE):</strong>
                Imunossupressão, nefropatias e alergias graves exigem avaliação de CRIE.
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs space-y-1 text-amber-900">
            <div className="flex items-center gap-1 font-bold text-amber-800">
              <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Atualização das Normas</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Fontes conferidas em {VACCINE_REVIEW_DATE}. As doses de VIP no reforço aos 4 anos seguem a substituição da VOP pelo Ministério da Saúde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
