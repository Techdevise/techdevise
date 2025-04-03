import React from "react";
import Navbar from "../layout/Navbar";
import LocationSection from "./LocationSection";
import RecentBlog from "../components/RecentBlog";
import blogdetails1 from "../assets/blogdetails1.png"; // Correct image path


const BlogDetails = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Blog Content */}
      <div className="flex justify-center items-center mt-[160px]">
  <div
    className="relative w-[1214px] h-[174px] bg-white rounded-[20px] overflow-hidden shadow-lg opacity-100 p-4"
  >
    {/* Category and Read Time */}
    <div className="flex justify-center items-center gap-2 mb-2 w-full h-[24px] text-center">
      <span className="text-[#157B6C] font-semibold text-[16px]">
        Technology
      </span>
      <span className="text-gray-400">•</span>
      <span className="text-[#157B6C] text-[16px]">
        30 min read
      </span>
    </div>

    {/* Title */}
    <h2 className="text-[40px] w-full h-[110px] font-montserrat font-semibold leading-tight text-black mb-2 text-center">
      Revolutionizing the Future: Cutting-Edge Technology Innovations
      Transforming Businesses and Everyday Life
    </h2>

    {/* Date */}
    <div className="text-[#9F9F9F] text-[14px] text-center w-[1214] h-[24] mt-[-12px]">
      30 March 2024
    </div>
  </div>
</div>

       {/* Image Section */}
       <div className="flex justify-center items-center mt-4">
        <img
          src={blogdetails1}
          alt="Blog Details"
          className="w-[1670px] h-[583px] rounded-[20px] opacity-100 mt-5"/>
      </div>
       {/* Text Section */}
       <div className="mt-8 px-6 md:px-28">
        <p>Technology is advancing at a rapid pace, driving innovation across industries and changing the way we live, work, and interact with the world. From artificial intelligence (AI) and cloud computing Technology is advancing at a rapid pace, driving innovation across industries and changing the way we live, work, and interact with the world. From artificial intelligence (AI) and cloud computing <br /> <br />In this blog, we’ll explore some of the most groundbreaking technologies revolutionizing industries and how they are transforming the future.</p><br />
        <h3 className="text-[20px] font-bold text-black mb-2">
          Artificial Intelligence & Automation: Enhancing Efficiency and Decision-Making
        </h3>
        <p className="text-[18px] text-black leading-7 mb-4">Technology is advancing at a rapid pace, driving innovation across industries and changing the way we live, work, and interact with the world. From artificial intelligence (AI) and cloud computing  Artificial Intelligence (AI) and automation are leading the digital revolution. AI-powered solutions are transforming industries by enabling businesses to automate repetitive tasks, improve decision-making, and provide personalized experiences</p>
        <p className="text-[18px] text-black leading-7 mb-4">
          Artificial Intelligence (AI) and automation are leading the digital revolution. AI-powered solutions are transforming industries by enabling businesses to automate repetitive tasks, improve decision-making, and provide personalized experiences.
        </p>

        <h4 className="text-[18px] font-semibold text-black mb-1">AI in Business</h4>
        <p className="text-[18px] text-black leading-7 mb-4">
          Companies use AI-driven chatbots for customer support, predictive analytics for business intelligence, and automation tools for streamlining operations.
        </p>

        <h4 className="text-[18px] font-semibold text-black mb-1">AI in Healthcare</h4>
        <p className="text-[18px] text-black leading-7 mb-4">
          Machine learning algorithms assist in early disease detection, personalized treatments, and robotic surgeries, improving patient outcomes.
        </p>

        <h4 className="text-[18px] font-semibold text-black mb-1">AI in Finance</h4>
        <p className="text-[18px] text-black leading-7 mb-4">
          Fraud detection systems, algorithmic trading, and AI-powered financial advisors are making banking more secure and efficient.
        </p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />

      </div>
       {/* Text Section */}
       <div className="mt-8 px-6 md:px-28">
        <p>Technology is advancing at a rapid pace, driving innovation across industries and changing the way we live, work, and interact with the world. From artificial intelligence (AI) and cloud computing Technology is advancing at a rapid pace, driving innovation across industries and changing the way we live, work, and interact with the world. From artificial intelligence (AI) and cloud computing <br /> <br />In this blog, we’ll explore some of the most groundbreaking technologies revolutionizing industries and how they are transforming the future.</p><br />
        <h3 className="text-[20px] font-bold text-black mb-2">
          Artificial Intelligence & Automation: Enhancing Efficiency and Decision-Making
        </h3>
        <p className="text-[18px] text-black leading-7 mb-4">Technology is advancing at a rapid pace, driving innovation across industries and changing the way we live, work, and interact with the world. From artificial intelligence (AI) and cloud computing  Artificial Intelligence (AI) and automation are leading the digital revolution. AI-powered solutions are transforming industries by enabling businesses to automate repetitive tasks, improve decision-making, and provide personalized experiences</p>
        <p className="text-[18px] text-black leading-7 mb-4">
          Artificial Intelligence (AI) and automation are leading the digital revolution. AI-powered solutions are transforming industries by enabling businesses to automate repetitive tasks, improve decision-making, and provide personalized experiences.
        </p>

        <h4 className="text-[18px] font-semibold text-black mb-1">AI in Business</h4>
        <p className="text-[18px] text-black leading-7 mb-4">
          Companies use AI-driven chatbots for customer support, predictive analytics for business intelligence, and automation tools for streamlining operations.
        </p>

        <h4 className="text-[18px] font-semibold text-black mb-1">AI in Healthcare</h4>
        <p className="text-[18px] text-black leading-7 mb-4">
          Machine learning algorithms assist in early disease detection, personalized treatments, and robotic surgeries, improving patient outcomes.
        </p>

        <h4 className="text-[18px] font-semibold text-black mb-1">AI in Finance</h4>
        <p className="text-[18px] text-black leading-7 mb-4">
          Fraud detection systems, algorithmic trading, and AI-powered financial advisors are making banking more secure and efficient.
        </p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />

      </div>


      {/* Additional Content */}
      <RecentBlog />
      <LocationSection />

     
    </div>
  );
};

export default BlogDetails;
