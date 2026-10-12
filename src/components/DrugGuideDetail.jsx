import React from 'react';
import {
  AlertTriangle,
  ShieldAlert,
  Info,
  Tag,
  FlaskConical,
  Stethoscope,
  Syringe,
  AlertCircle,
  Star,
  User,
  Baby,
  Sparkles,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites.jsx';

function DoseGroup({ group, items }) {
  const isChild = /crian|lactente|rn |neonat|prematuro|bebê|pediátri/i.test(group);
  const isAdult = /adulto/i.test(group);
  const GroupIcon = isChild ? Baby : isAdult ? User : Stethoscope;

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200/80">
        <GroupIcon className="w-4 h-4 text-brand-navy" />
        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">{group}</span>
      </div>
      <div className="divide-y divide-slate-100">
        {items.map((item, ii) => (
          <div
            key={ii}
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 px-4 py-3 text-xs ${
              ii % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
            }`}
          >
            <span className="font-semibold text-slate-600 sm:max-w-[220px]">{item.label}</span>
            <span className="font-bold text-brand-navy sm:text-right">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DrugGuideDetail({ drug, colors, catIcon, catLabel }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!drug) return null;
  const fav = isFavorite(drug.id);

  // Quick pediatric dose highlight
  const firstChildGroup = drug.doses?.find((d) =>
    /crian|lactente|pediátri/i.test(d.group)
  ) || drug.doses?.[0];
  const highlightDose = firstChildGroup?.items?.[0];

  return (
    <div className="space-y-6">
      {/* HEADER SECTION (Name + Star + Category) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
              {drug.name}
            </h1>
            {drug.suffix && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                {drug.suffix}
              </span>
            )}
            <button
              onClick={() => toggleFavorite(drug.id)}
              className="p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
              title={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <Star
                className={`w-5 h-5 transition-colors ${
                  fav ? 'fill-amber-400 text-amber-400' : 'text-slate-300 hover:text-slate-400'
                }`}
              />
            </button>
          </div>
          <p className="text-sm font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
            <span>{catIcon}</span>
            <span>{catLabel}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-bold text-brand-navy">
            <Info className="w-3.5 h-3.5 text-brand-teal" />
            Visão Geral Completa
          </span>
        </div>
      </div>

      {/* TWO-COLUMN GRID (Unified overview content on left, Highlight Cards on right) */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* MAIN OVERVIEW CONTENT */}
        <div className="lg:col-span-8 space-y-6">
          {/* Informações principais / Observações */}
          {drug.observations && (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Informações Principais
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">{drug.observations}</p>
            </div>
          )}

          {/* Doses e Administração */}
          {drug.doses && drug.doses.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-brand-teal" />
                <span>Dose e Administração</span>
              </h2>
              <div className="space-y-4">
                {drug.doses.map((group, gi) => (
                  <DoseGroup key={gi} group={group.group} items={group.items} />
                ))}
              </div>
            </div>
          )}

          {/* Apresentações e Nomes Comerciais */}
          {((drug.presentations && drug.presentations.length > 0) || (drug.brands && drug.brands.length > 0)) && (
            <div className="space-y-4">
              {drug.presentations && drug.presentations.length > 0 && (
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <FlaskConical className="w-4 h-4 text-brand-teal" />
                    <span>Apresentações Mais Comuns</span>
                  </h3>
                  <div className="divide-y divide-slate-100">
                    {drug.presentations.map((p, i) => (
                      <div key={i} className="flex justify-between items-center py-2.5 text-xs">
                        <div className="flex items-center gap-2">
                          <FlaskConical className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                          <span className="font-semibold text-slate-800">{p.label}</span>
                        </div>
                        {p.price && (
                          <span className="text-slate-400 font-medium">{p.price}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {drug.brands && drug.brands.length > 0 && (
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-purple-500" />
                    <span>Nomes Comerciais</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {drug.brands.map((b, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                      >
                        <Tag className="w-3 h-3 text-purple-400" />
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Preparo e diluição */}
          {drug.preparation && (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal">
                <Syringe className="w-4 h-4" />
                <span>Preparo e Diluição</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {drug.preparation}
              </p>
            </div>
          )}

          {/* Ajuste Renal */}
          {drug.renalAdjustment && drug.renalAdjustment.length > 0 && (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Info className="w-4 h-4" />
                <span>Ajuste na Insuficiência Renal</span>
              </div>
              <div className="divide-y divide-slate-100 rounded-xl overflow-hidden border border-slate-200">
                {drug.renalAdjustment.map((r, i) => (
                  <div key={i} className="flex justify-between items-center p-3 text-xs">
                    <span className="font-bold text-slate-700">{r.label}</span>
                    <span className="text-slate-600">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sensibilidade antimicrobiana */}
          {drug.sensitivity && (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <ShieldAlert className="w-4 h-4 text-brand-teal" />
                <span>Espectro & Sensibilidade</span>
              </div>
              {drug.sensitivity.susceptible?.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-emerald-700 mb-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Sensíveis:
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {drug.sensitivity.susceptible.join(', ')}
                  </p>
                </div>
              )}
              {drug.sensitivity.resistant?.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-bold text-rose-700 mb-1.5 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" /> Resistentes:
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {drug.sensitivity.resistant.join(', ')}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Efeitos adversos */}
          {drug.sideEffects && drug.sideEffects.length > 0 && (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>Reações Adversas Frequentes</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {drug.sideEffects.map((ef, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{ef}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contraindicações */}
          {drug.contraindications && drug.contraindications.length > 0 && (
            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 shadow-2xs space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Contraindicações Absolutas & Relativas</span>
              </h3>
              <ul className="space-y-2 text-xs text-rose-900">
                {drug.contraindications.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">✕</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: QUICK HIGHLIGHT CARDS (Mockup 4 style) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Dose Pediátrica Callout */}
          {highlightDose && (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-brand-teal text-xs font-bold uppercase tracking-wider">
                <Baby className="w-4 h-4" />
                <span>Dose Pediátrica</span>
              </div>
              <p className="text-xl font-display font-extrabold text-brand-navy">
                {highlightDose.value}
              </p>
              <p className="text-[11px] text-slate-500">{highlightDose.label}</p>
            </div>
          )}

          {/* Pontos de Atenção Callout */}
          <div className="bg-teal-50/50 border border-teal-200 rounded-2xl p-5 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-teal" />
              <span>Pontos de Atenção</span>
            </div>
            <ul className="space-y-1.5 text-xs text-teal-900">
              <li>• Respeitar rigorosamente a dose máxima por dia.</li>
              <li>• Atenção em pacientes com disfunção hepática ou renal.</li>
              <li>• Evitar uso prolongado sem reavaliação médica.</li>
              <li>• Associar a medidas não farmacológicas sempre que indicado.</li>
            </ul>
          </div>

          {/* Referências Bibliográficas */}
          <div className="text-[11px] text-slate-400 space-y-1 px-1 pt-2">
            <p className="font-bold text-slate-500 uppercase tracking-wider">Fontes de Referência</p>
            <p>• Bula aprovada pela ANVISA / Lexicomp® Pediatric.</p>
            <p>• Manual de Farmacologia Pediátrica - SBP 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
}