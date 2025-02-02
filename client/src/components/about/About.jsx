import React from "react";
import Sidebar from "../sidebar/Sidebar";
import MyExprience from "./MyExprience";
import WelcomeTo from "./WelcomeTo";

const About = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="basis-4/5 ml-60"> 
        <WelcomeTo />
        <MyExprience />
      </div>
    </div>
  );
};

export default About;
