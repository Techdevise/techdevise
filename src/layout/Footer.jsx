import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Rectangle114 from "../assets/Rectangle 114.png";
import Rectangle191 from "../assets/Rectangle 191.png";
import LOGO from "../assets/LOGO011 3.png";
// import blogThumbnail from "../assets/blog-thumbnail.jpg";

const Footer = () => {
  return (
    <footer className="relative text-white py-12 px-6 md:px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 rounded-t-[60px]"
        style={{
          backgroundImage: `url(${Rectangle114})`,
          backgroundSize: "1920px 1000%", // Fixed background size
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      ></div>


      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h2
              className="text-2xl font-semibold leading-tight md:text-5xl md:leading-snug"
            >
              Keep up with the
              <br className="hidden md:block" />
              latest
            </h2>
          </div>
          <div className="md:w-1/2 flex justify-end">
  <div className="flex items-center border rounded-[12px] p-2 w-[700px] h-[75px] bg-[#3B7C6A]">
    <input
      type="email"
      placeholder="Enter your email"
      className="bg-transparent text-white w-full outline-none px-4 placeholder-white text-[20px] font-medium leading-[46px] font-montserrat opacity-70"
    />
    <button className="bg-[#157B6C] text-white px-8 py-3 rounded-[9px] w-[224px] h-[60px] opacity-100 font-bold text-[20px] font-montserrat">Send</button>
  </div>
</div>
       </div>

        <hr className="border-gray-500 my-8" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src={LOGO} alt="Tech Devise Logo" className="h-10" />
              <span className="text-2xl font-bold ml-2"></span>
            </div>
            <p className="text-white opacity-100 space-y-2 text-[18px] font-normal leading-[27px] font-montserrat">
              Tech Devise is a digital solution provider which offers various digital services that will help your online business to flourish. We expertise in providing services like digital marketing, app development, web development, CMS development and many more.
            </p>
            <button
              className="mt-4 w-[183px] h-[49px] rounded-lg bg-white font-bold text-[16px] text-[#137365] px-10 py-2"
            >
              Contact Now!
            </button>
          </div>

          {/* Services */}
          <div className="w-[201px] h-[54px]">
  <h3 className="text-lg font-semibold mb-3 text-white font-montserrat">Services</h3>
  <ul className="text-white opacity-100 space-y-2 text-[18px] font-normal leading-[27px] font-montserrat">
    <li>Android Development</li>
    <li>iOS Development</li>
    <li>CMS</li>
    <li>E-commerce/Shopify</li>
    <li>SEO</li>
    <li>SMM</li>
  </ul>
</div>


          {/* Quick Links */}
          <div className="w-[201px] h-[54px]">
            <h3 className="text-lg font-semibold mb-3 text-white font-montserrat">Quick Links</h3>
            <ul className="text-white opacity-100 space-y-2 text-[18px] font-normal leading-[27px] font-montserrat">
              <li><Link to="/about">About TechDevise</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Recent Blogs */}
          <div>
  <h3 className="text-lg font-semibold mb-3 text-white">Recent Blogs</h3>
  <div className="flex space-x-4">
    {[
      { date: 15, image: Rectangle191 },
      { date: 20, image: Rectangle191 }
    ].map((blog, index) => (
      <div 
        key={index} 
        className="bg-white text-black w-[173px] h-[183px] rounded-[10px] shadow-md flex flex-col items-center p-3"
      >
        <img src={blog.image} alt="Blog" className="w-[150px] h-[90px] rounded-[10px] object-cover" />
        <p className="text-sm font-semibold text-center mt-2">Crafting Seamless User Experiences</p>
        <span className="bg-[#20856f] text-white text-sm px-3 py-1 rounded-md mt-2">{blog.date} Feb</span>
      </div>
    ))}
  </div>
</div>


        </div>

        <hr className="border-gray-500 my-8" />
        <div
          className="relative text-white py-6 px-6 md:px-20 rounded-lg bg-cover bg-center bg-no-repeat opacity-100 text-6xl font-semibold"
          style={{
            backgroundImage: `url(${Rectangle114})`,
            width: '100%',
            height: '117px',


            borderRadius: '26px',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            {/* Address and Contact */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="flex items-center space-x-2 text-white font-semibold text-[18px] opacity-100 leading-[29px] w-[420px] h-[58px] font-montserrat">
                <span>📍</span>
                <span>F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</span>
              </p>
              <p className="flex items-center space-x-2 text-white font-semibold text-[18px] opacity-100 leading-[29px] w-[420px] h-[58px] font-montserrat">
                <span>✉️</span>
                <span>techdevise@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2 text-white font-semibold text-[18px] opacity-100 leading-[29px] w-[420px] h-[58px] font-montserrat">
                <span>📞</span>
                <span>+91 1234567891</span>
              </p>
            </div>


            {/* Social Icons */}
            <div className="flex space-x-3 text-lg ml-[-10px]">
  <a href="#" className="w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-[#ffffff] opacity-100">
    <FaFacebookF />
  </a>
  <a href="#" className="w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-[#ffffff] opacity-100">
    <FaInstagram />
  </a>
  <a href="#" className="w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-[#ffffff] opacity-100">
    <FaLinkedinIn />
  </a>
  <a href="#" className="w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-[#ffffff] opacity-100">
    X
  </a>
</div>

          </div>
        </div>


        <hr className="border-gray-500 my-6" />

        {/* Copyright Section */}
        <div className="opacity-100 flex justify-between items-center text-xl text-white text-gray-400">
          <p>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</p>
          <p>Techdevise &copy; 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

