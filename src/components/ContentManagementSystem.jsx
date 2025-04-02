import React from "react";
import managementimage from "../assets/managementimage.png";
import teamcollaboration from "../assets/teamcollaboration.png";

const ContentManagementSystem = () => {
  return (
    <div className="w-full h-auto bg-white mx-auto p-24 flex flex-col items-center justify-center text-center">
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h2 className="text-[48px] font-extrabold font-Montserrat text-black">Content Management System</h2>
        <p className="text-[18px] font-Montserrat text-black items-center justify-center text-center">
          <strong>Tech Devise</strong> possesses a professional team of experts! Our primary goal is to meet the
          requirements of our clients. We specialize in providing top-notch services as we continue to cater to the
          needs of our customers even after the delivery period.
        </p>
      </div>
      
      {/* Image Section */}
      <div className="w-[1673px] h-auto flex justify-between items-center gap-0">
        {/* Left Image */}
        <div className="w-1/2 relative">
          <img
            src={managementimage}
            alt="Business Meeting"
            className="rounded-lg w-[815px] h-[340px]"
          />
        </div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-[124px] h-[124px] ml-[-30px] bg-white rounded-full p-2 shadow-md border-4 border-[#157B6C] flex items-center justify-center">
            <span className="text-red-500 text-4xl">▶</span>
          </button>
        </div>
        
        {/* Right Image */}
        <div className="w-1/2">
          <img
            src={teamcollaboration}
            alt="Team Collaboration"
            className="rounded-lg w-[815px] h-[340px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentManagementSystem;
