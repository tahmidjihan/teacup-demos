import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

interface Props { businessName: string }

export default function ContactSection({ businessName }: Props) {
  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-4xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Get in Touch</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          Book Your Visit
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-12">
          Get in touch with {businessName} today.
        </p>
        <div className="anim-scale-in anim-delay-200 grid md:grid-cols-2 gap-10 bg-white border border-slate-100 shadow-sm p-10" style={{ borderRadius: "var(--radius-card)" }}>
          <div>
            <h3 className="font-semibold text-lg mb-6" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
              Contact Info
            </h3>
            <div className="space-y-4">
              {[
                { icon: FaMapMarkerAlt, text: "123 Smile Street, Suite 200" },
                { icon: FaPhone,       text: "(555) 123-4567" },
                { icon: FaEnvelope,    text: `hello@${businessName.toLowerCase().replace(/\s+/g, "")}.com` },
                { icon: FaClock,       text: "Mon–Fri: 8am–6pm  |  Sat: 9am–2pm" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-sm text-slate-600">
                  <Icon className="mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-card overflow-hidden" style={{ borderRadius: "1rem" }}>
              <img
                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80"
                alt="Our dental practice"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
              Send a Message
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all"
                style={{ "--tw-ring-color": "var(--primary)" } as React.CSSProperties}
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all"
              />
              <textarea
                placeholder="How can we help?"
                rows={3}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all"
              />
              <button
                type="submit"
                className="w-full text-white py-3 font-semibold hover:opacity-90 transition-all hover:shadow-md"
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
