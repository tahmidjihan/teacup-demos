interface Props { businessName: string }

const items = [
  {
    label: "Smile Makeover",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e4c?auto=format&fit=crop&w=600&q=80",
    span: "col-span-2 lg:col-span-1 row-span-2",
  },
  {
    label: "Veneers",
    img: "https://images.unsplash.com/photo-1588776814546-1ffbb172e367?auto=format&fit=crop&w=600&q=80",
    span: "",
  },
  {
    label: "Whitening",
    img: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=600&q=80",
    span: "",
  },
  {
    label: "Implants",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    span: "",
  },
  {
    label: "Full Restoration",
    img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    span: "",
  },
];

export default function GalleryGrid({ businessName }: Props) {
  void businessName;
  return (
    <section id="gallery" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Our Work</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          Before &amp; After Gallery
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-12">Real results from our patients.</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`${item.span} relative overflow-hidden group anim-scale-in anim-delay-${Math.min((i + 1) * 100, 500)}`}
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-end p-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}>
                <span className="text-white font-semibold text-sm drop-shadow">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
