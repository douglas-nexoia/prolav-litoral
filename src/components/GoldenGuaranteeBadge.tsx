import { ShieldCheck, Award } from "lucide-react";

interface GoldenBadgeProps {
  className?: string;
  compact?: boolean;
}

export const GoldenGuaranteeBadge = ({ className = "", compact = false }: GoldenBadgeProps) => {
  if (compact) {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/40 shadow-[0_0_15px_rgba(245,158,11,0.15)] ${className}`}>
        <ShieldCheck className="w-4 h-4 text-[#F59E0B] shrink-0" />
        <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#FDE68A]">
          1 Ano de Garantia por Escrito
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] shadow-[0_4px_25px_rgba(245,158,11,0.25)] ${className}`}>
      <div className="relative bg-[#0F1D30] rounded-[11px] p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#B45309] flex items-center justify-center text-slate-950 shrink-0 shadow-md">
          <Award className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-mono text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] px-2 py-0.5 rounded bg-[#F59E0B]/20 text-[#FDE68A] border border-[#F59E0B]/30">
              Diferencial Exclusivo
            </span>
            <span className="hidden sm:inline-block text-xs text-white/50">• 365 Dias</span>
          </div>
          <div className="font-heading font-extrabold text-base sm:text-lg text-white leading-tight">
            1 ANO DE GARANTIA FORMAL
          </div>
          <p className="font-sans text-xs text-white/70 leading-normal mt-0.5">
            O mercado dá 90 dias. Nós garantimos <strong className="text-[#FDE68A] font-semibold">1 ano completo</strong> por escrito na ordem de serviço.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoldenGuaranteeBadge;
