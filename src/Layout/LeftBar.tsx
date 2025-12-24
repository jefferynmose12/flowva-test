import { Link, useLocation } from "react-router-dom";
import { sideBarMenu } from "./data";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const LeftBar = () => {
  const { pathname } = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { signOut } = useAuth();

  return (
    <aside className="h-screen w-full bg-white flex flex-col justify-between">
      <div className="flex items-center gap-3 px-6 py-5">
        <img
          src="https://app.flowvahub.com/assets/flowva_logo-xVpZI3-U.png"
          alt="logo"
          className="w-[80%]"
        />
      </div>

      <nav className="px-3  flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {sideBarMenu?.map((item) => {
            const isActive = pathname.includes(item.route);

            return (
              <li key={item.title}>
                <Link
                  to={item.route}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-md font-medium transition
                    ${
                      isActive
                        ? "bg-[rgba(144,19,254,0.2)] text-[#9013FE]"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <item.icon className="h-6 w-6" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="py-3 relative flex justify-center">
        <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]" />

        <div className="w-full flex items-center justify-between px-4">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center border-none cursor-pointer"
          >
            <div className="w-10 h-10 relative overflow-hidden rounded-full font-semibold mr-3 flex items-center justify-center  text-[#9013FE] bg-[#E9D4FF]">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocI7FHI7hwAWxHOYusrbHKgfomMLzLDlzT8ZBcjzdSV11MQVuLfH=s96-c"
                alt="profile-pics"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div className="text-start">
              <span className="text-[0.9rem] text-black font-semibold">
                Jeffery Nmose
              </span>
              <p className="text-[0.8rem] text-[#718096] truncate overflow-x-hidden max-w-38.25">
                jefferyjohnnmose@gmail.com
              </p>
            </div>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="mt-2 w-full rounded-md bg-white shadow-md border border-[rgba(144,19,254,0.2)] z-50 absolute bottom-14 left-4 right-4">
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default LeftBar;
