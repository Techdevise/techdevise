import React, { useState } from "react";
import Frame from "../assets/Frame.png";

const ContactForm = () => {
    const [budget, setBudget] = useState(20000);

    return (
        <div className="contact-wrapper max-w-[1680px] h-auto bg-[#061611] text-white rounded-[10px] mx-auto p-8 md:p-16 flex flex-col md:flex-row border border-[#529D92]">
            {/* Left Section */}
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#1E3D32] mb-8 md:mb-0">
                <h2  style={{
                        display: 'inline-table',
                        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        color: "#157B6C",
                    }} className="font-Montserrat font-extrabold text-[32px] md:text-[48px] text-[#D7E8E6] text-[#157B6C] mb-6">
                    Let’s <span className="text-[#4ADE80]">Talk</span>
                </h2>
                <p className="opacity-100 text-[20px] md:text-[36px] font-medium leading-[28px] md:leading-[48px] text-[#FFFFFF] mb-12">
                    Partner with tech catalysts who transform ideas into impact.
                    <br />
                    Book your free consultation with us.
                </p>
                <img
                    src={Frame}
                    alt="frame"
                    className="w-full max-w-[500px]"
                />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 pl-0 md:pl-16">
                <h3 className="opacity-100 text-[28px] md:text-[32px] font-Montserrat font-bold text-[#FFFFFF] mb-8">
                    Speak with our Experts
                </h3>

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]"/>
                    <input
                        type="Last Name"
                        placeholder="Last Name"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]"/>
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]"/>
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]"/>
                    <select className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]">
                        <option value="">Nature of work</option>
                    
                        <option value="Developer">Business</option>
                        <option value="Designer">Intermediate</option>
                        <option value="Manager">Individual</option>
                    </select>
                    <select className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]">
                        <option value="">Purpose</option>
                        <option value="1 Month">CoPilot</option>
                        <option value="3 Months">Build a Product/service</option>
                        <option value="6 Months">Technical Support Query</option>
                        <option value="6 Months">Sales Partnership Query</option>
                        <option value="6 Months">Schedule a Demo</option>
                        <option value="6 Months"></option>

                    </select>

                    <div className="col-span-2">
                        <label className="block text-[#ffffff] mb-2">Budget</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="1000"
                                max="100000"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className="w-full rounded-lg"
                                style={{ background: "#157B6C" }}
                            />
                            <span className="text-lg md:text-2xl font-medium">${budget.toLocaleString()}</span>
                        </div>
                    </div>
                    <textarea
                        placeholder="Message"
                        className="col-span-2 w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] h-[150px] border border-[#529D92]"
                    ></textarea>

                    <div className="col-span-2 flex justify-start">
                        <button
                            type="submit"
                            className="bg-[#FFFFFF] text-[#137365] font-bold py-4 px-12 rounded-lg hover:bg-[#3BC46F] transition-colors shadow-md hover:text-white hover:bg-green-700 transition-all duration-300 hover:scale-105"
                        >
                            Submit 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;