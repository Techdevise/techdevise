import React, { useState } from "react";
import reactlog from "../assets/reactlog.png";
import vuelogo from "../assets/vuelogo.png";
import javascriptlogo from "../assets/javascriptlogo.png";
import htmllogo from "../assets/htmllogo.png";
import csslogo from "../assets/csslogo.png";
import nextjsicons from "../assets/nextjsicons.png";
import javaicons from "../assets/javaicons.png";
import nodejsicons from "../assets/nodejsicons.png";
import phpicons from "../assets/phpicons.png";
import pythonicons from "../assets/pythonicons.png";
import goicons from "../assets/goicons.png";
import dotneticons from "../assets/dotneticons.png";
import Maskgroup from "../assets/Maskgroup.png";
import androidicons from "../assets/androidicons.png";
import iosicons from "../assets/iosicons.png";
import fluttericons from "../assets/fluttericons.png";
import cordovaicons from "../assets/cordovaicons.png";
import xamarinicons from "../assets/xamarinicons.png";
import pwaicons from "../assets/pwaicons.png";
import ionicicons from "../assets/ionicicons.png";
import reactnativeicons from "../assets/reactnativeicons.png";
import figmaicons from "../assets/figmaicons.png";
import adobeicons from "../assets/adobeicons.png";
import sketchicons from "../assets/sketchicons.png";
import photoshopicons from "../assets/photoshopicons.png";
import aiillustratoricons from "../assets/aiillustratoricons.png";
import corelicons from "../assets/corelicons.png";

const TechSolutions = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const categories = {
    Frontend: [
      { name: "React JS", logo: reactlog },
      { name: "Vue JS", logo: vuelogo },
      { name: "JavaScript", logo: javascriptlogo },
      { name: "CSS", logo: csslogo },
      { name: "HTML", logo: htmllogo },
      { name: "Next JS", logo: nextjsicons },
    ],
    Backend: [
      { name: "Java", logo: javaicons },
      { name: "Node.js", logo: nodejsicons },
      { name: "Php", logo: phpicons },
      { name: "Python", logo: pythonicons },
      { name: "Go", logo: goicons },
      { name: ".Net", logo: dotneticons },
    ],
    Mobile: [
      { name: "Android", logo: androidicons },
      { name: "Flutter", logo: fluttericons },
      { name: "Cordova", logo: cordovaicons },
      { name: "Ios", logo: iosicons },
      { name: "Xamarin", logo: xamarinicons },
      { name: "PWA", logo: pwaicons },
      { name: "Ionic", logo: ionicicons },
      { name: "React Native", logo: reactnativeicons },

    ],
    "UI/UX Design": [
      { name: "Figma", logo: figmaicons },
      { name: "Adobe XD", logo: adobeicons },
      { name: "Photoshop", logo: photoshopicons },
      { name: "lllustrator", logo: aiillustratoricons },
      { name: "CorelDRAW", logo: corelicons },
      { name: "Sketch", logo: sketchicons },

    ],
  };

  return (
    <div
      className="border-2 p-6 rounded-[26px] border border-[#2d4642] w-[1680px] h-[565px] z-20 relative ml-[110px] mt-[150px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${Maskgroup})` }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        {/* Left Column */}
        <div className="md:w-1/3">
          <h1
            style={{
              display: "inline-table",
              background: "linear-gradient(to right, #e0e0e0, #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              color: "#157B6C",
            }}
            className="text-[48px] font-extrabold font-montserrat text-[#8DBFB7] opacity-100 w-[613px] transform -translate-y-8 ml-5"
          >
            Innovative Technology<br/>Solutions
          </h1>
          <ul className="mt-6 space-y-8 w-97 h-27 font-Montserrat font-bold text-20 ml-10">
            {Object.keys(categories).map((category) => (
              <li
                key={category}
                className={`cursor-pointer ${selectedCategory === category
                    ? "text-[#157B6C] font-bold"
                    : "text-[#FFFFFF]"
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                <i
                  className={`fas fa-arrow-right ml-2 transition-transform duration-300 ${
                    selectedCategory === category
                      ? "translate-x-2 opacity-100" 
                      : "opacity-0"
                  }`}
                ></i>
                  <div
                  className={`h-[2px] bg-[#157B6C] transition-all duration-300 mt-1 ${
                    selectedCategory === category ? "w-28" : "w-0"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
          
        </div>

        {/* Vertical Border */}
        {/* <div className="hidden md:block border-l border-[#2d4642] h-[50%] ml-[-50px] mt-[200px]"></div> */}


        {/* Right Column */}
        <div className="w-full mt-6 md:mt-0 h-full overflow-auto">
          <p className="paragraph w-full text-lg mb-6 w-[656px] opacity-100 font-montserrat font-medium text-[#FFFFFF] mt-[50px] text-right">
            Empowering businesses with cutting-edge IT solutions, including
            cloud <br /> computing, cybersecurity, AI, automation, and software
            development <br /> to drive efficiency, security, and growth cybersecurity, AI, automation.<br />
          </p>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 mt-20">
            {categories[selectedCategory]?.map((tech, index) => (
              <div
                key={index}
                className="bg-[#051E16] w-[260px] h-[90px] opacity-100 rounded-[10px] border border-[#1E3D32] flex items-center justify-center"
              >
                <img alt={`${tech.name} logo`} className="mr-2" height="50" src={tech.logo} width="50" />
                <span className="text-[#FFFFFF]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutions;
