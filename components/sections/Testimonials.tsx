import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function Testimonials({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheAvatars = imagesTyped[niche]?.avatars || imagesTyped.dentists.avatars;
  
  // Dynamic shuffle based on designType
  const displayAvatars = designType === "2" ? [...nicheAvatars].reverse() : nicheAvatars;

  const reviews = [
    {
      name: "Sarah M.",
      role: "Patient since 2021",
      text: "Absolutely incredible experience. The team made me feel at ease from the moment I walked in.",
      stars: 5,
      avatar: displayAvatars[0],
    },
    {
      name: "James T.",
      role: "Patient since 2020",
      text: "Best dental practice I&apos;ve ever been to. Professional, thorough, and genuinely caring staff.",
      stars: 5,
      avatar: displayAvatars[1],
    },
    {
      name: "Rachel K.",
      role: "Patient since 2022",
      text: "My smile transformation was beyond what I imagined. I can&apos;t stop smiling now — truly life-changing!",
      stars: 5,
      avatar: displayAvatars[2],
    },
  ];

  void businessName;
  const isType3 = designType === "3";

  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Patient Stories</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          What Our Patients Say
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-14">Over 500 five-star reviews and counting.</p>
        <div className={`grid gap-6 ${isType3 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`anim-fade-up anim-delay-${(i + 1) * 100} bg-white border border-slate-100 shadow-sm p-8 flex flex-col hover:shadow-md transition-shadow ${isType3 && i === 2 ? "md:col-span-2" : ""}`}
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <FaQuoteLeft className="text-2xl mb-4 opacity-20" style={{ color: "var(--primary)" }} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <FaStar key={j} className="text-amber-400 text-sm" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">&quot;{r.text}&quot;</p>
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
