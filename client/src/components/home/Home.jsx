import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default Home;
