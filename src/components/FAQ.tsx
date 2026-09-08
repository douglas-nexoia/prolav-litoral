import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  customFaqs?: FAQItem[];
  kicker?: string;
  title?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    q: "Como funciona a garantia de 1 ano da ProLav Litoral?",
    a: "Diferente da maioria das assistências que dão apenas 90 dias, a ProLav fornece 1 ano completo (365 dias) de garantia formal por escrito na ordem de serviço. A garantia cobre tanto as peças originais substituídas quanto a mão de obra técnica executada.",
  },
  {
    q: "O conserto é feito realmente na minha casa ou precisa levar a máquina?",
    a: "Em mais de 95% dos atendimentos, todo o serviço é feito diretamente no local. Nossos técnicos contam com van equipada com ferramental completo e peças de reposição rápida para resolver o problema na mesma visita técnica.",
  },
  {
    q: "Vocês atendem no mesmo dia em quais cidades?",
    a: "Atendemos no mesmo dia em Praia Grande, Santos, Guarujá e Bertioga para chamados recebidos durante o expediente comercial. Temos técnicos com rota fixa em toda a Baixada Santista.",
  },
  {
    q: "Quais são as principais marcas de lava e seca atendidas?",
    a: "Somos especializados multimarcas com foco principal nas marcas Samsung, LG, Midea, Electrolux, Brastemp e Panasonic.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Aceitamos Pix, cartões de crédito (com opção de parcelamento) e débito. O pagamento é realizado somente após o término do serviço e teste completo da máquina na sua frente.",
  },
];

export const FAQ = ({
  customFaqs,
  kicker = "06 — Dúvidas Frequentes",
  title = "Perguntas frequentes sobre o atendimento",
}: FAQProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = customFaqs || defaultFaqs;

  return (
    <section className="bg-[#081220] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#0284C7] font-semibold mb-3">
              {kicker}
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
              {title}
            </h2>
            <p className="font-sans text-base text-white/60 leading-relaxed">
              Tire suas dúvidas antes de solicitar a visita do técnico da ProLav Litoral.
            </p>
          </div>

          <div className="lg:col-span-7">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="border-b border-white/10 py-5 sm:py-6 cursor-pointer select-none group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-white group-hover:text-[#0284C7] transition-colors">
                      {faq.q}
                    </h3>
                    <span className="font-heading text-2xl font-light text-[#F59E0B] leading-none shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="font-sans text-sm sm:text-[15.5px] text-white/70 leading-relaxed mt-3.5 max-w-[620px]">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
