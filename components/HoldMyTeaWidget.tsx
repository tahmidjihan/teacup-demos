"use client";
import { useState } from "react";

interface Props {
  businessName: string;
}

export default function HoldMyTeaWidget({ businessName }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white border border-slate-200 rounded-card shadow-xl p-6 w-72">
          <p className="text-sm font-semibold text-slate-700 mb-1">
            Love what you see?
          </p>
          <p className="text-sm text-slate-500 mb-4">
            This is a live preview for{" "}
            <span className="font-medium text-slate-700">{businessName}</span>.
            Get your own custom site — no commitment required.
          </p>
          <button
            className="w-full text-white text-sm font-semibold px-4 py-3 transition-all hover:opacity-90"
            style={{
              backgroundColor: "var(--primary)",
              borderRadius: "var(--radius-pill)",
            }}
          >
            Get My Free Demo
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="text-white text-sm font-semibold px-5 py-3 shadow-lg flex items-center gap-2 transition-all hover:opacity-90"
        style={{
          backgroundColor: "var(--primary)",
          borderRadius: "var(--radius-pill)",
        }}
      >
        <span>🍵</span>
        <span>{open ? "Close" : "Get This Site"}</span>
      </button>
    </div>
  );
}
