import React from "react";
import { FaUserMd, FaLaptopMedical, FaHospital, FaHeartbeat } from "react-icons/fa";
import { SectionProps } from "@/types";

const reasons = [
  { icon: FaUserMd, title: "Board Certified", desc: "Our specialists are leading experts in their fields with global credentials." },
  { icon: FaLaptopMedical, title: "Digital Dentistry", desc: "Experience the latest in 3D scanning and painless laser technology." },
  { icon: FaHospital, title: "Modern Facility", desc: "Relax in our spa-like treatment rooms designed for maximum comfort." },
  { icon: FaHeartbeat, title: "Emergency Care", desc: "Available 24/7 for urgent dental needs and immediate assistance." },
];

export default function WhyChooseUsSection({ businessName, niche, designType }: SectionProps) {
  void businessName;
  void niche;
  void designType;

  return (
    <section id="why-choose-us" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="anim-fade-right">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>The Difference</p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
              Why Patients Love <br /> Our Practice
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed max-w-lg">
              We combine artistic vision with scientific precision to provide dental care that is both effective and beautiful.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="text-white px-8 py-3 font-semibold transition-all hover:scale-105" style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
                Start Your Journey
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 anim-fade-left">
            {reasons.map((reason, i) => (
              <div key={i} className={`bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 anim-delay-${(i + 1) * 100}`} style={{ borderRadius: "var(--radius-card)" }}>
                <div className="w-12 h-12 flex items-center justify-center mb-5 bg-slate-50 rounded-xl">
                  <reason.icon className="text-2xl" style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>{reason.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
