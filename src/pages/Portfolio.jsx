
import React from 'react';
import Navbar from '../layout/Navbar';
import LocationSection from './LocationSection';

function Portfolio() {
    return (
        <div>
            <Navbar style={{ backgroundColor: 'white', color: 'black' }} />
            <div className='flex items-center justify-center font-Montserrat text-[64px] font-bold opacity-100 text-[#000000] mt-[200px]'>
    <h1>Coming soon Portfolio page</h1>
</div>
            
            <LocationSection />
            <div className="relative text-white py-12 px-6 md:px-20">
                {/* <Footer /> */}

            </div>
        </div>
    );
}

export default Portfolio;