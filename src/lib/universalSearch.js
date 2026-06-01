// ============================================================
// BUSCA UNIVERSAL — indexa todos os módulos do site
// ============================================================
import { getAllGuideDrugs, ALL_CATEGORIES } from './guideData';
import { getAllDosagens } from './dosagensData';
import { RESUMOS } from './resumosData';
import { vacinasData } from './vacinasData';
import { CONDUTAS_CATEGORIAS } from './condutasData';

// Protocolos
const PROTOCOLS = [
  { id: 'crise-asmatica',      title: 'Crise Asmática',                      tag: 'Protocolo · Respiratório' },
  { id: 'bronquiolite',        title: 'Bronquiolite',                         tag: 'Protocolo · Respiratório' },
  { id: 'convulsao-febril',    title: 'Convulsão Febril Benigna',             tag: 'Protocolo · Neurologia' },
  { id: 'diarreia-aguda',      title: 'Diarreia Aguda',                       tag: 'Protocolo · Gastroenterologia' },
  { id: 'faringoamigdalite',   title: 'Faringoamigdalite',                    tag: 'Protocolo · Infectologia' },
  { id: 'febre-sem-sinais',    title: 'Febre sem Sinais Localizatórios',      tag: 'Protocolo · Infectologia' },
  { id: 'pneumonia-complicada',title: 'PAC Complicada — Pneumonia',           tag: 'Protocolo · Respiratório' },
  { id: 'anemia-ferropriva',   title: 'Anemia Ferropriva',                    tag: 'Protocolo · Hematologia' },
  { id: 'meningite-bacteriana',title: 'Meningite Aguda Bacteriana',           tag: 'Protocolo · Infectologia' },
  { id: 'itu',                 title: 'Infecção do Trato Urinário',           tag: 'Protocolo · Infectologia' },
];

// Calculadoras e ferramentas
const TOOLS_INDEX = [
  { label: 'Hidratação Venosa',          path: '/hidratacao',              icon: '💧', desc: 'Holliday-Segar · volumes e soluções' },
  { label: 'IMC Pediátrico',             path: '/imc',                     icon: '📊', desc: 'Índice de massa corporal por faixa etária' },
  { label: 'Pressão Arterial Pediátrica',path: '/pressao-arterial',        icon: '❤️', desc: 'Valores de referência por percentil e idade' },
  { label: 'Perímetro Cefálico',         path: '/perimetro-cefalico',       icon: '🔵', desc: 'Percentis e avaliação do crescimento craniano' },
  { label: 'Alvo Parental',              path: '/alvo-parental',            icon: '📐', desc: 'Estimativa da altura adulta esperada' },
  { label: 'IG Corrigida',               path: '/idade-gestacional-corrigida', icon: '🍼', desc: 'Idade gestacional corrigida para prematuros' },
  { label: 'Wood-Downes',                path: '/wood-downes',              icon: '🫁', desc: 'Classificação de gravidade da bronquiolite' },
  { label: 'PRAM',                       path: '/pram',                     icon: '💨', desc: 'Pontuação de risco em asma pediátrica' },
  { label: 'APGAR',                      path: '/apgar',                    icon: '👶', desc: 'Avaliação rápida da vitalidade do recém-nascido' },
  { label: 'Glasgow Pediátrico',         path: '/glasgow-pediatrico',       icon: '🧠', desc: 'Nível de consciência em pacientes pediátricos' },
  { label: 'PEWS',                       path: '/pews',                     icon: '⚠️', desc: 'Pontuação de alerta precoce em pediatria' },
  { label: 'SIPA',                       path: '/sipa',                     icon: '💓', desc: 'Shock Index pediatric age-adjusted' },
  { label: 'Silverman-Anderson',         path: '/silverman-anderson',       icon: '🫂', desc: 'Desconforto respiratório neonatal' },
  { label: 'Escore de Rodwell',          path: '/rodwell',                  icon: '🧬', desc: 'Probabilidade de sepse neonatal' },
  { label: 'Centor / McIsaac',           path: '/centor-mcisaac',           icon: '🦠', desc: 'Probabilidade de faringoamigdalite estreptocócica' },
  { label: 'PAS — Asma',                 path: '/pas-asma',                 icon: '🌬️', desc: 'Pediatric Asthma Score emergência' },
  { label: 'Drogas na Emergência',       path: '/drogas-emergencia',        icon: '🚨', desc: 'Broselow · bolus e infusão contínua' },
  { label: 'Calculadoras Clínicas',      path: '/calculadoras-hub',         icon: '🧮', desc: 'Hub de calculadoras e escores pediátricos' },
  { label: 'Curvas de Crescimento OMS',  path: '/curvas-crescimento',       icon: '📈', desc: 'Curvas OMS, CDC e SBP para download' },
  { label: 'Sinais Vitais Pediátricos',  path: '/sinais-vitais',            icon: '📋', desc: 'Valores de referência por faixa etária' },
  { label: 'Desenvolvimento Infantil',   path: '/desenvolvimento',          icon: '🌱', desc: 'Marcos dos 2 meses aos 5 anos com sinais de alerta' },
  { label: 'Vacinas',                    path: '/vacinas',                  icon: '💉', desc: 'Calendário vacinal e informações detalhadas' },
  { label: 'Guia de Medicamentos',       path: '/guia',                     icon: '📖', desc: 'Doses, preparo e apresentações · 100+ fármacos' },
  { label: 'Dosagens — Cálculo Rápido',  path: '/dosagens',                 icon: '⚡', desc: 'Calcule doses por peso instantaneamente' },
  { label: 'Protocolos Clínicos',        path: '/biblioteca',               icon: '🧪', desc: 'Diretrizes passo a passo com fluxogramas' },
  { label: 'Biblioteca',                 path: '/biblioteca',               icon: '📚', desc: 'Protocolos, condutas, links e anotações pediátricas' },
  { label: 'Explorar Ferramentas',       path: '/ferramentas',              icon: '🧰', desc: 'Todas as ferramentas do site' },
  { label: 'SophIA',                     path: '/pesquisa',                 icon: '🔬', desc: 'Busca inteligente de evidências e diretrizes com IA' },
  { label: 'Sinais Vitais Pediátricos',  path: '/sinais-vitais',            icon: '📋', desc: 'Valores de referência por faixa etária' },
  { label: 'Curvas de Crescimento',      path: '/curvas-crescimento',       icon: '📈', desc: 'Curvas OMS, CDC e SBP para download' },
  { label: 'Favoritos',                  path: '/favoritos',                icon: '⭐', desc: 'Ferramentas e medicamentos salvos' },
];

/**
 * Busca universal — retorna até `limit` resultados.
 * Tipos: 'tool' | 'drug' | 'dosagem' | 'resumo' | 'protocolo' | 'vacina' | 'conduta'
 */
export function universalSearch(query, limit = 30) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const results = [];

  // 1. Ferramentas / páginas
  for (const t of TOOLS_INDEX) {
    if (t.label.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)) {
      results.push({ label: t.label, desc: t.desc, path: t.path, icon: t.icon, type: 'tool' });
    }
  }

  // 2. Bulas — medicamentos do Guia
  const drugs = getAllGuideDrugs();
  for (const d of drugs) {
    if (
      d.name.toLowerCase().includes(q) ||
      (d.suffix && d.suffix.toLowerCase().includes(q)) ||
      d.catLabel?.toLowerCase().includes(q)
    ) {
      results.push({
        label: d.name + (d.suffix ? ` (${d.suffix})` : ''),
        desc: `Bulas · ${d.catLabel}`,
        path: `/guia?drug=${d.id}`,
        icon: d.catIcon || '💊',
        type: 'drug',
      });
      if (results.length >= limit * 2) break;
    }
  }

  // 3. Dosagens
  const dosagens = getAllDosagens();
  for (const d of dosagens) {
    if (
      d.name.toLowerCase().includes(q) ||
      (d.sinonimo && d.sinonimo.toLowerCase().includes(q)) ||
      (d.marcas && d.marcas.toLowerCase().includes(q)) ||
      d.catLabel?.toLowerCase().includes(q)
    ) {
      results.push({
        label: `Dose — ${d.name}`,
        desc: `Dosagens · ${d.catLabel}`,
        path: `/dosagens?drug=${d.id}`,
        icon: '⚡',
        type: 'dosagem',
      });
      if (results.filter(r => r.type === 'dosagem').length >= 5) break;
    }
  }

  // 4. Resumos clínicos
  for (const r of RESUMOS) {
    const matchTitle = r.titulo.toLowerCase().includes(q) || r.subtitulo?.toLowerCase().includes(q) || r.categoria?.toLowerCase().includes(q);
    const matchSec = r.seções?.some(s => s.nome.toLowerCase().includes(q) || s.conteudo.toLowerCase().includes(q));
    if (matchTitle || matchSec) {
      results.push({
        label: r.titulo,
        desc: `Biblioteca · ${r.categoria} · ${r.subtitulo}`,
        path: `/biblioteca?resumo=${r.id}`,
        icon: r.emoji || '📝',
        type: 'resumo',
      });
    }
  }

  // 5. Protocolos
  for (const p of PROTOCOLS) {
    if (p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)) {
      results.push({
        label: p.title,
        desc: p.tag,
        path: `/biblioteca`,
        icon: '🧪',
        type: 'protocolo',
      });
    }
  }

  // 6. Vacinas
  for (const v of vacinasData) {
    if (
      v.nome.toLowerCase().includes(q) ||
      v.previne.toLowerCase().includes(q) ||
      v.idade.toLowerCase().includes(q)
    ) {
      results.push({
        label: v.nome,
        desc: `Vacinas · ${v.idade} · ${v.previne.slice(0, 60)}...`,
        path: `/vacinas`,
        icon: '💉',
        type: 'vacina',
      });
    }
  }

  // 7. Condutas — busca nas categorias, subcategorias e tópicos
  for (const cat of CONDUTAS_CATEGORIAS) {
    for (const sub of cat.subcategorias) {
      for (const top of sub.topicos) {
        if (
          top.label.toLowerCase().includes(q) ||
          cat.label.toLowerCase().includes(q) ||
          sub.label.toLowerCase().includes(q)
        ) {
          results.push({
            label: top.label,
            desc: `Conduta · ${cat.label} › ${sub.label}`,
            path: `/biblioteca`,
            icon: cat.icon || '📋',
            type: 'conduta',
          });
          if (results.filter(r => r.type === 'conduta').length >= 8) break;
        }
      }
      if (results.filter(r => r.type === 'conduta').length >= 8) break;
    }
    if (results.filter(r => r.type === 'conduta').length >= 8) break;
  }

  // Deduplicar por path+label e limitar
  const seen = new Set();
  return results.filter(r => {
    const key = r.path + r.label;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, limit);
}

// Badge por tipo
export const TYPE_BADGE = {
  tool:      { label: 'Ferramenta', color: 'bg-blue-100 text-blue-700' },
  drug:      { label: 'Bulas',      color: 'bg-purple-100 text-purple-700' },
  dosagem:   { label: 'Dosagem',    color: 'bg-yellow-100 text-yellow-700' },
  resumo:    { label: 'Resumo',     color: 'bg-green-100 text-green-700' },
  protocolo: { label: 'Protocolo',  color: 'bg-orange-100 text-orange-700' },
  vacina:    { label: 'Vacina',     color: 'bg-teal-100 text-teal-700' },
  conduta:   { label: 'Conduta',    color: 'bg-cyan-100 text-cyan-700' },
};