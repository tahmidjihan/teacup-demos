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

export default function ServicesPillCards({ niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheServices = imagesTyped[niche]?.services || imagesTyped.dentists.services;
  
  const contentTyped = content as unknown as AllContent;
  const nicheContent = contentTyped[niche]?.services || contentTyped.generic.services;
  
  const icons = iconMap[niche] || iconMap.generic;
  const isType3 = designType === "3";

  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: isType3 ? "white" : "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>What We Do</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          {nicheContent.headline}
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-14">{nicheContent.description}</p>
        <div className={`grid gap-6 ${isType3 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {nicheContent.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const serviceData = nicheServices[i % nicheServices.length];
            return (
              <div
                key={item.title}
                className={`group bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 anim-zoom-in anim-delay-${Math.min((i + 1) * 100, 600)} ${isType3 ? "flex items-center p-4" : ""}`}
                style={{ borderRadius: "var(--radius-card)" }}
              >
                <div className={`relative overflow-hidden ${isType3 ? "w-24 h-24 flex-shrink-0" : "h-48"}`} style={{ borderRadius: isType3 ? "1rem" : "var(--radius-card) var(--radius-card) 0 0" }}>
                  {serviceData && <img src={serviceData.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                  {!isType3 && (
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur shadow-sm">
                      <Icon className="text-xl" style={{ color: "var(--primary)" }} />
                    </div>
                  )}
                </div>
                <div className={isType3 ? "pl-6" : "p-8"}>
                  <div className="flex items-center gap-3 mb-2">
                    {isType3 && <Icon className="text-xl" style={{ color: "var(--primary)" }} />}
                    <h3 className="font-semibold text-lg" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
