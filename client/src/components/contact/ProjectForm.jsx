import React from "react";
import { MdOutlineNorthEast } from "react-icons/md";

const ProjectForm = () => {
  return (
    <div className="font-ibm p-8 text-white bg-gradient-to-l from-orange via-red to-purple">
      <h1 className="font-bold text-[2.125rem]/[2.57rem] mb-6">ANY PROJECT?</h1>

      <form className="space-y-5">
        <div className="flex space-x-5">
          <div className="flex-1">
            <label className="font-medium mb-1 text-[0.85rem]/[1.275rem] opacity-80">
              NAME
            </label>
            <input
              type="text"
              className="bg-transparent border-b border-white focus:outline-none text-white"
            />
          </div>
          <div className="flex-1">
            <label className="font-medium mb-1 text-[0.85rem]/[1.275rem] opacity-80">
              EMAIL
            </label>
            <input
              type="email"
              className="bg-transparent border-b border-white focus:outline-none text-white"
            />
          </div>
        </div>
        <div className="flex-col">
          <label className="block font-medium mb-1 text-[0.85rem]/[1.275rem] opacity-80">
            MESSAGE
          </label>
          <textarea
            rows="2"
            className="bg-transparent w-full border-b border-white focus:outline-none text-white"
          ></textarea>
          <button type="button" className="opacity-80">
            ATTACH FILE
          </button>
        </div>

        <button type="submit" className="flex justify-center items-center bg-black text-white">
          Submit now
          <MdOutlineNorthEast className="bg-gradient-to-l from-orange via-red to-purple" />
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
