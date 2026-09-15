import {
  Book,
  BookOpen,
  Bookmark,
  CalendarDays,
  Check,
  ChevronRight,
  CircleUserRound,
  Copy,
  CornerDownRightIcon,
  Flame,
  Flower,
  House,
  Info,
  Mosque,
  Play,
  RotateCcwClock,
  Settings,
  Share2,
  SparklesIcon,
  Sprout,
  Star,
  Trophy,
  User,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react-native";
import type { ColorValue } from "react-native";

import { useTheme } from "@/theme/ThemeContext";

export type IconName =
  | "book.closed"
  | "calendar"
  | "play.fill"
  | "bookmark"
  | "gearshape"
  | "sparkles"
  | "star.fill"
  | "doc.on.doc"
  | "square.and.arrow.up"
  | "flame.fill"
  | "sprout"
  | "checkmark"
  | "xmark"
  | "user"
  | "g.circle.fill"
  | "chevron.right"
  | "info.circle"
  | "home"
  | "mosque"
  | "rotate.clock"
  | "corner.down.right"
  | "book"
  | "zap"
  | "trophy"
  | "flower";
type IconProps = {
  name: IconName;
  size?: number;
  color?: ColorValue;
  fill?: ColorValue;
  strokeWidth?: number;
};

const icons: Record<IconName, LucideIcon> = {
  "book.closed": BookOpen,
  calendar: CalendarDays,
  "play.fill": Play,
  bookmark: Bookmark,
  gearshape: Settings,
  sparkles: SparklesIcon,
  "star.fill": Star,
  "doc.on.doc": Copy,
  "square.and.arrow.up": Share2,
  "flame.fill": Flame,
  sprout: Sprout,
  checkmark: Check,
  xmark: X,
  user: User,
  "g.circle.fill": CircleUserRound,
  "chevron.right": ChevronRight,
  "info.circle": Info,
  home: House,
  mosque: Mosque,
  "rotate.clock": RotateCcwClock,
  "corner.down.right": CornerDownRightIcon,
  book: Book,
  zap: Zap,
  trophy: Trophy,
  flower: Flower,
};

export default function Icon({
  name,
  size = 18,
  color,
  fill = "none",
  strokeWidth,
}: IconProps) {
  const { theme } = useTheme();
  const IconComponent = icons[name];
  return (
    <IconComponent
      size={size}
      color={color ?? theme.textPrimary}
      strokeWidth={strokeWidth ?? 1.5}
      fill={fill}
    />
  );
}
