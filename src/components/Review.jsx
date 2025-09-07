import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus Lorem ipsum dolor sit amet.",
    name: "Prince Choudhary",
    role: "Blogger",
    image: "src/assets/user1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    text: "Amazing experience! The food was top-notch and the ambiance made it even better. Will definitely visit again.",
    name: "Sophia Martinez",
    role: "Food Critic",
    image: "src/assets/user2.jpg",
  },
  {
    id: 3,
    text: "Absolutely loved the service and the attention to detail. Highly recommended!",
    name: "Daniel Kim",
    role: "Chef",
    image: "src/assets/user3.jpg",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white py-16 px-6 md:px-20 text-center">
      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="text-2xl md:text-3xl font-serif text-black leading-relaxed">
              “ {reviews[currentIndex].text} ”
            </p>
            <div className="flex items-center justify-center mt-6">
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold">{reviews[currentIndex].name}</h3>
                <p className="text-gray-500 text-sm">{reviews[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center mt-6 space-x-6 text-gray-700 ">
          <button onClick={prevReview} className="hover:text-black cursor-pointer">
            <FaArrowLeft size={20} />
          </button>
          <span className="text-lg font-medium">
            {currentIndex + 1} / {reviews.length}
          </span>
          <button onClick={nextReview} className="hover:text-black cursor-pointer">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
