'use client'
import React, { useState } from "react";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  { question: "How often should I visit {businessName}?", answer: "We recommend visiting at least every six months for routine cleanings and check-ups to maintain optimal dental health." },
  { question: "What should I bring to my first appointment?", answer: "Please bring your ID, insurance card, and any medical records related to your dental health history." },
  { question: "Do you offer financing options?", answer: "Yes, we work with various financing partners to ensure your dental care is affordable and accessible." },
  { question: "How can I book an appointment?", answer: "You can book an appointment online via our website, or by calling our office directly during business hours." },
];

export default function FaqSection({ businessName, niche, designType }: SectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const imagesTyped = images as ImagesData;
  const faqImage = imagesTyped[niche]?.faq || imagesTyped.dentists.faq;
  void designType;

  return (
    <section id="faq" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="anim-fade-right">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Common Questions</p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
              Frequently Asked <br /> Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-100 shadow-sm overflow-hidden" style={{ borderRadius: "var(--radius-card)" }}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-all duration-300"
                  >
                    <span className="font-bold text-lg" style={{ color: "var(--text-main)" }}>
                      {faq.question.replace("{businessName}", businessName)}
                    </span>
                    <FaChevronDown className={`text-sm transition-transform duration-500 ${openIndex === i ? "rotate-180" : ""}`} style={{ color: "var(--primary)" }} />
                  </button>
                  <div className={`transition-all duration-500 overflow-hidden ${openIndex === i ? "max-h-96" : "max-h-0"}`}>
                    <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-slate-50">
                      {faq.answer.replace("{businessName}", businessName)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="anim-fade-left relative">
            <div className="relative z-10 rounded-card overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" style={{ borderRadius: "var(--radius-card)" }}>
              <img src={faqImage} alt="FAQ support" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 opacity-20 blur-3xl rounded-full" style={{ backgroundColor: "var(--primary)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
