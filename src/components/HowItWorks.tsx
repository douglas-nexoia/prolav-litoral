const steps = [
  {
    num: "01",
    title: "Mande o defeito no WhatsApp",
    desc: "Descreva o sintoma ou código de erro e a marca da sua máquina.",
  },
  {
    num: "02",
    title: "Agendamos o atendimento",
    desc: "Enviamos o técnico mais próximo na sua cidade da Baixada no mesmo dia.",
  },
  {
    num: "03",
    title: "Diagnóstico na sua residência",
    desc: "Testamos a máquina na sua frente e explicamos o reparo sem enrolação.",
  },
  {
    num: "04",
    title: "Conserto com 1 ano de garantia",
    desc: "Serviço concluído no local com peças originais e garantia formal na OS.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-[#060D17] text-white py-16 sm:py-24 border-y border-white/10">
      <div className="container-max">
        {/* Section Header */}
        <div className="max-w-[620px] mb-12 sm:mb-16">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
            02 — Como Funciona
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
            Sem complicações: conserto no mesmo dia na sua casa
          </h2>
          <p className="font-sans text-base text-white/65 leading-relaxed">
            Processo ágil e transparente para você não ficar com roupas acumuladas.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-xl bg-[#0B1728] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono font-bold text-3xl sm:text-4xl text-[#F59E0B] mb-4 flex items-center justify-between">
                  <span>{step.num}</span>
                  <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
