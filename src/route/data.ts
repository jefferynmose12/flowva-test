import ComingSoon from "../page/dashboard/ComingSoon";
import RewardHub from "../page/dashboard/RewardHub";
import Login from "../page/Login";
import Register from "../page/Register";

type IRoute = {
  route: string;
  component: React.ComponentType;
};

export const openRoutes = [
  {
    route: "/login",
    component: Login,
  },
  {
    route: "/register",
    component: Register,
  },
];

export const authRoutes: IRoute[] = [
  {
    route: "/dashboard",
    component: ComingSoon,
  },
  {
    route: "/discover",
    component: ComingSoon,
  },
  {
    route: "/library",
    component: ComingSoon,
  },
  {
    route: "/tech-stack",
    component: ComingSoon,
  },
  {
    route: "/subscription",
    component: ComingSoon,
  },
  {
    route: "/reward-hub",
    component: RewardHub,
  },
  {
    route: "/settings",
    component: ComingSoon,
  },
];
