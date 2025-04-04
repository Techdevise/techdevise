import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
// import dropdownimg from "../assets/dropdownimg.png" 
import websitedevelopment from "../assets/websitedevelopment.png"
import Seo from "../assets/Seo.png"
import Digitalmarketing from "../assets/Digitalmarketing.png"
import Mobiledevelopment from "../assets/Mobiledevelopment.png"
import Qualityanay from "../assets/Qualityanay.png"
import Blockchaindevelopment from "../assets/Blockchaindevelopment.png"
import Mobileimage from "../assets/Mobileimage.png"

const ServicesDropdown = ({ isVisible, darkMode }) => {
  if (!isVisible) return null

  return (
    <div className="absolute top-[82px] left-60 mt-10 w-[1433px] h-[395px] bg-white shadow-lg rounded-b-lg flex overflow-hidden z-50">
      {/* Left section - Teal background with description */}
      <div className="w-[429px] h-full bg-[#0a6e5c] text-white p-6 relative">
        <h2 className="text-3xl font-semibold font-montserrat mb-3 mt-5">Services</h2>
        <p className="text-[16px] font-Montserrat leading-tight mb-4">
          Secure, optimize, and manage your IT with expert solutions in cybersecurity, cloud, networking, and digital
          transformation.
        </p>

        {/* Team illustration at the bottom */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <img src={Mobileimage} alt="Team working on computers" className="w-[197px] h-[185px]" />
        </div>
      </div>

      {/* Right section - White background with services */}
      <div className="flex-1 flex">
        {/* Left column of services */}
        <div className="w-1/2 p-8 border-r border-gray-100">
        <Link to="/services/mobile-app-development" className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full bg-[#e6f7f4] flex items-center justify-center mr-3">
            <img src={Mobiledevelopment} alt="website development" className="w-18 h-18" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c]">Mobile Application Development</span>
          </Link>
          <Link to="/services/digital-marketing" className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full bg-[#e6f7f4] flex items-center justify-center mr-3">
            <img src={Digitalmarketing} alt="website development" className="w-18 h-18" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c]">Digital Marketing</span>
          </Link>
          <Link to="/services/website-development" className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full bg-[#e6f7f4] flex items-center justify-center mr-3">
            <img src={websitedevelopment} alt="website development" className="w-18 h-18" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c]">Website Development</span>
            <ArrowRight className="ml-2 h-4 w-4 text-[#0a6e5c]" />
          </Link>

          <Link to="/services/quality-analysis" className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full bg-[#fde8e8] flex items-center justify-center mr-3">
            <img src={Qualityanay} alt="website development" className="w-18 h-18" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c]">Quality Analysis</span>
          </Link>

          {/* <div className="border-t border-b border-dashed border-[#0a6e5c] my-3"></div> */}

          <Link to="/services/blockchain-development" className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full bg-[#e0f2fe] flex items-center justify-center mr-3">
            <img src={Blockchaindevelopment} alt="website development" className="w-18 h-18" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c]">Blockchain Development</span>
          </Link>
        </div>

        {/* Right column of services */}
        <div className="w-1/2 p-8">
          <Link to="/services/ecommerce" className="whitespace-nowrap block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]">
          Mobile Application Development 01 
          </Link>

          <Link to="/services/custom-website" className="block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]">
          Mobile Application Development 02
          </Link>

          <Link to="/services/cms-development" className="block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]">
          Mobile Application Development 03
          </Link>

          <Link to="/services/maintenance" className="block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]">
          Mobile Application Development 04
          </Link>

          <Link to="/services/maintenance-plus" className="block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]">
          Mobile Application Development 05
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesDropdown

