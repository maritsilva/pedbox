import {
  Home,
  Calculator,
  Pill,
  Zap,
  FileText,
  Syringe,
  Activity,
  BookOpen,
  Star,
  Settings,
  HelpCircle,
  Grid
} from 'lucide-react';

export const MAIN_NAV_ITEMS = [
  { to: '/', label: 'Início', icon: Home },
  { to: '/calculadoras', label: 'Calculadoras', icon: Calculator },
  { to: '/guia', label: 'Medicamentos', icon: Pill },
  { to: '/dosagens', label: 'Dosagens', icon: Zap },
  { to: '/biblioteca?tab=protocolos', label: 'Protocolos', icon: FileText, matchBase: '/protocolos' },
  { to: '/vacinas', label: 'Vacinas', icon: Syringe },
  { to: '/sinais-vitais', label: 'Sinais Vitais', icon: Activity },
  { to: '/biblioteca', label: 'Biblioteca', icon: BookOpen },
  { to: '/favoritos', label: 'Favoritos', icon: Star },
];

export const SECONDARY_NAV_ITEMS = [
  { to: '/ferramentas', label: 'Todas as ferramentas', icon: Grid },
  { to: '/contato', label: 'Sobre & Contato', icon: HelpCircle },
];

export const MOBILE_BOTTOM_NAV = [
  { to: '/', label: 'Início', icon: Home },
  { to: '/calculadoras', label: 'Calculadoras', icon: Calculator },
  { to: '/favoritos', label: 'Favoritos', icon: Star },
];

export const ROUTE_TITLES = {
  '/': 'PedBox',
  '/calculadoras': 'Calculadoras Clínicas',
  '/guia': 'Guia de Medicamentos',
  '/dosagens': 'Dosagens Rápidas',
  '/protocolos': 'Protocolos Clínicos',
  '/biblioteca': 'Biblioteca',
  '/vacinas': 'Calendário Vacinal',
  '/sinais-vitais': 'Sinais Vitais',
  '/favoritos': 'Meus Favoritos',
  '/ferramentas': 'Explorar Ferramentas',
  '/hidratacao': 'Hidratação Pediátrica',
  '/imc': 'IMC Pediátrico',
  '/pressao-arterial': 'Pressão Arterial',
  '/perimetro-cefalico': 'Perímetro Cefálico',
  '/alvo-parental': 'Alvo Parental',
  '/ictericia': 'Icterícia Neonatal',
  '/horas-de-vida': 'Horas de Vida',
  '/idade-gestacional': 'Idade Gestacional',
  '/idade-gestacional-corrigida': 'Idade Corrigida',
  '/centor-mcisaac': 'Centor / McIsaac',
  '/desenvolvimento': 'Desenvolvimento Infantil',
  '/drogas-emergencia': 'Drogas na Emergência',
  '/wood-downes': 'Wood-Downes',
  '/pram': 'PRAM — Asma',
  '/apgar': 'APGAR',
  '/glasgow-pediatrico': 'Glasgow Pediátrico',
  '/pews': 'PEWS',
  '/sipa': 'SIPA',
  '/silverman-anderson': 'Silverman-Anderson',
  '/rodwell': 'Escore de Rodwell',
  '/pas-asma': 'PAS — Asma',
  '/curvas-crescimento': 'Curvas de Crescimento',
  '/rastreio-preventivo': 'Rastreio Preventivo',
  '/admin': 'Administração',
  '/perfil': 'Meu Perfil',
  '/settings': 'Configurações',
  '/contato': 'Sobre & Contato',
  '/contact': 'Sobre & Contato',
};
