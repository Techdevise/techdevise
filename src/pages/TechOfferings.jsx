import React, { useState, useEffect } from "react";

const clocks = [
  { country: "India", timeZone: "Asia/Kolkata", color: "bg-blue-300" },
  { country: "Canada", timeZone: "America/Toronto", color: "bg-red-300" },
  { country: "USA", timeZone: "America/New_York", color: "bg-pink-200" },
  { country: "Netherland", timeZone: "Europe/Amsterdam", color: "bg-green-300" },
];

const Clock = ({ country, timeZone, color }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", { timeZone }));

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { timeZone }));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  // Get hours, minutes, and seconds to calculate rotation angles
  const date = new Date(new Date().toLocaleString("en-US", { timeZone }));
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Calculate rotation angles
  const hourAngle = (hours * 30) + (minutes * 0.5); // 30 degrees per hour + 0.5 degrees per minute
  const minuteAngle = minutes * 6; // 6 degrees per minute
  const secondAngle = seconds * 6; // 6 degrees per second

  return (
    <div className="flex flex-col items-center">
      {/* Clock Container */}
      <div className={`w-32 h-32 ${color} rounded-full flex items-center justify-center border-[3px] border-gray-300 shadow-md relative`}>
        {/* Clock Hands */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Hour Hand */}
          <div
            className="absolute w-[4px] h-[30%] bg-gray-600 top-[20%] left-1/2 transform -translate-x-1/2 origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${hourAngle}deg)` }}
          ></div>
          {/* Minute Hand */}
          <div
            className="absolute w-[3px] h-[40%] bg-gray-800 top-[10%] left-1/2 transform -translate-x-1/2 origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${minuteAngle}deg)` }}
          ></div>
          {/* Second Hand */}
          <div
            className="absolute w-[1.5px] h-[45%] bg-red-500 top-[5%] left-1/2 transform -translate-x-1/2 origin-bottom shadow-md"
            style={{ transform: `translateX(-50%) rotate(${secondAngle}deg)` }}
          ></div>
          {/* Center Dot */}
          <div className="absolute w-3 h-3 bg-red-500 rounded-full inset-0 m-auto z-10 shadow-md"></div>
          
          {/* Clock Markers */}
          {/* Top */}
          <div className="absolute w-[2px] h-4 bg-orange-400 top-[4px] left-1/2 transform -translate-x-1/2"></div>
          {/* Right */}
          <div className="absolute w-[2px] h-4 bg-orange-400 right-[4px] top-1/2 transform -translate-y-1/2"></div>
          {/* Bottom */}
          <div className="absolute w-[2px] h-4 bg-orange-400 bottom-[4px] left-1/2 transform -translate-x-1/2"></div>
          {/* Left */}
          <div className="absolute w-[2px] h-4 bg-orange-400 left-[4px] top-1/2 transform -translate-y-1/2"></div>
        </div>
      </div>

      {/* Country and Time */}
      <p className="mt-2 font-bold w-[120px] h-[34px] opacity-100 font-montserrat text-xl text-center leading-5">
        {country}
      </p>
      <p className="text-gray-400 w-[120px] h-[34px] opacity-100 font-montserrat text-xl text-center">
        {time}
      </p>
    </div>
  );
};

const TechOfferings = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto text-white p-8 rounded-lg rounded-3xl overflow-hidden">
      {/* Heading Section */}
      <div className="w-full max-w-[1167px] mb-8 ml-[90px]">
        <h2 className="text-[#B4F1E8] text-[48px] font-extrabold font-montserrat">
          Our Tech Offerings - Tailored to{" "}
          <span className="text-green-400">Your Time</span> Zone and Business
          Needs
        </h2>
      </div>

      <div className="flex flex-nowrap gap-8 ml-[90px] overflow-visible">
  {/* Staff Augmentation Card */}
  <div className="min-w-[1215px] bg-[#0F261E] flex gap-8 h-[436px] rounded-3xl transition-transform duration-300">
    <div className="w-[352px] bg-green-800 text-white p-6 rounded-full h-[352px] mt-10 ml-[50px] flex flex-col items-center justify-center border-2 border-dashed border-white transition-all duration-300 ease-in-out hover:bg-green-700 hover:shadow-lg hover:scale-105">
      <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 ease-in-out hover:text-yellow-300">Staff Augmentation</h3>
      <p className="text-center text-gray-300 transition-colors duration-300 ease-in-out hover:text-gray-100">
        Hire pre-vetted developers skilled in the latest technologies, ready
        to work around the clock to meet your project needs.
      </p>
    </div>

        {/* Clocks Section */}
      <div className="grid grid-cols-3 grid-rows-2 gap-x-12 gap-y-8 mt-2 h-full w-[800px]">
        {clocks.map((clock, index) => (
          <Clock
            key={index}
            country={clock.country}
            timeZone={clock.timeZone}
            color={clock.color}
          />
        ))}
      </div>
        </div>

        {/* Offshore Development Section */}
        <div className="min-w-[1215px] h-[436px] bg-[#0F261E] p-8 rounded-3xl shrink-0">
          {/* Heading */}
          <h3 className="text-3xl font-bold text-white mb-4">
            Build your offshore development team
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            At TechDevise, setting up dedicated software development team is
            quick and hassle-free, completed in just four simple steps.
          </p>

          {/* Steps Section */}
          <div className="flex justify-between gap-4 overflow-visible">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={index} className="relative flex items-center shrink-0">
                <div className={`w-64 h-40 ${index % 2 === 0 ? 'bg-green-500 text-white' : 'bg-white text-black'} p-6 rounded-lg shadow-md border`}>
                  <h4 className="text-2xl font-bold mb-2">
                    {index === 0 && 'Share your Requirements'}
                    {index === 1 && 'Select your team'}
                    {index === 2 && 'Team Setup'}
                    {index === 3 && 'Start Working'}
                  </h4>
                  <p className="text-lg">
                    {index === 0 && 'Define your project needs and skills required'}
                    {index === 1 && 'Choose from our pool of experienced developers'}
                    {index === 2 && 'Get your team up and running in a few days'}
                    {index === 3 && 'Start working with your dedicated team'}
                  </p>
                </div>
                {index < 3 && (
                  <div className={`absolute -right-8 top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'text-green-500' : 'text-gray-400'}`}>
                    ➔
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechOfferings;