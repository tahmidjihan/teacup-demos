interface Props { businessName: string }

export default function HeroSplitRight({ businessName }: Props) {
  return (
    <section id="home" className="py-24 lg:py-32 px-6 overflow-hidden" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="anim-slide-left">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
            Expert Dental Care
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
            Advanced Care,<br />Lasting Results
          </h1>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            {businessName} specializes in comprehensive dental solutions — from routine cleanings to complete smile transformations.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="text-white px-8 py-3 font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5" style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
              Schedule Consultation
            </a>
            <a href="#services" className="px-8 py-3 font-semibold border-2 hover:opacity-80 transition-all" style={{ borderColor: "var(--primary)", color: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
              Our Services
            </a>
          </div>
        </div>
        <div className="anim-slide-right relative">
          <div className="relative rounded-card overflow-hidden shadow-2xl" style={{ borderRadius: "var(--radius-card)" }}>
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffbb172e367?auto=format&fit=crop&w=800&q=80"
              alt="Modern dental practice"
              className="w-full h-96 lg:h-[480px] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: "var(--primary)" }}>★</div>
            <div>
              <p className="text-xs text-slate-400">Patient Rating</p>
              <p className="font-bold text-slate-800">4.9 / 5.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
