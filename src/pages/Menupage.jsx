import React from "react";

const MENU_DATA = {
  starters: [
    { id: 1, name: "Grilled Okra & Tomatoes", price: 20 },
    { id: 2, name: "Cucumber Garden Salad", price: 8 },
    { id: 3, name: "Basil Ricotta Pancakes", price: 12 },
    { id: 4, name: "Charred Artichoke Hearts", price: 14 },
    { id: 5, name: "Lemon Thyme Bruschetta", price: 10 },
    { id: 6, name: "Olive Oil Roasted Peppers", price: 11 },
  ],
  mains: [
    { id: 7, name: "Snow White Cod Fillet", price: 20 },
    { id: 8, name: "Steak with Rosemary Butter", price: 22 },
    { id: 9, name: "Lamb Chops & Herb Jus", price: 26 },
    { id: 10, name: "Forest Mushroom Risotto", price: 19 },
    { id: 11, name: "Herb Roasted Chicken", price: 18 },
    { id: 12, name: "Truffle Cream Pasta", price: 21 },
  ],
  pastries: [
    { id: 13, name: "Natural Wine Pairing", price: 168 },
    { id: 14, name: "Whisky Flight", price: 90 },
    { id: 15, name: "Lavender Honey Cheesecake", price: 14 },
    { id: 16, name: "Dark Chocolate Olive Torte", price: 13 },
    { id: 17, name: "Vanilla Rose Crème Tart", price: 12 },
    { id: 18, name: "Almond Fig Crostata", price: 11 },
  ],
};

const Menupage = () => {
  const format = (v) => `$${v.toFixed(2)}`;

  const renderSection = (title, items) => (
    <div className="mb-24">
      <h2 className="text-3xl font-semibold mb-10 border-b border-[#aab7a2] pb-4">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {items.map((item) => (
          <div key={item.id} className="border-t border-[#c6d1bf] pt-5">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium tracking-wide">
                {item.name}
              </h3>
              <span className="text-lg text-[#4d5e4d]">
                {format(item.price)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative bg-[#f6f7f2] text-[#2f3a2f] py-28 overflow-hidden">

      {/* 🌿 Botanical Decorations from Web */}
      <img src="https://www.svgrepo.com/show/530173/leaf.svg"
        className="absolute top-0 left-0 w-72 opacity-15 z-[-1]" />

      <img src="https://www.svgrepo.com/show/530166/olive-branch.svg"
        className="absolute top-0 right-0 w-72 opacity-15 z-[-1]" />

      <img src="https://www.svgrepo.com/show/530169/flower.svg"
        className="absolute bottom-0 left-0 w-80 opacity-15 z-[-1]" />

      <img src="https://www.svgrepo.com/show/530168/flower-2.svg"
        className="absolute bottom-0 right-0 w-80 opacity-15 z-[-1]" />

      <img src="https://www.svgrepo.com/show/530165/vine.svg"
        className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[520px] opacity-10 z-[-1]" />

      <div className="relative max-w-6xl mx-auto px-10">

        <h1 className="text-5xl font-serif font-bold mb-24 text-[#3c4a3c] text-center">
          Our Menu
        </h1>

        {renderSection("Starters", MENU_DATA.starters)}
        {renderSection("Mains", MENU_DATA.mains)}
        {renderSection("Pastries & Drinks", MENU_DATA.pastries)}

      </div>
    </section>
  );
};

export default Menupage;
