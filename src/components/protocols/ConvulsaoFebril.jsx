import React from 'react';
import { ClipboardList, LogOut, Pill, Info, AlertTriangle } from 'lucide-react';

function Section({ icon, title, color = 'blue', children }) {
  const colors = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
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

export default function ConvulsaoFebril() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-5 text-white">
        <p className="text-purple-200 text-xs font-semibold mb-0.5">Protocolo Clínico · Neurologia</p>
        <h1 className="text-2xl font-extrabold leading-tight">⚡ Convulsão Febril Benigna</h1>
        <p className="text-purple-200 text-xs mt-3 border-t border-purple-400/40 pt-2">Albert Einstein (SBIBAE) · Revisado Jun/2025</p>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 text-sm text-purple-900 leading-relaxed">
        Crise convulsiva nas primeiras 24h de febre (≥ 38°C) em crianças de <strong>6 a 60 meses</strong>, sem evidência de infecção do SNC, sem alteração metabólica e sem história prévia de crise afebril.
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { label: 'Simples', desc: 'Tônico-clônica generalizada, duração < 15 min, recuperação espontânea e completa.' },
            { label: 'Complexa', desc: 'Duração > 15 min, pós-ictal prolongado ou recorrência em < 24h.' },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-xl border border-purple-200 p-3">
              <p className="font-bold text-xs text-purple-700 mb-1">{t.label}</p>
              <p className="text-xs">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Section icon={<ClipboardList className="w-4 h-4" />} title="1. Diagnóstico" color="blue">
        <p className="text-sm font-semibold mb-2">Diagnóstico clínico. Em geral não requer investigação secundária.</p>
        <p className="text-xs font-semibold text-muted-foreground mb-2 mt-3">Indicação de outros exames:</p>
        <ul className="space-y-2">
          {[
            { exam: 'Punção liquórica', note: 'Indicada quando história ou exame físico sugirem infecção do SNC; opção em crianças 6–12 meses sem vacinação completa contra H. influenzae ou pneumococos; ou em uso de antimicrobianos.' },
            { exam: 'EEG', note: 'NÃO deve ser realizado em crianças neurologicamente normais.' },
            { exam: 'Eletrólitos séricos', note: 'NÃO devem ser realizados rotineiramente.' },
            { exam: 'Hemograma', note: 'NÃO deve ser realizado rotineiramente.' },
            { exam: 'Neuroimagem', note: 'NÃO deve ser realizado rotineiramente.' },
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
              <span><strong>{item.exam}:</strong> {item.note}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
        <p className="text-xs font-bold text-blue-700 mb-2 uppercase">Características da Convulsão Febril Benigna</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {[
            'Idade: 6 meses a 5 anos',
            'Crise tônico-clônica generalizada',
            'Duração até 15 minutos',
            'Retorno do nível de consciência após crise',
            'Febre documentada ≥ 38°C',
            'Única crise em 24 horas',
            'Ausência de doença neurológica prévia',
          ].map((c, i) => (
            <div key={i} className="flex gap-2 text-xs text-blue-800">
              <span className="text-blue-400 flex-shrink-0">✓</span>{c}
            </div>
          ))}
        </div>
      </div>

      <Section icon={<AlertTriangle className="w-4 h-4" />} title="Fatores de Maior Risco de Recorrência" color="amber">
        <ul className="space-y-1.5">
          {[
            'Criança menor de 18 meses',
            'Temperatura < 39°C na primeira crise',
            'Intervalo < 1 hora entre febre e convulsão',
            'Parentes de 1º grau com história de convulsão febril',
          ].map((f, i) => (
            <li key={i} className="flex gap-2 text-sm text-foreground">
              <span className="text-amber-400 flex-shrink-0 mt-0.5">•</span>{f}
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={<LogOut className="w-4 h-4" />} title="3. Internação e Critérios de Alta" color="red">
        <div className="space-y-3">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm text-yellow-900">
            <p className="font-bold text-xs mb-1">Critérios para internação</p>
            <p className="text-xs">A maioria das crianças retorna ao nível normal de consciência em até 1 hora. Esse período deve ser usado para história clínica detalhada.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-900">
            <p className="font-bold text-xs mb-1">Critérios para UTI</p>
            <p className="text-xs">Estado de mal epiléptico.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-900">
            <p className="font-bold text-xs mb-1">Critérios de alta</p>
            <p className="text-xs">Criança desperta, ativa, sem déficit neurológico.</p>
          </div>
        </div>
      </Section>

      <Section icon={<Pill className="w-4 h-4" />} title="4. Tratamento" color="blue">
        <ul className="space-y-2 text-sm">
          {[
            'Atendimento direcionado à identificação da causa da febre, com atenção especial ao diagnóstico de meningite.',
            'Na crise: seguir a diretriz de convulsão e estado de mal para administração de anticonvulsivantes na emergência.',
            'Não há recomendação de terapêutica anticonvulsivante contínua ou intermitente em crianças com convulsões febris benignas.',
            'Acompanhamento ambulatorial com pediatra para monitorar recorrências.',
          ].map((item, i) => (
            <li key={i} className="flex gap-2"><span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>{item}</li>
          ))}
        </ul>
      </Section>

      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {['Pediatr Emer Care 2012;28:316-321', 'Pediatrics 2011;127:389-94', 'Pediatrics 2008;121:1281-1286', 'Front Pediatr 2022;9:801321'].map((r, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i+1}]</span>{r}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}