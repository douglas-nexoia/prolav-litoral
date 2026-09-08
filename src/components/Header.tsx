import { Phone } from "lucide-react";
import { trackWhatsAppConversion, trackPhoneConversion } from "@/lib/tracking";

interface HeaderProps {
  currentRoute?: string;
  whatsappMessage?: string;
}

const Header = ({
  currentRoute = "/",
  whatsappMessage = "Olá! Vim pelo site da ProLav Litoral e gostaria de um atendimento.",
}: HeaderProps) => {
  const whatsappUrl = `https://wa.me/5513992095947?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#081220]/94 backdrop-blur-[14px] border-b border-white/10 transition-all duration-200">
      <div className="container-max flex items-center justify-between h-20">
        {/* Brand / Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-[#0284C7] transition-colors">
              ProLav<span className="text-[#0284C7]">.</span>Litoral
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F59E0B] -mt-1 font-semibold">
              Lava e Seca · 1 Ano Garantia
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <a
            href="/"
            className={`font-sans text-sm font-medium transition-colors ${
              currentRoute === "/" ? "text-white font-semibold" : "text-white/70 hover:text-white"
            }`}
          >
            Início
          </a>
          <a
            href="/conserto-lava-e-seca"
            className={`font-sans text-sm font-medium transition-colors ${
              currentRoute === "/conserto-lava-e-seca"
                ? "text-[#0284C7] font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            Conserto & Reparo
          </a>
          <a
            href="/instalacao-lava-e-seca"
            className={`font-sans text-sm font-medium transition-colors ${
              currentRoute === "/instalacao-lava-e-seca"
                ? "text-[#0284C7] font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            Instalação
          </a>
          <a
            href="/higienizacao-lava-e-seca"
            className={`font-sans text-sm font-medium transition-colors ${
              currentRoute === "/higienizacao-lava-e-seca"
                ? "text-[#0284C7] font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            Higienização
          </a>
        </nav>

        {/* Contact info & CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Clickable Mono Phone with Direct Conversion Tracking */}
          <a
            href="tel:13992095947"
            onClick={trackPhoneConversion}
            className="hidden sm:flex items-center gap-2.5 text-white/90 hover:text-white transition-colors group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_0_3px_rgba(34,197,94,0.25)] animate-pulse" />
            <span className="font-mono text-sm font-semibold text-white/95 group-hover:text-white">
              (13) 99209-5947
            </span>
          </a>

          {/* Primary WhatsApp CTA Button */}
          <a
            href={whatsappUrl}
            onClick={trackWhatsAppConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#1eb354] text-[#052611] font-sans font-bold text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5 rounded-md shadow-sm transition-all duration-150 active:scale-95"
          >
            <span className="w-2 h-2 rounded-full bg-[#052611]" />
            <span>Chamar WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
