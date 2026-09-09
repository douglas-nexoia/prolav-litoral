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
import { Sparkles, Wind, ShieldCheck, Flame, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { trackWhatsAppConversion } from "@/lib/tracking";

const sanitizationBenefits = [
  {
    icon: Sparkles,
    title: "Eliminação total de mofo na borracha da porta",
    desc: "A umidade retida na gaxeta frontal cria fungos pretos e bolor que mancham tecidos claros. Aplicamos sanitizante antimicrobiano específico que limpa e desinfeta a borracha sem danificar a vedação.",
    tags: ["Sem bolor", "Borracha nova", "Sem fungos", "Tecidos protegidos"],
  },
  {
    icon: Wind,
    title: "Fim do mau cheiro nas roupas lavadas",
    desc: "Resíduos acumulados de sabão em pó, amaciante e gordura orgânica formam uma pasta fétida atrás do cesto de inox. Removemos mecanicamente e quimicamente todos os depósitos com bactericida.",
    tags: ["Roupas cheirosas", "Sem odor de esgoto", "Higienização interna"],
  },
  {
    icon: Flame,
    title: "Desobstrução do duto de secagem e fiapos",
    desc: "O acúmulo de penugens e fiapos de tecido bloqueia o fluxo de ar quente, dobrando o tempo para secar as roupas e elevando a conta de energia. Limpeza completa do duto e do ventilador de secagem.",
    tags: ["Secagem rápida", "Economia de energia", "Sem fiapos", "Prevenção"],
  },
  {
    icon: ShieldCheck,
    title: "Desinfecção profunda com bactericida homologado",
    desc: "Utilizamos produtos profissionais com laudo de eficácia que eliminam 99,9% de ácaros, bactérias e germes, garantindo higiene hospitalar para roupas de bebês e pessoas alérgicas.",
    tags: ["Bactericida ANVISA", "Proteção para bebês", "Anti-alérgico", "Saúde familiar"],
  },
];

const sanitizationFaqs = [
  {
    q: "De quanto em quanto tempo devo higienizar minha lava e seca?",
    a: "Recomenda-se a cada 6 a 12 meses, dependendo da frequência de uso. Na Baixada Santista, devido à alta umidade relativa do ar e maresia, o acúmulo de bolor na borracha e duto costuma ser mais acelerado.",
  },
  {
    q: "A higienização é feita na minha casa ou precisa levar a máquina?",
    a: "É feita 100% na sua casa! O técnico realiza a desmontagem frontal parcial, aplicação de vapor térmico e bactericida profissional sem molhar ou sujar seu piso.",
  },
  {
    q: "A higienização melhora o tempo de secagem das roupas?",
    a: "Sim, drasticamente! Quando o duto de secagem está entupido de fiapos, o ar quente não circula, fazendo ciclos de 3 horas terminarem com roupas úmidas. A limpeza desobstrui o fluxo e restabelece a secagem rápida.",
  },
  {
    q: "O produto utilizado tem cheiro forte ou faz mal para a saúde?",
    a: "Não. Utilizamos sanitizantes biodegradáveis hospitalares desenvolvidos especialmente para lavanderia. O produto enxágua totalmente sem deixar resíduos químicos ou cheiro nas roupas.",
  },
];

export const HigienizacaoLavaESeca = () => {
  const WHATSAPP_HIGIENIZACAO = "Olá, gostaria de um orçamento para higienização profunda da minha máquina.";
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Higienização de Lava e Seca na Baixada Santista",
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
        <title>Higienização de Lava e Seca na Baixada Santista | ProLav Litoral</title>
        <meta
          name="description"
          content="Higienização profunda de lava e seca: elimine mau cheiro, mofo preto na borracha e fiapos do duto de secagem em Praia Grande, Santos, Guarujá e Bertioga."
        />
        <meta
          name="keywords"
          content="higienizacao lava e seca praia grande, limpar borracha lava e seca santos, tirar cheiro de mofo lavadora, duto de secagem fiapos guaruja"
        />
        <link rel="canonical" href="https://www.prolavservice.com.br/higienizacao-lava-e-seca" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#081220] text-white">
        <Header currentRoute="/higienizacao-lava-e-seca" whatsappMessage={WHATSAPP_HIGIENIZACAO} />

        <main>
          {/* Hero Section for Sanitization */}
          <Hero
            badgeRegion="Praia Grande, Santos, Guarujá e Bertioga"
            badgeCredential="Bactericida Hospitalar · Cesto e Dutos"
            title={
              <>
                Higienização Profunda de Lava e Seca:<br />
                <span className="text-[#38BDF8]">Elimine Mau Cheiro, Mofo e Fiapos com</span><br />
                <span className="gold-text-shimmer">1 Ano de Garantia por Escrito.</span>
              </>
            }
            description="Roupas saindo com cheiro desagradável ou borracha com crosta preta? Descontaminação profunda no local com bactericida hospitalar, limpeza de dutos e recuperação da secagem rápida."
            whatsappMessage={WHATSAPP_HIGIENIZACAO}
            ctaText="Solicitar Higienização Completa"
          />

          <Brands />

          {/* Dedicated Section: Benefícios da Higienização Técnica */}
          <section className="bg-[#F8FAFC] text-[#0F172A] py-16 sm:py-24">
            <div className="container-max">
              <div className="max-w-[640px] mb-12">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
                  01 — Prevenção & Saúde
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4 text-[#0F172A]">
                  Por que a limpeza superficial não resolve?
                </h2>
                <p className="font-sans text-base text-[#64748B]">
                  Mais de 80% do mofo e dos fiapos ficam alojados atrás do cesto de inox e dentro do duto de ar quente, onde apenas a limpeza técnica consegue alcançar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sanitizationBenefits.map((item, idx) => {
                  const Icon = item.icon;
                  const waRefUrl = `https://wa.me/5513992095947?text=${encodeURIComponent(`Olá! Gostaria de agendar a higienização profunda para resolver: ${item.title}`)}`;

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
                          {item.title}
                        </h3>
                        <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-4">
                          {item.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {item.tags.map((t, i) => (
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
                        <span>Pedir orçamento no WhatsApp</span>
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
            serviceImage="/images/servico-higienizacao.webp"
            imageAlt="Higienização técnica de cesto e borracha de lava e seca"
            caption="Descontaminação com bactericida hospitalar e 1 ano de garantia no serviço."
          />

          <Coverage />
          <SocialProof />

          {/* Specialized FAQ for Sanitization */}
          <section className="bg-[#081220] text-white py-16 sm:py-24 border-t border-white/10">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-5">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
                    06 — Dúvidas de Higienização
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                    Dúvidas sobre a limpeza profunda
                  </h2>
                  <p className="font-sans text-base text-white/65 leading-relaxed">
                    Saiba como o procedimento protege a saúde da sua família e prolonga a vida útil da sua máquina.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  {sanitizationFaqs.map((faq, i) => {
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
            whatsappMessage={WHATSAPP_HIGIENIZACAO}
            ctaText="Solicitar Higienização no WhatsApp"
          />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_HIGIENIZACAO} />
      </div>
    </>
  );
};

export default HigienizacaoLavaESeca;
