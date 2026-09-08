import React from "react";
import { ShieldCheck, Award, Wrench, CheckCircle2 } from "lucide-react";
import GoldenGuaranteeBadge from "./GoldenGuaranteeBadge";

interface GuaranteeProps {
  serviceImage?: string;
  imageAlt?: string;
  caption?: string;
}

const guarantees = [
  {
    badge: "1 Ano de Garantia",
    title: "365 dias de cobertura por escrito",
    desc: "Enquanto a maioria oferece apenas 90 dias, a ProLav garante 1 ano completo tanto na mão de obra quanto nas peças substituídas.",
  },
  {
    badge: "Peças Originais",
    title: "Componentes certificados de fábrica",
    desc: "Trabalhamos exclusivamente com peças novas e homologadas para Samsung, LG, Midea, Electrolux, Brastemp e Panasonic.",
  },
  {
    badge: "Sem Troca Cega",
    title: "Você vê o teste antes da troca",
    desc: "O técnico desmonta na sua presença, mostra onde está a falha com o instrumento de medição e explica o motivo da substituição.",
  },
  {
    badge: "Atendimento Domiciliar",
    title: "Sua máquina não sai de casa",
    desc: "Mais de 95% dos serviços são executados diretamente na sua residência, sem risco de riscos, amassados ou batidas no transporte.",
  },
];

export const Guarantee: React.FC<GuaranteeProps> = ({
  serviceImage = "/images/servico-conserto.webp",
  imageAlt = "Técnico especialista ProLav Litoral executando diagnóstico",
  caption = "Diagnóstico no local com peças originais e 1 ano de garantia por escrito.",
}) => {
  return (
    <section id="garantia" className="bg-[#F8FAFC] text-[#0F172A] py-16 sm:py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Guarantees List */}
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
              03 — Garantia & Transparência
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4 text-[#0F172A]">
              1 ano de garantia.<br />
              <span className="text-[#0284C7]">Nada é trocado sem você entender.</span>
            </h2>
            <p className="font-sans text-base text-[#64748B] leading-relaxed mb-6 max-w-[560px]">
              O técnico mostra o teste, explica o que falhou e você recebe tudo documentado na ordem de serviço formal. Sem surpresas e com a maior garantia da Baixada Santista.
            </p>

            <div className="mb-8">
              <GoldenGuaranteeBadge compact={false} />
            </div>

            <div className="space-y-4">
              {guarantees.map((g, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-5 flex items-start gap-4 hover:border-[#0284C7] transition-colors shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {g.badge}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#0F172A]">
                      {g.title}
                    </h3>
                    <p className="font-sans text-sm text-[#64748B] leading-relaxed mt-1">
                      {g.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo Card with Badge */}
          <div className="lg:col-span-5">
            <div className="bg-white p-3 rounded-2xl border border-[#E2E8F0] shadow-xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900">
                <img
                  src={serviceImage}
                  alt={imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F59E0B] text-slate-950 font-heading font-extrabold text-xs uppercase mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>365 Dias de Cobertura</span>
                  </div>
                  <p className="font-sans text-xs text-white/85 leading-snug">
                    {caption}
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

export default Guarantee;
