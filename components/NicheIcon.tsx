import { FaTooth, FaCut, FaCoffee, FaHammer, FaStethoscope, FaUtensils } from "react-icons/fa";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  dentists: FaTooth,
  barbers: FaCut,
  cafes: FaCoffee,
  construction: FaHammer,
  medical: FaStethoscope,
  restaurants: FaUtensils,
};

interface Props {
  niche: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function NicheIcon({ niche, className, style }: Props) {
  const Icon = iconMap[niche] || FaTooth;
  return <Icon className={className} style={style} />;
}
