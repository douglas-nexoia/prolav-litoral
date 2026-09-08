import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import Index from "./pages/Index";
import ConsertoLavaESeca from "./pages/ConsertoLavaESeca";
import InstalacaoLavaESeca from "./pages/InstalacaoLavaESeca";
import HigienizacaoLavaESeca from "./pages/HigienizacaoLavaESeca";
import NotFound from "./pages/NotFound";

const App = () => (
  <HelmetProvider>
    <SpeedInsights />
    <Analytics />
    <BrowserRouter>
      <Routes>
        {/* Rota 4: Home Hub */}
        <Route path="/" element={<Index />} />

        {/* Rota 1: Conserto & Reparo de Urgência (Carro-Chefe) */}
        <Route path="/conserto-lava-e-seca" element={<ConsertoLavaESeca />} />
        <Route path="/conserto" element={<ConsertoLavaESeca />} />
        <Route path="/conserto-lavadora" element={<ConsertoLavaESeca />} />
        <Route path="/reparo" element={<ConsertoLavaESeca />} />

        {/* Rota 2: Instalação Padrão de Fábrica */}
        <Route path="/instalacao-lava-e-seca" element={<InstalacaoLavaESeca />} />
        <Route path="/instalacao" element={<InstalacaoLavaESeca />} />
        <Route path="/instalacao-lavadora" element={<InstalacaoLavaESeca />} />

        {/* Rota 3: Higienização Profunda & Descontaminação */}
        <Route path="/higienizacao-lava-e-seca" element={<HigienizacaoLavaESeca />} />
        <Route path="/higienizacao" element={<HigienizacaoLavaESeca />} />
        <Route path="/limpeza" element={<HigienizacaoLavaESeca />} />
        <Route path="/limpeza-lava-e-seca" element={<HigienizacaoLavaESeca />} />

        {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
