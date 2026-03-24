import NicheIcon from "@/components/NicheIcon";
import { SectionProps } from "@/types";

export default function FooterMinimal({ businessName, niche, designType }: SectionProps) {
  void designType;

  return (
    <footer className="py-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <NicheIcon niche={niche} className="text-xl" style={{ color: "var(--primary)" }} />
          <span className="font-bold text-lg tracking-tight" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
            {businessName}
          </span>
        </div>
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        <div className="flex gap-5 text-sm text-slate-400">
          <a href="#home"     className="hover:text-slate-600 transition-colors">Home</a>
          <a href="#gallery"  className="hover:text-slate-600 transition-colors">Gallery</a>
          <a href="#contact"  className="hover:text-slate-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
