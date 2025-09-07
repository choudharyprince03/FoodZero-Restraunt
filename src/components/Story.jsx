import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Carson Hugh",
    role: "Restaurant Manager",
    image: "src/assets/res-manager.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id felis in pellentesque ornare nunc.",
    imageFirst: true, // Image on the left
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Executive Chef",
    image: "src/assets/ex-chef.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id felis in pellentesque ornare nunc sit. Augue habitant accumsan, ut porttitor orci a elit urna congue mi.",
    imageFirst: false, // Image on the right
  },
];

const TeamMember = ({ name, role, image, description, imageFirst }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left or Right Content based on imageFirst */}
    {imageFirst && (
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-2xl font-bold">{role}</h3>
        <p className="text-gray-500">{name}</p>
        <img src={image} alt={role} className="rounded-lg shadow-lg mt-4" />
      </div>
    )}
    
    <p className="text-gray-600">{description}</p>

    {!imageFirst && (
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-2xl font-bold">{role}</h3>
        <p className="text-gray-500">{name}</p>
        <img src={image} alt={role} className="rounded-lg shadow-lg mt-4" />
      </div>
    )}
  </div>
);

const Story = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 relative">
          <h2 className="text-4xl font-bold">Our Story</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. 
            Turpis egestas ultricies purus auctor tincidunt lacus nunc.
          </p>
          <img 
            src="src/assets/tomato-icon.png" 
            alt="Tomato Icon" 
            className="absolute -top-10 left-0 w-24 opacity-50" 
          />
        </div>
        <img src="src/assets/kitchen-chef.png" alt="Chef cooking" className="md:w-1/2 rounded-lg shadow-lg" />
      </div>

      {/* Team Members Section */}
      <div className="mt-20 space-y-16">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Story;
