import React from "react";
import Vector from "../assets/Vector.png";
import Upwork from "../assets/Upwork.png"; 

const SocialMediaBanner = () => {
  return (
    <div className="w-[1680px] h-[312px] mt-[100px] ml-28 bg-[#062018] flex items-center justify-between px-10 rounded-lg opacity-100">
      <div className="text-white text-4xl font-semibold">
        <span className="text-gray-300">You can</span> <span className="text-green-400">Find</span> <br /> Us on
      </div>
      <div className="flex space-x-5">
        <div className="grid grid-cols-2 gap-4">
          <a href="#" className="bg-[#0077B5] text-white opacity-100 flex items-center justify-center text-xl font-bold">
            <img src={Vector} alt="LinkedIn" className="w-6 h-6 mr-2 bg-[#0077B5]" style={{ backgroundColor: "#FFFFFF" }} /> LinkedIn
          </a>
          <a href="#" className="bg-green-500 text-white px-6 py-4 rounded-tr-2xl flex items-center justify-center text-xl font-bold">
            <img src={Upwork} alt="Upwork" className="w-6 h-6 mr-2" /> Upwork
          </a>
          <a href="#" className="bg-[#17313B] text-white w-[440px] h-[132px] opacity-100 flex items-center justify-center text-xl font-bold">
            <img src={Vector} alt="Clutch" className="w-6 h-6 mr-2" /> Clutch
          </a>
          <a href="#" className="bg-[#0AB67B] text-white px-6 py-4 rounded-br-2xl flex items-center justify-center text-xl font-bold">
            <img src={Vector} alt="Trustpilot" className="w-6 h-6 mr-2" /> Trustpilot
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBanner;

