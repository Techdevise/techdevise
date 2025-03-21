import { useEffect, useState, useRef } from 'react';

const ExperienceCard = ({ targetValue, label, bgColor, highlightColor }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 5000; 
          const increment = targetValue / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
              setCount(targetValue);
              clearInterval(counter);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [targetValue]);

  return (
    <div
      ref={cardRef}
      className={`${bgColor} w-[328px] h-[270px] rounded-[26px] p-6 relative transition-transform duration-300 hover:scale-105 shadow-lg`}
    >
      <span className="text-[56px] font-black">{count}+</span>
      <div
        className={`${highlightColor} h-[60px] absolute bottom-0 left-0 right-0 rounded-b-[26px] flex items-center justify-center`}
      >
        <span className="text-[24px] font-semibold">{label}</span>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="relative z-10 mx-auto mt-[50px] w-full max-w-[1670px] h-auto opacity-100 px-4 py-8 bg-[#000000]">
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row gap-8 h-full">
        {/* Left Column - Text & Primary Cards */}
        <div className="w-full md:w-[45%] flex flex-col">
          {/* Text Section */}
          <div className="mb-16">
            <h1 className="text-[56px] font-black text-[#A3E4C5] leading-none">Experience</h1>
            <p className="mt-8 text-[20px] text-gray-300 leading-relaxed max-w-[550px]">
              With years of experience in the IT industry, we have successfully delivered cutting-edge software solutions,
              web and mobile applications, and enterprise-grade systems. Our expertise spans various technologies, ensuring
              innovative, scalable, and secure digital solutions tailored to your business needs.
            </p>
          </div>

          {/* Primary Cards Column */}
          <div className="flex flex-col md:flex-row gap-x-8 gap-y-8">
            <ExperienceCard targetValue={10} label="Years of Experience" bgColor="bg-[#4CAF7A]" highlightColor="bg-[#BFEAD2]" />
            <ExperienceCard targetValue={500} label="Clients" bgColor="bg-[#E8F3BA]" highlightColor="bg-[#F7FAD9]" />
          </div>
        </div>

        {/* Right Column - Secondary Cards Grid */}
        <div className="w-full md:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          <ExperienceCard targetValue={500} label="Clients" bgColor="bg-[#96E3DC]" highlightColor="bg-[#CDE9E6]" />
          <ExperienceCard targetValue={20} label="Countries" bgColor="bg-[#A5D1F3]" highlightColor="bg-[#D1E8FB]" />
          <ExperienceCard targetValue={500} label="Clients" bgColor="bg-[#F5A8B8]" highlightColor="bg-[#FCD6DD]" />
          <ExperienceCard targetValue={20} label="Countries" bgColor="bg-[#E98E86]" highlightColor="bg-[#F6B9B5]" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;