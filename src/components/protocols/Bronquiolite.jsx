import React from 'react';
import { ClipboardList, LogOut, Pill, Info } from 'lucide-react';

function Section({ icon, title, color = 'blue', children }) {
  const colors = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    cyan: 'text-cyan-600 bg-cyan-50 border-cyan-200',
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

function SeverityGrid() {
  const cols = [
    {
      label: 'LEVE', bg: 'bg-green-50 border-green-300', header: 'bg-green-500', text: 'text-green-800',
      items: ['Eupneico ou taquipneico leve', 'Sem sinais ou sinais leves de desconforto', 'Sat > 92% aa', 'Sem episódios de apneia', 'Boa aceitação alimentar', 'Sem sonolência ou irritabilidade'],
    },
    {
      label: 'MODERADO', bg: 'bg-yellow-50 border-yellow-300', header: 'bg-yellow-500', text: 'text-yellow-800',
      items: ['Taquipneia', 'Desconforto respiratório moderado (tiragem de fúrcula, intercostal e subdiafragmática)', 'Sat < 92%', 'Sem episódios de apneia', 'Dificuldade de alimentar', 'Irritabilidade leve'],
    },
    {
      label: 'GRAVE', bg: 'bg-red-50 border-red-300', header: 'bg-red-500', text: 'text-red-800',
      items: ['Taquipneia intensa', 'Desconforto respiratório importante (batimento de asa nariz, tiragem intensa, gemência)', 'Sat < 92% aa', 'Episódios de apneia', 'Incapacidade de se alimentar', 'Sonolência ou irritabilidade'],
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
      {cols.map((col) => (
        <div key={col.label} className={`rounded-xl border ${col.bg} overflow-hidden`}>
          <div className={`${col.header} text-white text-center font-bold py-1.5`}>{col.label}</div>
          <ul className="p-3 space-y-1">
            {col.items.map((item, i) => <li key={i} className={`flex gap-1 ${col.text}`}><span>•</span>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Bronquiolite() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-700 rounded-2xl p-5 text-white">
        <p className="text-cyan-200 text-xs font-semibold mb-0.5">Protocolo Clínico · Respiratório</p>
        <h1 className="text-2xl font-extrabold leading-tight">🫧 Bronquiolite</h1>
        <p className="text-cyan-200 text-xs mt-3 border-t border-cyan-400/40 pt-2">Albert Einstein (SBIBAE) · Revisado Jul/2024</p>
      </div>

      <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4 text-sm text-cyan-900 leading-relaxed">
        Acometimento inflamatório dos bronquíolos terminais — episódio de sibilância em criança <strong>&lt; 2 anos</strong>, com sinais de infecção respiratória viral e <strong>sem antecedentes de atopia</strong>. Tipicamente: pródromo gripal → esforço respiratório + sibilância entre o 3º e 5º dia.
      </div>

      <Section icon={<ClipboardList className="w-4 h-4" />} title="2. Diagnóstico e Exames" color="blue">
        <div className="space-y-3 text-sm">
          <p>Diagnóstico <strong>essencialmente clínico</strong>.</p>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">Exames diagnósticos:</p>
            <ul className="space-y-1.5 text-sm">
              {[
                'Teste rápido VSR: casos moderados a graves e a critério clínico.',
                'Teste rápido influenza: considerar em síndrome gripal.',
                'Painel de patógenos respiratórios: se internação ou necessidade de diagnóstico diferencial.',
              ].map((item, i) => <li key={i} className="flex gap-2"><span className="text-blue-400">•</span>{item}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">Outros exames:</p>
            <ul className="space-y-1.5 text-sm">
              {[
                'RX tórax: suspeita de complicações e/ou desconforto moderado/grave.',
                'Triagem infecciosa: se idade < 3 meses e febre alta ou suspeita de infecção secundária.',
              ].map((item, i) => <li key={i} className="flex gap-2"><span className="text-blue-400">•</span>{item}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section icon={<ClipboardList className="w-4 h-4" />} title="Classificação de Gravidade" color="cyan">
        <SeverityGrid />
      </Section>

      <Section icon={<LogOut className="w-4 h-4" />} title="3. Indicação de Internação" color="red">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900">
            <p className="font-bold mb-2">Critérios para internação</p>
            <ul className="space-y-1">
              {['< 3 meses de idade', 'Toxemia', 'Desidratação', 'Desconforto respiratório', 'Cianose', 'FR > 70 ipm', 'Hipoxemia (Sat < 92%)', 'Impossibilidade de observação em casa', 'Apneia', 'Prematuros', 'Imunodeficiência', 'Cardiopatia com repercussão hemodinâmica'].map((c, i) => (
                <li key={i} className="flex gap-1.5"><span>•</span>{c}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className="bg-red-100 border border-red-300 rounded-xl p-3 text-xs text-red-900">
              <p className="font-bold mb-1">UTI</p>
              <p>Insuficiência respiratória e/ou instabilidade hemodinâmica.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
              <p className="font-bold mb-2">Fatores de risco para agravamento</p>
              <ul className="space-y-1">
                {['< 3 meses', 'Prematuridade', 'Imunodeficiências', 'Doença pulmonar crônica', 'Cardiopatia hemodinâmica', 'Doenças neuromusculares', 'Dificuldade de acesso a saúde'].map((f, i) => (
                  <li key={i} className="flex gap-1.5"><span>•</span>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section icon={<Pill className="w-4 h-4" />} title="4. Tratamento" color="blue">
        <div className="space-y-3 text-sm">
          <ul className="space-y-2">
            {[
              'Hidratação VO, SOG ou EV dependendo das condições clínicas (nível de consciência, grau de desconforto, estado de hidratação).',
              'Aporte de oxigênio se Sat < 92%.',
              'Suporte ventilatório: CNAF (1,5–2 L/kg/min), VNI ou IOT quando indicado.',
              'Teste terapêutico com broncodilatador em casos graves — manter apenas se boa resposta (controverso, mas aceitável).',
              'NÃO prescrever corticoide (contraindicado).',
            ].map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>{item}</li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
            {[
              { label: 'LEVE — Alta', color: 'bg-green-50 border-green-200 text-green-900', items: ['Inalação com SF 0,9%', 'Orientar sinais de alarme: piora do desconforto, recusa alimentar', 'Orientar piora natural entre 3º–5º dia'] },
              { label: 'MODERADO — Admissão', color: 'bg-yellow-50 border-yellow-200 text-yellow-900', items: ['Monitorização periódica de sinais vitais', 'O₂ se Sat < 92%', 'Inalação com SF 0,9%', 'Avaliar desidratação e aceitação oral'] },
              { label: 'GRAVE — Emergência', color: 'bg-red-50 border-red-200 text-red-900', items: ['Monitorização contínua', 'O₂ de alto fluxo para Sat > 92%*', 'Pausa alimentar + SOG', 'Avaliar desidratação', 'Considerar broncodilatador**', 'CNAF / IOT / CPAP se piora'] },
            ].map((col, i) => (
              <div key={i} className={`rounded-xl border p-3 ${col.color}`}>
                <p className="font-bold text-xs mb-2">{col.label}</p>
                <ul className="space-y-1 text-xs">
                  {col.items.map((item, ii) => <li key={ii} className="flex gap-1"><span>•</span>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">* Máscara não reinalante. ** Suspender se ausência de resposta.</p>
        </div>
      </Section>

      <Section icon={<LogOut className="w-4 h-4" />} title="5. Critérios de Alta" color="green">
        <ul className="space-y-1.5 text-sm">
          {['Melhora da taquipneia e hipoxemia.', 'Boa aceitação por via oral.', 'Ausência de toxemia.'].map((c, i) => (
            <li key={i} className="flex gap-2"><span className="text-green-500">✓</span>{c}</li>
          ))}
        </ul>
      </Section>

      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {['Pediatrics. 2014;134(5):e1474-502.', 'Intensive Care Med. 2018 Oct 21.', 'J Pediatr (Rio J). 2017;93 Suppl 1:36-45.', 'Ferronato AE, Barreira ER. In: Gilio AE et al. Urgências e emergências em pediatria geral. Atheneu, 2015.'].map((r, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i+1}]</span>{r}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}