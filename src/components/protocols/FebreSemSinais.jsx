import React from 'react';
import { ClipboardList, LogOut, Pill, Info } from 'lucide-react';

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

export default function FebreSemSinais() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-red-500 to-rose-700 rounded-2xl p-5 text-white">
        <p className="text-red-200 text-xs font-semibold mb-0.5">Protocolo Clínico · Infectologia Pediátrica</p>
        <h1 className="text-2xl font-extrabold leading-tight">🌡️ Febre sem Sinais Localizatórios</h1>
        <p className="text-red-200 text-xs mt-3 border-t border-red-400/40 pt-2">Albert Einstein (SBIBAE) · Revisado Jun/2025</p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-900 leading-relaxed">
        <strong>Definição:</strong> Temperatura axilar &gt; 38°C há menos de 7 dias, na ausência de sintomas clínicos, com exame físico normal, em criança hígida e em bom estado geral até <strong>36 meses (3 anos)</strong>.
      </div>

      <Section icon={<ClipboardList className="w-4 h-4" />} title="1. Diagnóstico e Exames" color="blue">
        <div className="space-y-4 text-sm">
          {[
            {
              label: 'Recém-nascidos',
              items: ['HMG, HMC, PCR, RX tórax', 'Urina I e urocultura (sondagem vesical)', 'Líquor: quimiocitológico, cultura, látex, PCR para herpes e enterovírus (se citológico alterado)', 'Pesquisa de vírus respiratórios (se disponível)', 'Procalcitonina (PCT): considerar conforme julgamento clínico'],
            },
            {
              label: 'Lactentes 1–3 meses',
              items: ['HMG, HMC, PCR', 'Urina I e UROC (sondagem vesical)', 'Ponderar LCR com quimiocitológico, látex e cultura', 'Ponderar RX tórax', 'Pesquisa de vírus respiratórios, PCT'],
            },
            {
              label: 'Crianças 3–36 meses, febre ≥ 39°C, VACINAÇÃO COMPLETA',
              items: ['Urina I e UROC (sondagem ou jato médio)', 'Pesquisa de vírus respiratórios (se disponível)'],
            },
            {
              label: 'Crianças 3–36 meses, febre ≥ 39°C, SEM vacinação completa',
              items: ['Urina I e UROC', 'HMG, HMC', 'Pesquisa de vírus respiratórios'],
            },
          ].map((group, i) => (
            <div key={i}>
              <p className="text-xs font-bold text-blue-700 mb-1.5">{group.label}</p>
              <ul className="space-y-1 pl-2">
                {group.items.map((item, ii) => (
                  <li key={ii} className="flex gap-2 text-xs"><span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<ClipboardList className="w-4 h-4" />} title="2. Identificação de Risco para Doença Bacteriana Grave" color="amber">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs font-bold text-amber-700 mb-2">História de Risco</p>
            <ul className="space-y-1 text-xs">
              {['Recém-nascido prematuro', 'Imunocomprometido', 'Doenças de base', 'Contato com doença meningocócica'].map((r, i) => (
                <li key={i} className="flex gap-2"><span className="text-amber-400">•</span>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-amber-700 mb-2">Laboratório Alterado</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex gap-2"><span className="text-amber-400">•</span>Leucócitos &gt; 20.000/mm³ e/ou neutrófilos &gt; 10.000/mm³</li>
              <li className="flex gap-2"><span className="text-amber-400">•</span>Urina I alterada: leucocitúria &gt; 10.000/mL, esterase+, nitrito+ ou bacteriúria</li>
              <li className="flex gap-2"><span className="text-amber-400">•</span>PCT &gt; 0,3 ng/mL (alta sensibilidade para meningite e bacteremia)</li>
              <li className="flex gap-2"><span className="text-amber-400">•</span>PCR &gt; 5 mg/L</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section icon={<LogOut className="w-4 h-4" />} title="3. Indicação de Internação" color="red">
        <div className="space-y-2 text-sm">
          <div className="bg-red-50 border border-red-200 rounded-xl p-3">
            <p className="text-xs font-bold text-red-700 mb-1">Critérios para internação</p>
            <ul className="text-xs text-red-800 space-y-0.5">
              <li>• Recém-nascidos</li>
              <li>• 1–3 meses com exames alterados</li>
              <li>• 3–36 meses com queda do estado geral</li>
            </ul>
          </div>
          <div className="bg-red-100 border border-red-300 rounded-xl p-3">
            <p className="text-xs font-bold text-red-700 mb-1">Critérios para UTI</p>
            <p className="text-xs text-red-800">Sinais de sepse em todas as faixas etárias.</p>
          </div>
        </div>
      </Section>

      <Section icon={<Pill className="w-4 h-4" />} title="4. Tratamento" color="blue">
        <div className="space-y-3 text-sm">
          {[
            {
              label: 'Recém-nascido',
              color: 'bg-blue-50 border-blue-200 text-blue-900',
              items: [
                'Cefotaxima EV 150 mg/kg/dia ou Ceftriaxona EV 100 mg/kg/dia',
                'Ampicilina EV 200 mg/kg/dia se LCR alterado',
                'Aciclovir EV 10 mg/kg/dose 8/8h se suspeita de herpes',
              ],
            },
            {
              label: '1–3 meses com exames alterados',
              color: 'bg-indigo-50 border-indigo-200 text-indigo-900',
              items: [
                'Ceftriaxona EV 50–100 mg/kg/dia',
                'Ampicilina EV 200 mg/kg/dia se LCR alterado',
              ],
            },
            {
              label: '3–36 meses com exames alterados',
              color: 'bg-cyan-50 border-cyan-200 text-cyan-900',
              items: [
                '1ª opção: Acetilcefuroxima VO 30 mg/kg/dia',
                '2ª opção: Amoxicilina + Clavulanato VO 50 mg/kg/dia',
                'Recusa VO: Ceftriaxona IM 50 mg/kg/dia',
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

      <Section icon={<LogOut className="w-4 h-4" />} title="6. Critérios de Alta" color="green">
        <div className="space-y-2 text-xs">
          {[
            { label: 'Recém-nascidos', text: 'Culturas negativas, afebril há 24h, bom estado geral e boa aceitação da dieta oral.' },
            { label: '2–3 meses', text: 'Exames em melhora, bom estado geral e boa aceitação da dieta oral.' },
            { label: '3–36 meses', text: 'Bom estado geral e boa aceitação da dieta oral.' },
          ].map((c, i) => (
            <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-3 text-green-900">
              <span className="font-bold">{c.label}: </span>{c.text}
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {['Martinez E et al. Pediatr Infect Dis J. 2015;34(5):494-8.', 'Gomez B et al. Pediatrics 2016;138(2):e20154381.', 'Schvarstsman C et al. Pronto-Socorro ICr-HCFMUSP. 3ª ed. Manole, 2018.'].map((r, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i+1}]</span>{r}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}