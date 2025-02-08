import React from "react";
import { MdOutlineNorthEast } from "react-icons/md";
import Sidebar from "../sidebar/Sidebar";

import imgone from "../../constants/photos/Img (6).png";
import imgtwo from "../../constants/photos/Img (7).png";
import imgthree from "../../constants/photos/Img (8).png";

const Blogs = () => {
  return (
    <div className=" flex flex-col lg:flex-row h-full ">
      <Sidebar />
      <div className="flex-col lg:basis-4/5 lg:ml-60 lg:p-8 px-10 py-20 flex items-center justify-center content-center font-ibm">
        <div className="text-center mt-4">
          <span className="text-[0.925rem]/[1.275rem] italic font-semiBold">
            blog
          </span>
          <h1 className="text-[2.55rem]/[2.975rem] font-bold">READ MY BLOG</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 m-10">
          <div className="m-10">
            <img src={imgone} alt="first" />
            <span className="text-[0.925rem]/[1.275rem] italic font-semiBold">
              10 July, 2022
            </span>
            <p className="text-[1.275rem]/[1.594rem] font-bold">
              12 unique example of portfolio websites
            </p>
            <div className="mt-4 border-t border-black border-opacity-20"></div>
          </div>
          <div className="m-10">
            <img src={imgtwo} alt="second" />
            <span className="text-[0.925rem]/[1.275rem] italic font-semiBold">
              10 July, 2022
            </span>
            <p className="text-[1.275rem]/[1.594rem] font-bold">
              12 unique example of portfolio websites
            </p>
            <div className="mt-4 border-t border-black border-opacity-20"></div>
          </div>
          <div className="m-10">
            <img src={imgthree} alt="third" />
            <span className="text-[0.925rem]/[1.275rem] italic font-semiBold">
              10 July, 2022
            </span>
            <p className="text-[1.275rem]/[1.594rem] font-bold">
              12 unique example of portfolio websites
            </p>
            <div className="mt-4 border-t border-black border-opacity-20"></div>
          </div>
        </div>
        <button className="flex mx-auto w-[10rem] h-[3rem] items-center justify-center bg-black text-white">
          load more
          <MdOutlineNorthEast className="bg-gradient-to-l from-orange via-red to-purple" />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
