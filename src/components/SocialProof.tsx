import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Renata Vasconcelos",
    location: "Canto do Forte, Praia Grande",
    device: "Lava e Seca Samsung EcoBubble",
    issue: "Erro 4E e água não entrava",
    text: "Minha máquina travou cheia de roupa de cama. O Cleiton veio no mesmo dia, testou a válvula na minha frente e trocou por peça original. O selo de 1 ano de garantia me deu total tranquilidade!",
  },
  {
    name: "Carlos Eduardo Mendes",
    location: "Gonzaga, Santos",
    device: "Lava e Seca LG Direct Drive 11kg",
    issue: "Barulho alto na centrifugação",
    text: "Parecia uma turbina de avião decolando. Foi diagnosticado desgaste no rolamento e retentor. Conserto feito em casa sem levar a máquina. Ficou silenciosa igual a zero km.",
  },
  {
    name: "Mariana Siqueira",
    location: "Enseada, Guarujá",
    device: "Lava e Seca Electrolux Intuitive",
    issue: "Porta travada e cheiro de mofo",
    text: "Fizeram o destravamento da porta e aproveitei para fazer a higienização profunda. Tirou toda a crosta preta da borracha e as toalhas voltaram a sair cheirosas.",
  },
];

export const SocialProof = () => {
  return (
    <section className="bg-[#050C16] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-[620px]">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
              05 — Avaliações Reais
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em]">
              Quem chamou na Baixada recomenda
            </h2>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-white/80 font-mono">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
            <span>Serviços com Ordem de Serviço e Garantia</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#0B1728] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#0284C7] transition-colors"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#F59E0B] mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-sans text-sm sm:text-[15px] text-white/80 leading-relaxed mb-6 italic">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="font-heading font-bold text-sm sm:text-base text-white">
                  {r.name}
                </div>
                <div className="font-sans text-xs text-[#38BDF8] mt-0.5">
                  {r.location}
                </div>
                <div className="font-mono text-[11px] text-white/50 mt-1">
                  {r.device} · <span className="text-white/70">{r.issue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
