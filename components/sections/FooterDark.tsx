import { FaFacebook, FaInstagram, FaGoogle, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import NicheIcon from "@/components/NicheIcon";
import content from "@/data/content.json";
import { SectionProps, AllContent } from "@/types";

export default function FooterDark({ businessName, niche }: SectionProps) {
  const contentTyped = content as unknown as AllContent;
  const nicheContent = contentTyped[niche] || contentTyped.generic;

  return (
    <footer className="bg-slate-950 text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <NicheIcon niche={niche} className="text-3xl text-primary" />
            <span className="text-2xl font-black tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
              {businessName}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs font-medium">
            {nicheContent.footer}
          </p>
          <div className="flex items-center gap-4">
            {[FaFacebook, FaInstagram, FaGoogle].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white/40">Quick Links</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-300">
            {[["#home", "Home"], ["#services", "Services"], ["#about", "About"], ["#contact", "Contact"]].map(([href, label]) => (
              <li key={label}><a href={href} className="hover:text-primary transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white/40">Contact</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-300">
            <li className="flex items-start gap-3"><FaMapMarkerAlt className="mt-1 flex-shrink-0 text-primary" /><span>123 Expert Way, Suite 500</span></li>
            <li className="flex items-center gap-3"><FaPhone className="text-primary" /><span>(555) 987-6543</span></li>
            <li className="flex items-center gap-3"><FaEnvelope className="text-primary" /><span>connect@{businessName.toLowerCase().replace(/\s+/g, "")}.com</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
        <div>© {new Date().getFullYear()} {businessName}</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
