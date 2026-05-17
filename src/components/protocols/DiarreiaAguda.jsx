import React from 'react';
import { ClipboardList, LogOut, Pill, Info, AlertTriangle } from 'lucide-react';

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
    { param: 'Boca e língua', a: 'Úmidas', b: 'Secas', c: 'Muito secas' },
    { param: 'Sede', a: 'Bebe normalmente', b: 'Sedento, bebe rápido e avidamente', c: 'Bebe mal ou não é capaz de beber*' },
    { param: 'Sinal de prega', a: 'Desaparece rapidamente', b: 'Desaparece lentamente', c: 'Desaparece muito lentamente (> 2 seg)' },
    { param: 'Pulso', a: 'Cheio', b: 'Rápido, débil', c: 'Muito débil ou ausente*' },
    { param: 'Enchimento capilar', a: 'Normal (até 3 seg)', b: 'Prejudicado (3–5 seg)', c: 'Muito prejudicado (> 5 seg)' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="min-w-full text-xs">
        <thead>
          <tr>
            <th className="bg-secondary/60 px-3 py-2 text-left font-bold text-muted-foreground uppercase tracking-wide w-32">Parâmetro</th>
            <th className="bg-green-100 px-3 py-2 text-center font-bold text-green-700 uppercase tracking-wide">
              Plano A<br /><span className="font-normal text-green-600 normal-case">Sem desidratação</span>
            </th>
            <th className="bg-yellow-100 px-3 py-2 text-center font-bold text-yellow-700 uppercase tracking-wide">
              Plano B<br /><span className="font-normal text-yellow-600 normal-case">Algum grau</span>
            </th>
            <th className="bg-red-100 px-3 py-2 text-center font-bold text-red-700 uppercase tracking-wide">
              Plano C<br /><span className="font-normal text-red-600 normal-case">Grave*</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}>
              <td className="px-3 py-2 font-semibold text-foreground">{r.param}</td>
              <td className="px-3 py-2 text-center text-green-800">{r.a}</td>
              <td className="px-3 py-2 text-center text-yellow-800">{r.b}</td>
              <td className="px-3 py-2 text-center text-red-800 font-medium">{r.c}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="px-3 py-2 text-xs text-muted-foreground italic">
              * Plano C: 2 ou mais sinais incluindo pelo menos 1 assinalado com asterisco = Desidratação Grave. Fonte: SBP — Departamento Científico de Gastroenterologia 2023.
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function TreatmentPlans() {
  const plans = [
    {
      label: 'PLANO A — Sem Desidratação',
      bg: 'bg-green-50 border-green-300',
      header: 'bg-green-500',
      items: [
        'Alta hospitalar com orientação de oferecer líquidos VO à vontade',
        'Observar sinais de desidratação',
        'Antieméticos se vômitos: Ondansetrona 0,15 mg/kg',
      ],
    },
    {
      label: 'PLANO B — Algum Grau de Desidratação',
      bg: 'bg-yellow-50 border-yellow-300',
      header: 'bg-yellow-500',
      items: [
        'TRO (solução de reidratação oral): 50–100 mL/kg em 4–6 horas',
        'Na falha de retenção** após 2h → Hidratação EV',
        'Hidratação EV: SF 20 mL/kg em 20–30 min até restabelecimento',
        'Antiemético se necessário: Ondansetrona',
      ],
    },
    {
      label: 'PLANO C — Desidratação Grave',
      bg: 'bg-red-50 border-red-300',
      header: 'bg-red-500',
      items: [
        'Hidratação EV obrigatória: SF 20 mL/kg em bolus até recuperação hemodinâmica',
        'Coletar: gasometria venosa, sódio, potássio, glicemia capilar',
        'Correção de distúrbios hidroeletrolíticos quando presentes',
        'Antiemético se necessário: Ondansetrona',
      ],
    },
  ];
  return (
    <div className="space-y-3">
      {plans.map((p) => (
        <div key={p.label} className={`rounded-xl border ${p.bg} overflow-hidden`}>
          <div className={`${p.header} text-white text-center text-xs font-bold py-1.5 px-3`}>{p.label}</div>
          <ul className="p-3 space-y-1.5">
            {p.items.map((item, i) => (
              <li key={i} className="flex gap-1.5 text-xs"><span>•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      ))}
      <div className="bg-secondary/60 rounded-xl p-3 text-xs text-muted-foreground space-y-1">
        <p>* Na presença de SRO comercializadas, optar por solução com 45–60 mEq/L de sódio. Para SRO com 90 mEq/L de sódio, oferecer alíquotas intercaladas com mesmo volume de água. Pode-se considerar hidratação por SNG 30–50 mL/kg em 3–6h ou 20 mL/kg/h em bomba.</p>
        <p>** Índice de Retenção (IR) deve ser {'>'} 20%: IR = (peso atual − peso inicial) / peso inicial × 100</p>
      </div>
    </div>
  );
}

function AntibioticsTable() {
  const rows = [
    {
      age: 'Até 10 anos / ≤ 30 kg',
      drugs: [
        { name: 'Azitromicina', dose: '10 mg/kg no 1º dia, depois 5 mg/kg por mais 4 dias, VO. Total: 5 dias.' },
        { name: 'Ceftriaxona', dose: '50–100 mg/kg IM 1×/dia. Total: 3–5 dias. Se < 3 meses ou imunodeficiência: EV.' },
      ],
    },
    {
      age: '> 10 anos / > 30 kg',
      drugs: [
        { name: 'Ciprofloxacino', dose: '500 mg de 12/12h VO por 3 dias.' },
        { name: 'Ceftriaxona', dose: '50–100 mg/kg IM 1×/dia por 3–5 dias. Casos graves: EV.' },
        { name: 'Cefotaxima', dose: 'Casos graves: 100 mg/kg dividido em 4 doses.' },
      ],
    },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-teal-600">
            <th className="px-3 py-2 text-left font-bold text-white">Idade / Peso</th>
            <th className="px-3 py-2 text-left font-bold text-white">Antibiótico</th>
            <th className="px-3 py-2 text-left font-bold text-white">Dose</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) =>
            r.drugs.map((d, j) => (
              <tr key={`${i}-${j}`} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/40'}>
                {j === 0 && (
                  <td rowSpan={r.drugs.length} className="px-3 py-2 font-semibold text-teal-900 align-top border-r border-border">
                    {r.age}
                  </td>
                )}
                <td className="px-3 py-2 font-semibold text-foreground align-top">{d.name}</td>
                <td className="px-3 py-2 text-foreground leading-relaxed">{d.dose}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function DiarreiaAguda() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-5 text-white">
        <p className="text-teal-200 text-xs font-semibold mb-0.5">Protocolo Clínico · Gastroenterologia</p>
        <h1 className="text-2xl font-extrabold leading-tight">💧 Diarreia Aguda</h1>
        <p className="text-teal-100 text-sm mt-0.5">em Crianças e Adolescentes</p>
        <p className="text-teal-200 text-xs mt-3 border-t border-teal-400/40 pt-2">Albert Einstein (SBIBAE) · Versão 4 · Revisado Jun/2025</p>
      </div>

      {/* Definition */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 text-sm text-teal-900 leading-relaxed">
        Perda excessiva de água e eletrólitos através das fezes, com aumento do volume e frequência das evacuações e/ou diminuição da consistência, por <strong>mais de 3 episódios ao dia</strong>. Classificada como aguda quando duração <strong>menor que 14 dias</strong>.
      </div>

      {/* 1. Diagnosis */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="1. Diagnóstico e Exames Adicionais" color="blue">
        <div className="space-y-3 text-sm">
          <p>Diagnóstico <strong>essencialmente clínico</strong>.</p>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Exames diagnósticos:</p>
            <ul className="space-y-1.5">
              {[
                'Casos leves: não indicados.',
                'Desidratação grave ou suspeita de distúrbios eletrolíticos: indicados.',
                'Risco de disseminação (< 3 meses, imunossuprimidos, doenças crônicas, quadro grave ou sintomas persistentes): HMG, HMC, PCR, sódio, potássio, ureia, creatinina, gasometria venosa, lactato, glicemia capilar; pesquisa de rotavírus e adenovírus nas fezes, coprocultura, PCR para gastroenterites (quando disponível).',
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-blue-400 flex-shrink-0">•</span>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">Exames de imagem:</p>
            <p className="text-sm">De acordo com suspeita clínica para afastar diagnósticos diferenciais (ex: apendicite).</p>
          </div>
        </div>
      </Section>

      {/* 2. Risk Score / Dehydration */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="2. Classificação de Desidratação (SBP 2023)" color="teal">
        <DehydrationTable />
      </Section>

      {/* 3. Hospitalization */}
      <Section icon={<LogOut className="w-4 h-4" />} title="3. Indicação de Internação e Critérios de Alta" color="red">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-900">
            <p className="font-bold text-xs mb-2">Internação</p>
            <ul className="space-y-1 text-xs">
              <li className="flex gap-1.5"><span>•</span>Dificuldade na ingestão de líquidos VO</li>
              <li className="flex gap-1.5"><span>•</span>Necessidade de hidratação EV para manter hidratação</li>
            </ul>
          </div>
          <div className="bg-red-100 border border-red-300 rounded-xl p-3 text-red-900">
            <p className="font-bold text-xs mb-2">UTI</p>
            <ul className="space-y-1 text-xs">
              <li className="flex gap-1.5"><span>•</span>Sepse</li>
              <li className="flex gap-1.5"><span>•</span>Instabilidade hemodinâmica</li>
              <li className="flex gap-1.5"><span>•</span>Evacuações e/ou vômitos sem resposta à medicação e hidratação inicial</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-green-900">
            <p className="font-bold text-xs mb-2">Alta</p>
            <ul className="space-y-1 text-xs">
              <li className="flex gap-1.5"><span>✓</span>Ausência de sinais de desidratação</li>
              <li className="flex gap-1.5"><span>✓</span>Diminuição de perdas</li>
              <li className="flex gap-1.5"><span>✓</span>Boa aceitação VO</li>
              <li className="flex gap-1.5"><span>✓</span>Diurese presente</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 4. Treatment */}
      <Section icon={<Pill className="w-4 h-4" />} title="4. Tratamento — Planos de Hidratação" color="blue">
        <TreatmentPlans />
        <div className="mt-4 space-y-2 text-sm">
          <p className="text-xs font-semibold text-muted-foreground mb-1">Duração do tratamento:</p>
          <ul className="space-y-1">
            {[
              'Sem desidratação: alta com orientações.',
              'Algum grau de desidratação: 6 horas ou mais.',
              'Desidratação grave: > 24 horas.',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm"><span className="text-blue-400">•</span>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Antibiotics */}
      <Section icon={<Pill className="w-4 h-4" />} title="Antibióticos" color="teal">
        <div className="space-y-3">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
            <p><strong>Indicação:</strong> Sinais de disseminação (sepse), imunodeprimidos, risco de agravamento de comorbidades ou cólera. <strong>Disenteria e aumento de provas inflamatórias séricas NÃO são indicações.</strong></p>
          </div>
          <AntibioticsTable />
        </div>
      </Section>

      {/* Zinc */}
      <Section icon={<Pill className="w-4 h-4" />} title="Zinco" color="amber">
        <p className="text-sm">Indicar nos casos de <strong>desnutrição ou comorbidades</strong> que predisponham ou agravem a deficiência de zinco. Administrar <strong>1×/dia por 10–14 dias</strong>:</p>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center text-xs text-amber-900">
            <p className="font-bold text-sm">10 mg/dia</p>
            <p>Até 6 meses</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center text-xs text-amber-900">
            <p className="font-bold text-sm">20 mg/dia</p>
            <p>{'>'} 6 meses até 5 anos</p>
          </div>
        </div>
      </Section>

      {/* Antissecretory & Probiotics */}
      <Section icon={<Pill className="w-4 h-4" />} title="Antissecretor e Probióticos" color="purple">
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">Antissecretor:</p>
            <p>Racecadotrila: pode ser considerado a partir dos <strong>3 meses</strong> na dose de <strong>1,5 mg/kg 3×/dia</strong> (máx 400 mg/dia).</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">Probióticos (evidência limitada — uso conforme avaliação clínica):</p>
            <ul className="space-y-1 text-xs">
              {[
                'Saccharomyces boulardii: 250–750 mg/dia por 5–7 dias',
                'Lacticaseibacillus rhamnosus GG: ≥ 10¹⁰ UFC/dia por 5–7 dias',
                'Limosilactobacillus reuteri: 1×10⁸–4×10⁸ UFC/dia por 5–7 dias',
              ].map((item, i) => (
                <li key={i} className="flex gap-1.5"><span className="text-purple-400">•</span>{item}</li>
              ))}
            </ul>
            <p className="text-xs text-red-700 mt-2 font-semibold">⚠️ Compostos com Bacillus clausii NÃO devem ser prescritos — não agem na diarreia.</p>
          </div>
        </div>
      </Section>

      {/* References */}
      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {[
            'Guarino A et al. ESPGHAN/ESPID Evidence-Based Guidelines for Acute Gastroenteritis in Children in Europe: Update 2014. JPGN 2014;59:132–152.',
            'Departamento Científico de Gastroenterologia — Sociedade Brasileira de Pediatria, 2023.',
            'Guarino A et al. Acute Gastroenteritis in Children of the World: What Needs to Be Done? J Pediatr Gastroenterol Nutr. 2020;70(5):694–701.',
          ].map((ref, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i + 1}]</span>{ref}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}