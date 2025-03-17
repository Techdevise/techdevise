import React from 'react';
import TrustedBy from './TrustedBy';
import ServicesSection from './ServicesSection';
import TechOfferings from './TechOfferings';
import TechSolutions from "./TechSolutions";
import SocialLinks from './SocialMediaBanner';
import IndustryVision from './IndustryVision';
import Testimonials from './Testimonials';
import home from "../assets/home.png";
import gicons from "../assets/gicons.png"
import aicons from "../assets/aicons.png"
import future from "../assets/future.png"
import lamp from "../assets/lamp.png"
import light from "../assets/light.png"
import Group from '../assets/Group 1.png';
// import Rectangle from '../assets/Rectangle 14.png';
import ContactForm from './ContactForm';
import LocationSection from './LocationSection';

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
    <div className="relative w-[1920px] min-h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${Group})` }}>

      {/* Main Content Section */}
      <div className="relative z-10 left-[114px] top-[300px] w-[911px] pb-[100px]">
        {/* Badges Section */}
        <div className="flex gap-4 p-4">
          <div className="bg-white rounded-lg shadow-md p-5 flex items-center gap-2 w-[229px] h-[56px]">
            <img
              src={gicons}
              alt="Google Partner"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold">
              <span className="text-gray-600">Google</span>{' '}
              <span className="text-blue-600">Partner</span>
            </span>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 flex items-center gap-2 w-[229px] h-[56px]">
            <img
              src={aicons}
              alt="Google Analytics"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold">
              <span className="text-gray-600">Google</span>{' '}
              <span className="text-green-600">Analytics</span>
            </span>
          </div>
        </div>

        {/* Headings Section */}
        <h1 className="text-[45px] leading-tight text-white mt-4 max-w-[911px]">
          Expert Development Services for you
        </h1>

        <div className="mt-8 mb-12">
          <h2 className="text-[96px] leading-none font-extrabold text-[#EDF5F3]">
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
        </div>


        {/* CTA Button */}
        <button className="relative z-20 border border-white text-white px-[24px] py-[20px] rounded-[10px] 
                          font-[Archivo] text-[20px] font-semibold flex items-center gap-2 
                          w-[279px] h-[70px] mt-[50px] hover:bg-white hover:text-black 
                          transition-colors duration-300">
          Consult Our Experts
          <span className="text-xl">→</span>
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
        <img
          src={future}
          alt="About Tech Devise"
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>

      {/* Experience Section */}
    {/* Experience Section */}
<div className="relative z-10 mx-auto mt-[50px] w-full max-w-[1670px] h-auto opacity-100 px-4 py-8 bg-[#000000]">
  {/* Main Content Container */}
  <div className="flex flex-col md:flex-row gap-12 h-full">
    {/* Left Column - Text & Primary Cards */}
    <div className="w-full md:w-[45%] flex flex-col">
      {/* Text Section */}
      <div className="mb-16">
        <h1 className="text-[56px] font-black text-[#A3E4C5] leading-none">Experience</h1>
        <p className="mt-8 text-[20px] text-gray-300 leading-relaxed max-w-[550px]">
          With years of experience in the IT industry, we have successfully delivered cutting-edge software solutions,
          web and mobile applications, and enterprise-grade systems. Our expertise spans various technologies, ensuring
          innovative, scalable, and secure digital solutions tailored to your business needs.
        </p>
      </div>

      {/* Primary Cards Column */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Years of Experience Card */}
        <div className="bg-[#4CAF7A] w-full md:w-[450px] h-[320px] rounded-[26px] p-8 flex flex-col justify-between relative">
          <span className="text-[72px] font-black">10+</span>
          <div className="bg-[#BFEAD2] h-[80px] absolute bottom-0 left-0 right-0 rounded-b-[26px] flex items-center justify-center">
            <span className="text-[28px] font-semibold">Years of Experience</span>
          </div>
        </div>

        {/* Clients Card */}
        <div className="bg-[#E8F3BA] w-full md:w-[450px] h-[320px] rounded-[26px] p-8 flex flex-col justify-between relative">
          <span className="text-[72px] font-black">500+</span>
          <div className="bg-[#F7FAD9] h-[80px] absolute bottom-0 left-0 right-0 rounded-b-[26px] flex items-center justify-center">
            <span className="text-[28px] font-semibold">Clients</span>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column - Secondary Cards Grid */}
    <div className="w-full md:w-[55%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Row 1 */}
        <div className="bg-[#96E3DC] h-[320px] rounded-[26px] p-8 relative">
          <span className="text-[72px] font-black">500+</span>
          <div className="bg-[#CDE9E6] h-[80px] absolute bottom-0 left-0 right-0 rounded-b-[26px] flex items-center justify-center">
            <span className="text-[28px] font-semibold">Clients</span>
          </div>
        </div>

        <div className="bg-[#A5D1F3] h-[320px] rounded-[26px] p-8 relative">
          <span className="text-[72px] font-black">20+</span>
          <div className="bg-[#D1E8FB] h-[80px] absolute bottom-0 left-0 right-0 rounded-b-[26px] flex items-center justify-center">
            <span className="text-[28px] font-semibold">Countries</span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-[#F5A8B8] h-[320px] rounded-[26px] p-8 relative">
          <span className="text-[72px] font-black">500+</span>
          <div className="bg-[#FCD6DD] h-[80px] absolute bottom-0 left-0 right-0 rounded-b-[26px] flex items-center justify-center">
            <span className="text-[28px] font-semibold">Clients</span>
          </div>
        </div>

        <div className="bg-[#E98E86] h-[320px] rounded-[26px] p-8 relative">
          <span className="text-[72px] font-black">20+</span>
          <div className="bg-[#F6B9B5] h-[80px] absolute bottom-0 left-0 right-0 rounded-b-[26px] flex items-center justify-center">
            <span className="text-[28px] font-semibold">Countries</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Rotated Experience Text */}
  <div className="absolute right-[-280px] top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
    <h1 className="text-[72px] font-black text-[#A3E4C5] opacity-30 tracking-widest">EXPERIENCE</h1>
  </div>
</div>
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
  );
}

export default Homepage;

