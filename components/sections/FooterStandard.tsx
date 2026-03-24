interface Props { businessName: string }

export default function FooterStandard({ businessName }: Props) {
  return (
    <footer className="border-t border-slate-200 py-12 px-6" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="font-bold text-xl mb-2" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
            {businessName}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Your trusted dental home for the whole family. Modern care, warm hearts.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3 text-slate-700">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-800 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-slate-800 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-slate-800 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-slate-800 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3 text-slate-700">Hours</h4>
          <ul className="space-y-1 text-sm text-slate-500">
            <li>Mon–Fri: 8am–6pm</li>
            <li>Saturday: 9am–2pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-slate-100 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {businessName}. All rights reserved.
      </div>
    </footer>
  );
}
