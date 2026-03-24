interface Props { businessName: string }

const badges = [
  { icon: "⭐", label: "500+ 5-Star Reviews" },
  { icon: "🏥", label: "Board Certified" },
  { icon: "💳", label: "All Insurances Accepted" },
  { icon: "🕐", label: "Same-Day Appointments" },
];

export default function TrustBadges({ businessName }: Props) {
  void businessName;
  return (
    <section className="py-10 border-y border-slate-100" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-semibold text-slate-600">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
