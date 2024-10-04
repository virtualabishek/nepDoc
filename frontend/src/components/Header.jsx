import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 relative">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw] md:mb-[-30px]">
        {/* Heading */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>

        {/* Profile and Text */}
        <div className="flex items-center gap-3 text-white text-sm font-light">
          <img
            className="w-24 rounded-full"
            src={assets.group_profiles}
            alt="Profiles"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>

        {/* Book Appointment Button */}
        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
          href="#speciality"
        >
          Book appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 right-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="Doctors"
        />
      </div>
    </div>
  );
};

export default Header;
