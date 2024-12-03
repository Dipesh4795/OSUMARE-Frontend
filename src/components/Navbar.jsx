import React from "react";
import Logo from "../assests/Logo .png";

const Navbar = () => {
  return (
    <div className="w-11/12  mt-3  flex justify-between items-center">
      <img
        src={Logo}
        alt="logo"
        loading="lazy"
        className="w-[150px] h-[80px] object-cover"
      />

      <button className="border-[1px]  border-black px-8 py-1 rounded-full font-inter font-semi-bold">
        Contact us
      </button>
    </div>
  );
};

export default Navbar;
