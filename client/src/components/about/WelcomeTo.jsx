import React from "react";
import { LuSquareUserRound } from "react-icons/lu";
import {
  MdOutlineNorthEast,
  MdOutlinePlace,
  MdOutlineVoicemail,
} from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import img from "../../constants/photos/Img (1).png";

const WelcomeTo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 box-border mb-5 items-center justify-center font-ibm">
      <div className="m-20">
        <h3 className="text-[0.925rem]/[1.275rem] italic font-semiBold">
          Nice to meet you!
        </h3>
        <h2 className="text-[2.55rem]/[2.975rem] font-bold">WELCOME TO...</h2>
        <img src={img} alt="jacob" />
        <h2 className="text-[2.55rem] text-center font-bold bg-gradient-to-l from-orange via-red to-purple bg-clip-text text-transparent [-letter-spacing: -5%]">
          JACOB JONES
        </h2>
        <h3 className="font-bold text-center italic text-[1.275rem]/[1.5rem]">
          Product Designer{" "}
          <span className="not-italic font-normal">based in</span> London
        </h3>
        <button className="flex mx-auto items-center justify-center">
          Download CV
          <MdOutlineNorthEast className="bg-black text-white" />
        </button>
      </div>
      <div className="lg:mr-12 mx-auto w-[35rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <span className="items-center inline-flex text-[0.956rem]/[1.275rem] font-bold italic">
            <div className="w-[40px] h-[40px] text-[20px] p-[10px] bg-gray text-black items-center justify-center rounded-full">
              <MdOutlineVoicemail />
            </div>
            +77 022 444 05 05
          </span>
          <span className="items-center inline-flex text-[0.956rem]/[1.275rem] font-bold italic">
            <div className="w-[40px] h-[40px] text-[20px] p-[10px] bg-gray text-black items-center justify-center rounded-full">
              <LuSquareUserRound />
            </div>
            25 yrs
          </span>
          <span className="items-center inline-flex text-[0.956rem]/[1.275rem] font-bold italic">
            <div className="w-[40px] h-[40px] text-[20px] p-[10px] bg-gray text-black items-center justify-center rounded-full">
              <TfiEmail />
            </div>
            jacob360@gmail.com
          </span>
          <span className="items-center inline-flex text-[0.956rem]/[1.275rem] font-bold italic">
            <div className="w-[40px] h-[40px] text-[20px] p-[10px] bg-gray text-black items-center justify-center rounded-full">
              <MdOutlinePlace />
            </div>
            United kingdom, London
          </span>
        </div>
        <div className=" w-full my-6 border-t border-[1px] border-black  border-opacity-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center ">
              <h1 className="text-[2.55rem] text-center font-bold bg-gradient-to-l from-orange via-red to-purple bg-clip-text text-transparent [-letter-spacing: -5%]">
                10+
              </h1>
              <h3 className="text-[0.956rem]/[1.275rem] font-bold italic">
                Years exprience...{" "}
              </h3>
            </div>
            <p className="text-[0.956rem]/[1.275rem]">
              Hello there! My name is{" "}
              <span className="text-purple">Jacob Jones</span>. I am a web
              designer & developer, and I'm very passionate and dedicated to my
              work.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="text-[2.55rem] text-center font-bold bg-gradient-to-l from-orange via-red to-purple bg-clip-text text-transparent [-letter-spacing: -5%]">
                14
              </h1>
              <h3 className="text-[0.956rem]/[1.275rem] font-bold italic">
                Clients Worldwide...
              </h3>
            </div>
            <p className="text-[0.956rem]/[1.275rem]">
              With 10+ years experience as a professional a graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success.
            </p>
          </div>
        </div>
        <div className=" h-[7.5rem] items-center content-center bg-black">
          <p className="flex text-[1.063rem]/[1.7rem] text-white box-border p-4">
            <span className="text-[5rem] inline-block rotate-180 opacity-20">
              ,,
            </span>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            sed sit ultrices et sed metus sollicitudin.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTo;
