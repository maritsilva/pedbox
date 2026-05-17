import React, { useState } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, AlertTriangle, Activity, Pill, FlaskConical, LogOut, ClipboardList, Info, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ConvulsaoFebril from '@/components/protocols/ConvulsaoFebril';
import DiarreiaAguda from '@/components/protocols/DiarreiaAguda';
import Faringoamigdalite from '@/components/protocols/Faringoamigdalite';
import FebreSemSinais from '@/components/protocols/FebreSemSinais';
import Bronquiolite from '@/components/protocols/Bronquiolite';
import FluxogramaModal from '@/components/protocols/FluxogramaModal';
import FluxogramaCriseAsmatica from '@/components/protocols/fluxogramas/FluxogramaCriseAsmatica';
import FluxogramaBronquiolite from '@/components/protocols/fluxogramas/FluxogramaBronquiolite';
import FluxogramaConvulsao from '@/components/protocols/fluxogramas/FluxogramaConvulsao';
import FluxogramaDiarreia from '@/components/protocols/fluxogramas/FluxogramaDiarreia';
import FluxogramaFaringoamigdalite from '@/components/protocols/fluxogramas/FluxogramaFaringoamigdalite';
import FluxogramaFebre from '@/components/protocols/fluxogramas/FluxogramaFebre';

// ── Data ──────────────────────────────────────────────────────────────────────

const PROTOCOLS = [
  {
    id: 'crise-asmatica',
    title: 'Crise Asmática',
    subtitle: 'em Crianças e Adolescentes',
    icon: '🫁',
    color: 'blue',
    tag: 'Respiratório',
    source: 'Albert Einstein · Revisado Jun/2024',
  },
  {
    id: 'bronquiolite',
    title: 'Bronquiolite',
    subtitle: 'em Crianças < 2 anos',
    icon: '🫧',
    color: 'blue',
    tag: 'Respiratório',
    source: 'Albert Einstein · Revisado Jul/2024',
  },
  {
    id: 'convulsao-febril',
    title: 'Convulsão Febril Benigna',
    subtitle: '6 meses a 5 anos',
    icon: '⚡',
    color: 'purple',
    tag: 'Neurologia',
    source: 'Albert Einstein · Revisado Jun/2025',
  },
  {
    id: 'diarreia-aguda',
    title: 'Diarreia Aguda',
    subtitle: 'em Crianças e Adolescentes',
    icon: '💧',
    color: 'teal',
    tag: 'Gastroenterologia',
    source: 'Albert Einstein · Revisado Jun/2025',
  },
  {
    id: 'faringoamigdalite',
    title: 'Faringoamigdalite',
    subtitle: 'em Crianças e Adolescentes',
    icon: '🦠',
    color: 'orange',
    tag: 'Infectologia',
    source: 'Albert Einstein · Revisado Jun/2024',
  },
  {
    id: 'febre-sem-sinais',
    title: 'Febre sem Sinais Localizatórios',
    subtitle: 'até 36 meses',
    icon: '🌡️',
    color: 'red',
    tag: 'Infectologia',
    source: 'Albert Einstein · Revisado Jun/2025',
  },
];

// ── Severity Table ─────────────────────────────────────────────────────────────

function SeverityTable() {
  const rows = [
    { param: 'Falta de ar', leve: 'Andando', moderada: 'Falando / dificuldade de se alimentar (lactente)', grave: 'Em repouso / para de se alimentar' },
    { param: 'Fala', leve: 'Frases completas', moderada: 'Frases intercortadas', grave: 'Palavras' },
    { param: 'Estado mental', leve: 'Normal', moderada: 'Normal / alterado', grave: 'Alterado' },
    { param: 'Frequência respiratória', leve: 'Normal / aumentada', moderada: 'Aumentada', grave: 'Aumentada' },
    { param: 'Sibilos', leve: 'Moderado, final da expiração', moderada: 'Intenso, durante expiração', grave: 'Intenso, inspiratório e expiratório' },
    { param: 'Dispneia', leve: 'Leve / ausente', moderada: 'Moderada', grave: 'Intensa' },
    { param: 'Frequência cardíaca', leve: 'Normal', moderada: 'Aumentada', grave: 'Muito aumentada' },
    { param: 'SatO₂ (ar ambiente)', leve: '> 95%', moderada: '91 – 95%', grave: '≤ 90%' },
    { param: 'PaO₂', leve: 'Normal', moderada: '≥ 60 mmHg', grave: '< 60 mmHg' },
    { param: 'PaCO₂', leve: 'Normal', moderada: '< 42 mmHg', grave: '≥ 42 mmHg' },
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="bg-secondary/60 px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase tracking-wide w-36">Parâmetro</th>
            <th className="bg-green-100 px-4 py-3 text-center text-xs font-bold text-green-700 uppercase tracking-wide">Leve</th>
            <th className="bg-yellow-100 px-4 py-3 text-center text-xs font-bold text-yellow-700 uppercase tracking-wide">Moderada</th>
            <th className="bg-red-100 px-4 py-3 text-center text-xs font-bold text-red-700 uppercase tracking-wide">Grave</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}>
              <td className="px-4 py-2.5 font-semibold text-xs text-foreground">{r.param}</td>
              <td className="px-4 py-2.5 text-center text-xs text-green-800">{r.leve}</td>
              <td className="px-4 py-2.5 text-center text-xs text-yellow-800">{r.moderada}</td>
              <td className="px-4 py-2.5 text-center text-xs text-red-800 font-medium">{r.grave}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Normal Values ─────────────────────────────────────────────────────────────

function NormalValuesTable() {
  const rows = [
    { age: '< 2 meses', fr: '< 60 ipm', fc: '< 180 bpm' },
    { age: '2–12 meses', fr: '< 50 ipm', fc: '< 160 bpm' },
    { age: '1–5 anos', fr: '< 40 ipm', fc: '< 120 bpm' },
    { age: '6–8 anos', fr: '< 30 ipm', fc: '< 110 bpm' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border mt-3">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-secondary/60">
            <th className="px-4 py-2 text-left text-xs font-bold text-muted-foreground">Idade</th>
            <th className="px-4 py-2 text-center text-xs font-bold text-muted-foreground">FR normal</th>
            <th className="px-4 py-2 text-center text-xs font-bold text-muted-foreground">FC normal</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}>
              <td className="px-4 py-2 text-xs font-semibold">{r.age}</td>
              <td className="px-4 py-2 text-xs text-center">{r.fr}</td>
              <td className="px-4 py-2 text-xs text-center">{r.fc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Medications Table ─────────────────────────────────────────────────────────

function MedicationsTable() {
  const meds = [
    {
      drug: 'Salbutamol aerossol (100 mcg/dose)',
      dose: '4–10 jatos a cada 20 min, 3 vezes (inicial). Repetir conforme necessidade.',
    },
    {
      drug: 'Brometo de Ipratrópio aerossol (20 mcg/dose)',
      dose: '< 12 anos: 4 jatos a cada 20 min, 3 vezes\n> 12 anos: 8 jatos a cada 20 min, 3 vezes',
    },
    {
      drug: 'Prednisona / Prednisolona VO\n(opção: Metilprednisolona EV)',
      dose: '1–2 mg/kg/dia\n• Máx 20 mg/dia (0–2 anos)\n• Máx 30 mg/dia (3–5 anos)\n• Máx 40 mg/dia (5–12 anos)\n• Máx 50 mg/dia (12–17 anos)\nA cada 12 ou 24 h · Manter 3 a 5 dias',
    },
    {
      drug: 'Dexametasona',
      dose: '0,6 mg/kg VO, IM ou EV – Máx 10 mg\n1× ao dia por 1–2 dias\nSe falha ou recaída: considerar mudança para prednisolona',
    },
    {
      drug: 'Sulfato de Magnésio EV',
      dose: 'Dose inicial: 50 mg/kg EV em 20 min\nSe necessário: completar para 75 mg/kg (máx 2 g)',
    },
    {
      drug: 'Salbutamol EV (0,5 mg/mL)',
      dose: 'Ataque: 10 mcg/kg EV\nManutenção: 0,1–1 mcg/kg/min (máx 5 mcg/kg/min)',
    },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-blue-600">
            <th className="px-4 py-3 text-left text-xs font-bold text-white">Medicação</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-white">Dose</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {meds.map((m, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/40'}>
              <td className="px-4 py-3 text-xs font-semibold text-blue-900 whitespace-pre-line align-top w-52">{m.drug}</td>
              <td className="px-4 py-3 text-xs text-foreground whitespace-pre-line leading-relaxed">{m.dose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Section wrapper ────────────────────────────────────────────────────────────

function Section({ icon, title, color = 'blue', children }) {
  const colors = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
  };
  return (
    <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className={`flex items-center gap-2.5 px-5 py-3.5 border-b border-border ${colors[color]}`}>
        {icon}
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

// ── Flowchart ─────────────────────────────────────────────────────────────────

function Fluxograma() {
  return (
    <div className="space-y-3 text-xs">
      {/* Initial eval */}
      <div className="bg-blue-600 text-white rounded-xl px-4 py-3 text-center font-bold text-sm">
        Avaliação Inicial: anamnese, exame físico, sinais vitais, oximetria · Classificação de Gravidade
      </div>

      {/* 3 severity columns */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: 'LEVE', bg: 'bg-green-100 border-green-300 text-green-800',
            header: 'bg-green-500',
            items: ['Salbutamol 400–800 mcg × 3 a cada 20\'', 'Corticoide VO se > 6 anos'],
          },
          {
            label: 'MODERADA', bg: 'bg-yellow-100 border-yellow-300 text-yellow-800',
            header: 'bg-yellow-500',
            items: ['Manter SatO₂ > 94%', 'Salbutamol 400–800 mcg × 3 a cada 20\'', 'Corticoide VO', 'Considerar ipratrópio 80–160 mcg × 3 a cada 20\''],
          },
          {
            label: 'GRAVE', bg: 'bg-red-100 border-red-300 text-red-800',
            header: 'bg-red-500',
            items: ['Manter SatO₂ > 94%: máscara não reinalante / CNAF', 'Salbutamol 400–800 mcg × 3 a cada 20\'', 'Ipratrópio 80–160 mcg × 3 a cada 20\'', 'Corticoide VO / EV / IM', 'Considerar MgSO₄ 50–75 mg/kg'],
          },
        ].map((col) => (
          <div key={col.label} className={`rounded-xl border ${col.bg} overflow-hidden`}>
            <div className={`${col.header} text-white text-center text-xs font-bold py-1.5`}>{col.label}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => <li key={i} className="flex gap-1"><span>•</span><span>{item}</span></li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Re-eval */}
      <div className="bg-secondary border border-border rounded-xl px-4 py-2.5 text-center text-xs font-semibold text-muted-foreground">
        ↕ Reavaliação e reclassificação após início do tratamento
      </div>

      {/* Response grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: 'BOA RESPOSTA', bg: 'bg-green-50 border-green-200 text-green-800',
            items: ['SatO₂ > 94%', 'Sem desconforto respiratório', '→ Alta Hospitalar'],
            bold: true,
          },
          {
            label: 'RESPOSTA INCOMPLETA', bg: 'bg-yellow-50 border-yellow-200 text-yellow-800',
            items: ['Sem melhora da oximetria', 'Mantém desconforto', '→ Observação pediátrica (máx. 4h)', 'Salbutamol a cada 30–60 min', 'Corticoide se já não feito', 'Considerar MgSO₄'],
          },
          {
            label: 'SEM RESPOSTA', bg: 'bg-red-50 border-red-200 text-red-800',
            items: ['Desconforto grave', 'Confusão / sonolência', 'Sat < 90%', '→ SALA DE EMERGÊNCIA / UTI'],
          },
        ].map((col) => (
          <div key={col.label} className={`rounded-xl border ${col.bg} overflow-hidden`}>
            <div className="text-center text-xs font-bold py-1.5 border-b border-black/10 bg-black/5">{col.label}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => <li key={i} className={`flex gap-1 ${col.bold && i === col.items.length - 1 ? 'font-bold' : ''}`}><span>•</span><span>{item}</span></li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* UTI box */}
      <div className="bg-red-600 text-white rounded-xl p-3.5">
        <p className="font-bold mb-1.5">SALA DE EMERGÊNCIA / UTI</p>
        <ul className="space-y-0.5">
          {[
            'Manter Sat > 94%',
            'Salbutamol a cada 30–60 min',
            'Sulfato de Magnésio (se não realizado)',
            'Considerar Salbutamol EV (ataque 10 mcg/kg + manutenção 0,1–1 mcg/kg/min)',
            'Cateter nasal de alto fluxo',
            'Considerar heliox',
            'Considerar VNI / IOT com SRI se deterioração clínica',
          ].map((item, i) => <li key={i} className="flex gap-1.5"><span>•</span><span>{item}</span></li>)}
        </ul>
      </div>
    </div>
  );
}

// ── Protocol Detail ───────────────────────────────────────────────────────────

function CriseAsmaticaDetail({ onBack }) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-5 text-white">
        <p className="text-blue-200 text-xs font-semibold mb-0.5">Protocolo Clínico · Respiratório</p>
        <h1 className="text-2xl font-extrabold leading-tight">🫁 Crise Asmática</h1>
        <p className="text-blue-100 text-sm mt-0.5">em Crianças e Adolescentes</p>
        <p className="text-blue-200 text-xs mt-3 border-t border-blue-400/40 pt-2">Albert Einstein (SBIBAE) · Revisado Jun/2024 · GINA 2024</p>
      </div>

      {/* Definition */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-900 leading-relaxed">
        A exacerbação de asma é o agravamento agudo dos sintomas asmáticos (dispneia, sibilância, tosse, aperto no peito). Pode ser precipitada por infecções respiratórias, alérgenos, poluentes e estresse. Pode ocorrer em pacientes com asma prévia ou como primeira apresentação da doença.
      </div>

      {/* 1. Diagnosis */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="1. Diagnóstico e Exames Adicionais" color="blue">
        <p className="text-sm text-foreground mb-3">O diagnóstico é <strong>eminentemente clínico</strong>: sintomas respiratórios + broncoespasmo.</p>
        <p className="text-xs font-semibold text-muted-foreground mb-2">Avaliação inicial deve incluir:</p>
        <ul className="space-y-1 mb-4">
          {[
            'Início dos sintomas e causa (se conhecida)',
            'Histórico de hospitalização, IOT e ventilação mecânica',
            'Uso atual ou recente de corticoesteroides e medicações de resgate',
            'Sinais vitais, nível de consciência, uso de musculatura acessória',
            'Fatores complicadores (anafilaxia, pneumonia, atelectasias)',
            'Diagnósticos diferenciais (aspiração, obstrução laríngea, IC)',
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-foreground">
              <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>{item}
            </li>
          ))}
        </ul>
        <p className="text-xs font-semibold text-muted-foreground mb-2">Exames complementares:</p>
        <ul className="space-y-1.5">
          {[
            { exam: 'Oximetria de pulso', note: 'Medidas seriadas para avaliar gravidade e resposta.' },
            { exam: 'Exames laboratoriais', note: 'Não necessários na maioria; não devem atrasar o tratamento.' },
            { exam: 'Rx de tórax', note: 'Não recomendado rotineiramente — indicar se não houver resposta ao tratamento inicial ou suspeita de complicações (pneumotórax, pneumonia, atelectasia).' },
            { exam: 'Gasometria arterial', note: 'Considerar nas crises graves sem resposta. PaO₂ < 60 mmHg ou PaCO₂ ≥ 45 mmHg indica insuficiência respiratória.' },
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
              <span><strong>{item.exam}:</strong> {item.note}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 2. Severity Score */}
      <Section icon={<Activity className="w-4 h-4" />} title="2. Escore de Gravidade" color="amber">
        <SeverityTable />
        <p className="text-xs font-semibold text-muted-foreground mt-4 mb-1">Valores normais de FR e FC por idade:</p>
        <NormalValuesTable />
      </Section>

      {/* 3. Flowchart */}
      <Section icon={<ChevronRight className="w-4 h-4" />} title="3. Fluxograma de Tratamento" color="blue">
        <Fluxograma />
      </Section>

      {/* 4. Hospitalization criteria */}
      <Section icon={<LogOut className="w-4 h-4" />} title="4. Indicação de Internação e Critérios de Alta" color="red">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {[
            { title: 'Critérios para internação', text: 'Presença de sinais de insuficiência respiratória mantida após tratamento inicial (dispneia, uso de musculatura acessória, hipoxemia).', color: 'border-red-300 bg-red-50 text-red-900' },
            { title: 'Critérios para UTI', text: 'Crises moderadas ou graves que evoluem sem resposta às medidas iniciais e/ou com deterioração clínica.', color: 'border-red-400 bg-red-100 text-red-900' },
            { title: 'Conversão para terapia oral', text: 'Assim que o paciente tolerar VO. Prednisona VO tem efeito equivalente à Metilprednisolona EV.', color: 'border-green-300 bg-green-50 text-green-900' },
            { title: 'Critérios de alta', text: 'Boa resposta ao tratamento, sem desconforto respiratório e SatO₂ > 94% em ar ambiente.', color: 'border-green-400 bg-green-100 text-green-900' },
          ].map((c, i) => (
            <div key={i} className={`rounded-xl border p-3 ${c.color}`}>
              <p className="font-bold text-xs mb-1 underline">{c.title}</p>
              <p className="text-xs leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Treatment */}
      <Section icon={<Pill className="w-4 h-4" />} title="5. Tratamento — Medicações" color="blue">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Tratamento inicial:</p>
            <ul className="space-y-1">
              {[
                'Inalação com broncodilatadores de ação rápida (MDI com máscara e espaçador).',
                'Início precoce de corticosteroides na crise grave e na crise leve em > 6 anos.',
                'Suplementação de oxigênio conforme gravidade.',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm"><span className="text-blue-400">•</span>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Duração do tratamento:</p>
            <ul className="space-y-1">
              <li className="flex gap-2 text-sm"><span className="text-blue-400">•</span>Salbutamol inalatório 4–6×/dia por 5 dias</li>
              <li className="flex gap-2 text-sm"><span className="text-blue-400">•</span>Prednisolona 3–5 dias ou Dexametasona 1–2 dias</li>
              <li className="flex gap-2 text-sm"><span className="text-blue-400">•</span>Reavaliação ambulatorial com pediatra após 48 horas</li>
            </ul>
          </div>
          <MedicationsTable />
        </div>
      </Section>

      {/* References */}
      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {[
            'Global Initiative for Asthma (GINA) 2024.',
            'Schvartsman C et al. Pronto-Socorro do ICr-HCFMUSP. 4ª ed. Manole; 2023.',
            'Scottish Intercollegiate Guideline Network and British Thoracic Society.',
            'J Bras Pneumol 2006; 32 Suppl 7:S447-74.',
            'Stenson EK, Tchou MJ, Wheeler DS. Curr Opin Pediatr. 2017;29(3):305-310.',
          ].map((ref, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i + 1}]</span>{ref}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

// ── Protocol Card ─────────────────────────────────────────────────────────────

function ProtocolCard({ protocol, onClick }) {
  const colorMap = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    teal: 'bg-teal-50 border-teal-200 text-teal-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    red: 'bg-red-50 border-red-200 text-red-700',
  };
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="w-full text-left bg-white border border-border rounded-2xl p-4 pr-32 flex items-center gap-4 hover:shadow-md hover:border-primary/30 transition-all group"
    >
      <span className="text-3xl flex-shrink-0">{protocol.icon}</span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${colorMap[protocol.color] || colorMap.blue}`}>{protocol.tag}</span>
        </div>
        <p className="font-bold text-foreground text-sm">{protocol.title}</p>
        <p className="text-xs text-muted-foreground">{protocol.subtitle}</p>
        <p className="text-xs text-muted-foreground/70 mt-1">{protocol.source}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
    </motion.button>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

const FLUXOGRAMAS = {
  'crise-asmatica': { title: 'Crise Asmática — Fluxograma', component: <FluxogramaCriseAsmatica /> },
  'bronquiolite': { title: 'Bronquiolite — Fluxograma', component: <FluxogramaBronquiolite /> },
  'convulsao-febril': { title: 'Convulsão Febril — Fluxograma', component: <FluxogramaConvulsao /> },
  'diarreia-aguda': { title: 'Diarreia Aguda — Fluxograma', component: <FluxogramaDiarreia /> },
  'faringoamigdalite': { title: 'Faringoamigdalite — Fluxograma', component: <FluxogramaFaringoamigdalite /> },
  'febre-sem-sinais': { title: 'Febre sem Sinais — Fluxograma', component: <FluxogramaFebre /> },
};

export default function Protocolos() {
  const [selected, setSelected] = useState(null);
  const [fluxogramaOpen, setFluxogramaOpen] = useState(null);

  const detailMap = {
    'crise-asmatica': <CriseAsmaticaDetail />,
    'bronquiolite': <Bronquiolite />,
    'convulsao-febril': <ConvulsaoFebril />,
    'diarreia-aguda': <DiarreiaAguda />,
    'faringoamigdalite': <Faringoamigdalite />,
    'febre-sem-sinais': <FebreSemSinais />,
  };

  const activeFluxograma = fluxogramaOpen ? FLUXOGRAMAS[fluxogramaOpen] : null;

  if (selected && detailMap[selected]) {
    return (
      <div className="max-w-3xl mx-auto px-4 pb-12 pt-6">
        {/* Fluxograma modal */}
        {activeFluxograma && (
          <FluxogramaModal
            title={activeFluxograma.title}
            isOpen={!!fluxogramaOpen}
            onClose={() => setFluxogramaOpen(null)}
          >
            {activeFluxograma.component}
          </FluxogramaModal>
        )}

        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => setSelected(null)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Todos os Protocolos
          </button>
          {FLUXOGRAMAS[selected] && (
            <button
              onClick={() => setFluxogramaOpen(selected)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-sm"
            >
              <GitBranch className="w-4 h-4" />
              Ver Fluxograma
            </button>
          )}
        </div>
        {detailMap[selected]}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Fluxograma modal from list */}
      {activeFluxograma && (
        <FluxogramaModal
          title={activeFluxograma.title}
          isOpen={!!fluxogramaOpen}
          onClose={() => setFluxogramaOpen(null)}
        >
          {activeFluxograma.component}
        </FluxogramaModal>
      )}

      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Protocolos Clínicos</h1>
        <p className="text-muted-foreground text-sm">Diretrizes e guias de cuidado baseados em evidências</p>
      </div>

      <div className="space-y-3">
        {PROTOCOLS.map(p => (
          <div key={p.id} className="relative">
            <ProtocolCard protocol={p} onClick={() => setSelected(p.id)} />
            {FLUXOGRAMAS[p.id] && (
              <button
                onClick={(e) => { e.stopPropagation(); setFluxogramaOpen(p.id); }}
                className="absolute right-14 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 text-xs font-semibold rounded-xl transition-all"
              >
                <GitBranch className="w-3.5 h-3.5" />
                Fluxograma
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-secondary/60 border border-border rounded-2xl p-5 text-center">
        <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm font-semibold text-foreground">Mais protocolos em breve</p>
        <p className="text-xs text-muted-foreground mt-1">Sepse neonatal, convulsão febril, cetoacidose diabética e outros.</p>
      </div>
    </div>
  );
}