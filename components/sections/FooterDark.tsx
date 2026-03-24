import { FaTooth, FaFacebook, FaInstagram, FaGoogle, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface Props { businessName: string }

export default function FooterDark({ businessName }: Props) {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <a href="#home" className="flex items-center gap-2 font-bold text-xl mb-4 hover:opacity-80 transition-opacity" style={{ fontFamily: "var(--font-heading)" }}>
            <FaTooth style={{ color: "var(--primary)" }} />
            {businessName}
          </a>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Delivering expert dental care with compassion and cutting-edge technology.
          </p>
          <div className="flex items-center gap-3">
            {[FaFacebook, FaInstagram, FaGoogle].map((Icon, i) => (
              <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors text-lg">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-slate-200">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {[["#home", "Home"], ["#services", "Services"], ["#about", "About"], ["#contact", "Contact"]].map(([href, label]) => (
              <li key={label}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-slate-200">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} /><span>123 Smile St, Suite 200</span></li>
            <li className="flex items-center gap-2"><FaPhone style={{ color: "var(--primary)" }} /><span>(555) 123-4567</span></li>
            <li className="flex items-center gap-2"><FaEnvelope style={{ color: "var(--primary)" }} /><span>hello@{businessName.toLowerCase().replace(/\s+/g, "")}.com</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {businessName}. All rights reserved.
      </div>
    </footer>
  );
}
