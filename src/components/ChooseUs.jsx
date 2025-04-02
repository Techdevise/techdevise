import React from "react";
import ITDevelopmentTeam from "../assets/ITDevelopmentTeam.png";


const ChooseUs = () => {
  return (
    <div className="w-full h-full mt-10 flex flex-col items-center justify-center text-center bg-white">
      <h2 className="w-[974px] text-[48px] font-extrabold font-Montserrat text-black">Why Choose Us</h2>
      <p className="text-[18px] font-Montserrat text-black mt-2 w-3/5">
      Our team focuses mainly on scalability, secure, agile, and high performance python development. This not only helps us to meet client’s requirement but also helps in producing output for our clients.
      </p>
      
 
      {/* Image Section */}
      <div className="w-[1672px] h-[709px] mt-10">
        <img
          src={ITDevelopmentTeam}
          alt="IT Development Team"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    
  );
};

export default ChooseUs;