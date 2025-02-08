import React from "react";
import { MdOutlineNorthEast, MdOutlineVoicemail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

import img from "../../constants/photos/Img.png";
const Hero = () => {
  return (
    <div className="lg:basis-4/5 lg:ml-60 lg:p-8 px-10 py-20 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4 font-ibm p-4 content-center text-black">
          <h1 className="text-[6.375rem]/[90px] ">
            MY NAME IS <span className="font-bold">JACOB JONES...</span>
          </h1>
          <h2 className="text-[27.2px] font-bold italic">
            Product Designer
            <span className="font-medium not-italic">based in</span> London
          </h2>
          <button className="flex w-[219px] my-4 px-[34px] py-[15px] items-center justify-center bg-black text-white">
            Let’s talk with me
            <MdOutlineNorthEast className="ml-1 bg-gradient-to-l from-orange via-red to-purple" />
          </button>
          <div className="grid grid-flow-col gap-4">
            <span className="inline-flex items-center text-[0.956rem]/[1.275rem] font-bold">
              <div className="w-[40px] h-[40px] mr-3 text-[20px] p-[10px] bg-gray text-black items-center justify-center rounded-full">
                <TfiEmail />
              </div>
              +77 022 444 05 05
            </span>
            <span className="inline-flex items-center text-[0.956rem]/[1.275rem] font-bold">
              <div className="w-[40px] h-[40px] mr-3 text-[20px] p-[10px] bg-gray text-black items-center justify-center rounded-full">
                <MdOutlineVoicemail />
              </div>
              jacob360@gmail.com
            </span>
          </div>
        </div>
        <div class=" p-4 content-center">
          <img src={img} alt="jacob" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
