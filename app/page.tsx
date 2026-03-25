import Link from "next/link";

const niches = ["dentists", "barbers", "cafes", "construction", "medical", "restaurants"];
const themes = [1, 2, 3, 4, 5, 6];
const typos = [1, 2, 3];
const types = [1, 2, 3, 4];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 font-sans">Teacup Demo Links</h1>
        <p className="text-slate-500 mb-10">Use these links to test the dynamic capabilities of the generated site.</p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Niche Demos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {niches.map(niche => (
                <Link key={niche} href={`/v1/${niche}?name=${niche.charAt(0).toUpperCase() + niche.slice(1)}%20Inc.`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center font-semibold hover:text-indigo-600">
                  {niche.charAt(0).toUpperCase() + niche.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Layout Types (for Dentists)</h2>
            <div className="flex flex-wrap gap-4">
              {types.map(type => (
                <Link key={type} href={`/v1/dentists?name=Smile%20Bright&type=${type}`} className="bg-white px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow font-semibold hover:text-indigo-600">
                  Layout {type}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Color Themes (for Dentists)</h2>
            <div className="flex flex-wrap gap-4">
              {themes.map(theme => (
                <Link key={theme} href={`/v1/dentists?name=Smile%20Bright&color-theme=${theme}`} className="bg-white px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow font-semibold hover:text-indigo-600">
                  Theme {theme}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Typography (for Dentists)</h2>
            <div className="flex flex-wrap gap-4">
              {typos.map(typo => (
                <Link key={typo} href={`/v1/dentists?name=Smile%20Bright&typography=${typo}`} className="bg-white px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow font-semibold hover:text-indigo-600">
                  Typography {typo}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Full Customization Example</h2>
            <Link href="/v1/construction?name=BuildRight%20Construction&color-theme=5&typography=2&type=4" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors font-bold">
              Construction Co. (Luxury Layout)
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
