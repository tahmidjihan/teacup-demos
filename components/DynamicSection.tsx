import NavbarFloating from "./sections/NavbarFloating";
import NavbarStandard from "./sections/NavbarStandard";
import NavbarMinimal from "./sections/NavbarMinimal";
import NavbarTransparent from "./sections/NavbarTransparent";
import HeroCentered from "./sections/HeroCentered";
import HeroSplitRight from "./sections/HeroSplitRight";
import HeroWarm from "./sections/HeroWarm";
import HeroFullHeight from "./sections/HeroFullHeight";
import TrustBadges from "./sections/TrustBadges";
import ServicesPillCards from "./sections/ServicesPillCards";
import BentoGridServices from "./sections/BentoGridServices";
import Testimonials from "./sections/Testimonials";
import IconFeatureList from "./sections/IconFeatureList";
import ContactSection from "./sections/ContactSection";
import GalleryGrid from "./sections/GalleryGrid";
import CtaRibbon from "./sections/CtaRibbon";
import FooterSimple from "./sections/FooterSimple";
import FooterDark from "./sections/FooterDark";
import FooterStandard from "./sections/FooterStandard";
import FooterMinimal from "./sections/FooterMinimal";

interface Props {
  type: string;
  businessName: string;
}

const sectionMap: Record<string, React.ComponentType<{ businessName: string }>> = {
  navbar_floating: NavbarFloating,
  navbar_standard: NavbarStandard,
  navbar_minimal: NavbarMinimal,
  navbar_transparent: NavbarTransparent,
  hero_centered: HeroCentered,
  hero_split_right: HeroSplitRight,
  hero_warm: HeroWarm,
  hero_full_height: HeroFullHeight,
  trust_badges: TrustBadges,
  services_pill_cards: ServicesPillCards,
  bento_grid_services: BentoGridServices,
  testimonials: Testimonials,
  icon_feature_list: IconFeatureList,
  contact_section: ContactSection,
  gallery_grid: GalleryGrid,
  cta_ribbon: CtaRibbon,
  footer_simple: FooterSimple,
  footer_dark: FooterDark,
  footer_standard: FooterStandard,
  footer_minimal: FooterMinimal,
};

export default function DynamicSection({ type, businessName }: Props) {
  const Component = sectionMap[type];
  if (!Component) return null;
  return <Component businessName={businessName} />;
}
