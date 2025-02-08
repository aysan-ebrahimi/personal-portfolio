import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineNorthEast } from "react-icons/md";

import imgone from "../../constants/photos/Img (2).png";
import imgtwo from "../../constants/photos/Img (3).png";
import imgthree from "../../constants/photos/Img (4).png";
import imgfour from "../../constants/photos/Img (5).png";
import imgfive from "../../constants/photos/image.png";

import cuebiq from "../../constants/photos/cuebiq .png";
import martino from "../../constants/photos/martino.png";
import paperz from "../../constants/photos/paperz.png";
import square from "../../constants/photos/square.png";

import Sidebar from "../sidebar/Sidebar";

const Works = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <Sidebar />
      <div className="flex-col font-ibm box-border p-[80px] lg:basis-4/5 lg:ml-60 px-10 py-20 flex">
        <span className="text-[0.956rem]/[1.275rem] italic font-semibold">
          Work
        </span>
        <h1 className="text-[2.57rem]/[2.975rem] font-bold mb-20">RECENT PROJECT</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col sm:flex-row lg:flex-row items-center">
            <div>
              <span className="text-[0.975]/[1.275] italic font-semiBold">
                UX case study
              </span>
              <p className="text-[2.125rem] font-bold">
                Bally Website Research
              </p>
              <MdOutlineNorthEast className="text-[2rem]" />
            </div>
            <img src={imgone} alt="one" />
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-row items-center">
            <div>
              <span className="text-[0.975]/[1.275] italic font-semiBold">
                UX case study
              </span>
              <p className="text-[2.125rem] font-bold">
                Bally Website Research
              </p>
              <MdOutlineNorthEast className="text-[2rem]" />
            </div>
            <img src={imgtwo} alt="two" />
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-row items-center">
            <div>
              <span className="text-[0.975]/[1.275] italic font-semiBold">
                UX case study
              </span>
              <p className="text-[2.125rem] font-bold">
                Bally Website Research
              </p>
              <MdOutlineNorthEast className="text-[2rem]" />
            </div>
            <img src={imgthree} alt="three" />
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-row items-center">
            <div>
              <span className="text-[0.975]/[1.275] italic font-semiBold">
                UX case study
              </span>
              <p className="text-[2.125rem] font-bold">
                Bally Website Research
              </p>
              <MdOutlineNorthEast className="text-[2rem]" />
            </div>
            <img src={imgfour} alt="four" />
          </div>
        </div>
        <div className="flex justify-center m-10 mb-20 items-center ">
          <button className="flex w-[10.5rem] bg-black text-white box-border py-[0.9rem] px-[2rem] items-center">
            Load more
            <MdOutlineNorthEast className="bg-gradient-to-l from-orange via-red to-purple" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 text-white place-items-center box-border p-10 bg-gradient-to-l from-orange via-red to-purple">
          <span className="text-[0.956rem]/[1.275rem] italic font-semiBold">
            Testimonial
          </span>
          <h1 className="text-[2.57rem]/[2.975rem] italic font-bold">
            WHAT THEY SAYS
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-0">
            <img src={imgfive} alt="image" />
            <div className="grid grid-cols-1 gap-10">
              <p className="text-[1.7rem]/[2.125rem] font-bold">
                “ File storage made easy – including powerful features you won’t
                find anywhere else. Whether you’re.”
              </p>
              <div className="flex-col">
                <span className="block text-[1.7rem]/[]2.125rem font-semiBold">
                  -Larry Diamond
                </span>
                <span className="block text-[0.85rem] font-normal">
                  Chief Executive Officer, Besnik
                </span>
              </div>
              <div className="flex">
                <div className="w-[60px] m-2 h-[60px] text-[22px] p-[19px] bg-white text-black items-center justify-center rounded-full">
                  <FaLongArrowAltLeft className="font-thin" />
                </div>
                <div className="w-[60px] m-2 h-[60px] text-[22px] p-[19px] bg-white text-black items-center justify-center rounded-full">
                  <FaLongArrowAltRight className="font-thin" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-0 border-t border-white"></div>

          <div className="grid grid-cols-4 gap-20">
            <img src={square} alt="square" className="w-[8rem]" />
            <img src={paperz} alt="paperz" className="w-[8rem]" />
            <img src={cuebiq} alt="cuebiq" className="w-[8rem]" />
            <img src={martino} alt="martino" className="w-[8rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
