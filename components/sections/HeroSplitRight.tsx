import React from "react";
import images from "@/data/images.json";
import content from "@/data/content.json";
import { ImagesData, SectionProps, AllContent } from "@/types";

export default function HeroSplitRight({ businessName, niche }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheImages = imagesTyped[niche]?.hero || imagesTyped.dentists.hero;
  
  const contentTyped = content as unknown as AllContent;
  const nicheContent = contentTyped[niche]?.hero || contentTyped.generic.hero;

  const heroImage = nicheImages.split;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center px-6 overflow-hidden text-white" 
      style={{ backgroundColor: "var(--primary)" }}
    >
      {/* Dynamic Background Pattern for High-Contrast */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} 
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-12deg] translate-x-32" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="anim-fade-right">
            <div className="inline-block px-4 py-1 rounded-sm bg-white text-primary text-xs font-black uppercase tracking-[0.3em] mb-8">
              {nicheContent.tagline}
            </div>
            
            <h1 
              className="text-6xl lg:text-[90px] font-black leading-[0.9] mb-10 italic" 
              style={{ fontFamily: "var(--font-heading)" }}
              dangerouslySetInnerHTML={{ __html: nicheContent.headline.replace("var(--primary)", "white") }}
            />
            
            <p className="text-xl text-white/80 mb-12 max-w-lg leading-relaxed font-light border-l-4 border-white/30 pl-6">
              {nicheContent.description.replace("{businessName}", businessName)}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact" 
                className="group relative px-12 py-5 font-black text-primary overflow-hidden transition-all duration-300 hover:scale-105" 
                style={{ 
                  backgroundColor: "white", 
                  borderRadius: "0.25rem" 
                }}
              >
                <span className="relative z-10">{nicheContent.cta1}</span>
                <div className="absolute inset-0 bg-white group-hover:bg-slate-50 transition-colors" />
              </a>
              <a 
                href="#about" 
                className="px-12 py-5 font-black border-4 border-white transition-all duration-300 hover:bg-white hover:text-primary" 
                style={{ 
                  borderRadius: "0.25rem" 
                }}
              >
                {nicheContent.cta2}
              </a>
            </div>
          </div>
          
          <div className="anim-fade-left relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform -rotate-3 group-hover:rotate-0 transition-all duration-700">
              <img
                src={heroImage}
                alt="High impact visual"
                className="w-full h-[650px] object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay" />
            </div>
            
            {/* Stats Overlay for Specialist feel */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-2xl anim-float hidden lg:block">
              <div className="text-primary font-black text-4xl mb-1">15+</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Years Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
