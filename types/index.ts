export interface HeroImages {
  centered: string;
  split: string;
  warm: string;
  full: string;
}

export interface ServiceImage {
  title: string;
  image: string;
}

export interface NicheImages {
  hero: HeroImages;
  services: ServiceImage[];
  gallery: string[];
  avatars: string[];
  contact: string;
  team: string[];
  faq: string;
  insurance: string;
  doctor: string;
  logo: string;
  cta: string;
}

export type ImagesData = Record<string, NicheImages>;

export interface SectionProps {
  businessName: string;
  niche: string;
  designType: string;
}
