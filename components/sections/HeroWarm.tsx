import React from "react";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function HeroWarm({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheImages = imagesTyped[niche]?.hero || imagesTyped.dentists.hero;
  const heroImage = nicheImages.warm;
  const doctorImage = imagesTyped[niche]?.doctor || imagesTyped.dentists.doctor;
  void designType;

  return (
    <section id="home" className="py-24 lg:py-36 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="anim-fade-right">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
            A Warmer Way to <span style={{ color: "var(--primary)" }}>Smile.</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
            At {businessName}, we&apos;ve designed our practice to feel like home. Relaxed, gentle, and entirely focused on you.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="text-white px-8 py-4 font-bold transition-all hover:scale-105" style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
              Meet Our Team
            </a>
          </div>
        </div>
        <div className="anim-fade-left relative">
          <div className="relative z-10 rounded-card overflow-hidden shadow-xl border-8 border-white" style={{ borderRadius: "var(--radius-card)" }}>
            <img
              src={heroImage}
              alt="Comfortable office"
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden z-20 anim-float">
            <img src={doctorImage} alt="Doctor" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
