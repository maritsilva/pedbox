import React from 'react';
import { Info, AlertTriangle, Pill, Activity, Stethoscope, ShieldAlert, Users, BookOpen, ClipboardList } from 'lucide-react';

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

export default function MeningiteBacteriana() {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 to-rose-800 rounded-2xl p-5 text-white mb-5">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-extrabold leading-tight">Meningite Aguda Bacteriana</h2>
            <p className="text-red-200 text-xs mt-0.5">Infecciologia Pediátrica + SCIP · SPP</p>
          </div>
        </div>
        <p className="text-red-200 text-xs mt-3 border-t border-red-400/40 pt-2">
          Inflamação das meninges secundária a resposta local à bactéria invasora ou seus produtos. Doença de notificação obrigatória (Neisseria meningitidis e H. influenzae).
        </p>
      </div>

      {/* 1. Etiologia */}
      <Section icon={<Stethoscope className="w-4 h-4" />} title="1. Etiologia por Faixa Etária" color="indigo">
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-3">
          <table className="min-w-full text-xs border-collapse">
            <thead>
              <tr className="bg-indigo-700 text-white">
                <th className="px-3 py-2.5 text-left font-bold w-28">Idade</th>
                <th className="px-3 py-2.5 text-left font-bold">Agentes etiológicos</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Recém-nascido', 'E. coli K1, outras Enterobacteriaceae, Streptococcus do Grupo B (SGB), Listeria monocytogenes'],
                ['1–3 meses', 'Enterobacteriaceae, SGB, Listeria monocytogenes, S. pneumoniae, N. meningitidis, H. influenzae'],
                ['3 meses–5 anos', 'S. pneumoniae, N. meningitidis, H. influenzae'],
                ['> 5 anos', 'N. meningitidis, S. pneumoniae'],
              ].map(([idade, agentes], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-indigo-50/40'}>
                  <td className="px-3 py-2 font-bold text-indigo-700 border-r border-gray-100">{idade}</td>
                  <td className="px-3 py-2 text-gray-700">{agentes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs font-semibold text-gray-600 mb-2">Fatores de risco especiais:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { fr: 'Cirurgia/Neurocirurgia, Shunt VP', ag: 'Staphylococcus (coag. neg. e aureus), Pseudomonas, Bacilos Gram−' },
            { fr: 'Fístula LCR', ag: 'S. pneumoniae, H. influenzae' },
            { fr: 'Asplenia, Doença células falciformes', ag: 'S. pneumoniae, N. meningitidis, Salmonella spp' },
            { fr: 'Défice do complemento', ag: 'N. meningitidis, S. pneumoniae' },
            { fr: 'VIH, Défice de anticorpos, Diabetes', ag: 'S. pneumoniae, H. influenzae' },
            { fr: 'Défice linfócitos T, Transplante', ag: 'Listeria monocytogenes' },
          ].map((row, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs">
              <p className="font-bold text-gray-800">{row.fr}</p>
              <p className="text-gray-500 mt-0.5">{row.ag}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 2. Clínica */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="2. Quadro Clínico" color="amber">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="font-bold text-xs text-amber-800 mb-2">🍼 Lactentes</p>
            <ul className="space-y-1 text-xs text-amber-900">
              {['Instabilidade térmica (febre/hipotermia)', 'Recusa alimentar', 'Gemido, irritabilidade, choro gritado', 'Fonofobia, letargia, hipotonia', 'Vómitos, diarreia, icterícia', 'Fontanela anterior abaulada (sinal tardio, 30%)', 'Convulsões', 'Sinais meníngeos (ausentes < 12–18 meses)'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="text-amber-500 flex-shrink-0">•</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
            <p className="font-bold text-xs text-orange-800 mb-2">🧒 Crianças</p>
            <ul className="space-y-1 text-xs text-orange-900">
              {['Febre, arrepio, vómitos, náuseas', 'Cefaleias, fotofobia', 'Exantema petéquial ou purpúrico*', 'Rigidez da nuca, Kernig e Brudzinski', 'Convulsões, sinais neurológicos focais', 'Parésia de pares cranianos', 'Edema da papila, confusão, coma', 'Letargia, irritabilidade'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="text-orange-500 flex-shrink-0">•</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900">
          <p className="font-bold mb-1">⚠️ Alertas importantes</p>
          <p>Tríade de Cushing (HTA + bradicárdia + depressão respiratória) = sinal tardio de HIC. No RN e lactente, clínica pode ser subtil. *Vigiar exantema macular/maculopapular nas primeiras 24h de febre.</p>
        </div>
      </Section>

      {/* 3. Diagnóstico */}
      <Section icon={<Activity className="w-4 h-4" />} title="3. Diagnóstico Laboratorial" color="blue">
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="font-bold text-xs text-blue-800 mb-2">Punção Lombar (PL) — realizar o mais cedo possível</p>
            <p className="text-xs text-blue-900 mb-2">Exame citoquímico, coloração de Gram, antigénios capsulares, cultura, PCR para DNA bacteriano. <strong>Colher glicémia antes da PL.</strong></p>
            <div className="overflow-x-auto rounded-lg border border-blue-200 mb-2">
              <table className="min-w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-2 py-2 text-left font-bold">Parâmetro LCR</th>
                    <th className="px-2 py-2 text-center font-bold">RN pré-termo</th>
                    <th className="px-2 py-2 text-center font-bold">RN termo</th>
                    <th className="px-2 py-2 text-center font-bold">1–12 meses</th>
                    <th className="px-2 py-2 text-center font-bold">&gt;12 meses</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Leucócitos (mm³)', '0–32', '0–29 (60% PMN)', '0–5', '<5 (60–70% linf.)'],
                    ['Proteínas (mg/dl)', '65–150', '20–170', '<60', '20–40'],
                    ['Glicose (mg/dl)', '55–105', '44–150', '>50% glicémia', '>50% glicémia'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/40'}>
                      <td className="px-2 py-2 font-semibold text-gray-700 border-r border-gray-100">{row[0]}</td>
                      {row.slice(1).map((v, j) => <td key={j} className="px-2 py-2 text-center text-gray-600">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs font-semibold text-blue-800 mb-1">Critérios diagnósticos:</p>
            <p className="text-xs text-blue-900">Leucócitos ≥ 1000×10⁶/L, proteínas ≥ 100 mg/dl e/ou glicose ≤ 20 mg/dl. Leucograma ≥ 15.000/µL e/ou PCR ≥ 5 mg/dl.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
            <p className="font-bold mb-1">Contraindicações absolutas à PL</p>
            <ul className="space-y-0.5">
              {['Instabilidade cardiorrespiratória', 'Alteração de consciência (ECG <9), sinais neurológicos focais, anisocoria', 'Convulsão prolongada', 'Sinais de HIC (edema da papila, HTA+bradicárdia, parésia III/IV/VI pares)', 'Infecção cutânea local, púrpura extensa progressiva, mielomeningocelo'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
              ))}
            </ul>
            <p className="mt-1.5 font-semibold">Relativas: plaquetas &lt;50.000/mm³, coagulopatia (até correção).</p>
            <p className="mt-1 text-amber-800 font-bold">Se PL contraindicada → colher hemocultura e iniciar antibiótico imediatamente!</p>
          </div>
          <p className="text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
            <strong>Nota:</strong> Esterilização do LCR pode ocorrer: 2h (N. meningitidis), 4h (S. pneumoniae), 8h (SGB). PCR DNA bacteriano: enviar ao INSA (centro/norte → Porto; sul/ilhas → Lisboa). Hemoculturas (2 amostras) identificam agente em 50–90%.
          </p>
        </div>
      </Section>

      {/* 4. Antibioticoterapia */}
      <Section icon={<Pill className="w-4 h-4" />} title="4. Antibioticoterapia Empírica" color="red">
        <div className="space-y-3">
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full text-xs border-collapse">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="px-3 py-2.5 text-left font-bold">Idade</th>
                  <th className="px-3 py-2.5 text-left font-bold">Esquema empírico</th>
                  <th className="px-3 py-2.5 text-left font-bold">Doses</th>
                  <th className="px-3 py-2.5 text-center font-bold">Freq.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    idade: 'RN',
                    esquema: 'Ampicilina + Cefotaxima (± Gentamicina*)',
                    doses: 'Ver Anexo',
                    freq: 'Ver Anexo',
                    bg: 'bg-white',
                  },
                  {
                    idade: '1–3 meses',
                    esquema: 'Ampicilina + Cefotaxima ± Vancomicina',
                    doses: 'Ampicilina 400 mg/kg/dia (máx 12 g) · Cefotaxima 200–300 mg/kg/dia (máx 12 g) · Vancomicina 60 mg/kg/dia',
                    freq: '4× · 3× · 4×',
                    bg: 'bg-red-50/40',
                  },
                  {
                    idade: '> 3 meses',
                    esquema: 'Ceftriaxone¹ ou Cefotaxima + Vancomicina²',
                    doses: 'Ceftriaxone 100 mg/kg/dia (máx 4 g) · Cefotaxima 200–300 mg/kg/dia · Vancomicina 60 mg/kg/dia (nível 15–20 mcg/ml)',
                    freq: '1× · 3× · 4×',
                    bg: 'bg-white',
                  },
                ].map((row, i) => (
                  <tr key={i} className={row.bg}>
                    <td className="px-3 py-2 font-bold text-red-700 border-r border-gray-100 align-top">{row.idade}</td>
                    <td className="px-3 py-2 font-medium text-gray-800 border-r border-gray-100 align-top">{row.esquema}</td>
                    <td className="px-3 py-2 text-gray-700 align-top text-[11px]">{row.doses}</td>
                    <td className="px-3 py-2 text-center text-gray-600 align-top">{row.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-[11px] text-gray-500 space-y-0.5 px-1">
            <p>¹ Se sépsis meningocócica → monoterapia com ceftriaxone.</p>
            <p>² Vancomicina obrigatória em todos &gt;1 mês com suspeita de pneumococo (alta resistência à penicilina e cefalosporinas 3ª G).</p>
            <p>* Considerar terapia tripla no RN pelo risco de Gram negativos.</p>
          </div>

          {/* Condições especiais */}
          <div>
            <p className="text-xs font-bold text-gray-600 mb-2">Esquemas em condições especiais:</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="px-3 py-2 text-left font-bold">Condição</th>
                    <th className="px-3 py-2 text-left font-bold">Esquema</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cirurgia/Neurocirurgia, Shunt VP', 'Vancomicina + Cefotaxima (± Gentamicina) — Se Pseudomonas: Ceftazidima + Gentamicina'],
                    ['Sinus dermóide, Mielomeningocelo', 'Vancomicina + Cefotaxima (± Aminoglicosídeo)'],
                    ['Fístula LCR, Asplenia, Défice de Ac, VIH', 'Vancomicina + Cefotaxima'],
                    ['Defeitos do complemento', 'Cefotaxima'],
                    ['Alergia beta-lactâmicos', 'Vancomicina + Rifampicina ou Meropenem'],
                  ].map(([cond, esquema], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 font-semibold text-gray-800 border-r border-gray-100">{cond}</td>
                      <td className="px-3 py-2 text-gray-700">{esquema}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Após identificação */}
          <div>
            <p className="text-xs font-bold text-gray-600 mb-2">Antibiótico após identificação do agente e TSA:</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-3 py-2 text-left font-bold">Microrganismo</th>
                    <th className="px-3 py-2 text-left font-bold">Antibiótico</th>
                    <th className="px-3 py-2 text-center font-bold">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Enterobacteriaceae', 'Cefotaxima + Gentamicina', '21 dias'],
                    ['Streptococcus do Grupo B', 'Ampicilina + Gentamicina', '14–21 dias'],
                    ['Listeria monocytogenes', 'Ampicilina + Gentamicina', '14–21 dias'],
                    ['Neisseria meningitidis', 'Cefotaxima / Ceftriaxone', '7 dias'],
                    ['Haemophilus influenzae', 'Cefotaxima / Ceftriaxone', '10 dias'],
                    ['SAMS', 'Flucloxacilina', '14 dias'],
                    ['SAMR', 'Vancomicina + Rifampicina (ou Cotrimoxazol ou Linezolide)', '14 dias'],
                    ['S. pneumoniae CIM <0,06', 'Cefotaxima / Ceftriaxone', '10–14 dias'],
                    ['S. pneumoniae CIM >0,12', 'Vancomicina + Cefotaxima/Ceftriaxone (± Rifampicina)', '10–14 dias'],
                  ].map(([micro, ab, dur], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50/40'}>
                      <td className="px-3 py-2 font-medium text-gray-800 border-r border-gray-100">{micro}</td>
                      <td className="px-3 py-2 text-gray-700 border-r border-gray-100">{ab}</td>
                      <td className="px-3 py-2 text-center font-bold text-red-700">{dur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-gray-400 mt-1 px-1">Sem agente isolado: &lt;3 meses → 14–21 dias · &gt;3 meses → 7–10 dias. Meropenem (40 mg/kg 8/8h): Gram negativos multirresistentes ≥3 meses.</p>
          </div>
        </div>
      </Section>

      {/* 5. Dexametasona */}
      <Section icon={<Pill className="w-4 h-4" />} title="5. Dexametasona" color="purple">
        <div className="space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-xs text-purple-900">
              <p className="font-bold mb-1">✅ Indicações</p>
              <p><strong>H. influenzae tipo b</strong> (&gt;6 sem) — comprovadamente eficaz na prevenção de perda auditiva.</p>
              <p className="mt-1"><strong>S. pneumoniae</strong> — pode ser considerada (AAP, Red Book 2012).</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-xs text-indigo-900">
              <p className="font-bold mb-1">💊 Dose e timing</p>
              <p>0,4–0,6 mg/kg/dia EV, 8/8h ou 12/12h, durante <strong>2 dias</strong>.</p>
              <p className="mt-1">Efeito máximo: 1–2h <strong>antes</strong> da 1ª dose de antibiótico. Também eficaz se simultânea.</p>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900">
            <p className="font-bold mb-1">🚫 Não usar se:</p>
            <ul className="space-y-0.5">
              {['< 6 semanas de idade', 'Meningite parcialmente tratada', 'Meningites não bacterianas ou por Gram negativos', 'Anomalias do SNC', 'Data limite de utilização ultrapassada'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0">•</span>{s}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
            <strong>Atenção:</strong> Pode mascarar a clínica, causar hemorragia GI (1–2%), febre secundária e atrasar esterilização do LCR (principalmente pneumococo).
          </p>
        </div>
      </Section>

      {/* 6. Medidas de suporte */}
      <Section icon={<Activity className="w-4 h-4" />} title="6. Medidas de Suporte e Monitorização" color="teal">
        <div className="space-y-2 text-xs">
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-3">
            <p className="font-bold text-teal-800 mb-1.5">Medidas gerais</p>
            <ul className="space-y-0.5 text-teal-900">
              {['Cabeça elevada a 30°, na linha média', 'Aportes hídricos: 2/3 das necessidades basais (SF 0,9% ± glicose, glicémia <150 mg/dl)', 'Nutrição entérica logo que possível; SNG se alteração de consciência', 'Antipiréticos em SOS'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0 text-teal-500">•</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="font-bold text-blue-800 mb-1.5">Monitorização contínua (primeiras 72h)</p>
            <ul className="space-y-0.5 text-blue-900">
              {['FC, PA, FR, SpO₂, balanço hídrico/diurese', 'Neurológico: Glasgow, pupilas, tónus, pares cranianos, convulsões, PC (<18 meses)', 'Lab: hemograma, PCR, ionograma, gasimetria, lactato; se púrpura: fibrinogénio, D-dímeros, TP, aPTT'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0 text-blue-500">•</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="font-bold text-amber-800 mb-1.5">Convulsões</p>
            <ol className="space-y-0.5 text-amber-900 list-decimal list-inside">
              <li>Diazepam 0,5 mg/kg rectal</li>
              <li>Diazepam 0,2–0,5 mg/kg EV/IO — até 3× (5 em 5 min)</li>
              <li>Fenitoína 20 mg/kg EV → manut. 5 mg/kg/dia</li>
              <li>Fenobarbital 20 mg/kg EV → manut. 5 mg/kg/dia</li>
              <li><em>Mal convulsivo:</em> Midazolam 0,15 mg/kg EV → perfusão 1–33 µg/kg/min · Levetiracetam 20–40 mg/kg EV · Tiopental 3–5 mg/kg EV</li>
            </ol>
          </div>
        </div>
      </Section>

      {/* 7. Critérios UCIP */}
      <Section icon={<ShieldAlert className="w-4 h-4" />} title="7. Critérios de Internamento em UCIP" color="red">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
          {['Choque', 'CID', 'Consciência alterada (ECG<9 ou a baixar)', 'Insuficiência respiratória', 'Hipertensão intracraniana (HTIC)', 'Convulsões complicadas/recorrentes'].map((s, i) => (
            <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-2 text-xs font-semibold text-red-800 text-center">{s}</div>
          ))}
        </div>
        <div className="space-y-2 text-xs">
          <div className="bg-red-50 border border-red-200 rounded-xl p-3">
            <p className="font-bold text-red-800 mb-1">Choque — Atuação</p>
            <ul className="space-y-0.5 text-red-900">
              {['O₂ em alta concentração', '2 acessos EV/IO', 'SF 10–20 ml/kg em 5–10 min, repetir 2–3×', 'NaCl 3%: 3–5 ml/kg em 5 min (útil se HTIC concomitante)', 'Se hipotensão após 3 bólus: EOT + Dopamina 5–10 µg/kg/min', 'Corrigir hipoglicémia: bolus Gluc 10% 5 ml/kg EV'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0 text-red-500">•</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
            <p className="font-bold text-orange-800 mb-1">Hipertensão Intracraniana — Tratamento</p>
            <ul className="space-y-0.5 text-orange-900">
              {['Cabeça 30°, linha média, manipulação mínima, tratar hipertermia/dor', 'Restrição hídrica 70% mantendo euvolémia', 'Se ECG < 9: EOT + normoventilação (PaCO₂ 35 mmHg)', 'NaCl 3%: 3–5 ml/kg em 5–10 min (repetir até Na 160 mEq/L, Osm 360 mOsm/L) → perfusão 0,1–1 ml/kg/h', 'Manitol 20%: 0,25–0,5 g/kg em 15–20 min (repetir 4/4 ou 6/6h)', 'Encravamento iminente: NaCl 3% 6,5–10 ml/kg ou Manitol 1 g/kg', 'Sedação: Midazolam 0,1–0,2 mg/kg EV → perfusão 2–10 µg/kg/min'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0 text-orange-500">•</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 8. Complicações */}
      <Section icon={<AlertTriangle className="w-4 h-4" />} title="8. Complicações e Prognóstico" color="orange">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-xs text-orange-900">
            <p className="font-bold mb-1">⚡ Complicações Agudas (&lt;72h)</p>
            <p className="text-orange-700 font-semibold mb-0.5">Sistémicas:</p>
            <p>Choque sético, CID, SIADH</p>
            <p className="text-orange-700 font-semibold mt-1 mb-0.5">Neurológicas:</p>
            <p>HIC, edema cerebral, hidrocefalia, convulsões (20–30%), paralisia de pares cranianos, AVC isquémico, trombose seios venosos</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
            <p className="font-bold mb-1">⏳ Complicações Tardias (&gt;72h)</p>
            <p className="text-amber-700 font-semibold mb-0.5">Sistémicas:</p>
            <p>Febre prolongada, artrite/pericardite imuno, anemia, eosinofilia, trombocitose</p>
            <p className="text-amber-700 font-semibold mt-1 mb-0.5">Neurológicas:</p>
            <p>Abcessos, derrame subdural (10–30%), ventriculite, hemiparésia, surdez neurossensorial, epilepsia secundária, alterações DPM/neurocomportamento</p>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-700">
          <p className="font-bold mb-1.5">📊 Prognóstico</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
            {[['Mortalidade global', '<10%'], ['N. meningitidis / Hib', '<5%'], ['Sequelas graves DPM', '10–20%'], ['Morbilidade neurocomportamental', '50%']].map(([k, v], i) => (
              <div key={i} className="flex justify-between border-b border-gray-100 py-0.5">
                <span className="text-gray-600">{k}</span>
                <span className="font-bold text-gray-800">{v}</span>
              </div>
            ))}
          </div>
          <p className="font-semibold mt-2 mb-1 text-gray-700">Fatores de mau prognóstico:</p>
          <p>Atraso diagnóstico · RN/lactente &lt;6 meses · Gram negativos ou pneumococo · Glicorráquia &lt;20 mg/dl · Glasgow &lt;13 · Convulsões tardias (&gt;72h)</p>
        </div>
      </Section>

      {/* 9. Profilaxia e notificação */}
      <Section icon={<Users className="w-4 h-4" />} title="9. Notificação, Isolamento e Profilaxia dos Contactos" color="green">
        <div className="space-y-2 text-xs">
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-green-900">
            <p className="font-bold mb-1">📢 Notificação e Isolamento</p>
            <ul className="space-y-0.5">
              {['N. meningitidis e H. influenzae: Doenças de Declaração Obrigatória', 'Meningite meningocócica: isolamento de gotículas (máscara a < 1m) nas primeiras 24h de ATB', 'Contactar Delegado de Saúde para meningite meningocócica'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0 text-green-500">•</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-emerald-900">
            <p className="font-bold mb-1">💊 Quimioprofilaxia — Meningocócica</p>
            <p className="font-semibold mb-0.5">Alto risco (profilaxia recomendada):</p>
            <p>Coabitantes, quarto compartilhado, exposição a secreções orais (beijos/utensílios) nos 7 dias prévios; infantário (≥4h contacto fechado); reanimação boca-a-boca; voo &gt;8h adjacente.</p>
            <div className="mt-2 space-y-1">
              <p><strong>Rifampicina:</strong> &lt;1M: 5 mg/kg 12/12h 2 dias · ≥1M: 10 mg/kg (máx 600 mg) 12/12h 2 dias</p>
              <p><strong>Alternativa:</strong> Ceftriaxone &lt;15A: 125 mg IM · ≥15A: 250 mg IM (dose única)</p>
              <p><strong>Grávida:</strong> Espiramicina 500 mg 6/6h VO 5 dias</p>
              <p><strong>≥18 anos:</strong> Ciprofloxacina 500 mg VO dose única</p>
            </div>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 text-teal-900">
            <p className="font-bold mb-1">💊 Quimioprofilaxia — H. influenzae</p>
            <p><strong>Rifampicina:</strong> &lt;1M: 10 mg/kg/dose 24/24h 4 dias · ≥1M: 20 mg/kg/dose (máx 600 mg) 24/24h 4 dias</p>
            <p className="font-semibold mt-1.5 mb-0.5">Indicações:</p>
            <ul className="space-y-0.5">
              {['Coabitantes se no domicílio: criança <12 meses, criança 12–48 meses não imunizada, imunodeprimido', 'Infantário com ≥2 casos de doença invasiva a Hib nos últimos 60 dias', 'Caso-índex se <2 anos ou membro de família susceptível + ATB diferente de ceftriaxone/cefotaxima'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0 text-teal-500">•</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 10. Seguimento */}
      <Section icon={<BookOpen className="w-4 h-4" />} title="10. Outros Exames e Seguimento" color="indigo">
        <div className="space-y-2 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-indigo-900">
              <p className="font-bold mb-1">TC/RM-CE — Indicações</p>
              <ul className="space-y-0.5">
                {['Agravamento do estado de consciência*', 'Sinais neurológicos focais*', 'Convulsão focal tardia (>48–72h) ou de difícil controlo*', 'Alterações persistentes do LCR', 'Recorrência ou persistência de febre', 'Suspeita de edema cerebral ou hidrocefalia', 'Meningite recorrente'].map((s, i) => (
                  <li key={i} className="flex gap-1.5"><span className="flex-shrink-0 text-indigo-500">•</span>{s}</li>
                ))}
              </ul>
              <p className="text-indigo-600 mt-1">* Também realizar EEG. RN: preferir ecografia transfontanelar.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-blue-900">
              <p className="font-bold mb-1">Repetir PL — Indicações</p>
              <ul className="space-y-0.5">
                {['Meningite neonatal* (repetir às 48h)', 'Bacilos Gram negativos* (48h)', 'Pneumococo com sensibilidade diminuída + dexametasona* (48h)', 'Má evolução clínica após 24–48h de ATB', 'Febre prolongada ou reaparecimento de febre'].map((s, i) => (
                  <li key={i} className="flex gap-1.5"><span className="flex-shrink-0 text-blue-500">•</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-purple-900">
            <p className="font-bold mb-1">Seguimento após alta</p>
            <ul className="space-y-0.5">
              {['Consulta de Infecciologia', 'Avaliação da audição — idealmente antes da alta (PEATE)', 'Avaliação do desenvolvimento neuropsicomotor', 'Apoios multidisciplinares conforme necessidade: neurologia, oftalmologia, medicina física e reabilitação, pedopsiquiatria'].map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="flex-shrink-0 text-purple-500">•</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Referências */}
      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {[
            'Prata F, Cabral M, Ventura L, et al. Meningites Agudas Bacterianas — Recomendações da Sociedade de Infecciologia Pediátrica e SCIP-SPP.',
            'Kim K. Acute bacterial meningitis in infants and children. Lancet Infect Dis 2010;10:32–42.',
            'Tunkel A, et al. Practice Guidelines for the management of bacterial meningitis. CID 2004;34:1267–1284.',
            'American Academy of Pediatrics. Red Book: 2012 Report of the Committee on Infectious Diseases. 29th ed.',
            'Fleisher GR. Textbook of Pediatric Emergency Medicine. 5th ed. Lippincott; 2006.',
            'Feigin RD, Cherry JD. Textbook of Pediatric Infectious Diseases. 6th ed. Saunders; 2009.',
          ].map((ref, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i + 1}]</span>{ref}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}