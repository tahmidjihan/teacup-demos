interface Props { businessName: string }

export default function NavbarMinimal({ businessName }: Props) {
  return (
    <header className="bg-white sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <span className="font-semibold text-lg" style={{ color: "var(--text-main)", fontFamily: "var(--font-heading)" }}>
          {businessName}
        </span>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-[var(--primary)] transition-colors">Services</a>
          <a href="#" className="hover:text-[var(--primary)] transition-colors">About</a>
          <a href="#" className="hover:text-[var(--primary)] transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}
