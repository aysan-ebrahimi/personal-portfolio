import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default Home;
