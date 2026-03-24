import { FaTooth, FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

interface Props { businessName: string }

export default function FooterSimple({ businessName }: Props) {
  return (
    <footer className="border-t border-slate-100 py-10 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
          <FaTooth />
          {businessName}
        </a>
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {[FaFacebook, FaInstagram, FaGoogle].map((Icon, i) => (
            <a key={i} href="#" className="text-slate-400 hover:text-slate-600 transition-colors text-lg">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
