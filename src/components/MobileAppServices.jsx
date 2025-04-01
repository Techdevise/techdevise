import React from "react";

const MobileAppServices = () => {
  return (
    <div className="absolute w-[1680px] h-[600px] bg-white flex flex-col md:flex-row items-center justify-between px-10 md:px-20">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-4xl font-bold text-black leading-tight mb-4">
          Comprehensive Mobile App <br /> Development Services <br /> We Provide
        </h2>
        <p className="text-gray-600 text-lg">
          Our extensive mobile app development services cover everything from concept to deployment, ensuring a seamless and innovative user experience.
        </p>
      </div>

      {/* Right Side Cards */}
      <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-6">
        {/* iOS App Development */}
        <div className="w-64 h-28 bg-pink-300 rounded-lg flex items-center p-4 shadow-md">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
            <img src="/apple-icon.png" alt="iOS" className="w-6 h-6" />
          </div>
          <p className="text-black font-semibold">iOS App <br /> Development</p>
        </div>

        {/* Android App Development */}
        <div className="w-64 h-28 bg-teal-300 rounded-lg flex items-center p-4 shadow-md">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
            <img src="/android-icon.png" alt="Android" className="w-6 h-6" />
          </div>
          <p className="text-black font-semibold">Android App <br /> Development</p>
        </div>

        {/* React Native Development */}
        <div className="w-64 h-28 bg-blue-300 rounded-lg flex items-center p-4 shadow-md">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
            <img src="/react-icon.png" alt="React" className="w-6 h-6" />
          </div>
          <p className="text-black font-semibold">React Native <br /> Development</p>
        </div>
      </div>
    </div>
  );
};

export default MobileAppServices;
