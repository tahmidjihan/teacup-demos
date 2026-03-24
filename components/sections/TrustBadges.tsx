import { FaStar, FaUserMd, FaCreditCard, FaClock } from "react-icons/fa";

interface Props { businessName: string }

const badges = [
  { icon: FaStar,       label: "500+ Five-Star Reviews" },
  { icon: FaUserMd,     label: "Board Certified Dentists" },
  { icon: FaCreditCard, label: "All Insurances Accepted" },
  { icon: FaClock,      label: "Same-Day Appointments" },
];

export default function TrustBadges({ businessName }: Props) {
  void businessName;
  return (
    <section className="py-10 border-y border-slate-100" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <div key={badge.label} className={`flex items-center gap-3 anim-fade-up anim-delay-${(i + 1) * 100}`}>
              <badge.icon className="text-2xl flex-shrink-0" style={{ color: "var(--primary)" }} />
              <span className="text-sm font-semibold text-slate-600">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
