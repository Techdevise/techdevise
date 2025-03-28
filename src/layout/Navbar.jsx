import { useState } from "react";
import { Link } from "react-router-dom";
import ServicesDropdown from "../components/ServicesDropdown";

// import Services from "../components/Services";
import "../styles/components/Navbar.css";
import Button from '../components/Button';
import techdeviselogo from '../assets/techdeviselogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [blogDropdown, setBlogDropdown] = useState(false)
  const [isSticky, setIsSticky] = useState({ services: false, blog: false })

  const handleServicesHover = (state) => {
    if (!isSticky.services) setServicesDropdown(state)
  }

  const handleBlogHover = (state) => {
    if (!isSticky.blog) setBlogDropdown(state)
  }

  const toggleSticky = (dropdown) => {
    setIsSticky((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
      ...(dropdown === "services" && { blog: false }),
      ...(dropdown === "blog" && { services: false }),
    }))

    if (dropdown === "services") {
      setServicesDropdown((prev) => !prev)
      setBlogDropdown(false)
    }
    if (dropdown === "blog") {
      setBlogDropdown((prev) => !prev)
      setServicesDropdown(false)
    }
  }

  return (
    <>
      <nav
        className="nav_head absolute left-[120px] top-[33px] w-[1680px] h-[82px] text-white py-4 px-6 flex justify-between items-center bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('')" }}
      >
        <div className="flex items-center w-[190.52px] h-[90px] opacity-100">
          <img
            alt="Tech Devise Logo"
            className="w-[179.52px] h-[56px] opacity-100 mr-2"
            src={techdeviselogo || "/placeholder.svg"}
          />
          <span className="text-2xl font-bold"></span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg w-[762px] h-[24px] opacity-100">
          <Link
            to="/"
            className="w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleServicesHover(true)}
            onMouseLeave={() => handleServicesHover(false)}
          >
            <button
              onClick={() => toggleSticky("services")}
              className="whitespace-nowrap w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300"
            >
              Services <span className="text-[10px]">▼</span>
            </button>
          </div>

          <Link
            to="/portfolio"
            className="w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300"
          >
            Portfolio
          </Link>

          {/* Blog Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleBlogHover(true)}
            onMouseLeave={() => handleBlogHover(false)}
          >
            <Link
              to="/blog" // Redirects to the blog page
              className="whitespace-nowrap w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300"
            >
              Blog <span className="text-[10px]">▼</span>
            </Link>
            <div
              className={`absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md transition-all duration-300 ${
                blogDropdown || isSticky.blog
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link to="/blog/blog-details" className="block px-4 py-2 hover:bg-gray-200">
                Blog Details
              </Link>
            </div>
          </div>

          <Link
            to="/about"
            className="whitespace-nowrap w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="whitespace-nowrap w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Get in Touch Button */}
        <div className="ml-[-640px]">
          <Button />
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#157B6C] text-white p-4 space-y-4 shadow-md md:hidden">
            <Link to="/" className="block">
              Home
            </Link>
            <Link to="/services" className="block">
              Services
            </Link>
            <Link to="/portfolio" className="block">
              Portfolio
            </Link>
            <Link to="/blog" className="block">
              Blog
            </Link>
            <Link to="/about" className="block">
              About Us
            </Link>
            <Link to="/contact" className="block">
              Contact Us
            </Link>
            <div className="flex justify-center items-center h-screen">
              <Button />
            </div>
          </div>
        )}
      </nav>

      {/* Services Mega Dropdown */}
      <ServicesDropdown isVisible={servicesDropdown || isSticky.services} />
    </>
  )
}

export default Navbar

