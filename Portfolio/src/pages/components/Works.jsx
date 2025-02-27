import React from "react";
import Ecommarce from "../../assets/ecommarce1.webp";
const Works = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="group relative ">
          <div className="relative inline-block transition-transform duration-500 ">
            <img
              src={Ecommarce}
              className="h-[360px] w-full rounded-md transition-all duration-300 grayscale group-hover:grayscale-0"
              alt="Project"
            />
            <div className="absolute inset-0 bg-[#3c9ac9] mix-blend-multiply opacity-60 transition-opacity rounded-md duration-500 group-hover:opacity-0"></div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="">
            <h3 className="text-[#e9c46a]">ecomm</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
