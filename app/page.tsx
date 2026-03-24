import Link from "next/link";

export default function Home() {
  const demoLinks = [
    {
      label: "Soft Minimalist — Classic Teal",
      href: "/v1/dentists?name=Bright+Smile+Dental&color-theme=1&typography=1&type=1",
    },
    {
      label: "High-Contrast Specialist — Royal Blue",
      href: "/v1/dentists?name=Premier+Dental+Care&color-theme=2&typography=4&type=2",
    },
    {
      label: "Clean Healthcare — Modern Mint",
      href: "/v1/dentists?name=Greenfield+Dental&color-theme=3&typography=3&type=3",
    },
    {
      label: "Luxury Aesthetic — Soft Rose",
      href: "/v1/dentists?name=Elite+Orthodontics&color-theme=5&typography=2&type=4",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-12">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Teacup Demo Engine
        </h1>
        <p className="text-slate-500 mb-10 text-lg">
          Dynamic dental website previews. Choose a demo below or build your
          own URL.
        </p>

        <div className="grid gap-4">
          {demoLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-white border border-slate-200 rounded-2xl px-6 py-5 text-left hover:shadow-md hover:border-slate-300 transition-all"
            >
              <span className="font-semibold text-slate-700">{link.label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 text-left">
          <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">
            URL Structure
          </p>
          <code className="text-sm text-slate-700 break-all">
            /v1/dentists?name=&lt;Business+Name&gt;&amp;color-theme=&lt;1-7&gt;&amp;typography=&lt;1-4&gt;&amp;type=&lt;1-4&gt;
          </code>
        </div>
      </div>
    </main>
  );
}
