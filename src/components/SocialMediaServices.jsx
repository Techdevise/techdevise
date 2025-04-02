import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import socialmediamanagement from "../assets/socialmediamanagement.png";
import contentcreation from "../assets/contentcreation.png";
import keywordresearch from "../assets/keywordresearch.png";

const SocialMediaServices = () => {
    return (
        <div className="w-[1920px] h-[900px] bg-green-100 flex flex-col items-left p-20 relative">
            <h1 className="text-[48px] font-extrabold font-Montserrat text-black">Our Social Media Marketing Services</h1>
            <p className="text-center text-black mt-8 w-3/5">
                At Tech Devise our team of Social Media experts strives to provide our clients with the best social media marketing
                solutions that will surely improve your business’s online visibility. With the help of your experts, you can increase your
                online customer base as well.
            </p>

            <div className="flex gap-10 mt-10">
                {/** Service Cards */}
                <div className="bg-white shadow-lg rounded-xl p-6 w-[452px] h-[477px] text-left">
                    <div className="bg-[#94E4AB] w-[90px] h-[90px] flex items-center justify-center rounded-full">
                        <span className="text-black text-xl"><img src={socialmediamanagement} alt="socialmediamanagement" className="w-[40px] h-[40px] text-white" /></span>
                    </div>
                    <h2 className="font-Montserrat font-semibold text-[28px] mt-4">Social Media <br /> Management</h2>
                    <p className="text-black mt-8 font-Montserrat text-[16px]">
                        The present online market is heavily influenced and reliant on Social Media Platforms. With the assistance of
                        <b> Tech Devise</b>, you can now connect with your audiences more effectively through Social Media Platforms.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 w-[452px] h-[477px] text-left">
                    <div className="bg-[#94E4AB] w-[90px] h-[90px] flex items-center justify-center rounded-full">
                        <span className="text-black text-xl"><img src={contentcreation} alt="contentcreation" className="w-[40px] h-[40px] text-white" /></span>
                    </div>
                    <h2 className="font-bold text-xl mt-4">Content <br /> Creation</h2>
                    <p className="text-black mt-12 font-Montserrat text-[16px]">
                        The <b>Tech Devise</b> team will help you to compose engaging content that attracts the attention of your target audience.
                        Increase your Social Media reach with lucrative and creative content.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 w-[452px] h-[477px] text-left">
                    <div className="bg-[#94E4AB] w-[90px] h-[90px] flex items-center justify-center rounded-full">
                        <span className="text-black text-xl"><img src={keywordresearch} alt="keywordresearch" className="w-[44px] h-[57px] text-white" /></span>
                    </div>
                    <h2 className="font-bold text-xl mt-4">Keyword <br /> Research</h2>
                    <p className="text-black mt-8 font-Montserrat text-[16px]">
                        Our expert team makes sure to identify and highlight the most relevant keyword in every Social Media Post such that the
                        reach of every post is maximized in the long run.
                    </p>
                </div>
            </div>

            {/** Social Media Icons */}
            <div className="absolute right-50 top-1/4 flex flex-col gap-6">
                <div className="border border-dashed border-black rounded-full p-4"><FaFacebookF size={40} /></div>
                <div className="border border-dashed border-black rounded-full p-4"><FaXTwitter size={40} /></div>
                <div className="border border-dashed border-black rounded-full p-4"><FaInstagram size={40} /></div>
                <div className="border border-dashed border-black rounded-full p-4"><FaYoutube size={40} /></div>
            </div>

            {/** Navigation Arrows */}
            <div className="absolute left-20 bottom-10 flex gap-4">
                <button className="bg-black text-white p-3 rounded-full"><FaArrowLeft size={20} /></button>
                <button className="bg-black text-white p-3 rounded-full"><FaArrowRight size={20} /></button>
            </div>
        </div>
    );
};

export default SocialMediaServices;
