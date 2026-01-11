import React from "react";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-40 bg-[#232F00] text-white flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#232F00] via-[#2f3a0c] to-[#232F00] opacity-60" />

      <h1 className="relative text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wide">
        MAKE A RESERVATION
      </h1>

      <p className="relative text-lg md:text-xl text-[#cbd5a8] mb-12">
        get in touch with the restaurant
      </p>

      <button
        onClick={() => navigate("/reservation")}
        className="relative bg-[#556B2F] text-white text-xl px-12 py-4 rounded-full shadow-xl hover:bg-[#445423] transition-all duration-300 hover:scale-105"
      >
        Reserve a Table
      </button>

    </section>
  );
};

export default Reservation;
