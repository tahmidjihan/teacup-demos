interface Props { businessName: string }

export default function ContactSection({ businessName }: Props) {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-3 tracking-tight"
          style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
        >
          Book Your Visit
        </h2>
        <p className="text-center text-slate-500 mb-12">Get in touch with {businessName} today.</p>
        <div className="grid md:grid-cols-2 gap-10 bg-white border border-slate-100 shadow-sm p-10" style={{ borderRadius: "var(--radius-card)" }}>
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>📍 123 Smile Street, Suite 200</p>
              <p>📞 (555) 123-4567</p>
              <p>📧 hello@{businessName.toLowerCase().replace(/\s+/g, "")}.com</p>
              <p>🕐 Mon–Fri: 8am–6pm | Sat: 9am–2pm</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
              Send a Message
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <textarea
                placeholder="How can we help?"
                rows={3}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <button
                type="submit"
                className="w-full text-white py-3 font-semibold hover:opacity-90 transition-all"
                style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
