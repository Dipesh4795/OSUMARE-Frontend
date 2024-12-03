import React from "react";
import Frame from "../assests/Frame.png";
import { data1 } from "../data";
import bro from "../assests/bro.png";
import { data2 } from "../data";
import { data3 } from "../data";
const Section3 = () => {
  return (
    <div className="w-11/12 flex flex-col justify-center items-center pt-[30px]">
      <div className="flex flex-col justify-center  pb-[80px] items-center  w-full gap-4 ">
        <p
          align="center"
          className="font-Montserrat font-semi-bold text-[24px]"
        >
          Navigating Real Estate's Digital Landscape
        </p>
        <p align="center" className="font-OpenSans font-semi-thin ">
          Insights for Real Estate Marketing Advantage
        </p>
        <div className="relative w-11/12 md:w-10/12 justify-start  flex mt-[40px] md:mt-[70px]">
          <div className="flex-col  w-full  z-30 flex justify-center  gap-4  items-center md:items-start">
            {data1.map((item) => {
              return (
                <div className=" w-10/12 md:w-[60%] px-[10px] py-[20px] pl-[20px]  flex rounded-md   justify-start gap-4  border-[1px] border-white bg-white  items-center shadow-lg shadow-grey ">
                  <img
                    src={item.image}
                    alt="Frame"
                    className="w-[50px] h-[50px] object-contain"
                    loading="lazy"
                  />
                  <div className="flex flex-col sm:text-sm gap-2 justify-center items-start ">
                    <p
                      align="center"
                      className="font-Montserrat font-semi-bold"
                    >
                      {item.title}
                    </p>
                    <p className="font-OpenSans font-semi-thin">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-[#F9F9F9] py-[25px]  hidden md:flex pl-[35px] absolute rounded-md top-[-1.5rem] semi:left-[28rem] lg:left-[35rem]  justify-end  md:left-[20rem]">
            <img
              src={Frame}
              alt="frame"
              loading="lazy"
              className="w-[600px] h-[440px]  object-contain   "
            />
          </div>
        </div>
      </div>
      <div className="pt-[30px] flex flex-col justify-center items-center gap-4 ">
        <p align="center" className="font-Montserrat text-lg font-semi-bold">
          Driving Property Inquiries to Conversions
        </p>
        <p align="center" className="font-OpenSans text-sm  font-semi-thin">
          Streamlined Strategies for Real Estate Success
        </p>
        <div className="flex w-10/12 flex-col md:flex-row  justify-between items-center ">
          <img
            src={bro}
            alt="bro"
            className="w-[350px] h-[350px] object-contain "
            loading="lazy"
          />
          <div className="flex flex-col gap-3   md:w-[50%] justify-center items-center md:items-start">
            <p
              align="center"
              className="font-Montserrat text-xl font-semi-bold"
            >
              Optimized Path to Property Purchase
            </p>
            <p align="justify" className="font-OpenSans font-semi-thin">
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </p>
            <button className="bg-blue-600 px-24 mt-3 py-2  cursor-pointer font-Montserrat text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <p className="font-Montserrat pt-4 font-bold">
          Driving Property Inquiries to Conversions
        </p>
        <div className="grid  justify-start items-start grid-cols-1 sm:grid-cols-2 gap-8 pt-8 ">
          {data2.map((item) => {
            return (
              <div className="flex flex-col justify-center  gap-3 items-center">
                <img
                  src={item.image}
                  alt="item"
                  className="w-[100px] h-[100px]"
                  loading="lazy"
                />
                <p className="font-Montserrat font-semi-bold ">{item.title}</p>
                <p
                  align="center"
                  className="hanging-indent w-10/12 font-OpenSans font-semi-thin"
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" pt-[70px] flex flex-col justify-center items-center gap-4">
        <p className="font-Montserrat font-bold">Our Expertise in Action</p>
        <div className="grid  grid-cols-1 sm:grid-cols-2 justify-start items-start pt-[40px] gap-8">
          {data3.map((item) => {
            return (
              <div className="flex flex-col justify-center  gap-3 items-center">
                <img
                  src={item.image}
                  alt="item"
                  className="w-[100px] h-[100px]"
                  loading="lazy"
                />
                <p align="center" className="font-Montserrat font-bold ">
                  {item.title}
                </p>
                <p
                  align="center"
                  className="hanging-indent w-10/12 font-OpenSans font-semi-thin"
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section3;
