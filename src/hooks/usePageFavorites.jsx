import { useState, useEffect, useContext, createContext } from 'react';
import { base44 } from '@/api/base44Client';

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
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Carregar favoritos do servidor ao montar
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const user = await base44.auth.me();
        if (user) {
          const favoritos = await base44.entities.Favorito.list();
          setFavorites(favoritos.map(f => f.chave));
        }
      } catch (e) {
        console.error('Erro ao carregar favoritos:', e);
      }
      setLoaded(true);
    };
    loadFavorites();
  }, []);

  const isFavorite = (key) => favorites.includes(key);

  const toggleFavorite = async (key) => {
    try {
      const isFav = favorites.includes(key);
      
      if (isFav) {
        // Remover do servidor
        const existing = await base44.entities.Favorito.filter({ chave: key });
        if (existing.length > 0) {
          await base44.entities.Favorito.delete(existing[0].id);
        }
        setFavorites(prev => prev.filter(p => p !== key));
      } else {
        // Adicionar ao servidor
        await base44.entities.Favorito.create({ chave: key, tipo: 'ferramenta' });
        setFavorites(prev => [...prev, key]);
      }
    } catch (e) {
      console.error('Erro ao salvar favorito:', e);
    }
  };

  const favPages = ALL_PAGES.filter(p => favorites.includes(p.path));

  return (
    <PageFavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, favPages, loaded }}>
      {children}
    </PageFavoritesContext.Provider>
  );
}

export function usePageFavorites() {
  return useContext(PageFavoritesContext);
}