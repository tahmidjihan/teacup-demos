"use client";

interface Props {
  businessName: string;
}

export default function HoldMyTeaWidget({ businessName }: Props) {
  void businessName;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-200 py-3 px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 font-medium text-center sm:text-left">
          ✨ This is a demo website from <span className="font-bold" style={{ color: "var(--primary)" }}>Teacup</span>. 
          Visit <a href="https://teacup.website" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity">teacup.website</a> for creating your own custom site.
        </p>
        <a
          href="https://teacup.website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs font-bold px-6 py-2 transition-all hover:opacity-90 whitespace-nowrap"
          style={{
            backgroundColor: "var(--primary)",
            borderRadius: "var(--radius-pill)",
          }}
        >
          Create My Site
        </a>
      </div>
    </div>
  );
}
