interface Props { businessName: string }

export default function HeroWarm({ businessName }: Props) {
  return (
    <section className="py-24 lg:py-32 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <h1
          className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
        >
          Healthy Smiles for the Whole Family
        </h1>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          {businessName} is your trusted neighborhood dental home. We make every visit comfortable, gentle, and rewarding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="text-white px-8 py-3 font-semibold hover:opacity-90 transition-all"
            style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}
          >
            Request Appointment
          </button>
          <button
            className="px-8 py-3 font-semibold text-slate-600 hover:text-slate-900 transition-all underline underline-offset-4"
          >
            Learn About Us
          </button>
        </div>
      </div>
    </section>
  );
}
