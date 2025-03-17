import React, { useState } from "react";
import Frame from "../assets/Frame.png";

const ContactForm = () => {
    const [budget, setBudget] = useState(20000);

    return (
        <div className="w-[1680px] h-[800px] bg-[#061611] text-white rounded-[10px] mx-auto p-16 flex border border-[#529D92]">
            {/* Left Section */}
            <div className="w-1/2 pr-16 flex flex-col justify-center border-r border-[#1E3D32]">
                <h2 className="w-[242px] h-[59px] font-Montserrat font-extrabold text-[48px] text-[#D7E8E6] text-[#157B6C] mb-6">
                    Let’s <span className="text-[#4ADE80]">Talk</span>
                </h2>
                <p className="w-[580px] opacity-100 text-[36px] font-medium leading-[48px] text-[#FFFFFF] mb-12">
                    Partner with tech catalysts who transform ideas into impact.
                    <br />
                    <p className="opacity-100 text-[20px] font-medium leading-[48px] text-[#FFFFFF]">Book your free consultation with us.</p>
                </p>
                <img
                    src={Frame}
                    alt="frame"
                    className="w-full max-w-[500px]"
                />
            </div>

            {/* Right Section */}
            <div className="w-1/2 pl-16">
                <h3 className="w-[391px] h-[30px] opacity-100 text-[32px] font-Montserrat font-bold text-[#FFFFFF] mb-8">
                    Speak with our Experts
                </h3>

                {/* Form */}
                <form className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[18px] border border-[#529D92]"/>
                    <input
                        type="email"
                        placeholder="Business Email"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none text-white outline-none font-Montserrat text-[18px] border border-[#529D92]"/>
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[18px] border border-[#529D92]"/>
                    <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[18px] border border-[#529D92]"/>
                    <select className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[18px] border border-[#529D92]">
                        <option value="">Job Title</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                    </select>
                    <select className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[18px] border border-[#529D92]">
                        <option value="">Launch timeline?</option>
                        <option value="1 Month">1 Month</option>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
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
                                className="w-full bg-[#0F261E] rounded-lg"
                            />
                            <span className="text-2xl font-medium">${budget.toLocaleString()}</span>
                        </div>
                    </div>
                    <textarea
                        placeholder="About Project"
                        className="col-span-2 w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[18px] h-[150px] border border-[#529D92]"
                    ></textarea>

                    <div className="col-span-2 flex justify-start">
                        <button
                            type="submit"
                            className="bg-[#4ADE80] text-[#061611] font-bold py-4 px-12 rounded-lg hover:bg-[#3BC46F] transition-colors text-lg"
                        >
                            Submit →
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
