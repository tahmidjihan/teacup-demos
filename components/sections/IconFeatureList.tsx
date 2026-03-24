interface Props { businessName: string }

const features = [
  { icon: "🏆", title: "20+ Years Experience", desc: "Trusted by thousands of families in our community." },
  { icon: "💡", title: "Latest Technology", desc: "Digital X-rays, 3D scanning, and laser dentistry." },
  { icon: "❤️", title: "Patient-First Care", desc: "We listen, we care, and we always put you first." },
  { icon: "📅", title: "Flexible Scheduling", desc: "Early morning, evening, and weekend appointments." },
];

export default function IconFeatureList({ businessName }: Props) {
  void businessName;
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-3 tracking-tight"
          style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
        >
          Why Choose Us
        </h2>
        <p className="text-center text-slate-500 mb-14">Your comfort and health are our top priorities.</p>
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex gap-5 items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0 rounded-2xl"
                style={{ backgroundColor: "var(--primary)", borderRadius: "1rem" }}
              >
                {f.icon}
              </div>
              <div>
                <h3
                  className="font-semibold text-lg mb-1"
                  style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
                >
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
