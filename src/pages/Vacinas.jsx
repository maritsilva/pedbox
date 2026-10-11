import React, { useState } from 'react';
import { 
  Search, 
  Syringe, 
  ShieldCheck, 
  Calendar, 
  Info, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  BookOpen, 
  Sparkles,
  HelpCircle,
  Activity,
  Flame
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import VacineDetailModal from '../components/VacineDetailModal';
import {
  VACCINE_AGES,
  VACCINE_REVIEW_DATE,
  VACCINE_SOURCES,
  filterVaccineGuide,
} from '../lib/vaccineGuide';

function SourceLinks({ page }) {
  return (
    <p className="mt-3 text-xs leading-relaxed text-slate-400">
      Referências:{' '}
      <a className="underline hover:text-brand-navy" href={VACCINE_SOURCES.pni.url} target="_blank" rel="noreferrer">
        PNI 2026
      </a>{' '}
      ·{' '}
      <a className="underline hover:text-brand-navy" href={VACCINE_SOURCES.sbim.url} target="_blank" rel="noreferrer">
        SBIm 2026/2027
      </a>{' '}
      · Manual HU Pediatria, p. {page}.
    </p>
  );
}

export default function Vacinas() {
  const [network, setNetwork] = useState('compare');
  const [query, setQuery] = useState('');
  const [age, setAge] = useState('all');
  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const [activeGuideTab, setActiveGuideTab] = useState('rules');

  const vaccines = filterVaccineGuide({ network, query, age });

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-6">
      {/* HEADER WITH SCHEME TOGGLE (PNI vs SBIm vs Comparar) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
            Esquema vacinal pediátrico
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Calendário oficial PNI 2026 e recomendações complementares SBIm 2026/2027. Clique em qualquer vacina para abrir a ficha clínica completa.
          </p>
        </div>

        {/* Network Toggle Pills */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start sm:self-auto shrink-0">
          {[
            ['compare', 'Comparar PNI / SBIm'],
            ['pni', 'PNI (SUS)'],
            ['sbim', 'SBIm (Privado)'],
          ].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setNetwork(val)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                network === val
                  ? 'bg-white text-brand-navy shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* HORIZONTAL AGE MILESTONES TIMELINE */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand-teal" />
            <span>Marco do Calendário Pediátrico</span>
          </span>
          {age !== 'all' && (
            <button
              onClick={() => setAge('all')}
              className="text-xs font-semibold text-brand-teal hover:underline"
            >
              Ver todas as idades
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <button
            onClick={() => setAge('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
              age === 'all'
                ? 'bg-brand-navy text-white shadow-xs'
                : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Todas as idades
          </button>
          {VACCINE_AGES.map(([val, label]) => (
            <button
              key={val}
              onClick={() => setAge(String(val))}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                String(age) === String(val)
                  ? 'bg-brand-navy text-white shadow-xs font-bold'
                  : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* SEARCH BAR & COUNTER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar por nome de vacina, doença ou tipo..."
            className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Toque no cartão para abrir a ficha clínica</span>
          </span>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {vaccines.length} {vaccines.length === 1 ? 'imunobiológico' : 'imunobiológicos'}
          </p>
        </div>
      </div>

      {/* TWO COLUMN GRID: VACCINES CARDS ON LEFT, CLINICAL ADVISORIES ON RIGHT */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* VACCINES LIST (Left 8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {vaccines.map((v) => (
              <article
                key={v.id}
                onClick={() => setSelectedVaccine(v)}
                className="group bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:border-brand-teal hover:shadow-md transition-all flex flex-col justify-between cursor-pointer relative"
                data-testid={`vaccine-${v.id}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2.5 mb-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Syringe className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-bold text-brand-navy leading-tight group-hover:text-brand-teal transition-colors">
                          {v.name}
                        </h2>
                        <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
                          {v.category || 'Imunobiológico'}
                        </span>
                      </div>
                    </div>
                    <span className="text-brand-teal opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Schemes Comparison */}
                  <div className="mt-3 space-y-2 text-xs">
                    {network !== 'sbim' && (
                      <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-slate-500 block mb-0.5">
                          PNI (Público)
                        </span>
                        <p className="text-slate-700 leading-snug">{v.pni}</p>
                      </div>
                    )}
                    {network !== 'pni' && (
                      <div className="rounded-xl bg-brand-sky/40 p-2.5 border border-brand-sky">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-brand-teal block mb-0.5">
                          SBIm (Privado)
                        </span>
                        <p className="text-slate-800 leading-snug">{v.sbim}</p>
                      </div>
                    )}
                  </div>

                  {/* Brief Note preview */}
                  {v.note && (
                    <p className="mt-2 text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {v.note}
                    </p>
                  )}
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-brand-teal group-hover:underline flex items-center gap-1">
                    Ver ficha clínica completa
                  </span>
                  <span className="text-slate-400 text-[10px]">Manual p. {v.readingPage}</span>
                </div>
              </article>
            ))}
          </div>

          {vaccines.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-700">
                Nenhuma vacina encontrada para estes critérios.
              </p>
              <button
                onClick={() => {
                  setAge('all');
                  setQuery('');
                  setNetwork('compare');
                }}
                className="text-xs font-bold text-brand-teal hover:underline"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: CLINICAL ESSENTIALS (Coisas importantes sobre vacinas) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Main Card: Pontos Chave & Regras de Ouro */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>Condutas & Regras de Ouro</span>
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Fundamentos práticos para a sala de vacina e plantão pediátrico.
              </p>
            </div>

            {/* Quick Segmented Nav */}
            <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl text-[11px] font-bold">
              <button
                onClick={() => setActiveGuideTab('rules')}
                className={`py-1.5 rounded-lg transition-all text-center ${
                  activeGuideTab === 'rules'
                    ? 'bg-white text-brand-navy shadow-2xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Regras
              </button>
              <button
                onClick={() => setActiveGuideTab('intervals')}
                className={`py-1.5 rounded-lg transition-all text-center ${
                  activeGuideTab === 'intervals'
                    ? 'bg-white text-brand-navy shadow-2xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Intervalos
              </button>
              <button
                onClick={() => setActiveGuideTab('urgencies')}
                className={`py-1.5 rounded-lg transition-all text-center ${
                  activeGuideTab === 'urgencies'
                    ? 'bg-white text-brand-navy shadow-2xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Urgências
              </button>
            </div>

            {/* Tab: Regras de Ouro */}
            {activeGuideTab === 'rules' && (
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed divide-y divide-slate-100">
                <li className="pt-1.5">
                  <strong className="text-slate-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dose dada é dose contada:</span>
                  </strong>
                  Atrasos vacinais NUNCA exigem reiniciar esquema. Retome de onde parou respeitando os intervalos mínimos.
                </li>
                <li className="pt-2">
                  <strong className="text-slate-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Prematuros vacinam por idade cronológica:</span>
                  </strong>
                  Quando clinicamente estáveis, vacinar pela idade cronológica. A única exceção é a <strong>BCG</strong>, que aguarda peso ≥ 2.000 g.
                </li>
                <li className="pt-2">
                  <strong className="text-slate-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cuidado com a antecipação:</span>
                  </strong>
                  Doses aplicadas antes do intervalo técnico mínimo ou antes da idade mínima podem ser inválidas e exigir repetição.
                </li>
                <li className="pt-2">
                  <strong className="text-slate-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Falsas contraindicações não devem atrasar:</span>
                  </strong>
                  Resfriado sem febre alta, uso de antibiótico, alergia alimentar, alergia a ovo (para influenza e SCR) e corticoide inalatório NÃO contraindicam vacinação.
                </li>
              </ul>
            )}

            {/* Tab: Intervalos entre Vacinas Vivas */}
            {activeGuideTab === 'intervals' && (
              <div className="space-y-3 text-xs">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-1 text-amber-900">
                  <strong className="text-amber-800 block text-[11px] uppercase tracking-wide">
                    Vacinas Vivas Injetáveis (SCR, Varicela, Febre Amarela)
                  </strong>
                  <p className="leading-relaxed">
                    Aplicar no <strong>mesmo dia</strong> OU respeitar intervalo mínimo de <strong>30 dias</strong> entre elas.
                  </p>
                </div>

                <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 space-y-1 text-rose-900">
                  <strong className="text-rose-800 block text-[11px] uppercase tracking-wide">
                    Febre Amarela + SCR em &lt; 2 anos
                  </strong>
                  <p className="leading-relaxed">
                    Na rotina brasileira, <strong>preferir intervalo de 30 dias</strong> entre Febre Amarela e SCR em menores de 2 anos para evitar interferência na soroconversão.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1 text-slate-700">
                  <strong className="text-slate-800 block text-[11px] uppercase tracking-wide">
                    Vacinas Não Vivas e Rotavírus Oral
                  </strong>
                  <p className="leading-relaxed">
                    Vacinas inativadas e o Rotavírus oral <strong>não exigem intervalo obrigatório</strong> com nenhuma outra vacina.
                  </p>
                </div>
              </div>
            )}

            {/* Tab: Urgências e Pós-Exposição */}
            {activeGuideTab === 'urgencies' && (
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed divide-y divide-slate-100">
                <li className="pt-1">
                  <strong className="text-slate-800 block font-semibold text-rose-700">
                    Mãe HBsAg Positiva:
                  </strong>
                  Administrar Vacina Hep B + Imunoglobulina (IGHB) em músculos diferentes nas primeiras 12h de vida (máximo 7 dias).
                </li>
                <li className="pt-2">
                  <strong className="text-slate-800 block font-semibold text-amber-800">
                    EHH (Hipotônico-Hiporresponsivo) pós-Penta:
                  </strong>
                  Ocorre em até 48h; benigno e transitório. Trocar doses seguintes por formulação acelular (DTPa) no CRIE.
                </li>
                <li className="pt-2">
                  <strong className="text-slate-800 block font-semibold text-rose-800">
                    Encefalopatia em até 7 dias pós-vacina:
                  </strong>
                  Contraindicação absoluta e permanente ao componente pertussis (inclusive acelular); continuar com DT infantil.
                </li>
                <li className="pt-2">
                  <strong className="text-slate-800 block font-semibold text-slate-800">
                    Lactante vacinada para Febre Amarela:
                  </strong>
                  Se o bebê tem &lt; 6 meses, suspender aleitamento por 10 dias após a dose para evitar encefalite viral.
                </li>
                <li className="pt-2">
                  <strong className="text-slate-800 block font-semibold text-slate-800">
                    Corticoides em dose imunossupressora:
                  </strong>
                  ≥ 2 mg/kg/dia ou ≥ 20 mg/dia por ≥ 14 dias: aguardar 30 dias após suspensão antes de administrar vacinas vivas.
                </li>
              </ul>
            )}
          </div>

          {/* Profilaxia Pós-Exposição Tétano (Mini-Matriz) */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 space-y-2.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                <span>Profilaxia de Tétano pós-ferimento</span>
              </span>
              <span className="text-[10px] text-slate-400">Manual p. 40</span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-600 leading-snug">
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-slate-700 block">Esquema incerto ou &lt; 3 doses:</span>
                Vacinar imediatamente; em ferimento de alto risco, associar imunoglobulina antitetânica (SAT ou IGHAT).
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-slate-700 block">≥ 3 doses (última há 5 a 10 anos):</span>
                Ferimento limpo não requer reforço; ferimento de risco requer reforço de toxoide (dT/dTpa).
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-slate-700 block">≥ 3 doses (última há mais de 10 anos):</span>
                Reforço vacinal indicado para qualquer tipo de ferimento.
              </div>
            </div>
          </div>

          {/* Review Banner */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 text-xs space-y-1 text-blue-900">
            <div className="flex items-center gap-1 font-bold text-blue-800">
              <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Normas 2026/2027</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Revisão atualizada com base na transição da VPC20 no PNI (Notas Técnicas 52/64), esquema exclusivo de VIP aos 4 anos, introdução de vacina materna/monoclonais para VSR e atualização da dengue com Qdenga.
            </p>
          </div>
        </div>
      </div>

      {/* MODAL DETALHE DA VACINA */}
      <VacineDetailModal
        vacina={selectedVaccine}
        isOpen={Boolean(selectedVaccine)}
        onClose={() => setSelectedVaccine(null)}
      />
    </div>
  );
}
