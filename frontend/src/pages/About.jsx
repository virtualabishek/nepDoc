import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Section title */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      {/* Image and text container */}
      <div className="my-10 flex flex-col md:flex-row gap-12">
        {/* Image */}
        <img
          className="w-full h-auto md:w-[360px] object-cover"
          src={assets.about_image}
          alt="About Us"
        />
        {/* Text section */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to NepDoc, your trusted partner in health and well-being. We
            are a dedicated platform built to make healthcare services in Nepal
            more accessible, efficient, and reliable. At NepDoc, we understand
            the importance of timely healthcare, and that’s why we bring a
            seamless solution for booking appointments with the best doctors
            across the country.
          </p>
          <p>
            Our mission is simple: to bridge the gap between patients and
            healthcare providers. By offering a user-friendly interface, we make
            it easy for you to find the right doctor, schedule an appointment,
            and get the medical attention you need without the hassle of long
            queues or uncertainty.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Through NepDoc, we aim to build a healthier nation, one where health
            is a priority, and technology drives positive change in people's
            lives. Together, let's create a future where healthcare is
            efficient, inclusive, and driven by the needs of the people.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span> ?
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>ACCESSIBILITY:</b>
          <p>
            Easily Schedule Appointments With Healthcare Providers That Fit Your
            Needs.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>TRUST:</b>
          <p>
            Experience Quality Care With Verified Health Professionals You Can
            Rely On.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>SUPPORT:</b>
          <p>
            Comprehensive Health Resources And Guidance To Empower Your
            Well-Being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
