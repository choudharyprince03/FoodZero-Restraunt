import React from "react";

const processSteps = [
  {
    id: 1,
    title: "Slice",
    image: "/assets/slice.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.",
    position: "left",
  },
  {
    id: 2,
    title: "Pickled",
    image: "/assets/pickled.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
    position: "right",
  },
  {
    id: 3,
    title: "Bake",
    image: "/assets/bake.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
    position: "left",
  },
];

const ProcessStep = ({ id, title, image, description, position }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {position === "left" && <img src={image} alt={title} className="rounded-lg shadow-lg" />}
    
    <div className="flex flex-col items-start">
      <h3 className="text-2xl font-bold">0{id}.{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>

    {position === "right" && <img src={image} alt={title} className="rounded-lg shadow-lg" />}
  </div>
);

const Process = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center">Sophisticated Process</h2>

      {/* Process Steps Section */}
      <div className="mt-16 space-y-16">
        {processSteps.map((step) => (
          <ProcessStep key={step.id} {...step} />
        ))}
      </div>
    </div>
  );
};

export default Process;
