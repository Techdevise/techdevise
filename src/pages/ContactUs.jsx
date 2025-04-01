import React from 'react';
import Navbar from '../layout/Navbar';
import ContactForm from './ContactForm';
import LocationSection from './LocationSection';
import mapcontact from '../assets/mapcontact.png';

function ContactUs() {
    return (
        <div className="bg-white">
            <Navbar style={{ backgroundColor: 'white', color: 'black' }} />
            <div 
                className="w-[1920px] h-[546px] bg-[#061611] bg-cover bg-center flex items-center justify-center text-white font-Montserrat text-[48px] font-bold"
                style={{ backgroundImage:  `url(${mapcontact})`,
                backgroundSize: "736px 353px",  
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center" }}>
                <h1  style={{
                        display: 'inline-table',
                        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        color: "#157B6C",
                    }}>Contact Us</h1>
                   {/* <p className='font-Montserrat text-[18px] font-semibold mt-4 max-w-[800px] text-center'>
        Like to try our services or discuss your project with our consultant?  
        Feel free to contact us today and we will get back to you at the earliest.
    </p> */}
                    
            </div>

          <div className='flex items-center justify-center mt-10 bg-[#fffff]'>
          <ContactForm />
          </div>
          <div className='mt-10'>
          <LocationSection />
          </div>
            <div className="relative text-white py-12 px-6 md:px-20">
                {/* <Footer /> */}

            </div>
        </div>
    );
}

export default ContactUs;
