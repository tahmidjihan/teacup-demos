interface Props { businessName: string }

export default function FooterDark({ businessName }: Props) {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>{businessName}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Delivering expert dental care with compassion and cutting-edge technology.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-slate-200">Services</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">General Dentistry</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cosmetic Dentistry</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Orthodontics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Implants</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-slate-200">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>📍 123 Smile St, Suite 200</li>
            <li>📞 (555) 123-4567</li>
            <li>📧 hello@{businessName.toLowerCase().replace(/\s+/g, "")}.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {businessName}. All rights reserved.
      </div>
    </footer>
  );
}
