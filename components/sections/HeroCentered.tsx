import Image from "next/image";
import images from "@/data/images.json";
import content from "@/data/content.json";
import { ImagesData, SectionProps, AllContent } from "@/types";

export default function HeroCentered({ businessName, niche }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheImages = imagesTyped[niche]?.hero || imagesTyped.dentists.hero;
  
  const contentTyped = content as unknown as AllContent;
  const nicheContent = contentTyped[niche]?.hero || contentTyped.generic.hero;
  
  const heroImage = nicheImages.centered;

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-36 text-center px-6" style={{ backgroundColor: "var(--secondary)" }}>
      {/* Decorative background elements for Soft Minimalist */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 pointer-events-none" 
        style={{ 
          background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
          filter: "blur(120px)"
        }} 
      />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-primary/10 pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="anim-fade-in inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-8 px-5 py-2 rounded-full border border-primary/20 backdrop-blur-sm" style={{ color: "var(--primary)" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--primary)" }} />
          {nicheContent.tagline}
        </div>
        
        <h1 
          className="anim-fade-up anim-delay-100 text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8" 
          style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}
          dangerouslySetInnerHTML={{ __html: nicheContent.headline }}
        />
        
        <p className="anim-fade-up anim-delay-200 text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          {nicheContent.description.replace("{businessName}", businessName)}
        </p>
        
        <div className="anim-fade-up anim-delay-300 flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <a href="#contact" className="text-white px-10 py-4 font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" 
            style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
            {nicheContent.cta1}
          </a>
          <a href="#services" className="px-10 py-4 font-bold border-2 hover:bg-white/50 transition-all duration-300" 
            style={{ borderColor: "var(--primary)", color: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
            {nicheContent.cta2}
          </a>
        </div>
        
        <div className="anim-zoom-in anim-delay-500 relative max-w-5xl mx-auto group">
          <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
          <div className="relative rounded-card overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white h-[300px] lg:h-[550px]" style={{ borderRadius: "var(--radius-card)" }}>
            {heroImage && (
              <Image
                src={heroImage}
                alt="Bright modern space"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
