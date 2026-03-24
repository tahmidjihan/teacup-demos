interface Props { businessName: string }

export default function NavbarStandard({ businessName }: Props) {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <span className="font-bold text-xl" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
          {businessName}
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-[var(--primary)] transition-colors">Services</a>
          <a href="#" className="hover:text-[var(--primary)] transition-colors">About</a>
          <a href="#" className="hover:text-[var(--primary)] transition-colors">Insurance</a>
          <a href="#" className="hover:text-[var(--primary)] transition-colors">Contact</a>
        </div>
        <button
          className="text-white text-sm px-6 py-2.5 hover:opacity-90 transition-all font-semibold"
          style={{ backgroundColor: "var(--primary)", borderRadius: "var(--radius-pill)" }}
        >
          Book Appointment
        </button>
      </nav>
    </header>
  );
}
