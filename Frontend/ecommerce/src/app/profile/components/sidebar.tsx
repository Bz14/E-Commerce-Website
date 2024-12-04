import Link from "next/link";
import { FaUser, FaBox, FaHeart, FaBell, FaSignOutAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="w-1/4 h-screen bg-primaryBrown text-white p-6">
      <ul className="space-y-4">
        <li className="flex items-center gap-2">
          <FaUser />
          <Link href="/profile/profile-detail" className="hover:text-gray-300">
            Profile
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FaBox />
          <Link href="/profile/order" className="hover:text-gray-300">
            Orders
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FaHeart />
          <Link href="/profile/wishlist" className="hover:text-gray-300">
            Wishlist
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FaBell />
          <Link href="/profile/notification" className="hover:text-gray-300">
            Notification
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FaSignOutAlt />
          <Link href="/profile/logout" className="hover:text-gray-300">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
