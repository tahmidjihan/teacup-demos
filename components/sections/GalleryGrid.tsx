interface Props { businessName: string }

const items = [
  { label: "Smile Makeover", bg: "linear-gradient(135deg, #D53F8C, #B83280)" },
  { label: "Veneers", bg: "linear-gradient(135deg, #667eea, #764ba2)" },
  { label: "Whitening", bg: "linear-gradient(135deg, #f6d365, #fda085)" },
  { label: "Implants", bg: "linear-gradient(135deg, #a18cd1, #fbc2eb)" },
  { label: "Orthodontics", bg: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
  { label: "Full Restoration", bg: "linear-gradient(135deg, #a1c4fd, #c2e9fb)" },
];

export default function GalleryGrid({ businessName }: Props) {
  void businessName;
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-3 tracking-tight"
          style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
        >
          Before & After Gallery
        </h2>
        <p className="text-center text-slate-500 mb-12">Real results from our patients.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="h-48 flex items-end p-5"
              style={{ background: item.bg, borderRadius: "var(--radius-card)" }}
            >
              <span className="text-white font-semibold text-sm drop-shadow">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
