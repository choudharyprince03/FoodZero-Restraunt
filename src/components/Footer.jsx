import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#232F00] text-white py-12 px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Section: Logo */}
        <div>
          <h1 className="text-5xl font-serif font-bold">Food <br /> Zero.</h1>
        </div>

        {/* Middle Section: Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-gray-300">+1 48 852 346 000</p>
          <p className="text-gray-300">info@foodzero.com</p>
          <p className="text-gray-300 mt-2">
            1959 Sepulveda Blvd. <br />
            Culver City, CA, 90230
          </p>
        </div>

        {/* Right Section: Newsletter Signup */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Never Miss a Recipe</h2>
          <div className="flex border border-gray-400 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 bg-transparent focus:outline-none text-white"
            />
            <button className="bg-[#6B8E23] px-6 py-2 text-white font-semibold hover:bg-[#5A7B1F]">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Join our subscribers and get best recipes delivered each week!
          </p>
        </div>
      </div>

      {/* Bottom Section: Copyright & Social Icons */}
      <div className="mt-10 border-t border-gray-500 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">© 2025 Zero Inc. All rights reserved</p>
        <div className="flex space-x-4 text-gray-400 text-xl">
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaEnvelope className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
