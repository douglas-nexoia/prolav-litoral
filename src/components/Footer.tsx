import { trackPhoneConversion } from "@/lib/tracking";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050C16] text-white/60 py-16 border-t border-white/10 font-sans text-sm">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div>
            <span className="font-heading font-extrabold text-2xl text-white block mb-3">
              ProLav<span className="text-[#0284C7]">.</span>Litoral
            </span>
            <p className="text-white/60 leading-relaxed text-sm max-w-[270px] mb-4">
              Assistência técnica especializada em Lava e Seca e Máquinas de Lavar na Baixada Santista. Atendimento a domicílio com peças originais e 1 ano de garantia.
            </p>
            <div className="font-mono text-xs text-[#F59E0B] font-bold">
              ★ 1 Ano de Garantia por Escrito (365 Dias)
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <div className="font-heading font-semibold text-white text-base mb-4">
              Serviços Especializados
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="/conserto-lava-e-seca" className="hover:text-white transition-colors">
                  Conserto & Reparo no Mesmo Dia
                </a>
              </li>
              <li>
                <a href="/instalacao-lava-e-seca" className="hover:text-white transition-colors">
                  Instalação Padrão de Fábrica
                </a>
              </li>
              <li>
                <a href="/higienizacao-lava-e-seca" className="hover:text-white transition-colors">
                  Higienização & Descontaminação
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Página Inicial
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Cidades Atendidas */}
          <div>
            <div className="font-heading font-semibold text-white text-base mb-4">
              Baixada Santista
            </div>
            <ul className="space-y-1.5 text-xs text-white/50">
              <li>Praia Grande (Base Operacional)</li>
              <li>Santos (Técnicos em rota diária)</li>
              <li>Guarujá (Atendimento a domicílio)</li>
              <li>Bertioga (Casas e Condomínios)</li>
              <li className="pt-1 text-[#38BDF8]">Chamados atendidos no mesmo dia</li>
            </ul>
          </div>

          {/* Col 4: Contato Direto */}
          <div>
            <div className="font-heading font-semibold text-white text-base mb-4">
              Central de Atendimento
            </div>
            <div className="space-y-2">
              <a
                href="tel:13992095947"
                onClick={trackPhoneConversion}
                className="font-mono text-base font-bold text-white hover:text-[#0284C7] block transition-colors"
              >
                (13) 99209-5947
              </a>
              <div className="text-xs text-white/50">
                Segunda a Sábado — 8h às 18h30
              </div>
              <div className="text-xs text-white/50">
                Responsável Técnico: Cleiton de Oliveira Pereira
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {currentYear} ProLav Litoral. Todos os direitos reservados.
          </div>
          <div>
            Praia Grande • Santos • Guarujá • Bertioga / SP
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
