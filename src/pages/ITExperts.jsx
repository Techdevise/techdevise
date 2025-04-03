import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import It from "../assets/It.png"

const experts = [
    {
        image: It,
    },
    {
        image: It,
    },
    {
        image: It,
    },
];

function ITExperts() {
    const carouselRef = useRef(null);

    const handleScroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 300;
            if (direction === 'left') {
                carouselRef.current.scrollLeft -= scrollAmount;
            } else {
                carouselRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <div
            className="mx-auto mt-[30px] w-[1672px] h-[447px] opacity-100 flex items-center justify-between">
            {/* Left Side Text */}
            <div className="flex-1 pr-12">
                <div className="relative">
                    <h2 className="text-left text-4xl font-semibold text-green-700 mb-2">
                        Meet Our IT Experts
                    </h2>
                    <h1 className="w-[708px] font-montserrat font-bold text-5xl font-[#00000] opacity-100">
                        Driving Innovation Forward
                    </h1>
                    <p className='w-[618px] font-montserrat text-[#000000] font-bold opacity-100 mt-7'>Get an inside look at our talented IT team, the minds behind our cutting-edge solutions. Their expertise, dedication, and innovation power our success, ensuring seamless technology solutions for business worldwide.</p>
                </div>
                <div className="flex space-x-2 mt-6">

                    <button
                        onClick={() => handleScroll('left')}
                        className="bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-green-800"
                    >
                        <FaArrowLeft />
                    </button>

                    <button
                        onClick={() => handleScroll('right')}
                        className="bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-green-800"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>


            <div
                ref={carouselRef}
                className="flex-1 flex overflow-x-scroll scrollbar-hide space-x-4"
                style={{ scrollBehavior: 'smooth' }}
            >
                {experts.map((expert, index) => (
                    <div
                        key={index}
                        className="min-w-[250px] h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md"
                    >
                        <img
                            src={expert.image}
                            alt={`Expert ${index + 1}`}
                            className="w-full h-full object-cover"
                        />

                        {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"> */}
                            {/* <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                ▶️
                            </button> */}
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ITExperts;
