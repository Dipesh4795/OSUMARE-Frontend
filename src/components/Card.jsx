import React from "react";
import { SiComma } from "react-icons/si";
import person from "../assests/person.png";
import Video from "../assests/Video.png";
import video from "../assests/video.mp4";
const Card = () => {
  return (
    <div className="px-[15px] md:px-[30px] py-[30px] border-white rounded-md  mt-[20px] border-2px shadow-lg shadow-grey   w-11/12 lg:w-8/12 flex justify-center  items-center">
      <div className="flex justify-between flex-col md:flex-row  items-center md:items-start gap-5 md:gap-4 ">
        <video
          width="350"
          height="350"
          controls
          autoplay={false}
          loop
          muted
          poster={Video}
          className="rounded-md"
          load
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="flex flex-col  md:w-[50%] pr-[20px] justify-center  items-center md:items-start gap-4">
          <div className="flex w-fit md:w-full justify-start  md:justify-between items-center">
            <div className="flex w-fit  gap-4 lg:gap-3 justify-center items-center">
              <img
                src={person}
                alt="item"
                loading="lazy"
                className="w-[50px] h-[50px] rounded-full"
              />
              <p className="font-Montserrat font-semi-bold text-sm">
                Tabish Khan
              </p>
            </div>
            <div className=" hidden md:flex gap-1">
              <SiComma size={30} color={"blue"} />
              <SiComma size={30} color={"blue"} />
            </div>
          </div>

          <p align="center" className="font-OpenSans font-semi-thin">
            Osumare's expertise in pharma marketing is unparalleled. Their
            strategies helped us navigate complex regulations while driving
            remarkable growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
