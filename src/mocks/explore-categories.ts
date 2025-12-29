import { Ionicons } from "@expo/vector-icons";

type TIcon = keyof typeof Ionicons.glyphMap;

export const exploreCategories: {
  id: string;
  name: string;
  description: string;
  icon: TIcon;
}[] = [
  {
    id: "1",
    name: "New Arrivals",
    description: "Fresh faces this week",
    icon: "airplane-outline",
  },
  {
    id: "2",
    name: "Most Viewed",
    description: "Trending profiles",
    icon: "eye-outline",
  },
  {
    id: "3",
    name: "VIP Selection",
    description: "Exclusive companions",
    icon: "diamond-outline",
  },
  {
    id: "4",
    name: "Verified",
    description: "Identity confirmed",
    icon: "shield-checkmark-outline",
  },
  {
    id: "5",
    name: "Independents",
    description: "Direct booking",
    icon: "bookmarks-outline",
  },
  {
    id: "6",
    name: "Massage",
    description: "Relaxation services",
    icon: "flower-outline",
  },
  {
    id: "7",
    name: "Fetishes",
    description: "Specialized interests",
    icon: "ice-cream-outline",
  },
  {
    id: "8",
    name: "Top Rated",
    description: "Highest reviews",
    icon: "star-outline",
  },
];
