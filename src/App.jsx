import { lazy, Suspense } from 'react';
import { AuthProvider } from '@/lib/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
const Login = lazy(() => import('@/pages/Login'));
import { Toaster as Notifications } from 'sonner';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { FavoritesProvider } from '@/hooks/useFavorites.jsx';
import { DosagemFavoritesProvider } from '@/hooks/useDosagemFavorites.jsx';
import { PageFavoritesProvider } from '@/hooks/usePageFavorites.jsx';
import PageNotFound from './lib/PageNotFound';
import Layout from './components/Layout';
// Add page imports here
const Ictericia = lazy(() => import('./pages/Ictericia'));
const HorasDeVida = lazy(() => import('./pages/HorasDeVida'));
const IdadeGestacional = lazy(() => import('./pages/IdadeGestacional'));
const Home = lazy(() => import('./pages/Home'));
const ClinicalCalculator = lazy(() => import('./pages/ClinicalCalculator'));
const Hidratacao = lazy(() => import('./pages/Hidratacao'));
const IMC = lazy(() => import('./pages/IMC'));
const PressaoArterial = lazy(() => import('./pages/PressaoArterial'));

const Guia = lazy(() => import('./pages/Guia'));
const PerimetroCefalico = lazy(() => import('./pages/PerimetroCefalico'));
const AlvoParental = lazy(() => import('./pages/AlvoParental'));
const IdadeGestacionalCorrigida = lazy(() => import('./pages/IdadeGestacionalCorrigida'));
const CentorMcIsaac = lazy(() => import('./pages/CentorMcIsaac'));
const Vacinas = lazy(() => import('./pages/Vacinas'));
const Amamentacao = lazy(() => import('./pages/Amamentacao'));
const Contato = lazy(() => import('./pages/Contato'));

const Contact = lazy(() => import('./pages/Contact'));
const CartilhaDesenvolvimento = lazy(() => import('./pages/CartilhaDesenvolvimento'));
const Settings = lazy(() => import('./pages/Settings'));
const WoodDownes = lazy(() => import('./pages/WoodDownes'));
const PRAM = lazy(() => import('./pages/PRAM'));
const DrogasEmergencia = lazy(() => import('./pages/DrogasEmergencia'));
const CurvasCrescimento = lazy(() => import('./pages/CurvasCrescimento'));
const CalculadorasHub = lazy(() => import('./pages/CalculadorasHub.jsx'));

const Dosagens = lazy(() => import('./pages/Dosagens'));
const APGAR = lazy(() => import('./pages/calculadoras/APGAR'));
const GlasgowPediatrico = lazy(() => import('./pages/calculadoras/GlasgowPediatrico'));
const PEWS = lazy(() => import('./pages/calculadoras/PEWS'));
const SIPA = lazy(() => import('./pages/calculadoras/SIPA'));
const SilvermanAnderson = lazy(() => import('./pages/calculadoras/SilvermanAnderson'));
const EscoreRodwell = lazy(() => import('./pages/calculadoras/EscoreRodwell'));
const PASAsma = lazy(() => import('./pages/calculadoras/PASAsma'));
const Favoritos = lazy(() => import('./pages/Favoritos'));
const FavoritosPage = lazy(() => import('./pages/FavoritosPage'));
const ExplorarFerramentas = lazy(() => import('./pages/ExplorarFerramentas'));
const Biblioteca = lazy(() => import('./pages/Biblioteca'));

const SinaisVitais = lazy(() => import('./pages/SinaisVitais'));
const Admin = lazy(() => import('./pages/Admin'));
const Perfil = lazy(() => import('./pages/Perfil'));
const RastreioPreventivo = lazy(() => import('./pages/RastreioPreventivo'));

function LibraryRedirect({tab}) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  params.set('tab', tab);
  return <Navigate to={`/biblioteca?${params}`} replace />;
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <AuthProvider>
      <FavoritesProvider>
      <DosagemFavoritesProvider>
      <PageFavoritesProvider>
      <Router>
        <Suspense fallback={<div className="clinical-page" role="status">Carregando página…</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/calculadoras" element={<CalculadorasHub />} />
            <Route path="/guia" element={<Guia />} />
            <Route path="/hidratacao" element={<Hidratacao />} />
            <Route path="/imc" element={<IMC />} />
            <Route path="/pressao-arterial" element={<PressaoArterial />} />
            <Route path="/perimetro-cefalico" element={<PerimetroCefalico />} />
            <Route path="/alvo-parental" element={<AlvoParental />} />
            <Route path="/ictericia" element={<Ictericia />} />
            <Route path="/horas-de-vida" element={<HorasDeVida />} />
            <Route path="/idade-gestacional" element={<IdadeGestacional />} />
            <Route path="/idade-gestacional-corrigida" element={<IdadeGestacionalCorrigida />} />
            <Route path="/centor-mcisaac" element={<CentorMcIsaac />} />
            <Route path="/vacinas" element={<Vacinas />} />
            <Route path="/amamentacao" element={<Amamentacao />} />
            <Route path="/seguranca-amamentacao" element={<Navigate to="/amamentacao" replace />} />
            <Route path="/contato" element={<Contato />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/desenvolvimento" element={<CartilhaDesenvolvimento />} />
            <Route element={<ProtectedRoute />}><Route path="/settings" element={<Settings />} /></Route>
            <Route path="/wood-downes" element={<WoodDownes />} />
            <Route path="/pram" element={<PRAM />} />
            <Route path="/drogas-emergencia" element={<DrogasEmergencia />} />
            <Route path="/calculadoras-hub" element={<Navigate to="/calculadoras" replace />} />
            <Route path="/calculadoras/:id" element={<ClinicalCalculator />} />
            <Route path="/condutas" element={<LibraryRedirect tab="condutas" />} />
            <Route path="/protocolos" element={<LibraryRedirect tab="protocolos" />} />
            <Route path="/resumos" element={<LibraryRedirect tab="condutas" />} />

            <Route path="/dosagens" element={<Dosagens />} />
            <Route path="/apgar" element={<APGAR />} />
            <Route path="/glasgow-pediatrico" element={<GlasgowPediatrico />} />
            <Route path="/pews" element={<PEWS />} />
            <Route path="/sipa" element={<SIPA />} />
            <Route path="/silverman-anderson" element={<SilvermanAnderson />} />
            <Route path="/rodwell" element={<EscoreRodwell />} />
            <Route path="/pas-asma" element={<PASAsma />} />
            <Route path="/favoritos" element={<FavoritosPage />} />
            <Route path="/ferramentas" element={<ExplorarFerramentas />} />
            <Route path="/biblioteca" element={<Biblioteca />} />
            <Route path="/curvas-crescimento" element={<CurvasCrescimento />} />
            <Route path="/sinais-vitais" element={<SinaisVitais />} />

            <Route element={<ProtectedRoute admin />}><Route path="/admin" element={<Admin />} /></Route>
            <Route element={<ProtectedRoute />}><Route path="/perfil" element={<Perfil />} /></Route>
            <Route path="/rastreio-preventivo" element={<RastreioPreventivo />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </Suspense>
        <Toaster /><Notifications richColors />
      </Router>
      </PageFavoritesProvider>
      </DosagemFavoritesProvider>
      </FavoritesProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App