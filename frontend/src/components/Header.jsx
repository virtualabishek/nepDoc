import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div>
      {/* for left side */}
      <div>
        <p>
          Book Appointmnet <br /> With Trusted Doctors{" "}
        </p>
      </div>
      {/* for right side */}
      <div>
        <img src={assets.group_profiles} alt="" />
        <p></p>
      </div>
      {/* Right SIde Contenet */}
      <div></div>
    </div>
  );
};

export default Header;
