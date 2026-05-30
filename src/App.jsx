import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from '@/hooks/useFavorites.jsx';
import { DosagemFavoritesProvider } from '@/hooks/useDosagemFavorites.jsx';
import { PageFavoritesProvider } from '@/hooks/usePageFavorites.jsx';
import PageNotFound from './lib/PageNotFound';
import Layout from './components/Layout';
// Add page imports here
import Home from './pages/Home';
import Calculadoras from './pages/Calculadoras';
import Hidratacao from './pages/Hidratacao';
import IMC from './pages/IMC';
import PressaoArterial from './pages/PressaoArterial';
import Protocolos from './pages/Protocolos.jsx';
import Guia from './pages/Guia';
import Pesquisa from './pages/Pesquisa';
import PerimetroCefalico from './pages/PerimetroCefalico';
import AlvoParental from './pages/AlvoParental';
import IdadeGestacionalCorrigida from './pages/IdadeGestacionalCorrigida';
import CentorMcIsaac from './pages/CentorMcIsaac';
import Vacinas from './pages/Vacinas';
import Contato from './pages/Contato';
import About from './pages/About';
import Contact from './pages/Contact';
import CartilhaDesenvolvimento from './pages/CartilhaDesenvolvimento';
import Settings from './pages/Settings';
import WoodDownes from './pages/WoodDownes';
import PRAM from './pages/PRAM';
import DrogasEmergencia from './pages/DrogasEmergencia';
import CurvasCrescimento from './pages/CurvasCrescimento';
import CalculadorasHub from './pages/CalculadorasHub.jsx';
import Resumos from './pages/Resumos';
import Dosagens from './pages/Dosagens';
import APGAR from './pages/calculadoras/APGAR';
import GlasgowPediatrico from './pages/calculadoras/GlasgowPediatrico';
import PEWS from './pages/calculadoras/PEWS';
import SIPA from './pages/calculadoras/SIPA';
import SilvermanAnderson from './pages/calculadoras/SilvermanAnderson';
import EscoreRodwell from './pages/calculadoras/EscoreRodwell';
import PASAsma from './pages/calculadoras/PASAsma';
import Favoritos from './pages/Favoritos';
import FavoritosPage from './pages/FavoritosPage';
import ExplorarFerramentas from './pages/ExplorarFerramentas';
import Biblioteca from './pages/Biblioteca';
import SinaisVitais from './pages/SinaisVitais';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <FavoritesProvider>
      <DosagemFavoritesProvider>
      <PageFavoritesProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/calculadoras" element={<Calculadoras />} />
            <Route path="/guia" element={<Guia />} />
            <Route path="/hidratacao" element={<Hidratacao />} />
            <Route path="/imc" element={<IMC />} />
            <Route path="/pressao-arterial" element={<PressaoArterial />} />
            <Route path="/protocolos" element={<Protocolos />} />
            <Route path="/pesquisa" element={<Pesquisa />} />
            <Route path="/perimetro-cefalico" element={<PerimetroCefalico />} />
            <Route path="/alvo-parental" element={<AlvoParental />} />
            <Route path="/idade-gestacional-corrigida" element={<IdadeGestacionalCorrigida />} />
            <Route path="/centor-mcisaac" element={<CentorMcIsaac />} />
            <Route path="/vacinas" element={<Vacinas />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/desenvolvimento" element={<CartilhaDesenvolvimento />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/wood-downes" element={<WoodDownes />} />
            <Route path="/pram" element={<PRAM />} />
            <Route path="/drogas-emergencia" element={<DrogasEmergencia />} />
            <Route path="/calculadoras-hub" element={<CalculadorasHub />} />
            <Route path="/resumos" element={<Resumos />} />
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
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
      </PageFavoritesProvider>
      </DosagemFavoritesProvider>
      </FavoritesProvider>
    </QueryClientProvider>
  )
}

export default App