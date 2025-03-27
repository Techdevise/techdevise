import React from "react"
// import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'
import ServiceCard from "./ServiceCard"; 
import web from "../assets/web.png"
import ecommerce from "../assets/ecommerce.png"
import digital from "../assets/digital.png"
import quality from "../assets/quality.png"
import mobile from "../assets/mobile.png"
import uiux from "../assets/uiux.png"




export default function ServicesSection() {
  return (
    <div className="w-[1680px] h-[985px] p-6 bg-[#061611] ml-[-100px]">
      {/* Services Header */}
      <div className="w-[810px] h-[229px] mx-auto text-center mb-8 border border-[#529D92] rounded-[26px] opacity-100">
  <h2  style={{
                        display: 'inline-table',
                        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        color: "#157B6C",
                    }} className="text-5xl font-bold text-white mt-[40px]">
    Our <span className="text-emerald-400">Services</span>
  </h2>
  <p className="text-gray-300 max-w-2xl mx-auto mt-4">
    At Tech Devise, we provide cutting-edge IT solutions designed to drive
    innovation, efficiency, and security for businesses of all sizes. Our
    expertise spans across multiple domains, ensuring that your technology
    needs are met with precision and excellence.
  </p>
</div>
      {/* Top Row */}
      <div className="flex gap-6 mb-6 mt-[-250px]">
        <ServiceCard 
          title="Website Development"
          description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
          topColor="#67C792"  // Green Top
          bottomColor="#3AAD6E" // Light Green Bottom
          imagePath={web}
        />
        
        <div className="w-[810px] h-[229px] bg-emerald-200 text-black rounded-3xl overflow-hidden flex shadow-lg mt-[250px]">
        {/* Text Content */}
        <div className="w-1/2 p-8">
          <h3 className="text-2xl font-bold">E-commerce Website</h3>
          <p className="mt-2 text-gray-800">
            Enhance your brand's presence with our creative digital marketing
            tools! Engage your audience and see your business grow.
          </p>
          <button className="flex items-center mt-4 font-semibold text-black">
            More information
            <span className="ml-2 bg-white rounded-full p-1">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-[#5DC6B9]">
          <img
            src={ecommerce}
            alt="E-commerce Illustration"
            style={{ width: '200px', height: '200px', margin: '0 auto' }}
          />
        </div>
        </div>
        
        <ServiceCard 
          title="Digital Marketing"
          description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
          topColor="#DEEA99"  
          bottomColor="#B1BF62" 
          imagePath={digital}
        />
      </div>
      
      {/* Middle Row */}
      {/* <div className="flex gap-6 mb-6">
        <ServiceCard 
          title="E-commerce Website"
          description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
          bgColor="bg-teal-300"
          imagePath="/ecommerce.svg"
          fullWidth={true}
        />
      </div>
       */}
      {/* Bottom Row */}
      <div className="flex gap-6">
        <ServiceCard 
          title="Quality Analysis"
          description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
          topColor="#99CBEA"  // Green Top
          bottomColor="#76B6DE" // Light Green Bottom
          imagePath={quality}
        />
        
        <ServiceCard 
          title="Mobile Application development"
          description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
          topColor="#EA99B9"  // Green Top
          bottomColor="#DD7AA2" // Light Green Bottom
          imagePath={mobile}
        />
        
        <ServiceCard 
          title="UI/UX Design"
          description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
          topColor="#EA9C99"  // Green Top
  bottomColor="#D67F7C" // Light Green Bottom
          imagePath={uiux}
        />
      </div>
    </div>
  )
}
