import React from "react";
import { data } from "../data";
const Section2 = () => {
  return (
    <div className="w-full bg-[#F9F9F9] flex justify-center items-center ">
      <div className="w-11/12  pt-[50px] pb-[50px] flex flex-col justify-center items-center gap-4 ">
        <p className="font-Montserrat font-semi-bold text-[24px]">
          Our Service Offerings
        </p>
        <p className="font-OpenSans font-semi-thin ">
          {" "}
          Strategies that Drive Property Market Excellence
        </p>
        <div className="pt-[30px] grid w-full  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white flex flex-col py-[20px] justify-center gap-4  items-center"
              >
                <img
                  src={item.image}
                  alt="item"
                  className="w-[50px] h-[50px] object-contain"
                  loading="lazy"
                />
                <p className="font-Montserrat font-semi-bold">{item.title}</p>
                <p
                  align="center"
                  className="font-OpenSans text-sm w-10/12  font-semi-thin "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <button
          className="text-white px-10 py-2  mt-[30px]
         text-sm rounded-full bg-[#0078FF]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Section2;
