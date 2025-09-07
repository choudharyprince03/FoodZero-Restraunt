import React, { useState } from "react";

const Menupage = () => {
  const menuItems = {
    starters: [
      { id: 1, name: "Grilled Okra and Tomatoes", price: 20 },
      { id: 2, name: "Cucumber Salad", price: 8 },
      { id: 3, name: "Basil Pancakes", price: 12 },
    ],
    mains: [
      { id: 4, name: "Deep Sea Snow White Cod Fillet", price: 20 },
      { id: 5, name: "Steak With Rosemary Butter", price: 22 },
      { id: 6, name: "Steaks with Grilled Kimchi", price: 20 },
    ],
    pastries: [
      { id: 7, name: "Wine Pairing", price: 98 },
      { id: 8, name: "Natural Wine Pairing", price: 168 },
      { id: 9, name: "Whisky Flyer", price: 90 },
    ],
  };

  // State to track quantities per dish by id
  const [quantities, setQuantities] = useState({});

  // Increase quantity for a dish
  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Decrease quantity for a dish
  const decreaseQuantity = (id) => {
    setQuantities((prev) => {
      const newQty = (prev[id] || 0) - 1;
      return { ...prev, [id]: newQty > 0 ? newQty : 0 };
    });
  };

  // Format price as USD or your currency
  const formatPrice = (value) => `$${value.toFixed(2)}`;

  // Render dishes with quantity controls
  const renderDish = (item) => {
    const qty = quantities[item.id] || 0;
    return (
      <div key={item.id} className="mb-6 p-4 border rounded flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-lg text-gray-600">Unit Price: {formatPrice(item.price)}</p>
          {qty > 0 && (
            <p className="text-lg font-bold mt-1">
              Total: {formatPrice(item.price * qty)}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-xl font-bold"
            disabled={qty === 0}
            aria-label={`Decrease quantity of ${item.name}`}
          >
            −
          </button>

          <span className="text-2xl w-8 text-center">{qty}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-xl font-bold"
            aria-label={`Increase quantity of ${item.name}`}
          >
            +
          </button>

          <button
            onClick={() =>
              alert(`Added ${qty} x ${item.name} to cart!`)
            }
            disabled={qty === 0}
            className="ml-4 px-4 py-2 bg-amber-400 text-white font-semibold rounded hover:bg-amber-500 disabled:opacity-50 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-8">Starters</h2>
      {menuItems.starters.map(renderDish)}

      <h2 className="text-4xl font-bold mt-12 mb-8">Mains</h2>
      {menuItems.mains.map(renderDish)}

      <h2 className="text-4xl font-bold mt-12 mb-8">Pastries & Drinks</h2>
      {menuItems.pastries.map(renderDish)}
    </div>
  );
};

export default Menupage;
