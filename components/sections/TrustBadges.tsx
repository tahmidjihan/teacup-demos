import { FaAward, FaUserShield, FaHandshake, FaMicroscope, FaCheckCircle, FaStar, FaShieldAlt } from "react-icons/fa";
import content from "@/data/content.json";
import { SectionProps, AllContent } from "@/types";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType[]> = {
  dentists: [FaStar, FaUserShield, FaHandshake, FaMicroscope],
  barbers: [FaCheckCircle, FaAward, FaShieldAlt, FaStar],
  generic: [FaCheckCircle, FaShieldAlt, FaStar, FaAward],
};

export default function TrustBadges({ niche, designType }: SectionProps) {
  const contentTyped = content as unknown as AllContent;
  const nicheTrust = contentTyped[niche]?.trust || contentTyped.generic.trust;
  const icons = iconMap[niche] || iconMap.generic;

  const isType1 = designType === "1";
  const isType2 = designType === "2";
  const isType4 = designType === "4";

  return (
    <section 
      className={`py-12 ${isType4 ? "bg-black border-y border-white/10" : "border-y border-slate-100"}`} 
      style={{ backgroundColor: isType1 ? "var(--secondary)" : isType2 ? "var(--primary)" : isType4 ? "black" : "white" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12`}>
          {nicheTrust.map((badge, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div 
                key={badge.label} 
                className={`flex items-center gap-4 anim-fade-up anim-delay-${(i + 1) * 100} ${isType2 || isType4 ? "text-white" : "text-slate-600"}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${isType2 || isType4 ? "bg-white/10" : "bg-primary/5"}`}>
                  <Icon className="text-2xl" style={{ color: isType2 || isType4 ? "white" : "var(--primary)" }} />
                </div>
                <span className={`text-sm font-bold uppercase tracking-wider leading-tight ${isType4 ? "font-light" : ""}`}>
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
