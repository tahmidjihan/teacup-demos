interface Props { businessName: string }

export default function CtaRibbon({ businessName }: Props) {
  return (
    <section
      className="py-16 px-6 text-white text-center"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl font-bold mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready to Transform Your Smile?
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Book your complimentary consultation at {businessName} today.
        </p>
        <button
          className="bg-white font-semibold px-10 py-3 hover:shadow-lg transition-all"
          style={{ color: "var(--primary)", borderRadius: "var(--radius-pill)" }}
        >
          Claim Your Free Consult
        </button>
      </div>
    </section>
  );
}
