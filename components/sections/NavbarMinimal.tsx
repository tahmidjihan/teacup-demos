import { FaTooth } from "react-icons/fa";

interface Props { businessName: string }

export default function NavbarMinimal({ businessName }: Props) {
  return (
    <header className="bg-white sticky top-0 z-40 border-b border-slate-50">
      <nav className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          <FaTooth style={{ color: "var(--primary)" }} />
          {businessName}
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-500">
          <a href="#home"     className="hover:text-[var(--primary)] transition-colors">Home</a>
          <a href="#services" className="hover:text-[var(--primary)] transition-colors">Services</a>
          <a href="#about"    className="hover:text-[var(--primary)] transition-colors">About</a>
          <a href="#contact"  className="hover:text-[var(--primary)] transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}
