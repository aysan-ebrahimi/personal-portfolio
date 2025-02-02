import React from "react";
import { MdOutlineNorthEast } from "react-icons/md";

const MyExprience = () => {
  return (
    <div className="font-ibm text-white ml-0 pl-0 grid grid-cols-2 gap-4 bg-gradient-to-l from-orange via-red to-purple">
      <div className="grid grid-cols-1 gap-[40px] box-border p-12 content-center">
        <h3 className="text-[0.956rem]/[1.275rem] italic font-semiBold ">
          Experience
        </h3>
        <h1 className="text-[2.55rem]/[2.975rem] font-bold">MY EXPERIENCE</h1>
        <p className="text-[0.956rem]/[1.488rem] w-[22.8rem]">
          Hello there! My name is Jacob Jones. I am a web designer & developer,
          and I'm very passionate and dedicated to my work.
        </p>
        <button className="flex box-border items-center justify-center px-[2.125rem] py-[0.956rem] bg-black w-[15.5rem]">
          Download my resume
          <MdOutlineNorthEast className="bg-gradient-to-l from-orange via-red to-purple" />
        </button>
      </div>
      <div className=" grid grid-cols-1 gap-[40px] box-border p-12">
        <div>
          <div className="flex justify-between">
            <span className="text-[0.956rem]/[1.275rem] italic font-bold">
              -2018 - Present
            </span>
            <span className="text-[0.85rem]/[1.275rem] font-medium">
              -Rolling Thunder
            </span>
          </div>
          <p className="text-[1.7rem]/[2.57rem] font-bold">
            Lead UI/UX Designer
          </p>
        </div>
        <div className="border-t border-white opacity-20"></div>
        <div>
          <div className="flex justify-between">
            <span className="text-[0.956rem]/[1.275rem] italic font-bold">
              -2018 - 2010
            </span>
            <span className="text-[0.85rem]/[1.275rem] font-medium">
              -Locost Accessories
            </span>
          </div>
          <p className="text-[1.7rem]/[2.57rem] font-bold">
            Senior UI/UX Designer
          </p>
        </div>
        <div className="border-t border-white opacity-20"></div>
        <div>
          <div className="flex justify-between">
            <span className="text-[0.956rem]/[1.275rem] italic font-bold">
              -2008 - 2006
            </span>
            <span className="text-[0.85rem]/[1.275rem] font-medium">
              Sagebrush
            </span>
          </div>
          <p className="text-[1.7rem]/[2.57rem] font-bold">
            Junior UI/UX Designer
          </p>
        </div>
        <div className="border-t border-white opacity-20"></div>
      </div>
    </div>
  );
};

export default MyExprience;
