import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-6 text-white z-50">
       
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-4xl font-bold">FoodZero</Link>
          <FiMenu 
            className="text-white text-3xl cursor-pointer transition-transform duration-300 ease-in-out"
            onClick={() => setMenuOpen(true)}
          />
        </div>

       
        <div className="hidden md:flex items-center space-x-10">

          <Link 
            to="/reservation"
            className="border border-white px-9 py-3 text-2xl hover:bg-white hover:text-[#3f4422] transition"
          >
            Reservations
          </Link>
          {/* Login/Signup button goes here */}
          <Link
           to="/login"
           className="p-4 text-2xl hover:text-gray-300"

           >
            Login / Sign up
          </Link>


          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-3xl cursor-pointer hover:text-gray-300 transition" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full px-2">
                {cartItems}
              </span>
            )}
          </Link>
        </div>
      </nav>

      
      {menuOpen && (
        <div className="fixed inset-0 bg-[#232f00] bg-cover bg-center flex flex-col items-start justify-center p-10 z-50"
          style={{ backgroundImage: "url('src/assets/navbackground.png')" }}
        >
          <div className="absolute inset-0 bg-[rgba(35,48,0,0.7)]"></div>

        
          <FiX 
            className="absolute top-6 left-6 text-4xl cursor-pointer text-white"
            onClick={() => setMenuOpen(false)}
          />

     
          <div className="pl-40 text-white flex-col text-5xl space-y-10 z-10">
            {["HOME", "MENU", "ABOUT", "CONTACT"].map((item, index) => (
              <Link 
                key={index} 
                to={`/${item.toLowerCase()}`} 
                className="block hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

       
          <div className="absolute text-white bottom-10 right-10 text-right">
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="text-sm mt-2">+86 852 346 000</p>
            <p className="text-sm">info@foodzero.com</p>
            <p className="text-sm mt-2">1959 Sepulveda Blvd, Culver City, CA, 90230</p>

         
            <div className="flex space-x-6 mt-3 text-white">
              {[FaInstagram, FaTwitter, FaFacebook, FaEnvelope].map((Icon, idx) => (
                <a key={idx} href="#" className="text-2xl hover:text-gray-400">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
