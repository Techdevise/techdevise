
import { useState } from "react"
import Mysqlicon from "../assets/Mysqlicon.svg"
import Pythonlogo from "../assets/Pythonlogo.svg"
import Postgresqllogo from "../assets/Postgresqllogo.svg"
import Sqlserverlogo from "../assets/Sqlserverlogo.svg"
import Swiftlogo from "../assets/Swiftlogo.svg"
import Csharp from "../assets/Csharp.svg"
import javascripttlogo from "../assets/javascripttlogo.svg"
import Kotlinlogo from "../assets/Kotlinlogo.svg"

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Programming Languages")

  const tabs = ["Programming Languages", "Frameworks", "Databases", "Devops", "Payment Gateways", "Clouds"]

  // Technology logos and names for each tab
  const technologies = {
    "Programming Languages": [
      { name: "MySQL", logo: Mysqlicon },
      { name: "Python", logo: Pythonlogo },
      { name: "PostgreSQL", logo: Postgresqllogo },
      { name: "SQL Server", logo: Sqlserverlogo },
      { name: "Swift", logo: Swiftlogo },
      { name: "C#", logo: Csharp },
      { name: "JavaScript", logo: javascripttlogo },
      { name: "Kotlin", logo: Kotlinlogo },
    ],
    Frameworks: [],
    Databases: [],
    Devops: [],
    "Payment Gateways": [],
    Clouds: [],
  }

  return (
    <div className="p-auto ml-30">
      <h1 className="text-[48px] font-Montserrat font-extrabold opacity-100 mb-6">Tech Stack We Use</h1>

      <div className="bg-white rounded-lg shadow-lg w-[1629px] h-[403px] relative text-center and justify-center">
        {/* Tab Navigation */}
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-8 py-4 text-[24px] font-Montserrat font-semibold ${
                activeTab === tab ? "border-b-2 border-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

      {/* Technology Cards */}
<div className="relative flex">
  <div className="w-[100%] p-8 grid grid-cols-8 gap-4">
    {technologies[activeTab].map((tech, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="w-[162px] h-[145px] border rounded-xl flex items-center justify-center mb-2">
          <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-[106px] h-[55px] object-contain" />
        </div>
        <span className="text-sm text-center">{tech.name}</span>
      </div>
    ))}
  </div>
  {/* <div className="absolute w-[5%] right-[-50px] mt-[-100px] top-1/2 transform -translate-y-1/2 rotate-89">
    <span className="text-[#A2A2A2] whitespace-nowrap font-Montserrat font-extrabold text-[25px] tracking-wide">Programming Languages</span>
  </div> */}
</div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Side Label */}
        {/* <div className="top-1/2 transform -translate-y-1/2 -rotate-89 origin-left">
          <span className="w-full text-gray-400 font-medium text-sm tracking-wide">Programming Languages</span>
        </div> */}
         <div className="absolute w-[5%] right-[-50px] mt-[-100px] top-1/2 transform -translate-y-1/2 rotate-89">
    <span className="text-[#A2A2A2] whitespace-nowrap font-Montserrat font-extrabold text-[25px] tracking-wide">Programming Languages</span>
  </div>
      </div>
    </div>
  )
}

export default TechStack

