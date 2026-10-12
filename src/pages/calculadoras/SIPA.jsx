import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  Activity,
  RefreshCw,
  BookOpen,
  Info,
  List as ListIcon,
} from 'lucide-react';

const AGE_GROUPS = [
  { label: '1 a 6 anos', min: 1, max: 7, cutoff: 1.22, desc: 'Ponto de corte elevado devido à maior frequência cardíaca basal nesta faixa' },
  { label: '7 a 12 anos', min: 7, max: 13, cutoff: 1.0, desc: 'Relação 1:1 entre FC e PAS como limiar de suspeição' },
  { label: '13 a 17 anos', min: 13, max: 18, cutoff: 0.9, desc: 'Padrão próximo ao adulto, tolerância menor a taquicardia desproporcional' },
];

function getAgeGroup(age) {
  return AGE_GROUPS.find((g) => age >= g.min && age < g.max);
}

export default function SIPA() {
  const [idade, setIdade] = useState('');
  const [fc, setFc] = useState('');
  const [pas, setPas] = useState('');

  const idadeNum = parseFloat(idade);
  const fcNum = parseFloat(fc);
  const pasNum = parseFloat(pas);

  const canCalc =
    !isNaN(idadeNum) &&
    !isNaN(fcNum) &&
    !isNaN(pasNum) &&
    pasNum > 0 &&
    fcNum > 0 &&
    idadeNum >= 1 &&
    idadeNum < 18 &&
    fcNum <= 300 &&
    pasNum <= 300;

  const sipa = canCalc ? fcNum / pasNum : null;
  const ageGroup = canCalc ? getAgeGroup(idadeNum) : null;
  const isElevated = sipa !== null && ageGroup ? sipa > ageGroup.cutoff : false;

  const handleReset = () => {
    setIdade('');
    setFc('');
    setPas('');
  };

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-6 pb-14">
      {/* BREADCRUMB */}
      <div>
        <Link
          to="/calculadoras"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Calculadoras</span>
        </Link>
      </div>

      {/* TOP HERO BANNER */}
      <section className="relative rounded-3xl bg-gradient-to-r from-[#0C385C] via-[#104870] to-[#145684] text-white p-6 sm:p-8 shadow-md overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 right-32 w-48 h-48 rounded-full bg-brand-teal/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white/90 text-[11px] font-extrabold uppercase tracking-wider">
              Score de Choque • Trauma Pediátrico
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
              SIPA — Shock Index Pediátrico
            </h1>
            <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
              Shock Index Pediatric Age-adjusted — Detecção precoce de choque hemorrágico oculto antes da hipotensão arterial em vítimas de trauma pediátrico
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 border-t lg:border-t-0 lg:border-l border-white/20 pt-4 lg:pt-0 lg:pl-6">
            <div className="space-y-0.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/70 block">
                ÍNDICE DE CHOQUE
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                  {sipa !== null ? sipa.toFixed(2) : '—'}
                </span>
                <span className="text-xs sm:text-sm text-white/80 font-medium">
                  FC / PAS
                </span>
              </div>
            </div>

            {canCalc && ageGroup && (
              <div
                className={`rounded-2xl border px-3.5 py-2.5 shadow-sm max-w-xs transition-all ${
                  isElevated
                    ? 'bg-rose-50 text-rose-950 border-rose-200'
                    : 'bg-emerald-50 text-emerald-950 border-emerald-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isElevated ? 'bg-rose-500' : 'bg-emerald-500'
                    }`}
                  />
                  <span className="text-xs font-bold leading-tight">
                    {isElevated ? 'SIPA Elevado' : 'SIPA Normal'}
                  </span>
                </div>
                <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">
                  Corte: &gt; {ageGroup.cutoff} ({ageGroup.label})
                </p>
              </div>
            )}

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-4xl sm:text-5xl shadow-lg shrink-0 select-none">
              💓
            </div>
          </div>
        </div>
      </section>

      {/* MAIN 2-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: PARAMETER INPUTS (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs space-y-5">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Parâmetros Fisiológicos do Paciente
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Válido para crianças e adolescentes entre 1 e 17 anos com suspeita de trauma ou hipovolemia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Idade */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Idade</span>
                  <span className="text-[11px] font-normal text-slate-400">1 a 17 anos</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="17.9"
                    step="0.5"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    placeholder="Ex: 5"
                    className="w-full px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 pointer-events-none">
                    anos
                  </span>
                </div>
              </div>

              {/* Frequência Cardíaca */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Frequência Cardíaca</span>
                  <span className="text-[11px] font-normal text-slate-400">bpm</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="30"
                    max="300"
                    value={fc}
                    onChange={(e) => setFc(e.target.value)}
                    placeholder="Ex: 140"
                    className="w-full px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 pointer-events-none">
                    bpm
                  </span>
                </div>
              </div>

              {/* Pressão Arterial Sistólica */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>PA Sistólica (PAS)</span>
                  <span className="text-[11px] font-normal text-slate-400">mmHg</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="30"
                    max="250"
                    value={pas}
                    onChange={(e) => setPas(e.target.value)}
                    placeholder="Ex: 95"
                    className="w-full px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 pointer-events-none">
                    mmHg
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Age Buttons */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Seleção Rápida de Faixa Etária:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {AGE_GROUPS.map((g) => {
                  const isActive = ageGroup?.label === g.label;
                  return (
                    <button
                      key={g.label}
                      type="button"
                      onClick={() => setIdade(String(g.min))}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-50/80 border-blue-500 text-blue-950 font-bold shadow-2xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 font-medium'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{g.label}</span>
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          Corte: &gt; {g.cutoff}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                        {g.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {(idade || fc || pas) && (
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-bold text-xs flex items-center justify-center gap-2 shadow-2xs transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                <span>Limpar Dados e Nova Avaliação</span>
              </button>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: RESULTS & REFERENCES (4 cols) */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-20">
          {/* RESULT CARD */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>Resultado do SIPA</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span
                className={`text-4xl font-display font-extrabold ${
                  isElevated ? 'text-rose-600' : 'text-emerald-600'
                }`}
              >
                {sipa !== null ? sipa.toFixed(2) : '—'}
              </span>
              <span className="text-sm font-semibold text-slate-500">
                índice
              </span>
            </div>

            {canCalc && ageGroup ? (
              <div
                className={`rounded-2xl border p-3.5 transition-all ${
                  isElevated
                    ? 'bg-rose-50 text-rose-950 border-rose-200'
                    : 'bg-emerald-50 text-emerald-950 border-emerald-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isElevated ? 'bg-rose-500' : 'bg-emerald-500'
                    }`}
                  />
                  <h4 className="text-xs font-bold">
                    {isElevated
                      ? `SIPA Elevado (> ${ageGroup.cutoff})`
                      : `SIPA Normal (≤ ${ageGroup.cutoff})`}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {isElevated
                    ? 'Índice de choque superior ao ponto de corte para a faixa etária. Forte correlação com transfusão precoce, necessidade de intervenção cirúrgica e internação em UTI.'
                    : 'Índice de choque dentro do limite de normalidade para a idade. Mantenha reavaliação clínica e oximetria seriada.'}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-200/60 text-[11px] font-semibold text-slate-700">
                  <span className="text-slate-400 uppercase tracking-wider text-[9px] block">
                    Conduta sugerida:
                  </span>
                  {isElevated
                    ? 'Acionar protocolo de trauma grave, obter 2 acessos venosos calibrosos ou intraósseo, tipagem sanguínea, prova cruzada e preparar concentrado de hemácias.'
                    : 'Manter vigilância hemodinâmica contínua. SIPA normal não exclui totalmente choque compensado inicial.'}
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400">
                Informe a idade (1–17 anos), FC e PAS para calcular o índice e ponto de corte.
              </p>
            )}
          </div>

          {/* REFERENCE TABLE */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <ListIcon className="w-4 h-4 text-brand-teal" />
              <span>Valores de Corte por Idade</span>
            </div>

            <div className="space-y-2">
              {AGE_GROUPS.map((row, idx) => {
                const isActive = ageGroup?.label === row.label;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border p-3 text-xs flex flex-col justify-between gap-1 transition-all ${
                      isActive
                        ? isElevated
                          ? 'bg-rose-50 border-rose-300 text-rose-950 font-bold ring-1 ring-rose-500/20'
                          : 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold ring-1 ring-emerald-500/20'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">{row.label}</span>
                      <span className="text-[11px] font-extrabold opacity-90">
                        Corte &gt; {row.cutoff}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {row.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CLINICAL NOTE */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Nota Clínica</span>
            </div>

            <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 space-y-2 text-xs text-blue-950 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1.5 font-normal">
                  <p>
                    A criança possui grande reserva vasoconstritora e pode manter PA normal até perder 25–30% da volemia ("choque compensado").
                  </p>
                  <p>
                    O SIPA identifica o choque nessa fase pré-hipotensão, superando o índice de choque clássico do adulto (FC/PAS &gt; 0,9), que é inadequado para a pediatria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* REFERENCE SOURCE */}
          <p className="text-[10px] text-slate-400 px-1 leading-relaxed">
            <span className="font-semibold text-slate-500">Fonte:</span>{' '}
            Acker SN et al. Shock index, pediatric age-adjusted (SIPA) is more accurate than age-adjusted hypotension. J Surg Res. 2017; Traynor et al. J Trauma Acute Care Surg 2019.
          </p>
        </div>
      </div>
    </div>
  );
}