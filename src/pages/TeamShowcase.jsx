import React from 'react'
import Tdteam1 from "../assets/Tdteam1.svg"
import Tdteam2 from "../assets/Tdteam2.svg"
import Tdteam3 from "../assets/Tdteam3.svg"
import Tdteam4 from "../assets/Tdteam4.svg"
import Tdteam5 from "../assets/Tdteam5.svg"
const TeamShowcase = () => {
    return (
      <div className="relative w-[1900px] h-[580px] bg-[#ffffff]">
        {/* Top Half with Background Color */}
        <div className="absolute top-0 left-0 w-full z-9">
          {/* Heading */}
          <h2 className="absolute top-[10px] left-[110px] text-4xl font-semibold text-[40px] text-[#157B6C]">
            Life @ Techdevise
          </h2>
  
          {/* Image Container */}
          <div className="flex justify-center items-center gap-4 mt-[70px]">
            {/* Image 1 */}
            <div className="w-[304px] h-[318px] bg-white rounded-lg overflow-hidden">
              <img
                src={Tdteam1}
                alt="Team Building"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Image 2 */}
            <div className="w-[304px] h-[318px] bg-white rounded-full overflow-hidden">
              <img
                src={Tdteam2}
                alt="Team Event"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Image 3 */}
            <div className="w-[304px] h-[318px] bg-white rounded-lg overflow-hidden">
              <img
                src={Tdteam3}
                alt="Team Discussion"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Image 4 */}
            <div className="w-[304px] h-[318px] bg-white rounded-full overflow-hidden">
              <img
                src={Tdteam4}
                alt="Team Bonding"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Image 5 */}
            <div className="w-[304px] h-[318px] bg-white rounded-lg overflow-hidden">
              <img
                src={Tdteam5}
                alt="Game Night"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Left-Right Arrows */}
          <div  className="absolute bottom-[30px] right-[30px] flex gap-2 bg-white">
            <button className="w-[40px] h-[40px] rounded-full bg-teal-500 text-white flex justify-center items-center hover:bg-teal-600">
              ←
            </button>
            <button className="w-[40px] h-[40px] rounded-full bg-teal-500 text-white flex justify-center items-center hover:bg-teal-600">
              →
            </button>
          </div>
        </div>
  
        {/* Bottom Half with White Background */}
        <div className="absolute bottom-0 left-0 w-full h-[387px] bg-[#157B6C]">
          {/* Text Below */}
          <div className="text-center mt-50">
            <h1 className="w-[1009px] h-[78px] opacity-100 font-Montserrat font-bold text-[64px] text-white ml-[142px]">
              Where Work Feels Like Home
            </h1>
            <p className="w-[717px] opacity-100 font-Montserrat font-bold text-[20px] text-white mt-4 ml-[90px]">
              Join a team that’s not afraid to break the mold and set new standards.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TeamShowcase;