import { Menu, Bell } from "lucide-react";
import { useLocation } from "react-router-dom";

interface NavbarProps {
  toggle: () => void;
}

// Map routes to titles and subtitles
const routeTitles: Record<string, { title: string; subtitle?: string }> = {
  "/dashboard": {
    title: "Home",
    subtitle: "Welcome back to your dashboard",
  },
  "/discover": {
    title: "Discover",
    subtitle: "Explore new features and content",
  },
  "/library": {
    title: "Library",
    subtitle: "Manage your saved items",
  },
  "/tech-stack": {
    title: "Task Stack",
    subtitle: "Keep track of your tasks",
  },
  "/subscription": {
    title: "Subscription",
    subtitle: "Manage your subscription plans",
  },
  "/reward-hub": {
    title: "Rewards Hub",
    subtitle: "Earn points, unlock rewards, and celebrate your progress!",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Manage your account and preferences",
  },
};

const Navbar = ({ toggle }: NavbarProps) => {
  const { pathname } = useLocation();

  const routeInfo = routeTitles[pathname] || { title: "Dashboard" };

  return (
    <div className="w-full flex items-start justify-between pt-3 lg:pt-8 px-3 md:px-6 pb-3 lg:pb-5 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={toggle}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>

        <div className="">
          <span className="text-xl md:text-[1.5rem] font-medium text-gray-800">
            {routeInfo.title}
          </span>
          {routeInfo.subtitle && (
            <p className="hidden lg:block mt-2 text-gray-600">
              {routeInfo.subtitle}
            </p>
          )}
        </div>
      </div>

      <div>
        <button className="p-2 rounded-full bg-gray-100">
          <Bell className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
