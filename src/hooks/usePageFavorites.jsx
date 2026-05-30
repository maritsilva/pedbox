import { useState, useEffect, useContext, createContext } from 'react';

const KEY = 'pedbox_page_favorites';

// Catalog of all favoritable pages/tools
export const ALL_PAGES = [
  { path: '/dosagens',            label: 'Dosagens — Cálculo Rápido',       icon: '⚡', desc: 'Calcule doses por peso instantaneamente' },
  { path: '/guia',                label: 'Guia de Medicamentos',             icon: '📖', desc: 'Doses, preparo e apresentações' },
  { path: '/protocolos',          label: 'Protocolos Clínicos',             icon: '🧪', desc: 'Fluxogramas passo a passo' },
  { path: '/resumos',             label: 'Resumos Clínicos',                icon: '📝', desc: 'Sínteses de tópicos essenciais' },
  { path: '/pesquisa',            label: 'SophIA — IA Pediátrica',          icon: '🔬', desc: 'Inteligência artificial do Pedbox' },
  { path: '/drogas-emergencia',   label: 'Drogas na Emergência',            icon: '🚨', desc: 'Bolus, infusão e Broselow' },
  { path: '/calculadoras-hub',    label: 'Calculadoras Clínicas',           icon: '🧮', desc: 'Scores e cálculos pediátricos' },
  { path: '/hidratacao',          label: 'Hidratação Venosa',               icon: '💧', desc: 'Volumes e velocidades' },
  { path: '/imc',                 label: 'IMC Pediátrico',                  icon: '📊', desc: 'Crescimento e percentis' },
  { path: '/pressao-arterial',    label: 'PA Pediátrica',                   icon: '❤️', desc: 'Classificação por idade e sexo' },
  { path: '/perimetro-cefalico',  label: 'Perímetro Cefálico',              icon: '🔵', desc: 'Avaliação do crescimento craniano' },
  { path: '/alvo-parental',       label: 'Alvo Parental',                   icon: '📐', desc: 'Estatura alvo genética' },
  { path: '/idade-gestacional-corrigida', label: 'IG Corrigida',            icon: '🍼', desc: 'Idade gestacional corrigida' },
  { path: '/centor-mcisaac',      label: 'Centor / McIsaac',                icon: '🦠', desc: 'Probabilidade de estreptococcia' },
  { path: '/wood-downes',         label: 'Wood-Downes',                     icon: '🫁', desc: 'Score de bronquiolite' },
  { path: '/pram',                label: 'PRAM — Asma',                     icon: '💨', desc: 'Score de asma aguda' },
  { path: '/apgar',               label: 'APGAR',                           icon: '👶', desc: 'Avaliação do recém-nascido' },
  { path: '/glasgow-pediatrico',  label: 'Glasgow Pediátrico',              icon: '🧠', desc: 'Escala de coma pediátrica' },
  { path: '/pews',                label: 'PEWS',                            icon: '⚠️', desc: 'Early warning pediátrico' },
  { path: '/sipa',                label: 'SIPA',                            icon: '💓', desc: 'Shock index pediátrico' },
  { path: '/silverman-anderson',  label: 'Silverman-Anderson',              icon: '🫂', desc: 'Desconforto respiratório RN' },
  { path: '/rodwell',             label: 'Escore de Rodwell',               icon: '🧬', desc: 'Sepse neonatal' },
  { path: '/pas-asma',            label: 'PAS — Asma',                      icon: '🌬️', desc: 'Pediatric Asthma Score' },
  { path: '/desenvolvimento',     label: 'Marcos do Desenvolvimento',       icon: '🌱', desc: 'Milestones 2 meses a 5 anos' },
  { path: '/vacinas',             label: 'Vacinas',                         icon: '💉', desc: 'Calendário vacinal' },
];

const PageFavoritesContext = createContext(null);

export function PageFavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (path) => favorites.includes(path);

  const toggleFavorite = (path) => {
    setFavorites(prev =>
      prev.includes(path) ? prev.filter(p => p !== path) : [...prev, path]
    );
  };

  const favPages = ALL_PAGES.filter(p => favorites.includes(p.path));

  return (
    <PageFavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, favPages }}>
      {children}
    </PageFavoritesContext.Provider>
  );
}

export function usePageFavorites() {
  return useContext(PageFavoritesContext);
}