import React from "react";
import Sidebar from "../sidebar/Sidebar";
import ProjectForm from "./ProjectForm";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <Sidebar />
      <div className="lg:basis-4/5 lg:ml-60 lg:p-8 px-10 py-20 items-center justify-center grid lg:grid-cols-2 grid-cols-1 lg:px-[80px] lg:py-[200px] content-center">
        <div className="font-imb space-y-8 mb-8 lg:text-left text-center">
          <div>
            <span className="font-semiBold text-[0.956rem]/[1.275rem] italic">
              Contact
            </span>
            <h1 className="font-bold text-[2.57rem]/[2.975rem]">
              REACH OUT ME
            </h1>
            <p className="text-[0.85rem]/[1.275rem]">
              249 king Sir, 05th Floor, Ultra House Building, Melboune, VIC
              3000, London.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-[1.7rem]/[2.125rem] font-bold">
              +77 022 444 05 05
            </span>
            <span className="text-[1.7rem]/[2.125rem] font-bold">
              jacob360@gmail.com
            </span>
          </div>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <span className="text-[0.85rem]/[1.275rem]">FACEBOOK</span>
            <span className="text-[0.85rem]/[1.275rem]">TWITTER</span>
            <span className="text-[0.85rem]/[1.275rem]">INSTAGRAM</span>
            <span className=" text-[0.85rem]/[1.275rem]">LINKEDIN</span>
          </div>
        </div>
        <ProjectForm />
      </div>
    </div>
  );
};

export default Contact;
