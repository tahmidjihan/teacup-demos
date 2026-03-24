import React from "react";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function HeroFullHeight({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheImages = imagesTyped[niche]?.hero || imagesTyped.dentists.hero;
  
  // Dynamic image based on designType
  const heroImage = designType === "4" ? nicheImages.full : nicheImages.centered;

  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover anim-zoom-out"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="anim-fade-in inline-block text-white text-sm font-bold uppercase tracking-[0.3em] mb-6 border-b border-white/30 pb-2">
          {businessName}
        </span>
        <h1 className="anim-fade-up anim-delay-100 text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
          The Future of <br /> Dentistry.
        </h1>
        <p className="anim-fade-up anim-delay-200 text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Bespoke dental care tailored to your unique smile. Discover the perfect blend of technology and artistry.
        </p>
        <div className="anim-fade-up anim-delay-300 flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#contact" className="bg-white text-black px-12 py-4 font-bold hover:bg-opacity-90 transition-all hover:scale-105" style={{ borderRadius: "var(--radius-pill)" }}>
            Book Your Consult
          </a>
        </div>
      </div>
    </section>
  );
}
