import React from "react";
import Rectangle1 from "../assets/Rectangle 184.png";
import Rectangle2 from "../assets/Rectangle 185.png";
import Rectangle3 from "../assets/Rectangle 186.png";
import Rectangle4 from "../assets/Rectangle 187.png";
import Rectangle5 from "../assets/Rectangle 188.png";
import Rectangle6 from "../assets/Rectangle 189.png";

const blogs = [
  {
    id: 1,
    image: Rectangle1,
    category: "Design",
    readTime: "5 min read",
    date: "30 March 2024",
    title: "Innovative Design: Crafting Seamless User Experiences",
    description:
      "Discover the latest trends, principles, and best practices in design that enhance usability, aesthetics, and functionality for a flawless user experience.",
  },
  {
    id: 2,
    image: Rectangle2,
    category: "Management",
    readTime: "5 min read",
    date: "30 March 2024",
    title: "Effective Management Strategies for Business Growth",
    description:
      "Discover key management strategies to enhance productivity, streamline operations, and drive business success. Learn expert tips on leadership and team collaboration.",
  },
  {
    id: 3,
    image: Rectangle3,
    category: "Research",
    readTime: "5 min read",
    date: "30 March 2024",
    title: "The Power of Research in Driving Innovation",
    description:
      "Research is the foundation of innovation, enabling businesses to make data-driven decisions, identify new opportunities, and stay ahead of the competition.",
  },
  {
    id: 4,
    image: Rectangle4,
    category: "Design",
    readTime: "5 min read",
    date: "30 March 2024",
    title: "Innovative Design: Crafting Seamless User Experiences",
    description:
      "Discover the latest trends, principles, and best practices in design that enhance usability, aesthetics, and functionality for a flawless user experience.",
  },
  {
    id: 5,
    image: Rectangle5,
    category: "Management",
    readTime: "5 min read",
    date: "30 March 2024",
    title: "Effective Management Strategies for Business Growth",
    description:
      "Discover key management strategies to enhance productivity, streamline operations, and drive business success. Learn expert tips on leadership and team collaboration.",
  },
  {
    id: 6,
    image: Rectangle6,
    category: "Research",
    readTime: "5 min read",
    date: "30 March 2024",
    title: "The Power of Research in Driving Innovation",
    description:
      "Research is the foundation of innovation, enabling businesses to make data-driven decisions, identify new opportunities, and stay ahead of the competition.",
  },
];

const AllBlogPost = () => {
  return (
    <div className="max-w-[1677px] h-[605] mx-auto mt-12">
      {/* Title */}
      <h2 className="text-[32px] font-bold mb-8">All Blog Post</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-300 rounded-[20px] shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] cursor-pointer">
            {/* Image */}
            <img
              src={blog.image}
              alt="Blog Thumbnail"
              className="w-[537px] h-[336px] object-cover rounded-t-[20px]"
            />

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
              <h3 className="text-[18px] font-bold leading-tight mb-2">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed mb-2">
                {blog.description}
              </p>

              {/* Date */}
              <div className="text-[14px] text-gray-400">{blog.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 transition">
          Load more
        </button>
      </div>
    </div>
  );
};

export default AllBlogPost;
