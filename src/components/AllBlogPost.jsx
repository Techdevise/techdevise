import React from "react";
import Blogimage2 from "../assets/Blogimage2.svg";
import Blogimage3 from "../assets/Blogimage3.svg";
import Blogimage4 from "../assets/Blogimage4.svg";
import Blogimage5 from "../assets/Blogimage4.svg";
import Blogimage6 from "../assets/Blogimage6.svg";
import Blogimage7 from "../assets/Blogimage7.svg";

const blogs = [
  {
    id: 1,
    image: Blogimage2,
    category: "Wordpress",
    readTime: "5 min read",
    date: "30 June 2020",
    title: "Want to change your WordPress theme? Here’s what you should consider",
    description:
      "Discover the latest trends, principles, and best practices in design that enhance usability, aesthetics, and functionality for a flawless user experience.",
  },
  {
    id: 2,
    image: Blogimage3,
    category: "Web development",
    readTime: "5 min read",
    date: "30 June 2020",
    title: "Cheap web development – why you shouldn’t fall prey!",
    description:
      "Quality web development is a pricey affair. A well-made website with necessary functionalities will cost you a few hundred dollars. But since many wannabe webowners do not want to spend that much on a website, they tend to hire developers who promise to do the work for peanuts.",
  },
  {
    id: 3,
    image: Blogimage4,
    category: "Wordpress plugins",
    readTime: "5 min read",
    date: "30 March 2020",
    title: "Premium WordPress plugins – are they worth paying for?",
    description:
      "If you have been working with WordPress for long enough, you must have seen 3 different types of plugins available in the WordPress store – Free, Premium, and Freemium versions. Mostly people tend to use the freemium plugins.",
  },
  {
    id: 4,
    image: Blogimage5,
    category: "Wed design",
    readTime: "5 min read",
    date: "30 June 2020",
    title: "Responsive web design – why it is important for your online presence?",
    description:
      "The world of internet and websites are changing every day. To make sure you keep up with the pace it is important to have up-to-date knowledge and make necessary changes to your website. There was a time when people used to put most of their focus on good, user-friendly designs.",
  },
  {
    id: 5,
    image: Blogimage6,
    category: "SMM",
    readTime: "5 min read",
    date: "13 November 2020",
    title: "How to use SMM for your e-commerce store?",
    description:
      "To use SMM for your own e-commerce store you need to make sure that you take care of a few things that might help you get the best from the social media.",
  },
  {
    id: 6,
    image: Blogimage7,
    category: "Seo Strategy",
    readTime: "5 min read",
    date: "30 November 2020",
    title: "5 effective techniques for a killer SEO strategy",
    description:
      "SEO has been a well-known technique in the field of digital marketing and when it comes to SEO strategies you have to be ready with some good ideas to boost your SEO work. Here are 5 simple yet effective strategies that can certainly help you in the long run.",
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
      <div className="text-center mt-8 mb-8">
        <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 transition">
          Load more
        </button>
      </div>
    </div>
  );
};

export default AllBlogPost;
