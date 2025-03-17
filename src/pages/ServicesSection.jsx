import React from "react";
import web from "../assets/web.png"
import ecommerce from "../assets/ecommerce.png"
import digital from "../assets/digital.png"
import quality from "../assets/quality.png"
import mobile from "../assets/mobile.png"
import uiux from "../assets/uiux.png"

const services = [
  {
    title: "Website Development",
    description:
      "Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow.",
    imgSrc: web,
    bgColor: "bg-[#8CD790]",
  },
  {
    title: "E-Commerce Development",
    description:
      "Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow.",
    imgSrc: ecommerce,
    bgColor: "bg-[#77D7E5]",
  },
  {
    title: "Digital Marketing",
    description:
      "Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow.",
    imgSrc: digital,
    bgColor: "bg-[#F7DC6F]",
  },
  {
    title: "Quality Analysis",
    description:
      "Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow.",
    imgSrc: quality,
    bgColor: "bg-[#A9CCE3]",
  },
  {
    title: "Mobile Application Development",
    description:
      "Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow.",
    imgSrc: mobile,
    bgColor: "bg-[#F1948A]",
  },
  {
    title: "UI/UX Design",
    description:
      "Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow.",
    imgSrc: uiux,
    bgColor: "bg-[#F5B7B1]",
  },
];

const ServicesSection = () => {
  return (
    <div
      className="container mx-auto p-4 xl:p-6"
      style={{
        borderRadius: "30px 10px 30px 10px",
        backgroundColor: "#0F261E",
      }}
    >
      {/* Header Section */}
      <div className="relative w-full max-w-[810px] mx-auto rounded-[26px] text-center mb-8 mt-6 md:mt-12 p-4 md:p-8 border-2 border-[#F7DC6F]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#8BBEB6] mb-4">
          Our Services
        </h1>
        <p className="text-sm md:text-lg text-[#FFFFFF] mx-auto">
          At Tech Devise, we provide cutting-edge IT solutions designed to drive
          innovation, efficiency, and security for businesses of all sizes. Our
          expertise spans across multiple domains, ensuring that your technology
          needs are met with precision and excellence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative ${service.bgColor} p-4 md:p-6 shadow-md ${
              [
                "rounded-tl-3xl rounded-br-3xl",
                "rounded-tr-3xl rounded-bl-3xl",
                "rounded-2xl",
                "rounded-tl-3xl rounded-br-3xl",
                "rounded-tr-3xl rounded-bl-3xl",
                "rounded-2xl",
              ][index % 6]
            } w-full max-w-[400px] mx-auto h-[250px] md:h-[300px]`}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#000]">
              {service.title}
            </h2>
            <p className="text-sm md:text-base text-[#000] mb-4">
              {service.description}
            </p>
            <a
              href="#"
              className="text-[#000] text-sm md:text-base font-semibold inline-flex items-center"
            >
              More information ➔
            </a>
            <img
              src={service.imgSrc}
              alt={service.title}
              className="absolute bottom-0 right-0 w-24 h-24 md:w-36 md:h-36 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;