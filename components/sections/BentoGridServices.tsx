import { FaTooth, FaMagic, FaSmile, FaBroadcastTower, FaShieldAlt } from "react-icons/fa";

interface Props { businessName: string }

const items = [
  { icon: FaMagic,    title: "Whitening",    desc: "8 shades brighter" },
  { icon: FaSmile,    title: "Veneers",      desc: "Porcelain perfection" },
  { icon: FaBroadcastTower, title: "Orthodontics", desc: "Invisalign & braces" },
  { icon: FaShieldAlt, title: "Periodontics", desc: "Gum health experts" },
];

export default function BentoGridServices({ businessName }: Props) {
  void businessName;
  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Specialist Care</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          What We Offer
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-14">Specialist-level care for every dental need.</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          <div className="anim-scale-in col-span-2 lg:col-span-1 row-span-2 text-white p-8 flex flex-col justify-between relative overflow-hidden"
            style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-card)" }}
          >
            <FaTooth className="text-5xl text-white/30" />
            <div>
              <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-heading)" }}>Implants &amp; Restoration</h3>
              <p className="text-white/70 text-sm">Permanent solutions that last a lifetime.</p>
            </div>
          </div>
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`anim-scale-in anim-delay-${(i + 1) * 100} bg-white border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all`}
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <item.icon className="text-3xl" style={{ color: "var(--primary)" }} />
              <div>
                <h3 className="font-semibold text-base" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
