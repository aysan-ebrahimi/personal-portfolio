import React from "react";
import Sidebar from "../sidebar/Sidebar";
import MyExprience from "./MyExprience";
import WelcomeTo from "./WelcomeTo";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full lg:min-h-screen">
      <Sidebar />
      <div className="lg:basis-4/5 lg:ml-60 lg:p-8 px-10 py-20 lg:flex flex-col items-center justify-center"> 
        <WelcomeTo />
        <MyExprience />
      </div>
    </div>
  );
};

export default About;
