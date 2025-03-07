import React from 'react';

function ExperienceSection() {
  return (
    <div
      // Absolute positioning & size
      className="absolute left-[121px] top-[1787px] w-[1664px] h-[583px] opacity-100
                 rounded-[20px_40px_60px_80px] 
                 bg-gradient-to-r from-[#0F2823] to-[#0C1D18]"
    >
      {/* Inner container for spacing */}
      <div className="p-8 h-full flex flex-col">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
        
        {/* Description */}
        <p className="text-white text-lg mb-8 max-w-2xl">
          With years of experience in the IT industry, we have successfully 
          delivered cutting-edge software solutions, web and mobile applications, 
          and enterprise-grade systems. Our expertise spans various technologies, 
          ensuring innovative, scalable, and secure digital solutions tailored 
          to your business needs.
        </p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg" 
               style={{ backgroundColor: '#CDEAC0' }}>
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-lg font-semibold">Years of Experience</p>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg"
               style={{ backgroundColor: '#F9F2D5' }}>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-lg font-semibold">Clients</p>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg"
               style={{ backgroundColor: '#FDE2E2' }}>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-lg font-semibold">Projects</p>
          </div>
          
          {/* Card 4 */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg"
               style={{ backgroundColor: '#FDE2E2' }}>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-lg font-semibold">Deliveries</p>
          </div>
          
          {/* Card 5 */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg"
               style={{ backgroundColor: '#CDEAC0' }}>
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-lg font-semibold">Countries</p>
          </div>
          
          {/* Card 6 */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg"
               style={{ backgroundColor: '#F9F2D5' }}>
            <h3 className="text-3xl font-bold">99%</h3>
            <p className="text-lg font-semibold">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
