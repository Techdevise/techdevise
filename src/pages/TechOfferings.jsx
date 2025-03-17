import React from "react";

const clocks = [
  { country: "India", time: "08:00:00", color: "bg-blue-300" },
  { country: "Canada", time: "08:00:00", color: "bg-red-300" },
  { country: "USA", time: "08:00:00", color: "bg-pink-200" },
  { country: "Netherland", time: "08:00:00", color: "bg-green-300" },
];

const TechOfferings = () => {
  return (
    <div className="w-[2460px] h-[582px] text-white p-8 rounded-lg mt-[-30px] rounded-3xl">
      {/* Heading Section */}
      <div className="w-[1167px] h-[118px] opacity-100 mb-8 ml-[90px]">
        <h2 className="text[#B4F1E8] text-[48px] font-extrabold font-montserrat">
          Our Tech Offerings - Tailored to{" "}
          <span className="text-green-400">Your Time</span> Zone and Business
          Needs
        </h2>
      </div>

      <div className="flex gap-8 ml-[90px]">
        {/* Staff Augmentation Card */}
        <div className="w-1/2 bg-[#0F261E] flex gap-8 w-[1215px] h-[436px] rounded-3xl">
        <div className="w-1/4 bg-green-800 text-white p-6 rounded-full w-[352px] h-[352px] mt-10 ml-[50px] flex flex-col items-center justify-center border-2 border-dashed border-white">
          <h3 className="text-2xl font-bold mb-2">Staff Augmentation</h3>
          <p className="text-center text-gray-300">
            Hire pre-vetted developers skilled in the latest technologies, ready
            to work around the clock to meet your project needs.
          </p>
        </div>

        {/* Clocks Section */}
        <div className="flex gap-6 mt-7">
          {clocks.map((clock, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-32 h-32 ${clock.color} rounded-full flex items-center justify-center border-2 border-gray-400 shadow-md`}
              >
                {/* Clock Hands */}
                <div className="relative w-16 h-16">
                  <div className="absolute w-[2px] h-8 bg-black top-0 left-1/2 transform -translate-x-1/2 origin-bottom rotate-45"></div>
                  <div className="absolute w-[2px] h-6 bg-red-500 top-0 left-1/2 transform -translate-x-1/2 origin-bottom rotate-90"></div>
                </div>
              </div>
              <p className="mt-2 font-bold w-[89px] h-[34px] opacity-100 fonts-montserrat text-xl text-center leading-5">{clock.country}</p>
              <p className="text-gray-400 w-[89px] h-[34px] opacity-100 fonts-montserrat text-xl text-center">{clock.time}</p>
            </div>
            
          ))}
        </div>
            
</div>
        {/* Offshore Development Section */}
        <div className="w-[1215px] h-[436px] bg-[#0F261E] p-8 rounded-3xl">
          {/* Heading */}
          <h3 className="text-3xl font-bold text-white mb-4">
            Build your offshore development team
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            At TechDevise, setting up dedicated software development team is
            quick and hassle-free, completed in just four simple steps.
          </p>

          {/* Steps Section */}
          <div className="flex items-center justify-between gap-4">
            {/* Step 1 */}
            <div className="relative flex items-center">
              <div className="w-64 h-40 bg-green-500 p-6 rounded-lg shadow-md text-white">
                <h4 className="text-2xl font-bold mb-2">Share your Requirements</h4>
                <p className="text-lg">Define your project needs and skills required</p>
              </div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-green-500">
                ➔
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center">
              <div className="w-64 h-40 bg-white p-6 rounded-lg shadow-md text-black border">
                <h4 className="text-2xl font-bold mb-2">Select your team</h4>
                <p className="text-lg">Choose from our pool of experienced developers</p>
              </div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-gray-400">
                ➔
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center">
              <div className="w-64 h-40 bg-green-500 p-6 rounded-lg shadow-md text-white">
                <h4 className="text-2xl font-bold mb-2">Team Setup</h4>
                <p className="text-lg">Get your team up and running in a few days</p>
              </div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-green-500">
                ➔
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center">
              <div className="w-64 h-40 bg-white p-6 rounded-lg shadow-md text-black border">
                <h4 className="text-2xl font-bold mb-2">Start Working</h4>
                <p className="text-lg">Start working with your dedicated team</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};
export default TechOfferings;
