import { FaTooth } from "react-icons/fa";

interface Props { businessName: string }

export default function NavbarTransparent({ businessName }: Props) {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl text-white hover:opacity-80 transition-opacity" style={{ fontFamily: "var(--font-heading)" }}>
          <FaTooth />
          {businessName}
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#home"    className="hover:text-white transition-colors">Home</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#about"   className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
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
