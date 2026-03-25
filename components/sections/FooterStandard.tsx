import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import NicheIcon from "@/components/NicheIcon";
import content from "@/data/content.json";
import { SectionProps, AllContent } from "@/types";

export default function FooterStandard({ businessName, niche }: SectionProps) {
  const contentTyped = content as unknown as AllContent;
  const nicheContent = contentTyped[niche] || contentTyped.generic;

  return (
    <footer className="border-t border-slate-200 py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 font-bold text-2xl mb-6" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
            <NicheIcon niche={niche} className="text-3xl" />
            <span style={{ color: "var(--text-main)" }}>{businessName}</span>
          </div>
          <p className="text-slate-500 text-base leading-relaxed max-w-sm mb-8 font-medium">
            {nicheContent.footer}
          </p>
          <div className="flex items-center gap-4">
            {[FaFacebook, FaInstagram, FaGoogle].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-slate-900">Explore</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-500">
            {[["#home", "Home"], ["#services", "Our Services"], ["#about", "About Us"], ["#contact", "Get in Touch"]].map(([href, label]) => (
              <li key={label}><a href={href} className="hover:text-primary transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-slate-900">Operating Hours</h4>
          <ul className="space-y-3 text-sm font-medium text-slate-500">
            <li className="flex justify-between border-b border-slate-50 pb-2"><span>Mon–Fri</span> <span className="text-slate-900 font-bold">8am–6pm</span></li>
            <li className="flex justify-between border-b border-slate-50 pb-2"><span>Saturday</span> <span className="text-slate-900 font-bold">9am–2pm</span></li>
            <li className="flex justify-between border-b border-slate-50 pb-2"><span>Sunday</span> <span className="text-slate-400 italic">Closed</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:row justify-between items-center gap-4 text-sm font-medium text-slate-400">
        <p>© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
