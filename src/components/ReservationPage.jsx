import React, { useState } from "react";

const ReservationPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("6:00 PM");
  const [persons, setPersons] = useState(2);
  const [showPopup, setShowPopup] = useState(false);

  // Generate time slots from 10 AM to 11 PM
  const generateTimeSlots = () => {
    let times = [];
    for (let hour = 10; hour <= 23; hour++) {
      let displayHour = hour > 12 ? hour - 12 : hour;
      let period = hour >= 12 ? "PM" : "AM";
      times.push(`${displayHour}:00 ${period}`);
    }
    return times;
  };

  // Handle booking
  const handleBooking = () => {
    if (!date) {
      alert("Please select a date for your reservation.");
      return;
    }

    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-[#F5F7EB] text-black px-6">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-2">Make a Reservation</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">Get in touch with the restaurant</p>

      {/* Reservation Inputs */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Date Input */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-400 bg-white text-gray-800 px-14 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        {/* Time Selection */}
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border border-gray-400 bg-white text-gray-800 px-14 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-700"
        >
          {generateTimeSlots().map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        {/* Number of Persons */}
        <select
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
          className="border border-gray-400 bg-white text-gray-800 px-14 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-700"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} Person{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Book Now Button */}
      <button
        onClick={handleBooking}
        className="mt-8 bg-[#556B2F] text-white text-xl font-semibold px-14 py-3 rounded-md shadow-md hover:bg-[#445423]transition"
      >
        Book Now
      </button>

      {/* Popup Confirmation Message */}
      {showPopup && (
        <div className="fixed top-20 right-10 bg-green-500 text-white text-lg px-6 py-3 rounded-md shadow-lg">
          ✅ Booking Confirmed!
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
