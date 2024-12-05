"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primaryDark text-white py-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-300">
            We are a dedicated team providing the best e-commerce experience.
            Our goal is to bring you closer to your favorite products with ease.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/shop" className="text-gray-300 hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-300 hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-300 mb-2">
            Email: support@example.com
          </p>
          <p className="text-sm text-gray-300 mb-4">Phone: +1 234 567 890</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} E-Commerce Website. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
