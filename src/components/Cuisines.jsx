import React from "react";
import { Link } from "react-router-dom";

const cuisines = [
  { name: "Starters", image: "/assets/cuisine1.png" },
  { name: "Mains", image: "/assets/cuisine2.png" },
  { name: "Soups", image: "/assets/cuisine3.png" },
];

const Cuisines = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-5xl font-bold">Calories Energy Balance</h2>
      <p className="text-lg text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {cuisines.map((cuisine, index) => (
          <Link
            key={index}
            to="/menu"
            className="relative block w-80 h-96 overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={cuisine.image}
              alt={cuisine.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute top-5 left-5 text-2xl font-semibold text-white">
              {cuisine.name}
            </div>
            <div className="absolute top-5 right-5 text-2xl text-white">→</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
