import healthcare from "../assets/healthcare.png"
import fitness from "../assets/fitness.png"
import Realstate from "../assets/Realstate.png"
import Socailmedia from "../assets/Socailmedia.png"
import Educate from "../assets/Educate.png"
import Entertainmentt from "../assets/Entertainmentt.png"
import ecommerce from "../assets/eweb.png"
import AVR from "../assets/AVR.png"

const IndustryVision = () => {
  return (
    <div className="bg-[#061611] text-white mx-auto py-12 px-8 w-full max-w-[1680px] relative overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-32">
        {/* Left side - Title */}
        <div className="lg:w-[45%] max-w-[683px]">
          <h1
            style={{
              background: "linear-gradient(to right, #e0e0e0, #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="text-5xl font-extrabold leading-tight"
          >
            A Seamless Vision that Adapts to Every Industry's Demands
          </h1>
          <p className="font-bold text-xl text-white mt-10 max-w-[725px]">
            We deliver flexible and innovative IT solutions tailored to meet the evolving needs of various industries,
            ensuring efficiency, scalability, and long-term success.
          </p>
        </div>

        {/* Right side - Image Grid */}
        <div className="lg:w-[55%]">
          <div className="grid grid-cols-4 grid-rows-3 gap-3">
            {/* Healthcare - Tall image spanning 3 rows */}
            <div className="col-span-1 row-span-3 relative group overflow-hidden rounded-lg">
              <img
                src={healthcare || "/placeholder.svg?height=600&width=200"}
                alt="Healthcare"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">Healthcare</p>
              </div>
            </div>

            {/* Top row - 3 square images */}
            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <img
                src={fitness || "/placeholder.svg?height=180&width=180"}
                alt="Fitness"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">Fitness</p>
              </div>
            </div>

            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <img
                src={Realstate || "/placeholder.svg?height=180&width=180"}
                alt="Real Estate"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">Real Estate</p>
              </div>
            </div>

            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <img
                src={Socailmedia || "/placeholder.svg?height=180&width=180"}
                alt="Social Media"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">Social Media</p>
              </div>
            </div>

            {/* Middle row - 2 wider rectangle images */}
            <div className="col-span-2 relative group overflow-hidden rounded-lg">
              <img
                src={Educate || "/placeholder.svg?height=180&width=360"}
                alt="Education"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">Education</p>
              </div>
            </div>

            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <img
                src={Entertainmentt || "/placeholder.svg?height=180&width=180"}
                alt="Entertainment"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">Entertainment</p>
              </div>
            </div>

            {/* Bottom row - 3 square images */}
            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <img
                src={ecommerce || "/placeholder.svg?height=180&width=180"}
                alt="E-commerce"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">E-commerce</p>
              </div>
            </div>

            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <img
                src={ecommerce || "/placeholder.svg?height=180&width=180"}
                alt="E-commerce"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">E-commerce</p>
              </div>
            </div>

            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <img
                src={AVR || "/placeholder.svg?height=180&width=180"}
                alt="AR/VR"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">AR/VR</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-[#0a211b] rounded-3xl p-6 w-[733px] h-[164] max-w-3xl mt-[-250px]">
  {/* Left Content */}
  <p className="text-white text-lg font-medium">
    Fuel Success in a Digital-First World with <span className="font-bold text-[#8CBEB7]">300+</span> Visionaries.
  </p>

  {/* Button Section */}
  <div className="bg-white rounded-lg px-6 py-3 flex items-center cursor-pointer shadow-md">
    <button className="text-[#0a6e58] font-semibold text-lg flex items-center gap-2">
      Let’s Innovate Together
      <svg width="56" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 5L20 12L13 19" stroke="#0a6e58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12H20" stroke="#0a6e58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
</div>

    </div>

  )
}

export default IndustryVision

