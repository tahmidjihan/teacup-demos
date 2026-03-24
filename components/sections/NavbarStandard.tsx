import { FaTooth } from "react-icons/fa";

interface Props { businessName: string }

export default function NavbarStandard({ businessName }: Props) {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
          <FaTooth className="text-2xl" />
          {businessName}
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home"      className="hover:text-[var(--primary)] transition-colors">Home</a>
          <a href="#services"  className="hover:text-[var(--primary)] transition-colors">Services</a>
          <a href="#about"     className="hover:text-[var(--primary)] transition-colors">About</a>
          <a href="#contact"   className="hover:text-[var(--primary)] transition-colors">Insurance</a>
          <a href="#contact"   className="hover:text-[var(--primary)] transition-colors">Contact</a>
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
