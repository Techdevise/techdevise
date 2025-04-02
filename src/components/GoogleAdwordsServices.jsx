import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GoogleAdwordsServices() {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-[1674px] h-[612px] bg-[#F5F7FB] rounded-[15px] p-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side content */}
          <div className="flex flex-col justify-center">
            <h2 className="w-[583px] text-[48px] font-extrabold font-Montserrat text-black mb-6">
              The Services we offer
              <br />
              under Google
              <br />
              Adwords
            </h2>
            <p className="text-base font-Montserrat text-black max-w-md">
              We all know that the internet is flooded with millions of websites. Hence, getting your website to be
              noticed among this huge crowd is a challenging task. But nothing is impossible. With the help from our
              Google Adword experts, you can achieve the desired traffic to your website and improve its visibility. Our
              team will assist you in creating result-oriented Google Adword campaigns that will take your business to
              the next level.
            </p>
          </div>

          {/* Right side content - Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Competitor Campaign Analysis Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#E6F7FF" />
                  <path d="M8 18H12V24H8V18Z" fill="#0EA5E9" />
                  <path d="M14 12H18V24H14V12Z" fill="#0EA5E9" />
                  <path d="M20 8H24V24H20V8Z" fill="#0EA5E9" />
                </svg>
              </div>
              <h3 className="text-[28px] font-Montserrat text-black font-semibold mb-2">
                Competitor
                <br />
                Campaign Analysis
              </h3>
              <p className="text-[16px] font-Montserrat text-black">
                Our expert team knows how you can get the best results from your Google Adword campaigns. We offer a
                detailed competitor analysis to know where your competitor stands in Google rankings. Hence,
                accordingly, we formulate the best Google Adword campaign to get the highest ROI.
              </p>
            </div>

            {/* Landing Page Creation Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#E6FFEF" />
                  <rect x="8" y="8" width="16" height="16" rx="2" stroke="#10B981" strokeWidth="2" />
                  <path d="M8 12H24" stroke="#10B981" strokeWidth="2" />
                  <path d="M12 16H20" stroke="#10B981" strokeWidth="2" />
                  <path d="M12 20H18" stroke="#10B981" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-[28px] font-Montserrat text-black font-semibold mb-2">
                Landing Page
                <br />
                Creation
              </h3>
              <p className="text-[16px] font-Montserrat text-black">
                Our expert team understands that only investing in Google Adwords is not enough to ensure conversions.
                Hence, we provide unique and out of the box landing page and advertisement services to increase the
                conversion rate.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-sm">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

