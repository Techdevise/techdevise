import React from "react";
import office from '../assets/office.png';

function TechAboutSection() {
    return (
        <div className="flex w-[1676px] h-[597px] bg-[#061611] p-12 border border-white rounded-lg">
            {/* Left side with text */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="inline-block mb-4">
                    <span className="text-emerald-300 w-[100px] h-[44px] border border-emerald-300 rounded-full px-6 py-2 text-sm font-medium">
                        About
                    </span>
                </div>
                <h1
                    style={{
                        display: 'inline-table',
                        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        color: "#157B6C",
                    }}
                    className="text-6xl font-extrabold leading-tight max-w-xl font-montserrat"
                >
                    <span className="whitespace-nowrap">Innovating the Future of</span> <br />
                    <span>Technology</span>
                </h1>

                <p className="text-white font-montserrat text-20 mt-5">At Tech Devise, we are passionate about delivering innovative technology solutions that drive business success. With a team of highly skilled developers, designers, and IT experts, we specialize in innovative technology solutions that drive business success. With a team of highly skilled developers, designers, and IT experts, we specialize highly skilled developers<br /> <br /> At Tech Devise, we are passionate about delivering innovative technology solutions that drive business success. With a team of highly skilled developers, designers, and IT experts, we specialize in innovative technology solutions that drive business success. With a team of highly skilled developers, designers, and IT experts, we specialize highly skilled developers </p>


            </div>

            {/* Right side with image */}
            <div className="flex-1 flex justify-end">
                <div className="relative w-[577px] h-[454px] bg-[#11211C] rounded-3xl p-8">
                    <div className="w-full h-full overflow-hidden rounded-2xl">
                        <img
                            src={office}
                            alt="Tech office space with world map and seating area"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechAboutSection;
