import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Deep Sea Snow White Cod Fillet",
    price: 20,
    description: "Delicately pan-seared with seasonal herbs and citrus essence."
  },
  {
    id: 2,
    name: "Steak with Rosemary Butter",
    price: 22,
    description: "Prime cut finished with house-made rosemary butter."
  },
  {
    id: 3,
    name: "Cucumber Garden Salad",
    price: 18,
    description: "Crisp greens, pickled cucumber, and olive vinaigrette."
  },
  {
    id: 4,
    name: "Natural Wine Pairing",
    price: 90,
    description: "Curated selection of organic regional wines."
  },
];

const Menu = () => {
  return (
    <section className="relative bg-[#f6f7f2] text-[#2f3a2f] overflow-hidden">

      {/* Decorative SVGs */}
      <img
        src="/assets/olive-leaf.svg"
        className="absolute top-10 left-10 w-40 opacity-20"
        alt=""
      />
      <img
        src="/assets/vine.svg"
        className="absolute bottom-10 right-10 w-56 opacity-20"
        alt=""
      />

      <div className="max-w-6xl mx-auto px-10 md:px-20 py-24 relative z-10">

        <h2 className="text-5xl font-serif font-bold mb-6 text-[#3c4a3c]">
          Our Menu
        </h2>

        <p className="text-lg text-[#6a7b6a] mb-20 max-w-xl">
          A carefully crafted selection of dishes inspired by nature, balance, and timeless flavors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {menuItems.map((item) => (
            <div key={item.id} className="border-t border-[#aab7a2] pt-6">

              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold tracking-wide">
                  {item.name}
                </h3>
                <span className="text-xl font-medium text-[#4d5e4d]">
                  ${item.price}
                </span>
              </div>

              <p className="mt-3 text-[#667666] leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Menu;
