import React from "react";

const Card1 = () => {
  return (
    <div className="sm:w-9/12 w-11/12 z-20 px-6 py-5 rounded-md mt-[20px] flex justify-center items-center flex-col gap-3 border-[2px] border-white bg-white shadow-lg shadow-gray-500">
      <div className="flex  flex-col md:flex-row justify-between w-10/12  text-sm items-start gap-4">
        <div className=" w-full md:w-[50%] flex flex-col gap-2 justify-center items-start">
          <p className="font-Montserrat font-semi-bold pl-2">Name</p>
          <input
            type="text"
            placeholder="Enter your Name"
            className="bg-gray-100 placeholder:text-black w-full px-2 py-3 rounded-md placeholder:text-sm  placeholder:py-2 placeholder:pl-3"
          />
          <p className="font-Montserrat font-semi-bold pl-2 ">Phone</p>
          <input
            type="number"
            placeholder="Enter your PhoneNumber"
            minLength={10}
            maxLength={12}
            className="bg-gray-100 placeholder:text-black w-full px-2 py-3 rounded-md placeholder:text-sm  placeholder:py-2 placeholder:pl-3"
          />
          <p className="font-Montserrat font-semi-bold pl-2">Email</p>
          <input
            type="email"
            placeholder="Enter your Email"
            className="bg-gray-100 placeholder:text-black w-full px-2 py-3 rounded-md placeholder:text-sm  placeholder:py-2 placeholder:pl-3"
          />
        </div>
        <div className="flex flex-col  w-full md:w-[42%] text-sm gap-2 justify-start items-start">
          <p className="font-Montserrat font-semi-bold ">Message</p>
          <textarea
            placeholder="Enter your Message"
            width={300}
            height={300}
            className="bg-gray-100 placeholder:text-black w-full  px-2 py-3 rounded-md placeholder:text-sm "
          ></textarea>
        </div>
      </div>

      <button className="bg-blue-600  px-10 sm:px-16 mt-3 py-2 text-xs sm:text-md  cursor-pointer font-Montserrat text-white rounded-full">
        Get Started
      </button>
    </div>
  );
};

export default Card1;
