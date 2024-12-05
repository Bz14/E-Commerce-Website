"use client";
import { useState } from "react";
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
  const [isSelected, setIsSelected] = useState("profile");

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } h-screen bg-primaryBrown text-white p-6 flex flex-col items-start transition-all duration-300`}
      >
        {/* Toggle Button */}
        <button
          className="mb-6 text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        {/* Menu List */}
        <ul className="space-y-4 w-full">
          <li
            className={`flex items-center ${
              isSelected === "profile"
                ? "bg-white text-primaryBrown rounded-xl p-2 "
                : ""
            } cursor-pointer`}
            onClick={() => setIsSelected("profile")}
          >
            <span className="text-lg">
              <FaUser />
            </span>
            {isOpen && (
              <Link
                href="/profile/profile-detail"
                className="hover:text-gray-300 ml-3"
              >
                Profile
              </Link>
            )}
          </li>
          <li
            className={`flex items-center ${
              isSelected === "orders"
                ? "bg-white text-primaryBrown rounded-xl p-2 "
                : ""
            } cursor-pointer`}
            onClick={() => setIsSelected("orders")}
          >
            <span className="text-lg">
              <FaBox />
            </span>
            {isOpen && (
              <Link href="/profile/order" className="hover:text-gray-300 ml-3">
                Orders
              </Link>
            )}
          </li>
          <li
            className={`flex items-center ${
              isSelected === "wishlist"
                ? "bg-white text-primaryBrown rounded-xl p-2 "
                : ""
            } cursor-pointer`}
            onClick={() => setIsSelected("wishlist")}
          >
            <span className="text-lg">
              <FaHeart />
            </span>
            {isOpen && (
              <Link
                href="/profile/wishlist"
                className="hover:text-gray-300 ml-3"
              >
                Wishlist
              </Link>
            )}
          </li>
          <li
            className={`flex items-center ${
              isSelected === "notify"
                ? "bg-white text-primaryBrown rounded-xl p-2 "
                : ""
            } cursor-pointer`}
            onClick={() => setIsSelected("notify")}
          >
            <span className="text-lg">
              <FaBell />
            </span>
            {isOpen && (
              <Link
                href="/profile/notification"
                className="hover:text-gray-300 ml-3"
              >
                Notification
              </Link>
            )}
          </li>
          <li
            className={`flex items-center ${
              isSelected === "logout"
                ? "bg-white text-primaryBrown rounded-xl p-2 "
                : ""
            } cursor-pointer`}
            onClick={() => setIsSelected("logout")}
          >
            <span className="text-lg">
              <FaSignOutAlt />
            </span>
            {isOpen && (
              <Link href="/profile/logout" className="hover:text-gray-300 ml-3">
                Logout
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
