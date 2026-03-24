interface Props { businessName: string }

export default function HeroSplitRight({ businessName }: Props) {
  return (
    <section className="py-24 lg:py-32 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
            Expert Dental Care
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
          >
            Advanced Care,<br />Lasting Results
          </h1>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            {businessName} specializes in comprehensive dental solutions — from routine cleanings to complete smile transformations.
          </p>
          <button
            className="text-white px-8 py-3 font-semibold hover:opacity-90 transition-all"
            style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}
          >
            Schedule Consultation
          </button>
        </div>
        <div
          className="rounded-card bg-gradient-to-br flex items-center justify-center h-80 lg:h-96"
          style={{ background: `linear-gradient(135deg, var(--primary), var(--accent))`, borderRadius: "var(--radius-card)" }}
        >
          <div className="text-center text-white/80 p-8">
            <div className="text-6xl mb-3">🦷</div>
            <p className="font-semibold text-lg text-white">Modern Dental Practice</p>
          </div>
        </div>
      </div>
    </section>
  );
}
