import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { trackWhatsAppConversion, trackPhoneConversion, getWhatsAppUrl, ServiceType } from "@/lib/tracking";

interface ContactProps {
  whatsappMessage?: string;
  service?: ServiceType;
  ctaText?: string;
}

export const Contact = ({
  whatsappMessage,
  service = "home",
  ctaText = "Falar com Técnico no WhatsApp",
}: ContactProps) => {
  const whatsappUrl = getWhatsAppUrl(service, whatsappMessage);

  return (
    <section id="contato" className="bg-[#060D17] text-white py-16 sm:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0284C7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="max-w-[780px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#FDE68A] text-xs font-mono font-semibold uppercase tracking-wider mb-5">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            <span>1 Ano de Garantia por Escrito</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] tracking-[-0.03em] mb-5">
            Sua lava e seca funcionando perfeitamente hoje mesmo.
          </h2>

          <p className="font-sans text-base sm:text-lg text-white/70 max-w-[620px] mx-auto leading-relaxed mb-8">
            Envie uma mensagem pelo WhatsApp agora. Nosso técnico em rota na Baixada Santista responderá de imediato para agendar seu atendimento a domicílio.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={whatsappUrl}
              onClick={trackWhatsAppConversion}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#22C55E] hover:bg-[#1eb354] text-[#052611] font-heading font-bold text-base sm:text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-[#22C55E]/20 transition-all duration-150 active:scale-95 text-center"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="tel:13992095947"
              onClick={trackPhoneConversion}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-heading font-semibold text-base px-6 py-4 rounded-lg border border-white/20 transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-[#22C55E]" />
              <span>(13) 99209-5947</span>
            </a>
          </div>

          {/* Micro badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
              Atendimento a domicílio
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
              Peças novas e originais
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              Segunda a Sábado das 8h às 18h30
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
