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
  gallery?: string[];
  avatars?: string[];
  contact?: string;
  team?: string[];
  faq?: string;
  insurance?: string;
  doctor?: string;
  logo?: string;
  cta?: string;
}

export type ImagesData = Record<string, NicheImages>;

export interface SectionProps {
  businessName: string;
  niche: string;
  designType: string;
}

export interface ContentItem {
  title: string;
  desc: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface HeroContent {
  tagline: string;
  headline: string;
  description: string;
  cta1: string;
  cta2?: string;
}

export interface ServicesContent {
  headline: string;
  description: string;
  items: ContentItem[];
}

export interface TestimonialsContent {
  tagline: string;
  headline: string;
  description: string;
  items: TestimonialItem[];
}

export interface TrustItem {
  label: string;
}

export interface NicheContent {
  hero: HeroContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  trust: TrustItem[];
  footer: string;
}

export type AllContent = Record<string, NicheContent>;
