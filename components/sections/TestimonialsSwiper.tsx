"use client";
import React, { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function TestimonialsSwiper({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const nicheAvatars = imagesTyped[niche]?.avatars || imagesTyped.dentists.avatars;
  
  const displayAvatars = designType === "2" ? [...nicheAvatars].reverse() : nicheAvatars;

  const reviews = [
    {
      name: "Sarah M.",
      role: "Patient since 2021",
      text: "Absolutely incredible experience. The team made me feel at ease from the moment I walked in.",
      stars: 5,
      avatar: displayAvatars[0],
    },
    {
      name: "James T.",
      role: "Patient since 2020",
      text: "Best dental practice I've ever been to. Professional, thorough, and genuinely caring staff.",
      stars: 5,
      avatar: displayAvatars[1],
    },
    {
      name: "Rachel K.",
      role: "Patient since 2022",
      text: "My smile transformation was beyond what I imagined. I can't stop smiling now — truly life-changing!",
      stars: 5,
      avatar: displayAvatars[2],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  void businessName;

  return (
    <section id="testimonials" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="anim-fade-in text-center text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Patient Stories</p>
        <h2 className="anim-fade-up text-3xl lg:text-4xl font-bold text-center mb-3 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          What Our Patients Say
        </h2>
        <p className="anim-fade-up anim-delay-100 text-center text-slate-500 mb-14">Over 500 five-star reviews and counting.</p>
        
        <div className="relative overflow-hidden rounded-card bg-white border border-slate-100 shadow-sm p-8 md:p-12">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviews.map((r, i) => (
              <div key={i} className="w-full flex-shrink-0 flex flex-col items-center text-center px-4">
                <FaQuoteLeft className="text-4xl mb-6 opacity-20" style={{ color: "var(--primary)" }} />
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <FaStar key={j} className="text-amber-400 text-lg" />
                  ))}
                </div>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl italic">&quot;{r.text}&quot;</p>
                <div className="flex flex-col items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                  <div>
                    <p className="font-semibold text-base" style={{ color: "var(--text-main)" }}>{r.name}</p>
                    <p className="text-sm text-slate-400">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-400 hover:text-[var(--primary)] transition-colors z-10">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-400 hover:text-[var(--primary)] transition-colors z-10">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
