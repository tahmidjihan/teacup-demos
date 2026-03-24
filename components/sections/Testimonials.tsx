interface Props { businessName: string }

const reviews = [
  { name: "Sarah M.", text: "Absolutely incredible experience. The team made me feel at ease from the moment I walked in.", stars: 5 },
  { name: "James T.", text: "Best dental practice I've ever been to. Professional, thorough, and genuinely caring.", stars: 5 },
  { name: "Rachel K.", text: "My smile transformation was beyond what I imagined. I can't stop smiling now!", stars: 5 },
];

export default function Testimonials({ businessName }: Props) {
  void businessName;
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-3 tracking-tight"
          style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
        >
          What Our Patients Say
        </h2>
        <p className="text-center text-slate-500 mb-12">Over 500 five-star reviews and counting.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-slate-100 shadow-sm p-8"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">"{r.text}"</p>
              <p className="font-semibold text-sm" style={{ color: "var(--text-main)" }}>{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
