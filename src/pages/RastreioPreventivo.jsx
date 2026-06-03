import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown, ChevronRight, Info, AlertCircle } from 'lucide-react';

// ── Legend ────────────────────────────────────────────────────────────────────
const LEGEND = [
  { symbol: '●', label: 'Realizar (universal)', color: 'bg-blue-600 text-white' },
  { symbol: '★', label: 'Avaliação de risco (seletivo)', color: 'bg-amber-500 text-white' },
  { symbol: '—', label: 'Intervalo em que pode ser realizado', color: 'bg-gray-400 text-white' },
];

// ── Age columns ───────────────────────────────────────────────────────────────
const AGES = [
  'Pré-natal', 'RN', '3–5d', '1m', '2m', '4m', '6m', '9m',
  '12m', '15m', '18m', '24m', '30m', '3a', '4a', '5a',
  '6a', '7a', '8a', '9a', '10a', '11a', '12a', '13a', '14a',
  '15a', '16a', '17a', '18a', '19a', '20a', '21a',
];

// ── Screening data ────────────────────────────────────────────────────────────
// Format: array of 32 values (one per age column), values: '●' | '★' | '—' | ''
// Based on AAP/Bright Futures Periodicity Schedule (Feb 2025)

const CATEGORIES = [
  {
    id: 'medidas',
    label: 'Medidas Antropométricas',
    color: 'blue',
    items: [
      {
        label: 'Comprimento / Estatura e Peso',
        note: 'Em todas as consultas preventivas',
        data: ['●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●'],
      },
      {
        label: 'Perímetro Cefálico',
        note: 'Do nascimento até 24 meses',
        data: ['','●','●','●','●','●','●','●','●','●','●','●','','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Peso por Comprimento',
        note: 'Do nascimento até 30 meses',
        data: ['','●','●','●','●','●','●','●','●','●','●','●','●','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'IMC',
        note: 'A partir dos 2 anos',
        data: ['','','','','','','','','','','','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●'],
      },
      {
        label: 'Pressão Arterial',
        note: '< 3 anos: avaliação de risco; ≥ 3 anos: universal',
        data: ['','★','★','★','★','★','★','★','★','★','★','★','★','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●'],
      },
    ],
  },
  {
    id: 'sensorial',
    label: 'Triagem Sensorial',
    color: 'purple',
    items: [
      {
        label: 'Visão',
        note: 'Universal aos 3–5 anos; seletivo em outros momentos',
        data: ['','★','★','★','★','★','★','★','★','★','★','★','★','●','●','●','★','●','★','●','★','●','★','★','●','★','★','★','★','★','★','★'],
      },
      {
        label: 'Audição — Triagem Neonatal',
        note: 'Universal no RN e 1ª semana; seletivo nos demais',
        data: ['','●','●','★','★','★','★','★','★','★','★','★','★','●','●','●','★','●','★','●','●','●','●','','','','','','','','',''],
      },
    ],
  },
  {
    id: 'desenvolvimento',
    label: 'Desenvolvimento / Saúde Mental',
    color: 'green',
    items: [
      {
        label: 'Depressão Materna',
        note: 'Triagem universal nas consultas de 1, 2, 4 e 6 meses',
        data: ['','','','●','●','●','●','','','','','','','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Triagem de Desenvolvimento',
        note: 'Universal aos 9, 18 meses e 2½ anos (+ vigilância em todas as consultas)',
        data: ['','','','','','','','●','','','●','','●','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Triagem de TEA (Autismo)',
        note: 'Universal aos 18 meses e 2 anos',
        data: ['','','','','','','','','','','●','●','','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Vigilância do Desenvolvimento',
        note: 'Em todas as consultas preventivas',
        data: ['','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●'],
      },
      {
        label: 'Triagem Comportamental / Socioemocional',
        note: 'Em todas as consultas preventivas',
        data: ['','','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●'],
      },
      {
        label: 'Triagem de Tabaco, Álcool ou Drogas',
        note: 'Adolescentes (11–21 anos)',
        data: ['','','','','','','','','','','','','','','','','','','','','','★','★','★','★','★','★','★','★','★','★','★'],
      },
      {
        label: 'Depressão e Risco de Suicídio',
        note: 'Universal a partir dos 12 anos',
        data: ['','','','','','','','','','','','','','','','','','','','','','','●','●','●','●','●','●','●','●','●','●'],
      },
    ],
  },
  {
    id: 'procedimentos',
    label: 'Procedimentos e Triagens Laboratoriais',
    color: 'orange',
    items: [
      {
        label: 'Triagem Neonatal (Sangue)',
        note: 'Painel neonatal obrigatório — confirmar ao nascimento e 1ª semana',
        data: ['','●','●','●','●','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Bilirrubina Neonatal',
        note: 'Universal no RN (≥ 35 semanas)',
        data: ['','●','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Cardiopatia Congênita Crítica',
        note: 'Oximetria de pulso após 24h de vida, antes da alta',
        data: ['','●','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Imunizações',
        note: 'Segundo calendário vacinal do AAP — toda consulta é oportunidade',
        data: ['','●','●','','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●','●'],
      },
      {
        label: 'Anemia',
        note: 'Universal aos 12m; seletivo em outras idades',
        data: ['','','','','','★','','','★','●','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★'],
      },
      {
        label: 'Chumbo (Plumbemia)',
        note: 'Universal em áreas de alta prevalência (12m e 24m); seletivo nas demais',
        data: ['','','','','','','★','★','●/★','★','','●/★','','★','★','★','★','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Tuberculose',
        note: 'Triagem seletiva por fatores de risco a partir de 1 mês',
        data: ['','','','★','','★','','','★','','','','','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★'],
      },
      {
        label: 'Dislipidemia',
        note: 'Universal: 1x entre 9–11a e 1x entre 17–21a; seletivo em outras idades',
        data: ['','','','','','','','','','','','','','','','','','','','●','','','','','','','','★','','','●',''],
      },
      {
        label: 'IST (Infecções Sexualmente Transmissíveis)',
        note: 'Seletivo a partir de 11 anos conforme fatores de risco',
        data: ['','','','','','','','','','','','','','','','','','','','','','★','★','★','★','★','★','★','★','★','★','★'],
      },
      {
        label: 'HIV',
        note: 'Universal: ao menos 1x entre 15–21 anos; seletivo a partir de 11a',
        data: ['','','','','','','','','','','','','','','','','','','','','','★','★','★','★','●','★','★','★','★','★','★'],
      },
      {
        label: 'Hepatite B',
        note: 'Avaliação de risco em adolescentes',
        data: ['','★','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Hepatite C',
        note: 'Universal 1x entre 18–79 anos; risco aumentado: anual',
        data: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','●','','',''],
      },
      {
        label: 'Parada Cardíaca Súbita',
        note: 'Avaliação de risco conforme histórico',
        data: ['','','','','','','','','','','','','','','','','','','','','','','','','★','','','','','','',''],
      },
      {
        label: 'Displasia Cervical',
        note: 'Universal aos 21 anos (Papanicolau)',
        data: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','●'],
      },
    ],
  },
  {
    id: 'saude_bucal',
    label: 'Saúde Bucal',
    color: 'teal',
    items: [
      {
        label: 'Avaliação de Saúde Bucal / Referência a Dentista',
        note: 'Avaliação de risco a partir de 6m; verificar existência de "lar dental"',
        data: ['','','','','','','★','★','★','★','★','★','★','★','★','★','★','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Verniz Fluoretado',
        note: 'A partir da erupção do 1º dente até estabelecimento de lar dental',
        data: ['','','','','','','●','','','','','','','','','','','','','','','','','','','','','','','','',''],
      },
      {
        label: 'Suplementação de Flúor',
        note: 'Se fonte primária de água for deficiente em flúor (6m–16a)',
        data: ['','','','','','','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','★','','','','','',''],
      },
    ],
  },
];

const COLOR = {
  blue:   { header: 'bg-blue-600',   badge: 'bg-blue-100 text-blue-700',   dot: 'bg-blue-500' },
  purple: { header: 'bg-purple-600', badge: 'bg-purple-100 text-purple-700', dot: 'bg-purple-500' },
  green:  { header: 'bg-green-600',  badge: 'bg-green-100 text-green-700',  dot: 'bg-green-500' },
  orange: { header: 'bg-orange-600', badge: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500' },
  teal:   { header: 'bg-teal-600',   badge: 'bg-teal-100 text-teal-700',    dot: 'bg-teal-500' },
};

function CellIcon({ value }) {
  if (value === '●') return <span className="text-blue-600 font-black text-base">●</span>;
  if (value === '★') return <span className="text-amber-500 font-black text-sm">★</span>;
  if (value === '—') return <span className="text-gray-400 font-bold text-lg">—</span>;
  if (value === '●/★') return <span className="text-xs"><span className="text-blue-600 font-black">●</span><span className="text-[8px] text-gray-400">/</span><span className="text-amber-500 font-black">★</span></span>;
  return <span className="text-gray-200 text-xs">·</span>;
}

function CategorySection({ cat }) {
  const [open, setOpen] = useState(true);
  const c = COLOR[cat.color] || COLOR.blue;
  return (
    <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center gap-3 px-5 py-3.5 ${c.header} text-white`}
      >
        <span className="text-base font-extrabold flex-1 text-left">{cat.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
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
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-secondary/60">
                    <th className="px-4 py-2 text-left font-bold text-foreground sticky left-0 bg-secondary/60 min-w-[200px] border-r border-border">Triagem</th>
                    {AGES.map(age => (
                      <th key={age} className="px-1 py-2 text-center font-semibold text-muted-foreground whitespace-nowrap min-w-[36px] border-r border-border/40 last:border-0">
                        {age}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {cat.items.map((item, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}>
                      <td className="px-4 py-3 sticky left-0 bg-inherit border-r border-border min-w-[200px]">
                        <p className="font-semibold text-foreground leading-snug">{item.label}</p>
                        {item.note && <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{item.note}</p>}
                      </td>
                      {item.data.map((val, j) => (
                        <td key={j} className="px-1 py-3 text-center border-r border-border/40 last:border-0">
                          <CellIcon value={val} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Summary cards ──────────────────────────────────────────────────────────────
const KEY_ITEMS = [
  { age: 'Recém-Nascido', items: ['Triagem neonatal (painel obrigatório)', 'Bilirrubina sérica total', 'Triagem auditiva neonatal', 'Cardiopatia congênita crítica (oximetria)'], color: 'bg-blue-50 border-blue-200' },
  { age: '1–12 meses', items: ['Depressão materna (1, 2, 4, 6m)', 'Desenvolvimento (vigilância)', 'Anemia (universal 12m)', 'Visão (seletivo)', 'Verniz fluoretado (após 1º dente)'], color: 'bg-green-50 border-green-200' },
  { age: '18m / 2 anos / 2½ anos', items: ['Triagem de desenvolvimento (18m e 2½a)', 'Triagem de TEA (18m e 2a)', 'Plumbemia (seletivo)', 'Audição (seletivo)'], color: 'bg-purple-50 border-purple-200' },
  { age: '3–10 anos', items: ['PA (universal ≥ 3a)', 'Visão (universal 3–5a)', 'Audição universal (4, 5, 6, 8, 10a)', 'Dislipidemia (universal 9–11a)', 'Saúde bucal (avaliação)', 'IMC (a partir de 2a)'], color: 'bg-orange-50 border-orange-200' },
  { age: '11–14 anos', items: ['Triagem comportamental', 'Tabaco/álcool/drogas (seletivo)', 'IST (seletivo)', 'HIV (seletivo)', 'Depressão/suicídio (universal ≥ 12a)', 'Audição c/ 6–8 kHz (11–14a)'], color: 'bg-amber-50 border-amber-200' },
  { age: '15–21 anos', items: ['HIV (universal 1x 15–21a)', 'IST, gonorreia, clamídia, sífilis (seletivo)', 'Dislipidemia (universal 17–21a)', 'Hepatite C (universal ≥ 18a)', 'Displasia cervical (21a)', 'Depressão/suicídio (universal)'], color: 'bg-red-50 border-red-200' },
];

export default function RastreioPreventivo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-foreground leading-tight">Rastreio — Medicina Preventiva</h1>
            <p className="text-sm text-muted-foreground">Calendário de Saúde Preventiva Pediátrica</p>
          </div>
        </div>

        {/* AAP badge */}
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-2xl p-4 mt-4">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-blue-900">Baseado nas Recomendações da American Academy of Pediatrics (AAP)</p>
            <p className="text-xs text-blue-700 mt-1 leading-relaxed">
              <strong>Bright Futures / AAP Recommendations for Preventive Pediatric Health Care — Periodicity Schedule</strong> (atualizado Fevereiro 2025, aprovado Dezembro 2024).
              As recomendações representam consenso da AAP e do Bright Futures e são atualizadas anualmente. Variações individuais podem ser necessárias.
            </p>
            <p className="text-[10px] text-blue-500 mt-1">Fonte: Bright Futures Guidelines, 4th Edition · AAP · aap.org/periodicityschedule</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-3">
        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800 leading-relaxed">
          Estas recomendações são voltadas a crianças saudáveis sem manifestações de problemas de saúde significativos e que crescem de forma satisfatória. Crianças com condições crônicas podem necessitar de consultas e rastreios adicionais.
        </p>
      </div>

      {/* Legend */}
      <div className="bg-white border border-border rounded-2xl p-4 shadow-sm">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Legenda</p>
        <div className="flex flex-wrap gap-4">
          {LEGEND.map((l, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black ${l.color}`}>{l.symbol}</span>
              <span className="text-xs font-semibold text-foreground">{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key summary by age */}
      <div>
        <h2 className="text-base font-extrabold text-foreground mb-3 flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-primary" />
          Resumo por Faixa Etária
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {KEY_ITEMS.map((k, i) => (
            <div key={i} className={`border rounded-2xl p-4 ${k.color}`}>
              <p className="text-sm font-extrabold text-foreground mb-2">{k.age}</p>
              <ul className="space-y-1">
                {k.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-xs text-foreground">
                    <span className="text-primary flex-shrink-0">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Full schedule table */}
      <div>
        <h2 className="text-base font-extrabold text-foreground mb-3 flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-primary" />
          Calendário Completo (role horizontalmente)
        </h2>
        <div className="space-y-4">
          {CATEGORIES.map(cat => (
            <CategorySection key={cat.id} cat={cat} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-secondary/60 border border-border rounded-2xl p-4 text-center">
        <p className="text-xs text-muted-foreground leading-relaxed">
          © 2025 American Academy of Pediatrics · Bright Futures/AAP Recommendations for Preventive Pediatric Health Care (Periodicity Schedule).
          Atualizado anualmente. Consulte <strong>aap.org/periodicityschedule</strong> para a versão mais recente.
        </p>
      </div>
    </div>
  );
}