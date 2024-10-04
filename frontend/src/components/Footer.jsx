import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----Left Section ------- */}

        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            NepDoc is a cutting-edge doctor appointment platform designed to
            connect patients with trusted healthcare professionals across Nepal.
            Whether you're seeking a specialist or general practitioner, NepDoc
            provides a seamless experience for booking appointments online.
          </p>
        </div>
        {/*  Center Section  */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+977 9862681874</li>
            <li>abishek@abishekn.com.np</li>
          </ul>
        </div>
      </div>
      {/* For a copyright */}
      <div>
        <p className="py-5 text-2m text-center">
          Copyright © 2024 nepDoc - All Right Reserved. <br />
          Designed by Abishek Neupane - abishekn.com.np
        </p>
      </div>
    </div>
  );
};

export default Footer;
