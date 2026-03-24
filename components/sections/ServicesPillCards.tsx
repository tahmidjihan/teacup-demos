import { FaTooth, FaSyringe, FaSmile, FaShieldAlt, FaBed, FaMagic } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";

interface Props { businessName: string }

const services = [
  { icon: MdOutlineCleaningServices, title: "Teeth Cleaning",      desc: "Professional cleaning to keep your smile bright and healthy." },
  { icon: FaTooth,                   title: "Dental Implants",     desc: "Permanent tooth replacement that looks and feels natural." },
  { icon: FaMagic,                   title: "Teeth Whitening",     desc: "Brighten your smile up to 8 shades in one visit." },
  { icon: FaSmile,                   title: "Orthodontics",        desc: "Clear aligners and braces to straighten your smile." },
  { icon: FaShieldAlt,               title: "Gum Treatment",       desc: "Advanced periodontal care to protect your gum health." },
  { icon: FaBed,                     title: "Sedation Dentistry",  desc: "Anxiety-free dental care for a comfortable experience." },
];

export default function ServicesPillCards({ businessName }: Props) {
  void businessName;
  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>What We Do</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          Our Services
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-14">Comprehensive dental care under one roof.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-white border border-slate-100 shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 anim-scale-in anim-delay-${Math.min((i + 1) * 100, 600)}`}
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors" style={{ backgroundColor: "var(--secondary)" }}>
                <s.icon className="text-2xl transition-colors" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
