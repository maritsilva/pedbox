import React from 'react';
import { AlertTriangle, Activity, Pill, ClipboardList, Info, LogOut, Sun } from 'lucide-react';

function Section({ icon, title, color = 'green', children }) {
  const colors = {
    blue:   'text-blue-600 bg-blue-50 border-blue-200',
    green:  'text-green-600 bg-green-50 border-green-200',
    amber:  'text-amber-600 bg-amber-50 border-amber-200',
    red:    'text-red-600 bg-red-50 border-red-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    teal:   'text-teal-600 bg-teal-50 border-teal-200',
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

export default function HipovitaminoseD() {
  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-5 text-white">
        <p className="text-green-200 text-xs font-semibold mb-0.5">Protocolo Clínico · Endocrinologia</p>
        <h1 className="text-2xl font-extrabold leading-tight">☀️ Hipovitaminose D em Pediatria</h1>
        <p className="text-green-100 text-sm mt-0.5">Diagnóstico, Tratamento e Prevenção</p>
        <p className="text-green-200 text-xs mt-3 border-t border-green-400/40 pt-2">
          Sociedade Brasileira de Pediatria — Dep. Científico de Endocrinologia · Documento Científico Nº 181 · Nov/2024
        </p>
      </div>

      {/* Intro */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-sm text-green-900 leading-relaxed">
        A deficiência de vitamina D é um dos distúrbios nutricionais mais frequentes no mundo, estimando-se que <strong>1 bilhão de pessoas</strong> sofram de insuficiência ou deficiência dessa vitamina. No Brasil, apesar da adequada exposição solar, a hipovitaminose D acomete crianças e adolescentes de todas as classes sociais.
      </div>

      {/* 1. Grupos de Risco */}
      <Section icon={<AlertTriangle className="w-4 h-4" />} title="1. Grupos de Risco e Causas" color="amber">
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-amber-600 text-white">
                <th className="px-3 py-2 text-left font-bold">Principais causas / grupos de risco</th>
                <th className="px-3 py-2 text-left font-bold">Mecanismo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ['Gestantes com hipovitaminose D · Prematuridade', 'Diminuição da transferência materno-fetal'],
                ['Exposição solar inadequada · Pele escura · Protetor solar · Roupas que cobrem o corpo · Poluição · Latitude', 'Diminuição da síntese cutânea'],
                ['Aleitamento materno exclusivo · Fórmula < 1 L/dia · Dieta pobre em vit. D · Dieta vegetariana', 'Diminuição da ingesta'],
                ['Síndromes de má absorção (doença celíaca, DII, fibrose cística, cirurgia bariátrica)', 'Diminuição da absorção intestinal'],
                ['Hepatopatia crônica · Nefropatia crônica', 'Diminuição da síntese'],
                ['Obesidade', 'Sequestro no tecido adiposo'],
                ['Medicamentos: anticonvulsivantes, corticoides, cetoconazol, ritonavir, rifampicina, colestiramina, orlistate, espironolactona, nifedipina', 'Mecanismos variados: ↓ absorção e/ou ↑ degradação'],
              ].map(([causa, mec], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50/40'}>
                  <td className="px-3 py-2 text-foreground">{causa}</td>
                  <td className="px-3 py-2 text-muted-foreground italic">{mec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 2. Manifestações */}
      <Section icon={<Activity className="w-4 h-4" />} title="2. Manifestações Clínico-Laboratoriais" color="red">
        <p className="text-sm text-foreground mb-3">
          A gravidade e duração determinam o quadro clínico — pode ser <strong>assintomática</strong> ou evoluir para raquitismo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-xs text-yellow-900">
            <p className="font-bold mb-2 uppercase text-[10px] tracking-wide">Leve / Moderada</p>
            {['Assintomática (frequente)', 'Atraso do crescimento', 'Irritabilidade', 'Dores ósseas'].map((item, i) => (
              <p key={i} className="flex gap-1.5"><span>•</span>{item}</p>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900">
            <p className="font-bold mb-2 uppercase text-[10px] tracking-wide">Grave / Raquitismo</p>
            {[
              'Hipocalcemia · Hipofosfatemia',
              'Elevação de FA e PTH',
              'Fronte olímpica · Crânio tabes',
              'Rosário raquítico (junções costocondrais)',
              'Alargamento de punhos/tornozelos',
              'Geno varo ou geno valgo',
              'Atraso na erupção dentária · Sulco de Harrison',
            ].map((item, i) => (
              <p key={i} className="flex gap-1.5"><span>•</span>{item}</p>
            ))}
          </div>
        </div>

        {/* Estágios bioquímicos */}
        <p className="text-xs font-bold text-muted-foreground mt-4 mb-2 uppercase tracking-wide">Evolução laboratorial</p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="px-3 py-2 text-left font-bold">Exame</th>
                <th className="px-3 py-2 text-center font-bold">Estágio 1</th>
                <th className="px-3 py-2 text-center font-bold">Estágio 2</th>
                <th className="px-3 py-2 text-center font-bold">Estágio 3</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ['Cálcio sérico', 'Normal ou ↓', 'Normal ou ↓', '↓↓'],
                ['Fósforo sérico', 'Normal ou ↓', '↓', '↓↓'],
                ['Fosfatase alcalina', '↑', '↑↑', '↑↑↑'],
                ['PTH', '↑', '↑↑', '↑↑↑'],
                ['25-OH-vitamina D', '↓', '↓↓', '↓↓↓'],
              ].map(([exam, e1, e2, e3], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50/30'}>
                  <td className="px-3 py-2 font-semibold text-foreground">{exam}</td>
                  <td className="px-3 py-2 text-center text-yellow-700">{e1}</td>
                  <td className="px-3 py-2 text-center text-orange-700">{e2}</td>
                  <td className="px-3 py-2 text-center text-red-700 font-bold">{e3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 3. Diagnóstico */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="3. Diagnóstico" color="blue">
        <div className="space-y-4 text-sm">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="font-bold text-blue-900 text-xs mb-1">Exame de escolha</p>
            <p className="text-blue-800 text-xs">
              <strong>25(OH)vitamina D</strong> (calcidiol/calcifediol) — forma de depósito, meia-vida 2–3 semanas.
              Não solicitar 1,25(OH)₂D (calcitriol), pois não avalia o estado nutricional da vitamina D.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Pontos de corte (ng/mL) — 1 ng/mL = 2,5 nmol/L</p>
            <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-3 py-2 text-left font-bold">Diagnóstico</th>
                    <th className="px-3 py-2 text-center font-bold">AAP</th>
                    <th className="px-3 py-2 text-center font-bold">Endocrine Society</th>
                    <th className="px-3 py-2 text-center font-bold">Global Consensus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['Suficiência', '21–100', '30–100', '> 20', 'bg-green-50'],
                    ['Insuficiência', '16–20', '21–29', '12–20', 'bg-yellow-50'],
                    ['Deficiência', '< 15', '< 20', '< 12', 'bg-red-50'],
                    ['Toxicidade', '> 150', '> 100', '> 100', 'bg-purple-50'],
                  ].map(([diag, aap, endo, gc, bg], i) => (
                    <tr key={i} className={bg}>
                      <td className="px-3 py-2 font-semibold text-foreground">{diag}</td>
                      <td className="px-3 py-2 text-center">{aap}</td>
                      <td className="px-3 py-2 text-center">{endo}</td>
                      <td className="px-3 py-2 text-center">{gc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-muted-foreground mt-1.5">AAP = American Academy of Pediatrics · Endocrine Society Clinical Practice Guideline · Global Consensus on Prevention and Management of Nutritional Rickets</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
            <p className="font-bold mb-1">⚠️ Triagem apenas para grupos de risco</p>
            <p>Não recomenda-se triagem universal. Solicitar 25(OH)D apenas em grupos de risco (Quadro 1). Se &lt; 20 ng/mL: complementar com Ca, P, Mg, FA, PTH e proteínas totais para investigar raquitismo.</p>
          </div>
        </div>
      </Section>

      {/* 4. Tratamento */}
      <Section icon={<Pill className="w-4 h-4" />} title="4. Tratamento — Colecalciferol (Vitamina D3)" color="green">
        <div className="space-y-4">
          <p className="text-sm text-foreground">
            O tratamento é indicado para <strong>todos os pacientes com deficiência</strong>, sintomáticos ou não.
            Usar <strong>colecalciferol (D3)</strong> — mais ativo que o ergocalciferol (D2) e de melhor monitorização laboratorial.
          </p>

          {/* Global Consensus */}
          <div>
            <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Global Consensus (Raquitismo Nutricional)</p>
            <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="px-3 py-2 text-left font-bold">Faixa etária</th>
                    <th className="px-3 py-2 text-center font-bold">Dose terapêutica (diária)</th>
                    <th className="px-3 py-2 text-center font-bold">Duração</th>
                    <th className="px-3 py-2 text-center font-bold">Manutenção</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['< 3 meses', '2.000 UI/dia', '12 semanas', '400 UI/dia'],
                    ['3–12 meses', '2.000 UI/dia', '12 semanas', '400 UI/dia'],
                    ['1–12 anos', '3.000–6.000 UI/dia', '12 semanas', '600 UI/dia'],
                    ['> 12 anos', '6.000 UI/dia', '12 semanas', '600 UI/dia'],
                  ].map(([faixa, dose, dur, manut], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'}>
                      <td className="px-3 py-2 font-semibold text-foreground">{faixa}</td>
                      <td className="px-3 py-2 text-center font-bold text-teal-700">{dose}</td>
                      <td className="px-3 py-2 text-center">{dur}</td>
                      <td className="px-3 py-2 text-center text-green-700 font-semibold">{manut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Endocrine Society */}
          <div>
            <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Endocrine Society Clinical Practice Guideline</p>
            <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-3 py-2 text-left font-bold">Faixa etária</th>
                    <th className="px-3 py-2 text-center font-bold">Dose diária</th>
                    <th className="px-3 py-2 text-center font-bold">Dose semanal</th>
                    <th className="px-3 py-2 text-center font-bold">Manutenção</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['< 1 ano', '2.000 UI × 6 sem', '50.000 UI × 6 sem', '400–1.000 UI/dia'],
                    ['1–18 anos', '2.000 UI × 6 sem', '50.000 UI × 6 sem', '600–1.000 UI/dia'],
                  ].map(([faixa, dd, ds, manut], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
                      <td className="px-3 py-2 font-semibold text-foreground">{faixa}</td>
                      <td className="px-3 py-2 text-center">{dd}</td>
                      <td className="px-3 py-2 text-center">{ds}</td>
                      <td className="px-3 py-2 text-center text-blue-700 font-semibold">{manut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cálcio */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-xs text-orange-900">
            <p className="font-bold text-sm mb-2">💊 Suplementação de Cálcio</p>
            <p className="mb-1">Indicada nos pacientes com <strong>raquitismo</strong> ou ingestão insuficiente de cálcio.</p>
            <ul className="space-y-1">
              <li>• <strong>Carbonato de cálcio</strong> (1g = 400 mg Ca elementar): 500 mg/dia Ca elementar VO 8/8h, com refeição — 2 a 4 semanas</li>
              <li>• <strong>Citrato de cálcio</strong> (1g = 211 mg Ca elementar): preferível em pacientes com acloridria ou em uso de IBP</li>
              <li>• <strong>Gluconato de cálcio EV</strong> (1g = 90 mg Ca elementar): 10–20 mg/kg/dose — apenas em tetania ou convulsão, EV lento 5–15 min</li>
            </ul>
          </div>

          {/* Stoss therapy */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-xs text-purple-900">
            <p className="font-bold mb-1">⚡ Stoss-therapy (doses elevadas — uso excepcional)</p>
            <ul className="space-y-0.5">
              <li>• &lt; 3 meses: <strong>contraindicada</strong></li>
              <li>• 3–12 meses: 50.000 UI VO dose única → manutenção 400 UI/dia</li>
              <li>• 12 meses–12 anos: 150.000 UI VO dose única → manutenção 600 UI/dia</li>
              <li>• &gt; 12 anos: 300.000 UI VO dose única → manutenção 600 UI/dia</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 5. Prevenção */}
      <Section icon={<Sun className="w-4 h-4" />} title="5. Prevenção — Suplementação de Colecalciferol" color="teal">
        <div className="space-y-3">
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="px-3 py-2 text-left font-bold">Grupo</th>
                  <th className="px-3 py-2 text-center font-bold">Colecalciferol (D3)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ['Crianças &lt; 1 ano', '400 UI/dia', 'bg-green-50'],
                  ['Crianças e adolescentes 1–18 anos', '600 UI/dia', 'bg-white'],
                  ['Grupos de risco (vegetariano, obesidade, hepatopatia, nefropatia, má absorção, medicamentos)', '1.200–1.800 UI/dia (ajustar por condição)', 'bg-amber-50'],
                ].map(([grupo, dose, bg], i) => (
                  <tr key={i} className={bg}>
                    <td className="px-3 py-2 text-foreground" dangerouslySetInnerHTML={{ __html: grupo }} />
                    <td className="px-3 py-2 text-center font-bold text-teal-700">{dose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900">
            <p className="font-bold mb-1">⚠️ Exposição solar sem proteção NÃO é recomendada</p>
            <p>SBP e SBD contraindicam exposição solar sem protetor solar para fins de síntese de vitamina D, pelo risco de fotoenvelhecimento e câncer de pele. Caso haja indicação, repor por dieta ou suplementação.</p>
          </div>
        </div>
      </Section>

      {/* 6. Intoxicação */}
      <Section icon={<AlertTriangle className="w-4 h-4" />} title="6. Intoxicação por Vitamina D" color="red">
        <div className="space-y-3 text-sm">
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900">
            <p className="font-bold mb-1">Diagnóstico: 25(OH)D &gt; 150 ng/mL + hipercalcemia + hipercalciúria + PTH supresso</p>
            <p>O uso terapêutico nas doses recomendadas é <strong>seguro</strong>. Atenção a: doenças granulomatosas, alguns linfomas, síndrome de Williams e vitaminas manipuladas (risco de erro de dose).</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Manifestações clínicas:</p>
            <p className="text-xs text-foreground leading-relaxed">Anorexia · Náusea · Vômito · Dor abdominal · Poliúria · Polidipsia · Constipação · Calcificação ectópica · Nefrolitíase · Fraqueza · Confusão mental</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900">
            <p className="font-bold mb-1">Tratamento da intoxicação:</p>
            <p>Suspensão da vitamina D · Hidratação venosa · Diuréticos de alça · Bisfosfonatos · Corticoides</p>
          </div>
        </div>
      </Section>

      {/* 7. Monitorização */}
      <Section icon={<LogOut className="w-4 h-4" />} title="7. Monitorização" color="purple">
        <div className="space-y-2 text-xs">
          {[
            {
              title: 'Raquitismo nutricional',
              text: 'Dosar 25(OH)D a cada 3 meses até atingir > 20–30 ng/mL. Se alteração bioquímica, solicitar trimestralmente: Ca, P, Mg, FA, PTH. Radiografia de mãos/punhos ou joelhos 1–3 meses após início do tratamento.',
              color: 'bg-purple-50 border-purple-200 text-purple-900'
            },
            {
              title: 'Prevenção em indivíduos saudáveis (até 2.000 UI/dia)',
              text: 'Dosagem de 25(OH)D rotineira é desnecessária. Solicitar 8–12 semanas após início, apenas se suspeita de não adesão.',
              color: 'bg-green-50 border-green-200 text-green-900'
            },
            {
              title: 'Pacientes com fatores de risco',
              text: 'Dosar periodicamente de acordo com o protocolo de cada condição (cirurgia bariátrica, uso de anticonvulsivantes, corticoides, doença celíaca).',
              color: 'bg-amber-50 border-amber-200 text-amber-900'
            },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border p-3 ${item.color}`}>
              <p className="font-bold text-xs mb-1">{item.title}</p>
              <p className="leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* References */}
      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="green">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {[
            'SBP — Departamento Científico de Endocrinologia. Hipovitaminose D em pediatria: diagnóstico, tratamento e prevenção. Documento Científico Nº 181 — Nov/2024.',
            'Demay MB et al. Vitamin D for the Prevention of Disease: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2024;109(8):1907-1947.',
            'Munns CF et al. Global Consensus recommendations on prevention and management of nutritional rickets. J Clin Endocrinol Metab. 2016;101:394-415.',
            'Misra M et al. Vitamin D deficiency in children and its management. Pediatrics. 2008;122:398-417.',
            'Holick MF et al. Evaluation, treatment and prevention of vitamin D deficiency: an Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2011;96:1911-1930.',
            'Giustina A et al. Consensus Statement on Vitamin D Status Assessment and Supplementation. Endocr Rev. 2024;45(5):625-654.',
          ].map((ref, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold flex-shrink-0">[{i + 1}]</span>{ref}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}