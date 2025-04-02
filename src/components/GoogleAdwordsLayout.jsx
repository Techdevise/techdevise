import React from "react";

const GoogleAdwordsLayout = () => {
  return (
    <div className="w-[1678px] h-[569px] ml-30 bg-white opacity-100 rounded-[10px] p-6 flex items-center justify-between shadow-lg">
      <div className="w-1/3 space-y-4">
        {[
          { text: "Certified Agency", color: "bg-pink-200", arrow: "bg-pink-500" },
          { text: "24 x 7 Support", color: "bg-gray-200", arrow: "bg-red-500" },
          { text: "Affordable", color: "bg-green-200", arrow: "bg-green-500" },
          { text: "Experience", color: "bg-yellow-200", arrow: "bg-yellow-500" },
          { text: "Flexible Plans", color: "bg-purple-200", arrow: "bg-purple-500" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 ${item.color} rounded-full shadow-md w-80`}
          >
            <span className="text-black font-medium">{item.text}</span>
            <div
              className={`w-8 h-8 flex items-center justify-center ${item.arrow} rounded-full text-white`}
            >
              ↗
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/3 border-l pl-6 text-lg">
        <p>
          <strong>Tech Devise</strong> is certified by Google as a reputed Adwords agency. Our certification
          and partnership prove that we know all the intricate details about Google Adwords.
        </p>
      </div>
    </div>
  );
};

export default GoogleAdwordsLayout;
