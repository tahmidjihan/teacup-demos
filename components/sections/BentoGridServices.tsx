import React from "react";
import { FaTooth, FaMagic, FaSmile, FaBroadcastTower, FaShieldAlt } from "react-icons/fa";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function BentoGridServices({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheServices = imagesTyped[niche]?.services || imagesTyped.dentists.services;
  
  // Use designType to pick different starting points for variety
  const offset = Number(designType) % 2 === 0 ? 0 : 1;
  const s = nicheServices;

  const items = [
    { icon: FaMagic,    title: "Whitening",    desc: "8 shades brighter", image: s[(2 + offset) % s.length].image },
    { icon: FaSmile,    title: "Veneers",      desc: "Porcelain perfection", image: s[(1 + offset) % s.length].image },
    { icon: FaBroadcastTower, title: "Orthodontics", desc: "Invisalign & braces", image: s[(3 + offset) % s.length].image },
    { icon: FaShieldAlt, title: "Periodontics", desc: "Gum health experts", image: s[(4 + offset) % s.length].image },
  ];

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
          <div className="anim-scale-in col-span-2 lg:col-span-1 row-span-2 text-white p-8 flex flex-col justify-between relative overflow-hidden group"
            style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-card)" }}
          >
            <img src={s[(1 + offset) % s.length].image} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" alt="Implants" />
            <FaTooth className="text-5xl text-white/30 relative z-10" />
            <div className="relative z-10">
              <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-heading)" }}>Implants &amp; Restoration</h3>
              <p className="text-white/70 text-sm">Permanent solutions that last a lifetime.</p>
            </div>
          </div>
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`anim-scale-in anim-delay-${(i + 1) * 100} bg-white border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all relative overflow-hidden group`}
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <img src={item.image} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500" alt={item.title} />
              <item.icon className="text-3xl relative z-10" style={{ color: "var(--primary)" }} />
              <div className="relative z-10">
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
