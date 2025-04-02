import React from "react";
import bro from "../assets/bro.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ArtificialIntelligence = () => {
   return (
    <div className="w-[1674px] h-[418px] flex bg-white items-center p-10">
      {/* Left Text Section */}
      <div className="w-2/3 pr-10">
        <h2 className="text-2xl font-bold rotate-[-90deg] absolute left-0 top-1/2 origin-left font-Montserrat">
          Artificial Intelligence
        </h2>
        <p className="text-[16px] text-black leading-relaxed">
          Artificial Intelligence as you can understand is all about implementing a system that can
          calculate, derive, and take decisions without having to wait for human input. Although
          these days in many fields AI is being used, it’s still a new technology in the corporate
          world and requires a lot of implementation capabilities. At Tech Devise, we stand as the
          bridge between the corporate needs and the academic knowledge of AI. We implement the
          data research models into machines to offer our clients the right solution for their
          requirement. We have experts in our team of AI and ML. From data studies to deployment,
          we stay with our clients and make sure that we deliver them a capable AI-enabled system.
          We team up with data scientists to extract valuable information from any existing data
          present in any company and then optimize their business with the help of AI and ML. If
          you wish to build scalable ML models that can improve your business progress, we are
          definitely with you.
        </p>
      </div>
      
      {/* Right Image Section */}
      <div className="w-1/3 flex justify-center">
        <img src={bro} alt="AI Illustration" className="w-[430px] h-[418px] mt-30" />
      </div>
        {/** Navigation Arrows */}
                  <div className="absolute left-20 bottom-10 flex gap-4">
                      <button className="bg-black text-white p-3 rounded-full"><FaArrowLeft size={20} /></button>
                      <button className="bg-black text-white p-3 rounded-full"><FaArrowRight size={20} /></button>
                  </div>
    </div>
  );
};

export default ArtificialIntelligence;
