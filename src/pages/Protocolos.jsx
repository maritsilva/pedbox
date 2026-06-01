import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, AlertTriangle, Activity, Pill, LogOut, ClipboardList, Info, GitBranch, Search, X, ChevronDown, Calculator, Star, TrendingUp, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ConvulsaoFebril from '@/components/protocols/ConvulsaoFebril';
import DiarreiaAguda from '@/components/protocols/DiarreiaAguda';
import Faringoamigdalite from '@/components/protocols/Faringoamigdalite';
import FebreSemSinais from '@/components/protocols/FebreSemSinais';
import Bronquiolite from '@/components/protocols/Bronquiolite';
import FluxogramaCriseAsmatica from '@/components/protocols/fluxogramas/FluxogramaCriseAsmatica';
import FluxogramaBronquiolite from '@/components/protocols/fluxogramas/FluxogramaBronquiolite';
import FluxogramaConvulsao from '@/components/protocols/fluxogramas/FluxogramaConvulsao';
import FluxogramaDiarreia from '@/components/protocols/fluxogramas/FluxogramaDiarreia';
import FluxogramaFaringoamigdalite from '@/components/protocols/fluxogramas/FluxogramaFaringoamigdalite';
import FluxogramaFebre from '@/components/protocols/fluxogramas/FluxogramaFebre';
import PneumoniaComplicada from '@/components/protocols/PneumoniaComplicada';
import AnemiaFerropriva from '@/components/protocols/AnemiaFerropriva';
import FluxogramaPneumonia from '@/components/protocols/fluxogramas/FluxogramaPneumonia';
import FluxogramaAnemiaFerropriva from '@/components/protocols/fluxogramas/FluxogramaAnemiaFerropriva';
import MeningiteBacteriana from '@/components/protocols/MeningiteBacteriana.jsx';
import InfeccaoTratoUrinario from '@/components/protocols/InfeccaoTratoUrinario.jsx';

// ── Data ──────────────────────────────────────────────────────────────────────

const PROTOCOLS = [
{
  id: 'crise-asmatica',
  title: 'Crise Asmática',
  subtitle: 'em Crianças e Adolescentes',
  icon: '🫁',
  color: 'blue',
  tag: 'Respiratório',
  especialidade: 'Respiratório',
  source: 'Albert Einstein · Revisado Jun/2024',
  keywords: ['asma', 'broncoespasmo', 'salbutamol', 'sibilância', 'dispneia']
},
{
  id: 'bronquiolite',
  title: 'Bronquiolite',
  subtitle: 'em Crianças < 2 anos',
  icon: '🫧',
  color: 'blue',
  tag: 'Respiratório',
  especialidade: 'Respiratório',
  source: 'Albert Einstein · Revisado Jul/2024',
  keywords: ['vsr', 'lactente', 'sibilância', 'wood downes', 'hipoxemia']
},
{
  id: 'convulsao-febril',
  title: 'Convulsão Febril Benigna',
  subtitle: '6 meses a 5 anos',
  icon: '⚡',
  color: 'purple',
  tag: 'Neurologia',
  especialidade: 'Neurologia',
  source: 'Albert Einstein · Revisado Jun/2025',
  keywords: ['crise', 'epilepsia', 'febre', 'diazepam', 'anticonvulsivante']
},
{
  id: 'diarreia-aguda',
  title: 'Diarreia Aguda',
  subtitle: 'em Crianças e Adolescentes',
  icon: '💧',
  color: 'teal',
  tag: 'Gastroenterologia',
  especialidade: 'Gastroenterologia',
  source: 'Albert Einstein · Revisado Jun/2025',
  keywords: ['desidratação', 'sro', 'gastroenterite', 'ors', 'vômito']
},
{
  id: 'faringoamigdalite',
  title: 'Faringoamigdalite',
  subtitle: 'em Crianças e Adolescentes',
  icon: '🦠',
  color: 'orange',
  tag: 'Infectologia',
  especialidade: 'Infectologia',
  source: 'Albert Einstein · Revisado Jun/2024',
  keywords: ['amigdalite', 'streptococo', 'centor', 'amoxicilina', 'garganta']
},
{
  id: 'febre-sem-sinais',
  title: 'Febre sem Sinais Localizatórios',
  subtitle: 'até 36 meses',
  icon: '🌡️',
  color: 'red',
  tag: 'Infectologia',
  especialidade: 'Infectologia',
  source: 'Albert Einstein · Revisado Jun/2025',
  keywords: ['febre', 'lactente', 'sepse', 'urina', 'itu']
},
{
  id: 'pneumonia-complicada',
  title: 'PAC Complicada',
  subtitle: 'Pneumonia Adquirida na Comunidade',
  icon: '🫁',
  color: 'blue',
  tag: 'Respiratório',
  especialidade: 'Respiratório',
  source: 'SBP — Pneumologia / Infectologia · Atualização 2024',
  keywords: ['pneumonia', 'empiema', 'derrame pleural', 'necrosante', 'abscesso pulmonar', 'pacc']
},
{
  id: 'anemia-ferropriva',
  title: 'Anemia Ferropriva',
  subtitle: 'Deficiência de Ferro em Lactentes',
  icon: '🩸',
  color: 'red',
  tag: 'Hematologia',
  especialidade: 'Hematologia',
  source: 'SBP — Hematologia / Nutrologia · Diretriz Nº 32 · 2026',
  keywords: ['anemia', 'ferro', 'ferropriva', 'ferritina', 'hemoglobina', 'suplementação']
},
{
  id: 'meningite-bacteriana',
  title: 'Meningite Aguda Bacteriana',
  subtitle: 'em Lactentes, Crianças e Adolescentes',
  icon: '🧠',
  color: 'red',
  tag: 'Infectologia',
  especialidade: 'Infectologia',
  source: 'Sociedade de Infecciologia Pediátrica + SCIP · SPP',
  keywords: ['meningite', 'meningococo', 'pneumococo', 'haemophilus', 'lcr', 'punção lombar', 'antibiótico', 'cefotaxima', 'ceftriaxone', 'vancomicina']
},
{
  id: 'itu',
  title: 'Infecção do Trato Urinário',
  subtitle: 'em Crianças e Adolescentes',
  icon: '💧',
  color: 'cyan',
  tag: 'Infectologia',
  especialidade: 'Infectologia',
  source: 'Hospital Israelita Albert Einstein · Versão 3 · Set/2025',
  keywords: ['itu', 'disúria', 'urocultura', 'urina tipo i', 'pielonefrite', 'uretrite', 'antibiótico', 'cefuroxima', 'cefalexina', 'ceftriaxone']
}];


const ESPECIALIDADE_META = {
  'Respiratório': { color: 'blue', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500' },
  'Neurologia': { color: 'purple', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500' },
  'Gastroenterologia': { color: 'teal', bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', dot: 'bg-teal-500' },
  'Infectologia': { color: 'orange', bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500' },
  'Hematologia': { color: 'red', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', dot: 'bg-red-500' }
};

// ── Severity Table ─────────────────────────────────────────────────────────────

function SeverityTable() {
  const rows = [
  { param: 'Fala', leve: 'Frases completas', moderada: 'Frases curtas', grave: 'Não consegue falar / alimentar-se' },
  { param: 'Posição', leve: 'Consegue deitar-se', moderada: 'Prefere sentada', grave: 'Inclinada para frente / agitada' },
  { param: 'Estado mental', leve: 'Normal', moderada: 'Normal / levemente alterado', grave: 'Confusão / sonolência' },
  { param: 'Frequência respiratória', leve: 'Próxima do normal', moderada: 'Aumentada, ≤ 30/min', grave: '> 30/min' },
  { param: 'Musculatura acessória', leve: 'Ausente ou mínima', moderada: 'Moderada', grave: 'Retrações torácicas importantes' },
  { param: 'Sibilos', leve: 'Ausente ou leve', moderada: 'Expiratório', grave: 'Inspir + expir / tórax silencioso' },
  { param: 'SatO₂ (ar ambiente)', leve: '≥ 94%', moderada: '92–94%', grave: '< 92% (ameaça à vida)' },
  { param: 'PEF / VEF1', leve: '> 70% do previsto', moderada: '50–70% do previsto', grave: '< 50% do previsto' },
  { param: 'PaCO₂', leve: 'Normal', moderada: '< 42 mmHg', grave: '≥ 42 mmHg (fadiga)' }];


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
          {rows.map((r, i) =>
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}>
              <td className="px-4 py-2.5 font-semibold text-xs text-foreground">{r.param}</td>
              <td className="px-4 py-2.5 text-center text-xs text-green-800">{r.leve}</td>
              <td className="px-4 py-2.5 text-center text-xs text-yellow-800">{r.moderada}</td>
              <td className="px-4 py-2.5 text-center text-xs text-red-800 font-medium">{r.grave}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>);

}

// ── Normal Values ─────────────────────────────────────────────────────────────

function NormalValuesTable() {
  const rows = [
  { age: '< 2 meses', fr: '< 60 ipm', fc: '< 180 bpm' },
  { age: '2–12 meses', fr: '< 50 ipm', fc: '< 160 bpm' },
  { age: '1–5 anos', fr: '< 40 ipm', fc: '< 120 bpm' },
  { age: '6–8 anos', fr: '< 30 ipm', fc: '< 110 bpm' }];

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
          {rows.map((r, i) =>
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}>
              <td className="px-4 py-2 text-xs font-semibold">{r.age}</td>
              <td className="px-4 py-2 text-xs text-center">{r.fr}</td>
              <td className="px-4 py-2 text-xs text-center">{r.fc}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>);

}

// ── PRAM Score Table ───────────────────────────────────────────────────────────

function PRAMTable() {
  const rows = [
  { item: 'Cianose', options: ['Ausente (0)', 'Com ar ambiente (1)', 'Em repouso (2)'] },
  { item: 'Retração supraesternal', options: ['Ausente (0)', '—', 'Presente (2)'] },
  { item: 'Contração músculo escaleno', options: ['Ausente (0)', '—', 'Presente (2)'] },
  { item: 'Ar movido', options: ['Normal (0)', 'Diminuído na base (1)', 'Muito diminuído/ausente (2)'] },
  { item: 'Chiado respiratório', options: ['Ausente (0)', 'Expiratório (1)', 'Inspir + expir / tórax silencioso (2)'] }];

  return (
    <div className="space-y-2">
      <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-purple-600">
              <th className="px-3 py-2 text-left font-bold text-white">Parâmetro</th>
              <th className="px-3 py-2 text-center font-bold text-white">0</th>
              <th className="px-3 py-2 text-center font-bold text-white">1</th>
              <th className="px-3 py-2 text-center font-bold text-white">2</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((r, i) =>
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-purple-50/40'}>
                <td className="px-3 py-2 font-semibold text-foreground">{r.item}</td>
                {r.options.map((o, j) =>
              <td key={j} className="px-3 py-2 text-center text-muted-foreground">{o}</td>
              )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="bg-green-50 border border-green-200 rounded-xl p-2 text-center text-green-800">
          <p className="font-bold">0–3 pontos</p><p>Leve</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-2 text-center text-yellow-800">
          <p className="font-bold">4–7 pontos</p><p>Moderada</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-2 text-center text-red-800">
          <p className="font-bold">8–12 pontos</p><p>Grave</p>
        </div>
      </div>
    </div>);

}

// ── Medications Table ─────────────────────────────────────────────────────────

function MedicationsTable() {
  const meds = [
  {
    drug: 'Salbutamol MDI + espaçador\n(100 µg/puff)',
    dose: 'Leve: 4 jatos; repetir após 30–60 min se necessário\nModerada: 4–8 jatos a cada 20–30 min × 3\nGrave: 6–10 jatos a cada 20 min (emergência)\nNebulização: 2,5 mg (< 5 anos) / 5 mg (≥ 6 anos)'
  },
  {
    drug: 'ICS-Formoterol\n(Budesonida 160 µg + Formoterol 4,5 µg)\n[Track 1 — ≥ 6 anos, GINA 2026]',
    dose: 'Na crise: 2 jatos como broncodilatador (alternativa ao SABA na crise leve)\nManutenção MART: 1 jato 2×/dia\nAlívio extra conforme necessidade\nMáx: 8 jatos/dia (6–11 anos) / 12 jatos/dia (adolescentes)'
  },
  {
    drug: 'Brometo de Ipratrópio MDI + espaçador\n(20 µg/puff)',
    dose: 'Moderada/grave: 4 jatos (< 5 anos) / 4–8 jatos (≥ 6 anos)\nNebulização: 0,25 mg (< 5 anos) / 0,5 mg (≥ 6 anos)\nRepetir nas 3 primeiras doses de SABA (a cada 20–30 min)'
  },
  {
    drug: 'Prednisolona / Prednisona VO\n(Metilprednisolona EV se vômito / VO impossível)',
    dose: '1–2 mg/kg/dia\n• Até 11 anos: máx 40 mg/dia\n• Adolescentes: máx 50 mg/dia\nDuração: 3–5 dias (crianças) · 5–7 dias (adolescentes)'
  },
  {
    drug: 'Dexametasona VO/IM/EV',
    dose: '0,6 mg/kg · máx 10–12 mg\n1× ao dia por 1–2 dias\nAlternativa quando adesão ao esquema curto é problema'
  },
  {
    drug: 'Sulfato de Magnésio EV\n(crise grave sem resposta)',
    dose: '50 mg/kg em 20 min · máx 2 g\nIndicado quando Sat < 92% persiste após SABA + corticoide\n⚠️ Monitorar PA e ritmo cardíaco'
  },
  {
    drug: 'Salbutamol EV\n(somente UTI)',
    dose: 'Ataque: 10 µg/kg EV lento\nManutenção: 0,1–1 µg/kg/min (máx 5 µg/kg/min)\n⚠️ Risco de arritmia — uso exclusivo em cuidados intensivos'
  }];

  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-blue-600">
            <th className="px-4 py-3 text-left text-xs font-bold text-white">Medicação</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-white">Dose (GINA 2026)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {meds.map((m, i) =>
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/40'}>
              <td className="px-4 py-3 text-xs font-semibold text-blue-900 whitespace-pre-line align-top w-56">{m.drug}</td>
              <td className="px-4 py-3 text-xs text-foreground whitespace-pre-line leading-relaxed">{m.dose}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>);

}

// ── Section wrapper ────────────────────────────────────────────────────────────

function Section({ icon, title, color = 'blue', children }) {
  const colors = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200'
  };
  return (
    <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className={`flex items-center gap-2.5 px-5 py-3.5 border-b border-border ${colors[color]}`}>
        {icon}
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>);

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
          items: ['Salbutamol 400–800 mcg × 3 a cada 20\'', 'Corticoide VO se > 6 anos']
        },
        {
          label: 'MODERADA', bg: 'bg-yellow-100 border-yellow-300 text-yellow-800',
          header: 'bg-yellow-500',
          items: ['Manter SatO₂ > 94%', 'Salbutamol 400–800 mcg × 3 a cada 20\'', 'Corticoide VO', 'Considerar ipratrópio 80–160 mcg × 3 a cada 20\'']
        },
        {
          label: 'GRAVE', bg: 'bg-red-100 border-red-300 text-red-800',
          header: 'bg-red-500',
          items: ['Manter SatO₂ > 94%: máscara não reinalante / CNAF', 'Salbutamol 400–800 mcg × 3 a cada 20\'', 'Ipratrópio 80–160 mcg × 3 a cada 20\'', 'Corticoide VO / EV / IM', 'Considerar MgSO₄ 50–75 mg/kg']
        }].
        map((col) =>
        <div key={col.label} className={`rounded-xl border ${col.bg} overflow-hidden`}>
            <div className={`${col.header} text-white text-center text-xs font-bold py-1.5`}>{col.label}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => <li key={i} className="flex gap-1"><span>•</span><span>{item}</span></li>)}
            </ul>
          </div>
        )}
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
          bold: true
        },
        {
          label: 'RESPOSTA INCOMPLETA', bg: 'bg-yellow-50 border-yellow-200 text-yellow-800',
          items: ['Sem melhora da oximetria', 'Mantém desconforto', '→ Observação pediátrica (máx. 4h)', 'Salbutamol a cada 30–60 min', 'Corticoide se já não feito', 'Considerar MgSO₄']
        },
        {
          label: 'SEM RESPOSTA', bg: 'bg-red-50 border-red-200 text-red-800',
          items: ['Desconforto grave', 'Confusão / sonolência', 'Sat < 90%', '→ SALA DE EMERGÊNCIA / UTI']
        }].
        map((col) =>
        <div key={col.label} className={`rounded-xl border ${col.bg} overflow-hidden`}>
            <div className="text-center text-xs font-bold py-1.5 border-b border-black/10 bg-black/5">{col.label}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => <li key={i} className={`flex gap-1 ${col.bold && i === col.items.length - 1 ? 'font-bold' : ''}`}><span>•</span><span>{item}</span></li>)}
            </ul>
          </div>
        )}
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
          'Considerar VNI / IOT com SRI se deterioração clínica'].
          map((item, i) => <li key={i} className="flex gap-1.5"><span>•</span><span>{item}</span></li>)}
        </ul>
      </div>
    </div>);

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
        <p className="text-blue-200 text-xs mt-3 border-t border-blue-400/40 pt-2">Albert Einstein (SBIBAE) · Atualizado Mai/2026 · <strong className="text-white">GINA 2026</strong></p>
      </div>

      {/* PRAM shortcut */}
      <Link to="/pram">
        <div className="flex items-center gap-3 bg-sky-50 border-2 border-sky-300 rounded-2xl px-4 py-3 hover:bg-sky-100 transition-colors cursor-pointer">
          <div className="w-9 h-9 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-sky-800">Calculadora PRAM</p>
            <p className="text-xs text-sky-600">Score de gravidade para asma · 2–17 anos</p>
          </div>
          <ChevronRight className="w-4 h-4 text-sky-400" />
        </div>
      </Link>

      {/* Definition */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-900 leading-relaxed">
        A exacerbação asmática é o agravamento agudo de dispneia, sibilância, tosse e aperto torácico com declínio da função pulmonar. Pode ser precipitada por infecções virais, alérgenos, poluentes ou falta de adesão ao controlador. Crises graves podem ser fatais — a avaliação da gravidade deve ser imediata. <strong>Atualização baseada no GINA 2026</strong>, com ênfase no uso conservador de SABA, oxigenoterapia criteriosa e introdução precoce de ICS.
      </div>

      {/* 1. Diagnosis */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="1. Diagnóstico e Exames Adicionais" color="blue">
        <p className="text-sm text-foreground mb-3">O diagnóstico é <strong>eminentemente clínico</strong>. Iniciar o tratamento antes dos resultados laboratoriais.</p>
        <p className="text-xs font-semibold text-muted-foreground mb-2">Anamnese — perguntar sobre:</p>
        <ul className="space-y-1 mb-4">
          {[
          'Início e causa da crise (viral, alérgeno, poluente, suspensão do controlador)',
          'Histórico de hospitalização, IOT ou ventilação mecânica prévia',
          'Uso de SABA (≥ 1 frasco/mês = alto risco), corticoide sistêmico no último ano',
          'Sinais vitais, consciência, uso de musculatura acessória, cianose',
          'Fatores complicadores: anafilaxia, pneumonia, atelectasia, pneumotórax',
          'Diagnósticos diferenciais: bronquiolite, aspiração de corpo estranho, insuficiência cardíaca'].
          map((item, i) =>
          <li key={i} className="flex gap-2 text-sm text-foreground">
              <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>{item}
            </li>
          )}
        </ul>
        <p className="text-xs font-semibold text-muted-foreground mb-2">Exames complementares:</p>
        <ul className="space-y-1.5">
          {[
          { exam: 'Oximetria de pulso', note: 'Medida contínua. Sat < 92% = gravidade e indicação de O₂. Atenção: pode superestimar em pele escura.' },
          { exam: 'PEF / VEF1', note: 'Quando possível, medir antes da 1ª dose e após tratamento. < 50% = gravidade; > 70% = critério de alta.' },
          { exam: 'PRAM (< 5 anos)', note: 'Escore clínico recomendado pelo GINA 2026: cianose, retrações, escaleno, ar movido, chiado. 0–3: leve; 4–7: moderado; 8–12: grave.' },
          { exam: 'Rx de tórax', note: 'Não recomendado rotineiramente. Indicar se sem resposta ao tratamento ou suspeita de pneumotórax, pneumonia, atelectasia.' },
          { exam: 'Gasometria arterial', note: 'Reservar para crises graves. PaCO₂ ≥ 42 mmHg sugere fadiga respiratória iminente.' },
          { exam: 'Laboratório geral', note: 'Não necessário na maioria dos casos. Monitorar hipocalemia e acidose láctica se uso intensivo de SABA.' }].
          map((item, i) =>
          <li key={i} className="flex gap-2 text-sm">
              <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
              <span><strong>{item.exam}:</strong> {item.note}</span>
            </li>
          )}
        </ul>
      </Section>

      {/* 2. Severity Score */}
      <Section icon={<Activity className="w-4 h-4" />} title="2. Classificação de Gravidade (GINA 2026)" color="amber">
        <p className="text-xs text-muted-foreground mb-3">Para crianças ≥ 6 anos — adaptado de GINA 2026 Box 9-4</p>
        <SeverityTable />
        <p className="text-xs font-semibold text-muted-foreground mt-4 mb-1">Valores normais de FR e FC por idade:</p>
        <NormalValuesTable />
        <p className="text-xs font-semibold text-muted-foreground mt-4 mb-2">Para crianças &lt; 5 anos — Escore PRAM (GINA 2026 Box 12-1):</p>
        <PRAMTable />
      </Section>

      {/* 3. Flowchart */}
      <Section icon={<ChevronRight className="w-4 h-4" />} title="3. Fluxograma de Tratamento" color="blue">
        <Fluxograma />
      </Section>

      {/* 4. Hospitalization criteria */}
      <Section icon={<LogOut className="w-4 h-4" />} title="4. Indicação de Internação e Critérios de Alta" color="red">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {[
          {
            title: 'Critérios para internação',
            text: 'Sinais de insuficiência respiratória persistente após tratamento inicial · Necessidade contínua de O₂ ou suporte ventilatório · Múltiplas doses de broncodilatador para manter Sat adequada · Comorbidades ou fatores de risco de morte por asma · Situação social que dificulte manejo domiciliar.',
            color: 'border-red-300 bg-red-50 text-red-900'
          },
          {
            title: 'Critérios para UTI',
            text: 'Agitação, confusão ou sonolência · Tórax silencioso · Cianose · Sat < 92% persistente apesar de O₂ e broncodilatadores · Fadiga respiratória / hipercapnia crescente · Falência do tratamento — considerar VNI ou IOT com SRI.',
            color: 'border-red-400 bg-red-100 text-red-900'
          },
          {
            title: 'Critérios de alta hospitalar',
            text: 'Clinicamente estável por ≥ 4–6h · Sat ≥ 95% sem O₂ · PEF > 60–80% do melhor pessoal ou PRAM ≤ 3 · Doses de SABA espaçadas (> 4h entre doses).',
            color: 'border-green-300 bg-green-50 text-green-900'
          },
          {
            title: 'Obrigatório antes da alta (GINA 2026)',
            text: 'Prescrever ou otimizar ICS (ou ICS-formoterol MART) · Revisar técnica do inalador com espaçador · Fornecer plano de ação escrito · Agendar reavaliação em 2–3 dias (< 6 anos) ou 2–7 dias (maiores).',
            color: 'border-green-400 bg-green-100 text-green-900'
          }].
          map((c, i) =>
          <div key={i} className={`rounded-xl border p-3 ${c.color}`}>
              <p className="font-bold text-xs mb-1 underline">{c.title}</p>
              <p className="text-xs leading-relaxed">{c.text}</p>
            </div>
          )}
        </div>
      </Section>

      {/* 5. Treatment */}
      <Section icon={<Pill className="w-4 h-4" />} title="5. Tratamento — Medicações (GINA 2026)" color="blue">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-3 text-xs text-violet-900">
              <p className="font-bold mb-1">Track 1 — ICS-Formoterol MART (≥ 6 anos)</p>
              <p>Preferencial pelo GINA 2026. Budesonida-formoterol como broncodilatador <em>e</em> controlador simultaneamente. Pode ser iniciado já na crise, inclusive em pacientes sem tratamento prévio.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900">
              <p className="font-bold mb-1">Track 2 — ICS + SABA conforme necessidade</p>
              <p>Para pacientes que usam salbutamol como resgate habitual ou que não toleram formoterol. Adicionar ICS imediatamente após doses de SABA e continuar 7–10 dias após a alta.</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Princípios do tratamento (GINA 2026):</p>
            <ul className="space-y-1">
              {[
              'SABA via MDI + espaçador é preferível à nebulização (eficácia equivalente, menos contaminação).',
              'Usar SABA de forma conservadora — doses excessivas causam taquicardia, hipocalemia, arritmias e acidose láctica.',
              'Oxigênio: iniciar apenas quando Sat < 92%; titular para 92–95% (≥ 6 anos) ou ≥ 92% (< 5 anos); evitar > 95%.',
              'Corticoide sistêmico em crises moderadas/graves ou leves sem melhora após SABA.',
              'ICS obrigatório na alta — iniciar ou otimizar em todos os pacientes.',
              'Aminofilina e β₂-agonista EV: reservados à UTI; não recomendados em atenção primária.'].
              map((item, i) =>
              <li key={i} className="flex gap-2 text-sm"><span className="text-blue-400 flex-shrink-0">•</span>{item}</li>
              )}
            </ul>
          </div>
          <MedicationsTable />
        </div>
      </Section>

      {/* 6. ICS at discharge */}
      <Section icon={<Pill className="w-4 h-4" />} title="6. ICS na Alta — Quando e Como Iniciar (GINA 2026)" color="purple">
        <div className="space-y-4">

          {/* Indicações por faixa etária */}
          <div className="space-y-2">
            {[
            {
              label: '≥ 12 anos e crianças 6–11 anos',
              text: 'Todos devem receber ICS antes da alta. Se sem controlador prévio, iniciar MART com ICS-formoterol (budesonida-formoterol) — reduz risco de novas crises e de corticoide oral. Para quem já usa ICS + SABA, aumentar dose do ICS por 2–4 semanas e revisar adesão e técnica.',
              color: 'bg-violet-50 border-violet-200 text-violet-900',
              badge: '≥ 6 anos'
            },
            {
              label: 'Crianças ≤ 5 anos',
              text: 'Iniciar ou intensificar ICS se a crise foi moderada/grave ou se há sintomas entre episódios (≥ 2 dias/semana). Usar o dobro da dose baixa inicial no primeiro mês e ajustar conforme resposta. Iniciar antes da alta.',
              color: 'bg-sky-50 border-sky-200 text-sky-900',
              badge: '≤ 5 anos'
            },
            {
              label: 'Revisão pós-alta e seguimento',
              text: 'Consulta em 2–7 dias (1–3 dias para < 6 anos). Avaliar resposta, técnica do inalador e ajustar plano de ação. Sintomas frequentes ou uso excessivo de SABA = intensificar controlador. Após 2–3 meses de controle, reduzir gradualmente para a menor dose eficaz.',
              color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
              badge: 'Seguimento'
            }].
            map((item, i) =>
            <div key={i} className={`rounded-xl border p-3 ${item.color}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/70 border border-current">{item.badge}</span>
                  <p className="font-bold text-xs">{item.label}</p>
                </div>
                <p className="text-xs leading-relaxed">{item.text}</p>
              </div>
            )}
          </div>

          {/* Tabela de doses */}
          <div>
            <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Doses diárias baixas de ICS (dose inicial na alta) — GINA 2026</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-violet-700 text-white">
                    <th className="px-3 py-2.5 text-left font-bold min-w-[160px]">ICS (tipo de inalador)</th>
                    <th className="px-3 py-2.5 text-center font-bold min-w-[100px]">≥ 12 anos (mcg/dia)</th>
                    <th className="px-3 py-2.5 text-center font-bold min-w-[100px]">6–11 anos (mcg/dia)</th>
                    <th className="px-3 py-2.5 text-center font-bold min-w-[100px]">≤ 5 anos (mcg/dia)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                  ['Beclometasona dipropionato (pMDI HFA padrão)', '200–500', '100–200', '100 (≥ 5 anos)'],
                  ['Beclometasona dipropionato (pMDI/DPI extrafina HFA)', '100–200', '50–100', '50 (≥ 5 anos)'],
                  ['Budesonida (DPI ou pMDI HFA)', '200–400', '100–200', '—'],
                  ['Budesonida (nebulização)', 'n.a.', '250–500', '500 (≥ 1 ano)'],
                  ['Ciclesonida (pMDI extrafina HFA)', '80–160', '80', '—'],
                  ['Fluticasona furoato (DPI)', '100', '50', '—'],
                  ['Fluticasona propionato (DPI)', '100–250', '50–100', '—'],
                  ['Fluticasona propionato (pMDI HFA padrão)', '100–250', '50–100', '50 (≥ 4 anos)'],
                  ['Mometasona furoato (pMDI ou DPI)', '200–400', '100', '100 (≥ 5 anos)']].
                  map((row, i) =>
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-violet-50/40'}>
                      <td className="px-3 py-2 font-medium text-gray-800 border-r border-gray-100">{row[0]}</td>
                      <td className="px-3 py-2 text-center font-bold text-violet-700">{row[1]}</td>
                      <td className="px-3 py-2 text-center font-bold text-sky-700">{row[2]}</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">{row[3]}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-400 mt-1.5 leading-relaxed">* pMDI = inalador pressurizado de dose medida; DPI = inalador de pó seco; HFA = hidrofluoroalcano. Em crianças, pMDI sempre com espaçador. Doses não são equipotentes — ajustar se trocar de medicamento.</p>
          </div>

          {/* MART destaque */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-xs text-purple-900">
              <p className="font-bold mb-1">✅ MART — preferencial em ≥ 6 anos (GINA 2026)</p>
              <p>Budesonida-formoterol como controlador <em>e</em> resgate (passo 4). Iniciar antes da alta mesmo sem controlador prévio. Máx 8 jatos/dia (6–11 anos) ou 12 jatos/dia (adolescentes/adultos).</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
              <p className="font-bold mb-1">⚠️ Corticoide oral — uso racional</p>
              <p>Limitar cursos anuais. ≥ 4 cursos/ano → osteoporose, diabetes, catarata. Otimizar ICS, considerar imunobiológicos em asma grave, evitar OCS de manutenção.</p>
            </div>
          </div>

        </div>
      </Section>

      {/* References */}
      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {[
          'Global Initiative for Asthma (GINA) 2026 Strategy Report. ginasthma.org.',
          'Schvartsman C et al. Pronto-Socorro do ICr-HCFMUSP. 4ª ed. Manole; 2023.',
          'Scottish Intercollegiate Guideline Network and British Thoracic Society (SIGN/BTS).',
          'J Bras Pneumol 2006; 32 Suppl 7:S447-74.',
          'Stenson EK, Tchou MJ, Wheeler DS. Curr Opin Pediatr. 2017;29(3):305-310.',
          'Einstein SBIBAE — Pathway: Crise Asmática em Crianças e Adolescentes v.3.'].
          map((ref, i) =>
          <li key={i} className="flex gap-2"><span className="font-bold">[{i + 1}]</span>{ref}</li>
          )}
        </ul>
      </Section>
    </div>);

}

// ── Main Page ─────────────────────────────────────────────────────────────────

const FLUXOGRAMAS = {
  'crise-asmatica': { title: 'Fluxograma — Crise Asmática', component: <FluxogramaCriseAsmatica /> },
  'bronquiolite': { title: 'Fluxograma — Bronquiolite', component: <FluxogramaBronquiolite /> },
  'convulsao-febril': { title: 'Fluxograma — Convulsão Febril', component: <FluxogramaConvulsao /> },
  'diarreia-aguda': { title: 'Fluxograma — Diarreia Aguda', component: <FluxogramaDiarreia /> },
  'faringoamigdalite': { title: 'Fluxograma — Faringoamigdalite', component: <FluxogramaFaringoamigdalite /> },
  'febre-sem-sinais': { title: 'Fluxograma — Febre sem Sinais', component: <FluxogramaFebre /> },
  'pneumonia-complicada': { title: 'Fluxograma — PAC Complicada', component: <FluxogramaPneumonia /> },
  'anemia-ferropriva': { title: 'Fluxograma — Anemia Ferropriva', component: <FluxogramaAnemiaFerropriva /> }
};

// ── Inline Flowchart Panel ─────────────────────────────────────────────────────
function FluxogramaPanel({ id }) {
  const [open, setOpen] = useState(true);
  const data = FLUXOGRAMAS[id];
  if (!data) return null;
  return (
    <div className="bg-white border-2 border-primary/20 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 bg-primary/5 hover:bg-primary/10 transition-colors">
        
        <GitBranch className="w-5 h-5 text-primary flex-shrink-0" />
        <span className="font-bold text-primary text-sm flex-1 text-left">{data.title}</span>
        <ChevronDown className={`w-4 h-4 text-primary transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden">
          
            <div className="p-5 overflow-x-auto">
              {data.component}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}

export default function Protocolos() {
  const urlParams = new URLSearchParams(window.location.search);
  const [selected, setSelected] = useState(urlParams.get('id') || null);
  const [expandedFlux, setExpandedFlux] = useState(null);
  const [search, setSearch] = useState('');
  const [activeEsp, setActiveEsp] = useState(null);

  const detailMap = {
    'crise-asmatica': <CriseAsmaticaDetail />,
    'bronquiolite': <Bronquiolite />,
    'convulsao-febril': <ConvulsaoFebril />,
    'diarreia-aguda': <DiarreiaAguda />,
    'faringoamigdalite': <Faringoamigdalite />,
    'febre-sem-sinais': <FebreSemSinais />,
    'pneumonia-complicada': <PneumoniaComplicada />,
    'anemia-ferropriva': <AnemiaFerropriva />,
    'meningite-bacteriana': <MeningiteBacteriana />,
    'itu': <InfeccaoTratoUrinario />
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return PROTOCOLS.filter((p) => {
      const matchesSearch = !q || [p.title, p.subtitle, p.tag, ...(p.keywords || [])].some((s) => s.toLowerCase().includes(q));
      const matchesEsp = !activeEsp || p.especialidade === activeEsp;
      return matchesSearch && matchesEsp;
    });
  }, [search, activeEsp]);

  const especialidades = [...new Set(PROTOCOLS.map((p) => p.especialidade))];

  const grouped = useMemo(() => {
    const groups = {};
    filtered.forEach((p) => {
      if (!groups[p.especialidade]) groups[p.especialidade] = [];
      groups[p.especialidade].push(p);
    });
    return groups;
  }, [filtered]);

  // ── Detail view ──
  if (selected && detailMap[selected]) {
    return (
      <div className="max-w-3xl mx-auto px-4 pb-12 pt-6">
        <button
          onClick={() => setSelected(null)}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-5">
          
          <ChevronLeft className="w-4 h-4" /> Todos os Protocolos
        </button>
        {detailMap[selected]}
        {FLUXOGRAMAS[selected] &&
        <div className="mt-6">
            <FluxogramaPanel id={selected} />
          </div>
        }
      </div>);

  }

  // ── List view ──
  const MAIS_USADOS = ['crise-asmatica', 'bronquiolite', 'convulsao-febril', 'diarreia-aguda', 'febre-sem-sinais', 'pneumonia-complicada'];
  const maisUsados = MAIS_USADOS.map((id) => PROTOCOLS.find((p) => p.id === id)).filter(Boolean);
  const maisAcessados = PROTOCOLS.slice(0, 5);

  const ESP_ICONS = {
    'Respiratório': '🫁', 'Neurologia': '🧠', 'Gastroenterologia': '🥗',
    'Infectologia': '🦠', 'Hematologia': '🩸'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* ── HEADER ── */}
      <div className="mb-6">
        
        
      </div>

      {/* ── SEARCH ── */}
      <div className="relative mb-5">
        
        




        
        
        {search &&
        <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        }
      </div>

      {/* ── SPECIALTY FILTER CHIPS ── */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => setActiveEsp(null)}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${!activeEsp ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`}>
          <LayoutGrid className="w-3.5 h-3.5" /> Todas
        </button>
        {especialidades.map((esp) => {
          const meta = ESPECIALIDADE_META[esp] || {};
          const isActive = activeEsp === esp;
          return (
            <button key={esp} onClick={() => setActiveEsp(isActive ? null : esp)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${isActive ? `${meta.bg} ${meta.text} ${meta.border}` : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`}>
              <span>{ESP_ICONS[esp] || '📋'}</span> {esp}
            </button>);

        })}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* ── LEFT: Main content ── */}
        <div className="flex-1 min-w-0 space-y-6">

          {/* Mais usados strip */}
          {!search && !activeEsp &&
          <div className="bg-white border border-border rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <p className="font-bold text-sm text-foreground">Mais usados no plantão</p>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {maisUsados.map((p) =>
              <button key={p.id} onClick={() => setSelected(p.id)}
              className="flex items-center gap-2 px-3 py-2 bg-secondary/60 hover:bg-secondary border border-border rounded-xl text-xs font-semibold text-foreground whitespace-nowrap transition-all flex-shrink-0">
                    <span>{p.icon}</span> {p.title} <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  </button>
              )}
              </div>
            </div>
          }

          {/* Results count */}
          {(search || activeEsp) &&
          <p className="text-xs text-muted-foreground">
              {filtered.length === 0 ? 'Nenhum protocolo encontrado' : `${filtered.length} protocolo${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`}
            </p>
          }

          {/* Grouped protocols */}
          {filtered.length === 0 ?
          <div className="text-center py-16 bg-white border border-border rounded-2xl">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-semibold text-foreground">Nenhum resultado encontrado</p>
              <p className="text-sm text-muted-foreground mt-1">Tente outros termos como "febre", "asma" ou "diarreia".</p>
            </div> :

          <div className="space-y-4">
              {Object.entries(grouped).map(([esp, protocols]) => {
              const meta = ESPECIALIDADE_META[esp] || { bg: 'bg-secondary', border: 'border-border', text: 'text-foreground', dot: 'bg-primary' };
              return (
                <div key={esp} className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
                    {/* Specialty header */}
                    <div className={`flex items-center gap-2.5 px-5 py-3.5 border-b border-border`}>
                      <span className="text-xl">{ESP_ICONS[esp] || '📋'}</span>
                      <span className={`text-base font-extrabold ${meta.text}`}>{esp}</span>
                      <span className={`ml-auto text-xs font-semibold px-2.5 py-1 rounded-full ${meta.bg} ${meta.text} border ${meta.border}`}>
                        {protocols.length} protocolo{protocols.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    <div className="divide-y divide-border/60">
                      {protocols.map((p) =>
                    <div key={p.id}>
                          <div className="flex items-stretch">
                            <button onClick={() => setSelected(p.id)}
                        className="flex-1 text-left px-5 py-4 flex items-center gap-4 hover:bg-secondary/30 transition-all group">
                              <div className={`w-12 h-12 rounded-xl ${meta.bg} flex items-center justify-center text-2xl flex-shrink-0`}>
                                {p.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-foreground text-sm">{p.title}</p>
                                <p className="text-xs text-muted-foreground">{p.subtitle}</p>
                                <p className="text-xs text-muted-foreground/50 mt-0.5">{p.source}</p>
                              </div>
                              {/* Tags */}
                              <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
                                {FLUXOGRAMAS[p.id] &&
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Fluxograma</span>
                            }
                                {(p.especialidade === 'Infectologia' || p.tag === 'Emergência') &&
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">Emergência</span>
                            }
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${meta.bg} ${meta.text}`}>{p.tag}</span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                            </button>
                            {FLUXOGRAMAS[p.id] &&
                        <button onClick={() => setExpandedFlux(expandedFlux === p.id ? null : p.id)}
                        className={`flex flex-col items-center justify-center gap-1 px-3 border-l border-border text-xs font-semibold transition-all min-w-[56px] ${expandedFlux === p.id ? 'bg-primary text-white' : 'bg-secondary/40 text-primary hover:bg-primary/10'}`}>
                                <GitBranch className="w-4 h-4" />
                                <ChevronDown className={`w-3 h-3 transition-transform ${expandedFlux === p.id ? 'rotate-180' : ''}`} />
                              </button>
                        }
                          </div>
                          <AnimatePresence initial={false}>
                            {expandedFlux === p.id && FLUXOGRAMAS[p.id] &&
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                                <div className="border-t border-border bg-secondary/20 px-5 py-5 overflow-x-auto">
                                  <p className="text-xs font-bold text-primary mb-3 flex items-center gap-1.5">
                                    <GitBranch className="w-3.5 h-3.5" /> {FLUXOGRAMAS[p.id].title}
                                  </p>
                                  {FLUXOGRAMAS[p.id].component}
                                </div>
                              </motion.div>
                        }
                          </AnimatePresence>
                        </div>
                    )}
                    </div>
                  </div>);

            })}

              {/* Coming soon */}
              {!search && !activeEsp &&
            <div className="bg-secondary/60 border border-border rounded-2xl p-5 text-center">
                  <BookOpen className="w-7 h-7 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Mais protocolos em breve</p>
                  <p className="text-xs text-muted-foreground mt-1">Sepse neonatal, cetoacidose diabética, anafilaxia e outros.</p>
                </div>
            }
            </div>
          }
        </div>

        {/* ── RIGHT: Sidebar ── */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">
          {/* Mais acessados */}
          <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <p className="font-bold text-sm text-foreground">Mais acessados</p>
            </div>
            <div className="divide-y divide-border/60">
              {maisAcessados.map((p, i) =>
              <button key={p.id} onClick={() => setSelected(p.id)}
              className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-secondary/40 transition-colors group text-left">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[11px] font-bold text-primary flex-shrink-0">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{p.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{p.especialidade}</p>
                  </div>
                  <span className="text-lg flex-shrink-0">{p.icon}</span>
                </button>
              )}
            </div>
            <div className="px-5 py-3 border-t border-border">
              <button onClick={() => setActiveEsp(null)}
              className="w-full flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Ver todos os protocolos <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}