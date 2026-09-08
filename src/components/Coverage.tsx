import { MapPin, Navigation, Clock } from "lucide-react";

const cities = [
  {
    name: "Praia Grande",
    badge: "Base Operacional",
    neighborhoods: "Canto do Forte, Boqueirão, Guilhermina, Aviação, Tupi, Ocian, Mirim, Maracanã e Caiçara.",
  },
  {
    name: "Santos",
    badge: "Técnicos em Rota",
    neighborhoods: "Gonzaga, Ponta da Praia, Boqueirão, Embaré, Aparecida, Pompeia, Marapé e Centro.",
  },
  {
    name: "Guarujá",
    badge: "Atendimento Rápido",
    neighborhoods: "Pitangueiras, Enseada, Astúrias, Tombo, Guaiúba, Santa Rosa e Vicente de Carvalho.",
  },
  {
    name: "Bertioga",
    badge: "Condomínios & Casas",
    neighborhoods: "Riviera de São Lourenço, Centro, Maitinga, Rio da Praia, Indaiá, Vista Linda e Boracéia.",
  },
];

export const Coverage = () => {
  return (
    <section className="bg-[#081220] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-[620px]">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
              04 — Região Atendida
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em]">
              Onde atendemos na Baixada Santista
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>Técnicos com rota aberta hoje</span>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0F1D30] border border-white/10 hover:border-[#0284C7] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-sky-400">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <h3 className="font-heading font-bold text-xl text-white">
                      {city.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/70">
                    {city.badge}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed">
                  {city.neighborhoods}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#FDE68A] font-mono">
                <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Chamados no mesmo dia</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
