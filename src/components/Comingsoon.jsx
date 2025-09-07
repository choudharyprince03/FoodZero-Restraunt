import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const targetDate = new Date("2025-02-25T00:00:00"); // Set your target date here

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Image (1).png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(35,48,0,0.7)]"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-6">COMING SOON</h1>

        {/* Countdown Timer */}
        <div className="flex gap-10 text-2xl">
          <div>
            <span className="block text-5xl font-bold">{timeLeft.days}</span>
            <span>Days</span>
          </div>
          <div>
            <span className="block text-5xl font-bold">{timeLeft.hours}</span>
            <span>Hours</span>
          </div>
          <div>
            <span className="block text-5xl font-bold">{timeLeft.minutes}</span>
            <span>Minutes</span>
          </div>
          <div>
            <span className="block text-5xl font-bold">{timeLeft.seconds}</span>
            <span>Seconds</span>
          </div>
        </div>

        {/* Button to Main Page */}
        <Link
          to="/landing"
          className="mt-8 border border-white px-4 py-2 hover:bg-white hover:text-black transition"
        >
          Open Main Page
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;