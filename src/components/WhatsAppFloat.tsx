import { MessageCircle } from "lucide-react";
import { trackWhatsAppConversion, getWhatsAppUrl, ServiceType } from "@/lib/tracking";

interface WhatsAppFloatProps {
  whatsappMessage?: string;
  service?: ServiceType;
}

export const WhatsAppFloat = ({
  whatsappMessage,
  service = "home",
}: WhatsAppFloatProps) => {
  const whatsappUrl = getWhatsAppUrl(service, whatsappMessage);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={whatsappUrl}
        onClick={(e) => {
          e.currentTarget.href = getWhatsAppUrl(service, whatsappMessage);
          trackWhatsAppConversion();
        }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#22C55E] text-slate-950 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Glow & Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#22C55E] animate-ping opacity-25 pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#052611]" />

        {/* Hover Tooltip (Desktop) */}
        <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center whitespace-nowrap bg-[#0F1D30] text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-lg pointer-events-none">
          <span>Técnico online na Baixada</span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
