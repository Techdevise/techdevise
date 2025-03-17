import React from "react";
import graphoIcon from "../assets/Compnay logo.png";
import emblemIcon from "../assets/emblemIcon.png";
import iconicIcon from "../assets/iconicIcon.png";
import optimalIcon from "../assets/optimalIcon.png";
import vectraIcon from "../assets/vectraIcon.png";

const brands = [
  { name: "Grapho", icon: graphoIcon },
  { name: "Emblem", icon: emblemIcon },
  { name: "Iconic", icon: iconicIcon },
  { name: "Optimal", icon: optimalIcon },
  { name: "Vectra", icon: vectraIcon },
];

const TrustedBy = () => {
  return (
    <div className="w-full h-[166px] bg-[#061611] text-white flex items-center justify-center">
      <div className="w-[272px] h-[54px] flex items-center pr-12">
        <div>
          <p className="w-[272px] h-[24px] font-bold text-20px font-Montserrat ml-[-10px]">Trusted By</p>
          <p className="text-lg font-bold text-white ml-[-10px]">
            Our global clients Network
          </p>
        </div>
      </div>

      {/* Brand Section */}
      <div className="flex items-center w-[1492] h-[161] gap-40">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center opacity-60 hover:opacity-100 transition duration-300">
            <img
              src={brand.icon}
              alt={brand.name}
              className="h-10 mb-2"
            />
            <p className="text-sm text-gray-400">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;

