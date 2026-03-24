import { FaAward, FaUserShield, FaHandshake, FaMicroscope } from "react-icons/fa";
import { SectionProps } from "@/types";

const badges = [
  { icon: FaAward,      label: "500+ Five-Star Reviews" },
  { icon: FaUserShield, label: "Board Certified Dentists" },
  { icon: FaHandshake,  label: "All Insurances Accepted" },
  { icon: FaMicroscope, label: "Same-Day Appointments" },
];

export default function TrustBadges({ businessName, niche, designType }: SectionProps) {
  void businessName;
  void niche;
  void designType;
  return (
    <section className="py-10 border-y border-slate-100" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <div key={badge.label} className={`flex items-center gap-3 anim-bounce-in anim-delay-${(i + 1) * 100}`}>
              <badge.icon className="text-2xl flex-shrink-0" style={{ color: "var(--primary)" }} />
              <span className="text-sm font-semibold text-slate-600">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
