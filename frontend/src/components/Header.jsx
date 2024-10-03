import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex">
      {/* for left side */}
      <div>
        <p>
          Book Appointmnet <br /> With Trusted Doctors{" "}
        </p>
      </div>
      {/* for right side */}
      <div>
        <img className="w-20" src={assets.group_profiles} alt="" />
        <p>
          Simply browse through our extensive list of trusted doctors,
          <br /> schedule your appointment hassle-free.
        </p>
      </div>
      <a href="">
        Book appointment <img src={assets.arrow_icon} alt="" />
      </a>
      {/* Right SIde Contenet */}
      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
