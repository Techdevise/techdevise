import React from 'react';
import Navbar from '../layout/Navbar';
import Digitalbanner from '../assets/Digitalbanner.png'

function DigitalMarketing() {
    return (
        <div className="bg-white">
            <Navbar style={{ backgroundColor: 'white', color: 'black' }} />
            <div 
                className="w-[1920px] h-[1048px] bg-[#061611] bg-cover bg-center flex items-center justify-center text-white font-Montserrat text-[48px] font-bold" style={{ backgroundImage:  `url(${Digitalbanner})`,
                                 }}>
         <h1 className='font-Montserrat text-[62px] font-extrabold opacity-100 text-[#ffffff] mt-[200px] ml-left'>Renowned <br /> SEO Experts</h1>
</div>

       
         
            <div className="relative text-white py-12 px-6 md:px-20">
                {/* <Footer /> */}

            </div>
        </div>
    );
}

export default DigitalMarketing;
