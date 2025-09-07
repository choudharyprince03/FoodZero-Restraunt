import React from "react";

const menuItems = [
  { id: 1, 
    name: "Deep Sea Snow White Cod Fillet", 
    price: "$20", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },

  { id: 2, 
    name: "Steak With Rosemary Butter", 
    price: "$22", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
   },

  { id: 3, 
    name: "Cucumber Salad", 
    price: "$18", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },

  { id: 4, 
    name: "Natural Wine Pairing",
     price: "$90", 
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
    },

];

const Menu = () => {
  return (
    <div className="bg-white text-black px-30 md:px-30   py-20 relative">
      {/* Decorative Image */}
      <div className="absolute top-0 right-0">
        <img src="src/assets/menuflower.png" alt="Decoration" className="w-64 md:w-100" />
      </div>

      {/* Heading */}
      <h2 className="text-5xl font-bold text-left mb-6">Our Menu</h2>
      <p className="text-gray-500 text-lg mb-20">
        This is a section of your menu. Give your section a brief description.
      </p>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-25  ">
        {menuItems.map((item) => (
          <div key={item.id} className="border-t-2 border-dotted border-black pt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-bold">{item.name}</h3>
              <span className="text-xl font-bold">{item.price}</span>
            </div>
            <p className="text-gray-500 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
