import React from "react";
import ReservationPage from "../components/ReservationPage";
import Reservation from "./Reservation";

const Contact = () => {
  return (
    <>
    <div className=" text-[#2C3A21]">
      {/* Header Section */}
      <div className="relative">
        <img src="src/assets/Contactheader.png" className="w-full" alt="Contact" />
        <div className="absolute top-[300px] left-[180px] transform -translate-y-1/2 text-right">
          <h1 className="text-white text-7xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-white text-xl leading-relaxed max-w-lg">
            The freshest ingredients for you every day.
          </p>
        </div>
      </div>

      {/* Open Time Section (Positioned Bottom Left) */}
      <div className="absolute bottom-10 right-10 p-6 bg-opacity-70 bg-transparent  text-white ">
        <h2 className="text-2xl font-semibold">Open Time</h2>
        <p className="text-lg">Sunday - Friday</p>
        <div className="flex justify-between gap-8 mt-2 text-lg">
          <div>
            <p className="font-semibold">Brunch</p>
            <p>11:00 - 12:00</p>
          </div>
          <div>
            <p className="font-semibold">Lunch</p>
            <p>13:00 - 17:00</p>
          </div>
          <div>
            <p className="font-semibold">Dinner</p>
            <p>18:00 - 20:00</p>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="flex flex-wrap justify-center gap-12 px-6 pb-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src="/src/assets/contact1.png" 
            alt="Restaurant Table" 
            className=" w-3/4 pt-20"
          />
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">We can be contacted via</h2>
          <p className="text-lg">
            Email: <a href="mailto:info@foodzero.com" className="text-green-600 hover:underline">
              info@foodzero.com
            </a>
          </p>
          <p className="text-lg">
            Phone: <a href="tel:+86852346000" className="text-green-600 hover:underline">
              +86 852 346 000
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="flex justify-end px-46 pb-16">
        <img 
          src="/src/assets/contact2.png" 
          alt="Restaurant Exterior" 
          className="   w-1/2 "
        />
      </div>
    </div>
    <Reservation/>
    </>
  );
};

export default Contact;
