import React from 'react';
import TechAboutSection from '../components/TechAboutSection';
import TrustedBy from './TrustedBy';
import ServicesSection from './ServicesSection';
import TechOfferings from './TechOfferings';
import TechSolutions from "./TechSolutions";
import SocialLinks from './SocialMediaBanner';
import IndustryVision from './IndustryVision';
import Testimonials from './Testimonials';
import home from "../assets/home.png";
import googleicons from "../assets/googleicons.png"
import analytics from "../assets/analytics.png"
import future from "../assets/future.png"
import lamp from "../assets/lamp.png"
import light from "../assets/light.png"
import Group from '../assets/Group 1.png';
import Line from '../assets/Line.png'
// import Rectangle from '../assets/Rectangle 14.png';
import ContactForm from './ContactForm';
import LocationSection from './LocationSection';
import ExperienceSection from './ExperienceSection';

const ServiceCard = ({ title, description, imgSrc, bgColor, cornerRadius }) => (
  <div className={`relative h-80 overflow-hidden ${cornerRadius} group transition-all duration-300 hover:scale-105`}>
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-full object-cover absolute inset-0"
    />
    <div className={`absolute inset-0 ${bgColor} bg-opacity-80 flex flex-col justify-end p-6`}>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <button className="self-start bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
        More Information
      </button>
    </div>
  </div>
);

function Homepage() {
  return (
    <main className="relative bg-[#061611] w-[1920px] h-[8050px]">
      <div className="relative w-[1920px] h-[848px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${Group})` }}>

        {/* Main Content Section */}
        <div className="relative z-10 left-[114px] top-[300px] w-[911px] pb-[100px]">
          {/* Badges Section */}
          <div className="flex gap-4 p-4">
            <div className="rounded-lg shadow-md p-5 flex items-center gap-2 w-[229px] h-[56px] rounded-[15px] border border-[#fffff] p-2">
              <img
                src={googleicons}
                alt="Google Partner"
                className="w-6 h-6"
              />
              <span className="text-[20] font-semibold">
                <span className="text-white">Google</span>{' '}
                <span className="text-white">Partner</span>
              </span>
            </div>

            <div className="rounded-lg shadow-md p-5 flex items-center gap-2 w-[229px] h-[56px] rounded-[15px] border border-[#fffff] p-2">
              <img
                src={analytics}
                alt="Google Analytics"
                className="w-6 h-6"
              />
              <span className="text-[20] font-semibold">
                <span className="text-white">Google</span>{' '}
                <span className="text-white">Analytics</span>
              </span>
            </div>
          </div>

          {/* Headings Section */}
          <h1 className="text-[45px] leading-tight text-white mt-4 max-w-[911px]">
            Expert Development Services for you
          </h1>

          <div className="mt-8 mb-12">
            <h2 className="text-[96px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#157B6C] font-Montserrat">
              <span className="text-[#D4E7E4]">Digital</span>{' '}
              <span className="text-[#8CBEB7]">marketing</span>
            </h2>
          </div>

          {/* Graphic Element */}
          <div className="absolute left-[1100px] top-[190px] w-[541.86px] h-[358.86px] z-0">
            <img src={home} alt="Design Element"
              className="w-full h-full object-contain opacity-100" />
            {/* Lamp */}
            <img
              src={lamp}
              alt="Lamp"
              className="absolute top-[-350px] left-[300px] w-[36.31px] h-[230.56px] opacity-100"
            />

            {/* Lamp Logo */}
            <img
              src={light}
              alt="Lamp Logo"
              className="absolute top-[-350px] left-[470px] w-[49.99px] h-[317.44px] opacity-100"
            />
            {/* Line Image */}
            <img
              src={Line}
              alt="Line"
              className="absolute top-[-350px] w-full left-1/2 transform -translate-x-1/2 h-auto opacity-100" // Adjusted width and added centering classes
            />
          </div>


          {/* CTA Button */}
          <button className="relative z-20 border border-white text-white px-[24px] py-[20px] rounded-[10px] 
                          font-Montserrat text-[20px] font-semibold flex items-center gap-2 
                          w-[279px] h-[70px] mt-[50px] hover:bg-white hover:text-black 
                          transition-colors duration-300 whitespace-nowrap">
            Consult Our Experts
            <span className="text-4xl w-[41px]">→</span>
          </button>
        </div>

        {/* TechSolutions Section */}
        <div className="relative z-10 mt-[50px] mx-auto w-[1676px] h-auto">
          {/* <TechSolutions /> */}
        </div>

        {/* Trusted By Section */}
        <div className="relative z-10 mt-[340px] h-[166px] flex items-center">
          <TrustedBy />


        </div>

        {/* About Section */}
        <div className="relative z-10 w-[1676px] mx-auto mt-[50px] h-[597px] rounded-[20px_40px_60px_80px] overflow-hidden bg-[#061611]">
          {/* <img
            src={future}
            alt="About Tech Devise"
            className="w-full h-full object-cover rounded-[40px]"
          /> */}
          <TechAboutSection />
        </div>


        {/* Experience Section */}
        <ExperienceSection />

        <TechOfferings />

        <div className="container mx-auto p-4" style={{
          position: 'relative',
          width: 1680,
          height: 985,
          opacity: 1,
          borderRadius: '30px 10px 30px 10px' // Mixed corner radius
        }}>
          <div className="relative  opacity-100 rounded-[26px] text-center mb-[0px] mt-[70px] mx-auto">
            {/* <h1 className="text-4xl font-bold text-[#8BBEB6]">Our Services</h1> */}
            {/* <p className="text-lg mt-4 max-w-2xl text-[#FFFFFF]">
            At Tech Devise, we provide cutting-edge IT solutions designed to drive innovation, efficiency, and security for businesses of all sizes. Our expertise spans across multiple domains, ensuring that your technology needs are met with precision and excellence.
          </p> */}
          </div>
          {/* 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imgSrc={service.imgSrc}
              bgColor={service.bgColor}
              cornerRadius={[
                'rounded-tl-3xl rounded-br-3xl',
                'rounded-tr-3xl rounded-bl-3xl',
                'rounded-2xl',
                'rounded-tl-3xl rounded-br-3xl',
                'rounded-tr-3xl rounded-bl-3xl',
                'rounded-2xl'
              ][index % 6]}
            />
          ))}
        </div> */}
          <ServicesSection />
        </div>
        <TechSolutions />
        <SocialLinks />
        <div className="flex justify-center items-center min-h-screen">
          <IndustryVision />
        </div>
        <Testimonials />
        <ContactForm />
        <LocationSection />

        {/* Bottom Spacer */}
        <div className="h-[100px]"></div>
        {/* <TechSolutions /> */}
      </div>
    </main>
  );
}

export default Homepage;

