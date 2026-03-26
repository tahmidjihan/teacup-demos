import React from "react";
import Image from "next/image";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";
import { FaShieldAlt, FaCreditCard, FaStethoscope } from "react-icons/fa";

const insuranceFeatures = [
  { icon: FaShieldAlt, title: "Major Plans Accepted", desc: "We accept all major private and government health insurance plans." },
  { icon: FaCreditCard, title: "Flexible Payments", desc: "Our team will help you find the best payment plan for your needs." },
  { icon: FaStethoscope, title: "Hassle-Free Billing", desc: "We handle the paperwork and direct billing to your provider." },
];

export default function InsuranceSection({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const insuranceImage = imagesTyped[niche]?.insurance || imagesTyped.dentists.insurance || "";
  void designType;
  void businessName;

  return (
    <section id="insurance" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-white shadow-2xl overflow-hidden" style={{ borderRadius: "var(--radius-card)" }}>
          <div className="relative h-[400px] lg:h-full lg:min-h-[500px]">
            {insuranceImage && (
              <Image 
                src={insuranceImage} 
                alt="Insurance Support" 
                fill
                className="object-cover" 
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>
          <div className="p-10 lg:p-20">
            <p className="anim-fade-in text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Peace of Mind</p>
            <h2 className="anim-fade-up text-3xl lg:text-5xl font-bold tracking-tight mb-8" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
              Insurance & Payments
            </h2>
            <div className="space-y-8">
              {insuranceFeatures.map((feature, i) => (
                <div key={i} className={`flex gap-5 items-start anim-fade-up anim-delay-${(i + 1) * 200}`}>
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-slate-50 shadow-sm" style={{ borderRadius: "1rem" }}>
                    <feature.icon className="text-2xl" style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
