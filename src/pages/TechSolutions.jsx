import React from 'react';
import reactlog from "../assets/reactlog.png";
import vuelogo from "../assets/vuelogo.png"
import javascriptlogo from "../assets/javascriptlogo.png"
import htmllogo from "../assets/htmllogo.png"
import csslogo from "../assets/csslogo.png"
import nextjsicons from "../assets/nextjsicons.png"
import Maskgroup from "../assets/Maskgroup.png"



const TechSolutions = () => {
  return (
    <div
      className=" border-2 p-6 rounded-[26px] border border-[#2d4642] w-[1680px] h-[500px] z-20 relative ml-[110px] mt-[150px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${Maskgroup})` }}>
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        {/* Left Column */}
        <div className="md:w-1/3">
          <h1  style={{
                        display: 'inline-table',
                        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        color: "#157B6C",
                    }} className="text-4xl font-extrabold font-montserrat text-[#8DBFB7] opacity-100 w-[613px] transform -translate-y-8">
            Innovative Technology <br /> Solutions
          </h1>
          <ul className="mt-6 space-y-4 w-97 h-27 font-Montserrat font-bold text-20">
            <li className="text-[#157B6C]">
              Frontend
              <i className="fas fa-arrow-right"></i>
            </li>
            <li className="text-[#FFFFFF]">Backend</li>
            <li className="text-[#FFFFFF]">Mobile</li>
            <li className="text-[#FFFFFF]">UI/UX Design</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3 mt-6 md:mt-0 h-full overflow-auto">
          <p className="text-lg mb-6 w-[656px] opacity-100 font-montserrat font-medium text-[#FFFFFF] mt-[50px] text-align: right;">
            Empowering businesses with cutting-edge IT solutions, including cloud computing,
            cybersecurity, AI, automation, and software development to drive efficiency,
            security, and growth.
          </p>

          {/* Technology Grid - Updated with scrolling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {/* React JS Card */}
            <div className="bg-[#051E16] w-[260px] h-[90px] opacity-100 rounded-[10px] border border-[#1E3D32] flex items-center justify-center" style={{ position: 'relative', zIndex: 1.5 }}>
              <img
                alt="React JS logo"
                className="mr-2"
                height="50"
                src={reactlog}
                width="50"
              />
              <span className="text-[#FFFFFF]">React JS</span>
            </div>

            {/* Vue JS Card */}
            <div className="bg-[#051E16] w-[260px] h-[90px] opacity-100 rounded-[10px] border border-[#1E3D32] flex items-center justify-center">
              <img
                alt="Vue JS logo"
                className="mr-2"
                height="50"
                src={vuelogo}
                width="50"
              />
              <span className="text-[#FFFFFF]">Vue JS</span>
            </div>

            {/* JavaScript Card */}
            <div className="bg-[#051E16] w-[260px] h-[90px] opacity-100 rounded-[10px] border border-[#1E3D32] flex items-center justify-center">
              <img
                alt="JavaScript logo"
                className="mr-2"
                height="50"
                src={javascriptlogo}
                width="50"
              />
              <span className="text-[#FFFFFF]">JavaScript</span>
            </div>

            {/* CSS Card */}
            <div className="bg-[#051E16] w-[260px] h-[90px] opacity-100 rounded-[10px] border border-[#1E3D32] flex items-center justify-center">
              <img
                alt="CSS logo"
                className="mr-2"
                height="50"
                src={csslogo}
                width="50"
              />
              <span className="text-[#FFFFFF]">CSS</span>
            </div>

            {/* HTML Card */}
            <div className="bg-[#051E16] w-[260px] h-[90px] opacity-100 rounded-[10px] border border-[#1E3D32] flex items-center justify-center">
              <img
                alt="HTML logo"
                className="mr-2"
                height="50"
                src={htmllogo}
                width="50"
              />
              <span className="text-[#FFFFFF]">HTML</span>
            </div>
            <div className="bg-[#051E16] w-[260px] h-[90px] opacity-100 rounded-[10px] border border-[#1E3D32] flex items-center justify-center">
              <img
                alt="nest.js logo"
                className="mr-2"
                height="50"
                src={nextjsicons}
                width="50"
              />
              <span className="text-[#FFFFFF]">Next JS</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutions;