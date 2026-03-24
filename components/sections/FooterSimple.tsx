interface Props { businessName: string }

export default function FooterSimple({ businessName }: Props) {
  return (
    <footer className="border-t border-slate-100 py-10 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-bold text-lg" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
          {businessName}
        </span>
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-slate-400">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
