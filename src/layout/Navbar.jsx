import { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "../../components/ui/button"; 
// import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute left-[120px] top-[33px] w-[1680px] h-[82px] text-white py-4 px-6 flex justify-between items-center bg-cover bg-center opacity-100"
    style={{ backgroundImage: "url('')" }}
  >
     <div className="flex items-center w-[190.52px] h-[90px] opacity-100">
     <img alt="Tech Devise Logo" className="w-[179.52px] h-[56px] opacity-100 mr-2" src="/LOGO011 3.png" />

  <span className="text-2xl font-bold"></span>
</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-lg w-[762px] h-[24px] opacity-100">
        <Link to="/" className="w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300">Home</Link>
        <div className="relative group">
          <button className="whitespace-nowrapw-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300hover:text-gray-300">Services <span className="text-[12px]">▼</span></button>
          <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md hidden group-hover:block">
            <Link to="/services/web" className="block px-4 py-2 hover:bg-gray-200">Web Development</Link>
            <Link to="/services/seo" className="block px-4 py-2 hover:bg-gray-200">SEO</Link>
          </div>
        </div>
        <Link to="/portfolio" className="w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300">Portfolio</Link>
        <div className="relative group">
    <Link to="/blog" className="w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300 mr-1">
        Blog
    </Link>
    <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md hidden group-hover:block group-focus:block">
        <Link to="/blog/blog-details" className="block px-4 py-2 hover:bg-gray-200">
            Blog Details
        </Link>
    </div>
</div>
        <Link to="/about" className="w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300">About Us</Link>
        <Link to="/contact" className="whitespace-nowrap w-[88px] h-[24px] opacity-100 text-[20px] font-medium leading-auto hover:text-gray-300">Contact Us</Link>
      </div>

      {/* Get in Touch Button */}
      {/* <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg hidden md:block">
        Get in Touch
      </Button> */}

      {/* Mobile Menu */}
      {/* <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>
      </div> */}

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#157B6C] text-white p-4 space-y-4 shadow-md md:hidden">
          <Link to="/" className="block">Home</Link>
          <Link to="/services" className="block">Services</Link>
          <Link to="/portfolio" className="block">Portfolio</Link>
          <Link to="/blog" className="block">Blog</Link>
          <Link to="/about" className="block">About Us</Link>
          <Link to="/contact" className="block">Contact Us</Link>
          {/* <Button className="w-full bg-green-500 hover:bg-green-600">Get in Touch</Button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

