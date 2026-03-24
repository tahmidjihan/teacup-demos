interface Props { businessName: string }

export default function BentoGridServices({ businessName }: Props) {
  void businessName;
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-3 tracking-tight"
          style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
        >
          What We Offer
        </h2>
        <p className="text-center text-slate-500 mb-12">Specialist-level care for every dental need.</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px]">
          <div
            className="col-span-2 lg:col-span-1 row-span-2 text-white p-8 flex flex-col justify-end"
            style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-card)" }}
          >
            <div className="text-4xl mb-3">🦷</div>
            <h3 className="font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>Implants & Restoration</h3>
            <p className="text-white/70 text-sm mt-1">Permanent solutions that last a lifetime.</p>
          </div>
          {[
            { icon: "✨", title: "Whitening", desc: "8 shades brighter" },
            { icon: "😁", title: "Veneers", desc: "Porcelain perfection" },
            { icon: "🔬", title: "Orthodontics", desc: "Invisalign & braces" },
            { icon: "🛡️", title: "Periodontics", desc: "Gum health experts" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-base" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
