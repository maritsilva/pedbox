import React from 'react';
import { Info, AlertTriangle, Pill, Activity, Droplets, Microscope, LogOut, BookOpen, ClipboardList } from 'lucide-react';

function Section({ icon, title, color = 'blue', children }) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    red: 'bg-red-50 border-red-200 text-red-800',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    teal: 'bg-teal-50 border-teal-200 text-teal-800',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
  };
  return (
    <div className="mb-4">
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border mb-3 ${colors[color]}`}>
        {icon}
        <span className="font-bold text-sm">{title}</span>
      </div>
      <div className="px-1">{children}</div>
    </div>
  );
}

export default function InfeccaoTratoUrinario() {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-600 to-teal-800 rounded-2xl p-5 text-white mb-5">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-extrabold leading-tight">Infecção do Trato Urinário</h2>
            <p className="text-cyan-200 text-xs mt-0.5">em Crianças e Adolescentes</p>
          </div>
        </div>
        <p className="text-cyan-200 text-xs mt-3 border-t border-cyan-400/40 pt-2">
          Hospital Israelita Albert Einstein · Versão 3 · Revisado Set/2025
        </p>
      </div>

      {/* 1. Diagnóstico */}
      <Section icon={<Microscope className="w-4 h-4" />} title="1. Diagnóstico" color="blue">
        <div className="space-y-3">
          <p className="text-xs text-gray-700">
            A ITU caracteriza-se pela multiplicação bacteriana em qualquer segmento do trato urinário gerando sinais ou sintomas de infecção. A urocultura é o padrão-ouro, mas o resultado leva 48–72 horas. Alterações na urina tipo I justificam início imediato do tratamento como ITU presumida.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900">
              <p className="font-bold mb-1.5">Sintomas clínicos</p>
              <ul className="space-y-0.5">
                {['Febre', 'Disúria / urgência miccional', 'Polaciúria / incontinência', 'Dor abdominal / lombar', 'Alteração no aspecto da urina', 'Queda do estado geral'].map((s, i) => (
                  <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
                ))}
              </ul>
              <p className="text-[11px] text-blue-700 mt-2 font-semibold">⚠️ &lt;2 anos: febre/lombalgia podem estar ausentes — presumir pielonefrite em caso de dúvida.</p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 text-xs text-teal-900">
              <p className="font-bold mb-1.5">Urina tipo I alterada</p>
              <p className="font-semibold">Indicativa de ITU presumida:</p>
              <ul className="space-y-0.5 mt-1">
                {['&gt; 10.000 leucócitos/mL', 'Esterase positiva', 'Bacteriúria', 'Nitrito positivo'].map((s, i) => (
                  <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
            <p className="font-bold mb-1.5">Indicações de coleta de urina + urocultura</p>
            <ul className="space-y-0.5">
              {['Criança com sintomas sugestivos de ITU', 'Menores de 3 anos com FSSL (conforme protocolo FSSL institucional)', 'Crianças com malformações urinárias ou história de múltiplas ITUs, principalmente em quadros febris'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-green-900">
            <p className="font-bold mb-1.5">Método de coleta de urina</p>
            <p className="font-semibold mb-1">Crianças não continentes:</p>
            <p>Sondagem vesical de alívio, "clean catch" ou punção suprapúbica (conforme fluxo local).</p>
            <p className="font-semibold mt-2 mb-1">Saco coletor (última opção — justificar):</p>
            <p>Fimose, sinéquia vulvar, infecções/malformações genitais, recusa dos pais.</p>
            <p className="font-semibold mt-2 mb-1">Crianças com controle esfincteriano:</p>
            <p>Jato médio urinário — coleta limpa.</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full text-xs border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-3 py-2.5 text-left font-bold">Método de coleta</th>
                  <th className="px-3 py-2.5 text-center font-bold">Contagem de colônias (UFC/mL)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Jato médio ou saco coletor', '&gt; 100.000'],
                  ['Sondagem vesical de alívio (SVA)', '&gt; 50.000'],
                  ['Punção suprapúbica (PSP)', '&gt; 1.000'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/40'}>
                    <td className="px-3 py-2 font-semibold text-gray-700 border-r border-gray-100">{row[0]}</td>
                    <td className="px-3 py-2 text-center text-gray-600 font-bold">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-xs text-indigo-900">
            <p className="font-bold mb-1.5">Bacteriúria assintomática</p>
            <p>Presença de urocultura positiva SEM sinais/sintomas clínicos. Conduta individualizada — em geral, NÃO tratar em crianças com malformações. Cada situação deve ser avaliada especificamente.</p>
          </div>
        </div>
      </Section>

      {/* 2. Interpretação Urina Tipo I */}
      <Section icon={<Activity className="w-4 h-4" />} title="2. Interpretação da Urina Tipo I" color="amber">
        <p className="text-xs text-gray-600 mb-3">Integração de esterase, nitrito, leucocitúria e bacteriúria (adaptado NICE NG224, 2022):</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-3">
          <table className="min-w-full text-[11px] border-collapse">
            <thead>
              <tr className="bg-amber-700 text-white">
                <th className="px-2 py-2 text-center font-bold">Esterase</th>
                <th className="px-2 py-2 text-center font-bold">Nitrito</th>
                <th className="px-2 py-2 text-center font-bold">Leucócitos</th>
                <th className="px-2 py-2 text-center font-bold">Bactérias</th>
                <th className="px-2 py-2 text-left font-bold">Interpretação</th>
                <th className="px-2 py-2 text-left font-bold">Conduta</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['+', '+', '+', '+', 'ITU provável', 'Antibioticoterapia'],
                ['+', '+', '+', '−', 'ITU provável', 'Antibioticoterapia'],
                ['+', '+', '−', '+', 'ITU provável', 'Antibioticoterapia'],
                ['+', '−', '+', '+', 'ITU provável', 'Antibioticoterapia'],
                ['+', '−', '+', '−', 'ITU possível', 'Avaliar sintomas; considerar ATB + enviar cultura'],
                ['+', '−', '−', '+', 'ITU possível', 'Avaliar sintomas; considerar ATB + enviar cultura'],
                ['+', '−', '−', '−', 'ITU improvável', 'Avaliar outras causas'],
                ['−', '+', '+', '+', 'ITU provável', 'Antibioticoterapia'],
                ['−', '+', '+', '−', 'ITU provável', 'Antibioticoterapia'],
                ['−', '+', '−', '+', 'ITU provável', 'Antibioticoterapia'],
                ['−', '+', '−', '−', 'ITU provável', 'Antibioticoterapia'],
                ['−', '−', '+', '+', 'ITU provável', 'Antibioticoterapia'],
                ['−', '−', '+', '−', 'ITU possível', 'Avaliar sintomas; considerar ATB + enviar cultura'],
                ['−', '−', '−', '+', 'ITU possível', 'Avaliar sintomas; considerar ATB + enviar cultura'],
                ['−', '−', '−', '−', 'ITU muito improvável', 'Avaliar outras causas; não tratar'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50/40'}>
                  <td className="px-2 py-1.5 text-center">{row[0]}</td>
                  <td className="px-2 py-1.5 text-center">{row[1]}</td>
                  <td className="px-2 py-1.5 text-center">{row[2]}</td>
                  <td className="px-2 py-1.5 text-center">{row[3]}</td>
                  <td className="px-2 py-1.5 text-left font-semibold">{row[4]}</td>
                  <td className="px-2 py-1.5 text-left">{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-gray-500">
          <strong>Nota:</strong> Leucocitúria positiva = &gt; 10.000 leucócitos/mL. Presença de sintomas clínicos claros pode influenciar decisão, independentemente de resultados laboratoriais.
        </p>
      </Section>

      {/* 3. Tratamento */}
      <Section icon={<Pill className="w-4 h-4" />} title="3. Tratamento — Antibioticoterapia" color="red">
        <div className="space-y-3">
          <p className="text-xs text-gray-700 font-semibold">
            Tempo de tratamento: ITU afebril 5–7 dias | ITU febril ou recorrente 7–10 dias
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-3">
            <p className="font-bold text-xs text-red-800 mb-2">Via Oral</p>
            <div className="overflow-x-auto rounded-lg border border-red-200">
              <table className="min-w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-red-700 text-white">
                    <th className="px-2 py-2 text-left font-bold">Antimicrobiano</th>
                    <th className="px-2 py-2 text-left font-bold">Dose</th>
                    <th className="px-2 py-2 text-center font-bold">Duração</th>
                    <th className="px-2 py-2 text-left font-bold">Dose máxima</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cefuroxima', '30 mg/kg/dia, 2 doses', '7–10 dias', '1000 mg/dia'],
                    ['Amoxicilina + ácido clavulânico', '50 mg/kg/dia, 2–3 doses', '7–10 dias', '1500 mg/dia'],
                    ['Cefalexina (ITU afebril)', '50–100 mg/kg/dia, 3–4 doses', '7–10 dias', '500 mg/dose'],
                    ['Cefadroxila (ITU afebril)', '30 mg/kg/dia, 2 doses', '7–10 dias', '500 mg/dose'],
                    ['Fosfomicina (ITU afebril ≥12 anos)', '3000 mg/dose, 1 dose única', 'Dose única', '3000 mg/dose'],
                    ['SMX-TMP (considerar alergia)', '8–12 mg TMP/kg/dia, 2 doses', '7–10 dias', '160 mg/dose'],
                    ['Ciprofloxacino', '40 mg/kg/dia, 2 doses', '7–10 dias', '500 mg/dose'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50/40'}>
                      <td className="px-2 py-1.5 font-semibold text-gray-800">{row[0]}</td>
                      <td className="px-2 py-1.5 text-gray-700">{row[1]}</td>
                      <td className="px-2 py-1.5 text-center text-gray-600">{row[2]}</td>
                      <td className="px-2 py-1.5 text-gray-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
            <p className="font-bold text-xs text-orange-800 mb-2">Via Parenteral (IV/IM)</p>
            <p className="text-xs text-orange-900 mb-2">
              <strong>Indicações:</strong> Intolerância VO, comprometimento estado geral/sepse, falha em tratamento ambulatorial, germe multirresistente, injúria renal aguda, imunossuprimidos, &lt; 3 meses.
            </p>
            <div className="overflow-x-auto rounded-lg border border-orange-200">
              <table className="min-w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-orange-700 text-white">
                    <th className="px-2 py-2 text-left font-bold">Antimicrobiano</th>
                    <th className="px-2 py-2 text-left font-bold">Dose</th>
                    <th className="px-2 py-2 text-center font-bold">Duração</th>
                    <th className="px-2 py-2 text-left font-bold">Dose máxima</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Ceftriaxone', '50 mg/kg/dia, 1 dose IV/IM', '7–10 dias', '2000 mg/dia'],
                    ['Cefuroxima', '150 mg/kg/dia, 3 doses IV', '7–10 dias', '750 mg/dose'],
                    ['Cefotaxima (&lt;3 meses)', '150 mg/kg/dia, 3 doses IV', '7–10 dias', '2000 mg/dose'],
                    ['Gentamicina', '5–7 mg/kg/dia, 3 doses IV/IM', '7–10 dias', '300 mg/dia'],
                    ['Ciprofloxacino', '20–30 mg/kg/dia, 2 doses IV', '7–10 dias', '400 mg/dose'],
                    ['Piperacilina-tazobactam', '300 mg/kg/dia, 3 doses IV', '7–10 dias', '4000 mg/dose'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-orange-50/40'}>
                      <td className="px-2 py-1.5 font-semibold text-gray-800">{row[0]}</td>
                      <td className="px-2 py-1.5 text-gray-700">{row[1]}</td>
                      <td className="px-2 py-1.5 text-center text-gray-600">{row[2]}</td>
                      <td className="px-2 py-1.5 text-gray-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-orange-700 mt-1.5 font-semibold">Duração parenteral: Manter até troca para VO ou 72h + 24h afebril.</p>
          </div>

          <div className="text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
            <p className="font-semibold text-gray-700 mb-1">Considerações importantes:</p>
            <ul className="space-y-0.5">
              {['Sempre enviar cultura quando iniciar antibiótico', 'Basear tratamento inicial na sensibilidade da flora local', 'Presença de sintomas clínicos pode influenciar decisão independentemente de laboratoriais'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 4. Alocação */}
      <Section icon={<LogOut className="w-4 h-4" />} title="4. Alocação — Critérios de Internação e Alta" color="green">
        <div className="space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900">
              <p className="font-bold mb-2">Critérios para internação hospitalar</p>
              <ul className="space-y-0.5">
                {['Necessidade de ATB EV (considerar hospital-dia em selecionados)', 'Necessidade de hidratação EV', 'Ausência de seguimento ambulatorial adequado'].map((s, i) => (
                  <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900">
              <p className="font-bold mb-2">Critérios para UTI</p>
              <ul className="space-y-0.5">
                {['Instabilidade hemodinâmica', 'Injúria renal aguda com distúrbio hidroeletrolítico / previsão de diálise', 'Sepse confirmada'].map((s, i) => (
                  <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-green-900 sm:col-span-2">
              <p className="font-bold mb-2">Critérios para alta hospitalar</p>
              <ul className="space-y-0.5">
                {['Criança afebril ≥ 24 horas', 'Tolerância de ATB via oral', 'Função renal em melhora', 'U1 normal'].map((s, i) => (
                  <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Investigação */}
      <Section icon={<Activity className="w-4 h-4" />} title="5. Exames Complementares" color="teal">
        <div className="space-y-2">
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 text-xs text-teal-900">
            <p className="font-bold mb-1.5">Laboratoriais</p>
            <p className="mb-1">Indicados quando há comprometimento do estado geral, sepse, imunossupressão, suspeita de injúria renal aguda ou nefropatas.</p>
            <p className="text-[11px]">Hemograma, hemocultura, PCR, uréia, creatinina, eletrólitos, gasometria venosa.</p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-xs text-indigo-900">
            <p className="font-bold mb-1.5">Ultrassonografia de rins e vias urinárias</p>
            <ul className="space-y-0.5">
              {['Solicitar imediatamente em: evolução anômala, suspeita de abscesso renal, injúria renal aguda', 'Menores de 2 anos após 1º episódio de ITU febril: realizar USG, preferencialmente em ambulatório pós-resolução do quadro'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 6. Fluxograma */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="6. Fluxograma de Manejo" color="purple">
        <div className="text-xs space-y-2">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
            <p className="font-bold text-purple-800 mb-2">Avaliação inicial</p>
            <p className="text-gray-700">Clínica com sintomas sugestivos de ITU</p>
            <p className="text-gray-600 text-[11px] mt-1">↓ Avaliar: estado geral, temperatura, controle esfincteriano</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800 text-xs mb-1">Requer ATB imediato?</p>
              <p className="text-[11px] text-amber-900">Ex: comprometimento estado geral</p>
            </div>
            <div className="space-y-1.5">
              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <p className="font-bold text-green-800 text-[11px]">SIM</p>
                <p className="text-[10px] text-green-900">Iniciar antibiótico</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                <p className="font-bold text-blue-800 text-[11px]">NÃO</p>
                <p className="text-[10px] text-blue-900">Coletar U1 + URC</p>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-xl p-3">
            <p className="font-bold text-sky-800 mb-1.5">Coleta de urina</p>
            <p className="text-[11px] text-sky-900 mb-1"><strong>Controle esfincteriano?</strong></p>
            <p className="text-[11px] text-sky-900 mb-1">• SIM: Jato médio / "clean catch"</p>
            <p className="text-[11px] text-sky-900">• NÃO: Sondagem vesical, jato médio ou saco coletor (justificar)</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
            <p className="font-bold text-emerald-800 mb-1.5">U1 resultado</p>
            <p className="text-[11px] text-emerald-900 mb-1">• <strong>Alterada:</strong> Iniciar antibiótico + enviar urocultura</p>
            <p className="text-[11px] text-emerald-900">• <strong>Normal:</strong> Alta com orientações. Reavaliação se persistência de febre</p>
          </div>
        </div>
      </Section>

      {/* Referências */}
      <Section icon={<BookOpen className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {[
            'NICE Guideline NG224. Urinary tract infection in under 16s: diagnosis and management. 2022.',
            'JAMA Network Open. Guidelines for prevention, diagnosis, management of UTI in pediatrics and adults. 2024;7(11).',
            'Swiss consensus recommendations on urinary tract infections in children. Eur J Pediatr. 2021;180:663–674.',
            'Updated Italian recommendations for diagnosis, treatment and follow-up of first febrile UTI in young children. Acta Paediatr. 2020;109:236–247.',
            'AAP Clinical Practice Guideline. Diagnosis and management of initial UTI in febrile infants and young children 2–24 months. Pediatrics. 2016;138(6).',
            'Hospital Israelita Albert Einstein. Infecção do Trato Urinário em Crianças e Adolescentes. Versão 3, Set/2025.',
          ].map((ref, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold flex-shrink-0">[{i + 1}]</span>{ref}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}