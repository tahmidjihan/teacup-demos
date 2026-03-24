interface Props { businessName: string }

export default function HeroFullHeight({ businessName }: Props) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6"
      style={{ background: `linear-gradient(145deg, var(--primary) 0%, var(--accent) 100%)` }}
    >
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto pt-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-6 text-white/70">
          Luxury Dental Experience
        </p>
        <h1
          className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Redefining Your Smile
        </h1>
        <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-xl mx-auto">
          {businessName} blends artistry with precision dentistry to craft smiles that are truly extraordinary.
        </p>
        <button
          className="bg-white font-semibold px-10 py-4 hover:shadow-xl transition-all text-lg"
          style={{ color: "var(--primary)", borderRadius: "var(--radius-pill)" }}
        >
          Begin Your Journey
        </button>
      </div>
    </section>
  );
}
