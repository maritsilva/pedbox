import React, { useState } from 'react';
import { Search, X, Zap, Activity, Syringe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Data ──────────────────────────────────────────────────────────────────────

const EQUIPAMENTOS = {
  colunas: [
    'Neonato/< 1a\n(3–5 kg)',
    '< 1 ano\n(6–9 kg)',
    '1–2 anos\n(10–11 kg)',
    'Criança\n(12–14 kg)',
    'Criança\n(15–18 kg)',
    'Criança\n(19–22 kg)',
    'Criança G.\n(24–30 kg)',
    'Adulto\n(≥ 32 kg)',
  ],
  linhas: [
    { equipamento: 'Bolsa-Valva (BVM)', valores: ['Lactente', 'Lactente', 'Criança', 'Criança', 'Criança', 'Criança', 'Criança/Adulto', 'Adulto'] },
    { equipamento: 'Máscara de O₂', valores: ['Neonatal', 'Neonatal', 'Pediátrica', 'Pediátrica', 'Pediátrica', 'Pediátrica', 'Adulto', 'Adulto'] },
    { equipamento: 'Cânula Oro-Faríngea', valores: ['0', '1', '1', '1–2', '2', '2', '2–3', '3+'] },
    { equipamento: 'Lâmina Laringoscópio', valores: ['Reta 0–1', 'Reta 1', 'Reta 1', 'Reta 2', 'Reta 2/Curva', 'Reta 2/Curva', 'Reta 2–3/Curva', 'Reta 3/Curva'] },
    { equipamento: 'Cânula Traqueal', valores: ['Prem 2,5\nTermo 3,0–3,5 s/cuff', '3,5 s/cuff', '4,0 s/cuff', '4,5 s/cuff', '5,0 s/cuff', '5,5 s/cuff', '6,0 c/cuff', '6,5 c/cuff'] },
    { equipamento: 'Comp. CT (lábio)', valores: ['10–10,5 cm', '10–10,5 cm', '11–12 cm', '12,5–13,5 cm', '14–15 cm', '15,5–16,5 cm', '17–18 cm', '18,5–19,5 cm'] },
    { equipamento: 'Fio Guia (F)', valores: ['6', '6', '6', '6', '6', '14', '14', '14'] },
    { equipamento: 'Sonda Aspiração (FG)', valores: ['6–8', '8', '8–10', '10', '10', '10', '10', '12'] },
    { equipamento: 'Cateter EV', valores: ['22–24', '22–24', '20–24', '18–22', '18–22', '18–20', '18–20', '16–20'] },
    { equipamento: 'Scalp', valores: ['23–25', '23–25', '23–25', '21–23', '21–23', '21–23', '21–22', '18–21'] },
    { equipamento: 'Sonda Nasogástrica', valores: ['5–8', '5–8', '8–10', '10', '10–12', '12–14', '14–18', '18'] },
    { equipamento: 'Sonda Urinária', valores: ['5–8', '5–8', '8–10', '10', '10–12', '10–12', '12', '12'] },
    { equipamento: 'Dreno Torácico', valores: ['10–12', '10–12', '16–20', '20–24', '20–24', '24–32', '28–32', '32–40'] },
    { equipamento: 'Máscara Laríngea', valores: ['1', '1,5', '1,5', '2', '2', '2–2,5', '2,5', '3'] },
    { equipamento: 'Pás Desfibrilação', valores: ['Lactente\n< 1a', 'Lactente\n< 1a ou 10kg', 'Adulto\n≥ 1a/10kg', 'Adulto', 'Adulto', 'Adulto', 'Adulto', 'Adulto'] },
  ],
};

const DROGAS_BOLUS = [
  { nome: 'Adenosina', apres: 'Adenocard® 3mg/mL AP 2mL', dose: '0,1–0,2 mg/kg (máx 12 mg)', obs: 'Bolo rápido + flush 3–5 mL SF' },
  { nome: 'Amiodarona', apres: 'Atlansil® 50mg/mL AP 3mL', dose: '5 mg/kg', obs: 'Diluir em SG5%' },
  { nome: 'Atropina', apres: 'Hytropin® 0,25mg/mL AP 1mL', dose: '0,02 mg/kg', obs: '' },
  { nome: 'Bicarbonato de Sódio', apres: '8,4% — 1 mEq/mL AP 10mL', dose: '1 mEq/kg', obs: 'RN: usar 4,2%. Vel. máx IV direto = 10 mEq/min' },
  { nome: 'Carvão Ativado (VO)', apres: 'Manipulação', dose: '1 g/kg VO/SNG (máx 50g)', obs: 'Diluição 1:10 + laxante' },
  { nome: 'Cardioversão', apres: '—', dose: '0,5–2 J/kg', obs: 'Sincronizado' },
  { nome: 'Cloreto de Cálcio', apres: '10% — 100mg/mL AP 10mL', dose: '20 mg/kg (máx 500mg–1g)', obs: '' },
  { nome: 'Desfibrilação', apres: '—', dose: '1º 2 J/kg → seguintes 4 J/kg', obs: 'Não sincronizado' },
  { nome: 'Diazepam', apres: 'Valium® 5mg/mL AP 2mL', dose: '0,2–0,5 mg/kg (máx 10mg)', obs: '' },
  { nome: 'Difenidramina', apres: 'Difenidrin® 50mg/mL AP 1mL', dose: '1–2 mg/kg (máx 50mg)', obs: '' },
  { nome: 'Dipirona', apres: 'Ampola 0,5g/mL', dose: '20–25 mg/kg/dose 6/6h', obs: 'Crianças > 3 meses e > 5 kg' },
  { nome: 'Epinefrina (PCR/anafilaxia)', apres: '1:10.000 — 0,1mg/mL | 1:1.000 — 1mg/mL', dose: 'PCR: 0,01 mg/kg = 0,1 mL/kg (1:10.000)\nAnafilaxia IM: 0,01 mg/kg (1:1.000)', obs: 'ET: 0,1 mg/kg (1:1.000)' },
  { nome: 'Etomidato', apres: 'Hypnomidate® 2mg/mL AP 10mL', dose: '0,2–0,4 mg/kg', obs: '' },
  { nome: 'Fenitoína', apres: 'Hidantal® 50mg/mL AP 5mL', dose: '15–20 mg/kg (máx 1500mg)', obs: 'Vel. máx 1mg/kg/min. Não diluir em glicose' },
  { nome: 'Fenobarbital', apres: 'Fenocris® 100mg/mL AP 2mL', dose: '15–20 mg/kg (máx 800mg)', obs: '< 30 mg/min em criança' },
  { nome: 'Fentanil (bolus)', apres: '50 mcg/mL AP 5mL', dose: '1–4 mcg/kg (máx 100 mcg)', obs: 'Infundir lento — risco rigidez torácica' },
  { nome: 'Flumazenil', apres: 'Lanexat® 0,1mg/mL AP 5mL', dose: '0,01–0,05 mg/kg (máx 0,2mg/dose, até 1mg)', obs: '' },
  { nome: 'Glicose', apres: '10% (0,1g/mL) · 25% (0,25g/mL)', dose: '0,5–1 g/kg | 10%: 5–10 mL/kg · 25%: 2–4 mL/kg', obs: '' },
  { nome: 'Gluconato de Cálcio', apres: '10% — 100mg/mL AP 10mL', dose: '60–100 mg/kg (0,6–1 mL/kg)', obs: '' },
  { nome: 'Hidrato de Cloral (oral/retal)', apres: 'Xarope 10% — 500mg/5mL', dose: '25–100 mg/kg', obs: 'Depressão SNC' },
  { nome: 'Hidrocortisona', apres: 'Cortisonal® 100mg FAP / Solu-Cortef® 500mg', dose: '4–8 mg/kg (máx 500mg). Crise adrenal: ataque 50mg/m²', obs: '' },
  { nome: 'Ketamina (bolus)', apres: 'Ketamin S® 50mg/mL FAP 10mL', dose: '0,5–2 mg/kg', obs: 'Associar atropina + midazolam. Vel. máx 0,5mg/kg/min' },
  { nome: 'Lidocaína', apres: 'Xylestesin® 2% 20mg/mL AP 20mL', dose: '1–1,5 mg/kg (máx 100mg)', obs: '' },
  { nome: 'Manitol', apres: '20% — 0,2g/mL Frasco 250mL', dose: '0,5–1 g/kg', obs: 'Infusão lenta 20–30 min' },
  { nome: 'Metilprednisolona', apres: 'Solu-Medrol® 62,5mg/mL', dose: '0,5–1 mg/kg (máx 250mg). Asma: ataque 2mg/kg', obs: '' },
  { nome: 'Midazolam', apres: 'Dormonid® 5mg/mL AP 3mL', dose: '0,1–0,4 mg/kg (máx 10mg)', obs: 'Também IM ou intranasal' },
  { nome: 'Morfina', apres: 'Dimorf 1mg/mL AP 2mL', dose: '0,1–0,2 mg/kg (máx 15mg)', obs: '' },
  { nome: 'Naloxona', apres: 'Narcan® 0,4mg/mL AP 1mL', dose: '0,01–0,1 mg/kg (máx 2mg)', obs: 'EV, SC, IM ou ET' },
  { nome: 'Ondansetrona', apres: 'Vanau® flash 4mg e 8mg', dose: '8–15 kg (6m–2a): ½ comp 4mg\n2–10 anos: 1 comp 4mg\n> 10 anos: comp 8mg', obs: '' },
  { nome: 'Propofol (bolus)', apres: 'Diprivan® 10mg/mL AP 20mL', dose: '1–3 mg/kg', obs: 'Insolúvel em água' },
  { nome: 'Rocurônio (bolus)', apres: 'Esmeron® 10mg/mL FAP 5mL', dose: '0,6–1,2 mg/kg', obs: 'Associar sedação' },
  { nome: 'Salbutamol (inalatório)', apres: 'Aerolin® 100 mcg/puff · Sol. Neb 5mg/mL', dose: 'Neb: 0,15 mg/kg (mín 2,5mg) a cada 20min × 3\nAerossol: 4–8 puffs + espaçador a cada 20min × 3', obs: '' },
  { nome: 'Succinilcolina', apres: 'Succinil Colin® 100mg FAP', dose: '1–2 mg/kg (máx 150mg)', obs: '' },
  { nome: 'Sulfato de Magnésio', apres: '50% — 500mg/mL', dose: '25–50 mg/kg (máx 2g)', obs: '' },
  { nome: 'Terbutalina (bolus)', apres: 'Terbutil® 0,5mg/mL AP 1mL', dose: '10 mcg/kg', obs: 'Infundir em 10 min' },
  { nome: 'Tiopental (bolus)', apres: 'Thiopentax® 1g FAP', dose: '3–5 mg/kg', obs: 'Instabilidade hemodinâmica' },
  { nome: 'Tramadol', apres: 'Tramal® 50–100mg AP', dose: '1–2 mg/kg', obs: 'Boa tolerância hemodinâmica/respiratória' },
  { nome: 'Hidralazina', apres: 'Apresolina® 20mg/mL', dose: '0,2–0,6 mg/kg', obs: 'Taquicardia reflexa' },
];

const DROGAS_INFUSAO = [
  { nome: 'Dobutamina', apres: 'Dobutrex® 12,5mg/mL AP 20mL', dose: '2–20 mcg/kg/min', obs: 'Inotrópico vasodilatador' },
  { nome: 'Dopamina', apres: '5mg/mL AP 10mL', dose: '2–20 mcg/kg/min', obs: 'Baixas doses: vasodilatador renal. Altas: vasopressor' },
  { nome: 'Epinefrina', apres: 'Adrenalina® 1mg/mL AP 1mL', dose: '0,1–1,0 mcg/kg/min', obs: 'Baixas: vasodilatador. Altas: vasopressor' },
  { nome: 'Fentanil', apres: '50 mcg/mL AP 5mL (s/conservante)', dose: 'Ataque: 2–7 mcg/kg\nManut.: 1–10 mcg/kg/h', obs: 'Bloqueador neuromuscular na rigidez torácica' },
  { nome: 'Ketamina', apres: 'Ketamin S® 50mg/mL FAP 10mL', dose: 'Ataque: 1–4 mg/kg\nManut.: 5–10 mcg/kg/min', obs: 'Associar midazolam' },
  { nome: 'Lidocaína', apres: 'Xylocaína® 2% 20mg/mL', dose: '20–50 mcg/kg/min', obs: '' },
  { nome: 'Midazolam', apres: 'Dormonid® 5mg/mL AP 3mL', dose: 'Ataque: 0,2–0,4 mg/kg\nManut.: 0,1–0,3 mg/kg/h\nMal convulsivo: 1–18 mcg/kg/min', obs: '' },
  { nome: 'Milrinona', apres: 'Primacor® 1mg/mL', dose: 'Ataque: 50–75 mcg/kg\nManut.: 0,5–0,75 mcg/kg/min', obs: 'Inodilatador' },
  { nome: 'Nitroprussiato de Sódio', apres: 'Nipride® 25mg/mL', dose: '0,5–10 mcg/kg/min', obs: 'Diluir em SG. Necessita fotoproteção' },
  { nome: 'Norepinefrina', apres: 'Norepine® 1mg/mL AP 4mL', dose: '0,1–2,0 mcg/kg/min', obs: 'Vasopressor. Não diluir em SF' },
  { nome: 'Propofol', apres: 'Diprivan® 10mg/mL', dose: 'Ataque: 1–2 mg/kg\nManut.: 25–100 mcg/kg/min', obs: 'Insolúvel em água' },
  { nome: 'Prostaglandina', apres: 'Prostin® 500mcg/mL', dose: '0,05–0,1 mcg/kg/min', obs: 'Monitorar apneia, hipotensão e hipoglicemia' },
  { nome: 'Rocurônio', apres: 'Esmeron® 10mg/mL', dose: 'Ataque: 0,6–1,2 mg/kg\nManut.: 6–10 mcg/kg/min', obs: 'Associar sedação' },
  { nome: 'Salbutamol', apres: 'Aerolin® 500 mcg/mL AP 1mL', dose: 'Ataque: 15 mcg/kg (10 min)\nManut.: 0,1–1,5 mcg/kg/min', obs: 'Monitorar ritmo, K⁺ e glicemia' },
  { nome: 'Somatostatina', apres: 'Stilamin® 3mg/mL', dose: '3–10 mcg/kg/hora', obs: 'Monitorar hemodinâmica e glicemia' },
  { nome: 'Terbutalina', apres: 'Terbutil® 0,5mg/mL AP 1mL', dose: 'Ataque: 10 mcg/kg (10 min)\nManut.: 0,1–4,0 mcg/kg/min', obs: 'Monitorar ritmo, K⁺. Diluição SF ↑ risco edema pulmonar' },
  { nome: 'Tiopental', apres: 'Thionembutal® 0,5/1g FAP', dose: 'Ataque: 2–5 mg/kg\nManut.: 10–100 mcg/kg/min', obs: 'Monitoração hemodinâmica' },
];

// ── Components ────────────────────────────────────────────────────────────────

function DrugCard({ drug }) {
  return (
    <div className="bg-white border border-border rounded-xl px-4 py-3 shadow-sm">
      <p className="font-bold text-sm text-foreground">{drug.nome}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{drug.apres}</p>
      <div className="mt-2 flex flex-col gap-1">
        <div className="bg-red-50 border border-red-100 rounded-lg px-2.5 py-1.5">
          <p className="text-xs font-semibold text-red-700 whitespace-pre-line">{drug.dose}</p>
        </div>
        {drug.obs && (
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-2.5 py-1">{drug.obs}</p>
        )}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DrogasEmergencia() {
  const [tab, setTab] = useState('bolus'); // 'bolus' | 'infusao' | 'equipamentos'
  const [search, setSearch] = useState('');

  const drogas = tab === 'bolus' ? DROGAS_BOLUS : DROGAS_INFUSAO;
  const filtered = drogas.filter(d =>
    d.nome.toLowerCase().includes(search.toLowerCase()) ||
    d.obs.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-500 to-rose-700 rounded-2xl p-5 text-white mb-6">
        <div className="flex items-center gap-3 mb-1">
          <Zap className="w-6 h-6" />
          <p className="text-red-200 text-xs font-semibold uppercase tracking-wide">Referência Rápida</p>
        </div>
        <h1 className="text-2xl font-extrabold leading-tight">Drogas na Emergência</h1>
        <p className="text-red-100 text-sm mt-1">Fita de Broselow adaptada — Pediatria</p>
        <p className="text-red-200 text-xs mt-3 border-t border-red-400/40 pt-2">Curso Iterativo de Emergência Pediátrica · Uso por profissionais de saúde</p>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-800 mb-5 flex gap-2">
        <span className="flex-shrink-0">⚠️</span>
        <span>Doses de referência para emergências pediátricas. Sempre valide com o peso real, protocolo institucional e supervisão médica.</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {[
          { id: 'bolus', label: '💊 Drogas em Bolus', icon: Syringe },
          { id: 'infusao', label: '🔄 Infusão Contínua', icon: Activity },
          { id: 'equipamentos', label: '🛠️ Equipamentos', icon: null },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => { setTab(t.id); setSearch(''); }}
            className={`py-2 px-4 rounded-xl text-sm font-semibold transition-all border ${tab === t.id ? 'bg-red-600 text-white border-red-600' : 'bg-white text-muted-foreground border-border hover:border-red-300'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Equipamentos */}
      {tab === 'equipamentos' && (
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-slate-700">
                <th className="px-3 py-2.5 text-left font-bold text-white sticky left-0 bg-slate-700 min-w-[130px]">Equipamento</th>
                {EQUIPAMENTOS.colunas.map((c, i) => (
                  <th key={i} className="px-2 py-2.5 text-center font-bold text-slate-200 min-w-[80px] whitespace-pre-line text-xs leading-tight">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {EQUIPAMENTOS.linhas.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-3 py-2 font-semibold text-foreground sticky left-0 bg-inherit border-r border-border">{row.equipamento}</td>
                  {row.valores.map((v, j) => (
                    <td key={j} className="px-2 py-2 text-center text-muted-foreground whitespace-pre-line leading-tight">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Drogas */}
      {tab !== 'equipamentos' && (
        <>
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar droga..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400 transition-all"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-2xl mb-2">🔍</p>
              <p className="font-semibold">Nenhuma droga encontrada para "{search}"</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((drug, i) => (
                <motion.div key={drug.nome} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}>
                  <DrugCard drug={drug} />
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}