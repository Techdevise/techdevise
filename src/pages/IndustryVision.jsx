import healthcare from "../assets/healthcare.png"
import fitness from "../assets/fitness.png"
import real from "../assets/real.png"
import media from "../assets/media.png"
import education from "../assets/education.png"
import entertainment from "../assets/entertainment.png"
import eweb from "../assets/eweb.png"
import ewebsite from "../assets/ewebsite.png"
import arvr from "../assets/arvr.png"

const IndustryVision = () => {
  return (
    <div className="bg-[#061611] text-white mx-auto py-12 px-8 w-full max-w-[1680px]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left side - Title */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold text-48 leading-tight text-[#8CBEB7] w-[683]">
            A Seamless Vision that Adapts to Every Industry's Demands
          </h1>
          <p className="w-[725] h-[102] font-Montserrat font-bold text-20 text-[#ffffff] mt-10">We deliver flexible and innovative IT solutions tailored to meet the evolving needs of various industries, ensuring efficiency, scalability, and long-term success.</p>
        </div>

        {/* Right side - Grid layout */}
        <div className="md:w-1/2 grid grid-cols-3 gap-4 h-full">
          <div className="col-span-1 row-span-3 relative group overflow-hidden rounded-lg h-full">
            <img
              src={healthcare || "/placeholder.svg"}
              alt="Healthcare"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">Healthcare</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={fitness || "/placeholder.svg"}
              alt="Fitness"
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">Fitness</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={eweb || "/placeholder.svg"}
              alt="Real Estate"
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">Real Estate</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={eweb || "/placeholder.svg"}
              alt="Social Media"
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">Social Media</p>
            </div>
          </div>

          <div className="col-span-1.5 relative group overflow-hidden rounded-lg">
            <img
              src={eweb || "/placeholder.svg"}
              alt="Education"
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">Education</p>
            </div>
          </div>
          <div className="col-span-1.5 relative group overflow-hidden rounded-lg">
            <img
              src={eweb || "/placeholder.svg"}
              alt="Entertainment"
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">Entertainment</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={eweb || "/placeholder.svg"}
              alt="E-commerce"
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">E-commerce</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={eweb || "/placeholder.svg"}
              alt="E-commerce"
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">E-commerce</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={eweb || "/placeholder.svg"}
              alt="E-commerce"
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">E-commerce</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={eweb || "/placeholder.svg"}
              alt="AR/VR"
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">AR/VR</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[-220px] flex flex-col md:flex-row items-start gap-8">
  <div className="bg-[#0a211b] rounded-lg p-8 md:w-1/2">
    <h2 className="text-3xl font-semibold mb-4 mt-[-20px]"> 
      Fuel Success in a Digital-First World with <span className="text-[#8CBEB7]">300+</span> Visionaries.
    </h2>
    <div className="bg-white rounded-lg p-6 inline-block mt-4">
      <button className="text-[#0a6e58] font-medium text-xl flex items-center gap-3">
        Let's Innovate Together
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="">
          <path
            d="M13 5L20 12L13 19"
            stroke="#0a6e58"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M4 12H20" stroke="#0a6e58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default IndustryVision

