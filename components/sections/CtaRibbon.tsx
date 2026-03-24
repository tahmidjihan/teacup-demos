import { FaArrowRight } from "react-icons/fa";

interface Props { businessName: string }

export default function CtaRibbon({ businessName }: Props) {
  return (
    <section className="py-20 px-6 text-white text-center relative overflow-hidden" style={{ backgroundColor: "var(--primary)" }}>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, white 0%, transparent 70%)" }} />
      <div className="relative max-w-3xl mx-auto">
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Ready to Transform Your Smile?
        </h2>
        <p className="anim-fade-up anim-delay-100 text-white/80 mb-10 text-lg max-w-xl mx-auto">
          Book your complimentary consultation at {businessName} today — no commitment required.
        </p>
        <a
          href="#contact"
          className="anim-fade-up anim-delay-200 inline-flex items-center gap-3 bg-white font-semibold px-10 py-4 hover:shadow-xl transition-all text-lg hover:-translate-y-0.5"
          style={{ color: "var(--primary)", borderRadius: "var(--radius-pill)" }}
        >
          Claim Your Free Consult
          <FaArrowRight className="text-base" />
        </a>
      </div>
    </section>
  );
}
