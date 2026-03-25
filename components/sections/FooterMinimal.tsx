import NicheIcon from "@/components/NicheIcon";
import { SectionProps } from "@/types";

export default function FooterMinimal({ businessName, niche, designType }: SectionProps) {
  void designType;

  return (
    <footer className="py-24 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <NicheIcon niche={niche} className="text-4xl text-white/40" />
          <span className="font-extralight text-4xl tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            {businessName}
          </span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">
          <a href="#home"     className="hover:text-white transition-all duration-500">Residence</a>
          <a href="#gallery"  className="hover:text-white transition-all duration-500">Collection</a>
          <a href="#about"    className="hover:text-white transition-all duration-500">Heritage</a>
          <a href="#contact"  className="hover:text-white transition-all duration-500">Inquiry</a>
        </nav>

        <div className="w-full h-px bg-white/5" />

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
          <p>© {new Date().getFullYear()} {businessName}. Bespoke Digital Experience.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/40 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
