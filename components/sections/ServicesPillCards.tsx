import React from "react";
import { FaTooth, FaSmile, FaShieldAlt, FaBed, FaMagic } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function ServicesPillCards({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheServices = imagesTyped[niche]?.services || imagesTyped.dentists.services;
  
  // Use designType to pick different starting points for variety
  const offset = Number(designType) % 2 === 0 ? 0 : 2;
  const s = nicheServices;

  const services = [
    { icon: MdOutlineCleaningServices, title: "Teeth Cleaning",      desc: "Professional cleaning to keep your smile bright and healthy.", image: s[(0 + offset) % s.length].image },
    { icon: FaTooth,                   title: "Dental Implants",     desc: "Permanent tooth replacement that looks and feels natural.", image: s[(1 + offset) % s.length].image },
    { icon: FaMagic,                   title: "Teeth Whitening",     desc: "Brighten your smile up to 8 shades in one visit.", image: s[(2 + offset) % s.length].image },
    { icon: FaSmile,                   title: "Orthodontics",        desc: "Clear aligners and braces to straighten your smile.", image: s[(3 + offset) % s.length].image },
    { icon: FaShieldAlt,               title: "Gum Treatment",       desc: "Advanced periodontal care to protect your gum health.", image: s[(4 + offset) % s.length].image },
    { icon: FaBed,                     title: "Sedation Dentistry",  desc: "Anxiety-free dental care for a comfortable experience.", image: s[(5 + offset) % s.length].image },
  ];

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
              className={`group bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 anim-zoom-in anim-delay-${Math.min((i + 1) * 100, 600)}`}
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="relative h-48 overflow-hidden" style={{ borderRadius: "var(--radius-card) var(--radius-card) 0 0" }}>
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur shadow-sm">
                  <s.icon className="text-xl" style={{ color: "var(--primary)" }} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
