import { ArrowRight, Wrench, ShieldCheck, Sparkles } from "lucide-react";
import { trackWhatsAppConversion, getWhatsAppUrl, ServiceType } from "@/lib/tracking";

const services = [
  {
    id: "conserto",
    kicker: "01 — Emergência & Reparo Rápido",
    title: "Conserto de Lava e Seca",
    route: "/conserto-lava-e-seca",
    whatsappRef: "Olá, minha lava e seca/máquina está com defeito e preciso de conserto no mesmo dia.",
    icon: Wrench,
    slotText: "1 ano de garantia · peças originais",
    desc: "Não centrifuga, exibe erros no painel (DE, 4E, OE, LE), trava a porta ou faz barulho de rolamento. Diagnóstico preciso no local e reparo no mesmo dia.",
    tags: ["Códigos de erro", "Bomba travada", "Rolamento", "Trava de porta"],
    image: "/images/servico-conserto.webp",
    imageAlt: "Técnico consertando máquina de lavar e lava e seca no local",
  },
  {
    id: "instalacao",
    kicker: "02 — Compra Nova ou Mudança",
    title: "Instalação Padrão de Fábrica",
    route: "/instalacao-lava-e-seca",
    whatsappRef: "Olá, gostaria de agendar a instalação da minha máquina de lavar/lava e seca.",
    icon: ShieldCheck,
    slotText: "anti-trepidação · padrão técnico",
    desc: "Remoção obrigatória dos parafusos de transporte do cesto, nivelamento milimétrico anti-vibração, conexão hidráulica sem vazamentos e teste completo.",
    tags: ["Trava de tambor", "Nivelamento", "Mangueiras", "Calibração"],
    image: "/images/servico-instalacao.webp",
    imageAlt: "Instalação profissional de máquina lava e seca com nivelamento",
  },
  {
    id: "higienizacao",
    kicker: "03 — Saúde & Roupas Sem Odor",
    title: "Higienização Profunda",
    route: "/higienizacao-lava-e-seca",
    whatsappRef: "Olá, gostaria de um orçamento para higienização profunda da minha máquina.",
    icon: Sparkles,
    slotText: "bactericida · cesto e dutos limpos",
    desc: "Elimine mau cheiro nas roupas, bolor na borracha da porta e acúmulo de fiapos no duto de secagem. Descontaminação com bactericida homologado.",
    tags: ["Mofo na borracha", "Duto de fiapos", "Descontaminação", "Roupas limpas"],
    image: "/images/servico-higienizacao.webp",
    imageAlt: "Higienização profunda de cesto e borracha de lava e seca",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="bg-[#F8FAFC] text-[#0F172A] py-16 sm:py-24">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-[620px]">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
              01 — Serviços Especializados
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] text-[#0F172A]">
              Conserto, instalação e higienização para sua lava e seca
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#64748B] max-w-[360px] leading-relaxed">
            Atendimento técnico ágil a domicílio em Praia Grande, Santos, Guarujá e Bertioga com 1 ano de garantia.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => {
            const waUrl = getWhatsAppUrl(s.id as ServiceType);
            const Icon = s.icon;

            return (
              <div
                key={s.id}
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#0F172A] hover:shadow-xl transition-all duration-300 group"
              >
                {/* Photographic Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-[#E2E8F0]">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-white/95 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#0284C7] shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-wide text-[#FDE68A] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full uppercase border border-[#F59E0B]/30">
                      {s.slotText}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#64748B] font-semibold mb-2">
                      {s.kicker}
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0F172A] tracking-tight mb-3">
                      {s.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-[15px] text-[#64748B] leading-relaxed mb-5">
                      {s.desc}
                    </p>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {s.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="font-sans text-xs text-[#334155] bg-[#F1F5F9] rounded px-2.5 py-1 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
                    <a
                      href={waUrl}
                      onClick={trackWhatsAppConversion}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-bold text-sm sm:text-[15px] text-[#0284C7] hover:text-[#0369A1] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Chamar no WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <a
                      href={s.route}
                      className="font-mono text-xs text-[#64748B] hover:text-[#0F172A] underline transition-colors shrink-0"
                    >
                      Página dedicada
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
