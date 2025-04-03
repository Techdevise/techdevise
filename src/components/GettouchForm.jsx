import { X } from "lucide-react"
import Alexjenson from "../assets/Alexjenson.svg"
import Mobileshowcase from "../assets/Mobileshowcase.svg"

const GettouchForm = () => {
  return (
    <div className="flex w-[1200px] h-[830px] bg-white fixed inset-20 flex items-center justify-center z-50">
      {/* Left Section - Teal Background */}
      <div className="w-[530px] h-[800px] bg-[#157B6C] text-white p-12 relative">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center leading-tight">
            Turn Your Idea into a <br /> Profit Making App
          </h1>
          <p className="text-center text-white mt-4 text-lg">
            Reach out to us and start your digital transformation <br /> journey today.
          </p>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16">
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-teal-600">
              <img
                src={Alexjenson}
                alt="Alex Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Alex Johnson</h3>
              <p className="text-teal-200">Company Name: Seoproductief</p>
              <p className="text-teal-200">Designation: Head, Marketing</p>
            </div>
            <div className="text-8xl text-teal-500 font-serif absolute right-16 top-56">"</div>
          </div>
          <p className="mt-4 text-lg text-white">
            We developed a great partnership with Techdevise. Their dedication to our website is evident in all aspects
            of the site. We appreciate their attention to detail and creative approach in bringing our new exhibit to
            life online.
          </p>
        </div>

        {/* App Screenshots */}
        <div className="flex justify-center mt-12 gap-2">
          <div className="w-32 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img src={Mobileshowcase} alt="App Screenshot 1" className="w-full h-[122px]" />
          </div>
          {/* <div className="w-32 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img src="/placeholder.svg?height=240&width=128" alt="App Screenshot 2" className="w-full" />
          </div> */}
          {/* <div className="w-32 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img src="/placeholder.svg?height=240&width=128" alt="App Screenshot 3" className="w-full" />
          </div> */}
        </div>

        {/* Page Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="text-xl font-medium">1/4</div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 p-12 relative">
        <button className="absolute top-8 right-8 bg-teal-700 text-white rounded-full p-2">
          <X size={24} />
        </button>

        <div className="max-w-3xl mx-auto mt-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">Full Name</label>
              <input
                type="text"
                defaultValue="Sunil Dhadwal"
                className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-700 text-black"
              />
            </div>

            {/* Business Email */}
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">Business Email</label>
              <input
                type="email"
                defaultValue="example@techdevise.com"
                className="w-full text-black border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-700"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">Mobile Number</label>
              <div className="flex">
                <div className="border-b border-gray-300 pb-2 pr-2 flex items-center">
                  <div className="bg-gray-200 px-2 py-1 rounded flex items-center">
                    <span className="text-black">+91</span>
                    <span className="ml-1 text-black">▼</span>
                  </div>
                </div>
                <input
                  type="tel"
                  className="flex-1 border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-700 text-black"
                />
              </div>
            </div>

            {/* Job Title */}
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">Job Title</label>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="text-black">Manager</span>
                <span>▼</span>
              </div>
            </div>

            {/* Launch Timeline */}
            <div className="col-span-2 space-y-2">
              <label className="block text-gray-800 font-medium">When do you want to launch a solution?</label>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="text-black">Immediately</span>
                <span>▼</span>
              </div>
            </div>

            {/* Budget */}
            <div className="col-span-2 space-y-2 mt-4">
              <label className="block text-gray-800 font-medium">Budget</label>
              <div className="flex border-b border-gray-300">
                <div className="flex-1 text-center py-2 border-r border-gray-300 text-black">$5k - $25k</div>
                <div className="flex-1 text-center py-2 border-r border-gray-300 text-teal-700 font-medium">
                  $25k - $50k
                </div>
                <div className="flex-1 text-center py-2 border-r border-gray-300 text-black">$50k - $100k</div>
                <div className="flex-1 text-center py-2 text-black">$100k+</div>
              </div>
            </div>

            {/* Description */}
            <div className="col-span-2 space-y-2 mt-4">
              <label className="block text-gray-800 font-medium">Description</label>
              <textarea
                className="w-full border-b text-black border-gray-300 pb-2 focus:outline-none focus:border-teal-700 min-h-[150px]"
                defaultValue="At GreenLeaf Solutions, we specialize in eco-friendly products that promote sustainability and reduce environmental impact. Our mission is to provide innovative solutions for businesses and consume."
              ></textarea>
            </div>

            {/* Apply Button */}
            <div className="col-span-2 flex justify-end mt-8">
              <button className="bg-teal-700 text-white py-3 px-12 rounded-md text-lg font-medium">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GettouchForm

