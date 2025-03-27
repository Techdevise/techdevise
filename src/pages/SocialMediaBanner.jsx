import React from "react";
import Linkdinlogo from "../assets/Linkdinlogo.png";
import Vector from "../assets/Vector.png";
import Upwork from "../assets/Upwork.png";
import Arrowlogo from "../assets/Arrowlogo.png"
import Upworklogo from "../assets/Upworklogo.png"
import Trustpilot from "../assets/Trustpilot.png"
import Clutch from "../assets/Clutch.png"

const SocialMediaBanner = () => {
  return (
    <div className="w-[1680px] h-[312px] mt-[100px] ml-28 bg-[#062018] flex items-center justify-between px-10 rounded-3xl opacity-100">
      <div style={{
        display: 'inline-table',
        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        color: "#157B6C",
      }} className="text-white text-5xl font-extrabold">
        <span className="text-gray-300">You can</span> <span className="text-green-400"> Find </span> <br /> Us on
        <img src={Arrowlogo} alt="Arrologo" className="absolute w-[222px] h-[122px] left-[500px] mt-[-110px]" />
      </div>
      <div className="flex space-x-5">
        <div className="grid grid-cols-2 gap-0">
          <a href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all" className="bg-[#0077B5] text-white w-[440px] h-[132px] opacity-100 flex items-center justify-center text-xl font-bold">
            <img
              src={Linkdinlogo}
              alt="LinkedIn"
              className="w-[200px] h-[50px] mr-2"
            />
          </a>
          <a href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all" className="bg-green-500 text-white px-6 py-4 rounded-tr-2xl flex items-center justify-center text-xl font-bold">
            <img
              src={Upworklogo}
              alt="Upwork"
              className="w-[200px] h-[50px] mr-2"
            />
          </a>
          <a href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all" className="bg-[#17313B] text-white w-[440px] h-[132px] opacity-100 flex items-center justify-center text-xl font-bold">
            <img
              src={Clutch}
              alt="clutch"
              className="w-[200px] h-[50px] mr-2"
            />
          </a>
          <a href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all" className="bg-[#0AB67B] text-white px-6 py-4 rounded-br-2xl flex items-center justify-center text-xl font-bold">
            <img
              src={Trustpilot}
              alt="Trustpilot"
              className="w-[200px] h-[50px] mr-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBanner;

