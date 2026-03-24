import NicheIcon from "@/components/NicheIcon";
import { SectionProps } from "@/types";

export default function NavbarFloating({ businessName, niche, designType }: SectionProps) {
  void designType;

  return (
    <header className="sticky top-4 z-40 mx-auto max-w-5xl px-4 mt-4">
      <nav className="bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm rounded-pill flex items-center justify-between px-8 py-4">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
          <NicheIcon niche={niche} className="text-xl" />
          {businessName}
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home"     className="text-slate-600 hover:text-[var(--primary)] transition-colors">Home</a>
          <a href="#services" className="text-slate-600 hover:text-[var(--primary)] transition-colors">Services</a>
          <a href="#process"  className="text-slate-600 hover:text-[var(--primary)] transition-colors">Process</a>
          <a href="#team"     className="text-slate-600 hover:text-[var(--primary)] transition-colors">Team</a>
          <a href="#insurance" className="text-slate-600 hover:text-[var(--primary)] transition-colors">Insurance</a>
          <a href="#faq"      className="text-slate-600 hover:text-[var(--primary)] transition-colors">FAQ</a>
        </div>
        <a href="#contact"
          className="text-white text-sm px-6 py-2 hover:opacity-90 transition-all font-semibold"
          style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}
