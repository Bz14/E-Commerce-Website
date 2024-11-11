"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/logo (3).png";
import { usePathname } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="bg-white shadow-lg text-primaryDark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-7">
            <Link href="/" className="flex items-center py-4 px-2">
              <Image src={logo} alt="logo" width={50} height={50} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="py-4 px-2 font-semibold hover:text-primaryHover transition duration-300"
            >
              Home
              {path === "/" && (
                <hr className="border-b-2 border-primaryBrown" />
              )}
            </Link>
            <Link
              href="/about"
              className="py-4 px-2 font-semibold hover:text-primaryHover transition duration-300"
            >
              About
              {path === "/about" && (
                <hr className="border-b-2 border-primaryBrown" />
              )}
            </Link>
            <Link
              href="/services"
              className="py-4 px-2 font-semibold hover:text-primaryHover transition duration-300"
            >
              Services
              {path === "/services" && (
                <hr className="border-b-2 border-primaryBrown" />
              )}
            </Link>
            <Link
              href="/contact"
              className="py-4 px-2 font-semibold hover:text-primaryHover transition duration-300"
            >
              Contact
              {path === "/contact" && (
                <hr className="border-b-2 border-primaryBrown" />
              )}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/login"
              className="py-2 px-4 bg-primaryDark rounded-full text-white font-semibold hover:bg-gray-400 transition duration-300"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="py-2 px-4 text-gray-500 bg-primaryBrown rounded-full text-white font-semibold hover:bg-primaryHover transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              href="/cart"
              className="relative py-2 px-4 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              <FaCartShopping size={25} className="text-primaryBrown" />

              <span className="absolute top-0 right-0 bg-primaryDark text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                1
              </span>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          About
        </Link>
        <Link
          href="/services"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Contact
        </Link>
        <Link
          href="/login"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Sign Up
        </Link>
        <Link
          href="/cart"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
