import React from "react";

const clocks = [
  { country: "India", time: "08:00:00", color: "bg-blue-300" },
  { country: "Canada", time: "08:00:00", color: "bg-red-300" },
  { country: "USA", time: "08:00:00", color: "bg-pink-200" },
  { country: "Netherland", time: "08:00:00", color: "bg-green-300" },
];

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
        <div className="min-w-[1215px] bg-[#0F261E] flex gap-8 h-[436px] rounded-3xl">
          <div className="w-[352px] bg-green-800 text-white p-6 rounded-full h-[352px] mt-10 ml-[50px] flex flex-col items-center justify-center border-2 border-dashed border-white">
            <h3 className="text-2xl font-bold mb-2">Staff Augmentation</h3>
            <p className="text-center text-gray-300">
              Hire pre-vetted developers skilled in the latest technologies, ready
              to work around the clock to meet your project needs.
            </p>
          </div>

          {/* Clocks Section */}
          <div className="flex gap-6 mt-7 flex-nowrap">
            {clocks.map((clock, index) => (
              <div key={index} className="flex flex-col items-center shrink-0">
                <div
                  className={`w-32 h-32 ${clock.color} rounded-full flex items-center justify-center border-2 border-gray-400 shadow-md`}
                >
                  <div className="relative w-16 h-16">
                    <div className="absolute w-[2px] h-8 bg-black top-0 left-1/2 transform -translate-x-1/2 origin-bottom rotate-45"></div>
                    <div className="absolute w-[2px] h-6 bg-red-500 top-0 left-1/2 transform -translate-x-1/2 origin-bottom rotate-90"></div>
                  </div>
                </div>
                <p className="mt-2 font-bold w-[89px] h-[34px] opacity-100 font-montserrat text-xl text-center leading-5">
                  {clock.country}
                </p>
                <p className="text-gray-400 w-[89px] h-[34px] opacity-100 font-montserrat text-xl text-center">
                  {clock.time}
                </p>
              </div>
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