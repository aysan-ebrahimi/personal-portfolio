import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

import Img from "../../constants/photos/Img (9).png";

const services = [
  { id: 1, name: "WEB DESIGN" },
  { id: 2, name: "UI/UX DESIGN" },
  { id: 3, name: "MOBILE APPLICATION" },
  { id: 4, name: "USER RESEARCH" },
];
const Services = () => {
  const [showContent, setShowContent] = useState({});

  const toggleHandler = (id) => {
    setShowContent((current) => ({ ...current, [id]: !current[id] }));
  };
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="basis-4/5 ml-60 font-ibm p-[80px]">
        <span className="text-[0.956rem]/[1.275rem] font-semiBold italic">
          Service
        </span>
        <h1 className="text-[2.57rem]/[2.975rem] font-bold">MY SPECIALTIES</h1>
        <ul>
          {services.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-1 gap-5 items-center justify-center text-20px"
            >
              <div className="grid grid-cols-2">
                <span
                  className={`text-[1.7rem]/[2.57rem] font-bold before:content-['.'] before:left-0 before:text-black before:text-[60px]
                ${
                  showContent[item.id]
                    ? "bg-gradient-to-l from-orange via-red to-purple bg-clip-text text-transparent before:bg-gradient-to-l before:from-orange before:via-red before:to-purple before:bg-clip-text before:text-transparent"
                    : ""
                }
                `}
                >
                  {item.name}
                </span>
                <div>
                  <div className="flex items-center">
                    <p className="flex justify-center items">
                      You can customize a template or make your own from
                      scratch, with an immersive library at your disposal. You
                      can customize a template
                    </p>
                    <button
                      onClick={() => toggleHandler(item.id)}
                      className="flex items-center justify-center font-thin w-[3rem] h-[3rem] text-[3rem] ml-5"
                    >
                      {showContent[item.id] ? "-" : "+"}
                    </button>
                  </div>
                  {showContent[item.id] && (
                    <img src={Img} alt="mobile-application" />
                  )}
                </div>
              </div>
              <div className="border-t border-gray-100 opacity-10"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
