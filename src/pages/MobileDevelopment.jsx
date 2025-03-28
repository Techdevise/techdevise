import React from "react";
import Mobilebackimg from '../assets/Mobilebackimg.png'
import Mobilebackmiddle from '../assets/Mobilebackmiddle.png'
import vedioimg from '../assets/vedioimg.png'
// import LocationSection from "./LocationSection";

const MobileDevelopment = () => {
    return (
        <div
            className="relative w-[1932px] h-[1048px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Mobilebackimg})` }}>

            <div className="absolute inset-0 bg-opacity-50"></div>
            {/* Play Button */}
            {/* <button className="bg-white bg-opacity-20 p-5 rounded-full mb-6 hover:bg-opacity-40">
          <svg
            className="w-10 h-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button> */}


            {/* Content */}
            <div className="relative text-center text-white px-6 max-w-4xl">
                <button className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 p-5 rounded-full hover:bg-opacity-40">
                <img src={vedioimg} alt="Vedio image" viewBox="0 0 24 24"
                        fill="currentColor" className="w-10 h-10 text-white" />
                    {/* <svg
                        className="w-10 h-10 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg> */}
                </button>
                <h1 className="text-5xl font-bold mb-4 mt-10">Custom Mobile App Development Services</h1>
                <p className="text-lg leading-relaxed mb-6 ml-10">
                    Turn your ideas into innovative mobile experiences with our AI-driven and blockchain-secured mobile app
                    development services. We build custom mobile apps for Android and iOS, integrated with the latest cutting-edge
                    technologies.
                </p>



                {/* Call-to-Action Button */}
                <button className="bg-[#157B6C] px-6 py-3 rounded-full text-white text-lg font-medium hover:bg-[#157B6C]">
                    Mobile App Development
                </button>
                {/* <LocationSection /> */}
            </div>
        </div>
    );
};

export default MobileDevelopment;
