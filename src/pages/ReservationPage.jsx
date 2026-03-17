// https://script.google.com/macros/s/AKfycbwpZdhqMlXfrNRZJKuGYRFgAgBGaFKgxCTjx_jPaId9ElnwdcWaheRv7NTVqNRfE-OwzA/exec


import React, { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "6:00 PM",
    persons: "2",
  });

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

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Booking
const handleBooking = async () => {
  const { firstName, lastName, email, phone, date } = formData;

  if (!firstName || !lastName || !email || !phone || !date) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch(
      "/api/booking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.status === "success") {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      // Optional: reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "6:00 PM",
        persons: "2",
      });
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  }
};


  return (
    <div className="py-24 flex flex-col items-center justify-center bg-[#232F00] text-[#2C3A21] px-6">
      {/* Heading */}
      <h1 className="text-6xl font-bold mb-2 pt-20 text-white">Make a Reservation</h1>
      <p className="text-lg text-gray-600 mb-8">Get in touch with restaurant</p>

      {/* Form Section */}
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-400 px-4 py-3 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-400 px-4 py-3 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-400 px-4 py-3 text-lg rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-400 px-4 py-3 text-lg rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-400 px-4 py-3 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border border-gray-400 px-4 py-3 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            {generateTimeSlots().map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <select
          name="persons"
          value={formData.persons}
          onChange={handleChange}
          className="border border-gray-400 px-4 py-3 text-lg rounded-md w-full mb-6 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} Person{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>

        {/* Book Now Button */}
        <button
          onClick={handleBooking}
          className="bg-[#556B2F] text-white text-xl font-semibold px-10 py-3 rounded-md w-full shadow-md hover:bg-[#445423] transition"
        >
          Book Now
        </button>
      </div>

      {/* Popup Confirmation Message */}
      {showPopup && (
        <div className="fixed top-20 right-10 bg-green-500 text-white text-lg px-6 py-3 rounded-md shadow-lg">
          ✅ Booking Confirmed!
        </div>
      )}
    </div>
  );
};

export default Reservation;
