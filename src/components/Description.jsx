import React from "react";

const Description = () => {
  const features = [
    {
      id: 1,
      icon: "src/assets/Icon_fish.png", // Replace with actual image path
      title: "Premium Quality",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    },
    {
      id: 2,
      icon: "src/assets/Icon_carrot.png", // Replace with actual image path
      title: "Seasonal Vegetables",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    },
    {
      id: 3,
      icon: "src/assets/Icon_lemon.png", // Replace with actual image path
      title: "Fresh Fruit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    },
  ];

  return (
    <div className="bg-[#F5F8EE] py-16 px-6 md:px-20">
      {/* Chef Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Section (Image) */}
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/chef.png" // Replace with actual path
            alt="Chef with Salmon Dish"
            className="w-full md:w-[500px] rounded-lg "
          />
        </div>

        {/* Right Section (Text) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold text-black leading-tight">
            Excellent <br /> cook
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
            Turpis egestas ultricies purus auctor tincidunt lacus nunc.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10 text-center">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center w-full md:w-1/3">
            {/* Icon with background */}
            <div className="w-24 h-24 bg-[#E8F0DA] flex items-center justify-center rounded-full">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            {/* Description */}
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
