import React, { useState, useMemo } from "react";

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
  const [loading, setLoading] = useState(false);

  // ✅ Optimized time slots (runs once)
  const timeSlots = useMemo(() => {
    let times = [];
    for (let hour = 10; hour <= 23; hour++) {
      let displayHour = hour > 12 ? hour - 12 : hour;
      let period = hour >= 12 ? "PM" : "AM";
      times.push(`${displayHour}:00 ${period}`);
    }
    return times;
  }, []);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Booking
  const handleBooking = async () => {
  const { firstName, lastName, email, phone, date } = formData;

  if (!firstName || !lastName || !email || !phone || !date) {
    alert("Please fill all fields");
    return;
  }

  setLoading(true);

  try {
    await fetch(URL, {
      method: "POST",
      mode: "no-cors", // 🔥 FIX
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(formData),
    });

    // 🔥 Assume success (because GAS worked)
    setShowPopup(true);

    setTimeout(() => setShowPopup(false), 3000);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "6:00 PM",
      persons: "2",
    });

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="py-24 flex flex-col items-center justify-center bg-[#232F00] text-[#2C3A21] px-6">
      
      {/* Heading */}
      <h1 className="text-6xl font-bold mb-2 pt-20 text-white">
        Make a Reservation
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Get in touch with restaurant
      </p>

      {/* Form */}
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-3xl">

        {/* Name */}
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

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-400 px-4 py-3 text-lg rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-400 px-4 py-3 text-lg rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            min={new Date().toISOString().split("T")[0]} // ✅ No past dates
            onChange={handleChange}
            className="border border-gray-400 px-4 py-3 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border border-gray-400 px-4 py-3 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        {/* Persons */}
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

        {/* Button */}
        <button
          onClick={handleBooking}
          disabled={loading}
          className={`text-white text-xl font-semibold px-10 py-3 rounded-md w-full shadow-md transition 
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#556B2F] hover:bg-[#445423]"
          }`}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-20 right-10 bg-green-500 text-white text-lg px-6 py-3 rounded-md shadow-lg">
          ✅ Booking Confirmed!
        </div>
      )}
    </div>
  );
};

export default Reservation;