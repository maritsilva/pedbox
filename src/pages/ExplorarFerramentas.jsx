import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Star,
  ArrowRight,
  Search,
  Calculator,
  Pill,
  FileText,
  Activity,
  ShieldAlert,
  Stethoscope,
  Baby,
  CheckCircle2,
  ChevronRight,
  X,
} from 'lucide-react';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { CALCULATORS, normalizeSearch } from '@/lib/calculatorRegistry';

// CATEGORIES FOR CONSULTA & CLINICAL PRACTICE
const CATEGORY_TILES = [
  {
    id: 'Consultas',
    label: 'Consultas & Puericultura',
    desc: 'Crescimento, vacinas, rotina e triagens',
    icon: Stethoscope,
    color: 'text-teal-700 bg-teal-50 border-teal-200/80',
    highlightBadge: 'Ambulatório',
  },
  {
    id: 'Doses',
    label: 'Medicamentos & Doses',
    desc: 'Cálculo por peso, diluições e bulas',
    icon: Pill,
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200/80',
  },
  {
    id: 'Calculadoras',
    label: 'Calculadoras Clínicas',
    desc: 'Fórmulas, balanços e escores',
    icon: Calculator,
    color: 'text-blue-700 bg-blue-50 border-blue-200/80',
  },
  {
    id: 'Emergência',
    label: 'Emergência & UTI',
    desc: 'Drogas em bolus, choque e ressuscitação',
    icon: ShieldAlert,
    color: 'text-rose-700 bg-rose-50 border-rose-200/80',
  },
  {
    id: 'Neonatologia',
    label: 'Neonatologia & Parto',
    desc: 'APGAR, fototerapia, idade e vitalidade',
    icon: Baby,
    color: 'text-amber-700 bg-amber-50 border-amber-200/80',
  },
  {
    id: 'Respiratório',
    label: 'Respiratório & Asma',
    desc: 'Wood-Downes, PRAM, PAS e bronquiolite',
    icon: Activity,
    color: 'text-sky-700 bg-sky-50 border-sky-200/80',
  },
  {
    id: 'Biblioteca',
    label: 'Protocolos & Condutas',
    desc: 'Fluxogramas passo a passo e diretrizes',
    icon: FileText,
    color: 'text-purple-700 bg-purple-50 border-purple-200/80',
  },
];

// CLINICAL CONSULTATION AGE ROADMAP (ROTEIRO POR FAIXA ETÁRIA)
const CONSULTA_ROTEIROS = [
  {
    id: 'rn',
    label: 'Recém-Nascido',
    sublabel: '0 a 28 dias',
    icon: '🍼',
    foco: 'Adaptação neonatal, perda ponderal fisiológica, triagens e icterícia',
    checkpoints: [
      'Avaliar perda de peso (fisiológica até 10%) e recuperação até o 10º-14º dia de vida',
      'Exame do coto umbilical e orientação de higiene com álcool a 70%',
      'Checar realização das triagens neonatais (Pezinho, Olhinho, Orelhinha, Coraçãozinho e Linguinha)',
      'Avaliar icterícia neonatal pelas zonas de Kramer e limiares AAP 2022',
      'Apoio técnico e acolhimento ao aleitamento materno exclusivo (pega, posição e sucção)',
    ],
    ferramentas: [
      { label: 'Horas de Vida', path: '/horas-de-vida', icon: '⏱️' },
      { label: 'Icterícia Neonatal', path: '/ictericia', icon: '☀️' },
      { label: 'Segurança Amamentação', path: '/amamentacao', icon: '🤱' },
      { label: 'Perímetro Cefálico', path: '/perimetro-cefalico', icon: '🔵' },
      { label: 'IG Corrigida (Prematuro)', path: '/idade-gestacional-corrigida', icon: '🍼' },
    ],
  },
  {
    id: 'lactente',
    label: 'Lactente',
    sublabel: '1 a 12 meses',
    icon: '👶',
    foco: 'Crescimento somático acelerado, marcos neuropsicomotores e vacinas',
    checkpoints: [
      'Ganho ponderal médio: 700g/mês (1º trim), 600g/mês (2º trim), 500g/mês (3º trim), 400g/mês (4º trim)',
      'Aferição mensal de Perímetro Cefálico até 2 anos (fechamento de fontanela anterior: 9 a 18 meses)',
      'Conferir marcos do desenvolvimento aos 2, 4, 6 e 9 meses (sustentação cefálica, sentar sem apoio, pinça)',
      'Introdução alimentar saudável a partir dos 6 meses, mantendo o aleitamento materno',
      'Esquema vacinal rigoroso (Pentavalente, VIP, Pneumo-10, MenC, Rotavírus, Febre Amarela)',
      'Profilaxia com Ferro elementar a partir dos 3 meses (prematuros/baixo peso) ou 6 meses (termo)',
    ],
    ferramentas: [
      { label: 'Segurança Amamentação', path: '/amamentacao', icon: '🤱' },
      { label: 'IMC Pediátrico & Percentis', path: '/imc', icon: '📊' },
      { label: 'Curvas de Crescimento OMS', path: '/curvas-crescimento', icon: '📈' },
      { label: 'Marcos do Desenvolvimento', path: '/desenvolvimento', icon: '🌱' },
      { label: 'Calendário de Vacinas', path: '/vacinas', icon: '💉' },
    ],
  },
  {
    id: 'infancia',
    label: 'Primeira Infância',
    sublabel: '1 a 3 anos',
    icon: '🧒',
    foco: 'Linguagem, autonomia, rastreio de autismo (M-CHAT) e prevenção de acidentes',
    checkpoints: [
      'Desaceleração fisiológica do crescimento e inapetência transitória ("fisiológica")',
      'Marcos motores e de linguagem: andar sem apoio aos 15m, juntar 2 palavras aos 24m',
      'Aplicação da escala de rastreio de autismo (M-CHAT-R/F) aos 18 meses',
      'Vacinação de reforço aos 12m (Tríplice Viral, Pneumo, MenC) e 15m (DTP, VIP, VHA, Tetraviral)',
      'Higiene bucal com pasta fluoretada (mínimo 1000 ppm) desde a erupção do 1º dente de leite',
      'Prevenção de acidentes domésticos (quedas, queimaduras, afogamento e intoxicações)',
    ],
    ferramentas: [
      { label: 'Marcos do Desenvolvimento', path: '/desenvolvimento', icon: '🌱' },
      { label: 'Rastreio Preventivo (M-CHAT)', path: '/rastreio-preventivo', icon: '🛡️' },
      { label: 'Curvas de Crescimento', path: '/curvas-crescimento', icon: '📈' },
      { label: 'Vacinas 12-15 meses', path: '/vacinas', icon: '💉' },
    ],
  },
  {
    id: 'escolar',
    label: 'Pré-Escolar & Escolar',
    sublabel: '4 a 10 anos',
    icon: '🎒',
    foco: 'Triagem visual, aferição anual de PA, perfil lipídico e prevenção de obesidade',
    checkpoints: [
      'Aferição anual de Pressão Arterial a partir dos 3 anos em todas as consultas de rotina',
      'Triagem de acuidade visual com tabela de optotipos (Snellen / LEA) aos 4 e 5 anos',
      'Cálculo anual de IMC para identificação precoce de sobrepeso e obesidade infantil',
      'Rastreio universal de dislipidemia entre 9 e 11 anos (perfil lipídico em jejum)',
      'Segundo reforço de DTP e VIP aos 4 anos, e reforço de Febre Amarela aos 4 anos',
      'Incentivo a hábitos saudáveis: mínimo de 60 min/dia de atividade física e limite de telas (< 2h/dia)',
    ],
    ferramentas: [
      { label: 'Pressão Arterial Pediátrica', path: '/pressao-arterial', icon: '❤️' },
      { label: 'IMC & Percentis', path: '/imc', icon: '📊' },
      { label: 'Alvo Parental Adulto', path: '/alvo-parental', icon: '📐' },
      { label: 'Rastreio Visual & Lipídico', path: '/rastreio-preventivo', icon: '🛡️' },
    ],
  },
  {
    id: 'adolescente',
    label: 'Adolescente',
    sublabel: '10 a 19 anos',
    icon: '🧑',
    foco: 'Estadiamento de Tanner, saúde mental, rastreio postural e vacinas do jovem',
    checkpoints: [
      'Estadiamento puberal de Tanner (desenvolvimento de mamas/genitália e pelos pubianos)',
      'Avaliação da velocidade de crescimento e pico do estirão puberal',
      'Rastreio anual de depressão e ansiedade a partir dos 12 anos (PHQ-9 / GAD-7)',
      'Avaliação postural e teste de Adams para detecção precoce de escoliose',
      'Vacinação do adolescente: HPV (dose única PNI 9-14a / 9-19a SBIm), Meningo ACWY (11-14a) e reforço dT',
      'Atendimento confidencial garantido: momento a sós com o adolescente para orientações de saúde',
    ],
    ferramentas: [
      { label: 'Alvo Parental Genético', path: '/alvo-parental', icon: '📐' },
      { label: 'IMC Pediátrico', path: '/imc', icon: '📊' },
      { label: 'Rastreios de Saúde Mental', path: '/rastreio-preventivo', icon: '🛡️' },
      { label: 'Vacinas do Adolescente', path: '/vacinas', icon: '💉' },
    ],
  },
];

// EXPANDED TOOLS CATALOG WITH COMPREHENSIVE CATEGORIES AND CONSULTATION TAGS
const BASE_TOOLS = [
  // CONSULTAS & PUERICULTURA CORE
  {
    path: '/imc',
    label: 'IMC Pediátrico & Percentis',
    icon: '📊',
    desc: 'Cálculo de IMC, percentis e Z-score OMS/CDC para avaliação nutricional.',
    cat: 'Consultas',
    categories: ['Consultas', 'Calculadoras'],
    isConsultationCore: true,
    status: 'available',
    blockedReason: '',
  },
  {
    path: '/curvas-crescimento',
    label: 'Curvas de Crescimento OMS & CDC',
    icon: '📈',
    desc: 'Gráficos e tabelas oficiais da OMS, CDC e SBP para peso, estatura e IMC.',
    cat: 'Consultas',
    categories: ['Consultas'],
    isConsultationCore: true,
  },
  {
    path: '/perimetro-cefalico',
    label: 'Perímetro Cefálico & Percentis',
    icon: '🔵',
    desc: 'Avaliação do crescimento craniano do nascimento aos 5 anos com Z-scores.',
    cat: 'Consultas',
    categories: ['Consultas', 'Neonatologia'],
    isConsultationCore: true,
  },
  {
    path: '/desenvolvimento',
    label: 'Marcos do Desenvolvimento Infantil',
    icon: '🌱',
    desc: 'Cartilha completa dos 2 meses aos 5 anos, sinais de alerta e orientações.',
    cat: 'Consultas',
    categories: ['Consultas'],
    isConsultationCore: true,
  },
  {
    path: '/vacinas',
    label: 'Calendário de Vacinas & Bulas',
    icon: '💉',
    desc: 'Calendários oficiais PNI e SBIm com informações detalhadas por vacina.',
    cat: 'Consultas',
    categories: ['Consultas'],
    isConsultationCore: true,
  },
  {
    path: '/amamentacao',
    label: 'Segurança na Amamentação',
    icon: '🤱',
    desc: 'Compatibilidade e risco de mais de 1.300 medicamentos e substâncias · Guia MS 2025.',
    cat: 'Consultas',
    categories: ['Consultas', 'Doses'],
    isConsultationCore: true,
  },
  {
    path: '/rastreio-preventivo',
    label: 'Rastreio Preventivo Pediátrico',
    icon: '🛡️',
    desc: 'Cronograma completo de triagens (visão, audição, PA, autismo, anemia, lipídios) — AAP.',
    cat: 'Consultas',
    categories: ['Consultas'],
    isConsultationCore: true,
  },
  {
    path: '/alvo-parental',
    label: 'Alvo Parental (Estatura Genética)',
    icon: '📐',
    desc: 'Estimativa da altura alvo adulta esperada baseada na estatura do pai e da mãe.',
    cat: 'Consultas',
    categories: ['Consultas', 'Calculadoras'],
    isConsultationCore: true,
  },
  {
    path: '/sinais-vitais',
    label: 'Sinais Vitais Pediátricos',
    icon: '📋',
    desc: 'Valores normais de referência de FC, FR e PA por faixa etária pediátrica.',
    cat: 'Consultas',
    categories: ['Consultas', 'Emergência'],
    isConsultationCore: true,
  },
  {
    path: '/pressao-arterial',
    label: 'Pressão Arterial Pediátrica',
    icon: '❤️',
    desc: 'Tabelas e percentis de PA sistólica e diastólica por idade, sexo e estatura.',
    cat: 'Consultas',
    categories: ['Consultas', 'Emergência'],
    isConsultationCore: true,
  },
  {
    path: '/idade-gestacional-corrigida',
    label: 'Idade Gestacional Corrigida',
    icon: '🍼',
    desc: 'Cálculo da idade corrigida para prematuros até os 2 anos de acompanhamento.',
    cat: 'Consultas',
    categories: ['Consultas', 'Neonatologia', 'Calculadoras'],
    isConsultationCore: true,
  },
  {
    path: '/horas-de-vida',
    label: 'Horas de Vida do RN',
    icon: '⏱️',
    desc: 'Contador exato de horas de vida para conduta neonatal e fototerapia.',
    cat: 'Consultas',
    categories: ['Consultas', 'Neonatologia'],
    isConsultationCore: true,
  },
  {
    path: '/ictericia',
    label: 'Icterícia Neonatal (AAP 2022)',
    icon: '☀️',
    desc: 'Limiares precisos de fototerapia e exsanguineotransfusão por horas de vida.',
    cat: 'Consultas',
    categories: ['Consultas', 'Neonatologia'],
    isConsultationCore: true,
  },
  {
    path: '/idade-gestacional',
    label: 'Idade Gestacional (DUM/USG)',
    icon: '🤰',
    desc: 'Cálculo obstétrico e perinatal por data da última menstruação ou ultrassom.',
    cat: 'Consultas',
    categories: ['Consultas', 'Neonatologia'],
  },

  // MEDICAMENTOS & DOSES
  {
    path: '/dosagens',
    label: 'Dosagens — Cálculo Rápido por Peso',
    icon: '⚡',
    desc: 'Calcule doses pediátricas instantaneamente para antibióticos, analgésicos e mais.',
    cat: 'Doses',
    categories: ['Doses'],
  },
  {
    path: '/guia',
    label: 'Guia Farmacológico Pediátrico',
    icon: '📖',
    desc: 'Bulas, apresentações comerciais, diluições, vias e contraindicações completas.',
    cat: 'Doses',
    categories: ['Doses'],
  },
  {
    path: '/hidratacao',
    label: 'Hidratação Venosa (Holliday-Segar)',
    icon: '💧',
    desc: 'Cálculo de manutenção hidroeletrolítica, taxas de infusão e expansão.',
    cat: 'Doses',
    categories: ['Doses', 'Calculadoras'],
  },
  {
    path: '/drogas-emergencia',
    label: 'Drogas na Emergência & PCR',
    icon: '🚨',
    desc: 'Bolus, infusões contínuas, fita de Broselow e doses críticas de ressuscitação.',
    cat: 'Emergência',
    categories: ['Emergência', 'Doses'],
  },

  // EMERGÊNCIA & UTI
  {
    path: '/glasgow-pediatrico',
    label: 'Glasgow Pediátrico',
    icon: '🧠',
    desc: 'Avaliação do nível de consciência adaptada para lactentes e crianças pequenas.',
    cat: 'Emergência',
    categories: ['Emergência'],
  },
  {
    path: '/pews',
    label: 'PEWS (Pediatric Early Warning Score)',
    icon: '⚠️',
    desc: 'Escore de alerta precoce para identificação de deterioração clínica hospitalar.',
    cat: 'Emergência',
    categories: ['Emergência'],
  },
  {
    path: '/sipa',
    label: 'SIPA (Shock Index Pediátrico)',
    icon: '💓',
    desc: 'Índice de choque ajustado por idade (FC / PAS) para triagem rápida.',
    cat: 'Emergência',
    categories: ['Emergência'],
  },

  // NEONATOLOGIA
  {
    path: '/apgar',
    label: 'Escore de APGAR',
    icon: '👶',
    desc: 'Avaliação da vitalidade do recém-nascido no 1º e 5º minutos de vida.',
    cat: 'Neonatologia',
    categories: ['Neonatologia'],
  },
  {
    path: '/silverman-anderson',
    label: 'Escore de Silverman-Anderson',
    icon: '🫂',
    desc: 'Quantificação do desconforto respiratório no recém-nascido.',
    cat: 'Neonatologia',
    categories: ['Neonatologia', 'Respiratório'],
  },
  {
    path: '/rodwell',
    label: 'Escore Hematológico de Rodwell',
    icon: '🧬',
    desc: 'Critérios hematológicos de triagem para sepse neonatal precoce.',
    cat: 'Neonatologia',
    categories: ['Neonatologia'],
  },

  // RESPIRATÓRIO
  {
    path: '/wood-downes',
    label: 'Wood-Downes (Bronquiolite)',
    icon: '🫁',
    desc: 'Classificação de gravidade do desconforto na bronquiolite viral aguda.',
    cat: 'Respiratório',
    categories: ['Respiratório'],
  },
  {
    path: '/pram',
    label: 'PRAM (Asma Aguda)',
    icon: '💨',
    desc: 'Pediatric Respiratory Assessment Measure para crise asmática.',
    cat: 'Respiratório',
    categories: ['Respiratório'],
  },
  {
    path: '/pas-asma',
    label: 'PAS — Pediatric Asthma Score',
    icon: '🌬️',
    desc: 'Escore de gravidade da exacerbação asmática pediátrica.',
    cat: 'Respiratório',
    categories: ['Respiratório'],
  },
  {
    path: '/centor-mcisaac',
    label: 'Centor / McIsaac (Faringite)',
    icon: '🦠',
    desc: 'Probabilidade de faringoamigdalite estreptocócica do grupo A e indicação de ATB.',
    cat: 'Consultas',
    categories: ['Consultas', 'Calculadoras'],
  },

  // BIBLIOTECA & PROTOCOLOS
  {
    path: '/biblioteca?tab=protocolos',
    label: 'Protocolos Clínicos Passo a Passo',
    icon: '🧪',
    desc: 'Fluxogramas interativos de febre, asma, diarreia, bronquiolite e convulsão.',
    cat: 'Biblioteca',
    categories: ['Biblioteca'],
  },
  {
    path: '/biblioteca?tab=condutas',
    label: 'Condutas Pediátricas Estruturadas',
    icon: '🩺',
    desc: 'Manejos práticos e diretrizes clínicas organizadas por subespecialidade.',
    cat: 'Biblioteca',
    categories: ['Biblioteca'],
  },
  {
    path: '/biblioteca',
    label: 'Biblioteca Médica Completa',
    icon: '📚',
    desc: 'Acesso unificado a protocolos, condutas, links externos e notas.',
    cat: 'Biblioteca',
    categories: ['Biblioteca'],
  },
];

export default function ExplorarFerramentas() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('Todas');
  const [selectedRoteiroId, setSelectedRoteiroId] = useState('rn');
  const { isFavorite, toggleFavorite } = usePageFavorites();

  // Combine BASE_TOOLS with registry calculators without duplicates
  const allTools = useMemo(() => {
    const list = [...BASE_TOOLS];
    CALCULATORS.forEach((calc) => {
      if (!list.some((t) => t.path === calc.path)) {
        list.push({
          path: calc.path,
          label: calc.label,
          icon: calc.icon || '🧮',
          desc: calc.desc,
          cat: calc.category || 'Calculadoras',
          categories: [calc.category || 'Calculadoras', 'Calculadoras'],
          isConsultationCore: false,
          status: calc.status,
          blockedReason: /** @type {*} */ (calc).blockedReason || '',
        });
      }
    });
    return list;
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { Todas: allTools.length };
    CATEGORY_TILES.forEach((cat) => {
      counts[cat.id] = allTools.filter(
        (t) => t.cat === cat.id || (t.categories && t.categories.includes(cat.id))
      ).length;
    });
    return counts;
  }, [allTools]);

  // Filtering
  const q = normalizeSearch(search);
  const filteredTools = useMemo(() => {
    return allTools.filter((t) => {
      const matchCat =
        selectedCat === 'Todas' ||
        t.cat === selectedCat ||
        (t.categories && t.categories.includes(selectedCat));
      if (!matchCat) return false;

      if (!q) return true;
      const searchable = normalizeSearch(
        `${t.label} ${t.desc || ''} ${t.cat || ''} ${t.categories?.join(' ') || ''}`
      );
      return searchable.includes(q);
    });
  }, [allTools, selectedCat, q]);

  // Active roteiro object
  const activeRoteiro = useMemo(() => {
    return CONSULTA_ROTEIROS.find((r) => r.id === selectedRoteiroId) || CONSULTA_ROTEIROS[0];
  }, [selectedRoteiroId]);

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-7 pb-12">
      {/* HEADER SECTION */}
      <section className="relative rounded-3xl bg-gradient-to-r from-[#EBF4FA] via-[#F4F9FD] to-white border border-slate-200/90 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/90 border border-teal-200 text-brand-navy text-xs font-bold">
              <Stethoscope className="w-3.5 h-3.5 text-brand-teal" />
              <span>Painel de Ferramentas & Puericultura</span>
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
              Ferramentas Clínicas & Consultas
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Consulte calculadoras, curvas de crescimento, dosagens, marcos do desenvolvimento e o roteiro completo para consultas de puericultura.
            </p>
          </div>

          {/* Quick Search in Header */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por ferramenta, exame, idade..."
              className="w-full bg-white border border-slate-300 rounded-2xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-2xs focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/15 transition-all"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CATEGORY TILES GRID */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <span>Categorias de Consulta & Atendimento</span>
          </h2>
          {selectedCat !== 'Todas' && (
            <button
              onClick={() => setSelectedCat('Todas')}
              className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1"
            >
              <span>Ver todas as {allTools.length} ferramentas</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Tile: Todas */}
          <button
            type="button"
            onClick={() => setSelectedCat('Todas')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              selectedCat === 'Todas'
                ? 'bg-brand-navy text-white border-brand-navy shadow-md ring-2 ring-brand-teal/20'
                : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800 shadow-2xs'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  selectedCat === 'Todas' ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Activity className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className={`text-xs font-bold truncate ${selectedCat === 'Todas' ? 'text-white' : 'text-slate-900'}`}>
                  Todas as Ferramentas
                </h3>
                <p className={`text-[11px] truncate ${selectedCat === 'Todas' ? 'text-slate-300' : 'text-slate-400'}`}>
                  Visão completa
                </p>
              </div>
            </div>
            <span
              className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                selectedCat === 'Todas' ? 'bg-brand-teal text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {allTools.length}
            </span>
          </button>

          {/* Tiles: Specific Categories */}
          {CATEGORY_TILES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCat === cat.id;
            const count = categoryCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(isSelected ? 'Todas' : cat.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-brand-navy text-white border-brand-navy shadow-md ring-2 ring-brand-teal/20'
                    : 'bg-white hover:border-slate-300 border-slate-200/90 text-slate-800 shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/10 text-white' : cat.color
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3
                        className={`text-xs font-bold truncate ${
                          isSelected ? 'text-white' : 'text-slate-900 group-hover:text-brand-navy'
                        }`}
                      >
                        {cat.label}
                      </h3>
                    </div>
                    <p
                      className={`text-[11px] truncate ${
                        isSelected ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    >
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 pl-1">
                  <span
                    className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-brand-teal text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}
                  >
                    {count}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* SPECIAL INTERACTIVE HUB: CONSULTAS & PUERICULTURA POR FAIXA ETÁRIA */}
      {(selectedCat === 'Consultas' || selectedCat === 'Todas') && (
        <section className="bg-white border border-teal-200/90 rounded-3xl p-5 sm:p-7 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-teal-50 text-brand-teal">
                  <Stethoscope className="w-4 h-4" />
                </span>
                <h3 className="text-sm sm:text-base font-bold text-brand-navy uppercase tracking-wider">
                  Guia Prático da Consulta de Puericultura por Idade
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Selecione a faixa etária do paciente para ver os pontos essenciais do atendimento e acionar as ferramentas recomendadas.
              </p>
            </div>

            {selectedCat !== 'Consultas' && (
              <button
                type="button"
                onClick={() => setSelectedCat('Consultas')}
                className="self-start sm:self-auto text-xs font-bold text-brand-teal hover:underline flex items-center gap-1"
              >
                Filtrar apenas Consultas <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Age Bracket Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {CONSULTA_ROTEIROS.map((roteiro) => {
              const isSelected = selectedRoteiroId === roteiro.id;
              return (
                <button
                  key={roteiro.id}
                  type="button"
                  onClick={() => setSelectedRoteiroId(roteiro.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl border text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-50 border-teal-300 text-brand-navy shadow-xs font-bold ring-1 ring-brand-teal/20'
                      : 'bg-slate-50/80 hover:bg-slate-100 border-slate-200/80 text-slate-600'
                  }`}
                >
                  <span className="text-base">{roteiro.icon}</span>
                  <div className="text-left">
                    <p className="leading-tight">{roteiro.label}</p>
                    <p className="text-[10px] text-slate-400 font-normal">{roteiro.sublabel}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Age Bracket Details Box */}
          <div className="bg-gradient-to-br from-slate-50 to-[#F8FAFC] border border-slate-200/90 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 bg-white rounded-xl shadow-2xs border border-slate-200/60">
                  {activeRoteiro.icon}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy flex items-center gap-2">
                    <span>{activeRoteiro.label}</span>
                    <span className="text-[11px] font-semibold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-full">
                      {activeRoteiro.sublabel}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">{activeRoteiro.foco}</p>
                </div>
              </div>
            </div>

            {/* Checkpoints Checklist */}
            <div className="space-y-2 pt-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                O que avaliar nesta consulta:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {activeRoteiro.checkpoints.map((cp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-white border border-slate-200/70 p-2.5 rounded-xl shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-snug">{cp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Tools for this Age */}
            <div className="space-y-2 pt-2 border-t border-slate-200/80">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Ferramentas essenciais para esta faixa etária:
              </p>
              <div className="flex flex-wrap gap-2">
                {activeRoteiro.ferramentas.map((f) => (
                  <Link
                    key={f.path}
                    to={f.path}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-teal-200 hover:border-brand-teal text-xs font-bold text-brand-navy hover:text-brand-teal shadow-2xs transition-all group"
                  >
                    <span className="text-sm group-hover:scale-110 transition-transform">{f.icon}</span>
                    <span>{f.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-teal group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FILTER SUMMARY & TOOL COUNT */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {filteredTools.length}{' '}
            {filteredTools.length === 1 ? 'ferramenta disponível' : 'ferramentas disponíveis'}
            {selectedCat !== 'Todas' && ` na categoria ${selectedCat}`}
          </p>
        </div>

        {search && (
          <p className="text-xs text-slate-400">
            Filtro ativo: <span className="font-semibold text-slate-700">"{search}"</span>
          </p>
        )}
      </div>

      {/* MAIN TOOLS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredTools.map((t) => {
          const favorited = isFavorite(t.path);
          return (
            <article
              key={t.path}
              className="group relative bg-white border border-slate-200/90 hover:border-brand-teal/80 rounded-2xl p-4 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <Link to={t.path} className="block space-y-2.5">
                <div className="flex items-center justify-between pr-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {t.cat}
                  </span>
                  <span className="text-xl p-1 bg-slate-50 rounded-lg group-hover:scale-105 transition-transform">
                    {t.icon || '🛠️'}
                  </span>
                </div>

                <div>
                  <h2 className="text-sm font-bold text-slate-800 group-hover:text-brand-navy transition-colors">
                    {t.label}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                {t.status && (
                  <p className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {t.status === 'blocked' ? 'Cálculo desativado' : 'Revisão pendente'}
                  </p>
                )}
              </Link>

              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100 text-xs">
                <Link
                  to={t.path}
                  className="text-brand-teal font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 text-xs"
                >
                  <span>Acessar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  className="p-1 text-slate-300 hover:text-amber-500 transition-colors cursor-pointer"
                  aria-label={`Favoritar ${t.label}`}
                  aria-pressed={favorited}
                  onClick={() => toggleFavorite(t.path)}
                  title={favorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                  <Star
                    className={`w-4 h-4 transition-colors ${
                      favorited ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                    }`}
                  />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* ZERO RESULTS EMPTY STATE */}
      {filteredTools.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <Search className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-700">
            Nenhuma ferramenta encontrada para "{search}" nesta categoria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedCat('Todas');
            }}
            className="text-xs font-bold text-brand-teal hover:underline inline-block"
          >
            Limpar busca e filtros
          </button>
        </div>
      )}
    </div>
  );
}
