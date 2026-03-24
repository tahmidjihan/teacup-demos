import { FaTrophy, FaMicroscope, FaHeart, FaCalendarAlt } from "react-icons/fa";

interface Props { businessName: string }

const features = [
  { icon: FaTrophy,       title: "20+ Years Experience",  desc: "Trusted by thousands of families in our community for over two decades." },
  { icon: FaMicroscope,   title: "Latest Technology",     desc: "Digital X-rays, 3D scanning, and precision laser dentistry." },
  { icon: FaHeart,        title: "Patient-First Care",    desc: "We listen, we care, and we always put your comfort first." },
  { icon: FaCalendarAlt,  title: "Flexible Scheduling",   desc: "Early morning, evening, and weekend appointments available." },
];

export default function IconFeatureList({ businessName }: Props) {
  void businessName;
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Our Difference</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          Why Choose Us
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-14">Your comfort and health are our top priorities.</p>
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={f.title} className={`flex gap-5 items-start anim-fade-up anim-delay-${(i + 1) * 100}`}>
              <div
                className="w-14 h-14 flex items-center justify-center flex-shrink-0 shadow-sm"
                style={{ backgroundColor: "var(--primary)", borderRadius: "1rem" }}
              >
                <f.icon className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-card overflow-hidden relative shadow-xl anim-scale-in anim-delay-300" style={{ borderRadius: "var(--radius-card)" }}>
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80"
            alt="State-of-the-art dental equipment"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.35)" }}>
            <p className="text-white text-2xl font-bold text-center px-6" style={{ fontFamily: "var(--font-heading)" }}>
              State-of-the-Art Facility
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
