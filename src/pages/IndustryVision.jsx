import React from "react";
import healthcare from "../assets/healthcare.png"
import fitness from "../assets/fitness.png"
import real from "../assets/real.png"
import media from "../assets/media.png"
import education from "../assets/education.png"
import entertainment from "../assets/entertainment.png"
import eweb from "../assets/eweb.png"
import ewebsite from "../assets/ewebsite.png"
import arvr from "../assets/arvr.png"
const IndustryVision = () => {
  const industries = [
    { name: "Healthcare", img: healthcare },
    { name: "Fitness", img: fitness },
    { name: "Real Estate", img: real },
    { name: "Social Media", img: media },
    { name: "Education", img: education },
    { name: "Entertainment", img: entertainment },
    { name: "E-commerce", img: eweb },
    { name: "Website", img: ewebsite },
    { name: "AR/VR", img: arvr },

  ];

  return (
    <div className="bg-[#061611] text-white mx-auto py-12 px-8 w-[1680px]">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          A Seamless Vision that Adapts to<br />
          Every Industry's Demands
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          We deliver flexible and innovative IT solutions tailored to meet the evolving needs of various industries,
          ensuring efficiency, scalability, and long-term success.
        </p>
      </div>

      <div className="h-px bg-gray-700 w-full my-8" />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left Text */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h2 className="text-4xl font-semibold mb-4">
            Fuel Success in a Digital-First World with<br />
            <span className="text-[#8CBEB7]">300+ Visionaries.</span>
          </h2>
          <button className="bg-[#8CBEB7] text-[#061611] px-8 py-4 rounded-full 
            text-xl hover:bg-[#7dad9f] transition-colors flex items-center gap-3">
            Let's Innovate Together
            <i className="fas fa-arrow-right text-xl"></i>
          </button>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full lg:w-[50%]">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={industry.img}
                alt={industry.name}
                className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">{industry.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryVision;
