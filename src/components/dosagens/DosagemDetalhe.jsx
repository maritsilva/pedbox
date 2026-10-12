import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  BookOpen, 
  AlertTriangle, 
  FileText, 
  Scale, 
  Clock, 
  FlaskConical, 
  Info, 
  Thermometer, 
  Pill, 
  Droplet,
  ChevronDown
} from 'lucide-react';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
import { calculateDose, intervalOptions, numberInput, presentationAmount } from '@/lib/doseEngine';

const fmt = value => {
  if (value == null || !Number.isFinite(value)) return '—';
  return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value);
};

export default function DosagemDetalhe({ drug, onBack }) {
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [ageUnit, setAgeUnit] = useState('meses');
  const [indIndex, setIndIndex] = useState(0);
  const [apIndex, setApIndex] = useState(0);
  
  // Pre-select first interval of first indication
  const [chosenInterval, setChosenInterval] = useState(() => {
    const initInd = drug?.indicacoes?.[0];
    const initIntervals = intervalOptions(initInd?.freq);
    return initIntervals.length > 0 ? String(initIntervals[0]) : '';
  });

  const { isFavorite, toggleFavorite } = useDosagemFavorites();

  const indication = drug.indicacoes[indIndex] || drug.indicacoes[0];
  const intervals = intervalOptions(indication?.freq);
  
  // Ensure an interval is always active if available
  const activeInterval = chosenInterval !== '' && intervals.includes(Number(chosenInterval))
    ? Number(chosenInterval)
    : (intervals.length > 0 ? intervals[0] : null);

  const numWeight = numberInput(weight);
  const result = calculateDose(indication, numWeight, activeInterval);

  // Ensure first presentation is always active
  const safeApIndex = (apIndex < (indication?.apresentacoes?.length || 0)) ? apIndex : 0;
  const ap = indication?.apresentacoes?.[safeApIndex] || indication?.apresentacoes?.[0];

  const context = { ageMonths: numberInput(age) * (ageUnit === 'anos' ? 12 : 1), weight: numWeight };
  
  const minPres = !result.error ? presentationAmount(ap, result.min, result.unit, context) : null;
  const maxPres = !result.error ? presentationAmount(ap, result.max, result.unit, context) : null;
  
  // Calculate average (dose média)
  const avgDose = result && !result.error ? (result.min + result.max) / 2 : null;
  const avgPres = !result.error && ap ? presentationAmount(ap, avgDose, result.unit, context) : null;

  // Presentation range formatted string
  const presRangeStr = minPres && maxPres && !minPres.error && !maxPres.error
    ? minPres.value === maxPres.value
      ? `${fmt(minPres.value)} ${minPres.unit}`
      : `${fmt(minPres.value)} ${minPres.unit} a ${fmt(maxPres.value)} ${minPres.unit}`
    : null;

  // Icon for category
  const DrugCategoryIcon = drug.catLabel?.toLowerCase().includes('febre') || drug.catLabel?.toLowerCase().includes('analg')
    ? Thermometer
    : drug.catLabel?.toLowerCase().includes('gota')
    ? Droplet
    : Pill;

  return (
    <div className="clinical-page max-w-5xl mx-auto px-4 py-4 space-y-5">
      {/* TOP ACTIONS BAR */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-brand-navy bg-white border border-slate-200 hover:border-slate-300 px-3.5 py-2 rounded-xl transition-all shadow-2xs cursor-pointer"
        >
          <ArrowLeft size={16} /> Voltar
        </button>

        <div className="flex items-center gap-2">
          <Link
            to={`/guia?drug=${drug.id}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-brand-navy bg-white border border-slate-200 hover:border-slate-300 px-3.5 py-2 rounded-xl transition-all shadow-2xs"
          >
            <BookOpen size={16} /> Bula
          </Link>

          <button
            type="button"
            onClick={() => toggleFavorite(drug.id)}
            aria-pressed={isFavorite(drug.id)}
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl transition-all shadow-2xs border cursor-pointer ${
              isFavorite(drug.id)
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            <Star
              size={16}
              className={isFavorite(drug.id) ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}
            />
            {isFavorite(drug.id) ? 'Favoritado' : 'Favoritar'}
          </button>
        </div>
      </div>

      {/* DRUG HEADER CARD */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
        <div className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-[#164B73] before:rounded-full space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#164B73] block">
            {drug.catLabel || 'Medicamento Pediátrico'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
            {drug.name}
          </h1>
          {drug.marcas && (
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              {drug.marcas}
            </p>
          )}
          <p className="text-xs text-slate-600 leading-relaxed max-w-2xl pt-1">
            {drug.descricao}
          </p>
        </div>

        {/* Circular Category Badge */}
        <div className="hidden sm:flex w-20 h-20 rounded-full bg-blue-50 border border-blue-100 items-center justify-center text-blue-600 shrink-0">
          <DrugCategoryIcon className="w-10 h-10" />
        </div>
      </div>

      {/* ALERT / CONTRAINDICATION BANNER */}
      {drug.alerta ? (
        <div className="bg-amber-50/70 border border-amber-300/80 rounded-2xl p-4 text-xs sm:text-sm text-amber-950 flex items-start sm:items-center gap-3 shadow-2xs font-medium">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <span>{drug.alerta}</span>
        </div>
      ) : (
        <div className="bg-blue-50/50 border border-blue-200/70 rounded-2xl p-3.5 text-xs text-blue-950 flex items-center gap-2.5">
          <Info className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Verifique contraindicações específicas, função renal e hepática antes da administração.</span>
        </div>
      )}

      {/* MAIN TWO-COLUMN CALCULATION GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* LEFT COLUMN: STEPS 1, 2, 4 (and interval) */}
        <div className="lg:col-span-6 space-y-4">
          {/* STEP 1: INDICAÇÃO */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#164B73] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                1
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Selecione uma indicação
              </h3>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-2.5">
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none">
                  <FileText className="w-4 h-4" />
                </div>
                <select
                  aria-label="Selecionar indicação clínica"
                  value={indIndex}
                  onChange={e => {
                    const newIndex = Number(e.target.value);
                    setIndIndex(newIndex);
                    setApIndex(0);
                    const newInd = drug.indicacoes[newIndex] || drug.indicacoes[0];
                    const newIntervals = intervalOptions(newInd?.freq);
                    setChosenInterval(newIntervals.length > 0 ? String(newIntervals[0]) : '');
                  }}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-brand-teal focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  {drug.indicacoes.map((ind, index) => (
                    <option key={ind.id || index} value={index}>
                      {ind.label} ({ind.dose_min}–{ind.dose_max} {ind.unidade})
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Sub helper box */}
              {indication?.obs && (
                <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-2.5 text-xs text-slate-700 italic leading-relaxed">
                  {indication.obs}
                </div>
              )}
            </div>
          </div>

          {/* STEP 2: PESO DO PACIENTE */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#164B73] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                2
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Peso do paciente
              </h3>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs">
              <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 focus-within:border-brand-teal focus-within:bg-white transition-all">
                <Scale className="w-5 h-5 text-blue-600 shrink-0 mr-2.5" />
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="Ex: 9"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  className="w-full bg-transparent border-0 outline-none text-base sm:text-lg font-bold text-slate-800 placeholder-slate-400"
                />
                <span className="text-sm font-bold text-slate-500 ml-2">kg</span>
              </div>

              {/* Age inputs if presentation requires age */}
              {(ap?.idade_min != null || drug.requerIdade) && (
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-3">
                  <div className="flex-1">
                    <label className="text-[11px] font-bold text-slate-500 block mb-1">
                      Idade do paciente
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="Ex: 18"
                      value={age}
                      onChange={e => setAge(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800"
                    />
                  </div>
                  <div className="w-28">
                    <label className="text-[11px] font-bold text-slate-500 block mb-1">
                      Unidade
                    </label>
                    <select
                      value={ageUnit}
                      onChange={e => setAgeUnit(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2 py-1.5 text-xs font-semibold text-slate-800"
                    >
                      <option value="meses">Meses</option>
                      <option value="anos">Anos</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* INTERVALO DE ADMINISTRAÇÃO */}
          {intervals.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-teal" />
                  <span>Intervalo entre doses</span>
                </span>
                <span className="text-[11px] text-slate-400">Freq: {indication.freq}</span>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs">
                <div className="relative">
                  <select
                    aria-label="Selecionar intervalo de administração"
                    value={activeInterval || ''}
                    onChange={e => setChosenInterval(e.target.value)}
                    className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-brand-teal focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    {intervals.map(n => (
                      <option key={n} value={n}>
                        A cada {n} horas ({24 / n}x ao dia)
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: APRESENTAÇÃO DISPONÍVEL */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#164B73] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                4
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Apresentação disponível
              </h3>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs">
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <select
                  aria-label="Selecionar apresentação do medicamento"
                  value={safeApIndex}
                  onChange={e => setApIndex(Number(e.target.value))}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-brand-teal focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  {indication?.apresentacoes?.map((pres, index) => (
                    <option key={index} value={index}>
                      {pres.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STEPS 3 & 5 (Results) */}
        <div className="lg:col-span-6 space-y-4">
          {/* STEP 3: RESULTADO PARA X KG (Dose em mg/mcg) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#164B73] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                3
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Resultado para {numWeight ? `${fmt(numWeight)} kg` : 'peso informado'}
              </h3>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-3">
              {!numWeight ? (
                <div className="py-6 text-center text-xs text-slate-500">
                  Informe o peso do paciente no passo 2 para visualizar as doses calculadas.
                </div>
              ) : result.error ? (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-semibold text-rose-800">
                  {result.error}
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-3 gap-2.5">
                    {/* Dose Mínima */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center flex flex-col justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Dose Mínima
                      </span>
                      <div className="my-1.5">
                        <span className="text-lg sm:text-xl font-black text-brand-navy block">
                          {fmt(result.min)} {result.unit}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {fmt(indication.dose_min)} {result.unit}/kg/dose
                      </span>
                    </div>

                    {/* Dose Média */}
                    <div className="bg-blue-50/70 border border-blue-300 rounded-2xl p-3 text-center flex flex-col justify-between ring-1 ring-blue-300/40">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                        Dose Média
                      </span>
                      <div className="my-1.5">
                        <span className="text-lg sm:text-xl font-black text-blue-700 block">
                          {fmt(avgDose)} {result.unit}
                        </span>
                      </div>
                      <span className="text-[10px] text-blue-600 font-medium">
                        {fmt((indication.dose_min + indication.dose_max) / 2)} {result.unit}/kg/dose
                      </span>
                    </div>

                    {/* Dose Máxima */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center flex flex-col justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Dose Máxima
                      </span>
                      <div className="my-1.5">
                        <span className="text-lg sm:text-xl font-black text-slate-900 block">
                          {fmt(result.max)} {result.unit}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {fmt(indication.dose_max)} {result.unit}/kg/dose
                      </span>
                    </div>
                  </div>

                  {/* Ceiling / Dose Máxima Absoluta Info */}
                  {indication.dose_max_abs && (
                    <div className="bg-blue-50/70 border border-blue-200 rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs text-blue-950 font-medium">
                      <Info className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>
                        Dose máxima cadastrada: <strong>{indication.dose_max_abs} {result.unit}</strong>{' '}
                        {indication.maxScope === 'day' ? '/ dia' : '/ dose'}.
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* STEP 5: RESULTADO EM APRESENTAÇÃO (Gotas, mL, Comprimidos) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#164B73] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                5
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Resultado em {ap?.tipo || 'administração'}
              </h3>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-3">
              {!numWeight ? (
                <div className="py-6 text-center text-xs text-slate-500">
                  Preencha os dados à esquerda para calcular a dosagem prática.
                </div>
              ) : minPres?.error || maxPres?.error ? (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs font-semibold text-amber-900">
                  {minPres?.error || maxPres?.error}
                </div>
              ) : (
                <>
                  {/* Giant Presentation Result Banner in Brand Blue */}
                  <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 sm:p-5 text-center space-y-1 shadow-2xs">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy block tracking-tight">
                      {presRangeStr}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600 block">
                      Via {ap?.via || 'oral'} {activeInterval ? `• a cada ${activeInterval} horas` : `• ${indication.freq}`}
                    </span>
                  </div>

                  {/* 3 Subcards for Pres Amount */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-center">
                      <span className="text-sm sm:text-base font-bold text-slate-800 block">
                        {fmt(minPres?.value)} {minPres?.unit}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">Mínima</span>
                    </div>

                    <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-2.5 text-center">
                      <span className="text-sm sm:text-base font-bold text-blue-700 block">
                        {fmt(avgPres?.value)} {minPres?.unit}
                      </span>
                      <span className="text-[10px] text-blue-600 font-medium">Média</span>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-center">
                      <span className="text-sm sm:text-base font-bold text-slate-800 block">
                        {fmt(maxPres?.value)} {minPres?.unit}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">Máxima</span>
                    </div>
                  </div>

                  {(minPres?.theoretical || maxPres?.theoretical) && (
                    <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200 leading-snug">
                      Atenção: conversão teórica com gotas fracionadas. Ajuste para gotas inteiras conforme avaliação clínica.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER DISCLAIMER */}
      <div className="text-center pt-3 pb-2 text-[11px] text-slate-400">
        Ferramenta de suporte à decisão clínica. Sempre valide com protocolos institucionais e a experiência médica.
      </div>
    </div>
  );
}
