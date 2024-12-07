"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaUser,
  FaBox,
  FaHeart,
  FaBell,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { name: "Profile", path: "/profile/profile-detail", icon: FaUser },
    { name: "Orders", path: "/profile/order", icon: FaBox },
    { name: "Wishlist", path: "/profile/wishlist", icon: FaHeart },
    { name: "Notification", path: "/profile/notification", icon: FaBell },
    { name: "Logout", path: "/profile/logout", icon: FaSignOutAlt },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } h-screen bg-primaryBrown text-white p-6 flex flex-col items-start transition-all duration-300`}
      >
        <button
          className="mb-6 text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        <ul className="space-y-4 w-full">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center ${
                pathname === item.path
                  ? "bg-white text-primaryBrown rounded-xl p-2"
                  : ""
              } cursor-pointer`}
            >
              <span className="text-lg">
                <item.icon />
              </span>
              {isOpen && (
                <Link href={item.path} className="hover:text-gray-300 ml-3">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
