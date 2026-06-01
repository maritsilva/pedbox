import React from 'react';
import { AlertTriangle, Activity, Pill, ClipboardList, LogOut, Info } from 'lucide-react';

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
    </div>
  );
}

export default function Laringite() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-5 text-white">
        <p className="text-blue-200 text-xs font-semibold mb-0.5">Protocolo Clínico · Respiratório</p>
        <h1 className="text-2xl font-extrabold leading-tight">🗣️ Laringite (Crupe)</h1>
        <p className="text-blue-100 text-sm mt-0.5">em Crianças e Adolescentes</p>
        <p className="text-blue-200 text-xs mt-3 border-t border-blue-400/40 pt-2">Albert Einstein (Pediatria) · Atualizado Jun/2024</p>
      </div>

      {/* Definition */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-900 leading-relaxed">
        A <strong>laringite aguda (crupe)</strong> é uma síndrome de obstrução de vias aéreas superiores causada principalmente por vírus (parainfluenza em > 75% dos casos). Afeta crianças entre 6 meses e 3 anos, com pico aos 2 anos. Apresenta-se com a tríade clássica: <strong>tosse "de cão"</strong>, <strong>estridor inspiratório</strong> e <strong>rouquidão</strong>. É uma doença autolimitada, mas requer avaliação de gravidade para estratificar o tratamento.
      </div>

      {/* 1. Severity */}
      <Section icon={<Activity className="w-4 h-4" />} title="1. Classificação de Gravidade (Escore de Westley)" color="amber">
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-4">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-amber-600">
                <th className="px-3 py-2 text-left text-white font-bold">Parâmetro</th>
                <th className="px-3 py-2 text-center text-white font-bold">0</th>
                <th className="px-3 py-2 text-center text-white font-bold">1</th>
                <th className="px-3 py-2 text-center text-white font-bold">2</th>
                <th className="px-3 py-2 text-center text-white font-bold">3</th>
                <th className="px-3 py-2 text-center text-white font-bold">4</th>
                <th className="px-3 py-2 text-center text-white font-bold">5</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="bg-white">
                <td className="px-3 py-2 font-semibold text-foreground">Nível de consciência</td>
                <td className="px-3 py-2 text-center">Normal</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center font-bold">Alterado</td>
              </tr>
              <tr className="bg-amber-50">
                <td className="px-3 py-2 font-semibold text-foreground">Estridor</td>
                <td className="px-3 py-2 text-center">Ausente</td>
                <td className="px-3 py-2 text-center">Com agitação</td>
                <td className="px-3 py-2 text-center">Em repouso</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
              </tr>
              <tr className="bg-white">
                <td className="px-3 py-2 font-semibold text-foreground">Entrada de ar</td>
                <td className="px-3 py-2 text-center">Normal</td>
                <td className="px-3 py-2 text-center">Diminuída</td>
                <td className="px-3 py-2 text-center font-bold">Muito diminuída</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
              </tr>
              <tr className="bg-amber-50">
                <td className="px-3 py-2 font-semibold text-foreground">Tiragem</td>
                <td className="px-3 py-2 text-center">Ausente</td>
                <td className="px-3 py-2 text-center">Leve</td>
                <td className="px-3 py-2 text-center">Moderada</td>
                <td className="px-3 py-2 text-center font-bold">Grave</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
              </tr>
              <tr className="bg-white">
                <td className="px-3 py-2 font-semibold text-foreground">Cianose</td>
                <td className="px-3 py-2 text-center">Ausente</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">—</td>
                <td className="px-3 py-2 text-center">Com agitação</td>
                <td className="px-3 py-2 text-center font-bold">Em repouso</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
          <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center"><p className="font-bold text-green-800">0-2</p><p className="text-green-700">Leve</p></div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-center"><p className="font-bold text-yellow-800">3-5</p><p className="text-yellow-700">Moderada</p></div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 text-center"><p className="font-bold text-orange-800">6-11</p><p className="text-orange-700">Grave</p></div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-center"><p className="font-bold text-red-800">≥ 12</p><p className="text-red-700">Ameaça à vida</p></div>
        </div>
      </Section>

      {/* 2. Diagnosis */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="2. Diagnóstico" color="blue">
        <p className="text-sm text-foreground mb-3">O diagnóstico é <strong>essencialmente clínico</strong>. Exames complementares não são necessários na maioria dos casos.</p>
        <p className="text-xs font-semibold text-muted-foreground mb-2">Apresentação clínica típica:</p>
        <ul className="space-y-1 mb-4 text-sm">
          {['Pródromo de 1-3 dias com sintomas de infecção respiratória superior',
            'Início súbito, frequentemente à noite',
            'Tosse "de cão" ou "metálica" — patognomônica',
            'Estridor inspiratório (agrava-se com agitação)',
            'Rouquidão/disfonia'].map((item, i) =>
            <li key={i} className="flex gap-2"><span className="text-blue-400 flex-shrink-0">•</span>{item}</li>
          )}
        </ul>
        <p className="text-xs font-semibold text-muted-foreground mb-2">Diagnósticos diferenciais importantes:</p>
        <ul className="space-y-1 text-xs text-muted-foreground">
          {['Epiglotite — febre alta, ausência de tosse "de cão", disfagia intensa, aspecto tóxico',
            'Traqueíte bacteriana — febre alta, aspecto tóxico, má resposta ao tratamento',
            'Corpo estranho — início súbito, episódio de engasgamento, sem pródromo viral'].map((item, i) =>
            <li key={i} className="flex gap-2"><span className="flex-shrink-0">•</span>{item}</li>
          )}
        </ul>
      </Section>

      {/* 3. Treatment */}
      <Section icon={<Pill className="w-4 h-4" />} title="3. Tratamento Escalonado" color="green">
        <div className="space-y-4">
          {/* Leve/Moderada */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h4 className="font-bold text-green-900 text-sm mb-2">🟢 Laringite Leve/Moderada (Westley 0-5)</h4>
            <div className="space-y-2 text-sm text-green-900">
              <p><strong>Dexametasona oral:</strong> 0,6 mg/kg (máx 10-12 mg) — dose única</p>
              <p><strong>Alternativas:</strong> Prednisolona 1-2 mg/kg VO ou Budesonida inalatória 2 mg (8 mL)</p>
              <p className="text-xs text-green-800 mt-2">⏱️ Observação mínima de 2 horas após corticoides</p>
            </div>
          </div>

          {/* Grave */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h4 className="font-bold text-red-900 text-sm mb-2">🔴 Laringite Grave (Westley ≥ 6)</h4>
            <div className="space-y-2 text-sm text-red-900">
              <p><strong>1. Dexametasona:</strong> 0,6 mg/kg (máx 10-12 mg) — VO/IM/EV</p>
              <p><strong>2. Adrenalina inalatória:</strong> 0,5 mL/kg da solução 1:1000 (máx. 5 mL)</p>
              <p className="text-xs text-red-800 mt-2">⏱️ Observação obrigatória 2-4 horas (risco de efeito rebote)</p>
              <p className="text-xs text-red-700 mt-1">⚠️ Pode repetir adrenalina a cada 20-30 min se necessário</p>
            </div>
          </div>

          {/* Tabela de medicações */}
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-3 py-2 text-left font-bold">Droga</th>
                  <th className="px-3 py-2 text-left font-bold">Dose</th>
                  <th className="px-3 py-2 text-left font-bold">Via</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-white"><td className="px-3 py-2 font-semibold">Dexametasona</td><td className="px-3 py-2">0,6 mg/kg (máx 10 mg)</td><td className="px-3 py-2">VO/IM/EV</td></tr>
                <tr className="bg-blue-50"><td className="px-3 py-2 font-semibold">Budesonida inalatória</td><td className="px-3 py-2">2 mg (8 mL)</td><td className="px-3 py-2">Inalação</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-semibold">Prednisolona</td><td className="px-3 py-2">1-2 mg/kg/dia por 3 dias</td><td className="px-3 py-2">VO</td></tr>
                <tr className="bg-blue-50"><td className="px-3 py-2 font-semibold">Adrenalina 1:1000</td><td className="px-3 py-2">0,5 mL/kg (máx 5 mL)</td><td className="px-3 py-2">Inalação</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* 4. Hospitalization */}
      <Section icon={<LogOut className="w-4 h-4" />} title="4. Critérios de Internação" color="red">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Internação em Enfermaria',
              items: ['Laringite moderada com pouca resposta ao tratamento inicial',
                'Laringite grave com melhora parcial após medidas iniciais',
                'Laringite grave com melhora parcial após 4h de observação'],
              color: 'border-amber-200 bg-amber-50 text-amber-900'
            },
            {
              title: 'Internação em UTI',
              items: ['Laringite grave sem resposta às medidas iniciais',
                'Retorno ao estado anterior após tratamento',
                'Desconforto respiratório grave com cianose',
                'Hipoxemia persistente (SatO₂ < 92%)'],
              color: 'border-red-300 bg-red-50 text-red-900'
            }
          ].map((group, i) =>
            <div key={i} className={`rounded-xl border p-3 ${group.color}`}>
              <p className="font-bold text-sm mb-2">{group.title}</p>
              <ul className="space-y-1">
                {group.items.map((item, j) =>
                  <li key={j} className="flex gap-2 text-xs"><span className="flex-shrink-0">•</span>{item}</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* 5. Discharge and Follow-up */}
      <Section icon={<Info className="w-4 h-4" />} title="5. Critérios de Alta e Acompanhamento" color="purple">
        <div className="space-y-3 text-sm">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="font-bold text-green-900 text-xs mb-2 uppercase">Critérios para Alta:</p>
            <ul className="space-y-1 text-xs text-green-900">
              {['Sem estridor em repouso',
                'Saturação de oxigênio normal',
                'Boa troca de ar',
                'Nível normal de consciência',
                'Boa tolerância oral'].map((item, i) =>
                <li key={i} className="flex gap-2"><span className="flex-shrink-0">✓</span>{item}</li>
              )}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="font-bold text-red-900 text-xs mb-2 uppercase">Sinais de Retorno ao Hospital:</p>
            <ul className="space-y-1 text-xs text-red-900">
              {['Piora da tosse rouca',
                'Falta de ar / estridor em repouso',
                'Prostração ou estado mental alterado',
                'Febre > 72 horas'].map((item, i) =>
                <li key={i} className="flex gap-2"><span className="flex-shrink-0">⚠️</span>{item}</li>
              )}
            </ul>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            <strong>Laringite recorrente (≥ 3 episódios):</strong> Referenciar para Otorrinolaringologia Pediátrica para investigar anomalias anatômicas e doença do refluxo gastroesofágico.
          </p>
        </div>
      </Section>

      {/* References */}
      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {['Albert Einstein — Protocolo de Laringite em Crianças e Adolescentes (Jun/2024)',
            'Croup: Diagnosis and Management. Smith DK, McDermott AJ, Sullivan JF. Am Fam Physician. 2018;97(9):575-580',
            'Croup (Laryngotracheobronchitis). Cherry JD. N Engl J Med. 2008;358(4):384-391',
            'PALS — American Heart Association',
            'Sociedade Brasileira de Pediatria'].map((ref, i) =>
            <li key={i} className="flex gap-2"><span className="font-bold flex-shrink-0">[{i + 1}]</span>{ref}</li>
          )}
        </ul>
      </Section>
    </div>
  );
}