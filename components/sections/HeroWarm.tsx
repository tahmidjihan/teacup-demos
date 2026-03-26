import React from "react";
import Image from "next/image";
import images from "@/data/images.json";
import content from "@/data/content.json";
import { ImagesData, SectionProps, AllContent } from "@/types";

export default function HeroWarm({ businessName, niche }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheImages = imagesTyped[niche]?.hero || imagesTyped.dentists.hero;
  const heroImage = nicheImages.warm;
  const doctorImage = imagesTyped[niche]?.doctor || imagesTyped.dentists.doctor;
  
  const contentTyped = content as unknown as AllContent;
  const nicheContent = contentTyped[niche]?.hero || contentTyped.generic.hero;

  return (
    <section 
      id="home" 
      className="relative py-24 lg:py-40 px-6 overflow-hidden" 
      style={{ backgroundColor: "#f8fafc" }}
    >
      {/* Soft medical/clean background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="anim-fade-right lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {nicheContent.tagline}
            </div>
            
            <h1 
              className="text-5xl lg:text-7xl font-semibold mb-8 leading-[1.15]" 
              style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
              dangerouslySetInnerHTML={{ __html: nicheContent.headline }}
            />
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">
              {nicheContent.description.replace("{businessName}", businessName)}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="text-white px-10 py-4 font-bold transition-all hover:bg-opacity-90 shadow-md hover:shadow-lg" 
                style={{ backgroundColor: "var(--primary)", borderRadius: "0.5rem" }}
              >
                {nicheContent.cta1}
              </a>
              <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-100">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i+10}`} 
                        alt="Patient" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  <span className="text-slate-900 font-bold">4.9/5</span> from 2k+ patients
                </div>
              </div>
            </div>
          </div>
          
          <div className="anim-fade-left lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-[12px] border-white h-[500px]">
              {heroImage && (
                <Image
                  src={heroImage}
                  alt="Professional environment"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            
            {/* Floating expert card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 anim-float border border-slate-50">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-inner">
                {doctorImage && (
                  <Image 
                    src={doctorImage} 
                    alt="Professional" 
                    fill
                    className="object-cover" 
                  />
                )}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Dr. Alex Rivera</div>
                <div className="text-xs text-primary font-medium">Chief Medical Officer</div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
