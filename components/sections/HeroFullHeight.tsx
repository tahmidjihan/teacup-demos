interface Props { businessName: string }

export default function HeroFullHeight({ businessName }: Props) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80"
        alt="Luxury dental studio"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)" }} />
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto pt-20">
        <p className="anim-fade-in text-sm font-semibold uppercase tracking-widest mb-6 text-white/70">
          Luxury Dental Experience
        </p>
        <h1 className="anim-fade-up anim-delay-100 text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8" style={{ fontFamily: "var(--font-heading)" }}>
          Redefining Your Smile
        </h1>
        <p className="anim-fade-up anim-delay-200 text-xl text-white/80 mb-12 leading-relaxed max-w-xl mx-auto">
          {businessName} blends artistry with precision dentistry to craft smiles that are truly extraordinary.
        </p>
        <div className="anim-fade-up anim-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-white font-semibold px-10 py-4 hover:shadow-xl transition-all text-lg hover:-translate-y-0.5" style={{ color: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
            Begin Your Journey
          </a>
          <a href="#gallery" className="border border-white/60 text-white font-semibold px-10 py-4 hover:bg-white/10 transition-all text-lg" style={{ borderRadius: "var(--radius-pill)" }}>
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
