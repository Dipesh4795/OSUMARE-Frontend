import React from "react";
import Background from "../assests/Background.png";
import Header from "../assests/Header.png";
import cuate from "../assests/cuate.jpg";
const Section1 = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden justify-center items-center">
      <div
        className="  pt-16 flex justify-start pb-[250px] bg-contain bg-center  mt-5 items-center w-full gap-5 flex-col relative     "
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div class="absolute inset-0 bg-gradient-to-r from-white to-[#80BBFF] rounded-lg blur-[180px] w-[300px] h-[300px] right-0 top-8 left-[65%] clip-ellipse"></div>
        <div className=" w-11/12 flex flex-col gap-1 sm:gap-3  justify-center items-center ">
          <p
            align="center"
            className="  w-[70%] sm:w-[50%] md:w-[35%] text-xl lg:w-[30%] font-Montserrat   font-semi-bold "
          >
            Elevate{" "}
            <span className="text-[#0078FF] font-semi-thin  ">
              Real Estate Success{" "}
            </span>{" "}
            with Osumare's Digital Expertise
          </p>

          <p
            align="center"
            className="pt-2 z-50 font-OpenSans w-9/12  sm:w-8/12 md:w-fit font-semi-thin"
          >
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </p>
          <button className="bg-blue-600 px-24 mt-3 py-2  cursor-pointer font-Montserrat text-white rounded-full">
            Get Started
          </button>
        </div>

        <img
          src={Header}
          alt="header "
          loading="lazy"
          className=" absolute object-contain top-[200px] w-[500px] h-[500px]"
        />
      </div>
      <div className=" pt-[150px] sm:pt-[180px] md:pt-[250px] flex justify-center items-center  gap-8  w-11/12 pb-[80px] flex-col">
        <p
          align="center"
          className="font-Montserrat font-semi-bold text-[20px]"
        >
          Real Estate-Focused Digital Mastery
        </p>
        <div className="flex justify-between flex-col md:flex-row  gap-6  items-center">
          <img
            src={cuate}
            alt="cuate"
            loading="lazy"
            className="object-contain w-[30%]"
          />
          <div className="flex flex-col items-center md:items-start gap-5 justify-center  w-[70%] md:w-[50%]">
            <p
              align="center"
              className="font-Montserrat font-semi-bold text-[20px]"
            >
              Unlock the Potential of Digital Real Estate Excellence
            </p>
            <p
              align="justify"
              className="font-OpenSans font-semi-thin leading-[24px] "
            >
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </p>
            <button className="text-white px-10 py-2  text-sm rounded-full bg-[#0078FF]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
