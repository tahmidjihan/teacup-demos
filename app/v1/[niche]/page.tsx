import type { CSSProperties } from "react";
import themes from "@/data/themes.json";
import typographies from "@/data/typographies.json";
import references from "@/data/references.json";
import DynamicSection from "@/components/DynamicSection";
import HoldMyTeaWidget from "@/components/HoldMyTeaWidget";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ niche: string }>;
  searchParams: Promise<{
    name?: string;
    "color-theme"?: string;
    typography?: string;
    type?: string;
  }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams;
  const { niche } = await params;
  const name = sp.name || "Your Business";
  const formattedNiche = niche.charAt(0).toUpperCase() + niche.slice(1);
  return {
    title: `${name} | Professional ${formattedNiche} Website`,
    description: `Experience the best ${niche} services at ${name}. A custom demo powered by Teacup.`,
  };
}

export default async function DemoPage({ params, searchParams }: PageProps) {
  const { niche } = await params;
  const sp = await searchParams;

  const name = sp.name || "Your Business";
  const themeId = Number(sp["color-theme"]) || 1;
  const typoId = Number(sp.typography) || 1;
  const typeId = sp.type || "1";

  const nicheData = references[niche as keyof typeof references];
  const designConfig = nicheData
    ? (nicheData[`type_${typeId}` as keyof typeof nicheData] ||
       nicheData["type_1"]) as { style: string; ref: string; layout: string[] }
    : references.dentists.type_1 as { style: string; ref: string; layout: string[] };

  const activeTheme = themes.find((t) => t.id === themeId) || themes[0];
  const activeTypo = typographies.find((t) => t.id === typoId) || typographies[0];

  const styleVariables = {
    "--primary": activeTheme.primary,
    "--secondary": activeTheme.secondary,
    "--accent": activeTheme.accent,
    "--text-main": activeTheme.text,
    "--font-heading": activeTypo.heading,
    "--font-body": activeTypo.body,
    "--radius-pill": "9999px",
    "--radius-card": "1.5rem",
    fontFamily: "var(--font-body)",
    color: "var(--text-main)",
    backgroundColor: "var(--secondary)",
  } as CSSProperties;

  return (
    <div style={styleVariables} className="min-h-screen">
      {designConfig.layout.map((section: string) => (
        <DynamicSection key={section} type={section} businessName={name} niche={niche} designType={typeId} />
      ))}
      <HoldMyTeaWidget businessName={name} />
    </div>
  );
}
