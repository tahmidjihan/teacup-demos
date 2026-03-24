import React from "react";
import { FaClipboardList, FaStethoscope, FaSmileBeam } from "react-icons/fa";
import { SectionProps } from "@/types";

const steps = [
  { icon: FaClipboardList, title: "Initial Consultation", desc: "We discuss your goals and perform a thorough examination." },
  { icon: FaStethoscope, title: "Custom Treatment Plan", desc: "A personalized strategy is created using advanced 3D imaging." },
  { icon: FaSmileBeam, title: "Transform Your Smile", desc: "Expert care delivered with a gentle touch for lasting results." },
];

export default function ProcessSection({ businessName, niche, designType }: SectionProps) {
  void businessName;
  void niche;
  void designType;

  return (
    <section id="process" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="anim-fade-in text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>The Journey</p>
          <h2 className="anim-fade-up text-3xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
            Our Three-Step Process
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          {steps.map((step, i) => (
            <div key={i} className={`relative z-10 flex flex-col items-center text-center anim-fade-up anim-delay-${(i + 1) * 200}`}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white" style={{ backgroundColor: "var(--primary)" }}>
                <step.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
