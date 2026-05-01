import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from '@/hooks/useFavorites.jsx';
import PageNotFound from './lib/PageNotFound';
import Layout from './components/Layout';
// Add page imports here
import Home from './pages/Home';
import Hidratacao from './pages/Hidratacao';
import IMC from './pages/IMC';
import PressaoArterial from './pages/PressaoArterial';
import Protocolos from './pages/Protocolos.jsx';
import Guia from './pages/Guia';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <FavoritesProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/guia" element={<Guia />} />
            <Route path="/hidratacao" element={<Hidratacao />} />
            <Route path="/imc" element={<IMC />} />
            <Route path="/pressao-arterial" element={<PressaoArterial />} />
            <Route path="/protocolos" element={<Protocolos />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
      </FavoritesProvider>
    </QueryClientProvider>
  )
}

export default App