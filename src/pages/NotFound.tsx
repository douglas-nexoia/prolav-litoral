import { Helmet } from "react-helmet-async";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWhatsAppUrl, trackWhatsAppConversion } from "@/lib/tracking";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página Não Encontrada (404) | ProLav Litoral</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-[#081220] text-white flex flex-col justify-between">
        <Header />

        <main className="container-max py-24 text-center">
          <div className="max-w-[540px] mx-auto">
            <div className="font-mono text-5xl sm:text-7xl font-extrabold text-[#F59E0B] mb-4">
              404
            </div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl mb-4">
              Página não encontrada
            </h1>
            <p className="font-sans text-base text-white/60 mb-8 leading-relaxed">
              O endereço que você tentou acessar não existe ou mudou de local. Volte à página inicial ou entre em contato direto com o nosso técnico.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm px-6 py-3 rounded-lg border border-white/20 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao Início</span>
              </a>

              <a
                href={getWhatsAppUrl("home")}
                onClick={(e) => {
                  e.currentTarget.href = getWhatsAppUrl("home");
                  trackWhatsAppConversion();
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#1eb354] text-[#052611] font-heading font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
