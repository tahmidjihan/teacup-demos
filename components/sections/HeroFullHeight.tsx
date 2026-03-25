import React from "react";
import images from "@/data/images.json";
import content from "@/data/content.json";
import { ImagesData, SectionProps, AllContent } from "@/types";

export default function HeroFullHeight({ businessName, niche }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheImages = imagesTyped[niche]?.hero || imagesTyped.dentists.hero;
  
  const contentTyped = content as unknown as AllContent;
  const nicheContent = contentTyped[niche]?.hero || contentTyped.generic.hero;

  const heroImage = nicheImages.full;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-black">
      {/* Cinematic background with zoom and pan effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury setting"
          className="absolute inset-0 w-full h-full object-cover anim-zoom-out brightness-[0.4]"
        />
      </div>
      
      {/* Luxury overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="anim-fade-in mb-12 flex flex-col items-center">
          <div className="w-12 h-px bg-white/40 mb-6" />
          <span className="text-white text-xs font-light uppercase tracking-[0.8em] mb-2">
            Established Excellence
          </span>
          <span className="text-white/60 text-[10px] uppercase tracking-[0.4em]">
            Since 1998
          </span>
        </div>
        
        <h1 
          className="anim-fade-up anim-delay-100 text-6xl lg:text-[110px] font-extralight text-white mb-12 tracking-[-0.03em] leading-[0.95]" 
          style={{ fontFamily: "var(--font-heading)" }}
          dangerouslySetInnerHTML={{ __html: nicheContent.headline.replace("var(--primary)", "white") }}
        />
        
        <p className="anim-fade-up anim-delay-200 text-xl lg:text-2xl text-white/70 mb-16 max-w-3xl mx-auto font-extralight leading-relaxed tracking-wide italic">
          {nicheContent.description.replace("{businessName}", businessName)}
        </p>
        
        <div className="anim-fade-up anim-delay-300 flex flex-col items-center gap-10">
          <a href="#contact" className="group relative px-16 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 overflow-hidden">
            <span className="relative z-10">{nicheContent.cta1}</span>
            <div className="absolute inset-0 bg-white group-hover:bg-black transition-colors duration-700" />
          </a>
          
          <div className="flex gap-12 items-center text-white/40">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-lg">5.0</span>
              <span className="text-[10px] uppercase tracking-widest">Google Review</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-lg">100%</span>
              <span className="text-[10px] uppercase tracking-widest">Bespoke Care</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 anim-fade-in anim-delay-500">
        <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
        <span className="text-[8px] text-white/30 uppercase tracking-[0.4em] vertical-rl">Discover More</span>
      </div>
    </section>
  );
}
