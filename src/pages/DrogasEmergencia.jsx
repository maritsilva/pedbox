import React, { useState } from 'react';
import { Search, X, Zap, Activity, Syringe, Wrench } from 'lucide-react';

// ── Data ───────────────────────────────────────────────────────────────────────

const EQUIPAMENTOS = {
  colunas: [
    { label: 'Neo/< 1a', sub: '3–5 kg' },
    { label: '< 1 ano', sub: '6–9 kg' },
    { label: '1–2 anos', sub: '10–11 kg' },
    { label: 'Criança P.', sub: '12–14 kg' },
    { label: 'Criança', sub: '15–18 kg' },
    { label: 'Criança', sub: '19–22 kg' },
    { label: 'Criança G.', sub: '24–30 kg' },
    { label: 'Adulto', sub: '≥ 32 kg' },
  ],
  linhas: [
    { equipamento: 'BVM', valores: ['Lactente', 'Lactente', 'Criança', 'Criança', 'Criança', 'Criança', 'Criança/Ad.', 'Adulto'] },
    { equipamento: 'Máscara O₂', valores: ['Neonatal', 'Neonatal', 'Pediátrica', 'Pediátrica', 'Pediátrica', 'Pediátrica', 'Adulto', 'Adulto'] },
    { equipamento: 'Cânula Orofaríngea', valores: ['0', '1', '1', '1–2', '2', '2', '2–3', '3+'] },
    { equipamento: 'Lâmina Laringoscópio', valores: ['R 0–1', 'R 1', 'R 1', 'R 2', 'R2/C', 'R2/C', 'R2–3/C', 'R3/C'] },
    { equipamento: 'Cânula Traqueal', valores: ['2,5–3,5\ns/cuff', '3,5\ns/cuff', '4,0\ns/cuff', '4,5\ns/cuff', '5,0\ns/cuff', '5,5\ns/cuff', '6,0\nc/cuff', '6,5\nc/cuff'] },
    { equipamento: 'Comp. CT (lábio)', valores: ['10–10,5', '10–10,5', '11–12', '12,5–13,5', '14–15', '15,5–16,5', '17–18', '18,5–19,5'] },
    { equipamento: 'Fio Guia (F)', valores: ['6', '6', '6', '6', '6', '14', '14', '14'] },
    { equipamento: 'Sonda Aspiração (FG)', valores: ['6–8', '8', '8–10', '10', '10', '10', '10', '12'] },
    { equipamento: 'Cateter EV', valores: ['22–24', '22–24', '20–24', '18–22', '18–22', '18–20', '18–20', '16–20'] },
    { equipamento: 'Scalp', valores: ['23–25', '23–25', '23–25', '21–23', '21–23', '21–23', '21–22', '18–21'] },
    { equipamento: 'Sonda Nasogástrica', valores: ['5–8', '5–8', '8–10', '10', '10–12', '12–14', '14–18', '18'] },
    { equipamento: 'Sonda Urinária', valores: ['5–8', '5–8', '8–10', '10', '10–12', '10–12', '12', '12'] },
    { equipamento: 'Dreno Torácico', valores: ['10–12', '10–12', '16–20', '20–24', '20–24', '24–32', '28–32', '32–40'] },
    { equipamento: 'Máscara Laríngea', valores: ['1', '1,5', '1,5', '2', '2', '2–2,5', '2,5', '3'] },
    { equipamento: 'Pás Desfibrilação', valores: ['Lactente', 'Lactente', 'Adulto', 'Adulto', 'Adulto', 'Adulto', 'Adulto', 'Adulto'] },
    { equipamento: 'Manguito PA', valores: ['Neo/Lact.', 'Neo/Lact.', 'Lact./Cr.', 'Criança', 'Criança', 'Criança', 'Cr./Ad.', 'Adulto'] },
  ],
};

const DROGAS_BOLUS = [
  { nome: 'Adenosina', dose: '0,1–0,2 mg/kg', max: 'máx 12 mg', obs: 'Bolo rápido + flush 3–5 mL SF', tag: 'cardiovascular' },
  { nome: 'Amiodarona', dose: '5 mg/kg', max: '', obs: 'Diluir em SG5%', tag: 'cardiovascular' },
  { nome: 'Atropina', dose: '0,02 mg/kg', max: '', obs: '', tag: 'cardiovascular' },
  { nome: 'Bicarbonato de Sódio', dose: '1 mEq/kg', max: '', obs: 'RN: 4,2%. Vel. máx 10 mEq/min IV direto', tag: 'eletrolitos' },
  { nome: 'Cardioversão', dose: '0,5–2 J/kg', max: '', obs: 'Sincronizado', tag: 'cardiovascular' },
  { nome: 'Carvão Ativado (VO)', dose: '1 g/kg VO/SNG', max: 'máx 50 g', obs: 'Diluição 1:10 + laxante', tag: 'intox' },
  { nome: 'Cloreto de Cálcio', dose: '20 mg/kg', max: 'máx 500 mg–1 g', obs: '', tag: 'eletrolitos' },
  { nome: 'Desfibrilação', dose: '1º 2 J/kg → seg. 4 J/kg', max: '', obs: 'Não sincronizado', tag: 'cardiovascular' },
  { nome: 'Diazepam', dose: '0,2–0,5 mg/kg', max: 'máx 10 mg', obs: '', tag: 'neuro' },
  { nome: 'Difenidramina', dose: '1–2 mg/kg', max: 'máx 50 mg', obs: '', tag: 'outros' },
  { nome: 'Dipirona', dose: '20–25 mg/kg/dose 6/6h', max: '', obs: '> 3 meses e > 5 kg', tag: 'analgesico' },
  { nome: 'Epinefrina (PCR)', dose: '0,01 mg/kg = 0,1 mL/kg (1:10.000)', max: '', obs: 'ET: 0,1 mg/kg (1:1.000). Anafilaxia IM: 0,01 mg/kg (1:1.000)', tag: 'cardiovascular' },
  { nome: 'Etomidato', dose: '0,2–0,4 mg/kg', max: '', obs: '', tag: 'sedacao' },
  { nome: 'Fenitoína', dose: '15–20 mg/kg', max: 'máx 1500 mg', obs: 'Vel. máx 1 mg/kg/min. Não diluir em glicose', tag: 'neuro' },
  { nome: 'Fenobarbital', dose: '15–20 mg/kg', max: 'máx 800 mg', obs: '< 30 mg/min em criança', tag: 'neuro' },
  { nome: 'Fentanil (bolus)', dose: '1–4 mcg/kg', max: 'máx 100 mcg', obs: 'Infundir lento — risco rigidez torácica', tag: 'sedacao' },
  { nome: 'Flumazenil', dose: '0,01–0,05 mg/kg', max: 'máx 0,2 mg/dose, até 1 mg', obs: '', tag: 'intox' },
  { nome: 'Glicose', dose: '0,5–1 g/kg', max: '', obs: '10%: 5–10 mL/kg · 25%: 2–4 mL/kg', tag: 'eletrolitos' },
  { nome: 'Gluconato de Cálcio', dose: '60–100 mg/kg (0,6–1 mL/kg)', max: '', obs: '', tag: 'eletrolitos' },
  { nome: 'Hidrato de Cloral (oral)', dose: '25–100 mg/kg', max: '', obs: 'Depressão SNC', tag: 'sedacao' },
  { nome: 'Hidrocortisona', dose: '4–8 mg/kg', max: 'máx 500 mg', obs: 'Crise adrenal: ataque 50 mg/m²', tag: 'outros' },
  { nome: 'Ketamina (bolus)', dose: '0,5–2 mg/kg', max: '', obs: 'Associar atropina + midazolam. Vel. máx 0,5 mg/kg/min', tag: 'sedacao' },
  { nome: 'Lidocaína', dose: '1–1,5 mg/kg', max: 'máx 100 mg', obs: '', tag: 'cardiovascular' },
  { nome: 'Manitol', dose: '0,5–1 g/kg', max: '', obs: 'Infusão lenta 20–30 min', tag: 'neuro' },
  { nome: 'Metilprednisolona', dose: '0,5–1 mg/kg', max: 'máx 250 mg', obs: 'Asma: ataque 2 mg/kg', tag: 'outros' },
  { nome: 'Midazolam', dose: '0,1–0,4 mg/kg', max: 'máx 10 mg', obs: 'Também IM ou intranasal', tag: 'sedacao' },
  { nome: 'Morfina', dose: '0,1–0,2 mg/kg', max: 'máx 15 mg', obs: '', tag: 'analgesico' },
  { nome: 'Naloxona', dose: '0,01–0,1 mg/kg', max: 'máx 2 mg', obs: 'EV, SC, IM ou ET', tag: 'intox' },
  { nome: 'Ondansetrona', dose: '8–15 kg: ½ comp 4 mg · 2–10a: 4 mg · >10a: 8 mg', max: '', obs: '', tag: 'outros' },
  { nome: 'Propofol (bolus)', dose: '1–3 mg/kg', max: '', obs: 'Insolúvel em água', tag: 'sedacao' },
  { nome: 'Rocurônio (bolus)', dose: '0,6–1,2 mg/kg', max: '', obs: 'Associar sedação', tag: 'sedacao' },
  { nome: 'Salbutamol (inalatório)', dose: 'Neb: 0,15 mg/kg (mín 2,5 mg) a cada 20 min ×3\nSpray: 4–8 puffs + espaçador a cada 20 min ×3', max: '', obs: '', tag: 'resp' },
  { nome: 'Succinilcolina', dose: '1–2 mg/kg', max: 'máx 150 mg', obs: '', tag: 'sedacao' },
  { nome: 'Sulfato de Magnésio', dose: '25–50 mg/kg', max: 'máx 2 g', obs: '', tag: 'resp' },
  { nome: 'Terbutalina (bolus)', dose: '10 mcg/kg', max: '', obs: 'Infundir em 10 min', tag: 'resp' },
  { nome: 'Tiopental (bolus)', dose: '3–5 mg/kg', max: '', obs: 'Instabilidade hemodinâmica', tag: 'sedacao' },
  { nome: 'Tramadol', dose: '1–2 mg/kg', max: '', obs: 'Boa tolerância hemodinâmica', tag: 'analgesico' },
  { nome: 'Hidralazina', dose: '0,2–0,6 mg/kg', max: '', obs: 'Taquicardia reflexa', tag: 'cardiovascular' },
];

const DROGAS_INFUSAO = [
  { nome: 'Dobutamina', dose: '2–20 mcg/kg/min', obs: 'Inotrópico vasodilatador', tag: 'cardiovascular' },
  { nome: 'Dopamina', dose: '2–20 mcg/kg/min', obs: 'Baixas doses: vasodilatador renal. Altas: vasopressor', tag: 'cardiovascular' },
  { nome: 'Epinefrina', dose: '0,1–1,0 mcg/kg/min', obs: 'Baixas: vasodilatador. Altas: vasopressor', tag: 'cardiovascular' },
  { nome: 'Fentanil', dose: 'Ataque: 2–7 mcg/kg\nManut.: 1–10 mcg/kg/h', obs: 'Bloqueador neuromuscular na rigidez torácica', tag: 'sedacao' },
  { nome: 'Ketamina', dose: 'Ataque: 1–4 mg/kg\nManut.: 5–10 mcg/kg/min', obs: 'Associar midazolam', tag: 'sedacao' },
  { nome: 'Lidocaína', dose: '20–50 mcg/kg/min', obs: '', tag: 'cardiovascular' },
  { nome: 'Midazolam', dose: 'Ataque: 0,2–0,4 mg/kg\nManut.: 0,1–0,3 mg/kg/h\nMal convulsivo: 1–18 mcg/kg/min', obs: '', tag: 'sedacao' },
  { nome: 'Milrinona', dose: 'Ataque: 50–75 mcg/kg\nManut.: 0,5–0,75 mcg/kg/min', obs: 'Inodilatador', tag: 'cardiovascular' },
  { nome: 'Nitroprussiato de Sódio', dose: '0,5–10 mcg/kg/min', obs: 'Diluir em SG. Fotoproteção obrigatória', tag: 'cardiovascular' },
  { nome: 'Norepinefrina', dose: '0,1–2,0 mcg/kg/min', obs: 'Vasopressor. Não diluir em SF', tag: 'cardiovascular' },
  { nome: 'Propofol', dose: 'Ataque: 1–2 mg/kg\nManut.: 25–100 mcg/kg/min', obs: 'Insolúvel em água', tag: 'sedacao' },
  { nome: 'Prostaglandina', dose: '0,05–0,1 mcg/kg/min', obs: 'Monitorar apneia, hipotensão e hipoglicemia', tag: 'cardiovascular' },
  { nome: 'Rocurônio', dose: 'Ataque: 0,6–1,2 mg/kg\nManut.: 6–10 mcg/kg/min', obs: 'Associar sedação', tag: 'sedacao' },
  { nome: 'Salbutamol', dose: 'Ataque: 15 mcg/kg (10 min)\nManut.: 0,1–1,5 mcg/kg/min', obs: 'Monitorar ritmo, K⁺ e glicemia', tag: 'resp' },
  { nome: 'Somatostatina', dose: '3–10 mcg/kg/hora', obs: 'Monitorar hemodinâmica e glicemia', tag: 'outros' },
  { nome: 'Terbutalina', dose: 'Ataque: 10 mcg/kg (10 min)\nManut.: 0,1–4,0 mcg/kg/min', obs: 'Monitorar ritmo, K⁺. SF ↑ risco edema pulmonar', tag: 'resp' },
  { nome: 'Tiopental', dose: 'Ataque: 2–5 mg/kg\nManut.: 10–100 mcg/kg/min', obs: 'Monitoração hemodinâmica', tag: 'sedacao' },
];

const TAG_COLORS = {
  cardiovascular: 'bg-red-100 text-red-700',
  neuro: 'bg-purple-100 text-purple-700',
  sedacao: 'bg-indigo-100 text-indigo-700',
  resp: 'bg-blue-100 text-blue-700',
  analgesico: 'bg-amber-100 text-amber-700',
  eletrolitos: 'bg-teal-100 text-teal-700',
  intox: 'bg-orange-100 text-orange-700',
  outros: 'bg-gray-100 text-gray-600',
};

const TAG_LABELS = {
  cardiovascular: 'Cardiovascular',
  neuro: 'Neurológico',
  sedacao: 'Sedação/IOT',
  resp: 'Respiratório',
  analgesico: 'Analgesia',
  eletrolitos: 'Eletrólitos',
  intox: 'Intoxicação',
  outros: 'Outros',
};

const ALL_TAGS_BOLUS = ['cardiovascular', 'neuro', 'sedacao', 'resp', 'analgesico', 'eletrolitos', 'intox', 'outros'];
const ALL_TAGS_INFUSAO = ['cardiovascular', 'sedacao', 'resp', 'outros'];

// ── Drug Table Row ─────────────────────────────────────────────────────────────

function DrugRow({ drug, isEven }) {
  return (
    <tr className={isEven ? 'bg-white' : 'bg-slate-50/60'}>
      <td className="px-3 py-2.5 align-top">
        <p className="font-bold text-xs text-gray-900 leading-tight">{drug.nome}</p>
        <span className={`inline-block mt-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${TAG_COLORS[drug.tag] || 'bg-gray-100 text-gray-600'}`}>
          {TAG_LABELS[drug.tag] || drug.tag}
        </span>
      </td>
      <td className="px-3 py-2.5 align-top">
        <p className="text-xs font-bold text-red-700 whitespace-pre-line leading-snug">{drug.dose}</p>
        {drug.max && <p className="text-[10px] text-red-500 mt-0.5">{drug.max}</p>}
      </td>
      <td className="px-3 py-2.5 align-top">
        {drug.obs ? (
          <p className="text-[11px] text-amber-700 leading-snug">{drug.obs}</p>
        ) : (
          <span className="text-gray-300 text-xs">—</span>
        )}
      </td>
    </tr>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DrogasEmergencia() {
  const [tab, setTab] = useState('bolus');
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState(null);

  const drogas = tab === 'bolus' ? DROGAS_BOLUS : DROGAS_INFUSAO;
  const activeTags = tab === 'bolus' ? ALL_TAGS_BOLUS : ALL_TAGS_INFUSAO;

  const filtered = drogas.filter(d => {
    const matchSearch = !search || d.nome.toLowerCase().includes(search.toLowerCase()) || (d.obs || '').toLowerCase().includes(search.toLowerCase());
    const matchTag = !activeTag || d.tag === activeTag;
    return matchSearch && matchTag;
  });

  return (
    <div className="max-w-4xl mx-auto px-3 py-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-500 to-rose-700 rounded-2xl p-5 text-white mb-5">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold leading-tight">Drogas na Emergência</h1>
            <p className="text-red-200 text-xs mt-0.5">Fita de Broselow adaptada · Pediatria</p>
          </div>
        </div>
        <p className="text-red-200 text-xs mt-3 border-t border-red-400/40 pt-2">⚠️ Sempre valide com o peso real, protocolo institucional e supervisão médica.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {[
          { id: 'bolus', label: '💊 Bolus / Dose Única', icon: Syringe },
          { id: 'infusao', label: '🔄 Infusão Contínua', icon: Activity },
          { id: 'equipamentos', label: '🛠️ Equipamentos', icon: Wrench },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => { setTab(t.id); setSearch(''); setActiveTag(null); }}
            className={`py-2 px-4 rounded-xl text-sm font-semibold transition-all border ${tab === t.id ? 'bg-red-600 text-white border-red-600 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-red-300'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Equipamentos ── */}
      {tab === 'equipamentos' && (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full text-xs border-collapse">
            <thead>
              <tr className="bg-slate-700">
                <th className="px-3 py-3 text-left font-bold text-white sticky left-0 bg-slate-700 min-w-[130px] z-10">Equipamento</th>
                {EQUIPAMENTOS.colunas.map((c, i) => (
                  <th key={i} className="px-2 py-2 text-center font-bold text-white min-w-[72px]">
                    <div className="text-xs leading-tight">{c.label}</div>
                    <div className="text-[10px] text-slate-300 font-normal">{c.sub}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {EQUIPAMENTOS.linhas.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-3 py-2 font-semibold text-gray-800 sticky left-0 bg-inherit border-r border-gray-200 text-xs">{row.equipamento}</td>
                  {row.valores.map((v, j) => (
                    <td key={j} className="px-2 py-2 text-center text-xs text-gray-700 whitespace-pre-line leading-tight border-l border-gray-100">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Drogas ── */}
      {tab !== 'equipamentos' && (
        <>
          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar droga..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400 transition-all"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${!activeTag ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}
            >
              Todas
            </button>
            {activeTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${activeTag === tag ? TAG_COLORS[tag] + ' border-transparent' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}
              >
                {TAG_LABELS[tag]}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-xs text-gray-400 mb-2">{filtered.length} droga{filtered.length !== 1 ? 's' : ''}</p>

          {/* Table */}
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-2xl mb-2">🔍</p>
              <p className="font-semibold text-sm">Nenhuma droga encontrada</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-red-600">
                    <th className="px-3 py-2.5 text-left text-xs font-bold text-white w-40">Droga</th>
                    <th className="px-3 py-2.5 text-left text-xs font-bold text-white w-56">Dose</th>
                    <th className="px-3 py-2.5 text-left text-xs font-bold text-white">Observações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((drug, i) => (
                    <DrugRow key={drug.nome} drug={drug} isEven={i % 2 === 0} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
      {/* Referências */}
      <div className="mt-6 text-xs text-gray-400 space-y-1 px-1">
        <p className="font-semibold text-gray-500">Referências</p>
        <p>Curso Iterativo de Emergência Pediátrica. <em>Fita de Broselow Adaptada — Equipamentos e Drogas na Emergência Pediátrica</em>. Brasil; 2024.</p>
        <p>Broselow J, Luten R. <em>The Broselow Pediatric Emergency Tape</em>. 2nd ed. Armstrong Medical; 2011.</p>
        <p>Sociedade Brasileira de Pediatria (SBP). <em>Manual de Emergências em Pediatria</em>. Rio de Janeiro: SBP; 2020.</p>
        <p>Schvartsman C, et al. <em>Pronto-Socorro do ICr-HCFMUSP</em>. 4ª ed. Barueri: Manole; 2023.</p>
      </div>
    </div>
  );
}