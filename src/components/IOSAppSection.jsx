import React from "react";
import Iosabout from "../assets/Iosabout.png";

const IOSAppSection = () => {
  return (
    <div className="w-full inset-x-0 h-[550px] bg-[#DEEA99] flex items-center overflow-hidden px-16">
      {/* Left Side: Image */}
      <div className="w-1/3 ml-15">
        <img
          src={Iosabout}
          alt="Laptop and Python Book"
          className="w-[526px] h-[400px] rounded-lg shadow-md gap-0"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-1/2 md:w-1/2 lg:w-1/2 px-6">
  <h2 className="text-[#000000] font-Montserrat font-bold text-[48px] leading-tight text-left mt-[50px]">
    Building Interactive and out <br /> of the box iOS app
  </h2>
  <p className="text-gray-700 text-left font-Montserrat text-[18px] mt-[20px]">
    <strong>Tech Devise</strong> believes in achieving complete customer satisfaction. This
    is the primary force that drives our company. Our expert team of professionals
    incorporates only the best programming practices that are duly backed by updated
    technology. This factor helps us to develop and create user-friendly and robust iOS
    applications. Our team also provides assistance by offering additional testing and
    support services during the pre and post-application development stages. The final app
    delivered is highly optimized and is bug-free, allowing users to relish a smooth
    interactive app on iOS devices. Get in touch with our team to get immediate results.
  </p>
  <button className="mt-6 px-6 py-3 bg-white text-[#000000] border border-gray-300 rounded-lg shadow-md flex items-center gap-2 hover:bg-gray-100">
    More Information →
  </button>
   {/* Arrow Buttons */}
   <div className="relative flex gap-4 justify-end bottom-10">
      <button className="w-12 h-12 p-3 bg-black text-white rounded-full hover:bg-gray-800">
        ←
      </button>
      <button className="w-12 h-12 p-3 bg-black text-white rounded-full hover:bg-gray-800">
        →
      </button>
    </div>
</div>

    </div>
  );
};

export default IOSAppSection;
