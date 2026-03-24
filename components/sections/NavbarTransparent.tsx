interface Props { businessName: string }

export default function NavbarTransparent({ businessName }: Props) {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <span className="font-bold text-xl text-white" style={{ fontFamily: "var(--font-heading)" }}>
          {businessName}
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Gallery</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button
          className="text-sm px-6 py-2.5 font-semibold border border-white text-white hover:bg-white transition-all"
          style={{ borderRadius: "var(--radius-pill)", color: "white" }}
        >
          Book Consultation
        </button>
      </nav>
    </header>
  );
}
