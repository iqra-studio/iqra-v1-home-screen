import {
  BookOpen,
  Bookmark,
  CalendarDays,
  Check,
  ChevronRight,
  CircleUserRound,
  Copy,
  Flame,
  House,
  Info,
  Mosque,
  Play,
  RotateCcwClock,
  Settings,
  Share2,
  Sprout,
  Star,
  User,
  X,
  type LucideIcon
} from 'lucide-react-native';
import type { ColorValue } from 'react-native';

import { useTheme } from '@/theme/ThemeContext';

export type IconName = 'book.closed' | 'calendar' | 'play.fill' | 'bookmark' | 'gearshape' | 'star.fill' | 'doc.on.doc' | 'square.and.arrow.up' | 'flame.fill' | 'sprout' | 'checkmark' | 'xmark' | 'user' | 'g.circle.fill' | 'chevron.right' | 'info.circle' | 'home' | 'mosque' | 'rotate.clock';
type IconProps = { name: IconName; size?: number; color?: ColorValue; strokeWidth?: number };

const icons: Record<IconName, LucideIcon> = {
  'book.closed': BookOpen,
  calendar: CalendarDays,
  'play.fill': Play,
  bookmark: Bookmark,
  gearshape: Settings,
  'star.fill': Star,
  'doc.on.doc': Copy,
  'square.and.arrow.up': Share2,
  'flame.fill': Flame,
  sprout: Sprout,
  checkmark: Check,
  xmark: X,
  user: User,
  'g.circle.fill': CircleUserRound,
  'chevron.right': ChevronRight,
  'info.circle': Info,
  home: House,
  mosque: Mosque,
  'rotate.clock': RotateCcwClock
};

export default function Icon({ name, size = 18, color, strokeWidth }: IconProps) {
  const { theme } = useTheme();
  const IconComponent = icons[name];
  return <IconComponent size={size} color={color ?? theme.textPrimary} strokeWidth={strokeWidth ?? 1.5} />;
}