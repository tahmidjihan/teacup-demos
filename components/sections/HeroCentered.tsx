interface Props { businessName: string }

export default function HeroCentered({ businessName }: Props) {
  return (
    <section
      className="py-24 lg:py-32 text-center px-6"
      style={{ backgroundColor: "var(--secondary)" }}
    >
      <div className="max-w-3xl mx-auto">
        <span
          className="inline-block text-sm font-semibold mb-4 px-4 py-1.5 rounded-full"
          style={{ backgroundColor: "var(--primary)", color: "white", borderRadius: "var(--radius-pill)" }}
        >
          Accepting New Patients
        </span>
        <h1
          className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
        >
          Your Smile, Our <span style={{ color: "var(--primary)" }}>Priority</span>
        </h1>
        <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
          At {businessName}, we combine gentle care with modern dentistry to give you the healthy, beautiful smile you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="text-white px-8 py-3 font-semibold hover:opacity-90 transition-all"
            style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}
          >
            Book an Appointment
          </button>
          <button
            className="px-8 py-3 font-semibold border-2 hover:opacity-80 transition-all"
            style={{ borderColor: "var(--primary)", color: "var(--primary)", borderRadius: "var(--radius-pill)" }}
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
