import { useState } from "react";
import Alex from "../assets/Alex.svg"
import Sarah from "../assets/Sarah.svg"
import Michael from "../assets/Michael.svg"
import Jessica from "../assets/Jessica.svg"

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Play = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: Alex,
  },
  {
    id: 2,
    name: "Sarah Miller",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    image: Sarah,
  },
  {
    id: 3,
    name: "Michael Chen",
    text: "There are many variations of passages of Lorem Ipsum available.",
    image: Michael,
  },
  {
    id: 4,
    name: "Jessica Wong",
    text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested and .",
    image: Jessica,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getIndex = (offset) => {
    return (activeIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <div className="w-[1680px] h-[504px] ml-[110px] ">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold mb-16 text-[#c5e4d9]">
          What our customers say
          <br />
          about us
        </h2>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-[-70px]">
          <div className="flex gap-2">
            <button onClick={prevTestimonial} className="p-2 rounded-full border border-[#c5e4d9] text-[#c5e4d9]">
              <ChevronLeft />
            </button>
            <button onClick={nextTestimonial} className="p-2 rounded-full bg-[#0d6e52] text-white">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Testimonial Layout */}
        <div className="flex items-center gap-8">
          {/* Left side testimonial preview */}
          <div className="hidden md:block w-1/6 bg-[#0a2a1e] p-4 rounded-lg">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={testimonials[getIndex(-1)].image || "/placeholder.svg"}
                alt={testimonials[getIndex(-1)].name}
                className="w-full aspect-[3/4] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 rounded-full p-2">
                  <Play />
                </div>
              </div>
            </div>
          </div>

          {/* Main testimonial */}
          <div className="flex-1 bg-[#0a2a1e] rounded-lg p-8 flex flex-col md:flex-row gap-8 border border-[#0d6e52]">
            {/* User Image */}
            <div className="md:w-1/4">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 rounded-full p-2">
                    <Play />
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="md:w-3/4 relative">
              <h3 className="text-3xl font-bold text-white mb-4">{testimonials[activeIndex].name}</h3>
              <p className="text-white text-lg leading-relaxed mb-6">{testimonials[activeIndex].text}</p>

              {/* Star Rating */}
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Right side testimonials */}
          <div className="hidden md:flex w-1/3 gap-8">
            {[1, 2].map((offset) => (
              <div key={offset} className="w-1/2 bg-[#0a2a1e] p-4 rounded-lg">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={testimonials[getIndex(offset)].image || "/placeholder.svg"}
                    alt={testimonials[getIndex(offset)].name}
                    className="w-full aspect-[3/4] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-2">
                      <Play />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
