import React from 'react';
import { FaSearch } from "react-icons/fa";
import Rectangle from '../assets/Rectangle 180.png'; 

const BlogSearch = () => {
  return (
    <div className="relative w-[1189px] h-[211px] mx-auto mt-[149px]">
        <div>
            <h1 className="w-[1189px] h-[78px] font-Montserrat, text-[64px] font-bold opacity-100 text-[#000000] text-center">Our Blogs</h1>
            <p className="w-[1189px] h-[56px] font-Montserrat, text-[20px] font-bold opacity-100 text-[#000000] text-center mt-2">Stay informed with the latest trends, insights, and expert advice in technology, business solutions, and industry innovations. Explore our blogs for valuable knowledge and updates.</p>
        </div>
      {/* Search Bar */}
      <div className="flex items-center h-[56px] opacity-100 bg-gray-100 rounded-full shadow-md px-4 py-3 w-full mt-10">
        <FaSearch className="text-teal-500 mr-3" />
        <input
          type="text"
          placeholder="Search blog by topic or keyword"
          className="w-full bg-transparent outline-none text-gray-500 placeholder-gray-400"
        />
      </div>
      

   
    </div>
  );
};

export default BlogSearch;
