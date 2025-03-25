export default function TechOfficeImage() {
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 flex justify-center space-x-8 p-6 z-10">
          {/* Location clocks */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
              <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                {/* Clock hands would be here */}
              </div>
            </div>
            <span className="text-xs mt-1">INDIA</span>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
              <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                {/* Clock hands would be here */}
              </div>
            </div>
            <span className="text-xs mt-1">NETHERLANDS</span>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
              <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                {/* Clock hands would be here */}
              </div>
            </div>
            <span className="text-xs mt-1">USA</span>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
              <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                {/* Clock hands would be here */}
              </div>
            </div>
            <span className="text-xs mt-1">CANADA</span>
          </div>
        </div>
  
        <div className="absolute top-24 left-0 right-0 text-center">
          <p className="text-xs">EXPLORE THE WORLD OF TECHNOLOGY WITH</p>
          <p className="text-xl font-bold">TECHDEVISE</p>
        </div>
  
        {/* World map */}
        <div className="absolute top-40 left-0 right-0 flex justify-center">
          <div className="relative w-[400px] h-[200px]">
            {/* World map silhouette would be here */}
            <div className="absolute top-0 left-0 text-[8px]">EUROPE</div>
            <div className="absolute top-10 left-0 text-[8px]">NORTH AMERICA</div>
            <div className="absolute bottom-10 left-10 text-[8px]">SOUTH AMERICA</div>
            <div className="absolute top-20 right-20 text-[8px]">ASIA</div>
            <div className="absolute bottom-0 right-0 text-[8px]">AUSTRALIA</div>
            <div className="absolute bottom-20 left-40 text-[8px]">AFRICA</div>
          </div>
        </div>
  
        {/* Furniture and plants */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="relative w-full flex items-end justify-center pb-8">
            {/* Sofa */}
            <div className="w-64 h-32 bg-amber-300 rounded-md mx-auto"></div>
  
            {/* Plants */}
            <div className="absolute -left-10 bottom-0 w-20 h-40 flex items-end">
              <div className="w-full h-32 bg-green-600 rounded-t-full"></div>
            </div>
            <div className="absolute -right-10 bottom-0 w-20 h-40 flex items-end">
              <div className="w-full h-32 bg-green-600 rounded-t-full"></div>
            </div>
  
            {/* Tables */}
            <div className="absolute bottom-10 left-32 w-16 h-16">
              <div className="w-full h-8 bg-white rounded-full"></div>
              <div className="w-6 h-8 bg-amber-900 mx-auto"></div>
            </div>
            <div className="absolute bottom-10 right-32 w-16 h-16">
              <div className="w-full h-8 bg-white rounded-full"></div>
              <div className="w-6 h-8 bg-amber-900 mx-auto"></div>
            </div>
          </div>
        </div>
  
        {/* Wooden cabinet */}
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-amber-800"></div>
      </div>
    )
  }
  
  