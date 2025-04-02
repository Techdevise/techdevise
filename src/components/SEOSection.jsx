import React from "react";
import seoimage from "../assets/seoimage.png"; // Replace with actual image path

const SEOSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 bg-white">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-gray-700" style={{
        display: 'inline-table',
        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        color: "#157B6C",
      }}>
          Give Your Website Ranking a Boost <br />
          With Our Proven SEO Strategies.
        </h2>
        <p className="text-gray-800 mt-4 text-lg">
          Is your business website struggling to attract visitors? If yes, then
          it is a common problem for every website because the internet is
          flooded with millions of websites and getting attention among this
          crowded place is a challenging task.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={seoimage} alt="SEO Illustration" className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default SEOSection;
