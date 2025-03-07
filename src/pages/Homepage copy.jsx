import React from 'react';
import Group from '../assets/Group 1.png';
import Rectangle from '../assets/Rectangle 14.png';
function Homepage() {
  return (
    <div className="min-h-screen w-[1920px] h-[849px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${Group})` }}>
      {/* Main Container */}
      <div className="absolute left-[114px] top-[300px] w-[911px] h-[268px] opacity-100 flex flex-col gap-8 items-start">
        <div className="flex gap-4 p-4">
          {/* Google Partner */}
          <div className="bg-white rounded-lg shadow-md p-5 flex items-center gap-2 w-[229px] h-[56px]">
            <img
              src="/src/assets/Social Icons.png"
              alt="Google Partner"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold">
              <span className="text-gray-600">Google</span>{' '}
              <span className="text-blue-600">Partner</span>
            </span>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 flex items-center gap-2 w-[229px] h-[56px]">
            <img
              src="/src/assets/Frame 4.png"
              alt="Google Analytics"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold">
              <span className="text-gray-600">Google</span>{' '}
              <span className="text-green-600">Analytics</span>
            </span>
          </div>
        </div>


        <h1 className="h-[49px] font-regular text-[45px] leading-auto text-[#FFFFFF] opacity-100 max-w-[911px] mt-[-20px]">
          Expert Development Services for you
        </h1>

        <div className="pl-[0px] relative]">
          <h2 className="w-[911px] h-[117px] opacity-100 font-extrabold text-[96px] leading-auto tracking-[0%] text-[#EDF5F3] mt-[-30px]">
            <span className="text-[#D4E7E4]">Digital</span>{' '}
            <span className="text-[#8CBEB7]">marketing</span>
          </h2>
        </div>

        <div className="absolute left-260 top-[190px] w-[541.86px] h-[358.86px]">
          <img
            src="/src/assets/Group 20.png"
            alt="Design Element"
            className="w-full h-full object-contain opacity-100"
          />
        </div>



        <button
          className="border border-white text-white px-[24px] py-[20px] rounded-[10px] 
         font-[Archivo] text-[20px] font-semibold flex items-center gap-2 
         w-[279px] h-[70px] mt-40 justify-center transition-colors duration-300 
         hover:bg-white hover:text-black"
        >
          Consult Our Experts
          <span className="text-xl">→</span>
        </button>

      </div>
      <div
        className="absolute left-0 top-[845px] w-full h-[166px] bg-no-repeat bg-center bg-cover flex items-center px-[120px]"
        style={{ backgroundImage: `url(${Rectangle})`, backgroundSize: 'cover' }}
      >
        {/* Left Text Section */}
        <div
          className="absolute left-[px] top-[0px] w-[272px] h-[72px] flex items-center gap-[10px] opacity-100"
        >
          <div>
            <p className="text-white font-semibold text-lg">Trusted By</p>
            <span className="text-white text-gray-400 font-semibold text-lg">Our global clients network</span>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-[40px] bg-gray-600"></div>
        </div>


        {/* Logos Section */}
        <div 
  className="left-[600px] top-[px] w-[1492px] h-[161px] flex items-center gap-10 opacity-100">
  <img src="/src/assets/grapho.png" alt="Grapho" className="h-10 w-auto" />
  <img src="/src/assets/emblem.png" alt="Emblem" className="h-10 w-auto" />
  <img src="/src/assets/iconic.png" alt="Iconic" className="h-10 w-auto" />
  <img src="/src/assets/optimal.png" alt="Optimal" className="h-10 w-auto" />
  <img src="/src/assets/vectra.png" alt="Vectra" className="h-10 w-auto" />
</div>
</div>
{/* About Section */}
<div 
  className="absolute left-[121px] top-[1064px] w-[1676px] h-[597px] 
             rounded-[20px_40px_60px_80px] overflow-hidden" // Adjust radii as needed
  style={{
    borderRadius: '20px 40px 60px 80px', // Mixed corner radius
    background: 'linear-gradient(145deg, #061611 0%, #0A1F1A 100%)'
  }}
>
  {/* Content Container */}
  <div className="p-16 h-full flex flex-col justify-between">
    {/* Section Heading */}
    <div className="mb-8">
      <h2 className="text-[48px] font-bold text-white mb-4">About</h2>
      <h3 className="text-[32px] text-[#8CBEB7] font-semibold">
        Innovating the Future of Technology
      </h3>
    </div>

    {/* Content Columns */}
    <div className="flex gap-12">
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <p className="text-[20px] text-[#EDF5F3] leading-relaxed">
          At Tech Devise, we are passionate about delivering innovative technology solutions that drive business success. 
          With a team of highly skilled developers, designers, and IT experts, we specialize in creating cutting-edge 
          software, web applications, mobile apps, and enterprise solutions tailored to meet your unique needs.
        </p>
        
        <p className="text-[20px] text-[#EDF5F3] leading-relaxed">
          Our mission is to empower businesses with scalable, secure, and efficient digital solutions that enhance 
          productivity and growth. We stay ahead of the curve by leveraging the latest technologies, industry best 
          practices, and a customer-centric approach to ensure seamless digital transformation.
        </p>
      </div>

      {/* Image Container */}
      <div className="flex-1 relative">
        <img 
          src="/src/assets/about-image.png" // Replace with your image path
          alt="About Tech Devise"
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Homepage;