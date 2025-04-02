import React from "react";
import codeimage from "../assets/codeimage.png";

const PythonExpertSection = () => {
  return (
    <div className="w-[1921px] h-[891px] bg-[#EEFCFE] opacity-100 rounded-none flex mt-10">
      {/* Left Side Image Section */}
      <div className="w-1/2 relative">
        <img
          src={codeimage}
          alt="Tech workspace"
          className="w-[825px] h-[891px] object-cover"
        />
      </div>
      
      {/* Right Side Content Section */}
      <div className="w-1/2 p-16 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-black mb-6">
          Tech Devise: Developing User <br /> friendly and Flexible Python
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          In today’s world, to be a successful business owner you need to keep up with the pace.
          As a business owner, it’s important to deliver quick results to your clients, and this is
          exactly where Python comes in. Python, as you know, is one of the well-known dynamic
          languages that follow Object-Oriented Programming laws. It helps you work in an efficient,
          fast, and better way to ensure quality results all the time. We at <b>Tech Devise</b> ensure that we put
          this good technology to use for our client’s betterment.
        </p>
        <h2 className="text-xl font-semibold mb-4">Our python experts can help you work with:</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Responsive / Dynamic website</li>
          <li>Web crawlers</li>
          <li>Customized CMS</li>
          <li>Web application</li>
          <li>Framework Integration</li>
          <li>UI development</li>
          <li>Monitor capacity and performance of existing web applications</li>
        </ul>
        
        {/* Navigation Arrows */}
        <div className="flex space-x-4 mt-6">
          <button className="p-3 bg-black text-white rounded-full">&#8592;</button>
          <button className="p-3 bg-black text-white rounded-full">&#8594;</button>
        </div>
      </div>
    </div>
  );
};

export default PythonExpertSection;
