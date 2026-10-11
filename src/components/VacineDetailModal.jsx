import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  AlertTriangle, 
  Zap, 
  Activity, 
  Syringe, 
  CheckCircle2, 
  XCircle, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { VACCINE_SOURCES } from '@/lib/vaccineGuide';

export default function VacineDetailModal({ vacina, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset tab to overview when vacina changes
  useEffect(() => {
    setActiveTab('overview');
  }, [vacina]);

  if (!isOpen || !vacina) return null;

  const categoryColor = {
    'Vivas Atenuadas': 'bg-amber-100 text-amber-800 border-amber-300',
    'Não Vivas / Inativadas': 'bg-blue-100 text-blue-800 border-blue-300',
    'Conjugadas': 'bg-purple-100 text-purple-800 border-purple-300',
    'Imunização Passiva & Materna': 'bg-teal-100 text-teal-800 border-teal-300',
  }[vacina.category] || 'bg-slate-100 text-slate-800 border-slate-300';

  const tabs = [
    { id: 'overview', label: 'Visão Geral & Ação', icon: ShieldCheck },
    { id: 'schedule', label: 'PNI vs SBIm', icon: Calendar },
    { id: 'catchup', label: 'Recuperação & Atraso', icon: Clock },
    { id: 'contraindications', label: 'Contraindicações', icon: AlertTriangle },
    { id: 'adverse', label: 'Eventos (ESAVI)', icon: Zap },
    { id: 'special', label: 'Situações Especiais', icon: Activity },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy p-5 sm:p-6 text-white shrink-0 relative">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryColor}`}>
                    {vacina.category || 'Imunobiológico'}
                  </span>
                  <span className="text-[11px] font-medium text-slate-300 flex items-center gap-1">
                    <Syringe className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{vacina.route || 'Via Intramuscular'}</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  {vacina.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {vacina.type || vacina.prevents?.slice(0, 80) + '...'}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                aria-label="Fechar popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* TAB BAR NAVIGATION */}
            <div className="flex items-center gap-1.5 overflow-x-auto pt-4 mt-2 border-t border-white/10 no-scrollbar">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      active
                        ? 'bg-brand-teal text-white shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* TAB CONTENT (Scrollable Area) */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-slate-700 text-sm flex-1 leading-relaxed">
            {/* TAB 1: VISÃO GERAL */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-teal" />
                    <span>O que previne</span>
                  </h4>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    {vacina.prevents || 'Proteção contra formas clínicas e infecções pediátricas específicas.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Composição & Plataforma
                    </span>
                    <p className="text-xs text-slate-700 leading-snug">
                      {vacina.composition || vacina.type || 'Consulte a bula do fabricante.'}
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Via & Local de Aplicação
                    </span>
                    <p className="text-xs text-slate-700 leading-snug">
                      {vacina.route || 'Intramuscular profunda.'}
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Idade Mínima Regulamentar
                    </span>
                    <p className="text-xs text-slate-700 leading-snug font-semibold text-brand-navy">
                      {vacina.minAge || 'Conforme calendário'}
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Limites Etários
                    </span>
                    <p className="text-xs text-slate-700 leading-snug">
                      {vacina.maxAge || 'Verificar estratégia pública vs rede privada'}
                    </p>
                  </div>
                </div>

                {vacina.note && (
                  <div className="bg-brand-sky/30 border border-brand-sky rounded-2xl p-4 text-xs text-slate-800 space-y-1">
                    <span className="font-bold text-brand-navy block">Destaque Clínico</span>
                    <p className="leading-relaxed">{vacina.note}</p>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: PNI VS SBIM */}
            {activeTab === 'schedule' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* PNI Card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-2.5 py-0.5 rounded-lg">
                          PNI (SUS - Público)
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">Universal</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {vacina.pni}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {vacina.pniSchedule || 'Esquema oficial do Programa Nacional de Imunizações.'}
                      </p>
                    </div>
                  </div>

                  {/* SBIm Card */}
                  <div className="bg-brand-sky/20 border border-brand-teal/30 rounded-2xl p-4 space-y-2 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-lg">
                          SBIm (Rede Privada)
                        </span>
                        <span className="text-[11px] font-semibold text-brand-teal">Recomendação Individual</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {vacina.sbim}
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {vacina.sbimSchedule || 'Recomendação da Sociedade Brasileira de Imunizações com maior abrangência de antígenos ou formulações acelulares.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 space-y-1">
                  <span className="font-bold text-amber-800 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Como integrar SUS e Rede Privada sem erros:</span>
                  </span>
                  <p className="leading-relaxed">
                    Sempre faça a leitura <strong>por antígeno</strong>. Uma vacina combinada privada ("penta acelular") contém VIP, DTPa e Hib, mas NÃO contém hepatite B, ao passo que a Penta do SUS contém hepatite B e Hib, mas não contém pólio. Conferir os componentes evita doses omitidas ou duplicadas.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: RECUPERAÇÃO E ATRASO */}
            {activeTab === 'catchup' && (
              <div className="space-y-4">
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-teal flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Princípio de Ouro: Dose dada é dose contada</span>
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    O atraso entre doses NUNCA exige reiniciar um esquema vacinal, independentemente do tempo decorrido. A memória imunológica permanece; basta continuar as doses pendentes respeitando os intervalos mínimos.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                    Conduta de Resgate para esta vacina
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {vacina.catchUp || 'Verificar doses válidas já recebidas, idade atual da criança e respeitar os intervalos mínimos preconizados antes da próxima aplicação.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
                    <span className="font-bold text-slate-700 block">Cuidado com a Antecipação</span>
                    <p className="text-slate-600 leading-snug">
                      Doses aplicadas antes da idade mínima ou antes do intervalo mínimo técnico podem ter resposta imunológica prejudicada e ser consideradas inválidas, exigindo repetição.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
                    <span className="font-bold text-slate-700 block">Administração Simultânea</span>
                    <p className="text-slate-600 leading-snug">
                      Vacinas atrasadas podem ser administradas no mesmo dia em sítios anatômicos diferentes, sem sobrecarga imunológica.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CONTRAINDICAÇÕES & MITOS */}
            {activeTab === 'contraindications' && (
              <div className="space-y-4">
                {/* Verdadeiras Contraindicações */}
                <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Verdadeiras Contraindicações Formais</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-rose-900 leading-relaxed list-disc list-inside">
                    {(vacina.contraindications || [
                      'Anafilaxia comprovada a dose anterior ou a componente da vacina.',
                      vacina.category === 'Vivas Atenuadas' 
                        ? 'Imunossupressão grave congênita ou adquirida (contraindica vacinas vivas).' 
                        : 'Doença febril aguda grave (precaução temporária até melhora clínica).'
                    ]).map((item, idx) => (
                      <li key={idx} className="pl-1">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Falsas Contraindicações (Mitos) */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Falsas Contraindicações (NÃO deve adiar a vacina!)</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-emerald-900 leading-relaxed list-disc list-inside">
                    {(vacina.falseContraindications || [
                      'Resfriado leve, coriza ou tosse sem febre alta.',
                      'Uso de antibiótico em curso para infecção em resolução.',
                      'História familiar de eventos adversos ou convulsões.',
                      'Uso de corticoide nasal, inalatório ou tópico em dose habitual.',
                      'Aleitamento materno e desnutrição leve a moderada.'
                    ]).map((item, idx) => (
                      <li key={idx} className="pl-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 5: EVENTOS ADVERSOS (ESAVI) */}
            {activeTab === 'adverse' && (
              <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Reações Esperadas e Condutas Práticas</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    {(vacina.adverseEvents || [
                      'Dor leve, hiperemia e inchaço no local da injeção nas primeiras 24–48h são comuns e autolimitados.',
                      'Febre baixa pode ocorrer e responde bem a medidas de conforto e antitérmicos comuns.',
                    ]).map((item, idx) => (
                      <li key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1">
                  <span className="font-bold text-slate-800 block">Notificação de ESAVI:</span>
                  <p className="leading-relaxed">
                    Eventos graves, inusitados ou hospitalizações pós-vacinais devem ser notificados ao sistema de vigilância epidemiológica em até 24 horas. Notificar a suspeita clínica imediata não exige certeza causal prévia.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 6: SITUAÇÕES ESPECIAIS */}
            {activeTab === 'special' && (
              <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-brand-teal" />
                    <span>Prematuros, Imunossuprimidos e Grupos Clínicos</span>
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {vacina.specialSituations || 'Seguir as orientações do Manual do CRIE (Centros de Referência para Imunobiológicos Especiais).'}
                  </p>
                </div>

                <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 space-y-1.5">
                  <span className="font-bold text-blue-800 block">Corticoterapia Sistêmica:</span>
                  <p className="leading-relaxed">
                    Doses imunossupressoras de prednisona (≥ 2 mg/kg/dia ou ≥ 20 mg/dia por 14 dias ou mais) exigem aguardar pelo menos <strong>30 dias (1 mês)</strong> após a suspensão do corticoide antes da administração de vacinas de vírus ou bactérias vivas atenuadas.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* FOOTER */}
          <div className="bg-slate-50 px-5 sm:px-6 py-3.5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
            <span className="text-slate-500 text-[11px] text-center sm:text-left">
              Baseado no manual <span className="font-semibold text-slate-700">Imunização Pediátrica 2026</span> (HU Pediatria, p. {vacina.readingPage || 3}).
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={VACCINE_SOURCES.pni.url}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-brand-teal hover:underline flex items-center gap-1"
              >
                Norma PNI <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-2xs"
              >
                Concluir
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}