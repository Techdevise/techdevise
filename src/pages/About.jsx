import React from 'react'
import Navbar from '../layout/Navbar'
// import Footer from '../layout/Footer'
import TeamShowcase from './TeamShowcase'
import LocationSection from './LocationSection'
import OpenPositions from './OpenPositions'
import TeamSection from './TeamSection'
import ITExperts from './ITExperts'
import teams from "../assets/teams.png";

function About() {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div
                className="relative w-[1675px] h-[812px] mx-auto mt-[142px] mb-[50px] bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: `url(${teams})`,
                }}
            >
                {/* Overlay Text and Content */}
                <div className="absolute bottom-0 left-0 w-full h-[210px] bg-white/80 p-10">
                    <h2 className="text-4xl font-bold text-black mb-4">
                        We Believe in the Power of
                    </h2>
                    <h1 className="text-5xl font-bold text-black">
                        Ideas, Innovation, and People
                    </h1>
                </div>

                {/* Stats Section */}
                <div className="absolute bottom-0 right-0 grid grid-cols-2 gap-4 p-10 bg-[#157B6C] text-white w-[550px] h-[270]">
                    <div>
                        <h3 className="text-3xl font-bold">10</h3>
                        <p className="text-sm">Years of Experience</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">20+</h3>
                        <p className="text-sm">Countries Served</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">20+</h3>
                        <p className="text-sm">Tech Enthusiast</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">20+</h3>
                        <p className="text-sm">Product Delivered</p>
                    </div>
                </div>
            </div>
            <TeamShowcase />
            <OpenPositions />
            <TeamSection />
            <ITExperts />

            <LocationSection />
            <div className="relative text-white py-12 px-6 md:px-20">
                {/* <Footer /> */}

            </div>
        </div>
    )
}

export default About
