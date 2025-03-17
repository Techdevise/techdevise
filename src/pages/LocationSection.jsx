import React from "react";
import indianflag from "../assets/indianflag.png";
import unitedflag from "../assets/unitedflag.png";
import netherland from "../assets/netherland.png";
import egypt from "../assets/egypt.png";

const locations = [
  {
    country: "India",
    address: "F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071",
    flag: <img src={indianflag} alt="Indian flag" className="w-6 h-6" />
  },
  {
    country: "United States",
    address: "F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071",
    flag: <img src={unitedflag} alt="United States flag" className="w-6 h-6" />
  },
  {
    country: "Netherlands",
    address: "F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071",
    flag: <img src={netherland} alt="Netherlands flag" className="w-6 h-6" />
  },
  {
    country: "Egypt",
    address: "F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071",
    flag: <img src={egypt} alt="Egypt flag" className="w-6 h-6" />
  },
];

const LocationSection = () => {
  return (
    <div className="max-w-[1680px] h-auto text-white py-20 px-4 md:px-32">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-[#B5D5D1] text-5xl font-extrabold font-Montserrat mb-6">
          Location
        </h2>
        <p className="text-xl font-medium text-[#FFFFFF] opacity-100 leading-relaxed">
          Our office is strategically located to serve clients efficiently, providing easy access to 
          innovative IT solutions<br /> and support. Visit us to experience our expertise firsthand.
        </p>
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className="p-8 bg-[#0F261E] rounded-xl border border-[#1E3D32]"
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">{location.flag}</span>
              <h3 className="text-2xl font-semibold">{location.country}</h3>
            </div>
            <p className="text-[#ffffff] opacity-100 text-[18px] font-Montserrat text-[#8CBEB7] leading-7">{location.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSection;