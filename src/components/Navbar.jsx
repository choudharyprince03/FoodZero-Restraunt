import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const headerItems = [
    { name: "HOME", slug: "/" },
    { name: "MENU", slug: "/menu" },
    { name: "ABOUT", slug: "/about" },
    { name: "CONTACT", slug: "/contact" },
    { name: "RESERVATION", slug: "/reservation" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 h-16 
        bg-[#232F00]/60 backdrop-blur-xl text-white text-xl font-semibold">

        <div className="mx-10 flex items-center h-full px-8">

          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer text-2xl tracking-wide"
          >
            FoodZero
          </div>

          {/* Right side controls */}
          <div className="ml-auto flex items-center space-x-6">

            {/* Reservation Button (hidden on small screens) */}
            <div
              onClick={() => navigate("/reservation")}
              className="hidden md:flex cursor-pointer border border-white px-4 py-1 rounded-full text-sm tracking-widest 
                         hover:bg-white hover:text-[#232F00] transition"
            >
              RESERVATION
            </div>

            {/* Hamburger Menu */}
            <button onClick={() => setIsMenuOpen(true)}>
              <FiMenu size={28} />
            </button>

          </div>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex flex-col items-center justify-center">

          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <FiX size={36} />
          </button>

          <ul className="text-center space-y-8 mb-20">
            {headerItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.slug}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-semibold text-white hover:text-gray-300 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-10 text-white mt-10">
            <FaInstagram size={36} className="hover:text-gray-300 transition cursor-pointer" />
            <FaTwitter size={36} className="hover:text-gray-300 transition cursor-pointer" />
            <FaFacebook size={36} className="hover:text-gray-300 transition cursor-pointer" />
            <FaEnvelope size={36} className="hover:text-gray-300 transition cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
