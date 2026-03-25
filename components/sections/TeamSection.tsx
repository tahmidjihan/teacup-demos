import React from "react";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

const teamMembers = [
  { name: "Dr. James Wilson", role: "Principal Dentist", bio: "Over 15 years of experience in cosmetic dentistry." },
  { name: "Dr. Sarah Chen", role: "Orthodontist", bio: "Specialist in Invisalign and modern teeth straightening." },
  { name: "Dr. Michael Ross", role: "Oral Surgeon", bio: "Expert in complex extractions and dental implants." },
];

export default function TeamSection({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const teamImages = imagesTyped[niche]?.team || imagesTyped.dentists.team;
  
  // Dynamic offset based on designType
  const offset = Number(designType) % 2 === 0 ? 0 : 1;

  return (
    <section id="team" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="anim-fade-in text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Expert Team</p>
          <h2 className="anim-fade-up text-3xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
            Meet the Experts at {businessName}
          </h2>
          <p className="anim-fade-up anim-delay-100 text-slate-500 max-w-2xl mx-auto">
            Our highly qualified team is dedicated to providing you with the highest standard of dental care.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={member.name} className={`anim-scale-in anim-delay-${(i + 1) * 200} group bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500`} style={{ borderRadius: "var(--radius-card)" }}>
              <div className="relative h-80 overflow-hidden" style={{ borderRadius: "var(--radius-card) var(--radius-card) 0 0" }}>
                <img src={teamImages[(i + offset) % teamImages.length]} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white text-sm italic">&quot;{member.bio}&quot;</p>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>{member.name}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: "var(--primary)" }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
