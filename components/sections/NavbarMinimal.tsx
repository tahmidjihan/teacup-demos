import NicheIcon from "@/components/NicheIcon";
import { SectionProps } from "@/types";

export default function NavbarMinimal({ businessName, niche, designType }: SectionProps) {
  void designType;

  return (
    <header className="py-6 px-6 bg-transparent absolute top-0 left-0 right-0 z-40">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <NicheIcon niche={niche} className="text-2xl" style={{ color: "var(--primary)" }} />
          <span className="font-bold text-lg tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
            {businessName}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-500">
            <a href="#home"     className="hover:text-[var(--primary)] transition-colors">Home</a>
            <a href="#services" className="hover:text-[var(--primary)] transition-colors">Services</a>
            <a href="#process"  className="hover:text-[var(--primary)] transition-colors">Process</a>
            <a href="#team"     className="hover:text-[var(--primary)] transition-colors">Team</a>
            <a href="#contact"  className="hover:text-[var(--primary)] transition-colors">Contact</a>
            <a href="#faq"      className="hover:text-[var(--primary)] transition-colors">FAQ</a>
          </div>
      </nav>
    </header>
  );
}
