import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface Props { businessName: string }

const reviews = [
  {
    name: "Sarah M.",
    role: "Patient since 2021",
    text: "Absolutely incredible experience. The team made me feel at ease from the moment I walked in.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "James T.",
    role: "Patient since 2020",
    text: "Best dental practice I've ever been to. Professional, thorough, and genuinely caring staff.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Rachel K.",
    role: "Patient since 2022",
    text: "My smile transformation was beyond what I imagined. I can't stop smiling now — truly life-changing!",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
  },
];

export default function Testimonials({ businessName }: Props) {
  void businessName;
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Patient Stories</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          What Our Patients Say
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-14">Over 500 five-star reviews and counting.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`anim-fade-up anim-delay-${(i + 1) * 100} bg-white border border-slate-100 shadow-sm p-8 flex flex-col hover:shadow-md transition-shadow`}
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <FaQuoteLeft className="text-2xl mb-4 opacity-20" style={{ color: "var(--primary)" }} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <FaStar key={j} className="text-amber-400 text-sm" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-main)" }}>{r.name}</p>
                  <p className="text-xs text-slate-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
