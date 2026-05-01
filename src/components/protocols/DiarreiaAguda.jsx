import React from 'react';
import { ClipboardList, LogOut, Pill, Info } from 'lucide-react';

function Section({ icon, title, color = 'blue', children }) {
  const colors = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    teal: 'text-teal-600 bg-teal-50 border-teal-200',
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

function DehydrationTable() {
  const rows = [
    { param: 'Condição', a: 'Bem alerta', b: 'Irritado, intranquilo', c: 'Comatoso, hipotônico' },
    { param: 'Olhos', a: 'Normais', b: 'Fundos', c: 'Muitos fundos' },
    { param: 'Lágrimas', a: 'Presentes', b: 'Ausentes', c: 'Ausentes' },
    { param: 'Boca/língua', a: 'Úmidas', b: 'Secas', c: 'Muito secas' },
    { param: 'Sede', a: 'Bebe normalmente', b: 'Sedento, bebe avidamente', c: 'Bebe mal ou não bebe*' },
    { param: 'Sinal de prega', a: 'Desaparece rapidamente', b: 'Desaparece lentamente', c: 'Desaparece muito lentamente' },
    { param: 'Pulso', a: 'Cheio', b: 'Rápido, débil', c: 'Muito débil ou ausente*' },
    { param: 'Enchimento capilar', a: 'Normal (< 3s)', b: 'Prejudicado (3–5s)', c: 'Muito prejudicado (> 5s)' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="min-w-full text-xs">
        <thead>
          <tr>
            <th className="bg-secondary/60 px-3 py-2.5 text-left font-bold text-muted-foreground w-28">Observar</th>
            <th className="bg-green-100 px-3 py-2.5 text-center font-bold text-green-700">A — Sem desidratação</th>
            <th className="bg-yellow-100 px-3 py-2.5 text-center font-bold text-yellow-700">B — Algum grau</th>
            <th className="bg-red-100 px-3 py-2.5 text-center font-bold text-red-700">C — Grave</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/10'}>
              <td className="px-3 py-2 font-semibold text-foreground">{r.param}</td>
              <td className="px-3 py-2 text-center text-green-800">{r.a}</td>
              <td className="px-3 py-2 text-center text-yellow-800">{r.b}</td>
              <td className="px-3 py-2 text-center text-red-800 font-medium">{r.c}</td>
            </tr>
          ))}
          <tr className="bg-secondary/30">
            <td className="px-3 py-2 font-bold text-xs">Tratamento</td>
            <td className="px-3 py-2 text-center text-xs text-green-800 font-bold">Plano A<br/>Alta + orientações</td>
            <td className="px-3 py-2 text-center text-xs text-yellow-800 font-bold">Plano B<br/>TRO no serviço</td>
            <td className="px-3 py-2 text-center text-xs text-red-800 font-bold">Plano C<br/>Hidratação EV</td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-muted-foreground px-3 py-2">* Sinais marcados com asterisco são obrigatórios para classificar como Desidratação Grave.</p>
    </div>
  );
}

function AntibioticTable() {
  const rows = [
    { age: 'até 10 anos / até 30 kg', drug: 'Azitromicina', dose: '10 mg/kg no 1º dia e 5 mg/kg por mais 4 dias VO. Total: 5 dias' },
    { age: 'até 10 anos / até 30 kg', drug: 'Ceftriaxona', dose: '50–100 mg/kg IM 1×/dia por 3–5 dias. Se < 3 meses ou imunodeficiência: EV' },
    { age: '> 10 anos / > 30 kg', drug: 'Ciprofloxacino', dose: '500 mg 12/12h VO por 3 dias' },
    { age: '> 10 anos / > 30 kg', drug: 'Ceftriaxona', dose: '50–100 mg/kg IM 1×/dia por 3–5 dias. Casos graves: EV' },
    { age: '> 10 anos / > 30 kg', drug: 'Cefotaxima', dose: 'Casos graves: 100 mg/kg ÷ 4 doses' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-teal-600">
            <th className="px-3 py-2.5 text-left text-white font-bold">Idade / Peso</th>
            <th className="px-3 py-2.5 text-left text-white font-bold">Antibiótico</th>
            <th className="px-3 py-2.5 text-left text-white font-bold">Dose</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/40'}>
              <td className="px-3 py-2 font-semibold text-teal-900">{r.age}</td>
              <td className="px-3 py-2 font-semibold">{r.drug}</td>
              <td className="px-3 py-2 leading-relaxed">{r.dose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DiarreiaAguda() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-5 text-white">
        <p className="text-teal-200 text-xs font-semibold mb-0.5">Protocolo Clínico · Gastroenterologia</p>
        <h1 className="text-2xl font-extrabold leading-tight">💧 Diarreia Aguda</h1>
        <p className="text-teal-100 text-sm mt-0.5">em Crianças e Adolescentes</p>
        <p className="text-teal-200 text-xs mt-3 border-t border-teal-400/40 pt-2">Albert Einstein (SBIBAE) · Revisado Jun/2025 · SBP 2023</p>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 text-sm text-teal-900 leading-relaxed">
        Perda excessiva de água e eletrólitos pelas fezes, com aumento do volume/frequência das evacuações e/ou diminuição da consistência, por mais de 3 episódios ao dia. <strong>Aguda</strong> quando duração &lt; 14 dias.
      </div>

      <Section icon={<ClipboardList className="w-4 h-4" />} title="1. Diagnóstico e Exames" color="blue">
        <p className="text-sm mb-2">Diagnóstico <strong>clínico</strong>.</p>
        <ul className="space-y-1.5 text-sm">
          <li className="flex gap-2"><span className="text-blue-400">•</span>Exames não indicados em casos leves.</li>
          <li className="flex gap-2"><span className="text-blue-400">•</span>Em desidratação grave ou suspeita de distúrbios eletrolíticos: solicitar exames.</li>
          <li className="flex gap-2"><span className="text-blue-400">•</span>Em pacientes de risco (lactentes &lt; 3 meses, imunossuprimidos, doenças crônicas): HMG, HMC, PCR, eletrólitos, gasometria, lactato, glicemia, pesquisa de rotavírus/adenovírus, coprocultura.</li>
        </ul>
      </Section>

      <Section icon={<ClipboardList className="w-4 h-4" />} title="2. Escore de Desidratação (SBP 2023)" color="amber">
        <DehydrationTable />
      </Section>

      <Section icon={<LogOut className="w-4 h-4" />} title="3. Internação e Alta" color="red">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            { title: 'Internação', items: ['Dificuldade de ingestão de líquidos VO', 'Necessidade de hidratação EV'], color: 'border-red-300 bg-red-50 text-red-900' },
            { title: 'UTI', items: ['Sepse, instabilidade hemodinâmica', 'Evacuações/vômitos sem resposta à medicação e hidratação'], color: 'border-red-400 bg-red-100 text-red-900' },
            { title: 'Alta', items: ['Ausência de sinais de desidratação', 'Diminuição de perdas', 'Boa aceitação VO', 'Diurese presente'], color: 'border-green-300 bg-green-50 text-green-900' },
          ].map((c, i) => (
            <div key={i} className={`rounded-xl border p-3 ${c.color}`}>
              <p className="font-bold mb-1 underline">{c.title}</p>
              {c.items.map((item, ii) => <p key={ii} className="flex gap-1"><span>•</span>{item}</p>)}
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<Pill className="w-4 h-4" />} title="5. Tratamento" color="teal">
        <div className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: 'Sem desidratação (A)', bg: 'bg-green-50 border-green-200', text: 'text-green-900', content: ['Alta com orientações', 'Oferecer líquidos VO à vontade', 'Ondansetrona 0,15 mg/kg se vômitos'] },
              { label: 'Algum grau (B)', bg: 'bg-yellow-50 border-yellow-200', text: 'text-yellow-900', content: ['TRO: 50–100 mL/kg em 4–6 horas', 'Ondansetrona se necessário', 'EV se falha de retenção após 2h: SF 20 mL/kg em 20–30 min'] },
              { label: 'Grave (C)', bg: 'bg-red-50 border-red-200', text: 'text-red-900', content: ['EV obrigatório', 'SF 20 mL/kg em bolus até recuperação hemodinâmica', 'Gasometria, sódio, potássio e glicemia', 'Corrigir distúrbios eletrolíticos'] },
            ].map((col, i) => (
              <div key={i} className={`rounded-xl border p-3 ${col.bg}`}>
                <p className={`font-bold text-xs mb-2 ${col.text}`}>{col.label}</p>
                <ul className="space-y-1">
                  {col.content.map((item, ii) => <li key={ii} className={`flex gap-1 text-xs ${col.text}`}><span>•</span>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Antibióticos — indicar apenas em sinais de disseminação (sepse), imunodeprimidos ou cólera</p>
            <AntibioticTable />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-secondary/40 border border-border rounded-xl p-3 text-xs">
              <p className="font-bold mb-1">Zinco</p>
              <p>Indicar em desnutrição ou comorbidades: até 6 meses → 10 mg/dia; &gt; 6 meses até 5 anos → 20 mg/dia. Por 10–14 dias.</p>
            </div>
            <div className="bg-secondary/40 border border-border rounded-xl p-3 text-xs">
              <p className="font-bold mb-1">Antissecretor</p>
              <p>Racecadotrila: a partir de 3 meses, 1,5 mg/kg 3×/dia (máx 400 mg/dia).</p>
            </div>
          </div>
        </div>
      </Section>

      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {['ESPGHAN/ESPID Evidence-Based Guidelines. JPGN 2014;59:132-152.', 'Departamento Científico de Gastroenterologia SBP, 2023.', 'Guarino A et al. J Pediatr Gastroenterol Nutr. 2020;70(5):694-701.'].map((r, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i+1}]</span>{r}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}