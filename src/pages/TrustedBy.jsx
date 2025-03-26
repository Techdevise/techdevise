import React, { useState } from "react";
import graphoIcon from "../assets/Compnay logo.png";
import emblemIcon from "../assets/emblemIcon.png";
import iconicIcon from "../assets/iconicIcon.png";
import optimalIcon from "../assets/optimalIcon.png";
import vectraIcon from "../assets/vectraIcon.png";

const brands = [
  { name: "", icon: graphoIcon },
  { name: "", icon: emblemIcon },
  { name: "", icon: iconicIcon },
  { name: "", icon: optimalIcon },
  { name: "", icon: vectraIcon },
];

const TrustedBy = () => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="w-full h-[166px] bg-[#061611] text-white flex flex-col items-center justify-center overflow-hidden relative">
      <div className="text-center z-10 mb-4">
        {/* <p className="text-2xl font-bold font-Montserrat mt-[-80px]">Trusted By</p>
        <p className="text-lg font-bold">Our global clients Network</p> */}
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden">
      <div
          className={`flex items-center ${
            isPaused ? "animation-paused" : "animate-scroll"
          }`}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-16 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img src={brand.icon} alt={brand.name} className="h-10 mb-7" />
              <p className="text-lg text-gray-400 mb-5 font-bold">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;