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
import { AlertTriangle, Droplets, Volume2, Lock, ArrowRight, Wrench, Zap, CheckCircle2 } from "lucide-react";
import { trackWhatsAppConversion, getWhatsAppUrl } from "@/lib/tracking";

const repairProblems = [
  {
    icon: AlertTriangle,
    title: "Erros no painel digital (DE, 4E, OE, LE, IE, dE)",
    desc: "Códigos de falha indicam pane na trava da porta, válvula de entrada de água, bomba de drenagem ou sensor de nível (pressostato). Diagnóstico eletrônico preciso no local.",
    tags: ["Códigos de erro", "Sensor de nível", "Válvula de água", "Eletrônica"],
  },
  {
    icon: Volume2,
    title: "Barulho ensurdecedor ou não centrifuga",
    desc: "Ruído semelhante a uma turbina ou batidas fortes durante a rotação indicam desgaste no conjunto de rolamentos e retentor. Substituímos por rolamentos blindados originais.",
    tags: ["Rolamento blindado", "Retentor", "Sem vibração", "Centrifugação"],
  },
  {
    icon: Droplets,
    title: "Água não escoa ou vaza por baixo",
    desc: "Geralmente provocado por obstrução no filtro de moedas, objeto travando o rotor da bomba de drenagem ou mangueira ressecada/perfurada. Desobstrução e troca imediata.",
    tags: ["Bomba de drenagem", "Filtro obstruído", "Sem poças", "Vazamento"],
  },
  {
    icon: Lock,
    title: "Porta travada com roupas presas",
    desc: "Falha na trava térmica ou eletromagnética da tampa impede a abertura após o término do ciclo. Realizamos o destravamento seguro sem quebrar o puxador e trocamos a trava.",
    tags: ["Trava da porta", "Destravamento seguro", "Sem quebrar", "Roupas salvas"],
  },
  {
    icon: Zap,
    title: "Máquina não liga, pisca ou apaga do nada",
    desc: "Picos de energia e maresia litorânea afetam a placa de controle ou a placa inversora de potência. Reparamos ou substituímos com componentes protegidos contra umidade.",
    tags: ["Placa Inverter", "Placa de potência", "Proteção maresia", "Elétrica"],
  },
  {
    icon: Wrench,
    title: "Lava e Seca não seca ou roupas úmidas",
    desc: "Acúmulo de fiapos no duto de secagem, queima da resistência de aquecimento ou falha no termostato e motor de ventilação. Limpeza do duto e troca do elemento de calor.",
    tags: ["Duto de secagem", "Resistência", "Termostato", "Secagem perfeita"],
  },
];

const repairFaqs = [
  {
    q: "O técnico consegue consertar a lava e seca hoje mesmo?",
    a: "Sim! Se você entrar em contato dentro do horário comercial, enviamos o técnico que estiver mais próximo na rota da sua cidade (Praia Grande, Santos, Guarujá ou Bertioga) para realizar o diagnóstico e reparo no mesmo dia.",
  },
  {
    q: "A garantia de 1 ano vale para conserto de motor e rolamento?",
    a: "Sim. Nossa garantia de 1 ano (365 dias) por escrito cobre todo o serviço executado e todas as peças novas substituídas, inclusive rolamentos, retentores, bombas, travas e placas.",
  },
  {
    q: "Preciso tirar a água da máquina antes de o técnico chegar?",
    a: "Não é necessário. Nossos técnicos contam com equipamentos e recipientes para drenar a água com segurança no próprio local sem molhar sua lavanderia.",
  },
  {
    q: "Vocês atendem marcas importadas e nacionais?",
    a: "Sim. Especialização técnica em Samsung, LG, Midea, Electrolux, Brastemp e Panasonic, das linhas convencionais até os motores Inverter Direct Drive mais modernos.",
  },
];

export const ConsertoLavaESeca = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conserto de Lava e Seca na Baixada Santista",
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
        <title>Conserto de Lava e Seca na Baixada Santista | 1 Ano de Garantia | ProLav</title>
        <meta
          name="description"
          content="Sua Lava e Seca ou Máquina de Lavar parou? Conserto rápido no mesmo dia em Praia Grande, Santos, Guarujá e Bertioga com 1 ano de garantia formal por escrito."
        />
        <meta
          name="keywords"
          content="conserto lava e seca praia grande, conserto lavadora santos, erro DE samsung, erro OE lg, barulho rolamento lava e seca"
        />
        <link rel="canonical" href="https://www.prolavservice.com.br/conserto-lava-e-seca" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#081220] text-white">
        <Header currentRoute="/conserto-lava-e-seca" service="conserto" />

        <main>
          {/* Hero Section for Repair */}
          <Hero
            badgeRegion="Praia Grande, Santos, Guarujá e Bertioga"
            badgeCredential="Atendimento de Urgência no Mesmo Dia"
            title={
              <>
                Sua Lava e Seca ou Lavadora Parou?<br />
                <span className="text-[#38BDF8]">Conserto Rápido no Mesmo Dia com</span><br />
                <span className="gold-text-shimmer">1 Ano de Garantia por Escrito.</span>
              </>
            }
            description="Não perca roupas molhadas nem acumule pilhas de lavanderia. Diagnóstico preciso no local, técnicos especializados multimarcas e garantia formal de 365 dias na OS."
            service="conserto"
            ctaText="Chamar Técnico Agora no WhatsApp"
          />

          <Brands />

          {/* Dedicated Section: Sintomas Mais Frequentes */}
          <section className="bg-[#F8FAFC] text-[#0F172A] py-16 sm:py-24">
            <div className="container-max">
              <div className="max-w-[640px] mb-12">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
                  01 — Diagnóstico de Falhas
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4 text-[#0F172A]">
                  Qual é o defeito da sua lava e seca?
                </h2>
                <p className="font-sans text-base text-[#64748B]">
                  Identificamos a causa raiz para restabelecer o funcionamento da sua máquina sem troca cega.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repairProblems.map((p, idx) => {
                  const Icon = p.icon;
                  const waRefUrl = getWhatsAppUrl("conserto", `Olá! Vim pelo site, gostaria de um atendimento para conserto de Lava e Seca (${p.title}).`);

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
                          {p.title}
                        </h3>
                        <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-4">
                          {p.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {p.tags.map((t, i) => (
                            <span key={i} className="font-sans text-xs text-[#334155] bg-[#F1F5F9] rounded px-2.5 py-1 font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={waRefUrl}
                        onClick={(e) => {
                          e.currentTarget.href = getWhatsAppUrl("conserto", `Olá! Vim pelo site, gostaria de um atendimento para conserto de Lava e Seca (${p.title}).`);
                          trackWhatsAppConversion();
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans font-bold text-sm text-[#0284C7] hover:text-[#0369A1] pt-4 border-t border-[#E2E8F0]"
                      >
                        <span>Pedir conserto deste problema</span>
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
            serviceImage="/images/servico-conserto.webp"
            imageAlt="Conserto no local de lava e seca com garantia formal de 1 ano"
            caption="Técnicos equipados com peças originais e 1 ano de garantia por escrito."
          />

          <Coverage />
          <SocialProof />

          {/* FAQ Específico de Conserto */}
          <section className="bg-[#081220] text-white py-16 sm:py-24 border-t border-white/10">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-5">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
                    06 — Dúvidas de Conserto
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                    Perguntas sobre o reparo
                  </h2>
                  <p className="font-sans text-base text-white/65 leading-relaxed">
                    Entenda como funciona o agendamento de urgência e a garantia estendida de 1 ano.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  {repairFaqs.map((faq, i) => {
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
            service="conserto"
            ctaText="Chamar Técnico no WhatsApp Agora"
          />
        </main>

        <Footer />
        <WhatsAppFloat service="conserto" />
      </div>
    </>
  );
};

export default ConsertoLavaESeca;
