import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Guarantee from "@/components/Guarantee";
import Coverage from "@/components/Coverage";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const Index = () => {
  const WHATSAPP_HOME = "Olá! Vim pelo site da ProLav Litoral e gostaria de um atendimento.";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "ProLav Litoral — Assistência Técnica de Lava e Seca",
    "image": "https://www.prolavservice.com.br/favicon.svg",
    "telephone": "+5513992095947",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Praia Grande",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "areaServed": ["Praia Grande", "Santos", "Guarujá", "Bertioga"],
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <title>ProLav Litoral | Conserto, Instalação e Higienização de Lava e Seca na Baixada Santista</title>
        <meta
          name="description"
          content="Assistência técnica especializada em Lava e Seca e Máquinas de Lavar na Baixada Santista: Praia Grande, Santos, Guarujá e Bertioga. Atendimento no mesmo dia com 1 ano de garantia."
        />
        <meta
          name="keywords"
          content="conserto lava e seca praia grande, tecnico lava e seca santos, conserto maquina de lavar guaruja, instalacao lava e seca bertioga, higienizacao maquina de lavar"
        />
        <link rel="canonical" href="https://www.prolavservice.com.br/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#081220] text-white">
        <Header currentRoute="/" whatsappMessage={WHATSAPP_HOME} />

        <main>
          {/* Hero Section */}
          <Hero
            badgeRegion="Praia Grande, Santos, Guarujá e Bertioga"
            badgeCredential="Atendimento no Mesmo Dia a Domicílio"
            title={
              <>
                Sua Lava e Seca Parou?<br />
                <span className="text-[#38BDF8]">Conserto no Mesmo Dia com</span><br />
                <span className="gold-text-shimmer">1 Ano de Garantia por Escrito.</span>
              </>
            }
            description="Atendimento técnico especializado a domicílio na Baixada Santista. Reparo de erros no painel, bomba, rolamento e placas com peças originais e técnicos em rota hoje."
            whatsappMessage={WHATSAPP_HOME}
            ctaText="Chamar Técnico no WhatsApp"
          />

          {/* Marcas Atendidas */}
          <Brands />

          {/* 01 - Serviços */}
          <Services />

          {/* 02 - Como Funciona */}
          <HowItWorks />

          {/* 03 - Garantia de 1 Ano */}
          <Guarantee
            serviceImage="/images/servico-conserto.webp"
            imageAlt="Conserto e diagnóstico técnico de lava e seca na Baixada Santista"
            caption="Diagnóstico transparente no local com 1 ano de garantia por escrito."
          />

          {/* 04 - Região Atendida */}
          <Coverage />

          {/* 05 - Avaliações */}
          <SocialProof />

          {/* 06 - FAQ */}
          <FAQ />

          {/* 07 - Contato */}
          <Contact whatsappMessage={WHATSAPP_HOME} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_HOME} />
      </div>
    </>
  );
};

export default Index;
