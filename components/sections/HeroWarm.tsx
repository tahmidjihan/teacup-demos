interface Props { businessName: string }

export default function HeroWarm({ businessName }: Props) {
  return (
    <section id="home" className="py-24 lg:py-32 px-6 overflow-hidden" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="anim-slide-left">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
            Healthy Smiles for the Whole Family
          </h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed">
            {businessName} is your trusted neighbourhood dental home. We make every visit comfortable, gentle, and rewarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="text-white px-8 py-3 font-semibold hover:opacity-90 transition-all hover:shadow-lg text-center" style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
              Request Appointment
            </a>
            <a href="#about" className="px-8 py-3 font-semibold text-slate-600 hover:text-slate-900 transition-all underline underline-offset-4 text-center">
              Learn About Us
            </a>
          </div>
        </div>
        <div className="anim-slide-right">
          <div className="relative rounded-card overflow-hidden shadow-2xl" style={{ borderRadius: "var(--radius-card)" }}>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
              alt="Friendly dental team"
              className="w-full h-80 lg:h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
