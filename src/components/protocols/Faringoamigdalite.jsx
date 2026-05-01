import React from 'react';
import { ClipboardList, LogOut, Pill, Info, AlertTriangle } from 'lucide-react';

function Section({ icon, title, color = 'blue', children }) {
  const colors = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    orange: 'text-orange-600 bg-orange-50 border-orange-200',
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

function CentorTable() {
  const rows = [
    { score: '≤ 0', risk: '1–2,5%', rec: 'Sem investigação complementar ou antibioticoterapia', color: 'text-green-700 bg-green-50' },
    { score: '1', risk: '5–10%', rec: 'Sem investigação complementar ou antibioticoterapia', color: 'text-green-700 bg-green-50' },
    { score: '2', risk: '11–17%', rec: 'Investigação complementar', color: 'text-yellow-700 bg-yellow-50' },
    { score: '3', risk: '28–35%', rec: 'Investigação complementar', color: 'text-orange-700 bg-orange-50' },
    { score: '≥ 4', risk: '51–53%', rec: 'Iniciar tratamento', color: 'text-red-700 bg-red-50' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <p className="text-xs font-bold text-muted-foreground mb-2 uppercase">Critérios (cada um = +1 ponto)</p>
        <div className="rounded-xl border border-border overflow-hidden text-xs">
          {[
            ['Febre > 38°C', '+1'],
            ['Ausência de tosse', '+1'],
            ['Linfonodomegalia cervical anterior dolorosa', '+1'],
            ['Edema ou exsudato tonsilar', '+1'],
            ['Idade 3–14 anos', '+1'],
            ['Idade 15–44 anos', '0'],
            ['Idade ≥ 45 anos', '–1'],
          ].map(([crit, pts], i) => (
            <div key={i} className={`flex justify-between gap-2 px-3 py-2 ${i % 2 === 0 ? 'bg-white' : 'bg-secondary/20'} border-b border-border last:border-0`}>
              <span>{crit}</span>
              <span className={`font-bold flex-shrink-0 ${pts.startsWith('+') ? 'text-blue-600' : pts === '0' ? 'text-muted-foreground' : 'text-red-500'}`}>{pts}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-muted-foreground mb-2 uppercase">Interpretação</p>
        <div className="space-y-1.5">
          {rows.map((r, i) => (
            <div key={i} className={`rounded-xl px-3 py-2 ${r.color}`}>
              <span className="font-bold">Escore {r.score}</span>
              <span className="mx-1.5 text-muted-foreground">·</span>
              <span className="text-xs">{r.risk} risco S. pyogenes</span>
              <p className="text-xs mt-0.5">{r.rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Faringoamigdalite() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-5 text-white">
        <p className="text-orange-200 text-xs font-semibold mb-0.5">Protocolo Clínico · Infectologia</p>
        <h1 className="text-2xl font-extrabold leading-tight">🦠 Faringoamigdalite</h1>
        <p className="text-orange-100 text-sm mt-0.5">em Crianças e Adolescentes</p>
        <p className="text-orange-200 text-xs mt-3 border-t border-orange-400/40 pt-2">Albert Einstein (SBIBAE) · Revisado Jun/2024</p>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-sm text-orange-900 leading-relaxed">
        Doença autolimitada, predominantemente viral. O <em>Streptococcus pyogenes</em> é responsável por <strong>5–30%</strong> dos casos e está associado a complicações pós-infecciosas — diagnóstico correto é essencial para reduzir complicações e transmissão.
      </div>

      <Section icon={<ClipboardList className="w-4 h-4" />} title="1. Critérios Diagnósticos" color="blue">
        <div className="space-y-3 text-sm">
          <p><strong>História clínica:</strong> febre e odinofagia, geralmente de início súbito na FAE, com calafrios e cefaleia. Incubação: 2–5 dias.</p>
          <p><strong>Sinais sugestivos de etiologia viral</strong> (não FAE): coriza, tosse, conjuntivite, diarreia.</p>
          <p className="text-xs font-semibold text-muted-foreground">Exames:</p>
          <ul className="space-y-1.5">
            {[
              { exam: 'Cultura de trato respiratório superior', note: 'Padrão ouro — sensibilidade 90–95%.' },
              { exam: 'Teste rápido para estreptococo grupo A', note: 'Alta especificidade (90–99%), sensibilidade variável. Se negativo: coletar cultura.' },
              { exam: 'ASLO', note: 'Não útil no diagnóstico agudo (eleva após 7–14 dias).' },
              { exam: 'Leucócitos e PCR', note: 'Não úteis para diagnóstico; podem ser usados para seguimento.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
                <span><strong>{item.exam}:</strong> {item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section icon={<ClipboardList className="w-4 h-4" />} title="2. Escore de Centor Modificado" color="amber">
        <CentorTable />
        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
          <strong>⚠️ Atenção:</strong> Pacientes com escore 0 ou 1 mas com exposição a S. pyogenes nas últimas 2 semanas, ou história de febre reumática, devem ser investigados e tratados. No Brasil, pela alta prevalência de febre reumática, tratar com escore ≥ 2 na ausência de exames.
        </div>
      </Section>

      <Section icon={<AlertTriangle className="w-4 h-4" />} title="3. Sinais de Alarme — Emergência" color="red">
        <div className="grid grid-cols-2 gap-2 text-xs">
          {['Toxemia', 'Dor intensa unilateral', 'Voz abafada', 'Rigidez na nuca', 'Salivação intensa', 'Trismo', 'Estridor', 'Desconforto respiratório', 'Abaulamento de palato'].map((s, i) => (
            <div key={i} className="flex gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-red-800">
              <span className="text-red-400">⚠️</span>{s}
            </div>
          ))}
        </div>
        <p className="text-xs text-red-700 font-semibold mt-3">→ Na presença de qualquer sinal: encaminhar para sala de emergência + estabilização + considerar tomografia cervical.</p>
      </Section>

      <Section icon={<Pill className="w-4 h-4" />} title="4. Tratamento" color="green">
        <div className="space-y-4 text-sm">
          <p className="text-xs text-muted-foreground">A FAE é autolimitada. Antibióticos objetivam reduzir severidade, transmissão e complicações. Para prevenção de febre reumática, tratar dentro dos primeiros 9 dias.</p>

          {[
            {
              label: '1ª Opção', color: 'bg-green-50 border-green-200 text-green-900',
              items: [
                'Penicilina G Benzatina IM: 600.000 UI (≤ 27 kg) ou 1.200.000 UI (> 27 kg) — dose única.',
                'Amoxicilina VO: 50 mg/kg/dia 12/12h ou 1×/dia por 10 dias (máx 1 g/dia).',
              ],
            },
            {
              label: 'Alergia à penicilina SEM hipersensibilidade imediata', color: 'bg-yellow-50 border-yellow-200 text-yellow-900',
              items: ['Cefalexina VO: 50 mg/kg/dia 12/12h ou 1×/dia por 10 dias (máx 500 mg/dose).'],
            },
            {
              label: 'Alergia à penicilina COM hipersensibilidade imediata', color: 'bg-red-50 border-red-200 text-red-900',
              items: [
                'Claritromicina VO: 15 mg/kg/dia 12/12h por 10 dias (máx 250 mg/dose).',
                'Azitromicina VO: 12 mg/kg/dia 1×/dia por 5 dias (máx 500 mg/dose).',
                'Clindamicina VO: 20 mg/kg/dia 8/8h por 10 dias (máx 300 mg/dose).',
              ],
            },
            {
              label: 'Falha terapêutica com penicilina', color: 'bg-orange-50 border-orange-200 text-orange-900',
              items: [
                'Penicilina G Benzatina IM dose única.',
                'Amoxicilina + Clavulanato VO: 50 mg/kg/dia 12/12h por 10 dias (máx 875 mg amoxicilina/dose).',
                'Azitromicina VO: 12 mg/kg/dia 1×/dia por 5 dias.',
              ],
            },
          ].map((block, i) => (
            <div key={i} className={`rounded-xl border p-3 ${block.color}`}>
              <p className="font-bold text-xs mb-2 underline">{block.label}</p>
              {block.items.map((item, ii) => <p key={ii} className="flex gap-1.5 text-xs mb-1"><span>•</span>{item}</p>)}
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<LogOut className="w-4 h-4" />} title="5. Alta e Orientações" color="blue">
        <ul className="space-y-2 text-sm">
          {[
            'Corticoides sistêmicos NÃO devem ser prescritos de rotina.',
            'Pacientes são minimamente contagiosos após 24h de antibiótico — podem retornar ao convívio escolar.',
            'Verificar resultado de cultura de trato respiratório superior e encaminhar ao pediatra titular.',
          ].map((item, i) => (
            <li key={i} className="flex gap-2"><span className="text-blue-400">•</span>{item}</li>
          ))}
        </ul>
      </Section>

      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {['Anjos LMM et al. Rev Soc Bras Med Trop 2014;47(4):409-13.', 'Carvalho CMN et al. J Pediatr (Rio J) 2006;82(1):79-82.', 'Pichichero ME. UpToDate 2023.', 'Wald ER. UpToDate 2023.'].map((r, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i+1}]</span>{r}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}