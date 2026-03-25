import React from "react";
import { FaTooth, FaCut, FaCheckCircle, FaStar, FaShieldAlt, FaPlusCircle } from "react-icons/fa";
import images from "@/data/images.json";
import content from "@/data/content.json";
import { ImagesData, SectionProps, AllContent } from "@/types";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType[]> = {
  dentists: [FaTooth, FaShieldAlt, FaPlusCircle, FaCheckCircle, FaStar, FaShieldAlt],
  barbers: [FaCut, FaShieldAlt, FaPlusCircle, FaCheckCircle, FaStar, FaShieldAlt],
  generic: [FaCheckCircle, FaShieldAlt, FaPlusCircle, FaStar, FaCheckCircle, FaShieldAlt]
};

export default function BentoGridServices({ niche }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheServices = imagesTyped[niche]?.services || imagesTyped.dentists.services;
  
  const contentTyped = content as unknown as AllContent;
  const nicheContent = contentTyped[niche]?.services || contentTyped.generic.services;
  
  const icons = iconMap[niche] || iconMap.generic;
  const s = nicheServices;

  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Specialist Care</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          {nicheContent.headline}
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-14">{nicheContent.description}</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          <div className="anim-scale-in col-span-2 lg:col-span-1 row-span-2 text-white p-8 flex flex-col justify-between relative overflow-hidden group"
            style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-card)" }}
          >
            {s[0] && <img src={s[0].image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Main service" />}
            {React.createElement(icons[0], { className: "text-5xl text-white/60 relative z-10" })}
            <div className="relative z-10">
              <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-heading)" }}>{nicheContent.items[0].title}</h3>
              <p className="text-white font-medium text-sm">{nicheContent.items[0].desc}</p>
            </div>
          </div>
          {nicheContent.items.slice(1, 5).map((item, i) => {
            const Icon = icons[(i + 1) % icons.length];
            const serviceImg = s[(i + 1) % s.length];
            return (
              <div
                key={item.title}
                className={`anim-scale-in anim-delay-${(i + 1) * 100} bg-white border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all relative overflow-hidden group`}
                style={{ borderRadius: "var(--radius-card)" }}
              >
                {serviceImg && <img src={serviceImg.image} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" alt={item.title} />}
                <Icon className="text-3xl relative z-10" style={{ color: "var(--primary)" }} />
                <div className="relative z-10">
                  <h3 className="font-semibold text-base" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                  <p className="text-slate-500 font-medium text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
