import React from 'react';
import Group from '../assets/Group 1.png';
import Rectangle from '../assets/Rectangle 14.png';


function ServiceCard({ title, description, imgSrc, bgColor }) {
  return (
    <div className={`p-6 rounded-lg ${bgColor}`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <a className="text-white font-bold flex items-center" href="#">
        More information
        <i className="fas fa-arrow-circle-right ml-2"></i>
      </a>
      <img className="mt-4" src={imgSrc} alt={`Illustration of ${title}`} width="300" height="200" />
    </div>
  );
}

function Homepage() {
  return (
    <div className="relative w-[1920px] min-h-screen bg-no-repeat bg-center bg-cover" 
         style={{ backgroundImage: `url(${Group})` }}>
      
      {/* Main Content Section */}
      <div className="relative z-10 left-[114px] top-[300px] w-[911px] pb-[100px]">
        {/* Badges Section */}
        <div className="flex gap-4 p-4">
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

        {/* Headings Section */}
        <h1 className="text-[45px] leading-tight text-white mt-4 max-w-[911px]">
          Expert Development Services for you
        </h1>

        <div className="mt-8 mb-12">
          <h2 className="text-[96px] leading-none font-extrabold text-[#EDF5F3]">
            <span className="text-[#D4E7E4]">Digital</span>{' '}
            <span className="text-[#8CBEB7]">marketing</span>
          </h2>
        </div>

        {/* Graphic Element */}
        <div className="absolute left-[1100px] top-[190px] w-[541.86px] h-[358.86px] z-0">
          <img src="/src/assets/Group 20.png" alt="Design Element" 
               className="w-full h-full object-contain opacity-100" />
        </div>

        {/* CTA Button */}
        <button className="relative z-20 border border-white text-white px-[24px] py-[20px] rounded-[10px] 
                          font-[Archivo] text-[20px] font-semibold flex items-center gap-2 
                          w-[279px] h-[70px] mt-[50px] hover:bg-white hover:text-black 
                          transition-colors duration-300">
          Consult Our Experts
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Trusted By Section */}
      <div className="relative z-10 w-full mt-[340px] h-[166px] bg-cover flex items-center px-[120px]" 
           style={{ backgroundImage: `url(${Rectangle})` }}>
        <div className="w-[272px] h-[72px] flex items-center gap-[10px]">
          <div>
            <p className="text-white font-semibold text-lg">Trusted By</p>
            <span className="text-gray-400 font-semibold text-lg">Our global clients network</span>
          </div>
          <div className="w-[1px] h-[40px] bg-gray-600"></div>
        </div>

        {/* Logos Section */}
        <div className="flex items-center gap-10 ml-20">
          <img src="/src/assets/grapho.png" alt="Grapho" className="h-10 w-auto" />
          <img src="/src/assets/emblem.png" alt="Emblem" className="h-10 w-auto" />
          <img src="/src/assets/iconic.png" alt="Iconic" className="h-10 w-auto" />
          <img src="/src/assets/optimal.png" alt="Optimal" className="h-10 w-auto" />
          <img src="/src/assets/vectra.png" alt="Vectra" className="h-10 w-auto" />
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 w-[1676px] mx-auto mt-[50px] h-[597px] rounded-[20px_40px_60px_80px] overflow-hidden bg-[#061611]">
        <img 
          src="/src/assets/Group 58.png" 
          alt="About Tech Devise" 
          className="w-full h-full object-cover rounded-[40px]" 
        />
      </div>

      {/* Experience Section */}
      <div className="relative w-[1664px] h-[583px] mx-auto px-4 py-8">
  {/* Title & Description */}
  <div className="text-left max-w-2xl">
    <h1 className="text-5xl font-extrabold text-[#A3E4C5]">Experience</h1>
    <p className="mt-4 text-lg text-gray-300 leading-relaxed">
      With years of experience in the IT industry, we have successfully delivered cutting-edge software solutions, 
      web and mobile applications, and enterprise-grade systems. Our expertise spans various technologies, ensuring 
      innovative, scalable, and secure digital solutions tailored to your business needs.
    </p>
  </div>

  {/* Grid Container */}
  <div className="grid grid-cols-3 gap-[97px] mt-12">
    {/* Experience Card */}
    <div className="bg-[#4CAF7A] text-black p-6 text-center w-[328px] h-[270px] opacity-100 rounded-[26px] relative">
      <p className="text-4xl font-extrabold">10+</p>
      <div className="absolute bottom-0 left-0 right-0 bg-[#BFEAD2] py-4 rounded-b-2xl">
        <p className="text-lg font-medium">Years of Experience</p>
      </div>
    </div>

    {/* Clients Card */}
    <div className="bg-[#E8F3BA] text-black p-6 text-center w-[328px] h-[270px] opacity-100 rounded-[26px] p-8 relative">
      <p className="text-4xl font-extrabold">500+</p>
      <div className="absolute bottom-0 left-0 right-0 bg-[#F7FAD9] py-4 rounded-b-2xl">
        <p className="text-lg font-medium">Clients</p>
      </div>
    </div>

    {/* Clients Duplicate */}
    <div className="bg-[#96E3DC] text-black p-6 text-center w-[328px] h-[270px] opacity-100 rounded-[26px] p-8 relative">
      <p className="text-4xl font-extrabold">500+</p>
      <div className="absolute bottom-0 left-0 right-0 bg-[#CDE9E6] py-4 rounded-b-2xl">
        <p className="text-lg font-medium">Clients</p>
      </div>
    </div>

    {/* Countries Card */}
    <div className="bg-[#A5D1F3] text-black p-6 text-center w-[328px] h-[270px] opacity-100 rounded-[26px] p-8 relative">
      <p className="text-4xl font-extrabold">20+</p>
      <div className="absolute bottom-0 left-0 right-0 bg-[#D1E8FB] py-4 rounded-b-2xl">
        <p className="text-lg font-medium">Countries</p>
      </div>
    </div>

    {/* Clients Card */}
    <div className="bg-[#F5A8B8] text-black p-6 text-center w-[328px] h-[270px] opacity-100 rounded-[26px] p-8 relative">
      <p className="text-4xl font-extrabold">500+</p>
      <div className="absolute bottom-0 left-0 right-0 bg-[#FCD6DD] py-4 rounded-b-2xl">
        <p className="text-lg font-medium">Clients</p>
      </div>
    </div>

    {/* Countries Duplicate */}
    <div className="bg-[#E98E86] text-black p-6 text-center w-[328px] h-[270px] opacity-100 rounded-[26px] p-8 relative">
      <p className="text-4xl font-extrabold">20+</p>
      <div className="absolute bottom-0 left-0 right-0 bg-[#F6B9B5] py-4 rounded-b-2xl">
        <p className="text-lg font-medium">Countries</p>
      </div>
    </div>
  </div>

  {/* Rotated "Experience" Text */}
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[1680px] md:w-[985px]">
    <h1 className="text-5xl font-extrabold text-[#A3E4C5] rotate-90">Experience</h1>
  </div>
</div>
<div className="container mx-auto p-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-500">Our Services</h1>
            <p className="text-lg mt-4">
              At Tech Devise, we provide cutting-edge IT solutions designed to drive innovation, efficiency, and security for businesses of all sizes. Our expertise spans across multiple domains, ensuring that your technology needs are met with precision and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              title="Website Development"
              description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
              imgSrc="https://storage.googleapis.com/a1aa/image/Ud8B_RoDbiW0DS_UCSEFjIf9y-tcV5mFKJqxIM9NKzM.jpg"
              bgColor="bg-green-500"
            />
            <ServiceCard
              title="Digital Marketing"
              description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
              imgSrc="https://storage.googleapis.com/a1aa/image/fyLosHvsXymkrWKrd3jFVdQoPD25BjQc8LeYHVE3yTA.jpg"
              bgColor="bg-yellow-500"
            />
            <ServiceCard
              title="E-commerce Website"
              description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
              imgSrc="https://storage.googleapis.com/a1aa/image/UZYClXveW99vbLDgi6UxkgdUR2tGb3_s3OmIH-VtMP8.jpg"
              bgColor="bg-teal-500"
            />
            <ServiceCard
              title="Quality Analysis"
              description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
              imgSrc="https://storage.googleapis.com/a1aa/image/kWCR8QLSQEV1tijNlmOXISca8IiIkQblfrGDCZwY60k.jpg"
              bgColor="bg-blue-500"
            />
            <ServiceCard
              title="Mobile Application development"
              description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
              imgSrc="https://storage.googleapis.com/a1aa/image/zy3l7HvDnWvyFZrns0APYq-2ChR_hrxdE6-MntSvRh0.jpg"
              bgColor="bg-pink-500"
            />
            <ServiceCard
              title="UI/UX Design"
              description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
              imgSrc="https://storage.googleapis.com/a1aa/image/UPQnpQxlQs3SymvYFzWp1_0j_8q1YszfBPB8-kxQzk4.jpg"
              bgColor="bg-red-500"
            />
          </div>
        </div>


      {/* Bottom Spacer */}
      <div className="h-[100px]"></div>
    </div>
  );
}

export default Homepage;