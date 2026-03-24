import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function HeroCentered({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheImages = imagesTyped[niche]?.hero || imagesTyped.dentists.hero;
  
  // Use designType to pick a slightly different hero if needed
  const heroImage = designType === "1" ? nicheImages.centered : nicheImages.split;

  return (
    <section id="home" className="relative overflow-hidden py-24 lg:py-36 text-center px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 40%, var(--primary) 0%, transparent 70%)" }} />
      <div className="relative max-w-3xl mx-auto">
        <span className="anim-fade-in inline-block text-sm font-semibold mb-5 px-4 py-1.5 rounded-full" style={{ backgroundColor: "var(--primary)", color: "white", borderRadius: "var(--radius-pill)" }}>
          ✦ Accepting New Patients
        </span>
        <h1 className="anim-fade-up anim-delay-100 text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          Your Smile, Our <span style={{ color: "var(--primary)" }}>Priority</span>
        </h1>
        <p className="anim-fade-up anim-delay-200 text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
          At {businessName}, we combine gentle care with modern dentistry to give you the healthy, beautiful smile you deserve.
        </p>
        <div className="anim-fade-up anim-delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact" className="text-white px-8 py-3 font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5 anim-bounce-in anim-delay-400" style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
            Book an Appointment
          </a>
          <a href="#services" className="px-8 py-3 font-semibold border-2 hover:opacity-80 transition-all anim-bounce-in anim-delay-500" style={{ borderColor: "var(--primary)", color: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
            Our Services
          </a>
        </div>
        <div className="anim-zoom-in anim-delay-600 relative rounded-card overflow-hidden shadow-2xl" style={{ borderRadius: "var(--radius-card)" }}>
          <img
            src={heroImage}
            alt="Bright modern practice"
            className="w-full h-72 lg:h-96 object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 50%)" }} />
        </div>
      </div>
    </section>
  );
}
