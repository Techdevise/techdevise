import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const seoFeatures = [
  {
    id: "01",
    title: "SEO Optimization",
    description:
      "At Tech Devise, we offer unique SEO optimization services that will increase the ranking of your website on various search engines. We will help your website to become SEO optimized and this will ensure an increase in search engine ranking.",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    id: "02",
    title: "Keyword Research",
    description:
      "Analysis of effective keywords is a critical aspect that helps your overall online ranking. Identification of these keywords hence becomes imperative. Tech Devise ensures to scan and chalk out the most relevant keywords that are duly added to all your online content.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    id: "03",
    title: "Regular Reports",
    description:
      "Keep track of your online operations will help you to analyze the overall performance of your firm. With the assistance of the Tech Devise team, you can now avail regular reports that identify specific loopholes present in your online strategies.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    id: "04",
    title: "Competitor Analysis",
    description:
      "In order to stand out, competitor analysis is necessary. Our strategy helps to analyze your competition and identify key opportunities.",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
];

const SEOFeatures = () => {
  return (
    <div className="relative px-20 py-20 bg-white">
      {/* Scrollable Section */}
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
        {seoFeatures.map((feature, index) => (
          <div
            key={index}
            className={`w-[540px] h-[484px] p-6 rounded-lg shadow-md ${feature.bgColor} flex-shrink-0`}
          >
            <h2 className={`text-6xl font-Montserrat font-semibold ${feature.textColor}`}>{feature.id}</h2>
            <h3 className="text-lg font-bold mt-3">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

        {/** Navigation Arrows */}
                 <div className="absolute left-20 bottom-10 flex gap-4">
                     <button className="bg-black text-white p-3 rounded-full"><FaArrowLeft size={10} /></button>
                     <button className="bg-black text-white p-3 rounded-full"><FaArrowRight size={10} /></button>
                 </div>
    </div>
  );
};

export default SEOFeatures;
