import React from "react";
import Androidlandingbanner from "../assets/Androidlandingbanner.svg"
import { Code, Palette, Database, Cpu, BarChart3, FileText } from "lucide-react"

const AndroidLanding = () => {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className="w-[1678px] h-[923px] bg-white shadow-lg p-8 flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center mb-10 mt-8 max-w-3xl">
          <h1 className="text-[40px] font-Montserrat font-extrabold leading-tight">
            Develop Top-Quality Applications
            <br />
            to dominate the Android Play Store
          </h1>
        </div>

        {/* Categories Section - First Row */}
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          <button className="flex items-center gap-2 px-6 py-3 bg-pink-100 text-black rounded-full border border-pink-200">
            <Code className="text-pink-500" size={20} />
            <span>Android Application Ideation</span>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-red-100 text-black rounded-full border border-red-200">
            <Palette className="text-red-500" size={20} />
            <span>UI/UX Design For Android Development</span>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-green-100 text-black rounded-full border border-green-200">
            <Database className="text-green-500" size={20} />
            <span>Tech Stack and Android Application Architecture</span>
          </button>
        </div>

        {/* Categories Section - Second Row */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button className="flex items-center gap-2 px-6 py-3 bg-yellow-100 text-black rounded-full border border-yellow-200">
            <Cpu className="text-yellow-500" size={20} />
            <span>Android App Development</span>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-purple-100 text-black rounded-full border border-purple-200">
            <BarChart3 className="text-purple-500" size={20} />
            <span>Analyzing Android Solutions</span>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-amber-100 text-black rounded-full border border-amber-200">
            <FileText className="text-amber-500" size={20} />
            <span>Maintenance</span>
          </button>
        </div>

        {/* Description Text */}
        <div className="text-center max-w-4xl mb-10 px-4">
          <p className="text-gray-700">
            Android Application Ideation is a critical factor that must be considered in order to reach your desired
            goal. Our team is prepared to research and brainstorm allowing us to formulate strategies before initiating
            the coding process. The ideation process will help you to achieve long term objectives.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full h-[634px] overflow-hidden rounded-lg shadow-md">
          <img
            src={Androidlandingbanner}
            alt="Team collaborating on Android development"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default AndroidLanding

