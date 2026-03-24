import React from "react";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function HeroSplitRight({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheImages = imagesTyped[niche]?.hero || imagesTyped.dentists.hero;
  
  // Use designType to flip or change image
  const heroImage = designType === "2" ? nicheImages.split : nicheImages.full;

  return (
    <section id="home" className="py-20 lg:py-32 px-6 overflow-hidden" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="anim-fade-right">
            <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
              Welcome to {businessName}
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
              Modern Care, <br />
              <span style={{ color: "var(--primary)" }}>Gentle Touch.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
              Experience a new standard of dental care where your comfort is our top priority. From routine checkups to full smile makeovers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="text-white px-10 py-4 font-bold hover:shadow-xl hover:-translate-y-1 transition-all" style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
                Book Now
              </a>
              <a href="#about" className="px-10 py-4 font-bold border-2 hover:bg-slate-50 transition-all" style={{ borderColor: "var(--primary)", color: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
                Our Story
              </a>
            </div>
          </div>
          <div className="anim-fade-left relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 opacity-20 blur-3xl rounded-full" style={{ backgroundColor: "var(--primary)" }} />
            <div className="relative z-10 rounded-card overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" style={{ borderRadius: "var(--radius-card)" }}>
              <img
                src={heroImage}
                alt="Modern facility"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
