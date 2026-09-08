import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import Guarantee from "@/components/Guarantee";
import Coverage from "@/components/Coverage";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ShieldAlert, Compass, Droplets, CheckCircle2, ArrowRight, Gauge, Wrench } from "lucide-react";
import { trackWhatsAppConversion } from "@/lib/tracking";

const installationSteps = [
  {
    icon: ShieldAlert,
    title: "Remoção dos parafusos trava-tambor",
    desc: "Aparelhos novos saem de fábrica com 4 parafusos traseiros travando o cesto. Ligar a máquina sem retirá-los pode destruir a carcaça interna no primeiro ciclo. Removemos e guardamos para futuras mudanças.",
    tags: ["Trava de fábrica", "Proteção do tambor", "Sem danos estruturais"],
  },
  {
    icon: Compass,
    title: "Nivelamento milimétrico com nível de bolha",
    desc: "Ajuste preciso dos 4 pés com chave especial em pisos desnivelados de lavanderia. Impede que a máquina 'ande', trepide ou bata as laterais durante a centrifugação.",
    tags: ["Anti-vibração", "Sem ruído", "Pés ajustáveis", "Nível digital"],
  },
  {
    icon: Droplets,
    title: "Conexão hidráulica e teste de estanqueidade",
    desc: "Instalação segura de mangueiras de entrada com filtros de malha e fixação do duto de esgoto na altura correta (entre 65cm e 100cm) para evitar sifonamento e retorno de esgoto.",
    tags: ["Sem vazamentos", "Altura do dreno", "Vedações novas", "Pressão d'água"],
  },
  {
    icon: Gauge,
    title: "Teste completo de ciclo e calibração",
    desc: "Rodamos um ciclo completo de abastecimento, lavagem, enxágue e centrifugação na sua frente, verificando amortecedores e sensores de balanceamento antes da entrega.",
    tags: ["Ciclo teste", "Calibração", "Garantia 1 ano", "Tudo verificado"],
  },
];

const installationFaqs = [
  {
    q: "Por que não devo ligar a lava e seca sem retirar as travas de transporte?",
    a: "Os parafusos traseiros travam o tambor rigidamente para a viagem. Se você ligar a máquina com eles instalados, as vibrações do motor não serão absorvidas pelos amortecedores, o que pode quebrar a cuba, arrebentar a fiação ou danificar o motor no primeiro uso.",
  },
  {
    q: "Vocês instalam torneiras e registros adequados?",
    a: "Sim. Nossos técnicos contam com conexões, adaptadores de rosca, filtros e fita veda-rosca apropriada para adequar pontos de água e esgoto padrão da Baixada Santista.",
  },
  {
    q: "A instalação tem garantia?",
    a: "Sim! Toda a mão de obra de instalação e conexões conta com 1 ano completo de garantia por escrito contra vazamentos, desalinhamentos ou trepidações.",
  },
  {
    q: "Vocês atendem em apartamentos e condomínios fechados?",
    a: "Sim. Atendemos com pontualidade e normas de condomínio em Praia Grande, Santos, Guarujá e Riviera de São Lourenço (Bertioga).",
  },
];

export const InstalacaoLavaESeca = () => {
  const WHATSAPP_INSTALACAO = "Olá, gostaria de agendar a instalação da minha máquina de lavar/lava e seca.";
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Instalação de Lava e Seca na Baixada Santista",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "ProLav Litoral",
      "telephone": "+5513992095947",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Praia Grande",
        "addressRegion": "SP",
        "addressCountry": "BR"
      }
    },
    "areaServed": ["Praia Grande", "Santos", "Guarujá", "Bertioga"]
  };

  return (
    <>
      <Helmet>
        <title>Instalação Profissional de Lava e Seca na Baixada Santista | ProLav</title>
        <meta
          name="description"
          content="Instalação técnica de lava e seca e lavadoras novas ou pós-mudança em Praia Grande, Santos, Guarujá e Bertioga. Remoção de parafusos trava e nivelamento."
        />
        <meta
          name="keywords"
          content="instalacao lava e seca praia grande, instalar maquina de lavar santos, trava de transporte lava e seca, nivelamento lava e seca guaruja"
        />
        <link rel="canonical" href="https://www.prolavlitoral.com.br/instalacao-lava-e-seca" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#081220] text-white">
        <Header currentRoute="/instalacao-lava-e-seca" whatsappMessage={WHATSAPP_INSTALACAO} />

        <main>
          {/* Hero Section for Installation */}
          <Hero
            badgeRegion="Praia Grande, Santos, Guarujá e Bertioga"
            badgeCredential="Padrão de Fábrica · 1 Ano de Garantia"
            title={
              <>
                Instalação Profissional de Lava e Seca e Lavadoras<br />
                <span className="text-[#38BDF8]">na Baixada Santista com</span><br />
                <span className="gold-text-shimmer">1 Ano de Garantia por Escrito.</span>
              </>
            }
            description="Comprou aparelho novo ou acabou de se mudar? Evite vibrações perigosas e perda de garantia de fábrica. Remoção correta de travas, nivelamento anti-ruído e conexões seguras."
            whatsappMessage={WHATSAPP_INSTALACAO}
            ctaText="Agendar Instalação Segura"
          />

          <Brands />

          {/* Dedicated Section: Etapas Críticas de Instalação */}
          <section className="bg-[#F8FAFC] text-[#0F172A] py-16 sm:py-24">
            <div className="container-max">
              <div className="max-w-[640px] mb-12">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
                  01 — Segurança & Conformidade
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4 text-[#0F172A]">
                  O que é essencial na instalação técnica?
                </h2>
                <p className="font-sans text-base text-[#64748B]">
                  Mais de 40% das quebras prematuras de lava e seca decorrem de instalação incorreta sem retirada das travas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {installationSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const waRefUrl = `https://wa.me/5513992095947?text=${encodeURIComponent(`Olá! Preciso de instalação profissional para minha máquina: ${step.title}`)}`;

                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#0284C7] transition-all hover:shadow-lg"
                    >
                      <div>
                        <div className="w-11 h-11 rounded-lg bg-sky-50 flex items-center justify-center text-[#0284C7] mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-[#0F172A] mb-2.5 leading-snug">
                          {step.title}
                        </h3>
                        <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-4">
                          {step.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {step.tags.map((t, i) => (
                            <span key={i} className="font-sans text-xs text-[#334155] bg-[#F1F5F9] rounded px-2.5 py-1 font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={waRefUrl}
                        onClick={trackWhatsAppConversion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans font-bold text-sm text-[#0284C7] hover:text-[#0369A1] pt-4 border-t border-[#E2E8F0]"
                      >
                        <span>Solicitar agendamento</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <HowItWorks />

          <Guarantee
            serviceImage="/images/servico-instalacao.webp"
            imageAlt="Instalação nivelada e segura de lava e seca"
            caption="Nivelamento técnico milimétrico, remoção de parafusos de transporte e teste no local."
          />

          <Coverage />
          <SocialProof />

          {/* Specialized FAQ for Installation */}
          <section className="bg-[#081220] text-white py-16 sm:py-24 border-t border-white/10">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-5">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
                    06 — Dúvidas de Instalação
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                    Tudo sobre a instalação
                  </h2>
                  <p className="font-sans text-base text-white/65 leading-relaxed">
                    Proteja seu investimento e garanta o máximo rendimento do seu aparelho.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  {installationFaqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={i}
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="border-b border-white/10 py-5 sm:py-6 cursor-pointer select-none group"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-heading font-semibold text-base sm:text-lg text-white group-hover:text-[#0284C7] transition-colors">
                            {faq.q}
                          </h3>
                          <span className="font-heading text-2xl font-light text-[#F59E0B] leading-none shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>
                        {isOpen && (
                          <p className="font-sans text-sm sm:text-[15.5px] text-white/70 leading-relaxed mt-3.5 max-w-[620px]">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <Contact
            whatsappMessage={WHATSAPP_INSTALACAO}
            ctaText="Agendar Instalação no WhatsApp"
          />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_INSTALACAO} />
      </div>
    </>
  );
};

export default InstalacaoLavaESeca;
