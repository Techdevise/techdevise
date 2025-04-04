import React from 'react';
import '../styles/pages/IndustryVision.css'; 
import healthcare from "../assets/healthcare.png"
import fitness from "../assets/fitness.png"
import Realstate from "../assets/Realstate.png"
import Socailmedia from "../assets/Socailmedia.png"
import Educate from "../assets/Educate.png"
import Entertainmentt from "../assets/Entertainmentt.png"
import ecommerce from "../assets/eweb.png"
import AVR from "../assets/AVR.png"

const IndustryVision = () => {
  return (
    <div className="bg-[#061611] text-white mx-auto py-12 px-8 w-full max-w-[1680px] border border-[#2d4642] rounded-[20px] relative overflow-hidden mt-[100px]">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-32">
        {/* Left side - Title */}
        <div className="lg:w-[45%] max-w-[683px]">
          <h1
            style={{
              background: "linear-gradient(to right, #e0e0e0, #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="text-[47px] font-extrabold leading-tight"
          >
            A Seamless Vision that Adapts to Every Industry's Demands
          </h1>
          <p className="font-bold text-xl text-white mt-10 max-w-[725px]">
            We deliver flexible and innovative IT solutions tailored to meet the evolving needs of various industries,
            ensuring efficiency, scalability, and long-term success.
          </p>
        </div>

        {/* Right side - Image Grid */}
        <div className="lg:w-[55%] ml-[100px] p-4">
  <div className="grid grid-cols-4 grid-rows-[auto_auto_auto] gap-x-3 gap-y-3">
    {/* Healthcare */}
    <div 
      className="custom-image col-span-1 row-span-2 relative group overflow-hidden opacity-100 rounded-[12px]"
      style={{ width: 185, height: 330,  }}
    >
      <img
        src={healthcare}
        alt="Healthcare"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-bold text-[20px] font-montserrat">Healthcare</p>
      </div>
    </div>

    {/* Top Row */}
    {[fitness, Realstate, Socailmedia].map((src, index) => (
      <div 
        key={index}
        className="custom-image relative group overflow-hidden opacity-100 rounded-[12px]" 
        style={{ width: 185, height: 159 }}
      >
        <img
          src={src}
          alt={["Fitness", "Real Estate", "Social Media"][index]}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white font-bold text-[20px] font-montserrat">
            {["Fitness", "Real Estate", "Socail Media"][index]}
          </p>
        </div>
      </div>
    ))}

    {/* Middle Row */}
    <div 
      className="custom-image col-span-2 relative group overflow-hidden opacity-100 rounded-[12px]"
      style={{ width: 380, height: 159 }}
    >
      <img
        src={Educate}
        alt="Education"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform" 
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-bold text-[20px] font-montserrat">Education</p>
      </div>
    </div>

    <div 
      className="custom-image relative group overflow-hidden opacity-100 rounded-[12px]"
      style={{ width: 185, height: 159 }}
    >
      <img
        src={Entertainmentt}
        alt="Entertainment"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-bold text-[20px] font-montserrat">Entertainment</p>
      </div>
    </div>

    {/* Bottom Row */}
    {[ecommerce, ecommerce].map((src, index) => (
      <div 
        key={index}
        className="custom-image relative group overflow-hidden opacity-100 rounded-[12px]"
        style={{ width: 185, height: 159 }}
      >
        <img
          src={src}
          alt="E-commerce"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white font-bold text-[20px] font-montserrat">E-commerce</p>
        </div>
      </div>
    ))}

    <div 
      className="custom-image col-span-2 relative group overflow-hidden opacity-100 rounded-[12px]"
      style={{ width: 385, height: 161 }}
    >
      <img
        src={AVR}
        alt="AR/VR"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-bold text-[20px] font-montserrat">AR/VR</p>
      </div>
    </div>
  </div>
</div>

      </div>

      <div className="flex bg-[#0a211b] rounded-3xl p-6 w-[733px] h-[164] max-w-3xl items-center justify-between mt-[-310px]">
  {/* Left Content */}
  <p className="text-white text-lg font-medium">
    Fuel Success in a Digital-First World with <span className="font-bold text-[#8CBEB7]">300+</span> Visionaries.
  </p>

  {/* Button Section */}
  <div className="bg-white rounded-lg px-6 py-3 flex items-center cursor-pointer shadow-md">
    <button className="text-[#157B6C] w-[270px] h-[100px] font-bold text-[20px] font-montserrat flex items-center">
      Let’s Innovate Together
      <svg width="50" height="24" viewBox="0 0 24 24" fill="none" xmlns="">
        <path d="M13 5L20 12L13 19" stroke="#0a6e58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12H20" stroke="#0a6e58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
</div>

    </div>

  )
}

export default IndustryVision

