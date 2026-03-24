interface Props { businessName: string }

const services = [
  { icon: "🪥", title: "Teeth Cleaning", desc: "Professional cleaning to keep your smile bright and healthy." },
  { icon: "🦷", title: "Dental Implants", desc: "Permanent tooth replacement that looks and feels natural." },
  { icon: "✨", title: "Teeth Whitening", desc: "Brighten your smile up to 8 shades in one visit." },
  { icon: "🔬", title: "Orthodontics", desc: "Clear aligners and braces to straighten your smile." },
  { icon: "🛡️", title: "Gum Treatment", desc: "Advanced periodontal care to protect your gum health." },
  { icon: "😌", title: "Sedation Dentistry", desc: "Anxiety-free dental care for a comfortable experience." },
];

export default function ServicesPillCards({ businessName }: Props) {
  void businessName;
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-3 tracking-tight"
          style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
        >
          Our Services
        </h2>
        <p className="text-center text-slate-500 mb-12">Comprehensive dental care under one roof.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-slate-100 shadow-sm p-8 hover:shadow-md transition-shadow"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3
                className="font-semibold text-lg mb-2"
                style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
              >
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
