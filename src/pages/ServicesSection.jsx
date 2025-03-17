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
      className="container mx-auto p-6"
      style={{
        width: "1680px",
        height: "985px",
        borderRadius: "30px 10px 30px 10px",
        backgroundColor: "#0F261E",
      }}
    >
      {/* Header Section */}
      <div className="relative w-[810px] h-[219px] rounded-[26px] text-center mb-8 mt-12 mx-auto border-2 border-[#F7DC6F]">
        <h1 className="text-4xl font-bold text-[#8BBEB6]">Our Services</h1>
        <p className="text-lg mt-4 max-w-2xl text-[#FFFFFF] mx-auto">
          At Tech Devise, we provide cutting-edge IT solutions designed to drive
          innovation, efficiency, and security for businesses of all sizes. Our
          expertise spans across multiple domains, ensuring that your technology
          needs are met with precision and excellence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative ${service.bgColor} p-6 shadow-md ${
              [
                "rounded-tl-3xl rounded-br-3xl",
                "rounded-tr-3xl rounded-bl-3xl",
                "rounded-2xl",
                "rounded-tl-3xl rounded-br-3xl",
                "rounded-tr-3xl rounded-bl-3xl",
                "rounded-2xl",
              ][index % 6]
            } w-[400px] h-[300px]`}
          >
            <h2 className="text-2xl font-bold mb-2 text-[#000]">
              {service.title}
            </h2>
            <p className="text-base text-[#000] mb-4">{service.description}</p>
            <a
              href="#"
              className="text-[#000] font-semibold inline-flex items-center"
            >
              More information ➔
            </a>
            <img
              src={service.imgSrc}
              alt={service.title}
              className="absolute bottom-0 right-0 w-36 h-36 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
