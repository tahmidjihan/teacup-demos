import NicheIcon from "@/components/NicheIcon";
import { SectionProps } from "@/types";

export default function NavbarStandard({ businessName, niche, designType }: SectionProps) {
  void designType;

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <NicheIcon niche={niche} className="text-2xl" style={{ color: "var(--primary)" }} />
          <span className="text-xl font-bold tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
            {businessName}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#home"     className="hover:text-[var(--primary)] transition-colors">Home</a>
          <a href="#services" className="hover:text-[var(--primary)] transition-colors">Services</a>
          <a href="#why-choose-us" className="hover:text-[var(--primary)] transition-colors">Why Us</a>
          <a href="#testimonials" className="hover:text-[var(--primary)] transition-colors">Testimonials</a>
          <a href="#team"     className="hover:text-[var(--primary)] transition-colors">Team</a>
          <a href="#faq"      className="hover:text-[var(--primary)] transition-colors">FAQ</a>
        </div>
        <a href="#contact"
          className="text-white text-sm px-6 py-2.5 hover:opacity-90 transition-all font-semibold"
          style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}
        >
          Book Appointment
        </a>
      </nav>
    </header>
  );
}
