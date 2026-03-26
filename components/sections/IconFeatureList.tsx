import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function IconFeatureList({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheData = imagesTyped[niche] || imagesTyped.dentists;
  
  // Choose image based on designType
  const nicheImage = designType === "3" ? nicheData.hero.warm : nicheData.hero.centered;

  return (
    <section id="features" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="anim-fade-right relative h-[500px]">
          {nicheImage && (
            <Image
              src={nicheImage}
              alt="Clinical Excellence"
              fill
              className="object-cover rounded-card shadow-2xl"
              style={{ borderRadius: "var(--radius-card)" }}
            />
          )}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl anim-scale-in anim-delay-500" style={{ borderRadius: "var(--radius-card)" }}>
            <p className="text-3xl font-bold" style={{ color: "var(--primary)" }}>15+</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Years Experience</p>
          </div>
        </div>
        <div className="anim-fade-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
            Why Patients Choose <br /> {businessName}
          </h2>
          <div className="space-y-6">
            {[
              { title: "Advanced Technology", desc: "We use the latest 3D imaging and laser technology for precise results." },
              { title: "Personalized Care", desc: "Every treatment plan is custom-tailored to your unique goals and needs." },
              { title: "Comfort-First Approach", desc: "From sedation options to warm blankets, we prioritize your relaxation." },
              { title: "Flexible Financing", desc: "We offer various payment plans to make your dream smile affordable." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: "var(--text-main)" }}>{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
