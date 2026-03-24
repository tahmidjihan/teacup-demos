import NicheIcon from "@/components/NicheIcon";
import { SectionProps } from "@/types";

export default function NavbarTransparent({ businessName, niche, designType }: SectionProps) {
  void designType;

  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-transparent border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <NicheIcon niche={niche} className="text-2xl text-white" />
          <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-heading)" }}>
            {businessName}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <a href="#home"    className="hover:text-white transition-colors">Home</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#why-choose-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#team"    className="hover:text-white transition-colors">Team</a>
            <a href="#insurance" className="hover:text-white transition-colors">Insurance</a>
          </div>
        <a href="#contact"
          className="text-sm px-6 py-2.5 font-semibold border border-white text-white hover:bg-white hover:text-[var(--primary)] transition-all"
          style={{ borderRadius: "var(--radius-pill)" }}
        >
          Book Consultation
        </a>
      </nav>
    </header>
  );
}
