const brands = [
  "Samsung",
  "LG",
  "Electrolux",
  "Brastemp",
  "Midea",
  "Panasonic",
];

export const Brands = () => {
  return (
    <section className="bg-[#050C16] border-b border-white/10 py-5">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/50 text-xs font-mono uppercase tracking-[0.16em] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
          <span>Multimarcas Especializada em Lavanderia:</span>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 sm:gap-x-8 gap-y-2">
          {brands.map((brand, i) => (
            <span
              key={i}
              className="font-heading font-bold text-sm sm:text-base tracking-wide text-white/60 hover:text-white transition-colors select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
