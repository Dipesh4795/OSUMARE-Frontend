import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Card from "./Card";
import Card1 from "./Card1";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

import AccordionDetails from "@mui/material/AccordionDetails";

import { MdExpandMore } from "react-icons/md";
import { useState } from "react";
const Section4 = () => {
  const [flag, setflag] = useState([]);

  return (
    <div className="w-full flex justify-center items-center gap-2 flex-col">
      <div className="w-11/12 relative pt-[70px] mt-[30px]  pb-[30px] flex flex-col justify-center items-center gap-2">
        <div class="absolute inset-0 bg-gradient-to-r from-white to-[#80BBFF] rounded-lg blur-[180px] w-[300px] h-[300px] right-0 top-20 clip-ellipse"></div>
        <div class="absolute  z-30 inset-0 bg-gradient-to-r from-white to-[#FF725E] rounded-lg blur-[180px] w-[300px] h-[300px] right-0 top-20 left-[65%] clip-ellipse"></div>
        <p align="center" className="font-Montserrat font-semi-bold">
          Your Peace of Mind
        </p>
        <p
          align="center"
          className=" w-[70%] md:w-[50%] font-OpenSans font-semi-thin text-sm   leading-relaxed "
        >
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market
        </p>
        <button className="bg-blue-600 z-50 px-16  py-2 mt-5 cursor-pointer font-Montserrat text-white rounded-full">
          Get Started
        </button>
      </div>

      <div className="flex  w-9/12 flex-col mt-[60px] justify-center items-center gap-4">
        <p align="center" className="font-Montserrat font-semi-bold">
          What Our Pharma Partners Say
        </p>
        <p align="center" className="font-OpenSans font-semi-thin">
          Driving Transformations, One Brand at a Time
        </p>
        <Card />
        <div className="flex justify-center mt-4 gap-4 items-center">
          <FaRegArrowAltCircleRight size={40} className="text-blue-500" />
          <FaRegArrowAltCircleLeft size={40} className="text-blue-500" />
        </div>
      </div>
      <div className="w-full  flex justify-center items-center bg-gradient-to-b from-white to-gray-200 ">
        <div className="mt-[50px]  w-10/12  flex flex-col justify-center items-center gap-4">
          <p className="font-Montserrat font-semi-bold text-lg">
            Frequently Asked Questions
          </p>

          <p
            align="center"
            className=" font-OpenSans  w-[90%] sm:w-[70%] md:w-[50%] font-semi-thin"
          >
            Pinpoint your audience with precision, ensuring your marketing
            efforts reach those most likely to engage with your brand
          </p>

          <div className=" w-11/12 sm:w-11/12 lg:w-8/12 pb-[50px] mt-[30px]">
            {Array.from({ length: 3 }).map((item, index) => {
              return (
                <div key={index} className="rounded-md">
                  <Accordion
                    expanded={flag?.includes(index)}
                    onChange={() =>
                      flag?.includes(index)
                        ? setflag(flag.filter((item) => item !== index))
                        : setflag([...flag, index])
                    }
                  >
                    <AccordionSummary
                      expandIcon={<MdExpandMore size={30} />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className={` ${
                        flag?.includes(index) ? "shadow-lg shadow-blue-500" : ""
                      } `}
                      sx={{
                        backgroundColor: flag?.includes(index)
                          ? "blue"
                          : "white",
                        color: flag?.includes(index) ? "white" : "black",
                      }}
                    >
                      <p className="font-Montserrat font-semi-bold">
                        3. How does Osumare measure campaign success?
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="font-OpenSans text-xs leading-6  font-semi-thin px-5">
                        We believe in measurable results. Our data-driven
                        approach means that every campaign's performance is
                        tracked, analyzed, and refined for optimal outcomes. We
                        provide regular reports that detail key metrics, giving
                        you clear insights into how our strategies are driving
                        growth for your brand.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" relative w-full flex flex-col justify-center items-center">
        <div class="absolute inset-0 bg-gradient-to-r from-white to-[#80BBFF] rounded-lg blur-[200px] w-[400px] h-[400px] left-[-10px] right-0 top-32 clip-ellipse"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-white to-[#FF725E] rounded-lg blur-[200px] w-[400px] h-[400px] right-0 top-32 left-[65%] clip-ellipse"></div>
        <div className=" w-11/12 flex flex-col pt-[70px] justify-center items-center gap-4">
          <p align="center " className="font-Montserrat font-semi-bold">
            Connect with Our Digital Marketing Experts
          </p>

          <p align="center" className=" text-sm font-OpenSans font-semi-thin ">
            Reach Out for Tailored Strategies and Results-Driven Solutions.Let's
            Elevate Your Online Presence Together
          </p>

          <Card1 />
        </div>
      </div>
    </div>
  );
};

export default Section4;
