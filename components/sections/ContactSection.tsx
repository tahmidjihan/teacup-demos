import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import images from "@/data/images.json";
import { ImagesData, SectionProps } from "@/types";

export default function ContactSection({ businessName, niche, designType }: SectionProps) {
  const imagesTyped = images as ImagesData;
  const contactImage = imagesTyped[niche]?.contact || imagesTyped.dentists.contact || "";
  void designType;

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 bg-white shadow-2xl overflow-hidden" style={{ borderRadius: "var(--radius-card)" }}>
          <div className="p-10 lg:p-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
              Contact {businessName}
            </h2>
            <div className="space-y-8 mb-12">
              {[
                { icon: FaPhoneAlt,      label: "Phone",   val: "(555) 000-1234" },
                { icon: FaEnvelope,      label: "Email",   val: "hello@example.com" },
                { icon: FaMapMarkerAlt,  label: "Address", val: "123 Dental Way, Suite 100" },
                { icon: FaClock,         label: "Hours",   val: "Mon-Fri: 8am - 6pm" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 anim-fade-up" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--secondary)" }}>
                    <item.icon style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{item.label}</p>
                    <p className="font-semibold" style={{ color: "var(--text-main)" }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 text-white font-bold transition-all hover:opacity-90 shadow-lg" style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}>
              Book Appointment
            </button>
          </div>
          <div className="relative h-64 lg:h-auto">
            {contactImage && (
              <Image
                src={contactImage}
                alt="Our office"
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, white, transparent)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
