import React from "react";

// Import images
import Rectangle from "../assets/Rectangle 180.png";
import Rectangle1 from "../assets/Rectangle 181.png";
import Rectangle2 from "../assets/Rectangle 182.png";
import Rectangle3 from "../assets/Rectangle 183.png";

// Blog data
const blogs = [
  {
    id: 1,
    image: Rectangle1,
    category: "Design",
    readTime: "5 min read",
    date: "30 March 2024",
  },
  {
    id: 2,
    image: Rectangle2,
    category: "Management",
    readTime: "5 min read",
    date: "30 March 2024",
  },
  {
    id: 3,
    image: Rectangle3,
    category: "Research",
    readTime: "5 min read",
    date: "30 March 2024",
  },
];

const BlogCard = () => {
  return (
    <>
      {/* Single Card */}
      <div
       className="relative w-[1675px] h-[372px] mx-auto mt-[70px] bg-[#ffffff] border border-[#529D92] rounded-[20px] flex items-center overflow-hidden shadow-lg"
       style={{ opacity: 1 }}
     >
       {/* Left Side Image */}
       <div className="w-[672px] h-[338px]">
         <img
           src={Rectangle}
           alt="Blog Thumbnail"
           className="w-full h-full object-cover rounded-l-[20px] ml-[10px]"
         />
       </div>
 
       {/* Right Side Content */}
       <div className="flex-1 p-6 text-white w-[838] h-[300px] mt-[-50px]">
         {/* Category and Read Time */}
         <div className="flex items-center gap-2 mb-4">
           <span className="text-[#157B6C] font-semibold">Technology</span>
           <span className="text-gray-400">•</span>
           <span className="text-[#157B6C]">30 min read</span>
         </div>
 
         {/* Title */}
         <h2 className="text-[32px] font-bold leading-tight mb-4">
           Driving Innovation in Tech
         </h2>
 
         {/* Description */}
         <p className="w-[868px] h-[220px] font-montserrat font-semibold text-[40px] text-[#000000] opacity-100 leading-relaxed mt-[-50px]">
           Discover the latest advancements in the tech industry, where
           innovation drives progress and shapes the future.
         </p>
 
         {/* Date */}
         <div className="mt-6 w-[868px] h-[24px] font-montserrat font-semibold text-[20px] text-[#9F9F9F]">30 March 2024</div>
       </div>
     </div>

      {/* Heading Section */}                           

      {/* Multiple Cards Section */}
      <div
        className="relative w-[1677px] h-[605px] mx-auto mt-[70px] flex gap-6"
        style={{ opacity: 1 }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="w-[530px] h-[605px] bg-[#ffffff] border border-[#529D92] rounded-[20px] shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="w-[530px] h-[338px]">
              <img
                src={blog.image}
                alt="Blog Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Category and Read Time */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#157B6C] font-semibold">
                  {blog.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-[#157B6C]">{blog.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-[24px] font-bold leading-tight text-black mb-4">
              Innovative Design: Crafting Seamless User Experiences
              </h2>
              <p>Discover the latest trends, principles, and best practices in design that enhance usability, aesthetics, and functionality for a flawless user experience.</p>

              {/* Date */}
              <div className="mt-4 text-[#9F9F9F] text-[16px]">
                {blog.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCard;


