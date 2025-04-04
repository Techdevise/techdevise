import React from "react";
import Mobilebackimg from '../assets/Mobilebackimg.png';
import Vedioimg from '../assets/Vedioimg.png';
import IOSAppDevelopment from "../components/IOSAppDevelopment";
import IOSAppSection from "../components/IOSAppSection"; 
import MobileAppServices from "../components/MobileAppServices";
import AndroidLanding from "../components/AndroidLanding";
import ReactNativeAppDevelopment from "../components/ReactNativeAppDevelopment";
import TechStack  from "../components/TechStack";

const MobileDevelopment = () => {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section
                className="relative w-full h-[1048px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${Mobilebackimg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative text-center text-white px-6 max-w-4xl z-10">
                    <button className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 p-5 rounded-full hover:bg-opacity-40">
                        <img src={Vedioimg} alt="Video" className="w-10 h-10" />
                    </button>
                    <h1 className="text-5xl font-bold mb-4 mt-10">
                        Custom Mobile App Development Services
                    </h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Turn your ideas into innovative mobile experiences with our AI-driven and blockchain-secured mobile app
                        development services. We build custom mobile apps for Android and iOS, integrated with the latest cutting-edge
                        technologies.
                    </p>
                    <button className="bg-[#157B6C] px-6 py-3 rounded-full text-white text-lg font-medium hover:bg-[#145e54] transition">
                        Mobile App Development
                    </button>
                </div>
            </section>

            {/* iOS App Development Section */}
            <section className="py-20 bg-white">
            
                    <IOSAppDevelopment />
              
            </section>

            {/* iOS App Section */}
            <section className="py-20 bg-[#DEEA99]">
              
                    <IOSAppSection />
                
            </section>

            {/* Mobile App Services Section */}
            <section className="py-20 bg-white">
              
                    <MobileAppServices />
               
            </section>
            <section className="py-20">
              
              <AndroidLanding />
                 
              </section>
              <section className="py-0">
              
              <ReactNativeAppDevelopment />
                 
              </section>
              <section className="py-20">
              
              <TechStack  />
                 
              </section>
        </main>
    );
};

export default MobileDevelopment;
