import React from 'react';
import { ClipboardList, Pill, Info, AlertTriangle, Activity } from 'lucide-react';

function Section({ icon, title, color = 'blue', children }) {
  const colors = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    rose: 'text-rose-600 bg-rose-50 border-rose-200',
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

function HbTable() {
  const rows = [
    { age: '6–23 meses', hb: '< 10,5' },
    { age: '24–59 meses', hb: '< 11,0' },
    { age: '5–11 anos', hb: '< 11,5' },
    { age: '12–14 anos (ambos os sexos)', hb: '< 12,0' },
    { age: '≥ 15 anos, mulheres', hb: '< 12,0' },
    { age: '≥ 15 anos, homens', hb: '< 13,0' },
    { age: 'Gestantes 1º/3º trim.', hb: '< 11,0' },
    { age: 'Gestantes 2º trim.', hb: '< 10,5' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-rose-600">
            <th className="px-3 py-2 text-left font-bold text-white">Faixa etária / condição</th>
            <th className="px-3 py-2 text-center font-bold text-white">Hb (g/dL) — diagnóstico de anemia</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-rose-50/30'}>
              <td className="px-3 py-2 font-semibold text-foreground">{r.age}</td>
              <td className="px-3 py-2 text-center text-red-700 font-bold">{r.hb}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-muted-foreground px-3 py-2 border-t">Fonte: OMS — atualização 2024.</p>
    </div>
  );
}

function FerritinTable() {
  const rows = [
    { age: '0–59 meses', semInfla: '< 12 mcg/L', comInfla: '< 30 mcg/L' },
    { age: '5–10 anos', semInfla: '< 15 mcg/L', comInfla: '< 70 mcg/L' },
    { age: '10–20 anos', semInfla: '< 15 mcg/L', comInfla: '< 70 mcg/L' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-amber-600">
            <th className="px-3 py-2 text-left font-bold text-white">Idade</th>
            <th className="px-3 py-2 text-center font-bold text-white">Sem inflamação (PCR normal)</th>
            <th className="px-3 py-2 text-center font-bold text-white">Com inflamação (PCR elevada)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50/30'}>
              <td className="px-3 py-2 font-semibold">{r.age}</td>
              <td className="px-3 py-2 text-center text-amber-800 font-bold">{r.semInfla}</td>
              <td className="px-3 py-2 text-center text-orange-800 font-bold">{r.comInfla}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-muted-foreground px-3 py-2 border-t">Fonte: OMS 2020. Sempre avaliar ferritina em conjunto com PCR.</p>
    </div>
  );
}

function IronFormulationsTable() {
  const rows = [
    { grupo: 'Sais ferrosos (Fe²⁺)', forma: 'Sulfato ferroso', pct: '~20%' },
    { grupo: '', forma: 'Fumarato ferroso', pct: '~33%' },
    { grupo: '', forma: 'Gluconato ferroso', pct: '~12%' },
    { grupo: '', forma: 'Bisglicinato ferroso', pct: '~20%' },
    { grupo: 'Sais férricos (Fe³⁺)', forma: 'Ferripolimaltose (hidróxido de ferro III)', pct: 'Variável' },
    { grupo: '', forma: 'Glicinato férrico', pct: '~20%' },
    { grupo: '', forma: 'Proteinossuccinilato de ferro', pct: '~5%' },
    { grupo: '', forma: 'Ferro carbonila', pct: '~98%' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-blue-600">
            <th className="px-3 py-2 text-left font-bold text-white">Grupo</th>
            <th className="px-3 py-2 text-left font-bold text-white">Formulação</th>
            <th className="px-3 py-2 text-center font-bold text-white">% Fe elementar</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
              <td className="px-3 py-2 font-semibold text-blue-900 text-xs">{r.grupo}</td>
              <td className="px-3 py-2 text-foreground">{r.forma}</td>
              <td className="px-3 py-2 text-center font-bold text-blue-800">{r.pct}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-muted-foreground px-3 py-2 border-t italic">⚠️ Carbonimaltose férrica e derisomaltose férrica NÃO são recomendadas em pediatria.</p>
    </div>
  );
}

function ProphylaxisTable() {
  const rows = [
    { weight: '1500–2500 g', dose: '2 mg/kg/dia', inicio: '30 dias de vida', duracao: 'Durante o 1º ano de vida' },
    { weight: '1000–1500 g', dose: '3 mg/kg/dia', inicio: '30 dias de vida', duracao: 'Durante o 1º ano de vida' },
    { weight: '< 1000 g', dose: '4 mg/kg/dia', inicio: '30 dias de vida', duracao: 'Durante o 1º ano de vida' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-green-600">
            <th className="px-3 py-2 text-left font-bold text-white">Peso ao nascer</th>
            <th className="px-3 py-2 text-center font-bold text-white">Dose</th>
            <th className="px-3 py-2 text-center font-bold text-white">Início</th>
            <th className="px-3 py-2 text-center font-bold text-white">Duração</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50/30'}>
              <td className="px-3 py-2 font-semibold text-green-900">{r.weight}</td>
              <td className="px-3 py-2 text-center font-bold">{r.dose}</td>
              <td className="px-3 py-2 text-center">{r.inicio}</td>
              <td className="px-3 py-2 text-center">{r.duracao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AnemiaFerropriva() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-500 to-red-700 rounded-2xl p-5 text-white">
        <p className="text-rose-200 text-xs font-semibold mb-0.5">Diretriz Clínica · Hematologia / Nutrologia</p>
        <h1 className="text-2xl font-extrabold leading-tight">🩸 Anemia Ferropriva</h1>
        <p className="text-rose-100 text-sm mt-0.5">Deficiência de Ferro em Lactentes · Atualização 2026</p>
        <p className="text-rose-200 text-xs mt-3 border-t border-rose-400/40 pt-2">SBP — Departamentos de Hematologia/Hemoterapia e Nutrologia · Diretriz Nº 32 · Mar/2026</p>
      </div>

      {/* Definition */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-sm text-rose-900 leading-relaxed">
        A deficiência de ferro é a <strong>principal causa de anemia em lactentes</strong>, comprometendo eritropoiese, crescimento e neurodesenvolvimento. No Brasil, estima-se que acomete <strong>19–35% das crianças de 6 a 24 meses</strong>.
      </div>

      {/* Risk factors */}
      <Section icon={<AlertTriangle className="w-4 h-4" />} title="Fatores de Risco" color="amber">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            { label: 'Fatores maternos', items: ['Baixa reserva de ferro materna', 'Gestações múltiplas / intervalo curto', 'Dieta materna pobre em ferro', 'Diabetes gestacional'] },
            { label: 'Demanda aumentada', items: ['Prematuridade / baixo peso ao nascer', 'Crescimento rápido nos primeiros 2 anos', 'Adolescência / perdas menstruais'] },
            { label: 'Aporte reduzido', items: ['Clampeamento precoce do cordão', 'AME prolongado sem introdução alimentar', 'Consumo de leite de vaca antes de 12 meses'] },
            { label: 'Má absorção / perdas', items: ['Doença celíaca, DII', 'Antiácidos / IBP (reduzem acidez)', 'Parasitoses intestinais, hemorragias GI'] },
          ].map((g, i) => (
            <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <p className="font-bold text-amber-800 mb-1.5">{g.label}</p>
              <ul className="space-y-0.5">
                {g.items.map((item, j) => <li key={j} className="flex gap-1.5 text-amber-700"><span>•</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Diagnosis */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="1. Diagnóstico Laboratorial" color="blue">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Valores de corte de Hb para diagnóstico de anemia (OMS 2024):</p>
            <HbTable />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Pontos de corte de ferritina sérica para deficiência de ferro (OMS 2020):</p>
            <FerritinTable />
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900">
            <p className="font-bold mb-1.5">Estágios da deficiência de ferro:</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Depleção dos estoques', items: ['Ferritina ↓', 'Ferro sérico normal', 'Hb normal', 'VCM normal'] },
                { label: 'Deficiência de ferro', items: ['Ferritina ↓', 'Ferro sérico ↓', 'TIBC ↑', 'Hb ainda normal'] },
                { label: 'Anemia ferropriva', items: ['Ferritina ↓', 'Ferro sérico ↓', 'VCM ↓ (microcitose)', 'Hb ↓, RDW ↑'] },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-2 border border-blue-200">
                  <p className="font-bold text-blue-700 text-xs mb-1">{s.label}</p>
                  <ul className="space-y-0.5">
                    {s.items.map((item, j) => <li key={j} className="text-xs">{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary/60 rounded-xl p-3 text-xs text-muted-foreground">
            <p><strong>Investigação laboratorial:</strong> NÃO recomendada de rotina em lactentes saudáveis com crescimento e alimentação adequados. Indicar hemograma + ferritina + PCR entre <strong>9–12 meses</strong> em crianças com fatores de risco (prematuridade, baixo peso, falha na suplementação, alimentação inadequada, crescimento inadequado).</p>
          </div>
        </div>
      </Section>

      {/* Treatment */}
      <Section icon={<Pill className="w-4 h-4" />} title="2. Tratamento da Anemia Ferropriva" color="rose">
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-center">
              <p className="text-xs text-rose-600 font-semibold mb-1">Dose terapêutica</p>
              <p className="text-xl font-extrabold text-rose-700">3–6 mg/kg/dia</p>
              <p className="text-xs text-rose-600">ferro elementar, VO</p>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-center">
              <p className="text-xs text-rose-600 font-semibold mb-1">Duração</p>
              <p className="text-xl font-extrabold text-rose-700">3–6 meses</p>
              <p className="text-xs text-rose-600">até normalizar Hb e estoques</p>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-center">
              <p className="text-xs text-rose-600 font-semibold mb-1">Monitoramento</p>
              <p className="text-xl font-extrabold text-rose-700">30–45 dias</p>
              <p className="text-xs text-rose-600">espera-se ↑ Hb ≥ 1 g/dL</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
            <p><strong>Desnutrição grave:</strong> iniciar com 3 mg/kg/dia na fase de reabilitação, ajustando conforme evolução.</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Principais formulações de ferro oral:</p>
            <IronFormulationsTable />
          </div>
          <div className="text-xs text-muted-foreground bg-secondary/60 rounded-xl p-3">
            <p>⚠️ A absorção pode ser reduzida por fitatos, polifenóis, cálcio, taninos e medicamentos que diminuem a acidez gástrica. Verificar o tipo de formulação antes de orientar a administração com alimentos.</p>
          </div>
        </div>
      </Section>

      {/* Prevention */}
      <Section icon={<Activity className="w-4 h-4" />} title="3. Prevenção — Suplementação Profilática" color="green">
        <div className="space-y-4">
          {/* Term infants */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-bold text-green-800 text-sm mb-2">Lactentes a termo com peso adequado ao nascer</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <p className="font-semibold text-green-700 mb-1">Dose</p>
                <p className="text-green-900 font-bold text-base">10–12,5 mg/dia</p>
                <p className="text-green-700">(dose fixa diária, independente do peso)</p>
              </div>
              <div>
                <p className="font-semibold text-green-700 mb-1">Esquema (PNSF / MS 2022)</p>
                <ul className="space-y-1 text-green-900">
                  <li>• <strong>2 ciclos</strong> de 3 meses cada</li>
                  <li>• Intervalo de 3 meses entre ciclos</li>
                  <li>• Iniciar preferencialmente aos <strong>6 meses</strong> e <strong>12 meses</strong></li>
                </ul>
              </div>
            </div>
            <div className="mt-2 text-xs text-green-800 border-t border-green-200 pt-2">
              <strong>Leite de vaca:</strong> crianças que recebem leite de vaca podem precisar iniciar a suplementação a partir dos 4 meses, articulado à introdução alimentar.
            </div>
          </div>

          {/* Premature / low birth weight */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Prematuros e/ou com baixo peso ao nascer:</p>
            <ProphylaxisTable />
            <p className="text-xs text-muted-foreground mt-2">Entre 12–24 meses: manter <strong>1 mg/kg/dia</strong> de forma contínua.</p>
          </div>

          {/* Food sources */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Alimentos — teor e biodisponibilidade de ferro:</p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-secondary/60">
                    <th className="px-3 py-2 text-left font-bold text-muted-foreground">Alimento</th>
                    <th className="px-3 py-2 text-center font-bold text-muted-foreground">Fe (mg/100g)</th>
                    <th className="px-3 py-2 text-center font-bold text-muted-foreground">Absorção (%)</th>
                    <th className="px-3 py-2 text-center font-bold text-muted-foreground">Fe absorvido</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['Carne bovina (cozida)', '2,80', '20%', '0,56 mg'],
                    ['Carne suína (assada)', '2,31', '20%', '0,46 mg'],
                    ['Frango (peito, cozido)', '1,47', '20%', '0,29 mg'],
                    ['Peixe (pescada)', '1,72', '20%', '0,34 mg'],
                    ['Ovo de galinha (cozido)', '1,75', '10%', '0,18 mg'],
                    ['Espinafre (refogado)', '2,01', '5%', '0,10 mg'],
                    ['Feijões (cozidos)', '0,88', '5%', '0,04 mg'],
                    ['Leite de vaca integral', '0,03', '10%', '0,003 mg'],
                  ].map(([alimento, fe, abs, feAbs], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}>
                      <td className="px-3 py-1.5 font-semibold">{alimento}</td>
                      <td className="px-3 py-1.5 text-center">{fe}</td>
                      <td className={`px-3 py-1.5 text-center font-bold ${abs === '20%' ? 'text-green-700' : 'text-orange-600'}`}>{abs}</td>
                      <td className="px-3 py-1.5 text-center">{feAbs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">Ferro heme (carnes) tem absorção ~20%; ferro não heme (vegetais) ~5%. Vitamina C melhora absorção do ferro não heme.</p>
          </div>
        </div>
      </Section>

      {/* Practical recommendations */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="4. Recomendações Práticas (SBP 2026)" color="purple">
        <ul className="space-y-2">
          {[
            'Estimular aleitamento materno exclusivo até os 6 meses e complementado até 2 anos ou mais.',
            'A partir dos 6 meses: alimentação complementar diversificada com oferta regular de alimentos ricos em ferro heme (carnes bovinas, suínas, aves, peixes) associados a alimentos ricos em vitamina C.',
            'Evitar leite de vaca no 1º ano de vida; se impossível amamentar, usar fórmulas infantis.',
            'Suplementação profilática: 10–12,5 mg/dia dos 6 aos 24 meses (2 ciclos de 3 meses com pausa de 3 meses).',
            'Prematuros/RNBP: iniciar ferro 2–4 mg/kg/dia aos 30 dias de vida.',
            'Investigação laboratorial (hemograma + ferritina + PCR) apenas em crianças com fatores de risco, entre 9–12 meses.',
            'Tratamento: ferro oral 3–6 mg/kg/dia por 3–6 meses; controlar Hb em 30–45 dias.',
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="text-purple-400 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>{item}
            </li>
          ))}
        </ul>
      </Section>

      {/* References */}
      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {[
            'SBP — Diretriz Nº 32: Recomendações para o tratamento e prevenção da deficiência de ferro e anemia ferropriva em lactentes – Atualização 2026. Departamentos Científicos de Nutrologia e Hematologia e Hemoterapia.',
            'WHO. Guideline on haemoglobin cutoffs to define anaemia in individuals and populations. Geneva: WHO; 2024.',
            'WHO. WHO guideline on use of ferritin concentrations to assess iron status. Geneva: WHO; 2020.',
            'Ministério da Saúde. Caderno dos Programas Nacionais de Suplementação de Micronutrientes. Brasília: MS; 2022.',
          ].map((ref, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i + 1}]</span>{ref}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}