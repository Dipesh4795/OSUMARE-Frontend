import React from "react";
import Logo from "../assests/Logo .png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-[80px] pt-[10px] w-full flex flex-col gap-3 pb-[30px] justify-center items-center">
      <div
        className="w-11/12  pt-[40px] px-[20px] sm:px-[60px] pb-[50px] rounded-md bg-gradient-to-r from-[#ced9e5] 
      to-[#c7d7e8] flex justify-between items-start  "
      >
        <div className="flex flex-col  w-[33%] justify-center gap-4 items-start">
          <div className="flex flex-col justify-center items-start gap-5">
            <img
              src={Logo}
              alt="logo"
              loading="lazy"
              className=" sm:w-[100px] sm:h-[100px]  object-contain"
            />
            <p
              align="justify"
              className="font-OpenSans font-semi-thin  w-11/12 sm:w-10/12 text-sm"
            >
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center  pt-[25px] items-start">
            <p className="font-Montserrat font-semi-bold">Addresses</p>

            <p
              align="justify"
              className="font-OpenSans font-semi-thin w-11/12 sm:w-9/12 md:w-6/12"
            >
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharastra, India.
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center pt-[10px] items-start">
            <p className="font-Montserrat font-semi-bold">Contacts</p>
            <div className="flex justify-center gap-2 items-center">
              <MdEmail size={20} />
              <p>hello@osumare.in</p>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <FaPhoneAlt size={20} />
              <p> +91 9484343705</p>
            </div>
          </div>
        </div>
        <div className="w-[20%] flex flex-col justify-center pt-[10px] sm:pt-[40px]  gap-5 items-start">
          <p className="font-Montserrat font-semi-bold text-lg ">MENU</p>
          <div className="flex flex-col gap-4 text-sm justify-start pt-[10px] sm:pt-[30px] items-start">
            <p className="font-OpenSans font-semi-thin">Home</p>
            <p className="font-OpenSans font-semi-thin">About</p>
            <p className="font-OpenSans font-semi-thin">Services</p>
            <p className="font-OpenSans font-semi-thin">Work</p>
            <p className="font-OpenSans font-semi-thin">Blog</p>
            <p className="font-OpenSans font-semi-thin">Carrer</p>
          </div>
        </div>
        <div className="w-[26%] flex flex-col justify-start pt-[10px] sm:pt-[40px] items-start gap-5">
          <p className="font-Montserrat font-semi-bold text-lg">Social Media</p>
          <div className="flex justify-start gap-6 pt-[0px] sm:pt-[30px]  items-center flex-wrap">
            <FaXTwitter size={30} />
            <FaFacebook size={30} />
            <FaYoutube size={30} />
            <FaPinterest size={30} />
            <FaWhatsapp size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
      </div>
      <p className="font-OpenSans font-semi-thin">
        © 2023 Osumare. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
