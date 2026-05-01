import React, { useState } from 'react';
import { AlertTriangle, ShieldAlert, ChevronDown, ChevronUp, Info, Package, Tag, FlaskConical, Stethoscope, Syringe, AlertCircle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFavorites } from '@/hooks/useFavorites.jsx';

function Section({ title, icon, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary/40 transition-colors"
      >
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          {icon}
          {title}
        </h3>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DrugGuideDetail({ drug, colors, catIcon, catLabel }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  if (!drug) return null;

  const fav = isFavorite(drug.id);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className={`${colors.bg} ${colors.border} border rounded-2xl p-5`}>
        <div className="flex items-start gap-3">
          <span className="text-3xl mt-0.5">{catIcon}</span>
          <div className="flex-1">
            <p className={`text-xs font-semibold ${colors.text} mb-0.5`}>{catLabel}</p>
            <h1 className="text-2xl font-extrabold text-foreground leading-tight">
              {drug.name}
              {drug.suffix && <span className="ml-2 text-sm font-normal text-muted-foreground">({drug.suffix})</span>}
            </h1>
          </div>
          <button
            onClick={() => toggleFavorite(drug.id)}
            className="p-2 rounded-xl hover:bg-black/5 transition-colors flex-shrink-0"
            title={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <Star className={`w-5 h-5 transition-colors ${fav ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
          </button>
        </div>
        {drug.observations && (
          <p className="mt-3 text-sm text-foreground/80 leading-relaxed border-t border-black/10 pt-3">{drug.observations}</p>
        )}
      </div>

      {/* Doses */}
      {drug.doses && drug.doses.length > 0 && (
        <Section title="Doses" icon={<Stethoscope className="w-4 h-4 text-green-500" />}>
          <div className="space-y-5">
            {drug.doses.map((group, gi) => (
              <div key={gi}>
                <p className={`text-xs font-bold ${colors.text} uppercase tracking-wide mb-2`}>{group.group}</p>
                <div className="space-y-2">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="rounded-xl border border-border bg-secondary/30 px-4 py-2.5">
                      <p className="text-xs font-semibold text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="text-sm text-foreground leading-snug">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Preparo / Diluição */}
      {drug.preparation && (
        <Section title="Preparo e Diluição" icon={<Syringe className="w-4 h-4 text-cyan-500" />}>
          <p className="text-sm text-foreground leading-relaxed">{drug.preparation}</p>
        </Section>
      )}

      {/* Apresentações e marcas */}
      <Section title="Apresentações e Marcas" icon={<Package className="w-4 h-4 text-blue-500" />}>
        {drug.presentations && drug.presentations.length > 0 && (
          <div className="mb-3 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Apresentações</p>
            {drug.presentations.map((p, i) => (
              <div key={i} className="flex items-center justify-between bg-secondary/50 rounded-xl px-3 py-2">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-foreground">{p.label}</span>
                </div>
                {p.price && <span className="text-xs font-semibold text-muted-foreground">{p.price}</span>}
              </div>
            ))}
          </div>
        )}
        {drug.brands && drug.brands.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Marcas Comerciais</p>
            <ul className="space-y-1.5">
              {drug.brands.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <Tag className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>



      {/* Ajuste renal */}
      {drug.renalAdjustment && drug.renalAdjustment.length > 0 && (
        <Section title="Ajuste na Insuficiência Renal" icon={<Info className="w-4 h-4 text-amber-500" />} defaultOpen={false}>
          <div className="space-y-2">
            {drug.renalAdjustment.map((r, i) => (
              <div key={i} className="flex items-start justify-between gap-3 rounded-xl bg-amber-50 border border-amber-200 px-3 py-2.5">
                <span className="text-xs font-semibold text-amber-700 min-w-fit">{r.label}</span>
                <span className="text-sm text-amber-900 text-right">{r.value}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Sensibilidade */}
      {drug.sensitivity && (drug.sensitivity.susceptible?.length > 0 || drug.sensitivity.resistant?.length > 0 || drug.sensitivity.warning) && (
        <Section title="Sensibilidade / Resistência" icon={<ShieldAlert className="w-4 h-4 text-red-500" />} defaultOpen={false}>
          {drug.sensitivity.susceptible?.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-bold text-green-600 uppercase mb-2">Sensíveis</p>
              <ul className="space-y-1.5">
                {drug.sensitivity.susceptible.map((s, i) => (
                  <li key={i} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {drug.sensitivity.resistant?.length > 0 && (
            <div className="mb-3">
              <p className="text-xs font-bold text-red-600 uppercase mb-2">Resistentes</p>
              <ul className="space-y-1.5">
                {drug.sensitivity.resistant.map((r, i) => (
                  <li key={i} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">✗</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {drug.sensitivity.warning && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-2">
              <p className="text-xs text-amber-800 leading-relaxed">{drug.sensitivity.warning}</p>
            </div>
          )}
        </Section>
      )}

      {/* Efeitos colaterais */}
      {drug.sideEffects && drug.sideEffects.length > 0 && (
        <Section title="Efeitos Colaterais" icon={<AlertTriangle className="w-4 h-4 text-orange-500" />} defaultOpen={false}>
          <ul className="space-y-1.5">
            {drug.sideEffects.map((ef, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-orange-400 mt-0.5 flex-shrink-0">•</span>
                <span>{ef}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Contraindicações */}
      {drug.contraindications && drug.contraindications.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <p className="text-sm font-semibold text-red-700">Contraindicações</p>
          </div>
          <ul className="space-y-1">
            {drug.contraindications.map((c, i) => (
              <li key={i} className="text-sm text-red-700 flex items-start gap-1.5">
                <span className="mt-0.5">⚠️</span> {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}