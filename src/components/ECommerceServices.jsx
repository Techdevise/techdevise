import React from "react";
// import mancharacter from "../assets/mancharacter.png";
export default function ECommerceServices() {
    return (
        <div className="w-[1920px] h-[976px] bg-[#F5F5F5] opacity-100 rounded-none flex flex-col items-center justify-center relative"
            style={{ backgroundImage: "url('/path-to-your-image/futuristicbgbanner.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2 className="text-4xl font-bold text-center mb-4">Our E-Commerce Services</h2>
            <p className="text-center text-lg max-w-2xl mb-10">
                We are a team of experts who offer unique and innovative <strong>E-commerce</strong> solutions. 
                If you are looking to take your business digital, our E-commerce services will surely help you 
                to take your business to the next level.
            </p>

            <div className="flex justify-left align-left gap-6">
             
                {[
                    { title: "E-Commerce Development", icon: "🛒" },
                    { title: "Custom E-commerce", icon: "🖥️" },
                    { title: "Responsive Shopping Website", icon: "📱" }
                ].map((service, index) => (
                    <div key={index} className="w-[452px] h-[514px] bg-white p-6 rounded-lg shadow-lg">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-2xl mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">
                            We work from scratch. Our first step is to review your idea, your competitor website 
                            to understand the process, make suggestions for you, discuss the way you want it work. 
                            Once we are done, you will have the complete details of the work process and all 
                            the details of the development work, features, design, etc.
                        </p>
                    </div>
                ))}
            </div>
            {/* <div className="flex items-end">
                    <img src={mancharacter} alt="Character" className="w-[300px] h-auto" />
                </div>
        */}

       
            <div className="absolute bottom-10 left-10 flex space-x-4">
                <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">←</button>
                <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">→</button>
            </div>
        </div>
    );
}
