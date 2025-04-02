import React from 'react';
import Navbar from '../layout/Navbar';
import SEOSection from '../components/SEOSection';
import SEOFeatures from '../components/seoFeatures';
import SocialMediaServices from '../components/SocialMediaServices';
import GoogleAdwordsSection from '../components/GoogleAdwordsSection';
import GoogleAdwordsServices from '../components/GoogleAdwordsServices';
import Experts from '../components/Experts';
import GoogleAdwordsLayout from '../components/GoogleAdwordsLayout';
import Digitalbanner from '../assets/Digitalbanner.png';
import Vedioimg from '../assets/Vedioimg.png';
import growthcompanyimg from '../assets/growthcompanyimg.png';  
import google from '../assets/google.png';  
import mic from '../assets/mic.png';
import growth from '../assets/growth.png';  
import team from '../assets/team.png';  
import profileviews from '../assets/profileviews.png';  

function DigitalMarketing() {
    return (
        <div className="bg-white">
            {/* Navbar */}
            <Navbar style={{ backgroundColor: 'white', color: 'black' }} />

            {/* Hero Section */}
            <div
                className="relative w-full h-screen bg-[#061611] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${Digitalbanner})` }}
            >
                {/* Left Text Section */}
                <div className="absolute left-30 top-1/4">
                    <h1 className="text-[62px] font-Montserrat font-extrabold text-white leading-tight">
                        Renowned <br /> SEO Experts
                    </h1>
                    <p className="text-lg text-gray-300 mt-4 w-[819px]">
                        At <span className="text-white-400 font-semibold">Tech Devise</span> we have one of the most promising and talented SEO experts
                        who strive to deliver results. Our result-oriented SEO strategies will ensure that
                        your website ranking is boosted in no time.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex items-center">
                        <button className="bg-[#67C792] text-white px-6 py-3 rounded-lg font-bold">
                            Explore more →
                        </button>
                        <button className="ml-4 flex items-center px-6 py-3 font-Montserrat font-bold">
                            <span className="mr-2">  <img src={Vedioimg} alt="Video image" className="w-[68px] h-[68px] text-white" /></span> Play Video
                        </button>
                    </div>
                </div>

                {/* Right Image & Graphics */}
                <div className="absolute right-20 top-1/4">
                    {/* Woman Image */}
                    <img src={growthcompanyimg} alt="SEO Expert" className="w-[600px] h-[710px] drop-shadow-lg" />

                    {/* Floating Icons */}
                    <img src={google} alt="Google" className="absolute top-10 left-25 w-[95px] h-[95px]" />
                    <img src={mic} alt="Mic" className="absolute top-10 right-30 w-[110px] h-[100px]" />
                    <img src={growth} alt="Growth" className="absolute top-40 right-5 w-[110px] h-[100px]" />
                    <img src={team} alt="Our Team" className="relative bottom-142 left-0 w-[220px] h-[150px]" />
                    <img src={profileviews} alt="Profile views" className="relative bottom-110 right-5 w-[99px] h-[96px]" />

                    {/* Business Growth Tag */}
                    <div className="absolute top-0 left-[60%] transform -translate-x-1/2  border border-white px-6 py-3 text-white px-6 py-2 rounded-full font-semibold -mt-8 ml-4">
                        BUSINESS GROWTH
                    </div>


                </div>
            </div>
            <SEOSection />
            <SEOFeatures />
            <SocialMediaServices />
            <GoogleAdwordsSection />
            <GoogleAdwordsServices />
            <Experts />
            <GoogleAdwordsLayout />
        </div>
    );
}

export default DigitalMarketing;
