import {
  Compass,
  CreditCard,
  Gem,
  House,
  Layers,
  SquareLibrary,
  UserRoundCog,
} from "lucide-react";

export const sideBarMenu = [
  {
    title: "Home",
    route: "/dashboard",
    icon: House,
  },
  {
    title: "Discover",
    route: "/discover",
    icon: Compass,
  },
  {
    title: "Library",
    route: "/library",
    icon: SquareLibrary,
  },
  {
    title: "Task Stack",
    route: "/tech-stack",
    icon: Layers,
  },
  {
    title: "Subscription",
    route: "/subscription",
    icon: CreditCard,
  },
  {
    title: "Reward Hub",
    route: "/reward-hub",
    icon: Gem,
  },
  {
    title: "Settings",
    route: "/settings",
    icon: UserRoundCog,
  },
];
