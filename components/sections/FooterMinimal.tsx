import { FaTooth } from "react-icons/fa";

interface Props { businessName: string }

export default function FooterMinimal({ businessName }: Props) {
  return (
    <footer className="py-10 px-6 border-t border-white/10" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "var(--primary)" }}>
          <FaTooth />
          {businessName}
        </a>
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
