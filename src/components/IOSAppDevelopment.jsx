import React from "react";
import Iospageimg from '../assets/Iospageimg.png'

import { ArrowRight } from "lucide-react"

export default function IOSAppDevelopment() {
  const steps = [
    {
      title: "iOS App Development Ideation",
      active: true,
    },
    {
      title: "iOS Application Design and Strategy",
      active: false,
    },
    {
      title: "iOS App Development and Quality Assurance",
      active: false,
    },
    {
      title: "Launch Strategy and Support",
      active: false,
    },
  ]

  return (
    <div className="absolute w-[1680px] h-[500px] bg-white  mx-auto bg-[#ffffff]  rounded-[20px] flex items-center overflow-hidden shadow-lg mt-[400px] ml-[-420px]">
      <div className="w-full h-full px-12 py-8 relative">
        {/* Vertical "Solutions to Explore" text */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 transform">
          <div className="flex flex-col items-center">
            <div className="text-[#529D92] font-medium -rotate-90 whitespace-nowrap text-xl tracking-wide origin-center translate-y-20">
              Solutions to Explore
            </div>
          </div>
        </div>

        {/* Main content container */}
        <div className="ml-24 h-full flex flex-col justify-center">
          {/* Process steps */}
          <div className="flex flex-wrap gap-3 mb-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center px-4 py-2 rounded-md border ${
                  step.active
                    ? "bg-emerald-400 border-emerald-500 text-white"
                    : "bg-white border-gray-300 text-gray-800"
                }`}
              >
                <span className="mr-2">{step.title}</span>
                <ArrowRight size={16} />
              </div>
            ))}
          </div>

          {/* Content section */}
          <div className="flex flex-row gap-8 items-start">
            <div className="flex-1 max-w-[800px]">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">iOS App Development Ideation</h1>
              <p className="text-gray-700 leading-relaxed">
                It is essential to know and analyse the driving force of the app concerned before making the final
                decision of coding. An overview and analysis of the end-user, the expectations of the target audience,
                and the value proposition of the application. This helps us to identify relevant solutions to the
                problems.
              </p>
            </div>
            <div className="w-[338px] relative">
              <div className="border-2 border-blue-400 relative">
                <img
                  src={Iospageimg}
                  width={338}
                  height={286}
                  alt="iOS App Development Team"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 bg-blue-400 text-white text-xs px-2 py-1">338 × 286.49</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

