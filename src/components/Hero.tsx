import React from "react";
import { Phone, ArrowRight, ShieldCheck, Clock, Home } from "lucide-react";
import { trackWhatsAppConversion, trackPhoneConversion, getWhatsAppUrl, ServiceType } from "@/lib/tracking";
import GoldenGuaranteeBadge from "./GoldenGuaranteeBadge";

interface HeroProps {
  badgeRegion?: string;
  badgeCredential?: string;
  title: React.ReactNode;
  description: string;
  whatsappMessage?: string;
  service?: ServiceType;
  ctaText?: string;
}

const Hero = ({
  badgeRegion = "Praia Grande, Santos, Guarujá e Bertioga",
  badgeCredential = "Atendimento no Mesmo Dia a Domicílio",
  title,
  description,
  whatsappMessage,
  service = "home",
  ctaText = "Chamar Técnico Agora no WhatsApp",
}: HeroProps) => {
  const whatsappUrl = getWhatsAppUrl(service, whatsappMessage);

  return (
    <section className="relative min-h-[600px] lg:min-h-[640px] flex items-center bg-[#081220] overflow-hidden border-b border-white/10">
      {/* Background Subtle Tech Texture */}
      <div
        className="absolute inset-0 bg-[#081220] z-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(2, 132, 199, 0.14) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="container-max w-full relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold">
                <Home className="w-3.5 h-3.5" />
                {badgeRegion}
              </span>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-amber-300 bg-amber-950/40 border border-amber-800/50 px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {badgeCredential}
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] tracking-[-0.03em] text-white mb-5">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-lg text-white/75 max-w-[640px] leading-relaxed mb-6">
              {description}
            </p>

            {/* Selo Dourado em Destaque Obrigatório */}
            <div className="mb-8 max-w-[560px]">
              <GoldenGuaranteeBadge />
            </div>

            {/* CTAs Duplos */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                onClick={(e) => {
                  e.currentTarget.href = getWhatsAppUrl(service, whatsappMessage);
                  trackWhatsAppConversion();
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#22C55E] hover:bg-[#1eb354] text-[#052611] font-heading font-bold text-base sm:text-[17px] px-6 py-3.5 rounded-lg shadow-lg hover:shadow-[#22C55E]/20 transition-all duration-150 active:scale-95 text-center"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:13992095947"
                onClick={trackPhoneConversion}
                className="inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-heading font-semibold text-base px-5 py-3.5 rounded-lg border border-white/20 hover:border-white/40 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-[#22C55E]" />
                <span>Ligar (13) 99209-5947</span>
              </a>
            </div>

            {/* 3 Numerical Verifiable Proofs */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-[620px]">
              <div>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#F59E0B]">
                  365 Dias
                </div>
                <div className="font-sans text-xs sm:text-sm text-white/60 mt-0.5">
                  1 ano de garantia por escrito
                </div>
              </div>
              <div className="border-l border-white/10 pl-3 sm:pl-6">
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-sky-400">
                  Hoje Mesmo
                </div>
                <div className="font-sans text-xs sm:text-sm text-white/60 mt-0.5">
                  Atendimento ágil na Baixada
                </div>
              </div>
              <div className="border-l border-white/10 pl-3 sm:pl-6">
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-emerald-400">
                  100% No Local
                </div>
                <div className="font-sans text-xs sm:text-sm text-white/60 mt-0.5">
                  Sem tirar a máquina de casa
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Photographic Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-transparent p-2 shadow-2xl">
              <div className="rounded-xl overflow-hidden aspect-[4/5] relative">
                <img
                  src="/images/hero-tecnico.webp"
                  alt="Técnico da ProLav Litoral consertando lava e seca"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081220] via-transparent to-black/30" />
                
                {/* Floating Card Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F1D30]/95 backdrop-blur-md border border-[#F59E0B]/40 rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FDE68A] uppercase">
                    <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                    <span>Ordem de Serviço Formal</span>
                  </div>
                  <p className="text-white/80 text-xs mt-1 leading-snug">
                    Técnico uniformizado, diagnóstico transparente e teste completo no local.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
