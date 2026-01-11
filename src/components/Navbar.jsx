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
      <nav className="fixed top-0 left-0 right-0 z-40 
        flex items-center justify-between h-16 px-8 
        bg-[#232F00]/60 backdrop-blur-xl 
        text-white text-xl font-semibold">

        <div className="ml-12 flex items-center gap-300">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer text-2xl tracking-wide"
          >
            FoodZero
          </div>

          <button onClick={() => setIsMenuOpen(true)}>
            <FiMenu size={28} />
          </button>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex flex-col items-center justify-center">

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <FiX size={36} />
          </button>

          {/* MENU LINKS */}
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

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-10 text-white mt-10">
            <FaInstagram className="hover:text-gray-300 transition cursor-pointer" size={36} />
            <FaTwitter className="hover:text-gray-300 transition cursor-pointer" size={36} />
            <FaFacebook className="hover:text-gray-300 transition cursor-pointer" size={36} />
            <FaEnvelope className="hover:text-gray-300 transition cursor-pointer" size={36} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
